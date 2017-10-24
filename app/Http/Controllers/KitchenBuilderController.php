<?php

namespace App\Http\Controllers;

use App\KitchenBuilder;
use App\Enquiry;
use App\Notification;
use App\Traits\Quotable;
use App\Mail\Quote;
use App\Mail\NewQuote;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;

class KitchenBuilderController extends Controller
{
    use Quotable;

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $enquiries = Enquiry::all();
        $tablename = "Kitchen Quotes";
        $quotes = KitchenBuilder::all();
        return view('admin.layouts.kitchenquotes', compact('tablename', 'quotes', 'enquiries'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name   = $request['name'];
        $email  = $request['email'];
        $number = $request['number'];


        $small_doors    = $request['small_doors'];
        $large_doors    = $request['large_doors'];
        $small_drawers  = $request['small_drawers'];
        $large_drawers  = $request['large_drawers'];
        $meterage       = $request['meterage'];
        $corner_units   = $request['corner_units'];
        $extractor_hood = $request['extractor_hood'];

        $small_door_cost     = $small_doors*23;
        $large_door_cost     = $large_doors*45;
        $small_drawer_cost   = $small_drawers*23;
        $large_drawer_cost   = $large_drawers*23;
        $meterage_cost       = $meterage*5;
        $extractor_hood_cost = $extractor_hood*5;
        $corner_units_cost   = $corner_units*5;

        $quote = $small_door_cost+$large_door_cost+$small_drawer_cost+$large_drawer_cost+$meterage_cost+$extractor_hood_cost+$corner_units_cost;

        $kitchen = KitchenBuilder::create([
            'name'           => $name,
            'email'          => $email,
            'number'         => $number,
            'small_doors'    => $small_doors,
            'large_doors'    => $large_doors,
            'small_drawers'  => $small_drawers,
            'large_drawers'  => $large_drawers,
            'meterage'       => $meterage,
            'corner_units'   => $corner_units,
            'extractor_hood' => $extractor_hood,
            'quote'          => $quote,
        ]);

        Mail::to($email)->send(new NewQuote($name, $small_doors, $large_doors, $small_drawers, $large_drawers, $meterage, $extractor_hood, $corner_units));

        return back();

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\KitchenBuilder  $kitchenBuilder
     * @return \Illuminate\Http\Response
     */
    public function show(KitchenBuilder $kitchenBuilder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\KitchenBuilder  $kitchenBuilder
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pagename = "Edit Quote";
        $quote = KitchenBuilder::where('id', $id)->first();
        return view('admin.layouts.editquote', compact('pagename', 'quote'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\KitchenBuilder  $kitchenBuilder
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $doors    = $request['doors'];
        $drawers  = $request['drawers'];
        $meterage = $request['meterage'];
        $extras   = explode(",", $request['extras']);


        $id = $request['id'];

        KitchenBuilder::where('id', $id)
            ->update([
                'name'     => $request['name'],
                'email'    => $request['email'],
                'doors'    => $doors,
                'quote'    => $this->quotebuilder($doors, $drawers, $meterage, $extras),
                'status'   => "Edited",
                'extras'   => $request['extras'],
                'number'   => $request['number'],
                'drawers'  => $drawers,
                'meterage' => $meterage,
                'comments' => $request['comments'],
            ]);

        return redirect('adminarea/quotes');
    }

    public function updateStatus(Request $request)
    {
        $id = $request['id'];

        KitchenBuilder::where('id', $id)
            ->update([
                'status' => "Accepted",
            ]);

        return redirect('adminarea/quotes');
    }

    public function email($id)
    {
        $pagename = "Email Quote";
        $quote = KitchenBuilder::where('id', $id)->first();
        return view('admin.layouts.emailquote', compact('pagename', 'quote'));
    }

    public function emailQuote(Request $request)
    {
        $to = $request['email'];
        $name = $request['name'];
        $message = $request['message'];

        Mail::to($to)->send(new Quote($name, $message));

        return redirect('/adminarea/quotes');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\KitchenBuilder  $kitchenBuilder
     * @return \Illuminate\Http\Response
     */
    public function destroy(KitchenBuilder $kitchenBuilder)
    {
        //
    }
}
