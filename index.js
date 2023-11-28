const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product.js');

main().catch(err => console.log(err));

async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
        console.log("mongo connection open!");
    }
    catch(err) {
        console.log("oh no!", err);
    }
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('woof');
})

app.listen(3000, () => {
    console.log('listening on this port');
})