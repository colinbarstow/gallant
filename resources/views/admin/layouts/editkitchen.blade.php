@extends('admin.master')
@section('pagelinks')
    <link href="{{ asset('admin/css/waitMe.css') }}" rel="stylesheet" />
@endsection
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>{{ $pagename }}</h2>
                <ol class="breadcrumb">
                    <li><a href="{{ url('/adminarea') }}">Dashboard</a></li>
                    <li class="active">{{ $pagename }}</li>
                </ol>
            </div>
            <!-- Input -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2> {{ $pagename }} </h2>
                            <ul class="header-dropdown m-r--5">
                                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                    <ul class="dropdown-menu pull-right">
                                        <li><a href="javascript:void(0);">Action</a></li>
                                        <li><a href="javascript:void(0);">Another action</a></li>
                                        <li><a href="javascript:void(0);">Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                            <form action="/editkitchen" method="POST" class="body" enctype="multipart/form-data">
                                {{ csrf_field() }}
                                <h2 class="card-inside-title">Header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="title" type="text" class="form-control" value="{{$kitchen->title}}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Sub Title</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="sub_title" type="text" class="form-control" value="{{$kitchen->sub_title}}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Content part 1</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="content_1" rows="1" class="form-control no-resize auto-growth">{{$kitchen->content_1}}</textarea>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Content part 2</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="content_2" rows="1" class="form-control no-resize auto-growth">{{$kitchen->content_2}}</textarea>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Content part 3</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="content_3" rows="1" class="form-control no-resize auto-growth">{{$kitchen->content_3}}</textarea>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Block Quote</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="quote" rows="1" class="form-control no-resize auto-growth">{{$kitchen->quote}}</textarea>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Main Image</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/kitchens/{{$kitchen->image_1}}" width="200px"><br><br>
                                    <input type="file" name="image_1">
                                </div>
                                <h2 class="card-inside-title">Before Image</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/kitchens/{{$kitchen->before_image}}" width="200px"><br><br>
                                    <input type="file" name="before_image">
                                </div>
                                <h2 class="card-inside-title">After Image</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/kitchens/{{$kitchen->after_image}}" width="200px"><br><br>
                                    <input type="file" name="after_image">
                                </div>
                                <h2 class="card-inside-title">Side Bar Image 1</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/kitchens/{{$kitchen->image_2}}" width="200px"><br><br>
                                    <input type="file" name="image_2">
                                </div>
                                <h2 class="card-inside-title">Side Bar Image 2</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/kitchens/{{$kitchen->image_3}}" width="200px"><br><br>
                                    <input type="file" name="image_3">
                                </div>
                                <h2 class="card-inside-title">Side Bar Image 3</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/kitchens/{{$kitchen->image_4}}" width="200px"><br><br>
                                    <input type="file" name="image_4">
                                </div>
                                <div class="form-group">

                                    <input type="submit" class="btn btn-success"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- #END# Input -->
        </div>
    </section>
@endsection
@section('pagescripts')
    <script src="{{ asset('/admin/js/autosize.js') }}"></script> <!-- Autosize Plugin Js -->
    <script src="{{ asset('/admin/js/moment.js') }}"></script> <!-- Moment Plugin Js -->
    <script src="{{ asset('/admin/js/bootstrap-material-datetimepicker.js') }}"></script>
    <script src="{{ asset('/admin/js/basic-form-elements.js') }}"></script>
@endsection