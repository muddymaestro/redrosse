<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class SignUpController extends Controller
{
    public function __invoke( Request $request )
    {
        $this->validate($request, [
            'uname' =>  'required|string|max:15|unique:users',
            'email' =>  'required|email|max:150|unique:users',
            'fname'  =>  'required|string|min:3',
            'lname'  =>  'required|string|min:3',
            'phone'  =>  'string|min:8',
            'password'  =>  'required|string|min:6',
            'password_confirmation' =>  'required|same:password'
        ]);

        $user = new User;
        $user->name = $request->input('fname') . ' '.$request->input('lname');
        $user->uname = $request->input('uname');
        $user->email = $request->input('email');
        $user->phone = $request->input('phone');
        $user->password = Hash::make($request->input('password'));

        $user->save();
        
        if(auth()->attempt( $request->only( 'email', 'password' ) ) )
        {
            return response()->json(['success' => 'success']);
        }

        return response()->json(['message' => 'Opps! Server error, Try again later'], 500);
        
    }
}
