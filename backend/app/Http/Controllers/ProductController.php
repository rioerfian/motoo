<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use PDO;

class ProductController extends Controller
{
    //
    public function index()
    {
        $product =Product::all();
        if ($product) {
            return response()->json(['data' => $product, 'data telah didapatkan'], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }

    public function show($id)
    {
        $product = DB::table('products')
            ->join('users', 'products.pic_id', '=', 'users.id')
            ->select('products.*', 'users.name as PIC')
            ->where('products.id', $id)
            ->get();
        if ($product) {
            return response()->json(['data' => $product], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }
    public function store(){
        //
    }

    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name'=>'required',
            'url'=>'required'
        ]);

            $product->fill($request->post())->update();


            return response()->json([
                'message'=>'Product Updated Successfully!!'
            ]);
      
    }

    public function delete($id)
    {
        //$product = Product::destroy($id);
        $product = Product::find($id);
        $product->delete();
        if ($product) {
            return response()->json(['data' => $product, 'data telah dihapus'], 200);
        } else {
            return response()->json(['data tidak ditemukan'], 401);
        }
    }
}
