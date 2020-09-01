<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SignInController extends Controller
{
    public function __invoke( Request $request )
    {
        $messages = [
            'email.email'    => 'Invalid :attribute.',
            'email.required' => 'Your e-mail address is required!',
        ];

        $validator = Validator::make($request->all(), [ 'email' => 'required|email'], $messages );

        if ( $validator->fails() )  
        {
            return response()->json([ 'message' => $validator->errors() ], 401);            
        }
        
        if( !auth()->attempt( $request->only( 'email', 'password' ) ) ) 
        {
            return response()->json(['message'=>'Wrong Credentials'], 401);
        }
        
        return redirect('/home');
    }
}
