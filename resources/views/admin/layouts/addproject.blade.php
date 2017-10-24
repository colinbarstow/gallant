@extends('admin.master')
@section('pagelinks')
    <link href="{{ asset('admin/css/waitMe.css') }}" rel="stylesheet" />
    <link href="{{ asset('admin/css/tagsinput.css') }}" rel="stylesheet" />
    <script src="{{ asset('/admin/js/jquery.tagsinput.js') }}"></script>
@endsection
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>{{ $pagename }}</h2>
                <ol class="breadcrumb">
                    <li><a href="{{ url('/adminarea/projects') }}">Projects</a></li>
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
                            <form action="/addproject" method="POST" class="body" enctype="multipart/form-data">
                                {{ csrf_field() }}
                                <h2 class="card-inside-title">Project Title</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="title" type="text" class="form-control" placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Project Sub Title</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="sub_title" type="text" class="form-control" placeholder="Sub Title" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Client</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="client" type="text" class="form-control" placeholder="Client" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Project Description</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="description" rows="1" class="form-control no-resize auto-growth" placeholder="Please enter the service description"></textarea>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Project Tags (seperate with a comma no spaces)</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="tags" id="tags" class="form-control no-resize auto-growth"></textarea>
                                    </div>
                                </div>
                                <script>
                                    $('#tags').tagsInput();
                                </script>
                                <h2 class="card-inside-title">Category</h2>
                                <div class="form-group">
                                    <select name="category_id" id="category">
                                        @foreach($categories as $category)
                                        <option value="{{$category->id}}">{{$category->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <h2 class="card-inside-title">Location</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <input name="location" type="text" class="form-control" placeholder="Location" />
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Main Image</h2>
                                <div class="demo-switch">
                                    <input type="file" name="image">
                                </div>
                                <h2 class="card-inside-title">2nd Image</h2>
                                <div class="demo-switch">
                                    <input type="file" name="image_2">
                                </div>
                                <h2 class="card-inside-title">3rd Image</h2>
                                <div class="demo-switch">
                                    <input type="file" name="image_3">
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