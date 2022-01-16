const db = require("../models");
const KategoriDetail = db.kategoridetail;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nama) {
      res.status(400).send({
        message: "nama can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const detailkategori = {
      id_kategori: req.body.id_kategori,
      nama: req.body.nama,
      alamat: req.body.alamat,
      image: req.body.image,
      deskripsi: req.body.deskripsi,
    };
  
    // Save Tutorial in the database
    KategoriDetail.create(detailkategori)
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

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const nama = req.query.nama;
    var condition = nama ? { nama: { [Op.like]: `%${nama}%` } } : null;
  
    KategoriDetail.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  KategoriDetail.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Find a single Tutorial with an id
exports.findOnekategori = (req, res) => {
  const id_kategori = req.params.id_kategori;
  var condition = id_kategori ? { id_kategori: { [Op.like]: `%${id_kategori}%` } } : null;

  KategoriDetail.findAll({where:condition})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    KategoriDetail.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    KategoriDetail.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };
