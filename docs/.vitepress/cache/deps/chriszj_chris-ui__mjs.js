import {
  Comment,
  Fragment,
  Teleport,
  Text,
  Transition,
  TransitionGroup,
  cloneVNode,
  computed2 as computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  init_vue_runtime_esm_bundler,
  inject,
  isRef,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onScopeDispose,
  onUnmounted,
  onUpdated,
  openBlock,
  provide,
  reactive,
  readonly,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDirective,
  resolveDynamicComponent,
  shallowRef,
  toDisplayString,
  toHandlers,
  toRaw,
  toRef,
  toRefs,
  triggerRef,
  unref,
  useAttrs,
  useSlots,
  vModelCheckbox,
  vModelRadio,
  vModelText,
  vShow,
  warn,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-WLQVLJR5.js";
import "./chunk-ROME4SDB.js";

// node_modules/.pnpm/chriszj@1.0.5/node_modules/chriszj/chris-ui.mjs
init_vue_runtime_esm_bundler();
var tu = (e) => !e.getAttribute("aria-owns");
var nu = (e, t, n) => {
  const { parentNode: r } = e;
  if (!r)
    return null;
  const a = r.querySelectorAll(n), o = Array.prototype.indexOf.call(a, e);
  return a[o + t] || null;
};
var $a = (e) => {
  e && (e.focus(), !tu(e) && e.click());
};
var pn = (e, t, { checkForDefaultPrevented: n = true } = {}) => (a) => {
  const o = e == null ? void 0 : e(a);
  if (n === false || !o)
    return t == null ? void 0 : t(a);
};
var ts;
var at = typeof window < "u";
var Vd = (e) => typeof e == "string";
var Fa = () => {
};
var ru = at && ((ts = window == null ? void 0 : window.navigator) == null ? void 0 : ts.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function dr(e) {
  return typeof e == "function" ? e() : unref(e);
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
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function Kd(e, t = 200, n = {}) {
  return Hd(Wd(t, n), e);
}
function qd(e, t = 200, n = {}) {
  const r = ref(e.value), a = Kd(() => {
    r.value = e.value;
  }, t, n);
  return watch(e, () => a()), r;
}
function Yd(e, t = true) {
  getCurrentInstance() ? onMounted(e) : t ? e() : nextTick(e);
}
function vn(e) {
  var t;
  const n = dr(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
var qa = at ? window : void 0;
function hn(...e) {
  let t, n, r, a;
  if (Vd(e[0]) || Array.isArray(e[0]) ? ([n, r, a] = e, t = qa) : [t, n, r, a] = e, !t)
    return Fa;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const o = [], l = () => {
    o.forEach((f) => f()), o.length = 0;
  }, s = (f, p, m, h3) => (f.addEventListener(p, m, h3), () => f.removeEventListener(p, m, h3)), u = watch(() => [vn(t), dr(a)], ([f, p]) => {
    l(), f && o.push(...n.flatMap((m) => r.map((h3) => s(f, m, h3, p))));
  }, { immediate: true, flush: "post" }), c = () => {
    u(), l();
  };
  return vl(c), c;
}
var ns = false;
function au(e, t, n = {}) {
  const { window: r = qa, ignore: a = [], capture: o = true, detectIframe: l = false } = n;
  if (!r)
    return;
  ru && !ns && (ns = true, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", Fa)));
  let s = true;
  const u = (m) => a.some((h3) => {
    if (typeof h3 == "string")
      return Array.from(r.document.querySelectorAll(h3)).some((v) => v === m.target || m.composedPath().includes(v));
    {
      const v = vn(h3);
      return v && (m.target === v || m.composedPath().includes(v));
    }
  }), f = [
    hn(r, "click", (m) => {
      const h3 = vn(e);
      if (!(!h3 || h3 === m.target || m.composedPath().includes(h3))) {
        if (m.detail === 0 && (s = !u(m)), !s) {
          s = true;
          return;
        }
        t(m);
      }
    }, { passive: true, capture: o }),
    hn(r, "pointerdown", (m) => {
      const h3 = vn(e);
      h3 && (s = !m.composedPath().includes(h3) && !u(m));
    }, { passive: true }),
    l && hn(r, "blur", (m) => {
      var h3;
      const v = vn(e);
      ((h3 = r.document.activeElement) == null ? void 0 : h3.tagName) === "IFRAME" && !(v != null && v.contains(r.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function Ud(e, t = false) {
  const n = ref(), r = () => n.value = !!e();
  return r(), Yd(r, t), n;
}
var rs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var as = "__vueuse_ssr_handlers__";
rs[as] = rs[as] || {};
function Gd(e, t, { window: n = qa, initialValue: r = "" } = {}) {
  const a = ref(r), o = computed(() => {
    var l;
    return vn(t) || ((l = n == null ? void 0 : n.document) == null ? void 0 : l.documentElement);
  });
  return watch([o, () => dr(e)], ([l, s]) => {
    var u;
    if (l && n) {
      const c = (u = n.getComputedStyle(l).getPropertyValue(s)) == null ? void 0 : u.trim();
      a.value = c || r;
    }
  }, { immediate: true }), watch(a, (l) => {
    var s;
    (s = o.value) != null && s.style && o.value.style.setProperty(dr(e), l);
  }), a;
}
var os = Object.getOwnPropertySymbols;
var Xd = Object.prototype.hasOwnProperty;
var Zd = Object.prototype.propertyIsEnumerable;
var Jd = (e, t) => {
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
  }, c = watch(() => vn(e), (p) => {
    u(), s.value && a && p && (l = new ResizeObserver(t), l.observe(p, o));
  }, { immediate: true, flush: "post" }), f = () => {
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
var Qd = Object.defineProperty;
var ss = Object.getOwnPropertySymbols;
var ef = Object.prototype.hasOwnProperty;
var tf = Object.prototype.propertyIsEnumerable;
var is = (e, t, n) => t in e ? Qd(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var nf = (e, t) => {
  for (var n in t || (t = {}))
    ef.call(t, n) && is(e, n, t[n]);
  if (ss)
    for (var n of ss(t))
      tf.call(t, n) && is(e, n, t[n]);
  return e;
};
var rf = {
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
var af = () => at && /firefox/i.test(window.navigator.userAgent);
Object.freeze({});
Object.freeze([]);
var fr = () => {
};
var of = Object.prototype.hasOwnProperty;
var qn = (e, t) => of.call(e, t);
var tt = Array.isArray;
var us = (e) => ou(e) === "[object Date]";
var dt = (e) => typeof e == "function";
var kt = (e) => typeof e == "string";
var zt = (e) => e !== null && typeof e == "object";
var lf = (e) => zt(e) && dt(e.then) && dt(e.catch);
var sf = Object.prototype.toString;
var ou = (e) => sf.call(e);
var fo = (e) => ou(e).slice(8, -1);
var lu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
};
var uf = /-(\w)/g;
var cf = lu((e) => e.replace(uf, (t, n) => n ? n.toUpperCase() : ""));
var df = lu(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
);
var ff = typeof global == "object" && global && global.Object === Object && global;
var su = ff;
var pf = typeof self == "object" && self && self.Object === Object && self;
var vf = su || pf || Function("return this")();
var Qt = vf;
var hf = Qt.Symbol;
var Kt = hf;
var iu = Object.prototype;
var mf = iu.hasOwnProperty;
var gf = iu.toString;
var xr = Kt ? Kt.toStringTag : void 0;
function bf(e) {
  var t = mf.call(e, xr), n = e[xr];
  try {
    e[xr] = void 0;
    var r = true;
  } catch {
  }
  var a = gf.call(e);
  return r && (t ? e[xr] = n : delete e[xr]), a;
}
var yf = Object.prototype;
var wf = yf.toString;
function Cf(e) {
  return wf.call(e);
}
var Sf = "[object Null]";
var kf = "[object Undefined]";
var cs = Kt ? Kt.toStringTag : void 0;
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
var xt = _f;
var Ef = 1 / 0;
var ds = Kt ? Kt.prototype : void 0;
var fs = ds ? ds.toString : void 0;
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
var ps = 0 / 0;
var Mf = /^[-+]0x[0-9a-f]+$/i;
var Af = /^0b[01]+$/i;
var Nf = /^0o[0-7]+$/i;
var Rf = parseInt;
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
var If = "[object AsyncFunction]";
var Lf = "[object Function]";
var Df = "[object GeneratorFunction]";
var Ff = "[object Proxy]";
function ml(e) {
  if (!Rt(e))
    return false;
  var t = Qn(e);
  return t == Lf || t == Df || t == If || t == Ff;
}
var Bf = Qt["__core-js_shared__"];
var po = Bf;
var hs = function() {
  var e = /[^.]+$/.exec(po && po.keys && po.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zf(e) {
  return !!hs && hs in e;
}
var Vf = Function.prototype;
var Hf = Vf.toString;
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
var Wf = /[\\^$.*+?()[\]{}|]/g;
var jf = /^\[object .+?Constructor\]$/;
var Kf = Function.prototype;
var qf = Object.prototype;
var Yf = Kf.toString;
var Uf = qf.hasOwnProperty;
var Gf = RegExp(
  "^" + Yf.call(Uf).replace(Wf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Xf(e) {
  if (!Rt(e) || zf(e))
    return false;
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
var Po = Jf;
var ms = Object.create;
var Qf = function() {
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
var ep = Qf;
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
var np = 800;
var rp = 16;
var ap = Date.now;
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
var Ba = sp;
var ip = Ba ? function(e, t) {
  return Ba(e, "toString", {
    configurable: true,
    enumerable: false,
    value: lp(t),
    writable: true
  });
} : hl;
var up = ip;
var cp = op(up);
var fu = cp;
function dp(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== false; )
    ;
  return e;
}
var fp = 9007199254740991;
var pp = /^(?:0|[1-9]\d*)$/;
function Ua(e, t) {
  var n = typeof e;
  return t = t ?? fp, !!t && (n == "number" || n != "symbol" && pp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function gl(e, t, n) {
  t == "__proto__" && Ba ? Ba(e, t, {
    configurable: true,
    enumerable: true,
    value: n,
    writable: true
  }) : e[t] = n;
}
function Qr(e, t) {
  return e === t || e !== e && t !== t;
}
var vp = Object.prototype;
var hp = vp.hasOwnProperty;
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
    return false;
  var r = typeof t;
  return (r == "number" ? _r(n) && Ua(t, n.length) : r == "string" && t in n) ? Qr(n[t], e) : false;
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
var vu = Object.prototype;
var kp = vu.hasOwnProperty;
var $p = vu.propertyIsEnumerable;
var _p = bs(function() {
  return arguments;
}()) ? bs : function(e) {
  return rn(e) && kp.call(e, "callee") && !$p.call(e, "callee");
};
var Vr = _p;
function Ep() {
  return false;
}
var hu = typeof exports == "object" && exports && !exports.nodeType && exports;
var ys = hu && typeof module == "object" && module && !module.nodeType && module;
var Tp = ys && ys.exports === hu;
var ws = Tp ? Qt.Buffer : void 0;
var Op = ws ? ws.isBuffer : void 0;
var Pp = Op || Ep;
var Hr = Pp;
var xp = "[object Arguments]";
var Mp = "[object Array]";
var Ap = "[object Boolean]";
var Np = "[object Date]";
var Rp = "[object Error]";
var Ip = "[object Function]";
var Lp = "[object Map]";
var Dp = "[object Number]";
var Fp = "[object Object]";
var Bp = "[object RegExp]";
var zp = "[object Set]";
var Vp = "[object String]";
var Hp = "[object WeakMap]";
var Wp = "[object ArrayBuffer]";
var jp = "[object DataView]";
var Kp = "[object Float32Array]";
var qp = "[object Float64Array]";
var Yp = "[object Int8Array]";
var Up = "[object Int16Array]";
var Gp = "[object Int32Array]";
var Xp = "[object Uint8Array]";
var Zp = "[object Uint8ClampedArray]";
var Jp = "[object Uint16Array]";
var Qp = "[object Uint32Array]";
var et = {};
et[Kp] = et[qp] = et[Yp] = et[Up] = et[Gp] = et[Xp] = et[Zp] = et[Jp] = et[Qp] = true;
et[xp] = et[Mp] = et[Wp] = et[Ap] = et[jp] = et[Np] = et[Rp] = et[Ip] = et[Lp] = et[Dp] = et[Fp] = et[Bp] = et[zp] = et[Vp] = et[Hp] = false;
function ev(e) {
  return rn(e) && yl(e.length) && !!et[Qn(e)];
}
function Cl(e) {
  return function(t) {
    return e(t);
  };
}
var mu = typeof exports == "object" && exports && !exports.nodeType && exports;
var Rr = mu && typeof module == "object" && module && !module.nodeType && module;
var tv = Rr && Rr.exports === mu;
var vo = tv && su.process;
var nv = function() {
  try {
    var e = Rr && Rr.require && Rr.require("util").types;
    return e || vo && vo.binding && vo.binding("util");
  } catch {
  }
}();
var pr = nv;
var Cs = pr && pr.isTypedArray;
var rv = Cs ? Cl(Cs) : ev;
var Sl = rv;
var av = Object.prototype;
var ov = av.hasOwnProperty;
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
var sv = lv;
var iv = Object.prototype;
var uv = iv.hasOwnProperty;
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
var fv = Object.prototype;
var pv = fv.hasOwnProperty;
function vv(e) {
  if (!Rt(e))
    return dv(e);
  var t = wl(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !pv.call(e, r)) || n.push(r);
  return n;
}
function na(e) {
  return _r(e) ? gu(e, true) : vv(e);
}
var hv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var mv = /^\w*$/;
function kl(e, t) {
  if (xt(e))
    return false;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ya(e) ? true : mv.test(e) || !hv.test(e) || t != null && e in Object(t);
}
var gv = tr(Object, "create");
var Wr = gv;
function bv() {
  this.__data__ = Wr ? Wr(null) : {}, this.size = 0;
}
function yv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var wv = "__lodash_hash_undefined__";
var Cv = Object.prototype;
var Sv = Cv.hasOwnProperty;
function kv(e) {
  var t = this.__data__;
  if (Wr) {
    var n = t[e];
    return n === wv ? void 0 : n;
  }
  return Sv.call(t, e) ? t[e] : void 0;
}
var $v = Object.prototype;
var _v = $v.hasOwnProperty;
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
var xv = Array.prototype;
var Mv = xv.splice;
function Av(e) {
  var t = this.__data__, n = Ga(t, e);
  if (n < 0)
    return false;
  var r = t.length - 1;
  return n == r ? t.pop() : Mv.call(t, n, 1), --this.size, true;
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
var Lv = tr(Qt, "Map");
var jr = Lv;
function Dv() {
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
Sn.prototype.clear = Dv;
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
var qv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var Yv = /\\(\\)?/g;
var Uv = Kv(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(qv, function(n, r, a, o) {
    t.push(a ? o.replace(Yv, "$1") : r || n);
  }), t;
});
var Gv = Uv;
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
var Ss = Kt ? Kt.isConcatSpreadable : void 0;
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
var Tl = eh;
var th = "[object Object]";
var nh = Function.prototype;
var rh = Object.prototype;
var wu = nh.toString;
var ah = rh.hasOwnProperty;
var oh = wu.call(Object);
function lh(e) {
  if (!rn(e) || Qn(e) != th)
    return false;
  var t = Tl(e);
  if (t === null)
    return true;
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
var Cu = typeof exports == "object" && exports && !exports.nodeType && exports;
var ks = Cu && typeof module == "object" && module && !module.nodeType && module;
var hh = ks && ks.exports === Cu;
var $s = hh ? Qt.Buffer : void 0;
var _s = $s ? $s.allocUnsafe : void 0;
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
var gh = Object.prototype;
var bh = gh.propertyIsEnumerable;
var Es = Object.getOwnPropertySymbols;
var yh = Es ? function(e) {
  return e == null ? [] : (e = Object(e), mh(Es(e), function(t) {
    return bh.call(e, t);
  }));
} : ku;
var Ol = yh;
function wh(e, t) {
  return ea(e, Ol(e), t);
}
var Ch = Object.getOwnPropertySymbols;
var Sh = Ch ? function(e) {
  for (var t = []; e; )
    El(t, Ol(e)), e = Tl(e);
  return t;
} : ku;
var $u = Sh;
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
var Ao = _h;
var Eh = tr(Qt, "Promise");
var No = Eh;
var Th = tr(Qt, "Set");
var Ro = Th;
var Ts = "[object Map]";
var Oh = "[object Object]";
var Os = "[object Promise]";
var Ps = "[object Set]";
var xs = "[object WeakMap]";
var Ms = "[object DataView]";
var Ph = er(Ao);
var xh = er(jr);
var Mh = er(No);
var Ah = er(Ro);
var Nh = er(Po);
var Fn = Qn;
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
var Kr = Fn;
var Rh = Object.prototype;
var Ih = Rh.hasOwnProperty;
function Lh(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && Ih.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var Dh = Qt.Uint8Array;
var za = Dh;
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
var As = Kt ? Kt.prototype : void 0;
var Ns = As ? As.valueOf : void 0;
function Vh(e) {
  return Ns ? Object(Ns.call(e)) : {};
}
function Eu(e, t) {
  var n = t ? Pl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var Hh = "[object Boolean]";
var Wh = "[object Date]";
var jh = "[object Map]";
var Kh = "[object Number]";
var qh = "[object RegExp]";
var Yh = "[object Set]";
var Uh = "[object String]";
var Gh = "[object Symbol]";
var Xh = "[object ArrayBuffer]";
var Zh = "[object DataView]";
var Jh = "[object Float32Array]";
var Qh = "[object Float64Array]";
var em = "[object Int8Array]";
var tm = "[object Int16Array]";
var nm = "[object Int32Array]";
var rm = "[object Uint8Array]";
var am = "[object Uint8ClampedArray]";
var om = "[object Uint16Array]";
var lm = "[object Uint32Array]";
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
var Rs = pr && pr.isMap;
var cm = Rs ? Cl(Rs) : um;
var dm = cm;
var fm = "[object Set]";
function pm(e) {
  return rn(e) && Kr(e) == fm;
}
var Is = pr && pr.isSet;
var vm = Is ? Cl(Is) : pm;
var hm = vm;
var mm = 1;
var gm = 2;
var bm = 4;
var Ou = "[object Arguments]";
var ym = "[object Array]";
var wm = "[object Boolean]";
var Cm = "[object Date]";
var Sm = "[object Error]";
var Pu = "[object Function]";
var km = "[object GeneratorFunction]";
var $m = "[object Map]";
var _m = "[object Number]";
var xu = "[object Object]";
var Em = "[object RegExp]";
var Tm = "[object Set]";
var Om = "[object String]";
var Pm = "[object Symbol]";
var xm = "[object WeakMap]";
var Mm = "[object ArrayBuffer]";
var Am = "[object DataView]";
var Nm = "[object Float32Array]";
var Rm = "[object Float64Array]";
var Im = "[object Int8Array]";
var Lm = "[object Int16Array]";
var Dm = "[object Int32Array]";
var Fm = "[object Uint8Array]";
var Bm = "[object Uint8ClampedArray]";
var zm = "[object Uint16Array]";
var Vm = "[object Uint32Array]";
var Qe = {};
Qe[Ou] = Qe[ym] = Qe[Mm] = Qe[Am] = Qe[wm] = Qe[Cm] = Qe[Nm] = Qe[Rm] = Qe[Im] = Qe[Lm] = Qe[Dm] = Qe[$m] = Qe[_m] = Qe[xu] = Qe[Em] = Qe[Tm] = Qe[Om] = Qe[Pm] = Qe[Fm] = Qe[Bm] = Qe[zm] = Qe[Vm] = true;
Qe[Sm] = Qe[Pu] = Qe[xm] = false;
function Ir(e, t, n, r, a, o) {
  var l, s = t & mm, u = t & gm, c = t & bm;
  if (n && (l = a ? n(e, r, a, o) : n(e)), l !== void 0)
    return l;
  if (!Rt(e))
    return e;
  var f = xt(e);
  if (f) {
    if (l = Lh(e), !s)
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
  var h3 = o.get(e);
  if (h3)
    return h3;
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
function Ls(e) {
  return Ir(e, Hm);
}
var Wm = 1;
var jm = 4;
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
      return true;
  return false;
}
function Gm(e, t) {
  return e.has(t);
}
var Xm = 1;
var Zm = 2;
function Au(e, t, n, r, a, o) {
  var l = n & Xm, s = e.length, u = t.length;
  if (s != u && !(l && u > s))
    return false;
  var c = o.get(e), f = o.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, m = true, h3 = n & Zm ? new Va() : void 0;
  for (o.set(e, t), o.set(t, e); ++p < s; ) {
    var v = e[p], d = t[p];
    if (r)
      var y = l ? r(d, v, p, t, e, o) : r(v, d, p, e, t, o);
    if (y !== void 0) {
      if (y)
        continue;
      m = false;
      break;
    }
    if (h3) {
      if (!Um(t, function(w, C) {
        if (!Gm(h3, C) && (v === w || a(v, w, n, r, o)))
          return h3.push(C);
      })) {
        m = false;
        break;
      }
    } else if (!(v === d || a(v, d, n, r, o))) {
      m = false;
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
var eg = 1;
var tg = 2;
var ng = "[object Boolean]";
var rg = "[object Date]";
var ag = "[object Error]";
var og = "[object Map]";
var lg = "[object Number]";
var sg = "[object RegExp]";
var ig = "[object Set]";
var ug = "[object String]";
var cg = "[object Symbol]";
var dg = "[object ArrayBuffer]";
var fg = "[object DataView]";
var Ds = Kt ? Kt.prototype : void 0;
var ho = Ds ? Ds.valueOf : void 0;
function pg(e, t, n, r, a, o, l) {
  switch (n) {
    case fg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return false;
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
        return false;
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
  return false;
}
var vg = 1;
var hg = Object.prototype;
var mg = hg.hasOwnProperty;
function gg(e, t, n, r, a, o) {
  var l = n & vg, s = Mo(e), u = s.length, c = Mo(t), f = c.length;
  if (u != f && !l)
    return false;
  for (var p = u; p--; ) {
    var m = s[p];
    if (!(l ? m in t : mg.call(t, m)))
      return false;
  }
  var h3 = o.get(e), v = o.get(t);
  if (h3 && v)
    return h3 == t && v == e;
  var d = true;
  o.set(e, t), o.set(t, e);
  for (var y = l; ++p < u; ) {
    m = s[p];
    var w = e[m], C = t[m];
    if (r)
      var g = l ? r(C, w, m, t, e, o) : r(w, C, m, e, t, o);
    if (!(g === void 0 ? w === C || a(w, C, n, r, o) : g)) {
      d = false;
      break;
    }
    y || (y = m == "constructor");
  }
  if (d && !y) {
    var b = e.constructor, k = t.constructor;
    b != k && "constructor" in e && "constructor" in t && !(typeof b == "function" && b instanceof b && typeof k == "function" && k instanceof k) && (d = false);
  }
  return o.delete(e), o.delete(t), d;
}
var bg = 1;
var Fs = "[object Arguments]";
var Bs = "[object Array]";
var da = "[object Object]";
var yg = Object.prototype;
var zs = yg.hasOwnProperty;
function wg(e, t, n, r, a, o) {
  var l = xt(e), s = xt(t), u = l ? Bs : Kr(e), c = s ? Bs : Kr(t);
  u = u == Fs ? da : u, c = c == Fs ? da : c;
  var f = u == da, p = c == da, m = u == c;
  if (m && Hr(e)) {
    if (!Hr(t))
      return false;
    l = true, f = false;
  }
  if (m && !f)
    return o || (o = new Zt()), l || Sl(e) ? Au(e, t, n, r, a, o) : pg(e, t, u, n, r, a, o);
  if (!(n & bg)) {
    var h3 = f && zs.call(e, "__wrapped__"), v = p && zs.call(t, "__wrapped__");
    if (h3 || v) {
      var d = h3 ? e.value() : e, y = v ? t.value() : t;
      return o || (o = new Zt()), a(d, y, n, r, o);
    }
  }
  return m ? (o || (o = new Zt()), gg(e, t, n, r, a, o)) : false;
}
function Qa(e, t, n, r, a) {
  return e === t ? true : e == null || t == null || !rn(e) && !rn(t) ? e !== e && t !== t : wg(e, t, n, r, Qa, a);
}
var Cg = 1;
var Sg = 2;
function kg(e, t, n, r) {
  var a = n.length, o = a, l = !r;
  if (e == null)
    return !o;
  for (e = Object(e); a--; ) {
    var s = n[a];
    if (l && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return false;
  }
  for (; ++a < o; ) {
    s = n[a];
    var u = s[0], c = e[u], f = s[1];
    if (l && s[2]) {
      if (c === void 0 && !(u in e))
        return false;
    } else {
      var p = new Zt();
      if (r)
        var m = r(c, f, u, e, t, p);
      if (!(m === void 0 ? Qa(f, c, Cg | Sg, r, p) : m))
        return false;
    }
  }
  return true;
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
    return n == null ? false : n[e] === t && (t !== void 0 || e in Object(n));
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
  for (var r = -1, a = t.length, o = false; ++r < a; ) {
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
var Og = 1;
var Pg = 2;
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
      if (n(o[u], u, o) === false)
        break;
    }
    return t;
  };
}
var Lg = Ig();
var Lu = Lg;
function Dg(e, t) {
  return e && Lu(e, t, ta);
}
function Fg(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!_r(n))
      return e(n, r);
    for (var a = n.length, o = t ? a : -1, l = Object(n); (t ? o-- : ++o < a) && r(l[o], o, l) !== false; )
      ;
    return n;
  };
}
var Bg = Fg(Dg);
var zg = Bg;
var Vg = function() {
  return Qt.Date.now();
};
var mo = Vg;
var Hg = "Expected a function";
var Wg = Math.max;
var jg = Math.min;
function Rn(e, t, n) {
  var r, a, o, l, s, u, c = 0, f = false, p = false, m = true;
  if (typeof e != "function")
    throw new TypeError(Hg);
  t = vs(t) || 0, Rt(n) && (f = !!n.leading, p = "maxWait" in n, o = p ? Wg(vs(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m);
  function h3(S) {
    var $ = r, T = a;
    return r = a = void 0, c = S, l = e.apply(T, $), l;
  }
  function v(S) {
    return c = S, s = setTimeout(w, t), f ? h3(S) : l;
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
    return s = void 0, m && r ? h3(S) : (r = a = void 0, l);
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
        return clearTimeout(s), s = setTimeout(w, t), h3(u);
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
function Lo(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function qg(e) {
  return ea(e, na(e));
}
function Yg(e, t, n, r, a, o, l) {
  var s = Lo(e, n), u = Lo(t, n), c = l.get(u);
  if (c) {
    Io(e, n, c);
    return;
  }
  var f = o ? o(s, u, n + "", e, t, l) : void 0, p = f === void 0;
  if (p) {
    var m = xt(u), h3 = !m && Hr(u), v = !m && !h3 && Sl(u);
    f = u, m || h3 || v ? xt(s) ? f = s : Kg(s) ? f = du(s) : h3 ? (p = false, f = Su(u, true)) : v ? (p = false, f = Eu(u, true)) : f = [] : lh(u) || Vr(u) ? (f = s, Vr(s) ? f = qg(s) : (!Rt(s) || ml(s)) && (f = Tu(u))) : p = false;
  }
  p && (l.set(u, f), a(f, u, r, o, l), l.delete(u)), Io(e, n, f);
}
function Du(e, t, n, r, a) {
  e !== t && Lu(t, function(o, l) {
    if (a || (a = new Zt()), Rt(o))
      Yg(e, t, l, n, Du, r, a);
    else {
      var s = r ? r(Lo(e, l), o, l + "", e, t, a) : void 0;
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
  Du(e, t, n);
});
var Fu = eb;
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
var ab = rb;
function ob(e, t, n) {
  return e == null ? e : Bu(e, t, n);
}
var Un = (e) => e === void 0;
var Jt = (e) => typeof e == "boolean";
var it = (e) => typeof e == "number";
var qr = (e) => !e && e !== 0 || tt(e) && e.length === 0 || zt(e) && !Object.keys(e).length;
var vr = (e) => typeof Element > "u" ? false : e instanceof Element;
var lb = (e) => kt(e) ? !Number.isNaN(Number(e)) : false;
var sb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
var Vs = (e) => df(e);
var _a = (e, t, n) => ({
  get value() {
    return _t(e, t, n);
  },
  set value(r) {
    ob(e, t, r);
  }
});
var zu = class extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
};
function xl(e, t) {
  throw new zu(`[${e}] ${t}`);
}
function nt(e, t) {
  if (true) {
    const n = kt(e) ? new zu(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
var ib = "utils/dom/style";
var Vu = (e = "") => e.split(" ").filter((t) => !!t.trim());
var ir = (e, t) => {
  if (!e || !t)
    return false;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
};
var Hu = (e, t) => {
  !e || !t.trim() || e.classList.add(...Vu(t));
};
var Do = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Vu(t));
};
var ub = (e, t) => {
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
var Et = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, a] of t)
    n[r] = a;
  return n;
};
var cb = {
  name: "ArrowDown"
};
var db = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var fb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
);
var pb = [
  fb
];
function vb(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", db, pb);
}
var to = Et(cb, [["render", vb], ["__file", "arrow-down.vue"]]);
var hb = {
  name: "ArrowLeft"
};
var mb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var gb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
);
var bb = [
  gb
];
function yb(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", mb, bb);
}
var Wa = Et(hb, [["render", yb], ["__file", "arrow-left.vue"]]);
var wb = {
  name: "ArrowRight"
};
var Cb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Sb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
);
var kb = [
  Sb
];
function $b(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Cb, kb);
}
var An = Et(wb, [["render", $b], ["__file", "arrow-right.vue"]]);
var _b = {
  name: "ArrowUp"
};
var Eb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Tb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
);
var Ob = [
  Tb
];
function Pb(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Eb, Ob);
}
var ju = Et(_b, [["render", Pb], ["__file", "arrow-up.vue"]]);
var xb = {
  name: "Calendar"
};
var Mb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Ab = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
);
var Nb = [
  Ab
];
function Rb(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Mb, Nb);
}
var Ib = Et(xb, [["render", Rb], ["__file", "calendar.vue"]]);
var Lb = {
  name: "Check"
};
var Db = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Fb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
  },
  null,
  -1
  /* HOISTED */
);
var Bb = [
  Fb
];
function zb(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Db, Bb);
}
var Ku = Et(Lb, [["render", zb], ["__file", "check.vue"]]);
var Vb = {
  name: "CircleCheck"
};
var Hb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Wb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
);
var jb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
);
var Kb = [
  Wb,
  jb
];
function qb(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Hb, Kb);
}
var Yb = Et(Vb, [["render", qb], ["__file", "circle-check.vue"]]);
var Ub = {
  name: "CircleClose"
};
var Gb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Xb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
);
var Zb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
);
var Jb = [
  Xb,
  Zb
];
function Qb(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Gb, Jb);
}
var aa = Et(Ub, [["render", Qb], ["__file", "circle-close.vue"]]);
var ey = {
  name: "Clock"
};
var ty = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var ny = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
);
var ry = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
);
var ay = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
);
var oy = [
  ny,
  ry,
  ay
];
function ly(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", ty, oy);
}
var sy = Et(ey, [["render", ly], ["__file", "clock.vue"]]);
var iy = {
  name: "Close"
};
var uy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var cy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
);
var dy = [
  cy
];
function fy(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", uy, dy);
}
var Hs = Et(iy, [["render", fy], ["__file", "close.vue"]]);
var py = {
  name: "DArrowLeft"
};
var vy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var hy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
);
var my = [
  hy
];
function gy(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", vy, my);
}
var hr = Et(py, [["render", gy], ["__file", "d-arrow-left.vue"]]);
var by = {
  name: "DArrowRight"
};
var yy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var wy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
);
var Cy = [
  wy
];
function Sy(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", yy, Cy);
}
var mr = Et(by, [["render", Sy], ["__file", "d-arrow-right.vue"]]);
var ky = {
  name: "Hide"
};
var $y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var _y = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
);
var Ey = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
);
var Ty = [
  _y,
  Ey
];
function Oy(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", $y, Ty);
}
var Py = Et(ky, [["render", Oy], ["__file", "hide.vue"]]);
var xy = {
  name: "Loading"
};
var My = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Ay = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
);
var Ny = [
  Ay
];
function Ry(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", My, Ny);
}
var oa = Et(xy, [["render", Ry], ["__file", "loading.vue"]]);
var Iy = {
  name: "MoreFilled"
};
var Ly = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Dy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
);
var Fy = [
  Dy
];
function By(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Ly, Fy);
}
var Ws = Et(Iy, [["render", By], ["__file", "more-filled.vue"]]);
var zy = {
  name: "View"
};
var Vy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Hy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
);
var Wy = [
  Hy
];
function jy(e, t, n, r, a, o) {
  return openBlock(), createElementBlock("svg", Vy, Wy);
}
var Ky = Et(zy, [["render", jy], ["__file", "view.vue"]]);
var qu = "__epPropKey";
var be = (e) => e;
var qy = (e) => zt(e) && !!e[qu];
var no = (e, t) => {
  if (!zt(e) || qy(e))
    return e;
  const { values: n, required: r, default: a, type: o, validator: l } = e, u = {
    type: o,
    required: !!r,
    validator: n || l ? (c) => {
      let f = false, p = [];
      if (n && (p = Array.from(n), qn(e, "default") && p.push(a), f || (f = p.includes(c))), l && (f || (f = l(c))), !f && p.length > 0) {
        const m = [...new Set(p)].map((h3) => JSON.stringify(h3)).join(", ");
        warn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [qu]: true
  };
  return qn(e, "default") && (u.default = a), u;
};
var Me = (e) => Ha(Object.entries(e).map(([t, n]) => [
  t,
  no(n, t)
]));
var an = be([
  String,
  Object,
  Function
]);
var Yy = {
  validating: oa,
  success: Yb,
  error: aa
};
var Ht = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
};
var kn = (e) => (e.install = fr, e);
var Le = {
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
};
var Uy = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
];
var ft = "update:modelValue";
var Gn = "change";
var nr = ["", "default", "small", "large"];
var Gy = {
  large: 40,
  default: 32,
  small: 24
};
var Xy = (e) => Gy[e || "default"];
var Zy = (e) => ["", ...nr].includes(e);
var js = (e) => [...new Set(e)];
var mn = (e) => !e && e !== 0 ? [] : Array.isArray(e) ? e : [e];
var Ml = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
var Jy = () => Math.floor(Math.random() * 1e4);
var Al = (e) => e;
var Qy = ["class", "style"];
var e0 = /^on[A-Z]/;
var t0 = (e = {}) => {
  const { excludeListeners: t = false, excludeKeys: n } = e, r = computed(() => ((n == null ? void 0 : n.value) || []).concat(Qy)), a = getCurrentInstance();
  return a ? computed(() => {
    var o;
    return Ha(Object.entries((o = a.proxy) == null ? void 0 : o.$attrs).filter(([l]) => !r.value.includes(l) && !(t && e0.test(l))));
  }) : (nt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), computed(() => ({})));
};
var Yu = ({ from: e, replacement: t, scope: n, version: r, ref: a, type: o = "API" }, l) => {
  watch(() => unref(l), (s) => {
    s && nt(n, `[${o}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${a}
`);
  }, {
    immediate: true
  });
};
var n0 = (e) => ({
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
var a0 = (e) => (t, n) => o0(t, n, unref(e));
var o0 = (e, t, n) => _t(n, e, e).replace(/\{(\w+)\}/g, (r, a) => {
  var o;
  return `${(o = t == null ? void 0 : t[a]) != null ? o : `{${a}}`}`;
});
var l0 = (e) => {
  const t = computed(() => unref(e).name), n = isRef(e) ? e : ref(e);
  return {
    lang: t,
    locale: n,
    t: a0(e)
  };
};
var s0 = Symbol("localeContextKey");
var ot = (e) => {
  const t = e || inject(s0, ref());
  return l0(computed(() => t.value || r0));
};
var Ks = "el";
var i0 = "is-";
var Dn = (e, t, n, r, a) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), r && (o += `__${r}`), a && (o += `--${a}`), o;
};
var u0 = Symbol("namespaceContextKey");
var Nl = (e) => {
  const t = e || inject(u0, ref(Ks));
  return computed(() => unref(t) || Ks);
};
var we = (e, t) => {
  const n = Nl(t);
  return {
    namespace: n,
    b: (d = "") => Dn(n.value, e, d, "", ""),
    e: (d) => d ? Dn(n.value, e, "", d, "") : "",
    m: (d) => d ? Dn(n.value, e, "", "", d) : "",
    be: (d, y) => d && y ? Dn(n.value, e, d, y, "") : "",
    em: (d, y) => d && y ? Dn(n.value, e, "", d, y) : "",
    bm: (d, y) => d && y ? Dn(n.value, e, d, "", y) : "",
    bem: (d, y, w) => d && y && w ? Dn(n.value, e, d, y, w) : "",
    is: (d, ...y) => {
      const w = y.length >= 1 ? y[0] : true;
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
};
var c0 = no({
  type: be(Boolean),
  default: null
});
var d0 = no({
  type: be(Function)
});
var Uu = (e) => {
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
      const m = getCurrentInstance(), { emit: h3 } = m, v = m.props, d = computed(() => dt(v[n])), y = computed(() => v[e] === null), w = ($) => {
        l.value !== true && (l.value = true, s && (s.value = $), dt(f) && f($));
      }, C = ($) => {
        l.value !== false && (l.value = false, s && (s.value = $), dt(p) && p($));
      }, g = ($) => {
        if (v.disabled === true || dt(c) && !c())
          return;
        const T = d.value && at;
        T && h3(t, true), (y.value || !T) && w($);
      }, b = ($) => {
        if (v.disabled === true || !at)
          return;
        const T = d.value && at;
        T && h3(t, false), (y.value || !T) && C($);
      }, k = ($) => {
        Jt($) && (v.disabled && $ ? d.value && h3(t, false) : l.value !== $ && ($ ? w() : C()));
      }, S = () => {
        l.value ? b() : g();
      };
      return watch(() => v[e], k), u && m.appContext.config.globalProperties.$route !== void 0 && watch(() => ({
        ...m.proxy.$route
      }), () => {
        u.value && l.value && b();
      }), onMounted(() => {
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
var Gu = (e) => {
  const t = getCurrentInstance();
  return computed(() => {
    var n, r;
    return (r = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : r[e];
  });
};
var At = "top";
var qt = "bottom";
var Yt = "right";
var Nt = "left";
var Rl = "auto";
var la = [At, qt, Yt, Nt];
var gr = "start";
var Ur = "end";
var f0 = "clippingParents";
var Xu = "viewport";
var Mr = "popper";
var p0 = "reference";
var qs = la.reduce(function(e, t) {
  return e.concat([t + "-" + gr, t + "-" + Ur]);
}, []);
var ro = [].concat(la, [Rl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + gr, t + "-" + Ur]);
}, []);
var v0 = "beforeRead";
var h0 = "read";
var m0 = "afterRead";
var g0 = "beforeMain";
var b0 = "main";
var y0 = "afterMain";
var w0 = "beforeWrite";
var C0 = "write";
var S0 = "afterWrite";
var k0 = [v0, h0, m0, g0, b0, y0, w0, C0, S0];
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
function jt(e) {
  var t = en(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Il(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = en(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function $0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, a = t.attributes[n] || {}, o = t.elements[n];
    !jt(o) || !on(o) || (Object.assign(o.style, r), Object.keys(a).forEach(function(l) {
      var s = a[l];
      s === false ? o.removeAttribute(l) : o.setAttribute(l, s === true ? "" : s);
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
      !jt(a) || !on(a) || (Object.assign(a.style, s), Object.keys(o).forEach(function(u) {
        a.removeAttribute(u);
      }));
    });
  };
}
var Zu = { name: "applyStyles", enabled: true, phase: "write", fn: $0, effect: _0, requires: ["computeStyles"] };
function nn(e) {
  return e.split("-")[0];
}
var Kn = Math.max;
var ja = Math.min;
var yr = Math.round;
function wr(e, t) {
  t === void 0 && (t = false);
  var n = e.getBoundingClientRect(), r = 1, a = 1;
  if (jt(e) && t) {
    var o = e.offsetHeight, l = e.offsetWidth;
    l > 0 && (r = yr(n.width) / l || 1), o > 0 && (a = yr(n.height) / o || 1);
  }
  return { width: n.width / r, height: n.height / a, top: n.top / a, right: n.right / r, bottom: n.bottom / a, left: n.left / r, x: n.left / r, y: n.top / a };
}
function Ll(e) {
  var t = wr(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Ju(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (n && Il(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return true;
      r = r.parentNode || r.host;
    } while (r);
  }
  return false;
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
  return !jt(e) || yn(e).position === "fixed" ? null : e.offsetParent;
}
function T0(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && jt(e)) {
    var r = yn(e);
    if (r.position === "fixed")
      return null;
  }
  var a = ao(e);
  for (Il(a) && (a = a.host); jt(a) && ["html", "body"].indexOf(on(a)) < 0; ) {
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
function Dl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Lr(e, t, n) {
  return Kn(e, ja(t, n));
}
function O0(e, t, n) {
  var r = Lr(e, t, n);
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
  var t, n = e.state, r = e.name, a = e.options, o = n.elements.arrow, l = n.modifiersData.popperOffsets, s = nn(n.placement), u = Dl(s), c = [Nt, Yt].indexOf(s) >= 0, f = c ? "height" : "width";
  if (!(!o || !l)) {
    var p = P0(a.padding, n), m = Ll(o), h3 = u === "y" ? At : Nt, v = u === "y" ? qt : Yt, d = n.rects.reference[f] + n.rects.reference[u] - l[u] - n.rects.popper[f], y = l[u] - n.rects.reference[u], w = sa(o), C = w ? u === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, g = d / 2 - y / 2, b = p[h3], k = C - m[f] - p[v], S = C / 2 - m[f] / 2 + g, $ = Lr(b, S, k), T = u;
    n.modifiersData[r] = (t = {}, t[T] = $, t.centerOffset = $ - S, t);
  }
}
function M0(e) {
  var t = e.state, n = e.options, r = n.element, a = r === void 0 ? "[data-popper-arrow]" : r;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || !Ju(t.elements.popper, a) || (t.elements.arrow = a));
}
var A0 = { name: "arrow", enabled: true, phase: "main", fn: x0, effect: M0, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Cr(e) {
  return e.split("-")[1];
}
var N0 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function R0(e) {
  var t = e.x, n = e.y, r = window, a = r.devicePixelRatio || 1;
  return { x: yr(t * a) / a || 0, y: yr(n * a) / a || 0 };
}
function Us(e) {
  var t, n = e.popper, r = e.popperRect, a = e.placement, o = e.variation, l = e.offsets, s = e.position, u = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = l.x, h3 = m === void 0 ? 0 : m, v = l.y, d = v === void 0 ? 0 : v, y = typeof f == "function" ? f({ x: h3, y: d }) : { x: h3, y: d };
  h3 = y.x, d = y.y;
  var w = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), g = Nt, b = At, k = window;
  if (c) {
    var S = sa(n), $ = "clientHeight", T = "clientWidth";
    if (S === en(n) && (S = In(n), yn(S).position !== "static" && s === "absolute" && ($ = "scrollHeight", T = "scrollWidth")), S = S, a === At || (a === Nt || a === Yt) && o === Ur) {
      b = qt;
      var R = p && S === k && k.visualViewport ? k.visualViewport.height : S[$];
      d -= R - r.height, d *= u ? 1 : -1;
    }
    if (a === Nt || (a === At || a === qt) && o === Ur) {
      g = Yt;
      var z = p && S === k && k.visualViewport ? k.visualViewport.width : S[T];
      h3 -= z - r.width, h3 *= u ? 1 : -1;
    }
  }
  var V = Object.assign({ position: s }, c && N0), F = f === true ? R0({ x: h3, y: d }) : { x: h3, y: d };
  if (h3 = F.x, d = F.y, u) {
    var N;
    return Object.assign({}, V, (N = {}, N[b] = C ? "0" : "", N[g] = w ? "0" : "", N.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + h3 + "px, " + d + "px)" : "translate3d(" + h3 + "px, " + d + "px, 0)", N));
  }
  return Object.assign({}, V, (t = {}, t[b] = C ? d + "px" : "", t[g] = w ? h3 + "px" : "", t.transform = "", t));
}
function I0(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, a = r === void 0 ? true : r, o = n.adaptive, l = o === void 0 ? true : o, s = n.roundOffsets, u = s === void 0 ? true : s, c = { placement: nn(t.placement), variation: Cr(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: a, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Us(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: l, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Us(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var nc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: I0, data: {} };
var fa = { passive: true };
function L0(e) {
  var t = e.state, n = e.instance, r = e.options, a = r.scroll, o = a === void 0 ? true : a, l = r.resize, s = l === void 0 ? true : l, u = en(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, fa);
  }), s && u.addEventListener("resize", n.update, fa), function() {
    o && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, fa);
    }), s && u.removeEventListener("resize", n.update, fa);
  };
}
var rc = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: L0, data: {} };
var D0 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ea(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return D0[t];
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
  return ["html", "body", "#document"].indexOf(on(e)) >= 0 ? e.ownerDocument.body : jt(e) && zl(e) ? e : ac(ao(e));
}
function Dr(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ac(e), a = r === ((n = e.ownerDocument) == null ? void 0 : n.body), o = en(r), l = a ? [o].concat(o.visualViewport || [], zl(r) ? r : []) : r, s = t.concat(l);
  return a ? s : s.concat(Dr(ao(l)));
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
  var t = Dr(ao(e)), n = ["absolute", "fixed"].indexOf(yn(e).position) >= 0, r = n && jt(e) ? sa(e) : e;
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
    case qt:
      u = { x: l, y: t.y + t.height };
      break;
    case Yt:
      u = { x: t.x + t.width, y: s };
      break;
    case Nt:
      u = { x: t.x - n.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = a ? Dl(a) : null;
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
  var n = t, r = n.placement, a = r === void 0 ? e.placement : r, o = n.boundary, l = o === void 0 ? f0 : o, s = n.rootBoundary, u = s === void 0 ? Xu : s, c = n.elementContext, f = c === void 0 ? Mr : c, p = n.altBoundary, m = p === void 0 ? false : p, h3 = n.padding, v = h3 === void 0 ? 0 : h3, d = ec(typeof v != "number" ? v : tc(v, la)), y = f === Mr ? p0 : Mr, w = e.rects.popper, C = e.elements[m ? y : f], g = W0(br(C) ? C : C.contextElement || In(e.elements.popper), l, u), b = wr(e.elements.reference), k = oc({ reference: b, element: w, strategy: "absolute", placement: a }), S = Fo(Object.assign({}, w, k)), $ = f === Mr ? S : b, T = { top: g.top - $.top + d.top, bottom: $.bottom - g.bottom + d.bottom, left: g.left - $.left + d.left, right: $.right - g.right + d.right }, R = e.modifiersData.offset;
  if (f === Mr && R) {
    var z = R[a];
    Object.keys(T).forEach(function(V) {
      var F = [Yt, qt].indexOf(V) >= 0 ? 1 : -1, N = [At, qt].indexOf(V) >= 0 ? "y" : "x";
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
  var h3 = m.reduce(function(v, d) {
    return v[d] = Gr(e, { placement: d, boundary: a, rootBoundary: o, padding: l })[nn(d)], v;
  }, {});
  return Object.keys(h3).sort(function(v, d) {
    return h3[v] - h3[d];
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
    for (var a = n.mainAxis, o = a === void 0 ? true : a, l = n.altAxis, s = l === void 0 ? true : l, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, h3 = n.flipVariations, v = h3 === void 0 ? true : h3, d = n.allowedAutoPlacements, y = t.options.placement, w = nn(y), C = w === y, g = u || (C || !v ? [Ea(y)] : K0(y)), b = [y].concat(g).reduce(function(ne, he) {
      return ne.concat(nn(he) === Rl ? j0(t, { placement: he, boundary: f, rootBoundary: p, padding: c, flipVariations: v, allowedAutoPlacements: d }) : he);
    }, []), k = t.rects.reference, S = t.rects.popper, $ = /* @__PURE__ */ new Map(), T = true, R = b[0], z = 0; z < b.length; z++) {
      var V = b[z], F = nn(V), N = Cr(V) === gr, B = [At, qt].indexOf(F) >= 0, W = B ? "width" : "height", q = Gr(t, { placement: V, boundary: f, rootBoundary: p, altBoundary: m, padding: c }), M = B ? N ? Yt : Nt : N ? qt : At;
      k[W] > S[W] && (M = Ea(M));
      var H = Ea(M), _ = [];
      if (o && _.push(q[F] <= 0), s && _.push(q[M] <= 0, q[H] <= 0), _.every(function(ne) {
        return ne;
      })) {
        R = V, T = false;
        break;
      }
      $.set(V, _);
    }
    if (T)
      for (var D = v ? 3 : 1, U = function(ne) {
        var he = b.find(function(ge) {
          var se = $.get(ge);
          if (se)
            return se.slice(0, ne).every(function(le) {
              return le;
            });
        });
        if (he)
          return R = he, "break";
      }, I = D; I > 0; I--) {
        var G = U(I);
        if (G === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = true, t.placement = R, t.reset = true);
  }
}
var Y0 = { name: "flip", enabled: true, phase: "main", fn: q0, requiresIfExists: ["offset"], data: { _skip: false } };
function Zs(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Js(e) {
  return [At, Yt, qt, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function U0(e) {
  var t = e.state, n = e.name, r = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, l = Gr(t, { elementContext: "reference" }), s = Gr(t, { altBoundary: true }), u = Zs(l, r), c = Zs(s, a, o), f = Js(u), p = Js(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var G0 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: U0 };
function X0(e, t, n) {
  var r = nn(e), a = [Nt, At].indexOf(r) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, l = o[0], s = o[1];
  return l = l || 0, s = (s || 0) * a, [Nt, Yt].indexOf(r) >= 0 ? { x: s, y: l } : { x: l, y: s };
}
function Z0(e) {
  var t = e.state, n = e.options, r = e.name, a = n.offset, o = a === void 0 ? [0, 0] : a, l = ro.reduce(function(f, p) {
    return f[p] = X0(p, t.rects, o), f;
  }, {}), s = l[t.placement], u = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = l;
}
var J0 = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: Z0 };
function Q0(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = oc({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var lc = { name: "popperOffsets", enabled: true, phase: "read", fn: Q0, data: {} };
function e1(e) {
  return e === "x" ? "y" : "x";
}
function t1(e) {
  var t = e.state, n = e.options, r = e.name, a = n.mainAxis, o = a === void 0 ? true : a, l = n.altAxis, s = l === void 0 ? false : l, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, h3 = m === void 0 ? true : m, v = n.tetherOffset, d = v === void 0 ? 0 : v, y = Gr(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: f }), w = nn(t.placement), C = Cr(t.placement), g = !C, b = Dl(w), k = e1(b), S = t.modifiersData.popperOffsets, $ = t.rects.reference, T = t.rects.popper, R = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d, z = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), V = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var N, B = b === "y" ? At : Nt, W = b === "y" ? qt : Yt, q = b === "y" ? "height" : "width", M = S[b], H = M + y[B], _ = M - y[W], D = h3 ? -T[q] / 2 : 0, U = C === gr ? $[q] : T[q], I = C === gr ? -T[q] : -$[q], G = t.elements.arrow, ne = h3 && G ? Ll(G) : { width: 0, height: 0 }, he = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Qu(), ge = he[B], se = he[W], le = Lr(0, $[q], ne[q]), ue = g ? $[q] / 2 - D - le - ge - z.mainAxis : U - le - ge - z.mainAxis, ve = g ? -$[q] / 2 + D + le + se + z.mainAxis : I + le + se + z.mainAxis, _e = t.elements.arrow && sa(t.elements.arrow), Pe = _e ? b === "y" ? _e.clientTop || 0 : _e.clientLeft || 0 : 0, He = (N = V == null ? void 0 : V[b]) != null ? N : 0, We = M + ue - He - Pe, Ue = M + ve - He, je = Lr(h3 ? ja(H, We) : H, M, h3 ? Kn(_, Ue) : _);
      S[b] = je, F[b] = je - M;
    }
    if (s) {
      var rt, ht = b === "x" ? At : Nt, lt = b === "x" ? qt : Yt, Se = S[k], ut = k === "y" ? "height" : "width", ct = Se + y[ht], st = Se - y[lt], Ze = [At, Nt].indexOf(w) !== -1, ae = (rt = V == null ? void 0 : V[k]) != null ? rt : 0, ke = Ze ? ct : Se - $[ut] - T[ut] - ae + z.altAxis, Fe = Ze ? Se + $[ut] + T[ut] - ae - z.altAxis : st, Je = h3 && Ze ? O0(ke, Se, Fe) : Lr(h3 ? ke : ct, Se, h3 ? Fe : st);
      S[k] = Je, F[k] = Je - Se;
    }
    t.modifiersData[r] = F;
  }
}
var n1 = { name: "preventOverflow", enabled: true, phase: "main", fn: t1, requiresIfExists: ["offset"] };
function r1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function a1(e) {
  return e === en(e) || !jt(e) ? Fl(e) : r1(e);
}
function o1(e) {
  var t = e.getBoundingClientRect(), n = yr(t.width) / e.offsetWidth || 1, r = yr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function l1(e, t, n) {
  n === void 0 && (n = false);
  var r = jt(t), a = jt(t) && o1(t), o = In(t), l = wr(e, a), s = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((on(t) !== "body" || zl(o)) && (s = a1(t)), jt(t) ? (u = wr(t, true), u.x += t.clientLeft, u.y += t.clientTop) : o && (u.x = Bl(o))), { x: l.left + s.scrollLeft - u.x, y: l.top + s.scrollTop - u.y, width: l.width, height: l.height };
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
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Qs, o), modifiersData: {}, elements: { reference: l, popper: s }, attributes: {}, styles: {} }, f = [], p = false, m = { state: c, setOptions: function(d) {
      var y = typeof d == "function" ? d(c.options) : d;
      v(), c.options = Object.assign({}, o, c.options, y), c.scrollParents = { reference: br(l) ? Dr(l) : l.contextElement ? Dr(l.contextElement) : [], popper: Dr(s) };
      var w = i1(c1([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = w.filter(function(C) {
        return C.enabled;
      }), h3(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var d = c.elements, y = d.reference, w = d.popper;
        if (ei(y, w)) {
          c.rects = { reference: l1(y, sa(w), c.options.strategy === "fixed"), popper: Ll(w) }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
            return c.modifiersData[T.name] = Object.assign({}, T.data);
          });
          for (var C = 0; C < c.orderedModifiers.length; C++) {
            if (c.reset === true) {
              c.reset = false, C = -1;
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
      v(), p = true;
    } };
    if (!ei(l, s))
      return m;
    m.setOptions(u).then(function(d) {
      !p && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function h3() {
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
var f1 = [rc, lc, nc, Zu, J0, Y0, n1, A0, G0];
var sc = Vl({ defaultModifiers: f1 });
var p1 = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state: u }) => {
      const c = v1(u);
      Object.assign(l.value, c);
    },
    requires: ["computeStyles"]
  }, a = computed(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: p } = unref(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        r,
        { name: "applyStyles", enabled: false }
      ]
    };
  }), o = shallowRef(), l = ref({
    styles: {
      popper: {
        position: unref(a).strategy,
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
  return watch(a, (u) => {
    const c = unref(o);
    c && c.setOptions(u);
  }, {
    deep: true
  }), watch([e, t], ([u, c]) => {
    s(), !(!u || !c) && (o.value = sc(u, c, unref(a)));
  }), onBeforeUnmount(() => {
    s();
  }), {
    state: computed(() => {
      var u;
      return { ...((u = unref(o)) == null ? void 0 : u.state) || {} };
    }),
    styles: computed(() => unref(l).styles),
    attributes: computed(() => unref(l).attributes),
    update: () => {
      var u;
      return (u = unref(o)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = unref(o)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: computed(() => unref(o))
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
var Bo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
var h1 = Symbol("elIdInjection");
var ic = () => getCurrentInstance() ? inject(h1, Bo) : Bo;
var oo = (e) => {
  const t = ic();
  !at && t === Bo && nt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Nl();
  return computed(() => unref(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
var or = [];
var ni = (e) => {
  const t = e;
  t.key === Le.esc && or.forEach((n) => n(t));
};
var m1 = (e) => {
  onMounted(() => {
    or.length === 0 && document.addEventListener("keydown", ni), at && or.push(e);
  }), onBeforeUnmount(() => {
    or = or.filter((t) => t !== e), or.length === 0 && at && document.removeEventListener("keydown", ni);
  });
};
var ri;
var uc = () => {
  const e = Nl(), t = ic(), n = computed(() => `${e.value}-popper-container-${t.prefix}`), r = computed(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
};
var g1 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
};
var b1 = () => {
  const { id: e, selector: t } = uc();
  return onBeforeMount(() => {
    at && (!ri && !document.body.querySelector(t.value)) && (ri = g1(e.value));
  }), {
    id: e,
    selector: t
  };
};
var y1 = Me({
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
});
var cc = ({
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
        const p = unref(n);
        it(p) && p > 0 && l(() => {
          a(f);
        }, p);
      }, unref(e));
    },
    onClose: (f) => {
      s(), o(() => {
        a(f);
      }, unref(t));
    }
  };
};
var dc = Symbol("elForwardRef");
var w1 = (e) => {
  provide(dc, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
};
var C1 = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
});
var ai = ref(0);
var S1 = 2e3;
var k1 = Symbol("zIndexContextKey");
var fc = (e) => {
  const t = e || inject(k1, void 0), n = computed(() => {
    const o = unref(t);
    return it(o) ? o : S1;
  }), r = computed(() => n.value + ai.value);
  return {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: () => (ai.value++, r.value)
  };
};
function $1(e) {
  const t = ref();
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
var $n = no({
  type: String,
  values: nr,
  required: false
});
var _1 = Symbol("size");
var E1 = () => {
  const e = inject(_1, {});
  return computed(() => unref(e.size) || "");
};
function T1(e, { afterFocus: t, afterBlur: n } = {}) {
  const r = getCurrentInstance(), { emit: a } = r, o = shallowRef(), l = ref(false), s = (f) => {
    l.value || (l.value = true, a("focus", f), t == null || t());
  }, u = (f) => {
    var p;
    f.relatedTarget && ((p = o.value) != null && p.contains(f.relatedTarget)) || (l.value = false, a("blur", f), n == null || n());
  }, c = () => {
    var f;
    (f = e.value) == null || f.focus();
  };
  return watch(o, (f) => {
    f && (f.setAttribute("role", "button"), f.setAttribute("tabindex", "-1"));
  }), hn(o, "click", c), {
    wrapperRef: o,
    isFocused: l,
    handleFocus: s,
    handleBlur: u
  };
}
var O1 = Symbol();
var oi = ref();
function P1(e, t = void 0) {
  const n = getCurrentInstance() ? inject(O1, oi) : oi;
  return e ? computed(() => {
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
var x1 = Me({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
});
var M1 = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
var A1 = defineComponent({
  ...M1,
  props: x1,
  setup(e) {
    const t = e, n = we("icon"), r = computed(() => {
      const { size: a, color: o } = t;
      return !a && !o ? {} : {
        fontSize: Un(a) ? void 0 : Yr(a),
        "--color": o
      };
    });
    return (a, o) => (openBlock(), createElementBlock("i", mergeProps({
      class: unref(n).b(),
      style: unref(r)
    }, a.$attrs), [
      renderSlot(a.$slots, "default")
    ], 16));
  }
});
var N1 = Ae(A1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
var Ie = Ht(N1);
var Er = Symbol("formContextKey");
var Xn = Symbol("formItemContextKey");
var Ut = (e, t = {}) => {
  const n = ref(void 0), r = t.prop ? n : Gu("size"), a = t.global ? n : E1(), o = t.form ? { size: void 0 } : inject(Er, void 0), l = t.formItem ? { size: void 0 } : inject(Xn, void 0);
  return computed(() => r.value || unref(e) || (l == null ? void 0 : l.size) || (o == null ? void 0 : o.size) || a.value || "");
};
var ia = (e) => {
  const t = Gu("disabled"), n = inject(Er, void 0);
  return computed(() => t.value || unref(e) || (n == null ? void 0 : n.disabled) || false);
};
var _n = () => {
  const e = inject(Er, void 0), t = inject(Xn, void 0);
  return {
    form: e,
    formItem: t
  };
};
var lo = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: r
}) => {
  n || (n = ref(false)), r || (r = ref(false));
  const a = ref();
  let o;
  const l = computed(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return onMounted(() => {
    o = watch([toRef(e, "id"), n], ([s, u]) => {
      const c = s ?? (u ? void 0 : oo().value);
      c !== a.value && (t != null && t.removeInputId && (a.value && t.removeInputId(a.value), !(r != null && r.value) && !u && c && t.addInputId(c)), a.value = c);
    }, { immediate: true });
  }), onUnmounted(() => {
    o && o(), t != null && t.removeInputId && a.value && t.removeInputId(a.value);
  }), {
    isLabeledByFormItem: l,
    inputId: a
  };
};
var R1 = Me({
  size: {
    type: String,
    values: nr
  },
  disabled: Boolean
});
var I1 = Me({
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
    default: true
  },
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: Boolean,
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean]
  }
});
var L1 = {
  validate: (e, t, n) => (tt(e) || kt(e)) && Jt(t) && kt(n)
};
var D1 = "ElForm";
function F1() {
  const e = ref([]), t = computed(() => {
    if (!e.value.length)
      return "0";
    const o = Math.max(...e.value);
    return o ? `${o}px` : "";
  });
  function n(o) {
    const l = e.value.indexOf(o);
    return l === -1 && t.value === "0" && nt(D1, `unexpected width ${o}`), l;
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
var pa = (e, t) => {
  const n = xo(t);
  return n.length > 0 ? e.filter((r) => r.prop && n.includes(r.prop)) : e;
};
var Ta = "ElForm";
var B1 = defineComponent({
  name: Ta
});
var z1 = defineComponent({
  ...B1,
  props: I1,
  emits: L1,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = [], o = Ut(), l = we("form"), s = computed(() => {
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
    }, m = computed(() => {
      const C = !!r.model;
      return C || nt(Ta, "model is required for validate to work."), C;
    }), h3 = (C) => {
      if (a.length === 0)
        return [];
      const g = pa(a, C);
      return g.length ? g : (nt(Ta, "please pass correct props!"), []);
    }, v = async (C) => y(void 0, C), d = async (C = []) => {
      if (!m.value)
        return false;
      const g = h3(C);
      if (g.length === 0)
        return true;
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
      return Object.keys(b).length === 0 ? true : Promise.reject(b);
    }, y = async (C = [], g) => {
      const b = !dt(g);
      try {
        const k = await d(C);
        return k === true && (g == null || g(k)), k;
      } catch (k) {
        if (k instanceof Error)
          throw k;
        const S = k;
        return r.scrollToError && w(Object.keys(S)[0]), g == null || g(false, S), b && Promise.reject(S);
      }
    }, w = (C) => {
      var g;
      const b = pa(a, C)[0];
      b && ((g = b.$el) == null || g.scrollIntoView(r.scrollIntoViewOptions));
    };
    return watch(() => r.rules, () => {
      r.validateOnRuleChange && v().catch((C) => nt(C));
    }, { deep: true }), provide(Er, reactive({
      ...toRefs(r),
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
    }), (C, g) => (openBlock(), createElementBlock("form", {
      class: normalizeClass(unref(s))
    }, [
      renderSlot(C.$slots, "default")
    ], 2));
  }
});
var V1 = Ae(z1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
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
    return false;
  if (typeof Proxy == "function")
    return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
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
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), Xr(a, r);
  }, Vo(e);
}
var K1 = /%[sdj%]/g;
var pc = function() {
};
typeof process < "u" && process.env && true && typeof window < "u" && typeof document < "u" && (pc = function(t, n) {
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
function Dt(e) {
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
var si = function(e) {
  H1(t, e);
  function t(n, r) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = n, a.fields = r, a;
  }
  return t;
}(Vo(Error));
function G1(e, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(m, h3) {
      var v = function(w) {
        return r(w), w.length ? h3(new si(w, Ho(w))) : m(a);
      }, d = U1(e);
      li(d, n, v);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var l = t.firstFields === true ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), u = s.length, c = 0, f = [], p = new Promise(function(m, h3) {
    var v = function(y) {
      if (f.push.apply(f, y), c++, c === u)
        return r(f), f.length ? h3(new si(f, Ho(f))) : m(a);
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
  t.required && (!r.hasOwnProperty(t.field) || bt(n, l || t.type)) && a.push(Dt(o.messages.required, t.fullField));
};
var J1 = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(Dt(o.messages.whitespace, t.fullField));
};
var va;
var Q1 = function() {
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
  var c = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", p = u.v4().source, m = u.v6().source, h3 = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", d = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", w = '(?:[/?#][^\\s"]*)?', C = "(?:" + c + "|www\\.)" + f + "(?:localhost|" + p + "|" + m + "|" + h3 + v + d + ")" + y + w;
  return va = new RegExp("(?:^" + C + "$)", "i"), va;
};
var ci = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var Ar = {
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
      return true;
    try {
      return !!new RegExp(t);
    } catch {
      return false;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? false : typeof t == "number";
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
};
var ew = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    vc(t, n, r, a, o);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? Ar[s](n) || a.push(Dt(o.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && a.push(Dt(o.messages.types[s], t.fullField, t.type));
};
var tw = function(t, n, r, a, o) {
  var l = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, p = null, m = typeof n == "number", h3 = typeof n == "string", v = Array.isArray(n);
  if (m ? p = "number" : h3 ? p = "string" : v && (p = "array"), !p)
    return false;
  v && (f = n.length), h3 && (f = n.replace(c, "_").length), l ? f !== t.len && a.push(Dt(o.messages[p].len, t.fullField, t.len)) : s && !u && f < t.min ? a.push(Dt(o.messages[p].min, t.fullField, t.min)) : u && !s && f > t.max ? a.push(Dt(o.messages[p].max, t.fullField, t.max)) : s && u && (f < t.min || f > t.max) && a.push(Dt(o.messages[p].range, t.fullField, t.min, t.max));
};
var rr = "enum";
var nw = function(t, n, r, a, o) {
  t[rr] = Array.isArray(t[rr]) ? t[rr] : [], t[rr].indexOf(n) === -1 && a.push(Dt(o.messages[rr], t.fullField, t[rr].join(", ")));
};
var rw = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(Dt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(n) || a.push(Dt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
};
var Be = {
  required: vc,
  whitespace: J1,
  type: ew,
  range: tw,
  enum: nw,
  pattern: rw
};
var aw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "string") && !t.required)
      return r();
    Be.required(t, n, a, l, o, "string"), bt(n, "string") || (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o), Be.pattern(t, n, a, l, o), t.whitespace === true && Be.whitespace(t, n, a, l, o));
  }
  r(l);
};
var ow = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be.type(t, n, a, l, o);
  }
  r(l);
};
var lw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
};
var sw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be.type(t, n, a, l, o);
  }
  r(l);
};
var iw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), bt(n) || Be.type(t, n, a, l, o);
  }
  r(l);
};
var uw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
};
var cw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
};
var dw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    Be.required(t, n, a, l, o, "array"), n != null && (Be.type(t, n, a, l, o), Be.range(t, n, a, l, o));
  }
  r(l);
};
var fw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be.type(t, n, a, l, o);
  }
  r(l);
};
var pw = "enum";
var vw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o), n !== void 0 && Be[pw](t, n, a, l, o);
  }
  r(l);
};
var hw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "string") && !t.required)
      return r();
    Be.required(t, n, a, l, o), bt(n, "string") || Be.pattern(t, n, a, l, o);
  }
  r(l);
};
var mw = function(t, n, r, a, o) {
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
};
var gw = function(t, n, r, a, o) {
  var l = [], s = Array.isArray(n) ? "array" : typeof n;
  Be.required(t, n, a, l, o, s), r(l);
};
var go = function(t, n, r, a, o) {
  var l = t.type, s = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (bt(n, l) && !t.required)
      return r();
    Be.required(t, n, a, s, o, l), bt(n, l) || Be.type(t, n, a, s, o);
  }
  r(s);
};
var bw = function(t, n, r, a, o) {
  var l = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return r();
    Be.required(t, n, a, l, o);
  }
  r(l);
};
var Fr = {
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
var jo = Wo();
var ua = function() {
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
    var m = {}, h3 = u.keys || Object.keys(this.rules);
    h3.forEach(function(d) {
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
            return w.message !== void 0 ? T = [].concat(w.message).map(ii(w, s)) : u.error && (T = [u.error(w, Dt(u.messages.required, w.field))]), y(T);
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
        k === true ? b() : k === false ? b(typeof w.message == "function" ? w.message(w.fullField || w.field) : w.message || (w.fullField || w.field) + " fails") : k instanceof Array ? b(k) : k instanceof Error && b(k.message);
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
      throw new Error(Dt("Unknown rule type %s", r.type));
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
var yw = [
  "",
  "error",
  "validating",
  "success"
];
var ww = Me({
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
    default: true
  },
  size: {
    type: String,
    values: nr
  }
});
var di = "ElLabelWrap";
var Cw = defineComponent({
  name: di,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = inject(Er, void 0), r = inject(Xn);
    r || xl(di, "usage: <el-form-item><label-wrap /></el-form-item>");
    const a = we("form"), o = ref(), l = ref(0), s = () => {
      var f;
      if ((f = o.value) != null && f.firstElementChild) {
        const p = window.getComputedStyle(o.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(p));
      } else
        return 0;
    }, u = (f = "update") => {
      nextTick(() => {
        t.default && e.isAutoWidth && (f === "update" ? l.value = s() : f === "remove" && (n == null || n.deregisterLabelWidth(l.value)));
      });
    }, c = () => u("update");
    return onMounted(() => {
      c();
    }), onBeforeUnmount(() => {
      u("remove");
    }), onUpdated(() => c()), watch(l, (f, p) => {
      e.updateAll && (n == null || n.registerLabelWidth(f, p));
    }), Nn(computed(() => {
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
        const h3 = n == null ? void 0 : n.autoLabelWidth, v = r == null ? void 0 : r.hasLabel, d = {};
        if (v && h3 && h3 !== "auto") {
          const y = Math.max(0, Number.parseInt(h3, 10) - l.value), w = n.labelPosition === "left" ? "marginRight" : "marginLeft";
          y && (d[w] = `${y}px`);
        }
        return createVNode("div", {
          ref: o,
          class: [a.be("item", "label-wrap")],
          style: d
        }, [(f = t.default) == null ? void 0 : f.call(t)]);
      } else
        return createVNode(Fragment, {
          ref: o
        }, [(p = t.default) == null ? void 0 : p.call(t)]);
    };
  }
});
var Sw = ["role", "aria-labelledby"];
var kw = defineComponent({
  name: "ElFormItem"
});
var $w = defineComponent({
  ...kw,
  props: ww,
  setup(e, { expose: t }) {
    const n = e, r = useSlots(), a = inject(Er, void 0), o = inject(Xn, void 0), l = Ut(void 0, { formItem: false }), s = we("form-item"), u = oo().value, c = ref([]), f = ref(""), p = qd(f, 100), m = ref(""), h3 = ref();
    let v, d = false;
    const y = computed(() => {
      if ((a == null ? void 0 : a.labelPosition) === "top")
        return {};
      const se = Yr(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
      return se ? { width: se } : {};
    }), w = computed(() => {
      if ((a == null ? void 0 : a.labelPosition) === "top" || a != null && a.inline)
        return {};
      if (!n.label && !n.labelWidth && R)
        return {};
      const se = Yr(n.labelWidth || (a == null ? void 0 : a.labelWidth) || "");
      return !n.label && !r.label ? { marginLeft: se } : {};
    }), C = computed(() => [
      s.b(),
      s.m(l.value),
      s.is("error", f.value === "error"),
      s.is("validating", f.value === "validating"),
      s.is("success", f.value === "success"),
      s.is("required", B.value || n.required),
      s.is("no-asterisk", a == null ? void 0 : a.hideRequiredAsterisk),
      (a == null ? void 0 : a.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [s.m("feedback")]: a == null ? void 0 : a.statusIcon }
    ]), g = computed(() => Jt(n.inlineMessage) ? n.inlineMessage : (a == null ? void 0 : a.inlineMessage) || false), b = computed(() => [
      s.e("error"),
      { [s.em("error", "inline")]: g.value }
    ]), k = computed(() => n.prop ? kt(n.prop) ? n.prop : n.prop.join(".") : ""), S = computed(() => !!(n.label || r.label)), $ = computed(() => n.for || c.value.length === 1 ? c.value[0] : void 0), T = computed(() => !$.value && S.value), R = !!o, z = computed(() => {
      const se = a == null ? void 0 : a.model;
      if (!(!se || !n.prop))
        return _a(se, n.prop).value;
    }), V = computed(() => {
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
    }), F = computed(() => V.value.length > 0), N = (se) => V.value.filter((ue) => !ue.trigger || !se ? true : Array.isArray(ue.trigger) ? ue.trigger.includes(se) : ue.trigger === se).map(({ trigger: ue, ...ve }) => ve), B = computed(() => V.value.some((se) => se.required)), W = computed(() => {
      var se;
      return p.value === "error" && n.showMessage && ((se = a == null ? void 0 : a.showMessage) != null ? se : true);
    }), q = computed(() => `${n.label || ""}${(a == null ? void 0 : a.labelSuffix) || ""}`), M = (se) => {
      f.value = se;
    }, H = (se) => {
      var le, ue;
      const { errors: ve, fields: _e } = se;
      (!ve || !_e) && console.error(se), M("error"), m.value = ve ? (ue = (le = ve == null ? void 0 : ve[0]) == null ? void 0 : le.message) != null ? ue : `${n.prop} is required` : "", a == null || a.emit("validate", n.prop, false, m.value);
    }, _ = () => {
      M("success"), a == null || a.emit("validate", n.prop, true, "");
    }, D = async (se) => {
      const le = k.value;
      return new ua({
        [le]: se
      }).validate({ [le]: z.value }, { firstFields: true }).then(() => (_(), true)).catch((ve) => (H(ve), Promise.reject(ve)));
    }, U = async (se, le) => {
      if (d || !n.prop)
        return false;
      const ue = dt(le);
      if (!F.value)
        return le == null || le(false), false;
      const ve = N(se);
      return ve.length === 0 ? (le == null || le(true), true) : (M("validating"), D(ve).then(() => (le == null || le(true), true)).catch((_e) => {
        const { fields: Pe } = _e;
        return le == null || le(false, Pe), ue ? false : Promise.reject(Pe);
      }));
    }, I = () => {
      M(""), m.value = "", d = false;
    }, G = async () => {
      const se = a == null ? void 0 : a.model;
      if (!se || !n.prop)
        return;
      const le = _a(se, n.prop);
      d = true, le.value = Ls(v), await nextTick(), I(), d = false;
    }, ne = (se) => {
      c.value.includes(se) || c.value.push(se);
    }, he = (se) => {
      c.value = c.value.filter((le) => le !== se);
    };
    watch(() => n.error, (se) => {
      m.value = se || "", M(se ? "error" : "");
    }, { immediate: true }), watch(() => n.validateStatus, (se) => M(se || ""));
    const ge = reactive({
      ...toRefs(n),
      $el: h3,
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
    return provide(Xn, ge), onMounted(() => {
      n.prop && (a == null || a.addField(ge), v = Ls(z.value));
    }), onBeforeUnmount(() => {
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
      return openBlock(), createElementBlock("div", {
        ref_key: "formItemRef",
        ref: h3,
        class: normalizeClass(unref(C)),
        role: unref(T) ? "group" : void 0,
        "aria-labelledby": unref(T) ? unref(u) : void 0
      }, [
        createVNode(unref(Cw), {
          "is-auto-width": unref(y).width === "auto",
          "update-all": ((ue = unref(a)) == null ? void 0 : ue.labelWidth) === "auto"
        }, {
          default: withCtx(() => [
            unref(S) ? (openBlock(), createBlock(resolveDynamicComponent(unref($) ? "label" : "div"), {
              key: 0,
              id: unref(u),
              for: unref($),
              class: normalizeClass(unref(s).e("label")),
              style: normalizeStyle(unref(y))
            }, {
              default: withCtx(() => [
                renderSlot(se.$slots, "label", { label: unref(q) }, () => [
                  createTextVNode(toDisplayString(unref(q)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        createBaseVNode("div", {
          class: normalizeClass(unref(s).e("content")),
          style: normalizeStyle(unref(w))
        }, [
          renderSlot(se.$slots, "default"),
          createVNode(TransitionGroup, {
            name: `${unref(s).namespace.value}-zoom-in-top`
          }, {
            default: withCtx(() => [
              unref(W) ? renderSlot(se.$slots, "error", {
                key: 0,
                error: m.value
              }, () => [
                createBaseVNode("div", {
                  class: normalizeClass(unref(b))
                }, toDisplayString(m.value), 3)
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, Sw);
    };
  }
});
var hc = Ae($w, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
var _w = Ht(V1, {
  FormItem: hc
});
var Tn = kn(hc);
var Gt;
var Ew = `
  height:0 !important;
  visibility:hidden !important;
  ${af() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
var Tw = [
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
var Pw = Me({
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
    default: false
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
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
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
    default: true
  },
  inputStyle: {
    type: be([Object, Array, String]),
    default: () => Al({})
  }
});
var xw = {
  [ft]: (e) => kt(e),
  input: (e) => kt(e),
  change: (e) => kt(e),
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  clear: () => true,
  mouseleave: (e) => e instanceof MouseEvent,
  mouseenter: (e) => e instanceof MouseEvent,
  keydown: (e) => e instanceof Event,
  compositionstart: (e) => e instanceof CompositionEvent,
  compositionupdate: (e) => e instanceof CompositionEvent,
  compositionend: (e) => e instanceof CompositionEvent
};
var Mw = ["role"];
var Aw = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"];
var Nw = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"];
var Rw = defineComponent({
  name: "ElInput",
  inheritAttrs: false
});
var Iw = defineComponent({
  ...Rw,
  props: Pw,
  emits: xw,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = useAttrs(), o = useSlots(), l = computed(() => {
      const ae = {};
      return r.containerRole === "combobox" && (ae["aria-haspopup"] = a["aria-haspopup"], ae["aria-owns"] = a["aria-owns"], ae["aria-expanded"] = a["aria-expanded"]), ae;
    }), s = computed(() => [
      r.type === "textarea" ? y.b() : d.b(),
      d.m(h3.value),
      d.is("disabled", v.value),
      d.is("exceed", ne.value),
      {
        [d.b("group")]: o.prepend || o.append,
        [d.bm("group", "append")]: o.append,
        [d.bm("group", "prepend")]: o.prepend,
        [d.m("prefix")]: o.prefix || r.prefixIcon,
        [d.m("suffix")]: o.suffix || r.suffixIcon || r.clearable || r.showPassword,
        [d.bm("suffix", "password-clear")]: D.value && U.value
      },
      a.class
    ]), u = computed(() => [
      d.e("wrapper"),
      d.is("focus", z.value)
    ]), c = t0({
      excludeKeys: computed(() => Object.keys(l.value))
    }), { form: f, formItem: p } = _n(), { inputId: m } = lo(r, {
      formItemContext: p
    }), h3 = Ut(), v = ia(), d = we("input"), y = we("textarea"), w = shallowRef(), C = shallowRef(), g = ref(false), b = ref(false), k = ref(false), S = ref(), $ = shallowRef(r.inputStyle), T = computed(() => w.value || C.value), { wrapperRef: R, isFocused: z, handleFocus: V, handleBlur: F } = T1(T, {
      afterBlur() {
        var ae;
        r.validateEvent && ((ae = p == null ? void 0 : p.validate) == null || ae.call(p, "blur").catch((ke) => nt(ke)));
      }
    }), N = computed(() => {
      var ae;
      return (ae = f == null ? void 0 : f.statusIcon) != null ? ae : false;
    }), B = computed(() => (p == null ? void 0 : p.validateState) || ""), W = computed(() => B.value && Yy[B.value]), q = computed(() => k.value ? Ky : Py), M = computed(() => [
      a.style,
      r.inputStyle
    ]), H = computed(() => [
      r.inputStyle,
      $.value,
      { resize: r.resize }
    ]), _ = computed(() => eo(r.modelValue) ? "" : String(r.modelValue)), D = computed(() => r.clearable && !v.value && !r.readonly && !!_.value && (z.value || g.value)), U = computed(() => r.showPassword && !v.value && !r.readonly && !!_.value && (!!_.value || z.value)), I = computed(() => r.showWordLimit && !!c.value.maxlength && (r.type === "text" || r.type === "textarea") && !v.value && !r.readonly && !r.showPassword), G = computed(() => _.value.length), ne = computed(() => !!I.value && G.value > Number(c.value.maxlength)), he = computed(() => !!o.suffix || !!r.suffixIcon || D.value || r.showPassword || I.value || !!B.value && N.value), [ge, se] = $1(w);
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
          const Fe = zt(ke) ? ke.minRows : void 0, Je = zt(ke) ? ke.maxRows : void 0, ee = fi(C.value, Fe, Je);
          $.value = {
            overflowY: "hidden",
            ...ee
          }, nextTick(() => {
            C.value.offsetHeight, $.value = ee;
          });
        } else
          $.value = {
            minHeight: fi(C.value).minHeight
          };
    }, ve = ((ae) => {
      let ke = false;
      return () => {
        var Fe;
        if (ke || !r.autosize)
          return;
        ((Fe = C.value) == null ? void 0 : Fe.offsetParent) === null || (ae(), ke = true);
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
        n(ft, ke), n("input", ke), await nextTick(), _e(), se();
      }
    }, He = (ae) => {
      n("change", ae.target.value);
    }, We = (ae) => {
      n("compositionstart", ae), b.value = true;
    }, Ue = (ae) => {
      var ke;
      n("compositionupdate", ae);
      const Fe = (ke = ae.target) == null ? void 0 : ke.value, Je = Fe[Fe.length - 1] || "";
      b.value = !Ml(Je);
    }, je = (ae) => {
      n("compositionend", ae), b.value && (b.value = false, Pe(ae));
    }, rt = () => {
      k.value = !k.value, ht();
    }, ht = async () => {
      var ae;
      await nextTick(), (ae = T.value) == null || ae.focus();
    }, lt = () => {
      var ae;
      return (ae = T.value) == null ? void 0 : ae.blur();
    }, Se = (ae) => {
      g.value = false, n("mouseleave", ae);
    }, ut = (ae) => {
      g.value = true, n("mouseenter", ae);
    }, ct = (ae) => {
      n("keydown", ae);
    }, st = () => {
      var ae;
      (ae = T.value) == null || ae.select();
    }, Ze = () => {
      n(ft, ""), n("change", ""), n("clear"), n("input", "");
    };
    return watch(() => r.modelValue, () => {
      var ae;
      nextTick(() => le()), r.validateEvent && ((ae = p == null ? void 0 : p.validate) == null || ae.call(p, "change").catch((ke) => nt(ke)));
    }), watch(_, () => _e()), watch(() => r.type, async () => {
      await nextTick(), _e(), le();
    }), onMounted(() => {
      !r.formatter && r.parser && nt("ElInput", "If you set the parser, you also need to set the formatter."), _e(), nextTick(le);
    }), t({
      input: w,
      textarea: C,
      ref: T,
      textareaStyle: H,
      autosize: toRef(r, "autosize"),
      focus: ht,
      blur: lt,
      select: st,
      clear: Ze,
      resizeTextarea: le
    }), (ae, ke) => withDirectives((openBlock(), createElementBlock("div", mergeProps(unref(l), {
      class: unref(s),
      style: unref(M),
      role: ae.containerRole,
      onMouseenter: ut,
      onMouseleave: Se
    }), [
      createCommentVNode(" input "),
      ae.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createCommentVNode(" prepend slot "),
        ae.$slots.prepend ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(d).be("group", "prepend"))
        }, [
          renderSlot(ae.$slots, "prepend")
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          ref_key: "wrapperRef",
          ref: R,
          class: normalizeClass(unref(u))
        }, [
          createCommentVNode(" prefix slot "),
          ae.$slots.prefix || ae.prefixIcon ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(d).e("prefix"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(d).e("prefix-inner"))
            }, [
              renderSlot(ae.$slots, "prefix"),
              ae.prefixIcon ? (openBlock(), createBlock(unref(Ie), {
                key: 0,
                class: normalizeClass(unref(d).e("icon"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(ae.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("input", mergeProps({
            id: unref(m),
            ref_key: "input",
            ref: w,
            class: unref(d).e("inner")
          }, unref(c), {
            type: ae.showPassword ? k.value ? "text" : "password" : ae.type,
            disabled: unref(v),
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
            onFocus: ke[0] || (ke[0] = (...Fe) => unref(V) && unref(V)(...Fe)),
            onBlur: ke[1] || (ke[1] = (...Fe) => unref(F) && unref(F)(...Fe)),
            onChange: He,
            onKeydown: ct
          }), null, 16, Aw),
          createCommentVNode(" suffix slot "),
          unref(he) ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(unref(d).e("suffix"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(d).e("suffix-inner"))
            }, [
              !unref(D) || !unref(U) || !unref(I) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                renderSlot(ae.$slots, "suffix"),
                ae.suffixIcon ? (openBlock(), createBlock(unref(Ie), {
                  key: 0,
                  class: normalizeClass(unref(d).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(ae.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 64)) : createCommentVNode("v-if", true),
              unref(D) ? (openBlock(), createBlock(unref(Ie), {
                key: 1,
                class: normalizeClass([unref(d).e("icon"), unref(d).e("clear")]),
                onMousedown: withModifiers(unref(fr), ["prevent"]),
                onClick: Ze
              }, {
                default: withCtx(() => [
                  createVNode(unref(aa))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
              unref(U) ? (openBlock(), createBlock(unref(Ie), {
                key: 2,
                class: normalizeClass([unref(d).e("icon"), unref(d).e("password")]),
                onClick: rt
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(q))))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              unref(I) ? (openBlock(), createElementBlock("span", {
                key: 3,
                class: normalizeClass(unref(d).e("count"))
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(unref(d).e("count-inner"))
                }, toDisplayString(unref(G)) + " / " + toDisplayString(unref(c).maxlength), 3)
              ], 2)) : createCommentVNode("v-if", true),
              unref(B) && unref(W) && unref(N) ? (openBlock(), createBlock(unref(Ie), {
                key: 4,
                class: normalizeClass([
                  unref(d).e("icon"),
                  unref(d).e("validateIcon"),
                  unref(d).is("loading", unref(B) === "validating")
                ])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(W))))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)) : createCommentVNode("v-if", true)
        ], 2),
        createCommentVNode(" append slot "),
        ae.$slots.append ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(d).be("group", "append"))
        }, [
          renderSlot(ae.$slots, "append")
        ], 2)) : createCommentVNode("v-if", true)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createCommentVNode(" textarea "),
        createBaseVNode("textarea", mergeProps({
          id: unref(m),
          ref_key: "textarea",
          ref: C,
          class: unref(y).e("inner")
        }, unref(c), {
          tabindex: ae.tabindex,
          disabled: unref(v),
          readonly: ae.readonly,
          autocomplete: ae.autocomplete,
          style: unref(H),
          "aria-label": ae.label,
          placeholder: ae.placeholder,
          form: r.form,
          onCompositionstart: We,
          onCompositionupdate: Ue,
          onCompositionend: je,
          onInput: Pe,
          onFocus: ke[2] || (ke[2] = (...Fe) => unref(V) && unref(V)(...Fe)),
          onBlur: ke[3] || (ke[3] = (...Fe) => unref(F) && unref(F)(...Fe)),
          onChange: He,
          onKeydown: ct
        }), null, 16, Nw),
        unref(I) ? (openBlock(), createElementBlock("span", {
          key: 0,
          style: normalizeStyle(S.value),
          class: normalizeClass(unref(d).e("count"))
        }, toDisplayString(unref(G)) + " / " + toDisplayString(unref(c).maxlength), 7)) : createCommentVNode("v-if", true)
      ], 64))
    ], 16, Mw)), [
      [vShow, ae.type !== "hidden"]
    ]);
  }
});
var Lw = Ae(Iw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
var Ft = Ht(Lw);
var sr = 4;
var Dw = {
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
};
var Fw = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
});
var mc = Symbol("scrollbarContextKey");
var Bw = Me({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
var zw = "Thumb";
var Vw = defineComponent({
  __name: "thumb",
  props: Bw,
  setup(e) {
    const t = e, n = inject(mc), r = we("scrollbar");
    n || xl(zw, "can not inject scrollbar context");
    const a = ref(), o = ref(), l = ref({}), s = ref(false);
    let u = false, c = false, f = at ? document.onselectstart : null;
    const p = computed(() => Dw[t.vertical ? "vertical" : "horizontal"]), m = computed(() => Fw({
      size: t.size,
      move: t.move,
      bar: p.value
    })), h3 = computed(() => a.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / o.value[p.value.offset]), v = (S) => {
      var $;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      ($ = window.getSelection()) == null || $.removeAllRanges(), y(S);
      const T = S.currentTarget;
      T && (l.value[p.value.axis] = T[p.value.offset] - (S[p.value.client] - T.getBoundingClientRect()[p.value.direction]));
    }, d = (S) => {
      if (!o.value || !a.value || !n.wrapElement)
        return;
      const $ = Math.abs(S.target.getBoundingClientRect()[p.value.direction] - S[p.value.client]), T = o.value[p.value.offset] / 2, R = ($ - T) * 100 * h3.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = R * n.wrapElement[p.value.scrollSize] / 100;
    }, y = (S) => {
      S.stopImmediatePropagation(), u = true, document.addEventListener("mousemove", w), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => false;
    }, w = (S) => {
      if (!a.value || !o.value || u === false)
        return;
      const $ = l.value[p.value.axis];
      if (!$)
        return;
      const T = (a.value.getBoundingClientRect()[p.value.direction] - S[p.value.client]) * -1, R = o.value[p.value.offset] - $, z = (T - R) * 100 * h3.value / a.value[p.value.offset];
      n.wrapElement[p.value.scroll] = z * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      u = false, l.value[p.value.axis] = 0, document.removeEventListener("mousemove", w), document.removeEventListener("mouseup", C), k(), c && (s.value = false);
    }, g = () => {
      c = false, s.value = !!t.size;
    }, b = () => {
      c = true, s.value = u;
    };
    onBeforeUnmount(() => {
      k(), document.removeEventListener("mouseup", C);
    });
    const k = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return hn(toRef(n, "scrollbarElement"), "mousemove", g), hn(toRef(n, "scrollbarElement"), "mouseleave", b), (S, $) => (openBlock(), createBlock(Transition, {
      name: unref(r).b("fade"),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref_key: "instance",
          ref: a,
          class: normalizeClass([unref(r).e("bar"), unref(r).is(unref(p).key)]),
          onMousedown: d
        }, [
          createBaseVNode("div", {
            ref_key: "thumb",
            ref: o,
            class: normalizeClass(unref(r).e("thumb")),
            style: normalizeStyle(unref(m)),
            onMousedown: v
          }, null, 38)
        ], 34), [
          [vShow, S.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var pi = Ae(Vw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
var Hw = Me({
  always: {
    type: Boolean,
    default: true
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
});
var Ww = defineComponent({
  __name: "bar",
  props: Hw,
  setup(e, { expose: t }) {
    const n = e, r = ref(0), a = ref(0);
    return t({
      handleScroll: (l) => {
        if (l) {
          const s = l.offsetHeight - sr, u = l.offsetWidth - sr;
          a.value = l.scrollTop * 100 / s * n.ratioY, r.value = l.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (l, s) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(pi, {
        move: r.value,
        ratio: l.ratioX,
        size: l.width,
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      createVNode(pi, {
        move: a.value,
        ratio: l.ratioY,
        size: l.height,
        vertical: "",
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var jw = Ae(Ww, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
var Kw = Me({
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
    default: false
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
});
var qw = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(it)
};
var Ko = "ElScrollbar";
var Yw = defineComponent({
  name: Ko
});
var Uw = defineComponent({
  ...Yw,
  props: Kw,
  emits: qw,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = we("scrollbar");
    let o, l;
    const s = ref(), u = ref(), c = ref(), f = ref("0"), p = ref("0"), m = ref(), h3 = ref(1), v = ref(1), d = computed(() => {
      const $ = {};
      return r.height && ($.height = Yr(r.height)), r.maxHeight && ($.maxHeight = Yr(r.maxHeight)), [r.wrapStyle, $];
    }), y = computed(() => [
      r.wrapClass,
      a.e("wrap"),
      { [a.em("wrap", "hidden-default")]: !r.native }
    ]), w = computed(() => [a.e("view"), r.viewClass]), C = () => {
      var $;
      u.value && (($ = m.value) == null || $.handleScroll(u.value), n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function g($, T) {
      zt($) ? u.value.scrollTo($) : it($) && it(T) && u.value.scrollTo($, T);
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
      h3.value = R / ($ - R) / (V / ($ - V)), v.value = z / (T - z) / (F / (T - F)), p.value = V + sr < $ ? `${V}px` : "", f.value = F + sr < T ? `${F}px` : "";
    };
    return watch(() => r.noresize, ($) => {
      $ ? (o == null || o(), l == null || l()) : ({ stop: o } = Nn(c, S), l = hn("resize", S));
    }, { immediate: true }), watch(() => [r.maxHeight, r.height], () => {
      r.native || nextTick(() => {
        var $;
        S(), u.value && (($ = m.value) == null || $.handleScroll(u.value));
      });
    }), provide(mc, reactive({
      scrollbarElement: s,
      wrapElement: u
    })), onMounted(() => {
      r.native || nextTick(() => {
        S();
      });
    }), onUpdated(() => S()), t({
      wrapRef: u,
      update: S,
      scrollTo: g,
      setScrollTop: b,
      setScrollLeft: k,
      handleScroll: C
    }), ($, T) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: normalizeClass(unref(a).b())
    }, [
      createBaseVNode("div", {
        ref_key: "wrapRef",
        ref: u,
        class: normalizeClass(unref(y)),
        style: normalizeStyle(unref(d)),
        onScroll: C
      }, [
        (openBlock(), createBlock(resolveDynamicComponent($.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: normalizeClass(unref(w)),
          style: normalizeStyle($.viewStyle)
        }, {
          default: withCtx(() => [
            renderSlot($.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      $.native ? createCommentVNode("v-if", true) : (openBlock(), createBlock(jw, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: p.value,
        width: f.value,
        always: $.always,
        "ratio-x": v.value,
        "ratio-y": h3.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var Gw = Ae(Uw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
var Tr = Ht(Gw);
var Hl = Symbol("popper");
var gc = Symbol("popperContent");
var Xw = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
var bc = Me({
  role: {
    type: String,
    values: Xw,
    default: "tooltip"
  }
});
var Zw = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
var Jw = defineComponent({
  ...Zw,
  props: bc,
  setup(e, { expose: t }) {
    const n = e, r = ref(), a = ref(), o = ref(), l = ref(), s = computed(() => n.role), u = {
      triggerRef: r,
      popperInstanceRef: a,
      contentRef: o,
      referenceRef: l,
      role: s
    };
    return t(u), provide(Hl, u), (c, f) => renderSlot(c.$slots, "default");
  }
});
var Qw = Ae(Jw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
var yc = Me({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
var e2 = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
var t2 = defineComponent({
  ...e2,
  props: yc,
  setup(e, { expose: t }) {
    const n = e, r = we("popper"), { arrowOffset: a, arrowRef: o, arrowStyle: l } = inject(gc, void 0);
    return watch(() => n.arrowOffset, (s) => {
      a.value = s;
    }), onBeforeUnmount(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (s, u) => (openBlock(), createElementBlock("span", {
      ref_key: "arrowRef",
      ref: o,
      class: normalizeClass(unref(r).e("arrow")),
      style: normalizeStyle(unref(l)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var n2 = Ae(t2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
var bo = "ElOnlyChild";
var r2 = defineComponent({
  name: bo,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const a = inject(dc), o = C1((r = a == null ? void 0 : a.setForwardRef) != null ? r : fr);
    return () => {
      var l;
      const s = (l = t.default) == null ? void 0 : l.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return nt(bo, "requires exact only one valid child."), null;
      const u = wc(s);
      return u ? withDirectives(cloneVNode(u, n), [[o]]) : (nt(bo, "no valid child node found"), null);
    };
  }
});
function wc(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (zt(n))
      switch (n.type) {
        case Comment:
          continue;
        case Text:
        case "svg":
          return vi(n);
        case Fragment:
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
  return createVNode("span", {
    class: t.e("content")
  }, [e]);
}
var Cc = Me({
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
});
var a2 = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
var o2 = defineComponent({
  ...a2,
  props: Cc,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: a } = inject(Hl, void 0);
    w1(a);
    const o = computed(() => s.value ? n.id : void 0), l = computed(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = computed(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), u = computed(() => s.value ? `${n.open}` : void 0);
    let c;
    return onMounted(() => {
      watch(() => n.virtualRef, (f) => {
        f && (a.value = vn(f));
      }, {
        immediate: true
      }), watch(a, (f, p) => {
        c == null || c(), c = void 0, vr(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var h3;
          const v = n[m];
          v && (f.addEventListener(m.slice(2).toLowerCase(), v), (h3 = p == null ? void 0 : p.removeEventListener) == null || h3.call(p, m.slice(2).toLowerCase(), v));
        }), c = watch([o, l, s, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h3, v) => {
            eo(m[v]) ? f.removeAttribute(h3) : f.setAttribute(h3, m[v]);
          });
        }, { immediate: true })), vr(p) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => p.removeAttribute(m));
      }, {
        immediate: true
      });
    }), onBeforeUnmount(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: a
    }), (f, p) => f.virtualTriggering ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(r2), mergeProps({ key: 0 }, f.$attrs, {
      "aria-controls": unref(o),
      "aria-describedby": unref(l),
      "aria-expanded": unref(u),
      "aria-haspopup": unref(s)
    }), {
      default: withCtx(() => [
        renderSlot(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var l2 = Ae(o2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
var yo = "focus-trap.focus-after-trapped";
var wo = "focus-trap.focus-after-released";
var s2 = "focus-trap.focusout-prevented";
var hi = {
  cancelable: true,
  bubbles: false
};
var i2 = {
  cancelable: true,
  bubbles: false
};
var mi = "focusAfterTrapped";
var gi = "focusAfterReleased";
var u2 = Symbol("elFocusTrap");
var Wl = ref();
var so = ref(0);
var jl = ref(0);
var ha = 0;
var Sc = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const a = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || a ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
};
var bi = (e, t) => {
  for (const n of e)
    if (!c2(n, t))
      return n;
};
var c2 = (e, t) => {
  if (false)
    return false;
  if (getComputedStyle(e).visibility === "hidden")
    return true;
  for (; e; ) {
    if (t && e === t)
      return false;
    if (getComputedStyle(e).display === "none")
      return true;
    e = e.parentElement;
  }
  return false;
};
var d2 = (e) => {
  const t = Sc(e), n = bi(t, e), r = bi(t.reverse(), e);
  return [n, r];
};
var f2 = (e) => e instanceof HTMLInputElement && "select" in e;
var Pn = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }), jl.value = window.performance.now(), e !== n && f2(e) && t && e.select();
  }
};
function yi(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
var p2 = () => {
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
};
var v2 = (e, t = false) => {
  const n = document.activeElement;
  for (const r of e)
    if (Pn(r, t), document.activeElement !== n)
      return;
};
var wi = p2();
var h2 = () => so.value > jl.value;
var ma = () => {
  Wl.value = "pointer", so.value = window.performance.now();
};
var Ci = () => {
  Wl.value = "keyboard", so.value = window.performance.now();
};
var m2 = () => (onMounted(() => {
  ha === 0 && (document.addEventListener("mousedown", ma), document.addEventListener("touchstart", ma), document.addEventListener("keydown", Ci)), ha++;
}), onBeforeUnmount(() => {
  ha--, ha <= 0 && (document.removeEventListener("mousedown", ma), document.removeEventListener("touchstart", ma), document.removeEventListener("keydown", Ci));
}), {
  focusReason: Wl,
  lastUserFocusTimestamp: so,
  lastAutomatedFocusTimestamp: jl
});
var ga = (e) => new CustomEvent(s2, {
  ...i2,
  detail: e
});
var g2 = defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
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
    const n = ref();
    let r, a;
    const { focusReason: o } = m2();
    m1((v) => {
      e.trapped && !l.paused && t("release-requested", v);
    });
    const l = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }, s = (v) => {
      if (!e.loop && !e.trapped || l.paused)
        return;
      const { key: d, altKey: y, ctrlKey: w, metaKey: C, currentTarget: g, shiftKey: b } = v, { loop: k } = e, S = d === Le.tab && !y && !w && !C, $ = document.activeElement;
      if (S && $) {
        const T = g, [R, z] = d2(T);
        if (R && z) {
          if (!b && $ === z) {
            const F = ga({
              focusReason: o.value
            });
            t("focusout-prevented", F), F.defaultPrevented || (v.preventDefault(), k && Pn(R, true));
          } else if (b && [R, T].includes($)) {
            const F = ga({
              focusReason: o.value
            });
            t("focusout-prevented", F), F.defaultPrevented || (v.preventDefault(), k && Pn(z, true));
          }
        } else if ($ === T) {
          const F = ga({
            focusReason: o.value
          });
          t("focusout-prevented", F), F.defaultPrevented || v.preventDefault();
        }
      }
    };
    provide(u2, {
      focusTrapRef: n,
      onKeydown: s
    }), watch(() => e.focusTrapEl, (v) => {
      v && (n.value = v);
    }, { immediate: true }), watch([n], ([v], [d]) => {
      v && (v.addEventListener("keydown", s), v.addEventListener("focusin", f), v.addEventListener("focusout", p)), d && (d.removeEventListener("keydown", s), d.removeEventListener("focusin", f), d.removeEventListener("focusout", p));
    });
    const u = (v) => {
      t(mi, v);
    }, c = (v) => t(gi, v), f = (v) => {
      const d = unref(n);
      if (!d)
        return;
      const y = v.target, w = v.relatedTarget, C = y && d.contains(y);
      e.trapped || w && d.contains(w) || (r = w), C && t("focusin", v), !l.paused && e.trapped && (C ? a = y : Pn(a, true));
    }, p = (v) => {
      const d = unref(n);
      if (!(l.paused || !d))
        if (e.trapped) {
          const y = v.relatedTarget;
          !eo(y) && !d.contains(y) && setTimeout(() => {
            if (!l.paused && e.trapped) {
              const w = ga({
                focusReason: o.value
              });
              t("focusout-prevented", w), w.defaultPrevented || Pn(a, true);
            }
          }, 0);
        } else {
          const y = v.target;
          y && d.contains(y) || t("focusout", v);
        }
    };
    async function m() {
      await nextTick();
      const v = unref(n);
      if (v) {
        wi.push(l);
        const d = v.contains(document.activeElement) ? r : document.activeElement;
        if (r = d, !v.contains(d)) {
          const w = new Event(yo, hi);
          v.addEventListener(yo, u), v.dispatchEvent(w), w.defaultPrevented || nextTick(() => {
            let C = e.focusStartEl;
            kt(C) || (Pn(C), document.activeElement !== C && (C = "first")), C === "first" && v2(Sc(v), true), (document.activeElement === d || C === "container") && Pn(v);
          });
        }
      }
    }
    function h3() {
      const v = unref(n);
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
    return onMounted(() => {
      e.trapped && m(), watch(() => e.trapped, (v) => {
        v ? m() : h3();
      });
    }), onBeforeUnmount(() => {
      e.trapped && h3();
    }), {
      onKeydown: s
    };
  }
});
function b2(e, t, n, r, a, o) {
  return renderSlot(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var y2 = Ae(g2, [["render", b2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
var w2 = ["fixed", "absolute"];
var C2 = Me({
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
    default: true
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
});
var kc = Me({
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
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
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
    default: true
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
});
var S2 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
var k2 = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: a } = e, o = {
    placement: n,
    strategy: r,
    ...a,
    modifiers: [..._2(e), ...t]
  };
  return E2(o, a == null ? void 0 : a.modifiers), o;
};
var $2 = (e) => {
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
var T2 = 0;
var O2 = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: a } = inject(Hl, void 0), o = ref(), l = ref(), s = computed(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = computed(() => {
    var w;
    const C = unref(o), g = (w = unref(l)) != null ? w : T2;
    return {
      name: "arrow",
      enabled: !Qg(C),
      options: {
        element: C,
        padding: g
      }
    };
  }), c = computed(() => ({
    onFirstUpdate: () => {
      v();
    },
    ...k2(e, [
      unref(u),
      unref(s)
    ])
  })), f = computed(() => $2(e.referenceEl) || unref(r)), { attributes: p, state: m, styles: h3, update: v, forceUpdate: d, instanceRef: y } = p1(f, n, c);
  return watch(y, (w) => t.value = w), onMounted(() => {
    watch(() => {
      var w;
      return (w = unref(f)) == null ? void 0 : w.getBoundingClientRect();
    }, () => {
      v();
    });
  }), {
    attributes: p,
    arrowRef: o,
    contentRef: n,
    instanceRef: y,
    state: m,
    styles: h3,
    role: a,
    forceUpdate: d,
    update: v
  };
};
var P2 = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: a } = fc(), o = we("popper"), l = computed(() => unref(t).popper), s = ref(e.zIndex || a()), u = computed(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), c = computed(() => [
    { zIndex: unref(s) },
    unref(n).popper,
    e.popperStyle || {}
  ]), f = computed(() => r.value === "dialog" ? "false" : void 0), p = computed(() => unref(n).arrow || {});
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
};
var x2 = (e, t) => {
  const n = ref(false), r = ref();
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
      e.visible && !n.value && (c.target && (r.value = c.target), n.value = true);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = false);
    },
    onReleaseRequested: () => {
      n.value = false, t("close");
    }
  };
};
var M2 = defineComponent({
  name: "ElPopperContent"
});
var A2 = defineComponent({
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
    } = x2(r, n), { attributes: p, arrowRef: m, contentRef: h3, styles: v, instanceRef: d, role: y, update: w } = O2(r), {
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
    }), T = inject(Xn, void 0), R = ref();
    provide(gc, {
      arrowStyle: g,
      arrowRef: m,
      arrowOffset: R
    }), T && (T.addInputId || T.removeInputId) && provide(Xn, {
      ...T,
      addInputId: fr,
      removeInputId: fr
    });
    let z;
    const V = (N = true) => {
      w(), N && $();
    }, F = () => {
      V(false), r.visible && r.focusOnShow ? o.value = true : r.visible === false && (o.value = false);
    };
    return onMounted(() => {
      watch(() => r.triggerTargetEl, (N, B) => {
        z == null || z(), z = void 0;
        const W = unref(N || h3.value), q = unref(B || h3.value);
        vr(W) && (z = watch([y, () => r.ariaLabel, C, () => r.id], (M) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, _) => {
            eo(M[_]) ? W.removeAttribute(H) : W.setAttribute(H, M[_]);
          });
        }, { immediate: true })), q !== W && vr(q) && ["role", "aria-label", "aria-modal", "id"].forEach((M) => {
          q.removeAttribute(M);
        });
      }, { immediate: true }), watch(() => r.visible, F, { immediate: true });
    }), onBeforeUnmount(() => {
      z == null || z(), z = void 0;
    }), t({
      popperContentRef: h3,
      popperInstanceRef: d,
      updatePopper: V,
      contentStyle: S
    }), (N, B) => (openBlock(), createElementBlock("div", mergeProps({
      ref_key: "contentRef",
      ref: h3
    }, unref(b), {
      style: unref(S),
      class: unref(k),
      tabindex: "-1",
      onMouseenter: B[0] || (B[0] = (W) => N.$emit("mouseenter", W)),
      onMouseleave: B[1] || (B[1] = (W) => N.$emit("mouseleave", W))
    }), [
      createVNode(unref(y2), {
        trapped: unref(o),
        "trap-on-focus-in": true,
        "focus-trap-el": unref(h3),
        "focus-start-el": unref(a),
        onFocusAfterTrapped: unref(s),
        onFocusAfterReleased: unref(l),
        onFocusin: unref(u),
        onFocusoutPrevented: unref(c),
        onReleaseRequested: unref(f)
      }, {
        default: withCtx(() => [
          renderSlot(N.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var N2 = Ae(A2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
var R2 = Ht(Qw);
var io = Symbol("elTooltip");
var uo = Me({
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
    default: false
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
    default: true
  },
  disabled: Boolean
});
var $c = Me({
  ...Cc,
  disabled: Boolean,
  trigger: {
    type: be([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: be(Array),
    default: () => [Le.enter, Le.space]
  }
});
var {
  useModelToggleProps: I2,
  useModelToggleEmits: L2,
  useModelToggle: D2
} = Uu("visible");
var F2 = Me({
  ...bc,
  ...I2,
  ...uo,
  ...$c,
  ...yc,
  showArrow: {
    type: Boolean,
    default: true
  }
});
var B2 = [
  ...L2,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
var z2 = (e, t) => tt(e) ? e.includes(t) : e === t;
var ar = (e, t, n) => (r) => {
  z2(unref(e), t) && n(r);
};
var V2 = defineComponent({
  name: "ElTooltipTrigger"
});
var H2 = defineComponent({
  ...V2,
  props: $c,
  setup(e, { expose: t }) {
    const n = e, r = we("tooltip"), { controlled: a, id: o, open: l, onOpen: s, onClose: u, onToggle: c } = inject(io, void 0), f = ref(null), p = () => {
      if (unref(a) || n.disabled)
        return true;
    }, m = toRef(n, "trigger"), h3 = pn(p, ar(m, "hover", s)), v = pn(p, ar(m, "hover", u)), d = pn(p, ar(m, "click", (b) => {
      b.button === 0 && c(b);
    })), y = pn(p, ar(m, "focus", s)), w = pn(p, ar(m, "focus", u)), C = pn(p, ar(m, "contextmenu", (b) => {
      b.preventDefault(), c(b);
    })), g = pn(p, (b) => {
      const { code: k } = b;
      n.triggerKeys.includes(k) && (b.preventDefault(), c(b));
    });
    return t({
      triggerRef: f
    }), (b, k) => (openBlock(), createBlock(unref(l2), {
      id: unref(o),
      "virtual-ref": b.virtualRef,
      open: unref(l),
      "virtual-triggering": b.virtualTriggering,
      class: normalizeClass(unref(r).e("trigger")),
      onBlur: unref(w),
      onClick: unref(d),
      onContextmenu: unref(C),
      onFocus: unref(y),
      onMouseenter: unref(h3),
      onMouseleave: unref(v),
      onKeydown: unref(g)
    }, {
      default: withCtx(() => [
        renderSlot(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var W2 = Ae(H2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
var j2 = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
var K2 = defineComponent({
  ...j2,
  props: uo,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = uc(), a = we("tooltip"), o = ref(null), l = ref(false), {
      controlled: s,
      id: u,
      open: c,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: h3,
      onHide: v,
      onBeforeShow: d,
      onBeforeHide: y
    } = inject(io, void 0), w = computed(() => n.transition || `${a.namespace.value}-fade-in-linear`), C = computed(() => false ? true : n.persistent);
    onBeforeUnmount(() => {
      l.value = true;
    });
    const g = computed(() => unref(C) ? true : unref(c)), b = computed(() => n.disabled ? false : unref(c)), k = computed(() => n.appendTo || r.value), S = computed(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), $ = computed(() => !unref(c)), T = () => {
      v();
    }, R = () => {
      if (unref(s))
        return true;
    }, z = pn(R, () => {
      n.enterable && unref(f) === "hover" && m();
    }), V = pn(R, () => {
      unref(f) === "hover" && p();
    }), F = () => {
      var M, H;
      (H = (M = o.value) == null ? void 0 : M.updatePopper) == null || H.call(M), d == null || d();
    }, N = () => {
      y == null || y();
    }, B = () => {
      h3(), q = au(computed(() => {
        var M;
        return (M = o.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (unref(s))
          return;
        unref(f) !== "hover" && p();
      });
    }, W = () => {
      n.virtualTriggering || p();
    };
    let q;
    return watch(() => unref(c), (M) => {
      M || q == null || q();
    }, {
      flush: "post"
    }), watch(() => n.content, () => {
      var M, H;
      (H = (M = o.value) == null ? void 0 : M.updatePopper) == null || H.call(M);
    }), t({
      contentRef: o
    }), (M, H) => (openBlock(), createBlock(Teleport, {
      disabled: !M.teleported,
      to: unref(k)
    }, [
      createVNode(Transition, {
        name: unref(w),
        onAfterLeave: T,
        onBeforeEnter: F,
        onAfterEnter: B,
        onBeforeLeave: N
      }, {
        default: withCtx(() => [
          unref(g) ? withDirectives((openBlock(), createBlock(unref(N2), mergeProps({
            key: 0,
            id: unref(u),
            ref_key: "contentRef",
            ref: o
          }, M.$attrs, {
            "aria-label": M.ariaLabel,
            "aria-hidden": unref($),
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
            "popper-style": [M.popperStyle, unref(S)],
            "reference-el": M.referenceEl,
            "trigger-target-el": M.triggerTargetEl,
            visible: unref(b),
            "z-index": M.zIndex,
            onMouseenter: unref(z),
            onMouseleave: unref(V),
            onBlur: W,
            onClose: unref(p)
          }), {
            default: withCtx(() => [
              l.value ? createCommentVNode("v-if", true) : renderSlot(M.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [vShow, unref(b)]
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var q2 = Ae(K2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
var Y2 = ["innerHTML"];
var U2 = { key: 1 };
var G2 = defineComponent({
  name: "ElTooltip"
});
var X2 = defineComponent({
  ...G2,
  props: F2,
  emits: B2,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    b1();
    const a = oo(), o = ref(), l = ref(), s = () => {
      var w;
      const C = unref(o);
      C && ((w = C.popperInstanceRef) == null || w.update());
    }, u = ref(false), c = ref(), { show: f, hide: p, hasUpdateHandler: m } = D2({
      indicator: u,
      toggleReason: c
    }), { onOpen: h3, onClose: v } = cc({
      showAfter: toRef(r, "showAfter"),
      hideAfter: toRef(r, "hideAfter"),
      autoClose: toRef(r, "autoClose"),
      open: f,
      close: p
    }), d = computed(() => Jt(r.visible) && !m.value);
    provide(io, {
      controlled: d,
      id: a,
      open: readonly(u),
      trigger: toRef(r, "trigger"),
      onOpen: (w) => {
        h3(w);
      },
      onClose: (w) => {
        v(w);
      },
      onToggle: (w) => {
        unref(u) ? v(w) : h3(w);
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
    }), watch(() => r.disabled, (w) => {
      w && u.value && (u.value = false);
    });
    const y = () => {
      var w, C;
      const g = (C = (w = l.value) == null ? void 0 : w.contentRef) == null ? void 0 : C.popperContentRef;
      return g && g.contains(document.activeElement);
    };
    return onDeactivated(() => u.value && p()), t({
      popperRef: o,
      contentRef: l,
      isFocusInsideContent: y,
      updatePopper: s,
      onOpen: h3,
      onClose: v,
      hide: p
    }), (w, C) => (openBlock(), createBlock(unref(R2), {
      ref_key: "popperRef",
      ref: o,
      role: w.role
    }, {
      default: withCtx(() => [
        createVNode(W2, {
          disabled: w.disabled,
          trigger: w.trigger,
          "trigger-keys": w.triggerKeys,
          "virtual-ref": w.virtualRef,
          "virtual-triggering": w.virtualTriggering
        }, {
          default: withCtx(() => [
            w.$slots.default ? renderSlot(w.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        createVNode(q2, {
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
          default: withCtx(() => [
            renderSlot(w.$slots, "content", {}, () => [
              w.rawContent ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: w.content
              }, null, 8, Y2)) : (openBlock(), createElementBlock("span", U2, toDisplayString(w.content), 1))
            ]),
            w.showArrow ? (openBlock(), createBlock(unref(n2), {
              key: 0,
              "arrow-offset": w.arrowOffset
            }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Z2 = Ae(X2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
var Zr = Ht(Z2);
var _c = Symbol("buttonGroupContextKey");
var J2 = (e, t) => {
  Yu({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => e.type === "text"));
  const n = inject(_c, void 0), r = P1("button"), { form: a } = _n(), o = Ut(computed(() => n == null ? void 0 : n.size)), l = ia(), s = ref(), u = useSlots(), c = computed(() => e.type || (n == null ? void 0 : n.type) || ""), f = computed(() => {
    var v, d, y;
    return (y = (d = e.autoInsertSpace) != null ? d : (v = r.value) == null ? void 0 : v.autoInsertSpace) != null ? y : false;
  }), p = computed(() => e.tag === "button" ? {
    ariaDisabled: l.value || e.loading,
    disabled: l.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = computed(() => {
    var v;
    const d = (v = u.default) == null ? void 0 : v.call(u);
    if (f.value && (d == null ? void 0 : d.length) === 1) {
      const y = d[0];
      if ((y == null ? void 0 : y.type) === Text) {
        const w = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(w.trim());
      }
    }
    return false;
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
};
var Q2 = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
var eC = ["button", "submit", "reset"];
var qo = Me({
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
});
var tC = {
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
  return Lt(e) / 255;
}
function Lt(e) {
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
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, o = null, l = false, s = false;
  return typeof e == "string" && (e = pC(e)), typeof e == "object" && (dn(e.r) && dn(e.g) && dn(e.b) ? (t = aC(e.r, e.g, e.b), l = true, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : dn(e.h) && dn(e.s) && dn(e.v) ? (r = ya(e.s), a = ya(e.v), t = lC(e.h, r, a), l = true, s = "hsv") : dn(e.h) && dn(e.s) && dn(e.l) && (r = ya(e.s), o = ya(e.l), t = oC(e.h, r, o), l = true, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ec(n), {
    ok: l,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var dC = "[-\\+]?\\d+%?";
var fC = "[-\\+]?\\d*\\.\\d+%?";
var Mn = "(?:".concat(fC, ")|(?:").concat(dC, ")");
var So = "[\\s|\\(]+(".concat(Mn, ")[,|\\s]+(").concat(Mn, ")[,|\\s]+(").concat(Mn, ")\\s*\\)?");
var ko = "[\\s|\\(]+(".concat(Mn, ")[,|\\s]+(").concat(Mn, ")[,|\\s]+(").concat(Mn, ")[,|\\s]+(").concat(Mn, ")\\s*\\)?");
var Xt = {
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
    return false;
  var t = false;
  if (Yo[e])
    e = Yo[e], t = true;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Xt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Xt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Xt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Xt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Xt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Xt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Xt.hex8.exec(e), n ? {
    r: Lt(n[1]),
    g: Lt(n[2]),
    b: Lt(n[3]),
    a: _i(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Xt.hex6.exec(e), n ? {
    r: Lt(n[1]),
    g: Lt(n[2]),
    b: Lt(n[3]),
    format: t ? "name" : "hex"
  } : (n = Xt.hex4.exec(e), n ? {
    r: Lt(n[1] + n[1]),
    g: Lt(n[2] + n[2]),
    b: Lt(n[3] + n[3]),
    a: _i(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Xt.hex3.exec(e), n ? {
    r: Lt(n[1] + n[1]),
    g: Lt(n[2] + n[2]),
    b: Lt(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : false)))))))));
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
      return t === void 0 && (t = false), $i(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = false), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = false), sC(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = false), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = false), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
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
        return false;
      for (var t = "#" + $i(this.r, this.g, this.b, false), n = 0, r = Object.entries(Yo); n < r.length; n++) {
        var a = r[n], o = a[0], l = a[1];
        if (t === l)
          return o;
      }
      return false;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = false, a = this.a < 1 && this.a >= 0, o = !n && a && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(true)), t === "hex4" && (r = this.toHex8String(true)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
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
  return computed(() => {
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
var mC = defineComponent({
  name: "ElButton"
});
var gC = defineComponent({
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
    }), (h3, v) => (openBlock(), createBlock(resolveDynamicComponent(h3.tag), mergeProps({
      ref_key: "_ref",
      ref: l
    }, unref(f), {
      class: [
        unref(o).b(),
        unref(o).m(unref(u)),
        unref(o).m(unref(s)),
        unref(o).is("disabled", unref(c)),
        unref(o).is("loading", h3.loading),
        unref(o).is("plain", h3.plain),
        unref(o).is("round", h3.round),
        unref(o).is("circle", h3.circle),
        unref(o).is("text", h3.text),
        unref(o).is("link", h3.link),
        unref(o).is("has-bg", h3.bg)
      ],
      style: unref(a),
      onClick: unref(m)
    }), {
      default: withCtx(() => [
        h3.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          h3.$slots.loading ? renderSlot(h3.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(Ie), {
            key: 1,
            class: normalizeClass(unref(o).is("loading"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(h3.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : h3.icon || h3.$slots.icon ? (openBlock(), createBlock(unref(Ie), { key: 1 }, {
          default: withCtx(() => [
            h3.icon ? (openBlock(), createBlock(resolveDynamicComponent(h3.icon), { key: 0 })) : renderSlot(h3.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : createCommentVNode("v-if", true),
        h3.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ [unref(o).em("text", "expand")]: unref(p) })
        }, [
          renderSlot(h3.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var bC = Ae(gC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
var yC = {
  size: qo.size,
  type: qo.type
};
var wC = defineComponent({
  name: "ElButtonGroup"
});
var CC = defineComponent({
  ...wC,
  props: yC,
  setup(e) {
    const t = e;
    provide(_c, reactive({
      size: toRef(t, "size"),
      type: toRef(t, "type")
    }));
    const n = we("button");
    return (r, a) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`${unref(n).b("group")}`)
    }, [
      renderSlot(r.$slots, "default")
    ], 2));
  }
});
var Tc = Ae(CC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
var gn = Ht(bC, {
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
    var n = 1e3, r = 6e4, a = 36e5, o = "millisecond", l = "second", s = "minute", u = "hour", c = "day", f = "week", p = "month", m = "quarter", h3 = "year", v = "date", d = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
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
      return { M: p, y: h3, w: f, d: c, D: v, h: u, m: s, s: l, ms: o, Q: m }[N] || String(N || "").toLowerCase().replace(/s$/, "");
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
        var D = B.name;
        S[D] = B, M = D;
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
        this.$L = T(W.locale, null, true), this.parse(W);
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
              var D = _[2] - 1 || 0, U = (_[7] || "0").substring(0, 3);
              return H ? new Date(Date.UTC(_[1], D, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, U)) : new Date(_[1], D, _[3] || 1, _[4] || 0, _[5] || 0, _[6] || 0, U);
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
        var M = this, H = !!z.u(q) || q, _ = z.p(W), D = function(le, ue) {
          var ve = z.w(M.$u ? Date.UTC(M.$y, ue, le) : new Date(M.$y, ue, le), M);
          return H ? ve : ve.endOf(c);
        }, U = function(le, ue) {
          return z.w(M.toDate()[le].apply(M.toDate("s"), (H ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ue)), M);
        }, I = this.$W, G = this.$M, ne = this.$D, he = "set" + (this.$u ? "UTC" : "");
        switch (_) {
          case h3:
            return H ? D(1, 0) : D(31, 11);
          case p:
            return H ? D(1, G) : D(0, G + 1);
          case f:
            var ge = this.$locale().weekStart || 0, se = (I < ge ? I + 7 : I) - ge;
            return D(H ? ne - se : ne + (6 - se), G);
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
        return this.startOf(W, false);
      }, B.$set = function(W, q) {
        var M, H = z.p(W), _ = "set" + (this.$u ? "UTC" : ""), D = (M = {}, M[c] = _ + "Date", M[v] = _ + "Date", M[p] = _ + "Month", M[h3] = _ + "FullYear", M[u] = _ + "Hours", M[s] = _ + "Minutes", M[l] = _ + "Seconds", M[o] = _ + "Milliseconds", M)[H], U = H === c ? this.$D + (q - this.$W) : q;
        if (H === p || H === h3) {
          var I = this.clone().set(v, 1);
          I.$d[D](U), I.init(), this.$d = I.set(v, Math.min(this.$D, I.daysInMonth())).$d;
        } else
          D && this.$d[D](U);
        return this.init(), this;
      }, B.set = function(W, q) {
        return this.clone().$set(W, q);
      }, B.get = function(W) {
        return this[z.p(W)]();
      }, B.add = function(W, q) {
        var M, H = this;
        W = Number(W);
        var _ = z.p(q), D = function(G) {
          var ne = R(H);
          return z.w(ne.date(ne.date() + Math.round(G * W)), H);
        };
        if (_ === p)
          return this.set(p, this.$M + W);
        if (_ === h3)
          return this.set(h3, this.$y + W);
        if (_ === c)
          return D(1);
        if (_ === f)
          return D(7);
        var U = (M = {}, M[s] = r, M[u] = a, M[l] = n, M)[_] || 1, I = this.$d.getTime() + W * U;
        return z.w(I, this);
      }, B.subtract = function(W, q) {
        return this.add(-1 * W, q);
      }, B.format = function(W) {
        var q = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || d;
        var H = W || "YYYY-MM-DDTHH:mm:ssZ", _ = z.z(this), D = this.$H, U = this.$m, I = this.$M, G = M.weekdays, ne = M.months, he = M.meridiem, ge = function(ue, ve, _e, Pe) {
          return ue && (ue[ve] || ue(q, H)) || _e[ve].slice(0, Pe);
        }, se = function(ue) {
          return z.s(D % 12 || 12, ue, "0");
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
                return String(D);
              case "HH":
                return z.s(D, 2, "0");
              case "h":
                return se(1);
              case "hh":
                return se(2);
              case "a":
                return le(D, U, true);
              case "A":
                return le(D, U, false);
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
        var H, _ = this, D = z.p(q), U = R(W), I = (U.utcOffset() - this.utcOffset()) * r, G = this - U, ne = function() {
          return z.m(_, U);
        };
        switch (D) {
          case h3:
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
        var M = this.clone(), H = T(W, q, true);
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
    return R.prototype = F, [["$ms", o], ["$s", l], ["$m", s], ["$H", u], ["$W", c], ["$M", p], ["$y", h3], ["$D", v]].forEach(function(N) {
      F[N[1]] = function(B) {
        return this.$g(B, N[0], N[1]);
      };
    }), R.extend = function(N, B) {
      return N.$i || (N(B, V, R), N.$i = true), R;
    }, R.locale = T, R.isDayjs = $, R.unix = function(N) {
      return R(1e3 * N);
    }, R.en = S[k], R.Ls = S, R.p = {}, R;
  });
})(Oc);
var SC = Oc.exports;
var xe = ln(SC);
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
    }, h3 = { A: [l, function(d) {
      this.afternoon = m(d, false);
    }], a: [l, function(d) {
      this.afternoon = m(d, true);
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
        var k = C[b], S = h3[k], $ = S && S[0], T = S && S[1];
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
            var D = H.hours;
            _ ? D < 12 && (H.hours += 12) : D === 12 && (H.hours = 0), delete H.afternoon;
          }
        }(z), z;
      };
    }
    return function(d, y, w) {
      w.p.customParseFormat = true, d && d.parseTwoDigitYear && (u = d.parseTwoDigitYear);
      var C = y.prototype, g = C.parse;
      C.parse = function(b) {
        var k = b.date, S = b.utc, $ = b.args;
        this.$u = S;
        var T = $[1];
        if (typeof T == "string") {
          var R = $[2] === true, z = $[3] === true, V = R || z, F = $[2];
          z && (F = $[2]), s = this.$locale(), !R && F && (s = w.Ls[F]), this.$d = function(q, M, H) {
            try {
              if (["x", "X"].indexOf(M) > -1)
                return new Date((M === "X" ? 1e3 : 1) * q);
              var _ = v(M)(q), D = _.year, U = _.month, I = _.day, G = _.hours, ne = _.minutes, he = _.seconds, ge = _.milliseconds, se = _.zone, le = /* @__PURE__ */ new Date(), ue = I || (D || U ? 1 : le.getDate()), ve = D || le.getFullYear(), _e = 0;
              D && !U || (_e = U > 0 ? U - 1 : le.getMonth());
              var Pe = G || 0, He = ne || 0, We = he || 0, Ue = ge || 0;
              return se ? new Date(Date.UTC(ve, _e, ue, Pe, He, We, Ue + 60 * se.offset * 1e3)) : H ? new Date(Date.UTC(ve, _e, ue, Pe, He, We, Ue)) : new Date(ve, _e, ue, Pe, He, We, Ue);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(k, T, S), this.init(), F && F !== true && (this.$L = this.locale(F).$L), V && k != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
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
var $C = ln(kC);
var Ei = ["hours", "minutes", "seconds"];
var Ti = "HH:mm:ss";
var lr = "YYYY-MM-DD";
var _C = {
  date: lr,
  dates: lr,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${lr} ${Ti}`,
  monthrange: "YYYY-MM",
  daterange: lr,
  datetimerange: `${lr} ${Ti}`
};
var $o = (e, t) => [
  e > 0 ? e - 1 : void 0,
  e,
  e < t ? e + 1 : void 0
];
var xc = (e) => Array.from(Array.from({ length: e }).keys());
var Mc = (e) => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
var Ac = (e) => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
var Oi = function(e, t) {
  const n = us(e), r = us(t);
  return n && r ? e.getTime() === t.getTime() : !n && !r ? e === t : false;
};
var Pi = function(e, t) {
  const n = tt(e), r = tt(t);
  return n && r ? e.length !== t.length ? false : e.every((a, o) => Oi(a, t[o])) : !n && !r ? Oi(e, t) : false;
};
var xi = function(e, t, n) {
  const r = qr(t) || t === "x" ? xe(e).locale(n) : xe(e, t).locale(n);
  return r.isValid() ? r : void 0;
};
var Mi = function(e, t, n) {
  return qr(t) ? e : t === "x" ? +e : xe(e).locale(n).format(t);
};
var _o = (e, t) => {
  var n;
  const r = [], a = t == null ? void 0 : t();
  for (let o = 0; o < e; o++)
    r.push((n = a == null ? void 0 : a.includes(o)) != null ? n : false);
  return r;
};
var Nc = Me({
  disabledHours: {
    type: be(Function)
  },
  disabledMinutes: {
    type: be(Function)
  },
  disabledSeconds: {
    type: be(Function)
  }
});
var EC = Me({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
});
var Rc = Me({
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
    default: true
  },
  clearIcon: {
    type: be([String, Object]),
    default: aa
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: be([String, Object]),
    default: ""
  },
  size: $n,
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
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
    default: false
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
    default: false
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
    default: true
  },
  unlinkPanels: Boolean
});
var TC = ["id", "name", "placeholder", "value", "disabled", "readonly"];
var OC = ["id", "name", "placeholder", "value", "disabled", "readonly"];
var PC = defineComponent({
  name: "Picker"
});
var xC = defineComponent({
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
    const r = e, a = useAttrs(), { lang: o } = ot(), l = we("date"), s = we("input"), u = we("range"), { form: c, formItem: f } = _n(), p = inject("ElPopperOptions", {}), m = ref(), h3 = ref(), v = ref(false), d = ref(false), y = ref(null);
    let w = false, C = false;
    const g = computed(() => [
      l.b("editor"),
      l.bm("editor", r.type),
      s.e("wrapper"),
      l.is("disabled", I.value),
      l.is("active", v.value),
      u.b("editor"),
      rt ? u.bm("editor", rt.value) : "",
      a.class
    ]), b = computed(() => [
      s.e("icon"),
      u.e("close-icon"),
      ue.value ? "" : u.e("close-icon--hidden")
    ]);
    watch(v, (P) => {
      P ? nextTick(() => {
        P && (y.value = r.modelValue);
      }) : (Se.value = null, nextTick(() => {
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
    }, T = computed(() => {
      if (h3.value) {
        const P = je.value ? h3.value : h3.value.$el;
        return Array.from(P.querySelectorAll("input"));
      }
      return [];
    }), R = (P, ie, Ce) => {
      const De = T.value;
      De.length && (!Ce || Ce === "min" ? (De[0].setSelectionRange(P, ie), De[0].focus()) : Ce === "max" && (De[1].setSelectionRange(P, ie), De[1].focus()));
    }, z = () => {
      H(true, true), nextTick(() => {
        C = false;
      });
    }, V = (P = "", ie = false) => {
      ie || (C = true), v.value = ie;
      let Ce;
      tt(P) ? Ce = P.map((De) => De.toDate()) : Ce = P && P.toDate(), Se.value = null, S(Ce);
    }, F = () => {
      d.value = true;
    }, N = () => {
      n("visible-change", true);
    }, B = (P) => {
      (P == null ? void 0 : P.key) === Le.esc && H(true, true);
    }, W = () => {
      d.value = false, v.value = false, C = false, n("visible-change", false);
    }, q = () => {
      v.value = true;
    }, M = () => {
      v.value = false;
    }, H = (P = true, ie = false) => {
      C = ie;
      const [Ce, De] = unref(T);
      let Y = Ce;
      !P && je.value && (Y = De), Y && Y.focus();
    }, _ = (P) => {
      r.readonly || I.value || v.value || C || (v.value = true, n("focus", P));
    };
    let D;
    const U = (P) => {
      const ie = async () => {
        setTimeout(() => {
          var Ce;
          D === ie && (!((Ce = m.value) != null && Ce.isFocusInsideContent() && !w) && T.value.filter((De) => De.contains(document.activeElement)).length === 0 && (ut(), v.value = false, n("blur", P), r.validateEvent && (f == null || f.validate("blur").catch((De) => nt(De)))), w = false);
        }, 0);
      };
      D = ie, ie();
    }, I = computed(() => r.disabled || (c == null ? void 0 : c.disabled)), G = computed(() => {
      let P;
      if (_e.value ? L.value.getDefaultValue && (P = L.value.getDefaultValue()) : tt(r.modelValue) ? P = r.modelValue.map((ie) => xi(ie, r.valueFormat, o.value)) : P = xi(r.modelValue, r.valueFormat, o.value), L.value.getRangeAvailableTime) {
        const ie = L.value.getRangeAvailableTime(P);
        tn(ie, P) || (P = ie, S(tt(P) ? P.map((Ce) => Ce.toDate()) : P.toDate()));
      }
      return tt(P) && P.some((ie) => !ie) && (P = []), P;
    }), ne = computed(() => {
      if (!L.value.panelReady)
        return "";
      const P = st(G.value);
      return tt(Se.value) ? [
        Se.value[0] || P && P[0] || "",
        Se.value[1] || P && P[1] || ""
      ] : Se.value !== null ? Se.value : !ge.value && _e.value || !v.value && _e.value ? "" : P ? se.value ? P.join(", ") : P : "";
    }), he = computed(() => r.type.includes("time")), ge = computed(() => r.type.startsWith("time")), se = computed(() => r.type === "dates"), le = computed(() => r.prefixIcon || (he.value ? sy : Ib)), ue = ref(false), ve = (P) => {
      r.readonly || I.value || ue.value && (P.stopPropagation(), z(), S(null), k(null, true), ue.value = false, v.value = false, L.value.handleClear && L.value.handleClear());
    }, _e = computed(() => {
      const { modelValue: P } = r;
      return !P || tt(P) && !P.filter(Boolean).length;
    }), Pe = async (P) => {
      var ie;
      r.readonly || I.value || (((ie = P.target) == null ? void 0 : ie.tagName) !== "INPUT" || T.value.includes(document.activeElement)) && (v.value = true);
    }, He = () => {
      r.readonly || I.value || !_e.value && r.clearable && (ue.value = true);
    }, We = () => {
      ue.value = false;
    }, Ue = (P) => {
      var ie;
      r.readonly || I.value || (((ie = P.touches[0].target) == null ? void 0 : ie.tagName) !== "INPUT" || T.value.includes(document.activeElement)) && (v.value = true);
    }, je = computed(() => r.type.includes("range")), rt = Ut(), ht = computed(() => {
      var P, ie;
      return (ie = (P = unref(m)) == null ? void 0 : P.popperRef) == null ? void 0 : ie.contentRef;
    }), lt = computed(() => {
      var P;
      return unref(je) ? unref(h3) : (P = unref(h3)) == null ? void 0 : P.$el;
    });
    au(lt, (P) => {
      const ie = unref(ht), Ce = unref(lt);
      ie && (P.target === ie || P.composedPath().includes(ie)) || P.target === Ce || P.composedPath().includes(Ce) || (v.value = false);
    });
    const Se = ref(null), ut = () => {
      if (Se.value) {
        const P = ct(ne.value);
        P && Ze(P) && (S(tt(P) ? P.map((ie) => ie.toDate()) : P.toDate()), Se.value = null);
      }
      Se.value === "" && (S(null), k(null), Se.value = null);
    }, ct = (P) => P ? L.value.parseUserInput(P) : null, st = (P) => P ? L.value.formatToString(P) : null, Ze = (P) => L.value.isValidValue(P), ae = async (P) => {
      if (r.readonly || I.value)
        return;
      const { code: ie } = P;
      if ($(P), ie === Le.esc) {
        v.value === true && (v.value = false, P.preventDefault(), P.stopPropagation());
        return;
      }
      if (ie === Le.down && (L.value.handleFocusPicker && (P.preventDefault(), P.stopPropagation()), v.value === false && (v.value = true, await nextTick()), L.value.handleFocusPicker)) {
        L.value.handleFocusPicker();
        return;
      }
      if (ie === Le.tab) {
        w = true;
        return;
      }
      if (ie === Le.enter || ie === Le.numpadEnter) {
        (Se.value === null || Se.value === "" || Ze(ct(ne.value))) && (ut(), v.value = false), P.stopPropagation();
        return;
      }
      if (Se.value) {
        P.stopPropagation();
        return;
      }
      L.value.handleKeydownInput && L.value.handleKeydownInput(P);
    }, ke = (P) => {
      Se.value = P, v.value || (v.value = true);
    }, Fe = (P) => {
      const ie = P.target;
      Se.value ? Se.value = [ie.value, Se.value[1]] : Se.value = [ie.value, null];
    }, Je = (P) => {
      const ie = P.target;
      Se.value ? Se.value = [Se.value[0], ie.value] : Se.value = [null, ie.value];
    }, ee = () => {
      var P;
      const ie = Se.value, Ce = ct(ie && ie[0]), De = unref(G);
      if (Ce && Ce.isValid()) {
        Se.value = [
          st(Ce),
          ((P = ne.value) == null ? void 0 : P[1]) || null
        ];
        const Y = [Ce, De && (De[1] || null)];
        Ze(Y) && (S(Y), Se.value = null);
      }
    }, Z = () => {
      var P;
      const ie = unref(Se), Ce = ct(ie && ie[1]), De = unref(G);
      if (Ce && Ce.isValid()) {
        Se.value = [
          ((P = unref(ne)) == null ? void 0 : P[0]) || null,
          st(Ce)
        ];
        const Y = [De && De[0], Ce];
        Ze(Y) && (S(Y), Se.value = null);
      }
    }, L = ref({}), X = (P) => {
      L.value[P[0]] = P[1], L.value.panelReady = true;
    }, j = (P) => {
      n("calendar-change", P);
    }, te = (P, ie, Ce) => {
      n("panel-change", P, ie, Ce);
    };
    return provide("EP_PICKER_BASE", {
      props: r
    }), t({
      focus: H,
      handleFocusInput: _,
      handleBlurInput: U,
      handleOpen: q,
      handleClose: M,
      onPick: V
    }), (P, ie) => (openBlock(), createBlock(unref(Zr), mergeProps({
      ref_key: "refPopper",
      ref: m,
      visible: v.value,
      effect: "light",
      pure: "",
      trigger: "click"
    }, P.$attrs, {
      role: "dialog",
      teleported: "",
      transition: `${unref(l).namespace.value}-zoom-in-top`,
      "popper-class": [`${unref(l).namespace.value}-picker__popper`, P.popperClass],
      "popper-options": unref(p),
      "fallback-placements": ["bottom", "top", "right", "left"],
      "gpu-acceleration": false,
      "stop-popper-mouse-event": false,
      "hide-after": 0,
      persistent: "",
      onBeforeShow: F,
      onShow: N,
      onHide: W
    }), {
      default: withCtx(() => [
        unref(je) ? (openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "inputRef",
          ref: h3,
          class: normalizeClass(unref(g)),
          style: normalizeStyle(P.$attrs.style),
          onClick: _,
          onMouseenter: He,
          onMouseleave: We,
          onTouchstart: Ue,
          onKeydown: ae
        }, [
          unref(le) ? (openBlock(), createBlock(unref(Ie), {
            key: 0,
            class: normalizeClass([unref(s).e("icon"), unref(u).e("icon")]),
            onMousedown: withModifiers(Pe, ["prevent"]),
            onTouchstart: Ue
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(le))))
            ]),
            _: 1
          }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
          createBaseVNode("input", {
            id: P.id && P.id[0],
            autocomplete: "off",
            name: P.name && P.name[0],
            placeholder: P.startPlaceholder,
            value: unref(ne) && unref(ne)[0],
            disabled: unref(I),
            readonly: !P.editable || P.readonly,
            class: normalizeClass(unref(u).b("input")),
            onMousedown: Pe,
            onInput: Fe,
            onChange: ee,
            onFocus: _,
            onBlur: U
          }, null, 42, TC),
          renderSlot(P.$slots, "range-separator", {}, () => [
            createBaseVNode("span", {
              class: normalizeClass(unref(u).b("separator"))
            }, toDisplayString(P.rangeSeparator), 3)
          ]),
          createBaseVNode("input", {
            id: P.id && P.id[1],
            autocomplete: "off",
            name: P.name && P.name[1],
            placeholder: P.endPlaceholder,
            value: unref(ne) && unref(ne)[1],
            disabled: unref(I),
            readonly: !P.editable || P.readonly,
            class: normalizeClass(unref(u).b("input")),
            onMousedown: Pe,
            onFocus: _,
            onBlur: U,
            onInput: Je,
            onChange: Z
          }, null, 42, OC),
          P.clearIcon ? (openBlock(), createBlock(unref(Ie), {
            key: 1,
            class: normalizeClass(unref(b)),
            onClick: ve
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(P.clearIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 38)) : (openBlock(), createBlock(unref(Ft), {
          key: 0,
          id: P.id,
          ref_key: "inputRef",
          ref: h3,
          "container-role": "combobox",
          "model-value": unref(ne),
          name: P.name,
          size: unref(rt),
          disabled: unref(I),
          placeholder: P.placeholder,
          class: normalizeClass([unref(l).b("editor"), unref(l).bm("editor", P.type), P.$attrs.class]),
          style: normalizeStyle(P.$attrs.style),
          readonly: !P.editable || P.readonly || unref(se) || P.type === "week",
          label: P.label,
          tabindex: P.tabindex,
          "validate-event": false,
          onInput: ke,
          onFocus: _,
          onBlur: U,
          onKeydown: ae,
          onChange: ut,
          onMousedown: Pe,
          onMouseenter: He,
          onMouseleave: We,
          onTouchstart: Ue,
          onClick: ie[0] || (ie[0] = withModifiers(() => {
          }, ["stop"]))
        }, {
          prefix: withCtx(() => [
            unref(le) ? (openBlock(), createBlock(unref(Ie), {
              key: 0,
              class: normalizeClass(unref(s).e("icon")),
              onMousedown: withModifiers(Pe, ["prevent"]),
              onTouchstart: Ue
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(le))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
          ]),
          suffix: withCtx(() => [
            ue.value && P.clearIcon ? (openBlock(), createBlock(unref(Ie), {
              key: 0,
              class: normalizeClass(`${unref(s).e("icon")} clear-icon`),
              onClick: withModifiers(ve, ["stop"])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(P.clearIcon)))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ]),
          _: 1
        }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"]))
      ]),
      content: withCtx(() => [
        renderSlot(P.$slots, "default", {
          visible: v.value,
          actualVisible: d.value,
          parsedValue: unref(G),
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
          onMousedown: ie[1] || (ie[1] = withModifiers(() => {
          }, ["stop"]))
        })
      ]),
      _: 3
    }, 16, ["visible", "transition", "popper-class", "popper-options"]));
  }
});
var MC = Ae(xC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
var AC = Me({
  ...EC,
  datetimeRole: String,
  parsedValue: {
    type: be(Object)
  }
});
var NC = ({
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
        let h3;
        const v = f[m];
        switch (m) {
          case "minute": {
            h3 = v(p.hour(), s, c);
            break;
          }
          case "second": {
            h3 = v(p.hour(), p.minute(), s, c);
            break;
          }
          default: {
            h3 = v(s, c);
            break;
          }
        }
        if (h3 != null && h3.length && !h3.includes(p[m]())) {
          const d = u ? 0 : h3.length - 1;
          p = p[m](h3[d]);
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
};
var Eo = (e) => {
  const t = (r, a) => r || a, n = (r) => r !== true;
  return e.map(t).filter(n);
};
var Ic = (e, t, n) => ({
  getHoursList: (l, s) => _o(24, e && (() => e == null ? void 0 : e(l, s))),
  getMinutesList: (l, s, u) => _o(60, t && (() => t == null ? void 0 : t(l, s, u))),
  getSecondsList: (l, s, u, c) => _o(60, n && (() => n == null ? void 0 : n(l, s, u, c)))
});
var RC = (e, t, n) => {
  const { getHoursList: r, getMinutesList: a, getSecondsList: o } = Ic(e, t, n);
  return {
    getAvailableHours: (c, f) => Eo(r(c, f)),
    getAvailableMinutes: (c, f, p) => Eo(a(c, f, p)),
    getAvailableSeconds: (c, f, p, m) => Eo(o(c, f, p, m))
  };
};
var IC = (e) => {
  const t = ref(e.parsedValue);
  return watch(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
};
var xn = /* @__PURE__ */ new Map();
var Ai;
at && (document.addEventListener("mousedown", (e) => Ai = e), document.addEventListener("mouseup", (e) => {
  for (const t of xn.values())
    for (const { documentHandler: n } of t)
      n(e, Ai);
}));
function Ni(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : vr(t.arg) && n.push(t.arg), function(r, a) {
    const o = t.instance.popperRef, l = r.target, s = a == null ? void 0 : a.target, u = !t || !t.instance, c = !l || !s, f = e.contains(l) || e.contains(s), p = e === l, m = n.length && n.some((v) => v == null ? void 0 : v.contains(l)) || n.length && n.includes(s), h3 = o && (o.contains(l) || o.contains(s));
    u || c || f || p || m || h3 || t.value(r, a);
  };
}
var Sr = {
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
};
var LC = 100;
var DC = 600;
var Ri = {
  beforeMount(e, t) {
    const n = t.value, { interval: r = LC, delay: a = DC } = dt(n) ? {} : n;
    let o, l;
    const s = () => dt(n) ? n() : n.handler(), u = () => {
      l && (clearTimeout(l), l = void 0), o && (clearInterval(o), o = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), s(), document.addEventListener("mouseup", () => u(), {
        once: true
      }), l = setTimeout(() => {
        o = setInterval(() => {
          s();
        }, r);
      }, a));
    });
  }
};
var Ii = false;
var Bn;
var Uo;
var Go;
var Pa;
var xa;
var Lc;
var Ma;
var Xo;
var Zo;
var Jo;
var Dc;
var Qo;
var el;
var Fc;
var Bc;
function Mt() {
  if (!Ii) {
    Ii = true;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (Qo = /\b(iPhone|iP[ao]d)/.exec(e), el = /\b(iP[ao]d)/.exec(e), Jo = /Android/i.exec(e), Fc = /FBAN\/\w+;/i.exec(e), Bc = /Mobile/i.exec(e), Dc = !!/Win64/.exec(e), t) {
      Bn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, Bn && document && document.documentMode && (Bn = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(e);
      Lc = r ? parseFloat(r[1]) + 4 : Bn, Uo = t[2] ? parseFloat(t[2]) : NaN, Go = t[3] ? parseFloat(t[3]) : NaN, Pa = t[4] ? parseFloat(t[4]) : NaN, Pa ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), xa = t && t[1] ? parseFloat(t[1]) : NaN) : xa = NaN;
    } else
      Bn = Uo = Go = xa = Pa = NaN;
    if (n) {
      if (n[1]) {
        var a = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Ma = a ? parseFloat(a[1].replace("_", ".")) : true;
      } else
        Ma = false;
      Xo = !!n[2], Zo = !!n[3];
    } else
      Ma = Xo = Zo = false;
  }
}
var tl = { ie: function() {
  return Mt() || Bn;
}, ieCompatibilityMode: function() {
  return Mt() || Lc > Bn;
}, ie64: function() {
  return tl.ie() && Dc;
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
} };
var FC = tl;
var wa = !!(typeof window < "u" && window.document && window.document.createElement);
var BC = { canUseDOM: wa, canUseWorkers: typeof Worker < "u", canUseEventListeners: wa && !!(window.addEventListener || window.attachEvent), canUseViewport: wa && !!window.screen, isInWorker: !wa };
var zc = BC;
var Vc;
zc.canUseDOM && (Vc = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function zC(e, t) {
  if (!zc.canUseDOM || t && !("addEventListener" in document))
    return false;
  var n = "on" + e, r = n in document;
  if (!r) {
    var a = document.createElement("div");
    a.setAttribute(n, "return;"), r = typeof a[n] == "function";
  }
  return !r && Vc && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var VC = zC;
var Li = 10;
var Di = 40;
var Fi = 800;
function Hc(e) {
  var t = 0, n = 0, r = 0, a = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), r = t * Li, a = n * Li, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || a) && e.deltaMode && (e.deltaMode == 1 ? (r *= Di, a *= Di) : (r *= Fi, a *= Fi)), r && !t && (t = r < 1 ? -1 : 1), a && !n && (n = a < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: r, pixelY: a };
}
Hc.getEventType = function() {
  return FC.firefox() ? "DOMMouseScroll" : VC("wheel") ? "wheel" : "mousewheel";
};
var HC = Hc;
var WC = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(r) {
      const a = HC(r);
      t && Reflect.apply(t, this, [r, a]);
    };
    e.addEventListener("wheel", n, { passive: true });
  }
};
var jC = {
  beforeMount(e, t) {
    WC(e, t.value);
  }
};
var KC = Me({
  role: {
    type: String,
    required: true
  },
  spinnerDate: {
    type: be(Object),
    required: true
  },
  showSeconds: {
    type: Boolean,
    default: true
  },
  arrowControl: Boolean,
  amPmMode: {
    type: be(String),
    default: ""
  },
  ...Nc
});
var qC = ["onClick"];
var YC = ["onMouseenter"];
var UC = defineComponent({
  __name: "basic-time-spinner",
  props: KC,
  emits: ["change", "select-range", "set-option"],
  setup(e, { emit: t }) {
    const n = e, r = we("time"), { getHoursList: a, getMinutesList: o, getSecondsList: l } = Ic(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
    let s = false;
    const u = ref(), c = ref(), f = ref(), p = ref(), m = {
      hours: c,
      minutes: f,
      seconds: p
    }, h3 = computed(() => n.showSeconds ? Ei : Ei.slice(0, 2)), v = computed(() => {
      const { spinnerDate: _ } = n, D = _.hour(), U = _.minute(), I = _.second();
      return { hours: D, minutes: U, seconds: I };
    }), d = computed(() => {
      const { hours: _, minutes: D } = unref(v);
      return {
        hours: a(n.role),
        minutes: o(_, n.role),
        seconds: l(_, D, n.role)
      };
    }), y = computed(() => {
      const { hours: _, minutes: D, seconds: U } = unref(v);
      return {
        hours: $o(_, 23),
        minutes: $o(D, 59),
        seconds: $o(U, 59)
      };
    }), w = Rn((_) => {
      s = false, b(_);
    }, 200), C = (_) => {
      if (!!!n.amPmMode)
        return "";
      const U = n.amPmMode === "A";
      let I = _ < 12 ? " am" : " pm";
      return U && (I = I.toUpperCase()), I;
    }, g = (_) => {
      let D;
      switch (_) {
        case "hours":
          D = [0, 2];
          break;
        case "minutes":
          D = [3, 5];
          break;
        case "seconds":
          D = [6, 8];
          break;
      }
      const [U, I] = D;
      t("select-range", U, I), u.value = _;
    }, b = (_) => {
      $(_, unref(v)[_]);
    }, k = () => {
      b("hours"), b("minutes"), b("seconds");
    }, S = (_) => _.querySelector(`.${r.namespace.value}-scrollbar__wrap`), $ = (_, D) => {
      if (n.arrowControl)
        return;
      const U = unref(m[_]);
      U && U.$el && (S(U.$el).scrollTop = Math.max(0, D * T(_)));
    }, T = (_) => {
      const D = unref(m[_]), U = D == null ? void 0 : D.$el.querySelector("li");
      return U && Number.parseFloat(ub(U, "height")) || 0;
    }, R = () => {
      V(1);
    }, z = () => {
      V(-1);
    }, V = (_) => {
      u.value || g("hours");
      const D = u.value, U = unref(v)[D], I = u.value === "hours" ? 24 : 60, G = F(D, U, _, I);
      N(D, G), $(D, G), nextTick(() => g(D));
    }, F = (_, D, U, I) => {
      let G = (D + U + I) % I;
      const ne = unref(d)[_];
      for (; ne[G] && G !== D; )
        G = (G + U + I) % I;
      return G;
    }, N = (_, D) => {
      if (unref(d)[_][D])
        return;
      const { hours: G, minutes: ne, seconds: he } = unref(v);
      let ge;
      switch (_) {
        case "hours":
          ge = n.spinnerDate.hour(D).minute(ne).second(he);
          break;
        case "minutes":
          ge = n.spinnerDate.hour(G).minute(D).second(he);
          break;
        case "seconds":
          ge = n.spinnerDate.hour(G).minute(ne).second(D);
          break;
      }
      t("change", ge);
    }, B = (_, { value: D, disabled: U }) => {
      U || (N(_, D), g(_), $(_, D));
    }, W = (_) => {
      s = true, w(_);
      const D = Math.min(Math.round((S(unref(m[_]).$el).scrollTop - (q(_) * 0.5 - 10) / T(_) + 3) / T(_)), _ === "hours" ? 23 : 59);
      N(_, D);
    }, q = (_) => unref(m[_]).$el.offsetHeight, M = () => {
      const _ = (D) => {
        const U = unref(m[D]);
        U && U.$el && (S(U.$el).onscroll = () => {
          W(D);
        });
      };
      _("hours"), _("minutes"), _("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !n.arrowControl && M(), k(), n.role === "start" && g("hours");
      });
    });
    const H = (_, D) => {
      m[D].value = _;
    };
    return t("set-option", [`${n.role}_scrollDown`, V]), t("set-option", [`${n.role}_emitSelectRange`, g]), watch(() => n.spinnerDate, () => {
      s || k();
    }), (_, D) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(r).b("spinner"), { "has-seconds": _.showSeconds }])
    }, [
      _.arrowControl ? createCommentVNode("v-if", true) : (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(h3), (U) => (openBlock(), createBlock(unref(Tr), {
        key: U,
        ref_for: true,
        ref: (I) => H(I, U),
        class: normalizeClass(unref(r).be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": unref(r).be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: (I) => g(U),
        onMousemove: (I) => b(U)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(d)[U], (I, G) => (openBlock(), createElementBlock("li", {
            key: G,
            class: normalizeClass([
              unref(r).be("spinner", "item"),
              unref(r).is("active", G === unref(v)[U]),
              unref(r).is("disabled", I)
            ]),
            onClick: (ne) => B(U, { value: G, disabled: I })
          }, [
            U === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(("0" + (_.amPmMode ? G % 12 || 12 : G)).slice(-2)) + toDisplayString(C(G)), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(("0" + G).slice(-2)), 1)
            ], 64))
          ], 10, qC))), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)),
      _.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(h3), (U) => (openBlock(), createElementBlock("div", {
        key: U,
        class: normalizeClass([unref(r).be("spinner", "wrapper"), unref(r).is("arrow")]),
        onMouseenter: (I) => g(U)
      }, [
        withDirectives((openBlock(), createBlock(unref(Ie), {
          class: normalizeClass(["arrow-up", unref(r).be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(unref(ju))
          ]),
          _: 1
        }, 8, ["class"])), [
          [unref(Ri), z]
        ]),
        withDirectives((openBlock(), createBlock(unref(Ie), {
          class: normalizeClass(["arrow-down", unref(r).be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(unref(to))
          ]),
          _: 1
        }, 8, ["class"])), [
          [unref(Ri), R]
        ]),
        createBaseVNode("ul", {
          class: normalizeClass(unref(r).be("spinner", "list"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(y)[U], (I, G) => (openBlock(), createElementBlock("li", {
            key: G,
            class: normalizeClass([
              unref(r).be("spinner", "item"),
              unref(r).is("active", I === unref(v)[U]),
              unref(r).is("disabled", unref(d)[U][I])
            ])
          }, [
            typeof I == "number" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              U === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(("0" + (_.amPmMode ? I % 12 || 12 : I)).slice(-2)) + toDisplayString(C(I)), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(("0" + I).slice(-2)), 1)
              ], 64))
            ], 64)) : createCommentVNode("v-if", true)
          ], 2))), 128))
        ], 2)
      ], 42, YC))), 128)) : createCommentVNode("v-if", true)
    ], 2));
  }
});
var GC = Ae(UC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
var XC = defineComponent({
  __name: "panel-time-pick",
  props: AC,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, r = inject("EP_PICKER_BASE"), {
      arrowControl: a,
      disabledHours: o,
      disabledMinutes: l,
      disabledSeconds: s,
      defaultValue: u
    } = r.props, { getAvailableHours: c, getAvailableMinutes: f, getAvailableSeconds: p } = RC(o, l, s), m = we("time"), { t: h3, lang: v } = ot(), d = ref([0, 2]), y = IC(n), w = computed(() => Un(n.actualVisible) ? `${m.namespace.value}-zoom-in-top` : ""), C = computed(() => n.format.includes("ss")), g = computed(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), b = (H) => {
      const _ = xe(H).locale(v.value), D = B(_);
      return _.isSame(D);
    }, k = () => {
      t("pick", y.value, false);
    }, S = (H = false, _ = false) => {
      _ || t("pick", n.parsedValue, H);
    }, $ = (H) => {
      if (!n.visible)
        return;
      const _ = B(H).millisecond(0);
      t("pick", _, true);
    }, T = (H, _) => {
      t("select-range", H, _), d.value = [H, _];
    }, R = (H) => {
      const _ = [0, 3].concat(C.value ? [6] : []), D = ["hours", "minutes"].concat(C.value ? ["seconds"] : []), I = (_.indexOf(d.value[0]) + H + _.length) % _.length;
      V.start_emitSelectRange(D[I]);
    }, z = (H) => {
      const _ = H.code, { left: D, right: U, up: I, down: G } = Le;
      if ([D, U].includes(_)) {
        R(_ === D ? -1 : 1), H.preventDefault();
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
    }), B = (H) => N(H, n.datetimeRole || "", true), W = (H) => H ? xe(H, n.format).locale(v.value) : null, q = (H) => H ? H.format(n.format) : null, M = () => xe(u).locale(v.value);
    return t("set-picker-option", ["isValidValue", b]), t("set-picker-option", ["formatToString", q]), t("set-picker-option", ["parseUserInput", W]), t("set-picker-option", ["handleKeydownInput", z]), t("set-picker-option", ["getRangeAvailableTime", B]), t("set-picker-option", ["getDefaultValue", M]), (H, _) => (openBlock(), createBlock(Transition, { name: unref(w) }, {
      default: withCtx(() => [
        H.actualVisible || H.visible ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(m).b("panel"))
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(m).be("panel", "content"), { "has-seconds": unref(C) }])
          }, [
            createVNode(GC, {
              ref: "spinner",
              role: H.datetimeRole || "start",
              "arrow-control": unref(a),
              "show-seconds": unref(C),
              "am-pm-mode": unref(g),
              "spinner-date": H.parsedValue,
              "disabled-hours": unref(o),
              "disabled-minutes": unref(l),
              "disabled-seconds": unref(s),
              onChange: $,
              onSetOption: unref(F),
              onSelectRange: T
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(unref(m).be("panel", "footer"))
          }, [
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass([unref(m).be("panel", "btn"), "cancel"]),
              onClick: k
            }, toDisplayString(unref(h3)("el.datepicker.cancel")), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass([unref(m).be("panel", "btn"), "confirm"]),
              onClick: _[0] || (_[0] = (D) => S())
            }, toDisplayString(unref(h3)("el.datepicker.confirm")), 3)
          ], 2)
        ], 2)) : createCommentVNode("v-if", true)
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var nl = Ae(XC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);
var Wc = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(En, function() {
    return function(n, r, a) {
      var o = r.prototype, l = function(p) {
        return p && (p.indexOf ? p : p.s);
      }, s = function(p, m, h3, v, d) {
        var y = p.name ? p : p.$locale(), w = l(y[m]), C = l(y[h3]), g = w || C.map(function(k) {
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
        return p.formats[m] || function(h3) {
          return h3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(v, d, y) {
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
var JC = ln(ZC);
var jc = {
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
    default: true
  }
};
var Kc = {
  [ft]: (e) => kt(e) || it(e) || Jt(e),
  change: (e) => kt(e) || it(e) || Jt(e)
};
var Or = Symbol("checkboxGroupContextKey");
var QC = ({
  model: e,
  isChecked: t
}) => {
  const n = inject(Or, void 0), r = computed(() => {
    var o, l;
    const s = (o = n == null ? void 0 : n.max) == null ? void 0 : o.value, u = (l = n == null ? void 0 : n.min) == null ? void 0 : l.value;
    return !Un(s) && e.value.length >= s && !t.value || !Un(u) && e.value.length <= u && t.value;
  });
  return {
    isDisabled: ia(computed(() => (n == null ? void 0 : n.disabled.value) || r.value)),
    isLimitDisabled: r
  };
};
var eS = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: r,
  isDisabled: a,
  isLabeledByFormItem: o
}) => {
  const l = inject(Or, void 0), { formItem: s } = _n(), { emit: u } = getCurrentInstance();
  function c(v) {
    var d, y;
    return v === e.trueLabel || v === true ? (d = e.trueLabel) != null ? d : true : (y = e.falseLabel) != null ? y : false;
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
    n.value || !r.value && !a.value && o.value && (v.composedPath().some((w) => w.tagName === "LABEL") || (t.value = c([false, e.falseLabel].includes(t.value)), await nextTick(), f(t.value, v)));
  }
  const h3 = computed(() => (l == null ? void 0 : l.validateEvent) || e.validateEvent);
  return watch(() => e.modelValue, () => {
    h3.value && (s == null || s.validate("change").catch((v) => nt(v)));
  }), {
    handleChange: p,
    onClickRoot: m
  };
};
var tS = (e) => {
  const t = ref(false), { emit: n } = getCurrentInstance(), r = inject(Or, void 0), a = computed(() => Un(r) === false), o = ref(false);
  return {
    model: computed({
      get() {
        var s, u;
        return a.value ? (s = r == null ? void 0 : r.modelValue) == null ? void 0 : s.value : (u = e.modelValue) != null ? u : t.value;
      },
      set(s) {
        var u, c;
        a.value && tt(s) ? (o.value = ((u = r == null ? void 0 : r.max) == null ? void 0 : u.value) !== void 0 && s.length > (r == null ? void 0 : r.max.value), o.value === false && ((c = r == null ? void 0 : r.changeEvent) == null || c.call(r, s))) : (n(ft, s), t.value = s);
      }
    }),
    isGroup: a,
    isLimitExceeded: o
  };
};
var nS = (e, t, { model: n }) => {
  const r = inject(Or, void 0), a = ref(false), o = computed(() => {
    const c = n.value;
    return Jt(c) ? c : tt(c) ? zt(e.label) ? c.map(toRaw).some((f) => tn(f, e.label)) : c.map(toRaw).includes(e.label) : c != null ? c === e.trueLabel : !!c;
  }), l = Ut(computed(() => {
    var c;
    return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value;
  }), {
    prop: true
  }), s = Ut(computed(() => {
    var c;
    return (c = r == null ? void 0 : r.size) == null ? void 0 : c.value;
  })), u = computed(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: l,
    isChecked: o,
    isFocused: a,
    checkboxSize: s,
    hasOwnLabel: u
  };
};
var rS = (e, { model: t }) => {
  function n() {
    tt(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || true;
  }
  e.checked && n();
};
var qc = (e, t) => {
  const { formItem: n } = _n(), { model: r, isGroup: a, isLimitExceeded: o } = tS(e), {
    isFocused: l,
    isChecked: s,
    checkboxButtonSize: u,
    checkboxSize: c,
    hasOwnLabel: f
  } = nS(e, t, { model: r }), { isDisabled: p } = QC({ model: r, isChecked: s }), { inputId: m, isLabeledByFormItem: h3 } = lo(e, {
    formItemContext: n,
    disableIdGeneration: f,
    disableIdManagement: a
  }), { handleChange: v, onClickRoot: d } = eS(e, {
    model: r,
    isLimitExceeded: o,
    hasOwnLabel: f,
    isDisabled: p,
    isLabeledByFormItem: h3
  });
  return rS(e, { model: r }), {
    inputId: m,
    isLabeledByFormItem: h3,
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
};
var aS = ["tabindex", "role", "aria-checked"];
var oS = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
var lS = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
var sS = defineComponent({
  name: "ElCheckbox"
});
var iS = defineComponent({
  ...sS,
  props: jc,
  emits: Kc,
  setup(e) {
    const t = e, n = useSlots(), {
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
    } = qc(t, n), h3 = we("checkbox"), v = computed(() => [
      h3.b(),
      h3.m(u.value),
      h3.is("disabled", l.value),
      h3.is("bordered", t.border),
      h3.is("checked", o.value)
    ]), d = computed(() => [
      h3.e("input"),
      h3.is("disabled", l.value),
      h3.is("checked", o.value),
      h3.is("indeterminate", t.indeterminate),
      h3.is("focus", s.value)
    ]);
    return (y, w) => (openBlock(), createBlock(resolveDynamicComponent(!unref(c) && unref(a) ? "span" : "label"), {
      class: normalizeClass(unref(v)),
      "aria-controls": y.indeterminate ? y.controls : null,
      onClick: unref(m)
    }, {
      default: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass(unref(d)),
          tabindex: y.indeterminate ? 0 : void 0,
          role: y.indeterminate ? "checkbox" : void 0,
          "aria-checked": y.indeterminate ? "mixed" : void 0
        }, [
          y.trueLabel || y.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            id: unref(r),
            "onUpdate:modelValue": w[0] || (w[0] = (C) => isRef(f) ? f.value = C : null),
            class: normalizeClass(unref(h3).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            name: y.name,
            tabindex: y.tabindex,
            disabled: unref(l),
            "true-value": y.trueLabel,
            "false-value": y.falseLabel,
            onChange: w[1] || (w[1] = (...C) => unref(p) && unref(p)(...C)),
            onFocus: w[2] || (w[2] = (C) => s.value = true),
            onBlur: w[3] || (w[3] = (C) => s.value = false)
          }, null, 42, oS)), [
            [vModelCheckbox, unref(f)]
          ]) : withDirectives((openBlock(), createElementBlock("input", {
            key: 1,
            id: unref(r),
            "onUpdate:modelValue": w[4] || (w[4] = (C) => isRef(f) ? f.value = C : null),
            class: normalizeClass(unref(h3).e("original")),
            type: "checkbox",
            "aria-hidden": y.indeterminate ? "true" : "false",
            disabled: unref(l),
            value: y.label,
            name: y.name,
            tabindex: y.tabindex,
            onChange: w[5] || (w[5] = (...C) => unref(p) && unref(p)(...C)),
            onFocus: w[6] || (w[6] = (C) => s.value = true),
            onBlur: w[7] || (w[7] = (C) => s.value = false)
          }, null, 42, lS)), [
            [vModelCheckbox, unref(f)]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(h3).e("inner"))
          }, null, 2)
        ], 10, aS),
        unref(c) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(h3).e("label"))
        }, [
          renderSlot(y.$slots, "default"),
          y.$slots.default ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(y.label), 1)
          ], 64))
        ], 2)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var uS = Ae(iS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
var cS = ["name", "tabindex", "disabled", "true-value", "false-value"];
var dS = ["name", "tabindex", "disabled", "value"];
var fS = defineComponent({
  name: "ElCheckboxButton"
});
var pS = defineComponent({
  ...fS,
  props: jc,
  emits: Kc,
  setup(e) {
    const t = e, n = useSlots(), {
      isFocused: r,
      isChecked: a,
      isDisabled: o,
      checkboxButtonSize: l,
      model: s,
      handleChange: u
    } = qc(t, n), c = inject(Or, void 0), f = we("checkbox"), p = computed(() => {
      var h3, v, d, y;
      const w = (v = (h3 = c == null ? void 0 : c.fill) == null ? void 0 : h3.value) != null ? v : "";
      return {
        backgroundColor: w,
        borderColor: w,
        color: (y = (d = c == null ? void 0 : c.textColor) == null ? void 0 : d.value) != null ? y : "",
        boxShadow: w ? `-1px 0 0 0 ${w}` : void 0
      };
    }), m = computed(() => [
      f.b("button"),
      f.bm("button", l.value),
      f.is("disabled", o.value),
      f.is("checked", a.value),
      f.is("focus", r.value)
    ]);
    return (h3, v) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(unref(m))
    }, [
      h3.trueLabel || h3.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
        key: 0,
        "onUpdate:modelValue": v[0] || (v[0] = (d) => isRef(s) ? s.value = d : null),
        class: normalizeClass(unref(f).be("button", "original")),
        type: "checkbox",
        name: h3.name,
        tabindex: h3.tabindex,
        disabled: unref(o),
        "true-value": h3.trueLabel,
        "false-value": h3.falseLabel,
        onChange: v[1] || (v[1] = (...d) => unref(u) && unref(u)(...d)),
        onFocus: v[2] || (v[2] = (d) => r.value = true),
        onBlur: v[3] || (v[3] = (d) => r.value = false)
      }, null, 42, cS)), [
        [vModelCheckbox, unref(s)]
      ]) : withDirectives((openBlock(), createElementBlock("input", {
        key: 1,
        "onUpdate:modelValue": v[4] || (v[4] = (d) => isRef(s) ? s.value = d : null),
        class: normalizeClass(unref(f).be("button", "original")),
        type: "checkbox",
        name: h3.name,
        tabindex: h3.tabindex,
        disabled: unref(o),
        value: h3.label,
        onChange: v[5] || (v[5] = (...d) => unref(u) && unref(u)(...d)),
        onFocus: v[6] || (v[6] = (d) => r.value = true),
        onBlur: v[7] || (v[7] = (d) => r.value = false)
      }, null, 42, dS)), [
        [vModelCheckbox, unref(s)]
      ]),
      h3.$slots.default || h3.label ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(unref(f).be("button", "inner")),
        style: normalizeStyle(unref(a) ? unref(p) : void 0)
      }, [
        renderSlot(h3.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(h3.label), 1)
        ])
      ], 6)) : createCommentVNode("v-if", true)
    ], 2));
  }
});
var Yc = Ae(pS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
var vS = Me({
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
    default: true
  }
});
var hS = {
  [ft]: (e) => tt(e),
  change: (e) => tt(e)
};
var mS = defineComponent({
  name: "ElCheckboxGroup"
});
var gS = defineComponent({
  ...mS,
  props: vS,
  emits: hS,
  setup(e, { emit: t }) {
    const n = e, r = we("checkbox"), { formItem: a } = _n(), { inputId: o, isLabeledByFormItem: l } = lo(n, {
      formItemContext: a
    }), s = async (c) => {
      t(ft, c), await nextTick(), t("change", c);
    }, u = computed({
      get() {
        return n.modelValue;
      },
      set(c) {
        s(c);
      }
    });
    return provide(Or, {
      ...ab(toRefs(n), [
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
    }), watch(() => n.modelValue, () => {
      n.validateEvent && (a == null || a.validate("change").catch((c) => nt(c)));
    }), (c, f) => {
      var p;
      return openBlock(), createBlock(resolveDynamicComponent(c.tag), {
        id: unref(o),
        class: normalizeClass(unref(r).b("group")),
        role: "group",
        "aria-label": unref(l) ? void 0 : c.label || "checkbox-group",
        "aria-labelledby": unref(l) ? (p = unref(a)) == null ? void 0 : p.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var Uc = Ae(gS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
var Zn = Ht(uS, {
  CheckboxButton: Yc,
  CheckboxGroup: Uc
});
kn(Yc);
kn(Uc);
var Gc = Me({
  size: $n,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
var bS = Me({
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
});
var Xc = {
  [ft]: (e) => kt(e) || it(e) || Jt(e),
  [Gn]: (e) => kt(e) || it(e) || Jt(e)
};
var Zc = Symbol("radioGroupKey");
var Jc = (e, t) => {
  const n = ref(), r = inject(Zc, void 0), a = computed(() => !!r), o = computed({
    get() {
      return a.value ? r.modelValue : e.modelValue;
    },
    set(f) {
      a.value ? r.changeEvent(f) : t && t(ft, f), n.value.checked = e.modelValue === e.label;
    }
  }), l = Ut(computed(() => r == null ? void 0 : r.size)), s = ia(computed(() => r == null ? void 0 : r.disabled)), u = ref(false), c = computed(() => s.value || a.value && o.value !== e.label ? -1 : 0);
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
};
var yS = ["value", "name", "disabled"];
var wS = defineComponent({
  name: "ElRadio"
});
var CS = defineComponent({
  ...wS,
  props: bS,
  emits: Xc,
  setup(e, { emit: t }) {
    const n = e, r = we("radio"), { radioRef: a, radioGroup: o, focus: l, size: s, disabled: u, modelValue: c } = Jc(n, t);
    function f() {
      nextTick(() => t("change", c.value));
    }
    return (p, m) => {
      var h3;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(r).b(),
          unref(r).is("disabled", unref(u)),
          unref(r).is("focus", unref(l)),
          unref(r).is("bordered", p.border),
          unref(r).is("checked", unref(c) === p.label),
          unref(r).m(unref(s))
        ])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([
            unref(r).e("input"),
            unref(r).is("disabled", unref(u)),
            unref(r).is("checked", unref(c) === p.label)
          ])
        }, [
          withDirectives(createBaseVNode("input", {
            ref_key: "radioRef",
            ref: a,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => isRef(c) ? c.value = v : null),
            class: normalizeClass(unref(r).e("original")),
            value: p.label,
            name: p.name || ((h3 = unref(o)) == null ? void 0 : h3.name),
            disabled: unref(u),
            type: "radio",
            onFocus: m[1] || (m[1] = (v) => l.value = true),
            onBlur: m[2] || (m[2] = (v) => l.value = false),
            onChange: f
          }, null, 42, yS), [
            [vModelRadio, unref(c)]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(r).e("inner"))
          }, null, 2)
        ], 2),
        createBaseVNode("span", {
          class: normalizeClass(unref(r).e("label")),
          onKeydown: m[3] || (m[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(p.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(p.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var SS = Ae(CS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
var kS = Me({
  ...Gc,
  name: {
    type: String,
    default: ""
  }
});
var $S = ["value", "name", "disabled"];
var _S = defineComponent({
  name: "ElRadioButton"
});
var ES = defineComponent({
  ..._S,
  props: kS,
  setup(e) {
    const t = e, n = we("radio"), { radioRef: r, focus: a, size: o, disabled: l, modelValue: s, radioGroup: u } = Jc(t), c = computed(() => ({
      backgroundColor: (u == null ? void 0 : u.fill) || "",
      borderColor: (u == null ? void 0 : u.fill) || "",
      boxShadow: u != null && u.fill ? `-1px 0 0 0 ${u.fill}` : "",
      color: (u == null ? void 0 : u.textColor) || ""
    }));
    return (f, p) => {
      var m;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(n).b("button"),
          unref(n).is("active", unref(s) === f.label),
          unref(n).is("disabled", unref(l)),
          unref(n).is("focus", unref(a)),
          unref(n).bm("button", unref(o))
        ])
      }, [
        withDirectives(createBaseVNode("input", {
          ref_key: "radioRef",
          ref: r,
          "onUpdate:modelValue": p[0] || (p[0] = (h3) => isRef(s) ? s.value = h3 : null),
          class: normalizeClass(unref(n).be("button", "original-radio")),
          value: f.label,
          type: "radio",
          name: f.name || ((m = unref(u)) == null ? void 0 : m.name),
          disabled: unref(l),
          onFocus: p[1] || (p[1] = (h3) => a.value = true),
          onBlur: p[2] || (p[2] = (h3) => a.value = false)
        }, null, 42, $S), [
          [vModelRadio, unref(s)]
        ]),
        createBaseVNode("span", {
          class: normalizeClass(unref(n).be("button", "inner")),
          style: normalizeStyle(unref(s) === f.label ? unref(c) : {}),
          onKeydown: p[3] || (p[3] = withModifiers(() => {
          }, ["stop"]))
        }, [
          renderSlot(f.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(f.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var Qc = Ae(ES, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
var TS = Me({
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
    default: true
  }
});
var OS = Xc;
var PS = ["id", "aria-label", "aria-labelledby"];
var xS = defineComponent({
  name: "ElRadioGroup"
});
var MS = defineComponent({
  ...xS,
  props: TS,
  emits: OS,
  setup(e, { emit: t }) {
    const n = e, r = we("radio"), a = oo(), o = ref(), { formItem: l } = _n(), { inputId: s, isLabeledByFormItem: u } = lo(n, {
      formItemContext: l
    }), c = (p) => {
      t(ft, p), nextTick(() => t("change", p));
    };
    onMounted(() => {
      const p = o.value.querySelectorAll("[type=radio]"), m = p[0];
      !Array.from(p).some((h3) => h3.checked) && m && (m.tabIndex = 0);
    });
    const f = computed(() => n.name || a.value);
    return provide(Zc, reactive({
      ...toRefs(n),
      changeEvent: c,
      name: f
    })), watch(() => n.modelValue, () => {
      n.validateEvent && (l == null || l.validate("change").catch((p) => nt(p)));
    }), (p, m) => (openBlock(), createElementBlock("div", {
      id: unref(s),
      ref_key: "radioGroupRef",
      ref: o,
      class: normalizeClass(unref(r).b("group")),
      role: "radiogroup",
      "aria-label": unref(u) ? void 0 : p.label || "radio-group",
      "aria-labelledby": unref(u) ? unref(l).labelId : void 0
    }, [
      renderSlot(p.$slots, "default")
    ], 10, PS));
  }
});
var ed = Ae(MS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
var AS = Ht(SS, {
  RadioButton: Qc,
  RadioGroup: ed
});
kn(ed);
kn(Qc);
var NS = defineComponent({
  name: "NodeContent",
  setup() {
    return {
      ns: we("cascader-node")
    };
  },
  render() {
    const { ns: e } = this, { node: t, panel: n } = this.$parent, { data: r, label: a } = t, { renderLabelFn: o } = n;
    return h("span", { class: e.e("label") }, o ? o({ node: t, data: r }) : a);
  }
});
var Kl = Symbol();
var RS = defineComponent({
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
      required: true
    },
    menuId: String
  },
  emits: ["expand"],
  setup(e, { emit: t }) {
    const n = inject(Kl), r = we("cascader-node"), a = computed(() => n.isHoverMenu), o = computed(() => n.config.multiple), l = computed(() => n.config.checkStrictly), s = computed(() => {
      var S;
      return (S = n.checkedNodes[0]) == null ? void 0 : S.uid;
    }), u = computed(() => e.node.isDisabled), c = computed(() => e.node.isLeaf), f = computed(() => l.value && !c.value || !u.value), p = computed(() => h3(n.expandingNode)), m = computed(() => l.value && n.checkedNodes.some(h3)), h3 = (S) => {
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
      a.value && !c.value || (c.value && !u.value && !l.value && !o.value ? k(true) : C());
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
});
var IS = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"];
var LS = createBaseVNode("span", null, null, -1);
function DS(e, t, n, r, a, o) {
  const l = resolveComponent("el-checkbox"), s = resolveComponent("el-radio"), u = resolveComponent("check"), c = resolveComponent("el-icon"), f = resolveComponent("node-content"), p = resolveComponent("loading"), m = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("li", {
    id: `${e.menuId}-${e.node.uid}`,
    role: "menuitem",
    "aria-haspopup": !e.isLeaf,
    "aria-owns": e.isLeaf ? null : e.menuId,
    "aria-expanded": e.inExpandingPath,
    tabindex: e.expandable ? -1 : void 0,
    class: normalizeClass([
      e.ns.b(),
      e.ns.is("selectable", e.checkStrictly),
      e.ns.is("active", e.node.checked),
      e.ns.is("disabled", !e.expandable),
      e.inExpandingPath && "in-active-path",
      e.inCheckedPath && "in-checked-path"
    ]),
    onMouseenter: t[2] || (t[2] = (...h3) => e.handleHoverExpand && e.handleHoverExpand(...h3)),
    onFocus: t[3] || (t[3] = (...h3) => e.handleHoverExpand && e.handleHoverExpand(...h3)),
    onClick: t[4] || (t[4] = (...h3) => e.handleClick && e.handleClick(...h3))
  }, [
    createCommentVNode(" prefix "),
    e.multiple ? (openBlock(), createBlock(l, {
      key: 0,
      "model-value": e.node.checked,
      indeterminate: e.node.indeterminate,
      disabled: e.isDisabled,
      onClick: t[0] || (t[0] = withModifiers(() => {
      }, ["stop"])),
      "onUpdate:modelValue": e.handleSelectCheck
    }, null, 8, ["model-value", "indeterminate", "disabled", "onUpdate:modelValue"])) : e.checkStrictly ? (openBlock(), createBlock(s, {
      key: 1,
      "model-value": e.checkedNodeId,
      label: e.node.uid,
      disabled: e.isDisabled,
      "onUpdate:modelValue": e.handleSelectCheck,
      onClick: t[1] || (t[1] = withModifiers(() => {
      }, ["stop"]))
    }, {
      default: withCtx(() => [
        createCommentVNode(`
        Add an empty element to avoid render label,
        do not use empty fragment here for https://github.com/vuejs/vue-next/pull/2485
      `),
        LS
      ]),
      _: 1
    }, 8, ["model-value", "label", "disabled", "onUpdate:modelValue"])) : e.isLeaf && e.node.checked ? (openBlock(), createBlock(c, {
      key: 2,
      class: normalizeClass(e.ns.e("prefix"))
    }, {
      default: withCtx(() => [
        createVNode(u)
      ]),
      _: 1
    }, 8, ["class"])) : createCommentVNode("v-if", true),
    createCommentVNode(" content "),
    createVNode(f),
    createCommentVNode(" postfix "),
    e.isLeaf ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
      e.node.loading ? (openBlock(), createBlock(c, {
        key: 0,
        class: normalizeClass([e.ns.is("loading"), e.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(p)
        ]),
        _: 1
      }, 8, ["class"])) : (openBlock(), createBlock(c, {
        key: 1,
        class: normalizeClass(["arrow-right", e.ns.e("postfix")])
      }, {
        default: withCtx(() => [
          createVNode(m)
        ]),
        _: 1
      }, 8, ["class"]))
    ], 64))
  ], 42, IS);
}
var FS = Ae(RS, [["render", DS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);
var BS = defineComponent({
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
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(e) {
    const t = getCurrentInstance(), n = we("cascader-menu"), { t: r } = ot(), a = Jy();
    let o = null, l = null;
    const s = inject(Kl), u = ref(null), c = computed(() => !e.nodes.length), f = computed(() => !s.initialLoaded), p = computed(() => `cascader-menu-${a}-${e.index}`), m = (y) => {
      o = y.target;
    }, h3 = (y) => {
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
      handleMouseMove: h3,
      clearHoverZone: d
    };
  }
});
function zS(e, t, n, r, a, o) {
  const l = resolveComponent("el-cascader-node"), s = resolveComponent("loading"), u = resolveComponent("el-icon"), c = resolveComponent("el-scrollbar");
  return openBlock(), createBlock(c, {
    key: e.menuId,
    tag: "ul",
    role: "menu",
    class: normalizeClass(e.ns.b()),
    "wrap-class": e.ns.e("wrap"),
    "view-class": [e.ns.e("list"), e.ns.is("empty", e.isEmpty)],
    onMousemove: e.handleMouseMove,
    onMouseleave: e.clearHoverZone
  }, {
    default: withCtx(() => {
      var f;
      return [
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.nodes, (p) => (openBlock(), createBlock(l, {
          key: p.uid,
          node: p,
          "menu-id": e.menuId,
          onExpand: e.handleExpand
        }, null, 8, ["node", "menu-id", "onExpand"]))), 128)),
        e.isLoading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(e.ns.e("empty-text"))
        }, [
          createVNode(u, {
            size: "14",
            class: normalizeClass(e.ns.is("loading"))
          }, {
            default: withCtx(() => [
              createVNode(s)
            ]),
            _: 1
          }, 8, ["class"]),
          createTextVNode(" " + toDisplayString(e.t("el.cascader.loading")), 1)
        ], 2)) : e.isEmpty ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(e.ns.e("empty-text"))
        }, toDisplayString(e.t("el.cascader.noData")), 3)) : (f = e.panel) != null && f.isHoverMenu ? (openBlock(), createElementBlock("svg", {
          key: 2,
          ref: "hoverZone",
          class: normalizeClass(e.ns.e("hover-zone"))
        }, null, 2)) : createCommentVNode("v-if", true)
      ];
    }),
    _: 1
  }, 8, ["class", "wrap-class", "view-class", "onMousemove", "onMouseleave"]);
}
var VS = Ae(BS, [["render", zS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);
var HS = 0;
var WS = (e) => {
  const t = [e];
  let { parent: n } = e;
  for (; n; )
    t.unshift(n), n = n.parent;
  return t;
};
var kr = class _kr {
  constructor(t, n, r, a = false) {
    this.data = t, this.config = n, this.parent = r, this.root = a, this.uid = HS++, this.checked = false, this.indeterminate = false, this.loading = false;
    const { value: o, label: l, children: s } = n, u = t[s], c = WS(this);
    this.level = a ? 0 : r ? r.level + 1 : 1, this.value = t[o], this.label = t[l], this.pathNodes = c, this.pathValues = c.map((f) => f.value), this.pathLabels = c.map((f) => f.label), this.childrenData = u, this.children = (u || []).map((f) => new _kr(f, n, this)), this.loaded = !n.lazy || this.isLeaf || !qr(u);
  }
  get isDisabled() {
    const { data: t, parent: n, config: r } = this, { disabled: a, checkStrictly: o } = r;
    return (dt(a) ? a(t, this) : !!t[a]) || !o && (n == null ? void 0 : n.isDisabled);
  }
  get isLeaf() {
    const { data: t, config: n, childrenData: r, loaded: a } = this, { lazy: o, leaf: l } = n, s = dt(l) ? l(t, this) : t[l];
    return Un(s) ? o && !a ? false : !(Array.isArray(r) && r.length) : !!s;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(t) {
    const { childrenData: n, children: r } = this, a = new _kr(t, this.config, this);
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
    const { children: t } = this, n = t.filter((a) => !a.isDisabled), r = n.length ? n.every((a) => a.checked) : false;
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
};
var rl = (e, t) => e.reduce((n, r) => (r.isLeaf ? n.push(r) : (!t && n.push(r), n = n.concat(rl(r.children, t))), n), []);
var Bi = class {
  constructor(t, n) {
    this.config = n;
    const r = (t || []).map((a) => new kr(a, this.config));
    this.nodes = r, this.allNodes = rl(r, false), this.leafNodes = rl(r, true);
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
  getNodeByValue(t, n = false) {
    return !t && t !== 0 ? null : this.getFlattedNodes(n).find((a) => tn(a.value, t) || tn(a.pathValues, t)) || null;
  }
  getSameNode(t) {
    return t && this.getFlattedNodes(false).find(({ value: r, level: a }) => tn(t.value, r) && t.level === a) || null;
  }
};
var td = Me({
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
});
var jS = {
  expandTrigger: "click",
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: fr,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
var KS = (e) => computed(() => ({
  ...jS,
  ...e.props
}));
var zi = (e) => {
  if (!e)
    return 0;
  const t = e.id.split("-");
  return Number(t[t.length - 2]);
};
var qS = (e) => {
  if (!e)
    return;
  const t = e.querySelector("input");
  t ? t.click() : tu(e) && e.click();
};
var YS = (e, t) => {
  const n = t.slice(0), r = n.map((o) => o.uid), a = e.reduce((o, l) => {
    const s = r.indexOf(l.uid);
    return s > -1 && (o.push(l), n.splice(s, 1), r.splice(s, 1)), o;
  }, []);
  return a.push(...n), a;
};
var US = defineComponent({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu: VS
  },
  props: {
    ...td,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  emits: [ft, Gn, "close", "expand-change"],
  setup(e, { emit: t, slots: n }) {
    let r = false;
    const a = we("cascader"), o = KS(e);
    let l = null;
    const s = ref(true), u = ref([]), c = ref(null), f = ref([]), p = ref(null), m = ref([]), h3 = computed(() => o.value.expandTrigger === "hover"), v = computed(() => e.renderLabel || n.default), d = () => {
      const { options: F } = e, N = o.value;
      r = false, l = new Bi(F, N), f.value = [l.getNodes()], N.lazy && qr(e.options) ? (s.value = false, y(void 0, (B) => {
        B && (l = new Bi(B, N), f.value = [l.getNodes()]), s.value = true, T(false, true);
      })) : T(false, true);
    }, y = (F, N) => {
      const B = o.value;
      F = F || new kr({}, B, void 0, true), F.loading = true;
      const W = (q) => {
        const M = F, H = M.root ? null : M;
        q && (l == null || l.appendNodes(q, H)), M.loading = false, M.loaded = true, M.childrenData = M.childrenData || [], N && N(q);
      };
      B.lazyLoad(F, W);
    }, w = (F, N) => {
      var B;
      const { level: W } = F, q = f.value.slice(0, W);
      let M;
      F.isLeaf ? M = F.pathNodes[W - 2] : (M = F, q.push(F.children)), ((B = p.value) == null ? void 0 : B.uid) !== (M == null ? void 0 : M.uid) && (p.value = F, f.value = q, !N && t("expand-change", (F == null ? void 0 : F.pathValues) || []));
    }, C = (F, N, B = true) => {
      const { checkStrictly: W, multiple: q } = o.value, M = m.value[0];
      r = true, !q && (M == null || M.doCheck(false)), F.doCheck(N), $(), B && !q && !W && t("close"), !B && !q && !W && g(F);
    }, g = (F) => {
      F && (F = F.parent, g(F), F && w(F));
    }, b = (F) => l == null ? void 0 : l.getFlattedNodes(F), k = (F) => {
      var N;
      return (N = b(F)) == null ? void 0 : N.filter((B) => B.checked !== false);
    }, S = () => {
      m.value.forEach((F) => F.doCheck(false)), $(), f.value = f.value.slice(0, 1), p.value = null, t("expand-change", []);
    }, $ = () => {
      var F;
      const { checkStrictly: N, multiple: B } = o.value, W = m.value, q = k(!N), M = YS(W, q), H = M.map((_) => _.valueByOption);
      m.value = M, c.value = B ? H : (F = H[0]) != null ? F : null;
    }, T = (F = false, N = false) => {
      const { modelValue: B } = e, { lazy: W, multiple: q, checkStrictly: M } = o.value, H = !M;
      if (!(!s.value || r || !N && tn(B, c.value)))
        if (W && !F) {
          const D = js(Jg(mn(B))).map((U) => l == null ? void 0 : l.getNodeByValue(U)).filter((U) => !!U && !U.loaded && !U.loading);
          D.length ? D.forEach((U) => {
            y(U, () => T(false, N));
          }) : T(true, N);
        } else {
          const _ = q ? mn(B) : [B], D = js(_.map((U) => l == null ? void 0 : l.getNodeByValue(U, H)));
          R(D, N), c.value = Mu(B);
        }
    }, R = (F, N = true) => {
      const { checkStrictly: B } = o.value, W = m.value, q = F.filter((_) => !!_ && (B || _.isLeaf)), M = l == null ? void 0 : l.getSameNode(p.value), H = N && M || q[0];
      H ? H.pathNodes.forEach((_) => w(_, true)) : p.value = null, W.forEach((_) => _.doCheck(false)), q.forEach((_) => _.doCheck(true)), m.value = q, nextTick(z);
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
        case Le.up:
        case Le.down: {
          F.preventDefault();
          const W = B === Le.up ? -1 : 1;
          $a(nu(N, W, `.${a.b("node")}[tabindex="-1"]`));
          break;
        }
        case Le.left: {
          F.preventDefault();
          const W = u.value[zi(N) - 1], q = W == null ? void 0 : W.$el.querySelector(`.${a.b("node")}[aria-expanded="true"]`);
          $a(q);
          break;
        }
        case Le.right: {
          F.preventDefault();
          const W = u.value[zi(N) + 1], q = W == null ? void 0 : W.$el.querySelector(`.${a.b("node")}[tabindex="-1"]`);
          $a(q);
          break;
        }
        case Le.enter:
          qS(N);
          break;
      }
    };
    return provide(Kl, reactive({
      config: o,
      expandingNode: p,
      checkedNodes: m,
      isHoverMenu: h3,
      initialLoaded: s,
      renderLabelFn: v,
      lazyLoad: y,
      expandNode: w,
      handleCheckChange: C
    })), watch([o, () => e.options], d, {
      deep: true,
      immediate: true
    }), watch(() => e.modelValue, () => {
      r = false, T();
    }, {
      deep: true
    }), watch(() => c.value, (F) => {
      tn(F, e.modelValue) || (t(ft, F), t(Gn, F));
    }), onBeforeUpdate(() => u.value = []), onMounted(() => !qr(e.modelValue) && T()), {
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
  const l = resolveComponent("el-cascader-menu");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([e.ns.b("panel"), e.ns.is("bordered", e.border)]),
    onKeydown: t[0] || (t[0] = (...s) => e.handleKeyDown && e.handleKeyDown(...s))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(e.menus, (s, u) => (openBlock(), createBlock(l, {
      key: u,
      ref_for: true,
      ref: (c) => e.menuList[u] = c,
      index: u,
      nodes: [...s]
    }, null, 8, ["index", "nodes"]))), 128))
  ], 34);
}
var Aa = Ae(US, [["render", GS], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);
Aa.install = (e) => {
  e.component(Aa.name, Aa);
};
var XS = Aa;
var ql = Me({
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
});
var ZS = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
};
var JS = defineComponent({
  name: "ElTag"
});
var QS = defineComponent({
  ...JS,
  props: ql,
  emits: ZS,
  setup(e, { emit: t }) {
    const n = e, r = Ut(), a = we("tag"), o = computed(() => {
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
    return (u, c) => u.disableTransitions ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(unref(o)),
      style: normalizeStyle({ backgroundColor: u.color }),
      onClick: s
    }, [
      createBaseVNode("span", {
        class: normalizeClass(unref(a).e("content"))
      }, [
        renderSlot(u.$slots, "default")
      ], 2),
      u.closable ? (openBlock(), createBlock(unref(Ie), {
        key: 0,
        class: normalizeClass(unref(a).e("close")),
        onClick: withModifiers(l, ["stop"])
      }, {
        default: withCtx(() => [
          createVNode(unref(Hs))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
    ], 6)) : (openBlock(), createBlock(Transition, {
      key: 1,
      name: `${unref(a).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass(unref(o)),
          style: normalizeStyle({ backgroundColor: u.color }),
          onClick: s
        }, [
          createBaseVNode("span", {
            class: normalizeClass(unref(a).e("content"))
          }, [
            renderSlot(u.$slots, "default")
          ], 2),
          u.closable ? (openBlock(), createBlock(unref(Ie), {
            key: 0,
            class: normalizeClass(unref(a).e("close")),
            onClick: withModifiers(l, ["stop"])
          }, {
            default: withCtx(() => [
              createVNode(unref(Hs))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var ek = Ae(QS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
var al = Ht(ek);
var tk = Me({
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
    default: true
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: false
  },
  debounce: {
    type: Number,
    default: 300
  },
  beforeFilter: {
    type: be(Function),
    default: () => true
  },
  popperClass: {
    type: String,
    default: ""
  },
  teleported: uo.teleported,
  tagType: { ...ql.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
var nk = {
  [ft]: (e) => !!e || e === null,
  [Gn]: (e) => !!e || e === null,
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  visibleChange: (e) => Jt(e),
  expandChange: (e) => !!e,
  removeTag: (e) => !!e
};
var rk = { key: 0 };
var ak = ["placeholder", "onKeydown"];
var ok = ["onClick"];
var lk = "ElCascader";
var sk = defineComponent({
  name: lk
});
var ik = defineComponent({
  ...sk,
  props: tk,
  emits: nk,
  setup(e, { expose: t, emit: n }) {
    const r = e, a = {
      modifiers: [
        {
          name: "arrowPosition",
          enabled: true,
          phase: "main",
          fn: ({ state: L }) => {
            const { modifiersData: X, placement: j } = L;
            ["right", "left", "bottom", "top"].includes(j) || (X.arrow.x = 35);
          },
          requires: ["arrow"]
        }
      ]
    }, o = useAttrs();
    let l = 0, s = 0;
    const u = we("cascader"), c = we("input"), { t: f } = ot(), { form: p, formItem: m } = _n(), h3 = ref(null), v = ref(null), d = ref(null), y = ref(null), w = ref(null), C = ref(false), g = ref(false), b = ref(false), k = ref(false), S = ref(""), $ = ref(""), T = ref([]), R = ref([]), z = ref([]), V = ref(false), F = computed(() => o.style), N = computed(() => r.disabled || (p == null ? void 0 : p.disabled)), B = computed(() => r.placeholder || f("el.cascader.placeholder")), W = computed(() => $.value || T.value.length > 0 || V.value ? "" : B.value), q = Ut(), M = computed(() => ["small"].includes(q.value) ? "small" : "default"), H = computed(() => !!r.props.multiple), _ = computed(() => !r.filterable || H.value), D = computed(() => H.value ? $.value : S.value), U = computed(() => {
      var L;
      return ((L = y.value) == null ? void 0 : L.checkedNodes) || [];
    }), I = computed(() => !r.clearable || N.value || b.value || !g.value ? false : !!U.value.length), G = computed(() => {
      const { showAllLevels: L, separator: X } = r, j = U.value;
      return j.length ? H.value ? "" : j[0].calcText(L, X) : "";
    }), ne = computed({
      get() {
        return Mu(r.modelValue);
      },
      set(L) {
        n(ft, L), n(Gn, L), r.validateEvent && (m == null || m.validate("change").catch((X) => nt(X)));
      }
    }), he = computed(() => [
      u.b(),
      u.m(q.value),
      u.is("disabled", N.value),
      o.class
    ]), ge = computed(() => [
      c.e("icon"),
      "icon-arrow-down",
      u.is("reverse", C.value)
    ]), se = computed(() => u.is("focus", C.value || k.value)), le = computed(() => {
      var L, X;
      return (X = (L = h3.value) == null ? void 0 : L.popperRef) == null ? void 0 : X.contentRef;
    }), ue = (L) => {
      var X, j, te;
      N.value || (L = L ?? !C.value, L !== C.value && (C.value = L, (j = (X = v.value) == null ? void 0 : X.input) == null || j.setAttribute("aria-expanded", `${L}`), L ? (ve(), nextTick((te = y.value) == null ? void 0 : te.scrollToExpandingNode)) : r.filterable && st(), n("visibleChange", L)));
    }, ve = () => {
      nextTick(() => {
        var L;
        (L = h3.value) == null || L.updatePopper();
      });
    }, _e = () => {
      b.value = false;
    }, Pe = (L) => {
      const { showAllLevels: X, separator: j } = r;
      return {
        node: L,
        key: L.uid,
        text: L.calcText(X, j),
        hitState: false,
        closable: !N.value && !L.isDisabled,
        isCollapseTag: false
      };
    }, He = (L) => {
      var X;
      const j = L.node;
      j.doCheck(false), (X = y.value) == null || X.calculateCheckedValue(), n("removeTag", j.valueByOption);
    }, We = () => {
      if (!H.value)
        return;
      const L = U.value, X = [], j = [];
      if (L.forEach((te) => j.push(Pe(te))), R.value = j, L.length) {
        const [te, ...P] = L, ie = P.length;
        X.push(Pe(te)), ie && (r.collapseTags ? X.push({
          key: -1,
          text: `+ ${ie}`,
          closable: false,
          isCollapseTag: true
        }) : P.forEach((Ce) => X.push(Pe(Ce))));
      }
      T.value = X;
    }, Ue = () => {
      var L, X;
      const { filterMethod: j, showAllLevels: te, separator: P } = r, ie = (X = (L = y.value) == null ? void 0 : L.getFlattedNodes(!r.props.checkStrictly)) == null ? void 0 : X.filter((Ce) => Ce.isDisabled ? false : (Ce.calcText(te, P), j(Ce, D.value)));
      H.value && (T.value.forEach((Ce) => {
        Ce.hitState = false;
      }), R.value.forEach((Ce) => {
        Ce.hitState = false;
      })), b.value = true, z.value = ie, ve();
    }, je = () => {
      var L;
      let X;
      b.value && w.value ? X = w.value.$el.querySelector(`.${u.e("suggestion-item")}`) : X = (L = y.value) == null ? void 0 : L.$el.querySelector(`.${u.b("node")}[tabindex="-1"]`), X && (X.focus(), !b.value && X.click());
    }, rt = () => {
      var L, X;
      const j = (L = v.value) == null ? void 0 : L.input, te = d.value, P = (X = w.value) == null ? void 0 : X.$el;
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
    }, ht = (L) => {
      var X;
      return (X = y.value) == null ? void 0 : X.getCheckedNodes(L);
    }, lt = (L) => {
      ve(), n("expandChange", L);
    }, Se = (L) => {
      var X;
      const j = (X = L.target) == null ? void 0 : X.value;
      if (L.type === "compositionend")
        V.value = false, nextTick(() => Z(j));
      else {
        const te = j[j.length - 1] || "";
        V.value = !Ml(te);
      }
    }, ut = (L) => {
      if (!V.value)
        switch (L.code) {
          case Le.enter:
            ue();
            break;
          case Le.down:
            ue(true), nextTick(je), L.preventDefault();
            break;
          case Le.esc:
            C.value === true && (L.preventDefault(), L.stopPropagation(), ue(false));
            break;
          case Le.tab:
            ue(false);
            break;
        }
    }, ct = () => {
      var L;
      (L = y.value) == null || L.clearCheckedNodes(), !C.value && r.filterable && st(), ue(false);
    }, st = () => {
      const { value: L } = G;
      S.value = L, $.value = L;
    }, Ze = (L) => {
      var X, j;
      const { checked: te } = L;
      H.value ? (X = y.value) == null || X.handleCheckChange(L, !te, false) : (!te && ((j = y.value) == null || j.handleCheckChange(L, true, false)), ue(false));
    }, ae = (L) => {
      const X = L.target, { code: j } = L;
      switch (j) {
        case Le.up:
        case Le.down: {
          const te = j === Le.up ? -1 : 1;
          $a(nu(X, te, `.${u.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case Le.enter:
          X.click();
          break;
      }
    }, ke = () => {
      const L = T.value, X = L[L.length - 1];
      s = $.value ? 0 : s + 1, !(!X || !s || r.collapseTags && L.length > 1) && (X.hitState ? He(X) : X.hitState = true);
    }, Fe = (L) => {
      const X = L.target, j = u.e("search-input");
      X.className === j && (k.value = true), n("focus", L);
    }, Je = (L) => {
      k.value = false, n("blur", L);
    }, ee = Rn(() => {
      const { value: L } = D;
      if (!L)
        return;
      const X = r.beforeFilter(L);
      lf(X) ? X.then(Ue).catch(() => {
      }) : X !== false ? Ue() : _e();
    }, r.debounce), Z = (L, X) => {
      !C.value && ue(true), !(X != null && X.isComposing) && (L ? ee() : _e());
    };
    return watch(b, ve), watch([U, N], We), watch(T, () => {
      nextTick(() => rt());
    }), watch(G, st, { immediate: true }), onMounted(() => {
      const L = v.value.input, X = Number.parseFloat(Gd(c.cssVarName("input-height"), L).value) - 2;
      l = L.offsetHeight || X, Nn(L, rt);
    }), t({
      getCheckedNodes: ht,
      cascaderPanelRef: y,
      togglePopperVisible: ue,
      contentRef: le
    }), (L, X) => (openBlock(), createBlock(unref(Zr), {
      ref_key: "tooltipRef",
      ref: h3,
      visible: C.value,
      teleported: L.teleported,
      "popper-class": [unref(u).e("dropdown"), L.popperClass],
      "popper-options": a,
      "fallback-placements": [
        "bottom-start",
        "bottom",
        "top-start",
        "top",
        "right",
        "left"
      ],
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      placement: "bottom-start",
      transition: `${unref(u).namespace.value}-zoom-in-top`,
      effect: "light",
      pure: "",
      persistent: "",
      onHide: _e
    }, {
      default: withCtx(() => [
        withDirectives((openBlock(), createElementBlock("div", {
          class: normalizeClass(unref(he)),
          style: normalizeStyle(unref(F)),
          onClick: X[5] || (X[5] = () => ue(unref(_) ? void 0 : true)),
          onKeydown: ut,
          onMouseenter: X[6] || (X[6] = (j) => g.value = true),
          onMouseleave: X[7] || (X[7] = (j) => g.value = false)
        }, [
          createVNode(unref(Ft), {
            ref_key: "input",
            ref: v,
            modelValue: S.value,
            "onUpdate:modelValue": X[1] || (X[1] = (j) => S.value = j),
            placeholder: unref(W),
            readonly: unref(_),
            disabled: unref(N),
            "validate-event": false,
            size: unref(q),
            class: normalizeClass(unref(se)),
            tabindex: unref(H) && L.filterable && !unref(N) ? -1 : void 0,
            onCompositionstart: Se,
            onCompositionupdate: Se,
            onCompositionend: Se,
            onFocus: Fe,
            onBlur: Je,
            onInput: Z
          }, {
            suffix: withCtx(() => [
              unref(I) ? (openBlock(), createBlock(unref(Ie), {
                key: "clear",
                class: normalizeClass([unref(c).e("icon"), "icon-circle-close"]),
                onClick: withModifiers(ct, ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(aa))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : (openBlock(), createBlock(unref(Ie), {
                key: "arrow-down",
                class: normalizeClass(unref(ge)),
                onClick: X[0] || (X[0] = withModifiers((j) => ue(), ["stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(unref(to))
                ]),
                _: 1
              }, 8, ["class"]))
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "tabindex"]),
          unref(H) ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "tagWrapper",
            ref: d,
            class: normalizeClass(unref(u).e("tags"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(T.value, (j) => (openBlock(), createBlock(unref(al), {
              key: j.key,
              type: L.tagType,
              size: unref(M),
              hit: j.hitState,
              closable: j.closable,
              "disable-transitions": "",
              onClose: (te) => He(j)
            }, {
              default: withCtx(() => [
                j.isCollapseTag === false ? (openBlock(), createElementBlock("span", rk, toDisplayString(j.text), 1)) : (openBlock(), createBlock(unref(Zr), {
                  key: 1,
                  disabled: C.value || !L.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  placement: "bottom",
                  effect: "light"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(j.text), 1)
                  ]),
                  content: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass(unref(u).e("collapse-tags"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(R.value.slice(1), (te, P) => (openBlock(), createElementBlock("div", {
                        key: P,
                        class: normalizeClass(unref(u).e("collapse-tag"))
                      }, [
                        (openBlock(), createBlock(unref(al), {
                          key: te.key,
                          class: "in-tooltip",
                          type: L.tagType,
                          size: unref(M),
                          hit: te.hitState,
                          closable: te.closable,
                          "disable-transitions": "",
                          onClose: (ie) => He(te)
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", null, toDisplayString(te.text), 1)
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
            L.filterable && !unref(N) ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              "onUpdate:modelValue": X[2] || (X[2] = (j) => $.value = j),
              type: "text",
              class: normalizeClass(unref(u).e("search-input")),
              placeholder: unref(G) ? "" : unref(B),
              onInput: X[3] || (X[3] = (j) => Z($.value, j)),
              onClick: X[4] || (X[4] = withModifiers((j) => ue(true), ["stop"])),
              onKeydown: withKeys(ke, ["delete"]),
              onCompositionstart: Se,
              onCompositionupdate: Se,
              onCompositionend: Se,
              onFocus: Fe,
              onBlur: Je
            }, null, 42, ak)), [
              [vModelText, $.value]
            ]) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ], 38)), [
          [unref(Sr), () => ue(false), unref(le)]
        ])
      ]),
      content: withCtx(() => [
        withDirectives(createVNode(unref(XS), {
          ref_key: "cascaderPanelRef",
          ref: y,
          modelValue: unref(ne),
          "onUpdate:modelValue": X[8] || (X[8] = (j) => isRef(ne) ? ne.value = j : null),
          options: L.options,
          props: r.props,
          border: false,
          "render-label": L.$slots.default,
          onExpandChange: lt,
          onClose: X[9] || (X[9] = (j) => L.$nextTick(() => ue(false)))
        }, null, 8, ["modelValue", "options", "props", "render-label"]), [
          [vShow, !b.value]
        ]),
        L.filterable ? withDirectives((openBlock(), createBlock(unref(Tr), {
          key: 0,
          ref_key: "suggestionPanel",
          ref: w,
          tag: "ul",
          class: normalizeClass(unref(u).e("suggestion-panel")),
          "view-class": unref(u).e("suggestion-list"),
          onKeydown: ae
        }, {
          default: withCtx(() => [
            z.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(z.value, (j) => (openBlock(), createElementBlock("li", {
              key: j.uid,
              class: normalizeClass([
                unref(u).e("suggestion-item"),
                unref(u).is("checked", j.checked)
              ]),
              tabindex: -1,
              onClick: (te) => Ze(j)
            }, [
              createBaseVNode("span", null, toDisplayString(j.text), 1),
              j.checked ? (openBlock(), createBlock(unref(Ie), { key: 0 }, {
                default: withCtx(() => [
                  createVNode(unref(Ku))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ], 10, ok))), 128)) : renderSlot(L.$slots, "empty", { key: 1 }, () => [
              createBaseVNode("li", {
                class: normalizeClass(unref(u).e("empty-text"))
              }, toDisplayString(unref(f)("el.cascader.noMatch")), 3)
            ])
          ]),
          _: 3
        }, 8, ["class", "view-class"])), [
          [vShow, b.value]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "transition"]));
  }
});
var Na = Ae(ik, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader/src/cascader.vue"]]);
Na.install = (e) => {
  e.component(Na.name, Na);
};
var uk = Na;
var ck = uk;
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
var fk = ln(dk);
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
        var m = l(this).startOf(r).date(c).startOf(n).subtract(1, "millisecond"), h3 = this.diff(m, n, true);
        return h3 < 0 ? l(this).startOf("week").week() : Math.ceil(h3);
      }, s.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(rd);
var pk = rd.exports;
var vk = ln(pk);
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
var mk = ln(hk);
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
var bk = ln(gk);
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
var wk = ln(yk);
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
var Sk = ln(Ck);
var Yl = Symbol();
var kk = Me({
  ...Rc,
  type: {
    type: be(String),
    default: "date"
  }
});
var $k = ["date", "dates", "year", "month", "week", "range"];
var Ul = Me({
  disabledDate: {
    type: be(Function)
  },
  date: {
    type: be(Object),
    required: true
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
      selecting: false
    })
  }
});
var id = Me({
  type: {
    type: be(String),
    required: true,
    values: Uy
  }
});
var ud = Me({
  unlinkPanels: Boolean,
  parsedValue: {
    type: be(Array)
  }
});
var cd = (e) => ({
  type: String,
  values: $k,
  default: e
});
var _k = Me({
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
});
var Ek = Me({
  ...Ul,
  cellClassName: {
    type: be(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: cd("date")
});
var ol = (e) => {
  if (!tt(e))
    return false;
  const [t, n] = e;
  return xe.isDayjs(t) && xe.isDayjs(n) && t.isSameOrBefore(n);
};
var dd = (e, { lang: t, unit: n, unlinkPanels: r }) => {
  let a;
  if (tt(e)) {
    let [o, l] = e.map((s) => xe(s).locale(t));
    return r || (l = o.add(1, n)), [o, l];
  } else
    e ? a = xe(e) : a = xe();
  return a = a.locale(t), [a, a.add(1, n)];
};
var Tk = (e, t, {
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
      let h3 = p[m + n];
      h3 || (h3 = {
        row: f,
        column: m,
        type: "normal",
        inRange: false,
        start: false,
        end: false
      });
      const v = f * e.column + m, d = s(v);
      h3.dayjs = d, h3.date = d.toDate(), h3.timestamp = d.valueOf(), h3.type = "normal", h3.inRange = !!(r && d.isSameOrAfter(r, l) && a && d.isSameOrBefore(a, l)) || !!(r && d.isSameOrBefore(r, l) && a && d.isSameOrAfter(a, l)), r != null && r.isSameOrAfter(a) ? (h3.start = !!a && d.isSame(a, l), h3.end = r && d.isSame(r, l)) : (h3.start = !!r && d.isSame(r, l), h3.end = !!a && d.isSame(a, l)), d.isSame(o, l) && (h3.type = "today"), u == null || u(h3, { rowIndex: f, columnIndex: m }), p[m + n] = h3;
    }
    c == null || c(p);
  }
};
var Ok = Me({
  cell: {
    type: be(Object)
  }
});
var Pk = defineComponent({
  name: "ElDatePickerCell",
  props: Ok,
  setup(e) {
    const t = we("date-table-cell"), {
      slots: n
    } = inject(Yl);
    return () => {
      const {
        cell: r
      } = e;
      if (n.default) {
        const a = n.default(r).filter((o) => o.patchFlag !== -2 && o.type.toString() !== "Symbol(Comment)");
        if (a.length)
          return a;
      }
      return createVNode("div", {
        class: t.b()
      }, [createVNode("span", {
        class: t.e("text")
      }, [r == null ? void 0 : r.text])]);
    };
  }
});
var xk = ["aria-label", "onMousedown"];
var Mk = {
  key: 0,
  scope: "col"
};
var Ak = ["aria-label"];
var Nk = ["aria-current", "aria-selected", "tabindex"];
var Rk = defineComponent({
  __name: "basic-date-table",
  props: Ek,
  emits: ["changerange", "pick", "select"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = we("date-table"), { t: o, lang: l } = ot(), s = ref(), u = ref(), c = ref(), f = ref(), p = ref([[], [], [], [], [], []]);
    let m = false;
    const h3 = r.date.$locale().weekStart || 7, v = r.date.locale("en").localeData().weekdaysShort().map((I) => I.toLowerCase()), d = computed(() => h3 > 3 ? 7 - h3 : -h3), y = computed(() => {
      const I = r.date.startOf("month");
      return I.subtract(I.day() || 7, "day");
    }), w = computed(() => v.concat(v).slice(h3, h3 + 7)), C = computed(() => yu(T.value).some((I) => I.isCurrent)), g = computed(() => {
      const I = r.date.startOf("month"), G = I.day() || 7, ne = I.daysInMonth(), he = I.subtract(1, "month").daysInMonth();
      return {
        startOfMonthDay: G,
        dateCountOfMonth: ne,
        dateCountOfLastMonth: he
      };
    }), b = computed(() => r.selectionMode === "dates" ? mn(r.parsedValue) : []), k = (I, {
      count: G,
      rowIndex: ne,
      columnIndex: he
    }) => {
      const { startOfMonthDay: ge, dateCountOfMonth: se, dateCountOfLastMonth: le } = unref(g), ue = unref(d);
      if (ne >= 0 && ne <= 1) {
        const ve = ge + ue < 0 ? 7 + ge + ue : ge + ue;
        if (he + ne * 7 >= ve)
          return I.text = G, true;
        I.text = le - (ve - he % 7) + 1 + ne * 7, I.type = "prev-month";
      } else
        return G <= se ? I.text = G : (I.text = G - se, I.type = "next-month"), true;
      return false;
    }, S = (I, {
      columnIndex: G,
      rowIndex: ne
    }, he) => {
      const { disabledDate: ge, cellClassName: se } = r, le = unref(b), ue = k(I, { count: he, rowIndex: ne, columnIndex: G }), ve = I.dayjs.toDate();
      return I.selected = le.find((_e) => _e.valueOf() === I.dayjs.valueOf()), I.isSelected = !!I.selected, I.isCurrent = V(I), I.disabled = ge == null ? void 0 : ge(ve), I.customClass = se == null ? void 0 : se(ve), ue;
    }, $ = (I) => {
      if (r.selectionMode === "week") {
        const [G, ne] = r.showWeekNumber ? [1, 7] : [0, 6], he = U(I[G + 1]);
        I[G].inRange = he, I[G].start = he, I[ne].inRange = he, I[ne].end = he;
      }
    }, T = computed(() => {
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
        now: xe().locale(unref(l)).startOf(le),
        unit: le,
        relativeDateGetter: (ve) => y.value.add(ve - ge, le),
        setCellMetadata: (...ve) => {
          S(...ve, ue) && (ue += 1);
        },
        setRowMetadata: $
      }), se;
    });
    watch(() => r.date, async () => {
      var I, G;
      (I = s.value) != null && I.contains(document.activeElement) && (await nextTick(), (G = u.value) == null || G.focus());
    });
    const R = async () => {
      var I;
      (I = u.value) == null || I.focus();
    }, z = (I = "") => ["normal", "today"].includes(I), V = (I) => r.selectionMode === "date" && z(I.type) && F(I, r.parsedValue), F = (I, G) => G ? xe(G).locale(l.value).isSame(r.date.date(Number(I.text)), "day") : false, N = (I) => {
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
        selecting: true,
        endDate: B(he, ge)
      }));
    }, q = (I) => !C.value && (I == null ? void 0 : I.text) === 1 && I.type === "normal" || I.isCurrent, M = (I) => {
      m || C.value || r.selectionMode !== "date" || D(I, true);
    }, H = (I) => {
      I.target.closest("td") && (m = true);
    }, _ = (I) => {
      I.target.closest("td") && (m = false);
    }, D = (I, G = false) => {
      const ne = I.target.closest("td");
      if (!ne)
        return;
      const he = ne.parentNode.rowIndex - 1, ge = ne.cellIndex, se = T.value[he][ge];
      if (se.disabled || se.type === "week")
        return;
      const le = B(he, ge);
      if (r.selectionMode === "range")
        !r.rangeState.selecting || !r.minDate ? (n("pick", { minDate: le, maxDate: null }), n("select", true)) : (le >= r.minDate ? n("pick", { minDate: r.minDate, maxDate: le }) : n("pick", { minDate: le, maxDate: r.minDate }), n("select", false));
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
        return false;
      let G = r.date.startOf("day");
      if (I.type === "prev-month" && (G = G.subtract(1, "month")), I.type === "next-month" && (G = G.add(1, "month")), G = G.date(Number.parseInt(I.text, 10)), r.parsedValue && !Array.isArray(r.parsedValue)) {
        const ne = (r.parsedValue.day() - h3 + 7) % 7 - 1;
        return r.parsedValue.subtract(ne, "day").isSame(G, "day");
      }
      return false;
    };
    return t({
      focus: R
    }), (I, G) => (openBlock(), createElementBlock("table", {
      role: "grid",
      "aria-label": unref(o)("el.datepicker.dateTablePrompt"),
      cellspacing: "0",
      cellpadding: "0",
      class: normalizeClass([unref(a).b(), { "is-week-mode": I.selectionMode === "week" }]),
      onClick: D,
      onMousemove: W,
      onMousedown: withModifiers(H, ["prevent"]),
      onMouseup: _
    }, [
      createBaseVNode("tbody", {
        ref_key: "tbodyRef",
        ref: s
      }, [
        createBaseVNode("tr", null, [
          I.showWeekNumber ? (openBlock(), createElementBlock("th", Mk, toDisplayString(unref(o)("el.datepicker.week")), 1)) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(w), (ne, he) => (openBlock(), createElementBlock("th", {
            key: he,
            scope: "col",
            "aria-label": unref(o)("el.datepicker.weeksFull." + ne)
          }, toDisplayString(unref(o)("el.datepicker.weeks." + ne)), 9, Ak))), 128))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(T), (ne, he) => (openBlock(), createElementBlock("tr", {
          key: he,
          class: normalizeClass([unref(a).e("row"), { current: U(ne[1]) }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(ne, (ge, se) => (openBlock(), createElementBlock("td", {
            key: `${he}.${se}`,
            ref_for: true,
            ref: (le) => q(ge) && (u.value = le),
            class: normalizeClass(N(ge)),
            "aria-current": ge.isCurrent ? "date" : void 0,
            "aria-selected": ge.isCurrent,
            tabindex: q(ge) ? 0 : -1,
            onFocus: M
          }, [
            createVNode(unref(Pk), { cell: ge }, null, 8, ["cell"])
          ], 42, Nk))), 128))
        ], 2))), 128))
      ], 512)
    ], 42, xk));
  }
});
var ll = Ae(Rk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);
var Ik = Me({
  ...Ul,
  selectionMode: cd("month")
});
var Lk = ["aria-label"];
var Dk = ["aria-selected", "aria-label", "tabindex", "onKeydown"];
var Fk = { class: "cell" };
var Bk = defineComponent({
  __name: "basic-month-table",
  props: Ik,
  emits: ["changerange", "pick", "select"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = (b, k, S) => {
      const $ = xe().locale(S).startOf("month").month(k).year(b), T = $.daysInMonth();
      return xc(T).map((R) => $.add(R, "day").toDate());
    }, o = we("month-table"), { t: l, lang: s } = ot(), u = ref(), c = ref(), f = ref(r.date.locale("en").localeData().monthsShort().map((b) => b.toLowerCase())), p = ref([
      [],
      [],
      []
    ]), m = ref(), h3 = ref(), v = computed(() => {
      var b, k;
      const S = p.value, $ = xe().locale(s.value).startOf("month");
      for (let T = 0; T < 3; T++) {
        const R = S[T];
        for (let z = 0; z < 4; z++) {
          const V = R[z] || (R[z] = {
            row: T,
            column: z,
            type: "normal",
            inRange: false,
            start: false,
            end: false,
            text: -1,
            disabled: false
          });
          V.type = "normal";
          const F = T * 4 + z, N = r.date.startOf("year").month(F), B = r.rangeState.endDate || r.maxDate || r.rangeState.selecting && r.minDate || null;
          V.inRange = !!(r.minDate && N.isSameOrAfter(r.minDate, "month") && B && N.isSameOrBefore(B, "month")) || !!(r.minDate && N.isSameOrBefore(r.minDate, "month") && B && N.isSameOrAfter(B, "month")), (b = r.minDate) != null && b.isSameOrAfter(B) ? (V.start = !!(B && N.isSame(B, "month")), V.end = r.minDate && N.isSame(r.minDate, "month")) : (V.start = !!(r.minDate && N.isSame(r.minDate, "month")), V.end = !!(B && N.isSame(B, "month"))), $.isSame(N) && (V.type = "today"), V.text = F, V.disabled = ((k = r.disabledDate) == null ? void 0 : k.call(r, N.toDate())) || false;
        }
      }
      return S;
    }), d = () => {
      var b;
      (b = c.value) == null || b.focus();
    }, y = (b) => {
      const k = {}, S = r.date.year(), $ = /* @__PURE__ */ new Date(), T = b.text;
      return k.disabled = r.disabledDate ? a(S, T, s.value).every(r.disabledDate) : false, k.current = mn(r.parsedValue).findIndex((R) => xe.isDayjs(R) && R.year() === S && R.month() === T) >= 0, k.today = $.getFullYear() === S && $.getMonth() === T, b.inRange && (k["in-range"] = true, b.start && (k["start-date"] = true), b.end && (k["end-date"] = true)), k;
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
      v.value[$][T].disabled || ($ !== m.value || T !== h3.value) && (m.value = $, h3.value = T, n("changerange", {
        selecting: true,
        endDate: r.date.startOf("year").month($ * 4 + T)
      }));
    }, g = (b) => {
      var k;
      const S = (k = b.target) == null ? void 0 : k.closest("td");
      if ((S == null ? void 0 : S.tagName) !== "TD" || ir(S, "disabled"))
        return;
      const $ = S.cellIndex, R = S.parentNode.rowIndex * 4 + $, z = r.date.startOf("year").month(R);
      r.selectionMode === "range" ? r.rangeState.selecting ? (r.minDate && z >= r.minDate ? n("pick", { minDate: r.minDate, maxDate: z }) : n("pick", { minDate: z, maxDate: r.minDate }), n("select", false)) : (n("pick", { minDate: z, maxDate: null }), n("select", true)) : n("pick", R);
    };
    return watch(() => r.date, async () => {
      var b, k;
      (b = u.value) != null && b.contains(document.activeElement) && (await nextTick(), (k = c.value) == null || k.focus());
    }), t({
      focus: d
    }), (b, k) => (openBlock(), createElementBlock("table", {
      role: "grid",
      "aria-label": unref(l)("el.datepicker.monthTablePrompt"),
      class: normalizeClass(unref(o).b()),
      onClick: g,
      onMousemove: C
    }, [
      createBaseVNode("tbody", {
        ref_key: "tbodyRef",
        ref: u
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(v), (S, $) => (openBlock(), createElementBlock("tr", { key: $ }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S, (T, R) => (openBlock(), createElementBlock("td", {
            key: R,
            ref_for: true,
            ref: (z) => w(T) && (c.value = z),
            class: normalizeClass(y(T)),
            "aria-selected": `${w(T)}`,
            "aria-label": unref(l)(`el.datepicker.month${+T.text + 1}`),
            tabindex: w(T) ? 0 : -1,
            onKeydown: [
              withKeys(withModifiers(g, ["prevent", "stop"]), ["space"]),
              withKeys(withModifiers(g, ["prevent", "stop"]), ["enter"])
            ]
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("span", Fk, toDisplayString(unref(l)("el.datepicker.months." + f.value[T.text])), 1)
            ])
          ], 42, Dk))), 128))
        ]))), 128))
      ], 512)
    ], 42, Lk));
  }
});
var sl = Ae(Bk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);
var { date: zk, disabledDate: Vk, parsedValue: Hk } = Ul;
var Wk = Me({
  date: zk,
  disabledDate: Vk,
  parsedValue: Hk
});
var jk = ["aria-label"];
var Kk = ["aria-selected", "tabindex", "onKeydown"];
var qk = { class: "cell" };
var Yk = { key: 1 };
var Uk = defineComponent({
  __name: "basic-year-table",
  props: Wk,
  emits: ["pick"],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = (d, y) => {
      const w = xe(String(d)).locale(y).startOf("year"), g = w.endOf("year").dayOfYear();
      return xc(g).map((b) => w.add(b, "day").toDate());
    }, o = we("year-table"), { t: l, lang: s } = ot(), u = ref(), c = ref(), f = computed(() => Math.floor(r.date.year() / 10) * 10), p = () => {
      var d;
      (d = c.value) == null || d.focus();
    }, m = (d) => {
      const y = {}, w = xe().locale(s.value);
      return y.disabled = r.disabledDate ? a(d, s.value).every(r.disabledDate) : false, y.current = mn(r.parsedValue).findIndex((C) => C.year() === d) >= 0, y.today = w.year() === d, y;
    }, h3 = (d) => d === f.value && r.date.year() < f.value && r.date.year() > f.value + 9 || mn(r.date).findIndex((y) => y.year() === d) >= 0, v = (d) => {
      const w = d.target.closest("td");
      if (w && w.textContent) {
        if (ir(w, "disabled"))
          return;
        const C = w.textContent || w.innerText;
        n("pick", Number(C));
      }
    };
    return watch(() => r.date, async () => {
      var d, y;
      (d = u.value) != null && d.contains(document.activeElement) && (await nextTick(), (y = c.value) == null || y.focus());
    }), t({
      focus: p
    }), (d, y) => (openBlock(), createElementBlock("table", {
      role: "grid",
      "aria-label": unref(l)("el.datepicker.yearTablePrompt"),
      class: normalizeClass(unref(o).b()),
      onClick: v
    }, [
      createBaseVNode("tbody", {
        ref_key: "tbodyRef",
        ref: u
      }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(3, (w, C) => createBaseVNode("tr", { key: C }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(4, (g, b) => (openBlock(), createElementBlock(Fragment, {
            key: C + "_" + b
          }, [
            C * 4 + b < 10 ? (openBlock(), createElementBlock("td", {
              key: 0,
              ref_for: true,
              ref: (k) => h3(unref(f) + C * 4 + b) && (c.value = k),
              class: normalizeClass(["available", m(unref(f) + C * 4 + b)]),
              "aria-selected": `${h3(unref(f) + C * 4 + b)}`,
              tabindex: h3(unref(f) + C * 4 + b) ? 0 : -1,
              onKeydown: [
                withKeys(withModifiers(v, ["prevent", "stop"]), ["space"]),
                withKeys(withModifiers(v, ["prevent", "stop"]), ["enter"])
              ]
            }, [
              createBaseVNode("span", qk, toDisplayString(unref(f) + C * 4 + b), 1)
            ], 42, Kk)) : (openBlock(), createElementBlock("td", Yk))
          ], 64))), 64))
        ])), 64))
      ], 512)
    ], 10, jk));
  }
});
var Gk = Ae(Uk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);
var Xk = ["onClick"];
var Zk = ["aria-label"];
var Jk = ["aria-label"];
var Qk = ["aria-label"];
var e$ = ["aria-label"];
var t$ = defineComponent({
  __name: "panel-date-pick",
  props: _k,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(e, { emit: t }) {
    const n = e, r = (ee, Z, L) => true, a = we("picker-panel"), o = we("date-picker"), l = useAttrs(), s = useSlots(), { t: u, lang: c } = ot(), f = inject("EP_PICKER_BASE"), p = inject(io), { shortcuts: m, disabledDate: h3, cellClassName: v, defaultTime: d, arrowControl: y } = f.props, w = toRef(f.props, "defaultValue"), C = ref(), g = ref(xe().locale(c.value)), b = ref(false), k = computed(() => xe(d).locale(c.value)), S = computed(() => g.value.month()), $ = computed(() => g.value.year()), T = ref([]), R = ref(null), z = ref(null), V = (ee) => T.value.length > 0 ? r(ee, T.value, n.format || "HH:mm:ss") : true, F = (ee) => d && !Pe.value && !b.value ? k.value.year(ee.year()).month(ee.month()).date(ee.date()) : ge.value ? ee.millisecond(0) : ee.startOf("day"), N = (ee, ...Z) => {
      if (!ee)
        t("pick", ee, ...Z);
      else if (tt(ee)) {
        const L = ee.map(F);
        t("pick", L, ...Z);
      } else
        t("pick", F(ee), ...Z);
      R.value = null, z.value = null, b.value = false;
    }, B = (ee, Z) => {
      if (D.value === "date") {
        ee = ee;
        let L = n.parsedValue ? n.parsedValue.year(ee.year()).month(ee.month()).date(ee.date()) : ee;
        V(L) || (L = T.value[0][0].year(ee.year()).month(ee.month()).date(ee.date())), g.value = L, N(L, ge.value || Z);
      } else
        D.value === "week" ? N(ee.date) : D.value === "dates" && N(ee, true);
    }, W = (ee) => {
      const Z = ee ? "add" : "subtract";
      g.value = g.value[Z](1, "month"), Je("month");
    }, q = (ee) => {
      const Z = g.value, L = ee ? "add" : "subtract";
      g.value = M.value === "year" ? Z[L](10, "year") : Z[L](1, "year"), Je("year");
    }, M = ref("date"), H = computed(() => {
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
    }, D = computed(() => {
      const { type: ee } = n;
      return ["week", "month", "year", "dates"].includes(ee) ? ee : "date";
    }), U = computed(() => D.value === "date" ? M.value : D.value), I = computed(() => !!m.length), G = async (ee) => {
      g.value = g.value.startOf("month").month(ee), D.value === "month" ? N(g.value, false) : (M.value = "date", ["month", "year", "date", "week"].includes(D.value) && (N(g.value, true), await nextTick(), ae())), Je("month");
    }, ne = async (ee) => {
      D.value === "year" ? (g.value = g.value.startOf("year").year(ee), N(g.value, false)) : (g.value = g.value.year(ee), M.value = "month", ["month", "year", "date", "week"].includes(D.value) && (N(g.value, true), await nextTick(), ae())), Je("year");
    }, he = async (ee) => {
      M.value = ee, await nextTick(), ae();
    }, ge = computed(() => n.type === "datetime" || n.type === "datetimerange"), se = computed(() => ge.value || D.value === "dates"), le = () => {
      if (D.value === "dates")
        N(n.parsedValue);
      else {
        let ee = n.parsedValue;
        if (!ee) {
          const Z = xe(d).locale(c.value), L = Ze();
          ee = Z.year(L.year()).month(L.month()).date(L.date());
        }
        g.value = ee, N(ee);
      }
    }, ue = () => {
      const Z = xe().locale(c.value).toDate();
      b.value = true, (!h3 || !h3(Z)) && V(Z) && (g.value = xe().locale(c.value), N(g.value));
    }, ve = computed(() => Ac(n.format)), _e = computed(() => Mc(n.format)), Pe = computed(() => {
      if (z.value)
        return z.value;
      if (!(!n.parsedValue && !w.value))
        return (n.parsedValue || g.value).format(ve.value);
    }), He = computed(() => {
      if (R.value)
        return R.value;
      if (!(!n.parsedValue && !w.value))
        return (n.parsedValue || g.value).format(_e.value);
    }), We = ref(false), Ue = () => {
      We.value = true;
    }, je = () => {
      We.value = false;
    }, rt = (ee) => ({
      hour: ee.hour(),
      minute: ee.minute(),
      second: ee.second(),
      year: ee.year(),
      month: ee.month(),
      date: ee.date()
    }), ht = (ee, Z, L) => {
      const { hour: X, minute: j, second: te } = rt(ee), P = n.parsedValue ? n.parsedValue.hour(X).minute(j).second(te) : ee;
      g.value = P, N(g.value, true), L || (We.value = Z);
    }, lt = (ee) => {
      const Z = xe(ee, ve.value).locale(c.value);
      if (Z.isValid() && V(Z)) {
        const { year: L, month: X, date: j } = rt(g.value);
        g.value = Z.year(L).month(X).date(j), z.value = null, We.value = false, N(g.value, true);
      }
    }, Se = (ee) => {
      const Z = xe(ee, _e.value).locale(c.value);
      if (Z.isValid()) {
        if (h3 && h3(Z.toDate()))
          return;
        const { hour: L, minute: X, second: j } = rt(g.value);
        g.value = Z.hour(L).minute(X).second(j), R.value = null, N(g.value, true);
      }
    }, ut = (ee) => xe.isDayjs(ee) && ee.isValid() && (h3 ? !h3(ee.toDate()) : true), ct = (ee) => D.value === "dates" ? ee.map((Z) => Z.format(n.format)) : ee.format(n.format), st = (ee) => xe(ee, n.format).locale(c.value), Ze = () => {
      const ee = xe(w.value).locale(c.value);
      if (!w.value) {
        const Z = k.value;
        return xe().hour(Z.hour()).minute(Z.minute()).second(Z.second()).locale(c.value);
      }
      return ee;
    }, ae = async () => {
      var ee;
      ["week", "month", "year", "date"].includes(D.value) && ((ee = C.value) == null || ee.focus(), D.value === "week" && Fe(Le.down));
    }, ke = (ee) => {
      const { code: Z } = ee;
      [
        Le.up,
        Le.down,
        Le.left,
        Le.right,
        Le.home,
        Le.end,
        Le.pageUp,
        Le.pageDown
      ].includes(Z) && (Fe(Z), ee.stopPropagation(), ee.preventDefault()), [Le.enter, Le.space, Le.numpadEnter].includes(Z) && R.value === null && z.value === null && (ee.preventDefault(), N(g.value, false));
    }, Fe = (ee) => {
      var Z;
      const { up: L, down: X, left: j, right: te, home: P, end: ie, pageUp: Ce, pageDown: De } = Le, Y = {
        year: {
          [L]: -4,
          [X]: 4,
          [j]: -1,
          [te]: 1,
          offset: (pe, Ee) => pe.setFullYear(pe.getFullYear() + Ee)
        },
        month: {
          [L]: -4,
          [X]: 4,
          [j]: -1,
          [te]: 1,
          offset: (pe, Ee) => pe.setMonth(pe.getMonth() + Ee)
        },
        week: {
          [L]: -1,
          [X]: 1,
          [j]: -1,
          [te]: 1,
          offset: (pe, Ee) => pe.setDate(pe.getDate() + Ee * 7)
        },
        date: {
          [L]: -7,
          [X]: 7,
          [j]: -1,
          [te]: 1,
          [P]: (pe) => -pe.getDay(),
          [ie]: (pe) => -pe.getDay() + 6,
          [Ce]: (pe) => -new Date(pe.getFullYear(), pe.getMonth(), 0).getDate(),
          [De]: (pe) => new Date(pe.getFullYear(), pe.getMonth() + 1, 0).getDate(),
          offset: (pe, Ee) => pe.setDate(pe.getDate() + Ee)
        }
      }, oe = g.value.toDate();
      for (; Math.abs(g.value.diff(oe, "year", true)) < 1; ) {
        const pe = Y[U.value];
        if (!pe)
          return;
        if (pe.offset(oe, dt(pe[ee]) ? pe[ee](oe) : (Z = pe[ee]) != null ? Z : 0), h3 && h3(oe))
          break;
        const Ee = xe(oe).locale(c.value);
        g.value = Ee, t("pick", Ee, true);
        break;
      }
    }, Je = (ee) => {
      t("panel-change", g.value.toDate(), ee, M.value);
    };
    return watch(() => D.value, (ee) => {
      if (["month", "year"].includes(ee)) {
        M.value = ee;
        return;
      }
      M.value = "date";
    }, { immediate: true }), watch(() => M.value, () => {
      p == null || p.updatePopper();
    }), watch(() => w.value, (ee) => {
      ee && (g.value = Ze());
    }, { immediate: true }), watch(() => n.parsedValue, (ee) => {
      if (ee) {
        if (D.value === "dates" || Array.isArray(ee))
          return;
        g.value = ee;
      } else
        g.value = Ze();
    }, { immediate: true }), t("set-picker-option", ["isValidValue", ut]), t("set-picker-option", ["formatToString", ct]), t("set-picker-option", ["parseUserInput", st]), t("set-picker-option", ["handleFocusPicker", ae]), (ee, Z) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(a).b(),
        unref(o).b(),
        {
          "has-sidebar": ee.$slots.sidebar || unref(I),
          "has-time": unref(ge)
        }
      ])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(a).e("body-wrapper"))
      }, [
        renderSlot(ee.$slots, "sidebar", {
          class: normalizeClass(unref(a).e("sidebar"))
        }),
        unref(I) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(a).e("sidebar"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m), (L, X) => (openBlock(), createElementBlock("button", {
            key: X,
            type: "button",
            class: normalizeClass(unref(a).e("shortcut")),
            onClick: (j) => _(L)
          }, toDisplayString(L.text), 11, Xk))), 128))
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass(unref(a).e("body"))
        }, [
          unref(ge) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(o).e("time-header"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(o).e("editor-wrap"))
            }, [
              createVNode(unref(Ft), {
                placeholder: unref(u)("el.datepicker.selectDate"),
                "model-value": unref(He),
                size: "small",
                "validate-event": false,
                onInput: Z[0] || (Z[0] = (L) => R.value = L),
                onChange: Se
              }, null, 8, ["placeholder", "model-value"])
            ], 2),
            withDirectives((openBlock(), createElementBlock("span", {
              class: normalizeClass(unref(o).e("editor-wrap"))
            }, [
              createVNode(unref(Ft), {
                placeholder: unref(u)("el.datepicker.selectTime"),
                "model-value": unref(Pe),
                size: "small",
                "validate-event": false,
                onFocus: Ue,
                onInput: Z[1] || (Z[1] = (L) => z.value = L),
                onChange: lt
              }, null, 8, ["placeholder", "model-value"]),
              createVNode(unref(nl), {
                visible: We.value,
                format: unref(ve),
                "time-arrow-control": unref(y),
                "parsed-value": g.value,
                onPick: ht
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
            ], 2)), [
              [unref(Sr), je]
            ])
          ], 2)) : createCommentVNode("v-if", true),
          withDirectives(createBaseVNode("div", {
            class: normalizeClass([
              unref(o).e("header"),
              (M.value === "year" || M.value === "month") && unref(o).e("header--bordered")
            ])
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(o).e("prev-btn"))
            }, [
              createBaseVNode("button", {
                type: "button",
                "aria-label": unref(u)("el.datepicker.prevYear"),
                class: normalizeClass(["d-arrow-left", unref(a).e("icon-btn")]),
                onClick: Z[2] || (Z[2] = (L) => q(false))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(hr))
                  ]),
                  _: 1
                })
              ], 10, Zk),
              withDirectives(createBaseVNode("button", {
                type: "button",
                "aria-label": unref(u)("el.datepicker.prevMonth"),
                class: normalizeClass([unref(a).e("icon-btn"), "arrow-left"]),
                onClick: Z[3] || (Z[3] = (L) => W(false))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(Wa))
                  ]),
                  _: 1
                })
              ], 10, Jk), [
                [vShow, M.value === "date"]
              ])
            ], 2),
            createBaseVNode("span", {
              role: "button",
              class: normalizeClass(unref(o).e("header-label")),
              "aria-live": "polite",
              tabindex: "0",
              onKeydown: Z[4] || (Z[4] = withKeys((L) => he("year"), ["enter"])),
              onClick: Z[5] || (Z[5] = (L) => he("year"))
            }, toDisplayString(unref(H)), 35),
            withDirectives(createBaseVNode("span", {
              role: "button",
              "aria-live": "polite",
              tabindex: "0",
              class: normalizeClass([
                unref(o).e("header-label"),
                { active: M.value === "month" }
              ]),
              onKeydown: Z[6] || (Z[6] = withKeys((L) => he("month"), ["enter"])),
              onClick: Z[7] || (Z[7] = (L) => he("month"))
            }, toDisplayString(unref(u)(`el.datepicker.month${unref(S) + 1}`)), 35), [
              [vShow, M.value === "date"]
            ]),
            createBaseVNode("span", {
              class: normalizeClass(unref(o).e("next-btn"))
            }, [
              withDirectives(createBaseVNode("button", {
                type: "button",
                "aria-label": unref(u)("el.datepicker.nextMonth"),
                class: normalizeClass([unref(a).e("icon-btn"), "arrow-right"]),
                onClick: Z[8] || (Z[8] = (L) => W(true))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(An))
                  ]),
                  _: 1
                })
              ], 10, Qk), [
                [vShow, M.value === "date"]
              ]),
              createBaseVNode("button", {
                type: "button",
                "aria-label": unref(u)("el.datepicker.nextYear"),
                class: normalizeClass([unref(a).e("icon-btn"), "d-arrow-right"]),
                onClick: Z[9] || (Z[9] = (L) => q(true))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(mr))
                  ]),
                  _: 1
                })
              ], 10, e$)
            ], 2)
          ], 2), [
            [vShow, M.value !== "time"]
          ]),
          createBaseVNode("div", {
            class: normalizeClass(unref(a).e("content")),
            onKeydown: ke
          }, [
            M.value === "date" ? (openBlock(), createBlock(ll, {
              key: 0,
              ref_key: "currentViewRef",
              ref: C,
              "selection-mode": unref(D),
              date: g.value,
              "parsed-value": ee.parsedValue,
              "disabled-date": unref(h3),
              "cell-class-name": unref(v),
              onPick: B
            }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : createCommentVNode("v-if", true),
            M.value === "year" ? (openBlock(), createBlock(Gk, {
              key: 1,
              ref_key: "currentViewRef",
              ref: C,
              date: g.value,
              "disabled-date": unref(h3),
              "parsed-value": ee.parsedValue,
              onPick: ne
            }, null, 8, ["date", "disabled-date", "parsed-value"])) : createCommentVNode("v-if", true),
            M.value === "month" ? (openBlock(), createBlock(sl, {
              key: 2,
              ref_key: "currentViewRef",
              ref: C,
              date: g.value,
              "parsed-value": ee.parsedValue,
              "disabled-date": unref(h3),
              onPick: G
            }, null, 8, ["date", "parsed-value", "disabled-date"])) : createCommentVNode("v-if", true)
          ], 34)
        ], 2)
      ], 2),
      withDirectives(createBaseVNode("div", {
        class: normalizeClass(unref(a).e("footer"))
      }, [
        withDirectives(createVNode(unref(gn), {
          text: "",
          size: "small",
          class: normalizeClass(unref(a).e("link-btn")),
          onClick: ue
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(u)("el.datepicker.now")), 1)
          ]),
          _: 1
        }, 8, ["class"]), [
          [vShow, unref(D) !== "dates"]
        ]),
        createVNode(unref(gn), {
          plain: "",
          size: "small",
          class: normalizeClass(unref(a).e("link-btn")),
          onClick: le
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(u)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class"])
      ], 2), [
        [vShow, unref(se) && M.value === "date"]
      ])
    ], 2));
  }
});
var n$ = Ae(t$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);
var r$ = Me({
  ...id,
  ...ud
});
var a$ = (e) => {
  const { emit: t } = getCurrentInstance(), n = useAttrs(), r = useSlots();
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
};
var fd = (e, {
  defaultValue: t,
  leftDate: n,
  rightDate: r,
  unit: a,
  onParsedValueChanged: o
}) => {
  const { emit: l } = getCurrentInstance(), { pickerNs: s } = inject(Yl), u = we("date-range-picker"), { t: c, lang: f } = ot(), p = a$(f), m = ref(), h3 = ref(), v = ref({
    endDate: null,
    selecting: false
  }), d = (g) => {
    v.value = g;
  }, y = (g = false) => {
    const b = unref(m), k = unref(h3);
    ol([b, k]) && l("pick", [b, k], g);
  }, w = (g) => {
    v.value.selecting = g, g || (v.value.endDate = null);
  }, C = () => {
    const [g, b] = dd(unref(t), {
      lang: unref(f),
      unit: a,
      unlinkPanels: e.unlinkPanels
    });
    m.value = void 0, h3.value = void 0, n.value = g, r.value = b;
  };
  return watch(t, (g) => {
    g && C();
  }, { immediate: true }), watch(() => e.parsedValue, (g) => {
    if (tt(g) && g.length === 2) {
      const [b, k] = g;
      m.value = b, n.value = b, h3.value = k, o(unref(m), unref(h3));
    } else
      C();
  }, { immediate: true }), {
    minDate: m,
    maxDate: h3,
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
};
var o$ = ["onClick"];
var l$ = ["disabled"];
var s$ = ["disabled"];
var i$ = ["disabled"];
var u$ = ["disabled"];
var Ca = "month";
var c$ = defineComponent({
  __name: "panel-date-range",
  props: r$,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(e, { emit: t }) {
    const n = e, r = inject("EP_PICKER_BASE"), {
      disabledDate: a,
      cellClassName: o,
      format: l,
      defaultTime: s,
      arrowControl: u,
      clearable: c
    } = r.props, f = toRef(r.props, "shortcuts"), p = toRef(r.props, "defaultValue"), { lang: m } = ot(), h3 = ref(xe().locale(m.value)), v = ref(xe().locale(m.value).add(1, Ca)), {
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
      leftDate: h3,
      rightDate: v,
      unit: Ca,
      onParsedValueChanged: X
    }), R = ref({
      min: null,
      max: null
    }), z = ref({
      min: null,
      max: null
    }), V = computed(() => `${h3.value.year()} ${T("el.datepicker.year")} ${T(`el.datepicker.month${h3.value.month() + 1}`)}`), F = computed(() => `${v.value.year()} ${T("el.datepicker.year")} ${T(`el.datepicker.month${v.value.month() + 1}`)}`), N = computed(() => h3.value.year()), B = computed(() => h3.value.month()), W = computed(() => v.value.year()), q = computed(() => v.value.month()), M = computed(() => !!f.value.length), H = computed(() => R.value.min !== null ? R.value.min : d.value ? d.value.format(G.value) : ""), _ = computed(() => R.value.max !== null ? R.value.max : y.value || d.value ? (y.value || d.value).format(G.value) : ""), D = computed(() => z.value.min !== null ? z.value.min : d.value ? d.value.format(I.value) : ""), U = computed(() => z.value.max !== null ? z.value.max : y.value || d.value ? (y.value || d.value).format(I.value) : ""), I = computed(() => Ac(l)), G = computed(() => Mc(l)), ne = () => {
      h3.value = h3.value.subtract(1, "year"), n.unlinkPanels || (v.value = h3.value.add(1, "month")), Pe("year");
    }, he = () => {
      h3.value = h3.value.subtract(1, "month"), n.unlinkPanels || (v.value = h3.value.add(1, "month")), Pe("month");
    }, ge = () => {
      n.unlinkPanels ? v.value = v.value.add(1, "year") : (h3.value = h3.value.add(1, "year"), v.value = h3.value.add(1, "month")), Pe("year");
    }, se = () => {
      n.unlinkPanels ? v.value = v.value.add(1, "month") : (h3.value = h3.value.add(1, "month"), v.value = h3.value.add(1, "month")), Pe("month");
    }, le = () => {
      h3.value = h3.value.add(1, "year"), Pe("year");
    }, ue = () => {
      h3.value = h3.value.add(1, "month"), Pe("month");
    }, ve = () => {
      v.value = v.value.subtract(1, "year"), Pe("year");
    }, _e = () => {
      v.value = v.value.subtract(1, "month"), Pe("month");
    }, Pe = (j) => {
      t("panel-change", [h3.value.toDate(), v.value.toDate()], j);
    }, He = computed(() => {
      const j = (B.value + 1) % 12, te = B.value + 1 >= 12 ? 1 : 0;
      return n.unlinkPanels && new Date(N.value + te, j) < new Date(W.value, q.value);
    }), We = computed(() => n.unlinkPanels && W.value * 12 + q.value - (N.value * 12 + B.value + 1) >= 12), Ue = computed(() => !(d.value && y.value && !w.value.selecting && ol([d.value, y.value]))), je = computed(() => n.type === "datetime" || n.type === "datetimerange"), rt = (j, te) => {
      if (j)
        return s ? xe(s[te] || s).locale(m.value).year(j.year()).month(j.month()).date(j.date()) : j;
    }, ht = (j, te = true) => {
      const P = j.minDate, ie = j.maxDate, Ce = rt(P, 0), De = rt(ie, 1);
      y.value === De && d.value === Ce || (t("calendar-change", [P.toDate(), ie && ie.toDate()]), y.value = De, d.value = Ce, !(!te || je.value) && k());
    }, lt = ref(false), Se = ref(false), ut = () => {
      lt.value = false;
    }, ct = () => {
      Se.value = false;
    }, st = (j, te) => {
      R.value[te] = j;
      const P = xe(j, G.value).locale(m.value);
      if (P.isValid()) {
        if (a && a(P.toDate()))
          return;
        te === "min" ? (h3.value = P, d.value = (d.value || h3.value).year(P.year()).month(P.month()).date(P.date()), !n.unlinkPanels && (!y.value || y.value.isBefore(d.value)) && (v.value = P.add(1, "month"), y.value = d.value.add(1, "month"))) : (v.value = P, y.value = (y.value || v.value).year(P.year()).month(P.month()).date(P.date()), !n.unlinkPanels && (!d.value || d.value.isAfter(y.value)) && (h3.value = P.subtract(1, "month"), d.value = y.value.subtract(1, "month")));
      }
    }, Ze = (j, te) => {
      R.value[te] = null;
    }, ae = (j, te) => {
      z.value[te] = j;
      const P = xe(j, I.value).locale(m.value);
      P.isValid() && (te === "min" ? (lt.value = true, d.value = (d.value || h3.value).hour(P.hour()).minute(P.minute()).second(P.second()), (!y.value || y.value.isBefore(d.value)) && (y.value = d.value)) : (Se.value = true, y.value = (y.value || v.value).hour(P.hour()).minute(P.minute()).second(P.second()), v.value = y.value, y.value && y.value.isBefore(d.value) && (d.value = y.value)));
    }, ke = (j, te) => {
      z.value[te] = null, te === "min" ? (h3.value = d.value, lt.value = false) : (v.value = y.value, Se.value = false);
    }, Fe = (j, te, P) => {
      z.value.min || (j && (h3.value = j, d.value = (d.value || h3.value).hour(j.hour()).minute(j.minute()).second(j.second())), P || (lt.value = te), (!y.value || y.value.isBefore(d.value)) && (y.value = d.value, v.value = j));
    }, Je = (j, te, P) => {
      z.value.max || (j && (v.value = j, y.value = (y.value || v.value).hour(j.hour()).minute(j.minute()).second(j.second())), P || (Se.value = te), y.value && y.value.isBefore(d.value) && (d.value = y.value));
    }, ee = () => {
      h3.value = dd(unref(p), {
        lang: unref(m),
        unit: "month",
        unlinkPanels: n.unlinkPanels
      })[0], v.value = h3.value.add(1, "month"), t("pick", null);
    }, Z = (j) => tt(j) ? j.map((te) => te.format(l)) : j.format(l), L = (j) => tt(j) ? j.map((te) => xe(te, l).locale(m.value)) : xe(j, l).locale(m.value);
    function X(j, te) {
      if (n.unlinkPanels && te) {
        const P = (j == null ? void 0 : j.year()) || 0, ie = (j == null ? void 0 : j.month()) || 0, Ce = te.year(), De = te.month();
        v.value = P === Ce && ie === De ? te.add(1, Ca) : te;
      } else
        v.value = h3.value.add(1, Ca), te && (v.value = v.value.hour(te.hour()).minute(te.minute()).second(te.second()));
    }
    return t("set-picker-option", ["isValidValue", ol]), t("set-picker-option", ["parseUserInput", L]), t("set-picker-option", ["formatToString", Z]), t("set-picker-option", ["handleClear", ee]), (j, te) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(C).b(),
        unref(g).b(),
        {
          "has-sidebar": j.$slots.sidebar || unref(M),
          "has-time": unref(je)
        }
      ])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(C).e("body-wrapper"))
      }, [
        renderSlot(j.$slots, "sidebar", {
          class: normalizeClass(unref(C).e("sidebar"))
        }),
        unref(M) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(C).e("sidebar"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(f), (P, ie) => (openBlock(), createElementBlock("button", {
            key: ie,
            type: "button",
            class: normalizeClass(unref(C).e("shortcut")),
            onClick: (Ce) => unref(S)(P)
          }, toDisplayString(P.text), 11, o$))), 128))
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass(unref(C).e("body"))
        }, [
          unref(je) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(g).e("time-header"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(g).e("editors-wrap"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(g).e("time-picker-wrap"))
              }, [
                createVNode(unref(Ft), {
                  size: "small",
                  disabled: unref(w).selecting,
                  placeholder: unref(T)("el.datepicker.startDate"),
                  class: normalizeClass(unref(g).e("editor")),
                  "model-value": unref(H),
                  "validate-event": false,
                  onInput: te[0] || (te[0] = (P) => st(P, "min")),
                  onChange: te[1] || (te[1] = (P) => Ze(P, "min"))
                }, null, 8, ["disabled", "placeholder", "class", "model-value"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(g).e("time-picker-wrap"))
              }, [
                createVNode(unref(Ft), {
                  size: "small",
                  class: normalizeClass(unref(g).e("editor")),
                  disabled: unref(w).selecting,
                  placeholder: unref(T)("el.datepicker.startTime"),
                  "model-value": unref(D),
                  "validate-event": false,
                  onFocus: te[2] || (te[2] = (P) => lt.value = true),
                  onInput: te[3] || (te[3] = (P) => ae(P, "min")),
                  onChange: te[4] || (te[4] = (P) => ke(P, "min"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                createVNode(unref(nl), {
                  visible: lt.value,
                  format: unref(I),
                  "datetime-role": "start",
                  "time-arrow-control": unref(u),
                  "parsed-value": h3.value,
                  onPick: Fe
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [unref(Sr), ut]
              ])
            ], 2),
            createBaseVNode("span", null, [
              createVNode(unref(Ie), null, {
                default: withCtx(() => [
                  createVNode(unref(An))
                ]),
                _: 1
              })
            ]),
            createBaseVNode("span", {
              class: normalizeClass([unref(g).e("editors-wrap"), "is-right"])
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(g).e("time-picker-wrap"))
              }, [
                createVNode(unref(Ft), {
                  size: "small",
                  class: normalizeClass(unref(g).e("editor")),
                  disabled: unref(w).selecting,
                  placeholder: unref(T)("el.datepicker.endDate"),
                  "model-value": unref(_),
                  readonly: !unref(d),
                  "validate-event": false,
                  onInput: te[5] || (te[5] = (P) => st(P, "max")),
                  onChange: te[6] || (te[6] = (P) => Ze(P, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(g).e("time-picker-wrap"))
              }, [
                createVNode(unref(Ft), {
                  size: "small",
                  class: normalizeClass(unref(g).e("editor")),
                  disabled: unref(w).selecting,
                  placeholder: unref(T)("el.datepicker.endTime"),
                  "model-value": unref(U),
                  readonly: !unref(d),
                  "validate-event": false,
                  onFocus: te[7] || (te[7] = (P) => unref(d) && (Se.value = true)),
                  onInput: te[8] || (te[8] = (P) => ae(P, "max")),
                  onChange: te[9] || (te[9] = (P) => ke(P, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                createVNode(unref(nl), {
                  "datetime-role": "end",
                  visible: Se.value,
                  format: unref(I),
                  "time-arrow-control": unref(u),
                  "parsed-value": v.value,
                  onPick: Je
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [unref(Sr), ct]
              ])
            ], 2)
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("div", {
            class: normalizeClass([[unref(C).e("content"), unref(g).e("content")], "is-left"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(g).e("header"))
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(C).e("icon-btn"), "d-arrow-left"]),
                onClick: ne
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(hr))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(C).e("icon-btn"), "arrow-left"]),
                onClick: he
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(Wa))
                  ]),
                  _: 1
                })
              ], 2),
              j.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(We),
                class: normalizeClass([[unref(C).e("icon-btn"), { "is-disabled": !unref(We) }], "d-arrow-right"]),
                onClick: le
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(mr))
                  ]),
                  _: 1
                })
              ], 10, l$)) : createCommentVNode("v-if", true),
              j.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                disabled: !unref(He),
                class: normalizeClass([[
                  unref(C).e("icon-btn"),
                  { "is-disabled": !unref(He) }
                ], "arrow-right"]),
                onClick: ue
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(An))
                  ]),
                  _: 1
                })
              ], 10, s$)) : createCommentVNode("v-if", true),
              createBaseVNode("div", null, toDisplayString(unref(V)), 1)
            ], 2),
            createVNode(ll, {
              "selection-mode": "range",
              date: h3.value,
              "min-date": unref(d),
              "max-date": unref(y),
              "range-state": unref(w),
              "disabled-date": unref(a),
              "cell-class-name": unref(o),
              onChangerange: unref(b),
              onPick: ht,
              onSelect: unref($)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([[unref(C).e("content"), unref(g).e("content")], "is-right"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(g).e("header"))
            }, [
              j.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(We),
                class: normalizeClass([[unref(C).e("icon-btn"), { "is-disabled": !unref(We) }], "d-arrow-left"]),
                onClick: ve
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(hr))
                  ]),
                  _: 1
                })
              ], 10, i$)) : createCommentVNode("v-if", true),
              j.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                disabled: !unref(He),
                class: normalizeClass([[
                  unref(C).e("icon-btn"),
                  { "is-disabled": !unref(He) }
                ], "arrow-left"]),
                onClick: _e
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(Wa))
                  ]),
                  _: 1
                })
              ], 10, u$)) : createCommentVNode("v-if", true),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(C).e("icon-btn"), "d-arrow-right"]),
                onClick: ge
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(mr))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(C).e("icon-btn"), "arrow-right"]),
                onClick: se
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(An))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("div", null, toDisplayString(unref(F)), 1)
            ], 2),
            createVNode(ll, {
              "selection-mode": "range",
              date: v.value,
              "min-date": unref(d),
              "max-date": unref(y),
              "range-state": unref(w),
              "disabled-date": unref(a),
              "cell-class-name": unref(o),
              onChangerange: unref(b),
              onPick: ht,
              onSelect: unref($)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2),
      unref(je) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(C).e("footer"))
      }, [
        unref(c) ? (openBlock(), createBlock(unref(gn), {
          key: 0,
          text: "",
          size: "small",
          class: normalizeClass(unref(C).e("link-btn")),
          onClick: ee
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(T)("el.datepicker.clear")), 1)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        createVNode(unref(gn), {
          plain: "",
          size: "small",
          class: normalizeClass(unref(C).e("link-btn")),
          disabled: unref(Ue),
          onClick: te[10] || (te[10] = (P) => unref(k)(false))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(T)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"])
      ], 2)) : createCommentVNode("v-if", true)
    ], 2));
  }
});
var d$ = Ae(c$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);
var f$ = Me({
  ...ud
});
var p$ = ["pick", "set-picker-option"];
var v$ = ({
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
  }, u = computed(() => `${t.value.year()} ${r("el.datepicker.year")}`), c = computed(() => `${n.value.year()} ${r("el.datepicker.year")}`), f = computed(() => t.value.year()), p = computed(() => n.value.year() === t.value.year() ? t.value.year() + 1 : n.value.year());
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
};
var h$ = ["onClick"];
var m$ = ["disabled"];
var g$ = ["disabled"];
var Sa = "year";
var b$ = defineComponent({
  name: "DatePickerMonthRange"
});
var y$ = defineComponent({
  ...b$,
  props: f$,
  emits: p$,
  setup(e, { emit: t }) {
    const n = e, { lang: r } = ot(), a = inject("EP_PICKER_BASE"), { shortcuts: o, disabledDate: l, format: s } = a.props, u = toRef(a.props, "defaultValue"), c = ref(xe().locale(r.value)), f = ref(xe().locale(r.value).add(1, Sa)), {
      minDate: p,
      maxDate: m,
      rangeState: h3,
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
    }), b = computed(() => !!o.length), {
      leftPrevYear: k,
      rightNextYear: S,
      leftNextYear: $,
      rightPrevYear: T,
      leftLabel: R,
      rightLabel: z,
      leftYear: V,
      rightYear: F
    } = v$({
      unlinkPanels: toRef(n, "unlinkPanels"),
      leftDate: c,
      rightDate: f
    }), N = computed(() => n.unlinkPanels && F.value > V.value + 1), B = (M, H = true) => {
      const _ = M.minDate, D = M.maxDate;
      m.value === D && p.value === _ || (m.value = D, p.value = _, H && w());
    }, W = (M) => M.map((H) => H.format(s));
    function q(M, H) {
      if (n.unlinkPanels && H) {
        const _ = (M == null ? void 0 : M.year()) || 0, D = H.year();
        f.value = _ === D ? H.add(1, Sa) : H;
      } else
        f.value = c.value.add(1, Sa);
    }
    return t("set-picker-option", ["formatToString", W]), (M, H) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(v).b(),
        unref(d).b(),
        {
          "has-sidebar": !!M.$slots.sidebar || unref(b)
        }
      ])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(v).e("body-wrapper"))
      }, [
        renderSlot(M.$slots, "sidebar", {
          class: normalizeClass(unref(v).e("sidebar"))
        }),
        unref(b) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(v).e("sidebar"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(o), (_, D) => (openBlock(), createElementBlock("button", {
            key: D,
            type: "button",
            class: normalizeClass(unref(v).e("shortcut")),
            onClick: (U) => unref(C)(_)
          }, toDisplayString(_.text), 11, h$))), 128))
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass(unref(v).e("body"))
        }, [
          createBaseVNode("div", {
            class: normalizeClass([[unref(v).e("content"), unref(d).e("content")], "is-left"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(d).e("header"))
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(v).e("icon-btn"), "d-arrow-left"]),
                onClick: H[0] || (H[0] = (..._) => unref(k) && unref(k)(..._))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(hr))
                  ]),
                  _: 1
                })
              ], 2),
              M.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(N),
                class: normalizeClass([[
                  unref(v).e("icon-btn"),
                  { [unref(v).is("disabled")]: !unref(N) }
                ], "d-arrow-right"]),
                onClick: H[1] || (H[1] = (..._) => unref($) && unref($)(..._))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(mr))
                  ]),
                  _: 1
                })
              ], 10, m$)) : createCommentVNode("v-if", true),
              createBaseVNode("div", null, toDisplayString(unref(R)), 1)
            ], 2),
            createVNode(sl, {
              "selection-mode": "range",
              date: c.value,
              "min-date": unref(p),
              "max-date": unref(m),
              "range-state": unref(h3),
              "disabled-date": unref(l),
              onChangerange: unref(y),
              onPick: B,
              onSelect: unref(g)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([[unref(v).e("content"), unref(d).e("content")], "is-right"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(d).e("header"))
            }, [
              M.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(N),
                class: normalizeClass([[unref(v).e("icon-btn"), { "is-disabled": !unref(N) }], "d-arrow-left"]),
                onClick: H[2] || (H[2] = (..._) => unref(T) && unref(T)(..._))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(hr))
                  ]),
                  _: 1
                })
              ], 10, g$)) : createCommentVNode("v-if", true),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(v).e("icon-btn"), "d-arrow-right"]),
                onClick: H[3] || (H[3] = (..._) => unref(S) && unref(S)(..._))
              }, [
                createVNode(unref(Ie), null, {
                  default: withCtx(() => [
                    createVNode(unref(mr))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("div", null, toDisplayString(unref(z)), 1)
            ], 2),
            createVNode(sl, {
              "selection-mode": "range",
              date: f.value,
              "min-date": unref(p),
              "max-date": unref(m),
              "range-state": unref(h3),
              "disabled-date": unref(l),
              onChangerange: unref(y),
              onPick: B,
              onSelect: unref(g)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2)
    ], 2));
  }
});
var w$ = Ae(y$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);
var C$ = function(e) {
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
var S$ = defineComponent({
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
    provide("ElPopperOptions", reactive(toRef(e, "popperOptions"))), provide(Yl, {
      slots: r,
      pickerNs: a
    });
    const o = ref();
    t({
      focus: (u = true) => {
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
      return createVNode(MC, mergeProps(e, {
        format: c,
        type: e.type,
        ref: o,
        "onUpdate:modelValue": s
      }), {
        default: (p) => createVNode(f, p, null),
        "range-separator": r["range-separator"]
      });
    };
  }
});
var Ra = S$;
Ra.install = (e) => {
  e.component(Ra.name, Ra);
};
var ka = Ra;
var pd = Symbol("elPaginationKey");
var k$ = Me({
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
});
var $$ = {
  click: (e) => e instanceof MouseEvent
};
var _$ = ["disabled", "aria-label", "aria-disabled"];
var E$ = { key: 0 };
var T$ = defineComponent({
  name: "ElPaginationPrev"
});
var O$ = defineComponent({
  ...T$,
  props: k$,
  emits: $$,
  setup(e) {
    const t = e, { t: n } = ot(), r = computed(() => t.disabled || t.currentPage <= 1);
    return (a, o) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: "btn-prev",
      disabled: unref(r),
      "aria-label": a.prevText || unref(n)("el.pagination.prev"),
      "aria-disabled": unref(r),
      onClick: o[0] || (o[0] = (l) => a.$emit("click", l))
    }, [
      a.prevText ? (openBlock(), createElementBlock("span", E$, toDisplayString(a.prevText), 1)) : (openBlock(), createBlock(unref(Ie), { key: 1 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(a.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, _$));
  }
});
var P$ = Ae(O$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
var x$ = Me({
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
});
var M$ = ["disabled", "aria-label", "aria-disabled"];
var A$ = { key: 0 };
var N$ = defineComponent({
  name: "ElPaginationNext"
});
var R$ = defineComponent({
  ...N$,
  props: x$,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = ot(), r = computed(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (a, o) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: "btn-next",
      disabled: unref(r),
      "aria-label": a.nextText || unref(n)("el.pagination.next"),
      "aria-disabled": unref(r),
      onClick: o[0] || (o[0] = (l) => a.$emit("click", l))
    }, [
      a.nextText ? (openBlock(), createElementBlock("span", A$, toDisplayString(a.nextText), 1)) : (openBlock(), createBlock(unref(Ie), { key: 1 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(a.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, M$));
  }
});
var I$ = Ae(R$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
var vd = Symbol("ElSelectGroup");
var co = Symbol("ElSelect");
function L$(e, t) {
  const n = inject(co), r = inject(vd, { disabled: false }), a = computed(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), o = computed(() => n.props.multiple ? p(n.props.modelValue, e.value) : m(e.value, n.props.modelValue)), l = computed(() => {
    if (n.props.multiple) {
      const d = n.props.modelValue || [];
      return !o.value && d.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return false;
  }), s = computed(() => e.label || (a.value ? "" : e.value)), u = computed(() => e.value || e.label || ""), c = computed(() => e.disabled || t.groupDisabled || l.value), f = getCurrentInstance(), p = (d = [], y) => {
    if (a.value) {
      const w = n.props.valueKey;
      return d && d.some((C) => toRaw(_t(C, w)) === _t(y, w));
    } else
      return d && d.includes(y);
  }, m = (d, y) => {
    if (a.value) {
      const { valueKey: w } = n.props;
      return _t(d, w) === _t(y, w);
    } else
      return d === y;
  }, h3 = () => {
    !e.disabled && !r.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  watch(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), watch(() => e.value, (d, y) => {
    const { remote: w, valueKey: C } = n.props;
    if (Object.is(d, y) || (n.onOptionDestroy(y, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !w) {
      if (C && typeof d == "object" && typeof y == "object" && d[C] === y[C])
        return;
      n.setSelected();
    }
  }), watch(() => r.disabled, () => {
    t.groupDisabled = r.disabled;
  }, { immediate: true });
  const { queryChange: v } = toRaw(n);
  return watch(v, (d) => {
    const { query: y } = unref(d), w = new RegExp(sb(y), "i");
    t.visible = w.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: true }), {
    select: n,
    currentLabel: s,
    currentValue: u,
    itemSelected: o,
    isDisabled: c,
    hoverItem: h3
  };
}
var D$ = defineComponent({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(e) {
    const t = we("select"), n = computed(() => [
      t.be("dropdown", "item"),
      t.is("disabled", unref(l)),
      {
        selected: unref(o),
        hover: unref(f)
      }
    ]), r = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    }), { currentLabel: a, itemSelected: o, isDisabled: l, select: s, hoverItem: u } = L$(e, r), { visible: c, hover: f } = toRefs(r), p = getCurrentInstance().proxy;
    s.onOptionCreate(p), onBeforeUnmount(() => {
      const h3 = p.value, { selected: v } = s, y = (s.props.multiple ? v : [v]).some((w) => w.value === p.value);
      nextTick(() => {
        s.cachedOptions.get(h3) === p && !y && s.cachedOptions.delete(h3);
      }), s.onOptionDestroy(h3, p);
    });
    function m() {
      e.disabled !== true && r.groupDisabled !== true && s.handleOptionSelect(p);
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
  return withDirectives((openBlock(), createElementBlock("li", {
    class: normalizeClass(e.containerKls),
    onMouseenter: t[0] || (t[0] = (...l) => e.hoverItem && e.hoverItem(...l)),
    onClick: t[1] || (t[1] = withModifiers((...l) => e.selectOptionClick && e.selectOptionClick(...l), ["stop"]))
  }, [
    renderSlot(e.$slots, "default", {}, () => [
      createBaseVNode("span", null, toDisplayString(e.currentLabel), 1)
    ])
  ], 34)), [
    [vShow, e.visible]
  ]);
}
var Gl = Ae(D$, [["render", F$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
var B$ = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = inject(co), t = we("select"), n = computed(() => e.props.popperClass), r = computed(() => e.props.multiple), a = computed(() => e.props.fitInputWidth), o = ref("");
    function l() {
      var s;
      o.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return onMounted(() => {
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
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: normalizeStyle({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    renderSlot(e.$slots, "default")
  ], 6);
}
var V$ = Ae(B$, [["render", z$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function H$(e) {
  const { t } = ot();
  return reactive({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: e.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    prefixWidth: 11,
    mouseEnter: false
  });
}
var To = false;
var W$ = (e, t, n) => {
  const { t: r } = ot(), a = we("select");
  Yu({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, computed(() => e.suffixTransition === false));
  const o = ref(null), l = ref(null), s = ref(null), u = ref(null), c = ref(null), f = ref(null), p = ref(null), m = ref(null), h3 = ref(-1), v = shallowRef({ query: "" }), d = shallowRef(""), y = ref([]);
  let w = 0;
  const { form: C, formItem: g } = _n(), b = computed(() => !e.filterable || e.multiple || !t.visible), k = computed(() => e.disabled || (C == null ? void 0 : C.disabled)), S = computed(() => {
    const Y = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !k.value && t.inputHovering && Y;
  }), $ = computed(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), T = computed(() => a.is("reverse", $.value && t.visible && e.suffixTransition)), R = computed(() => e.remote ? 300 : 0), z = computed(() => e.loading ? e.loadingText || r("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? false : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("el.select.noMatch") : t.options.size === 0 ? e.noDataText || r("el.select.noData") : null), V = computed(() => {
    const Y = Array.from(t.options.values()), oe = [];
    return y.value.forEach((pe) => {
      const Ee = Y.findIndex((yt) => yt.currentLabel === pe);
      Ee > -1 && oe.push(Y[Ee]);
    }), oe.length ? oe : Y;
  }), F = computed(() => Array.from(t.cachedOptions.values())), N = computed(() => {
    const Y = V.value.filter((oe) => !oe.created).some((oe) => oe.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !Y;
  }), B = Ut(), W = computed(() => ["small"].includes(B.value) ? "small" : "default"), q = computed({
    get() {
      return t.visible && z.value !== false;
    },
    set(Y) {
      t.visible = Y;
    }
  });
  watch([() => k.value, () => B.value, () => C == null ? void 0 : C.size], () => {
    nextTick(() => {
      M();
    });
  }), watch(() => e.placeholder, (Y) => {
    t.cachedPlaceHolder = t.currentPlaceholder = Y, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), watch(() => e.modelValue, (Y, oe) => {
    e.multiple && (M(), Y && Y.length > 0 || l.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", H(t.query))), U(), e.filterable && !e.multiple && (t.inputLength = 20), !tn(Y, oe) && e.validateEvent && (g == null || g.validate("change").catch((pe) => nt(pe)));
  }, {
    flush: "post",
    deep: true
  }), watch(() => t.visible, (Y) => {
    var oe, pe, Ee, yt, Tt;
    Y ? ((pe = (oe = u.value) == null ? void 0 : oe.updatePopper) == null || pe.call(oe), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (yt = (Ee = s.value) == null ? void 0 : Ee.focus) == null || yt.call(Ee), e.multiple ? (Tt = l.value) == null || Tt.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), H(t.query), !e.multiple && !e.remote && (v.value.query = "", triggerRef(v), triggerRef(d)))) : (e.filterable && (dt(e.filterMethod) && e.filterMethod(""), dt(e.remoteMethod) && e.remoteMethod("")), l.value && l.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = false, G(), nextTick(() => {
      l.value && l.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", Y);
  }), watch(() => t.options.entries(), () => {
    var Y, oe, pe;
    if (!at)
      return;
    (oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y), e.multiple && M();
    const Ee = ((pe = p.value) == null ? void 0 : pe.querySelectorAll("input")) || [];
    Array.from(Ee).includes(document.activeElement) || U(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && D();
  }, {
    flush: "post"
  }), watch(() => t.hoverIndex, (Y) => {
    it(Y) && Y > -1 ? h3.value = V.value[Y] || {} : h3.value = {}, V.value.forEach((oe) => {
      oe.hover = h3.value === oe;
    });
  });
  const M = () => {
    nextTick(() => {
      var Y, oe;
      if (!o.value)
        return;
      const pe = o.value.$el.querySelector("input");
      w = w || (pe.clientHeight > 0 ? pe.clientHeight + 2 : 0);
      const Ee = f.value, yt = Xy(B.value || (C == null ? void 0 : C.size)), Tt = B.value || yt === w || w <= 0 ? yt : w;
      !(pe.offsetParent === null) && (pe.style.height = `${(t.selected.length === 0 ? Tt : Math.max(Ee ? Ee.clientHeight + (Ee.clientHeight > Tt ? 6 : 0) : 0, Tt)) - 2}px`), t.visible && z.value !== false && ((oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y));
    });
  }, H = async (Y) => {
    if (!(t.previousQuery === Y || t.isOnComposition)) {
      if (t.previousQuery === null && (dt(e.filterMethod) || dt(e.remoteMethod))) {
        t.previousQuery = Y;
        return;
      }
      t.previousQuery = Y, nextTick(() => {
        var oe, pe;
        t.visible && ((pe = (oe = u.value) == null ? void 0 : oe.updatePopper) == null || pe.call(oe));
      }), t.hoverIndex = -1, e.multiple && e.filterable && nextTick(() => {
        const oe = l.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, oe) : oe, _(), M();
      }), e.remote && dt(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(Y)) : dt(e.filterMethod) ? (e.filterMethod(Y), triggerRef(d)) : (t.filteredOptionsCount = t.optionsCount, v.value.query = Y, triggerRef(v), triggerRef(d)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await nextTick(), D());
    }
  }, _ = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = l.value.value ? "" : t.cachedPlaceHolder);
  }, D = () => {
    const Y = V.value.filter((Ee) => Ee.visible && !Ee.disabled && !Ee.states.groupDisabled), oe = Y.find((Ee) => Ee.created), pe = Y[0];
    t.hoverIndex = We(V.value, oe || pe);
  }, U = () => {
    var Y;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const pe = I(e.modelValue);
      (Y = pe.props) != null && Y.created ? (t.createdLabel = pe.props.value, t.createdSelected = true) : t.createdSelected = false, t.selectedLabel = pe.currentLabel, t.selected = pe, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const oe = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((pe) => {
      oe.push(I(pe));
    }), t.selected = oe, nextTick(() => {
      M();
    });
  }, I = (Y) => {
    let oe;
    const pe = fo(Y).toLowerCase() === "object", Ee = fo(Y).toLowerCase() === "null", yt = fo(Y).toLowerCase() === "undefined";
    for (let cn = t.cachedOptions.size - 1; cn >= 0; cn--) {
      const Wt = F.value[cn];
      if (pe ? _t(Wt.value, e.valueKey) === _t(Y, e.valueKey) : Wt.value === Y) {
        oe = {
          value: Y,
          currentLabel: Wt.currentLabel,
          isDisabled: Wt.isDisabled
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
    return e.multiple && (un.hitState = false), un;
  }, G = () => {
    setTimeout(() => {
      const Y = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((oe) => V.value.findIndex((pe) => _t(pe, Y) === _t(oe, Y)))) : t.hoverIndex = -1 : t.hoverIndex = V.value.findIndex((oe) => L(oe) === L(t.selected));
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
    if (Y.code !== Le.delete) {
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
    n.emit(ft, oe), ue(oe), t.hoverIndex = -1, t.visible = false, n.emit("clear");
  }, He = (Y) => {
    var oe;
    if (e.multiple) {
      const pe = (e.modelValue || []).slice(), Ee = We(pe, Y.value);
      Ee > -1 ? pe.splice(Ee, 1) : (e.multipleLimit <= 0 || pe.length < e.multipleLimit) && pe.push(Y.value), n.emit(ft, pe), ue(pe), Y.created && (t.query = "", H(""), t.inputLength = 20), e.filterable && ((oe = l.value) == null || oe.focus());
    } else
      n.emit(ft, Y.value), ue(Y.value), t.visible = false;
    Ue(), !t.visible && nextTick(() => {
      je(Y);
    });
  }, We = (Y = [], oe) => {
    if (!zt(oe))
      return Y.indexOf(oe);
    const pe = e.valueKey;
    let Ee = -1;
    return Y.some((yt, Tt) => toRaw(_t(yt, pe)) === _t(oe, pe) ? (Ee = Tt, true) : false), Ee;
  }, Ue = () => {
    const Y = l.value || o.value;
    Y && (Y == null || Y.focus());
  }, je = (Y) => {
    var oe, pe, Ee, yt, Tt;
    const un = Array.isArray(Y) ? Y[0] : Y;
    let cn = null;
    if (un != null && un.value) {
      const Wt = V.value.filter((ca) => ca.value === un.value);
      Wt.length > 0 && (cn = Wt[0].$el);
    }
    if (u.value && cn) {
      const Wt = (yt = (Ee = (pe = (oe = u.value) == null ? void 0 : oe.popperRef) == null ? void 0 : pe.contentRef) == null ? void 0 : Ee.querySelector) == null ? void 0 : yt.call(Ee, `.${a.be("dropdown", "wrap")}`);
      Wt && Wu(Wt, cn);
    }
    (Tt = m.value) == null || Tt.handleScroll();
  }, rt = (Y) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(Y.value, Y), t.cachedOptions.set(Y.value, Y);
  }, ht = (Y, oe) => {
    t.options.get(Y) === oe && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(Y));
  }, lt = (Y) => {
    Y.code !== Le.backspace && Se(false), t.inputLength = l.value.value.length * 15 + 20, M();
  }, Se = (Y) => {
    if (!Array.isArray(t.selected))
      return;
    const oe = t.selected[t.selected.length - 1];
    if (oe)
      return Y === true || Y === false ? (oe.hitState = Y, Y) : (oe.hitState = !oe.hitState, oe.hitState);
  }, ut = (Y) => {
    const oe = Y.target.value;
    if (Y.type === "compositionend")
      t.isOnComposition = false, nextTick(() => H(oe));
    else {
      const pe = oe[oe.length - 1] || "";
      t.isOnComposition = !Ml(pe);
    }
  }, ct = () => {
    nextTick(() => je(t.selected));
  }, st = (Y) => {
    To ? To = false : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = true), t.visible = true), n.emit("focus", Y));
  }, Ze = () => {
    var Y, oe, pe;
    t.visible = false, (Y = o.value) == null || Y.blur(), (pe = (oe = s.value) == null ? void 0 : oe.blur) == null || pe.call(oe);
  }, ae = (Y) => {
    setTimeout(() => {
      var oe;
      if ((oe = u.value) != null && oe.isFocusInsideContent()) {
        To = true;
        return;
      }
      t.visible && Fe(), n.emit("blur", Y);
    });
  }, ke = (Y) => {
    Pe(Y);
  }, Fe = () => {
    t.visible = false;
  }, Je = (Y) => {
    t.visible && (Y.preventDefault(), Y.stopPropagation(), t.visible = false);
  }, ee = (Y) => {
    var oe;
    Y && !t.mouseEnter || k.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = false : (!u.value || !u.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((oe = l.value || o.value) == null || oe.focus()));
  }, Z = () => {
    t.visible ? V.value[t.hoverIndex] && He(V.value[t.hoverIndex]) : ee();
  }, L = (Y) => zt(Y.value) ? _t(Y.value, e.valueKey) : Y.value, X = computed(() => V.value.filter((Y) => Y.visible).every((Y) => Y.disabled)), j = computed(() => t.selected.slice(0, e.maxCollapseTags)), te = computed(() => t.selected.slice(e.maxCollapseTags)), P = (Y) => {
    if (!t.visible) {
      t.visible = true;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !X.value) {
      Y === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : Y === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const oe = V.value[t.hoverIndex];
      (oe.disabled === true || oe.states.groupDisabled === true || !oe.visible) && P(Y), nextTick(() => je(h3.value));
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
    getValueKey: L,
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
      t.mouseEnter = true;
    },
    handleMouseLeave: () => {
      t.mouseEnter = false;
    }
  };
};
var j$ = defineComponent({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let r = [];
    function a(o, l) {
      if (o.length !== l.length)
        return false;
      for (const [s] of o.entries())
        if (o[s] != l[s])
          return false;
      return true;
    }
    return () => {
      var o, l;
      const s = (o = t.default) == null ? void 0 : o.call(t), u = [];
      function c(f) {
        Array.isArray(f) && f.forEach((p) => {
          var m, h3, v, d;
          const y = (m = (p == null ? void 0 : p.type) || {}) == null ? void 0 : m.name;
          y === "ElOptionGroup" ? c(!kt(p.children) && !Array.isArray(p.children) && dt((h3 = p.children) == null ? void 0 : h3.default) ? (v = p.children) == null ? void 0 : v.default() : p.children) : y === "ElOption" ? u.push((d = p.props) == null ? void 0 : d.label) : Array.isArray(p.children) && c(p.children);
        });
      }
      return s.length && c((l = s[0]) == null ? void 0 : l.children), a(u, r) || (r = u, n("update-options", u)), s;
    };
  }
});
var Vi = "ElSelect";
var K$ = defineComponent({
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
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    maxCollapseTags: {
      type: Number,
      default: 1
    },
    teleported: uo.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: an,
      default: aa
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: an,
      default: to
    },
    tagType: { ...ql.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    },
    remoteShowSuffix: {
      type: Boolean,
      default: false
    },
    suffixTransition: {
      type: Boolean,
      default: true
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
      debouncedQueryChange: h3,
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
      handleBlur: D,
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
      hoverIndex: L,
      query: X,
      inputHovering: j,
      currentPlaceholder: te,
      menuVisibleOnFocus: P,
      isOnComposition: ie,
      options: Ce,
      cachedOptions: De,
      optionsCount: Y,
      prefixWidth: oe
    } = toRefs(o), pe = computed(() => {
      const It = [n.b()], Ln = unref(u);
      return Ln && It.push(n.m(Ln)), e.disabled && It.push(n.m("disabled")), It;
    }), Ee = computed(() => [
      n.e("tags"),
      n.is("disabled", unref($))
    ]), yt = computed(() => [
      n.b("tags-wrapper"),
      { "has-prefix": unref(oe) && unref(ke).length }
    ]), Tt = computed(() => [
      n.e("input"),
      n.is(unref(u)),
      n.is("disabled", unref($))
    ]), un = computed(() => [
      n.e("input"),
      n.is(unref(u)),
      n.em("input", "iOS")
    ]), cn = computed(() => [
      n.is("empty", !e.allowCreate && !!unref(X) && unref(Je) === 0)
    ]), Wt = computed(() => ({
      maxWidth: `${unref(ae) - 32}px`,
      width: "100%"
    })), ca = computed(() => ({ maxWidth: `${unref(ae) > 123 ? unref(ae) - 123 : unref(ae) - 75}px` })), Pd = computed(() => ({
      marginLeft: `${unref(oe)}px`,
      flexGrow: 1,
      width: `${unref(Fe) / (unref(ae) - 32)}%`,
      maxWidth: `${unref(ae) - 42}px`
    }));
    provide(co, reactive({
      props: e,
      options: Ce,
      optionsArray: s,
      cachedOptions: De,
      optionsCount: Y,
      filteredOptionsCount: Je,
      hoverIndex: L,
      handleOptionSelect: w,
      onOptionCreate: W,
      onOptionDestroy: q,
      selectWrapper: je,
      selected: ke,
      setSelected: g,
      queryChange: ht,
      groupQueryChange: lt
    })), onMounted(() => {
      o.cachedPlaceHolder = te.value = e.placeholder || (() => a("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (te.value = ""), Nn(je, f), e.remote && e.multiple && b(), nextTick(() => {
        const It = ve.value && ve.value.$el;
        if (It && (ae.value = It.getBoundingClientRect().width, t.slots.prefix)) {
          const Ln = It.querySelector(`.${r.e("prefix")}`);
          oe.value = Math.max(Ln.getBoundingClientRect().width + 11, 30);
        }
      }), g();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(ft, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(ft, "");
    const xd = computed(() => {
      var It, Ln;
      return (Ln = (It = He.value) == null ? void 0 : It.popperRef) == null ? void 0 : Ln.contentRef;
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
      debouncedQueryChange: h3,
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
      hoverIndex: L,
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
      handleBlur: D,
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
      selectTagsStyle: Wt,
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
});
var q$ = ["disabled", "autocomplete"];
var Y$ = ["disabled"];
var U$ = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function G$(e, t, n, r, a, o) {
  const l = resolveComponent("el-tag"), s = resolveComponent("el-tooltip"), u = resolveComponent("el-icon"), c = resolveComponent("el-input"), f = resolveComponent("el-option"), p = resolveComponent("el-options"), m = resolveComponent("el-scrollbar"), h3 = resolveComponent("el-select-menu"), v = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectWrapper",
    class: normalizeClass(e.wrapperKls),
    onMouseenter: t[21] || (t[21] = (...d) => e.handleMouseEnter && e.handleMouseEnter(...d)),
    onMouseleave: t[22] || (t[22] = (...d) => e.handleMouseLeave && e.handleMouseLeave(...d)),
    onClick: t[23] || (t[23] = withModifiers((...d) => e.toggleMenu && e.toggleMenu(...d), ["stop"]))
  }, [
    createVNode(s, {
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
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: e.persistent,
      onShow: e.handleMenuEnter
    }, {
      default: withCtx(() => [
        createBaseVNode("div", {
          class: "select-trigger",
          onMouseenter: t[19] || (t[19] = (d) => e.inputHovering = true),
          onMouseleave: t[20] || (t[20] = (d) => e.inputHovering = false)
        }, [
          e.multiple ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref: "tags",
            class: normalizeClass(e.tagsKls),
            style: normalizeStyle(e.selectTagsStyle)
          }, [
            e.collapseTags && e.selected.length ? (openBlock(), createBlock(Transition, {
              key: 0,
              onAfterLeave: e.resetInputHeight
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass(e.tagWrapperKls)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(e.showTagList, (d) => (openBlock(), createBlock(l, {
                    key: e.getValueKey(d),
                    closable: !e.selectDisabled && !d.isDisabled,
                    size: e.collapseTagSize,
                    hit: d.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (y) => e.deleteTag(y, d)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        class: normalizeClass(e.nsSelect.e("tags-text")),
                        style: normalizeStyle(e.tagTextStyle)
                      }, toDisplayString(d.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128)),
                  e.selected.length > e.maxCollapseTags ? (openBlock(), createBlock(l, {
                    key: 0,
                    closable: false,
                    size: e.collapseTagSize,
                    type: e.tagType,
                    "disable-transitions": ""
                  }, {
                    default: withCtx(() => [
                      e.collapseTagsTooltip ? (openBlock(), createBlock(s, {
                        key: 0,
                        ref: "tagTooltipRef",
                        disabled: e.dropMenuVisible,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: e.effect,
                        placement: "bottom",
                        teleported: e.teleported
                      }, {
                        default: withCtx(() => [
                          createBaseVNode("span", {
                            class: normalizeClass(e.nsSelect.e("tags-text"))
                          }, "+ " + toDisplayString(e.selected.length - e.maxCollapseTags), 3)
                        ]),
                        content: withCtx(() => [
                          createBaseVNode("div", {
                            class: normalizeClass(e.nsSelect.e("collapse-tags"))
                          }, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(e.collapseTagList, (d) => (openBlock(), createElementBlock("div", {
                              key: e.getValueKey(d),
                              class: normalizeClass(e.nsSelect.e("collapse-tag"))
                            }, [
                              createVNode(l, {
                                class: "in-tooltip",
                                closable: !e.selectDisabled && !d.isDisabled,
                                size: e.collapseTagSize,
                                hit: d.hitState,
                                type: e.tagType,
                                "disable-transitions": "",
                                style: { margin: "2px" },
                                onClose: (y) => e.handleDeleteTooltipTag(y, d)
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode("span", {
                                    class: normalizeClass(e.nsSelect.e("tags-text")),
                                    style: normalizeStyle({
                                      maxWidth: e.inputWidth - 75 + "px"
                                    })
                                  }, toDisplayString(d.currentLabel), 7)
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "hit", "type", "onClose"])
                            ], 2))), 128))
                          ], 2)
                        ]),
                        _: 1
                      }, 8, ["disabled", "effect", "teleported"])) : (openBlock(), createElementBlock("span", {
                        key: 1,
                        class: normalizeClass(e.nsSelect.e("tags-text"))
                      }, "+ " + toDisplayString(e.selected.length - e.maxCollapseTags), 3))
                    ]),
                    _: 1
                  }, 8, ["size", "type"])) : createCommentVNode("v-if", true)
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : createCommentVNode("v-if", true),
            e.collapseTags ? createCommentVNode("v-if", true) : (openBlock(), createBlock(Transition, {
              key: 1,
              onAfterLeave: e.resetInputHeight
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass(e.tagWrapperKls),
                  style: normalizeStyle(e.prefixWidth && e.selected.length ? { marginLeft: `${e.prefixWidth}px` } : "")
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(e.selected, (d) => (openBlock(), createBlock(l, {
                    key: e.getValueKey(d),
                    closable: !e.selectDisabled && !d.isDisabled,
                    size: e.collapseTagSize,
                    hit: d.hitState,
                    type: e.tagType,
                    "disable-transitions": "",
                    onClose: (y) => e.deleteTag(y, d)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        class: normalizeClass(e.nsSelect.e("tags-text")),
                        style: normalizeStyle({ maxWidth: e.inputWidth - 75 + "px" })
                      }, toDisplayString(d.currentLabel), 7)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "hit", "type", "onClose"]))), 128))
                ], 6)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])),
            e.filterable && !e.selectDisabled ? withDirectives((openBlock(), createElementBlock("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": t[0] || (t[0] = (d) => e.query = d),
              type: "text",
              class: normalizeClass(e.inputKls),
              disabled: e.selectDisabled,
              autocomplete: e.autocomplete,
              style: normalizeStyle(e.inputStyle),
              onFocus: t[1] || (t[1] = (...d) => e.handleFocus && e.handleFocus(...d)),
              onBlur: t[2] || (t[2] = (...d) => e.handleBlur && e.handleBlur(...d)),
              onKeyup: t[3] || (t[3] = (...d) => e.managePlaceholder && e.managePlaceholder(...d)),
              onKeydown: [
                t[4] || (t[4] = (...d) => e.resetInputState && e.resetInputState(...d)),
                t[5] || (t[5] = withKeys(withModifiers((d) => e.navigateOptions("next"), ["prevent"]), ["down"])),
                t[6] || (t[6] = withKeys(withModifiers((d) => e.navigateOptions("prev"), ["prevent"]), ["up"])),
                t[7] || (t[7] = withKeys((...d) => e.handleKeydownEscape && e.handleKeydownEscape(...d), ["esc"])),
                t[8] || (t[8] = withKeys(withModifiers((...d) => e.selectOption && e.selectOption(...d), ["stop", "prevent"]), ["enter"])),
                t[9] || (t[9] = withKeys((...d) => e.deletePrevTag && e.deletePrevTag(...d), ["delete"])),
                t[10] || (t[10] = withKeys((d) => e.visible = false, ["tab"]))
              ],
              onCompositionstart: t[11] || (t[11] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionupdate: t[12] || (t[12] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onCompositionend: t[13] || (t[13] = (...d) => e.handleComposition && e.handleComposition(...d)),
              onInput: t[14] || (t[14] = (...d) => e.debouncedQueryChange && e.debouncedQueryChange(...d))
            }, null, 46, q$)), [
              [vModelText, e.query]
            ]) : createCommentVNode("v-if", true)
          ], 6)) : createCommentVNode("v-if", true),
          createCommentVNode(" fix: https://github.com/element-plus/element-plus/issues/11415 "),
          e.isIOS && !e.multiple && e.filterable && e.readonly ? (openBlock(), createElementBlock("input", {
            key: 1,
            ref: "iOSInput",
            class: normalizeClass(e.iOSInputKls),
            disabled: e.selectDisabled,
            type: "text"
          }, null, 10, Y$)) : createCommentVNode("v-if", true),
          createVNode(c, {
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
            "validate-event": false,
            class: normalizeClass([e.nsSelect.is("focus", e.visible)]),
            tabindex: e.multiple && e.filterable ? -1 : void 0,
            onFocus: e.handleFocus,
            onBlur: e.handleBlur,
            onInput: e.debouncedOnInputChange,
            onPaste: e.debouncedOnInputChange,
            onCompositionstart: e.handleComposition,
            onCompositionupdate: e.handleComposition,
            onCompositionend: e.handleComposition,
            onKeydown: [
              t[16] || (t[16] = withKeys(withModifiers((d) => e.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              t[17] || (t[17] = withKeys(withModifiers((d) => e.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              withKeys(withModifiers(e.selectOption, ["stop", "prevent"]), ["enter"]),
              withKeys(e.handleKeydownEscape, ["esc"]),
              t[18] || (t[18] = withKeys((d) => e.visible = false, ["tab"]))
            ]
          }, createSlots({
            suffix: withCtx(() => [
              e.iconComponent && !e.showClose ? (openBlock(), createBlock(u, {
                key: 0,
                class: normalizeClass([e.nsSelect.e("caret"), e.nsSelect.e("icon"), e.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(e.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              e.showClose && e.clearIcon ? (openBlock(), createBlock(u, {
                key: 1,
                class: normalizeClass([e.nsSelect.e("caret"), e.nsSelect.e("icon")]),
                onClick: e.handleClearClick
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(e.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
            ]),
            _: 2
          }, [
            e.$slots.prefix ? {
              name: "prefix",
              fn: withCtx(() => [
                createBaseVNode("div", U$, [
                  renderSlot(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: withCtx(() => [
        createVNode(h3, null, {
          default: withCtx(() => [
            withDirectives(createVNode(m, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": e.nsSelect.be("dropdown", "wrap"),
              "view-class": e.nsSelect.be("dropdown", "list"),
              class: normalizeClass(e.scrollbarKls)
            }, {
              default: withCtx(() => [
                e.showNewOption ? (openBlock(), createBlock(f, {
                  key: 0,
                  value: e.query,
                  created: true
                }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                createVNode(p, { onUpdateOptions: e.onOptionsRendered }, {
                  default: withCtx(() => [
                    renderSlot(e.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["onUpdateOptions"])
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [vShow, e.options.size > 0 && !e.loading]
            ]),
            e.emptyText && (!e.allowCreate || e.loading || e.allowCreate && e.options.size === 0) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              e.$slots.empty ? renderSlot(e.$slots, "empty", { key: 0 }) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(e.nsSelect.be("dropdown", "empty"))
              }, toDisplayString(e.emptyText), 3))
            ], 64)) : createCommentVNode("v-if", true)
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
var X$ = Ae(K$, [["render", G$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
var Z$ = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(e) {
    const t = we("select"), n = ref(true), r = getCurrentInstance(), a = ref([]);
    provide(vd, reactive({
      ...toRefs(e)
    }));
    const o = inject(co);
    onMounted(() => {
      a.value = l(r.subTree);
    });
    const l = (u) => {
      const c = [];
      return Array.isArray(u.children) && u.children.forEach((f) => {
        var p;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? c.push(f.component.proxy) : (p = f.children) != null && p.length && c.push(...l(f));
      }), c;
    }, { groupQueryChange: s } = toRaw(o);
    return watch(s, () => {
      n.value = a.value.some((u) => u.visible === true);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function J$(e, t, n, r, a, o) {
  return withDirectives((openBlock(), createElementBlock("ul", {
    class: normalizeClass(e.ns.be("group", "wrap"))
  }, [
    createBaseVNode("li", {
      class: normalizeClass(e.ns.be("group", "title"))
    }, toDisplayString(e.label), 3),
    createBaseVNode("li", null, [
      createBaseVNode("ul", {
        class: normalizeClass(e.ns.b("group"))
      }, [
        renderSlot(e.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [vShow, e.visible]
  ]);
}
var hd = Ae(Z$, [["render", J$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
var md = Ht(X$, {
  Option: Gl,
  OptionGroup: hd
});
var gd = kn(Gl);
kn(hd);
var Xl = () => inject(pd, {});
var Q$ = Me({
  pageSize: {
    type: Number,
    required: true
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
});
var e_ = defineComponent({
  name: "ElPaginationSizes"
});
var t_ = defineComponent({
  ...e_,
  props: Q$,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: r } = ot(), a = we("pagination"), o = Xl(), l = ref(n.pageSize);
    watch(() => n.pageSizes, (c, f) => {
      if (!tn(c, f) && Array.isArray(c)) {
        const p = c.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
        t("page-size-change", p);
      }
    }), watch(() => n.pageSize, (c) => {
      l.value = c;
    });
    const s = computed(() => n.pageSizes);
    function u(c) {
      var f;
      c !== l.value && (l.value = c, (f = o.handleSizeChange) == null || f.call(o, Number(c)));
    }
    return (c, f) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(unref(a).e("sizes"))
    }, [
      createVNode(unref(md), {
        "model-value": l.value,
        disabled: c.disabled,
        "popper-class": c.popperClass,
        size: c.size,
        "validate-event": false,
        onChange: u
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(s), (p) => (openBlock(), createBlock(unref(gd), {
            key: p,
            value: p,
            label: p + unref(r)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var n_ = Ae(t_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
var r_ = Me({
  size: {
    type: String,
    values: nr
  }
});
var a_ = ["disabled"];
var o_ = defineComponent({
  name: "ElPaginationJumper"
});
var l_ = defineComponent({
  ...o_,
  props: r_,
  setup(e) {
    const { t } = ot(), n = we("pagination"), { pageCount: r, disabled: a, currentPage: o, changeEvent: l } = Xl(), s = ref(), u = computed(() => {
      var p;
      return (p = s.value) != null ? p : o == null ? void 0 : o.value;
    });
    function c(p) {
      s.value = p ? +p : "";
    }
    function f(p) {
      p = Math.trunc(+p), l == null || l(p), s.value = void 0;
    }
    return (p, m) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(unref(n).e("jump")),
      disabled: unref(a)
    }, [
      createBaseVNode("span", {
        class: normalizeClass([unref(n).e("goto")])
      }, toDisplayString(unref(t)("el.pagination.goto")), 3),
      createVNode(unref(Ft), {
        size: p.size,
        class: normalizeClass([unref(n).e("editor"), unref(n).is("in-pagination")]),
        min: 1,
        max: unref(r),
        disabled: unref(a),
        "model-value": unref(u),
        "validate-event": false,
        label: unref(t)("el.pagination.page"),
        type: "number",
        "onUpdate:modelValue": c,
        onChange: f
      }, null, 8, ["size", "class", "max", "disabled", "model-value", "label"]),
      createBaseVNode("span", {
        class: normalizeClass([unref(n).e("classifier")])
      }, toDisplayString(unref(t)("el.pagination.pageClassifier")), 3)
    ], 10, a_));
  }
});
var s_ = Ae(l_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
var i_ = Me({
  total: {
    type: Number,
    default: 1e3
  }
});
var u_ = ["disabled"];
var c_ = defineComponent({
  name: "ElPaginationTotal"
});
var d_ = defineComponent({
  ...c_,
  props: i_,
  setup(e) {
    const { t } = ot(), n = we("pagination"), { disabled: r } = Xl();
    return (a, o) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(unref(n).e("total")),
      disabled: unref(r)
    }, toDisplayString(unref(t)("el.pagination.total", {
      total: a.total
    })), 11, u_));
  }
});
var f_ = Ae(d_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
var p_ = Me({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
});
var v_ = ["onKeyup"];
var h_ = ["aria-current", "aria-label", "tabindex"];
var m_ = ["tabindex", "aria-label"];
var g_ = ["aria-current", "aria-label", "tabindex"];
var b_ = ["tabindex", "aria-label"];
var y_ = ["aria-current", "aria-label", "tabindex"];
var w_ = defineComponent({
  name: "ElPaginationPager"
});
var C_ = defineComponent({
  ...w_,
  props: p_,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, r = we("pager"), a = we("icon"), { t: o } = ot(), l = ref(false), s = ref(false), u = ref(false), c = ref(false), f = ref(false), p = ref(false), m = computed(() => {
      const b = n.pagerCount, k = (b - 1) / 2, S = Number(n.currentPage), $ = Number(n.pageCount);
      let T = false, R = false;
      $ > b && (S > b - k && (T = true), S < $ - k && (R = true));
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
    }), h3 = computed(() => [
      "more",
      "btn-quickprev",
      a.b(),
      r.is("disabled", n.disabled)
    ]), v = computed(() => [
      "more",
      "btn-quicknext",
      a.b(),
      r.is("disabled", n.disabled)
    ]), d = computed(() => n.disabled ? -1 : 0);
    watchEffect(() => {
      const b = (n.pagerCount - 1) / 2;
      l.value = false, s.value = false, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - b && (l.value = true), n.currentPage < n.pageCount - b && (s.value = true));
    });
    function y(b = false) {
      n.disabled || (b ? u.value = true : c.value = true);
    }
    function w(b = false) {
      b ? f.value = true : p.value = true;
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
    return (b, k) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass(unref(r).b()),
      onClick: g,
      onKeyup: withKeys(C, ["enter"])
    }, [
      b.pageCount > 0 ? (openBlock(), createElementBlock("li", {
        key: 0,
        class: normalizeClass([[
          unref(r).is("active", b.currentPage === 1),
          unref(r).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === 1,
        "aria-label": unref(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: unref(d)
      }, " 1 ", 10, h_)) : createCommentVNode("v-if", true),
      l.value ? (openBlock(), createElementBlock("li", {
        key: 1,
        class: normalizeClass(unref(h3)),
        tabindex: unref(d),
        "aria-label": unref(o)("el.pagination.prevPages", { pager: b.pagerCount - 2 }),
        onMouseenter: k[0] || (k[0] = (S) => y(true)),
        onMouseleave: k[1] || (k[1] = (S) => u.value = false),
        onFocus: k[2] || (k[2] = (S) => w(true)),
        onBlur: k[3] || (k[3] = (S) => f.value = false)
      }, [
        (u.value || f.value) && !b.disabled ? (openBlock(), createBlock(unref(hr), { key: 0 })) : (openBlock(), createBlock(unref(Ws), { key: 1 }))
      ], 42, m_)) : createCommentVNode("v-if", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m), (S) => (openBlock(), createElementBlock("li", {
        key: S,
        class: normalizeClass([[
          unref(r).is("active", b.currentPage === S),
          unref(r).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === S,
        "aria-label": unref(o)("el.pagination.currentPage", { pager: S }),
        tabindex: unref(d)
      }, toDisplayString(S), 11, g_))), 128)),
      s.value ? (openBlock(), createElementBlock("li", {
        key: 2,
        class: normalizeClass(unref(v)),
        tabindex: unref(d),
        "aria-label": unref(o)("el.pagination.nextPages", { pager: b.pagerCount - 2 }),
        onMouseenter: k[4] || (k[4] = (S) => y()),
        onMouseleave: k[5] || (k[5] = (S) => c.value = false),
        onFocus: k[6] || (k[6] = (S) => w()),
        onBlur: k[7] || (k[7] = (S) => p.value = false)
      }, [
        (c.value || p.value) && !b.disabled ? (openBlock(), createBlock(unref(mr), { key: 0 })) : (openBlock(), createBlock(unref(Ws), { key: 1 }))
      ], 42, b_)) : createCommentVNode("v-if", true),
      b.pageCount > 1 ? (openBlock(), createElementBlock("li", {
        key: 3,
        class: normalizeClass([[
          unref(r).is("active", b.currentPage === b.pageCount),
          unref(r).is("disabled", b.disabled)
        ], "number"]),
        "aria-current": b.currentPage === b.pageCount,
        "aria-label": unref(o)("el.pagination.currentPage", { pager: b.pageCount }),
        tabindex: unref(d)
      }, toDisplayString(b.pageCount), 11, y_)) : createCommentVNode("v-if", true)
    ], 42, v_));
  }
});
var S_ = Ae(C_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
var Ot = (e) => typeof e != "number";
var k_ = Me({
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
});
var $_ = {
  "update:current-page": (e) => it(e),
  "update:page-size": (e) => it(e),
  "size-change": (e) => it(e),
  "current-change": (e) => it(e),
  "prev-click": (e) => it(e),
  "next-click": (e) => it(e)
};
var Hi = "ElPagination";
var __ = defineComponent({
  name: Hi,
  props: k_,
  emits: $_,
  setup(e, { emit: t, slots: n }) {
    const { t: r } = ot(), a = we("pagination"), o = getCurrentInstance().vnode.props || {}, l = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, s = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, u = computed(() => {
      if (Ot(e.total) && Ot(e.pageCount) || !Ot(e.currentPage) && !l)
        return false;
      if (e.layout.includes("sizes")) {
        if (Ot(e.pageCount)) {
          if (!Ot(e.total) && !Ot(e.pageSize) && !s)
            return false;
        } else if (!s)
          return false;
      }
      return true;
    }), c = ref(Ot(e.defaultPageSize) ? 10 : e.defaultPageSize), f = ref(Ot(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), p = computed({
      get() {
        return Ot(e.pageSize) ? c.value : e.pageSize;
      },
      set(g) {
        Ot(e.pageSize) && (c.value = g), s && (t("update:page-size", g), t("size-change", g));
      }
    }), m = computed(() => {
      let g = 0;
      return Ot(e.pageCount) ? Ot(e.total) || (g = Math.max(1, Math.ceil(e.total / p.value))) : g = e.pageCount, g;
    }), h3 = computed({
      get() {
        return Ot(e.currentPage) ? f.value : e.currentPage;
      },
      set(g) {
        let b = g;
        g < 1 ? b = 1 : g > m.value && (b = m.value), Ot(e.currentPage) && (f.value = b), l && (t("update:current-page", b), t("current-change", b));
      }
    });
    watch(m, (g) => {
      h3.value > g && (h3.value = g);
    });
    function v(g) {
      h3.value = g;
    }
    function d(g) {
      p.value = g;
      const b = m.value;
      h3.value > b && (h3.value = b);
    }
    function y() {
      e.disabled || (h3.value -= 1, t("prev-click", h3.value));
    }
    function w() {
      e.disabled || (h3.value += 1, t("next-click", h3.value));
    }
    function C(g, b) {
      g && (g.props || (g.props = {}), g.props.class = [g.props.class, b].join(" "));
    }
    return provide(pd, {
      pageCount: m,
      disabled: computed(() => e.disabled),
      currentPage: h3,
      changeEvent: v,
      handleSizeChange: d
    }), () => {
      var g, b;
      if (!u.value)
        return nt(Hi, r("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && m.value <= 1)
        return null;
      const k = [], S = [], $ = h("div", { class: a.e("rightwrapper") }, S), T = {
        prev: h(P$, {
          disabled: e.disabled,
          currentPage: h3.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: y
        }),
        jumper: h(s_, {
          size: e.small ? "small" : "default"
        }),
        pager: h(S_, {
          currentPage: h3.value,
          pageCount: m.value,
          pagerCount: e.pagerCount,
          onChange: v,
          disabled: e.disabled
        }),
        next: h(I$, {
          disabled: e.disabled,
          currentPage: h3.value,
          pageCount: m.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: w
        }),
        sizes: h(n_, {
          pageSize: p.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (b = (g = n == null ? void 0 : n.default) == null ? void 0 : g.call(n)) != null ? b : null,
        total: h(f_, { total: Ot(e.total) ? 0 : e.total })
      }, R = e.layout.split(",").map((V) => V.trim());
      let z = false;
      return R.forEach((V) => {
        if (V === "->") {
          z = true;
          return;
        }
        z ? S.push(T[V]) : k.push(T[V]);
      }), C(k[0], a.is("first")), C(k[k.length - 1], a.is("last")), z && S.length > 0 && (C(S[0], a.is("first")), C(S[S.length - 1], a.is("last")), k.push($)), h("div", {
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
var E_ = Ht(__);
var T_ = /["'&<>]/;
var O_ = P_;
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
var x_ = ln(O_);
var Oo = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
};
var M_ = function(e, t, n, r, a) {
  if (!t && !r && (!a || Array.isArray(a) && !a.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const o = r ? null : function(s, u) {
    return a ? (Array.isArray(a) || (a = [a]), a.map((c) => typeof c == "string" ? _t(s, c) : c(s, u, e))) : (t !== "$key" && zt(s) && "$value" in s && (s = s.$value), [zt(s) ? _t(s, t) : s]);
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
};
var bd = function(e, t) {
  let n = null;
  return e.columns.forEach((r) => {
    r.id === t && (n = r);
  }), n;
};
var A_ = function(e, t) {
  let n = null;
  for (let r = 0; r < e.columns.length; r++) {
    const a = e.columns[r];
    if (a.columnKey === t) {
      n = a;
      break;
    }
  }
  return n || xl("ElTable", `No column matching with column-key: ${t}`), n;
};
var Wi = function(e, t, n) {
  const r = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return r ? bd(e, r[0]) : null;
};
var Ct = (e, t) => {
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
};
var Hn = function(e, t) {
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
  let r = false;
  const a = e.indexOf(t), o = a !== -1, l = (s) => {
    s === "add" ? e.push(t) : e.splice(a, 1), r = true, tt(t.children) && t.children.forEach((u) => {
      Br(e, u, n ?? !o);
    });
  };
  return Jt(n) ? n && !o ? l("add") : !n && o && l("remove") : l(o ? "remove" : "add"), r;
}
function L_(e, t, n = "children", r = "hasChildren") {
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
var fn;
function D_(e, t, n, r, a) {
  a = Fu({
    enterable: true,
    showArrow: true
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
      f && f.destroy(), h3 && (e == null || e.removeChild(h3)), t.removeEventListener("mouseenter", p), t.removeEventListener("mouseleave", m), l == null || l.removeEventListener("scroll", fn), fn = void 0;
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
  const h3 = s();
  h3.onmouseenter = p, h3.onmouseleave = m;
  const v = [];
  if (a.offset && v.push({
    name: "offset",
    options: {
      offset: [0, a.offset]
    }
  }), a.showArrow) {
    const y = h3.appendChild(u());
    v.push({
      name: "arrow",
      options: {
        element: y,
        padding: 10
      }
    });
  }
  const d = a.popperOptions || {};
  return f = sc(t, h3, {
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
var Cd = (e, t, n, r) => {
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
};
var Jl = (e, t, n, r, a, o = 0) => {
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
var Ql = (e, t, n, r) => {
  const {
    direction: a,
    start: o = 0,
    after: l = 0
  } = Cd(e, t, n, r);
  if (!a)
    return;
  const s = {}, u = a === "left", c = n.states.columns.value;
  return u ? s.left = c.slice(0, o).reduce(Ki, 0) : s.right = c.slice(l + 1).reverse().reduce(Ki, 0), s;
};
var $r = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function F_(e) {
  const t = getCurrentInstance(), n = ref(false), r = ref([]);
  return {
    updateExpandRows: () => {
      const u = e.data.value || [], c = e.rowKey.value;
      if (n.value)
        r.value = u.slice();
      else if (c) {
        const f = Hn(r.value, c);
        r.value = u.reduce((p, m) => {
          const h3 = Ct(m, c);
          return f[h3] && p.push(m), p;
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
      r.value = u.reduce((m, h3) => {
        const v = p[h3];
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
  const t = getCurrentInstance(), n = ref(null), r = ref(null), a = (c) => {
    t.store.assertRowKey(), n.value = c, l(c);
  }, o = () => {
    n.value = null;
  }, l = (c) => {
    const { data: f, rowKey: p } = e;
    let m = null;
    p.value && (m = (unref(f) || []).find((h3) => Ct(h3, p.value) === c)), r.value = m, t.emit("current-change", r.value, null);
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
  const t = ref([]), n = ref({}), r = ref(16), a = ref(false), o = ref({}), l = ref("hasChildren"), s = ref("children"), u = getCurrentInstance(), c = computed(() => {
    if (!e.rowKey.value)
      return {};
    const w = e.data.value || [];
    return p(w);
  }), f = computed(() => {
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
    return L_(w, (b, k, S) => {
      const $ = Ct(b, C);
      Array.isArray(k) ? g[$] = {
        children: k.map((T) => Ct(T, C)),
        level: S
      } : a.value && (g[$] = {
        children: [],
        lazy: true,
        level: S
      });
    }, s.value, l.value), g;
  }, m = (w = false, C = ((g) => (g = u.store) == null ? void 0 : g.states.defaultExpandAll.value)()) => {
    var g;
    const b = c.value, k = f.value, S = Object.keys(b), $ = {};
    if (S.length) {
      const T = unref(n), R = [], z = (F, N) => {
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
          const { loaded: W = false, loading: q = false } = N || {};
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
          const { loaded: W = false, loading: q = false } = N || {};
          $[F] = {
            lazy: true,
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
  watch(() => t.value, () => {
    m(true);
  }), watch(() => c.value, () => {
    m();
  }), watch(() => f.value, () => {
    m();
  });
  const h3 = (w) => {
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
    b && !n.value[C].loaded && (n.value[C].loading = true, b(w, g, (k) => {
      if (!Array.isArray(k))
        throw new TypeError("[ElTable] data must be an array");
      n.value[C].loading = false, n.value[C].loaded = true, n.value[C].expanded = true, k.length && (o.value[C] = k), u.emit("expand-change", w, true);
    }));
  };
  return {
    loadData: y,
    loadOrToggle: d,
    toggleTreeExpansion: v,
    updateTreeExpandKeys: h3,
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
var V_ = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : M_(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
};
var Ia = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, Ia(n.children)) : t.push(n);
  }), t;
};
function H_() {
  var e;
  const t = getCurrentInstance(), { size: n } = toRefs((e = t.proxy) == null ? void 0 : e.$props), r = ref(null), a = ref([]), o = ref([]), l = ref(false), s = ref([]), u = ref([]), c = ref([]), f = ref([]), p = ref([]), m = ref([]), h3 = ref([]), v = ref([]), d = [], y = ref(0), w = ref(0), C = ref(0), g = ref(false), b = ref([]), k = ref(false), S = ref(false), $ = ref(null), T = ref({}), R = ref(null), z = ref(null), V = ref(null), F = ref(null), N = ref(null);
  watch(a, () => t.state && M(false), {
    deep: true
  });
  const B = () => {
    if (!r.value)
      throw new Error("[ElTable] prop row-key is required");
  }, W = (Z) => {
    var L;
    (L = Z.children) == null || L.forEach((X) => {
      X.fixed = Z.fixed, W(X);
    });
  }, q = () => {
    s.value.forEach((te) => {
      W(te);
    }), f.value = s.value.filter((te) => te.fixed === true || te.fixed === "left"), p.value = s.value.filter((te) => te.fixed === "right"), f.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = true, f.value.unshift(s.value[0]));
    const Z = s.value.filter((te) => !te.fixed);
    u.value = [].concat(f.value).concat(Z).concat(p.value);
    const L = Ia(Z), X = Ia(f.value), j = Ia(p.value);
    y.value = L.length, w.value = X.length, C.value = j.length, c.value = [].concat(X).concat(L).concat(j), l.value = f.value.length > 0 || p.value.length > 0;
  }, M = (Z, L = false) => {
    Z && q(), L ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, H = (Z) => b.value.includes(Z), _ = () => {
    g.value = false, b.value.length && (b.value = [], t.emit("selection-change", []));
  }, D = () => {
    let Z;
    if (r.value) {
      Z = [];
      const L = Hn(b.value, r.value), X = Hn(a.value, r.value);
      for (const j in L)
        qn(L, j) && !X[j] && Z.push(L[j].row);
    } else
      Z = b.value.filter((L) => !a.value.includes(L));
    if (Z.length) {
      const L = b.value.filter((X) => !Z.includes(X));
      b.value = L, t.emit("selection-change", L.slice());
    }
  }, U = () => (b.value || []).slice(), I = (Z, L = void 0, X = true) => {
    if (Br(b.value, Z, L)) {
      const te = (b.value || []).slice();
      X && t.emit("select", te, Z), t.emit("selection-change", te);
    }
  }, G = () => {
    var Z, L;
    const X = S.value ? !g.value : !(g.value || b.value.length);
    g.value = X;
    let j = false, te = 0;
    const P = (L = (Z = t == null ? void 0 : t.store) == null ? void 0 : Z.states) == null ? void 0 : L.rowKey.value;
    a.value.forEach((ie, Ce) => {
      const De = Ce + te;
      $.value ? $.value.call(null, ie, De) && Br(b.value, ie, X) && (j = true) : Br(b.value, ie, X) && (j = true), te += ge(Ct(ie, P));
    }), j && t.emit("selection-change", b.value ? b.value.slice() : []), t.emit("select-all", b.value);
  }, ne = () => {
    const Z = Hn(b.value, r.value);
    a.value.forEach((L) => {
      const X = Ct(L, r.value), j = Z[X];
      j && (b.value[j.index] = L);
    });
  }, he = () => {
    var Z, L, X;
    if (((Z = a.value) == null ? void 0 : Z.length) === 0) {
      g.value = false;
      return;
    }
    let j;
    r.value && (j = Hn(b.value, r.value));
    const te = function(De) {
      return j ? !!j[Ct(De, r.value)] : b.value.includes(De);
    };
    let P = true, ie = 0, Ce = 0;
    for (let De = 0, Y = (a.value || []).length; De < Y; De++) {
      const oe = (X = (L = t == null ? void 0 : t.store) == null ? void 0 : L.states) == null ? void 0 : X.rowKey.value, pe = De + Ce, Ee = a.value[De], yt = $.value && $.value.call(null, Ee, pe);
      if (te(Ee))
        ie++;
      else if (!$.value || yt) {
        P = false;
        break;
      }
      Ce += ge(Ct(Ee, oe));
    }
    ie === 0 && (P = false), g.value = P;
  }, ge = (Z) => {
    var L;
    if (!t || !t.store)
      return 0;
    const { treeData: X } = t.store.states;
    let j = 0;
    const te = (L = X.value[Z]) == null ? void 0 : L.children;
    return te && (j += te.length, te.forEach((P) => {
      j += ge(P);
    })), j;
  }, se = (Z, L) => {
    Array.isArray(Z) || (Z = [Z]);
    const X = {};
    return Z.forEach((j) => {
      T.value[j.id] = L, X[j.columnKey || j.id] = L;
    }), X;
  }, le = (Z, L, X) => {
    z.value && z.value !== Z && (z.value.order = null), z.value = Z, V.value = L, F.value = X;
  }, ue = () => {
    let Z = unref(o);
    Object.keys(T.value).forEach((L) => {
      const X = T.value[L];
      if (!X || X.length === 0)
        return;
      const j = bd({
        columns: c.value
      }, L);
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
    const { tableHeaderRef: L } = t.refs;
    if (!L)
      return;
    const X = Object.assign({}, L.filterPanels), j = Object.keys(X);
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
          silent: true,
          multi: true
        });
      } else
        j.forEach((te) => {
          const P = c.value.find((ie) => ie.id === te);
          P && (P.filteredValue = []);
        }), T.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: true
        });
  }, He = () => {
    z.value && (le(null, null, null), t.store.commit("changeSortCondition", {
      silent: true
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
    cleanSelection: D,
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
    toggleRowExpansionAdapter: (Z, L) => {
      c.value.some(({ type: j }) => j === "expand") ? Ue(Z, L) : Se(Z, L);
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
      fixedLeafColumns: h3,
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
  const e = getCurrentInstance(), t = H_();
  return {
    ns: we("table"),
    ...t,
    mutations: {
      setData(l, s) {
        const u = unref(l._data) !== s;
        l.data.value = s, l._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), unref(l.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : u ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(l, s, u, c) {
        const f = unref(l._columns);
        let p = [];
        u ? (u && !u.children && (u.children = []), u.children.push(s), p = il(f, u)) : (f.push(s), p = f), ul(p), l._columns.value = p, l.updateOrderFns.push(c), s.type === "selection" && (l.selectable.value = s.selectable, l.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(l, s) {
        var u;
        ((u = s.getColumnIndex) == null ? void 0 : u.call(s)) !== s.no && (ul(l._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(l, s, u, c) {
        const f = unref(l._columns) || [];
        if (u)
          u.children.splice(u.children.findIndex((m) => m.id === s.id), 1), nextTick(() => {
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
          const p = unref(l.columns).find((m) => m.property === u);
          p && (p.order = c, e.store.updateSort(p, u, c), e.store.commit("changeSortCondition", { init: f }));
        }
      },
      changeSortCondition(l, s) {
        const { sortingColumn: u, sortProp: c, sortOrder: f } = l, p = unref(u), m = unref(c), h3 = unref(f);
        h3 === null && (l.sortingColumn.value = null, l.sortProp.value = null);
        const v = { filter: true };
        e.store.execQuery(v), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: p,
          prop: m,
          order: h3
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
      nextTick(() => e.layout.updateScrollY.apply(e.layout));
    }
  };
}
var zr = {
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
    watch(() => kd(t, n), (r) => {
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
var q_ = class {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = true, this.showHeader = true, this.height = ref(null), this.scrollX = ref(false), this.scrollY = ref(false), this.bodyWidth = ref(null), this.fixedWidth = ref(null), this.rightFixedWidth = ref(null), this.gutterWidth = 0;
    for (const n in t)
      qn(t, n) && (isRef(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
    if (!this.table)
      throw new Error("Table is required for Table Layout");
    if (!this.store)
      throw new Error("Store is required for Table Layout");
  }
  updateScrollY() {
    if (this.height.value === null)
      return false;
    const n = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (n != null && n.wrapRef)) {
      let r = true;
      const a = this.scrollY.value;
      return r = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = r, a !== r;
    }
    return false;
  }
  setHeight(t, n = "height") {
    if (!at)
      return;
    const r = this.table.vnode.el;
    if (t = R_(t), this.height.value = Number(t), !r && (t || t === 0))
      return nextTick(() => this.setHeight(t, n));
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
      return true;
    let n = t;
    for (; n.tagName !== "DIV"; ) {
      if (getComputedStyle(n).display === "none")
        return true;
      n = n.parentElement;
    }
    return false;
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
        this.scrollX.value = false;
        const u = n - r;
        if (o.length === 1)
          o[0].realWidth = Number(o[0].minWidth || 80) + u;
        else {
          const c = o.reduce((m, h3) => m + Number(h3.minWidth || 80), 0), f = u / c;
          let p = 0;
          o.forEach((m, h3) => {
            if (h3 === 0)
              return;
            const v = Math.floor(Number(m.minWidth || 80) * f);
            p += v, m.realWidth = Number(m.minWidth || 80) + v;
          }), o[0].realWidth = Number(o[0].minWidth || 80) + u - p;
        }
      } else
        this.scrollX.value = true, o.forEach((u) => {
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
};
var { CheckboxGroup: Y_ } = Zn;
var U_ = defineComponent({
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
    const t = getCurrentInstance(), { t: n } = ot(), r = we("table-filter"), a = t == null ? void 0 : t.parent;
    a.filterPanels.value[e.column.id] || (a.filterPanels.value[e.column.id] = t);
    const o = ref(false), l = ref(null), s = computed(() => e.column && e.column.filters), u = computed({
      get: () => {
        var b;
        return (((b = e.column) == null ? void 0 : b.filteredValue) || [])[0];
      },
      set: (b) => {
        c.value && (typeof b < "u" && b !== null ? c.value.splice(0, 1, b) : c.value.splice(0, 1));
      }
    }), c = computed({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(b) {
        e.column && e.upDataColumn("filteredValue", b);
      }
    }), f = computed(() => e.column ? e.column.filterMultiple : true), p = (b) => b.value === u.value, m = () => {
      o.value = false;
    }, h3 = (b) => {
      b.stopPropagation(), o.value = !o.value;
    }, v = () => {
      o.value = false;
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
    watch(o, (b) => {
      e.column && e.upDataColumn("filterOpened", b);
    }, {
      immediate: true
    });
    const g = computed(() => {
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
      showFilterPanel: h3,
      hideFilterPanel: v,
      popperPaneRef: g,
      tooltip: l
    };
  }
});
var G_ = { key: 0 };
var X_ = ["disabled"];
var Z_ = ["label", "onClick"];
function J_(e, t, n, r, a, o) {
  const l = resolveComponent("el-checkbox"), s = resolveComponent("el-checkbox-group"), u = resolveComponent("el-scrollbar"), c = resolveComponent("arrow-up"), f = resolveComponent("arrow-down"), p = resolveComponent("el-icon"), m = resolveComponent("el-tooltip"), h3 = resolveDirective("click-outside");
  return openBlock(), createBlock(m, {
    ref: "tooltip",
    visible: e.tooltipVisible,
    offset: 0,
    placement: e.placement,
    "show-arrow": false,
    "stop-popper-mouse-event": false,
    teleported: "",
    effect: "light",
    pure: "",
    "popper-class": e.ns.b(),
    persistent: ""
  }, {
    content: withCtx(() => [
      e.multiple ? (openBlock(), createElementBlock("div", G_, [
        createBaseVNode("div", {
          class: normalizeClass(e.ns.e("content"))
        }, [
          createVNode(u, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (v) => e.filteredValue = v),
                class: normalizeClass(e.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(e.filters, (v) => (openBlock(), createBlock(l, {
                    key: v.value,
                    label: v.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(v.text), 1)
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
        createBaseVNode("div", {
          class: normalizeClass(e.ns.e("bottom"))
        }, [
          createBaseVNode("button", {
            class: normalizeClass({ [e.ns.is("disabled")]: e.filteredValue.length === 0 }),
            disabled: e.filteredValue.length === 0,
            type: "button",
            onClick: t[1] || (t[1] = (...v) => e.handleConfirm && e.handleConfirm(...v))
          }, toDisplayString(e.t("el.table.confirmFilter")), 11, X_),
          createBaseVNode("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...v) => e.handleReset && e.handleReset(...v))
          }, toDisplayString(e.t("el.table.resetFilter")), 1)
        ], 2)
      ])) : (openBlock(), createElementBlock("ul", {
        key: 1,
        class: normalizeClass(e.ns.e("list"))
      }, [
        createBaseVNode("li", {
          class: normalizeClass([
            e.ns.e("list-item"),
            {
              [e.ns.is("active")]: e.filterValue === void 0 || e.filterValue === null
            }
          ]),
          onClick: t[3] || (t[3] = (v) => e.handleSelect(null))
        }, toDisplayString(e.t("el.table.clearFilter")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.filters, (v) => (openBlock(), createElementBlock("li", {
          key: v.value,
          class: normalizeClass([e.ns.e("list-item"), e.ns.is("active", e.isActive(v))]),
          label: v.value,
          onClick: (d) => e.handleSelect(v.value)
        }, toDisplayString(v.text), 11, Z_))), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...v) => e.showFilterPanel && e.showFilterPanel(...v))
      }, [
        createVNode(p, null, {
          default: withCtx(() => [
            e.column.filterOpened ? (openBlock(), createBlock(c, { key: 0 })) : (openBlock(), createBlock(f, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [h3, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var Q_ = Ae(U_, [["render", J_], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function $d(e) {
  const t = getCurrentInstance();
  onBeforeMount(() => {
    n.value.addObserver(t);
  }), onMounted(() => {
    r(n.value), a(n.value);
  }), onUpdated(() => {
    r(n.value), a(n.value);
  }), onUnmounted(() => {
    n.value.removeObserver(t);
  });
  const n = computed(() => {
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
      const m = s[f], h3 = m.getAttribute("name"), v = c[h3];
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
var sn = Symbol("ElTable");
function eE(e, t) {
  const n = getCurrentInstance(), r = inject(sn), a = (d) => {
    d.stopPropagation();
  }, o = (d, y) => {
    !y.filters && y.sortable ? v(d, y, false) : y.filterable && !y.sortable && a(d), r == null || r.emit("header-click", y, d);
  }, l = (d, y) => {
    r == null || r.emit("header-contextmenu", y, d);
  }, s = ref(null), u = ref(false), c = ref({}), f = (d, y) => {
    if (at && !(y.children && y.children.length > 0) && s.value && e.border) {
      u.value = true;
      const w = r;
      t("set-drag-visible", true);
      const g = (w == null ? void 0 : w.vnode.el).getBoundingClientRect().left, b = n.vnode.el.querySelector(`th.${y.id}`), k = b.getBoundingClientRect(), S = k.left - g + 30;
      Hu(b, "noclick"), c.value = {
        startMouseLeft: d.clientX,
        startLeft: k.right - g,
        startColumnLeft: k.left - g,
        tableLeft: g
      };
      const $ = w == null ? void 0 : w.refs.resizeProxy;
      $.style.left = `${c.value.startLeft}px`, document.onselectstart = function() {
        return false;
      }, document.ondragstart = function() {
        return false;
      };
      const T = (z) => {
        const V = z.clientX - c.value.startMouseLeft, F = c.value.startLeft + V;
        $.style.left = `${Math.max(S, F)}px`;
      }, R = () => {
        if (u.value) {
          const { startColumnLeft: z, startLeft: V } = c.value, N = Number.parseInt($.style.left, 10) - z;
          y.width = y.realWidth = N, w == null || w.emit("header-dragend", y.width, V - z, y, d), requestAnimationFrame(() => {
            e.store.scheduleLayout(false, true);
          }), document.body.style.cursor = "", u.value = false, s.value = null, c.value = {}, t("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", R), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Do(b, "noclick");
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
  }, h3 = ({ order: d, sortOrders: y }) => {
    if (d === "")
      return y[0];
    const w = y.indexOf(d || null);
    return y[w > y.length - 2 ? 0 : w + 1];
  }, v = (d, y, w) => {
    var C;
    d.stopPropagation();
    const g = y.order === w ? null : w || h3(y), b = (C = d.target) == null ? void 0 : C.closest("th");
    if (b && ir(b, "noclick")) {
      Do(b, "noclick");
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
  const t = inject(sn), n = we("table");
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
      const h3 = Ql(u, f.fixed, e.store, c);
      return $r(h3, "left"), $r(h3, "right"), Object.assign({}, m, h3);
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
      const h3 = t == null ? void 0 : t.props.headerCellClassName;
      return typeof h3 == "string" ? m.push(h3) : typeof h3 == "function" && m.push(h3.call(null, {
        rowIndex: s,
        columnIndex: u,
        row: c,
        column: f
      })), m.push(n.e("cell")), m.filter((v) => !!v).join(" ");
    }
  };
}
var _d = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, _d(n.children))) : t.push(n);
  }), t;
};
var nE = (e) => {
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
    o.children ? (o.rowSpan = 1, o.children.forEach((l) => l.isSubColumn = true)) : o.rowSpan = t - o.level + 1, r[o.level - 1].push(o);
  }), r;
};
function rE(e) {
  const t = inject(sn), n = computed(() => nE(e.store.states.originColumns.value));
  return {
    isGroup: computed(() => {
      const o = n.value.length > 1;
      return o && t && (t.state.isGroup.value = true), o;
    }),
    toggleAllSelection: (o) => {
      o.stopPropagation(), t == null || t.store.commit("toggleAllSelection");
    },
    columnRows: n
  };
}
var aE = defineComponent({
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
      required: true,
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
    const n = getCurrentInstance(), r = inject(sn), a = we("table"), o = ref({}), { onColumnsChange: l, onScrollableChange: s } = $d(r);
    onMounted(async () => {
      await nextTick(), await nextTick();
      const { prop: S, order: $ } = e.defaultSort;
      r == null || r.store.commit("sort", { prop: S, order: $, init: true });
    });
    const {
      handleHeaderClick: u,
      handleHeaderContextMenu: c,
      handleMouseDown: f,
      handleMouseMove: p,
      handleMouseOut: m,
      handleSortClick: h3,
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
      handleSortClick: h3,
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
      store: h3,
      $parent: v
    } = this;
    let d = 1;
    return h("thead", {
      class: { [e.is("group")]: t }
    }, n.map((y, w) => h("tr", {
      class: o(w),
      key: w,
      style: l(w)
    }, y.map((C, g) => (C.rowSpan > d && (d = C.rowSpan), h("th", {
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
      h("div", {
        class: [
          "cell",
          C.filteredValue && C.filteredValue.length > 0 ? "highlight" : ""
        ]
      }, [
        C.renderHeader ? C.renderHeader({
          column: C,
          $index: g,
          store: h3,
          _self: v
        }) : C.label,
        C.sortable && h("span", {
          onClick: (b) => p(b, C),
          class: "caret-wrapper"
        }, [
          h("i", {
            onClick: (b) => p(b, C, "ascending"),
            class: "sort-caret ascending"
          }),
          h("i", {
            onClick: (b) => p(b, C, "descending"),
            class: "sort-caret descending"
          })
        ]),
        C.filterable && h(Q_, {
          store: h3,
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
  const t = inject(sn), n = ref(""), r = ref(h("div")), { nextZIndex: a } = fc(), o = (v, d, y) => {
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
      ($ + N > k.offsetWidth || T + B > k.offsetHeight || k.scrollWidth > k.offsetWidth) && D_(t == null ? void 0 : t.refs.tableWrapper, g, g.innerText || g.textContent, a, y);
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
  const t = inject(sn), n = we("table");
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
      const h3 = t == null ? void 0 : t.props.cellStyle;
      let v = h3 ?? {};
      typeof h3 == "function" && (v = h3.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: p,
        column: m
      }));
      const d = Ql(f, e == null ? void 0 : e.fixed, e.store);
      return $r(d, "left"), $r(d, "right"), Object.assign({}, v, d);
    },
    getCellClass: (c, f, p, m, h3) => {
      const v = Jl(n.b(), f, e == null ? void 0 : e.fixed, e.store, void 0, h3), d = [m.id, m.align, m.className, ...v], y = t == null ? void 0 : t.props.cellClassName;
      return typeof y == "string" ? d.push(y) : typeof y == "function" && d.push(y.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: p,
        column: m
      })), d.push(n.e("cell")), d.filter((w) => !!w).join(" ");
    },
    getSpan: (c, f, p, m) => {
      let h3 = 1, v = 1;
      const d = t == null ? void 0 : t.props.spanMethod;
      if (typeof d == "function") {
        const y = d({
          row: c,
          column: f,
          rowIndex: p,
          columnIndex: m
        });
        Array.isArray(y) ? (h3 = y[0], v = y[1]) : typeof y == "object" && (h3 = y.rowspan, v = y.colspan);
      }
      return { rowspan: h3, colspan: v };
    },
    getColspanRealWidth: (c, f, p) => {
      if (f < 1)
        return c[p].realWidth;
      const m = c.map(({ realWidth: h3, width: v }) => h3 || v).slice(p, p + f);
      return Number(m.reduce((h3, v) => Number(h3) + Number(v), -1));
    }
  };
}
function sE(e) {
  const t = inject(sn), n = we("table"), {
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
    getRowClass: h3,
    getCellStyle: v,
    getCellClass: d,
    getSpan: y,
    getColspanRealWidth: w
  } = lE(e), C = computed(() => e.store.states.columns.value.findIndex(({ type: $ }) => $ === "default")), g = ($, T) => {
    const R = t.props.rowKey;
    return R ? Ct($, R) : T;
  }, b = ($, T, R, z = false) => {
    const { tooltipEffect: V, tooltipOptions: F, store: N } = e, { indent: B, columns: W } = N.states, q = h3($, T);
    let M = true;
    return R && (q.push(n.em("row", `level-${R.level}`)), M = R.display), h("tr", {
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
    }, W.value.map((_, D) => {
      const { rowspan: U, colspan: I } = y($, _, T, D);
      if (!U || !I)
        return null;
      const G = { ..._ };
      G.realWidth = w(W.value, I, D);
      const ne = {
        store: e.store,
        _self: e.context || t,
        column: G,
        row: $,
        $index: T,
        cellIndex: D,
        expanded: z
      };
      D === C.value && R && (ne.treeNode = {
        indent: R.level * B.value,
        level: R.level
      }, typeof R.expanded == "boolean" && (ne.treeNode.expanded = R.expanded, "loading" in R && (ne.treeNode.loading = R.loading), "noLazyChildren" in R && (ne.treeNode.noLazyChildren = R.noLazyChildren)));
      const he = `${T},${D}`, ge = G.columnKey || G.rawColumnKey || "", se = k(D, _, ne), le = _.showOverflowTooltip && Fu({
        effect: V
      }, F, _.showOverflowTooltip);
      return h("td", {
        style: v(T, D, $, _),
        class: d(T, D, $, _, I - 1),
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
        const H = z($), _ = b($, T, void 0, H), D = t.renderExpanded;
        return H ? D ? [
          [
            _,
            h("tr", {
              key: `expanded-row__${_.key}`
            }, [
              h("td", {
                colspan: q.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [D({ row: $, $index: T, store: R, expanded: H })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), _) : [[_]];
      } else if (Object.keys(F.value).length) {
        V();
        const H = Ct($, W.value);
        let _ = F.value[H], D = null;
        _ && (D = {
          expanded: _.expanded,
          level: _.level,
          display: true
        }, typeof _.lazy == "boolean" && (typeof _.loaded == "boolean" && _.loaded && (D.noLazyChildren = !(_.children && _.children.length)), D.loading = _.loading));
        const U = [b($, T, D)];
        if (_) {
          let I = 0;
          const G = (he, ge) => {
            he && he.length && ge && he.forEach((se) => {
              const le = {
                display: ge.display && ge.expanded,
                level: ge.level + 1,
                expanded: false,
                noLazyChildren: false,
                loading: false
              }, ue = Ct(se, W.value);
              if (ue == null)
                throw new Error("For nested data item, row-key is required.");
              if (_ = { ...F.value[ue] }, _ && (le.expanded = _.expanded, _.level = _.level || le.level, _.display = !!(_.expanded && le.display), typeof _.lazy == "boolean" && (typeof _.loaded == "boolean" && _.loaded && (le.noLazyChildren = !(_.children && _.children.length)), le.loading = _.loading)), I++, U.push(b(se, T + I, le)), _) {
                const ve = N.value[ue] || se[B.value];
                G(ve, _);
              }
            });
          };
          _.display = true;
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
var iE = {
  store: {
    required: true,
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
var uE = defineComponent({
  name: "ElTableBody",
  props: iE,
  setup(e) {
    const t = getCurrentInstance(), n = inject(sn), r = we("table"), { wrappedRowRender: a, tooltipContent: o, tooltipTrigger: l } = sE(e), { onColumnsChange: s, onScrollableChange: u } = $d(n);
    return watch(e.store.states.hoverRow, (c, f) => {
      if (!e.store.states.isComplex.value || !at)
        return;
      let p = window.requestAnimationFrame;
      p || (p = (m) => window.setTimeout(m, 16)), p(() => {
        const m = t == null ? void 0 : t.vnode.el, h3 = Array.from((m == null ? void 0 : m.children) || []).filter((y) => y == null ? void 0 : y.classList.contains(`${r.e("row")}`)), v = h3[f], d = h3[c];
        v && Do(v, "hover-row"), d && Hu(d, "hover-row");
      });
    }), onUnmounted(() => {
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
    return h("tbody", {}, [
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
  return h("colgroup", {}, n.map((a) => h("col", r(a))));
}
es.props = ["columns", "tableLayout"];
function cE() {
  const e = inject(sn), t = e == null ? void 0 : e.store, n = computed(() => t.states.fixedLeafColumnsLength.value), r = computed(() => t.states.rightFixedColumns.value.length), a = computed(() => t.states.columns.value.length), o = computed(() => t.states.fixedColumns.value.length), l = computed(() => t.states.rightFixedColumns.value.length);
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
var fE = defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
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
      let m = true;
      f.forEach((v) => {
        if (!Number.isNaN(+v)) {
          m = false;
          const d = `${v}`.split(".")[1];
          p.push(d ? d.length : 0);
        }
      });
      const h3 = Math.max.apply(null, p);
      m ? s[c] = "" : s[c] = f.reduce((v, d) => {
        const y = Number(d);
        return Number.isNaN(+y) ? v : Number.parseFloat((v + d).toFixed(Math.min(h3, 20)));
      }, 0);
    }), h("table", {
      class: o.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      es({
        columns: e
      }),
      h("tbody", [
        h("tr", {}, [
          ...e.map((u, c) => h("td", {
            key: c,
            colspan: u.colSpan,
            rowspan: u.rowSpan,
            class: n(e, c),
            style: t(u, c)
          }, [
            h("div", {
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
      e.toggleRowSelection(f, p, false), e.updateAllSelected();
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
  const a = ref(false), o = ref(null), l = ref(false), s = (_) => {
    l.value = _;
  }, u = ref({
    width: null,
    height: null,
    headerHeight: null
  }), c = ref(false), f = {
    display: "inline-block",
    verticalAlign: "middle"
  }, p = ref(), m = ref(0), h3 = ref(0), v = ref(0), d = ref(0), y = ref(0);
  watchEffect(() => {
    t.setHeight(e.height);
  }), watchEffect(() => {
    t.setMaxHeight(e.maxHeight);
  }), watch(() => [e.currentRowKey, n.states.rowKey], ([_, D]) => {
    !unref(D) || !unref(_) || n.setCurrentRowKey(`${_}`);
  }, {
    immediate: true
  }), watch(() => e.data, (_) => {
    r.store.commit("setData", _);
  }, {
    immediate: true,
    deep: true
  }), watchEffect(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const w = () => {
    r.store.commit("setHoverRow", null), r.hoverState && (r.hoverState = null);
  }, C = (_, D) => {
    const { pixelX: U, pixelY: I } = D;
    Math.abs(U) >= Math.abs(I) && (r.refs.bodyWrapper.scrollLeft += D.pixelX / 5);
  }, g = computed(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), b = computed(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), k = () => {
    g.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(R);
  };
  onMounted(async () => {
    await nextTick(), n.updateColumns(), z(), requestAnimationFrame(k);
    const _ = r.vnode.el, D = r.refs.headerWrapper;
    e.flexible && _ && _.parentElement && (_.parentElement.style.minWidth = "0"), u.value = {
      width: p.value = _.offsetWidth,
      height: _.offsetHeight,
      headerHeight: e.showHeader && D ? D.offsetHeight : null
    }, n.states.columns.value.forEach((U) => {
      U.filteredValue && U.filteredValue.length && r.store.commit("filterChange", {
        column: U,
        values: U.filteredValue,
        silent: true
      });
    }), r.$ready = true;
  });
  const S = (_, D) => {
    if (!_)
      return;
    const U = Array.from(_.classList).filter((I) => !I.startsWith("is-scrolling-"));
    U.push(t.scrollX.value ? D : "is-scrolling-none"), _.className = U.join(" ");
  }, $ = (_) => {
    const { tableWrapper: D } = r.refs;
    S(D, _);
  }, T = (_) => {
    const { tableWrapper: D } = r.refs;
    return !!(D && D.classList.contains(_));
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
    const { scrollLeft: D, offsetWidth: U, scrollWidth: I } = _, { headerWrapper: G, footerWrapper: ne } = r.refs;
    G && (G.scrollLeft = D), ne && (ne.scrollLeft = D);
    const he = I - U - 1;
    D >= he ? $("is-scrolling-right") : $(D === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, z = () => {
    r.refs.scrollBarRef && (r.refs.scrollBarRef.wrapRef && hn(r.refs.scrollBarRef.wrapRef, "scroll", R, {
      passive: true
    }), e.fit ? Nn(r.vnode.el, V) : hn(window, "resize", V), Nn(r.refs.bodyWrapper, () => {
      var _, D;
      V(), (D = (_ = r.refs) == null ? void 0 : _.scrollBarRef) == null || D.update();
    }));
  }, V = () => {
    var _, D, U, I;
    const G = r.vnode.el;
    if (!r.$ready || !G)
      return;
    let ne = false;
    const {
      width: he,
      height: ge,
      headerHeight: se
    } = u.value, le = p.value = G.offsetWidth;
    he !== le && (ne = true);
    const ue = G.offsetHeight;
    (e.height || g.value) && ge !== ue && (ne = true);
    const ve = e.tableLayout === "fixed" ? r.refs.headerWrapper : (_ = r.refs.tableHeaderRef) == null ? void 0 : _.$el;
    e.showHeader && (ve == null ? void 0 : ve.offsetHeight) !== se && (ne = true), m.value = ((D = r.refs.tableWrapper) == null ? void 0 : D.scrollHeight) || 0, v.value = (ve == null ? void 0 : ve.scrollHeight) || 0, d.value = ((U = r.refs.footerWrapper) == null ? void 0 : U.offsetHeight) || 0, y.value = ((I = r.refs.appendWrapper) == null ? void 0 : I.offsetHeight) || 0, h3.value = m.value - v.value - d.value - y.value, ne && (u.value = {
      width: le,
      height: ue,
      headerHeight: e.showHeader && (ve == null ? void 0 : ve.offsetHeight) || 0
    }, k());
  }, F = Ut(), N = computed(() => {
    const { bodyWidth: _, scrollY: D, gutterWidth: U } = t;
    return _.value ? `${_.value - (D.value ? U : 0)}px` : "";
  }), B = computed(() => e.maxHeight ? "fixed" : e.tableLayout), W = computed(() => {
    if (e.data && e.data.length)
      return null;
    let _ = "100%";
    e.height && h3.value && (_ = `${h3.value}px`);
    const D = p.value;
    return {
      width: D ? `${D}px` : "",
      height: _
    };
  }), q = computed(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), M = computed(() => e.height ? {
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
    handleFixedMousewheel: (_, D) => {
      const U = r.refs.bodyWrapper;
      if (Math.abs(D.spinY) > 0) {
        const I = U.scrollTop;
        D.pixelY < 0 && I !== 0 && _.preventDefault(), D.pixelY > 0 && U.scrollHeight - U.clientHeight > I && _.preventDefault(), U.scrollTop += Math.ceil(D.pixelY / 5);
      } else
        U.scrollLeft += Math.ceil(D.pixelX / 5);
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
  const t = ref(), n = () => {
    const a = e.vnode.el.querySelector(".hidden-columns"), o = { childList: true, subtree: true }, l = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      l.forEach((s) => s());
    }), t.value.observe(a, o);
  };
  onMounted(() => {
    n();
  }), onUnmounted(() => {
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
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
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
    default: true
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
    default: false
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object]
};
var gE = () => {
  const e = ref(), t = (o, l) => {
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
var bE = 1;
var yE = defineComponent({
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
    const { t } = ot(), n = we("table"), r = getCurrentInstance();
    provide(sn, r);
    const a = j_(r, e);
    r.store = a;
    const o = new q_({
      store: r.store,
      table: r,
      fit: e.fit,
      showHeader: e.showHeader
    });
    r.layout = o;
    const l = computed(() => (a.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: u,
      toggleRowSelection: c,
      clearSelection: f,
      clearFilter: p,
      toggleAllSelection: m,
      toggleRowExpansion: h3,
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
    } = vE(e, o, a, r), { scrollBarRef: H, scrollTo: _, setScrollLeft: D, setScrollTop: U } = gE(), I = Rn(F, 50), G = `${n.namespace.value}-table_${bE++}`;
    r.tableId = G, r.state = {
      isGroup: g,
      resizeState: V,
      doLayout: F,
      debouncedUpdateLayout: I
    };
    const ne = computed(() => e.sumText || t("el.table.sumText")), he = computed(() => e.emptyText || t("el.table.emptyText"));
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
      toggleRowExpansion: h3,
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
      setScrollLeft: D,
      setScrollTop: U
    };
  }
});
var wE = ["data-prefix"];
var CE = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function SE(e, t, n, r, a, o) {
  const l = resolveComponent("hColgroup"), s = resolveComponent("table-header"), u = resolveComponent("table-body"), c = resolveComponent("el-scrollbar"), f = resolveComponent("table-footer"), p = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
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
    style: normalizeStyle(e.style),
    "data-prefix": e.ns.namespace.value,
    onMouseleave: t[0] || (t[0] = (...m) => e.handleMouseLeave && e.handleMouseLeave(...m))
  }, [
    createBaseVNode("div", {
      class: normalizeClass(e.ns.e("inner-wrapper")),
      style: normalizeStyle(e.tableInnerStyle)
    }, [
      createBaseVNode("div", CE, [
        renderSlot(e.$slots, "default")
      ], 512),
      e.showHeader && e.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        ref: "headerWrapper",
        class: normalizeClass(e.ns.e("header-wrapper"))
      }, [
        createBaseVNode("table", {
          ref: "tableHeader",
          class: normalizeClass(e.ns.e("header")),
          style: normalizeStyle(e.tableBodyStyles),
          border: "0",
          cellpadding: "0",
          cellspacing: "0"
        }, [
          createVNode(l, {
            columns: e.store.states.columns.value,
            "table-layout": e.tableLayout
          }, null, 8, ["columns", "table-layout"]),
          createVNode(s, {
            ref: "tableHeaderRef",
            border: e.border,
            "default-sort": e.defaultSort,
            store: e.store,
            onSetDragVisible: e.setDragVisible
          }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])
        ], 6)
      ], 2)), [
        [p, e.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      createBaseVNode("div", {
        ref: "bodyWrapper",
        class: normalizeClass(e.ns.e("body-wrapper"))
      }, [
        createVNode(c, {
          ref: "scrollBarRef",
          "view-style": e.scrollbarViewStyle,
          "wrap-style": e.scrollbarStyle,
          always: e.scrollbarAlwaysOn
        }, {
          default: withCtx(() => [
            createBaseVNode("table", {
              ref: "tableBody",
              class: normalizeClass(e.ns.e("body")),
              cellspacing: "0",
              cellpadding: "0",
              border: "0",
              style: normalizeStyle({
                width: e.bodyWidth,
                tableLayout: e.tableLayout
              })
            }, [
              createVNode(l, {
                columns: e.store.states.columns.value,
                "table-layout": e.tableLayout
              }, null, 8, ["columns", "table-layout"]),
              e.showHeader && e.tableLayout === "auto" ? (openBlock(), createBlock(s, {
                key: 0,
                ref: "tableHeaderRef",
                border: e.border,
                "default-sort": e.defaultSort,
                store: e.store,
                onSetDragVisible: e.setDragVisible
              }, null, 8, ["border", "default-sort", "store", "onSetDragVisible"])) : createCommentVNode("v-if", true),
              createVNode(u, {
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
            e.isEmpty ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref: "emptyBlock",
              style: normalizeStyle(e.emptyBlockStyle),
              class: normalizeClass(e.ns.e("empty-block"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(e.ns.e("empty-text"))
              }, [
                renderSlot(e.$slots, "empty", {}, () => [
                  createTextVNode(toDisplayString(e.computedEmptyText), 1)
                ])
              ], 2)
            ], 6)) : createCommentVNode("v-if", true),
            e.$slots.append ? (openBlock(), createElementBlock("div", {
              key: 1,
              ref: "appendWrapper",
              class: normalizeClass(e.ns.e("append-wrapper"))
            }, [
              renderSlot(e.$slots, "append")
            ], 2)) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["view-style", "wrap-style", "always"])
      ], 2),
      e.showSummary ? withDirectives((openBlock(), createElementBlock("div", {
        key: 1,
        ref: "footerWrapper",
        class: normalizeClass(e.ns.e("footer-wrapper"))
      }, [
        createVNode(f, {
          border: e.border,
          "default-sort": e.defaultSort,
          store: e.store,
          style: normalizeStyle(e.tableBodyStyles),
          "sum-text": e.computedSumText,
          "summary-method": e.summaryMethod
        }, null, 8, ["border", "default-sort", "store", "style", "sum-text", "summary-method"])
      ], 2)), [
        [vShow, !e.isEmpty],
        [p, e.handleHeaderFooterMousewheel]
      ]) : createCommentVNode("v-if", true),
      e.border || e.isGroup ? (openBlock(), createElementBlock("div", {
        key: 2,
        class: normalizeClass(e.ns.e("border-left-patch"))
      }, null, 2)) : createCommentVNode("v-if", true)
    ], 6),
    withDirectives(createBaseVNode("div", {
      ref: "resizeProxy",
      class: normalizeClass(e.ns.e("column-resize-proxy"))
    }, null, 2), [
      [vShow, e.resizeProxyVisible]
    ])
  ], 46, wE);
}
var kE = Ae(yE, [["render", SE], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
var $E = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
var _E = {
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
};
var EE = (e) => $E[e] || "";
var TE = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return h(Zn, {
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
      return h(Zn, {
        disabled: t.selectable ? !t.selectable.call(null, e, r) : false,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (a) => a.stopPropagation(),
        modelValue: n.isSelected(e)
      });
    },
    sortable: false,
    resizable: false
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
      return typeof r == "number" ? n = t + r : typeof r == "function" && (n = r(t)), h("div", {}, [n]);
    },
    sortable: false
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
      return n && a.push(r.em("expand-icon", "expanded")), h("div", {
        class: a,
        onClick: function(l) {
          l.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          h(Ie, null, {
            default: () => [h(An)]
          })
        ]
      });
    },
    sortable: false,
    resizable: false
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
}, r = false) {
  const { ns: a } = n;
  if (!t)
    return r ? [
      h("span", {
        class: a.e("placeholder")
      })
    ] : null;
  const o = [], l = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && o.push(h("span", {
    class: a.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      a.e("expand-icon"),
      t.expanded ? a.em("expand-icon", "expanded") : ""
    ];
    let u = An;
    t.loading && (u = oa), o.push(h("div", {
      class: s,
      onClick: l
    }, {
      default: () => [
        h(Ie, { class: { [a.is("loading")]: t.loading } }, {
          default: () => [h(u)]
        })
      ]
    }));
  } else
    o.push(h("span", {
      class: a.e("placeholder")
    }));
  return o;
}
function qi(e, t) {
  return e.reduce((n, r) => (n[r] = r, n), t);
}
function xE(e, t) {
  const n = getCurrentInstance();
  return {
    registerComplexWatchers: () => {
      const o = ["fixed"], l = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = qi(o, l);
      Object.keys(s).forEach((u) => {
        const c = l[u];
        qn(t, c) && watch(() => t[c], (f) => {
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
        qn(t, c) && watch(() => t[c], (f) => {
          n.columnConfig.value[u] = f;
        });
      });
    }
  };
}
function ME(e, t, n) {
  const r = getCurrentInstance(), a = ref(""), o = ref(false), l = ref(), s = ref(), u = we("table");
  watchEffect(() => {
    l.value = e.align ? `is-${e.align}` : null, l.value;
  }), watchEffect(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : l.value, s.value;
  });
  const c = computed(() => {
    let b = r.vnode.vParent || r.parent;
    for (; b && !b.tableId && !b.columnId; )
      b = b.vnode.vParent || b.parent;
    return b;
  }), f = computed(() => {
    const { store: b } = r.parent;
    if (!b)
      return false;
    const { treeData: k } = b.states, S = k.value;
    return S && Object.keys(S).length > 0;
  }), p = ref(Zl(e.width)), m = ref(yd(e.minWidth)), h3 = (b) => (p.value && (b.width = p.value), m.value && (b.minWidth = m.value), !p.value && m.value && (b.width = void 0), b.minWidth || (b.minWidth = 80), b.realWidth = Number(b.width === void 0 ? b.minWidth : b.width), b), v = (b) => {
    const k = b.type, S = TE[k] || {};
    Object.keys(S).forEach((T) => {
      const R = S[T];
      T !== "className" && R !== void 0 && (b[T] = R);
    });
    const $ = EE(k);
    if ($) {
      const T = `${unref(u.namespace)}-${$}`;
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
    setColumnWidth: h3,
    setColumnForcedProps: v,
    setColumnRenders: (b) => {
      e.renderHeader ? nt("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : b.type !== "selection" && (b.renderHeader = (S) => {
        r.columnConfig.value.label;
        const $ = t.header;
        return $ ? $(S) : b.label;
      });
      let k = b.renderCell;
      return b.type === "expand" ? (b.renderCell = (S) => h("div", {
        class: "cell"
      }, [k(S)]), n.value.renderExpanded = (S) => t.default ? t.default(S) : t.default) : (k = k || OE, b.renderCell = (S) => {
        let $ = null;
        if (t.default) {
          const N = t.default(S);
          $ = N.some((B) => B.type !== Comment) ? N : k(S);
        } else
          $ = k(S);
        const { columns: T } = n.value.store.states, R = T.value.findIndex((N) => N.type === "default"), z = f.value && S.cellIndex === R, V = PE(S, z), F = {
          class: "cell",
          style: {}
        };
        return b.showOverflowTooltip && (F.class = `${F.class} ${unref(u.namespace)}-tooltip`, F.style = {
          width: `${(S.column.realWidth || Number(S.column.width)) - 1}px`
        }), d($), h("div", F, [V, $]);
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
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
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
    default: true
  },
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => ["ascending", "descending", null],
    validator: (e) => e.every((t) => ["ascending", "descending", null].includes(t))
  }
};
var NE = 1;
var Ed = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox: Zn
  },
  props: AE,
  setup(e, { slots: t }) {
    const n = getCurrentInstance(), r = ref({}), a = computed(() => {
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
      setColumnRenders: h3,
      getPropsData: v,
      getColumnElIndex: d,
      realAlign: y,
      updateColumnOrder: w
    } = ME(e, t, a), C = f.value;
    s.value = `${C.tableId || C.columnId}_column_${NE++}`, onBeforeMount(() => {
      u.value = a.value !== C;
      const g = e.type || "default", b = e.sortable === "" ? true : e.sortable, k = Un(e.showOverflowTooltip) ? C.props.showOverflowTooltip : e.showOverflowTooltip, S = {
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
        isColumnGroup: false,
        isSubColumn: false,
        filterOpened: false,
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
      V = N_(S, V), V = I_(h3, p, m)(V), r.value = V, o(), l();
    }), onMounted(() => {
      var g;
      const b = f.value, k = u.value ? b.vnode.el.children : (g = b.refs.hiddenColumns) == null ? void 0 : g.children, S = () => d(k || [], n.vnode.el);
      r.value.getColumnIndex = S, S() > -1 && a.value.store.commit("insertColumn", r.value, u.value ? b.columnConfig.value : null, w);
    }), onBeforeUnmount(() => {
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
          ((n = l.type) == null ? void 0 : n.name) === "ElTableColumn" || l.shapeFlag & 2 ? a.push(l) : l.type === Fragment && Array.isArray(l.children) && l.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !kt(s == null ? void 0 : s.children) && a.push(s);
          });
      return h("div", a);
    } catch {
      return h("div", []);
    }
  }
});
var RE = Ht(kE, {
  TableColumn: Ed
});
var Td = kn(Ed);
var IE = {
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
    default: false
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
    default: false
  },
  buttons: {
    type: Array,
    default: []
  }
};
var LE = {
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
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
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
    default: true
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
};
var Yi = (e, t = "Y/M/D h:m:s") => {
  const n = (l) => (l = l.toString(), l[1] ? l : `0${l}`), r = ["Y", "M", "D", "h", "m", "s"], a = [], o = new Date(Number(e));
  a.push(o.getFullYear()), a.push(n(o.getMonth() + 1)), a.push(n(o.getDate())), a.push(n(o.getHours())), a.push(n(o.getMinutes())), a.push(n(o.getSeconds()));
  for (const l in a)
    t = t.replace(r[l], a[l]);
  return t;
};
var DE = (e) => {
  if (!e)
    return "0";
  const t = /\d{1,3}(?=(\d{3})+(\.|$))/g;
  e = String(Math.round(+e * Math.pow(10, 2)));
  let n = e.substr(0, e.length - 2).replace(t, "$&,"), r = e.substr(e.length - 2);
  return `${n || 0}.${r}`;
};
var FE = (e) => {
  const t = 9999999999999e-2, n = "零", r = "壹", a = "贰", o = "叁", l = "肆", s = "伍", u = "陆", c = "柒", f = "捌", p = "玖", m = "拾", h3 = "佰", v = "仟", d = "万", y = "亿", w = "", C = "元", g = "角", b = "分", k = "整";
  let S, $, T, R = "", z, V, F, N, B, W, q;
  const M = ["", m, h3, v], H = ["", d, y], _ = [g, b], D = [
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
      F = S.length - V - 1, N = S.substr(V, 1), W = F / 4, q = F % 4, +N == 0 ? z += 1 : (z > 0 && (T += D[0]), z = 0, T += D[Number(N)] + M[q]), q === 0 && z < 4 && (T += H[W]);
    T += C;
  }
  if ($ !== "")
    for (V = 0; V < $.length; V += 1)
      N = $.substr(V, 1), B = $.substr(-1, 1), +N == 0 ? +B == 0 ? T += "" : T += D[Number(N)] : T += D[Number(N)] + _[V];
  return T === "" && (T = n + C), $ === "" && (T += k), T = w + T, T;
};
var Ui = (e, t) => {
  let n = "";
  return t.thousands && (n = DE(e)), t.number && (n = (+e).toFixed(2)), t.chinaPrice && (n = e && FE(e)), n;
};
var BE = defineComponent({
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
              thousands: true
            });
            break;
          case "priceChinese":
            f = Ui(a[s], {
              chinaPrice: true
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
      return c.length && (f = c.map((p) => createVNode(gn, mergeProps(p, {
        onClick: (m) => {
          m.stopPropagation(), p.click && p.click(a);
        }
      }), {
        default: () => [p.content]
      }))), f;
    };
    return () => createVNode(Fragment, null, [r(t, n)]);
  }
});
var zE = defineComponent({
  __name: "TableColumn",
  props: LE,
  setup(e) {
    const t = e;
    return console.log(t, "ss"), (n, r) => {
      const a = Td;
      return openBlock(), createBlock(a, normalizeProps(guardReactiveProps(t)), createSlots({
        default: withCtx((o) => [
          t.slotName ? renderSlot(n.$slots, "default", normalizeProps(mergeProps({ key: 0 }, o))) : createCommentVNode("", true),
          !t.slotName && t.type === "default" && !t.formatter ? (openBlock(), createBlock(unref(BE), {
            key: 1,
            data: o == null ? void 0 : o.row,
            column: t
          }, null, 8, ["data", "column"])) : createCommentVNode("", true)
        ]),
        _: 2
      }, [
        t.header ? {
          name: "header",
          fn: withCtx((o) => [
            renderSlot(n.$slots, "header", normalizeProps(guardReactiveProps(o)))
          ]),
          key: "0"
        } : void 0
      ]), 1040);
    };
  }
});
var VE = "100px";
var HE = "1800px";
var WE = {
  minwidth: VE,
  maxwidth: HE
};
var jE = defineComponent({
  props: ["filter", "searchSize", "labelPosition", "searchData"],
  emits: ["getParams", "resetFn"],
  setup(e, {
    emit: t,
    expose: n,
    slots: r
  }) {
    const a = reactive({}), {
      filter: o,
      searchSize: l,
      labelPosition: s
    } = e, u = ref(), c = ref(false), f = ref("展开"), p = (g, b) => {
      g > +WE.maxwidth.replace(/[^\d]/gi, "") ? c.value = b > 4 : c.value = b > 3;
    };
    onMounted(() => {
      u.value = document.body.clientWidth, p(u.value, m.value.length), window.onresize = () => (() => {
        u.value = document.body.clientWidth, p(u.value, m.value.length);
      })();
    });
    const m = ref([]);
    watchEffect(() => {
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
    const h3 = reactive({}), v = () => {
      Object.keys(a).forEach((g) => {
        /,/.test(g) ? g.split(",").forEach((b, k) => {
          h3[b] = a[g] ? a[g][k] : null;
        }) : h3[g] = a[g] || null;
      }), t("getParams", {
        ...h3,
        ...unref(e.searchData)
      });
    }, d = ref(), y = ref(), w = () => {
      Object.keys(a).forEach((g) => {
        a[g] = "";
      }), Object.keys(h3).forEach((g) => {
        h3[g] = "";
      }), y.value.resetFields(), t("resetFn");
    }, C = () => {
      f.value = f.value === "展开" ? "收起" : "展开";
    };
    return n({
      formData: a,
      newFormData: h3,
      searchForm: d,
      searchFormRef: y,
      isShow: c,
      showName: f,
      changeName: C,
      slots: r
    }), () => createVNode(Fragment, null, [createVNode("div", {
      class: "chris-table-search"
    }, [createVNode(_w, {
      model: a,
      ref: y,
      "label-position": s,
      class: [{
        active: f.value === "展开",
        "chris-table-search-form": true
      }]
    }, {
      default: () => [Array.isArray(m.value) && m.value.map((g) => {
        let b = null;
        switch (g.type) {
          case "input":
            b = createVNode(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(Ft, {
                class: "item-content",
                clearable: true,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                size: l,
                placeholder: `请输入${g.placeholder}`
              }, null)]
            });
            break;
          case "select":
            b = createVNode(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(md, {
                class: "item-content select",
                clearable: true,
                modelValue: a[g.prop],
                "onUpdate:modelValue": (k) => a[g.prop] = k,
                placeholder: `请选择${g.placeholder}`,
                size: l
              }, {
                default: () => [Array.isArray(unref(g.options)) && unref(g.options).map((k, S) => createVNode(gd, {
                  key: S,
                  label: k.label,
                  value: k.value
                }, null))]
              })]
            });
            break;
          case "cascader":
            b = createVNode(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(ck, {
                class: "item-content",
                clearable: true,
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
            b = createVNode(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(ka, {
                class: "item-content",
                clearable: true,
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
            b = createVNode(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(ka, {
                class: "item-content",
                clearable: true,
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
            b = createVNode(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(ka, {
                class: "item-content",
                clearable: true,
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
            b = createVNode(Tn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(ka, {
                class: "item-content",
                clearable: true,
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
            b = createVNode(Tn, {
              label: `${g.label}:`,
              class: "el-form-item-min"
            }, {
              default: () => [createVNode(Ft, {
                class: "item-content",
                clearable: true,
                size: l,
                modelValue: a[g.prop[0]],
                "onUpdate:modelValue": (k) => a[g.prop[0]] = k,
                placeholder: `${Array.isArray(g.placeholder) ? g.placeholder[0] : "最小值"}`
              }, null), createVNode("span", null, [createTextVNode("-")]), createVNode(Ft, {
                class: "item-content",
                clearable: true,
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
    }), createVNode("div", {
      class: "chris-table-search-btns"
    }, [createVNode(gn, {
      type: "primary",
      onClick: v
    }, {
      default: () => [createTextVNode("查询")]
    }), createVNode(gn, {
      onClick: w
    }, {
      default: () => [createTextVNode("重置")]
    }), c.value && createVNode(gn, {
      type: "success",
      onClick: C
    }, {
      default: () => [f.value]
    })])])]);
  }
});
var KE = defineComponent({
  name: "pagination",
  inheritAttrs: true,
  emits: ["getPage"],
  props: ["total", "layout"],
  setup(e, {
    emit: t
  }) {
    ref(0);
    const n = ref(1), r = ref(10);
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
    return createVNode("div", {
      class: "paginaton"
    }, [createVNode(E_, {
      "onUpdate:current-page": this.handleCurrentChange,
      "onUpdate:page-size": this.handleSizeChange,
      currentPage: this.currentPage,
      pageSizes: [5, 10, 20, 60],
      pageSize: this.pageSize,
      layout: this.props.layout,
      total: this.total
    }, null)]);
  }
});
var qE = { class: "chris-buttons" };
var YE = defineComponent({
  __name: "Buttons",
  props: { buttons: Array },
  setup(e) {
    const n = e.buttons;
    return (r, a) => (openBlock(), createElementBlock("div", qE, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(n), (o, l) => (openBlock(), createBlock(unref(gn), mergeProps({ type: "primary" }, o, { key: l }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString(o.content), 1)
        ]),
        _: 2
      }, 1040))), 128))
    ]));
  }
});
var Od = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
};
var UE = Od(YE, [["__scopeId", "data-v-39458ff7"]]);
var GE = {
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
      hide: false
    }
  },
  buttons: Array,
  pagination: {
    type: Boolean,
    default: true
  },
  searchData: Object,
  layout: {
    type: String,
    default: "prev, pager, next, jumper, ->, total"
  }
};
var XE = {
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
    default: true
  },
  stripe: Boolean,
  border: {
    type: Boolean,
    default: true
  },
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
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
    default: true
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
    default: false
  },
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object],
  ...GE
};
var Gi = {
  select: (e, t) => true,
  selectAll: (e) => true,
  selectionChange: (e) => true,
  cellMouseEnter: (e, t, n, r) => true,
  cellMouseLeave: (e, t, n, r) => true,
  cellContextmenu: (e, t, n, r) => true,
  cellClick: (e, t, n, r) => true,
  cellDblclick: (e, t, n, r) => true,
  rowClick: (e, t, n) => true,
  rowContextmenu: (e, t, n) => true,
  rowDblclick: (e, t, n) => true,
  headerClick: (e, t) => true,
  headerContextmenu: (e, t) => true,
  sortChange: (e) => true,
  filterChange: (e) => true,
  currentChange: (e, t) => true,
  headerDragend: (e, t, n, r) => true,
  expandChange: (e, t) => true,
  query: (e) => true
};
var Xi = (e, t) => (t.split(".").forEach((r) => {
  e = e[r];
}), e);
var ZE = {
  name: "TableList"
};
var JE = defineComponent({
  ...ZE,
  props: XE,
  emits: { ...Gi, resetFn: () => {
  } },
  setup(e, { expose: t, emit: n }) {
    var T;
    const r = e, { columns: a } = toRefs(r), o = ref();
    o.value = (T = a == null ? void 0 : a.value) == null ? void 0 : T.filter((R) => !R.hide);
    const l = ref(), s = computed(() => {
      const R = {};
      for (const z of Object.keys(Gi))
        R[z] = (...V) => {
          n(z, ...V);
        };
      return R;
    }), { usePageNum: u, usePageSize: c } = {
      usePageNum: r.pageNum || "pageNum",
      usePageSize: r.pageSize || "pageSize"
    }, f = ref(1), p = ref(10), m = ref(), h3 = ref(0);
    let v = r.path || "data.rows", d = r.toTalPath || "data.total";
    m.value = r.data;
    const y = async (R) => {
      const z = {
        ...R,
        [u]: f.value,
        [c]: p.value
      }, V = await r.request(z);
      m.value = Xi(V, v), h3.value = Xi(V, d), r.parseData && (m.value = r.parseData(m.value));
    }, w = ref([]);
    a.value.filter((R) => !R.hide).forEach((R) => {
      typeof R.filter == "string" ? w.value.push(unref(R)) : typeof R.filter == "object" && !R.filter.hide && w.value.push(unref(R));
    });
    const C = ref(), g = (R) => {
      C.value.currentPage = 1, f.value = 1, y(R);
    }, b = async (R) => {
      f.value = R.currentPage.value, p.value = R.pageSize.value, y({ ...l.value.newFormData });
    }, k = (R) => R + 1 + (f.value - 1) * p.value;
    onMounted(() => {
      r.request && y(l.value.formData);
    });
    const S = ref(), $ = () => {
      n("resetFn");
    };
    return t({
      tableRef: S,
      refresh: g,
      params: l
    }), (R, z) => {
      const V = Td;
      return openBlock(), createElementBlock(Fragment, null, [
        renderSlot(R.$slots, "topheader", {}, void 0, true),
        createVNode(unref(jE), {
          ref_key: "searchRef",
          ref: l,
          filter: w.value,
          searchSize: r.searchSize,
          labelPosition: r.labelPosition,
          searchData: r.searchData,
          onGetParams: g,
          onResetFn: $
        }, {
          search: withCtx(() => [
            renderSlot(R.$slots, "search", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["filter", "searchSize", "labelPosition", "searchData"]),
        renderSlot(R.$slots, "centerheader", {}, void 0, true),
        createVNode(UE, {
          buttons: r.buttons
        }, null, 8, ["buttons"]),
        createVNode(unref(RE), mergeProps(r, {
          data: m.value,
          style: { width: "100%" }
        }, toHandlers(s.value), {
          ref_key: "tableRef",
          ref: S,
          class: "chris-table"
        }), {
          empty: withCtx(() => [
            renderSlot(R.$slots, "empty", {}, void 0, true)
          ]),
          append: withCtx(() => [
            renderSlot(R.$slots, "append", {}, void 0, true)
          ]),
          default: withCtx(() => [
            (typeof r.index == "boolean" ? r.index : !r.index.hide) ? (openBlock(), createBlock(V, {
              key: 0,
              type: "index",
              index: k,
              label: typeof r.index == "object" && r.index.label,
              width: typeof r.index == "object" && r.index.width
            }, null, 8, ["label", "width"])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (F, N) => (openBlock(), createBlock(zE, mergeProps({ key: N }, F), createSlots({ _: 2 }, [
              F.header ? {
                name: "header",
                fn: withCtx((B) => [
                  renderSlot(R.$slots, "header", normalizeProps(guardReactiveProps(B)), void 0, true)
                ]),
                key: "0"
              } : void 0,
              F.slotName ? {
                name: "default",
                fn: withCtx((B) => [
                  renderSlot(R.$slots, F.slotName, normalizeProps(guardReactiveProps(B)), void 0, true)
                ]),
                key: "1"
              } : void 0
            ]), 1040))), 128))
          ]),
          _: 3
        }, 16, ["data"]),
        withDirectives(createVNode(unref(KE), {
          total: h3.value,
          onGetPage: b,
          currentPage: f.value,
          pageSize: p.value,
          ref_key: "pagination",
          ref: C,
          layout: r.layout
        }, null, 8, ["total", "currentPage", "pageSize", "layout"]), [
          [vShow, h3.value > 0 && r.pagination]
        ]),
        renderSlot(R.$slots, "footer", {}, void 0, true)
      ], 64);
    };
  }
});
var QE = Od(JE, [["__scopeId", "data-v-07a38ab7"]]);
var rT = (e) => e;
var eT = [QE];
var aT = {
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
/*! Bundled license information:

chriszj/chris-ui.mjs:
  (*! Element Plus Icons Vue v2.1.0 *)
  (**
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
  *)
  (*!
   * escape-html
   * Copyright(c) 2012-2013 TJ Holowaychuk
   * Copyright(c) 2015 Andreas Lubbe
   * Copyright(c) 2015 Tiancheng "Timothy" Gu
   * MIT Licensed
   *)
*/
//# sourceMappingURL=chriszj_chris-ui__mjs.js.map
