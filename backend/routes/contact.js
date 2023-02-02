const express=require('express');
const { addContact, getAllContacts, deleteContact, updateContact, getOneContact } = require('../controllers/contactController');
const router=express.Router();


router.post("/addcontact",addContact);  

router.get("/allcontacts",getAllContacts);

router.delete("/deleteContact/:id",deleteContact);

router.put("/updateContact/:id",updateContact );

router.get("/getOneContact/:id",getOneContact );

module.exports = router;