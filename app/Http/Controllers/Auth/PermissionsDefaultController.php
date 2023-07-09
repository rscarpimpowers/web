<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\ViewPermissionsDefault;
use Illuminate\Http\Request;

class PermissionsDefaultController extends Controller
{
    public function getPermissions(Request $request){

        return ViewPermissionsDefault::where('lev_description', '=', $request->lev_description)
            ->where('def_device', '=', 1)
            ->get();
    }
}
