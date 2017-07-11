<template>
  <div>
    <v-navigation-drawer persistent v-model="drawer" dark enable-resize-watcher>
      <div class="logo-ayah">
        <img :src="logo.image" alt="ayah" class="img-responsive">
        <p>{{logo.text}}</p>
      </div>
      <v-divider></v-divider>

      <ul class="ayah-nav">
          <li v-for="item in items" :key="item">
              <router-link :to="item.to" class="item">
                <i class="material-icons">{{item.icon}}</i>
                <p>{{item.title}}</p>
              </router-link>
          </li>
      </ul>

    </v-navigation-drawer>

    <v-toolbar class="pink" fixed	light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer" class="ayah-drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link :to="{name: 'home'}" class="link-to-home ayah-nav">
          <i class="material-icons">home</i> <p>Back to home</p>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <main>
    </main>
  </div>
</template>

<script>
  import store from '@/store/store'

  export default {
    data () {
      return {
        drawer: true,
        left: null,
        items: [
          { title: 'Admin content', icon: 'edit', to: {name: 'admin/content'} },
          { title: 'Add page', icon: 'note_add', to: {name: 'page/add'} },
          { title: 'Add article', icon: 'note_add', to: {name: 'article/add'} },
          { title: 'Settings', icon: 'settings', to: {name: 'admin/settings'} }
        ]
      }
    },
    props: ['title'],
    computed: {
      logo () {
        return store.getters.getLogo
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .application .navigation-drawer {
    z-index: 1000;
  }

  .toolbar {
    box-shadow: none;
  }

  .logo-ayah {
    text-align: center;
    font-weight: bold;
  }

  .logo-ayah p {
      margin: 5px;
      margin: 0;
      font-size: 1.5em;
      padding-bottom: 5px;
  }
  .logo-ayah img {
    width: 80px;
  }

  .ayah-nav {
    margin-top: 10px;
    padding: 0;
    list-style: none;
  }

  .ayah-nav > li {
    position: relative;
    display: block;
    padding: 5px 12px;
  }

  .ayah-nav li > a {
    position: relative;
    display: block;
    padding: 5px 15px;
    margin: 0;
    color: #36495D;
    transition: all 300ms linear;
    text-decoration: none;
  }

  .ayah-nav li > a:hover {
    background: rgba(200, 200, 200, 0.2);
  }

  .ayah-nav li a.router-link-exact-active {
      background-color: #36495D;
      color: #FFFFFF;
  }

  .ayah-nav li > a i {
    color: #36495D;
  }

  .ayah-nav li > a.router-link-exact-active i {
    color: #FFFFFF;
  }

  .ayah-nav p {
    margin: 0;
    line-height: 30px;
    font-size: 14px;
  }

  .ayah-nav i {
    font-size: 24px;
    float: left;
    margin-right: 15px;
    line-height: 30px;
    width: 30px;
    text-align: center;
    color: #a9afbb;
  }
  .ayah-nav.link-to-home {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 14px;
  }

  .ayah-nav.link-to-home i{
    margin-right: 5px;
    color: #FFFFFF;
  }
  .ayah-nav.link-to-home:after{
    transition: .3s cubic-bezier(.25,.8,.25,1);
  }

  /* Dark theme */

  .application .theme--dark.navigation-drawer {
    background: #36495D;
    z-index: 1000;
  }

  .application .theme--dark.navigation-drawer .logo-ayah p {
    color: #FFFFFF;
  }

  .application .theme--dark.navigation-drawer .ayah-nav > li a,
  .application .theme--dark.navigation-drawer .ayah-nav > li a i,
  .application .theme--dark.navigation-drawer .ayah-nav li > a:hover i {
    color: #FFFFFF;
  }

  .application .theme--dark.navigation-drawer .ayah-nav li > a i {
    color: #36495D;
  }

  .application .theme--dark.navigation-drawer .ayah-nav li > a.router-link-exact-active {
    background: #E91E63;
  }

  .application .theme--dark.navigation-drawer .ayah-nav li > a.router-link-exact-active i {
    color: #FFFFFF;
  }
  .application .theme--dark.navigation-drawer .divider {
    background: rgba(251, 246, 246, 0.3);
  }

</style>
