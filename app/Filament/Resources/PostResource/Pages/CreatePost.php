<?php

namespace App\Filament\Resources\PostResource\Pages;

use App\Filament\Resources\PostResource;
use App\Models\Post;
use Filament\Actions;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\CreateRecord;
use Filament\Forms\Components\Wizard\Step;

class CreatePost extends CreateRecord
{
    protected static string $resource = PostResource::class;


    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    public function getCreatedNotification(): ?Notification
    {
        return Notification::make()
            ->success()
            ->title('Success')
            ->body('Post Created');
    }

    protected function beforeCreate(): void
    {
        if (!auth()->user()->can('create', Post::class)) {
            Notification::make()
                ->warning()
                ->title('Warning')
                ->body('Missing permission to create post!')
                ->persistent()
                ->icon('icon-person-exclamation')
                ->send();
        }
        $this->halt();
    }
}
