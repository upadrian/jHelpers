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
function jHelpers(){this.getRandomNumber=function(a,b){return Math.random()*(b-a)+a};this.getRoundRandomNumber=function(a,b){return Math.floor(this.getRandomNumber(a,b))};if(String.prototype.ltrim==null)String.prototype.ltrim=function(a){return this.replace(new RegExp("^["+(a||"\\s")+"]+","g"),"")};if(String.prototype.rtrim==null)String.prototype.rtrim=function(a){return this.replace(new RegExp("["+(a||"\\s")+"]+$","g"),"")};if(String.prototype.trim==null)String.prototype.trim=function(a){return this.ltrim(a).rtrim(a)};this.guessFileTypeFromFileInput=function(a){if(typeof a=="undefined")return null;if(a instanceof jQuery)a=a.get(0);if(!jQuery.browser.msie)try{return a.files[0].type?a.files[0].type:null}catch(b){return null}else{try{var c=$(a).val().split(".");var d=c[c.length-1].toLowerCase();return d=="csv"||d=="txt"?"text/plain":null}catch(b){return null}}}}var jHelpers=new jHelpers