const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) console.log('Unable to connect to MongoDB server');

    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db
    //   .collection("Todos")
    //   .findOneAndUpdate({ _id: new ObjectID("5ae76d3d0d4acebe4a280282") }, { $set: { completed: true } }, { returnOriginal: false })
    //   .then(result => console.log(result));

    db
        .collection('Users')
        .findOneAndUpdate({_id: new ObjectID('5ae777be0d4acebe4a2805b9') }, { $inc: { "age": 1 } }, {returnOriginal: false })
        .then(result => console.log(result));

    // client.close();
});