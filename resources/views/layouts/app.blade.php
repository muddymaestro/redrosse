<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

@include('partials.head')

<body>
    <v-app id="app">
        <header>
            @include('partials.nav')
        </header>

        <div class="mt-12"></div>
        <v-row>
            <v-col class="mx-auto" cols="12" lg="9" md="9" sm="6">
                <article>
                    @yield('content')
                </article>
            </v-col>
        </v-row>
        
        <footer>
            @include('partials.footer')
        </footer>
    </v-app>

    <!-- Scripts -->
    <script type="application/javascript" src="{{ mix('js/app.js') }}"></script>
</body>
</html>


