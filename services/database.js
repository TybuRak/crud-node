const mongo = require('mongodb');

let MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://admin:ZAQ!2wsx@zawadzkicom.5l86h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database connected");
    db.close();
});
