<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('Profile', function (Blueprint $table) {
            $table->id('ID_User')->primary()->autoIncrement();
            $table->string('Mail')->nullable();
            $table->string('password');
            $table->boolean('User_agreement');
            $table->string('Name');
            $table->string('Surname');
            $table->string('User_name');
            $table->integer('Telephone');
            $table->id('ID_avatar')->unique();
            $table->decimal('Balance');
            $table->integer('Transactions');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Profile');
    }
};
