@section('meta')
    <meta property="og:title" content="{{ $post->title }}"/>
    <meta property="og:image" content="127.0.0.1:8000/frontend/images/posts/{{ $post->image }}"/>
    <meta property="og:site_name" content="Gallant Restorations"/>
    <meta property="og:description" content="{{ $post->title }}" />
    <meta name="twitter:card" content="$post->title" />
    <meta name="twitter:site" content="@gallantrestore" />
    <meta name="twitter:creator" content="@gallantrestore" />
@endsection

@extends('frontend.master')
@section('content')
    <header class="page-title pt-light pt-plax-md-light" style="background: url(/frontend/images/posts/{{ $post->image }});background-size: cover" data-stellar-background-ratio="0.4">
        <div class="bg-overlay">
            <div class="container">
                <div class="row">

                    <div class="col-sm-6">
                        <h1>{{ $post->title }}</h1>
                    </div>
                    <ol class="col-sm-6 text-right breadcrumb">
                        <li><a href="#">Home</a></li>
                        <li><a href="{{ url('/blog') }}">Blog</a></li>
                        <li class="active">{{ $post->title }}</li>
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
                    <img class="img-responsive post-img" src="/frontend/images/posts/{{ $post->image }}" alt="Blog Post 1">

                    <!-- Meta data -->
                    <div class="post-meta">
                        <a href="#" class="post-date">
                            <i class="fa fa-calendar-o"></i>
                            <span>{{ \Carbon\Carbon::parse($post->created_at)->toFormattedDateString()  }}</span>
                        </a>
                        <a href="#" class="post-comments">
                            <i class="fa fa-comments-o"></i>
                            <span>{{$post->comments}}</span>
                        </a>
                    </div><!-- / .meta -->

                    <!-- Title -->
                    <h2 class="post-title">{{ $post->title }}</h2>


                    <div class="blog-post-content">
                        <!-- Intro -->
                        <p>
                            {{$post->post}}
                        </p>
                    </div>
                    <style>
                        .social-list{
                            display: inline;
                            float: left
                        }
                        .tile a {
                            display: block;
                            padding: 10px;
                            margin-right: 5px;
                        }
                    </style>
                    {!! Share::currentPage()
	                        ->facebook('Hello dave')
	                        ->twitter()
	                        ->googlePlus()
	                        ->linkedin() !!}


                </div><!-- / .blog-post-single -->



                <!-- ========== Comments ========== -->

                <div class="row">
                    <div class="col-md-12 blog-post-comments">
                        <h4 class="blog-section-title">Comments <span>({{ $post->comments()->count() }})</span></h4>
                        @foreach($comments as $comment)
                        <!-- Comment 1 -->
                        <div class="bp-comment">
                            <div class="comment-avatar"><i class="fa fa-user"></i></div>
                            <div class="comment-info">
                                <h6 class="comment-name">{{ $comment->name }}</h6>
                                <span class="comment-time">{{ \Carbon\Carbon::parse($comment->created_at)->toFormattedDateString() }}</span>
                            </div>
                            <p class="comment-content">{{ $comment->comment }}</p>
                        </div><!-- / .bp-comment -->
                        @endforeach

                        <!-- Leave a comment -->
                        <div class="comment-form">
                            <h4 class="blog-section-title">Leave a comment</h4>

                            <form action="/addcomment" method="POST">
                                {{csrf_field()}}
                                <input type="hidden" name="post_id" value="{{ $post->id }}">
                                <!-- Name -->
                                <div class="col-md-12 form-group no-gap-left">
                                    <input name="name" type="text" class="form-control" id="inpt-name-forms" placeholder="Enter your name">
                                    <label for="inpt-name-forms">Name *</label>
                                </div>

                                <!-- Comment -->
                                <div class="col-md-12 form-group no-gap">
                                    <textarea class="form-control" name="comment" id="txt-forms" rows="5" placeholder="Your Comment"></textarea>
                                    <label for="txt-forms">Comment *</label>
                                </div>

                                <input type="submit" value="Send Comment" class="btn pull-left">
                            </form>
                        </div><!-- / .comment-form -->

                    </div><!-- / .blog-post-comments -->
                </div><!-- / .row -->

                <!-- Post Navigation -->
                <div class="row">
                    <nav class="blog-post-nav">
                        @if($previous)
                            <a href="/blog/{{$previous->slug}}" class="prev-btn">Prev post</a>
                        @endif

                        @if($next)
                            <a href="/blog/{{$next->slug}}" class="next-btn">Next post</a>
                        @endif

                    </nav>
                </div>

            </div><!-- / .col-md-8 -->



            <!-- ========== Sidebar ========== -->

            <aside class="col-md-offset-1 col-md-3 sidebar">


                <!-- Recent Posts - Widget -->
                <div class="col-md-12 ws-s recent-posts-widget">
                    <h5 class="header-widget">Recent Posts</h5>
                    @foreach($recentposts->take(3) as $recent)
                    <!-- Item 1 -->
                    <div class="widget-item">
                        <a href="/blog/{{ $recent->slug }}"><h6 class="h-alt">{{ $recent->title }}</h6></a>
                        <span>by <a href="#">Gallant Restorations</a> / <a href="#">{{ \Carbon\Carbon::parse($recent->created_at)->toFormattedDateString()  }}</a></span>
                    </div>
                    @endforeach


                </div><!-- / .recent-posts-widget -->


                <!-- Categories - Widget -->
                <div class="col-md-12 ws-s categories-widget">
                    <h5 class="header-widget">Services</h5>
                    @foreach($services as $service)
                    <!-- Item 1 -->
                    <div class="widget-item">
                        <a href="/service/{{ $service->slug }}">{{ $service->title }}</a>
                    </div>
                    @endforeach


                </div><!-- / .categories-widget -->




            </aside><!-- / .sidebar -->

        </div><!-- / .row -->
    </div><!-- / .container -->
@endsection