import { createRouter, createWebHashHistory } from "vue-router";
import mainPage from "../components/main_page";
import easyVersionOne from "../components/versions/easy_version/easy_version-one";
import easyVersionTwo from "../components/versions/easy_version/easy_version-two";
import easyVersionThree from "../components/versions/easy_version/easy_version-three";
import easyVersionFour from "../components/versions/easy_version/easy_version-four";
import easyVersionFive from "../components/versions/easy_version/easy_version-five";
import easyVersionFinal from "../components/versions/easy_version/easy_version-final";
import mediumVersion from "../components/versions/medium_version";
import hardVersion from "../components/versions/hard_version";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: mainPage,
  },
  {
    path: "/easy/1",
    name: "easyVersionOne",
    component: easyVersionOne
  },
  {
    path: "/easy/2",
    name: "easyVersionTwo",
    component: easyVersionTwo
  },
  {
    path: "/easy/3",
    name: "easyVersionThree",
    component: easyVersionThree
  },
  {
    path: "/easy/4",
    name: "easyVersionFour",
    component: easyVersionFour
  },
  {
    path: "/easy/5",
    name: "easyVersionFive",
    component: easyVersionFive
  },
  {
    path: "/easy/final",
    name: "easyVersionFinal",
    component: easyVersionFinal
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
