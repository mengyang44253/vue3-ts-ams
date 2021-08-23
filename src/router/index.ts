import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import localCache from '@/utils/cache'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/login",
    name:'login',
    component: () => import("../views/login/index.vue"),
  },
  {
    path:'/home',
    name:'home',
    component: () => import("../views/home/index.vue")
  },
  {
    path:'/:pathMatch(.*)*',
    name:'not-found',
    component: () => import("../views/notFound/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) =>{
  // if(to.path!== '/login'){
  //   const token=localCache.getCache('token')
  //   if(!token){
  //     return '/login'
  //   }
  // }
})

export default router;
