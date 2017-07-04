<template>
  <v-app>
    <Navigation title="Add article" :logo="logo"></Navigation>
    <main class="admin-container">
      <v-container fluid>

        <h1>{{node.title}}</h1>
        <img :src="nodeImage">
        <p>{{node.image.size}}</p>
        <p v-html="node.body"></p>

      </v-container>
    </main>
    <v-footer class="indigo admin-container">
      <span>© 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import resource from '../config/axios'
import Navigation from './back/layout/Navigation'

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
    Navigation
  },
  methods: {
    getNode () {
      resource.get('/node/c8ff6a1916bd4c544d1a23896c0073ed')
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
