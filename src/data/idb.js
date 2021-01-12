import CONFIG from "../settings/config.js";
import { openDB } from "idb";

const db = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(CONFIG.DB_KEY_DIARY, {
      keyPath: "id"
    });
    database.createObjectStore(CONFIG.DB_KEY_TARGET, { keyPath: "id" });
    database.createObjectStore(CONFIG.DB_KEY_USERINFO, {
      keyPath: "model"
    });
    database.createObjectStore(CONFIG.DB_KEY_PINED, {
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
