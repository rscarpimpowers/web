<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Ramsey\Uuid\Uuid;

class Values extends Model
{
    use HasFactory;

    protected $table        = "culture_values";

    protected $fillable     = ['val_id', 'uuid', 'company_id', 'val_name', 'val_description', 'val_video_url', 'val_img_path', 'created_by', 'updated_by'];

    public static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub

        /* When Creating the Data. */
        static::creating(function ($model){

            $model->uuid         = Uuid::uuid4();
            $model->created_by   = Auth::user()->id;
        });

        /* When Updating the Data.*/
        static::updating(function ($model){

            if (!$model->isDirty('updated_by')) {
                $model->updated_by = auth()->user()->id;
            }
        });
    }
}
