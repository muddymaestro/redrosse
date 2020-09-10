@extends('layouts.app')

@section('content')
    <v-container>
        <v-row>
            <v-col cols="12" md="8" lg="8" sm="12">
                <v-card class="pa-2 indigo lighten-5" outlined tile>
                    <slider />
                </v-card>
            </v-col>
            <v-col cols="12" md="4" lg="4" sm="12">
                <sign-in-form />
            </v-col>
        </v-row>
    </v-container>
@endsection

