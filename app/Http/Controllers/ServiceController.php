<?php

namespace App\Http\Controllers;

use App\KitchenBuilder;
use App\Enquiry;
use App\Service;
use App\Traits\ImageResize;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    use ImageResize;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tablename = "Services";
        $services = Service::all();
        $enquiries = Enquiry::all();
        $quotes = KitchenBuilder::all();
        return view('admin.layouts.services', compact('tablename', 'services', 'enquiries', 'quotes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $enquiries = Enquiry::all();
        $quotes = KitchenBuilder::all();
        $pagename = "Add New Service";
        return view('admin.layouts.addservice', compact('pagename', 'enquiries', 'quotes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $slug = strtolower(preg_replace('/\s+/', '', $request['title']));
        $image = $this->resizeService($request['file']);

        Service::create([
            'title' => $request['title'],
            'description' => $request['description'],
            'image' => $image,
            'short_description' => $request['short_description'],
            'slug' => $slug,
        ]);

        return redirect('/adminarea/services');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show(Service $service)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pagename = "Edit Service";
        $service = Service::where('id', $id)->first();
        return view('admin.layouts.editservice', compact('pagename', 'service'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request['id'];
        $slug = strtolower(preg_replace('/\r/', '', $request['title']));

        if(!empty($request['file'])) {
            $image = $this->resizeService($request['file']);
        } else {
            $image = Service::where('id',$id)->pluck('image')->first();
        }

        Service::where('id', $id)
            ->update([
                'title' => $request['title'],
                'description' => $request['description'],
                'image' => $image,
                'short_description' => $request['short_description'],
                'slug' => $slug,
            ]);

        return redirect('/adminarea/services');
    }

    public function delete($id)
    {
        $service = Service::where('id',$id)->first();
        $pagename = "delete" . ' ' .$service->title;
        return view('admin.layouts.deleteservice', compact('service', 'pagename'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request['id'];
        Service::where('id', $id)->delete();
        return redirect('/adminarea/services');
    }
}
