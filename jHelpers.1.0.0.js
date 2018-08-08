/**
 * jHelpers v1.0.0: Javascript helpers collection
 * https://github.com/upadrian/jHelpers
 * @author upadrian
 * @version 1.0.0
 * @constructor
 */
function Jhelpers() {
  /**
   * Guess file type from file tag
   * @param fileInputTag
   * @returns {string} || {null}
   */
  this.guessFileTypeFromFileTag = function(fileInputTag) {
    if(typeof(fileInputTag) === "undefined") {
      return null;
    }
    if(fileInputTag && fileInputTag.files && fileInputTag.files[0] && fileInputTag.files[0].type) {
      return fileInputTag.files[0].type;
    } else {
      return null;
    }
  };
  /**
   * Source: http://stackoverflow.com/questions/497790
   * @type {{convert: jHelpers.compareDates.convert, compare: jHelpers.compareDates.compare, inRange: jHelpers.compareDates.inRange}}
   */
  this.compareDates = {
    /**
     * Converts the date in d to a date-object.
     * The input can be:
     *  a date object: returned without modification
     *  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
     *  a number     : Interpreted as number of milliseconds since 1 Jan 1970 (a timestamp)
     *  a string     : Any format supported by the javascript engine, like "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009"
     *  etc.
     *  an object     : Interpreted as an object with year, month and date attributes.  **NOTE** month is 0-11.
     * @param d
     * @returns {Date}
     */
    convert: function(d) {
      return (
        d.constructor ===
        Date
          ? d
          : d.constructor ===
            Array
          ? new Date(d[0], d[1], d[2])
          : d.constructor ===
            Number
              ? new Date(d)
              : d.constructor ===
                String
              ? new Date(d)
              : typeof d ===
                "object"
                  ? new Date(d.year, d.month, d.date)
                  : NaN
      );
    },
    /**
     * Compare two dates (could be of any type supported by the convert function above) and returns:
     *  -1 : if a < b
     *  0 : if a = b
     *  1 : if a > b
     *  NaN : if a or b is an illegal date
     *  NOTE: The code inside isFinite does an assignment (=).
     * @param a {Date}
     * @param b {Date}
     * @returns {*}
     */
    compare: function(a, b) {
      return (
        isFinite(a = this.convert(a).valueOf()) && isFinite(b = this.convert(b).valueOf()) ? (a > b) - (a < b) : NaN
      );
    },
    /**
     * Checks if date in d is between dates in start and end.
     * Returns a boolean or NaN:
     *  true  : if d is between start and end (inclusive)
     *  false : if d is before start or after end
     *  NaN   : if one or more of the dates is illegal.
     *  NOTE: The code inside isFinite does an assignment (=).
     * @param d {Date}
     * @param start {Date}
     * @param end {Date}
     * @returns {*}
     */
    inRange: function(d, start, end) {
      return (
        isFinite(d = this.convert(d).valueOf()) &&
        isFinite(start = this.convert(start).valueOf()) &&
        isFinite(end = this.convert(end).valueOf())
          ? start <=
            d &&
            d <=
            end
          : NaN
      );
    }
  };
  /**
   * Return random number between min and max
   * @param min
   * @param max
   * @returns {number}
   */
  this.getRandomNumber = function(min, max) {
    return Math.random() * (max - min) + min;
  };
  //
  /**
   * Return round random integer between min and max
   * @param min
   * @param max
   * @returns {number}
   */
  this.getRoundRandomNumber = function(min, max) {
    return Number(Math.round(this.getRandomNumber(min, max)));
  };
  /**
   * ltrim
   * @param chars {string}
   * @returns {string}
   */
  String.prototype.ltrim = function(chars) {
    return this.replace(new RegExp("^[" + (chars || "\\s") + "]+", "g"), "");
  };
  /**
   * rtrim
   * @param chars {string}
   * @returns {string}
   */
  String.prototype.rtrim = function(chars) {
    return this.replace(new RegExp("[" + (chars || "\\s") + "]+$", "g"), "");
  };
  /**
   * trim
   * @param chars {string}
   * @returns {string}
   */
  String.prototype.trim = function(chars) {
    return this.ltrim(chars).rtrim(chars);
  };
}

var jHelpers = new Jhelpers();
