const { authJwt } = require("../middleware");
const controller = require("../controllers/kategoridetail.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/kategoridetail", controller.findAll);
  app.get("/api/kategoridetail/:id", controller.findOne);

};
