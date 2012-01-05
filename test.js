//var http = require('http');
var sys = require('util');
//var exec = require('child_process').exec;
var exec = require('child_process').spawn;
function puts(error,stdout,stderr)
{	
	var aux = stdout.split("\n");
	for( x in aux)
	{
		var index = aux[x].search(" V:");
		if( index != -1 )
		{
			var time = aux[x];
			sys.puts(time.substr(30));
		}
	}
	//sys.puts(stdout);
}

//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\n');
  var auxiliar = new Array();
  function getinfo(data)
  {
     auxiliar.push(data);
  }
  function actualiza(code)
  {
    sys.puts(code);
    sys.puts(auxiliar);
  }
  var x = exec("mplayer",["/home/kbut/01.mp4"]);
  x.stdout.on("data",getinfo);
  x.on("exit",actualiza)
  sys.puts(auxiliar.length);
//}).listen(1337, "127.0.0.1");
