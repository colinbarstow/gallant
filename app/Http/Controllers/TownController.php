<?php

namespace App\Http\Controllers;

use App\Town;
use App\KitchenBuilder;
use App\Enquiry;
use Illuminate\Http\Request;

class TownController extends Controller
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
        $tablename = "towns";
        $quotes    = KitchenBuilder::all();
        $enquiries = Enquiry::all();
        $towns = Town::all();
        return view('admin.layouts.towns', compact('tablename', 'quotes', 'enquiries', 'towns'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $pagename = "Add Town";
        $quotes    = KitchenBuilder::all();
        $enquiries = Enquiry::all();
        return view('admin.layouts.addtown', compact('pagename', 'quotes', 'enquiries'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $name = $request['name'];
        $slug = strtolower(preg_replace('/\+s/', '',$name));
        Town::create([
            'name' => $name,
            'slug' => $slug,
        ]);
        return redirect('adminarea/towns');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Town  $town
     * @return \Illuminate\Http\Response
     */
    public function show(Town $town)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Town  $town
     * @return \Illuminate\Http\Response
     */
    public function edit(Town $town)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Town  $town
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Town $town)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Town  $town
     * @return \Illuminate\Http\Response
     */
    public function destroy(Town $town)
    {
        //
    }
}
