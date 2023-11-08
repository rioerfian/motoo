<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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

    public function show($id)
    {
       $user = User::findOrFail($id);
        if ($user) {
            return response()->json(['data' => $user], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }

    
}
