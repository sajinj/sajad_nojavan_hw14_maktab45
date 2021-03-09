var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/product:id', function(req, res, next) {
  // res.send(`product ${req.params.id}`);
  res.render('product', {productId:req.params.id});
});

module.exports = router;
