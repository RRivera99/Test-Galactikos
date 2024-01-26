const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const path = require('path');
const getScores = require('./Controllers/getScores')
const app = express();
const PORT= 3001;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'PuntajesApp')));
app.use('/maps', express.static(path.join(__dirname, 'maps')));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

app.use("/Scores", getScores)


app.listen(PORT, () => {
    console.log("listening in port 3001")
});
module.exports = app;