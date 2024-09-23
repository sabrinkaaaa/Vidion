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
        Schema::create('Applications', function (Blueprint $table) {
            $table->id('ID_Application')->primary()->autoIncrement();
            $table->string('Name');
            $table->text('Describe');
            $table->decimal('Price');
            $table->boolean('Auction');
            $table->text('Tags');
            $table->text('Anonymous');
            $table->boolean('Active');
            $table->id('ID_User')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Applications');
    }
};
