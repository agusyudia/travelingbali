<template>
<div class="container" style="margin-top: 130px;">
    <h1 class="text-center text-white">Tabel data Kategori</h1>
    <router-link to="/tambahkategori" class="btn btn-success m-2">Tambah data</router-link>
    <table class="table bg-light" id="example">
        <thead>
            <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Image</th>
            <th scope="col">Aksi</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(kategori, index) in kategoris" :key="index">
                <th scope="row">{{index+1}}</th>
                <td>{{kategori.nama}}</td>
                <td>{{kategori.image}}</td>
                <td>
                    <button class="btn btn-warning m-1"><span class="fa fa-pencil"></span></button>
                    <button class="btn btn-danger m-1"><span class="fa fa-trash"></span></button>
                </td>
            </tr>
        </tbody>
    </table>
    
</div>
</template>

<script>
import Kategori from "../../services/kategori.service";
export default {
    name:"Editkategori",
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
