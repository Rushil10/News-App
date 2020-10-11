"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = getArticles;

var _rest_config = require("../config/rest_config");

function getArticles() {
  var category,
      articles,
      result,
      _args = arguments;
  return regeneratorRuntime.async(function getArticles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          category = _args.length > 0 && _args[0] !== undefined ? _args[0] : 'general';
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("".concat(_rest_config.article_url, "?country=").concat(_rest_config.country_code, "&category=").concat(category, "&apiKey=").concat(_rest_config.api_key)));

        case 4:
          articles = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(articles.json());

        case 7:
          result = _context.sent;
          articles = null;
          return _context.abrupt("return", result.articles);

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          throw _context.t0;

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
}