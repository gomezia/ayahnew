<template>
  <v-toolbar class="white" light fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>{{siteName}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link :to="{name: 'admin/content'}">
      <v-btn icon>
        <v-icon>dashboard</v-icon>
      </v-btn>
    </router-link>
    <v-btn icon>
      <v-icon>favorite</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
  import store from '@/store/store'

  export default {
    data () {
      return {
      }
    },

    computed: {
      siteName: (_) => store.getters.geSettings.front.siteName
    },

    mounted () {
      store.dispatch('LoadSettings')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
