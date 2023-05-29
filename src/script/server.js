const express = require('express');
const path = require('path');
const { connect, close } = require('./connection');

const app = express();
const port = 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../..', 'dist')));
app.use('/laptop-images', express.static(path.join(__dirname, '../images/laptop-images/')));
app.use('/smartphone-images', express.static(path.join(__dirname, '../images/smartphone-images/')));
app.use('/pc-images', express.static(path.join(__dirname, '../images/pc-images/')));
app.use('/gadget-images', express.static(path.join(__dirname, '../images/gadget-images/')));
app.use('/tablet-images', express.static(path.join(__dirname, '../images/tablet-images/')));
app.use('/about-images', express.static(path.join(__dirname, '../images/')));

app.use((req, res, next) => {
    res.set('Cache-Control', 'public, max-age=300');
    next();
});

app.get('/data-laptops', async (req, res) => {
    try {
        const db = await connect();
        const laptopCollection = db.collection('laptops-items');

        const allLaptopModels = await laptopCollection.find({}).toArray();
        res.json(allLaptopModels);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data from the database' });
    } finally {
        await close();
    }
});
app.get('/data-smartphones', async (req, res) => {
    try {
        const db = await connect();
        const smartphoneCollection = db.collection('smartphone-items');

        const allSmartphoneModels = await smartphoneCollection.find({}).toArray();
        res.json(allSmartphoneModels);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data from the database' });
    } finally {
        await close();
    }
});
app.get('/data-pc', async (req, res) => {
    try {
        const db = await connect();
        const computerCollection = db.collection('computer-items');

        const allComputerModels = await computerCollection.find({}).toArray();
        res.json(allComputerModels);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data from the database' });
    } finally {
        await close();
    }
});
app.get('/data-gadget', async (req, res) => {
    try {
        const db = await connect();
        const gadgetCollection = db.collection('gadget-items');

        const allGadgetModels = await gadgetCollection.find({}).toArray();
        res.json(allGadgetModels);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data from the database' });
    } finally {
        await close();
    }
});
app.get('/data-tablet', async (req, res) => {
    try {
        const db = await connect();
        const tabletCollection = db.collection('tablet-items');

        const allTabletModels = await tabletCollection.find({}).toArray();
        res.json(allTabletModels);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data from the database' });
    } finally {
        await close();
    }
});
app.get('/home', async (req, res) => {
    try {
        const db = await connect();

        const laptopsCollection = db.collection('laptops-items');
        const tabletsCollection = db.collection('tablet-items');
        const smartphoneCollection = db.collection('smartphone-items');
        const gadgetsCollection = db.collection('gadget-items');
        const computersCollection = db.collection('computer-items');

        const getRandomItems = async () => {
            const randomLaptops = await laptopsCollection.aggregate([{ $sample: { size: 1 } }]).toArray();
            const randomTablets = await tabletsCollection.aggregate([{ $sample: { size: 1 } }]).toArray();
            const randomSmartphones = await smartphoneCollection.aggregate([{ $sample: { size: 1 } }]).toArray();
            const randomGadgets = await gadgetsCollection.aggregate([{ $sample: { size: 1 } }]).toArray();
            const randomComputers = await computersCollection.aggregate([{ $sample: { size: 1 } }]).toArray();

            return [...randomLaptops, ...randomTablets, ...randomGadgets, ...randomComputers, ...randomSmartphones];
        };

        const randomItems = await getRandomItems();

        const shuffledItems = randomItems.sort(() => 0.5 - Math.random());

        const selectedItems = shuffledItems.slice(0, 4);

        res.set('Cache-Control', 'no-store');
        res.json(selectedItems);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve data from the database' });
    } finally {
        await close();
    }
});
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const db = await connect();
        const userCollection = db.collection('users');
        const users = await userCollection.find().toArray();

        const matchingUser = users.find(user => user.email === email && user.password === password);

        if (matchingUser) {
            res.json({ success: true, message: 'Login successful', loggedIn: true });
        } else {
            res.json({ success: false, message: 'Invalid credentials', loggedIn: false });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    } finally {
        await close();
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


