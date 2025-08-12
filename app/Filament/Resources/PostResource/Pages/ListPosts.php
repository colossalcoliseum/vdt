<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use App\Models\Post;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use Filament\Resources\Components\Tab;
use Illuminate\Database\Eloquent\Builder;
class ListPosts extends ListRecords
{
    protected static string $resource = PostResource::class;

    public function getTabs(): array
    {
        return [
            'all'=>Tab::make()->icon('icon-house')->badge(Post::all()->count()),
            'public'=>Tab::make()
            ->modifyQueryUsing(fn(Builder $query)=> $query->where('visibility', 'public'))
                ->icon('icon-collection')
                ->badge(Post::query()->where('visibility','public')->count()),
            'private'=>Tab::make()
            ->modifyQueryUsing(fn(Builder $query)=> $query->where('visibility', 'private'))
            ->icon('icon-lock')
                ->badge(Post::query()->where('visibility','private')->count()),

        ];
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
