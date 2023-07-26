<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewLessons extends Model
{
    use HasFactory;

    protected $table = "v_lessons";

    protected $fillable = [
        'les_id',
        'uuid',
        'company_id',
        'value_id',
        'behavior_id',
        'les_title',
        'les_minutes_to_complete',
        'difficulty_id',
        'les_is_available',
        'les_img_path'
    ];

}
