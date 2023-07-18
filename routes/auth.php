<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\CompaniesController;
use App\Http\Controllers\Auth\CompanyModulesController;
use App\Http\Controllers\Auth\CompanyTypeController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\DevicesController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\LanguagesController;
use App\Http\Controllers\Auth\ModulesController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\PermissionsDefaultController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\SuperAdmin\CompanyTitleController;
use App\Http\Controllers\Auth\SuperAdmin\CulturePerformance\BehaviorsController;
use App\Http\Controllers\Auth\SuperAdmin\CulturePerformance\ValuesController;
use App\Http\Controllers\Auth\TimezoneController;
use App\Http\Controllers\Auth\UserLevelsController;
use App\Http\Controllers\Auth\UserPermissionsController;
use App\Http\Controllers\Auth\UsersController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::view('message', 'message');

Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');



    // Company Types
    Route::post('company-types',                [CompanyTypeController::class,          'getAll']);

    // Company Modules
    Route::post('company-modules',              [CompanyModulesController::class,       'getAll']);

    // Permissions
    Route::post('permissions',                  [UserPermissionsController::class,  'show'])->name('permissions.show');

    // Default Permissions
    Route::post('default-permissions',          [PermissionsDefaultController::class, 'getPermissions']);

    // Permissions
    Route::post('permissions',                  [UserPermissionsController::class,      'update']);

    // Languages
    Route::post('languages',                    [LanguagesController::class,       'showAll']);

    // Levels
    Route::post('levels',                       [UserLevelsController::class,       'showAll']);

    // Devices
    Route::post('devices',                      [DevicesController::class,         'showAll']);

    // Timezone
    Route::post('timezone',                     [TimezoneController::class,         'getAll']);

    // CompanyTitle
    //Route::post('title',                        [TitleController::class,            'getAll']);
    //Route::get('titles-show',                   [TitleController::class,            'show'])->name('titles.show');
    //Route::get('title-update/{uuid}',           [TitleController::class,            'update'])->name('title.update');
    //Route::post('title-delete',                 [TitleController::class,            'delete'])->name('title.delete');
    //Route::post('title-save',                   [TitleController::class,            'save'])->name('title.update.data');
    //Route::get('title-create',                  [TitleController::class,            'create'])->name('title.create');


    Route::get('title',                         [CompanyTitleController::class,     'index'])->name('company.title.index');
    Route::get('title/create',                  [CompanyTitleController::class,     'create'])->name('company.title.create');
    Route::post('title',                        [CompanyTitleController::class,     'store'])->name('company.title.store');
    Route::get('title/{id}/edit',               [CompanyTitleController::class,     'edit'])->name('company.title.edit');
    Route::put('title/{id}',                    [CompanyTitleController::class,     'update'])->name('company.title.update');
    Route::post('title/{id}/destroy',           [CompanyTitleController::class,     'destroy'])->name('company.title.destroy');
    Route::post('title/verify',                 [CompanyTitleController::class,     'verifyTitle'])->name('company.title.verify');
    Route::post('title/all',                    [CompanyTitleController::class,     'getAllCombo'])->name('company.title.getAll');
});

/*
 *  Route   : Super Admin.
 */
Route::middleware(['auth', 'isSuperAdmin'])->group(function (){


    // Users
    Route::get('users-show',                [UsersController::class,            'show'])->name('users.show');
    Route::get('user-create',               [UsersController::class,            'create'])->name('user.create');
    Route::get('user-update/{uuid}',        [UsersController::class,            'update'])->name('user.update');
    Route::post('user-verify',              [UsersController::class,            'verifyEmail'])->name('user.verify');


    // Company
    Route::get('companies-show',                [CompaniesController::class,            'show'])->name('companies.show');
    Route::get('company-create',                [CompaniesController::class,            'create'])->name('company.create');

    Route::post('company',                      [CompaniesController::class,            'getData']);
    Route::post('companies',                    [CompaniesController::class,            'getAllWithView']);



    // Modules
    Route::get('modules-show',              [ModulesController::class,          'show'])->name('modules.show');
    Route::get('module-create',             [ModulesController::class,          'create'])->name('module.create');


    // Culture Performance Values
    Route::get('values',                    [ValuesController::class,           'index'])   ->name('modules.values.index');
    Route::get('values/create',             [ValuesController::class,           'create'])  ->name('modules.values.create');
    Route::post('values',                   [ValuesController::class,           'store'])   ->name('modules.values.store');

    // Culture Performance Behaviors
    Route::get('behaviors',                 [BehaviorsController::class,        'index'])   ->name('modules.behaviors.index');
    Route::get('behaviors/create',          [BehaviorsController::class,        'create'])  ->name('modules.behaviors.create');
    Route::post('behaviors',                [BehaviorsController::class,        'store'])   ->name('modules.behaviors.store');
    Route::get('behaviors/{id}/edit',       [BehaviorsController::class,        'edit'])    ->name('modules.behaviors.edit');
    Route::put('behaviors/{id}',            [BehaviorsController::class,        'update'])  ->name('modules.behaviors.update');
    Route::post('behaviors/{uuid}/destroy', [BehaviorsController::class,        'destroy']) ->name('modules.behaviors.destroy');

    Route::post('behaviors/verify',         [BehaviorsController::class,        'verifyBehavior'])->name('modules.behaviors.verify');
});
