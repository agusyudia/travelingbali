<template>
  <div class="container" style="margin-top: 130px;">
    <div class="row">
      <h2 class=" text-center text-white">Destination Kategory</h2>
      <h1 class="text-center tagg text-white">Start your journey from here!</h1>
      
        <div class="container">
            <div class="row mt-4 mb-4">

                <div class="col-lg-4 mb-3" v-for="(kategori, index) in kategoris" :key="index">
                    <div class="card m-0">
                            <a  :href="'/kategoridetail/' + kategori.id"><img :src=" '/image/'+kategori.image" class="card-img-top" ></a>
                        <div class="card-body">
                            <div class="row">
                                <h4 h4 class="col-8">{{kategori.nama}}</h4>
                                <div class="col-4">
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                    <span class="fa fa-star yellow"></span>
                                </div>
                            </div>
                            <div class="row">
                              <a :href="'/kategoridetail/' + kategori.id" class="nav-link">Show More...</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Kategori from "../../services/kategori.service";
export default {
    name:"Kategori",
    data() {
       return {
        kategoris: []
    }; 
    },
    mounted() {
        this.retrievekategoris();
    },
    methods:{
        retrievekategoris() {
            Kategori.getAll()
                .then(response => {
                this.kategoris = response.data;
                console.log(response.data);
                })
                .catch(e => {
                console.log(e);
                });
            },
    },
}
</script>

