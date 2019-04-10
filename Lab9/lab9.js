const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

client.connect(function(err){
    const db = client.db('USA_Zipcodes');
    const collection = db.collection('Zipcodes');
//1
    collection.aggregate([
        {$match: {
        state:"WA"
        }},
        {$project:{
            _id:0,
            Zipcodes: "$_id"
        
        }

        }
        
    ])
//2
collection.aggregate([
    {$match: {
        pop:{$lt:5000} 

    }
    },
    {$project:{
        _id:0,
        Zipcodes :"$_id",

    }}
])
//3
collection.aggregate([
    {$group: {
        _id:{"city":"$city", "state": "$state"},
        count: {$sum:1}        
    }
    },
    {$match: {
        count: {$gt:1}
    }},
    {$sort:{
        "_id.state":1,
        "_id.city":1
    }
    }

])

//4
collection.aggregate([
   
    {$group:{_id:{"sate":"$state", "city": "$city"},
        pop: {$sum: "$pop"}},
    

    },
    {$sort: {
        pop:1
    }

    },
    {$group:
    {
        _id: "$_id.state", city:{$first: "$_id.city"}

    }
    },
    {$sort: {_id:1}}

    
])

})