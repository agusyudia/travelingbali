const db = require("../models");
const Commenst = db.commenst;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nama_user) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }if (!req.body.id_detailkategori) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }if (!req.body.commenst) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const commenst = {
      nama_user: req.body.nama_user,
      id_detailkategori: req.body.id_detailkategori,
      commenst: req.body.commenst,
    };
  
    // Save Tutorial in the database
    Commenst.create(commenst)
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
    const commenst = req.query.commenst;
    var condition = commenst ? { commenst: { [Op.like]: `%${commenst}%` } } : null;
  
    Commenst.findAll({ where: condition })
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
  
    Commenst.findByPk(id)
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

  exports.findOnekategori = (req, res) => {
    const id_detailkategori = req.params.id;
    var condition = id_detailkategori ? { id_detailkategori: { [Op.like]: `%${id_detailkategori}%` } } : null;
  
    Commenst.findAll({where:condition})
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
  
    Commenst.update(req.body, {
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
  
    Commenst.destroy({
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
