<template>
  <div class="hello">
    <h1>{{node.title}}</h1>
    <img :src="node.image.data">
    <p v-html="node.body"></p>

    
    <router-link :to="{name: 'Node'}" class="item">
      <p>Node</p>
    </router-link>
  </div>
</template>

<script>
import { nodeResource } from '../config/resources'

export default {
  name: 'hello',
  data () {
    return {
      node: '',
      getnode: nodeResource(this.$resource)
    }
  },
  methods: {
    getNode () {
      this.getnode.getFullNode({ _id: 'c5cc8af040bdffb4288de6a3fc000e85' })
      .then(success => {
        this.node = success.body
        console.log(this.node)
      })
      .then(error => { console.log(error) })
      .then(_ => { console.log('terminé') })
    }
  },

  mounted () {
    this.getNode()
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
