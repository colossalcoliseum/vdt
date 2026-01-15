<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->longText('description');
            $table->string('video_path');
            $table->string('thumbnail');
            $table->string('original_filename');
            $table->bigInteger('file_size');
            $table->string('video_mime_type');
            $table->foreignId('status_id')->constrained('statuses')->onDelete('cascade');
            $table->foreignId( 'category_id')->constrained('categories')->onDelete('cascade');
            $table->foreignId('creator_id')->constrained('users')->onDelete('cascade');/*TODO: user_id е тук*/
            $table->foreignId('updated_by')->constrained('users')->onDelete('cascade');/*TODO: user_id е тук*/
            $table->foreignId('visibility_id')->constrained('visibilities')->onDelete('cascade');
            $table->foreignId('type')->constrained('content_types')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('videos');
    }
};
