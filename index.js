'use strict'
/**
 * My simpler extention of the csv-parser projoects parse class
 * @author Michael Stoner <michael@stonerworks.co.uk>
 * @module csv-parser
 */

// include the project this is based on
const csvParse = require('csv-parse')

/**
 * Class representing a parser, does nothing,only extends the csv-parse Parser class
 * @extends node-csv-parse.Parser
*/
class CsvParser extends csvParse.Parser {
  /**
   * Constructor which passes the options to the csv-parse projects parse
   */
  constructor (opts = {}) {
    super(opts)
  }
}

module.exports = CsvParser
