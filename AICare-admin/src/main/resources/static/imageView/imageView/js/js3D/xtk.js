/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *      "Free software" is a matter of liberty, not price.
 *      "Free" as in "free speech", not as in "free beer".
 *                                         - Richard M. Stallman
 * 
 * FUELED BY:
 *  - the wonderful Constructive Solid Geometry library by Evan Wallace (http://madebyevan.com)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/csg/LICENSE
 *
 *  - parts of the Google Closure Library (http://code.google.com/closure/library)
 *    LICENSE: https://raw.github.com/xtk/google-closure-library/master/LICENSE
 *
 *  - zlib.js, the ultimate gzip/zlib javascript implementation (https://github.com/imaya/zlib.js)
 *    LICENSE: https://raw.github.com/imaya/zlib.js/master/LICENSE
 *
 * MORE CREDITS: https://raw.github.com/xtk/X/master/LICENSE
 *
 */
function m(a) {
    throw a;
}

var p = void 0, q = !0, t = null, u = !1;

function aa() {
    return function () {
    }
}

function ea(a) {
    return function (b) {
        this[a] = b
    }
}

function v(a) {
    return function () {
        return this[a]
    }
}

var w, fa = this;

function ga() {
}

function ha(a) {
    var b = typeof a;
    if ("object" == b) if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
    } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function ja(a) {
    return a !== p
}

function ka(a) {
    return "array" == ha(a)
}

function la(a) {
    var b = ha(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ma(a) {
    return "string" == typeof a
}

function x(a) {
    return "number" == typeof a
}

function oa(a) {
    return "function" == ha(a)
}

function pa(a) {
    var b = typeof a;
    return "object" == b && a != t || "function" == b
}

function qa(a) {
    return a[ra] || (a[ra] = ++sa)
}

var ra = "closure_uid_" + (1E9 * Math.random() >>> 0), sa = 0;

function ta(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ua(a, b, c) {
    a || m(Error());
    if (2 < arguments.length) {
        var e = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, e);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}

function va(a, b, c) {
    va = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta : ua;
    return va.apply(t, arguments)
}

function wa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}

var xa = Date.now || function () {
    return +new Date
};

function A(a, b) {
    var c = a.split("."), e = fa;
    !(c[0] in e) && e.execScript && e.execScript("var " + c[0]);
    for (var d; c.length && (d = c.shift());) !c.length && ja(b) ? e[d] = b : e = e[d] ? e[d] : e[d] = {}
}

function C(a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.u = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};

function ya(a, b, c) {
    this.Za = this.Ya = this.Xa = 0;
    3 == arguments.length ? (this.Xa = Number(a), this.Ya = Number(b), this.Za = Number(c)) : a instanceof ya ? (this.Xa = Number(a.x()), this.Ya = Number(a.y()), this.Za = Number(a.d())) : (this.Xa = Number(a[0]), this.Ya = Number(a[1]), this.Za = Number(a[2]))
}

ya.prototype = {
    l: function () {
        return new ya(this.Xa, this.Ya, this.Za)
    }, ac: function (a) {
        return this.Xa * a.x() + this.Ya * a.y() + this.Za * a.d()
    }, re: function (a, b) {
        return za(this, Ba(Ca(a, this), b))
    }, length: function () {
        return Math.sqrt(this.ac(this))
    }, sc: function (a) {
        return new ya(this.Ya * a.d() - this.Za * a.y(), this.Za * a.x() - this.Xa * a.d(), this.Xa * a.y() - this.Ya * a.x())
    }, x: v("Xa"), y: v("Ya"), d: v("Za")
};

function Da(a) {
    var b = a.length();
    return new ya(a.Xa / b, a.Ya / b, a.Za / b)
}

function Ba(a, b) {
    return new ya(a.Xa * b, a.Ya * b, a.Za * b)
}

function Ca(a, b) {
    return new ya(a.Xa - b.x(), a.Ya - b.y(), a.Za - b.d())
}

function za(a, b) {
    return new ya(a.Xa + b.x(), a.Ya + b.y(), a.Za + b.d())
}

function Ea(a) {
    return new ya(-a.Xa, -a.Ya, -a.Za)
};var D = D || {};
D.yk = q;
D.Ia = function (a) {
    eval("X.DEV === undefined") || window.console.time(a)
};
D.Ca = function (a) {
    eval("X.DEV === undefined") || window.console.timeEnd(a)
};
window["X.counter"] = new function () {
    this.Vh = 0;
    this.pk = function () {
        return this.Vh++
    }
};

function Ga(a, b) {
    for (var c in b) {
        var e = b.__lookupGetter__(c), d = b.__lookupSetter__(c);
        c in a || (e || d ? (e && a.__defineGetter__(c, e), d && a.__defineSetter__(c, d)) : a[c] = b[c])
    }
}

var Ha = window.Kh;
Function.prototype.bind || (Function.prototype.bind = function (a) {
    function b() {
        return f.apply(this instanceof c ? this : a || window, d.concat(e.call(arguments)))
    }

    function c() {
    }

    "function" !== typeof this && m(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
    var e = Array.prototype.slice, d = e.call(arguments, 1), f = this;
    c.prototype = this.prototype;
    b.prototype = new c;
    return b
});
for (var Ia = 0, Ja = ["ms", "moz", "webkit", "o"], Ka = 0; Ka < Ja.length && !window.requestAnimationFrame; ++Ka) window.requestAnimationFrame = window[Ja[Ka] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[Ja[Ka] + "CancelAnimationFrame"] || window[Ja[Ka] + "CancelRequestAnimationFrame"];
window.requestAnimationFrame || (window.requestAnimationFrame = function (a) {
    var b = Date.now(), c = Math.max(0, 16 - (b - Ia)), e = window.setTimeout(function () {
        a(b + c)
    }, c);
    Ia = b + c;
    return e
});
window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
    clearTimeout(a)
});
"slice" in ArrayBuffer.prototype || (ArrayBuffer.prototype.slice = function (a, b) {
    a === p && m(Error("Not enough arguments."));
    var c = b || this.byteLength;
    0 > a && (a = this.byteLength + a);
    0 > c && (c = this.byteLength + c);
    c < a && (c = a = 0);
    0 > a && (a = 0);
    0 > c && (c = 0);
    a > this.byteLength && (a = this.byteLength);
    c > this.byteLength && (c = this.byteLength);
    for (var e = new ArrayBuffer(c - a), d = new Uint8Array(this), f = new Uint8Array(e), g = a, h = 0; g < c; ++g, ++h) f[h] = d[g];
    return e
});
A("$", Ha);
A("Function.prototype.bind", Function.prototype.bind);
A("window.requestAnimationFrame", window.requestAnimationFrame);
A("window.cancelAnimationFrame", window.cancelAnimationFrame);
var La = 0;

function Ma() {
}

w = Ma.prototype;
w.key = 0;
w.xc = u;
w.he = u;
w.Ba = function (a, b, c, e, d, f) {
    oa(a) ? this.Tg = q : a && a.handleEvent && oa(a.handleEvent) ? this.Tg = u : m(Error("Invalid listener argument"));
    this.bc = a;
    this.nh = b;
    this.src = c;
    this.type = e;
    this.capture = !!d;
    this.sf = f;
    this.he = u;
    this.key = ++La;
    this.xc = u
};
w.handleEvent = function (a) {
    return this.Tg ? this.bc.call(this.sf || this.src, a) : this.bc.handleEvent.call(this.bc, a)
};

function Na(a, b) {
    for (var c in a) b.call(p, a[c], c, a)
}

function Oa(a) {
    var b = [], c = 0, e;
    for (e in a) b[c++] = a[e];
    return b
}

var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Ra(a, b) {
    for (var c, e, d = 1; d < arguments.length; d++) {
        e = arguments[d];
        for (c in e) a[c] = e[c];
        for (var f = 0; f < Qa.length; f++) c = Qa[f], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c])
    }
};

function Sa(a) {
    if (!Ta.test(a)) return a;
    -1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(Va, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;"));
    return a
}

var Ua = /&/g, Va = /</g, Wa = />/g, Xa = /\"/g, Ta = /[&<>\"]/;
var Ya, Za, $a, ab, bb, db, eb;

function fb() {
    return fa.navigator ? fa.navigator.userAgent : t
}

function gb() {
    return fa.navigator
}

ab = $a = Za = Ya = u;
var hb;
if (hb = fb()) {
    var ib = gb();
    Ya = 0 == hb.indexOf("Opera");
    Za = !Ya && -1 != hb.indexOf("MSIE");
    $a = !Ya && -1 != hb.indexOf("WebKit");
    ab = !Ya && !$a && "Gecko" == ib.product
}
var jb = Ya, L = Za, lb = ab, mb = $a, pb, qb = gb();
pb = qb && qb.platform || "";
bb = -1 != pb.indexOf("Mac");
db = -1 != pb.indexOf("Win");
eb = -1 != pb.indexOf("Linux");
var rb = !!gb() && -1 != (gb().appVersion || "").indexOf("X11");

function sb() {
    var a = fa.document;
    return a ? a.documentMode : p
}

var wb;
a:{
    var xb = "", yb;
    if (jb && fa.opera) var zb = fa.opera.version,
        xb = "function" == typeof zb ? zb() : zb; else if (lb ? yb = /rv\:([^\);]+)(\)|;)/ : L ? yb = /MSIE\s+([^\);]+)(\)|;)/ : mb && (yb = /WebKit\/(\S+)/), yb) var Ab = yb.exec(fb()),
        xb = Ab ? Ab[1] : "";
    if (L) {
        var Bb = sb();
        if (Bb > parseFloat(xb)) {
            wb = String(Bb);
            break a
        }
    }
    wb = xb
}
var Cb = {};

function Db(a) {
    var b;
    if (!(b = Cb[a])) {
        b = 0;
        for (var c = String(wb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = Math.max(c.length, e.length), f = 0; 0 == b && f < d; f++) {
            var g = c[f] || "", h = e[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), j = RegExp("(\\d*)(\\D*)", "g");
            do {
                var k = l.exec(g) || ["", "", ""], n = j.exec(h) || ["", "", ""];
                if (0 == k[0].length && 0 == n[0].length) break;
                b = ((0 == k[1].length ? 0 : parseInt(k[1], 10)) < (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? -1 : (0 == k[1].length ? 0 : parseInt(k[1],
                    10)) > (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? 1 : 0) || ((0 == k[2].length) < (0 == n[2].length) ? -1 : (0 == k[2].length) > (0 == n[2].length) ? 1 : 0) || (k[2] < n[2] ? -1 : k[2] > n[2] ? 1 : 0)
            } while (0 == b)
        }
        b = Cb[a] = 0 <= b
    }
    return b
}

var Eb = fa.document, Fb = !Eb || !L ? p : sb() || ("CSS1Compat" == Eb.compatMode ? parseInt(wb, 10) : 5);
var Gb = !L || L && 9 <= Fb, Hb = L && !Db("9");
!mb || Db("528");
lb && Db("1.9b") || L && Db("8") || jb && Db("9.5") || mb && Db("528");
lb && !Db("8") || L && Db("9");
var Ib = Array.prototype, Jb = Ib.indexOf ? function (a, b, c) {
    return Ib.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = c == t ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (ma(a)) return !ma(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return -1
}, Lb = Ib.forEach ? function (a, b, c) {
    Ib.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var e = a.length, d = ma(a) ? a.split("") : a, f = 0; f < e; f++) f in d && b.call(c, d[f], f, a)
}, Mb = Ib.map ? function (a, b, c) {
    return Ib.map.call(a, b, c)
} : function (a, b, c) {
    for (var e = a.length, d = Array(e), f =
        ma(a) ? a.split("") : a, g = 0; g < e; g++) g in f && (d[g] = b.call(c, f[g], g, a));
    return d
}, Nb = Ib.some ? function (a, b, c) {
    return Ib.some.call(a, b, c)
} : function (a, b, c) {
    for (var e = a.length, d = ma(a) ? a.split("") : a, f = 0; f < e; f++) if (f in d && b.call(c, d[f], f, a)) return q;
    return u
};

function Ob(a, b) {
    var c = Jb(a, b);
    0 <= c && Ib.splice.call(a, c, 1)
}

function Pb(a, b, c) {
    return 2 >= arguments.length ? Ib.slice.call(a, b) : Ib.slice.call(a, b, c)
};

function Qb() {
    0 != Rb && (this.wl = Error().stack, qa(this))
}

var Rb = 0;

function Sb(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}

w = Sb.prototype;
w.wc = u;
w.defaultPrevented = u;
w.we = q;
w.stopPropagation = function () {
    this.wc = q
};
w.preventDefault = function () {
    this.defaultPrevented = q;
    this.we = u
};

function Tb(a) {
    Tb[" "](a);
    return a
}

Tb[" "] = ga;

function Ub(a, b) {
    a && this.Ba(a, b)
}

C(Ub, Sb);
w = Ub.prototype;
w.target = t;
w.relatedTarget = t;
w.offsetX = 0;
w.offsetY = 0;
w.clientX = 0;
w.clientY = 0;
w.screenX = 0;
w.screenY = 0;
w.button = 0;
w.keyCode = 0;
w.charCode = 0;
w.ctrlKey = u;
w.altKey = u;
w.shiftKey = u;
w.metaKey = u;
w.Vj = u;
w.tb = t;
w.Ba = function (a, b) {
    var c = this.type = a.type;
    Sb.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var e = a.relatedTarget;
    if (e) {
        if (lb) {
            var d;
            a:{
                try {
                    Tb(e.nodeName);
                    d = q;
                    break a
                } catch (f) {
                }
                d = u
            }
            d || (e = t)
        }
    } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.relatedTarget = e;
    this.offsetX = mb || a.offsetX !== p ? a.offsetX : a.layerX;
    this.offsetY = mb || a.offsetY !== p ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== p ? a.clientX : a.pageX;
    this.clientY = a.clientY !== p ? a.clientY : a.pageY;
    this.screenX =
        a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.Vj = bb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.tb = a;
    a.defaultPrevented && this.preventDefault();
    delete this.wc
};
w.stopPropagation = function () {
    Ub.u.stopPropagation.call(this);
    this.tb.stopPropagation ? this.tb.stopPropagation() : this.tb.cancelBubble = q
};
w.preventDefault = function () {
    Ub.u.preventDefault.call(this);
    var a = this.tb;
    if (a.preventDefault) a.preventDefault(); else if (a.returnValue = u, Hb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {
    }
};
w.Fi = v("tb");
var Vb = {}, Wb = {}, Xb = {}, Yb = {};

function M(a, b, c, e, d) {
    if (ka(b)) {
        for (var f = 0; f < b.length; f++) M(a, b[f], c, e, d);
        return t
    }
    a = Zb(a, b, c, u, e, d);
    b = a.key;
    Vb[b] = a;
    return b
}

function Zb(a, b, c, e, d, f) {
    b || m(Error("Invalid event type"));
    d = !!d;
    var g = Wb;
    b in g || (g[b] = {na: 0, Ma: 0});
    g = g[b];
    d in g || (g[d] = {na: 0, Ma: 0}, g.na++);
    var g = g[d], h = qa(a), l;
    g.Ma++;
    if (g[h]) {
        l = g[h];
        for (var j = 0; j < l.length; j++) if (g = l[j], g.bc == c && g.sf == f) {
            if (g.xc) break;
            e || (l[j].he = u);
            return l[j]
        }
    } else l = g[h] = [], g.na++;
    var k = $b, n = Gb ? function (a) {
        return k.call(n.src, n.bc, a)
    } : function (a) {
        a = k.call(n.src, n.bc, a);
        if (!a) return a
    }, j = n, g = new Ma;
    g.Ba(c, j, a, b, d, f);
    g.he = e;
    j.src = a;
    j.bc = g;
    l.push(g);
    Xb[h] || (Xb[h] = []);
    Xb[h].push(g);
    a.addEventListener ? (a == fa || !a.customEvent_) && a.addEventListener(b, j, d) : a.attachEvent(b in Yb ? Yb[b] : Yb[b] = "on" + b, j);
    return g
}

function ac(a, b, c, e, d) {
    if (ka(b)) for (var f = 0; f < b.length; f++) ac(a, b[f], c, e, d); else a = Zb(a, b, c, q, e, d), Vb[a.key] = a
}

function bc(a, b, c, e, d) {
    if (ka(b)) for (var f = 0; f < b.length; f++) bc(a, b[f], c, e, d); else {
        e = !!e;
        a:{
            f = Wb;
            if (b in f && (f = f[b], e in f && (f = f[e], a = qa(a), f[a]))) {
                a = f[a];
                break a
            }
            a = t
        }
        if (a) for (f = 0; f < a.length; f++) if (a[f].bc == c && a[f].capture == e && a[f].sf == d) {
            cc(a[f].key);
            break
        }
    }
}

function cc(a) {
    var b = Vb[a];
    if (!b || b.xc) return u;
    var c = b.src, e = b.type, d = b.nh, f = b.capture;
    c.removeEventListener ? (c == fa || !c.customEvent_) && c.removeEventListener(e, d, f) : c.detachEvent && c.detachEvent(e in Yb ? Yb[e] : Yb[e] = "on" + e, d);
    c = qa(c);
    Xb[c] && (d = Xb[c], Ob(d, b), 0 == d.length && delete Xb[c]);
    b.xc = q;
    if (b = Wb[e][f][c]) b.eh = q, dc(e, f, c, b);
    delete Vb[a];
    return q
}

function dc(a, b, c, e) {
    if (!e.se && e.eh) {
        for (var d = 0, f = 0; d < e.length; d++) e[d].xc ? e[d].nh.src = t : (d != f && (e[f] = e[d]), f++);
        e.length = f;
        e.eh = u;
        0 == f && (delete Wb[a][b][c], Wb[a][b].na--, 0 == Wb[a][b].na && (delete Wb[a][b], Wb[a].na--), 0 == Wb[a].na && delete Wb[a])
    }
}

function ec(a) {
    var b = 0;
    if (a != t) {
        if (a = qa(a), Xb[a]) {
            a = Xb[a];
            for (var c = a.length - 1; 0 <= c; c--) cc(a[c].key), b++
        }
    } else Na(Vb, function (a, c) {
        cc(c);
        b++
    })
}

function fc(a, b) {
    var c = qa(a), e = Xb[c];
    if (e) {
        var d = ja(b), f = ja(p);
        return d && f ? (e = Wb[b], !!e && !!e[p] && c in e[p]) : !d && !f ? q : Nb(e, function (a) {
            return d && a.type == b || f && a.capture == p
        })
    }
    return u
}

function gc(a, b, c, e, d) {
    var f = 1;
    b = qa(b);
    if (a[b]) {
        var g = --a.Ma, h = a[b];
        h.se ? h.se++ : h.se = 1;
        try {
            for (var l = h.length, j = 0; j < l; j++) {
                var k = h[j];
                k && !k.xc && (f &= hc(k, d) !== u)
            }
        } finally {
            a.Ma = Math.max(g, a.Ma), h.se--, dc(c, e, b, h)
        }
    }
    return Boolean(f)
}

function hc(a, b) {
    a.he && cc(a.key);
    return a.handleEvent(b)
}

function $b(a, b) {
    if (a.xc) return q;
    var c = a.type, e = Wb;
    if (!(c in e)) return q;
    var e = e[c], d, f;
    if (!Gb) {
        var g;
        if (!(g = b)) a:{
            g = ["window", "event"];
            for (var h = fa; d = g.shift();) if (h[d] != t) h = h[d]; else {
                g = t;
                break a
            }
            g = h
        }
        d = g;
        g = q in e;
        h = u in e;
        if (g) {
            if (0 > d.keyCode || d.returnValue != p) return q;
            a:{
                var l = u;
                if (0 == d.keyCode) try {
                    d.keyCode = -1;
                    break a
                } catch (j) {
                    l = q
                }
                if (l || d.returnValue == p) d.returnValue = q
            }
        }
        l = new Ub;
        l.Ba(d, this);
        d = q;
        try {
            if (g) {
                for (var k = [], n = l.currentTarget; n; n = n.parentNode) k.push(n);
                f = e[q];
                f.Ma = f.na;
                for (var s = k.length -
                    1; !l.wc && 0 <= s && f.Ma; s--) l.currentTarget = k[s], d &= gc(f, k[s], c, q, l);
                if (h) {
                    f = e[u];
                    f.Ma = f.na;
                    for (s = 0; !l.wc && s < k.length && f.Ma; s++) l.currentTarget = k[s], d &= gc(f, k[s], c, u, l)
                }
            } else d = hc(a, l)
        } finally {
            k && (k.length = 0)
        }
        return d
    }
    c = new Ub(b, this);
    return d = hc(a, c)
}

var ic = 0;

function jc(a) {
    return a + "_" + ic++
};

function kc() {
    Qb.call(this);
    this.Al = {};
    this.tl = this
}

C(kc, Qb);
kc.prototype.customEvent_ = q;
w = kc.prototype;
w.Kf = t;
w.Pf = ea("Kf");
w.addEventListener = function (a, b, c, e) {
    M(this, a, b, c, e)
};
w.removeEventListener = function (a, b, c, e) {
    bc(this, a, b, c, e)
};
w.dispatchEvent = function (a) {
    var b = a.type || a, c = Wb;
    if (b in c) {
        if (ma(a)) a = new Sb(a, this); else if (a instanceof Sb) a.target = a.target || this; else {
            var e = a;
            a = new Sb(b, this);
            Ra(a, e)
        }
        var e = 1, d, c = c[b], b = q in c, f;
        if (b) {
            d = [];
            for (f = this; f; f = f.Kf) d.push(f);
            f = c[q];
            f.Ma = f.na;
            for (var g = d.length - 1; !a.wc && 0 <= g && f.Ma; g--) a.currentTarget = d[g], e &= gc(f, d[g], a.type, q, a) && a.we != u
        }
        if (u in c) if (f = c[u], f.Ma = f.na, b) for (g = 0; !a.wc && g < d.length && f.Ma; g++) a.currentTarget = d[g], e &= gc(f, d[g], a.type, u, a) && a.we != u; else for (d = this; !a.wc &&
        d && f.Ma; d = d.Kf) a.currentTarget = d, e &= gc(f, d, a.type, u, a) && a.we != u;
        a = Boolean(e)
    } else a = q;
    return a
};

function N() {
    kc.call(this);
    this.f = "base";
    this.pa = window["X.counter"].pk();
    this.j = u
}

C(N, kc);
N.prototype.__defineGetter__("classname", v("f"));
N.prototype.__defineGetter__("id", v("pa"));
A("X.base", N);

function lc(a, b) {
    this.Wa = new ya(a);
    this.va = new ya(b)
}

lc.prototype = {
    l: function () {
        return new lc(this.Wa.l(), this.va.l())
    }, uc: function () {
        this.va = Ea(this.va)
    }
};

function mc(a, b) {
    this.va = a;
    this.Nd = b
}

mc.prototype = {
    l: function () {
        return new mc(this.va.l(), this.Nd)
    }, uc: function () {
        this.va = Ea(this.va);
        this.Nd = -this.Nd
    }
};

function nc(a, b) {
    this.Lb = a;
    this.Ce = b;
    var c = a[0].Wa, e = a[2].Wa, e = Da(Ca(a[1].Wa, c).sc(Ca(e, c)));
    this.Va = new mc(e, e.ac(c))
}

nc.prototype = {
    l: function () {
        var a = this.Lb.map(function (a) {
            return a.l()
        });
        return new nc(a, this.Ce)
    }, uc: function () {
        this.Lb.reverse().map(function (a) {
            a.uc()
        });
        this.Va.uc()
    }
};

function oc(a, b, c, e, d, f) {
    for (var g = 0, h = [], l = 0; l < a.Lb.length; l++) {
        var j = b.va.ac(a.Lb[l].Wa) - b.Nd, j = -1E-5 > j ? 2 : 1E-5 < j ? 1 : 0, g = g | j;
        h.push(j)
    }
    switch (g) {
        case 0:
            (0 < b.va.ac(a.Va.va) ? c : e).push(a);
            break;
        case 1:
            d.push(a);
            break;
        case 2:
            f.push(a);
            break;
        case 3:
            c = [];
            e = [];
            for (l = 0; l < a.Lb.length; l++) {
                var k = (l + 1) % a.Lb.length, j = h[l], n = h[k], g = a.Lb[l], k = a.Lb[k];
                2 != j && c.push(g);
                1 != j && e.push(2 != j ? g.l() : g);
                3 == (j | n) && (j = (b.Nd - b.va.ac(g.Wa)) / b.va.ac(Ca(k.Wa, g.Wa)), j = new lc(g.Wa.re(k.Wa, j), g.va.re(k.va, j)), c.push(j), e.push(j.l()))
            }
            3 <=
            c.length && d.push(new nc(c, a.Ce));
            3 <= e.length && f.push(new nc(e, a.Ce))
    }
};

function pc(a) {
    this.za = this.Aa = this.Va = t;
    this.Z = [];
    a && qc(this, a)
}

pc.prototype = {
    l: function () {
        var a = new pc, b = this.Va && this.Va.l();
        a.Va = b;
        b = this.Aa && this.Aa.l();
        a.Aa = b;
        b = this.za && this.za.l();
        a.za = b;
        a.Be(this.Z.map(function (a) {
            return a.l()
        }));
        return a
    }, Y: function () {
        for (var a = 0; a < this.Z.length; a++) this.Z[a].uc();
        this.Va.uc();
        this.Aa && this.Aa.Y();
        this.za && this.za.Y();
        a = this.Aa;
        this.Aa = this.za;
        this.za = a
    }, Be: ea("Z")
};

function qc(a, b) {
    if (b.length) {
        a.Va || (a.Va = b[0].Va.l());
        for (var c = [], e = [], d = 0; d < b.length; d++) oc(b[d], a.Va, a.Z, a.Z, c, e);
        c.length && (a.Aa || (a.Aa = new pc), qc(a.Aa, c));
        e.length && (a.za || (a.za = new pc), qc(a.za, e))
    }
}

function rc(a) {
    var b = a.Z.slice();
    a.Aa && (b = b.concat(rc(a.Aa)));
    a.za && (b = b.concat(rc(a.za)));
    return b
}

function sc(a, b) {
    a.Z = tc(b, a.Z);
    a.Aa && sc(a.Aa, b);
    a.za && sc(a.za, b)
}

function tc(a, b) {
    if (!a.Va) return b.slice();
    for (var c = [], e = [], d = 0; d < b.length; d++) oc(b[d], a.Va, c, e, c, e);
    a.Aa && (c = tc(a.Aa, c));
    e = a.za ? tc(a.za, e) : [];
    return c.concat(e)
};

function uc() {
    this.Z = []
}

function vc(a) {
    var b = new uc;
    b.Be(a);
    return b
}

uc.prototype = {
    l: function () {
        var a = new uc;
        a.Be(this.Z.map(function (a) {
            return a.l()
        }));
        return a
    }, Wf: function (a) {
        var b = new pc(this.l().Z);
        a = new pc(a.l().Z);
        sc(b, a);
        sc(a, b);
        a.Y();
        sc(a, b);
        a.Y();
        qc(b, rc(a));
        return vc(rc(b))
    }, wa: function (a) {
        var b = new pc(this.l().Z);
        a = new pc(a.l().Z);
        b.Y();
        sc(b, a);
        sc(a, b);
        a.Y();
        sc(a, b);
        a.Y();
        qc(b, rc(a));
        b.Y();
        return vc(rc(b))
    }, uf: function (a) {
        var b = new pc(this.l().Z);
        a = new pc(a.l().Z);
        b.Y();
        sc(a, b);
        a.Y();
        sc(b, a);
        sc(a, b);
        qc(b, rc(a));
        b.Y();
        return vc(rc(b))
    }, inverse: function () {
        var a =
            this.l();
        a.Z.map(function (a) {
            a.uc()
        });
        return a
    }, Be: ea("Z")
};

function wc() {
    N.call(this);
    this.f = "indexer";
    this.af = [];
    this.ol = [];
    this.Ja = {}
}

C(wc, N);
wc.prototype.add = function (a) {
    a == t && m(Error("Invalid object."));
    var b = window.JSON.stringify(a);
    b in this.Ja || (this.Ja[b] = this.af.length, this.af.push(a));
    return this.Ja[b]
};
wc.prototype.unique = v("af");

function xc(a) {
    N.call(this);
    this.f = "file";
    this.$d = a;
    this.j = q
}

C(xc, N);

function yc() {
    this.$a = this.r = t
}

yc.prototype.__defineSetter__("file", function (a) {
    if (a == t || ka(a) && 0 == a.length) this.r = t; else {
        if (ka(a)) {
            if (1 == a.length) {
                this.r = new xc(a[0]);
                return
            }
            this.r = Mb(a, function (a) {
                var c = new Q;
                c.r = new xc(a);
                return c
            })
        } else this.r = new xc(a);
        this.$a = t
    }
});
yc.prototype.__defineGetter__("file", function () {
    return !this.r ? "" : ka(this.r) ? this.r.map(function (a) {
        return a.r.$d
    }) : this.r.$d
});
yc.prototype.__defineGetter__("filedata", function () {
    return ka(this.r) ? this.r.map(function (a) {
        return a.$a
    }) : this.$a
});
yc.prototype.__defineSetter__("filedata", function (a) {
    if (a == t || ka(a) && 0 == a.length) this.$a = t;
    if (ka(a)) if (1 == a.length) this.$a = a[0]; else {
        var b = this.r.length, c;
        for (c = 0; c < b; c++) this.r[c].$a = a[c]
    } else this.$a = a
});

function zc(a) {
    if ("function" == typeof a.Bd) return a.Bd();
    if (ma(a)) return a.split("");
    if (la(a)) {
        for (var b = [], c = a.length, e = 0; e < c; e++) b.push(a[e]);
        return b
    }
    return Oa(a)
};

function Ac(a, b) {
    this.ga = {};
    this.S = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && m(Error("Uneven number of arguments"));
        for (var e = 0; e < c; e += 2) this.set(arguments[e], arguments[e + 1])
    } else a && this.cf(a)
}

w = Ac.prototype;
w.na = 0;
w.Yf = 0;
w.rf = v("na");
w.Bd = function () {
    Bc(this);
    for (var a = [], b = 0; b < this.S.length; b++) a.push(this.ga[this.S[b]]);
    return a
};

function Cc(a) {
    for (var b = 0; b < a.S.length; b++) {
        var c = a.S[b];
        if (Dc(a.ga, c) && a.ga[c] == u) return q
    }
    return u
}

w.clear = function () {
    this.ga = {};
    this.Yf = this.na = this.S.length = 0
};
w.remove = function (a) {
    return Dc(this.ga, a) ? (delete this.ga[a], this.na--, this.Yf++, this.S.length > 2 * this.na && Bc(this), q) : u
};

function Bc(a) {
    if (a.na != a.S.length) {
        for (var b = 0, c = 0; b < a.S.length;) {
            var e = a.S[b];
            Dc(a.ga, e) && (a.S[c++] = e);
            b++
        }
        a.S.length = c
    }
    if (a.na != a.S.length) {
        for (var d = {}, c = b = 0; b < a.S.length;) e = a.S[b], Dc(d, e) || (a.S[c++] = e, d[e] = 1), b++;
        a.S.length = c
    }
}

w.get = function (a, b) {
    return Dc(this.ga, a) ? this.ga[a] : b
};
w.set = function (a, b) {
    Dc(this.ga, a) || (this.na++, this.S.push(a), this.Yf++);
    this.ga[a] = b
};
w.cf = function (a) {
    var b;
    if (a instanceof Ac) Bc(a), b = a.S.concat(), a = a.Bd(); else {
        b = [];
        var c = 0, e;
        for (e in a) b[c++] = e;
        a = Oa(a)
    }
    for (c = 0; c < b.length; c++) this.set(b[c], a[c])
};
w.l = function () {
    return new Ac(this)
};
w.Vf = function () {
    for (var a = new Ac, b = 0; b < this.S.length; b++) {
        var c = this.S[b];
        a.set(this.ga[c], c)
    }
    return a
};

function Dc(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

function Ec() {
    N.call(this);
    this.f = "colortable";
    this.Ja = new Ac;
    Ga(this, new yc)
}

C(Ec, N);
Ec.prototype.add = function (a, b, c, e, d, f) {
    (!x(a) || !x(c) || !x(e) || !x(d) || !x(f)) && m(Error("Invalid color table entry."));
    this.Ja.set(a, [b, c, e, d, f]);
    this.j = q
};
Ec.prototype.get = function (a) {
    return this.Ja.get(a)
};
A("X.colortable.prototype.get", Ec.prototype.get);

function Fc(a, b, c) {
    this.x = ja(a) ? a : 0;
    this.y = ja(b) ? b : 0;
    this.d = ja(c) ? c : 0
}

Fc.prototype.l = function () {
    return new Fc(this.x, this.y, this.d)
};

function S(a, b, c) {
    this.x = a;
    this.y = b;
    this.d = c
}

C(S, Fc);
w = S.prototype;
w.l = function () {
    return new S(this.x, this.y, this.d)
};
w.Ib = function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.d * this.d)
};
w.scale = function (a) {
    this.x *= a;
    this.y *= a;
    this.d *= a;
    return this
};
w.Y = function () {
    this.x = -this.x;
    this.y = -this.y;
    this.d = -this.d;
    return this
};
w.normalize = function () {
    return this.scale(1 / this.Ib())
};
w.add = function (a) {
    this.x += a.x;
    this.y += a.y;
    this.d += a.d;
    return this
};
w.wa = function (a) {
    this.x -= a.x;
    this.y -= a.y;
    this.d -= a.d;
    return this
};

function Gc(a, b) {
    var c = a.x - b.x, e = a.y - b.y, d = a.d - b.d;
    return Math.sqrt(c * c + e * e + d * d)
}

function Hc(a, b) {
    var c = a.x - b.x, e = a.y - b.y, d = a.d - b.d;
    return c * c + e * e + d * d
}

function Ic(a, b) {
    return new S(a.x + b.x, a.y + b.y, a.d + b.d)
}

function Jc(a, b) {
    return new S(a.y * b.d - a.d * b.y, a.d * b.x - a.x * b.d, a.x * b.y - a.y * b.x)
};D.m = S;
w = D.m.prototype;
w.l = S.prototype.l;
w.Ib = S.prototype.Ib;
w.scale = S.prototype.scale;
w.Y = S.prototype.Y;
w.add = S.prototype.add;
w.wa = S.prototype.wa;
w.normalize = function () {
    var a = this.Ib();
    return 0 == a ? this.scale(0) : this.scale(1 / a)
};
D.m.ac = function (a, b) {
    return a.x * b.x + a.y * b.y + a.d * b.d
};
D.m.sc = Jc;
D.m.qf = Gc;
D.m.re = function (a, b, c) {
    return new S(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y), a.d + c * (b.d - a.d))
};
D.m.prototype.__defineGetter__("xx", v("x"));
D.m.prototype.__defineGetter__("yy", v("y"));
D.m.prototype.__defineGetter__("zz", v("d"));
A("X.vector", D.m);
A("X.vector.prototype.clone", D.m.prototype.l);
A("X.vector.prototype.magnitude", D.m.prototype.Ib);
A("X.vector.prototype.scale", D.m.prototype.scale);
A("X.vector.prototype.invert", D.m.prototype.Y);
A("X.vector.prototype.normalize", D.m.prototype.normalize);
A("X.vector.prototype.add", D.m.prototype.add);
A("X.vector.prototype.subtract", D.m.prototype.wa);
A("X.vector.dot", D.m.ac);
A("X.vector.cross", D.m.sc);
A("X.vector.distance", D.m.qf);
A("X.vector.lerp", D.m.re);

function Kc(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
}

Kc.prototype.BYTES_PER_ELEMENT = 8;
Kc.prototype.set = function (a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};
Kc.prototype.toString = Array.prototype.join;
if ("undefined" == typeof Float64Array) {
    try {
        Kc.BYTES_PER_ELEMENT = 8
    } catch (Lc) {
    }
    Kc.prototype.BYTES_PER_ELEMENT = Kc.prototype.BYTES_PER_ELEMENT;
    Kc.prototype.set = Kc.prototype.set;
    Kc.prototype.toString = Kc.prototype.toString;
    A("Float64Array", Kc)
}
;

function Mc(a) {
    this.length = a.length || a;
    for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
}

Mc.prototype.BYTES_PER_ELEMENT = 4;
Mc.prototype.set = function (a, b) {
    b = b || 0;
    for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
};
Mc.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (Mc.BYTES_PER_ELEMENT = 4, Mc.prototype.BYTES_PER_ELEMENT = Mc.prototype.BYTES_PER_ELEMENT, Mc.prototype.set = Mc.prototype.set, Mc.prototype.toString = Mc.prototype.toString, A("Float32Array", Mc));

function Nc() {
    return new Float32Array(3)
}

function Oc(a, b, c) {
    var e = Nc();
    e[0] = a;
    e[1] = b;
    e[2] = c;
    return e
}

function Pc(a, b) {
    var c = a[0], e = a[1], d = a[2], c = 1 / Math.sqrt(c * c + e * e + d * d);
    b[0] = a[0] * c;
    b[1] = a[1] * c;
    b[2] = a[2] * c
};

function Qc() {
    return new Float32Array(4)
}

function Rc(a, b, c, e) {
    var d = Qc();
    d[0] = a;
    d[1] = b;
    d[2] = c;
    d[3] = e;
    return d
};

function Sc() {
    return new Float32Array(16)
}

function Tc() {
    var a = Sc();
    a[0] = a[5] = a[10] = a[15] = 1;
    return a
}

function Uc(a, b, c, e, d, f, g, h, l, j, k, n, s, r, y, z, F) {
    a[0] = b;
    a[1] = c;
    a[2] = e;
    a[3] = d;
    a[4] = f;
    a[5] = g;
    a[6] = h;
    a[7] = l;
    a[8] = j;
    a[9] = k;
    a[10] = n;
    a[11] = s;
    a[12] = r;
    a[13] = y;
    a[14] = z;
    a[15] = F;
    return a
}

function Vc(a, b, c, e, d) {
    a[12] = b;
    a[13] = c;
    a[14] = e;
    a[15] = d;
    return a
}

function Wc(a, b, c) {
    b *= 4;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b + 3] = c[3]
}

function Xc(a, b, c) {
    b *= 4;
    c[0] = a[b];
    c[1] = a[b + 1];
    c[2] = a[b + 2];
    c[3] = a[b + 3]
}

function T(a, b, c, e, d, f) {
    a[b] = c;
    a[b + 4] = e;
    a[b + 8] = d;
    a[b + 12] = f
}

function Yc(a, b, c) {
    a[b] = c[0];
    a[b + 4] = c[1];
    a[b + 8] = c[2];
    a[b + 12] = c[3]
}

function $c(a, b, c) {
    c[0] = a[b];
    c[1] = a[b + 4];
    c[2] = a[b + 8];
    c[3] = a[b + 12]
}

