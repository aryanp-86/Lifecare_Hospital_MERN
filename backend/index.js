const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors')
connectToMongo();

const app = express()
const port = 5000 || process.env.port;
app.use(cors());
app.use(express.json());
app.use('/api/auth/',require('./Routes/auth.js'));
app.listen(port, () => {
    console.log(`Web app listening at http://localhost:${port}`)
})