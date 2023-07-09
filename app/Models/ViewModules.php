<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewModules extends Model
{
    use HasFactory;
    protected $table = 'v_modules';

    protected $fillable = ['mod_id', 'uuid', 'mod_name', 'mod_description', 'company_id', 'is_active'];
}
