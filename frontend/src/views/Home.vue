<template>
  <section>
    <div class="container" style="margin-top: 330px;margin-bottom: 350px;">
        <div class="row text-white text-center">
            <h1>Balitraveling.com</h1>
            <h1 class="tagg">Start your journey from here!</h1>
        </div>
    </div>
    <div class="container-fluid">
        <h1 class="tagg text-center text-white">Bali Top Destination</h1>
        <div class="container">
            <div class="row mt-4 mb-4">

                <div class="col-lg-4 mb-3" v-for="(detailkategori, index) in detailkategoris" :key="index">
                    <div class="card m-0">
                        <div class="img-hover-zoom img-hover-zoom--blur">
                            <a :href="'/detail/' + detailkategori.id"><img  :src="'/image/detail/'+detailkategori.image" class="card-img-top" alt="..." style="height:250px"></a>
                        </div>
                        <div class="card-body" style="height:150px">
                            <div class="row">
                                <h4 h4 class="col-8">{{detailkategori.nama}} </h4>
                                <div class="col-4">
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                </div>
                            </div>
                            <div class="row">
                                <p class="col-8">{{detailkategori.alamat}}</p>
                                <span class="fa fa-eye col-4"> 100.000</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import UserService from "../services/user.service";
import KategoriDetail from "../services/kategoridetail.service";

export default {
  name: "Home",
  data() {
    return {
        detailkategoris: [],
        content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
    
    this.retrievekategoris();
  },
    methods:{
        retrievekategoris() {
            KategoriDetail.getAll()
                .then(response => {
                this.detailkategoris = response.data;
                console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
            },
    },
};
</script>
