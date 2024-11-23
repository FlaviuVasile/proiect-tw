<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
	error_log(csrf_token());
    return ['Laravel' => app()->version(), 'Token' => csrf_token()];
});

require __DIR__.'/auth.php';
