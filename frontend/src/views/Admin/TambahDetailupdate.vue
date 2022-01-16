<template>
  <div class="container" style="margin-top: 130px;">
    <router-link to="/editdetailkategori" class="btn btn-warning"><span class="fa fa-arrow-left"></span></router-link>
    <div class="card">
      <div class="card-header">
        <h1>Tambah Kategori</h1>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Kategori</label>
            <select class="form-select" aria-label="Default select example" name="id_kategori" v-model="detailkategoris.id_kategori">
              <option v-for="(kategori, index) in kategoris"
                :key="index"
                >{{ kategori.id }}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nama</label>
            <input type="text" class="form-control" name="nama" v-model="detailkategoris.nama"/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Alamat</label>
            <input type="text" class="form-control" name="alamat" v-model="detailkategoris.alamat"/>
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
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
              name="deskripsi"
              v-model="detailkategoris.deskripsi"
            ></textarea>
            <label for="floatingTextarea2">Deskripsi</label>
          </div>
          <button class="btn btn-success" type="submit" @click="updateDetailKategori">Update</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Kategoridetail from "../../services/kategoridetail.service";
import Kategori from "../../services/kategori.service";
export default {
  name: "Updatekategori",
  data() {
    return {
      detailkategoris:[],
      kategoris:[],
    };
  },
  mounted() {
    this.retrievekategoris(this.$route.params.id);
    this.retrievekategoris2();
  },
  methods: {
    // get data detail dari detail kategori
    retrievekategoris(id) {
      Kategoridetail.get(id)
        .then((response) => {
          this.detailkategoris = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    retrievekategoris2() {
      Kategori.getAll()
          .then(response => {
          this.kategoris = response.data;
          console.log(response.data);
          })
          .catch(e => {
          console.log(e);
          });
      },
    upload: function(event){
      const namagambar = event.target.files[0].name
      this.detailkategoris.image=namagambar
    },
    // Update Kategori
    updateDetailKategori() {
      Kategoridetail.update(this.detailkategoris.id, this.detailkategoris)
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
};
</script>
