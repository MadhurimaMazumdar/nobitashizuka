var express = require['express'];
var path = require["path"];
var bodyParser = reuire['body-parser'];
var mongo = require["mongoose"];

var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function (err,response){
    if(err){ console.log( err); }
    else{ console.log('Connected to '+db,'+', response); }
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));


app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

var Schema = mongo.Schema;

var UserSchema = new Schema({
    name: {type: String},
    address: {type: String},
},{versionKey: false});

var model = mongo.model('users',UserSchema,'users');

app.post("/api/ServeUser",function(req,res){
    var mod = new model(req.body);
    if(req.body.mode == "Save")
    {
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been Inserted..!!"});
            }
        });
    }
    else
    {
        model.findByIdUpdate(req.body.id,{name:req.body.name,address:req.body.address}),
        function(err,data){
            if(err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been Updated..!!"});
            }
        }
    }
})

app.post("/api/deleteUser",function(re,res){
    model.remove({_id:re.body.id},function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Record has been Deleted..!!"});
        }
    })
})

app.get("/api/getUser",function(req,res){
    model.find({},function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    })
})

app.listen(8000, function(){
    console.log('App listening on port 8000!');
})