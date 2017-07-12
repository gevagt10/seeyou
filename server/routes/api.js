const express = require('express');
const router = express.Router();
var extantion = require('path');
var fs = require('fs');
// Date and time
var moment = require('moment');
var jsonfile = require('jsonfile')



router.get('/getAction', function(req, res) {
  jsonfile.readFile('../seeyou/server/config/localdb.json', 'utf8', function (err, data) {
    console.log(data.action);
    return res.json(data.action)
  });
});

router.get('/getLocation', function(req, res) {
  console.log("Location");
  jsonfile.readFile('../seeyou/server/config/localdb.json', 'utf8', function (err, data) {
    //console.log(data.location.latitude);
    return res.json({
      data: {
        longitude: data.location.longitude,
        latitude: data.location.latitude
      }
    })
  });
});

router.post('/setLocation', function (req, res) {
  jsonfile.readFile('../seeyou/server/config/localdb.json', 'utf8', function (err, data) {
    // Update location
    data.location.longitude = req.body.longitude;
    data.location.latitude = req.body.latitude;
    //console.log(JSON.stringify(data));
    fs.writeFile('../seeyou/server/config/localdb.json', JSON.stringify(data), 'utf8', function(err,data){
      return res.status(200)
    });
  });
  return res.status(200)
});

router.get('/getPhoto', function(req, res) {
  // console.log("Photo");
  // var fileExt = extantion.extname('../server/img/site.jpg').split('.').pop();
  // console.log(fileExt);
  var filename = '../seeyou/server/img/site.jpg';
  fs.readFile(filename, function (err, data) {
    if (err) {
      return res.status(400)
    }
    var base64image = new Buffer(data).toString('base64');
    return res.json({
      data: {
        image: base64image,
        date: moment().format()
      }
    })
  })
});

router.get('/getFunction', function(req, res) {
  jsonfile.readFile('../seeyou/server/config/localdb.json', 'utf8', function (err, data) {
    //console.log(data.location.latitude);
    return res.json({
      action: data.action
    })
  });
});


/* GET api listing. */
router.get('/', function(req, res) {
  console.log("dffdfdfd")
  // res.send('api works');
});


module.exports = router;
