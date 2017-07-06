<template>
  <v-app class="front-container">
    <div class="jumbotron">
      <v-container>
        Hello Blog
      </v-container>
    </div>
    <main>
      <v-container>
        Title
      </v-container>
    </main>
    <v-footer class="indigo">
        <span>© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
// import resource from '../config/axios'

export default {
  name: 'Blog',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.front-container {
}
</style>
