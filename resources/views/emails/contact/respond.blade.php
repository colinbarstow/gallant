@component('mail::message')
# Hello {{$name}}

{{ $message }}<br>
<hr>
We received the following enquiry from you on {{$sent}}.<br>
<blockquote>"<small>{{ $original_message }}</small>"</blockquote>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
