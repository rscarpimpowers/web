<?php

namespace App\Http\Controllers\Auth\SuperAdmin\CulturePerformance;

use App\Http\Controllers\Controller;
use App\Models\Behaviors;
use App\Models\Difficulties;
use App\Models\Values;
use App\Models\ViewLessons;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LessonsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Modules/CulturePerformance/Lessons/Show',
        ['dataLessons'      => ViewLessons::orderBy('les_title')->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Modules/CulturePerformance/Lessons/Crud/Add',
            [
                'dataDifficulty'    => Difficulties::orderBy('dif_description')->get(),
                'dataValues'        => Values::orderBy('val_name')->get(),
                'dataBehaviors'     => Behaviors::orderBy('beh_name')->get()
            ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
