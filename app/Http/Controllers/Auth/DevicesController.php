<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Devices;
use Illuminate\Http\Request;

class DevicesController extends Controller
{
    public function showAll(Request $request){

        return Devices::get();
    }
}
