//prod.js - production key here!!
module.exports={
  googleClientID: process.env.GOOGLE_CLIENT_ID,
    // "791798703355-c4f3nqel3aofad8l9ciqi4aferecl5f5.apps.googleusercontent.com",  //googleClientID-- ID must upperCase!!!
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // "iyFgZzYZ2V86yOmmvb_lNhq1",
  mongoURL: process.env.MONGO_URI,
  //"mongodb://<dbuser>:<dbpassword>@ds121015.mlab.com:21015/survey-prod",
  cookieKey: process.env.COOKIE_KEY

}

