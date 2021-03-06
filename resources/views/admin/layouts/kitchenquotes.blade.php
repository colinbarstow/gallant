@extends('admin.master')
@section('pagelinks')

@endsection
@section('content')
    <section class="content">
        <div class="container-fluid">
            <div class="block-header">
                <h2>{{ $tablename }}</h2>
                <ol class="breadcrumb">
                    <li><a href="{{ url('/adminarea') }}">Dashboard</a></li>
                    <li class="active">{{ $tablename }}</li>
                </ol>
            </div>
            <!-- Basic Examples -->
            <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="card">
                        <div class="header">
                            <h2> {{ $tablename }} </h2>
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
                            <table class="table table-bordered table-striped table-hover js-basic-example dataTable">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Quote</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                </tr>
                                </thead>
                                <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Quote</th>
                                    <th>Status</th>
                                    <th>Options</th>
                                </tr>
                                </tfoot>
                                <tbody>
                                @foreach($quotes as $quote)
                                <tr>
                                    <td>{{ $quote->name }}</td>
                                    <td>{{ $quote->email }}</td>
                                    <td>{{ $quote->number }}</td>
                                    <td>£{{ $quote->quote }}</td>
                                    <td><button class="btn btn-success">{{ $quote->status }}</button></td>
                                    <td><a href="/adminarea/editquote/{{ $quote->id }}"><i class="fa fa-2x fa-edit"></i></a>&nbsp;
                                        <a href="/adminarea/emailquote/{{ $quote->id }}"><i class="fa fa-2x fa-envelope"></i></a>&nbsp;
                                        <form action="/updatequotestatus" method="POST" style="display:inline-block">
                                            {{ csrf_field() }}
                                            <input type="hidden" name="id" value="{{ $quote->id }}">
                                            <label for="updateButton"><i class="fa fa-2x fa-check"></i></label>
                                            <input type="submit" id="updateButton" style="display:none">
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('pagescripts')
    <script src="{{ asset('/admin/js/jquery.dataTables.js') }}"></script>
    <script src="{{ asset('/admin/js/dataTables.bootstrap.js') }}"></script>
    <script src="{{ asset('/admin/js/dataTables.buttons.min.js') }}"></script>
    <script src="{{ asset('/admin/js/buttons.flash.min.js') }}"></script>
    <script src="{{ asset('/admin/js/jszip.min.js') }}"></script>
    <script src="{{ asset('/admin/js/pdfmake.min.js') }}"></script>
    <script src="{{ asset('/admin/js/vfs_fonts.js') }}"></script>
    <script src="{{ asset('/admin/js/buttons.html5.min.js') }}"></script>
    <script src="{{ asset('/admin/js/buttons.print.min.js') }}"></script>
    <script src="{{ asset('/admin/js/jquery-datatable.js') }}"></script>
@endsection