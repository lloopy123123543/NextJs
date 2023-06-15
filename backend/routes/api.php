<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\SteklopacketController;
use App\Http\Controllers\StvorkiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


// Роуты пользователя
Route::prefix("users") -> group( function () {
    Route::get("all", [UserController::class, "show_users"]);
    Route::post("login", [UserController::class, "login"]);
    Route::post("register", [UserController::class, "registration"]);

});

// Роуты створок
Route::prefix("stvorks") -> group( function () {
    Route::post("add", [StvorkiController::class, "add_stvorku"]);
});
// Роуты стеклопакетов
Route::prefix("steklopackets") -> group( function () {
    Route::post("add", [SteklopacketController::class, "add_steklopacket"]);
});


// Роуты заказов
Route::prefix("orders") -> group( function () {
    Route::post("add", [OrderController::class, "order_add"]);
    Route::post("check", [OrderController::class, "order_show"]);
});
