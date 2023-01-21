const express = require("express");
const mongoose = require("mongoose"); 
const cors = require ("cors")

const userRoutes = require("./routes/userRoute");
const authRoute = require('./routes/authRoute')
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute");
const orderRoute = require ("./routes/orderRoute");
const stripeRoute = require ("./routes/StripeRoute");

const sellerAuth = require ("./routes/SellerRoute/sellerAuth");
const sellerRoute = require("./routes/SellerRoute/sellerRoute")

const dotenv = require("dotenv");
dotenv.config();

const App= express();
const port = 5000;


// Database Connection
const mongoDB = 'mongodb+srv://umer:Swana123@cluster0.5fth5nu.mongodb.net/shop?retryWrites=true&w=majority'
mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
 () => { console.log('DB Connection Successful') },
 err => { console.log('There is problem while connecting database ' + err) }
 );


App.use(cors());
App.use('/uploads', express.static('uploads'))
// Routes 

App.use(express.json());
App.use("/Astro/auth", authRoute);
App.use("/Astro/users", userRoutes);
App.use("/Astro/products", productRoute);
App.use("/Astro/carts", cartRoute)
App.use("/Astro/orders", orderRoute)
App.use("/Astro/checkout", stripeRoute)

App.use("/Astro/seller/auth", sellerAuth);
App.use("/Astro/seller/users", sellerRoute);

// Server
App.listen(port, ()=>{
    console.log("Server started at port: " + port )
})