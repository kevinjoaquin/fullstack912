const express = require('express');
const app = express();
const port = 3000; // You can choose any available port you like

// Define a route that responds with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/productos', (req, res) => {
    res.send({
        cuantity:2,
        items:['item_1','item_2']
    });
  });
// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});