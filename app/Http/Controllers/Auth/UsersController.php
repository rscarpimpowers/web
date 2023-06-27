<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\UsersMD;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;
use const http\Client\Curl\AUTH_ANY;

class UsersController extends Controller
{
    public function show(Request $request)
    {

        $toReturn = "";

        /* SQL View data based on the level_id. */
        switch (Auth::user()->level_id){

            /* Super Administrator */
            case 1:

                $toReturn = UsersMD::where('id', '!=', Auth::user()->id)
                ->orderBy('level_id')
                ->orderBy('name')

                ->simplePaginate(5);
        }


        return Inertia::render('User/Show', [
            'userData'  => $toReturn
        ]);
    }
}
