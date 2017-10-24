<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewQuote extends Mailable
{
    use Queueable, SerializesModels;

        public $name;
        public $small_doors;
        public $large_doors;
        public $small_drawers;
        public $large_drawers;
        public $meterage;
        public $corner_units;
        public $extractor_hood;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $small_doors, $large_doors, $small_drawers, $large_drawers, $meterage, $corner_units, $extractor_hood)
    {
        $this->name = $name;
        $this->small_doors = $small_doors;
        $this->large_doors = $large_doors;
        $this->small_drawers = $small_drawers;
        $this->large_drawers = $large_drawers;
        $this->meterage = $meterage;
        $this->corner_units = $corner_units;
        $this->extractor_hood = $extractor_hood;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('noreply@restorers.org.uk', 'Gallant Restorations')
            ->subject('We received your quote')
            ->markdown('emails.quotes.new');
    }
}
