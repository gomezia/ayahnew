import Vue from 'vue'
import Router from 'vue-router'
import AdminContent from '@/components/back/AdminContent'
import AddArticle from '@/components/back/AddArticle'
import AddPage from '@/components/back/AddPage'
import Article from '@/components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Article
    },

    {
      path: '/admin/content',
      name: 'admin/content',
      component: AdminContent
    },

    {
      path: '/article/add',
      name: 'article/add',
      component: AddArticle
    },

    {
      path: '/page/add',
      name: 'page/add',
      component: AddPage
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
