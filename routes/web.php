<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/signup', function () {
    return view('signup');
});

Route::get('/home', 'HomeController@index')->name('home');

Route::group([ 'namespace' => 'Auth'], function() {
    Route::post('sign-in', 'SignInController')->name('sign-in');
    Route::post('sign-up', 'SignUpController')->name('sign-up');
});

Route::group([ 'middleware' => 'auth', 'namespace' => 'Auth' ], function() {
    Route::post('sign-out', 'SignOutController')->name('sign-out');
    Route::get('me', 'MeController');
});

Route::group([ 'middleware' => 'auth' ], function() {
    Route::get('/profile', function () {
        return view('profile');
    });
    Route::get('users', 'UserController@index');
    Route::put('update-profile', 'UserController@updateProfile');
    Route::post('update-profile-picture', 'UserController@updateProfilePicture');
    Route::post('update-cover-picture', 'UserController@updateCoverPicture');
    Route::get('follow/{id}', 'UserController@follow');
    Route::get('unfollow/{id}', 'UserController@unfollow');
    Route::get('following', 'UserController@following');
    Route::get('followers', 'UserController@followers');
    Route::post('post', 'PostController@store');
    Route::get('posts', 'PostController@index');
    Route::post('wall-post/{id}', 'WallController@store');
    Route::get('wall-posts', 'WallController@index');
    Route::get('like-post/{id}', 'LikeController@likePost');
    Route::get('unlike-post/{id}', 'LikeController@unlikePost');
    Route::get('like-wall-post/{id}', 'LikeController@likeWallPost');
    Route::get('unlike-wall-post/{id}', 'LikeController@unlikeWallPost');
    Route::get('like-comment/{id}', 'LikeController@likeComment');
    Route::get('unlike-comment/{id}', 'LikeController@unlikeComment');
    Route::post('comment/{id}', 'CommentController@store');
    Route::post('wall-post-comment/{id}', 'CommentController@wallPostComment');
    Route::get('messages', 'MessageController@index');
    Route::get('messages/inbox/{thread_id}', 'MessageController@show');
    Route::post('message/{messageTo}', 'MessageController@store');
});

