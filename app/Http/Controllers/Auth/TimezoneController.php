<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Timezone;
use Illuminate\Http\Request;

class TimezoneController extends Controller
{
    public function getAll(){

        return Timezone::orderBy('tim_description')->get();
    }
}
