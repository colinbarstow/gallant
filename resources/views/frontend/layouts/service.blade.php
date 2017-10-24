@extends('frontend.master')
@section('content')
    <header class="page-title pt-light pt-plax-md-light" style="background: url(/frontend/images/services/{{ $service->image }});background-size: cover" data-stellar-background-ratio="0.4">
        <div class="bg-overlay">
            <div class="container">
                <div class="row">

                    <div class="col-sm-6">
                        <h1>{{ $service->title }}</h1>
                    </div>
                    <ol class="col-sm-6 text-right breadcrumb">
                        <li><a href="{{ url('/') }}">Home</a></li>
                        <li class="active">{{ $service->title }}</li>
                    </ol>

                </div>
            </div>
        </div>
    </header>
    <div id="blog" class="section container blog-classic">
        <div class="row">
            <div class="col-md-8 mb-sm-160">

                <!-- Blog Post -->
                <div class="col-md-12 blog-post-single wow fadeIn" data-wow-delay=".1s" data-wow-duration="2s">

                    <!-- Image -->
                    <img class="img-responsive post-img" src="/frontend/images/services/{{ $service->image }}" alt="Blog Post 1">

                    <!-- Title -->
                    <h2 class="post-title">{{ $service->title }}</h2>


                    <div class="blog-post-content">
                        <p>
                            {{ $service->description }}
                        </p>
                    </div>

                </div><!-- / .blog-post-single -->

                <div class="row">
                    <div class="col-md-12 blog-post-comments">


                        <!-- Leave a comment -->
                        <div class="comment-form">
                            <h4 class="blog-section-title">Contact us with your queries</h4>

                            <form action="post">
                                <!-- Name -->
                                <div class="col-md-6 form-group no-gap-left">
                                    <input type="text" class="form-control" id="inpt-name-forms" placeholder="Enter your name">
                                    <label for="inpt-name-forms">Name *</label>
                                </div>

                                <!-- Email -->
                                <div class="col-md-6 form-group no-gap-right">
                                    <input type="email" class="form-control" id="inpt-email-forms" placeholder="Enter your email">
                                    <label for="inpt-email-forms">Email *</label>
                                </div>

                                <!-- Comment -->
                                <div class="col-md-12 form-group no-gap">
                                    <textarea class="form-control" name="textarea" id="txt-forms" rows="5" placeholder="Your Comment"></textarea>
                                    <label for="txt-forms">Comment *</label>
                                </div>

                                <input type="submit" value="Send Comment" class="btn pull-right">
                            </form>
                        </div><!-- / .comment-form -->

                    </div><!-- / .blog-post-comments -->
                </div><!-- / .row -->

            </div><!-- / .col-md-8 -->



            <!-- ========== Sidebar ========== -->

            <aside class="col-md-offset-1 col-md-3 sidebar">


                <!-- Recent Posts - Widget -->
                <div class="col-md-12 ws-s recent-posts-widget">
                    <h5 class="header-widget">Services</h5>
                    @foreach($services as $list)
                    <!-- Item 1 -->
                    <div class="widget-item">
                        <a href="/service/{{ $list->slug }}"><h6 class="h-alt">{{ $list->title }}</h6></a>
                    </div>
                        @endforeach

                </div><!-- / .recent-posts-widget -->



            </aside><!-- / .sidebar -->

        </div><!-- / .row -->
    </div><!-- / .container -->
@endsection