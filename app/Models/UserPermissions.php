<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;


class UserPermissions extends Model
{
    use HasFactory;


    protected function perDescription(): Attribute
    {

        return Attribute::make(
            get: fn ($value)    => Crypt::decryptString($value),
            set: fn ($value)    => Crypt::encryptString($value),
        );
    }


//    protected function perScreen(): Attribute
//    {
//
//        return Attribute::make(
//
//            get: fn ($value)    => Crypt::decryptString($value),
//            set: fn ($value)    => Crypt::encryptString($value),
//        );
//    }


}
