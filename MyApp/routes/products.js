var express = require('express');
var router = express.Router();
var products=require('../data/products.json');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    res.json(
        products[req.params.id]
    );
    res.end();
});
router.get('/total/:id/:qt', function(req, res, next) {
    res.json(
       
        {
            'id': req.params.id,
            'qt':  req.params.qt,
            'unit_price':  products[req.params.id].price,
            'total_price': req.params.qt * products[req.params.id].price
        }
    );
    res.end();
});

router.get('/search/instock/:qt', function(req, res, next) {
    var list=[];
    for (var i in products){
        console.log(products[i]);
        if (products[i].stock>req.params.qt){
            list.push(products[i]);
        }
    }
    
    res.json(list);
    res.end();
});

module.exports = router;
