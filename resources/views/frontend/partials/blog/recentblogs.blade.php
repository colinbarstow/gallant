<div class="col-md-3 mb-sm-100 recent-posts-widget">
    <h5 class="header-widget">Recent Posts</h5>
@foreach($recentposts->take(3) as $recent)
    <!-- Item 1 -->
        <div class="widget-item">
            <a href="#"><h6 class="h-alt">{{ $recent->title }}</h6></a>
            <span>by <a href="#">Gallant Restorations</a> / <a href="/blog/{{ $recent->slug }}">{{ \Carbon\Carbon::parse($recent->created__at)->toFormattedDateString() }}</a></span>
        </div>
    @endforeach
</div>