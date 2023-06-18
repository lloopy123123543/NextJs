<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\stvorks;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StvorkiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function add_stvorku(Request $request){
        $bearer = $request -> header("authorization");
        $token = explode(" ", $bearer)[1];
        $user = User::all() -> where('token', $token) -> first();
        if($bearer != ' '){
            $token = explode(" ", $bearer)[1];
            $user = User::all() -> where('token', $token) -> first();
            if($user != null){
                if($user-> login == 'admin'){
                    $validator = Validator::make($request -> all(), [
                        "type" => "required"
                    ]);
                    if($validator -> fails()){
                        return response() -> json(['errors' => $validator->errors()]);
                    }
                    $stvorki = new stvorks();
                    $stvorki -> type = $request -> input('type');
                    $stvorki -> save();
                    return response()-> json('added');
                }else{return response() -> json(['error' => "forbidden"]);}
            }else{return response()-> json(['error'=>'user not found']);}
        }else{return response()-> json(['error' => 'token is empty']);}
    }
}
