import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "../components/main_page"
import easyVersion from "../components/versions/easy_version"
import mediumVersion from "../components/versions/medium_version"
import hardVersion from "../components/versions/hard_version"

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/easy",
    name: "easyVersion",
    component: easyVersion
  },
  {
    path: "/medium",
    name: "mediumVersion",
    component: mediumVersion
  },
  {
    path: "/hard",
    name: "hardVersion",
    component: hardVersion
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
