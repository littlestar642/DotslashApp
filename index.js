const express= require('express');
const app=express();
const hbs=require('hbs');
const http=require('http').Server(app);
const port=process.env.PORT || 3000;
let server=app.listen(port,()=>{
    console.log('listening on port 3000');
})

// express middleware setup
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use('/bower_components',express.static(__dirname+'/bower_components'));

// partial setup
hbs.registerPartials(__dirname + '/views/partials');

// App routes
app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/formCreate',(req,res)=>{
    res.render('form');
});








