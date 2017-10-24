<?php

namespace App\Traits;

use Carbon\Carbon;
use Auth;


trait Quotable
{
    public function quotebuilder($doors, $drawers, $meterage, $extras)
    {
        $doorPrice     = "25";
        $drawerPrice   = "15";
        $meteragePrice = "10";
        $extractor     = "40";
        $cornerUnit    = "20";

        $totalDoors    = $doorPrice*$doors;
        $totalDrawers  = $drawerPrice*$drawers;
        $totalMeterage = $meteragePrice*$meterage;

        $extrasTotal = 0;
        foreach($extras as $extra){
            if($extra == "extractor"){
                $cost = $extractor;
                $extrasTotal+= $cost;
            }
            elseif($extra == "corner unit"){
                $cost = $cornerUnit;
                $extrasTotal+= $cost;
            }
        }

        $total = $totalDoors+$totalDrawers+$totalMeterage+$extrasTotal;

        return $total;
    }
}
