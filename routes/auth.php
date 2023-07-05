<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\CompaniesController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\DevicesController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\LanguagesController;
use App\Http\Controllers\Auth\ModulesController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\UserLevelsController;
use App\Http\Controllers\Auth\UserPermissionsController;
use App\Http\Controllers\Auth\UsersController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

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

    // Users
    Route::get('users-show',                [UsersController::class,            'show'])->name('users.show');

    Route::get('user-create',               [UsersController::class,            'create'])->name('user.create');

    Route::get('user-update/{uuid}',        [UsersController::class,            'update'])->name('user.update');

    Route::post('user-verify',              [UsersController::class,            'verifyEmail'])->name('user.verify');

    // Modules
    Route::get('modules-show',              [ModulesController::class,          'show'])->name('modules.show');

    Route::get('module-create',             [ModulesController::class,          'create'])->name('module.create');



    // Company
    Route::post('company',                   [CompaniesController::class,        'getData']);
    Route::post('companies',                [CompaniesController::class,         'getAllWithView']);



    // Permissions
    Route::post('permissions',              [UserPermissionsController::class,  'show'])->name('permissions.show');


    // Languages
    Route::post('languages',                 [LanguagesController::class,       'showAll']);

    // Levels
    Route::post('levels',                    [UserLevelsController::class,       'showAll']);

    // Devices
    Route::post('devices',                   [DevicesController::class,         'showAll']);

});
