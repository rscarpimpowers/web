<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    public function store(Request $request){

        /* Checking for a Valid Image Upload */
        if($request->imgValues){

            $path = $request->file('imgValues')->store('temp', ['disk' => 'powers']);

        }
    }
}
