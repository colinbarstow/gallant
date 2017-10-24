@component('mail::message')
# New Enquiry
You have received a new message from {{ $name }}<br>
<p>{{ $message }}</p><br>
Contact email: {{$email}}<br>
Contact number: {{$number}}<br>
<h2>View Enquiry in Admin area</h2>

@component('mail::button', ['url' => 'http://restorers.org.uk/adminarea/enquiries'])
    View Here
@endcomponent


Thanks,<br>
{{ config('app.name') }}
@endcomponent
