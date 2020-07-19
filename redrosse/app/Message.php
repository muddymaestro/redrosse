<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    // relationship of message and user models
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function user_to()
    {
        return $this->belongsTo(User::class, 'message_to');
    }

    public function thread()
    {
        return $this->belongsTo('App\Thread');
    }

    // Message to (user model)
    public function messageUserTo($thread_id)
    {
        $thread = Thread::findOrFail($thread_id);

        if( $thread->user_one == auth()->id() )
        {
            $user_to = User::findOrFail($thread->user_two);
        }
        else{
            $user_to = User::findOrFail($thread->user_one);
        }

        return $user_to;
    }
}
