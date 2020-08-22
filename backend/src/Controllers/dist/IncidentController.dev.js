"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var conect = require('../DB/conect');

module.exports = {
  create: function create(request, response) {
    var _request$body, titulo, desc, valor, ong_id, _ref, _ref2, id;

    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _request$body = request.body, titulo = _request$body.titulo, desc = _request$body.desc, valor = _request$body.valor;
            ong_id = request.headers.authorization;
            _context.next = 4;
            return regeneratorRuntime.awrap(conect('incidents').insert({
              titulo: titulo,
              desc: desc,
              valor: valor,
              ong_id: ong_id
            }));

          case 4:
            _ref = _context.sent;
            _ref2 = _slicedToArray(_ref, 1);
            id = _ref2[0];
            return _context.abrupt("return", response.json({
              id: id
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  list: function list(request, response) {
    var _request$query$page, page, count, incidents;

    return regeneratorRuntime.async(function list$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _request$query$page = request.query.page, page = _request$query$page === void 0 ? 1 : _request$query$page;
            _context2.next = 3;
            return regeneratorRuntime.awrap(conect('incidents').count());

          case 3:
            count = _context2.sent;
            _context2.next = 6;
            return regeneratorRuntime.awrap(conect('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset((page - 1) * 5).select('*'));

          case 6:
            incidents = _context2.sent;
            response.header('X-Total-Count', count['count(*)']);
            return _context2.abrupt("return", response.json({
              incidents: incidents
            }));

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    });
  },
  deletar: function deletar(request, response) {
    var id, ong_id, incident;
    return regeneratorRuntime.async(function deletar$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = request.params.id;
            ong_id = request.headers.authorization;
            _context3.next = 4;
            return regeneratorRuntime.awrap(conect('incidents').where('id', id).select('ong_id').first());

          case 4:
            incident = _context3.sent;

            if (!(incident.ong_id != ong_id)) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", response.status(401).json({
              error: 'Operação não permitida'
            }));

          case 7:
            _context3.next = 9;
            return regeneratorRuntime.awrap(conect('incidents').where('id', id)["delete"]());

          case 9:
            return _context3.abrupt("return", response.status(204).send());

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};