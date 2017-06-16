const express = require('express');
const router = express.Router();


router.get('/getLocation', function(req, res) {
  console.log("IN");
  return res.json({
    data: {
      longitude: 35.217018,
      latitude: 31.771959
    }
  })
  // res.send('api works');
});

/* GET api listing. */
router.get('/', function(req, res) {
  console.log("dffdfdfd")
  // res.send('api works');
});

module.exports = router;
