var bodyParser = require('body-parser');

module.exports = function (app, express) {
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client'));

// we want to have a midleware for each type of request for separation of concerns, and to make things more easy to read/follow

  // route lvl midelware
  // app.get('/todo', Auth(), function(req, res){
    // what happens, is Auth() will get run first, which can check for auth, 404 if no access, or say next() if they have auth
    // in which case it will then move to the func(req,res) section or midleware if provided
    
    // can be separated by commas, or be passed an array of midleware, same thing    
  // })


  // app.param( 'id', function(req, res, next, id){
      // this runs when we have a request that has a param that matches 'id'
      // remember to call next()
  // })

  // for getting something back, we want information/data
  // app.get('/todos', function(req,res){
      // on its own this would return everything      
  // });
  // app.get('/todo/:id', function(req,res){
      // : indicates a secondary param to get something specific
  // })
  // app.get('/todo/?sort=name', function(req,res){
      // ? indicates a query param (for filtering bulk data) which we can access via params?
  // })
  
  
  // post is for sending something to our server
  // app.post('/todos', function(req,res){
    // req.body, contains all the data/info we intend to put in
  // });
  // app.post('/todos/:id', function (req, res){
  //  req.params.id = ^id
    
  // })


// errors should always be at the bottom
  // app.use(function(err,req,res,next){
  //   // error response here
  //   // invoked when you use ' __next(new Error("didnt work")__ ')
  //     // this makes it go on to the next in the stack, but then will find its an error type

      // throw new Error('') will stop the application anywhere, but doesnt reslove the error
      // want to call next(err)
      
      
  // for future tests, we want to run tests first, then load our app...

  // })

};
