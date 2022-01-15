module.exports = (sequelize, Sequelize) => {
    const Commenst = sequelize.define("commenst", {
      id_user: {
        type: Sequelize.STRING
      },
      id_detailkategori: {
        type: Sequelize.STRING
      },
      commenst: {
        type: Sequelize.STRING
      }
    });
  
    return Commenst;
  };