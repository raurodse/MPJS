var fs = require("fs");
var hash = require('/usr/lib/node_modules/hash_file')
var lista = fs.readdirSync("/home/kbut");
hash("/home/kbut/01.mp4","md5",function(err,data){console.log(data)});
/*for(x in lista)
{
	console.log("\nnombre: "+ lista[x] + " tiene un md5 que es "+hash("/home/kbut"+lista[x],"md5",function(err,data){console.log(data)}));
}*/
