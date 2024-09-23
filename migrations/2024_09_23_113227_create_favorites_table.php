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
        Schema::create('Fabvorites', function (Blueprint $table) {
            $table->id('ID_Favorites')->primary()->autoIncrement();
            $table->id('ID_User')->unique();
            $table->id('ID_Content')->unique()->nullable();
            $table->id('ID_Application')->unique()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Fabvorites');
    }
};
