<template>
  <div class="container" style="margin-top: 100px;">
    <div class="row">
      <div class="col-lg-6">
        <div class="card m-0">
          <div class="card-img">
            <img
              :src="'/image/detail/' + detailkategoris.image"
              class="card-img-top"
              alt="..."
            />
          </div>
          <div class="card-body">
            <div class="row">
              <h4 h4 class="col-8">{{ detailkategoris.nama }}</h4>
              <div class="col-4">
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
                <span class="fa fa-star yellow"></span>
              </div>
            </div>
            <div class="row">
              <p class="col-8">{{ detailkategoris.alamat }}</p>
              <span class="fa fa-eye col-4"> 100.000</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 text-white">
        <h4>Description</h4>
        <hr />
        <p>
          {{ detailkategoris.deskripsi }}
        </p>
        <hr />
        <h4>Comments</h4>
        <hr />
        <div class="row anyClass">
          <div class="row" v-for="(comment, index) in comments" :key="index">
            <div class="col-lg-9">
              <p>
                <b>{{ comment.nama_user }} | {{ comment.createdAt }}</b
                ><br />
                {{ comment.commenst }} <br />
                <span class="fa fa-thumbs-up">100</span>
                <span class="fa fa-thumbs-down"> 100</span>
                <span class="fa fa-comments">100</span>
              </p>
            </div>
            <div class="col-lg-3">
              <button class="btn text-white" type="submit" @click.="deletecomments(comment.id)">
                <span class="fa fa-trash"></span>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <form action="">
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Replay</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="comment"
                v-model="form.commentt"
                placeholder="Type here..."
              ></textarea>
            </div>
            <button class="btn btn-success" type="submit" @click="savecomment">
              <span class="fa fa-send"></span> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KategoriDetail from "../../services/kategoridetail.service";
import Comment from "../../services/commenst.service";

export default {
  name: "KategoriDetail",
  data() {
    return {
      form: {
        commentt: "",
      },
      detailkategoris: [],
      comments: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    this.retrievekategoris(this.$route.params.id);
    this.retrievecommenst(this.$route.params.id);
  },
  methods: {
    // save comments
    savecomment() {
      var data = {
        nama_user: this.currentUser.username,
        id_detailkategori: this.detailkategoris.id,
        commenst: this.form.commentt,
      };

      Comment.create(data)
        .then((response) => {
          this.comments.id = response.data.id;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // get data detail dari detail kategori
    retrievekategoris(id) {
      KategoriDetail.get(id)
        .then((response) => {
          this.detailkategoris = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // get comments berdasarkan id
    retrievecommenst(id) {
      Comment.getcommenst(id)
        .then((response) => {
          this.comments = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    // delete comments
    deletecomments(id) {
      Comment.delete(id)
        .then(response => {
          console.log(response.data);
          window.location.reload();
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
};
</script>
<style>
.anyClass {
  height: 200px;
  overflow-y: scroll;
}
</style>
