<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyTypes extends Model
{
    use HasFactory;

    protected $table = 'company_types';

    protected $fillable = ['typ_id', 'typ_description'];
}
