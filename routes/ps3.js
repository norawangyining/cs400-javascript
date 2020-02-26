var express = require('express');
var router = express.Router();


/* GET */
router.get('/', function(req, res, next){
    res.render('ps3',
        {
        string: "Test string."
        })
});

/* POST */

router.post('/',function(req,res,next){
    let returnStr = req.body.returnStr;
    res.render('ps3',
        {
            OriginalString:returnStr,
            Stringlength:returnStr.length

        })
});




module.exports = router;