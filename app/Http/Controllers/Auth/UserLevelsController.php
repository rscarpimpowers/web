<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\UserLevels;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserLevelsController extends Controller
{
    public function showAll(Request $request){

        /* If is a Super Admin */
        if(Auth::user()->level_id === 1)
            return  UserLevels::orderBy('lev_description')->get();
        else
            return UserLevels::orderBy('lev_description')
                ->where('lev_id', '>', 1)
                ->get();
    }
}
