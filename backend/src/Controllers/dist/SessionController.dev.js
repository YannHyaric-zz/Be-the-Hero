"use strict";

var conect = require('../DB/conect');

var _require = require('./OngController'),
    create = _require.create;

module.exports = {
  create: function create(request, response) {
    var id, ong;
    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = request.body.id;
            _context.next = 3;
            return regeneratorRuntime.awrap(conect('ongs').where('id', id).select('nome').first());

          case 3:
            ong = _context.sent;

            if (ong) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", response.status(400).json({
              error: 'Nenhuma ONG com esse ID'
            }));

          case 6:
            return _context.abrupt("return", response.json(ong));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};