<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    //
    public function index()
    {
        $application = DB::table('applications')
            ->join('users', 'applications.pic_id', '=', 'users.id')
            ->select('applications.*', 'users.name as PIC')
            ->get();
        $user = User::all();
        if ($application) {
            return response()->json(['product' => $application, 'user' => $user], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }
}
