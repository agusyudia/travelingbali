<template>
<div class="container" style="margin-top: 130px;">
    <h1 class="text-center text-white">Tabel Data Detail Kategori</h1>
    <router-link to="/tambahdetailkategori" class="btn btn-success m-2">Tambah data</router-link>
    <table class="table bg-light" id="example">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Kategori</th>
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
            <th scope="col">Image</th>
            <th scope="col">Deskripsi</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(detailkategori, index) in detailkategoris" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{detailkategori.id_kategori}}</td>
                <td>{{detailkategori.nama}}</td>
                <td>{{detailkategori.alamat}}</td>
                <td>{{detailkategori.image}}</td>
                <td>{{detailkategori.deskripsi}}</td>
                <td>
                    <button class="btn btn-warning m-1"><span class="fa fa-pencil"></span></button>
                    <button class="btn btn-danger m-1" @click.prevent="deleteKategori"><span class="fa fa-trash"></span></button>
                </td>
            </tr>
        </tbody>
    </table>
    
</div>
</template>

<script>
import KategoriDetail from "../../services/kategoridetail.service";
export default {
    name:"Editdetailkategori",
    data() {
       return {
        detailkategoris: []
    }; 
    },
    mounted() {
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
            deleteKategori() {
            KategoriDetail.delete(this.detailkategoris.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "editdetailkategori" });
                })
                .catch(e => {
                    console.log(e);
            });
        }
    },
}
</script>
