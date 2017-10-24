<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kitchen extends Model
{
    protected $guarded =['id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
