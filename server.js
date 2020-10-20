const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require('compression')

// const compression = require("compression");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//move .env file to root folder
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
//const stripe = require("stripe")("sk_test_51HQaUrGWA7DG3ivY5a3JznHZZovUwRazP4SUXrKm0wqAlDr2SDDUXmYuG2q87xoKjP9JKfhrEcJKRyEjbmGLasPs00rQCRl6zv")

const app = express();
const port = process.env.PORT || 5000;

app.use(compression())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  // app.use(compression);
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server is running on port " + port);
});

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