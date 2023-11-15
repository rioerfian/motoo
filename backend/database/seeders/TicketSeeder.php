<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Nette\Utils\Random;


class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 5; $i++) {

            DB::table('tickets')->insert([
                'subject' => Str::random(20),
                'description' => Str::random(100),
                'request_status' => Str::random(10),
                'request_type' => Str::random(10),
                'Technician_id' => '2',
                'subject' => Str::random(10),


            ]);
           
        }
        //
    }
}
