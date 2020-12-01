const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require('compression')
const enforce = require('express-sslify')
const mongoose = require('mongoose');
const { Timestamp } = require("mongodb");
const { type } = require("os");
// import {Order} from './mongo.connect'
const Order = require('./mongo.connect')

// const compression = require("compression");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//move .env file to root folder
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//const stripe = require("stripe")("sk_test_51HQaUrGWA7DG3ivY5a3JznHZZovUwRazP4SUXrKm0wqAlDr2SDDUXmYuG2q87xoKjP9JKfhrEcJKRyEjbmGLasPs00rQCRl6zv")

const app = express();
const port = process.env.PORT || 9860;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


if (process.env.NODE_ENV === "production") {
  // app.use(compression);
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });



// mongoose.connect('mongodb+srv://level9Nine99:shwdbhgAHGF$$@cluster0.mygli.mongodb.net/order?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useCreateIndex: true
// })

// var orderSchema =  mongoose.Schema({
//   userId: {
//     type: String
//   },
//   userInfo: {
//     type: Object
//   },
//   cart:{
//     type: Object
//   },
//   time: {
//     type: Date
//   },
//   status: {
//     type: Number
//   }
// });

// const Order = mongoose.model('orderList2', orderSchema)

app.post("/orders", (req, res) => {
  if(req.body.userId) {
    Order.find({userId: req.body.userId})
    .sort({time: -1})
    .then((orders) => {
      console.log(orders)
      res.send(orders)
    })
  }
})

app.post("/delete", async (req, res) => {
  // res.send(req.body._id)
  if(req.body._id) {
    try {
      const toDelete = await Order.findByIdAndUpdate(req.body._id, {status: 2})
      if(!toDelete) {
        return res.send("Error Occured Again!")
      }
      res.send("Order Cancelled Successfully!")
    }catch(e) {
      res.send("Error Occured!")
    }
  }
})





app.post("/test", (req, res) => {

  Order.find({})
    .sort({time: -1})
    .limit(1)
    .then((data) => {
      // console.log(data[0].orderId)

      const newOrder = new Order({
        userId: req.body.userDetails.id,
        userInfo: req.body.userDetails,
        cart: req.body.cart,
        time: new Date(),
        status: 0,
        total: req.body.total,
        orderId: data[0].orderId + 1
      })

      newOrder.save().then((order) => {
        // console.log(order)
      }).catch((e) => {                          
        console.log(e)
      })


    })


  // console.log(`HERE look -> ${req.body.cart}`)

  // Order.find({})
  // .sort({time: -1})
  // .then((users) => {
  //   console.log(users)
  // })

  console.log('hello kitty!')
  res.send('hello baby')
})



app.post("/payment", (req, res) => {


  console.log('Backend is Working!')


  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr",
  };

  

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: body });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});


app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Example app listening at http://localhost:${port}`)
});