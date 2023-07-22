<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Languages;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class LanguagesController extends Controller
{
    public function showAll(Request $request){

        return Languages::orderBy('lan_description')->get();
    }

    public function show(Request $request):RedirectResponse
    {
        return Redirect::back()->with([
            'languagesData' => Languages::orderBy('lan_description')->get(),
        ]);
    }
}
