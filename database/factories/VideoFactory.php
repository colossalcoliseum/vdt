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
            'title' => $title = $this->faker->sentence(),
            'description' => $this->faker->paragraph(1),
            'slug' => $this->faker->slug(4),
            'video_path' => "/storage/videos/video_".$this->faker->numberBetween(1,10).".mp4",
            'thumbnail' => "/storage/thumbnails/thumbnail_".$this->faker->numberBetween(1, 10).".jpg",
            'original_filename' => $this->faker->uuid(),
            'file_size' => $this->faker->numberBetween(1, 1000),
            'video_mime_type' => "video/mp4",
            'status_id' => $this->faker->numberBetween(1,3),
            'category_id' => $this->faker->numberBetween(1,15),
            'creator_id' => $this->faker->numberBetween(1, 10),/*TODO: user_id беше тук*/
            'updated_by' => $this->faker->numberBetween(1, 10),
            'visibility_id' => $this->faker->numberBetween(1, 2),];
    }

}
