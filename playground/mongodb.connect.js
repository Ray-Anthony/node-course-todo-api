const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //   'Something to do',
    //   completed: false
    // }, (err, res) => {
    //     if(err) return console.log('Unable to insert todo', err);

    //     console.log(JSON.stringify(res.ops, undefined, 2));
    // });

    // Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Ray',
    //     age: 31,
    //     location: 'San Antonio, TX'
    // }, (err, res) => {
    //     if(err) return console.log('Unable to insert todo', err);

    //     console.log(res.ops);
    // });

    client.close();
});