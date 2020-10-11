const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Object = require("./models/Object");
const Policy = require("./models/Policy");

const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    origin: true,
  })
);

//routes
require("./config/routes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

const uri = process.env.mongodb || "mongodb://localhost:27017/Insurance";
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log("unable to connect to database");
      process.exit(1);
    } else {
      Object.createFirstObjects();
      Policy.createFirstPolicies();
      console.log("successfully connected to the database");
    }
  }
);

const port = process.env.PORT || 9999;
app.listen(port, () => {
  console.log("app is running");
});
