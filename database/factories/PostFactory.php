<?php

namespace Database\Factories;

use GuzzleHttp\Client;
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
            'description' => $this->faker->paragraph(),
            'thumbnail' => self::getPictureUrl(300,200),
            'creator_id' =>$this->faker->numberBetween(1,10),
            'main_image' => self::getPictureUrl(400,300),
            'visibility' => $this->faker->randomElement(['public', 'private']),
        ];
    }
    public static function getPictureUrl($length, $width): string{
        $client = new Client();
        $pictureUri = '';
        $response = $client->get('https://picsum.photos/300/200', [
            'on_stats' => function (TransferStats $stats) use (&$pictureUri) {
                $pictureUri = $stats->getEffectiveUri();
            }
        ]);
        return $pictureUri;
    }
}