function ad(a, b, c) {
    var e = a[0], d = a[1], f = a[2], g = a[3], h = a[4], l = a[5], j = a[6], k = a[7], n = a[8], s = a[9], r = a[10],
        y = a[11], z = a[12], F = a[13], G = a[14];
    a = a[15];
    var I = b[0], B = b[1], E = b[2], J = b[3], O = b[4], R = b[5], P = b[6], U = b[7], ba = b[8], ca = b[9], K = b[10],
        na = b[11], H = b[12], Pa = b[13], Fa = b[14];
    b = b[15];
    c[0] = e * I + h * B + n * E + z * J;
    c[1] = d * I + l * B + s * E + F * J;
    c[2] = f * I + j * B + r * E + G * J;
    c[3] = g * I + k * B + y * E + a * J;
    c[4] = e * O + h * R + n * P + z * U;
    c[5] = d * O + l * R + s * P + F * U;
    c[6] = f * O + j * R + r * P + G * U;
    c[7] = g * O + k * R + y * P + a * U;
    c[8] = e * ba + h * ca + n * K + z * na;
    c[9] = d * ba + l * ca + s * K + F * na;
    c[10] = f * ba + j * ca + r *
        K + G * na;
    c[11] = g * ba + k * ca + y * K + a * na;
    c[12] = e * H + h * Pa + n * Fa + z * b;
    c[13] = d * H + l * Pa + s * Fa + F * b;
    c[14] = f * H + j * Pa + r * Fa + G * b;
    c[15] = g * H + k * Pa + y * Fa + a * b;
    return c
}

function bd(a, b) {
    var c = a[0], e = a[1], d = a[2], f = a[3], g = a[4], h = a[5], l = a[6], j = a[7], k = a[8], n = a[9], s = a[10],
        r = a[11], y = a[12], z = a[13], F = a[14], G = a[15], I = c * h - e * g, B = c * l - d * g, E = c * j - f * g,
        J = e * l - d * h, O = e * j - f * h, R = d * j - f * l, P = k * z - n * y, U = k * F - s * y,
        ba = k * G - r * y, ca = n * F - s * z, K = n * G - r * z, na = s * G - r * F,
        H = I * na - B * K + E * ca + J * ba - O * U + R * P;
    if (0 == H) return u;
    H = 1 / H;
    b[0] = (h * na - l * K + j * ca) * H;
    b[1] = (-e * na + d * K - f * ca) * H;
    b[2] = (z * R - F * O + G * J) * H;
    b[3] = (-n * R + s * O - r * J) * H;
    b[4] = (-g * na + l * ba - j * U) * H;
    b[5] = (c * na - d * ba + f * U) * H;
    b[6] = (-y * R + F * E - G * B) * H;
    b[7] = (k * R - s * E + r * B) * H;
    b[8] = (g *
        K - h * ba + j * P) * H;
    b[9] = (-c * K + e * ba - f * P) * H;
    b[10] = (y * O - z * E + G * I) * H;
    b[11] = (-k * O + n * E - r * I) * H;
    b[12] = (-g * ca + h * U - l * P) * H;
    b[13] = (c * ca - e * U + d * P) * H;
    b[14] = (-y * J + z * B - F * I) * H;
    b[15] = (k * J - n * B + s * I) * H;
    return q
}

function cd(a, b, c) {
    var e = b[0], d = b[1];
    b = b[2];
    c[0] = e * a[0] + d * a[4] + b * a[8] + a[12];
    c[1] = e * a[1] + d * a[5] + b * a[9] + a[13];
    c[2] = e * a[2] + d * a[6] + b * a[10] + a[14]
}

function dd(a, b, c) {
    var e = b[0], d = b[1], f = b[2];
    b = b[3];
    c[0] = e * a[0] + d * a[4] + f * a[8] + b * a[12];
    c[1] = e * a[1] + d * a[5] + f * a[9] + b * a[13];
    c[2] = e * a[2] + d * a[6] + f * a[10] + b * a[14];
    c[3] = e * a[3] + d * a[7] + f * a[11] + b * a[15];
    return c
}

function ed(a, b, c, e) {
    return Vc(a, a[0] * b + a[4] * c + a[8] * e + a[12], a[1] * b + a[5] * c + a[9] * e + a[13], a[2] * b + a[6] * c + a[10] * e + a[14], a[3] * b + a[7] * c + a[11] * e + a[15])
}

new Float64Array(3);
new Float64Array(3);
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
D.g = {};
D.g.Wg = function (a, b, c, e) {
    c = c.wa(b);
    c.normalize();
    e = D.m.sc(c, e);
    e.normalize();
    var d = D.m.sc(e, c);
    d.normalize();
    c.Y();
    T(a, 0, e.x, e.y, e.d, 0);
    T(a, 1, d.x, d.y, d.d, 0);
    T(a, 2, c.x, c.y, c.d, 0);
    ed(a, -b.x, -b.y, -b.d);
    return a
};
D.g.ba = function (a, b, c, e) {
    var d = 1 / (b * a[3] + c * a[7] + e * a[11] + a[15]);
    return new D.m((b * a[0] + c * a[4] + e * a[8] + a[12]) * d, (b * a[1] + c * a[5] + e * a[9] + a[13]) * d, (b * a[2] + c * a[6] + e * a[10] + a[14]) * d)
};
D.g.mk = function (a, b, c) {
    var e = new Float32Array(4), d = new Float32Array(4);
    $c(a, b, e);
    $c(a, c, d);
    Yc(a, b, d);
    Yc(a, c, e);
    return a
};
D.g.lk = function (a, b, c) {
    var e = new Float32Array(4), d = new Float32Array(4);
    Xc(a, b, e);
    Xc(a, c, d);
    Wc(a, b, d);
    Wc(a, c, e);
    return a
};
D.g.Cd = Tc;
D.g.l = function (a) {
    var b = Sc();
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15];
    return b
};
D.g.Vf = function (a, b) {
    if (b == a) {
        var c = a[1], e = a[2], d = a[3], f = a[6], g = a[7], h = a[11];
        b[1] = a[4];
        b[2] = a[8];
        b[3] = a[12];
        b[4] = c;
        b[6] = a[9];
        b[7] = a[13];
        b[8] = e;
        b[9] = f;
        b[11] = a[14];
        b[12] = d;
        b[13] = g;
        b[14] = h
    } else b[0] = a[0], b[1] = a[4], b[2] = a[8], b[3] = a[12], b[4] = a[1], b[5] = a[5], b[6] = a[9], b[7] = a[13], b[8] = a[2], b[9] = a[6], b[10] = a[10], b[11] = a[14], b[12] = a[3], b[13] = a[7], b[14] = a[11], b[15] = a[15];
    return b
};
D.g.si = function (a) {
    var b = a[0], c = a[1], e = a[2], d = a[3], f = a[4], g = a[5], h = a[6], l = a[7], j = a[8], k = a[9], n = a[10],
        s = a[11], r = a[12], y = a[13], z = a[14];
    a = a[15];
    return (b * g - c * f) * (n * a - s * z) - (b * h - e * f) * (k * a - s * y) + (b * l - d * f) * (k * z - n * y) + (c * h - e * g) * (j * a - s * r) - (c * l - d * g) * (j * z - n * r) + (e * l - d * h) * (j * y - k * r)
};
D.g.Y = bd;
D.g.xf = function (a, b, c, e, d) {
    var f = b / 2;
    b = d - e;
    var g = Math.sin(f);
    if (0 == b || 0 == g || 0 == c) return a;
    f = Math.cos(f) / g;
    return Uc(a, f / c, 0, 0, 0, 0, f, 0, 0, 0, 0, -(d + e) / b, -1, 0, 0, -(2 * e * d) / b, 0)
};
D.g.cj = function (a, b, c, e, d, f, g) {
    return Uc(a, 2 * f / (c - b), 0, 0, 0, 0, 2 * f / (d - e), 0, 0, (c + b) / (c - b), (d + e) / (d - e), -(g + f) / (g - f), -1, 0, 0, -(2 * g * f) / (g - f), 0)
};
D.g.dj = function (a, b, c, e, d, f, g) {
    return Uc(a, 2 / (c - b), 0, 0, 0, 0, 2 / (d - e), 0, 0, 0, 0, -2 / (g - f), 0, -(c + b) / (c - b), -(d + e) / (d - e), -(g + f) / (g - f), 1)
};
D.g.multiply = ad;
D.g.$g = dd;
D.g.translate = ed;
D.g.scale = function (a, b, c, e) {
    return Uc(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, a[8] * e, a[9] * e, a[10] * e, a[11] * e, a[12], a[13], a[14], a[15])
};
D.g.rotate = function (a, b, c, e, d) {
    var f = a[0], g = a[1], h = a[2], l = a[3], j = a[4], k = a[5], n = a[6], s = a[7], r = a[8], y = a[9], z = a[10],
        F = a[11], G = Math.cos(b), I = Math.sin(b), B = 1 - G;
    b = c * c * B + G;
    var E = c * e * B + d * I, J = c * d * B - e * I, O = c * e * B - d * I, R = e * e * B + G, P = e * d * B + c * I,
        U = c * d * B + e * I;
    c = e * d * B - c * I;
    d = d * d * B + G;
    return Uc(a, f * b + j * E + r * J, g * b + k * E + y * J, h * b + n * E + z * J, l * b + s * E + F * J, f * O + j * R + r * P, g * O + k * R + y * P, h * O + n * R + z * P, l * O + s * R + F * P, f * U + j * c + r * d, g * U + k * c + y * d, h * U + n * c + z * d, l * U + s * c + F * d, a[12], a[13], a[14], a[15])
};
D.g.xe = function (a, b) {
    var c = a[4], e = a[5], d = a[6], f = a[7], g = a[8], h = a[9], l = a[10], j = a[11], k = Math.cos(b),
        n = Math.sin(b);
    a[4] = c * k + g * n;
    a[5] = e * k + h * n;
    a[6] = d * k + l * n;
    a[7] = f * k + j * n;
    a[8] = c * -n + g * k;
    a[9] = e * -n + h * k;
    a[10] = d * -n + l * k;
    a[11] = f * -n + j * k;
    return a
};
D.g.ye = function (a, b) {
    var c = a[0], e = a[1], d = a[2], f = a[3], g = a[8], h = a[9], l = a[10], j = a[11], k = Math.cos(b),
        n = Math.sin(b);
    a[0] = c * k + g * -n;
    a[1] = e * k + h * -n;
    a[2] = d * k + l * -n;
    a[3] = f * k + j * -n;
    a[8] = c * n + g * k;
    a[9] = e * n + h * k;
    a[10] = d * n + l * k;
    a[11] = f * n + j * k;
    return a
};
D.g.ze = function (a, b) {
    var c = a[0], e = a[1], d = a[2], f = a[3], g = a[4], h = a[5], l = a[6], j = a[7], k = Math.cos(b),
        n = Math.sin(b);
    a[0] = c * k + g * n;
    a[1] = e * k + h * n;
    a[2] = d * k + l * n;
    a[3] = f * k + j * n;
    a[4] = c * -n + g * k;
    a[5] = e * -n + h * k;
    a[6] = d * -n + l * k;
    a[7] = f * -n + j * k;
    return a
};
A("X.matrix.identity", D.g.Cd);
A("X.matrix.clone", D.g.l);
A("X.matrix.transpose", D.g.Vf);
A("X.matrix.determinant", D.g.si);
A("X.matrix.invert", D.g.Y);
A("X.matrix.multiply", D.g.multiply);
A("X.matrix.multiplyByVector", D.g.ba);
A("X.matrix.multiplyByVec4", D.g.$g);
A("X.matrix.makePerspective", D.g.xf);
A("X.matrix.makeFrustum", D.g.cj);
A("X.matrix.makeOrtho", D.g.dj);
A("X.matrix.makeLookAt", D.g.Wg);
A("X.matrix.translate", D.g.translate);
A("X.matrix.scale", D.g.scale);
A("X.matrix.rotate", D.g.rotate);
A("X.matrix.rotateX", D.g.xe);
A("X.matrix.rotateY", D.g.ye);
A("X.matrix.rotateZ", D.g.ze);
A("X.matrix.swapRows", D.g.mk);
A("X.matrix.swapCols", D.g.lk);

function fd() {
    N.call(this);
    this.f = "transform";
    this.Q = D.g.Cd()
}

