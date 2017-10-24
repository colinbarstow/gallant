<footer class="footer-widgets">
    <div class="container">
        <div class="row section">

            <!-- About Us -->
            <div class="col-md-4 col-sm-6 mb-sm-100">
                <div class="widget about-widget">
                    <h5 class="header-widget">About Us</h5>
                    <p>{{ $home->about_small }}</p>

                    <ul class="social-links">
                        <li><a href="https://facebook.com/{{ $contact->facebook }}"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="https://facebook.com/{{ $contact->twitter }}"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="https://facebook.com/{{ $contact->pinterest }}"><i class="fa fa-pinterest"></i></a></li>
                        <li><a href="https://facebook.com/{{ $contact->instagram }}"><i class="fa fa-instagram"></i></a></li>
                    </ul>
                </div><!-- / .widget -->
            </div><!-- / .col-md-3 -->


            <!-- Twitter Feed -->
            <div class="col-md-4 col-sm-6 mb-sm-100">
                <div class="widget twitter-widget">
                    <h5 class="header-widget">Twitter Feed</h5>
                    <ul>

                        <li>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <p>5 Reasons You Should Take a Sabbatical from Creative Work <a href="#">http://enva.to/NTa6F</a> by <a href="#">@envato</a> <span>- AUG 10</span></p>
                        </li>

                        <li>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <p>What is the enemy of <a href="#">#creativity</a>? <a href="#">http://enva.to/hVl5G</a>  [VIDEO] <br>by <a href="#">@envato</a> <span>- AUG 5</span></p>
                        </li>

                    </ul>
                </div><!-- / .widget -->
            </div><!-- / .col-md-3 -->

            <!-- Newsletter -->
            <div class="col-md-4 col-sm-6">
                <div class="widget newsletter-widget">
                    <h5 class="header-widget">Newsletter</h5>

                    <form class="mc-form subscribe-form" _lpchecked="1" action="/addnewsletter" method="POST">
                        {{csrf_field()}}
                        <div class="form-group">

                            <!-- Email -->
                            <input type="email" name="email" placeholder="Join our newsletter">

                            <!-- Send Button -->
                            <button type="submit" name="subscribe" class="mc-send-btn"><i class="fa fa-send-o"></i></button>
                        </div>

                    </form>

                </div><!-- / .widget -->
            </div><!-- / .col-md-3 -->

        </div><!-- / .row -->
    </div><!-- / .container -->


    <!-- Copyright -->
    <div class="copyright">
        <div class="container">
            <div class="row">

                <div class="col-sm-6">
                    <small>&copy; 2017 {{ config('app.name') }}. Developed by <a class="no-style-link" href="http://alagosoftware.com" target="_blank">Alago</a></small>
                </div>

                <div class="col-sm-6">
                    <small><a href="#page-top" class="pull-right to-the-top">To the top<i class="fa fa-angle-up"></i></a></small>
                </div>

            </div><!-- / .row -->
        </div><!-- / .container -->
    </div><!-- / .copyright -->

</footer><!-- / .footer-widgets -->