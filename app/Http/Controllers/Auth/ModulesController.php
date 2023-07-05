<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModulesController extends Controller
{
    public function show(Request $request){

        $toModules = "";

        return Inertia::render('Modules/Show', [
            'modulesData' => $toModules
        ]);
    }


    public function create(Request $request){

        return Inertia::render('Modules/Partials/Add', [

        ]);
    }
}
