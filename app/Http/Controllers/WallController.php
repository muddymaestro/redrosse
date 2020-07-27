<?php

namespace App\Http\Controllers;

use App\Wall;
use Auth;
use Illuminate\Http\Request;

class WallController extends Controller
{
     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Wall::with(['userFrom', 'likes', 'comments.user', 'comments.likes'])->where('posted_on_user_id', auth()->user()->id)
            ->orderBy('created_at', 'DESC')->get();
            
        return response()->json(['posts' => $posts]);
    }

     /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $postedOnUserId)
    {
        $request->validate([
            'post' => 'required',
            'image' => 'nullable|image'  //formats: jpeg, png, bmp, gif, svg
        ]);

        $postedByUserId = Auth::user()->id;

        $post = new Wall();
        $post->posted_on_user_id = $postedOnUserId;
        $post->posted_by_user_id = $postedByUserId;
        $post->body = $request->post;

        if($request->file('image')) {
            
            $image = $request->file('image');
      
            //get just extension.
            $ext = $image->getClientOriginalExtension();
    
            //make a unique name
            $filename = uniqid(). '.' . $ext;
    
            //upload the image
            $image->storeAs('public/pics', $filename);
    
            //delete the previous image.
            //Storage::delete("public/pics/{$user->image}");
    
            $post->image = $filename;
    
        }
        
        $post->save();
        $data = Wall::with(['userFrom', 'likes', 'comments.user', 'comments.likes'])->find($post->id);
        
        return response()->json(['post' => $data]);
    }
}
