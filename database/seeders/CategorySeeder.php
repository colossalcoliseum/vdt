<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (Category::$categories as $category => $subCategory) {
            Category::create([
                'name' => $category,
                'slug' => strtolower(str_replace(" ","_",$category)),
                'status_id' => 1,
                'created_by' => fake()->numberBetween(1, 20),
                'is_active' => fake()->boolean,

            ]);
        }
        Category::factory()
            ->count(20)
            ->create();
    }
}
