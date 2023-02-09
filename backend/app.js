const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/connection");
// const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");

const app = express();

mongoose.set("strictQuery", true);

connectDB();
//mi
app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/User"));

// Handle 404 not found routes
app.all("*", (req, res, next) => {
  return res.status(404).json({
    status: "fail",
    message: `Cant find ${req.originalUrl} on thus server!`,
  });
});

// app.use(globalErrorHandler);

const port = 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
