const express = require('express');
const morgan = require('morgan');
const cors = require("cors")

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const profileRouter = require("./routes/profileRoutes")

const app = express();
app.use(cors())

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// app.use((req, res, next) => {
//     console.log('Hello from the middleware 👋');
//     next();
// });

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 3) ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use("/profiles", profileRouter)

module.exports = app;