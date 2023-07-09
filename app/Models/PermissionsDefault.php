<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermissionsDefault extends Model
{
    use HasFactory;
    protected $table = 'users_permissions_default';

    protected $fillable = ['def_if', 'uuid', 'level_id', 'def_sequence', 'def_description', 'def_device', 'def_permission', 'def_screen'];
}
