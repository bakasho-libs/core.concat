var test = require("tape"),
    concat = require("../src/index");

test("no arguments", function(t) {

    t.looseEqual(concat(), [], "returns empty array when no arguments given");

    t.end();

});

test("errors", function(t) {


    t.throws(function() {
        concat([1, 2], 15);
    }, /TypeError:(.*)must be an array/, "throws TypeError when number is passed");
    t.throws(function() {
        concat([1, 2], null);
    }, /TypeError:(.*)must be an array/, "throws TypeError when null is passed");

    t.end();
});

test("concats arrays", function(t) {

    t.looseEqual(concat([1], [2], [3]), [1, 2, 3], "concats 3 arrays");

    t.end();

});
