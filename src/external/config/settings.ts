export default {
  get NODE_ENV() {
    return process.env.NODE_ENV || "development";
  },
  get PORT() {
    return parseInt(process.env.PORT || "80");
  },
  database: {
    get HOST() {
      return process.env.DATABASE_HOST;
    },
    get PORT() {
      if (!process.env.DATABASE_PORT) {
        throw new Error("Env DATABASE_PORT not found");
      }
      return parseInt(process.env.DATABASE_PORT);
    },
    get DB_NAME() {
      if (!process.env.DATABASE_DB_NAME) {
        throw new Error("Env DATABASE_DB_NAME not found");
      }
      return process.env.DATABASE_DB_NAME;
    },
    get USER() {
      if (!process.env.DATABASE_USER) {
        throw new Error("Env DATABASE_USER not found");
      }
      return process.env.DATABASE_USER;
    },
    get PASSWORD() {
      if (!process.env.DATABASE_PASSWORD) {
        throw new Error("Env DATABASE_PASSWORD not found");
      }
      return process.env.DATABASE_PASSWORD;
    },
    get FILE_NAME() {
      if (!process.env.DATABASE_FILE_NAME) {
        throw new Error("Env DATABASE_FILE_NAME not found");
      }
      return process.env.DATABASE_FILE_NAME;
    },
    get DRIVER() {
      if (!process.env.DATABASE_DRIVER) {
        throw new Error("Env DATABASE_DRIVER not found");
      }
      return process.env.DATABASE_DRIVER as "postgres" | "sqlite3";
    }
  }
};