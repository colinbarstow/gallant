<div class="col-md-3 mb-sm-100 tags-widget">
    <h5 class="header-widget">Tags</h5>
    <ul class="tag-list">
        @foreach($tags as $tag)
            <li><a href="/tags">{{ $tag->name }}({{ $tag->count }})</a></li>
        @endforeach
    </ul>
</div>