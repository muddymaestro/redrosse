<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('uname');
            $table->string('name')->nullable();
            $table->text('home_town')->nullable();
            $table->text('current_city')->nullable();
            $table->string('phone')->nullable();
            $table->boolean('phone_hide')->default(0);
            $table->boolean('gender')->nullable();
            $table->string('dob')->nullable();
            $table->text('bio')->nullable();
            $table->boolean('dob_hide')->nullable();
            $table->string('dp')->default('default.gif');
            $table->string('cover')->default('cover.jpg');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
