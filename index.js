const express = require("express");
const app = express();
// const passportConfig = require("./services/passport");
// const authRoutes = require("./routes/authRoutes");
// authRoutes(app);
require("./services/passport");
require("./routes/authRoutes")(app);






const PORT = process.env.PORT || 5000;
app.listen(PORT);
