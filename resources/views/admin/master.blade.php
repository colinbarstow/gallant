<!DOCTYPE html>
<html>
<head>
    @include('admin.partials.meta')
    @include('admin.partials.links')
    @yield('pagelinks')
</head>

<body class="theme-blue">
    @include('admin.partials.loader')
    <div class="overlay"></div>
    @include('admin.partials.search')
    @include('admin.partials.topbar')

    @include('admin.partials.leftsidebar')
    @yield('content')
    @yield('pagescripts')


    @include('admin.partials.scripts')
</body>
</html>