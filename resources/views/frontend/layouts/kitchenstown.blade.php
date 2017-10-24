@extends('frontend.master')
@section('content')
    <header class="page-title pt-light pt-plax-md-light" style="background: url(/frontend/images/kitchens/{{ $kitchen->image_1 }});background-size: cover" data-stellar-background-ratio="0.4">
        <div class="bg-overlay">
            <div class="container">
                <div class="row">

                    <div class="col-sm-6">
                        <h1>Kitchen Spraying in {{$town->name}}</h1>
                        <span class="subheading">Give your old kitchens a new lease of life</span>
                    </div>
                    <ol class="col-sm-6 text-right breadcrumb">
                        <li><a href="{{ url('/') }}">Home</a></li>
                        <li class="active">Kitchens</li>
                    </ol>

                </div>
            </div>
        </div>
    </header>
    <div id="blog" class="section container blog-classic">
        <div class="row">
            <div class="col-md-8 mb-sm-160">
                <div class="col-md-12 blog-post-single wow fadeIn" data-wow-delay=".1s" data-wow-duration="2s">
                    <!-- Title -->
                    <h2 class="post-title">{{$kitchen->title}}</h2><br><br>
                    <!-- Image -->
                    <img class="img-responsive post-img" src="/frontend/images/kitchens/{{$kitchen->image_1}}">

                    <div class="blog-post-content">
                        <!-- Intro -->
                        <blockquote>
                            {{$kitchen->content_1}}
                        </blockquote>

                        <p>{{$kitchen->content_2}}
                        </p>
                        <!-- Left Quote -->
                        <blockquote class="alt-blockquote col-md-6 left-blog-quote">
                            {{$kitchen->quote}}
                        </blockquote>
                        <p>
                            {{$kitchen->content_3}}
                        </p><br><br>
                        <p>
                            <a class="btn btn-success" href="{{ url('/kitchenquote') }}">Create a free Quote</a>
                        </p>
                    </div>
                </div><!-- / .blog-post-single -->
            </div><!-- / .col-md-8 -->
            <aside class="col-md-offset-1 col-md-3 sidebar">
                <h3>Before Respraying</h3>
                <img class="img-responsive post-img" src="/frontend/images/kitchens/{{$kitchen->before_image}}"><br>
                <hr>
                <h3>After Respraying</h3>
                <img class="img-responsive post-img" src="/frontend/images/kitchens/{{$kitchen->after_image}}"><br>
                <hr>
                <img class="img-responsive post-img" src="/frontend/images/kitchens/{{$kitchen->image_2}}"><br>
                <img class="img-responsive post-img" src="/frontend/images/kitchens/{{$kitchen->image_3}}"><br>
                <img class="img-responsive post-img" src="/frontend/images/kitchens/{{$kitchen->image_4}}"><br>

            </aside><!-- / .sidebar -->
        </div>
        <hr>
                <section class="container-fluid portfolio-layout portfolio-columns-fw">
                    <div class="row">
                        <header class="sec-heading">
                            <h2>{{ $header }}</h2>
                            <span class="subheading">{{ $paragraph }}</span>
                        </header>
                    </div><!-- / .row -->

                    <div class="row">
                        <div id="pfolio">
                        @foreach($kitchenWorks->take(3) as $project)
                            <!-- Item 1 -->
                                <div class="col-md-4 portfolio-item">
                                    <div class="p-wrapper hover-default">
                                        <img src="/frontend/images/projects/{{ $project->image }}">
                                        <div class="p-hover">
                                            <div class="p-content">
                                                <h4>{{ $project->title }}</h4>
                                                <h6 class="subheading">{{ $project->sub_title }}</h6>
                                            </div>
                                        </div>
                                        <a href="/project/{{$project->slug}}" class="open-btn"><i class="fa fa-expand"></i></a>
                                    </div>
                                </div><!-- / .portfolio-item -->
                            @endforeach

                        </div><!-- / #pfolio -->
                    </div><!-- / .row -->
                    <div class="col-md-12 col-sm-12" style="padding-top:20px;padding-bottom:20px;text-align:center">
                        <a href="{{ url('/projects') }}" class="btn btn-success">View All Projects</a>
                    </div>
                </section><!-- / .portfolio-columns-fw -->
                @if($testimonials->count() > 0)
                    <section class="container testimonials-3col">
                        <div class="row section">

                            <header class="sec-heading">
                                <h2>What the people of {{ $town->name }} have to say about our work</h2>
                                <span class="subheading">Read some of the testimonials from our clients</span>
                            </header>

                        @foreach($testimonials->take(3) as $testimonial)
                            <!-- Item 1 -->
                                <div class="col-md-4 mb-sm-50">
                                    <div class="t-item wow fadeIn" data-wow-duration="1s">
                                        <img src="/frontend/images/testimonials/{{ $testimonial->image }}" width="200px">
                                        <blockquote>
                                            <p>{{ $testimonial->testimonial }}</p>
                                            <footer>
                                                <cite>by {{ $testimonial->name }}<span>{{ ucfirst($testimonial->location) }}</span></cite>
                                            </footer>
                                        </blockquote>
                                    </div><!-- / .t-item -->
                                </div><!-- / .col-md-4 -->
                            @endforeach


                        </div><!-- / .row -->

                    </section><!-- / .container -->
                @endif

                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-12 blog-post-comments">


                            <!-- Leave a comment -->
                            <div class="comment-form">
                                <h4 class="blog-section-title">Contact us with your queries</h4>

                                <form action="/pagecontact" method="POST">
                                {{ csrf_field() }}
                                <!-- Name -->
                                    <div class="col-md-6 form-group no-gap-left">
                                        <input name="name" type="text" class="form-control" id="inpt-name-forms" placeholder="Enter your name">
                                        <label for="inpt-name-forms">Name *</label>
                                    </div>

                                    <!-- Email -->
                                    <div class="col-md-6 form-group no-gap-right">
                                        <input name="email" type="email" class="form-control" id="inpt-email-forms" placeholder="Enter your email">
                                        <label for="inpt-email-forms">Email *</label>
                                    </div>

                                    <div class="col-md-12 form-group no-gap">
                                        <input type="tel" name="number" id="phone-contact-3" class="form-control">
                                        <label for="email-contact-3">Phone</label>
                                    </div>

                                    <!-- Comment -->
                                    <div class="col-md-12 form-group no-gap">
                                        <textarea class="form-control" name="message" id="txt-forms" rows="5" placeholder="Your Comment"></textarea>
                                        <label for="txt-forms">Comment *</label>
                                    </div>

                                    <input type="submit" value="Send Comment" class="btn pull-right">
                                </form>
                            </div><!-- / .comment-form -->

                        </div><!-- / .blog-post-comments -->
                    </div><!-- / .row -->
                </div>
    </div><!-- / .container -->
@endsection