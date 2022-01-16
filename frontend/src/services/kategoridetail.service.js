
import http from "../http-common";

class kategoridetail {
  getAll() {
    return http.get("/kategoridetail");
  }

  get(id) {
    return http.get(`/kategoridetail/${id}`);
  }

  getkategori(id_kategori) {
    return http.get(`/kategoridetail/kategori/${id_kategori}`);
  }

  create(data) {
    return http.post("/kategoridetail", data);
  }

  update(id, data) {
    return http.put(`/kategoridetail/${id}`, data);
  }

  delete(id) {
    return http.delete(`/kategoridetail/${id}`);
  }

}

export default new kategoridetail();
