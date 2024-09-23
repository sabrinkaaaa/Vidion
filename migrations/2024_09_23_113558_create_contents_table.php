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
        Schema::create('Contents', function (Blueprint $table) {
            $table->id('ID_Content')->primary()->autoIncrement();
            $table->string('Name');
            $table->text('Describe');
            $table->decimal('Price');
            $table->boolean('Auction');
            $table->text('Tags');
            $table->text('Links');
            $table->id('ID_Preview')->unique();
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
        Schema::dropIfExists('Contents');
    }
};
