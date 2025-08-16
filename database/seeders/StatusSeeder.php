<?php

namespace Database\Seeders;

use App\Models\Status;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Status::create([
            'name'=>'Active',
            'slug'=>'active',
        ]);
        Status::create([
            'name'=>'Suspended',
            'slug'=>'suspended',
        ]);
        Status::create([
            'name'=>'Disabled',
            'slug'=>'disabled',
        ]);

    }
}
