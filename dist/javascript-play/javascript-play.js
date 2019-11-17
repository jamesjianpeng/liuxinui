! function (o) {
  var t = {};

  function e(n) {
    if (t[n]) return t[n].exports;
    var r = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return o[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports
  }
  e.m = o, e.c = t, e.d = function (o, t, n) {
    e.o(o, t) || Object.defineProperty(o, t, {
      enumerable: !0,
      get: n
    })
  }, e.r = function (o) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(o, "__esModule", {
      value: !0
    })
  }, e.t = function (o, t) {
    if (1 & t && (o = e(o)), 8 & t) return o;
    if (4 & t && "object" == typeof o && o && o.__esModule) return o;
    var n = Object.create(null);
    if (e.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: o
      }), 2 & t && "string" != typeof o)
      for (var r in o) e.d(n, r, function (t) {
        return o[t]
      }.bind(null, r));
    return n
  }, e.n = function (o) {
    var t = o && o.__esModule ? function () {
      return o.default
    } : function () {
      return o
    };
    return e.d(t, "a", t), t
  }, e.o = function (o, t) {
    return Object.prototype.hasOwnProperty.call(o, t)
  }, e.p = "./", e(e.s = 35)
}({
  35: function (o, t, e) {
    "use strict";
    e.r(t);
    e(36)
  },
  36: function (o, t) {
    function e({
      type: o = "dog",
      name: t = "july"
    }) {
      this.type = o, this.name = t, this.sanName = function () {
        return this.name
      }
    }

    function n(o) {
      this.data = o
    }

    function r(o) {
      this.data = o
    }
    const c = new e({});
    console.log("animal 实例"), console.log(c);
    const u = new e({});
    n.prototype = u, n.prototype.constructor = n;
    const l = new n(1);
    console.log("cat 实例"), console.log(l), console.log(l.__proto__ === n.prototype), console.log(l.constructor === n), r.prototype = l, r.prototype.constructor = r;
    const s = new r(3);
    console.log("tiger.constructor.prototype === tiger.__proto__: ", s.constructor.prototype === s.__proto__), console.log("tiger.constructor.prototype.constructor: ", s.constructor.prototype.constructor), console.log("tiger.__proto__.constructor: ", s.__proto__.constructor), console.log("tiger 实例"), console.log(s)
  }
});
