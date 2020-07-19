<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use commentableTrait, likeableTrait;
  
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function commentable()
    {
        return $this->morphTo();
    } 
}
