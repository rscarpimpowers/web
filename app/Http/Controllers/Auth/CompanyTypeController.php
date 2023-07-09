<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\CompanyTypes;
use Illuminate\Http\Request;

class CompanyTypeController extends Controller
{
    public function getAll(Request $request){

        return CompanyTypes::orderBy('typ_description')->get();
    }
}
