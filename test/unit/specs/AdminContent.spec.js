import Vue from 'vue'
import AdminContent from '@/components/back/AdminContent'

describe('AdminContent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AdminContent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .to.equal('Admin content')
  })
})
