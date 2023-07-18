<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewCultureBehaviors extends Model
{
    use HasFactory;

    protected $table = "v_culture_behaviors";

    protected $fillable = [
        'beh_id',
        'uuid',
        'beh_sequence',
        'color_group_id',
        'gro_color',
        'beh_name'
    ];
}
