
/*
 * GET home page.
 */
var fs = require('fs');
exports.index = function(req, res){
  res.render('index', { title: 'MPJS' })
};

exports.view = function(req, res){
  console.log(req.params[0]);
  listafull = fs.readdirSync(req.params[0]);
  lista = new Array();
  for (item in listafull)
	{
		if (fs.statSync(req.params[0]+"/"+listafull[item]).isDirectory())
			lista.push(listafull[item]);
	}
  res.render('view', { title: 'MPJS', items : lista })
};

exports.notfound = function(req, res){
  res.render('404',{ title: '404 Not Found'})
};
