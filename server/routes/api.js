const express = require('express');
const router = express.Router();
var extantion = require('path');
var fs = require('fs');
// Date and time
var moment = require('moment');
var jsonfile = require('jsonfile')
iconv  = require('iconv-lite');


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
        latitude: data.location.latitude,
        date: data.date
      }
    })
  });
});

router.post('/setLocation', function (req, res) {
  jsonfile.readFile('../seeyou/server/config/localdb.json', 'utf8', function (err, data) {
    // Update location
    data.location.longitude = req.body.longitude;
    data.location.latitude = req.body.latitude;
    data.date = moment().format("LLLL");
    fs.writeFile('../seeyou/server/config/localdb.json', JSON.stringify(data), 'utf8', function(err,data){
      return res.end()
    });
  });
  return res.json({
    result:"failed"
  })
});


router.get('/getContacs', function(req, res) {
  jsonfile.readFile('../seeyou/server/config/localdb.json', 'utf8', function (err, data) {
    return res.json({
      data: {
        contacs: data.contacs,
        date: data.date
      }
    })
  })
});

router.post('/setContacs', function (req, res) {
  //var utf8String = iconv.decode(new Buffer(req.body), "ISO-8859-1");
  //console.log(utf8String);
  jsonfile.readFile('../seeyou/server/config/localdb.json', 'utf8', function (err, data) {
    data.contacs = req.body.contacs;
    data.date = moment().format("LLLL");
    fs.writeFile('../seeyou/server/config/localdb.json', JSON.stringify(data),"utf8", function(err,data){
      return res.end();
    });
  });
  return res.json({
    result:"failed"
  })
});

router.post('/setPhoto', function (req, res) {
  //console.log(req.body.pic_0);
  var pic_0 = req.body.pic_0;
  if (pic_0) {
    createPictureFromBase64(pic_0, "back_pic")
  }
  var pic_1 = req.body.pic_1;
  if (pic_1) {
    createPictureFromBase64(pic_1, "front_pic")
  }
  return res.end();
  function createPictureFromBase64(path, picture) {
    var base64Data = path.replace(/^data:image\/png;base64,/, "");
    fs.writeFile('../seeyou/server/img/' + picture + ".png", base64Data, 'base64', function (err) {
      console.log(err);
    });
  }

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
        date: moment().format("LLLL")
      }
    })
  })
});




/* GET api listing. */
router.get('/', function(req, res) {
  console.log("dffdfdfd")
  // res.send('api works');
});


module.exports = router;
