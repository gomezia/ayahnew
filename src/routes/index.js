import Vue from 'vue'
import Router from 'vue-router'

// Back
import AdminContent from '@/components/back/AdminContent'
import AddArticle from '@/components/back/AddArticle'
import AddPage from '@/components/back/AddPage'
import EditPage from '@/components/back/EditPage'
import EditArticle from '@/components/back/EditArticle'
import Settings from '@/components/back/Settings'
import Article from '@/components/front/Article'

// Front
import Blog from '@/components/front/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Blog
    },

    {
      path: '/admin/content',
      name: 'admin/content',
      component: AdminContent
    },

    {
      path: '/admin/settings',
      name: 'admin/settings',
      component: Settings
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
    },

    {
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ],
  linkActiveClass: 'active',
  mode: 'history'
})
