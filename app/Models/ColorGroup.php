<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ColorGroup extends Model
{
    use HasFactory;

    protected $table        = "culture_color_group";

    protected $fillable     = ['gro_id', 'gro_color', 'gro_color_description'];
}
