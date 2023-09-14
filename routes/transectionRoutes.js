const express = require("express");
const { addTransection,getAllTransection , editTransection , deleteTransection}
         = require("../controllers/transectionController");

//router object
const router = express.Router();


router.post("/add-transection", addTransection);

router.post("/edit-transection",editTransection);

router.post("/delete-transection",deleteTransection);

router.post("/get-transection", getAllTransection);

module.exports = router;