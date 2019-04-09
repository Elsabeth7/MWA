const express = require("express");
const cors = require("cors");
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');

client.connect(function(err){
    const db = client.db('ResturantDB');
    const collection = db.collection('Resturants');
    collection.find({},function(err, doc){
        console.dir(doc);
        client.close();
    })
    console.dir("We just get all documents!");
})

