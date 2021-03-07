var express = require("express");
var router = express.Router();

router.get("/", function(req,res,next){
 res.send("Vous êtes bien connecté à votre Server");

});

module.exports = router;
console.log("URL: http://15.236.171.135:8080/connectAPI");