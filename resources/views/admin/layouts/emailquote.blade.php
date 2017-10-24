@extends('admin.master')
@section('pagelinks')
    {{--<link href="{{ asset('/admin/css/editor.css') }}" rel="stylesheet" />--}}
    @endsection
@section('content')
    <section class="content email-page">
        <div class="container-fluid">
            <div class="row m-t-20">
                <div class="col-md-3">
                    <div class="tcol">
                        <!-- left side -->
                        <div class="p-15"><a href="mail-compose.html" class="btn btn-raised btn-info">Compose</a>
                            <button class="btn btn-sm btn-default pull-right visible-sm visible-xs" data-toggle="collapse" data-target="#mail-nav" aria-expanded="false" aria-controls="collapseExample"><i class="zmdi zmdi-format-line-spacing"></i></button>
                        </div>
                        <div class="p-15 collapse collapse-xs collapse-sm" id="mail-nav">
                            <ul class="nav nav-pills nav-stacked nav-sm" id="mail-folders">
                                <li class="active"><a href="mail-inbox.html" title="Inbox">Inbox <span class="pull-right badge bg-lightred">6</span></a></li>
                                <li><a href="javascript:;" title="Sent">Sent</a></li>
                                <li><a href="javascript:;" title="Draft">Draft</a></li>
                                <li><a href="javascript:;" title="Bin">Bin</a></li>
                                <li><a href="javascript:;" title="Important">Important</a></li>
                                <li><a href="javascript:;" title="Starred">Starred</a></li>
                            </ul>
                            <hr>
                            <h5 class="p-10 text-strong">Labels</h5>
                            <ul class="nav nav-pills nav-sm" id="mail-labels">
                                <li><a href="javascript:;"><i class="zmdi zmdi-label col-blue-grey"></i>Family</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-label col-blue"></i>Work</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-label col-brown"></i>Shop</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-label col-green"></i>Themeforest</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-label col-blush"></i>Google</a></li>
                            </ul>
                            <hr>
                            <h5 class="p-10 text-strong">Online</h5>
                            <ul class="nav nav-pills nav-stacked nav-sm online-user" id="onlie-offline">
                                <li><a href="javascript:;"><i class="zmdi zmdi-circle col-green" title="Online"></i>Sachin</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-circle col-grey" title="Off Line"></i>John Smith</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-circle col-orange" title="Away"></i>Askay</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-circle col-grey" title="Off Line"></i>Dhavan</a></li>
                                <li><a href="javascript:;"><i class="zmdi zmdi-circle col-grey" title="Off Line"></i>Lee</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="body">
                        <div class="row clearfix">
                            <div class="col-md-12">
                                <button type="button" class="btn btn-raised btn-default waves-effect custom"><i class="zmdi zmdi-attachment-alt"></i></button>
                                <button type="button" class="btn btn-raised btn-default waves-effect custom"><i class="zmdi zmdi-google-drive"></i></button>
                                <button type="button" class="btn btn-raised btn-default waves-effect custom"><i class="zmdi zmdi-collection-folder-image"></i></button>
                                <button type="button" class="btn btn-raised btn-default waves-effect custom"><i class="zmdi zmdi-link"></i></button>
                                <button type="button" class="btn btn-raised btn-default waves-effect custom"><i class="zmdi zmdi-mood"></i></button>
                                <button type="button" class="btn btn-raised bg-red waves-effect custom float-right"><i class="zmdi zmdi-delete"></i></button>
                            </div>
                            <form action="/emailquote" method="POST">
                                {{ csrf_field() }}

                            <div class="col-md-12">
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input name="email" type="text" class="form-control" value="{{ $quote->email }}">
                                    </div>
                                </div>
                                <div class="form-group form-float">
                                    <div class="form-line">
                                        <input name="subject" type="text" class="form-control" value="Regarding your quote">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <textarea name="message" placeholder=" Message here" class="form-control focus" style="padding:10px;border-radius:5px;background-color:#fff;resize:none;height:400px"></textarea>

                                <button type="submit" class="btn btn-raised btn-success waves-effect">Send Message</button>
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
    <script src="{{ asset('/admin/js/ckeditor.js') }}"></script>
    <script src="{{ asset('/admin/js/editors.js') }}"></script>
@endsection