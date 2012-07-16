/*
 * jHelpers
 * Colección de helpers para jQuery y javascript.
 * Las funciones se acceden mediante Helpers.<function>() ... 
 * Algunas se instancian vía prototype como ltrim para Strings
 * Author: upadrian@gmail.com 2012
 * Versión: 1.0 20120629
 * 
 * 
 * */
function Helpers(){
	//Return random number between min and max
	this.getRandomNumber = function(min,max){
		return Math.random() * (max-min) + min;
	}
	//Return round random integer between min and max
	this.getRoundRandomNumber = function(min,max){
		return Math.floor(this.getRandomNumber(min,max));
	}
	//ltrim
	if (String.prototype.ltrim == null) 
		String.prototype.ltrim = function(chars) {
			return this.replace(new RegExp("^[" + (chars || "\\s") + "]+", "g"), "");
		}
	//rtim
	if (String.prototype.rtrim == null) 
		String.prototype.rtrim = function(chars) {
			return this.replace(new RegExp("[" + (chars || "\\s") + "]+$", "g"), "");
		}
	//trim
	if (String.prototype.trim == null) 
		String.prototype.trim = function(chars) {
			return this.ltrim(chars).rtrim(chars);
		}
	//guessFileTypeFromFileInput
    this.guessFileTypeFromFileInput = function(fileInput){
		if(typeof(fileInput)=="undefined") return null;
		//es fileInput un elemento jquery o es un elemento del DOM? si es jQuery, traemos el elemento dom
		if(fileInput instanceof jQuery)
			fileInput = fileInput.get(0);
		//si no es internet explorer, vamos por la mejor:
		if(!jQuery.browser.msie)
			try{
				return (fileInput.files[0].type)?fileInput.files[0].type:null;
			}catch(e){
				return null;		
			}
		else {
			//la complicada
			try{
				var parts = $(fileInput).val().split(".");
				var ext = parts[parts.length-1].toLowerCase();
				return (ext == "csv" || ext == "txt")?"text/plain":null;
			}catch(e){
				return null;
			}
		}        
	}
		
}

var Helpers = new Helpers();