const express = require("express");
const router = express.Router();

const PaymentListController = require("../controllers/paymentList.controller");
const paymentListController = new PaymentListController();

router.get(
    "/paymentList/:userId",
    paymentListController.findPaymentAll
);

module.exports = router;