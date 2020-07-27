<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\LikeEvent;
use App\Like;
use App\Post;
use App\Comment;
use App\Wall;
use Auth;

class LikeController extends Controller
{
    public function likePost($postId)
    {     
        $isPostLiked = Like::where('likeable_id', $postId)->where('user_id', Auth::user()->id)->first();

        if($isPostLiked) {
            return response()->json(['message' => 'You have already liked this post']);
        }

        $post = Post::find($postId);
        $post->like();

        $postLike = Like::where('likeable_id', $post->id)->where('user_id', Auth::user()->id)->first();

        event(new LikeEvent($postLike));

        return response()->json(['postLike' => $postLike, 'postId' => $post->id]);
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

    public function likeWallPost($postId)
    {
        $post = Wall::find($postId);
        $post->like();

        $postLike = Like::where('likeable_id', $post->id)->where('user_id', Auth::user()->id)->first();

        return response()->json(['postLike' => $postLike, 'postId' => $post->id]);
    }

    public function unlikeWallPost($postId)
    {
        $likeId = Like::select('id')->where('user_id', Auth::user()->id)
            ->where('likeable_id', $postId)
            ->first();

        $id = $likeId;
        $likeId->delete();
        
        return response()->json(['likeId' => $id, 'postId' => $postId]);
    }

    public function likeComment($commentId)
    {
        $comment = Comment::find($commentId);
        $comment->like();

        $commentLike = Like::where('likeable_id', $commentId)->where('user_id', Auth::user()->id)->first();

        return response()->json(['commentLike' => $commentLike]);
    }

    public function unlikeComment($commentId)
    {
        $likeId = Like::select('id')->where('user_id', Auth::user()->id)
            ->where('likeable_id', $commentId)
            ->first();

        $id = $likeId;
        $likeId->delete();
        
        return response()->json(['likeId' => $id]);
    }
}