C(fd, N);
fd.prototype.__defineGetter__("matrix", v("Q"));
fd.prototype.__defineSetter__("matrix", function (a) {
    (a == t || !(a instanceof Float32Array)) && m(Error("Invalid matrix."));
    this.Q = a;
    this.q()
});
w = fd.prototype;
w.xe = function (a) {
    (!x(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    D.g.xe(this.Q, a * Math.PI / 180);
    this.q()
};
w.ye = function (a) {
    (!x(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    D.g.ye(this.Q, a * Math.PI / 180);
    this.q()
};
w.ze = function (a) {
    (!x(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    D.g.ze(this.Q, a * Math.PI / 180);
    this.q()
};
w.Ch = function (a) {
    x(a) || m(Error("Invalid distance."));
    D.g.translate(this.Q, a, 0, 0);
    this.q()
};
w.Dh = function (a) {
    x(a) || m(Error("Invalid distance."));
    D.g.translate(this.Q, 0, a, 0);
    this.q()
};
w.Eh = function (a) {
    x(a) || m(Error("Invalid distance."));
    D.g.translate(this.Q, 0, 0, a);
    this.q()
};

function gd(a, b, c) {
    a.Q[b + 4 * c] *= -1;
    a.q()
}

w.Ai = function () {
    gd(this, 0, 0)
};
w.Bi = function () {
    gd(this, 1, 1)
};
w.Ci = function () {
    gd(this, 2, 2)
};
w.q = function () {
    this.j = q
};
A("X.transform", fd);
A("X.transform.prototype.rotateX", fd.prototype.xe);
A("X.transform.prototype.rotateY", fd.prototype.ye);
A("X.transform.prototype.rotateZ", fd.prototype.ze);
A("X.transform.prototype.translateX", fd.prototype.Ch);
A("X.transform.prototype.translateY", fd.prototype.Dh);
A("X.transform.prototype.translateZ", fd.prototype.Eh);
A("X.transform.prototype.flipX", fd.prototype.Ai);
A("X.transform.prototype.flipY", fd.prototype.Bi);
A("X.transform.prototype.flipZ", fd.prototype.Ci);
A("X.transform.prototype.modified", fd.prototype.q);

function hd() {
    N.call(this);
    this.f = "texture";
    this.Wb = this.ib = this.r = t;
    this.Ve = this.We = 0;
    this.gg = u;
    Ga(this, new yc)
}

C(hd, N);
hd.prototype.__defineSetter__("rawData", function (a) {
    this.Wb = a;
    this.j = q
});
hd.prototype.__defineSetter__("rawDataHeight", function (a) {
    this.Ve = a;
    this.j = q
});
hd.prototype.__defineSetter__("rawDataWidth", function (a) {
    this.We = a;
    this.j = q
});
hd.prototype.__defineSetter__("grayscale", function (a) {
    this.gg = a;
    this.j = q
});
A("X.texture", hd);

function V(a, b) {
    N.call(this);
    this.f = "triplets";
    this.mb = Infinity;
    this.jb = -Infinity;
    this.nb = Infinity;
    this.kb = -Infinity;
    this.ob = Infinity;
    this.lb = -Infinity;
    this.Pd = [0, 0, 0];
    this.fg = q;
    this.C = 0;
    this.da = new Float32Array(a);
    b != t && (this.da = b.da.subarray(0, b.da.length), this.C = this.da.length, this.mb = b.mb, this.jb = b.jb, this.nb = b.nb, this.kb = b.kb, this.ob = b.ob, this.lb = b.lb, this.Pd = b.Pd.slice(), this.fg = u)
}

C(V, N);
w = V.prototype;
w.add = function (a, b, c) {
    this.mb = Math.min(this.mb, a);
    this.jb = Math.max(this.jb, a);
    this.nb = Math.min(this.nb, b);
    this.kb = Math.max(this.kb, b);
    this.ob = Math.min(this.ob, c);
    this.lb = Math.max(this.lb, c);
    this.Pd = [(this.mb + this.jb) / 2, (this.nb + this.kb) / 2, (this.ob + this.lb) / 2];
    this.fg = u;
    this.j = q;
    this.da[this.C++] = a;
    this.da[this.C++] = b;
    this.da[this.C++] = c;
    return this.C / 3
};
w.Jb = function () {
    if (this.C != this.da.length) {
        var a = new Float32Array(this.C);
        a.set(this.da.subarray(0, this.C));
        this.da = a
    }
};
w.get = function (a) {
    a *= 3;
    return [this.da[a], this.da[a + 1], this.da[a + 2]]
};
w.remove = function () {
    m(Error("Not implemented."))
};
w.clear = function () {
    this.da = new Float32Array(this.da.length);
    this.j = q
};
V.prototype.__defineGetter__("count", function () {
    this.Jb();
    return this.da.length / 3
});
V.prototype.__defineGetter__("length", function () {
    this.Jb();
    return this.da.length
});
A("X.triplets", V);
A("X.triplets.prototype.add", V.prototype.add);
A("X.triplets.prototype.resize", V.prototype.Jb);
A("X.triplets.prototype.get", V.prototype.get);
A("X.triplets.prototype.remove", V.prototype.remove);
A("X.triplets.prototype.clear", V.prototype.clear);

function id() {
    this.Ha = jd;
    this.ja = new fd;
    this.w = [1, 1, 1];
    this.nc = this.G = this.oa = this.n = this.h = t;
    this.Mc = [];
    this.O = q;
    this.Lc = this.qd = 1;
    this.Dc = t;
    this.gd = u;
    this.ua = 1;
    this.ya = 0;
    this.pd = q
}

var jd = "TRIANGLES";
id.prototype.__defineSetter__("type", function (a) {
    return this.Ha = a
});
id.prototype.__defineGetter__("type", v("Ha"));
id.prototype.__defineGetter__("texture", function () {
    this.G || (this.G = new hd);
    return this.G
});
id.prototype.__defineGetter__("transform", v("ja"));
id.prototype.__defineGetter__("points", v("h"));
id.prototype.__defineSetter__("points", ea("h"));
id.prototype.__defineGetter__("normals", v("n"));
id.prototype.__defineSetter__("normals", ea("n"));
id.prototype.__defineGetter__("colors", v("oa"));
id.prototype.__defineSetter__("colors", ea("oa"));
id.prototype.__defineGetter__("color", v("w"));
id.prototype.__defineSetter__("color", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid color."));
    for (var b = this.c, c = b.length, e = 0, e = 0; e < c; e++) b[e].color = a;
    this.w = a;
    this.j = q
});
id.prototype.__defineGetter__("opacity", v("ua"));
id.prototype.__defineSetter__("opacity", function (a) {
    (!x(a) || 1 < a || 0 > a) && m(Error("Invalid opacity."));
    for (var b = this.c, c = b.length, e = 0, e = 0; e < c; e++) b[e] != t && (b[e].opacity = a);
    this.ua = a;
    this.j = q
});
id.prototype.__defineGetter__("caption", v("Dc"));
id.prototype.__defineSetter__("caption", function (a) {
    this.Dc = a;
    this.j = q
});
id.prototype.__defineGetter__("visible", v("O"));
id.prototype.__defineSetter__("visible", function (a) {
    for (var b = this.c, c = b.length, e = 0, e = 0; e < c; e++) b[e] != t && (b[e].visible = a);
    this.O = a;
    this.j = q
});
id.prototype.__defineGetter__("pointsize", v("qd"));
id.prototype.__defineSetter__("pointsize", function (a) {
    x(a) || m(Error("Invalid point size."));
    this.qd = a;
    this.j = q
});
id.prototype.__defineGetter__("magicmode", v("gd"));
id.prototype.__defineSetter__("magicmode", function (a) {
    "boolean" != typeof a && m(Error("Invalid magic mode setting."));
    this.gd = a;
    this.j = q
});
id.prototype.__defineGetter__("linewidth", v("Lc"));
id.prototype.__defineSetter__("linewidth", function (a) {
    x(a) || m(Error("Invalid line width."));
    this.Lc = a;
    this.j = q
});
id.prototype.__defineGetter__("pickable", v("pd"));
id.prototype.__defineSetter__("pickable", function (a) {
    "boolean" != typeof a && m(Error("Invalid pickable setting."));
    this.pd = a;
    this.j = q
});
id.prototype.__defineGetter__("textureCoordinateMap", v("nc"));
id.prototype.__defineSetter__("textureCoordinateMap", ea("rl"));

function kd() {
    this.Oa = Infinity;
    this.U = this.ia = -Infinity;
    this.W = Infinity;
    this.Rb = [0, 0, 0];
    this.Pb = [1, 1, 1]
}

kd.prototype.__defineGetter__("lowerThreshold", v("U"));
kd.prototype.__defineSetter__("lowerThreshold", ea("U"));
kd.prototype.__defineGetter__("upperThreshold", v("W"));
kd.prototype.__defineSetter__("upperThreshold", ea("W"));
kd.prototype.__defineGetter__("min", v("Oa"));
kd.prototype.__defineGetter__("max", v("ia"));
kd.prototype.__defineGetter__("minColor", v("Rb"));
kd.prototype.__defineSetter__("minColor", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid min. color."));
    this.Rb = a
});
kd.prototype.__defineGetter__("maxColor", v("Pb"));
kd.prototype.__defineSetter__("maxColor", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid max. color."));
    this.Pb = a
});

function ld() {
    N.call(this);
    this.f = "scalars";
    this.cd = this.I = t;
    this.tg = q;
    this.Ke = 0;
    Ga(this, new yc);
    Ga(this, new kd);
    this.Rb = [0, 1, 0];
    this.Pb = [1, 0, 0]
}

C(ld, N);
ld.prototype.__defineGetter__("array", v("I"));
ld.prototype.__defineSetter__("array", function (a) {
    this.cd = this.I = a;
    this.j = q
});
ld.prototype.__defineGetter__("interpolation", v("Ke"));
ld.prototype.__defineSetter__("interpolation", ea("Ke"));
A("X.scalars", ld);

function W(a) {
    N.call(this);
    this.f = "object";
    this.c = [];
    this.F = this.xa = t;
    Ga(this, new id);
    a != t && this.rc(a)
}

C(W, N);
W.prototype.rc = function (a) {
    this.Ha = a.Ha;
    this.ja = new fd;
    this.ja.Q = new Float32Array(a.ja.Q);
    this.w = a.w.slice();
    a.h && (this.h = new V(a.h.length, a.h));
    a.n && (this.n = new V(a.n.length, a.n));
    a.oa && (this.oa = new V(a.oa.length, a.oa));
    this.G = a.G;
    this.nc = a.nc;
    a.r && (this.r = new xc((new String(a.r.$d)).toString()));
    this.ua = a.ua;
    this.c.length = 0;
    var b = a.c;
    if (b) for (var c = b.length, e = 0, e = 0; e < c; e++) this.c.push(new D[b[e].f](b[e]));
    this.O = a.O;
    this.qd = a.qd;
    this.Lc = a.Lc;
    a.Dc && (this.Dc = (new String(a.Dc)).toString());
    this.gd =
        a.gd;
    this.pd = a.pd;
    this.Mc = a.Mc.slice();
    this.j = q
};
W.prototype.__defineGetter__("colortable", function () {
    this.xa || (this.xa = new Ec);
    return this.xa
});
W.prototype.__defineGetter__("scalars", function () {
    this.F || (this.F = new ld);
    return this.F
});
W.prototype.__defineGetter__("children", v("c"));
W.prototype.q = function () {
    var a = new md;
    a.D = this;
    this.dispatchEvent(a)
};
W.prototype.remove = function () {
    var a = new nd;
    a.D = this;
    this.dispatchEvent(a)
};
W.prototype.Ta = function () {
    ec(this);
    if (0 < this.c.length) for (var a = this.c, b = a.length, c = 0, c = 0; c < b; c++) "undefined" != typeof a[c] && this.c[c].Ta();
    this.c.length = 0;
    this.F = this.xa = t
};

function od(a, b) {
    (a == t || b == t || !(a instanceof W) || !(b instanceof W)) && m(Error("Fatal: Two valid X.objects are required for comparison."));
    return 1 == a.ua ? -1 : 1 == b.ua ? 1 : a.ya != t && b.ya != t && a.ya > b.ya ? -1 : 1
}

A("X.object", W);
A("X.object.prototype.modified", W.prototype.q);
A("X.object.prototype.remove", W.prototype.remove);
A("X.object.prototype.destroy", W.prototype.Ta);

function pd() {
}

function qd(a) {
    for (var b = a.h.count, c = [], e = 0, e = 0; e < b; e += 3) {
        var d = a.h.get(e), f = a.h.get(e + 1), g = a.h.get(e + 2), h = a.n.get(e), l = a.n.get(e + 1),
            j = a.n.get(e + 2), k = a.w;
        a.oa && 0 < a.oa.length && (k = a.oa.get(e));
        var n = [];
        n.push(new lc(d, h));
        n.push(new lc(f, l));
        n.push(new lc(g, j));
        c.push(new nc(n, k))
    }
    return vc(c)
}

function rd(a, b) {
    (b == t || !(b instanceof uc)) && m(Error("Invalid CSG object."));
    var c = new wc, e = [];
    Mb(b.Z, function (a) {
        var b = [], g = a.Ce, b = Mb(a.Lb, function (a) {
            a.color = g;
            return c.add(a)
        });
        for (a = a = 2; a < b.length; a++) e.push([b[0], b[a - 1], b[a]])
    }.bind(a));
    a.Uh = Mb(c.unique(), function (a) {
        return [a.Wa.x(), a.Wa.y(), a.Wa.d()]
    });
    a.Th = Mb(c.unique(), function (a) {
        return [a.va.x(), a.va.y(), a.va.d()]
    });
    a.Sh = Mb(c.unique(), function (a) {
        return !a.color ? t : [a.color[0], a.color[1], a.color[2]]
    });
    a.h = new V(9 * e.length);
    a.n = new V(9 * e.length);
    a.oa = new V(9 * e.length);
    Mb(e, function (a) {
        var b = a[0], c = a[1];
        a = a[2];
        var e = this.Uh, l = this.Th, j = this.Sh;
        this.h.add(e[b][0], e[b][1], e[b][2]);
        this.h.add(e[c][0], e[c][1], e[c][2]);
        this.h.add(e[a][0], e[a][1], e[a][2]);
        this.n.add(l[b][0], l[b][1], l[b][2]);
        this.n.add(l[c][0], l[c][1], l[c][2]);
        this.n.add(l[a][0], l[a][1], l[a][2]);
        j[b] && this.oa.add(j[b][0], j[b][1], j[b][2]);
        j[c] && this.oa.add(j[c][0], j[c][1], j[c][2]);
        j[a] && this.oa.add(j[a][0], j[a][1], j[a][2])
    }.bind(a));
    0 == a.oa.C && (a.oa = t);
    a.Ha = jd
}

pd.prototype.Wf = function (a) {
    (a == t || !(a instanceof uc) && !(a instanceof W)) && m(Error("Invalid object."));
    var b = a;
    a instanceof W && (b = qd(b));
    a = new W;
    Ga(a, new pd);
    rd(a, qd(this).Wf(b));
    return a
};
pd.prototype.wa = function (a) {
    (a == t || !(a instanceof uc) && !(a instanceof W)) && m(Error("Invalid object."));
    var b = a;
    a instanceof W && (b = qd(b));
    a = new W;
    Ga(a, new pd);
    rd(a, qd(this).wa(b));
    return a
};
pd.prototype.uf = function (a) {
    (a == t || !(a instanceof uc) && !(a instanceof W)) && m(Error("Invalid object."));
    var b = a;
    a instanceof W && (b = qd(b));
    a = new W;
    Ga(a, new pd);
    rd(a, qd(this).uf(b));
    return a
};
pd.prototype.inverse = function () {
    var a = new W;
    Ga(a, new pd);
    rd(a, qd(this).inverse());
    return a
};
A("X.constructable", pd);
A("X.constructable.prototype.intersect", pd.prototype.uf);
A("X.constructable.prototype.inverse", pd.prototype.inverse);
A("X.constructable.prototype.subtract", pd.prototype.wa);
A("X.constructable.prototype.union", pd.prototype.Wf);

function sd(a) {
    Sb.call(this, a);
    this.f = "event"
}

C(sd, Sb);
var td = jc("pan"), ud = jc("rotate"), vd = jc("zoom"), wd = jc("scroll");
jc("render");
var xd = jc("resetview"), yd = jc("windowlevel"), zd = jc("modified"), Ad = jc("remove"), Bd = jc("progress"),
    Cd = jc("hover"), Dd = jc("hover_end"), Ed = jc("computing"), Fd = jc("computing_end"),
    Gd = jc("computing_progress");

function Hd() {
    sd.call(this, yd);
    this.Pe = this.bf = 0
}

C(Hd, sd);

function Id() {
    sd.call(this, td);
    this.ya = new D.m(0, 0, 0)
}

C(Id, sd);

function Jd() {
    sd.call(this, ud);
    this.ya = new D.m(0, 0, 0)
}

C(Jd, sd);

function Kd() {
    sd.call(this, vd);
    this.hb = this.wb = u
}

C(Kd, sd);

function Ld() {
    sd.call(this, wd);
    this.V = u
}

C(Ld, sd);

function Md() {
    sd.call(this, Cd);
    this.fe = this.ee = 0
}

C(Md, sd);

function Nd() {
    sd.call(this, Dd)
}

C(Nd, sd);

function Od() {
    sd.call(this, xd)
}

C(Od, sd);

function md() {
    sd.call(this, zd);
    this.v = this.D = t
}

C(md, sd);

function nd() {
    sd.call(this, Ad);
    this.v = this.D = t
}

C(nd, sd);

function Pd() {
    sd.call(this, Bd);
    this.yd = 0
}

C(Pd, sd);

function Qd() {
    sd.call(this, Ed);
    this.D = t
}

C(Qd, sd);

function Rd() {
    sd.call(this, Gd);
    this.yd = 0
}

C(Rd, sd);

function Sd() {
    sd.call(this, Fd);
    this.D = t
}

C(Sd, sd);
A("X.event.events.PAN", td);
A("X.event.events.ROTATE", ud);
A("X.event.events.ZOOM", vd);
A("X.event.events.SCROLL", wd);

function Td(a, b, c) {
    a == t && m(Error("Invalid GL Buffer."));
    b == t && m(Error("Invalid number of items."));
    c == t && m(Error("Invalid item size."));
    N.call(this);
    this.f = "buffer";
    this.P = a;
    this.dd = b;
    this.Ob = c
}

C(Td, N);
var Ud;

function Vd(a, b) {
    var c;
    c = a.className;
    c = ma(c) && c.match(/\S+/g) || [];
    for (var e = Pb(arguments, 1), d = c.length + e.length, f = c, g = 0; g < e.length; g++) 0 <= Jb(f, e[g]) || f.push(e[g]);
    a.className = c.join(" ");
    return c.length == d
};

function Wd(a, b) {
    this.width = a;
    this.height = b
}

w = Wd.prototype;
w.l = function () {
    return new Wd(this.width, this.height)
};
w.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
w.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
w.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
w.scale = function (a, b) {
    var c = x(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
var Xd = !L || L && 9 <= Fb;
!lb && !L || L && L && 9 <= Fb || lb && Db("1.9.1");
L && Db("9");

function Yd(a, b) {
    this.x = ja(a) ? a : 0;
    this.y = ja(b) ? b : 0
}

w = Yd.prototype;
w.l = function () {
    return new Yd(this.x, this.y)
};

function Zd(a, b) {
    return new Yd(a.x - b.x, a.y - b.y)
}

w.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
w.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
w.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
w.translate = function (a, b) {
    a instanceof Yd ? (this.x += a.x, this.y += a.y) : (this.x += a, x(b) && (this.y += b));
    return this
};
w.scale = function (a, b) {
    var c = x(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};

function $d(a) {
    return a ? new ae(be(a)) : Ud || (Ud = new ae)
}

function ce(a) {
    return ma(a) ? document.getElementById(a) : a
}

var de = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function ee(a, b, c) {
    return fe(document, arguments)
}

function fe(a, b) {
    var c = b[0], e = b[1];
    if (!Xd && e && (e.name || e.type)) {
        c = ["<", c];
        e.name && c.push(' name="', Sa(e.name), '"');
        if (e.type) {
            c.push(' type="', Sa(e.type), '"');
            var d = {};
            Ra(d, e);
            delete d.type;
            e = d
        }
        c.push(">");
        c = c.join("")
    }
    var f = a.createElement(c);
    e && (ma(e) ? f.className = e : ka(e) ? Vd.apply(t, [f].concat(e)) : Na(e, function (a, b) {
        "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in de ? f.setAttribute(de[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ? f.setAttribute(b, a) :
            f[b] = a
    }));
    if (2 < b.length) {
        e = function (b) {
            b && f.appendChild(ma(b) ? a.createTextNode(b) : b)
        };
        for (c = 2; c < b.length; c++) {
            var g = b[c];
            if (la(g) && !(pa(g) && 0 < g.nodeType)) {
                var d = Lb, h;
                a:{
                    if ((h = g) && "number" == typeof h.length) {
                        if (pa(h)) {
                            h = "function" == typeof h.item || "string" == typeof h.item;
                            break a
                        }
                        if (oa(h)) {
                            h = "function" == typeof h.item;
                            break a
                        }
                    }
                    h = u
                }
                if (h) if (h = g.length, 0 < h) {
                    for (var l = Array(h), j = 0; j < h; j++) l[j] = g[j];
                    g = l
                } else g = [];
                d(g, e)
            } else e(g)
        }
    }
    return f
}

function ge(a) {
    return "CSS1Compat" == a.compatMode
}

function he(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function ie(a) {
    for (; a && 1 != a.nodeType;) a = a.nextSibling;
    return a
}

function je(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function be(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function ae(a) {
    this.ka = a || fa.document || document
}

w = ae.prototype;
w.me = $d;
w.t = function (a) {
    return ma(a) ? this.ka.getElementById(a) : a
};
w.Kh = ae.prototype.t;
w.Vc = function (a, b, c) {
    return fe(this.ka, arguments)
};
w.createElement = function (a) {
    return this.ka.createElement(a)
};
w.createTextNode = function (a) {
    return this.ka.createTextNode(String(a))
};

function ke(a) {
    return ge(a.ka)
}

function le(a) {
    var b = a.ka;
    a = !mb && ge(b) ? b.documentElement : b.body;
    b = b.parentWindow || b.defaultView;
    return L && Db("10") && b.pageYOffset != a.scrollTop ? new Yd(a.scrollLeft, a.scrollTop) : new Yd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}

w.appendChild = function (a, b) {
    a.appendChild(b)
};
w.contains = je;

function me(a, b, c, e) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = e
}

w = me.prototype;
w.l = function () {
    return new me(this.top, this.right, this.bottom, this.left)
};
w.contains = function (a) {
    return !this || !a ? u : a instanceof me ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
w.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
w.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
w.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
w.translate = function (a, b) {
    a instanceof Yd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, x(b) && (this.top += b, this.bottom += b));
    return this
};
w.scale = function (a, b) {
    var c = x(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};

function ne(a, b, c, e) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = e
}

w = ne.prototype;
w.l = function () {
    return new ne(this.left, this.top, this.width, this.height)
};
w.Sg = function (a) {
    var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
        var e = Math.max(this.top, a.top);
        a = Math.min(this.top + this.height, a.top + a.height);
        if (e <= a) return this.left = b, this.top = e, this.width = c - b, this.height = a - e, q
    }
    return u
};
w.contains = function (a) {
    return a instanceof ne ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};

function oe(a, b) {
    var c = b.x < a.left ? a.left - b.x : Math.max(b.x - (a.left + a.width), 0),
        e = b.y < a.top ? a.top - b.y : Math.max(b.y - (a.top + a.height), 0);
    return c * c + e * e
}

w.qf = function (a) {
    return Math.sqrt(oe(this, a))
};
w.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
w.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
w.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
w.translate = function (a, b) {
    a instanceof Yd ? (this.left += a.x, this.top += a.y) : (this.left += a, x(b) && (this.top += b));
    return this
};
w.scale = function (a, b) {
    var c = x(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};

function pe(a, b) {
    var c = be(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, t)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function qe(a, b) {
    return pe(a, b) || (a.currentStyle ? a.currentStyle[b] : t) || a.style && a.style[b]
}

function re(a) {
    a = a ? be(a) : document;
    return L && !(L && 9 <= Fb) && !ke($d(a)) ? a.body : a.documentElement
}

function se(a) {
    var b = a.getBoundingClientRect();
    L && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function te(a) {
    if (L && !(L && 8 <= Fb)) return a.offsetParent;
    var b = be(a), c = qe(a, "position"), e = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode) if (c = qe(a, "position"), e = e && "static" == c && a != b.documentElement && a != b.body, !e && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return t
}

function ue(a) {
    for (var b = new me(0, Infinity, Infinity, 0), c = $d(a), e = c.ka.body, d = c.ka.documentElement, f = !mb && ge(c.ka) ? c.ka.documentElement : c.ka.body; a = te(a);) if ((!L || 0 != a.clientWidth) && (!mb || 0 != a.clientHeight || a != e) && a != e && a != d && "visible" != qe(a, "overflow")) {
        var g = ve(a), h;
        h = a;
        if (lb && !Db("1.9")) {
            var l = parseFloat(pe(h, "borderLeftWidth"));
            if (we(h)) var j = h.offsetWidth - h.clientWidth - l - parseFloat(pe(h, "borderRightWidth")), l = l + j;
            h = new Yd(l, parseFloat(pe(h, "borderTopWidth")))
        } else h = new Yd(h.clientLeft, h.clientTop);
        g.x += h.x;
        g.y += h.y;
        b.top = Math.max(b.top, g.y);
        b.right = Math.min(b.right, g.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
        b.left = Math.max(b.left, g.x)
    }
    e = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, e);
    b.top = Math.max(b.top, f);
    c = (c.ka.parentWindow || c.ka.defaultView || window).document;
    c = ge(c) ? c.documentElement : c.body;
    c = new Wd(c.clientWidth, c.clientHeight);
    b.right = Math.min(b.right, e + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ?
        b : t
}

function ve(a) {
    var b, c = be(a), e = qe(a, "position"),
        d = lb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == e && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        f = new Yd(0, 0), g = re(c);
    if (a == g) return f;
    if (a.getBoundingClientRect) b = se(a), a = le($d(c)), f.x = b.left + a.x, f.y = b.top + a.y; else if (c.getBoxObjectFor && !d) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY; else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (mb && "fixed" == qe(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (jb || mb && "absolute" == e) f.y -= c.body.offsetTop;
        for (b = a; (b = te(b)) && b != c.body && b != g;) if (f.x -= b.scrollLeft, !jb || "TR" != b.tagName) f.y -= b.scrollTop
    }
    return f
}

function xe(a) {
    var b = new Yd;
    if (1 == a.nodeType) {
        if (a.getBoundingClientRect) {
            var c = se(a);
            b.x = c.left;
            b.y = c.top
        } else {
            var c = le($d(a)), e = ve(a);
            b.x = e.x - c.x;
            b.y = e.y - c.y
        }
        if (lb && !Db(12)) {
            var d;
            L ? d = "-ms-transform" : mb ? d = "-webkit-transform" : jb ? d = "-o-transform" : lb && (d = "-moz-transform");
            var f;
            d && (f = qe(a, d));
            f || (f = qe(a, "transform"));
            f ? (a = f.match(ye), a = !a ? new Yd(0, 0) : new Yd(parseFloat(a[1]), parseFloat(a[2]))) : a = new Yd(0, 0);
            b = new Yd(b.x + a.x, b.y + a.y)
        }
    } else d = oa(a.Fi), f = a, a.targetTouches ? f = a.targetTouches[0] : d && a.tb.targetTouches &&
        (f = a.tb.targetTouches[0]), b.x = f.clientX, b.y = f.clientY;
    return b
}

function ze(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}

function Ae(a) {
    if ("none" != qe(a, "display")) return Be(a);
    var b = a.style, c = b.display, e = b.visibility, d = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = Be(a);
    b.display = c;
    b.position = d;
    b.visibility = e;
    return a
}

function Be(a) {
    var b = a.offsetWidth, c = a.offsetHeight, e = mb && !b && !c;
    return (!ja(b) || e) && a.getBoundingClientRect ? (a = se(a), new Wd(a.right - a.left, a.bottom - a.top)) : new Wd(b, c)
}

function Ce(a, b) {
    a.style.display = b ? "" : "none"
}

function we(a) {
    return "rtl" == qe(a, "direction")
}

function De(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left, e = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var d = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = e;
    return d
}

function Ee(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : t;
    return c ? De(a, c) : 0
}

var Fe = {thin: 2, medium: 4, thick: 6};

function Ge(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : t)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : t;
    return c in Fe ? Fe[c] : De(a, c)
}

var ye = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

function He(a, b) {
    kc.call(this);
    this.H = a;
    var c = pa(this.H) && 1 == this.H.nodeType ? this.H : this.H ? this.H.body : t;
    this.$i = !!c && we(c);
    this.Hl = M(this.H, lb ? "DOMMouseScroll" : "mousewheel", this, b)
}

C(He, kc);
He.prototype.handleEvent = function (a) {
    var b = 0, c = 0, e = 0;
    a = a.tb;
    if ("mousewheel" == a.type) {
        c = 1;
        if (L || mb && (db || Db("532.0"))) c = 40;
        e = Ie(-a.wheelDelta, c);
        ja(a.wheelDeltaX) ? (b = Ie(-a.wheelDeltaX, c), c = Ie(-a.wheelDeltaY, c)) : c = e
    } else e = a.detail, 100 < e ? e = 3 : -100 > e && (e = -3), ja(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = e : c = e;
    x(this.Xg) && (b = Math.min(Math.max(b, -this.Xg), this.Xg));
    x(this.Yg) && (c = Math.min(Math.max(c, -this.Yg), this.Yg));
    this.$i && (b = -b);
    b = new Je(e, a, b, c);
    this.dispatchEvent(b)
};

function Ie(a, b) {
    return mb && (bb || eb) && 0 != a % b ? a : a / b
}

function Je(a, b, c, e) {
    b && this.Ba(b, p);
    this.type = "mousewheel";
    this.detail = a;
    this.xl = c;
    this.Wc = e
}

C(Je, Ub);
L || mb && Db("525");

function Ke(a) {
    N.call(this);
    this.f = "interactor";
    this.Na = a;
    this.Qe = this.ng = this.mg = this.og = this.lg = this.pg = t;
    this.Yd = q;
    this.Xb = this.Qb = this.xb = u;
    this.ta = [0, 0];
    this.Le = new D.m(0, 0, 0);
    this.ed = new D.m(0, 0, 0);
    this.Ug = 0;
    this.wg = this.Ud = t;
    this.vg = u;
    this.R = {
        MOUSEWHEEL_ENABLED: q,
        MOUSECLICKS_ENABLED: q,
        KEYBOARD_ENABLED: q,
        HOVERING_ENABLED: q,
        CONTEXTMENU_ENABLED: u,
        TOUCH_ENABLED: q,
        TOUCH_BOUNCING_ENABLED: u
    }
}

C(Ke, N);
Ke.prototype.__defineGetter__("config", v("R"));
Ke.prototype.__defineGetter__("leftButtonDown", v("xb"));
Ke.prototype.__defineGetter__("middleButtonDown", v("Qb"));
Ke.prototype.__defineGetter__("rightButtonDown", v("Xb"));
Ke.prototype.Ba = function () {
    this.R.MOUSEWHEEL_ENABLED ? (this.Qe = new He(this.Na), this.pg = M(this.Qe, "mousewheel", this.Id.bind(this))) : (cc(this.pg), this.Qe = t);
    this.R.MOUSECLICKS_ENABLED ? (this.lg = M(this.Na, "mousedown", this.uj.bind(this)), this.og = M(this.Na, "mouseup", this.zj.bind(this))) : (cc(this.lg), cc(this.og));
    this.Na.oncontextmenu = this.R.CONTEXTMENU_ENABLED ? t : function () {
        return u
    };
    window.onkeydown = this.R.KEYBOARD_ENABLED ? this.hh.bind(this) : t;
    this.R.TOUCH_ENABLED ? (this.R.TOUCH_BOUNCING_ENABLED || document.body.addEventListener("touchmove",
        function (a) {
            a.preventDefault()
        }, u), this.bi = M(this.Na, "touchstart", this.Oj.bind(this)), this.ai = M(this.Na, "touchmove", this.Mj.bind(this)), this.$h = M(this.Na, "touchend", this.Ij.bind(this))) : (cc(this.bi), cc(this.ai), cc(this.$h));
    cc(this.mg);
    cc(this.ng);
    this.mg = M(this.Na, "mousemove", this.wj.bind(this));
    this.ng = M(this.Na, "mouseout", this.xj.bind(this))
};
Ke.prototype.uj = function (a) {
    0 == a.button ? this.xb = q : 1 == a.button ? this.Qb = q : 2 == a.button && (this.Xb = q);
    eval("this.onMouseDown(" + this.xb + "," + this.Qb + "," + this.Xb + ")");
    Le(this);
    a.preventDefault()
};
Ke.prototype.tj = aa();
Ke.prototype.zj = function (a) {
    0 == a.button ? this.xb = u : 1 == a.button ? this.Qb = u : 2 == a.button && (this.Xb = u);
    eval("this.onMouseUp(" + this.xb + "," + this.Qb + "," + this.Xb + ")");
    Le(this);
    a.preventDefault()
};
Ke.prototype.__defineGetter__("mousePosition", v("ta"));
w = Ke.prototype;
w.yj = aa();
w.xj = function (a) {
    this.Yd = u;
    this.R.KEYBOARD_ENABLED && (window.onkeydown = t);
    this.Xb = this.Qb = this.xb = u;
    Le(this);
    this.Le = new D.m(0, 0, 0);
    a.preventDefault()
};
w.vj = aa();
w.Oj = function (a) {
    a.preventDefault();
    a.Ba(a.tb.targetTouches[0], a.currentTarget);
    eval("this.onTouchStart(" + a.clientX + "," + a.clientY + ")");
    this.ed = new D.m(a.clientX, a.clientY, 0);
    this.wg = setTimeout(this.Kj.bind(this, a), 500)
};
w.Nj = aa();
w.Kj = function (a) {
    eval("this.onTouchHover(" + a.clientX + "," + a.clientY + ")");
    a = new Kd;
    a.wb = q;
    a.hb = this instanceof Me;
    this.dispatchEvent(a);
    this.ae = q
};
w.Jj = aa();

function Ne(a) {
    clearTimeout(a.wg);
    if (a.ae) {
        var b = new Kd;
        b.wb = u;
        b.hb = a instanceof Me;
        a.dispatchEvent(b)
    }
    a.ae = u
}

w.Ij = function (a) {
    a.preventDefault();
    eval("this.onTouchEnd()");
    Ne(this)
};
w.Hj = aa();
w.Mj = function (a) {
    a.preventDefault();
    this.ae || Ne(this);
    this.touchmoveEvent = a = a.tb;
    eval("this.onTouchMove(this['touchmoveEvent'])");
    var b = a.targetTouches;
    if (1 == b.length) {
        a = b[0];
        var c = [a.clientX, a.clientY];
        a = new D.m(c[0], c[1], 0);
        var b = c[0] > 3 * this.Na.clientWidth / 4, e = c[0] < this.Na.clientWidth / 4,
            d = c[1] < this.Na.clientHeight / 4, c = c[1] > 3 * this.Na.clientHeight / 4, c = !b && !e && !d && !c,
            d = this.ed.wa(a);
        this.ed = a.l();
        if (this.ae) a = new Id, 5 < d.x ? d.x = 1 : -5 > d.x && (d.x = -1), 5 < d.y ? d.y = 1 : -5 > d.y && (d.y = -1), a.ya = d, this.dispatchEvent(a);
        else if (this instanceof Oe && (b || e)) a = new Ld, a.V = 0 > d.y, this.dispatchEvent(a); else if (this instanceof Me || c) d.scale(3), a = new Jd, a.ya = d, this.dispatchEvent(a)
    } else 2 == b.length && (a = b[0], b = b[1], a = [a.clientX, a.clientY], b = [b.clientX, b.clientY], a = new D.m(a[0], a[1], 0), b = new D.m(b[0], b[1], 0), d = Hc(a, b), b = d - this.Ug, this.Ug = d, this.ed.wa(a), this.ed = a.l(), 10 < Math.abs(b) && (a = new Kd, a.wb = 0 < b, a.hb = this instanceof Me, this.dispatchEvent(a)))
};
w.Lj = aa();
w.wj = function (a) {
    this.mousemoveEvent = a;
    eval("this.onMouseMove(this['mousemoveEvent'])");
    this.Yd = q;
    this.R.KEYBOARD_ENABLED && window.onkeydown == t && (window.onkeydown = this.hh.bind(this));
    a.preventDefault();
    var b = a.shiftKey;
    this.vg = b;
    this.ta = [a.offsetX, a.offsetY];
    var c = new D.m(this.ta[0], this.ta[1], 0);
    a = this.Le.wa(c);
    this.Le = c.l();
    this.R.HOVERING_ENABLED && ((0 < Math.abs(a.x) || 0 < Math.abs(a.y) || this.Qb || this.xb || this.Xb) && Le(this), this.Ud = setTimeout(function () {
        Le(this);
        var a = new Md;
        a.ee = c.x;
        a.fe = c.y;
        this.dispatchEvent(a);
        this.Ud = t
    }.bind(this), 300));
    0 != a.Ib() && (this.xb && !b ? (b = new Jd, a.scale(3), b.ya = a, this.dispatchEvent(b)) : this.Qb || this.xb && b ? (b = new Id, b.ya = a, this.dispatchEvent(b)) : this.Xb && (b = new Kd, b.wb = 0 < a.y, b.hb = u, this.dispatchEvent(b)))
};

function Le(a) {
    a.Ud && clearTimeout(a.Ud);
    a.dispatchEvent(new Nd)
}

w.Aj = aa();
w.Id = function (a) {
    this.mouseWheelEvent = a;
    eval("this.onMouseWheel(this['mouseWheelEvent'])");
    Le(this);
    a.preventDefault()
};
w.rj = aa();
w.hh = function (a) {
    if (this.Yd) {
        this.keyEvent = a;
        eval("this.onKey(this['keyEvent'])");
        Le(this);
        var b = a.altKey, c = a.ctrlKey, e = a.metaKey, d = a.shiftKey, f = a.keyCode;
        82 == f && !b && !c && !e && !d ? (a.preventDefault(), a = new Od, this.dispatchEvent(a)) : 37 <= f && 40 >= f && (a.preventDefault(), d ? a = new Id : b ? a = new Kd : (a = new Jd, this instanceof Oe && (a = new Ld)), a && (c = new D.m(0, 0, 0), 37 == f ? (c.x = 5, a.V = u, b && (a.V = q, a.wb = q, a.hb = u)) : 39 == f ? (c.x = -5, a.V = q, b && (a.wb = u, a.hb = u)) : 38 == f ? (c.y = 5, a.V = q, b && (a.wb = q, a.hb = q)) : 40 == f && (c.y = -5, a.V = u, b && (a.wb =
            u, a.hb = q)), a.ya = c, this.dispatchEvent(a)))
    }
};
A("X.interactor", Ke);
A("X.interactor.prototype.init", Ke.prototype.Ba);
A("X.interactor.prototype.onMouseDown", Ke.prototype.tj);
A("X.interactor.prototype.onMouseUp", Ke.prototype.yj);
A("X.interactor.prototype.onMouseMove", Ke.prototype.vj);
A("X.interactor.prototype.onMouseWheel", Ke.prototype.Aj);
A("X.interactor.prototype.onKey", Ke.prototype.rj);
A("X.interactor.prototype.onTouchStart", Ke.prototype.Nj);
A("X.interactor.prototype.onTouchMove", Ke.prototype.Lj);
A("X.interactor.prototype.onTouchEnd", Ke.prototype.Hj);
A("X.interactor.prototype.onTouchHover", Ke.prototype.Jj);

function Oe(a) {
    Ke.call(this, a);
    this.f = "interactor2D"
}

C(Oe, Ke);
Oe.prototype.Id = function (a) {
    Oe.u.Id.call(this, a);
    var b = new Ld;
    a.Wc == t && (a.Wc = 0);
    b.V = 0 > a.Wc;
    this.dispatchEvent(b)
};

function Pe(a, b) {
    (!x(a) || !x(b)) && m(Error("A camera needs valid width and height values."));
    N.call(this);
    this.f = "camera";
    this.ic = new D.m(0, 100, 0);
    this.Fc = new D.m(0, 0, 0);
    this.V = new D.m(0, 0, 1);
    this.K = a;
    this.A = b;
    this.o = this.te(this.ic, this.Fc)
}

C(Pe, N);
Pe.prototype.observe = function (a) {
    (a == t || !(a instanceof Ke)) && m(Error("Could not observe the interactor."));
    M(a, ud, this.Ej.bind(this));
    M(a, td, this.Bj.bind(this));
    M(a, vd, this.Rj.bind(this))
};
Pe.prototype.Ej = function (a) {
    a instanceof Jd || m(Error("Received no valid rotate event."));
    this.rotate(a.ya)
};
Pe.prototype.Rj = function (a) {
    a instanceof Kd || m(Error("Received no valid zoom event."));
    a.wb ? this.Zf(a.hb) : this.$f(a.hb)
};
Pe.prototype.Bj = function (a) {
    a instanceof Id || m(Error("Received no valid pan event."));
    this.Jf(a.ya)
};
Pe.prototype.__defineGetter__("view", v("o"));
Pe.prototype.__defineSetter__("view", function (a) {
    (a == t || !(a instanceof Float32Array)) && m(Error("Invalid view matrix."));
    this.o = a
});
Pe.prototype.__defineGetter__("position", function () {
    return [this.ic.x, this.ic.y, this.ic.d]
});
Pe.prototype.__defineSetter__("position", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid position."));
    this.ic = new D.m(a[0], a[1], a[2]);
    this.reset()
});
Pe.prototype.__defineGetter__("focus", function () {
    return [this.Fc.x, this.Fc.y, this.Fc.d]
});
Pe.prototype.__defineSetter__("focus", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid focus"));
    this.Fc = new D.m(a[0], a[1], a[2]);
    this.reset()
});
Pe.prototype.__defineGetter__("up", function () {
    return [this.V.x, this.V.y, this.V.d]
});
Pe.prototype.__defineSetter__("up", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid up vector."));
    this.V = new D.m(a[0], a[1], a[2]);
    this.reset()
});
w = Pe.prototype;
w.reset = function () {
    this.o = this.te(this.ic, this.Fc)
};
w.rotate = function (a) {
    ka(a) && 2 == a.length ? a = new D.m(a[0], a[1], 0) : a instanceof D.m || m(Error("Invalid distance vector for rotate operation."));
    return a
};
w.Jf = function (a) {
    ka(a) && 2 == a.length ? a = new D.m(a[0], a[1], 0) : a instanceof D.m || m(Error("Invalid distance vector for pan operation."));
    this.o[12] -= a.x;
    this.o[13] += a.y
};
w.Zf = function (a) {
    var b = 20;
    a != t && !a && (b = 1);
    this.o[14] += b
};
w.$f = function (a) {
    var b = 20;
    a != t && !a && (b = 1);
    this.o[14] -= b
};
w.te = function (a, b) {
    (!(a instanceof D.m) || !(b instanceof D.m)) && m(Error("3D vectors required for calculating the view."));
    return D.g.Cd()
};
A("X.camera", Pe);
A("X.camera.prototype.pan", Pe.prototype.Jf);
A("X.camera.prototype.rotate", Pe.prototype.rotate);
A("X.camera.prototype.zoomIn", Pe.prototype.Zf);
A("X.camera.prototype.zoomOut", Pe.prototype.$f);

function Qe(a, b) {
    Pe.call(this, a, b);
    this.f = "camera3D";
    this.dg = 45;
    this.Ue = D.g.xf(D.g.Cd(), this.dg, a / b, 1, 1E4)
}

C(Qe, Pe);
Qe.prototype.rotate = function (a) {
    a = Qe.u.rotate.call(this, a);
    var b = -a.x / 5 * Math.PI / 180;
    a = -a.y / 5 * Math.PI / 180;
    var c = new D.m(this.o[1], this.o[5], this.o[9]), e = new D.m(this.o[0], this.o[4], this.o[8]);
    c.normalize();
    e.normalize();
    D.g.rotate(this.o, b, c.x, c.y, c.d);
    D.g.rotate(this.o, a, e.x, e.y, e.d)
};
Qe.prototype.te = function (a, b) {
    var c = Qe.u.te.call(this, a, b);
    D.g.Wg(c, a, b, this.V);
    return c
};

function Re(a, b, c, e) {
    var d = new Float32Array(4), f = new Float32Array(4), g = new Float32Array(16), h = new Float32Array(16);
    new Float32Array(16);
    D.g.multiply(a.Ue, a.o, h);
    D.g.Y(h, g);
    d[0] = b;
    d[1] = c;
    d[2] = 2 * e - 1;
    d[3] = 1;
    D.g.$g(g, d, f);
    f[3] = 1 / f[3];
    f[0] *= f[3];
    f[1] *= f[3];
    f[2] *= f[3];
    return f
}

A("X.camera3D", Qe);

function Y() {
    N.call(this);
    this.f = "parser";
    this.J = t;
    this.C = 0;
    this.Yh = 0 < (new Int8Array((new Int16Array([1])).buffer))[0];
    this.Wd = q;
    this.ql = -Infinity;
    this.pl = Infinity
}

C(Y, N);
Y.prototype.parse = function () {
    m(Error("The function parse() should be overloaded."))
};

function Se(a) {
    for (var b = Infinity, c = -Infinity, e = a.length, d = 0, d = 0; d < e; d++) if (!isNaN(a[d])) var f = a[d],
        b = Math.min(b, f), c = Math.max(c, f);
    return [b, c]
}

function Te(a, b, c) {
    b === p && (b = 0);
    c === p && (c = a.length);
    for (var e = "", d = 0, d = b; d < c; ++d) e += String.fromCharCode(a[d]);
    return e
}

function Z(a, b, c) {
    c != t || (c = 1);
    var e = 1, d = Uint8Array;
    switch (b) {
        case "schar":
            d = Int8Array;
            break;
        case "ushort":
            d = Uint16Array;
            e = 2;
            break;
        case "sshort":
            d = Int16Array;
            e = 2;
            break;
        case "uint":
            d = Uint32Array;
            e = 4;
            break;
        case "sint":
            d = Int32Array;
            e = 4;
            break;
        case "float":
            d = Float32Array;
            e = 4;
            break;
        case "complex":
            d = Float64Array;
            e = 8;
            break;
        case "double":
            d = Float64Array, e = 8
    }
    b = new d(a.J.slice(a.C, a.C += c * e));
    if (a.Yh != a.Wd) {
        a = b;
        b = new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        for (d = 0; d < a.byteLength; d += e) for (var f = d + e - 1, g = d; f >
        g; f--, g++) {
            var h = b[g];
            b[g] = b[f];
            b[f] = h
        }
        b = a
    }
    return 1 == c ? b[0] : b
}

function Ue(a, b) {
    var c = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE],
        e = Rc(0, 0, 0, 1), d = Qc();
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Rc(0, 0, b[2] - 1, 1);
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Rc(0, b[1] -
        1, 0, 1);
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Rc(b[0] - 1, 0, 0, 1);
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Rc(b[0] - 1, b[1] - 1, 0, 1);
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Rc(b[0] - 1, 0, b[2] - 1, 1);
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Rc(0, b[1] - 1, b[2] - 1, 1);
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] : c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    e = Rc(b[0] - 1, b[1] - 1, b[2] - 1, 1);
    dd(a, e, d);
    c[0] = d[0] < c[0] ? d[0] : c[0];
    c[1] = d[0] > c[1] ? d[0] : c[1];
    c[2] = d[1] < c[2] ? d[1] :
        c[2];
    c[3] = d[1] > c[3] ? d[1] : c[3];
    c[4] = d[2] < c[4] ? d[2] : c[4];
    c[5] = d[2] > c[5] ? d[2] : c[5];
    return c
}

function Ve(a, b) {
    var c = Tc();
    if (!(a.length == b.length && a[0] == b[0] && a[1] == b[1] && a[2] == b[2])) {
        var e = Math.acos(a[2]), d = Nc(), f = a[0], g = a[1], h = a[2], l = b[0], j = b[1], k = b[2];
        d[0] = g * k - h * j;
        d[1] = h * l - f * k;
        d[2] = f * j - g * l;
        Pc(d, d);
        f = Math.cos(e / 2);
        g = Math.sin(e / 2) * d[0];
        h = Math.sin(e / 2) * d[1];
        e = Math.sin(e / 2) * d[2];
        T(c, 0, f * f + g * g - h * h - e * e, 2 * (g * h - f * e), 2 * (g * e + f * h), 0);
        T(c, 1, 2 * (g * h + f * e), f * f + h * h - g * g - e * e, 2 * (h * e - f * g), 0);
        T(c, 2, 2 * (g * e - f * h), 2 * (h * e + f * g), f * f + e * e - h * h - g * g, 0)
    }
    e = Sc();
    bd(c, e);
    return [c, e]
}

function We(a, b, c, e, d, f, g, h, l) {
    var j = new Xe;
    Pc(c, c);
    for (var k = [], n = [], s = 0; 6 > s; s++) for (var r = Math.floor(s / 2), y = (r + 1) % 3, z = (r + 2) % 3, F = (4 + 2 * r) % 6, G = 0; 2 > G; G++) {
        var I = (2 + G + 2 * r) % 6, B = -(c[r] * (d[s] - a[r]) + c[y] * (d[I] - a[y])) / c[z] + a[z];
        if (B >= d[F] && B <= d[F + 1] || B <= d[F] && B >= d[F + 1]) {
            var E = [];
            E[r] = d[s];
            E[y] = d[I];
            E[z] = B;
            k.push(E)
        } else E = [], E[r] = d[s], E[y] = d[I], E[z] = B, n.push(E)
    }
    a = Oc(0, 0, 1);
    a = Ve(c, a);
    d = a[0];
    a = a[1];
    r = [];
    for (n = 0; n < k.length; ++n) s = Rc(k[n][0], k[n][1], k[n][2], 1), y = Qc(), dd(d, s, y), r.push([y[0], y[1], y[2]]);
    d = Oc(1,
        0, 0);
    k = Nc();
    cd(a, d, k);
    n = Oc(0, 1, 0);
    d = Nc();
    cd(a, n, d);
    s = [Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE];
    for (n = n = 0; n < r.length; ++n) r[n][0] < s[0] && (s[0] = r[n][0]), r[n][0] > s[1] && (s[1] = r[n][0]), r[n][1] < s[2] && (s[2] = r[n][1]), r[n][1] > s[3] && (s[3] = r[n][1]), r[n][2] < s[4] && (s[4] = r[n][2]), r[n][2] > s[5] && (s[5] = r[n][2]);
    n = Rc(s[0] + (s[1] - s[0]) / 2, s[2] + (s[3] - s[2]) / 2, s[4] + (s[5] - s[4]) / 2, 0);
    r = Qc();
    ad(a, n, r);
    y = Math.floor(s[0]);
    z = Math.ceil(s[1]);
    y == z && z++;
    F = z - y;
    G = Math.floor(s[2]);
    I = Math.ceil(s[3]);
    G == I && I++;
    B = I - G;
    E = b[0];
    b = b[1];
    var n = Math.ceil(F / E), J = Math.ceil(B / b), O = new Uint8Array(4 * n * J), R = new hd;
    R.We = n;
    R.Ve = J;
    var J = Qc(), P = Rc(0, 0, s[4], 1), U = Sc();
    ad(g.Ph, a, U);
    for (var ba = I - 1E-7, ca = z - 1E-7, K = 0, na = 0, H = 0, Pa = G, Pa = G; Pa <= ba; Pa += b) {
        H++;
        na = 0;
        P[1] = Pa;
        for (n = y; n <= ca; n += E) {
            na++;
            P[0] = n;
            dd(U, P, J);
            var Fa = 4 * K, tb = Math.floor(J[2]), ub = Math.floor(J[1]), vb = Math.floor(J[0]);
            if (0 <= vb && vb < g.ca[0] && 0 <= ub && ub < g.ca[1] && 0 <= tb && tb < g.ca[2]) {
                var kb = f[tb][ub][vb], Zc = vb = ub = tb = 0;
                l ? ((kb = l.get(kb)) || (kb = [0, 0.61,
                    0, 0, 1]), tb = 255 * kb[1], ub = 255 * kb[2], vb = 255 * kb[3], Zc = 255 * kb[4]) : (tb = ub = vb = 255 * (kb / g.ia), Zc = 255);
                O[Fa] = tb;
                O[++Fa] = ub;
                O[++Fa] = vb;
                O[++Fa] = Zc
            } else O[Fa] = 0, O[++Fa] = 0, O[++Fa] = 0, O[++Fa] = 0;
            K++
        }
    }
    R.Wb = O;
    j.G = R;
    j.di = s;
    j.Rh = a;
    j.Qh = U;
    j.Xh = G;
    j.nl = I;
    j.ci = y;
    j.sl = z;
    j.ig = na;
    j.hg = H;
    j.Uc = E;
    j.K = F;
    j.Gc = b;
    j.A = B;
    j.z = [r[0], r[1], r[2]];
    j.gc = [c[0], c[1], c[2]];
    j.Nc = [k[0], k[1], k[2]];
    j.V = [d[0], d[1], d[2]];
    j.O = u;
    j.yb = g;
    j.Bb = g.yb != t && !h ? u : q;
    j.ec = e;
    j.Gb();
    j.O = u;
    return j
}

function Ye(a, b, c, e) {
    var d;
    d = e.ma;
    for (var f = [], g = [], h = 0; 6 > h; h++) {
        var l = Math.floor(h / 2), j = (l + 1) % 3, k = (l + 2) % 3, n = (2 + 2 * l) % 6, s = (4 + 2 * l) % 6,
            r = (d[h] - b[l]) * (1 / c[l]);
        if (Infinity != r && -Infinity != r) {
            var y = b[j] + c[j] * r, r = b[k] + c[k] * r;
            y >= d[n] && y <= d[n + 1] && r >= d[s] && r <= d[s + 1] ? (n = [], n[l] = d[h], n[j] = y, n[k] = r, f.push(n)) : (n = [], n[l] = d[h], n[j] = y, n[k] = r, g.push(n))
        }
    }
    d = [f, g];
    b = d[0];
    e.b[a].k = d;
    d = Gc(new S(b[0][0], b[0][1], b[0][2]), new S(b[1][0], b[1][1], b[1][2]));
    e.b[a].ml = d;
    f = Oc(0, 0, 1);
    g = Ve(c, f)[0];
    h = Rc(e.$c[0], e.$c[1], e.$c[2], 0);
    f = Qc();
    dd(g, h, f);
    g = Qc();
    h = f[2];
    g[0] = c[0] * h;
    g[1] = c[1] * h;
    g[2] = c[2] * h;
    g[3] = c[3] * h;
    0.5 > Math.abs(f[0]) && (f[0] = 0.5);
    0.5 > Math.abs(f[1]) && (f[1] = 0.5);
    e.b[a].Fa = [Math.abs(f[0]), Math.abs(f[1])];
    e.b[a].Rc = f[2];
    e.b[a].B = g;
    d = Math.floor(Math.abs(d / f[2]));
    e.sd[a] = d + 1;
    e.b[a].p = d + 1;
    e.b[a].k[0][0][0] > e.b[a].k[0][1][0] ? 0 < g[0] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][0] < e.b[a].k[0][1][0] ? 0 > g[0] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][1] >
    e.b[a].k[0][1][1] ? 0 < g[1] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][1] < e.b[a].k[0][1][1] ? 0 > g[1] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][2] > e.b[a].k[0][1][2] ? 0 < g[2] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d) : e.b[a].k[0][0][2] < e.b[a].k[0][1][2] && 0 > g[2] && (d = e.b[a].k[0][0], e.b[a].k[0][0] = e.b[a].k[0][1], e.b[a].k[0][1] = d);
    e.b[a].Se = -(c[0] * b[0][0] + c[1] * b[0][1] + c[2] * b[0][2])
}

function af(a, b) {
    var c;
    c = b.J;
    for (var e = b.ca, d = b.ia, f = Array(e[2]), g = Array(e[2]), h = e[1] * e[0], l = 0, j = 0, k = 0, n = 0, s = 0, n = 0; n < e[2]; n++) {
        var r = c.subarray(n * h, (n + 1) * h), s = 0;
        g[n] = Array(e[1]);
        f[n] = Array(e[1]);
        for (k = 0; k < e[1]; k++) {
            g[n][k] = new c.constructor(e[0]);
            f[n][k] = new c.constructor(e[0]);
            for (j = 0; j < e[0]; j++) l = r[s], g[n][k][j] = 255 * (l / d), f[n][k][j] = l, s++
        }
    }
    c = [f, g];
    b.$ = c[0];
    b.ag = c[1];
    D.Ia(a.f + ".reslice");
    b.L = b.e != t;
    b.xa && (b.bd = b.xa.Ja);
    b.Ql = [0, 0, 0];
    b.s = [b.Da[0] + (b.gb[0] - 1) / 2, b.Da[1] + (b.gb[1] - 1) / 2, b.Da[2] + (b.gb[2] -
        1) / 2];
    b.ma = [Math.min(b.Da[0], b.Da[0] + b.gb[0] - 1), Math.max(b.Da[0], b.Da[0] + b.gb[0] - 1), Math.min(b.Da[1], b.Da[1] + b.gb[1] - 1), Math.max(b.Da[1], b.Da[1] + b.gb[1] - 1), Math.min(b.Da[2], b.Da[2] + b.gb[2] - 1), Math.max(b.Da[2], b.Da[2] + b.gb[2] - 1)];
    b.b = [{}, {}, {}];
    c = Oc(b.s[0], b.s[1], b.s[2]);
    b.b[0].td = c;
    e = Oc(1, 0, 0);
    Pc(e, e);
    b.b[0].i = e;
    d = [1, 0, 0];
    b.b[0].w = d;
    Ye(0, c, e, b);
    b.c[0].c = Array(b.b[0].p);
    c[0] = b.b[0].k[0][0][0] + b.b[0].B[0] * Math.floor(b.b[0].p / 2);
    c[1] = b.b[0].k[0][0][1] + b.b[0].B[1] * Math.floor(b.b[0].p / 2);
    c[2] = b.b[0].k[0][0][2] +
        b.b[0].B[2] * Math.floor(b.b[0].p / 2);
    c = We(c, b.b[0].Fa, b.b[0].i, b.b[0].w, b.ma, b.$, b, b.L, b.bd);
    b.L && (c.e = b.e.c[0].c[Math.floor(b.b[0].p / 2)].G);
    b.c[0].c[Math.floor(b.b[0].p / 2)] = c;
    b.Cb = Math.floor(b.b[0].p / 2);
    b.Hc = Math.floor(b.b[0].p / 2);
    c = Oc(b.s[0], b.s[1], b.s[2]);
    b.b[1].td = c;
    e = Oc(0, 1, 0);
    Pc(e, e);
    b.b[1].i = e;
    d = [0, 1, 0];
    b.b[1].w = d;
    Ye(1, c, e, b);
    b.c[1].c = Array(b.b[1].p);
    c[0] = b.b[1].k[0][0][0] + b.b[1].B[0] * Math.floor(b.b[1].p / 2);
    c[1] = b.b[1].k[0][0][1] + b.b[1].B[1] * Math.floor(b.b[1].p / 2);
    c[2] = b.b[1].k[0][0][2] + b.b[1].B[2] *
        Math.floor(b.b[1].p / 2);
    c = We(c, b.b[1].Fa, b.b[1].i, b.b[1].w, b.ma, b.$, b, b.L, b.bd);
    b.L && (c.e = b.e.c[1].c[Math.floor(b.b[1].p / 2)].G);
    b.c[1].c[Math.floor(b.b[1].p / 2)] = c;
    b.Db = Math.floor(b.b[1].p / 2);
    b.Ic = Math.floor(b.b[1].p / 2);
    c = Oc(b.s[0], b.s[1], b.s[2]);
    b.b[2].td = c;
    e = Oc(0, 0, 1);
    Pc(e, e);
    b.b[2].i = e;
    d = [0, 0.392, 0.804];
    b.b[2].w = d;
    Ye(2, c, e, b);
    b.c[2].c = Array(b.b[2].p);
    c[0] = b.b[2].k[0][0][0] + b.b[2].B[0] * Math.floor(b.b[2].p / 2);
    c[1] = b.b[2].k[0][0][1] + b.b[2].B[1] * Math.floor(b.b[2].p / 2);
    c[2] = b.b[2].k[0][0][2] + b.b[2].B[2] *
        Math.floor(b.b[2].p / 2);
    c = We(c, b.b[2].Fa, b.b[2].i, b.b[2].w, b.ma, b.$, b, b.L, b.bd);
    b.L && (c.e = b.e.c[2].c[Math.floor(b.b[2].p / 2)].G);
    b.c[2].c[Math.floor(b.b[2].p / 2)] = c;
    b.Eb = Math.floor(b.b[2].p / 2);
    b.Jc = Math.floor(b.b[2].p / 2);
    D.Ca(a.f + ".reslice");
    return b.$
};

function bf() {
    Y.call(this);
    this.f = "parserIMAGE"
}

C(bf, Y);
bf.prototype.parse = function (a, b, c, e) {
    c instanceof ArrayBuffer || m(Error());
    for (var d = new Uint8Array(c), f = d.length, g = Array(f); f--;) g[f] = String.fromCharCode(d[f]);
    d = window.btoa(g.join(""));
    f = new Image;
    ac(f, "load", this.Tj.bind(this, f, a, b, c, e));
    f.src = "data:image/" + e + ";base64," + d
};
bf.prototype.Tj = function (a, b, c) {
    b.ib = a;
    b.Wb = t;
    a = new md;
    a.D = c;
    a.v = b;
    this.dispatchEvent(a)
};
A("X.parserIMAGE", bf);
A("X.parserIMAGE.prototype.parse", bf.prototype.parse);

function cf(a, b) {
    Pe.call(this, a, b);
    this.f = "camera2D"
}

C(cf, Pe);
cf.prototype.rotate = function (a) {
    a = cf.u.rotate.call(this, a);
    var b = new Hd;
    0 < a.x ? b.bf-- : 0 > a.x && b.bf++;
    0 < a.y ? b.Pe++ : 0 > a.y && b.Pe--;
    this.dispatchEvent(b)
};
cf.prototype.Zf = function (a) {
    var b = 20;
    a != t && !a && (b = 0.02);
    this.o[14] += b
};
cf.prototype.$f = function (a) {
    var b = 20;
    a != t && !a && (b = 0.02);
    this.o[14] -= b
};
cf.prototype.Jf = function (a) {
    ka(a) && 2 == a.length ? a = new D.m(a[0], a[1], 0) : a instanceof D.m || m(Error("Invalid distance vector for pan operation."));
    this.o[12] -= a.x / this.o[14];
    this.o[13] += a.y / this.o[14]
};

function df() {
    N.call(this);
    this.f = "shaders";
    this.be = "";
    var a;
    a = "precision mediump float;\n\n";
    a += "attribute vec3 vertexPosition;\n";
    a += "attribute vec3 vertexNormal;\n";
    a += "attribute vec3 vertexColor;\n";
    a += "attribute vec2 vertexTexturePos;\n";
    a += "attribute float vertexScalar;\n";
    a += "\n";
    a += "uniform mat4 view;\n";
    a += "uniform mat4 perspective;\n";
    a += "uniform vec3 center;\n";
    a += "uniform mat4 objectTransform;\n";
    a += "uniform bool useObjectColor;\n";
    a += "uniform bool useScalars;\n";
    a += "uniform bool scalarsReplaceMode;\n";
    a += "uniform float scalarsMin;\n";
    a += "uniform float scalarsMax;\n";
    a += "uniform vec3 scalarsMinColor;\n";
    a += "uniform vec3 scalarsMaxColor;\n";
    a += "uniform float scalarsMinThreshold;\n";
    a += "uniform float scalarsMaxThreshold;\n";
    a += "uniform int scalarsInterpolation;\n";
    a += "uniform vec3 objectColor;\n";
    a += "uniform float pointSize;\n";
    a += "\n";
    a += "varying float fDiscardNow;\n";
    a += "varying vec4 fVertexPosition;\n";
    a += "varying vec3 fragmentColor;\n";
    a += "varying vec2 fragmentTexturePos;\n";
    a += "varying vec3 fVertexNormal;\n";
    a += "varying vec3 fTransformedVertexNormal;\n";
    a += "\n";
    a += "void main(void) {\n";
    a += "  fTransformedVertexNormal = mat3(view[0].xyz,view[1].xyz,view[2].xyz) * ";
    a += "mat3(objectTransform[0].xyz,objectTransform[1].xyz,objectTransform[2].xyz) * ";
    a += "vertexNormal;\n";
    a += "  fVertexNormal = vertexNormal;\n";
    a += "  fDiscardNow = 0.0;\n";
    a += "  vec3 vertexPosition2 = vertexPosition - center;\n";
    a += "  fVertexPosition = view * objectTransform * vec4(vertexPosition2, 1.0);\n";
    a += "  fragmentTexturePos = vertexTexturePos;\n";
    a += "  if (useScalars) {\n";
    a += "    float scalarValue = vertexScalar;\n";
    a += "    if (scalarValue < scalarsMinThreshold || scalarValue > scalarsMaxThreshold) {\n";
    a += "      if (scalarsReplaceMode) {\n";
    a += "        fragmentColor = objectColor;\n";
    a += "      } else {\n";
    a += "        fDiscardNow = 1.0;\n";
    a += "      }\n";
    a += "    } else {\n";
    a += "      if (scalarsReplaceMode) {\n";
    a += "        if (scalarsInterpolation == 1) {\n";
    a += "            vec3 zeroMaxColor;\n";
    a += "            vec3 zeroMinColor;\n";
    a +=
        "            zeroMaxColor[0] = scalarsMaxColor[0]*0.33;\n";
    a += "            zeroMaxColor[1] = scalarsMaxColor[1]*0.33;\n";
    a += "            zeroMaxColor[2] = scalarsMaxColor[2]*0.33;\n";
    a += "            zeroMinColor[0] = scalarsMinColor[0]*0.33;\n";
    a += "            zeroMinColor[1] = scalarsMinColor[1]*0.33;\n";
    a += "            zeroMinColor[2] = scalarsMinColor[2]*0.33;\n";
    a += "            if(scalarValue < 0.0) {fragmentColor = scalarValue/(scalarsMin) * scalarsMinColor + (1.0 - scalarValue/(scalarsMin)) * (zeroMinColor);}\n";
    a += "            else {fragmentColor = scalarValue/(scalarsMax) * scalarsMaxColor + (1.0 - scalarValue/(scalarsMax)) * (zeroMaxColor);}\n";
    a += "        } else {\n";
    a += "            fragmentColor = scalarValue * scalarsMaxColor + (1.0 - scalarValue) * scalarsMinColor;\n";
    a += "          }\n";
    a += "      } else {\n";
    a += "        fragmentColor = vertexColor;\n";
    a += "      }\n";
    a += "    }\n";
    a += "  } else if (useObjectColor) {\n";
    a += "    fragmentColor = objectColor;\n";
    a += "  } else {\n";
    a += "    fragmentColor = vertexColor;\n";
    a += "  }\n";
    a += "  gl_PointSize = pointSize;\n";
    a += "  gl_Position = perspective * fVertexPosition;\n";
    this.be = a += "}\n";
    this.Sd = "";
    a = "precision mediump float;\n\n";
    a += "uniform bool usePicking;\n";
    a += "uniform bool useTexture;\n";
    a += "uniform bool volumeTexture;\n";
    a += "uniform bool useLabelMapTexture;\n";
    a += "uniform sampler2D textureSampler;\n";
    a += "uniform sampler2D textureSampler2;\n";
    a += "uniform float objectOpacity;\n";
    a += "uniform float labelmapOpacity;\n";
    a += "uniform vec4 labelmapColor;\n";
    a += "uniform float volumeLowerThreshold;\n";
    a += "uniform float volumeUpperThreshold;\n";
    a += "uniform float volumeScalarMin;\n";
    a += "uniform float volumeScalarMax;\n";
    a += "uniform vec3 volumeScalarMinColor;\n";
    a += "uniform vec3 volumeScalarMaxColor;\n";
    a += "uniform float volumeWindowLow;\n";
    a += "uniform float volumeWindowHigh;\n";
    a += "\n";
    a += "varying float fDiscardNow;\n";
    a += "varying vec4 fVertexPosition;\n";
    a += "varying vec3 fragmentColor;\n";
    a += "varying vec2 fragmentTexturePos;\n";
    a += "varying vec3 fVertexNormal;\n";
    a += "varying vec3 fTransformedVertexNormal;\n";
    a += "\n";
    a += "void main(void) {\n";
    a += " if (fDiscardNow > 0.0) {\n";
    a += "   discard;\n";
    a += " }\n";
    a += " if (usePicking) {\n";
    a += "   gl_FragColor = vec4(fragmentColor, 1.0);\n";
    a += " } else if (useTexture) {\n";
    a += "   vec4 texture1 = texture2D(textureSampler,fragmentTexturePos);\n";
    a += "   vec4 textureSum = texture1;\n";
    a += "   if (volumeTexture) {\n";
    a += "     float _windowLow = (volumeWindowLow / volumeScalarMax);\n";
    a += "     float _windowHigh = (volumeWindowHigh / volumeScalarMax);\n";
    a += "     vec3 _minrange = vec3(_windowLow,_windowLow,_windowLow);\n";
    a += "     vec3 _maxrange = vec3(_windowHigh,_windowHigh,_windowHigh);\n";
    a += "     vec3 fac = _maxrange - _minrange;\n";
    a += "     textureSum = vec4((textureSum.r - _minrange)/fac,1);\n";
    a += "     textureSum = textureSum.r * vec4(volumeScalarMaxColor,1) + (1.0 - textureSum.r) * vec4(volumeScalarMinColor,1);\n";
    a += "   }\n";
    a += "   if (useLabelMapTexture) {\n";
    a += "     vec4 texture2 = texture2D(textureSampler2,fragmentTexturePos);\n";
    a += "     if (texture2.a > 0.0) {\n";
    a += "         if (labelmapColor.a != -255.0) {\n";
    a += "           if (all(equal(floor(texture2 * vec4(255)), labelmapColor))) {\n";
    a += "             if (labelmapOpacity < 1.0) {\n";
    a += "               textureSum = mix(texture2, textureSum, 1.0 - labelmapOpacity);\n";
    a += "             } else {\n";
    a += "               textureSum = texture2;\n";
    a += "             }\n";
    a += "           }\n";
    a += "         } else {\n";
    a += "           if (labelmapOpacity < 1.0) {\n";
    a += "             textureSum = mix(texture2, textureSum, 1.0 - labelmapOpacity);\n";
    a += "           } else {\n";
    a += "             textureSum = texture2;\n";
    a += "           }\n";
    a += "         }\n";
    a += "     }\n";
    a += "   }\n";
    a += "   if (volumeTexture) {\n";
    a += "     float _volumeLowerThreshold = (volumeLowerThreshold / volumeScalarMax);\n";
    a += "     float _volumeUpperThreshold = (volumeUpperThreshold / volumeScalarMax);\n";
    a += "     if (texture1.r < _volumeLowerThreshold ||\n";
    a += "         texture1.r > _volumeUpperThreshold ||\n";
    a += "         texture1.a == 0.0 ) {\n";
    a += "       discard;\n";
    a += "     };\n";
    a += "   };\n";
    a += "   gl_FragColor = textureSum;\n";
    a += "   gl_FragColor.a = objectOpacity;\n";
    a += " } else {\n";
    a += "   vec3 nNormal = normalize(fTransformedVertexNormal);\n";
    a += "   if (fVertexNormal == vec3(0.0,0.0,0.0)) {\n";
    a += "     gl_FragColor = vec4(fragmentColor,1.0);\n";
    a += "     return;\n";
    a += "   }\n";
    a += "   vec3 light = vec3(0.0, 0.0, 1.0);\n";
    a += "   vec3 lightDirection = vec3(0,0,-10);\n";
    a += "   lightDirection = normalize(lightDirection);\n";
    a += "   vec3 eyeDirection = normalize(-fVertexPosition.xyz);\n";
    a += "   vec3 reflectionDirection = reflect(-lightDirection, nNormal);\n";
    a += "   float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 10.0);\n";
    a += "   float diffuse = 0.8 * max(dot(nNormal, light), 0.0);\n";
    a += "   float ambient = 0.3;\n";
    a += "   gl_FragColor = vec4(fragmentColor * ambient +\n";
    a += "                       fragmentColor * diffuse +\n";
    a += "                       vec3(0.2, 0.2, 0.2) * specular,\n";
    a += "                       objectOpacity);\n";
    a += " }\n";
    this.Sd = a += "}\n"
}

C(df, N);
var ef = {Zk: "vertexPosition", Yk: "vertexNormal", Xk: "vertexColor", al: "vertexTexturePos", $k: "vertexScalar"},
    ff = {
        bl: "view",
        Gk: "perspective",
        xk: "center",
        Fk: "objectTransform",
        Tk: "useObjectColor",
        Dk: "objectColor",
        Vk: "useScalars",
        Pk: "scalarsReplaceMode",
        Mk: "scalarsMin",
        Jk: "scalarsMax",
        Nk: "scalarsMinColor",
        Kk: "scalarsMaxColor",
        Ok: "scalarsMinThreshold",
        Lk: "scalarsMaxThreshold",
        Ik: "scalarsInterpolation",
        Hk: "pointSize",
        Ek: "objectOpacity",
        Ck: "normal",
        Uk: "usePicking",
        Wk: "useTexture",
        Sk: "useLabelMapTexture",
        Ak: "labelmapOpacity",
        zk: "labelmapColor",
        Qk: "textureSampler",
        Rk: "textureSampler2",
        cl: "volumeLowerThreshold",
        il: "volumeUpperThreshold",
        fl: "volumeScalarMin",
        dl: "volumeScalarMax",
        gl: "volumeScalarMinColor",
        el: "volumeScalarMaxColor",
        kl: "volumeWindowLow",
        jl: "volumeWindowHigh",
        hl: "volumeTexture"
    };

function Xe(a) {
    W.call(this);
    this.f = "slice";
    this.z = [0, 0, 0];
    this.gc = [0, 0, 1];
    this.V = [0, 1, 0];
    this.Nc = [1, 0, 0];
    this.A = this.K = 10;
    this.nc = [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
    this.e = this.yb = t;
    this.Bb = q;
    this.ec = [1, 1, 1];
    a != t && this.rc(a)
}

C(Xe, W);
Xe.prototype.rc = function (a) {
    this.z = a.z.slice();
    this.gc = a.gc.slice();
    this.V = a.V.slice();
    this.K = a.K;
    this.A = a.A;
    this.yb = a.yb;
    this.e = a.e;
    this.Bb = a.Bb;
    this.ec = a.ec;
    this.Wh = a.Wh;
    Xe.u.rc.call(this, a)
};
Xe.prototype.__defineSetter__("height", ea("A"));
Xe.prototype.__defineSetter__("width", ea("K"));
Xe.prototype.__defineGetter__("up", v("V"));
Xe.prototype.__defineGetter__("right", v("Nc"));
Xe.prototype.create = function () {
    this.Gb()
};
Xe.prototype.Ta = function () {
    Xe.u.Ta.call(this);
    this.z.length = 0;
    this.gc.length = 0;
    this.V.length = 0;
    this.Nc.length = 0;
    this.nc.length = 0;
    this.e = this.yb = t;
    this.ec.length = 0
};
Xe.prototype.Gb = function () {
    var a = (new S(this.gc[0], this.gc[1], this.gc[2])).normalize(), b = new S(this.V[0], this.V[1], this.V[2]),
        c = new S(this.Nc[0], this.Nc[1], this.Nc[2]), e = new S(this.z[0], this.z[1], this.z[2]),
        d = Ic(c.l().Y().scale(this.K / 2), b.l().Y().scale(this.A / 2)), f = new S(d.x + e.x, d.y + e.y, d.d + e.d),
        d = Ic(c.l().Y().scale(this.K / 2), b.l().scale(this.A / 2)), g = new S(d.x + e.x, d.y + e.y, d.d + e.d),
        d = Ic(c.l().scale(this.K / 2), b.l().Y().scale(this.A / 2)), h = new S(d.x + e.x, d.y + e.y, d.d + e.d),
        d = Ic(c.l().scale(this.K / 2), b.l().scale(this.A /
            2)), b = new S(d.x + e.x, d.y + e.y, d.d + e.d);
    this.h = new V(18);
    this.n = new V(18);
    this.h.add(f.x, f.y, f.d);
    this.h.add(g.x, g.y, g.d);
    this.h.add(h.x, h.y, h.d);
    this.h.add(h.x, h.y, h.d);
    this.h.add(b.x, b.y, b.d);
    this.h.add(g.x, g.y, g.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.n.add(a.x, a.y, a.d);
    this.Bb && (a = new W, a.h = new V(24), a.n = new V(24), a.h.add(f.x, f.y, f.d), a.h.add(g.x, g.y, g.d), a.h.add(g.x, g.y, g.d), a.h.add(b.x, b.y, b.d), a.h.add(b.x,
        b.y, b.d), a.h.add(h.x, h.y, h.d), a.h.add(h.x, h.y, h.d), a.h.add(f.x, f.y, f.d), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.n.add(0, 0, 0), a.w = [this.ec[0], this.ec[1], this.ec[2]], a.Ha = "LINES", a.Lc = 2, this.c.push(a))
};
A("X.slice", Xe);
A("X.slice.prototype.create", Xe.prototype.create);
A("X.slice.prototype.destroy", Xe.prototype.Ta);

function Q(a) {
    W.call(this);
    this.f = "volume";
    this.z = [0, 0, 0];
    this.ca = [10, 10, 10];
    this.ma = [1, 1, 1];
    this.sd = [10, 10, 10];
    this.rb = [1, 1, 1];
    this.ib = [];
    this.Jc = this.Eb = this.Ic = this.Db = this.Hc = this.Cb = 0;
    this.kc = new W;
    this.lc = new W;
    this.mc = new W;
    this.de = this.Ra = u;
    this.X = -1;
    this.ce = [];
    this.e = t;
    this.Bb = q;
    this.fa = Infinity;
    this.ea = -Infinity;
    this.ug = q;
    this.ia = 0;
    this.J = t;
    this.b = [];
    this.s = [0, 0, 0];
    this.gb = [0, 0, 0];
    this.$c = [0, 0, 0];
    this.$ = [];
    this.ag = [];
    this.$a = t;
    Ga(this, new yc);
    Ga(this, new kd);
    a != t && this.rc(a)
}

C(Q, W);
Q.prototype.rc = function (a) {
    this.z = a.z.slice();
    this.ca = a.ca.slice();
    this.rb = a.rb.slice();
    this.Cb = a.Cb;
    this.Hc = a.Hc;
    this.Db = a.Db;
    this.Ic = a.Ic;
    this.Eb = a.Eb;
    this.Jc = a.Jc;
    this.cg = a.cg.slice();
    this.kc = new W(a.kc);
    this.lc = new W(a.lc);
    this.mc = new W(a.mc);
    this.ia = a.ia;
    this.J = a.J;
    this.Ra = a.Ra;
    this.de = a.de;
    this.X = a.X;
    this.e = a.e;
    this.Bb = a.Bb;
    Q.u.rc.call(this, a)
};
Q.prototype.Gb = function (a) {
    this.c.length = 0;
    this.kc.c.length = 0;
    this.lc.c.length = 0;
    this.mc.c.length = 0;
    this.c.push(this.kc);
    this.c.push(this.lc);
    this.c.push(this.mc);
    this.Da = a.Ac;
    this.$c = a.Bc;
    this.gb = a.zc;
    this.Cc = a.cb;
    this.Ph = a.fb;
    this.ia = a.max;
    this.J = a.data;
    this.j = q
};
Q.prototype.Ta = function () {
    Q.u.Ta.call(this);
    this.ib.length = 0;
    this.c.length = 0;
    this.kc.c.length = 0;
    this.kc.length = 0;
    this.lc.c.length = 0;
    this.lc.length = 0;
    this.mc.c.length = 0;
    this.mc.length = 0;
    this.J = t;
    this.ma.length = 0;
    this.b.length = 0;
    this.s.length = 0;
    this.gb.length = 0;
    this.$c.length = 0;
    this.$.length = 0;
    this.ag.length = 0;
    this.$a = t
};
Q.prototype.q = function (a) {
    a = "undefined" !== typeof a ? a : q;
    if (0 < this.c.length) {
        this.Ra != this.de && (!this.Ra && -1 != this.X && (this.c[this.X].visible = u), this.j = q, this.de = this.Ra);
        if (!this.O) return;
        for (var b = 0, b = 0; 3 > b; b++) {
            var c = this.c[b], e = 0, d = 0;
            0 == b ? (e = this.Cb, d = this.Hc, this.Hc = this.Cb) : 1 == b ? (e = this.Db, d = this.Ic, this.Ic = this.Db) : 2 == b && (e = this.Eb, d = this.Jc, this.Jc = this.Eb);
            if (this.c[b].c[parseInt(e, 10)] == t) {
                var f = Nc();
                f[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * parseInt(e, 10);
                f[1] = this.b[b].k[0][0][1] + this.b[b].B[1] *
                    parseInt(e, 10);
                f[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * parseInt(e, 10);
                if (this.L) {
                    var g = We(f, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ja);
                    this.e.c[b].c[parseInt(e, 10)] = g;
                    this.e.c[b].q(q)
                }
                f = We(f, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                this.L && (f.e = f.G, f.e = this.e.c[b].c[parseInt(e, 10)].G);
                c.c[parseInt(e, 10)] = f;
                this.c[b].q(q)
            }
            d = c.c[parseInt(d, 10)];
            this.Ra || (d.visible = u);
            c = c.c[parseInt(e, 10)];
            c.visible = q;
            c.ua = 1;
            this.Ra && (c.c[0].O = u, b != this.X &&
            (c.visible = u, c.ua = 0))
        }
        this.Ra && -1 != this.X && gf(this, this.X)
    }
    a && Q.u.q.call(this)
};
Q.prototype.__defineGetter__("dimensions", v("ca"));
Q.prototype.__defineSetter__("dimensions", ea("ca"));
Q.prototype.__defineGetter__("spacing", v("rb"));
Q.prototype.__defineSetter__("spacing", ea("rb"));
Q.prototype.__defineGetter__("bbox", v("ma"));
Q.prototype.__defineGetter__("range", v("sd"));
Q.prototype.__defineGetter__("dimensionsRAS", v("cg"));
Q.prototype.__defineGetter__("volumeRendering", v("Ra"));
Q.prototype.__defineSetter__("volumeRendering", function (a) {
    this.Ra = a;
    this.q(u)
});
Q.prototype.__defineGetter__("visible", v("O"));
Q.prototype.__defineSetter__("visible", function (a) {
    if (a) this.O = a, this.q(u); else {
        for (var b = this.c, c = b.length, e = 0, e = 0; e < c; e++) b[e].visible = a;
        this.O = a;
        this.j = q
    }
});
Q.prototype.__defineGetter__("center", v("z"));
Q.prototype.__defineSetter__("center", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid center."));
    this.z = a
});
Q.prototype.__defineGetter__("volumeRenderingCache", v("ce"));
Q.prototype.__defineSetter__("volumeRenderingCache", function (a) {
    (a == t || !ka(a) || !(3 >= a.length)) && m(Error("Invalid volumeRederingCache."));
    this.ce = a
});
Q.prototype.__defineGetter__("image", v("ib"));
Q.prototype.__defineGetter__("labelmap", function () {
    this.e || (this.e = new hf(this));
    return this.e
});
Q.prototype.__defineGetter__("indexX", v("Cb"));
Q.prototype.__defineSetter__("indexX", function (a) {
    x(a) && (0 <= a && a < this.kc.c.length) && (this.Cb = a, this.q(u))
});
Q.prototype.__defineGetter__("indexY", v("Db"));
Q.prototype.__defineSetter__("indexY", function (a) {
    x(a) && (0 <= a && a < this.lc.c.length) && (this.Db = a, this.q(u))
});
Q.prototype.__defineGetter__("indexZ", v("Eb"));
Q.prototype.__defineSetter__("indexZ", function (a) {
    x(a) && (0 <= a && a < this.mc.c.length) && (this.Eb = a, this.q(u))
});
Q.prototype.__defineGetter__("windowLow", v("fa"));
Q.prototype.__defineSetter__("windowLow", ea("fa"));
Q.prototype.__defineGetter__("windowHigh", v("ea"));
Q.prototype.__defineSetter__("windowHigh", ea("ea"));
Q.prototype.__defineGetter__("borders", v("Bb"));
Q.prototype.__defineSetter__("borders", ea("Bb"));
Q.prototype.__defineGetter__("reslicing", v("ug"));
Q.prototype.__defineSetter__("reslicing", ea("ug"));
Q.prototype.__defineSetter__("xNormX", function (a) {
    this.b[0].i[0] = a
});
Q.prototype.__defineGetter__("xNormX", function () {
    return this.b[0].i[0]
});
Q.prototype.__defineSetter__("xNormY", function (a) {
    this.b[0].i[1] = a
});
Q.prototype.__defineGetter__("xNormY", function () {
    return this.b[0].i[1]
});
Q.prototype.__defineSetter__("xNormZ", function (a) {
    this.b[0].i[2] = a
});
Q.prototype.__defineGetter__("xNormZ", function () {
    return this.b[0].i[2]
});
Q.prototype.__defineSetter__("xColor", function (a) {
    this.b[0].w = a
});
Q.prototype.__defineGetter__("xColor", function () {
    return this.b[0].w
});
Q.prototype.__defineSetter__("yNormX", function (a) {
    this.b[1].i[0] = a
});
Q.prototype.__defineGetter__("yNormX", function () {
    return this.b[1].i[0]
});
Q.prototype.__defineSetter__("yNormY", function (a) {
    this.b[1].i[1] = a
});
Q.prototype.__defineGetter__("yNormY", function () {
    return this.b[1].i[1]
});
Q.prototype.__defineSetter__("yNormZ", function (a) {
    this.b[1].i[2] = a
});
Q.prototype.__defineGetter__("yNormZ", function () {
    return this.b[1].i[2]
});
Q.prototype.__defineSetter__("yColor", function (a) {
    this.b[1].w = a
});
Q.prototype.__defineGetter__("yColor", function () {
    return this.b[1].w
});
Q.prototype.__defineSetter__("zNormX", function (a) {
    this.b[2].i[0] = a
});
Q.prototype.__defineGetter__("zNormX", function () {
    return this.b[2].i[0]
});
Q.prototype.__defineSetter__("zNormY", function (a) {
    this.b[2].i[1] = a
});
Q.prototype.__defineGetter__("zNormY", function () {
    return this.b[2].i[1]
});
Q.prototype.__defineSetter__("zNormZ", function (a) {
    this.b[2].i[2] = a
});
Q.prototype.__defineGetter__("zNormZ", function () {
    return this.b[2].i[2]
});
Q.prototype.__defineSetter__("zColor", function (a) {
    this.b[2].w = a
});
Q.prototype.__defineGetter__("zColor", function () {
    return this.b[2].w
});
Q.prototype.fk = function (a) {
    this.c[a].visible = u;
    for (var b = 0; b < this.c[a].c.length; b++) "undefined" != typeof this.c[a].c[b] && (this.L && (this.e.c[a].c[b].remove(), this.e.c[a].c[b] = t), this.c[a].c[b].remove(), this.c[a].c[b] = t);
    Pc(this.b[a].i, this.b[a].i);
    Ye(a, this.b[a].td, this.b[a].i, this);
    this.c[a].c = [];
    this.c[a].c = Array(this.b[a].p);
    this.L && (b = We(this.b[a].td, this.b[a].Fa, this.b[a].i, this.b[a].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ja), this.e.c[a].c = [], this.e.c[a].c = Array(this.b[a].p), this.e.c[a].c[Math.floor(this.b[a].p /
        2)] = b, this.e.c[a].q());
    b = We(this.b[a].td, this.b[a].Fa, this.b[a].i, this.b[a].w, this.ma, this.$, this, q, t);
    window.console.log("modified!");
    this.L && (b.e = b.G, b.e = this.e.c[a].c[Math.floor(this.b[a].p / 2)].G);
    this.c[a].c[Math.floor(this.b[a].p / 2)] = b;
    0 == a ? (this.Cb = Math.floor(this.b[a].p / 2), this.Hc = Math.floor(this.b[a].p / 2)) : 1 == a ? (this.Db = Math.floor(this.b[a].p / 2), this.Ic = Math.floor(this.b[a].p / 2)) : (this.Eb = Math.floor(this.b[a].p / 2), this.Jc = Math.floor(this.b[a].p / 2));
    this.c[a].q();
    this.c[a].c[Math.floor(this.b[a].p /
        2)].O = q
};

function gf(a, b) {
    if (!a.Qd) if (!a.Ra || !a.j && b == a.X) a.X = b; else if (-1 == a.ce.indexOf(b)) {
        a.ce.push(b);
        a.Qd = q;
        var c = new Qd;
        c.D = a;
        a.dispatchEvent(c);
        a.onComputing(b);
        setTimeout(function () {
            var a = t;
            0 <= this.X && (a = this.c[this.X], a.visible = u);
            var a = this.c[b], c = a.c.length, d = Math.floor(c / 4), e;
            for (e = 0; e < 1 * d; e++) {
                if (a.c[e] == t) {
                    var j = Nc();
                    j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                    j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                    j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                    if (this.L) {
                        var k = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w,
                            this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ja);
                        this.e.c[b].c[e] = k;
                        this.e.c[b].q(q)
                    }
                    j = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                    j.c[0].O = u;
                    this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                    a.c[e] = j
                }
                a.c[e].O = q
            }
            jf(this, 0.25);
            setTimeout(function () {
                for (; e < 2 * d; e++) {
                    if (a.c[e] == t) {
                        var j = Nc();
                        j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                        j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                        j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                        if (this.L) {
                            var k = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.e.$,
                                this.e, this.e.L, this.e.xa.Ja);
                            this.e.c[b].c[e] = k;
                            this.e.c[b].q(q)
                        }
                        j = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                        j.c[0].O = u;
                        this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                        a.c[e] = j
                    }
                    a.c[e].O = q
                }
                jf(this, 0.5);
                setTimeout(function () {
                    for (; e < 3 * d; e++) {
                        if (a.c[e] == t) {
                            var j = Nc();
                            j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                            j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                            j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                            if (this.L) {
                                var k = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L,
                                    this.e.xa.Ja);
                                this.e.c[b].c[e] = k;
                                this.e.c[b].q(q)
                            }
                            j = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                            j.c[0].O = u;
                            this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                            a.c[e] = j
                        }
                        a.c[e].O = q
                    }
                    jf(this, 0.75);
                    setTimeout(function () {
                        for (e = 3 * d; e < c; e++) {
                            if (a.c[e] == t) {
                                var j = Nc();
                                j[0] = this.b[b].k[0][0][0] + this.b[b].B[0] * e;
                                j[1] = this.b[b].k[0][0][1] + this.b[b].B[1] * e;
                                j[2] = this.b[b].k[0][0][2] + this.b[b].B[2] * e;
                                if (this.L) {
                                    var k = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.e.$, this.e, this.e.L, this.e.xa.Ja);
                                    this.e.c[b].c[e] = k;
                                    this.e.c[b].q(q)
                                }
                                j = We(j, this.b[b].Fa, this.b[b].i, this.b[b].w, this.ma, this.$, this, q, t);
                                j.c[0].O = u;
                                this.L && (j.e = j.G, j.e = this.e.c[b].c[e].G);
                                a.c[e] = j
                            }
                            a.c[e].O = q
                        }
                        jf(this, 1);
                        setTimeout(function () {
                            this.Qd && this.c[b].q(q);
                            this.X = b;
                            this.j = u;
                            if (this.Qd) {
                                var a = new Sd;
                                a.D = this;
                                this.dispatchEvent(a);
                                this.onComputingEnd(b)
                            }
                            this.Qd = u
                        }.bind(this), 10)
                    }.bind(this), 10)
                }.bind(this), 10)
            }.bind(this), 10)
        }.bind(a), 10)
    } else {
        c = a.c[a.X];
        c.visible = u;
        var c = a.c[b], e = c.c.length, d;
        for (d = 0; d < e; d++) c.c[d].O = q;
        a.X = b;
        a.j = u
    }
}

function jf(a, b) {
    var c = new Rd;
    c.yd = b;
    a.dispatchEvent(c);
    a.onComputingProgress(100 * b)
}

Q.prototype.Df = aa();
Q.prototype.Ff = aa();
Q.prototype.Ef = aa();
A("X.volume", Q);
A("X.volume.prototype.modified", Q.prototype.q);
A("X.volume.prototype.destroy", Q.prototype.Ta);
A("X.volume.prototype.sliceInfoChanged", Q.prototype.fk);
A("X.volume.prototype.onComputing", Q.prototype.Df);
A("X.volume.prototype.onComputingProgress", Q.prototype.Ff);
A("X.volume.prototype.onComputingEnd", Q.prototype.Ef);

function kf() {
    Y.call(this);
    this.f = "parserOFF"
}

C(kf, Y);
kf.prototype.parse = function (a, b, c) {
    function e() {
        l === d && m(Error("End of file reached unexpectedly."));
        for (var a = l; a < d; ++a) if (10 === f[a]) {
            var b = Te(f, l, a);
            l = a + 1;
            return b
        }
        l = d;
        return Te(f, l, d - 1)
    }

    D.Ia(this.f + ".parse");
    this.J = c;
    var d = c.byteLength, f = Z(this, "uchar", d);
    c = [];
    b.h = new V(d);
    b.n = new V(d);
    for (var g = b.h, h = b.n, l = 0, j = e(), j = ("OFF" === j ? e() : j).split(" "), k = j[0], j = j[1]; k--;) {
        var n = e(), n = n.split(" ");
        c.push([parseFloat(n[0]), parseFloat(n[1]), parseFloat(n[2])])
    }
    for (; j--;) {
        var n = e(), n = n.split(" "), s = c[parseInt(n[1],
            10)], k = c[parseInt(n[2], 10)], n = c[parseInt(n[3], 10)];
        g.add(s[0], s[1], s[2]);
        g.add(k[0], k[1], k[2]);
        g.add(n[0], n[1], n[2]);
        s = new S(s[0], s[1], s[2]);
        n = new S(n[0], n[1], n[2]);
        k = Jc((new S(k[0], k[1], k[2])).wa(s), n.wa(s));
        k.normalize();
        h.add(k.x, k.y, k.d);
        h.add(k.x, k.y, k.d);
        h.add(k.x, k.y, k.d)
    }
    D.Ca(this.f + ".parse");
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserOFF", kf);
A("X.parserOFF.prototype.parse", kf.prototype.parse);

function lf() {
    Y.call(this);
    this.f = "parserDCM"
}

C(lf, Y);
lf.prototype.parse = function (a, b, c) {
    b.yc = {};
    b.yc.wf = 0;
    this.vc(c, b);
    if (b.r.length == t || b.ra.length == b.r.length) {
        b.yc.wf = b.r.length;
        var e = {};
        c = {};
        for (var d = 0; d < b.ra.length; d++) e.hasOwnProperty(b.ra[d].series_instance_uid) || (e[b.ra[d].series_instance_uid] = [], c[b.ra[d].series_instance_uid] = {}), c[b.ra[d].series_instance_uid].hasOwnProperty(b.ra[d].sop_instance_uid) || (c[b.ra[d].series_instance_uid][b.ra[d].sop_instance_uid] = q, e[b.ra[d].series_instance_uid].push(b.ra[d]));
        var f = Object.keys(e)[0], d = e[f], g =
            d.length;
        c = {};
        var h = "image_position_patient";
        1 == g ? (h = "image_position_patient", e[f][0].dist = 0) : d[0].image_position_patient[0] != d[1].image_position_patient[0] || d[0].image_position_patient[1] != d[1].image_position_patient[1] || d[0].image_position_patient[2] != d[1].image_position_patient[2] ? (h = "image_position_patient", e = new S(d[0].image_orientation_patient[0], d[0].image_orientation_patient[1], d[0].image_orientation_patient[2]), f = new S(d[0].image_orientation_patient[3], d[0].image_orientation_patient[4], d[0].image_orientation_patient[5]),
            e = Jc(e, f), d.map(function (a, b) {
            b.dist = b.image_position_patient[0] * a.x + b.image_position_patient[1] * a.y + b.image_position_patient[2] * a.d;
            return b
        }.bind(t, e)), d.sort(function (a, b) {
            return a.dist - b.dist
        })) : d[0].instance_number != d[1].instance_number ? (h = "instance_number", d.sort(function (a, b) {
            return a.instance_number - b.instance_number
        })) : window.console.log("Could not resolve the ordering mode");
        isNaN(d[0].pixel_spacing[0]) && (d[0].pixel_spacing[0] = 1);
        isNaN(d[0].pixel_spacing[1]) && (d[0].pixel_spacing[1] = 1);
        if (1 <
            g) switch (h) {
            case "image_position_patient":
                var l = d[0].image_position_patient, e = d[1].image_position_patient, f = e[0] - l[0], j = e[1] - l[1],
                    k = e[2] - l[2];
                d[0].pixel_spacing[2] = Math.sqrt(f * f + j * j + k * k);
                break;
            case "instance_number":
                d[0].pixel_spacing[2] = 1;
                break;
            default:
                window.console.log("Unkown ordering mode - returning: " + h)
        } else d[0].pixel_spacing[2] = 1;
        e = 1;
        switch (h) {
            case "image_position_patient":
                var l = d[0].image_position_patient, n = d[g - 1].image_position_patient, f = n[0] - l[0],
                    j = n[1] - l[1], k = n[2] - l[2], f = Math.sqrt(f *
                    f + j * j + k * k), e = e + Math.round(f / d[0].pixel_spacing[2]);
                break;
            case "instance_number":
                e += Math.abs(d[g - 1].instance_number - d[0].instance_number);
                break;
            default:
                window.console.log("Unkown ordering mode - returning: " + h)
        }
        l = d[0].columns * d[0].rows;
        f = l * e;
        n = t;
        switch (d[0].ef) {
            case 8:
                n = new Uint8Array(f);
                break;
            case 16:
                n = new Uint16Array(f);
                break;
            case 32:
                n = new Uint32Array(f);
            default:
                window.console.log("Unknown number of bits allocated - using default: 32 bits")
        }
        b.rb = d[0].pixel_spacing;
        for (var s = 0; s < g; s++) {
            var r = d[s].data,
                f = 0;
            switch (h) {
                case "image_position_patient":
                    f = d[s].image_position_patient[0] - d[0].image_position_patient[0];
                    j = d[s].image_position_patient[1] - d[0].image_position_patient[1];
                    k = d[s].image_position_patient[2] - d[0].image_position_patient[2];
                    f = Math.round(Math.sqrt(f * f + j * j + k * k) / d[0].pixel_spacing[2]);
                    break;
                case "instance_number":
                    f = d[s].instance_number - d[0].instance_number;
                    break;
                default:
                    window.console.log("Unkown ordering mode - returning: " + h)
            }
            n.set(r, f * l)
        }
        c.data = n;
        b.J = n;
        b.ca = [d[0].columns, d[0].rows, e];
        c.yl = b.ca;
        e = Se(n);
        g = e[0];
        e = e[1];
        c.min = b.Oa = b.fa = g;
        c.max = b.ia = b.ea = e;
        -Infinity == b.U && (b.U = g);
        Infinity == b.W && (b.W = e);
        j = d[0].image_position_patient;
        g = Sc();
        if ("false" == b.reslicing || b.reslicing == u) T(g, 0, d[0].pixel_spacing[0], 0, 0, 0), T(g, 1, 0, d[0].pixel_spacing[1], 0, 0), T(g, 2, 0, 0, d[0].pixel_spacing[2], 0), T(g, 3, 0, 0, 0, 1); else switch (h) {
            case "image_position_patient":
                e = new S(d[0].image_orientation_patient[0], d[0].image_orientation_patient[1], d[0].image_orientation_patient[2]);
                f = new S(d[0].image_orientation_patient[3],
                    d[0].image_orientation_patient[4], d[0].image_orientation_patient[5]);
                e = Jc(e, f);
                T(g, 0, -d[0].image_orientation_patient[0] * d[0].pixel_spacing[0], -d[0].image_orientation_patient[3] * d[0].pixel_spacing[1], -e.x * d[0].pixel_spacing[2], -j[0]);
                T(g, 1, -d[0].image_orientation_patient[1] * d[0].pixel_spacing[0], -d[0].image_orientation_patient[4] * d[0].pixel_spacing[1], -e.y * d[0].pixel_spacing[2], -j[1]);
                T(g, 2, d[0].image_orientation_patient[2] * d[0].pixel_spacing[0], d[0].image_orientation_patient[5] * d[0].pixel_spacing[1],
                    e.d * d[0].pixel_spacing[2], j[2]);
                T(g, 3, 0, 0, 0, 1);
                break;
            case "instance_number":
                T(g, 0, -1, 0, 0, -j[0]);
                T(g, 1, -0, -1, -0, -j[1]);
                T(g, 2, 0, 0, 1, j[2]);
                T(g, 3, 0, 0, 0, 1);
                break;
            default:
                window.console.log("Unkown ordering mode - returning: " + h)
        }
        c.cb = g;
        c.fb = Sc();
        bd(c.cb, c.fb);
        h = Rc(0, 0, 0, 1);
        d = Qc();
        dd(g, h, d);
        h = Rc(1, 1, 1, 1);
        e = Qc();
        dd(g, h, e);
        c.Bc = [e[0] - d[0], e[1] - d[1], e[2] - d[2]];
        d = Ue(g, [b.ca[0], b.ca[1], b.ca[2]]);
        c.zc = [d[1] - d[0] + 1, d[3] - d[2] + 1, d[5] - d[4] + 1];
        c.Ac = [d[0], d[2], d[4]];
        b.Gb(c);
        b.ib = af(this, b)
    }
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};

function mf(a, b, c, e) {
    switch (c) {
        case 16975:
        case 20819:
        case 20053:
        case 22351:
            c = function (a) {
                for (var b = "", c = 128; 1 <= c; c /= 2) b += a & c ? "1" : "0";
                return b
            };
            e = a[b++];
            a = a[b++];
            e = parseInt(c((a & 65280) >> 8) + c(a & 255) + (c((e & 65280) >> 8) + c(e & 255)), 2);
            4294967295 == e && (e = 0);
            b += e / 2;
            break;
        default:
            b += e / 2
    }
    return b
}

lf.prototype.vc = function (a, b) {
    this.J = a;
    if ("undefined" == typeof b.ra || b.ra == t) b.ra = [];
    for (var c = {
        pixel_spacing: [0.1, 0.1, Infinity],
        image_orientation_patient: [1, 0, 0, 0, 1, 0],
        image_position_patient: [0, 0, 0],
        transfer_syntax_uid: "no_transfer_syntax_uid"
    }, e = Z(this, "ushort", this.J.byteLength), d = 66, f = t, g = t, h = t, l = t; d < e.length;) switch (f = e[d++], g = e[d++], h = e[d++], l = e[d++], "1.2.840.10008.1.2" == c.transfer_syntax_uid && 0 == l && (l = h), f) {
        case 2:
            switch (g) {
                case 16:
                    for (var j = "", f = f = 0; f < l / 2; f++) h = e[d++], g = h & 255, h = (h & 65280) >>
                        8, j += String.fromCharCode(g), j += String.fromCharCode(h);
                    c.transfer_syntax_uid = j.replace(/\0/g, "");
                    break;
                default:
                    d = mf(e, d, h, l)
            }
            break;
        case 40:
            switch (g) {
                case 16:
                    c.rows = e[d];
                    d += l / 2;
                    break;
                case 17:
                    c.columns = e[d];
                    d += l / 2;
                    break;
                case 256:
                    c.ef = e[d];
                    d += l / 2;
                    break;
                case 257:
                    c.bits_stored = e[d];
                    d += l / 2;
                    break;
                case 2:
                    c.number_of_images = e[d];
                    d += l / 2;
                    break;
                case 48:
                    j = "";
                    for (f = 0; f < l / 2; f++) h = e[d++], g = h & 255, h = (h & 65280) >> 8, j += String.fromCharCode(g), j += String.fromCharCode(h);
                    j = j.split("\\");
                    c.pixel_spacing = [parseFloat(j[0]), parseFloat(j[1]),
                        Infinity];
                    break;
                default:
                    d = mf(e, d, h, l)
            }
            break;
        case 32:
            switch (g) {
                case 14:
                    c.series_instance_uid = "";
                    for (f = 0; f < l / 2; f++) h = e[d++], g = h & 255, h = (h & 65280) >> 8, c.series_instance_uid += String.fromCharCode(g), c.series_instance_uid += String.fromCharCode(h);
                    break;
                case 19:
                    j = "";
                    for (f = 0; f < l / 2; f++) h = e[d++], g = h & 255, h = (h & 65280) >> 8, j += String.fromCharCode(g), j += String.fromCharCode(h);
                    c.instance_number = parseInt(j, 10);
                    break;
                case 50:
                    j = "";
                    for (f = 0; f < l / 2; f++) h = e[d++], g = h & 255, h = (h & 65280) >> 8, j += String.fromCharCode(g), j += String.fromCharCode(h);
                    j = j.split("\\");
                    c.image_position_patient = [parseFloat(j[0]), parseFloat(j[1]), parseFloat(j[2])];
                    break;
                case 55:
                    j = "";
                    for (f = 0; f < l / 2; f++) h = e[d++], g = h & 255, h = (h & 65280) >> 8, j += String.fromCharCode(g), j += String.fromCharCode(h);
                    j = j.split("\\");
                    c.image_orientation_patient = [parseFloat(j[0]), parseFloat(j[1]), parseFloat(j[2]), parseFloat(j[3]), parseFloat(j[4]), parseFloat(j[5])];
                    break;
                default:
                    d = mf(e, d, h, l)
            }
            break;
        case 65534:
            switch (g) {
                default:
                    l = 0, d += l / 2
            }
            break;
        case 8:
            switch (g) {
                case 24:
                    c.sop_instance_uid = "";
                    for (f = 0; f < l /
                    2; f++) h = e[d++], g = h & 255, h = (h & 65280) >> 8, c.sop_instance_uid += String.fromCharCode(g), c.sop_instance_uid += String.fromCharCode(h);
                    break;
                default:
                    d = mf(e, d, h, l)
            }
            break;
        case 16:
            switch (g) {
                case 8720:
                    for (f = 0; f < l / 2; f++) d++;
                    break;
                default:
                    d = mf(e, d, h, l)
            }
            break;
        default:
            d = mf(e, d, h, l)
    }
    switch (c.ef) {
        case 8:
            c.data = new Uint8Array(c.columns * c.rows);
            break;
        case 16:
            c.data = new Uint16Array(c.columns * c.rows);
            break;
        case 32:
            c.data = new Uint32Array(c.columns * c.rows)
    }
    this.C = this.J.byteLength - 2 * c.columns * c.rows;
    e = t;
    switch (c.ef) {
        case 8:
            e =
                Z(this, "uchar", c.columns * c.rows);
            break;
        case 16:
            e = Z(this, "ushort", c.columns * c.rows);
            break;
        case 32:
            e = Z(this, "uint", c.columns * c.rows)
    }
    c.data = e;
    b.ra.push(c);
    return b
};
A("X.parserDCM", lf);
A("X.parserDCM.prototype.parse", lf.prototype.parse);

function nf() {
    Y.call(this);
    this.f = "parserVTK"
}

C(nf, Y);
nf.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    var e = b.h, d = b.n, f = new Uint8Array(c), g = "";
    b.h = e = new V(c.byteLength);
    b.n = d = new V(c.byteLength);
    c = 0;
    for (var h = f.length; c < h; c += 32768) g += Te(f, c, Math.min(c + 32768, h));
    f = g.split("\n");
    g = f.length;
    this.wd = this.xd = t;
    this.hc = [];
    this.Pa = jd;
    this.Re = this.Tb = this.Nb = this.Ub = u;
    c = 0;
    for (h = g % 8; h--;) of(this, f[c]), c++;
    for (h = 0.125 * g ^ 0; h--;) of(this, f[c]), c++, of(this, f[c]), c++, of(this, f[c]), c++, of(this, f[c]), c++, of(this, f[c]), c++, of(this, f[c]), c++, of(this, f[c]), c++,
        of(this, f[c]), c++;
    c = this.xd;
    var f = this.wd, g = f.length, l = h = this.hc.length;
    do {
        var j = this.hc[h - l], k = j.length, n;
        for (n = 0; n < k && !("LINES" == this.Pa && n + 1 >= k); n++) {
            var s = parseInt(j[n], 10), r = c.get(s);
            e.add(r[0], r[1], r[2]);
            var y = s, z = r;
            "LINES" == this.Pa ? (y = parseInt(j[n + 1], 10), z = c.get(y), e.add(z[0], z[1], z[2])) : "TRIANGLE_STRIPS" == this.Pa && (0 == n || n == k - 1) && e.add(r[0], r[1], r[2]);
            s < g ? (z = f.get(s), d.add(z[0], z[1], z[2]), "LINES" == this.Pa ? (y = f.get(y), d.add(y[0], y[1], y[2])) : "TRIANGLE_STRIPS" == this.Pa && (0 == n || n == k - 1) && d.add(z[0],
                z[1], z[2])) : (y = new S(r[0], r[1], r[2]), y.normalize(), d.add(y.x, y.y, y.d), "LINES" == this.Pa ? (y = new S(z[0], z[1], z[2]), y.normalize(), d.add(y.x, y.y, y.d)) : "TRIANGLE_STRIPS" == this.Pa && (0 == n || n == k - 1) && d.add(y.x, y.y, y.d))
        }
        l--
    } while (0 < l);
    b.Ha = this.Pa;
    D.Ca(this.f + ".parse");
    e = new md;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};

function of(a, b) {
    b = b.replace(/^\s+|\s+$/g, "");
    var c = b.split(" "), e = c.length, d = c[0];
    switch (d) {
        case "POINTS":
            a.Ub = q;
            a.Nb = u;
            a.Tb = u;
            c = parseInt(c[1], 10);
            a.xd = new V(3 * c);
            a.wd = new V(3 * c);
            return;
        case "VERTICES":
            a.Nb = q;
            a.Ub = u;
            a.Tb = u;
            c = parseInt(c[1], 10);
            3 <= c ? a.Pa = jd : 1 == c ? a.Pa = "POINTS" : m(Error("This VTK file is not supported!"));
            a.hc = [];
            return;
        case "TRIANGLE_STRIPS":
            a.Nb = q;
            a.Ub = u;
            a.Tb = u;
            a.Pa = "TRIANGLE_STRIPS";
            a.hc = [];
            return;
        case "LINES":
            a.Nb = q;
            a.Ub = u;
            a.Tb = u;
            a.Pa = "LINES";
            a.hc = [];
            return;
        case "POLYGONS":
            a.Nb = q;
            a.Ub = u;
            a.Tb = u;
            a.Pa = "POLYGONS";
            a.hc = [];
            return;
        case "POINT_DATA":
            a.Tb = q;
            a.Ub = u;
            a.Nb = u;
            return
    }
    if (a.Ub) if (1 == e || isNaN(parseFloat(d))) a.Ub = u; else {
        if (3 <= e) {
            var d = parseFloat(c[0]), f = parseFloat(c[1]), g = parseFloat(c[2]);
            a.xd.add(d, f, g)
        }
        6 <= e && (d = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.xd.add(d, f, g));
        9 <= e && (e = parseFloat(c[6]), d = parseFloat(c[7]), c = parseFloat(c[8]), a.xd.add(e, d, c))
    } else a.Nb ? 1 == e || isNaN(parseFloat(d)) ? a.Nb = u : (c = c.slice(1), a.hc.push(c)) : a.Tb && ("NORMALS" == d ? a.Re = q : 1 == e || isNaN(parseFloat(d)) ?
        (a.Tb = u, a.Re = u) : a.Re && (3 <= e && (d = parseFloat(c[0]), f = parseFloat(c[1]), g = parseFloat(c[2]), a.wd.add(d, f, g)), 6 <= e && (d = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.wd.add(d, f, g)), 9 <= e && (e = parseFloat(c[6]), d = parseFloat(c[7]), c = parseFloat(c[8]), a.wd.add(e, d, c))))
}

A("X.parserVTK", nf);
A("X.parserVTK.prototype.parse", nf.prototype.parse);

function pf() {
    Y.call(this);
    this.f = "parserFSM";
    this.Wd = u
}

C(pf, Y);
pf.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    this.J = c;
    var e = b.h, d = b.n;
    b.Mc = [];
    var f = b.Mc;
    c = 0;
    var g;
    do g = Z(this, "uchar"), c++; while (200 > c && 10 != g);
    Z(this, "uchar");
    d = Z(this, "uint");
    c = Z(this, "uint");
    var h = Z(this, "float", 3 * d);
    g = Z(this, "uint", 3 * c);
    var l = new Uint32Array(d), j = new Float32Array(9 * c);
    b.h = e = new V(9 * c);
    b.n = d = new V(9 * c);
    var k;
    for (k = 0; k < c; k++) {
        var n = 3 * k, s = g[n], r = g[n + 1], y = g[n + 2];
        f.push(s);
        f.push(r);
        f.push(y);
        l[s] += 1;
        l[r] += 1;
        l[y] += 1;
        var n = 3 * s, z = 3 * r, F = 3 * y, G = h[n], I = h[n + 1], B = h[n + 2], r = h[z],
            y = h[z + 1], s = h[z + 2], E = h[F], J = h[F + 1], O = h[F + 2];
        e.add(G, I, B);
        e.add(r, y, s);
        e.add(E, J, O);
        G = new S(G, I, B);
        E = new S(E, J, O);
        r = (new S(r, y, s)).l().wa(G);
        y = E.l().wa(G);
        r = Jc(r, y).normalize();
        j[n] += r.x;
        j[n + 1] += r.y;
        j[n + 2] += r.d;
        j[z] += r.x;
        j[z + 1] += r.y;
        j[z + 2] += r.d;
        j[F] += r.x;
        j[F + 1] += r.y;
        j[F + 2] += r.d
    }
    for (k = 0; k < c; k++) n = 3 * k, s = g[n], r = g[n + 1], y = g[n + 2], n = 3 * s, z = 3 * r, F = 3 * y, f = new S(j[z], j[z + 1], j[z + 2]), h = new S(j[F], j[F + 1], j[F + 2]), n = (new S(j[n], j[n + 1], j[n + 2])).scale(1 / l[s]).normalize(), f = f.scale(1 / l[r]).normalize(), h = h.scale(1 / l[y]).normalize(),
        d.add(n.x, n.y, n.d), d.add(f.x, f.y, f.d), d.add(h.x, h.y, h.d);
    c = Z(this, "uchar", this.J.byteLength - this.C);
    g = t;
    for (n = 0; n < c.length; n++) if (99 == c[n] && 114 == c[n + 1] && 97 == c[n + 2] && 115 == c[n + 3]) {
        for (d = g = n + 9; 10 != c[n] && n < c.length;) d++, n++;
        g = Te(c.subarray(g, d)).split(" ");
        break
    }
    g && (b.ja.Ch(parseFloat(g[0])), b.ja.Dh(parseFloat(g[1])), b.ja.Eh(parseFloat(g[2])));
    b.Ha = jd;
    D.Ca(this.f + ".parse");
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserFSM", pf);
A("X.parserFSM.prototype.parse", pf.prototype.parse);
var qf = {
    jf: function (a, b, c) {
        return qf.update(a, 0, b, c)
    }, update: function (a, b, c, e) {
        var d = qf.Lh, f = "number" === typeof c ? c : c = 0;
        e = "number" === typeof e ? e : a.length;
        b ^= 4294967295;
        for (f = e & 7; f--; ++c) b = b >>> 8 ^ d[(b ^ a[c]) & 255];
        for (f = e >> 3; f--; c += 8) b = b >>> 8 ^ d[(b ^ a[c]) & 255], b = b >>> 8 ^ d[(b ^ a[c + 1]) & 255], b = b >>> 8 ^ d[(b ^ a[c + 2]) & 255], b = b >>> 8 ^ d[(b ^ a[c + 3]) & 255], b = b >>> 8 ^ d[(b ^ a[c + 4]) & 255], b = b >>> 8 ^ d[(b ^ a[c + 5]) & 255], b = b >>> 8 ^ d[(b ^ a[c + 6]) & 255], b = b >>> 8 ^ d[(b ^ a[c + 7]) & 255];
        return (b ^ 4294967295) >>> 0
    }
};
qf.Lh = new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101,
    3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271,
    366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376,
    3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
    1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836,
    1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);

function rf(a) {
    var b = a.length, c = 0, e = Number.POSITIVE_INFINITY, d, f, g, h, l, j, k, n, s;
    for (n = 0; n < b; ++n) a[n] > c && (c = a[n]), a[n] < e && (e = a[n]);
    d = 1 << c;
    f = new Uint32Array(d);
    g = 1;
    h = 0;
    for (l = 2; g <= c;) {
        for (n = 0; n < b; ++n) if (a[n] === g) {
            j = 0;
            k = h;
            for (s = 0; s < g; ++s) j = j << 1 | k & 1, k >>= 1;
            for (s = j; s < d; s += l) f[s] = g << 16 | n;
            ++h
        }
        ++g;
        h <<= 1;
        l <<= 1
    }
    return [f, c, e]
};

function sf(a, b) {
    this.ff = [];
    this.gf = 32768;
    this.sb = this.zd = this.M = this.Uf = 0;
    this.input = new Uint8Array(a);
    this.zg = u;
    this.hf = tf;
    this.Jb = u;
    if (b || !(b = {})) b.index && (this.M = b.index), b.bufferSize && (this.gf = b.bufferSize), b.bufferType && (this.hf = b.bufferType), b.resize && (this.Jb = b.resize);
    switch (this.hf) {
        case uf:
            this.la = 32768;
            this.Ua = new Uint8Array(32768 + this.gf + 258);
            break;
        case tf:
            this.la = 0;
            this.Ua = new Uint8Array(this.gf);
            this.tc = this.wi;
            this.Cg = this.li;
            this.pf = this.qi;
            break;
        default:
            m(Error("invalid inflate mode"))
    }
}

var uf = 0, tf = 1;
sf.prototype.Yb = function () {
    for (; !this.zg;) {
        var a = vf(this, 3);
        a & 1 && (this.zg = q);
        a >>>= 1;
        switch (a) {
            case 0:
                var a = this.input, b = this.M, c = this.Ua, e = this.la, d = p, f = p, g = p, h = c.length, d = p;
                this.sb = this.zd = 0;
                d = a[b++];
                d === p && m(Error("invalid uncompressed block header: LEN (first byte)"));
                f = d;
                d = a[b++];
                d === p && m(Error("invalid uncompressed block header: LEN (second byte)"));
                f |= d << 8;
                d = a[b++];
                d === p && m(Error("invalid uncompressed block header: NLEN (first byte)"));
                g = d;
                d = a[b++];
                d === p && m(Error("invalid uncompressed block header: NLEN (second byte)"));
                g |=
                    d << 8;
                f === ~g && m(Error("invalid uncompressed block header: length verify"));
                b + f > a.length && m(Error("input buffer is broken"));
                switch (this.hf) {
                    case uf:
                        for (; e + f > c.length;) d = h - e, f -= d, c.set(a.subarray(b, b + d), e), e += d, b += d, this.la = e, c = this.tc(), e = this.la;
                        break;
                    case tf:
                        for (; e + f > c.length;) c = this.tc({Ig: 2});
                        break;
                    default:
                        m(Error("invalid inflate mode"))
                }
                c.set(a.subarray(b, b + f), e);
                e += f;
                this.M = b += f;
                this.la = e;
                this.Ua = c;
                break;
            case 1:
                this.pf(wf, xf);
                break;
            case 2:
                yf(this);
                break;
            default:
                m(Error("unknown BTYPE: " + a))
        }
    }
    return this.Cg()
};
var zf = new Uint16Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    Af = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258]),
    Bf = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0]),
    Cf = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]),
    Df = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
    Ef = new Uint8Array(288),
    Ff, Gf;
