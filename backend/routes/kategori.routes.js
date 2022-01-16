const { authJwt } = require("../middleware");
const controller = require("../controllers/kategori.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/kategori", controller.findAll);
  app.post("/api/kategori", controller.create);
  app.get("/api/kategori/:id", controller.findOne);
  app.put("/api/kategori/:id", controller.update);
  app.delete("/api/kategori/:id", controller.delete);

};
