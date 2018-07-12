const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const mongoose = require("mongoose");
const config = require("../config/config");

const User = mongoose.model("User");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new FacebookStrategy(
    {
      callbackURL: "/auth/facebook/callback",
      clientID: config.facebookAppId,
      clientSecret: config.facebookAppSecret,
      passReqToCallback: true,
      proxy: true,
      profileFields: ["id", "emails", "displayName"]
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({
          "facebook.id": profile.id
        });
        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await new User({
          facebook: {
            id: profile.id,
            token: accessToken,
            email: profile.emails[0].value,
            name: profile.displayName
          }
        }).save();
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);
