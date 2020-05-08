const express = require('express');
const mongoose = require('mongoose')
const passport = require('passport')
const cookieSection = require('cookie-session')
const keys = require('./config/keys')
require('./models/user')
require("./services/passport");


mongoose.connect(keys.mongoURI)
const app = express();

app.use(cookieSection({
    maxAge: 30 *24*60*60*1000,
    keys: [keys.cookieKeys]
}))

app.use(passport.initialize())
app.use(passport.session())

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
