<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyTitle extends Model
{
    use HasFactory;

    protected $table = "title";

    protected $fillable = ['tit_id', 'uuid', 'tit_description', 'tit_abbreviation'];
}
