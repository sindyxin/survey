const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");//access to cookies
const passport = require("passport") // tell passport to make use of cookies
const keys = require("./config/keys");
require('./models/User');
require("./services/passport");

mongoose.connect(keys.mongoURL);
const app = express();
app.use(
  cookieSession({
    maxAge:30*24*60*60*1000 , //30days 24hours 60minite 60seconds 1000millisecounds
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

// const passportConfig = require("./services/passport");
// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
