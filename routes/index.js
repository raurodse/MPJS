
/*
 * GET home page.
 */
var fs = require('fs');
var spawn = require('child_process').spawn;
var sqlite3 = require('sqlite3');
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
  var filepath = req.params[0];
  var command = spawn('mplayer',[filepath]);
  var command_output = new Array();
  var db = new sqlite3.Database("databases/core.db",function(code){
        if(code != null){
                //create database file and initialize database
                console.log("Creating database");
        }
        });
  command.on('exit',function(code)
             {
    	      var lastsecond = command_output[command_output.length - 1];
    	      if (parseFloat(lastsecond) < 1)
              {
        	lastsecond = command_output[command_output.length - 2];
              }
              db.run("INSERT INTO list VALUES (?,?)",[filepath,lastsecond]);
              res.write(lastsecond);
              res.end("\nFinish");
              })
  command.stdout.on('data',function(data)
                    {
                      var needle_start = / V: /;
                      var needle_end = / A-V:/;
                      var utf8_output = data.toString('utf8');
                      var start_index = utf8_output.match(needle_start);
                      if ( start_index != null)
                      {
                        var start_index = start_index['index'];
            			var end_index = utf8_output.match(needle_end)['index'];
                        start_index += 4;
                        command_output.push(utf8_output.substr(start_index,end_index - start_index));
                      }
                      
                      });
  res.writeHead(200,{'Content-Type': 'text/plain'});
  res.write("Play " + req.params[0] + " ... ");
}

