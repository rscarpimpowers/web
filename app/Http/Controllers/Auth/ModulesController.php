<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\ViewModules;
use App\Models\ViewModuleSections;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModulesController extends Controller
{
    public function show(Request $request){

        /* Select all the Modules. */
        $modulesData        = ViewModules::orderBy('mod_name')->where('is_active', 1)->get()->toArray();

        return Inertia::render('Modules/Show', ['modulesData' => $modulesData]);
    }


    public function create(Request $request){

        return Inertia::render('Modules/Partials/Add', []);
    }


}
