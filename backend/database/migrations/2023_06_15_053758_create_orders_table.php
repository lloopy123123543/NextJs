<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('stvorka1') -> constrained('stvorks');
            $table->foreignId('stvorka2') -> constrained('stvorks');
            $table->foreignId('stvorka3') -> constrained('stvorks');
            $table->integer('height');
            $table->integer('weight');
            $table->foreignId('steklopacket') -> constrained('steklopackets');
            $table->string('callback');
            $table->integer('cost');
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
        Schema::dropIfExists('orders');
    }
};
