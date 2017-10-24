@component('mail::message')
# Hello {{$name}},
<p>We have received a quote from you in regards to having your kitchen sprayed.</p>
<br>
<p>We received the following details:</p>
<ul>
    <li>Small Doors: {{$small_doors}}</li>
    <li>Large Doors: {{$large_doors}}</li>
    <li>Small Drawers: {{$small_drawers}}</li>
    <li>Large Drawers: {{$large_drawers}}</li>
    <li>Meterage: {{$meterage}}</li>
    <li>Corner Units: {{$corner_units}}</li>
    <li>Extractor Hood: {{$extractor_hood}}</li>
</ul>

<p>
    We will be in contact very soon, with any further questions we have and to discuss colour and sheen options.
</p>


Thanks,<br>
{{ config('app.name') }}
@endcomponent
