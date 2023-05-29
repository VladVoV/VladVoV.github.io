const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://vladvojch:DijavVDLMRvhogtm@cluster0.z6gxgmw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const connect = async () => {
    try {
        await client.connect();
        console.log('Successfully connected!');

        return client.db("project");
    } catch (error) {
        console.error('Connection to MongoDB Atlas failed!', error);
    }
};

const close = async () => {
    try {
        await client.close();
        console.log('Connection closed!');
    } catch (err) {
        console.error('Connection closed error: ', err);
    }
};

module.exports = {
    connect,
    close
};
