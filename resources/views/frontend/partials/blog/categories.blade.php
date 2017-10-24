<div class="col-md-3 mb-sm-100 categories-widget">
    <h5 class="header-widget">Services</h5>
    @foreach($services as $service)
        <div class="widget-item">
            <a href="/service/{{$service->slug}}">{{$service->title}}</a>
        </div>
    @endforeach
</div>