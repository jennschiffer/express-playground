var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('page', 
    {
      title: 'example page'
    }
  );
});

module.exports = router;