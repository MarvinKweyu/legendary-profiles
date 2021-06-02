import Vue from "vue";
import VueRouter from "vue-router";
const UserView = () => import('@/views/UserView')

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: UserView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
