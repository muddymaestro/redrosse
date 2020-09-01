<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('partials.head')

<body>
    <div id="app">

        <v-app>
            <!-- @include('partials.nav') -->

            <div class="mt-12"></div>
            <v-row>
                <v-col class="mx-auto" cols="12" lg="9" md="9" sm="6">
                    <!-- @yield('content') -->
                </v-col>
            </v-row>
            
            @include('partials.footer')
        <v-app>

    </div>

    <!-- Scripts -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>

