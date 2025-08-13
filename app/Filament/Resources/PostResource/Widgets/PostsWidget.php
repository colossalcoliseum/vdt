<?php

namespace App\Filament\Resources\PostResource\Widgets;

use App\Filament\Resources\PostResource\Pages\ListPosts;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class PostsWidget extends BaseWidget
{

    protected function getStats(): array
    {
        return [
           //

        ];

    }
    protected function getTablePage(): string
    {
        return ListPosts::class;
    }
}
