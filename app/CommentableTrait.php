<?php

namespace App;

use Auth;

trait commentableTrait
{

  public function comments()
  {
    return $this->morphMany('App\Comment', 'commentable')->latest();
  }

  function addComment($body)
  {
    $comment = new Comment();
    $comment->user_id = Auth::user()->id;
    $comment->body = $body;

    $this->comments()->save($comment);

    return $comment;
  }
}
