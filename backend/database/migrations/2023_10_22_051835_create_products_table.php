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
        Schema::create('products', function (Blueprint $table) {
            $table->id('id');
            $table->string('name');
            $table->string('url');
            $table->string('image')->nullable();
            $table->string('business_user')->nullable();
            $table->string('status')->nullable();
            $table->string('login_app')->nullable();
            $table->string('platform')->nullable();
            $table->string('frontend')->nullable();
            $table->string('backend')->nullable();
            $table->string('category')->nullable();
			$table->string('group')->nullable();
			$table->string('turunan')->nullable();
            $table->string('description')->nullable();
            $table->string('db_dev')->nullable();
            $table->string('db_prod')->nullable();
            $table->string('server_dev')->nullable();
            $table->string('environment')->nullable();
            $table->text('user_login')->nullable();
            $table->text('notes')->nullable();
            $table->unsignedBigInteger('pic_id');
            $table->foreign('pic_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
