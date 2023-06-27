<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserPermissionsController extends Controller
{
    public function show(Request $request)
    {
        return $request->screen;
    }
}
