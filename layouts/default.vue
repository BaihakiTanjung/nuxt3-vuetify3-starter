<template>
    <v-app>
        <v-navigation-drawer color="primary" v-model="drawer">

            <v-sheet color="primary" class="px-10 py-5">
                <h1 class="text-center">Starter Vuetify</h1>

                
            </v-sheet>

            <v-divider></v-divider>

            <v-list>

                <v-list-item v-for="sidebar in sidebars" :key="sidebar.icon" :prepend-icon="sidebar.icon"
                    :title="sidebar.text" :to="sidebar.to"></v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

            <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon v-bind="props">
                        <v-avatar>
                            <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>John Keyer</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

        </v-app-bar>

        <v-main class="ma-6">
            <slot />
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(true)

const sidebars = [
    {
        icon: 'mdi-inbox-arrow-down',
        text: 'Dashboard',
        to: '/'
    },
    {
        icon: 'mdi-send',
        text: 'About',
        to: '/about'
    },
    {
        icon: 'mdi-alert-octagon',
        text: 'Testing',
        to: '/testing'
    },
]

const breadcrumbs = ['Foo', 'Bar', 'Fizz']

const items = [
    { title: 'Settings' },
    { title: 'Profile' },
    { title: 'Logout' },
]

</script>
