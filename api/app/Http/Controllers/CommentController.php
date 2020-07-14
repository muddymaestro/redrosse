<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Post;
use App\Comment;
use App\Wall;

class CommentController extends Controller
{
     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $postId)
    {
        $request->validate(['comment' => 'required']);

        $post = Post::find($postId);
        $comment = $post->addComment($request->input('comment'));
        $commentWithUser = Comment::with('user', 'likes')->where('id', $comment->id)->where('commentable_id', $postId)->first();

        return response()->json(['comment' => $commentWithUser, 'postId' => $post->id]);
    }

    public function wallPostComment(Request $request, $postId)
    {
        $request->validate(['comment' => 'required']);

        $post = Wall::find($postId);
        $comment = $post->addComment($request->input('comment'));
        $commentWithUser = Comment::with('user', 'likes')->where('id', $comment->id)->where('commentable_id', $postId)->first();

        return response()->json(['comment' => $commentWithUser, 'postId' => $post->id]);
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
