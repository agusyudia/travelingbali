module.exports = (sequelize, Sequelize) => {
    const Kategori = sequelize.define("tb_kategori", {
      nama: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      }
    });
  
    return Kategori;
  };