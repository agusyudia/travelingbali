module.exports = (sequelize, Sequelize) => {
    const Kontak = sequelize.define("kontak", {
      nama: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      nohp: {
        type: Sequelize.STRING
      },
      massage: {
        type: Sequelize.STRING
      }
    });
  
    return Kontak;
  };