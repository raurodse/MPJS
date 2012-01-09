var sys = require('util');
var exec = require('child_process').spawn;
var auxiliar = new Array();
var x = exec("mplayer",["/home/kbut/01.mp4"]);
var y = "";
x.stdout.on("data",escribedatos);
x.on("exit",function(data){console.log(y);})
function escribedatos(datos)
{
	var aux = datos.toString('utf8');
	if (aux.search("V: ") != -1)
	{
		y = aux.split(" ")[3];
	}
}