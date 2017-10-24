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
                            <form action="/sendnewsletter" method="POST" class="body" enctype="multipart/form-data">
                                {{ csrf_field() }}
                                <h2 class="card-inside-title">Newsletter Title</h2>
                                <div class="row clearfix">
                                    <div class="col-sm-12">
                                        <div class="form-group form-group-lg">
                                            <div class="form-line">
                                                <input name="title" type="text" class="form-control" placeholder="Title" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Newsletter Body</h2>
                                <div class="form-group">
                                    <div class="form-line">
                                        <textarea name="description" rows="1" class="form-control no-resize auto-growth" placeholder="Please enter the service description"></textarea>
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