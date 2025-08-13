<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        User::factory()
            ->count(1)
            ->create([
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'password' => Hash::make('123123123'),
                'avatar' => 'avatars/defaultAvatar.jpg',
            ]) ->each(function ($user) {
                $user->assignRole('admin');
            });

        User::factory()
            ->count(20)
            ->create()
            ->each(function ($user) {
                $user->assignRole('member');
            });


    }
}
