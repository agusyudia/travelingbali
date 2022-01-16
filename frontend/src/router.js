import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

import Kategori from "./views/User/kategori.vue";
import KategoriDetail from "./views/User/kategoridetail.vue";
import Kontak from "./views/User/kontak.vue";
import Profile from "./views/Profile.vue";
import Detail from "./views/User/detail.vue";


const editdetailkategori = () => import("./views/Admin/EditDetailKategori.vue")
import tambahdetailkategori from "./views/Admin/TambahDetailKategori.vue";
import detailkategoriupdate from "./views/Admin/TambahDetailupdate.vue";

const BoardAdmin = () => import("./views/Admin/EditKategori.vue")
import tambahkategori from "./views/Admin/tambahkategori.vue";
import kategoriedit from "./views/Admin/kategoriupdate.vue";


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
    path: "/kategoridetail/:id_kategori",
    component: KategoriDetail,
  },
  {
    path: "/detail/:id",
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
    path: "/tambahkategori",
    name: "tambahkategori",
    // lazy-loaded
    component: tambahkategori,
  },
  {
    path: "/kategoriupdate/:id",
    name: "kategoriedit",
    // lazy-loaded
    component: kategoriedit,
  },
  {
    path: "/editdetailkategori",
    name: "editdetailkategori",
    // lazy-loaded
    component: editdetailkategori,
  },
  {
    path: "/tambahdetailkategori",
    name: "tambahdetailkategori",
    // lazy-loaded
    component: tambahdetailkategori,
  },
  {
    path: "/detailkategoriupdate/:id",
    name: "detailkategoriupdate",
    // lazy-loaded
    component: detailkategoriupdate,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register','/kategori','/'];
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