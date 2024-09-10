<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
const sl = 'Line2';
Route::get('/we', function () {
    return print_r("Line1").print_r(sl).view('wel');
});
Route::get('/about', function () {
    return view('wel');
});
