import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

import Kategori from "./views/User/kategori.vue";
import KategoriDetail from "./views/User/kategoridetail.vue";
import Kontak from "./views/User/kontak.vue";
import Profile from "./views/Profile.vue";
import Detail from "./views/User/detail.vue";


import editdetailkategori from "./views/Admin/BoardAdmin.vue";

const BoardAdmin = () => import("./views/Admin/BoardAdmin.vue")


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/kategori",
    component: Kategori,
  },
  {
    path: "/kontak",
    component: Kontak,
  },
  {
    path: "/kategoridetail",
    component: KategoriDetail,
  },
  {
    path: "/detail",
    component: Detail,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/editkategori",
    name: "editkategori",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/editdetailkategori",
    name: "editdetailkategori",
    // lazy-loaded
    component: editdetailkategori,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;