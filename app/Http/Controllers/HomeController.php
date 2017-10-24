<?php

namespace App\Http\Controllers;

use App\Category;
use App\Client;
use App\Contact;
use App\HomePage;
use App\Post;
use App\Service;
use App\Project;
use App\Comment;
use App\Tag;
use App\Town;
use App\Kitchen;
use App\Testimonial;
use App\Traits\ImageResize;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    use ImageResize;
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = "1";
        $home = HomePage::where('id', $id)->first();
        $services = Service::all();
        $testimonials = Testimonial::all();
        $clients = Client::all();
        $posts = Post::all();
        $projects = Project::all();
        $tags = Tag::all();
        $towns = Town::all();
        $contact = Contact::where('id', $id)->first();
        return view('frontend.layouts.index', compact('home', 'towns', 'services', 'testimonials', 'clients', 'contact', 'posts', 'tags', 'projects'));
    }

    public function town($slug)
    {
        $id = "1";
        $services = Service::all();
        $home = HomePage::where('id', $id)->first();
        $contact = Contact::where('id', $id)->first();
        $kitchen = Kitchen::where('id', $id)->first();
        $town = Town::where('slug', $slug)->first();
        $townName = $town->name;
        $works = Project::where('category_id', $id)->where('location', $slug)->get();
        $testimonials = Testimonial::where('work_type', "kitchen")->where('location', $slug)->get();
        $recentWorks = Project::where('category_id', $id)->get();
        if($works->count() > 0) {
            $kitchenWorks = $works->sortByDesc('id');
            $header = "View our recently sprayed kitchens in " . $townName;
            $paragraph = "We have recently completed work in " . $townName . ". Take a look below to see what we did.";
        } else {
            $kitchenWorks = $recentWorks->sortByDesc('id');
            $header = "Recently Sprayed Kitchens";
            $paragraph = "Take a look at some of our most recent work.";
        }
        return view('frontend.layouts.kitchenstown', compact('town', 'testimonials', 'paragraph', 'header', 'services', 'home', 'contact', 'kitchen', 'kitchenWorks'));
    }

    public function contact()
    {
        $id = "1";
        $services = Service::all();
        $home = HomePage::where('id', $id)->first();
        $contact = Contact::where('id', $id)->first();
        return view('frontend.layouts.contact', compact('services', 'contact', 'home'));
    }
    public function service($slug)
    {
        $id = "1";
        $contact = Contact::where('id', $id)->first();
        $home = HomePage::where('id', $id)->first();
        $service = Service::where('slug', $slug)->first();
        $services = Service::all();
        return view('frontend.layouts.service', compact('service', 'services', 'home', 'contact'));
    }

    public function blog()
    {
        $id = "1";
        $services = Service::all();
        $contact = Contact::where('id', $id)->first();
        $home = HomePage::where('id', $id)->first();
        $posts = Post::paginate(6);
        $recentposts = Post::all()->sortByDesc('id');
        $tags = Tag::all()->sortByDesc('count')->take(10);
        return view('frontend.layouts.blog', compact('services', 'posts', 'home', 'contact', 'service', 'recentposts', 'tags'));
    }

    public function showBlog($slug)
    {
        $id = "1";
        $contact = Contact::where('id', $id)->first();
        $home = HomePage::where('id', $id)->first();
        $post = Post::where('slug', $slug)->first();
        $post->addVisit();
        $recentposts = Post::all()->sortByDesc('id');
        $tags = Tag::all();
        $services = Service::all();
        $comments = Comment::where('post_id', $post->id)->get();

        $next = Post::where('id', '>', $post->id)->first();
        $previous = Post::where('id', '<', $post->id)->first();


        return view('frontend.layouts.singleblog', compact('next', 'previous', 'post', 'home', 'contact', 'services', 'recentposts', 'tags', 'comments'));
    }

    public function projects()
    {
        $id = "1";
        $contact = Contact::where('id', $id)->first();
        $home = HomePage::where('id', $id)->first();
        $projects = Project::all();
        $tags = Tag::all();
        $services = Service::all();
        return view('frontend.layouts.projects', compact('services', 'projects', 'home', 'contact', 'tags'));
    }
    public function showProject($slug)
    {
        $id = "1";
        $contact = Contact::where('id', $id)->first();
        $home = HomePage::where('id', $id)->first();
        $project = Project::where('slug', $slug)->first();
        $tags = Tag::all();
        $services = Service::all();
        return view('frontend.layouts.singleprojects', compact('services', 'project', 'home', 'contact', 'tags'));
    }
}
