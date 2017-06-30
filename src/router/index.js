import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Node from '@/components/Node'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },

    {
      path: '/node',
      name: 'Node',
      component: Node
    }
  ]
})
