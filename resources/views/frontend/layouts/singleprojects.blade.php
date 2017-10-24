@extends('frontend.master')
@section('content')
    <header class="page-title pt-large pt-light pt-parallax pt-plax-lg-light" style="background-image:url(/frontend/images/projects/{{$project->image}});background-size:cover;"  data-stellar-background-ratio="0.4">
        <div class="container">
            <div class="row">

                <div class="col-sm-6">
                    <h1>{{ $project->title }}</h1>
                    <span class="subheading">{{ $project->sub_title }}</span>
                </div>
                <ol class="col-sm-6 text-right breadcrumb">
                    <li><a href="{{ url('/') }}">Home</a></li>
                    <li><a href="{{ url('/projects') }}">Projects</a></li>
                    <li class="active">{{ $project->title }}</li>
                </ol>

            </div>
        </div>
    </header>
    <section class="section container pfolio-single">
        <div class="row ws-m">

            <!-- Project Info -->
            <div class="col-md-3 mb-sm-50 project-info">
                <h5>{{$project->client}}</h5>
                <ul>
                    <li><h6>Date:</h6><span>{{ \Carbon\Carbon::parse($project->created_at)->toFormattedDateString() }}</span></li>
                    <li><h6>Tags:</h6><span>@foreach($project->tags as $tag){{$tag->name}}&nbsp;@endforeach</span></li>
                </ul>
            </div>

            <!-- Challenge -->
            <div class="col-md-offset-1 col-md-4 mb-sm-50">
                <h5 class="h-alt">Description</h5>
                <p>{{$project->description}}</p>
            </div>

        </div><!-- / .row -->

        <!-- Slider -->
        <div class="row">
            <div class="col-md-12">
                <ul class="single-img-slider">
                    <li><img src="/frontend/images/projects/{{$project->image}}" alt="Project Image"></li>
                    <li><img src="/frontend/images/projects/{{$project->image_2}}" alt="Project Image"></li>
                    <li><img src="/frontend/images/projects/{{$project->image_3}}" alt="Project Image"></li>
                </ul>
            </div>
        </div><!-- / .row -->

    </section><!-- / .container -->
@endsection