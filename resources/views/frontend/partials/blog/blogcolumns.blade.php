<div id="blog" class="section container blog-columns">
    <div class="row ws-s">

    @foreach($posts as $post)
        <!-- Blog Post 1 -->
            <div class="col-lg-4 col-md-6 mb-sm-50 ws-s">
                <div class="blog-post">

                    <!-- Image -->
                    <a href="blog-post.html" class="post-img"><img src="/frontend/images/posts/{{ $post->image }}" alt="{{ $post->title }}"></a>

                    <div class="bp-content">

                        <!-- Meta data -->
                        <div class="post-meta">
                            <a href="#" class="post-date">
                                <i class="fa fa-calendar-o"></i>
                                <span>{{ \Carbon\Carbon::parse($post->created__at)->toFormattedDateString() }}</span>
                            </a>
                            <a href="#" class="post-comments">
                                <i class="fa fa-comments-o"></i>
                                <span>{{ $post->comments }}</span>
                            </a>
                        </div><!-- / .meta -->

                        <!-- Post Title -->
                        <a href="blog-post.html" class="post-title"><h4>{{ $post->title }}</h4></a>

                        <!-- Blurb -->
                        <p>{{ $post->post }}</p>

                        <!-- Link -->
                        <a href="/blog/{{ $post->slug }}" class="btn btn-small">Read More</a>

                    </div><!-- / .bp-content -->

                </div><!-- / .blog-post -->
            </div><!-- / .col-lg-4 -->
        @endforeach

    </div><!-- / .row -->


    <!-- Pagination -->
    <div class="row">
        <nav class="blog-pagination text-center">
            {{ $posts->links() }}
        </nav>
    </div><!-- / .row -->
</div>