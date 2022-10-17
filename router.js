const express = require('express');
const { get } = require('http');
const router = express.Router();
const examplecontroller = require ('./controllers/examplecontroller');

router.get('/', examplecontroller.home);

router.get('/info', examplecontroller.info);

router.get('/bio', (req, res) => {
    return res.send('Fauzi')
});


router.get('/product/:id', examplecontroller.getProductById);
router.get('/product', examplecontroller.product);
router.post('/login', examplecontroller.login);

module.exports = router;