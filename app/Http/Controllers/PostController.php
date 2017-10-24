<?php

namespace App\Http\Controllers;

use App\Post;
use App\Enquiry;
use App\KitchenBuilder;
use App\Traits\ImageResize;
use App\Traits\Taggable;
use Illuminate\Http\Request;

class PostController extends Controller
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
        $tablename = "Blog Posts";
        $posts = Post::all();
        return view('admin.layouts.blogposts', compact('tablename', 'posts', 'enquiries', 'quotes'));
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
        $pagename = "New Blog Post";
        return view('admin.layouts.addblogpost', compact('pagename', 'enquiries', 'quotes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(isset($request['publish'])){
            $publish = "1";
        }
        else{
            $publish = "0";
        }
        $slug = strtolower(preg_replace('/\s+/', '', $request['title']));
        $image = $this->resizePost($request['file']);

        $post = Post::create([
            'title' => $request['title'],
            'post' => $request['post'],
            'image' => $image,
            'status' => $publish,
            'slug' => $slug,
            'comments' => "0",
        ]);

        $tags = $this->tagExploder($request['tags'], $post);

        return redirect('/adminarea/blogposts');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $pagename = "Edit Post";
        $post = Post::where('id', $id)->first();
        return view('admin.layouts.editblogpost', compact('pagename', 'post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $id = $request['id'];
        if(isset($request['publish'])){
            $publish = "1";
        }
        else{
            $publish = "0";
        }
        $slug = strtolower(preg_replace('/\r/', '', $request['title']));

        if(!empty($request['file'])) {
            $image = $this->resizePost($request['file']);
        } else {
            $image = Post::where('id',$id)->pluck('image')->first();
        }

        Post::where('id', $id)
        ->update([
            'title' => $request['title'],
            'post' => $request['post'],
            'image' => $image,
            'status' => $publish,
            'slug' => $slug,
        ]);

        return redirect('/adminarea/blogposts');
    }

    public function publishStatus(Request $request)
    {
        $id = $request['id'];
        Post::where('id', $id)->update(['status' => "1"]);
        return back();
    }

    public function unpublishStatus(Request $request)
    {
        $id = $request['id'];
        Post::where('id', $id)->update(['status' => "0"]);
        return back();
    }

    public function delete($id)
    {
        $post = Post::where('id',$id)->first();
        $pagename = "delete" . ' ' .$post->title;
        return view('admin.layouts.deleteblogpost', compact('post', 'pagename'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request['id'];
        Post::where('id', $id)->delete();
        return redirect('/adminarea/blogposts');
    }
}
