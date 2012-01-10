var miservidor = require("server");
var router = require("router");
var requestHandlers = require("requestHandlers");
var handler = {}
handler['/'] = requestHandlers.iniciar;
handler['/iniciar'] = requestHandlers.iniciar;
handler['/subir'] = requestHandlers.subir;
miservidor.iniciar(router.router,handler);
