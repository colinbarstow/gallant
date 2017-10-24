@extends('admin.master')
@section('pagelinks')
    <link href="{{ asset('/admin/css/morris.css') }}" rel="stylesheet" />
@endsection
@section('content')
    <section class="content home">
        <div class="container-fluid">
            <div class="block-header">
                <h2>Dashboard</h2>
                <ol class="breadcrumb">
                    <li><a href="/">Website</a></li>
                    <li class="active">Dashboard</li>
                </ol>
            </div>
            <div class="row clearfix">
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <div class="row clearfix top-report">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="card">
                                <div class="carousel slide" data-ride="carousel">
                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <div class="body">
                                                <h3 class="m-t-0">50.5 Gb</h3>
                                                <p class="text-muted">Traffic this month</p>
                                                <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope" value="68" type="success">
                                                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                                                </div>
                                                <small>4% higher than last month</small> </div>
                                        </div>
                                        <div class="item">
                                            <div class="body">
                                                <h3 class="m-t-0">26.8%</h3>
                                                <p class="text-muted">Server Load</p>
                                                <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope" value="32" type="danger">
                                                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="100" style="width:32%;"></div>
                                                </div>
                                                <small>4% higher than last month</small> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="card">
                                <div class="carousel slide" data-ride="carousel">
                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        <div class="item active">
                                            <div class="body">
                                                <h3 class="m-t-0">$ 14,500</h3>
                                                <p class="text-muted">Total Sale</p>
                                                <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope" value="68" type="warning">
                                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                                                </div>
                                                <small>15% higher than last month</small> </div>
                                        </div>
                                        <div class="item">
                                            <div class="body">
                                                <h3 class="m-t-0">1,600</h3>
                                                <p class="text-muted">Total Feedbacks</p>
                                                <div class="progressbar-xs progress-rounded progress-striped progress ng-isolate-scope" value="68" type="info">
                                                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width: 68%;"></div>
                                                </div>
                                                <small>10% higher than last month</small> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="card">
                                <div class="body">
                                    <div class="sparkline" data-type="bar" data-width="97%" data-height="77px" data-bar-Width="5" data-bar-Spacing="4" data-bar-Color="rgb(69, 127, 202)"> 6,7,8,6,7,5,8,5,7,6,8,7,6,7,5,6</div>
                                    <p class="m-b-0 p-t-10 text-center">Server Uptime 95.5%</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <div class="card">
                                <div class="body">
                                    <div class="sparkline" data-type="bar" data-width="97%" data-height="77px" data-bar-Width="5" data-bar-Spacing="4" data-bar-Color="rgb(120, 184, 62)"> 4,2,8,6,7,6,8,3,5,8,5,6,2,8,6,7,6 </div>
                                    <p class="m-b-0 p-t-10 text-center">Visitors 2,105</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="card email-state">
                                <div class="header">
                                    <h2>Emails Sent</h2>
                                    <ul class="header-dropdown m-r--5">
                                        <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i></a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="body">
                                    <div class="row clearfix">
                                        <div class="col-md-7 col-sm-6 col-xs-12 text-center">
                                            <input type="text" class="knob" value="93" data-width="110" data-height="110" data-thickness="0.1" data-fgColor="#f0ad4e" readonly>
                                        </div>
                                        <div class="col-md-5 col-sm-6 col-xs-12 text-center">
                                            <p><i class="zmdi zmdi-circle text-warning"></i> 215 Read</p>
                                            <p><i class="zmdi zmdi-circle col-blue-grey"></i> 34 Unread</p>
                                            <hr>
                                            <small>810 Sent Email in Total</small> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div class="card product-report">
                        <div class="header">
                            <h2>Product Report</h2>
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
                            <div class="row clearfix m-b-25">
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <div class="icon"><i class="zmdi zmdi-chart-donut"></i></div>
                                    <div class="col-in">
                                        <h3 class="counter m-b-0">$4516</h3>
                                        <small class="text-muted m-t-0">Sales Report</small> </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <div class="icon"><i class="zmdi zmdi-chart"></i></div>
                                    <div class="col-in">
                                        <h3 class="counter m-b-0">$6481</h3>
                                        <small class="text-muted m-t-0">Annual Revenue </small> </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4">
                                    <div class="icon"><i class="zmdi zmdi-card"></i></div>
                                    <div class="col-in">
                                        <h3 class="counter m-b-0">$3915</h3>
                                        <small class="text-muted m-t-0">Monthly Revenue</small> </div>
                                </div>
                            </div>
                            <div id="area_chart" class="graph"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-xs-12 col-md-12 col-lg-12">
                    <div class="card visitors-map">
                        <div class="header">
                            <h2>Visitors Statistics</h2>
                        </div>
                        <div class="body">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-xs-12 col-lg-4">
                                    <table class="table table-responsive">
                                        <tbody>
                                        <tr>
                                            <td>USA</td>
                                            <td>$2,009</td>
                                            <td class="text-muted">4.22%</td>
                                            <td class="text-danger">-0.01%</td>
                                        </tr>
                                        <tr>
                                            <td>Germany</td>
                                            <td>$3,526</td>
                                            <td class="text-muted">4.17%</td>
                                            <td class="text-success">+0.06%</td>
                                        </tr>
                                        <tr>
                                            <td>Australia</td>
                                            <td>$2,357</td>
                                            <td class="text-muted">3.15%</td>
                                            <td class="text-danger">-0.12%</td>
                                        </tr>
                                        <tr>
                                            <td>Canada</td>
                                            <td>$3,129</td>
                                            <td class="text-muted">4.01%</td>
                                            <td class="text-success">+0.07%</td>
                                        </tr>
                                        <tr>
                                            <td>France</td>
                                            <td>$2,143</td>
                                            <td class="text-muted">2.80%</td>
                                            <td class="text-success">+0.06%</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="progress-list">
                                        <h4>All <span class="badge pull-right bg-green">47%</span></h4>
                                        <div class="progress-xs not-rounded progress">
                                            <div class="progress-bar bg-green" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"> <span class="sr-only">40%</span> </div>
                                        </div>
                                    </div>
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                                </div>
                                <div class="col-md-8 col-sm-8 col-xs-12 col-lg-8">
                                    <div id="world-map-markers" class="jvector-map"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row clearfix">
                <div class="col-xs-12">
                    <div class="card">
                        <div class="body">
                            <div class="row">
                                <div class="col-md-2 col-sm-4 col-xs-6 text-center">
                                    <p class="m-t-10">Page View</p>
                                    <input type="text" class="knob" value="42" data-linecap="round" data-width="80" data-height="80" data-thickness="0.15" data-fgColor="#8f78db" readonly>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-6 text-center">
                                    <p class="m-t-10">Storage</p>
                                    <input type="text" class="knob" value="81" data-linecap="round" data-width="80" data-height="80" data-thickness="0.15" data-fgColor="#49cdd0" readonly>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-6 text-center">
                                    <p class="m-t-10">New User</p>
                                    <input type="text" class="knob" value="62" data-linecap="round" data-width="80" data-height="80" data-thickness="0.15" data-fgColor="#00adef" readonly>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-6 text-center">
                                    <p class="m-t-10">Total Visit</p>
                                    <input type="text" class="knob" value="38" data-linecap="round" data-width="80" data-height="80" data-thickness="0.15" data-fgColor="#5edb8c" readonly>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-6 text-center">
                                    <p class="m-t-10">Network</p>
                                    <input type="text" class="knob" value="62" data-linecap="round" data-width="80" data-height="80" data-thickness="0.15" data-fgColor="#f67a82" readonly>
                                </div>
                                <div class="col-md-2 col-sm-4 col-xs-6 text-center">
                                    <p class="m-t-10">Server Storage</p>
                                    <input type="text" class="knob" value="38" data-linecap="round" data-width="80" data-height="80" data-thickness="0.15" data-fgColor="#f7bb97" readonly>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="card">
                                <div class="header">
                                    <h2>Browser Used</h2>
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
                                    <div id="donut_chart" class="graph dashboard-donut-chart"></div>
                                    <div class="sparkline" data-type="bar" data-width="97%" data-height="40px" data-bar-Width="5" data-bar-Spacing="4" data-bar-Color="rgb(0, 0, 0)"> 6,7,8,6,7,5,8,5,6,8,5,6,7,6,8,7,6,7,5,8,5,6</div>
                                    <p class="m-b-0 p-t-10 text-center">Pageviews 2,105</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                            <div class="card">
                                <div class="header">
                                    <h2>INBOX</h2>
                                    <ul class="header-dropdown m-r--5">
                                        <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a></li>
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="body">
                                    <ul class="inbox-widget list-unstyled clearfix">
                                        <li class="inbox-inner"> <a href="javascript:void(0)">
                                                <div class="inbox-item">
                                                    <div class="inbox-img"> <img src="{{ asset('admin/images/avatar1.jpg') }}" alt=""> </div>
                                                    <div class="inbox-item-info">
                                                        <p class="author">Aaron	Enlightened</p>
                                                        <p class="inbox-message">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                        <p class="inbox-date">13:34 PM</p>
                                                    </div>
                                                </div>
                                            </a> </li>
                                        <li class="inbox-inner"> <a href="javascript:void(0)">
                                                <div class="inbox-item">
                                                    <div class="inbox-img"> <img src="{{ asset('admin/images/avatar2.jpg') }}" alt=""> </div>
                                                    <div class="inbox-item-info">
                                                        <p class="author">Alvin Doe</p>
                                                        <p class="inbox-message">Lorem Ipsum is simply dummy text oftting industry. Lorem Ipsum has been the industry's</p>
                                                        <p class="inbox-date">13:34 PM</p>
                                                    </div>
                                                </div>
                                            </a> </li>
                                        <li class="inbox-inner"> <a href="javascript:void(0)">
                                                <div class="inbox-item">
                                                    <div class="inbox-img"> <img src="{{ asset('admin/images/avatar3.jpg') }}" alt=""> </div>
                                                    <div class="inbox-item-info">
                                                        <p class="author">Austin</p>
                                                        <p class="inbox-message">text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                        <p class="inbox-date">13:34 PM</p>
                                                    </div>
                                                </div>
                                            </a> </li>
                                        <li class="inbox-inner"> <a href="javascript:void(0)">
                                                <div class="inbox-item">
                                                    <div class="inbox-img"> <img src="{{ asset('admin/images/avatar4.jpg') }}" alt=""> </div>
                                                    <div class="inbox-item-info">
                                                        <p class="author">John Benjamin</p>
                                                        <p class="inbox-message">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                        <p class="inbox-date">13:34 PM</p>
                                                    </div>
                                                </div>
                                            </a> </li>
                                        <li class="inbox-inner"> <a href="javascript:void(0)">
                                                <div class="inbox-item">
                                                    <div class="inbox-img"> <img src="{{ asset('admin/images/avatar5.jpg') }}" alt=""> </div>
                                                    <div class="inbox-item-info">
                                                        <p class="author">Broderick</p>
                                                        <p class="inbox-message">text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                                                        <p class="inbox-date">13:34 PM</p>
                                                    </div>
                                                </div>
                                            </a> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <div class="card">
                                <div class="carousel slide twitter-feed text-center" data-ride="carousel">
                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        <div class="item active"> <i class="zmdi zmdi-twitter"></i>
                                            <p><i class="zmdi zmdi-quote"></i>Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        </div>
                                        <div class="item"> <i class="zmdi zmdi-twitter"></i>
                                            <p><i class="zmdi zmdi-quote"></i>It is a long established fact that a reader will ontent of a page when looking at its layout.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="carousel slide facebook-feed text-center" data-ride="carousel">
                                    <!-- Wrapper for slides -->
                                    <div class="carousel-inner">
                                        <div class="item active"> <i class="zmdi zmdi-facebook"></i>
                                            <p><i class="zmdi zmdi-quote"></i>Lorem Ipsum is simply typesetting industry. Lorem Ipsum has been the industry's standard</p>
                                        </div>
                                        <div class="item"> <i class="zmdi zmdi-facebook"></i>
                                            <p><i class="zmdi zmdi-quote"></i>It is a long established fact that a reader will ontent of a page when looking at its layout.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="card activities">
                                <div class="header">
                                    <h2>Activities</h2>
                                    <ul class="header-dropdown m-r--5">
                                        <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a></li>
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="body">
                                    <div class="streamline b-l b-accent">
                                        <div class="sl-item">
                                            <div class="sl-content">
                                                <div class="text-muted-dk">Just now</div>
                                                <p>Finished task <a href="" class="text-info">#features 4</a>.</p>
                                            </div>
                                        </div>
                                        <div class="sl-item b-info">
                                            <div class="sl-content">
                                                <div class="text-muted-dk">11:30</div>
                                                <p><a href="">@Jessi</a> retwit your post</p>
                                            </div>
                                        </div>
                                        <div class="sl-item b-primary b-l">
                                            <div class="sl-content">
                                                <div class="text-muted-dk">10:30</div>
                                                <p>Call to customer <a href="" class="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div class="sl-item b-warning">
                                            <div class="sl-content">
                                                <div class="text-muted-dk">3 days ago</div>
                                                <p><a href="" class="text-info">Jessi</a> commented your post.</p>
                                            </div>
                                        </div>
                                        <div class="sl-item b-primary b-l">
                                            <div class="sl-content">
                                                <div class="text-muted-dk">10:30</div>
                                                <p>Call to customer <a href="" class="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div class="sl-item b-primary b-l">
                                            <div class="sl-content">
                                                <div class="text-muted-dk">10:30</div>
                                                <p>Call to customer <a href="" class="text-info">Jacob</a> and discuss the detail.</p>
                                            </div>
                                        </div>
                                        <div class="sl-item b-warning">
                                            <div class="sl-content">
                                                <div class="text-muted-dk">3 days ago</div>
                                                <p><a href="" class="text-info">Jessi</a> commented your post.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div class="card">
                                <div class="header">
                                    <h2>Recent Orders</h2>
                                    <ul class="header-dropdown m-r--5">
                                        <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="zmdi zmdi-more-vert"></i></a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);">Action</a></li>
                                                <li><a href="javascript:void(0);">Another action</a></li>
                                                <li><a href="javascript:void(0);">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="body">
                                    <div class="table-responsive">
                                        <table class="table table-striped">
                                            <thead>
                                            <tr>
                                                <th>Invoice#</th>
                                                <th>Name</th>
                                                <th>Item</th>
                                                <th>Date</th>
                                                <th>Amount</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>#2583</td>
                                                <td>Jhone Doe</td>
                                                <td><span class="label label-info">iPhone7</span></td>
                                                <td>Sept 11, 2017</td>
                                                <td><span class="text-success">$350</span></td>
                                            </tr>
                                            <tr>
                                                <td>#2584</td>
                                                <td>Deborah Young</td>
                                                <td><span class="label label-info">Nokia 6</span></td>
                                                <td>Sept 13, 2017</td>
                                                <td><span class="text-success">$180</span></td>
                                            </tr>
                                            <tr>
                                                <td>#2585</td>
                                                <td>Mike Dake</td>
                                                <td><span class="label label-info">Redmi Note4</span></td>
                                                <td>Sept 18, 2017</td>
                                                <td><span class="text-success">$120</span></td>
                                            </tr>
                                            <tr>
                                                <td>#2586</td>
                                                <td>Jhone Doe</td>
                                                <td><span class="label label-info">iPhonex</span></td>
                                                <td>Sept 18, 2017</td>
                                                <td><span class="text-success">$870</span></td>
                                            </tr>
                                            <tr>
                                                <td>#2587</td>
                                                <td>Jhonson lee</td>
                                                <td><span class="label label-info">iPhone7</span></td>
                                                <td>Sept 22, 2017</td>
                                                <td><span class="text-success">$350</span></td>
                                            </tr>
                                            <tr>
                                                <td>#2588</td>
                                                <td>Lew Shawon</td>
                                                <td><span class="label label-info">iPhone 6s</span></td>
                                                <td>Sept 29, 2017</td>
                                                <td><span class="text-success">$315</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="row sales-report">
                                        <div class="col-md-6 col-sm-6 col-xs-6">
                                            <h2>September 2017</h2>
                                            <p>SALES REPORT</p>
                                        </div>
                                        <div class="col-md-6 col-sm-6 col-xs-6 ">
                                            <h1 class="text-right text-success m-t-20">$2,185</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div class="card current_progress">
                                <div class="header">
                                    <h2>CHAT Box</h2>
                                    <ul class="header-dropdown m-r--5">
                                        <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more-vert"></i> </a>
                                            <ul class="dropdown-menu pull-right">
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Action</a></li>
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Another action</a></li>
                                                <li><a href="javascript:void(0);" class=" waves-effect waves-block">Something else here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div class="body">
                                    <div class="chat-widget">
                                        <ul class="chat-scroll-list pull-left">
                                            <li class="left pull-left"> <img src="{{ asset('admin/images/avatar1.jpg') }}" alt="">
                                                <div class="chat-info"> <a class="name" href="javascript:void(0)">Jone Doe</a> <span class="datetime">6:12</span> <span class="message"> It was popularised in the 1960s with the release of Letraset sheets containing</span> </div>
                                            </li>
                                            <li class="right"> <img src="{{ asset('admin/images/avatar2.jpg') }}" alt="">
                                                <div class="chat-info"> <a class="name" href="javascript:void(0)">Austin</a> <span class="datetime">6:12</span> <span class="message">Richard McClintock, a Latin professor at Hampden-Sydney College</span> </div>
                                            </li>
                                            <li class="left pull-left"> <img src="{{ asset('admin/images/avatar1.jpg') }}" alt="">
                                                <div class="chat-info"> <a class="name" href="javascript:void(0)">Jone Doe</a> <span class="datetime">6:12</span> <span class="message"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit </span> </div>
                                            </li>
                                            <li class="right"> <img src="{{ asset('admin/images/avatar2.jpg') }}" alt="">
                                                <div class="chat-info"> <a class="name" href="javascript:void(0)">Austin</a> <span class="datetime">6:12</span> <span class="message">There are many variations of passages of Lorem Ipsum available,</span> </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="input-group">
                                        <div class="form-line">
                                            <input type="text" class="form-control date" placeholder="Enter your email...">
                                        </div>
                                        <span class="input-group-addon"> <i class="material-icons">send</i> </span> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                            <div class="card">
                                <div class="header">
                                    <h2>Social Media</h2>
                                    <small>Lorem Ipsum is simply dummy</small>
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
                                    <div class="table-responsive social_media_table">
                                        <table class="table table-hover">
                                            <thead>
                                            <tr>
                                                <th>Media</th>
                                                <th>Name</th>
                                                <th>Like</th>
                                                <th>Comments</th>
                                                <th>Share</th>
                                                <th>Members</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td><span class="list-icon linkedin"><i class="zmdi zmdi-linkedin"></i></span></td>
                                                <td><span class="list-name">Linked In</span> <span class="text-muted">Florida, United States</span></td>
                                                <td>19K</td>
                                                <td>14K</td>
                                                <td>10K</td>
                                                <td><span class="label label-success">2341</span></td>
                                            </tr>
                                            <tr>
                                                <td><span class="list-icon twitter-table"><i class="zmdi zmdi-twitter"></i></span></td>
                                                <td><span class="list-name">Twitter</span> <span class="text-muted">Arkansas, United States</span></td>
                                                <td>7K</td>
                                                <td>11K</td>
                                                <td>21K</td>
                                                <td><span class="label label-success">952</span></td>
                                            </tr>
                                            <tr>
                                                <td><span class="list-icon facebook"><i class="zmdi zmdi-facebook"></i></span></td>
                                                <td><span class="list-name">Facebook</span> <span class="text-muted">Illunois, United States</span></td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>8K</td>
                                                <td><span class="label label-success">6127</span></td>
                                            </tr>
                                            <tr>
                                                <td><span class="list-icon google"><i class="zmdi zmdi-google-plus"></i></span></td>
                                                <td><span class="list-name">Google Plus</span> <span class="text-muted">Arizona, United States</span></td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>154</td>
                                                <td><span class="label label-success">325</span></td>
                                            </tr>
                                            <tr>
                                                <td><span class="list-icon youtube"><i class="zmdi zmdi-youtube-play"></i></span></td>
                                                <td><span class="list-name">YouTube</span> <span class="text-muted">Alaska, United States</span></td>
                                                <td>15K</td>
                                                <td>18K</td>
                                                <td>200</td>
                                                <td><span class="label label-success">160</span></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row clearfix">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="card">
                                <div class="body" id="footer">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-4">
                                            <h5>Email Newsletters</h5>
                                            <p>Sign up for new MaterialWrap content, updates, and offers.</p>
                                            <div class="input-group">
                                                <div class="form-line">
                                                    <input type="text" class="form-control date" placeholder="Enter your email...">
                                                </div>
                                                <span class="input-group-addon"> <i class="material-icons">send</i> </span> </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-2">
                                            <h5>Company</h5>
                                            <ul class="list-unstyled company">
                                                <li><a href="javascript:void(0)">About Us </a></li>
                                                <li><a href="javascript:void(0)">Careers</a></li>
                                                <li><a href="javascript:void(0)">Privacy Policy</a></li>
                                                <li><a href="javascript:void(0)">Contact Us</a></li>
                                            </ul>
                                        </div>
                                        <div class="col-xs-12 col-sm-6">
                                            <h5>Want to Work with Us?</h5>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                        </div>
                                        <div class="col-xs-12">
                                            <p class="copy m-b-0">© Copyright
                                                <time class="year">2017</time>
                                                WrapTheme  - All Rights Reserved</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
