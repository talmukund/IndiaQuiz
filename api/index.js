const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
const config = require("./config/config");

require("./model/User");

require("./service/passport");

mongoose.Promise = global.Promise;
mongoose.connect(
  config.MONGO_URI,
  { useMongoClient: true }
);

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// required for passport
app.use(
  session({
    secret: "ilovescotchscotchyscotchscotch", // session secret
    resave: true,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", require("./routes/users"));

app.get("/login", (req, res) => {
  res.send({ hi: "Please login" });
});

app.get("/api/current_user", (req, res) => {
  res.send(req.user);
});

if (["production"].includes(process.env.NODE_ENV)) {
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, "..", "client", "build")));

  // const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port`, PORT);
});
