"use strict";

var conect = require('../DB/conect');

module.exports = {
  list: function list(request, response) {
    var ong_id, incidents;
    return regeneratorRuntime.async(function list$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ong_id = request.headers.authorization;
            _context.next = 3;
            return regeneratorRuntime.awrap(conect('incidents').where('ong_id', ong_id).select('*'));

          case 3:
            incidents = _context.sent;
            return _context.abrupt("return", response.json({
              incidents: incidents
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};