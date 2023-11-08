<?php

namespace App\Http\Controllers;

use App\Models\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApplicationController extends Controller
{
    public function index()
    {
        $application =Application::all();
        if ($application) {
            return response()->json(['data' => $application, 'data telah didapatkan'], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }

    public function show($id)
    {
        $application = DB::table('applications')
            ->join('users', 'applications.pic_id', '=', 'users.id')
            ->select('applications.*', 'users.name as PIC')
            ->where('applications.id', $id)
            ->get();
        if ($application) {
            return response()->json(['data' => $application], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }
    public function store(){
        //
    }
    public function delete($id)
    {
        $application = Application::delete($id);
        if ($application) {
            return response()->json(['data' => $application, 'data telah dihapus'], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }
}
