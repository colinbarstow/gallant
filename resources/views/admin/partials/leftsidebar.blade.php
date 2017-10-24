<aside id="leftsidebar" class="sidebar">
    <!-- Menu -->
    <div class="menu">
        <ul class="list">
            <li>
                <!-- User Info -->
                <div class="user-info">
                    <div class="admin-action-info"> <span>Welcome</span>
                        <h3>{{ Auth::user()->first_name }} {{ Auth::user()->last_name }}</h3>
                    </div>
                </div>
                <!-- #User Info -->
            </li>
            <li class="header">MAIN NAVIGATION</li>
            <li> <a href="{{ url('/adminarea') }}"><i class="zmdi zmdi-home"></i><span>Admin</span> </a>
            </li>
            <li>
                <a href="{{ url('/adminarea/quotes') }}"><i class="zmdi zmdi-assignment"></i><span>Quotes</span>
                    @if($quotes != "0")
                        <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
                    @endif
                </a>
            </li>
            <li>
                <a href="{{ url('/adminarea/enquiries') }}"><i class="zmdi zmdi-assignment"></i><span>Enquiries</span>
                    @if($enquiries != "0")
                        <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
                    @endif
                </a>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-copy"></i><span>Services</span> </a>
                <ul class="ml-menu">
                    <li> <a href="{{ url('/adminarea/addservice') }}">Add a Service</a></li>
                    <li> <a href="{{ url('/adminarea/services') }}">Services List</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-camera"></i><span>Pages</span> </a>
                <ul class="ml-menu">
                    <li> <a href="{{ url('/adminarea/home') }}">Home Page</a></li>
                    <li> <a href="{{ url('/adminarea/editkitchen') }}">Kitchen Spraying</a></li>
                    <li> <a href="{{ url('/adminarea/contact') }}">Contact Page</a></li>
                    <li> <a href="{{ url('/adminarea/about') }}">About Page</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-blogger"></i><span>Blog</span> </a>
                <ul class="ml-menu">
                    <li> <a href="{{ url('/adminarea/addblogpost') }}">Add Blog Post</a></li>
                    <li> <a href="{{ url('/adminarea/blogposts') }}">Blog List</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-camera"></i><span>Projects</span> </a>
                <ul class="ml-menu">
                    <li> <a href="{{ url('/adminarea/addproject') }}">Add Project</a></li>
                    <li> <a href="{{ url('/adminarea/projects') }}">Project List</a></li>
                </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-camera"></i><span>Testimonials</span> </a>
                <ul class="ml-menu">
                    <li> <a href="{{ url('/adminarea/addtestimonial') }}">Add Testimonial</a></li>
                    <li> <a href="{{ url('/adminarea/testimonials') }}">Testimonial List</a></li>
                </ul>
            </li>
            <li> <a href="{{ url('/adminarea/newsletter') }}"><i class="zmdi zmdi-mail-send"></i><span>Newsletter</span> </a>
            </li>
        </ul>
    </div>
    <!-- #Menu -->
</aside>