<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateHomePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('home_pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('sub_header');
            $table->text('about');
            $table->string('about_image');
            $table->string('services_header');
            $table->string('services_sub_header');
            $table->string('kitchen_header');
            $table->string('kitchen_sub_header');
            $table->string('kitchen_image');
            $table->string('kitchen_process_header_1');
            $table->string('kitchen_process_description_1');
            $table->string('kitchen_process_icon_1');
            $table->string('kitchen_process_header_2');
            $table->string('kitchen_process_description_2');
            $table->string('kitchen_process_icon_2');
            $table->string('kitchen_process_header_3');
            $table->string('kitchen_process_description_3');
            $table->string('kitchen_process_icon_3');
            $table->string('kitchen_process_header_4');
            $table->string('kitchen_process_description_4');
            $table->string('kitchen_process_icon_4');
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
        Schema::dropIfExists('home_pages');
    }
}
