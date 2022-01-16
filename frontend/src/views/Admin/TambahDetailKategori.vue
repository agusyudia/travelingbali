<template>
  <div class="container" style="margin-top: 130px;">
    <div class="card">
      <div class="card-header">
        <h1>Tambah Kategori</h1>
      </div>
      <div class="card-body">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">Kategori</label>
            <select class="form-select" aria-label="Default select example">
              <option
                value=""
                v-for="(kategori, index) in kategoris"
                :key="index"
                >{{ kategori.nama }}</option
              >
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nama</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Alamat</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Nama</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Image</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>
          <button class="btn btn-success">Tambah</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Kategori from "../../services/kategori.service";
export default {
  name: "Editkategori",
  data() {
    return {
      kategoris: [],
    };
  },
  mounted() {
    this.retrievekategoris();
  },
  methods: {
    retrievekategoris() {
      Kategori.getAll()
        .then((response) => {
          this.kategoris = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
