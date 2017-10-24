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
                    <li><a href="{{ url('/adminarea') }}">Home</a></li>
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
                            <form action="/edithomepage" method="POST" class="body" enctype="multipart/form-data">
                                {{ csrf_field() }}
                                <h2 class="card-inside-title">Main Image</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/home/{{ $home->home_image }}" width="300px"><br><br>
                                    <input type="file" name="home_image">
                                </div>
                                <h2 class="card-inside-title">Sub Header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="sub_header" type="text" class="form-control" value="{{ $home->sub_header }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">About</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="about" rows="1" class="form-control no-resize auto-growth">{{ $home->about }}</textarea>
                                    </div>
                                </div>

                                <h2 class="card-inside-title">About Image</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/posts/{{ $home->about_image }}" width="300px"><br><br>
                                    <input type="file" name="about_image">
                                </div>
                                <h2 class="card-inside-title">Service Header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="service_header" type="text" class="form-control" value="{{ $home->services_header }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Service Sub Header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="service_sub_header" type="text" class="form-control" value="{{ $home->services_sub_header }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_header" type="text" class="form-control" value="{{ $home->kitchen_header }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Sub Header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_sub_header" type="text" class="form-control" value="{{ $home->kitchen_sub_header }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Image</h2>
                                <div class="demo-switch">
                                    <img src="/frontend/images/posts/{{ $home->kitchen_image }}" width="300px"><br><br>
                                    <input type="file" name="kitchen_image">
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 1 header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_header_1" type="text" class="form-control" value="{{ $home->kitchen_process_header_1 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 1 Description</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_description_1" type="text" class="form-control" value="{{ $home->kitchen_process_description_1 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 2 header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_header_2" type="text" class="form-control" value="{{ $home->kitchen_process_header_2 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 2 Description</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_description_2" type="text" class="form-control" value="{{ $home->kitchen_process_description_2 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 3 header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_header_3" type="text" class="form-control" value="{{ $home->kitchen_process_header_3 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 3 Description</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_description_3" type="text" class="form-control" value="{{ $home->kitchen_process_description_3 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 4 header</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_header_4" type="text" class="form-control" value="{{ $home->kitchen_process_header_4 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Kitchen Process 4 Description</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12 col-lg-6">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="kitchen_process_description_4" type="text" class="form-control" value="{{ $home->kitchen_process_description_4 }}" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Publish</h2>
                                <div class="demo-switch">
                                    <div class="switch">
                                        <label>Not Live
                                                <input name ="publish" type="checkbox" checked>
                                            <span class="lever"></span>Live</label>
                                    </div>
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