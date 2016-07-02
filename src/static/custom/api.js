/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.15 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash underscore exports="amd,commonjs,global,node" -o ./dist/lodash.underscore.js`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
/*!
 * jQuery JavaScript Library v1.11.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:19Z
 */
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
/*
    HTML Clean for jQuery
    Anthony Johnston
    http://www.antix.co.uk

    version 1.3.0

    $Revision: 67 $

    requires jQuery http://jquery.com

    Use and distibution http://www.opensource.org/licenses/bsd-license.php

    2010-04-02 allowedTags/removeTags added (white/black list) thanks to David Wartian (Dwartian)
    2010-06-30 replaceStyles added for replacement of bold, italic, super and sub styles on a tag
    2012-04-30 allowedAttributes added, an array of attributed allowed on the elements
    */
/*! Native Promise Only
            v0.8.0-a (c) Kyle Simpson
            MIT License: http://getify.mit-license.org
        */
/*! Copyright 2012, Ben Lin (http://dreamerslab.com/)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 1.0.15
 *
 * Requires: jQuery >= 1.2.3
 */
/*!
 *
 * FIX-20160702 
 * Vincent Alcantara
 * vincentalcantara@gmail.com
 *
 * 2016-07-02:  Fixed an issue where questions that had type 'custom' did not render
 *
 */ 
var LearnosityAmd;
(function() {
    if (!LearnosityAmd || !LearnosityAmd.requirejs) {
        LearnosityAmd ? require = LearnosityAmd : LearnosityAmd = {};
        var require = {
                skipDataMain: !0
            },
            requirejs, require, define;
        (function(global) {
            function isFunction(e) {
                return ostring.call(e) === "[object Function]"
            }

            function isArray(e) {
                return ostring.call(e) === "[object Array]"
            }

            function each(e, t) {
                if (e) {
                    var n;
                    for (n = 0; n < e.length; n += 1)
                        if (e[n] && t(e[n], n, e)) break
                }
            }

            function eachReverse(e, t) {
                if (e) {
                    var n;
                    for (n = e.length - 1; n > -1; n -= 1)
                        if (e[n] && t(e[n], n, e)) break
                }
            }

            function hasProp(e, t) {
                return hasOwn.call(e, t)
            }

            function getOwn(e, t) {
                return hasProp(e, t) && e[t]
            }

            function eachProp(e, t) {
                var n;
                for (n in e)
                    if (hasProp(e, n) && t(e[n], n)) break
            }

            function mixin(e, t, n, r) {
                return t && eachProp(t, function(t, i) {
                    if (n || !hasProp(e, i)) r && typeof t == "object" && t && !isArray(t) && !isFunction(t) && !(t instanceof RegExp) ? (e[i] || (e[i] = {}), mixin(e[i], t, n, r)) : e[i] = t
                }), e
            }

            function bind(e, t) {
                return function() {
                    return t.apply(e, arguments)
                }
            }

            function scripts() {
                return document.getElementsByTagName("script")
            }

            function defaultOnError(e) {
                throw e
            }

            function getGlobal(e) {
                if (!e) return e;
                var t = global;
                return each(e.split("."), function(e) {
                    t = t[e]
                }), t
            }

            function makeError(e, t, n, r) {
                var i = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
                return i.requireType = e, i.requireModules = r, n && (i.originalError = n), i
            }

            function newContext(e) {
                function m(e) {
                    var t, n;
                    for (t = 0; t < e.length; t++) {
                        n = e[t];
                        if (n === ".") e.splice(t, 1), t -= 1;
                        else if (n === "..") {
                            if (t === 0 || t == 1 && e[2] === ".." || e[t - 1] === "..") continue;
                            t > 0 && (e.splice(t - 1, 2), t -= 2)
                        }
                    }
                }

                function g(e, t, n) {
                    var r, i, s, u, a, f, l, c, h, p, d, v, g = t && t.split("/"),
                        y = o.map,
                        b = y && y["*"];
                    e && (e = e.split("/"), l = e.length - 1, o.nodeIdCompat && jsSuffixRegExp.test(e[l]) && (e[l] = e[l].replace(jsSuffixRegExp, "")), e[0].charAt(0) === "." && g && (v = g.slice(0, g.length - 1), e = v.concat(e)), m(e), e = e.join("/"));
                    if (n && y && (g || b)) {
                        s = e.split("/");
                        e: for (u = s.length; u > 0; u -= 1) {
                            f = s.slice(0, u).join("/");
                            if (g)
                                for (a = g.length; a > 0; a -= 1) {
                                    i = getOwn(y, g.slice(0, a).join("/"));
                                    if (i) {
                                        i = getOwn(i, f);
                                        if (i) {
                                            c = i, h = u;
                                            break e
                                        }
                                    }
                                }!p && b && getOwn(b, f) && (p = getOwn(b, f), d = u)
                        }!c && p && (c = p, h = d), c && (s.splice(0, h, c), e = s.join("/"))
                    }
                    return r = getOwn(o.pkgs, e), r ? r : e
                }

                function y(e) {
                    isBrowser && each(scripts(), function(t) {
                        if (t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === r.contextName) return t.parentNode.removeChild(t), !0
                    })
                }

                function b(e) {
                    var t = getOwn(o.paths, e);
                    if (t && isArray(t) && t.length > 1) return t.shift(), r.require.undef(e), r.makeRequire(null, {
                        skipMap: !0
                    })([e]), !0
                }

                function w(e) {
                    var t, n = e ? e.indexOf("!") : -1;
                    return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                }

                function E(e, t, n, i) {
                    var s, o, u, a, f = null,
                        l = t ? t.name : null,
                        h = e,
                        p = !0,
                        m = "";
                    return e || (p = !1, e = "_@r" + (d += 1)), a = w(e), f = a[0], e = a[1], f && (f = g(f, l, i), o = getOwn(c, f)), e && (f ? o && o.normalize ? m = o.normalize(e, function(e) {
                        return g(e, l, i)
                    }) : m = e.indexOf("!") === -1 ? g(e, l, i) : e : (m = g(e, l, i), a = w(m), f = a[0], m = a[1], n = !0, s = r.nameToUrl(m))), u = f && !o && !n ? "_unnormalized" + (v += 1) : "", {
                        prefix: f,
                        name: m,
                        parentMap: t,
                        unnormalized: !!u,
                        url: s,
                        originalName: h,
                        isDefine: p,
                        id: (f ? f + "!" + m : m) + u
                    }
                }

                function S(e) {
                    var t = e.id,
                        n = getOwn(u, t);
                    return n || (n = u[t] = new r.Module(e)), n
                }

                function x(e, t, n) {
                    var r = e.id,
                        i = getOwn(u, r);
                    hasProp(c, r) && (!i || i.defineEmitComplete) ? t === "defined" && n(c[r]) : (i = S(e), i.error && t === "error" ? n(i.error) : i.on(t, n))
                }

                function T(e, t) {
                    var n = e.requireModules,
                        r = !1;
                    t ? t(e) : (each(n, function(t) {
                        var n = getOwn(u, t);
                        n && (n.error = e, n.events.error && (r = !0, n.emit("error", e)))
                    }), r || req.onError(e))
                }

                function N() {
                    globalDefQueue.length && (apsp.apply(l, [l.length, 0].concat(globalDefQueue)), globalDefQueue = [])
                }

                function C(e) {
                    delete u[e], delete a[e]
                }

                function k(e, t, n) {
                    var r = e.map.id;
                    e.error ? e.emit("error", e.error) : (t[r] = !0, each(e.depMaps, function(r, i) {
                        var s = r.id,
                            o = getOwn(u, s);
                        o && !e.depMatched[i] && !n[s] && (getOwn(t, s) ? (e.defineDep(i, c[s]), e.check()) : k(o, t, n))
                    }), n[r] = !0)
                }

                function L() {
                    var e, n, i = o.waitSeconds * 1e3,
                        u = i && r.startTime + i < (new Date).getTime(),
                        f = [],
                        l = [],
                        c = !1,
                        h = !0;
                    if (t) return;
                    t = !0, eachProp(a, function(e) {
                        var t = e.map,
                            r = t.id;
                        if (!e.enabled) return;
                        t.isDefine || l.push(e);
                        if (!e.error)
                            if (!e.inited && u) b(r) ? (n = !0, c = !0) : (f.push(r), y(r));
                            else if (!e.inited && e.fetched && t.isDefine) {
                            c = !0;
                            if (!t.prefix) return h = !1
                        }
                    });
                    if (u && f.length) return e = makeError("timeout", "Load timeout for modules: " + f, null, f), e.contextName = r.contextName, T(e);
                    h && each(l, function(e) {
                        k(e, {}, {})
                    }), (!u || n) && c && (isBrowser || isWebWorker) && !s && (s = setTimeout(function() {
                        s = 0, L()
                    }, 50)), t = !1
                }

                function A(e) {
                    hasProp(c, e[0]) || S(E(e[0], null, !0)).init(e[1], e[2])
                }

                function O(e, t, n, r) {
                    e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(n, t, !1)
                }

                function M(e) {
                    var t = e.currentTarget || e.srcElement;
                    return O(t, r.onScriptLoad, "load", "onreadystatechange"), O(t, r.onScriptError, "error"), {
                        node: t,
                        id: t && t.getAttribute("data-requiremodule")
                    }
                }

                function _() {
                    var e;
                    N();
                    while (l.length) {
                        e = l.shift();
                        if (e[0] === null) return T(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                        A(e)
                    }
                }
                var t, n, r, i, s, o = {
                        waitSeconds: 7,
                        baseUrl: "./",
                        paths: {},
                        bundles: {},
                        pkgs: {},
                        shim: {},
                        config: {}
                    },
                    u = {},
                    a = {},
                    f = {},
                    l = [],
                    c = {},
                    h = {},
                    p = {},
                    d = 1,
                    v = 1;
                return i = {
                    require: function(e) {
                        return e.require ? e.require : e.require = r.makeRequire(e.map)
                    },
                    exports: function(e) {
                        e.usingExports = !0;
                        if (e.map.isDefine) return e.exports ? c[e.map.id] = e.exports : e.exports = c[e.map.id] = {}
                    },
                    module: function(e) {
                        return e.module ? e.module : e.module = {
                            id: e.map.id,
                            uri: e.map.url,
                            config: function() {
                                return getOwn(o.config, e.map.id) || {}
                            },
                            exports: e.exports || (e.exports = {})
                        }
                    }
                }, n = function(e) {
                    this.events = getOwn(f, e.id) || {}, this.map = e, this.shim = getOwn(o.shim, e.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
                }, n.prototype = {
                    init: function(e, t, n, r) {
                        r = r || {};
                        if (this.inited) return;
                        this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this, function(e) {
                            this.emit("error", e)
                        })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check()
                    },
                    defineDep: function(e, t) {
                        this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
                    },
                    fetch: function() {
                        if (this.fetched) return;
                        this.fetched = !0, r.startTime = (new Date).getTime();
                        var e = this.map;
                        if (!this.shim) return e.prefix ? this.callPlugin() : this.load();
                        r.makeRequire(this.map, {
                            enableBuildCallback: !0
                        })(this.shim.deps || [], bind(this, function() {
                            return e.prefix ? this.callPlugin() : this.load()
                        }))
                    },
                    load: function() {
                        var e = this.map.url;
                        h[e] || (h[e] = !0, r.load(this.map.id, e))
                    },
                    check: function() {
                        if (!this.enabled || this.enabling) return;
                        var e, t, n = this.map.id,
                            i = this.depExports,
                            s = this.exports,
                            o = this.factory;
                        if (!this.inited) this.fetch();
                        else if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            this.defining = !0;
                            if (this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        s = r.execCb(n, o, i, s)
                                    } catch (u) {
                                        e = u
                                    } else s = r.execCb(n, o, i, s);
                                    this.map.isDefine && s === undefined && (t = this.module, t ? s = t.exports : this.usingExports && (s = this.exports));
                                    if (e) return e.requireMap = this.map, e.requireModules = this.map.isDefine ? [this.map.id] : null, e.requireType = this.map.isDefine ? "define" : "require", T(this.error = e)
                                } else s = o;
                                this.exports = s, this.map.isDefine && !this.ignore && (c[n] = s, req.onResourceLoad && req.onResourceLoad(r, this.map, this.depMaps)), C(n), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    },
                    callPlugin: function() {
                        var e = this.map,
                            t = e.id,
                            n = E(e.prefix);
                        this.depMaps.push(n), x(n, "defined", bind(this, function(n) {
                            var i, s, a, f = getOwn(p, this.map.id),
                                l = this.map.name,
                                c = this.map.parentMap ? this.map.parentMap.name : null,
                                h = r.makeRequire(e.parentMap, {
                                    enableBuildCallback: !0
                                });
                            if (this.map.unnormalized) {
                                n.normalize && (l = n.normalize(l, function(e) {
                                    return g(e, c, !0)
                                }) || ""), s = E(e.prefix + "!" + l, this.map.parentMap), x(s, "defined", bind(this, function(e) {
                                    this.init([], function() {
                                        return e
                                    }, null, {
                                        enabled: !0,
                                        ignore: !0
                                    })
                                })), a = getOwn(u, s.id), a && (this.depMaps.push(s), this.events.error && a.on("error", bind(this, function(e) {
                                    this.emit("error", e)
                                })), a.enable());
                                return
                            }
                            if (f) {
                                this.map.url = r.nameToUrl(f), this.load();
                                return
                            }
                            i = bind(this, function(e) {
                                this.init([], function() {
                                    return e
                                }, null, {
                                    enabled: !0
                                })
                            }), i.error = bind(this, function(e) {
                                this.inited = !0, this.error = e, e.requireModules = [t], eachProp(u, function(e) {
                                    e.map.id.indexOf(t + "_unnormalized") === 0 && C(e.map.id)
                                }), T(e)
                            }), i.fromText = bind(this, function(n, s) {
                                var u = e.name,
                                    a = E(u),
                                    f = useInteractive;
                                s && (n = s), f && (useInteractive = !1), S(a), hasProp(o.config, t) && (o.config[u] = o.config[t]);
                                try {
                                    req.exec(n)
                                } catch (l) {
                                    return T(makeError("fromtexteval", "fromText eval for " + t + " failed: " + l, l, [t]))
                                }
                                f && (useInteractive = !0), this.depMaps.push(a), r.completeLoad(u), h([u], i)
                            }), n.load(e.name, h, i, o)
                        })), r.enable(n, this), this.pluginMaps[n.id] = n
                    },
                    enable: function() {
                        a[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(e, t) {
                            var n, s, o;
                            if (typeof e == "string") {
                                e = E(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, o = getOwn(i, e.id);
                                if (o) {
                                    this.depExports[t] = o(this);
                                    return
                                }
                                this.depCount += 1, x(e, "defined", bind(this, function(e) {
                                    this.defineDep(t, e), this.check()
                                })), this.errback && x(e, "error", bind(this, this.errback))
                            }
                            n = e.id, s = u[n], !hasProp(i, n) && s && !s.enabled && r.enable(e, this)
                        })), eachProp(this.pluginMaps, bind(this, function(e) {
                            var t = getOwn(u, e.id);
                            t && !t.enabled && r.enable(e, this)
                        })), this.enabling = !1, this.check()
                    },
                    on: function(e, t) {
                        var n = this.events[e];
                        n || (n = this.events[e] = []), n.push(t)
                    },
                    emit: function(e, t) {
                        each(this.events[e], function(e) {
                            e(t)
                        }), e === "error" && delete this.events[e]
                    }
                }, r = {
                    config: o,
                    contextName: e,
                    registry: u,
                    defined: c,
                    urlFetched: h,
                    defQueue: l,
                    Module: n,
                    makeModuleMap: E,
                    nextTick: req.nextTick,
                    onError: T,
                    configure: function(e) {
                        e.baseUrl && e.baseUrl.charAt(e.baseUrl.length - 1) !== "/" && (e.baseUrl += "/");
                        var t = o.shim,
                            n = {
                                paths: !0,
                                bundles: !0,
                                config: !0,
                                map: !0
                            };
                        eachProp(e, function(e, t) {
                            n[t] ? (o[t] || (o[t] = {}), mixin(o[t], e, !0, !0)) : o[t] = e
                        }), e.bundles && eachProp(e.bundles, function(e, t) {
                            each(e, function(e) {
                                e !== t && (p[e] = t)
                            })
                        }), e.shim && (eachProp(e.shim, function(e, n) {
                            isArray(e) && (e = {
                                deps: e
                            }), (e.exports || e.init) && !e.exportsFn && (e.exportsFn = r.makeShimExports(e)), t[n] = e
                        }), o.shim = t), e.packages && each(e.packages, function(e) {
                            var t, n;
                            e = typeof e == "string" ? {
                                name: e
                            } : e, n = e.name, t = e.location, t && (o.paths[n] = e.location), o.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                        }), eachProp(u, function(e, t) {
                            !e.inited && !e.map.unnormalized && (e.map = E(t))
                        }), (e.deps || e.callback) && r.require(e.deps || [], e.callback)
                    },
                    makeShimExports: function(e) {
                        function t() {
                            var t;
                            return e.init && (t = e.init.apply(global, arguments)), t || e.exports && getGlobal(e.exports)
                        }
                        return t
                    },
                    makeRequire: function(t, n) {
                        function s(o, a, f) {
                            var l, h, p;
                            return n.enableBuildCallback && a && isFunction(a) && (a.__requireJsBuild = !0), typeof o == "string" ? isFunction(a) ? T(makeError("requireargs", "Invalid require call"), f) : t && hasProp(i, o) ? i[o](u[t.id]) : req.get ? req.get(r, o, t, s) : (h = E(o, t, !1, !0), l = h.id, hasProp(c, l) ? c[l] : T(makeError("notloaded", 'Module name "' + l + '" has not been loaded yet for context: ' + e + (t ? "" : ". Use require([])")))) : (_(), r.nextTick(function() {
                                _(), p = S(E(null, t)), p.skipMap = n.skipMap, p.init(o, a, f, {
                                    enabled: !0
                                }), L()
                            }), s)
                        }
                        return n = n || {}, mixin(s, {
                            isBrowser: isBrowser,
                            toUrl: function(e) {
                                var n, i = e.lastIndexOf("."),
                                    s = e.split("/")[0],
                                    o = s === "." || s === "..";
                                return i !== -1 && (!o || i > 1) && (n = e.substring(i, e.length), e = e.substring(0, i)), r.nameToUrl(g(e, t && t.id, !0), n, !0)
                            },
                            defined: function(e) {
                                return hasProp(c, E(e, t, !1, !0).id)
                            },
                            specified: function(e) {
                                return e = E(e, t, !1, !0).id, hasProp(c, e) || hasProp(u, e)
                            }
                        }), t || (s.undef = function(e) {
                            N();
                            var n = E(e, t, !0),
                                r = getOwn(u, e);
                            y(e), delete c[e], delete h[n.url], delete f[e], eachReverse(l, function(t, n) {
                                t[0] === e && l.splice(n, 1)
                            }), r && (r.events.defined && (f[e] = r.events), C(e))
                        }), s
                    },
                    enable: function(e) {
                        var t = getOwn(u, e.id);
                        t && S(e).enable()
                    },
                    completeLoad: function(e) {
                        var t, n, r, i = getOwn(o.shim, e) || {},
                            s = i.exports;
                        N();
                        while (l.length) {
                            n = l.shift();
                            if (n[0] === null) {
                                n[0] = e;
                                if (t) break;
                                t = !0
                            } else n[0] === e && (t = !0);
                            A(n)
                        }
                        r = getOwn(u, e);
                        if (!t && !hasProp(c, e) && r && !r.inited) {
                            if (o.enforceDefine && (!s || !getGlobal(s))) {
                                if (b(e)) return;
                                return T(makeError("nodefine", "No define call for " + e, null, [e]))
                            }
                            A([e, i.deps || [], i.exportsFn])
                        }
                        L()
                    },
                    nameToUrl: function(e, t, n) {
                        var i, s, u, a, f, l, c, h = getOwn(o.pkgs, e);
                        h && (e = h), c = getOwn(p, e);
                        if (c) return r.nameToUrl(c, t, n);
                        if (req.jsExtRegExp.test(e)) f = e + (t || "");
                        else {
                            i = o.paths, s = e.split("/");
                            for (u = s.length; u > 0; u -= 1) {
                                a = s.slice(0, u).join("/"), l = getOwn(i, a);
                                if (l) {
                                    isArray(l) && (l = l[0]), s.splice(0, u, l);
                                    break
                                }
                            }
                            f = s.join("/"), f += t || (/^data\:|\?/.test(f) || n ? "" : ".js"), f = (f.charAt(0) === "/" || f.match(/^[\w\+\.\-]+:/) ? "" : o.baseUrl) + f
                        }
                        return o.urlArgs ? f + ((f.indexOf("?") === -1 ? "?" : "&") + o.urlArgs) : f
                    },
                    load: function(e, t) {
                        req.load(r, e, t)
                    },
                    execCb: function(e, t, n, r) {
                        return t.apply(r, n)
                    },
                    onScriptLoad: function(e) {
                        if (e.type === "load" || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                            interactiveScript = null;
                            var t = M(e);
                            r.completeLoad(t.id)
                        }
                    },
                    onScriptError: function(e) {
                        var t = M(e);
                        if (!b(t.id)) return T(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
                    }
                }, r.require = r.makeRequire(), r
            }

            function getInteractiveScript() {
                return interactiveScript && interactiveScript.readyState === "interactive" ? interactiveScript : (eachReverse(scripts(), function(e) {
                    if (e.readyState === "interactive") return interactiveScript = e
                }), interactiveScript)
            }
            var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.15",
                commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
                cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
                jsSuffixRegExp = /\.js$/,
                currDirRegExp = /^\.\//,
                op = Object.prototype,
                ostring = op.toString,
                hasOwn = op.hasOwnProperty,
                ap = Array.prototype,
                apsp = ap.splice,
                isBrowser = typeof window != "undefined" && typeof navigator != "undefined" && !!window.document,
                isWebWorker = !isBrowser && typeof importScripts != "undefined",
                readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
                defContextName = "_",
                isOpera = typeof opera != "undefined" && opera.toString() === "[object Opera]",
                contexts = {},
                cfg = {},
                globalDefQueue = [],
                useInteractive = !1;
            if (typeof define != "undefined") return;
            if (typeof requirejs != "undefined") {
                if (isFunction(requirejs)) return;
                cfg = requirejs, requirejs = undefined
            }
            typeof require != "undefined" && !isFunction(require) && (cfg = require, require = undefined), req = requirejs = function(e, t, n, r) {
                var i, s, o = defContextName;
                return !isArray(e) && typeof e != "string" && (s = e, isArray(t) ? (e = t, t = n, n = r) : e = []), s && s.context && (o = s.context), i = getOwn(contexts, o), i || (i = contexts[o] = req.s.newContext(o)), s && i.configure(s), i.require(e, t, n)
            }, req.config = function(e) {
                return req(e)
            }, req.nextTick = typeof setTimeout != "undefined" ? function(e) {
                setTimeout(e, 4)
            } : function(e) {
                e()
            }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
                contexts: contexts,
                newContext: newContext
            }, req({}), each(["toUrl", "undef", "defined", "specified"], function(e) {
                req[e] = function() {
                    var t = contexts[defContextName];
                    return t.require[e].apply(t, arguments)
                }
            }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(e, t, n) {
                var r = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
                return r.type = e.scriptType || "text/javascript", r.charset = "utf-8", r.async = !0, r
            }, req.load = function(e, t, n) {
                var r = e && e.config || {},
                    i;
                if (isBrowser) return i = req.createNode(r, t, n), i.setAttribute("data-requirecontext", e.contextName), i.setAttribute("data-requiremodule", t), i.attachEvent && !(i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0) && !isOpera ? (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)) : (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)), i.src = n, currentlyAddingScript = i, baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i), currentlyAddingScript = null, i;
                if (isWebWorker) try {
                    importScripts(n), e.completeLoad(t)
                } catch (s) {
                    e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, s, [t]))
                }
            }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(e) {
                head || (head = e.parentNode), dataMain = e.getAttribute("data-main");
                if (dataMain) return mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0
            }), define = function(e, t, n) {
                var r, i;
                typeof e != "string" && (n = t, t = e, e = null), isArray(t) || (n = t, t = null), !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(e, n) {
                    t.push(n)
                }), t = (n.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(t))), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), i = contexts[r.getAttribute("data-requirecontext")])), (i ? i.defQueue : globalDefQueue).push([e, t, n])
            }, define.amd = {
                jQuery: !0
            }, req.exec = function(text) {
                return eval(text)
            }, req(cfg)
        })(this), LearnosityAmd.requirejs = requirejs, LearnosityAmd.require = require, LearnosityAmd.define = define
    }
})(), LearnosityAmd.define("vendor/lodash.underscore", [], function() {
        "use strict";
        return function() {
            function x(e, t, n) {
                var r = (n || 0) - 1,
                    i = e ? ut(e) : 0;
                while (++r < i)
                    if (e[r] === t) return r;
                return -1
            }

            function T(e, t) {
                var n = e.criteria,
                    r = t.criteria,
                    i = -1,
                    s = ut(n);
                while (++i < s) {
                    var o = n[i],
                        u = r[i];
                    if (o !== u) {
                        if (o > u || typeof o == "undefined") return 1;
                        if (o < u || typeof u == "undefined") return -1
                    }
                }
                return e.index - t.index
            }

            function N(e) {
                return "\\" + g[e]
            }

            function C(e, t, n) {
                t || (t = 0), typeof n == "undefined" && (n = e ? ut(e) : 0);
                var r = -1,
                    i = n - t || 0,
                    s = Array(i < 0 ? 0 : i);
                while (++r < i) s[r] = e[t + r];
                return s
            }

            function X(e) {
                return e instanceof X ? e : new V(e)
            }

            function V(e, t) {
                this.__chain__ = !!t, this.__wrapped__ = e
            }

            function J(e) {
                function i() {
                    if (n) {
                        var e = C(n);
                        H.apply(e, arguments)
                    }
                    if (this instanceof i) {
                        var s = K(t.prototype),
                            o = t.apply(s, e || arguments);
                        return Dt(o) ? o : s
                    }
                    return t.apply(r, e || arguments)
                }
                var t = e[0],
                    n = e[2],
                    r = e[4];
                return i
            }

            function K(e, t) {
                return Dt(e) ? j(e) : {}
            }

            function Q(e, t, n) {
                if (typeof e != "function") return $n;
                if (typeof t != "undefined" && "prototype" in e) {
                    switch (n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return e.call(t, n, r, i)
                            };
                        case 4:
                            return function(n, r, i, s) {
                                return e.call(t, n, r, i, s)
                            }
                    }
                    return Pn(e, t)
                }
                return e
            }

            function G(e) {
                function h() {
                    var e = u ? s : this;
                    if (r) {
                        var p = C(r);
                        H.apply(p, arguments)
                    }
                    if (i || f) {
                        p || (p = C(arguments)), i && H.apply(p, i);
                        if (f && ut(p) < o) return n |= 16, G([t, l ? n : n & -4, p, null, s, o])
                    }
                    p || (p = arguments), a && (t = e[c]);
                    if (this instanceof h) {
                        e = K(t.prototype);
                        var d = t.apply(e, p);
                        return Dt(d) ? d : e
                    }
                    return t.apply(e, p)
                }
                var t = e[0],
                    n = e[1],
                    r = e[2],
                    i = e[3],
                    s = e[4],
                    o = e[5],
                    u = n & 1,
                    a = n & 2,
                    f = n & 4,
                    l = n & 8,
                    c = t;
                return h
            }

            function Y(e, t) {
                var n = -1,
                    r = ot(),
                    i = e ? ut(e) : 0,
                    s = [];
                while (++n < i) {
                    var o = e[n];
                    r(t, o) < 0 && s.push(o)
                }
                return s
            }

            function Z(e, t, n, r) {
                var i = (r || 0) - 1,
                    s = e ? ut(e) : 0,
                    o = [];
                while (++i < s) {
                    var u = e[i];
                    if (u && typeof u == "object" && typeof ut(u) == "number" && (ct(u) || lt(u))) {
                        t || (u = Z(u, t, n));
                        var a = -1,
                            f = ut(u),
                            l = ut(o);
                        o.length += f;
                        while (++a < f) o[l++] = u[a]
                    } else n || o.push(u)
                }
                return o
            }

            function et(e, t, r, i) {
                if (e === t) return e !== 0 || 1 / e == 1 / t;
                var s = typeof e,
                    o = typeof t;
                if (e === e && (!e || !m[s]) && (!t || !m[o])) return !1;
                if (e == null || t == null) return e === t;
                var u = O.call(e),
                    c = O.call(t);
                if (u != c) return !1;
                switch (u) {
                    case f:
                    case l:
                        return +e == +t;
                    case h:
                        return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                    case d:
                    case v:
                        return e == String(t)
                }
                var g = u == a;
                if (!g) {
                    var y = e instanceof X,
                        b = t instanceof X;
                    if (y || b) return et(y ? e.__wrapped__ : e, b ? t.__wrapped__ : t, r, i);
                    if (u != p) return !1;
                    var w = e.constructor,
                        E = t.constructor;
                    if (w != E && !(_t(w) && w instanceof w && _t(E) && E instanceof E) && "constructor" in e && "constructor" in t) return !1
                }
                r || (r = []), i || (i = []);
                var S = ut(r);
                while (S--)
                    if (r[S] == e) return i[S] == t;
                var x = !0,
                    T = 0;
                r.push(e), i.push(t);
                if (g) {
                    T = ut(t), x = T == ut(e);
                    if (x)
                        while (T--)
                            if (!(x = et(e[T], t[T], r, i))) break
                } else Et(t, function(t, s, o) {
                    if (P.call(o, s)) return T++, !(x = P.call(e, s) && et(e[s], t, r, i)) && n
                }), x && Et(e, function(e, t, r) {
                    if (P.call(r, t)) return !(x = --T > -1) && n
                });
                return r.pop(), i.pop(), x
            }

            function tt(e, t) {
                return e + D(W() * (t - e + 1))
            }

            function nt(e, t, n) {
                var r = -1,
                    i = ot(),
                    s = e ? ut(e) : 0,
                    o = [],
                    u = n ? [] : o;
                while (++r < s) {
                    var a = e[r],
                        f = n ? n(a, r, e) : a;
                    if (t ? !r || u[ut(u) - 1] !== f : i(u, f) < 0) n && u.push(f), o.push(a)
                }
                return o
            }

            function rt(e) {
                return function(t, n, r) {
                    var i = {};
                    n = Xn(n, r, 3);
                    var s = -1,
                        o = t ? ut(t) : 0;
                    if (typeof o == "number")
                        while (++s < o) {
                            var u = t[s];
                            e(i, u, n(u, s, t), t)
                        } else St(t, function(t, r, s) {
                            e(i, t, n(t, r, s), s)
                        });
                    return i
                }
            }

            function it(e, t, n, r, i, s) {
                var o = t & 1,
                    u = t & 2,
                    a = t & 4,
                    f = t & 8,
                    l = t & 16,
                    c = t & 32;
                if (!u && !_t(e)) throw new TypeError;
                l && !ut(n) && (t &= -17, l = n = !1), c && !ut(r) && (t &= -33, c = r = !1);
                var h = t == 1 || t === 17 ? J : G;
                return h([e, t, n, r, i, s])
            }

            function st(e) {
                return dt[e]
            }

            function ot() {
                var e = (e = X.indexOf) === wn ? x : e;
                return e
            }

            function ut(t) {
                return t == null ? e : t.length
            }

            function at(e) {
                return typeof e == "function" && M.test(e)
            }

            function ft(e) {
                return vt[e]
            }

            function lt(e) {
                return e && typeof e == "object" && typeof ut(e) == "number" && O.call(e) == u || !1
            }

            function yt(e) {
                if (!e) return e;
                for (var t = 1, n = ut(arguments); t < n; t++) {
                    var r = arguments[t];
                    if (r)
                        for (var i in r) e[i] = r[i]
                }
                return e
            }

            function bt(e) {
                return Dt(e) ? ct(e) ? C(e) : yt({}, e) : e
            }

            function wt(e) {
                if (!e) return e;
                for (var t = 1, n = ut(arguments); t < n; t++) {
                    var r = arguments[t];
                    if (r)
                        for (var i in r) typeof e[i] == "undefined" && (e[i] = r[i])
                }
                return e
            }

            function xt(e) {
                var t = [];
                return Et(e, function(e, n) {
                    _t(e) && t.push(n)
                }), t.sort()
            }

            function Tt(e, t) {
                return e ? P.call(e, t) : !1
            }

            function Nt(e) {
                var t = -1,
                    n = pt(e),
                    r = ut(n),
                    i = {};
                while (++t < r) {
                    var s = n[t];
                    i[e[s]] = s
                }
                return i
            }

            function Ct(e) {
                return e === !0 || e === !1 || e && typeof e == "object" && O.call(e) == f || !1
            }

            function kt(e) {
                return e && typeof e == "object" && O.call(e) == l || !1
            }

            function Lt(e) {
                return e && e.nodeType === 1 || !1
            }

            function At(e) {
                if (!e) return !0;
                if (ct(e) || Ft(e)) return !ut(e);
                for (var t in e)
                    if (P.call(e, t)) return !1;
                return !0
            }

            function Ot(e, t) {
                return et(e, t)
            }

            function Mt(e) {
                return I(e) && !q(parseFloat(e))
            }

            function _t(e) {
                return typeof e == "function"
            }

            function Dt(e) {
                return !!e && !!m[typeof e]
            }

            function Pt(e) {
                return Bt(e) && e != +e
            }

            function Ht(e) {
                return e === null
            }

            function Bt(e) {
                return typeof e == "number" || e && typeof e == "object" && O.call(e) == h || !1
            }

            function jt(e) {
                return e && m[typeof e] && O.call(e) == d || !1
            }

            function Ft(e) {
                return typeof e == "string" || e && typeof e == "object" && O.call(e) == v || !1
            }

            function It(e) {
                return typeof e == "undefined"
            }

            function qt(e) {
                var t = [];
                Et(e, function(e, n) {
                    t.push(n)
                }), t = Y(t, Z(arguments, !0, !1, 1));
                var n = -1,
                    r = ut(t),
                    i = {};
                while (++n < r) {
                    var s = t[n];
                    i[s] = e[s]
                }
                return i
            }

            function Rt(e) {
                var t = -1,
                    n = pt(e),
                    r = ut(n),
                    i = Array(r);
                while (++t < r) {
                    var s = n[t];
                    i[t] = [s, e[s]]
                }
                return i
            }

            function Ut(e) {
                var t = -1,
                    n = Z(arguments, !0, !1, 1),
                    r = ut(n),
                    i = {};
                while (++t < r) {
                    var s = n[t];
                    s in e && (i[s] = e[s])
                }
                return i
            }

            function zt(e) {
                var t = -1,
                    n = pt(e),
                    r = ut(n),
                    i = Array(r);
                while (++t < r) i[t] = e[n[t]];
                return i
            }

            function Wt(e, t) {
                var r = ot(),
                    i = e ? ut(e) : 0,
                    s = !1;
                return i && typeof i == "number" ? s = r(e, t) > -1 : St(e, function(e) {
                    return (s = e === t) && n
                }), s
            }

            function Vt(e, t, r) {
                var i = !0;
                t = Xn(t, r, 3);
                var s = -1,
                    o = e ? ut(e) : 0;
                if (typeof o == "number") {
                    while (++s < o)
                        if (!(i = !!t(e[s], s, e))) break
                } else St(e, function(e, r, s) {
                    return !(i = !!t(e, r, s)) && n
                });
                return i
            }

            function $t(e, t, n) {
                var r = [];
                t = Xn(t, n, 3);
                var i = -1,
                    s = e ? ut(e) : 0;
                if (typeof s == "number")
                    while (++i < s) {
                        var o = e[i];
                        t(o, i, e) && r.push(o)
                    } else St(e, function(e, n, i) {
                        t(e, n, i) && r.push(e)
                    });
                return r
            }

            function Jt(e, t, r) {
                t = Xn(t, r, 3);
                var i = -1,
                    s = e ? ut(e) : 0;
                if (typeof s != "number") {
                    var u;
                    return St(e, function(e, r, i) {
                        if (t(e, r, i)) return u = e, n
                    }), u
                }
                while (++i < s) {
                    var o = e[i];
                    if (t(o, i, e)) return o
                }
            }

            function Kt(e, t) {
                return vn(e, t, !0)
            }

            function Qt(e, t, r) {
                var i = -1,
                    s = e ? ut(e) : 0;
                t = t && typeof r == "undefined" ? t : Q(t, r, 3);
                if (typeof s == "number") {
                    while (++i < s)
                        if (t(e[i], i, e) === n) break
                } else St(e, t)
            }

            function Gt(e, t) {
                var r = e ? ut(e) : 0;
                if (typeof r == "number") {
                    while (r--)
                        if (t(e[r], r, e) === !1) break
                } else {
                    var i = pt(e);
                    r = ut(i), St(e, function(e, s, o) {
                        return s = i ? i[--r] : --r, t(o[s], s, o) === !1 && n
                    })
                }
            }

            function en(e, t) {
                var n = C(arguments, 2),
                    r = -1,
                    i = typeof t == "function",
                    s = e ? ut(e) : 0,
                    o = Array(typeof s == "number" ? s : 0);
                return Qt(e, function(e) {
                    o[++r] = (i ? t : e[t]).apply(e, n)
                }), o
            }

            function tn(e, t, n) {
                var r = -1,
                    i = e ? ut(e) : 0;
                t = Xn(t, n, 3);
                if (typeof i == "number") {
                    var s = Array(i);
                    while (++r < i) s[r] = t(e[r], r, e)
                } else s = [], St(e, function(e, n, i) {
                    s[++r] = t(e, n, i)
                });
                return s
            }

            function nn(e, t, n) {
                var r = -Infinity,
                    i = r;
                typeof t != "function" && n && n[t] === e && (t = null);
                var s = -1,
                    o = e ? ut(e) : 0;
                if (t == null && typeof o == "number")
                    while (++s < o) {
                        var u = e[s];
                        u > i && (i = u)
                    } else t = Xn(t, n, 3), Qt(e, function(e, n, s) {
                        var o = t(e, n, s);
                        o > r && (r = o, i = e)
                    });
                return i
            }

            function rn(e, t, n) {
                var r = Infinity,
                    i = r;
                typeof t != "function" && n && n[t] === e && (t = null);
                var s = -1,
                    o = e ? ut(e) : 0;
                if (t == null && typeof o == "number")
                    while (++s < o) {
                        var u = e[s];
                        u < i && (i = u)
                    } else t = Xn(t, n, 3), Qt(e, function(e, n, s) {
                        var o = t(e, n, s);
                        o < r && (r = o, i = e)
                    });
                return i
            }

            function on(e, t, n, r) {
                if (!e) return n;
                var i = ut(arguments) < 3;
                t = Xn(t, r, 4);
                var s = -1,
                    o = ut(e);
                if (typeof o == "number") {
                    i && (n = e[++s]);
                    while (++s < o) n = t(n, e[s], s, e)
                } else St(e, function(e, r, s) {
                    n = i ? (i = !1, e) : t(n, e, r, s)
                });
                return n
            }

            function un(e, t, n, r) {
                var i = ut(arguments) < 3;
                return t = Xn(t, r, 4), Gt(e, function(e, r, s) {
                    n = i ? (i = !1, e) : t(n, e, r, s)
                }), n
            }

            function an(e, t, n) {
                return t = Xn(t, n, 3), $t(e, function(e, n, r) {
                    return !t(e, n, r)
                })
            }

            function fn(t, n, r) {
                t && typeof ut(t) != "number" && (t = zt(t));
                if (n == null || r) return t ? t[tt(0, ut(t) - 1)] : e;
                var i = ln(t);
                return i.length = z(U(0, n), ut(i)), i
            }

            function ln(e) {
                var t = -1,
                    n = e ? ut(e) : 0,
                    r = Array(typeof n == "number" ? n : 0);
                return Qt(e, function(e) {
                    var n = tt(0, ++t);
                    r[t] = r[n], r[n] = e
                }), r
            }

            function cn(e) {
                var t = e ? ut(e) : 0;
                return typeof t == "number" ? t : ut(pt(e))
            }

            function hn(e, t, r) {
                var i;
                t = Xn(t, r, 3);
                var s = -1,
                    o = e ? ut(e) : 0;
                if (typeof o == "number") {
                    while (++s < o)
                        if (i = t(e[s], s, e)) break
                } else St(e, function(e, r, s) {
                    return (i = t(e, r, s)) && n
                });
                return !!i
            }

            function pn(e, t, n) {
                var r = -1,
                    i = e ? ut(e) : 0,
                    s = Array(typeof i == "number" ? i : 0);
                t = Xn(t, n, 3), Qt(e, function(e, n, i) {
                    s[++r] = {
                        criteria: [t(e, n, i)],
                        index: r,
                        value: e
                    }
                }), i = ut(s), s.sort(T);
                while (i--) s[i] = s[i].value;
                return s
            }

            function dn(e) {
                return ct(e) ? C(e) : e && typeof ut(e) == "number" ? tn(e) : zt(e)
            }

            function vn(t, n, r) {
                return r && At(n) ? e : (r ? Jt : $t)(t, n)
            }

            function mn(e) {
                var t = -1,
                    n = e ? ut(e) : 0,
                    r = [];
                while (++t < n) {
                    var i = e[t];
                    i && r.push(i)
                }
                return r
            }

            function gn(e) {
                return Y(e, Z(arguments, !0, !0, 1))
            }

            function yn(t, n, r) {
                var i = 0,
                    s = t ? ut(t) : 0;
                if (typeof n != "number" && n != null) {
                    var o = -1;
                    n = Xn(n, r, 3);
                    while (++o < s && n(t[o], o, t)) i++
                } else {
                    i = n;
                    if (i == null || r) return t ? t[0] : e
                }
                return C(t, 0, z(U(0, i), s))
            }

            function bn(e, t) {
                return Z(e, t)
            }

            function wn(e, t, n) {
                if (typeof n == "number") {
                    var r = e ? ut(e) : 0;
                    n = n < 0 ? U(0, r + n) : n || 0
                } else if (n) {
                    var i = kn(e, t);
                    return e[i] === t ? i : -1
                }
                return x(e, t, n)
            }

            function En(e, t, n) {
                var r = 0,
                    i = e ? ut(e) : 0;
                if (typeof t != "number" && t != null) {
                    var s = i;
                    t = Xn(t, n, 3);
                    while (s-- && t(e[s], s, e)) r++
                } else r = t == null || n ? 1 : t || r;
                return C(e, 0, z(U(0, i - r), i))
            }

            function Sn() {
                var e = [],
                    t = -1,
                    n = ut(arguments);
                while (++t < n) {
                    var r = arguments[t];
                    (ct(r) || lt(r)) && e.push(r)
                }
                var i = e[0],
                    s = -1,
                    o = ot(),
                    u = i ? ut(i) : 0,
                    a = [];
                e: while (++s < u) {
                    r = i[s];
                    if (o(a, r) < 0) {
                        var t = n;
                        while (--t)
                            if (o(e[t], r) < 0) continue e;
                        a.push(r)
                    }
                }
                return a
            }

            function xn(t, n, r) {
                var i = 0,
                    s = t ? ut(t) : 0;
                if (typeof n != "number" && n != null) {
                    var o = s;
                    n = Xn(n, r, 3);
                    while (o-- && n(t[o], o, t)) i++
                } else {
                    i = n;
                    if (i == null || r) return t ? t[s - 1] : e
                }
                return C(t, U(0, s - i))
            }

            function Tn(e, t, n) {
                var r = e ? ut(e) : 0;
                typeof n == "number" && (r = (n < 0 ? U(0, r + n) : z(n, r - 1)) + 1);
                while (r--)
                    if (e[r] === t) return r;
                return -1
            }

            function Nn(e, t, n) {
                e = +e || 0, n = +n || 1, t == null && (t = e, e = 0);
                var r = -1,
                    i = U(0, _((t - e) / n)),
                    s = Array(i);
                while (++r < i) s[r] = e, e += n;
                return s
            }

            function Cn(e, t, n) {
                if (typeof t != "number" && t != null) {
                    var r = 0,
                        i = -1,
                        s = e ? ut(e) : 0;
                    t = Xn(t, n, 3);
                    while (++i < s && t(e[i], i, e)) r++
                } else r = t == null || n ? 1 : U(0, t);
                return C(e, r)
            }

            function kn(e, t, n, r) {
                var i = 0,
                    s = e ? ut(e) : i;
                n = n ? Xn(n, r, 1) : $n, t = n(t);
                while (i < s) {
                    var o = i + s >>> 1;
                    n(e[o]) < t ? i = o + 1 : s = o
                }
                return i
            }

            function Ln() {
                return nt(Z(arguments, !0, !0))
            }

            function An(e, t, n, r) {
                return typeof t != "boolean" && t != null && (r = n, n = typeof t != "function" && r && r[t] === e ? null : t, t = !1), n != null && (n = Xn(n, r, 3)), nt(e, t, n)
            }

            function On(e) {
                return Y(e, C(arguments, 1))
            }

            function Mn() {
                var e = -1,
                    t = nn(sn(arguments, "length")),
                    n = Array(t < 0 ? 0 : t);
                while (++e < t) n[e] = sn(arguments, e);
                return n
            }

            function _n(e, t) {
                var n = -1,
                    r = e ? ut(e) : 0,
                    i = {};
                !t && r && !ct(e[0]) && (t = []);
                while (++n < r) {
                    var s = e[n];
                    t ? i[s] = t[n] : s && (i[s[0]] = s[1])
                }
                return i
            }

            function Dn(e, t) {
                if (!_t(t)) throw new TypeError;
                return function() {
                    if (--e < 1) return t.apply(this, arguments)
                }
            }

            function Pn(e, t) {
                return ut(arguments) > 2 ? it(e, 17, C(arguments, 2), null, t) : it(e, 1, null, null, t)
            }

            function Hn(e) {
                var t = ut(arguments) > 1 ? Z(arguments, !0, !1, 1) : xt(e),
                    n = -1,
                    r = ut(t);
                while (++n < r) {
                    var i = t[n];
                    e[i] = it(e[i], 1, null, null, e)
                }
                return e
            }

            function Bn() {
                var e = arguments,
                    t = ut(e);
                while (t--)
                    if (!_t(e[t])) throw new TypeError;
                return function() {
                    var t = arguments,
                        n = ut(e);
                    while (n--) t = [e[n].apply(this, t)];
                    return t[0]
                }
            }

            function jn(t, n, r) {
                var i, s, o, u, a, f, l, c = 0,
                    h = !1,
                    p = !0;
                if (!_t(t)) throw new TypeError;
                n = U(0, n) || 0;
                if (r === !0) {
                    var d = !0;
                    p = !1
                } else Dt(r) && (d = r.leading, h = "maxWait" in r && (U(n, r.maxWait) || 0), p = "trailing" in r ? r.trailing : p);
                var v = function() {
                        var r = n - (Gn() - u);
                        if (r <= 0) {
                            s && clearTimeout(s);
                            var h = l;
                            s = f = l = e, h && (c = Gn(), o = t.apply(a, i), !f && !s && (i = a = null))
                        } else f = setTimeout(v, r)
                    },
                    m = function() {
                        f && clearTimeout(f), s = f = l = e;
                        if (p || h !== n) c = Gn(), o = t.apply(a, i), !f && !s && (i = a = null)
                    };
                return function() {
                    i = arguments, u = Gn(), a = this, l = p && (f || !d);
                    if (h === !1) var e = d && !f;
                    else {
                        !s && !d && (c = u);
                        var r = h - (u - c),
                            g = r <= 0;
                        g ? (s && (s = clearTimeout(s)), c = u, o = t.apply(a, i)) : s || (s = setTimeout(m, r))
                    }
                    return g && f ? f = clearTimeout(f) : !f && n !== h && (f = setTimeout(v, n)), e && (g = !0, o = t.apply(a, i)), g && !f && !s && (i = a = null), o
                }
            }

            function Fn(t) {
                if (!_t(t)) throw new TypeError;
                var n = C(arguments, 1);
                return setTimeout(function() {
                    t.apply(e, n)
                }, 1)
            }

            function In(t, n) {
                if (!_t(t)) throw new TypeError;
                var r = C(arguments, 2);
                return setTimeout(function() {
                    t.apply(e, r)
                }, n)
            }

            function qn(e, t) {
                var n = {};
                return function() {
                    var i = t ? t.apply(this, arguments) : r + arguments[0];
                    return P.call(n, i) ? n[i] : n[i] = e.apply(this, arguments)
                }
            }

            function Rn(e) {
                var t, n;
                if (!_t(e)) throw new TypeError;
                return function() {
                    return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
                }
            }

            function Un(e) {
                return it(e, 16, C(arguments, 1))
            }

            function zn(e, t, n) {
                var r = !0,
                    i = !0;
                if (!_t(e)) throw new TypeError;
                return n === !1 ? r = !1 : Dt(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), n = {}, n.leading = r, n.maxWait = t, n.trailing = i, jn(e, t, n)
            }

            function Wn(e, t) {
                return it(t, 16, [e])
            }

            function Xn(e, t, n) {
                var r = typeof e;
                if (e == null || r == "function") return Q(e, t, n);
                if (r != "object") return Yn(e);
                var i = pt(e);
                return function(t) {
                    var n = ut(i),
                        r = !1;
                    while (n--)
                        if (!(r = t[i[n]] === e[i[n]])) break;
                    return r
                }
            }

            function Vn(e) {
                return e == null ? "" : String(e).replace(gt, st)
            }

            function $n(e) {
                return e
            }

            function Jn(e) {
                Qt(xt(e), function(t) {
                    var n = X[t] = e[t];
                    X.prototype[t] = function() {
                        var e = [this.__wrapped__];
                        H.apply(e, arguments);
                        var t = n.apply(X, e);
                        return this.__chain__ ? new V(t, !0) : t
                    }
                })
            }

            function Kn() {
                return y._ = A, this
            }

            function Qn() {}

            function Yn(e) {
                return function(t) {
                    return t[e]
                }
            }

            function Zn(e, t) {
                return e == null && t == null && (t = 1), e = +e || 0, t == null ? (t = e, e = 0) : t = +t || 0, e + D(W() * (t - e + 1))
            }

            function er(e, t) {
                if (e) {
                    var n = e[t];
                    return _t(n) ? e[t]() : n
                }
            }

            function tr(e, t, n) {
                var r = X,
                    i = r.templateSettings;
                e = String(e || ""), n = wt({}, n, i);
                var u = 0,
                    a = "__p += '",
                    f = n.variable,
                    l = RegExp((n.escape || s).source + "|" + (n.interpolate || s).source + "|" + (n.evaluate || s).source + "|$", "g");
                e.replace(l, function(t, n, r, i, s) {
                    return a += e.slice(u, s).replace(o, N), n && (a += "' +\n_.escape(" + n + ") +\n'"), i && (a += "';\n" + i + ";\n__p += '"), r && (a += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), u = s + ut(t), t
                }), a += "';\n", f || (f = "obj", a = "with (" + f + " || {}) {\n" + a + "\n}\n"), a = "function(" + f + ") {\n" + "var __t, __p = '', __j = Array.prototype.join;\n" + "function print() { __p += __j.call(arguments, '') }\n" + a + "return __p\n}";
                try {
                    var c = Function("_", "return " + a)(r)
                } catch (h) {
                    throw h.source = a, h
                }
                return t ? c(t) : (c.source = a, c)
            }

            function nr(e, t, n) {
                e = (e = +e) > -1 ? e : 0;
                var r = -1,
                    i = Array(e);
                t = Q(t, n, 1);
                while (++r < e) i[r] = t(r);
                return i
            }

            function rr(e) {
                return e == null ? "" : String(e).replace(mt, ft)
            }

            function ir(e) {
                var n = ++t + "";
                return e ? e + n : n
            }

            function sr(e) {
                return e = new V(e), e.__chain__ = !0, e
            }

            function or(e, t) {
                return t(e), e
            }

            function ur() {
                return this.__chain__ = !0, this
            }

            function ar() {
                return this.__wrapped__
            }
            var e, t = 0,
                n = {},
                r = +(new Date) + "",
                i = /<%=([\s\S]+?)%>/g,
                s = /($^)/,
                o = /['\n\r\t\u2028\u2029\\]/g,
                u = "[object Arguments]",
                a = "[object Array]",
                f = "[object Boolean]",
                l = "[object Date]",
                c = "[object Function]",
                h = "[object Number]",
                p = "[object Object]",
                d = "[object RegExp]",
                v = "[object String]",
                m = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    "undefined": !1
                },
                g = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "   ": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                y = m[typeof window] && window || this,
                b = m[typeof exports] && exports && !exports.nodeType && exports,
                w = m[typeof module] && module && !module.nodeType && module,
                E = w && w.exports === b && b,
                S = m[typeof global] && global;
            S && (S.global === S || S.window === S) && (y = S);
            var k = [],
                L = Object.prototype,
                A = y._,
                O = L.toString,
                M = RegExp("^" + String(O).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                _ = Math.ceil,
                D = Math.floor,
                P = L.hasOwnProperty,
                H = k.push,
                B = L.propertyIsEnumerable,
                j = at(j = Object.create) && j,
                F = at(F = Array.isArray) && F,
                I = y.isFinite,
                q = y.isNaN,
                R = at(R = Object.keys) && R,
                U = Math.max,
                z = Math.min,
                W = Math.random;
            V.prototype = X.prototype;
            var $ = {};
            (function() {
                var e = {
                    0: 1,
                    length: 1
                };
                $.spliceObjects = (k.splice.call(e, 0, 1), !e[0])
            })(1), X.templateSettings = {
                escape: /<%-([\s\S]+?)%>/g,
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: i,
                variable: ""
            }, j || (K = function() {
                function e() {}
                return function(t) {
                    if (Dt(t)) {
                        e.prototype = t;
                        var n = new e;
                        e.prototype = null
                    }
                    return n || y.Object()
                }
            }()), lt(arguments) || (lt = function(e) {
                return e && typeof e == "object" && typeof ut(e) == "number" && P.call(e, "callee") && !B.call(e, "callee") || !1
            });
            var ct = F || function(e) {
                    return e && typeof e == "object" && typeof ut(e) == "number" && O.call(e) == a || !1
                },
                ht = function(e) {
                    var t, n = e,
                        r = [];
                    if (!n) return r;
                    if (!m[typeof e]) return r;
                    for (t in n) P.call(n, t) && r.push(t);
                    return r
                },
                pt = R ? function(e) {
                    return Dt(e) ? R(e) : []
                } : ht,
                dt = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;"
                },
                vt = Nt(dt),
                mt = RegExp("(" + pt(vt).join("|") + ")", "g"),
                gt = RegExp("[" + pt(dt).join("") + "]", "g"),
                Et = function(e, t) {
                    var r, i = e,
                        s = i;
                    if (!i) return s;
                    if (!m[typeof i]) return s;
                    for (r in i)
                        if (t(i[r], r, e) === n) return s;
                    return s
                },
                St = function(e, t) {
                    var r, i = e,
                        s = i;
                    if (!i) return s;
                    if (!m[typeof i]) return s;
                    for (r in i)
                        if (P.call(i, r) && t(i[r], r, e) === n) return s;
                    return s
                };
            _t(/x/) && (_t = function(e) {
                return typeof e == "function" && O.call(e) == c
            });
            var Xt = rt(function(e, t, n) {
                    P.call(e, n) ? e[n]++ : e[n] = 1
                }),
                Yt = rt(function(e, t, n) {
                    (P.call(e, n) ? e[n] : e[n] = []).push(t)
                }),
                Zt = rt(function(e, t, n) {
                    e[n] = t
                }),
                sn = tn,
                Gn = at(Gn = Date.now) && Gn || function() {
                    return (new Date).getTime()
                };
            X.after = Dn, X.bind = Pn, X.bindAll = Hn, X.chain = sr, X.compact = mn, X.compose = Bn, X.countBy = Xt, X.debounce = jn, X.defaults = wt, X.defer = Fn, X.delay = In, X.difference = gn, X.filter = $t, X.flatten = bn, X.forEach = Qt, X.functions = xt, X.groupBy = Yt, X.indexBy = Zt, X.initial = En, X.intersection = Sn, X.invert = Nt, X.invoke = en, X.keys = pt, X.map = tn, X.max = nn, X.memoize = qn, X.min = rn, X.omit = qt, X.once = Rn, X.pairs = Rt, X.partial = Un, X.pick = Ut, X.pluck = sn, X.range = Nn, X.reject = an, X.rest = Cn, X.shuffle = ln, X.sortBy = pn, X.tap = or, X.throttle = zn, X.times = nr, X.toArray = dn, X.union = Ln, X.uniq = An, X.values = zt, X.where = vn, X.without = On, X.wrap = Wn, X.zip = Mn, X.collect = tn, X.drop = Cn, X.each = Qt, X.extend = yt, X.methods = xt, X.object = _n, X.select = $t, X.tail = Cn, X.unique = An, X.clone = bt, X.contains = Wt, X.escape = Vn, X.every = Vt, X.find = Jt, X.has = Tt, X.identity = $n, X.indexOf = wn, X.isArguments = lt, X.isArray = ct, X.isBoolean = Ct, X.isDate = kt, X.isElement = Lt, X.isEmpty = At, X.isEqual = Ot, X.isFinite = Mt, X.isFunction = _t, X.isNaN = Pt, X.isNull = Ht, X.isNumber = Bt, X.isObject = Dt, X.isRegExp = jt, X.isString = Ft, X.isUndefined = It, X.lastIndexOf = Tn, X.mixin = Jn, X.noConflict = Kn, X.random = Zn, X.reduce = on, X.reduceRight = un, X.result = er, X.size = cn, X.some = hn, X.sortedIndex = kn, X.template = tr, X.unescape = rr, X.uniqueId = ir, X.all = Vt, X.any = hn, X.detect = Jt, X.findWhere = Kt, X.foldl = on, X.foldr = un, X.include = Wt, X.inject = on, X.first = yn, X.last = xn, X.sample = fn, X.take = yn, X.head = yn, Jn(X), X.VERSION = "2.4.1", X.prototype.chain = ur, X.prototype.value = ar, Qt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                var t = k[e];
                X.prototype[e] = function() {
                    var e = this.__wrapped__;
                    return t.apply(e, arguments), !$.spliceObjects && ut(e) === 0 && delete e[0], this
                }
            }), Qt(["concat", "join", "slice"], function(e) {
                var t = k[e];
                X.prototype[e] = function() {
                    var e = this.__wrapped__,
                        n = t.apply(e, arguments);
                    return this.__chain__ && (n = new V(n), n.__chain__ = !0), n
                }
            }), typeof LearnosityAmd.define == "function" && typeof LearnosityAmd.define.amd == "object" && LearnosityAmd.define.amd ? y._ = X : b && w ? E ? (w.exports = X)._ = X : b._ = X : y._ = X
        }.call(this), window._.noConflict()
    }), LearnosityAmd.define("utils/extensions/lodash.underscore.extensions", ["vendor/lodash.underscore"], function(e) {
        "use strict";

        function t(e) {
            var t = "0000";
            return (t + e).slice(-t.length)
        }

        function n(e) {
            return e == null ? undefined : e.length
        }
        return e.mixin({
            getNested: function(e, t) {
                if (e) {
                    var n = t.match(/(.+?)\.(.*)/);
                    return n ? this.getNested(e[n[1]], n[2]) : e[t]
                }
            },
            cancellableThrottle: function(t, n, r) {
                function h(e) {
                    var n = a,
                        r = f;
                    return a = f = undefined, o = e, l = t.apply(r, n), l
                }

                function p(e) {
                    return o = e, c = setTimeout(m, n), r ? h(e) : l
                }

                function d(e) {
                    var t = e - s,
                        r = e - o,
                        u = n - t;
                    return Math.min(u, i - r)
                }

                function v(e) {
                    var t = e - s,
                        r = e - o;
                    return !s || t >= n || t < 0 || r >= i
                }

                function m() {
                    var e = Date.now();
                    if (v(e)) return g(e);
                    c = setTimeout(m, d(e))
                }

                function g(e) {
                    return clearTimeout(c), c = undefined, u && a ? h(e) : (a = f = undefined, l)
                }

                function y() {
                    c !== undefined && clearTimeout(c), s = o = 0, a = f = c = undefined
                }

                function b() {
                    return c === undefined ? l : g(Date.now())
                }

                function w() {
                    var e = Date.now(),
                        t = v(e);
                    return a = arguments, f = this, s = e, t ? c === undefined ? p(s) : (clearTimeout(c), c = setTimeout(m, n), h(s)) : (c === undefined && (c = setTimeout(m, n)), l)
                }
                var i = n,
                    s = 0,
                    o = 0,
                    u = !0,
                    a, f, l, c;
                if (typeof t != "function") throw new TypeError("Expected a function");
                return w.cancel = y, w.flush = b, w
            },
            deepClone: function(t) {
                if (!t || typeof t != "object") return t;
                if (e.isString(t)) return String.prototype.slice.call(t);
                if (e.isDate(t)) return new Date(t.valueOf());
                if (e.isFunction(t.clone)) return t.clone();
                var n, r;
                if (e.isArray(t)) n = Array.prototype.slice.call(t);
                else {
                    if (t.constructor !== {}.constructor) return t;
                    n = {}
                }
                for (r in t) t.hasOwnProperty(r) && (n[r] = e.deepClone(t[r]));
                return n
            },
            deepExtend: function() {
                var t = arguments[0] || {},
                    r = 1,
                    i = n(arguments),
                    s = !0,
                    o, u, a, f, l, c;
                typeof t != "object" && !e.isFunction(t) && (t = {});
                if (i === 1) return t;
                for (; r < i; r++)
                    if ((l = arguments[r]) != null)
                        for (f in l)
                            if (l.hasOwnProperty(f)) {
                                o = t[f], a = l[f];
                                if (t === a) continue;
                                a && ((u = e.isArray(a)) || e.isObject(a) && !e.isFunction(a)) ? (u ? (u = !1, c = []) : c = o && e.isObject(o) ? o : {}, t[f] = e.deepExtend(c, a)) : a !== undefined && (t[f] = a)
                            }
                return t
            },
            getDayOfYear: function(e) {
                var t = new Date(e.getFullYear(), 0, 1);
                return Math.ceil((new Date(e) - t) / 864e5)
            },
            getISOString: function() {
                var e = new Date;
                return Date.prototype.toISOString ? e.toISOString() : e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "." + String((e.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
            },
            deferWithContext: function(e, t) {
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    setTimeout(function() {
                        e.apply(t, n)
                    }, 1)
                }
            },
            hasProperty: function(e, t) {
                var r = t.indexOf(".");
                return t === "" ? !0 : Object.prototype.toString.call(e) !== "[object Object]" ? !1 : r === -1 ? e.hasOwnProperty(t) : e.hasOwnProperty(t.substr(0, r)) && this.hasProperty(e[t.substr(0, r)], t.substring(r + 1, n(t)))
            },
            trim: function(e) {
                var t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                return e.replace(t, "")
            }
        }), e
    }), LearnosityAmd.define("vendor/dom", [], function() {
        return function(e, t) {
            typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return t(e)
            } : t(e)
        }(typeof window != "undefined" ? window : this, function(e, t) {
            function g(e) {
                var t = "length" in e && e.length,
                    n = h.type(e);
                return n === "function" || h.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
            }

            function S(e, t, n) {
                if (h.isFunction(t)) return h.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return h.grep(e, function(e) {
                    return e === t !== n
                });
                if (typeof t == "string") {
                    if (E.test(t)) return h.filter(t, e, n);
                    t = h.filter(t, e)
                }
                return h.grep(e, function(e) {
                    return h.inArray(e, t) >= 0 !== n
                })
            }

            function A(e, t) {
                do e = e[t]; while (e && e.nodeType !== 1);
                return e
            }

            function _(e) {
                var t = M[e] = {};
                return h.each(e.match(O) || [], function(e, n) {
                    t[n] = !0
                }), t
            }

            function P() {
                T.addEventListener ? (T.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (T.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
            }

            function H() {
                if (T.addEventListener || event.type === "load" || T.readyState === "complete") P(), h.ready()
            }

            function q(e, t, n) {
                if (n === undefined && e.nodeType === 1) {
                    var r = "data-" + t.replace(I, "-$1").toLowerCase();
                    n = e.getAttribute(r);
                    if (typeof n == "string") {
                        try {
                            n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : F.test(n) ? h.parseJSON(n) : n
                        } catch (i) {}
                        h.data(e, t, n)
                    } else n = undefined
                }
                return n
            }

            function R(e) {
                var t;
                for (t in e) {
                    if (t === "data" && h.isEmptyObject(e[t])) continue;
                    if (t !== "toJSON") return !1
                }
                return !0
            }

            function U(e, t, r, i) {
                if (!h.acceptData(e)) return;
                var s, o, u = h.expando,
                    a = e.nodeType,
                    f = a ? h.cache : e,
                    l = a ? e[u] : e[u] && u;
                if ((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t == "string") return;
                l || (a ? l = e[u] = n.pop() || h.guid++ : l = u), f[l] || (f[l] = a ? {} : {
                    toJSON: h.noop
                });
                if (typeof t == "object" || typeof t == "function") i ? f[l] = h.extend(f[l], t) : f[l].data = h.extend(f[l].data, t);
                return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== undefined && (o[h.camelCase(t)] = r), typeof t == "string" ? (s = o[t], s == null && (s = o[h.camelCase(t)])) : s = o, s
            }

            function z(e, t, n) {
                if (!h.acceptData(e)) return;
                var r, i, s = e.nodeType,
                    o = s ? h.cache : e,
                    u = s ? e[h.expando] : h.expando;
                if (!o[u]) return;
                if (t) {
                    r = n ? o[u] : o[u].data;
                    if (r) {
                        h.isArray(t) ? t = t.concat(h.map(t, h.camelCase)) : t in r ? t = [t] : (t = h.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                        while (i--) delete r[t[i]];
                        if (n ? !R(r) : !h.isEmptyObject(r)) return
                    }
                }
                if (!n) {
                    delete o[u].data;
                    if (!R(o[u])) return
                }
                s ? h.cleanData([e], !0) : l.deleteExpando || o != o.window ? delete o[u] : o[u] = null
            }

            function et() {
                return !0
            }

            function tt() {
                return !1
            }

            function nt() {
                try {
                    return T.activeElement
                } catch (e) {}
            }

            function rt(e) {
                var t = it.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    while (t.length) n.createElement(t.pop());
                return n
            }

            function wt(e, t) {
                var n, r, i = 0,
                    s = typeof e.getElementsByTagName !== B ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== B ? e.querySelectorAll(t || "*") : undefined;
                if (!s)
                    for (s = [], n = e.childNodes || e;
                        (r = n[i]) != null; i++) !t || h.nodeName(r, t) ? s.push(r) : h.merge(s, wt(r, t));
                return t === undefined || t && h.nodeName(e, t) ? h.merge([e], s) : s
            }

            function Et(e) {
                J.test(e.type) && (e.defaultChecked = e.checked)
            }

            function St(e, t) {
                return h.nodeName(e, "table") && h.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function xt(e) {
                return e.type = (h.find.attr(e, "type") !== null) + "/" + e.type, e
            }

            function Tt(e) {
                var t = vt.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function Nt(e, t) {
                var n, r = 0;
                for (;
                    (n = e[r]) != null; r++) h._data(n, "globalEval", !t || h._data(t[r], "globalEval"))
            }

            function Ct(e, t) {
                if (t.nodeType !== 1 || !h.hasData(e)) return;
                var n, r, i, s = h._data(e),
                    o = h._data(t, s),
                    u = s.events;
                if (u) {
                    delete o.handle, o.events = {};
                    for (n in u)
                        for (r = 0, i = u[n].length; r < i; r++) h.event.add(t, n, u[n][r])
                }
                o.data && (o.data = h.extend({}, o.data))
            }

            function kt(e, t) {
                var n, r, i;
                if (t.nodeType !== 1) return;
                n = t.nodeName.toLowerCase();
                if (!l.noCloneEvent && t[h.expando]) {
                    i = h._data(t);
                    for (r in i.events) h.removeEvent(t, r, i.handle);
                    t.removeAttribute(h.expando)
                }
                if (n === "script" && t.text !== e.text) xt(t).text = e.text, Tt(t);
                else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), l.html5Clone && e.innerHTML && !h.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
                else if (n === "input" && J.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
                else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
                else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
            }

            function Ot(t, n) {
                var r, i = h(n.createElement(t)).appendTo(n.body),
                    s = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : h.css(i[0], "display");
                return i.detach(), s
            }

            function Mt(e) {
                var t = T,
                    n = At[e];
                if (!n) {
                    n = Ot(e, t);
                    if (n === "none" || !n) Lt = (Lt || h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Lt[0].contentWindow || Lt[0].contentDocument).document, t.write(), t.close(), n = Ot(e, t), Lt.detach();
                    At[e] = n
                }
                return n
            }

            function jt(e, t) {
                return {
                    get: function() {
                        var n = e();
                        if (n == null) return;
                        if (n) {
                            delete this.get;
                            return
                        }
                        return (this.get = t).apply(this, arguments)
                    }
                }
            }

            function Vt(e, t) {
                if (t in e) return t;
                var n = t.charAt(0).toUpperCase() + t.slice(1),
                    r = t,
                    i = Xt.length;
                while (i--) {
                    t = Xt[i] + n;
                    if (t in e) return t
                }
                return r
            }

            function $t(e, t) {
                var n, r, i, s = [],
                    o = 0,
                    u = e.length;
                for (; o < u; o++) {
                    r = e[o];
                    if (!r.style) continue;
                    s[o] = h._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && V(r) && (s[o] = h._data(r, "olddisplay", Mt(r.nodeName)))) : (i = V(r), (n && n !== "none" || !i) && h._data(r, "olddisplay", i ? n : h.css(r, "display")))
                }
                for (o = 0; o < u; o++) {
                    r = e[o];
                    if (!r.style) continue;
                    if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
                }
                return e
            }

            function Jt(e, t, n) {
                var r = Rt.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function Kt(e, t, n, r, i) {
                var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
                    o = 0;
                for (; s < 4; s += 2) n === "margin" && (o += h.css(e, n + X[s], !0, i)), r ? (n === "content" && (o -= h.css(e, "padding" + X[s], !0, i)), n !== "margin" && (o -= h.css(e, "border" + X[s] + "Width", !0, i))) : (o += h.css(e, "padding" + X[s], !0, i), n !== "padding" && (o += h.css(e, "border" + X[s] + "Width", !0, i)));
                return o
            }

            function Qt(e, t, n) {
                var r = !0,
                    i = t === "width" ? e.offsetWidth : e.offsetHeight,
                    s = Pt(e),
                    o = l.boxSizing && h.css(e, "boxSizing", !1, s) === "border-box";
                if (i <= 0 || i == null) {
                    i = Ht(e, t, s);
                    if (i < 0 || i == null) i = e.style[t];
                    if (Dt.test(i)) return i;
                    r = o && (l.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + Kt(e, t, n || (o ? "border" : "content"), r, s) + "px"
            }

            function Gt(e, t, n, r, i) {
                return new Gt.prototype.init(e, t, n, r, i)
            }

            function on() {
                return setTimeout(function() {
                    Yt = undefined
                }), Yt = h.now()
            }

            function un(e, t) {
                var n, r = {
                        height: e
                    },
                    i = 0;
                t = t ? 1 : 0;
                for (; i < 4; i += 2 - t) n = X[i], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function an(e, t, n) {
                var r, i = (sn[t] || []).concat(sn["*"]),
                    s = 0,
                    o = i.length;
                for (; s < o; s++)
                    if (r = i[s].call(n, t, e)) return r
            }

            function fn(e, t, n) {
                var r, i, s, o, u, a, f, c, p = this,
                    d = {},
                    v = e.style,
                    m = e.nodeType && V(e),
                    g = h._data(e, "fxshow");
                n.queue || (u = h._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || a()
                }), u.unqueued++, p.always(function() {
                    p.always(function() {
                        u.unqueued--, h.queue(e, "fx").length || u.empty.fire()
                    })
                })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = h.css(e, "display"), c = f === "none" ? h._data(e, "olddisplay") || Mt(e.nodeName) : f, c === "inline" && h.css(e, "float") === "none" && (!l.inlineBlockNeedsLayout || Mt(e.nodeName) === "inline" ? v.display = "inline-block" : v.zoom = 1)), n.overflow && (v.overflow = "hidden", l.shrinkWrapBlocks() || p.always(function() {
                    v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
                }));
                for (r in t) {
                    i = t[r];
                    if (en.exec(i)) {
                        delete t[r], s = s || i === "toggle";
                        if (i === (m ? "hide" : "show")) {
                            if (i !== "show" || !g || g[r] === undefined) continue;
                            m = !0
                        }
                        d[r] = g && g[r] || h.style(e, r)
                    } else f = undefined
                }
                if (!h.isEmptyObject(d)) {
                    g ? "hidden" in g && (m = g.hidden) : g = h._data(e, "fxshow", {}), s && (g.hidden = !m), m ? h(e).show() : p.done(function() {
                        h(e).hide()
                    }), p.done(function() {
                        var t;
                        h._removeData(e, "fxshow");
                        for (t in d) h.style(e, t, d[t])
                    });
                    for (r in d) o = an(m ? g[r] : 0, r, p), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
                } else(f === "none" ? Mt(e.nodeName) : f) === "inline" && (v.display = f)
            }

            function ln(e, t) {
                var n, r, i, s, o;
                for (n in e) {
                    r = h.camelCase(n), i = t[r], s = e[n], h.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = h.cssHooks[r];
                    if (o && "expand" in o) {
                        s = o.expand(s), delete e[r];
                        for (n in s) n in e || (e[n] = s[n], t[n] = i)
                    } else t[r] = i
                }
            }

            function cn(e, t, n) {
                var r, i, s = 0,
                    o = rn.length,
                    u = h.Deferred().always(function() {
                        delete a.elem
                    }),
                    a = function() {
                        if (i) return !1;
                        var t = Yt || on(),
                            n = Math.max(0, f.startTime + f.duration - t),
                            r = n / f.duration || 0,
                            s = 1 - r,
                            o = 0,
                            a = f.tweens.length;
                        for (; o < a; o++) f.tweens[o].run(s);
                        return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
                    },
                    f = u.promise({
                        elem: e,
                        props: h.extend({}, t),
                        opts: h.extend(!0, {
                            specialEasing: {}
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Yt || on(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(t, n) {
                            var r = h.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                            return f.tweens.push(r), r
                        },
                        stop: function(t) {
                            var n = 0,
                                r = t ? f.tweens.length : 0;
                            if (i) return this;
                            i = !0;
                            for (; n < r; n++) f.tweens[n].run(1);
                            return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                        }
                    }),
                    l = f.props;
                ln(l, f.opts.specialEasing);
                for (; s < o; s++) {
                    r = rn[s].call(f, e, l, f.opts);
                    if (r) return r
                }
                return h.map(l, an, f), h.isFunction(f.opts.start) && f.opts.start.call(e, f), h.fx.timer(h.extend(a, {
                    elem: e,
                    anim: f,
                    queue: f.opts.queue
                })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
            }

            function Fn(e) {
                return function(t, n) {
                    typeof t != "string" && (n = t, t = "*");
                    var r, i = 0,
                        s = t.toLowerCase().match(O) || [];
                    if (h.isFunction(n))
                        while (r = s[i++]) r.charAt(0) === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function In(e, t, n, r) {
                function o(u) {
                    var a;
                    return i[u] = !0, h.each(e[u] || [], function(e, u) {
                        var f = u(t, n, r);
                        if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                        if (s) return !(a = f)
                    }), a
                }
                var i = {},
                    s = e === Hn;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }

            function qn(e, t) {
                var n, r, i = h.ajaxSettings.flatOptions || {};
                for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
                return n && h.extend(!0, e, n), e
            }

            function Rn(e, t, n) {
                var r, i, s, o, u = e.contents,
                    a = e.dataTypes;
                while (a[0] === "*") a.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                if (i)
                    for (o in u)
                        if (u[o] && u[o].test(i)) {
                            a.unshift(o);
                            break
                        }
                if (a[0] in n) s = a[0];
                else {
                    for (o in n) {
                        if (!a[0] || e.converters[o + " " + a[0]]) {
                            s = o;
                            break
                        }
                        r || (r = o)
                    }
                    s = s || r
                }
                if (s) return s !== a[0] && a.unshift(s), n[s]
            }

            function Un(e, t, n, r) {
                var i, s, o, u, a, f = {},
                    l = e.dataTypes.slice();
                if (l[1])
                    for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
                s = l.shift();
                while (s) {
                    e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
                    if (s)
                        if (s === "*") s = a;
                        else if (a !== "*" && a !== s) {
                        o = f[a + " " + s] || f["* " + s];
                        if (!o)
                            for (i in f) {
                                u = i.split(" ");
                                if (u[1] === s) {
                                    o = f[a + " " + u[0]] || f["* " + u[0]];
                                    if (o) {
                                        o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                        break
                                    }
                                }
                            }
                        if (o !== !0)
                            if (o && e["throws"]) t = o(t);
                            else try {
                                t = o(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: o ? c : "No conversion from " + a + " to " + s
                                }
                            }
                    }
                }
                return {
                    state: "success",
                    data: t
                }
            }

            function Jn(e, t, n, r) {
                var i;
                if (h.isArray(t)) h.each(t, function(t, i) {
                    n || Wn.test(e) ? r(e, i) : Jn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
                });
                else if (!n && h.type(t) === "object")
                    for (i in t) Jn(e + "[" + i + "]", t[i], n, r);
                else r(e, t)
            }

            function Yn() {
                try {
                    return new e.XMLHttpRequest
                } catch (t) {}
            }

            function Zn() {
                try {
                    return new e.ActiveXObject("Microsoft.XMLHTTP")
                } catch (t) {}
            }

            function ir(e) {
                return h.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
            }
            var n = [],
                r = n.slice,
                i = n.concat,
                s = n.push,
                o = n.indexOf,
                u = {},
                a = u.toString,
                f = u.hasOwnProperty,
                l = {},
                c = "1.11.3",
                h = function(e, t) {
                    return new h.fn.init(e, t)
                },
                p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                d = /^-ms-/,
                v = /-([\da-z])/gi,
                m = function(e, t) {
                    return t.toUpperCase()
                };
            h.fn = h.prototype = {
                jquery: c,
                constructor: h,
                selector: "",
                length: 0,
                toArray: function() {
                    return r.call(this)
                },
                get: function(e) {
                    return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
                },
                pushStack: function(e) {
                    var t = h.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return h.each(this, e, t)
                },
                map: function(e) {
                    return this.pushStack(h.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(r.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: s,
                sort: n.sort,
                splice: n.splice
            }, h.extend = h.fn.extend = function() {
                var e, t, n, r, i, s, o = arguments[0] || {},
                    u = 1,
                    a = arguments.length,
                    f = !1;
                typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !h.isFunction(o) && (o = {}), u === a && (o = this, u--);
                for (; u < a; u++)
                    if ((i = arguments[u]) != null)
                        for (r in i) {
                            e = o[r], n = i[r];
                            if (o === n) continue;
                            f && n && (h.isPlainObject(n) || (t = h.isArray(n))) ? (t ? (t = !1, s = e && h.isArray(e) ? e : []) : s = e && h.isPlainObject(e) ? e : {}, o[r] = h.extend(f, s, n)) : n !== undefined && (o[r] = n)
                        }
                    return o
            }, h.extend({
                expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isFunction: function(e) {
                    return h.type(e) === "function"
                },
                isArray: Array.isArray || function(e) {
                    return h.type(e) === "array"
                },
                isWindow: function(e) {
                    return e != null && e == e.window
                },
                isNumeric: function(e) {
                    return !h.isArray(e) && e - parseFloat(e) + 1 >= 0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                isPlainObject: function(e) {
                    var t;
                    if (!e || h.type(e) !== "object" || e.nodeType || h.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    if (l.ownLast)
                        for (t in e) return f.call(e, t);
                    for (t in e);
                    return t === undefined || f.call(e, t)
                },
                type: function(e) {
                    return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? u[a.call(e)] || "object" : typeof e
                },
                globalEval: function(t) {
                    t && h.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function(e) {
                    return e.replace(d, "ms-").replace(v, m)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                },
                each: function(e, t, n) {
                    var r, i = 0,
                        s = e.length,
                        o = g(e);
                    if (n)
                        if (o)
                            for (; i < s; i++) {
                                r = t.apply(e[i], n);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.apply(e[i], n);
                                    if (r === !1) break
                                } else if (o)
                                    for (; i < s; i++) {
                                        r = t.call(e[i], i, e[i]);
                                        if (r === !1) break
                                    } else
                                        for (i in e) {
                                            r = t.call(e[i], i, e[i]);
                                            if (r === !1) break
                                        }
                                return e
                },
                trim: function(e) {
                    return e == null ? "" : (e + "").replace(p, "")
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    return e != null && (g(Object(e)) ? h.merge(n, typeof e == "string" ? [e] : e) : s.call(n, e)), n
                },
                inArray: function(e, t, n) {
                    var r;
                    if (t) {
                        if (o) return o.call(t, e, n);
                        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                        for (; n < r; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, t) {
                    var n = +t.length,
                        r = 0,
                        i = e.length;
                    while (r < n) e[i++] = t[r++];
                    if (n !== n)
                        while (t[r] !== undefined) e[i++] = t[r++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var r, i = [],
                        s = 0,
                        o = e.length,
                        u = !n;
                    for (; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
                    return i
                },
                map: function(e, t, n) {
                    var r, s = 0,
                        o = e.length,
                        u = g(e),
                        a = [];
                    if (u)
                        for (; s < o; s++) r = t(e[s], s, n), r != null && a.push(r);
                    else
                        for (s in e) r = t(e[s], s, n), r != null && a.push(r);
                    return i.apply([], a)
                },
                guid: 1,
                proxy: function(e, t) {
                    var n, i, s;
                    return typeof t == "string" && (s = e[t], t = e, e = s), h.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                        return e.apply(t || this, n.concat(r.call(arguments)))
                    }, i.guid = e.guid = e.guid || h.guid++, i) : undefined
                },
                now: function() {
                    return +(new Date)
                },
                support: l
            }), h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
                u["[object " + t + "]"] = t.toLowerCase()
            });
            var y = function(e) {
                function ot(e, t, r, i) {
                    var s, u, f, l, c, d, g, y, S, x;
                    (t ? t.ownerDocument || t : E) !== p && h(t), t = t || p, r = r || [], l = t.nodeType;
                    if (typeof e != "string" || !e || l !== 1 && l !== 9 && l !== 11) return r;
                    if (!i && v) {
                        if (l !== 11 && (s = Z.exec(e)))
                            if (f = s[1]) {
                                if (l === 9) {
                                    u = t.getElementById(f);
                                    if (!u || !u.parentNode) return r;
                                    if (u.id === f) return r.push(u), r
                                } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(f)) && b(t, u) && u.id === f) return r.push(u), r
                            } else {
                                if (s[2]) return D.apply(r, t.getElementsByTagName(e)), r;
                                if ((f = s[3]) && n.getElementsByClassName) return D.apply(r, t.getElementsByClassName(f)), r
                            }
                        if (n.qsa && (!m || !m.test(e))) {
                            y = g = w, S = t, x = l !== 1 && e;
                            if (l === 1 && t.nodeName.toLowerCase() !== "object") {
                                d = o(e), (g = t.getAttribute("id")) ? y = g.replace(tt, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", c = d.length;
                                while (c--) d[c] = y + gt(d[c]);
                                S = et.test(e) && vt(t.parentNode) || t, x = d.join(",")
                            }
                            if (x) try {
                                return D.apply(r, S.querySelectorAll(x)), r
                            } catch (T) {} finally {
                                g || t.removeAttribute("id")
                            }
                        }
                    }
                    return a(e.replace(z, "$1"), t, r, i)
                }

                function ut() {
                    function t(n, i) {
                        return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }

                function at(e) {
                    return e[w] = !0, e
                }

                function ft(e) {
                    var t = p.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function lt(e, t) {
                    var n = e.split("|"),
                        i = e.length;
                    while (i--) r.attrHandle[n[i]] = t
                }

                function ct(e, t) {
                    var n = t && e,
                        r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || L) - (~e.sourceIndex || L);
                    if (r) return r;
                    if (n)
                        while (n = n.nextSibling)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function ht(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return n === "input" && t.type === e
                    }
                }

                function pt(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return (n === "input" || n === "button") && t.type === e
                    }
                }

                function dt(e) {
                    return at(function(t) {
                        return t = +t, at(function(n, r) {
                            var i, s = e([], n.length, t),
                                o = s.length;
                            while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function vt(e) {
                    return e && typeof e.getElementsByTagName != "undefined" && e
                }

                function mt() {}

                function gt(e) {
                    var t = 0,
                        n = e.length,
                        r = "";
                    for (; t < n; t++) r += e[t].value;
                    return r
                }

                function yt(e, t, n) {
                    var r = t.dir,
                        i = n && r === "parentNode",
                        s = x++;
                    return t.first ? function(t, n, s) {
                        while (t = t[r])
                            if (t.nodeType === 1 || i) return e(t, n, s)
                    } : function(t, n, o) {
                        var u, a, f = [S, s];
                        if (o) {
                            while (t = t[r])
                                if (t.nodeType === 1 || i)
                                    if (e(t, n, o)) return !0
                        } else
                            while (t = t[r])
                                if (t.nodeType === 1 || i) {
                                    a = t[w] || (t[w] = {});
                                    if ((u = a[r]) && u[0] === S && u[1] === s) return f[2] = u[2];
                                    a[r] = f;
                                    if (f[2] = e(t, n, o)) return !0
                                }
                    }
                }

                function bt(e) {
                    return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function wt(e, t, n) {
                    var r = 0,
                        i = t.length;
                    for (; r < i; r++) ot(e, t[r], n);
                    return n
                }

                function Et(e, t, n, r, i) {
                    var s, o = [],
                        u = 0,
                        a = e.length,
                        f = t != null;
                    for (; u < a; u++)
                        if (s = e[u])
                            if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                    return o
                }

                function St(e, t, n, r, i, s) {
                    return r && !r[w] && (r = St(r)), i && !i[w] && (i = St(i, s)), at(function(s, o, u, a) {
                        var f, l, c, h = [],
                            p = [],
                            d = o.length,
                            v = s || wt(t || "*", u.nodeType ? [u] : u, []),
                            m = e && (s || !t) ? Et(v, h, e, u, a) : v,
                            g = n ? i || (s ? e : d || r) ? [] : o : m;
                        n && n(m, g, u, a);
                        if (r) {
                            f = Et(g, p), r(f, [], u, a), l = f.length;
                            while (l--)
                                if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                        }
                        if (s) {
                            if (i || e) {
                                if (i) {
                                    f = [], l = g.length;
                                    while (l--)(c = g[l]) && f.push(m[l] = c);
                                    i(null, g = [], f, a)
                                }
                                l = g.length;
                                while (l--)(c = g[l]) && (f = i ? H(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                            }
                        } else g = Et(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : D.apply(o, g)
                    })
                }

                function xt(e) {
                    var t, n, i, s = e.length,
                        o = r.relative[e[0].type],
                        u = o || r.relative[" "],
                        a = o ? 1 : 0,
                        l = yt(function(e) {
                            return e === t
                        }, u, !0),
                        c = yt(function(e) {
                            return H(t, e) > -1
                        }, u, !0),
                        h = [function(e, n, r) {
                            var i = !o && (r || n !== f) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                            return t = null, i
                        }];
                    for (; a < s; a++)
                        if (n = r.relative[e[a].type]) h = [yt(bt(h), n)];
                        else {
                            n = r.filter[e[a].type].apply(null, e[a].matches);
                            if (n[w]) {
                                i = ++a;
                                for (; i < s; i++)
                                    if (r.relative[e[i].type]) break;
                                return St(a > 1 && bt(h), a > 1 && gt(e.slice(0, a - 1).concat({
                                    value: e[a - 2].type === " " ? "*" : ""
                                })).replace(z, "$1"), n, a < i && xt(e.slice(a, i)), i < s && xt(e = e.slice(i)), i < s && gt(e))
                            }
                            h.push(n)
                        }
                    return bt(h)
                }

                function Tt(e, t) {
                    var n = t.length > 0,
                        i = e.length > 0,
                        s = function(s, o, u, a, l) {
                            var c, h, d, v = 0,
                                m = "0",
                                g = s && [],
                                y = [],
                                b = f,
                                w = s || i && r.find.TAG("*", l),
                                E = S += b == null ? 1 : Math.random() || .1,
                                x = w.length;
                            l && (f = o !== p && o);
                            for (; m !== x && (c = w[m]) != null; m++) {
                                if (i && c) {
                                    h = 0;
                                    while (d = e[h++])
                                        if (d(c, o, u)) {
                                            a.push(c);
                                            break
                                        }
                                    l && (S = E)
                                }
                                n && ((c = !d && c) && v--, s && g.push(c))
                            }
                            v += m;
                            if (n && m !== v) {
                                h = 0;
                                while (d = t[h++]) d(g, y, o, u);
                                if (s) {
                                    if (v > 0)
                                        while (m--) !g[m] && !y[m] && (y[m] = M.call(a));
                                    y = Et(y)
                                }
                                D.apply(a, y), l && !s && y.length > 0 && v + t.length > 1 && ot.uniqueSort(a)
                            }
                            return l && (S = E, f = b), g
                        };
                    return n ? at(s) : s
                }
                var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w = "sizzle" + 1 * new Date,
                    E = e.document,
                    S = 0,
                    x = 0,
                    T = ut(),
                    N = ut(),
                    C = ut(),
                    k = function(e, t) {
                        return e === t && (c = !0), 0
                    },
                    L = 1 << 31,
                    A = {}.hasOwnProperty,
                    O = [],
                    M = O.pop,
                    _ = O.push,
                    D = O.push,
                    P = O.slice,
                    H = function(e, t) {
                        var n = 0,
                            r = e.length;
                        for (; n < r; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    I = F.replace("w", "w#"),
                    q = "\\[" + j + "*(" + F + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + j + "*\\]",
                    R = ":(" + F + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|" + ".*" + ")\\)|)",
                    U = new RegExp(j + "+", "g"),
                    z = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                    W = new RegExp("^" + j + "*," + j + "*"),
                    X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    V = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
                    $ = new RegExp(R),
                    J = new RegExp("^" + I + "$"),
                    K = {
                        ID: new RegExp("^#(" + F + ")"),
                        CLASS: new RegExp("^\\.(" + F + ")"),
                        TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + R),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + B + ")$", "i"),
                        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Q = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    Y = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    et = /[+~]/,
                    tt = /'|\\/g,
                    nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
                    rt = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                    },
                    it = function() {
                        h()
                    };
                try {
                    D.apply(O = P.call(E.childNodes), E.childNodes), O[E.childNodes.length].nodeType
                } catch (st) {
                    D = {
                        apply: O.length ? function(e, t) {
                            _.apply(e, P.call(t))
                        } : function(e, t) {
                            var n = e.length,
                                r = 0;
                            while (e[n++] = t[r++]);
                            e.length = n - 1
                        }
                    }
                }
                n = ot.support = {}, s = ot.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? t.nodeName !== "HTML" : !1
                }, h = ot.setDocument = function(e) {
                    var t, i, o = e ? e.ownerDocument || e : E;
                    if (o === p || o.nodeType !== 9 || !o.documentElement) return p;
                    p = o, d = o.documentElement, i = o.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), v = !s(o), n.attributes = ft(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), n.getElementsByTagName = ft(function(e) {
                        return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Y.test(o.getElementsByClassName), n.getById = ft(function(e) {
                        return d.appendChild(e).id = w, !o.getElementsByName || !o.getElementsByName(w).length
                    }), n.getById ? (r.find.ID = function(e, t) {
                        if (typeof t.getElementById != "undefined" && v) {
                            var n = t.getElementById(e);
                            return n && n.parentNode ? [n] : []
                        }
                    }, r.filter.ID = function(e) {
                        var t = e.replace(nt, rt);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete r.find.ID, r.filter.ID = function(e) {
                        var t = e.replace(nt, rt);
                        return function(e) {
                            var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                        if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e);
                        if (n.qsa) return t.querySelectorAll(e)
                    } : function(e, t) {
                        var n, r = [],
                            i = 0,
                            s = t.getElementsByTagName(e);
                        if (e === "*") {
                            while (n = s[i++]) n.nodeType === 1 && r.push(n);
                            return r
                        }
                        return s
                    }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                        if (v) return t.getElementsByClassName(e)
                    }, g = [], m = [];
                    if (n.qsa = Y.test(o.querySelectorAll)) ft(function(e) {
                        d.appendChild(e).innerHTML = "<a id='" + w + "'></a>" + "<select id='" + w + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                    }), ft(function(e) {
                        var t = o.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                    });
                    return (n.matchesSelector = Y.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ft(function(e) {
                        n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", R)
                    }), m = m.length && new RegExp(m.join("|")), g = g.length && new RegExp(g.join("|")), t = Y.test(d.compareDocumentPosition), b = t || Y.test(d.contains) ? function(e, t) {
                        var n = e.nodeType === 9 ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
                    } : function(e, t) {
                        if (t)
                            while (t = t.parentNode)
                                if (t === e) return !0;
                        return !1
                    }, k = t ? function(e, t) {
                        if (e === t) return c = !0, 0;
                        var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === o || e.ownerDocument === E && b(E, e) ? -1 : t === o || t.ownerDocument === E && b(E, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : r & 4 ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return c = !0, 0;
                        var n, r = 0,
                            i = e.parentNode,
                            s = t.parentNode,
                            u = [e],
                            a = [t];
                        if (!i || !s) return e === o ? -1 : t === o ? 1 : i ? -1 : s ? 1 : l ? H(l, e) - H(l, t) : 0;
                        if (i === s) return ct(e, t);
                        n = e;
                        while (n = n.parentNode) u.unshift(n);
                        n = t;
                        while (n = n.parentNode) a.unshift(n);
                        while (u[r] === a[r]) r++;
                        return r ? ct(u[r], a[r]) : u[r] === E ? -1 : a[r] === E ? 1 : 0
                    }, o
                }, ot.matches = function(e, t) {
                    return ot(e, null, null, t)
                }, ot.matchesSelector = function(e, t) {
                    (e.ownerDocument || e) !== p && h(e), t = t.replace(V, "='$1']");
                    if (n.matchesSelector && v && (!g || !g.test(t)) && (!m || !m.test(t))) try {
                        var r = y.call(e, t);
                        if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
                    } catch (i) {}
                    return ot(t, p, null, [e]).length > 0
                }, ot.contains = function(e, t) {
                    return (e.ownerDocument || e) !== p && h(e), b(e, t)
                }, ot.attr = function(e, t) {
                    (e.ownerDocument || e) !== p && h(e);
                    var i = r.attrHandle[t.toLowerCase()],
                        s = i && A.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !v) : undefined;
                    return s !== undefined ? s : n.attributes || !v ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
                }, ot.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, ot.uniqueSort = function(e) {
                    var t, r = [],
                        i = 0,
                        s = 0;
                    c = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(k);
                    if (c) {
                        while (t = e[s++]) t === e[s] && (i = r.push(s));
                        while (i--) e.splice(r[i], 1)
                    }
                    return l = null, e
                }, i = ot.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        s = e.nodeType;
                    if (!s)
                        while (t = e[r++]) n += i(t);
                    else if (s === 1 || s === 9 || s === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                    } else if (s === 3 || s === 4) return e.nodeValue;
                    return n
                }, r = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: K,
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
                        ATTR: function(e) {
                            return e[1] = e[1].replace(nt, rt), e[3] = (e[3] || e[4] || e[5] || "").replace(nt, rt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && ot.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && $.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(nt, rt).toLowerCase();
                            return e === "*" ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = T[e + " "];
                            return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && T(e, function(e) {
                                return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute != "undefined" && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(e, t, n) {
                            return function(r) {
                                var i = ot.attr(r, e);
                                return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(U, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var s = e.slice(0, 3) !== "nth",
                                o = e.slice(-4) !== "last",
                                u = t === "of-type";
                            return r === 1 && i === 0 ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, a) {
                                var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    g = u && t.nodeName.toLowerCase(),
                                    y = !a && !u;
                                if (m) {
                                    if (s) {
                                        while (v) {
                                            c = t;
                                            while (c = c[v])
                                                if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                            d = v = e === "only" && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    d = [o ? m.firstChild : m.lastChild];
                                    if (o && y) {
                                        l = m[w] || (m[w] = {}), f = l[e] || [], p = f[0] === S && f[1], h = f[0] === S && f[2], c = p && m.childNodes[p];
                                        while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                            if (c.nodeType === 1 && ++h && c === t) {
                                                l[e] = [S, p, h];
                                                break
                                            }
                                    } else if (y && (f = (t[w] || (t[w] = {}))[e]) && f[0] === S) h = f[1];
                                    else
                                        while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                            if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                                y && ((c[w] || (c[w] = {}))[e] = [S, h]);
                                                if (c === t) break
                                            } return h -= i, h === r || h % r === 0 && h / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                            return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                                var r, s = i(e, t),
                                    o = s.length;
                                while (o--) r = H(e, s[o]), e[r] = !(n[r] = s[o])
                            }) : function(e) {
                                return i(e, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: at(function(e) {
                            var t = [],
                                n = [],
                                r = u(e.replace(z, "$1"));
                            return r[w] ? at(function(e, t, n, i) {
                                var s, o = r(e, null, i, []),
                                    u = e.length;
                                while (u--)
                                    if (s = o[u]) e[u] = !(t[u] = s)
                            }) : function(e, i, s) {
                                return t[0] = e, r(t, null, s, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: at(function(e) {
                            return function(t) {
                                return ot(e, t).length > 0
                            }
                        }),
                        contains: at(function(e) {
                            return e = e.replace(nt, rt),
                                function(t) {
                                    return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                                }
                        }),
                        lang: at(function(e) {
                            return J.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = v ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                                    while ((t = t.parentNode) && t.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === d
                        },
                        focus: function(e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !r.pseudos.empty(e)
                        },
                        header: function(e) {
                            return G.test(e.nodeName)
                        },
                        input: function(e) {
                            return Q.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button"
                        },
                        text: function(e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                        },
                        first: dt(function() {
                            return [0]
                        }),
                        last: dt(function(e, t) {
                            return [t - 1]
                        }),
                        eq: dt(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: dt(function(e, t) {
                            var n = 0;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: dt(function(e, t) {
                            var n = 1;
                            for (; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: dt(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: dt(function(e, t, n) {
                            var r = n < 0 ? n + t : n;
                            for (; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, r.pseudos.nth = r.pseudos.eq;
                for (t in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) r.pseudos[t] = ht(t);
                for (t in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[t] = pt(t);
                return mt.prototype = r.filters = r.pseudos, r.setFilters = new mt, o = ot.tokenize = function(e, t) {
                    var n, i, s, o, u, a, f, l = N[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    u = e, a = [], f = r.preFilter;
                    while (u) {
                        if (!n || (i = W.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
                        n = !1;
                        if (i = X.exec(u)) n = i.shift(), s.push({
                            value: n,
                            type: i[0].replace(z, " ")
                        }), u = u.slice(n.length);
                        for (o in r.filter)(i = K[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
                            value: n,
                            type: o,
                            matches: i
                        }), u = u.slice(n.length));
                        if (!n) break
                    }
                    return t ? u.length : u ? ot.error(e) : N(e, a).slice(0)
                }, u = ot.compile = function(e, t) {
                    var n, r = [],
                        i = [],
                        s = C[e + " "];
                    if (!s) {
                        t || (t = o(e)), n = t.length;
                        while (n--) s = xt(t[n]), s[w] ? r.push(s) : i.push(s);
                        s = C(e, Tt(i, r)), s.selector = e
                    }
                    return s
                }, a = ot.select = function(e, t, i, s) {
                    var a, f, l, c, h, p = typeof e == "function" && e,
                        d = !s && o(e = p.selector || e);
                    i = i || [];
                    if (d.length === 1) {
                        f = d[0] = d[0].slice(0);
                        if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && v && r.relative[f[1].type]) {
                            t = (r.find.ID(l.matches[0].replace(nt, rt), t) || [])[0];
                            if (!t) return i;
                            p && (t = t.parentNode), e = e.slice(f.shift().value.length)
                        }
                        a = K.needsContext.test(e) ? 0 : f.length;
                        while (a--) {
                            l = f[a];
                            if (r.relative[c = l.type]) break;
                            if (h = r.find[c])
                                if (s = h(l.matches[0].replace(nt, rt), et.test(f[0].type) && vt(t.parentNode) || t)) {
                                    f.splice(a, 1), e = s.length && gt(f);
                                    if (!e) return D.apply(i, s), i;
                                    break
                                }
                        }
                    }
                    return (p || u(e, d))(s, t, !v, i, et.test(e) && vt(t.parentNode) || t), i
                }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!c, h(), n.sortDetached = ft(function(e) {
                    return e.compareDocumentPosition(p.createElement("div")) & 1
                }), ft(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
                }) || lt("type|href|height|width", function(e, t, n) {
                    if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                }), (!n.attributes || !ft(function(e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
                })) && lt("value", function(e, t, n) {
                    if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
                }), ft(function(e) {
                    return e.getAttribute("disabled") == null
                }) || lt(B, function(e, t, n) {
                    var r;
                    if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), ot
            }(e);
            h.find = y, h.expr = y.selectors, h.expr[":"] = h.expr.pseudos, h.unique = y.uniqueSort, h.text = y.getText, h.isXMLDoc = y.isXML, h.contains = y.contains;
            var b = h.expr.match.needsContext,
                w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                E = /^.[^:#\[\.,]*$/;
            h.filter = function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? h.find.matchesSelector(r, e) ? [r] : [] : h.find.matches(e, h.grep(t, function(e) {
                    return e.nodeType === 1
                }))
            }, h.fn.extend({
                find: function(e) {
                    var t, n = [],
                        r = this,
                        i = r.length;
                    if (typeof e != "string") return this.pushStack(h(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (h.contains(r[t], this)) return !0
                    }));
                    for (t = 0; t < i; t++) h.find(e, r[t], n);
                    return n = this.pushStack(i > 1 ? h.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                },
                filter: function(e) {
                    return this.pushStack(S(this, e || [], !1))
                },
                not: function(e) {
                    return this.pushStack(S(this, e || [], !0))
                },
                is: function(e) {
                    return !!S(this, typeof e == "string" && b.test(e) ? h(e) : e || [], !1).length
                }
            });
            var x, T = e.document,
                N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                C = h.fn.init = function(e, t) {
                    var n, r;
                    if (!e) return this;
                    if (typeof e == "string") {
                        e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? n = [null, e, null] : n = N.exec(e);
                        if (n && (n[1] || !t)) {
                            if (n[1]) {
                                t = t instanceof h ? t[0] : t, h.merge(this, h.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0));
                                if (w.test(n[1]) && h.isPlainObject(t))
                                    for (n in t) h.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                                return this
                            }
                            r = T.getElementById(n[2]);
                            if (r && r.parentNode) {
                                if (r.id !== n[2]) return x.find(e);
                                this.length = 1, this[0] = r
                            }
                            return this.context = T, this.selector = e, this
                        }
                        return !t || t.jquery ? (t || x).find(e) : this.constructor(t).find(e)
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : h.isFunction(e) ? typeof x.ready != "undefined" ? x.ready(e) : e(h) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), h.makeArray(e, this))
                };
            C.prototype = h.fn, x = h(T);
            var k = /^(?:parents|prev(?:Until|All))/,
                L = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            h.extend({
                dir: function(e, t, n) {
                    var r = [],
                        i = e[t];
                    while (i && i.nodeType !== 9 && (n === undefined || i.nodeType !== 1 || !h(i).is(n))) i.nodeType === 1 && r.push(i), i = i[t];
                    return r
                },
                sibling: function(e, t) {
                    var n = [];
                    for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
                    return n
                }
            }), h.fn.extend({
                has: function(e) {
                    var t, n = h(e, this),
                        r = n.length;
                    return this.filter(function() {
                        for (t = 0; t < r; t++)
                            if (h.contains(this, n[t])) return !0
                    })
                },
                closest: function(e, t) {
                    var n, r = 0,
                        i = this.length,
                        s = [],
                        o = b.test(e) || typeof e != "string" ? h(e, t || this.context) : 0;
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && h.find.matchesSelector(n, e))) {
                                s.push(n);
                                break
                            }
                    return this.pushStack(s.length > 1 ? h.unique(s) : s)
                },
                index: function(e) {
                    return e ? typeof e == "string" ? h.inArray(this[0], h(e)) : h.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(e, t) {
                    return this.pushStack(h.unique(h.merge(this.get(), h(e, t))))
                },
                addBack: function(e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                }
            }), h.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== 11 ? t : null
                },
                parents: function(e) {
                    return h.dir(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return h.dir(e, "parentNode", n)
                },
                next: function(e) {
                    return A(e, "nextSibling")
                },
                prev: function(e) {
                    return A(e, "previousSibling")
                },
                nextAll: function(e) {
                    return h.dir(e, "nextSibling")
                },
                prevAll: function(e) {
                    return h.dir(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return h.dir(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return h.dir(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return h.sibling((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return h.sibling(e.firstChild)
                },
                contents: function(e) {
                    return h.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : h.merge([], e.childNodes)
                }
            }, function(e, t) {
                h.fn[e] = function(n, r) {
                    var i = h.map(this, t, n);
                    return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = h.filter(r, i)), this.length > 1 && (L[e] || (i = h.unique(i)), k.test(e) && (i = i.reverse())), this.pushStack(i)
                }
            });
            var O = /\S+/g,
                M = {};
            h.Callbacks = function(e) {
                e = typeof e == "string" ? M[e] || _(e) : h.extend({}, e);
                var t, n, r, i, s, o, u = [],
                    a = !e.once && [],
                    f = function(c) {
                        n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0;
                        for (; u && s < i; s++)
                            if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                                n = !1;
                                break
                            }
                        t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
                    },
                    l = {
                        add: function() {
                            if (u) {
                                var r = u.length;
                                (function s(t) {
                                    h.each(t, function(t, n) {
                                        var r = h.type(n);
                                        r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && s(n)
                                    })
                                })(arguments), t ? i = u.length : n && (o = r, f(n))
                            }
                            return this
                        },
                        remove: function() {
                            return u && h.each(arguments, function(e, n) {
                                var r;
                                while ((r = h.inArray(n, u, r)) > -1) u.splice(r, 1), t && (r <= i && i--, r <= s && s--)
                            }), this
                        },
                        has: function(e) {
                            return e ? h.inArray(e, u) > -1 : !!u && !!u.length
                        },
                        empty: function() {
                            return u = [], i = 0, this
                        },
                        disable: function() {
                            return u = a = n = undefined, this
                        },
                        disabled: function() {
                            return !u
                        },
                        lock: function() {
                            return a = undefined, n || l.disable(), this
                        },
                        locked: function() {
                            return !a
                        },
                        fireWith: function(e, n) {
                            return u && (!r || a) && (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
                        },
                        fire: function() {
                            return l.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!r
                        }
                    };
                return l
            }, h.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", h.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", h.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", h.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return i.done(arguments).fail(arguments), this
                            },
                            then: function() {
                                var e = arguments;
                                return h.Deferred(function(n) {
                                    h.each(t, function(t, s) {
                                        var o = h.isFunction(e[t]) && e[t];
                                        i[s[1]](function() {
                                            var e = o && o.apply(this, arguments);
                                            e && h.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) {
                                return e != null ? h.extend(e, r) : r
                            }
                        },
                        i = {};
                    return r.pipe = r.then, h.each(t, function(e, s) {
                        var o = s[2],
                            u = s[3];
                        r[s[1]] = o.add, u && o.add(function() {
                            n = u
                        }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                            return i[s[0] + "With"](this === i ? r : this, arguments), this
                        }, i[s[0] + "With"] = o.fireWith
                    }), r.promise(i), e && e.call(i, i), i
                },
                when: function(e) {
                    var t = 0,
                        n = r.call(arguments),
                        i = n.length,
                        s = i !== 1 || e && h.isFunction(e.promise) ? i : 0,
                        o = s === 1 ? e : h.Deferred(),
                        u = function(e, t, n) {
                            return function(i) {
                                t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                            }
                        },
                        a, f, l;
                    if (i > 1) {
                        a = new Array(i), f = new Array(i), l = new Array(i);
                        for (; t < i; t++) n[t] && h.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s
                    }
                    return s || o.resolveWith(l, n), o.promise()
                }
            });
            var D;
            h.fn.ready = function(e) {
                return h.ready.promise().done(e), this
            }, h.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? h.readyWait++ : h.ready(!0)
                },
                ready: function(e) {
                    if (e === !0 ? --h.readyWait : h.isReady) return;
                    if (!T.body) return setTimeout(h.ready);
                    h.isReady = !0;
                    if (e !== !0 && --h.readyWait > 0) return;
                    D.resolveWith(T, [h]), h.fn.triggerHandler && (h(T).triggerHandler("ready"), h(T).off("ready"))
                }
            }), h.ready.promise = function(t) {
                if (!D) {
                    D = h.Deferred();
                    if (T.readyState === "complete") setTimeout(h.ready);
                    else if (T.addEventListener) T.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1);
                    else {
                        T.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
                        var n = !1;
                        try {
                            n = e.frameElement == null && T.documentElement
                        } catch (r) {}
                        n && n.doScroll && function i() {
                            if (!h.isReady) {
                                try {
                                    n.doScroll("left")
                                } catch (e) {
                                    return setTimeout(i, 50)
                                }
                                P(), h.ready()
                            }
                        }()
                    }
                }
                return D.promise(t)
            };
            var B = typeof undefined,
                j;
            for (j in h(l)) break;
            l.ownLast = j !== "0", l.inlineBlockNeedsLayout = !1, h(function() {
                    var e, t, n, r;
                    n = T.getElementsByTagName("body")[0];
                    if (!n || !n.style) return;
                    t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== B && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = e = t.offsetWidth === 3, e && (n.style.zoom = 1)), n.removeChild(r)
                }),
                function() {
                    var e = T.createElement("div");
                    if (l.deleteExpando == null) {
                        l.deleteExpando = !0;
                        try {
                            delete e.test
                        } catch (t) {
                            l.deleteExpando = !1
                        }
                    }
                    e = null
                }(), h.acceptData = function(e) {
                    var t = h.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
                };
            var F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                I = /([A-Z])/g;
            h.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function(e) {
                    return e = e.nodeType ? h.cache[e[h.expando]] : e[h.expando], !!e && !R(e)
                },
                data: function(e, t, n) {
                    return U(e, t, n)
                },
                removeData: function(e, t) {
                    return z(e, t)
                },
                _data: function(e, t, n) {
                    return U(e, t, n, !0)
                },
                _removeData: function(e, t) {
                    return z(e, t, !0)
                }
            }), h.fn.extend({
                data: function(e, t) {
                    var n, r, i, s = this[0],
                        o = s && s.attributes;
                    if (e === undefined) {
                        if (this.length) {
                            i = h.data(s);
                            if (s.nodeType === 1 && !h._data(s, "parsedAttrs")) {
                                n = o.length;
                                while (n--) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = h.camelCase(r.slice(5)), q(s, r, i[r])));
                                h._data(s, "parsedAttrs", !0)
                            }
                        }
                        return i
                    }
                    return typeof e == "object" ? this.each(function() {
                        h.data(this, e)
                    }) : arguments.length > 1 ? this.each(function() {
                        h.data(this, e, t)
                    }) : s ? q(s, e, h.data(s, e)) : undefined
                },
                removeData: function(e) {
                    return this.each(function() {
                        h.removeData(this, e)
                    })
                }
            }), h.extend({
                queue: function(e, t, n) {
                    var r;
                    if (e) return t = (t || "fx") + "queue", r = h._data(e, t), n && (!r || h.isArray(n) ? r = h._data(e, t, h.makeArray(n)) : r.push(n)), r || []
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = h.queue(e, t),
                        r = n.length,
                        i = n.shift(),
                        s = h._queueHooks(e, t),
                        o = function() {
                            h.dequeue(e, t)
                        };
                    i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return h._data(e, n) || h._data(e, n, {
                        empty: h.Callbacks("once memory").add(function() {
                            h._removeData(e, t + "queue"), h._removeData(e, n)
                        })
                    })
                }
            }), h.fn.extend({
                queue: function(e, t) {
                    var n = 2;
                    return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? h.queue(this[0], e) : t === undefined ? this : this.each(function() {
                        var n = h.queue(this, e, t);
                        h._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && h.dequeue(this, e)
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        h.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, r = 1,
                        i = h.Deferred(),
                        s = this,
                        o = this.length,
                        u = function() {
                            --r || i.resolveWith(s, [s])
                        };
                    typeof e != "string" && (t = e, e = undefined), e = e || "fx";
                    while (o--) n = h._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
                    return u(), i.promise(t)
                }
            });
            var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                X = ["Top", "Right", "Bottom", "Left"],
                V = function(e, t) {
                    return e = t || e, h.css(e, "display") === "none" || !h.contains(e.ownerDocument, e)
                },
                $ = h.access = function(e, t, n, r, i, s, o) {
                    var u = 0,
                        a = e.length,
                        f = n == null;
                    if (h.type(n) === "object") {
                        i = !0;
                        for (u in n) h.access(e, t, u, n[u], !0, s, o)
                    } else if (r !== undefined) {
                        i = !0, h.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                            return f.call(h(e), n)
                        }));
                        if (t)
                            for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
                    }
                    return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
                },
                J = /^(?:checkbox|radio)$/i;
            (function() {
                var e = T.createElement("input"),
                    t = T.createElement("div"),
                    n = T.createDocumentFragment();
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = t.firstChild.nodeType === 3, l.tbody = !t.getElementsByTagName("tbody").length, l.htmlSerialize = !!t.getElementsByTagName("link").length, l.html5Clone = T.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", e.type = "checkbox", e.checked = !0, n.appendChild(e), l.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    l.noCloneEvent = !1
                }), t.cloneNode(!0).click());
                if (l.deleteExpando == null) {
                    l.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (r) {
                        l.deleteExpando = !1
                    }
                }
            })(),
            function() {
                var t, n, r = T.createElement("div");
                for (t in {
                        submit: !0,
                        change: !0,
                        focusin: !0
                    }) n = "on" + t, (l[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), l[t + "Bubbles"] = r.attributes[n].expando === !1);
                r = null
            }();
            var K = /^(?:input|select|textarea)$/i,
                Q = /^key/,
                G = /^(?:mouse|pointer|contextmenu)|click/,
                Y = /^(?:focusinfocus|focusoutblur)$/,
                Z = /^([^.]*)(?:\.(.+)|)$/;
            h.event = {
                global: {},
                add: function(e, t, n, r, i) {
                    var s, o, u, a, f, l, c, p, d, v, m, g = h._data(e);
                    if (!g) return;
                    n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = h.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
                        return typeof h === B || !!e && h.event.triggered === e.type ? undefined : h.event.dispatch.apply(l.elem, arguments)
                    }, l.elem = e), t = (t || "").match(O) || [""], u = t.length;
                    while (u--) {
                        s = Z.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort();
                        if (!d) continue;
                        f = h.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = h.event.special[d] || {}, c = h.extend({
                            type: d,
                            origType: m,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && h.expr.match.needsContext.test(i),
                            namespace: v.join(".")
                        }, a);
                        if (!(p = o[d])) {
                            p = o[d] = [], p.delegateCount = 0;
                            if (!f.setup || f.setup.call(e, r, v, l) === !1) e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l)
                        }
                        f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), h.event.global[d] = !0
                    }
                    e = null
                },
                remove: function(e, t, n, r, i) {
                    var s, o, u, a, f, l, c, p, d, v, m, g = h.hasData(e) && h._data(e);
                    if (!g || !(l = g.events)) return;
                    t = (t || "").match(O) || [""], f = t.length;
                    while (f--) {
                        u = Z.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort();
                        if (!d) {
                            for (d in l) h.event.remove(e, d + t[f], n, r, !0);
                            continue
                        }
                        c = h.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, p = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = p.length;
                        while (s--) o = p[s], (i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (p.splice(s, 1), o.selector && p.delegateCount--, c.remove && c.remove.call(e, o));
                        a && !p.length && ((!c.teardown || c.teardown.call(e, v, g.handle) === !1) && h.removeEvent(e, d, g.handle), delete l[d])
                    }
                    h.isEmptyObject(l) && (delete g.handle, h._removeData(e, "events"))
                },
                trigger: function(t, n, r, i) {
                    var s, o, u, a, l, c, p, d = [r || T],
                        v = f.call(t, "type") ? t.type : t,
                        m = f.call(t, "namespace") ? t.namespace.split(".") : [];
                    u = c = r = r || T;
                    if (r.nodeType === 3 || r.nodeType === 8) return;
                    if (Y.test(v + h.event.triggered)) return;
                    v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[h.expando] ? t : new h.Event(v, typeof t == "object" && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = n == null ? [t] : h.makeArray(n, [t]), l = h.event.special[v] || {};
                    if (!i && l.trigger && l.trigger.apply(r, n) === !1) return;
                    if (!i && !l.noBubble && !h.isWindow(r)) {
                        a = l.delegateType || v, Y.test(a + v) || (u = u.parentNode);
                        for (; u; u = u.parentNode) d.push(u), c = u;
                        c === (r.ownerDocument || T) && d.push(c.defaultView || c.parentWindow || e)
                    }
                    p = 0;
                    while ((u = d[p++]) && !t.isPropagationStopped()) t.type = p > 1 ? a : l.bindType || v, s = (h._data(u, "events") || {})[t.type] && h._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && h.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
                    t.type = v;
                    if (!i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && h.acceptData(r) && o && r[v] && !h.isWindow(r)) {
                        c = r[o], c && (r[o] = null), h.event.triggered = v;
                        try {
                            r[v]()
                        } catch (g) {}
                        h.event.triggered = undefined, c && (r[o] = c)
                    }
                    return t.result
                },
                dispatch: function(e) {
                    e = h.event.fix(e);
                    var t, n, i, s, o, u = [],
                        a = r.call(arguments),
                        f = (h._data(this, "events") || {})[e.type] || [],
                        l = h.event.special[e.type] || {};
                    a[0] = e, e.delegateTarget = this;
                    if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
                    u = h.event.handlers.call(this, e, f), t = 0;
                    while ((s = u[t++]) && !e.isPropagationStopped()) {
                        e.currentTarget = s.elem, o = 0;
                        while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                            if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, n = ((h.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), n !== undefined && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation())
                    }
                    return l.postDispatch && l.postDispatch.call(this, e), e.result
                },
                handlers: function(e, t) {
                    var n, r, i, s, o = [],
                        u = t.delegateCount,
                        a = e.target;
                    if (u && a.nodeType && (!e.button || e.type !== "click"))
                        for (; a != this; a = a.parentNode || this)
                            if (a.nodeType === 1 && (a.disabled !== !0 || e.type !== "click")) {
                                i = [];
                                for (s = 0; s < u; s++) r = t[s], n = r.selector + " ", i[n] === undefined && (i[n] = r.needsContext ? h(n, this).index(a) >= 0 : h.find(n, this, null, [a]).length), i[n] && i.push(r);
                                i.length && o.push({
                                    elem: a,
                                    handlers: i
                                })
                            }
                    return u < t.length && o.push({
                        elem: this,
                        handlers: t.slice(u)
                    }), o
                },
                fix: function(e) {
                    if (e[h.expando]) return e;
                    var t, n, r, i = e.type,
                        s = e,
                        o = this.fixHooks[i];
                    o || (this.fixHooks[i] = o = G.test(i) ? this.mouseHooks : Q.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new h.Event(s), t = r.length;
                    while (t--) n = r[t], e[n] = s[n];
                    return e.target || (e.target = s.srcElement || T), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function(e, t) {
                        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function(e, t) {
                        var n, r, i, s = t.button,
                            o = t.fromElement;
                        return e.pageX == null && t.clientX != null && (r = e.target.ownerDocument || T, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function() {
                            if (this !== nt() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function() {
                            if (this === nt() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function() {
                            if (h.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                        },
                        _default: function(e) {
                            return h.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function(e, t, n, r) {
                    var i = h.extend(new h.Event, n, {
                        type: e,
                        isSimulated: !0,
                        originalEvent: {}
                    });
                    r ? h.event.trigger(i, null, t) : h.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, h.removeEvent = T.removeEventListener ? function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
                var r = "on" + t;
                e.detachEvent && (typeof e[r] === B && (e[r] = null), e.detachEvent(r, n))
            }, h.Event = function(e, t) {
                if (!(this instanceof h.Event)) return new h.Event(e, t);
                e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === !1 ? et : tt) : this.type = e, t && h.extend(this, t), this.timeStamp = e && e.timeStamp || h.now(), this[h.expando] = !0
            }, h.Event.prototype = {
                isDefaultPrevented: tt,
                isPropagationStopped: tt,
                isImmediatePropagationStopped: tt,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = et;
                    if (!e) return;
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = et;
                    if (!e) return;
                    e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = et, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, h.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, t) {
                h.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function(e) {
                        var n, r = this,
                            i = e.relatedTarget,
                            s = e.handleObj;
                        if (!i || i !== r && !h.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                        return n
                    }
                }
            }), l.submitBubbles || (h.event.special.submit = {
                setup: function() {
                    if (h.nodeName(this, "form")) return !1;
                    h.event.add(this, "click._submit keypress._submit", function(e) {
                        var t = e.target,
                            n = h.nodeName(t, "input") || h.nodeName(t, "button") ? t.form : undefined;
                        n && !h._data(n, "submitBubbles") && (h.event.add(n, "submit._submit", function(e) {
                            e._submit_bubble = !0
                        }), h._data(n, "submitBubbles", !0))
                    })
                },
                postDispatch: function(e) {
                    e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && h.event.simulate("submit", this.parentNode, e, !0))
                },
                teardown: function() {
                    if (h.nodeName(this, "form")) return !1;
                    h.event.remove(this, "._submit")
                }
            }), l.changeBubbles || (h.event.special.change = {
                setup: function() {
                    if (K.test(this.nodeName)) {
                        if (this.type === "checkbox" || this.type === "radio") h.event.add(this, "propertychange._change", function(e) {
                            e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                        }), h.event.add(this, "click._change", function(e) {
                            this._just_changed && !e.isTrigger && (this._just_changed = !1), h.event.simulate("change", this, e, !0)
                        });
                        return !1
                    }
                    h.event.add(this, "beforeactivate._change", function(e) {
                        var t = e.target;
                        K.test(t.nodeName) && !h._data(t, "changeBubbles") && (h.event.add(t, "change._change", function(e) {
                            this.parentNode && !e.isSimulated && !e.isTrigger && h.event.simulate("change", this.parentNode, e, !0)
                        }), h._data(t, "changeBubbles", !0))
                    })
                },
                handle: function(e) {
                    var t = e.target;
                    if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
                },
                teardown: function() {
                    return h.event.remove(this, "._change"), !K.test(this.nodeName)
                }
            }), l.focusinBubbles || h.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                var n = function(e) {
                    h.event.simulate(t, e.target, h.event.fix(e), !0)
                };
                h.event.special[t] = {
                    setup: function() {
                        var r = this.ownerDocument || this,
                            i = h._data(r, t);
                        i || r.addEventListener(e, n, !0), h._data(r, t, (i || 0) + 1)
                    },
                    teardown: function() {
                        var r = this.ownerDocument || this,
                            i = h._data(r, t) - 1;
                        i ? h._data(r, t, i) : (r.removeEventListener(e, n, !0), h._removeData(r, t))
                    }
                }
            }), h.fn.extend({
                on: function(e, t, n, r, i) {
                    var s, o;
                    if (typeof e == "object") {
                        typeof t != "string" && (n = n || t, t = undefined);
                        for (s in e) this.on(s, t, n, e[s], i);
                        return this
                    }
                    n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
                    if (r === !1) r = tt;
                    else if (!r) return this;
                    return i === 1 && (o = r, r = function(e) {
                        return h().off(e), o.apply(this, arguments)
                    }, r.guid = o.guid || (o.guid = h.guid++)), this.each(function() {
                        h.event.add(this, e, r, n, t)
                    })
                },
                one: function(e, t, n, r) {
                    return this.on(e, t, n, r, 1)
                },
                off: function(e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, h(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if (typeof e == "object") {
                        for (i in e) this.off(i, t, e[i]);
                        return this
                    }
                    if (t === !1 || typeof t == "function") n = t, t = undefined;
                    return n === !1 && (n = tt), this.each(function() {
                        h.event.remove(this, e, n, t)
                    })
                },
                trigger: function(e, t) {
                    return this.each(function() {
                        h.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) return h.event.trigger(e, t, n, !0)
                }
            });
            var it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                st = / jQuery\d+="(?:null|\d+)"/g,
                ot = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
                ut = /^\s+/,
                at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                ft = /<([\w:]+)/,
                lt = /<tbody/i,
                ct = /<|&#?\w+;/,
                ht = /<(?:script|style|link)/i,
                pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                dt = /^$|\/(?:java|ecma)script/i,
                vt = /^true\/(.*)/,
                mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                gt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    legend: [1, "<fieldset>", "</fieldset>"],
                    area: [1, "<map>", "</map>"],
                    param: [1, "<object>", "</object>"],
                    thead: [1, "<table>", "</table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                },
                yt = rt(T),
                bt = yt.appendChild(T.createElement("div"));
            gt.optgroup = gt.option, gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead, gt.th = gt.td, h.extend({
                clone: function(e, t, n) {
                    var r, i, s, o, u, a = h.contains(e.ownerDocument, e);
                    l.html5Clone || h.isXMLDoc(e) || !ot.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (bt.innerHTML = e.outerHTML, bt.removeChild(s = bt.firstChild));
                    if ((!l.noCloneEvent || !l.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !h.isXMLDoc(e)) {
                        r = wt(s), u = wt(e);
                        for (o = 0;
                            (i = u[o]) != null; ++o) r[o] && kt(i, r[o])
                    }
                    if (t)
                        if (n) {
                            u = u || wt(e), r = r || wt(s);
                            for (o = 0;
                                (i = u[o]) != null; o++) Ct(i, r[o])
                        } else Ct(e, s);
                    return r = wt(s, "script"), r.length > 0 && Nt(r, !a && wt(e, "script")), r = u = i = null, s
                },
                buildFragment: function(e, t, n, r) {
                    var i, s, o, u, a, f, c, p = e.length,
                        d = rt(t),
                        v = [],
                        m = 0;
                    for (; m < p; m++) {
                        s = e[m];
                        if (s || s === 0)
                            if (h.type(s) === "object") h.merge(v, s.nodeType ? [s] : s);
                            else if (!ct.test(s)) v.push(t.createTextNode(s));
                        else {
                            u = u || d.appendChild(t.createElement("div")), a = (ft.exec(s) || ["", ""])[1].toLowerCase(), c = gt[a] || gt._default, u.innerHTML = c[1] + s.replace(at, "<$1></$2>") + c[2], i = c[0];
                            while (i--) u = u.lastChild;
                            !l.leadingWhitespace && ut.test(s) && v.push(t.createTextNode(ut.exec(s)[0]));
                            if (!l.tbody) {
                                s = a === "table" && !lt.test(s) ? u.firstChild : c[1] === "<table>" && !lt.test(s) ? u : 0, i = s && s.childNodes.length;
                                while (i--) h.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                            }
                            h.merge(v, u.childNodes), u.textContent = "";
                            while (u.firstChild) u.removeChild(u.firstChild);
                            u = d.lastChild
                        }
                    }
                    u && d.removeChild(u), l.appendChecked || h.grep(wt(v, "input"), Et), m = 0;
                    while (s = v[m++]) {
                        if (r && h.inArray(s, r) !== -1) continue;
                        o = h.contains(s.ownerDocument, s), u = wt(d.appendChild(s), "script"), o && Nt(u);
                        if (n) {
                            i = 0;
                            while (s = u[i++]) dt.test(s.type || "") && n.push(s)
                        }
                    }
                    return u = null, d
                },
                cleanData: function(e, t) {
                    var r, i, s, o, u = 0,
                        a = h.expando,
                        f = h.cache,
                        c = l.deleteExpando,
                        p = h.event.special;
                    for (;
                        (r = e[u]) != null; u++)
                        if (t || h.acceptData(r)) {
                            s = r[a], o = s && f[s];
                            if (o) {
                                if (o.events)
                                    for (i in o.events) p[i] ? h.event.remove(r, i) : h.removeEvent(r, i, o.handle);
                                f[s] && (delete f[s], c ? delete r[a] : typeof r.removeAttribute !== B ? r.removeAttribute(a) : r[a] = null, n.push(s))
                            }
                        }
                }
            }), h.fn.extend({
                text: function(e) {
                    return $(this, function(e) {
                        return e === undefined ? h.text(this) : this.empty().append((this[0] && this[0].ownerDocument || T).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = St(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = St(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    var n, r = e ? h.filter(e, this) : this,
                        i = 0;
                    for (;
                        (n = r[i]) != null; i++) !t && n.nodeType === 1 && h.cleanData(wt(n)), n.parentNode && (t && h.contains(n.ownerDocument, n) && Nt(wt(n, "script")), n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    var e, t = 0;
                    for (;
                        (e = this[t]) != null; t++) {
                        e.nodeType === 1 && h.cleanData(wt(e, !1));
                        while (e.firstChild) e.removeChild(e.firstChild);
                        e.options && h.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                },
                clone: function(e, t) {
                    return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                        return h.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return $(this, function(e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(st, "") : undefined;
                        if (typeof e == "string" && !ht.test(e) && (l.htmlSerialize || !ot.test(e)) && (l.leadingWhitespace || !ut.test(e)) && !gt[(ft.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = e.replace(at, "<$1></$2>");
                            try {
                                for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (h.cleanData(wt(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (i) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = arguments[0];
                    return this.domManip(arguments, function(t) {
                        e = this.parentNode, h.cleanData(wt(this)), e && e.replaceChild(t, this)
                    }), e && (e.length || e.nodeType) ? this : this.remove()
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t) {
                    e = i.apply([], e);
                    var n, r, s, o, u, a, f = 0,
                        c = this.length,
                        p = this,
                        d = c - 1,
                        v = e[0],
                        m = h.isFunction(v);
                    if (m || c > 1 && typeof v == "string" && !l.checkClone && pt.test(v)) return this.each(function(n) {
                        var r = p.eq(n);
                        m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
                    });
                    if (c) {
                        a = h.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, a.childNodes.length === 1 && (a = n);
                        if (n) {
                            o = h.map(wt(a, "script"), xt), s = o.length;
                            for (; f < c; f++) r = a, f !== d && (r = h.clone(r, !0, !0), s && h.merge(o, wt(r, "script"))), t.call(this[f], r, f);
                            if (s) {
                                u = o[o.length - 1].ownerDocument, h.map(o, Tt);
                                for (f = 0; f < s; f++) r = o[f], dt.test(r.type || "") && !h._data(r, "globalEval") && h.contains(u, r) && (r.src ? h._evalUrl && h._evalUrl(r.src) : h.globalEval((r.text || r.textContent || r.innerHTML || "").replace(mt, "")))
                            }
                            a = n = null
                        }
                    }
                    return this
                }
            }), h.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                h.fn[e] = function(e) {
                    var n, r = 0,
                        i = [],
                        o = h(e),
                        u = o.length - 1;
                    for (; r <= u; r++) n = r === u ? this : this.clone(!0), h(o[r])[t](n), s.apply(i, n.get());
                    return this.pushStack(i)
                }
            });
            var Lt, At = {};
            (function() {
                var e;
                l.shrinkWrapBlocks = function() {
                    if (e != null) return e;
                    e = !1;
                    var t, n, r;
                    n = T.getElementsByTagName("body")[0];
                    if (!n || !n.style) return;
                    return t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), typeof t.style.zoom !== B && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(T.createElement("div")).style.width = "5px", e = t.offsetWidth !== 3), n.removeChild(r), e
                }
            })();
            var _t = /^margin/,
                Dt = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
                Pt, Ht, Bt = /^(top|right|bottom|left)$/;
            e.getComputedStyle ? (Pt = function(t) {
                    return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
                }, Ht = function(e, t, n) {
                    var r, i, s, o, u = e.style;
                    return n = n || Pt(e), o = n ? n.getPropertyValue(t) || n[t] : undefined, n && (o === "" && !h.contains(e.ownerDocument, e) && (o = h.style(e, t)), Dt.test(o) && _t.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o === undefined ? o : o + ""
                }) : T.documentElement.currentStyle && (Pt = function(e) {
                    return e.currentStyle
                }, Ht = function(e, t, n) {
                    var r, i, s, o, u = e.style;
                    return n = n || Pt(e), o = n ? n[t] : undefined, o == null && u && u[t] && (o = u[t]), Dt.test(o) && !Bt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = t === "fontSize" ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), o === undefined ? o : o + "" || "auto"
                }),
                function() {
                    function a() {
                        var t, n, r, a;
                        n = T.getElementsByTagName("body")[0];
                        if (!n || !n.style) return;
                        t = T.createElement("div"), r = T.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = s = !1, u = !0, e.getComputedStyle && (i = (e.getComputedStyle(t, null) || {}).top !== "1%", s = (e.getComputedStyle(t, null) || {
                            width: "4px"
                        }).width === "4px", a = t.appendChild(T.createElement("div")), a.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", a.style.marginRight = a.style.width = "0", t.style.width = "1px", u = !parseFloat((e.getComputedStyle(a, null) || {}).marginRight), t.removeChild(a)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = t.getElementsByTagName("td"), a[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = a[0].offsetHeight === 0, o && (a[0].style.display = "", a[1].style.display = "none", o = a[0].offsetHeight === 0), n.removeChild(r)
                    }
                    var t, n, r, i, s, o, u;
                    t = T.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = r && r.style;
                    if (!n) return;
                    n.cssText = "float:left;opacity:.5", l.opacity = n.opacity === "0.5", l.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = t.style.backgroundClip === "content-box", l.boxSizing = n.boxSizing === "" || n.MozBoxSizing === "" || n.WebkitBoxSizing === "", h.extend(l, {
                        reliableHiddenOffsets: function() {
                            return o == null && a(), o
                        },
                        boxSizingReliable: function() {
                            return s == null && a(), s
                        },
                        pixelPosition: function() {
                            return i == null && a(), i
                        },
                        reliableMarginRight: function() {
                            return u == null && a(), u
                        }
                    })
                }(), h.swap = function(e, t, n, r) {
                    var i, s, o = {};
                    for (s in t) o[s] = e.style[s], e.style[s] = t[s];
                    i = n.apply(e, r || []);
                    for (s in t) e.style[s] = o[s];
                    return i
                };
            var Ft = /alpha\([^)]*\)/i,
                It = /opacity\s*=\s*([^)]*)/,
                qt = /^(none|table(?!-c[ea]).+)/,
                Rt = new RegExp("^(" + W + ")(.*)$", "i"),
                Ut = new RegExp("^([+-])=(" + W + ")", "i"),
                zt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Wt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Xt = ["Webkit", "O", "Moz", "ms"];
            h.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = Ht(e, "opacity");
                                return n === "" ? "1" : n
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
                    "float": l.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function(e, t, n, r) {
                    if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
                    var i, s, o, u = h.camelCase(t),
                        a = e.style;
                    t = h.cssProps[u] || (h.cssProps[u] = Vt(a, u)), o = h.cssHooks[t] || h.cssHooks[u];
                    if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
                    s = typeof n, s === "string" && (i = Ut.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(h.css(e, t)), s = "number");
                    if (n == null || n !== n) return;
                    s === "number" && !h.cssNumber[u] && (n += "px"), !l.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
                    if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) try {
                        a[t] = n
                    } catch (f) {}
                },
                css: function(e, t, n, r) {
                    var i, s, o, u = h.camelCase(t);
                    return t = h.cssProps[u] || (h.cssProps[u] = Vt(e.style, u)), o = h.cssHooks[t] || h.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), s === undefined && (s = Ht(e, t, r)), s === "normal" && t in Wt && (s = Wt[t]), n === "" || n ? (i = parseFloat(s), n === !0 || h.isNumeric(i) ? i || 0 : s) : s
                }
            }), h.each(["height", "width"], function(e, t) {
                h.cssHooks[t] = {
                    get: function(e, n, r) {
                        if (n) return qt.test(h.css(e, "display")) && e.offsetWidth === 0 ? h.swap(e, zt, function() {
                            return Qt(e, t, r)
                        }) : Qt(e, t, r)
                    },
                    set: function(e, n, r) {
                        var i = r && Pt(e);
                        return Jt(e, n, r ? Kt(e, t, r, l.boxSizing && h.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
                    }
                }
            }), l.opacity || (h.cssHooks.opacity = {
                get: function(e, t) {
                    return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                },
                set: function(e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        i = h.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                        s = r && r.filter || n.filter || "";
                    n.zoom = 1;
                    if ((t >= 1 || t === "") && h.trim(s.replace(Ft, "")) === "" && n.removeAttribute) {
                        n.removeAttribute("filter");
                        if (t === "" || r && !r.filter) return
                    }
                    n.filter = Ft.test(s) ? s.replace(Ft, i) : s + " " + i
                }
            }), h.cssHooks.marginRight = jt(l.reliableMarginRight, function(e, t) {
                if (t) return h.swap(e, {
                    display: "inline-block"
                }, Ht, [e, "marginRight"])
            }), h.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(e, t) {
                h.cssHooks[e + t] = {
                    expand: function(n) {
                        var r = 0,
                            i = {},
                            s = typeof n == "string" ? n.split(" ") : [n];
                        for (; r < 4; r++) i[e + X[r] + t] = s[r] || s[r - 2] || s[0];
                        return i
                    }
                }, _t.test(e) || (h.cssHooks[e + t].set = Jt)
            }), h.fn.extend({
                css: function(e, t) {
                    return $(this, function(e, t, n) {
                        var r, i, s = {},
                            o = 0;
                        if (h.isArray(t)) {
                            r = Pt(e), i = t.length;
                            for (; o < i; o++) s[t[o]] = h.css(e, t[o], !1, r);
                            return s
                        }
                        return n !== undefined ? h.style(e, t, n) : h.css(e, t)
                    }, e, t, arguments.length > 1)
                },
                show: function() {
                    return $t(this, !0)
                },
                hide: function() {
                    return $t(this)
                },
                toggle: function(e) {
                    return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                        V(this) ? h(this).show() : h(this).hide()
                    })
                }
            }), h.Tween = Gt, Gt.prototype = {
                constructor: Gt,
                init: function(e, t, n, r, i, s) {
                    this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (h.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = Gt.propHooks[this.prop];
                    return e && e.get ? e.get(this) : Gt.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = Gt.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = h.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Gt.propHooks._default.set(this), this
                }
            }, Gt.prototype.init.prototype = Gt.prototype, Gt.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = h.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
                    },
                    set: function(e) {
                        h.fx.step[e.prop] ? h.fx.step[e.prop](e) : e.elem.style && (e.elem.style[h.cssProps[e.prop]] != null || h.cssHooks[e.prop]) ? h.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, h.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, h.fx = Gt.prototype.init, h.fx.step = {};
            var Yt, Zt, en = /^(?:toggle|show|hide)$/,
                tn = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
                nn = /queueHooks$/,
                rn = [fn],
                sn = {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = tn.exec(t),
                            s = i && i[3] || (h.cssNumber[e] ? "" : "px"),
                            o = (h.cssNumber[e] || s !== "px" && +r) && tn.exec(h.css(n.elem, e)),
                            u = 1,
                            a = 20;
                        if (o && o[3] !== s) {
                            s = s || o[3], i = i || [], o = +r || 1;
                            do u = u || ".5", o /= u, h.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
                        }
                        return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };
            h.Animation = h.extend(cn, {
                    tweener: function(e, t) {
                        h.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                        var n, r = 0,
                            i = e.length;
                        for (; r < i; r++) n = e[r], sn[n] = sn[n] || [], sn[n].unshift(t)
                    },
                    prefilter: function(e, t) {
                        t ? rn.unshift(e) : rn.push(e)
                    }
                }), h.speed = function(e, t, n) {
                    var r = e && typeof e == "object" ? h.extend({}, e) : {
                        complete: n || !n && t || h.isFunction(e) && e,
                        duration: e,
                        easing: n && t || t && !h.isFunction(t) && t
                    };
                    r.duration = h.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in h.fx.speeds ? h.fx.speeds[r.duration] : h.fx.speeds._default;
                    if (r.queue == null || r.queue === !0) r.queue = "fx";
                    return r.old = r.complete, r.complete = function() {
                        h.isFunction(r.old) && r.old.call(this), r.queue && h.dequeue(this, r.queue)
                    }, r
                }, h.fn.extend({
                    fadeTo: function(e, t, n, r) {
                        return this.filter(V).css("opacity", 0).show().end().animate({
                            opacity: t
                        }, e, n, r)
                    },
                    animate: function(e, t, n, r) {
                        var i = h.isEmptyObject(e),
                            s = h.speed(t, n, r),
                            o = function() {
                                var t = cn(this, h.extend({}, e), s);
                                (i || h._data(this, "finish")) && t.stop(!0)
                            };
                        return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
                    },
                    stop: function(e, t, n) {
                        var r = function(e) {
                            var t = e.stop;
                            delete e.stop, t(n)
                        };
                        return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                            var t = !0,
                                i = e != null && e + "queueHooks",
                                s = h.timers,
                                o = h._data(this);
                            if (i) o[i] && o[i].stop && r(o[i]);
                            else
                                for (i in o) o[i] && o[i].stop && nn.test(i) && r(o[i]);
                            for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                            (t || !n) && h.dequeue(this, e)
                        })
                    },
                    finish: function(e) {
                        return e !== !1 && (e = e || "fx"), this.each(function() {
                            var t, n = h._data(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                s = h.timers,
                                o = r ? r.length : 0;
                            n.finish = !0, h.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                            for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                            for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                        })
                    }
                }), h.each(["toggle", "show", "hide"], function(e, t) {
                    var n = h.fn[t];
                    h.fn[t] = function(e, r, i) {
                        return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(un(t, !0), e, r, i)
                    }
                }), h.each({
                    slideDown: un("show"),
                    slideUp: un("hide"),
                    slideToggle: un("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, function(e, t) {
                    h.fn[e] = function(e, n, r) {
                        return this.animate(t, e, n, r)
                    }
                }), h.timers = [], h.fx.tick = function() {
                    var e, t = h.timers,
                        n = 0;
                    Yt = h.now();
                    for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
                    t.length || h.fx.stop(), Yt = undefined
                }, h.fx.timer = function(e) {
                    h.timers.push(e), e() ? h.fx.start() : h.timers.pop()
                }, h.fx.interval = 13, h.fx.start = function() {
                    Zt || (Zt = setInterval(h.fx.tick, h.fx.interval))
                }, h.fx.stop = function() {
                    clearInterval(Zt), Zt = null
                }, h.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, h.fn.delay = function(e, t) {
                    return e = h.fx ? h.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
                },
                function() {
                    var e, t, n, r, i;
                    t = T.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = t.getElementsByTagName("a")[0], n = T.createElement("select"), i = n.appendChild(T.createElement("option")), e = t.getElementsByTagName("input")[0], r.style.cssText = "top:1px", l.getSetAttribute = t.className !== "t", l.style = /top/.test(r.getAttribute("style")), l.hrefNormalized = r.getAttribute("href") === "/a", l.checkOn = !!e.value, l.optSelected = i.selected, l.enctype = !!T.createElement("form").enctype, n.disabled = !0, l.optDisabled = !i.disabled, e = T.createElement("input"), e.setAttribute("value", ""), l.input = e.getAttribute("value") === "", e.value = "t", e.setAttribute("type", "radio"), l.radioValue = e.value === "t"
                }();
            var hn = /\r/g;
            h.fn.extend({
                val: function(e) {
                    var t, n, r, i = this[0];
                    if (!arguments.length) {
                        if (i) return t = h.valHooks[i.type] || h.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(hn, "") : n == null ? "" : n);
                        return
                    }
                    return r = h.isFunction(e), this.each(function(n) {
                        var i;
                        if (this.nodeType !== 1) return;
                        r ? i = e.call(this, n, h(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : h.isArray(i) && (i = h.map(i, function(e) {
                            return e == null ? "" : e + ""
                        })), t = h.valHooks[this.type] || h.valHooks[this.nodeName.toLowerCase()];
                        if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
                    })
                }
            }), h.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = h.find.attr(e, "value");
                            return t != null ? t : h.trim(h.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, r = e.options,
                                i = e.selectedIndex,
                                s = e.type === "select-one" || i < 0,
                                o = s ? null : [],
                                u = s ? i + 1 : r.length,
                                a = i < 0 ? u : s ? i : 0;
                            for (; a < u; a++) {
                                n = r[a];
                                if ((n.selected || a === i) && (l.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !h.nodeName(n.parentNode, "optgroup"))) {
                                    t = h(n).val();
                                    if (s) return t;
                                    o.push(t)
                                }
                            }
                            return o
                        },
                        set: function(e, t) {
                            var n, r, i = e.options,
                                s = h.makeArray(t),
                                o = i.length;
                            while (o--) {
                                r = i[o];
                                if (h.inArray(h.valHooks.option.get(r), s) >= 0) try {
                                    r.selected = n = !0
                                } catch (u) {
                                    r.scrollHeight
                                } else r.selected = !1
                            }
                            return n || (e.selectedIndex = -1), i
                        }
                    }
                }
            }), h.each(["radio", "checkbox"], function() {
                h.valHooks[this] = {
                    set: function(e, t) {
                        if (h.isArray(t)) return e.checked = h.inArray(h(e).val(), t) >= 0
                    }
                }, l.checkOn || (h.valHooks[this].get = function(e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                })
            });
            var pn, dn, vn = h.expr.attrHandle,
                mn = /^(?:checked|selected)$/i,
                gn = l.getSetAttribute,
                yn = l.input;
            h.fn.extend({
                attr: function(e, t) {
                    return $(this, h.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        h.removeAttr(this, e)
                    })
                }
            }), h.extend({
                attr: function(e, t, n) {
                    var r, i, s = e.nodeType;
                    if (!e || s === 3 || s === 8 || s === 2) return;
                    if (typeof e.getAttribute === B) return h.prop(e, t, n);
                    if (s !== 1 || !h.isXMLDoc(e)) t = t.toLowerCase(), r = h.attrHooks[t] || (h.expr.match.bool.test(t) ? dn : pn);
                    if (n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i : (i = h.find.attr(e, t), i == null ? undefined : i);
                    if (n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
                    h.removeAttr(e, t)
                },
                removeAttr: function(e, t) {
                    var n, r, i = 0,
                        s = t && t.match(O);
                    if (s && e.nodeType === 1)
                        while (n = s[i++]) r = h.propFix[n] || n, h.expr.match.bool.test(n) ? yn && gn || !mn.test(n) ? e[r] = !1 : e[h.camelCase("default-" + n)] = e[r] = !1 : h.attr(e, n, ""), e.removeAttribute(gn ? n : r)
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!l.radioValue && t === "radio" && h.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }
            }), dn = {
                set: function(e, t, n) {
                    return t === !1 ? h.removeAttr(e, n) : yn && gn || !mn.test(n) ? e.setAttribute(!gn && h.propFix[n] || n, n) : e[h.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, h.each(h.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var n = vn[t] || h.find.attr;
                vn[t] = yn && gn || !mn.test(t) ? function(e, t, r) {
                    var i, s;
                    return r || (s = vn[t], vn[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, vn[t] = s), i
                } : function(e, t, n) {
                    if (!n) return e[h.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            });
            if (!yn || !gn) h.attrHooks.value = {
                set: function(e, t, n) {
                    if (!h.nodeName(e, "input")) return pn && pn.set(e, t, n);
                    e.defaultValue = t
                }
            };
            gn || (pn = {
                set: function(e, t, n) {
                    var r = e.getAttributeNode(n);
                    r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "";
                    if (n === "value" || t === e.getAttribute(n)) return t
                }
            }, vn.id = vn.name = vn.coords = function(e, t, n) {
                var r;
                if (!n) return (r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
            }, h.valHooks.button = {
                get: function(e, t) {
                    var n = e.getAttributeNode(t);
                    if (n && n.specified) return n.value
                },
                set: pn.set
            }, h.attrHooks.contenteditable = {
                set: function(e, t, n) {
                    pn.set(e, t === "" ? !1 : t, n)
                }
            }, h.each(["width", "height"], function(e, t) {
                h.attrHooks[t] = {
                    set: function(e, n) {
                        if (n === "") return e.setAttribute(t, "auto"), n
                    }
                }
            })), l.style || (h.attrHooks.style = {
                get: function(e) {
                    return e.style.cssText || undefined
                },
                set: function(e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var bn = /^(?:input|select|textarea|button|object)$/i,
                wn = /^(?:a|area)$/i;
            h.fn.extend({
                prop: function(e, t) {
                    return $(this, h.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return e = h.propFix[e] || e, this.each(function() {
                        try {
                            this[e] = undefined, delete this[e]
                        } catch (t) {}
                    })
                }
            }), h.extend({
                propFix: {
                    "for": "htmlFor",
                    "class": "className"
                },
                prop: function(e, t, n) {
                    var r, i, s, o = e.nodeType;
                    if (!e || o === 3 || o === 8 || o === 2) return;
                    return s = o !== 1 || !h.isXMLDoc(e), s && (t = h.propFix[t] || t, i = h.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = h.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : bn.test(e.nodeName) || wn.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }
            }), l.hrefNormalized || h.each(["href", "src"], function(e, t) {
                h.propHooks[t] = {
                    get: function(e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), l.optSelected || (h.propHooks.selected = {
                get: function(e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            }), h.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                h.propFix[this.toLowerCase()] = this
            }), l.enctype || (h.propFix.enctype = "encoding");
            var En = /[\t\r\n\f]/g;
            h.fn.extend({
                addClass: function(e) {
                    var t, n, r, i, s, o, u = 0,
                        a = this.length,
                        f = typeof e == "string" && e;
                    if (h.isFunction(e)) return this.each(function(t) {
                        h(this).addClass(e.call(this, t, this.className))
                    });
                    if (f) {
                        t = (e || "").match(O) || [];
                        for (; u < a; u++) {
                            n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(En, " ") : " ");
                            if (r) {
                                s = 0;
                                while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                o = h.trim(r), n.className !== o && (n.className = o)
                            }
                        }
                    }
                    return this
                },
                removeClass: function(e) {
                    var t, n, r, i, s, o, u = 0,
                        a = this.length,
                        f = arguments.length === 0 || typeof e == "string" && e;
                    if (h.isFunction(e)) return this.each(function(t) {
                        h(this).removeClass(e.call(this, t, this.className))
                    });
                    if (f) {
                        t = (e || "").match(O) || [];
                        for (; u < a; u++) {
                            n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(En, " ") : "");
                            if (r) {
                                s = 0;
                                while (i = t[s++])
                                    while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                                o = e ? h.trim(r) : "", n.className !== o && (n.className = o)
                            }
                        }
                    }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e;
                    return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : h.isFunction(e) ? this.each(function(n) {
                        h(this).toggleClass(e.call(this, n, this.className, t), t)
                    }) : this.each(function() {
                        if (n === "string") {
                            var t, r = 0,
                                i = h(this),
                                s = e.match(O) || [];
                            while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                        } else if (n === B || n === "boolean") this.className && h._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : h._data(this, "__className__") || ""
                    })
                },
                hasClass: function(e) {
                    var t = " " + e + " ",
                        n = 0,
                        r = this.length;
                    for (; n < r; n++)
                        if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(En, " ").indexOf(t) >= 0) return !0;
                    return !1
                }
            }), h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
                h.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), h.fn.extend({
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                },
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                    return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            });
            var Sn = h.now(),
                xn = /\?/,
                Tn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            h.parseJSON = function(t) {
                if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
                var n, r = null,
                    i = h.trim(t + "");
                return i && !h.trim(i.replace(Tn, function(e, t, i, s) {
                    return n && t && (r = 0), r === 0 ? e : (n = i || t, r += !s - !i, "")
                })) ? Function("return " + i)() : h.error("Invalid JSON: " + t)
            }, h.parseXML = function(t) {
                var n, r;
                if (!t || typeof t != "string") return null;
                try {
                    e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
                } catch (i) {
                    n = undefined
                }
                return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + t), n
            };
            var Nn, Cn, kn = /#.*$/,
                Ln = /([?&])_=[^&]*/,
                An = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
                On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Mn = /^(?:GET|HEAD)$/,
                _n = /^\/\//,
                Dn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                Pn = {},
                Hn = {},
                Bn = "*/".concat("*");
            try {
                Cn = location.href
            } catch (jn) {
                Cn = T.createElement("a"), Cn.href = "", Cn = Cn.href
            }
            Nn = Dn.exec(Cn.toLowerCase()) || [], h.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Cn,
                    type: "GET",
                    isLocal: On.test(Nn[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Bn,
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
                        "text json": h.parseJSON,
                        "text xml": h.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? qn(qn(e, h.ajaxSettings), t) : qn(h.ajaxSettings, e)
                },
                ajaxPrefilter: Fn(Pn),
                ajaxTransport: Fn(Hn),
                ajax: function(e, t) {
                    function x(e, t, n, r) {
                        var f, g, y, w, S, x = t;
                        if (b === 2) return;
                        b = 2, o && clearTimeout(o), a = undefined, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || e === 304, n && (w = Rn(l, E, n)), w = Un(l, w, E, f);
                        if (f) l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (h.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (h.etag[i] = S)), e === 204 || l.type === "HEAD" ? x = "nocontent" : e === 304 ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y);
                        else {
                            y = x;
                            if (e || !x) x = "error", e < 0 && (e = 0)
                        }
                        E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = undefined, u && p.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (p.trigger("ajaxComplete", [E, l]), --h.active || h.event.trigger("ajaxStop"))
                    }
                    typeof e == "object" && (t = e, e = undefined), t = t || {};
                    var n, r, i, s, o, u, a, f, l = h.ajaxSetup({}, t),
                        c = l.context || l,
                        p = l.context && (c.nodeType || c.jquery) ? h(c) : h.event,
                        d = h.Deferred(),
                        v = h.Callbacks("once memory"),
                        m = l.statusCode || {},
                        g = {},
                        y = {},
                        b = 0,
                        w = "canceled",
                        E = {
                            readyState: 0,
                            getResponseHeader: function(e) {
                                var t;
                                if (b === 2) {
                                    if (!f) {
                                        f = {};
                                        while (t = An.exec(s)) f[t[1].toLowerCase()] = t[2]
                                    }
                                    t = f[e.toLowerCase()]
                                }
                                return t == null ? null : t
                            },
                            getAllResponseHeaders: function() {
                                return b === 2 ? s : null
                            },
                            setRequestHeader: function(e, t) {
                                var n = e.toLowerCase();
                                return b || (e = y[n] = y[n] || e, g[e] = t), this
                            },
                            overrideMimeType: function(e) {
                                return b || (l.mimeType = e), this
                            },
                            statusCode: function(e) {
                                var t;
                                if (e)
                                    if (b < 2)
                                        for (t in e) m[t] = [m[t], e[t]];
                                    else E.always(e[E.status]);
                                return this
                            },
                            abort: function(e) {
                                var t = e || w;
                                return a && a.abort(t), x(0, t), this
                            }
                        };
                    d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || Cn) + "").replace(kn, "").replace(_n, Nn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = h.trim(l.dataType || "*").toLowerCase().match(O) || [""], l.crossDomain == null && (n = Dn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Nn[1] && n[2] === Nn[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (Nn[3] || (Nn[1] === "http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = h.param(l.data, l.traditional)), In(Pn, l, t, E);
                    if (b === 2) return E;
                    u = h.event && l.global, u && h.active++ === 0 && h.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Mn.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (xn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ln.test(i) ? i.replace(Ln, "$1_=" + Sn++) : i + (xn.test(i) ? "&" : "?") + "_=" + Sn++)), l.ifModified && (h.lastModified[i] && E.setRequestHeader("If-Modified-Since", h.lastModified[i]), h.etag[i] && E.setRequestHeader("If-None-Match", h.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + Bn + "; q=0.01" : "") : l.accepts["*"]);
                    for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
                    if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && b !== 2) {
                        w = "abort";
                        for (r in {
                                success: 1,
                                error: 1,
                                complete: 1
                            }) E[r](l[r]);
                        a = In(Hn, l, t, E);
                        if (!a) x(-1, "No Transport");
                        else {
                            E.readyState = 1, u && p.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
                                E.abort("timeout")
                            }, l.timeout));
                            try {
                                b = 1, a.send(g, x)
                            } catch (S) {
                                if (!(b < 2)) throw S;
                                x(-1, S)
                            }
                        }
                        return E
                    }
                    return E.abort()
                },
                getJSON: function(e, t, n) {
                    return h.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return h.get(e, undefined, t, "script")
                }
            }), h.each(["get", "post"], function(e, t) {
                h[t] = function(e, n, r, i) {
                    return h.isFunction(n) && (i = i || r, r = n, n = undefined), h.ajax({
                        url: e,
                        type: t,
                        dataType: i,
                        data: n,
                        success: r
                    })
                }
            }), h._evalUrl = function(e) {
                return h.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, h.fn.extend({
                wrapAll: function(e) {
                    if (h.isFunction(e)) return this.each(function(t) {
                        h(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = h(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                            var e = this;
                            while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(e) {
                    return h.isFunction(e) ? this.each(function(t) {
                        h(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = h(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = h.isFunction(e);
                    return this.each(function(n) {
                        h(this).wrapAll(t ? e.call(this, n) : e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        h.nodeName(this, "body") || h(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), h.expr.filters.hidden = function(e) {
                return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !l.reliableHiddenOffsets() && (e.style && e.style.display || h.css(e, "display")) === "none"
            }, h.expr.filters.visible = function(e) {
                return !h.expr.filters.hidden(e)
            };
            var zn = /%20/g,
                Wn = /\[\]$/,
                Xn = /\r?\n/g,
                Vn = /^(?:submit|button|image|reset|file)$/i,
                $n = /^(?:input|select|textarea|keygen)/i;
            h.param = function(e, t) {
                var n, r = [],
                    i = function(e, t) {
                        t = h.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                t === undefined && (t = h.ajaxSettings && h.ajaxSettings.traditional);
                if (h.isArray(e) || e.jquery && !h.isPlainObject(e)) h.each(e, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in e) Jn(n, e[n], t, i);
                return r.join("&").replace(zn, "+")
            }, h.fn.extend({
                serialize: function() {
                    return h.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = h.prop(this, "elements");
                        return e ? h.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !h(this).is(":disabled") && $n.test(this.nodeName) && !Vn.test(e) && (this.checked || !J.test(e))
                    }).map(function(e, t) {
                        var n = h(this).val();
                        return n == null ? null : h.isArray(n) ? h.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(Xn, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(Xn, "\r\n")
                        }
                    }).get()
                }
            }), h.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
                return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Yn() || Zn()
            } : Yn;
            var Kn = 0,
                Qn = {},
                Gn = h.ajaxSettings.xhr();
            e.attachEvent && e.attachEvent("onunload", function() {
                for (var e in Qn) Qn[e](undefined, !0)
            }), l.cors = !!Gn && "withCredentials" in Gn, Gn = l.ajax = !!Gn, Gn && h.ajaxTransport(function(e) {
                if (!e.crossDomain || l.cors) {
                    var t;
                    return {
                        send: function(n, r) {
                            var i, s = e.xhr(),
                                o = ++Kn;
                            s.open(e.type, e.url, e.async, e.username, e.password);
                            if (e.xhrFields)
                                for (i in e.xhrFields) s[i] = e.xhrFields[i];
                            e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                            for (i in n) n[i] !== undefined && s.setRequestHeader(i, n[i] + "");
                            s.send(e.hasContent && e.data || null), t = function(n, i) {
                                var u, a, f;
                                if (t && (i || s.readyState === 4)) {
                                    delete Qn[o], t = undefined, s.onreadystatechange = h.noop;
                                    if (i) s.readyState !== 4 && s.abort();
                                    else {
                                        f = {}, u = s.status, typeof s.responseText == "string" && (f.text = s.responseText);
                                        try {
                                            a = s.statusText
                                        } catch (l) {
                                            a = ""
                                        }!u && e.isLocal && !e.crossDomain ? u = f.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                                f && r(u, a, f, s.getAllResponseHeaders())
                            }, e.async ? s.readyState === 4 ? setTimeout(t) : s.onreadystatechange = Qn[o] = t : t()
                        },
                        abort: function() {
                            t && t(undefined, !0)
                        }
                    }
                }
            }), h.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(e) {
                        return h.globalEval(e), e
                    }
                }
            }), h.ajaxPrefilter("script", function(e) {
                e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), h.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var t, n = T.head || h("head")[0] || T.documentElement;
                    return {
                        send: function(r, i) {
                            t = T.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                                if (n || !t.readyState || /loaded|complete/.test(t.readyState)) t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")
                            }, n.insertBefore(t, n.firstChild)
                        },
                        abort: function() {
                            t && t.onload(undefined, !0)
                        }
                    }
                }
            });
            var er = [],
                tr = /(=)\?(?=&|$)|\?\?/;
            h.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = er.pop() || h.expando + "_" + Sn++;
                    return this[e] = !0, e
                }
            }), h.ajaxPrefilter("json jsonp", function(t, n, r) {
                var i, s, o, u = t.jsonp !== !1 && (tr.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tr.test(t.data) && "data");
                if (u || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = h.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(tr, "$1" + i) : t.jsonp !== !1 && (t.url += (xn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                    return o || h.error(i + " was not called"), o[0]
                }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
                    o = arguments
                }, r.always(function() {
                    e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, er.push(i)), o && h.isFunction(s) && s(o[0]), o = s = undefined
                }), "script"
            }), h.parseHTML = function(e, t, n) {
                if (!e || typeof e != "string") return null;
                typeof t == "boolean" && (n = t, t = !1), t = t || T;
                var r = w.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = h.buildFragment([e], t, i), i && i.length && h(i).remove(), h.merge([], r.childNodes))
            };
            var nr = h.fn.load;
            h.fn.load = function(e, t, n) {
                if (typeof e != "string" && nr) return nr.apply(this, arguments);
                var r, i, s, o = this,
                    u = e.indexOf(" ");
                return u >= 0 && (r = h.trim(e.slice(u, e.length)), e = e.slice(0, u)), h.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (s = "POST"), o.length > 0 && h.ajax({
                    url: e,
                    type: s,
                    dataType: "html",
                    data: t
                }).done(function(e) {
                    i = arguments, o.html(r ? h("<div>").append(h.parseHTML(e)).find(r) : e)
                }).complete(n && function(e, t) {
                    o.each(n, i || [e.responseText, t, e])
                }), this
            }, h.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                h.fn[t] = function(e) {
                    return this.on(t, e)
                }
            }), h.expr.filters.animated = function(e) {
                return h.grep(h.timers, function(t) {
                    return e === t.elem
                }).length
            };
            var rr = e.document.documentElement;
            h.offset = {
                setOffset: function(e, t, n) {
                    var r, i, s, o, u, a, f, l = h.css(e, "position"),
                        c = h(e),
                        p = {};
                    l === "static" && (e.style.position = "relative"), u = c.offset(), s = h.css(e, "top"), a = h.css(e, "left"), f = (l === "absolute" || l === "fixed") && h.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), h.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (p.top = t.top - u.top + o), t.left != null && (p.left = t.left - u.left + i), "using" in t ? t.using.call(e, p) : c.css(p)
                }
            }, h.fn.extend({
                offset: function(e) {
                    if (arguments.length) return e === undefined ? this : this.each(function(t) {
                        h.offset.setOffset(this, e, t)
                    });
                    var t, n, r = {
                            top: 0,
                            left: 0
                        },
                        i = this[0],
                        s = i && i.ownerDocument;
                    if (!s) return;
                    return t = s.documentElement, h.contains(t, i) ? (typeof i.getBoundingClientRect !== B && (r = i.getBoundingClientRect()), n = ir(s), {
                        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : r
                },
                position: function() {
                    if (!this[0]) return;
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        r = this[0];
                    return h.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), h.nodeName(e[0], "html") || (n = e.offset()), n.top += h.css(e[0], "borderTopWidth", !0), n.left += h.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - h.css(r, "marginTop", !0),
                        left: t.left - n.left - h.css(r, "marginLeft", !0)
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent || rr;
                        while (e && !h.nodeName(e, "html") && h.css(e, "position") === "static") e = e.offsetParent;
                        return e || rr
                    })
                }
            }), h.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, t) {
                var n = /Y/.test(t);
                h.fn[e] = function(r) {
                    return $(this, function(e, r, i) {
                        var s = ir(e);
                        if (i === undefined) return s ? t in s ? s[t] : s.document.documentElement[r] : e[r];
                        s ? s.scrollTo(n ? h(s).scrollLeft() : i, n ? i : h(s).scrollTop()) : e[r] = i
                    }, e, r, arguments.length, null)
                }
            }), h.each(["top", "left"], function(e, t) {
                h.cssHooks[t] = jt(l.pixelPosition, function(e, n) {
                    if (n) return n = Ht(e, t), Dt.test(n) ? h(e).position()[t] + "px" : n
                })
            }), h.each({
                Height: "height",
                Width: "width"
            }, function(e, t) {
                h.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function(n, r) {
                    h.fn[r] = function(r, i) {
                        var s = arguments.length && (n || typeof r != "boolean"),
                            o = n || (r === !0 || i === !0 ? "margin" : "border");
                        return $(this, function(t, n, r) {
                            var i;
                            return h.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? h.css(t, n, o) : h.style(t, n, r, o)
                        }, t, s ? r : undefined, s, null)
                    }
                })
            }), h.fn.size = function() {
                return this.length
            }, h.fn.andSelf = h.fn.addBack;
            var sr = e.jQuery,
                or = e.$;
            return h.noConflict = function(t) {
                return e.$ === h && (e.$ = or), t && e.jQuery === h && (e.jQuery = sr), h
            }, typeof t === B && (e.jQuery = e.$ = h), h
        }), jQuery.noConflict(!0)
    }), LearnosityAmd.define("utils/featureDetection", [], function() {
        "use strict";

        function r(e) {
            return function() {
                return t[e] ? t[e] : n[e] ? (t[e] = n[e].apply(this, arguments), t[e]) : !1
            }
        }
        var e = {
                svg: "http://www.w3.org/2000/svg"
            },
            t = {},
            n = {
                isCanvasSupported: function() {
                    var e = document.createElement("canvas");
                    return !!e.getContext && !!e.getContext("2d")
                },
                isHtml5AudioSupported: function() {
                    return !!document.createElement("audio").canPlayType
                },
                isTouchDevice: function() {
                    return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
                },
                isTouchScalable: function() {
                    var e = document.querySelector('meta[name="viewport"]'),
                        t = !1,
                        n = "user-scalable=no",
                        r;
                    return e && (r = e.getAttribute("content"), t = typeof r == "string" && r.indexOf(n) >= 0), this.isTouchDevice() && !t
                },
                isSvgSupported: function() {
                    return !!document.createElementNS && !!document.createElementNS(e.svg, "svg").createSVGRect
                },
                isJsonStringifyBroken: function() {
                    return window.JSON ? window.JSON.stringify({
                        u: "ó"
                    }) !== '{"u":"ó"}' : !0
                },
                isPlaceholderSupported: function() {
                    return "placeholder" in document.createElement("input")
                },
                getOs: function() {
                    var e = navigator.appVersion,
                        t = "unknown";
                    return e.indexOf("Win") !== -1 && (t = "windows"), e.indexOf("Mac") !== -1 && (t = "osx"), e.indexOf("X11") !== -1 && (t = "unix"), e.indexOf("Linux") !== -1 && (t = "linux"), t
                },
                isTextareaMaxlengthSupported: function() {
                    var e = document.createElement("textarea");
                    return typeof e.maxLength == "undefined"
                },
                isDropzoneSupported: function() {
                    var e = document.createElement("span");
                    return "webkitdropzone" in e || "mozdropzone" in e || "msdropzone" in e || "odropzone" in e
                },
                hasLayout: function() {
                    return (document.body.currentStyle && document.body.currentStyle.hasLayout) === !0
                }
            };
        return {
            isCanvasSupported: r("isCanvasSupported"),
            isHtml5AudioSupported: r("isHtml5AudioSupported"),
            isTouchDevice: r("isTouchDevice"),
            isTouchScalable: r("isTouchScalable"),
            isJsonStringifyBroken: r("isJsonStringifyBroken"),
            isSvgSupported: r("isSvgSupported"),
            isPlaceholderSupported: r("isPlaceholderSupported"),
            getOs: r("getOs"),
            isTextareaMaxlengthSupported: r("isTextareaMaxlengthSupported"),
            isDropzoneSupported: r("isDropzoneSupported"),
            hasLayout: r("hasLayout")
        }
    }), LearnosityAmd.define("utils/json", ["utils/featureDetection"], function(featureDetection) {
        "use strict";
        if (!featureDetection.isJsonStringifyBroken()) return window.JSON;
        var JSON;
        return typeof JSON != "object" && (JSON = {}),
            function() {
                function f(e) {
                    return e < 10 ? "0" + e : e
                }

                function quote(e) {
                    return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) {
                        var t = meta[e];
                        return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function str(e, t) {
                    var n, r, i, s, o = gap,
                        u, a = t[e];
                    a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
                    switch (typeof a) {
                        case "string":
                            return quote(a);
                        case "number":
                            return isFinite(a) ? String(a) : "null";
                        case "boolean":
                        case "null":
                            return String(a);
                        case "object":
                            if (!a) return "null";
                            gap += indent, u = [];
                            if (Object.prototype.toString.apply(a) === "[object Array]") {
                                s = a.length;
                                for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                                return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                            }
                            if (rep && typeof rep == "object") {
                                s = rep.length;
                                for (n = 0; n < s; n += 1) typeof rep[n] == "string" && (r = rep[n], i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                            } else
                                for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                            return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
                    }
                }
                typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(e) {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(e) {
                    return this.valueOf()
                });
                var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    gap, indent, meta = {
                        "\b": "\\b",
                        "   ": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    rep;
                typeof JSON.stringify != "function" && (JSON.stringify = function(e, t, n) {
                    var r;
                    gap = "", indent = "";
                    if (typeof n == "number")
                        for (r = 0; r < n; r += 1) indent += " ";
                    else typeof n == "string" && (indent = n);
                    rep = t;
                    if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
                        "": e
                    });
                    throw new Error("JSON.stringify")
                }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
                    function walk(e, t) {
                        var n, r, i = e[t];
                        if (i && typeof i == "object")
                            for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
                        return reviver.call(e, t, i)
                    }
                    var j;
                    text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
                        return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }));
                    if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                        "": j
                    }, "") : j;
                    throw new SyntaxError("JSON.parse")
                })
            }(), JSON
    }), LearnosityAmd.define("vendor/backbone", ["vendor/dom", "vendor/lodash.underscore", "utils/json"], function(e, t, n) {
        var r = {
            jQuery: e,
            _: t,
            Backbone: undefined
        };
        return function() {
            var e = this,
                t = e.Backbone,
                r = [],
                i = r.push,
                s = r.slice,
                o = r.splice,
                u;
            typeof exports != "undefined" ? u = exports : u = e.Backbone = {}, u.VERSION = "0.9.10";
            var a = e._;
            !a && typeof require != "undefined" && (a = require("underscore")), u.$ = e.jQuery || e.Zepto || e.ender, u.noConflict = function() {
                return e.Backbone = t, this
            }, u.emulateHTTP = !1, u.emulateJSON = !1;
            var f = /\s+/,
                l = function(e, t, n, r) {
                    if (!n) return !0;
                    if (typeof n == "object")
                        for (var i in n) e[t].apply(e, [i, n[i]].concat(r));
                    else {
                        if (!f.test(n)) return !0;
                        var s = n.split(f);
                        for (var o = 0, u = s.length; o < u; o++) e[t].apply(e, [s[o]].concat(r))
                    }
                },
                c = function(e, t) {
                    var n, r = -1,
                        i = e.length;
                    switch (t.length) {
                        case 0:
                            while (++r < i)(n = e[r]).callback.call(n.ctx);
                            return;
                        case 1:
                            while (++r < i)(n = e[r]).callback.call(n.ctx, t[0]);
                            return;
                        case 2:
                            while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1]);
                            return;
                        case 3:
                            while (++r < i)(n = e[r]).callback.call(n.ctx, t[0], t[1], t[2]);
                            return;
                        default:
                            while (++r < i)(n = e[r]).callback.apply(n.ctx, t)
                    }
                },
                h = u.Events = {
                    on: function(e, t, n) {
                        if (!l(this, "on", e, [t, n]) || !t) return this;
                        this._events || (this._events = {});
                        var r = this._events[e] || (this._events[e] = []);
                        return r.push({
                            callback: t,
                            context: n,
                            ctx: n || this
                        }), this
                    },
                    once: function(e, t, n) {
                        if (!l(this, "once", e, [t, n]) || !t) return this;
                        var r = this,
                            i = a.once(function() {
                                r.off(e, i), t.apply(this, arguments)
                            });
                        return i._callback = t, this.on(e, i, n), this
                    },
                    off: function(e, t, n) {
                        var r, i, s, o, u, f, c, h;
                        if (!this._events || !l(this, "off", e, [t, n])) return this;
                        if (!e && !t && !n) return this._events = {}, this;
                        o = e ? [e] : a.keys(this._events);
                        for (u = 0, f = o.length; u < f; u++) {
                            e = o[u];
                            if (r = this._events[e]) {
                                s = [];
                                if (t || n)
                                    for (c = 0, h = r.length; c < h; c++) i = r[c], (t && t !== i.callback && t !== i.callback._callback || n && n !== i.context) && s.push(i);
                                this._events[e] = s
                            }
                        }
                        return this
                    },
                    trigger: function(e) {
                        if (!this._events) return this;
                        var t = s.call(arguments, 1);
                        if (!l(this, "trigger", e, t)) return this;
                        var n = this._events[e],
                            r = this._events.all;
                        return n && c(n, t), r && c(r, arguments), this
                    },
                    listenTo: function(e, t, n) {
                        var r = this._listeners || (this._listeners = {}),
                            i = e._listenerId || (e._listenerId = a.uniqueId("l"));
                        return r[i] = e, e.on(t, typeof t == "object" ? this : n, this), this
                    },
                    stopListening: function(e, t, n) {
                        var r = this._listeners;
                        if (!r) return;
                        if (e) e.off(t, typeof t == "object" ? this : n, this), !t && !n && delete r[e._listenerId];
                        else {
                            typeof t == "object" && (n = this);
                            for (var i in r) r[i].off(t, n, this);
                            this._listeners = {}
                        }
                        return this
                    }
                };
            h.bind = h.on, h.unbind = h.off, a.extend(u, h);
            var p = u.Model = function(e, t) {
                var n, r = e || {};
                this.cid = a.uniqueId("c"), this.attributes = {}, t && t.collection && (this.collection = t.collection), t && t.parse && (r = this.parse(r, t) || {});
                if (n = a.result(this, "defaults")) r = a.defaults({}, r, n);
                this.set(r, t), this.changed = {}, this.initialize.apply(this, arguments)
            };
            a.extend(p.prototype, h, {
                changed: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function(e) {
                    return a.clone(this.attributes)
                },
                sync: function() {
                    return u.sync.apply(this, arguments)
                },
                get: function(e) {
                    return this.attributes[e]
                },
                escape: function(e) {
                    return a.escape(this.get(e))
                },
                has: function(e) {
                    return this.get(e) != null
                },
                set: function(e, t, n) {
                    var r, i, s, o, u, f, l, c;
                    if (e == null) return this;
                    typeof e == "object" ? (i = e, n = t) : (i = {})[e] = t, n || (n = {});
                    if (!this._validate(i, n)) return !1;
                    s = n.unset, u = n.silent, o = [], f = this._changing, this._changing = !0, f || (this._previousAttributes = a.clone(this.attributes), this.changed = {}), c = this.attributes, l = this._previousAttributes, this.idAttribute in i && (this.id = i[this.idAttribute]);
                    for (r in i) t = i[r], a.isEqual(c[r], t) || o.push(r), a.isEqual(l[r], t) ? delete this.changed[r] : this.changed[r] = t, s ? delete c[r] : c[r] = t;
                    if (!u) {
                        o.length && (this._pending = !0);
                        for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, c[o[h]], n)
                    }
                    if (f) return this;
                    if (!u)
                        while (this._pending) this._pending = !1, this.trigger("change", this, n);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(e, t) {
                    return this.set(e, void 0, a.extend({}, t, {
                        unset: !0
                    }))
                },
                clear: function(e) {
                    var t = {};
                    for (var n in this.attributes) t[n] = void 0;
                    return this.set(t, a.extend({}, e, {
                        unset: !0
                    }))
                },
                hasChanged: function(e) {
                    return e == null ? !a.isEmpty(this.changed) : a.has(this.changed, e)
                },
                changedAttributes: function(e) {
                    if (!e) return this.hasChanged() ? a.clone(this.changed) : !1;
                    var t, n = !1,
                        r = this._changing ? this._previousAttributes : this.attributes;
                    for (var i in e) {
                        if (a.isEqual(r[i], t = e[i])) continue;
                        (n || (n = {}))[i] = t
                    }
                    return n
                },
                previous: function(e) {
                    return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
                },
                previousAttributes: function() {
                    return a.clone(this._previousAttributes)
                },
                fetch: function(e) {
                    e = e ? a.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                    var t = e.success;
                    return e.success = function(e, n, r) {
                        if (!e.set(e.parse(n, r), r)) return !1;
                        t && t(e, n, r)
                    }, this.sync("read", this, e)
                },
                save: function(e, t, n) {
                    var r, i, s, o, u = this.attributes;
                    return e == null || typeof e == "object" ? (r = e, n = t) : (r = {})[e] = t, r && (!n || !n.wait) && !this.set(r, n) ? !1 : (n = a.extend({
                        validate: !0
                    }, n), this._validate(r, n) ? (r && n.wait && (this.attributes = a.extend({}, u, r)), n.parse === void 0 && (n.parse = !0), i = n.success, n.success = function(e, t, n) {
                        e.attributes = u;
                        var s = e.parse(t, n);
                        n.wait && (s = a.extend(r || {}, s));
                        if (a.isObject(s) && !e.set(s, n)) return !1;
                        i && i(e, t, n)
                    }, s = this.isNew() ? "create" : n.patch ? "patch" : "update", s === "patch" && (n.attrs = r), o = this.sync(s, this, n), r && n.wait && (this.attributes = u), o) : !1)
                },
                destroy: function(e) {
                    e = e ? a.clone(e) : {};
                    var t = this,
                        n = e.success,
                        r = function() {
                            t.trigger("destroy", t, t.collection, e)
                        };
                    e.success = function(e, t, i) {
                        (i.wait || e.isNew()) && r(), n && n(e, t, i)
                    };
                    if (this.isNew()) return e.success(this, null, e), !1;
                    var i = this.sync("delete", this, e);
                    return e.wait || r(), i
                },
                url: function() {
                    var e = a.result(this, "urlRoot") || a.result(this.collection, "url") || _();
                    return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return this.id == null
                },
                isValid: function(e) {
                    return !this.validate || !this.validate(this.attributes, e)
                },
                _validate: function(e, t) {
                    if (!t.validate || !this.validate) return !0;
                    e = a.extend({}, this.attributes, e);
                    var n = this.validationError = this.validate(e, t) || null;
                    return n ? (this.trigger("invalid", this, n, t || {}), !1) : !0
                }
            });
            var d = u.Collection = function(e, t) {
                t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, a.extend({
                    silent: !0
                }, t))
            };
            a.extend(d.prototype, h, {
                model: p,
                initialize: function() {},
                toJSON: function(e) {
                    return this.map(function(t) {
                        return t.toJSON(e)
                    })
                },
                sync: function() {
                    return u.sync.apply(this, arguments)
                },
                add: function(e, t) {
                    e = a.isArray(e) ? e.slice() : [e], t || (t = {});
                    var n, r, s, u, f, l, c, h, p, d;
                    c = [], h = t.at, p = this.comparator && h == null && t.sort != 0, d = a.isString(this.comparator) ? this.comparator : null;
                    for (n = 0, r = e.length; n < r; n++) {
                        if (!(s = this._prepareModel(u = e[n], t))) {
                            this.trigger("invalid", this, u, t);
                            continue
                        }
                        if (f = this.get(s)) {
                            t.merge && (f.set(u === s ? s.attributes : u, t), p && !l && f.hasChanged(d) && (l = !0));
                            continue
                        }
                        c.push(s), s.on("all", this._onModelEvent, this), this._byId[s.cid] = s, s.id != null && (this._byId[s.id] = s)
                    }
                    c.length && (p && (l = !0), this.length += c.length, h != null ? o.apply(this.models, [h, 0].concat(c)) : i.apply(this.models, c)), l && this.sort({
                        silent: !0
                    });
                    if (t.silent) return this;
                    for (n = 0, r = c.length; n < r; n++)(s = c[n]).trigger("add", s, this, t);
                    return l && this.trigger("sort", this, t), this
                },
                remove: function(e, t) {
                    e = a.isArray(e) ? e.slice() : [e], t || (t = {});
                    var n, r, i, s;
                    for (n = 0, r = e.length; n < r; n++) {
                        s = this.get(e[n]);
                        if (!s) continue;
                        delete this._byId[s.id], delete this._byId[s.cid], i = this.indexOf(s), this.models.splice(i, 1), this.length--, t.silent || (t.index = i, s.trigger("remove", s, this, t)), this._removeReference(s)
                    }
                    return this
                },
                push: function(e, t) {
                    return e = this._prepareModel(e, t), this.add(e, a.extend({
                        at: this.length
                    }, t)), e
                },
                pop: function(e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e), t
                },
                unshift: function(e, t) {
                    return e = this._prepareModel(e, t), this.add(e, a.extend({
                        at: 0
                    }, t)), e
                },
                shift: function(e) {
                    var t = this.at(0);
                    return this.remove(t, e), t
                },
                slice: function(e, t) {
                    return this.models.slice(e, t)
                },
                get: function(e) {
                    return e == null ? void 0 : (this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[e.id || e.cid || e[this._idAttr] || e])
                },
                at: function(e) {
                    return this.models[e]
                },
                where: function(e) {
                    return a.isEmpty(e) ? [] : this.filter(function(t) {
                        for (var n in e)
                            if (e[n] !== t.get(n)) return !1;
                        return !0
                    })
                },
                sort: function(e) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return e || (e = {}), a.isString(this.comparator) || this.comparator.length === 1 ? this.models = this.sortBy(this.comparator, this) : this.models.sort(a.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
                },
                pluck: function(e) {
                    return a.invoke(this.models, "get", e)
                },
                update: function(e, t) {
                    t = a.extend({
                        add: !0,
                        merge: !0,
                        remove: !0
                    }, t), t.parse && (e = this.parse(e, t));
                    var n, r, i, s, o = [],
                        u = [],
                        f = {};
                    a.isArray(e) || (e = e ? [e] : []);
                    if (t.add && !t.remove) return this.add(e, t);
                    for (r = 0, i = e.length; r < i; r++) n = e[r], s = this.get(n), t.remove && s && (f[s.cid] = !0), (t.add && !s || t.merge && s) && o.push(n);
                    if (t.remove)
                        for (r = 0, i = this.models.length; r < i; r++) n = this.models[r], f[n.cid] || u.push(n);
                    return u.length && this.remove(u, t), o.length && this.add(o, t), this
                },
                reset: function(e, t) {
                    t || (t = {}), t.parse && (e = this.parse(e, t));
                    for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                    return t.previousModels = this.models.slice(), this._reset(), e && this.add(e, a.extend({
                        silent: !0
                    }, t)), t.silent || this.trigger("reset", this, t), this
                },
                fetch: function(e) {
                    e = e ? a.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                    var t = e.success;
                    return e.success = function(e, n, r) {
                        var i = r.update ? "update" : "reset";
                        e[i](n, r), t && t(e, n, r)
                    }, this.sync("read", this, e)
                },
                create: function(e, t) {
                    t = t ? a.clone(t) : {};
                    if (!(e = this._prepareModel(e, t))) return !1;
                    t.wait || this.add(e, t);
                    var n = this,
                        r = t.success;
                    return t.success = function(e, t, i) {
                        i.wait && n.add(e, i), r && r(e, t, i)
                    }, e.save(null, t), e
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models.length = 0, this._byId = {}
                },
                _prepareModel: function(e, t) {
                    if (e instanceof p) return e.collection || (e.collection = this), e;
                    t || (t = {}), t.collection = this;
                    var n = new this.model(e, t);
                    return n._validate(e, t) ? n : !1
                },
                _removeReference: function(e) {
                    this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(e, t, n, r) {
                    if ((e === "add" || e === "remove") && n !== this) return;
                    e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
                },
                sortedIndex: function(e, t, n) {
                    t || (t = this.comparator);
                    var r = a.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    };
                    return a.sortedIndex(this.models, e, r, n)
                }
            });
            var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
            a.each(v, function(e) {
                d.prototype[e] = function() {
                    var t = s.call(arguments);
                    return t.unshift(this.models), a[e].apply(a, t)
                }
            });
            var m = ["groupBy", "countBy", "sortBy"];
            a.each(m, function(e) {
                d.prototype[e] = function(t, n) {
                    var r = a.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    };
                    return a[e](this.models, r, n)
                }
            });
            var g = u.Router = function(e) {
                    e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                y = /\((.*?)\)/g,
                b = /(\(\?)?:\w+/g,
                w = /\*\w+/g,
                E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            a.extend(g.prototype, h, {
                initialize: function() {},
                route: function(e, t, n) {
                    return a.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), u.history.route(e, a.bind(function(r) {
                        var i = this._extractParameters(e, r);
                        n && n.apply(this, i), this.trigger.apply(this, ["route:" + t].concat(i)), this.trigger("route", t, i), u.history.trigger("route", this, t, i)
                    }, this)), this
                },
                navigate: function(e, t) {
                    return u.history.navigate(e, t), this
                },
                _bindRoutes: function() {
                    if (!this.routes) return;
                    var e, t = a.keys(this.routes);
                    while ((e = t.pop()) != null) this.route(e, this.routes[e])
                },
                _routeToRegExp: function(e) {
                    return e = e.replace(E, "\\$&").replace(y, "(?:$1)?").replace(b, function(e, t) {
                        return t ? e : "([^/]+)"
                    }).replace(w, "(.*?)"), new RegExp("^" + e + "$")
                },
                _extractParameters: function(e, t) {
                    return e.exec(t).slice(1)
                }
            });
            var S = u.History = function() {
                    this.handlers = [], a.bindAll(this, "checkUrl"), typeof window != "undefined" && (this.location = window.location, this.history = window.history)
                },
                x = /^[#\/]|\s+$/g,
                T = /^\/+|\/+$/g,
                N = /msie [\w.]+/,
                C = /\/$/;
            S.started = !1, a.extend(S.prototype, h, {
                interval: 50,
                getHash: function(e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                },
                getFragment: function(e, t) {
                    if (e == null)
                        if (this._hasPushState || !this._wantsHashChange || t) {
                            e = this.location.pathname;
                            var n = this.root.replace(C, "");
                            e.indexOf(n) || (e = e.substr(n.length))
                        } else e = this.getHash();
                    return e.replace(x, "")
                },
                start: function(e) {
                    if (S.started) throw new Error("Backbone.history has already been started");
                    S.started = !0, this.options = a.extend({}, {
                        root: "/"
                    }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var t = this.getFragment(),
                        n = document.documentMode,
                        r = N.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                    this.root = ("/" + this.root + "/").replace(T, "/"), r && this._wantsHashChange && (this.iframe = u.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? u.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !r ? u.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
                    var i = this.location,
                        s = i.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !s) return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0;
                    this._wantsPushState && this._hasPushState && s && i.hash && (this.fragment = this.getHash().replace(x, ""), this.history.replaceState({}, document.title, this.root + this.fragment + i.search));
                    if (!this.options.silent) return this.loadUrl()
                },
                stop: function() {
                    u.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), S.started = !1
                },
                route: function(e, t) {
                    this.handlers.unshift({
                        route: e,
                        callback: t
                    })
                },
                checkUrl: function(e) {
                    var t = this.getFragment();
                    t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                    if (t === this.fragment) return !1;
                    this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
                },
                loadUrl: function(e) {
                    var t = this.fragment = this.getFragment(e),
                        n = a.any(this.handlers, function(e) {
                            if (e.route.test(t)) return e.callback(t), !0
                        });
                    return n
                },
                navigate: function(e, t) {
                    if (!S.started) return !1;
                    if (!t || t === !0) t = {
                        trigger: t
                    };
                    e = this.getFragment(e || "");
                    if (this.fragment === e) return;
                    this.fragment = e;
                    var n = this.root + e;
                    if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                    else {
                        if (!this._wantsHashChange) return this.location.assign(n);
                        this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                    }
                    t.trigger && this.loadUrl(e)
                },
                _updateHash: function(e, t, n) {
                    if (n) {
                        var r = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(r + "#" + t)
                    } else e.hash = "#" + t
                }
            }), u.history = new S;
            var k = u.View = function(e) {
                    this.cid = a.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                },
                L = /^(\S+)\s*(.*)$/,
                A = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            a.extend(k.prototype, h, {
                tagName: "div",
                $: function(e) {
                    return this.$el.find(e)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(e, t) {
                    return this.$el && this.undelegateEvents(), this.$el = e instanceof u.$ ? e : u.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
                },
                delegateEvents: function(e) {
                    if (!e && !(e = a.result(this, "events"))) return;
                    this.undelegateEvents();
                    for (var t in e) {
                        var n = e[t];
                        a.isFunction(n) || (n = this[e[t]]);
                        if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                        var r = t.match(L),
                            i = r[1],
                            s = r[2];
                        n = a.bind(n, this), i += ".delegateEvents" + this.cid, s === "" ? this.$el.on(i, n) : this.$el.on(i, s, n)
                    }
                },
                undelegateEvents: function() {
                    this.$el.off(".delegateEvents" + this.cid)
                },
                _configure: function(e) {
                    this.options && (e = a.extend({}, a.result(this, "options"), e)), a.extend(this, a.pick(e, A)), this.options = e
                },
                _ensureElement: function() {
                    if (!this.el) {
                        var e = a.extend({}, a.result(this, "attributes"));
                        this.id && (e.id = a.result(this, "id")), this.className && (e["class"] = a.result(this, "className"));
                        var t = u.$("<" + a.result(this, "tagName") + ">").attr(e);
                        this.setElement(t, !1)
                    } else this.setElement(a.result(this, "el"), !1)
                }
            });
            var O = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
            u.sync = function(e, t, r) {
                var i = O[e];
                a.defaults(r || (r = {}), {
                    emulateHTTP: u.emulateHTTP,
                    emulateJSON: u.emulateJSON
                });
                var s = {
                    type: i,
                    dataType: "json"
                };
                r.url || (s.url = a.result(t, "url") || _()), r.data == null && t && (e === "create" || e === "update" || e === "patch") && (s.contentType = "application/json", s.data = n.stringify(r.attrs || t.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                    model: s.data
                } : {});
                if (r.emulateHTTP && (i === "PUT" || i === "DELETE" || i === "PATCH")) {
                    s.type = "POST", r.emulateJSON && (s.data._method = i);
                    var o = r.beforeSend;
                    r.beforeSend = function(e) {
                        e.setRequestHeader("X-HTTP-Method-Override", i);
                        if (o) return o.apply(this, arguments)
                    }
                }
                s.type !== "GET" && !r.emulateJSON && (s.processData = !1);
                var f = r.success;
                r.success = function(e) {
                    f && f(t, e, r), t.trigger("sync", t, e, r)
                };
                var l = r.error;
                r.error = function(e) {
                    l && l(t, e, r), t.trigger("error", t, e, r)
                };
                var c = r.xhr = u.ajax(a.extend(s, r));
                return t.trigger("request", t, c, r), c
            }, u.ajax = function() {
                return u.$.ajax.apply(u.$, arguments)
            };
            var M = function(e, t) {
                var n = this,
                    r;
                e && a.has(e, "constructor") ? r = e.constructor : r = function() {
                    return n.apply(this, arguments)
                }, a.extend(r, n, t);
                var i = function() {
                    this.constructor = r
                };
                return i.prototype = n.prototype, r.prototype = new i, e && a.extend(r.prototype, e), r.__super__ = n.prototype, r
            };
            p.extend = d.extend = g.extend = k.extend = S.extend = M;
            var _ = function() {
                throw new Error('A "url" property or function must be specified')
            }
        }.call(r), r.Backbone
    }), LearnosityAmd.define("utils/browserCheck", [], function() {
        "use strict";
        var e = navigator.userAgent.toLowerCase(),
            t = e.match(/(opera|ie|edge|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/) || [null, "unknown", 0],
            n = t[1],
            r = parseInt(t[2], 10),
            i = n === "ie" && r < 8 && /trident/i.test(e),
            s = !!e.match(/android|webos|iphone|ipad|ipod|blackBerry|windows phone|opera mini|iemobile/i),
            o = !!e.match(/applewebkit/),
            u = !!(window.chrome && window.chrome.runtime && window.chrome.runtime.id);
        return !e.match(/trident.*rv[ :]*11\./) || (n = "ie", r = 11), !e.match(/edge/) || (n = "edge"), n === "version" && (n = t[3]), {
            browser: n,
            version: r,
            compatibilityMode: i,
            isMobile: s,
            isChromeApp: u,
            isAppleWebKit: o,
            isMicrosoft: n === "ie" || n === "edge"
        }
    }), LearnosityAmd.define("vendor/jqueryclean", ["vendor/dom"], function(e) {
        (function(e) {
            function t(e, t, n, r) {
                if (!e.tag.isInline && n.length > 0) {
                    n.push("\n");
                    for (var i = 0; i < r; i++) n.push("    ")
                }
            }

            function n(r, i) {
                var s = [],
                    o = r.attributes.length == 0,
                    c, p = this.name.concat(r.tag.rawAttributes == undefined ? "" : r.tag.rawAttributes),
                    d = r.tag.render && (i.allowedTags.length == 0 || e.inArray(r.tag.name, i.allowedTags) > -1) && (i.removeTags.length == 0 || e.inArray(r.tag.name, i.removeTags) == -1);
                !r.isRoot && d && (s.push("<"), s.push(r.tag.name), e.each(r.attributes, function() {
                    if (e.inArray(this.name, i.removeAttrs) == -1) {
                        var t = RegExp(/^(['"]?)(.*?)['"]?$/).exec(this.value),
                            n = t[2],
                            o = t[1] || "'";
                        i.allowedClasses.length > 0 && this.name == "class" && (n = e.grep(n.split(" "), function(t) {
                            return e.grep(i.allowedClasses, function(n) {
                                return n[0] == t && (n.length == 1 || e.inArray(r.tag.name, n[1]) > -1)
                            }).length > 0
                        }).join(" "), o = "'"), n != null && (n.length > 0 || e.inArray(this.name, r.tag.requiredAttributes) > -1) && (s.push(" "), s.push(this.name), s.push("="), s.push(o), s.push(n), s.push(o))
                    }
                }));
                if (r.tag.isSelfClosing) d && s.push(">"), o = !1;
                else if (r.tag.isNonClosing) o = !1;
                else {
                    !r.isRoot && d && s.push(">");
                    var c = i.formatIndent++;
                    if (r.tag.toProtect) {
                        var v = e.htmlClean.trim(r.children.join(""), i).replace(/<br>/ig, "\n");
                        s.push(v), o = v.length == 0
                    } else {
                        var v = [];
                        for (var m = 0; m < r.children.length; m++) {
                            var g = r.children[m],
                                y = h(f(g) ? g : g.childrenToString(), i);
                            i.preserveWhitespace || (y = e.htmlClean.trim(y, i)), l(g) && m > 0 && y.length > 0 && (u(g) || a(r.children[m - 1])) && v.push(" ");
                            if (f(g)) y.length > 0 && v.push(y);
                            else if (m != r.children.length - 1 || g.tag.name != "br" || r.tag.isInline) i.format && t(g, i, v, c), v = v.concat(n(g, i))
                        }
                        i.formatIndent--, v.length > 0 && (i.format && v[0] != "\n" && t(r, i, s, c), s = s.concat(v), o = !1)
                    }!r.isRoot && d && (i.format && t(r, i, s, c - 1), s.push("</"), s.push(r.tag.name), s.push(">"))
                }
                return !r.tag.allowEmpty && o ? [] : s
            }

            function r(t, n, i) {
                return i = i || 1, e.inArray(t[t.length - i].tag.name, n) > -1 ? !0 : t.length - (i + 1) > 0 && r(t, n, i + 1) ? (t.pop(), !0) : !1
            }

            function i(e) {
                return e ? (this.tag = e, this.isRoot = !1) : (this.tag = new o("root"), this.isRoot = !0), this.attributes = [], this.children = [], this.hasAttribute = function(e) {
                    for (var t = 0; t < this.attributes.length; t++)
                        if (this.attributes[t].name == e) return !0;
                    return !1
                }, this.childrenToString = function() {
                    return this.children.join("")
                }, this
            }

            function s(e, t) {
                return this.name = e, this.value = t, this
            }

            function o(t, n, r, i) {
                this.name = t.toLowerCase(), this.isSelfClosing = e.inArray(this.name, y) > -1, this.isNonClosing = e.inArray(this.name, b) > -1, this.isClosing = n != undefined && n.length > 0, this.isInline = e.inArray(this.name, p) > -1, this.disallowNest = e.inArray(this.name, d) > -1, this.requiredParent = m[e.inArray(this.name, m) + 1], this.allowEmpty = e.inArray(this.name, v) > -1, this.toProtect = e.inArray(this.name, g) > -1, this.rawAttributes = r, this.requiredAttributes = E[e.inArray(this.name, E) + 1];
                if (i) {
                    i.tagAttributesCache || (i.tagAttributesCache = []);
                    if (e.inArray(this.name, i.tagAttributesCache) == -1) {
                        var s = w[e.inArray(this.name, w) + 1].slice(0);
                        for (var o = 0; o < i.allowedAttributes.length; o++) {
                            var u = i.allowedAttributes[o][0];
                            (i.allowedAttributes[o].length == 1 || e.inArray(this.name, i.allowedAttributes[o][1]) > -1) && e.inArray(u, s) == -1 && s.push(u)
                        }
                        i.tagAttributesCache.push(this.name), i.tagAttributesCache.push(s)
                    }
                    this.allowedAttributes = i.tagAttributesCache[e.inArray(this.name, i.tagAttributesCache) + 1]
                }
                return this.render = !0, this
            }

            function u(t) {
                while (c(t) && t.children.length > 0) t = t.children[0];
                return f(t) && t.length > 0 && e.htmlClean.isWhitespace(t.charAt(0))
            }

            function a(t) {
                while (c(t) && t.children.length > 0) t = t.children[t.children.length - 1];
                return f(t) && t.length > 0 && e.htmlClean.isWhitespace(t.charAt(t.length - 1))
            }

            function f(e) {
                return e.constructor == String
            }

            function l(e) {
                return f(e) || e.tag.isInline
            }

            function c(e) {
                return e.constructor == i
            }

            function h(e, t) {
                return t.preserveWhitespace ? e : e.replace(/\s\s+/g, " ")
            }
            e.fn.htmlClean = function(t) {
                return this.each(function() {
                    var n = e(this);
                    this.value ? this.value = e.htmlClean(this.value, t) : this.innerHTML = e.htmlClean(this.innerHTML, t)
                })
            }, e.htmlClean = function(t, u) {
                u = e.extend({}, e.htmlClean.defaults, u), u.tagInline && e.merge(p, u.tagInline);
                var a = /<(\/)?(\w\-+:)?([\w\-]+)([^>]*)>/gi,
                    l = /([\w\-]+)=(".*?"|'.*?'|[^\s>]*)/gi,
                    c, h = new i,
                    d = [h],
                    v = h,
                    m = !1;
                u.bodyOnly && (c = /<body[^>]*>((\n|.)*)<\/body>/i.exec(t)) && (t = c[1]), t = t.concat("<xxx>");
                var g;
                while (c = a.exec(t)) {
                    var y = new o(c[3], c[1], c[4], u),
                        b = t.substring(g, c.index);
                    if (b.length > 0) {
                        var w = v.children[v.children.length - 1];
                        v.children.length > 0 && f(w = v.children[v.children.length - 1]) ? v.children[v.children.length - 1] = w.concat(b) : v.children.push(b)
                    }
                    g = a.lastIndex;
                    if (y.isClosing) r(d, [y.name]) && (d.pop(), v = d[d.length - 1]);
                    else {
                        var E = new i(y),
                            S;
                        while (S = l.exec(y.rawAttributes)) {
                            if (S[1].toLowerCase() == "style" && u.replaceStyles) {
                                var x = !y.isInline;
                                for (var T = 0; T < u.replaceStyles.length; T++) u.replaceStyles[T][0].test(S[2]) && (x || (y.render = !1, x = !0), v.children.push(E), d.push(E), v = E, y = new o(u.replaceStyles[T][1], "", "", u), E = new i(y))
                            }(u.allowDataAttributes && S[1].indexOf("data-") === 0 || y.allowedAttributes != null && (y.allowedAttributes.length == 0 || e.inArray(S[1], y.allowedAttributes) > -1)) && E.attributes.push(new s(S[1], S[2]))
                        }
                        e.each(y.requiredAttributes, function() {
                            var e = this.toString();
                            E.hasAttribute(e) || E.attributes.push(new s(e, ""))
                        });
                        for (var N = 0; N < u.replace.length; N++)
                            for (var C = 0; C < u.replace[N][0].length; C++) {
                                var k = typeof u.replace[N][0][C] == "string";
                                if (k && u.replace[N][0][C] == y.name || !k && u.replace[N][0][C].test(c)) {
                                    y.render = !1, v.children.push(E), d.push(E), v = E, y = new o(u.replace[N][1], c[1], c[4], u), E = new i(y), E.attributes = v.attributes, N = u.replace.length;
                                    break
                                }
                            }
                        var L = !0;
                        v.isRoot || (v.tag.disallowNest && y.disallowNest && !y.requiredParent ? L = !1 : y.requiredParent && (L = r(d, y.requiredParent)) && (v = d[d.length - 1]));
                        if (L) {
                            v.children.push(E);
                            if (y.toProtect)
                                while (tagMatch2 = a.exec(t)) {
                                    var A = new o(tagMatch2[3], tagMatch2[1], tagMatch2[4], u);
                                    if (A.isClosing && A.name == y.name) {
                                        E.children.push(RegExp.leftContext.substring(g)), g = a.lastIndex;
                                        break
                                    }
                                } else !y.isSelfClosing && !y.isNonClosing && (d.push(E), v = E)
                        }
                    }
                }
                return e.htmlClean.trim(n(h, u).join(""), u)
            }, e.htmlClean.defaults = {
                preserveWhitespace: !1,
                bodyOnly: !0,
                allowedTags: [],
                removeTags: ["basefont", "center", "dir", "font", "frame", "frameset", "isindex", "menu", "noframes", "s", "strike"],
                allowedAttributes: [],
                removeAttrs: [],
                allowDataAttributes: !1,
                allowedClasses: [],
                format: !1,
                formatIndent: 0,
                replace: [
                    [
                        ["b", "big"], "strong"
                    ],
                    [
                        ["i"], "em"
                    ]
                ],
                replaceStyles: [
                    [/font-weight:\s*bold/i, "strong"],
                    [/font-style:\s*italic/i, "em"],
                    [/vertical-align:\s*super/i, "sup"],
                    [/vertical-align:\s*sub/i, "sub"]
                ]
            }, e.htmlClean.trim = function(t, n) {
                return e.htmlClean.trimStart(e.htmlClean.trimEnd(t), n)
            }, e.htmlClean.trimStart = function(t, n) {
                return t.substring(e.htmlClean.trimStartIndex(t, n))
            }, e.htmlClean.trimStartIndex = function(t, n) {
                if (n.preserveWhitespace) return 0;
                for (var r = 0; r < t.length - 1 && e.htmlClean.isWhitespace(t.charAt(r)); r++);
                return r
            }, e.htmlClean.trimEnd = function(t) {
                return t.substring(0, e.htmlClean.trimEndIndex(t))
            }, e.htmlClean.trimEndIndex = function(t) {
                for (var n = t.length - 1; n >= 0 && e.htmlClean.isWhitespace(t.charAt(n)); n--);
                return n + 1
            }, e.htmlClean.isWhitespace = function(t) {
                return e.inArray(t, S) != -1
            };
            var p = ["a", "abbr", "acronym", "address", "b", "big", "br", "button", "caption", "cite", "code", "del", "em", "font", "hr", "i", "input", "img", "ins", "label", "legend", "map", "q", "s", "samp", "select", "small", "span", "strike", "strong", "sub", "sup", "tt", "u", "var"],
                d = ["th", "td"],
                v = ["th", "td"],
                m = [null, "li", ["ul", "ol"], "dt", ["dl"], "dd", ["dl"], "td", ["tr"], "th", ["tr"], "tr", ["table", "thead", "tbody", "tfoot"], "thead", ["table"], "tbody", ["table"], "tfoot", ["table"]],
                g = ["script", "style", "pre", "code"],
                y = ["br", "hr", "img", "link", "meta"],
                b = ["!doctype", "?xml"],
                w = [
                    ["class"], "?xml", [], "!doctype", [], "a", ["accesskey", "class", "href", "name", "title", "rel", "rev", "type", "tabindex"], "abbr", ["class", "title"], "acronym", ["class", "title"], "blockquote", ["cite", "class"], "button", ["class", "disabled", "name", "type", "value"], "del", ["cite", "class", "datetime"], "form", ["accept", "action", "class", "enctype", "method", "name"], "input", ["accept", "accesskey", "alt", "checked", "class", "disabled", "ismap", "maxlength", "name", "size", "readonly", "src", "tabindex", "type", "usemap", "value"], "img", ["alt", "class", "height", "src", "width"], "ins", ["cite", "class", "datetime"], "label", ["accesskey", "class", "for"], "legend", ["accesskey", "class"], "link", ["href", "rel", "type"], "meta", ["content", "http-equiv", "name", "scheme", "charset"], "map", ["name"], "optgroup", ["class", "disabled", "label"], "option", ["class", "disabled", "label", "selected", "value"], "q", ["class", "cite"], "script", ["src", "type"], "select", ["class", "disabled", "multiple", "name", "size", "tabindex"], "style", ["type"], "table", ["class", "summary"], "th", ["class", "colspan", "rowspan"], "td", ["class", "colspan", "rowspan"], "textarea", ["accesskey", "class", "cols", "disabled", "name", "readonly", "rows", "tabindex"]
                ],
                E = [
                    []
                ],
                S = [" ", " ", "    ", "\n", "\r", "\f"]
        })(e)
    }), LearnosityAmd.define("utils/htmlCleaner", ["vendor/dom", "vendor/lodash.underscore", "utils/browserCheck", "vendor/jqueryclean"], function(e, t, n, r) {
        "use strict";
        var i = {
                replaceStyles: [
                    [/font-weight:\s*bold/i, "strong"],
                    [/font-style:\s*italic/i, "em"],
                    [/text-decoration:\s*underline/i, "u"]
                ],
                allowedTags: ["abbr", "address", "article", "aside", "blockquote", "br", "caption", "cite", "code", "dd", "div", "dl", "dt", "em", "figure", "figcaption", "h1", "h2", "h3", "h4", "h5", "h6", "hr", "img", "li", "ol", "p", "pre", "section", "small", "span", "strong", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "tr", "u", "ul", "a", "math", "maligngroup", "malignmark", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mlongdiv", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mscarries", "mscarry", "msgroup", "msline", "mspace", "msqrt", "msrow", "mstack", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "maction", "semantics", "annotation", "annotation-xml", "iframe", "object", "embed", "param"],
                allowDataAttributes: !0,
                allowedAttributes: [
                    ["class"],
                    ["aria-label"],
                    ["href"],
                    ["title"],
                    ["alt"],
                    ["id"],
                    ["style"],
                    ["target"],
                    ["accent"],
                    ["accentunder"],
                    ["align"],
                    ["alignmentscope"],
                    ["altimg"],
                    ["altimg-width"],
                    ["altimg-height"],
                    ["altimg-valign"],
                    ["alttext"],
                    ["bevelled"],
                    ["border"],
                    ["charalign"],
                    ["close"],
                    ["columnalign"],
                    ["columnlines"],
                    ["columnspacing"],
                    ["columnspan"],
                    ["columnwidth"],
                    ["crossout"],
                    ["decimalpoint"],
                    ["denomalign"],
                    ["depth"],
                    ["dir"],
                    ["display"],
                    ["displaystyle"],
                    ["edge"],
                    ["equalcolumns"],
                    ["equalrows"],
                    ["fence"],
                    ["form"],
                    ["frame"],
                    ["framespacing"],
                    ["groupalign"],
                    ["indentalign"],
                    ["indentalignfirst"],
                    ["indentalignlast"],
                    ["indentshift"],
                    ["indentshiftfirst"],
                    ["indentshiftlast"],
                    ["indenttarget"],
                    ["infixlinebreakstyle"],
                    ["largeop"],
                    ["length"],
                    ["linebreak"],
                    ["linebreakmultchar"],
                    ["linebreakstyle"],
                    ["lineleading"],
                    ["linethickness"],
                    ["location"],
                    ["longdivstyle"],
                    ["lspace"],
                    ["lquote"],
                    ["mathbackground"],
                    ["mathcolor"],
                    ["mathsize"],
                    ["mathvariant"],
                    ["maxsize"],
                    ["minlabelspacing"],
                    ["minsize"],
                    ["movablelimits"],
                    ["notation"],
                    ["numalign"],
                    ["open"],
                    ["overflow"],
                    ["rowalign"],
                    ["rowlines"],
                    ["rowspacing"],
                    ["rowspan"],
                    ["rspace"],
                    ["rquote"],
                    ["scriptlevel"],
                    ["scriptminsize"],
                    ["scriptsizemultiplayer"],
                    ["scriptsizemultiplier"],
                    ["selection"],
                    ["separator"],
                    ["separators"],
                    ["shift"],
                    ["side"],
                    ["stackalign"],
                    ["stretchy"],
                    ["subscriptshift"],
                    ["supscriptshift"],
                    ["symmetric"],
                    ["voffset"],
                    ["width"],
                    ["height"],
                    ["src"],
                    ["name"],
                    ["value"],
                    ["frameborder"],
                    ["longdesc"],
                    ["marginheight"],
                    ["marginwidth"],
                    ["sandbox"],
                    ["scrolling"],
                    ["srcdoc"],
                    ["type"],
                    ["archive"],
                    ["classid"],
                    ["codebase"],
                    ["codetype"],
                    ["data"],
                    ["declare"],
                    ["hspace"],
                    ["vspace"],
                    ["valuetype"],
                    ["actiontype"],
                    ["xlink:href"],
                    ["xmlns"]
                ],
                enabledForIE8: !0,
                tagInline: ["math"],
                preserveWhitespace: !0
            },
            s = /<!--([\s\S]*?)-->/g;
        return {
            init: function(e) {
                i.enabledForIE8 = e
            },
            whitelistContent: function(r, o, u) {
                var a = i;
                return n.browser === "ie" && n.version === 8 && !a.enabledForIE8 ? r : (o && (u ? (t.each(o, function(n, r) {
                    t.isArray(n) && (i.hasOwnProperty(r) ? o[r] = t.union(n, i[r]) : e.htmlClean.defaults.hasOwnProperty(r) && (o[r] = t.union(n, e.htmlClean.defaults[r])))
                }), a = t.extend({}, a, o)) : a = o), r = e.htmlClean(r, a), r.replace(s, ""))
            },
            stripHtml: function(n, r, i) {
                var s, o;
                return r && (n = t.unescape(n)), i && (n = n.replace(/<img[^>"']*((("[^"]*")|('[^']*'))[^"'>]*)*>/g, function(e) {
                    var t = " - image - ";
                    return e.replace(/alt="(.*?)"/g, function(e, n) {
                        n && (t = " - image with description: " + n + " - ")
                    }), t
                }), n = e("<p>").html(n).text()), n = this.whitelistContent(n, {
                    allowedTags: [""]
                }), i ? n : (r && (n = t.escape(n)), n)
            }
        }
    }), LearnosityAmd.define("config", ["vendor/lodash.underscore", "utils/browserCheck"], function(e, t) {
        "use strict";

        function r() {
            var e = chrome.runtime.getManifest();
            return e.domain || window.location.hostname
        }
        var n = e.extend({}, LearnosityApp._internal.config);
        return n.domain = t.isChromeApp ? r() : window.location.hostname, n
    }), LearnosityAmd.define("utils/analyticsGoogle", [], function() {
        "use strict";

        function t() {
            return Array.prototype.slice.call(arguments)
        }

        function n(e, t) {
            return e === "Object" || e === "String" || e === "Array" || e === "Number" ? Object.prototype.toString.call(t) === "[object " + e + "]" : !1
        }

        function r(e) {
            return n("Object", e)
        }

        function i(e) {
            return n("Array", e)
        }

        function s(e) {
            return n("Number", e)
        }

        function o(e) {
            return n("String", e)
        }

        function u() {
            window.ga || function(e, t, n, r, i, s, o) {
                e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
                    (e[i].q = e[i].q || []).push(arguments)
                }, e[i].l = 1 * new Date, s = t.createElement(n), o = t.getElementsByTagName(n)[0], s.async = 1, s.src = r, o.parentNode.insertBefore(s, o)
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga")
        }

        function a() {
            if (!window._gaq) {
                window._gaq = [];
                var e = document.createElement("script");
                e.async = !0, e.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t)
            }
        }

        function f(t) {
            u(), i(t) && (t[0] = e + "." + t[0], window.ga.apply(null, t))
        }

        function l(e) {
            a(), i(e) && window._gaq.push(e)
        }

        function c() {
            var e = t.apply(null, arguments),
                n, i;
            e.length === 1 && r(e[0]) && (i = e[0], e[0] = i.category, e[1] = i.action, e[2] = i.label, e[3] = i.value, e[4] = i.nonInteraction), e[4] = {
                nonInteraction: !!e[4]
            }, n = ["send", "event"].concat(e), f(n)
        }

        function h() {
            var e = t.apply(null, arguments),
                n, i;
            e.length === 1 && r(e[0]) && (i = e[0], e[0] = i.timingCategory, e[1] = i.timingVar, e[2] = i.timingValue, e[3] = i.timingLabel), e[2] > 0 && (n = ["send", "timing"].concat(e), f(n))
        }

        function p() {
            var e = ["send", "pageview"];
            arguments.length && (e = e.concat(t.apply(null, arguments))), f(e)
        }

        function d(t) {
            return o(t) && t.length && (e = t), e.slice(-1) === "." && (e = e.slice(0, e.length - 1)), e
        }

        function v(e) {
            var t = {};
            r(e) || (e = {}), t.name = d(e.tracker), t.cookieDomain = window.location.hostname, s(e.siteSpeedSampleRate) && (t.siteSpeedSampleRate = e.siteSpeedSampleRate), u(), window.ga("create", e.account, t)
        }
        var e = "lrnUA";
        return {
            init: v,
            trackEvent: c,
            trackTiming: h,
            trackPageview: p,
            analyticsPush: l,
            universalAnalyticsPush: f
        }
    }), LearnosityAmd.define("utils/analytics", ["vendor/lodash.underscore", "config", "utils/analyticsGoogle"], function(e, t, n) {
        "use strict";

        function b(e) {
            y = e, g(e)
        }

        function w() {
            var t = s,
                i = s,
                h = s,
                d = c + " question" + (c === 1 ? "" : "s");
            e.isObject(m) && (t = E(), m.type && (i = m.type), m.state && (h = m.state)), e.chain({
                CONSUMER: o,
                API_VERSION: a,
                REQUESTED_API_VERSION: f,
                QUESTION_TYPES: t,
                CONTEXT: l,
                TYPE: i,
                STATE: h,
                NUM_QUESTIONS_PER_ACT: d,
                CONSUMER_KEY: u
            }).forEach(function(e, t) {
                n.universalAnalyticsPush(["set", r[t], e])
            }), p++
        }

        function E() {
            var t = s;
            if (e.has(m, "questions") && m.questions.length) {
                var n = e.uniq(e.compact(e.map(m.questions, function(e) {
                    return e.type
                }))).sort();
                n.length && (t = n.join(","))
            }
            return t
        }

        function S(e) {
            o = e && e.get("name") ? e.get("name") : o, u = e && e.get("key") ? e.get("key") : u
        }

        function x(e) {
            l = e ? e : l
        }

        function T(t) {
            m = t || {};
            if (m.questions) {
                c = m.questions.length;
                var n = e.countBy(m.questions, function(e) {
                    return e.is_math ? "math" : "not_math"
                });
                h = n.math ? n.math : 0
            }
        }

        function N() {
            if (!v) return;
            var r = {},
                s = n.analyticsPush,
                u, f, l;
            p || w(), s(["lrn._setAccount", "UA-249610-21"]), s(["lrn._setDomainName", t.domain]), s(["lrn._setCustomVar", 1, o, a]), m && (u = m.questions, u && (f = [], l = u.length, e.each(u, function(e) {
                e.type && f.push(e.type)
            }), s(["lrn._setCustomVar", 2, "" + l, "" + e.unique(f).sort()]), s(["lrn._setCustomVar", 3, m.state, m.type])), s(["lrn._setCustomVar", 4, o, m.state + ", " + m.type])), s(["lrn._setCustomVar", 5, a, o]), s(["lrn._trackPageview"]), r[i.NUM_QUESTIONS] = c, r[i.NUM_MATH_QUESTIONS] = h, n.trackPageview(r)
        }

        function C(e, t, n) {
            n = n || "Other", k({
                category: "LearnosityApi Error: " + n,
                action: "" + e,
                label: "" + t,
                value: 1,
                nonInteraction: !0
            })
        }

        function k() {
            if (!v) return;
            p || w(), n.trackEvent.apply(null, arguments)
        }

        function L() {
            if (!v) return;
            p || w(), n.trackTiming.apply(null, arguments)
        }

        function A(e, t) {
            var n = e + ":" + t;
            d[n] || (d[n] = []), d[n].push(M())
        }

        function O(e, t) {
            var n = e + ":" + t,
                r = d[n],
                i, s;
            r && r.length > 0 && (i = r.shift(), s = M() - i, L(e, t, s), r.length <= 0 && delete d[n])
        }

        function M() {
            return window.performance && window.performance.now ? window.performance.now() : 0
        }
        var r = {
                CONSUMER: "dimension1",
                API_VERSION: "dimension2",
                REQUESTED_API_VERSION: "dimension3",
                QUESTION_TYPES: "dimension4",
                CONTEXT: "dimension5",
                TYPE: "dimension6",
                STATE: "dimension7",
                NUM_QUESTIONS_PER_ACT: "dimension8",
                CONSUMER_KEY: "dimension9"
            },
            i = {
                NUM_QUESTIONS: "metric1",
                NUM_MATH_QUESTIONS: "metric2"
            },
            s = "(not set)",
            o = s,
            u = s,
            a = LearnosityApp.version || s,
            f = LearnosityApp.requestedApiVersion || s,
            l = s,
            c = 0,
            h = 0,
            p = 0,
            d = [],
            v = !1,
            m, g, y;
        return g = e.once(function(e) {
            n.init(e), v = !0
        }), {
            init: b,
            setActivity: T,
            setConsumer: S,
            setContext: x,
            trackPageview: N,
            trackEvent: k,
            trackError: C,
            trackTimingStart: A,
            trackTimingEnd: O
        }
    }), LearnosityAmd.define("error", ["vendor/lodash.underscore", "vendor/dom", "utils/analytics"], function(e, t, n) {
        "use strict";

        function s(s, o) {
            var u = e.extend({}, i[s.code], s),
                f = u.i18n;
            delete u.i18n, LearnosityApp.errors.push(u), n.trackError(u.code, u.detail ? u.detail : u.msg), a(u.code + ": " + u.msg + ". View this error on LearnosityApp.errors[" + (LearnosityApp.errors.length - 1) + "]");
            switch (u.errorUI) {
                case "button":
                    break;
                case "question":
                    t("#" + u.response_id).removeClass("lrn_qr").addClass("learnosity-error").html(f.labels.uierrorfeedback);
                    break;
                case "global":
                    var l = u.code === 10015 ? f.labels.unsupportedBrowser : u.code === 10018 ? f.labels.unsupportedCompatibilityMode : f.labels.uierrorfeedback;
                    t(".learnosity-response, .lrn_qr").removeClass("lrn_qr").addClass("learnosity-error").html(l);
                    break;
                default:
            }
            o ? o(u) : r.length > 0 ? e.each(r, function(t) {
                t(e.clone(u))
            }) : alert(u.msg + "\n\nPlease contact your administrator if you require further assistance.")
        }

        function o(e) {
            r.push(e)
        }

        function u() {
            LearnosityApp.errors = [], r = []
        }

        function a() {
            console.error.apply ? console.error.apply(console, arguments) : e.each(arguments, function(e) {
                console.error(e)
            })
        }
        var r = [],
            i = {
                10001: {
                    code: 10001,
                    msg: "Failed validating activity / format error",
                    errorUI: "global"
                },
                10002: {
                    code: 10002,
                    msg: "Response id conflict",
                    errorUI: "global"
                },
                10003: {
                    code: 10003,
                    msg: "Failed authentication",
                    errorUI: "global"
                },
                10004: {
                    code: 10004,
                    msg: "Save responses failed"
                },
                10005: {
                    code: 10005,
                    msg: "Response not found",
                    errorUI: "question"
                },
                10006: {
                    code: 10006,
                    msg: "Audio save to server failed",
                    errorUI: "button"
                },
                10007: {
                    code: 10007,
                    msg: "Authorisation failed",
                    errorUI: "question"
                },
                10008: {
                    code: 10008,
                    msg: "Audio asset failed to load"
                },
                10009: {
                    code: 10009,
                    msg: "Audio asset temporarily not available"
                },
                10010: {
                    code: 10010,
                    msg: "Audio asset expired",
                    errorUI: "question"
                },
                10011: {
                    code: 10011,
                    msg: "Your device does not support audio-capture functionality"
                },
                10012: {
                    code: 10012,
                    msg: "No microphone found"
                },
                10013: {
                    code: 10013,
                    msg: "Unable to save, question validation failed"
                },
                10014: {
                    code: 10014,
                    msg: "Audio asset format not supported"
                },
                10015: {
                    code: 10015,
                    msg: "Browser not supported",
                    errorUI: "global"
                },
                10016: {
                    code: 10016,
                    msg: "Failed capturing questions",
                    errorUI: "global"
                },
                10017: {
                    code: 10017,
                    msg: "Failed loading Questions API, can't load required modules"
                },
                10018: {
                    code: 10018,
                    msg: "Browser running in an unsupported compatibility view",
                    errorUI: "global"
                },
                10019: {
                    code: 10019,
                    msg: "Failed validating math"
                },
                10020: {
                    code: 10020,
                    msg: "Failed validating appended elements"
                },
                10021: {
                    code: 10021,
                    msg: "Discard responses failed"
                },
                10022: {
                    code: 10022,
                    msg: "Audio playback failed"
                },
                10023: {
                    code: 10023,
                    msg: "Unable to render latex"
                },
                10024: {
                    code: 10024,
                    msg: "Failed loading external resource"
                },
                10025: {
                    code: 10025,
                    msg: "Failed resuming activity, network connectivity error"
                },
                10026: {
                    code: 10026,
                    msg: "Cannot set response metadata on empty response"
                },
                10027: {
                    code: 10027,
                    msg: "Failed pushing offline data to server"
                },
                10028: {
                    code: 10028,
                    msg: "Called needsPushing with incorrect parameters"
                }
            };
        return {
            setErrorListener: o,
            exception: s,
            reset: u,
            log: a
        }
    }), LearnosityAmd.define("models/questionResponse", ["vendor/backbone", "vendor/lodash.underscore", "utils/htmlCleaner", "utils/analytics", "error"], function(e, t, n, r, i) {
        "use strict";
        var s = /v(\d+).(\d+).(\d+)/;
        return e.Model.extend({
            VALID_RESPONSE_ID_RE: /^[\w\-]+$/,
            STATE: {
                INITIAL: "initial",
                MODIFIED: "modified",
                SAVED: "saved"
            },
            TYPE: {
                ASSOCIATION: "association",
                AUDIO: "audio",
                AUDIOADV: "audioadv",
                BOOLEAN: "boolean",
                CHEMISTRY: "chemistry",
                CHOICEMATRIX: "choicematrix",
                CLASSIFICATION: "classification",
                CLOZEASSOCIATION: "clozeassociation",
                CLOZEDROPDOWN: "clozedropdown",
                CLOZEFORMULA: "clozeformula",
                CLOZEINLINETEXT: "clozeinlinetext",
                CLOZETEXT: "clozetext",
                CLOZECHEMISTRY: "clozechemistry",
                CUSTOM: "custom",
                FILLSHAPE: "fillshape",
                FORMULA: "formula",
                FORMULA_DEV: "formula_dev",
                FORMULAESSAY: "formulaessay",
                CHEMISTRYESSAY: "chemistryessay",
                FORMULAV2: "formulaV2",
                GRAPHPLOTTING: "graphplotting",
                GRIDDED: "gridded",
                HIGHLIGHT: "highlight",
                HOTSPOT: "hotspot",
                IMAGECLOZEASSOCIATION: "imageclozeassociation",
                IMAGECLOZEDROPDOWN: "imageclozedropdown",
                IMAGECLOZEFORMULA: "imageclozeformula",
                IMAGECLOZECHEMISTRY: "imageclozechemistry",
                IMAGECLOZETEXT: "imageclozetext",
                IMAGEUPLOAD: "imageupload",
                LONGTEXT: "longtext",
                MCQ: "mcq",
                NUMBERLINE: "numberline",
                NUMBERLINEPLOT: "numberlineplot",
                ORDERLIST: "orderlist",
                PLAINTEXT: "plaintext",
                RATING: "rating",
                SCORE: "score",
                SHORTTEXT: "shorttext",
                SIMPLECHART: "simplechart",
                SIMPLESHADING: "simpleshading",
                SORTLIST: "sortlist",
                TEXTHIGHLIGHT: "texthighlight",
                TOKENHIGHLIGHT: "tokenhighlight",
                UNKNOWN: "unknown"
            },
            RESPONSE_TYPE: {
                ARRAY: "array",
                AUDIO: "audio",
                AUDIOPNG: "audio+png",
                BOOLEAN: "boolean",
                IMAGE: "image",
                NUMERIC: "numeric",
                OBJECT: "object",
                STRING: "string"
            },
            EVENT: {
                MODIFIED: "modified",
                CALLVALIDATE: "callValidate",
                MASKED: "masked"
            },
            FONTSIZE_PREFIX: "lrn_font_size_",
            FONTSIZE: {
                SMALL: "small",
                NORMAL: "normal",
                LARGE: "large",
                XLARGE: "xlarge",
                XXLARGE: "xxlarge"
            },
            FONTSIZE_MAP: {
                small: 11,
                normal: 14,
                large: 18,
                xlarge: 24,
                xxlarge: 32
            },
            initialize: function() {
                this.validState = {
                    valid: !0,
                    errors: []
                }, this.state = this.STATE.INITIAL, this.lastModified = (new Date).getTime(), this.captured = !1, this.viewClass = null, this.activity = null, this.validateStartup()
            },
            trackEvent: function(e) {
                r.trackEvent("QuestionType Event", this.get("type"), e, 0, !0)
            },
            validateStartup: function() {
                var e = this.get("question");
                t.isString(this.get("question").stimulus_review) && (e.stimulus_review = n.whitelistContent(e.stimulus_review)), t.isString(e.description) && (e.description = n.whitelistContent(e.description)), t.isString(e.stimulus) && (e.stimulus = n.whitelistContent(e.stimulus)), t.isString(e.instructor_stimulus) && (e.instructor_stimulus = n.whitelistContent(e.instructor_stimulus)), this.hasStimulusObject() && e.stimulus.content && (e.stimulus.content = n.whitelistContent(e.stimulus.content))
            },
            getApiVersion: function() {
                return this.apiVersion
            },
            setApiVersion: function(e) {
                this.apiVersion = e
            },
            getResponseApiVersion: function() {
                return this.hasResponse() ? this.get("response").hasOwnProperty("apiVersion") ? this.get("response").apiVersion : "v1.19.6" : null
            },
            isHigherApiVersion: function(e, t) {
                if (e == "latest") return e != t;
                var n = e.match(s).splice(1),
                    r = t.match(s).splice(1);
                return n[0] > r[0] || n[0] === r[0] && n[1] > r[1] || n[0] === r[0] && n[1] === r[1] && n[2] > r[2]
            },
            update: function(e) {
                this.set(e, {
                    silent: !0
                }), this.has("creation_date") && this.setAsCaptured(), this.get("saved") && this.setAsSaved()
            },
            hasResponse: function() {
                return this.has("response") && !t.isEmpty(this.get("response"))
            },
            clearResponse: function() {
                this.hasResponse() && (this.unset("response"), this.state = this.STATE.INITIAL, this.lastModified = (new Date).getTime(), this.trigger(this.EVENT.MODIFIED))
            },
            getResponseMetadata: function() {
                return this.hasResponse() ? this.get("response").metadata : undefined
            },
            setResponseMetadata: function(e) {
                return this.hasResponse() ? (this.get("response").metadata = e, this.setAsModified(), !0) : (i.exception({
                    code: 10026,
                    detail: "Cannot set response metadata; question with response ID " + this.get("response_id") + " has no response"
                }), !1)
            },
            getResponseValue: function() {
                return this.hasResponse() ? this.get("response").value : undefined
            },
            updateResponseValue: function(e) {
                this.processResponseValue(e), this.get("response").apiVersion = this.getApiVersion(), this.setAsModified()
            },
            processResponseValue: function(e) {
                throw "Unimplemented function processResponseValue for question type:" + this.get("type")
            },
            hasAllowedResponse: function() {
                return !0
            },
            hasStimulus: function() {
                return t.isString(this.get("question").stimulus)
            },
            hasStimulusObject: function() {
                return t.isObject(this.get("question").stimulus)
            },
            hasStimulusReview: function() {
                return t.isString(this.get("question").stimulus_review) || t.isString(this.get("question").description)
            },
            getStimulus: function() {
                return this.hasStimulus() ? this.get("question").stimulus : this.hasStimulusObject() && this.get("question").stimulus.content ? this.get("question").stimulus.content : ""
            },
            getStimulusReview: function() {
                return t.isString(this.get("question").stimulus_review) ? this.get("question").stimulus_review : t.isString(this.get("question").description) ? this.get("question").description : ""
            },
            getInstructorStimulus: function() {
                return t.isString(this.get("question").instructor_stimulus) ? this.get("question").instructor_stimulus : ""
            },
            hasSimpleFeaturesInStimulus: function() {
                return this.getStimulus().indexOf("learnosity-feature") !== -1
            },
            hasSimpleFeaturesInStimulusReview: function() {
                return this.getStimulusReview().indexOf("learnosity-feature") !== -1
            },
            isType: function(e) {
                return this.get("type") == e
            },
            isAttempted: function() {
                return this.hasResponse()
            },
            isCaptured: function() {
                return this.captured
            },
            isModified: function() {
                return this.state === this.STATE.MODIFIED
            },
            isSaved: function() {
                return this.state === this.STATE.SAVED
            },
            toBeSaved: function() {
                return this.state !== this.STATE.SAVED
            },
            setAsCaptured: function() {
                this.captured = !0
            },
            setAsModified: function() {
                this.state = this.STATE.MODIFIED, this.lastModified = (new Date).getTime(), this.trigger(this.EVENT.MODIFIED)
            },
            setAsSaved: function() {
                this.state = this.STATE.SAVED, this.lastModified = (new Date).getTime()
            },
            getLastModifiedTime: function() {
                return this.lastModified
            },
            getResponseId: function(e, t, n) {
                var r = new RegExp(n + "_" + t + "_([\\w\\-]+)"),
                    i = r.exec(e);
                return i ? i[1] : null
            },
            getIdForResponseId: function(e, t, n) {
                return n + "_" + t + "_" + e
            },
            getJsonToCapture: function() {
                return {
                    id: this.get("id"),
                    type: this.get("type"),
                    response_id: this.get("response_id"),
                    user_id: this.get("user_id"),
                    question: this.get("question")
                }
            },
            getJsonToSave: function() {
                var e = {
                    id: this.id
                };
                return this.isModified() && (e.response = this.get("response")), e
            },
            getResponseJsonForClient: function() {
                return this.hasResponse() ? t.deepClone(this.get("response")) : null
            },
            getQuestionJsonForClient: function() {
                return t.deepClone(this.get("question"))
            },
            getMetadata: function() {
                return this.get("question").metadata
            },
            getGroupJsonAttributes: function() {
                var e = [],
                    t = this.get("question");
                return t.hasOwnProperty("validation_group") && e.push({
                    name: "validation_group",
                    value: t.validation_group
                }), e
            },
            getFontClass: function() {
                var e = this.get("question"),
                    n = "";
                return t.isUndefined(this.activity.get("fontsize")) || (n = this.FONTSIZE[this.activity.get("fontsize").toUpperCase()] || ""), t.hasProperty(e, "ui_style.fontsize") && t.contains(this.FONTSIZE, e.ui_style.fontsize) && (n = this.FONTSIZE[e.ui_style.fontsize.toUpperCase()] || ""), n && (n = this.FONTSIZE_PREFIX + n), n
            },
            getFontSize: function() {
                return this.FONTSIZE_MAP[this.getFontClass().replace(new RegExp(this.FONTSIZE_PREFIX), "")] || this.FONTSIZE_MAP[this.FONTSIZE.NORMAL]
            },
            mapValidationMetadata: function() {
                return !1
            }
        })
    }), LearnosityAmd.define("models/questionResponses/unknown", ["vendor/backbone", "models/questionResponse"], function(e, t) {
        "use strict";
        return t.extend({
            validateStartup: function() {},
            hasAllowedResponse: function() {
                return !1
            },
            getGroupJsonAttributes: function() {
                return []
            }
        })
    }), LearnosityAmd.define("utils/hiddenElementHelper", ["vendor/dom", "utils/browserCheck"], function(e, t) {
        "use strict";

        function i(e, t) {
            var r;
            for (r = 0; r < n.length; r++)
                if (n[r].el === e) return t ? r : n[r]
        }

        function s(e, t, s, o) {
            var u = i(e);
            u ? u.instances.push(t) : (n.push({
                el: e,
                instances: [t],
                defaultStyle: s,
                modifiedStyle: o
            }), e.classList.add(r), e.setAttribute("style", o))
        }

        function o(t, s) {
            var o = i(t),
                u;
            if (!o) return;
            o.instances.length === 1 ? (e(t).attr("style", o.defaultStyle || null).removeClass(r), u = i(t, !0), n.splice(u, 1)) : (u = o.instances.indexOf(s), u > -1 && o.instances.splice(u, 1))
        }

        function u(e, t) {
            function i() {
                r.restore()
            }
            var n = !!t.length,
                r = new a(e);
            r.makeVisible(), n ? t(i) : (t(), i())
        }
        var n = [],
            r = "lrn-hidden-element-shown",
            a = function(t) {
                this.$target = t
            };
        return a.prototype.makeVisible = function() {
            function i(e, t) {
                e && (t || !e.clientWidth) && (t && e.classList.contains(r) && t--, n.push(e), i(e.parentElement, t))
            }
            var n = [];
            this.$target.each(function() {
                var t = e(this).parents().addBack().filter("." + r).length;
                i(this, t)
            }), this.$hiddenElements = e(n);
            if (this.$hiddenElements.length) {
                var o = this,
                    u = "; visibility: hidden !important; display: block !important; ";
                t.browser === "ie" && t.version === 8 && (u = "; visibility: collapse !important; display: block !important; "), this.$hiddenElements.each(function() {
                    var e = this.style.cssText || "",
                        t = e + u;
                    s(this, o, e, t)
                })
            }
        }, a.prototype.restore = function() {
            var e = this;
            this.$hiddenElements.each(function() {
                o(this, e)
            })
        }, u
    }), LearnosityAmd.define("utils/mathquillRenderer", ["require", "vendor/dom", "vendor/lodash.underscore", "utils/hiddenElementHelper"], function(e, t, n, r) {
        "use strict";

        function f(e) {
            this.options = {
                disableItalics: !!e
            }
        }

        function l(e, t) {
            var r = [],
                s = /\S/,
                o = function(e) {
                    var n;
                    if (e.nodeType === 3)(t || s.test(e.nodeValue)) && r.push(e);
                    else
                        for (n = 0; n < e.childNodes.length; n++) o(e.childNodes[n])
                },
                u = function(e) {
                    var t = e.textContent || e.innerText;
                    return n.any(i, function(e) {
                        return t.match(e[0])
                    })
                };
            return u(e) && o(e), r
        }

        function c(e) {
            var n;
            return e.each(function() {
                var e = l(this),
                    r, i, s;
                for (s = 0; s < e.length; s++) e[s] && e[s].nodeValue && (r = e[s].nodeValue, i = p(r), i !== r && (t(i).insertBefore(e[s]), e[s].parentNode.removeChild(e[s]), n = !0))
            }), n
        }

        function h(n, i) {
            var s = ["vendor/mathquill"];
            e(s, function(e) {
                n.find("." + u).not("." + a).each(function() {
                    var n = t(this),
                        s = this;
                    r(n, function() {
                        e.InertMath(s, i)
                    }), n.addClass(a)
                })
            })
        }

        function p(e) {
            var t = e,
                n = !1,
                r, s;
            for (r = 0; r < i.length; r++) s = e.replace(i[r][0], "<" + i[r][2] + ' class="' + u + '">').replace(i[r][1], "</" + i[r][2] + ">"), e !== s && i[r][2] === "div" && (n = !0), e = s;
            return t !== e && (n ? e = "<div>" + e + "</div>" : e = "<span>" + e + "</span>"), e
        }
        var i = [
                [/\\\(/g, /\\\)/g, "span"],
                [/\\\[/g, /\\\]/g, "div"]
            ],
            s = "lrn_widget",
            o = "lrn",
            u = "lrn_math_static",
            a = "lrn_math_renderer_processed";
        return n.extend(f.prototype, {
            render: function(e, n) {
                var r;
                e ? n === !0 ? r = t(e) : (r = t(e).hasClass(s) ? t(e) : t(e).parents("." + s), r.length === 0 && (r = t(e).find("." + s))) : r = t("." + o).filter(function() {
                    return t(this).parents("." + o).length === 0
                }), r.length && c(r) && h(r, this.options)
            }
        }), f
    }), LearnosityAmd.define("utils/promise", [], function() {
        "use strict";

        function e(e) {
            return Object.prototype.toString.call(e) === "[object Function]"
        }

        function t() {
            var t = !1,
                n;
            return e(window.Promise) && e(window.Promise.all) && e(window.Promise.resolve) && e(window.Promise.reject) && (n = new Promise(function(e, t) {
                e()
            }), e(n.then) && e(n["catch"]) && (t = !0)), t
        }

        function n() {
            function o(e, r) {
                n.add(e, r), t || (t = i(n.drain))
            }

            function u(e) {
                var t, n = typeof e;
                return e !== null && (n == "object" || n == "function") && (t = e.then), typeof t == "function" ? t : !1
            }

            function a() {
                for (var e = 0; e < this.chain.length; e++) f(this, this.state === 1 ? this.chain[e].success : this.chain[e].failure, this.chain[e]);
                this.chain.length = 0
            }

            function f(e, t, n) {
                var r, i;
                try {
                    t === !1 ? n.reject(e.msg) : (t === !0 ? r = e.msg : r = t.call(void 0, e.msg), r === n.promise ? n.reject(new TypeError("Promise-chain cycle")) : (i = u(r)) ? i.call(r, n.resolve, n.reject) : n.resolve(r))
                } catch (s) {
                    n.reject(s)
                }
            }

            function l(e) {
                var t, n = this;
                if (n.triggered) return;
                n.triggered = !0, n.def && (n = n.def);
                try {
                    (t = u(e)) ? o(function() {
                        var r = new p(n);
                        try {
                            t.call(e, function() {
                                l.apply(r, arguments)
                            }, function() {
                                c.apply(r, arguments)
                            })
                        } catch (i) {
                            c.call(r, i)
                        }
                    }): (n.msg = e, n.state = 1, n.chain.length > 0 && o(a, n))
                } catch (r) {
                    c.call(new p(n), r)
                }
            }

            function c(e) {
                var t = this;
                if (t.triggered) return;
                t.triggered = !0, t.def && (t = t.def), t.msg = e, t.state = 2, t.chain.length > 0 && o(a, t)
            }

            function h(e, t, n, r) {
                for (var i = 0; i < t.length; i++)(function(s) {
                    e.resolve(t[s]).then(function(t) {
                        n(s, t)
                    }, r)
                })(i)
            }

            function p(e) {
                this.def = e, this.triggered = !1
            }

            function d(e) {
                this.promise = e, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
            }

            function v(e) {
                var t = "then",
                    n = "catch";
                if (typeof e != "function") throw new TypeError("Not a function");
                if (this.__NPO__ !== 0) throw new TypeError("Not a promise");
                this.__NPO__ = 1;
                var r = new d(this);
                this[t] = function(t, n) {
                    var i = {
                        success: typeof t == "function" ? t : !0,
                        failure: typeof n == "function" ? n : !1
                    };
                    return i.promise = new this.constructor(function(t, n) {
                        if (typeof t != "function" || typeof n != "function") throw new TypeError("Not a function");
                        i.resolve = t, i.reject = n
                    }), r.chain.push(i), r.state !== 0 && o(a, r), i.promise
                }, this[n] = function(t) {
                    return this.then(void 0, t)
                };
                try {
                    e.call(void 0, function(t) {
                        l.call(r, t)
                    }, function(t) {
                        c.call(r, t)
                    })
                } catch (i) {
                    c.call(r, i)
                }
            }
            var e, t, n, r = Object.prototype.toString,
                i = typeof setImmediate != "undefined" ? function(t) {
                    return setImmediate(t)
                } : setTimeout;
            try {
                Object.defineProperty({}, "x", {}), e = function(t, n, r, i) {
                    return Object.defineProperty(t, n, {
                        value: r,
                        writable: !0,
                        configurable: i !== !1
                    })
                }
            } catch (s) {
                e = function(t, n, r) {
                    return t[n] = r, t
                }
            }
            n = function() {
                function s(e, t) {
                    this.fn = e, this.self = t, this.next = void 0
                }
                var n, r, i;
                return {
                    add: function(t, o) {
                        i = new s(t, o), r ? r.next = i : n = i, r = i, i = void 0
                    },
                    drain: function() {
                        var i = n;
                        n = r = t = void 0;
                        while (i) i.fn.call(i.self), i = i.next
                    }
                }
            }();
            var m = e({}, "constructor", v, !1);
            return v.prototype = m, e(m, "__NPO__", 0, !1), e(v, "resolve", function(t) {
                var n = this;
                return t && typeof t == "object" && t.__NPO__ === 1 ? t : new n(function(n, r) {
                    if (typeof n != "function" || typeof r != "function") throw new TypeError("Not a function");
                    n(t)
                })
            }), e(v, "reject", function(t) {
                return new this(function(n, r) {
                    if (typeof n != "function" || typeof r != "function") throw new TypeError("Not a function");
                    r(t)
                })
            }), e(v, "all", function(t) {
                var n = this;
                return r.call(t) != "[object Array]" ? n.reject(new TypeError("Not an array")) : t.length === 0 ? n.resolve([]) : new n(function(r, i) {
                    if (typeof r != "function" || typeof i != "function") throw new TypeError("Not a function");
                    var s = t.length,
                        o = new Array(s),
                        u = 0;
                    h(n, t, function(t, n) {
                        o[t] = n, ++u === s && r(o)
                    }, i)
                })
            }), e(v, "race", function(t) {
                var n = this;
                return r.call(t) != "[object Array]" ? n.reject(new TypeError("Not an array")) : new n(function(r, i) {
                    if (typeof r != "function" || typeof i != "function") throw new TypeError("Not a function");
                    h(n, t, function(t, n) {
                        r(n)
                    }, i)
                })
            }), v
        }
        return t() ? window.Promise : n()
    }), LearnosityAmd.define("utils/xhr", ["utils/promise", "utils/json"], function(e, t) {
        "use strict";

        function p(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n) : e.attachEvent && e.attachEvent("on" + t, n)
        }

        function d(e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n) : e.detachEvent && e.detachEvent("on" + t, n)
        }

        function v() {
            return f++
        }

        function m(e) {
            var n = [],
                r = /%20/g,
                i = function(e, t) {
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (e instanceof Array)
                for (var s = e.length - 1, o; s >= 0; s--) o = e[s], i(o.name, o.value);
            else {
                var u;
                for (var a in e) e.hasOwnProperty(a) && (u = e[a], Object.prototype.toString.call(u) !== "[object String]" && (u = t.stringify(u)), i(a, u))
            }
            return n.join("&").replace(r, "+")
        }

        function g(e) {
            var t = {},
                n, r, i, s, o;
            if (!e) return t;
            n = e.split("\r\n");
            for (var u = 0; u < n.length; u++) r = n[u], o = r.indexOf(": "), o > 0 && (i = r.substring(0, o), s = r.substring(o + 2), t[i] = s);
            return t
        }

        function y() {
            this.headers = {}
        }

        function b(e) {
            function o(n, r) {
                if (e.parseResponse) try {
                    r = t.parse(r)
                } catch (i) {}
                e.error.call(null, {
                    status: n,
                    response: r
                })
            }
            e = e || {}, e.data = m(e.data), e.method = e.method || "GET", e.error = e.error instanceof Function ? e.error : function() {}, e.success = e.success instanceof Function ? e.success : function() {}, e.parseResponse = e.hasOwnProperty("parseResponse") ? e.parseResponse : !0;
            var n = new h;
            if (e.method === "GET") {
                var r = "?";
                e.url.indexOf("?") !== -1 && (r += "&"), e.url += r + e.data
            }
            n.open(e.method, c + e.url);
            if (e.headers)
                for (var i in e.headers) e.headers.hasOwnProperty(i) && n.setRequestHeader(i, e.headers[i]);
            n.setRequestHeader("Content-Type", s.FORM), n.onload = function() {
                var r = n.responseText;
                if (n.status >= 200 && n.status <= 300) try {
                    r && r.length > 0 && e.parseResponse && (r = t.parse(r));
                    try {
                        e.success.call(null, {
                            status: n.status,
                            response: r
                        })
                    } catch (i) {
                        o(-1, i.name + " on success handler, msg: " + i.message)
                    }
                } catch (i) {
                    o(-1, "error parsing response: " + i.message + ". Response: " + r)
                } else o(n.status, r)
            }, n.onerror = function() {
                o(n.status, n.responseText)
            }, n.send(e.method === "POST" || e.method === "PUT" ? e.data : null)
        }

        function w(r) {
            return new e(function(e, s) {
                if (o) {
                    e();
                    return
                }
                r = r || {};
                if (!c && typeof r.baseUrl != "string") throw "baseUrl must be a string.";
                c = r.baseUrl || c;
                var f = "/xdomain.php" + (u ? "?chromeApp" : r.offlineMode ? "?offline" : ""),
                    v = "." + n,
                    m, g, b, w, E;
                if (document.querySelectorAll) m = document.querySelectorAll(v);
                else {
                    m = [];
                    var S = document.getElementsByTagName(a);
                    for (var x = S.length - 1; x >= 0; x--) S[x].className.indexOf(v) !== -1 && m.push(S[x])
                }
                for (var T = m.length - 1; T >= 0; T--) m[T].src.indexOf(c + f) !== -1 && (g = m[T]);
                h = y, typeof g == "undefined" && (g = document.createElement(a), g.className = n, g.frameBorder = 0, g.marginWidth = 0, g.marginHeight = 0, g.style.width = 0, g.style.height = 0, g.style.position = "absolute", g.style.top = "-1000px", g.src = c + f, document.body.appendChild(g)), E = setTimeout(function() {
                    y.prototype.iFrameLoadingTimeout = !0, d(window, "message", b), s({
                        status: "timeout"
                    })
                }, i), b = function(n) {
                    if (c.indexOf(n.origin) === 0) {
                        var r = t.parse(n.data);
                        if (r.ready) {
                            o = !0, y.prototype.iFrame = g, y.prototype.iFrameLoadingTimeout = !1, clearTimeout(E);
                            for (var i = 0; i < l.length; i++) l[i][0].send(l[i][1]);
                            l = [], d(window, "message", b), e()
                        }
                    }
                }, u ? p(g, "loadstop", function(e) {
                    p(window, "message", b), g.contentWindow.postMessage({
                        command: "handshake"
                    }, "*")
                }) : p(window, "message", b), Object.prototype.toString.call(r.wrongIframeMsgCallback) == "[object Function]" && (w = function(e) {
                    if (c.indexOf(e.origin) === 0) {
                        var n = t.parse(e.data);
                        n.error && r.wrongIframeMsgCallback(n.error, n.data)
                    }
                }, p(window, "message", w))
            })
        }

        function E(e) {
            var t = arguments;
            e = e || {}, e.error = e.error || function() {}, w().then(function() {
                b.apply(null, t)
            }).then(null, function(t) {
                e.error.call(null, t || {})
            })
        }
        var n = "x-origin-frame",
            r = 3e4,
            i = 5e3,
            s = {
                JSON: "application/json",
                FORM: "application/x-www-form-urlencoded; charset=UTF-8"
            },
            o = !1,
            u = !!(window.chrome && window.chrome.runtime && window.chrome.runtime.id),
            a = u ? "webview" : "iframe",
            f = 0,
            l = [],
            c, h;
        return y.prototype.iFrame = null, y.prototype.open = function(e, t, n) {
            this.method = e, this.url = t
        }, y.prototype.setRequestHeader = function(e, t) {
            this.headers[e] = t
        }, y.prototype.getResponseHeader = function(e) {
            return this.responseHeaders[e]
        }, y.prototype.send = function(e) {
            if (this.iFrame) {
                var n = v(),
                    i = this,
                    s = {
                        method: this.method,
                        url: this.url,
                        headers: this.headers,
                        data: e,
                        requestId: n
                    },
                    o = !1,
                    u;
                u = function(e) {
                    var r;
                    o = !0;
                    if (i.url.indexOf(e.origin) === 0) {
                        try {
                            r = t.parse(e.data), i.responseHeaders = g(r.headers)
                        } catch (s) {
                            r = {
                                id: -1,
                                status: -1,
                                responseText: "Error parsing JSON from iframe message"
                            }
                        }
                        r.id === n && (d(window, "message", u), i.status = r.status, i.responseText = r.responseText, r.status > 0 ? i.onload.call(i) : i.onerror.call(i))
                    }
                }, p(window, "message", u), this.iFrame.contentWindow.postMessage(t.stringify(s), c), setTimeout(function() {
                    o || (i.status = 0, i.responseText = "Request timed out", i.onerror.call(i))
                }, r)
            } else this.iFrameLoadingTimeout !== !1 ? l.push([this, e]) : (this.status = 0, this.responseText = "The fallback iframe failed to load", this.onerror.call(this))
        }, {
            request: E,
            init: w
        }
    }), LearnosityAmd.define("comms", ["vendor/lodash.underscore", "vendor/dom", "config", "utils/xhr", "utils/analytics"], function(e, t, n, r, i) {
        "use strict";

        function s(e, t) {
            i.trackError(e, JSON.stringify(t), "iframe error")
        }
        var o = t("html").attr("manifest");
        return r.init({
            baseUrl: n.apiHost,
            wrongIframeMsgCallback: s,
            offlineMode: e.isString(o) && o.length > 0
        }).then(null, function() {}), {
            ACTION: {
                GET: "get",
                SET: "set",
                UPDATE: "update",
                DELETE: "delete"
            },
            request: function(e) {
                var t = {
                    action: e.action || this.ACTION.GET,
                    security: e.security
                };
                e.data && (t.usrequest = e.data), r.request({
                    url: e.url,
                    method: "POST",
                    data: t,
                    success: function() {
                        e.success.apply(null, arguments)
                    },
                    error: function() {
                        n.unloadInProgress !== !0 && e.failure.apply(null, arguments)
                    }
                })
            }
        }
    }), LearnosityAmd.define("utils/myscriptHandwriting", ["vendor/lodash.underscore", "comms"], function(e, t) {
        "use strict";

        function s(t) {
            var n = [];
            return e.each(t, function(t) {
                var r = {
                    type: "stroke",
                    x: [],
                    y: []
                };
                e.each(t.points, function(e) {
                    r.x.push(e.x), r.y.push(e.y)
                }), n.push(r)
            }), n
        }

        function o(t, n) {
            return e.extend(e.clone(i[t]), {
                components: s(n)
            })
        }

        function u(e, n, i) {
            var s;
            i.handwritingRecognises && (n.userResources = [i.handwritingRecognises]), r += 1, s = r, t.request({
                url: e,
                security: i.security.getRequestParameters(),
                action: t.ACTION.SET,
                data: {
                    myscript: {
                        equationInput: JSON.stringify(n)
                    }
                },
                success: function(e) {
                    var t;
                    if (s === r) {
                        try {
                            t = e.response.data[0].value
                        } catch (n) {
                            i.failFn("Could not access response data")
                        }
                        i.successFn(t)
                    }
                },
                failure: function(e) {
                    s === r && i.failFn("Recognition api failure");
                    try {
                        e.response.meta.code === 40001 && console.error(e.response.meta.message)
                    } catch (t) {}
                }
            })
        }
        var n = function() {},
            r = 0,
            i = {
                equation: {
                    resultTypes: ["LATEX"],
                    components: []
                }
            };
        return e.extend(n.prototype, {
            TYPE: {
                EQUATION: "equation"
            },
            BASE_URL: "/handwriting/recognise",
            recognise: function(t) {
                try {
                    if (t.marks.length) {
                        var n = o(t.type, t.marks);
                        u(this.BASE_URL + t.type, n, t)
                    } else e.defer(t.successFn, "")
                } catch (r) {
                    t.failFn(r)
                }
            },
            cancel: function() {
                r += 1
            },
            format: s
        }), new n
    }), LearnosityAmd.define("views/mixins/formula", ["vendor/lodash.underscore", "vendor/dom", "utils/myscriptHandwriting"], function(e, t, n) {
        "use strict";

        function r(n, r, i) {
            e.defer(function() {
                var e = document.activeElement,
                    s = i && t.contains(i, e);
                !t(e).hasClass("lrn-math-keep-open") && !t.contains(r, e) && !s && n.trigger(n.EVENT.EDITOR_BLURRED)
            })
        }

        function i(t) {
            var n = e.pluck(e.flatten(t.value), "aria_label");
            return e(n).map(function(e, t) {
                var n = e || "screenreader friendly version of equation not available";
                return "Correct Answer " + (t + 1) + ": " + n + "."
            }).join(" ")
        }
        return {
            addFacadeMethods: function(t) {
                function s(t) {
                    return {
                        handwriting: e.object(e.keys(t), e.map(t, n.format))
                    }
                }
                var r = this.model && this.model.get("response"),
                    i = this.keyboardView;
                i && i.hasHandwriting() ? t.getHandwriting = function() {
                    return s(i.getHandwriting())
                } : r && r.handwriting && (t.getHandwriting = function() {
                    return s(r.handwriting)
                })
            },
            handleBlurEvents: function(e) {
                var t = this.editorView.mathEvents,
                    n = this.keyboardView;
                this.listenTo(t, t.EVENT.ITEM_BLURRED, function() {
                    r(t, e, n && n.el)
                })
            },
            isChemistry: function() {
                return this.model.get("type").toLowerCase().indexOf("chemistry") > -1
            },
            onAttach: function() {
                this.editorView && this.editorView.onAttach(), this.keyboardView && this.keyboardView.onAttach()
            },
            onItemBlurred: r,
            setDisabled: function(t, n) {
                e.each(t, function(e) {
                    e.mathEvents.trigger(e.mathEvents.EVENT.CHANGE_DISABLED_STATE, n)
                })
            },
            usesLazyKeyboard: function(e) {
                return !!e.get("beta_flags").lazy_load_formula_keyboard
            },
            addAriaLabelToValidationUi: function() {
                if (this.model.getValidResponse() && this.model.getValidResponse().value) {
                    var e = i(this.model.getValidResponse());
                    this.$(".lrn_correctAnswers").attr("aria-label", e)
                }
            }
        }
    }), LearnosityAmd.define("templates/utils/imageLoadRetrySpinner", ["vendor/lodash.underscore"], function(_) {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="lrn-image-load-error-spinner-container"><div class="lrn_spinner"><div class="lrn_bounce1"></div><div class="lrn_bounce2"></div><div class="lrn_bounce3"></div></div></div>';
            return __p
        }
    }), LearnosityAmd.define("utils/imageLoading/imageLoadUtil", ["vendor/lodash.underscore", "vendor/dom", "templates/utils/imageLoadRetrySpinner", "utils/promise", "utils/browserCheck"], function(e, t, n, r, i) {
        "use strict";

        function u(t, n) {
            var i = t,
                s = n,
                o, u, f;
            return function() {
                return o = o || t.getElementsByTagName("img"), f ? e(f).forEach(c) : f = a(o), new r(function(t, n) {
                    if (f.length === 0) {
                        t(f);
                        return
                    }
                    r.all(e(f).map(l)).then(t).then(null, n)
                })
            }
        }

        function a(t) {
            return t = t || [], e(Array.prototype.slice.call(t)).map(function(e) {
                return e = e || {}, {
                    el: e,
                    originalSrc: e.src,
                    retryCount: 0,
                    promise: f(e)
                }
            })
        }

        function f(e) {
            return new r(function(t, n) {
                e.onload = t, e.onerror = n
            })
        }

        function l(e) {
            return new r(function(t, n) {
                h(e, t, n)
            })
        }

        function c(e) {
            if (e.retryCount > 0) {
                var t = e.el,
                    n = e.originalSrc,
                    r;
                e.el.removeAttribute("src"), r = e.el.cloneNode(!1), e.el = r, e.promise = f(e.el), t.parentNode.replaceChild(e.el, t), i.isMicrosoft && (n += "&bust=" + +(new Date)), e.el.setAttribute("src", n)
            }
        }

        function h(e, t, n) {
            e = e || {}, e.retryCount > 0 && p(e.el), e.promise.then(function() {
                e.retryCount > 0 && d(e.el), e.retryCount = 0, t(e.el)
            }).then(null, function() {
                e.retryCount > 0 && d(e.el), e.retryCount++, n(e.el)
            })
        }

        function p(e) {
            var r = t(e);
            r.siblings("." + o).length || r.addClass(s).after(n())
        }

        function d(e) {
            t(e).removeClass(s).siblings("." + o).remove()
        }
        var s = "lrn-loading-image-hidden",
            o = "lrn-image-load-error-spinner-container";
        return u
    }), LearnosityAmd.define("utils/imageLoading/imageLoadViewHelper", ["vendor/backbone", "vendor/lodash.underscore", "utils/promise", "utils/imageLoading/imageLoadUtil"], function(e, t, n, r) {
        "use strict";
        var i = function(n) {
            n = n || {};
            if (!t.isElement(n.element)) throw new Error("The type of the element passed to ImageLoader is not HTMLDivElement");
            this.element = n.element;
            if (n.view instanceof e.View != 1) throw new Error("The ImageLoader view parameter is not a Backbone View");
            this.view = n.view, this.imageLoadPromise = null, this.loader = r(this.element, this.view)
        };
        return t.extend(i.prototype, {
            addFacadeMethods: function(e) {
                e = e || {}, e.checkImages = t.bind(function() {
                    return new n(t.bind(function(e, t) {
                        return this.imageLoadPromise.then(e, t)
                    }, this))
                }, this), e.retryLoadImages = t.bind(function() {
                    this.loadImages()
                }, this)
            },
            loadImages: function() {
                this.imageLoadPromise = new n(t.bind(function(e, t) {
                    this.loader().then(function(t) {
                        e(t)
                    }).then(null, function(e) {
                        t(e || {})
                    })
                }, this)), this.imageLoadPromise.then(null).then(null, function() {})
            }
        }), i
    }), LearnosityAmd.define("templates/questionResponse", ["vendor/lodash.underscore"], function(_) {
        return function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += '<div id="' + ((__t = responseId) == null ? "" : __t) + '" class="lrn lrn_widget lrn_qr lrn_' + ((__t = questionType) == null ? "" : __t) + " lrn_clearfix " + ((__t = globalExtraClasses) == null ? "" : __t) + '">', showInstructorStimulus && (__p += '<div class="lrn_question"><div class="lrn-instructor-stimulus"><div class="lrn_clearfix"><div class="lrn-instructor-stimulus-content">' + ((__t = instructorStimulusContent) == null ? "" : __t) + "</div></div></div></div>"), __p += "", showStimulus && (__p += '<div class="lrn_question"><div class="lrn_stimulus lrn_clearfix"><div class="lrn_stimulus_content lrn_clearfix">' + ((__t = stimulusContent) == null ? "" : __t) + "</div>", hasVerticalFeatures && (__p += '<div class="lrn_stimulus_features_vertical"></div>'), __p += "</div></div>"), __p += '<div class="lrn_response_wrapper', hasOverlayFeatures && (__p += " lrn_overlaying_features"), __p += '"><div class="lrn_response lrn_clearfix ' + ((__t = extraClasses) == null ? "" : __t) + '" ', hasOverlayFeatures && (__p += ' style="visibility: hidden;"'), __p += " >" + ((__t = responseContent) == null ? "" : __t) + "</div></div></div>";
            return __p
        }
    }), LearnosityAmd.define("views/questionResponse", ["require", "vendor/backbone", "vendor/lodash.underscore", "vendor/dom", "utils/mathquillRenderer", "views/mixins/formula", "error", "utils/imageLoading/imageLoadViewHelper", "templates/questionResponse"], function(e, t, n, r, i, s, o, u, a) {
        "use strict";
        var f = a;
        return t.View.extend({
            lastFeatureComplete: !1,
            getFacade: function() {
                return n.isUndefined(this.questionFacade) && (this.questionFacade = {}, this.questionFacade.on = t.Events.on, this.questionFacade.off = function(e, r) {
                    if (!n.isString(e) || !n.isFunction(r)) throw "off method only supported with event and callback parameters";
                    t.Events.off.apply(this, arguments)
                }, this.questionFacade.trigger = t.Events.trigger, this.questionFacade.once = t.Events.once, this.questionFacade.begin = n.bind(this.begin, this), this.questionFacade.pause = n.bind(this.pause, this), this.questionFacade.stop = n.bind(this.stop, this), this.questionFacade.response = {
                    getMetadata: n.bind(function() {
                        return this.model.getResponseMetadata()
                    }, this),
                    setMetadata: n.bind(function(e) {
                        return this.model.setResponseMetadata(e)
                    }, this)
                }, this.questionFacade.disable = n.bind(this.toggleDisabled, this, !0), this.questionFacade.enable = n.bind(this.toggleDisabled, this, !1), this.listenTo(this.model, "change:disabled", n.bind(function(e, t) {
                    this.setDisabled(t)
                }, this)), this.questionFacade.getMetadata = n.bind(function() {
                    return this.model.getMetadata()
                }, this), this.questionFacade.getQuestion = n.bind(function() {
                    return this.model.getQuestionJsonForClient()
                }, this), this.questionFacade.getResponse = n.bind(function() {
                    return this.model.getResponseJsonForClient()
                }, this), this.questionFacade.getScore = n.bind(function() {
                    return n.isFunction(this.model.getScore) ? this.model.getScore() : null
                }, this), this.questionFacade.isAttempted = n.bind(function() {
                    return this.model.isAttempted()
                }, this), this.questionFacade.isValid = n.bind(function(e) {
                    var t;
                    return n.isFunction(this.model.canValidateResponse) && this.model.canValidateResponse() && this.model.hasResponse() && (e ? t = this.model.getResponseValidDetailed() : t = this.model.isResponseValid()), t
                }, this), this.questionFacade.validate = n.bind(function(e) {
                    e = e || {}, n.isFunction(this.model.callValidate) && this.model.callValidate(e)
                }, this), this.questionFacade.mapValidationMetadata = n.bind(function() {
                    var e = this.model,
                        t = e.mapValidationMetadata;
                    return t.apply(e, arguments)
                }, this), this.questionFacade.masking = n.bind(this.masking, this), this.questionFacade.isMaskable = n.bind(function() {
                    return this.maskable || !1
                }, this), this.imageLoader && this.imageLoader.addFacadeMethods(this.questionFacade), this.addFacadeMethods(this.questionFacade), this.model.on(this.model.EVENT.MODIFIED, function() {
                    this.questionFacade.trigger("change changed")
                }, this)), this.questionFacade
            },
            addFacadeMethods: function(e) {},
            renderViewContent: function(e, t) {
                var i = this.model.get("question"),
                    s = this.options.activity.get("state") == this.options.activity.STATE.REVIEW,
                    o = s && this.model.hasStimulusReview(),
                    a = o ? this.model.getStimulusReview() : this.model.getStimulus(),
                    l = this.model.getInstructorStimulus(),
                    c = !o && this.model.hasStimulusObject() && i.stimulus.hasOwnProperty("features") && n.isArray(i.stimulus.features) ? i.stimulus.features : [],
                    h = n.some(c, function(e) {
                        return e && (e.position == "vertical" || n.isUndefined(e.position))
                    }),
                    p = n.some(c, function(e) {
                        return e && e.position == "overlay"
                    }),
                    d = a && a.length > 0 || h,
                    v = !!this.options.activity.get("showInstructorStimulus") && !!l.length, /* FIX-20160702: changed this.activity.get to this.options.activity.get */
                    m = this.model.getFontClass(),
                    g = n.isString(e),
                    y, b, w;
                t = n.isUndefined(t) ? "" : t, this.pendingViews = c.length + 1, y = f({
                    responseId: i.response_id,
                    questionType: this.model.get("type"),
                    showStimulus: d,
                    showInstructorStimulus: v,
                    stimulusContent: a,
                    instructorStimulusContent: l,
                    hasVerticalFeatures: h,
                    hasOverlayFeatures: p,
                    extraClasses: t,
                    globalExtraClasses: m,
                    responseContent: g ? e : ""
                }), b = this.$el, this.$qrEl = r(y), w = this.$qrEl.find(".lrn_response_wrapper > .lrn_response"), g || w.append(e), this.imageLoader = new u({
                    element: this.$qrEl[0],
                    view: this
                }), this.imageLoader.loadImages(), this.setElement(w), b.replaceWith(this.$qrEl), !g && this.onAttach && this.onAttach(), c.length > 0 && this.loadStimulusFeatures(c)
            },
            loadStimulusFeatures: function(t) {
                var i = this,
                    s = n.pluck(t, "type");
                this.featureViews = [], e("bundlesManager").requireBundlesForFeatureTypes(s, function(e) {
                    if (!n.isEmpty(e)) {
                        n.forEach(t, function(t) {
                            var s = e[t.type],
                                o = new s.Model(t),
                                u = o.has("position") ? o.get("position") : "vertical",
                                a;
                            u == "overlay" ? a = r('<div class="lrn_stimulus_features_overlay" style="visibility: hidden"><div></div></div>').insertAfter(i.$qrEl.find(".lrn_response_wrapper .lrn_response")).children("div")[0] : a = r("<div></div>").appendTo(i.$qrEl.find(".lrn_stimulus_features_vertical"))[0];
                            var f = new s.View({
                                model: o,
                                el: a,
                                i18n: i.options.activity.get("i18n"),
                                initialisationCallback: n.bind(i.initialisationCompleted, i)
                            });
                            u == "overlay" && f.getFacade().on("complete", function() {
                                f.$el.parent().remove(), f.remove(), i.$qrEl.find(".lrn_response_wrapper.lrn_overlaying_features > div:last-child").css({
                                    visibility: "inherit"
                                })
                            }), i.featureViews.push(f)
                        });
                        if (i.model.hasStimulusObject()) {
                            var u = i.model.get("question").stimulus,
                                a = i.featureViews[i.featureViews.length - 1].getFacade();
                            u.hasOwnProperty("begin_response_on") ? u.hasOwnProperty("begin_response_on") && u.begin_response_on !== "begin" && i.options.activity.get("state") !== i.options.activity.STATE.REVIEW && (u.begin_response_on == "last-feature-complete" ? a.on("complete", i.beginResponse, i) : u.begin_response_on == "last-feature-begin" && a.on("begin", i.beginResponse, i)) : a.on("complete", function() {
                                this.lastFeatureComplete && (this.beginResponse(), this.lastFeatureComplete = !1)
                            }, i)
                        }
                        i.$qrEl.find(".lrn_response_wrapper.lrn_overlaying_features > div:last-child").css({
                            visibility: "inherit"
                        })
                    } else o.log("No bundles were loaded for the required Feature types: " + s.join(", "))
                })
            },
            begin: function() {
                var e = this.model.get("question"),
                    t = this.options.activity.get("state") == this.options.activity.STATE.REVIEW,
                    r = e.begin_response_on && e.begin_response_on == "begin";
                this.lastFeatureComplete = (!this.model.hasStimulusObject() || !e.stimulus.hasOwnProperty("begin_response_on")) && !t;
                if (this.featureViews && this.featureViews.length > 0 && !t) {
                    var i = this,
                        s = 0;
                    n.each(this.featureViews, function(e) {
                        e.getFacade().on("complete", function() {
                            s++, s < i.featureViews.length && i.featureViews[s].getFacade().begin()
                        })
                    }), this.featureViews[s].getFacade().begin(), r && this.beginResponse()
                } else this.beginResponse()
            },
            pause: function() {
                n.each(this.featureViews, function(e) {
                    e.getFacade().pause()
                }), this.pauseResponse()
            },
            stop: function() {
                n.each(this.featureViews, function(e) {
                    e.getFacade().stop()
                }), this.stopResponse()
            },
            masking: function() {},
            beginResponse: function() {},
            pauseResponse: function() {},
            stopResponse: function() {},
            setDisabled: function(e) {
                this.setEventsDisabled(e)
            },
            setEventsDisabled: function(e) {
                e ? this.undelegateEvents() : this.delegateEvents()
            },
            setButtonsDisabled: function(e) {
                this.$(".lrn_btn").each(function() {
                    var t = r(this),
                        n = t.data("previously-disabled");
                    if (!e && n) return t.removeData("previously-disabled");
                    n = t.hasClass("lrn_disabled") || t.prop("disabled") || t.attr("disabled");
                    if (e && n) return t.data("previously-disabled", !!n);
                    t.toggleClass("lrn_disabled", e).attr("aria-disabled", e), this.type === "button" ? t.prop("disabled", e) : t.attr("disabled", e)
                })
            },
            toggleDisabled: function(e) {
                var t = this.activity.get("state"),
                    r = [this.activity.STATE.INITIAL, this.activity.STATE.RESUME];
                return !n.contains(r, t) || this.model.get("disabled") === e ? !1 : (this.model.set("disabled", e), !0)
            },
            mathquillRendering: function() {
                var e = this.model.get("question") && this.model.get("question").is_math;
                return this.model.activity && this.model.activity.get("math_renderer") ? e && this.model.activity.get("math_renderer") === "mathquill" : e && this.model.get("question").math_renderer === "mathquill"
            },
            renderMathquill: function() {
                this.mathquillRenderer || (this.mathquillRenderer = new i(s.isChemistry.call(this))), this.mathquillRenderer.render(this.el)
            },
            initialisationCompleted: function() {
                this.mathquillRendering() && this.renderMathquill(), this.pendingViews--, this.pendingViews === 0 && this.options.initialisationCallback && n.defer(this.options.initialisationCallback)
            }
        })
    }), LearnosityAmd.define("views/questionResponses/unknown", ["vendor/dom", "views/questionResponse"], function(e, t) {
        "use strict";
        return t.extend({
            initialize: function() {
                this.activity = this.options.activity, this.render(), this.initialisationCompleted()
            },
            render: function() {
                return this.renderViewContent('<div class="lrn_clearfix"></div>'), this
            }
        })
    }), LearnosityAmd.define("models/feature", ["vendor/backbone", "vendor/lodash.underscore"], function(e, t) {
        "use strict";
        return e.Model.extend({
            TYPE: {
                AUDIO_PLAYER: "audioplayer",
                CALCULATOR: "calculator",
                COUNTER: "counter",
                FORMULAINPUT: "formulainput",
                IMAGE_TOOL: "imagetool",
                SCROLLABLE_PASSAGE: "scrollablepassage",
                SHARED_PASSAGE: "sharedpassage",
                UNKNOWN: "unknown",
                VIDEO_PLAYER: "videoplayer"
            },
            EVENT: {
                RE_INIT: "reinit"
            },
            FONTSIZE_PREFIX: "lrn_font_size_",
            FONTSIZE: {
                SMALL: "small",
                NORMAL: "normal",
                LARGE: "large",
                XLARGE: "xlarge",
                XXLARGE: "xxlarge"
            },
            getFontClass: function() {
                var e = "";
                return !t.isUndefined() && !t.isUndefined(this.activity.get("fontsize")) && (e = this.FONTSIZE[this.activity.get("fontsize").toUpperCase()] || ""), e && (e = this.FONTSIZE_PREFIX + e), e
            },
            getFeatureJsonForClient: function() {
                return t.deepClone(this.toJSON())
            }
        })
    }), LearnosityAmd.define("templates/feature", ["vendor/lodash.underscore"], function(_) {
        return function(obj) {
            function print() {
                __p += __j.call(arguments, "")
            }
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape,
                __j = Array.prototype.join;
            with(obj) __p += "<div ", featureId && (__p += 'id="' + ((__t = featureId) == null ? "" : __t) + '" '), __p += 'class="lrn lrn_widget lrn_feature lrn_' + ((__t = featureType) == null ? "" : __t) + " " + ((__t = extraClasses) == null ? "" : __t) + '">' + ((__t = featureContent) == null ? "" : __t) + "</div>";
            return __p
        }
    }), LearnosityAmd.define("views/feature", ["vendor/backbone", "vendor/lodash.underscore", "vendor/dom", "utils/mathquillRenderer", "utils/imageLoading/imageLoadViewHelper", "templates/feature"], function(e, t, n, r, i, s) {
        "use strict";
        var o = s;
        return e.View.extend({
            getFacade: function() {
                return t.isUndefined(this.featureFacade) && (this.featureFacade = {}, this.featureFacade.on = e.Events.on, this.featureFacade.off = function(n, r) {
                    if (!t.isString(n) || !t.isFunction(r)) throw "off method only supported with event and callback parameters";
                    e.Events.off.apply(this, arguments)
                }, this.featureFacade.trigger = e.Events.trigger, this.featureFacade.once = e.Events.once, this.featureFacade.begin = t.bind(this.begin, this), this.featureFacade.pause = t.bind(this.pause, this), this.featureFacade.stop = t.bind(this.stop, this), this.imageLoader && this.imageLoader.addFacadeMethods(this.featureFacade), this.addFacadeMethods(this.featureFacade)), this.featureFacade
            },
            addFacadeMethods: function(e) {},
            begin: function() {
                this.getFacade().trigger("complete")
            },
            pause: function() {},
            stop: function() {},
            initialisationCompleted: function() {
                this.options.initialisationCallback && t.defer(this.options.initialisationCallback)
            },
            mathquillRendering: function() {
                return this.model.activity && this.model.activity.get("math_renderer") ? this.model.activity.get("math_renderer") === "mathquill" : this.model.get("math_renderer") && this.model.get("math_renderer") === "mathquill"
            },
            renderMathquill: function() {
                this.mathquillRenderer || (this.mathquillRenderer = new r), this.mathquillRenderer.render(this.$el[0])
            },
            renderViewContent: function(e, r) {
                var s = t.isString(e);
                r = r || [], r.unshift(this.model.getFontClass());
                var u = n(o({
                    featureId: this.model.get("feature_id"),
                    featureType: this.model.get("type"),
                    extraClasses: r.join(" "),
                    featureContent: s ? e : ""
                }));
                s || u.append(e);
                var a = this.$el;
                this.imageLoader = new i({
                    element: u[0],
                    view: this
                }), this.imageLoader.loadImages(), this.setElement(u), a.replaceWith(u), !s && this.onAttach && this.onAttach()
            }
        })
    }), LearnosityAmd.define("views/features/unknown", ["vendor/dom", "views/feature"], function(e, t) {
        "use strict";
        return t.extend({
            initialize: function() {
                this.render(), this.initialisationCompleted(), this.getFacade().trigger("begin")
            },
            render: function() {
                var t = this.$el,
                    n = e('<div class="lrn_clearfix">Unknown Feature type</div>');
                return this.setElement(n), t.replaceWith(n), this
            }
        })
    }), LearnosityAmd.define("bundlesManager", ["require", "vendor/lodash.underscore", "models/questionResponse", "models/questionResponses/unknown", "views/questionResponses/unknown", "models/feature", "views/features/unknown"], function(e, t, n, r, i, s, o) {
        "use strict";

        function f(s, o) {
            var a = {};
            a[n.prototype.TYPE.UNKNOWN] = {
                Model: r,
                View: i
            };
            if (s.length > 0) {
                var f = [];
                t.each(s, function(e) {
                    f.push(u[e])
                }), e(f, function() {
                    for (var e = 0; e < s.length; e++) a[s[e]] = arguments[e];
                    o(a)
                })
            } else o(a)
        }

        function l(n, r) {
            var i = {};
            i[s.prototype.TYPE.UNKNOWN] = {
                Model: s,
                View: o
            };
            if (n.length > 0) {
                var u = [];
                t.each(n, function(e) {
                    u.push(a[e])
                }), e(u, function() {
                    for (var e = 0; e < n.length; e++) i[n[e]] = arguments[e];
                    r(i)
                })
            } else r(i)
        }
        var u = {};
        u[n.prototype.TYPE.ASSOCIATION] = "bundles/questionTypes/association", u[n.prototype.TYPE.AUDIO] = "bundles/questionTypes/audio", u[n.prototype.TYPE.AUDIOADV] = "bundles/questionTypes/audioAdv", u[n.prototype.TYPE.BOOLEAN] = "bundles/questionTypes/boolean", u[n.prototype.TYPE.CLASSIFICATION] = "bundles/questionTypes/classification", u[n.prototype.TYPE.CLOZETEXT] = "bundles/questionTypes/cloze", u[n.prototype.TYPE.CLOZEINLINETEXT] = "bundles/questionTypes/cloze", u[n.prototype.TYPE.CLOZEASSOCIATION] = "bundles/questionTypes/cloze", u[n.prototype.TYPE.CLOZEDROPDOWN] = "bundles/questionTypes/cloze", u[n.prototype.TYPE.CLOZEFORMULA] = "bundles/questionTypes/clozeFormula", u[n.prototype.TYPE.CLOZECHEMISTRY] = "bundles/questionTypes/clozeChemistry", u[n.prototype.TYPE.CHEMISTRY] = "bundles/questionTypes/chemistry", u[n.prototype.TYPE.CUSTOM] = "bundles/questionTypes/custom", u[n.prototype.TYPE.FORMULA] = "bundles/questionTypes/formula", u[n.prototype.TYPE.FORMULAV2] = "bundles/questionTypes/formulaV2", u[n.prototype.TYPE.FORMULA_DEV] = "bundles/questionTypes/formulaV2", u[n.prototype.TYPE.FORMULAESSAY] = "bundles/questionTypes/formulaEssay", u[n.prototype.TYPE.CHEMISTRYESSAY] = "bundles/questionTypes/chemistryEssay", u[n.prototype.TYPE.GRAPHPLOTTING] = "bundles/questionTypes/graphPlotting", u[n.prototype.TYPE.GRIDDED] = "bundles/questionTypes/gridded", u[n.prototype.TYPE.HOTSPOT] = "bundles/questionTypes/hotspot", u[n.prototype.TYPE.IMAGECLOZETEXT] = "bundles/questionTypes/cloze", u[n.prototype.TYPE.IMAGECLOZEASSOCIATION] = "bundles/questionTypes/cloze", u[n.prototype.TYPE.IMAGECLOZEDROPDOWN] = "bundles/questionTypes/cloze", u[n.prototype.TYPE.IMAGECLOZEFORMULA] = "bundles/questionTypes/clozeFormula", u[n.prototype.TYPE.IMAGEUPLOAD] = "bundles/questionTypes/imageUpload", u[n.prototype.TYPE.IMAGECLOZECHEMISTRY] = "bundles/questionTypes/clozeChemistry", u[n.prototype.TYPE.HIGHLIGHT] = "bundles/questionTypes/highlight", u[n.prototype.TYPE.LONGTEXT] = "bundles/questionTypes/longText", u[n.prototype.TYPE.NUMBERLINE] = "bundles/questionTypes/numberLine", u[n.prototype.TYPE.NUMBERLINEPLOT] = "bundles/questionTypes/numberLinePlot", u[n.prototype.TYPE.MCQ] = "bundles/questionTypes/mcq", u[n.prototype.TYPE.ORDERLIST] = "bundles/questionTypes/orderList", u[n.prototype.TYPE.PLAINTEXT] = "bundles/questionTypes/plainText", u[n.prototype.TYPE.RATING] = "bundles/questionTypes/rating", u[n.prototype.TYPE.SCORE] = "bundles/questionTypes/score", u[n.prototype.TYPE.SHORTTEXT] = "bundles/questionTypes/shortText", u[n.prototype.TYPE.SIMPLECHART] = "bundles/questionTypes/simpleChart", u[n.prototype.TYPE.SIMPLESHADING] = "bundles/questionTypes/simpleShading", u[n.prototype.TYPE.SORTLIST] = "bundles/questionTypes/sortList", u[n.prototype.TYPE.TEXTHIGHLIGHT] = "bundles/questionTypes/textHighlight", u[n.prototype.TYPE.TOKENHIGHLIGHT] = "bundles/questionTypes/tokenHighlight", u[n.prototype.TYPE.CHOICEMATRIX] = "bundles/questionTypes/choiceMatrix", u[n.prototype.TYPE.FILLSHAPE] = "bundles/questionTypes/fillshape";
        var a = {};
        return a[s.prototype.TYPE.AUDIO_PLAYER] = "bundles/features/audioPlayer", a[s.prototype.TYPE.CALCULATOR] = "bundles/features/calculator", a[s.prototype.TYPE.COUNTER] = "bundles/features/counter", a[s.prototype.TYPE.FORMULAINPUT] = "bundles/features/formulaInput", a[s.prototype.TYPE.VIDEO_PLAYER] = "bundles/features/videoPlayer", a[s.prototype.TYPE.IMAGE_TOOL] = "bundles/features/imageTool", a[s.prototype.TYPE.SHARED_PASSAGE] = "bundles/features/sharedPassage", a[s.prototype.TYPE.SCROLLABLE_PASSAGE] = "bundles/features/scrollablePassage", {
            requireBundlesForQuestionTypes: f,
            requireBundlesForFeatureTypes: l
        }
    }), LearnosityAmd.define("vendor/scoring/shared/commonScoring", ["vendor/lodash.underscore"], function(e) {
        "use strict";

        function t(e, t) {
            switch (t) {
                case "none":
                    return e;
                case "ceiling":
                    return Math.ceil(e);
                default:
                    return Math.floor(e)
            }
        }

        function n(e, t) {
            this.message = e + " does not support scoring type " + t, this.name = "InvalidScoringTypeException", this.toString = function() {
                return this.name + ": " + this.message
            }
        }

        function r(t, n) {
            return e.isNumber(n) && (e.isUndefined(t) && (t = 0), t += n), t
        }

        function i(t, n, r) {
            var i = e.isString(t) && e.isString(n);
            return i && !r.caseSensitive && (t = t.toLowerCase(), n = n.toLowerCase()), i && r.removeWhitespace && (t = t.replace(/ | /g, ""), n = n.replace(/ | /g, "")), t === n
        }

        function s(n, s, a, f) {
            function H(t, n, r, s) {
                var o = !0,
                    u = n[r];
                return s.strictEquality && (e.isUndefined(t) || t === null) && !e.isUndefined(u) && u !== null && (o = typeof t == typeof u), o && e.isEmpty(t) && e.isEmpty(u) || i(t, u, s)
            }

            function B(t, n, r) {
                return e.isEqual(t, n[r])
            }

            function j(t, n, r, i, s) {
                return P = e.indexOf(s, t), P > -1
            }

            function F(e, t, n, r) {
                var i = t[n] && [t[n]] || [],
                    s = u(e, i, r.validateSingleSpec, 1);
                return s.isValid
            }
            var l = n.question,
                c = n.response || {};
            l.validation = l.validation || {};
            var h = c.value || [],
                p = Math.abs(e.isNumber(l.validation.penalty) ? l.validation.penalty : a.penaltyScore),
                d = l.validation.scoring_type,
                v = l.validation.rounding || a.rounding,
                m = [],
                g, y, b, w, E, S, x, T = null,
                N, C, k, L, A, O, M, D, P;
            O = 0, g = 0, y = 0;
            for (var I = 0; I < s.length; I++) {
                N = s[I], C = N.value;
                if (!C) break;
                k = e.clone(C), L = e.isNumber(N.score) && N.score > 0 ? N.score : a.score, A = L * C.length, D = [], M = undefined, e.each(h, function(e, t) {
                    var n = f ? f.ignoreOrder ? j : H : B,
                        i;
                    n = f && f.validateSingleSpec ? F : n, n(e, C, t, f, k) ? (M = r(M, L), i = !0, P > -1 && delete k[P]) : (M = r(M, -1 * p), i = !1), D.push(i)
                });
                if (d === "exactMatch" && h.length)
                    if (o(M, A) && e.all(D)) {
                        if (e.isNull(T) || L > T || L === 0) w = D, T = L, S = !0
                    } else S || (S = !1, T = -1 * p);
                if (d === "partialMatch" || d === "partialMatchV2") e.isUndefined(S) && !e.any(D) && (S = !1), e.any(D) && (S = !0), d === "partialMatchV2" && (M = M / A * L, A = L), e.isUndefined(x) && (x = 0), A > x && (x = A);
                A >= O && (y = e.filter(D, function(e) {
                    return e === !0
                }).length, y > g && (g = y, b = N), O = A), m.push({
                    localScore: M,
                    localResponsesValid: D
                })
            }
            if (d === "exactMatch")
                for (I = 0; I < s.length; I++) N = s[I], L = e.isNumber(N.score) ? N.score : a.score, e.isUndefined(L) || (e.isUndefined(x) && (x = 0), L > x && (x = L));
            if (d === "partialMatch" || d === "partialMatchV2" || d === "exactMatch" && !w) x === 0 ? E = e.max(m, function(t) {
                return e(t.localResponsesValid).without(!1).length
            }) : E = e.max(m, function(e) {
                return e.localScore
            }), w = E.localResponsesValid, d === "partialMatch" && (T = E.localScore), d === "partialMatchV2" && E.localScore && (T = t(E.localScore, v));
            return (!h.length || !b) && s.length && (b = s[0]), T > x && (T = x), {
                score: T,
                responsesValid: w,
                suggestedResponse: b,
                maxScore: x,
                isValid: S
            }
        }

        function u(t, n, r, i, s) {
            var o = {},
                u = {},
                a, f, l, c, h, p = [],
                d, v;
            for (var m = 0; m < n.length; m++) {
                delete o.intern, l = n[m], e.isArray(l) ? h = i : (h = e.isNumber(n[m].score) ? n[m].score : i, p.push(h), l = n[m].value), l = l || [];
                for (var g = 0; g < l.length; g++) {
                    c = l[g];
                    var y = ["method: " + c.method];
                    c.value && y.push("value: '" + c.value + "'"), c.options && y.push("options: " + JSON.stringify(c.options)), typeof c.options == "string" && (c.options = JSON.parse(c.options)), e.isString(t) && (a = r(c, t), typeof o.intern == "undefined" && a.result === !0 && (o.intern = !0), a.result || (o.intern = !1), a.result !== !0 && a.result !== !1 && (u.error = {
                        name: "MathQuestionException",
                        message: a.message + " Failed validating user input '" + t + "' against validation object: " + y.join(", "),
                        location: a.location
                    }))
                }
                typeof o.extern == "undefined" && o.intern === !1 && (o.extern = !1, e.isUndefined(s) || (d = -1 * s)), o.intern === !0 && (o.extern = !0, d = h)
            }
            return p.length ? v = e.max(p) : v = i, u.isValid = o.extern, u.score = d, u.maxScore = v, u
        }

        function a(t, n) {
            var r = t.question.validation,
                i = r.valid_response,
                s = e.isNumber(r.valid_score) ? r.valid_score : n.score,
                o = t.response.value || [],
                u = s * i.length,
                a = t.question.type === "orderlist" && r.pairwise === !0,
                f, l = [],
                c, h = 0,
                p = 0,
                d, v, m, g;
            if (o.length) {
                d = 0;
                if (a) {
                    f = e.map(o, function(t) {
                        return e.indexOf(i, t)
                    });
                    for (m = 0; m < f.length; m++)
                        for (g = m + 1; g < f.length; g++) p++, f[m] < f[g] && h++;
                    d = parseFloat((i.length * h / p).toPrecision(2)), p && (!e.isUndefined(r.partial_scoring) && !r.partial_scoring ? v = p === h : v = h > 0)
                }
                for (m = 0; m < o.length; m++) c = undefined, i[m] == o[m] ? (c = s, l.push(!0)) : l.push(!1), !a && !e.isUndefined(c) ? d += c : !a && e.isNumber(r.penalty_score) && (d -= Math.abs(r.penalty_score));
                !a && l.length && (!e.isUndefined(r.partial_scoring) && !r.partial_scoring ? v = e.all(l) : v = e.any(l)), !e.isUndefined(r.partial_scoring) && !r.partial_scoring && d !== u && (d = 0)
            }
            return {
                maxScore: u,
                score: d,
                isValid: v,
                responsesValid: l
            }
        }

        function f(e) {
            return e && typeof e == "object" && e.constructor && e.constructor == Object
        }

        function l(t) {
            return f(t) ? (e.each(t, function(n, r) {
                if (f(n)) t[r] = l(n);
                else if (e.isArray(n)) t[r] = e.map(n, l);
                else if (e.isString(n)) switch (r) {
                    case "score":
                    case "valid_score":
                    case "penalty_score":
                        t[r] = parseFloat(n);
                        break;
                    case "pairwise":
                    case "case_sensitive":
                    case "is_math":
                        t[r] = n.toLowerCase() === "true" ? !0 : n.toLowerCase() === "false" ? !1 : null, e.isNull(t[r]) && delete t[r]
                }
            }), t) : t
        }

        function c(t) {
            return t = e.clone(t), l(t)
        }

        function h(t, n) {
            var r = t.isAttempted;
            e.isUndefined(r) && (r = n.response && f(n.response) && !!n.response.value), e.isBoolean(t.isValid) || (t.isValid = null), e.isNumber(t.score) ? t.score = parseFloat(t.score.toFixed(4)) : t.score = null, e.isNumber(t.maxScore) ? (t.maxScore = parseFloat(t.maxScore.toFixed(4)), r && e.isNull(t.score) && t.maxScore > 0 && (t.score = 0)) : t.maxScore = null
        }

        function p(t) {
            return e.reduce(t, function(t, n) {
                return n = e.isNumber(n) ? n : null, e.isNumber(n) || e.isNumber(t) ? n + t : null
            }, null)
        }
        var o = function() {
            var e = 1e-6;
            return function(n, r) {
                return Math.abs(n - r) < e
            }
        }();
        return {
            round: t,
            normalizeScores: h,
            scoreArray: s,
            addIfDefined: r,
            stringCompare: i,
            scoreList: a,
            normalizeParameters: c,
            validateMathLists: u,
            sumNullableNumbers: p,
            InvalidScoringTypeException: n,
            epsEquals: o
        }
    }), LearnosityAmd.define("vendor/scoring/question_groups/per-question-scoring", ["vendor/lodash.underscore", "vendor/scoring/shared/commonScoring"], function(e, t) {
        "use strict";

        function n(e) {
            this.questions = e
        }
        return n.prototype.score = function() {
            return t.sumNullableNumbers(e.pluck(this.questions, "score"))
        }, n.prototype.maxScore = function() {
            return t.sumNullableNumbers(e.pluck(this.questions, "max_score"))
        }, n
    }), LearnosityAmd.define("vendor/scoring/question_groups/dichotomous-scoring", ["vendor/lodash.underscore", "vendor/scoring/shared/commonScoring"], function(e, t) {
        "use strict";

        function n(e) {
            this.questions = e
        }
        return n.prototype.score = function() {
            var n = t.sumNullableNumbers(e.pluck(this.questions, "score")),
                r = this.maxScore();
            return n === null ? null : n < r ? 0 : r
        }, n.prototype.maxScore = function() {
            return t.sumNullableNumbers(e.pluck(this.questions, "max_score"))
        }, n
    }), LearnosityAmd.define("vendor/scoring/question_groups/dependent-scoring", ["vendor/lodash.underscore", "vendor/scoring/shared/commonScoring"], function(e, t) {
        "use strict";

        function n(e) {
            this.questions = e
        }
        return n.prototype.score = function() {
            var n;
            e.isNumber(t.sumNullableNumbers(e.pluck(this.questions, "score"))) ? n = 0 : n = null;
            for (var r = 0; r < this.questions.length; r++) {
                n = t.sumNullableNumbers([n, this.questions[r].score]);
                if (!e.isNumber(this.questions[r].score) || this.questions[r].score < this.questions[r].max_score) break
            }
            return n
        }, n.prototype.maxScore = function() {
            var n = null;
            for (var r = 0; r < this.questions.length; r++) {
                n = t.sumNullableNumbers([n, this.questions[r].max_score]);
                if (!e.isNumber(this.questions[r].max_score)) break
            }
            return n
        }, n
    }), LearnosityAmd.define("vendor/scoring/question_groups/group-scoring", ["vendor/lodash.underscore", "vendor/scoring/shared/commonScoring", "vendor/scoring/question_groups/per-question-scoring", "vendor/scoring/question_groups/dichotomous-scoring", "vendor/scoring/question_groups/dependent-scoring"], function(e, t, n, r, i) {
        "use strict";

        function u(t) {
            if (!t.type) throw "Scoring type is required";
            if (!e.contains(e.keys(s), t.type)) throw "Scoring type is invalid.";
            if (!t.questions || !e.isArray(t.questions) || !t.questions.length) throw "An array of at least one question score is required";
            t.questions = e.map(t.questions, function(t) {
                return e.isObject(t) ? t : {}
            });
            var n = new s[t.type](t.questions);
            this.score = function() {
                return a(n.score(), o)
            }, this.maxScore = function() {
                return a(n.maxScore(), o)
            }
        }

        function a(t, n) {
            if (!e.isNumber(t)) return t;
            var r = Math.pow(10, n);
            return Math.round(t * r) / r
        }
        var s = {
                "per-question": n,
                dichotomous: r,
                dependent: i
            },
            o = 3;
        return u
    }), LearnosityAmd.define("collections/questionResponses", ["vendor/backbone", "vendor/lodash.underscore", "models/questionResponse", "vendor/scoring/question_groups/group-scoring", "error"], function(e, t, n, r, i) {
        "use strict";
        return e.Collection.extend({
            model: n,
            EVENT: {
                MODIFIED: n.prototype.EVENT.MODIFIED
            },
            getModelsValidState: function() {
                var e = [];
                return this.each(function(t) {
                    t.validState.valid || (e = e.concat(t.validState.errors))
                }), {
                    valid: e.length === 0,
                    errors: e
                }
            },
            getInvalidQuestionResponses: function() {
                return this.filter(function(e) {
                    return !e.hasAllowedResponse()
                })
            },
            getResponseIds: function(e) {
                var n = this,
                    r = [];
                return t.each(e, function(e) {
                    r.push(n.get(e).get("response_id"))
                }), r
            },
            getAttemptedResponseIds: function() {
                var e = [];
                return this.each(function(t) {
                    t.isAttempted() && e.push(t.get("response_id"))
                }), e
            },
            getValidResponseIds: function() {
                var e = [];
                return this.each(function(n) {
                    t.isFunction(n.isResponseValid) && n.isResponseValid() && e.push(n.get("response_id"))
                }), e
            },
            getValidResponses: function() {
                var e = {};
                return this.each(function(n) {
                    if (!t.isFunction(n.canValidateResponse) || !n.canValidateResponse() || !n.hasResponse()) return;
                    e[n.get("response_id")] = n.isResponseValid()
                }), e
            },
            getValidResponsesDetailed: function() {
                var e = {};
                return this.each(function(n) {
                    if (!t.isFunction(n.canValidateResponse) || !n.canValidateResponse() || !n.hasResponse()) return;
                    e[n.get("response_id")] = n.getResponseValidDetailed()
                }), e
            },
            getToBeCapturedQuestionResponseJson: function() {
                var e = [];
                return this.each(function(t) {
                    !t.isCaptured() && !t.has("error") && e.push(t.getJsonToCapture())
                }), e
            },
            getToBeSavedQuestionResponseJson: function() {
                var e = [];
                return this.each(function(t) {
                    t.toBeSaved() && !t.has("error") && e.push(t.getJsonToSave())
                }), e
            },
            getResponsesForClient: function() {
                var e = {};
                return this.each(function(t) {
                    t.hasResponse() && (e[t.get("response_id")] = t.getResponseJsonForClient())
                }), e
            },
            getQuestionsJson: function() {
                var e = {};
                return this.each(function(t) {
                    e[t.get("response_id")] = t.getQuestionJsonForClient()
                }), e
            },
            getScores: function() {
                var e = {};
                return this.each(function(n) {
                    var r = t.isFunction(n.getScore) ? n.getScore() : null;
                    t.isEmpty(r) || (e[n.get("response_id")] = r)
                }), e
            },
            getGroupScore: function(e) {
                t.isString(e.type) || (e.type = "per-question");
                var n = [];
                t.each(e.response_ids, function(e) {
                    var r = t.first(this.where({
                        response_id: e
                    }));
                    r ? n.push(t.isFunction(r.getScore) ? r.getScore() : null) : i.log("Response ID not found: " + e)
                }, this);
                if (n.length != e.response_ids.length) return !1;
                try {
                    var s = new r({
                        type: e.type,
                        questions: n
                    });
                    return {
                        type: e.type,
                        score: s.score(),
                        max_score: s.maxScore(),
                        question_scores: n
                    }
                } catch (o) {
                    return i.log("Group scoring error: " + o), !1
                }
            },
            getQuestionResponsesModificationTimes: function() {
                var e = {};
                return this.each(function(t) {
                    e[t.id] = t.getLastModifiedTime()
                }), e
            },
            areThereQuestionsModified: function() {
                return this.any(function(e) {
                    return e.isModified()
                })
            },
            areAllQuestionsSaved: function() {
                return this.every(function(e) {
                    return e.isSaved()
                })
            },
            markAsSavedIfModified: function(e, n) {
                t.each(e, function(e) {
                    var t = this.get(e);
                    t.getLastModifiedTime() === n[t.id] && t.setAsSaved()
                }, this)
            },
            markAsCaptured: function(e) {
                t.each(e, function(e) {
                    var t = this.get(e);
                    t.setAsCaptured()
                }, this)
            }
        })
    }), LearnosityAmd.define("collections/features", ["vendor/backbone", "models/feature"], function(e, t) {
        "use strict";
        return e.Collection.extend({
            model: t,
            getFeaturesJson: function() {
                var e = {};
                return this.each(function(t) {
                    e[t.get("feature_id")] = t.getFeatureJsonForClient()
                }), e
            }
        })
    }), LearnosityAmd.define("collections/questionResponseGroup", ["vendor/backbone", "vendor/lodash.underscore", "models/questionResponse"], function(e, t, n) {
        "use strict";
        return e.Collection.extend({
            EVENT: {
                MODIFIED: n.prototype.EVENT.MODIFIED
            },
            model: n,
            jsonAttribute: undefined,
            groupId: undefined,
            viewClass: undefined,
            initialize: function(e, t) {
                this.jsonAttribute = t.jsonAttribute, this.groupId = t.groupId, this.viewClass = t.viewClass, this.id = this.jsonAttribute + "-" + this.groupId
            },
            areAllQuestionsAttempted: function() {
                return this.all(function(e) {
                    return e.isAttempted()
                })
            }
        })
    }), LearnosityAmd.define("templates/questionResponses/features/groupValidation", ["vendor/lodash.underscore"], function(_) {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div id="' + ((__t = id) == null ? "" : __t) + '" class="lrn lrn_widget lrn_group lrn_clearfix"><button type="button" class="lrn_btn">' + ((__t = labels.checkAnswers) == null ? "" : __t) + "</button></div>";
            return __p
        }
    }), LearnosityAmd.define("views/questionResponses/features/groupValidation", ["vendor/backbone", "vendor/dom", "vendor/lodash.underscore", "templates/questionResponses/features/groupValidation"], function(e, t, n, r) {
        "use strict";
        return e.View.extend({
            template: r,
            events: {
                "click .lrn_btn": "validateQuestions"
            },
            initialize: function() {
                this.setElement(".learnosity-validation.group-" + this.collection.groupId), this.activity = this.options.activity, this.i18n = this.activity.get("i18n"), this.render()
            },
            render: function() {
                var e = this.$el,
                    n = t(this.template({
                        id: this.collection.id,
                        labels: this.i18n.labels
                    }));
                return this.setElement(n), e.replaceWith(n), this
            },
            validateQuestions: function() {
                this.collection.each(function(e, t) {
                    e.callValidate && e.callValidate({
                        feedback_attempts: !0
                    })
                })
            }
        })
    }), LearnosityAmd.define("models/activity", ["vendor/backbone", "vendor/lodash.underscore", "vendor/dom", "config", "error", "bundlesManager", "collections/questionResponses", "models/questionResponse", "collections/features", "models/feature", "collections/questionResponseGroup", "views/questionResponses/features/groupValidation", "utils/htmlCleaner"], function(e, t, n, r, i, s, o, u, a, f, l, c, h) {
        "use strict";
        var p = function(t) {
            this.name = "ValidationError", this.message = t
        };
        return p.prototype = new Error, p.constructor = p, e.Model.extend({
            TYPE: {
                LOCAL_PRACTICE: "local_practice",
                OFFLINE_APP: "offline_app",
                SUBMIT_PRACTICE: "submit_practice",
                TEST: "test"
            },
            STATE: {
                INITIAL: "initial",
                RESUME: "resume",
                REVIEW: "review",
                PREVIEW: "preview"
            },
            EVENT: {
                READY: "ready",
                SAVE: "save",
                SAVED: "saved",
                SUBMITTED: "submitted",
                DISCARDED: "discarded"
            },
            ValidationError: p,
            defaults: {
                domain: r.domain,
                type: "local_practice",
                state: "initial",
                beta_flags: {}
            },
            initialize: function() {
                this.questionResponsesReady = !1, this.featuresReady = !1, this.set({
                    questionResponses: new o([]),
                    featureModels: new a([]),
                    hasQuestions: t.isArray(this.get("questions")) && this.get("questions").length > 0,
                    hasFeatures: t.isArray(this.get("features")) && this.get("features").length > 0
                }, {
                    silent: !0
                }), this.qrGroupFeatureViewsMap = {
                    validation_group: c
                }, this.qrGroupFeatures = [], this.hooks = {
                    reset: [],
                    unload: [],
                    saveProgress: []
                }, h.init(this.get("htmlCleaner"))
            },
            init: function() {
                var e = this.get("hasQuestions"),
                    t = this.get("hasFeatures");
                try {
                    this.validateActivity(), e && this.validateQuestionsJson(this.get("questions")), t && this.validateFeaturesJson(this.get("features")), this.has("description") && this.set({
                        description: h.whitelistContent(this.get("description"))
                    }, {
                        silent: !0
                    }), e ? (this.initialiseQuestionResponses(this.get("questions")), this.unset("questions", {
                        silent: !0
                    })) : this.initialisationCompleted("questionResponses"), t ? (this.intialiseFeatures(this.get("features")), this.unset("features", {
                        silent: !0
                    })) : this.initialisationCompleted("features")
                } catch (n) {
                    if (!(n instanceof p)) throw n;
                    i.exception({
                        code: 10001,
                        detail: "Activity JSON Poorly formed. " + n,
                        i18n: this.get("i18n")
                    })
                }
            },
            validateActivity: function() {
                if (!t.include(this.TYPE, this.get("type"))) throw new p('Invalid "type" attribute provided: ' + this.get("type"));
                if (!t.include(this.STATE, this.get("state"))) throw new p('Invalid "state" attribute provided: ' + this.get("state"))
            },
            validateQuestionsJson: function(e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r] || {};
                    if (!i.hasOwnProperty("response_id")) throw new p("The question object at index " + r + ' is missing the "response_id" attribute');
                    if (!u.prototype.VALID_RESPONSE_ID_RE.test(i.response_id)) throw new p("The question object at index " + r + ' has a "response_id" attribute with invalid characters: ' + i.response_id);
                    if (n(".learnosity-response.question-" + i.response_id).length === 0) throw new p("The question object at index " + r + ' with "response_id": ' + i.response_id + " has no matching DOM element");
                    if (t.keys(i).length > 1) {
                        if (!i.hasOwnProperty("type") && !!this.get("consumer").get("requireQuestionType")) throw new p("The question object at index " + r + ' is missing the "type" attribute');
                        i.hasOwnProperty("type") || (i.type = u.prototype.TYPE.AUDIOADV);
                        if (!t.include(u.prototype.TYPE, i.type)) throw new p("The question object at index " + r + ' has an invalid "type" attribute: ' + i.type)
                    } else if (this.get("state") !== this.STATE.RESUME && this.get("state") !== this.STATE.REVIEW) throw new p("The question object at index " + r + ' has no attributes, but the activity "state" is not "resume" or "review"')
                }
            },
            validateFeaturesJson: function(e) {
                for (var r = 0; r < e.length; r++) {
                    var i = e[r] || {};
                    if (!i.hasOwnProperty("feature_id")) throw new p("The feature object at index " + r + ' is missing the "feature_id" attribute');
                    if (n(".learnosity-feature.feature-" + i.feature_id).length === 0) throw new p("The feature object at index " + r + ' with "feature_id": ' + i.feature_id + " has no matching DOM element");
                    if (!i.hasOwnProperty("type") || !t.include(f.prototype.TYPE, i.type)) throw new p("The feature object at index " + r + ' has an invalid "type" attribute: ' + i.type)
                }
            },
            initialiseQuestionResponses: function(e, n) {
                var r = [];
                t.each(e, function(e) {
                    e.type != u.prototype.TYPE.UNKNOWN && !t.include(r, e.type) && r.push(e.type)
                }), s.requireBundlesForQuestionTypes(r, t.bind(function(n) {
                    if (!t.isEmpty(n)) {
                        this.initQuestionResponseModels(n, e);
                        var s = this.get("questionResponses").getModelsValidState();
                        s.valid ? (this.initQuestionGroupFeatures(n), this.hasToLoadResponsesIntoQuestionResponses() ? this.loadResponsesIntoQuestionResponses(t.bind(function() {
                            this.initialisationCompleted("questionResponses")
                        }, this)) : this.initialisationCompleted("questionResponses")) : i.exception({
                            code: 10001,
                            detail: "Activity JSON Poorly formed. " + s.errors.join(" |\n"),
                            i18n: this.get("i18n")
                        })
                    } else i.log("No bundles were loaded for the required Question types: " + r.join(", "))
                }, this))
            },
            initQuestionResponseModels: function(e, n) {
                var r = [];
                t.each(n, function(n) {
                    var s = {
                        id: u.prototype.getIdForResponseId(n.response_id, this.get("user_id"), this.get("consumer").get("id")),
                        response_id: n.response_id,
                        user_id: this.get("user_id")
                    };
                    n.error && (s.error = n.error, n.type || (n.type = u.prototype.TYPE.UNKNOWN)), s.question = n, s.type = n.type;
                    var o = e[n.type],
                        a = new o.Model(s);
                    a.setApiVersion(this.get("apiVersion")), o.hasOwnProperty("View") ? a.viewClass = o.View : t.isFunction(o.getViewFor) ? a.viewClass = o.getViewFor(n) : i.log("Bundle for question: " + n.type + " does not contain View attribute or getViewFor function"), a.activity = this, r.push(a)
                }, this), this.get("questionResponses").add(r)
            },
            initQuestionGroupFeatures: function(e) {
                t.each(e, function(e) {
                    e.hasOwnProperty("featureViewsMapEntry") && (this.qrGroupFeatureViewsMap[e.featureViewsMapEntry.jsonAttribute] = e.featureViewsMapEntry.viewClass)
                }, this), this.get("questionResponses").each(function(e) {
                    var n = e.getGroupJsonAttributes();
                    t.each(n, function(n) {
                        var r = t.find(this.qrGroupFeatures, function(e) {
                            return e.jsonAttribute == n.name && e.groupId == n.value
                        });
                        t.isUndefined(r) && (r = new l(null, {
                            jsonAttribute: n.name,
                            groupId: n.value,
                            viewClass: this.qrGroupFeatureViewsMap[n.name]
                        }), this.qrGroupFeatures.push(r)), r.add(e)
                    }, this)
                }, this)
            },
            hasToLoadResponsesIntoQuestionResponses: function() {
                return !1
            },
            loadResponsesIntoQuestionResponses: function(e) {
                e()
            },
            intialiseFeatures: function(e) {
                var n = [];
                t.each(e, function(e) {
                    e.type != f.prototype.TYPE.UNKNOWN && !t.include(n, e.type) && n.push(e.type)
                }), s.requireBundlesForFeatureTypes(n, t.bind(function(r) {
                    if (!t.isEmpty(r)) {
                        var s = [],
                            o = this;
                        t.each(e, function(e) {
                            var n = t.first(o.get("featureModels").where({
                                feature_id: e.feature_id
                            }));
                            if (n) n.trigger(n.EVENT.RE_INIT);
                            else {
                                var u = r[e.type],
                                    a = new u.Model(e);
                                u.hasOwnProperty("View") ? a.viewClass = u.View : t.isFunction(u.getViewFor) ? a.viewClass = u.getViewFor(e) : i.log("Bundle for feature: " + e.type + " does not contain View attribute or getViewFor function"), a.activity = o, s.push(a)
                            }
                        }), this.get("featureModels").add(s), this.initialisationCompleted("features")
                    } else i.log("No bundles were loaded for the required Feature types:" + n.join(", "))
                }, this))
            },
            initialisationCompleted: function(e) {
                e == "questionResponses" ? this.questionResponsesReady = !0 : e == "features" && (this.featuresReady = !0), this.questionResponsesReady && this.featuresReady && this.trigger(this.EVENT.READY)
            },
            append: function(e) {
                var n, r;
                try {
                    if (!t.isObject(e)) throw new p("First parameter must be an object");
                    n = t.isArray(e.questions) && e.questions.length > 0, r = t.isArray(e.features) && e.features.length > 0;
                    if (!n && !r) throw new p("Either questions or features must be provided");
                    n && (this.validateQuestionsJson(e.questions), this.questionResponsesReady = !1), r && (this.validateFeaturesJson(e.features), this.featuresReady = !1), n && this.initialiseQuestionResponses(e.questions, !0), r && this.intialiseFeatures(e.features)
                } catch (s) {
                    if (!(s instanceof p)) throw s;
                    i.exception({
                        code: 10020,
                        detail: s.message,
                        i18n: this.get("i18n")
                    })
                }
            },
            showQuestionNumbers: function() {
                return this.get("number_questions") && this.get("questionResponses").length > 1
            },
            captureQuestionResponses: function() {},
            save: function(e) {},
            discard: function(e) {},
            getAttemptedResponseIds: function() {
                return this.get("questionResponses").getAttemptedResponseIds()
            },
            safeToUnload: function() {
                if (this.get("type") != this.TYPE.LOCAL_PRACTICE) {
                    if (!this.has("questionResponses") || !this.get("questionResponses").areThereQuestionsModified()) {
                        var e = !t.any(this.hooks.unload, function(e) {
                            return !e()
                        });
                        return e && !this.saving
                    }
                    return !1
                }
                return !0
            },
            validateQuestionsResponses: function(e) {
                e = e || {}, this.get("questionResponses").each(function(n) {
                    t.isFunction(n.callValidate) && n.callValidate(e)
                })
            },
            getValidResponseIds: function() {
                return this.get("questionResponses").getValidResponseIds()
            },
            hasSimpleFeaturesToRender: function() {
                var e = this.get("state") === this.STATE.REVIEW;
                return this.get("questionResponses").some(function(t) {
                    return e && t.hasStimulusReview() ? t.hasSimpleFeaturesInStimulusReview() : t.hasSimpleFeaturesInStimulus()
                })
            }
        })
    }), LearnosityAmd.define("models/activities/local", ["vendor/lodash.underscore", "models/activity"], function(e, t) {
        "use strict";
        return t.extend({
            initialize: function() {
                t.prototype.initialize.call(this), this.responsesToSet = {}, this.has("responses") && (this.responsesToSet = this.get("responses"))
            },
            validateActivity: function() {
                t.prototype.validateActivity.call(this);
                if (this.has("responses") && this.get("state") !== this.STATE.RESUME && this.get("state") !== this.STATE.REVIEW) throw new this.ValidationError('"responses" attribute can only be provided if "type" is "' + this.STATE.RESUME + '" or "' + this.STATE.REVIEW + '"');
                if (this.has("responses") && !this.get("hasQuestions")) throw new this.ValidationError('"responses" attribute can only be provided if "questions" are provided');
                e.each(this.get("responses"), function(t, n) {
                    var r = e.find(this.get("questions"), function(e) {
                        return n === e.response_id
                    });
                    if (e.isUndefined(r)) throw new this.ValidationError('The response object provided for "response_id": ' + n + " has no matching question object")
                }, this)
            },
            hasToLoadResponsesIntoQuestionResponses: function() {
                return (this.get("state") == this.STATE.RESUME || this.get("state") == this.STATE.REVIEW) && !e.isEmpty(this.responsesToSet)
            },
            loadResponsesIntoQuestionResponses: function(t) {
                e.isEmpty(this.responsesToSet) || e.each(this.responsesToSet, function(e, t) {
                    var n = this.get("questionResponses").find(function(e) {
                        return t === e.get("response_id")
                    });
                    n.update({
                        response: e
                    }), delete this.responsesToSet[t]
                }, this), t()
            },
            append: function(n) {
                n && e.isObject(n.responses) && e.extend(this.responsesToSet, n.responses), t.prototype.append.call(this, n)
            },
            captureQuestionResponses: function() {
                throw "captureQuestionResponses function not supported for Local Practice activities"
            },
            save: function() {
                throw "save function not supported for Local Practice activities"
            },
            discard: function() {
                throw "discard function not supported for Local Practice activities"
            }
        })
    }), LearnosityAmd.define("utils/storage/indexed", ["vendor/lodash.underscore", "utils/json", "utils/promise"], function(e, t, n) {
        "use strict";

        function i(t, n, r, i) {
            var s;
            return e.isUndefined(i) || e.isNull(i) ? s = t[n](r) : s = t[n](r, i), s
        }
        var r = function(t) {
            if (!window.indexedDB) throw new Error("Storage Error: IndexedDB is not supported");
            if (e.isEmpty(t) || !e.isString(t.name) || !e.isNumber(t.version) || t.version < 1 || !e.isArray(t.stores) || t.stores.length === 0) throw new Error("Storage Error: incorrect database configuration passed");
            this.name = t.name, this.version = t.version, this.storeDefinitions = t.stores, this.databasePromise = null
        };
        return e.extend(r.prototype, {
            get: function(e, t) {
                return this._execute("get", function(n, r, i) {
                    var s = n.transaction(e, "readonly").objectStore(e).get(t);
                    s.onsuccess = function() {
                        r(s.result)
                    }
                })
            },
            set: function(e, t, n) {
                return this._execute("set", function(r, s, o) {
                    var u = r.transaction(e, "readwrite").objectStore(e);
                    i(u, "put", t, n).onsuccess = s
                })
            },
            update: function(t, n, r, s) {
                return this._execute("set", function(o, u, a) {
                    var f = o.transaction(t, "readwrite").objectStore(t),
                        l = f.get(e.isEmpty(r) ? n[f.keyPath] : r);
                    l.onsuccess = function() {
                        if (!l.result && s) {
                            a("Storage Error running update: missing object"), f.transaction.abort();
                            return
                        }
                        var t = e.deepExtend({}, l.result, n),
                            o;
                        e.isEmpty(r) || (o = r), i(f, "put", t, o).onsuccess = u
                    }
                })
            },
            add: function(e, t, n) {
                return this._execute("add", function(r, s, o) {
                    var u = r.transaction(e, "readwrite").objectStore(e);
                    i(u, "add", t, n).onsuccess = s
                })
            },
            remove: function(e, t) {
                return this._execute("remove", function(n, r, i) {
                    n.transaction(e, "readwrite").objectStore(e)["delete"](t).onsuccess = r
                })
            },
            clear: function(e) {
                return this._execute("clear", function(t, n, r) {
                    t.transaction(e, "readwrite").objectStore(e).clear().onsuccess = n
                })
            },
            getAll: function(t, n) {
                return this._execute("getAll", function(r, i, s) {
                    if (n.length === 0) {
                        i([]);
                        return
                    }
                    var o = 0,
                        u = [];
                    n = e.sortBy(n), r.transaction(t, "readonly").objectStore(t).openCursor().onsuccess = function(e) {
                        var t = e.target.result;
                        if (!t) {
                            i(u);
                            return
                        }
                        var r = t.key;
                        while (r > n[o]) {
                            o += 1;
                            if (o === n.length) {
                                i(u);
                                return
                            }
                        }
                        r === n[o] ? (u.push(t.value), t["continue"]()) : t["continue"](n[o])
                    }
                })
            },
            setAll: function(t, n, r) {
                return this._execute("setAll", function(s, o, u) {
                    if (e.isArray(r) && n.length != r.length) {
                        u("Storage Error running setAll: keys array provided with different length to values array");
                        return
                    }
                    var a = s.transaction(t, "readwrite").objectStore(t),
                        f = -1,
                        l = function c() {
                            f += 1;
                            if (f < n.length) {
                                var t;
                                e.isArray(r) && (t = r[f]), i(a, "put", n[f], t).onsuccess = c
                            } else o()
                        };
                    l()
                })
            },
            addAll: function(t, n, r) {
                return this._execute("addAll", function(s, o, u) {
                    if (e.isArray(r) && n.length != r.length) {
                        u("Storage Error running addAll: keys array provided with different length to values array");
                        return
                    }
                    var a = s.transaction(t, "readwrite").objectStore(t),
                        f = -1,
                        l = function c() {
                            f += 1;
                            if (f < n.length) {
                                var t;
                                e.isArray(r) && (t = r[f]), i(a, "add", n[f], t).onsuccess = c
                            } else o()
                        };
                    l()
                })
            },
            updateAll: function(t, n, r, s) {
                return this._execute("setPartials", function(o, u, a) {
                    var f = o.transaction(t, "readwrite").objectStore(t),
                        l, c;
                    if (e.isArray(r) && n.length != r.length) {
                        a("Storage Error running updateAll: keys array provided with different length to partialValues array");
                        return
                    }
                    if (e.isArray(r) && !e.isEmpty(f.keyPath)) {
                        a("Storage Error running updateAll: keys array provided but storage is defined with keyPath");
                        return
                    }
                    if (!e.isArray(r) && e.isEmpty(f.keyPath)) {
                        a("Storage Error running updateAll: no keys provided and storage doesn't have keyPath");
                        return
                    }
                    l = -1, c = function h() {
                        l += 1;
                        if (l < n.length) {
                            var t = n[l],
                                o = e.isArray(r) ? r[l] : t[f.keyPath],
                                c = f.get(o);
                            c.onsuccess = function() {
                                if (!c.result) {
                                    a("Storage Error running updateAll: missing object for key: " + o), f.transaction.abort();
                                    return
                                }
                                var n = c.result,
                                    u;
                                e.isArray(r) && (u = o), !e.isString(s) || t[s] === n[s] ? (n = e.deepExtend({}, n, t), i(f, "put", n, u).onsuccess = h) : h()
                            }
                        } else u()
                    }, c()
                })
            },
            getAllByIndex: function(e, t) {
                return this._execute("getAllByIndex", function(n, r, i) {
                    var s = n.transaction(e, "readonly").objectStore(e).index(t),
                        o = [];
                    s.openCursor().onsuccess = function() {
                        var e = event.target.result;
                        e ? (o.push(e.value), e["continue"]()) : r(o)
                    }
                })
            },
            getAllByIndexWithValue: function(e, t, n, r) {
                return r = r || "==", this._execute("getAllByIndexWithValue", function(i, s, o) {
                    var u = i.transaction(e, "readonly").objectStore(e).index(t),
                        a = [],
                        f;
                    switch (r) {
                        case ">":
                            f = window.IDBKeyRange.lowerBound(n, !0);
                            break;
                        case ">=":
                            f = window.IDBKeyRange.lowerBound(n);
                            break;
                        case "<":
                            f = window.IDBKeyRange.upperBound(n, !0);
                            break;
                        case "<=":
                            f = window.IDBKeyRange.upperBound(n);
                            break;
                        case "==":
                        default:
                            f = window.IDBKeyRange.only(n)
                    }
                    u.openCursor(f).onsuccess = function() {
                        var e = event.target.result;
                        e ? (a.push(e.value), e["continue"]()) : s(a)
                    }
                })
            },
            getAllByIndexBetweenValues: function(e, t, n, r, i) {
                return i = !!i, this._execute("getAllByIndexWithValue", function(s, o, u) {
                    var a = s.transaction(e, "readonly").objectStore(e).index(t),
                        f = window.IDBKeyRange.bound(n, r, i, i),
                        l = [];
                    a.openCursor(f).onsuccess = function() {
                        var e = event.target.result;
                        e ? (l.push(e.value), e["continue"]()) : o(l)
                    }
                })
            },
            _execute: function(e, t) {
                return this._openDatabase().then(function(r) {
                    return new n(function(n, i) {
                        r.onerror = function(t) {
                            i("Storage Error running " + e + ": " + (t.target ? t.target.error.name + " " + t.target.error.message : t.message))
                        }, t(r, n, i)
                    })
                })
            },
            _openDatabase: function() {
                if (!this.databasePromise) {
                    var t = this;
                    this.databasePromise = new n(function(n, r) {
                        try {
                            var i = window.indexedDB.open(t.name, t.version);
                            i.onerror = function(e) {
                                r("Storage Error: database open error: " + (e.target ? e.target.error : e.toString()))
                            }, i.onsuccess = function(e) {
                                n(e.target.result)
                            }, i.onupgradeneeded = function(n) {
                                var i = n.target.result,
                                    s = n.target.transaction,
                                    o = e.difference(i.objectStoreNames, e.pluck(t.storeDefinitions, "name")),
                                    u, a, f, l;
                                try {
                                    e.each(t.storeDefinitions, function(t) {
                                        var n, r;
                                        e.contains(i.objectStoreNames, t.name) ? n = s.objectStore(t.name) : n = i.createObjectStore(t.name, t.optionalParameters), r = e.difference(n.indexNames, e.pluck(t.indices, "name")), e.each(t.indices, function(t) {
                                            e.contains(n.indexNames, t.name) || n.createIndex(t.name, t.keyPath, {
                                                unique: t.unique === !0
                                            })
                                        }), e.each(r, function(e) {
                                            n.deleteIndex(e)
                                        })
                                    }), e.each(o, function(e) {
                                        i.deleteObjectStore(e)
                                    })
                                } catch (c) {
                                    r("Storage Error: database create/upgrade error: " + c.toString())
                                }
                            }
                        } catch (s) {
                            r("Storage Error: database open error: " + s.toString())
                        }
                    })
                }
                return this.databasePromise
            }
        }), r
    }), LearnosityAmd.define("models/offlineStorage", ["vendor/lodash.underscore", "comms", "utils/storage/indexed", "utils/promise"], function(e, t, n, r) {
        "use strict";
        var i = {
            QUESTION_RESPONSES: "questionresponses",
            SESSIONS: "sessions"
        };
        return {
            init: function() {
                if (!this.storage) try {
                    this.storage = new n({
                        name: "LrnQuestionsApi",
                        version: 1,
                        stores: [{
                            name: i.QUESTION_RESPONSES,
                            optionalParameters: {
                                keyPath: "id"
                            },
                            indices: [{
                                name: "needs_pushing",
                                keyPath: "needs_pushing"
                            }, {
                                name: "session_id",
                                keyPath: "session_id"
                            }]
                        }, {
                            name: i.SESSIONS,
                            optionalParameters: {
                                keyPath: "session_id"
                            },
                            indices: [{
                                name: "needs_pushing",
                                keyPath: "needs_pushing"
                            }]
                        }]
                    })
                } catch (e) {
                    this.initError = e
                }
                if (this.initError) throw this.initError;
                return this
            },
            getQuestionResponses: function(e) {
                return this.storage ? this.storage.getAll(i.QUESTION_RESPONSES, e) : r.reject(this.initError ? this.initError : "Offline storage not initialised")
            },
            saveQuestionResponses: function(t, n, s) {
                if (!this.storage) return r.reject(this.initError ? this.initError : "Offline storage not initialised");
                var o = this,
                    u = [],
                    a = [],
                    f = [],
                    l = (new Date).getTime(),
                    c = this.getDateString();
                return e.each(t, function(e, t) {
                    var r;
                    e.isCaptured() ? (r = {
                        id: e.get("id"),
                        response: e.get("response"),
                        mod_date: c,
                        needs_pushing: "true"
                    }, n && (r.session_id = n), f.push(r)) : (r = {
                        id: e.get("id"),
                        type: e.get("type"),
                        response_id: e.get("response_id"),
                        user_id: e.get("user_id"),
                        question: e.get("question"),
                        response: e.get("response"),
                        creation_date: c,
                        consumer_key: s,
                        order: l + "_" + t,
                        mod_date: c,
                        needs_pushing: "true",
                        pushed_once: !1
                    }, n && (r.session_id = n), a.push(r), u.push(e))
                }), this.storage.addAll(i.QUESTION_RESPONSES, a).then(function() {
                    return e.each(u, function(e) {
                        e.set({
                            creation_date: c
                        }, {
                            silent: !0
                        }), e.setAsCaptured()
                    }), o.storage.updateAll(i.QUESTION_RESPONSES, f)
                })
            },
            saveSession: function(t) {
                if (!this.storage) return r.reject(this.initError ? this.initError : "Offline storage not initialised");
                var n = this;
                return this.storage.get(i.SESSIONS, t.session_id).then(function(r) {
                    return r && (r.needs_pushing === "true" && (t.questions = e.union(r.questions, t.questions)), t = e.deepExtend({}, r, t)), t.mod_date = n.getDateString(), t.needs_pushing = "true", n.storage.set(i.SESSIONS, t)
                })
            },
            needsPushing: function(t) {
                return r.all([this.storage.getAllByIndexWithValue(i.SESSIONS, "needs_pushing", "true"), this.storage.getAllByIndexWithValue(i.QUESTION_RESPONSES, "needs_pushing", "true")]).then(function(n) {
                    var r = e.pluck(e.filter(n[0], function(e) {
                            return e.consumer_key === t.consumer_key && e.user_id === t.user_id
                        }), "session_id"),
                        i = e.pluck(e.filter(n[1], function(e) {
                            return e.consumer_key === t.consumer_key && e.user_id === t.user_id
                        }), "response_id");
                    return {
                        sessions: r,
                        questions: i
                    }
                })
            },
            push: function(e) {
                if (!this.storage) return r.reject(this.initError ? this.initError : "Offline storage not initialised");
                var t = this;
                return this.pushQuestionResponses(e).then(function() {
                    return t.pushSessions(e)
                })
            },
            pushQuestionResponses: function(n) {
                var s = this;
                return this.storage.getAllByIndexWithValue(i.QUESTION_RESPONSES, "needs_pushing", "true").then(function(o) {
                    var u = e.filter(o, function(e) {
                            return e.consumer_key === n.consumer_key && e.user_id === n.user_id
                        }),
                        a = e.map(u, function(e) {
                            var t;
                            return e.pushed_once ? t = {
                                id: e.id,
                                response: e.response,
                                pushed_once: e.pushed_once
                            } : (t = e, t.metadata && t.metadata.prepackaged_question && (t.question = t.metadata.prepackaged_question, t.question.response_id = e.response_id, delete t.metadata.prepackaged_question)), t
                        });
                    return a.length === 0 ? r.resolve() : (new r(function(r, i) {
                        t.request({
                            url: "/push/questionresponses",
                            action: t.ACTION.UPDATE,
                            security: n,
                            data: {
                                questionResponses: a
                            },
                            success: function(e) {
                                r()
                            },
                            failure: function(t) {
                                var n = "Failed pushing sessions: " + (t.status > 0 ? t.status + " - " : "");
                                e.isObject(t.response) && t.response.meta ? n += t.response.meta.message : n += t.response, i(n)
                            }
                        })
                    })).then(function() {
                        var t = e.map(u, function(e) {
                            return {
                                id: e.id,
                                mod_date: e.mod_date,
                                needs_pushing: "false"
                            }
                        });
                        return s.storage.updateAll(i.QUESTION_RESPONSES, t, null, "mod_date")
                    }).then(function() {
                        var t = [];
                        e.each(u, function(e) {
                            e.pushed_once || t.push({
                                id: e.id,
                                pushed_once: !0
                            })
                        });
                        if (t.length > 0) return s.storage.updateAll(i.QUESTION_RESPONSES, t)
                    })
                })
            },
            pushSessions: function(n) {
                var s = this;
                return this.storage.getAllByIndexWithValue(i.SESSIONS, "needs_pushing", "true").then(function(o) {
                    var u = e.filter(o, function(e) {
                        return e.consumer_key === n.consumer_key && e.user_id === n.user_id
                    });
                    return u.length === 0 ? r.resolve() : (new r(function(r, i) {
                        t.request({
                            url: "/push/sessions",
                            action: t.ACTION.UPDATE,
                            security: n,
                            data: {
                                sessions: u
                            },
                            success: function(e) {
                                r()
                            },
                            failure: function(t) {
                                var n = "Failed pushing sessions: " + (t.status > 0 ? t.status + " - " : "");
                                e.isObject(t.response) && t.response.meta ? n += t.response.meta.message : n += t.response, i(n)
                            }
                        })
                    })).then(function() {
                        var t = e.map(u, function(e) {
                            return {
                                session_id: e.session_id,
                                mod_date: e.mod_date,
                                needs_pushing: "false"
                            }
                        });
                        return s.storage.updateAll(i.SESSIONS, t, null, "mod_date")
                    })
                })
            },
            getDateString: function() {
                var e, t = new Date;
                return e = t.getUTCFullYear(), e += "-" + (t.getUTCMonth() + 1 < 10 ? "0" : "") + (t.getUTCMonth() + 1), e += "-" + (t.getUTCDate() < 10 ? "0" : "") + t.getUTCDate(), e += " " + (t.getUTCHours() < 10 ? "0" : "") + t.getUTCHours(), e += ":" + (t.getUTCMinutes() < 10 ? "0" : "") + t.getUTCMinutes(), e += ":" + (t.getUTCSeconds() < 10 ? "0" : "") + t.getUTCSeconds(), e
            }
        }
    }), LearnosityAmd.define("utils/uuid", [], function() {
        "use strict";
        return {
            check: /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-?[a-f0-9]{12}/,
            v4: function() {
                var e = (new Date).getTime(),
                    t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var n = (e + Math.random() * 16) % 16 | 0;
                        return e = Math.floor(e / 16), (t == "x" ? n : n & 3 | 8).toString(16)
                    });
                return t
            }
        }
    }), LearnosityAmd.define("models/activities/offline", ["vendor/lodash.underscore", "vendor/dom", "models/activity", "models/questionResponse", "models/offlineStorage", "error", "utils/uuid", "utils/promise"], function(e, t, n, r, i, s, o, u) {
        "use strict";
        return n.extend({
            initialize: function() {
                n.prototype.initialize.call(this), this.saving = !1, this.cachedSaveCallArguments = null, this.appendedQuestionsToFetch = {}, this.retrievedQuestionResponsesCache = {}
            },
            append: function(t) {
                e.isObject(t) && t.new_questions === !1 && e.isArray(t.questions) && e.each(t.questions, function(e) {
                    e && e.response_id && (this.appendedQuestionsToFetch[e.response_id] = !0)
                }, this), n.prototype.append.call(this, t)
            },
            validateActivity: function() {
                n.prototype.validateActivity.call(this);
                try {
                    i.init()
                } catch (e) {
                    throw new this.ValidationError("initialising an offline_app type but indexed db is not supported in this browser")
                }
                if (this.has("session_id") && !o.check.test(this.get("session_id").toLowerCase())) throw new this.ValidationError('"session_id" attribute is not a valid UUID');
                if (this.get("renderSubmitButton") && t(".learnosity-submit-button").length === 0) throw new this.ValidationError('"renderSubmitButton" attribute is true, but no DOM element was found to render');
                if (this.get("renderSaveButton") && t(".learnosity-save-button").length === 0) throw new this.ValidationError('"renderSaveButton" attribute is true, but no DOM element was found to render');
                if (this.has("responses")) throw new this.ValidationError('"responses" attribute found in Activity, but not supported for type: ' + this.get("type"))
            },
            initialiseQuestionResponses: function(t, o) {
                if (this.get("state") === this.STATE.RESUME || this.get("state") === this.STATE.REVIEW) {
                    var u = this,
                        a = e.map(t, function(e) {
                            return r.prototype.getIdForResponseId(e.response_id, this.get("user_id"), this.get("consumer").get("id"))
                        }, this);
                    i.getQuestionResponses(a).then(function(n) {
                        return e.each(n, function(e) {
                            u.retrievedQuestionResponsesCache[e.id] = e
                        }), !u.has("session_id") && n.length > 0 && e.isString(n[0].session_id) && u.set({
                            session_id: n[0].session_id
                        }, {
                            silent: !0
                        }), e.map(a, function(r, i) {
                            var s = t[i],
                                a = e.findWhere(n, {
                                    id: r
                                }),
                                f = e.keys(s).length === 1;
                            if (a) f && (s = a.question);
                            else if (o) u.appendedQuestionsToFetch[s.response_id] && !u.get("captureOnResumeError") && (s.error = 10005);
                            else if (!u.get("captureOnResumeError") || f) s.error = 10005;
                            return s
                        })
                    }, function(n) {
                        return u.get("captureOnResumeError") || e.each(t, function(e) {
                            e.error = 10005
                        }), s.log(n), t
                    }).then(function(e) {
                        n.prototype.initialiseQuestionResponses.call(u, e)
                    })
                } else n.prototype.initialiseQuestionResponses.call(this, t)
            },
            hasToLoadResponsesIntoQuestionResponses: function() {
                return this.get("state") == this.STATE.RESUME || this.get("state") == this.STATE.REVIEW
            },
            loadResponsesIntoQuestionResponses: function(t) {
                e.each(this.retrievedQuestionResponsesCache, function(t) {
                    if (!e.isObject(t)) return;
                    var n = this.get("questionResponses").get(t.id);
                    this.retrievedQuestionResponsesCache[t.id] = !0, n.update({
                        creation_date: t.creation_date,
                        response: t.response,
                        saved: !0
                    })
                }, this), t()
            },
            save: function(e) {
                if (this.saving) {
                    this.cacheSaveCall(Array.prototype.slice.call(arguments));
                    return
                }
                this.saving = !0, this.trigger(this.EVENT.SAVE);
                var t = this.get("questionResponses").getInvalidQuestionResponses();
                if (t.length > 0) {
                    this.saving = !1, this.saveFailedInvalidQuestions(e, t);
                    return
                }
                var n, r = this.get("questionResponses").getQuestionResponsesModificationTimes(),
                    s = this;
                e.submit && !this.has("session_id") ? (this.set({
                    session_id: o.v4()
                }, {
                    silent: !0
                }), n = this.get("questionResponses").models) : n = this.get("questionResponses").filter(function(e) {
                    return e.toBeSaved()
                }), i.saveQuestionResponses(n, this.get("session_id"), this.get("consumer").get("key")).then(function() {
                    return s.saveSession(e, s.get("questionResponses").pluck("id"))
                }).then(function() {
                    s.saving = !1, s.saveComplete(e, n, r)
                }, function(t) {
                    s.saving = !1, s.saveFailed(e, t)
                }).then(function() {
                    s.callCachedSaveCall()
                }), e.submit && this.get("validateOnSubmit") && this.validateQuestionsResponses()
            },
            saveSession: function(t, n) {
                t && t.progress && t.progress({
                    state: "saving",
                    percentage: 90,
                    bytesTotal: 0,
                    bytesUploaded: 0
                });
                if (!this.has("session_id") || !this.get("consumer").get("dashboardEnabled")) return u.resolve();
                if (!e.isString(this.get("id")) || this.get("id").length > 36) return u.reject('must initialise with an "id" attribute that doesn\'t exceed 36 characters in length');
                if (!e.isString(this.get("name"))) return u.reject('must initialise with a "name" attribute');
                if (!e.isString(this.get("course_id"))) return u.reject('must initialise with a "course_id" attribute');
                if (this.has("description") && (!e.isString(this.get("description")) || this.get("description").length > 800)) return u.reject('initialised with a "description" attribute that is not a valid string of less than 801 characters');
                var r = {
                    session_id: this.get("session_id"),
                    user_id: this.get("user_id"),
                    activity_id: this.get("id"),
                    activity_name: this.get("name"),
                    course_id: this.get("course_id"),
                    consumer_key: this.get("consumer").get("key"),
                    questions: n
                };
                return t.submit && (r.submit = !0), this.has("description") && (r.activity_description = this.get("description")), this.has("product_id") && (r.product_id = this.get("product_id")), e.isObject(this.get("metadata")) || e.isObject(t.metadata) ? r.metadata = e.extend({}, this.get("metadata"), t.metadata) : r.metadata = {}, r.metadata.user_agent = window.navigator.userAgent, i.saveSession(r)
            },
            saveComplete: function(t, n, r) {
                e.each(n, function(e) {
                    e.getLastModifiedTime() === r[e.id] && e.setAsSaved()
                }), t && t.progress && t.progress({
                    state: "saving",
                    percentage: 100,
                    bytesTotal: 0,
                    bytesUploaded: 0
                }), t && (t.submit ? this.trigger(this.EVENT.SUBMITTED) : this.trigger(this.EVENT.SAVED), t.success && t.success(e.map(n, function(e) {
                    return e.get("response_id")
                })))
            },
            saveFailed: function(t, n) {
                var r = {
                    i18n: this.get("i18n")
                };
                e.isString(n) && n.indexOf("ConstraintError") !== -1 ? (r.code = 10002, r.detail = "At least one of the response_id has been previously provided") : (r.code = 10004, r.detail = "Save responses failed" + (n ? ": " + n.toString() : "")), s.exception(r, t ? t.error : null)
            },
            saveFailedInvalidQuestions: function(t, n) {
                var r = [],
                    i = [];
                e.each(n, function(e) {
                    r.push('Question "' + e.get("response_id") + '" of type "' + e.get("type") + '" has an invalid response'), i.push(e.get("response_id"))
                }), s.exception({
                    code: 10013,
                    detail: r.join(", "),
                    response_id: i,
                    i18n: this.get("i18n")
                }, t ? t.error : null)
            },
            discard: function(e) {
                throw '"discard" public method is not supported on type: offline_app'
            },
            callCachedSaveCall: function() {
                if (e.isArray(this.cachedSaveCallArguments)) {
                    var t = this.cachedSaveCallArguments;
                    this.clearCachedSaveCall(), this.save.apply(this, t)
                }
            },
            cacheSaveCall: function(e) {
                this.cachedSaveCallArguments = e
            },
            clearCachedSaveCall: function() {
                this.cachedSaveCallArguments = null
            }
        })
    }), LearnosityAmd.define("models/activities/submittable", ["vendor/lodash.underscore", "vendor/dom", "comms", "error", "models/activity", "models/questionResponse", "utils/json", "utils/uuid"], function(e, t, n, r, i, s, o, u) {
        "use strict";
        return i.extend({
            initialize: function() {
                i.prototype.initialize.call(this), this.questionsBeingCaptured = {}, this.questionResponseIdsToFetch = {}, this.fetchedQuestionResponses = {}, this.saving = !1, this.cachedSaveCallArguments = null, this.on(this.EVENT.READY, function() {
                    (this.get("state") === this.STATE.INITIAL || this.get("state") === this.STATE.RESUME) && this.captureQuestionResponses()
                }, this)
            },
            append: function(t) {
                e.isObject(t) && t.new_questions === !1 && e.isArray(t.questions) && e.each(this.makeQuestionResponseIds(e.pluck(t.questions, "response_id")), function(e) {
                    this.questionResponseIdsToFetch[e] = !0
                }, this), i.prototype.append.call(this, t)
            },
            validateActivity: function() {
                i.prototype.validateActivity.call(this);
                if (this.get("consumer").get("dashboardEnabled")) {
                    if (!e.isString(this.get("id"))) throw new this.ValidationError('Valid "id" attribute missing from Activity');
                    if (this.get("id").length > 36) throw new this.ValidationError('"id" attribute should not exceed 36 characters');
                    if (this.get("user_id").length > 50) throw new this.ValidationError('"user_id" attribute should not exceed 50 characters');
                    if (this.get("response_id") && this.get("response_id").length > 100) throw new this.ValidationError('"response_id" attribute should not exceed 100 characters');
                    if (!e.isString(this.get("name"))) throw new this.ValidationError('Valid "name" attribute missing from Activity');
                    if (!e.isString(this.get("course_id"))) throw new this.ValidationError('Valid "course_id" attribute missing from Activity');
                    if (this.has("description") && (!e.isString(this.get("description")) || this.get("description").length > 800)) throw new this.ValidationError('Provided "description" attribute is not a valid string of less than 801 characters');
                    if (this.has("session_id") && !u.check.test(this.get("session_id").toLowerCase())) throw new this.ValidationError('"session_id" attribute is not a valid UUID')
                }
                if (this.get("renderSubmitButton") && t(".learnosity-submit-button").length === 0) throw new this.ValidationError('"renderSubmitButton" attribute is true, but no DOM element was found to render');
                if (this.get("renderSaveButton") && t(".learnosity-save-button").length === 0) throw new this.ValidationError('"renderSaveButton" attribute is true, but no DOM element was found to render');
                if (this.has("responses")) throw new this.ValidationError('"responses" attribute found in Activity, but not supported for type: ' + this.get("type"))
            },
            initialiseQuestionResponses: function(t, n) {
                var r = this.makeQuestionResponseIds(e.pluck(t, "response_id")),
                    o = this.haveToFetchQuestionResponses() && e.some(t, function(t) {
                        return e.keys(t).length === 1
                    });
                this.haveToFetchQuestionResponses() && !n && e.each(r, function(e) {
                    this.questionResponseIdsToFetch[e] = !0
                }, this), o ? this.getQuestionResponses(r, e.bind(function() {
                    var t = [];
                    e.each(this.fetchedQuestionResponses, function(e) {
                        e.hasOwnProperty("question") || (e.question = {
                            response_id: s.prototype.getResponseId(e.id, this.get("user_id"), this.get("consumer").get("id")),
                            error: e.error
                        }), t.push(e.question)
                    }, this), i.prototype.initialiseQuestionResponses.call(this, t)
                }, this)) : i.prototype.initialiseQuestionResponses.call(this, t)
            },
            makeQuestionResponseIds: function(t) {
                return e.map(t, function(e) {
                    return s.prototype.getIdForResponseId(e, this.get("user_id"), this.get("consumer").get("id"))
                }, this)
            },
            hasToLoadResponsesIntoQuestionResponses: function() {
                return e.some(this.questionResponseIdsToFetch) && this.haveToFetchQuestionResponses()
            },
            loadResponsesIntoQuestionResponses: function(t) {
                var n = this.get("questionResponses").filter(function(t) {
                    return e.isUndefined(this.fetchedQuestionResponses[t.get("id")])
                }, this);
                if (n.length) {
                    var r = e.pluck(n, "id");
                    this.getQuestionResponses(r, e.bind(function() {
                        this.setResponsesFromQuestionResponsesCache(), t()
                    }, this))
                } else this.setResponsesFromQuestionResponsesCache(), t()
            },
            haveToFetchQuestionResponses: function() {
                return this.get("state") === this.STATE.RESUME || this.get("state") === this.STATE.REVIEW
            },
            setResponsesFromQuestionResponsesCache: function() {
                e.each(this.fetchedQuestionResponses, function(t) {
                    if (!e.isObject(t)) return;
                    var n = this.get("questionResponses").get(t.id);
                    this.fetchedQuestionResponses[t.id] = !0, this.questionResponseIdsToFetch[t.id] = !1, n.has("question") && delete t.question, t.error === 10005 && this.get("captureOnResumeError") && n.has("question") && delete t.error, n.update(t)
                }, this)
            },
            isCapturingQuestions: function() {
                return !e.isEmpty(this.questionsBeingCaptured)
            },
            allQuestionsCaptured: function() {
                return this.get("questionResponses").every(function(e) {
                    return e.isCaptured()
                })
            },
            captureQuestionResponses: function() {
                if (!this.questionResponsesReady) return;
                var t = this.get("questionResponses").getToBeCapturedQuestionResponseJson();
                t = e.filter(t, function(e) {
                    return !this.questionsBeingCaptured[e.id]
                }, this);
                if (t.length === 0) return;
                var i = this;
                e.each(t, function(e) {
                    this.questionsBeingCaptured[e.id] = !0
                }, this);
                var s = function() {
                    e.each(t, function(e) {
                        delete i.questionsBeingCaptured[e.id]
                    })
                };
                n.request({
                    url: "/questionresponses",
                    action: n.ACTION.SET,
                    security: this.get("security").getRequestParameters(),
                    data: {
                        questionResponses: t
                    },
                    success: function(e) {
                        i.get("questionResponses").markAsCaptured(e.response.data), s(), i.callCachedSaveCall()
                    },
                    failure: function(t) {
                        s();
                        if (t && t.status == 409) r.exception({
                            code: 10002,
                            detail: "At least one of the response_id has been previously provided",
                            i18n: i.get("i18n")
                        });
                        else {
                            var n = {
                                code: 10016,
                                detail: "There was an error trying to capture the questions",
                                i18n: i.get("i18n")
                            };
                            t && (n.detail += ": " + t.status + " - ", e.isObject(t.response) && t.response.meta ? n.detail += t.response.meta.message : n.detail += t.response), i.get("uiErrorOnCaptureFailure") || (n.errorUI = "none"), r.exception(n)
                        }
                        i.clearCachedSaveCall()
                    }
                })
            },
            getQuestionResponses: function(t, i) {
                var s = this;
                e.each(t, function(e) {
                    this.fetchedQuestionResponses[e] = !0
                }, this), n.request({
                    url: "/questionresponses",
                    action: n.ACTION.GET,
                    security: this.get("security").getRequestParameters(),
                    data: {
                        questionResponseIds: t
                    },
                    success: function(t) {
                        e.each(t.response.data, function(e) {
                            s.fetchedQuestionResponses[e.id] = e
                        }), i()
                    },
                    failure: function(e) {
                        r.exception({
                            code: 10025,
                            detail: "Status: " + e.status + (e.status === -1 ? ", " + e.response : ""),
                            i18n: s.get("i18n")
                        })
                    }
                })
            },
            persistQuestionResponses: function(t, i) {
                var s = this,
                    o = {},
                    u = function(e) {
                        t && t.progress && t.progress({
                            state: "saving",
                            percentage: 100,
                            bytesTotal: i.totalBytes,
                            bytesUploaded: i.bytesUploaded
                        }), t && (t.submit ? s.trigger(s.EVENT.SUBMITTED) : s.trigger(s.EVENT.SAVED), t.success && t.success(e)), s.callCachedSaveCall()
                    },
                    a = t.submit || this.has("session_id");
                a && (o.submit = t.submit, o.state = this.get("state"), o.user_id = this.get("user_id"), o.activity_id = this.get("id"), o.activity_name = this.get("name"), this.has("description") && (o.activity_description = this.get("description")), o.course_id = this.get("course_id"), this.has("product_id") && (o.product_id = this.get("product_id")), this.has("session_id") && (o.session_id = this.get("session_id")), e.isObject(this.get("metadata")) || e.isObject(t.metadata) ? o.metadata = e.extend({}, this.get("metadata"), t.metadata) : o.metadata = {}, o.metadata.user_agent = window.navigator.userAgent), o.questionResponses = this.get("questionResponses").getToBeSavedQuestionResponseJson();
                if (o.questionResponses.length > 0 || a) {
                    var f = this.get("questionResponses").getQuestionResponsesModificationTimes();
                    n.request({
                        url: "/questionresponses",
                        action: n.ACTION.UPDATE,
                        security: this.get("security").getRequestParameters(),
                        data: o,
                        success: function(e) {
                            var t = e.response.data;
                            s.saving = !1, s.get("questionResponses").markAsSavedIfModified(t, f), u(s.get("questionResponses").getResponseIds(t))
                        },
                        failure: function(n) {
                            s.saving = !1;
                            var i = t ? t.error : undefined,
                                o = {
                                    code: 10004,
                                    detail: "Save responses failed",
                                    i18n: s.get("i18n")
                                };
                            n && (o.detail += ": " + n.status, e.isObject(n.response) && n.response.meta ? o.detail += " - " + n.response.meta.message : o.detail += " - " + n.response), r.exception(o, i), s.callCachedSaveCall()
                        }
                    })
                } else s.saving = !1, u([])
            },
            checkSaveProgressThenPersistQuestionResponses: function(t) {
                var n = !0,
                    r = 0,
                    i = 0;
                e.each(this.hooks.saveProgress, function(t) {
                    if (e.isFunction(t)) {
                        var s = t();
                        n = n && s.uploadComplete, r += s.bytesUploaded, i += s.totalBytes
                    }
                });
                if (n) t.progress && t.progress({
                    state: "saving",
                    percentage: 90,
                    bytesTotal: i,
                    bytesUploaded: r
                }), this.persistQuestionResponses(t, {
                    totalBytes: i,
                    bytesUploaded: r
                });
                else {
                    if (t.progress) {
                        var s = "uploading",
                            o = Math.round(r / i * 85);
                        i == r && (s = "saving"), t.progress({
                            state: s,
                            percentage: o,
                            bytesTotal: i,
                            bytesUploaded: r
                        })
                    }
                    e.delay(e.bind(this.checkSaveProgressThenPersistQuestionResponses, this), 500, t)
                }
            },
            save: function(t) {
                if (!this.isCapturingQuestions() && !this.saving)
                    if (this.allQuestionsCaptured()) {
                        this.saving = !0, this.trigger(this.EVENT.SAVE);
                        var n = this.get("questionResponses").getInvalidQuestionResponses();
                        if (!n.length) this.checkSaveProgressThenPersistQuestionResponses(t), t.submit && this.get("validateOnSubmit") && this.validateQuestionsResponses();
                        else {
                            this.saving = !1;
                            var i = t ? t.error : undefined,
                                s = [],
                                o = [];
                            e.each(n, function(e) {
                                s.push('Question "' + e.get("response_id") + '" of type "' + e.get("type") + '" has an invalid response'), o.push(e.get("response_id"))
                            }), r.exception({
                                code: 10013,
                                detail: s.join(", "),
                                response_id: o
                            }, i)
                        }
                    } else this.cacheSaveCall(Array.prototype.slice.call(arguments)), this.captureQuestionResponses();
                else this.cacheSaveCall(Array.prototype.slice.call(arguments))
            },
            discard: function(t) {
                var i = this;
                n.request({
                    url: "/questionresponses",
                    action: n.ACTION.DELETE,
                    security: this.get("security").getRequestParameters(),
                    data: {
                        activity_id: this.get("id"),
                        activity_name: this.get("name"),
                        course_id: this.get("course_id"),
                        session_id: this.get("session_id")
                    },
                    success: function(n) {
                        e.isFunction(t.success) && t.success(n), i.trigger(i.EVENT.DISCARDED)
                    },
                    failure: function(n) {
                        var s = t ? t.error : undefined,
                            o = {
                                code: 10021,
                                detail: "Discard responses failed",
                                i18n: i.get("i18n")
                            };
                        n && (o.detail += ": " + n.status, e.isObject(n.response) && n.response.meta ? o.detail += " - " + n.response.meta.message : o.detail += " - " + n.response), r.exception(o, s)
                    }
                })
            },
            callCachedSaveCall: function() {
                if (e.isArray(this.cachedSaveCallArguments)) {
                    var t = this.cachedSaveCallArguments;
                    this.clearCachedSaveCall(), this.save.apply(this, t)
                }
            },
            cacheSaveCall: function(e) {
                this.cachedSaveCallArguments = e
            },
            clearCachedSaveCall: function() {
                this.cachedSaveCallArguments = null
            }
        })
    }), LearnosityAmd.define("activityFactory", ["models/activities/local", "models/activities/offline", "models/activities/submittable"], function(e, t, n) {
        "use strict";

        function i(i) {
            var s;
            switch (i.type) {
                case r.OFFLINE_APP:
                    s = new t(i);
                    break;
                case r.SUBMIT_PRACTICE:
                case r.TEST:
                    s = new n(i);
                    break;
                default:
                    s = new e(i)
            }
            return s
        }
        var r = e.prototype.TYPE;
        return {
            getActivity: i
        }
    }), LearnosityAmd.define("unload", ["vendor/lodash.underscore", "config", "utils/browserCheck"], function(e, t, n) {
        "use strict";

        function o() {
            t.unloadInProgress = !0, setTimeout(function() {
                setTimeout(function() {
                    t.unloadInProgress = !1
                }, 1e3)
            }, 1);
            if (!e.isNull(s)) return s();
            for (var n = 0; n < r.length; n++)
                if (!r[n]()) return i[n].labels.onbeforeunload;
            return undefined
        }

        function u(e, t) {
            r.push(e), i.push(t)
        }

        function a() {
            !n.isChromeApp && window.onbeforeunload === o && (window.onbeforeunload = null), r = [], i = []
        }

        function f(t) {
            !n.isChromeApp && window.onbeforeunload != o && (e.isNull(window.onbeforeunload) || (s = window.onbeforeunload), window.onbeforeunload = o)
        }
        var r = [],
            i = [],
            s = null;
        return {
            init: f,
            setSafeToUnload: u,
            reset: a
        }
    }), LearnosityAmd.define("models/security", ["vendor/backbone", "config", "utils/json"], function(e, t, n) {
        "use strict";
        return e.Model.extend({
            defaults: {
                domain: t.domain
            },
            initialize: function() {
                var e = this.get("timestamp");
                this.set({
                    timeStampDate: new Date(e.substr(0, 4) + "-" + e.substr(4, 2) + "-" + e.substr(6, 2))
                }, {
                    silent: !0
                })
            },
            getRequestParameters: function() {
                var e = {
                    consumer_key: this.get("consumer_key"),
                    domain: this.get("domain"),
                    timestamp: this.get("timestamp"),
                    user_id: this.get("user_id"),
                    signature: this.get("signature")
                };
                return this.has("expires") && (e.expires = this.get("expires")), e
            },
            getTimestamp: function() {
                var e = this.get("timestamp");
                return Date.UTC(e.substr(0, 4), parseInt(e.substr(4, 2), 10) - 1, e.substr(6, 2))
            }
        })
    }), LearnosityAmd.define("models/consumer", ["vendor/backbone", "vendor/lodash.underscore"], function(e, t) {
        "use strict";
        return e.Model.extend({
            initialize: function() {
                var e = ["0003", "0005", "0006", "0007", "0044", "0045"];
                this.set({
                    requireQuestionType: !t.contains(e, this.get("id"))
                })
            }
        })
    }), LearnosityAmd.define("templates/utils/saveSubmitButton", ["vendor/lodash.underscore"], function(_) {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div id="' + ((__t = id) == null ? "" : __t) + '" class="lrn lrn_widget"><button type="button" class="' + ((__t = displayLogic.submit ? "lrn_submit_button" : "lrn_save_button") == null ? "" : __t) + ' lrn_btn"' + ((__t = displayLogic.disabled ? 'disabled="disabled"' : "") == null ? "" : __t) + "><span>" + ((__t = displayLogic.label) == null ? "" : __t) + "</span></button></div>";
            return __p
        }
    }), LearnosityAmd.define("views/persistButton", ["vendor/backbone", "vendor/lodash.underscore", "vendor/dom", "templates/utils/saveSubmitButton"], function(e, t, n, r) {
        "use strict";
        return e.View.extend({
            template: r,
            progressCalledFirstTime: !1,
            events: {
                "click .lrn_btn:not(:disabled)": "persistQuestions"
            },
            initialize: function() {
                this.activity = this.options.activity, this.i18n = this.activity.get("i18n"), this.app = this.options.app;
                var e = ".learnosity-save-button";
                this.options.submit && (e = ".learnosity-submit-button");
                var r = n(e + ".activity-" + this.activity.get("localActRef"));
                this.activity.has("localActRef") && r.length > 0 ? this.setElement(r[0]) : this.setElement(t.find(n(e), function(e) {
                    var t = e.className.split(/\s+/),
                        n = !1;
                    for (var r = 0; r < t.length && !n; r++) n = n || t[r].indexOf("activity-") === 0;
                    return !n
                }));
                var i = this.activity.get("questionResponses");
                i.bind(i.EVENT.MODIFIED, this.questionModifiedHandler, this), this.activity.on(this.activity.EVENT.SAVED, t.bind(this.activityPersistHandler, this, this.activity.EVENT.SAVED)), this.activity.on(this.activity.EVENT.SUBMITTED, t.bind(this.activityPersistHandler, this, this.activity.EVENT.SUBMITTED)), this.displayLogic = {}, this.addRenderingLogic(), this.render()
            },
            render: function() {
                var e = (this.activity.id ? this.activity.id : this.cid) + (this.options.submit ? "-submit" : "-save"),
                    t = this.$el,
                    r = n(this.template({
                        id: e,
                        displayLogic: this.displayLogic
                    }));
                return this.setElement(r), t.replaceWith(r), this
            },
            addRenderingLogic: function() {
                this.displayLogic.submit = this.options.submit, this.displayLogic.label = this.options.submit ? this.i18n.labels.submitButtonLabel : this.i18n.labels.saveButtonLabel, this.displayLogic.disabled = !this.activity.get("questionResponses").areThereQuestionsModified()
            },
            questionModifiedHandler: function() {
                !this.activity.saving && this.$(".lrn_btn:disabled").length > 0 && this.$(".lrn_btn").removeAttr("disabled").children("span").text(this.options.submit ? this.i18n.labels.submitButtonLabel : this.i18n.labels.saveButtonLabel)
            },
            activityPersistHandler: function(e) {
                (e == this.activity.EVENT.SUBMITTED || !this.options.submit) && this.$(".lrn_btn").attr("disabled", "disabled")
            },
            persistQuestions: function() {
                var e = {
                    success: t.bind(this.successHandler, this),
                    progress: t.bind(this.progressHandler, this)
                };
                this.options.submit ? this.app.submit(e) : this.app.save(e)
            },
            successHandler: function(e) {
                this.$(".lrn_spinner").remove(), this.$(".lrn_btn span").text(this.options.submit ? this.i18n.labels.submitComplete : this.i18n.labels.saveComplete), this.progressCalledFirstTime = !1, this.app.options && this.app.options.saveSuccess && this.app.options.saveSuccess(e)
            },
            progressHandler: function(e) {
                if (this.$(".lrn_spinner").length === 0) {
                    var t = this.options.submit ? this.i18n.labels.submitInProgress : this.i18n.labels.saveInProgress;
                    !this.progressCalledFirstTime && parseInt(e.percentage, 10) > 85 ? (this.$(".lrn_btn").prepend('<div class="lrn_spinner"></div>'), this.$(".lrn_btn span").text(t)) : this.$(".lrn_btn span").text(t + " " + e.percentage + "%")
                }
                this.progressCalledFirstTime = !0, this.app.options && this.app.options.saveProgress && this.app.options.saveProgress(e)
            }
        })
    }), LearnosityAmd.define("utils/mathjaxLoader", ["require", "vendor/backbone", "vendor/lodash.underscore", "utils/featureDetection", "config"], function(e, t, n, r, i) {
        "use strict";
        var s = !1;
        return n.extend({
            EVENT: {
                RENDERED: "rendered"
            },
            isInitalised: function() {
                return !n.isUndefined(window.MathJax) || s
            },
            init: function() {
                if (n.isUndefined(window.MathJax) && !s) {
                    s = !0;
                    var r = this,
                        o = [e.toUrl("vendor/MathJax/MathJax.js?delayStartupUntil=configured"), "vendor/MathJax/lrnConfig"];
                    e(o, function(e, t) {
                        e.cdnVersion = "", e.OutputJax.fontDir = i.assetsHost + "/fonts/MathJax", e.OutputJax.imageDir = i.assetsHost + "/images/MathJax", e.Hub.Register.StartupHook("Begin Config", function(n) {
                            t.config(e), e.Hub.Config({
                                    messageStyle: "none",
                                    showMathMenu: !1,
                                    tex2jax: {
                                        ignoreClass: "lrn_noMath"
                                    },
                                    jax: ["output/HTML-CSS"],
                                    TeX: {
                                        Macros: {
                                            abs: ["{|#1|}", 1],
                                            degree: ["{^\\circ}"],
                                            longdiv: ["{\\enclose{longdiv}{#1}}", 1],
                                            atomic: ["{_{#1}^{#2}}", 2],
                                            polyatomic: ["{_{#2}{}^{#1}}", 2],
                                            circledot: ["{\\odot}"],
                                            parallelogram: ["\\unicode{x25B1}"],
                                            ngtr: ["\\unicode{x226F}"],
                                            nless: ["\\unicode{x226E}"]
                                        }
                                    },
                                    "HTML-CSS": {
                                        availableFonts: ["TeX"],
                                        minScaleAdjust: 100,
                                        matchFontHeight: !1,
                                        imageFont: null
                                    }
                                }), e.InputJax.TeX.prefilterHooks.Add(function(e) {
                                    e.math = e.math.replace(/('|")/g, function(e, t) {
                                        return "{}^" + (t === "'" ? "\\prime " : "{\\prime\\prime}")
                                    })
                                }),
                                function() {
                                    if (e.Extension.MathZoom.msieSizeBug) {
                                        var t = e.Extension.MathZoom.Zoom;
                                        e.Extension.MathZoom.Zoom = function() {
                                            var n = t.apply(e.Extension.MathZoom, arguments),
                                                r = document.getElementById("MathJax_Zoom");
                                            return r.style.height = "auto", r.style.width = "auto", n
                                        }
                                    }
                                }(), e.Hub.Configured(), s = !1, e.Hub.Register.StartupHook("End", function() {
                                    r.trigger(r.EVENT.RENDERED)
                                })
                        })
                    })
                }
            },
            render: function() {
                if (!s && window.MathJax) {
                    var t = this;
                    window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub], function() {
                        t.trigger(t.EVENT.RENDERED)
                    })
                }
            },
            remove: function(t) {
                var r, i;
                if (t && !s && window.MathJax) {
                    i = window.MathJax.Hub.getAllJax(t);
                    if (n.isArray(i))
                        for (r = 0; r < i.length; r++) window.MathJax.Hub.Queue(["Remove", i[r]])
                }
            }
        }, t.Events)
    }), LearnosityAmd.define("activityRenderer", ["vendor/dom", "vendor/backbone", "vendor/lodash.underscore", "error", "views/persistButton", "utils/mathquillRenderer", "utils/mathjaxLoader"], function(e, t, n, r, i, s, o) {
        "use strict";
        var u = function() {
                this.questionViews = {}, this.featureViews = {}, this.qrGroupFeatureViews = {}, this.submitButtonRendered = !1, this.saveButtonRendered = !1, this.pendingViews = {}
            },
            a = {
                FEATURE: "feature-",
                QUESTION: "question-"
            };
        return n.extend(u.prototype, t.Events, {
            EVENT: {
                VIEWS_RENDERED: "viewsRendered",
                READY: "ready"
            },
            render: function(e, t) {
                var s = this,
                    u = [],
                    f = !1,
                    l = !1,
                    c = e.get("featureModels"),
                    h = e.get("questionResponses"),
                    p = e.qrGroupFeatures;
                c = c.filter(function(e) {
                    return n.isUndefined(this.featureViews[e.get("feature_id")]) && !this.pendingViews[a.FEATURE + e.get("feature_id")]
                }, this), h = h.filter(function(e) {
                    return n.isUndefined(this.questionViews[e.id]) && !this.pendingViews[a.QUESTION + e.id]
                }, this), p = n.filter(p, function(e) {
                    return n.isUndefined(this.qrGroupFeatureViews[e.get("groupId")])
                }, this), l = e.get("math_renderer") === "mathquill", f = e.get("math_renderer") !== "mathquill" && (n.any(h, function(e) {
                    var t = e.get("question");
                    return t.is_math && t.math_renderer !== "mathquill"
                }) || n.any(c, function(e) {
                    return e.get("is_math") && e.get("math_renderer") !== "mathquill"
                })), n.each(c, function(e) {
                    this.pendingViews[a.FEATURE + e.get("feature_id")] = !0
                }, this), n.each(h, function(e) {
                    this.pendingViews[a.QUESTION + e.id] = !0
                }, this), this.once(this.EVENT.VIEWS_RENDERED, function() {
                    l ? (this.renderMathquill(), this.trigger(this.EVENT.READY)) : f ? (o.once(o.EVENT.RENDERED, function() {
                        this.trigger(this.EVENT.READY)
                    }, this), o.isInitalised() ? o.render() : o.init()) : this.trigger(this.EVENT.READY)
                }, this), n.each(c, n.deferWithContext(function(r) {
                    var i = {
                            el: ".learnosity-feature.feature-" + r.get("feature_id"),
                            model: r,
                            i18n: e.get("i18n"),
                            activity: e,
                            initialisationCallback: n.bind(s.viewIntialised, s, a.FEATURE + r.get("feature_id"))
                        },
                        o = new r.viewClass(i);
                    s.featureViews[r.get("feature_id")] = o, t.addFeatureFacade(r.get("feature_id"), o.getFacade())
                })), n.each(h, function(i, o) {
                    n.defer(function() {
                        var r = {
                                el: ".learnosity-response.question-" + i.get("response_id"),
                                model: i,
                                activity: e,
                                initialisationCallback: n.bind(s.viewIntialised, s, a.QUESTION + i.id),
                                questionNumber: o + 1
                            },
                            u = i.viewClass,
                            f = new u(r);
                        s.questionViews[i.id] = f, t.addQuestionFacade(i.get("response_id"), f.getFacade())
                    });
                    if (i.has("error")) {
                        var f = i.get("response_id");
                        switch (i.get("error")) {
                            case 10005:
                                u.push({
                                    code: 10005,
                                    detail: "Response id " + f + " not found.",
                                    response_id: f
                                });
                                break;
                            case 10007:
                                u.push({
                                    code: 10007,
                                    detail: "Authorisation failed. User id did not match user id of creator for " + f,
                                    response_id: f
                                });
                                break;
                            case 10010:
                                u.push({
                                    code: 10010,
                                    detail: "Audio asset expired. The asset for response_id " + f + " is no longer available.",
                                    response_id: f
                                });
                                break;
                            default:
                                r.log("Unknown error: " + i.get("error") + " on response_id: " + f)
                        }
                    }
                }), n.each(p, function(t) {
                    var i = t.viewClass;
                    if (!n.isUndefined(i)) {
                        var o = new i({
                            id: t.id,
                            collection: t,
                            activity: e
                        });
                        s.qrGroupFeatureViews[t.get("groupId")] = o
                    } else r.log("Question group feature: " + t.id + " doesn`'t have a View defined")
                });
                if (e.get("renderSubmitButton") && !this.submitButtonRendered) {
                    var d = new i({
                        submit: !0,
                        activity: e,
                        app: t
                    });
                    this.submitButtonRendered = !0
                }
                if (e.get("renderSaveButton") && !this.saveButtonRendered) {
                    var v = new i({
                        submit: !1,
                        activity: e,
                        app: t
                    });
                    this.saveButtonRendered = !0
                }
                if (u.length > 0) {
                    var m = e.get("i18n");
                    for (var g = 0; g < u.length; g++) u[g].i18n = m, r.exception(u[g])
                }
                h.length + c.length === 0 && this.trigger(this.EVENT.VIEWS_RENDERED)
            },
            renderMathquill: function() {
                this.mathquillRenderer || (this.mathquillRenderer = new s), this.mathquillRenderer.render()
            },
            viewIntialised: function(e) {
                this.pendingViews[e] = !1;
                var t = n.every(this.pendingViews, function(e) {
                    return !e
                });
                t && this.trigger(this.EVENT.VIEWS_RENDERED)
            }
        }), u
    }), LearnosityAmd.define("utils/storage/keyed", ["vendor/lodash.underscore", "utils/json", "utils/promise"], function(e, t, n) {
        "use strict";

        function o() {
            var e = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
            if (e) try {
                var t = e.open(r.dbName + "_", r.dbVersion);
                return t.onsuccess = t.onerror = function() {
                    e.deleteDatabase(r.dbName + "_")
                }, !0
            } catch (n) {}
            return !1
        }

        function u(e, t) {
            return (t.namespace || "") + e
        }

        function a(e) {
            return t.stringify(e)
        }

        function f(e) {
            if (typeof e != "string") return undefined;
            try {
                return t.parse(e)
            } catch (n) {
                return e
            }
        }
        var r = {
                namespace: "lrn_",
                dbName: "LrnKeyedStorage",
                dbVersion: 1
            },
            i = function(t) {
                this.options = e.extend({}, r, t), this.initialised = !1
            };
        e.extend(i.prototype, {
            get: function(e) {
                var t = this;
                return this._initIndexedDB().then(function() {
                    return new n(function(n, r) {
                        var i = t._indexedDBTransaction().get(u(e, t.options));
                        i.onsuccess = function() {
                            n(i.result)
                        }, i.onerror = function(e) {
                            r("INDEXEDDB_ERR: get error: " + (e.target ? e.target.errorCode : e.message))
                        }
                    })
                })
            },
            set: function(e, t) {
                var r = this;
                return this._initIndexedDB().then(function() {
                    return new n(function(n, i) {
                        var s = r._indexedDBTransaction().put(t, u(e, r.options));
                        s.onsuccess = n, s.onerror = function(e) {
                            i("INDEXEDDB_ERR: set error: " + (e.target ? e.target.errorCode : e.message))
                        }
                    })
                })
            },
            remove: function(e) {
                var t = this;
                return this._initIndexedDB().then(function() {
                    return new n(function(n, r) {
                        var i = t._indexedDBTransaction()["delete"](u(e, t.options));
                        i.onsuccess = n, i.onerror = function(e) {
                            r("INDEXEDDB_ERR: remove error: " + (e.target ? e.target.errorCode : e.message))
                        }
                    })
                })
            },
            clear: function() {
                var e = this;
                return this._initIndexedDB().then(function() {
                    return new n(function(t, n) {
                        var r = e._indexedDBTransaction().clear();
                        r.onsuccess = function() {
                            t()
                        }, r.onerror = function(e) {
                            n("INDEXEDDB_ERR: clear error: " + (e.target ? e.target.errorCode : e.message))
                        }
                    })
                })
            },
            _initIndexedDB: function() {
                var e = this;
                return this.initialised || (this.initialised = !0, this.status = new n(function(t, n) {
                    e.storage = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
                    var r = e.storage.open(e.options.dbName, e.options.dbVersion);
                    r.onupgradeneeded = function(e) {
                        var t = e.target.result;
                        try {
                            var r = t.createObjectStore("storage")
                        } catch (i) {
                            i.name !== "ConstraintError" && n("INDEXEDDB_ERR: database create/upgrade error: " + (e.target ? e.target.errorCode : e.message))
                        }
                    }, r.onerror = function(e) {
                        n("INDEXEDDB_ERR: database open error: " + (e.target ? e.target.errorCode : e.message))
                    }, r.onsuccess = function(n) {
                        e.database = n.target.result, t()
                    }
                })), this.status
            },
            _indexedDBTransaction: function() {
                var e = this.database.transaction(["storage"], "readwrite"),
                    t = e.objectStore("storage");
                return t
            }
        });
        var s = function(t) {
            this.options = e.extend({}, r, t), this.storage = window.localStorage, this.isIndexed = !1
        };
        return e.extend(s.prototype, {
            get: function(e) {
                var t = this.storage.getItem(u(e, this.options));
                return n.resolve(f(t))
            },
            set: function(e, t) {
                var r = this,
                    i = function(n, i) {
                        r.storage.setItem(u(e, r.options), a(t)), n()
                    },
                    s = new n(i);
                return s.then(null, function() {
                    return r.remove(e), new n(i)
                }).then(null, function() {
                    return n.reject("LOCALSTORAGE_ERR: " + this.options.notInitialisedMessage)
                })
            },
            remove: function(e) {
                return this.storage.removeItem(u(e, this.options)), n.resolve()
            },
            clear: function() {
                return this.storage.clear(), n.resolve()
            }
        }), o() ? i : s
    }), LearnosityAmd.define("utils/validURLCheck", [], function() {
        "use strict";

        function e(e) {
            var t = new RegExp(".*\\/.*\\.css");
            return t.test(e)
        }

        function t(e) {
            var t = new RegExp("[/]{2}");
            return t.test(e)
        }
        return {
            DEFAULT_URL_SCHEME: "//",
            containsURLScheme: t,
            isExternalURL: e
        }
    }), LearnosityAmd.define("utils/cssLoader", ["utils/validURLCheck"], function(e) {
        "use strict";

        function n(n) {
            var r = e.isExternalURL(n),
                i;
            r ? (i = e.containsURLScheme(n), i || (n = e.DEFAULT_URL_SCHEME + n)) : n = t + n, LearnosityApp._internal.loadCss(n, r)
        }
        var t = "/stylesheets/css/clients/";
        return {
            loadClientCSS: n
        }
    }), LearnosityAmd.define("app", ["vendor/backbone", "vendor/lodash.underscore", "vendor/dom", "bundlesManager", "activityFactory", "comms", "config", "unload", "error", "models/security", "models/consumer", "models/activity", "models/questionResponse", "models/feature", "activityRenderer", "models/offlineStorage", "utils/analytics", "utils/browserCheck", "utils/json", "utils/storage/keyed", "utils/mathquillRenderer", "utils/mathjaxLoader", "utils/cssLoader", "utils/promise"], function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x) {
        "use strict";
        var T = function(e, r, s, o, c, h) {
                m.trackTimingStart("init", "app.js init");
                var p, v, w;
                e && (p = t.deepExtend({}, e)), r && (v = t.deepExtend({}, r)), this.resetInstanceVariables();
                var E = this;
                E.options = v, E.i18n = o;
                var x = new b;
                m.setActivity(p), E.options && (E.options.saveSuccess && (E.saveEventHandlers.success = E.options.saveSuccess), E.options.saveError && (E.saveEventHandlers.error = E.options.saveError), E.options.saveProgress && (E.saveEventHandlers.progress = E.options.saveProgress), E.options.discardSuccess && (E.discardEventHanders.success = E.options.discardSuccess), E.options.discardError && (E.discardEventHanders.error = E.options.discardError), E.options.context && (m.setContext(E.options.context), delete E.options.context)), u.setSafeToUnload(t.bind(E.safeToUnload, E), E.i18n), u.init(E.options && E.options.customUnload ? E.options.customUnload : !1);
                var T = function(e) {
                    var r = e.response.data;
                    if (!t.isObject(r) || !t.isString(r.id) || !t.isString(r.name)) {
                        a.exception({
                            code: 10003,
                            detail: "Authentication failed: consumer retrieved is invalid: " + y.stringify(r),
                            i18n: E.i18n
                        });
                        return
                    }
                    var o = {
                        id: r.id,
                        name: r.name,
                        key: p.consumer_key,
                        dashboardEnabled: r.dashboardEnabled
                    };
                    t.isString(r.cssFile) && (o.cssFile = r.cssFile);
                    var u = new l(o);
                    E.consumer = u, m.setConsumer(u), E.consumer.has("cssFile") && S.loadClientCSS(u.get("cssFile"));
                    var f = {
                        apiVersion: c,
                        requestedApiVersion: h,
                        state: p.state,
                        type: p.type,
                        user_id: p.user_id,
                        number_questions: t.isBoolean(p.number_questions) && p.number_questions,
                        questions: p.questions,
                        features: p.features,
                        responses: p.responses,
                        fontsize: p.fontsize,
                        math_renderer: p.math_renderer,
                        id: p.id,
                        name: p.name,
                        course_id: p.course_id || "none",
                        renderSubmitButton: p.renderSubmitButton,
                        renderSaveButton: p.renderSaveButton,
                        validateOnSubmit: t.isBoolean(p.validateOnSubmit) && p.validateOnSubmit,
                        showCorrectAnswers: p.showCorrectAnswers,
                        showInstructorStimulus: p.showInstructorStimulus,
                        security: E.security,
                        consumer: E.consumer,
                        i18n: E.i18n,
                        localActRef: s,
                        htmlCleaner: t.isBoolean(p.htmlCleaner) ? p.htmlCleaner : !0,
                        uiErrorOnCaptureFailure: !0,
                        captureOnResumeError: t.isBoolean(p.captureOnResumeError) && p.captureOnResumeError,
                        beta_flags: t.isObject(p.beta_flags) ? p.beta_flags : {}
                    };
                    p.hasOwnProperty("product_id") && (f.product_id = p.product_id), p.hasOwnProperty("description") && (f.description = p.description), p.hasOwnProperty("session_id") && (f.session_id = p.session_id), t.isObject(p.metadata) && (f.metadata = p.metadata), t.isBoolean(p.uiErrorOnCaptureFailure) ? f.uiErrorOnCaptureFailure = p.uiErrorOnCaptureFailure : t.isBoolean(p.retryCaptureOnFailure) && (f.uiErrorOnCaptureFailure = !p.retryCaptureOnFailure), E.activity = i.getActivity(f), E.activityRenderer = new d, E.activity.once(E.activity.EVENT.READY, function() {
                        m.trackPageview()
                    }), E.activity.on(E.activity.EVENT.READY, function() {
                        m.trackTimingStart("init", "app.js render"), E.activityRenderer.render(E.activity, E)
                    }), E.activityRenderer.on(E.activityRenderer.EVENT.READY, function() {
                        g.browser === "ie" && (n(".lrn_widget").addClass("lrn-ie"), (g.version === 8 || g.version === 9) && n(".lrn_widget").addClass("lrn_ie" + g.version)), m.trackTimingEnd("init", "app.js render"), m.trackTimingEnd("init", "app.js init"), E.trigger(E.EVENT.READY, E)
                    }), x.set(LearnosityApp.version + "_" + p.consumer_key + "_auth_response", e), E.activity.init()
                };
                return p && (n(".learnosity-response, .learnosity-feature").each(function() {
                    g.browser === "ie" && (g.version === 8 || g.version === 9) && n(this).addClass("lrn_ie" + g.version), n(this).is(":empty") && n(this).html(E.i18n.labels.loadingInfo)
                }), E.security = new f({
                    consumer_key: p.consumer_key,
                    timestamp: p.timestamp,
                    user_id: p.user_id,
                    signature: p.signature
                }), p.expires && E.security.set("expires", p.expires), N(this, x, p).then(function(e) {
                    T(e[0])
                }).then(null, function(e) {
                    a.exception({
                        code: 10003,
                        detail: e,
                        i18n: E.i18n
                    })
                })), E
            },
            N = function(e, n, i) {
                var o = function(e, t) {
                        n.get(LearnosityApp.version + "_" + i.consumer_key + "_auth_response").then(function(n) {
                            n ? e(n) : t("Authentication failed: no connection and application not ready to run offline")
                        })
                    },
                    u = new x(function(n, r) {
                        i.type === c.prototype.TYPE.OFFLINE_APP ? o(n, r) : s.request({
                            url: "/authenticate",
                            security: e.security.getRequestParameters(),
                            success: n,
                            failure: function(e) {
                                if (e.status >= 400 && e.status < 600) {
                                    var i = "Authentication failed: " + e.status;
                                    t.isObject(e.response) && e.response.meta ? i += " - " + e.response.meta.message : i += " - " + e.response, r(i)
                                } else e.status != -1 ? o(n, r) : r("Authentication failed: " + e.response)
                            }
                        })
                    }),
                    a = function(e) {
                        var n = e === "features" ? p.prototype.TYPE : h.prototype.TYPE,
                            s = e === "features" ? r.requireBundlesForFeatureTypes : r.requireBundlesForQuestionTypes,
                            o, u, a;
                        return t.isArray(i[e]) && i[e].length && (a = [], u = i[e], t.each(u, function(e) {
                            e.type != n.UNKNOWN && !t.include(a, e.type) && t.include(n, e.type) && a.push(e.type)
                        })), o = new x(function(e, t) {
                            a && a.length ? s(a, e) : e()
                        }), o
                    };
                return x.all([u, a("questions"), a("features")])
            };
        return t.extend(T.prototype, e.Events, {
            EXPOSED_METHODS: ["append", "attemptedQuestions", "disable", "discard", "enable", "feature", "features", "getFeatures", "getGroupScore", "getMetadata", "getQuestions", "getResponses", "getScores", "masking", "needsPushing", "push", "question", "questions", "renderMath", "reset", "retryQuestionCapture", "safeToUnload", "save", "setScrollablePassagesContextHeight", "submit", "unsaveableQuestions", "validateQuestions", "validQuestions"],
            EVENT: {
                READY: "ready"
            },
            resetInstanceVariables: function() {
                this.activity = null, this.options = null, this.security = null, this.consumer = null, this.i18n = null, this.saveEventHandlers = {}, this.discardEventHanders = {}, this.questionFacades = {}, this.featureFacades = {}
            },
            createFacade: function(e) {
                var n = {},
                    r = this;
                return t.isObject(e) && (n = e), t.each(r.EXPOSED_METHODS, function(e) {
                    n[e] = function() {
                        return r[e].apply(r, arguments)
                    }
                }), n
            },
            reset: function() {
                this.activity && t.each(this.activity.hooks.reset, function(e) {
                    t.isFunction(e) && e()
                }), this.resetInstanceVariables()
            },
            save: t.cancellableThrottle(function(e, t) {
                if (!this.activity) this.saveCallCached || (this.saveCallCached = !0, this.once(this.EVENT.INITIALISED, function() {
                    this.saveCallCached = !1, this.save(e, t)
                }, this));
                else {
                    var r = n.extend({}, this.saveEventHandlers, e),
                        i = this.activity.get("state");
                    r.submit = !!t;
                    if (this.activity.get("type") !== this.activity.TYPE.LOCAL_PRACTICE && i !== this.activity.STATE.REVIEW && i !== this.activity.STATE.PREVIEW) this.activity.save(r);
                    else {
                        var s = "Save responses failed. Save called on an invalid activity type / state";
                        r.submit && (s = "Submit responses failed. Submit called on an invalid activity type / state"), a.exception({
                            code: 10004,
                            detail: s
                        }, r.error)
                    }
                }
            }, 5e3, !0),
            setScrollablePassagesContextHeight: function(e) {
                this.simpleFeaturesRenderer.setScrollablePassagesContextHeight(e)
            },
            submit: function(e) {
                this.save.cancel && this.save.cancel(), this.save(e, !0)
            },
            discard: function(e) {
                var t = n.extend({}, this.discardEventHanders, e),
                    r = this.activity.get("state"),
                    i = this.activity.get("type");
                i !== this.activity.TYPE.LOCAL_PRACTICE && r !== this.activity.STATE.REVIEW && r !== this.activity.STATE.PREVIEW ? this.activity.discard(t) : a.exception({
                    code: 10021,
                    detail: "Discard responses failed. Discard called on an invalid activity type / state"
                }, t.error)
            },
            push: function(e) {
                e = e || {}, this && !e.security && (e.security = this.security.getRequestParameters());
                if (!e.security) {
                    a.exception({
                        code: 10027,
                        detail: "Missing security object"
                    }, e.error);
                    return
                }
                e.security.domain = o.domain;
                try {
                    v.init()
                } catch (t) {
                    a.exception({
                        code: 10027,
                        detail: t.toString()
                    }, e.error);
                    return
                }
                v.push(e.security).then(e.success, function(t) {
                    a.exception({
                        code: 10027,
                        detail: t.toString()
                    }, e.error)
                })
            },
            needsPushing: function(e) {
                e = e || {}, this && !e.security && (e.security = this.security.getRequestParameters());
                if (!e.security) a.exception({
                    code: 10028,
                    detail: "Missing security object"
                }, e.error);
                else if (!e.success) a.exception({
                    code: 10028,
                    detail: "Missing success function"
                }, e.error);
                else {
                    try {
                        v.init()
                    } catch (t) {
                        a.exception({
                            code: 10028,
                            detail: t.toString()
                        }, e.error);
                        return
                    }
                    v.needsPushing(e.security).then(e.success, function(t) {
                        a.exception({
                            code: 10028,
                            detail: t.toString()
                        }, e.error)
                    })
                }
            },
            retryQuestionCapture: function() {
                this.activity && this.activity.get("type") !== this.activity.TYPE.LOCAL_PRACTICE && this.activity.captureQuestionResponses()
            },
            safeToUnload: function() {
                return this.activity ? this.activity.safeToUnload() : !0
            },
            attemptedQuestions: function() {
                return this.activity ? this.activity.getAttemptedResponseIds() : []
            },
            renderMath: function(e) {
                var t;
                e === "mathquill" || this.activity && this.activity.get("math_renderer") === "mathquill" ? (t = new w, t.render()) : E.isInitalised() ? E.render() : E.init()
            },
            validateQuestions: function(e) {
                this.activity.validateQuestionsResponses(e)
            },
            validQuestions: function(e) {
                var t;
                switch (e) {
                    case "detailed":
                        t = this.activity.get("questionResponses").getValidResponses();
                        break;
                    case "detailedWithPartials":
                        t = this.activity.get("questionResponses").getValidResponsesDetailed();
                        break;
                    default:
                        t = this.activity.getValidResponseIds()
                }
                return t
            },
            unsaveableQuestions: function() {
                return t.map(this.activity.get("questionResponses").getInvalidQuestionResponses(), function(e) {
                    return e.get("response_id")
                })
            },
            disable: function() {
                if (!this.disableEnableAllowed()) return !1;
                var e = t.map(this.questionFacades, function(e) {
                    return e.disable()
                });
                return t.contains(e, !0)
            },
            enable: function() {
                if (!this.disableEnableAllowed()) return !1;
                var e = t.map(this.questionFacades, function(e) {
                    return e.enable()
                });
                return t.contains(e, !0)
            },
            disableEnableAllowed: function() {
                var e = this.activity.get("state");
                return e === this.activity.STATE.INITIAL || e === this.activity.STATE.RESUME
            },
            question: function(e) {
                return this.questionFacades[e]
            },
            questions: function() {
                return t.clone(this.questionFacades)
            },
            feature: function(e) {
                return this.featureFacades[e]
            },
            features: function() {
                return t.clone(this.featureFacades)
            },
            getResponses: function() {
                return this.activity ? this.activity.get("questionResponses").getResponsesForClient() : !1
            },
            getFeatures: function() {
                return this.activity ? this.activity.get("featureModels").getFeaturesJson() : !1
            },
            getQuestions: function() {
                return this.activity ? this.activity.get("questionResponses").getQuestionsJson() : !1
            },
            getMetadata: function() {
                if (this.activity) {
                    var e = {};
                    return this.activity.get("questionResponses").each(function(t) {
                        var n = t.getMetadata();
                        n && (e[t.get("response_id")] = n)
                    }), e
                }
                return !1
            },
            getScores: function() {
                return this.activity ? this.activity.get("questionResponses").getScores() : !1
            },
            getGroupScore: function(e) {
                return this.activity ? this.activity.get("questionResponses").getGroupScore(e) : !1
            },
            append: function(e) {
                return this.activity.append(e)
            },
            masking: function(e) {
                if (this.activity) {
                    var n = arguments[2],
                        r;
                    if (t.isUndefined(arguments[1])) r = t.keys(this.questionFacades);
                    else if (t.isString(arguments[1])) r = [arguments[1]];
                    else {
                        if (!t.isArray(arguments[1])) return !1;
                        r = arguments[1]
                    }
                    return t.each(r, function(t) {
                        this.questionFacades[t].masking(e, n)
                    }, this), !0
                }
                return !1
            },
            hasSimpleFeaturesToRender: function() {
                return this.activity.hasSimpleFeaturesToRender()
            },
            addQuestionFacade: function(e, t) {
                this.questionFacades[e] = t
            },
            addFeatureFacade: function(e, t) {
                this.featureFacades[e] = t
            }
        }), T
    }), LearnosityAmd.define("templates/features/scrollablePassage", ["vendor/lodash.underscore"], function(_) {
        return function(obj) {
            obj || (obj = {});
            var __t, __p = "",
                __e = _.escape;
            with(obj) __p += '<div class="lrn-scrollbar"><div class="lrn-track"><div class="lrn-thumb"></div></div></div><div class="lrn-viewport"><div class="lrn-overview"></div></div>';
            return __p
        }
    }), LearnosityAmd.define("vendor/jqueryresize", ["vendor/dom"], function(e) {
        (function(e) {
            function E() {
                if (!n) {
                    var e = (b ? b : "") + ".resize-triggers { " + (w ? w : "") + "visibility: hidden; opacity: 0; } " + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                        t = document.head || document.getElementsByTagName("head")[0],
                        r = document.createElement("style");
                    r.type = "text/css", r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)), t.appendChild(r), n = !0
                }
            }
            var t = document.attachEvent,
                n = !1,
                r = e.fn.resize;
            e.fn.resize = function(e) {
                return this.each(function() {
                    this == window ? r.call(jQuery(this), e) : addResizeListener(this, e)
                })
            }, e.fn.removeResize = function(e) {
                return this.each(function() {
                    removeResizeListener(this, e)
                })
            };
            if (!t) {
                var i = function() {
                        var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                            return window.setTimeout(e, 20)
                        };
                        return function(t) {
                            return e(t)
                        }
                    }(),
                    s = function() {
                        var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
                        return function(t) {
                            return e(t)
                        }
                    }();

                function o(e) {
                    var t = e.__resizeTriggers__,
                        n = t.firstElementChild,
                        r = t.lastElementChild,
                        i;
                    n && (i = n.firstElementChild, r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight, i.style.width = n.offsetWidth + 1 + "px", i.style.height = n.offsetHeight + 1 + "px", n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight)
                }

                function u(e) {
                    return e.offsetWidth != e.__resizeLast__.width || e.offsetHeight != e.__resizeLast__.height
                }

                function a(e) {
                    var t = this;
                    o(this), this.__resizeRAF__ && s(this.__resizeRAF__), this.__resizeRAF__ = i(function() {
                        u(t) && (t.__resizeLast__.width = t.offsetWidth, t.__resizeLast__.height = t.offsetHeight, t.__resizeListeners__.forEach(function(n) {
                            n.call(t, e)
                        }))
                    })
                }
                var f = !1,
                    l = "animation",
                    c = "",
                    h = "animationstart",
                    p = "Webkit Moz O ms".split(" "),
                    d = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                    v = "",
                    m = document.createElement("fakeelement");
                m.style.animationName !== undefined && (f = !0);
                if (f === !1)
                    for (var g = 0; g < p.length; g++)
                        if (m.style[p[g] + "AnimationName"] !== undefined) {
                            v = p[g], l = v + "Animation", c = "-" + v.toLowerCase() + "-", h = d[g], f = !0;
                            break
                        }
                var y = "resizeanim",
                    b = "@" + c + "keyframes " + y + " { from { opacity: 0; } to { opacity: 0; } } ",
                    w = c + "animation: 1ms " + y + "; "
            }
            window.addResizeListener = function(e, n) {
                t ? e.attachEvent("onresize", n) : (e.__resizeTriggers__ || (getComputedStyle(e).position == "static" && (e.style.position = "relative"), E(), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), o(e), e.addEventListener("scroll", a, !0), h && e.__resizeTriggers__.addEventListener(h, function(t) {
                    t.animationName == y && o(e)
                })), e.__resizeListeners__.push(n))
            }, window.removeResizeListener = function(e, n) {
                t ? e.detachEvent("onresize", n) : (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(n), 1), e.__resizeListeners__.length || (e.removeEventListener("scroll", a), e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__)))
            }
        })(e)
    }), LearnosityAmd.define("vendor/jquerytinyscrollbar", ["vendor/dom", "vendor/lodash.underscore", "vendor/jqueryresize"], function(e, t) {
        (function(t) {
            t(e)
        })(function(e) {
            "use strict";

            function o(n, o) {
                function S(t) {
                    e.isFunction(b) && b(), this.update(this.contentPosition || 0), e.isFunction(w) && w()
                }

                function x() {
                    return u.update(u.options.contentPosition || 0), k(), u
                }

                function T() {
                    var t = [n, a, f, l, c, h, e(document)];
                    e.each(t, function(e, t) {
                        t.off("." + r)
                    }), a[0].ontouchstart = null, u.options.wheel && window.removeEventListener ? n[0].removeEventListener(m, A, !1) : u.options.wheel && (n[0].onmousewheel = null)
                }

                function N() {
                    var t = [n, l, c, h, f];
                    e.each(t, function(e, t) {
                        t.attr("style", "")
                    })
                }

                function C() {
                    h.css(y, u.contentPosition / u.trackRatio), f.css(y, -u.contentPosition), l.css(g, u.trackSize), c.css(g, u.trackSize), h.css(g, u.thumbSize)
                }

                function k() {
                    v ? a[0].ontouchstart = function(e) {
                        1 === e.touches.length && (e.stopPropagation(), L(e.touches[0]))
                    } : (h.bind(s.mousedown, L), c.bind(s.mousedown, M)), u.options.wheel && window.addEventListener ? n[0].addEventListener(m, A, !1) : u.options.wheel && (n[0].onmousewheel = A), f.resize(t.debounce(t.bind(S, u), 400, !0))
                }

                function L(t) {
                    e("body").addClass("lrn-noSelect"), p = d ? t.pageX : t.pageY, u.thumbPosition = parseInt(h.css(y), 10) || 0, v ? (e(document).on(s.touchmove, function(e) {
                        e.preventDefault(), M(e.originalEvent.touches[0])
                    }), e(document).on(s.touchend, D)) : (e(document).bind(s.mousemove, M), e(document).bind(s.mouseup, D), h.bind(s.mouseup, D))
                }

                function A(t) {
                    if (u.contentRatio < 1) {
                        var r = t || window.event,
                            i = "delta" + u.options.axis.toUpperCase(),
                            s = -(r[i] || r.detail || -1 / 3 * r.wheelDelta || 0) / 40;
                        u.contentPosition -= s * u.options.wheelSpeed, u.contentPosition = Math.min(u.contentSize - u.viewportSize, Math.max(0, u.contentPosition)), n.trigger("move"), h.css(y, u.contentPosition / u.trackRatio), f.css(y, -u.contentPosition);
                        if (u.options.wheelLock || u.contentPosition !== u.contentSize - u.viewportSize && u.contentPosition !== 0) r = e.event.fix(r), r.preventDefault();
                        O()
                    }
                    isNaN(u.contentRatio) && u.update()
                }

                function O() {
                    function t() {
                        return u.contentPosition === 0
                    }

                    function n() {
                        return u.contentPosition === u.contentSize - u.viewportSize
                    }
                    var e;
                    E && (t() ? (e = E.scrollTop() - u.options.parentScrollValue, E.scrollTop(e)) : n() && (e = E.scrollTop() + u.options.parentScrollValue, E.scrollTop(e)))
                }

                function M(e) {
                    if (v && n.hasClass("lrn-no-touch")) return;
                    if (u.contentRatio < 1) {
                        var t = d ? e.pageX : e.pageY,
                            r = t - p;
                        u.options.scrollInvert && v && (r = p - t);
                        var i = Math.min(u.trackSize - u.thumbSize, Math.max(0, u.thumbPosition + r));
                        u.contentPosition = i * u.trackRatio, n.trigger("move"), h.css(y, i), f.css(y, -u.contentPosition)
                    }
                    isNaN(u.contentRatio) && u.update()
                }

                function D() {
                    e("body").removeClass("lrn-noSelect"), e(document).unbind(s.mousemove, M), e(document).unbind(s.mouseup, D), h.unbind(s.mouseup, D), e(document).unbind(s.touchmove), e(document).unbind(s.touchend)
                }
                this.options = e.extend({}, i, o), this._defaults = i, this._name = r;
                var u = this,
                    a = n.find(".lrn-viewport").first(),
                    f = n.find(".lrn-overview").first(),
                    l = n.find(".lrn-scrollbar").first(),
                    c = l.find(".lrn-track"),
                    h = l.find(".lrn-thumb"),
                    p = 0,
                    d = this.options.axis === "x",
                    v = "ontouchstart" in document.documentElement,
                    m = "onwheel" in document || document.documentMode >= 9 ? "wheel" : document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll",
                    g = d ? "width" : "height",
                    y = d ? "left" : "top",
                    b = this.options.onContentChanged,
                    w = this.options.onTinyScrollbarUpdateComplete,
                    E;
                return this.contentPosition = 0, this.viewportSize = 0, this.contentSize = 0, this.contentRatio = 0, this.trackSize = 0, this.trackRatio = 0, this.thumbSize = 0, this.thumbPosition = 0, o.$scrollableParentContainer && o.$scrollableParentContainer.length && (E = o.$scrollableParentContainer), this.update = function(e) {
                    var t = g.charAt(0).toUpperCase() + g.slice(1).toLowerCase();
                    this.viewportSize = a[0]["offset" + t], this.contentSize = f[0]["scroll" + t], this.contentRatio = this.viewportSize / this.contentSize, this.trackSize = this.options.trackSize || this.viewportSize, this.thumbSize = Math.min(this.trackSize, Math.max(0, this.options.thumbSize || this.trackSize * this.contentRatio)), this.trackRatio = this.options.thumbSize ? (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize) : this.contentSize / this.trackSize, this.contentRatio ? l.toggleClass("lrn-disable", this.contentRatio >= 1) : l.addClass("lrn-disable");
                    switch (e) {
                        case "bottom":
                            this.contentPosition = this.contentSize - this.viewportSize;
                            break;
                        case "relative":
                            this.contentPosition = Math.min(this.contentSize - this.viewportSize, Math.max(0, this.contentPosition));
                            break;
                        default:
                            e = parseInt(e, 10), e < 0 ? e = 0 : e > this.contentSize - this.viewportSize && (e = this.contentSize - this.viewportSize), this.contentPosition = e || 0
                    }
                    return this.contentPosition < 0 && (this.contentPosition = 0), C(), O(), u
                }, this.remove = function() {
                    var e = n.data(),
                        t = "plugin_" + r;
                    n.find(".resize-triggers").remove(), T(), N(), delete e[t]
                }, x()
            }
            var n = ["mousedown", "mouseup", "mousemove", "touchmove", "touchend"],
                r = "tinyscrollbar",
                i = {
                    axis: "y",
                    wheel: !0,
                    wheelSpeed: 40,
                    parentScrollValue: 10,
                    wheelLock: !0,
                    scrollInvert: !1,
                    trackSize: !1,
                    thumbSize: !1,
                    contentPosition: 0
                },
                s = {};
            e.each(n, function(e, t) {
                s[t] = t + "." + r
            }), e.fn[r] = function(t) {
                return this.each(function() {
                    e.data(this, "plugin_" + r) || e.data(this, "plugin_" + r, new o(e(this), t))
                })
            }
        })
    }), LearnosityAmd.define("vendor/jqueryactual", ["vendor/dom"], function(e) {
        (function(e) {
            e.fn.addBack = e.fn.addBack || e.fn.andSelf, e.fn.extend({
                actual: function(t, n) {
                    if (!this[t]) throw '$.actual => The jQuery method "' + t + '" you called does not exist';
                    var r = {
                            absolute: !1,
                            clone: !1,
                            includeMargin: !1
                        },
                        i = e.extend(r, n),
                        s = this.eq(0),
                        o, u;
                    if (i.clone === !0) o = function() {
                        var e = "position: absolute !important; top: -1000 !important; ";
                        s = s.clone().attr("style", e).appendTo("body")
                    }, u = function() {
                        s.remove()
                    };
                    else {
                        var a = [],
                            f = "",
                            l;
                        o = function() {
                            l = s.parents().addBack().filter(":hidden"), f += "visibility: hidden !important; display: block !important; ", i.absolute === !0 && (f += "position: absolute !important; "), l.each(function() {
                                var t = e(this),
                                    n = t.attr("style"),
                                    r = f;
                                n && (r += n), a.push(t.attr("style")), t.attr("style", r)
                            })
                        }, u = function() {
                            l.each(function(t) {
                                var n = e(this),
                                    r = a[t];
                                r === undefined ? n.removeAttr("style") : n.attr("style", r)
                            })
                        }
                    }
                    o();
                    var c = /(outer)/.test(t) ? s[t](i.includeMargin) : s[t]();
                    return u(), c
                }
            })
        })(e)
    }), LearnosityAmd.define("utils/scrollableDragDropHelper", ["vendor/lodash.underscore", "vendor/dom", "utils/featureDetection", "utils/browserCheck", "utils/uuid"], function(e, t, n, r, i) {
        "use strict";
        var s = {
                TYPE: {
                    SCROLLABLE_PASSAGE: "scrollablePassage",
                    NATIVE_SCROLLABLE_CONTAINER: "nativeScrollableContainer"
                },
                DATA_SELECTOR: {
                    SCROLLABLE_CONTAINER: "data-lrn-scrollable-container"
                },
                CLASSNAME: {
                    DRAG_ACTIVE: ".lrn_draggable.lrn_active",
                    NATIVE_SCROLLABLE_CONTAINER: ".lrn-scrollable-container",
                    NATIVE_SCROLLABLE_CONTENT: ".lrn-scrollable-content"
                },
                currentScrollDirection: undefined,
                activeDragDropComponent: undefined,
                containerData: undefined,
                repository: {},
                DELAY: 5,
                SCROLL_STEP: 5,
                guid: function() {
                    return i.v4()
                },
                isIE10AndBelow: function() {
                    return r.browser === "ie" && r.version < 11
                },
                onTouchDeviceDragDropComponentMove: function(e) {
                    var t = e.originalEvent.touches[0];
                    s.processScrollData(t.pageX, t.pageY)
                },
                onScrollableDragDropComponentMove: function(e) {
                    s.processScrollData(e.originalEvent.pageX, e.originalEvent.pageY)
                },
                registerScrollableContainer: function(e, n) {
                    if (!e) return;
                    var r = s.guid(),
                        i;
                    e.attr(s.DATA_SELECTOR.SCROLLABLE_CONTAINER, r), s.repository[r] = {
                        $view: e,
                        type: n
                    };
                    if (n === s.TYPE.NATIVE_SCROLLABLE_CONTAINER) i = e.find(s.CLASSNAME.NATIVE_SCROLLABLE_CONTENT), i.length || (i = e.find("div:first-child")), s.repository[r].$contentView = i;
                    else {
                        var o = e.data("plugin_tinyscrollbar"),
                            u = o.viewportSize,
                            a;
                        e.parents().not("body").not("html").each(function() {
                            var e = t(this),
                                n = e.height();
                            if (n > 0 && n < u) return a = e, !1
                        }), a && (s.repository[r].$viewport = a)
                    }
                },
                unregisterScrollableContainer: function(n) {
                    var r = this.DATA_SELECTOR.SCROLLABLE_CONTAINER,
                        i = n.attr(r),
                        s = this.repository[i];
                    n.removeAttr(r), e.each(s, function(e) {
                        e instanceof t && e.off()
                    }), delete this.repository[i]
                },
                processScrollData: function(e, t) {
                    var n, r, i;
                    if (!s.scrollHandlerInterface.ready()) {
                        r = o.getClosestScrollableParent(s.activeDragDropComponent);
                        if (!r.length) return;
                        n = s.repository[r.attr(s.DATA_SELECTOR.SCROLLABLE_CONTAINER)];
                        if (!n) return;
                        s.scrollHandlerInterface.init(n), s.containerData = s.scrollHandlerInterface.getContainerData()
                    }
                    i = s.containerData.y > 0 ? s.containerData.y + s.scrollHandlerInterface.getViewportSize() : s.scrollHandlerInterface.getViewportSize(), s.observeAndUpdate({
                        x: e,
                        y: t
                    }, s.containerData, i)
                },
                observeAndUpdate: function(e, t, n) {
                    if (e.y > t.y && e.y < n) {
                        s.destroyTimer();
                        return
                    }
                    if (e.y || !s.currentScrollDirection) e.y < t.y ? s.currentScrollDirection = "up" : s.currentScrollDirection = "down";
                    s.performScroll(s.currentScrollDirection)
                },
                performScroll: function(e) {
                    var t = s.scrollHandlerInterface,
                        n = t.getContentPosition(),
                        r, i;
                    e === "up" ? n > 0 && s.doTimerAction(function() {
                        r = t.getContentPosition() - s.SCROLL_STEP, r < 0 && (r = 0), t.updateScrollPosition(r)
                    }) : (i = t.getLastPossibleScrollPosition(), i < 0 && (i = 0), n < i && s.doTimerAction(function() {
                        r = t.getContentPosition() + s.SCROLL_STEP, r > i && (r = i), t.updateScrollPosition(r)
                    }))
                },
                scrollHandlerInterface: {
                    controller: undefined,
                    type: undefined,
                    ready: function() {
                        return !!this.controller
                    },
                    init: function(e) {
                        e && (this.view = e.$view, this.type = e.type, this.controller = this.isScrollablePassageType() ? e.$view.data("plugin_tinyscrollbar") : e.$view, e.$contentView && (this.$contentView = e.$contentView), e.$viewport && (this.$viewport = e.$viewport), window.controller = this.controller)
                    },
                    reset: function() {
                        delete this.view, delete this.controller, delete this.type, delete this.$contentView, delete this.$viewport
                    },
                    getContainerData: function() {
                        return {
                            x: this.view.offset().left,
                            y: this.$viewport ? this.$viewport.offset().top : this.view.offset().top,
                            w: this.view.width(),
                            h: this.view.height()
                        }
                    },
                    getContentSize: function() {
                        return this.isScrollablePassageType() ? this.controller.contentSize : this.$contentView.height()
                    },
                    getViewportSize: function() {
                        return this.isScrollablePassageType() ? this.$viewport ? this.$viewport.height() : this.controller.viewportSize : this.controller.height()
                    },
                    getLastPossibleScrollPosition: function() {
                        return this.isScrollablePassageType() ? this.getContentSize() - this.getViewportSize() : this.getContentSize()
                    },
                    getContentPosition: function() {
                        return this.isScrollablePassageType() ? this.controller.contentPosition : this.controller.scrollTop()
                    },
                    updateScrollPosition: function(e) {
                        this.isScrollablePassageType() ? this.controller.update(e) : this.controller.scrollTop(e)
                    },
                    isScrollablePassageType: function() {
                        return this.type === s.TYPE.SCROLLABLE_PASSAGE
                    }
                },
                doTimerAction: function(e) {
                    s.destroyTimer(), s.timer || (s.timer = setTimeout(function() {
                        e(), s.destroyTimer(), s.doTimerAction(e)
                    }, s.DELAY))
                },
                destroyTimer: function() {
                    s.timer && (clearTimeout(s.timer), delete s.timer)
                }
            },
            o = {
                getClosestScrollableParent: function(e) {
                    var t, n;
                    e && (n = e.$selector || e.$el, n && (t = n.closest(".lrn_scrollablepassage"), t.length || (t = n.closest(s.CLASSNAME.NATIVE_SCROLLABLE_CONTAINER), t.length && !s.repository[t.attr(s.DATA_SELECTOR.SCROLLABLE_CONTAINER)] && s.registerScrollableContainer(t, s.TYPE.NATIVE_SCROLLABLE_CONTAINER))));
                    if (t.length) return t
                },
                registerScrollablePassage: function(e) {
                    s.registerScrollableContainer(e.$el, s.TYPE.SCROLLABLE_PASSAGE)
                },
                unregisterScrollableContainer: function(e) {
                    s.unregisterScrollableContainer(e.$el)
                },
                startObservingAndUpdate: function(e, r) {
                    s.activeDragDropComponent = e, n.isTouchDevice() ? (s.currentTouchElement = r, s.currentTouchElement.on("touchmove", s.onTouchDeviceDragDropComponentMove).on("touchend", o.cleanUp)) : s.isIE10AndBelow() ? e.$selector.find(s.CLASSNAME.DRAG_ACTIVE).on("drag", s.onScrollableDragDropComponentMove) : t(document).on("dragover", s.onScrollableDragDropComponentMove)
                },
                cleanUp: function() {
                    n.isTouchDevice() ? s.currentTouchElement.off("touchmove", s.onTouchDeviceDragDropComponentMove).off("touchend", o.cleanUp) : s.isIE10AndBelow() ? s.activeDragDropComponent.$selector.find(s.CLASSNAME.DRAG_ACTIVE).off("drag", s.onScrollableDragDropComponentMove) : t(document).off("dragover", s.onScrollableDragDropComponentMove), delete s.currentScrollDirection, delete s.activeDragDropComponent, delete s.containerData, s.scrollHandlerInterface.reset(), s.destroyTimer()
                }
            };
        return o
    }), LearnosityAmd.define("views/features/scrollablePassage", ["vendor/dom", "vendor/lodash.underscore", "views/feature", "templates/features/scrollablePassage", "vendor/jquerytinyscrollbar", "vendor/jqueryactual", "utils/hiddenElementHelper", "utils/featureDetection", "utils/scrollableDragDropHelper"], function(e, t, n, r, i, s, o, u, a) {
        "use strict";
        return n.extend({
            template: r,
            PARENT_SCROLL_VALUE: 10,
            CLASSNAME: {
                NATIVE_SCROLLABLE_CONTAINER: ".lrn-scrollable-container",
                CONTENT: "lrn-scrollablepassage-content"
            },
            initialize: function() {
                this.cache = {
                    contextHeight: window.innerHeight,
                    originalElementAttributes: this.getElementAttributes()
                }, this.addRenderingLogic(), this.hasAppliedScrollbar = !1, this.appIsReady = !1, this.render(), this.initialisationCompleted()
            },
            addRenderingLogic: function() {
                this.displayLogic = {}, this.model.has("width") && (this.displayLogic.width = this.model.get("width")), this.model.has("height") && (this.displayLogic.height = this.calculateHeight()), this.model.get("border") === "true" && (this.displayLogic.wrapper = !0)
            },
            applyScrollbar: function() {
                var e = this.$el.closest(this.CLASSNAME.NATIVE_SCROLLABLE_CONTAINER);
                this.makeVisibleAndDispatch(function() {
                    this.$el.tinyscrollbar({
                        scrollInvert: u.isTouchDevice(),
                        $scrollableParentContainer: e,
                        parentScrollValue: this.PARENT_SCROLL_VALUE,
                        contentPosition: this.currentScrollPosition || 0,
                        onContentChanged: t.bind(this.onContentChanged, this),
                        onTinyScrollbarUpdateComplete: t.bind(this.readjustHeight, this)
                    }), this.readjustHeight(), a.registerScrollablePassage(this)
                }), this.hasAppliedScrollbar = !0
            },
            onContentChanged: function() {
                this.$el.css("height", this.calculateHeight())
            },
            calculateHeight: function() {
                var e = this.model.get("height"),
                    n, r, i;
                return this.isFluidHeight() ? (i = window.parseFloat(e), n = Math.floor(this.cache.contextHeight / 100 * i), n -= this.$el.outerHeight(!0) - this.$el.innerHeight(), this.model.has("subtract-height") && (r = this.model.get("subtract-height"), r = Number(r.replace(/px/, "")), !t.isNaN(r) && r < n && (n -= r)), n + "px") : e
            },
            isFluidHeight: function() {
                var e;
                return t.isUndefined(this.cache.isFluidHeight) && (e = this.model.get("height"), this.cache.isFluidHeight = !!e && !!e.match(/%$/)), this.cache.isFluidHeight
            },
            getElementAttributes: function() {
                return t.map(this.el.attributes, function(e) {
                    return {
                        name: e.name,
                        value: e.value
                    }
                })
            },
            getPadding: function(e) {
                return window.parseInt(this.$el.css("padding-" + e))
            },
            getPlugin: function() {
                return this.$el.data("plugin_tinyscrollbar")
            },
            hasQuestionOrFeature: function() {
                return !!this.$(".learnosity-feature").length || !!this.$(".learnosity-response").length
            },
            render: function() {
                var n = [],
                    r = t.bind(function() {
                        this.displayLogic.width && this.$el.css("width", this.displayLogic.width), this.displayLogic.height && this.$el.css("height", this.displayLogic.height)
                    }, this),
                    i, s;
                i = this.$el.contents().detach();
                if (i.length > 1 || !i.hasClass(this.CLASSNAME.CONTENT)) s = e("<div>").addClass(this.CLASSNAME.CONTENT), i.appendTo(s), i = s;
                return this.displayLogic.wrapper && n.push("lrn-scrollable-wrapper"), this.cache.contextHeight === "content" ? (this.$el.append(i), r()) : (this.renderViewContent(this.template(), n), r(), this.$el.find(".lrn-overview").append(i), (this.appIsReady || !this.hasQuestionOrFeature()) && this.applyScrollbar()), this
            },
            remove: function() {
                this.getPlugin().remove(), n.prototype.remove.call(this)
            },
            resize: function() {
                var e = this.getPlugin();
                if (!e) return;
                this.currentScrollPosition = e.contentPosition, e.remove(), this.$el.css({
                    height: this.calculateHeight()
                }), this.applyScrollbar()
            },
            makeVisibleAndDispatch: function(e) {
                o(this.$el, t.bind(e, this))
            },
            postAppReady: function() {
                var e = !this.hasAppliedScrollbar && this.cache.contextHeight !== "content";
                e && this.applyScrollbar(), this.cache.contextHeight === "content" && this.hasAppliedScrollbar && this.restorePrerenderState(), this.appIsReady = !0
            },
            readjustHeight: function() {
                var e, t;
                if (!this.isFluidHeight()) return;
                e = this.$(".lrn-overview").actual("innerHeight"), t = this.$(".lrn-viewport").actual("innerHeight"), t > e && this.$el.css({
                    height: e + this.getPadding("top") + this.getPadding("bottom") + "px"
                })
            },
            removeScroll: function() {
                var e = this.$el,
                    t = this.$("." + this.CLASSNAME.CONTENT);
                a.unregisterScrollableContainer(this), this.getPlugin().remove(), this.restoreRelevantWrapperAttributes(), t.detach().appendTo(e), this.$(".lrn-scrollbar, .lrn-viewport").remove(), this.hasAppliedScrollbar = !1
            },
            renderWithNewContextHeight: function() {
                this.hasAppliedScrollbar ? this.resize() : this.render()
            },
            restoreRelevantWrapperAttributes: function() {
                var e = this.$el,
                    n = this.model.has("width");
                t.each(this.el.attributes, t.bind(function(t) {
                    if (!t) return;
                    if (t.name === "class") {
                        e.addClass("lrn-scrollablepassage-content-height");
                        return
                    }
                    e.removeAttr(t.name), t.name === "style" && n && e.css({
                        width: this.model.get("width")
                    })
                }, this)), t.each(this.cache.originalElementAttributes, function(t) {
                    var r = t.name === "class" || t.name === "style" && n;
                    r || e.attr(t.name, t.value)
                })
            },
            setContextHeight: function(e) {
                var n = this.cache.contextHeight;
                if (n === e || n === Number(e)) return;
                if (t.isNaN(Number(e)) && e !== "content") return;
                e === "content" ? (this.cache.contextHeight = e, this.removeScroll()) : (this.cache.contextHeight = Number(e), this.renderWithNewContextHeight())
            }
        })
    }), LearnosityAmd.define("utils/plugins/tabs", ["vendor/dom"], function(e) {
        "use strict";

        function r(r) {
            var i = e(this),
                s = i.data("lrn.tab");
            if (r.type === "click" || r.keyCode === 0 || r.keyCode === 32) r.preventDefault(), s || (s = new t(this), i.data("lrn.tab", s), n.push(s)), s.show()
        }
        var t = function(t) {
                this.element = e(t)
            },
            n = [];
        return t.prototype.show = function() {
            var e = this.element,
                t = e.closest("ul:not(.dropdown-menu)"),
                n = e.data("tab-target"),
                r;
            n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), r = t.next(".tab-content").find(n), this.activate(e.parent("li"), t), this.activate(r, r.parent())
        }, t.prototype.activate = function(e, t) {
            var n = t.find("> .active");
            n.attr("aria-selected", "false").find("> .dropdown-menu > .active").addBack().removeClass("active"), e.addClass("active").attr("aria-selected", "true").removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").attr("aria-selected", "true"), n.removeClass("in")
        }, {
            init: function() {
                e("body").on("click.lrn.tab.data-api keypress.lrn.tab.data-api", '.lrn [data-toggle="tab"], .lrn [data-toggle="pill"]', r)
            },
            reset: function() {
                for (var t = n.length - 1; t >= 0; t--) e(n[t].element).removeData("lrn.tab");
                n = [], e("body").off("click.lrn.tab.data-api")
            }
        }
    }), LearnosityAmd.define("simpleFeaturesRenderer", ["vendor/backbone", "vendor/lodash.underscore", "vendor/dom", "bundlesManager", "error", "models/feature", "views/features/scrollablePassage", "utils/plugins/tabs"], function(e, t, n, r, i, s, o, u) {
        "use strict";

        function f(e) {
            var n = {};
            return t.each(e.attributes, function(e) {
                if (a.test(e.nodeName)) {
                    var t = e.nodeName.match(a)[1];
                    n[t] = e.nodeValue
                }
            }), n
        }
        var a = /^data\-(.+)$/,
            l = function() {
                this.initCalled = !1, this.pendingViews = 0
            };
        return t.extend(l.prototype, e.Events, {
            EVENT: {
                INITIALISED: "initialised"
            },
            i18n: null,
            init: function(e) {
                this.features = [], this.i18n = e, this.initCalled = !0, u.init()
            },
            hasInitBeenCalled: function() {
                return this.initCalled
            },
            render: function() {
                var e = this,
                    o = n(".learnosity-feature").not(function() {
                        var e = this.className.split(/\s+/),
                            t = !1;
                        for (var n = 0; n < e.length && !t; n++) t = t || e[n].indexOf("feature-") === 0;
                        return t
                    });
                if (o.length) {
                    var u = [],
                        a = [];
                    this.pendingViews = o.length, o.each(function(e, r) {
                        var i = n(this).attr("data-type");
                        t.contains(s.prototype.TYPE, i) && i !== s.prototype.TYPE.UNKNOWN ? t.contains(u, i) || u.push(i) : i = s.prototype.TYPE.UNKNOWN, a.push({
                            domNode: r,
                            type: i,
                            dataAttributes: f(r)
                        })
                    }), r.requireBundlesForFeatureTypes(u, function(n) {
                        t.isEmpty(n) ? i.log("No bundles were loaded for the required Feature types: " + u.join(", ")) : t.forEach(a, function(r) {
                            var i = n[r.type],
                                s = new i.Model(r.dataAttributes),
                                o = new i.View({
                                    model: s,
                                    el: r.domNode,
                                    i18n: e.i18n,
                                    initialisationCallback: t.bind(e.viewIntialised, e)
                                });
                            e.features.push(o)
                        })
                    })
                } else this.trigger(this.EVENT.INITIALISED)
            },
            viewIntialised: function() {
                this.pendingViews--, this.pendingViews === 0 && this.trigger(this.EVENT.INITIALISED)
            },
            reset: function() {
                this.features = [], this.initCalled = !1, u.reset()
            },
            setScrollablePassagesContextHeight: function(e) {
                t.each(this.features, function(t) {
                    t instanceof o && t.setContextHeight(e)
                })
            }
        }), l
    }), LearnosityAmd.define("i18nlabels", ["vendor/lodash.underscore", "vendor/dom", "utils/htmlCleaner"], function(e, t, n) {
        "use strict";
        var r = {
                addData: "Add Data",
                audioplaybackerror: "Unable to play audio asset. Click to try again in a moment.",
                audioPlayer: "Audio Player",
                audioRecorder: "Audio Recorder",
                audioretrievalretry: "Trying to retrieve audio",
                audioPlayRecording: "Play recording",
                audioStopPlayback: "Stop playback",
                audioPausePlayback: "Pause playback",
                audioContinuePlayback: "Continue playback",
                audioStopRecording: "Stop recording",
                audioStartRecording: "Start recording",
                audioPauseRecording: "Pause recording",
                audioContinueRecording: "Continue recording",
                audioAdjustVolume: "Adjust Volume",
                simpleChartNoData: "No Data Available. Please add a new bar.",
                simpleChartNewBarDefaultName: "New Bar",
                calculator: "Calculator",
                characterMapCharacters: ["¡", "¿", "Ç", "Ñ", "ç", "ñ", "ý", "ÿ", "á", "â", "ã", "ä", "å", "æ", "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "à", "È", "É", "Ê", "Ë", "è", "é", "ê", "ë", "Ì", "Í", "Î", "Ï", "ì", "í", "î", "ï", "Ò", "Ó", "Ô", "Õ", "Ö", "Ø", "ð", "ò", "ó", "ô", "õ", "ö", "Ù", "Ú", "Û", "Ü", "ù", "ú", "û", "ü"],
                characterMapIcon: "á",
                characterMapMathCharacters: ["⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹", "⁺", "⁻", "₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₊", "₋", "½", "⅓", "⅔", "¼", "¾", "⅕", "⅖", "⅗", "⅘", "⅙", "⅚", "√", "∞", "≤", "≥", "±", "μ", "σ", "∫", "Δ", "∪", "∩", "≡", "Σ", "°"],
                characterMapMathIcon: "Σ",
                characterMapTitle: "Character Map",
                checkAnswer: "Check Answer",
                checkAnswers: "Check Answers",
                clear: "Clear",
                clickToRecord: "Click on record to start",
                clickToStartPlayback: "Click on play to start playback",
                confirmrecordoverwrite: "A previous audio recording exists. If you continue it will be replaced.",
                continuelabel: "Continue",
                copy: "Copy",
                correctAnswer: "Correct answer",
                correctAnswers: "Correct answers",
                counterTemplate: "Beginning in {num} seconds...",
                cut: "Cut",
                downloadAudio: "Download",
                editorBoldIcon: "B",
                editorBoldTitle: "Bold",
                editorBulletdListTitle: "Bulleted list",
                editorItalicsIcon: "I",
                editorItalicsTitle: "Italics",
                editorNumberedListTitle: "Numbered list",
                editorRemoveFormatTitle: "Clear formatting",
                editorSubscriptTitle: "Subscript",
                editorSuperscriptTitle: "Superscript",
                editorUnderlineIcon: "U",
                editorUnderlineTitle: "Underline",
                error: "Error",
                graphingTools: {
                    move: "Move",
                    point: "Point",
                    line: "Line",
                    ray: "Ray",
                    segment: "Segment",
                    vector: "Vector",
                    circle: "Circle",
                    parabola: "Parabola",
                    sine: "Sine",
                    polygon: "Polygon",
                    "delete": "Delete",
                    label: "Label"
                },
                handwritingApiError: "Unable to recognise handwriting. Please try again later.",
                imageTool: "Image Tool",
                imageValidationArea: "Image validation area",
                incorrectAnswer: "Incorrect answer",
                incorrectAnswers: "Incorrect answers",
                lineChartNewPointDefaultName: "New Point",
                listen: "Listen",
                loading: "Loading",
                loadingInfo: "<div class='lrn_spinner'><div class='lrn_bounce1'></div><div class='lrn_bounce2'></div><div class='lrn_bounce3'></div></div>",
                maxPlayAttempts: "You reached the playback limit",
                maxRecordAttempts: "You used all your recording attempts",
                microphoneDeviceMissing: "Microphone device missing error.",
                microphoneDeviceNoAuth: "Microphone not authorised",
                noAudio: "No audio to playback",
                onbeforeunload: "You have unsaved responses. If you continue you will lose these responses.",
                paste: "Paste",
                pause: "Pause",
                play: "Play",
                silenceDetected: "Recording stopped due to silence detected",
                playback: "Playback",
                playbackPaused: "Playback paused",
                playbackUnavailable: "Playback unavailable",
                playconversation: "Play Conversation",
                playConversationTitle: "Playing Question ",
                playing: "Playing",
                progress: "Progress",
                ratingInfoIcon: "i",
                ready: "Ready",
                record: "Record",
                recordAudioStatusLine: "Click to change microphone access settings.",
                recordAudioStatusTitle: "Audio Status",
                recordAuthRememberTitle: "Microphone permission",
                recordAuthRememberHtml: "Select <strong>remember</strong> before clicking <strong>allow</strong>. This will allow you to record audio and stop this pop-up box being shown again.",
                recordAuthRememberTroubleLink: 'Having trouble? <a target="_blank" href="http://www.learnosity.com/guide/audioTroubleshooting.php">Click here</a>.',
                recordChromeAuthTitle: "Additional permissions for Chrome",
                recordChromeAuth1st: "Click <strong>allow</strong> above, in the top right of your browser window:",
                recordChromeAuth1stB: "Click the <strong>allow</strong> button to enable microphone permissions.",
                recordChromeAuth2nd: "<strong>Close</strong> this window",
                recordChromeAuthTroubleLink: "If the button is not displayed, refer to <a target='_blank' href='http://docs.learnosity.com/faq/sysrequirementfaq.php#chromeallow'>this guide</a>.",
                recordMobileTroubleLink: "If you're using a mobile device, refer to <a target='_blank' href='http://docs.learnosity.com/faq/sysrequirementfaq.php#webrtccontext'>this guide</a>.",
                recording: "Recording",
                recordingComplete: "Recording complete",
                recordingCounterPreload: "Recording will begin in ...",
                recordingPaused: "Recording paused",
                recordingUnavailable: "Recording unavailable",
                recordSwfErrorLine1: "We've been unable to access flash. Please ensure a blocker",
                recordSwfErrorLine2: "is not enabled and that you have the latest version of flash.",
                redo: "Redo",
                replay: "Replay",
                reset: "Reset",
                "delete": "Delete",
                response: "Response",
                responseArea: "Response area",
                retry: "Retry",
                rightClickAudioDownload: "Click to save audio file.",
                saveButtonLabel: "Save Answers",
                saveComplete: "Saved",
                saveInProgress: "Saving...",
                seekTo: "Skip to",
                source: "Source",
                stimulus: "Stimulus",
                stop: "Stop",
                stopconversation: "Stop Conversation",
                submitButtonLabel: "Submit Answers",
                submitComplete: "Submitted",
                submitInProgress: "Submitting...",
                target: "Target",
                uierrorfeedback: "A problem occurred. Please try again later. If the problem persists contact your administrator.",
                unableToPlayAsset: "Unable to play, asset not available.",
                unavailable: "Unavailable",
                undo: "Undo",
                unsupportedBrowser: "Sorry, this item cannot be displayed because your browser is not supported.",
                unsupportedCompatibilityMode: "Sorry, this item cannot be displayed because your browser is in an unsupported compatibility view.",
                word: "Word",
                wordLength: "Word Limit"
            },
            i = ["recordAuthRememberHtml", "recordAuthRememberTroubleLink"],
            s = {
                tagInline: [],
                allowedTags: ["a", "strong", "b"],
                allowedAttributes: [
                    ["href"],
                    ["title"],
                    ["class"],
                    ["target"]
                ]
            };
        return function(o) {
            o = o || {}, e.each(o, function(r, u) {
                e.contains(i, u) ? o[u] = n.whitelistContent(r, s) : o[u] = e.escape(t("<div>").append(r).text())
            }), this.labels = e.extend({}, r, o), this.sameLabels = function(t) {
                return e.isEqual(this.labels, t)
            }
        }
    }), LearnosityAmd.define("appController", ["vendor/lodash.underscore", "vendor/dom", "app", "config", "error", "simpleFeaturesRenderer", "i18nlabels", "unload", "utils/analytics", "utils/browserCheck"], function(e, t, n, r, i, s, o, u, a, f) {
        "use strict";

        function l(t) {
            var r = {};
            return t && (r = t), e.each(n.prototype.EXPOSED_METHODS, function(e) {
                r[e] = function() {
                    throw "You have called " + e + " on an App stub, please Init the API with an activity JSON object"
                }
            }), r
        }

        function c() {
            if (f.browser === "ie" && f.version < 8) {
                var e, t;
                return f.compatibilityMode ? (t = 10018, e = "Detected browser is supported but currently running in an unsupported compatibility mode " + f.browser + " version " + f.version) : (t = 10015, e = "Detected browser " + f.browser + " version " + f.version), i.exception({
                    code: t,
                    detail: e,
                    i18n: new o
                }), !1
            }
            return !0
        }

        function g() {
            return p.length > 0 ? p[0] : l()
        }

        function y() {
            var t, s, u, v;
            if (!c()) return !1;
            e.each(arguments, function(n) {
                e.isString(n) ? u = n : e.isObject(n) && (n.hasOwnProperty("consumer_key") ? t = n : n.hasOwnProperty("appStub") ? v = n.appStub : s = n)
            });
            var g, y;
            p.length === 0 && !f.isChromeApp && a.init(r.analytics), s && s.errorListener && i.setErrorListener(s.errorListener);
            var b = s && s.readyListener;
            return h.hasInitBeenCalled() || (e.isUndefined(g) && (g = new o(s && s.labelBundle ? s.labelBundle : {})), h.init(g), h.on(h.EVENT.INITIALISED, function() {
                k()
            }), h.render()), t ? (g = new o(s && s.labelBundle ? s.labelBundle : {}), y = new n(t, s, u, g, this.version, this.requestedApiVersion), y.on(y.EVENT.READY, function(e) {
                m = !1, h.once(h.EVENT.INITIALISED, A), h.render(), L(b)
            }), y.simpleFeaturesRenderer = h, p.push(y), u && (d[u] = y), y = y.createFacade(v)) : (L(b), y = l(v)), y
        }

        function b() {
            e.each(p, function(e) {
                e && e.reset && e.reset()
            }), i.reset(), u.reset(), p = [], d = {}, v = [], h.reset()
        }

        function w() {
            n.prototype.save.apply(g(), arguments)
        }

        function E() {
            n.prototype.submit.apply(g(), arguments)
        }

        function S() {
            return n.prototype.safeToUnload.apply(g(), arguments)
        }

        function x() {
            return n.prototype.attemptedQuestions.apply(g(), arguments)
        }

        function T() {
            return n.prototype.renderMath.apply(g(), arguments)
        }

        function N() {
            return n.prototype.push.apply(null, arguments)
        }

        function C() {
            return n.prototype.needsPushing.apply(null, arguments)
        }

        function k() {
            m = !0, e.each(v, function(t) {
                e.defer(t)
            }), v = []
        }

        function L(t) {
            e.isFunction(t) && (m ? e.defer(t) : v.push(t))
        }

        function A() {
            e.each(h.features, function(t) {
                e.isFunction(t.postAppReady) && t.postAppReady()
            })
        }
        var h = new s,
            p = [],
            d = {},
            v = [],
            m = !1;
        return {
            _internal: undefined,
            version: undefined,
            errors: [],
            init: y,
            reset: b,
            save: w,
            submit: E,
            safeToUnload: S,
            attemptedQuestions: x,
            renderMath: T,
            push: N,
            needsPushing: C
        }
    }), LearnosityAmd.define("api", ["utils/extensions/lodash.underscore.extensions", "appController"], function(e, t) {
        "use strict";
        return {
            init: function() {
                var n, r;
                window.LearnosityApp._internal._cachedInitCalls && (n = window.LearnosityApp._internal._cachedInitCalls, delete window.LearnosityApp._internal._cachedInitCalls), window.LearnosityApp._internal._cachedMethodCalls && (r = window.LearnosityApp._internal._cachedMethodCalls, delete window.LearnosityApp._internal._cachedMethodCalls), t._internal = window.LearnosityApp._internal, t.version = window.LearnosityApp.version, t.requestedApiVersion = window.LearnosityApp.requestedApiVersion, window.LearnosityApp = t, n && e.each(n, function(e) {
                    e.args.push({
                        appStub: e.appStub
                    }), window.LearnosityApp.init.apply(window.LearnosityApp, e.args)
                });
                if (r)
                    for (var i = 0; i < r.length; i++) t[r[i].method].apply(t, r[i].args)
            }
        }
    }),
    function() {
        "use strict";
        var e = {
                baseUrl: LearnosityApp._internal.config.assetsHost + "/app/",
                paths: {
                    vendor: "../vendor"
                },
                map: {
                    "*": {
                        "jquery-v1.10.2": "vendor/dom",
                        "backbone-v0.9.10": "vendor/backbone",
                        "underscore-v1.5.2": "vendor/lodash.underscore",
                        "require-v2.1.9": "require",
                        mathcore: "vendor/mathcore"
                    }
                },
                waitSeconds: 30
            },
            t;
        window.LearnosityAmd && window.LearnosityAmd.require ? t = window.LearnosityAmd.require : (t = require, e.context = "lrnQuestionsRequireContext"), LearnosityApp._internal.config.devEnvironment && (e.urlArgs = "bust=" + (new Date).getTime());
        var n = t.config(e);
        n(["api"], function(e) {
            e.init()
        })
    }(), LearnosityAmd.define("models/validatable", ["vendor/backbone", "vendor/lodash.underscore", "models/questionResponse"], function(e, t, n) {
        "use strict";
        return n.extend({
            initialize: function() {
                return this.scorer = null, n.prototype.initialize.apply(this, arguments)
            },
            getScorer: function() {
                if (!this.scorer || this._prevModifiedForScorer !== this.lastModified) {
                    this._prevModifiedForScorer = this.lastModified;
                    if (this.scorer) this.scorer.reset(this.toJSON());
                    else {
                        var e = this.getScorerClass();
                        this.scorer = new e(this.toJSON())
                    }
                }
                return this.scorer
            },
            getScorerClass: function() {
                throw new Error("getScorerClass method not implemented")
            },
            canValidateResponse: function() {
                throw new Error("canValidateResponse method not implemented")
            },
            isResponseValid: function() {
                return this.getScorer().isValid()
            },
            getResponseValidDetailed: function() {
                var e = {
                        correct: this.isResponseValid()
                    },
                    n = this.getPartialValidation();
                return t.isNull(n) || (e.partial = n), e
            },
            getPartialValidation: function() {
                var e = this.getScorer();
                return t.isFunction(e.validateIndividualResponses) ? e.validateIndividualResponses() : null
            },
            getScore: function() {
                var e = this.getScorer();
                return t.isNumber(e.maxScore()) ? {
                    max_score: e.maxScore(),
                    score: e.score()
                } : null
            },
            getPartialScoring: function() {
                var e = this.get("question");
                return t.isObject(e.validation) && t.isBoolean(e.validation.partial_scoring) ? e.validation.partial_scoring : !0
            },
            getShowPartialValidationUI: function() {
                var e = this.get("question"),
                    t = e.validation || {};
                if (t.scoring_type) return !0;
                if (t.show_partial_ui) return t.show_partial_ui
            },
            getShowGlobalValidationUi: function() {
                var e = this.get("question"),
                    t = e.validation || {};
                return t.scoring_type ? t.scoring_type === "exactMatch" && this.showsGlobalValUiForExactMatch() : !this.getPartialScoring()
            },
            getMappableResponses: function() {
                return this.getResponseValue() || []
            },
            mapValidationMetadata: function(e) {
                var n = this.getMetadata() && this.getMetadata()[e],
                    r = this.getResponseValidDetailed().partial,
                    i = this.getMappableResponses(),
                    s = t.isArray(n),
                    o = t.isArray(i),
                    u = t.isArray(r),
                    a = !s || !o || !u,
                    f;
                return a ? !1 : (f = {
                    correct: [],
                    incorrect: [],
                    unattempted: []
                }, t.each(t.keys(f), function(e) {
                    f[e] = this.mapValidationMetadataToResponseState({
                        targetState: e,
                        metadata: n
                    })
                }, this), f)
            },
            mapValidationMetadataToResponseState: function(e) {
                var n = this.getResponseValidDetailed().partial,
                    r = this.getMappableResponses(),
                    i = [],
                    s = function(r, i) {
                        var s;
                        return e.targetState === "unattempted" ? t.isNull(r) : (s = e.targetState === "correct", !!r && n[i] === s)
                    };
                return t.each(r, function(t, n) {
                    s(t, n) && i.push({
                        value: t,
                        metadata: e.metadata[n],
                        index: n
                    })
                }), i
            },
            showsGlobalValUiForExactMatch: function() {
                var e = !t.contains(["shorttext", "formula", "formulaV2"], this.get("type"));
                return this.get("type") === "mcq" && (e = !!this.get("question").multiple_responses), e
            },
            callValidate: function(e) {
                this.canValidateResponse() && this.trigger(this.EVENT.CALLVALIDATE, e)
            },
            getValidResponse: function() {
                var e, n, r, i, s;
                return this.canValidateResponse() && (n = this.get("question"), i = n.valid_responses || n.validation.valid_responses, i ? (s = t.map(i, t.first), s.length && s[0] ? e = {
                    value: s
                } : e = {
                    value: t.pluck(i, "value")
                }) : (r = this.getScorer(), r.suggestedResponse && (e = this.getScorer().suggestedResponse()), !e && n.validation.valid_response && (e = n.validation.valid_response, e.value || (e = {
                    value: e
                })))), e || {}
            }
        })
    }), LearnosityAmd.define("utils/accessibilityHelper", ["vendor/dom", "vendor/lodash.underscore"], function(e, t) {
        "use strict";
        var n = {
                SOURCE: "[data-lrn-access-review-source]"
            },
            r = {
                SOURCE: "data-lrn-access-review-source"
            };
        return {
            hasAttr: function(e, t) {
                var n = e.attr(t);
                return typeof n != "undefined" && n !== !1
            },
            getSourceElement: function(e) {
                var t = [".lrn_draggable"],
                    i = e.find(n.SOURCE),
                    s;
                this.hasAttr(e, r.SOURCE) && (i = e);
                if (!i.length)
                    for (s = 0; s < t.length; s++) {
                        i = e.find(t[s]);
                        if (i.length) break
                    }
                return i.length ? i : e
            },
            getSourceContent: function(t) {
                var n = "",
                    r = this;
                return t.find("select").remove(), t.is("input") ? this.getInputContent(t) : t.find('input:not([type="checkbox"],[type="radio"])').length ? (t.find("input").each(function() {
                    n += r.getInputContent(e(this))
                }), n) : t.text()
            },
            getInputContent: function(e) {
                return e.is(":radio") || e.is(":checkbox") ? e.prop("checked") ? "selected" : "" : e.val()
            },
            setReviewAriaLabel: function(n) {
                var r = n.$el,
                    i = n.ariaLabel,
                    s = n.keepChildrenVisible,
                    o = n.onLabelClick,
                    u = e('<span class="lrn-accessibility-label"></span>');
                r.attr("aria-label") && r.attr("aria-label-default", r.attr("aria-label")), u.text(i), s || r.find("> *").attr("aria-hidden", !0), r.attr("aria-label", i).append(u), t.isFunction(o) && u.on("click", function(e) {
                    e.stopPropagation(), o()
                })
            },
            unsetReviewAriaLabel: function(e) {
                var t = e.attr("aria-label-default");
                t ? e.attr("aria-label", t) : e.removeAttr("aria-label"), e.removeAttr("aria-label-default").find("> [aria-hidden]").removeAttr("aria-hidden"), e.find(".lrn-accessibility-label").off("click").remove()
            }
        }
    }), LearnosityAmd.define("views/mixins/accessibility", ["vendor/dom", "vendor/lodash.underscore", "utils/accessibilityHelper"], function(e, t, n) {
        "use strict";
        return {
            STATE: {
                INITIAL: "initial",
                REVIEW: "review"
            },
            processAccessibility: function(r) {
                r = r || {};
                var i = r ? r.state : this.STATE.INITIAL,
                    s = {
                        ACCESSIBILITY_DEST: "[data-lrn-access-review-dest]",
                        RESPONSE_WRAPPER: ".lrn-response-validate-wrapper"
                    },
                    o = t.isFunction(r.getSourceText) ? r.getSourceText : !1,
                    u = this.$(s.RESPONSE_WRAPPER),
                    a = this;
                i === this.STATE.REVIEW ? (n.setReviewAriaLabel({
                    $el: u,
                    ariaLabel: this.getGlobalWrapperAriaLabel(u),
                    keepChildrenVisible: !0
                }), this.$(s.ACCESSIBILITY_DEST).each(function() {
                    var t = e(this),
                        r = n.getSourceElement(t);
                    n.setReviewAriaLabel({
                        $el: t,
                        ariaLabel: a.getReviewAriaLabel(r, o),
                        onLabelClick: function() {
                            var e = [".lrn_draggable", "input", "select"],
                                n, r, i;
                            for (i = 0; i < e.length; i++) {
                                n = e[i], r = t.find(n);
                                if (r.length) break
                            }
                            t.trigger("click"), r && r.length ? r.is("input") || r.is("select") ? r.focus() : r.trigger("click") : a.clearValidationUI()
                        }
                    })
                })) : (n.unsetReviewAriaLabel(u), this.$(s.ACCESSIBILITY_DEST).each(function() {
                    n.unsetReviewAriaLabel(e(this))
                }))
            },
            getGlobalWrapperAriaLabel: function(e) {
                var t = {
                    CORRECT: "lrn_correct",
                    INCORRECT: "lrn_incorrect"
                };
                return e.hasClass(t.CORRECT) ? "response - correct" : e.hasClass(t.INCORRECT) ? "response - incorrect" : "response - no response given"
            },
            getReviewAriaLabel: function(e, r) {
                e = e.clone();
                var i = {
                        VALID: "lrn_valid",
                        CORRECT: "lrn_correct",
                        INCORRECT: "lrn_incorrect",
                        UNATTEMPTED: "lrn_not_attempted"
                    },
                    s = "." + t.values(i).join(",."),
                    o = e.find(".lrn_responseIndex"),
                    u = [],
                    a, f;
                return o.length && u.push("answer " + o.text()), o.remove(), f = r ? r(e) : n.getSourceContent(e), f && u.push(f), a = e.find(s), a.length || (a = e), a.hasClass(i.CORRECT) ? u.push("correct") : a.hasClass(i.INCORRECT) ? u.push("incorrect") : a.hasClass(i.UNATTEMPTED) ? u.push("no response given") : a.hasClass(i.VALID) ? u.push("no response given - correct") : u.push("no response given"), u.join(" - ")
            }
        }
    }), LearnosityAmd.define("views/validatable", ["vendor/dom", "vendor/lodash.underscore", "views/questionResponse", "views/mixins/accessibility", "utils/mathjaxLoader"], function(e, t, n, r, i) {
        "use strict";
        var s = n.extend({
            MASKING_SVG: {
                cross: '<svg class="lrn-mask" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" fill="transparent"/><line class="lrn-line1" x1="0" y1="5%" x2="100%" y2="95%"></line><line class="lrn-line2" x1="0" y1="95%" x2="100%" y2="5%"></line></svg>',
                strike: '<svg class="lrn-mask" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" fill="transparent"/><line class="lrn-line1" x1="0" y1="50%" x2="100%" y2="50%"></line></svg>'
            },
            MASK_MODE: {
                CROSS: "cross",
                STRIKE: "strike"
            },
            showMasking: !1,
            events: {
                "click .lrn_validate:not([disabled])": "validateResponse"
            },
            initialize: function() {
                var e = this.model.get("question");
                this.validationAttempts = 0, this.validationAttemptsLimit = 0, e.feedback_attempts && (t.isString(e.feedback_attempts) && (e.feedback_attempts.toLowerCase() === "unlimited" ? e.feedback_attempts = 0 : e.feedback_attempts = parseInt(e.feedback_attempts, 10)), t.isNumber(e.feedback_attempts) && (this.validationAttemptsLimit = e.feedback_attempts))
            },
            addRenderingLogic: function() {
                var e = this.model.get("question"),
                    n = this.activity.get("state") === this.activity.STATE.REVIEW,
                    r = this.activity.get("showCorrectAnswers");
                e.ui_style && t.isString(e.ui_style.validation_stem_numeration) && (this.displayLogic.validation_stem_numeration = e.ui_style.validation_stem_numeration), this.displayLogic.isReviewState = this.activity.get("state") === this.activity.STATE.REVIEW, this.displayLogic.showValidationButton = !n && e.instant_feedback && !e.validation_group && this.model.canValidateResponse(), this.displayLogic.showValidation = !!this.model.canValidateResponse(), this.displayLogic.displayCorrectAnswer = t.isUndefined(r) && n && this.displayLogic.showValidation || !!r
            },
            renderValidatableUI: function() {
                this.displayLogic.showValidation && this.showValidationUI(), this.displayLogic.displayCorrectAnswer && this.showCorrectAnswer(), this.processAccessibility({
                    state: this.STATE.REVIEW
                })
            },
            validateResponse: function(e, t) {
                this.model.canValidateResponse() && (this.showingValidationUI && this.clearValidationUI(), (this.isValidationAllowed() || t) && this.model.hasResponse() && (this.renderValidatableUI(), t || this.incrementValidationAttempts(), this.isValidationAllowed() || this.$(".lrn_btn.lrn_validate").attr("disabled", "disabled"), this.getFacade().trigger("validated")))
            },
            isValidationAllowed: function() {
                return this.validationAttemptsLimit === 0 || this.validationAttempts < this.validationAttemptsLimit
            },
            incrementValidationAttempts: function() {
                var e = this.model.getResponseValue();
                t.isEqual(e, this.previousResponseValue) || (this.previousResponseValue = t.clone(e), this.validationAttempts++)
            },
            clearValidationUI: function() {
                this.processAccessibility()
            },
            showCorrectAnswer: function() {
                throw "Unimplemented function showCorrectAnswer for question type:" + this.model.get("type")
            },
            callValidateHandler: function(e) {
                e && (e.showCorrectAnswers && (this.displayLogic.displayCorrectAnswer = e.showCorrectAnswers), this.validateResponse(undefined, !e.feedback_attempts)), e && e.showCorrectAnswers && this.showCorrectAnswer()
            },
            showValidationUI: function() {
                var e = this.model.validateResponse();
                this.showingValidationUI = !0;
                if (this.model.getShowGlobalValidationUi()) {
                    this.model.hasResponse() && this.$(".lrn-response-validate-wrapper").removeClass("lrn_correct lrn_incorrect").addClass(this.model.isResponseValid() ? "lrn_correct" : "lrn_incorrect");
                    if (!this.model.getShowPartialValidationUI()) return !1
                }
                return e
            },
            initialisationCompleted: function() {
                n.prototype.initialisationCompleted.apply(this, arguments), this.model.canValidateResponse() && this.model.on(this.model.EVENT.CALLVALIDATE, this.callValidateHandler, this)
            },
            masking: function(e, t) {
                this.showMasking = e, this.maskingSVG = this.MASKING_SVG[t || this.MASK_MODE.CROSS] || this.MASKING_SVG[this.MASK_MODE.CROSS], this.showMasking ? this.enableMaskingUI() : this.disableMaskingUI()
            },
            toggleMasking: function() {
                if (this.showMasking) {
                    var t = arguments[0].currentTarget ? e(arguments[0].currentTarget) : arguments[0],
                        n = t.find(".lrn-mask");
                    n.length ? n.remove() : t.is(":empty") || (t.append(e(this.maskingSVG)), this.questionFacade.trigger(this.model.EVENT.MASKED, this.model.get("response_id")))
                }
            },
            enableMaskingUI: function() {
                this.$el.addClass("lrn-masking")
            },
            disableMaskingUI: function() {
                this.$el.removeClass("lrn-masking")
            },
            clearMaskingUI: function() {
                this.$(".lrn-mask").remove(), this.$(".lrn-mask-strike-through :only-child").unwrap()
            },
            getCorrectResponseTextByIndex: function(e) {
                throw "Unimplemented function getCorrectResponseTextByIndex for question type:" + this.model.get("type")
            },
            shouldDisplayCorrectAnswerList: function() {
                throw "Unimplemented function shouldDisplayCorrectAnswerList for question type:" + this.model.get("type")
            },
            showCorrectAnswerList: function(e) {
                var n = ["formulaV2", "chemistry"],
                    r = e && e.math ? e.math.isMathquillRendering : !1,
                    s, o, u, a;
                if (this.displayLogic.displayCorrectAnswer && !this.showingAnswer) {
                    u = this.displayLogic.isMath || this.model.get("question") && this.model.get("question").is_math, a = this.model.get("question").type, this.$el.addClass("lrn_display_correct_answer_enabled"), this.$correctAnswerList || (this.$correctAnswerList = this.$(".lrn_correctAnswerList")), s = "", o = this.getValidatedResponses();
                    if (t.contains(n, a)) {
                        var f = !1,
                            l, c;
                        t(o).forEach(function(e, n) {
                            var r = t.isBoolean(e) ? e === !1 : this.shouldDisplayCorrectAnswerList(e, n);
                            r && (f = !0)
                        }, this);
                        if (f) {
                            l = this.model.getValidResponse().value;
                            if (t.isArray(l) && l.length) {
                                for (var h = 0; h < l.length; h++) {
                                    var p = l[h].value;
                                    if (t.isString(p)) {
                                        c = "\\(" + t.escape(p) + "\\)";
                                        break
                                    }
                                }
                                c && (s = '<li><span class="lrn_responseIndex">0</span><span class="lrn_responseText">' + c + "</span></li>")
                            }
                        }
                    } else t(o).forEach(function(e, n) {
                        var r = t.isBoolean(e) ? e === !1 : this.shouldDisplayCorrectAnswerList(e, n),
                            i = this.getCorrectResponseTextByIndex(n);
                        if (r) {
                            var u = "<li>";
                            t.isEmpty(i) && (i = "&nbsp;"), o.length && (u += '<span class="lrn_responseIndex">' + this.getResponseIndexLabel(n) + "</span>"), u += '<span class="lrn_responseText">' + i + "</span>", u += "</li>", s += u
                        }
                    }, this);
                    s && (this.$correctAnswerList.empty().append(s), this.$(".lrn_correctAnswers").removeClass("lrn_hide")), u && (this.mathquillRendering() || r ? this.renderMathquill() : i && i.render()), this.showingAnswer = !0
                }
            },
            getValidatedResponses: function() {
                var e = this.model.validateResponse(),
                    n, r;
                t.isBoolean(e) && (e = [e]);
                if ((!e || !e.length) && this.model.canValidateResponse()) {
                    r = 0, n = this.model.getValidResponse(), t.isArray(n.value) ? r = n.value.length : t.isArray(n) && (r = n.length), e = [];
                    for (var i = 0; i < r; i++) e.push(!1)
                }
                return e
            },
            clearCorrectAnswers: function() {
                this.showingAnswer && (this.$(".lrn_correctAnswers").addClass("lrn_hide"), this.$(".lrn_responseIndex").remove(), this.$correctAnswerList && this.$correctAnswerList.empty(), this.$("[data-lrn-suggested-answer-template]").remove(), this.showingAnswer = !1, this.processAccessibility())
            },
            getResponseIndexLabel: function(e) {
                var t = 1;
                if (this.displayLogic.validation_stem_numeration) switch (this.displayLogic.validation_stem_numeration) {
                    case "number":
                        break;
                    case "lower-alpha":
                        t = "a";
                        break;
                    case "upper-alpha":
                        t = "A";
                        break;
                    default:
                        delete this.displayLogic.validation_stem_numeration
                }
                return !this.displayLogic.validation_stem_numeration || this.displayLogic.validation_stem_numeration === "number" ? t + e : String.fromCharCode(t.charCodeAt(0) + e)
            }
        });
        return t.extend(s.prototype, r), s
    }), LearnosityAmd.define("utils/dom", ["vendor/dom", "vendor/lodash.underscore", "utils/browserCheck"], function(e, t, n) {
        "use strict";

        function o(e) {
            var t = document.createElement("p"),
                n = !1;
            if (t.addEventListener) t.addEventListener(e, function() {
                n = !0
            }, !1);
            else {
                if (!t.attachEvent) return !1;
                t.attachEvent("on" + e, function() {
                    n = !0
                })
            }
            return t.setAttribute("id", "target"), n
        }

        function u(t) {
            return t.map(function() {
                var t = e(this),
                    n = t.offset(),
                    r = n.left + parseInt(t.css("margin-left"), 10),
                    i = n.top + parseInt(t.css("margin-top"), 10);
                return {
                    top: i,
                    right: r + t.width(),
                    bottom: i + t.height(),
                    left: r,
                    el: this,
                    links: {}
                }
            }).get()
        }
        var r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            i = new function() {
                function o() {
                    var t = !1;
                    e(window).on("focus." + r, function() {
                        e(window).one("keypress." + r, i.correctStatus)
                    }), n ? (e(window).on("keydown." + r, function(e) {
                        var t = e || window.event;
                        t.keyCode === 20 && a(!i.status)
                    }), e(window).on("keyup." + r, function(e) {
                        var t = e || window.event;
                        t.keyCode === 20 && a(!1)
                    })) : (e(window).on("keydown." + r, function(e) {
                        var n = e || window.event;
                        !t && n.keyCode === 20 && (a(!i.status), t = !0)
                    }), e(window).on("keyup." + r, function(e) {
                        var n = e || window.event;
                        t && n.keyCode === 20 && (t = !1)
                    }))
                }

                function u() {
                    e(window).off("." + r)
                }

                function a(e) {
                    i.status !== e && (t.each(s, function(t) {
                        t(e)
                    }), i.status = e)
                }
                var n = /Mac|iPad|iPhone|iPod/.test(navigator.platform),
                    r = t.uniqueId("lrn_capslock_listener_"),
                    i = this,
                    s = [];
                this.status = !1, this.observe = function(e, n) {
                    return n && (e = t.bind(e, n)), s.push(e), s.length === 1 && o(), e
                }, this.unobserve = function(e) {
                    s = t.without(s, e), s.length || u()
                }, this.correctStatus = function(e) {
                    var t = e || window.event,
                        r = t.charCode || t.keyCode,
                        i = t.shiftKey;
                    r < 123 && r > 96 ? a(i) : r < 91 && r > 64 && (!n || !i) && a(!i)
                }
            },
            s = new function() {
                function u() {
                    f(), e(document).on(o.change + "." + n, f)
                }

                function a() {
                    e(document).off("." + n)
                }

                function f() {
                    var e = document[o.element];
                    r.element !== e && (t.each(i, function(t) {
                        t(e)
                    }), r.element = e)
                }
                var n = t.uniqueId("lrn_fullscreen_listener_"),
                    r = this,
                    i = [],
                    s = {
                        generic: {
                            change: "fullscreenchange",
                            element: "fullscreenElement"
                        },
                        webkit: {
                            change: "webkitfullscreenchange",
                            element: "webkitFullscreenElement"
                        },
                        moz: {
                            change: "mozfullscreenchange",
                            element: "mozFullScreenElement"
                        },
                        ms: {
                            change: "MSFullscreenChange",
                            element: "MSFullscreenElement"
                        }
                    },
                    o = t.find(s, function(e) {
                        if ("on" + e.change in document.documentElement) return e
                    });
                this.element = null, this.observe = function(e, n) {
                    return n && (e = t.bind(e, n)), o && (i.push(e), i.length === 1 && u()), e
                }, this.unobserve = function(e) {
                    i = t.without(i, e), i.length || a()
                }
            };
        return {
            capsLock: i,
            fullScreen: s,
            getViewportOffset: function() {
                var t = e(window),
                    n = {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    };
                return n.right = n.left + t.width(), n.bottom = n.top + t.height(), n
            },
            getVisibleViewportDimensions: function() {
                var r = window.innerWidth,
                    i = window.innerHeight,
                    s;
                return t.contains(["firefox", "opera"], n.browser) && (s = e('<div style="position:fixed;right:0;bottom:0;"></div>').appendTo(e("body")), r = s.get(0).getBoundingClientRect().left, i = s.get(0).getBoundingClientRect().top, s.remove()), {
                    width: r,
                    height: i
                }
            },
            sidesOnScreen: function(t) {
                var n = e(t),
                    r = n.offset(),
                    i = this.getViewportOffset();
                return r.right = r.left + n.outerWidth(), r.bottom = r.top + n.outerHeight(), {
                    top: i.top < r.top && r.top < i.bottom,
                    right: i.right > r.right && r.right > i.left,
                    bottom: i.bottom > r.bottom && r.bottom > i.top,
                    left: i.left < r.left && r.left < i.right
                }
            },
            observeMutation: function(t, n, i) {
                n = n || {};
                var s = e(t),
                    u, a = {
                        childList: n.childList || !1,
                        characterData: n.characterData || !1,
                        attributeOldValue: n.attributeOldValue || !1,
                        charactedDataOldValue: n.charactedDataOldValue || !1,
                        subtree: n.subtree || !1,
                        attributes: n.attributes || !1
                    };
                n.attributeFilter instanceof Array && (a.attributeFilter = n.attributeFilter);
                if (r) {
                    if (!(a.childList || a.attributes || a.characterData)) return console.log('NOTE: At the very least, childList, attributes, or characterData must be set to true. Otherwise, "An invalid or illegal string was specified" error is thrown.'), !1;
                    u = new r(function(e) {
                        e.forEach(function(e) {
                            i.call(e)
                        })
                    }), s.each(function() {
                        try {
                            u.observe(t, a)
                        } catch (e) {
                            console.log(e, t, a)
                        }
                    })
                } else a.attributes && (o("DOMAttrModified") ? s.on("DOMAttrModified.lrn.mutation", function(e) {
                    i.call(t, e.attrName)
                }) : "onpropertychange" in document.body && t.attachEvent("onpropertychange", function() {
                    i.call(t, window.event.propertyName)
                })), a.childList && (o("DOMSubtreeModified") ? s.on("DOMSubtreeModified.lrn.mutation DOMCharacterDataModified.lrn.mutation DOMAttributeNameChanged.lrn.mutation", function(e) {
                    i.call(t, e.attrName)
                }) : "onpropertychange" in document.body && s.find("*").each(function() {
                    this.attachEvent("onpropertychange", function() {
                        i.call(t, window.event.propertyName)
                    })
                }));
                return u
            },
            unobserveMutation: function(t, n) {
                t ? t.disconnect() : e(n).off(".lrn.mutation")
            },
            recomputeOpacityOn: function(e) {
                if (window.getComputedStyle) return window.getComputedStyle(e).opacity
            },
            updateButtonMap: function(e) {
                function r(e, n, r) {
                    return t.min([n, r]) <= e && t.max([n, r]) >= e
                }

                function i(e, n) {
                    var r = (n.left + n.right) / 2,
                        i = (n.top + n.bottom) / 2;
                    return t.first(t.sortBy(e, function(e) {
                        var t = (e.left + e.right) / 2,
                            n = (e.top + e.bottom) / 2,
                            s = Math.abs(t - r),
                            o = Math.abs(n - i);
                        return Math.sqrt(s * s + o * o)
                    }))
                }

                function s(e, t, n, i) {
                    return r(n, e, t) || r(i, e, t) || r(e, n, i) && r(t, n, i)
                }
                var n = u(e);
                return t.each(n, function(e) {
                    var t = [],
                        r = [],
                        o, u, a, f;
                    for (f = 0; f < n.length; f++) a = n[f], a !== e && (s(e.top, e.bottom, a.top, a.bottom) && a.left >= e.right && t.push(a), s(e.left, e.right, a.left, a.right) && a.top >= e.bottom && r.push(a));
                    o = i(t, e), u = i(r, e), o && (e.links.RIGHT = o, o.links.LEFT = e), u && (e.links.DOWN = u, u.links.UP = e)
                }), n
            },
            toggleBackgroundClickable: function(n) {
                var r = "pointer",
                    i = e("html"),
                    s = i.map(function() {
                        return e(this).css("cursor")
                    }).get();
                n && !t.isEqual(s, [r]) && (this.cachedHtmlCursorStyle = s, i.css("cursor", r)), !n && this.cachedHtmlCursorStyle && t.each(this.cachedHtmlCursorStyle, function(e, t) {
                    i.eq(t).css("cursor", e === "auto" ? "" : e)
                })
            },
            visible: function(t) {
                return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                    return e.css(this, "visibility") === "hidden"
                }).length
            },
            focusable: function(t, n) {
                var r = t.nodeName.toLowerCase(),
                    i, s, o;
                return r === "area" ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e('img[usemap="#' + s + '"]')[0], !!o && this.visible(o))) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : r === "a" ? t.href || n : n) && this.visible(t)
            },
            getNextTab: function(n, r) {
                var i = !1,
                    s = !1,
                    o = this,
                    u = !0,
                    a, f, l, c, h;
                return e(document).find("*").each(function(p, d) {
                    f = e(d), l = f.attr("tabindex"), c = isNaN(l), a = (c || l >= 0) && o.focusable(d, !c), h = !1, t.isArray(r) && t.each(r, function(e) {
                        f.hasClass(e) && (h = !0)
                    });
                    if (h) return !0;
                    !s && a && (s = f);
                    if (i && a) return u = !1, s = f, !1;
                    a && d === n && (i = !0)
                }), s ? {
                    nextTabElement: s,
                    isFirstElement: u
                } : !1
            }
        }
    });