const express = require("express");
const app = express();
const router = express.Router();
const apiController=require('../../controllers/apiController.js');
router.get('/create',apiController.createBooking);
router.get('/list',apiController.listBooking);
router.get("/update", apiController.updateBooking);
router.get("/delete", apiController.deleteBooking);
module.exports = router;
