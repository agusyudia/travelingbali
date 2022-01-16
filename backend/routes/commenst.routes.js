const { authJwt } = require("../middleware");
const controller = require("../controllers/commenst.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/commenst", controller.findAll);
  app.post("/api/commenst", controller.create);
  app.get("/api/commenst/:id", controller.findOne);
  app.get("/api/commenst/kategori/:id", controller.findOnekategori);
  app.put("/api/commenst/:id", controller.update);
  app.delete("/api/commenst/:id", controller.delete);

};
