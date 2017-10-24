if (function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = $.type(a);
            return "function" !== c && !$.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
        }

        function d(a, b, c) {
            if ($.isFunction(b)) return $.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return $.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ga.test(b)) return $.filter(b, a, c);
                b = $.filter(b, a)
            }
            return $.grep(a, function(a) {
                return U.call(b, a) >= 0 !== c
            })
        }

        function e(a, b) {
            for (;
                (a = a[b]) && 1 !== a.nodeType;);
            return a
        }

        function f(a) {
            var b = ma[a] = {};
            return $.each(a.match(la) || [], function(a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), $.ready()
        }

        function h() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = $.expando + h.uid++
        }

        function i(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(sa, "-$1").toLowerCase(), "string" == typeof(c = a.getAttribute(d))) {
                    try {
                        c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ra.test(c) ? $.parseJSON(c) : c)
                    } catch (a) {}
                    qa.set(a, b, c)
                } else c = void 0;
            return c
        }

        function j() {
            return !0
        }

        function k() {
            return !1
        }

        function l() {
            try {
                return Z.activeElement
            } catch (a) {}
        }

        function m(a, b) {
            return $.nodeName(a, "table") && $.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function n(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
        }

        function o(a) {
            var b = Ha.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function p(a, b) {
            for (var c = 0, d = a.length; c < d; c++) pa.set(a[c], "globalEval", !b || pa.get(b[c], "globalEval"))
        }

        function q(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (pa.hasData(a) && (f = pa.access(a), g = pa.set(b, f), j = f.events)) {
                    delete g.handle, g.events = {};
                    for (e in j)
                        for (c = 0, d = j[e].length; c < d; c++) $.event.add(b, e, j[e][c])
                }
                qa.hasData(a) && (h = qa.access(a), i = $.extend({}, h), qa.set(b, i))
            }
        }

        function r(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && $.nodeName(a, b) ? $.merge([a], c) : c
        }

        function s(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && wa.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }

        function t(b, c) {
            var d, e = $(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : $.css(e[0], "display");
            return e.detach(), f
        }

        function u(a) {
            var b = Z,
                c = La[a];
            return c || (c = t(a, b), "none" !== c && c || (Ka = (Ka || $("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ka[0].contentDocument, b.write(), b.close(), c = t(a, b), Ka.detach()), La[a] = c), c
        }

        function v(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Oa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || $.contains(a.ownerDocument, a) || (g = $.style(a, b)), Na.test(g) && Ma.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
        }

        function w(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }

        function x(a, b) {
            if (b in a) return b;
            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ua.length; e--;)
                if ((b = Ua[e] + c) in a) return b;
            return d
        }

        function y(a, b, c) {
            var d = Qa.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function z(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) "margin" === c && (g += $.css(a, c + ua[f], !0, e)), d ? ("content" === c && (g -= $.css(a, "padding" + ua[f], !0, e)), "margin" !== c && (g -= $.css(a, "border" + ua[f] + "Width", !0, e))) : (g += $.css(a, "padding" + ua[f], !0, e), "padding" !== c && (g += $.css(a, "border" + ua[f] + "Width", !0, e)));
            return g
        }

        function A(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = Oa(a),
                g = "border-box" === $.css(a, "boxSizing", !1, f);
            if (e <= 0 || null == e) {
                if (e = v(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Na.test(e)) return e;
                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function B(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) d = a[g], d.style && (f[g] = pa.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && va(d) && (f[g] = pa.access(d, "olddisplay", u(d.nodeName)))) : (e = va(d), "none" === c && e || pa.set(d, "olddisplay", e ? c : $.css(d, "display"))));
            for (g = 0; g < h; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function C(a, b, c, d, e) {
            return new C.prototype.init(a, b, c, d, e)
        }

        function D() {
            return setTimeout(function() {
                Va = void 0
            }), Va = $.now()
        }

        function E(a, b) {
            var c, d = 0,
                e = {
                    height: a
                };
            for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ua[d], e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a), e
        }

        function F(a, b, c) {
            for (var d, e = (_a[b] || []).concat(_a["*"]), f = 0, g = e.length; f < g; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function G(a, b, c) {
            var d, e, f, g, h, i, j, k = this,
                l = {},
                m = a.style,
                n = a.nodeType && va(a),
                o = pa.get(a, "fxshow");
            c.queue || (h = $._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                h.unqueued || i()
            }), h.unqueued++, k.always(function() {
                k.always(function() {
                    h.unqueued--, $.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = $.css(a, "display"), "inline" === ("none" === j ? pa.get(a, "olddisplay") || u(a.nodeName) : j) && "none" === $.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() {
                m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], Xa.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                        if ("show" !== e || !o || void 0 === o[d]) continue;
                        n = !0
                    }
                    l[d] = o && o[d] || $.style(a, d)
                } else j = void 0;
            if ($.isEmptyObject(l)) "inline" === ("none" === j ? u(a.nodeName) : j) && (m.display = j);
            else {
                o ? "hidden" in o && (n = o.hidden) : o = pa.access(a, "fxshow", {}), f && (o.hidden = !n), n ? $(a).show() : k.done(function() {
                    $(a).hide()
                }), k.done(function() {
                    var b;
                    pa.remove(a, "fxshow");
                    for (b in l) $.style(a, b, l[b])
                });
                for (d in l) g = F(n ? o[d] : 0, d, k), d in o || (o[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function H(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = $.camelCase(c), e = b[d], f = a[c], $.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = $.cssHooks[d]) && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function I(a, b, c) {
            var d, e, f = 0,
                g = $a.length,
                h = $.Deferred().always(function() {
                    delete i.elem
                }),
                i = function() {
                    if (e) return !1;
                    for (var b = Va || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: $.extend({}, b),
                    opts: $.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: Va || D(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = $.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; c < d; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (H(k, j.opts.specialEasing); f < g; f++)
                if (d = $a[f].call(j, a, k, j.opts)) return d;
            return $.map(k, F, j), $.isFunction(j.opts.start) && j.opts.start.call(a, j), $.fx.timer($.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function J(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(la) || [];
                if ($.isFunction(c))
                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function K(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, $.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === pb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function L(a, b) {
            var c, d, e = $.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && $.extend(!0, a, d), a
        }

        function M(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                 "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            if (f) return f !== i[0] && i.unshift(f), c[f]
        }

        function N(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                        if (!(g = j[i + " " + f] || j["* " + f]))
                            for (e in j)
                                if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
                                    break
                                }
                        if (!0 !== g)
                            if (g && a.throws) b = g(b);
                            else try {
                                b = g(b)
                            } catch (a) {
                                return {
                                    state: "parsererror",
                                    error: g ? a : "No conversion from " + i + " to " + f
                                }
                            }
                    }
            return {
                state: "success",
                data: b
            }
        }

        function O(a, b, c, d) {
            var e;
            if ($.isArray(b)) $.each(b, function(b, e) {
                c || ub.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== $.type(b)) d(a, b);
            else
                for (e in b) O(a + "[" + e + "]", b[e], c, d)
        }

        function P(a) {
            return $.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        var Q = [],
            R = Q.slice,
            S = Q.concat,
            T = Q.push,
            U = Q.indexOf,
            V = {},
            W = V.toString,
            X = V.hasOwnProperty,
            Y = {},
            Z = a.document,
            $ = function(a, b) {
                return new $.fn.init(a, b)
            },
            _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            aa = /^-ms-/,
            ba = /-([\da-z])/gi,
            ca = function(a, b) {
                return b.toUpperCase()
            };
        $.fn = $.prototype = {
            jquery: "2.1.4",
            constructor: $,
            selector: "",
            length: 0,
            toArray: function() {
                return R.call(this)
            },
            get: function(a) {
                return null != a ? a < 0 ? this[a + this.length] : this[a] : R.call(this)
            },
            pushStack: function(a) {
                var b = $.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return $.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack($.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(R.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (a < 0 ? b : 0);
                return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: T,
            sort: Q.sort,
            splice: Q.splice
        }, $.extend = $.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || $.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++)
                if (null != (a = arguments[h]))
                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && ($.isPlainObject(d) || (e = $.isArray(d))) ? (e ? (e = !1, f = c && $.isArray(c) ? c : []) : f = c && $.isPlainObject(c) ? c : {}, g[b] = $.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }, $.extend({
            expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === $.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !$.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isPlainObject: function(a) {
                return "object" === $.type(a) && !a.nodeType && !$.isWindow(a) && !(a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                (a = $.trim(a)) && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(aa, "ms-").replace(ba, ca)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, d) {
                var e = 0,
                    f = a.length,
                    g = c(a);
                if (d) {
                    if (g)
                        for (; e < f && !1 !== b.apply(a[e], d); e++);
                    else
                        for (e in a)
                            if (!1 === b.apply(a[e], d)) break
                } else if (g)
                    for (; e < f && !1 !== b.call(a[e], e, a[e]); e++);
                else
                    for (e in a)
                        if (!1 === b.call(a[e], e, a[e])) break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(_, "")
            },
            makeArray: function(a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? $.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : U.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) !b(a[e], e) !== g && d.push(a[e]);
                return d
            },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; f < g; f++) null != (e = b(a[f], f, d)) && i.push(e);
                else
                    for (f in a) null != (e = b(a[f], f, d)) && i.push(e);
                return S.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, d, e;
                if ("string" == typeof b && (c = a[b], b = a, a = c), $.isFunction(a)) return d = R.call(arguments, 2), e = function() {
                    return a.apply(b || this, d.concat(R.call(arguments)))
                }, e.guid = a.guid = a.guid || $.guid++, e
            },
            now: Date.now,
            support: Y
        }), $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            V["[object " + b + "]"] = b.toLowerCase()
        });
        var da = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, j, l, m, n, o, p;
                if ((b ? b.ownerDocument || b : M) !== E && D(b), b = b || E, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && G) {
                    if (11 !== h && (e = qa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (!(f = b.getElementById(g)) || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && K(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return Y.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && t.getElementsByClassName) return Y.apply(c, b.getElementsByClassName(g)), c
                        }
                    if (t.qsa && (!H || !H.test(a))) {
                        if (n = m = L, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (l = x(a), (m = b.getAttribute("id")) ? n = m.replace(sa, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", j = l.length; j--;) l[j] = n + k(l[j]);
                            o = ra.test(a) && i(b.parentNode) || b, p = l.join(",")
                        }
                        if (p) try {
                            return Y.apply(c, o.querySelectorAll(p)), c
                        } catch (a) {} finally {
                            m || b.removeAttribute("id")
                        }
                    }
                }
                return z(a.replace(ga, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > u.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[L] = !0, a
            }

            function e(a) {
                var b = E.createElement("div");
                try {
                    return !!a(b)
                } catch (a) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) u.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || T) - (~a.sourceIndex || T);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return d(function(b) {
                    return b = +b, d(function(c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function i(a) {
                return a && void 0 !== a.getElementsByTagName && a
            }

            function j() {}

            function k(a) {
                for (var b = 0, c = a.length, d = ""; b < c; b++) d += a[b].value;
                return d
            }

            function l(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = O++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [N, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[L] || (b[L] = {}), (h = i[d]) && h[0] === N && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function m(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function n(a, c, d) {
                for (var e = 0, f = c.length; e < f; e++) b(a, c[e], d);
                return d
            }

            function o(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
                return g
            }

            function p(a, b, c, e, f, g) {
                return e && !e[L] && (e = p(e)), f && !f[L] && (f = p(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        p = [],
                        q = g.length,
                        r = d || n(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : o(r, m, a, h, i),
                        t = c ? f || (d ? a : q || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = o(t, p), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[p[k]] = !(s[p[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? $(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = o(t === g ? t.splice(q, t.length) : t), f ? f(null, g, t, i) : Y.apply(g, t)
                })
            }

            function q(a) {
                for (var b, c, d, e = a.length, f = u.relative[a[0].type], g = f || u.relative[" "], h = f ? 1 : 0, i = l(function(a) {
                    return a === b
                }, g, !0), j = l(function(a) {
                    return $(b, a) > -1
                }, g, !0), n = [function(a, c, d) {
                    var e = !f && (d || c !== A) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; h < e; h++)
                    if (c = u.relative[a[h].type]) n = [l(m(n), c)];
                    else {
                        if (c = u.filter[a[h].type].apply(null, a[h].matches), c[L]) {
                            for (d = ++h; d < e && !u.relative[a[d].type]; d++);
                            return p(h > 1 && m(n), h > 1 && k(a.slice(0, h - 1).concat({
                                    value: " " === a[h - 2].type ? "*" : ""
                                })).replace(ga, "$1"), c, h < d && q(a.slice(h, d)), d < e && q(a = a.slice(d)), d < e && k(a))
                        }
                        n.push(c)
                    }
                return m(n)
            }

            function r(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            p = "0",
                            q = d && [],
                            r = [],
                            s = A,
                            t = d || f && u.find.TAG("*", j),
                            v = N += null == s ? 1 : Math.random() || .1,
                            w = t.length;
                        for (j && (A = g !== E && g); p !== w && null != (k = t[p]); p++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    }
                                j && (N = v)
                            }
                            e && ((k = !m && k) && n--, d && q.push(k))
                        }
                        if (n += p, e && p !== n) {
                            for (l = 0; m = c[l++];) m(q, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; p--;) q[p] || r[p] || (r[p] = W.call(i));
                                r = o(r)
                            }
                            Y.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (N = v, A = s), q
                    };
                return e ? d(g) : g
            }
            var s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = "sizzle" + 1 * new Date,
                M = a.document,
                N = 0,
                O = 0,
                P = c(),
                Q = c(),
                R = c(),
                S = function(a, b) {
                    return a === b && (C = !0), 0
                },
                T = 1 << 31,
                U = {}.hasOwnProperty,
                V = [],
                W = V.pop,
                X = V.push,
                Y = V.push,
                Z = V.slice,
                $ = function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                aa = "[\\x20\\t\\r\\n\\f]",
                ba = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ca = ba.replace("w", "w#"),
                da = "\\[" + aa + "*(" + ba + ")(?:" + aa + "*([*^$|!~]?=)" + aa + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ca + "))|)" + aa + "*\\]",
                ea = ":(" + ba + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + da + ")*)|.*)\\)|)",
                fa = new RegExp(aa + "+", "g"),
                ga = new RegExp("^" + aa + "+|((?:^|[^\\\\])(?:\\\\.)*)" + aa + "+$", "g"),
                ha = new RegExp("^" + aa + "*," + aa + "*"),
                ia = new RegExp("^" + aa + "*([>+~]|" + aa + ")" + aa + "*"),
                ja = new RegExp("=" + aa + "*([^\\]'\"]*?)" + aa + "*\\]", "g"),
                ka = new RegExp(ea),
                la = new RegExp("^" + ca + "$"),
                ma = {
                    ID: new RegExp("^#(" + ba + ")"),
                    CLASS: new RegExp("^\\.(" + ba + ")"),
                    TAG: new RegExp("^(" + ba.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + da),
                    PSEUDO: new RegExp("^" + ea),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + aa + "*(even|odd|(([+-]|)(\\d*)n|)" + aa + "*(?:([+-]|)" + aa + "*(\\d+)|))" + aa + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + _ + ")$", "i"),
                    needsContext: new RegExp("^" + aa + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + aa + "*((?:-\\d)?\\d*)" + aa + "*\\)|)(?=[^-]|$)", "i")
                },
                na = /^(?:input|select|textarea|button)$/i,
                oa = /^h\d$/i,
                pa = /^[^{]+\{\s*\[native \w/,
                qa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ra = /[+~]/,
                sa = /'|\\/g,
                ta = new RegExp("\\\\([\\da-f]{1,6}" + aa + "?|(" + aa + ")|.)", "ig"),
                ua = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                va = function() {
                    D()
                };
            try {
                Y.apply(V = Z.call(M.childNodes), M.childNodes), V[M.childNodes.length].nodeType
            } catch (a) {
                Y = {
                    apply: V.length ? function(a, b) {
                        X.apply(a, Z.call(b))
                    } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            t = b.support = {}, w = b.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return !!b && "HTML" !== b.nodeName
            }, D = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : M;
                return d !== E && 9 === d.nodeType && d.documentElement ? (E = d, F = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", va, !1) : c.attachEvent && c.attachEvent("onunload", va)), G = !w(d), t.attributes = e(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), t.getElementsByTagName = e(function(a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), t.getElementsByClassName = pa.test(d.getElementsByClassName), t.getById = e(function(a) {
                    return F.appendChild(a).id = L, !d.getElementsByName || !d.getElementsByName(L).length
                }), t.getById ? (u.find.ID = function(a, b) {
                    if (void 0 !== b.getElementById && G) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, u.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete u.find.ID, u.filter.ID = function(a) {
                    var b = a.replace(ta, ua);
                    return function(a) {
                        var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), u.find.TAG = t.getElementsByTagName ? function(a, b) {
                    return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : t.qsa ? b.querySelectorAll(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, u.find.CLASS = t.getElementsByClassName && function(a, b) {
                        if (G) return b.getElementsByClassName(a)
                    }, I = [], H = [], (t.qsa = pa.test(d.querySelectorAll)) && (e(function(a) {
                    F.appendChild(a).innerHTML = "<a id='" + L + "'></a><select id='" + L + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + aa + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || H.push("\\[" + aa + "*(?:value|" + _ + ")"), a.querySelectorAll("[id~=" + L + "-]").length || H.push("~="), a.querySelectorAll(":checked").length || H.push(":checked"), a.querySelectorAll("a#" + L + "+*").length || H.push(".#.+[+~]")
                }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && H.push("name" + aa + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), H.push(",.*:")
                })), (t.matchesSelector = pa.test(J = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && e(function(a) {
                    t.disconnectedMatch = J.call(a, "div"), J.call(a, "[s!='']:x"), I.push("!=", ea)
                }), H = H.length && new RegExp(H.join("|")), I = I.length && new RegExp(I.join("|")), b = pa.test(F.compareDocumentPosition), K = b || pa.test(F.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, S = b ? function(a, b) {
                    if (a === b) return C = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c || (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !t.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === M && K(M, a) ? -1 : b === d || b.ownerDocument === M && K(M, b) ? 1 : B ? $(B, a) - $(B, b) : 0 : 4 & c ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return C = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : B ? $(B, a) - $(B, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === M ? -1 : j[e] === M ? 1 : 0
                }, d) : E
            }, b.matches = function(a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== E && D(a), c = c.replace(ja, "='$1']"), t.matchesSelector && G && (!I || !I.test(c)) && (!H || !H.test(c))) try {
                    var d = J.call(a, c);
                    if (d || t.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (a) {}
                return b(c, E, null, [a]).length > 0
            }, b.contains = function(a, b) {
                return (a.ownerDocument || a) !== E && D(a), K(a, b)
            }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== E && D(a);
                var c = u.attrHandle[b.toLowerCase()],
                    d = c && U.call(u.attrHandle, b.toLowerCase()) ? c(a, b, !G) : void 0;
                return void 0 !== d ? d : t.attributes || !G ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (C = !t.detectDuplicates, B = !t.sortStable && a.slice(0), a.sort(S), C) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return B = null, a
            }, v = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += v(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += v(b);
                return c
            }, u = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: ma,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return ma.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ka.test(c) && (b = x(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ta, ua).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = P[a + " "];
                        return b || (b = new RegExp("(^|" + aa + ")" + a + "(" + aa + "|$)")) && P(a, function(a) {
                                return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(a, c, d) {
                        return function(e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(fa, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[L] || (q[L] = {}), j = k[a] || [], n = j[0] === N && j[1], m = j[0] === N && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [N, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[L] || (b[L] = {}))[a]) && j[0] === N) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[L] || (l[L] = {}))[a] = [N, m]), l !== b)););
                                return (m -= e) === d || m % d == 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) {
                        var e, f = u.pseudos[a] || u.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[L] ? f(c) : f.length > 1 ? (e = [a, a, "", c], u.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = $(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function(a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = y(a.replace(ga, "$1"));
                        return e[L] ? d(function(a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function(a) {
                        return function(c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function(a) {
                        return a = a.replace(ta, ua),
                            function(b) {
                                return (b.textContent || b.innerText || v(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function(a) {
                        return la.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
                            function(b) {
                                var c;
                                do {
                                    if (c = G ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-")
                                } while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === F
                    },
                    focus: function(a) {
                        return a === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return !1 === a.disabled
                    },
                    disabled: function(a) {
                        return !0 === a.disabled
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !u.pseudos.empty(a)
                    },
                    header: function(a) {
                        return oa.test(a.nodeName)
                    },
                    input: function(a) {
                        return na.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(a, b) {
                        return [b - 1]
                    }),
                    eq: h(function(a, b, c) {
                        return [c < 0 ? c + b : c]
                    }),
                    even: h(function(a, b) {
                        for (var c = 0; c < b; c += 2) a.push(c);
                        return a
                    }),
                    odd: h(function(a, b) {
                        for (var c = 1; c < b; c += 2) a.push(c);
                        return a
                    }),
                    lt: h(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: h(function(a, b, c) {
                        for (var d = c < 0 ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, u.pseudos.nth = u.pseudos.eq;
            for (s in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) u.pseudos[s] = function(a) {
                return function(b) {
                    return "input" === b.nodeName.toLowerCase() && b.type === a
                }
            }(s);
            for (s in {
                submit: !0,
                reset: !0
            }) u.pseudos[s] = function(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }(s);
            return j.prototype = u.filters = u.pseudos, u.setFilters = new j, x = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = Q[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = u.preFilter; h;) {
                    d && !(e = ha.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ia.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ga, " ")
                    }), h = h.slice(d.length));
                    for (g in u.filter) !(e = ma[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : Q(a, i).slice(0)
            }, y = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = R[a + " "];
                if (!f) {
                    for (b || (b = x(a)), c = b.length; c--;) f = q(b[c]), f[L] ? d.push(f) : e.push(f);
                    f = R(a, r(e, d)), f.selector = a
                }
                return f
            }, z = b.select = function(a, b, c, d) {
                var e, f, g, h, j, l = "function" == typeof a && a,
                    m = !d && x(a = l.selector || a);
                if (c = c || [], 1 === m.length) {
                    if (f = m[0] = m[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && t.getById && 9 === b.nodeType && G && u.relative[f[1].type]) {
                        if (!(b = (u.find.ID(g.matches[0].replace(ta, ua), b) || [])[0])) return c;
                        l && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = ma.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !u.relative[h = g.type]);)
                        if ((j = u.find[h]) && (d = j(g.matches[0].replace(ta, ua), ra.test(f[0].type) && i(b.parentNode) || b))) {
                            if (f.splice(e, 1), !(a = d.length && k(f))) return Y.apply(c, d), c;
                            break
                        }
                }
                return (l || y(a, m))(d, b, !G, c, ra.test(a) && i(b.parentNode) || b), c
            }, t.sortStable = L.split("").sort(S).join("") === L, t.detectDuplicates = !!C, D(), t.sortDetached = e(function(a) {
                return 1 & a.compareDocumentPosition(E.createElement("div"))
            }), e(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function(a, b, c) {
                if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), t.attributes && e(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function(a, b, c) {
                if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
            }), e(function(a) {
                return null == a.getAttribute("disabled")
            }) || f(_, function(a, b, c) {
                var d;
                if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        $.find = da, $.expr = da.selectors, $.expr[":"] = $.expr.pseudos, $.unique = da.uniqueSort, $.text = da.getText, $.isXMLDoc = da.isXML, $.contains = da.contains;
        var ea = $.expr.match.needsContext,
            fa = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ga = /^.[^:#\[\.,]*$/;
        $.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? $.find.matchesSelector(d, a) ? [d] : [] : $.find.matches(a, $.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, $.fn.extend({
            find: function(a) {
                var b, c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a) return this.pushStack($(a).filter(function() {
                    for (b = 0; b < c; b++)
                        if ($.contains(e[b], this)) return !0
                }));
                for (b = 0; b < c; b++) $.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? $.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
            },
            filter: function(a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function(a) {
                return !!d(this, "string" == typeof a && ea.test(a) ? $(a) : a || [], !1).length
            }
        });
        var ha, ia = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        ($.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (!(c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ia.exec(a)) || !c[1] && b) return !b || b.jquery ? (b || ha).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof $ ? b[0] : b, $.merge(this, $.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), fa.test(c[1]) && $.isPlainObject(b))
                        for (c in b) $.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : $.isFunction(a) ? void 0 !== ha.ready ? ha.ready(a) : a($) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), $.makeArray(a, this))
        }).prototype = $.fn, ha = $(Z);
        var ja = /^(?:parents|prev(?:Until|All))/,
            ka = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        $.extend({
            dir: function(a, b, c) {
                for (var d = [], e = void 0 !== c;
                     (a = a[b]) && 9 !== a.nodeType;)
                    if (1 === a.nodeType) {
                        if (e && $(a).is(c)) break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), $.fn.extend({
            has: function(a) {
                var b = $(a, this),
                    c = b.length;
                return this.filter(function() {
                    for (var a = 0; a < c; a++)
                        if ($.contains(this, b[a])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = ea.test(a) || "string" != typeof a ? $(a, b || this.context) : 0; d < e; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && $.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? $.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? U.call($(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack($.unique($.merge(this.get(), $(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), $.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return $.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return $.dir(a, "parentNode", c)
            },
            next: function(a) {
                return e(a, "nextSibling")
            },
            prev: function(a) {
                return e(a, "previousSibling")
            },
            nextAll: function(a) {
                return $.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return $.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return $.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return $.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return $.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return $.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || $.merge([], a.childNodes)
            }
        }, function(a, b) {
            $.fn[a] = function(c, d) {
                var e = $.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = $.filter(d, e)), this.length > 1 && (ka[a] || $.unique(e), ja.test(a) && e.reverse()), this.pushStack(e)
            }
        });
        var la = /\S+/g,
            ma = {};
        $.Callbacks = function(a) {
            a = "string" == typeof a ? ma[a] || f(a) : $.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && h < g; h++)
                        if (!1 === i[h].apply(f[0], f[1]) && a.stopOnFalse) {
                            b = !1;
                            break
                        }
                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                },
                l = {
                    add: function() {
                        if (i) {
                            var c = i.length;
                            ! function b(c) {
                                $.each(c, function(c, d) {
                                    var e = $.type(d);
                                    "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
                                })
                            }(arguments), d ? g = i.length : b && (e = c, k(b))
                        }
                        return this
                    },
                    remove: function() {
                        return i && $.each(arguments, function(a, b) {
                            for (var c;
                                 (c = $.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (c <= g && g--, c <= h && h--)
                        }), this
                    },
                    has: function(a) {
                        return a ? $.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function() {
                        return i = [], g = 0, this
                    },
                    disable: function() {
                        return i = j = b = void 0, this
                    },
                    disabled: function() {
                        return !i
                    },
                    lock: function() {
                        return j = void 0, b || l.disable(), this
                    },
                    locked: function() {
                        return !j
                    },
                    fireWith: function(a, b) {
                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                    },
                    fire: function() {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!c
                    }
                };
            return l
        }, $.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", $.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", $.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", $.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return $.Deferred(function(c) {
                                $.each(b, function(b, f) {
                                    var g = $.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && $.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? $.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, $.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = R.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && $.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : $.Deferred(),
                    j = function(a, c, d) {
                        return function(e) {
                            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); e < g; e++) f[e] && $.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var na;
        $.fn.ready = function(a) {
            return $.ready.promise().done(a), this
        }, $.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? $.readyWait++ : $.ready(!0)
            },
            ready: function(a) {
                (!0 === a ? --$.readyWait : $.isReady) || ($.isReady = !0, !0 !== a && --$.readyWait > 0 || (na.resolveWith(Z, [$]), $.fn.triggerHandler && ($(Z).triggerHandler("ready"), $(Z).off("ready"))))
            }
        }), $.ready.promise = function(b) {
            return na || (na = $.Deferred(), "complete" === Z.readyState ? setTimeout($.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), na.promise(b)
        }, $.ready.promise();
        var oa = $.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === $.type(c)) {
                e = !0;
                for (h in c) $.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, $.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call($(a), c)
                })), b))
                for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        };
        $.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }, h.uid = 1, h.accepts = $.acceptData, h.prototype = {
            key: function(a) {
                if (!h.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = h.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        }, Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c, $.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c
            },
            set: function(a, b, c) {
                var d, e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if ($.isEmptyObject(f)) $.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, $.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    $.isArray(b) ? d = b.concat(b.map($.camelCase)) : (e = $.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(la) || [])), c = d.length;
                    for (; c--;) delete g[d[c]]
                }
            },
            hasData: function(a) {
                return !$.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        };
        var pa = new h,
            qa = new h,
            ra = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            sa = /([A-Z])/g;
        $.extend({
            hasData: function(a) {
                return qa.hasData(a) || pa.hasData(a)
            },
            data: function(a, b, c) {
                return qa.access(a, b, c)
            },
            removeData: function(a, b) {
                qa.remove(a, b)
            },
            _data: function(a, b, c) {
                return pa.access(a, b, c)
            },
            _removeData: function(a, b) {
                pa.remove(a, b)
            }
        }), $.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = qa.get(f), 1 === f.nodeType && !pa.get(f, "hasDataAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = $.camelCase(d.slice(5)), i(f, d, e[d])));
                        pa.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    qa.set(this, a)
                }) : oa(this, function(b) {
                    var c, d = $.camelCase(a);
                    if (f && void 0 === b) {
                        if (void 0 !== (c = qa.get(f, a))) return c;
                        if (void 0 !== (c = qa.get(f, d))) return c;
                        if (void 0 !== (c = i(f, d, void 0))) return c
                    } else this.each(function() {
                        var c = qa.get(this, d);
                        qa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && qa.set(this, a, b)
                    })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    qa.remove(this, a)
                })
            }
        }), $.extend({
            queue: function(a, b, c) {
                var d;
                if (a) return b = (b || "fx") + "queue", d = pa.get(a, b), c && (!d || $.isArray(c) ? d = pa.access(a, b, $.makeArray(c)) : d.push(c)), d || []
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = $.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = $._queueHooks(a, b),
                    g = function() {
                        $.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return pa.get(a, c) || pa.access(a, c, {
                        empty: $.Callbacks("once memory").add(function() {
                            pa.remove(a, [b + "queue", c])
                        })
                    })
            }
        }), $.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? $.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = $.queue(this, a, b);
                    $._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && $.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    $.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = $.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;)(c = pa.get(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var ta = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ua = ["Top", "Right", "Bottom", "Left"],
            va = function(a, b) {
                return a = b || a, "none" === $.css(a, "display") || !$.contains(a.ownerDocument, a)
            },
            wa = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = Z.createDocumentFragment(),
                b = a.appendChild(Z.createElement("div")),
                c = Z.createElement("input");
            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        Y.focusinBubbles = "onfocusin" in a;
        var xa = /^key/,
            ya = /^(?:mouse|pointer|contextmenu)|click/,
            za = /^(?:focusinfocus|focusoutblur)$/,
            Aa = /^([^.]*)(?:\.(.+)|)$/;
        $.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = pa.get(a);
                if (q)
                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = $.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return void 0 !== $ && $.event.triggered !== b.type ? $.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(la) || [""], j = b.length; j--;) h = Aa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = $.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = $.event.special[n] || {}, k = $.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && $.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && !1 !== l.setup.call(a, d, o, g) || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), $.event.global[n] = !0)
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = pa.hasData(a) && pa.get(a);
                if (q && (i = q.events)) {
                    for (b = (b || "").match(la) || [""], j = b.length; j--;)
                        if (h = Aa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = $.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && !1 !== l.teardown.call(a, o, q.handle) || $.removeEvent(a, n, q.handle), delete i[n])
                        } else
                            for (n in i) $.event.remove(a, n + b[j], c, d, !0);
                    $.isEmptyObject(i) && (delete q.handle, pa.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || Z],
                    n = X.call(b, "type") ? b.type : b,
                    o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !za.test(n + $.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[$.expando] ? b : new $.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : $.makeArray(c, [b]), l = $.event.special[n] || {}, e || !l.trigger || !1 !== l.trigger.apply(d, c))) {
                    if (!e && !l.noBubble && !$.isWindow(d)) {
                        for (i = l.delegateType || n, za.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                    }
                    for (f = 0;
                         (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (pa.get(g, "events") || {})[b.type] && pa.get(g, "handle"), k && k.apply(g, c), (k = j && g[j]) && k.apply && $.acceptData(g) && (b.result = k.apply(g, c), !1 === b.result && b.preventDefault());
                    return b.type = n, e || b.isDefaultPrevented() || l._default && !1 !== l._default.apply(m.pop(), c) || !$.acceptData(d) || j && $.isFunction(d[n]) && !$.isWindow(d) && (h = d[j], h && (d[j] = null), $.event.triggered = n, d[n](), $.event.triggered = void 0, h && (d[j] = h)), b.result
                }
            },
            dispatch: function(a) {
                a = $.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = R.call(arguments),
                    i = (pa.get(this, "events") || {})[a.type] || [],
                    j = $.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || !1 !== j.preDispatch.call(this, a)) {
                    for (g = $.event.handlers.call(this, a, i), b = 0;
                         (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, c = 0;
                             (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();) a.namespace_re && !a.namespace_re.test(f.namespace) || (a.handleObj = f, a.data = f.data, void 0 !== (d = (($.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (!0 !== i.disabled || "click" !== a.type) {
                            for (d = [], c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? $(e, this).index(i) >= 0 : $.find(e, this, null, [i]).length), d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            fix: function(a) {
                if (a[$.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = ya.test(e) ? this.mouseHooks : xa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new $.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== l() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === l() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && $.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(a) {
                        return $.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = $.extend(new $.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? $.event.trigger(e, null, b) : $.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, $.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }, $.Event = function(a, b) {
            if (!(this instanceof $.Event)) return new $.Event(a, b);
            a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? j : k) : this.type = a, b && $.extend(this, b), this.timeStamp = a && a.timeStamp || $.now(), this[$.expando] = !0
        }, $.Event.prototype = {
            isDefaultPrevented: k,
            isPropagationStopped: k,
            isImmediatePropagationStopped: k,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, $.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            $.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return e && (e === d || $.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), Y.focusinBubbles || $.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                $.event.simulate(b, a.target, $.event.fix(a), !0)
            };
            $.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = pa.access(d, b);
                    e || d.addEventListener(a, c, !0), pa.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = pa.access(d, b) - 1;
                    e ? pa.access(d, b, e) : (d.removeEventListener(a, c, !0), pa.remove(d, b))
                }
            }
        }), $.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (g in a) this.on(g, b, c, a[g], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), !1 === d) d = k;
                else if (!d) return this;
                return 1 === e && (f = d, d = function(a) {
                    return $().off(a), f.apply(this, arguments)
                }, d.guid = f.guid || (f.guid = $.guid++)), this.each(function() {
                    $.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, $(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = k), this.each(function() {
                    $.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    $.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                if (c) return $.event.trigger(a, b, c, !0)
            }
        });
        var Ba = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Ca = /<([\w:]+)/,
            Da = /<|&#?\w+;/,
            Ea = /<(?:script|style|link)/i,
            Fa = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ga = /^$|\/(?:java|ecma)script/i,
            Ha = /^true\/(.*)/,
            Ia = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ja = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Ja.optgroup = Ja.option, Ja.tbody = Ja.tfoot = Ja.colgroup = Ja.caption = Ja.thead, Ja.th = Ja.td, $.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0),
                    i = $.contains(a.ownerDocument, a);
                if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || $.isXMLDoc(a)))
                    for (g = r(h), f = r(a), d = 0, e = f.length; d < e; d++) s(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; d < e; d++) q(f[d], g[d]);
                    else q(a, h);
                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; m < n; m++)
                    if ((e = a[m]) || 0 === e)
                        if ("object" === $.type(e)) $.merge(l, e.nodeType ? [e] : e);
                        else if (Da.test(e)) {
                            for (f = f || k.appendChild(b.createElement("div")), g = (Ca.exec(e) || ["", ""])[1].toLowerCase(), h = Ja[g] || Ja._default, f.innerHTML = h[1] + e.replace(Ba, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                            $.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                        } else l.push(b.createTextNode(e));
                for (k.textContent = "", m = 0; e = l[m++];)
                    if ((!d || -1 === $.inArray(e, d)) && (i = $.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                        for (j = 0; e = f[j++];) Ga.test(e.type || "") && c.push(e);
                return k
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = $.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if ($.acceptData(c) && (e = c[pa.expando]) && (b = pa.cache[e])) {
                        if (b.events)
                            for (d in b.events) f[d] ? $.event.remove(c, d) : $.removeEvent(c, d, b.handle);
                        pa.cache[e] && delete pa.cache[e]
                    }
                    delete qa.cache[c[qa.expando]]
                }
            }
        }), $.fn.extend({
            text: function(a) {
                return oa(this, function(a) {
                    return void 0 === a ? $.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        m(this, a).appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = m(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? $.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || $.cleanData(r(c)), c.parentNode && (b && $.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && ($.cleanData(r(a, !1)), a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null != a && a, b = null == b ? a : b, this.map(function() {
                    return $.clone(this, a, b)
                })
            },
            html: function(a) {
                return oa(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                    if ("string" == typeof a && !Ea.test(a) && !Ja[(Ca.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(Ba, "<$1></$2>");
                        try {
                            for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && ($.cleanData(r(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (a) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode, $.cleanData(r(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = S.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    p = $.isFunction(m);
                if (p || j > 1 && "string" == typeof m && !Y.checkClone && Fa.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (c = $.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                    for (e = $.map(r(c, "script"), n), f = e.length; i < j; i++) g = c, i !== l && (g = $.clone(g, !0, !0), f && $.merge(e, r(g, "script"))), b.call(this[i], g, i);
                    if (f)
                        for (h = e[e.length - 1].ownerDocument, $.map(e, o), i = 0; i < f; i++) g = e[i], Ga.test(g.type || "") && !pa.access(g, "globalEval") && $.contains(h, g) && (g.src ? $._evalUrl && $._evalUrl(g.src) : $.globalEval(g.textContent.replace(Ia, "")))
                }
                return this
            }
        }), $.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            $.fn[a] = function(a) {
                for (var c, d = [], e = $(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this : this.clone(!0), $(e[g])[b](c), T.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var Ka, La = {},
            Ma = /^margin/,
            Na = new RegExp("^(" + ta + ")(?!px)[a-z%]+$", "i"),
            Oa = function(b) {
                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
            };
        ! function() {
            function b() {
                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
                var b = a.getComputedStyle(g, null);
                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
            }
            var c, d, e = Z.documentElement,
                f = Z.createElement("div"),
                g = Z.createElement("div");
            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && $.extend(Y, {
                pixelPosition: function() {
                    return b(), c
                },
                boxSizingReliable: function() {
                    return null == d && b(), d
                },
                reliableMarginRight: function() {
                    var b, c = g.appendChild(Z.createElement("div"));
                    return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
                }
            }))
        }(), $.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var Pa = /^(none|table(?!-c[ea]).+)/,
            Qa = new RegExp("^(" + ta + ")(.*)$", "i"),
            Ra = new RegExp("^([+-])=(" + ta + ")", "i"),
            Sa = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Ta = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ua = ["Webkit", "O", "Moz", "ms"];
        $.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = v(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = $.camelCase(b),
                        i = a.style;
                    if (b = $.cssProps[h] || ($.cssProps[h] = x(i, h)), g = $.cssHooks[b] || $.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    f = typeof c, "string" === f && (e = Ra.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat($.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || $.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = $.camelCase(b);
                return b = $.cssProps[h] || ($.cssProps[h] = x(a.style, h)), g = $.cssHooks[b] || $.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), !0 === c || $.isNumeric(f) ? f || 0 : e) : e
            }
        }), $.each(["height", "width"], function(a, b) {
            $.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c) return Pa.test($.css(a, "display")) && 0 === a.offsetWidth ? $.swap(a, Sa, function() {
                        return A(a, b, d)
                    }) : A(a, b, d)
                },
                set: function(a, c, d) {
                    var e = d && Oa(a);
                    return y(a, c, d ? z(a, b, d, "border-box" === $.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), $.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
            if (b) return $.swap(a, {
                display: "inline-block"
            }, v, [a, "marginRight"])
        }), $.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            $.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ua[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, Ma.test(a) || ($.cssHooks[a + b].set = y)
        }), $.fn.extend({
            css: function(a, b) {
                return oa(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if ($.isArray(b)) {
                        for (d = Oa(a), e = b.length; g < e; g++) f[b[g]] = $.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? $.style(a, b, c) : $.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return B(this, !0)
            },
            hide: function() {
                return B(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    va(this) ? $(this).show() : $(this).hide()
                })
            }
        }), $.Tween = C, C.prototype = {
            constructor: C,
            init: function(a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || ($.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = C.propHooks[this.prop];
                return a && a.get ? a.get(this) : C.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = C.propHooks[this.prop];
                return this.options.duration ? this.pos = b = $.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
            }
        }, C.prototype.init.prototype = C.prototype, C.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = $.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    $.fx.step[a.prop] ? $.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[$.cssProps[a.prop]] || $.cssHooks[a.prop]) ? $.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, $.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, $.fx = C.prototype.init, $.fx.step = {};
        var Va, Wa, Xa = /^(?:toggle|show|hide)$/,
            Ya = new RegExp("^(?:([+-])=|)(" + ta + ")([a-z%]*)$", "i"),
            Za = /queueHooks$/,
            $a = [G],
            _a = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = Ya.exec(b),
                        f = e && e[3] || ($.cssNumber[a] ? "" : "px"),
                        g = ($.cssNumber[a] || "px" !== f && +d) && Ya.exec($.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do {
                            h = h || ".5", g /= h, $.style(c.elem, a, g + f)
                        } while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        $.Animation = $.extend(I, {
            tweener: function(a, b) {
                $.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; d < e; d++) c = a[d], _a[c] = _a[c] || [], _a[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? $a.unshift(a) : $a.push(a)
            }
        }), $.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? $.extend({}, a) : {
                complete: c || !c && b || $.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !$.isFunction(b) && b
            };
            return d.duration = $.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in $.fx.speeds ? $.fx.speeds[d.duration] : $.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                $.isFunction(d.old) && d.old.call(this), d.queue && $.dequeue(this, d.queue)
            }, d
        }, $.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(va).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = $.isEmptyObject(a),
                    f = $.speed(b, c, d),
                    g = function() {
                        var b = I(this, $.extend({}, a), f);
                        (e || pa.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = $.timers,
                        g = pa.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Za.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || $.dequeue(this, a)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"), this.each(function() {
                    var b, c = pa.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = $.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, $.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }),
            $.each(["toggle", "show", "hide"], function(a, b) {
                var c = $.fn[b];
                $.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
                }
            }), $.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            $.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), $.timers = [], $.fx.tick = function() {
            var a, b = 0,
                c = $.timers;
            for (Va = $.now(); b < c.length; b++)(a = c[b])() || c[b] !== a || c.splice(b--, 1);
            c.length || $.fx.stop(), Va = void 0
        }, $.fx.timer = function(a) {
            $.timers.push(a), a() ? $.fx.start() : $.timers.pop()
        }, $.fx.interval = 13, $.fx.start = function() {
            Wa || (Wa = setInterval($.fx.tick, $.fx.interval))
        }, $.fx.stop = function() {
            clearInterval(Wa), Wa = null
        }, $.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, $.fn.delay = function(a, b) {
            return a = $.fx ? $.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
            function() {
                var a = Z.createElement("input"),
                    b = Z.createElement("select"),
                    c = b.appendChild(Z.createElement("option"));
                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
            }();
        var ab, bb = $.expr.attrHandle;
        $.fn.extend({
            attr: function(a, b) {
                return oa(this, $.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    $.removeAttr(this, a)
                })
            }
        }), $.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? $.prop(a, b, c) : (1 === f && $.isXMLDoc(a) || (b = b.toLowerCase(), d = $.attrHooks[b] || ($.expr.match.bool.test(b) ? ab : void 0)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = $.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void $.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(la);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = $.propFix[c] || c, $.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!Y.radioValue && "radio" === b && $.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), ab = {
            set: function(a, b, c) {
                return !1 === b ? $.removeAttr(a, c) : a.setAttribute(c, c), c
            }
        }, $.each($.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = bb[b] || $.find.attr;
            bb[b] = function(a, b, d) {
                var e, f;
                return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e
            }
        });
        var cb = /^(?:input|select|textarea|button)$/i;
        $.fn.extend({
            prop: function(a, b) {
                return oa(this, $.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[$.propFix[a] || a]
                })
            }
        }), $.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !$.isXMLDoc(a), f && (b = $.propFix[b] || b, e = $.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || cb.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }), Y.optSelected || ($.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex, null
            }
        }), $.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            $.propFix[this.toLowerCase()] = this
        });
        var db = /[\t\r\n\f]/g;
        $.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if ($.isFunction(a)) return this.each(function(b) {
                    $(this).addClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(la) || []; i < j; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(db, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = $.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if ($.isFunction(a)) return this.each(function(b) {
                    $(this).removeClass(a.call(this, b, this.className))
                });
                if (h)
                    for (b = (a || "").match(la) || []; i < j; i++)
                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(db, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? $.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : $.isFunction(a) ? this.each(function(c) {
                    $(this).toggleClass(a.call(this, c, this.className, b), b)
                }) : this.each(function() {
                    if ("string" === c)
                        for (var b, d = 0, e = $(this), f = a.match(la) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else "undefined" !== c && "boolean" !== c || (this.className && pa.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : pa.get(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; c < d; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(db, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        });
        var eb = /\r/g;
        $.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0]; {
                    if (arguments.length) return d = $.isFunction(a), this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, $(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : $.isArray(e) && (e = $.map(e, function(a) {
                                return null == a ? "" : a + ""
                            })), (b = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                    if (e) return (b = $.valHooks[e.type] || $.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(eb, "") : null == c ? "" : c)
                }
            }
        }), $.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = $.find.attr(a, "value");
                        return null != b ? b : $.trim($.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++)
                            if (c = d[i], (c.selected || i === e) && (Y.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !$.nodeName(c.parentNode, "optgroup"))) {
                                if (b = $(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = $.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = $.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1), f
                    }
                }
            }
        }), $.each(["radio", "checkbox"], function() {
            $.valHooks[this] = {
                set: function(a, b) {
                    if ($.isArray(b)) return a.checked = $.inArray($(a).val(), b) >= 0
                }
            }, Y.checkOn || ($.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            $.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), $.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var fb = $.now(),
            gb = /\?/;
        $.parseJSON = function(a) {
            return JSON.parse(a + "")
        }, $.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a) return null;
            try {
                c = new DOMParser, b = c.parseFromString(a, "text/xml")
            } catch (a) {
                b = void 0
            }
            return b && !b.getElementsByTagName("parsererror").length || $.error("Invalid XML: " + a), b
        };
        var hb = /#.*$/,
            ib = /([?&])_=[^&]*/,
            jb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            lb = /^(?:GET|HEAD)$/,
            mb = /^\/\//,
            nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ob = {},
            pb = {},
            qb = "*/".concat("*"),
            rb = a.location.href,
            sb = nb.exec(rb.toLowerCase()) || [];
        $.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: rb,
                type: "GET",
                isLocal: kb.test(sb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": $.parseJSON,
                    "text xml": $.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? L(L(a, $.ajaxSettings), b) : L($.ajaxSettings, a)
            },
            ajaxPrefilter: J(ob),
            ajaxTransport: J(pb),
            ajax: function(a, b) {
                function c(a, b, c, g) {
                    var i, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && a < 300 || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && ($.lastModified[e] = u), (u = v.getResponseHeader("etag")) && ($.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, !a && w || (w = "error", a < 0 && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --$.active || $.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = $.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? $(m) : $.event,
                    o = $.Deferred(),
                    p = $.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!g)
                                    for (g = {}; b = jb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                b = g[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() {
                            return 2 === t ? f : null
                        },
                        setRequestHeader: function(a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function(a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (t < 2)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) {
                            var b = a || u;
                            return d && d.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || rb) + "").replace(hb, "").replace(mb, sb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = $.trim(l.dataType || "*").toLowerCase().match(la) || [""], null == l.crossDomain && (i = nb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === sb[1] && i[2] === sb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (sb[3] || ("http:" === sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = $.param(l.data, l.traditional)), K(ob, l, b, v), 2 === t) return v;
                j = $.event && l.global, j && 0 == $.active++ && $.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !lb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (gb.test(e) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = ib.test(e) ? e.replace(ib, "$1_=" + fb++) : e + (gb.test(e) ? "&" : "?") + "_=" + fb++)), l.ifModified && ($.lastModified[e] && v.setRequestHeader("If-Modified-Since", $.lastModified[e]), $.etag[e] && v.setRequestHeader("If-None-Match", $.etag[e])), (l.data && l.hasContent && !1 !== l.contentType || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + qb + "; q=0.01" : "") : l.accepts["*"]);
                for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                if (l.beforeSend && (!1 === l.beforeSend.call(m, v, l) || 2 === t)) return v.abort();
                u = "abort";
                for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
                if (d = K(pb, l, b, v)) {
                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, d.send(r, c)
                    } catch (a) {
                        if (!(t < 2)) throw a;
                        c(-1, a)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) {
                return $.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return $.get(a, void 0, b, "script")
            }
        }), $.each(["get", "post"], function(a, b) {
            $[b] = function(a, c, d, e) {
                return $.isFunction(c) && (e = e || d, d = c, c = void 0), $.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), $._evalUrl = function(a) {
            return $.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, $.fn.extend({
            wrapAll: function(a) {
                var b;
                return $.isFunction(a) ? this.each(function(b) {
                    $(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = $(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                    return a
                }).append(this)), this)
            },
            wrapInner: function(a) {
                return $.isFunction(a) ? this.each(function(b) {
                    $(this).wrapInner(a.call(this, b))
                }) : this.each(function() {
                    var b = $(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = $.isFunction(a);
                return this.each(function(c) {
                    $(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
                }).end()
            }
        }), $.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }, $.expr.filters.visible = function(a) {
            return !$.expr.filters.hidden(a)
        };
        var tb = /%20/g,
            ub = /\[\]$/,
            vb = /\r?\n/g,
            wb = /^(?:submit|button|image|reset|file)$/i,
            xb = /^(?:input|select|textarea|keygen)/i;
        $.param = function(a, b) {
            var c, d = [],
                e = function(a, b) {
                    b = $.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = $.ajaxSettings && $.ajaxSettings.traditional), $.isArray(a) || a.jquery && !$.isPlainObject(a)) $.each(a, function() {
                e(this.name, this.value)
            });
            else
                for (c in a) O(c, a[c], b, e);
            return d.join("&").replace(tb, "+")
        }, $.fn.extend({
            serialize: function() {
                return $.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = $.prop(this, "elements");
                    return a ? $.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !$(this).is(":disabled") && xb.test(this.nodeName) && !wb.test(a) && (this.checked || !wa.test(a))
                }).map(function(a, b) {
                    var c = $(this).val();
                    return null == c ? null : $.isArray(c) ? $.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(vb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(vb, "\r\n")
                    }
                }).get()
            }
        }), $.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        };
        var yb = 0,
            zb = {},
            Ab = {
                0: 200,
                1223: 204
            },
            Bb = $.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in zb) zb[a]()
        }), Y.cors = !!Bb && "withCredentials" in Bb, Y.ajax = Bb = !!Bb, $.ajaxTransport(function(a) {
            var b;
            if (Y.cors || Bb && !a.crossDomain) return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++yb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete zb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ab[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()))
                        }
                    }, f.onload = b(), f.onerror = b("error"), b = zb[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (a) {
                        if (b) throw a
                    }
                },
                abort: function() {
                    b && b()
                }
            }
        }), $.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return $.globalEval(a), a
                }
            }
        }), $.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
        }), $.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = $("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                        }), Z.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Cb = [],
            Db = /(=)\?(?=&|$)|\?\?/;
        $.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Cb.pop() || $.expando + "_" + fb++;
                return this[a] = !0, a
            }
        }), $.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = !1 !== b.jsonp && (Db.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Db.test(b.data) && "data");
            if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = $.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Db, "$1" + e) : !1 !== b.jsonp && (b.url += (gb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                return g || $.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                g = arguments
            }, d.always(function() {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Cb.push(e)), g && $.isFunction(f) && f(g[0]), g = f = void 0
            }), "script"
        }), $.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
            var d = fa.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = $.buildFragment([a], b, e), e && e.length && $(e).remove(), $.merge([], d.childNodes))
        };
        var Eb = $.fn.load;
        $.fn.load = function(a, b, c) {
            if ("string" != typeof a && Eb) return Eb.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = $.trim(a.slice(h)), a = a.slice(0, h)), $.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && $.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments, g.html(d ? $("<div>").append($.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                    g.each(c, f || [a.responseText, b, a])
                }), this
        }, $.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            $.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), $.expr.filters.animated = function(a) {
            return $.grep($.timers, function(b) {
                return a === b.elem
            }).length
        };
        var Fb = a.document.documentElement;
        $.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = $.css(a, "position"),
                    l = $(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = $.css(a, "top"), i = $.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), $.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, $.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                    $.offset.setOffset(this, a, b)
                });
                var b, c, d = this[0],
                    e = {
                        top: 0,
                        left: 0
                    },
                    f = d && d.ownerDocument;
                if (f) return b = f.documentElement, $.contains(b, d) ? (void 0 !== d.getBoundingClientRect && (e = d.getBoundingClientRect()), c = P(f), {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0],
                        d = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === $.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), $.nodeName(a[0], "html") || (d = a.offset()), d.top += $.css(a[0], "borderTopWidth", !0), d.left += $.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - d.top - $.css(c, "marginTop", !0),
                        left: b.left - d.left - $.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || Fb; a && !$.nodeName(a, "html") && "static" === $.css(a, "position");) a = a.offsetParent;
                    return a || Fb
                })
            }
        }), $.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b, c) {
            var d = "pageYOffset" === c;
            $.fn[b] = function(e) {
                return oa(this, function(b, e, f) {
                    var g = P(b);
                    if (void 0 === f) return g ? g[c] : b[e];
                    g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f
                }, b, e, arguments.length, null)
            }
        }), $.each(["top", "left"], function(a, b) {
            $.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
                if (c) return c = v(a, b), Na.test(c) ? $(a).position()[b] + "px" : c
            })
        }), $.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            $.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                $.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (!0 === d || !0 === e ? "margin" : "border");
                    return oa(this, function(b, c, d) {
                        var e;
                        return $.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? $.css(b, c, g) : $.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), $.fn.size = function() {
            return this.length
        }, $.fn.andSelf = $.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return $
        });
        var Gb = a.jQuery,
            Hb = a.$;
        return $.noConflict = function(b) {
            return a.$ === $ && (a.$ = Hb), b && a.jQuery === $ && (a.jQuery = Gb), $
        }, void 0 === b && (a.jQuery = a.$ = $), $
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery),
    function(a) {
        "use strict";

        function b() {
            var a = document.createElement("bootstrap"),
                b = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var c in b)
                if (void 0 !== a.style[c]) return {
                    end: b[c]
                };
            return !1
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1,
                d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var e = function() {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b), this
        }, a(function() {
            a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function(b) {
                    if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var c = a(this),
                    e = c.data("bs.alert");
                e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
            })
        }
        var c = '[data-dismiss="alert"]',
            d = function(b) {
                a(b).on("click", c, this.close)
            };
        d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
            function c() {
                g.detach().trigger("closed.bs.alert").remove()
            }
            var e = a(this),
                f = e.attr("data-target");
            f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
            var g = a(f);
            b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
        };
        var e = a.fn.alert;
        a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
            return a.fn.alert = e, this
        }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.button"),
                    f = "object" == typeof b && b;
                e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
            })
        }
        var c = function(b, d) {
            this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
        };
        c.VERSION = "3.3.6", c.DEFAULTS = {
            loadingText: "loading..."
        }, c.prototype.setState = function(b) {
            var c = "disabled",
                d = this.$element,
                e = d.is("input") ? "val" : "html",
                f = d.data();
            b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
                d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
            }, this), 0)
        }, c.prototype.toggle = function() {
            var a = !0,
                b = this.$element.closest('[data-toggle="buttons"]');
            if (b.length) {
                var c = this.$element.find("input");
                "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
            } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
        };
        var d = a.fn.button;
        a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
            return a.fn.button = d, this
        }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
            a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.carousel"),
                    f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                    g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }
        var c = function(b, c) {
            this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        }, c.prototype.keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName)) {
                switch (a.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                a.preventDefault()
            }
        }, c.prototype.cycle = function(b) {
            return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
        }, c.prototype.getItemIndex = function(a) {
            return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
        }, c.prototype.getItemForDirection = function(a, b) {
            var c = this.getItemIndex(b);
            if (("prev" == a && 0 === c || "next" == a && c == this.$items.length - 1) && !this.options.wrap) return b;
            var d = "prev" == a ? -1 : 1,
                e = (c + d) % this.$items.length;
            return this.$items.eq(e)
        }, c.prototype.to = function(a) {
            var b = this,
                c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                b.to(a)
            }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
        }, c.prototype.pause = function(b) {
            return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, c.prototype.next = function() {
            if (!this.sliding) return this.slide("next")
        }, c.prototype.prev = function() {
            if (!this.sliding) return this.slide("prev")
        }, c.prototype.slide = function(b, d) {
            var e = this.$element.find(".item.active"),
                f = d || this.getItemForDirection(b, e),
                g = this.interval,
                h = "next" == b ? "left" : "right",
                i = this;
            if (f.hasClass("active")) return this.sliding = !1;
            var j = f[0],
                k = a.Event("slide.bs.carousel", {
                    relatedTarget: j,
                    direction: h
                });
            if (this.$element.trigger(k), !k.isDefaultPrevented()) {
                if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                    l && l.addClass("active")
                }
                var m = a.Event("slid.bs.carousel", {
                    relatedTarget: j,
                    direction: h
                });
                return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
                    f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
                        i.$element.trigger(m)
                    }, 0)
                }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
            }
        };
        var d = a.fn.carousel;
        a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
            return a.fn.carousel = d, this
        };
        var e = function(c) {
            var d, e = a(this),
                f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data()),
                    h = e.attr("data-slide-to");
                h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
            a('[data-ride="carousel"]').each(function() {
                var c = a(this);
                b.call(c, c.data())
            })
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
            return a(d)
        }

        function c(b) {
            return this.each(function() {
                var c = a(this),
                    e = c.data("bs.collapse"),
                    f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
            })
        }
        var d = function(b, c) {
            this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
        };
        d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
            toggle: !0
        }, d.prototype.dimension = function() {
            return this.$element.hasClass("width") ? "width" : "height"
        }, d.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (b = e.data("bs.collapse")) && b.transitioning)) {
                    var f = a.Event("show.bs.collapse");
                    if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                        e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                        var g = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var h = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition) return h.call(this);
                        var i = a.camelCase(["scroll", g].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                    }
                }
            }
        }, d.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var e = function() {
                        this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    if (!a.support.transition) return e.call(this);
                    this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION)
                }
            }
        }, d.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }, d.prototype.getParent = function() {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e)
            }, this)).end()
        }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
        };
        var e = a.fn.collapse;
        a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
            return a.fn.collapse = e, this
        }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
            var e = a(this);
            e.attr("data-target") || d.preventDefault();
            var f = b(e),
                g = f.data("bs.collapse"),
                h = g ? "toggle" : e.data();
            c.call(f, h)
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            var c = b.attr("data-target");
            c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
            var d = c && a(c);
            return d && d.length ? d : b.parent()
        }

        function c(c) {
            c && 3 === c.which || (a(e).remove(), a(f).each(function() {
                var d = a(this),
                    e = b(d),
                    f = {
                        relatedTarget: this
                    };
                e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
            }))
        }

        function d(b) {
            return this.each(function() {
                var c = a(this),
                    d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
            })
        }
        var e = ".dropdown-backdrop",
            f = '[data-toggle="dropdown"]',
            g = function(b) {
                a(b).on("click.bs.dropdown", this.toggle)
            };
        g.VERSION = "3.3.6", g.prototype.toggle = function(d) {
            var e = a(this);
            if (!e.is(".disabled, :disabled")) {
                var f = b(e),
                    g = f.hasClass("open");
                if (c(), !g) {
                    "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                    var h = {
                        relatedTarget: this
                    };
                    if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                    e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                }
                return !1
            }
        }, g.prototype.keydown = function(c) {
            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                var d = a(this);
                if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                    var e = b(d),
                        g = e.hasClass("open");
                    if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                    var h = e.find(".dropdown-menu li:not(.disabled):visible a");
                    if (h.length) {
                        var i = h.index(c.target);
                        38 == c.which && i > 0 && i--, 40 == c.which && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).trigger("focus")
                    }
                }
            }
        };
        var h = a.fn.dropdown;
        a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
            return a.fn.dropdown = h, this
        }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
            a.stopPropagation()
        }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
    }(jQuery),
    function(a) {
        "use strict";

        function b(b, d) {
            return this.each(function() {
                var e = a(this),
                    f = e.data("bs.modal"),
                    g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
            })
        }
        var c = function(b, c) {
            this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, c.prototype.toggle = function(a) {
            return this.isShown ? this.hide() : this.show(a)
        }, c.prototype.show = function(b) {
            var d = this,
                e = a.Event("show.bs.modal", {
                    relatedTarget: b
                });
            this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                })
            }), this.backdrop(function() {
                var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
                var f = a.Event("shown.bs.modal", {
                    relatedTarget: b
                });
                e ? d.$dialog.one("bsTransitionEnd", function() {
                    d.$element.trigger("focus").trigger(f)
                }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
            }))
        }, c.prototype.hide = function(b) {
            b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
        }, c.prototype.enforceFocus = function() {
            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
                this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
            }, this))
        }, c.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                27 == a.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }, c.prototype.resize = function() {
            this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
        }, c.prototype.hideModal = function() {
            var a = this;
            this.$element.hide(), this.backdrop(function() {
                a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
            })
        }, c.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, c.prototype.backdrop = function(b) {
            var d = this,
                e = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var f = a.support.transition && e;
                if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                        if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                        a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
                f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var g = function() {
                    d.removeBackdrop(), b && b()
                };
                a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
            } else b && b()
        }, c.prototype.handleUpdate = function() {
            this.adjustDialog()
        }, c.prototype.adjustDialog = function() {
            var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
            })
        }, c.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }, c.prototype.checkScrollbar = function() {
            var a = window.innerWidth;
            if (!a) {
                var b = document.documentElement.getBoundingClientRect();
                a = b.right - Math.abs(b.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
        }, c.prototype.setScrollbar = function() {
            var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
        }, c.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }, c.prototype.measureScrollbar = function() {
            var a = document.createElement("div");
            a.className = "modal-scrollbar-measure", this.$body.append(a);
            var b = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a), b
        };
        var d = a.fn.modal;
        a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
            return a.fn.modal = d, this
        }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
            var d = a(this),
                e = d.attr("href"),
                f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
                g = f.data("bs.modal") ? "toggle" : a.extend({
                    remote: !/#/.test(e) && e
                }, f.data(), d.data());
            d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
                a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                    d.is(":visible") && d.trigger("focus")
                })
            }), b.call(f, g, this)
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.tooltip"),
                    f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, c.prototype.init = function(b, c, d) {
            if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                    click: !1,
                    hover: !1,
                    focus: !1
                }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
                var g = e[f];
                if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                else if ("manual" != g) {
                    var h = "hover" == g ? "mouseenter" : "focusin",
                        i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }, c.prototype.getOptions = function(b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }), b
        }, c.prototype.getDelegateOptions = function() {
            var b = {},
                c = this.getDefaults();
            return this._options && a.each(this._options, function(a, d) {
                c[a] != d && (b[a] = d)
            }), b
        }, c.prototype.enter = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)) : c.show())
        }, c.prototype.isInStateTrue = function() {
            for (var a in this.inState)
                if (this.inState[a]) return !0;
            return !1
        }, c.prototype.leave = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) {
                if (clearTimeout(c.timeout), c.hoverState = "out", !c.options.delay || !c.options.delay.hide) return c.hide();
                c.timeout = setTimeout(function() {
                    "out" == c.hoverState && c.hide()
                }, c.options.delay.hide)
            }
        }, c.prototype.show = function() {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(b);
                var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (b.isDefaultPrevented() || !d) return;
                var e = this,
                    f = this.tip(),
                    g = this.getUID(this.type);
                this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
                var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                    i = /\s?auto?\s?/i,
                    j = i.test(h);
                j && (h = h.replace(i, "") || "top"), f.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var k = this.getPosition(),
                    l = f[0].offsetWidth,
                    m = f[0].offsetHeight;
                if (j) {
                    var n = h,
                        o = this.getPosition(this.$viewport);
                    h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
                }
                var p = this.getCalculatedOffset(h, k, l, m);
                this.applyPlacement(p, h);
                var q = function() {
                    var a = e.hoverState;
                    e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
                };
                a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
            }
        }, c.prototype.applyPlacement = function(b, c) {
            var d = this.tip(),
                e = d[0].offsetWidth,
                f = d[0].offsetHeight,
                g = parseInt(d.css("margin-top"), 10),
                h = parseInt(d.css("margin-left"), 10);
            isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
                using: function(a) {
                    d.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    })
                }
            }, b), 0), d.addClass("in");
            var i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            "top" == c && j != f && (b.top = b.top + f - j);
            var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? b.left += k.left : b.top += k.top;
            var l = /top|bottom/.test(c),
                m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
                n = l ? "offsetWidth" : "offsetHeight";
            d.offset(b), this.replaceArrow(m, d[0][n], l)
        }, c.prototype.replaceArrow = function(a, b, c) {
            this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
        }, c.prototype.setContent = function() {
            var a = this.tip(),
                b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
        }, c.prototype.hide = function(b) {
            function d() {
                "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
            }
            var e = this,
                f = a(this.$tip),
                g = a.Event("hide.bs." + this.type);
            if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
        }, c.prototype.fixTitle = function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        }, c.prototype.hasContent = function() {
            return this.getTitle()
        }, c.prototype.getPosition = function(b) {
            b = b || this.$element;
            var c = b[0],
                d = "BODY" == c.tagName,
                e = c.getBoundingClientRect();
            null == e.width && (e = a.extend({}, e, {
                width: e.right - e.left,
                height: e.bottom - e.top
            }));
            var f = d ? {
                    top: 0,
                    left: 0
                } : b.offset(),
                g = {
                    scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
                },
                h = d ? {
                    width: a(window).width(),
                    height: a(window).height()
                } : null;
            return a.extend({}, e, g, h, f)
        }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
            return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                top: b.top - d,
                left: b.left + b.width / 2 - c / 2
            } : "left" == a ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c
            } : {
                top: b.top + b.height / 2 - d / 2,
                left: b.left + b.width
            }
        }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
            var e = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return e;
            var f = this.options.viewport && this.options.viewport.padding || 0,
                g = this.getPosition(this.$viewport);
            if (/right|left/.test(a)) {
                var h = b.top - f - g.scroll,
                    i = b.top + f - g.scroll + d;
                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
            } else {
                var j = b.left - f,
                    k = b.left + f + c;
                j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
            }
            return e
        }, c.prototype.getTitle = function() {
            var a = this.$element,
                b = this.options;
            return a.attr("data-original-title") || ("function" == typeof b.title ? b.title.call(a[0]) : b.title)
        }, c.prototype.getUID = function(a) {
            do {
                a += ~~(1e6 * Math.random())
            } while (document.getElementById(a));
            return a
        }, c.prototype.tip = function() {
            if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, c.prototype.enable = function() {
            this.enabled = !0
        }, c.prototype.disable = function() {
            this.enabled = !1
        }, c.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }, c.prototype.toggle = function(b) {
            var c = this;
            b && ((c = a(b.currentTarget).data("bs." + this.type)) || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
        }, c.prototype.destroy = function() {
            var a = this;
            clearTimeout(this.timeout), this.hide(function() {
                a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
            })
        };
        var d = a.fn.tooltip;
        a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = d, this
        }
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.popover"),
                    f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.init("popover", a, b)
        };
        if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }, c.prototype.setContent = function() {
            var a = this.tip(),
                b = this.getTitle(),
                c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
        }, c.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }, c.prototype.getContent = function() {
            var a = this.$element,
                b = this.options;
            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        }, c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        };
        var d = a.fn.popover;
        a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
            return a.fn.popover = d, this
        }
    }(jQuery),
    function(a) {
        "use strict";

        function b(c, d) {
            this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
        }

        function c(c) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.scrollspy"),
                    f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
            })
        }
        b.VERSION = "3.3.6", b.DEFAULTS = {
            offset: 10
        }, b.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }, b.prototype.refresh = function() {
            var b = this,
                c = "offset",
                d = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var b = a(this),
                    e = b.data("target") || b.attr("href"),
                    f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [
                        [f[c]().top + d, e]
                    ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                b.offsets.push(this[0]), b.targets.push(this[1])
            })
        }, b.prototype.process = function() {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset,
                c = this.getScrollHeight(),
                d = this.options.offset + c - this.$scrollElement.height(),
                e = this.offsets,
                f = this.targets,
                g = this.activeTarget;
            if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
            if (g && b < e[0]) return this.activeTarget = null, this.clear();
            for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
        }, b.prototype.activate = function(b) {
            this.activeTarget = b, this.clear();
            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
                d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
        }, b.prototype.clear = function() {
            a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        };
        var d = a.fn.scrollspy;
        a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = d, this
        }, a(window).on("load.bs.scrollspy.data-api", function() {
            a('[data-spy="scroll"]').each(function() {
                var b = a(this);
                c.call(b, b.data())
            })
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.tab");
                e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
            })
        }
        var c = function(b) {
            this.element = a(b)
        };
        c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
            var b = this.element,
                c = b.closest("ul:not(.dropdown-menu)"),
                d = b.data("target");
            if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
                var e = c.find(".active:last a"),
                    f = a.Event("hide.bs.tab", {
                        relatedTarget: b[0]
                    }),
                    g = a.Event("show.bs.tab", {
                        relatedTarget: e[0]
                    });
                if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                    var h = a(d);
                    this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
                        e.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: b[0]
                        }), b.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: e[0]
                        })
                    })
                }
            }
        }, c.prototype.activate = function(b, d, e) {
            function f() {
                g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
            }
            var g = d.find("> .active"),
                h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
            g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
        };
        var d = a.fn.tab;
        a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
            return a.fn.tab = d, this
        };
        var e = function(c) {
            c.preventDefault(), b.call(a(this), "show")
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            return this.each(function() {
                var d = a(this),
                    e = d.data("bs.affix"),
                    f = "object" == typeof b && b;
                e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
            })
        }
        var c = function(b, d) {
            this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
        };
        c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
            offset: 0,
            target: window
        }, c.prototype.getState = function(a, b, c, d) {
            var e = this.$target.scrollTop(),
                f = this.$element.offset(),
                g = this.$target.height();
            if (null != c && "top" == this.affixed) return e < c && "top";
            if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
            var h = null == this.affixed,
                i = h ? e : f.top,
                j = h ? g : b;
            return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
        }, c.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix");
            var a = this.$target.scrollTop(),
                b = this.$element.offset();
            return this.pinnedOffset = b.top - a
        }, c.prototype.checkPositionWithEventLoop = function() {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }, c.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var b = this.$element.height(),
                    d = this.options.offset,
                    e = d.top,
                    f = d.bottom,
                    g = Math.max(a(document).height(), a(document.body).height());
                "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
                var h = this.getState(g, b, e, f);
                if (this.affixed != h) {
                    null != this.unpin && this.$element.css("top", "");
                    var i = "affix" + (h ? "-" + h : ""),
                        j = a.Event(i + ".bs.affix");
                    if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                    this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == h && this.$element.offset({
                    top: g - b - f
                })
            }
        };
        var d = a.fn.affix;
        a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
            return a.fn.affix = d, this
        }, a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var c = a(this),
                    d = c.data();
                d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
            })
        })
    }(jQuery),
    function(a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], function(a) {
            return b(a)
        }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
    }(0, function(a) {
        ! function(a) {
            "use strict";

            function b(b) {
                var c = [{
                    re: /[\xC0-\xC6]/g,
                    ch: "A"
                }, {
                    re: /[\xE0-\xE6]/g,
                    ch: "a"
                }, {
                    re: /[\xC8-\xCB]/g,
                    ch: "E"
                }, {
                    re: /[\xE8-\xEB]/g,
                    ch: "e"
                }, {
                    re: /[\xCC-\xCF]/g,
                    ch: "I"
                }, {
                    re: /[\xEC-\xEF]/g,
                    ch: "i"
                }, {
                    re: /[\xD2-\xD6]/g,
                    ch: "O"
                }, {
                    re: /[\xF2-\xF6]/g,
                    ch: "o"
                }, {
                    re: /[\xD9-\xDC]/g,
                    ch: "U"
                }, {
                    re: /[\xF9-\xFC]/g,
                    ch: "u"
                }, {
                    re: /[\xC7-\xE7]/g,
                    ch: "c"
                }, {
                    re: /[\xD1]/g,
                    ch: "N"
                }, {
                    re: /[\xF1]/g,
                    ch: "n"
                }];
                return a.each(c, function() {
                    b = b.replace(this.re, this.ch)
                }), b
            }

            function c(a) {
                var b = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#x27;",
                        "`": "&#x60;"
                    },
                    c = "(?:" + Object.keys(b).join("|") + ")",
                    d = new RegExp(c),
                    e = new RegExp(c, "g"),
                    f = null == a ? "" : "" + a;
                return d.test(f) ? f.replace(e, function(a) {
                    return b[a]
                }) : f
            }

            function d(b, c) {
                var d = arguments,
                    f = b,
                    g = c;
                [].shift.apply(d);
                var h, i = this.each(function() {
                    var b = a(this);
                    if (b.is("select")) {
                        var c = b.data("selectpicker"),
                            i = "object" == typeof f && f;
                        if (c) {
                            if (i)
                                for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j])
                        } else {
                            var k = a.extend({}, e.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                            k.template = a.extend({}, e.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), b.data("selectpicker", c = new e(this, k, g))
                        }
                        "string" == typeof f && (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f])
                    }
                });
                return void 0 !== h ? h : i
            }
            String.prototype.includes || function() {
                var a = {}.toString,
                    b = function() {
                        try {
                            var a = {},
                                b = Object.defineProperty,
                                c = b(a, a, a) && b
                        } catch (a) {}
                        return c
                    }(),
                    c = "".indexOf,
                    d = function(b) {
                        if (null == this) throw new TypeError;
                        var d = String(this);
                        if (b && "[object RegExp]" == a.call(b)) throw new TypeError;
                        var e = d.length,
                            f = String(b),
                            g = f.length,
                            h = arguments.length > 1 ? arguments[1] : void 0,
                            i = h ? Number(h) : 0;
                        return i != i && (i = 0), !(g + Math.min(Math.max(i, 0), e) > e) && -1 != c.call(d, f, i)
                    };
                b ? b(String.prototype, "includes", {
                    value: d,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.includes = d
            }(), String.prototype.startsWith || function() {
                var a = function() {
                        try {
                            var a = {},
                                b = Object.defineProperty,
                                c = b(a, a, a) && b
                        } catch (a) {}
                        return c
                    }(),
                    b = {}.toString,
                    c = function(a) {
                        if (null == this) throw new TypeError;
                        var c = String(this);
                        if (a && "[object RegExp]" == b.call(a)) throw new TypeError;
                        var d = c.length,
                            e = String(a),
                            f = e.length,
                            g = arguments.length > 1 ? arguments[1] : void 0,
                            h = g ? Number(g) : 0;
                        h != h && (h = 0);
                        var i = Math.min(Math.max(h, 0), d);
                        if (f + i > d) return !1;
                        for (var j = -1; ++j < f;)
                            if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                        return !0
                    };
                a ? a(String.prototype, "startsWith", {
                    value: c,
                    configurable: !0,
                    writable: !0
                }) : String.prototype.startsWith = c
            }(), Object.keys || (Object.keys = function(a, b, c) {
                c = [];
                for (b in a) c.hasOwnProperty.call(a, b) && c.push(b);
                return c
            }), a.fn.triggerNative = function(a) {
                var b, c = this[0];
                c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, {
                    bubbles: !0
                }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : (c.fireEvent && (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)), this.trigger(a))
            }, a.expr[":"].icontains = function(b, c, d) {
                var e = a(b);
                return (e.data("tokens") || e.text()).toUpperCase().includes(d[3].toUpperCase())
            }, a.expr[":"].ibegins = function(b, c, d) {
                var e = a(b);
                return (e.data("tokens") || e.text()).toUpperCase().startsWith(d[3].toUpperCase())
            }, a.expr[":"].aicontains = function(b, c, d) {
                var e = a(b);
                return (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase().includes(d[3].toUpperCase())
            }, a.expr[":"].aibegins = function(b, c, d) {
                var e = a(b);
                return (e.data("tokens") || e.data("normalizedText") || e.text()).toUpperCase().startsWith(d[3].toUpperCase())
            };
            var e = function(b, c, d) {
                d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = e.prototype.val, this.render = e.prototype.render, this.refresh = e.prototype.refresh, this.setStyle = e.prototype.setStyle, this.selectAll = e.prototype.selectAll, this.deselectAll = e.prototype.deselectAll, this.destroy = e.prototype.destroy, this.remove = e.prototype.remove, this.show = e.prototype.show, this.hide = e.prototype.hide, this.init()
            };
            e.VERSION = "1.10.0", e.DEFAULTS = {
                noneSelectedText: "Nothing selected",
                noneResultsText: "No results matched {0}",
                countSelectedText: function(a, b) {
                    return 1 == a ? "{0} item selected" : "{0} items selected"
                },
                maxOptionsText: function(a, b) {
                    return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
                },
                selectAllText: "Select All",
                deselectAllText: "Deselect All",
                doneButton: !1,
                doneButtonText: "Close",
                multipleSeparator: ", ",
                styleBase: "btn",
                style: "btn-default",
                size: "auto",
                title: null,
                selectedTextFormat: "values",
                width: !1,
                container: !1,
                hideDisabled: !1,
                showSubtext: !1,
                showIcon: !0,
                showContent: !0,
                dropupAuto: !0,
                header: !1,
                liveSearch: !1,
                liveSearchPlaceholder: null,
                liveSearchNormalize: !1,
                liveSearchStyle: "contains",
                actionsBox: !1,
                iconBase: "glyphicon",
                tickIcon: "glyphicon-ok",
                showTick: !1,
                template: {
                    caret: '<span class="caret"></span>'
                },
                maxOptions: !1,
                mobile: !1,
                selectOnTab: !1,
                dropdownAlignRight: !1
            }, e.prototype = {
                constructor: e,
                init: function() {
                    var b = this,
                        c = this.$element.attr("id");
                    this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-right"), void 0 !== c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) {
                        a.preventDefault(), b.$button.focus()
                    })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                        "hide.bs.dropdown": function(a) {
                            b.$element.trigger("hide.bs.select", a)
                        },
                        "hidden.bs.dropdown": function(a) {
                            b.$element.trigger("hidden.bs.select", a)
                        },
                        "show.bs.dropdown": function(a) {
                            b.$element.trigger("show.bs.select", a)
                        },
                        "shown.bs.dropdown": function(a) {
                            b.$element.trigger("shown.bs.select", a)
                        }
                    }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                        b.$button.addClass("bs-invalid").focus(), b.$element.on({
                            "focus.bs.select": function() {
                                b.$button.focus(), b.$element.off("focus.bs.select")
                            },
                            "shown.bs.select": function() {
                                b.$element.val(b.$element.val()).off("shown.bs.select")
                            },
                            "rendered.bs.select": function() {
                                this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select")
                            }
                        })
                    }), setTimeout(function() {
                        b.$element.trigger("loaded.bs.select")
                    })
                },
                createDropdown: function() {
                    var b = this.multiple || this.options.showTick ? " show-tick" : "",
                        d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                        e = this.autofocus ? " autofocus" : "",
                        f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                        g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + "></div>" : "",
                        h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                        i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                        j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + '><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open">' + f + g + h + '<ul class="dropdown-menu inner" role="menu"></ul>' + i + "</div></div>";
                    return a(j)
                },
                createView: function() {
                    var a = this.createDropdown(),
                        b = this.createLi();
                    return a.find("ul")[0].innerHTML = b, a
                },
                reloadLi: function() {
                    this.destroyLi();
                    var a = this.createLi();
                    this.$menuInner[0].innerHTML = a
                },
                destroyLi: function() {
                    this.$menu.find("li").remove()
                },
                createLi: function() {
                    var d = this,
                        e = [],
                        f = 0,
                        g = document.createElement("option"),
                        h = -1,
                        i = function(a, b, c, d) {
                            return "<li" + (void 0 !== c & "" !== c ? ' class="' + c + '"' : "") + (void 0 !== b & null !== b ? ' data-original-index="' + b + '"' : "") + (void 0 !== d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>"
                        },
                        j = function(a, e, f, g) {
                            return '<a tabindex="0"' + (void 0 !== e ? ' class="' + e + '"' : "") + (void 0 !== f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + (void 0 !== g || null !== g ? ' data-tokens="' + g + '"' : "") + ">" + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>'
                        };
                    if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) {
                        var k = this.$element[0];
                        g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild), void 0 === a(k.options[k.selectedIndex]).attr("selected") && (g.selected = !0)
                    }
                    return this.$element.find("option").each(function(b) {
                        var c = a(this);
                        if (h++, !c.hasClass("bs-title-option")) {
                            var g = this.className || "",
                                k = this.style.cssText,
                                l = c.data("content") ? c.data("content") : c.html(),
                                m = c.data("tokens") ? c.data("tokens") : null,
                                n = void 0 !== c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
                                o = void 0 !== c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                                p = "OPTGROUP" === this.parentNode.tagName,
                                q = this.disabled || p && this.parentNode.disabled;
                            if ("" !== o && q && (o = "<span>" + o + "</span>"), d.options.hideDisabled && q && !p) return void h--;
                            if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), p && !0 !== c.data("divider")) {
                                var r = " " + this.parentNode.className || "";
                                if (0 === c.index()) {
                                    f += 1;
                                    var s = this.parentNode.label,
                                        t = void 0 !== c.parent().data("subtext") ? '<small class="text-muted">' + c.parent().data("subtext") + "</small>" : "";
                                    s = (c.parent().data("icon") ? '<span class="' + d.options.iconBase + " " + c.parent().data("icon") + '"></span> ' : "") + '<span class="text">' + s + t + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(s, null, "dropdown-header" + r, f))
                                }
                                if (d.options.hideDisabled && q) return void h--;
                                e.push(i(j(l, "opt " + g + r, k, m), b, "", f))
                            } else !0 === c.data("divider") ? e.push(i("", b, "divider")) : !0 === c.data("hidden") ? e.push(i(j(l, g, k, m), b, "hidden is-hidden")) : (this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)));
                            d.liObj[b] = h
                        }
                    }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("")
                },
                findLis: function() {
                    return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
                },
                render: function(b) {
                    var c, d = this;
                    !1 !== b && this.$element.find("option").each(function(a) {
                        var b = d.findLis().eq(d.liObj[a]);
                        d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b)
                    }), this.tabIndex();
                    var e = this.$element.find("option").map(function() {
                            if (this.selected) {
                                if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                                var b, c = a(this),
                                    e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : "";
                                return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", void 0 !== c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b
                            }
                        }).toArray(),
                        f = this.multiple ? e.join(this.options.multipleSeparator) : e[0];
                    if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
                        var g = this.options.selectedTextFormat.split(">");
                        if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) {
                            c = this.options.hideDisabled ? ", [disabled]" : "";
                            var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length;
                            f = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText).replace("{0}", e.length.toString()).replace("{1}", h.toString())
                        }
                    }
                    void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select")
                },
                setStyle: function(a, b) {
                    this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
                    var c = a || this.options.style;
                    "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c))
                },
                liHeight: function(b) {
                    if (b || !1 !== this.options.size && !this.sizeInfo) {
                        var c = document.createElement("div"),
                            d = document.createElement("div"),
                            e = document.createElement("ul"),
                            f = document.createElement("li"),
                            g = document.createElement("li"),
                            h = document.createElement("a"),
                            i = document.createElement("span"),
                            j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                            k = this.options.liveSearch ? document.createElement("div") : null,
                            l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                            m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
                        if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) {
                            var n = document.createElement("span");
                            k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k)
                        }
                        l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c);
                        var o = h.offsetHeight,
                            p = j ? j.offsetHeight : 0,
                            q = k ? k.offsetHeight : 0,
                            r = l ? l.offsetHeight : 0,
                            s = m ? m.offsetHeight : 0,
                            t = a(f).outerHeight(!0),
                            u = "function" == typeof getComputedStyle && getComputedStyle(d),
                            v = u ? null : a(d),
                            w = parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")),
                            x = w + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2;
                        document.body.removeChild(c), this.sizeInfo = {
                            liHeight: o,
                            headerHeight: p,
                            searchHeight: q,
                            actionsHeight: r,
                            doneButtonHeight: s,
                            dividerHeight: t,
                            menuPadding: w,
                            menuExtras: x
                        }
                    }
                },
                setSize: function() {
                    if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                        var b, c, d, e, f = this,
                            g = this.$menu,
                            h = this.$menuInner,
                            i = a(window),
                            j = this.$newElement[0].offsetHeight,
                            k = this.sizeInfo.liHeight,
                            l = this.sizeInfo.headerHeight,
                            m = this.sizeInfo.searchHeight,
                            n = this.sizeInfo.actionsHeight,
                            o = this.sizeInfo.doneButtonHeight,
                            p = this.sizeInfo.dividerHeight,
                            q = this.sizeInfo.menuPadding,
                            r = this.sizeInfo.menuExtras,
                            s = this.options.hideDisabled ? ".disabled" : "",
                            t = function() {
                                d = f.$newElement.offset().top - i.scrollTop(), e = i.height() - d - j
                            };
                        if (t(), "auto" === this.options.size) {
                            var u = function() {
                                var i, j = function(b, c) {
                                        return function(d) {
                                            return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b))
                                        }
                                    },
                                    p = f.$menuInner[0].getElementsByTagName("li"),
                                    s = Array.prototype.filter ? Array.prototype.filter.call(p, j("hidden", !1)) : f.$lis.not(".hidden"),
                                    u = Array.prototype.filter ? Array.prototype.filter.call(s, j("dropdown-header", !0)) : s.filter(".dropdown-header");
                                t(), b = e - r, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && f.$newElement.toggleClass("dropup", d > e && b - r < c), f.$newElement.hasClass("dropup") && (b = d - r), i = s.length + u.length > 3 ? 3 * k + r - 2 : 0, g.css({
                                    "max-height": b + "px",
                                    overflow: "hidden",
                                    "min-height": i + l + m + n + o + "px"
                                }), h.css({
                                    "max-height": b - l - m - n - o - q + "px",
                                    "overflow-y": "auto",
                                    "min-height": Math.max(i - q, 0) + "px"
                                })
                            };
                            u(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", u), i.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", u)
                        } else if (this.options.size && "auto" != this.options.size && this.$lis.not(s).length > this.options.size) {
                            var v = this.$lis.not(".divider").not(s).children().slice(0, this.options.size).last().parent().index(),
                                w = this.$lis.slice(0, v + 1).filter(".divider").length;
                            b = k * this.options.size + w * p + q, f.options.container ? (g.data("height") || g.data("height", g.height()), c = g.data("height")) : c = g.height(), f.options.dropupAuto && this.$newElement.toggleClass("dropup", d > e && b - r < c), g.css({
                                "max-height": b + l + m + n + o + "px",
                                overflow: "hidden",
                                "min-height": ""
                            }), h.css({
                                "max-height": b - q + "px",
                                "overflow-y": "auto",
                                "min-height": ""
                            })
                        }
                    }
                },
                setWidth: function() {
                    if ("auto" === this.options.width) {
                        this.$menu.css("min-width", "0");
                        var a = this.$menu.parent().clone().appendTo("body"),
                            b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                            c = a.children(".dropdown-menu").outerWidth(),
                            d = b.css("width", "auto").children("button").outerWidth();
                        a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px")
                    } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                    this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
                },
                selectPosition: function() {
                    this.$bsContainer = a('<div class="bs-container" />');
                    var b, c, d = this,
                        e = function(a) {
                            d.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), c = a.hasClass("dropup") ? 0 : a[0].offsetHeight, d.$bsContainer.css({
                                top: b.top + c,
                                left: b.left,
                                width: a[0].offsetWidth
                            })
                        };
                    this.$button.on("click", function() {
                        var b = a(this);
                        d.isDisabled() || (e(d.$newElement), d.$bsContainer.appendTo(d.options.container).toggleClass("open", !b.hasClass("open")).append(d.$menu))
                    }), a(window).on("resize scroll", function() {
                        e(d.$newElement)
                    }), this.$element.on("hide.bs.select", function() {
                        d.$menu.data("height", d.$menu.height()), d.$bsContainer.detach()
                    })
                },
                setSelected: function(a, b, c) {
                    c || (c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b)
                },
                setDisabled: function(a, b, c) {
                    c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0)
                },
                isDisabled: function() {
                    return this.$element[0].disabled
                },
                checkDisabled: function() {
                    var a = this;
                    this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
                        return !a.isDisabled()
                    })
                },
                tabIndex: function() {
                    this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
                },
                clickListener: function() {
                    var b = this,
                        c = a(document);
                    this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) {
                        a.stopPropagation()
                    }), c.data("spaceSelect", !1), this.$button.on("keyup", function(a) {
                        /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1))
                    }), this.$button.on("click", function() {
                        b.setSize()
                    }), this.$element.on("shown.bs.select", function() {
                        if (b.options.liveSearch || b.multiple) {
                            if (!b.multiple) {
                                var a = b.liObj[b.$element[0].selectedIndex];
                                if ("number" != typeof a || !1 === b.options.size) return;
                                var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                                c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c
                            }
                        } else b.$menuInner.find(".selected a").focus()
                    }), this.$menuInner.on("click", "li a", function(c) {
                        var d = a(this),
                            e = d.parent().data("originalIndex"),
                            f = b.$element.val(),
                            g = b.$element.prop("selectedIndex");
                        if (b.multiple && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) {
                            var h = b.$element.find("option"),
                                i = h.eq(e),
                                j = i.prop("selected"),
                                k = i.parent("optgroup"),
                                l = b.options.maxOptions,
                                m = k.data("maxOptions") || !1;
                            if (b.multiple) {
                                if (i.prop("selected", !j), b.setSelected(e, !j), d.blur(), !1 !== l || !1 !== m) {
                                    var n = l < h.filter(":selected").length,
                                        o = m < k.find("option:selected").length;
                                    if (l && n || m && o)
                                        if (l && 1 == l) h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                                        else if (m && 1 == m) {
                                            k.find("option:selected").prop("selected", !1), i.prop("selected", !0);
                                            var p = d.parent().data("optgroup");
                                            b.$menuInner.find('[data-optgroup="' + p + '"]').removeClass("selected"), b.setSelected(e, !0)
                                        } else {
                                            var q = "function" == typeof b.options.maxOptionsText ? b.options.maxOptionsText(l, m) : b.options.maxOptionsText,
                                                r = q[0].replace("{n}", l),
                                                s = q[1].replace("{n}", m),
                                                t = a('<div class="notify"></div>');
                                            q[2] && (r = r.replace("{var}", q[2][l > 1 ? 0 : 1]), s = s.replace("{var}", q[2][m > 1 ? 0 : 1])), i.prop("selected", !1), b.$menu.append(t), l && n && (t.append(a("<div>" + r + "</div>")), b.$element.trigger("maxReached.bs.select")), m && o && (t.append(a("<div>" + s + "</div>")), b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                                b.setSelected(e, !1)
                                            }, 10), t.delay(750).fadeOut(300, function() {
                                                a(this).remove()
                                            })
                                        }
                                }
                            } else h.prop("selected", !1), i.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                            b.multiple ? b.options.liveSearch && b.$searchbox.focus() : b.$button.focus(), (f != b.$element.val() && b.multiple || g != b.$element.prop("selectedIndex") && !b.multiple) && b.$element.trigger("changed.bs.select", [e, i.prop("selected"), j]).triggerNative("change")
                        }
                    }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(c) {
                        c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus())
                    }), this.$menuInner.on("click", ".divider, .dropdown-header", function(a) {
                        a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus()
                    }), this.$menu.on("click", ".popover-title .close", function() {
                        b.$button.click()
                    }), this.$searchbox.on("click", function(a) {
                        a.stopPropagation()
                    }), this.$menu.on("click", ".actions-btn", function(c) {
                        b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll()
                    }), this.$element.change(function() {
                        b.render(!1)
                    })
                },
                liveSearchListener: function() {
                    var d = this,
                        e = a('<li class="no-results"></li>');
                    this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() {
                        d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                            d.$searchbox.focus()
                        }, 10)
                    }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(a) {
                        a.stopPropagation()
                    }), this.$searchbox.on("input propertychange", function() {
                        if (d.$searchbox.val()) {
                            var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                            f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function() {
                                var b = a(this),
                                    c = b.data("optgroup");
                                0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden"))
                            });
                            var g = d.$lis.not(".hidden");
                            g.each(function(b) {
                                var c = a(this);
                                c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden")
                            }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e))
                        } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                        d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus()
                    })
                },
                _searchStyle: function() {
                    return {
                            begins: "ibegins",
                            startsWith: "ibegins"
                        }[this.options.liveSearchStyle] || "icontains"
                },
                val: function(a) {
                    return void 0 !== a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val()
                },
                changeAll: function(b) {
                    void 0 === b && (b = !0), this.findLis();
                    for (var c = this.$element.find("option"), d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected", b), e = d.length, f = [], g = 0; g < e; g++) {
                        var h = d[g].getAttribute("data-original-index");
                        f[f.length] = c.eq(h)[0]
                    }
                    a(f).prop("selected", b), this.render(!1), this.$element.trigger("changed.bs.select").triggerNative("change")
                },
                selectAll: function() {
                    return this.changeAll(!0)
                },
                deselectAll: function() {
                    return this.changeAll(!1)
                },
                toggle: function(a) {
                    a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click")
                },
                keydown: function(c) {
                    var d, e, f, g, h, i, j, k, l, m = a(this),
                        n = m.is("input") ? m.parent().parent() : m.parent(),
                        o = n.data("this"),
                        p = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                        q = {
                            32: " ",
                            48: "0",
                            49: "1",
                            50: "2",
                            51: "3",
                            52: "4",
                            53: "5",
                            54: "6",
                            55: "7",
                            56: "8",
                            57: "9",
                            59: ";",
                            65: "a",
                            66: "b",
                            67: "c",
                            68: "d",
                            69: "e",
                            70: "f",
                            71: "g",
                            72: "h",
                            73: "i",
                            74: "j",
                            75: "k",
                            76: "l",
                            77: "m",
                            78: "n",
                            79: "o",
                            80: "p",
                            81: "q",
                            82: "r",
                            83: "s",
                            84: "t",
                            85: "u",
                            86: "v",
                            87: "w",
                            88: "x",
                            89: "y",
                            90: "z",
                            96: "0",
                            97: "1",
                            98: "2",
                            99: "3",
                            100: "4",
                            101: "5",
                            102: "6",
                            103: "7",
                            104: "8",
                            105: "9"
                        };
                    if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a("[role=menu] li", n), l = o.$newElement.hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90) && (o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), o.$searchbox.focus()), o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && 0 === o.$menu.find(".active").length && (c.preventDefault(), o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()), d = a("[role=menu] li" + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), d.length) {
                        if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function(b) {
                            a(this).hasClass("disabled") || a(this).data("index", b)
                        }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, e != j && e > i && (e = i), e < g && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, -1 == e && (e = 0), e != j && e < f && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).children("a").focus();
                        else if (!m.is("input")) {
                            var r, s, t = [];
                            d.each(function() {
                                a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index())
                            }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus()
                        }
                        if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) {
                            if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), m.focus());
                            else {
                                var u = a(":focus");
                                u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0)
                            }
                            a(document).data("keycount", 0)
                        }(/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus())
                    }
                },
                mobile: function() {
                    this.$element.addClass("mobile-device")
                },
                refresh: function() {
                    this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
                },
                hide: function() {
                    this.$newElement.hide()
                },
                show: function() {
                    this.$newElement.show()
                },
                remove: function() {
                    this.$newElement.remove(), this.$element.remove()
                },
                destroy: function() {
                    this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")
                }
            };
            var f = a.fn.selectpicker;
            a.fn.selectpicker = d, a.fn.selectpicker.Constructor = e, a.fn.selectpicker.noConflict = function() {
                return a.fn.selectpicker = f, this
            }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', e.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input', function(a) {
                a.stopPropagation()
            }), a(window).on("load.bs.select.data-api", function() {
                a(".selectpicker").each(function() {
                    var b = a(this);
                    d.call(b, b.data())
                })
            })
        }(a)
    });