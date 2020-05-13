"use strict";

require("dotenv").config();

var _process$env = process.env,
    CLOUDINARY_CLOUDNAME = _process$env.CLOUDINARY_CLOUDNAME,
    CLOUDINARY_API_KEY = _process$env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET = _process$env.CLOUDINARY_API_SECRET;

var express = require("express");

var router = express.Router();

var cloudinary = require("cloudinary");

var _require = require("../controllers/images"),
    upload = _require.upload;

var Database = require("../db/index");

var pool = new Database().startPool();
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUDNAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});
router.post("/uploadmutler", upload.single("imageData"), function (req, res, next) {
  console.log("loading....");
  var imageName = req.body.imageName;
  var path = req.file.path;
  var query = {
    text: "INSERT INTO bridal_app.images (name,image_url) VALUES ($1, $2)",
    values: [imageName, path]
  };
  pool.query(query).then(function (result) {
    res.status(200).send(result);
  })["catch"](function (err) {
    return console.log(err);
  });
});
router.get("/fetchimages", function (req, res) {
  var query = {
    text: "select * from bridal_app.images"
  };
  pool.query(query).then(function (result) {
    res.status(200).send(result.rows);
  })["catch"](function (err) {
    return console.log(err);
  });
});
router.get("/getcloudinaryphotos", function (req, res) {
  cloudinary.v2.api.resources({
    type: "upload",
    prefix: "prinmia/"
  }, function (error, result) {
    if (error) console.log(error);
    var data = result.resources;

    function updateClodinaryPhotos() {
      var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, photo, public_id, url, created_at, _query;

      return regeneratorRuntime.async(function updateClodinaryPhotos$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 3;

              for (_iterator = data[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                photo = _step.value;
                public_id = photo.public_id, url = photo.url, created_at = photo.created_at;
                _query = {
                  text: "INSERT INTO bridal_app.cloudinary (public_id, url, uploaded_at) VALUES ($1, $2, $3) ON CONFLICT ON CONSTRAINT cloudinary_public_id_key DO NOTHING;",
                  values: [public_id, url, created_at]
                };
                pool.query(_query).then(function () {
                  return "done";
                })["catch"](function (err) {
                  return console.log(err);
                });
              }

              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](3);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 11:
              _context.prev = 11;
              _context.prev = 12;

              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }

            case 14:
              _context.prev = 14;

              if (!_didIteratorError) {
                _context.next = 17;
                break;
              }

              throw _iteratorError;

            case 17:
              return _context.finish(14);

            case 18:
              return _context.finish(11);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[3, 7, 11, 19], [12,, 14, 18]]);
    }

    var query = {
      text: "select * from bridal_app.cloudinary"
    };
    updateClodinaryPhotos().then(function () {
      pool.query(query).then(function (result) {
        console.log(result.rows);
      })["catch"](function (err) {
        return console.log(err);
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  });
});
module.exports = router;