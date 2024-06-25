const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

async function connectToMongo() {
    try {
        await client.connect();
        db = client.db('contacts_app');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}

connectToMongo();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/contacts', async (req, res) => {
    const contacts = await db.collection('contacts').find({}).toArray();
    res.json(contacts);
});

app.post('/contacts', async (req, res) => {
    const contact = req.body;
    await db.collection('contacts').insertOne(contact);
    res.status(201).send('Contact added successfully');
});

app.delete('/contacts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await db.collection('contacts').deleteOne({ _id: new ObjectId(id) }); 
        res.status(200).send('Contact deleted successfully');
    } catch (err) {
        console.error('Error deleting contact', err);
        res.status(500).send('Internal server error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
