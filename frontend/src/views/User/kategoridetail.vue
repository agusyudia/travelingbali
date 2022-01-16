<template>
    <div style="margin-top: 130px;">
        <h1 class="tagg text-center text-white">Destination
        </h1>
        <div class="container">
            <div class="row mt-4 mb-4">

                <div class="col-lg-4 mb-3" v-for="(detailkategori, index) in detailkategoris" :key="index">
                    <div class="card m-0">
                            <a :href="'/detail/' + detailkategori.id" ><img :src="'/image/detail/'+detailkategori.image" class="card-img-top" alt="..." style="height:230px"></a>
                        <div class="card-body" style="height:150px">
                            <div class="row">
                                <h4 h4 class="col-8">{{detailkategori.nama}}</h4>
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
                    <p class="hr"></p>
                    <p class="text-white">{{detailkategori.deskripsi}}<br> <a :href="'/detail/' + detailkategori.id">Read More...</a></p>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import KategoriDetail from "../../services/kategoridetail.service";

export default {
  name: "KategoriDetail",
  data() {
    return {
        detailkategoris: [],
    };
  },
  mounted() {
    this.retrievekategoris(this.$route.params.id_kategori);
  },
    methods:{
        retrievekategoris(id_kategori) {
            KategoriDetail.getkategori(id_kategori)
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
<style>
  .background{
    background-image: url('../../../public/bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  </style>