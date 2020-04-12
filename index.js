(function () {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                var p = n[i] = {exports: {}};
                e[i][0].call(p.exports, function (r) {
                    var n = e[i][1][r];
                    return o(n || r)
                }, p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
        return o
    }

    return r
})()({
    1: [function (require, module, exports) {
        var g = require('./d.js')
        console.log(g)
        var a = 10;
        module.exports.a = a;
// a -> d

    }, {"./d.js": 5}],
    2: [function (require, module, exports) {
        var a1 = require('./a2.js')
        module.exports.t = 123;

    }, {"./a2.js": 3}],
    3: [function (require, module, exports) {
        var n = 10;
        module.exports.n = 908;

    }, {}],
    4: [function (require, module, exports) {
        var b = require('./a.js')
        var v = require('./a2.js')
        var f = require('./a1.js')
        var g = require('./d.js')
        console.log(g)
        console.log(b.a, c.n, f.t);

    }, {"./a.js": 1, "./a1.js": 2, "./a2.js": 3, "./d.js": 5}],
    5: [function (require, module, exports) {
        var f = require('./a.js')
        console.log(0)

    }, {"./a.js": 1}]
}, {}, [4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYS5qcyIsInNyYy9hMS5qcyIsInNyYy9hMi5qcyIsInNyYy9iLmpzIiwic3JjL2QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgZyA9IHJlcXVpcmUoJy4vZC5qcycpXG5jb25zb2xlLmxvZyhnKVxudmFyIGEgPSAxMDtcbm1vZHVsZS5leHBvcnRzLmEgPSBhO1xuLy8gYSAtPiBkXG4iLCJ2YXIgYTEgPSByZXF1aXJlKCcuL2EyLmpzJylcbm1vZHVsZS5leHBvcnRzLnQgPSAxMjM7XG4iLCJ2YXIgbiA9IDEwO1xubW9kdWxlLmV4cG9ydHMubiA9IDkwODtcbiIsInZhciBiID0gcmVxdWlyZSgnLi9hLmpzJylcbnZhciB2ID0gcmVxdWlyZSgnLi9hMi5qcycpXG52YXIgZiA9IHJlcXVpcmUoJy4vYTEuanMnKVxudmFyIGcgPSByZXF1aXJlKCcuL2QuanMnKVxuY29uc29sZS5sb2coZylcbmNvbnNvbGUubG9nKGIuYSwgYy5uLCBmLnQpO1xuIiwidmFyIGYgPSByZXF1aXJlKCcuL2EuanMnKVxuY29uc29sZS5sb2coMClcbiJdfQ==

