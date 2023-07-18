<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\ViewCompanies;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CompaniesController extends Controller
{


    public function show(Request $request){

        $toCompanies = ViewCompanies::orderBy('com_name')->paginate(2);

        return Inertia::render('Companies/Show', [
            'companiesData'   => $toCompanies
        ]);
    }

    public function create(Request $request){

        /*  */

        return Inertia::render('Companies/Partials/Add', []);
    }

    public function getData(Request $request){

        return Company::where('com_id', $request->com_id)->get();
    }


    public function getAllWithView(Request $request){

        return DB::table('v_companies')->get();
    }
}
