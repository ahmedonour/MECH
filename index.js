const express = require("express");
const port = process.env.PORT || 5000;
const serverApi = require("./server")
var app = express();


// MIDDELWAER
app.use(express.static("public"));
app.set('views', 'views');
app.set('view engine', 'pug');
// MIDDELWAER


// HOME ROUTE
app.get('/', function(req, res){
    res.render('index');
}   // end of app.get
);
// SIGN UP ROUTE
app.get('/register', function(req, res){
    res.render('signup');
    
})
// LOGIN ROUTE
app.get('/login', function(req, res){
    res.render('login');    
});
app.listen(port, function(){
    console.log(`Server is running on ${port}`);
}   // end of app.listen
);

