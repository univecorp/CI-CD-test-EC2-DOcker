const { app } = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const dbUrl =
  process.env.NODE_ENV === "production"
    ? "mongodb+srv://univebd:11223344@unive.hvsn09e.mongodb.net/unive"
    : "mongodb+srv://devunive:l4Q3ZJ0Fxr62PlwM@cluster0.bfgrdyw.mongodb.net/unive";

const bootstrap = async () => {
  const port = 5000;
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(dbUrl).then(() => {
      console.log("Database Connected Successfully🛢");
      console.log(dbUrl);
    });

    Server = app.listen(port, () => {
      // Store the server instance
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log("Mongoose connection failed:", error.message);
    process.exit(1);
  }
};

bootstrap();
