<!doctype html>
<html>
<head>
    @include('includes.head')
<!-- bower:css -->
<!-- endbower -->
</head>
<body>
<div class="container-fluid fill">

    <header class="row">
        @include('includes.header')
    </header>

    <div class="row fill">
        @yield('content')
    </div>

    <footer class="row">
        @include('includes.footer')
    </footer>
</div>
<script src="{{ elixir('scripts/main.js') }}"></script>
<script src="vendor/circliful/js/jquery.circliful.min.js"></script>
<script src="vendor/stellar/jquery.stellar.min.js"></script>
</body>
</html>