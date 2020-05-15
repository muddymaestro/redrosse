<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([ 'namespace' => 'Auth'], function() {
    Route::post('sign-in', 'SignInController');
    Route::post('sign-up', 'SignUpController');
});

Route::group([ 'middleware' => 'auth:api', 'namespace' => 'Auth' ], function(){
    Route::post('sign-out', 'SignOutController');
    Route::get('me', 'MeController');
});
