const express = require("express");
const app = express();
const router = express.Router();
const apiController=require('../../controllers/apiController.js');
router.post('/book',apiController.createBooking);
router.get('/',apiController.listBooking);
router.put("/:id", apiController.updateBooking);
router.delete("/:id", apiController.deleteBooking);
module.exports = router;