Ff = 0;
for (Gf = Ef.length; Ff < Gf; ++Ff) Ef[Ff] = 143 >= Ff ? 8 : 255 >= Ff ? 9 : 279 >= Ff ? 7 : 8;
var wf = rf(Ef), Hf = new Uint8Array(30), If, Jf;
If = 0;
for (Jf = Hf.length; If < Jf; ++If) Hf[If] = 5;
var xf = rf(Hf);

function vf(a, b) {
    for (var c = a.zd, e = a.sb, d = a.input, f = a.M, g; e < b;) g = d[f++], g === p && m(Error("input buffer is broken")), c |= g << e, e += 8;
    g = c & (1 << b) - 1;
    a.zd = c >>> b;
    a.sb = e - b;
    a.M = f;
    return g
}

function Kf(a, b) {
    for (var c = a.zd, e = a.sb, d = a.input, f = a.M, g = b[0], h = b[1], l; e < h;) l = d[f++], l === p && m(Error("input buffer is broken")), c |= l << e, e += 8;
    d = g[c & (1 << h) - 1];
    g = d >>> 16;
    a.zd = c >> g;
    a.sb = e - g;
    a.M = f;
    return d & 65535
}

function yf(a) {
    function b(a, b, c) {
        var d, e, f;
        for (f = 0; f < a;) switch (d = Kf(this, b), d) {
            case 16:
                for (d = 3 + vf(this, 2); d--;) c[f++] = e;
                break;
            case 17:
                for (d = 3 + vf(this, 3); d--;) c[f++] = 0;
                e = 0;
                break;
            case 18:
                for (d = 11 + vf(this, 7); d--;) c[f++] = 0;
                e = 0;
                break;
            default:
                e = c[f++] = d
        }
        return c
    }

    var c = vf(a, 5) + 257, e = vf(a, 5) + 1, d = vf(a, 4) + 4, f = new Uint8Array(zf.length), g;
    for (g = 0; g < d; ++g) f[zf[g]] = vf(a, 3);
    d = rf(f);
    f = new Uint8Array(c);
    g = new Uint8Array(e);
    a.pf(rf(b.call(a, c, d, f)), rf(b.call(a, e, d, g)))
}

