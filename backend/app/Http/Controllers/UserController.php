<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function index()
    {
      $user = User::all();
      if ($user) {
          return response()->json(['data' => $user], 200);
      } else {
          return response()->json(['data tidak ditemukan'], 401);
      }
    }

    public function showTechnician(){
      $technician = User::where('role', 'technician')->get();
      if ($technician) {
          return response()->json(['data' => $technician, 'data telah didapatkan'], 200);
      } else{
          return response()->json([ 'data tidak ditemukan'], 401);
      }

  }
}
