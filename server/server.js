const express = require('express');
const cors = require('cors');
const db=require('../server/db/db-connection.js');
const path= require('path');

const app = express();

//Set the port that you want the server to run on
const PORT = process.env.PORT || 5000;

//creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from ExpressJS' });
});

//create the get request
app.get('/blogpost',cors(), async (req,res)=> {
  try{
    const { rows:post} = await db.query('SELECT * FROM posts');
    res.send(posts);
  } catch (e){
    return res.status(400).json({e});
  }
});


// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});