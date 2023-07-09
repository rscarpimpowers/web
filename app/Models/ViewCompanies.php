<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViewCompanies extends Model
{
    use HasFactory;
    protected $table = "v_all_companies";

    protected $fillable = [
        'com_name'
    ];
}
