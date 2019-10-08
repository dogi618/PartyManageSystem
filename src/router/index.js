import Vue from 'vue'
import Router from 'vue-router'
import routes from "./routes";

Vue.use(Router)


const router = new Router({
  routes,
  mode: 'history',
});

export default router;

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
