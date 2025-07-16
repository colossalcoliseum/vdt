<?php

namespace Database\Factories;

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
            'email' => fake()->unique()->safeEmail(),
            'avatar' => self::getAvatarUrl(),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('123123123'),
            'remember_token' => Str::random(10),
        ];
    }
    public static function getAvatarUrl(): string{
        $client = new Client();
        $avatarUri = '';
        $response = $client->get('https://picsum.photos/200', [
            'on_stats' => function (TransferStats $stats) use (&$url, &$avatarUri) {
                $avatarUri = $stats->getEffectiveUri();
            }
        ]);
        return $avatarUri;
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
