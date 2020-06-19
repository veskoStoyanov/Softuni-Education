const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

// Passport Config
require('./authorization/passport-strategies/SignInStrategy')(passport);
require('./authorization/passport-strategies/SignUpStrategy')(passport);
// require('./authorization/passport-strategies/GoogleStrategy')(passport);
require('./authorization/passport-strategies/FacebookStrategy')(passport);
// DB Config
const db = 'mongodb://localhost:27017/userAuth';

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));



// Passport middleware
app.use(passport.initialize());

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
app.use('/auth', require('./routes/facebook'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
