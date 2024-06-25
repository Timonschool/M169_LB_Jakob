const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'contacts_app';

// Demodaten für Kontakte
const demoContacts = [
  { firstname: "John", lastname: "Doe", phone: "123-456-7890", email: "john.doe@example.com" },
  { firstname: "Jane", lastname: "Smith", phone: "098-765-4321", email: "jane.smith@example.com" }
];

async function insertDemoContacts() {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db(dbName);

    await db.collection('contacts').insertMany(demoContacts);

    console.log("Demodaten erfolgreich eingefügt.");
  } catch (error) {
    console.error("Fehler beim Einfügen der Demodaten:", error);
  } finally {
    await client.close();
  }
}

insertDemoContacts();
