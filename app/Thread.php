<?php

namespace App;

use Illuminate\Support\Collection;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{ 
    public function messages()
    {
        return $this->hasMany(Message::class);
    }
    
    // making a new thread if it does not exist
    public function makeNewThread( $user_two )
    {
        $thread = $this->getThread($user_two);
        
        if( $thread == null )
        {
            $thread = new Thread();

            $thread->user_one = auth()->id();
            $thread->user_two = $user_two;

            $thread->save();

            return $thread;

        }else{

            return $thread;
        }
    }

    // Get Thread with a user_id
    public function getThread( $user_id )
    {
        $thread = $this->where( 'user_one', $user_id )->where( 'user_two', auth()->id() )->orWhere(function ($query) use ( $user_id ){

            $query->where( 'user_two', $user_id )->where( 'user_one', auth()->id() );

        })->first();

        if( $thread )
        {
            return $thread;
        } 
        else {
            return null;
        }
    }

    // last messages of each thread
    public function threadsLastMessages()
    {
        // Get all the threads that have not been deleted by the auth user
        $threads = $this->where( 'user_one', auth()->id() )->where( 'deleted_by_user_one', 0 )
            ->orWhere(function ($query) {
                $query->where('user_two', auth()->id())->where('deleted_by_user_two', 0);
        })->pluck('id');

        $threadsLastMessages = new Collection;

        if( $threads )
        {
            foreach( $threads as $thread )
            {
                $message = Message::where( 'thread_id', $thread )->orderBy('created_at', 'desc')->first();

                $threadsLastMessages->push($message);
            }
        }

        return isset( $threadsLastMessages )   ?   $threadsLastMessages->sortByDesc( 'id' ) :  new Collection;
    }
}
