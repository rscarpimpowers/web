<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewPermissionsDefault extends Model
{
    use HasFactory;

    protected $table = 'v_users_permissions_default';

    protected $fillable = ['def_if', 'uuid', 'level_id', 'def_sequence', 'def_description', 'def_device', 'def_permission', 'def_screen', 'lev_description'];

}
