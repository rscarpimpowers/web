<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\CompanyModules;
use Illuminate\Http\Request;

class CompanyModulesController extends Controller
{
    public function getAll(Request $request){

        return CompanyModules::where('company_id', '=', $request->company_id)->get();
    }
}
