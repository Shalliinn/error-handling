
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const app = express();

app.use(bodyParser.json({ extended: false }));
var cors=require('cors');
app.use(cors());
const expenseRoutes=require('./routes/tracker')
const errorHandler=require('./middleware/error')
app.use(expenseRoutes)

sequelize
.sync()
.then(result=>{
    //console.log(result);
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
})