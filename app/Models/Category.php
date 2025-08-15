<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /** @use HasFactory<\Database\Factories\CategoryFactory> */
    use HasFactory;
    public static array $categories = [
        'nature'=>[
            'Waterfall',
            'Cave',
            'Rainbow',
            'Animal',
            'Fish',
            'Tree',
            'Bush',
            'Volcano',
        ],
        'sport'=>[
            'Karate',
            'Football',
            'Jio Jitsu',
            'Soccer',
            'Swimming',
            'Biking',
            'Running',
            'Marathon',
        ],
        'esport'=>[
            'Chess',
            'Pocker',
            'Black Jack',
            'Minecraft',
            'Halo',
            'Flight-Simulator',

        ],
        'food'=>[
            'Pizza',
            'Cake',
            'Hot Dog',
            'Burger',
            'Spaghetti',
            'Soup',

        ],
        'kitchen'=>[
            'Cooking',
            'Boiling',
            'Frying',
            'BBQ',
            'Street Food',
            'Homemade',
            'Takeout',

        ],
        'programming'=>[
            'SQL',
            'PHP',
            'C#',
            'C++',
            'PYTHON',

        ],
        'industry'=>[
            'Coal',
            'Gas',
            'Steel',
            'Cars',
            'Airplanes',
            'Trains',
            'Rockets',
            'Computers',

        ],
        'music'=>[
            'Pop',
            'Hip-Hop',
            'Traditional',
            'Jazz',
            'Bebop',

        ],
        'art'=>[
            'Canvas',
            'Black And White',
            'Street Art',
            'Digital Art',
            'Baroque',
            'Gothic',

        ],
        'engineering'=>[
            'Electrical',
            'Electronic',
            'Industrial',
            'Computer',

        ],
        'space' => [
            'Earth',
            'Saturn',
            'Mars',
            'Neptune',
            'Moon',
            'Sun',

        ],
        'Sport',
        'Breaking News',
        'Travel',
        'Ideas',
        'Hobby',
    ];
}
