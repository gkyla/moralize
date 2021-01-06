import CONFIG from "./config.js";
import { openDB } from "idb";

const db = openDB(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(CONFIG.DB_KEY_STORY, { keyPath: "id" });
    database.createObjectStore(CONFIG.DB_KEY_TARGET, { keyPath: "id" });
  }
});

const moralizeDb = {
  async getItem(key) {
    return (await db).get(key);
  }
};

export default moralizeDb;
