<template>
  <v-toolbar class="ayah-toolbar white elevation-0" light dense fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title><span :style="siteNameColor">{{siteName}}</span></v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link :to="{name: 'admin/content'}">
      <v-btn icon>
        <v-icon>dashboard</v-icon>
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
  import store from '../../../store/store'

  export default {
    data () {
      return {
      }
    },

    computed: {
      siteName: (_) => store.getters.getSettings.front.siteName,
      siteNameColor: (_) => {
        let style = {
          color: store.getters.getSettings.front.jumbotronBGColor
        }
        return style
      }
    },

    mounted () {
      store.dispatch('LoadSettings')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .ayah-toolbar .toolbar__content {
    border-bottom: solid 1px #E0E0E0;
  }
</style>
