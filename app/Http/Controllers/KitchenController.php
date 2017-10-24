<?php

namespace App\Http\Controllers;

use App\HomePage;
use App\Kitchen;
use App\Project;
use App\KitchenBuilder;
use App\Enquiry;
use App\Service;
use App\Contact;
use App\Testimonial;
use App\Traits\ImageResize;
use Illuminate\Http\Request;

class KitchenController extends Controller
{
    use ImageResize;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = "1";
        $services = Service::all();
        $home = HomePage::where('id', $id)->first();
        $contact = Contact::where('id', $id)->first();
        $kitchen = Kitchen::where('id', $id)->first();
        $recentWorks = Project::where('category_id', $id)->get();
        $kitchenWorks = $recentWorks->sortByDesc('id');
        $testimonials = Testimonial::where('work_type', "kitchen")->get();
        $header = "Recently Sprayed Kitchens";
        $paragraph = "Take a look at some of our most recent work.";
        return view('frontend.layouts.kitchens', compact('testimonials', 'header', 'paragraph', 'kitchenWorks', 'services', 'home', 'contact', 'kitchen'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $id = "1";
        $services = Service::all();
        $home = HomePage::where('id', $id)->first();
        $contact = Contact::where('id', $id)->first();
        $kitchen = Kitchen::where('id', $id)->first();
        return view('frontend.layouts.kitchenquote', compact('services', 'home', 'contact', 'kitchen'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Kitchen  $kitchen
     * @return \Illuminate\Http\Response
     */
    public function show(Kitchen $kitchen)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Kitchen  $kitchen
     * @return \Illuminate\Http\Response
     */
    public function edit(Kitchen $kitchen)
    {
        $id = "1";
        $pagename = "Edit Kitchen";
        $services = Service::all();
        $home = HomePage::where('id', $id)->first();
        $contact = Contact::where('id', $id)->first();
        $kitchen = Kitchen::where('id', $id)->first();
        $quotes    = KitchenBuilder::all();
        $enquiries = Enquiry::all();
        return view('admin.layouts.editkitchen', compact('pagename', 'quotes', 'enquiries', 'services', 'home', 'contact', 'kitchen'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Kitchen  $kitchen
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = "1";
        $title     = $request['title'];
        $sub_title = $request['sub_title'];
        $content_1 = $request['content_1'];
        $content_2 = $request['content_2'];
        $content_3 = $request['content_3'];
        $quote     = $request['quote'];
        $image_1   = $request['image_1'];
        $image_2   = $request['image_2'];
        $image_3   = $request['image_3'];
        $image_4   = $request['image_4'];
        $before_image   = $request['before_image'];
        $after_image    = $request['after_image'];

        $image1 = $this->resizeKitchen($image_1);
        $image2 = $this->resizeKitchen($image_2);
        $image3 = $this->resizeKitchen($image_3);
        $image4 = $this->resizeKitchen($image_4);
        $imageBefore = $this->resizeKitchen($before_image);
        $imageAfter = $this->resizeKitchen($after_image);

        $kitchen = Kitchen::where('id', $id)->first();
        $kitchen->update([
            'title' => $title,
            'sub_title'    => $sub_title,
            'content_1'    => $content_1,
            'content_2'    => $content_2,
            'content_3'    => $content_3,
            'quote'        => $quote,
            'image_1'      => $image1,
            'image_2'      => $image2,
            'image_3'      => $image3,
            'image_4'      => $image4,
            'before_image' => $imageBefore,
            'after_image' => $imageAfter,
        ]);

        return back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Kitchen  $kitchen
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kitchen $kitchen)
    {
        //
    }
}
