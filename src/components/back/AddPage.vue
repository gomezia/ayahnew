<template>
  <v-app>
    <Navigation title="Add page"></Navigation>
    <main class="admin-container">
      <v-container fluid>
        <div class="subheader">
          <h1>Add page</h1>
          <!-- set progressbar -->
          <vue-progress-bar></vue-progress-bar>
        </div>

        test
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
  },

  methods: {
    start () {
      this.$Progress.start()
    },
    set (num) {
      this.$Progress.set(num)
    },
    increase (num) {
      this.$Progress.increase(num)
    },
    decrease (num) {
      this.$Progress.decrease(num)
    },
    finish () {
      this.$Progress.finish()
    },
    fail () {
      this.$Progress.fail()
    },
    test () {
      console.log('coucocu')
      this.$Progress.start()
    },
    mounted () {
      this.test()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
