const express = require('express');
const path = require('path');
const {spawn} = require('child_process');
const app = express();
//const router = express.Router();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
    
    // var dataToSend;
    // // spawn new child process to call the python script
    // const python = spawn('python', ['script1.py','THANKS']);
    // // collect data from script
    // python.stdout.on('data', function (data) {
    //  console.log('Pipe data from python script ...');
    //  dataToSend = data.toString();
    // });
    // // in close event we are sure that stream from child process is closed
    // python.on('close', (code) => {
    // console.log(`child process close all stdio with code ${code}`);
    // // send data to browser
    // res.send(dataToSend)
    // });
    
    
    // res.redirect('<h1>THANKS</h1>');
   })

   app.get('/done', (req, res) => {
    
    
    //var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['script1.py','THANKS']);
    // collect data from script
    // python.stdout.on('data', function (data) {
    //  console.log('Pipe data from python script ...');
    //  dataToSend = data.toString();
    // });
    // in close event we are sure that stream from child process is closed
    // python.on('close', (code) => {
    // console.log(`child process close all stdio with code ${code}`);
    // // send data to browser
    // //res.send(dataToSend)
    // });
    
    res.render('done');
   })



// app.get('/',function(req, res) {
//     res.render('index');
//   });

app.listen(3000);