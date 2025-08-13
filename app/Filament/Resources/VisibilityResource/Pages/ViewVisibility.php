<?php

namespace App\Filament\Resources\VisibilityResource\Pages;

use App\Filament\Resources\VisibilityResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewVisibility extends ViewRecord
{
    protected static string $resource = VisibilityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
