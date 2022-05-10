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
})({"cogL5":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "54dfb2b250d7f2ff";
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

},{}],"6yKdW":[function(require,module,exports) {
var _index = require("../dist/index");
// eslint-disable-next-line require-jsdoc
class AppComponent extends _index.Component {
    template = `<div>
        <h1>This is app component</h1>
        <StateComponent name="state" />
    </div>`;
    // eslint-disable-next-line require-jsdoc
    constructor(){
        super();
    }
    // eslint-disable-next-line require-jsdoc
    render() {
        return _index.parseTemplate(this.template, {
            StateComponent: StateComponent
        });
    }
}
// eslint-disable-next-line require-jsdoc
class StateComponent extends _index.Component {
    template = `<div>
        <div>
            <h1>Hello {props.name}</h1>
            <p>The char is: {props.state.char}</p>
            <p>The state is: {props.state.num}</p>
        </div>
        <button onclick="{props.setState(({char, num}) => ({num, char: String.fromCharCode(char.charCodeAt(0) + 1)}) )}" >Go to next char</button>
        <button onclick="{props.setState(({char, num}) => ({num: num + 1, char}) )}" >Increment state</button>
    </div>`;
    // eslint-disable-next-line require-jsdoc
    constructor(props){
        super();
        this.props = props;
        [this.props.state, this.props.setState] = _index.useState({
            char: 'a',
            num: 1
        }, this.props.globalState);
    }
    // eslint-disable-next-line require-jsdoc
    render() {
        return _index.parseTemplate(this.template);
    }
}
const rootElement = _index.parseTemplate('<App name="app component" />', {
    App: AppComponent
});
_index.init(rootElement, '#app', {
    name: 'App element'
});

},{"../dist/index":"7elyk"}],"7elyk":[function(require,module,exports) {
function $parcel$exportWildcard(dest, source) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function get() {
                return source[key];
            }
        });
    });
    return dest;
}
function $parcel$export(e, n, v, s) {
    Object.defineProperty(e, n, {
        get: v,
        set: s,
        enumerable: true,
        configurable: true
    });
}
function $parcel$defineInteropFlag(a) {
    Object.defineProperty(a, '__esModule', {
        value: true,
        configurable: true
    });
}
var $020871d0a4577cb7$exports = {};
$parcel$export($020871d0a4577cb7$exports, "createTextNode", ()=>$020871d0a4577cb7$export$b2ce9ad90858ed7a
);
$parcel$export($020871d0a4577cb7$exports, "createFuncNode", ()=>$020871d0a4577cb7$export$799c61d34e780353
);
$parcel$export($020871d0a4577cb7$exports, "createComponentNode", ()=>$020871d0a4577cb7$export$fefd1e69396ee10d
);
$parcel$export($020871d0a4577cb7$exports, "createNode", ()=>$020871d0a4577cb7$export$270e7ba5936d3c48
);
$parcel$export($020871d0a4577cb7$exports, "createDomNode", ()=>$020871d0a4577cb7$export$34d901be6c9525f9
);
$parcel$export($020871d0a4577cb7$exports, "getParentClassComponentProps", ()=>$020871d0a4577cb7$export$d74f66a29f3b4c2c
);
var $faefaad95e5fcca0$exports = {};
$parcel$export($faefaad95e5fcca0$exports, "NodeTypes", ()=>$faefaad95e5fcca0$export$2ed9472effad1b70
);
$parcel$export($faefaad95e5fcca0$exports, "EffectTags", ()=>$faefaad95e5fcca0$export$ea8d20c92e194fd2
);
$parcel$export($faefaad95e5fcca0$exports, "Component", ()=>$faefaad95e5fcca0$export$16fa2f45be04daa8
);
let $faefaad95e5fcca0$export$2ed9472effad1b70;
(function($faefaad95e5fcca0$export$2ed9472effad1b701) {
    $faefaad95e5fcca0$export$2ed9472effad1b701["textNode"] = 'TEXT_NODE';
    $faefaad95e5fcca0$export$2ed9472effad1b701["unitOfWork"] = 'UNIT_OF_WORK';
    $faefaad95e5fcca0$export$2ed9472effad1b701["funcNode"] = 'FUNC_NODE';
    $faefaad95e5fcca0$export$2ed9472effad1b701["compNode"] = 'COMP_NODE';
})($faefaad95e5fcca0$export$2ed9472effad1b70 || ($faefaad95e5fcca0$export$2ed9472effad1b70 = {}));
let $faefaad95e5fcca0$export$ea8d20c92e194fd2;
(function($faefaad95e5fcca0$export$ea8d20c92e194fd21) {
    $faefaad95e5fcca0$export$ea8d20c92e194fd21["update"] = 'UPDATE';
    $faefaad95e5fcca0$export$ea8d20c92e194fd21["delete"] = 'DELETE';
    $faefaad95e5fcca0$export$ea8d20c92e194fd21["create"] = 'CREATE';
})($faefaad95e5fcca0$export$ea8d20c92e194fd2 || ($faefaad95e5fcca0$export$ea8d20c92e194fd2 = {}));
class $faefaad95e5fcca0$export$16fa2f45be04daa8 {
    render() {
        return {
            type: '',
            children: []
        };
    }
    constructor(parentProps){
        this.parentProps = parentProps;
    }
}
function $020871d0a4577cb7$export$b2ce9ad90858ed7a(text) {
    const textNode = {
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.textNode,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        value: text,
        children: []
    };
    return textNode;
}
function $020871d0a4577cb7$export$799c61d34e780353(func) {
    const functNode = {
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.funcNode,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        value: func,
        children: []
    };
    return functNode;
}
function $020871d0a4577cb7$export$fefd1e69396ee10d(node) {
    const functNode = {
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.compNode,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        value: node.compConstructor,
        props: node.props,
        children: []
    };
    return functNode;
}
function $020871d0a4577cb7$export$270e7ba5936d3c48(type, props, componentConstructor, ...children) {
    const node = {
        type: type,
        props: props,
        value: componentConstructor,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: children.map((el)=>{
            if (typeof el === 'string') return $020871d0a4577cb7$export$b2ce9ad90858ed7a(el);
            else if (typeof el === 'function') return $020871d0a4577cb7$export$799c61d34e780353(el);
            else if (typeof el === 'object' && 'compConstructor' in el) return $020871d0a4577cb7$export$fefd1e69396ee10d(el);
            else return el;
        })
    };
    return node;
}
function $020871d0a4577cb7$export$34d901be6c9525f9(node) {
    const joinedProps = {
        ...node.props,
        ...$020871d0a4577cb7$export$d74f66a29f3b4c2c(node)
    };
    if (node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.textNode && node.value) {
        const textDomNode = document.createTextNode(node.value);
        return textDomNode;
    }
    if ((node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.funcNode || node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.compNode) && node.value) {
        const computedValue = node.value(joinedProps);
        // TODO: if computedValue contains component or arrays of component
        // add them to parent node
        const computedTextDomNode = document.createTextNode(computedValue);
        return computedTextDomNode;
    }
    const domNode = document.createElement(node.type);
    if (node.props) Object.entries(node.props).map(([propName, propValue])=>{
        // TODO: fix it
        if (typeof propValue === 'string') domNode[propName] = propValue;
        if (typeof propValue === 'function') domNode[propName] = ()=>propValue(joinedProps)
        ;
    });
    return domNode;
}
function $020871d0a4577cb7$export$d74f66a29f3b4c2c(node) {
    if (node.parentComponent) return node.parentComponent.props;
    else return node.props;
// let parentNode: FiberNode | undefined = node.parent;
// let parentComponentProps: PropsType = {};
// console.log(parentNode);
// while (parentNode && Object.keys(parentNode).length) {
//     if (
//         parentNode.parentComponentProps &&
//         Object.keys(parentNode.parentComponentProps).length
//     ) {
//         parentComponentProps = parentNode.parentComponentProps;
//         break;
//     }
//     parentNode = parentNode.parent;
// }
// return parentComponentProps;
}
var $d56f0a173836b9ee$exports = {};
$parcel$export($d56f0a173836b9ee$exports, "init", ()=>$d56f0a173836b9ee$export$2cd8252107eb640b
);
const $d56f0a173836b9ee$var$queue = [];
const $d56f0a173836b9ee$var$nodesToDeleteFromDom = [];
let $d56f0a173836b9ee$var$componentProps = {};
let $d56f0a173836b9ee$var$isWorking = false;
const $d56f0a173836b9ee$var$globalState = {
    nodesToDeleteFromDom: $d56f0a173836b9ee$var$nodesToDeleteFromDom,
    uncommitedRootNode: undefined,
    currentRootNode: undefined,
    wipNode: undefined,
    hookIndex: 0,
    addNodeToQueue: (node)=>{
        $d56f0a173836b9ee$var$queue.push(node);
        console.log('called');
        if (!$d56f0a173836b9ee$var$isWorking) requestIdleCallback($d56f0a173836b9ee$var$runJobQueue);
    }
};
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$render(element, container, props) {
    if (element.value && typeof element.value === 'function' && element.value.prototype instanceof $faefaad95e5fcca0$export$16fa2f45be04daa8) $d56f0a173836b9ee$var$globalState.uncommitedRootNode = {
        // TODO: fix it
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: [
            {
                type: element.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
                children: element.children,
                value: element.value,
                props: element.props,
                isClassComponent: true
            }, 
        ],
        previousCommittedRootNode: $d56f0a173836b9ee$var$globalState.currentRootNode
    };
    else $d56f0a173836b9ee$var$globalState.uncommitedRootNode = {
        // TODO: fix it
        type: $faefaad95e5fcca0$export$2ed9472effad1b70.unitOfWork,
        dom: container,
        value: element.value,
        props: element.props,
        effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
        children: element.children,
        previousCommittedRootNode: $d56f0a173836b9ee$var$globalState.currentRootNode
    };
    $d56f0a173836b9ee$var$globalState.uncommitedRootNode.parentComponent = $d56f0a173836b9ee$var$globalState.uncommitedRootNode;
    $d56f0a173836b9ee$var$componentProps = props;
    $d56f0a173836b9ee$var$componentProps.globalState = $d56f0a173836b9ee$var$globalState;
    const nextNode = $d56f0a173836b9ee$var$globalState.uncommitedRootNode;
    $d56f0a173836b9ee$var$queue.push(nextNode);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$workWithDom(node) {
    if (!node || !node.parent) return;
    let domParentNode = node.parent;
    while(!domParentNode.dom)domParentNode = domParentNode.parent;
    const domParent = domParentNode.dom;
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.create && node.dom) domParent.appendChild(node.dom);
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.delete) $d56f0a173836b9ee$var$commitDeletion(node, domParent);
    if (node.effectTag === $faefaad95e5fcca0$export$ea8d20c92e194fd2.update) $d56f0a173836b9ee$var$updateDomNode(node);
    $d56f0a173836b9ee$var$workWithDom(node.firstChild);
    $d56f0a173836b9ee$var$workWithDom(node.sibling);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$commitDeletion(node, domParent) {
    if (node.dom) domParent.removeChild(node.dom);
    else $d56f0a173836b9ee$var$commitDeletion(node.firstChild, domParent);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$updateDomNode(node) {
    if (node.type === $faefaad95e5fcca0$export$2ed9472effad1b70.funcNode && !node.isClassComponent) {
        const joinedProps = {
            ...node.props,
            ...$020871d0a4577cb7$export$d74f66a29f3b4c2c(node)
        };
        const computedValue = node.value(joinedProps);
        if ((typeof computedValue === 'string' || typeof computedValue === 'number') && node.dom && 'data' in node.dom) {
            if (computedValue !== node.dom.data) {
                const newDomNode = document.createTextNode(computedValue.toString());
                node.parent.dom.replaceChild(newDomNode, node.dom);
                node.dom = newDomNode;
            }
        }
    }
    const isEvent = (key)=>key.startsWith('on')
    ;
    const isProperty = (key)=>key !== 'children'
    ;
    const isNew = (prev, next)=>(key)=>prev && next && prev[key] !== next[key] || !prev && next
    ;
    const isGone = (next)=>(key)=>next && !(key in next) || !next
    ;
    const prevProps = node.previousCommittedRootNode.props;
    const currentProps = node.props;
    if (prevProps) {
        Object.keys(prevProps).filter(isEvent).filter(isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.removeEventListener(eventType, prevProps[name]);
        });
        Object.keys(prevProps).filter(isProperty).filter(isGone(currentProps)).forEach((propName)=>node.dom[propName] = ''
        );
    }
    if (currentProps) {
        Object.keys(currentProps).filter(isProperty).filter(isNew(prevProps, currentProps)).forEach((propName)=>{
            if (typeof currentProps[propName] === 'string') node.dom[propName] = currentProps[propName];
            if (typeof currentProps[propName] === 'function') {
                const joinedProps = {
                    ...node.props,
                    ...$020871d0a4577cb7$export$d74f66a29f3b4c2c(node)
                };
                if (node.dom) node.dom[propName] = currentProps[propName](joinedProps);
            }
        });
        Object.keys(currentProps).filter(isEvent).filter(isNew(prevProps, currentProps)).forEach((name)=>{
            const eventType = name.toLowerCase().substring(2);
            node.dom.addEventListener(eventType, currentProps[name]);
        });
    }
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$runJobQueue(deadline) {
    let canRender = true;
    while(canRender && $d56f0a173836b9ee$var$queue.length > 0){
        $d56f0a173836b9ee$var$isWorking = true;
        const currentNode = $d56f0a173836b9ee$var$queue[0];
        $d56f0a173836b9ee$var$queue.shift();
        const nextNode = $d56f0a173836b9ee$var$applyJob(currentNode);
        if (nextNode) $d56f0a173836b9ee$var$queue.push(nextNode);
        canRender = deadline.timeRemaining() < 1;
    }
    if ($d56f0a173836b9ee$var$queue.length) requestIdleCallback($d56f0a173836b9ee$var$runJobQueue);
    else if ($d56f0a173836b9ee$var$globalState.uncommitedRootNode) {
        $d56f0a173836b9ee$var$isWorking = false;
        $d56f0a173836b9ee$var$nodesToDeleteFromDom.forEach($d56f0a173836b9ee$var$workWithDom);
        // we need add root node to DOM separately of creating DOM element
        // because it can take more time that we want
        // console.log(globalState.uncommitedRootNode.hooks);
        if ($d56f0a173836b9ee$var$globalState.uncommitedRootNode.firstChild) $d56f0a173836b9ee$var$workWithDom($d56f0a173836b9ee$var$globalState.uncommitedRootNode.firstChild);
        let mainRootNode = $d56f0a173836b9ee$var$globalState.uncommitedRootNode;
        while(mainRootNode.parent && Object.keys(mainRootNode.parent).length)mainRootNode = mainRootNode.parent;
        $d56f0a173836b9ee$var$globalState.currentRootNode = mainRootNode;
        $d56f0a173836b9ee$var$globalState.uncommitedRootNode = undefined;
    }
}
// how it works: https://pomb.us/static/19c304dcb3824b14722691ded539ecdb/ac667/fiber4.png
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$applyJob(node) {
    const isClassComponent = node.value && typeof node.value === 'function' && node.value.prototype instanceof $faefaad95e5fcca0$export$16fa2f45be04daa8;
    if (isClassComponent) $d56f0a173836b9ee$var$updateClassComponent(node);
    else $d56f0a173836b9ee$var$updateHostComponent(node);
    // if node has a child we should apply job to it
    if (node.firstChild) return node.firstChild;
    // else if node has a siblind we should apply job to it
    // if node doesn't have a sibling nor child do nothing
    let nextNode = node;
    while(nextNode){
        if (nextNode.sibling) return nextNode.sibling;
        // TODO: fix it
        nextNode = nextNode.parent;
    }
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$updateHostComponent(node) {
    if (!node.dom) node.dom = $020871d0a4577cb7$export$34d901be6c9525f9(node);
    $d56f0a173836b9ee$var$updateChildrenNode(node, node.children);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$updateClassComponent(node) {
    $d56f0a173836b9ee$var$globalState.hookIndex = 0;
    $d56f0a173836b9ee$var$globalState.wipNode = node;
    $d56f0a173836b9ee$var$globalState.wipNode.hooks = $d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode && $d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode.hooks && Array.isArray($d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode.hooks) ? [
        ...$d56f0a173836b9ee$var$globalState.wipNode.previousCommittedRootNode.hooks
    ] : [];
    node.props = {
        ...node.props,
        globalState: $d56f0a173836b9ee$var$globalState
    };
    const component = new node.value(node.props);
    node.children = node.children.length ? node.children : [
        component.render()
    ];
    node.isClassComponent = true;
    node.parentComponent = node;
    $d56f0a173836b9ee$var$updateChildrenNode(node, node.children);
}
// eslint-disable-next-line require-jsdoc
function $d56f0a173836b9ee$var$updateChildrenNode(node, children) {
    let index = 0;
    let prevSibling;
    let committedNode = node.previousCommittedRootNode?.firstChild ?? undefined;
    while(index < children.length || committedNode){
        let childNode = children[index];
        if (committedNode && committedNode.type === childNode.type) {
            // update node props
            childNode = {
                type: childNode.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.update,
                props: childNode.props,
                children: childNode.children,
                firstChild: childNode.firstChild,
                sibling: childNode.sibling,
                value: childNode.value,
                dom: committedNode.dom,
                previousCommittedRootNode: committedNode,
                parent: node,
                isClassComponent: childNode.isClassComponent,
                hooks: childNode.hooks
            };
            childNode.parentComponent = childNode.parent && childNode.parent.isClassComponent ? childNode.parent : childNode.parent ? childNode.parent.parentComponent : childNode;
        }
        if (committedNode && committedNode.type !== childNode.type) {
            // delete old node and add new node
            committedNode.effectTag = $faefaad95e5fcca0$export$ea8d20c92e194fd2.delete;
            $d56f0a173836b9ee$var$nodesToDeleteFromDom.push(committedNode);
            // TODO: check it
            childNode = {
                type: childNode.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
                isClassComponent: childNode.isClassComponent,
                firstChild: childNode.firstChild,
                sibling: childNode.sibling,
                hooks: childNode.hooks
            };
            childNode.parentComponent = childNode.parent && childNode.parent.isClassComponent ? childNode.parent : childNode.parent ? childNode.parent.parentComponent : childNode;
        }
        if (!committedNode && childNode) {
            // add new node
            childNode = {
                type: childNode.type,
                effectTag: $faefaad95e5fcca0$export$ea8d20c92e194fd2.create,
                props: childNode.props,
                children: childNode.children,
                value: childNode.value,
                parent: node,
                hooks: childNode.hooks,
                isClassComponent: childNode.isClassComponent
            };
            childNode.parentComponent = childNode.parent && childNode.parent.isClassComponent ? childNode.parent : childNode.parent ? childNode.parent.parentComponent : childNode;
        }
        if (committedNode) committedNode = committedNode.sibling;
        if (childNode.type) {
            if (prevSibling) prevSibling.sibling = childNode;
            else node.firstChild = childNode;
        }
        prevSibling = childNode;
        children[index] = childNode;
        index++;
    }
}
function $d56f0a173836b9ee$export$2cd8252107eb640b(element, containerSelector, props) {
    const domContainer = document.querySelector(containerSelector);
    if (domContainer) {
        $d56f0a173836b9ee$var$render(element, domContainer, props);
        requestIdleCallback($d56f0a173836b9ee$var$runJobQueue);
    } else throw new Error(`Can't find element with selector ${containerSelector}`);
}
var $f9ed6fea0cb0dd94$exports = {};
$parcel$defineInteropFlag($f9ed6fea0cb0dd94$exports);
$parcel$export($f9ed6fea0cb0dd94$exports, "default", ()=>$f9ed6fea0cb0dd94$export$2e2bcd8739ae039
);
$parcel$export($f9ed6fea0cb0dd94$exports, "parseTemplate", ()=>$f9ed6fea0cb0dd94$export$2e2dbd43b49fd373
);
function $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, lastOpenedTagName = '', imports) {
    const openingTag = /^\n*?[ \t]*?<(\w+)/;
    const endOpeningTag = />/;
    const node = {
        type: 'element',
        name: '',
        length: 0,
        value: '',
        props: {},
        children: []
    };
    let match = template.match(openingTag);
    const closingTag = new RegExp(`[ \t]*?</${lastOpenedTagName}>`);
    if (!match) {
        // if no opening tag we should find closing tag
        // and between them parse value
        match = template.match(closingTag);
        if (!match) throw new Error('parsing error: no closing tag');
        const nodeValue = $f9ed6fea0cb0dd94$var$parseValue(template.slice(0, match.index).trim());
        if (nodeValue.length === 0) node.value = '';
        else {
            for (const childNodeContent of nodeValue)if (typeof childNodeContent === 'string') node.children.push({
                type: 'textValue',
                name: '',
                value: childNodeContent,
                props: {},
                length: childNodeContent.length,
                children: []
            });
            else node.children.push({
                type: 'funcValue',
                name: '',
                value: childNodeContent,
                props: {},
                length: NaN,
                children: []
            });
        }
        node.length = match.index + match[0].length;
        node.type = 'element';
        node.isClosing = true;
        return node;
    }
    let nodeLength = match.index + match[0].length;
    node.name = match[1];
    template = template.slice(match.index + match[0].length);
    // find the end of opened tag
    match = template.match(endOpeningTag);
    if (!match) throw new Error('parsing error: no end of opening tag');
    let templateCopy = template;
    let cuttedSymbols = 0;
    // check if we found '=>' in arrow function
    while(match && templateCopy[match.index - 1] === '='){
        templateCopy = templateCopy.slice(match.index + 1);
        cuttedSymbols += match.index + 1;
        match = templateCopy.match(endOpeningTag);
    }
    if (!match) throw new Error('parsing error: no end of opening tag');
    nodeLength += match.index + match[0].length + cuttedSymbols;
    const propsStr = template.slice(0, match.index + cuttedSymbols);
    node.props = $f9ed6fea0cb0dd94$var$parseProps(propsStr);
    // if self-closing tag
    if (template.slice(match.index + cuttedSymbols - 1, match.index + cuttedSymbols + 1) === '/>') {
        node.type = 'self-closing';
        if (imports && node.name in imports) {
            node.value = imports[node.name];
            node.type = 'component';
        }
        node.isClosing = true;
        node.length = nodeLength;
        return node;
    }
    // nodeLength += propsStr.length
    template = template.slice(match.index + cuttedSymbols + 1);
    let childNode = $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, node.name, imports);
    while(!childNode.isClosing){
        template = template.slice(childNode.length);
        node.children.push(childNode);
        nodeLength += childNode.length;
        childNode = $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, node.name, imports);
    }
    nodeLength += childNode.length;
    if (childNode.value.length) node.children.push(childNode);
    else if (childNode.children.length) node.children.push(...childNode.children);
    node.length = nodeLength;
    return node;
}
// TODO: write it
// (string | FiberNode)[]
// eslint-disable-next-line require-jsdoc
function $f9ed6fea0cb0dd94$var$parseValue(str) {
    const curlyBracets = /{[^}]*}/;
    let match = str.match(curlyBracets);
    const children = [];
    while(match){
        const prevTextNode = str.slice(0, match.index);
        if (prevTextNode.length) children.push(prevTextNode);
        const funcNodeStr = str.slice(match.index + 1, match.index + match[0].length - 1).trim();
        const funcNode = $f9ed6fea0cb0dd94$var$createFuncValue(funcNodeStr);
        children.push(funcNode);
        str = str.slice(match.index + match[0].length);
        match = str.match(curlyBracets);
    }
    if (str.length) children.push(str);
    return children;
}
// eslint-disable-next-line require-jsdoc
function $f9ed6fea0cb0dd94$var$parseProps(str) {
    const props = {};
    // regex to get attributes from tag
    const matchNextProp = ()=>str.match(/ *\w+=\".+?(?=")"/) || str.match(/ *\w+/)
    ;
    let match = matchNextProp();
    if (!match) return props;
    while(match){
        const propStr = match[0];
        let [propKey, ...propValues] = propStr.split('=');
        propKey = propKey.trim();
        let propValue = propValues.join('=');
        propValue = typeof propValue === 'string' && propValue.length ? propValue.slice(1, -1) : true;
        const curlyBracets = /{.*}/;
        if (typeof propValue === 'string') {
            const bracetsMatch = propValue.match(curlyBracets);
            if (bracetsMatch) propValue = $f9ed6fea0cb0dd94$var$createFuncValue(bracetsMatch[0].slice(1, -1));
        }
        props[propKey] = propValue;
        str = str.slice(0, match.index) + str.slice(match.index + propStr.length);
        match = matchNextProp();
    }
    return props;
}
// eslint-disable-next-line require-jsdoc
function $f9ed6fea0cb0dd94$var$createFuncValue(str) {
    return new Function('props', `return ${str}`);
}
// eslint-disable-next-line require-jsdoc
function $f9ed6fea0cb0dd94$var$convertTagNodeToFiberNode(tagNode) {
    // if tag node has a value it means that node is component
    let componentConstructor;
    if (tagNode.type === 'component' && tagNode.value) componentConstructor = tagNode.value;
    const convertedNode = {
        type: tagNode.name,
        props: tagNode.props,
        value: componentConstructor,
        children: tagNode.children.map((node)=>[
                'funcValue',
                'textValue'
            ].includes(node.type) ? node.value : node.type === 'component' ? {
                compConstructor: node.value,
                props: node.props
            } : $f9ed6fea0cb0dd94$var$convertTagNodeToFiberNode(node)
        )
    };
    return $020871d0a4577cb7$export$270e7ba5936d3c48(convertedNode.type, convertedNode.props, componentConstructor, ...convertedNode.children);
}
function $f9ed6fea0cb0dd94$export$2e2dbd43b49fd373(template, imports) {
    const rootNode = $f9ed6fea0cb0dd94$export$2e2bcd8739ae039(template, '', imports);
    const rootFiberNode = $f9ed6fea0cb0dd94$var$convertTagNodeToFiberNode(rootNode);
    return rootFiberNode;
} // const templateStr = `
// <div><App props="{props}" /></div>
// `
// console.log(
//     parseTemplate(templateStr, {
//         App: AppComponent,
//     }).children[0].value
// )
var $87479787429c10bb$exports = {};
$parcel$export($87479787429c10bb$exports, "useState", ()=>$87479787429c10bb$export$60241385465d0a34
);
function $87479787429c10bb$export$60241385465d0a34(initial, globalState) {
    const actionsQueue = [];
    const oldHook = globalState.wipNode.previousCommittedRootNode && globalState.wipNode.previousCommittedRootNode.hooks && globalState.wipNode.previousCommittedRootNode.hooks[globalState.hookIndex];
    const hook = {
        state: oldHook ? oldHook.state : initial,
        queue: actionsQueue
    };
    const actions = oldHook ? oldHook.queue : [];
    actions.forEach((action)=>{
        hook.state = action(hook.state);
    });
    const setState = (action)=>{
        hook.queue.push(action);
        globalState.uncommitedRootNode = {
            type: globalState.wipNode.type,
            children: globalState.wipNode.children,
            dom: globalState.wipNode.dom,
            props: globalState.wipNode.props,
            value: globalState.wipNode.value,
            previousCommittedRootNode: globalState.wipNode,
            parent: globalState.wipNode.parent,
            firstChild: globalState.wipNode.firstChild,
            parentComponent: globalState.wipNode.parentComponent
        };
        globalState.addNodeToQueue(globalState.uncommitedRootNode);
        globalState.nodesToDeleteFromDom = [];
    };
    globalState.wipNode.hooks.push(hook);
    globalState.hookIndex++;
    return [
        hook.state,
        setState
    ];
}
$parcel$exportWildcard(module.exports, $020871d0a4577cb7$exports);
$parcel$exportWildcard(module.exports, $faefaad95e5fcca0$exports);
$parcel$exportWildcard(module.exports, $f9ed6fea0cb0dd94$exports);
$parcel$exportWildcard(module.exports, $d56f0a173836b9ee$exports);
$parcel$exportWildcard(module.exports, $87479787429c10bb$exports);

},{}]},["cogL5","6yKdW"], "6yKdW", "parcelRequirecc99")

//# sourceMappingURL=index.50d7f2ff.js.map