w = sf.prototype;
w.pf = function (a, b) {
    var c = this.Ua, e = this.la;
    this.Fg = a;
    for (var d = c.length - 258, f, g, h; 256 !== (f = Kf(this, a));) if (256 > f) e >= d && (this.la = e, c = this.tc(), e = this.la), c[e++] = f; else {
        f -= 257;
        h = Af[f];
        0 < Bf[f] && (h += vf(this, Bf[f]));
        f = Kf(this, b);
        g = Cf[f];
        0 < Df[f] && (g += vf(this, Df[f]));
        e >= d && (this.la = e, c = this.tc(), e = this.la);
        for (; h--;) c[e] = c[e++ - g]
    }
    for (; 8 <= this.sb;) this.sb -= 8, this.M--;
    this.la = e
};
w.qi = function (a, b) {
    var c = this.Ua, e = this.la;
    this.Fg = a;
    for (var d = c.length, f, g, h; 256 !== (f = Kf(this, a));) if (256 > f) e >= d && (c = this.tc(), d = c.length), c[e++] = f; else {
        f -= 257;
        h = Af[f];
        0 < Bf[f] && (h += vf(this, Bf[f]));
        f = Kf(this, b);
        g = Cf[f];
        0 < Df[f] && (g += vf(this, Df[f]));
        e + h > d && (c = this.tc(), d = c.length);
        for (; h--;) c[e] = c[e++ - g]
    }
    for (; 8 <= this.sb;) this.sb -= 8, this.M--;
    this.la = e
};
w.tc = function () {
    var a = new Uint8Array(this.la - 32768), b = this.la - 32768, c = this.Ua;
    a.set(c.subarray(32768, a.length));
    this.ff.push(a);
    this.Uf += a.length;
    c.set(c.subarray(b, b + 32768));
    this.la = 32768;
    return c
};
w.wi = function (a) {
    var b = this.input.length / this.M + 1 | 0, c = this.input, e = this.Ua;
    a && ("number" === typeof a.Ig && (b = a.Ig), "number" === typeof a.ei && (b += a.ei));
    2 > b ? (a = (c.length - this.M) / this.Fg[2], a = 258 * (a / 2) | 0, a = a < e.length ? e.length + a : e.length << 1) : a = e.length * b;
    a = new Uint8Array(a);
    a.set(e);
    return this.Ua = a
};
w.Cg = function () {
    var a = 0, b = this.Ua, c = this.ff, e, d = new Uint8Array(this.Uf + (this.la - 32768)), f, g, h, l;
    if (0 === c.length) return this.Ua.subarray(32768, this.la);
    f = 0;
    for (g = c.length; f < g; ++f) {
        e = c[f];
        h = 0;
        for (l = e.length; h < l; ++h) d[a++] = e[h]
    }
    f = 32768;
    for (g = this.la; f < g; ++f) d[a++] = b[f];
    this.ff = [];
    return this.buffer = d
};
w.li = function () {
    var a, b = this.la;
    this.Jb ? (a = new Uint8Array(b), a.set(this.Ua.subarray(0, b))) : a = this.Ua.subarray(0, b);
    return this.buffer = a
};
new Uint8Array(256);
var Lf;
for (Lf = 0; 256 > Lf; ++Lf) for (var Mf = Lf, Nf = 7, Mf = Mf >>> 1; Mf; Mf >>>= 1) --Nf;
var Of = [], Pf;
for (Pf = 0; 288 > Pf; Pf++) switch (q) {
    case 143 >= Pf:
        Of.push([Pf + 48, 8]);
        break;
    case 255 >= Pf:
        Of.push([Pf - 144 + 400, 9]);
        break;
    case 279 >= Pf:
        Of.push([Pf - 256 + 0, 7]);
        break;
    case 287 >= Pf:
        Of.push([Pf - 280 + 192, 8]);
        break;
    default:
        m("invalid literal: " + Pf)
}

function Qf() {
    var a = Rf;
    switch (q) {
        case 3 === a:
            return [257, a - 3, 0];
        case 4 === a:
            return [258, a - 4, 0];
        case 5 === a:
            return [259, a - 5, 0];
        case 6 === a:
            return [260, a - 6, 0];
        case 7 === a:
            return [261, a - 7, 0];
        case 8 === a:
            return [262, a - 8, 0];
        case 9 === a:
            return [263, a - 9, 0];
        case 10 === a:
            return [264, a - 10, 0];
        case 12 >= a:
            return [265, a - 11, 1];
        case 14 >= a:
            return [266, a - 13, 1];
        case 16 >= a:
            return [267, a - 15, 1];
        case 18 >= a:
            return [268, a - 17, 1];
        case 22 >= a:
            return [269, a - 19, 2];
        case 26 >= a:
            return [270, a - 23, 2];
        case 30 >= a:
            return [271, a - 27, 2];
        case 34 >= a:
            return [272, a -
            31, 2];
        case 42 >= a:
            return [273, a - 35, 3];
        case 50 >= a:
            return [274, a - 43, 3];
        case 58 >= a:
            return [275, a - 51, 3];
        case 66 >= a:
            return [276, a - 59, 3];
        case 82 >= a:
            return [277, a - 67, 4];
        case 98 >= a:
            return [278, a - 83, 4];
        case 114 >= a:
            return [279, a - 99, 4];
        case 130 >= a:
            return [280, a - 115, 4];
        case 162 >= a:
            return [281, a - 131, 5];
        case 194 >= a:
            return [282, a - 163, 5];
        case 226 >= a:
            return [283, a - 195, 5];
        case 257 >= a:
            return [284, a - 227, 5];
        case 258 === a:
            return [285, a - 258, 0];
        default:
            m("invalid length: " + a)
    }
}

var Sf = [], Rf, Tf;
for (Rf = 3; 258 >= Rf; Rf++) Tf = Qf(), Sf[Rf] = Tf[2] << 24 | Tf[1] << 16 | Tf[0];
new Uint32Array(Sf);

function Uf() {
};

function Vf(a) {
    this.input = a;
    this.M = 0;
    this.member = []
}

Vf.prototype.Yb = function () {
    for (var a = this.input.length; this.M < a;) {
        var b = new Uf, c = p, e = p, d = p, f = c = d = p, g = p, c = c = p, h = this.input, e = this.M;
        b.Og = h[e++];
        b.Pg = h[e++];
        (31 !== b.Og || 139 !== b.Pg) && m(Error("invalid file signature:", b.Og, b.Pg));
        b.Bg = h[e++];
        switch (b.Bg) {
            case 8:
                break;
            default:
                m(Error("unknown compression method: " + b.Bg))
        }
        b.le = h[e++];
        c = h[e++] | h[e++] << 8 | h[e++] << 16 | h[e++] << 24;
        b.Kl = new Date(1E3 * c);
        b.Vl = h[e++];
        b.Pl = h[e++];
        0 < (b.le & 4) && (b.Fe = h[e++] | h[e++] << 8, e += b.Fe);
        if (0 < (b.le & 8)) {
            g = [];
            for (f = 0; 0 < (c = h[e++]);) g[f++] =
                String.fromCharCode(c);
            b.name = g.join("")
        }
        if (0 < (b.le & 16)) {
            g = [];
            for (f = 0; 0 < (c = h[e++]);) g[f++] = String.fromCharCode(c);
            b.comment = g.join("")
        }
        0 < (b.le & 2) && (b.mi = qf.jf(h, 0, e) & 65535, b.mi !== (h[e++] | h[e++] << 8) && m(Error("invalid header crc16")));
        c = h[h.length - 4] | h[h.length - 3] << 8 | h[h.length - 2] << 16 | h[h.length - 1] << 24;
        h.length - e - 4 - 4 < 512 * c && (d = c);
        e = new sf(h, {index: e, bufferSize: d});
        b.data = d = e.Yb();
        e = e.M;
        b.vl = c = (h[e++] | h[e++] << 8 | h[e++] << 16 | h[e++] << 24) >>> 0;
        qf.jf(d) !== c && m(Error("invalid CRC-32 checksum: 0x" + qf.jf(d).toString(16) +
            " / 0x" + c.toString(16)));
        b.Dl = c = (h[e++] | h[e++] << 8 | h[e++] << 16 | h[e++] << 24) >>> 0;
        (d.length & 4294967295) !== c && m(Error("invalid input size: " + (d.length & 4294967295) + " / " + c));
        this.member.push(b);
        this.M = e
    }
    a = this.member;
    b = d = e = 0;
    for (h = a.length; b < h; ++b) d += a[b].data.length;
    d = new Uint8Array(d);
    for (b = 0; b < h; ++b) d.set(a[b].data, e), e += a[b].data.length;
    return d
};

function Wf() {
    Y.call(this);
    this.f = "parserMGZ";
    this.Wd = u
}

