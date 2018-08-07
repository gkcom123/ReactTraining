const express = require('express'), 
bodyParser = require('body-parser');
var delay = require('express-delay');

const app = express();
const port = process.env.PORT || 5000;
 app.use(bodyParser.urlencoded({extended:true}));

 app.use(function(req,res,next){
     res.setHeader('Access-Control-Allow-Origin','*');
     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
     res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type')
     res.setHeader('Access-Control-Allow-Credentials',true);
     next();
 })

 app.use(bodyParser.json());
app.use(delay(2000));
 const appEventRouter = express.Router();
 appEventRouter.route('/').get((req,res)=>{
     console.log('--->',req,res);
     res.send('Please call proper api');
 })
 app.use('/api',appEventRouter);
 app.get('/api/userList',(req,res)=>{
     //console.log(req.body);
     const result = {
         "status": "success",
         data:[{userName:'Demouser1'},{userName:'Demouser2'}]
     }
     res.send(result);
 });
 app.post('/api/updateUser',((req,res)=>{
     var reqObj = req.body;
     console.log(reqObj);
     var emailId = reqObj["emailId"];
     var name = reqObj["name"];
     const result = {
        "status": "success",
        "data":[{userName:name,status:true}]
    }
    res.send(result);
 }));

 app.put('/api/updateName',((req,res)=>{
    var reqObj = req.body;
    console.log(reqObj);
    var emailId = reqObj["emailId"];
    var name = reqObj["name"];
    const result = {
       "status": "success",
       "message":"updated successfully"
   }
   res.send(result);
}));

app.delete('/api/user/:id',((req,res)=>{
    var reqObj = req.body;
    console.log(req.params.id);
    var emailId = reqObj["emailId"];
    var name = reqObj["name"];
    const result = {
       "status": "success",
       "message":"deleted successfully"
   }
   res.send(result);
}));

 app.listen(port,()=>{
     console.log(`Server started on port ${port}`);
 });