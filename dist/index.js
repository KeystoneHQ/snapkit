import K, { useState as a1, useEffect as M2 } from "react";
import { Modal as A1 } from "semantic-ui-react";
const E2 = "_btn_w83nh_1", b2 = "_primary_w83nh_25", H2 = "_loading_w83nh_36", Z2 = "_disabled_w83nh_43", F2 = "_large_w83nh_46", R2 = "_medium_w83nh_49", O2 = "_small_w83nh_52", V = {
  btn: E2,
  default: "_default_w83nh_14",
  primary: b2,
  loading: H2,
  disabled: Z2,
  large: F2,
  medium: R2,
  small: O2
}, S2 = "_wobble_4dzcx_1", V2 = {
  "line-wobble": "_line-wobble_4dzcx_1",
  wobble: S2
};
var X = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D1;
function T2() {
  if (D1)
    return N;
  D1 = 1;
  var n = K, o = Symbol.for("react.element"), s = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Z(H, h, x) {
    var g, k = {}, F = null, T = null;
    x !== void 0 && (F = "" + x), h.key !== void 0 && (F = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (g in h)
      l.call(h, g) && !b.hasOwnProperty(g) && (k[g] = h[g]);
    if (H && H.defaultProps)
      for (g in h = H.defaultProps, h)
        k[g] === void 0 && (k[g] = h[g]);
    return { $$typeof: o, type: H, key: F, ref: T, props: k, _owner: y.current };
  }
  return N.Fragment = s, N.jsx = Z, N.jsxs = Z, N;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function B2() {
  return j1 || (j1 = 1, process.env.NODE_ENV !== "production" && function() {
    var n = K, o = Symbol.for("react.element"), s = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), Z = Symbol.for("react.provider"), H = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), I = Symbol.iterator, j = "@@iterator";
    function Q(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = I && t[I] || t[j];
      return typeof r == "function" ? r : null;
    }
    var B = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(t) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
          i[c - 1] = arguments[c];
        G1("error", t, i);
      }
    }
    function G1(t, r, i) {
      {
        var c = B.ReactDebugCurrentFrame, p = c.getStackAddendum();
        p !== "" && (r += "%s", i = i.concat([p]));
        var u = i.map(function(C) {
          return String(C);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, u);
      }
    }
    var Y1 = !1, z1 = !1, q1 = !1, J1 = !1, K1 = !1, p1;
    p1 = Symbol.for("react.module.reference");
    function X1(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === l || t === b || K1 || t === y || t === x || t === g || J1 || t === T || Y1 || z1 || q1 || typeof t == "object" && t !== null && (t.$$typeof === F || t.$$typeof === k || t.$$typeof === Z || t.$$typeof === H || t.$$typeof === h || t.$$typeof === p1 || t.getModuleId !== void 0));
    }
    function Q1(t, r, i) {
      var c = t.displayName;
      if (c)
        return c;
      var p = r.displayName || r.name || "";
      return p !== "" ? i + "(" + p + ")" : i;
    }
    function L1(t) {
      return t.displayName || "Context";
    }
    function R(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case l:
          return "Fragment";
        case s:
          return "Portal";
        case b:
          return "Profiler";
        case y:
          return "StrictMode";
        case x:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case H:
            var r = t;
            return L1(r) + ".Consumer";
          case Z:
            var i = t;
            return L1(i._context) + ".Provider";
          case h:
            return Q1(t, t.render, "ForwardRef");
          case k:
            var c = t.displayName || null;
            return c !== null ? c : R(t.type) || "Memo";
          case F: {
            var p = t, u = p._payload, C = p._init;
            try {
              return R(C(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, U = 0, u1, h1, _1, v1, g1, m1, w1;
    function y1() {
    }
    y1.__reactDisabledLog = !0;
    function e2() {
      {
        if (U === 0) {
          u1 = console.log, h1 = console.info, _1 = console.warn, v1 = console.error, g1 = console.group, m1 = console.groupCollapsed, w1 = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: y1,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        U++;
      }
    }
    function t2() {
      {
        if (U--, U === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, t, {
              value: u1
            }),
            info: S({}, t, {
              value: h1
            }),
            warn: S({}, t, {
              value: _1
            }),
            error: S({}, t, {
              value: v1
            }),
            group: S({}, t, {
              value: g1
            }),
            groupCollapsed: S({}, t, {
              value: m1
            }),
            groupEnd: S({}, t, {
              value: w1
            })
          });
        }
        U < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var e1 = B.ReactCurrentDispatcher, t1;
    function W(t, r, i) {
      {
        if (t1 === void 0)
          try {
            throw Error();
          } catch (p) {
            var c = p.stack.trim().match(/\n( *(at )?)/);
            t1 = c && c[1] || "";
          }
        return `
` + t1 + t;
      }
    }
    var r1 = !1, G;
    {
      var r2 = typeof WeakMap == "function" ? WeakMap : Map;
      G = new r2();
    }
    function x1(t, r) {
      if (!t || r1)
        return "";
      {
        var i = G.get(t);
        if (i !== void 0)
          return i;
      }
      var c;
      r1 = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = e1.current, e1.current = null, e2();
      try {
        if (r) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (O) {
              c = O;
            }
            Reflect.construct(t, [], C);
          } else {
            try {
              C.call();
            } catch (O) {
              c = O;
            }
            t.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (O) {
            c = O;
          }
          t();
        }
      } catch (O) {
        if (O && c && typeof O.stack == "string") {
          for (var f = O.stack.split(`
`), w = c.stack.split(`
`), _ = f.length - 1, v = w.length - 1; _ >= 1 && v >= 0 && f[_] !== w[v]; )
            v--;
          for (; _ >= 1 && v >= 0; _--, v--)
            if (f[_] !== w[v]) {
              if (_ !== 1 || v !== 1)
                do
                  if (_--, v--, v < 0 || f[_] !== w[v]) {
                    var M = `
` + f[_].replace(" at new ", " at ");
                    return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), typeof t == "function" && G.set(t, M), M;
                  }
                while (_ >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        r1 = !1, e1.current = u, t2(), Error.prepareStackTrace = p;
      }
      var D = t ? t.displayName || t.name : "", B1 = D ? W(D) : "";
      return typeof t == "function" && G.set(t, B1), B1;
    }
    function n2(t, r, i) {
      return x1(t, !1);
    }
    function o2(t) {
      var r = t.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(t, r, i) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return x1(t, o2(t));
      if (typeof t == "string")
        return W(t);
      switch (t) {
        case x:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            return n2(t.render);
          case k:
            return Y(t.type, r, i);
          case F: {
            var c = t, p = c._payload, u = c._init;
            try {
              return Y(u(p), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var z = Object.prototype.hasOwnProperty, k1 = {}, M1 = B.ReactDebugCurrentFrame;
    function q(t) {
      if (t) {
        var r = t._owner, i = Y(t.type, t._source, r ? r.type : null);
        M1.setExtraStackFrame(i);
      } else
        M1.setExtraStackFrame(null);
    }
    function s2(t, r, i, c, p) {
      {
        var u = Function.call.bind(z);
        for (var C in t)
          if (u(t, C)) {
            var f = void 0;
            try {
              if (typeof t[C] != "function") {
                var w = Error((c || "React class") + ": " + i + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              f = t[C](r, C, c, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              f = _;
            }
            f && !(f instanceof Error) && (q(p), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", i, C, typeof f), q(null)), f instanceof Error && !(f.message in k1) && (k1[f.message] = !0, q(p), m("Failed %s type: %s", i, f.message), q(null));
          }
      }
    }
    var i2 = Array.isArray;
    function n1(t) {
      return i2(t);
    }
    function l2(t) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return i;
      }
    }
    function a2(t) {
      try {
        return E1(t), !1;
      } catch {
        return !0;
      }
    }
    function E1(t) {
      return "" + t;
    }
    function b1(t) {
      if (a2(t))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", l2(t)), E1(t);
    }
    var $ = B.ReactCurrentOwner, c2 = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, H1, Z1, o1;
    o1 = {};
    function d2(t) {
      if (z.call(t, "ref")) {
        var r = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function f2(t) {
      if (z.call(t, "key")) {
        var r = Object.getOwnPropertyDescriptor(t, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function C2(t, r) {
      if (typeof t.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var i = R($.current.type);
        o1[i] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R($.current.type), t.ref), o1[i] = !0);
      }
    }
    function p2(t, r) {
      {
        var i = function() {
          H1 || (H1 = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function L2(t, r) {
      {
        var i = function() {
          Z1 || (Z1 = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var u2 = function(t, r, i, c, p, u, C) {
      var f = {
        $$typeof: o,
        type: t,
        key: r,
        ref: i,
        props: C,
        _owner: u
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function h2(t, r, i, c, p) {
      {
        var u, C = {}, f = null, w = null;
        i !== void 0 && (b1(i), f = "" + i), f2(r) && (b1(r.key), f = "" + r.key), d2(r) && (w = r.ref, C2(r, p));
        for (u in r)
          z.call(r, u) && !c2.hasOwnProperty(u) && (C[u] = r[u]);
        if (t && t.defaultProps) {
          var _ = t.defaultProps;
          for (u in _)
            C[u] === void 0 && (C[u] = _[u]);
        }
        if (f || w) {
          var v = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          f && p2(C, v), w && L2(C, v);
        }
        return u2(t, f, w, p, c, $.current, C);
      }
    }
    var s1 = B.ReactCurrentOwner, F1 = B.ReactDebugCurrentFrame;
    function A(t) {
      if (t) {
        var r = t._owner, i = Y(t.type, t._source, r ? r.type : null);
        F1.setExtraStackFrame(i);
      } else
        F1.setExtraStackFrame(null);
    }
    var i1;
    i1 = !1;
    function l1(t) {
      return typeof t == "object" && t !== null && t.$$typeof === o;
    }
    function R1() {
      {
        if (s1.current) {
          var t = R(s1.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function _2(t) {
      {
        if (t !== void 0) {
          var r = t.fileName.replace(/^.*[\\\/]/, ""), i = t.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var O1 = {};
    function v2(t) {
      {
        var r = R1();
        if (!r) {
          var i = typeof t == "string" ? t : t.displayName || t.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function S1(t, r) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var i = v2(r);
        if (O1[i])
          return;
        O1[i] = !0;
        var c = "";
        t && t._owner && t._owner !== s1.current && (c = " It was passed a child from " + R(t._owner.type) + "."), A(t), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, c), A(null);
      }
    }
    function V1(t, r) {
      {
        if (typeof t != "object")
          return;
        if (n1(t))
          for (var i = 0; i < t.length; i++) {
            var c = t[i];
            l1(c) && S1(c, r);
          }
        else if (l1(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var p = Q(t);
          if (typeof p == "function" && p !== t.entries)
            for (var u = p.call(t), C; !(C = u.next()).done; )
              l1(C.value) && S1(C.value, r);
        }
      }
    }
    function g2(t) {
      {
        var r = t.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || r.$$typeof === k))
          i = r.propTypes;
        else
          return;
        if (i) {
          var c = R(r);
          s2(i, t.props, "prop", c, t);
        } else if (r.PropTypes !== void 0 && !i1) {
          i1 = !0;
          var p = R(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function m2(t) {
      {
        for (var r = Object.keys(t.props), i = 0; i < r.length; i++) {
          var c = r[i];
          if (c !== "children" && c !== "key") {
            A(t), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), A(null);
            break;
          }
        }
        t.ref !== null && (A(t), m("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    function T1(t, r, i, c, p, u) {
      {
        var C = X1(t);
        if (!C) {
          var f = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = _2(p);
          w ? f += w : f += R1();
          var _;
          t === null ? _ = "null" : n1(t) ? _ = "array" : t !== void 0 && t.$$typeof === o ? (_ = "<" + (R(t.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof t, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, f);
        }
        var v = h2(t, r, i, p, u);
        if (v == null)
          return v;
        if (C) {
          var M = r.children;
          if (M !== void 0)
            if (c)
              if (n1(M)) {
                for (var D = 0; D < M.length; D++)
                  V1(M[D], t);
                Object.freeze && Object.freeze(M);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              V1(M, t);
        }
        return t === l ? m2(v) : g2(v), v;
      }
    }
    function w2(t, r, i) {
      return T1(t, r, i, !0);
    }
    function y2(t, r, i) {
      return T1(t, r, i, !1);
    }
    var x2 = y2, k2 = w2;
    P.Fragment = l, P.jsx = x2, P.jsxs = k2;
  }()), P;
}
(function(n) {
  process.env.NODE_ENV === "production" ? n.exports = T2() : n.exports = B2();
})(X);
const N1 = X.exports.Fragment, e = X.exports.jsx, a = X.exports.jsxs;
function A2() {
  return /* @__PURE__ */ e("div", {
    className: V2["line-wobble"]
  });
}
function f1({
  primary: n,
  disabled: o,
  size: s,
  tagName: l,
  className: y,
  loading: b,
  children: Z,
  ...H
}) {
  const h = {
    large: V.large,
    medium: V.medium,
    small: V.small
  }, x = `${V.btn} ${n ? V.primary : V.default} ${s ? h[s] : ""} ${b ? V.loading : ""} ${y}`, g = l || "button";
  return K.createElement(g, {
    className: x,
    disabled: o,
    ...H
  }, b ? /* @__PURE__ */ e(A2, {}) : Z);
}
function D2({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM13 12H16L12 16L8 12H11V8H13V12Z",
      fill: l
    })
  });
}
function j2({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M17.1722 12.0007L12.2222 7.05072L13.6362 5.63672L20.0002 12.0007L13.6362 18.3647L12.2222 16.9507L17.1722 12.0007Z",
      fill: l
    })
  });
}
function U2({
  className: n,
  width: o = "72",
  height: s = "72",
  solid: l,
  color: y
}) {
  return l ? /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.5 6.5H14.7785L15.0385 6.40002L20.0734 4.46352L20.4388 5.55996L19.0448 11.1362L18.9388 11.56L19.077 11.9743L20.409 15.9705L19.5814 18.1775L16.5371 17.3077L15.7614 17.0861L15.1488 17.6111L12.9451 19.5H11.0549L8.85119 17.6111L8.23864 17.0861L7.46292 17.3077L4.41857 18.1775L3.59096 15.9705L4.92302 11.9743L5.06115 11.56L4.95521 11.1362L3.56115 5.55996L3.92663 4.46352L8.96153 6.40002L9.22148 6.5H9.5H14.5ZM14.5 5L19.5985 3.03902L21 2.5L21.4748 3.92449L22 5.5L20.5 11.5L22 16L20.5 20L16.125 18.75L13.5 21H10.5L7.875 18.75L3.5 20L2 16L3.5 11.5L2 5.5L2.52517 3.92449L3 2.5L4.40146 3.03902L9.5 5H14.5ZM9.99994 12H7.99994L7 13L10.4999 14L9.99994 12ZM13.4999 14L17 13L16 12H14L13.4999 14ZM9.75 17.75L10.5 15.5H13.5L14.25 17.75H9.75Z",
      fill: y
    })
  }) : /* @__PURE__ */ a("svg", {
    width: o,
    height: s,
    viewBox: "0 0 72 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    children: [/* @__PURE__ */ e("path", {
      d: "M66.3001 3.99988L40.0201 23.4399L44.9201 11.9799L66.3001 3.99988Z",
      fill: "#E17726",
      stroke: "#E17726",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M5.70017 3.99988L31.7402 23.5999L27.0802 11.9999L5.70017 3.99988ZM56.8402 49.0599L49.8402 59.7399L64.8202 63.8599L69.1002 49.2999L56.8402 49.0599ZM2.92017 49.2999L7.18017 63.8599L22.1202 59.7399L15.1602 49.0599L2.92017 49.2999Z",
      fill: "#E27625",
      stroke: "#E27625",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M21.32 31.0201L17.16 37.3001L31.96 37.9801L31.48 22.0401L21.32 31.0401V31.0201ZM50.68 31.0401L40.36 21.8401L40.02 37.9801L54.82 37.3001L50.68 31.0401ZM22.12 59.7401L31.1 55.4201L23.38 49.4201L22.12 59.7401ZM40.92 55.4001L49.84 59.7401L48.64 49.4001L40.92 55.4001Z",
      fill: "#E27625",
      stroke: "#E27625",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M49.8401 59.7399L40.9201 55.4199L41.6401 61.2199L41.5601 63.6799L49.8401 59.7399ZM22.1201 59.7399L30.4401 63.6799L30.3801 61.2199L31.1001 55.4199L22.1201 59.7399Z",
      fill: "#D5BFB2",
      stroke: "#D5BFB2",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M30.5802 45.56L23.1802 43.4L28.4202 41L30.6002 45.56H30.5802ZM41.4002 45.56L43.6002 40.98L48.8602 43.38L41.4002 45.58V45.56Z",
      fill: "#233447",
      stroke: "#233447",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M22.1202 59.7399L23.4202 49.0599L15.1602 49.2999L22.1202 59.7399ZM48.5802 49.0599L49.8402 59.7399L56.8402 49.2999L48.5802 49.0599ZM54.8402 37.2999L40.0402 37.9799L41.4002 45.5799L43.6002 40.9799L48.8602 43.3799L54.8402 37.2999ZM23.1802 43.3999L28.4202 40.9999L30.6002 45.5599L31.9802 37.9599L17.1802 37.2999L23.1802 43.3999Z",
      fill: "#CC6228",
      stroke: "#CC6228",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M17.1801 37.2999L23.3801 49.3999L23.1801 43.3999L17.1801 37.2999ZM48.8601 43.3999L48.6201 49.3999L54.8201 37.2999L48.8601 43.3999ZM31.9801 37.9799L30.5801 45.5799L32.3401 54.5399L32.7401 42.7199L31.9801 37.9799ZM40.0201 37.9799L39.3001 42.6999L39.6601 54.5399L41.4001 45.5599L40.0201 37.9599V37.9799Z",
      fill: "#E27525",
      stroke: "#E27525",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M41.4002 45.56L39.6602 54.54L40.9202 55.42L48.6202 49.42L48.8602 43.4L41.4002 45.56ZM23.1802 43.4L23.3802 49.4L31.1002 55.4L32.3402 54.54L30.6002 45.56L23.1602 43.4H23.1802Z",
      fill: "#F5841F",
      stroke: "#F5841F",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M41.5801 63.6797L41.6401 61.2197L40.9601 60.6597H31.0401L30.3801 61.2197L30.4401 63.6797L22.1201 59.7397L25.0401 62.1397L30.9401 66.1997H41.0401L46.9601 62.1197L49.8401 59.7397L41.5601 63.6797H41.5801Z",
      fill: "#C0AC9D",
      stroke: "#C0AC9D",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M40.9202 55.4L39.6602 54.54H32.3402L31.1002 55.42L30.3802 61.22L31.0402 60.66H40.9603L41.6402 61.22L40.9202 55.42V55.4Z",
      fill: "#161616",
      stroke: "#161616",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M67.42 24.6999L69.62 13.9999L66.3 3.99988L40.9 22.7999L50.68 31.0199L64.48 35.0399L67.52 31.4999L66.2 30.5399L68.3 28.6199L66.7 27.3799L68.8 25.7799L67.4 24.6999H67.42ZM2.38 13.9799L4.62 24.6999L3.18 25.7599L5.32 27.3599L3.72 28.6199L5.8 30.5399L4.48 31.4999L7.52 35.0399L21.32 31.0399L31.1 22.7799L5.70001 3.99988L2.38 13.9799Z",
      fill: "#763E1A",
      stroke: "#763E1A",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M64.4802 35.0399L50.6802 31.0399L54.8402 37.2999L48.6402 49.3999L56.8402 49.2999H69.1002L64.4802 35.0399ZM21.3202 31.0199L7.52017 35.0399L2.92017 49.2999H15.1802L23.3802 49.3999L17.1802 37.2999L21.3402 31.0199H21.3202ZM40.0202 37.9799L40.9202 22.7799L44.9202 11.9799H27.0802L31.0802 22.7799L31.9802 37.9799L32.3202 42.7399V54.5399H39.6602L39.7002 42.7399L40.0202 37.9799Z",
      fill: "#F5841F",
      stroke: "#F5841F",
      strokeWidth: "0.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
function $2({
  className: n,
  width: o = "72",
  height: s = "72"
}) {
  return /* @__PURE__ */ a("svg", {
    width: o,
    height: s,
    viewBox: "0 0 72 72",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    children: [/* @__PURE__ */ e("path", {
      d: "M40.0479 38.8178L41.1559 23.5501L45.6677 12.6748H26.3809L30.8925 23.5501L32.0006 38.8178L32.3437 43.6337L32.3701 55.488H39.6784L39.7047 43.6337L40.0479 38.8178Z",
      fill: "url(#paint0_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M64.508 35.8798L50.7092 31.8314L54.8779 38.1555L48.6512 50.3273L56.883 50.2215H69.1252L64.508 35.8798Z",
      fill: "url(#paint1_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M21.3425 31.8314L7.54362 35.8798L2.95276 50.2215H15.195L23.4005 50.3273L17.1738 38.1555L21.3425 31.8314Z",
      fill: "url(#paint2_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M41.4205 46.4648L39.6793 55.4879L40.9457 56.3609L48.6499 50.3279L48.8874 44.2686L41.4205 46.4648Z",
      fill: "#ACACAC"
    }), /* @__PURE__ */ e("path", {
      d: "M23.1887 44.2686L23.3998 50.3279L31.1039 56.3609L32.3703 55.4879L30.6291 46.4648L23.1887 44.2686Z",
      fill: "#ACACAC"
    }), /* @__PURE__ */ e("path", {
      d: "M67.4346 25.4813L69.6509 14.6854L66.3263 4.65686L40.9449 23.5497L50.4167 32.07L64.5059 35.8804L67.5402 32.3081L66.221 31.3556L68.3317 29.424L66.7222 28.1539L68.833 26.5398L67.4346 25.4813Z",
      fill: "url(#paint3_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M4.61617 25.4816L2.3999 14.6857L5.72431 4.6571L31.1059 23.55L21.634 32.0703L7.54482 35.8806L4.51064 32.3083L5.82984 31.3559L3.71911 29.4242L5.32853 28.1541L3.21781 26.54L4.61617 25.4816Z",
      fill: "url(#paint4_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M17.1747 38.1561L23.1903 44.2686L23.4013 50.328L17.1747 38.1561Z",
      fill: "#8D8D8D"
    }), /* @__PURE__ */ e("path", {
      d: "M54.8779 38.1561L48.6512 50.328L48.8885 44.2686L54.8779 38.1561Z",
      fill: "#8D8D8D"
    }), /* @__PURE__ */ e("path", {
      d: "M49.8891 60.7272L40.9449 56.3611L41.6573 62.2091L41.5781 64.6698L49.8891 60.7272Z",
      fill: "#FF9F5A"
    }), /* @__PURE__ */ e("path", {
      d: "M22.1621 60.726L30.4732 64.6686L30.4204 62.2079L31.1064 56.3599L22.1621 60.726Z",
      fill: "#FF9F5A"
    }), /* @__PURE__ */ e("path", {
      d: "M56.8852 50.2217L49.8934 60.7266L64.8533 64.8545L69.1276 50.2217H56.8852Z",
      fill: "url(#paint5_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M2.95276 50.2217L7.2006 64.8545L22.1604 60.7266L15.195 50.2217H2.95276Z",
      fill: "url(#paint6_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M5.72314 4.65686L31.1048 23.5497L27.1207 12.6744L5.72314 4.65686Z",
      fill: "#757575"
    }), /* @__PURE__ */ e("path", {
      d: "M44.9289 12.6744L40.9449 23.5497L66.3263 4.65686L44.9289 12.6744Z",
      fill: "#757575"
    }), /* @__PURE__ */ e("path", {
      d: "M21.3434 31.832L17.1747 38.1561L32.0027 38.8175L31.1055 23.5498L21.3434 31.832Z",
      fill: "url(#paint7_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M50.7089 31.832L40.9468 23.5498L40.0497 38.8175L54.8776 38.1561L50.7089 31.832Z",
      fill: "url(#paint8_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M22.1621 60.726L31.1064 56.3601L23.4022 50.3271L22.1621 60.726Z",
      fill: "url(#paint9_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M40.9449 56.3601L49.8891 60.726L48.6491 50.3271L40.9449 56.3601Z",
      fill: "url(#paint10_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M48.6512 50.3275L49.8912 60.7266L56.883 50.2217L48.6512 50.3275Z",
      fill: "url(#paint11_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M23.4003 50.3275L22.1603 60.7266L15.1685 50.2217L23.4003 50.3275Z",
      fill: "url(#paint12_linear_679_9328)"
    }), /* @__PURE__ */ e("path", {
      d: "M54.8776 38.1561L40.0497 38.8178L41.4219 46.4648L43.6116 41.8606L48.8885 44.2686L54.8776 38.1561Z",
      fill: "#666666"
    }), /* @__PURE__ */ e("path", {
      d: "M23.1903 44.2686L28.4408 41.8606L30.6307 46.4648L32.0027 38.8178L17.1747 38.1561L23.1903 44.2686Z",
      fill: "#666666"
    }), /* @__PURE__ */ e("path", {
      d: "M41.4226 46.4641L39.7075 43.6326L40.0506 38.817L41.4226 46.4641Z",
      fill: "#8D8D8D"
    }), /* @__PURE__ */ e("path", {
      d: "M30.6324 46.4641L32.0044 38.817L32.3473 43.6326L30.6324 46.4641Z",
      fill: "#8D8D8D"
    }), /* @__PURE__ */ e("path", {
      d: "M39.7057 43.6334L41.4205 46.4647L39.6793 55.4878L39.7057 43.6334Z",
      fill: "#8D8D8D"
    }), /* @__PURE__ */ e("path", {
      d: "M32.3473 43.6334L32.3737 55.4878L30.6324 46.4647L32.3473 43.6334Z",
      fill: "#8D8D8D"
    }), /* @__PURE__ */ e("path", {
      d: "M41.6283 64.6372L41.66 62.2079L41.0005 61.626H31.0536L30.4204 62.2079L30.4732 64.6689L22.1621 60.7263L25.0644 63.1076L30.9744 67.209H41.0796L46.9896 63.1076L49.8918 60.7263L41.6283 64.6372Z",
      fill: "#DF7554"
    }), /* @__PURE__ */ e("path", {
      d: "M40.9488 56.3613L39.6824 55.488H32.3739L31.1075 56.3613L30.4215 62.209L31.0547 61.6269H41.0016L41.6612 62.209L40.9488 56.3613Z",
      fill: "#161616",
      stroke: "#161616",
      strokeWidth: "0.0166888",
      strokeMiterlimit: "10",
      strokeLinejoin: "round"
    }), /* @__PURE__ */ e("path", {
      d: "M43.613 41.8604L41.4231 46.4645L48.89 44.2683L43.613 41.8604Z",
      fill: "#161616"
    }), /* @__PURE__ */ e("path", {
      d: "M28.4392 41.8604L30.6291 46.4645L23.1887 44.2683L28.4392 41.8604Z",
      fill: "#161616"
    }), /* @__PURE__ */ e("path", {
      style: {
        mixBlendMode: "color-dodge"
      },
      d: "M67.5422 32.3081L66.223 31.3556L68.3337 29.424L66.7242 28.1539L68.835 26.5398L67.4366 25.4813L69.6529 14.6854L66.3286 4.65686L44.9309 12.6744H27.1216L5.72408 4.65686L2.39966 14.6854L4.64231 25.4813L3.21757 26.5398L5.3283 28.1539L3.71887 29.424L5.8296 31.3556L4.51039 32.3081L7.54458 35.8804L2.95373 50.2221L7.20157 64.8546L22.1614 60.7268L31.1056 56.3609L30.3747 62.2774L31.0528 61.6529L40.9997 61.6265L41.6593 62.2087L40.9469 56.3609L49.8911 60.7268L64.851 64.8546L69.1253 50.2221L64.5079 35.8804L67.5422 32.3081Z",
      fill: "url(#paint13_linear_679_9328)",
      fillOpacity: "0.1"
    }), /* @__PURE__ */ e("path", {
      style: {
        mixBlendMode: "overlay"
      },
      d: "M67.5422 32.3081L66.223 31.3556L68.3337 29.424L66.7242 28.1539L68.835 26.5398L67.4366 25.4813L69.6529 14.6854L66.3286 4.65686L44.9309 12.6744H27.1216L5.72408 4.65686L2.39966 14.6854L4.64231 25.4813L3.21757 26.5398L5.3283 28.1539L3.71887 29.424L5.8296 31.3556L4.51039 32.3081L7.54458 35.8804L2.95373 50.2221L7.20157 64.8546L22.1614 60.7268L31.1056 56.3609L32.3456 55.4612H34.1927H37.8863H39.7333L40.9469 56.3609L49.8911 60.7268L64.851 64.8546L69.1253 50.2221L64.5079 35.8804L67.5422 32.3081Z",
      fill: "url(#paint14_radial_679_9328)"
    }), /* @__PURE__ */ a("defs", {
      children: [/* @__PURE__ */ a("linearGradient", {
        id: "paint0_linear_679_9328",
        x1: "36.0243",
        y1: "12.6748",
        x2: "36.0243",
        y2: "55.488",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#8F8F8F"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#AEAEAE"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint1_linear_679_9328",
        x1: "58.8882",
        y1: "31.8314",
        x2: "58.8882",
        y2: "50.3273",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#696969"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#A6A6A6"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint2_linear_679_9328",
        x1: "13.1766",
        y1: "31.8314",
        x2: "13.1766",
        y2: "50.3273",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#696969"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#A6A6A6"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint3_linear_679_9328",
        x1: "49.2295",
        y1: "30.5882",
        x2: "73.424",
        y2: "11.7368",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#1B1B1B"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#565656"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint4_linear_679_9328",
        x1: "22.8213",
        y1: "30.5884",
        x2: "-1.37314",
        y2: "11.737",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#1B1B1B"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#565656"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint5_linear_679_9328",
        x1: "59.5106",
        y1: "50.2217",
        x2: "59.5106",
        y2: "64.8545",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#787878"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#5E5E5E"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint6_linear_679_9328",
        x1: "12.5566",
        y1: "50.2217",
        x2: "12.5566",
        y2: "64.8545",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#787878"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#5E5E5E"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint7_linear_679_9328",
        x1: "24.5886",
        y1: "23.5498",
        x2: "24.5886",
        y2: "38.8175",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#7A7A7A"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#949494"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint8_linear_679_9328",
        x1: "47.4638",
        y1: "23.5498",
        x2: "47.4638",
        y2: "38.8175",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#7A7A7A"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#949494"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint9_linear_679_9328",
        x1: "26.6342",
        y1: "66.9973",
        x2: "26.6342",
        y2: "-1.76178",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#7A7C7D"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#CECECF"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint10_linear_679_9328",
        x1: "45.4169",
        y1: "66.9973",
        x2: "45.4169",
        y2: "-1.76178",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#7A7C7D"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#CECECF"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint11_linear_679_9328",
        x1: "52.7671",
        y1: "36.8327",
        x2: "52.7671",
        y2: "64.0591",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#3E3E3E"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#616161"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint12_linear_679_9328",
        x1: "19.2844",
        y1: "36.8327",
        x2: "19.2844",
        y2: "64.0591",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#3E3E3E"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#616161"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint13_linear_679_9328",
        x1: "35.9075",
        y1: "12.595",
        x2: "35.9075",
        y2: "70.279",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#FF60DC"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#6B71FF"
        })]
      }), /* @__PURE__ */ a("radialGradient", {
        id: "paint14_radial_679_9328",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(35.9075 11.4043) rotate(90) scale(55.5672 62.0798)",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#FF60DC"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#6B71FF"
        })]
      })]
    })]
  });
}
function N2({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    style: {
      stroke: "currentColor"
    },
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M6 6L18 18M18 6L6 18",
      stroke: l,
      strokeWidth: "1.5"
    })
  });
}
function P2({
  className: n,
  width: o = "56",
  height: s = "56"
}) {
  return /* @__PURE__ */ a("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ e("path", {
      d: "M50.2962 19.0776C52.9066 25.6086 52.6064 33.3824 48.7783 39.9884C43.7242 48.7548 33.9705 53.1296 24.5295 51.7492L35.6761 32.4524C38.128 28.1985 36.6727 22.7477 32.4234 20.3079C31.039 19.4905 29.5044 19.0776 27.999 19.0776H50.2962Z",
      fill: "#FECF33"
    }), /* @__PURE__ */ e("path", {
      d: "M50.2958 19.0776H28.0028C24.9378 19.0776 21.9563 20.7166 20.3174 23.5692C18.712 26.33 18.7787 29.6539 20.2257 32.2855L9.16675 13.143C16.4184 3.93457 29.5416 1.17371 39.9833 7.20423C44.8581 10.011 48.3693 14.2398 50.2958 19.0776Z",
      fill: "#E64A45"
    }), /* @__PURE__ */ e("path", {
      d: "M35.6758 32.4639L24.5293 51.769C21.6061 51.3478 18.7204 50.3719 16.0099 48.8122C4.52142 42.1769 0.59324 27.5052 7.21943 16.0322C7.81158 14.9979 8.4621 14.0512 9.16267 13.1504L20.2216 32.3054L20.3134 32.4639C21.064 33.7692 22.1648 34.9078 23.566 35.7043C27.8027 38.1566 33.2321 36.7011 35.6758 32.4639Z",
      fill: "#51B84E"
    }), /* @__PURE__ */ e("circle", {
      cx: "27.9998",
      cy: "28.0001",
      r: "11.5714",
      fill: "white"
    }), /* @__PURE__ */ e("circle", {
      cx: "27.9999",
      cy: "27.9998",
      r: "9.42853",
      fill: "#5D8BF5"
    })]
  });
}
function I2({
  className: n,
  width: o = "56",
  height: s = "56"
}) {
  return /* @__PURE__ */ a("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ e("path", {
      d: "M47.1681 13.4375C42.8413 7.68749 36.1422 4.2179 28.9582 4.00628C23.3866 3.89449 19.5378 5.57203 17.3602 6.9208C20.2738 5.22763 24.4904 4.26714 28.182 4.31462C37.678 4.43484 47.8771 10.9148 49.3918 22.5946C51.1314 36.0017 41.8112 47.1916 28.7003 47.2259C14.2763 47.2625 5.5031 34.466 7.79643 22.972C7.83907 22.4084 7.92187 21.8486 8.04418 21.2969C8.32715 18.351 9.18157 15.4889 10.5595 12.8713C8.8984 13.7326 6.78324 16.4566 5.73945 18.9798C4.22003 22.8296 3.68433 26.9987 4.18098 31.1085C4.21697 31.4199 4.24936 31.7306 4.29016 32.0396C5.99364 41.8678 13.5687 49.626 23.3379 51.5478C33.1071 53.4697 43.0475 49.1571 48.3333 40.7039C53.619 32.2506 53.1556 21.4071 47.1681 13.4375Z",
      fill: "url(#paint0_radial_273_6295)"
    }), /* @__PURE__ */ e("path", {
      d: "M47.1681 13.4375C42.8413 7.68749 36.1422 4.2179 28.9582 4.00628C23.3866 3.89449 19.5378 5.57203 17.3602 6.9208C20.2738 5.22763 24.4904 4.26714 28.182 4.31462C37.678 4.43484 47.8771 10.9148 49.3918 22.5946C51.1314 36.0017 41.8112 47.1916 28.7003 47.2259C14.2763 47.2625 5.5031 34.466 7.79643 22.972C7.83907 22.4084 7.92187 21.8486 8.04418 21.2969C8.32715 18.351 9.18157 15.4889 10.5595 12.8713C8.8984 13.7326 6.78324 16.4566 5.73945 18.9798C4.22003 22.8296 3.68433 26.9987 4.18098 31.1085C4.21697 31.4199 4.24936 31.7306 4.29016 32.0396C5.99364 41.8678 13.5687 49.626 23.3379 51.5478C33.1071 53.4697 43.0475 49.1571 48.3333 40.7039C53.619 32.2506 53.1556 21.4071 47.1681 13.4375Z",
      fill: "url(#paint1_radial_273_6295)"
    }), /* @__PURE__ */ e("path", {
      d: "M49.9748 21.9272C48.6245 9.72094 37.7601 4.2345 28.1807 4.31384C24.4885 4.34389 20.2726 5.22684 17.359 6.92002C16.588 7.37807 15.8715 7.92252 15.2234 8.54287C15.3008 8.47856 15.5318 8.28802 15.9145 8.02476L15.9523 7.99891L15.9859 7.97607C17.3997 7.01826 18.9575 6.29343 20.6001 5.8291C23.1733 5.11645 25.8404 4.80366 28.5083 4.90167C38.768 5.51555 46.8829 13.8397 47.2544 24.1313C47.4745 32.0694 40.9905 38.3986 33.516 38.7652C28.08 39.0321 22.9582 36.3964 20.4567 31.124C19.8715 29.9232 19.4742 28.6393 19.2786 27.3175C18.0932 19.2934 23.4711 12.4503 28.4027 10.756C25.7422 8.42747 19.0758 8.58555 14.1143 12.243C10.5414 14.8768 8.22347 18.8841 7.45563 23.6631C6.90322 27.3299 7.38958 31.0786 8.85934 34.4821C11.9724 41.842 18.9497 46.8242 26.909 47.3705C27.5045 47.4162 28.1011 47.4385 28.699 47.4385C44.5729 47.4385 51.4595 35.365 49.9748 21.9272Z",
      fill: "url(#paint2_radial_273_6295)"
    }), /* @__PURE__ */ e("path", {
      d: "M49.9748 21.9272C48.6245 9.72094 37.7601 4.2345 28.1807 4.31384C24.4885 4.34389 20.2726 5.22684 17.359 6.92002C16.588 7.37807 15.8715 7.92252 15.2234 8.54287C15.3008 8.47856 15.5318 8.28802 15.9145 8.02476L15.9523 7.99891L15.9859 7.97607C17.3997 7.01826 18.9575 6.29343 20.6001 5.8291C23.1733 5.11645 25.8404 4.80366 28.5083 4.90167C38.768 5.51555 46.8829 13.8397 47.2544 24.1313C47.4745 32.0694 40.9905 38.3986 33.516 38.7652C28.08 39.0321 22.9582 36.3964 20.4567 31.124C19.8715 29.9232 19.4742 28.6393 19.2786 27.3175C18.0932 19.2934 23.4711 12.4503 28.4027 10.756C25.7422 8.42747 19.0758 8.58555 14.1143 12.243C10.5414 14.8768 8.22347 18.8841 7.45563 23.6631C6.90322 27.3299 7.38958 31.0786 8.85934 34.4821C11.9724 41.842 18.9497 46.8242 26.909 47.3705C27.5045 47.4162 28.1011 47.4385 28.699 47.4385C44.5729 47.4385 51.4595 35.365 49.9748 21.9272Z",
      fill: "url(#paint3_radial_273_6295)"
    }), /* @__PURE__ */ e("path", {
      d: "M33.5161 38.7661C43.7739 38.141 48.165 29.63 48.4404 23.5924C48.8699 14.1588 43.2844 3.98895 28.5083 4.90255C25.8403 4.80513 23.1732 5.11853 20.6001 5.83179C18.9649 6.31582 17.41 7.03929 15.9859 7.97876L15.9523 8.0016L15.9145 8.02745C15.685 8.18773 15.4604 8.35642 15.2408 8.53354C19.0655 6.39067 23.4846 5.55985 27.8244 6.16778C36.3079 7.28334 44.0643 13.8956 44.0643 22.6205C44.0643 29.3337 38.8867 34.4613 32.8238 34.0929C23.8167 33.5519 21.5461 24.2956 26.2318 20.2962C24.9684 20.0239 22.5941 20.5577 20.9409 23.034C19.4574 25.2579 19.5414 28.69 20.4568 31.1248C22.7933 36.1516 27.9985 39.1973 33.5161 38.7661Z",
      fill: "url(#paint4_radial_273_6295)"
    }), /* @__PURE__ */ e("path", {
      d: "M47.1668 13.4375C46.5241 12.5944 45.8263 11.7948 45.078 11.0441C44.4839 10.4147 43.8471 9.82706 43.1722 9.28544C43.5606 9.62426 43.9308 9.98339 44.2814 10.3613C45.5945 11.7653 46.593 13.4342 47.21 15.2563C48.4631 19.0604 48.3815 23.8214 45.9886 27.5606C43.2845 31.8249 38.5162 34.3209 33.4782 34.1091C33.2617 34.1091 33.0433 34.1091 32.8238 34.0928C23.8166 33.5519 21.5461 24.2956 26.2323 20.2962C24.9684 20.0239 22.5941 20.5577 20.9408 23.034C19.4573 25.2579 19.5413 28.6899 20.4567 31.1248C19.8717 29.924 19.4746 28.6402 19.2792 27.3183C18.0932 19.2942 23.4711 12.4512 28.4027 10.7568C25.7422 8.42833 19.0758 8.58641 14.1142 12.2438C11.1961 14.4295 9.07115 17.5112 8.06331 21.0193C8.38451 18.1726 9.23047 15.4104 10.5582 12.8731C8.89713 13.7345 6.78197 16.4584 5.73819 18.9817C4.21907 22.8309 3.68337 26.9993 4.17971 31.1086C4.21571 31.4199 4.2481 31.7307 4.28889 32.0396C5.99237 41.8678 13.5675 49.6261 23.3367 51.5479C33.1059 53.4697 43.0462 49.1572 48.332 40.704C53.6178 32.2507 53.1544 21.4071 47.1668 13.4375Z",
      fill: "url(#paint5_linear_273_6295)"
    }), /* @__PURE__ */ e("path", {
      d: "M47.2099 15.2562C46.5931 13.434 45.5946 11.7651 44.2813 10.3612C42.7208 8.73187 40.8708 7.40837 38.8261 6.45852C37.119 5.61542 35.3191 4.97612 33.4632 4.55377C30.1917 3.83625 26.8062 3.81577 23.5263 4.49366C20.1172 5.21493 17.1196 6.69293 15.2234 8.54058C16.7354 7.68472 18.3559 7.03773 20.041 6.6172C26.695 4.94179 33.7426 6.77663 38.7409 11.4858C39.7378 12.433 40.6104 13.5035 41.3378 14.6714C44.2741 19.4552 43.9964 25.4693 41.7067 29.0162C40.006 31.6512 36.3636 34.1252 32.9653 34.0963C38.1766 34.4904 43.1817 31.9793 45.9886 27.5622C48.3815 23.8212 48.4631 19.0603 47.2099 15.2562Z",
      fill: "url(#paint6_linear_273_6295)"
    }), /* @__PURE__ */ e("path", {
      d: "M47.2099 15.2562C46.5931 13.434 45.5946 11.7651 44.2813 10.3612C42.7208 8.73187 40.8708 7.40837 38.8261 6.45852C37.119 5.61542 35.3191 4.97612 33.4632 4.55377C30.1917 3.83625 26.8062 3.81577 23.5263 4.49366C20.1172 5.21493 17.1196 6.69293 15.2234 8.54058C16.7354 7.68472 18.3559 7.03773 20.041 6.6172C26.695 4.94179 33.7426 6.77663 38.7409 11.4858C39.7378 12.433 40.6104 13.5035 41.3378 14.6714C44.2741 19.4552 43.9964 25.4693 41.7067 29.0162C40.006 31.6512 36.3636 34.1252 32.9653 34.0963C38.1766 34.4904 43.1817 31.9793 45.9886 27.5622C48.3815 23.8212 48.4631 19.0603 47.2099 15.2562Z",
      fill: "url(#paint7_linear_273_6295)"
    }), /* @__PURE__ */ a("defs", {
      children: [/* @__PURE__ */ a("radialGradient", {
        id: "paint0_radial_273_6295",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(46.8381 13.8492) scale(54.4567 54.5639)",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#FFF36E"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.5",
          stopColor: "#FC4055"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#E31587"
        })]
      }), /* @__PURE__ */ a("radialGradient", {
        id: "paint1_radial_273_6295",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(23.0968 29.651) scale(82.4955 82.6579)",
        children: [/* @__PURE__ */ e("stop", {
          offset: "0.113",
          stopColor: "#810220"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.133",
          stopColor: "#920B27",
          stopOpacity: "0.861"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.204",
          stopColor: "#CB2740",
          stopOpacity: "0.398"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.257",
          stopColor: "#EF394F",
          stopOpacity: "0.11"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.284",
          stopColor: "#FC4055",
          stopOpacity: "0"
        })]
      }), /* @__PURE__ */ a("radialGradient", {
        id: "paint2_radial_273_6295",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(45.6744 11.2508) scale(51.1212 51.2218)",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#FF9640"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.8",
          stopColor: "#FC4055"
        })]
      }), /* @__PURE__ */ a("radialGradient", {
        id: "paint3_radial_273_6295",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(45.6744 11.2508) scale(51.1212 51.2218)",
        children: [/* @__PURE__ */ e("stop", {
          offset: "0.084",
          stopColor: "#FFDE67"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.147",
          stopColor: "#FFDC66",
          stopOpacity: "0.968"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.246",
          stopColor: "#FFD562",
          stopOpacity: "0.879"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.369",
          stopColor: "#FFCB5D",
          stopOpacity: "0.734"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.511",
          stopColor: "#FFBC55",
          stopOpacity: "0.533"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.667",
          stopColor: "#FFAA4B",
          stopOpacity: "0.28"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.822",
          stopColor: "#FF9640",
          stopOpacity: "0"
        })]
      }), /* @__PURE__ */ a("radialGradient", {
        id: "paint4_radial_273_6295",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(55.8771 5.44173) scale(86.4043 86.5744)",
        children: [/* @__PURE__ */ e("stop", {
          offset: "0.054",
          stopColor: "#FFF36E"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.457",
          stopColor: "#FF9640"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.639",
          stopColor: "#FF9640"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint5_linear_273_6295",
        x1: "39.4332",
        y1: "12.9176",
        x2: "18.6751",
        y2: "48.8016",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#FFF36E",
          stopOpacity: "0.8"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.094",
          stopColor: "#FFF36E",
          stopOpacity: "0.699"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.752",
          stopColor: "#FFF36E",
          stopOpacity: "0"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint6_linear_273_6295",
        x1: "28.3553",
        y1: "6.04977",
        x2: "39.5766",
        y2: "38.4758",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#B833E1"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.371",
          stopColor: "#9059FF"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.614",
          stopColor: "#5B6DF8"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#0090ED"
        })]
      }), /* @__PURE__ */ a("linearGradient", {
        id: "paint7_linear_273_6295",
        x1: "20.6319",
        y1: "6.55254",
        x2: "42.9688",
        y2: "28.8456",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          offset: "0.805",
          stopColor: "#722291",
          stopOpacity: "0"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#592ACB",
          stopOpacity: "0.5"
        })]
      })]
    })]
  });
}
function W2({
  className: n,
  width: o = "56",
  height: s = "56"
}) {
  return /* @__PURE__ */ a("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ e("path", {
      d: "M50 18.693L48.4088 14.3715L49.5154 11.8907C49.5849 11.7342 49.6056 11.5603 49.5746 11.3919C49.5436 11.2235 49.4625 11.0683 49.3418 10.9468L46.333 7.90548C45.6871 7.25009 44.8684 6.79166 43.972 6.58358C43.0757 6.37551 42.1387 6.42635 41.2701 6.73017L40.4275 7.0231L35.8312 2.04339L28.0344 2H27.9837L20.1363 2.06148L15.5435 7.08096L14.7262 6.79165C13.852 6.48423 12.9083 6.43253 12.0058 6.64263C11.1032 6.85273 10.2793 7.31591 9.6308 7.97781L6.56776 11.077C6.47163 11.1739 6.40706 11.2976 6.38254 11.4318C6.35801 11.5661 6.37468 11.7046 6.43035 11.8292L7.58396 14.404L6 18.7219L7.02342 22.6167L11.6921 40.3657C12.23 42.4103 13.4673 44.2018 15.1891 45.4286C15.1891 45.4286 20.8559 49.4247 26.4468 53.0555C26.8889 53.4085 27.4379 53.6007 28.0036 53.6007C28.5694 53.6007 29.1183 53.4085 29.5604 53.0555C35.842 48.9401 40.8109 45.4142 40.8109 45.4142C42.5313 44.1867 43.7673 42.3953 44.3043 40.3513L48.9476 22.5951L50 18.693Z",
      fill: "url(#paint0_linear_273_6304)"
    }), /* @__PURE__ */ e("path", {
      d: "M29.2856 33.9865C28.9879 33.8533 28.6809 33.7421 28.367 33.6538H27.8137C27.4998 33.7421 27.1928 33.8533 26.8952 33.9865L25.5029 34.5651C25.0617 34.7496 24.3529 35.0786 23.9298 35.2884L21.3694 36.6228C21.2767 36.6529 21.1951 36.7101 21.1351 36.7869C21.0752 36.8638 21.0396 36.9568 21.033 37.0541C21.0264 37.1513 21.049 37.2483 21.098 37.3326C21.147 37.4169 21.2201 37.4845 21.3079 37.5269L23.532 39.0964C23.9225 39.3712 24.5373 39.8558 24.899 40.1813L25.5246 40.7201C25.8862 41.0311 26.4757 41.5483 26.8337 41.8665L27.4268 42.3909C27.61 42.5436 27.841 42.6272 28.0795 42.6272C28.318 42.6272 28.549 42.5436 28.7323 42.3909L29.3543 41.8484L30.6634 40.7057L31.2926 40.156C31.6543 39.8414 32.2654 39.3568 32.656 39.0711L34.8801 37.4799C34.968 37.4377 35.0412 37.3698 35.09 37.2853C35.1388 37.2008 35.1609 37.1035 35.1535 37.0062C35.1461 36.9089 35.1094 36.8161 35.0484 36.7399C34.9873 36.6638 34.9047 36.6078 34.8113 36.5794L32.2546 35.2812C31.8279 35.0642 31.1191 34.7387 30.6742 34.5579L29.2856 33.9865Z",
      fill: "white"
    }), /* @__PURE__ */ e("path", {
      d: "M45.0529 19.6584L45.1252 19.4269C45.1295 19.1173 45.1101 18.8078 45.0673 18.5011C44.852 17.9534 44.5754 17.4317 44.2428 16.9461L42.7963 14.8233C42.5286 14.4255 42.073 13.7963 41.7656 13.4238L39.8272 10.9972C39.6504 10.7607 39.4584 10.5361 39.2522 10.3246H39.2125C39.2125 10.3246 38.8219 10.3933 38.3518 10.4837L35.39 11.0551L34.0917 11.3046C33.6607 11.3249 33.2298 11.2623 32.8224 11.1202L30.4826 10.3644C30.027 10.2161 29.2748 10.0028 28.8083 9.90149C28.3166 9.84924 27.8208 9.84924 27.3292 9.90149C26.8627 10.01 26.1105 10.2197 25.6548 10.368L23.315 11.1274C22.9076 11.2695 22.4767 11.3321 22.0457 11.3119L20.7474 11.066L17.782 10.4982C17.3119 10.4078 16.925 10.3355 16.9214 10.3391H16.8816C16.6755 10.5505 16.4834 10.7752 16.3066 11.0117L14.3718 13.4383C14.0753 13.7999 13.6088 14.4436 13.3412 14.8378L11.8946 16.9606C11.6448 17.3267 11.4166 17.707 11.2112 18.0997C11.0872 18.5376 11.0216 18.99 11.0159 19.445L11.0882 19.6765C11.123 19.8251 11.1677 19.9713 11.222 20.114C11.5222 20.4757 12.0357 21.076 12.3648 21.4268L17.4276 26.8079C17.5957 27.0041 17.7082 27.2417 17.7533 27.4961C17.7985 27.7505 17.7747 28.0123 17.6844 28.2544L16.8563 30.2181C16.668 30.7383 16.654 31.3057 16.8165 31.8346L16.9828 32.2903C17.2546 33.0303 17.7206 33.6836 18.3317 34.1816L19.1273 34.8289C19.334 34.978 19.5752 35.0721 19.8282 35.1025C20.0812 35.1329 20.3378 35.0985 20.5739 35.0025L23.4018 33.6536C23.9209 33.3937 24.4066 33.072 24.8484 32.6953L27.1122 30.652C27.2024 30.5706 27.2753 30.472 27.3266 30.3619C27.378 30.2517 27.4067 30.1325 27.411 30.0111C27.4154 29.8896 27.3954 29.7686 27.3521 29.6551C27.3089 29.5415 27.2433 29.4379 27.1592 29.3502L22.0493 25.9074C21.8558 25.7701 21.718 25.568 21.661 25.3377C21.6039 25.1074 21.6313 24.8643 21.7383 24.6525L23.7201 20.9277C23.8328 20.6997 23.8994 20.4517 23.9162 20.1979C23.9329 19.9441 23.8995 19.6895 23.8177 19.4486C23.5716 18.9892 23.1743 18.6289 22.693 18.4288L16.4802 16.0818C16.0317 15.9119 16.057 15.7202 16.5308 15.6913L20.1797 15.3296C20.7519 15.2932 21.3262 15.3445 21.883 15.4815L25.0581 16.3675C25.2835 16.4355 25.4767 16.5828 25.6017 16.7823C25.7267 16.9819 25.7751 17.2199 25.738 17.4524L24.4904 24.2656C24.4069 24.643 24.3861 25.0315 24.4289 25.4156C24.4795 25.5783 24.9062 25.7772 25.3727 25.8929L27.3075 26.3052C27.8693 26.4085 28.4453 26.4085 29.0072 26.3052L30.7466 25.911C31.2131 25.8062 31.6362 25.5856 31.6905 25.4228C31.7321 25.0385 31.7101 24.65 31.6254 24.2728L30.3705 17.4596C30.3334 17.2272 30.3818 16.9891 30.5068 16.7896C30.6318 16.5901 30.825 16.4427 31.0504 16.3747L34.2255 15.4851C34.7822 15.348 35.3566 15.2968 35.9288 15.3332L39.5777 15.6732C40.0551 15.7166 40.0768 15.8938 39.632 16.0637L33.4227 18.418C32.9414 18.6181 32.5441 18.9783 32.298 19.4378C32.1333 19.9243 32.1684 20.4562 32.3957 20.9169L34.381 24.6417C34.488 24.8535 34.5154 25.0966 34.4584 25.3268C34.4013 25.5571 34.2635 25.7593 34.07 25.8966L28.9638 29.3465C28.8797 29.4342 28.8141 29.5379 28.7708 29.6515C28.7276 29.765 28.7075 29.886 28.7119 30.0074C28.7163 30.1288 28.745 30.2481 28.7963 30.3582C28.8477 30.4683 28.9206 30.567 29.0108 30.6484L31.2782 32.6917C31.7201 33.0671 32.2058 33.3876 32.7248 33.6464L35.5527 34.9917C35.7891 35.0871 36.0459 35.1209 36.2989 35.0899C36.5519 35.0589 36.7929 34.9641 36.9993 34.8145L37.7949 34.1635C38.4067 33.6646 38.8727 33.01 39.1438 32.2686L39.3101 31.8129C39.4726 31.284 39.4586 30.7166 39.2703 30.1964L38.4386 28.2327C38.3483 27.9906 38.3245 27.7288 38.3696 27.4744C38.4148 27.22 38.5273 26.9824 38.6953 26.7862L43.7582 21.3978C44.0873 21.0362 44.5972 20.4576 44.8974 20.0851C44.9586 19.9465 45.0105 19.8039 45.0529 19.6584Z",
      fill: "white"
    }), /* @__PURE__ */ e("defs", {
      children: /* @__PURE__ */ a("linearGradient", {
        id: "paint0_linear_273_6304",
        x1: "6.01447",
        y1: "27.8026",
        x2: "49.9855",
        y2: "27.8026",
        gradientUnits: "userSpaceOnUse",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#F1562B"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.3",
          stopColor: "#F1542B"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.41",
          stopColor: "#F04D2A"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.49",
          stopColor: "#EF4229"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.5",
          stopColor: "#EF4029"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.56",
          stopColor: "#E83E28"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.67",
          stopColor: "#E13C26"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#DF3C26"
        })]
      })
    })]
  });
}
function G2({
  className: n,
  width: o = "56",
  height: s = "56"
}) {
  return /* @__PURE__ */ a("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 56 56",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ e("path", {
      d: "M4 27.3772C4 18.0076 11.8684 4 28.0168 4C44.1424 4 52 15.9076 52 24.286C52 31.0108 46.6852 35.9644 40.0096 35.9644C34.9156 35.9644 31.8988 34.2748 31.8988 32.9284C31.8988 32.0572 34.0048 30.724 34.0048 28.15C34.0048 25.072 31.6216 21.9856 27.9508 21.9856C24.43 21.9856 21.982 24.916 21.982 27.8716C21.982 35.014 28.738 41.8444 38.6992 41.8444C44.65 41.8444 46.81 39.6508 47.5828 39.6508C47.818 39.6508 48.3592 39.7468 48.3592 40.3744C48.3592 40.9744 41.776 51.9976 28.0312 51.9976C14.3584 52 4 41.2276 4 27.3772Z",
      fill: "#1DE9B6"
    }), /* @__PURE__ */ e("path", {
      d: "M4 27.3772C4 18.0076 13.138 12.9292 19.276 12.9292C35.4028 12.9292 40.0084 15.9088 40.0084 24.2872C40.0084 31.012 34.0048 30.7264 34.0048 28.1524C34.0048 25.0744 31.6216 21.988 27.9508 21.988C24.43 21.988 21.982 24.9184 21.982 27.874C21.982 35.0164 28.738 41.8468 38.6992 41.8468C44.65 41.8468 46.81 39.6532 47.5828 39.6532C47.818 39.6532 48.3592 39.7492 48.3592 40.3768C48.3592 40.9768 41.776 52 28.0312 52C14.3584 52 4 41.2276 4 27.3772Z",
      fill: "url(#paint0_radial_273_6308)"
    }), /* @__PURE__ */ e("path", {
      d: "M21.982 27.873C21.982 25.1154 24.112 22.383 27.256 22.0278C22.3312 22.4466 16.6984 27.2778 16.6984 36.225C16.6984 45.7806 24.9352 52.383 33.43 51.3786C43.4932 49.0662 48.3592 40.8906 48.3592 40.377C48.3592 39.7494 47.818 39.6534 47.5828 39.6534C46.8112 39.6534 44.65 41.847 38.6992 41.847C28.738 41.847 21.982 35.0166 21.982 27.873Z",
      fill: "url(#paint1_radial_273_6308)"
    }), /* @__PURE__ */ e("path", {
      d: "M4 27.3772C4 18.0076 11.8684 4 28.0168 4C44.1424 4 52 15.9076 52 24.286C52 31.0108 46.6852 35.9644 40.0096 35.9644C34.9156 35.9644 31.8988 34.2748 31.8988 32.9284C31.8988 32.0572 34.0048 30.724 34.0048 28.15C34.0048 25.072 31.5136 15.3364 18.8512 15.3364C15.3304 15.3376 5.5072 16.894 4 27.3772Z",
      fill: "url(#paint2_radial_273_6308)"
    }), /* @__PURE__ */ a("defs", {
      children: [/* @__PURE__ */ a("radialGradient", {
        id: "paint0_radial_273_6308",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(20.7916 38.6211) scale(25.6176 28.392)",
        children: [/* @__PURE__ */ e("stop", {
          offset: "0.652",
          stopColor: "#0083DE"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.822",
          stopColor: "#006AAC"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.944",
          stopColor: "#005A8C"
        })]
      }), /* @__PURE__ */ a("radialGradient", {
        id: "paint1_radial_273_6308",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(32.8984 34.3723) scale(19.7736 19.829)",
        children: [/* @__PURE__ */ e("stop", {
          offset: "0.69",
          stopColor: "#05509B"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.717",
          stopColor: "#054E98"
        }), /* @__PURE__ */ e("stop", {
          offset: "1",
          stopColor: "#033E78"
        })]
      }), /* @__PURE__ */ a("radialGradient", {
        id: "paint2_radial_273_6308",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(56.3776 18.4677) rotate(180) scale(73.8384 111.378)",
        children: [/* @__PURE__ */ e("stop", {
          stopColor: "#5EEB69"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.214",
          stopColor: "#4BC958"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.225",
          stopColor: "#4AC862"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.272",
          stopColor: "#47C68B"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.323",
          stopColor: "#44C4AE"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.376",
          stopColor: "#41C2CB"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.433",
          stopColor: "#3FC1E1"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.495",
          stopColor: "#3EC0F1"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.565",
          stopColor: "#3DBFFA"
        }), /* @__PURE__ */ e("stop", {
          offset: "0.664",
          stopColor: "#3DBFFD"
        })]
      })]
    })]
  });
}
function Y2({
  className: n,
  width: o = "40",
  height: s = "40"
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    viewBox: "0 0 40 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: n,
    children: /* @__PURE__ */ e("path", {
      d: "M29.8084 14.0557H26.6351C26.2825 14.0557 25.93 13.8952 25.6735 13.6384L24.3914 12.1938C24.0067 11.7765 23.3977 11.7444 22.949 12.0975L22.8528 12.1938L21.763 13.4458C21.4104 13.8631 20.8655 14.0878 20.3206 14.0878H2.9796C2.4988 15.5003 2.17826 17.0091 2.05005 18.5178H18.4615C18.75 18.5178 19.0384 18.3894 19.2308 18.1968L20.7693 16.5917C20.9617 16.3991 21.2181 16.2707 21.5066 16.2707H21.5707C21.8592 16.2707 22.1476 16.3991 22.34 16.6238L23.6221 18.0684C23.8785 18.3573 24.2311 18.5178 24.5837 18.5178H37.9501C37.8218 17.0091 37.5013 15.5003 37.0205 14.0878H29.8084V14.0557ZM19.2949 22.9158L18.0127 21.4712C17.6281 21.0539 17.0191 21.0218 16.5703 21.3749L16.4742 21.4712L15.3523 22.7232C14.9997 23.1405 14.4868 23.3652 13.9419 23.3652H2.30648C2.59496 24.9061 3.10782 26.4149 3.78094 27.8595H11.9546C12.2431 27.8595 12.4995 27.7311 12.7239 27.5385L14.2625 25.9334C14.4548 25.7408 14.7112 25.6123 14.9997 25.6123H15.0638C15.3523 25.6123 15.6408 25.7408 15.8331 25.9655L17.1152 27.41C17.3717 27.699 17.7242 27.8595 18.0768 27.8595H36.2192C36.8923 26.447 37.4051 24.9382 37.6936 23.3652H20.2565C19.8718 23.3652 19.5192 23.2047 19.2949 22.9158ZM25.5774 8.9194L27.1159 7.31431C27.3083 7.1217 27.5647 6.99329 27.8532 6.99329H27.9173C28.2058 6.99329 28.4942 7.1217 28.6866 7.31431L29.9687 8.75889C30.2251 9.04781 30.5777 9.17622 30.9303 9.17622H34.3921C28.366 1.21497 17.0511 -0.35802 9.06978 5.64502C7.75558 6.64017 6.5696 7.82794 5.54389 9.17622H24.8081C25.1286 9.24042 25.385 9.11201 25.5774 8.9194ZM13.1726 32.2895C12.788 32.2895 12.4354 32.129 12.211 31.8722L10.9289 30.4276C10.5442 30.0103 9.90317 29.9782 9.48648 30.3634L9.42237 30.4276L8.3005 31.6796C7.94791 32.0969 7.43505 32.3216 6.89014 32.3216H6.82603C13.5893 39.5766 25.0325 39.9297 32.3086 33.0921C32.5971 32.8353 32.8535 32.5463 33.142 32.2574H13.1726V32.2895Z",
      fill: "#111214"
    })
  });
}
function z2({
  className: n,
  width: o = "32",
  height: s = "32",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M22 22H18V20H22C24.2091 20 26 18.2091 26 16C26 13.7909 24.2091 12 22 12H18V10H22C25.3137 10 28 12.6863 28 16C28 19.3137 25.3137 22 22 22ZM10 12H14V10H10C6.68629 10 4 12.6863 4 16C4 19.3137 6.68629 22 10 22H14V20H10C7.79086 20 6 18.2091 6 16C6 13.7909 7.79086 12 10 12ZM11 17H21V15H11V17Z",
      fill: l
    })
  });
}
function q2({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M19 7.5C19.8284 7.5 20.5 6.82843 20.5 6C20.5 5.17157 19.8284 4.5 19 4.5C18.1716 4.5 17.5 5.17157 17.5 6C17.5 6.82843 18.1716 7.5 19 7.5ZM22 6C22 7.39788 21.0439 8.57245 19.75 8.90549V15.5C19.75 17.8472 17.8472 19.75 15.5 19.75C13.1528 19.75 11.25 17.8472 11.25 15.5V8.5C11.25 6.98122 10.0188 5.75 8.5 5.75C6.98122 5.75 5.75 6.98122 5.75 8.5V15H9L5 20L1 15H4.25V8.5C4.25 6.15279 6.15279 4.25 8.5 4.25C10.8472 4.25 12.75 6.15279 12.75 8.5V15.5C12.75 17.0188 13.9812 18.25 15.5 18.25C17.0188 18.25 18.25 17.0188 18.25 15.5V8.90549C16.9561 8.57245 16 7.39788 16 6C16 4.34315 17.3431 3 19 3C20.6569 3 22 4.34315 22 6Z",
      fill: l
    })
  });
}
function J2({
  className: n,
  width: o = "48",
  height: s = "48",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M32 13L13 13L12.9997 16L21.4392 24.4395L9.93933 35.9393L12.0607 38.0607L23.5605 26.5608L31.9997 35H32H35V32V16V13H32ZM17.2424 16L32 30.7576V16L17.2424 16Z",
      fill: l
    })
  });
}
function K2({
  className: n,
  width: o = "48",
  height: s = "48",
  color: l = "currentColor"
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 48 48",
    fill: l,
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M35 35.0001L35.0002 32.0001L26.5608 23.5607L38.0607 12.0608L35.9393 9.93945L24.4395 21.4393L16.0002 13.0001L13 13.0001L13 35.0001L35 35.0001ZM30.7576 32.0001L16 17.2425L16 32.0001L30.7576 32.0001Z"
    })
  });
}
function X2({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M14 13V15H4V13H14ZM16 8V10H2V8H16ZM14 3V5H4V3H14Z",
      fill: l
    })
  });
}
function Q2({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.5 21.5L5.5 19.5L7.62132 17.3787L12.3787 12.6213L14.5 10.5L16.6213 12.6213L21.3787 17.3787L23.5 19.5L21.5 21.5H21.2574H16V33H23V36H14.5H13V34.5V21.5H7.74264H7.5ZM18.2574 18.5L14.5 14.7426L10.7426 18.5H18.2574ZM32 15H25V12H33.5H35V13.5V26.5H40.2574H40.5L42.5 28.5L40.3787 30.6213L35.6213 35.3787L33.5 37.5L31.3787 35.3787L26.6213 30.6213L24.5 28.5L26.5 26.5H26.7426H32V15ZM33.5 33.2574L37.2574 29.5H29.7426L33.5 33.2574Z",
      fill: l
    })
  });
}
function e3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M26.5858 14.4142L28 13L26.5858 11.5858L22.4142 7.41421L21 6L19.5858 7.41422L19.5858 12H11V14H19.5858L19.5858 18.5858L21 20L22.4142 18.5858L26.5858 14.4142ZM25.1716 13L21.5858 16.5858L21.5858 9.41421L25.1716 13ZM9.41421 24.4142L8 23L9.41421 21.5858L13.5858 17.4142L15 16L16.4142 17.4142L16.4142 22H25V24H16.4142L16.4142 28.5858L15 30L13.5858 28.5858L9.41421 24.4142ZM10.8284 23L14.4142 26.5858L14.4142 19.4142L10.8284 23Z",
      fill: l
    })
  });
}
function t3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M17 17V9H19V17H27V19H19V27H17V19H9V17H17Z",
      fill: l
    })
  });
}
function r3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.4738 13.6547L18 9.3094L25.5263 13.6547V22.3453L18 26.6906L10.4738 22.3453V13.6547ZM18 7L27.5263 12.5V23.5L18 29L8.47375 23.5V12.5L18 7ZM12.749 16.1154L17 18.5766V23.5H19V18.5766L23.2511 16.1154L22.249 14.3846L18 16.8445L13.7511 14.3846L12.749 16.1154Z",
      fill: l
    })
  });
}
function n3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.5304 7.03039L10.5304 17.0304L10.0001 17.5607L9.46973 17.0304L3.96973 11.5304L5.03039 10.4697L10.0001 15.4394L19.4697 5.96973L20.5304 7.03039Z",
      fill: l
    })
  });
}
function o3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M12 4.5C7.85625 4.5 4.5 7.85625 4.5 12C4.49915 13.5745 4.99411 15.1092 5.91466 16.3865C6.83521 17.6638 8.13461 18.6188 9.6285 19.116C10.0035 19.1813 10.1438 18.9562 10.1438 18.759C10.1438 18.5812 10.134 17.991 10.134 17.3625C8.25 17.7098 7.7625 16.9035 7.6125 16.4813C7.52775 16.2653 7.1625 15.6 6.84375 15.4215C6.58125 15.2812 6.20625 14.934 6.834 14.925C7.425 14.9152 7.8465 15.4687 7.9875 15.6937C8.6625 16.8277 9.741 16.509 10.1715 16.3125C10.2375 15.825 10.434 15.4972 10.65 15.3097C8.98125 15.1222 7.2375 14.475 7.2375 11.6063C7.2375 10.7903 7.52775 10.116 8.00625 9.59025C7.93125 9.40275 7.66875 8.634 8.08125 7.60275C8.08125 7.60275 8.709 7.40625 10.1438 8.37225C10.7543 8.2028 11.3851 8.11751 12.0188 8.11875C12.6563 8.11875 13.2938 8.20275 13.8938 8.3715C15.3278 7.3965 15.9563 7.6035 15.9563 7.6035C16.3688 8.63475 16.1063 9.4035 16.0313 9.591C16.509 10.116 16.8 10.7813 16.8 11.6063C16.8 14.4848 15.0473 15.1222 13.3785 15.3097C13.65 15.5437 13.8848 15.9938 13.8848 16.6973C13.8848 17.7 13.875 18.5063 13.875 18.7598C13.875 18.9563 14.016 19.1902 14.391 19.1152C15.8798 18.6126 17.1734 17.6557 18.0899 16.3794C19.0064 15.103 19.4996 13.5713 19.5 12C19.5 7.85625 16.1438 4.5 12 4.5Z",
      fill: l
    })
  });
}
function s3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M12 3.75L19.125 7.875V16.125L12 20.25L4.875 16.125V7.875L12 3.75ZM12 5.48325L6.375 8.73975V15.2603L12 18.5167L17.625 15.2603V8.73975L12 5.48325ZM12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM12 13.5C12.3978 13.5 12.7794 13.342 13.0607 13.0607C13.342 12.7794 13.5 12.3978 13.5 12C13.5 11.6022 13.342 11.2206 13.0607 10.9393C12.7794 10.658 12.3978 10.5 12 10.5C11.6022 10.5 11.2206 10.658 10.9393 10.9393C10.658 11.2206 10.5 11.6022 10.5 12C10.5 12.3978 10.658 12.7794 10.9393 13.0607C11.2206 13.342 11.6022 13.5 12 13.5Z",
      fill: l
    })
  });
}
function i3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M24 13H28C28 13 28 24.7578 28 27C21.6667 27 14.3333 27 8 27C8 21.3333 8 14.6667 8 9C13.3333 9 18.6667 9 24 9V13ZM10 15V25H26V15H10ZM10 11V13H22V11H10ZM21 19H24V21H21V19Z",
      fill: l
    })
  });
}
function P1({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    style: {
      stroke: "currentColor"
    },
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M12 5L5 12M5 12L12 19M5 12H20",
      stroke: l,
      strokeWidth: "1.5"
    })
  });
}
function l3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 3H9V4.5H4.5V8H3V4.5V3H4.5ZM15 3V4.5H19.5V8H21V4.5V3H19.5H15ZM19.5 19.5H15V21H19.5H21V19.5V16H19.5V19.5ZM4.5 19.5V16H3V19.5V21H4.5H9V19.5H4.5ZM3 12.75H21V11.25H3V12.75Z",
      fill: l
    })
  });
}
function a3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M16.7729 14.6519L15.7124 13.5899L16.7729 12.5294C17.1237 12.1818 17.4023 11.7683 17.5928 11.3126C17.7832 10.857 17.8818 10.3682 17.8829 9.8744C17.884 9.38057 17.7875 8.89138 17.5991 8.43492C17.4106 7.97847 17.1338 7.56374 16.7846 7.21454C16.4354 6.86534 16.0207 6.58856 15.5642 6.40007C15.1077 6.21159 14.6186 6.11512 14.1247 6.1162C13.6309 6.11728 13.1421 6.21589 12.6865 6.40638C12.2309 6.59686 11.8174 6.87546 11.4697 7.22618L10.4092 8.28743L9.34795 7.22693L10.4099 6.16643C11.3946 5.18181 12.73 4.62866 14.1224 4.62866C15.5149 4.62866 16.8503 5.18181 17.8349 6.16643C18.8196 7.15105 19.3727 8.48647 19.3727 9.87893C19.3727 11.2714 18.8196 12.6068 17.8349 13.5914L16.7737 14.6519H16.7729ZM14.6519 16.7729L13.5907 17.8334C12.6061 18.818 11.2707 19.3712 9.8782 19.3712C8.48574 19.3712 7.15031 18.818 6.1657 17.8334C5.18108 16.8488 4.62793 15.5134 4.62793 14.1209C4.62793 12.7285 5.18108 11.393 6.1657 10.4084L7.22695 9.34793L8.28745 10.4099L7.22695 11.4704C6.87622 11.8181 6.59763 12.2316 6.40714 12.6872C6.21666 13.1429 6.11805 13.6316 6.11697 14.1255C6.11589 14.6193 6.21236 15.1085 6.40084 15.5649C6.58933 16.0214 6.86611 16.4361 7.21531 16.7853C7.56451 17.1345 7.97924 17.4113 8.43569 17.5998C8.89215 17.7883 9.38133 17.8847 9.87517 17.8837C10.369 17.8826 10.8578 17.784 11.3134 17.5935C11.769 17.403 12.1825 17.1244 12.5302 16.7737L13.5907 15.7132L14.6519 16.7737V16.7729ZM14.1209 8.81768L15.1822 9.87893L9.87895 15.1814L8.8177 14.1209L14.1209 8.81843V8.81768Z",
      fill: l
    })
  });
}
function c3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M15.75 15.75H19.5V17.25H17.25V19.5H15.75V15.75ZM8.25 8.25H4.5V6.75H6.75V4.5H8.25V8.25ZM16.773 14.652L15.7125 13.59L16.773 12.5295C17.1237 12.1818 17.4023 11.7683 17.5928 11.3127C17.7833 10.8571 17.8819 10.3683 17.883 9.87447C17.8841 9.38064 17.7876 8.89145 17.5991 8.43499C17.4106 7.97854 17.1338 7.56381 16.7846 7.21461C16.4354 6.86541 16.0207 6.58863 15.5643 6.40014C15.1078 6.21166 14.6186 6.11519 14.1248 6.11627C13.6309 6.11735 13.1422 6.21596 12.6866 6.40645C12.2309 6.59693 11.8174 6.87553 11.4698 7.22625L10.4092 8.2875L9.348 7.227L10.41 6.1665C11.3946 5.18188 12.73 4.62873 14.1225 4.62873C15.515 4.62873 16.8504 5.18188 17.835 6.1665C18.8196 7.15112 19.3728 8.48654 19.3728 9.879C19.3728 11.2715 18.8196 12.6069 17.835 13.5915L16.7738 14.652H16.773ZM14.652 16.773L13.5907 17.8335C12.6061 18.8181 11.2707 19.3713 9.87825 19.3713C8.48579 19.3713 7.15037 18.8181 6.16575 17.8335C5.18113 16.8489 4.62798 15.5135 4.62798 14.121C4.62798 12.7285 5.18113 11.3931 6.16575 10.4085L7.227 9.348L8.2875 10.41L7.227 11.4705C6.87628 11.8182 6.59768 12.2317 6.4072 12.6873C6.21671 13.1429 6.1181 13.6317 6.11702 14.1255C6.11594 14.6194 6.21241 15.1086 6.40089 15.565C6.58938 16.0215 6.86616 16.4362 7.21536 16.7854C7.56456 17.1346 7.97929 17.4114 8.43574 17.5999C8.8922 17.7883 9.38139 17.8848 9.87522 17.8837C10.3691 17.8826 10.8578 17.784 11.3134 17.5936C11.7691 17.4031 12.1826 17.1245 12.5302 16.7738L13.5907 15.7133L14.652 16.7738V16.773ZM14.121 8.81775L15.1823 9.879L9.879 15.1815L8.81775 14.121L14.121 8.8185V8.81775Z",
      fill: l
    })
  });
}
function d3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M4.09725 3.32476C5.45817 2.1455 7.19924 1.4975 9 1.50001C13.1423 1.50001 16.5 4.85776 16.5 9.00001C16.5 10.602 15.9975 12.087 15.1425 13.305L12.75 9.00001H15C15.0001 7.82373 14.6544 6.67336 14.006 5.69195C13.3576 4.71054 12.4349 3.94138 11.3529 3.4801C10.2708 3.01882 9.07704 2.88578 7.91997 3.09752C6.7629 3.30926 5.69359 3.85643 4.845 4.67101L4.09725 3.32476ZM13.9028 14.6753C12.5418 15.8545 10.8008 16.5025 9 16.5C4.85775 16.5 1.5 13.1423 1.5 9.00001C1.5 7.39801 2.0025 5.91301 2.8575 4.69501L5.25 9.00001H3C2.9999 10.1763 3.34556 11.3267 3.994 12.3081C4.64244 13.2895 5.56505 14.0586 6.64712 14.5199C7.72918 14.9812 8.92296 15.1142 10.08 14.9025C11.2371 14.6908 12.3064 14.1436 13.155 13.329L13.9028 14.6753Z",
      fill: l
    })
  });
}
function f3({
  className: n,
  width: o = "24",
  height: s = "24",
  color: l
}) {
  return /* @__PURE__ */ e("svg", {
    width: o,
    height: s,
    className: n,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ e("path", {
      d: "M17.5876 6.59722C16.5402 6.1182 15.4279 5.76908 14.2669 5.57422C14.1207 5.82591 13.9583 6.16691 13.8447 6.43484C12.6098 6.25622 11.3838 6.25622 10.1659 6.43484C10.0523 6.16691 9.88174 5.82591 9.74371 5.57422C8.57458 5.76908 7.46227 6.1182 6.42221 6.59722C4.31937 9.69871 3.75104 12.7271 4.0352 15.7149C5.43169 16.7298 6.77947 17.3469 8.10369 17.7529C8.42845 17.3144 8.72075 16.8435 8.97244 16.3482C8.49341 16.1696 8.03874 15.9504 7.60031 15.6906C7.71398 15.6094 7.82765 15.5201 7.9332 15.4308C10.58 16.6405 13.4469 16.6405 16.0612 15.4308C16.1749 15.5201 16.2804 15.6094 16.3941 15.6906C15.9556 15.9504 15.501 16.1696 15.0219 16.3482C15.2737 16.8435 15.566 17.3144 15.8907 17.7529C17.2141 17.3469 18.57 16.7298 19.9592 15.7149C20.3083 12.2562 19.4063 9.25219 17.5876 6.59722ZM9.33779 13.8719C8.54211 13.8719 7.89258 13.1493 7.89258 12.2644C7.89258 11.3794 8.52587 10.6568 9.33779 10.6568C10.1416 10.6568 10.7992 11.3794 10.783 12.2644C10.783 13.1493 10.1416 13.8719 9.33779 13.8719ZM14.6729 13.8719C13.8772 13.8719 13.2268 13.1493 13.2268 12.2644C13.2268 11.3794 13.8609 10.6568 14.6729 10.6568C15.4766 10.6568 16.1343 11.3794 16.118 12.2644C16.118 13.1493 15.4848 13.8719 14.6729 13.8719Z",
      fill: l
    })
  });
}
function d() {
  return /* @__PURE__ */ e(N1, {});
}
function L(n) {
  return function(s) {
    return /* @__PURE__ */ a("span", {
      style: {
        display: "inline-flex",
        alignItems: "center"
      },
      children: ["\u200B", K.createElement(n, s)]
    });
  };
}
d.MetaMask = L(U2);
d.MetaMaskFlask = L($2);
d.Chrome = L(P2);
d.Firefox = L(I2);
d.Brave = L(W2);
d.Edge = L(G2);
d.Aptos = L(Y2);
d.Import = L(t3);
d.Back = L(P1);
d.ArrowRight = L(j2);
d.Install = L(D2);
d.Close = L(N2);
d.Check = L(n3);
d.Connect = L(z2);
d.Connected = L(a3);
d.Disconnected = L(c3);
d.Reveal = L(q2);
d.Send = L(J2);
d.Receive = L(K2);
d.Swap = L(Q2);
d.Transaction = L(e3);
d.NFT = L(r3);
d.Github = L(o3);
d.Discord = L(f3);
d.Menu = L(X2);
d.Settings = L(s3);
d.Wallet = L(i3);
d.Back = L(P1);
d.Scan = L(l3);
d.Refresh = L(d3);
const C3 = "_content_vpu82_1", p3 = "_install_vpu82_5", U1 = {
  content: C3,
  install: p3
};
function L3({
  name: n
}) {
  return /* @__PURE__ */ a(N1, {
    children: [/* @__PURE__ */ a("div", {
      className: `sk-t-center ${U1.content}`,
      children: [/* @__PURE__ */ e(d.MetaMask, {}), /* @__PURE__ */ e("h2", {
        className: "sk-t-h2 sk-c-n80",
        children: "Install MetaMask Flask"
      }), /* @__PURE__ */ a("p", {
        className: "sk-t-caption sk-c-n60",
        children: ["You will need to install the MetaMask extension in order to use ", n, " Snap."]
      }), /* @__PURE__ */ e("p", {
        children: /* @__PURE__ */ a("a", {
          href: "/",
          className: "sk-t-h4 sk-c-pri60 sk-c-hover-pri60 sk-inline-flex sk-items-center",
          children: [/* @__PURE__ */ e("span", {
            children: "Learn More"
          }), /* @__PURE__ */ e(d.ArrowRight, {})]
        })
      })]
    }), /* @__PURE__ */ a(f1, {
      tagName: "a",
      primary: !0,
      size: "large",
      href: "https://chrome.google.com/webstore/detail/metamask-flask-developmen/ljfoeinjpaedjfecbmggjgodbgkmjkjk",
      target: "_blank",
      rel: "noopener noreferrer",
      children: [/* @__PURE__ */ e(d.Install, {
        className: U1.install
      }), /* @__PURE__ */ e("span", {
        children: "Install MetaMask"
      })]
    })]
  });
}
const u3 = "_modal_16onz_1", h3 = "_mini_16onz_5", _3 = "_small_16onz_8", v3 = "_content_16onz_12", g3 = "_box_16onz_17", m3 = "_close_16onz_31", J = {
  modal: u3,
  mini: h3,
  small: _3,
  content: v3,
  box: g3,
  close: m3
};
function w3({
  children: n,
  className: o,
  size: s = "small",
  closeIcon: l,
  ...y
}) {
  const b = /* @__PURE__ */ e("div", {
    className: `sk-icon ${J.close} sk-flex sk-justify-center sk-items-center sk-bg-hover-ntd04 sk-a-transition`,
    children: /* @__PURE__ */ e(d.Close, {})
  });
  return /* @__PURE__ */ e(A1, {
    className: `${o || ""} ${J.modal}`,
    size: s,
    closeIcon: l === !0 ? b : l,
    ...y,
    children: /* @__PURE__ */ e(A1.Content, {
      className: `${J.content} sk-content`,
      children: /* @__PURE__ */ e("div", {
        className: `sk-box ${J.box}`,
        children: n
      })
    })
  });
}
const y3 = "_modal_17r40_1", x3 = "_browser_17r40_7", $1 = {
  modal: y3,
  browser: x3
}, k3 = "_browsers_17xer_1", M3 = "_msg_17xer_7", E3 = "_desc_17xer_11", c1 = {
  browsers: k3,
  msg: M3,
  desc: E3
};
function b3() {
  return /* @__PURE__ */ a("div", {
    className: "sk-t-center",
    children: [/* @__PURE__ */ a("div", {
      className: `sk-flex sk-justify-center ${c1.browsers}`,
      children: [/* @__PURE__ */ a("a", {
        className: "sk-bg-hover-ntd04 sk-a-transition",
        href: "https://www.google.com/chrome/",
        children: [/* @__PURE__ */ e(d.Chrome, {}), /* @__PURE__ */ e("div", {
          className: "sk-t-h5 sk-c-n60",
          children: "Chrome"
        })]
      }), /* @__PURE__ */ a("a", {
        className: "sk-bg-hover-ntd04 sk-a-transition",
        href: "https://www.mozilla.org/",
        children: [/* @__PURE__ */ e(d.Firefox, {}), /* @__PURE__ */ e("div", {
          className: "sk-t-h5 sk-c-n60",
          children: "Firefox"
        })]
      }), /* @__PURE__ */ a("a", {
        className: "sk-bg-hover-ntd04 sk-a-transition",
        href: "https://brave.com/",
        children: [/* @__PURE__ */ e(d.Brave, {}), /* @__PURE__ */ e("div", {
          className: "sk-t-h5 sk-c-n60",
          children: "Brave"
        })]
      }), /* @__PURE__ */ a("a", {
        className: "sk-bg-hover-ntd04 sk-a-transition",
        href: "https://www.microsoft.com/en-us/edge",
        children: [/* @__PURE__ */ e(d.Edge, {}), /* @__PURE__ */ e("div", {
          className: "sk-t-h5 sk-c-n60",
          children: "Edge"
        })]
      })]
    }), /* @__PURE__ */ e("div", {
      className: `sk-t-h2 sk-c-n80 ${c1.msg}`,
      children: "This Browser is not Supported"
    }), /* @__PURE__ */ e("div", {
      className: `sk-t-caption sk-c-n60 ${c1.desc}`,
      children: "Please use the browsers above we currently supported."
    })]
  });
}
const H3 = "_connect_5hpcy_1", Z3 = "_logos_5hpcy_5", F3 = "_logo_5hpcy_5", R3 = "_help_5hpcy_17", O3 = "_btn_5hpcy_21", S3 = "_pulse_5hpcy_1", E = {
  connect: H3,
  logos: Z3,
  logo: F3,
  help: R3,
  btn: O3,
  "btn-address": "_btn-address_5hpcy_24",
  "dot-pulse": "_dot-pulse_5hpcy_28",
  "dot-pulse__dot": "_dot-pulse__dot_5hpcy_37",
  pulse: S3
};
function I1({
  name: n,
  logo: o,
  loading: s,
  onConnect: l
}) {
  return /* @__PURE__ */ a("div", {
    className: "sk-t-center",
    children: [/* @__PURE__ */ a("div", {
      className: `${E.logos} sk-flex sk-justify-center sk-items-center`,
      children: [/* @__PURE__ */ e("div", {
        className: `${E.logo} sk-flex sk-items-center sk-justify-center`,
        children: o || /* @__PURE__ */ e(d.Aptos, {
          width: "40px",
          height: "40px"
        })
      }), s ? /* @__PURE__ */ e("div", {
        className: `${E["dot-pulse"]} ${E.connect}`,
        children: /* @__PURE__ */ e("div", {
          className: E["dot-pulse__dot"]
        })
      }) : /* @__PURE__ */ e(d.Connect, {
        className: E.connect
      }), /* @__PURE__ */ e("div", {
        className: `${E.logo} sk-flex sk-items-center sk-justify-center`,
        children: /* @__PURE__ */ e(d.MetaMask, {
          width: "40px",
          height: "40px"
        })
      })]
    }), /* @__PURE__ */ a("div", {
      className: "sk-t-h2 sk-c-n80",
      children: [/* @__PURE__ */ e("div", {
        children: "Connect to MetaMask"
      }), /* @__PURE__ */ a("div", {
        children: [n, " Snap"]
      })]
    }), /* @__PURE__ */ a("div", {
      className: `${E.help} sk-t-caption sk-c-n60`,
      children: ["If you do not have ", n, " Snap installed, you will be prompted to do so."]
    }), /* @__PURE__ */ a("a", {
      href: "/",
      className: "sk-inline-flex sk-items-center sk-c-pri60 sk-c-hover-pri60",
      children: [/* @__PURE__ */ e("span", {
        children: "What is Snaps"
      }), /* @__PURE__ */ e(d.ArrowRight, {
        width: "18px",
        height: "18px"
      })]
    }), /* @__PURE__ */ a(f1, {
      primary: !0,
      className: E.btn,
      loading: s,
      onClick: l,
      children: [/* @__PURE__ */ e(d.MetaMask, {
        solid: !0,
        width: "24px",
        height: "24px"
      }), /* @__PURE__ */ e("span", {
        style: {
          marginLeft: "8px"
        },
        children: "Connect MetaMask"
      })]
    })]
  });
}
const V3 = "_connect_1vrf6_1", T3 = "_help_1vrf6_12", B3 = "_btn_1vrf6_16", d1 = {
  connect: V3,
  help: T3,
  btn: B3
};
function W1({
  name: n,
  logo: o,
  loading: s,
  onGetAddress: l
}) {
  return /* @__PURE__ */ a("div", {
    className: "sk-t-center",
    children: [/* @__PURE__ */ a("div", {
      className: `${E.logos} sk-flex sk-justify-center sk-items-center`,
      children: [/* @__PURE__ */ e("div", {
        className: `${E.logo} sk-flex sk-items-center sk-justify-center`,
        children: o || /* @__PURE__ */ e(d.Aptos, {
          width: "40px",
          height: "40px"
        })
      }), /* @__PURE__ */ a("div", {
        className: `${d1.connect} sk-flex`,
        children: [/* @__PURE__ */ e("i", {}), /* @__PURE__ */ e("i", {}), /* @__PURE__ */ e("i", {}), /* @__PURE__ */ e("i", {}), /* @__PURE__ */ e("i", {}), /* @__PURE__ */ e("i", {}), /* @__PURE__ */ e("i", {}), /* @__PURE__ */ e("i", {})]
      }), /* @__PURE__ */ e("div", {
        className: `${E.logo} sk-flex sk-items-center sk-justify-center`,
        children: /* @__PURE__ */ e(d.MetaMask, {
          width: "40px",
          height: "40px"
        })
      })]
    }), /* @__PURE__ */ a("div", {
      className: "sk-t-h2 sk-c-n80",
      children: [/* @__PURE__ */ e("div", {
        children: "Get Addresses for"
      }), /* @__PURE__ */ a("div", {
        children: [n, " Snap"]
      })]
    }), /* @__PURE__ */ e("div", {
      className: `${d1.help} sk-t-caption sk-c-n60`,
      children: "Your Aptos account addresses will be created along with your MetaMask public key."
    }), /* @__PURE__ */ a(f1, {
      primary: !0,
      className: d1.btn,
      loading: s,
      onClick: l,
      children: [/* @__PURE__ */ e(d.Reveal, {
        width: "24px",
        height: "24px"
      }), /* @__PURE__ */ e("span", {
        style: {
          marginLeft: "8px"
        },
        children: "Get Addresses"
      })]
    })]
  });
}
function A3(n) {
  let o = "";
  return n.includes("Firefox") ? o = "Firefox" : n.includes("SamsungBrowser") ? o = "SamsungBrowser" : n.includes("Opera") || n.includes("OPR") ? o = "Opera" : n.includes("Trident") ? o = "IE" : n.includes("Edge") ? o = "Edge (Legacy)" : n.includes("Edg") ? o = "Edge" : n.includes("Chrome") ? o = "Chrome" : n.includes("Safari") && (o = "Safari"), /^(Chrome|Firefox|Edge)/.test(o);
}
const D3 = A3(navigator.userAgent);
function C1({
  name: n,
  logo: o,
  open: s,
  loading: l,
  connected: y,
  onConnect: b,
  onGetAddress: Z,
  onClose: H,
  children: h
}) {
  const x = `sk-t-center ${$1.modal}`, [g, k] = a1(h), [F, T] = a1("mini"), [I, j] = a1(x);
  return M2(() => {
    h || (D3 ? y ? (j(x), k(/* @__PURE__ */ e(W1, {
      ...{
        name: n,
        logo: o,
        loading: l,
        onGetAddress: Z
      }
    }))) : (j(x), k(/* @__PURE__ */ e(I1, {
      ...{
        name: n,
        logo: o,
        loading: l,
        onConnect: b
      }
    }))) : (T("tiny"), j(`${x} ${$1.browser}`), k(/* @__PURE__ */ e(b3, {}))));
  }, [h, y, l]), /* @__PURE__ */ e(w3, {
    open: s,
    onClose: H,
    closeIcon: !0,
    size: F,
    className: I,
    children: g
  });
}
C1.Install = L3;
C1.Connecting = I1;
C1.Address = W1;
export {
  f1 as Button,
  C1 as Connect,
  d as Icon,
  A2 as Loading,
  w3 as Modal
};
