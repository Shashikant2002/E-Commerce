const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"]
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [8, "Price Can't Exide 8 Character"]
    },
    rating: {
        type: Number,
        default: 0
    },
    image: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please Enter Product Category"]
    },
    stock: {
        type: Number, 
        required: [true, "Please Enter Product Stock"],
        maxLength: [4, "Stock Can't be exid 4 Character"],
        default: 1
    },
    numberOfReviews:{
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: [true, "Please Enter Your Review"]
            },
            rating:{
                type: Number,
                required: [true, "Please Enter Your Rating"]
            },
            comment:{
                type: String,
                required: [true, "Please Enter Your Comment"]
            },
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Product", productSchema);