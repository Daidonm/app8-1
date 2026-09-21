const express = require('express'); 
const app = express(); 
const port = 8000; 

app.get('/', (req, res) => { 
  res.send(`
    <!doctype html> 
    <html> 
      <head> 
        <title>Hello World</title> 
      </head> 
      <body> 
        <h3>Welcome to Express.js</h3> 
        <b>Express.js Fast, unopinionated, minimalist<br> web framework for Node.js</b> 
      </body> 
    </html> 
  `);
}).listen(port, () => {
  console.log(`Server is running on port ` + port);
});