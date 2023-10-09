avascript
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
​
const app = express();
​
app.use(bodyParser.json());
​
mongoose.connect('mongodb://localhost/children-game', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
});
​
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('Connected to MongoDB');
});
​
app.listen(3000, () => {
 console.log('Server is running on port 3000');
});
​