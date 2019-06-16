/*
 * @file: app.js
 * @description: It Contain server setup.
 * @author: Jasdeep Singh
 */
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
const app = express();

// Run react build setup
app.use(express.static('./build'));
app.get('/*', (req, res) => {
    return res.sendFile(path.join('./build', 'index.html'));
  })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json());

// Server starting point
app.listen(3002, () => {
    console.log('server is running on port 3002')
});