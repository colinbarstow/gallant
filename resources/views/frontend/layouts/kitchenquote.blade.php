@extends('frontend.master')
@section('content')
    <header class="page-title pt-light pt-plax-md-light" style="background: url(/frontend/images/kitchens/{{ $kitchen->image_1 }});background-size: cover" data-stellar-background-ratio="0.4">
        <div class="bg-overlay">
            <div class="container">
                <div class="row">

                    <div class="col-sm-6">
                        <h1>Kitchen Spraying</h1>
                        <span class="subheading">Give your old kitchens a new lease of life</span>
                    </div>
                    <ol class="col-sm-6 text-right breadcrumb">
                        <li><a href="{{ url('/') }}">Home</a></li>
                        <li class="active">Kitchens</li>
                    </ol>

                </div>
            </div>
        </div>
    </header>
    <div id="blog" class="section container blog-classic">
        <div class="row">

                    <div class="col-md-12 blog-post-comments">
                        <!-- Leave a comment -->
                        <div class="comment-form">
                            <h4 class="blog-section-title">Please use our quote builder below</h4>

                            <p>Using our quote builder will give you an idea of how how much it will cost to respray your Kitchen.
                            If you are happy ith your quote then you can submit it to us, we can then contact you to discuss things further.

                            When you have items such as extractor hoods, corner units and bespoke pieces; The prices for these items
                            may vary from that of which you are quoted. This is because all extractor hoods, corner units and bespoke pieces
                            can vary drastically in size, shape and complexity.

                            For all quotes that have 15 doors/drawers or less a service charge of £45 is added to the order</p>
                            <hr>

                            <form action="/kitchenquote" method="POST">
                                {{csrf_field()}}
                                <div class="row">
                                    <h1>Doors</h1>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 form-group no-gap-left">
                                        <select name="small_doors" class="form-control" id="inpt-doors-forms">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <label for="inpt-doors-forms">Standard Doors *</label>
                                        <br><small>£23 each - Standard doors are normal height kitchen door fronts</small><br><br>
                                        <select name="large_doors" class="form-control" id="inpt-largedoors-forms">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <label for="inpt-largedoors-forms">Large Doors *</label>
                                        <br><small>£45 each - Large doors are ladar height kitchen door fronts</small>
                                    </div>
                                    <div class="col-md-4">
                                        <h3>small doors: £<span data-amount="23" class="small_doors">0</span></h3><br>
                                        <h3>large doors: £<span data-amount="45" class="large_doors">0</span></h3><br>
                                        <h1>Total Doors: £<span class="door_cost">0</span></h1>
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden no-gap-right">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <h1>Drawers</h1>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 form-group no-gap-left">
                                        <select name="small_drawers" class="form-control" id="inpt-drawers-forms">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <label for="inpt-drawers-forms">Drawers *</label><br><br>
                                        <select name="large_drawers" class="form-control" id="inpt-largedrawers-forms">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <label for="inpt-largedrawers-forms">Large Drawers *</label>
                                    </div>
                                    <div class="col-md-4">
                                        <h3>small drawers: £<span data-amount="10" class="small_drawers">0</span></h3><br>
                                        <h3>large drawers: £<span data-amount="23" class="large_drawers">0</span></h3><br>
                                        <h1>Total Drawers: £<span class="drawer_cost">0</span></h1>
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden no-gap-right">
                                    </div>
                                </div>
                                <hr>


                                <div class="row">
                                    <h1>Meterage</h1>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 form-group no-gap-left">
                                        <select name="meterage" class="form-control" id="inpt-meterage-forms">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <label for="inpt-meterage-forms">Meterage *</label>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <h1>Meterage cost: £<span data-amount="5" class="meterage_cost">0</span></h1>
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden no-gap-right">
                                    </div>
                                </div>
                                <hr>

                                <div class="row">
                                    <h1>Extras</h1>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 form-group no-gap-left">
                                        <select name="corner_units" class="form-control" id="inpt-cornerunits-forms">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                        </select>
                                        <label for="inpt-cornerunits-forms">Corner Units *</label><br><br>
                                        <select name="extractor_hood" class="form-control" id="inpt-extractor-forms">
                                            <option value="0">0</option>
                                            <option value="1">1</option>
                                        </select>
                                        <label for="inpt-extractor-forms">Extractor Hood *</label>
                                    </div>
                                    <div class="col-md-4 form-group">
                                        <h3>Corner Units: £<span data-amount="35" class="corner_cost">0</span></h3><br>
                                        <h3>Extractor Hood: £<span data-amount="35" class="extractor_cost">0</span></h3><br>
                                        <h1>Total Extras: £<span class="extras_cost">0</span></h1>
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden no-gap-right">
                                    </div>
                                </div>
                                <hr>

                                <script>
                                    $('#inpt-doors-forms').bind( 'change', function(e){
                                        var multiply = $(this).val();
                                        $( ".small_doors" ).each(function( index, item ) {
                                            $( item ).text( multiply*($(item).data('amount')));
                                            var smallDoors = multiply*($(item).data('amount'));
                                            var largeDoors = parseInt($(".large_doors").html());
                                            var largeDrawers = parseInt($(".large_drawers").html());
                                            var smallDrawers = parseInt($(".small_drawers").html());
                                            var cornerCost = parseInt($(".corner_cost").html());
                                            var extractorCost = parseInt($(".extractor_cost").html());
                                            var meterageCost = parseInt($(".meterage_cost").html());
                                            $(".door_cost").text(parseInt(smallDoors) + largeDoors);
                                            $(".net_cost").text(parseInt(smallDoors)+ largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost);
                                            $(".vat").text(parseFloat($(".vat").data('amount'))*(smallDoors + largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost).toFixed(2));
                                            var vatAmount = $(".vat").html();
                                            $(".total_cost").text(parseFloat($(".net_cost").html())+parseFloat(vatAmount));
                                        });
                                    });

                                    $('#inpt-largedoors-forms').bind( 'change', function(e){
                                        var multiply = $(this).val();
                                        $( ".large_doors" ).each(function( index, item ) {
                                            $( item ).text( multiply*($(item).data('amount')));
                                            var largeDoors = multiply*($(item).data('amount'));
                                            var smallDoors = parseInt($(".small_doors").html());
                                            var largeDrawers = parseInt($(".large_drawers").html());
                                            var smallDrawers = parseInt($(".small_drawers").html());
                                            var cornerCost = parseInt($(".corner_cost").html());
                                            var extractorCost = parseInt($(".extractor_cost").html());
                                            var meterageCost = parseInt($(".meterage_cost").html());
                                            $(".door_cost").text(parseInt(largeDoors) + parseInt($(".small_doors").html()));
                                            $(".net_cost").text(parseInt(smallDoors)+ largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost);
                                            $(".vat").text(parseFloat($(".vat").data('amount'))*(smallDoors + largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost).toFixed(2));
                                            var vatAmount = $(".vat").html();
                                            $(".total_cost").text(parseFloat($(".net_cost").html())+parseFloat(vatAmount));
                                        });
                                    });
                                    $('#inpt-drawers-forms').bind( 'change', function(e){
                                        var multiply = $(this).val();
                                        $( ".small_drawers" ).each(function( index, item ) {
                                            $( item ).text( multiply*($(item).data('amount')));
                                            var smallDrawers = multiply*($(item).data('amount'));
                                            var largeDrawers = parseInt($(".large_drawers").html());
                                            var smallDoors = parseInt($(".small_doors").html());
                                            var largeDoors = parseInt($(".large_doors").html());
                                            var cornerCost = parseInt($(".corner_cost").html());
                                            var extractorCost = parseInt($(".extractor_cost").html());
                                            var meterageCost = parseInt($(".meterage_cost").html());
                                            $(".drawer_cost").text(parseInt(smallDrawers) + parseInt($(".large_drawers").html()));
                                            $(".net_cost").text(parseInt(smallDoors)+ largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost);
                                            $(".vat").text(parseFloat($(".vat").data('amount'))*(smallDoors + largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost).toFixed(2));
                                            var vatAmount = $(".vat").html();
                                            $(".total_cost").text(parseFloat($(".net_cost").html())+parseFloat(vatAmount));
                                        });
                                    });

                                    $('#inpt-largedrawers-forms').bind( 'change', function(e){
                                        var multiply = $(this).val();
                                        $( ".large_drawers" ).each(function( index, item ) {
                                            $( item ).text( multiply*($(item).data('amount')));
                                            var largeDrawers = multiply*($(item).data('amount'));
                                            var smallDrawers = parseInt($(".small_drawers").html());
                                            var smallDoors = parseInt($(".small_doors").html());
                                            var largeDoors = parseInt($(".large_doors").html());
                                            var cornerCost = parseInt($(".corner_cost").html());
                                            var extractorCost = parseInt($(".extractor_cost").html());
                                            var meterageCost = parseInt($(".meterage_cost").html());
                                            $(".drawer_cost").text(parseInt(largeDrawers) + parseInt($(".small_drawers").html()));
                                            $(".net_cost").text(parseInt(smallDoors)+ largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost);
                                            $(".vat").text(parseFloat($(".vat").data('amount'))*(smallDoors + largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost).toFixed(2));
                                            var vatAmount = $(".vat").html();
                                            $(".total_cost").text(parseFloat($(".net_cost").html())+parseFloat(vatAmount));
                                        });
                                    });
                                    $('#inpt-meterage-forms').bind( 'change', function(e){
                                        var multiply = $(this).val();
                                        $( ".meterage_cost" ).each(function( index, item ) {
                                            $( item ).text( multiply*($(item).data('amount')));
                                            var meterageCost = multiply*($(item).data('amount'));
                                            var smallDrawers = parseInt($(".small_drawers").html());
                                            var smallDoors = parseInt($(".small_doors").html());
                                            var largeDoors = parseInt($(".large_doors").html());
                                            var cornerCost = parseInt($(".corner_cost").html());
                                            var extractorCost = parseInt($(".extractor_cost").html());
                                            var largeDrawers = parseInt($(".large_drawers").html());
                                            $(".net_cost").text(parseInt(smallDoors)+ largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost);
                                            $(".vat").text(parseFloat($(".vat").data('amount'))*(smallDoors + largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost).toFixed(2));
                                            var vatAmount = $(".vat").html();
                                            $(".total_cost").text(parseFloat($(".net_cost").html())+parseFloat(vatAmount));
                                        });
                                    });
                                    $('#inpt-extractor-forms').bind( 'change', function(e){
                                        var multiply = $(this).val();
                                        $( ".extractor_cost" ).each(function( index, item ) {
                                            $( item ).text( multiply*($(item).data('amount')));
                                            var extractorCost = multiply*($(item).data('amount'));
                                            var smallDrawers = parseInt($(".small_drawers").html());
                                            var smallDoors = parseInt($(".small_doors").html());
                                            var largeDoors = parseInt($(".large_doors").html());
                                            var cornerCost = parseInt($(".corner_cost").html());
                                            var meterageCost = parseInt($(".meterage_cost").html());
                                            var largeDrawers = parseInt($(".large_drawers").html());
                                            $(".extras_cost").text(parseInt(extractorCost) + parseInt($(".corner_cost").html()));
                                            $(".net_cost").text(parseInt(smallDoors)+ largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost);
                                            $(".vat").text(parseFloat($(".vat").data('amount'))*(smallDoors + largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost).toFixed(2));
                                            var vatAmount = $(".vat").html();
                                            $(".total_cost").text(parseFloat($(".net_cost").html())+parseFloat(vatAmount));
                                        });
                                    });

                                    $('#inpt-cornerunits-forms').bind( 'change', function(e){
                                        var multiply = $(this).val();
                                        $( ".corner_cost" ).each(function( index, item ) {
                                            $( item ).text( multiply*($(item).data('amount')));
                                            var cornerCost = multiply*($(item).data('amount'));
                                            var smallDrawers = parseInt($(".small_drawers").html());
                                            var smallDoors = parseInt($(".small_doors").html());
                                            var largeDoors = parseInt($(".large_doors").html());
                                            var extractorCost = parseInt($(".extractor_cost").html());
                                            var meterageCost = parseInt($(".meterage_cost").html());
                                            var largeDrawers = parseInt($(".large_drawers").html());
                                            $(".extras_cost").text(parseInt(cornerCost) + parseInt($(".etractor_cost").html()));
                                            $(".net_cost").text(parseInt(smallDoors)+ largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost);
                                            $(".vat").text(parseFloat($(".vat").data('amount'))*(smallDoors + largeDoors + largeDrawers + smallDrawers + cornerCost + extractorCost + meterageCost).toFixed(2));
                                            var vatAmount = $(".vat").html();
                                            $(".total_cost").text(parseFloat($(".net_cost").html())+parseFloat(vatAmount));
                                        });
                                    });
                                </script>
                                <br>
                                <div class="row">
                                    <h1>Total Cost</h1>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 form-group no-gap-left">
                                        <h1>Quote: £<span class="net_cost">0</span></h1>
                                        <hr>
                                        <h1>VAT: £<span data-amount="0.2" class="vat">0</span></h1>
                                        <hr>
                                        <h1>Total: £<span class="total_cost">00</span></h1>
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden">
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden no-gap-right">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <h1>Submit Quote</h1>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 form-group no-gap-left">
                                        <p>If you would like to proceed and have your kitchen resprayed with us, you can submit your quote to us.
                                        Simply add any addition comments or notes and submit the quote. </p>
                                    </div>
                                    <div class="col-md-8 col-sm-12 form-group">
                                        <input type="text" name="name" class="form-control" placeholder="Name" required>
                                        <input type="email" name="email" class="form-control" placeholder="Email Address" required>
                                        <input type="text" name="number" class="form-control" placeholder="Contact NUmber" required>
                                        <textarea class="form-control" name="message" id="txt-forms" rows="5" placeholder="Your Comment"></textarea>
                                        <label for="txt-forms">Comment *</label>
                                    </div>
                                </div>
                                <hr>
                                <br>
                                <div class="row">
                                    <div class="col-md-4 form-group no-gap-left">
                                        <button type="submit" class="btn btn-success">Submit Quote</button>
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden">
                                    </div>
                                    <div class="col-md-4 form-group xs-hidden no-gap-right">
                                    </div>
                                </div>
                            </form>
                        </div><!-- / .comment-form -->

                    </div><!-- / .blog-post-comments -->


        </div><!-- / .row -->
    </div><!-- / .container -->
@endsection