<?php

namespace App\Filament\Widgets;

use App\Models\Post;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class PostVisibilityOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Total Private Posts', Post::query()->where('visibility_id','1')->count()),
            Stat::make('Total Public Posts', Post::query()->where('visibility_id','2')->count()),
        ];
    }
}
