var express = require('express');
var router = express.Router();
const userControlelr = require('../controller/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Get Param 
router.get('/book/:subject/:name', function(req, res, next) {
  res.render('book', { subject: req.params.subject,name: req.params.name });
});


//Get Query
router.get('/book', function(req, res, next) {
  res.render('book', { subject: req.query.subject, name:req.query.name });
});


//Post Param 
router.post('/check-book/:subject/:name', function(req, res, next) {
  res.render('book', { subject: req.params.subject,name: req.params.name });
});

//post Query
router.post('/check-book', function(req, res, next) {
  res.render('book', { subject: req.query.subject, name:req.query.name });
});

// post body
router.post('/add-user/:usercode', function(req, res, next) {
  res.render('user', {data: req });
});

//put body
router.put('/add-user/:usercode', function(req, res, next) {
  res.render('user', {data: req });
});



//Get param | JSON Response
router.get('/usersList',function(req,res, next){
  res.json([{name:'piyush',class:10, email:'piyush@gmail.com'},{name:'anjali',class:10, email:'anjali@gmail.com'}])
});



//Get params | JSON | Controller
router.get('/getUsers/:for',userControlelr.getUsers);



router.get('/book', function(req, res, next) {
  res.render('book', { subject: req.query.subject, name:req.query.name });
});


//Save Data
router.post('/addUser',userControlelr.addUser);

router.get('/getUser',userControlelr.getUser);


module.exports = router;
