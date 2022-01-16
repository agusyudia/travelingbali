const db = require("../models");
const Kontaks = db.kontak;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nama) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const kontak = {
      nama: req.body.nama,
      email: req.body.email,
      nohp: req.body.nohp,
      massage: req.body.massage,
    };
  
    // Save Tutorial in the database
    Kontaks.create(kontak)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

