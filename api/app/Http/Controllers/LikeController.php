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

        $like = Like::where('likeable_id', $post->id);

        return response()->json(['postLike' => $like, 'postId' => $post->id]);
    }

    public function unlikePost($postId)
    {
        $likeId = Like::select('id')->where('user_id', Auth::user()->id)
            ->where('likeable_id', $postId)
            ->first();

        $id = $likeId;
        $likeId->delete();
        
        return response()->json(['likeId' => $id, 'postId' => $postId]);
    }

    public function likeComment($id)
    {
        $comment = Comment::find($id);
        $comment->like();

        return true;
    }
}