C(Wf, Y);
Wf.prototype.parse = function (a, b, c, e) {
    D.Ia(this.f + ".parse");
    window.console.log(b);
    e && (c = (new Vf(new Uint8Array(c))).Yb(), c = c.buffer);
    e = this.vc(c);
    var d = [e.zf, e.Af, e.Bf];
    b.ca = d;
    var f = e.Fh;
    b.rb = f;
    c = e.min;
    var g = e.max;
    b.Oa = b.fa = c;
    b.ia = b.ea = g;
    -Infinity == b.U && (b.U = c);
    Infinity == b.W && (b.W = g);
    c = Sc();
    if ("false" == b.reslicing || b.reslicing == u) T(c, 0, b.rb[0], 0, 0, 0), T(c, 1, 0, b.rb[1], 0, 0), T(c, 2, 0, 0, b.rb[2], 0), T(c, 3, 0, 0, 0, 1), Vc(c, 0, 0, 0, 1); else {
        T(c, 0, e.eb[0][0], e.eb[1][0], e.eb[2][0], 0);
        T(c, 1, e.eb[0][1], e.eb[1][1], e.eb[2][1],
            0);
        T(c, 2, e.eb[0][2], e.eb[1][2], e.eb[2][2], 0);
        T(c, 3, 0, 0, 0, 1);
        for (var g = d[0] / 2, h = d[1] / 2, d = d[2] / 2, l = [0, 0, 0], j = 0; 3 > j; ++j) l[j] = e.eb[3][j] - (c[j + 0] * f[0] * g + c[j + 4] * f[1] * h + c[j + 8] * f[2] * d);
        Vc(c, l[0], l[1], l[2], 1)
    }
    e.cb = c;
    e.fb = Sc();
    bd(e.cb, e.fb);
    g = Rc(0, 0, 0, 1);
    f = Qc();
    dd(c, g, f);
    h = Rc(1, 1, 1, 1);
    g = Qc();
    dd(c, h, g);
    c = Ue(c, b.ca);
    e.Bc = [g[0] - f[0], g[1] - f[1], g[2] - f[2]];
    e.zc = [c[1] - c[0] + 1, c[3] - c[2] + 1, c[5] - c[4] + 1];
    e.Ac = [c[0], c[2], c[4]];
    b.Gb(e);
    D.Ca(this.f + ".parse");
    b.ib = af(this, b);
    e = new md;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
Wf.prototype.vc = function (a) {
    this.J = a;
    a = {
        version: 0,
        Oh: 0,
        Mh: 0,
        Di: 0,
        Nh: 0,
        zf: 0,
        Af: 0,
        Bf: 0,
        mj: 0,
        type: 0,
        ui: 0,
        uh: 0,
        Bk: t,
        eb: t,
        Fh: t,
        data: t,
        min: Infinity,
        max: -Infinity
    };
    a.version = Z(this, "uint");
    a.zf = Z(this, "uint");
    a.Af = Z(this, "uint");
    a.Bf = Z(this, "uint");
    a.mj = Z(this, "uint");
    a.type = Z(this, "uint");
    a.ui = Z(this, "uint");
    a.uh = Z(this, "ushort");
    if (0 < a.uh) {
        a.Fh = Z(this, "float", 3);
        var b = [];
        b.push(Z(this, "float", 3));
        b.push(Z(this, "float", 3));
        b.push(Z(this, "float", 3));
        b.push(Z(this, "float", 3));
        a.eb = b
    }
    this.C = 284;
    b = a.zf * a.Af *
        a.Bf;
    switch (a.type) {
        case 0:
            a.data = Z(this, "uchar", b);
            break;
        case 1:
            a.data = Z(this, "uint", b);
            break;
        case 3:
            a.data = Z(this, "float", b);
            break;
        case 4:
            a.data = Z(this, "ushort", b);
            break;
        default:
            m(Error("Unsupported MGH/MGZ data type: " + a.type))
    }
    b = Se(a.data);
    a.min = b[0];
    a.max = b[1];
    this.C + 16 < this.J.byteLength && (a.Oh = Z(this, "float"), a.Di = Z(this, "float"), a.Mh = Z(this, "float"), a.Nh = Z(this, "float"));
    return a
};
A("X.parserMGZ", Wf);
A("X.parserMGZ.prototype.parse", Wf.prototype.parse);

function Xf() {
    Y.call(this);
    this.f = "parserLBL"
}

C(Xf, Y);
Xf.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    var e = b.Mc, d = e.length;
    0 == d && m(Error("No _pointIndices defined on the X.object."));
    this.J = c;
    var f = [], g = Z(this, "uchar", c.byteLength), h = g.length, l = u, j = 0;
    for (c = 1; c < h; c++) 10 == g[c - 1] ? (j = c, l = q) : l && 32 == g[c] && (f.push(parseInt(Te(g, j, c), 10)), l = u);
    g = b.F.I ? b.F.I : new Float32Array(d);
    h = f.length;
    for (c = 0; c < h; c++) g[f[c]] = 1;
    f = new Float32Array(3 * d);
    for (c = h = 0; c < d; c++) l = e[c], l > d && m(Error("Could not find scalar for vertex.")), l = g[l], f[h++] = l, f[h++] = l, f[h++] = l;
    b.F.I =
        g;
    b.F.cd = f;
    b.F.j = q;
    D.Ca(this.f + ".parse");
    e = new md;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
A("X.parserLBL", Xf);
A("X.parserLBL.prototype.parse", Xf.prototype.parse);

function Yf() {
    Y.call(this);
    this.f = "parserCRV";
    this.Wd = u
}

C(Yf, Y);
Yf.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    var e = b.Mc;
    0 == e.length && m(Error("No _pointIndices defined on the X.object."));
    this.J = c;
    this.C = 3;
    var d = Z(this, "uint");
    Z(this, "uint");
    Z(this, "uint");
    var f = 0, g = 0, h = 0, l = 0, j = 0, k = 0, n = 0, s = 0, r = 0, y = 0, z = 0;
    c = Array(2);
    var F = Array(2), G = Z(this, "float", d), I;
    for (I = 0; I < d; I++) {
        var B = G[I];
        0 == I && (c[0] = F[0] = B);
        0 <= B ? (f++, l += B) : (g++, h += B);
        r += B;
        z++;
        F[0] = Math.max(B, F[0]);
        c[0] = Math.min(B, c[0]);
        G[I] = B
    }
    0 != f && (j = l / f);
    0 != g && (k = h / g);
    0 != z && (y = r / z);
    for (z = r = h = l = 0; z < d; z++) B =
        G[z], I = 0, 0 <= B ? (I = Math.pow(B - j, 2), l += I) : (I = Math.pow(B - k, 2), h += I), I = Math.pow(B - y, 2), r += I;
    1 < f && (n = Math.sqrt(l / (f - 1)));
    1 < g && (s = Math.sqrt(h / (g - 1)));
    c[1] = k - 2.5 * s;
    F[1] = j + 2.5 * n;
    d = e.length;
    f = new Float32Array(3 * d);
    for (z = 0; z < d; z++) g = G[e[z]], h = 3 * z, f[h] = g, f[h + 1] = g, f[h + 2] = g;
    b.F.Oa = c[1];
    b.F.ia = F[1];
    -Infinity == b.F.U && (b.F.U = c[1]);
    Infinity == b.F.W && (b.F.W = F[1]);
    b.F.I = G;
    b.F.cd = f;
    b.F.j = q;
    D.Ca(this.f + ".parse");
    e = new md;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
A("X.parserCRV", Yf);
A("X.parserCRV.prototype.parse", Yf.prototype.parse);

function Zf(a, b) {
    var c, e;
    this.input = a;
    this.M = 0;
    if (b || !(b = {})) b.index && (this.M = b.index), b.verify && (this.sk = b.verify);
    c = a[this.M++];
    e = a[this.M++];
    switch (c & 15) {
        case 8:
            this.method = 8;
            break;
        default:
            m(Error("unsupported compression method"))
    }
    0 !== ((c << 8) + e) % 31 && m(Error("invalid fcheck flag:" + ((c << 8) + e) % 31));
    e & 32 && m(Error("fdict flag is not supported"));
    this.vh = new sf(a, {index: this.M, bufferSize: b.bufferSize, bufferType: b.bufferType, resize: b.resize})
}

Zf.prototype.Yb = function () {
    var a = this.input, b;
    b = this.vh.Yb();
    this.M = this.vh.M;
    if (this.sk) {
        var a = (a[this.M++] << 24 | a[this.M++] << 16 | a[this.M++] << 8 | a[this.M++]) >>> 0, c = b;
        if ("string" === typeof c) {
            var c = c.split(""), e, d;
            e = 0;
            for (d = c.length; e < d; e++) c[e] = (c[e].charCodeAt(0) & 255) >>> 0
        }
        e = 1;
        d = 0;
        for (var f = c.length, g, h = 0; 0 < f;) {
            g = 1024 < f ? 1024 : f;
            f -= g;
            do e += c[h++], d += e; while (--g);
            e %= 65521;
            d %= 65521
        }
        a !== (d << 16 | e) >>> 0 && m(Error("invalid adler-32 checksum"))
    }
    return b
};

function $f() {
    Y.call(this);
    this.f = "parserRAW"
}

C($f, Y);
$f.prototype.parse = function (a, b, c, e) {
    D.Ia(this.f + ".parse");
    e && (c = (new Zf(new Uint8Array(c))).Yb(), c = c.buffer);
    e = {};
    e.data = new Uint8Array(c);
    var d = Se(e.data);
    c = d[0];
    d = d[1];
    e.min = b.Oa = b.fa = c;
    e.max = b.ia = b.ea = d;
    -Infinity == b.U && (b.U = c);
    Infinity == b.W && (b.W = d);
    d = Tc();
    e.cb = d;
    e.fb = Tc();
    var f = Rc(0, 0, 0, 1);
    c = Qc();
    dd(d, f, c);
    var g = Rc(1, 1, 1, 1), f = Qc();
    dd(d, g, f);
    d = Ue(d, b.ca);
    e.Bc = [f[0] - c[0], f[1] - c[1], f[2] - c[2]];
    e.zc = [d[1] - d[0] + 1, d[3] - d[2] + 1, d[5] - d[4] + 1];
    e.Ac = [d[0], d[2], d[4]];
    b.Gb(e);
    D.Ca(this.f + ".parse");
    b.ib = af(this,
        b);
    e = new md;
    e.D = b;
    e.v = a;
    this.dispatchEvent(e)
};
A("X.parserRAW", $f);
A("X.parserRAW.prototype.parse", $f.prototype.parse);

function ag() {
    Y.call(this);
    this.f = "parserLUT"
}

C(ag, Y);
ag.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    this.J = c;
    c = Z(this, "uchar", c.byteLength);
    var e = c.length, d = 0, f;
    for (f = 0; f < e; f++) if (10 == c[f]) {
        var g = Te(c, d, f), d = f + 1, g = g.replace(/^\s+|\s+$/g, "");
        "#" != g[0] && (g = g.split(" "), g = g.filter(function (a) {
            return "" != a
        }), 6 == g.length && (g[2] = parseInt(g[2], 10) / 255, g[3] = parseInt(g[3], 10) / 255, g[4] = parseInt(g[4], 10) / 255, g[5] = parseInt(g[5], 10) / 255, a.add(parseInt(g[0], 10), g[1], g[2], g[3], g[4], g[5], 10)))
    }
    D.Ca(this.f + ".parse");
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserLUT", ag);
A("X.parserLUT.prototype.parse", ag.prototype.parse);

function bg() {
    Y.call(this);
    this.f = "parserMRC"
}

C(bg, Y);
bg.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    c = this.vc(c);
    var e = c.min, d = c.max;
    b.ca = [c.Fd, c.Gd, c.Hd];
    b.rb = [c.Fe / c.ah, c.Ih / c.bh, c.Jh / c.dh];
    b.Oa = b.fa = e;
    b.ia = b.ea = d;
    -Infinity == b.U && (b.U = e);
    Infinity == b.W && (b.W = d);
    d = Sc();
    T(d, 3, 0, 0, 0, 1);
    T(d, 0, -1, 0, 0, c.Fd);
    T(d, 1, 0, 0, -1, c.Gd);
    T(d, 2, 0, -1, 0, c.Hd);
    c.cb = d;
    c.fb = Sc();
    bd(c.cb, c.fb);
    var f = Rc(0, 0, 0, 1), e = Qc();
    dd(d, f, e);
    var g = Rc(1, 1, 1, 1), f = Qc();
    dd(d, g, f);
    g = [c.Fd, c.Gd, c.Hd];
    d = Ue(d, g);
    c.Bc = [f[0] - e[0], f[1] - e[1], f[2] - e[2]];
    c.zc = [d[1] + d[0] + 1, d[3] - d[2] + 1, d[5] -
    d[4] + 1];
    c.Ac = [d[0], d[2], d[4]];
    b.ca = g;
    b.Gb(c);
    b.ib = af(this, b);
    D.Ca(this.f + ".parse");
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
bg.prototype.vc = function (a) {
    this.J = a;
    a = {
        Fd: 0,
        Gd: 0,
        Hd: 0,
        mode: 0,
        Ml: 0,
        Nl: 0,
        Ol: 0,
        ah: 0,
        bh: 0,
        dh: 0,
        Fe: 0,
        Ih: 0,
        Jh: 0,
        alpha: 0,
        hi: 0,
        Ei: 0,
        ej: 0,
        fj: 0,
        gj: 0,
        df: 0,
        ge: 0,
        qc: 0,
        Fl: 0,
        next: 0,
        ni: 0,
        yi: t,
        nj: 0,
        pj: 0,
        yi: t,
        Si: 0,
        Cl: 0,
        Qi: 0,
        aj: 0,
        jj: 0,
        kj: 0,
        qk: 0,
        rk: 0,
        nk: t,
        tk: 0,
        vk: 0,
        wk: 0,
        ul: 0,
        Ul: 0,
        $j: 0,
        oj: 0,
        data: t,
        min: Infinity,
        max: -Infinity,
        Jl: 0,
        yh: t,
        Tl: t,
        Rl: t,
        orientation: t,
        Ll: t
    };
    this.C = 0;
    a.Fd = Z(this, "sint");
    a.Gd = Z(this, "sint");
    a.Hd = Z(this, "sint");
    a.mode = Z(this, "sint");
    var b = a.Fd * a.Gd * a.Hd;
    this.C = 1024;
    switch (a.mode) {
        case 0:
            a.data = Z(this,
                "schar", b);
            break;
        case 1:
            a.data = Z(this, "sshort", b);
            break;
        case 2:
            a.data = Z(this, "float", b);
            break;
        case 3:
            a.data = Z(this, "uint", b);
            break;
        case 4:
            a.data = Z(this, "double", b);
            break;
        case 6:
            a.data = Z(this, "ushort", b);
            break;
        case 16:
            a.data = Z(this, "uchar", b);
            break;
        default:
            m(Error("Unsupported MRC data type: " + a.mode))
    }
    this.C = 28;
    a.ah = Z(this, "sint");
    a.bh = Z(this, "sint");
    a.dh = Z(this, "sint");
    a.Fe = Z(this, "float");
    a.Ih = Z(this, "float");
    a.Jh = Z(this, "float");
    a.alpha = Z(this, "float");
    a.hi = Z(this, "float");
    a.Ei = Z(this, "float");
    a.ej = Z(this, "sint");
    a.fj = Z(this, "sint");
    a.gj = Z(this, "sint");
    a.df = Z(this, "float");
    a.ge = Z(this, "float");
    a.qc = Z(this, "float");
    a.El = Z(this, "sint");
    a.next = Z(this, "sint");
    a.ni = Z(this, "short");
    a.nj = Z(this, "short");
    a.pj = Z(this, "short");
    a.Si = Z(this, "sint");
    a.Bl = Z(this, "sint");
    a.Qi = Z(this, "short");
    a.aj = Z(this, "short");
    a.jj = Z(this, "short");
    a.kj = Z(this, "short");
    a.qk = Z(this, "short");
    a.rk = Z(this, "short");
    a.nk = Z(this, "float", 6);
    this.C = 196;
    a.tk = Z(this, "float");
    a.vk = Z(this, "float");
    a.wk = Z(this, "float");
    this.C = 216;
    a.$j = Z(this, "float");
    a.oj = Z(this, "sint");
    a.Gl = Z(this, "schar", 10);
    if (0 != a.next) switch (this.C = parseInt(a.next + 1024, 10), a.mode) {
        case 0:
            a.data = Z(this, "schar", b);
            break;
        case 1:
            a.data = Z(this, "sshort", b);
            break;
        case 2:
            a.data = Z(this, "float", b);
            break;
        case 3:
            a.data = Z(this, "uint", b);
            break;
        case 4:
            a.data = Z(this, "double", b);
            break;
        case 6:
            a.data = Z(this, "ushort", b);
            break;
        case 16:
            a.data = Z(this, "uchar", b);
            break;
        default:
            m(Error("Unsupported MRC data type: " + a.mode))
    }
    0 > a.qc - (a.ge - a.qc) ? (a.min = a.df, a.max = a.qc + (a.qc - a.df)) :
        (a.min = a.qc - (a.ge - a.qc), a.max = a.ge);
    return a
};
A("X.parserMRC", bg);
A("X.parserMRC.prototype.parse", bg.prototype.parse);

function cg() {
    Y.call(this);
    this.f = "parserNRRD"
}

C(cg, Y);
cg.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    this.J = c;
    c = Z(this, "uchar", c.byteLength);
    var e = c.length, d = t, f = 0, g;
    for (g = 1; g < e; g++) if (10 == c[g - 1] && 10 == c[g]) {
        d = Te(c, 0, g - 2);
        f = g + 1;
        break
    }
    var h, l, j, k, e = d.split(/\r?\n/), d = 0;
    for (g = e.length; d < g; d++) if (h = e[d], h.match(/NRRD\d+/)) this.Zi = q; else if (!h.match(/^#/) && (k = h.match(/(.*):(.*)/))) l = k[1].trim(), h = k[2].trim(), (j = this.zi[l]) ? j.call(this, h) : this[l] = h;
    this.Zi || m(Error("Not an NRRD file"));
    "raw" !== this.encoding && ("gzip" !== this.encoding && "gz" !== this.encoding) &&
    m(Error("Only raw or gz/gzip encoding is allowed"));
    if (!this.ha && (this.ha = [new S(1, 0, 0), new S(0, 1, 0), new S(0, 0, 1)], this.Sf)) {
        e = [];
        for (k = 0; 2 >= k; k++) e.push(!isNaN(this.Sf[k]) ? this.ha[k].scale(this.Sf[k]) : p)
    }
    f = c.subarray(f);
    if ("gzip" == this.encoding || "gz" == this.encoding) f = (new Vf(new Uint8Array(f))).Yb();
    f = f.buffer;
    c = {data: t, min: Infinity, max: -Infinity};
    c.data = new this.Mb(f);
    k = Se(c.data);
    f = c.min = k[0];
    k = c.max = k[1];
    b.Oa = b.fa = f;
    b.ia = b.ea = k;
    b.ca = [this.Qf[0], this.Qf[1], this.Qf[2]];
    e = (new S(this.ha[0][0], this.ha[0][1],
        this.ha[0][2])).Ib();
    d = (new S(this.ha[1][0], this.ha[1][1], this.ha[1][2])).Ib();
    g = (new S(this.ha[2][0], this.ha[2][1], this.ha[2][2])).Ib();
    b.rb = [e, d, g];
    -Infinity == b.U && (b.U = f);
    Infinity == b.W && (b.W = k);
    e = k = 1;
    "left-posterior-superior" == this.yh && (e = k = -1);
    f = Tc();
    "false" == b.reslicing || b.reslicing == u ? (T(f, 0, k, 0, 0, 0), T(f, 1, 0, e, 0, 0), T(f, 2, 0, 0, 1, 0)) : (T(f, 0, k * this.ha[0][0], k * this.ha[1][0], k * this.ha[2][0], k * this.Rf[0]), T(f, 1, e * this.ha[0][1], e * this.ha[1][1], e * this.ha[2][1], e * this.Rf[1]), T(f, 2, 1 * this.ha[0][2], 1 * this.ha[1][2],
        1 * this.ha[2][2], 1 * this.Rf[2]));
    T(f, 3, 0, 0, 0, 1);
    c.cb = f;
    c.fb = Sc();
    bd(c.cb, c.fb);
    e = Rc(0, 0, 0, 1);
    k = Qc();
    dd(f, e, k);
    d = Rc(1, 1, 1, 1);
    e = Qc();
    dd(f, d, e);
    f = Ue(f, b.ca);
    c.Bc = [e[0] - k[0], e[1] - k[1], e[2] - k[2]];
    c.zc = [f[1] - f[0] + 1, f[3] - f[2] + 1, f[5] - f[4] + 1];
    c.Ac = [f[0], f[2], f[4]];
    b.Gb(c);
    D.Ca(this.f + ".parse");
    b.ib = af(this, b);
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
cg.prototype.zi = {
    type: function (a) {
        switch (a) {
            case "uchar":
            case "unsigned char":
            case "uint8":
            case "uint8_t":
                this.Mb = Uint8Array;
                break;
            case "signed char":
            case "int8":
            case "int8_t":
                this.Mb = Int8Array;
                break;
            case "short":
            case "short int":
            case "signed short":
            case "signed short int":
            case "int16":
            case "int16_t":
                this.Mb = Int16Array;
                break;
            case "ushort":
            case "unsigned short":
            case "unsigned short int":
            case "uint16":
            case "uint16_t":
                this.Mb = Uint16Array;
                break;
            case "int":
            case "signed int":
            case "int32":
            case "int32_t":
                this.Mb =
                    Int32Array;
                break;
            case "uint":
            case "unsigned int":
            case "uint32":
            case "uint32_t":
                this.Mb = Uint32Array;
                break;
            case "float":
                this.Mb = Float32Array;
                break;
            case "double":
                this.Mb = Float64Array;
                break;
            default:
                m(Error("Unsupported NRRD data type: " + a))
        }
        return this.type = a
    }, endian: function (a) {
        return this.zl = a
    }, encoding: function (a) {
        return this.encoding = a
    }, dimension: function (a) {
        return this.Zb = parseInt(a, 10)
    }, sizes: function (a) {
        var b, c, e, d;
        e = a.split(/\s+/);
        d = [];
        b = 0;
        for (c = e.length; b < c; b++) a = e[b], d.push(parseInt(a, 10));
        return this.Qf = d
    }, space: function (a) {
        return this.yh = a
    }, "space origin": function (a) {
        return this.Rf = a.split("(")[1].split(")")[0].split(",")
    }, "space directions": function (a) {
        var b, c;
        a = a.match(/\(.*?\)/g);
        var e, d, f;
        f = [];
        e = 0;
        for (d = a.length; e < d; e++) c = a[e], f.push(function () {
            var a, d, e, f;
            e = c.slice(1, -1).split(/,/);
            f = [];
            a = 0;
            for (d = e.length; a < d; a++) b = e[a], f.push(parseFloat(b));
            return f
        }());
        return this.ha = f
    }, spacings: function (a) {
        var b;
        b = a.split(/\s+/);
        var c, e, d;
        d = [];
        c = 0;
        for (e = b.length; c < e; c++) a = b[c], d.push(parseFloat(a));
        return this.Sf = d
    }
};
A("X.parserNRRD", cg);
A("X.parserNRRD.prototype.parse", cg.prototype.parse);

function dg() {
    Y.call(this);
    this.f = "parserSTL"
}

C(dg, Y);
dg.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    this.J = c;
    var e = b.h, d = b.n;
    if ("solid" == Te(Z(this, "uchar", 5))) {
        b.h = e = new V(c.byteLength);
        b.n = d = new V(c.byteLength);
        var f = e, e = d, d = Z(this, "uchar", c.byteLength - 5);
        c = d.length;
        var g = u, h = u, l = 0, j;
        for (j = 0; j < c; j++) if (10 == d[j]) {
            if (g || h) {
                var k = Te(d, l, j).split(" "), h = parseFloat(k[0]), n = parseFloat(k[1]), k = parseFloat(k[2]);
                g ? (e.add(h, n, k), e.add(h, n, k), e.add(h, n, k)) : f.add(h, n, k);
                h = g = u
            }
        } else 32 == d[j - 1] && (102 == d[j] ? (l = j += 13, g = q) : 118 == d[j] && (l = j += 7, h = q))
    } else {
        this.C =
            80;
        f = Z(this, "uint");
        b.h = e = new V(9 * f);
        b.n = d = new V(9 * f);
        for (c = c = 0; c < f; c++) g = Z(this, "float", 12), l = g[0], j = g[1], h = g[2], d.add(l, j, h), d.add(l, j, h), d.add(l, j, h), e.add(g[3], g[4], g[5]), e.add(g[6], g[7], g[8]), e.add(g[9], g[10], g[11]), this.C += 2
    }
    D.Ca(this.f + ".parse");
    f = new md;
    f.D = b;
    f.v = a;
    this.dispatchEvent(f)
};
A("X.parserSTL", dg);
A("X.parserSTL.prototype.parse", dg.prototype.parse);

function eg() {
    Y.call(this);
    this.f = "parserNII"
}

C(eg, Y);
eg.prototype.parse = function (a, b, c) {
    var e = c, d = -1,
        d = "undefined" == typeof DataView ? (new Int32Array(c, 0, 1))[0] : (new DataView(c, 0)).getInt32(0, q);
    348 != d && (e = (new Vf(new Uint8Array(e))).Yb(), e = e.buffer);
    c = this.vc(e);
    e = c.min;
    d = c.max;
    b.Oa = b.fa = e;
    b.ia = b.ea = d;
    -Infinity == b.U && (b.U = e);
    Infinity == b.W && (b.W = d);
    e = Sc();
    T(e, 3, 0, 0, 0, 1);
    if ("false" == b.reslicing || b.reslicing == u) {
        var f = d = 1, g = 1;
        0 < c.qa[1] && (d = c.qa[1]);
        0 < c.qa[2] && (f = c.qa[2]);
        0 < c.qa[2] && (g = c.qa[3]);
        0 > c.qa[0] && (g = -g);
        T(e, 0, d, 0, 0, 0);
        T(e, 1, 0, f, 0, 0);
        T(e, 2, 0, 0, g,
            0)
    } else if (0 < c.Mf) {
        var h = 0, l = c.rh, j = c.sh, k = c.th, g = f = d = 1, n = c.oh, s = c.ph, r = c.qh,
            h = 1 - (l * l + j * j + k * k);
        1E-7 > h ? (h = 1 / Math.sqrt(l * l + j * j + k * k), l *= h, j *= h, k *= h, h = 0) : h = Math.sqrt(h);
        0 < c.qa[1] && (d = c.qa[1]);
        0 < c.qa[2] && (f = c.qa[2]);
        0 < c.qa[2] && (g = c.qa[3]);
        0 > c.qa[0] && (g = -g);
        T(e, 0, (h * h + l * l - j * j - k * k) * d, 2 * (l * j - h * k) * f, 2 * (l * k + h * j) * g, n);
        T(e, 1, 2 * (l * j + h * k) * d, (h * h + j * j - l * l - k * k) * f, 2 * (j * k - h * l) * g, s);
        T(e, 2, 2 * (l * k - h * j) * d, 2 * (j * k + h * l) * f, (h * h + k * k - j * j - l * l) * g, r)
    } else 0 < c.wh ? (d = c.zh, f = c.Ah, g = c.Bh, T(e, 0, d[0], d[1], d[2], d[3]), T(e, 1, f[0], f[1], f[2],
        f[3]), T(e, 2, g[0], g[1], g[2], g[3])) : 0 == c.Mf ? (T(e, 0, c.qa[1], 0, 0, 0), T(e, 1, 0, c.qa[2], 0, 0), T(e, 2, 0, 0, c.qa[3], 0)) : window.console.log("UNKNOWN METHOD IN PARSER NII");
    c.cb = e;
    c.fb = Sc();
    bd(c.cb, c.fb);
    f = Rc(0, 0, 0, 1);
    d = Qc();
    dd(e, f, d);
    g = Rc(1, 1, 1, 1);
    f = Qc();
    dd(e, g, f);
    g = [c.Zb[1], c.Zb[2], c.Zb[3]];
    e = Ue(e, g);
    c.Bc = [f[0] - d[0], f[1] - d[1], f[2] - d[2]];
    c.zc = [e[1] - e[0] + 1, e[3] - e[2] + 1, e[5] - e[4] + 1];
    c.Ac = [e[0], e[2], e[4]];
    b.ca = g;
    b.Gb(c);
    b.ib = af(this, b);
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
eg.prototype.vc = function (a) {
    this.J = a;
    a = {
        ek: 0,
        oi: t,
        pi: t,
        xi: 0,
        ck: 0,
        Xj: 0,
        ti: t,
        Zb: t,
        Vi: 0,
        Wi: 0,
        Xi: 0,
        Ti: 0,
        of: 0,
        ii: 0,
        jk: 0,
        qa: t,
        Gh: 0,
        bk: 0,
        ak: 0,
        ik: 0,
        gk: t,
        uk: t,
        ji: 0,
        ki: 0,
        hk: 0,
        ok: 0,
        Gi: 0,
        Hi: 0,
        ri: t,
        gi: t,
        Mf: 0,
        wh: 0,
        rh: 0,
        sh: 0,
        th: 0,
        oh: 0,
        ph: 0,
        qh: 0,
        zh: t,
        Ah: t,
        Bh: t,
        Ui: t,
        bj: t,
        data: t,
        min: Infinity,
        max: -Infinity
    };
    a.ek = Z(this, "uint");
    a.oi = Z(this, "uchar", 10);
    a.pi = Z(this, "uchar", 18);
    a.xi = Z(this, "uint");
    a.ck = Z(this, "ushort");
    a.Xj = Z(this, "uchar");
    a.ti = Z(this, "uchar");
    a.Zb = Z(this, "ushort", 8);
    a.Vi = Z(this, "float");
    a.Wi = Z(this, "float");
    a.Xi = Z(this, "float");
    a.Ti = Z(this, "ushort");
    a.of = Z(this, "ushort");
    a.ii = Z(this, "ushort");
    a.jk = Z(this, "ushort");
    a.qa = Z(this, "float", 8);
    a.Gh = Z(this, "float");
    a.bk = Z(this, "float");
    a.ak = Z(this, "float");
    a.ik = Z(this, "ushort");
    a.gk = Z(this, "uchar");
    a.uk = Z(this, "uchar");
    a.ji = Z(this, "float");
    a.ki = Z(this, "float");
    a.hk = Z(this, "float");
    a.ok = Z(this, "float");
    a.Gi = Z(this, "uint", 1);
    a.Hi = Z(this, "uint", 1);
    a.ri = Z(this, "uchar", 80);
    a.gi = Z(this, "uchar", 24);
    a.Mf = Z(this, "ushort");
    a.wh = Z(this, "ushort");
    a.rh = Z(this, "float");
    a.sh =
        Z(this, "float");
    a.th = Z(this, "float");
    a.oh = Z(this, "float");
    a.ph = Z(this, "float");
    a.qh = Z(this, "float");
    a.zh = Z(this, "float", 4);
    a.Ah = Z(this, "float", 4);
    a.Bh = Z(this, "float", 4);
    a.Ui = Z(this, "uchar", 16);
    a.bj = Z(this, "uchar", 4);
    this.C = parseInt(a.Gh, 10);
    var b = a.Zb[1] * a.Zb[2] * a.Zb[3];
    switch (a.of) {
        case 2:
            a.data = Z(this, "uchar", b);
            break;
        case 4:
            a.data = Z(this, "sshort", b);
            break;
        case 8:
            a.data = Z(this, "sint", b);
            break;
        case 16:
            a.data = Z(this, "float", b);
            break;
        case 32:
            a.data = Z(this, "complex", b);
            break;
        case 64:
            a.data = Z(this, "double",
                b);
            break;
        case 256:
            a.data = Z(this, "schar", b);
            break;
        case 512:
            a.data = Z(this, "ushort", b);
            break;
        case 768:
            a.data = Z(this, "uint", b);
            break;
        default:
            m(Error("Unsupported NII data type: " + a.of))
    }
    b = Se(a.data);
    a.min = b[0];
    a.max = b[1];
    return a
};
A("X.parserNII", eg);
A("X.parserNII.prototype.parse", eg.prototype.parse);

function fg() {
    Y.call(this);
    this.f = "parserTRK"
}

C(fg, Y);
fg.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    var e = b.h, d = b.n, f = b.oa;
    this.J = c;
    Z(this, "uchar", 6);
    Z(this, "ushort", 3);
    var g = Z(this, "float", 3);
    Z(this, "float", 3);
    var h = Z(this, "ushort");
    Z(this, "uchar", 200);
    Z(this, "ushort");
    Z(this, "uchar", 200);
    c = Z(this, "float", 16);
    Z(this, "uchar", 444);
    Z(this, "uchar", 4);
    Z(this, "uchar", 4);
    Z(this, "float", 6);
    Z(this, "uchar", 2);
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    Z(this, "uchar");
    var l = Z(this, "uint");
    Z(this, "uint");
    var j = Z(this,
        "uint"), k = 0 === l ? Infinity : l, n = [], s = [], l = Infinity, r = -Infinity, y = t, z = t, F = t, G = t,
        d = e = t, I = Z(this, "uint", (this.J.byteLength - 1E3) / 4);
    this.C = j;
    for (var B = Z(this, "float", (this.J.byteLength - 1E3) / 4), E = 0, j = f = 0; j < k; j++) {
        if ("undefined" === typeof I[E]) {
            k = j;
            break
        }
        for (var J = I[E], O = new V(3 * J), R = 0, P = 0; P < J; P++) {
            var U = B[E + 3 * P + P * h + 1], ba = B[E + 3 * P + P * h + 2], ca = B[E + 3 * P + P * h + 3],
                U = U / g[0], ba = ba / g[1], ca = ca / g[2];
            O.add(U, ba, ca);
            if (0 < P) var K = O.get(P - 1),
                R = R + Math.sqrt(Math.pow(U - K[0], 2) + Math.pow(ba - K[1], 2) + Math.pow(ca - K[2], 2));
            P < J - 1 && (f +=
                6)
        }
        E += 3 * J + J * h + 1;
        P = O.mb;
        J = O.jb;
        U = O.nb;
        ba = O.kb;
        ca = O.ob;
        K = O.lb;
        if (!y || P < y) y = P;
        if (!z || J > z) z = J;
        if (!F || U < F) F = U;
        if (!G || ba > G) G = ba;
        if (!e || ca < e) e = ca;
        if (!d || K > d) d = K;
        n.push(O);
        s.push(R)
    }
    g = (y + z) / 2;
    h = (F + G) / 2;
    G = (e + d) / 2;
    F = new Float32Array(f);
    b.h = e = new V(f);
    b.n = d = new V(f);
    b.oa = f = new V(f);
    for (j = y = 0; j < k; j++) {
        z = n[j];
        I = z.count;
        R = s[j];
        l = Math.min(l, R);
        r = Math.max(r, R);
        for (P = 0; P < I - 1; P++) {
            E = z.get(P);
            B = z.get(P + 1);
            e.add(E[0], E[1], E[2]);
            e.add(B[0], B[1], B[2]);
            var O = E[0] - g, J = E[1] - h, U = E[2] - G, ba = Math.sqrt(O * O + J * J + U * U), ca = B[0] - g,
                K = B[1] - h, na = B[2] - G, H = Math.sqrt(ca * ca + K * K + na * na);
            d.add(O / ba, J / ba, U / ba);
            d.add(ca / H, K / H, na / H);
            B = [Math.abs(B[0] - E[0]), Math.abs(B[1] - E[1]), Math.abs(B[2] - E[2])];
            E = Math.sqrt(B[0] * B[0] + B[1] * B[1] + B[2] * B[2]);
            B[0] /= E;
            B[1] /= E;
            B[2] /= E;
            f.add(B[0], B[1], B[2]);
            f.add(B[0], B[1], B[2]);
            F[y++] = R;
            F[y++] = R;
            F[y++] = R;
            F[y++] = R;
            F[y++] = R;
            F[y++] = R
        }
    }
    b.Ha = "LINES";
    k = new ld;
    k.Oa = l;
    k.ia = r;
    k.U = l;
    k.W = r;
    k.cd = F;
    k.tg = u;
    k.j = q;
    b.F = k;
    l = u;
    for (j = 0; 16 > j; j++) if (0 != c[j]) {
        l = q;
        break
    }
    l == u && (c[0] = c[5] = c[10] = c[15] = 1);
    D.Ca(this.f + ".parse");
    D.g.Vf(c,
        b.ja.Q);
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserTRK", fg);
A("X.parserTRK.prototype.parse", fg.prototype.parse);

function gg() {
    Y.call(this);
    this.f = "parserOBJ"
}

C(gg, Y);
gg.prototype.parse = function (a, b, c) {
    D.Ia(this.f + ".parse");
    this.J = c;
    c = c.byteLength;
    var e = Z(this, "uchar", c), d = [];
    b.h = new V(c);
    b.n = new V(c);
    var f = b.h, g = b.n, h = 0, l;
    for (l = 0; l < c; ++l) if (10 == e[l]) {
        var j = Te(e, h, l).replace(/\s{2,}/g, " ").split(" ");
        if ("v" == j[0]) d.push([parseFloat(j[1]), parseFloat(j[2]), parseFloat(j[3])]); else if ("f" == j[0]) {
            var k = d[parseInt(j[1], 10) - 1], h = d[parseInt(j[2], 10) - 1], j = d[parseInt(j[3], 10) - 1];
            f.add(k[0], k[1], k[2]);
            f.add(h[0], h[1], h[2]);
            f.add(j[0], j[1], j[2]);
            k = new S(k[0], k[1], k[2]);
            j =
                new S(j[0], j[1], j[2]);
            h = Jc((new S(h[0], h[1], h[2])).wa(k), j.wa(k));
            h.normalize();
            g.add(h.x, h.y, h.d);
            g.add(h.x, h.y, h.d);
            g.add(h.x, h.y, h.d)
        }
        h = l + 1
    }
    D.Ca(this.f + ".parse");
    c = new md;
    c.D = b;
    c.v = a;
    this.dispatchEvent(c)
};
A("X.parserOBJ", gg);
A("X.parserOBJ.prototype.parse", gg.prototype.parse);

function hg() {
    N.call(this);
    this.f = "loader";
    this.Kc = new Ac;
    this.rd = 0
}

C(hg, N);

function ig(a, b) {
    a.rd += b / a.Kc.rf() / 3;
    a.rd = Math.min(1, a.rd);
    var c = new Pd;
    c.yd = a.rd;
    a.dispatchEvent(c)
}

function jg(a) {
    a = a.r.$d;
    var b = a.split(".").pop().toUpperCase();
    b == a.toUpperCase() && (b = "");
    b in kg || m(Error("The " + b + " file format is not supported."));
    return [a, b, kg[b][0], kg[b][1], kg[b][2]]
}

hg.prototype.load = function (a, b) {
    (!a || !b) && m(Error("No container or object to load."));
    if (!Dc(this.Kc.ga, a.pa) || this.Kc.get(a.pa)) {
        this.Kc.set(a.pa, u);
        var c = jg(a)[0];
        if (a.$a != t) this.parse(t, a, b); else {
            var e = new XMLHttpRequest;
            M(e, "abort", this.Hg.bind(this, e, a, b));
            M(e, "error", this.Hg.bind(this, e, a, b));
            M(e, "load", this.parse.bind(this, e, a, b));
            e.open("GET", c, q);
            e.responseType = "arraybuffer";
            e.send(t)
        }
    }
};
hg.prototype.parse = function (a, b, c) {
    ig(this, 1);
    setTimeout(function () {
        var e = jg(b), d = e[3], e = new e[2];
        ac(e, zd, this.complete.bind(this));
        var f = b.$a;
        f == t && (f = a.response, b.$a = f);
        e.parse(b, c, f, d)
    }.bind(this), 100)
};
hg.prototype.complete = function (a) {
    ig(this, 1);
    setTimeout(function () {
        var b = a.v, c = a.D;
        b.r.j = u;
        b.j = q;
        c.q();
        this.Kc.set(b.pa, q)
    }.bind(this), 100)
};
hg.prototype.Hg = function (a, b, c) {
    m(Error("Loading failed: ", b, c))
};
var kg = {
    OBJ: [gg, t],
    OFF: [kf, t],
    STL: [dg, t],
    VTK: [nf, t],
    TRK: [fg, t],
    MRC: [bg, t],
    ST: [bg, t],
    FSM: [pf, t],
    INFLATED: [pf, t],
    SMOOTHWM: [pf, t],
    SPHERE: [pf, t],
    PIAL: [pf, t],
    ORIG: [pf, t],
    NRRD: [cg, t],
    NII: [eg, t],
    GZ: [eg, t],
    DCM: [lf, t],
    DICOM: [lf, t],
    "": [lf, t],
    CRV: [Yf, t],
    LABEL: [Xf, t],
    MGH: [Wf, u],
    MGZ: [Wf, q],
    RAW: [$f, u],
    RZ: [$f, q],
    TXT: [ag, t],
    LUT: [ag, t],
    PNG: [bf, "png"],
    JPG: [bf, "jpeg"],
    JPEG: [bf, "jpeg"],
    GIF: [bf, "gif"]
};

function lg(a) {
    function b(a, b, e) {
        b = 2 * b * Math.PI;
        b = za(Ba(l, Math.cos(b)), Ba(j, Math.sin(b)));
        a = za(za(c, Ba(d, a)), Ba(b, f));
        e = za(Ba(b, 1 - Math.abs(e)), Ba(g, e));
        return new lc(a, e)
    }

    this.Z = [];
    a = a || {};
    var c = new ya(a.start || [0, -1, 0]), e = new ya(a.end || [0, 1, 0]), d = Ca(e, c), f = a.zb || 1;
    a = a.ra || 16;
    for (var g = Da(d), h = 0.5 < Math.abs(g.y()), l = Da((new ya(h, !h, 0)).sc(g)), j = Da(l.sc(g)), h = new lc(c, Ea(g)), e = new lc(e, Da(g)), k = [], n = 0; n < a; n++) {
        var s = n / a, r = (n + 1) / a;
        k.push(new nc([h, b(0, s, -1), b(0, r, -1)]));
        k.push(new nc([b(0, r, 0), b(0, s,
            0), b(1, s, 0), b(1, r, 0)]));
        k.push(new nc([e, b(1, r, 1), b(1, s, 1)]))
    }
    return vc(k)
}

C(lg, uc);

function mg() {
    W.call(this);
    this.f = "cylinder";
    this.$e = [-10, -10, -10];
    this.Je = [10, 10, 10];
    this.jc = 10;
    this.bb = 32;
    Ga(this, new pd)
}

C(mg, W);
mg.prototype.__defineGetter__("start", v("$e"));
mg.prototype.__defineSetter__("start", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid start"));
    this.$e = a
});
mg.prototype.__defineGetter__("end", v("Je"));
mg.prototype.__defineSetter__("end", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid end"));
    this.Je = a
});
mg.prototype.__defineGetter__("radius", v("jc"));
mg.prototype.__defineSetter__("radius", function (a) {
    x(a) || m(Error("Invalid radius."));
    this.jc = a
});
mg.prototype.q = function () {
    rd(this, new lg({start: this.$e, end: this.Je, zb: this.jc, ra: this.bb}));
    mg.u.q.call(this)
};
A("X.cylinder", mg);
A("X.cylinder.prototype.modified", mg.prototype.q);

function ng(a) {
    function b(a, b) {
        a *= 2 * Math.PI;
        b *= Math.PI;
        var d = new ya(Math.cos(a) * Math.sin(b), Math.cos(b), Math.sin(a) * Math.sin(b));
        g.push(new lc(za(c, Ba(d, e)), d))
    }

    this.Z = [];
    a = a || {};
    var c = new ya(a.kf || [0, 0, 0]), e = a.zb || 1, d = a.ra || 16;
    a = a.kk || 8;
    for (var f = [], g = [], h = 0; h < d; h++) for (var l = 0; l < a; l++) g = [], b(h / d, l / a), 0 < l && b((h + 1) / d, l / a), l < a - 1 && b((h + 1) / d, (l + 1) / a), b(h / d, (l + 1) / a), f.push(new nc(g));
    return vc(f)
}

C(ng, uc);

function og() {
    W.call(this);
    this.f = "sphere";
    this.z = [0, 0, 0];
    this.jc = 5;
    this.bb = 32;
    this.Zh = 16;
    Ga(this, new pd)
}

C(og, W);
og.prototype.__defineGetter__("center", v("z"));
og.prototype.__defineSetter__("center", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid center"));
    this.z = a
});
og.prototype.__defineGetter__("radius", v("jc"));
og.prototype.__defineSetter__("radius", function (a) {
    x(a) || m(Error("Invalid radius."));
    this.jc = a
});
og.prototype.q = function () {
    rd(this, new ng({kf: this.z, zb: this.jc, ra: this.bb, kk: this.Zh}));
    og.u.q.call(this)
};
A("X.sphere", og);
A("X.sphere.prototype.modified", og.prototype.q);

function hf(a) {
    Q.call(this);
    this.f = "labelmap";
    this.yb = a;
    this.Ze = new Float32Array([-255, -255, -255, -255])
}

C(hf, Q);
hf.prototype.q = function () {
    var a = new md;
    a.D = this;
    this.dispatchEvent(a);
    this.yb.q()
};
hf.prototype.__defineSetter__("showOnly", function (a) {
    var b = [-1, -1, -1, -1];
    a != t && (ka(a) && 4 == a.length ? b = a : (this.xa || m(Error("No colortable assigned.")), b = this.xa.Ja.get(a).slice(1, 5)));
    this.Ze = new Float32Array([Math.floor(255 * b[0]), Math.floor(255 * b[1]), Math.floor(255 * b[2]), Math.floor(255 * b[3])])
});
A("X.labelmap", hf);

function pg(a) {
    this.Z = [];
    a = a || {};
    var b = new ya(a.kf || [0, 0, 0]), c = !a.zb ? [1, 1, 1] : a.zb.length ? a.zb : [a.zb, a.zb, a.zb];
    return vc([[[0, 4, 6, 2], [-1, 0, 0]], [[1, 3, 7, 5], [1, 0, 0]], [[0, 1, 5, 4], [0, -1, 0]], [[2, 6, 7, 3], [0, 1, 0]], [[0, 2, 3, 1], [0, 0, -1]], [[4, 5, 7, 6], [0, 0, 1]]].map(function (a) {
        return new nc(a[0].map(function (d) {
            d = new ya(b.x() + c[0] * (2 * !!(d & 1) - 1), b.y() + c[1] * (2 * !!(d & 2) - 1), b.d() + c[2] * (2 * !!(d & 4) - 1));
            return new lc(d, new ya(a[1]))
        }))
    }))
}

C(pg, uc);

function qg() {
    W.call(this);
    this.f = "cube";
    this.z = [0, 0, 0];
    this.Oe = this.Ne = this.Me = 20;
    this.nc = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
    Ga(this, new pd)
}

C(qg, W);
qg.prototype.__defineGetter__("center", v("z"));
qg.prototype.__defineSetter__("center", function (a) {
    (a == t || !ka(a) || 3 != a.length) && m(Error("Invalid center"));
    this.z = a
});
qg.prototype.__defineGetter__("lengthX", v("Me"));
qg.prototype.__defineSetter__("lengthX", function (a) {
    x(a) || m(Error("Invalid lengthX."));
    this.Me = a
});
qg.prototype.__defineGetter__("lengthY", v("Ne"));
qg.prototype.__defineSetter__("lengthY", function (a) {
    x(a) || m(Error("Invalid lengthY."));
    this.Ne = a
});
qg.prototype.__defineGetter__("lengthZ", v("Oe"));
qg.prototype.__defineSetter__("lengthZ", function (a) {
    x(a) || m(Error("Invalid lengthZ."));
    this.Oe = a
});
qg.prototype.q = function () {
    rd(this, new pg({kf: this.z, zb: [this.Me / 2, this.Ne / 2, this.Oe / 2]}));
    qg.u.q.call(this)
};
A("X.cube", qg);
A("X.cube.prototype.modified", qg.prototype.q);

function Me(a) {
    Ke.call(this, a);
    this.f = "interactor3D";
    this.ll = u
}

C(Me, Ke);
Me.prototype.Id = function (a) {
    Me.u.Id.call(this, a);
    var b = new Kd;
    a.Wc == t && (a.Wc = 0);
    b.wb = 0 > a.Wc;
    b.hb = q;
    this.dispatchEvent(b)
};

function rg(a) {
    N.call(this);
    this.f = "array";
    this.I = [];
    this.bg = a
}

C(rg, N);

function sg(a, b, c) {
    for (var e = 0; 4 > e; e++) if (a[e + 0] !== b[e + c]) return u;
    return q
}

rg.prototype.add = function (a) {
    this.I.push(a);
    return q
};
rg.prototype.remove = function (a) {
    a = this.I.indexOf(a);
    -1 < a && this.I.splice(a, 1);
    return q
};
rg.prototype.clear = function () {
    this.I.length = 0
};

function tg(a, b, c) {
    var e = c - b;
    if (!(2 > e)) {
        e = b + Math.floor(e / 2);
        tg(a, b, e);
        for (tg(a, e, c); b < e; ++b) if (0 < a.bg(a.I[b], a.I[e])) {
            var d = a.I[b];
            a.I[b] = a.I[e];
            for (var f = a, g = e, h = c; g + 1 < h && 0 > f.bg(f.I[g + 1], d);) {
                var l = f, j = g + 1, k = l.I[g];
                l.I[g] = l.I[j];
                l.I[j] = k;
                ++g
            }
            f.I[g] = d
        }
    }
}

rg.prototype.sort = function () {
    tg(this, 0, this.I.length)
};

function ug(a) {
    Qb.call(this);
    this.Hb = a;
    this.S = []
}

C(ug, Qb);
var vg = [];

function wg(a, b, c, e, d) {
    ka(c) || (vg[0] = c, c = vg);
    for (var f = 0; f < c.length; f++) {
        var g = M(b, c[f], e || a, d || u, a.Hb || a);
        a.S.push(g)
    }
}

