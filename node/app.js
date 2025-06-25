//Root file for the node server
const http= require('http'); //import files in the node js--> http is a global module
/*function rqlistener(req, res){

}*/ 

//http.createServer(rqlistener);  //this funciton will be passed to managing the request and responses 
const server = http.createServer((req,res)=>{  //call back function 
console.log(req);
});

server.listen(3000); //this function reads the pprt number -- 3000, this request you can playaround with


