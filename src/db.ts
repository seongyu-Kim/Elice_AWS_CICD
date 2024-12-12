import sequelize from "./sequelize";

async function dbConnectAndSync() {
  console.log("Checking database connection...");
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    if (error instanceof Error) console.log(error.message);
    process.exit(1);
  }

  console.log("Trying to sync models...");
  try {
    await sequelize.sync({ force: true });
    console.log("Successfully synced!");
  } catch (error) {
    console.log("Unable to sync models to database:");
    if (error instanceof Error) console.log(error.message);
    process.exit(1);
  }
}

export default dbConnectAndSync;
