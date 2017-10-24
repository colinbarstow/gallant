<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RespondEnquiry extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $message;
    public $original_message;
    public $sent;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $message, $original_message, $sent)
    {
        $this->name = $name;
        $this->message = $message;
        $this->original_message = $original_message;
        $this->sent = $sent;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('enquiries@restorers.org.uk', 'Gallant Restorations')
            ->subject('Regarding your enquiry')
            ->markdown('emails.contact.respond');
    }
}
