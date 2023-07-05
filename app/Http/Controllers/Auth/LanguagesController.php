<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Languages;
use Illuminate\Http\Request;

class LanguagesController extends Controller
{
    public function showAll(Request $request){

        return Languages::orderBy('lan_description')->get();
    }
}
