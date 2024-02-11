const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
    item: { type: String, required: true },
    price: { type: mongoose.Schema.Types.Decimal128, required: true },
    quantity: { type: Number, default: 0 },
    total: { type: mongoose.Schema.Types.Decimal128, default: 0 },
    amountPaid: { type: mongoose.Schema.Types.Decimal128, default: 0 },
    change: { type: mongoose.Schema.Types.Decimal128, default: 0 },
    status: { type: String, enum: ['pending', 'paid'], default: "pending" },
})
const Payments = new mongoose.model("Payments", PaymentSchema)
module.exports = Payments