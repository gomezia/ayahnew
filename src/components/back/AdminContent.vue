<template>
  <v-app>
    <Navigation title="Admin"></Navigation>
    <main class="admin-container">
      <v-container fluid>

        <div class="subheader">
          <h1>Admin content</h1>
        </div>

        <p>text</p>
      </v-container>
    </main>
    <v-footer class="indigo admin-container">
      <span>© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Navigation from './layout/Navigation'

  export default {
    data () {
      return {
      }
    },

    components: {
      Navigation
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
