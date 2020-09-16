@extends('layouts.app')

@section('content')
<v-container>
    <v-row>
        <v-col cols="12" lg="8" md="6" sm="4">
        <v-content>
            <div>
                <post-form />
            </div>

            <h5>News Feed</h5>
            <div>
                <post-card />
            </div>
        </v-content>
        </v-col>

        <v-col cols="12" md="4">
        <v-content>
            <following />
        </v-content>
        </v-col>
    </v-row>    
</v-container>
@endsection

