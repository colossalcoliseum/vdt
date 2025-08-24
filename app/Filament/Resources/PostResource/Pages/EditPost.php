<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPost extends EditRecord
{
    protected static string $resource = PostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeCreate(array $data): array
    {

        if (isset($data['thumbnail']) && !str_starts_with($data['thumbnail'], 'storage/')) {
            $data['thumbnail'] = 'storage/' . $data['thumbnail'];
        }
        return $data;
    }
}
