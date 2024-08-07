const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

const url = "mongodb://127.0.0.1:27017";

const dbname = "proj-1";

mongoClient.connect(url, (err, res1) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected");

        const db = res1.db(dbname);

        // db.collection("users").insertOne({
        //     name: "Ali",
        //     age: 34
        // }, (err, data) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(data.insertedId);
        //     }
        // })

        // db.collection("users").insertOne({
        //     name: "Saeed",
        //     age: 51
        // }, (err, data) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(data.insertedId);
        //     }
        // })

        // db.collection("users").insertMany([
        //     {
        //         name: "Ahmed",
        //         age: 27
        //     },
        //     {
        //         name: "Saad",
        //         age: 27
        //     },
        //     {
        //         name: "Salim",
        //         age: 27
        //     },
        //     {
        //         name: "Hussam",
        //         age: 27
        //     },
        //     {
        //         name: "Khalid",
        //         age: 27
        //     },
        //     {
        //         name: "Abdallah",
        //         age: 34
        //     },
        //     {
        //         name: "Samira",
        //         age: 21
        //     },
        //     {
        //         name: "Mahamed",
        //         age: 34
        //     },
        //     {
        //         name: "Mansour",
        //         age: 21
        //     },
        //     {
        //         name: "Abdulaziz",
        //         age: 34
        //     }
        // ], (err, data) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(data.insertedCount);
        //     }
        // })



        // db.collection("users").find({ age: 27 }).toArray((err, data) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(data);
        //     }
        // })

        // db.collection("users").find({ age: 27 }).limit(3).toArray((err, data) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(data);
        //     }
        // })




        ///////////////////////////////////////////////////////////////////////////////////////////////

        //  $set name for the first 4

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a3") }, { $set: { name: "Fatma" } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a4") }, { $set: { name: "Hana" } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a5") }, { $set: { name: "Nada" } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a6") }, { $set: { name: "Sara" } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })

        ////////////////////////////////////////////////////////////////////////////////////

        //  $inc age for the first 4 of age 27

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a5") }, { $inc: { age: 4 } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a6") }, { $inc: { age: 4 } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a7") }, { $inc: { age: 4 } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })

        // db.collection('users').updateOne(
        //     { _id: mongodb.ObjectId("66b1c2bb3749fde97e9bb5a8") }, { $inc: { age: 4 } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })
        //////////////////////////////////////////////////////////////////////////////

        //  updateMany  inc age 10

        // db.collection('users').updateMany(
        //     { }, { $inc: { age: 10 } }
        // )
        //     .then((data1) => { console.log(data1.modifiedCount) })
        //     .catch((error) => { console.log(error) })



        //  deleteMany  age 41   ==>> deletedCount 


        db.collection('users').deleteMany(
            { age: 41 }
        )
            .then((data1) => { console.log(data1.deletedCount) })
            .catch((error) => { console.log(error) })
    }
})