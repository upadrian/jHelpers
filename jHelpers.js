/*
 * jHelpers
 * Colección de helpers para jQuery y javascript.
 * Las funciones se acceden mediante Helpers.<function>() ... 
 * Algunas se instancian vía prototype como ltrim para Strings
 * Author: upadrian@gmail.com 2012
 * Versión: 1.1 20130502
 *	- agregado compareDates
 * Versión: 1.0 20120629
 * 
 * 
 * */
function jHelpers(){
	// Source: http://stackoverflow.com/questions/497790
	this.compareDates = {
	    convert:function(d) {
	        // Converts the date in d to a date-object. The input can be:
	        //   a date object: returned without modification
	        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
	        //   a number     : Interpreted as number of milliseconds
	        //                  since 1 Jan 1970 (a timestamp) 
	        //   a string     : Any format supported by the javascript engine, like
	        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
	        //  an object     : Interpreted as an object with year, month and date
	        //                  attributes.  **NOTE** month is 0-11.
	        return (
	            d.constructor === Date ? d :
	            d.constructor === Array ? new Date(d[0],d[1],d[2]) :
	            d.constructor === Number ? new Date(d) :
	            d.constructor === String ? new Date(d) :
	            typeof d === "object" ? new Date(d.year,d.month,d.date) :
	            NaN
	        );
	    },
	    compare:function(a,b) {
	        // Compare two dates (could be of any type supported by the convert
	        // function above) and returns:
	        //  -1 : if a < b
	        //   0 : if a = b
	        //   1 : if a > b
	        // NaN : if a or b is an illegal date
	        // NOTE: The code inside isFinite does an assignment (=).
	        return (
	            isFinite(a=this.convert(a).valueOf()) &&
	            isFinite(b=this.convert(b).valueOf()) ?
	            (a>b)-(a<b) :
	            NaN
	        );
	    },
	    inRange:function(d,start,end) {
	        // Checks if date in d is between dates in start and end.
	        // Returns a boolean or NaN:
	        //    true  : if d is between start and end (inclusive)
	        //    false : if d is before start or after end
	        //    NaN   : if one or more of the dates is illegal.
	        // NOTE: The code inside isFinite does an assignment (=).
	       return (
	            isFinite(d=this.convert(d).valueOf()) &&
	            isFinite(start=this.convert(start).valueOf()) &&
	            isFinite(end=this.convert(end).valueOf()) ?
	            start <= d && d <= end :
	            NaN
	        );
	    }
	}
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

var jHelpers = new jHelpers();
