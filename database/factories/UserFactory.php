<?php

namespace Database\Factories;

use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use GuzzleHttp\Client;
use GuzzleHttp\TransferStats;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'handle' => fake()->userName(),
            'email' => fake()->unique()->safeEmail(),
            'description' => fake()->unique()->paragraph(2),
            'city' => fake()->city(),
            'country' => fake()->country(),
            'ip_address' => fake()->ipv6(),
            'avatar' => self::getAvatarUrl(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('123123123'),
            'remember_token' => Str::random(10),
        ];
    }
    public static function getAvatarUrl(): string{
        $client = new Client();
        $avatarUri = '';
       try {
            $response = $client->get('https://picsum.photos/200', [
                'on_stats' => function (TransferStats $stats) use (&$url, &$avatarUri) {
                    $avatarUri = $stats->getEffectiveUri();
                }
            ]);
            return $avatarUri;
        } catch (GuzzleException $e) {
        dump($e->getMessage());
        }
        return '';
    }
    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
