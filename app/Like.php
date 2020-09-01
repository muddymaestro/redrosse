<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    public function likeable()
    {
        return $this->morphTo();
    }

    public function post()
    {
        return $this->belongsTo('App\Post');
    }

    public function wall_post()
    {
        return $this->belongsTo('App\Wall');
    }

    public function comment()
    {
        return $this->belongsTo('App\Comment');
    }
}
