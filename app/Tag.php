<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $guarded =['id'];

    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
