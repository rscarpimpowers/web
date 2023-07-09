<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\UserPermissions;
use App\Models\UsersMD;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Crypt;


class UsersController extends Controller
{
    public function show(Request $request)
    {

        $toReturn = UsersMD::where('id', '!=', Auth::user()->id)
        ->orderBy('level_id')
        ->orderBy('name')

        ->simplePaginate(5);


        return Inertia::render('User/Show', [
            'userData'  => $toReturn
        ]);
    }


    public function create(Request $request){
        return Inertia::render('User/Partials/Add');

    }


    public function update(Request $request){

        /* Selecting the User Data based on the uuid Field */
        $toUserData         = UsersMD::where('uuid', $request->uuid)->get();

        /* Selecting all the Permissions for the Selected user, Based on the user_id */
        $toUserPermissions  = UserPermissions::where('user_id', '=', $toUserData[0]['id'])
            ->where('level_id', '=', $toUserData[0]['level_id'])
            ->get(['per_id', 'uuid', 'user_id', 'level_id', 'per_sequence', 'per_description', 'per_device', 'per_screen']);

        return Inertia::render('User/Partials/Edit', [
            'userData' => $toUserData,
            'userPermissions' => $toUserPermissions
        ]);
    }




    public function verifyEmail(Request $request){

        return UsersMD::where('email', $request->email)->count();
    }
}
