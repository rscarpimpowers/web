<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewModuleSections extends Model
{
    use HasFactory;

    protected $table    = "v_module_sections";

    protected $fillable = [
        'sec_id',
        'uuid',
        'sec_sequence',
        'mod_id',
        'sec_name',
        'sec_description',
        'is_active', '
        mod_name',
        'mod_description',
        'mod_is_active',
        'mod_img_path'
    ];
}
