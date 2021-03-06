/*
 * Copyright (c) 2014 HygieiaSoft
 * Distributed under the MIT License.
 * (See accompanying file LICENSE or copy at http://opensource.org/licenses/MIT)
 */
var exec = require('cordova/exec');
var utils = require('cordova/utils');

exports.init = function(cb) {
    exec(function(uid) {
        for (var i in uid) {
            exports[i] = uid[i];
        }
        cb();
    }, cb, "UID", "getUID",[]);
}