@endsection

@section('pagescripts')
    <script src="{{ asset('/admin/js/jquery.sparkline.js') }}"></script> <!-- Sparkline Plugin Js -->
    <script src="{{ asset('/admin/js/flotscripts.bundle.js') }}"></script><!-- Flot Charts Plugin Js -->
    <script src="{{ asset('/admin/js/raphael.min.js') }}"></script> <!-- Morris Plugin Js -->
    <script src="{{ asset('/admin/js/jquery.knob.min.js') }}"></script> <!-- Jquery Knob Plugin Js -->

    <script src="{{ asset('/admin/js/jquery-jvectormap-1.2.2.min.js') }}"></script> <!-- JVectorMap Plugin Js -->
    <script src="{{ asset('/admin/js/jquery-jvectormap-world-mill-en.js') }}"></script> <!-- JVectorMap Plugin Js -->

    <script src="{{ asset('/admin/js/sparkline.js') }}"></script>
    <script src="{{ asset('/admin/js/jvectormap.js') }}"></script>
    <script src="{{ asset('/admin/js/jquery-knob.js') }}"></script>

    <script src="{{ asset('/admin/js/morris.js') }}"></script> <!-- Morris Plugin Js -->
    <script src="{{ asset('/admin/js/index.js') }}"></script>
@endsection