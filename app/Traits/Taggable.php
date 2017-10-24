<?php

namespace App\Traits;

use Carbon\Carbon;
use Auth;
use App\Tag;
use App\Post;

trait Taggable
{

    public function tagExploder($tagstring, $model)
    {
        $tagArray = explode(',', $tagstring);

        foreach($tagArray as $tag)
        {
            $check = Tag::where('name', $tag)->first();
            if ($check === null) {
                Tag::create([
                    'name'  => $tag,
                    'count' => "1",
                ]);
            }
            else {
                Tag::where('name', $tag)->increment('count');
            }
            $id = Tag::where('name', $tag)->pluck('id')->first();
            $model->tags()->attach($id);
        }

        return $tagArray;
    }

    public function ingredientExploder($ingredientstring, $recipe)
    {
        $ingredientArray = explode(',', $ingredientstring);

        foreach($ingredientArray as $ingredient)
        {
            $check = Tag::where('name', $ingredient)->first();
            if ($check === null) {
                Ingredient::create([
                    'name'  => $ingredient,
                    'count' => "1",
                ]);
            }
            else {
                Ingredient::where('name', $ingredient)->increment('count');
            }
            $id = Ingredient::where('name', $ingredient)->pluck('id')->first();
            $recipe->ingredients()->attach($id);
        }

        return $ingredientArray;
    }


}