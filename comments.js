// Create web server and handle comments requests

var express = require('express');
var bodyParser = require('body-parser');
var Comments = require('./comments.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET request for all comments
app.get('/comments', function(req, res) {
  res.send(Comments.getComments());
});

// Handle POST request to add a new comment
app.post('/comments', function(req, res) {
  if (req.body) {
    Comments.addComment(req.body);
    res.send('Comment added');
  } else {
    res.send('No comment sent');
  }
});

// Handle DELETE request to delete a comment
app.delete('/comments', function(req, res) {
  if (req.body) {
    Comments.deleteComment(req.body);
    res.send('Comment deleted');
  } else {
    res.send('No comment sent');
  }
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});