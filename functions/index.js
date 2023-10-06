
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRET);

const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
	const total = req.query.total;

	// console.log("Payment Request Recieved for this amount >>> ", total);
  try{
const paymentIntent = await stripe.paymentIntents.create({
		amount: parseInt(total), // subunits of the currency
		currency: "usd",
	});

	// OK - Created
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
  }catch(error) {
    console.log(error.message)
   res.status(500).send("something went wrrong");
  }
	
});

app.listen(4000, (err) => {
	if (!err) {
		console.log("server runninig 4000");
	}
});
