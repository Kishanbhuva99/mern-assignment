const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to read JSON data (important for POST requests)
app.use(express.json());

/**
 * 1. BASIC SERVER SETUP 
 * Respond with "Welcome to Express!" at the root route (/)
 */
app.get('/', (req, res) => {
    res.send("Welcome to Express! This is the Home Page.");
});

/**
 * 2. HANDLING QUERY STRINGS
 * URL Example: http://localhost:3000/search?user=Kishan
 */
app.get('/search', (req, res) => {
    const username = req.query.user; // 'user' is the key in the URL
    res.send(`Query Parameter Received: Hello, ${username}!`);
});

/**
 * 3. HANDLING REQUEST PARAMETERS
 * URL Example: http://localhost:3000/profile/101
 */
app.get('/profile/:id', (req, res) => {
    const userId = req.params.id; // ':id' is the parameter
    res.send(`Request Parameter Received: Viewing Profile for ID ${userId}`);
});

/**
 * 4. ADDITIONAL ROUTES (POST & DELETE)
 * Required by assignment: "at least three routes"
 */
app.post('/submit', (req, res) => {
    res.json({
        message: "POST request successful!",
        receivedData: req.body
    });
});

app.delete('/delete-item/:id', (req, res) => {
    res.send(`DELETE request successful for Item ID: ${req.params.id}`);
});

/**
 * 5. START SERVER
 * Log a message indicating the server has started
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});