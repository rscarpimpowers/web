<?php

namespace App\Http\Controllers\Auth\SuperAdmin\CulturePerformance;

use App\Http\Controllers\Controller;
use App\Models\Behaviors;
use App\Models\ColorGroup;
use App\Models\ViewCultureBehaviors;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;

class BehaviorsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Modules/CulturePerformance/Behaviors/Show',
            [ 'dataBehaviors' => ViewCultureBehaviors::orderBy('beh_name')->orderBy('beh_sequence')->get() ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Modules/CulturePerformance/Behaviors/Crud/Add',
            ['dataColorGroup' => ColorGroup::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        /* Setting the uuid */
        $uuid = Uuid::uuid4();

        /* Checking for a valid Request */
        if(count($request->all()) >= 1){

            /* Iterates all the Request Data */
            DB::select("call sp_culture_behaviors(?,?,?,?,?,?,?,?,?,?,?,?)", [
                1,
                null,
                $uuid->toString(),
                null,
                $request->color_group_id,
                $request->beh_name,
                $request->beh_did_you,
                $request->beh_did_supervisor,
                $request->beh_takeaways,
                $request->beh_definition,
                Auth::user()->id,
                null
            ]);
        }

        return Inertia::render('Modules/CulturePerformance/Behaviors/Show',
            ['dataBehaviors' => ViewCultureBehaviors::orderBy('beh_name')->orderBy('beh_sequence')->get()]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Modules/CulturePerformance/Behaviors/Crud/Edit',
            [ 'dataBehavior'   => ViewCultureBehaviors::where('uuid', $id)->get(), 'dataColorGroup' => ColorGroup::all()]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        /* Updating the Data.*/
        Behaviors::where('uuid', $request->uuid)->update([
            'color_group_id'        => $request->color_group_id,
            'beh_name'              => $request->beh_name,
            'beh_did_you'           => $request->beh_did_you,
            'beh_did_supervisor'    => $request->beh_did_supervisor,
            'beh_takeaways'         => $request->beh_takeaways,
            'beh_definition'        => $request->beh_definition,
            'updated_by'            => $request->updated_by
        ]);

        return Redirect::route('modules.behaviors.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request):RedirectResponse
    {

        Behaviors::where('uuid', '=',  $request->uuid)->delete();

        return Redirect::route('modules.behaviors.index');
    }

    /**
     * Check if the Behavior is Available, if Not returns the Behavior name and the Sequence
     */
    public function verifyBehavior(Request $request){

        /* Returns the Last sequence Number*/
        $toReturn = DB::table('culture_behaviors')->where('beh_name', $request->beh_name)->max('beh_sequence');

        return $toReturn > 0 ? redirect()->back()->with([
            'message'   => 'This Behavior name has been taken already.Last Sequence ' . $toReturn,
            'total'     => $toReturn
        ]): null;
    }
}
