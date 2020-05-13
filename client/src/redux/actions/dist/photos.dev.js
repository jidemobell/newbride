"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pullImages = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pullImages = function pullImages() {
  return function (dispatch) {
    _axios["default"].get('/image/getcloudinaryphotos').then(function (response) {
      if (response.status === 200) {
        console.log(response);
        dispatch({
          type: _constants.PULL_PHOTOS,
          payload: response.data
        });
      }
    })["catch"](function (err) {
      dispatch({
        type: "SET_ERROR",
        payload: err
      });
    });
  };
};

exports.pullImages = pullImages;