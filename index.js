const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json())
app.use(express.urlencoded({ extended: true}))  

app.use(router);
app.listen(8000, () => {
    console.log(`server is running at ${8000}`)
});

