import { MongoClient } from "mongodb";
import config from "../config.js";

class CnxMongoDB {
  static connection = false;
  static db;
  static tp5;

  static conectar = async (_) => {
    try {
      CnxMongoDB.tp5 = new MongoClient(config.URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      await CnxMongoDB.tp5.connect();

      CnxMongoDB.db = CnxMongoDB.tp5.db(config.BASE);
      CnxMongoDB.connection = true;
    } catch (error) {
      console.log(error.message);
    }
  };

  static desconectar = async () => {
    if (!CnxMongoDB.connection) return;
    await CnxMongoDB.tp5.close();
  };
}

export default CnxMongoDB;
