<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modules extends Model
{
    use HasFactory;

    protected $table = 'modules';

    protected $fillable = ['mod_id', 'uuid', 'mod_name', 'mod_description', 'company_id', 'is_active'];
}
