<?php
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');


//Frontend Gets
Route::get('/in/{slug}', 'HomeController@town');
Route::get('/contact', 'HomeController@contact');
Route::get('/about', 'HomeController@about');
Route::get('/kitchens', 'KitchenController@index');
Route::get('/kitchenquote', 'KitchenController@create');
Route::get('/service/{slug}', 'HomeController@service');
Route::get('/blog', 'HomeController@blog');
Route::get('/blog/{slug}', 'HomeController@showBlog');
Route::get('/projects', 'HomeController@projects');
Route::get('/project/{slug}', 'HomeController@showProject');

Route::post('/addcomment', 'CommentController@store');
Route::post('/pagecontact', 'ContactController@store');
Route::post('/kitchenquote', 'KitchenBuilderController@store');
Route::post('/addnewsletter', 'NewsletterController@store');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/adminarea', 'AdminController@index');
//Admin Quote Gets
Route::get('/adminarea/quotes', 'KitchenBuilderController@index');
Route::get('/adminarea/editquote/{id}', 'KitchenBuilderController@edit');
Route::get('/adminarea/emailquote/{id}', 'KitchenBuilderController@email');
//Admin Quote Posts
Route::post('/editquote', 'KitchenBuilderController@update');
Route::post('/updatequotestatus', 'KitchenBuilderController@updateStatus');
Route::post('/emailquote', 'KitchenBuilderController@emailQuote');
//Admin Blog Gets
Route::get('/adminarea/addblogpost', 'PostController@create');
Route::get('/adminarea/blogposts', 'PostController@index');
Route::get('/adminarea/editblogpost/{id}', 'PostController@edit');
Route::get('/adminarea/deleteblogpost/{id}', 'PostController@delete');
//Admin Blog Posts
Route::post('/addblogpost', 'PostController@store');
Route::post('/editblogpost', 'PostController@update');
Route::post('/publishblogpost', 'PostController@publishStatus');
Route::post('/unpublishblogpost', 'PostController@unpublishStatus');
Route::post('/deleteblogpost', 'PostController@destroy');
//Admin Service Gets
Route::get('/adminarea/services', 'ServiceController@index');
Route::get('/adminarea/addservice', 'ServiceController@create');
Route::get('/adminarea/editservice/{id}', 'ServiceController@edit');
Route::get('/adminarea/deleteservice/{id}', 'ServiceController@delete');
//Admin Service Posts
Route::post('/addservice', 'ServiceController@store');
Route::post('/editservice', 'ServiceController@update');
Route::post('/deleteservice', 'ServiceController@destroy');
//Admin Project Gets
Route::get('/adminarea/projects', 'ProjectController@index');
Route::get('/adminarea/addproject', 'ProjectController@create');
Route::get('/adminarea/editproject/{id}', 'ProjectController@edit');
Route::get('/adminarea/deleteproject/{id}', 'ProjectController@delete');
//Admin Project Posts
Route::post('/addproject', 'ProjectController@store');
Route::post('/editproject', 'ProjectController@update');
Route::post('/deleteproject', 'ProjectController@destroy');
//Admin Testimonial Gets
Route::get('/adminarea/testimonials', 'TestimonialController@index');
Route::get('/adminarea/addtestimonial', 'TestimonialController@create');
Route::get('/adminarea/edittestimonial/{id}', 'TestimonialController@edit');
Route::get('/adminarea/deletetestimonial/{id}', 'TestimonialController@delete');
//Admin Testimonial Posts
Route::post('/addtestimonial', 'TestimonialController@store');
Route::post('/edittestimonial', 'TestimonialController@update');
Route::post('/deletetestimonial', 'TestimonialController@destroy');
//Admin Testimonial Gets
Route::get('/adminarea/home', 'HomePageController@index');

//Admin Enquiry Gets
Route::get('/adminarea/enquiries', 'EnquiryController@index');
Route::get('/adminarea/readenquiry/{id}', 'EnquiryController@show');
//Admin Enquiry Post
Route::post('/replyenquiry', 'EnquiryController@respond');

//Admin Town Gets
Route::get('/adminarea/towns', 'TownController@index');
Route::get('/adminarea/addtown', 'TownController@create');
Route::get('/adminarea/edittown/{id}', 'TownController@edit');
//Admin Town Post
Route::post('/addtown', 'TownController@store');

//Admin Kitchen Gets
Route::get('/adminarea/editkitchen', 'KitchenController@edit');
//Admin Kitchen Post
Route::post('/editkitchen', 'KitchenController@update');

//Admin Newsletter Gets
Route::get('/adminarea/newsletter', 'NewsletterController@edit');
//Admin Newsletter Post
Route::post('/sendnewsletter', 'NewsletterController@update');


