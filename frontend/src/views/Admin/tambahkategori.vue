<template>
  <div class="container" style="margin-top: 130px;">
    <div class="card">
      <div class="card-header">
        <h1>Tambah Kategori</h1>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nama Kategori</label>
            <input type="text" class="form-control" name="nama" v-model="form.nama"/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Image</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              v-on:change="upload"
            />
          </div>
          <button class="btn btn-success" type="submit" @click="savekategori">Tambah</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import kategori from "../../services/kategori.service";
export default {
    name:"TambahKategori",
    data() {
       return {
           form:{
               nama:"",
               image:"",
           }
    }; 
    },
    methods:{
    upload: function(event){
      const namagambar = event.target.files[0].name
      this.form.image=namagambar
    },
    // save comments
    savekategori() {
      var data = {
        nama: this.form.nama,
        image: this.form.image,
      };

      kategori.create(data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    },
}
</script>
