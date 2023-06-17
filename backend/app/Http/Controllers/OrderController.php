<?php

namespace App\Http\Controllers;

use App\Models\order;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\steklopackets;
use App\Models\stvorks;
use App\Models\User;

class OrderController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function order_show(Request $request){
        $bearer = $request -> header("authorization");
        $token = explode(" ", $bearer)[1];
        $user = User::all()->where('token', $token)->first();
        if ($bearer != ' ') {
            $token = explode(" ", $bearer)[1];
            $user = User::all()->where('token', $token)->first();
            if ($user != null) {
                if($user -> login == "admin"){

                    $order = order::all();

                    foreach($order as $c){
                       $c -> stvorka1 = stvorks::find($c->stvorka1)->type;
                       $c -> stvorka2 = stvorks::find($c->stvorka2)->type;
                       $c -> stvorka3 = stvorks::find($c->stvorka3)->type;
                       $c -> steklopacket = steklopackets::find($c->steklopacket)->type;
                       $data[] = $c;

                    }
                    return response()->json($data);


                }else{return response()->json(['error' => 'forbidden for you']);}
            } else {
                return response()->json(['error' => 'user not found']);
            }
        } else {
            return response()->json(['error' => 'token is empty']);
        }
    }

    public function order_add(Request $request)
    {
                $validator = Validator::make($request->all(), [
                    "stvorka1" => "required",
                    "stvorka2" => "required",
                    "stvorka3" => "required",
                    "height" => "required",
                    "weight" => "required",
                    "steklopacket" => "required",
                    "callback" => "required",
                    "cost" => "required"
                ]);
                if ($validator->fails()) {
                    return response()->json(['errors' => $validator->errors()]);
                }
                $order = new order();
                $order->stvorka1 = $request->input('stvorka1');
                $order->stvorka2 = $request->input('stvorka2');
                $order->stvorka3 = $request->input('stvorka3');
                $order->height = $request->input('height');
                $order->weight = $request->input('weight');
                $order->steklopacket = $request->input('steklopacket');
                $order->callback = $request->input('callback');
                $order->cost = $request->input('cost');
                $order->save();
                return response()->json('added');
            }
}
