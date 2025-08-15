<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;

class VisibilityChart extends ChartWidget
{
    protected static ?string $heading = 'Posts Chart';

    protected function getData(): array
    {
        return [
            //
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
