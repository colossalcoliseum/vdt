<?php

namespace Database\Factories;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\TransferStats;
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
            'description' => $this->faker->paragraphs(15, true),
            'slug' => $this->faker->slug(4),
            'thumbnail' => self::getPictureUrl(300,200),
            'creator_id' =>$this->faker->numberBetween(1,10),
            'updated_by' =>$this->faker->numberBetween(1,10),
            'status_id' => $this->faker->numberBetween(1,3),
            'category_id' => $this->faker->numberBetween(1,15),
            'is_published' => $this->faker->boolean(),
            'main_image' => self::getPictureUrl(400,300),
            'visibility_id' => $this->faker->numberBetween(1,2),
        ];
    }
    public static function getPictureUrl($length, $width): string{
        $client = new Client();
        $pictureUri = '';
      try {
            $response = $client->get('https://picsum.photos/300/200', [
                'on_stats' => function (TransferStats $stats) use (&$pictureUri) {
                    $pictureUri = $stats->getEffectiveUri();
                }
            ]);
            return $pictureUri;
        } catch (GuzzleException $e) {
            dump($e->getMessage());
        }
        return '';
    }
}
