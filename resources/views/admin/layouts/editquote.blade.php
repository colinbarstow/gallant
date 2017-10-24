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
                            <form action="/editquote" method="POST">
                                {{ csrf_field() }}
                                <input type="hidden" name="id" value="{{$quote->id}}">
                                <h2 class="card-inside-title">User Information</h2>
                                <div class="row clearfix">
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <span class="input-group-addon"> <i class="material-icons">person</i> </span>
                                            <div class="form-line">
                                                <input type="text" name="name" class="form-control date" placeholder="{{ $quote->name }}" value="{{ $quote->name }}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <span class="input-group-addon"> <i class="fa fa-envelope"></i> </span>
                                            <div class="form-line">
                                                <input type="text" name="email" class="form-control date" placeholder="{{ $quote->email }}" value="{{ $quote->email }}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="input-group">
                                            <span class="input-group-addon"> <i class="fa fa-phone"></i> </span>
                                            <div class="form-line">
                                                <input type="text" name="number" class="form-control date" placeholder="{{ $quote->number }}" value="{{ $quote->number }}">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Quote Information</h2>
                                <div class="row clearfix">
                                    <div class="col-md-3">
                                        <div class="input-group">
                                            <span class="input-group-addon">Doors</span>
                                            <div class="form-line">
                                                <input type="text" name="doors" class="form-control date" placeholder="{{ $quote->doors }}" value="{{ $quote->doors }}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="input-group">
                                            <span class="input-group-addon">Drawers</span>
                                            <div class="form-line">
                                                <input type="text" name="drawers" class="form-control date" placeholder="{{ $quote->drawers }}" value="{{ $quote->drawers }}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="input-group">
                                            <span class="input-group-addon">Meterage</span>
                                            <div class="form-line">
                                                <input type="text" name="meterage" class="form-control date" placeholder="{{ $quote->meterage }}" value="{{ $quote->meterage }}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="input-group">
                                            <span class="input-group-addon">Extras</span>
                                            <div class="form-line">
                                                <input type="text" name="extras" class="form-control date" placeholder="{{ $quote->extras }}" value="{{ $quote->extras }}">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="card-inside-title">Additional Information</h2>
                                <div class="row clearfix">
                                    <div class="col-md-8">
                                        <div class="input-group">
                                            <div class="form-line">
                                                <textarea name="comments" class="form-control" style="resize:none">{{ $quote->comments }}</textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-md-8">
                                        <div class="input-group">
                                            <div class="form-line">
                                                <button type="submit" class="btn btn-success">Submit</button>
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