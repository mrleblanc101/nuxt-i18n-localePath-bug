import Vue from "vue";
import Router from "vue-router";

import Home from "~/pages/index";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        name: "home___fr",
        path: "/",
        component: Home
      },
      {
        name: "home___en",
        path: "/",
        component: Home
      },
      {
        name: "bus___en",
        path: "/bus/:stop?",
        component: Home,
        props: true
      },
      {
        name: "bus___fr",
        path: "/bus/:stop?",
        component: Home,
        props: true
      },
      {
        name: "train___en",
        path: "/train/:stop?",
        component: Home,
        props: true
      },
      {
        name: "train___fr",
        path: "/train/:stop?",
        component: Home,
        props: true
      }
    ]
  });
}
