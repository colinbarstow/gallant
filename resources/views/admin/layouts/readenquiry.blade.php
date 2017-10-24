@extends('admin.master')
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>{{ $pagename }}</h2>
                <ol class="breadcrumb">
                    <li><a href="{{ url('/adminarea/quotes') }}">Quotes</a></li>
                    <li class="active">{{ $pagename }}</li>
                </ol>
            </div>
            <!-- Input Group -->
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
                        <div class="body">
                            <h1>From: {{$enquiry->name}}</h1>
                            <h1>Email: {{$enquiry->email}}</h1>
                            <h3>Message: {{$enquiry->message}}</h3>
                            <hr>
                            <h2>Reply to {{$enquiry->name}}</h2>
                            <form action="/replyenquiry" method="POST">
                                {{ csrf_field() }}
                                <input type="hidden" name="name" value="{{$enquiry->name}}">
                                <input type="hidden" name="id" value="{{$enquiry->id}}">
                                <input type="hidden" name="email" value="{{$enquiry->email}}">
                                <input type="hidden" name="original_message" value="{{$enquiry->message}}">
                                <input type="hidden" name="sent" value="{{ \Carbon\Carbon::parse($enquiry->created_at)->toFormattedDateString() }}">
                                <h2 class="card-inside-title">Message</h2>
                                <div class="row clearfix">
                                    <div class="col-md-8">
                                        <div class="input-group">
                                            <div class="form-line">
                                                <textarea name="message" class="form-control" style="resize:none"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-8">
                                        <div class="input-group">
                                            <div class="form-line">
                                                <button type="submit" class="btn btn-success">Send Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('pagescripts')
    <script src="{{ asset('/admin/js/bootstrap-colorpicker.js') }}"></script> <!-- Bootstrap Colorpicker Js -->
    <script src="{{ asset('/admin/js/jquery.inputmask.bundle.js') }}"></script> <!-- Input Mask Plugin Js -->
    <script src="{{ asset('/admin/js/jquery.multi-select.js') }}"></script> <!-- Multi Select Plugin Js -->
    <script src="{{ asset('/admin/js/jquery.spinner.js') }}"></script> <!-- Jquery Spinner Plugin Js -->
    <script src="{{ asset('/admin/js/bootstrap-tagsinput.js') }}"></script> <!-- Bootstrap Tags Input Plugin Js -->
    <script src="{{ asset('/admin/js/nouislider.js') }}"></script> <!-- noUISlider Plugin Js -->
    <script src="{{ asset('/admin/js/advanced-form-elements.js') }}"></script>
@endsection