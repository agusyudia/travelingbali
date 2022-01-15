module.exports = (sequelize, Sequelize) => {
    const KategoriDetail = sequelize.define("tb_detail_kategori", {
      id_kategori: {
        type: Sequelize.STRING
      },
      nama: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      deskripsi: {
        type: Sequelize.STRING
      },
      like: {
        type: Sequelize.STRING
      },
      dislike: {
        type: Sequelize.STRING
      }
    });
  
    return KategoriDetail;
  };