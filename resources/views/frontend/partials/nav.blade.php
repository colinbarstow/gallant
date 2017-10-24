<nav class="navbar navbar-default navbar-static-top mega">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Logo -->
            <a class="navbar-brand" href="../../index.html"><img class="navbar-logo" src="../../assets/images/logo.png" alt="Gallant Restorations"></a>
        </div><!-- / .navbar-header -->

        <!-- Navbar Links -->
        <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li>
                    <a href="{{ url('/') }}">Home</a>
                </li>
                <li>
                    <a href="{{ url('/kitchens') }}">Kitchens</a>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350" role="button" aria-haspopup="true" aria-expanded="false">Services <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <div class="row">
                            <!-- Basic -->
                            <div class="col-lg-12 mb-sm-30">
                                @foreach($services as $service)
                                <li>
                                    <a href="/service/{{ $service->slug }}">
                                        <i class="fa fa-font"></i> {{ $service->title }}
                                    </a>
                                </li>
                                @endforeach
                            </div>
                        </div><!-- / .row -->
                    </ul><!-- / .dropdown-menu -->
                </li>
                <li>
                    <a href="{{ url('/blog') }}">Blog</a>
                </li>
                <li>
                    <a href="{{ url('/about') }}">About</a>
                </li>
                <li>
                    <a href="{{ url('/contact') }}">Contact</a>
                </li>
            </ul><!-- / .nav .navbar-nav -->

        </div><!--/.navbar-collapse -->
    </div><!-- / .container -->
</nav><!-- / .navbar -->