<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/',[ApiController::class,'index']);

Route::get('/applications',[ApplicationController::class,'index']);
Route::get('/applications/{id}',[ApplicationController::class,'show']);
Route::delete('/applications/{id}',[ApplicationController::class,'delete']);

Route::get('/users',[UserController::class,'index']);
Route::get('/users/{id}',[UserController::class,'show']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
