<?php

namespace App\Providers\Filament;
use App\Filament\AvatarProviders\BoringAvatarsProvider;
use App\Filament\Resources\PostResource;
use App\Filament\Resources\RoleResource;
use App\Filament\Resources\UserResource;
use App\Filament\Resources\VisibilityResource;
use Filament\AvatarProviders\Contracts\AvatarProvider;
use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Filament\Navigation\NavigationGroup;
use Filament\Navigation\NavigationItem;
use Filament\Pages\Dashboard;
use App\Filament\Pages\HomePageSettings;
use App\Filament\Resources\CategoryResource;
use App\Filament\Resources\PageResource;
use Filament\Navigation\NavigationBuilder;
use App\Filament\Pages\Settings;
use Filament\Navigation\MenuItem;
class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            ->colors([
                'primary' => Color::Amber,
            ])
            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([


            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ])
            ->sidebarCollapsibleOnDesktop()

        ->globalSearchKeyBindings(['command+k', 'ctrl+k'])

            ->sidebarWidth('16rem')

            ->navigation(function (NavigationBuilder $builder): NavigationBuilder {
                return $builder->groups([
                    NavigationGroup::make('')
                    ->items([
                        ...Dashboard::getNavigationItems()
                    ])->collapsed(false)
                    ,

                    NavigationGroup::make('Admin Tools')
                        ->items([
                            ...RoleResource::getNavigationItems(),
                            ...VisibilityResource::getNavigationItems(),
                        ]),
                    NavigationGroup::make('User Tools')
                        ->items([
                            ...UserResource::getNavigationItems(),
                            ...PostResource::getNavigationItems(),
                        ]),
                ]);
            })
            ->userMenuItems([

                'profile' => MenuItem::make()->label('Edit profile'),
                'logout' => MenuItem::make()->label('Log out'),

            ])
            ->login()
            ->registration()
            ->passwordReset()
            ->emailVerification()
            ->profile(isSimple: false);
           //TODO BoringAvatarsProvider за defAvatar

    }
}
