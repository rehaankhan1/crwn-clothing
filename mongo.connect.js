const mongoose = require('mongoose');

//mongodb+srv://level9Nine99:shwdbhgAHGF$$@cluster0.mygli.mongodb.net/order?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})

var orderSchema =  mongoose.Schema({
  userId: {
    type: String
  },
  userInfo: {
    type: Object
  },
  cart:{
    type: Object
  },
  time: {
    type: Date
  },
  status: {
    type: Number
  },
  total: {
    type: Number
  },
  orderId: {
    type: Number
  }
});

const Order = mongoose.model('orderList2', orderSchema)

module.exports = Order