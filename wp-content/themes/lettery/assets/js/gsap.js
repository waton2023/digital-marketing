/*!
 * GSAP 3.11.1
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = vt(t, ot)) && Ce
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function da(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = mt.length; r-- && !mt[r].targetTest(i););
            e = mt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Yt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function ea(t) {
        return t._gsap || da(Ot(t))[0]._gsap
    }

    function fa(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ga(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ha(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ia(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ja(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function ka(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function la() {
        var t, e, r = ft.length,
            i = ft.slice(0);
        for (ct = {}, t = ft.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function ma(t, e, r, i) {
        ft.length && la(), t.render(e, r, i || I), ft.length && la()
    }

    function na(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function oa(t) {
        return t
    }

    function pa(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function sa(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? sa(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function ta(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function ua(t) {
        var e = t.parent || B,
            r = t.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }(K(t.keyframes)) : pa;
        if (w(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function wa(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function xa(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function ya(t, e) {
        !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
    }

    function za(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Ba(t, e, r, i) {
        return t._startAt && (I ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Da(t) {
        return t._repeat ? yt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Fa(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ga(t) {
        return t._end = ia(t._start + (t._tDur / Math.abs(t._ts || t._rts || q) || 0))
    }

    function Ha(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ia(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ga(t), r._dirty || za(r, t)), t
    }

    function Ia(t, e) {
        var r;
        if ((e._time || e._initted && !e._dur) && (r = Fa(t.rawTime(), e), (!e._dur || xt(0, e.totalDuration(), r) - e._tTime > q) && e.render(r, !0)), za(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -q
        }
    }

    function Ja(e, r, i, n) {
        return r.parent && ya(r), r._start = ia((t(i) ? i : i || e !== B ? wt(e, i, r) : e._time) + r._delay), r._end = ia(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), wa(e, r, "_first", "_last", e._sort ? "_start" : 0), Tt(r) || (e._recent = r), n || Ia(e, r), e._ts < 0 && Ha(e, e._tTime), e
    }

    function Ka(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function La(t, e, r, i) {
        return jt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== zt.frame ? (ft.push(t), t._lazy = [e, i], 1) : void 0 : 1
    }

    function Qa(t, e, r, i) {
        var n = t._repeat,
            a = ia(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ia(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ha(t, t._tTime = t._tDur * s) : t.parent && Ga(t), r || za(t.parent, t), t
    }

    function Ra(t) {
        return t instanceof Qt ? za(t) : Qa(t, t._dur)
    }

    function Ua(e, r, i) {
        var n, a, s = t(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new $t(r[0], u, r[1 + o])
    }

    function Va(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Xa(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function $a(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function bb(r) {
        return r = Ot(r)[0] || R("Invalid scope") || {},
            function(t) {
                var e = r.current || r.nativeElement || r;
                return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
            }
    }

    function cb(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function db(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {
                each: t
            },
            _ = Lt(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            y = {},
            e = 0 < m && m < 1,
            T = isNaN(m) || e,
            b = p.axis,
            w = m,
            x = m;
        return r(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            }[m] || 0 : !e && T && (w = m[0], x = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, c = (r || p).length,
                    d = y[c];
                if (!d) {
                    if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
                        for (h = -N; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
                        f--
                    }
                    for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === N ? 0 : T ? c * x / f - .5 : m / f | 0, l = N, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : H(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && cb(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Xa(p.amount || p.each) || 0, _ = _ && c < 0 ? Bt(_) : _
                }
                return c = (d[t] - d.min) / d.max || 0, ia(d.b + (_ ? _(c) : c) * d.v) + d.u
            }
    }

    function eb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ia(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Xa(e))
        }
    }

    function fb(h, e) {
        var l, f, r = K(h);
        return !r && v(h) && (l = r = h.radius || N, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = eb(h.increment)), Va(e, r ? s(h) ? function(t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = N, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Xa(e)
        } : eb(h))
    }

    function gb(t, e, r, i) {
        return Va(K(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return K(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function kb(e, r, t) {
        return Va(t, function(t) {
            return e[~~r(t)]
        })
    }

    function nb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + gb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function qb(t, e, r) {
        var i, n, a, s = t.labels,
            o = N;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function sb(t) {
        return ya(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Pt(t, "onInterrupt"), t
    }

    function xb(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Ct + .5 | 0
    }

    function yb(e, r, i) {
        var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & Ct, e & Ct] : 0 : St.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]) p = St[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & Ct, p & Ct, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Ct, e & Ct]
            } else if ("hsl" === e.substr(0, 3))
                if (p = d = e.match(tt), r) {
                    if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = xb(o + 1 / 3, n, a), p[1] = xb(o, n, a), p[2] = xb(o - 1 / 3, n, a);
            else p = e.match(tt) || St.transparent;
            p = p.map(Number)
        }
        return r && !d && (n = p[0] / Ct, a = p[1] / Ct, s = p[2] / Ct, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function zb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(At).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Ab(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(At),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = yb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = zb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(At, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(At)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Db(t) {
        var e, r = t.join(" ");
        if (At.lastIndex = 0, At.test(r)) return e = Dt.test(r), t[1] = Ab(t[1], e), t[0] = Ab(t[0], e, zb(t[1])), !0
    }

    function Mb(t) {
        var e = (t + "").split("("),
            r = Et[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(It, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(na)) : Et._CE && Ft.test(t) ? Et._CE("", t) : r
    }

    function Ob(t, e) {
        for (var r, i = t._first; i;) i instanceof Qt ? Ob(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ob(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Qb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ga(t, function(t) {
            for (var e in Et[t] = ot[t] = a, Et[n = t.toLowerCase()] = r, a) Et[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Et[t + "." + e] = a[e]
        }), a
    }

    function Rb(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Sb(r, t, e) {
        function Fm(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / j * (Math.asin(1 / i) || 0),
            s = "out" === r ? Fm : "in" === r ? function(t) {
                return 1 - Fm(1 - t)
            } : Rb(Fm);
        return n = j / n, s.config = function(t, e) {
            return Sb(r, t, e)
        }, s
    }

    function Tb(e, r) {
        function Nm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Nm : "in" === e ? function(t) {
            return 1 - Nm(1 - t)
        } : Rb(Nm);
        return t.config = function(t) {
            return Tb(e, t)
        }, t
    }
    var F, I, l, B, h, n, a, i, o, f, c, d, p, _, m, g, b, M, O, k, C, A, D, z, E, L, X, Y, V = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        U = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        N = 1e8,
        q = 1 / N,
        j = 2 * Math.PI,
        G = j / 4,
        J = 0,
        H = Math.sqrt,
        $ = Math.cos,
        W = Math.sin,
        Z = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        K = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {
            suppressEvents: !0,
            isStart: !0
        },
        ht = {
            suppressEvents: !0
        },
        lt = {},
        ft = [],
        ct = {},
        dt = {},
        pt = {},
        _t = 30,
        mt = [],
        gt = "",
        vt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        yt = function _animationCycle(t, e) {
            var r = Math.floor(t /= e);
            return t && r === t ? r - 1 : r
        },
        Tt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        bt = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        wt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels,
                u = t._recent || bt,
                h = t.duration() >= N ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * (K(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        },
        xt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        Mt = [].slice,
        Ot = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Rt() ? K(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function(t) {
                    return r(t) && !e || $a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
                }) || i
            }(t, i) : $a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0)
        },
        kt = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Va(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        Pt = function _callback(t, e, r) {
            var i, n, a, s = t.vars,
                o = s[e],
                u = l,
                h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ft.length && la(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        },
        Ct = 255,
        St = {
            aqua: [0, Ct, Ct],
            lime: [0, Ct, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Ct],
            navy: [0, 0, 128],
            white: [Ct, Ct, Ct],
            olive: [128, 128, 0],
            yellow: [Ct, Ct, 0],
            orange: [Ct, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Ct, 0, 0],
            pink: [Ct, 192, 203],
            cyan: [0, Ct, Ct],
            transparent: [Ct, Ct, Ct, 0]
        },
        At = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in St) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Dt = /hsl[a]?\(/,
        zt = (O = Date.now, k = 500, C = 33, A = O(), D = A, E = z = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                ul(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ce, (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame), p && g.sleep(), _ = m || function(t) {
                    return setTimeout(t, E - 1e3 * g.time + 1 | 0)
                }, d = 1, ul(2))
            },
            sleep: function sleep() {
                (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                k = t || 1e8, C = Math.min(e, k, 0)
            },
            fps: function fps(t) {
                z = 1e3 / (t || 240), E = 1e3 * g.time + z
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), L[e ? "unshift" : "push"](a), Rt(), a
            },
            remove: function remove(t, e) {
                ~(e = L.indexOf(t)) && L.splice(e, 1) && e <= M && M--
            },
            _listeners: L = []
        }),
        Rt = function _wake() {
            return !d && zt.wake()
        },
        Et = {},
        Ft = /^[\d.\-M][\d.\-,\s]/,
        It = /["']/g,
        Bt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Lt = function _parseEase(t, e) {
            return t && (s(t) ? t : Et[t] || Mb(t)) || e
        };

    function ul(t) {
        var e, r, i, n, a = O() - D,
            s = !0 === t;
        if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - E) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, E += e + (z <= e ? 4 : z - e), r = 1), s || (p = _(ul)), r)
            for (M = 0; M < L.length; M++) L[M](i, b, n, t)
    }

    function cn(t) {
        return t < Y ? X * t * t : t < .7272727272727273 ? X * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? X * (t -= 2.25 / 2.75) * t + .9375 : X * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ga("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Qb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Et.Linear.easeNone = Et.none = Et.Linear.easeIn, Qb("Elastic", Sb("in"), Sb("out"), Sb()), X = 7.5625, Y = 1 / 2.75, Qb("Bounce", function(t) {
        return 1 - cn(1 - t)
    }, cn), Qb("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }), Qb("Circ", function(t) {
        return -(H(1 - t * t) - 1)
    }), Qb("Sine", function(t) {
        return 1 === t ? 1 : 1 - $(t * G)
    }), Qb("Back", Tb("in"), Tb("out"), Tb()), Et.SteppedEase = Et.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * xt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, U.ease = Et["quad.out"], ga("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return gt += t + "," + t + "Params,"
    });
    var Xt, Yt = function GSCache(t, e) {
            this.id = J++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : fa, this.set = e ? e.getSetter : ee
        },
        Vt = ((Xt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Xt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Xt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Qa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Xt.totalTime = function totalTime(t, e) {
            if (Rt(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ha(this, t), !r._dp || r.parent || Ia(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ja(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === q || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ma(this, t, e)), this
        }, Xt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Da(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Xt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, Xt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Da(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, Xt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? yt(this._tTime, r) + 1 : 1
        }, Xt.timeScale = function timeScale(t) {
            if (!arguments.length) return this._rts === -q ? 0 : this._rts;
            if (this._rts === t) return this;
            var e = this.parent && this._ts ? Fa(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -q ? 0 : this._rts, this.totalTime(xt(-this._delay, this._tDur, e), !0), Ga(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Xt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Rt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== q && (this._tTime -= q)))), this) : this._ps
        }, Xt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || Ja(e, this, t - this._delay), this
            }
            return this._start
        }, Xt.endTime = function endTime(t) {
            return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Xt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fa(e.rawTime(t), this) : this._tTime : this._tTime
        }, Xt.revert = function revert(t) {
            void 0 === t && (t = ht);
            var e = I;
            return I = t, this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents), "nested" !== this.data && ya(this), I = e, this
        }, Xt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
            return !this.parent && this.vars.immediateRender ? -1 : r
        }, Xt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ra(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Xt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Ra(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Xt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Xt.seek = function seek(t, e) {
            return this.totalTime(wt(this, t), w(e))
        }, Xt.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, w(e))
        }, Xt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Xt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Xt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Xt.resume = function resume() {
            return this.paused(!1)
        }, Xt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -q : 0)), this) : this._rts < 0
        }, Xt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -q, this
        }, Xt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - q))
        }, Xt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Xt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function xo() {
                    var t = i.then;
                    i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = s(t) ? t : oa;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? xo() : i._prom = xo
            })
        }, Xt.kill = function kill() {
            sb(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Qa(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || zt.wake()
    }
    pa(Vt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -q,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Qt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), B && Ja(t.parent || B, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Ka(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Ua(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Ua(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Ua(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, ua(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, wt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return Ja(this, $t.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, wt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, ua(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, ua(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : ia(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== B && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ia(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = yt(this._tTime, o), !_ && this._tTime && c !== s && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
                        var T = d && 1 & c,
                            b = T === (d && 1 & s);
                        if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ia(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Pt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Ob(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ia(_), ia(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Pt(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -q);
                                break
                            }
                        }
                        n = a
                    } else {
                        r = r || I, n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -q : q);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -q)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ga(this), this.render(t, e, r);
                this._onUpdate && !e && Pt(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ya(this, 1), e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = wt(this, i, e)), !(e instanceof Vt)) {
                if (K(e)) return e.forEach(function(t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = $t.delayedCall(0, e)
            }
            return this !== e ? Ja(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -N);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (xa(this, t), t === this._recent && (this._recent = this._last), za(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ia(zt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = wt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = $t.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, Ja(this, i, wt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = wt(this, t); e;) e._start === t && "isPause" === e.data && ya(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ut !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof $t ? ka(s._targets, a) && (o ? (!Ut || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = wt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = $t.to(i, pa({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || q,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Qa(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, pa({
                startAt: {
                    time: wt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), qb(this, wt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), qb(this, wt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + q)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return za(this)
        }, e.invalidate = function invalidate() {
            var t = this._first;
            for (this._lock = 0; t;) t.invalidate(), t = t._next;
            return i.prototype.invalidate.call(this)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), za(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = N;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ja(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Qa(a, a === B && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (B._ts && (ma(B, Fa(t, B)), f = zt.frame), zt.frame >= _t) {
                _t += V.autoSleep || 120;
                var e = B._first;
                if ((!e || !e._ts) && V.autoSleep && zt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || zt.sleep()
                }
            }
        }, Timeline
    }(Vt);
    pa(Qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function $b(t, e, i, n, a, o) {
        var u, h, l, f;
        if (dt[t] && !1 !== (u = new dt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
                if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || K(t) || Z(t)) return r(t) ? Gt(t, a, e, i, n) : t;
                var o, u = {};
                for (o in t) u[o] = Gt(t[o], a, e, i, n);
                return u
            }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new me(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
            for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function ec(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if (K(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Ut, Nt, qt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
            s(n) && (n = n(a || 0, t, o));
            var c, d = t[e],
                p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
                _ = s(d) ? l ? Kt : Zt : Wt;
            if (r(n) && (~n.indexOf("random(") && (n = nb(n)), "=" === n.charAt(1) && (!(c = ja(p, n) + (Xa(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Nt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, c, d, p, _ = new me(this._pt, t, e, 0, 1, oe, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = nb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: c,
                    c: "=" === l.charAt(1) ? ja(c, l) - c : parseFloat(l) - c,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
            }.call(this, t, e, p, n, _, h || V.stringFilter, l)) : (c = new me(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? ne : re, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
        },
        jt = function _initTween(t, e) {
            var r, i, n, a, s, o, u, h, l, f, c, d, p, _ = t.vars,
                m = _.ease,
                g = _.startAt,
                v = _.immediateRender,
                y = _.lazy,
                T = _.onUpdate,
                b = _.onUpdateParams,
                x = _.callbackScope,
                M = _.runBackwards,
                O = _.yoyoEase,
                k = _.keyframes,
                P = _.autoRevert,
                C = t._dur,
                S = t._startAt,
                A = t._targets,
                D = t.parent,
                z = D && "nested" === D.data ? D.vars.targets : A,
                R = "auto" === t._overwrite && !F,
                E = t.timeline;
            if (!E || k && m || (m = "none"), t._ease = Lt(m, U.ease), t._yEase = O ? Bt(Lt(!0 === O ? m : O, U.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !E && !!_.runBackwards, !E || k && !_.stagger) {
                if (d = (h = A[0] ? ea(A[0]).harness : 0) && _[h.prop], r = ta(_, lt), S && (e < 0 && M && v && !P ? S.render(-1, !0) : S.revert(M && C ? ht : ut), S._lazy = 0), g) {
                    if (ya(t._startAt = $t.set(A, pa({
                            data: "isStart",
                            overwrite: !1,
                            parent: D,
                            immediateRender: !0,
                            lazy: w(y),
                            startAt: null,
                            delay: 0,
                            onUpdate: T,
                            onUpdateParams: b,
                            callbackScope: x,
                            stagger: 0
                        }, g))), e < 0 && (I || !v && !P) && t._startAt.revert(ht), v && C && e <= 0) return void(e && (t._zTime = e))
                } else if (M && C && !S)
                    if (e && (v = !1), n = pa({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: v && w(y),
                            immediateRender: v,
                            stagger: 0,
                            parent: D
                        }, r), d && (n[h.prop] = d), ya(t._startAt = $t.set(A, n)), e < 0 && (I ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, v) {
                        if (!e) return
                    } else _initTween(t._startAt, q);
                for (t._pt = t._ptCache = 0, y = C && w(y) || y && !C, i = 0; i < A.length; i++) {
                    if (u = (s = A[i])._gsap || da(A)[i]._gsap, t._ptLookup[i] = f = {}, ct[u.id] && ft.length && la(), c = z === A ? i : z.indexOf(s), h && !1 !== (l = new h).init(s, d || r, t, c, z) && (t._pt = a = new me(t._pt, s, l.name, 0, 1, l.render, l, 0, l.priority), l._props.forEach(function(t) {
                            f[t] = a
                        }), l.priority && (o = 1)), !h || d)
                        for (n in r) dt[n] && (l = $b(n, r, t, c, s, z)) ? l.priority && (o = 1) : f[n] = a = qt.call(t, s, n, "get", r[n], c, z, 0, _.stringFilter);
                    t._op && t._op[i] && t.kill(s, t._op[i]), R && t._pt && (Ut = t, B.killTweensOf(s, f, t.globalTime(e)), p = !t.parent, Ut = 0), t._pt && y && (ct[u.id] = 1)
                }
                o && _e(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = T, t._initted = (!t._op || t._pt) && !p, k && e <= 0 && E.render(N, !0, !0)
        },
        Gt = function _parseFuncOrString(t, e, i, n, a) {
            return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? nb(t) : t
        },
        Jt = gt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Ht = {};
    ga(Jt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Ht[t] = 1
    });
    var $t = function(E) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, c, d, p = (a = E.call(this, n ? r : ua(r)) || this).vars,
                _ = p.duration,
                m = p.delay,
                g = p.immediateRender,
                T = p.stagger,
                b = p.overwrite,
                x = p.keyframes,
                M = p.defaults,
                O = p.scrollTrigger,
                k = p.yoyoEase,
                P = r.parent || B,
                C = (K(e) || Z(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
            if (a._targets = C.length ? da(C) : R("GSAP target " + e + " not found. https://greensock.com", !V.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Qt({
                        data: "nested",
                        defaults: M || {},
                        targets: P && "nested" === P.data ? P.vars.targets : C
                    })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = C.length, c = T && db(T), v(T))
                        for (l in T) ~Jt.indexOf(l) && ((d = d || {})[l] = T[l]);
                    for (o = 0; o < h; o++)(u = ta(r, Ht)).stagger = 0, k && (u.yoyoEase = k), d && vt(u, d), f = C[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, C) : 0), s._ease = Et.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    ua(pa(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = Lt(x.ease || r.ease || "none");
                    var S, A, D, z = 0;
                    if (K(x)) x.forEach(function(t) {
                        return s.to(C, t, ">")
                    }), s.duration();
                    else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || ec(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (S = u[l].sort(function(t, e) {
                                    return t.t - e.t
                                }), o = z = 0; o < S.length; o++)(D = {
                                ease: (A = S[o]).e,
                                duration: (A.t - (o ? S[o - 1].t : 0)) / 100 * _
                            })[l] = A.v, s.to(C, D, z), z += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || F || (Ut = _assertThisInitialized(a), B.killTweensOf(C), Ut = 0), Ja(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ia(P._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -q, a.render(Math.max(0, -m))), O && Ka(_assertThisInitialized(a), O), a
        }
        _inheritsLoose(Tween, E);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, c = this._time,
                d = this._tDur,
                p = this._dur,
                _ = t < 0,
                m = d - q < t && !_ ? d : t < q ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ia(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = yt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Ob(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ia(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (La(this, _ ? t : i, r, e)) return this._tTime = 0, this;
                        if (c !== this._time) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && (Pt(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : !i && u ? -q : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ba(this, t, 0, r), Pt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ba(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || ya(this, 1), e || _ && !c || !m && !c || (Pt(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !Tt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Tt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = xt(0, t._tDur, e), a = yt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== yt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || I || i || t._zTime === q || !e && t._zTime) {
                    if (!t._initted && La(t, e, i, r)) return;
                    for (s = t._zTime, t._zTime = e || (r ? q : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Ba(t, e, 0, !0), t._onUpdate && !r && Pt(t, "onUpdate"), l && t._repeat && !r && t.parent && Pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ya(t, 1), r || I || (Pt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), E.prototype.invalidate.call(this)
        }, e.resetTo = function resetTo(t, e, r, i) {
            d || zt.wake(), this._ts || this.play();
            var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || jt(this, a), n = this._ease(a / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s) {
                    var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!f)
                        for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
                            if ((o = h[l][e]) && o.d && o.d._pt)
                                for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                            if (!o) return Nt = 1, t.vars[e] = "+=0", jt(t, s), Nt = 0, 1;
                            f.push(o)
                        }
                    for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ha(r) + Xa(u.e)), u.b && (u.b = o.s + Xa(u.b))
                }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ha(this, 0), this.parent || wa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? sb(this) : this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ut && !0 !== Ut.vars.overwrite)._first || sb(this), this.parent && i !== this.timeline.totalDuration() && Qa(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets,
                c = t ? Ot(t) : f,
                d = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, c)) return "all" === e && (this._pt = 0), sb(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ga(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? ea(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = vt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~c.indexOf(f[l]))
                    for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || xa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && sb(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Ua(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Ua(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return B.killTweensOf(t, e, r)
        }, Tween
    }(Vt);
    pa($t.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ga("staggerTo,staggerFrom,staggerFromTo", function(r) {
        $t[r] = function() {
            var t = new Qt,
                e = Mt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function mc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function uc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var Wt = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        Zt = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        Kt = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        ee = function _getSetter(t, e) {
            return s(t[e]) ? Zt : u(t[e]) && t.setAttribute ? mc : Wt
        },
        re = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ne = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        oe = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        ce = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        de = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        pe = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? xa(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        _e = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        me = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = uc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || re, this.d = s || this, this.set = o || Wt, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ga(gt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return lt[t] = 1
    }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Qt, B = new Qt({
        sortChildren: !1,
        defaults: U,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), V.stringFilter = Db;

    function Bc(t) {
        return (Te[t] || we).map(function(t) {
            return t()
        })
    }

    function Cc() {
        var t = Date.now(),
            o = [];
        2 < t - xe && (Bc("matchMediaInit"), ye.forEach(function(t) {
            var e, r, i, n, a = t.queries,
                s = t.conditions;
            for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Bc("matchMediaRevert"), o.forEach(function(t) {
            return t.onMatch(t)
        }), xe = t, Bc("matchMedia"))
    }
    var ve, ye = [],
        Te = {},
        we = [],
        xe = 0,
        Me = ((ve = Context.prototype).add = function add(t, i, n) {
            function xw() {
                var t, e = l,
                    r = a.selector;
                return e && e !== a && e.data.push(a), n && (a.selector = bb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
            }
            s(t) && (n = i, i = t, t = s);
            var a = this;
            return a.last = xw, t === s ? xw(a) : t ? a[t] = xw : xw
        }, ve.ignore = function ignore(t) {
            var e = l;
            l = null, t(this), l = e
        }, ve.getTweens = function getTweens() {
            var e = [];
            return this.data.forEach(function(t) {
                return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof $t && e.push(t)
            }), e
        }, ve.clear = function clear() {
            this._r.length = this.data.length = 0
        }, ve.kill = function kill(e, t) {
            var r = this;
            if (e ? (this.getTweens().map(function(t) {
                    return {
                        g: t.globalTime(0),
                        t: t
                    }
                }).sort(function(t, e) {
                    return e.g - t.g || -1
                }).forEach(function(t) {
                    return t.t.revert(e)
                }), this.data.forEach(function(t) {
                    return !(t instanceof Vt) && t.revert && t.revert(e)
                }), this._r.forEach(function(t) {
                    return t(e, r)
                }), this.isReverted = !0) : this.data.forEach(function(t) {
                    return t.kill && t.kill()
                }), this.clear(), t) {
                var i = ye.indexOf(this);
                ~i && ye.splice(i, 1)
            }
        }, ve.revert = function revert(t) {
            this.kill(t || {})
        }, Context);

    function Context(t, e) {
        this.selector = e && bb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
    }
    var Oe, ke = ((Oe = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new Me(0, r || this.scope),
            o = s.conditions = {};
        for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Cc) : i.addEventListener("change", Cc));
        return a && e(s), this
    }, Oe.revert = function revert(t) {
        this.kill(t || {})
    }, Oe.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t
    }
    var Pe = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return function _createPlugin(t) {
                    var e = (t = !t.name && t.default || t).name,
                        r = s(t),
                        i = e && !r && t.init ? function() {
                            this._props = []
                        } : t,
                        n = {
                            init: T,
                            render: ce,
                            add: qt,
                            kill: pe,
                            modifier: de,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: ee,
                            aliases: {},
                            register: 0
                        };
                    if (Rt(), t !== i) {
                        if (dt[e]) return;
                        pa(i, pa(ta(t, n), a)), vt(i.prototype, vt(n, ta(t, a))), dt[i.prop = e] = i, t.targetTest && (mt.push(i), lt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                    }
                    S(e, i), t.register && t.register(Ce, i, me)
                }(t)
            })
        },
        timeline: function timeline(t) {
            return new Qt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return B.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Ot(i)[0]);
            var a = ea(i || {}).get,
                s = e ? oa : na;
            return "native" === e && (e = ""), i ? t ? s((dt[t] && dt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((dt[t] && dt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Ot(r)).length) {
                var n = r.map(function(t) {
                        return Ce.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = dt[e],
                o = ea(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && ce(1, c)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function Mx(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = Ce.to(t, vt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
            return Mx.tween = n, Mx
        },
        isTweening: function isTweening(t) {
            return 0 < B.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Lt(t.ease, U.ease)), sa(U, t || {})
        },
        config: function config(t) {
            return sa(V, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !dt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), pt[i] = function(t, e, r) {
                return n(Ot(t), pa(e || {}, a), r)
            }, r && (Qt.prototype[i] = function(t, e, r) {
                return this.add(pt[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            Et[t] = Lt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Lt(t, e) : Et
        },
        getById: function getById(t) {
            return B.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Qt(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), B.remove(n), n._dp = 0, n._time = n._tTime = B._time, r = B._first; r;) i = r._next, !e && !r._dur && r instanceof $t && r.vars.onComplete === r._targets[0] || Ja(n, r, r._start - r._delay), r = i;
            return Ja(B, n, 0), n
        },
        context: function context(t, e) {
            return t ? new Me(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new ke(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return ye.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Cc()
        },
        addEventListener: function addEventListener(t, e) {
            var r = Te[t] || (Te[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = Te[t],
                i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return K(e) ? kb(e, wrap(0, e.length), t) : Va(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return K(e) ? kb(e, wrapYoyo(0, e.length - 1), t) : Va(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: db,
            random: gb,
            snap: fb,
            normalize: function normalize(t, e, r) {
                return kt(t, e, 0, 1, r)
            },
            getUnit: Xa,
            clamp: function clamp(e, r, t) {
                return Va(t, function(t) {
                    return xt(e, r, t)
                })
            },
            splitColor: yb,
            toArray: Ot,
            selector: bb,
            mapRange: kt,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Xa(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e),
                        c = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (K(e) && !K(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = vt(K(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) qt.call(c, e, s, "get", i[s]);
                        a = function func(t) {
                            return ce(t, c) || (f ? e.p : e)
                        }
                    }
                }
                return Va(t, a)
            },
            shuffle: cb
        },
        install: P,
        effects: pt,
        ticker: zt,
        updateRoot: Qt.updateRoot,
        plugins: dt,
        globalTimeline: B,
        core: {
            PropTween: me,
            globals: S,
            Tween: $t,
            Timeline: Qt,
            Animation: Vt,
            getCache: ea,
            _removeLinkedListItem: xa,
            reverting: function reverting() {
                return I
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return F = t
            }
        }
    };
    ga("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Pe[t] = $t[t]
    }), zt.add(Qt.updateRoot), c = Pe.to({}, {
        duration: 0
    });

    function Gc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Ic(t, a) {
        return {
            name: t,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {}, ga(n, function(t) {
                            return e[t] = 1
                        }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var Ce = Pe.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r;) I ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Ic("roundProps", eb), Ic("modifiers"), Ic("snap", fb)) || Pe;
    $t.version = Qt.version = Ce.version = "3.11.1", o = 1, x() && Rt();

    function sd(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function td(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function ud(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function vd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function wd(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function xd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function yd(t, e, r) {
        return t.style[e] = r
    }

    function zd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Ad(t, e, r) {
        return t._gsap[e] = r
    }

    function Bd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Cd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Dd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Gd(t) {
        var e = this,
            r = this.target,
            i = r.style;
        if (t in er) {
            if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = ur[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                    return e.tfm[t] = _r(r, t)
                }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : _r(r, t)), 0 <= this.props.indexOf(hr)) return;
            r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(lr, "")), t = hr
        }
        i && this.props.push(t, i[t])
    }

    function Hd(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Id() {
        var t, e, r = this.props,
            i = this.target,
            n = i.style,
            a = i._gsap;
        for (t = 0; t < r.length; t += 2) r[t + 1] ? n[r[t]] = r[t + 1] : n.removeProperty(r[t].replace(ar, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Fe()) || t.isStart || n[hr] || (Hd(n), a.uncache = 1)
        }
    }

    function Jd(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Id,
            save: Gd
        };
        return e && e.split(",").forEach(function(t) {
            return r.save(t)
        }), r
    }

    function Ld(t, e) {
        var r = Ae.createElementNS ? Ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Ae.createElement(t);
        return r.style ? r : Ae.createElement(t)
    }

    function Md(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(ar, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Md(t, cr(e) || e, 1) || ""
    }

    function Pd() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (Se = window, Ae = Se.document, De = Ae.documentElement, Re = Ld("div") || {
            style: {}
        }, Ld("div"), hr = cr(hr), lr = hr + "Origin", Re.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ie = !!cr("perspective"), Fe = Ce.core.reverting, ze = 1)
    }

    function Qd(t) {
        var e, r = Ld("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            i = this.parentNode,
            n = this.nextSibling,
            a = this.style.cssText;
        if (De.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
            e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Qd
        } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
        return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), De.removeChild(r), this.style.cssText = a, e
    }

    function Rd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Sd(e) {
        var r;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Qd.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Qd || (r = Qd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
            x: +Rd(e, ["x", "cx", "x1"]) || 0,
            y: +Rd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Td(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Sd(t))
    }

    function Ud(t, e) {
        if (e) {
            var r = t.style;
            e in er && e !== lr && (e = hr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(ar, "-$1").toLowerCase())) : r.removeAttribute(e)
        }
    }

    function Vd(t, e, r, i, n, a) {
        var s = new me(t._pt, e, r, 0, 1, a ? xd : wd);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function Yd(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Re.style,
            f = sr.test(e),
            c = "svg" === t.tagName.toLowerCase(),
            d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            _ = "%" === i;
        return i === h || !u || dr[i] || dr[h] ? u : ("px" === h || p || (u = Yd(t, e, r, "px")), o = t.getCTM && Td(t), !_ && "%" !== h || !er[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Ae && a.appendChild || (a = Ae.body), (s = a._gsap) && _ && s.width && f && s.time === zt.time && !s.uncache ? ha(u / s.width * 100) : (!_ && "%" !== h || pr[Md(a, "display")] || (l.position = Md(t, "position")), a === t && (l.position = "static"), a.appendChild(Re), n = Re[d], a.removeChild(Re), l.position = "absolute", f && _ && ((s = ea(a)).time = zt.time, s.width = a[d]), ha(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ha(_ ? u / n * 100 : u / 100 * n)))
    }

    function $d(t, e, r, i) {
        if (!r || "none" === r) {
            var n = cr(e, t, 1),
                a = n && Md(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Md(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, c, d, p, _, m, g = new me(this._pt, t.style, e, 0, 1, oe),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Md(t, e) || i, t.style[e] = r), Db(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ja(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || V.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Yd(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: d - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? xd : wd;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function ae(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = mr[r] || r, e[1] = mr[i] || i, e.join(" ")
    }

    function be(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], er[r] && (i = 1, r = "transformOrigin" === r ? lr : hr), Ud(a, r);
            i && (Ud(a, hr), u && (u.svg && a.removeAttribute("transform"), Tr(a, 1), u.uncache = 1, Hd(s)))
        }
    }

    function fe(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function ge(t) {
        var e = Md(t, hr);
        return fe(e) ? vr : e.substr(7).match(et).map(ha)
    }

    function he(t, e) {
        var r, i, n, a, s = t._gsap || ea(t),
            o = t.style,
            u = ge(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? vr : u : (u !== vr || t.offsetParent || t === De || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, De.appendChild(t)), u = ge(t), n ? o.display = n : Ud(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : De.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function ie(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || he(t, !0),
            f = h.xOrigin || 0,
            c = h.yOrigin || 0,
            d = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== vr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Sd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[lr] = "0px 0px", a && (Vd(a, h, "xOrigin", f, w), Vd(a, h, "yOrigin", c, x), Vd(a, h, "xOffset", d, h.xOffset), Vd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function le(t, e, r) {
        var i = Xa(e);
        return ha(parseFloat(e) + parseFloat(Yd(t, "x", r + "px", i))) + i
    }

    function se(t, e, i, n, a) {
        var s, o, u = 360,
            h = r(a),
            l = parseFloat(a) * (h && ~a.indexOf("rad") ? rr : 1) - n,
            f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new me(t._pt, e, i, n, l, td), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function te(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function ue(t, e, r) {
        var i, n, a, s, o, u, h, l = te({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[hr] = e, i = Tr(r, 1), Ud(r, hr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[hr], f[hr] = e, i = Tr(r, 1), f[hr] = a), er)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Xa(a) !== (h = Xa(s)) ? Yd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new me(t._pt, i, n, o, u - o, sd), t._pt.u = h || 0, t._props.push(n));
        te(i, l)
    }
    var Se, Ae, De, ze, Re, Ee, Fe, Ie, Be = Et.Power0,
        Le = Et.Power1,
        Xe = Et.Power2,
        Ye = Et.Power3,
        Ve = Et.Power4,
        Qe = Et.Linear,
        Ue = Et.Quad,
        Ne = Et.Cubic,
        qe = Et.Quart,
        je = Et.Quint,
        Ge = Et.Strong,
        Je = Et.Elastic,
        He = Et.Back,
        $e = Et.SteppedEase,
        We = Et.Bounce,
        Ze = Et.Sine,
        Ke = Et.Expo,
        tr = Et.Circ,
        er = {},
        rr = 180 / Math.PI,
        ir = Math.PI / 180,
        nr = Math.atan2,
        ar = /([A-Z])/g,
        sr = /(left|right|width|margin|padding|x)/i,
        or = /[\s,\(]\S/,
        ur = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        hr = "transform",
        lr = hr + "Origin",
        fr = "O,Moz,ms,Ms,Webkit".split(","),
        cr = function _checkPropPrefix(t, e, r) {
            var i = (e || Re).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(fr[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? fr[n] : "") + t
        },
        dr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        pr = {
            grid: 1,
            flex: 1
        },
        _r = function _get(t, e, r, i) {
            var n;
            return ze || Pd(), e in ur && "transform" !== e && ~(e = ur[e]).indexOf(",") && (e = e.split(",")[0]), er[e] && "transform" !== e ? (n = Tr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : br(Md(t, lr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = gr[e] && gr[e](t, e, r) || Md(t, e) || fa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Yd(t, e, n, r) + r : n
        },
        mr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        gr = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new me(t._pt, e, r, 0, 0, be);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        vr = [1, 0, 0, 1, 0, 0],
        yr = {},
        Tr = function _parseTransform(t, e) {
            var r = t._gsap || new Yt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, M, O, k, P, C, S, A, D, z, R, E, F = t.style,
                I = r.scaleX < 0,
                B = "deg",
                L = getComputedStyle(t),
                X = Md(t, lr) || "0";
            return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Td(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[hr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + L[hr]), F.scale = F.rotate = F.translate = "none"), m = he(t, r.svg), r.svg && (k = r.uncache ? (P = t.getBBox(), X = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), ie(t, k || X, !!k || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== vr && (T = m[0], b = m[1], w = m[2], x = m[3], i = M = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? nr(b, T) * rr : 0, (f = w || x ? nr(w, x) * rr + u : 0) && (o *= Math.abs(Math.cos(f * ir))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (E = m[6], z = m[7], S = m[8], A = m[9], D = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = nr(E, D)) * rr, g && (k = M * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), P = O * v + A * y, C = E * v + D * y, S = M * -y + S * v, A = O * -y + A * v, D = E * -y + D * v, R = z * -y + R * v, M = k, O = P, E = C), l = (g = nr(-w, D)) * rr, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = k = T * v - S * y, b = P = b * v - A * y, w = C = w * v - D * y), u = (g = nr(b, T)) * rr, g && (k = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = M * v + O * y, b = b * v - T * y, O = O * v - M * y, T = k, M = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ha(Math.sqrt(T * T + b * b + w * w)), o = ha(Math.sqrt(O * O + E * E)), g = nr(M, O), f = 2e-4 < Math.abs(g) ? g * rr : 0, d = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (k = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !fe(Md(t, hr)), k && t.setAttribute("transform", k))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ha(s), r.scaleY = ha(o), r.rotation = ha(u) + B, r.rotationX = ha(h) + B, r.rotationY = ha(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(X.split(" ")[2]) || 0) && (F[lr] = br(X)), r.xOffset = r.yOffset = 0, r.force3D = V.force3D, r.renderTransform = r.svg ? Pr : Ie ? kr : wr, r.uncache = 0, r
        },
        br = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        wr = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, kr(t, e)
        },
        xr = "0deg",
        Mr = "0px",
        Or = ") ",
        kr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                c = r.skewY,
                d = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== xr || h !== xr)) {
                var b, w = parseFloat(h) * ir,
                    x = Math.sin(w),
                    M = Math.cos(w);
                w = parseFloat(l) * ir, b = Math.cos(w), a = le(g, a, x * b * -v), s = le(g, s, -Math.sin(w) * -v), o = le(g, o, M * b * -v + v)
            }
            _ !== Mr && (y += "perspective(" + _ + Or), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or), u !== xr && (y += "rotate(" + u + Or), h !== xr && (y += "rotateY(" + h + Or), l !== xr && (y += "rotateX(" + l + Or), f === xr && c === xr || (y += "skew(" + f + ", " + c + Or), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or), g.style[hr] = y || "translate(0, 0)"
        },
        Pr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                c = o.rotation,
                d = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                M = parseFloat(f);
            c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= ir, d *= ir, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= ir, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ha(r), i = ha(i), n = ha(n), a = ha(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (x = Yd(g, "x", l, "px"), M = Yd(g, "y", f, "px")), (v || y || T || b) && (x = ha(x + v - (v * r + y * n) + T), M = ha(M + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ha(x + u / 100 * s.width), M = ha(M + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + M + ")", g.setAttribute("transform", s), w && (g.style[hr] = s)
        };
    ga("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        gr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return _r(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Cr, Sr, Ar, Dr = {
        name: "css",
        register: Pd,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
                x = t.style,
                M = i.vars.startAt;
            for (c in ze || Pd(), this.styles = this.styles || Jd(t), b = this.styles.props, this.tween = i, e)
                if ("autoRound" !== c && (o = e[c], !dt[c] || !$b(c, e, i, n, t, a)))
                    if (l = typeof o, f = gr[c], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = nb(o)), f) f(this, t, c, o, i) && (T = 1);
                    else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", At.lastIndex = 0, At.test(s) || (d = Xa(s), p = Xa(o)), p ? d !== p && (s = Yd(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, x[c]);
            else if ("undefined" !== l) {
                if (M && c in M ? (s = "function" == typeof M[c] ? M[c].call(i, n, t, a) : M[c], r(s) && ~s.indexOf("random(") && (s = nb(s)), Xa(s + "") || (s += V.units[c] || Xa(_r(t, c)) || ""), "=" === (s + "").charAt(1) && (s = _r(t, c))) : s = _r(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in ur && ("autoAlpha" === c && (1 === h && "hidden" === _r(t, "visibility") && u && (h = 0), b.push("visibility", x.visibility), Vd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = ur[c]).indexOf(",") && (c = c.split(",")[0])), m = c in er)
                    if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || Tr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new me(this._pt, x, hr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new me(this._pt, v, "scaleY", v.scaleY, (_ ? ja(v.scaleY, _ + u) : u) - v.scaleY || 0, sd), this._pt.u = 0, w.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            b.push(lr, x[lr]), o = ae(o), v.svg ? ie(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Vd(this, v, "zOrigin", v.zOrigin, p), Vd(this, x, c, br(s), br(o)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            ie(t, o, 1, y, 0, this);
                            continue
                        }
                        if (c in yr) {
                            se(this, v, c, h, _ ? ja(h, _ + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            Vd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = o;
                            continue
                        }
                        if ("transform" === c) {
                            ue(this, o, t);
                            continue
                        }
                    }
                else c in x || (c = cr(c) || c);
                if (m || (u || 0 === u) && (h || 0 === h) && !or.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Xa(o) || (c in V.units ? V.units[c] : d)) && (h = Yd(t, c, s, p)), this._pt = new me(this._pt, m ? v : x, c, h, (_ ? ja(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? sd : vd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = ud);
                else if (c in x) $d.call(this, t, c, s, _ ? _ + o : o);
                else {
                    if (!(c in t)) {
                        Q(c, o);
                        continue
                    }
                    this.add(t, c, s || t[c], _ ? _ + o : o, n, a)
                }
                m || b.push(c, x[c]), w.push(c)
            }
            T && _e(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Fe())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: _r,
        aliases: ur,
        getSetter: function getSetter(t, e, r) {
            var i = ur[e];
            return i && i.indexOf(",") < 0 && (e = i), e in er && e !== lr && (t._gsap.x || _r(t, "x")) ? r && Ee === r ? "scale" === e ? Bd : Ad : (Ee = r || {}) && ("scale" === e ? Cd : Dd) : t.style && !u(t.style[e]) ? yd : ~e.indexOf("-") ? zd : ee(t, e)
        },
        core: {
            _removeProperty: Ud,
            _getMatrix: he
        }
    };
    Ce.utils.checkPrefix = cr, Ce.core.getStyleSaver = Jd, Ar = ga((Cr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        er[t] = 1
    }), ga(Sr, function(t) {
        V.units[t] = "deg", yr[t] = 1
    }), ur[Ar[13]] = Cr + "," + Sr, ga("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        ur[e[1]] = Ar[e[0]]
    }), ga("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        V.units[t] = "px"
    }), Ce.registerPlugin(Dr);
    var zr = Ce.registerPlugin(Dr) || Ce,
        Rr = zr.core.Tween;
    e.Back = He, e.Bounce = We, e.CSSPlugin = Dr, e.Circ = tr, e.Cubic = Ne, e.Elastic = Je, e.Expo = Ke, e.Linear = Qe, e.Power0 = Be, e.Power1 = Le, e.Power2 = Xe, e.Power3 = Ye, e.Power4 = Ve, e.Quad = Ue, e.Quart = qe, e.Quint = je, e.Sine = Ze, e.SteppedEase = $e, e.Strong = Ge, e.TimelineLite = Qt, e.TimelineMax = Qt, e.TweenLite = $t, e.TweenMax = Rr, e.default = zr, e.gsap = zr;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});