var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// const { authorization } = require('./middleware/authorization')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var todoRouter = require('./routes/todo')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/todo', todoRouter)


app.use((error, req, res, next) => {
    return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Bad Request',
        error: error.message
    })
})

module.exports = app;
