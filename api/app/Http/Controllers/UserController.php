<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //private $filename;

    public function index()
    {
        $users = User::with('followers', 'followings')->get();
        return response()->json(['users' => $users]);
    }

    public function follow($userId)
    {
        $user = User::find($userId);

        if(auth()->user()->isFollowing($user)) {
            return response()->json(['message' => 'You are already following this user']);
        }

        auth()->user()->follow($user);

        return response()->json(['following' => auth()->user()]);        
    }

    public function following()
    {
        $following = auth()->user()->followings()->get();
        return response()->json(['following' => $following]);        
    }

    public function followers()
    {
        $followers = auth()->user()->followers()->get();
        return response()->json(['followers' => $followers]);        
    }

    public function unfollow($userId)
    {
        $user = User::find($userId);

        if(!$user->isFollowedBy(auth()->user())) {
            return response()->json(['message' => 'You are not following this user']);
        }

        $unfollowed = auth()->user()->followings()->where('following_id', $userId)->first();
        auth()->user()->unfollow($user);

        return response()->json(['unfollowed' => $unfollowed]);        
    }

    public function updateProfile(Request $request)
    {
        $user = User::find(auth()->user()->id)->first();
        $user->update($request->all());
        
        return response()->json(['user' => $user]);
    
    }

    public function updateProfilePicture(Request $request)
    {
        $request->validate([
            'image' => 'image'  //formats: jpeg, png, bmp, gif, svg
        ]);

        $user = User::find(auth()->user()->id)->first();

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
    
            $user->dp = $filename;
        }

        $user->save();
        
        return response()->json(['user' => $user]);
    
    }

    public function updateCoverPicture(Request $request)
    {
        $request->validate([
            'image' => 'image'  //formats: jpeg, png, bmp, gif, svg
        ]);

        $user = User::find(auth()->user()->id)->first();

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
    
            $user->cover = $filename;
        }

        $user->save();
        
        return response()->json(['user' => $user]);
    
    }
}
