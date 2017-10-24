<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $message;
    public $email;
    public $number;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $message, $email, $number)
    {
        $this->name    = $name;
        $this->message = $message;
        $this->email   = $email;
        $this->number  = $number;


    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('enquiries@restorers.org.uk', 'Gallant Restorations')
            ->subject('New Enquiry')
            ->markdown('emails.contact.query');
    }
}
