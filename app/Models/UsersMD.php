<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersMD extends Model
{
    use HasFactory;


    protected $table    = 'v_users';

    protected $fillable =
        [
            'id',
            'uuid',
            'is_active',
            'name',
            'name_abbreviation',
            'email',
            'level_id',
            'language_id',
            'company_id',
            'lan_description',
            'com_name'];

}
