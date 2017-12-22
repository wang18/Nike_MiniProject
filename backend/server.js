import express from 'express';
import mongodb from 'mongodb'
import bodyParser from 'body-parser';
import elasticsearch from 'elasticsearch';

const app = express();
app.use(bodyParser.json());
const dbUrl = 'mongodb://localhost/crudwithredux';

function validate(data) {
    let errors={};
    if(data.title===''){errors.title='Cant be empty';}
    if(data.password ===''){errors.password='Cant be empty';}
    const isValid = Object.keys(errors).length === 0;
    return {errors, isValid};
}

mongodb.MongoClient.connect(dbUrl, function (err, db) {

    app.get('/api/games',(req,res)=>{
        db.collection('games').find({}).toArray((err, games)=>{
           res.json({games});
        });
    });

    app.post('/api/games',(req, res)=>{
        const {errors, isValid} = validate(req.body);
        if(isValid){
            const {title, password} = req.body;
            console.log(req.body);
            db.collection('games').insert({title,password}, (err, result) => {
                if(err){
                    res.status(500).json({error: {global: "Something went wrong"}});
                }else{
                    res.json({game : result.ops[0]});
                }
            });
        }else{
            res.status(400).json({errors});
        }
    });

    app.use((req,res) => {
        res.status(404).json({
            errors:{
                global:"Still working on it. Please try again later when we implement it"
            }
        })
    });

    app.listen(8080, () => console.log('server is running on 8080') );
});
/*

var client = new elasticsearch.Client( {
    host: "http://localhost:9200/"
});

client.indices.create({
    index: 'react'
},function(err,resp,status) {
    if(err) {
        console.log("table already exists.");
    }
    else {
        console.log("create",resp);
    }
});


app.get('/api/games', function(req, res, next) {
    client.search({
        index : "react",
        type : "es",
        body :{
            query : {

            }
        }
    },function(err,resp,status){
        if(err){
            console.log("error",err)
        }
        else{
            res.send(resp.hits.hits)
        }
    });
});

app.post('api/games', function(req, res, next) {
    var note = req.body.text;
    console.log(note);
    //add a document to an index
    client.index({
        index:"react",
        type:"es",
        body : {
            "Note":note
        }
    },function(err,resp,status){
        console.log(resp);
        res.send({ status : 200 , note : note });
    });

});

app.listen(8080, () => console.log('server is running on 8080') );
*/
