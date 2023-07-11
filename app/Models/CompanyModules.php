<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyModules extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'mod_id', 'company_id', 'mod_sequence'];
}
