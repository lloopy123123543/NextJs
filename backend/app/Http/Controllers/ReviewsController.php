<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use App\Models\reviews;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
class ReviewsController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function show_reviews(){
        $reviews = reviews::all();
        return response() -> json($reviews);
    }

    public function add_review(Request $request){
        $bearer = $request -> header("authorization");
        $token = explode(" ", $bearer)[1];
        $user = User::all()->where('token', $token)->first();
        if ($bearer != ' ') {
            $token = explode(" ", $bearer)[1];
            $user = User::all()->where('token', $token)->first();
            if ($user != null) {
                if($user -> login == "admin"){
                    $validator = Validator::make($request->all(), [
                        "author" => "required",
                        "text" => "required"
                    ]);
                    if ($validator->fails()) {
                        return response()->json(['errors' => $validator->errors()]);
                    }
                    $reviews = new reviews();
                    $reviews -> author = $request-> input("author");
                    $reviews -> text = $request-> input("text");
                    $reviews -> save();
                    return response()->json(['reviews' => $reviews]);


                }else{return response()->json(['error' => 'forbidden for you']);}
            } else {
                return response()->json(['error' => 'user not found']);
            }
        } else {
            return response()->json(['error' => 'token is empty']);
        }
    }
}
