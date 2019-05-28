<template>
  <v-app>
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
      <v-list>
        <v-list-tile
                v-for="link of links"
                :key="link.title"
                :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="link.title"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <v-toolbar-side-icon
              @click="drawer = !drawer"
              class="hidden-md-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Пример сайта</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
                :key="link.title"
                :to="link.url"
                flat
                v-for="link of links"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view class="view"></router-view>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        drawer: false,
        links: [
          { title: 'Главная', icon: 'home', url: '/' },
          { title: 'Вход', icon: 'lock', url: '/login' },
          { title: 'Регистрация', icon: 'face', url: '/registration' },
          { title: 'Пользователи', icon: 'list', url: '/users' },
        ],
      };
    },
  };
</script>

