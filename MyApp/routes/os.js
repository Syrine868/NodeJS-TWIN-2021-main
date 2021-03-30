var express = require('express');
var router = express.Router();
var os=require('os');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json(
        {
            hostname : os.hostname(), 
            type: os.type(),
            platform: os.platform()
        }
    );
    res.end();
});


router.get('/cpus/:id', function(req, res, next) {
    res.json(
      os.cpus()[req.params.id]
    );
    res.end();
});
module.exports = router;
