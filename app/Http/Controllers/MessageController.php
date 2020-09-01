<?php

namespace App\Http\Controllers;

use App\Message;
use App\Thread;
use Illuminate\Http\Request;

class MessageController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $threads = Thread::with('messages.user_to')->where( 'user_one', auth()->id() )->where( 'deleted_by_user_one', 0 )
            ->orWhere(function ($query) {
            $query->where('user_two', auth()->id())->where('deleted_by_user_two', 0);
        })->get();
        
        return response()->json(['threads' => $threads]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $receiver_id)
    {
        $request->validate([
            'message' => 'required'
        ]);

        $thread = new Thread;

        $newThread = $thread->makeNewThread($receiver_id);

        $message = new Message;

        $message->user_id = auth()->id();
        $message->message = $request->input('message');
        $message->message_to = $receiver_id;
        $message->thread_id = $newThread->id;

        $message->save() ? $response = ['code' => 200] : $response = ['code' => 400];

        // if( $response['code'] == 200 )
        // {
        //     $user_to = User::findOrFail($message->message_to);

        //     $user_to->notify( new NewMessage( $message ) );
        // }

        // return view('message.newMessage', compact('message'));

        return response()->json(['result' => $response, 'newMessage' => $message]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show($thread_id)
    {
        $messages = Message::where('thread_id', $thread_id)->paginate(100);

        $thread = new Thread;

        $threadsLastMessages = $thread->threadsLastMessages();

        $message = new Message;

        $message_to = $message->messageUserTo($thread_id);

        return response()->json(['messages', 'page','message_to', 'threadsLastMessages' ]);

    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
