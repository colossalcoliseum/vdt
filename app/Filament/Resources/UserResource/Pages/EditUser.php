<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditUser extends EditRecord
{
    protected static string $resource = UserResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }
    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if (isset($data['avatar']) && !str_starts_with($data['avatar'], 'storage/')) {
            $data['avatar'] = 'storage/' . $data['avatar'];
        }
        return $data;
    }
}
