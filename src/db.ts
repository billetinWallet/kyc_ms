import mongoose from "mongoose";
const db_url = `mongodb://localhost:27017/kycdb`;

module.exports = () => {
  const connect = () => {
    mongoose.connect(db_url, {
      keepAlive: true,
    });
  };

  connect();
};
