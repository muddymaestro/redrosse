<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([ 'namespace' => 'Auth'], function() {
    Route::post('sign-in', 'SignInController');
    Route::post('sign-up', 'SignUpController');
});

Route::group([ 'middleware' => 'auth:api', 'namespace' => 'Auth' ], function() {
    Route::post('sign-out', 'SignOutController');
    Route::get('me', 'MeController');
});

Route::group([ 'middleware' => ['auth:api', 'cors'] ], function() {
    Route::get('/users', 'UserController@index');
    Route::put('/update-profile', 'UserController@updateProfile');
    Route::post('/update-profile-picture', 'UserController@updateProfilePicture');
    Route::post('/update-cover-picture', 'UserController@updateCoverPicture');
    Route::get('/follow/{id}', 'UserController@follow');
    Route::get('/unfollow/{id}', 'UserController@unfollow');
    Route::get('/following', 'UserController@following');
    Route::get('/followers', 'UserController@followers');
    Route::post('/post', 'PostController@store');
    Route::get('/posts', 'PostController@index');
    Route::post('/wall-post/{id}', 'WallController@store');
    Route::get('/wall-posts', 'WallController@index');
    Route::get('/like-post/{id}', 'LikeController@likePost');
    Route::get('/unlike-post/{id}', 'LikeController@unlikePost');
    Route::get('/like-wall-post/{id}', 'LikeController@likeWallPost');
    Route::get('/unlike-wall-post/{id}', 'LikeController@unlikeWallPost');
    Route::get('/like-comment/{id}', 'LikeController@likeComment');
    Route::get('/unlike-comment/{id}', 'LikeController@unlikeComment');
    Route::post('/comment/{id}', 'CommentController@store');
    Route::post('/wall-post-comment/{id}', 'CommentController@wallPostComment');
    Route::get('/messages', 'MessageController@index');
    Route::get('/messages/inbox/{thread_id}', 'MessageController@show');
    Route::post('/message/{messageTo}', 'MessageController@store');
});
