<?php

namespace App\Filament\Resources\VisibilityResource\Pages;

use App\Filament\Resources\VisibilityResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListVisibilities extends ListRecords
{
    protected static string $resource = VisibilityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
