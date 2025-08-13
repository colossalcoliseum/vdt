<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use App\Models\Post;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Resources\Components\Tab;
use Illuminate\Database\Eloquent\Builder;
use Filament\Pages\Concerns\ExposesTableToWidgets;

class ListPosts extends ListRecords
{
    protected static string $resource = PostResource::class;
    use ExposesTableToWidgets;

    public function getTabs(): array
    {
        return [
            'all' => Tab::make()->icon('icon-house')->badge(Post::all()->count()),
            'public' => Tab::make()
                ->modifyQueryUsing(fn(Builder $query) => $query->where('visibility', 'public'))
                ->icon('icon-collection')
                ->badge(Post::query()->where('visibility_id', '2')->count()),
            'private' => Tab::make()
                ->modifyQueryUsing(fn(Builder $query) => $query->where('visibility', 'private'))
                ->icon('icon-lock')
                ->badge(Post::query()->where('visibility_id', '1')->count()),

        ];
    }

    protected function getHeaderWidgets(): array
    {
        return [
            PostResource\Widgets\PostsWidget::class,
        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
