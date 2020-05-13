"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _user = require("./user");

var _auth = require("./auth");

var _images = require("./images");

var _error = require("./error");

var _page = require("./page");

var _photos = require("./photos");

var rootReducer = (0, _redux.combineReducers)({
  auth: _auth.authReducer,
  users: _user.userReducer,
  image: _images.imageReducer,
  error: _error.errReducer,
  page: _page.pageReducer,
  photos: _photos.cloudinaryReducer
});
var _default = rootReducer;
exports["default"] = _default;