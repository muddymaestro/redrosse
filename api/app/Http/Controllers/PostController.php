<?php

namespace App\Http\Controllers;

use App\Post;
use Auth;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'post' => 'required',
            'image' => 'nullable|image'  //formats: jpeg, png, bmp, gif, svg
        ]);

        $userId = Auth::user()->id;

        $post = new Post();
        $post->user_id = $userId;
        $post->body = $request->post;

        if($request->has('image')) {
            
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
        $data = Post::with('user')->find($post->id);
        
        return response()->json(['post' => $data]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Post $post)
    {
        //
    }
}
