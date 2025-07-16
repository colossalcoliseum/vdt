<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [//TODO: довърши
            'title' => $this->faker->sentence(),
            'body' => $this->faker->paragraph(),
            'thumbnail' => $this->faker->imageUrl(),
            'main_image' => $this->faker->imageUrl(),
            'visibility' => $this->faker->randomElement(['public', 'private']),
        ];
    }
}
