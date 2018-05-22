import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/page/Home';
import Introduce from '@/page/Introduce';
import Recruit from '@/page/Recruit';
import Camera from '@/page/Camera';
import Classroom from '@/page/Classroom';
import Estate from '@/page/Estate';
import Tourism from '@/page/Tourism';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: Introduce
    },
    {
      path: '/recruit',
      name: 'recruit',
      component: Recruit
    },
    {
      path: '/camera',
      name: 'camera',
      component: Camera
    },
    {
      path: '/classroom',
      name: 'classroom',
      component: Classroom
    },
    {
      path: '/estate',
      name: 'estate',
      component: Estate
    },
    {
      path: '/tourism',
      name: 'tourism',
      component: Tourism
    },
  ]
})
