<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Nette\Utils\Random;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 8; $i++) {

            DB::table('products')->insert([
                'name' => Str::random(10),
                'url' => Str::random(5) . '.sig.id',
                'login_app' => 'AD',
                'category' => 'SAP',
                'status' => 'UP' ,
                'turunan' => 'turunan',
                'platform' => 'WEB' ,
                'description' => Str::random(50),
                'group' => 'SIG',
                'image' => 'product08.png',
                'business_user' => Str::random(10),
                'pic_id' => '2',
            ]);
        }
    }
}
