<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    //
    public function allAPi()
    {
        $product = DB::table('products')
            ->join('users', 'products.pic_id', '=', 'users.id')
            ->select('products.*', 'users.name as PIC')
            ->get();
        $user = User::all();
        $technician = User::where('role', 'technician')->get();
        $ticket = DB::table('tickets')
            ->join('users', 'tickets.technician_id', '=', 'users.id')
            ->select('tickets.*', 'users.name as technician')
            ->get();


        if ($product) {
            return response()->json(['product' => $product, 'user' => $user, 'ticket' => $ticket, 'technician' => $technician], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }
}
