<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostResource\Pages;
use App\Filament\Resources\PostResource\RelationManagers;
use App\Models\Post;
use Filament\Forms;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Filters\SelectFilter;
use Filament\GlobalSearch\Actions\Action;
use Spatie\Permission\Models\Role;


class PostResource extends Resource
{
    protected static ?string $model = Post::class;

    protected static ?string $navigationIcon = 'grid-1x2';
    protected static ?string $activeNavigationIcon = 'grid-1x2-fill';
    protected static ?string $navigationBadgeTooltip = 'Total Posts';

    protected static ?string $navigationGroup = 'User-Generated Content';
    protected static ?string $recordTitleAttribute = 'name';
    protected static int $globalSearchResultsLimit = 20;
    protected static ?int $navigationSort = 1;


    public static function getNavigationBadge(): ?string
    {
        return cache()->remember('posts_count_for_recource', now()->addDay(), function () {
            return static::getModel()::count();
        });
    }
    public static function getNavigationBadgeColor(): ?string
    {
        return 'info';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title')
                    ->required()
                    ->minLength(3)
                ,
              /*  TextInput::make('description')
                    ->minLength(3)
                    ->required()
                    ->columnSpan('full'),*/
                Select::make('visibility_id')
                    ->relationship('visibility', 'name')
                    ->required()
                    ->label('Visibility'),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required()
                    ->label('Category'),
                FileUpload::make('thumbnail')
                    ->disk('public')
                    ->directory('postThumbnails')

                    ->required()
                    ->visibility('public')
                    ->image()

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
                RichEditor::make('description')
                    ->toolbarButtons([
                        'attachFiles',
                        'blockquote',
                        'bold',
                        'bulletList',
                        'codeBlock',
                        'h2',
                        'h3',
                        'italic',
                        'link',
                        'orderedList',
                        'redo',
                        'strike',
                        'underline',
                        'undo',
                    ])
                    ->fileAttachmentsDisk('public')
                    ->fileAttachmentsDirectory('/storage/postImages')
                    ->fileAttachmentsVisibility('public')

                ,

                Select::make('is_published')//TODO : разбери защо постовете не се качват от тази форма
                    ->options([
                        true => 'Yes',
                        false => 'No',
                    ])
                ->label('Is Published ')
                ,

                Select::make('status_id')
                    ->options([
                        '1' => 'Active',
                        '2' => 'Suspended',
                        '3' => 'Disabled',
                    ])
                ->label('Status')
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
                TextColumn::make('title')->searchable()
                ->wrap(),
                TextColumn::make('creator.name')
                    ->searchable()
                    ->icon('icon-person')
                ,
                IconColumn::make('visibility.name')->label('Visibility')
                    ->searchable()
                    ->icon(fn (string $state): string => match ($state) {
                        'Private' => 'icon-lock',
                        'Public' => 'icon-unlock2',
                    })
                    ->color(fn (string $state): string => match ($state) {
                        'Public' => 'info',
                        'Private' => 'danger',
                        default => 'gray'
                    ,})
                    ,
                ImageColumn::make('main_image'),
                TextColumn::make('created_at')
                    ->sortable()
                    ->since(),
                IconColumn::make('is_published')
                    ->boolean()
                    ->trueIcon('icon-check-circle')
                    ->falseIcon('icon-x-circle')
                    ->color(fn (string $state): string => match ($state) {
                        '1' => 'info',
                        '0' => 'danger',

                        default => 'gray'
                    ,})


            ])
            ->filters([

            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getGloballySearchableAttributes(): array
    {
        return [
            'title', 'creator.name', 'visibility.name'
        ];
    }
    public static function shouldRegisterNavigation(): bool
    {
        return true;
    }
    public static function getGlobalSearchResultDetails(Model $record): array
    {
        return [
        'Title'=>$record->title,
        'Author'=>$record->creator->name,
        'Visibility'=>$record->visibility->name,
        ];
    }
    public static function getWidgets(): array
    {
        return [
            PostResource\Widgets\PostsWidget::class,
        ];
    }

    public static function getGlobalSearchResultUrl(Model $record): string
    {
        return UserResource::getUrl('edit', ['record' => $record]);
    }

    public static function getGlobalSearchEloquentQuery(): Builder
    {
        return parent::getGlobalSearchEloquentQuery()->with(['creator', 'visibility', 'category']);
    }



public
static function getRelations(): array
{
    return [
        RelationManagers\CreatorRelationManager::class,
    ];
}

public
static function getPages(): array
{
    return [
        'index' => Pages\ListPosts::route('/'),
        'create' => Pages\CreatePost::route('/create'),
        'edit' => Pages\EditPost::route('/{record}/edit'),
    ];
}
}
