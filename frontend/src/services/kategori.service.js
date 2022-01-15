
import http from "../http-common";

class Kategori {
  getAll() {
    return http.get("/kategori");
  }

  get(id) {
    return http.get(`/kategori/${id}`);
  }

  create(data) {
    return http.post("/kategori", data);
  }

  update(id, data) {
    return http.put(`/kategori/${id}`, data);
  }

  delete(id) {
    return http.delete(`/kategori/${id}`);
  }

}

export default new Kategori();
