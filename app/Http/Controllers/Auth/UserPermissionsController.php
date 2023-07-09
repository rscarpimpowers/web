<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class UserPermissionsController extends Controller
{
    public function show(Request $request)
    {
        /* Selecting the Permissions Based on the User id, User Level and Page Name */
        $toReturn =  UserPermissions::where('user_id', '=', $request->user_id)
                                    ->where('level_id', '=', $request->level_id)
                                    ->where('per_device', '=', $request->device)
                                    ->where('per_screen', '=', $request->screen)
                                   ->get();

        return $toReturn;
    }


    public function update(Request $request){

        /* Checking for a valid Request */
        if(count($request->all()) >= 1){

            /* Iterates all the Request Data */
            $toExecute = DB::select("call sp_user_permissions(?,?,?,?,?,?,?,?)", [
                (int)$request['pType'],
                (int)$request['per_id'],
                (int)$request['user_id'],
                (int)$request['level_id'],
                (int)$request['per_sequence'],
                Crypt::encryptString($request['per_description']),
                (int)$request['per_device'],
                Crypt::encryptString($request['per_screen'])
            ]);
            dump(collect($toExecute));
            //dump(Crypt::decryptString('eyJpdiI6IndsVndLb3dVbFZ6WnhOWVF6QzJyK2c9PSIsInZhbHVlIjoieFk5VC9hYUVndHF4d1RVejZDTW1RZz09IiwibWFjIjoiZTI2MzAzMGZjMjJjZDExOTJhZTExMzc2YjgwNzZjNzg3MTNlMmNjN2NlN2JmMzRmYzYzMGM4ZWU0ZDE0ZmZmYyIsInRhZyI6IiJ9'));
        }
    }
}
