<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VisibilityResource\Pages;
use App\Filament\Resources\VisibilityResource\RelationManagers;
use App\Models\Visibility;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Pages\Page;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Spatie\Permission\Models\Role;

class VisibilityResource extends Resource
{
    protected static ?string $model = Visibility::class;

    protected static ?string $navigationIcon = 'icon-eye';
    protected static ?string $activeNavigationIcon = 'icon-eye-fill';
    protected static ?int $navigationSort = 2;



    protected static ?string $navigationGroup = 'Admin Tools';


    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('name'),
                TextInput::make('slug'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('slug'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ForceDeleteAction::make(),
                Tables\Actions\RestoreAction::make(),

            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                ]),
            ]);
    }
    public static function getRelations(): array
    {
        return [
            RelationManagers\PostsRelationManager::class,
        ];
    }
    public static function getRecordSubNavigation(Page $page): array
    {
        return $page->generateNavigationItems([
            Pages\ListVisibilities::class,
            Pages\CreateVisibility::class,
            Pages\ViewVisibility::class,
            Pages\EditVisibility::class,
        ]);
    }
    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVisibilities::route('/'),
            'create' => Pages\CreateVisibility::route('/create'),
            'view' => Pages\ViewVisibility::route('/{record}'),
            'edit' => Pages\EditVisibility::route('/{record}/edit'),
        ];
    }
}
