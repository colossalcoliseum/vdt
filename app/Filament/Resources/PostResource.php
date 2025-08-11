<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Post;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Filters\SelectFilter;


class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'User-Generated Content';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->minLength(3)
                ,
                TextInput::make('description')
                    ->minLength(3)
                    ->required()
                    ->columnSpan('full'),
                Select::make('visibility')
                    ->options([
                        'public' => 'Public',
                        'private' => 'Private',
                    ])
                    ->required(),
                FileUpload::make('thumbnail')
                    ->disk('public')
                    ->directory('postThumbnails')
                    ->required()
                    ->visibility('public')
                    ->image()
                    ->circleCropper()
                /*    ->panelLayout('grid')
                    ->multiple()
                    ->reorderable()
                    ->appendFiles()
                    ->openable()*/
                    ->imageEditor()
                ->imageEditorAspectRatios([
                    null,
                    '16:9',
                    '1:1',
                    '4:3',
                ])
                ->imageEditorEmptyFillColor('#000000')
                ,

                Select::make('creator_id')
                    ->relationship('creator', 'name')
                    ->searchable()
                    ->required()
                    ->preload()
                    ->createOptionForm([
                        TextInput::make('name')
                            ->required()
                            ->minLength(3),
                        TextInput::make('email')
                            ->required()
                            ->minLength(3)
                            ->email()
                            ->label('Email Address'),
                        TextInput::make('password')
                            ->required()
                            ->minLength(8)
                            ->password()
                    ]),
                FileUpload::make('main_image')
                    ->disk('public')
                    ->directory('postThumbnails')
                    ->required()
                    ->visibility('public')
                    ->image()
                    ->circleCropper()
                    ->imageEditor()
                    ->imageEditorAspectRatios([
                        null,
                        '16:9',
                        '1:1',
                        '4:3',
                    ])
                    ->imageEditorEmptyFillColor('#000000'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id'),
                TextColumn::make('title')->searchable(),
                TextColumn::make('creator.name')->searchable(),
                TextColumn::make('visibility'),
                ImageColumn::make('thumbnail'),
                ImageColumn::make('main_image'),
                TextColumn::make('created_at')
                    ->sortable()
                    ->datetime(),
            ])
            ->filters([
                SelectFilter::make('visibility')
                ->options([
                    'public' => 'Public',
                    'private' => 'Private',
                ])
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\CreatorRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPosts::route('/'),
            'create' => Pages\CreatePost::route('/create'),
            'edit' => Pages\EditPost::route('/{record}/edit'),
        ];
    }
}
