import Vue from "vue"
import VueRouter from "vue-router"
import PageHome from "@/pages/PageHome.vue"
import store from "@/store"
import middlewarePipeline from "@/router/middlewarePipeline"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,

    // meta: {
    //   middleware: [auth],
    // },
  },

  // {
  //   path: "/about",
  //   name: "PageAbout",
  //   component: () =>
  //     import(/* webpackChunkName: "PageAbout" */ "@/pages/PageAbout.vue"),
  //
  //   meta: {
  //     middleware: [auth],
  //   },
  // },

  // {
  //   path: "*",
  //   redirect: {
  //     name: "PageError",
  //     params: { error: new Error("page not found") },
  //   },
  // },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store,
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router
