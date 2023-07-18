<?php

namespace App\Http\Controllers\Auth\SuperAdmin;

use App\Http\Controllers\Controller;
use App\Models\CompanyTitle;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CompanyTitleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return Inertia::render('Companies/Titles/Show',
            [ 'titlesData'   => CompanyTitle::orderBy('tit_description')->paginate(5) ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Companies/Titles/Add', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        CompanyTitle::create([
            'tit_description'   => $request->tit_description,
            'tit_abbreviation'  => $request->tit_abbreviation
        ]);

        return Inertia::render('Companies/Titles/Show', ['titlesData' => CompanyTitle::orderBy('tit_description')->paginate(5)]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Companies/Titles/Edit', [ 'titleData'   => CompanyTitle::where('uuid', $id)->get()]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        CompanyTitle::where('uuid', '=', $request->uuid)->update([
            'tit_description'   => $request->tit_description,
            'tit_abbreviation'  => $request->tit_abbreviation
        ]);

        return Redirect::route('company.title.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request):RedirectResponse
    {

        CompanyTitle::where('uuid', '=',  $request->uuid)->delete();

        return Redirect::route('company.title.index');
    }

    /**
     * Check if the Title is Available
     */
    public function verifyTitle(Request $request){

        $toCount = CompanyTitle::where('tit_description', $request->tit_description)->count();

        return $toCount > 0 ? redirect()->back()->with([
            'message' => 'This Company Title has been taken already.',
        ]): null;
    }

    /**
     * Return a List with all the Titles, to be populated in a Combobox.
     */
    public function getAllCombo(Request $request){

        return CompanyTitle::orderBy('tit_description')->get();
    }
}
