require('dotenv').config();
const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
server.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
})
}).catch(error => console.error(error))
