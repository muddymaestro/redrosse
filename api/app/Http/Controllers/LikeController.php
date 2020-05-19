<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Like;
use App\Post;
use App\Comment;
use Auth;

class LikeController extends Controller
{
    public function likePost($id)
    {
        $post = Post::find($id);
        $post->like();

        Session::flash('success', 'You liked this post');

        // if(Auth::user()->id !== $post->user->id)
        // {
        //     $post->user->notify(new Likes($post));
        // }

        return response()->json(['post_like' => $post->likes]);
    }

    public function unlikePost($post_id)
    {
        $like = Like::select('id')->where('user_id', Auth::user()->id)
            ->where('likeable_id', $post_id)
            ->first();
        $like->delete();
        
        return response()->json(['post_unlike' => $like]);
    }

    public function likeComment($id)
    {
        $comment = Comment::find($id);
        $comment->like();

        return true;
    }
}
