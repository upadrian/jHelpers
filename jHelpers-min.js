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
function jHelpers(){this.compareDates={convert:function(e){return e.constructor===Date?e:e.constructor===Array?new Date(e[0],e[1],e[2]):e.constructor===Number?new Date(e):e.constructor===String?new Date(e):typeof e==="object"?new Date(e.year,e.month,e.date):NaN},compare:function(e,t){return isFinite(e=this.convert(e).valueOf())&&isFinite(t=this.convert(t).valueOf())?(e>t)-(e<t):NaN},inRange:function(e,t,n){return isFinite(e=this.convert(e).valueOf())&&isFinite(t=this.convert(t).valueOf())&&isFinite(n=this.convert(n).valueOf())?t<=e&&e<=n:NaN}};this.getRandomNumber=function(e,t){return Math.random()*(t-e)+e};this.getRoundRandomNumber=function(e,t){return Math.floor(this.getRandomNumber(e,t))};if(String.prototype.ltrim==null)String.prototype.ltrim=function(e){return this.replace(new RegExp("^["+(e||"\\s")+"]+","g"),"")};if(String.prototype.rtrim==null)String.prototype.rtrim=function(e){return this.replace(new RegExp("["+(e||"\\s")+"]+$","g"),"")};if(String.prototype.trim==null)String.prototype.trim=function(e){return this.ltrim(e).rtrim(e)};this.guessFileTypeFromFileInput=function(e){if(typeof e=="undefined")return null;if(e instanceof jQuery)e=e.get(0);if(!jQuery.browser.msie)try{return e.files[0].type?e.files[0].type:null}catch(t){return null}else{try{var n=$(e).val().split(".");var r=n[n.length-1].toLowerCase();return r=="csv"||r=="txt"?"text/plain":null}catch(t){return null}}}}var jHelpers=new jHelpers
