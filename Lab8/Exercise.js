const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

client.connect(function(err){
    const db = client.db('ResturantDB');
    const collection = db.collection('Resturants');
 //1
  collection.find({});
//2
collection.find({}, {resturant_id: 1,name:1,district: 1,cuisine:1});
   
//3
   collection.find({},{resturant_id: 1,name:1,district: 1,cuisine:1,_id:0});
  
 //4
  collection.find({},{resturant_id: 1,name:1,district: 1, "address.zipcode": 1,_id:0});

//5
collection.find({district:"Bronx"});
//6
collection.find({district:"Bronx"}).limit(5);

//7
collection.find({district:"Bronx"}).skip(5).limit(5);
//8
collection.find({"address.coord":{$lt: -95.754168}});

//9
collection.find({cuisine: {$nin:["America"]},coord:{$lt: -65.754168}, "grades.score":{$gt:70}});
//10
collection.find({name:{$regex:"Wil"}}).project( {resturant_id: 1,name:1,district: 1,cuisine:1});

//11
collection.find({name:{$regex:"ces$"}}).project( {resturant_id: 1,name:1,district: 1,cuisine:1});
//12
collection.find({name:{$regex:"Reg"}}).project( {resturant_id: 1,name:1,district: 1,cuisine:1});

//13
collection.find({district: "Bronx",cuisine: {$in:["American","Chinese"]}});
//14
collection.find({district:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}}).project( {resturant_id: 1,name:1,district: 1,cuisine:1});
//15
collection.find({district:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}}).project( {resturant_id: 1,name:1,district: 1,cuisine:1});
//16
collection.find({"grades.score": {$lt:10}}).project( {resturant_id: 1,name:1,district: 1,cuisine:1});
//17
collection.find({"address.coord.2": {$gt:42,$lte: 52}}).project({resturant_id :1,name:1,address:1});

//18
collection.find({}).sort({name:1});
//19
collection.find({}).sort({name: -1});
//20
collection.find({},{name:1,cuisine:1}).sort({name:1,cuisine:-1});
//21
collection.find({"address.street": {$exists:0}});
//22
collection.find({"address.coord": {$type: "Double"}});
//23
collection.find({name: {$regex: "^Mad"}}).project({name:1,district:1,"address.coord.1":1,"address.coord.2":1,cuisine:1});

console.dir("Done!");
})

