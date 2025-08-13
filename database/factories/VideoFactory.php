<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Video>
 */
class VideoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(1),
            'video_path' => "/storage/videos/video_".$this->faker->numberBetween(1,10).".mp4",
            'thumbnail_path' => "/storage/thumbnails/thumbnail_".$this->faker->numberBetween(1, 10).".jpg",
            'original_filename' => $this->faker->uuid(),
            'file_size' => $this->faker->numberBetween(1, 1000),
            'video_mime_type' => "video/mp4",
            'creator_id' => $this->faker->numberBetween(1, 10),
            'visibility_id' => $this->faker->numberBetween(1, 2),];
    }
}
