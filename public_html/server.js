var express = require('express'),
    app     = express(),
    news    = express.Router(),
    images  = express.Router(),
    port    = 3334,
    host    = "localhost";

var newsData = {
    items: [
        {"text":"Check out our other games @ FireHazard.us", "image":"/images/firehazard.png", "url":"http://www.firehazard.us", "unixDateTime": 1438206354829}
    ],
    now: +new Date()
};

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

news.get('/', function(req, res){
    res.json(newsData);
});

app.use('/news', news);

images.get('/:filename', function(req, res){
    res.sendFile(__dirname + "/images/" + req.params.filename);
});

app.use('/images', images);

app.listen(port);
console.log('Magic happens on port '+ port);