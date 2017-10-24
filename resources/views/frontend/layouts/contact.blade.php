@extends('frontend.master')
@section('content')
    <header class="page-title pt-large pt-light pt-parallax pt-plax-lg-light" style="background: url(frontend/images/home/kitchen.png);background-size: cover;" data-stellar-background-ratio="0.4">
        <div class="container">
            <div class="row">

                <div class="col-sm-6">
                    <h1>Contact</h1>
                    <span class="subheading">Love to hear from you</span>
                </div>
                <ol class="col-sm-6 text-right breadcrumb">
                    <li><a href="{{ url('/') }}">Home</a></li>
                    <li class="active">Contact</li>
                </ol>

            </div>
        </div>
    </header>
    <section id="contact" class="contact-3">
        <div class="container">
            <div class="row">

                <div class="col-md-12 col-lg-offset-2 col-lg-8">
                    <div class="form-wrapper">
                        <div class="from-header">
                            <h2>Get in touch</h2>
                            <p>Have a project you would like us to consider or just want to say hello? We would love to hear from you. Use the form below to describe your project and contact us. We promise to get in touch with you shortly.</p>
                        </div>

                        <form action="/pagecontact" method="POST" class="form-minimal">
                            {{csrf_field()}}
                            <!-- Name -->
                            <div class="form-group">
                                <input type="text" name="name" id="name-contact-3" class="form-control validate-locally">
                                <label for="name-contact-3">Name *</label>
                                <span class="pull-right alert-error"></span>
                            </div>

                            <!-- Email -->
                            <div class="form-group">
                                <input type="email" name="email" id="email-contact-3" class="form-control validate-locally">
                                <label for="email-contact-3">Email *</label>
                                <span class="pull-right alert-error"></span>
                            </div>

                            <!-- Phone -->
                            <div class="form-group ws-s">
                                <input type="tel" name="number" id="phone-contact-3" class="form-control">
                                <label for="email-contact-3">Phone</label>
                            </div>

                            <!-- Message -->
                            <div class="form-group">
                                <p>Just say hello, or tell me about your project</p>
                                <textarea class="form-control" name="message" id="message-contact-1" rows="5"></textarea>
                                <label for="message-contact-1">Message *</label>
                            </div>

                            <input type="submit" class="btn-text" value="Send Message">

                        </form>
                    </div>
                </div>

            </div>
        </div><!-- / .container -->
    </section><!-- / .contact-3 -->
@endsection