<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\CompanyTitle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TitleController extends Controller
{

    public function show(){

        $toTitles = CompanyTitle::orderBy('tit_description')->paginate(5);

        return Inertia::render('Companies/Titles/Show', [ 'titlesData'   => $toTitles ]);
    }

    public function update($uuid){

        $toTitleData = CompanyTitle::where('uuid', $uuid)->get();

        return Inertia::render('Companies/Titles/Edit', [ 'titleData'   => $toTitleData]);
    }

    public function save(Request $request): RedirectResponse
    {

        /* Updating the Data.  */
        CompanyTitle::where('uuid', '=', $request->uuid)->update([
            'tit_description'   => $request->tit_description,
            'tit_abbreviation'  => $request->tit_abbreviation,
        ]);

        return Redirect::route('titles.show');
    }

    public function getAll()
    {
        return CompanyTitle::orderBy('tit_description')->get();
    }

    public function isAvailable(Request $request){


    }
}
