
/*
 * GET home page.
 */
var fs = require('fs');
var spawn = require('child_process').spawn;
exports.index = function(req, res){
  res.render('index', { title: 'MPJS' })
};




exports.view = function(req, res){
  if (typeof req.params[0] != 'undefined' && req.params[0] != ''){
    var rootpath = req.params[0];
    listafull = fs.readdirSync(req.params[0]);
    var directories = new Array();
    var files = new Array();
    for (item in listafull)
      {
          if (fs.statSync(req.params[0]+"/"+listafull[item]).isDirectory())
              directories.push(listafull[item]);
          else
              files.push(listafull[item]);
      }
      directories.sort();
      files.sort();
    res.render('view', { title: 'MPJS',rootpath: rootpath , directories : directories, files : files })
  }
  else{
	res.render('404',{title: '404 Not Found'});
  }
};

exports.notfound = function(req, res){
  res.render('404',{ title: '404 Not Found'})
};


exports.play = function(req,res)
{
  var command = spawn('mplayer',[req.params[0]]);
  var command_output = new Array();
  command.on('exit',function(code)
             {
              for(item in command_output)
              {
                res.write(command_output[item]);
              }
              res.end("Finish");
              })
  command.stdout.on('data',function(data)
                    {
                      command_output.push(data.toString('utf8'));
                      });
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.write("Play " + req.params[0] + " ... ");
}

