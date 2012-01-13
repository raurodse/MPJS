
/*
 * GET home page.
 */
var fs = require('fs');
exports.index = function(req, res){
  res.render('index', { title: 'MPJS' })
};

exports.view = function(req, res){
  
  res.render('view', { title: 'MPJS', items : lista })
};

exports.notfound = function(req, res){
  res.render('404',{ title: '404 Not Found'})
};