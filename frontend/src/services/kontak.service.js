
import http from "../http-common";

class commenst {
  create(data) {
    return http.post("/kontak", data);
  }

}

export default new commenst();
