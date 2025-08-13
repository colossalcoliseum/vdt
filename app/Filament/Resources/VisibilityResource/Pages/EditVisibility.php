<?php

namespace App\Filament\Resources\VisibilityResource\Pages;

use App\Filament\Resources\VisibilityResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditVisibility extends EditRecord
{
    protected static string $resource = VisibilityResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\ViewAction::make(),
        ];
    }
}
