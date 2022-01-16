<template>
  <div class="container" style="margin-top: 130px;">
    <div class="card">
      <div class="card-header">
        <h1>Edit Kategori</h1>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nama Kategori</label>
            <input type="text" class="form-control" name="nama" v-model="kategoris.nama"/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Image</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              v-on:change="upload"
            />
            <p>Before : {{kategoris.image}}</p>
          </div>
          <button class="btn btn-success" type="submit" @click="updateKategori">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import kategori from "../../services/kategori.service";
export default {
    name:"KategoriUPdate",
    data() {
       return {
           kategoris:[],
    }; 
    },
    
  mounted() {
    this.retrievekategoris(this.$route.params.id);
  },
    methods:{
    // get data detail dari detail kategori
    retrievekategoris(id) {
      kategori.get(id)
        .then((response) => {
          this.kategoris = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    upload: function(event){
      const namagambar = event.target.files[0].name
      this.kategoris.image=namagambar
    },
    
    updateKategori() {
      kategori.update(this.kategoris.id, this.kategoris)
        .then(response => {
          console.log(response.data);
          alert(this.message = 'The tutorial was updated successfully!');
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    },
}
</script>