ug.prototype.Nf = function () {
    Lb(this.S, cc);
    this.S.length = 0
};
ug.prototype.handleEvent = function () {
    m(Error("EventHandler.handleEvent not implemented"))
};

function xg() {
}

xg.Jg = function () {
    return xg.Rg ? xg.Rg : xg.Rg = new xg
};
xg.prototype.lj = 0;
xg.Jg();

function yg(a) {
    kc.call(this);
    this.$b = a || $d();
    this.Zj = zg
}

C(yg, kc);
yg.prototype.Pi = xg.Jg();
var zg = t;
w = yg.prototype;
w.Qg = t;
w.Yc = u;
w.H = t;
w.Zj = t;
w.Jd = t;
w.Ad = t;
w.lf = t;
w.t = v("H");
w.Pf = function (a) {
    this.Jd && this.Jd != a && m(Error("Method not supported"));
    yg.u.Pf.call(this, a)
};
w.me = v("$b");
w.Vc = function () {
    this.H = this.$b.createElement("div")
};
w.cc = function (a) {
    this.dc(a)
};
w.dc = function (a, b) {
    this.Yc && m(Error("Component already rendered"));
    this.H || this.Vc();
    a ? a.insertBefore(this.H, b || t) : this.$b.ka.body.appendChild(this.H);
    (!this.Jd || this.Jd.Yc) && this.je()
};
w.je = function () {
    function a(a) {
        !a.Yc && a.t() && a.je()
    }

    this.Yc = q;
    this.Ad && Lb(this.Ad, a, p)
};
w.ke = function () {
    function a(a) {
        a.Yc && a.ke()
    }

    this.Ad && Lb(this.Ad, a, p);
    this.Ii && this.Ii.Nf();
    this.Yc = u
};
w.removeChild = function (a, b) {
    if (a) {
        var c = ma(a) ? a : a.Qg || (a.Qg = ":" + (a.Pi.lj++).toString(36)), e;
        this.lf && c ? (e = this.lf, e = (c in e ? e[c] : p) || t) : e = t;
        a = e;
        c && a && (e = this.lf, c in e && delete e[c], Ob(this.Ad, a), b && (a.ke(), a.H && he(a.H)), c = a, c == t && m(Error("Unable to set parent component")), c.Jd = t, yg.u.Pf.call(c, t))
    }
    a || m(Error("Child is not in parent component"));
    return a
};

function Bg() {
    kc.call(this)
}

C(Bg, kc);
w = Bg.prototype;
w.Xf = 0;
w.Ed = 0;
w.yf = 100;
w.Gg = 0;
w.Tf = 1;
w.Yi = u;
w.ij = u;
w.Md = function (a) {
    a = Cg(this, a);
    this.Xf != a && (this.Xf = a + this.Gg > this.yf ? this.yf - this.Gg : a < this.Ed ? this.Ed : a, !this.Yi && !this.ij && this.dispatchEvent("change"))
};
w.pe = function () {
    return Cg(this, this.Xf)
};
w.oe = function () {
    return Cg(this, this.Ed)
};
w.ne = function () {
    return Cg(this, this.yf)
};

function Cg(a, b) {
    return a.Tf == t ? b : a.Ed + Math.round((b - a.Ed) / a.Tf) * a.Tf
};

function Dg(a) {
    yg.call(this, a);
    this.Kd = new Bg;
    M(this.Kd, "change", this.Ji, u, this)
}

C(Dg, yg);
var Eg = {vertical: "progress-bar-vertical", horizontal: "progress-bar-horizontal"};
w = Dg.prototype;
w.Vc = function () {
    this.Ab = this.me().Vc("div", "progress-bar-thumb");
    var a = Eg[this.lh];
    this.H = this.me().Vc("div", a, this.Ab);
    Fg(this);
    a = this.oe();
    this.t().setAttribute("aria-valuemin", a);
    a = this.ne();
    this.t().setAttribute("aria-valuemax", a)
};
w.je = function () {
    Dg.u.je.call(this);
    L && 7 > wb && M(this.t(), "resize", this.Ee, u, this);
    this.Ee();
    var a = this.t();
    a.setAttribute("role", "progressbar");
    a.setAttribute("aria-live", "polite")
};
w.ke = function () {
    Dg.u.ke.call(this);
    L && 7 > wb && bc(this.t(), "resize", this.Ee, u, this)
};
w.pe = function () {
    return this.Kd.pe()
};
w.Md = function (a) {
    this.Kd.Md(a);
    this.t() && Fg(this)
};

function Fg(a) {
    var b = a.pe();
    a.t().setAttribute("aria-valuenow", b)
}

w.oe = function () {
    return this.Kd.oe()
};
w.ne = function () {
    return this.Kd.ne()
};
w.lh = "horizontal";
w.Ji = function () {
    this.Ee();
    this.dispatchEvent("change")
};
w.Ee = function () {
    if (this.Ab) {
        var a = this.oe(), b = this.ne(), a = (this.pe() - a) / (b - a), b = Math.round(100 * a);
        "vertical" == this.lh ? L && 7 > wb ? (this.Ab.style.top = 0, this.Ab.style.height = "100%", b = this.Ab.offsetHeight, a = Math.round(a * b), this.Ab.style.top = b - a + "px", this.Ab.style.height = a + "px") : (this.Ab.style.top = 100 - b + "%", this.Ab.style.height = b + "%") : this.Ab.style.width = b + "%"
    }
};

function Gg(a, b) {
    a == t && m(Error("No valid parent element."));
    b == t && m(Error("Invalid initial value."));
    Dg.call(this);
    this.f = "progressbar";
    this.ab = a;
    this.Te = "";
    this.Rd = this.Fb = t;
    this.fc = [];
    var c;
    c = ".progress-bar-horizontal {\n  position: relative;\n  border: 1px solid #949dad;\n";
    c += "  background: white;\n";
    c += "  padding: 1px;\n";
    c += "  overflow: hidden;\n";
    c += "  margin: 2px;\n";
    c += "  width: 100px;\n";
    c += "  height: 5px;\n";
    c += "}";
    var e;
    e = ".progress-bar-thumb {\n  position: relative;\n  background: #F62217;\n";
    e += "  overflow: hidden;\n";
    e += "  width: 0%;\n";
    e += "  height: 100%;\n";
    e += "}";
    var d;
    d = ".progress-bar-thumb-done {\n  background: #57E964;\n}";
    this.fc = [c, e, d];
    this.Md(b);
    this.tf()
}

C(Gg, Dg);
Gg.prototype.tf = function () {
    var a = pe(this.ab, "position");
    if ("static" == a || "" == a) this.Te = this.ab.style.position, this.ab.style.position = "relative";
    var a = document.getElementsByTagName("head")[0], b = ee("style");
    b.type = "text/css";
    b.media = "screen";
    var c = document.createTextNode(String(this.fc[0])), e = document.createTextNode(String(this.fc[1])),
        d = document.createTextNode(String(this.fc[2]));
    a.appendChild(b);
    b.appendChild(c);
    b.appendChild(e);
    b.appendChild(d);
    this.Fb = b;
    this.cc(this.ab);
    a = this.t();
    a.style.position =
        "absolute";
    a.style.top = (this.ab.clientHeight - 5) / 2 + "px";
    a.style.left = (this.ab.clientWidth - 100) / 2 + "px";
    a.classList.add("xtk-progress-bar")
};

function Hg(a) {
    var b = a.t().style.top, c = a.t().style.left;
    he(a.t());
    var e = new Gg(a.ab, 100), d = e.t();
    d.style.position = "absolute";
    d.style.top = b;
    d.style.left = c;
    d.classList.add("xtk-progress-bar");
    (d.firstElementChild != p ? d.firstElementChild : ie(d.firstChild)).classList.add("progress-bar-thumb-done");
    a.Rd = e
}

Gg.prototype.Dd = function () {
    this.Fb && he(this.Fb);
    this.t() && he(this.t());
    this.Rd && he(this.Rd.t());
    this.Rd = this.Fb = t;
    this.Te && (this.ab.style.position = this.Te)
};

function Ig(a, b, c) {
    oa(a) ? c && (a = va(a, c)) : a && "function" == typeof a.handleEvent ? a = va(a.handleEvent, a) : m(Error("Invalid listener argument"));
    return 2147483647 < b ? -1 : fa.setTimeout(a, b || 0)
};

function Jg() {
    N.call(this);
    this.f = "renderer";
    this.v = window.document.body;
    this.K = this.v.clientWidth;
    this.A = this.v.clientHeight;
    this.T = this.N = this.sa = t;
    this.qb = new rg(od);
    this.Ga = [];
    this.aa = t;
    this.Zd = this.fd = this.Xd = u;
    this.a = this.Vb = this.Ka = t;
    this.R = {PROGRESSBAR_ENABLED: q, INTERMEDIATE_RENDERING: u, SLICENAVIGATORS: q};
    this.Ge = -1;
    window.console.log("XTK release 10 -- 2014-12-05 12:32:47 -- http://www.goXTK.com -- @goXTK")
}

C(Jg, N);
w = Jg.prototype;
w.Df = function () {
    window.cancelAnimationFrame(this.Ge);
    this.R.PROGRESSBAR_ENABLED && (this.Vb = new Gg(this.v, 3))
};
w.Ef = function () {
    this.R.PROGRESSBAR_ENABLED && this.Vb && (Hg(this.Vb), this.Od = Ig(function () {
        this.Od = t;
        this.Vb && (this.Vb.Dd(), this.Vb = t);
        this.fd = this.Zd = q;
        this.cc()
    }.bind(this), 700))
};
w.Ff = function (a) {
    this.Vb && this.Vb.Md(100 * a.yd)
};
w.Cj = function (a) {
    this.Ka && this.Ka.Md(100 * a.yd)
};
w.sj = function (a) {
    a != t && a instanceof md && a.D && this.vb(a.D)
};
w.Dj = function (a) {
    a != t && a instanceof nd && a.D && this.remove(a.D)
};
w.Hf = function (a) {
    (a == t || !(a instanceof Md)) && m(Error("Invalid hover event."))
};
w.ue = function () {
    var a = ce(this.v);
    this.K = a.clientWidth;
    this.A = a.clientHeight;
    a = ce(this.sa);
    a.width = this.K;
    a.height = this.A;
    "renderer3D" == this.f && (this.a.viewport(0, 0, this.K, this.A), this.N.Ue = D.g.xf(D.g.Cd(), this.N.dg, this.sa.width / this.sa.height, 1, 1E4))
};
w.If = function (a) {
    (a == t || !(a instanceof Ld)) && m(Error("Invalid scroll event."))
};
Jg.prototype.__defineGetter__("config", v("R"));
Jg.prototype.__defineGetter__("interactor", v("T"));
Jg.prototype.__defineGetter__("camera", v("N"));
Jg.prototype.__defineGetter__("loadingCompleted", v("fd"));
Jg.prototype.__defineGetter__("container", v("v"));
Jg.prototype.__defineSetter__("container", function (a) {
    a == t && m(Error("An ID to a valid container (<div>..) is required."));
    var b = a;
    ma(b) && (b = ce(a));
    pa(b) && 1 == b.nodeType || m(Error("Could not find the given container."));
    this.v = b
});
w = Jg.prototype;
w.Ld = function () {
    this.N.reset()
};
w.Ba = function (a) {
    var b = ee("canvas");
    this.v.appendChild(b);
    this.K = this.v.clientWidth;
    this.A = this.v.clientHeight;
    b.width = this.K;
    b.height = this.A;
    try {
        var c = b.getContext(a);
        c || m(Error())
    } catch (e) {
        var d = "Sorry, " + a + ' context is <strong>not supported</strong> on this machine! See <a href="http://crash.goXTK.com" target="_blank">http://crash.goXTK.com</a> for requirements..';
        this.v.innerHTML = '<h3 style="color:red;font-family:sans-serif;">Oooops..</h3><p style="color:red;font-family:sans-serif;">' + d + "</p>";
        m(Error(d))
    }
    this.aa = new hg;
    M(this.aa, Bd, this.Cj.bind(this));
    this.sa = b;
    this.a = c;
    b = new Me(this.sa);
    "2d" == a && (b = new Oe(this.sa));
    b.Ba();
    M(b, xd, this.Ld.bind(this));
    M(b, Cd, this.Hf.bind(this));
    M(b, wd, this.If.bind(this));
    this.T = b;
    b = new Qe(this.K, this.A);
    "2d" == a && (b = new cf(this.K, this.A));
    b.observe(this.T);
    this.N = b;
    M(window, "resize", this.ue, u, this)
};
w.add = function (a) {
    (a instanceof qg || a instanceof og || a instanceof mg) && a.q();
    this.Ga.push(a);
    this.vb(a)
};
w.remove = function (a) {
    (!this.sa || !this.a) && m(Error("The renderer was not initialized properly."));
    if (a != t) {
        ec(a);
        var b = this.Ga.length, c;
        for (c = 0; c < b; c++) if (this.Ga[c].pa == a.pa) return this.Ga[c] = t, this.Ga.splice(c, 1), q
    }
    return u
};
w.vb = function (a) {
    (!this.sa || !this.a) && m(Error("The renderer was not initialized properly."));
    a != t && (fc(a, zd) || M(a, zd, this.sj.bind(this)), fc(a, Ad) || M(a, Ad, this.Dj.bind(this)), fc(a, Ed) || M(a, Ed, this.Df.bind(this)), fc(a, Gd) || M(a, Gd, this.Ff.bind(this)), fc(a, Fd) || M(a, Fd, this.Ef.bind(this)))
};
w.get = function (a) {
    a == t && m(Error("Invalid object id."));
    for (var b = this.qb.I, c = b.length, e = 0, e = 0; e < c; e++) if (b[e].pa == a) return b[e];
    return t
};
w.cc = function () {
    (!this.sa || !this.a) && m(Error("The renderer was not initialized properly."));
    if (this.sg == t) {
        if (Cc(this.aa.Kc)) {
            if (this.R.PROGRESSBAR_ENABLED && !this.Ka && (this.Ka = new Gg(this.v, 3)), this.Zd = this.fd = u, this.sg = Ig(function () {
                this.sg = t;
                this.cc()
            }.bind(this), 100), !this.R.INTERMEDIATE_RENDERING) return
        } else if (!this.fd && !this.Zd && (this.Zd = q, eval("this.onShowtime()"), this.fd = q), this.Ka) {
            this.R.PROGRESSBAR_ENABLED && (this.Ka && !this.Od) && (Hg(this.Ka), this.Od = Ig(function () {
                this.Od = t;
                this.Ka && (this.Ka.Dd(),
                    this.Ka = t);
                this.cc()
            }.bind(this), 700));
            return
        }
        this.Ge = window.requestAnimationFrame(this.cc.bind(this));
        eval("this.onRender()");
        this.dc(u, q);
        eval("this.afterRender()")
    }
};
w.kh = aa();
w.ih = aa();
w.xg = aa();
w.dc = aa();
w.Ta = function () {
    ec(this);
    bc(window, "resize", this.ue, u, this);
    window.cancelAnimationFrame(this.Ge);
    this.aa && (delete this.aa, this.aa = t);
    this.Ka && (this.Ka.Dd(), delete this.Ka, this.Ka = t);
    this.qb.clear();
    delete this.qb;
    this.Ga.length = 0;
    delete this.Ga;
    delete this.aa;
    this.aa = t;
    delete this.N;
    this.N = t;
    delete this.T;
    this.T = t;
    delete this.a;
    this.a = t;
    he(this.sa);
    delete this.sa;
    this.sa = t
};

function Kg(a, b, c, e, d, f, g, h) {
    var l, j;
    if (l = c.offsetParent) {
        var k = "HTML" == l.tagName || "BODY" == l.tagName;
        if (!k || "static" != qe(l, "position")) j = ve(l), k || (k = (k = we(l)) && lb ? -l.scrollLeft : k && (!L || !Db("8")) && "visible" != qe(l, "overflowX") ? l.scrollWidth - l.clientWidth - l.scrollLeft : l.scrollLeft, j = Zd(j, new Yd(k, l.scrollTop)))
    }
    l = j || new Yd;
    j = ve(a);
    k = Ae(a);
    j = new ne(j.x, j.y, k.width, k.height);
    (k = ue(a)) && j.Sg(new ne(k.left, k.top, k.right - k.left, k.bottom - k.top));
    var k = $d(a), n = $d(c);
    if (k.ka != n.ka) {
        var s = k.ka.body, n = n.ka.parentWindow ||
            n.ka.defaultView, r = new Yd(0, 0), y = be(s) ? be(s).parentWindow || be(s).defaultView : window, z = s;
        do {
            var F = y == n ? ve(z) : xe(z);
            r.x += F.x;
            r.y += F.y
        } while (y && y != n && (z = y.frameElement) && (y = y.parent));
        s = Zd(r, ve(s));
        L && !ke(k) && (s = Zd(s, le(k)));
        j.left += s.x;
        j.top += s.y
    }
    a = (b & 4 && we(a) ? b ^ 2 : b) & -5;
    b = new Yd(a & 2 ? j.left + j.width : j.left, a & 1 ? j.top + j.height : j.top);
    b = Zd(b, l);
    d && (b.x += (a & 2 ? -1 : 1) * d.x, b.y += (a & 1 ? -1 : 1) * d.y);
    var G;
    if (g && (G = ue(c))) G.top -= l.y, G.right -= l.x, G.bottom -= l.y, G.left -= l.x;
    return Lg(b, c, e, f, G, g, h)
}

function Lg(a, b, c, e, d, f, g) {
    a = a.l();
    var h = 0, l = (c & 4 && we(b) ? c ^ 2 : c) & -5;
    c = Ae(b);
    g = g ? g.l() : c.l();
    if (e || 0 != l) l & 2 ? a.x -= g.width + (e ? e.right : 0) : e && (a.x += e.left), l & 1 ? a.y -= g.height + (e ? e.bottom : 0) : e && (a.y += e.top);
    if (f) {
        if (d) {
            h = a;
            e = 0;
            if (65 == (f & 65) && (h.x < d.left || h.x >= d.right)) f &= -2;
            if (132 == (f & 132) && (h.y < d.top || h.y >= d.bottom)) f &= -5;
            h.x < d.left && f & 1 && (h.x = d.left, e |= 1);
            h.x < d.left && (h.x + g.width > d.right && f & 16) && (g.width = Math.max(g.width - (h.x + g.width - d.right), 0), e |= 4);
            h.x + g.width > d.right && f & 1 && (h.x = Math.max(d.right - g.width,
                d.left), e |= 1);
            f & 2 && (e |= (h.x < d.left ? 16 : 0) | (h.x + g.width > d.right ? 32 : 0));
            h.y < d.top && f & 4 && (h.y = d.top, e |= 2);
            h.y <= d.top && (h.y + g.height < d.bottom && f & 32) && (g.height = Math.max(g.height - (d.top - h.y), 0), h.y = 0, e |= 8);
            h.y >= d.top && (h.y + g.height > d.bottom && f & 32) && (g.height = Math.max(g.height - (h.y + g.height - d.bottom), 0), e |= 8);
            h.y + g.height > d.bottom && f & 4 && (h.y = Math.max(d.bottom - g.height, d.top), e |= 2);
            f & 8 && (e |= (h.y < d.top ? 64 : 0) | (h.y + g.height > d.bottom ? 128 : 0));
            h = e
        } else h = 256;
        if (h & 496) return h
    }
    f = a;
    d = lb && (bb || rb) && Db("1.9");
    f instanceof
    Yd ? (a = f.x, f = f.y) : (a = f, f = p);
    b.style.left = ze(a, d);
    b.style.top = ze(f, d);
    if (!(c == g || (!c || !g ? 0 : c.width == g.width && c.height == g.height))) a = ke($d(be(b))), L && (!a || !Db("8")) ? (c = b.style, a ? (L ? (a = Ee(b, "paddingLeft"), d = Ee(b, "paddingRight"), f = Ee(b, "paddingTop"), e = Ee(b, "paddingBottom"), a = new me(f, d, e, a)) : (a = pe(b, "paddingLeft"), d = pe(b, "paddingRight"), f = pe(b, "paddingTop"), e = pe(b, "paddingBottom"), a = new me(parseFloat(f), parseFloat(d), parseFloat(e), parseFloat(a))), L ? (d = Ge(b, "borderLeft"), f = Ge(b, "borderRight"), e = Ge(b, "borderTop"),
        b = Ge(b, "borderBottom"), b = new me(e, f, b, d)) : (d = pe(b, "borderLeftWidth"), f = pe(b, "borderRightWidth"), e = pe(b, "borderTopWidth"), b = pe(b, "borderBottomWidth"), b = new me(parseFloat(e), parseFloat(f), parseFloat(b), parseFloat(d))), c.pixelWidth = g.width - b.left - a.left - a.right - b.right, c.pixelHeight = g.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = g.width, c.pixelHeight = g.height)) : (b = b.style, lb ? b.MozBoxSizing = "border-box" : mb ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(g.width, 0) + "px",
        b.height = Math.max(g.height, 0) + "px");
    return h
};

function Mg() {
}

Mg.prototype.ub = aa();

function Ng(a, b) {
    this.mf = a instanceof Yd ? a : new Yd(a, b)
}

C(Ng, Mg);
Ng.prototype.ub = function (a, b, c, e) {
    Kg(re(a), 0, a, b, this.mf, c, t, e)
};

function Og(a, b, c) {
    this.element = a;
    this.Eg = b;
    this.Sj = c
}

C(Og, Mg);
Og.prototype.ub = function (a, b, c) {
    Kg(this.element, this.Eg, a, b, p, c, this.Sj)
};

function Pg(a, b) {
    kc.call(this);
    this.Hb = new ug(this);
    this.Of(a || t);
    b && (this.Zc = b)
}

C(Pg, kc);
w = Pg.prototype;
w.H = t;
w.fi = q;
w.yg = t;
w.La = u;
w.dk = u;
w.vf = -1;
w.Vg = -1;
w.Oi = u;
w.vi = q;
w.Zc = "toggle_display";
w.t = v("H");
w.Of = function (a) {
    this.La && m(Error("Can not change this state of the popup while showing."));
    this.H = a
};

function Qg(a, b) {
    a.De && a.De.stop();
    a.qe && a.qe.stop();
    if (b) {
        if (!a.La && a.Cf()) {
            a.H || m(Error("Caller must call setElement before trying to show the popup"));
            a.ub();
            var c = be(a.H);
            a.Oi && wg(a.Hb, c, "keydown", a.qj, q);
            if (a.fi) if (wg(a.Hb, c, "mousedown", a.gh, q), L) {
                var e;
                try {
                    e = c.activeElement
                } catch (d) {
                }
                for (; e && "IFRAME" == e.nodeName;) {
                    try {
                        var f = e.contentDocument || e.contentWindow.document
                    } catch (g) {
                        break
                    }
                    c = f;
                    e = c.activeElement
                }
                wg(a.Hb, c, "mousedown", a.gh, q);
                wg(a.Hb, c, "deactivate", a.fh)
            } else wg(a.Hb, c, "blur", a.fh);
            "toggle_display" ==
            a.Zc ? (a.H.style.visibility = "visible", Ce(a.H, q)) : "move_offscreen" == a.Zc && a.ub();
            a.La = q;
            a.De ? (ac(a.De, "end", a.jh, u, a), a.De.play()) : a.jh()
        }
    } else Rg(a)
}

w.ub = ga;

function Rg(a, b) {
    if (!a.La || !a.dispatchEvent({type: "beforehide", target: b})) return u;
    a.Hb && a.Hb.Nf();
    a.La = u;
    a.Vg = xa();
    a.qe ? (ac(a.qe, "end", wa(a.Dg, b), u, a), a.qe.play()) : a.Dg(b);
    return q
}

