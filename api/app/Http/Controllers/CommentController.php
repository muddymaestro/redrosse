<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Post;
use App\Comment;

class CommentController extends Controller
{
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $post_id)
    {
        $request->validate(['data.comment' => 'required']);

        $post = Post::find($post_id);
        $comment = $post->addComment($request->input('data.comment'));

        // if(Auth::user()->id !== $post->user->id)
        // {
        //     $post->user->notify(new Comments($comment));
        // }

        return response()->json(['comment' => $comment, 'username' => $comment->user->name]);
    }

    public function reply(Request $request, $comment_id)
    {
        $request->validate(['data.reply' => 'required']);

        $comment = Comment::find($comment_id);
        $reply = $comment->addComment($request->input('data.reply'));

        return response()->json(['reply' => $reply, 'username' => $reply->user->name]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
