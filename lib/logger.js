'use strict'

let clc = require("cli-color");

var error_ = clc.red.bold;
var warn_ = clc.yellow;
var debug_ = clc.blue;

function debug (msj){
	console.log(debug_(msj));
}

function error (msj){
	console.log(error_(msj));
}

function warn(msj){
	console.log(warn_(msj));
}

module.exports = {
	debug,
	error,
	warn
}