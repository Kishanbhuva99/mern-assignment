const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to allow the server to read JSON data from requests
app.use(express.json());

// In-memory "Database"
let items = [
    { id: 1, name: "Item One" },
    { id: 2, name: "Item Two" }
];

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/items', (req, res) => {
    res.status(200).json(items);
});

app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(i => i.id === id);

    if (item) {
        item.name = req.body.name; // Update the name
        res.json(item);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
});

app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    items = items.filter(i => i.id !== id);
    res.json({ message: `Item ${id} deleted successfully` });
});