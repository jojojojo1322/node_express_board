var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('form', {
        name: 'cho hyeonjae',
        blog: 'www.naver.com',
        homepage: 'www.naver.com'
    });
});

router.post('/',function(req,res,next){
    res.json(req.body);
})


module.exports = router;
