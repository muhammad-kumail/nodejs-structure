const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");
const router = express.Router();
const payment = require("../controllers/payment.controller");

router.route("/create").post(catchErrors(payment.create));
router.route("/read/:id").get(catchErrors(payment.read));
router.route("/update/:id").put(catchErrors(payment.update));
router.route("/delete/:id").delete(catchErrors(payment.delete));
router.route("/search").get(catchErrors(payment.search));
router.route("/list").get(catchErrors(payment.list));

module.exports = router;