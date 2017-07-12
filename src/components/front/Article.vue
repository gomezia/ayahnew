<template>
  <v-app class="front-container">
    <Toolbar></Toolbar>
    <main>
      <div class="jumbotron" :style="headerStyle">
        <v-container>
          <h1 :style="headerTextStyle">{{node.title}}</h1>
        </v-container>
      </div>
      <v-container>
        <img :src="node.image.value" title="">
        <v-divider></v-divider>
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
import store from '@/store/store'
import resource from '../../config/axios'
import Toolbar from '@/components/front/layout/Toolbar'
import Footer from '@/components/front/layout/Footer'

export default {
  name: 'Article',
  data () {
    return {
      node: {
        image: {
          name: '',
          value: '',
          size: ''
        }
      }
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
    nodeImage () {
      return this.node.image.value || ''
    },

    headerStyle: (_) => store.getters.getSettings.front.header,
    headerTextStyle: (_) => store.getters.getSettings.front.headerText

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron {
    /*background-color: #F6B33D;
    padding: 2em 0;*/
  }
  h1 {
    font-size: 3.5em;
    font-weight: bold;
    background-color: white;
    padding: 8px;
  }
</style>
