var express = require('express');
var router = express.Router();
const blogs=require('../models/blogs')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('myblogs/blogs', { data: 'Information Blogs ' });
});
router.get('/add', function(req, res, next) {
  res.render('myblogs/addform', { data: 'Write Blogs ' });
});

module.exports = router;
