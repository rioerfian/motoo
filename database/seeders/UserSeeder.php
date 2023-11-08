<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 4; $i++) {

            DB::table('users')->insert([
                'name' => Str::random(10),
                'role' => 'technician',
                'job' => Str::random(10),
                'phone' => Str::random(10),
                'team' => 'Collaboration',
                'email' => Str::random(10) . '@gmail.com',
                'password' => Hash::make('password'),
            ]);
            DB::table('users')->insert([
                'name' => Str::random(10),
                'role' => 'user',
                'job' => Str::random(10),
                'phone' => Str::random(10),
                'email' => Str::random(10) . '@gmail.com',
                'password' => Hash::make('password'),
            ]);
        }
    }
}
