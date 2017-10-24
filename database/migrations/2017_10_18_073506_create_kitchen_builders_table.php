<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKitchenBuildersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kitchen_builders', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email');
            $table->string('number');
            $table->integer('small_doors');
            $table->integer('large_doors');
            $table->integer('small_drawers');
            $table->integer('large_drawers');
            $table->string('meterage');
            $table->string('extractor_hoods');
            $table->string('corner_units');
            $table->string('status')->default('Recieved');
            $table->integer('quote');
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
        Schema::dropIfExists('kitchen_builders');
    }
}
