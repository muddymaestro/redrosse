<?php

namespace App;

use Auth;

trait likeableTrait
{

  public function likes()
  {
    return $this->morphMany('App\Like', 'likeable');
  }

  public function like()
  {
    $like = new Like();
    $like->user_id = Auth::user()->id;

    $this->likes()->save($like);

    return $like;
  }
}
