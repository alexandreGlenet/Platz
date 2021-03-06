<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Platz - Free Grid Wordpress Theme</title>

    <!-- Behavioral Meta Data -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="icon" type="image/png" href="img/small-logo-01.png">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,900,900italic,700italic,700,500italic,400italic,500,300italic,300' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/style.css') }}" />
</head>

<body>
    {{-- @include('template.partials._headerTemplate') --}}
    <div id="app">
        <header-component></header-component>
        <div id="wrapper-container">

            <div class="container object">

                <div id="main-container-image">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <footer-component></footer-component>

    </div>

    <script src="{{ asset('js/app.js')}}"></script>
    @include('template.partials._scriptTemplate')

</body>

</html>
