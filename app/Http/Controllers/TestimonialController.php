<?php

namespace App\Http\Controllers;

use App\Testimonial;
use App\Enquiry;
use App\KitchenBuilder;
use App\Traits\ImageResize;
use Illuminate\Http\Request;

class TestimonialController extends Controller
{

    use ImageResize;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $enquiries = Enquiry::all();
        $quotes = KitchenBuilder::all();
        $tablename = "Testimonials";
        $testimonials = Testimonial::all();
        return view('admin.layouts.testimonials', compact('tablename', 'testimonials', 'enquiries', 'quotes'));
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
        $pagename = "Add New Testimonial";
        return view('admin.layouts.addtestimonial', compact('pagename', 'enquiries', 'quotes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = $this->resizeTestimonial($request['file']);

        Testimonial::create([
            'name' => $request['name'],
            'testimonial' => $request['testimonial'],
            'image' => $image,
            'location' => strtolower(preg_replace('/\+s/', '', $request['location'])),
            'work_type' => $request['work_type'],
        ]);

        return redirect('/adminarea/testimonials');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function show(Testimonial $testimonial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function edit(Testimonial $testimonial)
    {
        $pagename = "Edit Testimonial";
        $testimonial = Testimonial::where('id', $id)->first();
        return view('admin.layouts.testimonial', compact('pagename', 'testimonial'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Testimonial $testimonial)
    {
        $id = $request['id'];

        if(!empty($request['file'])) {
            $image = $this->resizeTestimonial($request['file']);
        } else {
            $image = Testimonial::where('id',$id)->pluck('image')->first();
        }

        Testimonial::where('id', $id)
            ->update([
                'author' => $request['author'],
                'company' => $request['company'],
                'image' => $image,
                'post' => $request['post'],
            ]);

        return redirect('/adminarea/testimonials');
    }

    public function delete($id)
    {
        $testimonial = Testimonial::where('id',$id)->first();
        $pagename = "delete" . ' ' .$testimonial->title;
        return view('admin.layouts.deletetestimonial', compact('testimonial', 'pagename'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Testimonial  $testimonial
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request['id'];
        Testimonial::where('id', $id)->delete();
        return redirect('/adminarea/testimonials');
    }
}
