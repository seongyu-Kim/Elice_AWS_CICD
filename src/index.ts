import "dotenv/config";
import app from "./app";
import dbConnectAndSync from "./db";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

dbConnectAndSync();
