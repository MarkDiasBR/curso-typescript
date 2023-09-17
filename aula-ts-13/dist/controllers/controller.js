"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo(req, res) {
    res.send("Hello!");
}
var controller = {
    getInfo: getInfo
};
exports.default = controller;
