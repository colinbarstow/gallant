@extends('frontend.master')
@section('content')
    <div id="home" class="main-demo-hero" style="background: url(/frontend/images/home/{{ $home->home_image }});background-size:cover;">
        <div class="bg-overlay">

            <!-- Hero Content -->
            <div class="hero-content-wrapper">
                <div class="hero-content">

                    <h1 class="hero-lead wow fadeInLeft" data-wow-duration="1.5s">Gallant<br> Restorations</h1>
                    <h4 class="h-alt hero-subheading wow fadeIn" data-wow-duration="2s" data-wow-delay=".7s">Multipage &amp; Onepage HTML5 Templates</h4>
                    <a href="#about" class="btn wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">Learn More</a>

                </div>
            </div>

            <!-- Scroller -->
            <a href="#welcome" class="scroller scroller-dark">
                <span class="scroller-text">scroll down</span>
                <span class="linea-basic-magic-mouse"></span>
            </a>

        </div><!-- / .bg-overlay -->
    </div><!-- / .main-hero-2 -->
    <section id="about" class="container">
        <div class="row">

            <div class="ws-l"></div>

            <header class="sec-heading">
                <h2>Welcome to {{ config('app.name') }}</h2>
                <span class="subheading">{{ $home->sub_header }}</span>
            </header>

            <div class="col-md-offset-2 col-md-8 text-center ws-m">
                <p>{{ $home->about }}</p>
            </div>

            <div class="col-md-12">
                <img class="img-responsive wow fadeIn" data-wow-duration="2s" src="/frontend/images/home/{{ $home->about_image}}">
            </div>

        </div><!-- / .row -->
    </section><!-- / .section -->
    <div class="gray-bg">
        <section id="services" class="container ft-cards">
            <div class="row section">

                <header class="sec-heading">
                    <h2>{{ $home->services_header }}</h2>
                    <span class="subheading">{{ $home->services_sub_header }}</span>
                </header>

                @foreach($services as $service)
                <!-- Item 1 -->
                <div class="col-lg-4 col-md-6 mb-sm-50">
                    <div class="ft-item wow fadeInUp" data-wow-duration="1s" style="min-height:450px;">
                        <span><img src="/frontend/images/services/{{ $service->image }}" height="50px"></span>
                        <h4>{{ $service->title }}</h4>
                        <p>{{ $service->short_description }}</p>
                        <a href="/service/{{ $service->slug }}">Learn more <span class="linea-arrows-slim-right"></span></a>
                    </div>
                </div>
                @endforeach


            </div><!-- / .row -->
        </section>
    </div><!-- / .gray-bg -->
    <div id="skillsCircles" class="circles-counters">
        <div class="container">
            <div id="counters" class="row count-wrapper">



            </div><!-- / .row -->
        </div><!-- / .container -->
    </div><!-- / .circles-counters -->
    <section class="container section ft-x">
        <div class="row">

            <header class="sec-heading">
                <h2>{{ $home->kitchen_header }}</h2>
                <span class="subheading">{{ $home->kitchen_sub_header }}</span>
            </header>

            <!-- Feature 1 -->
            <div class="col-lg-4 wow fadeInLeft" data-wow-duration=".8s">

                <!-- white space -->
                <div class="ws-m"></div>

                <!-- Material right aligned - Item 1 -->
                <div class="col-md-12 no-gap ws-s ft-item ft-material right-align">
                    <div class="ft-content">
                        <h5>{{ $home->kitchen_process_header_1 }}</h5>
                        <p>{{ $home->kitchen_process_description_1 }}</p>
                    </div>
                    <div class="ft-icon">
                        <i class="{{ $home->kitchen_process_icon_1 }}"></i>
                    </div>
                </div><!-- / .ft-item -->

                <!-- Material right aligned - Item 2 -->
                <div class="col-md-12 no-gap ws-s ft-item ft-material right-align">
                    <div class="ft-content">
                        <h5>{{ $home->kitchen_process_header_2 }}</h5>
                        <p>{{ $home->kitchen_process_description_2 }}</p>
                    </div>
                    <div class="ft-icon">
                        <i class="{{ $home->kitchen_process_icon_2 }}"></i>
                    </div>
                </div><!-- / .ft-item -->

            </div><!-- / .col-lg-4 -->

            <!-- Center Image -->
            <div class="col-lg-4">
                <img src="/frontend/images/home/{{ $home->kitchen_image }}" alt="iPad cover" class="img-responsive center-block wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
            </div>

            <!-- Features Left -->
            <div class="col-lg-4 wow fadeInRight"  data-wow-duration=".8s">

                <!-- white space -->
                <div class="ws-m"></div>

                <!-- Item 3 -->
                <div class="col-md-12 no-gap ws-s ft-item ft-material">
                    <i class="{{ $home->kitchen_process_icon_3 }}"></i>
                    <h5>{{ $home->kitchen_process_header_3 }}</h5>
                    <p>{{ $home->kitchen_process_description_3 }}</p>
                </div><!-- / .ft-item -->

                <!-- Item 4 -->
                <div class="col-md-12 no-gap ws-s ft-item ft-material">
                    <i class="{{ $home->kitchen_process_icon_4 }}"></i>
                    <h5>{{ $home->kitchen_process_header_4 }}</h5>
                    <p>{{ $home->kitchen_process_description_4 }}</p>
                </div><!-- / .ft-item -->

            </div><!-- / .col-lg-4 -->

        </div><!-- / .row -->
    </section><!-- / .container -->
    <section class="container-fluid portfolio-layout portfolio-columns-fw" style="padding-bottom: 50px">
        <div class="row">
            <header class="sec-heading">
                <h2>We cover all areas in the UK</h2>
                <span class="subheading">Select your town from the list below.</span>
            </header>
        </div><!-- / .row -->

        <div class="row">
            @foreach($towns as $town)
                <div class="col-md-3" style="text-align:center;">
                    <h3><a style="color:#333333;" href="/in/{{$town->slug}}">{{$town->name}}</a></h3>
                </div><!-- / .portfolio-item -->
            @endforeach
        </div><!-- / .row -->
    </section><!-- / .portfolio-columns-fw -->
    <div class="number-counters" style="background: url(../frontend/images/home/kitchen.png);background-size: cover;background-position: 50%;background-attachment: fixed;">
        <div class="container">
            <div id="counters" class="row count-wrapper">



            </div><!-- / .row -->
        </div><!-- / .container -->
    </div><!-- / .number-counters -->

    <section class="container-fluid portfolio-layout portfolio-columns-fw">
        <div class="row">
            <header class="sec-heading">
                <h2>Some of our projects</h2>
                <span class="subheading">Lorem ipsum dolor sit amet consectetur adipisicing</span>
            </header>
        </div><!-- / .row -->

        <!-- Filters -->
        <div class="row">
            <ul id="pfolio-filters" class="portfolio-filters">
                <li class="active"><a href="#" data-filter="*">All</a></li>
                @foreach($tags as $tag)
                    <li><a href="#" data-filter=".{{ $tag->name }}">{{ $tag->name }}</a></li>
                @endforeach
            </ul>
        </div>

        <div class="row">
            <div id="pfolio">
                @foreach($projects->take(6) as $project)
                <!-- Item 1 -->
                <div class="col-md-4 portfolio-item">
                    <div class="p-wrapper @foreach($project->tags as $tag){{ $tag->name }} @endforeach hover-default">
                        <img src="/frontend/images/projects/{{ $project->image }}">
                        <div class="p-hover">
                            <div class="p-content">
                                <h4>{{ $project->title }}</h4>
                                <h6 class="subheading">{{ $project->sub_title }}</h6>
                            </div>
                        </div>
                        <a href="#" class="open-btn"><i class="fa fa-expand"></i></a>
                    </div>
                </div><!-- / .portfolio-item -->
                @endforeach

            </div><!-- / #pfolio -->
        </div><!-- / .row -->
        <div class="col-md-12 col-sm-12" style="padding-top:20px;padding-bottom:20px;text-align:center">
            <a href="{{ url('/projects') }}" class="btn btn-success">View All Projects</a>
        </div>
    </section><!-- / .portfolio-columns-fw -->
    <div class="cta-link">
        <div class="bg-overlay">

            <div class="cta-wrapper">
                <h3 class="h-alt wow fadeIn" data-wow-delay=".1s" data-wow-duration="1s">See what we can do for you</h3>
                <a href="#contact" class="btn btn-light btn-large wow fadeIn" data-wow-delay=".3s" data-wow-duration="1s">Get in touch</a>
            </div>

        </div>
    </div><!-- / .dark-bg .cta-link -->
    <div id="testimonials" class="gray-bg">
        <section class="container testimonials-3col">
            <div class="row section">

                <header class="sec-heading">
                    <h2>What people say about us</h2>
                    <span class="subheading">Read some of the testimonials from our clients</span>
                </header>

                @foreach($testimonials->take(3) as $testimonial)
                <!-- Item 1 -->
                <div class="col-md-4 mb-sm-50">
                    <div class="t-item wow fadeIn" data-wow-duration="1s">
                        <img src="/frontend/images/testimonials/{{ $testimonial->image }}" width="100px">
                        <blockquote>
                            <p>{{ $testimonial->testimonial }}</p>
                            <footer>
                                <cite>by {{ $testimonial->name }}<span>{{ ucfirst($testimonial->location) }}</span></cite>
                            </footer>
                        </blockquote>
                    </div><!-- / .t-item -->
                </div><!-- / .col-md-4 -->
                @endforeach


            </div><!-- / .row -->

            <!-- Client Slider -->
            <div class="row">
                <ul class="t-clients clients-slider ws-m">
                    @foreach($clients->take(6) as $client)
                    <li><a href="#"><img src="/frontend/images/{{$client->image}}" alt="Client"></a></li>
                    @endforeach
                </ul><!-- / .t-clients -->
            </div><!-- / .row -->

        </section><!-- / .container -->
    </div><!-- / .gray-bg -->
    <div class="gray-bg">
        <section id="blog" class="section container blog-columns blog-preview">
            <div class="row">

                <header class="sec-heading">
                    <h2>Latest from our blog</h2>
                    <span class="subheading">Check out our blog to see what were up to</span>
                </header>

                @foreach($posts->take(3) as $post)
                <!-- Blog Post 1 -->
                <div class="col-lg-4 col-md-6 mb-sm-50">
                    <div class="blog-post wow fadeIn" data-wow-duration="2s">

                        <!-- Image -->
                        <a href="/blog/{{ $post->slug }}" class="post-img"><img src="/frontend/images/posts/{{ $post->image }}" alt="Blog Post 1"></a>

                        <div class="bp-content">

                            <!-- Meta data -->
                            <div class="post-meta">
                                <a href="#" class="post-date">
                                    <i class="fa fa-calendar-o"></i>
                                    <span>{{ \Carbon\Carbon::parse($post->created_at)->toFormattedDateString() }}</span>
                                </a>
                                <a href="#" class="post-comments">
                                    <i class="fa fa-comments-o"></i>
                                    <span>{{ $post->comments }}</span>
                                </a>
                            </div><!-- / .meta -->

                            <!-- Post Title -->
                            <a href="/blog/{{ $post->slug }}" class="post-title"><h4>{{ $post->title }}</h4></a>

                            <!-- Blurb -->
                            <p>{{ substr($post->post, 0, 100)}}...</p>

                            <!-- Link -->
                            <a href="/blog/{{ $post->slug }}" class="btn btn-small">Read More</a>

                        </div><!-- / .bp-content -->

                    </div><!-- / .blog-post -->
                </div><!-- / .col-lg-4 -->
            @endforeach


            </div><!-- / .row -->
        </section><!-- / .container -->
    </div><!-- / .gray-bg -->
    <div class="cta-newsletter">
        <div class="bg-overlay">
            <div class="cta-wrapper">

                <h3 class="cta-lead h-alt wow fadeIn" data-wow-delay=".1s" data-wow-duration="1s">Join our newsletter</h3>

                <form class="mc-ajax mc-form subscribe-form" _lpchecked="1">

                    <!-- Email -->
                    <input type="email" name="EMAIL" placeholder="Your email address" id="mc-email" class="wow fadeInUp" data-wow-delay=".1s" data-wow-duration="1s" >

                    <!-- Send Button -->
                    <input type="submit" name="subscribe" value="Join Us" class="btn btn-light btn-large wow fadeInUp mc-send-btn" data-wow-delay=".1s" data-wow-duration="1s">

                    <!-- Info (uncomment this for extra info) -->
                    <!-- <label for="mc-email" class="mc-info"></label> -->

                    <!-- Ajax message -->
                    <div class="subscribe-result"></div>

                </form>

            </div><!-- / .cta-wrapper -->
        </div><!-- / .bg-overlay -->
    </div><!-- / .cta-newsletter -->
    <section id="contact" class="section contact-1">

        <header class="sec-heading">
            <h2>Countact Us</h2>
            <span class="subheading">We love to hear from you</span>
        </header>

        <div class="contact-wrapper">
            <!-- Map -->
            <div id="map-canvas" class="gmap map-boxed"></div>

            <!-- Show Info Button -->
            <div class="show-info-link">
                <a href="#" class="show-info"><i class="fa fa-info"></i><h6>Show info</h6></a>
            </div>

            <div class="container">
                <div class="row ws-m">

                    <!-- Address Info -->
                    <div class="col-xs-offset-1 col-xs-11 col-md-offset-2 col-md-6 contact-info-wrapper">
                        <address>
                            <div class="row">

                                <!-- Phone -->
                                <div class="col-sm-6 address-group">
                                    <span>Phone</span>
                                    <a href="#">{{ $contact->number_1 }}</a>
                                    <a href="#">{{ $contact->number_2 }}</a>
                                </div>

                                <!-- Address -->
                                <div class="col-sm-5 address-group">
                                    <span>Address</span>
                                    <p>{{ $contact->address }}</p>
                                </div>

                            </div><!-- / .row -->

                            <div class="row">

                                <!-- Email -->
                                <div class="col-sm-6 address-group">
                                    <span>Email</span>
                                    <a href="mailto:{{ $contact->email_1 }}">{{ $contact->email_1 }}</a>
                                    <a href="mailto:{{ $contact->email_2 }}">{{ $contact->email_2 }}</a>
                                </div>

                                <!-- Hours -->
                                <div class="col-sm-5 address-group">
                                    <span>Open Hours</span>
                                    <p>{{ $contact->hours }}</p>
                                </div>

                            </div><!-- / .row -->

                            <!-- Show Map Button -->
                            <div class="row show-map-link">
                                <a href="#" class="show-map"><span class="icon-map-pin"></span>Show on map</a>
                            </div><!-- / .row -->
                        </address>
                    </div><!-- / .contact-info-wrapper -->
                </div><!-- / .row -->

                <!-- Contact Form -->
                <div class="row">
                    <form action="assets/contact-form/contact-form.php" method="POST" id="contact-form-1" class="form-ajax">
                        <div class="col-md-offset-2 col-md-4 wow fadeInUp" data-wow-duration="1s">

                            <!-- Name -->
                            <div class="form-group">
                                <input type="text" name="name" id="name-contact-1" class="form-control validate-locally" placeholder="Enter your name">
                                <label for="name-contact-1">Name</label>
                                <span class="pull-right alert-error"></span>
                            </div>

                            <!-- Email -->
                            <div class="form-group">
                                <input type="email" name="email" id="email-contact-1" class="form-control validate-locally" placeholder="Enter your email">
                                <label for="email-contact-1">Email</label>
                                <span class="pull-right alert-error"></span>
                            </div>

                        </div>

                        <div class="col-md-4 wow fadeInUp" data-wow-duration="1s">

                            <!-- Message -->
                            <div class="form-group">
                                <textarea name="message" id="message-contact-1" class="form-control" rows="5" placeholder="Your Message"></textarea>
                                <label for="message-contact-1">Message</label>
                            </div>
                            <div>
                                <input type="submit" class="btn pull-right" value="Send Message">
                            </div>

                            <!-- Ajax Message -->
                            <div class="ajax-message col-md-12 no-gap"></div>

                        </div><!-- / .col-md-4 -->

                    </form>
                </div><!-- / .row -->
            </div><!-- / .container -->
        </div><!-- / .contact-wrapper -->
    </section><!-- / .contact-1 -->
@endsection