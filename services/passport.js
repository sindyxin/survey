// import { existsSync } from "fs";

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); //user.id is _id in mongod, saved to session req.session.passport.user = {id:'..'}
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
  // User.findById(id, (err,user)=>{
  //   done(err, user); //user object attaches to the request as req.user
  // })
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    // (accessToken, refreshToken, profile, done) => {
    //   console.log("accessToken", accessToken);
    //   console.log("refreshToken", refreshToken);
    //   console.log("profile", profile);
    //   User.findOne({googleId: profile.id})
    //     .then((existingUser)=>{
    //       if(existingUser){
    //         // We find this user already register
    //         done(null, existingUser);
    //       }else{
    //         //  we don't find and make new user in database
    //         new User({
    //           googleId: profile.id,
    //           userName: profile.displayName
    //         }).save().then((user)=>{
    //           done(bull, user);
    //         });
    //       }
    //     })

    // }
    async (accessToken, refreshToken, profile, done) => {
      console.log("accessToken", accessToken);
      console.log("refreshToken", refreshToken);
      console.log("profile", profile);
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        // We find this user already register
        return done(null, existingUser);
      } else {
        //  we don't find and make new user in database
        const user = await new User({
          googleId: profile.id,
          userName: profile.displayName}).save();         
          return done(bull, user);

      }
    }
  )
);
