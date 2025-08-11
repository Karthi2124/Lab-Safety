const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000; // You can change this
const url = "mongodb://localhost:27017"; // MongoDB URL
const dbName = "lab_safety"; // Your DB name

app.get("/safety", async (req, res) => {
    try {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const data = await db.collection("safety").find().toArray();
        res.json(data);
        client.close();
    } catch (err) {
        res.status(500).send(err.toString());
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
