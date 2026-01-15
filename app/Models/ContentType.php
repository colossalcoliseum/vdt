<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentType extends Model
{
    use HasFactory;
    protected $table = 'content_types';

    public static array $contentTypes = [
        'video'=>'Video',
        'post'=>'Post',
        'comment'=>'Comment',
    ];
}
