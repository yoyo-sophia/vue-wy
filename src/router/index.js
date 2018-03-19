import Vue from 'vue'
import Router from 'vue-router'
import wyHot from '@/components/hot/hot'
import wySearch from '@/components/search/search'
import wyRecommend from '@/components/recommend/recommend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:wyRecommend
    },{
      path: '/wyHot',
      name: 'wyHot',
      component: wyHot
    },{
      path: '/wySearch',
      name: 'wySearch',
      component: wySearch
    },{
      path: '/wyRecommend',
      name: 'wyRecommend',
      component: wyRecommend
    }
  ]
})
