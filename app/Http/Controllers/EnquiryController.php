<?php

namespace App\Http\Controllers;

use App\Enquiry;
use App\KitchenBuilder;
use Illuminate\Support\Facades\Mail;
use App\Mail\RespondEnquiry;
use Illuminate\Http\Request;

class EnquiryController extends Controller
{

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
        $tablename = "Enquiries";
        $quotes    = KitchenBuilder::all();
        $enquiries = Enquiry::all();
        return view('admin.layouts.enquiries', compact('tablename', 'enquiries', 'quotes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $enquiry = Enquiry::where('id',$id)->first();
        $pagename = "Enquiry from" . " " . $enquiry->name;
        return view('admin.layouts.readenquiry', compact('pagename', 'enquiry'));
    }

    public function respond(Request $request)
    {
        $id = $request['id'];
        $to = $request['email'];
        $name = $request['name'];
        $sent = $request['sent'];

        $original_message = $request['original_message'];

        $message = $request['message'];

        Mail::to($to)->send(new RespondEnquiry($name, $message, $original_message, $sent));
        $enquiry = Enquiry::where('id',$id)->first();
        $enquiry->delete();

        return redirect('adminarea/enquiries');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function edit(Enquiry $enquiry)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Enquiry $enquiry)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Enquiry  $enquiry
     * @return \Illuminate\Http\Response
     */
    public function destroy(Enquiry $enquiry)
    {
        //
    }
}
