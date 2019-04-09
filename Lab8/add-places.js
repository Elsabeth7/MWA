const mongo = require('mongodb');

const { MongoClient } = mongo;
let collection;

const connectToMongo = async function() {
    const client = new MongoClient('mongodb://localhost:27017');
    await client.connect();
    const db = client.db('fairfield');
    db.dropCollection('places');
    collection = db.collection('places');

    collection.insertMany([
        {
            name: 'Arts Center',
            category: 'arts',
            location: [-91.963433, 41.010132]
        },
        {
            name: 'Everybody Foods',
            category: 'food',
            location: [-91.964693, 41.012279]
        },
        {
            name: 'Istanbul Grill',
            category: 'food',
            location: [-91.965108, 41.007770]
        },
        {
            name: 'Iowa State Bank & Trust Co',
            category: 'bank',
            location: [ -91.967447, 41.007252]
        },
        {
            name: 'Riverside Family Restaurant 3',
            category: 'food',
            location: [-91.971460, 41.007139]
        },
        {
            name: 'Fairfield Recreation Center',
            category: 'sports',
            location: [-91.975151, 41.006111]
        },
        {
            name: 'Hy-Vee',
            category: 'shopping',
            location: [-91.978402, 41.004864]
        }
    ]);

    collection.createIndex({ location: '2d'});
};

connectToMongo().then(console.log).catch(console.log);