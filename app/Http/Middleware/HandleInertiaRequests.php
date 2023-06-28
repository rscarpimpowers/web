<?php

namespace App\Http\Middleware;

use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $permissions = "";

        /* If There's an Auth User. */
        if(Auth::user()){

            /* Get all the Permissions for the User. */
            $permissions = UserPermissions::where('user_id', '=', Auth::user()->id)
                ->where('per_device', 1)
                ->get();
        }


        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user()
            ],
            'permissions' => [
                'permissions' => $permissions
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
