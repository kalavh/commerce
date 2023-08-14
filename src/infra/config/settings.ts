export default {
  get NODE_ENV() {
    return process.env.NODE_ENV || "development";
  },
  get HOST() {
    return process.env.HOST || "0.0.0.0";
  },
  get PORT() {
    return parseInt(process.env.PORT || "80");
  },
  get DATABASE_HOST() {
    if (!process.env.DATABASE_HOST) {
      throw new Error("Env DATABASE_HOST not found");
    }
    return process.env.DATABASE_HOST;
  },
  get DATABASE_PORT() {
    if (!process.env.DATABASE_PORT) {
      throw new Error("Env DATABASE_PORT not found");
    }
    return parseInt(process.env.DATABASE_PORT);
  },
  get DATABASE_NAME() {
    if (!process.env.DATABASE_NAME) {
      throw new Error("Env DATABASE_NAME not found");
    }
    return process.env.DATABASE_NAME;
  },
  get DATABASE_USER() {
    if (!process.env.DATABASE_USER) {
      throw new Error("Env DATABASE_USER not found");
    }
    return process.env.DATABASE_USER;
  },
  get DATABASE_PASSWORD() {
    if (!process.env.DATABASE_PASSWORD) {
      throw new Error("Env DATABASE_PASSWORD not found");
    }
    return process.env.DATABASE_PASSWORD;
  },
  get DATABASE_FILE_NAME() {
    if (!process.env.DATABASE_FILE_NAME) {
      throw new Error("Env DATABASE_FILE_NAME not found");
    }
    return process.env.DATABASE_FILE_NAME;
  },
  get DATABASE_DRIVER() {
    if (!process.env.DATABASE_DRIVER) {
      throw new Error("Env DATABASE_DRIVER not found");
    }
    return process.env.DATABASE_DRIVER as "pg" | "sqlite3";
  },
};