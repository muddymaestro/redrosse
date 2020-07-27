<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wall extends Model
{
    use commentableTrait, likeableTrait;

    public function userTo()
    {
        return $this->belongsTo(User::class, 'posted_on_user_id');
    }

    public function userFrom()
    {
        return $this->belongsTo(User::class, 'posted_by_user_id');
    }

    public function isLike($postId)
    {
        $post = $this->find($postId);

        return (boolean) $post->likes()->where('user_id', Auth::user()->id)->first();
    }
}
