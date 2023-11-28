const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product.js');
app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy'];


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

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products);
    res.render('products/index', {products});
})

app.get('/products/:id', async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    console.log(product);
    res.render('products/show', {product})
})


app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/dog', (req, res) => {
    res.send('woof');
})

app.listen(3000, () => {
    console.log('listening on this port');
})