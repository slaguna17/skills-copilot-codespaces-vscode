// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments.getAll());
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
    res.json(comments.get(req.params.id));
});

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = comments.add(req.body);
    res.json(comment);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
    const comment = comments.update(req.params.id, req.body);
    res.json(comment);
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    comments.delete(req.params.id);
    res.json(null);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});