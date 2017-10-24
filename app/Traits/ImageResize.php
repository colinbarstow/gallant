<?php

namespace App\Traits;

use Auth;
use Intervention\Image\ImageManagerStatic as Image;

trait ImageResize
{
    public function resizeTestimonial($original_image)
    {
        $image = $original_image;
        $new_image_name = $image->getClientOriginalName();
        $destinationPath = public_path('/frontend/images/testimonials/');
        $img = Image::make($image->getRealPath());
        $img->resize(848, 470, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$new_image_name);

        return $new_image_name;
    }

    public function resizePost($original_image)
    {
        $image = $original_image;
        $new_image_name = $image->getClientOriginalName();
        $destinationPath = public_path('/frontend/images/posts/');
        $img = Image::make($image->getRealPath());
        $img->resize(848, 470)->save($destinationPath.'/'.$new_image_name);

        return $new_image_name;
    }

    public function resizeService($original_image)
    {
        $image = $original_image;
        $new_image_name = $image->getClientOriginalName();
        $destinationPath = public_path('/frontend/images/services/');
        $img = Image::make($image->getRealPath());
        $img->resize(848, 470, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$new_image_name);

        return $new_image_name;
    }

    public function resizeProject($original_image)
    {
        $image = $original_image;
        $new_image_name = $image->getClientOriginalName();
        $destinationPath = public_path('/frontend/images/projects/');
        $img = Image::make($image->getRealPath());
        $img->resize(991, 650)->save($destinationPath.'/'.$new_image_name);

        return $new_image_name;
    }

    public function resizeKitchen($original_image)
    {
        $image = $original_image;
        $new_image_name = $image->getClientOriginalName();
        $destinationPath = public_path('/frontend/images/kitchens/');
        $img = Image::make($image->getRealPath());
        $img->resize(875, 583, function ($constraint) {
            $constraint->aspectRatio();
        })->save($destinationPath.'/'.$new_image_name);
        return $new_image_name;
    }





}
