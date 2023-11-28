const Product = require('./models/product');
const mongoose = require('mongoose');

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

const p = new Product({
    name: 'ruby grapefruit',
    price: 1.99, 
    category: 'fruit'
})

p.save().then(p =>{
    console.log(p);
})
.catch(e => {
    console.log(e)
})

const seedProducts = [
    {
        name: 'Fairy eggplant', 
        price: 1.00, 
        category: 'vegetable'
    },
    {
        name: 'organic goddess melon', 
        price: 4.99, 
        category: 'fruit'
    },
    {
        name: 'organic seedless watermelon', 
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'organic celery',
        price: 1.50, 
        category: 'vegetable'
    },
    {
        name: 'chocolate whole milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })