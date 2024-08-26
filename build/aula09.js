"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias["quarta"]);
console.log(dias[3]);
const d = new Date();
console.log(d);
console.log(d.getDate());
console.log(d.getDay());
console.log(dias[d.getDay()]);
var cores;
(function (cores) {
    cores["branco"] = "#FFFFFF";
    cores["preto"] = "#000000";
    cores["vermelho"] = "#FF0000";
    cores["azul"] = "#0000FF";
    cores["verde"] = "#00FF00";
    cores["amarelo"] = "#FFFF00";
    cores["roxo"] = "#800080";
    cores["rosa"] = "#FFC0CB";
})(cores || (cores = {}));
console.log(cores.branco);
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["USER"] = 0] = "USER";
    tipoUsuario[tipoUsuario["ADMIN"] = 1] = "ADMIN";
    tipoUsuario[tipoUsuario["SUPERUSER"] = 2] = "SUPERUSER";
})(tipoUsuario || (tipoUsuario = {}));
const tp = tipoUsuario.ADMIN;
