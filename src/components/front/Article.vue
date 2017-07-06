<template>
  <v-app class="front-container">
      <v-toolbar class="white" light dense>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Startup inspiration</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
    <main>
      <div class="jumbotron">
        <v-container>
          <h1>{{node.title}}</h1>
        </v-container>
      </div>
      <v-container>
        <img :src="node.image.data">
        <p>{{node.image.size}}</p>
        <p v-html="node.body"></p>

      </v-container>
    </main>
    <v-footer class="indigo">
      <span>© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import resource from '../../config/axios'

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
      },
      loading: false
    }
  },
  components: {
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
  },
  computed: {
    nodeImage () {
      return this.node.image.value || ''
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .jumbotron {
    background-color: #F6B33D;
  }
  h1 {
    font-size: 3.5em;
    font-weight: bold;
    background-color: white;
    padding: 8px;
  }
</style>
