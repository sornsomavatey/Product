const express = require('express');
 const app = express();
 const port = 5002
 app.get('/productview', (req, res) => {
 return res.json([
 { id: 1, product: "MILK", quantity: 10 },
 { id: 2, product: "BREAD", quantity: 15 },
 { id: 3, product: "EGG", quantity: 20 },
 { id: 4, product: "CHIPS", quantity: 12 },
 ])
 })
 app.listen(port, () => {
 console.log('PRODUCT Service Server is running on PORT NO: ', port)
 })
