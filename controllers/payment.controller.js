const methods = require('../crudMethods');
const Payments = require('../models/payment');
module.exports = methods.crudController(Payments);
