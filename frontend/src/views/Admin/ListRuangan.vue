<template>
    <div class="row">
        <Sidebar />
        <div class="col">
            <div class="ml-3">

        <div class="row mt-3">
            <div class="col">
            <h2>
                List <strong>Ruangan</strong>
            </h2>
            <div class="table-responsive mt-3">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Foto</th>
                    <th scope="col">Ruangan</th>
                    <th scope="col">Jumlah Kursi</th>
                    <th scope="col">Jumlah Meja</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Hapus</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="product.id">

                    <th>{{index+1}}</th>

                    <td>
                        <img
                        :src=" '../images/' + product.gambar "
                        class="img-fluid shadow"
                        width="200"
                        />
                    </td>

                    <td>
                        <strong>{{ product.nama }}</strong>
                    </td>
                    <!-- KURSI -->
                    <td >{{ product.kursi }}</td>
                    <!-- MEJA -->
                    <td >{{ product.meja }}</td>

                    <!-- EDIT -->
                    <td>
                        <router-link :to="'/admin/ruangan/editruangan/'+product.id">
                            <button type="button" class="btn btn-primary">
                                Edit
                            </button>
                        </router-link>
                    </td>

                    <!-- HAPUS -->
                    <td>
                        <button type="button" class="btn btn-danger" @click="hapusRuangan(products.id)">
                            Delete
                        </button>
                    </td>
                    </tr>

                </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>   
</template>

<script>
    import axios from "axios";
    import Sidebar from "@/components/Sidebar.vue";

    export default {
    name: "Keranjang",
    components: {
        Sidebar,
    },
    data() {
        return {
        products: [],
        pesan: {},
        };
    },
    methods: {
        setProducts(data) {
        this.products = data;
        
        },
    },
    mounted() {
        axios
        .get("http://localhost:3000/products")
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error));
    },
};
</script>

<style>
</style>