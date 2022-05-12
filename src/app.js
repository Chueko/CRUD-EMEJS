const express=require('express');
const logger= require('morgan');
const bodyParser=require('body-parser');
const path=require('path');

const app=express();

const indexRoutes=require('./routes/index');
//settings
app.set('port',process.env.PORT||3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));

//routes
app.use('/',indexRoutes);

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

