"use strict";
exports.__esModule = true;
var generic_logger_1 = require("./generic-logger");
;
var person = {
    name: 'Lazuli',
    age: 1
};
var person2 = {
    name: 'Sheelah'
};
var logPersonNameAndAge = generic_logger_1["default"];
logPersonNameAndAge(person);
logPersonNameAndAge(person2);
