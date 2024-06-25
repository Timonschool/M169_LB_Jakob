const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'notes_app';

// Demodaten
const demoData = [
  { name: "Einkaufsliste", content: "Brot \nMilch \nNutella" },
  { name: "ToDos", content: "Hunde füttern \nGassi gehen \nPfoten putzen" }
];

async function insertDemoData() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);

    await db.collection('notes').insertMany(demoData);
    
    console.log("Demodaten erfolgreich eingefügt.");
  } catch (error) {
    console.error("Fehler beim Einfügen der Demodaten:", error);
  } finally {
    await client.close();
  }
}

insertDemoData();