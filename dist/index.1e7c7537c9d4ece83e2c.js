! function () {
    "use strict";

    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var o = n[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function n(n, t, o) {
        return t && e(n.prototype, t), o && e(n, o), Object.defineProperty(n, "prototype", {
            writable: !1
        }), n
    }
    console.log("here");
    var t = new WeakMap,
        o = new(n((function e() {
            var n, o, r;
            ! function (e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, e), r = {
                    writable: !0,
                    value: 100
                },
                function (e, n) {
                    if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(n = this, o = t), o.set(n, r)
        })));
    console.log("tt", o.a)
}();
//# sourceMappingURL=index.1e7c7537c9d4ece83e2c.js.map