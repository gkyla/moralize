import CONFIG from "../settings/config.js";
import { openDB } from "idb";

const {
  DATABASE_NAME,
  DATABASE_VERSION,
  DB_KEY_DIARY,
  DB_KEY_TARGET,
  DB_KEY_USERINFO,
  DB_KEY_PINED
} = CONFIG;

const db = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(DB_KEY_DIARY, {
      keyPath: "id"
    });
    database.createObjectStore(DB_KEY_TARGET, { keyPath: "id" });
    database.createObjectStore(DB_KEY_USERINFO, {
      keyPath: "model"
    });
    database.createObjectStore(DB_KEY_PINED, {
      keyPath: "id"
    });
  }
});

const moralizeDb = {
  async getItem(key, unique) {
    return (await db).get(key, unique);
  },

  async getAllItem(key) {
    return (await db).getAll(key);
  },

  async putItem(key, value) {
    return (await db).put(key, value);
  },

  async deleteItem(key, id) {
    return (await db).delete(key, id);
  }
};

export default moralizeDb;
