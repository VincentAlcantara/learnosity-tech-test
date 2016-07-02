/*************************************************************
 *  Learnosity Questions API version v2.87.0
 *
 *  Documentation available at: http://docs.learnosity.com
 *
 *  Copyright 2011 - 2016 Learnosity - http://www.learnosity.com
 */
/*
 *
 * FIX-20160702 
 * Vincent Alcantara
 * vincentalcantara@gmail.com
 *
 * 2016-07-02:  Implemented a workaround to use local version of api.js as there was an issue with the network provided version
 *
 */
var console, LearnosityApp;
console = window.console || {
    log: function() {}
}, console.error = console.error || console.log, LearnosityApp = window.LearnosityApp || function() {
    "use strict";

    function n(e) {
        t[e] = function() {
            this._internal._cachedMethodCalls || (this._internal._cachedMethodCalls = []), this._internal._cachedMethodCalls.push({
                method: e,
                args: Array.prototype.slice.call(arguments)
            })
        }
    }
    var e, t = {};
    t.version = "v2.87.0", t.requestedApiVersion = "default", t._internal = {}, t._internal.config = {
        apiHost: "http://questions.learnosity.com/v2.87.0",
        assetsHost: "http://dof8gyq4yceq.cloudfront.net/v2.87.0",
        devEnvironment: !1,
        analytics: {
            account: "UA-249610-21",
            tracker: "lrnQuestions",
            siteSpeedSampleRate: "0.1"
        }
    }, t._internal.config.devEnvironment && (t._internal.config.assetsHost = t._internal.config.apiHost), t._internal.onScriptLoadError = function() {
        var e, n = t._internal._cachedInitCalls && t._internal._cachedInitCalls[0] && t._internal._cachedInitCalls[0].args;
        if (n)
            for (var r = n.length - 1; r >= 0 && !e; r--) Object.prototype.toString.call(n[r].errorListener) === "[object Function]" && (e = n[r].errorListener);
        var i = t._internal.apiLoadingFailed;
        t.errors = [i], console.error(i.code + ": " + i.msg + ". View this error on questionsFacade.errors[0]"), e ? e(i) : window.alert(i.msg + "\n\nPlease contact your administrator if you require further assistance.")
    }, t._internal.loadedCss = "", t._internal.loadCss = function(e, n) {
        t._internal.config.assetsHost && !n && (e = t._internal.config.assetsHost + e);
        if (t._internal.loadedCss.indexOf(e) === -1) {
            var r = document.createElement("link");
            r.type = "text/css", r.rel = "stylesheet", r.href = e, t._internal.loadedCss += e, t._internal.config.devEnvironment && (r.href += (e.indexOf("?") === -1 ? "?" : "&") + "bust=" + (new Date).getTime()), document.getElementsByTagName("head")[0].appendChild(r)
        }
    }, t._internal.addScriptToDom = function(e) {
        var n = document.createElement("script"),
            r = document.getElementsByTagName("head")[0];
        t._internal.config.devEnvironment && e.indexOf("?") === -1 && (e += "?bust=" + (new Date).getTime()), n.src = e, n.onerror = function() {
            t._internal.apiLoadingFailed = {
                code: 10017,
                msg: "Failed loading Questions API, can't load required modules",
                detail: "Couldn't load " + e
            }, t._internal._cachedInitCalls && t._internal.onScriptLoadError()
        }, r.appendChild(n)
    }, t._internal.loadAssets = function() {
        t._internal.loadCss("/stylesheets/css/preload.css"), t._internal.addScriptToDom("/src/static/custom/api.js"), t._internal.loadCss("/stylesheets/css/vendor.css"), t._internal.loadCss("/stylesheets/css/main.css")
    }, t.init = function() {
        this._internal._cachedInitCalls || (this._internal._cachedInitCalls = []);
        var e = {},
            n = [];
        for (var r = 0; r < arguments.length; r++) n.push(arguments[r]);
        return this._internal._cachedInitCalls.push({
            appStub: e,
            args: n
        }), t._internal.apiLoadingFailed && t._internal.onScriptLoadError(), e
    }, e = ["reset", "save", "submit", "renderMath", "push", "needsPushing"];
    for (var r = 0; r < e.length; r++) n(e[r]);
    return t._internal.loadAssets(), t
}();