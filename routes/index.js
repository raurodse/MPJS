
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};
exports.notfound = function(req, res){
  res.render('404',{ title: '404 Not Found'})
};