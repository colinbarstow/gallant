<?php

namespace App\Http\Controllers;

use App\Project;
use App\Enquiry;
use App\Category;
use App\Town;
use App\KitchenBuilder;
use App\Traits\ImageResize;
use App\Traits\Taggable;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    use ImageResize;
    use Taggable;

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
        $quotes = KitchenBuilder::all();
        $tablename = "Projects";
        $projects = Project::all();
        return view('admin.layouts.projects', compact('tablename', 'projects', 'enquiries', 'quotes'));
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
        $pagename = "Add New Project";
        $categories = Category::all();
        return view('admin.layouts.addproject', compact('pagename', 'enquiries', 'quotes', 'categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $town = strtolower($request['location']);
        $image = $this->resizeProject($request['image']);
        $image_2 = $this->resizeProject($request['image_2']);
        $image_3 = $this->resizeProject($request['image_3']);
        $slug = strtolower(preg_replace('/\s+/', '', $request['title']));
        $project = Project::create([
            'title' => $request['title'],
            'slug' => $slug,
            'sub_title' => $request['sub_title'],
            'image' => $image,
            'image_2' => $image_2,
            'image_3' => $image_3,
            'location' => $town,
            'client' => $request['client'],
            'description' => $request['description'],
            'category_id' => $request['category_id'],
        ]);


        $location = Town::where('name', $request['location'])->first();
        if ($location === null) {
            Town::create([
                'name'  => $request['location'],
                'slug'  => $town,
            ]);
        }

        $tags = $this->tagExploder($request['tags'], $project);

        return redirect('/adminarea/projects');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pagename = "Edit Project";
        $project = Project::where('id', $id)->first();
        return view('admin.layouts.editproject', compact('pagename', 'project'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request['id'];
        $slug = strtolower(preg_replace('/\r/', '', $request['title']));

        if(!empty($request['file'])) {
            $image = $this->resizeProject($request['file']);
        } else {
            $image = Project::where('id',$id)->pluck('image')->first();
        }

        Project::where('id', $id)
            ->update([
                'title' => $request['title'],
                'sub_title' => $request['sub_title'],
                'image' => $image,
            ]);

        return redirect('/adminarea/projects');
    }

    public function delete($id)
    {
        $project = Project::where('id',$id)->first();
        $pagename = "delete" . ' ' .$project->title;
        return view('admin.layouts.deleteproject', compact('project', 'pagename'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request['id'];
        Project::where('id', $id)->delete();
        return redirect('/adminarea/projects');
    }
}
