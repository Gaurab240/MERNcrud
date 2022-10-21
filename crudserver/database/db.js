import mongoose from "mongoose";

const Connection = async (username,password) => {
  const URL = `mongodb://${username}:${password}@ac-vui22bb-shard-00-00.ioeaf2x.mongodb.net:27017,ac-vui22bb-shard-00-01.ioeaf2x.mongodb.net:27017,ac-vui22bb-shard-00-02.ioeaf2x.mongodb.net:27017/CrudApplication?ssl=true&replicaSet=atlas-ved6to-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default Connection;