// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jub5n":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "182fd8c390bee286";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"Zor9e":[function(require,module,exports) {
var _index = require("../../dist/index");
const router = new _index.Router({
    '/': 'App',
    '/about': 'About'
});
// eslint-disable-next-line require-jsdoc
class AppComponent extends _index.Component {
    template = `<div>
        <h1 class="red-box">This is app component</h1>
        <p onclick="{props.router.push('/about')}">About</p>
    </div>`;
    // eslint-disable-next-line require-jsdoc
    constructor(props){
        super();
        this.props = props;
        this.props.router = router;
    }
    // eslint-disable-next-line require-jsdoc
    render() {
        return _index.parseTemplate(this.template);
    }
}
// eslint-disable-next-line require-jsdoc
class AboutComponent extends _index.Component {
    template = `<div>
        <h1 class="green-box">This is about component</h1>
        <p onclick="{props.router.push('/')}">App</p>
    </div>`;
    // eslint-disable-next-line require-jsdoc
    constructor(props){
        super();
        this.props = props;
        this.props.router = router;
    }
    // eslint-disable-next-line require-jsdoc
    render() {
        return _index.parseTemplate(this.template);
    }
}
const rootElement = _index.parseTemplate(`
<div>
    <App />
    <About />
</div>
`, {
    App: AppComponent,
    About: AboutComponent
});
_index.init(rootElement, '#app', {}, router);

},{"../../dist/index":"7elyk"}],"7elyk":[function(require,module,exports) {
function e(e1, o1) {
    return Object.keys(o1).forEach(function(t1) {
        "default" === t1 || "__esModule" === t1 || e1.hasOwnProperty(t1) || Object.defineProperty(e1, t1, {
            enumerable: !0,
            get: function() {
                return o1[t1];
            }
        });
    }), e1;
}
function o(e2, o2, t2, n1) {
    Object.defineProperty(e2, o2, {
        get: t2,
        set: n1,
        enumerable: !0,
        configurable: !0
    });
}
var t = {};
o(t, "createTextNode", ()=>s
), o(t, "createFuncNode", ()=>c
), o(t, "createComponentNode", ()=>d
), o(t, "createNode", ()=>a
), o(t, "createDomNode", ()=>l
), o(t, "getParentClassComponentProps", ()=>m
);
var n = {};
let r, i;
o(n, "NodeTypes", ()=>r
), o(n, "EffectTags", ()=>i
), o(n, "Component", ()=>p
), function(e3) {
    e3.textNode = "TEXT_NODE", e3.unitOfWork = "UNIT_OF_WORK", e3.funcNode = "FUNC_NODE", e3.compNode = "COMP_NODE";
}(r || (r = {})), function(e4) {
    e4.update = "UPDATE", e4.delete = "DELETE", e4.create = "CREATE";
}(i || (i = {}));
class p {
    render() {
        return {
            type: "",
            children: []
        };
    }
    constructor(e5){
        this.parentProps = e5;
    }
}
function s(e6) {
    return {
        type: r.textNode,
        effectTag: i.create,
        value: e6,
        children: []
    };
}
function c(e7) {
    return {
        type: r.funcNode,
        effectTag: i.create,
        value: e7,
        children: []
    };
}
function d(e8) {
    return {
        type: r.compNode,
        effectTag: i.create,
        value: e8.compConstructor,
        props: e8.props,
        componentName: e8.componentName,
        children: []
    };
}
function a(e9, o3, t3, n2, ...r1) {
    return {
        type: e9,
        props: o3,
        value: t3,
        componentName: n2,
        effectTag: i.create,
        children: r1.map((e10)=>"string" == typeof e10 ? s(e10) : "function" == typeof e10 ? c(e10) : "object" == typeof e10 && "componentName" in e10 && e10.componentName ? d(e10) : e10
        )
    };
}
function l(e11) {
    const o4 = {
        ...e11.props,
        ...m(e11)
    };
    if (e11.type === r.textNode && e11.value) return document.createTextNode(e11.value);
    if ((e11.type === r.funcNode || e11.type === r.compNode) && e11.value) {
        const t4 = e11.value(o4);
        return document.createTextNode(t4);
    }
    const t5 = document.createElement(e11.type);
    return e11.props && Object.entries(e11.props).map(([e12, n3])=>{
        "string" == typeof n3 && t5.setAttribute(e12, n3), "function" == typeof n3 && (t5[e12] = ()=>n3(o4)
        );
    }), t5;
}
function m(e13) {
    return e13.parentComponent ? e13.parentComponent.props : e13.props;
}
var u = {};
o(u, "init", ()=>k
);
const f = [], h = [];
let N, C = {}, y = !1;
const g = {
    nodesToDeleteFromDom: h,
    uncommitedRootNode: void 0,
    currentRootNode: void 0,
    wipNode: void 0,
    hookIndex: 0,
    addNodeToQueue: (e14)=>{
        f.push(e14), y || requestIdleCallback(b);
    }
};
function v(e15) {
    if (!e15 || !e15.parent) return;
    let o5 = e15.parent;
    for(; !o5.dom;)o5 = o5.parent;
    const t6 = o5.dom;
    e15.effectTag === i.create && e15.dom && t6.appendChild(e15.dom), e15.effectTag === i.delete && w(e15, t6), e15.effectTag === i.update && function(e16) {
        if (e16.type === r.funcNode && !e16.isClassComponent) {
            const o6 = {
                ...e16.props,
                ...m(e16)
            }, t7 = e16.value(o6);
            if (("string" == typeof t7 || "number" == typeof t7) && e16.dom && "data" in e16.dom && t7 !== e16.dom.data) {
                const o7 = document.createTextNode(t7.toString());
                e16.parent.dom.replaceChild(o7, e16.dom), e16.dom = o7;
            }
        }
        const o8 = (e17)=>e17.startsWith("on")
        , t8 = (e18)=>"children" !== e18
        , n4 = (e19, o9)=>(t9)=>e19 && o9 && e19[t9] !== o9[t9] || !e19 && o9
        , i1 = (e20)=>(o10)=>e20 && !(o10 in e20) || !e20
        , p1 = e16.previousCommittedRootNode.props, s1 = e16.props;
        p1 && (Object.keys(p1).filter(o8).filter(n4(p1, s1)).forEach((o11)=>{
            const t10 = o11.toLowerCase().substring(2);
            e16.dom.removeEventListener(t10, p1[o11]);
        }), Object.keys(p1).filter(t8).filter(i1(s1)).forEach((o12)=>e16.dom[o12] = ""
        ));
        s1 && (Object.keys(s1).filter(t8).filter(n4(p1, s1)).forEach((o13)=>{
            if ("string" == typeof s1[o13] && (e16.dom[o13] = s1[o13]), "function" == typeof s1[o13]) {
                const t11 = {
                    ...e16.props,
                    ...m(e16)
                };
                e16.dom && (e16.dom[o13] = s1[o13](t11));
            }
        }), Object.keys(s1).filter(o8).filter(n4(p1, s1)).forEach((o14)=>{
            const t12 = o14.toLowerCase().substring(2);
            e16.dom.addEventListener(t12, s1[o14]);
        }));
    }(e15), v(e15.firstChild), v(e15.sibling);
}
function w(e21, o15) {
    e21.dom ? o15.removeChild(e21.dom) : w(e21.firstChild, o15);
}
function b(e22) {
    let o16 = !0;
    for(; o16 && f.length > 0;){
        y = !0;
        const t13 = f[0];
        f.shift();
        const n5 = x(t13);
        n5 && f.push(n5), o16 = e22.timeRemaining() < 1;
    }
    if (f.length) requestIdleCallback(b);
    else if (g.uncommitedRootNode) {
        y = !1, h.forEach(v), g.uncommitedRootNode.firstChild && v(g.uncommitedRootNode.firstChild);
        let e23 = g.uncommitedRootNode;
        for(; e23.parent && Object.keys(e23.parent).length;)e23 = e23.parent;
        g.currentRootNode = e23, g.uncommitedRootNode = void 0, "none" === document.body.style.display && (document.body.style.display = "block", N.push("/"));
    }
}
function x(e24) {
    if (e24.value && "function" == typeof e24.value && e24.value.prototype instanceof p ? function(e25) {
        g.hookIndex = 0, g.wipNode = e25, g.wipNode.hooks = g.wipNode.previousCommittedRootNode && g.wipNode.previousCommittedRootNode.hooks && Array.isArray(g.wipNode.previousCommittedRootNode.hooks) ? [
            ...g.wipNode.previousCommittedRootNode.hooks
        ] : [], e25.props = {
            ...e25.props,
            globalState: g
        };
        const o18 = new e25.value(e25.props);
        e25.children = e25.children.length ? e25.children : [
            o18.render()
        ], e25.isClassComponent = !0, e25.parentComponent = e25, e25.componentInstance = o18, N && Object.values(N.routes).includes(e25.componentName) && N.addComponentNode(e25, e25.componentName);
        R(e25, e25.children);
    }(e24) : function(e26) {
        e26.dom || (e26.dom = l(e26));
        R(e26, e26.children);
    }(e24), e24.firstChild) return e24.firstChild;
    let o17 = e24;
    for(; o17;){
        if (o17.sibling) return o17.sibling;
        o17 = o17.parent;
    }
}
function R(e27, o19) {
    let t14, n6 = 0, r2 = e27.previousCommittedRootNode?.firstChild ?? void 0;
    for(; n6 < o19.length || r2;){
        let p2 = o19[n6];
        r2 && r2.type === p2.type && (p2 = {
            type: p2.type,
            effectTag: i.update,
            props: p2.props,
            children: p2.children,
            firstChild: p2.firstChild,
            sibling: p2.sibling,
            value: p2.value,
            dom: r2.dom,
            previousCommittedRootNode: r2,
            parent: e27,
            isClassComponent: p2.isClassComponent,
            hooks: p2.hooks,
            componentInstance: p2.componentInstance
        }, p2.parentComponent = p2.parent && p2.parent.isClassComponent ? p2.parent : p2.parent ? p2.parent.parentComponent : p2), r2 && r2.type !== p2.type && (r2.effectTag = i.delete, h.push(r2), p2 = {
            type: p2.type,
            effectTag: i.create,
            props: p2.props,
            children: p2.children,
            value: p2.value,
            parent: e27,
            isClassComponent: p2.isClassComponent,
            firstChild: p2.firstChild,
            sibling: p2.sibling,
            hooks: p2.hooks,
            componentName: p2.componentName,
            componentInstance: p2.componentInstance
        }, p2.parentComponent = p2.parent && p2.parent.isClassComponent ? p2.parent : p2.parent ? p2.parent.parentComponent : p2), !r2 && p2 && (p2 = {
            type: p2.type,
            effectTag: i.create,
            props: p2.props,
            children: p2.children,
            value: p2.value,
            parent: e27,
            hooks: p2.hooks,
            isClassComponent: p2.isClassComponent,
            componentName: p2.componentName,
            componentInstance: p2.componentInstance
        }, p2.parentComponent = p2.parent && p2.parent.isClassComponent ? p2.parent : p2.parent ? p2.parent.parentComponent : p2), r2 && (r2 = r2.sibling), p2.type && (t14 ? t14.sibling = p2 : e27.firstChild = p2), t14 = p2, o19[n6] = p2, n6++;
    }
}
function k(e28, o20, t15, n7) {
    const s2 = document.querySelector(o20);
    if (n7 && (N = n7, document.body.style.display = "none"), !s2) throw new Error(`Can't find element with selector ${o20}`);
    !function(e29, o21, t16) {
        e29.value && "function" == typeof e29.value && e29.value.prototype instanceof p ? g.uncommitedRootNode = {
            type: r.unitOfWork,
            dom: o21,
            effectTag: i.create,
            children: [
                {
                    type: e29.type,
                    effectTag: i.create,
                    children: e29.children,
                    value: e29.value,
                    props: e29.props,
                    componentName: e29.componentName,
                    isClassComponent: !0
                }
            ],
            previousCommittedRootNode: g.currentRootNode
        } : g.uncommitedRootNode = {
            type: r.unitOfWork,
            dom: o21,
            value: e29.value,
            props: {
                ...t16,
                ...e29.props
            },
            effectTag: i.create,
            children: e29.children,
            previousCommittedRootNode: g.currentRootNode
        }, g.uncommitedRootNode.parentComponent = g.uncommitedRootNode, C = t16, C.globalState = g;
        const n8 = g.uncommitedRootNode;
        f.push(n8);
    }(e28, s2, t15), requestIdleCallback(b);
}
var T, E = {};
function O(e30, o22 = "", t17) {
    const n9 = />/, r3 = {
        type: "element",
        name: "",
        length: 0,
        value: "",
        props: {},
        children: []
    };
    let i2 = e30.match(/^\n*?[ \t]*?<(\w+)/);
    const p3 = new RegExp(`[ \t]*?</${o22}>`);
    if (!i2) {
        if (i2 = e30.match(p3), !i2) throw new Error("parsing error: no closing tag");
        const o23 = function(e33) {
            const o25 = /{[^}]*}/;
            let t18 = e33.match(o25);
            const n10 = [];
            for(; t18;){
                const r4 = e33.slice(0, t18.index);
                r4.length && n10.push(r4);
                const i3 = I(e33.slice(t18.index + 1, t18.index + t18[0].length - 1).trim());
                n10.push(i3), t18 = (e33 = e33.slice(t18.index + t18[0].length)).match(o25);
            }
            e33.length && n10.push(e33);
            return n10;
        }(e30.slice(0, i2.index).trim());
        if (0 === o23.length) r3.value = "";
        else for (const e31 of o23)"string" == typeof e31 ? r3.children.push({
            type: "textValue",
            name: "",
            value: e31,
            props: {},
            length: e31.length,
            children: []
        }) : r3.children.push({
            type: "funcValue",
            name: "",
            value: e31,
            props: {},
            length: NaN,
            children: []
        });
        return r3.length = i2.index + i2[0].length, r3.type = "element", r3.isClosing = !0, r3;
    }
    let s3 = i2.index + i2[0].length;
    if (r3.name = i2[1], i2 = (e30 = e30.slice(i2.index + i2[0].length)).match(n9), !i2) throw new Error("parsing error: no end of opening tag");
    let c1 = e30, d1 = 0;
    for(; i2 && "=" === c1[i2.index - 1];)c1 = c1.slice(i2.index + 1), d1 += i2.index + 1, i2 = c1.match(n9);
    if (!i2) throw new Error("parsing error: no end of opening tag");
    s3 += i2.index + i2[0].length + d1;
    const a1 = e30.slice(0, i2.index + d1);
    if (r3.props = function(e34) {
        const o26 = {}, t19 = ()=>e34.match(/ *\w+=\".+?(?=")"/) || e34.match(/ *\w+/)
        ;
        let n11 = t19();
        if (!n11) return o26;
        for(; n11;){
            const r5 = n11[0];
            let [i4, ...p4] = r5.split("=");
            i4 = i4.trim();
            let s4 = p4.join("=");
            s4 = "string" != typeof s4 || !s4.length || s4.slice(1, -1);
            const c2 = /{.*}/;
            if ("string" == typeof s4) {
                const e35 = s4.match(c2);
                e35 && (s4 = I(e35[0].slice(1, -1)));
            }
            o26[i4] = s4, e34 = e34.slice(0, n11.index) + e34.slice(n11.index + r5.length), n11 = t19();
        }
        return o26;
    }(a1), "/>" === e30.slice(i2.index + d1 - 1, i2.index + d1 + 1)) return r3.type = "self-closing", t17 && r3.name in t17 && (r3.value = t17[r3.name], r3.type = "component", r3.componentName = r3.name), r3.isClosing = !0, r3.length = s3, r3;
    let l1 = O(e30 = e30.slice(i2.index + d1 + 1), r3.name, t17);
    for(; "element" !== l1.type || !l1.isClosing;)e30 = e30.slice(l1.length), r3.children.push(l1), s3 += l1.length, l1 = O(e30, r3.name, t17);
    return s3 += l1.length, l1.value.length ? r3.children.push(l1) : l1.children.length && r3.children.push(...l1.children), r3.length = s3, r3;
}
function I(e36) {
    return new Function("props", `return ${e36}`);
}
function j(e37) {
    let o27;
    "component" === e37.type && e37.value && (o27 = e37.value);
    const t20 = {
        type: e37.name,
        props: e37.props,
        value: o27,
        componentName: e37.componentName,
        children: e37.children.map((e38)=>[
                "funcValue",
                "textValue"
            ].includes(e38.type) ? e38.value : "component" === e38.type ? {
                compConstructor: e38.value,
                props: e38.props,
                componentName: e38.componentName
            } : j(e38)
        )
    };
    return a(t20.type, t20.props, o27, t20.componentName, ...t20.children);
}
function D(e39, o28) {
    return j(O(e39, "", o28));
}
T = E, Object.defineProperty(T, "__esModule", {
    value: !0,
    configurable: !0
}), o(E, "default", ()=>O
), o(E, "parseTemplate", ()=>D
);
var L = {};
function P(e40, o29) {
    const t21 = o29.wipNode.previousCommittedRootNode && o29.wipNode.previousCommittedRootNode.hooks && o29.wipNode.previousCommittedRootNode.hooks[o29.hookIndex], n12 = {
        state: t21 ? t21.state : e40,
        queue: []
    };
    (t21 ? t21.queue : []).forEach((e41)=>{
        n12.state = e41(n12.state);
    });
    return o29.wipNode.hooks.push(n12), o29.hookIndex++, [
        n12.state,
        (e42)=>{
            n12.queue.push(e42), o29.uncommitedRootNode = {
                type: o29.wipNode.type,
                children: o29.wipNode.children,
                dom: o29.wipNode.dom,
                props: o29.wipNode.props,
                value: o29.wipNode.value,
                previousCommittedRootNode: o29.wipNode,
                parent: o29.wipNode.parent,
                firstChild: o29.wipNode.firstChild,
                parentComponent: o29.wipNode.parentComponent
            }, o29.addNodeToQueue(o29.uncommitedRootNode), o29.nodesToDeleteFromDom = [];
        }
    ];
}
o(L, "useState", ()=>P
);
var _ = {};
o(_, "Router", ()=>M
);
class M {
    routes = {};
    history = [];
    componentNodes = {};
    constructor(e43){
        window.addEventListener("popstate", (e44)=>{
            const o30 = e44.state.routeLink;
            this.showMainComponent(o30);
        }), this.routes = e43;
    }
    push(e45) {
        window.history.pushState({
            routeLink: e45
        }, `${e45}`, e45), this.showMainComponent(e45);
    }
    showMainComponent(e48) {
        const o32 = this.routes[e48];
        for (const e46 of this.componentNodes[o32].children)e46.dom instanceof HTMLElement && (e46.dom.style.display = "block");
        for (const e47 of Object.keys(this.componentNodes))if (e47 !== o32) for (const o31 of this.componentNodes[e47].children)o31.dom instanceof HTMLElement && (o31.dom.style.display = "none");
    }
    addComponentNode(e49, o33) {
        this.componentNodes[o33] = e49;
    }
}
e(module.exports, t), e(module.exports, u), e(module.exports, n), e(module.exports, E), e(module.exports, L), e(module.exports, _);

},{}]},["jub5n","Zor9e"], "Zor9e", "parcelRequireb412")

//# sourceMappingURL=index.90bee286.js.map
