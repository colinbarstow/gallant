@extends('frontend.master')
@section('content')
    <!-- ========== Page Title ========== -->

    <header class="page-title pt-large pt-light pt-parallax pt-plax-lg-light" data-stellar-background-ratio="0.4">
        <div class="container">
            <div class="row">

                <div class="col-sm-6">
                    <h1>Portfolio</h1>
                    <span class="subheading">Our Projects</span>
                </div>
                <ol class="col-sm-6 text-right breadcrumb">
                    <li><a href="{{ url('/') }}">Home</a></li>
                    <li class="active">Portfolio</li>
                </ol>

            </div>
        </div>
    </header>


    <!-- ========== Portfolio Boxed - 1 Column ========== -->

    <section class="container section portfolio-layout portfolio-1col-boxed">
        <div class="row">
            <header class="sec-heading">
                <h2>Take a look at our projects</h2>
                <span class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing</span>
            </header>
        </div><!-- / .row -->

        <!-- Filters -->
        <div class="row">
            <ul id="pfolio-filters" class="portfolio-filters">

                <li class="active"><a href="#" data-filter="*">All</a></li>
                @foreach($tags as $tag)
                <li><a href="#" data-filter=".{{ $tag->name }}">{{ $tag->name }}</a></li>
                @endforeach
            </ul>
        </div>

        <div class="row">
            <div id="pfolio">
                @foreach($projects as $project)
                <figure class="portfolio-item @foreach($project->tags as $tag){{$tag->name}} @endforeach">
                        @if($project->id % 2 == 0)
                            <div class="col-md-7 no-gap img-wrapper">
                        @else
                            <div class="col-md-7 no-gap img-wrapper pull-right">
                        @endif
                        <img src="/frontend/images/projects/{{$project->image}}" alt="{{$project->title}}">
                            </div>
                        <figcaption class="col-md-5 no-gap">
                            <h3>{{$project->title}}</h3>
                            <h5 class="subheading">{{$project->sub_title}}</h5>
                            <p>{{$project->description}}</p>
                            <a href="/project/{{$project->slug}}" class="btn-ghost btn-small view-btn">View project</a>
                        </figcaption>
                </figure><!-- / .portfolio-item -->
                @endforeach

            </div><!-- / #pfolio -->
        </div><!-- / .row -->
    </section><!-- / .container -->
@endsection