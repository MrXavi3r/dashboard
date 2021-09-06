const express = require('express')
const router = express.Router();

const {
    getTransactions,
    addTransaction,
    deleteTransaction
} 

router.route("/").get(getTransactions).post(addTransaction)
router.route("/:id").delete(deleteTransaction)
