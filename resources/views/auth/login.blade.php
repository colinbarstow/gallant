<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <title>:: adminX Admin ::</title>
    <!-- Favicon-->
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <!-- Custom Css -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" type="text/css">
    <link href="{{ asset('admin/css/main.css') }}" rel="stylesheet">
    <link href="{{ asset('admin/css/login.css') }}" rel="stylesheet">

    <!-- adminX You can choose a theme from css/themes instead of get all themes -->
    <link href="assets/css/themes/all-themes.css" rel="stylesheet" />
</head>

<body class="theme-purple" id="authentication">
<div class="authentication">
    <div class="container-fluid">
        <div class="row clearfix">
            <div class="col-lg-9 col-md-8 col-xs-12 p-l-0">
                <div class="l-detail">
                    <h5 class="position">Welcome</h5>
                    <h1 class="position">Gallant Restorations</h1>
                    <h3 class="position">Sign in to start your Admin session</h3>
                    <p class="position">Control restorers.org.uk from within.</p>
                    <ul class="list-unstyled l-social position">
                        <li><a href="#"><i class="zmdi zmdi-facebook-box"></i></a></li>
                        <li><a href="#"><i class="zmdi zmdi-linkedin-box"></i></a></li>
                        <li><a href="#"><i class="zmdi zmdi-pinterest-box"></i></a></li>
                        <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                    </ul>
                    <ul class="list-unstyled l-menu">
                        <li><a href="{{ url('/contact') }}">Contact Us</a></li>
                        <li><a href="{{ url('/about') }}">About Us</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-xs-12 p-r-0">
                <div class="card position">
                    <h4 class="l-login">Login</h4>
                    <form class="col-md-12" id="sign_in" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} form-float">
                            <div class="form-line">
                                <input type="text" class="form-control" name="email" value="{{ old('email') }}" required>
                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                                <label class="form-label">Email</label>
                            </div>
                        </div>
                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} form-float" >
                            <div class="form-line">
                                <input type="password" class="form-control" name="password" required>
                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                                <label class="form-label">Password</label>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }} class="filled-in chk-col-cyan">
                            <label for="rememberme">Remember Me</label>
                        </div>
                        <button type="submit" class="btn btn-raised g-bg-blue waves-effect" title="">SIGN IN </button>
                        <div class="text-left"> <a href="forgot-password.html">Forgot Password?</a> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Jquery Core Js -->
<script src="{{ asset('admin/js/libscripts.bundle.js') }}"></script> <!-- Lib Scripts Plugin Js -->
<script src="{{ asset('admin/js/vendorscripts.bundle.js') }}"></script> <!-- Lib Scripts Plugin Js -->

<script src="{{ asset('admin/js/sketch.min.js') }}"></script><!-- sketch Animation Js -->

<script src="{{ asset('admin/js/mainscripts.bundle.js') }}"></script><!-- Custom Js -->
<script src="{{ asset('admin/js/authsketch.js') }}"></script><!-- sketch Js -->
</body>
</html>
