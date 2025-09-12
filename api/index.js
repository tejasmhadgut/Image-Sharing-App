// Add the server code here
const express = require('express');
const app = express();

const dotenv = require('dotenv');

dotenv.config({ quiet: true });

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;