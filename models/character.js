javascript
const mongoose = require('mongoose');
​
const characterSchema = new mongoose.Schema({
 name: String,
 character: String,
 outfit: {
    top: String,
    bottom: String,
    shoes: String,
 },
});
​
module.exports = mongoose.model('Character', characterSchema);
​


4. Create the API endpoints:

In `app.js`, add the following code to create the API endpoints:


javascript
const Character = require('./models/Character');
​
app.get('/characters', async (req, res) => {
 try {
   const characters = await Character.find().sort({ _id: -1 }).limit(5);
   res.json(characters);
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
});
​
app.post('/characters', async (req, res) => {
 const character = new Character({
   name: req.body.name,
   character: req.body.character,
   outfit: req.body.outfit,
 });
​
 try {
   await character.save();
   res.status(201).json(character);
 } catch (err) {
   res.status(400).json({ message: err.message });
 }
});
​