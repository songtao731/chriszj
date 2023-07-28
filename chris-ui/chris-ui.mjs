import { unref as i, getCurrentScope as Md, onScopeDispose as Ad, ref as x, watch as me, getCurrentInstance as Ke, onMounted as Xe, nextTick as Te, computed as E, openBlock as O, createElementBlock as K, createElementVNode as Q, warn as Nd, inject as Oe, isRef as bn, shallowRef as Wn, onBeforeUnmount as zt, onBeforeMount as cl, provide as vt, defineComponent as ce, mergeProps as Pt, renderSlot as $e, toRef as St, onUnmounted as Ka, reactive as Ut, toRefs as wn, normalizeClass as A, onUpdated as dl, createVNode as J, Fragment as Ne, useSlots as Jn, withCtx as re, createBlock as fe, resolveDynamicComponent as gt, normalizeStyle as Ge, createTextVNode as pt, toDisplayString as ye, createCommentVNode as de, TransitionGroup as Rd, useAttrs as Jr, withDirectives as ze, withModifiers as qe, vShow as wt, Transition as ur, cloneVNode as Id, Text as Zi, Comment as Ji, Teleport as Dd, readonly as Ld, onDeactivated as Fd, renderList as Ye, toRaw as cr, vModelCheckbox as Da, vModelRadio as Qi, h as Re, resolveComponent as Ve, onBeforeUpdate as Bd, withKeys as mt, vModelText as eu, triggerRef as Pr, resolveDirective as fl, createSlots as pl, watchEffect as jn, normalizeProps as Nr, guardReactiveProps as La, toHandlers as zd } from "vue";
const tu = (e) => !e.getAttribute("aria-owns"), nu = (e, t, n) => {
  const { parentNode: r } = e;
  if (!r)
    return null;
  const a = r.querySelectorAll(n), o = Array.prototype.indexOf.call(a, e);
  return a[o + t] || null;
}, $a = (e) => {
  e && (e.focus(), !tu(e) && e.click());
}, pn = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (a) => {
  const o = e == null ? void 0 : e(a);
  if (n === !1 || !o)
    return t == null ? void 0 : t(a);
};
var ts;
const at = typeof window < "u", Vd = (e) => typeof e == "string", Fa = () => {
}, ru = at && ((ts = window == null ? void 0 : window.navigator) == null ? void 0 : ts.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function dr(e) {
  return typeof e == "function" ? e() : i(e);
}
function Hd(e, t) {
  function n(...r) {
    return new Promise((a, o) => {
      Promise.resolve(e(() => t.apply(this, r), { fn: t, thisArg: this, args: r })).then(a).catch(o);
    });
  }
  return n;
}
function Wd(e, t = {}) {
  let n, r, a = Fa;
  const o = (s) => {
    clearTimeout(s), a(), a = Fa;
  };
  return (s) => {
    const u = dr(e), c = dr(t.maxWait);
    return n && o(n), u <= 0 || c !== void 0 && c <= 0 ? (r && (o(r), r = null), Promise.resolve(s())) : new Promise((f, p) => {
      a = t.rejectOnCancel ? p : f, c && !r && (r = setTimeout(() => {
        n && o(n), r = null, f(s());
      }, c)), n = setTimeout(() => {
        r && o(r), r = null, f(s());
      }, u);
    });
  };
}
function jd(e) {
  return e;
}
function vl(e) {
  return Md() ? (Ad(e), !0) : !1;
}
function Kd(e, t = 200, n = {}) {
  return Hd(Wd(t, n), e);
}
function qd(e, t = 200, n = {}) {
  const r = x(e.value), a = Kd(() => {
    r.value = e.value;
  }, t, n);
  return me(e, () => a()), r;
}
function Yd(e, t = !0) {
  Ke() ? Xe(e) : t ? e() : Te(e);
}
function vn(e) {
  var t;
  const n = dr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const qa = at ? window : void 0;
function hn(...e) {
  let t, n, r, a;
  if (Vd(e[0]) || Array.isArray(e[0]) ? ([n, r, a] = e, t = qa) : [t, n, r, a] = e, !t)
    return Fa;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], l = () => {
    o.forEach((f) => f()), o.length = 0;
  }, s = (f, p, m, h) => (f.addEventListener(p, m, h), () => f.removeEventListener(p, m, h)), u = me(() => [vn(t), dr(a)], ([f, p]) => {
    l(), f && o.push(...n.flatMap((m) => r.map((h) => s(f, m, h, p))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), l();
  };
  return vl(c), c;
}
let ns = !1;
function au(e, t, n = {}) {
  const { window: r = qa, ignore: a = [], capture: o = !0, detectIframe: l = !1 } = n;
  if (!r)
    return;
  ru && !ns && (ns = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Fa)));
  let s = !0;
  const u = (m) => a.some((h) => {
    if (typeof h == "string")
      return Array.from(r.document.querySelectorAll(h)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = vn(h);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), f = [
    hn(r, "click", (m) => {
      const h = vn(e);
      if (!(!h || h === m.target || m.composedPath().includes(h))) {
        if (m.detail === 0 && (s = !u(m)), !s) {
          s = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: o }),
    hn(r, "pointerdown", (m) => {
      const h = vn(e);
      h && (s = !m.composedPath().includes(h) && !u(m));
    }, { passive: !0 }),
    l && hn(r, "blur", (m) => {
      var h;
      const v = vn(e);
      ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(v != null && v.contains(r.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Ud(e, t = !1) {
  const n = x(), r = () => n.value = !!e();
  return r(), Yd(r, t), n;
}
const rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, as = "__vueuse_ssr_handlers__";
rs[as] = rs[as] || {};
function Gd(e, t, { window: n = qa, initialValue: r = "" } = {}) {
  const a = x(r), o = E(() => {
    var l;
    return vn(t) || ((l = n == null ? void 0 : n.document) == null ? void 0 : l.documentElement);
  });
  return me([o, () => dr(e)], ([l, s]) => {
    var u;
    if (l && n) {
      const c = (u = n.getComputedStyle(l).getPropertyValue(s)) == null ? void 0 : u.trim();
      a.value = c || r;
    }
  }, { immediate: !0 }), me(a, (l) => {
    var s;
    (s = o.value) != null && s.style && o.value.style.setProperty(dr(e), l);
  }), a;
}
var os = Object.getOwnPropertySymbols, Xd = Object.prototype.hasOwnProperty, Zd = Object.prototype.propertyIsEnumerable, Jd = (e, t) => {
  var n = {};
  for (var r in e)
    Xd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && os)
    for (var r of os(e))
      t.indexOf(r) < 0 && Zd.call(e, r) && (n[r] = e[r]);
  return n;
};
function Nn(e, t, n = {}) {
  const r = n, { window: a = qa } = r, o = Jd(r, ["window"]);
  let l;
  const s = Ud(() => a && "ResizeObserver" in a), u = () => {
    l && (l.disconnect(), l = void 0);
  }, c = me(() => vn(e), (p) => {
    u(), s.value && a && p && (l = new ResizeObserver(t), l.observe(p, o));
  }, { immediate: !0, flush: "post" }), f = () => {
    u(), c();
  };
  return vl(f), {
    isSupported: s,
    stop: f
  };
}
var ls;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(ls || (ls = {}));
var Qd = Object.defineProperty, ss = Object.getOwnPropertySymbols, ef = Object.prototype.hasOwnProperty, tf = Object.prototype.propertyIsEnumerable, is = (e, t, n) => t in e ? Qd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, nf = (e, t) => {
  for (var n in t || (t = {}))
    ef.call(t, n) && is(e, n, t[n]);
  if (ss)
    for (var n of ss(t))
      tf.call(t, n) && is(e, n, t[n]);
  return e;
};
const rf = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
nf({
  linear: jd
}, rf);
const af = () => at && /firefox/i.test(window.navigator.userAgent);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const fr = () => {
}, of = Object.prototype.hasOwnProperty, qn = (e, t) => of.call(e, t), tt = Array.isArray, us = (e) => ou(e) === "[object Date]", dt = (e) => typeof e == "function", kt = (e) => typeof e == "string", Bt = (e) => e !== null && typeof e == "object", lf = (e) => Bt(e) && dt(e.then) && dt(e.catch), sf = Object.prototype.toString, ou = (e) => sf.call(e), fo = (e) => ou(e).slice(8, -1), lu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, uf = /-(\w)/g, cf = lu((e) => e.replace(uf, (t, n) => n ? n.toUpperCase() : "")), df = lu(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
);
var ff = typeof global == "object" && global && global.Object === Object && global;
const su = ff;
var pf = typeof self == "object" && self && self.Object === Object && self, vf = su || pf || Function("return this")();
const Qt = vf;
var hf = Qt.Symbol;
const jt = hf;
var iu = Object.prototype, mf = iu.hasOwnProperty, gf = iu.toString, xr = jt ? jt.toStringTag : void 0;
function bf(e) {
  var t = mf.call(e, xr), n = e[xr];
  try {
    e[xr] = void 0;
    var r = !0;
  } catch {
  }
  var a = gf.call(e);
  return r && (t ? e[xr] = n : delete e[xr]), a;
}
var yf = Object.prototype, wf = yf.toString;
function Cf(e) {
  return wf.call(e);
}
var Sf = "[object Null]", kf = "[object Undefined]", cs = jt ? jt.toStringTag : void 0;
function Qn(e) {
  return e == null ? e === void 0 ? kf : Sf : cs && cs in Object(e) ? bf(e) : Cf(e);
}
function rn(e) {
  return e != null && typeof e == "object";
}
var $f = "[object Symbol]";
function Ya(e) {
  return typeof e == "symbol" || rn(e) && Qn(e) == $f;
}
function uu(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var _f = Array.isArray;
const xt = _f;
var Ef = 1 / 0, ds = jt ? jt.prototype : void 0, fs = ds ? ds.toString : void 0;
function cu(e) {
  if (typeof e == "string")
    return e;
  if (xt(e))
    return uu(e, cu) + "";
  if (Ya(e))
    return fs ? fs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Ef ? "-0" : t;
}
var Tf = /\s/;
function Of(e) {
  for (var t = e.length; t-- && Tf.test(e.charAt(t)); )
    ;
  return t;
}
var Pf = /^\s+/;
function xf(e) {
  return e && e.slice(0, Of(e) + 1).replace(Pf, "");
}
function Rt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ps = 0 / 0, Mf = /^[-+]0x[0-9a-f]+$/i, Af = /^0b[01]+$/i, Nf = /^0o[0-7]+$/i, Rf = parseInt;
function vs(e) {
  if (typeof e == "number")
    return e;
  if (Ya(e))
    return ps;
  if (Rt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Rt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = xf(e);
  var n = Af.test(e);
  return n || Nf.test(e) ? Rf(e.slice(2), n ? 2 : 8) : Mf.test(e) ? ps : +e;
}
function hl(e) {
  return e;
}
var If = "[object AsyncFunction]", Df = "[object Function]", Lf = "[object GeneratorFunction]", Ff = "[object Proxy]";
function ml(e) {
  if (!Rt(e))
    return !1;
  var t = Qn(e);
  return t == Df || t == Lf || t == If || t == Ff;
}
var Bf = Qt["__core-js_shared__"];
const po = Bf;
var hs = function() {
  var e = /[^.]+$/.exec(po && po.keys && po.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zf(e) {
  return !!hs && hs in e;
}
var Vf = Function.prototype, Hf = Vf.toString;
function er(e) {
  if (e != null) {
    try {
      return Hf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Wf = /[\\^$.*+?()[\]{}|]/g, jf = /^\[object .+?Constructor\]$/, Kf = Function.prototype, qf = Object.prototype, Yf = Kf.toString, Uf = qf.hasOwnProperty, Gf = RegExp(
  "^" + Yf.call(Uf).replace(Wf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xf(e) {
  if (!Rt(e) || zf(e))
    return !1;
  var t = ml(e) ? Gf : jf;
  return t.test(er(e));
}
function Zf(e, t) {
  return e == null ? void 0 : e[t];
}
function tr(e, t) {
  var n = Zf(e, t);
  return Xf(n) ? n : void 0;
}
var Jf = tr(Qt, "WeakMap");
const Po = Jf;
var ms = Object.create, Qf = function() {
  function e() {
  }
  return function(t) {
    if (!Rt(t))
      return {};
    if (ms)
      return ms(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
const ep = Qf;
function tp(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function du(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var np = 800, rp = 16, ap = Date.now;
function op(e) {
  var t = 0, n = 0;
  return function() {
    var r = ap(), a = rp - (r - n);
    if (n = r, a > 0) {
      if (++t >= np)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function lp(e) {
  return function() {
    return e;
  };
}
var sp = function() {
  try {
    var e = tr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const Ba = sp;
var ip = Ba ? function(e, t) {
  return Ba(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lp(t),
    writable: !0
  });
} : hl;
const up = ip;
var cp = op(up);
const fu = cp;
function dp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
    ;
  return e;
}
var fp = 9007199254740991, pp = /^(?:0|[1-9]\d*)$/;
function Ua(e, t) {
  var n = typeof e;
  return t = t ?? fp, !!t && (n == "number" || n != "symbol" && pp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function gl(e, t, n) {
  t == "__proto__" && Ba ? Ba(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function Qr(e, t) {
  return e === t || e !== e && t !== t;
}
var vp = Object.prototype, hp = vp.hasOwnProperty;
function bl(e, t, n) {
  var r = e[t];
  (!(hp.call(e, t) && Qr(r, n)) || n === void 0 && !(t in e)) && gl(e, t, n);
}
function ea(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var o = -1, l = t.length; ++o < l; ) {
    var s = t[o], u = r ? r(n[s], e[s], s, n, e) : void 0;
    u === void 0 && (u = e[s]), a ? gl(n, s, u) : bl(n, s, u);
  }
  return n;
}
var gs = Math.max;
function pu(e, t, n) {
  return t = gs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, a = -1, o = gs(r.length - t, 0), l = Array(o); ++a < o; )
      l[a] = r[t + a];
    a = -1;
    for (var s = Array(t + 1); ++a < t; )
      s[a] = r[a];
    return s[t] = n(l), tp(e, this, s);
  };
}
function mp(e, t) {
  return fu(pu(e, t, hl), e + "");
}
var gp = 9007199254740991;
function yl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gp;
}
function _r(e) {
  return e != null && yl(e.length) && !ml(e);
}
function bp(e, t, n) {
  if (!Rt(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? _r(n) && Ua(t, n.length) : r == "string" && t in n) ? Qr(n[t], e) : !1;
}
function yp(e) {
  return mp(function(t, n) {
    var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, l = a > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (a--, o) : void 0, l && bp(n[0], n[1], l) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a; ) {
      var s = n[r];
      s && e(t, s, r, o);
    }
    return t;
  });
}
var wp = Object.prototype;
function wl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || wp;
  return e === n;
}
function Cp(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Sp = "[object Arguments]";
function bs(e) {
  return rn(e) && Qn(e) == Sp;
}
var vu = Object.prototype, kp = vu.hasOwnProperty, $p = vu.propertyIsEnumerable, _p = bs(function() {
  return arguments;
}()) ? bs : function(e) {
  return rn(e) && kp.call(e, "callee") && !$p.call(e, "callee");
};
const Vr = _p;
function Ep() {
  return !1;
}
var hu = typeof exports == "object" && exports && !exports.nodeType && exports, ys = hu && typeof module == "object" && module && !module.nodeType && module, Tp = ys && ys.exports === hu, ws = Tp ? Qt.Buffer : void 0, Op = ws ? ws.isBuffer : void 0, Pp = Op || Ep;
const Hr = Pp;
var xp = "[object Arguments]", Mp = "[object Array]", Ap = "[object Boolean]", Np = "[object Date]", Rp = "[object Error]", Ip = "[object Function]", Dp = "[object Map]", Lp = "[object Number]", Fp = "[object Object]", Bp = "[object RegExp]", zp = "[object Set]", Vp = "[object String]", Hp = "[object WeakMap]", Wp = "[object ArrayBuffer]", jp = "[object DataView]", Kp = "[object Float32Array]", qp = "[object Float64Array]", Yp = "[object Int8Array]", Up = "[object Int16Array]", Gp = "[object Int32Array]", Xp = "[object Uint8Array]", Zp = "[object Uint8ClampedArray]", Jp = "[object Uint16Array]", Qp = "[object Uint32Array]", et = {};
et[Kp] = et[qp] = et[Yp] = et[Up] = et[Gp] = et[Xp] = et[Zp] = et[Jp] = et[Qp] = !0;
et[xp] = et[Mp] = et[Wp] = et[Ap] = et[jp] = et[Np] = et[Rp] = et[Ip] = et[Dp] = et[Lp] = et[Fp] = et[Bp] = et[zp] = et[Vp] = et[Hp] = !1;
function ev(e) {
  return rn(e) && yl(e.length) && !!et[Qn(e)];
}
function Cl(e) {
  return function(t) {
    return e(t);
  };
}
var mu = typeof exports == "object" && exports && !exports.nodeType && exports, Rr = mu && typeof module == "object" && module && !module.nodeType && module, tv = Rr && Rr.exports === mu, vo = tv && su.process, nv = function() {
  try {
    var e = Rr && Rr.require && Rr.require("util").types;
    return e || vo && vo.binding && vo.binding("util");
  } catch {
  }
}();
const pr = nv;
var Cs = pr && pr.isTypedArray, rv = Cs ? Cl(Cs) : ev;
const Sl = rv;
var av = Object.prototype, ov = av.hasOwnProperty;
function gu(e, t) {
  var n = xt(e), r = !n && Vr(e), a = !n && !r && Hr(e), o = !n && !r && !a && Sl(e), l = n || r || a || o, s = l ? Cp(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || ov.call(e, c)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Ua(c, u))) && s.push(c);
  return s;
}
function bu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var lv = bu(Object.keys, Object);
const sv = lv;
var iv = Object.prototype, uv = iv.hasOwnProperty;
function cv(e) {
  if (!wl(e))
    return sv(e);
  var t = [];
  for (var n in Object(e))
    uv.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function ta(e) {
  return _r(e) ? gu(e) : cv(e);
}
function dv(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var fv = Object.prototype, pv = fv.hasOwnProperty;
function vv(e) {
  if (!Rt(e))
    return dv(e);
  var t = wl(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !pv.call(e, r)) || n.push(r);
  return n;
}
function na(e) {
  return _r(e) ? gu(e, !0) : vv(e);
}
var hv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, mv = /^\w*$/;
function kl(e, t) {
  if (xt(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ya(e) ? !0 : mv.test(e) || !hv.test(e) || t != null && e in Object(t);
}
var gv = tr(Object, "create");
const Wr = gv;
function bv() {
  this.__data__ = Wr ? Wr(null) : {}, this.size = 0;
}
function yv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wv = "__lodash_hash_undefined__", Cv = Object.prototype, Sv = Cv.hasOwnProperty;
function kv(e) {
  var t = this.__data__;
  if (Wr) {
    var n = t[e];
    return n === wv ? void 0 : n;
  }
  return Sv.call(t, e) ? t[e] : void 0;
}
var $v = Object.prototype, _v = $v.hasOwnProperty;
function Ev(e) {
  var t = this.__data__;
  return Wr ? t[e] !== void 0 : _v.call(t, e);
}
var Tv = "__lodash_hash_undefined__";
function Ov(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Wr && t === void 0 ? Tv : t, this;
}
function Yn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Yn.prototype.clear = bv;
Yn.prototype.delete = yv;
Yn.prototype.get = kv;
Yn.prototype.has = Ev;
Yn.prototype.set = Ov;
function Pv() {
  this.__data__ = [], this.size = 0;
}
function Ga(e, t) {
  for (var n = e.length; n--; )
    if (Qr(e[n][0], t))
      return n;
  return -1;
}
var xv = Array.prototype, Mv = xv.splice;
function Av(e) {
  var t = this.__data__, n = Ga(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Mv.call(t, n, 1), --this.size, !0;
}
function Nv(e) {
  var t = this.__data__, n = Ga(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Rv(e) {
  return Ga(this.__data__, e) > -1;
}
function Iv(e, t) {
  var n = this.__data__, r = Ga(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Cn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Cn.prototype.clear = Pv;
Cn.prototype.delete = Av;
Cn.prototype.get = Nv;
Cn.prototype.has = Rv;
Cn.prototype.set = Iv;
var Dv = tr(Qt, "Map");
const jr = Dv;
function Lv() {
  this.size = 0, this.__data__ = {
    hash: new Yn(),
    map: new (jr || Cn)(),
    string: new Yn()
  };
}
function Fv(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Xa(e, t) {
  var n = e.__data__;
  return Fv(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Bv(e) {
  var t = Xa(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function zv(e) {
  return Xa(this, e).get(e);
}
function Vv(e) {
  return Xa(this, e).has(e);
}
function Hv(e, t) {
  var n = Xa(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Sn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Sn.prototype.clear = Lv;
Sn.prototype.delete = Bv;
Sn.prototype.get = zv;
Sn.prototype.has = Vv;
Sn.prototype.set = Hv;
var Wv = "Expected a function";
function $l(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wv);
  var n = function() {
    var r = arguments, a = t ? t.apply(this, r) : r[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var l = e.apply(this, r);
    return n.cache = o.set(a, l) || o, l;
  };
  return n.cache = new ($l.Cache || Sn)(), n;
}
$l.Cache = Sn;
var jv = 500;
function Kv(e) {
  var t = $l(e, function(r) {
    return n.size === jv && n.clear(), r;
  }), n = t.cache;
  return t;
}
var qv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yv = /\\(\\)?/g, Uv = Kv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(qv, function(n, r, a, o) {
    t.push(a ? o.replace(Yv, "$1") : r || n);
  }), t;
});
const Gv = Uv;
function Xv(e) {
  return e == null ? "" : cu(e);
}
function Za(e, t) {
  return xt(e) ? e : kl(e, t) ? [e] : Gv(Xv(e));
}
var Zv = 1 / 0;
function ra(e) {
  if (typeof e == "string" || Ya(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Zv ? "-0" : t;
}
function _l(e, t) {
  t = Za(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[ra(t[n++])];
  return n && n == r ? e : void 0;
}
function _t(e, t, n) {
  var r = e == null ? void 0 : _l(e, t);
  return r === void 0 ? n : r;
}
function El(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; )
    e[a + n] = t[n];
  return e;
}
var Ss = jt ? jt.isConcatSpreadable : void 0;
function Jv(e) {
  return xt(e) || Vr(e) || !!(Ss && e && e[Ss]);
}
function Ja(e, t, n, r, a) {
  var o = -1, l = e.length;
  for (n || (n = Jv), a || (a = []); ++o < l; ) {
    var s = e[o];
    t > 0 && n(s) ? t > 1 ? Ja(s, t - 1, n, r, a) : El(a, s) : r || (a[a.length] = s);
  }
  return a;
}
function yu(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ja(e, 1) : [];
}
function Qv(e) {
  return fu(pu(e, void 0, yu), e + "");
}
var eh = bu(Object.getPrototypeOf, Object);
const Tl = eh;
var th = "[object Object]", nh = Function.prototype, rh = Object.prototype, wu = nh.toString, ah = rh.hasOwnProperty, oh = wu.call(Object);
function lh(e) {
  if (!rn(e) || Qn(e) != th)
    return !1;
  var t = Tl(e);
  if (t === null)
    return !0;
  var n = ah.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && wu.call(n) == oh;
}
function xo() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return xt(e) ? e : [e];
}
function sh() {
  this.__data__ = new Cn(), this.size = 0;
}
function ih(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function uh(e) {
  return this.__data__.get(e);
}
function ch(e) {
  return this.__data__.has(e);
}
var dh = 200;
function fh(e, t) {
  var n = this.__data__;
  if (n instanceof Cn) {
    var r = n.__data__;
    if (!jr || r.length < dh - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Sn(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Zt(e) {
  var t = this.__data__ = new Cn(e);
  this.size = t.size;
}
Zt.prototype.clear = sh;
Zt.prototype.delete = ih;
Zt.prototype.get = uh;
Zt.prototype.has = ch;
Zt.prototype.set = fh;
function ph(e, t) {
  return e && ea(t, ta(t), e);
}
function vh(e, t) {
  return e && ea(t, na(t), e);
}
var Cu = typeof exports == "object" && exports && !exports.nodeType && exports, ks = Cu && typeof module == "object" && module && !module.nodeType && module, hh = ks && ks.exports === Cu, $s = hh ? Qt.Buffer : void 0, _s = $s ? $s.allocUnsafe : void 0;
function Su(e, t) {
  if (t)
    return e.slice();
  var n = e.length, r = _s ? _s(n) : new e.constructor(n);
  return e.copy(r), r;
}
function mh(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, o = []; ++n < r; ) {
    var l = e[n];
    t(l, n, e) && (o[a++] = l);
  }
  return o;
}
function ku() {
  return [];
}
var gh = Object.prototype, bh = gh.propertyIsEnumerable, Es = Object.getOwnPropertySymbols, yh = Es ? function(e) {
  return e == null ? [] : (e = Object(e), mh(Es(e), function(t) {
    return bh.call(e, t);
  }));
} : ku;
const Ol = yh;
function wh(e, t) {
  return ea(e, Ol(e), t);
}
var Ch = Object.getOwnPropertySymbols, Sh = Ch ? function(e) {
  for (var t = []; e; )
    El(t, Ol(e)), e = Tl(e);
  return t;
} : ku;
const $u = Sh;
function kh(e, t) {
  return ea(e, $u(e), t);
}
function _u(e, t, n) {
  var r = t(e);
  return xt(e) ? r : El(r, n(e));
}
function Mo(e) {
  return _u(e, ta, Ol);
}
function $h(e) {
  return _u(e, na, $u);
}
var _h = tr(Qt, "DataView");
const Ao = _h;
var Eh = tr(Qt, "Promise");
const No = Eh;
var Th = tr(Qt, "Set");
const Ro = Th;
var Ts = "[object Map]", Oh = "[object Object]", Os = "[object Promise]", Ps = "[object Set]", xs = "[object WeakMap]", Ms = "[object DataView]", Ph = er(Ao), xh = er(jr), Mh = er(No), Ah = er(Ro), Nh = er(Po), Fn = Qn;
(Ao && Fn(new Ao(new ArrayBuffer(1))) != Ms || jr && Fn(new jr()) != Ts || No && Fn(No.resolve()) != Os || Ro && Fn(new Ro()) != Ps || Po && Fn(new Po()) != xs) && (Fn = function(e) {
  var t = Qn(e), n = t == Oh ? e.constructor : void 0, r = n ? er(n) : "";
  if (r)
    switch (r) {
      case Ph:
        return Ms;
      case xh:
        return Ts;
      case Mh:
        return Os;
      case Ah:
        return Ps;
      case Nh:
        return xs;
    }
  return t;
});
const Kr = Fn;
var Rh = Object.prototype, Ih = Rh.hasOwnProperty;
function Dh(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Ih.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Lh = Qt.Uint8Array;
const za = Lh;
function Pl(e) {
  var t = new e.constructor(e.byteLength);
  return new za(t).set(new za(e)), t;
}
function Fh(e, t) {
  var n = t ? Pl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var Bh = /\w*$/;
function zh(e) {
  var t = new e.constructor(e.source, Bh.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var As = jt ? jt.prototype : void 0, Ns = As ? As.valueOf : void 0;
function Vh(e) {
  return Ns ? Object(Ns.call(e)) : {};
}
function Eu(e, t) {
  var n = t ? Pl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Hh = "[object Boolean]", Wh = "[object Date]", jh = "[object Map]", Kh = "[object Number]", qh = "[object RegExp]", Yh = "[object Set]", Uh = "[object String]", Gh = "[object Symbol]", Xh = "[object ArrayBuffer]", Zh = "[object DataView]", Jh = "[object Float32Array]", Qh = "[object Float64Array]", em = "[object Int8Array]", tm = "[object Int16Array]", nm = "[object Int32Array]", rm = "[object Uint8Array]", am = "[object Uint8ClampedArray]", om = "[object Uint16Array]", lm = "[object Uint32Array]";
function sm(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case Xh:
      return Pl(e);
    case Hh:
    case Wh:
      return new r(+e);
    case Zh:
      return Fh(e, n);
    case Jh:
    case Qh:
    case em:
    case tm:
    case nm:
    case rm:
    case am:
    case om:
    case lm:
      return Eu(e, n);
    case jh:
      return new r();
    case Kh:
    case Uh:
      return new r(e);
    case qh:
      return zh(e);
    case Yh:
      return new r();
    case Gh:
      return Vh(e);
  }
}
function Tu(e) {
  return typeof e.constructor == "function" && !wl(e) ? ep(Tl(e)) : {};
}
var im = "[object Map]";
function um(e) {
  return rn(e) && Kr(e) == im;
}
var Rs = pr && pr.isMap, cm = Rs ? Cl(Rs) : um;
const dm = cm;
var fm = "[object Set]";
function pm(e) {
  return rn(e) && Kr(e) == fm;
}
var Is = pr && pr.isSet, vm = Is ? Cl(Is) : pm;
const hm = vm;
var mm = 1, gm = 2, bm = 4, Ou = "[object Arguments]", ym = "[object Array]", wm = "[object Boolean]", Cm = "[object Date]", Sm = "[object Error]", Pu = "[object Function]", km = "[object GeneratorFunction]", $m = "[object Map]", _m = "[object Number]", xu = "[object Object]", Em = "[object RegExp]", Tm = "[object Set]", Om = "[object String]", Pm = "[object Symbol]", xm = "[object WeakMap]", Mm = "[object ArrayBuffer]", Am = "[object DataView]", Nm = "[object Float32Array]", Rm = "[object Float64Array]", Im = "[object Int8Array]", Dm = "[object Int16Array]", Lm = "[object Int32Array]", Fm = "[object Uint8Array]", Bm = "[object Uint8ClampedArray]", zm = "[object Uint16Array]", Vm = "[object Uint32Array]", Qe = {};
Qe[Ou] = Qe[ym] = Qe[Mm] = Qe[Am] = Qe[wm] = Qe[Cm] = Qe[Nm] = Qe[Rm] = Qe[Im] = Qe[Dm] = Qe[Lm] = Qe[$m] = Qe[_m] = Qe[xu] = Qe[Em] = Qe[Tm] = Qe[Om] = Qe[Pm] = Qe[Fm] = Qe[Bm] = Qe[zm] = Qe[Vm] = !0;
Qe[Sm] = Qe[Pu] = Qe[xm] = !1;
function Ir(e, t, n, r, a, o) {
  var l, s = t & mm, u = t & gm, c = t & bm;
  if (n && (l = a ? n(e, r, a, o) : n(e)), l !== void 0)
    return l;
  if (!Rt(e))
    return e;
  var f = xt(e);
  if (f) {
    if (l = Dh(e), !s)
      return du(e, l);
  } else {
    var p = Kr(e), m = p == Pu || p == km;
    if (Hr(e))
      return Su(e, s);
    if (p == xu || p == Ou || m && !a) {
      if (l = u || m ? {} : Tu(e), !s)
        return u ? kh(e, vh(l, e)) : wh(e, ph(l, e));
    } else {
      if (!Qe[p])
        return a ? e : {};
      l = sm(e, p, s);
    }
  }
  o || (o = new Zt());
  var h = o.get(e);
  if (h)
    return h;
  o.set(e, l), hm(e) ? e.forEach(function(y) {
    l.add(Ir(y, t, n, y, e, o));
  }) : dm(e) && e.forEach(function(y, w) {
    l.set(w, Ir(y, t, n, w, e, o));
  });
  var v = c ? u ? $h : Mo : u ? na : ta, d = f ? void 0 : v(e);
  return dp(d || e, function(y, w) {
    d && (w = y, y = e[w]), bl(l, w, Ir(y, t, n, w, e, o));
  }), l;
}
var Hm = 4;
function Ds(e) {
  return Ir(e, Hm);
}
var Wm = 1, jm = 4;
function Mu(e) {
  return Ir(e, Wm | jm);
}
var Km = "__lodash_hash_undefined__";
function qm(e) {
  return this.__data__.set(e, Km), this;
}
function Ym(e) {
  return this.__data__.has(e);
}
function Va(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Sn(); ++t < n; )
    this.add(e[t]);
}
Va.prototype.add = Va.prototype.push = qm;
Va.prototype.has = Ym;
function Um(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Gm(e, t) {
  return e.has(t);
}
var Xm = 1, Zm = 2;
function Au(e, t, n, r, a, o) {
  var l = n & Xm, s = e.length, u = t.length;
  if (s != u && !(l && u > s))
    return !1;
  var c = o.get(e), f = o.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, m = !0, h = n & Zm ? new Va() : void 0;
  for (o.set(e, t), o.set(t, e); ++p < s; ) {
    var v = e[p], d = t[p];
    if (r)
      var y = l ? r(d, v, p, t, e, o) : r(v, d, p, e, t, o);
    if (y !== void 0) {
      if (y)
        continue;
      m = !1;
      break;
    }
    if (h) {
      if (!Um(t, function(w, C) {
        if (!Gm(h, C) && (v === w || a(v, w, n, r, o)))
          return h.push(C);
      })) {
        m = !1;
        break;
      }
    } else if (!(v === d || a(v, d, n, r, o))) {
      m = !1;
      break;
    }
  }
  return o.delete(e), o.delete(t), m;
}
function Jm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, a) {
    n[++t] = [a, r];
  }), n;
}
function Qm(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var eg = 1, tg = 2, ng = "[object Boolean]", rg = "[object Date]", ag = "[object Error]", og = "[object Map]", lg = "[object Number]", sg = "[object RegExp]", ig = "[object Set]", ug = "[object String]", cg = "[object Symbol]", dg = "[object ArrayBuffer]", fg = "[object DataView]", Ls = jt ? jt.prototype : void 0, ho = Ls ? Ls.valueOf : void 0;
function pg(e, t, n, r, a, o, l) {
  switch (n) {
    case fg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case dg:
      return !(e.byteLength != t.byteLength || !o(new za(e), new za(t)));
    case ng:
    case rg:
    case lg:
      return Qr(+e, +t);
    case ag:
      return e.name == t.name && e.message == t.message;
    case sg:
    case ug:
      return e == t + "";
    case og:
      var s = Jm;
    case ig:
      var u = r & eg;
      if (s || (s = Qm), e.size != t.size && !u)
        return !1;
      var c = l.get(e);
      if (c)
        return c == t;
      r |= tg, l.set(e, t);
      var f = Au(s(e), s(t), r, a, o, l);
      return l.delete(e), f;
    case cg:
      if (ho)
        return ho.call(e) == ho.call(t);
  }
  return !1;
}
var vg = 1, hg = Object.prototype, mg = hg.hasOwnProperty;
function gg(e, t, n, r, a, o) {
  var l = n & vg, s = Mo(e), u = s.length, c = Mo(t), f = c.length;
  if (u != f && !l)
    return !1;
  for (var p = u; p--; ) {
    var m = s[p];
    if (!(l ? m in t : mg.call(t, m)))
      return !1;
  }
  var h = o.get(e), v = o.get(t);
  if (h && v)
    return h == t && v == e;
  var d = !0;
  o.set(e, t), o.set(t, e);
  for (var y = l; ++p < u; ) {
    m = s[p];
    var w = e[m], C = t[m];
    if (r)
      var g = l ? r(C, w, m, t, e, o) : r(w, C, m, e, t, o);
    if (!(g === void 0 ? w === C || a(w, C, n, r, o) : g)) {
      d = !1;
      break;
    }
    y || (y = m == "constructor");
  }
  if (d && !y) {
    var b = e.constructor, k = t.constructor;
    b != k && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof k == "function" && k instanceof k) && (d = !1);
  }
  return o.delete(e), o.delete(t), d;
}
var bg = 1, Fs = "[object Arguments]", Bs = "[object Array]", da = "[object Object]", yg = Object.prototype, zs = yg.hasOwnProperty;
function wg(e, t, n, r, a, o) {
  var l = xt(e), s = xt(t), u = l ? Bs : Kr(e), c = s ? Bs : Kr(t);
  u = u == Fs ? da : u, c = c == Fs ? da : c;
  var f = u == da, p = c == da, m = u == c;
  if (m && Hr(e)) {
    if (!Hr(t))
      return !1;
    l = !0, f = !1;
  }
  if (m && !f)
    return o || (o = new Zt()), l || Sl(e) ? Au(e, t, n, r, a, o) : pg(e, t, u, n, r, a, o);
  if (!(n & bg)) {
    var h = f && zs.call(e, "__wrapped__"), v = p && zs.call(t, "__wrapped__");
    if (h || v) {
      var d = h ? e.value() : e, y = v ? t.value() : t;
      return o || (o = new Zt()), a(d, y, n, r, o);
    }
  }
  return m ? (o || (o = new Zt()), gg(e, t, n, r, a, o)) : !1;
}
function Qa(e, t, n, r, a) {
  return e === t ? !0 : e == null || t == null || !rn(e) && !rn(t) ? e !== e && t !== t : wg(e, t, n, r, Qa, a);
}
var Cg = 1, Sg = 2;
function kg(e, t, n, r) {
  var a = n.length, o = a, l = !r;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var s = n[a];
    if (l && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++a < o; ) {
    s = n[a];
    var u = s[0], c = e[u], f = s[1];
    if (l && s[2]) {
      if (c === void 0 && !(u in e))
        return !1;
    } else {
      var p = new Zt();
      if (r)
        var m = r(c, f, u, e, t, p);
      if (!(m === void 0 ? Qa(f, c, Cg | Sg, r, p) : m))
        return !1;
    }
  }
  return !0;
}
function Nu(e) {
  return e === e && !Rt(e);
}
function $g(e) {
  for (var t = ta(e), n = t.length; n--; ) {
    var r = t[n], a = e[r];
    t[n] = [r, a, Nu(a)];
  }
  return t;
}
function Ru(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function _g(e) {
  var t = $g(e);
  return t.length == 1 && t[0][2] ? Ru(t[0][0], t[0][1]) : function(n) {
    return n === e || kg(n, e, t);
  };
}
function Eg(e, t) {
  return e != null && t in Object(e);
}
function Tg(e, t, n) {
  t = Za(t, e);
  for (var r = -1, a = t.length, o = !1; ++r < a; ) {
    var l = ra(t[r]);
    if (!(o = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return o || ++r != a ? o : (a = e == null ? 0 : e.length, !!a && yl(a) && Ua(l, a) && (xt(e) || Vr(e)));
}
function Iu(e, t) {
  return e != null && Tg(e, t, Eg);
}
var Og = 1, Pg = 2;
function xg(e, t) {
  return kl(e) && Nu(t) ? Ru(ra(e), t) : function(n) {
    var r = _t(n, e);
    return r === void 0 && r === t ? Iu(n, e) : Qa(t, r, Og | Pg);
  };
}
function Mg(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Ag(e) {
  return function(t) {
    return _l(t, e);
  };
}
function Ng(e) {
  return kl(e) ? Mg(ra(e)) : Ag(e);
}
function Rg(e) {
  return typeof e == "function" ? e : e == null ? hl : typeof e == "object" ? xt(e) ? xg(e[0], e[1]) : _g(e) : Ng(e);
}
function Ig(e) {
  return function(t, n, r) {
    for (var a = -1, o = Object(t), l = r(t), s = l.length; s--; ) {
      var u = l[e ? s : ++a];
      if (n(o[u], u, o) === !1)
        break;
    }
    return t;
  };
}
var Dg = Ig();
const Du = Dg;
function Lg(e, t) {
  return e && Du(e, t, ta);
}
function Fg(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!_r(n))
      return e(n, r);
    for (var a = n.length, o = t ? a : -1, l = Object(n); (t ? o-- : ++o < a) && r(l[o], o, l) !== !1; )
      ;
    return n;
  };
}
var Bg = Fg(Lg);
const zg = Bg;
var Vg = function() {
  return Qt.Date.now();
};
const mo = Vg;
var Hg = "Expected a function", Wg = Math.max, jg = Math.min;
function Rn(e, t, n) {
  var r, a, o, l, s, u, c = 0, f = !1, p = !1, m = !0;
  if (typeof e != "function")
    throw new TypeError(Hg);
  t = vs(t) || 0, Rt(n) && (f = !!n.leading, p = "maxWait" in n, o = p ? Wg(vs(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m);
  function h(S) {
    var $ = r, T = a;
    return r = a = void 0, c = S, l = e.apply(T, $), l;
  }
  function v(S) {
    return c = S, s = setTimeout(w, t), f ? h(S) : l;
  }
  function d(S) {
    var $ = S - u, T = S - c, R = t - $;
    return p ? jg(R, o - T) : R;
  }
  function y(S) {
    var $ = S - u, T = S - c;
    return u === void 0 || $ >= t || $ < 0 || p && T >= o;
  }
  function w() {
    var S = mo();
    if (y(S))
      return C(S);
    s = setTimeout(w, d(S));
  }
  function C(S) {
    return s = void 0, m && r ? h(S) : (r = a = void 0, l);
  }
  function g() {
    s !== void 0 && clearTimeout(s), c = 0, r = u = a = s = void 0;
  }
  function b() {
    return s === void 0 ? l : C(mo());
  }
  function k() {
    var S = mo(), $ = y(S);
    if (r = arguments, a = this, u = S, $) {
      if (s === void 0)
        return v(u);
      if (p)
        return clearTimeout(s), s = setTimeout(w, t), h(u);
    }
    return s === void 0 && (s = setTimeout(w, t)), l;
  }
  return k.cancel = g, k.flush = b, k;
}
function Io(e, t, n) {
  (n !== void 0 && !Qr(e[t], n) || n === void 0 && !(t in e)) && gl(e, t, n);
}
function Kg(e) {
  return rn(e) && _r(e);
}
function Do(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function qg(e) {
  return ea(e, na(e));
}
function Yg(e, t, n, r, a, o, l) {
  var s = Do(e, n), u = Do(t, n), c = l.get(u);
  if (c) {
    Io(e, n, c);
    return;
  }
  var f = o ? o(s, u, n + "", e, t, l) : void 0, p = f === void 0;
  if (p) {
    var m = xt(u), h = !m && Hr(u), v = !m && !h && Sl(u);
    f = u, m || h || v ? xt(s) ? f = s : Kg(s) ? f = du(s) : h ? (p = !1, f = Su(u, !0)) : v ? (p = !1, f = Eu(u, !0)) : f = [] : lh(u) || Vr(u) ? (f = s, Vr(s) ? f = qg(s) : (!Rt(s) || ml(s)) && (f = Tu(u))) : p = !1;
  }
  p && (l.set(u, f), a(f, u, r, o, l), l.delete(u)), Io(e, n, f);
}
function Lu(e, t, n, r, a) {
  e !== t && Du(t, function(o, l) {
    if (a || (a = new Zt()), Rt(o))
      Yg(e, t, l, n, Lu, r, a);
    else {
      var s = r ? r(Do(e, l), o, l + "", e, t, a) : void 0;
      s === void 0 && (s = o), Io(e, l, s);
    }
  }, na);
}
function Ug(e, t) {
  var n = -1, r = _r(e) ? Array(e.length) : [];
  return zg(e, function(a, o, l) {
    r[++n] = t(a, o, l);
  }), r;
}
function Gg(e, t) {
  var n = xt(e) ? uu : Ug;
  return n(e, Rg(t));
}
function Xg(e, t) {
  return Ja(Gg(e, t), 1);
}
var Zg = 1 / 0;
function Jg(e) {
  var t = e == null ? 0 : e.length;
  return t ? Ja(e, Zg) : [];
}
function Ha(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var a = e[t];
    r[a[0]] = a[1];
  }
  return r;
}
function tn(e, t) {
  return Qa(e, t);
}
function eo(e) {
  return e == null;
}
function Qg(e) {
  return e === void 0;
}
var eb = yp(function(e, t, n) {
  Lu(e, t, n);
});
const Fu = eb;
function Bu(e, t, n, r) {
  if (!Rt(e))
    return e;
  t = Za(t, e);
  for (var a = -1, o = t.length, l = o - 1, s = e; s != null && ++a < o; ) {
    var u = ra(t[a]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (a != l) {
      var f = s[u];
      c = r ? r(f, u, s) : void 0, c === void 0 && (c = Rt(f) ? f : Ua(t[a + 1]) ? [] : {});
    }
    bl(s, u, c), s = s[u];
  }
  return e;
}
function tb(e, t, n) {
  for (var r = -1, a = t.length, o = {}; ++r < a; ) {
    var l = t[r], s = _l(e, l);
    n(s, l) && Bu(o, Za(l, e), s);
  }
  return o;
}
function nb(e, t) {
  return tb(e, t, function(n, r) {
    return Iu(e, r);
  });
}
var rb = Qv(function(e, t) {
  return e == null ? {} : nb(e, t);
});
const ab = rb;
function ob(e, t, n) {
  return e == null ? e : Bu(e, t, n);
}
const Un = (e) => e === void 0, Jt = (e) => typeof e == "boolean", it = (e) => typeof e == "number", qr = (e) => !e && e !== 0 || tt(e) && e.length === 0 || Bt(e) && !Object.keys(e).length, vr = (e) => typeof Element > "u" ? !1 : e instanceof Element, lb = (e) => kt(e) ? !Number.isNaN(Number(e)) : !1, sb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), Vs = (e) => df(e), _a = (e, t, n) => ({
  get value() {
    return _t(e, t, n);
  },
  set value(r) {
    ob(e, t, r);
  }
});
class zu extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function xl(e, t) {
  throw new zu(`[${e}] ${t}`);
}
function nt(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = kt(e) ? new zu(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const ib = "utils/dom/style", Vu = (e = "") => e.split(" ").filter((t) => !!t.trim()), ir = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Hu = (e, t) => {
  !e || !t.trim() || e.classList.add(...Vu(t));
}, Lo = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Vu(t));
}, ub = (e, t) => {
  var n;
  if (!at || !e || !t)
    return "";
  let r = cf(t);
  r === "float" && (r = "cssFloat");
  try {
    const a = e.style[r];
    if (a)
      return a;
    const o = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return o ? o[r] : "";
  } catch {
    return e.style[r];
  }
};
function Yr(e, t = "px") {
  if (!e)
    return "";
  if (it(e) || lb(e))
    return `${e}${t}`;
  if (kt(e))
    return e;
  nt(ib, "binding value must be a string or number");
}
function Wu(e, t) {
  if (!at)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const a = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), o = a + t.offsetHeight, l = e.scrollTop, s = l + e.clientHeight;
  a < l ? e.scrollTop = a : o > s && (e.scrollTop = o - e.clientHeight);
}
/*! Element Plus Icons Vue v2.1.0 */
var Et = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, a] of t)
    n[r] = a;
  return n;
}, cb = {
  name: "ArrowDown"
}, db = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, fb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
), pb = [
  fb
];
function vb(e, t, n, r, a, o) {
  return O(), K("svg", db, pb);
}
var to = /* @__PURE__ */ Et(cb, [["render", vb], ["__file", "arrow-down.vue"]]), hb = {
  name: "ArrowLeft"
}, mb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, gb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), bb = [
  gb
];
function yb(e, t, n, r, a, o) {
  return O(), K("svg", mb, bb);
}
var Wa = /* @__PURE__ */ Et(hb, [["render", yb], ["__file", "arrow-left.vue"]]), wb = {
  name: "ArrowRight"
}, Cb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Sb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
), kb = [
  Sb
];
function $b(e, t, n, r, a, o) {
  return O(), K("svg", Cb, kb);
}
var An = /* @__PURE__ */ Et(wb, [["render", $b], ["__file", "arrow-right.vue"]]), _b = {
  name: "ArrowUp"
}, Eb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Tb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
), Ob = [
  Tb
];
function Pb(e, t, n, r, a, o) {
  return O(), K("svg", Eb, Ob);
}
var ju = /* @__PURE__ */ Et(_b, [["render", Pb], ["__file", "arrow-up.vue"]]), xb = {
  name: "Calendar"
}, Mb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ab = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
), Nb = [
  Ab
];
function Rb(e, t, n, r, a, o) {
  return O(), K("svg", Mb, Nb);
}
var Ib = /* @__PURE__ */ Et(xb, [["render", Rb], ["__file", "calendar.vue"]]), Db = {
  name: "Check"
}, Lb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Fb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
  },
  null,
  -1
  /* HOISTED */
), Bb = [
  Fb
];
function zb(e, t, n, r, a, o) {
  return O(), K("svg", Lb, Bb);
}
var Ku = /* @__PURE__ */ Et(Db, [["render", zb], ["__file", "check.vue"]]), Vb = {
  name: "CircleCheck"
}, Hb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Wb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), jb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
), Kb = [
  Wb,
  jb
];
function qb(e, t, n, r, a, o) {
  return O(), K("svg", Hb, Kb);
}
var Yb = /* @__PURE__ */ Et(Vb, [["render", qb], ["__file", "circle-check.vue"]]), Ub = {
  name: "CircleClose"
}, Gb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Xb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
), Zb = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), Jb = [
  Xb,
  Zb
];
function Qb(e, t, n, r, a, o) {
  return O(), K("svg", Gb, Jb);
}
var aa = /* @__PURE__ */ Et(Ub, [["render", Qb], ["__file", "circle-close.vue"]]), ey = {
  name: "Clock"
}, ty = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ny = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
), ry = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
), ay = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
), oy = [
  ny,
  ry,
  ay
];
function ly(e, t, n, r, a, o) {
  return O(), K("svg", ty, oy);
}
var sy = /* @__PURE__ */ Et(ey, [["render", ly], ["__file", "clock.vue"]]), iy = {
  name: "Close"
}, uy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, cy = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
), dy = [
  cy
];
function fy(e, t, n, r, a, o) {
  return O(), K("svg", uy, dy);
}
var Hs = /* @__PURE__ */ Et(iy, [["render", fy], ["__file", "close.vue"]]), py = {
  name: "DArrowLeft"
}, vy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, hy = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
), my = [
  hy
];
function gy(e, t, n, r, a, o) {
  return O(), K("svg", vy, my);
}
var hr = /* @__PURE__ */ Et(py, [["render", gy], ["__file", "d-arrow-left.vue"]]), by = {
  name: "DArrowRight"
}, yy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, wy = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
), Cy = [
  wy
];
function Sy(e, t, n, r, a, o) {
  return O(), K("svg", yy, Cy);
}
var mr = /* @__PURE__ */ Et(by, [["render", Sy], ["__file", "d-arrow-right.vue"]]), ky = {
  name: "Hide"
}, $y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, _y = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
), Ey = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
), Ty = [
  _y,
  Ey
];
function Oy(e, t, n, r, a, o) {
  return O(), K("svg", $y, Ty);
}
var Py = /* @__PURE__ */ Et(ky, [["render", Oy], ["__file", "hide.vue"]]), xy = {
  name: "Loading"
}, My = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ay = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
), Ny = [
  Ay
];
function Ry(e, t, n, r, a, o) {
  return O(), K("svg", My, Ny);
}
var oa = /* @__PURE__ */ Et(xy, [["render", Ry], ["__file", "loading.vue"]]), Iy = {
  name: "MoreFilled"
}, Dy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Ly = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
), Fy = [
  Ly
];
function By(e, t, n, r, a, o) {
  return O(), K("svg", Dy, Fy);
}
var Ws = /* @__PURE__ */ Et(Iy, [["render", By], ["__file", "more-filled.vue"]]), zy = {
  name: "View"
}, Vy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, Hy = /* @__PURE__ */ Q(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
), Wy = [
  Hy
];
function jy(e, t, n, r, a, o) {
  return O(), K("svg", Vy, Wy);
}
var Ky = /* @__PURE__ */ Et(zy, [["render", jy], ["__file", "view.vue"]]);
const qu = "__epPropKey", be = (e) => e, qy = (e) => Bt(e) && !!e[qu], no = (e, t) => {
  if (!Bt(e) || qy(e))
    return e;
  const { values: n, required: r, default: a, type: o, validator: l } = e, u = {
    type: o,
    required: !!r,
    validator: n || l ? (c) => {
      let f = !1, p = [];
      if (n && (p = Array.from(n), qn(e, "default") && p.push(a), f || (f = p.includes(c))), l && (f || (f = l(c))), !f && p.length > 0) {
        const m = [...new Set(p)].map((h) => JSON.stringify(h)).join(", ");
        Nd(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [qu]: !0
  };
  return qn(e, "default") && (u.default = a), u;
}, Me = (e) => Ha(Object.entries(e).map(([t, n]) => [
  t,
  no(n, t)
])), an = be([
  String,
  Object,
  Function
]), Yy = {
  validating: oa,
  success: Yb,
  error: aa
}, Vt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, kn = (e) => (e.install = fr, e), De = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Uy = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
], ft = "update:modelValue", Gn = "change", nr = ["", "default", "small", "large"], Gy = {
  large: 40,
  default: 32,
  small: 24
}, Xy = (e) => Gy[e || "default"], Zy = (e) => ["", ...nr].includes(e), js = (e) => [...new Set(e)], mn = (e) => !e && e !== 0 ? [] : Array.isArray(e) ? e : [e], Ml = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e), Jy = () => Math.floor(Math.random() * 1e4), Al = (e) => e, Qy = ["class", "style"], e0 = /^on[A-Z]/, t0 = (e = {}) => {
  const { excludeListeners: t = !1, excludeKeys: n } = e, r = E(() => ((n == null ? void 0 : n.value) || []).concat(Qy)), a = Ke();
  return a ? E(() => {
    var o;
    return Ha(Object.entries((o = a.proxy) == null ? void 0 : o.$attrs).filter(([l]) => !r.value.includes(l) && !(t && e0.test(l))));
  }) : (nt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), E(() => ({})));
}, Yu = ({ from: e, replacement: t, scope: n, version: r, ref: a, type: o = "API" }, l) => {
  me(() => i(l), (s) => {
    s && nt(n, `[${o}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: !0
  });
}, n0 = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
});
var r0 = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};
const a0 = (e) => (t, n) => o0(t, n, i(e)), o0 = (e, t, n) => _t(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var o;
  return `${(o = t == null ? void 0 : t[a]) != null ? o : `{${a}}`}`;
}), l0 = (e) => {
  const t = E(() => i(e).name), n = bn(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: a0(e)
  };
}, s0 = Symbol("localeContextKey"), ot = (e) => {
  const t = e || Oe(s0, x());
  return l0(E(() => t.value || r0));
}, Ks = "el", i0 = "is-", Ln = (e, t, n, r, a) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), a && (o += `--${a}`), o;
}, u0 = Symbol("namespaceContextKey"), Nl = (e) => {
  const t = e || Oe(u0, x(Ks));
  return E(() => i(t) || Ks);
}, we = (e, t) => {
  const n = Nl(t);
  return {
    namespace: n,
    b: (d = "") => Ln(n.value, e, d, "", ""),
    e: (d) => d ? Ln(n.value, e, "", d, "") : "",
    m: (d) => d ? Ln(n.value, e, "", "", d) : "",
    be: (d, y) => d && y ? Ln(n.value, e, d, y, "") : "",
    em: (d, y) => d && y ? Ln(n.value, e, "", d, y) : "",
    bm: (d, y) => d && y ? Ln(n.value, e, d, "", y) : "",
    bem: (d, y, w) => d && y && w ? Ln(n.value, e, d, y, w) : "",
    is: (d, ...y) => {
      const w = y.length >= 1 ? y[0] : !0;
      return d && w ? `${i0}${d}` : "";
    },
    cssVar: (d) => {
      const y = {};
      for (const w in d)
        d[w] && (y[`--${n.value}-${w}`] = d[w]);
      return y;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const y = {};
      for (const w in d)
        d[w] && (y[`--${n.value}-${e}-${w}`] = d[w]);
      return y;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
}, c0 = no({
  type: be(Boolean),
  default: null
}), d0 = no({
  type: be(Function)
}), Uu = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], a = {
    [e]: c0,
    [n]: d0
  };
  return {
    useModelToggle: ({
      indicator: l,
      toggleReason: s,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: f,
      onHide: p
    }) => {
      const m = Ke(), { emit: h } = m, v = m.props, d = E(() => dt(v[n])), y = E(() => v[e] === null), w = ($) => {
        l.value !== !0 && (l.value = !0, s && (s.value = $), dt(f) && f($));
      }, C = ($) => {
        l.value !== !1 && (l.value = !1, s && (s.value = $), dt(p) && p($));
      }, g = ($) => {
        if (v.disabled === !0 || dt(c) && !c())
          return;
        const T = d.value && at;
        T && h(t, !0), (y.value || !T) && w($);
      }, b = ($) => {
        if (v.disabled === !0 || !at)
          return;
        const T = d.value && at;
        T && h(t, !1), (y.value || !T) && C($);
      }, k = ($) => {
        Jt($) && (v.disabled && $ ? d.value && h(t, !1) : l.value !== $ && ($ ? w() : C()));
      }, S = () => {
        l.value ? b() : g();
      };
      return me(() => v[e], k), u && m.appContext.config.globalProperties.$route !== void 0 && me(() => ({
        ...m.proxy.$route
      }), () => {
        u.value && l.value && b();
      }), Xe(() => {
        k(v[e]);
      }), {
        hide: b,
        show: g,
        toggle: S,
        hasUpdateHandler: d
      };
    },
    useModelToggleProps: a,
    useModelToggleEmits: r
  };
};
Uu("modelValue");
const Gu = (e) => {
  const t = Ke();
  return E(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var At = "top", Kt = "bottom", qt = "right", Nt = "left", Rl = "auto", la = [At, Kt, qt, Nt], gr = "start", Ur = "end", f0 = "clippingParents", Xu = "viewport", Mr = "popper", p0 = "reference", qs = la.reduce(function(e, t) {
  return e.concat([t + "-" + gr, t + "-" + Ur]);
}, []), ro = [].concat(la, [Rl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + gr, t + "-" + Ur]);
}, []), v0 = "beforeRead", h0 = "read", m0 = "afterRead", g0 = "beforeMain", b0 = "main", y0 = "afterMain", w0 = "beforeWrite", C0 = "write", S0 = "afterWrite", k0 = [v0, h0, m0, g0, b0, y0, w0, C0, S0];
function on(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function en(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function br(e) {
  var t = en(e).Element;
  return e instanceof t || e instanceof Element;
}
function Wt(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Il(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function $0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, o = t.elements[n];
    !Wt(o) || !on(o) || (Object.assign(o.style, r), Object.keys(a).forEach(function(l) {
      var s = a[l];
      s === !1 ? o.removeAttribute(l) : o.setAttribute(l, s === !0 ? "" : s);
    }));
  });
}
function _0(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var a = t.elements[r], o = t.attributes[r] || {}, l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), s = l.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !Wt(a) || !on(a) || (Object.assign(a.style, s), Object.keys(o).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var Zu = { name: "applyStyles", enabled: !0, phase: "write", fn: $0, effect: _0, requires: ["computeStyles"] };
function nn(e) {
  return e.split("-")[0];
}
var Kn = Math.max, ja = Math.min, yr = Math.round;
function wr(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, a = 1;
  if (Wt(e) && t) {
    var o = e.offsetHeight, l = e.offsetWidth;
    l > 0 && (r = yr(n.width) / l || 1), o > 0 && (a = yr(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / a, top: n.top / a, right: n.right / r, bottom: n.bottom / a, left: n.left / r, x: n.left / r, y: n.top / a };
}
function Dl(e) {
  var t = wr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Ju(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Il(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function yn(e) {
  return en(e).getComputedStyle(e);
}
function E0(e) {
  return ["table", "td", "th"].indexOf(on(e)) >= 0;
}
function In(e) {
  return ((br(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ao(e) {
  return on(e) === "html" ? e : e.assignedSlot || e.parentNode || (Il(e) ? e.host : null) || In(e);
}
function Ys(e) {
  return !Wt(e) || yn(e).position === "fixed" ? null : e.offsetParent;
}
function T0(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Wt(e)) {
    var r = yn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = ao(e);
  for (Il(a) && (a = a.host); Wt(a) && ["html", "body"].indexOf(on(a)) < 0; ) {
    var o = yn(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function sa(e) {
  for (var t = en(e), n = Ys(e); n && E0(n) && yn(n).position === "static"; )
    n = Ys(n);
  return n && (on(n) === "html" || on(n) === "body" && yn(n).position === "static") ? t : n || T0(e) || t;
}
function Ll(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Dr(e, t, n) {
  return Kn(e, ja(t, n));
}
function O0(e, t, n) {
  var r = Dr(e, t, n);
  return r > n ? n : r;
}
function Qu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ec(e) {
  return Object.assign({}, Qu(), e);
}
function tc(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var P0 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, ec(typeof e != "number" ? e : tc(e, la));
};
function x0(e) {
  var t, n = e.state, r = e.name, a = e.options, o = n.elements.arrow, l = n.modifiersData.popperOffsets, s = nn(n.placement), u = Ll(s), c = [Nt, qt].indexOf(s) >= 0, f = c ? "height" : "width";
  if (!(!o || !l)) {
    var p = P0(a.padding, n), m = Dl(o), h = u === "y" ? At : Nt, v = u === "y" ? Kt : qt, d = n.rects.reference[f] + n.rects.reference[u] - l[u] - n.rects.popper[f], y = l[u] - n.rects.reference[u], w = sa(o), C = w ? u === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, g = d / 2 - y / 2, b = p[h], k = C - m[f] - p[v], S = C / 2 - m[f] / 2 + g, $ = Dr(b, S, k), T = u;
    n.modifiersData[r] = (t = {}, t[T] = $, t.centerOffset = $ - S, t);
  }
}
function M0(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || !Ju(t.elements.popper, a) || (t.elements.arrow = a));
}
var A0 = { name: "arrow", enabled: !0, phase: "main", fn: x0, effect: M0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Cr(e) {
  return e.split("-")[1];
}
var N0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function R0(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return { x: yr(t * a) / a || 0, y: yr(n * a) / a || 0 };
}
function Us(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, o = e.variation, l = e.offsets, s = e.position, u = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = l.x, h = m === void 0 ? 0 : m, v = l.y, d = v === void 0 ? 0 : v, y = typeof f == "function" ? f({ x: h, y: d }) : { x: h, y: d };
  h = y.x, d = y.y;
  var w = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), g = Nt, b = At, k = window;
  if (c) {
    var S = sa(n), $ = "clientHeight", T = "clientWidth";
    if (S === en(n) && (S = In(n), yn(S).position !== "static" && s === "absolute" && ($ = "scrollHeight", T = "scrollWidth")), S = S, a === At || (a === Nt || a === qt) && o === Ur) {
      b = Kt;
      var R = p && S === k && k.visualViewport ? k.visualViewport.height : S[$];
      d -= R - r.height, d *= u ? 1 : -1;
    }
    if (a === Nt || (a === At || a === Kt) && o === Ur) {
      g = qt;
      var z = p && S === k && k.visualViewport ? k.visualViewport.width : S[T];
      h -= z - r.width, h *= u ? 1 : -1;
    }
  }
  var V = Object.assign({ position: s }, c && N0), F = f === !0 ? R0({ x: h, y: d }) : { x: h, y: d };
  if (h = F.x, d = F.y, u) {
    var N;
    return Object.assign({}, V, (N = {}, N[b] = C ? "0" : "", N[g] = w ? "0" : "", N.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + d + "px)" : "translate3d(" + h + "px, " + d + "px, 0)", N));
  }
  return Object.assign({}, V, (t = {}, t[b] = C ? d + "px" : "", t[g] = w ? h + "px" : "", t.transform = "", t));
}
function I0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? !0 : r, o = n.adaptive, l = o === void 0 ? !0 : o, s = n.roundOffsets, u = s === void 0 ? !0 : s, c = { placement: nn(t.placement), variation: Cr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Us(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: l, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Us(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var nc = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: I0, data: {} }, fa = { passive: !0 };
function D0(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, o = a === void 0 ? !0 : a, l = r.resize, s = l === void 0 ? !0 : l, u = en(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, fa);
  }), s && u.addEventListener("resize", n.update, fa), function() {
    o && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, fa);
    }), s && u.removeEventListener("resize", n.update, fa);
  };
}
var rc = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: D0, data: {} }, L0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ea(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return L0[t];
  });
}
var F0 = { start: "end", end: "start" };
function Gs(e) {
  return e.replace(/start|end/g, function(t) {
    return F0[t];
  });
}
function Fl(e) {
  var t = en(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Bl(e) {
  return wr(In(e)).left + Fl(e).scrollLeft;
}
function B0(e) {
  var t = en(e), n = In(e), r = t.visualViewport, a = n.clientWidth, o = n.clientHeight, l = 0, s = 0;
  return r && (a = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = r.offsetLeft, s = r.offsetTop)), { width: a, height: o, x: l + Bl(e), y: s };
}
function z0(e) {
  var t, n = In(e), r = Fl(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Kn(n.scrollWidth, n.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), l = Kn(n.scrollHeight, n.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), s = -r.scrollLeft + Bl(e), u = -r.scrollTop;
  return yn(a || n).direction === "rtl" && (s += Kn(n.clientWidth, a ? a.clientWidth : 0) - o), { width: o, height: l, x: s, y: u };
}
function zl(e) {
  var t = yn(e), n = t.overflow, r = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + a + r);
}
function ac(e) {
  return ["html", "body", "#document"].indexOf(on(e)) >= 0 ? e.ownerDocument.body : Wt(e) && zl(e) ? e : ac(ao(e));
}
function Lr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ac(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = en(r), l = a ? [o].concat(o.visualViewport || [], zl(r) ? r : []) : r, s = t.concat(l);
  return a ? s : s.concat(Lr(ao(l)));
}
function Fo(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function V0(e) {
  var t = wr(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Xs(e, t) {
  return t === Xu ? Fo(B0(e)) : br(t) ? V0(t) : Fo(z0(In(e)));
}
function H0(e) {
  var t = Lr(ao(e)), n = ["absolute", "fixed"].indexOf(yn(e).position) >= 0, r = n && Wt(e) ? sa(e) : e;
  return br(r) ? t.filter(function(a) {
    return br(a) && Ju(a, r) && on(a) !== "body";
  }) : [];
}
function W0(e, t, n) {
  var r = t === "clippingParents" ? H0(e) : [].concat(t), a = [].concat(r, [n]), o = a[0], l = a.reduce(function(s, u) {
    var c = Xs(e, u);
    return s.top = Kn(c.top, s.top), s.right = ja(c.right, s.right), s.bottom = ja(c.bottom, s.bottom), s.left = Kn(c.left, s.left), s;
  }, Xs(e, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function oc(e) {
  var t = e.reference, n = e.element, r = e.placement, a = r ? nn(r) : null, o = r ? Cr(r) : null, l = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, u;
  switch (a) {
    case At:
      u = { x: l, y: t.y - n.height };
      break;
    case Kt:
      u = { x: l, y: t.y + t.height };
      break;
    case qt:
      u = { x: t.x + t.width, y: s };
      break;
    case Nt:
      u = { x: t.x - n.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Ll(a) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (o) {
      case gr:
        u[c] = u[c] - (t[f] / 2 - n[f] / 2);
        break;
      case Ur:
        u[c] = u[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function Gr(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, o = n.boundary, l = o === void 0 ? f0 : o, s = n.rootBoundary, u = s === void 0 ? Xu : s, c = n.elementContext, f = c === void 0 ? Mr : c, p = n.altBoundary, m = p === void 0 ? !1 : p, h = n.padding, v = h === void 0 ? 0 : h, d = ec(typeof v != "number" ? v : tc(v, la)), y = f === Mr ? p0 : Mr, w = e.rects.popper, C = e.elements[m ? y : f], g = W0(br(C) ? C : C.contextElement || In(e.elements.popper), l, u), b = wr(e.elements.reference), k = oc({ reference: b, element: w, strategy: "absolute", placement: a }), S = Fo(Object.assign({}, w, k)), $ = f === Mr ? S : b, T = { top: g.top - $.top + d.top, bottom: $.bottom - g.bottom + d.bottom, left: g.left - $.left + d.left, right: $.right - g.right + d.right }, R = e.modifiersData.offset;
  if (f === Mr && R) {
    var z = R[a];
    Object.keys(T).forEach(function(V) {
      var F = [qt, Kt].indexOf(V) >= 0 ? 1 : -1, N = [At, Kt].indexOf(V) >= 0 ? "y" : "x";
      T[V] += z[N] * F;
    });
  }
  return T;
}
function j0(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, a = n.boundary, o = n.rootBoundary, l = n.padding, s = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? ro : u, f = Cr(r), p = f ? s ? qs : qs.filter(function(v) {
    return Cr(v) === f;
  }) : la, m = p.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  m.length === 0 && (m = p);
  var h = m.reduce(function(v, d) {
    return v[d] = Gr(e, { placement: d, boundary: a, rootBoundary: o, padding: l })[nn(d)], v;
  }, {});
  return Object.keys(h).sort(function(v, d) {
    return h[v] - h[d];
  });
}
function K0(e) {
  if (nn(e) === Rl)
    return [];
  var t = Ea(e);
  return [Gs(e), t, Gs(t)];
}
function q0(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var a = n.mainAxis, o = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !0 : l, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, v = h === void 0 ? !0 : h, d = n.allowedAutoPlacements, y = t.options.placement, w = nn(y), C = w === y, g = u || (C || !v ? [Ea(y)] : K0(y)), b = [y].concat(g).reduce(function(ne, he) {
      return ne.concat(nn(he) === Rl ? j0(t, { placement: he, boundary: f, rootBoundary: p, padding: c, flipVariations: v, allowedAutoPlacements: d }) : he);
    }, []), k = t.rects.reference, S = t.rects.popper, $ = /* @__PURE__ */ new Map(), T = !0, R = b[0], z = 0; z < b.length; z++) {
      var V = b[z], F = nn(V), N = Cr(V) === gr, B = [At, Kt].indexOf(F) >= 0, W = B ? "width" : "height", q = Gr(t, { placement: V, boundary: f, rootBoundary: p, altBoundary: m, padding: c }), M = B ? N ? qt : Nt : N ? Kt : At;
      k[W] > S[W] && (M = Ea(M));
      var H = Ea(M), _ = [];
      if (o && _.push(q[F] <= 0), s && _.push(q[M] <= 0, q[H] <= 0), _.every(function(ne) {
        return ne;
      })) {
        R = V, T = !1;
        break;
      }
      $.set(V, _);
    }
    if (T)
      for (var L = v ? 3 : 1, U = function(ne) {
        var he = b.find(function(ge) {
          var se = $.get(ge);
          if (se)
            return se.slice(0, ne).every(function(le) {
              return le;
            });
        });
        if (he)
          return R = he, "break";
      }, I = L; I > 0; I--) {
        var G = U(I);
        if (G === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
var Y0 = { name: "flip", enabled: !0, phase: "main", fn: q0, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Zs(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Js(e) {
  return [At, qt, Kt, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function U0(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, l = Gr(t, { elementContext: "reference" }), s = Gr(t, { altBoundary: !0 }), u = Zs(l, r), c = Zs(s, a, o), f = Js(u), p = Js(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var G0 = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: U0 };
function X0(e, t, n) {
  var r = nn(e), a = [Nt, At].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, l = o[0], s = o[1];
  return l = l || 0, s = (s || 0) * a, [Nt, qt].indexOf(r) >= 0 ? { x: s, y: l } : { x: l, y: s };
}
function Z0(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, o = a === void 0 ? [0, 0] : a, l = ro.reduce(function(f, p) {
    return f[p] = X0(p, t.rects, o), f;
  }, {}), s = l[t.placement], u = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = l;
}
var J0 = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Z0 };
function Q0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = oc({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var lc = { name: "popperOffsets", enabled: !0, phase: "read", fn: Q0, data: {} };
function e1(e) {
  return e === "x" ? "y" : "x";
}
function t1(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, o = a === void 0 ? !0 : a, l = n.altAxis, s = l === void 0 ? !1 : l, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, h = m === void 0 ? !0 : m, v = n.tetherOffset, d = v === void 0 ? 0 : v, y = Gr(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: f }), w = nn(t.placement), C = Cr(t.placement), g = !C, b = Ll(w), k = e1(b), S = t.modifiersData.popperOffsets, $ = t.rects.reference, T = t.rects.popper, R = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d, z = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var N, B = b === "y" ? At : Nt, W = b === "y" ? Kt : qt, q = b === "y" ? "height" : "width", M = S[b], H = M + y[B], _ = M - y[W], L = h ? -T[q] / 2 : 0, U = C === gr ? $[q] : T[q], I = C === gr ? -T[q] : -$[q], G = t.elements.arrow, ne = h && G ? Dl(G) : { width: 0, height: 0 }, he = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Qu(), ge = he[B], se = he[W], le = Dr(0, $[q], ne[q]), ue = g ? $[q] / 2 - L - le - ge - z.mainAxis : U - le - ge - z.mainAxis, ve = g ? -$[q] / 2 + L + le + se + z.mainAxis : I + le + se + z.mainAxis, _e = t.elements.arrow && sa(t.elements.arrow), Pe = _e ? b === "y" ? _e.clientTop || 0 : _e.clientLeft || 0 : 0, He = (N = V == null ? void 0 : V[b]) != null ? N : 0, We = M + ue - He - Pe, Ue = M + ve - He, je = Dr(h ? ja(H, We) : H, M, h ? Kn(_, Ue) : _);
      S[b] = je, F[b] = je - M;
    }
    if (s) {
      var rt, ht = b === "x" ? At : Nt, lt = b === "x" ? Kt : qt, Se = S[k], ut = k === "y" ? "height" : "width", ct = Se + y[ht], st = Se - y[lt], Ze = [At, Nt].indexOf(w) !== -1, ae = (rt = V == null ? void 0 : V[k]) != null ? rt : 0, ke = Ze ? ct : Se - $[ut] - T[ut] - ae + z.altAxis, Fe = Ze ? Se + $[ut] + T[ut] - ae - z.altAxis : st, Je = h && Ze ? O0(ke, Se, Fe) : Dr(h ? ke : ct, Se, h ? Fe : st);
      S[k] = Je, F[k] = Je - Se;
    }
    t.modifiersData[r] = F;
  }
}
var n1 = { name: "preventOverflow", enabled: !0, phase: "main", fn: t1, requiresIfExists: ["offset"] };
function r1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function a1(e) {
  return e === en(e) || !Wt(e) ? Fl(e) : r1(e);
}
function o1(e) {
  var t = e.getBoundingClientRect(), n = yr(t.width) / e.offsetWidth || 1, r = yr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function l1(e, t, n) {
  n === void 0 && (n = !1);
  var r = Wt(t), a = Wt(t) && o1(t), o = In(t), l = wr(e, a), s = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((on(t) !== "body" || zl(o)) && (s = a1(t)), Wt(t) ? (u = wr(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : o && (u.x = Bl(o))), { x: l.left + s.scrollLeft - u.x, y: l.top + s.scrollTop - u.y, width: l.width, height: l.height };
}
function s1(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    n.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(s) {
      if (!n.has(s)) {
        var u = t.get(s);
        u && a(u);
      }
    }), r.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || a(o);
  }), r;
}
function i1(e) {
  var t = s1(e);
  return k0.reduce(function(n, r) {
    return n.concat(t.filter(function(a) {
      return a.phase === r;
    }));
  }, []);
}
function u1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function c1(e) {
  var t = e.reduce(function(n, r) {
    var a = n[r.name];
    return n[r.name] = a ? Object.assign({}, a, r, { options: Object.assign({}, a.options, r.options), data: Object.assign({}, a.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Qs = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ei() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Vl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, a = t.defaultOptions, o = a === void 0 ? Qs : a;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Qs, o), modifiersData: {}, elements: { reference: l, popper: s }, attributes: {}, styles: {} }, f = [], p = !1, m = { state: c, setOptions: function(d) {
      var y = typeof d == "function" ? d(c.options) : d;
      v(), c.options = Object.assign({}, o, c.options, y), c.scrollParents = { reference: br(l) ? Lr(l) : l.contextElement ? Lr(l.contextElement) : [], popper: Lr(s) };
      var w = i1(c1([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = w.filter(function(C) {
        return C.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var d = c.elements, y = d.reference, w = d.popper;
        if (ei(y, w)) {
          c.rects = { reference: l1(y, sa(w), c.options.strategy === "fixed"), popper: Dl(w) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var C = 0; C < c.orderedModifiers.length; C++) {
            if (c.reset === !0) {
              c.reset = !1, C = -1;
              continue;
            }
            var g = c.orderedModifiers[C], b = g.fn, k = g.options, S = k === void 0 ? {} : k, $ = g.name;
            typeof b == "function" && (c = b({ state: c, options: S, name: $, instance: m }) || c);
          }
        }
      }
    }, update: u1(function() {
      return new Promise(function(d) {
        m.forceUpdate(), d(c);
      });
    }), destroy: function() {
      v(), p = !0;
    } };
    if (!ei(l, s))
      return m;
    m.setOptions(u).then(function(d) {
      !p && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function h() {
      c.orderedModifiers.forEach(function(d) {
        var y = d.name, w = d.options, C = w === void 0 ? {} : w, g = d.effect;
        if (typeof g == "function") {
          var b = g({ state: c, name: y, instance: m, options: C }), k = function() {
          };
          f.push(b || k);
        }
      });
    }
    function v() {
      f.forEach(function(d) {
        return d();
      }), f = [];
    }
    return m;
  };
}
Vl();
var d1 = [rc, lc, nc, Zu];
Vl({ defaultModifiers: d1 });
var f1 = [rc, lc, nc, Zu, J0, Y0, n1, A0, G0], sc = Vl({ defaultModifiers: f1 });
const p1 = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = v1(u);
      Object.assign(l.value, c);
    },
    requires: ["computeStyles"]
  }, a = E(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: p } = i(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), o = Wn(), l = x({
    styles: {
      popper: {
        position: i(a).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), s = () => {
    o.value && (o.value.destroy(), o.value = void 0);
  };
  return me(a, (u) => {
    const c = i(o);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), me([e, t], ([u, c]) => {
    s(), !(!u || !c) && (o.value = sc(u, c, i(a)));
  }), zt(() => {
    s();
  }), {
    state: E(() => {
      var u;
      return { ...((u = i(o)) == null ? void 0 : u.state) || {} };
    }),
    styles: E(() => i(l).styles),
    attributes: E(() => i(l).attributes),
    update: () => {
      var u;
      return (u = i(o)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = i(o)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: E(() => i(o))
  };
};
function v1(e) {
  const t = Object.keys(e.elements), n = Ha(t.map((a) => [a, e.styles[a] || {}])), r = Ha(t.map((a) => [a, e.attributes[a]]));
  return {
    styles: n,
    attributes: r
  };
}
function ti() {
  let e;
  const t = (r, a) => {
    n(), e = window.setTimeout(r, a);
  }, n = () => window.clearTimeout(e);
  return vl(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Bo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, h1 = Symbol("elIdInjection"), ic = () => Ke() ? Oe(h1, Bo) : Bo, oo = (e) => {
  const t = ic();
  !at && t === Bo && nt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Nl();
  return E(() => i(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let or = [];
const ni = (e) => {
  const t = e;
  t.key === De.esc && or.forEach((n) => n(t));
}, m1 = (e) => {
  Xe(() => {
    or.length === 0 && document.addEventListener("keydown", ni), at && or.push(e);
  }), zt(() => {
    or = or.filter((t) => t !== e), or.length === 0 && at && document.removeEventListener("keydown", ni);
  });
};
let ri;
const uc = () => {
  const e = Nl(), t = ic(), n = E(() => `${e.value}-popper-container-${t.prefix}`), r = E(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, g1 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, b1 = () => {
  const { id: e, selector: t } = uc();
  return cl(() => {
    at && (process.env.NODE_ENV === "test" || !ri && !document.body.querySelector(t.value)) && (ri = g1(e.value));
  }), {
    id: e,
    selector: t
  };
}, y1 = Me({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  }
}), cc = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: a
}) => {
  const { registerTimeout: o } = ti(), {
    registerTimeout: l,
    cancelTimeout: s
  } = ti();
  return {
    onOpen: (f) => {
      o(() => {
        r(f);
        const p = i(n);
        it(p) && p > 0 && l(() => {
          a(f);
        }, p);
      }, i(e));
    },
    onClose: (f) => {
      s(), o(() => {
        a(f);
      }, i(t));
    }
  };
}, dc = Symbol("elForwardRef"), w1 = (e) => {
  vt(dc, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, C1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), ai = x(0), S1 = 2e3, k1 = Symbol("zIndexContextKey"), fc = (e) => {
  const t = e || Oe(k1, void 0), n = E(() => {
    const o = i(t);
    return it(o) ? o : S1;
  }), r = E(() => n.value + ai.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (ai.value++, r.value)
  };
};
function $1(e) {
  const t = x();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: a, selectionEnd: o, value: l } = e.value;
    if (a == null || o == null)
      return;
    const s = l.slice(0, Math.max(0, a)), u = l.slice(Math.max(0, o));
    t.value = {
      selectionStart: a,
      selectionEnd: o,
      value: l,
      beforeTxt: s,
      afterTxt: u
    };
  }
  function r() {
    if (e.value == null || t.value == null)
      return;
    const { value: a } = e.value, { beforeTxt: o, afterTxt: l, selectionStart: s } = t.value;
    if (o == null || l == null || s == null)
      return;
    let u = a.length;
    if (a.endsWith(l))
      u = a.length - l.length;
    else if (a.startsWith(o))
      u = o.length;
    else {
      const c = o[s - 1], f = a.indexOf(c, s - 1);
      f !== -1 && (u = f + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, r];
}
const $n = no({
  type: String,
  values: nr,
  required: !1
}), _1 = Symbol("size"), E1 = () => {
  const e = Oe(_1, {});
  return E(() => i(e.size) || "");
};
function T1(e, { afterFocus: t, afterBlur: n } = {}) {
  const r = Ke(), { emit: a } = r, o = Wn(), l = x(!1), s = (f) => {
    l.value || (l.value = !0, a("focus", f), t == null || t());
  }, u = (f) => {
    var p;
    f.relatedTarget && ((p = o.value) != null && p.contains(f.relatedTarget)) || (l.value = !1, a("blur", f), n == null || n());
  }, c = () => {
    var f;
    (f = e.value) == null || f.focus();
  };
  return me(o, (f) => {
    f && (f.setAttribute("role", "button"), f.setAttribute("tabindex", "-1"));
  }), hn(o, "click", c), {
    wrapperRef: o,
    isFocused: l,
    handleFocus: s,
    handleBlur: u
  };
}
const O1 = Symbol(), oi = x();
function P1(e, t = void 0) {
  const n = Ke() ? Oe(O1, oi) : oi;
  return e ? E(() => {
    var r, a;
    return (a = (r = n.value) == null ? void 0 : r[e]) != null ? a : t;
  }) : n;
}
var Ae = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
};
const x1 = Me({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
}), M1 = ce({
  name: "ElIcon",
  inheritAttrs: !1
}), A1 = /* @__PURE__ */ ce({
  ...M1,
  props: x1,
  setup(e) {
    const t = e, n = we("icon"), r = E(() => {
      const { size: a, color: o } = t;
      return !a && !o ? {} : {
        fontSize: Un(a) ? void 0 : Yr(a),
        "--color": o
      };
    });
    return (a, o) => (O(), K("i", Pt({
      class: i(n).b(),
      style: i(r)
    }, a.$attrs), [
      $e(a.$slots, "default")
    ], 16));
  }
});
var N1 = /* @__PURE__ */ Ae(A1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const Ie = Vt(N1), Er = Symbol("formContextKey"), Xn = Symbol("formItemContextKey"), Yt = (e, t = {}) => {
  const n = x(void 0), r = t.prop ? n : Gu("size"), a = t.global ? n : E1(), o = t.form ? { size: void 0 } : Oe(Er, void 0), l = t.formItem ? { size: void 0 } : Oe(Xn, void 0);
  return E(() => r.value || i(e) || (l == null ? void 0 : l.size) || (o == null ? void 0 : o.size) || a.value || "");
}, ia = (e) => {
  const t = Gu("disabled"), n = Oe(Er, void 0);
  return E(() => t.value || i(e) || (n == null ? void 0 : n.disabled) || !1);
}, _n = () => {
  const e = Oe(Er, void 0), t = Oe(Xn, void 0);
  return {
    form: e,
    formItem: t
  };
}, lo = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = x(!1)), r || (r = x(!1));
  const a = x();
  let o;
  const l = E(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return Xe(() => {
    o = me([St(e, "id"), n], ([s, u]) => {
      const c = s ?? (u ? void 0 : oo().value);
      c !== a.value && (t != null && t.removeInputId && (a.value && t.removeInputId(a.value), !(r != null && r.value) && !u && c && t.addInputId(c)), a.value = c);
    }, { immediate: !0 });
  }), Ka(() => {
    o && o(), t != null && t.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: l,
    inputId: a
  };
}, R1 = Me({
  size: {
    type: String,
    values: nr
  },
  disabled: Boolean
}), I1 = Me({
  ...R1,
  model: Object,
  rules: {
    type: be(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  requireAsteriskPosition: {
    type: String,
    values: ["left", "right"],
    default: "left"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: !0
  },
  validateOnRuleChange: {
    type: Boolean,
    default: !0
  },
  hideRequiredAsterisk: Boolean,
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
}), D1 = {
  validate: (e, t, n) => (tt(e) || kt(e)) && Jt(t) && kt(n)
}, L1 = "ElForm";
function F1() {
  const e = x([]), t = E(() => {
    if (!e.value.length)
      return "0";
    const o = Math.max(...e.value);
    return o ? `${o}px` : "";
  });
  function n(o) {
    const l = e.value.indexOf(o);
    return l === -1 && t.value === "0" && nt(L1, `unexpected width ${o}`), l;
  }
  function r(o, l) {
    if (o && l) {
      const s = n(l);
      e.value.splice(s, 1, o);
    } else
      o && e.value.push(o);
  }
  function a(o) {
    const l = n(o);
    l > -1 && e.value.splice(l, 1);
  }
  return {
    autoLabelWidth: t,
    registerLabelWidth: r,
    deregisterLabelWidth: a
  };
}
const pa = (e, t) => {
  const n = xo(t);
  return n.length > 0 ? e.filter((r) => r.prop && n.includes(r.prop)) : e;
}, Ta = "ElForm", B1 = ce({
  name: Ta
}), z1 = /* @__PURE__ */ ce({
  ...B1,
  props: I1,
  emits: D1,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = [], o = Yt(), l = we("form"), s = E(() => {
      const { labelPosition: C, inline: g } = r;
      return [
        l.b(),
        l.m(o.value || "default"),
        {
          [l.m(`label-${C}`)]: C,
          [l.m("inline")]: g
        }
      ];
    }), u = (C) => {
      a.push(C);
    }, c = (C) => {
      C.prop && a.splice(a.indexOf(C), 1);
    }, f = (C = []) => {
      if (!r.model) {
        nt(Ta, "model is required for resetFields to work.");
        return;
      }
      pa(a, C).forEach((g) => g.resetField());
    }, p = (C = []) => {
      pa(a, C).forEach((g) => g.clearValidate());
    }, m = E(() => {
      const C = !!r.model;
      return C || nt(Ta, "model is required for validate to work."), C;
    }), h = (C) => {
      if (a.length === 0)
        return [];
      const g = pa(a, C);
      return g.length ? g : (nt(Ta, "please pass correct props!"), []);
    }, v = async (C) => y(void 0, C), d = async (C = []) => {
      if (!m.value)
        return !1;
      const g = h(C);
      if (g.length === 0)
        return !0;
      let b = {};
      for (const k of g)
        try {
          await k.validate("");
        } catch (S) {
          b = {
            ...b,
            ...S
          };
        }
      return Object.keys(b).length === 0 ? !0 : Promise.reject(b);
    }, y = async (C = [], g) => {
      const b = !dt(g);
      try {
        const k = await d(C);
        return k === !0 && (g == null || g(k)), k;
      } catch (k) {
        if (k instanceof Error)
          throw k;
        const S = k;
        return r.scrollToError && w(Object.keys(S)[0]), g == null || g(!1, S), b && Promise.reject(S);
      }
    }, w = (C) => {
      var g;
      const b = pa(a, C)[0];
      b && ((g = b.$el) == null || g.scrollIntoView(r.scrollIntoViewOptions));
    };
    return me(() => r.rules, () => {
      r.validateOnRuleChange && v().catch((C) => nt(C));
    }, { deep: !0 }), vt(Er, Ut({
      ...wn(r),
      emit: n,
      resetFields: f,
      clearValidate: p,
      validateField: y,
      addField: u,
      removeField: c,
      ...F1()
    })), t({
      validate: v,
      validateField: y,
      resetFields: f,
      clearValidate: p,
      scrollToField: w
    }), (C, g) => (O(), K("form", {
      class: A(i(s))
    }, [
      $e(C.$slots, "default")
    ], 2));
  }
});
var V1 = /* @__PURE__ */ Ae(z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function zn() {
  return zn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, zn.apply(this, arguments);
}
function H1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Xr(e, t);
}
function zo(e) {
  return zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zo(e);
}
function Xr(e, t) {
  return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, a) {
    return r.__proto__ = a, r;
  }, Xr(e, t);
}
function W1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Oa(e, t, n) {
  return W1() ? Oa = Reflect.construct.bind() : Oa = function(a, o, l) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(a, s), c = new u();
    return l && Xr(c, l.prototype), c;
  }, Oa.apply(null, arguments);
}
function j1(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Vo(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Vo = function(r) {
    if (r === null || !j1(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, a);
    }
    function a() {
      return Oa(r, arguments, zo(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Xr(a, r);
  }, Vo(e);
}
var K1 = /%[sdj%]/g, pc = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (pc = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function Ho(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function Lt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var l = e.replace(K1, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return l;
  }
  return e;
}
function q1(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function bt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || q1(t) && typeof e == "string" && !e);
}
function Y1(e, t, n) {
  var r = [], a = 0, o = e.length;
  function l(s) {
    r.push.apply(r, s || []), a++, a === o && n(r);
  }
  e.forEach(function(s) {
    t(s, l);
  });
}
function li(e, t, n) {
  var r = 0, a = e.length;
  function o(l) {
    if (l && l.length) {
      n(l);
      return;
    }
    var s = r;
    r = r + 1, s < a ? t(e[s], o) : n([]);
  }
  o([]);
}
function U1(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var si = /* @__PURE__ */ function(e) {
  H1(t, e);
  function t(n, r) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return t;
}(/* @__PURE__ */ Vo(Error));
function G1(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(m, h) {
      var v = function(w) {
        return r(w), w.length ? h(new si(w, Ho(w))) : m(a);
      }, d = U1(e);
      li(d, n, v);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), u = s.length, c = 0, f = [], p = new Promise(function(m, h) {
    var v = function(y) {
      if (f.push.apply(f, y), c++, c === u)
        return r(f), f.length ? h(new si(f, Ho(f))) : m(a);
    };
    s.length || (r(f), m(a)), s.forEach(function(d) {
      var y = e[d];
      l.indexOf(d) !== -1 ? li(y, n, v) : Y1(y, n, v);
    });
  });
  return p.catch(function(m) {
    return m;
  }), p;
}
function X1(e) {
  return !!(e && e.message !== void 0);
}
function Z1(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function ii(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Z1(t, e.fullFields) : r = t[n.field || e.fullField], X1(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function ui(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        typeof r == "object" && typeof e[n] == "object" ? e[n] = zn({}, e[n], r) : e[n] = r;
      }
  }
  return e;
}
var vc = function(t, n, r, a, o, l) {
  t.required && (!r.hasOwnProperty(t.field) || bt(n, l || t.type)) && a.push(Lt(o.messages.required, t.fullField));
}, J1 = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(Lt(o.messages.whitespace, t.fullField));
}, va, Q1 = function() {
  if (va)
    return va;
  var e = "[a-fA-F\\d:]", t = function(b) {
    return b && b.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + r + ":){7}(?:" + r + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + r + ":){6}(?:" + n + "|:" + r + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + r + ":){5}(?::" + n + "|(?::" + r + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + r + ":){4}(?:(?::" + r + "){0,1}:" + n + "|(?::" + r + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + r + ":){3}(?:(?::" + r + "){0,2}:" + n + "|(?::" + r + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + r + ":){2}(?:(?::" + r + "){0,3}:" + n + "|(?::" + r + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + r + ":){1}(?:(?::" + r + "){0,4}:" + n + "|(?::" + r + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + r + "){0,5}:" + n + "|(?::" + r + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), l = new RegExp("^" + n + "$"), s = new RegExp("^" + a + "$"), u = function(b) {
    return b && b.exact ? o : new RegExp("(?:" + t(b) + n + t(b) + ")|(?:" + t(b) + a + t(b) + ")", "g");
  };
  u.v4 = function(g) {
    return g && g.exact ? l : new RegExp("" + t(g) + n + t(g), "g");
  }, u.v6 = function(g) {
    return g && g.exact ? s : new RegExp("" + t(g) + a + t(g), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", p = u.v4().source, m = u.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", d = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", w = '(?:[/?#][^\\s"]*)?', C = "(?:" + c + "|www\\.)" + f + "(?:localhost|" + p + "|" + m + "|" + h + v + d + ")" + y + w;
  return va = new RegExp("(?:^" + C + "$)", "i"), va;
}, ci = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Ar = {
  integer: function(t) {
    return Ar.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Ar.number(t) && !Ar.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Ar.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(ci.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Q1());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(ci.hex);
  }
}, ew = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    vc(t, n, r, a, o);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? Ar[s](n) || a.push(Lt(o.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && a.push(Lt(o.messages.types[s], t.fullField, t.type));
}, tw = function(t, n, r, a, o) {
  var l = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, p = null, m = typeof n == "number", h = typeof n == "string", v = Array.isArray(n);
  if (m ? p = "number" : h ? p = "string" : v && (p = "array"), !p)
    return !1;
  v && (f = n.length), h && (f = n.replace(c, "_").length), l ? f !== t.len && a.push(Lt(o.messages[p].len, t.fullField, t.len)) : s && !u && f < t.min ? a.push(Lt(o.messages[p].min, t.fullField, t.min)) : u && !s && f > t.max ? a.push(Lt(o.messages[p].max, t.fullField, t.max)) : s && u && (f < t.min || f > t.max) && a.push(Lt(o.messages[p].range, t.fullField, t.min, t.max));
}, rr = "enum", nw = function(t, n, r, a, o) {
  t[rr] = Array.isArray(t[rr]) ? t[rr] : [], t[rr].indexOf(n) === -1 && a.push(Lt(o.messages[rr], t.fullField, t[rr].join(", ")));
}, rw = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(Lt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(n) || a.push(Lt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, Be = {
  required: vc,
  whitespace: J1,
  type: ew,
  range: tw,
  enum: nw,
  pattern: rw
}, aw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "string") && !t.required)
      return r();
    Be.required(t, n, a, l, o, "string"), bt(n, "string") || (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o), Be.pattern(t, n, a, l, o), t.whitespace === !0 && Be.whitespace(t, n, a, l, o));
  }
  r(l);
}, ow = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be.type(t, n, a, l, o);
  }
  r(l);
}, lw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
}, sw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be.type(t, n, a, l, o);
  }
  r(l);
}, iw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), bt(n) || Be.type(t, n, a, l, o);
  }
  r(l);
}, uw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
}, cw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
}, dw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    Be.required(t, n, a, l, o, "array"), n != null && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
}, fw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be.type(t, n, a, l, o);
  }
  r(l);
}, pw = "enum", vw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be[pw](t, n, a, l, o);
  }
  r(l);
}, hw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "string") && !t.required)
      return r();
    Be.required(t, n, a, l, o), bt(n, "string") || Be.pattern(t, n, a, l, o);
  }
  r(l);
}, mw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "date") && !t.required)
      return r();
    if (Be.required(t, n, a, l, o), !bt(n, "date")) {
      var u;
      n instanceof Date ? u = n : u = new Date(n), Be.type(t, u, a, l, o), u && Be.range(t, u.getTime(), a, l, o);
    }
  }
  r(l);
}, gw = function(t, n, r, a, o) {
  var l = [], s = Array.isArray(n) ? "array" : typeof n;
  Be.required(t, n, a, l, o, s), r(l);
}, go = function(t, n, r, a, o) {
  var l = t.type, s = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (bt(n, l) && !t.required)
      return r();
    Be.required(t, n, a, s, o, l), bt(n, l) || Be.type(t, n, a, s, o);
  }
  r(s);
}, bw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o);
  }
  r(l);
}, Fr = {
  string: aw,
  method: ow,
  number: lw,
  boolean: sw,
  regexp: iw,
  integer: uw,
  float: cw,
  array: dw,
  object: fw,
  enum: vw,
  pattern: hw,
  date: mw,
  url: go,
  hex: go,
  email: go,
  required: gw,
  any: bw
};
function Wo() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var jo = Wo(), ua = /* @__PURE__ */ function() {
  function e(n) {
    this.rules = null, this._messages = jo, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(r) {
    var a = this;
    if (!r)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof r != "object" || Array.isArray(r))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(r).forEach(function(o) {
      var l = r[o];
      a.rules[o] = Array.isArray(l) ? l : [l];
    });
  }, t.messages = function(r) {
    return r && (this._messages = ui(Wo(), r)), this._messages;
  }, t.validate = function(r, a, o) {
    var l = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = r, u = a, c = o;
    if (typeof u == "function" && (c = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, s), Promise.resolve(s);
    function f(d) {
      var y = [], w = {};
      function C(b) {
        if (Array.isArray(b)) {
          var k;
          y = (k = y).concat.apply(k, b);
        } else
          y.push(b);
      }
      for (var g = 0; g < d.length; g++)
        C(d[g]);
      y.length ? (w = Ho(y), c(y, w)) : c(null, s);
    }
    if (u.messages) {
      var p = this.messages();
      p === jo && (p = Wo()), ui(p, u.messages), u.messages = p;
    } else
      u.messages = this.messages();
    var m = {}, h = u.keys || Object.keys(this.rules);
    h.forEach(function(d) {
      var y = l.rules[d], w = s[d];
      y.forEach(function(C) {
        var g = C;
        typeof g.transform == "function" && (s === r && (s = zn({}, s)), w = s[d] = g.transform(w)), typeof g == "function" ? g = {
          validator: g
        } : g = zn({}, g), g.validator = l.getValidationMethod(g), g.validator && (g.field = d, g.fullField = g.fullField || d, g.type = l.getType(g), m[d] = m[d] || [], m[d].push({
          rule: g,
          value: w,
          source: s,
          field: d
        }));
      });
    });
    var v = {};
    return G1(m, u, function(d, y) {
      var w = d.rule, C = (w.type === "object" || w.type === "array") && (typeof w.fields == "object" || typeof w.defaultField == "object");
      C = C && (w.required || !w.required && d.value), w.field = d.field;
      function g(S, $) {
        return zn({}, $, {
          fullField: w.fullField + "." + S,
          fullFields: w.fullFields ? [].concat(w.fullFields, [S]) : [S]
        });
      }
      function b(S) {
        S === void 0 && (S = []);
        var $ = Array.isArray(S) ? S : [S];
        !u.suppressWarning && $.length && e.warning("async-validator:", $), $.length && w.message !== void 0 && ($ = [].concat(w.message));
        var T = $.map(ii(w, s));
        if (u.first && T.length)
          return v[w.field] = 1, y(T);
        if (!C)
          y(T);
        else {
          if (w.required && !d.value)
            return w.message !== void 0 ? T = [].concat(w.message).map(ii(w, s)) : u.error && (T = [u.error(w, Lt(u.messages.required, w.field))]), y(T);
          var R = {};
          w.defaultField && Object.keys(d.value).map(function(F) {
            R[F] = w.defaultField;
          }), R = zn({}, R, d.rule.fields);
          var z = {};
          Object.keys(R).forEach(function(F) {
            var N = R[F], B = Array.isArray(N) ? N : [N];
            z[F] = B.map(g.bind(null, F));
          });
          var V = new e(z);
          V.messages(u.messages), d.rule.options && (d.rule.options.messages = u.messages, d.rule.options.error = u.error), V.validate(d.value, d.rule.options || u, function(F) {
            var N = [];
            T && T.length && N.push.apply(N, T), F && F.length && N.push.apply(N, F), y(N.length ? N : null);
          });
        }
      }
      var k;
      if (w.asyncValidator)
        k = w.asyncValidator(w, d.value, b, d.source, u);
      else if (w.validator) {
        try {
          k = w.validator(w, d.value, b, d.source, u);
        } catch (S) {
          console.error == null || console.error(S), u.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), b(S.message);
        }
        k === !0 ? b() : k === !1 ? b(typeof w.message == "function" ? w.message(w.fullField || w.field) : w.message || (w.fullField || w.field) + " fails") : k instanceof Array ? b(k) : k instanceof Error && b(k.message);
      }
      k && k.then && k.then(function() {
        return b();
      }, function(S) {
        return b(S);
      });
    }, function(d) {
      f(d);
    }, s);
  }, t.getType = function(r) {
    if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !Fr.hasOwnProperty(r.type))
      throw new Error(Lt("Unknown rule type %s", r.type));
    return r.type || "string";
  }, t.getValidationMethod = function(r) {
    if (typeof r.validator == "function")
      return r.validator;
    var a = Object.keys(r), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? Fr.required : Fr[this.getType(r)] || void 0;
  }, e;
}();
ua.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Fr[t] = n;
};
ua.warning = pc;
ua.messages = jo;
ua.validators = Fr;
const yw = [
  "",
  "error",
  "validating",
  "success"
], ww = Me({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: be([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: be([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: yw
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    values: nr
  }
}), di = "ElLabelWrap";
var Cw = ce({
  name: di,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = Oe(Er, void 0), r = Oe(Xn);
    r || xl(di, "usage: <el-form-item><label-wrap /></el-form-item>");
    const a = we("form"), o = x(), l = x(0), s = () => {
      var f;
      if ((f = o.value) != null && f.firstElementChild) {
        const p = window.getComputedStyle(o.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(p));
      } else
        return 0;
    }, u = (f = "update") => {
      Te(() => {
        t.default && e.isAutoWidth && (f === "update" ? l.value = s() : f === "remove" && (n == null || n.deregisterLabelWidth(l.value)));
      });
    }, c = () => u("update");
    return Xe(() => {
      c();
    }), zt(() => {
      u("remove");
    }), dl(() => c()), me(l, (f, p) => {
      e.updateAll && (n == null || n.registerLabelWidth(f, p));
    }), Nn(E(() => {
      var f, p;
      return (p = (f = o.value) == null ? void 0 : f.firstElementChild) != null ? p : null;
    }), c), () => {
      var f, p;
      if (!t)
        return null;
      const {
        isAutoWidth: m
      } = e;
      if (m) {
        const h = n == null ? void 0 : n.autoLabelWidth, v = r == null ? void 0 : r.hasLabel, d = {};
        if (v && h && h !== "auto") {
          const y = Math.max(0, Number.parseInt(h, 10) - l.value), w = n.labelPosition === "left" ? "marginRight" : "marginLeft";
          y && (d[w] = `${y}px`);
        }
        return J("div", {
          ref: o,
          class: [a.be("item", "label-wrap")],
          style: d
        }, [(f = t.default) == null ? void 0 : f.call(t)]);
      } else
        return J(Ne, {
          ref: o
        }, [(p = t.default) == null ? void 0 : p.call(t)]);
    };
  }
});
const Sw = ["role", "aria-labelledby"], kw = ce({
  name: "ElFormItem"
}), $w = /* @__PURE__ */ ce({
  ...kw,
  props: ww,
  setup(e, { expose: t }) {
    const n = e, r = Jn(), a = Oe(Er, void 0), o = Oe(Xn, void 0), l = Yt(void 0, { formItem: !1 }), s = we("form-item"), u = oo().value, c = x([]), f = x(""), p = qd(f, 100), m = x(""), h = x();
    let v, d = !1;
    const y = E(() => {
      if ((a == null ? void 0 : a.labelPosition) === "top")
        return {};
      const se = Yr(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
      return se ? { width: se } : {};
    }), w = E(() => {
      if ((a == null ? void 0 : a.labelPosition) === "top" || a != null && a.inline)
        return {};
      if (!n.label && !n.labelWidth && R)
        return {};
      const se = Yr(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
      return !n.label && !r.label ? { marginLeft: se } : {};
    }), C = E(() => [
      s.b(),
      s.m(l.value),
      s.is("error", f.value === "error"),
      s.is("validating", f.value === "validating"),
      s.is("success", f.value === "success"),
      s.is("required", B.value || n.required),
      s.is("no-asterisk", a == null ? void 0 : a.hideRequiredAsterisk),
      (a == null ? void 0 : a.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [s.m("feedback")]: a == null ? void 0 : a.statusIcon }
    ]), g = E(() => Jt(n.inlineMessage) ? n.inlineMessage : (a == null ? void 0 : a.inlineMessage) || !1), b = E(() => [
      s.e("error"),
      { [s.em("error", "inline")]: g.value }
    ]), k = E(() => n.prop ? kt(n.prop) ? n.prop : n.prop.join(".") : ""), S = E(() => !!(n.label || r.label)), $ = E(() => n.for || c.value.length === 1 ? c.value[0] : void 0), T = E(() => !$.value && S.value), R = !!o, z = E(() => {
      const se = a == null ? void 0 : a.model;
      if (!(!se || !n.prop))
        return _a(se, n.prop).value;
    }), V = E(() => {
      const { required: se } = n, le = [];
      n.rules && le.push(...xo(n.rules));
      const ue = a == null ? void 0 : a.rules;
      if (ue && n.prop) {
        const ve = _a(ue, n.prop).value;
        ve && le.push(...xo(ve));
      }
      if (se !== void 0) {
        const ve = le.map((_e, Pe) => [_e, Pe]).filter(([_e]) => Object.keys(_e).includes("required"));
        if (ve.length > 0)
          for (const [_e, Pe] of ve)
            _e.required !== se && (le[Pe] = { ..._e, required: se });
        else
          le.push({ required: se });
      }
      return le;
    }), F = E(() => V.value.length > 0), N = (se) => V.value.filter((ue) => !ue.trigger || !se ? !0 : Array.isArray(ue.trigger) ? ue.trigger.includes(se) : ue.trigger === se).map(({ trigger: ue, ...ve }) => ve), B = E(() => V.value.some((se) => se.required)), W = E(() => {
      var se;
      return p.value === "error" && n.showMessage && ((se = a == null ? void 0 : a.showMessage) != null ? se : !0);
    }), q = E(() => `${n.label || ""}${(a == null ? void 0 : a.labelSuffix) || ""}`), M = (se) => {
      f.value = se;
    }, H = (se) => {
      var le, ue;
      const { errors: ve, fields: _e } = se;
      (!ve || !_e) && console.error(se), M("error"), m.value = ve ? (ue = (le = ve == null ? void 0 : ve[0]) == null ? void 0 : le.message) != null ? ue : `${n.prop} is required` : "", a == null || a.emit("validate", n.prop, !1, m.value);
    }, _ = () => {
      M("success"), a == null || a.emit("validate", n.prop, !0, "");
    }, L = async (se) => {
      const le = k.value;
      return new ua({
        [le]: se
      }).validate({ [le]: z.value }, { firstFields: !0 }).then(() => (_(), !0)).catch((ve) => (H(ve), Promise.reject(ve)));
    }, U = async (se, le) => {
      if (d || !n.prop)
        return !1;
      const ue = dt(le);
      if (!F.value)
        return le == null || le(!1), !1;
      const ve = N(se);
      return ve.length === 0 ? (le == null || le(!0), !0) : (M("validating"), L(ve).then(() => (le == null || le(!0), !0)).catch((_e) => {
        const { fields: Pe } = _e;
        return le == null || le(!1, Pe), ue ? !1 : Promise.reject(Pe);
      }));
    }, I = () => {
      M(""), m.value = "", d = !1;
    }, G = async () => {
      const se = a == null ? void 0 : a.model;
      if (!se || !n.prop)
        return;
      const le = _a(se, n.prop);
      d = !0, le.value = Ds(v), await Te(), I(), d = !1;
    }, ne = (se) => {
      c.value.includes(se) || c.value.push(se);
    }, he = (se) => {
      c.value = c.value.filter((le) => le !== se);
    };
    me(() => n.error, (se) => {
      m.value = se || "", M(se ? "error" : "");
    }, { immediate: !0 }), me(() => n.validateStatus, (se) => M(se || ""));
    const ge = Ut({
      ...wn(n),
      $el: h,
      size: l,
      validateState: f,
      labelId: u,
      inputIds: c,
      isGroup: T,
      hasLabel: S,
      addInputId: ne,
      removeInputId: he,
      resetField: G,
      clearValidate: I,
      validate: U
    });
    return vt(Xn, ge), Xe(() => {
      n.prop && (a == null || a.addField(ge), v = Ds(z.value));
    }), zt(() => {
      a == null || a.removeField(ge);
    }), t({
      size: l,
      validateMessage: m,
      validateState: f,
      validate: U,
      clearValidate: I,
      resetField: G
    }), (se, le) => {
      var ue;
      return O(), K("div", {
        ref_key: "formItemRef",
        ref: h,
        class: A(i(C)),
        role: i(T) ? "group" : void 0,
        "aria-labelledby": i(T) ? i(u) : void 0
      }, [
        J(i(Cw), {
          "is-auto-width": i(y).width === "auto",
          "update-all": ((ue = i(a)) == null ? void 0 : ue.labelWidth) === "auto"
        }, {
          default: re(() => [
            i(S) ? (O(), fe(gt(i($) ? "label" : "div"), {
              key: 0,
              id: i(u),
              for: i($),
              class: A(i(s).e("label")),
              style: Ge(i(y))
            }, {
              default: re(() => [
                $e(se.$slots, "label", { label: i(q) }, () => [
                  pt(ye(i(q)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : de("v-if", !0)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        Q("div", {
          class: A(i(s).e("content")),
          style: Ge(i(w))
        }, [
          $e(se.$slots, "default"),
          J(Rd, {
            name: `${i(s).namespace.value}-zoom-in-top`
          }, {
            default: re(() => [
              i(W) ? $e(se.$slots, "error", {
                key: 0,
                error: m.value
              }, () => [
                Q("div", {
                  class: A(i(b))
                }, ye(m.value), 3)
              ]) : de("v-if", !0)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, Sw);
    };
  }
});
var hc = /* @__PURE__ */ Ae($w, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
const _w = Vt(V1, {
  FormItem: hc
}), Tn = kn(hc);
let Gt;
const Ew = `
  height:0 !important;
  visibility:hidden !important;
  ${af() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Tw = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Ow(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), r = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), a = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: Tw.map((l) => `${l}:${t.getPropertyValue(l)}`).join(";"), paddingSize: r, borderSize: a, boxSizing: n };
}
function fi(e, t = 1, n) {
  var r;
  Gt || (Gt = document.createElement("textarea"), document.body.appendChild(Gt));
  const { paddingSize: a, borderSize: o, boxSizing: l, contextStyle: s } = Ow(e);
  Gt.setAttribute("style", `${s};${Ew}`), Gt.value = e.value || e.placeholder || "";
  let u = Gt.scrollHeight;
  const c = {};
  l === "border-box" ? u = u + o : l === "content-box" && (u = u - a), Gt.value = "";
  const f = Gt.scrollHeight - a;
  if (it(t)) {
    let p = f * t;
    l === "border-box" && (p = p + a + o), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (it(n)) {
    let p = f * n;
    l === "border-box" && (p = p + a + o), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (r = Gt.parentNode) == null || r.removeChild(Gt), Gt = void 0, c;
}
const Pw = Me({
  id: {
    type: String,
    default: void 0
  },
  size: $n,
  disabled: Boolean,
  modelValue: {
    type: be([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: be([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: an
  },
  prefixIcon: {
    type: an
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: be([Object, Array, String]),
    default: () => Al({})
  }
}), xw = {
  [ft]: (e) => kt(e),
  input: (e) => kt(e),
  change: (e) => kt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
}, Mw = ["role"], Aw = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"], Nw = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"], Rw = ce({
  name: "ElInput",
  inheritAttrs: !1
}), Iw = /* @__PURE__ */ ce({
  ...Rw,
  props: Pw,
  emits: xw,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = Jr(), o = Jn(), l = E(() => {
      const ae = {};
      return r.containerRole === "combobox" && (ae["aria-haspopup"] = a["aria-haspopup"], ae["aria-owns"] = a["aria-owns"], ae["aria-expanded"] = a["aria-expanded"]), ae;
    }), s = E(() => [
      r.type === "textarea" ? y.b() : d.b(),
      d.m(h.value),
      d.is("disabled", v.value),
      d.is("exceed", ne.value),
      {
        [d.b("group")]: o.prepend || o.append,
        [d.bm("group", "append")]: o.append,
        [d.bm("group", "prepend")]: o.prepend,
        [d.m("prefix")]: o.prefix || r.prefixIcon,
        [d.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [d.bm("suffix", "password-clear")]: L.value && U.value
      },
      a.class
    ]), u = E(() => [
      d.e("wrapper"),
      d.is("focus", z.value)
    ]), c = t0({
      excludeKeys: E(() => Object.keys(l.value))
    }), { form: f, formItem: p } = _n(), { inputId: m } = lo(r, {
      formItemContext: p
    }), h = Yt(), v = ia(), d = we("input"), y = we("textarea"), w = Wn(), C = Wn(), g = x(!1), b = x(!1), k = x(!1), S = x(), $ = Wn(r.inputStyle), T = E(() => w.value || C.value), { wrapperRef: R, isFocused: z, handleFocus: V, handleBlur: F } = T1(T, {
      afterBlur() {
        var ae;
        r.validateEvent && ((ae = p == null ? void 0 : p.validate) == null || ae.call(p, "blur").catch((ke) => nt(ke)));
      }
    }), N = E(() => {
      var ae;
      return (ae = f == null ? void 0 : f.statusIcon) != null ? ae : !1;
    }), B = E(() => (p == null ? void 0 : p.validateState) || ""), W = E(() => B.value && Yy[B.value]), q = E(() => k.value ? Ky : Py), M = E(() => [
      a.style,
      r.inputStyle
    ]), H = E(() => [
      r.inputStyle,
      $.value,
      { resize: r.resize }
    ]), _ = E(() => eo(r.modelValue) ? "" : String(r.modelValue)), L = E(() => r.clearable && !v.value && !r.readonly && !!_.value && (z.value || g.value)), U = E(() => r.showPassword && !v.value && !r.readonly && !!_.value && (!!_.value || z.value)), I = E(() => r.showWordLimit && !!c.value.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), G = E(() => _.value.length), ne = E(() => !!I.value && G.value > Number(c.value.maxlength)), he = E(() => !!o.suffix || !!r.suffixIcon || L.value || r.showPassword || I.value || !!B.value && N.value), [ge, se] = $1(w);
    Nn(C, (ae) => {
      if (ve(), !I.value || r.resize !== "both")
        return;
      const ke = ae[0], { width: Fe } = ke.contentRect;
      S.value = {
        right: `calc(100% - ${Fe + 15 + 6}px)`
      };
    });
    const le = () => {
      const { type: ae, autosize: ke } = r;
      if (!(!at || ae !== "textarea" || !C.value))
        if (ke) {
          const Fe = Bt(ke) ? ke.minRows : void 0, Je = Bt(ke) ? ke.maxRows : void 0, ee = fi(C.value, Fe, Je);
          $.value = {
            overflowY: "hidden",
            ...ee
          }, Te(() => {
            C.value.offsetHeight, $.value = ee;
          });
        } else
          $.value = {
            minHeight: fi(C.value).minHeight
          };
    }, ve = ((ae) => {
      let ke = !1;
      return () => {
        var Fe;
        if (ke || !r.autosize)
          return;
        ((Fe = C.value) == null ? void 0 : Fe.offsetParent) === null || (ae(), ke = !0);
      };
    })(le), _e = () => {
      const ae = T.value, ke = r.formatter ? r.formatter(_.value) : _.value;
      !ae || ae.value === ke || (ae.value = ke);
    }, Pe = async (ae) => {
      ge();
      let { value: ke } = ae.target;
      if (r.formatter && (ke = r.parser ? r.parser(ke) : ke), !b.value) {
        if (ke === _.value) {
          _e();
          return;
        }
        n(ft, ke), n("input", ke), await Te(), _e(), se();
      }
    }, He = (ae) => {
      n("change", ae.target.value);
    }, We = (ae) => {
      n("compositionstart", ae), b.value = !0;
    }, Ue = (ae) => {
      var ke;
      n("compositionupdate", ae);
      const Fe = (ke = ae.target) == null ? void 0 : ke.value, Je = Fe[Fe.length - 1] || "";
      b.value = !Ml(Je);
    }, je = (ae) => {
      n("compositionend", ae), b.value && (b.value = !1, Pe(ae));
    }, rt = () => {
      k.value = !k.value, ht();
    }, ht = async () => {
      var ae;
      await Te(), (ae = T.value) == null || ae.focus();
    }, lt = () => {
      var ae;
      return (ae = T.value) == null ? void 0 : ae.blur();
    }, Se = (ae) => {
      g.value = !1, n("mouseleave", ae);
    }, ut = (ae) => {
      g.value = !0, n("mouseenter", ae);
    }, ct = (ae) => {
      n("keydown", ae);
    }, st = () => {
      var ae;
      (ae = T.value) == null || ae.select();
    }, Ze = () => {
      n(ft, ""), n("change", ""), n("clear"), n("input", "");
    };
    return me(() => r.modelValue, () => {
      var ae;
      Te(() => le()), r.validateEvent && ((ae = p == null ? void 0 : p.validate) == null || ae.call(p, "change").catch((ke) => nt(ke)));
    }), me(_, () => _e()), me(() => r.type, async () => {
      await Te(), _e(), le();
    }), Xe(() => {
      !r.formatter && r.parser && nt("ElInput", "If you set the parser, you also need to set the formatter."), _e(), Te(le);
    }), t({
      input: w,
      textarea: C,
      ref: T,
      textareaStyle: H,
      autosize: St(r, "autosize"),
      focus: ht,
      blur: lt,
      select: st,
      clear: Ze,
      resizeTextarea: le
    }), (ae, ke) => ze((O(), K("div", Pt(i(l), {
      class: i(s),
      style: i(M),
      role: ae.containerRole,
      onMouseenter: ut,
      onMouseleave: Se
    }), [
      de(" input "),
      ae.type !== "textarea" ? (O(), K(Ne, { key: 0 }, [
        de(" prepend slot "),
        ae.$slots.prepend ? (O(), K("div", {
          key: 0,
          class: A(i(d).be("group", "prepend"))
        }, [
          $e(ae.$slots, "prepend")
        ], 2)) : de("v-if", !0),
        Q("div", {
          ref_key: "wrapperRef",
          ref: R,
          class: A(i(u))
        }, [
          de(" prefix slot "),
          ae.$slots.prefix || ae.prefixIcon ? (O(), K("span", {
            key: 0,
            class: A(i(d).e("prefix"))
          }, [
            Q("span", {
              class: A(i(d).e("prefix-inner"))
            }, [
              $e(ae.$slots, "prefix"),
              ae.prefixIcon ? (O(), fe(i(Ie), {
                key: 0,
                class: A(i(d).e("icon"))
              }, {
                default: re(() => [
                  (O(), fe(gt(ae.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : de("v-if", !0)
            ], 2)
          ], 2)) : de("v-if", !0),
          Q("input", Pt({
            id: i(m),
            ref_key: "input",
            ref: w,
            class: i(d).e("inner")
          }, i(c), {
            type: ae.showPassword ? k.value ? "text" : "password" : ae.type,
            disabled: i(v),
            formatter: ae.formatter,
            parser: ae.parser,
            readonly: ae.readonly,
            autocomplete: ae.autocomplete,
            tabindex: ae.tabindex,
            "aria-label": ae.label,
            placeholder: ae.placeholder,
            style: ae.inputStyle,
            form: r.form,
            onCompositionstart: We,
            onCompositionupdate: Ue,
            onCompositionend: je,
            onInput: Pe,
            onFocus: ke[0] || (ke[0] = (...Fe) => i(V) && i(V)(...Fe)),
            onBlur: ke[1] || (ke[1] = (...Fe) => i(F) && i(F)(...Fe)),
            onChange: He,
            onKeydown: ct
          }), null, 16, Aw),
          de(" suffix slot "),
          i(he) ? (O(), K("span", {
            key: 1,
            class: A(i(d).e("suffix"))
          }, [
            Q("span", {
              class: A(i(d).e("suffix-inner"))
            }, [
              !i(L) || !i(U) || !i(I) ? (O(), K(Ne, { key: 0 }, [
                $e(ae.$slots, "suffix"),
                ae.suffixIcon ? (O(), fe(i(Ie), {
                  key: 0,
                  class: A(i(d).e("icon"))
                }, {
                  default: re(() => [
                    (O(), fe(gt(ae.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : de("v-if", !0)
              ], 64)) : de("v-if", !0),
              i(L) ? (O(), fe(i(Ie), {
                key: 1,
                class: A([i(d).e("icon"), i(d).e("clear")]),
                onMousedown: qe(i(fr), ["prevent"]),
                onClick: Ze
              }, {
                default: re(() => [
                  J(i(aa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : de("v-if", !0),
              i(U) ? (O(), fe(i(Ie), {
                key: 2,
                class: A([i(d).e("icon"), i(d).e("password")]),
                onClick: rt
              }, {
                default: re(() => [
                  (O(), fe(gt(i(q))))
                ]),
                _: 1
              }, 8, ["class"])) : de("v-if", !0),
              i(I) ? (O(), K("span", {
                key: 3,
                class: A(i(d).e("count"))
              }, [
                Q("span", {
                  class: A(i(d).e("count-inner"))
                }, ye(i(G)) + " / " + ye(i(c).maxlength), 3)
              ], 2)) : de("v-if", !0),
              i(B) && i(W) && i(N) ? (O(), fe(i(Ie), {
                key: 4,
                class: A([
                  i(d).e("icon"),
                  i(d).e("validateIcon"),
                  i(d).is("loading", i(B) === "validating")
                ])
              }, {
                default: re(() => [
                  (O(), fe(gt(i(W))))
                ]),
                _: 1
              }, 8, ["class"])) : de("v-if", !0)
            ], 2)
          ], 2)) : de("v-if", !0)
        ], 2),
        de(" append slot "),
        ae.$slots.append ? (O(), K("div", {
          key: 1,
          class: A(i(d).be("group", "append"))
        }, [
          $e(ae.$slots, "append")
        ], 2)) : de("v-if", !0)
      ], 64)) : (O(), K(Ne, { key: 1 }, [
        de(" textarea "),
        Q("textarea", Pt({
          id: i(m),
          ref_key: "textarea",
          ref: C,
          class: i(y).e("inner")
        }, i(c), {
          tabindex: ae.tabindex,
          disabled: i(v),
          readonly: ae.readonly,
          autocomplete: ae.autocomplete,
          style: i(H),
          "aria-label": ae.label,
          placeholder: ae.placeholder,
          form: r.form,
          onCompositionstart: We,
          onCompositionupdate: Ue,
          onCompositionend: je,
          onInput: Pe,
          onFocus: ke[2] || (ke[2] = (...Fe) => i(V) && i(V)(...Fe)),
          onBlur: ke[3] || (ke[3] = (...Fe) => i(F) && i(F)(...Fe)),
          onChange: He,
          onKeydown: ct
        }), null, 16, Nw),
        i(I) ? (O(), K("span", {
          key: 0,
          style: Ge(S.value),
          class: A(i(d).e("count"))
        }, ye(i(G)) + " / " + ye(i(c).maxlength), 7)) : de("v-if", !0)
      ], 64))
    ], 16, Mw)), [
      [wt, ae.type !== "hidden"]
    ]);
  }
});
var Dw = /* @__PURE__ */ Ae(Iw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Ft = Vt(Dw), sr = 4, Lw = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
}, Fw = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
}), mc = Symbol("scrollbarContextKey"), Bw = Me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: !0
  },
  always: Boolean
}), zw = "Thumb", Vw = /* @__PURE__ */ ce({
  __name: "thumb",
  props: Bw,
  setup(e) {
    const t = e, n = Oe(mc), r = we("scrollbar");
    n || xl(zw, "can not inject scrollbar context");
    const a = x(), o = x(), l = x({}), s = x(!1);
    let u = !1, c = !1, f = at ? document.onselectstart : null;
    const p = E(() => Lw[t.vertical ? "vertical" : "horizontal"]), m = E(() => Fw({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h = E(() => a.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / o.value[p.value.offset]), v = (S) => {
      var $;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), y(S);
      const T = S.currentTarget;
      T && (l.value[p.value.axis] = T[p.value.offset] - (S[p.value.client] - T.getBoundingClientRect()[p.value.direction]));
    }, d = (S) => {
      if (!o.value || !a.value || !n.wrapElement)
        return;
      const $ = Math.abs(S.target.getBoundingClientRect()[p.value.direction] - S[p.value.client]), T = o.value[p.value.offset] / 2, R = ($ - T) * 100 * h.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = R * n.wrapElement[p.value.scrollSize] / 100;
    }, y = (S) => {
      S.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", w), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => !1;
    }, w = (S) => {
      if (!a.value || !o.value || u === !1)
        return;
      const $ = l.value[p.value.axis];
      if (!$)
        return;
      const T = (a.value.getBoundingClientRect()[p.value.direction] - S[p.value.client]) * -1, R = o.value[p.value.offset] - $, z = (T - R) * 100 * h.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = z * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      u = !1, l.value[p.value.axis] = 0, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", C), k(), c && (s.value = !1);
    }, g = () => {
      c = !1, s.value = !!t.size;
    }, b = () => {
      c = !0, s.value = u;
    };
    zt(() => {
      k(), document.removeEventListener("mouseup", C);
    });
    const k = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return hn(St(n, "scrollbarElement"), "mousemove", g), hn(St(n, "scrollbarElement"), "mouseleave", b), (S, $) => (O(), fe(ur, {
      name: i(r).b("fade"),
      persisted: ""
    }, {
      default: re(() => [
        ze(Q("div", {
          ref_key: "instance",
          ref: a,
          class: A([i(r).e("bar"), i(r).is(i(p).key)]),
          onMousedown: d
        }, [
          Q("div", {
            ref_key: "thumb",
            ref: o,
            class: A(i(r).e("thumb")),
            style: Ge(i(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [wt, S.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var pi = /* @__PURE__ */ Ae(Vw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
const Hw = Me({
  always: {
    type: Boolean,
    default: !0
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
}), Ww = /* @__PURE__ */ ce({
  __name: "bar",
  props: Hw,
  setup(e, { expose: t }) {
    const n = e, r = x(0), a = x(0);
    return t({
      handleScroll: (l) => {
        if (l) {
          const s = l.offsetHeight - sr, u = l.offsetWidth - sr;
          a.value = l.scrollTop * 100 / s * n.ratioY, r.value = l.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (l, s) => (O(), K(Ne, null, [
      J(pi, {
        move: r.value,
        ratio: l.ratioX,
        size: l.width,
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      J(pi, {
        move: a.value,
        ratio: l.ratioY,
        size: l.height,
        vertical: "",
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var jw = /* @__PURE__ */ Ae(Ww, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
const Kw = Me({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: {
    type: Boolean,
    default: !1
  },
  wrapStyle: {
    type: be([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
}), qw = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(it)
}, Ko = "ElScrollbar", Yw = ce({
  name: Ko
}), Uw = /* @__PURE__ */ ce({
  ...Yw,
  props: Kw,
  emits: qw,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = we("scrollbar");
    let o, l;
    const s = x(), u = x(), c = x(), f = x("0"), p = x("0"), m = x(), h = x(1), v = x(1), d = E(() => {
      const $ = {};
      return r.height && ($.height = Yr(r.height)), r.maxHeight && ($.maxHeight = Yr(r.maxHeight)), [r.wrapStyle, $];
    }), y = E(() => [
      r.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !r.native }
    ]), w = E(() => [a.e("view"), r.viewClass]), C = () => {
      var $;
      u.value && (($ = m.value) == null || $.handleScroll(u.value), n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function g($, T) {
      Bt($) ? u.value.scrollTo($) : it($) && it(T) && u.value.scrollTo($, T);
    }
    const b = ($) => {
      if (!it($)) {
        nt(Ko, "value must be a number");
        return;
      }
      u.value.scrollTop = $;
    }, k = ($) => {
      if (!it($)) {
        nt(Ko, "value must be a number");
        return;
      }
      u.value.scrollLeft = $;
    }, S = () => {
      if (!u.value)
        return;
      const $ = u.value.offsetHeight - sr, T = u.value.offsetWidth - sr, R = $ ** 2 / u.value.scrollHeight, z = T ** 2 / u.value.scrollWidth, V = Math.max(R, r.minSize), F = Math.max(z, r.minSize);
      h.value = R / ($ - R) / (V / ($ - V)), v.value = z / (T - z) / (F / (T - F)), p.value = V + sr < $ ? `${V}px` : "", f.value = F + sr < T ? `${F}px` : "";
    };
    return me(() => r.noresize, ($) => {
      $ ? (o == null || o(), l == null || l()) : ({ stop: o } = Nn(c, S), l = hn("resize", S));
    }, { immediate: !0 }), me(() => [r.maxHeight, r.height], () => {
      r.native || Te(() => {
        var $;
        S(), u.value && (($ = m.value) == null || $.handleScroll(u.value));
      });
    }), vt(mc, Ut({
      scrollbarElement: s,
      wrapElement: u
    })), Xe(() => {
      r.native || Te(() => {
        S();
      });
    }), dl(() => S()), t({
      wrapRef: u,
      update: S,
      scrollTo: g,
      setScrollTop: b,
      setScrollLeft: k,
      handleScroll: C
    }), ($, T) => (O(), K("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: A(i(a).b())
    }, [
      Q("div", {
        ref_key: "wrapRef",
        ref: u,
        class: A(i(y)),
        style: Ge(i(d)),
        onScroll: C
      }, [
        (O(), fe(gt($.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: A(i(w)),
          style: Ge($.viewStyle)
        }, {
          default: re(() => [
            $e($.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      $.native ? de("v-if", !0) : (O(), fe(jw, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: p.value,
        width: f.value,
        always: $.always,
        "ratio-x": v.value,
        "ratio-y": h.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Gw = /* @__PURE__ */ Ae(Uw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
const Tr = Vt(Gw), Hl = Symbol("popper"), gc = Symbol("popperContent"), Xw = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], bc = Me({
  role: {
    type: String,
    values: Xw,
    default: "tooltip"
  }
}), Zw = ce({
  name: "ElPopper",
  inheritAttrs: !1
}), Jw = /* @__PURE__ */ ce({
  ...Zw,
  props: bc,
  setup(e, { expose: t }) {
    const n = e, r = x(), a = x(), o = x(), l = x(), s = E(() => n.role), u = {
      triggerRef: r,
      popperInstanceRef: a,
      contentRef: o,
      referenceRef: l,
      role: s
    };
    return t(u), vt(Hl, u), (c, f) => $e(c.$slots, "default");
  }
});
var Qw = /* @__PURE__ */ Ae(Jw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const yc = Me({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), e2 = ce({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), t2 = /* @__PURE__ */ ce({
  ...e2,
  props: yc,
  setup(e, { expose: t }) {
    const n = e, r = we("popper"), { arrowOffset: a, arrowRef: o, arrowStyle: l } = Oe(gc, void 0);
    return me(() => n.arrowOffset, (s) => {
      a.value = s;
    }), zt(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (s, u) => (O(), K("span", {
      ref_key: "arrowRef",
      ref: o,
      class: A(i(r).e("arrow")),
      style: Ge(i(l)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var n2 = /* @__PURE__ */ Ae(t2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const bo = "ElOnlyChild", r2 = ce({
  name: bo,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const a = Oe(dc), o = C1((r = a == null ? void 0 : a.setForwardRef) != null ? r : fr);
    return () => {
      var l;
      const s = (l = t.default) == null ? void 0 : l.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return nt(bo, "requires exact only one valid child."), null;
      const u = wc(s);
      return u ? ze(Id(u, n), [[o]]) : (nt(bo, "no valid child node found"), null);
    };
  }
});
function wc(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Bt(n))
      switch (n.type) {
        case Ji:
          continue;
        case Zi:
        case "svg":
          return vi(n);
        case Ne:
          return wc(n.children);
        default:
          return n;
      }
    return vi(n);
  }
  return null;
}
function vi(e) {
  const t = we("only-child");
  return J("span", {
    class: t.e("content")
  }, [e]);
}
const Cc = Me({
  virtualRef: {
    type: be(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: be(Function)
  },
  onMouseleave: {
    type: be(Function)
  },
  onClick: {
    type: be(Function)
  },
  onKeydown: {
    type: be(Function)
  },
  onFocus: {
    type: be(Function)
  },
  onBlur: {
    type: be(Function)
  },
  onContextmenu: {
    type: be(Function)
  },
  id: String,
  open: Boolean
}), a2 = ce({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), o2 = /* @__PURE__ */ ce({
  ...a2,
  props: Cc,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: a } = Oe(Hl, void 0);
    w1(a);
    const o = E(() => s.value ? n.id : void 0), l = E(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = E(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), u = E(() => s.value ? `${n.open}` : void 0);
    let c;
    return Xe(() => {
      me(() => n.virtualRef, (f) => {
        f && (a.value = vn(f));
      }, {
        immediate: !0
      }), me(a, (f, p) => {
        c == null || c(), c = void 0, vr(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var h;
          const v = n[m];
          v && (f.addEventListener(m.slice(2).toLowerCase(), v), (h = p == null ? void 0 : p.removeEventListener) == null || h.call(p, m.slice(2).toLowerCase(), v));
        }), c = me([o, l, s, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, v) => {
            eo(m[v]) ? f.removeAttribute(h) : f.setAttribute(h, m[v]);
          });
        }, { immediate: !0 })), vr(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => p.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), zt(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: a
    }), (f, p) => f.virtualTriggering ? de("v-if", !0) : (O(), fe(i(r2), Pt({ key: 0 }, f.$attrs, {
      "aria-controls": i(o),
      "aria-describedby": i(l),
      "aria-expanded": i(u),
      "aria-haspopup": i(s)
    }), {
      default: re(() => [
        $e(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var l2 = /* @__PURE__ */ Ae(o2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
const yo = "focus-trap.focus-after-trapped", wo = "focus-trap.focus-after-released", s2 = "focus-trap.focusout-prevented", hi = {
  cancelable: !0,
  bubbles: !1
}, i2 = {
  cancelable: !0,
  bubbles: !1
}, mi = "focusAfterTrapped", gi = "focusAfterReleased", u2 = Symbol("elFocusTrap"), Wl = x(), so = x(0), jl = x(0);
let ha = 0;
const Sc = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, bi = (e, t) => {
  for (const n of e)
    if (!c2(n, t))
      return n;
}, c2 = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, d2 = (e) => {
  const t = Sc(e), n = bi(t, e), r = bi(t.reverse(), e);
  return [n, r];
}, f2 = (e) => e instanceof HTMLInputElement && "select" in e, Pn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), jl.value = window.performance.now(), e !== n && f2(e) && t && e.select();
  }
};
function yi(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const p2 = () => {
  let e = [];
  return {
    push: (r) => {
      const a = e[0];
      a && r !== a && a.pause(), e = yi(e, r), e.unshift(r);
    },
    remove: (r) => {
      var a, o;
      e = yi(e, r), (o = (a = e[0]) == null ? void 0 : a.resume) == null || o.call(a);
    }
  };
}, v2 = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (Pn(r, t), document.activeElement !== n)
      return;
}, wi = p2(), h2 = () => so.value > jl.value, ma = () => {
  Wl.value = "pointer", so.value = window.performance.now();
}, Ci = () => {
  Wl.value = "keyboard", so.value = window.performance.now();
}, m2 = () => (Xe(() => {
  ha === 0 && (document.addEventListener("mousedown", ma), document.addEventListener("touchstart", ma), document.addEventListener("keydown", Ci)), ha++;
}), zt(() => {
  ha--, ha <= 0 && (document.removeEventListener("mousedown", ma), document.removeEventListener("touchstart", ma), document.removeEventListener("keydown", Ci));
}), {
  focusReason: Wl,
  lastUserFocusTimestamp: so,
  lastAutomatedFocusTimestamp: jl
}), ga = (e) => new CustomEvent(s2, {
  ...i2,
  detail: e
}), g2 = ce({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    mi,
    gi,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let r, a;
    const { focusReason: o } = m2();
    m1((v) => {
      e.trapped && !l.paused && t("release-requested", v);
    });
    const l = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, s = (v) => {
      if (!e.loop && !e.trapped || l.paused)
        return;
      const { key: d, altKey: y, ctrlKey: w, metaKey: C, currentTarget: g, shiftKey: b } = v, { loop: k } = e, S = d === De.tab && !y && !w && !C, $ = document.activeElement;
      if (S && $) {
        const T = g, [R, z] = d2(T);
        if (R && z) {
          if (!b && $ === z) {
            const F = ga({
              focusReason: o.value
            });
            t("focusout-prevented", F), F.defaultPrevented || (v.preventDefault(), k && Pn(R, !0));
          } else if (b && [R, T].includes($)) {
            const F = ga({
              focusReason: o.value
            });
            t("focusout-prevented", F), F.defaultPrevented || (v.preventDefault(), k && Pn(z, !0));
          }
        } else if ($ === T) {
          const F = ga({
            focusReason: o.value
          });
          t("focusout-prevented", F), F.defaultPrevented || v.preventDefault();
        }
      }
    };
    vt(u2, {
      focusTrapRef: n,
      onKeydown: s
    }), me(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: !0 }), me([n], ([v], [d]) => {
      v && (v.addEventListener("keydown", s), v.addEventListener("focusin", f), v.addEventListener("focusout", p)), d && (d.removeEventListener("keydown", s), d.removeEventListener("focusin", f), d.removeEventListener("focusout", p));
    });
    const u = (v) => {
      t(mi, v);
    }, c = (v) => t(gi, v), f = (v) => {
      const d = i(n);
      if (!d)
        return;
      const y = v.target, w = v.relatedTarget, C = y && d.contains(y);
      e.trapped || w && d.contains(w) || (r = w), C && t("focusin", v), !l.paused && e.trapped && (C ? a = y : Pn(a, !0));
    }, p = (v) => {
      const d = i(n);
      if (!(l.paused || !d))
        if (e.trapped) {
          const y = v.relatedTarget;
          !eo(y) && !d.contains(y) && setTimeout(() => {
            if (!l.paused && e.trapped) {
              const w = ga({
                focusReason: o.value
              });
              t("focusout-prevented", w), w.defaultPrevented || Pn(a, !0);
            }
          }, 0);
        } else {
          const y = v.target;
          y && d.contains(y) || t("focusout", v);
        }
    };
    async function m() {
      await Te();
      const v = i(n);
      if (v) {
        wi.push(l);
        const d = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = d, !v.contains(d)) {
          const w = new Event(yo, hi);
          v.addEventListener(yo, u), v.dispatchEvent(w), w.defaultPrevented || Te(() => {
            let C = e.focusStartEl;
            kt(C) || (Pn(C), document.activeElement !== C && (C = "first")), C === "first" && v2(Sc(v), !0), (document.activeElement === d || C === "container") && Pn(v);
          });
        }
      }
    }
    function h() {
      const v = i(n);
      if (v) {
        v.removeEventListener(yo, u);
        const d = new CustomEvent(wo, {
          ...hi,
          detail: {
            focusReason: o.value
          }
        });
        v.addEventListener(wo, c), v.dispatchEvent(d), !d.defaultPrevented && (o.value == "keyboard" || !h2() || v.contains(document.activeElement)) && Pn(r ?? document.body), v.removeEventListener(wo, u), wi.remove(l);
      }
    }
    return Xe(() => {
      e.trapped && m(), me(() => e.trapped, (v) => {
        v ? m() : h();
      });
    }), zt(() => {
      e.trapped && h();
    }), {
      onKeydown: s
    };
  }
});
function b2(e, t, n, r, a, o) {
  return $e(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var y2 = /* @__PURE__ */ Ae(g2, [["render", b2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const w2 = ["fixed", "absolute"], C2 = Me({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: be(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: ro,
    default: "bottom"
  },
  popperOptions: {
    type: be(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: w2,
    default: "absolute"
  }
}), kc = Me({
  ...C2,
  id: String,
  style: {
    type: be([String, Array, Object])
  },
  className: {
    type: be([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: be([String, Array, Object])
  },
  popperStyle: {
    type: be([String, Array, Object])
  },
  referenceEl: {
    type: be(Object)
  },
  triggerTargetEl: {
    type: be(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), S2 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, k2 = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: a } = e, o = {
    placement: n,
    strategy: r,
    ...a,
    modifiers: [..._2(e), ...t]
  };
  return E2(o, a == null ? void 0 : a.modifiers), o;
}, $2 = (e) => {
  if (at)
    return vn(e);
};
function _2(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function E2(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const T2 = 0, O2 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: a } = Oe(Hl, void 0), o = x(), l = x(), s = E(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = E(() => {
    var w;
    const C = i(o), g = (w = i(l)) != null ? w : T2;
    return {
      name: "arrow",
      enabled: !Qg(C),
      options: {
        element: C,
        padding: g
      }
    };
  }), c = E(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...k2(e, [
      i(u),
      i(s)
    ])
  })), f = E(() => $2(e.referenceEl) || i(r)), { attributes: p, state: m, styles: h, update: v, forceUpdate: d, instanceRef: y } = p1(f, n, c);
  return me(y, (w) => t.value = w), Xe(() => {
    me(() => {
      var w;
      return (w = i(f)) == null ? void 0 : w.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: p,
    arrowRef: o,
    contentRef: n,
    instanceRef: y,
    state: m,
    styles: h,
    role: a,
    forceUpdate: d,
    update: v
  };
}, P2 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: a } = fc(), o = we("popper"), l = E(() => i(t).popper), s = x(e.zIndex || a()), u = E(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), c = E(() => [
    { zIndex: i(s) },
    i(n).popper,
    e.popperStyle || {}
  ]), f = E(() => r.value === "dialog" ? "false" : void 0), p = E(() => i(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: l,
    contentClass: u,
    contentStyle: c,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = e.zIndex || a();
    }
  };
}, x2 = (e, t) => {
  const n = x(!1), r = x();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var f;
      ((f = c.detail) == null ? void 0 : f.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (r.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, M2 = ce({
  name: "ElPopperContent"
}), A2 = /* @__PURE__ */ ce({
  ...M2,
  props: kc,
  emits: S2,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: a,
      trapped: o,
      onFocusAfterReleased: l,
      onFocusAfterTrapped: s,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = x2(r, n), { attributes: p, arrowRef: m, contentRef: h, styles: v, instanceRef: d, role: y, update: w } = O2(r), {
      ariaModal: C,
      arrowStyle: g,
      contentAttrs: b,
      contentClass: k,
      contentStyle: S,
      updateZIndex: $
    } = P2(r, {
      styles: v,
      attributes: p,
      role: y
    }), T = Oe(Xn, void 0), R = x();
    vt(gc, {
      arrowStyle: g,
      arrowRef: m,
      arrowOffset: R
    }), T && (T.addInputId || T.removeInputId) && vt(Xn, {
      ...T,
      addInputId: fr,
      removeInputId: fr
    });
    let z;
    const V = (N = !0) => {
      w(), N && $();
    }, F = () => {
      V(!1), r.visible && r.focusOnShow ? o.value = !0 : r.visible === !1 && (o.value = !1);
    };
    return Xe(() => {
      me(() => r.triggerTargetEl, (N, B) => {
        z == null || z(), z = void 0;
        const W = i(N || h.value), q = i(B || h.value);
        vr(W) && (z = me([y, () => r.ariaLabel, C, () => r.id], (M) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, _) => {
            eo(M[_]) ? W.removeAttribute(H) : W.setAttribute(H, M[_]);
          });
        }, { immediate: !0 })), q !== W && vr(q) && ["role", "aria-label", "aria-modal", "id"].forEach((M) => {
          q.removeAttribute(M);
        });
      }, { immediate: !0 }), me(() => r.visible, F, { immediate: !0 });
    }), zt(() => {
      z == null || z(), z = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: d,
      updatePopper: V,
      contentStyle: S
    }), (N, B) => (O(), K("div", Pt({
      ref_key: "contentRef",
      ref: h
    }, i(b), {
      style: i(S),
      class: i(k),
      tabindex: "-1",
      onMouseenter: B[0] || (B[0] = (W) => N.$emit("mouseenter", W)),
      onMouseleave: B[1] || (B[1] = (W) => N.$emit("mouseleave", W))
    }), [
      J(i(y2), {
        trapped: i(o),
        "trap-on-focus-in": !0,
        "focus-trap-el": i(h),
        "focus-start-el": i(a),
        onFocusAfterTrapped: i(s),
        onFocusAfterReleased: i(l),
        onFocusin: i(u),
        onFocusoutPrevented: i(c),
        onReleaseRequested: i(f)
      }, {
        default: re(() => [
          $e(N.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var N2 = /* @__PURE__ */ Ae(A2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const R2 = Vt(Qw), io = Symbol("elTooltip"), uo = Me({
  ...y1,
  ...kc,
  appendTo: {
    type: be([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: be(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean
}), $c = Me({
  ...Cc,
  disabled: Boolean,
  trigger: {
    type: be([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: be(Array),
    default: () => [De.enter, De.space]
  }
}), {
  useModelToggleProps: I2,
  useModelToggleEmits: D2,
  useModelToggle: L2
} = Uu("visible"), F2 = Me({
  ...bc,
  ...I2,
  ...uo,
  ...$c,
  ...yc,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), B2 = [
  ...D2,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], z2 = (e, t) => tt(e) ? e.includes(t) : e === t, ar = (e, t, n) => (r) => {
  z2(i(e), t) && n(r);
}, V2 = ce({
  name: "ElTooltipTrigger"
}), H2 = /* @__PURE__ */ ce({
  ...V2,
  props: $c,
  setup(e, { expose: t }) {
    const n = e, r = we("tooltip"), { controlled: a, id: o, open: l, onOpen: s, onClose: u, onToggle: c } = Oe(io, void 0), f = x(null), p = () => {
      if (i(a) || n.disabled)
        return !0;
    }, m = St(n, "trigger"), h = pn(p, ar(m, "hover", s)), v = pn(p, ar(m, "hover", u)), d = pn(p, ar(m, "click", (b) => {
      b.button === 0 && c(b);
    })), y = pn(p, ar(m, "focus", s)), w = pn(p, ar(m, "focus", u)), C = pn(p, ar(m, "contextmenu", (b) => {
      b.preventDefault(), c(b);
    })), g = pn(p, (b) => {
      const { code: k } = b;
      n.triggerKeys.includes(k) && (b.preventDefault(), c(b));
    });
    return t({
      triggerRef: f
    }), (b, k) => (O(), fe(i(l2), {
      id: i(o),
      "virtual-ref": b.virtualRef,
      open: i(l),
      "virtual-triggering": b.virtualTriggering,
      class: A(i(r).e("trigger")),
      onBlur: i(w),
      onClick: i(d),
      onContextmenu: i(C),
      onFocus: i(y),
      onMouseenter: i(h),
      onMouseleave: i(v),
      onKeydown: i(g)
    }, {
      default: re(() => [
        $e(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var W2 = /* @__PURE__ */ Ae(H2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const j2 = ce({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), K2 = /* @__PURE__ */ ce({
  ...j2,
  props: uo,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = uc(), a = we("tooltip"), o = x(null), l = x(!1), {
      controlled: s,
      id: u,
      open: c,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: h,
      onHide: v,
      onBeforeShow: d,
      onBeforeHide: y
    } = Oe(io, void 0), w = E(() => n.transition || `${a.namespace.value}-fade-in-linear`), C = E(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    zt(() => {
      l.value = !0;
    });
    const g = E(() => i(C) ? !0 : i(c)), b = E(() => n.disabled ? !1 : i(c)), k = E(() => n.appendTo || r.value), S = E(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), $ = E(() => !i(c)), T = () => {
      v();
    }, R = () => {
      if (i(s))
        return !0;
    }, z = pn(R, () => {
      n.enterable && i(f) === "hover" && m();
    }), V = pn(R, () => {
      i(f) === "hover" && p();
    }), F = () => {
      var M, H;
      (H = (M = o.value) == null ? void 0 : M.updatePopper) == null || H.call(M), d == null || d();
    }, N = () => {
      y == null || y();
    }, B = () => {
      h(), q = au(E(() => {
        var M;
        return (M = o.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (i(s))
          return;
        i(f) !== "hover" && p();
      });
    }, W = () => {
      n.virtualTriggering || p();
    };
    let q;
    return me(() => i(c), (M) => {
      M || q == null || q();
    }, {
      flush: "post"
    }), me(() => n.content, () => {
      var M, H;
      (H = (M = o.value) == null ? void 0 : M.updatePopper) == null || H.call(M);
    }), t({
      contentRef: o
    }), (M, H) => (O(), fe(Dd, {
      disabled: !M.teleported,
      to: i(k)
    }, [
      J(ur, {
        name: i(w),
        onAfterLeave: T,
        onBeforeEnter: F,
        onAfterEnter: B,
        onBeforeLeave: N
      }, {
        default: re(() => [
          i(g) ? ze((O(), fe(i(N2), Pt({
            key: 0,
            id: i(u),
            ref_key: "contentRef",
            ref: o
          }, M.$attrs, {
            "aria-label": M.ariaLabel,
            "aria-hidden": i($),
            "boundaries-padding": M.boundariesPadding,
            "fallback-placements": M.fallbackPlacements,
            "gpu-acceleration": M.gpuAcceleration,
            offset: M.offset,
            placement: M.placement,
            "popper-options": M.popperOptions,
            strategy: M.strategy,
            effect: M.effect,
            enterable: M.enterable,
            pure: M.pure,
            "popper-class": M.popperClass,
            "popper-style": [M.popperStyle, i(S)],
            "reference-el": M.referenceEl,
            "trigger-target-el": M.triggerTargetEl,
            visible: i(b),
            "z-index": M.zIndex,
            onMouseenter: i(z),
            onMouseleave: i(V),
            onBlur: W,
            onClose: i(p)
          }), {
            default: re(() => [
              l.value ? de("v-if", !0) : $e(M.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [wt, i(b)]
          ]) : de("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var q2 = /* @__PURE__ */ Ae(K2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const Y2 = ["innerHTML"], U2 = { key: 1 }, G2 = ce({
  name: "ElTooltip"
}), X2 = /* @__PURE__ */ ce({
  ...G2,
  props: F2,
  emits: B2,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    b1();
    const a = oo(), o = x(), l = x(), s = () => {
      var w;
      const C = i(o);
      C && ((w = C.popperInstanceRef) == null || w.update());
    }, u = x(!1), c = x(), { show: f, hide: p, hasUpdateHandler: m } = L2({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: v } = cc({
      showAfter: St(r, "showAfter"),
      hideAfter: St(r, "hideAfter"),
      autoClose: St(r, "autoClose"),
      open: f,
      close: p
    }), d = E(() => Jt(r.visible) && !m.value);
    vt(io, {
      controlled: d,
      id: a,
      open: Ld(u),
      trigger: St(r, "trigger"),
      onOpen: (w) => {
        h(w);
      },
      onClose: (w) => {
        v(w);
      },
      onToggle: (w) => {
        i(u) ? v(w) : h(w);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: s
    }), me(() => r.disabled, (w) => {
      w && u.value && (u.value = !1);
    });
    const y = () => {
      var w, C;
      const g = (C = (w = l.value) == null ? void 0 : w.contentRef) == null ? void 0 : C.popperContentRef;
      return g && g.contains(document.activeElement);
    };
    return Fd(() => u.value && p()), t({
      popperRef: o,
      contentRef: l,
      isFocusInsideContent: y,
      updatePopper: s,
      onOpen: h,
      onClose: v,
      hide: p
    }), (w, C) => (O(), fe(i(R2), {
      ref_key: "popperRef",
      ref: o,
      role: w.role
    }, {
      default: re(() => [
        J(W2, {
          disabled: w.disabled,
          trigger: w.trigger,
          "trigger-keys": w.triggerKeys,
          "virtual-ref": w.virtualRef,
          "virtual-triggering": w.virtualTriggering
        }, {
          default: re(() => [
            w.$slots.default ? $e(w.$slots, "default", { key: 0 }) : de("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        J(q2, {
          ref_key: "contentRef",
          ref: l,
          "aria-label": w.ariaLabel,
          "boundaries-padding": w.boundariesPadding,
          content: w.content,
          disabled: w.disabled,
          effect: w.effect,
          enterable: w.enterable,
          "fallback-placements": w.fallbackPlacements,
          "hide-after": w.hideAfter,
          "gpu-acceleration": w.gpuAcceleration,
          offset: w.offset,
          persistent: w.persistent,
          "popper-class": w.popperClass,
          "popper-style": w.popperStyle,
          placement: w.placement,
          "popper-options": w.popperOptions,
          pure: w.pure,
          "raw-content": w.rawContent,
          "reference-el": w.referenceEl,
          "trigger-target-el": w.triggerTargetEl,
          "show-after": w.showAfter,
          strategy: w.strategy,
          teleported: w.teleported,
          transition: w.transition,
          "virtual-triggering": w.virtualTriggering,
          "z-index": w.zIndex,
          "append-to": w.appendTo
        }, {
          default: re(() => [
            $e(w.$slots, "content", {}, () => [
              w.rawContent ? (O(), K("span", {
                key: 0,
                innerHTML: w.content
              }, null, 8, Y2)) : (O(), K("span", U2, ye(w.content), 1))
            ]),
            w.showArrow ? (O(), fe(i(n2), {
              key: 0,
              "arrow-offset": w.arrowOffset
            }, null, 8, ["arrow-offset"])) : de("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Z2 = /* @__PURE__ */ Ae(X2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const Zr = Vt(Z2), _c = Symbol("buttonGroupContextKey"), J2 = (e, t) => {
  Yu({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, E(() => e.type === "text"));
  const n = Oe(_c, void 0), r = P1("button"), { form: a } = _n(), o = Yt(E(() => n == null ? void 0 : n.size)), l = ia(), s = x(), u = Jn(), c = E(() => e.type || (n == null ? void 0 : n.type) || ""), f = E(() => {
    var v, d, y;
    return (y = (d = e.autoInsertSpace) != null ? d : (v = r.value) == null ? void 0 : v.autoInsertSpace) != null ? y : !1;
  }), p = E(() => e.tag === "button" ? {
    ariaDisabled: l.value || e.loading,
    disabled: l.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = E(() => {
    var v;
    const d = (v = u.default) == null ? void 0 : v.call(u);
    if (f.value && (d == null ? void 0 : d.length) === 1) {
      const y = d[0];
      if ((y == null ? void 0 : y.type) === Zi) {
        const w = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(w.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: l,
    _size: o,
    _type: c,
    _ref: s,
    _props: p,
    shouldAddSpace: m,
    handleClick: (v) => {
      e.nativeType === "reset" && (a == null || a.resetFields()), t("click", v);
    }
  };
}, Q2 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], eC = ["button", "submit", "reset"], qo = Me({
  size: $n,
  disabled: Boolean,
  type: {
    type: String,
    values: Q2,
    default: ""
  },
  icon: {
    type: an
  },
  nativeType: {
    type: String,
    values: eC,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: an,
    default: () => oa
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: be([String, Object]),
    default: "button"
  }
}), tC = {
  click: (e) => e instanceof MouseEvent
};
function $t(e, t) {
  nC(e) && (e = "100%");
  var n = rC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function ba(e) {
  return Math.min(1, Math.max(0, e));
}
function nC(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function rC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ec(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function ya(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Vn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function aC(e, t, n) {
  return {
    r: $t(e, 255) * 255,
    g: $t(t, 255) * 255,
    b: $t(n, 255) * 255
  };
}
function Si(e, t, n) {
  e = $t(e, 255), t = $t(t, 255), n = $t(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, l = 0, s = (r + a) / 2;
  if (r === a)
    l = 0, o = 0;
  else {
    var u = r - a;
    switch (l = s > 0.5 ? u / (2 - r - a) : u / (r + a), r) {
      case e:
        o = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / u + 2;
        break;
      case n:
        o = (e - t) / u + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, l: s };
}
function Co(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function oC(e, t, n) {
  var r, a, o;
  if (e = $t(e, 360), t = $t(t, 100), n = $t(n, 100), t === 0)
    a = n, o = n, r = n;
  else {
    var l = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - l;
    r = Co(s, l, e + 1 / 3), a = Co(s, l, e), o = Co(s, l, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: o * 255 };
}
function ki(e, t, n) {
  e = $t(e, 255), t = $t(t, 255), n = $t(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), o = 0, l = r, s = r - a, u = r === 0 ? 0 : s / r;
  if (r === a)
    o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / s + 2;
        break;
      case n:
        o = (e - t) / s + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: u, v: l };
}
function lC(e, t, n) {
  e = $t(e, 360) * 6, t = $t(t, 100), n = $t(n, 100);
  var r = Math.floor(e), a = e - r, o = n * (1 - t), l = n * (1 - a * t), s = n * (1 - (1 - a) * t), u = r % 6, c = [n, l, o, o, s, n][u], f = [s, n, n, l, o, o][u], p = [o, o, s, n, n, l][u];
  return { r: c * 255, g: f * 255, b: p * 255 };
}
function $i(e, t, n, r) {
  var a = [
    Vn(Math.round(e).toString(16)),
    Vn(Math.round(t).toString(16)),
    Vn(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function sC(e, t, n, r, a) {
  var o = [
    Vn(Math.round(e).toString(16)),
    Vn(Math.round(t).toString(16)),
    Vn(Math.round(n).toString(16)),
    Vn(iC(r))
  ];
  return a && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function iC(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function _i(e) {
  return Dt(e) / 255;
}
function Dt(e) {
  return parseInt(e, 16);
}
function uC(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var Yo = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function cC(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, l = !1, s = !1;
  return typeof e == "string" && (e = pC(e)), typeof e == "object" && (dn(e.r) && dn(e.g) && dn(e.b) ? (t = aC(e.r, e.g, e.b), l = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : dn(e.h) && dn(e.s) && dn(e.v) ? (r = ya(e.s), a = ya(e.v), t = lC(e.h, r, a), l = !0, s = "hsv") : dn(e.h) && dn(e.s) && dn(e.l) && (r = ya(e.s), o = ya(e.l), t = oC(e.h, r, o), l = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ec(n), {
    ok: l,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var dC = "[-\\+]?\\d+%?", fC = "[-\\+]?\\d*\\.\\d+%?", Mn = "(?:".concat(fC, ")|(?:").concat(dC, ")"), So = "[\\s|\\(]+(".concat(Mn, ")[,|\\s]+(").concat(Mn, ")[,|\\s]+(").concat(Mn, ")\\s*\\)?"), ko = "[\\s|\\(]+(".concat(Mn, ")[,|\\s]+(").concat(Mn, ")[,|\\s]+(").concat(Mn, ")[,|\\s]+(").concat(Mn, ")\\s*\\)?"), Xt = {
  CSS_UNIT: new RegExp(Mn),
  rgb: new RegExp("rgb" + So),
  rgba: new RegExp("rgba" + ko),
  hsl: new RegExp("hsl" + So),
  hsla: new RegExp("hsla" + ko),
  hsv: new RegExp("hsv" + So),
  hsva: new RegExp("hsva" + ko),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function pC(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (Yo[e])
    e = Yo[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Xt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Xt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Xt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Xt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Xt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Xt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Xt.hex8.exec(e), n ? {
    r: Dt(n[1]),
    g: Dt(n[2]),
    b: Dt(n[3]),
    a: _i(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Xt.hex6.exec(e), n ? {
    r: Dt(n[1]),
    g: Dt(n[2]),
    b: Dt(n[3]),
    format: t ? "name" : "hex"
  } : (n = Xt.hex4.exec(e), n ? {
    r: Dt(n[1] + n[1]),
    g: Dt(n[2] + n[2]),
    b: Dt(n[3] + n[3]),
    a: _i(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Xt.hex3.exec(e), n ? {
    r: Dt(n[1] + n[1]),
    g: Dt(n[2] + n[2]),
    b: Dt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function dn(e) {
  return !!Xt.CSS_UNIT.exec(String(e));
}
var vC = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = uC(t)), this.originalInput = t;
      var a = cC(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, a, o = t.r / 255, l = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? r = l / 12.92 : r = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? a = s / 12.92 : a = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ec(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = ki(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = ki(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Si(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Si(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), $i(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), sC(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round($t(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round($t(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + $i(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Yo); n < r.length; n++) {
        var a = r[n], o = a[0], l = a[1];
        if (t === l)
          return o;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, a = this.a < 1 && this.a >= 0, o = !n && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = ba(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = ba(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = ba(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = ba(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), a = new e(t).toRgb(), o = n / 100, l = {
        r: (a.r - r.r) * o + r.r,
        g: (a.g - r.g) * o + r.g,
        b: (a.b - r.b) * o + r.b,
        a: (a.a - r.a) * o + r.a
      };
      return new e(l);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), a = 360 / n, o = [this];
      for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + a) % 360, o.push(new e(r));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, a = n.s, o = n.v, l = [], s = 1 / t; t--; )
        l.push(new e({ h: r, s: a, v: o })), o = (o + s) % 1;
      return l;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), a = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / a,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / a,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, a = [this], o = 360 / t, l = 1; l < t; l++)
        a.push(new e({ h: (r + l * o) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function On(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function hC(e) {
  const t = ia(), n = we("button");
  return E(() => {
    let r = {};
    const a = e.color;
    if (a) {
      const o = new vC(a), l = e.dark ? o.tint(20).toString() : On(o, 20);
      if (e.plain)
        r = n.cssVarBlock({
          "bg-color": e.dark ? On(o, 90) : o.tint(90).toString(),
          "text-color": a,
          "border-color": e.dark ? On(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": a,
          "hover-border-color": a,
          "active-bg-color": l,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": l
        }), t.value && (r[n.cssVarBlockName("disabled-bg-color")] = e.dark ? On(o, 90) : o.tint(90).toString(), r[n.cssVarBlockName("disabled-text-color")] = e.dark ? On(o, 50) : o.tint(50).toString(), r[n.cssVarBlockName("disabled-border-color")] = e.dark ? On(o, 80) : o.tint(80).toString());
      else {
        const s = e.dark ? On(o, 30) : o.tint(30).toString(), u = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (r = n.cssVarBlock({
          "bg-color": a,
          "text-color": u,
          "border-color": a,
          "hover-bg-color": s,
          "hover-text-color": u,
          "hover-border-color": s,
          "active-bg-color": l,
          "active-border-color": l
        }), t.value) {
          const c = e.dark ? On(o, 50) : o.tint(50).toString();
          r[n.cssVarBlockName("disabled-bg-color")] = c, r[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, r[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return r;
  });
}
const mC = ce({
  name: "ElButton"
}), gC = /* @__PURE__ */ ce({
  ...mC,
  props: qo,
  emits: tC,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = hC(r), o = we("button"), { _ref: l, _size: s, _type: u, _disabled: c, _props: f, shouldAddSpace: p, handleClick: m } = J2(r, n);
    return t({
      ref: l,
      size: s,
      type: u,
      disabled: c,
      shouldAddSpace: p
    }), (h, v) => (O(), fe(gt(h.tag), Pt({
      ref_key: "_ref",
      ref: l
    }, i(f), {
      class: [
        i(o).b(),
        i(o).m(i(u)),
        i(o).m(i(s)),
        i(o).is("disabled", i(c)),
        i(o).is("loading", h.loading),
        i(o).is("plain", h.plain),
        i(o).is("round", h.round),
        i(o).is("circle", h.circle),
        i(o).is("text", h.text),
        i(o).is("link", h.link),
        i(o).is("has-bg", h.bg)
      ],
      style: i(a),
      onClick: i(m)
    }), {
      default: re(() => [
        h.loading ? (O(), K(Ne, { key: 0 }, [
          h.$slots.loading ? $e(h.$slots, "loading", { key: 0 }) : (O(), fe(i(Ie), {
            key: 1,
            class: A(i(o).is("loading"))
          }, {
            default: re(() => [
              (O(), fe(gt(h.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : h.icon || h.$slots.icon ? (O(), fe(i(Ie), { key: 1 }, {
          default: re(() => [
            h.icon ? (O(), fe(gt(h.icon), { key: 0 })) : $e(h.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : de("v-if", !0),
        h.$slots.default ? (O(), K("span", {
          key: 2,
          class: A({ [i(o).em("text", "expand")]: i(p) })
        }, [
          $e(h.$slots, "default")
        ], 2)) : de("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var bC = /* @__PURE__ */ Ae(gC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
const yC = {
  size: qo.size,
  type: qo.type
}, wC = ce({
  name: "ElButtonGroup"
}), CC = /* @__PURE__ */ ce({
  ...wC,
  props: yC,
  setup(e) {
    const t = e;
    vt(_c, Ut({
      size: St(t, "size"),
      type: St(t, "type")
    }));
    const n = we("button");
    return (r, a) => (O(), K("div", {
      class: A(`${i(n).b("group")}`)
    }, [
      $e(r.$slots, "default")
    ], 2));
  }
});
var Tc = /* @__PURE__ */ Ae(CC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
const gn = Vt(bC, {
  ButtonGroup: Tc
});
kn(Tc);
var En = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ln(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Oc = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", l = "second", s = "minute", u = "hour", c = "day", f = "week", p = "month", m = "quarter", h = "year", v = "date", d = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var B = ["th", "st", "nd", "rd"], W = N % 100;
      return "[" + N + (B[(W - 20) % 10] || B[W] || B[0]) + "]";
    } }, g = function(N, B, W) {
      var q = String(N);
      return !q || q.length >= B ? N : "" + Array(B + 1 - q.length).join(W) + N;
    }, b = { s: g, z: function(N) {
      var B = -N.utcOffset(), W = Math.abs(B), q = Math.floor(W / 60), M = W % 60;
      return (B <= 0 ? "+" : "-") + g(q, 2, "0") + ":" + g(M, 2, "0");
    }, m: function N(B, W) {
      if (B.date() < W.date())
        return -N(W, B);
      var q = 12 * (W.year() - B.year()) + (W.month() - B.month()), M = B.clone().add(q, p), H = W - M < 0, _ = B.clone().add(q + (H ? -1 : 1), p);
      return +(-(q + (W - M) / (H ? M - _ : _ - M)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: p, y: h, w: f, d: c, D: v, h: u, m: s, s: l, ms: o, Q: m }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, k = "en", S = {};
    S[k] = C;
    var $ = function(N) {
      return N instanceof V;
    }, T = function N(B, W, q) {
      var M;
      if (!B)
        return k;
      if (typeof B == "string") {
        var H = B.toLowerCase();
        S[H] && (M = H), W && (S[H] = W, M = H);
        var _ = B.split("-");
        if (!M && _.length > 1)
          return N(_[0]);
      } else {
        var L = B.name;
        S[L] = B, M = L;
      }
      return !q && M && (k = M), M || !q && k;
    }, R = function(N, B) {
      if ($(N))
        return N.clone();
      var W = typeof B == "object" ? B : {};
      return W.date = N, W.args = arguments, new V(W);
    }, z = b;
    z.l = T, z.i = $, z.w = function(N, B) {
      return R(N, { locale: B.$L, utc: B.$u, x: B.$x, $offset: B.$offset });
    };
    var V = function() {
      function N(W) {
        this.$L = T(W.locale, null, !0), this.parse(W);
      }
      var B = N.prototype;
      return B.parse = function(W) {
        this.$d = function(q) {
          var M = q.date, H = q.utc;
          if (M === null)
            return /* @__PURE__ */ new Date(NaN);
          if (z.u(M))
            return /* @__PURE__ */ new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var _ = M.match(y);
            if (_) {
              var L = _[2] - 1 || 0, U = (_[7] || "0").substring(0, 3);
              return H ? new Date(Date.UTC(_[1], L, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, U)) : new Date(_[1], L, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, U);
            }
          }
          return new Date(M);
        }(W), this.$x = W.x || {}, this.init();
      }, B.init = function() {
        var W = this.$d;
        this.$y = W.getFullYear(), this.$M = W.getMonth(), this.$D = W.getDate(), this.$W = W.getDay(), this.$H = W.getHours(), this.$m = W.getMinutes(), this.$s = W.getSeconds(), this.$ms = W.getMilliseconds();
      }, B.$utils = function() {
        return z;
      }, B.isValid = function() {
        return this.$d.toString() !== d;
      }, B.isSame = function(W, q) {
        var M = R(W);
        return this.startOf(q) <= M && M <= this.endOf(q);
      }, B.isAfter = function(W, q) {
        return R(W) < this.startOf(q);
      }, B.isBefore = function(W, q) {
        return this.endOf(q) < R(W);
      }, B.$g = function(W, q, M) {
        return z.u(W) ? this[q] : this.set(M, W);
      }, B.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, B.valueOf = function() {
        return this.$d.getTime();
      }, B.startOf = function(W, q) {
        var M = this, H = !!z.u(q) || q, _ = z.p(W), L = function(le, ue) {
          var ve = z.w(M.$u ? Date.UTC(M.$y, ue, le) : new Date(M.$y, ue, le), M);
          return H ? ve : ve.endOf(c);
        }, U = function(le, ue) {
          return z.w(M.toDate()[le].apply(M.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), M);
        }, I = this.$W, G = this.$M, ne = this.$D, he = "set" + (this.$u ? "UTC" : "");
        switch (_) {
          case h:
            return H ? L(1, 0) : L(31, 11);
          case p:
            return H ? L(1, G) : L(0, G + 1);
          case f:
            var ge = this.$locale().weekStart || 0, se = (I < ge ? I + 7 : I) - ge;
            return L(H ? ne - se : ne + (6 - se), G);
          case c:
          case v:
            return U(he + "Hours", 0);
          case u:
            return U(he + "Minutes", 1);
          case s:
            return U(he + "Seconds", 2);
          case l:
            return U(he + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, B.endOf = function(W) {
        return this.startOf(W, !1);
      }, B.$set = function(W, q) {
        var M, H = z.p(W), _ = "set" + (this.$u ? "UTC" : ""), L = (M = {}, M[c] = _ + "Date", M[v] = _ + "Date", M[p] = _ + "Month", M[h] = _ + "FullYear", M[u] = _ + "Hours", M[s] = _ + "Minutes", M[l] = _ + "Seconds", M[o] = _ + "Milliseconds", M)[H], U = H === c ? this.$D + (q - this.$W) : q;
        if (H === p || H === h) {
          var I = this.clone().set(v, 1);
          I.$d[L](U), I.init(), this.$d = I.set(v, Math.min(this.$D, I.daysInMonth())).$d;
        } else
          L && this.$d[L](U);
        return this.init(), this;
      }, B.set = function(W, q) {
        return this.clone().$set(W, q);
      }, B.get = function(W) {
        return this[z.p(W)]();
      }, B.add = function(W, q) {
        var M, H = this;
        W = Number(W);
        var _ = z.p(q), L = function(G) {
          var ne = R(H);
          return z.w(ne.date(ne.date() + Math.round(G * W)), H);
        };
        if (_ === p)
          return this.set(p, this.$M + W);
        if (_ === h)
          return this.set(h, this.$y + W);
        if (_ === c)
          return L(1);
        if (_ === f)
          return L(7);
        var U = (M = {}, M[s] = r, M[u] = a, M[l] = n, M)[_] || 1, I = this.$d.getTime() + W * U;
        return z.w(I, this);
      }, B.subtract = function(W, q) {
        return this.add(-1 * W, q);
      }, B.format = function(W) {
        var q = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || d;
        var H = W || "YYYY-MM-DDTHH:mm:ssZ", _ = z.z(this), L = this.$H, U = this.$m, I = this.$M, G = M.weekdays, ne = M.months, he = M.meridiem, ge = function(ue, ve, _e, Pe) {
          return ue && (ue[ve] || ue(q, H)) || _e[ve].slice(0, Pe);
        }, se = function(ue) {
          return z.s(L % 12 || 12, ue, "0");
        }, le = he || function(ue, ve, _e) {
          var Pe = ue < 12 ? "AM" : "PM";
          return _e ? Pe.toLowerCase() : Pe;
        };
        return H.replace(w, function(ue, ve) {
          return ve || function(_e) {
            switch (_e) {
              case "YY":
                return String(q.$y).slice(-2);
              case "YYYY":
                return z.s(q.$y, 4, "0");
              case "M":
                return I + 1;
              case "MM":
                return z.s(I + 1, 2, "0");
              case "MMM":
                return ge(M.monthsShort, I, ne, 3);
              case "MMMM":
                return ge(ne, I);
              case "D":
                return q.$D;
              case "DD":
                return z.s(q.$D, 2, "0");
              case "d":
                return String(q.$W);
              case "dd":
                return ge(M.weekdaysMin, q.$W, G, 2);
              case "ddd":
                return ge(M.weekdaysShort, q.$W, G, 3);
              case "dddd":
                return G[q.$W];
              case "H":
                return String(L);
              case "HH":
                return z.s(L, 2, "0");
              case "h":
                return se(1);
              case "hh":
                return se(2);
              case "a":
                return le(L, U, !0);
              case "A":
                return le(L, U, !1);
              case "m":
                return String(U);
              case "mm":
                return z.s(U, 2, "0");
              case "s":
                return String(q.$s);
              case "ss":
                return z.s(q.$s, 2, "0");
              case "SSS":
                return z.s(q.$ms, 3, "0");
              case "Z":
                return _;
            }
            return null;
          }(ue) || _.replace(":", "");
        });
      }, B.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, B.diff = function(W, q, M) {
        var H, _ = this, L = z.p(q), U = R(W), I = (U.utcOffset() - this.utcOffset()) * r, G = this - U, ne = function() {
          return z.m(_, U);
        };
        switch (L) {
          case h:
            H = ne() / 12;
            break;
          case p:
            H = ne();
            break;
          case m:
            H = ne() / 3;
            break;
          case f:
            H = (G - I) / 6048e5;
            break;
          case c:
            H = (G - I) / 864e5;
            break;
          case u:
            H = G / a;
            break;
          case s:
            H = G / r;
            break;
          case l:
            H = G / n;
            break;
          default:
            H = G;
        }
        return M ? H : z.a(H);
      }, B.daysInMonth = function() {
        return this.endOf(p).$D;
      }, B.$locale = function() {
        return S[this.$L];
      }, B.locale = function(W, q) {
        if (!W)
          return this.$L;
        var M = this.clone(), H = T(W, q, !0);
        return H && (M.$L = H), M;
      }, B.clone = function() {
        return z.w(this.$d, this);
      }, B.toDate = function() {
        return new Date(this.valueOf());
      }, B.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, B.toISOString = function() {
        return this.$d.toISOString();
      }, B.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), F = V.prototype;
    return R.prototype = F, [["$ms", o], ["$s", l], ["$m", s], ["$H", u], ["$W", c], ["$M", p], ["$y", h], ["$D", v]].forEach(function(N) {
      F[N[1]] = function(B) {
        return this.$g(B, N[0], N[1]);
      };
    }), R.extend = function(N, B) {
      return N.$i || (N(B, V, R), N.$i = !0), R;
    }, R.locale = T, R.isDayjs = $, R.unix = function(N) {
      return R(1e3 * N);
    }, R.en = S[k], R.Ls = S, R.p = {}, R;
  });
})(Oc);
var SC = Oc.exports;
const xe = /* @__PURE__ */ ln(SC);
var Pc = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, a = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, s = {}, u = function(d) {
      return (d = +d) + (d > 68 ? 1900 : 2e3);
    }, c = function(d) {
      return function(y) {
        this[d] = +y;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
      (this.zone || (this.zone = {})).offset = function(y) {
        if (!y || y === "Z")
          return 0;
        var w = y.match(/([+-]|\d\d)/g), C = 60 * w[1] + (+w[2] || 0);
        return C === 0 ? 0 : w[0] === "+" ? -C : C;
      }(d);
    }], p = function(d) {
      var y = s[d];
      return y && (y.indexOf ? y : y.s.concat(y.f));
    }, m = function(d, y) {
      var w, C = s.meridiem;
      if (C) {
        for (var g = 1; g <= 24; g += 1)
          if (d.indexOf(C(g, 0, y)) > -1) {
            w = g > 12;
            break;
          }
      } else
        w = d === (y ? "pm" : "PM");
      return w;
    }, h = { A: [l, function(d) {
      this.afternoon = m(d, !1);
    }], a: [l, function(d) {
      this.afternoon = m(d, !0);
    }], S: [/\d/, function(d) {
      this.milliseconds = 100 * +d;
    }], SS: [a, function(d) {
      this.milliseconds = 10 * +d;
    }], SSS: [/\d{3}/, function(d) {
      this.milliseconds = +d;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [a, c("day")], Do: [l, function(d) {
      var y = s.ordinal, w = d.match(/\d+/);
      if (this.day = w[0], y)
        for (var C = 1; C <= 31; C += 1)
          y(C).replace(/\[|\]/g, "") === d && (this.day = C);
    }], M: [o, c("month")], MM: [a, c("month")], MMM: [l, function(d) {
      var y = p("months"), w = (p("monthsShort") || y.map(function(C) {
        return C.slice(0, 3);
      })).indexOf(d) + 1;
      if (w < 1)
        throw new Error();
      this.month = w % 12 || w;
    }], MMMM: [l, function(d) {
      var y = p("months").indexOf(d) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], Y: [/[+-]?\d+/, c("year")], YY: [a, function(d) {
      this.year = u(d);
    }], YYYY: [/\d{4}/, c("year")], Z: f, ZZ: f };
    function v(d) {
      var y, w;
      y = d, w = s && s.formats;
      for (var C = (d = y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(R, z, V) {
        var F = V && V.toUpperCase();
        return z || w[V] || n[V] || w[F].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, B, W) {
          return B || W.slice(1);
        });
      })).match(r), g = C.length, b = 0; b < g; b += 1) {
        var k = C[b], S = h[k], $ = S && S[0], T = S && S[1];
        C[b] = T ? { regex: $, parser: T } : k.replace(/^\[|\]$/g, "");
      }
      return function(R) {
        for (var z = {}, V = 0, F = 0; V < g; V += 1) {
          var N = C[V];
          if (typeof N == "string")
            F += N.length;
          else {
            var B = N.regex, W = N.parser, q = R.slice(F), M = B.exec(q)[0];
            W.call(z, M), R = R.replace(M, "");
          }
        }
        return function(H) {
          var _ = H.afternoon;
          if (_ !== void 0) {
            var L = H.hours;
            _ ? L < 12 && (H.hours += 12) : L === 12 && (H.hours = 0), delete H.afternoon;
          }
        }(z), z;
      };
    }
    return function(d, y, w) {
      w.p.customParseFormat = !0, d && d.parseTwoDigitYear && (u = d.parseTwoDigitYear);
      var C = y.prototype, g = C.parse;
      C.parse = function(b) {
        var k = b.date, S = b.utc, $ = b.args;
        this.$u = S;
        var T = $[1];
        if (typeof T == "string") {
          var R = $[2] === !0, z = $[3] === !0, V = R || z, F = $[2];
          z && (F = $[2]), s = this.$locale(), !R && F && (s = w.Ls[F]), this.$d = function(q, M, H) {
            try {
              if (["x", "X"].indexOf(M) > -1)
                return new Date((M === "X" ? 1e3 : 1) * q);
              var _ = v(M)(q), L = _.year, U = _.month, I = _.day, G = _.hours, ne = _.minutes, he = _.seconds, ge = _.milliseconds, se = _.zone, le = /* @__PURE__ */ new Date(), ue = I || (L || U ? 1 : le.getDate()), ve = L || le.getFullYear(), _e = 0;
              L && !U || (_e = U > 0 ? U - 1 : le.getMonth());
              var Pe = G || 0, He = ne || 0, We = he || 0, Ue = ge || 0;
              return se ? new Date(Date.UTC(ve, _e, ue, Pe, He, We, Ue + 60 * se.offset * 1e3)) : H ? new Date(Date.UTC(ve, _e, ue, Pe, He, We, Ue)) : new Date(ve, _e, ue, Pe, He, We, Ue);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(k, T, S), this.init(), F && F !== !0 && (this.$L = this.locale(F).$L), V && k != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
        } else if (T instanceof Array)
          for (var N = T.length, B = 1; B <= N; B += 1) {
            $[1] = T[B - 1];
            var W = w.apply(this, $);
            if (W.isValid()) {
              this.$d = W.$d, this.$L = W.$L, this.init();
              break;
            }
            B === N && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          g.call(this, b);
      };
    };
  });
})(Pc);
var kC = Pc.exports;
const $C = /* @__PURE__ */ ln(kC), Ei = ["hours", "minutes", "seconds"], Ti = "HH:mm:ss", lr = "YYYY-MM-DD", _C = {
  date: lr,
  dates: lr,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${lr} ${Ti}`,
  monthrange: "YYYY-MM",
  daterange: lr,
  datetimerange: `${lr} ${Ti}`
}, $o = (e, t) => [
  e > 0 ? e - 1 : void 0,
  e,
  e < t ? e + 1 : void 0
], xc = (e) => Array.from(Array.from({ length: e }).keys()), Mc = (e) => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim(), Ac = (e) => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim(), Oi = function(e, t) {
  const n = us(e), r = us(t);
  return n && r ? e.getTime() === t.getTime() : !n && !r ? e === t : !1;
}, Pi = function(e, t) {
  const n = tt(e), r = tt(t);
  return n && r ? e.length !== t.length ? !1 : e.every((a, o) => Oi(a, t[o])) : !n && !r ? Oi(e, t) : !1;
}, xi = function(e, t, n) {
  const r = qr(t) || t === "x" ? xe(e).locale(n) : xe(e, t).locale(n);
  return r.isValid() ? r : void 0;
}, Mi = function(e, t, n) {
  return qr(t) ? e : t === "x" ? +e : xe(e).locale(n).format(t);
}, _o = (e, t) => {
  var n;
  const r = [], a = t == null ? void 0 : t();
  for (let o = 0; o < e; o++)
    r.push((n = a == null ? void 0 : a.includes(o)) != null ? n : !1);
  return r;
}, Nc = Me({
  disabledHours: {
    type: be(Function)
  },
  disabledMinutes: {
    type: be(Function)
  },
  disabledSeconds: {
    type: be(Function)
  }
}), EC = Me({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
}), Rc = Me({
  id: {
    type: be([Array, String])
  },
  name: {
    type: be([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: !0
  },
  clearIcon: {
    type: be([String, Object]),
    default: aa
  },
  editable: {
    type: Boolean,
    default: !0
  },
  prefixIcon: {
    type: be([String, Object]),
    default: ""
  },
  size: $n,
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: be(Object),
    default: () => ({})
  },
  modelValue: {
    type: be([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: be([Date, Array])
  },
  defaultTime: {
    type: be([Date, Array])
  },
  isRange: {
    type: Boolean,
    default: !1
  },
  ...Nc,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: !1
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: be([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  unlinkPanels: Boolean
}), TC = ["id", "name", "placeholder", "value", "disabled", "readonly"], OC = ["id", "name", "placeholder", "value", "disabled", "readonly"], PC = ce({
  name: "Picker"
}), xC = /* @__PURE__ */ ce({
  ...PC,
  props: Rc,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = Jr(), { lang: o } = ot(), l = we("date"), s = we("input"), u = we("range"), { form: c, formItem: f } = _n(), p = Oe("ElPopperOptions", {}), m = x(), h = x(), v = x(!1), d = x(!1), y = x(null);
    let w = !1, C = !1;
    const g = E(() => [
      l.b("editor"),
      l.bm("editor", r.type),
      s.e("wrapper"),
      l.is("disabled", I.value),
      l.is("active", v.value),
      u.b("editor"),
      rt ? u.bm("editor", rt.value) : "",
      a.class
    ]), b = E(() => [
      s.e("icon"),
      u.e("close-icon"),
      ue.value ? "" : u.e("close-icon--hidden")
    ]);
    me(v, (P) => {
      P ? Te(() => {
        P && (y.value = r.modelValue);
      }) : (Se.value = null, Te(() => {
        k(r.modelValue);
      }));
    });
    const k = (P, ie) => {
      (ie || !Pi(P, y.value)) && (n("change", P), r.validateEvent && (f == null || f.validate("change").catch((Ce) => nt(Ce))));
    }, S = (P) => {
      if (!Pi(r.modelValue, P)) {
        let ie;
        tt(P) ? ie = P.map((Ce) => Mi(Ce, r.valueFormat, o.value)) : P && (ie = Mi(P, r.valueFormat, o.value)), n("update:modelValue", P && ie, o.value);
      }
    }, $ = (P) => {
      n("keydown", P);
    }, T = E(() => {
      if (h.value) {
        const P = je.value ? h.value : h.value.$el;
        return Array.from(P.querySelectorAll("input"));
      }
      return [];
    }), R = (P, ie, Ce) => {
      const Le = T.value;
      Le.length && (!Ce || Ce === "min" ? (Le[0].setSelectionRange(P, ie), Le[0].focus()) : Ce === "max" && (Le[1].setSelectionRange(P, ie), Le[1].focus()));
    }, z = () => {
      H(!0, !0), Te(() => {
        C = !1;
      });
    }, V = (P = "", ie = !1) => {
      ie || (C = !0), v.value = ie;
      let Ce;
      tt(P) ? Ce = P.map((Le) => Le.toDate()) : Ce = P && P.toDate(), Se.value = null, S(Ce);
    }, F = () => {
      d.value = !0;
    }, N = () => {
      n("visible-change", !0);
    }, B = (P) => {
      (P == null ? void 0 : P.key) === De.esc && H(!0, !0);
    }, W = () => {
      d.value = !1, v.value = !1, C = !1, n("visible-change", !1);
    }, q = () => {
      v.value = !0;
    }, M = () => {
      v.value = !1;
    }, H = (P = !0, ie = !1) => {
      C = ie;
      const [Ce, Le] = i(T);
      let Y = Ce;
      !P && je.value && (Y = Le), Y && Y.focus();
    }, _ = (P) => {
      r.readonly || I.value || v.value || C || (v.value = !0, n("focus", P));
    };
    let L;
    const U = (P) => {
      const ie = async () => {
        setTimeout(() => {
          var Ce;
          L === ie && (!((Ce = m.value) != null && Ce.isFocusInsideContent() && !w) && T.value.filter((Le) => Le.contains(document.activeElement)).length === 0 && (ut(), v.value = !1, n("blur", P), r.validateEvent && (f == null || f.validate("blur").catch((Le) => nt(Le)))), w = !1);
        }, 0);
      };
      L = ie, ie();
    }, I = E(() => r.disabled || (c == null ? void 0 : c.disabled)), G = E(() => {
      let P;
      if (_e.value ? D.value.getDefaultValue && (P = D.value.getDefaultValue()) : tt(r.modelValue) ? P = r.modelValue.map((ie) => xi(ie, r.valueFormat, o.value)) : P = xi(r.modelValue, r.valueFormat, o.value), D.value.getRangeAvailableTime) {
        const ie = D.value.getRangeAvailableTime(P);
        tn(ie, P) || (P = ie, S(tt(P) ? P.map((Ce) => Ce.toDate()) : P.toDate()));
      }
      return tt(P) && P.some((ie) => !ie) && (P = []), P;
    }), ne = E(() => {
      if (!D.value.panelReady)
        return "";
      const P = st(G.value);
      return tt(Se.value) ? [
        Se.value[0] || P && P[0] || "",
        Se.value[1] || P && P[1] || ""
      ] : Se.value !== null ? Se.value : !ge.value && _e.value || !v.value && _e.value ? "" : P ? se.value ? P.join(", ") : P : "";
    }), he = E(() => r.type.includes("time")), ge = E(() => r.type.startsWith("time")), se = E(() => r.type === "dates"), le = E(() => r.prefixIcon || (he.value ? sy : Ib)), ue = x(!1), ve = (P) => {
      r.readonly || I.value || ue.value && (P.stopPropagation(), z(), S(null), k(null, !0), ue.value = !1, v.value = !1, D.value.handleClear && D.value.handleClear());
    }, _e = E(() => {
      const { modelValue: P } = r;
      return !P || tt(P) && !P.filter(Boolean).length;
    }), Pe = async (P) => {
      var ie;
      r.readonly || I.value || (((ie = P.target) == null ? void 0 : ie.tagName) !== "INPUT" || T.value.includes(document.activeElement)) && (v.value = !0);
    }, He = () => {
      r.readonly || I.value || !_e.value && r.clearable && (ue.value = !0);
    }, We = () => {
      ue.value = !1;
    }, Ue = (P) => {
      var ie;
      r.readonly || I.value || (((ie = P.touches[0].target) == null ? void 0 : ie.tagName) !== "INPUT" || T.value.includes(document.activeElement)) && (v.value = !0);
    }, je = E(() => r.type.includes("range")), rt = Yt(), ht = E(() => {
      var P, ie;
      return (ie = (P = i(m)) == null ? void 0 : P.popperRef) == null ? void 0 : ie.contentRef;
    }), lt = E(() => {
      var P;
      return i(je) ? i(h) : (P = i(h)) == null ? void 0 : P.$el;
    });
    au(lt, (P) => {
      const ie = i(ht), Ce = i(lt);
      ie && (P.target === ie || P.composedPath().includes(ie)) || P.target === Ce || P.composedPath().includes(Ce) || (v.value = !1);
    });
    const Se = x(null), ut = () => {
      if (Se.value) {
        const P = ct(ne.value);
        P && Ze(P) && (S(tt(P) ? P.map((ie) => ie.toDate()) : P.toDate()), Se.value = null);
      }
      Se.value === "" && (S(null), k(null), Se.value = null);
    }, ct = (P) => P ? D.value.parseUserInput(P) : null, st = (P) => P ? D.value.formatToString(P) : null, Ze = (P) => D.value.isValidValue(P), ae = async (P) => {
      if (r.readonly || I.value)
        return;
      const { code: ie } = P;
      if ($(P), ie === De.esc) {
        v.value === !0 && (v.value = !1, P.preventDefault(), P.stopPropagation());
        return;
      }
      if (ie === De.down && (D.value.handleFocusPicker && (P.preventDefault(), P.stopPropagation()), v.value === !1 && (v.value = !0, await Te()), D.value.handleFocusPicker)) {
        D.value.handleFocusPicker();
        return;
      }
      if (ie === De.tab) {
        w = !0;
        return;
      }
      if (ie === De.enter || ie === De.numpadEnter) {
        (Se.value === null || Se.value === "" || Ze(ct(ne.value))) && (ut(), v.value = !1), P.stopPropagation();
        return;
      }
      if (Se.value) {
        P.stopPropagation();
        return;
      }
      D.value.handleKeydownInput && D.value.handleKeydownInput(P);
    }, ke = (P) => {
      Se.value = P, v.value || (v.value = !0);
    }, Fe = (P) => {
      const ie = P.target;
      Se.value ? Se.value = [ie.value, Se.value[1]] : Se.value = [ie.value, null];
    }, Je = (P) => {
      const ie = P.target;
      Se.value ? Se.value = [Se.value[0], ie.value] : Se.value = [null, ie.value];
    }, ee = () => {
      var P;
      const ie = Se.value, Ce = ct(ie && ie[0]), Le = i(G);
      if (Ce && Ce.isValid()) {
        Se.value = [
          st(Ce),
          ((P = ne.value) == null ? void 0 : P[1]) || null
        ];
        const Y = [Ce, Le && (Le[1] || null)];
        Ze(Y) && (S(Y), Se.value = null);
      }
    }, Z = () => {
      var P;
      const ie = i(Se), Ce = ct(ie && ie[1]), Le = i(G);
      if (Ce && Ce.isValid()) {
        Se.value = [
          ((P = i(ne)) == null ? void 0 : P[0]) || null,
          st(Ce)
        ];
        const Y = [Le && Le[0], Ce];
        Ze(Y) && (S(Y), Se.value = null);
      }
    }, D = x({}), X = (P) => {
      D.value[P[0]] = P[1], D.value.panelReady = !0;
    }, j = (P) => {
      n("calendar-change", P);
    }, te = (P, ie, Ce) => {
      n("panel-change", P, ie, Ce);
    };
    return vt("EP_PICKER_BASE", {
      props: r
    }), t({
      focus: H,
      handleFocusInput: _,
      handleBlurInput: U,
      handleOpen: q,
      handleClose: M,
      onPick: V
    }), (P, ie) => (O(), fe(i(Zr), Pt({
      ref_key: "refPopper",
      ref: m,
      visible: v.value,
      effect: "light",
      pure: "",
      trigger: "click"
    }, P.$attrs, {
      role: "dialog",
      teleported: "",
      transition: `${i(l).namespace.value}-zoom-in-top`,
      "popper-class": [`${i(l).namespace.value}-picker__popper`, P.popperClass],
      "popper-options": i(p),
      "fallback-placements": ["bottom", "top", "right", "left"],
      "gpu-acceleration": !1,
      "stop-popper-mouse-event": !1,
      "hide-after": 0,
      persistent: "",
      onBeforeShow: F,
      onShow: N,
      onHide: W
    }), {
      default: re(() => [
        i(je) ? (O(), K("div", {
          key: 1,
          ref_key: "inputRef",
          ref: h,
          class: A(i(g)),
          style: Ge(P.$attrs.style),
          onClick: _,
          onMouseenter: He,
          onMouseleave: We,
          onTouchstart: Ue,
          onKeydown: ae
        }, [
          i(le) ? (O(), fe(i(Ie), {
            key: 0,
            class: A([i(s).e("icon"), i(u).e("icon")]),
            onMousedown: qe(Pe, ["prevent"]),
            onTouchstart: Ue
          }, {
            default: re(() => [
              (O(), fe(gt(i(le))))
            ]),
            _: 1
          }, 8, ["class", "onMousedown"])) : de("v-if", !0),
          Q("input", {
            id: P.id && P.id[0],
            autocomplete: "off",
            name: P.name && P.name[0],
            placeholder: P.startPlaceholder,
            value: i(ne) && i(ne)[0],
            disabled: i(I),
            readonly: !P.editable || P.readonly,
            class: A(i(u).b("input")),
            onMousedown: Pe,
            onInput: Fe,
            onChange: ee,
            onFocus: _,
            onBlur: U
          }, null, 42, TC),
          $e(P.$slots, "range-separator", {}, () => [
            Q("span", {
              class: A(i(u).b("separator"))
            }, ye(P.rangeSeparator), 3)
          ]),
          Q("input", {
            id: P.id && P.id[1],
            autocomplete: "off",
            name: P.name && P.name[1],
            placeholder: P.endPlaceholder,
            value: i(ne) && i(ne)[1],
            disabled: i(I),
            readonly: !P.editable || P.readonly,
            class: A(i(u).b("input")),
            onMousedown: Pe,
            onFocus: _,
            onBlur: U,
            onInput: Je,
            onChange: Z
          }, null, 42, OC),
          P.clearIcon ? (O(), fe(i(Ie), {
            key: 1,
            class: A(i(b)),
            onClick: ve
          }, {
            default: re(() => [
              (O(), fe(gt(P.clearIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : de("v-if", !0)
        ], 38)) : (O(), fe(i(Ft), {
          key: 0,
          id: P.id,
          ref_key: "inputRef",
          ref: h,
          "container-role": "combobox",
          "model-value": i(ne),
          name: P.name,
          size: i(rt),
          disabled: i(I),
          placeholder: P.placeholder,
          class: A([i(l).b("editor"), i(l).bm("editor", P.type), P.$attrs.class]),
          style: Ge(P.$attrs.style),
          readonly: !P.editable || P.readonly || i(se) || P.type === "week",
          label: P.label,
          tabindex: P.tabindex,
          "validate-event": !1,
          onInput: ke,
          onFocus: _,
          onBlur: U,
          onKeydown: ae,
          onChange: ut,
          onMousedown: Pe,
          onMouseenter: He,
          onMouseleave: We,
          onTouchstart: Ue,
          onClick: ie[0] || (ie[0] = qe(() => {
          }, ["stop"]))
        }, {
          prefix: re(() => [
            i(le) ? (O(), fe(i(Ie), {
              key: 0,
              class: A(i(s).e("icon")),
              onMousedown: qe(Pe, ["prevent"]),
              onTouchstart: Ue
            }, {
              default: re(() => [
                (O(), fe(gt(i(le))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : de("v-if", !0)
          ]),
          suffix: re(() => [
            ue.value && P.clearIcon ? (O(), fe(i(Ie), {
              key: 0,
              class: A(`${i(s).e("icon")} clear-icon`),
              onClick: qe(ve, ["stop"])
            }, {
              default: re(() => [
                (O(), fe(gt(P.clearIcon)))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : de("v-if", !0)
          ]),
          _: 1
        }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"]))
      ]),
      content: re(() => [
        $e(P.$slots, "default", {
          visible: v.value,
          actualVisible: d.value,
          parsedValue: i(G),
          format: P.format,
          unlinkPanels: P.unlinkPanels,
          type: P.type,
          defaultValue: P.defaultValue,
          onPick: V,
          onSelectRange: R,
          onSetPickerOption: X,
          onCalendarChange: j,
          onPanelChange: te,
          onKeydown: B,
          onMousedown: ie[1] || (ie[1] = qe(() => {
          }, ["stop"]))
        })
      ]),
      _: 3
    }, 16, ["visible", "transition", "popper-class", "popper-options"]));
  }
});
var MC = /* @__PURE__ */ Ae(xC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
const AC = Me({
  ...EC,
  datetimeRole: String,
  parsedValue: {
    type: be(Object)
  }
}), NC = ({
  getAvailableHours: e,
  getAvailableMinutes: t,
  getAvailableSeconds: n
}) => {
  const r = (l, s, u, c) => {
    const f = {
      hour: e,
      minute: t,
      second: n
    };
    let p = l;
    return ["hour", "minute", "second"].forEach((m) => {
      if (f[m]) {
        let h;
        const v = f[m];
        switch (m) {
          case "minute": {
            h = v(p.hour(), s, c);
            break;
          }
          case "second": {
            h = v(p.hour(), p.minute(), s, c);
            break;
          }
          default: {
            h = v(s, c);
            break;
          }
        }
        if (h != null && h.length && !h.includes(p[m]())) {
          const d = u ? 0 : h.length - 1;
          p = p[m](h[d]);
        }
      }
    }), p;
  }, a = {};
  return {
    timePickerOptions: a,
    getAvailableTime: r,
    onSetOption: ([l, s]) => {
      a[l] = s;
    }
  };
}, Eo = (e) => {
  const t = (r, a) => r || a, n = (r) => r !== !0;
  return e.map(t).filter(n);
}, Ic = (e, t, n) => ({
  getHoursList: (l, s) => _o(24, e && (() => e == null ? void 0 : e(l, s))),
  getMinutesList: (l, s, u) => _o(60, t && (() => t == null ? void 0 : t(l, s, u))),
  getSecondsList: (l, s, u, c) => _o(60, n && (() => n == null ? void 0 : n(l, s, u, c)))
}), RC = (e, t, n) => {
  const { getHoursList: r, getMinutesList: a, getSecondsList: o } = Ic(e, t, n);
  return {
    getAvailableHours: (c, f) => Eo(r(c, f)),
    getAvailableMinutes: (c, f, p) => Eo(a(c, f, p)),
    getAvailableSeconds: (c, f, p, m) => Eo(o(c, f, p, m))
  };
}, IC = (e) => {
  const t = x(e.parsedValue);
  return me(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
}, xn = /* @__PURE__ */ new Map();
let Ai;
at && (document.addEventListener("mousedown", (e) => Ai = e), document.addEventListener("mouseup", (e) => {
  for (const t of xn.values())
    for (const { documentHandler: n } of t)
      n(e, Ai);
}));
function Ni(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : vr(t.arg) && n.push(t.arg), function(r, a) {
    const o = t.instance.popperRef, l = r.target, s = a == null ? void 0 : a.target, u = !t || !t.instance, c = !l || !s, f = e.contains(l) || e.contains(s), p = e === l, m = n.length && n.some((v) => v == null ? void 0 : v.contains(l)) || n.length && n.includes(s), h = o && (o.contains(l) || o.contains(s));
    u || c || f || p || m || h || t.value(r, a);
  };
}
const Sr = {
  beforeMount(e, t) {
    xn.has(e) || xn.set(e, []), xn.get(e).push({
      documentHandler: Ni(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    xn.has(e) || xn.set(e, []);
    const n = xn.get(e), r = n.findIndex((o) => o.bindingFn === t.oldValue), a = {
      documentHandler: Ni(e, t),
      bindingFn: t.value
    };
    r >= 0 ? n.splice(r, 1, a) : n.push(a);
  },
  unmounted(e) {
    xn.delete(e);
  }
}, DC = 100, LC = 600, Ri = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = DC, delay: a = LC } = dt(n) ? {} : n;
    let o, l;
    const s = () => dt(n) ? n() : n.handler(), u = () => {
      l && (clearTimeout(l), l = void 0), o && (clearInterval(o), o = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), s(), document.addEventListener("mouseup", () => u(), {
        once: !0
      }), l = setTimeout(() => {
        o = setInterval(() => {
          s();
        }, r);
      }, a));
    });
  }
};
var Ii = !1, Bn, Uo, Go, Pa, xa, Dc, Ma, Xo, Zo, Jo, Lc, Qo, el, Fc, Bc;
function Mt() {
  if (!Ii) {
    Ii = !0;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Qo = /\b(iPhone|iP[ao]d)/.exec(e), el = /\b(iP[ao]d)/.exec(e), Jo = /Android/i.exec(e), Fc = /FBAN\/\w+;/i.exec(e), Bc = /Mobile/i.exec(e), Lc = !!/Win64/.exec(e), t) {
      Bn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, Bn && document && document.documentMode && (Bn = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(e);
      Dc = r ? parseFloat(r[1]) + 4 : Bn, Uo = t[2] ? parseFloat(t[2]) : NaN, Go = t[3] ? parseFloat(t[3]) : NaN, Pa = t[4] ? parseFloat(t[4]) : NaN, Pa ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), xa = t && t[1] ? parseFloat(t[1]) : NaN) : xa = NaN;
    } else
      Bn = Uo = Go = xa = Pa = NaN;
    if (n) {
      if (n[1]) {
        var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Ma = a ? parseFloat(a[1].replace("_", ".")) : !0;
      } else
        Ma = !1;
      Xo = !!n[2], Zo = !!n[3];
    } else
      Ma = Xo = Zo = !1;
  }
}
var tl = { ie: function() {
  return Mt() || Bn;
}, ieCompatibilityMode: function() {
  return Mt() || Dc > Bn;
}, ie64: function() {
  return tl.ie() && Lc;
}, firefox: function() {
  return Mt() || Uo;
}, opera: function() {
  return Mt() || Go;
}, webkit: function() {
  return Mt() || Pa;
}, safari: function() {
  return tl.webkit();
}, chrome: function() {
  return Mt() || xa;
}, windows: function() {
  return Mt() || Xo;
}, osx: function() {
  return Mt() || Ma;
}, linux: function() {
  return Mt() || Zo;
}, iphone: function() {
  return Mt() || Qo;
}, mobile: function() {
  return Mt() || Qo || el || Jo || Bc;
}, nativeApp: function() {
  return Mt() || Fc;
}, android: function() {
  return Mt() || Jo;
}, ipad: function() {
  return Mt() || el;
} }, FC = tl, wa = !!(typeof window < "u" && window.document && window.document.createElement), BC = { canUseDOM: wa, canUseWorkers: typeof Worker < "u", canUseEventListeners: wa && !!(window.addEventListener || window.attachEvent), canUseViewport: wa && !!window.screen, isInWorker: !wa }, zc = BC, Vc;
zc.canUseDOM && (Vc = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
function zC(e, t) {
  if (!zc.canUseDOM || t && !("addEventListener" in document))
    return !1;
  var n = "on" + e, r = n in document;
  if (!r) {
    var a = document.createElement("div");
    a.setAttribute(n, "return;"), r = typeof a[n] == "function";
  }
  return !r && Vc && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var VC = zC, Di = 10, Li = 40, Fi = 800;
function Hc(e) {
  var t = 0, n = 0, r = 0, a = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = t * Di, a = n * Di, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || a) && e.deltaMode && (e.deltaMode == 1 ? (r *= Li, a *= Li) : (r *= Fi, a *= Fi)), r && !t && (t = r < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: r, pixelY: a };
}
Hc.getEventType = function() {
  return FC.firefox() ? "DOMMouseScroll" : VC("wheel") ? "wheel" : "mousewheel";
};
var HC = Hc;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const WC = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(r) {
      const a = HC(r);
      t && Reflect.apply(t, this, [r, a]);
    };
    e.addEventListener("wheel", n, { passive: !0 });
  }
}, jC = {
  beforeMount(e, t) {
    WC(e, t.value);
  }
}, KC = Me({
  role: {
    type: String,
    required: !0
  },
  spinnerDate: {
    type: be(Object),
    required: !0
  },
  showSeconds: {
    type: Boolean,
    default: !0
  },
  arrowControl: Boolean,
  amPmMode: {
    type: be(String),
    default: ""
  },
  ...Nc
}), qC = ["onClick"], YC = ["onMouseenter"], UC = /* @__PURE__ */ ce({
  __name: "basic-time-spinner",
  props: KC,
  emits: ["change", "select-range", "set-option"],
  setup(e, { emit: t }) {
    const n = e, r = we("time"), { getHoursList: a, getMinutesList: o, getSecondsList: l } = Ic(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
    let s = !1;
    const u = x(), c = x(), f = x(), p = x(), m = {
      hours: c,
      minutes: f,
      seconds: p
    }, h = E(() => n.showSeconds ? Ei : Ei.slice(0, 2)), v = E(() => {
      const { spinnerDate: _ } = n, L = _.hour(), U = _.minute(), I = _.second();
      return { hours: L, minutes: U, seconds: I };
    }), d = E(() => {
      const { hours: _, minutes: L } = i(v);
      return {
        hours: a(n.role),
        minutes: o(_, n.role),
        seconds: l(_, L, n.role)
      };
    }), y = E(() => {
      const { hours: _, minutes: L, seconds: U } = i(v);
      return {
        hours: $o(_, 23),
        minutes: $o(L, 59),
        seconds: $o(U, 59)
      };
    }), w = Rn((_) => {
      s = !1, b(_);
    }, 200), C = (_) => {
      if (!!!n.amPmMode)
        return "";
      const U = n.amPmMode === "A";
      let I = _ < 12 ? " am" : " pm";
      return U && (I = I.toUpperCase()), I;
    }, g = (_) => {
      let L;
      switch (_) {
        case "hours":
          L = [0, 2];
          break;
        case "minutes":
          L = [3, 5];
          break;
        case "seconds":
          L = [6, 8];
          break;
      }
      const [U, I] = L;
      t("select-range", U, I), u.value = _;
    }, b = (_) => {
      $(_, i(v)[_]);
    }, k = () => {
      b("hours"), b("minutes"), b("seconds");
    }, S = (_) => _.querySelector(`.${r.namespace.value}-scrollbar__wrap`), $ = (_, L) => {
      if (n.arrowControl)
        return;
      const U = i(m[_]);
      U && U.$el && (S(U.$el).scrollTop = Math.max(0, L * T(_)));
    }, T = (_) => {
      const L = i(m[_]), U = L == null ? void 0 : L.$el.querySelector("li");
      return U && Number.parseFloat(ub(U, "height")) || 0;
    }, R = () => {
      V(1);
    }, z = () => {
      V(-1);
    }, V = (_) => {
      u.value || g("hours");
      const L = u.value, U = i(v)[L], I = u.value === "hours" ? 24 : 60, G = F(L, U, _, I);
      N(L, G), $(L, G), Te(() => g(L));
    }, F = (_, L, U, I) => {
      let G = (L + U + I) % I;
      const ne = i(d)[_];
      for (; ne[G] && G !== L; )
        G = (G + U + I) % I;
      return G;
    }, N = (_, L) => {
      if (i(d)[_][L])
        return;
      const { hours: G, minutes: ne, seconds: he } = i(v);
      let ge;
      switch (_) {
        case "hours":
          ge = n.spinnerDate.hour(L).minute(ne).second(he);
          break;
        case "minutes":
          ge = n.spinnerDate.hour(G).minute(L).second(he);
          break;
        case "seconds":
          ge = n.spinnerDate.hour(G).minute(ne).second(L);
          break;
      }
      t("change", ge);
    }, B = (_, { value: L, disabled: U }) => {
      U || (N(_, L), g(_), $(_, L));
    }, W = (_) => {
      s = !0, w(_);
      const L = Math.min(Math.round((S(i(m[_]).$el).scrollTop - (q(_) * 0.5 - 10) / T(_) + 3) / T(_)), _ === "hours" ? 23 : 59);
      N(_, L);
    }, q = (_) => i(m[_]).$el.offsetHeight, M = () => {
      const _ = (L) => {
        const U = i(m[L]);
        U && U.$el && (S(U.$el).onscroll = () => {
          W(L);
        });
      };
      _("hours"), _("minutes"), _("seconds");
    };
    Xe(() => {
      Te(() => {
        !n.arrowControl && M(), k(), n.role === "start" && g("hours");
      });
    });
    const H = (_, L) => {
      m[L].value = _;
    };
    return t("set-option", [`${n.role}_scrollDown`, V]), t("set-option", [`${n.role}_emitSelectRange`, g]), me(() => n.spinnerDate, () => {
      s || k();
    }), (_, L) => (O(), K("div", {
      class: A([i(r).b("spinner"), { "has-seconds": _.showSeconds }])
    }, [
      _.arrowControl ? de("v-if", !0) : (O(!0), K(Ne, { key: 0 }, Ye(i(h), (U) => (O(), fe(i(Tr), {
        key: U,
        ref_for: !0,
        ref: (I) => H(I, U),
        class: A(i(r).be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": i(r).be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: (I) => g(U),
        onMousemove: (I) => b(U)
      }, {
        default: re(() => [
          (O(!0), K(Ne, null, Ye(i(d)[U], (I, G) => (O(), K("li", {
            key: G,
            class: A([
              i(r).be("spinner", "item"),
              i(r).is("active", G === i(v)[U]),
              i(r).is("disabled", I)
            ]),
            onClick: (ne) => B(U, { value: G, disabled: I })
          }, [
            U === "hours" ? (O(), K(Ne, { key: 0 }, [
              pt(ye(("0" + (_.amPmMode ? G % 12 || 12 : G)).slice(-2)) + ye(C(G)), 1)
            ], 64)) : (O(), K(Ne, { key: 1 }, [
              pt(ye(("0" + G).slice(-2)), 1)
            ], 64))
          ], 10, qC))), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)),
      _.arrowControl ? (O(!0), K(Ne, { key: 1 }, Ye(i(h), (U) => (O(), K("div", {
        key: U,
        class: A([i(r).be("spinner", "wrapper"), i(r).is("arrow")]),
        onMouseenter: (I) => g(U)
      }, [
        ze((O(), fe(i(Ie), {
          class: A(["arrow-up", i(r).be("spinner", "arrow")])
        }, {
          default: re(() => [
            J(i(ju))
          ]),
          _: 1
        }, 8, ["class"])), [
          [i(Ri), z]
        ]),
        ze((O(), fe(i(Ie), {
          class: A(["arrow-down", i(r).be("spinner", "arrow")])
        }, {
          default: re(() => [
            J(i(to))
          ]),
          _: 1
        }, 8, ["class"])), [
          [i(Ri), R]
        ]),
        Q("ul", {
          class: A(i(r).be("spinner", "list"))
        }, [
          (O(!0), K(Ne, null, Ye(i(y)[U], (I, G) => (O(), K("li", {
            key: G,
            class: A([
              i(r).be("spinner", "item"),
              i(r).is("active", I === i(v)[U]),
              i(r).is("disabled", i(d)[U][I])
            ])
          }, [
            typeof I == "number" ? (O(), K(Ne, { key: 0 }, [
              U === "hours" ? (O(), K(Ne, { key: 0 }, [
                pt(ye(("0" + (_.amPmMode ? I % 12 || 12 : I)).slice(-2)) + ye(C(I)), 1)
              ], 64)) : (O(), K(Ne, { key: 1 }, [
                pt(ye(("0" + I).slice(-2)), 1)
              ], 64))
            ], 64)) : de("v-if", !0)
          ], 2))), 128))
        ], 2)
      ], 42, YC))), 128)) : de("v-if", !0)
    ], 2));
  }
});
var GC = /* @__PURE__ */ Ae(UC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
const XC = /* @__PURE__ */ ce({
  __name: "panel-time-pick",
  props: AC,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, r = Oe("EP_PICKER_BASE"), {
      arrowControl: a,
      disabledHours: o,
      disabledMinutes: l,
      disabledSeconds: s,
      defaultValue: u
    } = r.props, { getAvailableHours: c, getAvailableMinutes: f, getAvailableSeconds: p } = RC(o, l, s), m = we("time"), { t: h, lang: v } = ot(), d = x([0, 2]), y = IC(n), w = E(() => Un(n.actualVisible) ? `${m.namespace.value}-zoom-in-top` : ""), C = E(() => n.format.includes("ss")), g = E(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), b = (H) => {
      const _ = xe(H).locale(v.value), L = B(_);
      return _.isSame(L);
    }, k = () => {
      t("pick", y.value, !1);
    }, S = (H = !1, _ = !1) => {
      _ || t("pick", n.parsedValue, H);
    }, $ = (H) => {
      if (!n.visible)
        return;
      const _ = B(H).millisecond(0);
      t("pick", _, !0);
    }, T = (H, _) => {
      t("select-range", H, _), d.value = [H, _];
    }, R = (H) => {
      const _ = [0, 3].concat(C.value ? [6] : []), L = ["hours", "minutes"].concat(C.value ? ["seconds"] : []), I = (_.indexOf(d.value[0]) + H + _.length) % _.length;
      V.start_emitSelectRange(L[I]);
    }, z = (H) => {
      const _ = H.code, { left: L, right: U, up: I, down: G } = De;
      if ([L, U].includes(_)) {
        R(_ === L ? -1 : 1), H.preventDefault();
        return;
      }
      if ([I, G].includes(_)) {
        const ne = _ === I ? -1 : 1;
        V.start_scrollDown(ne), H.preventDefault();
        return;
      }
    }, { timePickerOptions: V, onSetOption: F, getAvailableTime: N } = NC({
      getAvailableHours: c,
      getAvailableMinutes: f,
      getAvailableSeconds: p
    }), B = (H) => N(H, n.datetimeRole || "", !0), W = (H) => H ? xe(H, n.format).locale(v.value) : null, q = (H) => H ? H.format(n.format) : null, M = () => xe(u).locale(v.value);
    return t("set-picker-option", ["isValidValue", b]), t("set-picker-option", ["formatToString", q]), t("set-picker-option", ["parseUserInput", W]), t("set-picker-option", ["handleKeydownInput", z]), t("set-picker-option", ["getRangeAvailableTime", B]), t("set-picker-option", ["getDefaultValue", M]), (H, _) => (O(), fe(ur, { name: i(w) }, {
      default: re(() => [
        H.actualVisible || H.visible ? (O(), K("div", {
          key: 0,
          class: A(i(m).b("panel"))
        }, [
          Q("div", {
            class: A([i(m).be("panel", "content"), { "has-seconds": i(C) }])
          }, [
            J(GC, {
              ref: "spinner",
              role: H.datetimeRole || "start",
              "arrow-control": i(a),
              "show-seconds": i(C),
              "am-pm-mode": i(g),
              "spinner-date": H.parsedValue,
              "disabled-hours": i(o),
              "disabled-minutes": i(l),
              "disabled-seconds": i(s),
              onChange: $,
              onSetOption: i(F),
              onSelectRange: T
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
          ], 2),
          Q("div", {
            class: A(i(m).be("panel", "footer"))
          }, [
            Q("button", {
              type: "button",
              class: A([i(m).be("panel", "btn"), "cancel"]),
              onClick: k
            }, ye(i(h)("el.datepicker.cancel")), 3),
            Q("button", {
              type: "button",
              class: A([i(m).be("panel", "btn"), "confirm"]),
              onClick: _[0] || (_[0] = (L) => S())
            }, ye(i(h)("el.datepicker.confirm")), 3)
          ], 2)
        ], 2)) : de("v-if", !0)
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var nl = /* @__PURE__ */ Ae(XC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]), Wc = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    return function(n, r, a) {
      var o = r.prototype, l = function(p) {
        return p && (p.indexOf ? p : p.s);
      }, s = function(p, m, h, v, d) {
        var y = p.name ? p : p.$locale(), w = l(y[m]), C = l(y[h]), g = w || C.map(function(k) {
          return k.slice(0, v);
        });
        if (!d)
          return g;
        var b = y.weekStart;
        return g.map(function(k, S) {
          return g[(S + (b || 0)) % 7];
        });
      }, u = function() {
        return a.Ls[a.locale()];
      }, c = function(p, m) {
        return p.formats[m] || function(h) {
          return h.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, d, y) {
            return d || y.slice(1);
          });
        }(p.formats[m.toUpperCase()]);
      }, f = function() {
        var p = this;
        return { months: function(m) {
          return m ? m.format("MMMM") : s(p, "months");
        }, monthsShort: function(m) {
          return m ? m.format("MMM") : s(p, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return p.$locale().weekStart || 0;
        }, weekdays: function(m) {
          return m ? m.format("dddd") : s(p, "weekdays");
        }, weekdaysMin: function(m) {
          return m ? m.format("dd") : s(p, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(m) {
          return m ? m.format("ddd") : s(p, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(m) {
          return c(p.$locale(), m);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      o.localeData = function() {
        return f.bind(this)();
      }, a.localeData = function() {
        var p = u();
        return { firstDayOfWeek: function() {
          return p.weekStart || 0;
        }, weekdays: function() {
          return a.weekdays();
        }, weekdaysShort: function() {
          return a.weekdaysShort();
        }, weekdaysMin: function() {
          return a.weekdaysMin();
        }, months: function() {
          return a.months();
        }, monthsShort: function() {
          return a.monthsShort();
        }, longDateFormat: function(m) {
          return c(p, m);
        }, meridiem: p.meridiem, ordinal: p.ordinal };
      }, a.months = function() {
        return s(u(), "months");
      }, a.monthsShort = function() {
        return s(u(), "monthsShort", "months", 3);
      }, a.weekdays = function(p) {
        return s(u(), "weekdays", null, null, p);
      }, a.weekdaysShort = function(p) {
        return s(u(), "weekdaysShort", "weekdays", 3, p);
      }, a.weekdaysMin = function(p) {
        return s(u(), "weekdaysMin", "weekdays", 2, p);
      };
    };
  });
})(Wc);
var ZC = Wc.exports;
const JC = /* @__PURE__ */ ln(ZC), jc = {
  modelValue: {
    type: [Number, String, Boolean],
    default: void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: $n,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: !0
  }
}, Kc = {
  [ft]: (e) => kt(e) || it(e) || Jt(e),
  change: (e) => kt(e) || it(e) || Jt(e)
}, Or = Symbol("checkboxGroupContextKey"), QC = ({
  model: e,
  isChecked: t
}) => {
  const n = Oe(Or, void 0), r = E(() => {
    var o, l;
    const s = (o = n == null ? void 0 : n.max) == null ? void 0 : o.value, u = (l = n == null ? void 0 : n.min) == null ? void 0 : l.value;
    return !Un(s) && e.value.length >= s && !t.value || !Un(u) && e.value.length <= u && t.value;
  });
  return {
    isDisabled: ia(E(() => (n == null ? void 0 : n.disabled.value) || r.value)),
    isLimitDisabled: r
  };
}, eS = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: a,
  isLabeledByFormItem: o
}) => {
  const l = Oe(Or, void 0), { formItem: s } = _n(), { emit: u } = Ke();
  function c(v) {
    var d, y;
    return v === e.trueLabel || v === !0 ? (d = e.trueLabel) != null ? d : !0 : (y = e.falseLabel) != null ? y : !1;
  }
  function f(v, d) {
    u("change", c(v), d);
  }
  function p(v) {
    if (n.value)
      return;
    const d = v.target;
    u("change", c(d.checked), v);
  }
  async function m(v) {
    n.value || !r.value && !a.value && o.value && (v.composedPath().some((w) => w.tagName === "LABEL") || (t.value = c([!1, e.falseLabel].includes(t.value)), await Te(), f(t.value, v)));
  }
  const h = E(() => (l == null ? void 0 : l.validateEvent) || e.validateEvent);
  return me(() => e.modelValue, () => {
    h.value && (s == null || s.validate("change").catch((v) => nt(v)));
  }), {
    handleChange: p,
    onClickRoot: m
  };
}, tS = (e) => {
  const t = x(!1), { emit: n } = Ke(), r = Oe(Or, void 0), a = E(() => Un(r) === !1), o = x(!1);
  return {
    model: E({
      get() {
        var s, u;
        return a.value ? (s = r == null ? void 0 : r.modelValue) == null ? void 0 : s.value : (u = e.modelValue) != null ? u : t.value;
      },
      set(s) {
        var u, c;
        a.value && tt(s) ? (o.value = ((u = r == null ? void 0 : r.max) == null ? void 0 : u.value) !== void 0 && s.length > (r == null ? void 0 : r.max.value), o.value === !1 && ((c = r == null ? void 0 : r.changeEvent) == null || c.call(r, s))) : (n(ft, s), t.value = s);
      }
    }),
    isGroup: a,
    isLimitExceeded: o
  };
}, nS = (e, t, { model: n }) => {
  const r = Oe(Or, void 0), a = x(!1), o = E(() => {
    const c = n.value;
    return Jt(c) ? c : tt(c) ? Bt(e.label) ? c.map(cr).some((f) => tn(f, e.label)) : c.map(cr).includes(e.label) : c != null ? c === e.trueLabel : !!c;
  }), l = Yt(E(() => {
    var c;
    return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value;
  }), {
    prop: !0
  }), s = Yt(E(() => {
    var c;
    return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value;
  })), u = E(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: l,
    isChecked: o,
    isFocused: a,
    checkboxSize: s,
    hasOwnLabel: u
  };
}, rS = (e, { model: t }) => {
  function n() {
    tt(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || !0;
  }
  e.checked && n();
}, qc = (e, t) => {
  const { formItem: n } = _n(), { model: r, isGroup: a, isLimitExceeded: o } = tS(e), {
    isFocused: l,
    isChecked: s,
    checkboxButtonSize: u,
    checkboxSize: c,
    hasOwnLabel: f
  } = nS(e, t, { model: r }), { isDisabled: p } = QC({ model: r, isChecked: s }), { inputId: m, isLabeledByFormItem: h } = lo(e, {
    formItemContext: n,
    disableIdGeneration: f,
    disableIdManagement: a
  }), { handleChange: v, onClickRoot: d } = eS(e, {
    model: r,
    isLimitExceeded: o,
    hasOwnLabel: f,
    isDisabled: p,
    isLabeledByFormItem: h
  });
  return rS(e, { model: r }), {
    inputId: m,
    isLabeledByFormItem: h,
    isChecked: s,
    isDisabled: p,
    isFocused: l,
    checkboxButtonSize: u,
    checkboxSize: c,
    hasOwnLabel: f,
    model: r,
    handleChange: v,
    onClickRoot: d
  };
}, aS = ["tabindex", "role", "aria-checked"], oS = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"], lS = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"], sS = ce({
  name: "ElCheckbox"
}), iS = /* @__PURE__ */ ce({
  ...sS,
  props: jc,
  emits: Kc,
  setup(e) {
    const t = e, n = Jn(), {
      inputId: r,
      isLabeledByFormItem: a,
      isChecked: o,
      isDisabled: l,
      isFocused: s,
      checkboxSize: u,
      hasOwnLabel: c,
      model: f,
      handleChange: p,
      onClickRoot: m
    } = qc(t, n), h = we("checkbox"), v = E(() => [
      h.b(),
      h.m(u.value),
      h.is("disabled", l.value),
      h.is("bordered", t.border),
      h.is("checked", o.value)
    ]), d = E(() => [
      h.e("input"),
      h.is("disabled", l.value),
      h.is("checked", o.value),
      h.is("indeterminate", t.indeterminate),
      h.is("focus", s.value)
    ]);
    return (y, w) => (O(), fe(gt(!i(c) && i(a) ? "span" : "label"), {
      class: A(i(v)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: i(m)
    }, {
      default: re(() => [
        Q("span", {
          class: A(i(d)),
          tabindex: y.indeterminate ? 0 : void 0,
          role: y.indeterminate ? "checkbox" : void 0,
          "aria-checked": y.indeterminate ? "mixed" : void 0
        }, [
          y.trueLabel || y.falseLabel ? ze((O(), K("input", {
            key: 0,
            id: i(r),
            "onUpdate:modelValue": w[0] || (w[0] = (C) => bn(f) ? f.value = C : null),
            class: A(i(h).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            name: y.name,
            tabindex: y.tabindex,
            disabled: i(l),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: w[1] || (w[1] = (...C) => i(p) && i(p)(...C)),
            onFocus: w[2] || (w[2] = (C) => s.value = !0),
            onBlur: w[3] || (w[3] = (C) => s.value = !1)
          }, null, 42, oS)), [
            [Da, i(f)]
          ]) : ze((O(), K("input", {
            key: 1,
            id: i(r),
            "onUpdate:modelValue": w[4] || (w[4] = (C) => bn(f) ? f.value = C : null),
            class: A(i(h).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            disabled: i(l),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: w[5] || (w[5] = (...C) => i(p) && i(p)(...C)),
            onFocus: w[6] || (w[6] = (C) => s.value = !0),
            onBlur: w[7] || (w[7] = (C) => s.value = !1)
          }, null, 42, lS)), [
            [Da, i(f)]
          ]),
          Q("span", {
            class: A(i(h).e("inner"))
          }, null, 2)
        ], 10, aS),
        i(c) ? (O(), K("span", {
          key: 0,
          class: A(i(h).e("label"))
        }, [
          $e(y.$slots, "default"),
          y.$slots.default ? de("v-if", !0) : (O(), K(Ne, { key: 0 }, [
            pt(ye(y.label), 1)
          ], 64))
        ], 2)) : de("v-if", !0)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var uS = /* @__PURE__ */ Ae(iS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
const cS = ["name", "tabindex", "disabled", "true-value", "false-value"], dS = ["name", "tabindex", "disabled", "value"], fS = ce({
  name: "ElCheckboxButton"
}), pS = /* @__PURE__ */ ce({
  ...fS,
  props: jc,
  emits: Kc,
  setup(e) {
    const t = e, n = Jn(), {
      isFocused: r,
      isChecked: a,
      isDisabled: o,
      checkboxButtonSize: l,
      model: s,
      handleChange: u
    } = qc(t, n), c = Oe(Or, void 0), f = we("checkbox"), p = E(() => {
      var h, v, d, y;
      const w = (v = (h = c == null ? void 0 : c.fill) == null ? void 0 : h.value) != null ? v : "";
      return {
        backgroundColor: w,
        borderColor: w,
        color: (y = (d = c == null ? void 0 : c.textColor) == null ? void 0 : d.value) != null ? y : "",
        boxShadow: w ? `-1px 0 0 0 ${w}` : void 0
      };
    }), m = E(() => [
      f.b("button"),
      f.bm("button", l.value),
      f.is("disabled", o.value),
      f.is("checked", a.value),
      f.is("focus", r.value)
    ]);
    return (h, v) => (O(), K("label", {
      class: A(i(m))
    }, [
      h.trueLabel || h.falseLabel ? ze((O(), K("input", {
        key: 0,
        "onUpdate:modelValue": v[0] || (v[0] = (d) => bn(s) ? s.value = d : null),
        class: A(i(f).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: i(o),
        "true-value": h.trueLabel,
        "false-value": h.falseLabel,
        onChange: v[1] || (v[1] = (...d) => i(u) && i(u)(...d)),
        onFocus: v[2] || (v[2] = (d) => r.value = !0),
        onBlur: v[3] || (v[3] = (d) => r.value = !1)
      }, null, 42, cS)), [
        [Da, i(s)]
      ]) : ze((O(), K("input", {
        key: 1,
        "onUpdate:modelValue": v[4] || (v[4] = (d) => bn(s) ? s.value = d : null),
        class: A(i(f).be("button", "original")),
        type: "checkbox",
        name: h.name,
        tabindex: h.tabindex,
        disabled: i(o),
        value: h.label,
        onChange: v[5] || (v[5] = (...d) => i(u) && i(u)(...d)),
        onFocus: v[6] || (v[6] = (d) => r.value = !0),
        onBlur: v[7] || (v[7] = (d) => r.value = !1)
      }, null, 42, dS)), [
        [Da, i(s)]
      ]),
      h.$slots.default || h.label ? (O(), K("span", {
        key: 2,
        class: A(i(f).be("button", "inner")),
        style: Ge(i(a) ? i(p) : void 0)
      }, [
        $e(h.$slots, "default", {}, () => [
          pt(ye(h.label), 1)
        ])
      ], 6)) : de("v-if", !0)
    ], 2));
  }
});
var Yc = /* @__PURE__ */ Ae(pS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
const vS = Me({
  modelValue: {
    type: be(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: $n,
  label: String,
  fill: String,
  textColor: String,
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), hS = {
  [ft]: (e) => tt(e),
  change: (e) => tt(e)
}, mS = ce({
  name: "ElCheckboxGroup"
}), gS = /* @__PURE__ */ ce({
  ...mS,
  props: vS,
  emits: hS,
  setup(e, { emit: t }) {
    const n = e, r = we("checkbox"), { formItem: a } = _n(), { inputId: o, isLabeledByFormItem: l } = lo(n, {
      formItemContext: a
    }), s = async (c) => {
      t(ft, c), await Te(), t("change", c);
    }, u = E({
      get() {
        return n.modelValue;
      },
      set(c) {
        s(c);
      }
    });
    return vt(Or, {
      ...ab(wn(n), [
        "size",
        "min",
        "max",
        "disabled",
        "validateEvent",
        "fill",
        "textColor"
      ]),
      modelValue: u,
      changeEvent: s
    }), me(() => n.modelValue, () => {
      n.validateEvent && (a == null || a.validate("change").catch((c) => nt(c)));
    }), (c, f) => {
      var p;
      return O(), fe(gt(c.tag), {
        id: i(o),
        class: A(i(r).b("group")),
        role: "group",
        "aria-label": i(l) ? void 0 : c.label || "checkbox-group",
        "aria-labelledby": i(l) ? (p = i(a)) == null ? void 0 : p.labelId : void 0
      }, {
        default: re(() => [
          $e(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Uc = /* @__PURE__ */ Ae(gS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
const Zn = Vt(uS, {
  CheckboxButton: Yc,
  CheckboxGroup: Uc
});
kn(Yc);
kn(Uc);
const Gc = Me({
  size: $n,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
}), bS = Me({
  ...Gc,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
}), Xc = {
  [ft]: (e) => kt(e) || it(e) || Jt(e),
  [Gn]: (e) => kt(e) || it(e) || Jt(e)
}, Zc = Symbol("radioGroupKey"), Jc = (e, t) => {
  const n = x(), r = Oe(Zc, void 0), a = E(() => !!r), o = E({
    get() {
      return a.value ? r.modelValue : e.modelValue;
    },
    set(f) {
      a.value ? r.changeEvent(f) : t && t(ft, f), n.value.checked = e.modelValue === e.label;
    }
  }), l = Yt(E(() => r == null ? void 0 : r.size)), s = ia(E(() => r == null ? void 0 : r.disabled)), u = x(!1), c = E(() => s.value || a.value && o.value !== e.label ? -1 : 0);
  return {
    radioRef: n,
    isGroup: a,
    radioGroup: r,
    focus: u,
    size: l,
    disabled: s,
    tabIndex: c,
    modelValue: o
  };
}, yS = ["value", "name", "disabled"], wS = ce({
  name: "ElRadio"
}), CS = /* @__PURE__ */ ce({
  ...wS,
  props: bS,
  emits: Xc,
  setup(e, { emit: t }) {
    const n = e, r = we("radio"), { radioRef: a, radioGroup: o, focus: l, size: s, disabled: u, modelValue: c } = Jc(n, t);
    function f() {
      Te(() => t("change", c.value));
    }
    return (p, m) => {
      var h;
      return O(), K("label", {
        class: A([
          i(r).b(),
          i(r).is("disabled", i(u)),
          i(r).is("focus", i(l)),
          i(r).is("bordered", p.border),
          i(r).is("checked", i(c) === p.label),
          i(r).m(i(s))
        ])
      }, [
        Q("span", {
          class: A([
            i(r).e("input"),
            i(r).is("disabled", i(u)),
            i(r).is("checked", i(c) === p.label)
          ])
        }, [
          ze(Q("input", {
            ref_key: "radioRef",
            ref: a,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => bn(c) ? c.value = v : null),
            class: A(i(r).e("original")),
            value: p.label,
            name: p.name || ((h = i(o)) == null ? void 0 : h.name),
            disabled: i(u),
            type: "radio",
            onFocus: m[1] || (m[1] = (v) => l.value = !0),
            onBlur: m[2] || (m[2] = (v) => l.value = !1),
            onChange: f
          }, null, 42, yS), [
            [Qi, i(c)]
          ]),
          Q("span", {
            class: A(i(r).e("inner"))
          }, null, 2)
        ], 2),
        Q("span", {
          class: A(i(r).e("label")),
          onKeydown: m[3] || (m[3] = qe(() => {
          }, ["stop"]))
        }, [
          $e(p.$slots, "default", {}, () => [
            pt(ye(p.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var SS = /* @__PURE__ */ Ae(CS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
const kS = Me({
  ...Gc,
  name: {
    type: String,
    default: ""
  }
}), $S = ["value", "name", "disabled"], _S = ce({
  name: "ElRadioButton"
}), ES = /* @__PURE__ */ ce({
  ..._S,
  props: kS,
  setup(e) {
    const t = e, n = we("radio"), { radioRef: r, focus: a, size: o, disabled: l, modelValue: s, radioGroup: u } = Jc(t), c = E(() => ({
      backgroundColor: (u == null ? void 0 : u.fill) || "",
      borderColor: (u == null ? void 0 : u.fill) || "",
      boxShadow: u != null && u.fill ? `-1px 0 0 0 ${u.fill}` : "",
      color: (u == null ? void 0 : u.textColor) || ""
    }));
    return (f, p) => {
      var m;
      return O(), K("label", {
        class: A([
          i(n).b("button"),
          i(n).is("active", i(s) === f.label),
          i(n).is("disabled", i(l)),
          i(n).is("focus", i(a)),
          i(n).bm("button", i(o))
        ])
      }, [
        ze(Q("input", {
          ref_key: "radioRef",
          ref: r,
          "onUpdate:modelValue": p[0] || (p[0] = (h) => bn(s) ? s.value = h : null),
          class: A(i(n).be("button", "original-radio")),
          value: f.label,
          type: "radio",
          name: f.name || ((m = i(u)) == null ? void 0 : m.name),
          disabled: i(l),
          onFocus: p[1] || (p[1] = (h) => a.value = !0),
          onBlur: p[2] || (p[2] = (h) => a.value = !1)
        }, null, 42, $S), [
          [Qi, i(s)]
        ]),
        Q("span", {
          class: A(i(n).be("button", "inner")),
          style: Ge(i(s) === f.label ? i(c) : {}),
          onKeydown: p[3] || (p[3] = qe(() => {
          }, ["stop"]))
        }, [
          $e(f.$slots, "default", {}, () => [
            pt(ye(f.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var Qc = /* @__PURE__ */ Ae(ES, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
const TS = Me({
  id: {
    type: String,
    default: void 0
  },
  size: $n,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), OS = Xc, PS = ["id", "aria-label", "aria-labelledby"], xS = ce({
  name: "ElRadioGroup"
}), MS = /* @__PURE__ */ ce({
  ...xS,
  props: TS,
  emits: OS,
  setup(e, { emit: t }) {
    const n = e, r = we("radio"), a = oo(), o = x(), { formItem: l } = _n(), { inputId: s, isLabeledByFormItem: u } = lo(n, {
      formItemContext: l
    }), c = (p) => {
      t(ft, p), Te(() => t("change", p));
    };
    Xe(() => {
      const p = o.value.querySelectorAll("[type=radio]"), m = p[0];
      !Array.from(p).some((h) => h.checked) && m && (m.tabIndex = 0);
    });
    const f = E(() => n.name || a.value);
    return vt(Zc, Ut({
      ...wn(n),
      changeEvent: c,
      name: f
    })), me(() => n.modelValue, () => {
      n.validateEvent && (l == null || l.validate("change").catch((p) => nt(p)));
    }), (p, m) => (O(), K("div", {
      id: i(s),
      ref_key: "radioGroupRef",
      ref: o,
      class: A(i(r).b("group")),
      role: "radiogroup",
      "aria-label": i(u) ? void 0 : p.label || "radio-group",
      "aria-labelledby": i(u) ? i(l).labelId : void 0
    }, [
      $e(p.$slots, "default")
    ], 10, PS));
  }
});
var ed = /* @__PURE__ */ Ae(MS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
const AS = Vt(SS, {
  RadioButton: Qc,
  RadioGroup: ed
});
kn(ed);
kn(Qc);
var NS = ce({
  name: "NodeContent",
  setup() {
    return {
      ns: we("cascader-node")
    };
  },
  render() {
    const { ns: e } = this, { node: t, panel: n } = this.$parent, { data: r, label: a } = t, { renderLabelFn: o } = n;
    return Re("span", { class: e.e("label") }, o ? o({ node: t, data: r }) : a);
  }
});
const Kl = Symbol(), RS = ce({
  name: "ElCascaderNode",
  components: {
    ElCheckbox: Zn,
    ElRadio: AS,
    NodeContent: NS,
    ElIcon: Ie,
    Check: Ku,
    Loading: oa,
    ArrowRight: An
  },
  props: {
    node: {
      type: Object,
      required: !0
    },
    menuId: String
  },
  emits: ["expand"],
  setup(e, { emit: t }) {
    const n = Oe(Kl), r = we("cascader-node"), a = E(() => n.isHoverMenu), o = E(() => n.config.multiple), l = E(() => n.config.checkStrictly), s = E(() => {
      var S;
      return (S = n.checkedNodes[0]) == null ? void 0 : S.uid;
    }), u = E(() => e.node.isDisabled), c = E(() => e.node.isLeaf), f = E(() => l.value && !c.value || !u.value), p = E(() => h(n.expandingNode)), m = E(() => l.value && n.checkedNodes.some(h)), h = (S) => {
      var $;
      const { level: T, uid: R } = e.node;
      return (($ = S == null ? void 0 : S.pathNodes[T - 1]) == null ? void 0 : $.uid) === R;
    }, v = () => {
      p.value || n.expandNode(e.node);
    }, d = (S) => {
      const { node: $ } = e;
      S !== $.checked && n.handleCheckChange($, S);
    }, y = () => {
      n.lazyLoad(e.node, () => {
        c.value || v();
      });
    }, w = (S) => {
      a.value && (C(), !c.value && t("expand", S));
    }, C = () => {
      const { node: S } = e;
      !f.value || S.loading || (S.loaded ? v() : y());
    }, g = () => {
      a.value && !c.value || (c.value && !u.value && !l.value && !o.value ? k(!0) : C());
    }, b = (S) => {
      l.value ? (d(S), e.node.loaded && v()) : k(S);
    }, k = (S) => {
      e.node.loaded ? (d(S), !l.value && v()) : y();
    };
    return {
      panel: n,
      isHoverMenu: a,
      multiple: o,
      checkStrictly: l,
      checkedNodeId: s,
      isDisabled: u,
      isLeaf: c,
      expandable: f,
      inExpandingPath: p,
      inCheckedPath: m,
      ns: r,
      handleHoverExpand: w,
      handleExpand: C,
      handleClick: g,
      handleCheck: k,
      handleSelectCheck: b
    };
  }
}), IS = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"], DS = /* @__PURE__ */ Q("span", null, null, -1);
function LS(e, t, n, r, a, o) {
  const l = Ve("el-checkbox"), s = Ve("el-radio"), u = Ve("check"), c = Ve("el-icon"), f = Ve("node-content"), p = Ve("loading"), m = Ve("arrow-right");
  return O(), K("li", {
    id: `${e.menuId}-${e.node.uid}`,
    role: "menuitem",
    "aria-haspopup": !e.isLeaf,
    "aria-owns": e.isLeaf ? null : e.menuId,
    "aria-expanded": e.inExpandingPath,
    tabindex: e.expandable ? -1 : void 0,
    class: A([
      e.ns.b(),
      e.ns.is("selectable", e.checkStrictly),
      e.ns.is("active", e.node.checked),
      e.ns.is("disabled", !e.expandable),
      e.inExpandingPath && "in-active-path",
      e.inCheckedPath && "in-checked-path"
    ]),
    onMouseenter: t[2] || (t[2] = (...h) => e.handleHoverExpand && e.handleHoverExpand(...h)),
    onFocus: t[3] || (t[3] = (...h) => e.handleHoverExpand && e.handleHoverExpand(...h)),
    onClick: t[4] || (t[4] = (...h) => e.handleClick && e.handleClick(...h))
  }, [
    de(" prefix "),
    e.multiple ? (O(), fe(l, {
      key: 0,
      "model-value": e.node.checked,
      indeterminate: e.node.indeterminate,
      disabled: e.isDisabled,
      onClick: t[0] || (t[0] = qe(() => {
      }, ["stop"])),
      "onUpdate:modelValue": e.handleSelectCheck
    }, null, 8, ["model-value", "indeterminate", "disabled", "onUpdate:modelValue"])) : e.checkStrictly ? (O(), fe(s, {
      key: 1,
      "model-value": e.checkedNodeId,
      label: e.node.uid,
      disabled: e.isDisabled,
      "onUpdate:modelValue": e.handleSelectCheck,
      onClick: t[1] || (t[1] = qe(() => {
      }, ["stop"]))
    }, {
      default: re(() => [
        de(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),
        DS
      ]),
      _: 1
    }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"])) : e.isLeaf && e.node.checked ? (O(), fe(c, {
      key: 2,
      class: A(e.ns.e("prefix"))
    }, {
      default: re(() => [
        J(u)
      ]),
      _: 1
    }, 8, ["class"])) : de("v-if", !0),
    de(" content "),
    J(f),
    de(" postfix "),
    e.isLeaf ? de("v-if", !0) : (O(), K(Ne, { key: 3 }, [
      e.node.loading ? (O(), fe(c, {
        key: 0,
        class: A([e.ns.is("loading"), e.ns.e("postfix")])
      }, {
        default: re(() => [
          J(p)
        ]),
        _: 1
      }, 8, ["class"])) : (O(), fe(c, {
        key: 1,
        class: A(["arrow-right", e.ns.e("postfix")])
      }, {
        default: re(() => [
          J(m)
        ]),
        _: 1
      }, 8, ["class"]))
    ], 64))
  ], 42, IS);
}
var FS = /* @__PURE__ */ Ae(RS, [["render", LS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);
const BS = ce({
  name: "ElCascaderMenu",
  components: {
    Loading: oa,
    ElIcon: Ie,
    ElScrollbar: Tr,
    ElCascaderNode: FS
  },
  props: {
    nodes: {
      type: Array,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    }
  },
  setup(e) {
    const t = Ke(), n = we("cascader-menu"), { t: r } = ot(), a = Jy();
    let o = null, l = null;
    const s = Oe(Kl), u = x(null), c = E(() => !e.nodes.length), f = E(() => !s.initialLoaded), p = E(() => `cascader-menu-${a}-${e.index}`), m = (y) => {
      o = y.target;
    }, h = (y) => {
      if (!(!s.isHoverMenu || !o || !u.value))
        if (o.contains(y.target)) {
          v();
          const w = t.vnode.el, { left: C } = w.getBoundingClientRect(), { offsetWidth: g, offsetHeight: b } = w, k = y.clientX - C, S = o.offsetTop, $ = S + o.offsetHeight;
          u.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${k} ${S} L${g} 0 V${S} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${k} ${$} L${g} ${b} V${$} Z" />
        `;
        } else
          l || (l = window.setTimeout(d, s.config.hoverThreshold));
    }, v = () => {
      l && (clearTimeout(l), l = null);
    }, d = () => {
      u.value && (u.value.innerHTML = "", v());
    };
    return {
      ns: n,
      panel: s,
      hoverZone: u,
      isEmpty: c,
      isLoading: f,
      menuId: p,
      t: r,
      handleExpand: m,
      handleMouseMove: h,
      clearHoverZone: d
    };
  }
});
function zS(e, t, n, r, a, o) {
  const l = Ve("el-cascader-node"), s = Ve("loading"), u = Ve("el-icon"), c = Ve("el-scrollbar");
  return O(), fe(c, {
    key: e.menuId,
    tag: "ul",
    role: "menu",
    class: A(e.ns.b()),
    "wrap-class": e.ns.e("wrap"),
    "view-class": [e.ns.e("list"), e.ns.is("empty", e.isEmpty)],
    onMousemove: e.handleMouseMove,
    onMouseleave: e.clearHoverZone
  }, {
    default: re(() => {
      var f;
      return [
        (O(!0), K(Ne, null, Ye(e.nodes, (p) => (O(), fe(l, {
          key: p.uid,
          node: p,
          "menu-id": e.menuId,
          onExpand: e.handleExpand
        }, null, 8, ["node", "menu-id", "onExpand"]))), 128)),
        e.isLoading ? (O(), K("div", {
          key: 0,
          class: A(e.ns.e("empty-text"))
        }, [
          J(u, {
            size: "14",
            class: A(e.ns.is("loading"))
          }, {
            default: re(() => [
              J(s)
            ]),
            _: 1
          }, 8, ["class"]),
          pt(" " + ye(e.t("el.cascader.loading")), 1)
        ], 2)) : e.isEmpty ? (O(), K("div", {
          key: 1,
          class: A(e.ns.e("empty-text"))
        }, ye(e.t("el.cascader.noData")), 3)) : (f = e.panel) != null && f.isHoverMenu ? (O(), K("svg", {
          key: 2,
          ref: "hoverZone",
          class: A(e.ns.e("hover-zone"))
        }, null, 2)) : de("v-if", !0)
      ];
    }),
    _: 1
  }, 8, ["class", "wrap-class", "view-class", "onMousemove", "onMouseleave"]);
}
var VS = /* @__PURE__ */ Ae(BS, [["render", zS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);
let HS = 0;
const WS = (e) => {
  const t = [e];
  let { parent: n } = e;
  for (; n; )
    t.unshift(n), n = n.parent;
  return t;
};
class kr {
  constructor(t, n, r, a = !1) {
    this.data = t, this.config = n, this.parent = r, this.root = a, this.uid = HS++, this.checked = !1, this.indeterminate = !1, this.loading = !1;
    const { value: o, label: l, children: s } = n, u = t[s], c = WS(this);
    this.level = a ? 0 : r ? r.level + 1 : 1, this.value = t[o], this.label = t[l], this.pathNodes = c, this.pathValues = c.map((f) => f.value), this.pathLabels = c.map((f) => f.label), this.childrenData = u, this.children = (u || []).map((f) => new kr(f, n, this)), this.loaded = !n.lazy || this.isLeaf || !qr(u);
  }
  get isDisabled() {
    const { data: t, parent: n, config: r } = this, { disabled: a, checkStrictly: o } = r;
    return (dt(a) ? a(t, this) : !!t[a]) || !o && (n == null ? void 0 : n.isDisabled);
  }
  get isLeaf() {
    const { data: t, config: n, childrenData: r, loaded: a } = this, { lazy: o, leaf: l } = n, s = dt(l) ? l(t, this) : t[l];
    return Un(s) ? o && !a ? !1 : !(Array.isArray(r) && r.length) : !!s;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(t) {
    const { childrenData: n, children: r } = this, a = new kr(t, this.config, this);
    return Array.isArray(n) ? n.push(t) : this.childrenData = [t], r.push(a), a;
  }
  calcText(t, n) {
    const r = t ? this.pathLabels.join(n) : this.label;
    return this.text = r, r;
  }
  broadcast(t, ...n) {
    const r = `onParent${Vs(t)}`;
    this.children.forEach((a) => {
      a && (a.broadcast(t, ...n), a[r] && a[r](...n));
    });
  }
  emit(t, ...n) {
    const { parent: r } = this, a = `onChild${Vs(t)}`;
    r && (r[a] && r[a](...n), r.emit(t, ...n));
  }
  onParentCheck(t) {
    this.isDisabled || this.setCheckState(t);
  }
  onChildCheck() {
    const { children: t } = this, n = t.filter((a) => !a.isDisabled), r = n.length ? n.every((a) => a.checked) : !1;
    this.setCheckState(r);
  }
  setCheckState(t) {
    const n = this.children.length, r = this.children.reduce((a, o) => {
      const l = o.checked ? 1 : o.indeterminate ? 0.5 : 0;
      return a + l;
    }, 0);
    this.checked = this.loaded && this.children.filter((a) => !a.isDisabled).every((a) => a.loaded && a.checked) && t, this.indeterminate = this.loaded && r !== n && r > 0;
  }
  doCheck(t) {
    if (this.checked === t)
      return;
    const { checkStrictly: n, multiple: r } = this.config;
    n || !r ? this.checked = t : (this.broadcast("check", t), this.setCheckState(t), this.emit("check"));
  }
}
const rl = (e, t) => e.reduce((n, r) => (r.isLeaf ? n.push(r) : (!t && n.push(r), n = n.concat(rl(r.children, t))), n), []);
class Bi {
  constructor(t, n) {
    this.config = n;
    const r = (t || []).map((a) => new kr(a, this.config));
    this.nodes = r, this.allNodes = rl(r, !1), this.leafNodes = rl(r, !0);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(t) {
    return t ? this.leafNodes : this.allNodes;
  }
  appendNode(t, n) {
    const r = n ? n.appendChild(t) : new kr(t, this.config);
    n || this.nodes.push(r), this.allNodes.push(r), r.isLeaf && this.leafNodes.push(r);
  }
  appendNodes(t, n) {
    t.forEach((r) => this.appendNode(r, n));
  }
  getNodeByValue(t, n = !1) {
    return !t && t !== 0 ? null : this.getFlattedNodes(n).find((a) => tn(a.value, t) || tn(a.pathValues, t)) || null;
  }
  getSameNode(t) {
    return t && this.getFlattedNodes(!1).find(({ value: r, level: a }) => tn(t.value, r) && t.level === a) || null;
  }
}
const td = Me({
  modelValue: {
    type: be([Number, String, Array])
  },
  options: {
    type: be(Array),
    default: () => []
  },
  props: {
    type: be(Object),
    default: () => ({})
  }
}), jS = {
  expandTrigger: "click",
  multiple: !1,
  checkStrictly: !1,
  emitPath: !0,
  lazy: !1,
  lazyLoad: fr,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
}, KS = (e) => E(() => ({
  ...jS,
  ...e.props
})), zi = (e) => {
  if (!e)
    return 0;
  const t = e.id.split("-");
  return Number(t[t.length - 2]);
}, qS = (e) => {
  if (!e)
    return;
  const t = e.querySelector("input");
  t ? t.click() : tu(e) && e.click();
}, YS = (e, t) => {
  const n = t.slice(0), r = n.map((o) => o.uid), a = e.reduce((o, l) => {
    const s = r.indexOf(l.uid);
    return s > -1 && (o.push(l), n.splice(s, 1), r.splice(s, 1)), o;
  }, []);
  return a.push(...n), a;
}, US = ce({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu: VS
  },
  props: {
    ...td,
    border: {
      type: Boolean,
      default: !0
    },
    renderLabel: Function
  },
  emits: [ft, Gn, "close", "expand-change"],
  setup(e, { emit: t, slots: n }) {
    let r = !1;
    const a = we("cascader"), o = KS(e);
    let l = null;
    const s = x(!0), u = x([]), c = x(null), f = x([]), p = x(null), m = x([]), h = E(() => o.value.expandTrigger === "hover"), v = E(() => e.renderLabel || n.default), d = () => {
      const { options: F } = e, N = o.value;
      r = !1, l = new Bi(F, N), f.value = [l.getNodes()], N.lazy && qr(e.options) ? (s.value = !1, y(void 0, (B) => {
        B && (l = new Bi(B, N), f.value = [l.getNodes()]), s.value = !0, T(!1, !0);
      })) : T(!1, !0);
    }, y = (F, N) => {
      const B = o.value;
      F = F || new kr({}, B, void 0, !0), F.loading = !0;
      const W = (q) => {
        const M = F, H = M.root ? null : M;
        q && (l == null || l.appendNodes(q, H)), M.loading = !1, M.loaded = !0, M.childrenData = M.childrenData || [], N && N(q);
      };
      B.lazyLoad(F, W);
    }, w = (F, N) => {
      var B;
      const { level: W } = F, q = f.value.slice(0, W);
      let M;
      F.isLeaf ? M = F.pathNodes[W - 2] : (M = F, q.push(F.children)), ((B = p.value) == null ? void 0 : B.uid) !== (M == null ? void 0 : M.uid) && (p.value = F, f.value = q, !N && t("expand-change", (F == null ? void 0 : F.pathValues) || []));
    }, C = (F, N, B = !0) => {
      const { checkStrictly: W, multiple: q } = o.value, M = m.value[0];
      r = !0, !q && (M == null || M.doCheck(!1)), F.doCheck(N), $(), B && !q && !W && t("close"), !B && !q && !W && g(F);
    }, g = (F) => {
      F && (F = F.parent, g(F), F && w(F));
    }, b = (F) => l == null ? void 0 : l.getFlattedNodes(F), k = (F) => {
      var N;
      return (N = b(F)) == null ? void 0 : N.filter((B) => B.checked !== !1);
    }, S = () => {
      m.value.forEach((F) => F.doCheck(!1)), $(), f.value = f.value.slice(0, 1), p.value = null, t("expand-change", []);
    }, $ = () => {
      var F;
      const { checkStrictly: N, multiple: B } = o.value, W = m.value, q = k(!N), M = YS(W, q), H = M.map((_) => _.valueByOption);
      m.value = M, c.value = B ? H : (F = H[0]) != null ? F : null;
    }, T = (F = !1, N = !1) => {
      const { modelValue: B } = e, { lazy: W, multiple: q, checkStrictly: M } = o.value, H = !M;
      if (!(!s.value || r || !N && tn(B, c.value)))
        if (W && !F) {
          const L = js(Jg(mn(B))).map((U) => l == null ? void 0 : l.getNodeByValue(U)).filter((U) => !!U && !U.loaded && !U.loading);
          L.length ? L.forEach((U) => {
            y(U, () => T(!1, N));
          }) : T(!0, N);
        } else {
          const _ = q ? mn(B) : [B], L = js(_.map((U) => l == null ? void 0 : l.getNodeByValue(U, H)));
          R(L, N), c.value = Mu(B);
        }
    }, R = (F, N = !0) => {
      const { checkStrictly: B } = o.value, W = m.value, q = F.filter((_) => !!_ && (B || _.isLeaf)), M = l == null ? void 0 : l.getSameNode(p.value), H = N && M || q[0];
      H ? H.pathNodes.forEach((_) => w(_, !0)) : p.value = null, W.forEach((_) => _.doCheck(!1)), q.forEach((_) => _.doCheck(!0)), m.value = q, Te(z);
    }, z = () => {
      at && u.value.forEach((F) => {
        const N = F == null ? void 0 : F.$el;
        if (N) {
          const B = N.querySelector(`.${a.namespace.value}-scrollbar__wrap`), W = N.querySelector(`.${a.b("node")}.${a.is("active")}`) || N.querySelector(`.${a.b("node")}.in-active-path`);
          Wu(B, W);
        }
      });
    }, V = (F) => {
      const N = F.target, { code: B } = F;
      switch (B) {
        case De.up:
        case De.down: {
          F.preventDefault();
          const W = B === De.up ? -1 : 1;
          $a(nu(N, W, `.${a.b("node")}[tabindex="-1"]`));
          break;
        }
        case De.left: {
          F.preventDefault();
          const W = u.value[zi(N) - 1], q = W == null ? void 0 : W.$el.querySelector(`.${a.b("node")}[aria-expanded="true"]`);
          $a(q);
          break;
        }
        case De.right: {
          F.preventDefault();
          const W = u.value[zi(N) + 1], q = W == null ? void 0 : W.$el.querySelector(`.${a.b("node")}[tabindex="-1"]`);
          $a(q);
          break;
        }
        case De.enter:
          qS(N);
          break;
      }
    };
    return vt(Kl, Ut({
      config: o,
      expandingNode: p,
      checkedNodes: m,
      isHoverMenu: h,
      initialLoaded: s,
      renderLabelFn: v,
      lazyLoad: y,
      expandNode: w,
      handleCheckChange: C
    })), me([o, () => e.options], d, {
      deep: !0,
      immediate: !0
    }), me(() => e.modelValue, () => {
      r = !1, T();
    }, {
      deep: !0
    }), me(() => c.value, (F) => {
      tn(F, e.modelValue) || (t(ft, F), t(Gn, F));
    }), Bd(() => u.value = []), Xe(() => !qr(e.modelValue) && T()), {
      ns: a,
      menuList: u,
      menus: f,
      checkedNodes: m,
      handleKeyDown: V,
      handleCheckChange: C,
      getFlattedNodes: b,
      getCheckedNodes: k,
      clearCheckedNodes: S,
      calculateCheckedValue: $,
      scrollToExpandingNode: z
    };
  }
});
function GS(e, t, n, r, a, o) {
  const l = Ve("el-cascader-menu");
  return O(), K("div", {
    class: A([e.ns.b("panel"), e.ns.is("bordered", e.border)]),
    onKeydown: t[0] || (t[0] = (...s) => e.handleKeyDown && e.handleKeyDown(...s))
  }, [
    (O(!0), K(Ne, null, Ye(e.menus, (s, u) => (O(), fe(l, {
      key: u,
      ref_for: !0,
      ref: (c) => e.menuList[u] = c,
      index: u,
      nodes: [...s]
    }, null, 8, ["index", "nodes"]))), 128))
  ], 34);
}
var Aa = /* @__PURE__ */ Ae(US, [["render", GS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);
Aa.install = (e) => {
  e.component(Aa.name, Aa);
};
const XS = Aa, ql = Me({
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: nr,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), ZS = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
}, JS = ce({
  name: "ElTag"
}), QS = /* @__PURE__ */ ce({
  ...JS,
  props: ql,
  emits: ZS,
  setup(e, { emit: t }) {
    const n = e, r = Yt(), a = we("tag"), o = E(() => {
      const { type: u, hit: c, effect: f, closable: p, round: m } = n;
      return [
        a.b(),
        a.is("closable", p),
        a.m(u),
        a.m(r.value),
        a.m(f),
        a.is("hit", c),
        a.is("round", m)
      ];
    }), l = (u) => {
      t("close", u);
    }, s = (u) => {
      t("click", u);
    };
    return (u, c) => u.disableTransitions ? (O(), K("span", {
      key: 0,
      class: A(i(o)),
      style: Ge({ backgroundColor: u.color }),
      onClick: s
    }, [
      Q("span", {
        class: A(i(a).e("content"))
      }, [
        $e(u.$slots, "default")
      ], 2),
      u.closable ? (O(), fe(i(Ie), {
        key: 0,
        class: A(i(a).e("close")),
        onClick: qe(l, ["stop"])
      }, {
        default: re(() => [
          J(i(Hs))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : de("v-if", !0)
    ], 6)) : (O(), fe(ur, {
      key: 1,
      name: `${i(a).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: re(() => [
        Q("span", {
          class: A(i(o)),
          style: Ge({ backgroundColor: u.color }),
          onClick: s
        }, [
          Q("span", {
            class: A(i(a).e("content"))
          }, [
            $e(u.$slots, "default")
          ], 2),
          u.closable ? (O(), fe(i(Ie), {
            key: 0,
            class: A(i(a).e("close")),
            onClick: qe(l, ["stop"])
          }, {
            default: re(() => [
              J(i(Hs))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : de("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var ek = /* @__PURE__ */ Ae(QS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const al = Vt(ek), tk = Me({
  ...td,
  size: $n,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: {
    type: be(Function),
    default: (e, t) => e.text.includes(t)
  },
  separator: {
    type: String,
    default: " / "
  },
  showAllLevels: {
    type: Boolean,
    default: !0
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: !1
  },
  debounce: {
    type: Number,
    default: 300
  },
  beforeFilter: {
    type: be(Function),
    default: () => !0
  },
  popperClass: {
    type: String,
    default: ""
  },
  teleported: uo.teleported,
  tagType: { ...ql.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: !0
  }
}), nk = {
  [ft]: (e) => !!e || e === null,
  [Gn]: (e) => !!e || e === null,
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  visibleChange: (e) => Jt(e),
  expandChange: (e) => !!e,
  removeTag: (e) => !!e
}, rk = { key: 0 }, ak = ["placeholder", "onKeydown"], ok = ["onClick"], lk = "ElCascader", sk = ce({
  name: lk
}), ik = /* @__PURE__ */ ce({
  ...sk,
  props: tk,
  emits: nk,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = {
      modifiers: [
        {
          name: "arrowPosition",
          enabled: !0,
          phase: "main",
          fn: ({ state: D }) => {
            const { modifiersData: X, placement: j } = D;
            ["right", "left", "bottom", "top"].includes(j) || (X.arrow.x = 35);
          },
          requires: ["arrow"]
        }
      ]
    }, o = Jr();
    let l = 0, s = 0;
    const u = we("cascader"), c = we("input"), { t: f } = ot(), { form: p, formItem: m } = _n(), h = x(null), v = x(null), d = x(null), y = x(null), w = x(null), C = x(!1), g = x(!1), b = x(!1), k = x(!1), S = x(""), $ = x(""), T = x([]), R = x([]), z = x([]), V = x(!1), F = E(() => o.style), N = E(() => r.disabled || (p == null ? void 0 : p.disabled)), B = E(() => r.placeholder || f("el.cascader.placeholder")), W = E(() => $.value || T.value.length > 0 || V.value ? "" : B.value), q = Yt(), M = E(() => ["small"].includes(q.value) ? "small" : "default"), H = E(() => !!r.props.multiple), _ = E(() => !r.filterable || H.value), L = E(() => H.value ? $.value : S.value), U = E(() => {
      var D;
      return ((D = y.value) == null ? void 0 : D.checkedNodes) || [];
    }), I = E(() => !r.clearable || N.value || b.value || !g.value ? !1 : !!U.value.length), G = E(() => {
      const { showAllLevels: D, separator: X } = r, j = U.value;
      return j.length ? H.value ? "" : j[0].calcText(D, X) : "";
    }), ne = E({
      get() {
        return Mu(r.modelValue);
      },
      set(D) {
        n(ft, D), n(Gn, D), r.validateEvent && (m == null || m.validate("change").catch((X) => nt(X)));
      }
    }), he = E(() => [
      u.b(),
      u.m(q.value),
      u.is("disabled", N.value),
      o.class
    ]), ge = E(() => [
      c.e("icon"),
      "icon-arrow-down",
      u.is("reverse", C.value)
    ]), se = E(() => u.is("focus", C.value || k.value)), le = E(() => {
      var D, X;
      return (X = (D = h.value) == null ? void 0 : D.popperRef) == null ? void 0 : X.contentRef;
    }), ue = (D) => {
      var X, j, te;
      N.value || (D = D ?? !C.value, D !== C.value && (C.value = D, (j = (X = v.value) == null ? void 0 : X.input) == null || j.setAttribute("aria-expanded", `${D}`), D ? (ve(), Te((te = y.value) == null ? void 0 : te.scrollToExpandingNode)) : r.filterable && st(), n("visibleChange", D)));
    }, ve = () => {
      Te(() => {
        var D;
        (D = h.value) == null || D.updatePopper();
      });
    }, _e = () => {
      b.value = !1;
    }, Pe = (D) => {
      const { showAllLevels: X, separator: j } = r;
      return {
        node: D,
        key: D.uid,
        text: D.calcText(X, j),
        hitState: !1,
        closable: !N.value && !D.isDisabled,
        isCollapseTag: !1
      };
    }, He = (D) => {
      var X;
      const j = D.node;
      j.doCheck(!1), (X = y.value) == null || X.calculateCheckedValue(), n("removeTag", j.valueByOption);
    }, We = () => {
      if (!H.value)
        return;
      const D = U.value, X = [], j = [];
      if (D.forEach((te) => j.push(Pe(te))), R.value = j, D.length) {
        const [te, ...P] = D, ie = P.length;
        X.push(Pe(te)), ie && (r.collapseTags ? X.push({
          key: -1,
          text: `+ ${ie}`,
          closable: !1,
          isCollapseTag: !0
        }) : P.forEach((Ce) => X.push(Pe(Ce))));
      }
      T.value = X;
    }, Ue = () => {
      var D, X;
      const { filterMethod: j, showAllLevels: te, separator: P } = r, ie = (X = (D = y.value) == null ? void 0 : D.getFlattedNodes(!r.props.checkStrictly)) == null ? void 0 : X.filter((Ce) => Ce.isDisabled ? !1 : (Ce.calcText(te, P), j(Ce, L.value)));
      H.value && (T.value.forEach((Ce) => {
        Ce.hitState = !1;
      }), R.value.forEach((Ce) => {
        Ce.hitState = !1;
      })), b.value = !0, z.value = ie, ve();
    }, je = () => {
      var D;
      let X;
      b.value && w.value ? X = w.value.$el.querySelector(`.${u.e("suggestion-item")}`) : X = (D = y.value) == null ? void 0 : D.$el.querySelector(`.${u.b("node")}[tabindex="-1"]`), X && (X.focus(), !b.value && X.click());
    }, rt = () => {
      var D, X;
      const j = (D = v.value) == null ? void 0 : D.input, te = d.value, P = (X = w.value) == null ? void 0 : X.$el;
      if (!(!at || !j)) {
        if (P) {
          const ie = P.querySelector(`.${u.e("suggestion-list")}`);
          ie.style.minWidth = `${j.offsetWidth}px`;
        }
        if (te) {
          const { offsetHeight: ie } = te, Ce = T.value.length > 0 ? `${Math.max(ie + 6, l)}px` : `${l}px`;
          j.style.height = Ce, ve();
        }
      }
    }, ht = (D) => {
      var X;
      return (X = y.value) == null ? void 0 : X.getCheckedNodes(D);
    }, lt = (D) => {
      ve(), n("expandChange", D);
    }, Se = (D) => {
      var X;
      const j = (X = D.target) == null ? void 0 : X.value;
      if (D.type === "compositionend")
        V.value = !1, Te(() => Z(j));
      else {
        const te = j[j.length - 1] || "";
        V.value = !Ml(te);
      }
    }, ut = (D) => {
      if (!V.value)
        switch (D.code) {
          case De.enter:
            ue();
            break;
          case De.down:
            ue(!0), Te(je), D.preventDefault();
            break;
          case De.esc:
            C.value === !0 && (D.preventDefault(), D.stopPropagation(), ue(!1));
            break;
          case De.tab:
            ue(!1);
            break;
        }
    }, ct = () => {
      var D;
      (D = y.value) == null || D.clearCheckedNodes(), !C.value && r.filterable && st(), ue(!1);
    }, st = () => {
      const { value: D } = G;
      S.value = D, $.value = D;
    }, Ze = (D) => {
      var X, j;
      const { checked: te } = D;
      H.value ? (X = y.value) == null || X.handleCheckChange(D, !te, !1) : (!te && ((j = y.value) == null || j.handleCheckChange(D, !0, !1)), ue(!1));
    }, ae = (D) => {
      const X = D.target, { code: j } = D;
      switch (j) {
        case De.up:
        case De.down: {
          const te = j === De.up ? -1 : 1;
          $a(nu(X, te, `.${u.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case De.enter:
          X.click();
          break;
      }
    }, ke = () => {
      const D = T.value, X = D[D.length - 1];
      s = $.value ? 0 : s + 1, !(!X || !s || r.collapseTags && D.length > 1) && (X.hitState ? He(X) : X.hitState = !0);
    }, Fe = (D) => {
      const X = D.target, j = u.e("search-input");
      X.className === j && (k.value = !0), n("focus", D);
    }, Je = (D) => {
      k.value = !1, n("blur", D);
    }, ee = Rn(() => {
      const { value: D } = L;
      if (!D)
        return;
      const X = r.beforeFilter(D);
      lf(X) ? X.then(Ue).catch(() => {
      }) : X !== !1 ? Ue() : _e();
    }, r.debounce), Z = (D, X) => {
      !C.value && ue(!0), !(X != null && X.isComposing) && (D ? ee() : _e());
    };
    return me(b, ve), me([U, N], We), me(T, () => {
      Te(() => rt());
    }), me(G, st, { immediate: !0 }), Xe(() => {
      const D = v.value.input, X = Number.parseFloat(Gd(c.cssVarName("input-height"), D).value) - 2;
      l = D.offsetHeight || X, Nn(D, rt);
    }), t({
      getCheckedNodes: ht,
      cascaderPanelRef: y,
      togglePopperVisible: ue,
      contentRef: le
    }), (D, X) => (O(), fe(i(Zr), {
      ref_key: "tooltipRef",
      ref: h,
      visible: C.value,
      teleported: D.teleported,
      "popper-class": [i(u).e("dropdown"), D.popperClass],
      "popper-options": a,
      "fallback-placements": [
        "bottom-start",
        "bottom",
        "top-start",
        "top",
        "right",
        "left"
      ],
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      placement: "bottom-start",
      transition: `${i(u).namespace.value}-zoom-in-top`,
      effect: "light",
      pure: "",
      persistent: "",
      onHide: _e
    }, {
      default: re(() => [
        ze((O(), K("div", {
          class: A(i(he)),
          style: Ge(i(F)),
          onClick: X[5] || (X[5] = () => ue(i(_) ? void 0 : !0)),
          onKeydown: ut,
          onMouseenter: X[6] || (X[6] = (j) => g.value = !0),
          onMouseleave: X[7] || (X[7] = (j) => g.value = !1)
        }, [
          J(i(Ft), {
            ref_key: "input",
            ref: v,
            modelValue: S.value,
            "onUpdate:modelValue": X[1] || (X[1] = (j) => S.value = j),
            placeholder: i(W),
            readonly: i(_),
            disabled: i(N),
            "validate-event": !1,
            size: i(q),
            class: A(i(se)),
            tabindex: i(H) && D.filterable && !i(N) ? -1 : void 0,
            onCompositionstart: Se,
            onCompositionupdate: Se,
            onCompositionend: Se,
            onFocus: Fe,
            onBlur: Je,
            onInput: Z
          }, {
            suffix: re(() => [
              i(I) ? (O(), fe(i(Ie), {
                key: "clear",
                class: A([i(c).e("icon"), "icon-circle-close"]),
                onClick: qe(ct, ["stop"])
              }, {
                default: re(() => [
                  J(i(aa))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : (O(), fe(i(Ie), {
                key: "arrow-down",
                class: A(i(ge)),
                onClick: X[0] || (X[0] = qe((j) => ue(), ["stop"]))
              }, {
                default: re(() => [
                  J(i(to))
                ]),
                _: 1
              }, 8, ["class"]))
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "tabindex"]),
          i(H) ? (O(), K("div", {
            key: 0,
            ref_key: "tagWrapper",
            ref: d,
            class: A(i(u).e("tags"))
          }, [
            (O(!0), K(Ne, null, Ye(T.value, (j) => (O(), fe(i(al), {
              key: j.key,
              type: D.tagType,
              size: i(M),
              hit: j.hitState,
              closable: j.closable,
              "disable-transitions": "",
              onClose: (te) => He(j)
            }, {
              default: re(() => [
                j.isCollapseTag === !1 ? (O(), K("span", rk, ye(j.text), 1)) : (O(), fe(i(Zr), {
                  key: 1,
                  disabled: C.value || !D.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  placement: "bottom",
                  effect: "light"
                }, {
                  default: re(() => [
                    Q("span", null, ye(j.text), 1)
                  ]),
                  content: re(() => [
                    Q("div", {
                      class: A(i(u).e("collapse-tags"))
                    }, [
                      (O(!0), K(Ne, null, Ye(R.value.slice(1), (te, P) => (O(), K("div", {
                        key: P,
                        class: A(i(u).e("collapse-tag"))
                      }, [
                        (O(), fe(i(al), {
                          key: te.key,
                          class: "in-tooltip",
                          type: D.tagType,
                          size: i(M),
                          hit: te.hitState,
                          closable: te.closable,
                          "disable-transitions": "",
                          onClose: (ie) => He(te)
                        }, {
                          default: re(() => [
                            Q("span", null, ye(te.text), 1)
                          ]),
                          _: 2
                        }, 1032, ["type", "size", "hit", "closable", "onClose"]))
                      ], 2))), 128))
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["disabled"]))
              ]),
              _: 2
            }, 1032, ["type", "size", "hit", "closable", "onClose"]))), 128)),
            D.filterable && !i(N) ? ze((O(), K("input", {
              key: 0,
              "onUpdate:modelValue": X[2] || (X[2] = (j) => $.value = j),
              type: "text",
              class: A(i(u).e("search-input")),
              placeholder: i(G) ? "" : i(B),
              onInput: X[3] || (X[3] = (j) => Z($.value, j)),
              onClick: X[4] || (X[4] = qe((j) => ue(!0), ["stop"])),
              onKeydown: mt(ke, ["delete"]),
              onCompositionstart: Se,
              onCompositionupdate: Se,
              onCompositionend: Se,
              onFocus: Fe,
              onBlur: Je
            }, null, 42, ak)), [
              [eu, $.value]
            ]) : de("v-if", !0)
          ], 2)) : de("v-if", !0)
        ], 38)), [
          [i(Sr), () => ue(!1), i(le)]
        ])
      ]),
      content: re(() => [
        ze(J(i(XS), {
          ref_key: "cascaderPanelRef",
          ref: y,
          modelValue: i(ne),
          "onUpdate:modelValue": X[8] || (X[8] = (j) => bn(ne) ? ne.value = j : null),
          options: D.options,
          props: r.props,
          border: !1,
          "render-label": D.$slots.default,
          onExpandChange: lt,
          onClose: X[9] || (X[9] = (j) => D.$nextTick(() => ue(!1)))
        }, null, 8, ["modelValue", "options", "props", "render-label"]), [
          [wt, !b.value]
        ]),
        D.filterable ? ze((O(), fe(i(Tr), {
          key: 0,
          ref_key: "suggestionPanel",
          ref: w,
          tag: "ul",
          class: A(i(u).e("suggestion-panel")),
          "view-class": i(u).e("suggestion-list"),
          onKeydown: ae
        }, {
          default: re(() => [
            z.value.length ? (O(!0), K(Ne, { key: 0 }, Ye(z.value, (j) => (O(), K("li", {
              key: j.uid,
              class: A([
                i(u).e("suggestion-item"),
                i(u).is("checked", j.checked)
              ]),
              tabindex: -1,
              onClick: (te) => Ze(j)
            }, [
              Q("span", null, ye(j.text), 1),
              j.checked ? (O(), fe(i(Ie), { key: 0 }, {
                default: re(() => [
                  J(i(Ku))
                ]),
                _: 1
              })) : de("v-if", !0)
            ], 10, ok))), 128)) : $e(D.$slots, "empty", { key: 1 }, () => [
              Q("li", {
                class: A(i(u).e("empty-text"))
              }, ye(i(f)("el.cascader.noMatch")), 3)
            ])
          ]),
          _: 3
        }, 8, ["class", "view-class"])), [
          [wt, b.value]
        ]) : de("v-if", !0)
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "transition"]));
  }
});
var Na = /* @__PURE__ */ Ae(ik, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader/src/cascader.vue"]]);
Na.install = (e) => {
  e.component(Na.name, Na);
};
const uk = Na, ck = uk;
var nd = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    return function(n, r) {
      var a = r.prototype, o = a.format;
      a.format = function(l) {
        var s = this, u = this.$locale();
        if (!this.isValid())
          return o.bind(this)(l);
        var c = this.$utils(), f = (l || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(p) {
          switch (p) {
            case "Q":
              return Math.ceil((s.$M + 1) / 3);
            case "Do":
              return u.ordinal(s.$D);
            case "gggg":
              return s.weekYear();
            case "GGGG":
              return s.isoWeekYear();
            case "wo":
              return u.ordinal(s.week(), "W");
            case "w":
            case "ww":
              return c.s(s.week(), p === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return c.s(s.isoWeek(), p === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return c.s(String(s.$H === 0 ? 24 : s.$H), p === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(s.$d.getTime() / 1e3);
            case "x":
              return s.$d.getTime();
            case "z":
              return "[" + s.offsetName() + "]";
            case "zzz":
              return "[" + s.offsetName("long") + "]";
            default:
              return p;
          }
        });
        return o.bind(this)(f);
      };
    };
  });
})(nd);
var dk = nd.exports;
const fk = /* @__PURE__ */ ln(dk);
var rd = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    var n = "week", r = "year";
    return function(a, o, l) {
      var s = o.prototype;
      s.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var f = l(this).startOf(r).add(1, r).date(c), p = l(this).endOf(n);
          if (f.isBefore(p))
            return 1;
        }
        var m = l(this).startOf(r).date(c).startOf(n).subtract(1, "millisecond"), h = this.diff(m, n, !0);
        return h < 0 ? l(this).startOf("week").week() : Math.ceil(h);
      }, s.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(rd);
var pk = rd.exports;
const vk = /* @__PURE__ */ ln(pk);
var ad = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    return function(n, r) {
      r.prototype.weekYear = function() {
        var a = this.month(), o = this.week(), l = this.year();
        return o === 1 && a === 11 ? l + 1 : a === 0 && o >= 52 ? l - 1 : l;
      };
    };
  });
})(ad);
var hk = ad.exports;
const mk = /* @__PURE__ */ ln(hk);
var od = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    return function(n, r, a) {
      r.prototype.dayOfYear = function(o) {
        var l = Math.round((a(this).startOf("day") - a(this).startOf("year")) / 864e5) + 1;
        return o == null ? l : this.add(o - l, "day");
      };
    };
  });
})(od);
var gk = od.exports;
const bk = /* @__PURE__ */ ln(gk);
var ld = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    return function(n, r) {
      r.prototype.isSameOrAfter = function(a, o) {
        return this.isSame(a, o) || this.isAfter(a, o);
      };
    };
  });
})(ld);
var yk = ld.exports;
const wk = /* @__PURE__ */ ln(yk);
var sd = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    return function(n, r) {
      r.prototype.isSameOrBefore = function(a, o) {
        return this.isSame(a, o) || this.isBefore(a, o);
      };
    };
  });
})(sd);
var Ck = sd.exports;
const Sk = /* @__PURE__ */ ln(Ck), Yl = Symbol(), kk = Me({
  ...Rc,
  type: {
    type: be(String),
    default: "date"
  }
}), $k = ["date", "dates", "year", "month", "week", "range"], Ul = Me({
  disabledDate: {
    type: be(Function)
  },
  date: {
    type: be(Object),
    required: !0
  },
  minDate: {
    type: be(Object)
  },
  maxDate: {
    type: be(Object)
  },
  parsedValue: {
    type: be([Object, Array])
  },
  rangeState: {
    type: be(Object),
    default: () => ({
      endDate: null,
      selecting: !1
    })
  }
}), id = Me({
  type: {
    type: be(String),
    required: !0,
    values: Uy
  }
}), ud = Me({
  unlinkPanels: Boolean,
  parsedValue: {
    type: be(Array)
  }
}), cd = (e) => ({
  type: String,
  values: $k,
  default: e
}), _k = Me({
  ...id,
  parsedValue: {
    type: be([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  }
}), Ek = Me({
  ...Ul,
  cellClassName: {
    type: be(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: cd("date")
}), ol = (e) => {
  if (!tt(e))
    return !1;
  const [t, n] = e;
  return xe.isDayjs(t) && xe.isDayjs(n) && t.isSameOrBefore(n);
}, dd = (e, { lang: t, unit: n, unlinkPanels: r }) => {
  let a;
  if (tt(e)) {
    let [o, l] = e.map((s) => xe(s).locale(t));
    return r || (l = o.add(1, n)), [o, l];
  } else
    e ? a = xe(e) : a = xe();
  return a = a.locale(t), [a, a.add(1, n)];
}, Tk = (e, t, {
  columnIndexOffset: n,
  startDate: r,
  nextEndDate: a,
  now: o,
  unit: l,
  relativeDateGetter: s,
  setCellMetadata: u,
  setRowMetadata: c
}) => {
  for (let f = 0; f < e.row; f++) {
    const p = t[f];
    for (let m = 0; m < e.column; m++) {
      let h = p[m + n];
      h || (h = {
        row: f,
        column: m,
        type: "normal",
        inRange: !1,
        start: !1,
        end: !1
      });
      const v = f * e.column + m, d = s(v);
      h.dayjs = d, h.date = d.toDate(), h.timestamp = d.valueOf(), h.type = "normal", h.inRange = !!(r && d.isSameOrAfter(r, l) && a && d.isSameOrBefore(a, l)) || !!(r && d.isSameOrBefore(r, l) && a && d.isSameOrAfter(a, l)), r != null && r.isSameOrAfter(a) ? (h.start = !!a && d.isSame(a, l), h.end = r && d.isSame(r, l)) : (h.start = !!r && d.isSame(r, l), h.end = !!a && d.isSame(a, l)), d.isSame(o, l) && (h.type = "today"), u == null || u(h, { rowIndex: f, columnIndex: m }), p[m + n] = h;
    }
    c == null || c(p);
  }
}, Ok = Me({
  cell: {
    type: be(Object)
  }
});
var Pk = ce({
  name: "ElDatePickerCell",
  props: Ok,
  setup(e) {
    const t = we("date-table-cell"), {
      slots: n
    } = Oe(Yl);
    return () => {
      const {
        cell: r
      } = e;
      if (n.default) {
        const a = n.default(r).filter((o) => o.patchFlag !== -2 && o.type.toString() !== "Symbol(Comment)");
        if (a.length)
          return a;
      }
      return J("div", {
        class: t.b()
      }, [J("span", {
        class: t.e("text")
      }, [r == null ? void 0 : r.text])]);
    };
  }
});
const xk = ["aria-label", "onMousedown"], Mk = {
  key: 0,
  scope: "col"
}, Ak = ["aria-label"], Nk = ["aria-current", "aria-selected", "tabindex"], Rk = /* @__PURE__ */ ce({
  __name: "basic-date-table",
  props: Ek,
  emits: ["changerange", "pick", "select"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = we("date-table"), { t: o, lang: l } = ot(), s = x(), u = x(), c = x(), f = x(), p = x([[], [], [], [], [], []]);
    let m = !1;
    const h = r.date.$locale().weekStart || 7, v = r.date.locale("en").localeData().weekdaysShort().map((I) => I.toLowerCase()), d = E(() => h > 3 ? 7 - h : -h), y = E(() => {
      const I = r.date.startOf("month");
      return I.subtract(I.day() || 7, "day");
    }), w = E(() => v.concat(v).slice(h, h + 7)), C = E(() => yu(T.value).some((I) => I.isCurrent)), g = E(() => {
      const I = r.date.startOf("month"), G = I.day() || 7, ne = I.daysInMonth(), he = I.subtract(1, "month").daysInMonth();
      return {
        startOfMonthDay: G,
        dateCountOfMonth: ne,
        dateCountOfLastMonth: he
      };
    }), b = E(() => r.selectionMode === "dates" ? mn(r.parsedValue) : []), k = (I, {
      count: G,
      rowIndex: ne,
      columnIndex: he
    }) => {
      const { startOfMonthDay: ge, dateCountOfMonth: se, dateCountOfLastMonth: le } = i(g), ue = i(d);
      if (ne >= 0 && ne <= 1) {
        const ve = ge + ue < 0 ? 7 + ge + ue : ge + ue;
        if (he + ne * 7 >= ve)
          return I.text = G, !0;
        I.text = le - (ve - he % 7) + 1 + ne * 7, I.type = "prev-month";
      } else
        return G <= se ? I.text = G : (I.text = G - se, I.type = "next-month"), !0;
      return !1;
    }, S = (I, {
      columnIndex: G,
      rowIndex: ne
    }, he) => {
      const { disabledDate: ge, cellClassName: se } = r, le = i(b), ue = k(I, { count: he, rowIndex: ne, columnIndex: G }), ve = I.dayjs.toDate();
      return I.selected = le.find((_e) => _e.valueOf() === I.dayjs.valueOf()), I.isSelected = !!I.selected, I.isCurrent = V(I), I.disabled = ge == null ? void 0 : ge(ve), I.customClass = se == null ? void 0 : se(ve), ue;
    }, $ = (I) => {
      if (r.selectionMode === "week") {
        const [G, ne] = r.showWeekNumber ? [1, 7] : [0, 6], he = U(I[G + 1]);
        I[G].inRange = he, I[G].start = he, I[ne].inRange = he, I[ne].end = he;
      }
    }, T = E(() => {
      const { minDate: I, maxDate: G, rangeState: ne, showWeekNumber: he } = r, ge = d.value, se = p.value, le = "day";
      let ue = 1;
      if (he)
        for (let ve = 0; ve < 6; ve++)
          se[ve][0] || (se[ve][0] = {
            type: "week",
            text: y.value.add(ve * 7 + 1, le).week()
          });
      return Tk({ row: 6, column: 7 }, se, {
        startDate: I,
        columnIndexOffset: he ? 1 : 0,
        nextEndDate: ne.endDate || G || ne.selecting && I || null,
        now: xe().locale(i(l)).startOf(le),
        unit: le,
        relativeDateGetter: (ve) => y.value.add(ve - ge, le),
        setCellMetadata: (...ve) => {
          S(...ve, ue) && (ue += 1);
        },
        setRowMetadata: $
      }), se;
    });
    me(() => r.date, async () => {
      var I, G;
      (I = s.value) != null && I.contains(document.activeElement) && (await Te(), (G = u.value) == null || G.focus());
    });
    const R = async () => {
      var I;
      (I = u.value) == null || I.focus();
    }, z = (I = "") => ["normal", "today"].includes(I), V = (I) => r.selectionMode === "date" && z(I.type) && F(I, r.parsedValue), F = (I, G) => G ? xe(G).locale(l.value).isSame(r.date.date(Number(I.text)), "day") : !1, N = (I) => {
      const G = [];
      return z(I.type) && !I.disabled ? (G.push("available"), I.type === "today" && G.push("today")) : G.push(I.type), V(I) && G.push("current"), I.inRange && (z(I.type) || r.selectionMode === "week") && (G.push("in-range"), I.start && G.push("start-date"), I.end && G.push("end-date")), I.disabled && G.push("disabled"), I.selected && G.push("selected"), I.customClass && G.push(I.customClass), G.join(" ");
    }, B = (I, G) => {
      const ne = I * 7 + (G - (r.showWeekNumber ? 1 : 0)) - d.value;
      return y.value.add(ne, "day");
    }, W = (I) => {
      var G;
      if (!r.rangeState.selecting)
        return;
      let ne = I.target;
      if (ne.tagName === "SPAN" && (ne = (G = ne.parentNode) == null ? void 0 : G.parentNode), ne.tagName === "DIV" && (ne = ne.parentNode), ne.tagName !== "TD")
        return;
      const he = ne.parentNode.rowIndex - 1, ge = ne.cellIndex;
      T.value[he][ge].disabled || (he !== c.value || ge !== f.value) && (c.value = he, f.value = ge, n("changerange", {
        selecting: !0,
        endDate: B(he, ge)
      }));
    }, q = (I) => !C.value && (I == null ? void 0 : I.text) === 1 && I.type === "normal" || I.isCurrent, M = (I) => {
      m || C.value || r.selectionMode !== "date" || L(I, !0);
    }, H = (I) => {
      I.target.closest("td") && (m = !0);
    }, _ = (I) => {
      I.target.closest("td") && (m = !1);
    }, L = (I, G = !1) => {
      const ne = I.target.closest("td");
      if (!ne)
        return;
      const he = ne.parentNode.rowIndex - 1, ge = ne.cellIndex, se = T.value[he][ge];
      if (se.disabled || se.type === "week")
        return;
      const le = B(he, ge);
      if (r.selectionMode === "range")
        !r.rangeState.selecting || !r.minDate ? (n("pick", { minDate: le, maxDate: null }), n("select", !0)) : (le >= r.minDate ? n("pick", { minDate: r.minDate, maxDate: le }) : n("pick", { minDate: le, maxDate: r.minDate }), n("select", !1));
      else if (r.selectionMode === "date")
        n("pick", le, G);
      else if (r.selectionMode === "week") {
        const ue = le.week(), ve = `${le.year()}w${ue}`;
        n("pick", {
          year: le.year(),
          week: ue,
          value: ve,
          date: le.startOf("week")
        });
      } else if (r.selectionMode === "dates") {
        const ue = se.selected ? mn(r.parsedValue).filter((ve) => (ve == null ? void 0 : ve.valueOf()) !== le.valueOf()) : mn(r.parsedValue).concat([le]);
        n("pick", ue);
      }
    }, U = (I) => {
      if (r.selectionMode !== "week")
        return !1;
      let G = r.date.startOf("day");
      if (I.type === "prev-month" && (G = G.subtract(1, "month")), I.type === "next-month" && (G = G.add(1, "month")), G = G.date(Number.parseInt(I.text, 10)), r.parsedValue && !Array.isArray(r.parsedValue)) {
        const ne = (r.parsedValue.day() - h + 7) % 7 - 1;
        return r.parsedValue.subtract(ne, "day").isSame(G, "day");
      }
      return !1;
    };
    return t({
      focus: R
    }), (I, G) => (O(), K("table", {
      role: "grid",
      "aria-label": i(o)("el.datepicker.dateTablePrompt"),
      cellspacing: "0",
      cellpadding: "0",
      class: A([i(a).b(), { "is-week-mode": I.selectionMode === "week" }]),
      onClick: L,
      onMousemove: W,
      onMousedown: qe(H, ["prevent"]),
      onMouseup: _
    }, [
      Q("tbody", {
        ref_key: "tbodyRef",
        ref: s
      }, [
        Q("tr", null, [
          I.showWeekNumber ? (O(), K("th", Mk, ye(i(o)("el.datepicker.week")), 1)) : de("v-if", !0),
          (O(!0), K(Ne, null, Ye(i(w), (ne, he) => (O(), K("th", {
            key: he,
            scope: "col",
            "aria-label": i(o)("el.datepicker.weeksFull." + ne)
          }, ye(i(o)("el.datepicker.weeks." + ne)), 9, Ak))), 128))
        ]),
        (O(!0), K(Ne, null, Ye(i(T), (ne, he) => (O(), K("tr", {
          key: he,
          class: A([i(a).e("row"), { current: U(ne[1]) }])
        }, [
          (O(!0), K(Ne, null, Ye(ne, (ge, se) => (O(), K("td", {
            key: `${he}.${se}`,
            ref_for: !0,
            ref: (le) => q(ge) && (u.value = le),
            class: A(N(ge)),
            "aria-current": ge.isCurrent ? "date" : void 0,
            "aria-selected": ge.isCurrent,
            tabindex: q(ge) ? 0 : -1,
            onFocus: M
          }, [
            J(i(Pk), { cell: ge }, null, 8, ["cell"])
          ], 42, Nk))), 128))
        ], 2))), 128))
      ], 512)
    ], 42, xk));
  }
});
var ll = /* @__PURE__ */ Ae(Rk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);
const Ik = Me({
  ...Ul,
  selectionMode: cd("month")
}), Dk = ["aria-label"], Lk = ["aria-selected", "aria-label", "tabindex", "onKeydown"], Fk = { class: "cell" }, Bk = /* @__PURE__ */ ce({
  __name: "basic-month-table",
  props: Ik,
  emits: ["changerange", "pick", "select"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = (b, k, S) => {
      const $ = xe().locale(S).startOf("month").month(k).year(b), T = $.daysInMonth();
      return xc(T).map((R) => $.add(R, "day").toDate());
    }, o = we("month-table"), { t: l, lang: s } = ot(), u = x(), c = x(), f = x(r.date.locale("en").localeData().monthsShort().map((b) => b.toLowerCase())), p = x([
      [],
      [],
      []
    ]), m = x(), h = x(), v = E(() => {
      var b, k;
      const S = p.value, $ = xe().locale(s.value).startOf("month");
      for (let T = 0; T < 3; T++) {
        const R = S[T];
        for (let z = 0; z < 4; z++) {
          const V = R[z] || (R[z] = {
            row: T,
            column: z,
            type: "normal",
            inRange: !1,
            start: !1,
            end: !1,
            text: -1,
            disabled: !1
          });
          V.type = "normal";
          const F = T * 4 + z, N = r.date.startOf("year").month(F), B = r.rangeState.endDate || r.maxDate || r.rangeState.selecting && r.minDate || null;
          V.inRange = !!(r.minDate && N.isSameOrAfter(r.minDate, "month") && B && N.isSameOrBefore(B, "month")) || !!(r.minDate && N.isSameOrBefore(r.minDate, "month") && B && N.isSameOrAfter(B, "month")), (b = r.minDate) != null && b.isSameOrAfter(B) ? (V.start = !!(B && N.isSame(B, "month")), V.end = r.minDate && N.isSame(r.minDate, "month")) : (V.start = !!(r.minDate && N.isSame(r.minDate, "month")), V.end = !!(B && N.isSame(B, "month"))), $.isSame(N) && (V.type = "today"), V.text = F, V.disabled = ((k = r.disabledDate) == null ? void 0 : k.call(r, N.toDate())) || !1;
        }
      }
      return S;
    }), d = () => {
      var b;
      (b = c.value) == null || b.focus();
    }, y = (b) => {
      const k = {}, S = r.date.year(), $ = /* @__PURE__ */ new Date(), T = b.text;
      return k.disabled = r.disabledDate ? a(S, T, s.value).every(r.disabledDate) : !1, k.current = mn(r.parsedValue).findIndex((R) => xe.isDayjs(R) && R.year() === S && R.month() === T) >= 0, k.today = $.getFullYear() === S && $.getMonth() === T, b.inRange && (k["in-range"] = !0, b.start && (k["start-date"] = !0), b.end && (k["end-date"] = !0)), k;
    }, w = (b) => {
      const k = r.date.year(), S = b.text;
      return mn(r.date).findIndex(($) => $.year() === k && $.month() === S) >= 0;
    }, C = (b) => {
      var k;
      if (!r.rangeState.selecting)
        return;
      let S = b.target;
      if (S.tagName === "A" && (S = (k = S.parentNode) == null ? void 0 : k.parentNode), S.tagName === "DIV" && (S = S.parentNode), S.tagName !== "TD")
        return;
      const $ = S.parentNode.rowIndex, T = S.cellIndex;
      v.value[$][T].disabled || ($ !== m.value || T !== h.value) && (m.value = $, h.value = T, n("changerange", {
        selecting: !0,
        endDate: r.date.startOf("year").month($ * 4 + T)
      }));
    }, g = (b) => {
      var k;
      const S = (k = b.target) == null ? void 0 : k.closest("td");
      if ((S == null ? void 0 : S.tagName) !== "TD" || ir(S, "disabled"))
        return;
      const $ = S.cellIndex, R = S.parentNode.rowIndex * 4 + $, z = r.date.startOf("year").month(R);
      r.selectionMode === "range" ? r.rangeState.selecting ? (r.minDate && z >= r.minDate ? n("pick", { minDate: r.minDate, maxDate: z }) : n("pick", { minDate: z, maxDate: r.minDate }), n("select", !1)) : (n("pick", { minDate: z, maxDate: null }), n("select", !0)) : n("pick", R);
    };
    return me(() => r.date, async () => {
      var b, k;
      (b = u.value) != null && b.contains(document.activeElement) && (await Te(), (k = c.value) == null || k.focus());
    }), t({
      focus: d
    }), (b, k) => (O(), K("table", {
      role: "grid",
      "aria-label": i(l)("el.datepicker.monthTablePrompt"),
      class: A(i(o).b()),
      onClick: g,
      onMousemove: C
    }, [
      Q("tbody", {
        ref_key: "tbodyRef",
        ref: u
      }, [
        (O(!0), K(Ne, null, Ye(i(v), (S, $) => (O(), K("tr", { key: $ }, [
          (O(!0), K(Ne, null, Ye(S, (T, R) => (O(), K("td", {
            key: R,
            ref_for: !0,
            ref: (z) => w(T) && (c.value = z),
            class: A(y(T)),
            "aria-selected": `${w(T)}`,
            "aria-label": i(l)(`el.datepicker.month${+T.text + 1}`),
            tabindex: w(T) ? 0 : -1,
            onKeydown: [
              mt(qe(g, ["prevent", "stop"]), ["space"]),
              mt(qe(g, ["prevent", "stop"]), ["enter"])
            ]
          }, [
            Q("div", null, [
              Q("span", Fk, ye(i(l)("el.datepicker.months." + f.value[T.text])), 1)
            ])
          ], 42, Lk))), 128))
        ]))), 128))
      ], 512)
    ], 42, Dk));
  }
});
var sl = /* @__PURE__ */ Ae(Bk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);
const { date: zk, disabledDate: Vk, parsedValue: Hk } = Ul, Wk = Me({
  date: zk,
  disabledDate: Vk,
  parsedValue: Hk
}), jk = ["aria-label"], Kk = ["aria-selected", "tabindex", "onKeydown"], qk = { class: "cell" }, Yk = { key: 1 }, Uk = /* @__PURE__ */ ce({
  __name: "basic-year-table",
  props: Wk,
  emits: ["pick"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = (d, y) => {
      const w = xe(String(d)).locale(y).startOf("year"), g = w.endOf("year").dayOfYear();
      return xc(g).map((b) => w.add(b, "day").toDate());
    }, o = we("year-table"), { t: l, lang: s } = ot(), u = x(), c = x(), f = E(() => Math.floor(r.date.year() / 10) * 10), p = () => {
      var d;
      (d = c.value) == null || d.focus();
    }, m = (d) => {
      const y = {}, w = xe().locale(s.value);
      return y.disabled = r.disabledDate ? a(d, s.value).every(r.disabledDate) : !1, y.current = mn(r.parsedValue).findIndex((C) => C.year() === d) >= 0, y.today = w.year() === d, y;
    }, h = (d) => d === f.value && r.date.year() < f.value && r.date.year() > f.value + 9 || mn(r.date).findIndex((y) => y.year() === d) >= 0, v = (d) => {
      const w = d.target.closest("td");
      if (w && w.textContent) {
        if (ir(w, "disabled"))
          return;
        const C = w.textContent || w.innerText;
        n("pick", Number(C));
      }
    };
    return me(() => r.date, async () => {
      var d, y;
      (d = u.value) != null && d.contains(document.activeElement) && (await Te(), (y = c.value) == null || y.focus());
    }), t({
      focus: p
    }), (d, y) => (O(), K("table", {
      role: "grid",
      "aria-label": i(l)("el.datepicker.yearTablePrompt"),
      class: A(i(o).b()),
      onClick: v
    }, [
      Q("tbody", {
        ref_key: "tbodyRef",
        ref: u
      }, [
        (O(), K(Ne, null, Ye(3, (w, C) => Q("tr", { key: C }, [
          (O(), K(Ne, null, Ye(4, (g, b) => (O(), K(Ne, {
            key: C + "_" + b
          }, [
            C * 4 + b < 10 ? (O(), K("td", {
              key: 0,
              ref_for: !0,
              ref: (k) => h(i(f) + C * 4 + b) && (c.value = k),
              class: A(["available", m(i(f) + C * 4 + b)]),
              "aria-selected": `${h(i(f) + C * 4 + b)}`,
              tabindex: h(i(f) + C * 4 + b) ? 0 : -1,
              onKeydown: [
                mt(qe(v, ["prevent", "stop"]), ["space"]),
                mt(qe(v, ["prevent", "stop"]), ["enter"])
              ]
            }, [
              Q("span", qk, ye(i(f) + C * 4 + b), 1)
            ], 42, Kk)) : (O(), K("td", Yk))
          ], 64))), 64))
        ])), 64))
      ], 512)
    ], 10, jk));
  }
});
var Gk = /* @__PURE__ */ Ae(Uk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);
const Xk = ["onClick"], Zk = ["aria-label"], Jk = ["aria-label"], Qk = ["aria-label"], e$ = ["aria-label"], t$ = /* @__PURE__ */ ce({
  __name: "panel-date-pick",
  props: _k,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(e, { emit: t }) {
    const n = e, r = (ee, Z, D) => !0, a = we("picker-panel"), o = we("date-picker"), l = Jr(), s = Jn(), { t: u, lang: c } = ot(), f = Oe("EP_PICKER_BASE"), p = Oe(io), { shortcuts: m, disabledDate: h, cellClassName: v, defaultTime: d, arrowControl: y } = f.props, w = St(f.props, "defaultValue"), C = x(), g = x(xe().locale(c.value)), b = x(!1), k = E(() => xe(d).locale(c.value)), S = E(() => g.value.month()), $ = E(() => g.value.year()), T = x([]), R = x(null), z = x(null), V = (ee) => T.value.length > 0 ? r(ee, T.value, n.format || "HH:mm:ss") : !0, F = (ee) => d && !Pe.value && !b.value ? k.value.year(ee.year()).month(ee.month()).date(ee.date()) : ge.value ? ee.millisecond(0) : ee.startOf("day"), N = (ee, ...Z) => {
      if (!ee)
        t("pick", ee, ...Z);
      else if (tt(ee)) {
        const D = ee.map(F);
        t("pick", D, ...Z);
      } else
        t("pick", F(ee), ...Z);
      R.value = null, z.value = null, b.value = !1;
    }, B = (ee, Z) => {
      if (L.value === "date") {
        ee = ee;
        let D = n.parsedValue ? n.parsedValue.year(ee.year()).month(ee.month()).date(ee.date()) : ee;
        V(D) || (D = T.value[0][0].year(ee.year()).month(ee.month()).date(ee.date())), g.value = D, N(D, ge.value || Z);
      } else
        L.value === "week" ? N(ee.date) : L.value === "dates" && N(ee, !0);
    }, W = (ee) => {
      const Z = ee ? "add" : "subtract";
      g.value = g.value[Z](1, "month"), Je("month");
    }, q = (ee) => {
      const Z = g.value, D = ee ? "add" : "subtract";
      g.value = M.value === "year" ? Z[D](10, "year") : Z[D](1, "year"), Je("year");
    }, M = x("date"), H = E(() => {
      const ee = u("el.datepicker.year");
      if (M.value === "year") {
        const Z = Math.floor($.value / 10) * 10;
        return ee ? `${Z} ${ee} - ${Z + 9} ${ee}` : `${Z} - ${Z + 9}`;
      }
      return `${$.value} ${ee}`;
    }), _ = (ee) => {
      const Z = dt(ee.value) ? ee.value() : ee.value;
      if (Z) {
        N(xe(Z).locale(c.value));
        return;
      }
      ee.onClick && ee.onClick({
        attrs: l,
        slots: s,
        emit: t
      });
    }, L = E(() => {
      const { type: ee } = n;
      return ["week", "month", "year", "dates"].includes(ee) ? ee : "date";
    }), U = E(() => L.value === "date" ? M.value : L.value), I = E(() => !!m.length), G = async (ee) => {
      g.value = g.value.startOf("month").month(ee), L.value === "month" ? N(g.value, !1) : (M.value = "date", ["month", "year", "date", "week"].includes(L.value) && (N(g.value, !0), await Te(), ae())), Je("month");
    }, ne = async (ee) => {
      L.value === "year" ? (g.value = g.value.startOf("year").year(ee), N(g.value, !1)) : (g.value = g.value.year(ee), M.value = "month", ["month", "year", "date", "week"].includes(L.value) && (N(g.value, !0), await Te(), ae())), Je("year");
    }, he = async (ee) => {
      M.value = ee, await Te(), ae();
    }, ge = E(() => n.type === "datetime" || n.type === "datetimerange"), se = E(() => ge.value || L.value === "dates"), le = () => {
      if (L.value === "dates")
        N(n.parsedValue);
      else {
        let ee = n.parsedValue;
        if (!ee) {
          const Z = xe(d).locale(c.value), D = Ze();
          ee = Z.year(D.year()).month(D.month()).date(D.date());
        }
        g.value = ee, N(ee);
      }
    }, ue = () => {
      const Z = xe().locale(c.value).toDate();
      b.value = !0, (!h || !h(Z)) && V(Z) && (g.value = xe().locale(c.value), N(g.value));
    }, ve = E(() => Ac(n.format)), _e = E(() => Mc(n.format)), Pe = E(() => {
      if (z.value)
        return z.value;
      if (!(!n.parsedValue && !w.value))
        return (n.parsedValue || g.value).format(ve.value);
    }), He = E(() => {
      if (R.value)
        return R.value;
      if (!(!n.parsedValue && !w.value))
        return (n.parsedValue || g.value).format(_e.value);
    }), We = x(!1), Ue = () => {
      We.value = !0;
    }, je = () => {
      We.value = !1;
    }, rt = (ee) => ({
      hour: ee.hour(),
      minute: ee.minute(),
      second: ee.second(),
      year: ee.year(),
      month: ee.month(),
      date: ee.date()
    }), ht = (ee, Z, D) => {
      const { hour: X, minute: j, second: te } = rt(ee), P = n.parsedValue ? n.parsedValue.hour(X).minute(j).second(te) : ee;
      g.value = P, N(g.value, !0), D || (We.value = Z);
    }, lt = (ee) => {
      const Z = xe(ee, ve.value).locale(c.value);
      if (Z.isValid() && V(Z)) {
        const { year: D, month: X, date: j } = rt(g.value);
        g.value = Z.year(D).month(X).date(j), z.value = null, We.value = !1, N(g.value, !0);
      }
    }, Se = (ee) => {
      const Z = xe(ee, _e.value).locale(c.value);
      if (Z.isValid()) {
        if (h && h(Z.toDate()))
          return;
        const { hour: D, minute: X, second: j } = rt(g.value);
        g.value = Z.hour(D).minute(X).second(j), R.value = null, N(g.value, !0);
      }
    }, ut = (ee) => xe.isDayjs(ee) && ee.isValid() && (h ? !h(ee.toDate()) : !0), ct = (ee) => L.value === "dates" ? ee.map((Z) => Z.format(n.format)) : ee.format(n.format), st = (ee) => xe(ee, n.format).locale(c.value), Ze = () => {
      const ee = xe(w.value).locale(c.value);
      if (!w.value) {
        const Z = k.value;
        return xe().hour(Z.hour()).minute(Z.minute()).second(Z.second()).locale(c.value);
      }
      return ee;
    }, ae = async () => {
      var ee;
      ["week", "month", "year", "date"].includes(L.value) && ((ee = C.value) == null || ee.focus(), L.value === "week" && Fe(De.down));
    }, ke = (ee) => {
      const { code: Z } = ee;
      [
        De.up,
        De.down,
        De.left,
        De.right,
        De.home,
        De.end,
        De.pageUp,
        De.pageDown
      ].includes(Z) && (Fe(Z), ee.stopPropagation(), ee.preventDefault()), [De.enter, De.space, De.numpadEnter].includes(Z) && R.value === null && z.value === null && (ee.preventDefault(), N(g.value, !1));
    }, Fe = (ee) => {
      var Z;
      const { up: D, down: X, left: j, right: te, home: P, end: ie, pageUp: Ce, pageDown: Le } = De, Y = {
        year: {
          [D]: -4,
          [X]: 4,
          [j]: -1,
          [te]: 1,
          offset: (pe, Ee) => pe.setFullYear(pe.getFullYear() + Ee)
        },
        month: {
          [D]: -4,
          [X]: 4,
          [j]: -1,
          [te]: 1,
          offset: (pe, Ee) => pe.setMonth(pe.getMonth() + Ee)
        },
        week: {
          [D]: -1,
          [X]: 1,
          [j]: -1,
          [te]: 1,
          offset: (pe, Ee) => pe.setDate(pe.getDate() + Ee * 7)
        },
        date: {
          [D]: -7,
          [X]: 7,
          [j]: -1,
          [te]: 1,
          [P]: (pe) => -pe.getDay(),
          [ie]: (pe) => -pe.getDay() + 6,
          [Ce]: (pe) => -new Date(pe.getFullYear(), pe.getMonth(), 0).getDate(),
          [Le]: (pe) => new Date(pe.getFullYear(), pe.getMonth() + 1, 0).getDate(),
          offset: (pe, Ee) => pe.setDate(pe.getDate() + Ee)
        }
      }, oe = g.value.toDate();
      for (; Math.abs(g.value.diff(oe, "year", !0)) < 1; ) {
        const pe = Y[U.value];
        if (!pe)
          return;
        if (pe.offset(oe, dt(pe[ee]) ? pe[ee](oe) : (Z = pe[ee]) != null ? Z : 0), h && h(oe))
          break;
        const Ee = xe(oe).locale(c.value);
        g.value = Ee, t("pick", Ee, !0);
        break;
      }
    }, Je = (ee) => {
      t("panel-change", g.value.toDate(), ee, M.value);
    };
    return me(() => L.value, (ee) => {
      if (["month", "year"].includes(ee)) {
        M.value = ee;
        return;
      }
      M.value = "date";
    }, { immediate: !0 }), me(() => M.value, () => {
      p == null || p.updatePopper();
    }), me(() => w.value, (ee) => {
      ee && (g.value = Ze());
    }, { immediate: !0 }), me(() => n.parsedValue, (ee) => {
      if (ee) {
        if (L.value === "dates" || Array.isArray(ee))
          return;
        g.value = ee;
      } else
        g.value = Ze();
    }, { immediate: !0 }), t("set-picker-option", ["isValidValue", ut]), t("set-picker-option", ["formatToString", ct]), t("set-picker-option", ["parseUserInput", st]), t("set-picker-option", ["handleFocusPicker", ae]), (ee, Z) => (O(), K("div", {
      class: A([
        i(a).b(),
        i(o).b(),
        {
          "has-sidebar": ee.$slots.sidebar || i(I),
          "has-time": i(ge)
        }
      ])
    }, [
      Q("div", {
        class: A(i(a).e("body-wrapper"))
      }, [
        $e(ee.$slots, "sidebar", {
          class: A(i(a).e("sidebar"))
        }),
        i(I) ? (O(), K("div", {
          key: 0,
          class: A(i(a).e("sidebar"))
        }, [
          (O(!0), K(Ne, null, Ye(i(m), (D, X) => (O(), K("button", {
            key: X,
            type: "button",
            class: A(i(a).e("shortcut")),
            onClick: (j) => _(D)
          }, ye(D.text), 11, Xk))), 128))
        ], 2)) : de("v-if", !0),
        Q("div", {
          class: A(i(a).e("body"))
        }, [
          i(ge) ? (O(), K("div", {
            key: 0,
            class: A(i(o).e("time-header"))
          }, [
            Q("span", {
              class: A(i(o).e("editor-wrap"))
            }, [
              J(i(Ft), {
                placeholder: i(u)("el.datepicker.selectDate"),
                "model-value": i(He),
                size: "small",
                "validate-event": !1,
                onInput: Z[0] || (Z[0] = (D) => R.value = D),
                onChange: Se
              }, null, 8, ["placeholder", "model-value"])
            ], 2),
            ze((O(), K("span", {
              class: A(i(o).e("editor-wrap"))
            }, [
              J(i(Ft), {
                placeholder: i(u)("el.datepicker.selectTime"),
                "model-value": i(Pe),
                size: "small",
                "validate-event": !1,
                onFocus: Ue,
                onInput: Z[1] || (Z[1] = (D) => z.value = D),
                onChange: lt
              }, null, 8, ["placeholder", "model-value"]),
              J(i(nl), {
                visible: We.value,
                format: i(ve),
                "time-arrow-control": i(y),
                "parsed-value": g.value,
                onPick: ht
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
            ], 2)), [
              [i(Sr), je]
            ])
          ], 2)) : de("v-if", !0),
          ze(Q("div", {
            class: A([
              i(o).e("header"),
              (M.value === "year" || M.value === "month") && i(o).e("header--bordered")
            ])
          }, [
            Q("span", {
              class: A(i(o).e("prev-btn"))
            }, [
              Q("button", {
                type: "button",
                "aria-label": i(u)("el.datepicker.prevYear"),
                class: A(["d-arrow-left", i(a).e("icon-btn")]),
                onClick: Z[2] || (Z[2] = (D) => q(!1))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(hr))
                  ]),
                  _: 1
                })
              ], 10, Zk),
              ze(Q("button", {
                type: "button",
                "aria-label": i(u)("el.datepicker.prevMonth"),
                class: A([i(a).e("icon-btn"), "arrow-left"]),
                onClick: Z[3] || (Z[3] = (D) => W(!1))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(Wa))
                  ]),
                  _: 1
                })
              ], 10, Jk), [
                [wt, M.value === "date"]
              ])
            ], 2),
            Q("span", {
              role: "button",
              class: A(i(o).e("header-label")),
              "aria-live": "polite",
              tabindex: "0",
              onKeydown: Z[4] || (Z[4] = mt((D) => he("year"), ["enter"])),
              onClick: Z[5] || (Z[5] = (D) => he("year"))
            }, ye(i(H)), 35),
            ze(Q("span", {
              role: "button",
              "aria-live": "polite",
              tabindex: "0",
              class: A([
                i(o).e("header-label"),
                { active: M.value === "month" }
              ]),
              onKeydown: Z[6] || (Z[6] = mt((D) => he("month"), ["enter"])),
              onClick: Z[7] || (Z[7] = (D) => he("month"))
            }, ye(i(u)(`el.datepicker.month${i(S) + 1}`)), 35), [
              [wt, M.value === "date"]
            ]),
            Q("span", {
              class: A(i(o).e("next-btn"))
            }, [
              ze(Q("button", {
                type: "button",
                "aria-label": i(u)("el.datepicker.nextMonth"),
                class: A([i(a).e("icon-btn"), "arrow-right"]),
                onClick: Z[8] || (Z[8] = (D) => W(!0))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(An))
                  ]),
                  _: 1
                })
              ], 10, Qk), [
                [wt, M.value === "date"]
              ]),
              Q("button", {
                type: "button",
                "aria-label": i(u)("el.datepicker.nextYear"),
                class: A([i(a).e("icon-btn"), "d-arrow-right"]),
                onClick: Z[9] || (Z[9] = (D) => q(!0))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(mr))
                  ]),
                  _: 1
                })
              ], 10, e$)
            ], 2)
          ], 2), [
            [wt, M.value !== "time"]
          ]),
          Q("div", {
            class: A(i(a).e("content")),
            onKeydown: ke
          }, [
            M.value === "date" ? (O(), fe(ll, {
              key: 0,
              ref_key: "currentViewRef",
              ref: C,
              "selection-mode": i(L),
              date: g.value,
              "parsed-value": ee.parsedValue,
              "disabled-date": i(h),
              "cell-class-name": i(v),
              onPick: B
            }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : de("v-if", !0),
            M.value === "year" ? (O(), fe(Gk, {
              key: 1,
              ref_key: "currentViewRef",
              ref: C,
              date: g.value,
              "disabled-date": i(h),
              "parsed-value": ee.parsedValue,
              onPick: ne
            }, null, 8, ["date", "disabled-date", "parsed-value"])) : de("v-if", !0),
            M.value === "month" ? (O(), fe(sl, {
              key: 2,
              ref_key: "currentViewRef",
              ref: C,
              date: g.value,
              "parsed-value": ee.parsedValue,
              "disabled-date": i(h),
              onPick: G
            }, null, 8, ["date", "parsed-value", "disabled-date"])) : de("v-if", !0)
          ], 34)
        ], 2)
      ], 2),
      ze(Q("div", {
        class: A(i(a).e("footer"))
      }, [
        ze(J(i(gn), {
          text: "",
          size: "small",
          class: A(i(a).e("link-btn")),
          onClick: ue
        }, {
          default: re(() => [
            pt(ye(i(u)("el.datepicker.now")), 1)
          ]),
          _: 1
        }, 8, ["class"]), [
          [wt, i(L) !== "dates"]
        ]),
        J(i(gn), {
          plain: "",
          size: "small",
          class: A(i(a).e("link-btn")),
          onClick: le
        }, {
          default: re(() => [
            pt(ye(i(u)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class"])
      ], 2), [
        [wt, i(se) && M.value === "date"]
      ])
    ], 2));
  }
});
var n$ = /* @__PURE__ */ Ae(t$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);
const r$ = Me({
  ...id,
  ...ud
}), a$ = (e) => {
  const { emit: t } = Ke(), n = Jr(), r = Jn();
  return (o) => {
    const l = dt(o.value) ? o.value() : o.value;
    if (l) {
      t("pick", [
        xe(l[0]).locale(e.value),
        xe(l[1]).locale(e.value)
      ]);
      return;
    }
    o.onClick && o.onClick({
      attrs: n,
      slots: r,
      emit: t
    });
  };
}, fd = (e, {
  defaultValue: t,
  leftDate: n,
  rightDate: r,
  unit: a,
  onParsedValueChanged: o
}) => {
  const { emit: l } = Ke(), { pickerNs: s } = Oe(Yl), u = we("date-range-picker"), { t: c, lang: f } = ot(), p = a$(f), m = x(), h = x(), v = x({
    endDate: null,
    selecting: !1
  }), d = (g) => {
    v.value = g;
  }, y = (g = !1) => {
    const b = i(m), k = i(h);
    ol([b, k]) && l("pick", [b, k], g);
  }, w = (g) => {
    v.value.selecting = g, g || (v.value.endDate = null);
  }, C = () => {
    const [g, b] = dd(i(t), {
      lang: i(f),
      unit: a,
      unlinkPanels: e.unlinkPanels
    });
    m.value = void 0, h.value = void 0, n.value = g, r.value = b;
  };
  return me(t, (g) => {
    g && C();
  }, { immediate: !0 }), me(() => e.parsedValue, (g) => {
    if (tt(g) && g.length === 2) {
      const [b, k] = g;
      m.value = b, n.value = b, h.value = k, o(i(m), i(h));
    } else
      C();
  }, { immediate: !0 }), {
    minDate: m,
    maxDate: h,
    rangeState: v,
    lang: f,
    ppNs: s,
    drpNs: u,
    handleChangeRange: d,
    handleRangeConfirm: y,
    handleShortcutClick: p,
    onSelect: w,
    t: c
  };
}, o$ = ["onClick"], l$ = ["disabled"], s$ = ["disabled"], i$ = ["disabled"], u$ = ["disabled"], Ca = "month", c$ = /* @__PURE__ */ ce({
  __name: "panel-date-range",
  props: r$,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(e, { emit: t }) {
    const n = e, r = Oe("EP_PICKER_BASE"), {
      disabledDate: a,
      cellClassName: o,
      format: l,
      defaultTime: s,
      arrowControl: u,
      clearable: c
    } = r.props, f = St(r.props, "shortcuts"), p = St(r.props, "defaultValue"), { lang: m } = ot(), h = x(xe().locale(m.value)), v = x(xe().locale(m.value).add(1, Ca)), {
      minDate: d,
      maxDate: y,
      rangeState: w,
      ppNs: C,
      drpNs: g,
      handleChangeRange: b,
      handleRangeConfirm: k,
      handleShortcutClick: S,
      onSelect: $,
      t: T
    } = fd(n, {
      defaultValue: p,
      leftDate: h,
      rightDate: v,
      unit: Ca,
      onParsedValueChanged: X
    }), R = x({
      min: null,
      max: null
    }), z = x({
      min: null,
      max: null
    }), V = E(() => `${h.value.year()} ${T("el.datepicker.year")} ${T(`el.datepicker.month${h.value.month() + 1}`)}`), F = E(() => `${v.value.year()} ${T("el.datepicker.year")} ${T(`el.datepicker.month${v.value.month() + 1}`)}`), N = E(() => h.value.year()), B = E(() => h.value.month()), W = E(() => v.value.year()), q = E(() => v.value.month()), M = E(() => !!f.value.length), H = E(() => R.value.min !== null ? R.value.min : d.value ? d.value.format(G.value) : ""), _ = E(() => R.value.max !== null ? R.value.max : y.value || d.value ? (y.value || d.value).format(G.value) : ""), L = E(() => z.value.min !== null ? z.value.min : d.value ? d.value.format(I.value) : ""), U = E(() => z.value.max !== null ? z.value.max : y.value || d.value ? (y.value || d.value).format(I.value) : ""), I = E(() => Ac(l)), G = E(() => Mc(l)), ne = () => {
      h.value = h.value.subtract(1, "year"), n.unlinkPanels || (v.value = h.value.add(1, "month")), Pe("year");
    }, he = () => {
      h.value = h.value.subtract(1, "month"), n.unlinkPanels || (v.value = h.value.add(1, "month")), Pe("month");
    }, ge = () => {
      n.unlinkPanels ? v.value = v.value.add(1, "year") : (h.value = h.value.add(1, "year"), v.value = h.value.add(1, "month")), Pe("year");
    }, se = () => {
      n.unlinkPanels ? v.value = v.value.add(1, "month") : (h.value = h.value.add(1, "month"), v.value = h.value.add(1, "month")), Pe("month");
    }, le = () => {
      h.value = h.value.add(1, "year"), Pe("year");
    }, ue = () => {
      h.value = h.value.add(1, "month"), Pe("month");
    }, ve = () => {
      v.value = v.value.subtract(1, "year"), Pe("year");
    }, _e = () => {
      v.value = v.value.subtract(1, "month"), Pe("month");
    }, Pe = (j) => {
      t("panel-change", [h.value.toDate(), v.value.toDate()], j);
    }, He = E(() => {
      const j = (B.value + 1) % 12, te = B.value + 1 >= 12 ? 1 : 0;
      return n.unlinkPanels && new Date(N.value + te, j) < new Date(W.value, q.value);
    }), We = E(() => n.unlinkPanels && W.value * 12 + q.value - (N.value * 12 + B.value + 1) >= 12), Ue = E(() => !(d.value && y.value && !w.value.selecting && ol([d.value, y.value]))), je = E(() => n.type === "datetime" || n.type === "datetimerange"), rt = (j, te) => {
      if (j)
        return s ? xe(s[te] || s).locale(m.value).year(j.year()).month(j.month()).date(j.date()) : j;
    }, ht = (j, te = !0) => {
      const P = j.minDate, ie = j.maxDate, Ce = rt(P, 0), Le = rt(ie, 1);
      y.value === Le && d.value === Ce || (t("calendar-change", [P.toDate(), ie && ie.toDate()]), y.value = Le, d.value = Ce, !(!te || je.value) && k());
    }, lt = x(!1), Se = x(!1), ut = () => {
      lt.value = !1;
    }, ct = () => {
      Se.value = !1;
    }, st = (j, te) => {
      R.value[te] = j;
      const P = xe(j, G.value).locale(m.value);
      if (P.isValid()) {
        if (a && a(P.toDate()))
          return;
        te === "min" ? (h.value = P, d.value = (d.value || h.value).year(P.year()).month(P.month()).date(P.date()), !n.unlinkPanels && (!y.value || y.value.isBefore(d.value)) && (v.value = P.add(1, "month"), y.value = d.value.add(1, "month"))) : (v.value = P, y.value = (y.value || v.value).year(P.year()).month(P.month()).date(P.date()), !n.unlinkPanels && (!d.value || d.value.isAfter(y.value)) && (h.value = P.subtract(1, "month"), d.value = y.value.subtract(1, "month")));
      }
    }, Ze = (j, te) => {
      R.value[te] = null;
    }, ae = (j, te) => {
      z.value[te] = j;
      const P = xe(j, I.value).locale(m.value);
      P.isValid() && (te === "min" ? (lt.value = !0, d.value = (d.value || h.value).hour(P.hour()).minute(P.minute()).second(P.second()), (!y.value || y.value.isBefore(d.value)) && (y.value = d.value)) : (Se.value = !0, y.value = (y.value || v.value).hour(P.hour()).minute(P.minute()).second(P.second()), v.value = y.value, y.value && y.value.isBefore(d.value) && (d.value = y.value)));
    }, ke = (j, te) => {
      z.value[te] = null, te === "min" ? (h.value = d.value, lt.value = !1) : (v.value = y.value, Se.value = !1);
    }, Fe = (j, te, P) => {
      z.value.min || (j && (h.value = j, d.value = (d.value || h.value).hour(j.hour()).minute(j.minute()).second(j.second())), P || (lt.value = te), (!y.value || y.value.isBefore(d.value)) && (y.value = d.value, v.value = j));
    }, Je = (j, te, P) => {
      z.value.max || (j && (v.value = j, y.value = (y.value || v.value).hour(j.hour()).minute(j.minute()).second(j.second())), P || (Se.value = te), y.value && y.value.isBefore(d.value) && (d.value = y.value));
    }, ee = () => {
      h.value = dd(i(p), {
        lang: i(m),
        unit: "month",
        unlinkPanels: n.unlinkPanels
      })[0], v.value = h.value.add(1, "month"), t("pick", null);
    }, Z = (j) => tt(j) ? j.map((te) => te.format(l)) : j.format(l), D = (j) => tt(j) ? j.map((te) => xe(te, l).locale(m.value)) : xe(j, l).locale(m.value);
    function X(j, te) {
      if (n.unlinkPanels && te) {
        const P = (j == null ? void 0 : j.year()) || 0, ie = (j == null ? void 0 : j.month()) || 0, Ce = te.year(), Le = te.month();
        v.value = P === Ce && ie === Le ? te.add(1, Ca) : te;
      } else
        v.value = h.value.add(1, Ca), te && (v.value = v.value.hour(te.hour()).minute(te.minute()).second(te.second()));
    }
    return t("set-picker-option", ["isValidValue", ol]), t("set-picker-option", ["parseUserInput", D]), t("set-picker-option", ["formatToString", Z]), t("set-picker-option", ["handleClear", ee]), (j, te) => (O(), K("div", {
      class: A([
        i(C).b(),
        i(g).b(),
        {
          "has-sidebar": j.$slots.sidebar || i(M),
          "has-time": i(je)
        }
      ])
    }, [
      Q("div", {
        class: A(i(C).e("body-wrapper"))
      }, [
        $e(j.$slots, "sidebar", {
          class: A(i(C).e("sidebar"))
        }),
        i(M) ? (O(), K("div", {
          key: 0,
          class: A(i(C).e("sidebar"))
        }, [
          (O(!0), K(Ne, null, Ye(i(f), (P, ie) => (O(), K("button", {
            key: ie,
            type: "button",
            class: A(i(C).e("shortcut")),
            onClick: (Ce) => i(S)(P)
          }, ye(P.text), 11, o$))), 128))
        ], 2)) : de("v-if", !0),
        Q("div", {
          class: A(i(C).e("body"))
        }, [
          i(je) ? (O(), K("div", {
            key: 0,
            class: A(i(g).e("time-header"))
          }, [
            Q("span", {
              class: A(i(g).e("editors-wrap"))
            }, [
              Q("span", {
                class: A(i(g).e("time-picker-wrap"))
              }, [
                J(i(Ft), {
                  size: "small",
                  disabled: i(w).selecting,
                  placeholder: i(T)("el.datepicker.startDate"),
                  class: A(i(g).e("editor")),
                  "model-value": i(H),
                  "validate-event": !1,
                  onInput: te[0] || (te[0] = (P) => st(P, "min")),
                  onChange: te[1] || (te[1] = (P) => Ze(P, "min"))
                }, null, 8, ["disabled", "placeholder", "class", "model-value"])
              ], 2),
              ze((O(), K("span", {
                class: A(i(g).e("time-picker-wrap"))
              }, [
                J(i(Ft), {
                  size: "small",
                  class: A(i(g).e("editor")),
                  disabled: i(w).selecting,
                  placeholder: i(T)("el.datepicker.startTime"),
                  "model-value": i(L),
                  "validate-event": !1,
                  onFocus: te[2] || (te[2] = (P) => lt.value = !0),
                  onInput: te[3] || (te[3] = (P) => ae(P, "min")),
                  onChange: te[4] || (te[4] = (P) => ke(P, "min"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                J(i(nl), {
                  visible: lt.value,
                  format: i(I),
                  "datetime-role": "start",
                  "time-arrow-control": i(u),
                  "parsed-value": h.value,
                  onPick: Fe
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [i(Sr), ut]
              ])
            ], 2),
            Q("span", null, [
              J(i(Ie), null, {
                default: re(() => [
                  J(i(An))
                ]),
                _: 1
              })
            ]),
            Q("span", {
              class: A([i(g).e("editors-wrap"), "is-right"])
            }, [
              Q("span", {
                class: A(i(g).e("time-picker-wrap"))
              }, [
                J(i(Ft), {
                  size: "small",
                  class: A(i(g).e("editor")),
                  disabled: i(w).selecting,
                  placeholder: i(T)("el.datepicker.endDate"),
                  "model-value": i(_),
                  readonly: !i(d),
                  "validate-event": !1,
                  onInput: te[5] || (te[5] = (P) => st(P, "max")),
                  onChange: te[6] || (te[6] = (P) => Ze(P, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
              ], 2),
              ze((O(), K("span", {
                class: A(i(g).e("time-picker-wrap"))
              }, [
                J(i(Ft), {
                  size: "small",
                  class: A(i(g).e("editor")),
                  disabled: i(w).selecting,
                  placeholder: i(T)("el.datepicker.endTime"),
                  "model-value": i(U),
                  readonly: !i(d),
                  "validate-event": !1,
                  onFocus: te[7] || (te[7] = (P) => i(d) && (Se.value = !0)),
                  onInput: te[8] || (te[8] = (P) => ae(P, "max")),
                  onChange: te[9] || (te[9] = (P) => ke(P, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                J(i(nl), {
                  "datetime-role": "end",
                  visible: Se.value,
                  format: i(I),
                  "time-arrow-control": i(u),
                  "parsed-value": v.value,
                  onPick: Je
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [i(Sr), ct]
              ])
            ], 2)
          ], 2)) : de("v-if", !0),
          Q("div", {
            class: A([[i(C).e("content"), i(g).e("content")], "is-left"])
          }, [
            Q("div", {
              class: A(i(g).e("header"))
            }, [
              Q("button", {
                type: "button",
                class: A([i(C).e("icon-btn"), "d-arrow-left"]),
                onClick: ne
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(hr))
                  ]),
                  _: 1
                })
              ], 2),
              Q("button", {
                type: "button",
                class: A([i(C).e("icon-btn"), "arrow-left"]),
                onClick: he
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(Wa))
                  ]),
                  _: 1
                })
              ], 2),
              j.unlinkPanels ? (O(), K("button", {
                key: 0,
                type: "button",
                disabled: !i(We),
                class: A([[i(C).e("icon-btn"), { "is-disabled": !i(We) }], "d-arrow-right"]),
                onClick: le
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(mr))
                  ]),
                  _: 1
                })
              ], 10, l$)) : de("v-if", !0),
              j.unlinkPanels ? (O(), K("button", {
                key: 1,
                type: "button",
                disabled: !i(He),
                class: A([[
                  i(C).e("icon-btn"),
                  { "is-disabled": !i(He) }
                ], "arrow-right"]),
                onClick: ue
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(An))
                  ]),
                  _: 1
                })
              ], 10, s$)) : de("v-if", !0),
              Q("div", null, ye(i(V)), 1)
            ], 2),
            J(ll, {
              "selection-mode": "range",
              date: h.value,
              "min-date": i(d),
              "max-date": i(y),
              "range-state": i(w),
              "disabled-date": i(a),
              "cell-class-name": i(o),
              onChangerange: i(b),
              onPick: ht,
              onSelect: i($)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2),
          Q("div", {
            class: A([[i(C).e("content"), i(g).e("content")], "is-right"])
          }, [
            Q("div", {
              class: A(i(g).e("header"))
            }, [
              j.unlinkPanels ? (O(), K("button", {
                key: 0,
                type: "button",
                disabled: !i(We),
                class: A([[i(C).e("icon-btn"), { "is-disabled": !i(We) }], "d-arrow-left"]),
                onClick: ve
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(hr))
                  ]),
                  _: 1
                })
              ], 10, i$)) : de("v-if", !0),
              j.unlinkPanels ? (O(), K("button", {
                key: 1,
                type: "button",
                disabled: !i(He),
                class: A([[
                  i(C).e("icon-btn"),
                  { "is-disabled": !i(He) }
                ], "arrow-left"]),
                onClick: _e
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(Wa))
                  ]),
                  _: 1
                })
              ], 10, u$)) : de("v-if", !0),
              Q("button", {
                type: "button",
                class: A([i(C).e("icon-btn"), "d-arrow-right"]),
                onClick: ge
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(mr))
                  ]),
                  _: 1
                })
              ], 2),
              Q("button", {
                type: "button",
                class: A([i(C).e("icon-btn"), "arrow-right"]),
                onClick: se
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(An))
                  ]),
                  _: 1
                })
              ], 2),
              Q("div", null, ye(i(F)), 1)
            ], 2),
            J(ll, {
              "selection-mode": "range",
              date: v.value,
              "min-date": i(d),
              "max-date": i(y),
              "range-state": i(w),
              "disabled-date": i(a),
              "cell-class-name": i(o),
              onChangerange: i(b),
              onPick: ht,
              onSelect: i($)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2),
      i(je) ? (O(), K("div", {
        key: 0,
        class: A(i(C).e("footer"))
      }, [
        i(c) ? (O(), fe(i(gn), {
          key: 0,
          text: "",
          size: "small",
          class: A(i(C).e("link-btn")),
          onClick: ee
        }, {
          default: re(() => [
            pt(ye(i(T)("el.datepicker.clear")), 1)
          ]),
          _: 1
        }, 8, ["class"])) : de("v-if", !0),
        J(i(gn), {
          plain: "",
          size: "small",
          class: A(i(C).e("link-btn")),
          disabled: i(Ue),
          onClick: te[10] || (te[10] = (P) => i(k)(!1))
        }, {
          default: re(() => [
            pt(ye(i(T)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"])
      ], 2)) : de("v-if", !0)
    ], 2));
  }
});
var d$ = /* @__PURE__ */ Ae(c$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);
const f$ = Me({
  ...ud
}), p$ = ["pick", "set-picker-option"], v$ = ({
  unlinkPanels: e,
  leftDate: t,
  rightDate: n
}) => {
  const { t: r } = ot(), a = () => {
    t.value = t.value.subtract(1, "year"), e.value || (n.value = n.value.subtract(1, "year"));
  }, o = () => {
    e.value || (t.value = t.value.add(1, "year")), n.value = n.value.add(1, "year");
  }, l = () => {
    t.value = t.value.add(1, "year");
  }, s = () => {
    n.value = n.value.subtract(1, "year");
  }, u = E(() => `${t.value.year()} ${r("el.datepicker.year")}`), c = E(() => `${n.value.year()} ${r("el.datepicker.year")}`), f = E(() => t.value.year()), p = E(() => n.value.year() === t.value.year() ? t.value.year() + 1 : n.value.year());
  return {
    leftPrevYear: a,
    rightNextYear: o,
    leftNextYear: l,
    rightPrevYear: s,
    leftLabel: u,
    rightLabel: c,
    leftYear: f,
    rightYear: p
  };
}, h$ = ["onClick"], m$ = ["disabled"], g$ = ["disabled"], Sa = "year", b$ = ce({
  name: "DatePickerMonthRange"
}), y$ = /* @__PURE__ */ ce({
  ...b$,
  props: f$,
  emits: p$,
  setup(e, { emit: t }) {
    const n = e, { lang: r } = ot(), a = Oe("EP_PICKER_BASE"), { shortcuts: o, disabledDate: l, format: s } = a.props, u = St(a.props, "defaultValue"), c = x(xe().locale(r.value)), f = x(xe().locale(r.value).add(1, Sa)), {
      minDate: p,
      maxDate: m,
      rangeState: h,
      ppNs: v,
      drpNs: d,
      handleChangeRange: y,
      handleRangeConfirm: w,
      handleShortcutClick: C,
      onSelect: g
    } = fd(n, {
      defaultValue: u,
      leftDate: c,
      rightDate: f,
      unit: Sa,
      onParsedValueChanged: q
    }), b = E(() => !!o.length), {
      leftPrevYear: k,
      rightNextYear: S,
      leftNextYear: $,
      rightPrevYear: T,
      leftLabel: R,
      rightLabel: z,
      leftYear: V,
      rightYear: F
    } = v$({
      unlinkPanels: St(n, "unlinkPanels"),
      leftDate: c,
      rightDate: f
    }), N = E(() => n.unlinkPanels && F.value > V.value + 1), B = (M, H = !0) => {
      const _ = M.minDate, L = M.maxDate;
      m.value === L && p.value === _ || (m.value = L, p.value = _, H && w());
    }, W = (M) => M.map((H) => H.format(s));
    function q(M, H) {
      if (n.unlinkPanels && H) {
        const _ = (M == null ? void 0 : M.year()) || 0, L = H.year();
        f.value = _ === L ? H.add(1, Sa) : H;
      } else
        f.value = c.value.add(1, Sa);
    }
    return t("set-picker-option", ["formatToString", W]), (M, H) => (O(), K("div", {
      class: A([
        i(v).b(),
        i(d).b(),
        {
          "has-sidebar": !!M.$slots.sidebar || i(b)
        }
      ])
    }, [
      Q("div", {
        class: A(i(v).e("body-wrapper"))
      }, [
        $e(M.$slots, "sidebar", {
          class: A(i(v).e("sidebar"))
        }),
        i(b) ? (O(), K("div", {
          key: 0,
          class: A(i(v).e("sidebar"))
        }, [
          (O(!0), K(Ne, null, Ye(i(o), (_, L) => (O(), K("button", {
            key: L,
            type: "button",
            class: A(i(v).e("shortcut")),
            onClick: (U) => i(C)(_)
          }, ye(_.text), 11, h$))), 128))
        ], 2)) : de("v-if", !0),
        Q("div", {
          class: A(i(v).e("body"))
        }, [
          Q("div", {
            class: A([[i(v).e("content"), i(d).e("content")], "is-left"])
          }, [
            Q("div", {
              class: A(i(d).e("header"))
            }, [
              Q("button", {
                type: "button",
                class: A([i(v).e("icon-btn"), "d-arrow-left"]),
                onClick: H[0] || (H[0] = (..._) => i(k) && i(k)(..._))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(hr))
                  ]),
                  _: 1
                })
              ], 2),
              M.unlinkPanels ? (O(), K("button", {
                key: 0,
                type: "button",
                disabled: !i(N),
                class: A([[
                  i(v).e("icon-btn"),
                  { [i(v).is("disabled")]: !i(N) }
                ], "d-arrow-right"]),
                onClick: H[1] || (H[1] = (..._) => i($) && i($)(..._))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(mr))
                  ]),
                  _: 1
                })
              ], 10, m$)) : de("v-if", !0),
              Q("div", null, ye(i(R)), 1)
            ], 2),
            J(sl, {
              "selection-mode": "range",
              date: c.value,
              "min-date": i(p),
              "max-date": i(m),
              "range-state": i(h),
              "disabled-date": i(l),
              onChangerange: i(y),
              onPick: B,
              onSelect: i(g)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2),
          Q("div", {
            class: A([[i(v).e("content"), i(d).e("content")], "is-right"])
          }, [
            Q("div", {
              class: A(i(d).e("header"))
            }, [
              M.unlinkPanels ? (O(), K("button", {
                key: 0,
                type: "button",
                disabled: !i(N),
                class: A([[i(v).e("icon-btn"), { "is-disabled": !i(N) }], "d-arrow-left"]),
                onClick: H[2] || (H[2] = (..._) => i(T) && i(T)(..._))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(hr))
                  ]),
                  _: 1
                })
              ], 10, g$)) : de("v-if", !0),
              Q("button", {
                type: "button",
                class: A([i(v).e("icon-btn"), "d-arrow-right"]),
                onClick: H[3] || (H[3] = (..._) => i(S) && i(S)(..._))
              }, [
                J(i(Ie), null, {
                  default: re(() => [
                    J(i(mr))
                  ]),
                  _: 1
                })
              ], 2),
              Q("div", null, ye(i(z)), 1)
            ], 2),
            J(sl, {
              "selection-mode": "range",
              date: f.value,
              "min-date": i(p),
              "max-date": i(m),
              "range-state": i(h),
              "disabled-date": i(l),
              onChangerange: i(y),
              onPick: B,
              onSelect: i(g)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2)
    ], 2));
  }
});
var w$ = /* @__PURE__ */ Ae(y$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);
const C$ = function(e) {
  switch (e) {
    case "daterange":
    case "datetimerange":
      return d$;
    case "monthrange":
      return w$;
    default:
      return n$;
  }
};
xe.extend(JC);
xe.extend(fk);
xe.extend($C);
xe.extend(vk);
xe.extend(mk);
xe.extend(bk);
xe.extend(wk);
xe.extend(Sk);
var S$ = ce({
  name: "ElDatePicker",
  install: null,
  props: kk,
  emits: ["update:modelValue"],
  setup(e, {
    expose: t,
    emit: n,
    slots: r
  }) {
    const a = we("picker-panel");
    vt("ElPopperOptions", Ut(St(e, "popperOptions"))), vt(Yl, {
      slots: r,
      pickerNs: a
    });
    const o = x();
    t({
      focus: (u = !0) => {
        var c;
        (c = o.value) == null || c.focus(u);
      },
      handleOpen: () => {
        var u;
        (u = o.value) == null || u.handleOpen();
      },
      handleClose: () => {
        var u;
        (u = o.value) == null || u.handleClose();
      }
    });
    const s = (u) => {
      n("update:modelValue", u);
    };
    return () => {
      var u;
      const c = (u = e.format) != null ? u : _C[e.type] || lr, f = C$(e.type);
      return J(MC, Pt(e, {
        format: c,
        type: e.type,
        ref: o,
        "onUpdate:modelValue": s
      }), {
        default: (p) => J(f, p, null),
        "range-separator": r["range-separator"]
      });
    };
  }
});
const Ra = S$;
Ra.install = (e) => {
  e.component(Ra.name, Ra);
};
const ka = Ra, pd = Symbol("elPaginationKey"), k$ = Me({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: an
  }
}), $$ = {
  click: (e) => e instanceof MouseEvent
}, _$ = ["disabled", "aria-label", "aria-disabled"], E$ = { key: 0 }, T$ = ce({
  name: "ElPaginationPrev"
}), O$ = /* @__PURE__ */ ce({
  ...T$,
  props: k$,
  emits: $$,
  setup(e) {
    const t = e, { t: n } = ot(), r = E(() => t.disabled || t.currentPage <= 1);
    return (a, o) => (O(), K("button", {
      type: "button",
      class: "btn-prev",
      disabled: i(r),
      "aria-label": a.prevText || i(n)("el.pagination.prev"),
      "aria-disabled": i(r),
      onClick: o[0] || (o[0] = (l) => a.$emit("click", l))
    }, [
      a.prevText ? (O(), K("span", E$, ye(a.prevText), 1)) : (O(), fe(i(Ie), { key: 1 }, {
        default: re(() => [
          (O(), fe(gt(a.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, _$));
  }
});
var P$ = /* @__PURE__ */ Ae(O$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const x$ = Me({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: an
  }
}), M$ = ["disabled", "aria-label", "aria-disabled"], A$ = { key: 0 }, N$ = ce({
  name: "ElPaginationNext"
}), R$ = /* @__PURE__ */ ce({
  ...N$,
  props: x$,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = ot(), r = E(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (a, o) => (O(), K("button", {
      type: "button",
      class: "btn-next",
      disabled: i(r),
      "aria-label": a.nextText || i(n)("el.pagination.next"),
      "aria-disabled": i(r),
      onClick: o[0] || (o[0] = (l) => a.$emit("click", l))
    }, [
      a.nextText ? (O(), K("span", A$, ye(a.nextText), 1)) : (O(), fe(i(Ie), { key: 1 }, {
        default: re(() => [
          (O(), fe(gt(a.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, M$));
  }
});
var I$ = /* @__PURE__ */ Ae(R$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const vd = Symbol("ElSelectGroup"), co = Symbol("ElSelect");
function D$(e, t) {
  const n = Oe(co), r = Oe(vd, { disabled: !1 }), a = E(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), o = E(() => n.props.multiple ? p(n.props.modelValue, e.value) : m(e.value, n.props.modelValue)), l = E(() => {
    if (n.props.multiple) {
      const d = n.props.modelValue || [];
      return !o.value && d.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return !1;
  }), s = E(() => e.label || (a.value ? "" : e.value)), u = E(() => e.value || e.label || ""), c = E(() => e.disabled || t.groupDisabled || l.value), f = Ke(), p = (d = [], y) => {
    if (a.value) {
      const w = n.props.valueKey;
      return d && d.some((C) => cr(_t(C, w)) === _t(y, w));
    } else
      return d && d.includes(y);
  }, m = (d, y) => {
    if (a.value) {
      const { valueKey: w } = n.props;
      return _t(d, w) === _t(y, w);
    } else
      return d === y;
  }, h = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  me(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), me(() => e.value, (d, y) => {
    const { remote: w, valueKey: C } = n.props;
    if (Object.is(d, y) || (n.onOptionDestroy(y, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !w) {
      if (C && typeof d == "object" && typeof y == "object" && d[C] === y[C])
        return;
      n.setSelected();
    }
  }), me(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: !0 });
  const { queryChange: v } = cr(n);
  return me(v, (d) => {
    const { query: y } = i(d), w = new RegExp(sb(y), "i");
    t.visible = w.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: !0 }), {
    select: n,
    currentLabel: s,
    currentValue: u,
    itemSelected: o,
    isDisabled: c,
    hoverItem: h
  };
}
const L$ = ce({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: !0,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = we("select"), n = E(() => [
      t.be("dropdown", "item"),
      t.is("disabled", i(l)),
      {
        selected: i(o),
        hover: i(f)
      }
    ]), r = Ut({
      index: -1,
      groupDisabled: !1,
      visible: !0,
      hitState: !1,
      hover: !1
    }), { currentLabel: a, itemSelected: o, isDisabled: l, select: s, hoverItem: u } = D$(e, r), { visible: c, hover: f } = wn(r), p = Ke().proxy;
    s.onOptionCreate(p), zt(() => {
      const h = p.value, { selected: v } = s, y = (s.props.multiple ? v : [v]).some((w) => w.value === p.value);
      Te(() => {
        s.cachedOptions.get(h) === p && !y && s.cachedOptions.delete(h);
      }), s.onOptionDestroy(h, p);
    });
    function m() {
      e.disabled !== !0 && r.groupDisabled !== !0 && s.handleOptionSelect(p);
    }
    return {
      ns: t,
      containerKls: n,
      currentLabel: a,
      itemSelected: o,
      isDisabled: l,
      select: s,
      hoverItem: u,
      visible: c,
      hover: f,
      selectOptionClick: m,
      states: r
    };
  }
});
function F$(e, t, n, r, a, o) {
  return ze((O(), K("li", {
    class: A(e.containerKls),
    onMouseenter: t[0] || (t[0] = (...l) => e.hoverItem && e.hoverItem(...l)),
    onClick: t[1] || (t[1] = qe((...l) => e.selectOptionClick && e.selectOptionClick(...l), ["stop"]))
  }, [
    $e(e.$slots, "default", {}, () => [
      Q("span", null, ye(e.currentLabel), 1)
    ])
  ], 34)), [
    [wt, e.visible]
  ]);
}
var Gl = /* @__PURE__ */ Ae(L$, [["render", F$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const B$ = ce({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = Oe(co), t = we("select"), n = E(() => e.props.popperClass), r = E(() => e.props.multiple), a = E(() => e.props.fitInputWidth), o = x("");
    function l() {
      var s;
      o.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return Xe(() => {
      l(), Nn(e.selectWrapper, l);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: r,
      isFitInputWidth: a
    };
  }
});
function z$(e, t, n, r, a, o) {
  return O(), K("div", {
    class: A([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: Ge({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    $e(e.$slots, "default")
  ], 6);
}
var V$ = /* @__PURE__ */ Ae(B$, [["render", z$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function H$(e) {
  const { t } = ot();
  return Ut({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: !1,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: !1,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: !1,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: !1,
    isOnComposition: !1,
    prefixWidth: 11,
    mouseEnter: !1
  });
}
let To = !1;
const W$ = (e, t, n) => {
  const { t: r } = ot(), a = we("select");
  Yu({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, E(() => e.suffixTransition === !1));
  const o = x(null), l = x(null), s = x(null), u = x(null), c = x(null), f = x(null), p = x(null), m = x(null), h = x(-1), v = Wn({ query: "" }), d = Wn(""), y = x([]);
  let w = 0;
  const { form: C, formItem: g } = _n(), b = E(() => !e.filterable || e.multiple || !t.visible), k = E(() => e.disabled || (C == null ? void 0 : C.disabled)), S = E(() => {
    const Y = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !k.value && t.inputHovering && Y;
  }), $ = E(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), T = E(() => a.is("reverse", $.value && t.visible && e.suffixTransition)), R = E(() => e.remote ? 300 : 0), z = E(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? !1 : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), V = E(() => {
    const Y = Array.from(t.options.values()), oe = [];
    return y.value.forEach((pe) => {
      const Ee = Y.findIndex((yt) => yt.currentLabel === pe);
      Ee > -1 && oe.push(Y[Ee]);
    }), oe.length ? oe : Y;
  }), F = E(() => Array.from(t.cachedOptions.values())), N = E(() => {
    const Y = V.value.filter((oe) => !oe.created).some((oe) => oe.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !Y;
  }), B = Yt(), W = E(() => ["small"].includes(B.value) ? "small" : "default"), q = E({
    get() {
      return t.visible && z.value !== !1;
    },
    set(Y) {
      t.visible = Y;
    }
  });
  me([() => k.value, () => B.value, () => C == null ? void 0 : C.size], () => {
    Te(() => {
      M();
    });
  }), me(() => e.placeholder, (Y) => {
    t.cachedPlaceHolder = t.currentPlaceholder = Y, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), me(() => e.modelValue, (Y, oe) => {
    e.multiple && (M(), Y && Y.length > 0 || l.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", H(t.query))), U(), e.filterable && !e.multiple && (t.inputLength = 20), !tn(Y, oe) && e.validateEvent && (g == null || g.validate("change").catch((pe) => nt(pe)));
  }, {
    flush: "post",
    deep: !0
  }), me(() => t.visible, (Y) => {
    var oe, pe, Ee, yt, Tt;
    Y ? ((pe = (oe = u.value) == null ? void 0 : oe.updatePopper) == null || pe.call(oe), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (yt = (Ee = s.value) == null ? void 0 : Ee.focus) == null || yt.call(Ee), e.multiple ? (Tt = l.value) == null || Tt.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), H(t.query), !e.multiple && !e.remote && (v.value.query = "", Pr(v), Pr(d)))) : (e.filterable && (dt(e.filterMethod) && e.filterMethod(""), dt(e.remoteMethod) && e.remoteMethod("")), l.value && l.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = !1, G(), Te(() => {
      l.value && l.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", Y);
  }), me(() => t.options.entries(), () => {
    var Y, oe, pe;
    if (!at)
      return;
    (oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y), e.multiple && M();
    const Ee = ((pe = p.value) == null ? void 0 : pe.querySelectorAll("input")) || [];
    Array.from(Ee).includes(document.activeElement) || U(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && L();
  }, {
    flush: "post"
  }), me(() => t.hoverIndex, (Y) => {
    it(Y) && Y > -1 ? h.value = V.value[Y] || {} : h.value = {}, V.value.forEach((oe) => {
      oe.hover = h.value === oe;
    });
  });
  const M = () => {
    Te(() => {
      var Y, oe;
      if (!o.value)
        return;
      const pe = o.value.$el.querySelector("input");
      w = w || (pe.clientHeight > 0 ? pe.clientHeight + 2 : 0);
      const Ee = f.value, yt = Xy(B.value || (C == null ? void 0 : C.size)), Tt = B.value || yt === w || w <= 0 ? yt : w;
      !(pe.offsetParent === null) && (pe.style.height = `${(t.selected.length === 0 ? Tt : Math.max(Ee ? Ee.clientHeight + (Ee.clientHeight > Tt ? 6 : 0) : 0, Tt)) - 2}px`), t.visible && z.value !== !1 && ((oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y));
    });
  }, H = async (Y) => {
    if (!(t.previousQuery === Y || t.isOnComposition)) {
      if (t.previousQuery === null && (dt(e.filterMethod) || dt(e.remoteMethod))) {
        t.previousQuery = Y;
        return;
      }
      t.previousQuery = Y, Te(() => {
        var oe, pe;
        t.visible && ((pe = (oe = u.value) == null ? void 0 : oe.updatePopper) == null || pe.call(oe));
      }), t.hoverIndex = -1, e.multiple && e.filterable && Te(() => {
        const oe = l.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, oe) : oe, _(), M();
      }), e.remote && dt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(Y)) : dt(e.filterMethod) ? (e.filterMethod(Y), Pr(d)) : (t.filteredOptionsCount = t.optionsCount, v.value.query = Y, Pr(v), Pr(d)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await Te(), L());
    }
  }, _ = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = l.value.value ? "" : t.cachedPlaceHolder);
  }, L = () => {
    const Y = V.value.filter((Ee) => Ee.visible && !Ee.disabled && !Ee.states.groupDisabled), oe = Y.find((Ee) => Ee.created), pe = Y[0];
    t.hoverIndex = We(V.value, oe || pe);
  }, U = () => {
    var Y;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const pe = I(e.modelValue);
      (Y = pe.props) != null && Y.created ? (t.createdLabel = pe.props.value, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = pe.currentLabel, t.selected = pe, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const oe = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((pe) => {
      oe.push(I(pe));
    }), t.selected = oe, Te(() => {
      M();
    });
  }, I = (Y) => {
    let oe;
    const pe = fo(Y).toLowerCase() === "object", Ee = fo(Y).toLowerCase() === "null", yt = fo(Y).toLowerCase() === "undefined";
    for (let cn = t.cachedOptions.size - 1; cn >= 0; cn--) {
      const Ht = F.value[cn];
      if (pe ? _t(Ht.value, e.valueKey) === _t(Y, e.valueKey) : Ht.value === Y) {
        oe = {
          value: Y,
          currentLabel: Ht.currentLabel,
          isDisabled: Ht.isDisabled
        };
        break;
      }
    }
    if (oe)
      return oe;
    const Tt = pe ? Y.label : !Ee && !yt ? Y : "", un = {
      value: Y,
      currentLabel: Tt
    };
    return e.multiple && (un.hitState = !1), un;
  }, G = () => {
    setTimeout(() => {
      const Y = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((oe) => V.value.findIndex((pe) => _t(pe, Y) === _t(oe, Y)))) : t.hoverIndex = -1 : t.hoverIndex = V.value.findIndex((oe) => D(oe) === D(t.selected));
    }, 300);
  }, ne = () => {
    var Y, oe;
    he(), (oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y), e.multiple && M();
  }, he = () => {
    var Y;
    t.inputWidth = (Y = o.value) == null ? void 0 : Y.$el.offsetWidth;
  }, ge = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, H(t.query));
  }, se = Rn(() => {
    ge();
  }, R.value), le = Rn((Y) => {
    H(Y.target.value);
  }, R.value), ue = (Y) => {
    tn(e.modelValue, Y) || n.emit(Gn, Y);
  }, ve = (Y) => {
    if (Y.code !== De.delete) {
      if (Y.target.value.length <= 0 && !Se()) {
        const oe = e.modelValue.slice();
        oe.pop(), n.emit(ft, oe), ue(oe);
      }
      Y.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, _e = (Y, oe) => {
    const pe = t.selected.indexOf(oe);
    if (pe > -1 && !k.value) {
      const Ee = e.modelValue.slice();
      Ee.splice(pe, 1), n.emit(ft, Ee), ue(Ee), n.emit("remove-tag", oe.value);
    }
    Y.stopPropagation();
  }, Pe = (Y) => {
    Y.stopPropagation();
    const oe = e.multiple ? [] : "";
    if (!kt(oe))
      for (const pe of t.selected)
        pe.isDisabled && oe.push(pe.value);
    n.emit(ft, oe), ue(oe), t.hoverIndex = -1, t.visible = !1, n.emit("clear");
  }, He = (Y) => {
    var oe;
    if (e.multiple) {
      const pe = (e.modelValue || []).slice(), Ee = We(pe, Y.value);
      Ee > -1 ? pe.splice(Ee, 1) : (e.multipleLimit <= 0 || pe.length < e.multipleLimit) && pe.push(Y.value), n.emit(ft, pe), ue(pe), Y.created && (t.query = "", H(""), t.inputLength = 20), e.filterable && ((oe = l.value) == null || oe.focus());
    } else
      n.emit(ft, Y.value), ue(Y.value), t.visible = !1;
    Ue(), !t.visible && Te(() => {
      je(Y);
    });
  }, We = (Y = [], oe) => {
    if (!Bt(oe))
      return Y.indexOf(oe);
    const pe = e.valueKey;
    let Ee = -1;
    return Y.some((yt, Tt) => cr(_t(yt, pe)) === _t(oe, pe) ? (Ee = Tt, !0) : !1), Ee;
  }, Ue = () => {
    const Y = l.value || o.value;
    Y && (Y == null || Y.focus());
  }, je = (Y) => {
    var oe, pe, Ee, yt, Tt;
    const un = Array.isArray(Y) ? Y[0] : Y;
    let cn = null;
    if (un != null && un.value) {
      const Ht = V.value.filter((ca) => ca.value === un.value);
      Ht.length > 0 && (cn = Ht[0].$el);
    }
    if (u.value && cn) {
      const Ht = (yt = (Ee = (pe = (oe = u.value) == null ? void 0 : oe.popperRef) == null ? void 0 : pe.contentRef) == null ? void 0 : Ee.querySelector) == null ? void 0 : yt.call(Ee, `.${a.be("dropdown", "wrap")}`);
      Ht && Wu(Ht, cn);
    }
    (Tt = m.value) == null || Tt.handleScroll();
  }, rt = (Y) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(Y.value, Y), t.cachedOptions.set(Y.value, Y);
  }, ht = (Y, oe) => {
    t.options.get(Y) === oe && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(Y));
  }, lt = (Y) => {
    Y.code !== De.backspace && Se(!1), t.inputLength = l.value.value.length * 15 + 20, M();
  }, Se = (Y) => {
    if (!Array.isArray(t.selected))
      return;
    const oe = t.selected[t.selected.length - 1];
    if (oe)
      return Y === !0 || Y === !1 ? (oe.hitState = Y, Y) : (oe.hitState = !oe.hitState, oe.hitState);
  }, ut = (Y) => {
    const oe = Y.target.value;
    if (Y.type === "compositionend")
      t.isOnComposition = !1, Te(() => H(oe));
    else {
      const pe = oe[oe.length - 1] || "";
      t.isOnComposition = !Ml(pe);
    }
  }, ct = () => {
    Te(() => je(t.selected));
  }, st = (Y) => {
    To ? To = !1 : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = !0), t.visible = !0), n.emit("focus", Y));
  }, Ze = () => {
    var Y, oe, pe;
    t.visible = !1, (Y = o.value) == null || Y.blur(), (pe = (oe = s.value) == null ? void 0 : oe.blur) == null || pe.call(oe);
  }, ae = (Y) => {
    setTimeout(() => {
      var oe;
      if ((oe = u.value) != null && oe.isFocusInsideContent()) {
        To = !0;
        return;
      }
      t.visible && Fe(), n.emit("blur", Y);
    });
  }, ke = (Y) => {
    Pe(Y);
  }, Fe = () => {
    t.visible = !1;
  }, Je = (Y) => {
    t.visible && (Y.preventDefault(), Y.stopPropagation(), t.visible = !1);
  }, ee = (Y) => {
    var oe;
    Y && !t.mouseEnter || k.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!u.value || !u.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((oe = l.value || o.value) == null || oe.focus()));
  }, Z = () => {
    t.visible ? V.value[t.hoverIndex] && He(V.value[t.hoverIndex]) : ee();
  }, D = (Y) => Bt(Y.value) ? _t(Y.value, e.valueKey) : Y.value, X = E(() => V.value.filter((Y) => Y.visible).every((Y) => Y.disabled)), j = E(() => t.selected.slice(0, e.maxCollapseTags)), te = E(() => t.selected.slice(e.maxCollapseTags)), P = (Y) => {
    if (!t.visible) {
      t.visible = !0;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !X.value) {
      Y === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : Y === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const oe = V.value[t.hoverIndex];
      (oe.disabled === !0 || oe.states.groupDisabled === !0 || !oe.visible) && P(Y), Te(() => je(h.value));
    }
  };
  return {
    optionList: y,
    optionsArray: V,
    selectSize: B,
    handleResize: ne,
    debouncedOnInputChange: se,
    debouncedQueryChange: le,
    deletePrevTag: ve,
    deleteTag: _e,
    deleteSelected: Pe,
    handleOptionSelect: He,
    scrollToOption: je,
    readonly: b,
    resetInputHeight: M,
    showClose: S,
    iconComponent: $,
    iconReverse: T,
    showNewOption: N,
    collapseTagSize: W,
    setSelected: U,
    managePlaceholder: _,
    selectDisabled: k,
    emptyText: z,
    toggleLastOptionHitState: Se,
    resetInputState: lt,
    handleComposition: ut,
    onOptionCreate: rt,
    onOptionDestroy: ht,
    handleMenuEnter: ct,
    handleFocus: st,
    blur: Ze,
    handleBlur: ae,
    handleClearClick: ke,
    handleClose: Fe,
    handleKeydownEscape: Je,
    toggleMenu: ee,
    selectOption: Z,
    getValueKey: D,
    navigateOptions: P,
    handleDeleteTooltipTag: (Y, oe) => {
      var pe, Ee;
      _e(Y, oe), (Ee = (pe = c.value) == null ? void 0 : pe.updatePopper) == null || Ee.call(pe);
    },
    dropMenuVisible: q,
    queryChange: v,
    groupQueryChange: d,
    showTagList: j,
    collapseTagList: te,
    reference: o,
    input: l,
    iOSInput: s,
    tooltipRef: u,
    tagTooltipRef: c,
    tags: f,
    selectWrapper: p,
    scrollbar: m,
    handleMouseEnter: () => {
      t.mouseEnter = !0;
    },
    handleMouseLeave: () => {
      t.mouseEnter = !1;
    }
  };
};
var j$ = ce({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function a(o, l) {
      if (o.length !== l.length)
        return !1;
      for (const [s] of o.entries())
        if (o[s] != l[s])
          return !1;
      return !0;
    }
    return () => {
      var o, l;
      const s = (o = t.default) == null ? void 0 : o.call(t), u = [];
      function c(f) {
        Array.isArray(f) && f.forEach((p) => {
          var m, h, v, d;
          const y = (m = (p == null ? void 0 : p.type) || {}) == null ? void 0 : m.name;
          y === "ElOptionGroup" ? c(!kt(p.children) && !Array.isArray(p.children) && dt((h = p.children) == null ? void 0 : h.default) ? (v = p.children) == null ? void 0 : v.default() : p.children) : y === "ElOption" ? u.push((d = p.props) == null ? void 0 : d.label) : Array.isArray(p.children) && c(p.children);
        });
      }
      return s.length && c((l = s[0]) == null ? void 0 : l.children), a(u, r) || (r = u, n("update-options", u)), s;
    };
  }
});
const Vi = "ElSelect", K$ = ce({
  name: Vi,
  componentName: Vi,
  components: {
    ElInput: Ft,
    ElSelectMenu: V$,
    ElOption: Gl,
    ElOptions: j$,
    ElTag: al,
    ElScrollbar: Tr,
    ElTooltip: Zr,
    ElIcon: Ie
  },
  directives: { ClickOutside: Sr },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: Zy
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    popperOptions: {
      type: Object,
      default: () => ({})
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: !0
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: !1
    },
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: uo.teleported,
    persistent: {
      type: Boolean,
      default: !0
    },
    clearIcon: {
      type: an,
      default: aa
    },
    fitInputWidth: {
      type: Boolean,
      default: !1
    },
    suffixIcon: {
      type: an,
      default: to
    },
    tagType: { ...ql.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: !0
    },
    remoteShowSuffix: {
      type: Boolean,
      default: !1
    },
    suffixTransition: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      values: ro,
      default: "bottom-start"
    }
  },
  emits: [
    ft,
    Gn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = we("select"), r = we("input"), { t: a } = ot(), o = H$(e), {
      optionList: l,
      optionsArray: s,
      selectSize: u,
      readonly: c,
      handleResize: f,
      collapseTagSize: p,
      debouncedOnInputChange: m,
      debouncedQueryChange: h,
      deletePrevTag: v,
      deleteTag: d,
      deleteSelected: y,
      handleOptionSelect: w,
      scrollToOption: C,
      setSelected: g,
      resetInputHeight: b,
      managePlaceholder: k,
      showClose: S,
      selectDisabled: $,
      iconComponent: T,
      iconReverse: R,
      showNewOption: z,
      emptyText: V,
      toggleLastOptionHitState: F,
      resetInputState: N,
      handleComposition: B,
      onOptionCreate: W,
      onOptionDestroy: q,
      handleMenuEnter: M,
      handleFocus: H,
      blur: _,
      handleBlur: L,
      handleClearClick: U,
      handleClose: I,
      handleKeydownEscape: G,
      toggleMenu: ne,
      selectOption: he,
      getValueKey: ge,
      navigateOptions: se,
      handleDeleteTooltipTag: le,
      dropMenuVisible: ue,
      reference: ve,
      input: _e,
      iOSInput: Pe,
      tooltipRef: He,
      tagTooltipRef: We,
      tags: Ue,
      selectWrapper: je,
      scrollbar: rt,
      queryChange: ht,
      groupQueryChange: lt,
      handleMouseEnter: Se,
      handleMouseLeave: ut,
      showTagList: ct,
      collapseTagList: st
    } = W$(e, o, t), { focus: Ze } = n0(ve), {
      inputWidth: ae,
      selected: ke,
      inputLength: Fe,
      filteredOptionsCount: Je,
      visible: ee,
      selectedLabel: Z,
      hoverIndex: D,
      query: X,
      inputHovering: j,
      currentPlaceholder: te,
      menuVisibleOnFocus: P,
      isOnComposition: ie,
      options: Ce,
      cachedOptions: Le,
      optionsCount: Y,
      prefixWidth: oe
    } = wn(o), pe = E(() => {
      const It = [n.b()], Dn = i(u);
      return Dn && It.push(n.m(Dn)), e.disabled && It.push(n.m("disabled")), It;
    }), Ee = E(() => [
      n.e("tags"),
      n.is("disabled", i($))
    ]), yt = E(() => [
      n.b("tags-wrapper"),
      { "has-prefix": i(oe) && i(ke).length }
    ]), Tt = E(() => [
      n.e("input"),
      n.is(i(u)),
      n.is("disabled", i($))
    ]), un = E(() => [
      n.e("input"),
      n.is(i(u)),
      n.em("input", "iOS")
    ]), cn = E(() => [
      n.is("empty", !e.allowCreate && !!i(X) && i(Je) === 0)
    ]), Ht = E(() => ({
      maxWidth: `${i(ae) - 32}px`,
      width: "100%"
    })), ca = E(() => ({ maxWidth: `${i(ae) > 123 ? i(ae) - 123 : i(ae) - 75}px` })), Pd = E(() => ({
      marginLeft: `${i(oe)}px`,
      flexGrow: 1,
      width: `${i(Fe) / (i(ae) - 32)}%`,
      maxWidth: `${i(ae) - 42}px`
    }));
    vt(co, Ut({
      props: e,
      options: Ce,
      optionsArray: s,
      cachedOptions: Le,
      optionsCount: Y,
      filteredOptionsCount: Je,
      hoverIndex: D,
      handleOptionSelect: w,
      onOptionCreate: W,
      onOptionDestroy: q,
      selectWrapper: je,
      selected: ke,
      setSelected: g,
      queryChange: ht,
      groupQueryChange: lt
    })), Xe(() => {
      o.cachedPlaceHolder = te.value = e.placeholder || (() => a("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (te.value = ""), Nn(je, f), e.remote && e.multiple && b(), Te(() => {
        const It = ve.value && ve.value.$el;
        if (It && (ae.value = It.getBoundingClientRect().width, t.slots.prefix)) {
          const Dn = It.querySelector(`.${r.e("prefix")}`);
          oe.value = Math.max(Dn.getBoundingClientRect().width + 11, 30);
        }
      }), g();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(ft, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(ft, "");
    const xd = E(() => {
      var It, Dn;
      return (Dn = (It = He.value) == null ? void 0 : It.popperRef) == null ? void 0 : Dn.contentRef;
    });
    return {
      isIOS: ru,
      onOptionsRendered: (It) => {
        l.value = It;
      },
      prefixWidth: oe,
      selectSize: u,
      readonly: c,
      handleResize: f,
      collapseTagSize: p,
      debouncedOnInputChange: m,
      debouncedQueryChange: h,
      deletePrevTag: v,
      deleteTag: d,
      handleDeleteTooltipTag: le,
      deleteSelected: y,
      handleOptionSelect: w,
      scrollToOption: C,
      inputWidth: ae,
      selected: ke,
      inputLength: Fe,
      filteredOptionsCount: Je,
      visible: ee,
      selectedLabel: Z,
      hoverIndex: D,
      query: X,
      inputHovering: j,
      currentPlaceholder: te,
      menuVisibleOnFocus: P,
      isOnComposition: ie,
      options: Ce,
      resetInputHeight: b,
      managePlaceholder: k,
      showClose: S,
      selectDisabled: $,
      iconComponent: T,
      iconReverse: R,
      showNewOption: z,
      emptyText: V,
      toggleLastOptionHitState: F,
      resetInputState: N,
      handleComposition: B,
      handleMenuEnter: M,
      handleFocus: H,
      blur: _,
      handleBlur: L,
      handleClearClick: U,
      handleClose: I,
      handleKeydownEscape: G,
      toggleMenu: ne,
      selectOption: he,
      getValueKey: ge,
      navigateOptions: se,
      dropMenuVisible: ue,
      focus: Ze,
      reference: ve,
      input: _e,
      iOSInput: Pe,
      tooltipRef: He,
      popperPaneRef: xd,
      tags: Ue,
      selectWrapper: je,
      scrollbar: rt,
      wrapperKls: pe,
      tagsKls: Ee,
      tagWrapperKls: yt,
      inputKls: Tt,
      iOSInputKls: un,
      scrollbarKls: cn,
      selectTagsStyle: Ht,
      nsSelect: n,
      tagTextStyle: ca,
      inputStyle: Pd,
      handleMouseEnter: Se,
      handleMouseLeave: ut,
      showTagList: ct,
      collapseTagList: st,
      tagTooltipRef: We
    };
  }
}), q$ = ["disabled", "autocomplete"], Y$ = ["disabled"], U$ = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function G$(e, t, n, r, a, o) {
  const l = Ve("el-tag"), s = Ve("el-tooltip"), u = Ve("el-icon"), c = Ve("el-input"), f = Ve("el-option"), p = Ve("el-options"), m = Ve("el-scrollbar"), h = Ve("el-select-menu"), v = fl("click-outside");
  return ze((O(), K("div", {
    ref: "selectWrapper",
    class: A(e.wrapperKls),
    onMouseenter: t[21] || (t[21] = (...d) => e.handleMouseEnter && e.handleMouseEnter(...d)),
    onMouseleave: t[22] || (t[22] = (...d) => e.handleMouseLeave && e.handleMouseLeave(...d)),
    onClick: t[23] || (t[23] = qe((...d) => e.toggleMenu && e.toggleMenu(...d), ["stop"]))
  }, [
    J(s, {
      ref: "tooltipRef",
      visible: e.dropMenuVisible,
      placement: e.placement,
      teleported: e.teleported,
      "popper-class": [e.nsSelect.e("popper"), e.popperClass],
      "popper-options": e.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: e.effect,
      pure: "",
      trigger: "click",
      transition: `${e.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": !1,
      "gpu-acceleration": !1,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: re(() => [
        Q("div", {
          class: "select-trigger",
          onMouseenter: t[19] || (t[19] = (d) => e.inputHovering = !0),
          onMouseleave: t[20] || (t[20] = (d) => e.inputHovering = !1)
        }, [
          e.multiple ? (O(), K("div", {
            key: 0,
            ref: "tags",
            class: A(e.tagsKls),
            style: Ge(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (O(), fe(ur, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: re(() => [
                Q("span", {
                  class: A(e.tagWrapperKls)
                }, [
                  (O(!0), K(Ne, null, Ye(e.showTagList, (d) => (O(), fe(l, {
                    key: e.getValueKey(d),
                    closable: !e.selectDisabled && !d.isDisabled,
                    size: e.collapseTagSize,
                    hit: d.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (y) => e.deleteTag(y, d)
                  }, {
                    default: re(() => [
                      Q("span", {
                        class: A(e.nsSelect.e("tags-text")),
                        style: Ge(e.tagTextStyle)
                      }, ye(d.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                  e.selected.length > e.maxCollapseTags ? (O(), fe(l, {
                    key: 0,
                    closable: !1,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": ""
                  }, {
                    default: re(() => [
                      e.collapseTagsTooltip ? (O(), fe(s, {
                        key: 0,
                        ref: "tagTooltipRef",
                        disabled: e.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: e.effect,
                        placement: "bottom",
                        teleported: e.teleported
                      }, {
                        default: re(() => [
                          Q("span", {
                            class: A(e.nsSelect.e("tags-text"))
                          }, "+ " + ye(e.selected.length - e.maxCollapseTags), 3)
                        ]),
                        content: re(() => [
                          Q("div", {
                            class: A(e.nsSelect.e("collapse-tags"))
                          }, [
                            (O(!0), K(Ne, null, Ye(e.collapseTagList, (d) => (O(), K("div", {
                              key: e.getValueKey(d),
                              class: A(e.nsSelect.e("collapse-tag"))
                            }, [
                              J(l, {
                                class: "in-tooltip",
                                closable: !e.selectDisabled && !d.isDisabled,
                                size: e.collapseTagSize,
                                hit: d.hitState,
                                type: e.tagType,
                                "disable-transitions": "",
                                style: { margin: "2px" },
                                onClose: (y) => e.handleDeleteTooltipTag(y, d)
                              }, {
                                default: re(() => [
                                  Q("span", {
                                    class: A(e.nsSelect.e("tags-text")),
                                    style: Ge({
                                      maxWidth: e.inputWidth - 75 + "px"
                                    })
                                  }, ye(d.currentLabel), 7)
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "hit", "type", "onClose"])
                            ], 2))), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (O(), K("span", {
                        key: 1,
                        class: A(e.nsSelect.e("tags-text"))
                      }, "+ " + ye(e.selected.length - e.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : de("v-if", !0)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : de("v-if", !0),
            e.collapseTags ? de("v-if", !0) : (O(), fe(ur, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: re(() => [
                Q("span", {
                  class: A(e.tagWrapperKls),
                  style: Ge(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                }, [
                  (O(!0), K(Ne, null, Ye(e.selected, (d) => (O(), fe(l, {
                    key: e.getValueKey(d),
                    closable: !e.selectDisabled && !d.isDisabled,
                    size: e.collapseTagSize,
                    hit: d.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (y) => e.deleteTag(y, d)
                  }, {
                    default: re(() => [
                      Q("span", {
                        class: A(e.nsSelect.e("tags-text")),
                        style: Ge({ maxWidth: e.inputWidth - 75 + "px" })
                      }, ye(d.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable && !e.selectDisabled ? ze((O(), K("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (d) => e.query = d),
              type: "text",
              class: A(e.inputKls),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: Ge(e.inputStyle),
              onFocus: t[1] || (t[1] = (...d) => e.handleFocus && e.handleFocus(...d)),
              onBlur: t[2] || (t[2] = (...d) => e.handleBlur && e.handleBlur(...d)),
              onKeyup: t[3] || (t[3] = (...d) => e.managePlaceholder && e.managePlaceholder(...d)),
              onKeydown: [
                t[4] || (t[4] = (...d) => e.resetInputState && e.resetInputState(...d)),
                t[5] || (t[5] = mt(qe((d) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = mt(qe((d) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = mt((...d) => e.handleKeydownEscape && e.handleKeydownEscape(...d), ["esc"])),
                t[8] || (t[8] = mt(qe((...d) => e.selectOption && e.selectOption(...d), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = mt((...d) => e.deletePrevTag && e.deletePrevTag(...d), ["delete"])),
                t[10] || (t[10] = mt((d) => e.visible = !1, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionupdate: t[12] || (t[12] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionend: t[13] || (t[13] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onInput: t[14] || (t[14] = (...d) => e.debouncedQueryChange && e.debouncedQueryChange(...d))
            }, null, 46, q$)), [
              [eu, e.query]
            ]) : de("v-if", !0)
          ], 6)) : de("v-if", !0),
          de(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (O(), K("input", {
            key: 1,
            ref: "iOSInput",
            class: A(e.iOSInputKls),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, Y$)) : de("v-if", !0),
          J(c, {
            id: e.id,
            ref: "reference",
            modelValue: e.selectedLabel,
            "onUpdate:modelValue": t[15] || (t[15] = (d) => e.selectedLabel = d),
            type: "text",
            placeholder: typeof e.currentPlaceholder == "function" ? e.currentPlaceholder() : e.currentPlaceholder,
            name: e.name,
            autocomplete: e.autocomplete,
            size: e.selectSize,
            disabled: e.selectDisabled,
            readonly: e.readonly,
            "validate-event": !1,
            class: A([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[16] || (t[16] = mt(qe((d) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[17] || (t[17] = mt(qe((d) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              mt(qe(e.selectOption, ["stop", "prevent"]), ["enter"]),
              mt(e.handleKeydownEscape, ["esc"]),
              t[18] || (t[18] = mt((d) => e.visible = !1, ["tab"]))
            ]
          }, pl({
            suffix: re(() => [
              e.iconComponent && !e.showClose ? (O(), fe(u, {
                key: 0,
                class: A([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: re(() => [
                  (O(), fe(gt(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : de("v-if", !0),
              e.showClose && e.clearIcon ? (O(), fe(u, {
                key: 1,
                class: A([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: re(() => [
                  (O(), fe(gt(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : de("v-if", !0)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: re(() => [
                Q("div", U$, [
                  $e(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: re(() => [
        J(h, null, {
          default: re(() => [
            ze(J(m, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: A(e.scrollbarKls)
            }, {
              default: re(() => [
                e.showNewOption ? (O(), fe(f, {
                  key: 0,
                  value: e.query,
                  created: !0
                }, null, 8, ["value"])) : de("v-if", !0),
                J(p, { onUpdateOptions: e.onOptionsRendered }, {
                  default: re(() => [
                    $e(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [wt, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (O(), K(Ne, { key: 0 }, [
              e.$slots.empty ? $e(e.$slots, "empty", { key: 0 }) : (O(), K("p", {
                key: 1,
                class: A(e.nsSelect.be("dropdown", "empty"))
              }, ye(e.emptyText), 3))
            ], 64)) : de("v-if", !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "placement", "teleported", "popper-class", "popper-options", "effect", "transition", "persistent", "onShow"])
  ], 34)), [
    [v, e.handleClose, e.popperPaneRef]
  ]);
}
var X$ = /* @__PURE__ */ Ae(K$, [["render", G$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const Z$ = ce({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = we("select"), n = x(!0), r = Ke(), a = x([]);
    vt(vd, Ut({
      ...wn(e)
    }));
    const o = Oe(co);
    Xe(() => {
      a.value = l(r.subTree);
    });
    const l = (u) => {
      const c = [];
      return Array.isArray(u.children) && u.children.forEach((f) => {
        var p;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? c.push(f.component.proxy) : (p = f.children) != null && p.length && c.push(...l(f));
      }), c;
    }, { groupQueryChange: s } = cr(o);
    return me(s, () => {
      n.value = a.value.some((u) => u.visible === !0);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function J$(e, t, n, r, a, o) {
  return ze((O(), K("ul", {
    class: A(e.ns.be("group", "wrap"))
  }, [
    Q("li", {
      class: A(e.ns.be("group", "title"))
    }, ye(e.label), 3),
    Q("li", null, [
      Q("ul", {
        class: A(e.ns.b("group"))
      }, [
        $e(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [wt, e.visible]
  ]);
}
var hd = /* @__PURE__ */ Ae(Z$, [["render", J$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const md = Vt(X$, {
  Option: Gl,
  OptionGroup: hd
}), gd = kn(Gl);
kn(hd);
const Xl = () => Oe(pd, {}), Q$ = Me({
  pageSize: {
    type: Number,
    required: !0
  },
  pageSizes: {
    type: be(Array),
    default: () => Al([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: nr
  }
}), e_ = ce({
  name: "ElPaginationSizes"
}), t_ = /* @__PURE__ */ ce({
  ...e_,
  props: Q$,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = ot(), a = we("pagination"), o = Xl(), l = x(n.pageSize);
    me(() => n.pageSizes, (c, f) => {
      if (!tn(c, f) && Array.isArray(c)) {
        const p = c.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", p);
      }
    }), me(() => n.pageSize, (c) => {
      l.value = c;
    });
    const s = E(() => n.pageSizes);
    function u(c) {
      var f;
      c !== l.value && (l.value = c, (f = o.handleSizeChange) == null || f.call(o, Number(c)));
    }
    return (c, f) => (O(), K("span", {
      class: A(i(a).e("sizes"))
    }, [
      J(i(md), {
        "model-value": l.value,
        disabled: c.disabled,
        "popper-class": c.popperClass,
        size: c.size,
        "validate-event": !1,
        onChange: u
      }, {
        default: re(() => [
          (O(!0), K(Ne, null, Ye(i(s), (p) => (O(), fe(i(gd), {
            key: p,
            value: p,
            label: p + i(r)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var n_ = /* @__PURE__ */ Ae(t_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const r_ = Me({
  size: {
    type: String,
    values: nr
  }
}), a_ = ["disabled"], o_ = ce({
  name: "ElPaginationJumper"
}), l_ = /* @__PURE__ */ ce({
  ...o_,
  props: r_,
  setup(e) {
    const { t } = ot(), n = we("pagination"), { pageCount: r, disabled: a, currentPage: o, changeEvent: l } = Xl(), s = x(), u = E(() => {
      var p;
      return (p = s.value) != null ? p : o == null ? void 0 : o.value;
    });
    function c(p) {
      s.value = p ? +p : "";
    }
    function f(p) {
      p = Math.trunc(+p), l == null || l(p), s.value = void 0;
    }
    return (p, m) => (O(), K("span", {
      class: A(i(n).e("jump")),
      disabled: i(a)
    }, [
      Q("span", {
        class: A([i(n).e("goto")])
      }, ye(i(t)("el.pagination.goto")), 3),
      J(i(Ft), {
        size: p.size,
        class: A([i(n).e("editor"), i(n).is("in-pagination")]),
        min: 1,
        max: i(r),
        disabled: i(a),
        "model-value": i(u),
        "validate-event": !1,
        label: i(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": c,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      Q("span", {
        class: A([i(n).e("classifier")])
      }, ye(i(t)("el.pagination.pageClassifier")), 3)
    ], 10, a_));
  }
});
var s_ = /* @__PURE__ */ Ae(l_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const i_ = Me({
  total: {
    type: Number,
    default: 1e3
  }
}), u_ = ["disabled"], c_ = ce({
  name: "ElPaginationTotal"
}), d_ = /* @__PURE__ */ ce({
  ...c_,
  props: i_,
  setup(e) {
    const { t } = ot(), n = we("pagination"), { disabled: r } = Xl();
    return (a, o) => (O(), K("span", {
      class: A(i(n).e("total")),
      disabled: i(r)
    }, ye(i(t)("el.pagination.total", {
      total: a.total
    })), 11, u_));
  }
});
var f_ = /* @__PURE__ */ Ae(d_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const p_ = Me({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: !0
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
}), v_ = ["onKeyup"], h_ = ["aria-current", "aria-label", "tabindex"], m_ = ["tabindex", "aria-label"], g_ = ["aria-current", "aria-label", "tabindex"], b_ = ["tabindex", "aria-label"], y_ = ["aria-current", "aria-label", "tabindex"], w_ = ce({
  name: "ElPaginationPager"
}), C_ = /* @__PURE__ */ ce({
  ...w_,
  props: p_,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = we("pager"), a = we("icon"), { t: o } = ot(), l = x(!1), s = x(!1), u = x(!1), c = x(!1), f = x(!1), p = x(!1), m = E(() => {
      const b = n.pagerCount, k = (b - 1) / 2, S = Number(n.currentPage), $ = Number(n.pageCount);
      let T = !1, R = !1;
      $ > b && (S > b - k && (T = !0), S < $ - k && (R = !0));
      const z = [];
      if (T && !R) {
        const V = $ - (b - 2);
        for (let F = V; F < $; F++)
          z.push(F);
      } else if (!T && R)
        for (let V = 2; V < b; V++)
          z.push(V);
      else if (T && R) {
        const V = Math.floor(b / 2) - 1;
        for (let F = S - V; F <= S + V; F++)
          z.push(F);
      } else
        for (let V = 2; V < $; V++)
          z.push(V);
      return z;
    }), h = E(() => [
      "more",
      "btn-quickprev",
      a.b(),
      r.is("disabled", n.disabled)
    ]), v = E(() => [
      "more",
      "btn-quicknext",
      a.b(),
      r.is("disabled", n.disabled)
    ]), d = E(() => n.disabled ? -1 : 0);
    jn(() => {
      const b = (n.pagerCount - 1) / 2;
      l.value = !1, s.value = !1, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - b && (l.value = !0), n.currentPage < n.pageCount - b && (s.value = !0));
    });
    function y(b = !1) {
      n.disabled || (b ? u.value = !0 : c.value = !0);
    }
    function w(b = !1) {
      b ? f.value = !0 : p.value = !0;
    }
    function C(b) {
      const k = b.target;
      if (k.tagName.toLowerCase() === "li" && Array.from(k.classList).includes("number")) {
        const S = Number(k.textContent);
        S !== n.currentPage && t("change", S);
      } else
        k.tagName.toLowerCase() === "li" && Array.from(k.classList).includes("more") && g(b);
    }
    function g(b) {
      const k = b.target;
      if (k.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let S = Number(k.textContent);
      const $ = n.pageCount, T = n.currentPage, R = n.pagerCount - 2;
      k.className.includes("more") && (k.className.includes("quickprev") ? S = T - R : k.className.includes("quicknext") && (S = T + R)), Number.isNaN(+S) || (S < 1 && (S = 1), S > $ && (S = $)), S !== T && t("change", S);
    }
    return (b, k) => (O(), K("ul", {
      class: A(i(r).b()),
      onClick: g,
      onKeyup: mt(C, ["enter"])
    }, [
      b.pageCount > 0 ? (O(), K("li", {
        key: 0,
        class: A([[
          i(r).is("active", b.currentPage === 1),
          i(r).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === 1,
        "aria-label": i(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: i(d)
      }, " 1 ", 10, h_)) : de("v-if", !0),
      l.value ? (O(), K("li", {
        key: 1,
        class: A(i(h)),
        tabindex: i(d),
        "aria-label": i(o)("el.pagination.prevPages", { pager: b.pagerCount - 2 }),
        onMouseenter: k[0] || (k[0] = (S) => y(!0)),
        onMouseleave: k[1] || (k[1] = (S) => u.value = !1),
        onFocus: k[2] || (k[2] = (S) => w(!0)),
        onBlur: k[3] || (k[3] = (S) => f.value = !1)
      }, [
        (u.value || f.value) && !b.disabled ? (O(), fe(i(hr), { key: 0 })) : (O(), fe(i(Ws), { key: 1 }))
      ], 42, m_)) : de("v-if", !0),
      (O(!0), K(Ne, null, Ye(i(m), (S) => (O(), K("li", {
        key: S,
        class: A([[
          i(r).is("active", b.currentPage === S),
          i(r).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === S,
        "aria-label": i(o)("el.pagination.currentPage", { pager: S }),
        tabindex: i(d)
      }, ye(S), 11, g_))), 128)),
      s.value ? (O(), K("li", {
        key: 2,
        class: A(i(v)),
        tabindex: i(d),
        "aria-label": i(o)("el.pagination.nextPages", { pager: b.pagerCount - 2 }),
        onMouseenter: k[4] || (k[4] = (S) => y()),
        onMouseleave: k[5] || (k[5] = (S) => c.value = !1),
        onFocus: k[6] || (k[6] = (S) => w()),
        onBlur: k[7] || (k[7] = (S) => p.value = !1)
      }, [
        (c.value || p.value) && !b.disabled ? (O(), fe(i(mr), { key: 0 })) : (O(), fe(i(Ws), { key: 1 }))
      ], 42, b_)) : de("v-if", !0),
      b.pageCount > 1 ? (O(), K("li", {
        key: 3,
        class: A([[
          i(r).is("active", b.currentPage === b.pageCount),
          i(r).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === b.pageCount,
        "aria-label": i(o)("el.pagination.currentPage", { pager: b.pageCount }),
        tabindex: i(d)
      }, ye(b.pageCount), 11, y_)) : de("v-if", !0)
    ], 42, v_));
  }
});
var S_ = /* @__PURE__ */ Ae(C_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const Ot = (e) => typeof e != "number", k_ = Me({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => it(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: be(Array),
    default: () => Al([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: an,
    default: () => Wa
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: an,
    default: () => An
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
}), $_ = {
  "update:current-page": (e) => it(e),
  "update:page-size": (e) => it(e),
  "size-change": (e) => it(e),
  "current-change": (e) => it(e),
  "prev-click": (e) => it(e),
  "next-click": (e) => it(e)
}, Hi = "ElPagination";
var __ = ce({
  name: Hi,
  props: k_,
  emits: $_,
  setup(e, { emit: t, slots: n }) {
    const { t: r } = ot(), a = we("pagination"), o = Ke().vnode.props || {}, l = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, s = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, u = E(() => {
      if (Ot(e.total) && Ot(e.pageCount) || !Ot(e.currentPage) && !l)
        return !1;
      if (e.layout.includes("sizes")) {
        if (Ot(e.pageCount)) {
          if (!Ot(e.total) && !Ot(e.pageSize) && !s)
            return !1;
        } else if (!s)
          return !1;
      }
      return !0;
    }), c = x(Ot(e.defaultPageSize) ? 10 : e.defaultPageSize), f = x(Ot(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), p = E({
      get() {
        return Ot(e.pageSize) ? c.value : e.pageSize;
      },
      set(g) {
        Ot(e.pageSize) && (c.value = g), s && (t("update:page-size", g), t("size-change", g));
      }
    }), m = E(() => {
      let g = 0;
      return Ot(e.pageCount) ? Ot(e.total) || (g = Math.max(1, Math.ceil(e.total / p.value))) : g = e.pageCount, g;
    }), h = E({
      get() {
        return Ot(e.currentPage) ? f.value : e.currentPage;
      },
      set(g) {
        let b = g;
        g < 1 ? b = 1 : g > m.value && (b = m.value), Ot(e.currentPage) && (f.value = b), l && (t("update:current-page", b), t("current-change", b));
      }
    });
    me(m, (g) => {
      h.value > g && (h.value = g);
    });
    function v(g) {
      h.value = g;
    }
    function d(g) {
      p.value = g;
      const b = m.value;
      h.value > b && (h.value = b);
    }
    function y() {
      e.disabled || (h.value -= 1, t("prev-click", h.value));
    }
    function w() {
      e.disabled || (h.value += 1, t("next-click", h.value));
    }
    function C(g, b) {
      g && (g.props || (g.props = {}), g.props.class = [g.props.class, b].join(" "));
    }
    return vt(pd, {
      pageCount: m,
      disabled: E(() => e.disabled),
      currentPage: h,
      changeEvent: v,
      handleSizeChange: d
    }), () => {
      var g, b;
      if (!u.value)
        return nt(Hi, r("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && m.value <= 1)
        return null;
      const k = [], S = [], $ = Re("div", { class: a.e("rightwrapper") }, S), T = {
        prev: Re(P$, {
          disabled: e.disabled,
          currentPage: h.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: Re(s_, {
          size: e.small ? "small" : "default"
        }),
        pager: Re(S_, {
          currentPage: h.value,
          pageCount: m.value,
          pagerCount: e.pagerCount,
          onChange: v,
          disabled: e.disabled
        }),
        next: Re(I$, {
          disabled: e.disabled,
          currentPage: h.value,
          pageCount: m.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: w
        }),
        sizes: Re(n_, {
          pageSize: p.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (g = n == null ? void 0 : n.default) == null ? void 0 : g.call(n)) != null ? b : null,
        total: Re(f_, { total: Ot(e.total) ? 0 : e.total })
      }, R = e.layout.split(",").map((V) => V.trim());
      let z = !1;
      return R.forEach((V) => {
        if (V === "->") {
          z = !0;
          return;
        }
        z ? S.push(T[V]) : k.push(T[V]);
      }), C(k[0], a.is("first")), C(k[k.length - 1], a.is("last")), z && S.length > 0 && (C(S[0], a.is("first")), C(S[S.length - 1], a.is("last")), k.push($)), Re("div", {
        class: [
          a.b(),
          a.is("background", e.background),
          {
            [a.m("small")]: e.small
          }
        ]
      }, k);
    };
  }
});
const E_ = Vt(__);
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var T_ = /["'&<>]/, O_ = P_;
function P_(e) {
  var t = "" + e, n = T_.exec(t);
  if (!n)
    return t;
  var r, a = "", o = 0, l = 0;
  for (o = n.index; o < t.length; o++) {
    switch (t.charCodeAt(o)) {
      case 34:
        r = "&quot;";
        break;
      case 38:
        r = "&amp;";
        break;
      case 39:
        r = "&#39;";
        break;
      case 60:
        r = "&lt;";
        break;
      case 62:
        r = "&gt;";
        break;
      default:
        continue;
    }
    l !== o && (a += t.substring(l, o)), l = o + 1, a += r;
  }
  return l !== o ? a + t.substring(l, o) : a;
}
const x_ = /* @__PURE__ */ ln(O_), Oo = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
}, M_ = function(e, t, n, r, a) {
  if (!t && !r && (!a || Array.isArray(a) && !a.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const o = r ? null : function(s, u) {
    return a ? (Array.isArray(a) || (a = [a]), a.map((c) => typeof c == "string" ? _t(s, c) : c(s, u, e))) : (t !== "$key" && Bt(s) && "$value" in s && (s = s.$value), [Bt(s) ? _t(s, t) : s]);
  }, l = function(s, u) {
    if (r)
      return r(s.value, u.value);
    for (let c = 0, f = s.key.length; c < f; c++) {
      if (s.key[c] < u.key[c])
        return -1;
      if (s.key[c] > u.key[c])
        return 1;
    }
    return 0;
  };
  return e.map((s, u) => ({
    value: s,
    index: u,
    key: o ? o(s, u) : null
  })).sort((s, u) => {
    let c = l(s, u);
    return c || (c = s.index - u.index), c * +n;
  }).map((s) => s.value);
}, bd = function(e, t) {
  let n = null;
  return e.columns.forEach((r) => {
    r.id === t && (n = r);
  }), n;
}, A_ = function(e, t) {
  let n = null;
  for (let r = 0; r < e.columns.length; r++) {
    const a = e.columns[r];
    if (a.columnKey === t) {
      n = a;
      break;
    }
  }
  return n || xl("ElTable", `No column matching with column-key: ${t}`), n;
}, Wi = function(e, t, n) {
  const r = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return r ? bd(e, r[0]) : null;
}, Ct = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let r = e;
    for (const a of n)
      r = r[a];
    return `${r}`;
  } else if (typeof t == "function")
    return t.call(null, e);
}, Hn = function(e, t) {
  const n = {};
  return (e || []).forEach((r, a) => {
    n[Ct(r, t)] = { row: r, index: a };
  }), n;
};
function N_(e, t) {
  const n = {};
  let r;
  for (r in e)
    n[r] = e[r];
  for (r in t)
    if (qn(t, r)) {
      const a = t[r];
      typeof a < "u" && (n[r] = a);
    }
  return n;
}
function Zl(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function yd(e) {
  return e === "" || e !== void 0 && (e = Zl(e), Number.isNaN(e) && (e = 80)), e;
}
function R_(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function I_(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Br(e, t, n) {
  let r = !1;
  const a = e.indexOf(t), o = a !== -1, l = (s) => {
    s === "add" ? e.push(t) : e.splice(a, 1), r = !0, tt(t.children) && t.children.forEach((u) => {
      Br(e, u, n ?? !o);
    });
  };
  return Jt(n) ? n && !o ? l("add") : !n && o && l("remove") : l(o ? "remove" : "add"), r;
}
function D_(e, t, n = "children", r = "hasChildren") {
  const a = (l) => !(Array.isArray(l) && l.length);
  function o(l, s, u) {
    t(l, s, u), s.forEach((c) => {
      if (c[r]) {
        t(c, null, u + 1);
        return;
      }
      const f = c[n];
      a(f) || o(c, f, u + 1);
    });
  }
  e.forEach((l) => {
    if (l[r]) {
      t(l, null, 0);
      return;
    }
    const s = l[n];
    a(s) || o(l, s, 0);
  });
}
let fn;
function L_(e, t, n, r, a) {
  a = Fu({
    enterable: !0,
    showArrow: !0
  }, a);
  const o = e == null ? void 0 : e.dataset.prefix, l = e == null ? void 0 : e.querySelector(`.${o}-scrollbar__wrap`);
  function s() {
    const y = a.effect === "light", w = document.createElement("div");
    return w.className = [
      `${o}-popper`,
      y ? "is-light" : "is-dark",
      a.popperClass || ""
    ].join(" "), n = x_(n), w.innerHTML = n, w.style.zIndex = String(r()), e == null || e.appendChild(w), w;
  }
  function u() {
    const y = document.createElement("div");
    return y.className = `${o}-popper__arrow`, y;
  }
  function c() {
    f && f.update();
  }
  fn == null || fn(), fn = () => {
    try {
      f && f.destroy(), h && (e == null || e.removeChild(h)), t.removeEventListener("mouseenter", p), t.removeEventListener("mouseleave", m), l == null || l.removeEventListener("scroll", fn), fn = void 0;
    } catch {
    }
  };
  let f = null, p = c, m = fn;
  a.enterable && ({ onOpen: p, onClose: m } = cc({
    showAfter: a.showAfter,
    hideAfter: a.hideAfter,
    open: c,
    close: fn
  }));
  const h = s();
  h.onmouseenter = p, h.onmouseleave = m;
  const v = [];
  if (a.offset && v.push({
    name: "offset",
    options: {
      offset: [0, a.offset]
    }
  }), a.showArrow) {
    const y = h.appendChild(u());
    v.push({
      name: "arrow",
      options: {
        element: y,
        padding: 10
      }
    });
  }
  const d = a.popperOptions || {};
  return f = sc(t, h, {
    placement: a.placement || "top",
    strategy: "fixed",
    ...d,
    modifiers: d.modifiers ? v.concat(d.modifiers) : v
  }), t.addEventListener("mouseenter", p), t.addEventListener("mouseleave", m), l == null || l.addEventListener("scroll", fn), f;
}
function wd(e) {
  return e.children ? Xg(e.children, wd) : [e];
}
function ji(e, t) {
  return e + t.colSpan;
}
const Cd = (e, t, n, r) => {
  let a = 0, o = e;
  const l = n.states.columns.value;
  if (r) {
    const u = wd(r[e]);
    a = l.slice(0, l.indexOf(u[0])).reduce(ji, 0), o = a + u.reduce(ji, 0) - 1;
  } else
    a = e;
  let s;
  switch (t) {
    case "left":
      o < n.states.fixedLeafColumnsLength.value && (s = "left");
      break;
    case "right":
      a >= l.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
      break;
    default:
      o < n.states.fixedLeafColumnsLength.value ? s = "left" : a >= l.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
  }
  return s ? {
    direction: s,
    start: a,
    after: o
  } : {};
}, Jl = (e, t, n, r, a, o = 0) => {
  const l = [], { direction: s, start: u, after: c } = Cd(t, n, r, a);
  if (s) {
    const f = s === "left";
    l.push(`${e}-fixed-column--${s}`), f && c + o === r.states.fixedLeafColumnsLength.value - 1 ? l.push("is-last-column") : !f && u - o === r.states.columns.value.length - r.states.rightFixedLeafColumnsLength.value && l.push("is-first-column");
  }
  return l;
};
function Ki(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
const Ql = (e, t, n, r) => {
  const {
    direction: a,
    start: o = 0,
    after: l = 0
  } = Cd(e, t, n, r);
  if (!a)
    return;
  const s = {}, u = a === "left", c = n.states.columns.value;
  return u ? s.left = c.slice(0, o).reduce(Ki, 0) : s.right = c.slice(l + 1).reverse().reduce(Ki, 0), s;
}, $r = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function F_(e) {
  const t = Ke(), n = x(!1), r = x([]);
  return {
    updateExpandRows: () => {
      const u = e.data.value || [], c = e.rowKey.value;
      if (n.value)
        r.value = u.slice();
      else if (c) {
        const f = Hn(r.value, c);
        r.value = u.reduce((p, m) => {
          const h = Ct(m, c);
          return f[h] && p.push(m), p;
        }, []);
      } else
        r.value = [];
    },
    toggleRowExpansion: (u, c) => {
      Br(r.value, u, c) && t.emit("expand-change", u, r.value.slice());
    },
    setExpandRowKeys: (u) => {
      t.store.assertRowKey();
      const c = e.data.value || [], f = e.rowKey.value, p = Hn(c, f);
      r.value = u.reduce((m, h) => {
        const v = p[h];
        return v && m.push(v.row), m;
      }, []);
    },
    isRowExpanded: (u) => {
      const c = e.rowKey.value;
      return c ? !!Hn(r.value, c)[Ct(u, c)] : r.value.includes(u);
    },
    states: {
      expandRows: r,
      defaultExpandAll: n
    }
  };
}
function B_(e) {
  const t = Ke(), n = x(null), r = x(null), a = (c) => {
    t.store.assertRowKey(), n.value = c, l(c);
  }, o = () => {
    n.value = null;
  }, l = (c) => {
    const { data: f, rowKey: p } = e;
    let m = null;
    p.value && (m = (i(f) || []).find((h) => Ct(h, p.value) === c)), r.value = m, t.emit("current-change", r.value, null);
  };
  return {
    setCurrentRowKey: a,
    restoreCurrentRowKey: o,
    setCurrentRowByKey: l,
    updateCurrentRow: (c) => {
      const f = r.value;
      if (c && c !== f) {
        r.value = c, t.emit("current-change", r.value, f);
        return;
      }
      !c && f && (r.value = null, t.emit("current-change", null, f));
    },
    updateCurrentRowData: () => {
      const c = e.rowKey.value, f = e.data.value || [], p = r.value;
      if (!f.includes(p) && p) {
        if (c) {
          const m = Ct(p, c);
          l(m);
        } else
          r.value = null;
        r.value === null && t.emit("current-change", null, p);
      } else
        n.value && (l(n.value), o());
    },
    states: {
      _currentRowKey: n,
      currentRow: r
    }
  };
}
function z_(e) {
  const t = x([]), n = x({}), r = x(16), a = x(!1), o = x({}), l = x("hasChildren"), s = x("children"), u = Ke(), c = E(() => {
    if (!e.rowKey.value)
      return {};
    const w = e.data.value || [];
    return p(w);
  }), f = E(() => {
    const w = e.rowKey.value, C = Object.keys(o.value), g = {};
    return C.length && C.forEach((b) => {
      if (o.value[b].length) {
        const k = { children: [] };
        o.value[b].forEach((S) => {
          const $ = Ct(S, w);
          k.children.push($), S[l.value] && !g[$] && (g[$] = { children: [] });
        }), g[b] = k;
      }
    }), g;
  }), p = (w) => {
    const C = e.rowKey.value, g = {};
    return D_(w, (b, k, S) => {
      const $ = Ct(b, C);
      Array.isArray(k) ? g[$] = {
        children: k.map((T) => Ct(T, C)),
        level: S
      } : a.value && (g[$] = {
        children: [],
        lazy: !0,
        level: S
      });
    }, s.value, l.value), g;
  }, m = (w = !1, C = ((g) => (g = u.store) == null ? void 0 : g.states.defaultExpandAll.value)()) => {
    var g;
    const b = c.value, k = f.value, S = Object.keys(b), $ = {};
    if (S.length) {
      const T = i(n), R = [], z = (F, N) => {
        if (w)
          return t.value ? C || t.value.includes(N) : !!(C || F != null && F.expanded);
        {
          const B = C || t.value && t.value.includes(N);
          return !!(F != null && F.expanded || B);
        }
      };
      S.forEach((F) => {
        const N = T[F], B = { ...b[F] };
        if (B.expanded = z(N, F), B.lazy) {
          const { loaded: W = !1, loading: q = !1 } = N || {};
          B.loaded = !!W, B.loading = !!q, R.push(F);
        }
        $[F] = B;
      });
      const V = Object.keys(k);
      a.value && V.length && R.length && V.forEach((F) => {
        const N = T[F], B = k[F].children;
        if (R.includes(F)) {
          if ($[F].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          $[F].children = B;
        } else {
          const { loaded: W = !1, loading: q = !1 } = N || {};
          $[F] = {
            lazy: !0,
            loaded: !!W,
            loading: !!q,
            expanded: z(N, F),
            children: B,
            level: ""
          };
        }
      });
    }
    n.value = $, (g = u.store) == null || g.updateTableScrollY();
  };
  me(() => t.value, () => {
    m(!0);
  }), me(() => c.value, () => {
    m();
  }), me(() => f.value, () => {
    m();
  });
  const h = (w) => {
    t.value = w, m();
  }, v = (w, C) => {
    u.store.assertRowKey();
    const g = e.rowKey.value, b = Ct(w, g), k = b && n.value[b];
    if (b && k && "expanded" in k) {
      const S = k.expanded;
      C = typeof C > "u" ? !k.expanded : C, n.value[b].expanded = C, S !== C && u.emit("expand-change", w, C), u.store.updateTableScrollY();
    }
  }, d = (w) => {
    u.store.assertRowKey();
    const C = e.rowKey.value, g = Ct(w, C), b = n.value[g];
    a.value && b && "loaded" in b && !b.loaded ? y(w, g, b) : v(w, void 0);
  }, y = (w, C, g) => {
    const { load: b } = u.props;
    b && !n.value[C].loaded && (n.value[C].loading = !0, b(w, g, (k) => {
      if (!Array.isArray(k))
        throw new TypeError("[ElTable] data must be an array");
      n.value[C].loading = !1, n.value[C].loaded = !0, n.value[C].expanded = !0, k.length && (o.value[C] = k), u.emit("expand-change", w, !0);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: d,
    toggleTreeExpansion: v,
    updateTreeExpandKeys: h,
    updateTreeData: m,
    normalize: p,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: r,
      lazy: a,
      lazyTreeNodeMap: o,
      lazyColumnIdentifier: l,
      childrenColumnName: s
    }
  };
}
const V_ = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : M_(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
}, Ia = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, Ia(n.children)) : t.push(n);
  }), t;
};
function H_() {
  var e;
  const t = Ke(), { size: n } = wn((e = t.proxy) == null ? void 0 : e.$props), r = x(null), a = x([]), o = x([]), l = x(!1), s = x([]), u = x([]), c = x([]), f = x([]), p = x([]), m = x([]), h = x([]), v = x([]), d = [], y = x(0), w = x(0), C = x(0), g = x(!1), b = x([]), k = x(!1), S = x(!1), $ = x(null), T = x({}), R = x(null), z = x(null), V = x(null), F = x(null), N = x(null);
  me(a, () => t.state && M(!1), {
    deep: !0
  });
  const B = () => {
    if (!r.value)
      throw new Error("[ElTable] prop row-key is required");
  }, W = (Z) => {
    var D;
    (D = Z.children) == null || D.forEach((X) => {
      X.fixed = Z.fixed, W(X);
    });
  }, q = () => {
    s.value.forEach((te) => {
      W(te);
    }), f.value = s.value.filter((te) => te.fixed === !0 || te.fixed === "left"), p.value = s.value.filter((te) => te.fixed === "right"), f.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = !0, f.value.unshift(s.value[0]));
    const Z = s.value.filter((te) => !te.fixed);
    u.value = [].concat(f.value).concat(Z).concat(p.value);
    const D = Ia(Z), X = Ia(f.value), j = Ia(p.value);
    y.value = D.length, w.value = X.length, C.value = j.length, c.value = [].concat(X).concat(D).concat(j), l.value = f.value.length > 0 || p.value.length > 0;
  }, M = (Z, D = !1) => {
    Z && q(), D ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, H = (Z) => b.value.includes(Z), _ = () => {
    g.value = !1, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, L = () => {
    let Z;
    if (r.value) {
      Z = [];
      const D = Hn(b.value, r.value), X = Hn(a.value, r.value);
      for (const j in D)
        qn(D, j) && !X[j] && Z.push(D[j].row);
    } else
      Z = b.value.filter((D) => !a.value.includes(D));
    if (Z.length) {
      const D = b.value.filter((X) => !Z.includes(X));
      b.value = D, t.emit("selection-change", D.slice());
    }
  }, U = () => (b.value || []).slice(), I = (Z, D = void 0, X = !0) => {
    if (Br(b.value, Z, D)) {
      const te = (b.value || []).slice();
      X && t.emit("select", te, Z), t.emit("selection-change", te);
    }
  }, G = () => {
    var Z, D;
    const X = S.value ? !g.value : !(g.value || b.value.length);
    g.value = X;
    let j = !1, te = 0;
    const P = (D = (Z = t == null ? void 0 : t.store) == null ? void 0 : Z.states) == null ? void 0 : D.rowKey.value;
    a.value.forEach((ie, Ce) => {
      const Le = Ce + te;
      $.value ? $.value.call(null, ie, Le) && Br(b.value, ie, X) && (j = !0) : Br(b.value, ie, X) && (j = !0), te += ge(Ct(ie, P));
    }), j && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, ne = () => {
    const Z = Hn(b.value, r.value);
    a.value.forEach((D) => {
      const X = Ct(D, r.value), j = Z[X];
      j && (b.value[j.index] = D);
    });
  }, he = () => {
    var Z, D, X;
    if (((Z = a.value) == null ? void 0 : Z.length) === 0) {
      g.value = !1;
      return;
    }
    let j;
    r.value && (j = Hn(b.value, r.value));
    const te = function(Le) {
      return j ? !!j[Ct(Le, r.value)] : b.value.includes(Le);
    };
    let P = !0, ie = 0, Ce = 0;
    for (let Le = 0, Y = (a.value || []).length; Le < Y; Le++) {
      const oe = (X = (D = t == null ? void 0 : t.store) == null ? void 0 : D.states) == null ? void 0 : X.rowKey.value, pe = Le + Ce, Ee = a.value[Le], yt = $.value && $.value.call(null, Ee, pe);
      if (te(Ee))
        ie++;
      else if (!$.value || yt) {
        P = !1;
        break;
      }
      Ce += ge(Ct(Ee, oe));
    }
    ie === 0 && (P = !1), g.value = P;
  }, ge = (Z) => {
    var D;
    if (!t || !t.store)
      return 0;
    const { treeData: X } = t.store.states;
    let j = 0;
    const te = (D = X.value[Z]) == null ? void 0 : D.children;
    return te && (j += te.length, te.forEach((P) => {
      j += ge(P);
    })), j;
  }, se = (Z, D) => {
    Array.isArray(Z) || (Z = [Z]);
    const X = {};
    return Z.forEach((j) => {
      T.value[j.id] = D, X[j.columnKey || j.id] = D;
    }), X;
  }, le = (Z, D, X) => {
    z.value && z.value !== Z && (z.value.order = null), z.value = Z, V.value = D, F.value = X;
  }, ue = () => {
    let Z = i(o);
    Object.keys(T.value).forEach((D) => {
      const X = T.value[D];
      if (!X || X.length === 0)
        return;
      const j = bd({
        columns: c.value
      }, D);
      j && j.filterMethod && (Z = Z.filter((te) => X.some((P) => j.filterMethod.call(null, P, te, j))));
    }), R.value = Z;
  }, ve = () => {
    a.value = V_(R.value, {
      sortingColumn: z.value,
      sortProp: V.value,
      sortOrder: F.value
    });
  }, _e = (Z = void 0) => {
    Z && Z.filter || ue(), ve();
  }, Pe = (Z) => {
    const { tableHeaderRef: D } = t.refs;
    if (!D)
      return;
    const X = Object.assign({}, D.filterPanels), j = Object.keys(X);
    if (j.length)
      if (typeof Z == "string" && (Z = [Z]), Array.isArray(Z)) {
        const te = Z.map((P) => A_({
          columns: c.value
        }, P));
        j.forEach((P) => {
          const ie = te.find((Ce) => Ce.id === P);
          ie && (ie.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: te,
          values: [],
          silent: !0,
          multi: !0
        });
      } else
        j.forEach((te) => {
          const P = c.value.find((ie) => ie.id === te);
          P && (P.filteredValue = []);
        }), T.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: !0
        });
  }, He = () => {
    z.value && (le(null, null, null), t.store.commit("changeSortCondition", {
      silent: !0
    }));
  }, {
    setExpandRowKeys: We,
    toggleRowExpansion: Ue,
    updateExpandRows: je,
    states: rt,
    isRowExpanded: ht
  } = F_({
    data: a,
    rowKey: r
  }), {
    updateTreeExpandKeys: lt,
    toggleTreeExpansion: Se,
    updateTreeData: ut,
    loadOrToggle: ct,
    states: st
  } = z_({
    data: a,
    rowKey: r
  }), {
    updateCurrentRowData: Ze,
    updateCurrentRow: ae,
    setCurrentRowKey: ke,
    states: Fe
  } = B_({
    data: a,
    rowKey: r
  });
  return {
    assertRowKey: B,
    updateColumns: q,
    scheduleLayout: M,
    isSelected: H,
    clearSelection: _,
    cleanSelection: L,
    getSelectionRows: U,
    toggleRowSelection: I,
    _toggleAllSelection: G,
    toggleAllSelection: null,
    updateSelectionByRowKey: ne,
    updateAllSelected: he,
    updateFilters: se,
    updateCurrentRow: ae,
    updateSort: le,
    execFilter: ue,
    execSort: ve,
    execQuery: _e,
    clearFilter: Pe,
    clearSort: He,
    toggleRowExpansion: Ue,
    setExpandRowKeysAdapter: (Z) => {
      We(Z), lt(Z);
    },
    setCurrentRowKey: ke,
    toggleRowExpansionAdapter: (Z, D) => {
      c.value.some(({ type: j }) => j === "expand") ? Ue(Z, D) : Se(Z, D);
    },
    isRowExpanded: ht,
    updateExpandRows: je,
    updateCurrentRowData: Ze,
    loadOrToggle: ct,
    updateTreeData: ut,
    states: {
      tableSize: n,
      rowKey: r,
      data: a,
      _data: o,
      isComplex: l,
      _columns: s,
      originColumns: u,
      columns: c,
      fixedColumns: f,
      rightFixedColumns: p,
      leafColumns: m,
      fixedLeafColumns: h,
      rightFixedLeafColumns: v,
      updateOrderFns: d,
      leafColumnsLength: y,
      fixedLeafColumnsLength: w,
      rightFixedLeafColumnsLength: C,
      isAllSelected: g,
      selection: b,
      reserveSelection: k,
      selectOnIndeterminate: S,
      selectable: $,
      filters: T,
      filteredData: R,
      sortingColumn: z,
      sortProp: V,
      sortOrder: F,
      hoverRow: N,
      ...rt,
      ...st,
      ...Fe
    }
  };
}
function il(e, t) {
  return e.map((n) => {
    var r;
    return n.id === t.id ? t : ((r = n.children) != null && r.length && (n.children = il(n.children, t)), n);
  });
}
function ul(e) {
  e.forEach((t) => {
    var n, r;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (r = t.children) != null && r.length && ul(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function W_() {
  const e = Ke(), t = H_();
  return {
    ns: we("table"),
    ...t,
    mutations: {
      setData(l, s) {
        const u = i(l._data) !== s;
        l.data.value = s, l._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), i(l.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : u ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(l, s, u, c) {
        const f = i(l._columns);
        let p = [];
        u ? (u && !u.children && (u.children = []), u.children.push(s), p = il(f, u)) : (f.push(s), p = f), ul(p), l._columns.value = p, l.updateOrderFns.push(c), s.type === "selection" && (l.selectable.value = s.selectable, l.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(l, s) {
        var u;
        ((u = s.getColumnIndex) == null ? void 0 : u.call(s)) !== s.no && (ul(l._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(l, s, u, c) {
        const f = i(l._columns) || [];
        if (u)
          u.children.splice(u.children.findIndex((m) => m.id === s.id), 1), Te(() => {
            var m;
            ((m = u.children) == null ? void 0 : m.length) === 0 && delete u.children;
          }), l._columns.value = il(f, u);
        else {
          const m = f.indexOf(s);
          m > -1 && (f.splice(m, 1), l._columns.value = f);
        }
        const p = l.updateOrderFns.indexOf(c);
        p > -1 && l.updateOrderFns.splice(p, 1), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      sort(l, s) {
        const { prop: u, order: c, init: f } = s;
        if (u) {
          const p = i(l.columns).find((m) => m.property === u);
          p && (p.order = c, e.store.updateSort(p, u, c), e.store.commit("changeSortCondition", { init: f }));
        }
      },
      changeSortCondition(l, s) {
        const { sortingColumn: u, sortProp: c, sortOrder: f } = l, p = i(u), m = i(c), h = i(f);
        h === null && (l.sortingColumn.value = null, l.sortProp.value = null);
        const v = { filter: !0 };
        e.store.execQuery(v), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: p,
          prop: m,
          order: h
        }), e.store.updateTableScrollY();
      },
      filterChange(l, s) {
        const { column: u, values: c, silent: f } = s, p = e.store.updateFilters(u, c);
        e.store.execQuery(), f || e.emit("filter-change", p), e.store.updateTableScrollY();
      },
      toggleAllSelection() {
        e.store.toggleAllSelection();
      },
      rowSelectedChanged(l, s) {
        e.store.toggleRowSelection(s), e.store.updateAllSelected();
      },
      setHoverRow(l, s) {
        l.hoverRow.value = s;
      },
      setCurrentRow(l, s) {
        e.store.updateCurrentRow(s);
      }
    },
    commit: function(l, ...s) {
      const u = e.store.mutations;
      if (u[l])
        u[l].apply(e, [e.store.states].concat(s));
      else
        throw new Error(`Action not found: ${l}`);
    },
    updateTableScrollY: function() {
      Te(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
const zr = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  data: "data",
  "treeProps.hasChildren": {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  "treeProps.children": {
    key: "childrenColumnName",
    default: "children"
  }
};
function j_(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = W_();
  return n.toggleAllSelection = Rn(n._toggleAllSelection, 10), Object.keys(zr).forEach((r) => {
    Sd(kd(t, r), r, n);
  }), K_(n, t), n;
}
function K_(e, t) {
  Object.keys(zr).forEach((n) => {
    me(() => kd(t, n), (r) => {
      Sd(r, n, e);
    });
  });
}
function Sd(e, t, n) {
  let r = e, a = zr[t];
  typeof zr[t] == "object" && (a = a.key, r = r || zr[t].default), n.states[a].value = r;
}
function kd(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let r = e;
    return n.forEach((a) => {
      r = r[a];
    }), r;
  } else
    return e[t];
}
class q_ {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = !0, this.showHeader = !0, this.height = x(null), this.scrollX = x(!1), this.scrollY = x(!1), this.bodyWidth = x(null), this.fixedWidth = x(null), this.rightFixedWidth = x(null), this.gutterWidth = 0;
    for (const n in t)
      qn(t, n) && (bn(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return !1;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n != null && n.wrapRef)) {
      let r = !0;
      const a = this.scrollY.value;
      return r = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = r, a !== r;
    }
    return !1;
  }
  setHeight(t, n = "height") {
    if (!at)
      return;
    const r = this.table.vnode.el;
    if (t = R_(t), this.height.value = Number(t), !r && (t || t === 0))
      return Te(() => this.setHeight(t, n));
    typeof t == "number" ? (r.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (r.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((r) => {
      r.isColumnGroup ? t.push.apply(t, r.columns) : t.push(r);
    }), t;
  }
  updateElsHeight() {
    this.updateScrollY(), this.notifyObservers("scrollable");
  }
  headerDisplayNone(t) {
    if (!t)
      return !0;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return !0;
      n = n.parentElement;
    }
    return !1;
  }
  updateColumnsWidth() {
    if (!at)
      return;
    const t = this.fit, n = this.table.vnode.el.clientWidth;
    let r = 0;
    const a = this.getFlattenColumns(), o = a.filter((u) => typeof u.width != "number");
    if (a.forEach((u) => {
      typeof u.width == "number" && u.realWidth && (u.realWidth = null);
    }), o.length > 0 && t) {
      if (a.forEach((u) => {
        r += Number(u.width || u.minWidth || 80);
      }), r <= n) {
        this.scrollX.value = !1;
        const u = n - r;
        if (o.length === 1)
          o[0].realWidth = Number(o[0].minWidth || 80) + u;
        else {
          const c = o.reduce((m, h) => m + Number(h.minWidth || 80), 0), f = u / c;
          let p = 0;
          o.forEach((m, h) => {
            if (h === 0)
              return;
            const v = Math.floor(Number(m.minWidth || 80) * f);
            p += v, m.realWidth = Number(m.minWidth || 80) + v;
          }), o[0].realWidth = Number(o[0].minWidth || 80) + u - p;
        }
      } else
        this.scrollX.value = !0, o.forEach((u) => {
          u.realWidth = Number(u.minWidth);
        });
      this.bodyWidth.value = Math.max(r, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      a.forEach((u) => {
        !u.width && !u.minWidth ? u.realWidth = 80 : u.realWidth = Number(u.width || u.minWidth), r += u.realWidth;
      }), this.scrollX.value = r > n, this.bodyWidth.value = r;
    const l = this.store.states.fixedColumns.value;
    if (l.length > 0) {
      let u = 0;
      l.forEach((c) => {
        u += Number(c.realWidth || c.width);
      }), this.fixedWidth.value = u;
    }
    const s = this.store.states.rightFixedColumns.value;
    if (s.length > 0) {
      let u = 0;
      s.forEach((c) => {
        u += Number(c.realWidth || c.width);
      }), this.rightFixedWidth.value = u;
    }
    this.notifyObservers("columns");
  }
  addObserver(t) {
    this.observers.push(t);
  }
  removeObserver(t) {
    const n = this.observers.indexOf(t);
    n !== -1 && this.observers.splice(n, 1);
  }
  notifyObservers(t) {
    this.observers.forEach((r) => {
      var a, o;
      switch (t) {
        case "columns":
          (a = r.state) == null || a.onColumnsChange(this);
          break;
        case "scrollable":
          (o = r.state) == null || o.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
}
const { CheckboxGroup: Y_ } = Zn, U_ = ce({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: Zn,
    ElCheckboxGroup: Y_,
    ElScrollbar: Tr,
    ElTooltip: Zr,
    ElIcon: Ie,
    ArrowDown: to,
    ArrowUp: ju
  },
  directives: { ClickOutside: Sr },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(e) {
    const t = Ke(), { t: n } = ot(), r = we("table-filter"), a = t == null ? void 0 : t.parent;
    a.filterPanels.value[e.column.id] || (a.filterPanels.value[e.column.id] = t);
    const o = x(!1), l = x(null), s = E(() => e.column && e.column.filters), u = E({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        c.value && (typeof b < "u" && b !== null ? c.value.splice(0, 1, b) : c.value.splice(0, 1));
      }
    }), c = E({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), f = E(() => e.column ? e.column.filterMultiple : !0), p = (b) => b.value === u.value, m = () => {
      o.value = !1;
    }, h = (b) => {
      b.stopPropagation(), o.value = !o.value;
    }, v = () => {
      o.value = !1;
    }, d = () => {
      C(c.value), m();
    }, y = () => {
      c.value = [], C(c.value), m();
    }, w = (b) => {
      u.value = b, C(typeof b < "u" && b !== null ? c.value : []), m();
    }, C = (b) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: b
      }), e.store.updateAllSelected();
    };
    me(o, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: !0
    });
    const g = E(() => {
      var b, k;
      return (k = (b = l.value) == null ? void 0 : b.popperRef) == null ? void 0 : k.contentRef;
    });
    return {
      tooltipVisible: o,
      multiple: f,
      filteredValue: c,
      filterValue: u,
      filters: s,
      handleConfirm: d,
      handleReset: y,
      handleSelect: w,
      isActive: p,
      t: n,
      ns: r,
      showFilterPanel: h,
      hideFilterPanel: v,
      popperPaneRef: g,
      tooltip: l
    };
  }
}), G_ = { key: 0 }, X_ = ["disabled"], Z_ = ["label", "onClick"];
function J_(e, t, n, r, a, o) {
  const l = Ve("el-checkbox"), s = Ve("el-checkbox-group"), u = Ve("el-scrollbar"), c = Ve("arrow-up"), f = Ve("arrow-down"), p = Ve("el-icon"), m = Ve("el-tooltip"), h = fl("click-outside");
  return O(), fe(m, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": !1,
    "stop-popper-mouse-event": !1,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.ns.b(),
    persistent: ""
  }, {
    content: re(() => [
      e.multiple ? (O(), K("div", G_, [
        Q("div", {
          class: A(e.ns.e("content"))
        }, [
          J(u, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: re(() => [
              J(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (v) => e.filteredValue = v),
                class: A(e.ns.e("checkbox-group"))
              }, {
                default: re(() => [
                  (O(!0), K(Ne, null, Ye(e.filters, (v) => (O(), fe(l, {
                    key: v.value,
                    label: v.value
                  }, {
                    default: re(() => [
                      pt(ye(v.text), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue", "class"])
            ]),
            _: 1
          }, 8, ["wrap-class"])
        ], 2),
        Q("div", {
          class: A(e.ns.e("bottom"))
        }, [
          Q("button", {
            class: A({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...v) => e.handleConfirm && e.handleConfirm(...v))
          }, ye(e.t("el.table.confirmFilter")), 11, X_),
          Q("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...v) => e.handleReset && e.handleReset(...v))
          }, ye(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (O(), K("ul", {
        key: 1,
        class: A(e.ns.e("list"))
      }, [
        Q("li", {
          class: A([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (v) => e.handleSelect(null))
        }, ye(e.t("el.table.clearFilter")), 3),
        (O(!0), K(Ne, null, Ye(e.filters, (v) => (O(), K("li", {
          key: v.value,
          class: A([e.ns.e("list-item"), e.ns.is("active", e.isActive(v))]),
          label: v.value,
          onClick: (d) => e.handleSelect(v.value)
        }, ye(v.text), 11, Z_))), 128))
      ], 2))
    ]),
    default: re(() => [
      ze((O(), K("span", {
        class: A([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...v) => e.showFilterPanel && e.showFilterPanel(...v))
      }, [
        J(p, null, {
          default: re(() => [
            e.column.filterOpened ? (O(), fe(c, { key: 0 })) : (O(), fe(f, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [h, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var Q_ = /* @__PURE__ */ Ae(U_, [["render", J_], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function $d(e) {
  const t = Ke();
  cl(() => {
    n.value.addObserver(t);
  }), Xe(() => {
    r(n.value), a(n.value);
  }), dl(() => {
    r(n.value), a(n.value);
  }), Ka(() => {
    n.value.removeObserver(t);
  });
  const n = E(() => {
    const o = e.layout;
    if (!o)
      throw new Error("Can not find table layout.");
    return o;
  }), r = (o) => {
    var l;
    const s = ((l = e.vnode.el) == null ? void 0 : l.querySelectorAll("colgroup > col")) || [];
    if (!s.length)
      return;
    const u = o.getFlattenColumns(), c = {};
    u.forEach((f) => {
      c[f.id] = f;
    });
    for (let f = 0, p = s.length; f < p; f++) {
      const m = s[f], h = m.getAttribute("name"), v = c[h];
      v && m.setAttribute("width", v.realWidth || v.width);
    }
  }, a = (o) => {
    var l, s;
    const u = ((l = e.vnode.el) == null ? void 0 : l.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let f = 0, p = u.length; f < p; f++)
      u[f].setAttribute("width", o.scrollY.value ? o.gutterWidth : "0");
    const c = ((s = e.vnode.el) == null ? void 0 : s.querySelectorAll("th.gutter")) || [];
    for (let f = 0, p = c.length; f < p; f++) {
      const m = c[f];
      m.style.width = o.scrollY.value ? `${o.gutterWidth}px` : "0", m.style.display = o.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: n.value,
    onColumnsChange: r,
    onScrollableChange: a
  };
}
const sn = Symbol("ElTable");
function eE(e, t) {
  const n = Ke(), r = Oe(sn), a = (d) => {
    d.stopPropagation();
  }, o = (d, y) => {
    !y.filters && y.sortable ? v(d, y, !1) : y.filterable && !y.sortable && a(d), r == null || r.emit("header-click", y, d);
  }, l = (d, y) => {
    r == null || r.emit("header-contextmenu", y, d);
  }, s = x(null), u = x(!1), c = x({}), f = (d, y) => {
    if (at && !(y.children && y.children.length > 0) && s.value && e.border) {
      u.value = !0;
      const w = r;
      t("set-drag-visible", !0);
      const g = (w == null ? void 0 : w.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), k = b.getBoundingClientRect(), S = k.left - g + 30;
      Hu(b, "noclick"), c.value = {
        startMouseLeft: d.clientX,
        startLeft: k.right - g,
        startColumnLeft: k.left - g,
        tableLeft: g
      };
      const $ = w == null ? void 0 : w.refs.resizeProxy;
      $.style.left = `${c.value.startLeft}px`, document.onselectstart = function() {
        return !1;
      }, document.ondragstart = function() {
        return !1;
      };
      const T = (z) => {
        const V = z.clientX - c.value.startMouseLeft, F = c.value.startLeft + V;
        $.style.left = `${Math.max(S, F)}px`;
      }, R = () => {
        if (u.value) {
          const { startColumnLeft: z, startLeft: V } = c.value, N = Number.parseInt($.style.left, 10) - z;
          y.width = y.realWidth = N, w == null || w.emit("header-dragend", y.width, V - z, y, d), requestAnimationFrame(() => {
            e.store.scheduleLayout(!1, !0);
          }), document.body.style.cursor = "", u.value = !1, s.value = null, c.value = {}, t("set-drag-visible", !1);
        }
        document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", R), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Lo(b, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", T), document.addEventListener("mouseup", R);
    }
  }, p = (d, y) => {
    if (y.children && y.children.length > 0)
      return;
    const w = d.target;
    if (!vr(w))
      return;
    const C = w == null ? void 0 : w.closest("th");
    if (!(!y || !y.resizable) && !u.value && e.border) {
      const g = C.getBoundingClientRect(), b = document.body.style;
      g.width > 12 && g.right - d.pageX < 8 ? (b.cursor = "col-resize", ir(C, "is-sortable") && (C.style.cursor = "col-resize"), s.value = y) : u.value || (b.cursor = "", ir(C, "is-sortable") && (C.style.cursor = "pointer"), s.value = null);
    }
  }, m = () => {
    at && (document.body.style.cursor = "");
  }, h = ({ order: d, sortOrders: y }) => {
    if (d === "")
      return y[0];
    const w = y.indexOf(d || null);
    return y[w > y.length - 2 ? 0 : w + 1];
  }, v = (d, y, w) => {
    var C;
    d.stopPropagation();
    const g = y.order === w ? null : w || h(y), b = (C = d.target) == null ? void 0 : C.closest("th");
    if (b && ir(b, "noclick")) {
      Lo(b, "noclick");
      return;
    }
    if (!y.sortable)
      return;
    const k = e.store.states;
    let S = k.sortProp.value, $;
    const T = k.sortingColumn.value;
    (T !== y || T === y && T.order === null) && (T && (T.order = null), k.sortingColumn.value = y, S = y.property), g ? $ = y.order = g : $ = y.order = null, k.sortProp.value = S, k.sortOrder.value = $, r == null || r.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: o,
    handleHeaderContextMenu: l,
    handleMouseDown: f,
    handleMouseMove: p,
    handleMouseOut: m,
    handleSortClick: v,
    handleFilterClick: a
  };
}
function tE(e) {
  const t = Oe(sn), n = we("table");
  return {
    getHeaderRowStyle: (s) => {
      const u = t == null ? void 0 : t.props.headerRowStyle;
      return typeof u == "function" ? u.call(null, { rowIndex: s }) : u;
    },
    getHeaderRowClass: (s) => {
      const u = [], c = t == null ? void 0 : t.props.headerRowClassName;
      return typeof c == "string" ? u.push(c) : typeof c == "function" && u.push(c.call(null, { rowIndex: s })), u.join(" ");
    },
    getHeaderCellStyle: (s, u, c, f) => {
      var p;
      let m = (p = t == null ? void 0 : t.props.headerCellStyle) != null ? p : {};
      typeof m == "function" && (m = m.call(null, {
        rowIndex: s,
        columnIndex: u,
        row: c,
        column: f
      }));
      const h = Ql(u, f.fixed, e.store, c);
      return $r(h, "left"), $r(h, "right"), Object.assign({}, m, h);
    },
    getHeaderCellClass: (s, u, c, f) => {
      const p = Jl(n.b(), u, f.fixed, e.store, c), m = [
        f.id,
        f.order,
        f.headerAlign,
        f.className,
        f.labelClassName,
        ...p
      ];
      f.children || m.push("is-leaf"), f.sortable && m.push("is-sortable");
      const h = t == null ? void 0 : t.props.headerCellClassName;
      return typeof h == "string" ? m.push(h) : typeof h == "function" && m.push(h.call(null, {
        rowIndex: s,
        columnIndex: u,
        row: c,
        column: f
      })), m.push(n.e("cell")), m.filter((v) => !!v).join(" ");
    }
  };
}
const _d = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, _d(n.children))) : t.push(n);
  }), t;
}, nE = (e) => {
  let t = 1;
  const n = (o, l) => {
    if (l && (o.level = l.level + 1, t < o.level && (t = o.level)), o.children) {
      let s = 0;
      o.children.forEach((u) => {
        n(u, o), s += u.colSpan;
      }), o.colSpan = s;
    } else
      o.colSpan = 1;
  };
  e.forEach((o) => {
    o.level = 1, n(o, void 0);
  });
  const r = [];
  for (let o = 0; o < t; o++)
    r.push([]);
  return _d(e).forEach((o) => {
    o.children ? (o.rowSpan = 1, o.children.forEach((l) => l.isSubColumn = !0)) : o.rowSpan = t - o.level + 1, r[o.level - 1].push(o);
  }), r;
};
function rE(e) {
  const t = Oe(sn), n = E(() => nE(e.store.states.originColumns.value));
  return {
    isGroup: E(() => {
      const o = n.value.length > 1;
      return o && t && (t.state.isGroup.value = !0), o;
    }),
    toggleAllSelection: (o) => {
      o.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var aE = ce({
  name: "ElTableHeader",
  components: {
    ElCheckbox: Zn
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e, { emit: t }) {
    const n = Ke(), r = Oe(sn), a = we("table"), o = x({}), { onColumnsChange: l, onScrollableChange: s } = $d(r);
    Xe(async () => {
      await Te(), await Te();
      const { prop: S, order: $ } = e.defaultSort;
      r == null || r.store.commit("sort", { prop: S, order: $, init: !0 });
    });
    const {
      handleHeaderClick: u,
      handleHeaderContextMenu: c,
      handleMouseDown: f,
      handleMouseMove: p,
      handleMouseOut: m,
      handleSortClick: h,
      handleFilterClick: v
    } = eE(e, t), {
      getHeaderRowStyle: d,
      getHeaderRowClass: y,
      getHeaderCellStyle: w,
      getHeaderCellClass: C
    } = tE(e), { isGroup: g, toggleAllSelection: b, columnRows: k } = rE(e);
    return n.state = {
      onColumnsChange: l,
      onScrollableChange: s
    }, n.filterPanels = o, {
      ns: a,
      filterPanels: o,
      onColumnsChange: l,
      onScrollableChange: s,
      columnRows: k,
      getHeaderRowClass: y,
      getHeaderRowStyle: d,
      getHeaderCellClass: C,
      getHeaderCellStyle: w,
      handleHeaderClick: u,
      handleHeaderContextMenu: c,
      handleMouseDown: f,
      handleMouseMove: p,
      handleMouseOut: m,
      handleSortClick: h,
      handleFilterClick: v,
      isGroup: g,
      toggleAllSelection: b
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: r,
      getHeaderCellClass: a,
      getHeaderRowClass: o,
      getHeaderRowStyle: l,
      handleHeaderClick: s,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: f,
      handleSortClick: p,
      handleMouseOut: m,
      store: h,
      $parent: v
    } = this;
    let d = 1;
    return Re("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, w) => Re("tr", {
      class: o(w),
      key: w,
      style: l(w)
    }, y.map((C, g) => (C.rowSpan > d && (d = C.rowSpan), Re("th", {
      class: a(w, g, y, C),
      colspan: C.colSpan,
      key: `${C.id}-thead`,
      rowspan: C.rowSpan,
      style: r(w, g, y, C),
      onClick: (b) => s(b, C),
      onContextmenu: (b) => u(b, C),
      onMousedown: (b) => c(b, C),
      onMousemove: (b) => f(b, C),
      onMouseout: m
    }, [
      Re("div", {
        class: [
          "cell",
          C.filteredValue && C.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        C.renderHeader ? C.renderHeader({
          column: C,
          $index: g,
          store: h,
          _self: v
        }) : C.label,
        C.sortable && Re("span", {
          onClick: (b) => p(b, C),
          class: "caret-wrapper"
        }, [
          Re("i", {
            onClick: (b) => p(b, C, "ascending"),
            class: "sort-caret ascending"
          }),
          Re("i", {
            onClick: (b) => p(b, C, "descending"),
            class: "sort-caret descending"
          })
        ]),
        C.filterable && Re(Q_, {
          store: h,
          placement: C.filterPlacement || "bottom-start",
          column: C,
          upDataColumn: (b, k) => {
            C[b] = k;
          }
        })
      ])
    ]))))));
  }
});
function oE(e) {
  const t = Oe(sn), n = x(""), r = x(Re("div")), { nextZIndex: a } = fc(), o = (v, d, y) => {
    var w;
    const C = t, g = Oo(v);
    let b;
    const k = (w = C == null ? void 0 : C.vnode.el) == null ? void 0 : w.dataset.prefix;
    g && (b = Wi({
      columns: e.store.states.columns.value
    }, g, k), b && (C == null || C.emit(`cell-${y}`, d, b, g, v))), C == null || C.emit(`row-${y}`, d, b, v);
  }, l = (v, d) => {
    o(v, d, "dblclick");
  }, s = (v, d) => {
    e.store.commit("setCurrentRow", d), o(v, d, "click");
  }, u = (v, d) => {
    o(v, d, "contextmenu");
  }, c = Rn((v) => {
    e.store.commit("setHoverRow", v);
  }, 30), f = Rn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), p = (v) => {
    const d = window.getComputedStyle(v, null), y = Number.parseInt(d.paddingLeft, 10) || 0, w = Number.parseInt(d.paddingRight, 10) || 0, C = Number.parseInt(d.paddingTop, 10) || 0, g = Number.parseInt(d.paddingBottom, 10) || 0;
    return {
      left: y,
      right: w,
      top: C,
      bottom: g
    };
  };
  return {
    handleDoubleClick: l,
    handleClick: s,
    handleContextMenu: u,
    handleMouseEnter: c,
    handleMouseLeave: f,
    handleCellMouseEnter: (v, d, y) => {
      var w;
      const C = t, g = Oo(v), b = (w = C == null ? void 0 : C.vnode.el) == null ? void 0 : w.dataset.prefix;
      if (g) {
        const W = Wi({
          columns: e.store.states.columns.value
        }, g, b), q = C.hoverState = { cell: g, column: W, row: d };
        C == null || C.emit("cell-mouse-enter", q.row, q.column, q.cell, v);
      }
      if (!y)
        return;
      const k = v.target.querySelector(".cell");
      if (!(ir(k, `${b}-tooltip`) && k.childNodes.length))
        return;
      const S = document.createRange();
      S.setStart(k, 0), S.setEnd(k, k.childNodes.length);
      const $ = Math.round(S.getBoundingClientRect().width), T = Math.round(S.getBoundingClientRect().height), { top: R, left: z, right: V, bottom: F } = p(k), N = z + V, B = R + F;
      ($ + N > k.offsetWidth || T + B > k.offsetHeight || k.scrollWidth > k.offsetWidth) && L_(t == null ? void 0 : t.refs.tableWrapper, g, g.innerText || g.textContent, a, y);
    },
    handleCellMouseLeave: (v) => {
      if (!Oo(v))
        return;
      const y = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", y == null ? void 0 : y.row, y == null ? void 0 : y.column, y == null ? void 0 : y.cell, v);
    },
    tooltipContent: n,
    tooltipTrigger: r
  };
}
function lE(e) {
  const t = Oe(sn), n = we("table");
  return {
    getRowStyle: (c, f) => {
      const p = t == null ? void 0 : t.props.rowStyle;
      return typeof p == "function" ? p.call(null, {
        row: c,
        rowIndex: f
      }) : p || null;
    },
    getRowClass: (c, f) => {
      const p = [n.e("row")];
      t != null && t.props.highlightCurrentRow && c === e.store.states.currentRow.value && p.push("current-row"), e.stripe && f % 2 === 1 && p.push(n.em("row", "striped"));
      const m = t == null ? void 0 : t.props.rowClassName;
      return typeof m == "string" ? p.push(m) : typeof m == "function" && p.push(m.call(null, {
        row: c,
        rowIndex: f
      })), p;
    },
    getCellStyle: (c, f, p, m) => {
      const h = t == null ? void 0 : t.props.cellStyle;
      let v = h ?? {};
      typeof h == "function" && (v = h.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: p,
        column: m
      }));
      const d = Ql(f, e == null ? void 0 : e.fixed, e.store);
      return $r(d, "left"), $r(d, "right"), Object.assign({}, v, d);
    },
    getCellClass: (c, f, p, m, h) => {
      const v = Jl(n.b(), f, e == null ? void 0 : e.fixed, e.store, void 0, h), d = [m.id, m.align, m.className, ...v], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? d.push(y) : typeof y == "function" && d.push(y.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: p,
        column: m
      })), d.push(n.e("cell")), d.filter((w) => !!w).join(" ");
    },
    getSpan: (c, f, p, m) => {
      let h = 1, v = 1;
      const d = t == null ? void 0 : t.props.spanMethod;
      if (typeof d == "function") {
        const y = d({
          row: c,
          column: f,
          rowIndex: p,
          columnIndex: m
        });
        Array.isArray(y) ? (h = y[0], v = y[1]) : typeof y == "object" && (h = y.rowspan, v = y.colspan);
      }
      return { rowspan: h, colspan: v };
    },
    getColspanRealWidth: (c, f, p) => {
      if (f < 1)
        return c[p].realWidth;
      const m = c.map(({ realWidth: h, width: v }) => h || v).slice(p, p + f);
      return Number(m.reduce((h, v) => Number(h) + Number(v), -1));
    }
  };
}
function sE(e) {
  const t = Oe(sn), n = we("table"), {
    handleDoubleClick: r,
    handleClick: a,
    handleContextMenu: o,
    handleMouseEnter: l,
    handleMouseLeave: s,
    handleCellMouseEnter: u,
    handleCellMouseLeave: c,
    tooltipContent: f,
    tooltipTrigger: p
  } = oE(e), {
    getRowStyle: m,
    getRowClass: h,
    getCellStyle: v,
    getCellClass: d,
    getSpan: y,
    getColspanRealWidth: w
  } = lE(e), C = E(() => e.store.states.columns.value.findIndex(({ type: $ }) => $ === "default")), g = ($, T) => {
    const R = t.props.rowKey;
    return R ? Ct($, R) : T;
  }, b = ($, T, R, z = !1) => {
    const { tooltipEffect: V, tooltipOptions: F, store: N } = e, { indent: B, columns: W } = N.states, q = h($, T);
    let M = !0;
    return R && (q.push(n.em("row", `level-${R.level}`)), M = R.display), Re("tr", {
      style: [M ? null : {
        display: "none"
      }, m($, T)],
      class: q,
      key: g($, T),
      onDblclick: (_) => r(_, $),
      onClick: (_) => a(_, $),
      onContextmenu: (_) => o(_, $),
      onMouseenter: () => l(T),
      onMouseleave: s
    }, W.value.map((_, L) => {
      const { rowspan: U, colspan: I } = y($, _, T, L);
      if (!U || !I)
        return null;
      const G = { ..._ };
      G.realWidth = w(W.value, I, L);
      const ne = {
        store: e.store,
        _self: e.context || t,
        column: G,
        row: $,
        $index: T,
        cellIndex: L,
        expanded: z
      };
      L === C.value && R && (ne.treeNode = {
        indent: R.level * B.value,
        level: R.level
      }, typeof R.expanded == "boolean" && (ne.treeNode.expanded = R.expanded, "loading" in R && (ne.treeNode.loading = R.loading), "noLazyChildren" in R && (ne.treeNode.noLazyChildren = R.noLazyChildren)));
      const he = `${T},${L}`, ge = G.columnKey || G.rawColumnKey || "", se = k(L, _, ne), le = _.showOverflowTooltip && Fu({
        effect: V
      }, F, _.showOverflowTooltip);
      return Re("td", {
        style: v(T, L, $, _),
        class: d(T, L, $, _, I - 1),
        key: `${ge}${he}`,
        rowspan: U,
        colspan: I,
        onMouseenter: (ue) => u(ue, $, le),
        onMouseleave: c
      }, [se]);
    }));
  }, k = ($, T, R) => T.renderCell(R);
  return {
    wrappedRowRender: ($, T) => {
      const R = e.store, { isRowExpanded: z, assertRowKey: V } = R, { treeData: F, lazyTreeNodeMap: N, childrenColumnName: B, rowKey: W } = R.states, q = R.states.columns.value;
      if (q.some(({ type: H }) => H === "expand")) {
        const H = z($), _ = b($, T, void 0, H), L = t.renderExpanded;
        return H ? L ? [
          [
            _,
            Re("tr", {
              key: `expanded-row__${_.key}`
            }, [
              Re("td", {
                colspan: q.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [L({ row: $, $index: T, store: R, expanded: H })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), _) : [[_]];
      } else if (Object.keys(F.value).length) {
        V();
        const H = Ct($, W.value);
        let _ = F.value[H], L = null;
        _ && (L = {
          expanded: _.expanded,
          level: _.level,
          display: !0
        }, typeof _.lazy == "boolean" && (typeof _.loaded == "boolean" && _.loaded && (L.noLazyChildren = !(_.children && _.children.length)), L.loading = _.loading));
        const U = [b($, T, L)];
        if (_) {
          let I = 0;
          const G = (he, ge) => {
            he && he.length && ge && he.forEach((se) => {
              const le = {
                display: ge.display && ge.expanded,
                level: ge.level + 1,
                expanded: !1,
                noLazyChildren: !1,
                loading: !1
              }, ue = Ct(se, W.value);
              if (ue == null)
                throw new Error("For nested data item, row-key is required.");
              if (_ = { ...F.value[ue] }, _ && (le.expanded = _.expanded, _.level = _.level || le.level, _.display = !!(_.expanded && le.display), typeof _.lazy == "boolean" && (typeof _.loaded == "boolean" && _.loaded && (le.noLazyChildren = !(_.children && _.children.length)), le.loading = _.loading)), I++, U.push(b(se, T + I, le)), _) {
                const ve = N.value[ue] || se[B.value];
                G(ve, _);
              }
            });
          };
          _.display = !0;
          const ne = N.value[H] || $[B.value];
          G(ne, _);
        }
        return U;
      } else
        return b($, T, void 0);
    },
    tooltipContent: f,
    tooltipTrigger: p
  };
}
const iE = {
  store: {
    required: !0,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var uE = ce({
  name: "ElTableBody",
  props: iE,
  setup(e) {
    const t = Ke(), n = Oe(sn), r = we("table"), { wrappedRowRender: a, tooltipContent: o, tooltipTrigger: l } = sE(e), { onColumnsChange: s, onScrollableChange: u } = $d(n);
    return me(e.store.states.hoverRow, (c, f) => {
      if (!e.store.states.isComplex.value || !at)
        return;
      let p = window.requestAnimationFrame;
      p || (p = (m) => window.setTimeout(m, 16)), p(() => {
        const m = t == null ? void 0 : t.vnode.el, h = Array.from((m == null ? void 0 : m.children) || []).filter((y) => y == null ? void 0 : y.classList.contains(`${r.e("row")}`)), v = h[f], d = h[c];
        v && Lo(v, "hover-row"), d && Hu(d, "hover-row");
      });
    }), Ka(() => {
      var c;
      (c = fn) == null || c();
    }), {
      ns: r,
      onColumnsChange: s,
      onScrollableChange: u,
      wrappedRowRender: a,
      tooltipContent: o,
      tooltipTrigger: l
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return Re("tbody", {}, [
      n.reduce((r, a) => r.concat(e(a, r.length)), [])
    ]);
  }
});
function es(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((a) => a.width === void 0) && (n = []);
  const r = (a) => {
    const o = {
      key: `${e.tableLayout}_${a.id}`,
      style: {},
      name: void 0
    };
    return t ? o.style = {
      width: `${a.width}px`
    } : o.name = a.id, o;
  };
  return Re("colgroup", {}, n.map((a) => Re("col", r(a))));
}
es.props = ["columns", "tableLayout"];
function cE() {
  const e = Oe(sn), t = e == null ? void 0 : e.store, n = E(() => t.states.fixedLeafColumnsLength.value), r = E(() => t.states.rightFixedColumns.value.length), a = E(() => t.states.columns.value.length), o = E(() => t.states.fixedColumns.value.length), l = E(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: r,
    columnsCount: a,
    leftFixedCount: o,
    rightFixedCount: l,
    columns: t.states.columns
  };
}
function dE(e) {
  const { columns: t } = cE(), n = we("table");
  return {
    getCellClasses: (o, l) => {
      const s = o[l], u = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...Jl(n.b(), l, s.fixed, e.store)
      ];
      return s.className && u.push(s.className), s.children || u.push(n.is("leaf")), u;
    },
    getCellStyles: (o, l) => {
      const s = Ql(l, o.fixed, e.store);
      return $r(s, "left"), $r(s, "right"), s;
    },
    columns: t
  };
}
var fE = ce({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: !0,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => ({
        prop: "",
        order: ""
      })
    }
  },
  setup(e) {
    const { getCellClasses: t, getCellStyles: n, columns: r } = dE(e);
    return {
      ns: we("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: r
    };
  },
  render() {
    const {
      columns: e,
      getCellStyles: t,
      getCellClasses: n,
      summaryMethod: r,
      sumText: a,
      ns: o
    } = this, l = this.store.states.data.value;
    let s = [];
    return r ? s = r({
      columns: e,
      data: l
    }) : e.forEach((u, c) => {
      if (c === 0) {
        s[c] = a;
        return;
      }
      const f = l.map((v) => Number(v[u.property])), p = [];
      let m = !0;
      f.forEach((v) => {
        if (!Number.isNaN(+v)) {
          m = !1;
          const d = `${v}`.split(".")[1];
          p.push(d ? d.length : 0);
        }
      });
      const h = Math.max.apply(null, p);
      m ? s[c] = "" : s[c] = f.reduce((v, d) => {
        const y = Number(d);
        return Number.isNaN(+y) ? v : Number.parseFloat((v + d).toFixed(Math.min(h, 20)));
      }, 0);
    }), Re("table", {
      class: o.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      es({
        columns: e
      }),
      Re("tbody", [
        Re("tr", {}, [
          ...e.map((u, c) => Re("td", {
            key: c,
            colspan: u.colSpan,
            rowspan: u.rowSpan,
            class: n(e, c),
            style: t(u, c)
          }, [
            Re("div", {
              class: ["cell", u.labelClassName]
            }, [s[c]])
          ]))
        ])
      ])
    ]);
  }
});
function pE(e) {
  return {
    setCurrentRow: (f) => {
      e.commit("setCurrentRow", f);
    },
    getSelectionRows: () => e.getSelectionRows(),
    toggleRowSelection: (f, p) => {
      e.toggleRowSelection(f, p, !1), e.updateAllSelected();
    },
    clearSelection: () => {
      e.clearSelection();
    },
    clearFilter: (f) => {
      e.clearFilter(f);
    },
    toggleAllSelection: () => {
      e.commit("toggleAllSelection");
    },
    toggleRowExpansion: (f, p) => {
      e.toggleRowExpansionAdapter(f, p);
    },
    clearSort: () => {
      e.clearSort();
    },
    sort: (f, p) => {
      e.commit("sort", { prop: f, order: p });
    }
  };
}
function vE(e, t, n, r) {
  const a = x(!1), o = x(null), l = x(!1), s = (_) => {
    l.value = _;
  }, u = x({
    width: null,
    height: null,
    headerHeight: null
  }), c = x(!1), f = {
    display: "inline-block",
    verticalAlign: "middle"
  }, p = x(), m = x(0), h = x(0), v = x(0), d = x(0), y = x(0);
  jn(() => {
    t.setHeight(e.height);
  }), jn(() => {
    t.setMaxHeight(e.maxHeight);
  }), me(() => [e.currentRowKey, n.states.rowKey], ([_, L]) => {
    !i(L) || !i(_) || n.setCurrentRowKey(`${_}`);
  }, {
    immediate: !0
  }), me(() => e.data, (_) => {
    r.store.commit("setData", _);
  }, {
    immediate: !0,
    deep: !0
  }), jn(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const w = () => {
    r.store.commit("setHoverRow", null), r.hoverState && (r.hoverState = null);
  }, C = (_, L) => {
    const { pixelX: U, pixelY: I } = L;
    Math.abs(U) >= Math.abs(I) && (r.refs.bodyWrapper.scrollLeft += L.pixelX / 5);
  }, g = E(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = E(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), k = () => {
    g.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(R);
  };
  Xe(async () => {
    await Te(), n.updateColumns(), z(), requestAnimationFrame(k);
    const _ = r.vnode.el, L = r.refs.headerWrapper;
    e.flexible && _ && _.parentElement && (_.parentElement.style.minWidth = "0"), u.value = {
      width: p.value = _.offsetWidth,
      height: _.offsetHeight,
      headerHeight: e.showHeader && L ? L.offsetHeight : null
    }, n.states.columns.value.forEach((U) => {
      U.filteredValue && U.filteredValue.length && r.store.commit("filterChange", {
        column: U,
        values: U.filteredValue,
        silent: !0
      });
    }), r.$ready = !0;
  });
  const S = (_, L) => {
    if (!_)
      return;
    const U = Array.from(_.classList).filter((I) => !I.startsWith("is-scrolling-"));
    U.push(t.scrollX.value ? L : "is-scrolling-none"), _.className = U.join(" ");
  }, $ = (_) => {
    const { tableWrapper: L } = r.refs;
    S(L, _);
  }, T = (_) => {
    const { tableWrapper: L } = r.refs;
    return !!(L && L.classList.contains(_));
  }, R = function() {
    if (!r.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const ge = "is-scrolling-none";
      T(ge) || $(ge);
      return;
    }
    const _ = r.refs.scrollBarRef.wrapRef;
    if (!_)
      return;
    const { scrollLeft: L, offsetWidth: U, scrollWidth: I } = _, { headerWrapper: G, footerWrapper: ne } = r.refs;
    G && (G.scrollLeft = L), ne && (ne.scrollLeft = L);
    const he = I - U - 1;
    L >= he ? $("is-scrolling-right") : $(L === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, z = () => {
    r.refs.scrollBarRef && (r.refs.scrollBarRef.wrapRef && hn(r.refs.scrollBarRef.wrapRef, "scroll", R, {
      passive: !0
    }), e.fit ? Nn(r.vnode.el, V) : hn(window, "resize", V), Nn(r.refs.bodyWrapper, () => {
      var _, L;
      V(), (L = (_ = r.refs) == null ? void 0 : _.scrollBarRef) == null || L.update();
    }));
  }, V = () => {
    var _, L, U, I;
    const G = r.vnode.el;
    if (!r.$ready || !G)
      return;
    let ne = !1;
    const {
      width: he,
      height: ge,
      headerHeight: se
    } = u.value, le = p.value = G.offsetWidth;
    he !== le && (ne = !0);
    const ue = G.offsetHeight;
    (e.height || g.value) && ge !== ue && (ne = !0);
    const ve = e.tableLayout === "fixed" ? r.refs.headerWrapper : (_ = r.refs.tableHeaderRef) == null ? void 0 : _.$el;
    e.showHeader && (ve == null ? void 0 : ve.offsetHeight) !== se && (ne = !0), m.value = ((L = r.refs.tableWrapper) == null ? void 0 : L.scrollHeight) || 0, v.value = (ve == null ? void 0 : ve.scrollHeight) || 0, d.value = ((U = r.refs.footerWrapper) == null ? void 0 : U.offsetHeight) || 0, y.value = ((I = r.refs.appendWrapper) == null ? void 0 : I.offsetHeight) || 0, h.value = m.value - v.value - d.value - y.value, ne && (u.value = {
      width: le,
      height: ue,
      headerHeight: e.showHeader && (ve == null ? void 0 : ve.offsetHeight) || 0
    }, k());
  }, F = Yt(), N = E(() => {
    const { bodyWidth: _, scrollY: L, gutterWidth: U } = t;
    return _.value ? `${_.value - (L.value ? U : 0)}px` : "";
  }), B = E(() => e.maxHeight ? "fixed" : e.tableLayout), W = E(() => {
    if (e.data && e.data.length)
      return null;
    let _ = "100%";
    e.height && h.value && (_ = `${h.value}px`);
    const L = p.value;
    return {
      width: L ? `${L}px` : "",
      height: _
    };
  }), q = E(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), M = E(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${v.value + d.value}px)`
  } : {
    maxHeight: `${e.maxHeight - v.value - d.value}px`
  } : {});
  return {
    isHidden: a,
    renderExpanded: o,
    setDragVisible: s,
    isGroup: c,
    handleMouseLeave: w,
    handleHeaderFooterMousewheel: C,
    tableSize: F,
    emptyBlockStyle: W,
    handleFixedMousewheel: (_, L) => {
      const U = r.refs.bodyWrapper;
      if (Math.abs(L.spinY) > 0) {
        const I = U.scrollTop;
        L.pixelY < 0 && I !== 0 && _.preventDefault(), L.pixelY > 0 && U.scrollHeight - U.clientHeight > I && _.preventDefault(), U.scrollTop += Math.ceil(L.pixelY / 5);
      } else
        U.scrollLeft += Math.ceil(L.pixelX / 5);
    },
    resizeProxyVisible: l,
    bodyWidth: N,
    resizeState: u,
    doLayout: k,
    tableBodyStyles: b,
    tableLayout: B,
    scrollbarViewStyle: f,
    tableInnerStyle: q,
    scrollbarStyle: M
  };
}
function hE(e) {
  const t = x(), n = () => {
    const a = e.vnode.el.querySelector(".hidden-columns"), o = { childList: !0, subtree: !0 }, l = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      l.forEach((s) => s());
    }), t.value.observe(a, o);
  };
  Xe(() => {
    n();
  }), Ka(() => {
    var r;
    (r = t.value) == null || r.disconnect();
  });
}
var mE = {
  data: {
    type: Array,
    default: () => []
  },
  size: $n,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
};
const gE = () => {
  const e = x(), t = (o, l) => {
    const s = e.value;
    s && s.scrollTo(o, l);
  }, n = (o, l) => {
    const s = e.value;
    s && it(l) && ["Top", "Left"].includes(o) && s[`setScroll${o}`](l);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (o) => n("Top", o),
    setScrollLeft: (o) => n("Left", o)
  };
};
let bE = 1;
const yE = ce({
  name: "ElTable",
  directives: {
    Mousewheel: jC
  },
  components: {
    TableHeader: aE,
    TableBody: uE,
    TableFooter: fE,
    ElScrollbar: Tr,
    hColgroup: es
  },
  props: mE,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change"
  ],
  setup(e) {
    const { t } = ot(), n = we("table"), r = Ke();
    vt(sn, r);
    const a = j_(r, e);
    r.store = a;
    const o = new q_({
      store: r.store,
      table: r,
      fit: e.fit,
      showHeader: e.showHeader
    });
    r.layout = o;
    const l = E(() => (a.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: u,
      toggleRowSelection: c,
      clearSelection: f,
      clearFilter: p,
      toggleAllSelection: m,
      toggleRowExpansion: h,
      clearSort: v,
      sort: d
    } = pE(a), {
      isHidden: y,
      renderExpanded: w,
      setDragVisible: C,
      isGroup: g,
      handleMouseLeave: b,
      handleHeaderFooterMousewheel: k,
      tableSize: S,
      emptyBlockStyle: $,
      handleFixedMousewheel: T,
      resizeProxyVisible: R,
      bodyWidth: z,
      resizeState: V,
      doLayout: F,
      tableBodyStyles: N,
      tableLayout: B,
      scrollbarViewStyle: W,
      tableInnerStyle: q,
      scrollbarStyle: M
    } = vE(e, o, a, r), { scrollBarRef: H, scrollTo: _, setScrollLeft: L, setScrollTop: U } = gE(), I = Rn(F, 50), G = `${n.namespace.value}-table_${bE++}`;
    r.tableId = G, r.state = {
      isGroup: g,
      resizeState: V,
      doLayout: F,
      debouncedUpdateLayout: I
    };
    const ne = E(() => e.sumText || t("el.table.sumText")), he = E(() => e.emptyText || t("el.table.emptyText"));
    return hE(r), {
      ns: n,
      layout: o,
      store: a,
      handleHeaderFooterMousewheel: k,
      handleMouseLeave: b,
      tableId: G,
      tableSize: S,
      isHidden: y,
      isEmpty: l,
      renderExpanded: w,
      resizeProxyVisible: R,
      resizeState: V,
      isGroup: g,
      bodyWidth: z,
      tableBodyStyles: N,
      emptyBlockStyle: $,
      debouncedUpdateLayout: I,
      handleFixedMousewheel: T,
      setCurrentRow: s,
      getSelectionRows: u,
      toggleRowSelection: c,
      clearSelection: f,
      clearFilter: p,
      toggleAllSelection: m,
      toggleRowExpansion: h,
      clearSort: v,
      doLayout: F,
      sort: d,
      t,
      setDragVisible: C,
      context: r,
      computedSumText: ne,
      computedEmptyText: he,
      tableLayout: B,
      scrollbarViewStyle: W,
      tableInnerStyle: q,
      scrollbarStyle: M,
      scrollBarRef: H,
      scrollTo: _,
      setScrollLeft: L,
      setScrollTop: U
    };
  }
}), wE = ["data-prefix"], CE = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function SE(e, t, n, r, a, o) {
  const l = Ve("hColgroup"), s = Ve("table-header"), u = Ve("table-body"), c = Ve("el-scrollbar"), f = Ve("table-footer"), p = fl("mousewheel");
  return O(), K("div", {
    ref: "tableWrapper",
    class: A([
      {
        [e.ns.m("fit")]: e.fit,
        [e.ns.m("striped")]: e.stripe,
        [e.ns.m("border")]: e.border || e.isGroup,
        [e.ns.m("hidden")]: e.isHidden,
        [e.ns.m("group")]: e.isGroup,
        [e.ns.m("fluid-height")]: e.maxHeight,
        [e.ns.m("scrollable-x")]: e.layout.scrollX.value,
        [e.ns.m("scrollable-y")]: e.layout.scrollY.value,
        [e.ns.m("enable-row-hover")]: !e.store.states.isComplex.value,
        [e.ns.m("enable-row-transition")]: (e.store.states.data.value || []).length !== 0 && (e.store.states.data.value || []).length < 100,
        "has-footer": e.showSummary
      },
      e.ns.m(e.tableSize),
      e.className,
      e.ns.b(),
      e.ns.m(`layout-${e.tableLayout}`)
    ]),
    style: Ge(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...m) => e.handleMouseLeave && e.handleMouseLeave(...m))
  }, [
    Q("div", {
      class: A(e.ns.e("inner-wrapper")),
      style: Ge(e.tableInnerStyle)
    }, [
      Q("div", CE, [
        $e(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? ze((O(), K("div", {
        key: 0,
        ref: "headerWrapper",
        class: A(e.ns.e("header-wrapper"))
      }, [
        Q("table", {
          ref: "tableHeader",
          class: A(e.ns.e("header")),
          style: Ge(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          J(l, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          J(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [p, e.handleHeaderFooterMousewheel]
      ]) : de("v-if", !0),
      Q("div", {
        ref: "bodyWrapper",
        class: A(e.ns.e("body-wrapper"))
      }, [
        J(c, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: re(() => [
            Q("table", {
              ref: "tableBody",
              class: A(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: Ge({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              J(l, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (O(), fe(s, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : de("v-if", !0),
              J(u, {
                context: e.context,
                highlight: e.highlightCurrentRow,
                "row-class-name": e.rowClassName,
                "tooltip-effect": e.tooltipEffect,
                "tooltip-options": e.tooltipOptions,
                "row-style": e.rowStyle,
                store: e.store,
                stripe: e.stripe
              }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"])
            ], 6),
            e.isEmpty ? (O(), K("div", {
              key: 0,
              ref: "emptyBlock",
              style: Ge(e.emptyBlockStyle),
              class: A(e.ns.e("empty-block"))
            }, [
              Q("span", {
                class: A(e.ns.e("empty-text"))
              }, [
                $e(e.$slots, "empty", {}, () => [
                  pt(ye(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : de("v-if", !0),
            e.$slots.append ? (O(), K("div", {
              key: 1,
              ref: "appendWrapper",
              class: A(e.ns.e("append-wrapper"))
            }, [
              $e(e.$slots, "append")
            ], 2)) : de("v-if", !0)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? ze((O(), K("div", {
        key: 1,
        ref: "footerWrapper",
        class: A(e.ns.e("footer-wrapper"))
      }, [
        J(f, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: Ge(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [wt, !e.isEmpty],
        [p, e.handleHeaderFooterMousewheel]
      ]) : de("v-if", !0),
      e.border || e.isGroup ? (O(), K("div", {
        key: 2,
        class: A(e.ns.e("border-left-patch"))
      }, null, 2)) : de("v-if", !0)
    ], 6),
    ze(Q("div", {
      ref: "resizeProxy",
      class: A(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [wt, e.resizeProxyVisible]
    ])
  ], 46, wE);
}
var kE = /* @__PURE__ */ Ae(yE, [["render", SE], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const $E = {
  selection: "table-column--selection",
  expand: "table__expand-column"
}, _E = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
}, EE = (e) => $E[e] || "", TE = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return Re(Zn, {
        disabled: t(),
        size: e.states.tableSize.value,
        indeterminate: e.states.selection.value.length > 0 && !e.states.isAllSelected.value,
        "onUpdate:modelValue": e.toggleAllSelection,
        modelValue: e.states.isAllSelected.value
      });
    },
    renderCell({
      row: e,
      column: t,
      store: n,
      $index: r
    }) {
      return Re(Zn, {
        disabled: t.selectable ? !t.selectable.call(null, e, r) : !1,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (a) => a.stopPropagation(),
        modelValue: n.isSelected(e)
      });
    },
    sortable: !1,
    resizable: !1
  },
  index: {
    renderHeader({ column: e }) {
      return e.label || "#";
    },
    renderCell({
      column: e,
      $index: t
    }) {
      let n = t + 1;
      const r = e.index;
      return typeof r == "number" ? n = t + r : typeof r == "function" && (n = r(t)), Re("div", {}, [n]);
    },
    sortable: !1
  },
  expand: {
    renderHeader({ column: e }) {
      return e.label || "";
    },
    renderCell({
      row: e,
      store: t,
      expanded: n
    }) {
      const { ns: r } = t, a = [r.e("expand-icon")];
      return n && a.push(r.em("expand-icon", "expanded")), Re("div", {
        class: a,
        onClick: function(l) {
          l.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          Re(Ie, null, {
            default: () => [Re(An)]
          })
        ]
      });
    },
    sortable: !1,
    resizable: !1
  }
};
function OE({
  row: e,
  column: t,
  $index: n
}) {
  var r;
  const a = t.property, o = a && _a(e, a).value;
  return t && t.formatter ? t.formatter(e, t, o, n) : ((r = o == null ? void 0 : o.toString) == null ? void 0 : r.call(o)) || "";
}
function PE({
  row: e,
  treeNode: t,
  store: n
}, r = !1) {
  const { ns: a } = n;
  if (!t)
    return r ? [
      Re("span", {
        class: a.e("placeholder")
      })
    ] : null;
  const o = [], l = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && o.push(Re("span", {
    class: a.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      a.e("expand-icon"),
      t.expanded ? a.em("expand-icon", "expanded") : ""
    ];
    let u = An;
    t.loading && (u = oa), o.push(Re("div", {
      class: s,
      onClick: l
    }, {
      default: () => [
        Re(Ie, { class: { [a.is("loading")]: t.loading } }, {
          default: () => [Re(u)]
        })
      ]
    }));
  } else
    o.push(Re("span", {
      class: a.e("placeholder")
    }));
  return o;
}
function qi(e, t) {
  return e.reduce((n, r) => (n[r] = r, n), t);
}
function xE(e, t) {
  const n = Ke();
  return {
    registerComplexWatchers: () => {
      const o = ["fixed"], l = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = qi(o, l);
      Object.keys(s).forEach((u) => {
        const c = l[u];
        qn(t, c) && me(() => t[c], (f) => {
          let p = f;
          c === "width" && u === "realWidth" && (p = Zl(f)), c === "minWidth" && u === "realMinWidth" && (p = yd(f)), n.columnConfig.value[c] = p, n.columnConfig.value[u] = p;
          const m = c === "fixed";
          e.value.store.scheduleLayout(m);
        });
      });
    },
    registerNormalWatchers: () => {
      const o = [
        "label",
        "filters",
        "filterMultiple",
        "sortable",
        "index",
        "formatter",
        "className",
        "labelClassName",
        "showOverflowTooltip"
      ], l = {
        property: "prop",
        align: "realAlign",
        headerAlign: "realHeaderAlign"
      }, s = qi(o, l);
      Object.keys(s).forEach((u) => {
        const c = l[u];
        qn(t, c) && me(() => t[c], (f) => {
          n.columnConfig.value[u] = f;
        });
      });
    }
  };
}
function ME(e, t, n) {
  const r = Ke(), a = x(""), o = x(!1), l = x(), s = x(), u = we("table");
  jn(() => {
    l.value = e.align ? `is-${e.align}` : null, l.value;
  }), jn(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : l.value, s.value;
  });
  const c = E(() => {
    let b = r.vnode.vParent || r.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), f = E(() => {
    const { store: b } = r.parent;
    if (!b)
      return !1;
    const { treeData: k } = b.states, S = k.value;
    return S && Object.keys(S).length > 0;
  }), p = x(Zl(e.width)), m = x(yd(e.minWidth)), h = (b) => (p.value && (b.width = p.value), m.value && (b.minWidth = m.value), !p.value && m.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), v = (b) => {
    const k = b.type, S = TE[k] || {};
    Object.keys(S).forEach((T) => {
      const R = S[T];
      T !== "className" && R !== void 0 && (b[T] = R);
    });
    const $ = EE(k);
    if ($) {
      const T = `${i(u.namespace)}-${$}`;
      b.className = b.className ? `${b.className} ${T}` : T;
    }
    return b;
  }, d = (b) => {
    Array.isArray(b) ? b.forEach((S) => k(S)) : k(b);
    function k(S) {
      var $;
      (($ = S == null ? void 0 : S.type) == null ? void 0 : $.name) === "ElTableColumn" && (S.vParent = r);
    }
  };
  return {
    columnId: a,
    realAlign: l,
    isSubColumn: o,
    realHeaderAlign: s,
    columnOrTableParent: c,
    setColumnWidth: h,
    setColumnForcedProps: v,
    setColumnRenders: (b) => {
      e.renderHeader ? nt("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (S) => {
        r.columnConfig.value.label;
        const $ = t.header;
        return $ ? $(S) : b.label;
      });
      let k = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (S) => Re("div", {
        class: "cell"
      }, [k(S)]), n.value.renderExpanded = (S) => t.default ? t.default(S) : t.default) : (k = k || OE, b.renderCell = (S) => {
        let $ = null;
        if (t.default) {
          const N = t.default(S);
          $ = N.some((B) => B.type !== Ji) ? N : k(S);
        } else
          $ = k(S);
        const { columns: T } = n.value.store.states, R = T.value.findIndex((N) => N.type === "default"), z = f.value && S.cellIndex === R, V = PE(S, z), F = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (F.class = `${F.class} ${i(u.namespace)}-tooltip`, F.style = {
          width: `${(S.column.realWidth || Number(S.column.width)) - 1}px`
        }), d($), Re("div", F, [V, $]);
      }), b;
    },
    getPropsData: (...b) => b.reduce((k, S) => (Array.isArray(S) && S.forEach(($) => {
      k[$] = e[$];
    }), k), {}),
    getColumnElIndex: (b, k) => Array.prototype.indexOf.call(b, k),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", r.columnConfig.value);
    }
  };
}
var AE = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
let NE = 1;
var Ed = ce({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Zn
  },
  props: AE,
  setup(e, { slots: t }) {
    const n = Ke(), r = x({}), a = E(() => {
      let g = n.parent;
      for (; g && !g.tableId; )
        g = g.parent;
      return g;
    }), { registerNormalWatchers: o, registerComplexWatchers: l } = xE(a, e), {
      columnId: s,
      isSubColumn: u,
      realHeaderAlign: c,
      columnOrTableParent: f,
      setColumnWidth: p,
      setColumnForcedProps: m,
      setColumnRenders: h,
      getPropsData: v,
      getColumnElIndex: d,
      realAlign: y,
      updateColumnOrder: w
    } = ME(e, t, a), C = f.value;
    s.value = `${C.tableId || C.columnId}_column_${NE++}`, cl(() => {
      u.value = a.value !== C;
      const g = e.type || "default", b = e.sortable === "" ? !0 : e.sortable, k = Un(e.showOverflowTooltip) ? C.props.showOverflowTooltip : e.showOverflowTooltip, S = {
        ..._E[g],
        id: s.value,
        type: g,
        property: e.prop || e.property,
        align: y,
        headerAlign: c,
        showOverflowTooltip: k,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: !1,
        isSubColumn: !1,
        filterOpened: !1,
        sortable: b,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let V = v([
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ], ["sortMethod", "sortBy", "sortOrders"], ["selectable", "reserveSelection"], [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement"
      ]);
      V = N_(S, V), V = I_(h, p, m)(V), r.value = V, o(), l();
    }), Xe(() => {
      var g;
      const b = f.value, k = u.value ? b.vnode.el.children : (g = b.refs.hiddenColumns) == null ? void 0 : g.children, S = () => d(k || [], n.vnode.el);
      r.value.getColumnIndex = S, S() > -1 && a.value.store.commit("insertColumn", r.value, u.value ? b.columnConfig.value : null, w);
    }), zt(() => {
      a.value.store.commit("removeColumn", r.value, u.value ? C.columnConfig.value : null, w);
    }), n.columnId = s.value, n.columnConfig = r;
  },
  render() {
    var e, t, n;
    try {
      const r = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), a = [];
      if (Array.isArray(r))
        for (const l of r)
          ((n = l.type) == null ? void 0 : n.name) === "ElTableColumn" || l.shapeFlag & 2 ? a.push(l) : l.type === Ne && Array.isArray(l.children) && l.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !kt(s == null ? void 0 : s.children) && a.push(s);
          });
      return Re("div", a);
    } catch {
      return Re("div", []);
    }
  }
});
const RE = Vt(kE, {
  TableColumn: Ed
}), Td = kn(Ed);
const IE = {
  //格式化数据
  formatType: {
    type: String,
    default: ""
  },
  //插槽
  slotName: {
    type: String,
    default: ""
  },
  //表格每一列的头部插槽
  header: {
    type: Boolean,
    default: !1
  },
  dictData: {
    type: [Object, Array],
    default: []
  },
  filter: {
    type: [String, Object],
    default: "input"
  },
  hide: {
    type: Boolean,
    default: !1
  },
  buttons: {
    type: Array,
    default: []
  }
}, DE = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: {
    type: String,
    default: ""
  },
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: !1
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: !0
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: !0
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every(
      (t) => ["ascending", "descending", null].includes(t)
    )
  },
  ...IE
}, Yi = (e, t = "Y/M/D h:m:s") => {
  const n = (l) => (l = l.toString(), l[1] ? l : `0${l}`), r = ["Y", "M", "D", "h", "m", "s"], a = [], o = new Date(Number(e));
  a.push(o.getFullYear()), a.push(n(o.getMonth() + 1)), a.push(n(o.getDate())), a.push(n(o.getHours())), a.push(n(o.getMinutes())), a.push(n(o.getSeconds()));
  for (const l in a)
    t = t.replace(r[l], a[l]);
  return /NaN/.test(t) && (t = "--"), t;
}, LE = (e) => {
  if (!e)
    return "0";
  const t = /\d{1,3}(?=(\d{3})+(\.|$))/g;
  e = String(Math.round(+e * Math.pow(10, 2)));
  let n = e.substr(0, e.length - 2).replace(t, "$&,"), r = e.substr(e.length - 2);
  return `${n || 0}.${r}`;
}, FE = (e) => {
  const t = 9999999999999e-2, n = "零", r = "壹", a = "贰", o = "叁", l = "肆", s = "伍", u = "陆", c = "柒", f = "捌", p = "玖", m = "拾", h = "佰", v = "仟", d = "万", y = "亿", w = "", C = "元", g = "角", b = "分", k = "整";
  let S, $, T, R = "", z, V, F, N, B, W, q;
  const M = ["", m, h, v], H = ["", d, y], _ = [g, b], L = [
    n,
    r,
    a,
    o,
    l,
    s,
    u,
    c,
    f,
    p
  ];
  if (e = e.toString(), e === "" || e.match(/[^,.\d]/) !== null || e.match(
    /^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/
  ) == null || (e = e.replace(/,/g, ""), e = e.replace(/^0+/, ""), +e > t))
    return "";
  if (R = e.split("."), R.length > 1 ? (S = R[0], $ = R[1], $ = $.substr(0, 2)) : (S = R[0], $ = ""), T = "", +S > 0) {
    for (z = 0, V = 0; V < S.length; V += 1)
      F = S.length - V - 1, N = S.substr(V, 1), W = F / 4, q = F % 4, +N == 0 ? z += 1 : (z > 0 && (T += L[0]), z = 0, T += L[Number(N)] + M[q]), q === 0 && z < 4 && (T += H[W]);
    T += C;
  }
  if ($ !== "")
    for (V = 0; V < $.length; V += 1)
      N = $.substr(V, 1), B = $.substr(-1, 1), +N == 0 ? +B == 0 ? T += "" : T += L[Number(N)] : T += L[Number(N)] + _[V];
  return T === "" && (T = n + C), $ === "" && (T += k), T = w + T, T;
}, Ui = (e, t) => {
  let n = "";
  return t.thousands && (n = LE(e)), t.number && (n = (+e).toFixed(2)), t.chinaPrice && (n = e && FE(e)), n;
}, BE = /* @__PURE__ */ ce({
  props: ["data", "column"],
  setup(e) {
    const t = e.data, n = e.column, r = (a, o) => {
      const {
        formatType: l,
        prop: s,
        dictData: u,
        buttons: c
      } = o;
      let f = a[s] || "--";
      if (l)
        switch (l) {
          case "price":
            f = Ui(a[s], {
              thousands: !0
            });
            break;
          case "priceChinese":
            f = Ui(a[s], {
              chinaPrice: !0
            });
            break;
          case "date":
            f = Yi(a[s], "Y-M-D");
            break;
          case "dateTime":
            f = Yi(a[s]);
        }
      if (u.length) {
        const p = u.find((m) => m.value == a[s]);
        f = p && p.label;
      }
      return c.length && (f = c.map((p) => J(gn, Pt(p, {
        onClick: (m) => {
          m.stopPropagation(), p.click && p.click(a);
        }
      }), {
        default: () => [p.content]
      }))), f;
    };
    return () => J(Ne, null, [r(t, n)]);
  }
}), zE = /* @__PURE__ */ ce({
  __name: "TableColumn",
  props: DE,
  setup(e) {
    const t = e;
    return (n, r) => {
      const a = Td;
      return O(), fe(a, Nr(La(t)), pl({
        default: re((o) => [
          t.slotName ? $e(n.$slots, "default", Nr(Pt({ key: 0 }, o))) : de("", !0),
          !t.slotName && t.type === "default" && !t.formatter ? (O(), fe(i(BE), {
            key: 1,
            data: o == null ? void 0 : o.row,
            column: t
          }, null, 8, ["data", "column"])) : de("", !0)
        ]),
        _: 2
      }, [
        t.header ? {
          name: "header",
          fn: re((o) => [
            $e(n.$slots, "header", Nr(La(o)))
          ]),
          key: "0"
        } : void 0
      ]), 1040);
    };
  }
});
const VE = "100px", HE = "1800px", WE = {
  minwidth: VE,
  maxwidth: HE
}, jE = /* @__PURE__ */ ce({
  props: ["filter", "searchSize", "labelPosition", "searchData"],
  emits: ["getParams", "resetFn"],
  setup(e, {
    emit: t,
    expose: n,
    slots: r
  }) {
    const a = Ut({}), {
      filter: o,
      searchSize: l,
      labelPosition: s
    } = e, u = x(), c = x(!1), f = x("展开"), p = (g, b) => {
      g > +WE.maxwidth.replace(/[^\d]/gi, "") ? c.value = b > 4 : c.value = b > 3;
    };
    Xe(() => {
      var b;
      u.value = document.body.clientWidth;
      const g = ((b = r == null ? void 0 : r.search()[0].children) == null ? void 0 : b.length) || 0;
      p(u.value, m.value.length + g), window.onresize = () => (() => {
        u.value = document.body.clientWidth, p(u.value, m.value.length + g);
      })();
    });
    const m = x([]);
    jn(() => {
      m.value = o.map((g) => (typeof g.value == "string" && (a[g.prop] = g.value), typeof g.filter == "string" ? {
        prop: g.prop,
        label: g.label,
        placeholder: g.label,
        type: g.filter
      } : {
        prop: g.filter.prop || g.prop,
        label: g.filter.label || g.label,
        placeholder: g.filter.placeholder || g.label,
        type: g.filter.type,
        options: g.filter.options,
        showAllLevels: g.filter.showAllLevels
      }));
    });
    const h = x({}), v = () => {
      Object.keys(a).forEach((g) => {
        /,/.test(g) ? g.split(",").forEach((b, k) => {
          h.value[b] = a[g] ? a[g][k] : null;
        }) : h.value[g] = a[g] || null;
      }), e.searchData && (h.value = Object.assign(h.value, i(e.searchData))), t("getParams", {
        ...h.value
      });
    }, d = x(), y = x(), w = () => {
      Object.keys(a).forEach((g) => {
        a[g] = "";
      }), Object.keys(h.value).forEach((g) => {
        h.value[g] = "";
      }), y.value.resetFields(), t("resetFn");
    }, C = () => {
      f.value = f.value === "展开" ? "收起" : "展开";
    };
    return n({
      formData: a,
      newFormData: h,
      searchForm: d,
      searchFormRef: y,
      isShow: c,
      showName: f,
      changeName: C,
      slots: r
    }), () => J(Ne, null, [J("div", {
      class: "chris-table-search"
    }, [J(_w, {
      model: a,
      ref: y,
      "label-position": s,
      class: [{
        active: f.value === "展开",
        "chris-table-search-form": !0
      }]
    }, {
      default: () => [Array.isArray(m.value) && m.value.map((g) => {
        let b = null;
        switch (g.type) {
          case "input":
            b = J(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [J(Ft, {
                class: "item-content",
                clearable: !0,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                size: l,
                placeholder: `请输入${g.placeholder}`
              }, null)]
            });
            break;
          case "select":
            b = J(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [J(md, {
                class: "item-content select",
                clearable: !0,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                placeholder: `请选择${g.placeholder}`,
                size: l
              }, {
                default: () => [Array.isArray(i(g.options)) && i(g.options).map((k, S) => J(gd, {
                  key: S,
                  label: k.label,
                  value: k.value
                }, null))]
              })]
            });
            break;
          case "cascader":
            b = J(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [J(ck, {
                class: "item-content",
                clearable: !0,
                options: g.options,
                "show-all-levels": g.showAllLevels,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                props: g.props,
                placeholder: `请选择${g.placeholder}`,
                size: l
              }, null)]
            });
            break;
          case "date":
            b = J(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [J(ka, {
                class: "item-content",
                clearable: !0,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                props: g.props,
                placeholder: `请选择${g.placeholder}`,
                size: l,
                "value-format": "YYYY-MM-DD"
              }, null)]
            });
            break;
          case "dateTime":
            b = J(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [J(ka, {
                class: "item-content",
                clearable: !0,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                props: g.props,
                placeholder: `请选择${g.placeholder}`,
                size: l,
                type: "datetime",
                "value-format": "YYYY-MM-DD HH:mm:ss"
              }, null)]
            });
            break;
          case "dateRange":
            b = J(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [J(ka, {
                class: "item-content",
                clearable: !0,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                props: g.props,
                "start-placeholder": `${Array.isArray(g.placeholder) ? g.placeholder[0] : "起始日期"}`,
                "end-placeholder": `${Array.isArray(g.placeholder) ? g.placeholder[1] : "结束日期"}`,
                size: l,
                type: "daterange",
                "value-format": "YYYY-MM-DD"
              }, null)]
            });
            break;
          case "dateTimeRange":
            b = J(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [J(ka, {
                class: "item-content",
                clearable: !0,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                props: g.props,
                "start-placeholder": `${Array.isArray(g.placeholder) ? g.placeholder[0] : "起始日期"}`,
                "end-placeholder": `${Array.isArray(g.placeholder) ? g.placeholder[1] : "结束日期"}`,
                size: l,
                type: "datetimerange",
                "value-format": "YYYY-MM-DD HH:mm:ss"
              }, null)]
            });
            break;
          case "inputrange":
            b = J(Tn, {
              label: `${g.label}:`,
              class: "el-form-item-min"
            }, {
              default: () => [J(Ft, {
                class: "item-content",
                clearable: !0,
                size: l,
                modelValue: a[g.prop[0]],
                "onUpdate:modelValue": (k) => a[g.prop[0]] = k,
                placeholder: `${Array.isArray(g.placeholder) ? g.placeholder[0] : "最小值"}`
              }, null), J("span", null, [pt("-")]), J(Ft, {
                class: "item-content",
                clearable: !0,
                size: l,
                modelValue: a[g.prop[1]],
                "onUpdate:modelValue": (k) => a[g.prop[1]] = k,
                placeholder: `${Array.isArray(g.placeholder) ? g.placeholder[1] : "最大值"}`
              }, null)]
            });
            break;
        }
        return b;
      }), r == null ? void 0 : r.search()]
    }), m.value.length ? J("div", {
      class: "chris-table-search-btns"
    }, [J(gn, {
      type: "primary",
      onClick: v
    }, {
      default: () => [pt("查询")]
    }), J(gn, {
      onClick: w
    }, {
      default: () => [pt("重置")]
    }), c.value && J(gn, {
      type: "success",
      onClick: C
    }, {
      default: () => [f.value]
    })]) : ""])]);
  }
}), KE = /* @__PURE__ */ ce({
  name: "pagination",
  inheritAttrs: !0,
  emits: ["getPage"],
  props: ["total", "layout", "pageSizes"],
  setup(e, {
    emit: t
  }) {
    x(0);
    const n = x(1), r = x(10);
    return {
      handleCurrentChange: (l) => {
        n.value = l, t("getPage", {
          pageSize: r,
          currentPage: n
        });
      },
      handleSizeChange: (l) => {
        n.value = 1, r.value = l, t("getPage", {
          pageSize: r,
          currentPage: n
        });
      },
      pageSize: r,
      currentPage: n,
      props: e
    };
  },
  render() {
    return J("div", {
      class: "paginaton"
    }, [J(E_, {
      "onUpdate:current-page": this.handleCurrentChange,
      "onUpdate:page-size": this.handleSizeChange,
      currentPage: this.currentPage,
      pageSizes: this.props.pageSizes,
      pageSize: this.pageSize,
      layout: this.props.layout,
      total: this.total
    }, null)]);
  }
}), qE = { class: "chris-buttons" }, YE = /* @__PURE__ */ ce({
  __name: "Buttons",
  props: { buttons: Array },
  setup(e) {
    const n = e.buttons;
    return (r, a) => (O(), K("div", qE, [
      (O(!0), K(Ne, null, Ye(i(n), (o, l) => (O(), fe(i(gn), Pt({ type: "primary" }, o, { key: l }), {
        default: re(() => [
          pt(ye(o.content), 1)
        ]),
        _: 2
      }, 1040))), 128))
    ]));
  }
});
const Od = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, UE = /* @__PURE__ */ Od(YE, [["__scopeId", "data-v-39458ff7"]]), GE = {
  request: Function,
  parseData: Function,
  path: String,
  toTalPath: String,
  pageNum: String,
  pageSize: String,
  searchSize: {
    type: String,
    default: ""
  },
  labelPosition: {
    type: String,
    default: "right"
  },
  index: {
    type: [Boolean, Object],
    default: {
      label: "序号",
      width: 55,
      hide: !1
    }
  },
  buttons: Array,
  pagination: {
    type: Boolean,
    default: !0
  },
  searchData: Object,
  layout: {
    type: String,
    default: "total, sizes, prev, pager, next, jumper"
  },
  pageSizes: {
    type: Array,
    default: [5, 10, 20, 30]
  }
}, XE = {
  data: {
    type: Array,
    default: () => []
  },
  ref: String,
  columns: Array,
  size: String,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: !0
  },
  stripe: Boolean,
  border: {
    type: Boolean,
    default: !0
  },
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: !0
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: !0
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => ({
      hasChildren: "hasChildren",
      children: "children"
    })
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: !1
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object],
  ...GE
}, Gi = {
  select: (e, t) => !0,
  selectAll: (e) => !0,
  selectionChange: (e) => !0,
  cellMouseEnter: (e, t, n, r) => !0,
  cellMouseLeave: (e, t, n, r) => !0,
  cellContextmenu: (e, t, n, r) => !0,
  cellClick: (e, t, n, r) => !0,
  cellDblclick: (e, t, n, r) => !0,
  rowClick: (e, t, n) => !0,
  rowContextmenu: (e, t, n) => !0,
  rowDblclick: (e, t, n) => !0,
  headerClick: (e, t) => !0,
  headerContextmenu: (e, t) => !0,
  sortChange: (e) => !0,
  filterChange: (e) => !0,
  currentChange: (e, t) => !0,
  headerDragend: (e, t, n, r) => !0,
  expandChange: (e, t) => !0,
  query: (e) => !0
}, Xi = (e, t) => (t.split(".").forEach((r) => {
  e = e[r];
}), e), ZE = {
  name: "TableList"
}, JE = /* @__PURE__ */ ce({
  ...ZE,
  props: XE,
  emits: { ...Gi, resetFn: () => {
  } },
  setup(e, { expose: t, emit: n }) {
    var T;
    const r = e, { columns: a } = wn(r), o = x();
    o.value = (T = a == null ? void 0 : a.value) == null ? void 0 : T.filter((R) => !R.hide);
    const l = x(), s = E(() => {
      const R = {};
      for (const z of Object.keys(Gi))
        R[z] = (...V) => {
          n(z, ...V);
        };
      return R;
    }), { usePageNum: u, usePageSize: c } = {
      usePageNum: r.pageNum || "pageNum",
      usePageSize: r.pageSize || "pageSize"
    }, f = x(1), p = x(10), m = x(), h = x(0);
    let v = r.path || "data.rows", d = r.toTalPath || "data.total";
    m.value = r.data;
    const y = async (R) => {
      const z = {
        ...R,
        [u]: f.value,
        [c]: p.value
      }, V = await r.request(z);
      m.value = Xi(V, v), h.value = Xi(V, d), r.parseData && (m.value = r.parseData(m.value));
    }, w = x([]);
    a.value.filter((R) => !R.hide).forEach((R) => {
      typeof R.filter == "string" ? w.value.push(i(R)) : typeof R.filter == "object" && !R.filter.hide && w.value.push(i(R));
    });
    const C = x(), g = (R) => {
      C.value.currentPage = 1, f.value = 1, y(R);
    }, b = async (R) => {
      f.value = R.currentPage.value, p.value = R.pageSize.value, y({ ...l.value.newFormData });
    }, k = (R) => R + 1 + (f.value - 1) * p.value;
    Xe(() => {
      r.request && y(l.value.formData);
    });
    const S = x(), $ = () => {
      n("resetFn");
    };
    return t({
      tableRef: S,
      refresh: g,
      params: l
    }), (R, z) => {
      const V = Td;
      return O(), K(Ne, null, [
        $e(R.$slots, "topheader", {}, void 0, !0),
        J(i(jE), {
          ref_key: "searchRef",
          ref: l,
          filter: w.value,
          searchSize: r.searchSize,
          labelPosition: r.labelPosition,
          searchData: r.searchData,
          onGetParams: g,
          onResetFn: $
        }, {
          search: re(() => [
            $e(R.$slots, "search", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["filter", "searchSize", "labelPosition", "searchData"]),
        $e(R.$slots, "centerheader", {}, void 0, !0),
        J(UE, {
          buttons: r.buttons
        }, null, 8, ["buttons"]),
        J(i(RE), Pt(r, {
          data: m.value,
          style: { width: "100%" }
        }, zd(s.value), {
          ref_key: "tableRef",
          ref: S,
          class: "chris-table"
        }), {
          empty: re(() => [
            $e(R.$slots, "empty", {}, void 0, !0)
          ]),
          append: re(() => [
            $e(R.$slots, "append", {}, void 0, !0)
          ]),
          default: re(() => [
            (typeof r.index == "boolean" ? r.index : !r.index.hide) ? (O(), fe(V, {
              key: 0,
              type: "index",
              index: k,
              label: typeof r.index == "object" && r.index.label,
              width: typeof r.index == "object" && r.index.width
            }, null, 8, ["label", "width"])) : de("", !0),
            (O(!0), K(Ne, null, Ye(o.value, (F, N) => (O(), fe(zE, Pt({ key: N }, F), pl({ _: 2 }, [
              F.header ? {
                name: "header",
                fn: re((B) => [
                  $e(R.$slots, "header", Nr(La(B)), void 0, !0)
                ]),
                key: "0"
              } : void 0,
              F.slotName ? {
                name: "default",
                fn: re((B) => [
                  $e(R.$slots, F.slotName, Nr(La(B)), void 0, !0)
                ]),
                key: "1"
              } : void 0
            ]), 1040))), 128))
          ]),
          _: 3
        }, 16, ["data"]),
        ze(J(i(KE), {
          total: h.value,
          onGetPage: b,
          currentPage: f.value,
          pageSize: p.value,
          pageSizes: r.pageSizes,
          ref_key: "pagination",
          ref: C,
          layout: r.layout
        }, null, 8, ["total", "currentPage", "pageSize", "pageSizes", "layout"]), [
          [wt, h.value > 0 && r.pagination]
        ]),
        $e(R.$slots, "footer", {}, void 0, !0)
      ], 64);
    };
  }
});
const QE = /* @__PURE__ */ Od(JE, [["__scopeId", "data-v-844c73f1"]]), rT = (e) => e, eT = [QE], aT = {
  install(e) {
    eT.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  QE as TableList,
  aT as default,
  rT as useTable
};
