<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\UserPermissions;
use Illuminate\Http\Request;

class UserPermissionsController extends Controller
{
    public function show(Request $request)
    {
        /* Selecting the Permissions Based on the User id, User Level and Page Name */
        $toReturn =  UserPermissions::where('user_id', '=', $request->user_id)
                                    ->where('level_id', '=', $request->level_id)
                                    ->where('per_device', '=', $request->device)
                                    ->where('per_screen', '=', $request->screen)
                                   ->get();

        return $toReturn;
    }
}
