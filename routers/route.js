// const express = require("express");
// const router = new express.Router();


// //call back 
// router.get('/', (req, res) => {
//     res.send("Welcome .....From Api");
// });

// router.get('/contacts/', (req, res) => {
//     res.send("Welcome .....From contacs");
// });

// // router.get("contacts/", (req, res, next) => {
// //     res.send("App  Contacts");

// // });

// module.exports = router;

// Ver. 3 ...........................

const express = require("express");
const router = new express.Router();


//call back 
router.get('/', (req, res) => {
    res.send("Welcome .....From Api");
});

router.get('/contacts/', (req, res) => {
    res.send("Welcome .....From contacs");
});

// router.get("contacts/", (req, res, next) => {
//     res.send("App  Contacts");

// });



module.exports = router;