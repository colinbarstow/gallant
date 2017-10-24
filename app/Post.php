<?php

namespace App;

use Cyrildewit\PageVisitsCounter\Traits\HasPageVisitsCounter;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasPageVisitsCounter;

    protected $guarded =['id'];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
