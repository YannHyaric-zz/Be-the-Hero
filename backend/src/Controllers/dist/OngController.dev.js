"use strict";

var conect = require('../DB/conect');

var crypto = require('crypto');

module.exports = {
  create: function create(request, response) {
    var _request$body, nome, email, whatsapp, endereco, id;

    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _request$body = request.body, nome = _request$body.nome, email = _request$body.email, whatsapp = _request$body.whatsapp, endereco = _request$body.endereco;
            id = crypto.randomBytes(4).toString('HEX');
            _context.next = 4;
            return regeneratorRuntime.awrap(conect('ongs').insert({
              id: id,
              nome: nome,
              email: email,
              whatsapp: whatsapp,
              endereco: endereco
            }));

          case 4:
            return _context.abrupt("return", response.json({
              id: id
            }));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  list: function list(request, response) {
    var ongs;
    return regeneratorRuntime.async(function list$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(conect('ongs').select('*'));

          case 2:
            ongs = _context2.sent;
            return _context2.abrupt("return", response.json(ongs));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};