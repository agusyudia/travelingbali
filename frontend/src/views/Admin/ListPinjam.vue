<template>
    <div class="row">
        <div class="col">
            <div class="keranjang">
                <div class="ml-3">

                <div class="row">
                    <div class="col mt-3">
                    <h2>
                        Request
                        <strong>Peminjaman</strong>
                    </h2>
                    <div class="table-responsive mt-3">
                        <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Ruangan</th>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Jam</th>
                            <th scope="col">Keperluan</th>
                            <th scope="col">Status</th>
                            <th scope="col">Konfirmasi</th>
                            <th scope="col">Hapus</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                            <th>{{index+1}}</th>
                            <td>
                                <strong>{{ keranjang.products.nama }}</strong>
                            </td>
                            <!-- TGL -->
                            <td >{{ keranjang.tgl_pinjam }}</td>
                            <!-- JAM -->
                            <td >{{ keranjang.jam_start }} - {{ keranjang.jam_end }} </td>
                            <!-- KEPERLUAN -->
                            <td >{{ keranjang.keterangan ? keranjang.keterangan : "-" }}</td>

                            <!-- STATUS -->
                            <td ><strong>{{ keranjang.status }}</strong></td>
                            <td > 
                                <div>
                                    <button type="button" class="btn btn-success mr-2" @click="terimapinjam(keranjang.id)">
                                        Terima
                                    </button>
                                <!-- <hr> -->
                                    <button type="button" class="btn btn-danger" @click="tolakpinjam(keranjang.id)">
                                        Tolak
                                    </button>
                                </div>
                            </td>

                            <!-- HAPUS -->
                            <td>
                                <button type="button" class="btn btn-danger" @click="hapusKeranjang(keranjang.id)">
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
        keranjangs: [],
        };
    },
    methods: {
        setKeranjangs(data) {
        this.keranjangs = data;
        },

// TERIMAPINJAM
        terimapinjam(id) {
        axios
            .patch("http://localhost:3000/keranjangs/" + id, {
                status: "Diterima"
            })
            .then(() => {
            this.$router.push({ path: "/admin/peminjaman"})
            // this.$toast.error("Sukses Menerima Peminjaman", {
            //     type: "success",
            //     position: "top-right",
            //     duration: 3000,
            //     dismissible: true,
            // });

            // Update Data keranjang
            axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
        },

// TOLAKPINJAM
        tolakpinjam(id) {
        axios
            .patch("http://localhost:3000/keranjangs/" + id, {
                status: "Ditolak"
            })
            .then(() => {
            this.$router.push({ path: "/admin/peminjaman"})
            // this.$toast.error("Sukses Menolak Peminjaman", {
            //     type: "success",
            //     position: "top-right",
            //     duration: 3000,
            //     dismissible: true,
            // });

            // Update Data keranjang
            axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
        },

// HAPUS KERANJANG
        hapusKeranjang(id) {
        axios
            .delete("http://localhost:3000/keranjangs/" + id)
            .then(() => {
            this.$toast.error("Sukses Hapus Peminjaman", {
                type: "error",
                position: "top-right",
                duration: 3000,
                dismissible: true,
            });

            // Update Data keranjang
            axios
            .get("http://localhost:3000/keranjangs")
            .then((response) => this.setKeranjangs(response.data))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));
        },
    },
    mounted() {
        axios
        .get("http://localhost:3000/keranjangs")
        .then((response) => this.setKeranjangs(response.data))
        .catch((error) => console.log(error));
    },
};
</script>

<style>
</style>