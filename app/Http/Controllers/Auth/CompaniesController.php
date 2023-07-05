<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CompaniesController extends Controller
{
    public function getData(Request $request){

        return Company::where('com_id', $request->com_id)->get();
    }


    public function getAllWithView(Request $request){

        return DB::table('v_companies')->get();
    }
}
