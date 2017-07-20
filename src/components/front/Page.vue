<template>
  <v-app class="front-container">
    <Toolbar></Toolbar>
    <main>
<!--       <div class="jumbotron" :style="headerStyle">
        <v-container>
          <h1 :style="headerTextStyle">{{node.title}}</h1>
        </v-container>
      </div> -->
      <v-container>
        <h1 class="h1-page">{{node.title}}</h1>
      </v-container>
      <v-container>
        <p> 
          <span class="text-time">{{node.created | moment("dddd, MMMM Do YYYY") }}</span>
        </p>
        <p v-html="node.body"></p>
      </v-container>
    </main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import store from '../../store/store'
import resource from '../../config/axios'
import Toolbar from './layout/Toolbar'
import Footer from './layout/Footer'

export default {
  name: 'Page',
  data () {
    return {
      node: {}
    }
  },
  components: {
    Toolbar, Footer
  },
  methods: {
    getNode () {
      let url = `/node/${this.$route.params.id}`
      resource.get(url)
        .then(response => {
          this.node = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },

  mounted () {
    this.getNode()
    store.dispatch('LoadSettings')
  },
  computed: {
    headerStyle: (_) => store.getters.getSettings.front.header,
    headerTextStyle: (_) => store.getters.getSettings.front.headerText

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .h1-page {
    padding: 0 2em;
    text-align: center;
    line-height: 1.3em;
  }
</style>
