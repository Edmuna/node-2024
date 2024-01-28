const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require("mongoose")

dotenv.config({ path: './config.env' });

const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD)
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: true,
}).then(con => {
    console.log(`DB connection successfull`)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});