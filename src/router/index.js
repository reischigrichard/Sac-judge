import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "../components/MainPage";
import easyVersion from "../components/versions/easy_version/EasyVersion";
import mediumVersion from "../components/versions/medium_version/MediumVersion";
import hardVersion from "../components/versions/hard_version/HardVersion";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/easy/",
    name: "easyVersion",
    component: easyVersion,
  },
  {
    path: "/medium",
    name: "mediumVersion",
    component: mediumVersion,
  },
  {
    path: "/hard",
    name: "hardVersion",
    component: hardVersion,
  },
];


const router = new createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes,
})

export default router;
