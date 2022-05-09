<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

       
    </head>
    <body>
        <app-root></app-root>
        <script src="runtime.js" src="{{ asset('js/runtime.js')}}" ></script>
        <script src="polyfills.js" src="{{ asset('js/runtime.js')}}" ></script>
        <script src="vendor.js" src="{{ asset('js/runtime.js')}}"></script>
        <script src="main.js" src="{{ asset('js/runtime.js')}}" ></script>
        <p>teste<p>
    </body>
</html>
