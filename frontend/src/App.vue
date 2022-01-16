<template>
  <div id="app">
    <nav class="navbar navbar-light fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">
          <h2>Balitraveling.com</h2>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="text-white">Menu</span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body" v-if="!currentUser">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                
                <router-link to="/login" class="btn">Login</router-link>
              </li>
              <li class="nav-item">
                
                <router-link to="/register" class="btn">Register</router-link>
              </li>
            </ul>
          </div>

          <div class="offcanvas-body" v-if="currentUser">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item"  v-if="currentUser">
                <router-link to="/" class="btn">Home</router-link>
              </li>
              <li class="nav-item" v-if="currentUser">
                <router-link to="/kategori" class="btn"
                  >Kategori</router-link
                >
              </li>
              <li class="nav-item" v-if="currentUser">
                <router-link to="/kontak" class="btn"
                  >Contact</router-link
                >
              </li>
              <li class="nav-item" v-if="showAdminBoard">
                <router-link to="/editkategori" class="btn"
                  >Edit Kategori</router-link
                >
              </li>
              <li class="nav-item" v-if="showAdminBoard">
                <router-link to="/editdetailkategori" class="btn"
                  >Edit Detail Kategori</router-link
                >
              </li>
              <li class="nav-item">
                <a class="btn" @click.prevent="logOut">
                  <span class="fa fa-sign-out"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
// import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    // Sidebar,
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>