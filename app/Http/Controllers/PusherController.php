<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PusherController extends Controller
{
     /**
     * Authenticates logged-in user in the Pusher JS app
     * For presence channels
     */
    public function pusherAuth()
    {

        $user = auth()->user();

        if ($user) {
            $pusher = new Pusher('auth-key', 'secret', 'app_id');
            $auth= $pusher->socket_auth(Input::get('channel_name'), Input::get('socket_id'));
            $callback = str_replace('\\', '', $_GET['callback']);
            header('Content-Type: application/json');
            echo($callback . '(' . $auth . ');');
            return;
        }else {
            header('', true, 403);
            echo "Forbidden";
            return;
        }
    }
}
