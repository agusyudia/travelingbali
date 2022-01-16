
import http from "../http-common";

class commenst {
  getAll() {
    return http.get("/commenst");
  }

  get(id) {
    return http.get(`/commenst/${id}`);
  }

  getcommenst(id) {
    return http.get(`/commenst/kategori/${id}`);
  }

  create(data) {
    return http.post("/commenst", data);
  }

  update(id, data) {
    return http.put(`/commenst/${id}`, data);
  }

  delete(id) {
    return http.delete(`/commenst/${id}`);
  }

}

export default new commenst();