w.Dg = function (a) {
    "toggle_display" == this.Zc ? this.dk ? Ig(this.Ng, 0, this) : this.Ng() : "move_offscreen" == this.Zc && (this.H.style.top = "-10000px");
    this.Gf(a)
};
w.Ng = function () {
    this.H.style.visibility = "hidden";
    Ce(this.H, u)
};
w.Cf = function () {
    return this.dispatchEvent("beforeshow")
};
w.jh = function () {
    this.vf = xa();
    this.Vg = -1;
    this.dispatchEvent("show")
};
w.Gf = function (a) {
    this.dispatchEvent({type: "hide", target: a})
};
w.gh = function (a) {
    a = a.target;
    !je(this.H, a) && ((!this.yg || je(this.yg, a)) && !(150 > xa() - this.vf)) && Rg(this, a)
};
w.qj = function (a) {
    27 == a.keyCode && Rg(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
w.fh = function (a) {
    if (this.vi) {
        var b = be(this.H);
        if (L || jb) {
            if (a = b.activeElement, !a || je(this.H, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > xa() - this.vf || Rg(this)
    }
};

function Sg(a, b) {
    this.Wj = 4;
    this.ve = b || p;
    Pg.call(this, a)
}

C(Sg, Pg);
Sg.prototype.ub = function () {
    if (this.ve) {
        var a = !this.La && "move_offscreen" != this.Zc, b = this.t();
        a && (b.style.visibility = "hidden", Ce(b, q));
        this.ve.ub(b, this.Wj, this.Il);
        a && Ce(b, u)
    }
};

function Tg(a) {
    this.ga = new Ac;
    a && this.cf(a)
}

function Ug(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + qa(a) : b.substr(0, 1) + a
}

w = Tg.prototype;
w.rf = function () {
    return this.ga.rf()
};
w.add = function (a) {
    this.ga.set(Ug(a), a)
};
w.cf = function (a) {
    a = zc(a);
    for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
};
w.Nf = function (a) {
    a = zc(a);
    for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
};
w.remove = function (a) {
    return this.ga.remove(Ug(a))
};
w.clear = function () {
    this.ga.clear()
};
w.contains = function (a) {
    a = Ug(a);
    return Dc(this.ga.ga, a)
};
w.Sg = function (a) {
    var b = new Tg;
    a = zc(a);
    for (var c = 0; c < a.length; c++) {
        var e = a[c];
        this.contains(e) && b.add(e)
    }
    return b
};
w.Bd = function () {
    return this.ga.Bd()
};
w.l = function () {
    return new Tg(this)
};

function Vg(a, b, c) {
    this.$b = c || (a ? $d(ce(a)) : $d());
    Sg.call(this, this.$b.Vc("div", {style: "position:absolute;display:none;"}));
    this.nf = new Yd(1, 1);
    this.ie = new Tg;
    a && Wg(this, a);
    if (b != t) if (a = this.t(), "textContent" in a) a.textContent = b; else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        for (; c = a.firstChild;) a.removeChild(c);
        a.appendChild(be(a).createTextNode(String(b)))
    }
}

C(Vg, Sg);
var Xg = [];
w = Vg.prototype;
w.Sa = t;
w.className = "goog-tooltip";
w.xh = 500;
w.Ni = 0;
w.me = v("$b");

function Wg(a, b) {
    b = ce(b);
    a.ie.add(b);
    M(b, "mouseover", a.Mi, u, a);
    M(b, "mouseout", a.Kg, u, a);
    M(b, "mousemove", a.Li, u, a);
    M(b, "focus", a.Ki, u, a);
    M(b, "blur", a.Kg, u, a)
}

w.Of = function (a) {
    var b = this.t();
    b && he(b);
    Vg.u.Of.call(this, a);
    a && (b = this.$b.ka.body, b.insertBefore(a, b.lastChild))
};
w.Cf = function () {
    if (!Pg.prototype.Cf.call(this)) return u;
    if (this.anchor) for (var a, b = 0; a = Xg[b]; b++) je(a.t(), this.anchor) || Qg(a, u);
    0 <= Jb(Xg, this) || Xg.push(this);
    a = this.t();
    a.className = this.className;
    Yg(this);
    M(a, "mouseover", this.Mg, u, this);
    M(a, "mouseout", this.Lg, u, this);
    Zg(this);
    return q
};
w.Gf = function () {
    Ob(Xg, this);
    for (var a = this.t(), b, c = 0; b = Xg[c]; c++) b.anchor && je(a, b.anchor) && Qg(b, u);
    this.mh && $g(this.mh);
    bc(a, "mouseover", this.Mg, u, this);
    bc(a, "mouseout", this.Lg, u, this);
    this.anchor = p;
    if (0 == (this.Kb ? this.La ? 4 : 1 : this.Xc ? 3 : this.La ? 2 : 0)) this.Ae = u;
    Pg.prototype.Gf.call(this)
};
w.Zg = function (a, b) {
    this.anchor == a && this.ie.contains(this.anchor) && (this.Ae || !this.Sl ? (Qg(this, u), this.La || (this.anchor = a, this.ve = b || ah(this, 0) || p, this.La && this.ub(), Qg(this, q))) : this.anchor = p);
    this.Kb = p
};
w.hj = function (a) {
    this.Xc = p;
    a == this.anchor && (this.Sa == t || this.Sa != this.t() && !this.ie.contains(this.Sa)) && (!this.Ag || !this.Ag.Sa) && Qg(this, u)
};

function bh(a, b) {
    var c = le(a.$b);
    a.nf.x = b.clientX + c.x;
    a.nf.y = b.clientY + c.y
}

w.Mi = function (a) {
    var b = ch(this, a.target);
    this.Sa = b;
    Yg(this);
    b != this.anchor && (this.anchor = b, this.Kb || (this.Kb = Ig(va(this.Zg, this, b, p), this.xh)), dh(this), bh(this, a))
};

function ch(a, b) {
    try {
        for (; b && !a.ie.contains(b);) b = b.parentNode;
        return b
    } catch (c) {
        return t
    }
}

w.Li = function (a) {
    bh(this, a);
    this.Ae = q
};
w.Ki = function (a) {
    this.Sa = a = ch(this, a.target);
    this.Ae = q;
    if (this.anchor != a) {
        this.anchor = a;
        var b = ah(this, 1);
        Yg(this);
        this.Kb || (this.Kb = Ig(va(this.Zg, this, a, b), this.xh));
        dh(this)
    }
};

function ah(a, b) {
    if (0 == b) {
        var c = a.nf.l();
        return new eh(c)
    }
    return new fh(a.Sa)
}

function dh(a) {
    if (a.anchor) for (var b, c = 0; b = Xg[c]; c++) je(b.t(), a.anchor) && (b.Ag = a, a.mh = b)
}

w.Kg = function (a) {
    var b = ch(this, a.target), c = ch(this, a.relatedTarget);
    b != c && (b == this.Sa && (this.Sa = t), Zg(this), this.Ae = u, this.La && (!a.relatedTarget || !je(this.t(), a.relatedTarget)) ? $g(this) : this.anchor = p)
};
w.Mg = function () {
    var a = this.t();
    this.Sa != a && (Yg(this), this.Sa = a)
};
w.Lg = function (a) {
    var b = this.t();
    if (this.Sa == b && (!a.relatedTarget || !je(b, a.relatedTarget))) this.Sa = t, $g(this)
};

function Zg(a) {
    a.Kb && (fa.clearTimeout(a.Kb), a.Kb = p)
}

function $g(a) {
    if (2 == (a.Kb ? a.La ? 4 : 1 : a.Xc ? 3 : a.La ? 2 : 0)) a.Xc = Ig(va(a.hj, a, a.anchor), a.Ni)
}

function Yg(a) {
    a.Xc && (fa.clearTimeout(a.Xc), a.Xc = p)
}

function eh(a, b) {
    Ng.call(this, a, b)
}

C(eh, Ng);
eh.prototype.ub = function (a, b, c) {
    b = re(a);
    b = ue(b);
    c = c ? new me(c.top + 10, c.right, c.bottom, c.left + 10) : new me(10, 0, 0, 10);
    Lg(this.mf, a, 4, c, b, 9) & 496 && Lg(this.mf, a, 4, c, b, 5)
};

function fh(a) {
    Og.call(this, a, 3)
}

C(fh, Og);
fh.prototype.ub = function (a, b, c) {
    var e = new Yd(10, 0);
    Kg(this.element, this.Eg, a, b, e, c, 9) & 496 && Kg(this.element, 2, a, 1, e, c, 5)
};

function gh(a, b, c, e) {
    a == t && m(Error("No valid parent element."));
    (!x(b) || !x(c)) && m(Error("Invalid coordinates."));
    (e == t || !(e instanceof Ke)) && m(Error("Invalid interactor."));
    Vg.call(this);
    this.f = "caption";
    this.ab = a;
    this.ee = b;
    this.fe = c;
    this.T = e;
    this.Fb = t;
    this.fc = [];
    a = ".x-tooltip {\n  background: #C0C0FF;\n  color: #000000;\n";
    a += "  border: 1px solid infotext;\n";
    a += "  padding: 1px;\n";
    a += "  font-family: sans-serif;\n";
    a += "}";
    this.fc = [a];
    ac(e, Dd, this.Dd.bind(this));
    this.tf()
}

C(gh, Vg);
gh.prototype.tf = function () {
    var a = pe(this.ab, "position");
    if ("static" == a || "" == a) this.ab.style.position = "relative";
    var a = document.getElementsByTagName("head")[0], b = ee("style");
    b.type = "text/css";
    b.media = "screen";
    var c = document.createTextNode(String(this.fc[0]));
    a.appendChild(b);
    b.appendChild(c);
    this.Fb = b;
    this.ve = new Ng(this.ee, this.fe) || p;
    this.La && this.ub();
    Qg(this, q);
    Wg(this, this.ab);
    this.t().classList.add("x-tooltip")
};
gh.prototype.Dd = function () {
    Qg(this, u);
    this.Fb && he(this.Fb);
    this.t() && he(this.t());
    this.Fb = t
};

function hh() {
    Jg.call(this);
    this.f = "renderer3D";
    this.kd = this.nd = this.jd = this.md = this.hd = this.ld = this.Xe = this.Ye = t;
    this.z = [0, 0, 0];
    this.ad = [0, 0, 0];
    this.qg = t;
    this.He = new Ac;
    this.vd = new Ac;
    this.pc = new Ac;
    this.od = new Ac;
    this.Ec = new Ac;
    this.Oc = new Ac;
    this.oc = new Ac;
    this.ud = new Ac;
    this.R = {
        PROGRESSBAR_ENABLED: q,
        PICKING_ENABLED: q,
        ORDERING_ENABLED: q,
        STATISTICS_ENABLED: u,
        INTERMEDIATE_RENDERING: u
    }
}

C(hh, Jg);
hh.prototype.__defineGetter__("config", v("R"));
w = hh.prototype;
w.Yj = function () {
    this.kd = this.nd = this.jd = this.md = this.hd = this.ld = t;
    this.z = [0, 0, 0]
};
w.Hf = function (a) {
    hh.u.Hf.call(this, a);
    var b = a.ee;
    a = a.fe;
    var c = this.Lf(b, a);
    if (c = this.get(c)) if (c = c.Dc) {
        var e = xe(this.v);
        (new gh(this.v, e.x + b + 10, e.y + a + 10, this.T)).t().innerHTML = c
    }
};
w.Ba = function () {
    hh.u.Ba.call(this, "experimental-webgl");
    try {
        if (this.a.viewport(0, 0, this.K, this.A), this.a.clearColor(this.ad[0], this.ad[1], this.ad[2], 0), this.a.enable(this.a.BLEND), this.a.blendEquation(this.a.FUNC_ADD), this.a.blendFunc(this.a.SRC_ALPHA, this.a.ONE_MINUS_SRC_ALPHA), this.a.enable(this.a.DEPTH_TEST), this.a.depthFunc(this.a.LEQUAL), this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT), this.R.PICKING_ENABLED) {
            var a = this.a.createFramebuffer(), b = this.a.createRenderbuffer(), c = this.a.createTexture();
            this.a.bindTexture(this.a.TEXTURE_2D, c);
            this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGB, this.K, this.A, 0, this.a.RGB, this.a.UNSIGNED_BYTE, t);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.NEAREST);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.NEAREST);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER,
                a);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER, b);
            this.a.renderbufferStorage(this.a.RENDERBUFFER, this.a.DEPTH_COMPONENT16, this.K, this.A);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER, t);
            this.a.framebufferTexture2D(this.a.FRAMEBUFFER, this.a.COLOR_ATTACHMENT0, this.a.TEXTURE_2D, c, 0);
            this.a.framebufferRenderbuffer(this.a.FRAMEBUFFER, this.a.DEPTH_ATTACHMENT, this.a.RENDERBUFFER, b);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER, t);
            this.qg = a
        }
    } catch (e) {
        m(Error("Exception while accessing GL Context!\n" + e))
    }
    a = new df;
    (this.sa == t || this.a == t || this.N == t) && m(Error("Renderer was not initialized properly."));
    (a == t || !(a instanceof df)) && m(Error("Could not add shaders."));
    b = Object.keys(ff);
    Object.keys(ef).every(function (a) {
        a = ef[a];
        return -1 != this.be.search(a) || -1 != this.Sd.search(a)
    }.bind(a)) || m(Error("Could not find all attributes in the shader sources."));
    b.every(function (a) {
        a = ff[a];
        return -1 != this.be.search(a) || -1 != this.Sd.search(a)
    }.bind(a)) || m(Error("Could not find all uniforms in the shader sources."));
    b = this.a.createShader(this.a.FRAGMENT_SHADER);
    c = this.a.createShader(this.a.VERTEX_SHADER);
    this.a.shaderSource(b, a.Sd);
    this.a.shaderSource(c, a.be);
    this.a.compileShader(b);
    this.a.compileShader(c);
    this.a.getShaderParameter(b, this.a.COMPILE_STATUS) || m(Error("Fragement Shader compilation failed!\n" + this.a.getShaderInfoLog(b)));
    this.a.getShaderParameter(c, this.a.COMPILE_STATUS) || m(Error("Vertex Shader compilation failed!\n" + this.a.getShaderInfoLog(c)));
    var d = this.a.createProgram();
    this.a.attachShader(d, c);
    this.a.attachShader(d, b);
    this.a.linkProgram(d);
    this.a.getProgramParameter(d, this.a.LINK_STATUS) || m(Error("Could not create shader program!\n" + this.a.getShaderInfoLog(b) + "\n" + this.a.getShaderInfoLog(c) + "\n" + this.a.getProgramInfoLog(d)));
    this.a.useProgram(d);
    this.Xe = d;
    Object.keys(ef).forEach(function (a) {
        a = ef[a];
        this.He.set(a, this.a.getAttribLocation(this.Xe, a));
        this.a.enableVertexAttribArray(this.He.get(a))
    }.bind(this));
    Object.keys(ff).forEach(function (a) {
        a = ff[a];
        this.vd.set(a, this.a.getUniformLocation(this.Xe, a))
    }.bind(this));
    this.Ye = a
};
w.vb = function (a) {
    hh.u.vb.call(this, a);
    var b = u;
    if (a != t) {
        this.get(a.pa) && (b = q);
        var c = a.pa, e = a.h, d = a.n, f = a.oa, g = a.G, h = a.r, l = a.ja, j = a.xa, k = a.e, n = a.F;
        if (k != t && k.r != t && k.r.j) this.vb(k); else if (k != t && k.j && this.vb(k), j != t && j.r != t && j.r.j) this.aa.load(j, a); else if (g != t && g.r != t && g.r.j) this.aa.load(g, a); else {
            if (h != t && ka(h)) if (a.yc != t) {
                if (a.yc.wf != h.length || !a.j) return
            } else {
                b = 0;
                c = h.length;
                for (b = 0; b < c; b++) this.aa.load(h[b], a);
                return
            } else {
                if (h != t && h.j) {
                    this.aa.load(a, a);
                    return
                }
                if (n != t && n.r != t && n.r.j) {
                    this.aa.load(n,
                        a);
                    return
                }
            }
            if (0 < a.c.length) {
                h = a.c;
                j = h.length;
                for (k = k = 0; k < j; k++) this.vb(h[k])
            }
            if (e) {
                for (h = 0; this.Xd;) h++, window.console.log("Possible thread lock avoided: " + h);
                this.Xd = q;
                j = a instanceof Xe && a.yb instanceof hf;
                b && (g != t && g.j) && (h = this.oc.get(c), h != t && this.a.isBuffer(h.P) && this.a.deleteBuffer(h.P));
                h = t;
                g != t && (!b || g.j ? (h = a.nc, h == t && m(Error("Can not add an object and texture without valid coordinate mapping! Set the textureCoordinateMap!")), k = u, g.Wb && (k = q), this.a.pixelStorei(this.a.UNPACK_FLIP_Y_WEBGL, k),
                    k = this.a.createTexture(), k.Ri = g.ib, this.ud.set(g.pa, k), this.a.bindTexture(this.a.TEXTURE_2D, k), g.Wb ? (k = this.a.RGBA, g.gg && (k = this.a.LUMINANCE, this.a.pixelStorei(this.a.UNPACK_ALIGNMENT, 1)), this.a.texImage2D(this.a.TEXTURE_2D, 0, k, g.We, g.Ve, 0, k, this.a.UNSIGNED_BYTE, g.Wb)) : this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGBA, this.a.RGBA, this.a.UNSIGNED_BYTE, k.Ri), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T,
                    this.a.CLAMP_TO_EDGE), j ? (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.NEAREST), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.NEAREST)) : (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.LINEAR)), this.a.bindTexture(this.a.TEXTURE_2D, t), k = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, k), this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(h),
                    this.a.STATIC_DRAW), h = new Td(k, h.length, 2), this.oc.set(c, h), g.j = u) : h = this.oc.get(c));
                ig(this.aa, 0.1);
                if (j) this.Xd = u, D.Ca(this.f + ".update"), ig(this.aa, 0.9); else {
                    if (!b || e.j || l.j) {
                        j = l.Q;
                        g = D.g.ba(j, e.mb, e.nb, e.ob);
                        j = D.g.ba(j, e.jb, e.kb, e.lb);
                        if (this.ld === t || g.x < this.ld) this.ld = g.x;
                        if (this.hd === t || j.x > this.hd) this.hd = j.x;
                        if (this.md === t || g.y < this.md) this.md = g.y;
                        if (this.jd === t || j.y > this.jd) this.jd = j.y;
                        if (this.nd === t || g.d < this.nd) this.nd = g.d;
                        if (this.kd === t || j.d > this.kd) this.kd = j.d;
                        this.z = [(this.ld + this.hd) /
                        2, (this.md + this.jd) / 2, (this.nd + this.kd) / 2];
                        l.j = u
                    }
                    b && e.j && (l = this.pc.get(c), l != t && this.a.isBuffer(l.P) && this.a.deleteBuffer(l.P));
                    l = t;
                    !b || e.j ? (l = this.a.createBuffer(), e.Jb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, l), this.a.bufferData(this.a.ARRAY_BUFFER, e.da, this.a.STATIC_DRAW), l = new Td(l, e.count, 3), e.j = u) : l = this.pc.get(c);
                    ig(this.aa, 0.3);
                    b && d.j && (g = this.pc.get(c), g != t && this.a.isBuffer(g.P) && this.a.deleteBuffer(g.P));
                    g = t;
                    !b || d.j ? (g = this.a.createBuffer(), d.Jb(), this.a.bindBuffer(this.a.ARRAY_BUFFER,
                        g), this.a.bufferData(this.a.ARRAY_BUFFER, d.da, this.a.STATIC_DRAW), g = new Td(g, d.count, 3), d.j = u) : g = this.od.get(c);
                    ig(this.aa, 0.3);
                    b && (f && f.j) && (d = this.Ec.get(c), d != t && this.a.isBuffer(d.P) && this.a.deleteBuffer(d.P));
                    d = t;
                    f && (!b || f.j ? (f.length != e.length && m(Error("Mismatch between points and point colors.")), d = this.a.createBuffer(), f.Jb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, d), this.a.bufferData(this.a.ARRAY_BUFFER, f.da, this.a.STATIC_DRAW), d = new Td(d, f.count, 3), f.j = u) : d = this.Ec.get(c));
                    ig(this.aa, 0.2);
                    b && (n && n.j) && (f = this.Oc.get(c), f != t && this.a.isBuffer(f.P) && this.a.deleteBuffer(f.P));
                    f = t;
                    n && (f = n.cd, !b || n.j ? (f.length != e.length && m(Error("Mismatch between points and scalars.")), e = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, e), this.a.bufferData(this.a.ARRAY_BUFFER, f, this.a.STATIC_DRAW), f = new Td(e, f.length, 3), n.j = u) : f = this.Oc.get(c));
                    ig(this.aa, 0.1);
                    b || this.qb.add(a);
                    this.pc.set(c, l);
                    this.od.set(c, g);
                    this.Ec.set(c, d);
                    this.oc.set(c, h);
                    this.Oc.set(c, f);
                    this.Xd = a.j = u
                }
            } else a.j = u
        }
    }
};
w.Lf = function (a, b) {
    if (this.R.PICKING_ENABLED) {
        this.dc(q, u);
        var c = new Uint8Array(4);
        this.a.readPixels(a, this.A - b, 1, 1, this.a.RGBA, this.a.UNSIGNED_BYTE, c);
        return c[0] + 255 * c[1] + 65025 * c[2]
    }
    return -1
};
w.dc = function (a, b) {
    hh.u.dc.call(this, a, b);
    this.a.viewport(0, 0, this.K, this.A);
    this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
    var c = this.qb.I, e = c.length;
    if (0 != e) {
        a ? this.a.bindFramebuffer(this.a.FRAMEBUFFER, this.qg) : this.a.bindFramebuffer(this.a.FRAMEBUFFER, t);
        var d = this.N.Ue, f = this.N.o;
        this.a.uniformMatrix4fv(this.vd.get("perspective"), u, d);
        this.a.uniformMatrix4fv(this.vd.get("view"), u, f);
        d = this.z;
        this.a.uniform3f(this.vd.get("center"), parseFloat(d[0]), parseFloat(d[1]), parseFloat(d[2]));
        f = this.Ga.length;
        for (d = 0; d < f; ++d) {
            var g = this.Ga[d];
            if (g instanceof Q) {
                var h = D.g.ba(this.N.o, g.s[0] + g.b[0].i[0], g.s[1] + g.b[0].i[1], g.s[2] + g.b[0].i[2]),
                    l = D.g.ba(this.N.o, g.s[0] - g.b[0].i[0], g.s[1] - g.b[0].i[1], g.s[2] - g.b[0].i[2]),
                    j = Math.abs(h.d - l.d),
                    h = D.g.ba(this.N.o, g.s[0] + g.b[1].i[0], g.s[1] + g.b[1].i[1], g.s[2] + g.b[1].i[2]),
                    l = D.g.ba(this.N.o, g.s[0] - g.b[1].i[0], g.s[1] - g.b[1].i[1], g.s[2] + -g.b[1].i[2]),
                    k = Math.abs(h.d - l.d),
                    h = D.g.ba(this.N.o, g.s[0] + g.b[2].i[0], g.s[1] + g.b[2].i[1], g.s[2] + g.b[2].i[2]),
                    l = D.g.ba(this.N.o,
                        g.s[0] - g.b[2].i[0], g.s[1] - g.b[2].i[1], g.s[2] - g.b[2].i[2]),
                    h = Math.max(j, k, Math.abs(h.d - l.d));
                h == j ? gf(g, 0) : h == k ? gf(g, 1) : gf(g, 2)
            }
        }
        if (this.R.ORDERING_ENABLED) {
            j = u;
            f = this.Ga;
            g = f.length - 1;
            do if (d = f[g], d instanceof Q && d.Ra && -1 != d.X) {
                var j = d.c[d.X].c, k = d.X,
                    h = D.g.ba(this.N.o, d.s[0] + d.b[k].B[0], d.s[1] + d.b[k].B[1], d.s[2] + d.b[k].B[2]),
                    l = D.g.ba(this.N.o, d.s[0] - d.b[k].B[0], d.s[1] - d.b[k].B[1], d.s[2] - d.b[k].B[2]),
                    h = h.d - l.d, l = Math.max(d.Cc[d.X], Math.max(d.Cc[d.X + 4], d.Cc[d.X + 8])),
                    n = Math.min(d.Cc[d.X], Math.min(d.Cc[d.X +
                    4], d.Cc[d.X + 8]));
                if (0 > h * (l + n)) for (h = h = 0; h < d.sd[k] - 1; h++) j[h] && (j[h].ua = d.ua, j[h].ya = d.b[k].Rc * h); else for (h = d.sd[k] - 1; 0 <= h; h--) j[h] && (j[h].ua = d.ua, j[h].ya = (d.sd[k] - 1) * d.b[k].Rc - d.b[k].Rc * h);
                j = q
            } while (g--);
            f = this.qb.I;
            g = f.length - 1;
            do if (d = f[g], d.O && !(1 == d.ua || d instanceof Xe)) j = d, k = d.h.Pd, d = D.g.ba(d.ja.Q, k[0], k[1], k[2]), d = D.g.ba(this.N.o, d.x, d.y, d.d), d = D.m.qf(this.N.ic, d), d = Math.round(1E3 * d) / 1E3, j.ya = d, j = q; while (g--);
            j && this.qb.sort()
        }
        if (f = !a && b != t && b && this.R.STATISTICS_ENABLED) var s = 0;
        var d = this.He,
            g = d.get("vertexPosition"), j = d.get("vertexNormal"), k = d.get("vertexColor"),
            h = d.get("vertexTexturePos"), l = d.get("vertexScalar"), d = this.vd, n = d.get("usePicking"),
            r = d.get("useObjectColor"), y = d.get("objectColor"), z = d.get("useScalars"),
            F = d.get("scalarsReplaceMode"), G = d.get("scalarsMin"), I = d.get("scalarsMax"),
            B = d.get("scalarsMinColor"), E = d.get("scalarsMaxColor"), J = d.get("scalarsInterpolation"),
            O = d.get("scalarsMinThreshold"), R = d.get("scalarsMaxThreshold"), P = d.get("objectOpacity"),
            U = d.get("labelmapOpacity"),
            ba = d.get("labelmapColor"), ca = d.get("useTexture"), K = d.get("useLabelMapTexture"),
            na = d.get("textureSampler"), H = d.get("textureSampler2"), Pa = d.get("volumeLowerThreshold"),
            Fa = d.get("volumeUpperThreshold"), tb = d.get("volumeScalarMin"), ub = d.get("volumeScalarMax"),
            vb = d.get("volumeWindowLow"), kb = d.get("volumeWindowHigh"), Zc = d.get("volumeScalarMinColor"),
            lh = d.get("volumeScalarMaxColor"), Ag = d.get("volumeTexture"), mh = d.get("objectTransform"),
            nh = d.get("pointSize"), d = e;
        do {
            var da = c[e - d];
            if (da) {
                var ia = t;
                da instanceof
                Xe && da.yb && (ia = da.yb);
                if (da.O && (!ia || ia.O) && (!a || da.pd)) {
                    var Aa = da.pa, cb = da.gd, nb = this.pc.get(Aa), ob = this.od.get(Aa), Ze = this.Ec.get(Aa),
                        Kb = this.Oc.get(Aa), $e = this.oc.get(Aa);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, nb.P);
                    this.a.vertexAttribPointer(g, nb.Ob, this.a.FLOAT, u, 0, 0);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, ob.P);
                    this.a.vertexAttribPointer(j, ob.Ob, this.a.FLOAT, u, 0, 0);
                    a ? this.a.uniform1i(n, q) : this.a.uniform1i(n, u);
                    Ze && !a && !cb ? (this.a.uniform1i(r, u), this.a.bindBuffer(this.a.ARRAY_BUFFER, Ze.P), this.a.vertexAttribPointer(k,
                        Ze.Ob, this.a.FLOAT, u, 0, 0)) : (ob = 1, cb && !a && (ob = 0), this.a.uniform1i(r, ob), ob = da.w, a && (ob = [Math.floor(Aa % 65025 % 255) / 255, Math.floor(Aa % 65025 / 255) / 255, Math.floor(Aa / 65025) / 255]), this.a.uniform3f(y, parseFloat(ob[0]), parseFloat(ob[1]), parseFloat(ob[2])), this.a.vertexAttribPointer(k, nb.Ob, this.a.FLOAT, u, 0, 0));
                    Kb && !a && !cb ? (this.a.uniform1i(z, q), this.a.uniform1i(F, da.F.tg), Aa = da.F.Rb, cb = da.F.Pb, this.a.uniform3f(B, parseFloat(Aa[0]), parseFloat(Aa[1]), parseFloat(Aa[2])), this.a.uniform3f(E, parseFloat(cb[0]), parseFloat(cb[1]),
                        parseFloat(cb[2])), this.a.uniform1f(O, parseFloat(da.F.U)), this.a.uniform1f(R, parseFloat(da.F.W)), this.a.uniform1f(G, parseFloat(da.F.Oa)), this.a.uniform1f(I, parseFloat(da.F.ia)), this.a.uniform1i(J, parseInt(da.F.Ke, 10)), this.a.bindBuffer(this.a.ARRAY_BUFFER, Kb.P), this.a.vertexAttribPointer(l, Kb.Ob, this.a.FLOAT, u, 0, 0)) : (this.a.uniform1i(z, u), this.a.vertexAttribPointer(l, nb.Ob, this.a.FLOAT, u, 0, 0));
                    this.a.uniform1f(P, parseFloat(da.ua));
                    da.G && $e && !a ? (this.a.uniform1i(ca, q), this.a.activeTexture(this.a.TEXTURE0),
                        this.a.bindTexture(this.a.TEXTURE_2D, this.ud.get(da.G.pa)), this.a.uniform1i(na, 0), this.a.bindBuffer(this.a.ARRAY_BUFFER, $e.P), this.a.vertexAttribPointer(h, $e.Ob, this.a.FLOAT, u, 0, 0), this.a.uniform1i(Ag, u)) : (this.a.uniform1i(ca, u), this.a.vertexAttribPointer(h, nb.Ob, this.a.FLOAT, u, 0, 0));
                    ia && (this.a.uniform1i(Ag, q), this.a.uniform1f(Pa, ia.U), this.a.uniform1f(Fa, ia.W), this.a.uniform1f(tb, ia.Oa), this.a.uniform1f(ub, ia.ia), Aa = ia.Rb, cb = ia.Pb, this.a.uniform3f(Zc, parseFloat(Aa[0]), parseFloat(Aa[1]), parseFloat(Aa[2])),
                        this.a.uniform3f(lh, parseFloat(cb[0]), parseFloat(cb[1]), parseFloat(cb[2])), this.a.uniform1f(vb, ia.fa), this.a.uniform1f(kb, ia.ea), Kb = ia.e, this.a.uniform1i(K, u), ia.Ra ? this.a.uniform1f(P, parseFloat(ia.ua)) : Kb && Kb.O && (ia = da.e.pa, this.a.uniform1i(K, q), this.a.activeTexture(this.a.TEXTURE1), this.a.bindTexture(this.a.TEXTURE_2D, this.ud.get(ia)), this.a.uniform1i(H, 1), this.a.uniform1f(U, Kb.ua), this.a.uniform4fv(ba, Kb.Ze)));
                    this.a.uniformMatrix4fv(mh, u, da.ja.Q);
                    ia = 1;
                    "POINTS" == da.Ha && (ia = da.qd);
                    this.a.uniform1f(nh,
                        ia);
                    ia = -1;
                    da.Ha == jd ? (ia = this.a.TRIANGLES, f && (s += nb.dd / 3)) : "LINES" == da.Ha ? (this.a.lineWidth(da.Lc), ia = this.a.LINES) : "POINTS" == da.Ha ? ia = this.a.POINTS : "TRIANGLE_STRIPS" == da.Ha ? (ia = this.a.TRIANGLE_STRIP, f && (s += nb.dd / 3)) : "POLYGONS" == da.Ha && (ia = 0 == nb.dd % 3 ? this.a.TRIANGLES : this.a.TRIANGLE_FAN, f && (s += nb.dd / 3));
                    this.a.drawArrays(ia, 0, nb.dd)
                }
            }
        } while (--d);
        f && Math.round(s)
    }
};
w.remove = function (a) {
    hh.u.remove.call(this, a);
    if (0 < a.c.length) for (var b = a.c, c = b.length, e = 0, e = 0; e < c; e++) "undefined" != typeof b[e] && this.remove(b[e]);
    b = a.pa;
    c = this.oc.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    if (a.G && (c = this.ud.get(a.G.pa))) this.a.deleteTexture(c), this.ud.remove(a.G.pa);
    c = this.pc.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    c = this.od.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    c = this.Ec.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    c = this.Oc.get(b);
    c != t && this.a.isBuffer(c.P) && this.a.deleteBuffer(c.P);
    this.pc.remove(b);
    this.od.remove(b);
    this.Ec.remove(b);
    this.oc.remove(b);
    this.Oc.remove(b);
    this.qb.remove(a);
    return q
};
w.Ta = function () {
    this.Ye = t;
    delete this.Ye;
    this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
    hh.u.Ta.call(this)
};
hh.prototype.__defineGetter__("bgColor", v("ad"));
hh.prototype.__defineSetter__("bgColor", ea("ad"));
hh.prototype.Uj = function (a, b, c, e, d) {
    c != t || (c = 4);
    e != t || (e = 2);
    if (d == t) {
        d = this.Lf(a, b);
        if (-1 == d) return t;
        d = this.get(d);
        if (!d) return t
    }
    var f = Re(this.N, 2 * (a / this.K) - 1, 2 * ((this.A - b) / this.A) - 1, 0);
    a = Re(this.N, 2 * (a / this.K) - 1, 2 * ((this.A - b) / this.A) - 1, 1);
    f[0] += this.z[0];
    f[1] += this.z[1];
    f[2] += this.z[2];
    a[0] += this.z[0];
    a[1] += this.z[1];
    a[2] += this.z[2];
    b = [d.h.mb, d.h.nb, d.h.ob];
    var g = [d.h.jb, d.h.nb, d.h.ob], h = [d.h.jb, d.h.kb, d.h.ob], l = [d.h.mb, d.h.kb, d.h.ob],
        j = [d.h.mb, d.h.kb, d.h.lb], k = [d.h.mb, d.h.nb, d.h.lb], n = [d.h.jb,
            d.h.kb, d.h.lb], s = [d.h.jb, d.h.nb, d.h.lb];
    b = [D.g.ba(d.ja.Q, b[0], b[1], b[2]), D.g.ba(d.ja.Q, g[0], g[1], g[2]), D.g.ba(d.ja.Q, h[0], h[1], h[2]), D.g.ba(d.ja.Q, l[0], l[1], l[2]), D.g.ba(d.ja.Q, j[0], j[1], j[2]), D.g.ba(d.ja.Q, k[0], k[1], k[2]), D.g.ba(d.ja.Q, n[0], n[1], n[2]), D.g.ba(d.ja.Q, s[0], s[1], s[2])];
    var g = [Infinity, -Infinity, Infinity, -Infinity, Infinity, -Infinity], r;
    for (r in b) r = b[r], g = [Math.min(g[0], r.x), Math.max(g[1], r.x), Math.min(g[2], r.y), Math.max(g[3], r.y), Math.min(g[4], r.d), Math.max(g[5], r.d)];
    r = g;
    b = [];
    g = [];
    for (h = 0; 6 > h; h++) {
        var l = Math.floor(h / 2), j = (l + 1) % 3, k = (l + 2) % 3, s = (2 + 2 * l) % 6, y = (4 + 2 * l) % 6,
            z = (r[h] - f[l]) * (1 / a[l]);
        Infinity != z && -Infinity != z && (n = f[j] + a[j] * z, z = f[k] + a[k] * z, n >= r[s] && n <= r[s + 1] && z >= r[y] && z <= r[y + 1] ? (s = [], s[l] = r[h], s[j] = n, s[k] = z, b.push(s)) : (s = [], s[l] = r[h], s[j] = n, s[k] = z, g.push(s)))
    }
    a = [b, g];
    a = a[0];
    if (0 == a.length) return t;
    g = Array(2);
    for (r = 0; 2 > r; r++) b = a[r], g[r] = Math.sqrt((b[0] - f[0]) * (b[0] - f[0]) + (b[1] - f[1]) * (b[1] - f[1]) + (b[2] - f[2]) * (b[2] - f[2]));
    f = b = r = t;
    g[0] < g[1] ? (r = a[0], b = a[1]) : (r = a[1], b = a[0]);
    f = Math.sqrt((r[0] -
        b[0]) * (r[0] - b[0]) + (r[1] - b[1]) * (r[1] - b[1]) + (r[2] - b[2]) * (r[2] - b[2]));
    f /= c;
    a = r;
    r = [b[0] - r[0], b[1] - r[1], b[2] - r[2]];
    b = Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2]);
    g = [r[0] / b, r[1] / b, r[2] / b];
    h = d.h.da;
    l = h.length;
    for (r = 0; r < f; r += c) {
        a = [a[0] + c * g[0], a[1] + c * g[1], a[2] + c * g[2]];
        for (b = 0; b < l; b += 3) if (j = h[b], k = h[b + 1], n = h[b + 2], s = new D.m(j, k, n), s = D.g.ba(d.ja.Q, j, k, n), Math.sqrt((a[0] - s.x) * (a[0] - s.x) + (a[1] - s.y) * (a[1] - s.y) + (a[2] - s.d) * (a[2] - s.d)) <= e) return [s.x, s.y, s.d]
    }
    return t
};
A("X.renderer3D", hh);
A("X.renderer3D.prototype.init", hh.prototype.Ba);
A("X.renderer3D.prototype.add", hh.prototype.add);
A("X.renderer3D.prototype.onShowtime", hh.prototype.kh);
A("X.renderer3D.prototype.onRender", hh.prototype.ih);
A("X.renderer3D.prototype.get", hh.prototype.get);
A("X.renderer3D.prototype.render", hh.prototype.cc);
A("X.renderer3D.prototype.destroy", hh.prototype.Ta);
A("X.renderer3D.prototype.remove", hh.prototype.remove);
A("X.renderer3D.prototype.resetBoundingBox", hh.prototype.Yj);
A("X.renderer3D.prototype.resetViewAndRender", hh.prototype.Ld);
A("X.renderer3D.prototype.pick", hh.prototype.Lf);
A("X.renderer3D.prototype.pick3d", hh.prototype.Uj);
A("X.renderer3D.prototype.afterRender", hh.prototype.xg);

function ih() {
    W.call(this);
    this.f = "mesh";
    Ga(this, new yc)
}

C(ih, W);
A("X.mesh", ih);

function jh() {
    W.call(this);
    this.f = "fibers";
    Ga(this, new yc)
}

C(jh, W);
A("X.fibers", jh);

function kh() {
    Jg.call(this);
    this.f = "renderer2D";
    this.Qa = t;
    this.Ea = -1;
    this.Sb = [];
    this.jg = this.Vd = this.eg = this.Td = t;
    this.Qc = this.Tc = this.Pc = this.Sc = 0;
    this.ea = this.fa = this.W = this.U = this.Ie = -1;
    this.kg = new Float32Array([-255, -255, -255, -255]);
    this.rg = q;
    this.pb = 1
}

C(kh, Jg);
w = kh.prototype;
w.remove = function (a) {
    kh.u.remove.call(this, a);
    this.qb.remove(a);
    return q
};
w.Fj = aa();
w.Pj = aa();
w.If = function (a) {
    kh.u.If.call(this, a);
    var b = this.Ga[0];
    if (b) {
        var c = "", c = 0 == this.Ea ? "indexX" : 1 == this.Ea ? "indexY" : "indexZ";
        b[c] = a.V ? b[c] + 1 : b[c] - 1;
        eval("this.onScroll();")
    }
};
w.Qj = function (a) {
    var b = this.Ga[0];
    if (b) {
        var c = b.ea - b.fa, e = c / 2, d = parseInt(c + c / 15 * -a.bf, 10);
        a = parseInt(e + e / 15 * a.Pe, 10);
        c == d && d++;
        e == a && a++;
        b.fa -= parseInt(e - a, 10);
        b.fa -= parseInt(c - d, 10);
        b.fa = Math.max(b.fa, b.Oa);
        b.ea -= parseInt(e - a, 10);
        b.ea += parseInt(c - d, 10);
        b.ea = Math.min(b.ea, b.ia);
        eval("this.onWindowLevel();")
    }
};
kh.prototype.__defineGetter__("orientation", v("Qa"));
kh.prototype.__defineSetter__("orientation", function (a) {
    a = a.toUpperCase();
    "AXIAL" == a ? (a = "Z", this.Ea = 2) : "SAGITTAL" == a ? (a = "X", this.Ea = 0) : "CORONAL" == a && (a = "Y", this.Ea = 1);
    "X" != a && ("Y" != a && "Z" != a) && m(Error("Invalid orientation."));
    this.Qa = a
});
kh.prototype.__defineGetter__("radiological", v("rg"));
kh.prototype.__defineGetter__("normalizedScale", v("pb"));
kh.prototype.__defineGetter__("canvasWidth", function () {
    return this.sa.width
});
kh.prototype.__defineGetter__("canvasHeight", function () {
    return this.sa.height
});
kh.prototype.__defineGetter__("sliceWidth", v("Sc"));
kh.prototype.__defineGetter__("sliceHeight", v("Pc"));
kh.prototype.__defineSetter__("radiological", ea("rg"));
w = kh.prototype;
w.Ba = function () {
    this.Qa || m(Error("No 2D orientation set."));
    kh.u.Ba.call(this, "2d");
    this.a.fillStyle = "rgba(50,50,50,0)";
    this.a.fillRect(0, 0, this.sa.width, this.sa.height);
    this.Td = ee("canvas");
    this.Vd = ee("canvas");
    M(this.N, yd, this.Qj.bind(this))
};
w.ue = function () {
    kh.u.ue.call(this);
    oh(this)
};
w.Ld = function () {
    kh.u.Ld.call(this);
    oh(this);
    var a = this.Ga[0];
    a && (a.ea = a.ia, a.fa = a.Oa)
};
w.update = function (a) {
    this.vb(a);
    this.Ie = -1
};
w.vb = function (a) {
    kh.u.vb.call(this, a);
    var b = u;
    this.get(a.pa) && (b = q);
    if (a instanceof Q) {
        var c = a.r, e = a.e, d = a.xa;
        if (e != t && e.r != t && e.r.j) this.vb(e); else if (d != t && d.r != t && d.r.j) this.aa.load(d, a); else {
            if (c != t && ka(c)) if (a.yc != t) {
                if (a.yc.wf != c.length) return
            } else {
                b = 0;
                e = c.length;
                for (b = 0; b < e; b++) this.aa.load(c[b], a);
                return
            } else if (c != t && c.j) {
                this.aa.load(a, a);
                return
            }
            this.Ea = "X" == this.Qa ? 0 : "Y" == this.Qa ? 1 : 2;
            this.bb = a.c[this.Ea].c;
            d = t;
            d = 0 == this.Ea ? a.indexX : 1 == this.Ea ? a.indexY : a.indexZ;
            c = a.c[this.Ea].c[d].ig;
            e =
                a.c[this.Ea].c[d].hg;
            this.Tc = a.c[this.Ea].c[d].Uc;
            this.Qc = a.c[this.Ea].c[d].Gc;
            this.Sc = c;
            this.Pc = e;
            d = this.Td;
            d.width = c;
            d.height = e;
            var f = this.Vd;
            f.width = c;
            f.height = e;
            this.eg = d.getContext("2d");
            this.jg = f.getContext("2d");
            b || (this.qb.add(a), oh(this))
        }
    }
};

function oh(a) {
    var b = Math.min(a.K / (a.Sc * a.Tc), a.A / (a.Pc * a.Qc));
    a.N.o[14] = b
}

w.Gj = aa();
w.Hh = function (a, b) {
    var c = this.Ga[0], e = this.N.o, d = t, f = this.Sc, g = this.Pc, h = t, l = t;
    if ("Y" == this.Qa) d = this.bb[parseInt(c.indexY, 10)], h = d.Uc, l = d.Gc, this.Sb[0] = "red", this.Sb[1] = "blue"; else if ("Z" == this.Qa) d = this.bb[parseInt(c.indexZ, 10)], h = d.Uc, l = d.Gc, this.Sb[0] = "red", this.Sb[1] = "green"; else {
        d = this.bb[parseInt(c.indexX, 10)];
        h = d.Gc;
        l = d.Uc;
        this.Sb[0] = "green";
        this.Sb[1] = "blue";
        var j = f, f = g, g = j
    }
    var k = 1 * e[12], n = -1 * e[13];
    this.pb = Math.max(e[14], 0.6);
    j = [this.K / 2, this.A / 2];
    h = f * h * this.pb;
    l = g * l * this.pb;
    e = j[0] - h / 2;
    j =
        j[1] - l / 2;
    e += k * this.pb;
    j += n * this.pb;
    return a > e && a < e + h && b > j && b < j + l ? (k = (a - e) / h * f, n = (b - j) / l * g, l = d.di[4], "X" == this.Qa ? (j = f - k, k = n, n = j) : "Y" == this.Qa ? k = f - k : "Z" == this.Qa && (k = f - k, n = g - n), k = d.ci + k * d.Uc, n = d.Xh + n * d.Gc, k = Rc(k, n, l, 1), f = Sc(), dd(d.Qh, k, f), g = Sc(), dd(d.Rh, k, g), d = Math.round((c.b[0].i[0] * g[0] + c.b[0].i[1] * g[1] + c.b[0].i[2] * g[2] + c.b[0].Se) / c.b[0].Rc), d >= c.b[0].p ? d = c.b[0].p - 1 : 0 > d && (d = 0), k = Math.round((c.b[1].i[0] * g[0] + c.b[1].i[1] * g[1] + c.b[1].i[2] * g[2] + c.b[1].Se) / c.b[1].Rc), k >= c.b[1].p ? k = c.b[1].p - 1 : 0 > k && (k =
        0), n = Math.round((c.b[2].i[0] * g[0] + c.b[2].i[1] * g[1] + c.b[2].i[2] * g[2] + c.b[2].Se) / c.b[2].Rc), n >= c.b[2].p ? n = c.b[2].p - 1 : 0 > n && (n = 0), [[d, k, n], [f[0], f[1], f[2]], [g[0], g[1], g[2]]]) : t
};
w.dc = function (a, b) {
    kh.u.dc.call(this, a, b);
    if (0 != this.qb.I.length) {
        var c = this.Ga[0], e = t, e = 0 == this.Ea ? c.indexX : 1 == this.Ea ? c.indexY : c.indexZ,
            d = this.bb[parseInt(e, 10)].ig, f = this.bb[parseInt(e, 10)].hg;
        this.Tc = this.bb[parseInt(e, 10)].Uc;
        this.Qc = this.bb[parseInt(e, 10)].Gc;
        this.Sc = d;
        this.Pc = f;
        var g = this.K, h = this.A, l = this.N.o;
        this.a.save();
        this.a.clearRect(-g, -h, 2 * g, 2 * h);
        this.a.restore();
        this.pb = Math.max(l[14], 0.1);
        this.a.setTransform(this.pb, 0, 0, this.pb, 0, 0);
        var j = 1 * l[12], l = -1 * l[13], k = t;
        c.e && (k = c.e.Ze);
        var n =
            this.bb[parseInt(e, 10)], s = n.G.Wb, n = n.e, r = t;
        n && (r = n.Wb);
        var y = this.Sc, z = this.Pc, F = this.eg, G = this.jg, I = F.getImageData(0, 0, y, z),
            B = G.getImageData(0, 0, y, z), E = I.data, J = B.data, O = E.length, R = c.ia, P = c.U, U = c.W,
            ba = c.fa / R, ca = c.ea / R;
        if (this.Ie != e || this.U != P || this.W != U || this.fa != ba || this.ea != ca || k && !sg(k, this.kg, 0)) {
            var K = this.Td;
            K.width = d;
            K.height = f;
            K = this.Vd;
            K.width = d;
            K.height = f;
            d = 0;
            do {
                var K = [0, 0, 0, 0], f = [0, 0, 0, 0], na = s[d] / 255 * R, H = s[d], H = (H / 255 - ba) / (ca - ba),
                    H = 255 * H;
                na >= P && na <= U && (K = new S(c.Rb[0], c.Rb[1], c.Rb[2]),
                    K = (new S(c.Pb[0], c.Pb[1], c.Pb[2])).scale(H).add(K.scale(255 - H)), K = [Math.floor(K.x), Math.floor(K.y), Math.floor(K.d), 255], n && (-255 == k[3] ? f = [r[d], r[d + 1], r[d + 2], r[d + 3]] : sg(k, r, d) && (f = [r[d], r[d + 1], r[d + 2], r[d + 3]])));
                "X" == this.Qa ? (E[d] = K[0], E[d + 1] = K[1], E[d + 2] = K[2], E[d + 3] = K[3], J[d] = f[0], J[d + 1] = f[1], J[d + 2] = f[2], J[d + 3] = f[3]) : "Y" == this.Qa ? (H = Math.floor(d / (4 * y)), H = 4 * H * y + (4 * (y - 1) - (d - 4 * H * y)), E[H] = K[0], E[H + 1] = K[1], E[H + 2] = K[2], E[H + 3] = K[3], J[H] = f[0], J[H + 1] = f[1], J[H + 2] = f[2], J[H + 3] = f[3]) : (H = O - 1 - d, E[H - 3] = K[0], E[H - 2] =
                    K[1], E[H - 1] = K[2], E[H] = K[3], J[H - 3] = f[0], J[H - 2] = f[1], J[H - 1] = f[2], J[H] = f[3]);
                d += 4
            } while (d < O);
            F.putImageData(I, 0, 0);
            G.putImageData(B, 0, 0);
            this.Ie = e;
            this.U = P;
            this.W = U;
            this.fa = ba;
            this.ea = ca;
            n && (this.kg = k)
        }
        this.a.globalAlpha = 1;
        this.a.translate(g / 2 / this.pb, h / 2 / this.pb);
        "X" == this.Qa && (this.a.rotate(0.5 * Math.PI), e = j, j = l, l = -e);
        j = -y * this.Tc / 2 + j;
        l = -z * this.Qc / 2 + l;
        this.a.drawImage(this.Td, j, l, y * this.Tc, z * this.Qc);
        n && c.e.O && (this.a.globalAlpha = c.e.ua, this.a.drawImage(this.Vd, j, l, y * this.Tc, z * this.Qc));
        if (this.R.SLICENAVIGATORS &&
            (this.T.Yd && this.T.vg && !this.T.xb) && (j = this.T.ta, j = this.Hh(j[0], j[1]))) c.Cb = j[0][0], c.Db = j[0][1], c.Eb = j[0][2], c.q(u), this.onSliceNavigation(), this.a.setTransform(1, 0, 0, 1, 0, 0), this.a.lineWidth = 1, this.a.beginPath(), this.a.moveTo(this.T.ta[0], 0), this.a.lineTo(this.T.ta[0], this.T.ta[1] - 10), this.a.moveTo(this.T.ta[0], this.T.ta[1] + 10), this.a.lineTo(this.T.ta[0], this.A), this.a.strokeStyle = this.Sb[0], this.a.stroke(), this.a.closePath(), this.a.beginPath(), this.a.moveTo(0, this.T.ta[1]), this.a.lineTo(this.T.ta[0] -
            10, this.T.ta[1]), this.a.moveTo(this.T.ta[0] + 10, this.T.ta[1] + 0.5), this.a.lineTo(this.K, this.T.ta[1]), this.a.strokeStyle = this.Sb[1], this.a.stroke(), this.a.closePath(), this.a.font = "10pt Arial", this.a.textAlign = "left", this.a.textBaseline = "top", this.a.fillStyle = "white", this.a.fillText("RAS: " + j[2][0].toFixed(2) + ", " + j[2][1].toFixed(2) + ", " + j[2][2].toFixed(2), 0, 0), y = n = l = "undefined", "undefined" != typeof c.$[j[1][2].toFixed(0)] && "undefined" != typeof c.$[j[1][2].toFixed(0)][j[1][1].toFixed(0)] && (l = c.$[j[1][2].toFixed(0)][j[1][1].toFixed(0)][j[1][0].toFixed(0)],
        c.L && (n = c.e.$[j[1][2].toFixed(0)][j[1][1].toFixed(0)][j[1][0].toFixed(0)], c.e.bd && (y = c.e.bd.get(n), "undefined" != typeof y && (y = y[0])))), this.a.fillText("Background:  " + l + " (" + j[1][0].toFixed(0) + ", " + j[1][1].toFixed(0) + ", " + j[1][2].toFixed(0) + ")", 0, 15), c.L && this.a.fillText("Labelmap:  " + y + " (" + n + ")", 0, 30)
    }
};
A("X.renderer2D", kh);
A("X.renderer2D.prototype.init", kh.prototype.Ba);
A("X.renderer2D.prototype.add", kh.prototype.add);
A("X.renderer2D.prototype.onShowtime", kh.prototype.kh);
A("X.renderer2D.prototype.onRender", kh.prototype.ih);
A("X.renderer2D.prototype.onScroll", kh.prototype.Fj);
A("X.renderer2D.prototype.onWindowLevel", kh.prototype.Pj);
A("X.renderer2D.prototype.get", kh.prototype.get);
A("X.renderer2D.prototype.resetViewAndRender", kh.prototype.Ld);
A("X.renderer2D.prototype.xy2ijk", kh.prototype.Hh);
A("X.renderer2D.prototype.render", kh.prototype.cc);
A("X.renderer2D.prototype.destroy", kh.prototype.Ta);
A("X.renderer2D.prototype.onSliceNavigation", kh.prototype.Gj);
A("X.renderer2D.prototype.afterRender", kh.prototype.xg);
