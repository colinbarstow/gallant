<!doctype html>
<html class="no-js" lang="en">
<head>
    @include('frontend.partials.meta')
    @yield('meta')
    @include('frontend.partials.links')
</head>
<body id="page-top">
    @include('frontend.partials.google')
    @include('frontend.partials.ie')
    @include('frontend.partials.preloader')
    @include('frontend.partials.nav')
    @yield('content')
    @include('frontend.partials.footer')
    @include('frontend.partials.scripts')
</body>
</html>
