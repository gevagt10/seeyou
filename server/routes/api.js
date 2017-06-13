const express = require('express');
const router = express.Router();


router.get('/getLocation', function(req, res) {
  console.log("IN");
  return res.json({
    longitude:'3242343242',
    altitude:'fdfdfdf'
  })
  // res.send('api works');
});

/* GET api listing. */
router.get('/', function(req, res) {
  console.log("dffdfdfd")
  // res.send('api works');
});

module.exports = router;
