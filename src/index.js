var isArray = require("core.is_array");

var ArraySlice = Array.prototype.slice;

module.exports = concat;

function concat() {

    var args = ArraySlice.call(arguments),
        len  = args.length,
        resultSet = [],
        index = -1,
        ta, taIndex, taLen;

    while(++index < len) {

        ta = arguments[ index ];

        if (!isArray(ta)) {

            throw new TypeError("concat argument " + (index + 1) + " must be an array is '"  + typeof(ta) + "'");

        }

        taLen = ta.length, taIndex = -1;

        while(++taIndex < taLen) {

            resultSet[ resultSet.length ] = ta[ taIndex ];

        }

    }

    return resultSet;

}
