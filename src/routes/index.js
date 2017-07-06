import Vue from 'vue'
import Router from 'vue-router'
import AdminContent from '@/components/back/AdminContent'
import AddArticle from '@/components/back/AddArticle'
import AddPage from '@/components/back/AddPage'
import EditPage from '@/components/back/EditPage'
import EditArticle from '@/components/back/EditArticle'
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
    },

    {
      path: '/page/:id/edit',
      name: 'page/edit',
      component: EditPage
    },

    {
      path: '/article/:id/edit',
      name: 'article/edit',
      component: EditArticle
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
