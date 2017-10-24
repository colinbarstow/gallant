<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('category_id');
            $table->integer('location');
            $table->string('title');
            $table->string('sub_title');
            $table->string('slug');
            $table->string('image');
            $table->string('image_2');
            $table->string('image_3');
            $table->text('description');
            $table->string('client');
            $table->timestamps();
        });
        Schema::create('project_tag', function (Blueprint $table) {
            $table->integer('project_id');
            $table->integer('tag_id');
            $table->primary(['project_id', 'tag_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
        Schema::dropIfExists('project_tag');
    }
}
