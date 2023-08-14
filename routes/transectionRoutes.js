const express = require("express");
const { addTransection,getAllTransection} = require("../controllers/transectionController");

//router object
const router = express.Router();


router.post("/add-transection", addTransection);

router.post("/get-transection", getAllTransection);

module.exports = router;