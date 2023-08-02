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
  inject,
  isRef,
  isVNode,
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
} from "./chunk-IYO332YY.js";
import "./chunk-UXIASGQL.js";

// node_modules/chriszj/chris-ui.mjs
var pu = (e) => !e.getAttribute("aria-owns");
var vu = (e, t, n) => {
  const { parentNode: a } = e;
  if (!a)
    return null;
  const r = a.querySelectorAll(n), o = Array.prototype.indexOf.call(r, e);
  return r[o + t] || null;
};
var Mr = (e) => {
  e && (e.focus(), !pu(e) && e.click());
};
var bn = (e, t, { checkForDefaultPrevented: n = true } = {}) => (r) => {
  const o = e == null ? void 0 : e(r);
  if (n === false || !o)
    return t == null ? void 0 : t(r);
};
var ef = Object.defineProperty;
var tf = Object.defineProperties;
var nf = Object.getOwnPropertyDescriptors;
var cs = Object.getOwnPropertySymbols;
var af = Object.prototype.hasOwnProperty;
var rf = Object.prototype.propertyIsEnumerable;
var ds = (e, t, n) => t in e ? ef(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var of = (e, t) => {
  for (var n in t || (t = {}))
    af.call(t, n) && ds(e, n, t[n]);
  if (cs)
    for (var n of cs(t))
      rf.call(t, n) && ds(e, n, t[n]);
  return e;
};
var lf = (e, t) => tf(e, nf(t));
function fs(e, t) {
  var n;
  const a = shallowRef();
  return watchEffect(() => {
    a.value = e();
  }, lf(of({}, t), {
    flush: (n = t == null ? void 0 : t.flush) != null ? n : "sync"
  })), readonly(a);
}
var ps;
var at = typeof window < "u";
var sf = (e) => typeof e == "string";
var Kr = () => {
};
var hu = at && ((ps = window == null ? void 0 : window.navigator) == null ? void 0 : ps.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function va(e) {
  return typeof e == "function" ? e() : unref(e);
}
function uf(e, t) {
  function n(...a) {
    return new Promise((r, o) => {
      Promise.resolve(e(() => t.apply(this, a), { fn: t, thisArg: this, args: a })).then(r).catch(o);
    });
  }
  return n;
}
function cf(e, t = {}) {
  let n, a, r = Kr;
  const o = (s) => {
    clearTimeout(s), r(), r = Kr;
  };
  return (s) => {
    const u = va(e), c = va(t.maxWait);
    return n && o(n), u <= 0 || c !== void 0 && c <= 0 ? (a && (o(a), a = null), Promise.resolve(s())) : new Promise((f, p) => {
      r = t.rejectOnCancel ? p : f, c && !a && (a = setTimeout(() => {
        n && o(n), a = null, f(s());
      }, c)), n = setTimeout(() => {
        a && o(a), a = null, f(s());
      }, u);
    });
  };
}
function df(e) {
  return e;
}
function kl(e) {
  return getCurrentScope() ? (onScopeDispose(e), true) : false;
}
function ff(e, t = 200, n = {}) {
  return uf(cf(t, n), e);
}
function pf(e, t = 200, n = {}) {
  const a = ref(e.value), r = ff(() => {
    a.value = e.value;
  }, t, n);
  return watch(e, () => r()), a;
}
function vf(e, t = true) {
  getCurrentInstance() ? onMounted(e) : t ? e() : nextTick(e);
}
function yn(e) {
  var t;
  const n = va(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
var rr = at ? window : void 0;
var hf = at ? window.document : void 0;
function jt(...e) {
  let t, n, a, r;
  if (sf(e[0]) || Array.isArray(e[0]) ? ([n, a, r] = e, t = rr) : [t, n, a, r] = e, !t)
    return Kr;
  Array.isArray(n) || (n = [n]), Array.isArray(a) || (a = [a]);
  const o = [], l = () => {
    o.forEach((f) => f()), o.length = 0;
  }, s = (f, p, m, v) => (f.addEventListener(p, m, v), () => f.removeEventListener(p, m, v)), u = watch(() => [yn(t), va(r)], ([f, p]) => {
    l(), f && o.push(...n.flatMap((m) => a.map((v) => s(f, m, v, p))));
  }, { immediate: true, flush: "post" }), c = () => {
    u(), l();
  };
  return kl(c), c;
}
var vs = false;
function mu(e, t, n = {}) {
  const { window: a = rr, ignore: r = [], capture: o = true, detectIframe: l = false } = n;
  if (!a)
    return;
  hu && !vs && (vs = true, Array.from(a.document.body.children).forEach((m) => m.addEventListener("click", Kr)));
  let s = true;
  const u = (m) => r.some((v) => {
    if (typeof v == "string")
      return Array.from(a.document.querySelectorAll(v)).some((h3) => h3 === m.target || m.composedPath().includes(h3));
    {
      const h3 = yn(v);
      return h3 && (m.target === h3 || m.composedPath().includes(h3));
    }
  }), f = [
    jt(a, "click", (m) => {
      const v = yn(e);
      if (!(!v || v === m.target || m.composedPath().includes(v))) {
        if (m.detail === 0 && (s = !u(m)), !s) {
          s = true;
          return;
        }
        t(m);
      }
    }, { passive: true, capture: o }),
    jt(a, "pointerdown", (m) => {
      const v = yn(e);
      v && (s = !m.composedPath().includes(v) && !u(m));
    }, { passive: true }),
    l && jt(a, "blur", (m) => {
      var v;
      const h3 = yn(e);
      ((v = a.document.activeElement) == null ? void 0 : v.tagName) === "IFRAME" && !(h3 != null && h3.contains(a.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => f.forEach((m) => m());
}
function mf(e, t = false) {
  const n = ref(), a = () => n.value = !!e();
  return a(), vf(a, t), n;
}
var hs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var ms = "__vueuse_ssr_handlers__";
hs[ms] = hs[ms] || {};
function gf(e, t, { window: n = rr, initialValue: a = "" } = {}) {
  const r = ref(a), o = computed(() => {
    var l;
    return yn(t) || ((l = n == null ? void 0 : n.document) == null ? void 0 : l.documentElement);
  });
  return watch([o, () => va(e)], ([l, s]) => {
    var u;
    if (l && n) {
      const c = (u = n.getComputedStyle(l).getPropertyValue(s)) == null ? void 0 : u.trim();
      r.value = c || a;
    }
  }, { immediate: true }), watch(r, (l) => {
    var s;
    (s = o.value) != null && s.style && o.value.style.setProperty(va(e), l);
  }), r;
}
function bf({ document: e = hf } = {}) {
  if (!e)
    return ref("visible");
  const t = ref(e.visibilityState);
  return jt(e, "visibilitychange", () => {
    t.value = e.visibilityState;
  }), t;
}
var gs = Object.getOwnPropertySymbols;
var yf = Object.prototype.hasOwnProperty;
var wf = Object.prototype.propertyIsEnumerable;
var Cf = (e, t) => {
  var n = {};
  for (var a in e)
    yf.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && gs)
    for (var a of gs(e))
      t.indexOf(a) < 0 && wf.call(e, a) && (n[a] = e[a]);
  return n;
};
function ln(e, t, n = {}) {
  const a = n, { window: r = rr } = a, o = Cf(a, ["window"]);
  let l;
  const s = mf(() => r && "ResizeObserver" in r), u = () => {
    l && (l.disconnect(), l = void 0);
  }, c = watch(() => yn(e), (p) => {
    u(), s.value && r && p && (l = new ResizeObserver(t), l.observe(p, o));
  }, { immediate: true, flush: "post" }), f = () => {
    u(), c();
  };
  return kl(f), {
    isSupported: s,
    stop: f
  };
}
var bs;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(bs || (bs = {}));
var Sf = Object.defineProperty;
var ys = Object.getOwnPropertySymbols;
var kf = Object.prototype.hasOwnProperty;
var _f = Object.prototype.propertyIsEnumerable;
var ws = (e, t, n) => t in e ? Sf(e, t, { enumerable: true, configurable: true, writable: true, value: n }) : e[t] = n;
var $f = (e, t) => {
  for (var n in t || (t = {}))
    kf.call(t, n) && ws(e, n, t[n]);
  if (ys)
    for (var n of ys(t))
      _f.call(t, n) && ws(e, n, t[n]);
  return e;
};
var Ef = {
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
$f({
  linear: df
}, Ef);
function Tf({ window: e = rr } = {}) {
  if (!e)
    return ref(false);
  const t = ref(e.document.hasFocus());
  return jt(e, "blur", () => {
    t.value = false;
  }), jt(e, "focus", () => {
    t.value = true;
  }), t;
}
var Of = () => at && /firefox/i.test(window.navigator.userAgent);
Object.freeze({});
Object.freeze([]);
var ha = () => {
};
var Pf = Object.prototype.hasOwnProperty;
var Xn = (e, t) => Pf.call(e, t);
var Ue = Array.isArray;
var Cs = (e) => gu(e) === "[object Date]";
var ft = (e) => typeof e == "function";
var St = (e) => typeof e == "string";
var zt = (e) => e !== null && typeof e == "object";
var xf = (e) => zt(e) && ft(e.then) && ft(e.catch);
var Mf = Object.prototype.toString;
var gu = (e) => Mf.call(e);
var wo = (e) => gu(e).slice(8, -1);
var bu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
};
var Af = /-(\w)/g;
var Nf = bu((e) => e.replace(Af, (t, n) => n ? n.toUpperCase() : ""));
var Rf = bu(
  (e) => e.charAt(0).toUpperCase() + e.slice(1)
);
var Lf = typeof global == "object" && global && global.Object === Object && global;
var yu = Lf;
var Ff = typeof self == "object" && self && self.Object === Object && self;
var If = yu || Ff || Function("return this")();
var en = If;
var Df = en.Symbol;
var qt = Df;
var wu = Object.prototype;
var Bf = wu.hasOwnProperty;
var zf = wu.toString;
var Ra = qt ? qt.toStringTag : void 0;
function Vf(e) {
  var t = Bf.call(e, Ra), n = e[Ra];
  try {
    e[Ra] = void 0;
    var a = true;
  } catch {
  }
  var r = zf.call(e);
  return a && (t ? e[Ra] = n : delete e[Ra]), r;
}
var Hf = Object.prototype;
var Wf = Hf.toString;
function jf(e) {
  return Wf.call(e);
}
var Kf = "[object Null]";
var qf = "[object Undefined]";
var Ss = qt ? qt.toStringTag : void 0;
function ta(e) {
  return e == null ? e === void 0 ? qf : Kf : Ss && Ss in Object(e) ? Vf(e) : jf(e);
}
function sn(e) {
  return e != null && typeof e == "object";
}
var Yf = "[object Symbol]";
function eo(e) {
  return typeof e == "symbol" || sn(e) && ta(e) == Yf;
}
function Cu(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, r = Array(a); ++n < a; )
    r[n] = t(e[n], n, e);
  return r;
}
var Uf = Array.isArray;
var xt = Uf;
var Gf = 1 / 0;
var ks = qt ? qt.prototype : void 0;
var _s = ks ? ks.toString : void 0;
function Su(e) {
  if (typeof e == "string")
    return e;
  if (xt(e))
    return Cu(e, Su) + "";
  if (eo(e))
    return _s ? _s.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Gf ? "-0" : t;
}
var Xf = /\s/;
function Zf(e) {
  for (var t = e.length; t-- && Xf.test(e.charAt(t)); )
    ;
  return t;
}
var Jf = /^\s+/;
function Qf(e) {
  return e && e.slice(0, Zf(e) + 1).replace(Jf, "");
}
function Rt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var $s = 0 / 0;
var ep = /^[-+]0x[0-9a-f]+$/i;
var tp = /^0b[01]+$/i;
var np = /^0o[0-7]+$/i;
var ap = parseInt;
function Es(e) {
  if (typeof e == "number")
    return e;
  if (eo(e))
    return $s;
  if (Rt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Rt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Qf(e);
  var n = tp.test(e);
  return n || np.test(e) ? ap(e.slice(2), n ? 2 : 8) : ep.test(e) ? $s : +e;
}
function _l(e) {
  return e;
}
var rp = "[object AsyncFunction]";
var op = "[object Function]";
var lp = "[object GeneratorFunction]";
var sp = "[object Proxy]";
function $l(e) {
  if (!Rt(e))
    return false;
  var t = ta(e);
  return t == op || t == lp || t == rp || t == sp;
}
var ip = en["__core-js_shared__"];
var Co = ip;
var Ts = function() {
  var e = /[^.]+$/.exec(Co && Co.keys && Co.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function up(e) {
  return !!Ts && Ts in e;
}
var cp = Function.prototype;
var dp = cp.toString;
function na(e) {
  if (e != null) {
    try {
      return dp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var fp = /[\\^$.*+?()[\]{}|]/g;
var pp = /^\[object .+?Constructor\]$/;
var vp = Function.prototype;
var hp = Object.prototype;
var mp = vp.toString;
var gp = hp.hasOwnProperty;
var bp = RegExp(
  "^" + mp.call(gp).replace(fp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function yp(e) {
  if (!Rt(e) || up(e))
    return false;
  var t = $l(e) ? bp : pp;
  return t.test(na(e));
}
function wp(e, t) {
  return e == null ? void 0 : e[t];
}
function aa(e, t) {
  var n = wp(e, t);
  return yp(n) ? n : void 0;
}
var Cp = aa(en, "WeakMap");
var Bo = Cp;
var Os = Object.create;
var Sp = function() {
  function e() {
  }
  return function(t) {
    if (!Rt(t))
      return {};
    if (Os)
      return Os(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
var kp = Sp;
function _p(e, t, n) {
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
function ku(e, t) {
  var n = -1, a = e.length;
  for (t || (t = Array(a)); ++n < a; )
    t[n] = e[n];
  return t;
}
var $p = 800;
var Ep = 16;
var Tp = Date.now;
function Op(e) {
  var t = 0, n = 0;
  return function() {
    var a = Tp(), r = Ep - (a - n);
    if (n = a, r > 0) {
      if (++t >= $p)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Pp(e) {
  return function() {
    return e;
  };
}
var xp = function() {
  try {
    var e = aa(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
var qr = xp;
var Mp = qr ? function(e, t) {
  return qr(e, "toString", {
    configurable: true,
    enumerable: false,
    value: Pp(t),
    writable: true
  });
} : _l;
var Ap = Mp;
var Np = Op(Ap);
var _u = Np;
function Rp(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a && t(e[n], n, e) !== false; )
    ;
  return e;
}
var Lp = 9007199254740991;
var Fp = /^(?:0|[1-9]\d*)$/;
function to(e, t) {
  var n = typeof e;
  return t = t ?? Lp, !!t && (n == "number" || n != "symbol" && Fp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function El(e, t, n) {
  t == "__proto__" && qr ? qr(e, t, {
    configurable: true,
    enumerable: true,
    value: n,
    writable: true
  }) : e[t] = n;
}
function or(e, t) {
  return e === t || e !== e && t !== t;
}
var Ip = Object.prototype;
var Dp = Ip.hasOwnProperty;
function Tl(e, t, n) {
  var a = e[t];
  (!(Dp.call(e, t) && or(a, n)) || n === void 0 && !(t in e)) && El(e, t, n);
}
function lr(e, t, n, a) {
  var r = !n;
  n || (n = {});
  for (var o = -1, l = t.length; ++o < l; ) {
    var s = t[o], u = a ? a(n[s], e[s], s, n, e) : void 0;
    u === void 0 && (u = e[s]), r ? El(n, s, u) : Tl(n, s, u);
  }
  return n;
}
var Ps = Math.max;
function $u(e, t, n) {
  return t = Ps(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var a = arguments, r = -1, o = Ps(a.length - t, 0), l = Array(o); ++r < o; )
      l[r] = a[t + r];
    r = -1;
    for (var s = Array(t + 1); ++r < t; )
      s[r] = a[r];
    return s[t] = n(l), _p(e, this, s);
  };
}
function Bp(e, t) {
  return _u($u(e, t, _l), e + "");
}
var zp = 9007199254740991;
function Ol(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= zp;
}
function Oa(e) {
  return e != null && Ol(e.length) && !$l(e);
}
function Vp(e, t, n) {
  if (!Rt(n))
    return false;
  var a = typeof t;
  return (a == "number" ? Oa(n) && to(t, n.length) : a == "string" && t in n) ? or(n[t], e) : false;
}
function Hp(e) {
  return Bp(function(t, n) {
    var a = -1, r = n.length, o = r > 1 ? n[r - 1] : void 0, l = r > 2 ? n[2] : void 0;
    for (o = e.length > 3 && typeof o == "function" ? (r--, o) : void 0, l && Vp(n[0], n[1], l) && (o = r < 3 ? void 0 : o, r = 1), t = Object(t); ++a < r; ) {
      var s = n[a];
      s && e(t, s, a, o);
    }
    return t;
  });
}
var Wp = Object.prototype;
function Pl(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Wp;
  return e === n;
}
function jp(e, t) {
  for (var n = -1, a = Array(e); ++n < e; )
    a[n] = t(n);
  return a;
}
var Kp = "[object Arguments]";
function xs(e) {
  return sn(e) && ta(e) == Kp;
}
var Eu = Object.prototype;
var qp = Eu.hasOwnProperty;
var Yp = Eu.propertyIsEnumerable;
var Up = xs(function() {
  return arguments;
}()) ? xs : function(e) {
  return sn(e) && qp.call(e, "callee") && !Yp.call(e, "callee");
};
var ja = Up;
function Gp() {
  return false;
}
var Tu = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ms = Tu && typeof module == "object" && module && !module.nodeType && module;
var Xp = Ms && Ms.exports === Tu;
var As = Xp ? en.Buffer : void 0;
var Zp = As ? As.isBuffer : void 0;
var Jp = Zp || Gp;
var Ka = Jp;
var Qp = "[object Arguments]";
var ev = "[object Array]";
var tv = "[object Boolean]";
var nv = "[object Date]";
var av = "[object Error]";
var rv = "[object Function]";
var ov = "[object Map]";
var lv = "[object Number]";
var sv = "[object Object]";
var iv = "[object RegExp]";
var uv = "[object Set]";
var cv = "[object String]";
var dv = "[object WeakMap]";
var fv = "[object ArrayBuffer]";
var pv = "[object DataView]";
var vv = "[object Float32Array]";
var hv = "[object Float64Array]";
var mv = "[object Int8Array]";
var gv = "[object Int16Array]";
var bv = "[object Int32Array]";
var yv = "[object Uint8Array]";
var wv = "[object Uint8ClampedArray]";
var Cv = "[object Uint16Array]";
var Sv = "[object Uint32Array]";
var tt = {};
tt[vv] = tt[hv] = tt[mv] = tt[gv] = tt[bv] = tt[yv] = tt[wv] = tt[Cv] = tt[Sv] = true;
tt[Qp] = tt[ev] = tt[fv] = tt[tv] = tt[pv] = tt[nv] = tt[av] = tt[rv] = tt[ov] = tt[lv] = tt[sv] = tt[iv] = tt[uv] = tt[cv] = tt[dv] = false;
function kv(e) {
  return sn(e) && Ol(e.length) && !!tt[ta(e)];
}
function xl(e) {
  return function(t) {
    return e(t);
  };
}
var Ou = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ia = Ou && typeof module == "object" && module && !module.nodeType && module;
var _v = Ia && Ia.exports === Ou;
var So = _v && yu.process;
var $v = function() {
  try {
    var e = Ia && Ia.require && Ia.require("util").types;
    return e || So && So.binding && So.binding("util");
  } catch {
  }
}();
var ma = $v;
var Ns = ma && ma.isTypedArray;
var Ev = Ns ? xl(Ns) : kv;
var Ml = Ev;
var Tv = Object.prototype;
var Ov = Tv.hasOwnProperty;
function Pu(e, t) {
  var n = xt(e), a = !n && ja(e), r = !n && !a && Ka(e), o = !n && !a && !r && Ml(e), l = n || a || r || o, s = l ? jp(e.length, String) : [], u = s.length;
  for (var c in e)
    (t || Ov.call(e, c)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    r && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    to(c, u))) && s.push(c);
  return s;
}
function xu(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Pv = xu(Object.keys, Object);
var xv = Pv;
var Mv = Object.prototype;
var Av = Mv.hasOwnProperty;
function Nv(e) {
  if (!Pl(e))
    return xv(e);
  var t = [];
  for (var n in Object(e))
    Av.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function sr(e) {
  return Oa(e) ? Pu(e) : Nv(e);
}
function Rv(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var Lv = Object.prototype;
var Fv = Lv.hasOwnProperty;
function Iv(e) {
  if (!Rt(e))
    return Rv(e);
  var t = Pl(e), n = [];
  for (var a in e)
    a == "constructor" && (t || !Fv.call(e, a)) || n.push(a);
  return n;
}
function ir(e) {
  return Oa(e) ? Pu(e, true) : Iv(e);
}
var Dv = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Bv = /^\w*$/;
function Al(e, t) {
  if (xt(e))
    return false;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || eo(e) ? true : Bv.test(e) || !Dv.test(e) || t != null && e in Object(t);
}
var zv = aa(Object, "create");
var qa = zv;
function Vv() {
  this.__data__ = qa ? qa(null) : {}, this.size = 0;
}
function Hv(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Wv = "__lodash_hash_undefined__";
var jv = Object.prototype;
var Kv = jv.hasOwnProperty;
function qv(e) {
  var t = this.__data__;
  if (qa) {
    var n = t[e];
    return n === Wv ? void 0 : n;
  }
  return Kv.call(t, e) ? t[e] : void 0;
}
var Yv = Object.prototype;
var Uv = Yv.hasOwnProperty;
function Gv(e) {
  var t = this.__data__;
  return qa ? t[e] !== void 0 : Uv.call(t, e);
}
var Xv = "__lodash_hash_undefined__";
function Zv(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = qa && t === void 0 ? Xv : t, this;
}
function Zn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Zn.prototype.clear = Vv;
Zn.prototype.delete = Hv;
Zn.prototype.get = qv;
Zn.prototype.has = Gv;
Zn.prototype.set = Zv;
function Jv() {
  this.__data__ = [], this.size = 0;
}
function no(e, t) {
  for (var n = e.length; n--; )
    if (or(e[n][0], t))
      return n;
  return -1;
}
var Qv = Array.prototype;
var eh = Qv.splice;
function th(e) {
  var t = this.__data__, n = no(t, e);
  if (n < 0)
    return false;
  var a = t.length - 1;
  return n == a ? t.pop() : eh.call(t, n, 1), --this.size, true;
}
function nh(e) {
  var t = this.__data__, n = no(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ah(e) {
  return no(this.__data__, e) > -1;
}
function rh(e, t) {
  var n = this.__data__, a = no(n, e);
  return a < 0 ? (++this.size, n.push([e, t])) : n[a][1] = t, this;
}
function On(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
On.prototype.clear = Jv;
On.prototype.delete = th;
On.prototype.get = nh;
On.prototype.has = ah;
On.prototype.set = rh;
var oh = aa(en, "Map");
var Ya = oh;
function lh() {
  this.size = 0, this.__data__ = {
    hash: new Zn(),
    map: new (Ya || On)(),
    string: new Zn()
  };
}
function sh(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ao(e, t) {
  var n = e.__data__;
  return sh(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ih(e) {
  var t = ao(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function uh(e) {
  return ao(this, e).get(e);
}
function ch(e) {
  return ao(this, e).has(e);
}
function dh(e, t) {
  var n = ao(this, e), a = n.size;
  return n.set(e, t), this.size += n.size == a ? 0 : 1, this;
}
function Pn(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
Pn.prototype.clear = lh;
Pn.prototype.delete = ih;
Pn.prototype.get = uh;
Pn.prototype.has = ch;
Pn.prototype.set = dh;
var fh = "Expected a function";
function Nl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(fh);
  var n = function() {
    var a = arguments, r = t ? t.apply(this, a) : a[0], o = n.cache;
    if (o.has(r))
      return o.get(r);
    var l = e.apply(this, a);
    return n.cache = o.set(r, l) || o, l;
  };
  return n.cache = new (Nl.Cache || Pn)(), n;
}
Nl.Cache = Pn;
var ph = 500;
function vh(e) {
  var t = Nl(e, function(a) {
    return n.size === ph && n.clear(), a;
  }), n = t.cache;
  return t;
}
var hh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var mh = /\\(\\)?/g;
var gh = vh(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(hh, function(n, a, r, o) {
    t.push(r ? o.replace(mh, "$1") : a || n);
  }), t;
});
var bh = gh;
function yh(e) {
  return e == null ? "" : Su(e);
}
function ro(e, t) {
  return xt(e) ? e : Al(e, t) ? [e] : bh(yh(e));
}
var wh = 1 / 0;
function ur(e) {
  if (typeof e == "string" || eo(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -wh ? "-0" : t;
}
function Rl(e, t) {
  t = ro(t, e);
  for (var n = 0, a = t.length; e != null && n < a; )
    e = e[ur(t[n++])];
  return n && n == a ? e : void 0;
}
function Tt(e, t, n) {
  var a = e == null ? void 0 : Rl(e, t);
  return a === void 0 ? n : a;
}
function Ll(e, t) {
  for (var n = -1, a = t.length, r = e.length; ++n < a; )
    e[r + n] = t[n];
  return e;
}
var Rs = qt ? qt.isConcatSpreadable : void 0;
function Ch(e) {
  return xt(e) || ja(e) || !!(Rs && e && e[Rs]);
}
function oo(e, t, n, a, r) {
  var o = -1, l = e.length;
  for (n || (n = Ch), r || (r = []); ++o < l; ) {
    var s = e[o];
    t > 0 && n(s) ? t > 1 ? oo(s, t - 1, n, a, r) : Ll(r, s) : a || (r[r.length] = s);
  }
  return r;
}
function Mu(e) {
  var t = e == null ? 0 : e.length;
  return t ? oo(e, 1) : [];
}
function Sh(e) {
  return _u($u(e, void 0, Mu), e + "");
}
var kh = xu(Object.getPrototypeOf, Object);
var Fl = kh;
var _h = "[object Object]";
var $h = Function.prototype;
var Eh = Object.prototype;
var Au = $h.toString;
var Th = Eh.hasOwnProperty;
var Oh = Au.call(Object);
function Ph(e) {
  if (!sn(e) || ta(e) != _h)
    return false;
  var t = Fl(e);
  if (t === null)
    return true;
  var n = Th.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Au.call(n) == Oh;
}
function zo() {
  if (!arguments.length)
    return [];
  var e = arguments[0];
  return xt(e) ? e : [e];
}
function xh() {
  this.__data__ = new On(), this.size = 0;
}
function Mh(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function Ah(e) {
  return this.__data__.get(e);
}
function Nh(e) {
  return this.__data__.has(e);
}
var Rh = 200;
function Lh(e, t) {
  var n = this.__data__;
  if (n instanceof On) {
    var a = n.__data__;
    if (!Ya || a.length < Rh - 1)
      return a.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new Pn(a);
  }
  return n.set(e, t), this.size = n.size, this;
}
function Jt(e) {
  var t = this.__data__ = new On(e);
  this.size = t.size;
}
Jt.prototype.clear = xh;
Jt.prototype.delete = Mh;
Jt.prototype.get = Ah;
Jt.prototype.has = Nh;
Jt.prototype.set = Lh;
function Fh(e, t) {
  return e && lr(t, sr(t), e);
}
function Ih(e, t) {
  return e && lr(t, ir(t), e);
}
var Nu = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ls = Nu && typeof module == "object" && module && !module.nodeType && module;
var Dh = Ls && Ls.exports === Nu;
var Fs = Dh ? en.Buffer : void 0;
var Is = Fs ? Fs.allocUnsafe : void 0;
function Ru(e, t) {
  if (t)
    return e.slice();
  var n = e.length, a = Is ? Is(n) : new e.constructor(n);
  return e.copy(a), a;
}
function Bh(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length, r = 0, o = []; ++n < a; ) {
    var l = e[n];
    t(l, n, e) && (o[r++] = l);
  }
  return o;
}
function Lu() {
  return [];
}
var zh = Object.prototype;
var Vh = zh.propertyIsEnumerable;
var Ds = Object.getOwnPropertySymbols;
var Hh = Ds ? function(e) {
  return e == null ? [] : (e = Object(e), Bh(Ds(e), function(t) {
    return Vh.call(e, t);
  }));
} : Lu;
var Il = Hh;
function Wh(e, t) {
  return lr(e, Il(e), t);
}
var jh = Object.getOwnPropertySymbols;
var Kh = jh ? function(e) {
  for (var t = []; e; )
    Ll(t, Il(e)), e = Fl(e);
  return t;
} : Lu;
var Fu = Kh;
function qh(e, t) {
  return lr(e, Fu(e), t);
}
function Iu(e, t, n) {
  var a = t(e);
  return xt(e) ? a : Ll(a, n(e));
}
function Vo(e) {
  return Iu(e, sr, Il);
}
function Yh(e) {
  return Iu(e, ir, Fu);
}
var Uh = aa(en, "DataView");
var Ho = Uh;
var Gh = aa(en, "Promise");
var Wo = Gh;
var Xh = aa(en, "Set");
var jo = Xh;
var Bs = "[object Map]";
var Zh = "[object Object]";
var zs = "[object Promise]";
var Vs = "[object Set]";
var Hs = "[object WeakMap]";
var Ws = "[object DataView]";
var Jh = na(Ho);
var Qh = na(Ya);
var em = na(Wo);
var tm = na(jo);
var nm = na(Bo);
var Wn = ta;
(Ho && Wn(new Ho(new ArrayBuffer(1))) != Ws || Ya && Wn(new Ya()) != Bs || Wo && Wn(Wo.resolve()) != zs || jo && Wn(new jo()) != Vs || Bo && Wn(new Bo()) != Hs) && (Wn = function(e) {
  var t = ta(e), n = t == Zh ? e.constructor : void 0, a = n ? na(n) : "";
  if (a)
    switch (a) {
      case Jh:
        return Ws;
      case Qh:
        return Bs;
      case em:
        return zs;
      case tm:
        return Vs;
      case nm:
        return Hs;
    }
  return t;
});
var Ua = Wn;
var am = Object.prototype;
var rm = am.hasOwnProperty;
function om(e) {
  var t = e.length, n = new e.constructor(t);
  return t && typeof e[0] == "string" && rm.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
var lm = en.Uint8Array;
var Yr = lm;
function Dl(e) {
  var t = new e.constructor(e.byteLength);
  return new Yr(t).set(new Yr(e)), t;
}
function sm(e, t) {
  var n = t ? Dl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var im = /\w*$/;
function um(e) {
  var t = new e.constructor(e.source, im.exec(e));
  return t.lastIndex = e.lastIndex, t;
}
var js = qt ? qt.prototype : void 0;
var Ks = js ? js.valueOf : void 0;
function cm(e) {
  return Ks ? Object(Ks.call(e)) : {};
}
function Du(e, t) {
  var n = t ? Dl(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var dm = "[object Boolean]";
var fm = "[object Date]";
var pm = "[object Map]";
var vm = "[object Number]";
var hm = "[object RegExp]";
var mm = "[object Set]";
var gm = "[object String]";
var bm = "[object Symbol]";
var ym = "[object ArrayBuffer]";
var wm = "[object DataView]";
var Cm = "[object Float32Array]";
var Sm = "[object Float64Array]";
var km = "[object Int8Array]";
var _m = "[object Int16Array]";
var $m = "[object Int32Array]";
var Em = "[object Uint8Array]";
var Tm = "[object Uint8ClampedArray]";
var Om = "[object Uint16Array]";
var Pm = "[object Uint32Array]";
function xm(e, t, n) {
  var a = e.constructor;
  switch (t) {
    case ym:
      return Dl(e);
    case dm:
    case fm:
      return new a(+e);
    case wm:
      return sm(e, n);
    case Cm:
    case Sm:
    case km:
    case _m:
    case $m:
    case Em:
    case Tm:
    case Om:
    case Pm:
      return Du(e, n);
    case pm:
      return new a();
    case vm:
    case gm:
      return new a(e);
    case hm:
      return um(e);
    case mm:
      return new a();
    case bm:
      return cm(e);
  }
}
function Bu(e) {
  return typeof e.constructor == "function" && !Pl(e) ? kp(Fl(e)) : {};
}
var Mm = "[object Map]";
function Am(e) {
  return sn(e) && Ua(e) == Mm;
}
var qs = ma && ma.isMap;
var Nm = qs ? xl(qs) : Am;
var Rm = Nm;
var Lm = "[object Set]";
function Fm(e) {
  return sn(e) && Ua(e) == Lm;
}
var Ys = ma && ma.isSet;
var Im = Ys ? xl(Ys) : Fm;
var Dm = Im;
var Bm = 1;
var zm = 2;
var Vm = 4;
var zu = "[object Arguments]";
var Hm = "[object Array]";
var Wm = "[object Boolean]";
var jm = "[object Date]";
var Km = "[object Error]";
var Vu = "[object Function]";
var qm = "[object GeneratorFunction]";
var Ym = "[object Map]";
var Um = "[object Number]";
var Hu = "[object Object]";
var Gm = "[object RegExp]";
var Xm = "[object Set]";
var Zm = "[object String]";
var Jm = "[object Symbol]";
var Qm = "[object WeakMap]";
var eg = "[object ArrayBuffer]";
var tg = "[object DataView]";
var ng = "[object Float32Array]";
var ag = "[object Float64Array]";
var rg = "[object Int8Array]";
var og = "[object Int16Array]";
var lg = "[object Int32Array]";
var sg = "[object Uint8Array]";
var ig = "[object Uint8ClampedArray]";
var ug = "[object Uint16Array]";
var cg = "[object Uint32Array]";
var et = {};
et[zu] = et[Hm] = et[eg] = et[tg] = et[Wm] = et[jm] = et[ng] = et[ag] = et[rg] = et[og] = et[lg] = et[Ym] = et[Um] = et[Hu] = et[Gm] = et[Xm] = et[Zm] = et[Jm] = et[sg] = et[ig] = et[ug] = et[cg] = true;
et[Km] = et[Vu] = et[Qm] = false;
function Da(e, t, n, a, r, o) {
  var l, s = t & Bm, u = t & zm, c = t & Vm;
  if (n && (l = r ? n(e, a, r, o) : n(e)), l !== void 0)
    return l;
  if (!Rt(e))
    return e;
  var f = xt(e);
  if (f) {
    if (l = om(e), !s)
      return ku(e, l);
  } else {
    var p = Ua(e), m = p == Vu || p == qm;
    if (Ka(e))
      return Ru(e, s);
    if (p == Hu || p == zu || m && !r) {
      if (l = u || m ? {} : Bu(e), !s)
        return u ? qh(e, Ih(l, e)) : Wh(e, Fh(l, e));
    } else {
      if (!et[p])
        return r ? e : {};
      l = xm(e, p, s);
    }
  }
  o || (o = new Jt());
  var v = o.get(e);
  if (v)
    return v;
  o.set(e, l), Dm(e) ? e.forEach(function(b) {
    l.add(Da(b, t, n, b, e, o));
  }) : Rm(e) && e.forEach(function(b, y) {
    l.set(y, Da(b, t, n, y, e, o));
  });
  var h3 = c ? u ? Yh : Vo : u ? ir : sr, d = f ? void 0 : h3(e);
  return Rp(d || e, function(b, y) {
    d && (y = b, b = e[y]), Tl(l, y, Da(b, t, n, y, e, o));
  }), l;
}
var dg = 4;
function Us(e) {
  return Da(e, dg);
}
var fg = 1;
var pg = 4;
function Wu(e) {
  return Da(e, fg | pg);
}
var vg = "__lodash_hash_undefined__";
function hg(e) {
  return this.__data__.set(e, vg), this;
}
function mg(e) {
  return this.__data__.has(e);
}
function Ur(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new Pn(); ++t < n; )
    this.add(e[t]);
}
Ur.prototype.add = Ur.prototype.push = hg;
Ur.prototype.has = mg;
function gg(e, t) {
  for (var n = -1, a = e == null ? 0 : e.length; ++n < a; )
    if (t(e[n], n, e))
      return true;
  return false;
}
function bg(e, t) {
  return e.has(t);
}
var yg = 1;
var wg = 2;
function ju(e, t, n, a, r, o) {
  var l = n & yg, s = e.length, u = t.length;
  if (s != u && !(l && u > s))
    return false;
  var c = o.get(e), f = o.get(t);
  if (c && f)
    return c == t && f == e;
  var p = -1, m = true, v = n & wg ? new Ur() : void 0;
  for (o.set(e, t), o.set(t, e); ++p < s; ) {
    var h3 = e[p], d = t[p];
    if (a)
      var b = l ? a(d, h3, p, t, e, o) : a(h3, d, p, e, t, o);
    if (b !== void 0) {
      if (b)
        continue;
      m = false;
      break;
    }
    if (v) {
      if (!gg(t, function(y, C) {
        if (!bg(v, C) && (h3 === y || r(h3, y, n, a, o)))
          return v.push(C);
      })) {
        m = false;
        break;
      }
    } else if (!(h3 === d || r(h3, d, n, a, o))) {
      m = false;
      break;
    }
  }
  return o.delete(e), o.delete(t), m;
}
function Cg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a, r) {
    n[++t] = [r, a];
  }), n;
}
function Sg(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(a) {
    n[++t] = a;
  }), n;
}
var kg = 1;
var _g = 2;
var $g = "[object Boolean]";
var Eg = "[object Date]";
var Tg = "[object Error]";
var Og = "[object Map]";
var Pg = "[object Number]";
var xg = "[object RegExp]";
var Mg = "[object Set]";
var Ag = "[object String]";
var Ng = "[object Symbol]";
var Rg = "[object ArrayBuffer]";
var Lg = "[object DataView]";
var Gs = qt ? qt.prototype : void 0;
var ko = Gs ? Gs.valueOf : void 0;
function Fg(e, t, n, a, r, o, l) {
  switch (n) {
    case Lg:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return false;
      e = e.buffer, t = t.buffer;
    case Rg:
      return !(e.byteLength != t.byteLength || !o(new Yr(e), new Yr(t)));
    case $g:
    case Eg:
    case Pg:
      return or(+e, +t);
    case Tg:
      return e.name == t.name && e.message == t.message;
    case xg:
    case Ag:
      return e == t + "";
    case Og:
      var s = Cg;
    case Mg:
      var u = a & kg;
      if (s || (s = Sg), e.size != t.size && !u)
        return false;
      var c = l.get(e);
      if (c)
        return c == t;
      a |= _g, l.set(e, t);
      var f = ju(s(e), s(t), a, r, o, l);
      return l.delete(e), f;
    case Ng:
      if (ko)
        return ko.call(e) == ko.call(t);
  }
  return false;
}
var Ig = 1;
var Dg = Object.prototype;
var Bg = Dg.hasOwnProperty;
function zg(e, t, n, a, r, o) {
  var l = n & Ig, s = Vo(e), u = s.length, c = Vo(t), f = c.length;
  if (u != f && !l)
    return false;
  for (var p = u; p--; ) {
    var m = s[p];
    if (!(l ? m in t : Bg.call(t, m)))
      return false;
  }
  var v = o.get(e), h3 = o.get(t);
  if (v && h3)
    return v == t && h3 == e;
  var d = true;
  o.set(e, t), o.set(t, e);
  for (var b = l; ++p < u; ) {
    m = s[p];
    var y = e[m], C = t[m];
    if (a)
      var g = l ? a(C, y, m, t, e, o) : a(y, C, m, e, t, o);
    if (!(g === void 0 ? y === C || r(y, C, n, a, o) : g)) {
      d = false;
      break;
    }
    b || (b = m == "constructor");
  }
  if (d && !b) {
    var w = e.constructor, k = t.constructor;
    w != k && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof k == "function" && k instanceof k) && (d = false);
  }
  return o.delete(e), o.delete(t), d;
}
var Vg = 1;
var Xs = "[object Arguments]";
var Zs = "[object Array]";
var br = "[object Object]";
var Hg = Object.prototype;
var Js = Hg.hasOwnProperty;
function Wg(e, t, n, a, r, o) {
  var l = xt(e), s = xt(t), u = l ? Zs : Ua(e), c = s ? Zs : Ua(t);
  u = u == Xs ? br : u, c = c == Xs ? br : c;
  var f = u == br, p = c == br, m = u == c;
  if (m && Ka(e)) {
    if (!Ka(t))
      return false;
    l = true, f = false;
  }
  if (m && !f)
    return o || (o = new Jt()), l || Ml(e) ? ju(e, t, n, a, r, o) : Fg(e, t, u, n, a, r, o);
  if (!(n & Vg)) {
    var v = f && Js.call(e, "__wrapped__"), h3 = p && Js.call(t, "__wrapped__");
    if (v || h3) {
      var d = v ? e.value() : e, b = h3 ? t.value() : t;
      return o || (o = new Jt()), r(d, b, n, a, o);
    }
  }
  return m ? (o || (o = new Jt()), zg(e, t, n, a, r, o)) : false;
}
function lo(e, t, n, a, r) {
  return e === t ? true : e == null || t == null || !sn(e) && !sn(t) ? e !== e && t !== t : Wg(e, t, n, a, lo, r);
}
var jg = 1;
var Kg = 2;
function qg(e, t, n, a) {
  var r = n.length, o = r, l = !a;
  if (e == null)
    return !o;
  for (e = Object(e); r--; ) {
    var s = n[r];
    if (l && s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return false;
  }
  for (; ++r < o; ) {
    s = n[r];
    var u = s[0], c = e[u], f = s[1];
    if (l && s[2]) {
      if (c === void 0 && !(u in e))
        return false;
    } else {
      var p = new Jt();
      if (a)
        var m = a(c, f, u, e, t, p);
      if (!(m === void 0 ? lo(f, c, jg | Kg, a, p) : m))
        return false;
    }
  }
  return true;
}
function Ku(e) {
  return e === e && !Rt(e);
}
function Yg(e) {
  for (var t = sr(e), n = t.length; n--; ) {
    var a = t[n], r = e[a];
    t[n] = [a, r, Ku(r)];
  }
  return t;
}
function qu(e, t) {
  return function(n) {
    return n == null ? false : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function Ug(e) {
  var t = Yg(e);
  return t.length == 1 && t[0][2] ? qu(t[0][0], t[0][1]) : function(n) {
    return n === e || qg(n, e, t);
  };
}
function Gg(e, t) {
  return e != null && t in Object(e);
}
function Xg(e, t, n) {
  t = ro(t, e);
  for (var a = -1, r = t.length, o = false; ++a < r; ) {
    var l = ur(t[a]);
    if (!(o = e != null && n(e, l)))
      break;
    e = e[l];
  }
  return o || ++a != r ? o : (r = e == null ? 0 : e.length, !!r && Ol(r) && to(l, r) && (xt(e) || ja(e)));
}
function Yu(e, t) {
  return e != null && Xg(e, t, Gg);
}
var Zg = 1;
var Jg = 2;
function Qg(e, t) {
  return Al(e) && Ku(t) ? qu(ur(e), t) : function(n) {
    var a = Tt(n, e);
    return a === void 0 && a === t ? Yu(n, e) : lo(t, a, Zg | Jg);
  };
}
function eb(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function tb(e) {
  return function(t) {
    return Rl(t, e);
  };
}
function nb(e) {
  return Al(e) ? eb(ur(e)) : tb(e);
}
function ab(e) {
  return typeof e == "function" ? e : e == null ? _l : typeof e == "object" ? xt(e) ? Qg(e[0], e[1]) : Ug(e) : nb(e);
}
function rb(e) {
  return function(t, n, a) {
    for (var r = -1, o = Object(t), l = a(t), s = l.length; s--; ) {
      var u = l[e ? s : ++r];
      if (n(o[u], u, o) === false)
        break;
    }
    return t;
  };
}
var ob = rb();
var Uu = ob;
function lb(e, t) {
  return e && Uu(e, t, sr);
}
function sb(e, t) {
  return function(n, a) {
    if (n == null)
      return n;
    if (!Oa(n))
      return e(n, a);
    for (var r = n.length, o = t ? r : -1, l = Object(n); (t ? o-- : ++o < r) && a(l[o], o, l) !== false; )
      ;
    return n;
  };
}
var ib = sb(lb);
var ub = ib;
var cb = function() {
  return en.Date.now();
};
var _o = cb;
var db = "Expected a function";
var fb = Math.max;
var pb = Math.min;
function Dn(e, t, n) {
  var a, r, o, l, s, u, c = 0, f = false, p = false, m = true;
  if (typeof e != "function")
    throw new TypeError(db);
  t = Es(t) || 0, Rt(n) && (f = !!n.leading, p = "maxWait" in n, o = p ? fb(Es(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m);
  function v(S) {
    var _ = a, P = r;
    return a = r = void 0, c = S, l = e.apply(P, _), l;
  }
  function h3(S) {
    return c = S, s = setTimeout(y, t), f ? v(S) : l;
  }
  function d(S) {
    var _ = S - u, P = S - c, A = t - _;
    return p ? pb(A, o - P) : A;
  }
  function b(S) {
    var _ = S - u, P = S - c;
    return u === void 0 || _ >= t || _ < 0 || p && P >= o;
  }
  function y() {
    var S = _o();
    if (b(S))
      return C(S);
    s = setTimeout(y, d(S));
  }
  function C(S) {
    return s = void 0, m && a ? v(S) : (a = r = void 0, l);
  }
  function g() {
    s !== void 0 && clearTimeout(s), c = 0, a = u = r = s = void 0;
  }
  function w() {
    return s === void 0 ? l : C(_o());
  }
  function k() {
    var S = _o(), _ = b(S);
    if (a = arguments, r = this, u = S, _) {
      if (s === void 0)
        return h3(u);
      if (p)
        return clearTimeout(s), s = setTimeout(y, t), v(u);
    }
    return s === void 0 && (s = setTimeout(y, t)), l;
  }
  return k.cancel = g, k.flush = w, k;
}
function Ko(e, t, n) {
  (n !== void 0 && !or(e[t], n) || n === void 0 && !(t in e)) && El(e, t, n);
}
function vb(e) {
  return sn(e) && Oa(e);
}
function qo(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function hb(e) {
  return lr(e, ir(e));
}
function mb(e, t, n, a, r, o, l) {
  var s = qo(e, n), u = qo(t, n), c = l.get(u);
  if (c) {
    Ko(e, n, c);
    return;
  }
  var f = o ? o(s, u, n + "", e, t, l) : void 0, p = f === void 0;
  if (p) {
    var m = xt(u), v = !m && Ka(u), h3 = !m && !v && Ml(u);
    f = u, m || v || h3 ? xt(s) ? f = s : vb(s) ? f = ku(s) : v ? (p = false, f = Ru(u, true)) : h3 ? (p = false, f = Du(u, true)) : f = [] : Ph(u) || ja(u) ? (f = s, ja(s) ? f = hb(s) : (!Rt(s) || $l(s)) && (f = Bu(u))) : p = false;
  }
  p && (l.set(u, f), r(f, u, a, o, l), l.delete(u)), Ko(e, n, f);
}
function Gu(e, t, n, a, r) {
  e !== t && Uu(t, function(o, l) {
    if (r || (r = new Jt()), Rt(o))
      mb(e, t, l, n, Gu, a, r);
    else {
      var s = a ? a(qo(e, l), o, l + "", e, t, r) : void 0;
      s === void 0 && (s = o), Ko(e, l, s);
    }
  }, ir);
}
function gb(e, t) {
  var n = -1, a = Oa(e) ? Array(e.length) : [];
  return ub(e, function(r, o, l) {
    a[++n] = t(r, o, l);
  }), a;
}
function bb(e, t) {
  var n = xt(e) ? Cu : gb;
  return n(e, ab(t));
}
function yb(e, t) {
  return oo(bb(e, t), 1);
}
var wb = 1 / 0;
function Cb(e) {
  var t = e == null ? 0 : e.length;
  return t ? oo(e, wb) : [];
}
function Gr(e) {
  for (var t = -1, n = e == null ? 0 : e.length, a = {}; ++t < n; ) {
    var r = e[t];
    a[r[0]] = r[1];
  }
  return a;
}
function rn(e, t) {
  return lo(e, t);
}
function so(e) {
  return e == null;
}
function Sb(e) {
  return e === void 0;
}
var kb = Hp(function(e, t, n) {
  Gu(e, t, n);
});
var Xu = kb;
function Zu(e, t, n, a) {
  if (!Rt(e))
    return e;
  t = ro(t, e);
  for (var r = -1, o = t.length, l = o - 1, s = e; s != null && ++r < o; ) {
    var u = ur(t[r]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (r != l) {
      var f = s[u];
      c = a ? a(f, u, s) : void 0, c === void 0 && (c = Rt(f) ? f : to(t[r + 1]) ? [] : {});
    }
    Tl(s, u, c), s = s[u];
  }
  return e;
}
function _b(e, t, n) {
  for (var a = -1, r = t.length, o = {}; ++a < r; ) {
    var l = t[a], s = Rl(e, l);
    n(s, l) && Zu(o, ro(l, e), s);
  }
  return o;
}
function $b(e, t) {
  return _b(e, t, function(n, a) {
    return Yu(e, a);
  });
}
var Eb = Sh(function(e, t) {
  return e == null ? {} : $b(e, t);
});
var Tb = Eb;
function Ob(e, t, n) {
  return e == null ? e : Zu(e, t, n);
}
var $n = (e) => e === void 0;
var Qt = (e) => typeof e == "boolean";
var ot = (e) => typeof e == "number";
var Ga = (e) => !e && e !== 0 || Ue(e) && e.length === 0 || zt(e) && !Object.keys(e).length;
var ga = (e) => typeof Element > "u" ? false : e instanceof Element;
var Pb = (e) => St(e) ? !Number.isNaN(Number(e)) : false;
var xb = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
var nn = (e) => Rf(e);
var Ar = (e, t, n) => ({
  get value() {
    return Tt(e, t, n);
  },
  set value(a) {
    Ob(e, t, a);
  }
});
var Ju = class extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
};
function Pa(e, t) {
  throw new Ju(`[${e}] ${t}`);
}
function nt(e, t) {
  if (true) {
    const n = St(e) ? new Ju(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
var Mb = "utils/dom/style";
var Qu = (e = "") => e.split(" ").filter((t) => !!t.trim());
var ca = (e, t) => {
  if (!e || !t)
    return false;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
};
var ec = (e, t) => {
  !e || !t.trim() || e.classList.add(...Qu(t));
};
var Yo = (e, t) => {
  !e || !t.trim() || e.classList.remove(...Qu(t));
};
var Ab = (e, t) => {
  var n;
  if (!at || !e || !t)
    return "";
  let a = Nf(t);
  a === "float" && (a = "cssFloat");
  try {
    const r = e.style[a];
    if (r)
      return r;
    const o = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return o ? o[a] : "";
  } catch {
    return e.style[a];
  }
};
function Xa(e, t = "px") {
  if (!e)
    return "";
  if (ot(e) || Pb(e))
    return `${e}${t}`;
  if (St(e))
    return e;
  nt(Mb, "binding value must be a string or number");
}
function tc(e, t) {
  if (!at)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let a = t.offsetParent;
  for (; a !== null && e !== a && e.contains(a); )
    n.push(a), a = a.offsetParent;
  const r = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), o = r + t.offsetHeight, l = e.scrollTop, s = l + e.clientHeight;
  r < l ? e.scrollTop = r : o > s && (e.scrollTop = o - e.clientHeight);
}
var Et = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [a, r] of t)
    n[a] = r;
  return n;
};
var Nb = {
  name: "ArrowDown"
};
var Rb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Lb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
  },
  null,
  -1
  /* HOISTED */
);
var Fb = [
  Lb
];
function Ib(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", Rb, Fb);
}
var io = Et(Nb, [["render", Ib], ["__file", "arrow-down.vue"]]);
var Db = {
  name: "ArrowLeft"
};
var Bb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var zb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
);
var Vb = [
  zb
];
function Hb(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", Bb, Vb);
}
var Za = Et(Db, [["render", Hb], ["__file", "arrow-left.vue"]]);
var Wb = {
  name: "ArrowRight"
};
var jb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Kb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
  },
  null,
  -1
  /* HOISTED */
);
var qb = [
  Kb
];
function Yb(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", jb, qb);
}
var Cn = Et(Wb, [["render", Yb], ["__file", "arrow-right.vue"]]);
var Ub = {
  name: "ArrowUp"
};
var Gb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Xb = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
  },
  null,
  -1
  /* HOISTED */
);
var Zb = [
  Xb
];
function Jb(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", Gb, Zb);
}
var nc = Et(Ub, [["render", Jb], ["__file", "arrow-up.vue"]]);
var Qb = {
  name: "Calendar"
};
var ey = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var ty = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
  },
  null,
  -1
  /* HOISTED */
);
var ny = [
  ty
];
function ay(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", ey, ny);
}
var ry = Et(Qb, [["render", ay], ["__file", "calendar.vue"]]);
var oy = {
  name: "Check"
};
var ly = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var sy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
  },
  null,
  -1
  /* HOISTED */
);
var iy = [
  sy
];
function uy(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", ly, iy);
}
var ac = Et(oy, [["render", uy], ["__file", "check.vue"]]);
var cy = {
  name: "CircleCheck"
};
var dy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var fy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
);
var py = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
  },
  null,
  -1
  /* HOISTED */
);
var vy = [
  fy,
  py
];
function hy(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", dy, vy);
}
var my = Et(cy, [["render", hy], ["__file", "circle-check.vue"]]);
var gy = {
  name: "CircleClose"
};
var by = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var yy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
  },
  null,
  -1
  /* HOISTED */
);
var wy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
);
var Cy = [
  yy,
  wy
];
function Sy(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", by, Cy);
}
var cr = Et(gy, [["render", Sy], ["__file", "circle-close.vue"]]);
var ky = {
  name: "Clock"
};
var _y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var $y = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
  },
  null,
  -1
  /* HOISTED */
);
var Ey = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
  },
  null,
  -1
  /* HOISTED */
);
var Ty = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
  },
  null,
  -1
  /* HOISTED */
);
var Oy = [
  $y,
  Ey,
  Ty
];
function Py(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", _y, Oy);
}
var xy = Et(ky, [["render", Py], ["__file", "clock.vue"]]);
var My = {
  name: "Close"
};
var Ay = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Ny = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  },
  null,
  -1
  /* HOISTED */
);
var Ry = [
  Ny
];
function Ly(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", Ay, Ry);
}
var Uo = Et(My, [["render", Ly], ["__file", "close.vue"]]);
var Fy = {
  name: "DArrowLeft"
};
var Iy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Dy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
  },
  null,
  -1
  /* HOISTED */
);
var By = [
  Dy
];
function zy(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", Iy, By);
}
var ba = Et(Fy, [["render", zy], ["__file", "d-arrow-left.vue"]]);
var Vy = {
  name: "DArrowRight"
};
var Hy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Wy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
  },
  null,
  -1
  /* HOISTED */
);
var jy = [
  Wy
];
function Ky(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", Hy, jy);
}
var ya = Et(Vy, [["render", Ky], ["__file", "d-arrow-right.vue"]]);
var qy = {
  name: "Hide"
};
var Yy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var Uy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
  },
  null,
  -1
  /* HOISTED */
);
var Gy = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
  },
  null,
  -1
  /* HOISTED */
);
var Xy = [
  Uy,
  Gy
];
function Zy(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", Yy, Xy);
}
var Jy = Et(qy, [["render", Zy], ["__file", "hide.vue"]]);
var Qy = {
  name: "Loading"
};
var e0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var t0 = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
  },
  null,
  -1
  /* HOISTED */
);
var n0 = [
  t0
];
function a0(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", e0, n0);
}
var dr = Et(Qy, [["render", a0], ["__file", "loading.vue"]]);
var r0 = {
  name: "MoreFilled"
};
var o0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var l0 = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
  },
  null,
  -1
  /* HOISTED */
);
var s0 = [
  l0
];
function i0(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", o0, s0);
}
var Qs = Et(r0, [["render", i0], ["__file", "more-filled.vue"]]);
var u0 = {
  name: "Plus"
};
var c0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var d0 = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
  },
  null,
  -1
  /* HOISTED */
);
var f0 = [
  d0
];
function p0(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", c0, f0);
}
var v0 = Et(u0, [["render", p0], ["__file", "plus.vue"]]);
var h0 = {
  name: "View"
};
var m0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
};
var g0 = createBaseVNode(
  "path",
  {
    fill: "currentColor",
    d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
  },
  null,
  -1
  /* HOISTED */
);
var b0 = [
  g0
];
function y0(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("svg", m0, b0);
}
var w0 = Et(h0, [["render", y0], ["__file", "view.vue"]]);
var rc = "__epPropKey";
var be = (e) => e;
var C0 = (e) => zt(e) && !!e[rc];
var uo = (e, t) => {
  if (!zt(e) || C0(e))
    return e;
  const { values: n, required: a, default: r, type: o, validator: l } = e, u = {
    type: o,
    required: !!a,
    validator: n || l ? (c) => {
      let f = false, p = [];
      if (n && (p = Array.from(n), Xn(e, "default") && p.push(r), f || (f = p.includes(c))), l && (f || (f = l(c))), !f && p.length > 0) {
        const m = [...new Set(p)].map((v) => JSON.stringify(v)).join(", ");
        warn(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return f;
    } : void 0,
    [rc]: true
  };
  return Xn(e, "default") && (u.default = r), u;
};
var Pe = (e) => Gr(Object.entries(e).map(([t, n]) => [
  t,
  uo(n, t)
]));
var un = be([
  String,
  Object,
  Function
]);
var S0 = {
  validating: dr,
  success: my,
  error: cr
};
var Lt = (e, t) => {
  if (e.install = (n) => {
    for (const a of [e, ...Object.values(t ?? {})])
      n.component(a.name, a);
  }, t)
    for (const [n, a] of Object.entries(t))
      e[n] = a;
  return e;
};
var dn = (e) => (e.install = ha, e);
var Fe = {
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
var k0 = [
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
var lt = "update:modelValue";
var Jn = "change";
var ra = ["", "default", "small", "large"];
var _0 = {
  large: 40,
  default: 32,
  small: 24
};
var $0 = (e) => _0[e || "default"];
var E0 = (e) => ["", ...ra].includes(e);
var Nr = (e) => {
  const t = Ue(e) ? e : [e], n = [];
  return t.forEach((a) => {
    var r;
    Ue(a) ? n.push(...Nr(a)) : isVNode(a) && Ue(a.children) ? n.push(...Nr(a.children)) : (n.push(a), isVNode(a) && ((r = a.component) != null && r.subTree) && n.push(...Nr(a.component.subTree)));
  }), n;
};
var ei = (e) => [...new Set(e)];
var Sn = (e) => !e && e !== 0 ? [] : Array.isArray(e) ? e : [e];
var Bl = (e) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);
var T0 = () => Math.floor(Math.random() * 1e4);
var fr = (e) => e;
var O0 = ["class", "style"];
var P0 = /^on[A-Z]/;
var x0 = (e = {}) => {
  const { excludeListeners: t = false, excludeKeys: n } = e, a = computed(() => ((n == null ? void 0 : n.value) || []).concat(O0)), r = getCurrentInstance();
  return r ? computed(() => {
    var o;
    return Gr(Object.entries((o = r.proxy) == null ? void 0 : o.$attrs).filter(([l]) => !a.value.includes(l) && !(t && P0.test(l))));
  }) : (nt("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), computed(() => ({})));
};
var zl = ({ from: e, replacement: t, scope: n, version: a, ref: r, type: o = "API" }, l) => {
  watch(() => unref(l), (s) => {
    s && nt(n, `[${o}] ${e} is about to be deprecated in version ${a}, please use ${t} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: true
  });
};
var M0 = (e) => ({
  focus: () => {
    var t, n;
    (n = (t = e.value) == null ? void 0 : t.focus) == null || n.call(t);
  }
});
var A0 = {
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
var N0 = (e) => (t, n) => R0(t, n, unref(e));
var R0 = (e, t, n) => Tt(n, e, e).replace(/\{(\w+)\}/g, (a, r) => {
  var o;
  return `${(o = t == null ? void 0 : t[r]) != null ? o : `{${r}}`}`;
});
var L0 = (e) => {
  const t = computed(() => unref(e).name), n = isRef(e) ? e : ref(e);
  return {
    lang: t,
    locale: n,
    t: N0(e)
  };
};
var F0 = Symbol("localeContextKey");
var st = (e) => {
  const t = e || inject(F0, ref());
  return L0(computed(() => t.value || A0));
};
var ti = "el";
var I0 = "is-";
var Hn = (e, t, n, a, r) => {
  let o = `${e}-${t}`;
  return n && (o += `-${n}`), a && (o += `__${a}`), r && (o += `--${r}`), o;
};
var D0 = Symbol("namespaceContextKey");
var Vl = (e) => {
  const t = e || inject(D0, ref(ti));
  return computed(() => unref(t) || ti);
};
var ye = (e, t) => {
  const n = Vl(t);
  return {
    namespace: n,
    b: (d = "") => Hn(n.value, e, d, "", ""),
    e: (d) => d ? Hn(n.value, e, "", d, "") : "",
    m: (d) => d ? Hn(n.value, e, "", "", d) : "",
    be: (d, b) => d && b ? Hn(n.value, e, d, b, "") : "",
    em: (d, b) => d && b ? Hn(n.value, e, "", d, b) : "",
    bm: (d, b) => d && b ? Hn(n.value, e, d, "", b) : "",
    bem: (d, b, y) => d && b && y ? Hn(n.value, e, d, b, y) : "",
    is: (d, ...b) => {
      const y = b.length >= 1 ? b[0] : true;
      return d && y ? `${I0}${d}` : "";
    },
    cssVar: (d) => {
      const b = {};
      for (const y in d)
        d[y] && (b[`--${n.value}-${y}`] = d[y]);
      return b;
    },
    cssVarName: (d) => `--${n.value}-${d}`,
    cssVarBlock: (d) => {
      const b = {};
      for (const y in d)
        d[y] && (b[`--${n.value}-${e}-${y}`] = d[y]);
      return b;
    },
    cssVarBlockName: (d) => `--${n.value}-${e}-${d}`
  };
};
var B0 = uo({
  type: be(Boolean),
  default: null
});
var z0 = uo({
  type: be(Function)
});
var oc = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, a = [t], r = {
    [e]: B0,
    [n]: z0
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
      const m = getCurrentInstance(), { emit: v } = m, h3 = m.props, d = computed(() => ft(h3[n])), b = computed(() => h3[e] === null), y = (_) => {
        l.value !== true && (l.value = true, s && (s.value = _), ft(f) && f(_));
      }, C = (_) => {
        l.value !== false && (l.value = false, s && (s.value = _), ft(p) && p(_));
      }, g = (_) => {
        if (h3.disabled === true || ft(c) && !c())
          return;
        const P = d.value && at;
        P && v(t, true), (b.value || !P) && y(_);
      }, w = (_) => {
        if (h3.disabled === true || !at)
          return;
        const P = d.value && at;
        P && v(t, false), (b.value || !P) && C(_);
      }, k = (_) => {
        Qt(_) && (h3.disabled && _ ? d.value && v(t, false) : l.value !== _ && (_ ? y() : C()));
      }, S = () => {
        l.value ? w() : g();
      };
      return watch(() => h3[e], k), u && m.appContext.config.globalProperties.$route !== void 0 && watch(() => ({
        ...m.proxy.$route
      }), () => {
        u.value && l.value && w();
      }), onMounted(() => {
        k(h3[e]);
      }), {
        hide: w,
        show: g,
        toggle: S,
        hasUpdateHandler: d
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: a
  };
};
oc("modelValue");
var lc = (e) => {
  const t = getCurrentInstance();
  return computed(() => {
    var n, a;
    return (a = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : a[e];
  });
};
var At = "top";
var Yt = "bottom";
var Ut = "right";
var Nt = "left";
var Hl = "auto";
var pr = [At, Yt, Ut, Nt];
var wa = "start";
var Ja = "end";
var V0 = "clippingParents";
var sc = "viewport";
var La = "popper";
var H0 = "reference";
var ni = pr.reduce(function(e, t) {
  return e.concat([t + "-" + wa, t + "-" + Ja]);
}, []);
var co = [].concat(pr, [Hl]).reduce(function(e, t) {
  return e.concat([t, t + "-" + wa, t + "-" + Ja]);
}, []);
var W0 = "beforeRead";
var j0 = "read";
var K0 = "afterRead";
var q0 = "beforeMain";
var Y0 = "main";
var U0 = "afterMain";
var G0 = "beforeWrite";
var X0 = "write";
var Z0 = "afterWrite";
var J0 = [W0, j0, K0, q0, Y0, U0, G0, X0, Z0];
function cn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function tn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ca(e) {
  var t = tn(e).Element;
  return e instanceof t || e instanceof Element;
}
function Kt(e) {
  var t = tn(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Wl(e) {
  if (typeof ShadowRoot > "u")
    return false;
  var t = tn(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Q0(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var a = t.styles[n] || {}, r = t.attributes[n] || {}, o = t.elements[n];
    !Kt(o) || !cn(o) || (Object.assign(o.style, a), Object.keys(r).forEach(function(l) {
      var s = r[l];
      s === false ? o.removeAttribute(l) : o.setAttribute(l, s === true ? "" : s);
    }));
  });
}
function e1(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(a) {
      var r = t.elements[a], o = t.attributes[a] || {}, l = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : n[a]), s = l.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !Kt(r) || !cn(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(u) {
        r.removeAttribute(u);
      }));
    });
  };
}
var ic = { name: "applyStyles", enabled: true, phase: "write", fn: Q0, effect: e1, requires: ["computeStyles"] };
function on(e) {
  return e.split("-")[0];
}
var Gn = Math.max;
var Xr = Math.min;
var Sa = Math.round;
function ka(e, t) {
  t === void 0 && (t = false);
  var n = e.getBoundingClientRect(), a = 1, r = 1;
  if (Kt(e) && t) {
    var o = e.offsetHeight, l = e.offsetWidth;
    l > 0 && (a = Sa(n.width) / l || 1), o > 0 && (r = Sa(n.height) / o || 1);
  }
  return { width: n.width / a, height: n.height / r, top: n.top / r, right: n.right / a, bottom: n.bottom / r, left: n.left / a, x: n.left / a, y: n.top / r };
}
function jl(e) {
  var t = ka(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: a };
}
function uc(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return true;
  if (n && Wl(n)) {
    var a = t;
    do {
      if (a && e.isSameNode(a))
        return true;
      a = a.parentNode || a.host;
    } while (a);
  }
  return false;
}
function En(e) {
  return tn(e).getComputedStyle(e);
}
function t1(e) {
  return ["table", "td", "th"].indexOf(cn(e)) >= 0;
}
function zn(e) {
  return ((Ca(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function fo(e) {
  return cn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Wl(e) ? e.host : null) || zn(e);
}
function ai(e) {
  return !Kt(e) || En(e).position === "fixed" ? null : e.offsetParent;
}
function n1(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && Kt(e)) {
    var a = En(e);
    if (a.position === "fixed")
      return null;
  }
  var r = fo(e);
  for (Wl(r) && (r = r.host); Kt(r) && ["html", "body"].indexOf(cn(r)) < 0; ) {
    var o = En(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function vr(e) {
  for (var t = tn(e), n = ai(e); n && t1(n) && En(n).position === "static"; )
    n = ai(n);
  return n && (cn(n) === "html" || cn(n) === "body" && En(n).position === "static") ? t : n || n1(e) || t;
}
function Kl(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ba(e, t, n) {
  return Gn(e, Xr(t, n));
}
function a1(e, t, n) {
  var a = Ba(e, t, n);
  return a > n ? n : a;
}
function cc() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function dc(e) {
  return Object.assign({}, cc(), e);
}
function fc(e, t) {
  return t.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
var r1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, dc(typeof e != "number" ? e : fc(e, pr));
};
function o1(e) {
  var t, n = e.state, a = e.name, r = e.options, o = n.elements.arrow, l = n.modifiersData.popperOffsets, s = on(n.placement), u = Kl(s), c = [Nt, Ut].indexOf(s) >= 0, f = c ? "height" : "width";
  if (!(!o || !l)) {
    var p = r1(r.padding, n), m = jl(o), v = u === "y" ? At : Nt, h3 = u === "y" ? Yt : Ut, d = n.rects.reference[f] + n.rects.reference[u] - l[u] - n.rects.popper[f], b = l[u] - n.rects.reference[u], y = vr(o), C = y ? u === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, g = d / 2 - b / 2, w = p[v], k = C - m[f] - p[h3], S = C / 2 - m[f] / 2 + g, _ = Ba(w, S, k), P = u;
    n.modifiersData[a] = (t = {}, t[P] = _, t.centerOffset = _ - S, t);
  }
}
function l1(e) {
  var t = e.state, n = e.options, a = n.element, r = a === void 0 ? "[data-popper-arrow]" : a;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !uc(t.elements.popper, r) || (t.elements.arrow = r));
}
var s1 = { name: "arrow", enabled: true, phase: "main", fn: o1, effect: l1, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function _a(e) {
  return e.split("-")[1];
}
var i1 = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function u1(e) {
  var t = e.x, n = e.y, a = window, r = a.devicePixelRatio || 1;
  return { x: Sa(t * r) / r || 0, y: Sa(n * r) / r || 0 };
}
function ri(e) {
  var t, n = e.popper, a = e.popperRect, r = e.placement, o = e.variation, l = e.offsets, s = e.position, u = e.gpuAcceleration, c = e.adaptive, f = e.roundOffsets, p = e.isFixed, m = l.x, v = m === void 0 ? 0 : m, h3 = l.y, d = h3 === void 0 ? 0 : h3, b = typeof f == "function" ? f({ x: v, y: d }) : { x: v, y: d };
  v = b.x, d = b.y;
  var y = l.hasOwnProperty("x"), C = l.hasOwnProperty("y"), g = Nt, w = At, k = window;
  if (c) {
    var S = vr(n), _ = "clientHeight", P = "clientWidth";
    if (S === tn(n) && (S = zn(n), En(S).position !== "static" && s === "absolute" && (_ = "scrollHeight", P = "scrollWidth")), S = S, r === At || (r === Nt || r === Ut) && o === Ja) {
      w = Yt;
      var A = p && S === k && k.visualViewport ? k.visualViewport.height : S[_];
      d -= A - a.height, d *= u ? 1 : -1;
    }
    if (r === Nt || (r === At || r === Yt) && o === Ja) {
      g = Ut;
      var B = p && S === k && k.visualViewport ? k.visualViewport.width : S[P];
      v -= B - a.width, v *= u ? 1 : -1;
    }
  }
  var z = Object.assign({ position: s }, c && i1), I = f === true ? u1({ x: v, y: d }) : { x: v, y: d };
  if (v = I.x, d = I.y, u) {
    var N;
    return Object.assign({}, z, (N = {}, N[w] = C ? "0" : "", N[g] = y ? "0" : "", N.transform = (k.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + d + "px)" : "translate3d(" + v + "px, " + d + "px, 0)", N));
  }
  return Object.assign({}, z, (t = {}, t[w] = C ? d + "px" : "", t[g] = y ? v + "px" : "", t.transform = "", t));
}
function c1(e) {
  var t = e.state, n = e.options, a = n.gpuAcceleration, r = a === void 0 ? true : a, o = n.adaptive, l = o === void 0 ? true : o, s = n.roundOffsets, u = s === void 0 ? true : s, c = { placement: on(t.placement), variation: _a(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ri(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: l, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ri(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var pc = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: c1, data: {} };
var yr = { passive: true };
function d1(e) {
  var t = e.state, n = e.instance, a = e.options, r = a.scroll, o = r === void 0 ? true : r, l = a.resize, s = l === void 0 ? true : l, u = tn(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && c.forEach(function(f) {
    f.addEventListener("scroll", n.update, yr);
  }), s && u.addEventListener("resize", n.update, yr), function() {
    o && c.forEach(function(f) {
      f.removeEventListener("scroll", n.update, yr);
    }), s && u.removeEventListener("resize", n.update, yr);
  };
}
var vc = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: d1, data: {} };
var f1 = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Rr(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return f1[t];
  });
}
var p1 = { start: "end", end: "start" };
function oi(e) {
  return e.replace(/start|end/g, function(t) {
    return p1[t];
  });
}
function ql(e) {
  var t = tn(e), n = t.pageXOffset, a = t.pageYOffset;
  return { scrollLeft: n, scrollTop: a };
}
function Yl(e) {
  return ka(zn(e)).left + ql(e).scrollLeft;
}
function v1(e) {
  var t = tn(e), n = zn(e), a = t.visualViewport, r = n.clientWidth, o = n.clientHeight, l = 0, s = 0;
  return a && (r = a.width, o = a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = a.offsetLeft, s = a.offsetTop)), { width: r, height: o, x: l + Yl(e), y: s };
}
function h1(e) {
  var t, n = zn(e), a = ql(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, o = Gn(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), l = Gn(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -a.scrollLeft + Yl(e), u = -a.scrollTop;
  return En(r || n).direction === "rtl" && (s += Gn(n.clientWidth, r ? r.clientWidth : 0) - o), { width: o, height: l, x: s, y: u };
}
function Ul(e) {
  var t = En(e), n = t.overflow, a = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + a);
}
function hc(e) {
  return ["html", "body", "#document"].indexOf(cn(e)) >= 0 ? e.ownerDocument.body : Kt(e) && Ul(e) ? e : hc(fo(e));
}
function za(e, t) {
  var n;
  t === void 0 && (t = []);
  var a = hc(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = tn(a), l = r ? [o].concat(o.visualViewport || [], Ul(a) ? a : []) : a, s = t.concat(l);
  return r ? s : s.concat(za(fo(l)));
}
function Go(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function m1(e) {
  var t = ka(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function li(e, t) {
  return t === sc ? Go(v1(e)) : Ca(t) ? m1(t) : Go(h1(zn(e)));
}
function g1(e) {
  var t = za(fo(e)), n = ["absolute", "fixed"].indexOf(En(e).position) >= 0, a = n && Kt(e) ? vr(e) : e;
  return Ca(a) ? t.filter(function(r) {
    return Ca(r) && uc(r, a) && cn(r) !== "body";
  }) : [];
}
function b1(e, t, n) {
  var a = t === "clippingParents" ? g1(e) : [].concat(t), r = [].concat(a, [n]), o = r[0], l = r.reduce(function(s, u) {
    var c = li(e, u);
    return s.top = Gn(c.top, s.top), s.right = Xr(c.right, s.right), s.bottom = Xr(c.bottom, s.bottom), s.left = Gn(c.left, s.left), s;
  }, li(e, o));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function mc(e) {
  var t = e.reference, n = e.element, a = e.placement, r = a ? on(a) : null, o = a ? _a(a) : null, l = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, u;
  switch (r) {
    case At:
      u = { x: l, y: t.y - n.height };
      break;
    case Yt:
      u = { x: l, y: t.y + t.height };
      break;
    case Ut:
      u = { x: t.x + t.width, y: s };
      break;
    case Nt:
      u = { x: t.x - n.width, y: s };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = r ? Kl(r) : null;
  if (c != null) {
    var f = c === "y" ? "height" : "width";
    switch (o) {
      case wa:
        u[c] = u[c] - (t[f] / 2 - n[f] / 2);
        break;
      case Ja:
        u[c] = u[c] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return u;
}
function Qa(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = a === void 0 ? e.placement : a, o = n.boundary, l = o === void 0 ? V0 : o, s = n.rootBoundary, u = s === void 0 ? sc : s, c = n.elementContext, f = c === void 0 ? La : c, p = n.altBoundary, m = p === void 0 ? false : p, v = n.padding, h3 = v === void 0 ? 0 : v, d = dc(typeof h3 != "number" ? h3 : fc(h3, pr)), b = f === La ? H0 : La, y = e.rects.popper, C = e.elements[m ? b : f], g = b1(Ca(C) ? C : C.contextElement || zn(e.elements.popper), l, u), w = ka(e.elements.reference), k = mc({ reference: w, element: y, strategy: "absolute", placement: r }), S = Go(Object.assign({}, y, k)), _ = f === La ? S : w, P = { top: g.top - _.top + d.top, bottom: _.bottom - g.bottom + d.bottom, left: g.left - _.left + d.left, right: _.right - g.right + d.right }, A = e.modifiersData.offset;
  if (f === La && A) {
    var B = A[r];
    Object.keys(P).forEach(function(z) {
      var I = [Ut, Yt].indexOf(z) >= 0 ? 1 : -1, N = [At, Yt].indexOf(z) >= 0 ? "y" : "x";
      P[z] += B[N] * I;
    });
  }
  return P;
}
function y1(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = n.boundary, o = n.rootBoundary, l = n.padding, s = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? co : u, f = _a(a), p = f ? s ? ni : ni.filter(function(h3) {
    return _a(h3) === f;
  }) : pr, m = p.filter(function(h3) {
    return c.indexOf(h3) >= 0;
  });
  m.length === 0 && (m = p);
  var v = m.reduce(function(h3, d) {
    return h3[d] = Qa(e, { placement: d, boundary: r, rootBoundary: o, padding: l })[on(d)], h3;
  }, {});
  return Object.keys(v).sort(function(h3, d) {
    return v[h3] - v[d];
  });
}
function w1(e) {
  if (on(e) === Hl)
    return [];
  var t = Rr(e);
  return [oi(e), t, oi(t)];
}
function C1(e) {
  var t = e.state, n = e.options, a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (var r = n.mainAxis, o = r === void 0 ? true : r, l = n.altAxis, s = l === void 0 ? true : l, u = n.fallbackPlacements, c = n.padding, f = n.boundary, p = n.rootBoundary, m = n.altBoundary, v = n.flipVariations, h3 = v === void 0 ? true : v, d = n.allowedAutoPlacements, b = t.options.placement, y = on(b), C = y === b, g = u || (C || !h3 ? [Rr(b)] : w1(b)), w = [b].concat(g).reduce(function(ne, me) {
      return ne.concat(on(me) === Hl ? y1(t, { placement: me, boundary: f, rootBoundary: p, padding: c, flipVariations: h3, allowedAutoPlacements: d }) : me);
    }, []), k = t.rects.reference, S = t.rects.popper, _ = /* @__PURE__ */ new Map(), P = true, A = w[0], B = 0; B < w.length; B++) {
      var z = w[B], I = on(z), N = _a(z) === wa, L = [At, Yt].indexOf(I) >= 0, H = L ? "width" : "height", K = Qa(t, { placement: z, boundary: f, rootBoundary: p, altBoundary: m, padding: c }), M = L ? N ? Ut : Nt : N ? Yt : At;
      k[H] > S[H] && (M = Rr(M));
      var W = Rr(M), E = [];
      if (o && E.push(K[I] <= 0), s && E.push(K[M] <= 0, K[W] <= 0), E.every(function(ne) {
        return ne;
      })) {
        A = z, P = false;
        break;
      }
      _.set(z, E);
    }
    if (P)
      for (var V = h3 ? 3 : 1, G = function(ne) {
        var me = w.find(function(ge) {
          var se = _.get(ge);
          if (se)
            return se.slice(0, ne).every(function(le) {
              return le;
            });
        });
        if (me)
          return A = me, "break";
      }, F = V; F > 0; F--) {
        var X = G(F);
        if (X === "break")
          break;
      }
    t.placement !== A && (t.modifiersData[a]._skip = true, t.placement = A, t.reset = true);
  }
}
var S1 = { name: "flip", enabled: true, phase: "main", fn: C1, requiresIfExists: ["offset"], data: { _skip: false } };
function si(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function ii(e) {
  return [At, Ut, Yt, Nt].some(function(t) {
    return e[t] >= 0;
  });
}
function k1(e) {
  var t = e.state, n = e.name, a = t.rects.reference, r = t.rects.popper, o = t.modifiersData.preventOverflow, l = Qa(t, { elementContext: "reference" }), s = Qa(t, { altBoundary: true }), u = si(l, a), c = si(s, r, o), f = ii(u), p = ii(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: f, hasPopperEscaped: p }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": p });
}
var _1 = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: k1 };
function $1(e, t, n) {
  var a = on(e), r = [Nt, At].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, l = o[0], s = o[1];
  return l = l || 0, s = (s || 0) * r, [Nt, Ut].indexOf(a) >= 0 ? { x: s, y: l } : { x: l, y: s };
}
function E1(e) {
  var t = e.state, n = e.options, a = e.name, r = n.offset, o = r === void 0 ? [0, 0] : r, l = co.reduce(function(f, p) {
    return f[p] = $1(p, t.rects, o), f;
  }, {}), s = l[t.placement], u = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[a] = l;
}
var T1 = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: E1 };
function O1(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = mc({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var gc = { name: "popperOffsets", enabled: true, phase: "read", fn: O1, data: {} };
function P1(e) {
  return e === "x" ? "y" : "x";
}
function x1(e) {
  var t = e.state, n = e.options, a = e.name, r = n.mainAxis, o = r === void 0 ? true : r, l = n.altAxis, s = l === void 0 ? false : l, u = n.boundary, c = n.rootBoundary, f = n.altBoundary, p = n.padding, m = n.tether, v = m === void 0 ? true : m, h3 = n.tetherOffset, d = h3 === void 0 ? 0 : h3, b = Qa(t, { boundary: u, rootBoundary: c, padding: p, altBoundary: f }), y = on(t.placement), C = _a(t.placement), g = !C, w = Kl(y), k = P1(w), S = t.modifiersData.popperOffsets, _ = t.rects.reference, P = t.rects.popper, A = typeof d == "function" ? d(Object.assign({}, t.rects, { placement: t.placement })) : d, B = typeof A == "number" ? { mainAxis: A, altAxis: A } : Object.assign({ mainAxis: 0, altAxis: 0 }, A), z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, I = { x: 0, y: 0 };
  if (S) {
    if (o) {
      var N, L = w === "y" ? At : Nt, H = w === "y" ? Yt : Ut, K = w === "y" ? "height" : "width", M = S[w], W = M + b[L], E = M - b[H], V = v ? -P[K] / 2 : 0, G = C === wa ? _[K] : P[K], F = C === wa ? -P[K] : -_[K], X = t.elements.arrow, ne = v && X ? jl(X) : { width: 0, height: 0 }, me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : cc(), ge = me[L], se = me[H], le = Ba(0, _[K], ne[K]), ce = g ? _[K] / 2 - V - le - ge - B.mainAxis : G - le - ge - B.mainAxis, he = g ? -_[K] / 2 + V + le + se + B.mainAxis : F + le + se + B.mainAxis, Te = t.elements.arrow && vr(t.elements.arrow), Me = Te ? w === "y" ? Te.clientTop || 0 : Te.clientLeft || 0 : 0, We = (N = z == null ? void 0 : z[w]) != null ? N : 0, je = M + ce - We - Me, Ze = M + he - We, Ke = Ba(v ? Xr(W, je) : W, M, v ? Gn(E, Ze) : E);
      S[w] = Ke, I[w] = Ke - M;
    }
    if (s) {
      var rt, ht = w === "x" ? At : Nt, it = w === "x" ? Yt : Ut, ke = S[k], ct = k === "y" ? "height" : "width", dt = ke + b[ht], ut = ke - b[it], Je = [At, Nt].indexOf(y) !== -1, re = (rt = z == null ? void 0 : z[k]) != null ? rt : 0, Ee = Je ? dt : ke - _[ct] - P[ct] - re + B.altAxis, De = Je ? ke + _[ct] + P[ct] - re - B.altAxis : ut, Qe = v && Je ? a1(Ee, ke, De) : Ba(v ? Ee : dt, ke, v ? De : ut);
      S[k] = Qe, I[k] = Qe - ke;
    }
    t.modifiersData[a] = I;
  }
}
var M1 = { name: "preventOverflow", enabled: true, phase: "main", fn: x1, requiresIfExists: ["offset"] };
function A1(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function N1(e) {
  return e === tn(e) || !Kt(e) ? ql(e) : A1(e);
}
function R1(e) {
  var t = e.getBoundingClientRect(), n = Sa(t.width) / e.offsetWidth || 1, a = Sa(t.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function L1(e, t, n) {
  n === void 0 && (n = false);
  var a = Kt(t), r = Kt(t) && R1(t), o = zn(t), l = ka(e, r), s = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (a || !a && !n) && ((cn(t) !== "body" || Ul(o)) && (s = N1(t)), Kt(t) ? (u = ka(t, true), u.x += t.clientLeft, u.y += t.clientTop) : o && (u.x = Yl(o))), { x: l.left + s.scrollLeft - u.x, y: l.top + s.scrollTop - u.y, width: l.width, height: l.height };
}
function F1(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function r(o) {
    n.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(s) {
      if (!n.has(s)) {
        var u = t.get(s);
        u && r(u);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || r(o);
  }), a;
}
function I1(e) {
  var t = F1(e);
  return J0.reduce(function(n, a) {
    return n.concat(t.filter(function(r) {
      return r.phase === a;
    }));
  }, []);
}
function D1(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function B1(e) {
  var t = e.reduce(function(n, a) {
    var r = n[a.name];
    return n[a.name] = r ? Object.assign({}, r, a, { options: Object.assign({}, r.options, a.options), data: Object.assign({}, r.data, a.data) }) : a, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var ui = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ci() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Gl(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, a = n === void 0 ? [] : n, r = t.defaultOptions, o = r === void 0 ? ui : r;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ui, o), modifiersData: {}, elements: { reference: l, popper: s }, attributes: {}, styles: {} }, f = [], p = false, m = { state: c, setOptions: function(d) {
      var b = typeof d == "function" ? d(c.options) : d;
      h3(), c.options = Object.assign({}, o, c.options, b), c.scrollParents = { reference: Ca(l) ? za(l) : l.contextElement ? za(l.contextElement) : [], popper: za(s) };
      var y = I1(B1([].concat(a, c.options.modifiers)));
      return c.orderedModifiers = y.filter(function(C) {
        return C.enabled;
      }), v(), m.update();
    }, forceUpdate: function() {
      if (!p) {
        var d = c.elements, b = d.reference, y = d.popper;
        if (ci(b, y)) {
          c.rects = { reference: L1(b, vr(y), c.options.strategy === "fixed"), popper: jl(y) }, c.reset = false, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
            return c.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var C = 0; C < c.orderedModifiers.length; C++) {
            if (c.reset === true) {
              c.reset = false, C = -1;
              continue;
            }
            var g = c.orderedModifiers[C], w = g.fn, k = g.options, S = k === void 0 ? {} : k, _ = g.name;
            typeof w == "function" && (c = w({ state: c, options: S, name: _, instance: m }) || c);
          }
        }
      }
    }, update: D1(function() {
      return new Promise(function(d) {
        m.forceUpdate(), d(c);
      });
    }), destroy: function() {
      h3(), p = true;
    } };
    if (!ci(l, s))
      return m;
    m.setOptions(u).then(function(d) {
      !p && u.onFirstUpdate && u.onFirstUpdate(d);
    });
    function v() {
      c.orderedModifiers.forEach(function(d) {
        var b = d.name, y = d.options, C = y === void 0 ? {} : y, g = d.effect;
        if (typeof g == "function") {
          var w = g({ state: c, name: b, instance: m, options: C }), k = function() {
          };
          f.push(w || k);
        }
      });
    }
    function h3() {
      f.forEach(function(d) {
        return d();
      }), f = [];
    }
    return m;
  };
}
Gl();
var z1 = [vc, gc, pc, ic];
Gl({ defaultModifiers: z1 });
var V1 = [vc, gc, pc, ic, T1, S1, M1, s1, _1];
var bc = Gl({ defaultModifiers: V1 });
var H1 = (e, t, n = {}) => {
  const a = {
    name: "updateState",
    enabled: true,
    phase: "write",
    fn: ({ state: u }) => {
      const c = W1(u);
      Object.assign(l.value, c);
    },
    requires: ["computeStyles"]
  }, r = computed(() => {
    const { onFirstUpdate: u, placement: c, strategy: f, modifiers: p } = unref(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: f || "absolute",
      modifiers: [
        ...p || [],
        a,
        { name: "applyStyles", enabled: false }
      ]
    };
  }), o = shallowRef(), l = ref({
    styles: {
      popper: {
        position: unref(r).strategy,
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
  return watch(r, (u) => {
    const c = unref(o);
    c && c.setOptions(u);
  }, {
    deep: true
  }), watch([e, t], ([u, c]) => {
    s(), !(!u || !c) && (o.value = bc(u, c, unref(r)));
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
function W1(e) {
  const t = Object.keys(e.elements), n = Gr(t.map((r) => [r, e.styles[r] || {}])), a = Gr(t.map((r) => [r, e.attributes[r]]));
  return {
    styles: n,
    attributes: a
  };
}
function di() {
  let e;
  const t = (a, r) => {
    n(), e = window.setTimeout(a, r);
  }, n = () => window.clearTimeout(e);
  return kl(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
var Xo = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
var j1 = Symbol("elIdInjection");
var yc = () => getCurrentInstance() ? inject(j1, Xo) : Xo;
var po = (e) => {
  const t = yc();
  !at && t === Xo && nt("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Vl();
  return computed(() => unref(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
var sa = [];
var fi = (e) => {
  const t = e;
  t.key === Fe.esc && sa.forEach((n) => n(t));
};
var K1 = (e) => {
  onMounted(() => {
    sa.length === 0 && document.addEventListener("keydown", fi), at && sa.push(e);
  }), onBeforeUnmount(() => {
    sa = sa.filter((t) => t !== e), sa.length === 0 && at && document.removeEventListener("keydown", fi);
  });
};
var pi;
var wc = () => {
  const e = Vl(), t = yc(), n = computed(() => `${e.value}-popper-container-${t.prefix}`), a = computed(() => `#${n.value}`);
  return {
    id: n,
    selector: a
  };
};
var q1 = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
};
var Y1 = () => {
  const { id: e, selector: t } = wc();
  return onBeforeMount(() => {
    at && (!pi && !document.body.querySelector(t.value)) && (pi = q1(e.value));
  }), {
    id: e,
    selector: t
  };
};
var U1 = Pe({
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
var Cc = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: a,
  close: r
}) => {
  const { registerTimeout: o } = di(), {
    registerTimeout: l,
    cancelTimeout: s
  } = di();
  return {
    onOpen: (f) => {
      o(() => {
        a(f);
        const p = unref(n);
        ot(p) && p > 0 && l(() => {
          r(f);
        }, p);
      }, unref(e));
    },
    onClose: (f) => {
      s(), o(() => {
        r(f);
      }, unref(t));
    }
  };
};
var Sc = Symbol("elForwardRef");
var G1 = (e) => {
  provide(Sc, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
};
var X1 = (e) => ({
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
var vi = ref(0);
var Z1 = 2e3;
var J1 = Symbol("zIndexContextKey");
var kc = (e) => {
  const t = e || inject(J1, void 0), n = computed(() => {
    const o = unref(t);
    return ot(o) ? o : Z1;
  }), a = computed(() => n.value + vi.value);
  return {
    initialZIndex: n,
    currentZIndex: a,
    nextZIndex: () => (vi.value++, a.value)
  };
};
function Q1(e) {
  const t = ref();
  function n() {
    if (e.value == null)
      return;
    const { selectionStart: r, selectionEnd: o, value: l } = e.value;
    if (r == null || o == null)
      return;
    const s = l.slice(0, Math.max(0, r)), u = l.slice(Math.max(0, o));
    t.value = {
      selectionStart: r,
      selectionEnd: o,
      value: l,
      beforeTxt: s,
      afterTxt: u
    };
  }
  function a() {
    if (e.value == null || t.value == null)
      return;
    const { value: r } = e.value, { beforeTxt: o, afterTxt: l, selectionStart: s } = t.value;
    if (o == null || l == null || s == null)
      return;
    let u = r.length;
    if (r.endsWith(l))
      u = r.length - l.length;
    else if (r.startsWith(o))
      u = o.length;
    else {
      const c = o[s - 1], f = r.indexOf(c, s - 1);
      f !== -1 && (u = f + 1);
    }
    e.value.setSelectionRange(u, u);
  }
  return [n, a];
}
var ew = (e, t, n) => Nr(e.subTree).filter((o) => {
  var l;
  return isVNode(o) && ((l = o.type) == null ? void 0 : l.name) === t && !!o.component;
}).map((o) => o.component.uid).map((o) => n[o]).filter((o) => !!o);
var tw = (e, t) => {
  const n = {}, a = shallowRef([]);
  return {
    children: a,
    addChild: (l) => {
      n[l.uid] = l, a.value = ew(e, t, n);
    },
    removeChild: (l) => {
      delete n[l], a.value = a.value.filter((s) => s.uid !== l);
    }
  };
};
var xn = uo({
  type: String,
  values: ra,
  required: false
});
var nw = Symbol("size");
var aw = () => {
  const e = inject(nw, {});
  return computed(() => unref(e.size) || "");
};
function rw(e, { afterFocus: t, afterBlur: n } = {}) {
  const a = getCurrentInstance(), { emit: r } = a, o = shallowRef(), l = ref(false), s = (f) => {
    l.value || (l.value = true, r("focus", f), t == null || t());
  }, u = (f) => {
    var p;
    f.relatedTarget && ((p = o.value) != null && p.contains(f.relatedTarget)) || (l.value = false, r("blur", f), n == null || n());
  }, c = () => {
    var f;
    (f = e.value) == null || f.focus();
  };
  return watch(o, (f) => {
    f && (f.setAttribute("role", "button"), f.setAttribute("tabindex", "-1"));
  }), jt(o, "click", c), {
    wrapperRef: o,
    isFocused: l,
    handleFocus: s,
    handleBlur: u
  };
}
var ow = Symbol();
var hi = ref();
function lw(e, t = void 0) {
  const n = getCurrentInstance() ? inject(ow, hi) : hi;
  return e ? computed(() => {
    var a, r;
    return (r = (a = n.value) == null ? void 0 : a[e]) != null ? r : t;
  }) : n;
}
var xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
};
var sw = Pe({
  size: {
    type: be([Number, String])
  },
  color: {
    type: String
  }
});
var iw = defineComponent({
  name: "ElIcon",
  inheritAttrs: false
});
var uw = defineComponent({
  ...iw,
  props: sw,
  setup(e) {
    const t = e, n = ye("icon"), a = computed(() => {
      const { size: r, color: o } = t;
      return !r && !o ? {} : {
        fontSize: $n(r) ? void 0 : Xa(r),
        "--color": o
      };
    });
    return (r, o) => (openBlock(), createElementBlock("i", mergeProps({
      class: unref(n).b(),
      style: unref(a)
    }, r.$attrs), [
      renderSlot(r.$slots, "default")
    ], 16));
  }
});
var cw = xe(uw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
var Re = Lt(cw);
var xa = Symbol("formContextKey");
var Qn = Symbol("formItemContextKey");
var Gt = (e, t = {}) => {
  const n = ref(void 0), a = t.prop ? n : lc("size"), r = t.global ? n : aw(), o = t.form ? { size: void 0 } : inject(xa, void 0), l = t.formItem ? { size: void 0 } : inject(Qn, void 0);
  return computed(() => a.value || unref(e) || (l == null ? void 0 : l.size) || (o == null ? void 0 : o.size) || r.value || "");
};
var hr = (e) => {
  const t = lc("disabled"), n = inject(xa, void 0);
  return computed(() => t.value || unref(e) || (n == null ? void 0 : n.disabled) || false);
};
var Mn = () => {
  const e = inject(xa, void 0), t = inject(Qn, void 0);
  return {
    form: e,
    formItem: t
  };
};
var vo = (e, {
  formItemContext: t,
  disableIdGeneration: n,
  disableIdManagement: a
}) => {
  n || (n = ref(false)), a || (a = ref(false));
  const r = ref();
  let o;
  const l = computed(() => {
    var s;
    return !!(!e.label && t && t.inputIds && ((s = t.inputIds) == null ? void 0 : s.length) <= 1);
  });
  return onMounted(() => {
    o = watch([toRef(e, "id"), n], ([s, u]) => {
      const c = s ?? (u ? void 0 : po().value);
      c !== r.value && (t != null && t.removeInputId && (r.value && t.removeInputId(r.value), !(a != null && a.value) && !u && c && t.addInputId(c)), r.value = c);
    }, { immediate: true });
  }), onUnmounted(() => {
    o && o(), t != null && t.removeInputId && r.value && t.removeInputId(r.value);
  }), {
    isLabeledByFormItem: l,
    inputId: r
  };
};
var dw = Pe({
  size: {
    type: String,
    values: ra
  },
  disabled: Boolean
});
var fw = Pe({
  ...dw,
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
var pw = {
  validate: (e, t, n) => (Ue(e) || St(e)) && Qt(t) && St(n)
};
var vw = "ElForm";
function hw() {
  const e = ref([]), t = computed(() => {
    if (!e.value.length)
      return "0";
    const o = Math.max(...e.value);
    return o ? `${o}px` : "";
  });
  function n(o) {
    const l = e.value.indexOf(o);
    return l === -1 && t.value === "0" && nt(vw, `unexpected width ${o}`), l;
  }
  function a(o, l) {
    if (o && l) {
      const s = n(l);
      e.value.splice(s, 1, o);
    } else
      o && e.value.push(o);
  }
  function r(o) {
    const l = n(o);
    l > -1 && e.value.splice(l, 1);
  }
  return {
    autoLabelWidth: t,
    registerLabelWidth: a,
    deregisterLabelWidth: r
  };
}
var wr = (e, t) => {
  const n = zo(t);
  return n.length > 0 ? e.filter((a) => a.prop && n.includes(a.prop)) : e;
};
var Lr = "ElForm";
var mw = defineComponent({
  name: Lr
});
var gw = defineComponent({
  ...mw,
  props: fw,
  emits: pw,
  setup(e, { expose: t, emit: n }) {
    const a = e, r = [], o = Gt(), l = ye("form"), s = computed(() => {
      const { labelPosition: C, inline: g } = a;
      return [
        l.b(),
        l.m(o.value || "default"),
        {
          [l.m(`label-${C}`)]: C,
          [l.m("inline")]: g
        }
      ];
    }), u = (C) => {
      r.push(C);
    }, c = (C) => {
      C.prop && r.splice(r.indexOf(C), 1);
    }, f = (C = []) => {
      if (!a.model) {
        nt(Lr, "model is required for resetFields to work.");
        return;
      }
      wr(r, C).forEach((g) => g.resetField());
    }, p = (C = []) => {
      wr(r, C).forEach((g) => g.clearValidate());
    }, m = computed(() => {
      const C = !!a.model;
      return C || nt(Lr, "model is required for validate to work."), C;
    }), v = (C) => {
      if (r.length === 0)
        return [];
      const g = wr(r, C);
      return g.length ? g : (nt(Lr, "please pass correct props!"), []);
    }, h3 = async (C) => b(void 0, C), d = async (C = []) => {
      if (!m.value)
        return false;
      const g = v(C);
      if (g.length === 0)
        return true;
      let w = {};
      for (const k of g)
        try {
          await k.validate("");
        } catch (S) {
          w = {
            ...w,
            ...S
          };
        }
      return Object.keys(w).length === 0 ? true : Promise.reject(w);
    }, b = async (C = [], g) => {
      const w = !ft(g);
      try {
        const k = await d(C);
        return k === true && (g == null || g(k)), k;
      } catch (k) {
        if (k instanceof Error)
          throw k;
        const S = k;
        return a.scrollToError && y(Object.keys(S)[0]), g == null || g(false, S), w && Promise.reject(S);
      }
    }, y = (C) => {
      var g;
      const w = wr(r, C)[0];
      w && ((g = w.$el) == null || g.scrollIntoView(a.scrollIntoViewOptions));
    };
    return watch(() => a.rules, () => {
      a.validateOnRuleChange && h3().catch((C) => nt(C));
    }, { deep: true }), provide(xa, reactive({
      ...toRefs(a),
      emit: n,
      resetFields: f,
      clearValidate: p,
      validateField: b,
      addField: u,
      removeField: c,
      ...hw()
    })), t({
      validate: h3,
      validateField: b,
      resetFields: f,
      clearValidate: p,
      scrollToField: y
    }), (C, g) => (openBlock(), createElementBlock("form", {
      class: normalizeClass(unref(s))
    }, [
      renderSlot(C.$slots, "default")
    ], 2));
  }
});
var bw = xe(gw, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);
function Kn() {
  return Kn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, Kn.apply(this, arguments);
}
function yw(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, er(e, t);
}
function Zo(e) {
  return Zo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Zo(e);
}
function er(e, t) {
  return er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, er(e, t);
}
function ww() {
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
function Fr(e, t, n) {
  return ww() ? Fr = Reflect.construct.bind() : Fr = function(r, o, l) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(r, s), c = new u();
    return l && er(c, l.prototype), c;
  }, Fr.apply(null, arguments);
}
function Cw(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Jo(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Jo = function(a) {
    if (a === null || !Cw(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(a))
        return t.get(a);
      t.set(a, r);
    }
    function r() {
      return Fr(a, arguments, Zo(this).constructor);
    }
    return r.prototype = Object.create(a.prototype, {
      constructor: {
        value: r,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), er(r, a);
  }, Jo(e);
}
var Sw = /%[sdj%]/g;
var _c = function() {
};
typeof process < "u" && process.env && true && typeof window < "u" && typeof document < "u" && (_c = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(a) {
    return typeof a == "string";
  }) && console.warn(t, n);
});
function Qo(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(n) {
    var a = n.field;
    t[a] = t[a] || [], t[a].push(n);
  }), t;
}
function Dt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  var r = 0, o = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var l = e.replace(Sw, function(s) {
      if (s === "%%")
        return "%";
      if (r >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[r++]);
        case "%d":
          return Number(n[r++]);
        case "%j":
          try {
            return JSON.stringify(n[r++]);
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
function kw(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function bt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || kw(t) && typeof e == "string" && !e);
}
function _w(e, t, n) {
  var a = [], r = 0, o = e.length;
  function l(s) {
    a.push.apply(a, s || []), r++, r === o && n(a);
  }
  e.forEach(function(s) {
    t(s, l);
  });
}
function mi(e, t, n) {
  var a = 0, r = e.length;
  function o(l) {
    if (l && l.length) {
      n(l);
      return;
    }
    var s = a;
    a = a + 1, s < r ? t(e[s], o) : n([]);
  }
  o([]);
}
function $w(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, e[n] || []);
  }), t;
}
var gi = function(e) {
  yw(t, e);
  function t(n, a) {
    var r;
    return r = e.call(this, "Async Validation Error") || this, r.errors = n, r.fields = a, r;
  }
  return t;
}(Jo(Error));
function Ew(e, t, n, a, r) {
  if (t.first) {
    var o = new Promise(function(m, v) {
      var h3 = function(y) {
        return a(y), y.length ? v(new gi(y, Qo(y))) : m(r);
      }, d = $w(e);
      mi(d, n, h3);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var l = t.firstFields === true ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), u = s.length, c = 0, f = [], p = new Promise(function(m, v) {
    var h3 = function(b) {
      if (f.push.apply(f, b), c++, c === u)
        return a(f), f.length ? v(new gi(f, Qo(f))) : m(r);
    };
    s.length || (a(f), m(r)), s.forEach(function(d) {
      var b = e[d];
      l.indexOf(d) !== -1 ? mi(b, n, h3) : _w(b, n, h3);
    });
  });
  return p.catch(function(m) {
    return m;
  }), p;
}
function Tw(e) {
  return !!(e && e.message !== void 0);
}
function Ow(e, t) {
  for (var n = e, a = 0; a < t.length; a++) {
    if (n == null)
      return n;
    n = n[t[a]];
  }
  return n;
}
function bi(e, t) {
  return function(n) {
    var a;
    return e.fullFields ? a = Ow(t, e.fullFields) : a = t[n.field || e.fullField], Tw(n) ? (n.field = n.field || e.fullField, n.fieldValue = a, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: a,
      field: n.field || e.fullField
    };
  };
}
function yi(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var a = t[n];
        typeof a == "object" && typeof e[n] == "object" ? e[n] = Kn({}, e[n], a) : e[n] = a;
      }
  }
  return e;
}
var $c = function(t, n, a, r, o, l) {
  t.required && (!a.hasOwnProperty(t.field) || bt(n, l || t.type)) && r.push(Dt(o.messages.required, t.fullField));
};
var Pw = function(t, n, a, r, o) {
  (/^\s+$/.test(n) || n === "") && r.push(Dt(o.messages.whitespace, t.fullField));
};
var Cr;
var xw = function() {
  if (Cr)
    return Cr;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", a = "[a-fA-F\\d]{1,4}", r = (`
(?:
(?:` + a + ":){7}(?:" + a + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + a + ":){6}(?:" + n + "|:" + a + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + a + ":){5}(?::" + n + "|(?::" + a + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + a + ":){4}(?:(?::" + a + "){0,1}:" + n + "|(?::" + a + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + a + ":){3}(?:(?::" + a + "){0,2}:" + n + "|(?::" + a + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + a + ":){2}(?:(?::" + a + "){0,3}:" + n + "|(?::" + a + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + a + ":){1}(?:(?::" + a + "){0,4}:" + n + "|(?::" + a + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + a + "){0,5}:" + n + "|(?::" + a + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + r + "$)"), l = new RegExp("^" + n + "$"), s = new RegExp("^" + r + "$"), u = function(w) {
    return w && w.exact ? o : new RegExp("(?:" + t(w) + n + t(w) + ")|(?:" + t(w) + r + t(w) + ")", "g");
  };
  u.v4 = function(g) {
    return g && g.exact ? l : new RegExp("" + t(g) + n + t(g), "g");
  }, u.v6 = function(g) {
    return g && g.exact ? s : new RegExp("" + t(g) + r + t(g), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", p = u.v4().source, m = u.v6().source, v = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h3 = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", d = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", y = '(?:[/?#][^\\s"]*)?', C = "(?:" + c + "|www\\.)" + f + "(?:localhost|" + p + "|" + m + "|" + v + h3 + d + ")" + b + y;
  return Cr = new RegExp("(?:^" + C + "$)", "i"), Cr;
};
var wi = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var Fa = {
  integer: function(t) {
    return Fa.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Fa.number(t) && !Fa.integer(t);
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
    return typeof t == "object" && !Fa.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(wi.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(xw());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(wi.hex);
  }
};
var Mw = function(t, n, a, r, o) {
  if (t.required && n === void 0) {
    $c(t, n, a, r, o);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? Fa[s](n) || r.push(Dt(o.messages.types[s], t.fullField, t.type)) : s && typeof n !== t.type && r.push(Dt(o.messages.types[s], t.fullField, t.type));
};
var Aw = function(t, n, a, r, o) {
  var l = typeof t.len == "number", s = typeof t.min == "number", u = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, f = n, p = null, m = typeof n == "number", v = typeof n == "string", h3 = Array.isArray(n);
  if (m ? p = "number" : v ? p = "string" : h3 && (p = "array"), !p)
    return false;
  h3 && (f = n.length), v && (f = n.replace(c, "_").length), l ? f !== t.len && r.push(Dt(o.messages[p].len, t.fullField, t.len)) : s && !u && f < t.min ? r.push(Dt(o.messages[p].min, t.fullField, t.min)) : u && !s && f > t.max ? r.push(Dt(o.messages[p].max, t.fullField, t.max)) : s && u && (f < t.min || f > t.max) && r.push(Dt(o.messages[p].range, t.fullField, t.min, t.max));
};
var oa = "enum";
var Nw = function(t, n, a, r, o) {
  t[oa] = Array.isArray(t[oa]) ? t[oa] : [], t[oa].indexOf(n) === -1 && r.push(Dt(o.messages[oa], t.fullField, t[oa].join(", ")));
};
var Rw = function(t, n, a, r, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || r.push(Dt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(n) || r.push(Dt(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
};
var ze = {
  required: $c,
  whitespace: Pw,
  type: Mw,
  range: Aw,
  enum: Nw,
  pattern: Rw
};
var Lw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "string") && !t.required)
      return a();
    ze.required(t, n, r, l, o, "string"), bt(n, "string") || (ze.type(t, n, r, l, o), ze.range(t, n, r, l, o), ze.pattern(t, n, r, l, o), t.whitespace === true && ze.whitespace(t, n, r, l, o));
  }
  a(l);
};
var Fw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), n !== void 0 && ze.type(t, n, r, l, o);
  }
  a(l);
};
var Iw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), n !== void 0 && (ze.type(t, n, r, l, o), ze.range(t, n, r, l, o));
  }
  a(l);
};
var Dw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), n !== void 0 && ze.type(t, n, r, l, o);
  }
  a(l);
};
var Bw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), bt(n) || ze.type(t, n, r, l, o);
  }
  a(l);
};
var zw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), n !== void 0 && (ze.type(t, n, r, l, o), ze.range(t, n, r, l, o));
  }
  a(l);
};
var Vw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), n !== void 0 && (ze.type(t, n, r, l, o), ze.range(t, n, r, l, o));
  }
  a(l);
};
var Hw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return a();
    ze.required(t, n, r, l, o, "array"), n != null && (ze.type(t, n, r, l, o), ze.range(t, n, r, l, o));
  }
  a(l);
};
var Ww = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), n !== void 0 && ze.type(t, n, r, l, o);
  }
  a(l);
};
var jw = "enum";
var Kw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o), n !== void 0 && ze[jw](t, n, r, l, o);
  }
  a(l);
};
var qw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "string") && !t.required)
      return a();
    ze.required(t, n, r, l, o), bt(n, "string") || ze.pattern(t, n, r, l, o);
  }
  a(l);
};
var Yw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n, "date") && !t.required)
      return a();
    if (ze.required(t, n, r, l, o), !bt(n, "date")) {
      var u;
      n instanceof Date ? u = n : u = new Date(n), ze.type(t, u, r, l, o), u && ze.range(t, u.getTime(), r, l, o);
    }
  }
  a(l);
};
var Uw = function(t, n, a, r, o) {
  var l = [], s = Array.isArray(n) ? "array" : typeof n;
  ze.required(t, n, r, l, o, s), a(l);
};
var $o = function(t, n, a, r, o) {
  var l = t.type, s = [], u = t.required || !t.required && r.hasOwnProperty(t.field);
  if (u) {
    if (bt(n, l) && !t.required)
      return a();
    ze.required(t, n, r, s, o, l), bt(n, l) || ze.type(t, n, r, s, o);
  }
  a(s);
};
var Gw = function(t, n, a, r, o) {
  var l = [], s = t.required || !t.required && r.hasOwnProperty(t.field);
  if (s) {
    if (bt(n) && !t.required)
      return a();
    ze.required(t, n, r, l, o);
  }
  a(l);
};
var Va = {
  string: Lw,
  method: Fw,
  number: Iw,
  boolean: Dw,
  regexp: Bw,
  integer: zw,
  float: Vw,
  array: Hw,
  object: Ww,
  enum: Kw,
  pattern: qw,
  date: Yw,
  url: $o,
  hex: $o,
  email: $o,
  required: Uw,
  any: Gw
};
function el() {
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
var tl = el();
var mr = function() {
  function e(n) {
    this.rules = null, this._messages = tl, this.define(n);
  }
  var t = e.prototype;
  return t.define = function(a) {
    var r = this;
    if (!a)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof a != "object" || Array.isArray(a))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(a).forEach(function(o) {
      var l = a[o];
      r.rules[o] = Array.isArray(l) ? l : [l];
    });
  }, t.messages = function(a) {
    return a && (this._messages = yi(el(), a)), this._messages;
  }, t.validate = function(a, r, o) {
    var l = this;
    r === void 0 && (r = {}), o === void 0 && (o = function() {
    });
    var s = a, u = r, c = o;
    if (typeof u == "function" && (c = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, s), Promise.resolve(s);
    function f(d) {
      var b = [], y = {};
      function C(w) {
        if (Array.isArray(w)) {
          var k;
          b = (k = b).concat.apply(k, w);
        } else
          b.push(w);
      }
      for (var g = 0; g < d.length; g++)
        C(d[g]);
      b.length ? (y = Qo(b), c(b, y)) : c(null, s);
    }
    if (u.messages) {
      var p = this.messages();
      p === tl && (p = el()), yi(p, u.messages), u.messages = p;
    } else
      u.messages = this.messages();
    var m = {}, v = u.keys || Object.keys(this.rules);
    v.forEach(function(d) {
      var b = l.rules[d], y = s[d];
      b.forEach(function(C) {
        var g = C;
        typeof g.transform == "function" && (s === a && (s = Kn({}, s)), y = s[d] = g.transform(y)), typeof g == "function" ? g = {
          validator: g
        } : g = Kn({}, g), g.validator = l.getValidationMethod(g), g.validator && (g.field = d, g.fullField = g.fullField || d, g.type = l.getType(g), m[d] = m[d] || [], m[d].push({
          rule: g,
          value: y,
          source: s,
          field: d
        }));
      });
    });
    var h3 = {};
    return Ew(m, u, function(d, b) {
      var y = d.rule, C = (y.type === "object" || y.type === "array") && (typeof y.fields == "object" || typeof y.defaultField == "object");
      C = C && (y.required || !y.required && d.value), y.field = d.field;
      function g(S, _) {
        return Kn({}, _, {
          fullField: y.fullField + "." + S,
          fullFields: y.fullFields ? [].concat(y.fullFields, [S]) : [S]
        });
      }
      function w(S) {
        S === void 0 && (S = []);
        var _ = Array.isArray(S) ? S : [S];
        !u.suppressWarning && _.length && e.warning("async-validator:", _), _.length && y.message !== void 0 && (_ = [].concat(y.message));
        var P = _.map(bi(y, s));
        if (u.first && P.length)
          return h3[y.field] = 1, b(P);
        if (!C)
          b(P);
        else {
          if (y.required && !d.value)
            return y.message !== void 0 ? P = [].concat(y.message).map(bi(y, s)) : u.error && (P = [u.error(y, Dt(u.messages.required, y.field))]), b(P);
          var A = {};
          y.defaultField && Object.keys(d.value).map(function(I) {
            A[I] = y.defaultField;
          }), A = Kn({}, A, d.rule.fields);
          var B = {};
          Object.keys(A).forEach(function(I) {
            var N = A[I], L = Array.isArray(N) ? N : [N];
            B[I] = L.map(g.bind(null, I));
          });
          var z = new e(B);
          z.messages(u.messages), d.rule.options && (d.rule.options.messages = u.messages, d.rule.options.error = u.error), z.validate(d.value, d.rule.options || u, function(I) {
            var N = [];
            P && P.length && N.push.apply(N, P), I && I.length && N.push.apply(N, I), b(N.length ? N : null);
          });
        }
      }
      var k;
      if (y.asyncValidator)
        k = y.asyncValidator(y, d.value, w, d.source, u);
      else if (y.validator) {
        try {
          k = y.validator(y, d.value, w, d.source, u);
        } catch (S) {
          console.error == null || console.error(S), u.suppressValidatorError || setTimeout(function() {
            throw S;
          }, 0), w(S.message);
        }
        k === true ? w() : k === false ? w(typeof y.message == "function" ? y.message(y.fullField || y.field) : y.message || (y.fullField || y.field) + " fails") : k instanceof Array ? w(k) : k instanceof Error && w(k.message);
      }
      k && k.then && k.then(function() {
        return w();
      }, function(S) {
        return w(S);
      });
    }, function(d) {
      f(d);
    }, s);
  }, t.getType = function(a) {
    if (a.type === void 0 && a.pattern instanceof RegExp && (a.type = "pattern"), typeof a.validator != "function" && a.type && !Va.hasOwnProperty(a.type))
      throw new Error(Dt("Unknown rule type %s", a.type));
    return a.type || "string";
  }, t.getValidationMethod = function(a) {
    if (typeof a.validator == "function")
      return a.validator;
    var r = Object.keys(a), o = r.indexOf("message");
    return o !== -1 && r.splice(o, 1), r.length === 1 && r[0] === "required" ? Va.required : Va[this.getType(a)] || void 0;
  }, e;
}();
mr.register = function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Va[t] = n;
};
mr.warning = _c;
mr.messages = tl;
mr.validators = Va;
var Xw = [
  "",
  "error",
  "validating",
  "success"
];
var Zw = Pe({
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
    values: Xw
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
    values: ra
  }
});
var Ci = "ElLabelWrap";
var Jw = defineComponent({
  name: Ci,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(e, {
    slots: t
  }) {
    const n = inject(xa, void 0), a = inject(Qn);
    a || Pa(Ci, "usage: <el-form-item><label-wrap /></el-form-item>");
    const r = ye("form"), o = ref(), l = ref(0), s = () => {
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
    }), ln(computed(() => {
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
        const v = n == null ? void 0 : n.autoLabelWidth, h3 = a == null ? void 0 : a.hasLabel, d = {};
        if (h3 && v && v !== "auto") {
          const b = Math.max(0, Number.parseInt(v, 10) - l.value), y = n.labelPosition === "left" ? "marginRight" : "marginLeft";
          b && (d[y] = `${b}px`);
        }
        return createVNode("div", {
          ref: o,
          class: [r.be("item", "label-wrap")],
          style: d
        }, [(f = t.default) == null ? void 0 : f.call(t)]);
      } else
        return createVNode(Fragment, {
          ref: o
        }, [(p = t.default) == null ? void 0 : p.call(t)]);
    };
  }
});
var Qw = ["role", "aria-labelledby"];
var e2 = defineComponent({
  name: "ElFormItem"
});
var t2 = defineComponent({
  ...e2,
  props: Zw,
  setup(e, { expose: t }) {
    const n = e, a = useSlots(), r = inject(xa, void 0), o = inject(Qn, void 0), l = Gt(void 0, { formItem: false }), s = ye("form-item"), u = po().value, c = ref([]), f = ref(""), p = pf(f, 100), m = ref(""), v = ref();
    let h3, d = false;
    const b = computed(() => {
      if ((r == null ? void 0 : r.labelPosition) === "top")
        return {};
      const se = Xa(n.labelWidth || (r == null ? void 0 : r.labelWidth) || "");
      return se ? { width: se } : {};
    }), y = computed(() => {
      if ((r == null ? void 0 : r.labelPosition) === "top" || r != null && r.inline)
        return {};
      if (!n.label && !n.labelWidth && A)
        return {};
      const se = Xa(n.labelWidth || (r == null ? void 0 : r.labelWidth) || "");
      return !n.label && !a.label ? { marginLeft: se } : {};
    }), C = computed(() => [
      s.b(),
      s.m(l.value),
      s.is("error", f.value === "error"),
      s.is("validating", f.value === "validating"),
      s.is("success", f.value === "success"),
      s.is("required", L.value || n.required),
      s.is("no-asterisk", r == null ? void 0 : r.hideRequiredAsterisk),
      (r == null ? void 0 : r.requireAsteriskPosition) === "right" ? "asterisk-right" : "asterisk-left",
      { [s.m("feedback")]: r == null ? void 0 : r.statusIcon }
    ]), g = computed(() => Qt(n.inlineMessage) ? n.inlineMessage : (r == null ? void 0 : r.inlineMessage) || false), w = computed(() => [
      s.e("error"),
      { [s.em("error", "inline")]: g.value }
    ]), k = computed(() => n.prop ? St(n.prop) ? n.prop : n.prop.join(".") : ""), S = computed(() => !!(n.label || a.label)), _ = computed(() => n.for || c.value.length === 1 ? c.value[0] : void 0), P = computed(() => !_.value && S.value), A = !!o, B = computed(() => {
      const se = r == null ? void 0 : r.model;
      if (!(!se || !n.prop))
        return Ar(se, n.prop).value;
    }), z = computed(() => {
      const { required: se } = n, le = [];
      n.rules && le.push(...zo(n.rules));
      const ce = r == null ? void 0 : r.rules;
      if (ce && n.prop) {
        const he = Ar(ce, n.prop).value;
        he && le.push(...zo(he));
      }
      if (se !== void 0) {
        const he = le.map((Te, Me) => [Te, Me]).filter(([Te]) => Object.keys(Te).includes("required"));
        if (he.length > 0)
          for (const [Te, Me] of he)
            Te.required !== se && (le[Me] = { ...Te, required: se });
        else
          le.push({ required: se });
      }
      return le;
    }), I = computed(() => z.value.length > 0), N = (se) => z.value.filter((ce) => !ce.trigger || !se ? true : Array.isArray(ce.trigger) ? ce.trigger.includes(se) : ce.trigger === se).map(({ trigger: ce, ...he }) => he), L = computed(() => z.value.some((se) => se.required)), H = computed(() => {
      var se;
      return p.value === "error" && n.showMessage && ((se = r == null ? void 0 : r.showMessage) != null ? se : true);
    }), K = computed(() => `${n.label || ""}${(r == null ? void 0 : r.labelSuffix) || ""}`), M = (se) => {
      f.value = se;
    }, W = (se) => {
      var le, ce;
      const { errors: he, fields: Te } = se;
      (!he || !Te) && console.error(se), M("error"), m.value = he ? (ce = (le = he == null ? void 0 : he[0]) == null ? void 0 : le.message) != null ? ce : `${n.prop} is required` : "", r == null || r.emit("validate", n.prop, false, m.value);
    }, E = () => {
      M("success"), r == null || r.emit("validate", n.prop, true, "");
    }, V = async (se) => {
      const le = k.value;
      return new mr({
        [le]: se
      }).validate({ [le]: B.value }, { firstFields: true }).then(() => (E(), true)).catch((he) => (W(he), Promise.reject(he)));
    }, G = async (se, le) => {
      if (d || !n.prop)
        return false;
      const ce = ft(le);
      if (!I.value)
        return le == null || le(false), false;
      const he = N(se);
      return he.length === 0 ? (le == null || le(true), true) : (M("validating"), V(he).then(() => (le == null || le(true), true)).catch((Te) => {
        const { fields: Me } = Te;
        return le == null || le(false, Me), ce ? false : Promise.reject(Me);
      }));
    }, F = () => {
      M(""), m.value = "", d = false;
    }, X = async () => {
      const se = r == null ? void 0 : r.model;
      if (!se || !n.prop)
        return;
      const le = Ar(se, n.prop);
      d = true, le.value = Us(h3), await nextTick(), F(), d = false;
    }, ne = (se) => {
      c.value.includes(se) || c.value.push(se);
    }, me = (se) => {
      c.value = c.value.filter((le) => le !== se);
    };
    watch(() => n.error, (se) => {
      m.value = se || "", M(se ? "error" : "");
    }, { immediate: true }), watch(() => n.validateStatus, (se) => M(se || ""));
    const ge = reactive({
      ...toRefs(n),
      $el: v,
      size: l,
      validateState: f,
      labelId: u,
      inputIds: c,
      isGroup: P,
      hasLabel: S,
      addInputId: ne,
      removeInputId: me,
      resetField: X,
      clearValidate: F,
      validate: G
    });
    return provide(Qn, ge), onMounted(() => {
      n.prop && (r == null || r.addField(ge), h3 = Us(B.value));
    }), onBeforeUnmount(() => {
      r == null || r.removeField(ge);
    }), t({
      size: l,
      validateMessage: m,
      validateState: f,
      validate: G,
      clearValidate: F,
      resetField: X
    }), (se, le) => {
      var ce;
      return openBlock(), createElementBlock("div", {
        ref_key: "formItemRef",
        ref: v,
        class: normalizeClass(unref(C)),
        role: unref(P) ? "group" : void 0,
        "aria-labelledby": unref(P) ? unref(u) : void 0
      }, [
        createVNode(unref(Jw), {
          "is-auto-width": unref(b).width === "auto",
          "update-all": ((ce = unref(r)) == null ? void 0 : ce.labelWidth) === "auto"
        }, {
          default: withCtx(() => [
            unref(S) ? (openBlock(), createBlock(resolveDynamicComponent(unref(_) ? "label" : "div"), {
              key: 0,
              id: unref(u),
              for: unref(_),
              class: normalizeClass(unref(s).e("label")),
              style: normalizeStyle(unref(b))
            }, {
              default: withCtx(() => [
                renderSlot(se.$slots, "label", { label: unref(K) }, () => [
                  createTextVNode(toDisplayString(unref(K)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        createBaseVNode("div", {
          class: normalizeClass(unref(s).e("content")),
          style: normalizeStyle(unref(y))
        }, [
          renderSlot(se.$slots, "default"),
          createVNode(TransitionGroup, {
            name: `${unref(s).namespace.value}-zoom-in-top`
          }, {
            default: withCtx(() => [
              unref(H) ? renderSlot(se.$slots, "error", {
                key: 0,
                error: m.value
              }, () => [
                createBaseVNode("div", {
                  class: normalizeClass(unref(w))
                }, toDisplayString(m.value), 3)
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, Qw);
    };
  }
});
var Ec = xe(t2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);
var n2 = Lt(bw, {
  FormItem: Ec
});
var Nn = dn(Ec);
var Xt;
var a2 = `
  height:0 !important;
  visibility:hidden !important;
  ${Of() ? "" : "overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
var r2 = [
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
function o2(e) {
  const t = window.getComputedStyle(e), n = t.getPropertyValue("box-sizing"), a = Number.parseFloat(t.getPropertyValue("padding-bottom")) + Number.parseFloat(t.getPropertyValue("padding-top")), r = Number.parseFloat(t.getPropertyValue("border-bottom-width")) + Number.parseFloat(t.getPropertyValue("border-top-width"));
  return { contextStyle: r2.map((l) => `${l}:${t.getPropertyValue(l)}`).join(";"), paddingSize: a, borderSize: r, boxSizing: n };
}
function Si(e, t = 1, n) {
  var a;
  Xt || (Xt = document.createElement("textarea"), document.body.appendChild(Xt));
  const { paddingSize: r, borderSize: o, boxSizing: l, contextStyle: s } = o2(e);
  Xt.setAttribute("style", `${s};${a2}`), Xt.value = e.value || e.placeholder || "";
  let u = Xt.scrollHeight;
  const c = {};
  l === "border-box" ? u = u + o : l === "content-box" && (u = u - r), Xt.value = "";
  const f = Xt.scrollHeight - r;
  if (ot(t)) {
    let p = f * t;
    l === "border-box" && (p = p + r + o), u = Math.max(p, u), c.minHeight = `${p}px`;
  }
  if (ot(n)) {
    let p = f * n;
    l === "border-box" && (p = p + r + o), u = Math.min(p, u);
  }
  return c.height = `${u}px`, (a = Xt.parentNode) == null || a.removeChild(Xt), Xt = void 0, c;
}
var l2 = Pe({
  id: {
    type: String,
    default: void 0
  },
  size: xn,
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
    type: un
  },
  prefixIcon: {
    type: un
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
    default: () => fr({})
  }
});
var s2 = {
  [lt]: (e) => St(e),
  input: (e) => St(e),
  change: (e) => St(e),
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
var i2 = ["role"];
var u2 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form"];
var c2 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form"];
var d2 = defineComponent({
  name: "ElInput",
  inheritAttrs: false
});
var f2 = defineComponent({
  ...d2,
  props: l2,
  emits: s2,
  setup(e, { expose: t, emit: n }) {
    const a = e, r = useAttrs(), o = useSlots(), l = computed(() => {
      const re = {};
      return a.containerRole === "combobox" && (re["aria-haspopup"] = r["aria-haspopup"], re["aria-owns"] = r["aria-owns"], re["aria-expanded"] = r["aria-expanded"]), re;
    }), s = computed(() => [
      a.type === "textarea" ? b.b() : d.b(),
      d.m(v.value),
      d.is("disabled", h3.value),
      d.is("exceed", ne.value),
      {
        [d.b("group")]: o.prepend || o.append,
        [d.bm("group", "append")]: o.append,
        [d.bm("group", "prepend")]: o.prepend,
        [d.m("prefix")]: o.prefix || a.prefixIcon,
        [d.m("suffix")]: o.suffix || a.suffixIcon || a.clearable || a.showPassword,
        [d.bm("suffix", "password-clear")]: V.value && G.value
      },
      r.class
    ]), u = computed(() => [
      d.e("wrapper"),
      d.is("focus", B.value)
    ]), c = x0({
      excludeKeys: computed(() => Object.keys(l.value))
    }), { form: f, formItem: p } = Mn(), { inputId: m } = vo(a, {
      formItemContext: p
    }), v = Gt(), h3 = hr(), d = ye("input"), b = ye("textarea"), y = shallowRef(), C = shallowRef(), g = ref(false), w = ref(false), k = ref(false), S = ref(), _ = shallowRef(a.inputStyle), P = computed(() => y.value || C.value), { wrapperRef: A, isFocused: B, handleFocus: z, handleBlur: I } = rw(P, {
      afterBlur() {
        var re;
        a.validateEvent && ((re = p == null ? void 0 : p.validate) == null || re.call(p, "blur").catch((Ee) => nt(Ee)));
      }
    }), N = computed(() => {
      var re;
      return (re = f == null ? void 0 : f.statusIcon) != null ? re : false;
    }), L = computed(() => (p == null ? void 0 : p.validateState) || ""), H = computed(() => L.value && S0[L.value]), K = computed(() => k.value ? w0 : Jy), M = computed(() => [
      r.style,
      a.inputStyle
    ]), W = computed(() => [
      a.inputStyle,
      _.value,
      { resize: a.resize }
    ]), E = computed(() => so(a.modelValue) ? "" : String(a.modelValue)), V = computed(() => a.clearable && !h3.value && !a.readonly && !!E.value && (B.value || g.value)), G = computed(() => a.showPassword && !h3.value && !a.readonly && !!E.value && (!!E.value || B.value)), F = computed(() => a.showWordLimit && !!c.value.maxlength && (a.type === "text" || a.type === "textarea") && !h3.value && !a.readonly && !a.showPassword), X = computed(() => E.value.length), ne = computed(() => !!F.value && X.value > Number(c.value.maxlength)), me = computed(() => !!o.suffix || !!a.suffixIcon || V.value || a.showPassword || F.value || !!L.value && N.value), [ge, se] = Q1(y);
    ln(C, (re) => {
      if (he(), !F.value || a.resize !== "both")
        return;
      const Ee = re[0], { width: De } = Ee.contentRect;
      S.value = {
        right: `calc(100% - ${De + 15 + 6}px)`
      };
    });
    const le = () => {
      const { type: re, autosize: Ee } = a;
      if (!(!at || re !== "textarea" || !C.value))
        if (Ee) {
          const De = zt(Ee) ? Ee.minRows : void 0, Qe = zt(Ee) ? Ee.maxRows : void 0, ee = Si(C.value, De, Qe);
          _.value = {
            overflowY: "hidden",
            ...ee
          }, nextTick(() => {
            C.value.offsetHeight, _.value = ee;
          });
        } else
          _.value = {
            minHeight: Si(C.value).minHeight
          };
    }, he = ((re) => {
      let Ee = false;
      return () => {
        var De;
        if (Ee || !a.autosize)
          return;
        ((De = C.value) == null ? void 0 : De.offsetParent) === null || (re(), Ee = true);
      };
    })(le), Te = () => {
      const re = P.value, Ee = a.formatter ? a.formatter(E.value) : E.value;
      !re || re.value === Ee || (re.value = Ee);
    }, Me = async (re) => {
      ge();
      let { value: Ee } = re.target;
      if (a.formatter && (Ee = a.parser ? a.parser(Ee) : Ee), !w.value) {
        if (Ee === E.value) {
          Te();
          return;
        }
        n(lt, Ee), n("input", Ee), await nextTick(), Te(), se();
      }
    }, We = (re) => {
      n("change", re.target.value);
    }, je = (re) => {
      n("compositionstart", re), w.value = true;
    }, Ze = (re) => {
      var Ee;
      n("compositionupdate", re);
      const De = (Ee = re.target) == null ? void 0 : Ee.value, Qe = De[De.length - 1] || "";
      w.value = !Bl(Qe);
    }, Ke = (re) => {
      n("compositionend", re), w.value && (w.value = false, Me(re));
    }, rt = () => {
      k.value = !k.value, ht();
    }, ht = async () => {
      var re;
      await nextTick(), (re = P.value) == null || re.focus();
    }, it = () => {
      var re;
      return (re = P.value) == null ? void 0 : re.blur();
    }, ke = (re) => {
      g.value = false, n("mouseleave", re);
    }, ct = (re) => {
      g.value = true, n("mouseenter", re);
    }, dt = (re) => {
      n("keydown", re);
    }, ut = () => {
      var re;
      (re = P.value) == null || re.select();
    }, Je = () => {
      n(lt, ""), n("change", ""), n("clear"), n("input", "");
    };
    return watch(() => a.modelValue, () => {
      var re;
      nextTick(() => le()), a.validateEvent && ((re = p == null ? void 0 : p.validate) == null || re.call(p, "change").catch((Ee) => nt(Ee)));
    }), watch(E, () => Te()), watch(() => a.type, async () => {
      await nextTick(), Te(), le();
    }), onMounted(() => {
      !a.formatter && a.parser && nt("ElInput", "If you set the parser, you also need to set the formatter."), Te(), nextTick(le);
    }), t({
      input: y,
      textarea: C,
      ref: P,
      textareaStyle: W,
      autosize: toRef(a, "autosize"),
      focus: ht,
      blur: it,
      select: ut,
      clear: Je,
      resizeTextarea: le
    }), (re, Ee) => withDirectives((openBlock(), createElementBlock("div", mergeProps(unref(l), {
      class: unref(s),
      style: unref(M),
      role: re.containerRole,
      onMouseenter: ct,
      onMouseleave: ke
    }), [
      createCommentVNode(" input "),
      re.type !== "textarea" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createCommentVNode(" prepend slot "),
        re.$slots.prepend ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(d).be("group", "prepend"))
        }, [
          renderSlot(re.$slots, "prepend")
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          ref_key: "wrapperRef",
          ref: A,
          class: normalizeClass(unref(u))
        }, [
          createCommentVNode(" prefix slot "),
          re.$slots.prefix || re.prefixIcon ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(unref(d).e("prefix"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(d).e("prefix-inner"))
            }, [
              renderSlot(re.$slots, "prefix"),
              re.prefixIcon ? (openBlock(), createBlock(unref(Re), {
                key: 0,
                class: normalizeClass(unref(d).e("icon"))
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(re.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)) : createCommentVNode("v-if", true),
          createBaseVNode("input", mergeProps({
            id: unref(m),
            ref_key: "input",
            ref: y,
            class: unref(d).e("inner")
          }, unref(c), {
            type: re.showPassword ? k.value ? "text" : "password" : re.type,
            disabled: unref(h3),
            formatter: re.formatter,
            parser: re.parser,
            readonly: re.readonly,
            autocomplete: re.autocomplete,
            tabindex: re.tabindex,
            "aria-label": re.label,
            placeholder: re.placeholder,
            style: re.inputStyle,
            form: a.form,
            onCompositionstart: je,
            onCompositionupdate: Ze,
            onCompositionend: Ke,
            onInput: Me,
            onFocus: Ee[0] || (Ee[0] = (...De) => unref(z) && unref(z)(...De)),
            onBlur: Ee[1] || (Ee[1] = (...De) => unref(I) && unref(I)(...De)),
            onChange: We,
            onKeydown: dt
          }), null, 16, u2),
          createCommentVNode(" suffix slot "),
          unref(me) ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(unref(d).e("suffix"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(d).e("suffix-inner"))
            }, [
              !unref(V) || !unref(G) || !unref(F) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                renderSlot(re.$slots, "suffix"),
                re.suffixIcon ? (openBlock(), createBlock(unref(Re), {
                  key: 0,
                  class: normalizeClass(unref(d).e("icon"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(re.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("v-if", true)
              ], 64)) : createCommentVNode("v-if", true),
              unref(V) ? (openBlock(), createBlock(unref(Re), {
                key: 1,
                class: normalizeClass([unref(d).e("icon"), unref(d).e("clear")]),
                onMousedown: withModifiers(unref(ha), ["prevent"]),
                onClick: Je
              }, {
                default: withCtx(() => [
                  createVNode(unref(cr))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
              unref(G) ? (openBlock(), createBlock(unref(Re), {
                key: 2,
                class: normalizeClass([unref(d).e("icon"), unref(d).e("password")]),
                onClick: rt
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(K))))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              unref(F) ? (openBlock(), createElementBlock("span", {
                key: 3,
                class: normalizeClass(unref(d).e("count"))
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(unref(d).e("count-inner"))
                }, toDisplayString(unref(X)) + " / " + toDisplayString(unref(c).maxlength), 3)
              ], 2)) : createCommentVNode("v-if", true),
              unref(L) && unref(H) && unref(N) ? (openBlock(), createBlock(unref(Re), {
                key: 4,
                class: normalizeClass([
                  unref(d).e("icon"),
                  unref(d).e("validateIcon"),
                  unref(d).is("loading", unref(L) === "validating")
                ])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(H))))
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("v-if", true)
            ], 2)
          ], 2)) : createCommentVNode("v-if", true)
        ], 2),
        createCommentVNode(" append slot "),
        re.$slots.append ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(d).be("group", "append"))
        }, [
          renderSlot(re.$slots, "append")
        ], 2)) : createCommentVNode("v-if", true)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        createCommentVNode(" textarea "),
        createBaseVNode("textarea", mergeProps({
          id: unref(m),
          ref_key: "textarea",
          ref: C,
          class: unref(b).e("inner")
        }, unref(c), {
          tabindex: re.tabindex,
          disabled: unref(h3),
          readonly: re.readonly,
          autocomplete: re.autocomplete,
          style: unref(W),
          "aria-label": re.label,
          placeholder: re.placeholder,
          form: a.form,
          onCompositionstart: je,
          onCompositionupdate: Ze,
          onCompositionend: Ke,
          onInput: Me,
          onFocus: Ee[2] || (Ee[2] = (...De) => unref(z) && unref(z)(...De)),
          onBlur: Ee[3] || (Ee[3] = (...De) => unref(I) && unref(I)(...De)),
          onChange: We,
          onKeydown: dt
        }), null, 16, c2),
        unref(F) ? (openBlock(), createElementBlock("span", {
          key: 0,
          style: normalizeStyle(S.value),
          class: normalizeClass(unref(d).e("count"))
        }, toDisplayString(unref(X)) + " / " + toDisplayString(unref(c).maxlength), 7)) : createCommentVNode("v-if", true)
      ], 64))
    ], 16, i2)), [
      [vShow, re.type !== "hidden"]
    ]);
  }
});
var p2 = xe(f2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
var Bt = Lt(p2);
var ua = 4;
var v2 = {
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
var h2 = ({
  move: e,
  size: t,
  bar: n
}) => ({
  [n.size]: t,
  transform: `translate${n.axis}(${e}%)`
});
var Tc = Symbol("scrollbarContextKey");
var m2 = Pe({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});
var g2 = "Thumb";
var b2 = defineComponent({
  __name: "thumb",
  props: m2,
  setup(e) {
    const t = e, n = inject(Tc), a = ye("scrollbar");
    n || Pa(g2, "can not inject scrollbar context");
    const r = ref(), o = ref(), l = ref({}), s = ref(false);
    let u = false, c = false, f = at ? document.onselectstart : null;
    const p = computed(() => v2[t.vertical ? "vertical" : "horizontal"]), m = computed(() => h2({
      size: t.size,
      move: t.move,
      bar: p.value
    })), v = computed(() => r.value[p.value.offset] ** 2 / n.wrapElement[p.value.scrollSize] / t.ratio / o.value[p.value.offset]), h3 = (S) => {
      var _;
      if (S.stopPropagation(), S.ctrlKey || [1, 2].includes(S.button))
        return;
      (_ = window.getSelection()) == null || _.removeAllRanges(), b(S);
      const P = S.currentTarget;
      P && (l.value[p.value.axis] = P[p.value.offset] - (S[p.value.client] - P.getBoundingClientRect()[p.value.direction]));
    }, d = (S) => {
      if (!o.value || !r.value || !n.wrapElement)
        return;
      const _ = Math.abs(S.target.getBoundingClientRect()[p.value.direction] - S[p.value.client]), P = o.value[p.value.offset] / 2, A = (_ - P) * 100 * v.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = A * n.wrapElement[p.value.scrollSize] / 100;
    }, b = (S) => {
      S.stopImmediatePropagation(), u = true, document.addEventListener("mousemove", y), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => false;
    }, y = (S) => {
      if (!r.value || !o.value || u === false)
        return;
      const _ = l.value[p.value.axis];
      if (!_)
        return;
      const P = (r.value.getBoundingClientRect()[p.value.direction] - S[p.value.client]) * -1, A = o.value[p.value.offset] - _, B = (P - A) * 100 * v.value / r.value[p.value.offset];
      n.wrapElement[p.value.scroll] = B * n.wrapElement[p.value.scrollSize] / 100;
    }, C = () => {
      u = false, l.value[p.value.axis] = 0, document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", C), k(), c && (s.value = false);
    }, g = () => {
      c = false, s.value = !!t.size;
    }, w = () => {
      c = true, s.value = u;
    };
    onBeforeUnmount(() => {
      k(), document.removeEventListener("mouseup", C);
    });
    const k = () => {
      document.onselectstart !== f && (document.onselectstart = f);
    };
    return jt(toRef(n, "scrollbarElement"), "mousemove", g), jt(toRef(n, "scrollbarElement"), "mouseleave", w), (S, _) => (openBlock(), createBlock(Transition, {
      name: unref(a).b("fade"),
      persisted: ""
    }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          ref_key: "instance",
          ref: r,
          class: normalizeClass([unref(a).e("bar"), unref(a).is(unref(p).key)]),
          onMousedown: d
        }, [
          createBaseVNode("div", {
            ref_key: "thumb",
            ref: o,
            class: normalizeClass(unref(a).e("thumb")),
            style: normalizeStyle(unref(m)),
            onMousedown: h3
          }, null, 38)
        ], 34), [
          [vShow, S.always || s.value]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var ki = xe(b2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);
var y2 = Pe({
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
var w2 = defineComponent({
  __name: "bar",
  props: y2,
  setup(e, { expose: t }) {
    const n = e, a = ref(0), r = ref(0);
    return t({
      handleScroll: (l) => {
        if (l) {
          const s = l.offsetHeight - ua, u = l.offsetWidth - ua;
          r.value = l.scrollTop * 100 / s * n.ratioY, a.value = l.scrollLeft * 100 / u * n.ratioX;
        }
      }
    }), (l, s) => (openBlock(), createElementBlock(Fragment, null, [
      createVNode(ki, {
        move: a.value,
        ratio: l.ratioX,
        size: l.width,
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"]),
      createVNode(ki, {
        move: r.value,
        ratio: l.ratioY,
        size: l.height,
        vertical: "",
        always: l.always
      }, null, 8, ["move", "ratio", "size", "always"])
    ], 64));
  }
});
var C2 = xe(w2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);
var S2 = Pe({
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
var k2 = {
  scroll: ({
    scrollTop: e,
    scrollLeft: t
  }) => [e, t].every(ot)
};
var nl = "ElScrollbar";
var _2 = defineComponent({
  name: nl
});
var $2 = defineComponent({
  ..._2,
  props: S2,
  emits: k2,
  setup(e, { expose: t, emit: n }) {
    const a = e, r = ye("scrollbar");
    let o, l;
    const s = ref(), u = ref(), c = ref(), f = ref("0"), p = ref("0"), m = ref(), v = ref(1), h3 = ref(1), d = computed(() => {
      const _ = {};
      return a.height && (_.height = Xa(a.height)), a.maxHeight && (_.maxHeight = Xa(a.maxHeight)), [a.wrapStyle, _];
    }), b = computed(() => [
      a.wrapClass,
      r.e("wrap"),
      { [r.em("wrap", "hidden-default")]: !a.native }
    ]), y = computed(() => [r.e("view"), a.viewClass]), C = () => {
      var _;
      u.value && ((_ = m.value) == null || _.handleScroll(u.value), n("scroll", {
        scrollTop: u.value.scrollTop,
        scrollLeft: u.value.scrollLeft
      }));
    };
    function g(_, P) {
      zt(_) ? u.value.scrollTo(_) : ot(_) && ot(P) && u.value.scrollTo(_, P);
    }
    const w = (_) => {
      if (!ot(_)) {
        nt(nl, "value must be a number");
        return;
      }
      u.value.scrollTop = _;
    }, k = (_) => {
      if (!ot(_)) {
        nt(nl, "value must be a number");
        return;
      }
      u.value.scrollLeft = _;
    }, S = () => {
      if (!u.value)
        return;
      const _ = u.value.offsetHeight - ua, P = u.value.offsetWidth - ua, A = _ ** 2 / u.value.scrollHeight, B = P ** 2 / u.value.scrollWidth, z = Math.max(A, a.minSize), I = Math.max(B, a.minSize);
      v.value = A / (_ - A) / (z / (_ - z)), h3.value = B / (P - B) / (I / (P - I)), p.value = z + ua < _ ? `${z}px` : "", f.value = I + ua < P ? `${I}px` : "";
    };
    return watch(() => a.noresize, (_) => {
      _ ? (o == null || o(), l == null || l()) : ({ stop: o } = ln(c, S), l = jt("resize", S));
    }, { immediate: true }), watch(() => [a.maxHeight, a.height], () => {
      a.native || nextTick(() => {
        var _;
        S(), u.value && ((_ = m.value) == null || _.handleScroll(u.value));
      });
    }), provide(Tc, reactive({
      scrollbarElement: s,
      wrapElement: u
    })), onMounted(() => {
      a.native || nextTick(() => {
        S();
      });
    }), onUpdated(() => S()), t({
      wrapRef: u,
      update: S,
      scrollTo: g,
      setScrollTop: w,
      setScrollLeft: k,
      handleScroll: C
    }), (_, P) => (openBlock(), createElementBlock("div", {
      ref_key: "scrollbarRef",
      ref: s,
      class: normalizeClass(unref(r).b())
    }, [
      createBaseVNode("div", {
        ref_key: "wrapRef",
        ref: u,
        class: normalizeClass(unref(b)),
        style: normalizeStyle(unref(d)),
        onScroll: C
      }, [
        (openBlock(), createBlock(resolveDynamicComponent(_.tag), {
          ref_key: "resizeRef",
          ref: c,
          class: normalizeClass(unref(y)),
          style: normalizeStyle(_.viewStyle)
        }, {
          default: withCtx(() => [
            renderSlot(_.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style"]))
      ], 38),
      _.native ? createCommentVNode("v-if", true) : (openBlock(), createBlock(C2, {
        key: 0,
        ref_key: "barRef",
        ref: m,
        height: p.value,
        width: f.value,
        always: _.always,
        "ratio-x": h3.value,
        "ratio-y": v.value
      }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"]))
    ], 2));
  }
});
var E2 = xe($2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);
var Ma = Lt(E2);
var Xl = Symbol("popper");
var Oc = Symbol("popperContent");
var T2 = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
];
var Pc = Pe({
  role: {
    type: String,
    values: T2,
    default: "tooltip"
  }
});
var O2 = defineComponent({
  name: "ElPopper",
  inheritAttrs: false
});
var P2 = defineComponent({
  ...O2,
  props: Pc,
  setup(e, { expose: t }) {
    const n = e, a = ref(), r = ref(), o = ref(), l = ref(), s = computed(() => n.role), u = {
      triggerRef: a,
      popperInstanceRef: r,
      contentRef: o,
      referenceRef: l,
      role: s
    };
    return t(u), provide(Xl, u), (c, f) => renderSlot(c.$slots, "default");
  }
});
var x2 = xe(P2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
var xc = Pe({
  arrowOffset: {
    type: Number,
    default: 5
  }
});
var M2 = defineComponent({
  name: "ElPopperArrow",
  inheritAttrs: false
});
var A2 = defineComponent({
  ...M2,
  props: xc,
  setup(e, { expose: t }) {
    const n = e, a = ye("popper"), { arrowOffset: r, arrowRef: o, arrowStyle: l } = inject(Oc, void 0);
    return watch(() => n.arrowOffset, (s) => {
      r.value = s;
    }), onBeforeUnmount(() => {
      o.value = void 0;
    }), t({
      arrowRef: o
    }), (s, u) => (openBlock(), createElementBlock("span", {
      ref_key: "arrowRef",
      ref: o,
      class: normalizeClass(unref(a).e("arrow")),
      style: normalizeStyle(unref(l)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var N2 = xe(A2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
var Eo = "ElOnlyChild";
var R2 = defineComponent({
  name: Eo,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var a;
    const r = inject(Sc), o = X1((a = r == null ? void 0 : r.setForwardRef) != null ? a : ha);
    return () => {
      var l;
      const s = (l = t.default) == null ? void 0 : l.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return nt(Eo, "requires exact only one valid child."), null;
      const u = Mc(s);
      return u ? withDirectives(cloneVNode(u, n), [[o]]) : (nt(Eo, "no valid child node found"), null);
    };
  }
});
function Mc(e) {
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
          return _i(n);
        case Fragment:
          return Mc(n.children);
        default:
          return n;
      }
    return _i(n);
  }
  return null;
}
function _i(e) {
  const t = ye("only-child");
  return createVNode("span", {
    class: t.e("content")
  }, [e]);
}
var Ac = Pe({
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
var L2 = defineComponent({
  name: "ElPopperTrigger",
  inheritAttrs: false
});
var F2 = defineComponent({
  ...L2,
  props: Ac,
  setup(e, { expose: t }) {
    const n = e, { role: a, triggerRef: r } = inject(Xl, void 0);
    G1(r);
    const o = computed(() => s.value ? n.id : void 0), l = computed(() => {
      if (a && a.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = computed(() => {
      if (a && a.value !== "tooltip")
        return a.value;
    }), u = computed(() => s.value ? `${n.open}` : void 0);
    let c;
    return onMounted(() => {
      watch(() => n.virtualRef, (f) => {
        f && (r.value = yn(f));
      }, {
        immediate: true
      }), watch(r, (f, p) => {
        c == null || c(), c = void 0, ga(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var v;
          const h3 = n[m];
          h3 && (f.addEventListener(m.slice(2).toLowerCase(), h3), (v = p == null ? void 0 : p.removeEventListener) == null || v.call(p, m.slice(2).toLowerCase(), h3));
        }), c = watch([o, l, s, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((v, h3) => {
            so(m[h3]) ? f.removeAttribute(v) : f.setAttribute(v, m[h3]);
          });
        }, { immediate: true })), ga(p) && [
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
      triggerRef: r
    }), (f, p) => f.virtualTriggering ? createCommentVNode("v-if", true) : (openBlock(), createBlock(unref(R2), mergeProps({ key: 0 }, f.$attrs, {
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
var I2 = xe(F2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);
var To = "focus-trap.focus-after-trapped";
var Oo = "focus-trap.focus-after-released";
var D2 = "focus-trap.focusout-prevented";
var $i = {
  cancelable: true,
  bubbles: false
};
var B2 = {
  cancelable: true,
  bubbles: false
};
var Ei = "focusAfterTrapped";
var Ti = "focusAfterReleased";
var z2 = Symbol("elFocusTrap");
var Zl = ref();
var ho = ref(0);
var Jl = ref(0);
var Sr = 0;
var Nc = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (a) => {
      const r = a.tagName === "INPUT" && a.type === "hidden";
      return a.disabled || a.hidden || r ? NodeFilter.FILTER_SKIP : a.tabIndex >= 0 || a === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
};
var Oi = (e, t) => {
  for (const n of e)
    if (!V2(n, t))
      return n;
};
var V2 = (e, t) => {
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
var H2 = (e) => {
  const t = Nc(e), n = Oi(t, e), a = Oi(t.reverse(), e);
  return [n, a];
};
var W2 = (e) => e instanceof HTMLInputElement && "select" in e;
var Ln = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: true }), Jl.value = window.performance.now(), e !== n && W2(e) && t && e.select();
  }
};
function Pi(e, t) {
  const n = [...e], a = e.indexOf(t);
  return a !== -1 && n.splice(a, 1), n;
}
var j2 = () => {
  let e = [];
  return {
    push: (a) => {
      const r = e[0];
      r && a !== r && r.pause(), e = Pi(e, a), e.unshift(a);
    },
    remove: (a) => {
      var r, o;
      e = Pi(e, a), (o = (r = e[0]) == null ? void 0 : r.resume) == null || o.call(r);
    }
  };
};
var K2 = (e, t = false) => {
  const n = document.activeElement;
  for (const a of e)
    if (Ln(a, t), document.activeElement !== n)
      return;
};
var xi = j2();
var q2 = () => ho.value > Jl.value;
var kr = () => {
  Zl.value = "pointer", ho.value = window.performance.now();
};
var Mi = () => {
  Zl.value = "keyboard", ho.value = window.performance.now();
};
var Y2 = () => (onMounted(() => {
  Sr === 0 && (document.addEventListener("mousedown", kr), document.addEventListener("touchstart", kr), document.addEventListener("keydown", Mi)), Sr++;
}), onBeforeUnmount(() => {
  Sr--, Sr <= 0 && (document.removeEventListener("mousedown", kr), document.removeEventListener("touchstart", kr), document.removeEventListener("keydown", Mi));
}), {
  focusReason: Zl,
  lastUserFocusTimestamp: ho,
  lastAutomatedFocusTimestamp: Jl
});
var _r = (e) => new CustomEvent(D2, {
  ...B2,
  detail: e
});
var U2 = defineComponent({
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
    Ei,
    Ti,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = ref();
    let a, r;
    const { focusReason: o } = Y2();
    K1((h3) => {
      e.trapped && !l.paused && t("release-requested", h3);
    });
    const l = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }, s = (h3) => {
      if (!e.loop && !e.trapped || l.paused)
        return;
      const { key: d, altKey: b, ctrlKey: y, metaKey: C, currentTarget: g, shiftKey: w } = h3, { loop: k } = e, S = d === Fe.tab && !b && !y && !C, _ = document.activeElement;
      if (S && _) {
        const P = g, [A, B] = H2(P);
        if (A && B) {
          if (!w && _ === B) {
            const I = _r({
              focusReason: o.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (h3.preventDefault(), k && Ln(A, true));
          } else if (w && [A, P].includes(_)) {
            const I = _r({
              focusReason: o.value
            });
            t("focusout-prevented", I), I.defaultPrevented || (h3.preventDefault(), k && Ln(B, true));
          }
        } else if (_ === P) {
          const I = _r({
            focusReason: o.value
          });
          t("focusout-prevented", I), I.defaultPrevented || h3.preventDefault();
        }
      }
    };
    provide(z2, {
      focusTrapRef: n,
      onKeydown: s
    }), watch(() => e.focusTrapEl, (h3) => {
      h3 && (n.value = h3);
    }, { immediate: true }), watch([n], ([h3], [d]) => {
      h3 && (h3.addEventListener("keydown", s), h3.addEventListener("focusin", f), h3.addEventListener("focusout", p)), d && (d.removeEventListener("keydown", s), d.removeEventListener("focusin", f), d.removeEventListener("focusout", p));
    });
    const u = (h3) => {
      t(Ei, h3);
    }, c = (h3) => t(Ti, h3), f = (h3) => {
      const d = unref(n);
      if (!d)
        return;
      const b = h3.target, y = h3.relatedTarget, C = b && d.contains(b);
      e.trapped || y && d.contains(y) || (a = y), C && t("focusin", h3), !l.paused && e.trapped && (C ? r = b : Ln(r, true));
    }, p = (h3) => {
      const d = unref(n);
      if (!(l.paused || !d))
        if (e.trapped) {
          const b = h3.relatedTarget;
          !so(b) && !d.contains(b) && setTimeout(() => {
            if (!l.paused && e.trapped) {
              const y = _r({
                focusReason: o.value
              });
              t("focusout-prevented", y), y.defaultPrevented || Ln(r, true);
            }
          }, 0);
        } else {
          const b = h3.target;
          b && d.contains(b) || t("focusout", h3);
        }
    };
    async function m() {
      await nextTick();
      const h3 = unref(n);
      if (h3) {
        xi.push(l);
        const d = h3.contains(document.activeElement) ? a : document.activeElement;
        if (a = d, !h3.contains(d)) {
          const y = new Event(To, $i);
          h3.addEventListener(To, u), h3.dispatchEvent(y), y.defaultPrevented || nextTick(() => {
            let C = e.focusStartEl;
            St(C) || (Ln(C), document.activeElement !== C && (C = "first")), C === "first" && K2(Nc(h3), true), (document.activeElement === d || C === "container") && Ln(h3);
          });
        }
      }
    }
    function v() {
      const h3 = unref(n);
      if (h3) {
        h3.removeEventListener(To, u);
        const d = new CustomEvent(Oo, {
          ...$i,
          detail: {
            focusReason: o.value
          }
        });
        h3.addEventListener(Oo, c), h3.dispatchEvent(d), !d.defaultPrevented && (o.value == "keyboard" || !q2() || h3.contains(document.activeElement)) && Ln(a ?? document.body), h3.removeEventListener(Oo, u), xi.remove(l);
      }
    }
    return onMounted(() => {
      e.trapped && m(), watch(() => e.trapped, (h3) => {
        h3 ? m() : v();
      });
    }), onBeforeUnmount(() => {
      e.trapped && v();
    }), {
      onKeydown: s
    };
  }
});
function G2(e, t, n, a, r, o) {
  return renderSlot(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var X2 = xe(U2, [["render", G2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
var Z2 = ["fixed", "absolute"];
var J2 = Pe({
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
    values: co,
    default: "bottom"
  },
  popperOptions: {
    type: be(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Z2,
    default: "absolute"
  }
});
var Rc = Pe({
  ...J2,
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
var Q2 = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true
};
var eC = (e, t = []) => {
  const { placement: n, strategy: a, popperOptions: r } = e, o = {
    placement: n,
    strategy: a,
    ...r,
    modifiers: [...nC(e), ...t]
  };
  return aC(o, r == null ? void 0 : r.modifiers), o;
};
var tC = (e) => {
  if (at)
    return yn(e);
};
function nC(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: a } = e;
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
        fallbackPlacements: a
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
function aC(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
var rC = 0;
var oC = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: a, role: r } = inject(Xl, void 0), o = ref(), l = ref(), s = computed(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = computed(() => {
    var y;
    const C = unref(o), g = (y = unref(l)) != null ? y : rC;
    return {
      name: "arrow",
      enabled: !Sb(C),
      options: {
        element: C,
        padding: g
      }
    };
  }), c = computed(() => ({
    onFirstUpdate: () => {
      h3();
    },
    ...eC(e, [
      unref(u),
      unref(s)
    ])
  })), f = computed(() => tC(e.referenceEl) || unref(a)), { attributes: p, state: m, styles: v, update: h3, forceUpdate: d, instanceRef: b } = H1(f, n, c);
  return watch(b, (y) => t.value = y), onMounted(() => {
    watch(() => {
      var y;
      return (y = unref(f)) == null ? void 0 : y.getBoundingClientRect();
    }, () => {
      h3();
    });
  }), {
    attributes: p,
    arrowRef: o,
    contentRef: n,
    instanceRef: b,
    state: m,
    styles: v,
    role: r,
    forceUpdate: d,
    update: h3
  };
};
var lC = (e, {
  attributes: t,
  styles: n,
  role: a
}) => {
  const { nextZIndex: r } = kc(), o = ye("popper"), l = computed(() => unref(t).popper), s = ref(e.zIndex || r()), u = computed(() => [
    o.b(),
    o.is("pure", e.pure),
    o.is(e.effect),
    e.popperClass
  ]), c = computed(() => [
    { zIndex: unref(s) },
    unref(n).popper,
    e.popperStyle || {}
  ]), f = computed(() => a.value === "dialog" ? "false" : void 0), p = computed(() => unref(n).arrow || {});
  return {
    ariaModal: f,
    arrowStyle: p,
    contentAttrs: l,
    contentClass: u,
    contentStyle: c,
    contentZIndex: s,
    updateZIndex: () => {
      s.value = e.zIndex || r();
    }
  };
};
var sC = (e, t) => {
  const n = ref(false), a = ref();
  return {
    focusStartRef: a,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var f;
      ((f = c.detail) == null ? void 0 : f.focusReason) !== "pointer" && (a.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (a.value = c.target), n.value = true);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = false);
    },
    onReleaseRequested: () => {
      n.value = false, t("close");
    }
  };
};
var iC = defineComponent({
  name: "ElPopperContent"
});
var uC = defineComponent({
  ...iC,
  props: Rc,
  emits: Q2,
  setup(e, { expose: t, emit: n }) {
    const a = e, {
      focusStartRef: r,
      trapped: o,
      onFocusAfterReleased: l,
      onFocusAfterTrapped: s,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: f
    } = sC(a, n), { attributes: p, arrowRef: m, contentRef: v, styles: h3, instanceRef: d, role: b, update: y } = oC(a), {
      ariaModal: C,
      arrowStyle: g,
      contentAttrs: w,
      contentClass: k,
      contentStyle: S,
      updateZIndex: _
    } = lC(a, {
      styles: h3,
      attributes: p,
      role: b
    }), P = inject(Qn, void 0), A = ref();
    provide(Oc, {
      arrowStyle: g,
      arrowRef: m,
      arrowOffset: A
    }), P && (P.addInputId || P.removeInputId) && provide(Qn, {
      ...P,
      addInputId: ha,
      removeInputId: ha
    });
    let B;
    const z = (N = true) => {
      y(), N && _();
    }, I = () => {
      z(false), a.visible && a.focusOnShow ? o.value = true : a.visible === false && (o.value = false);
    };
    return onMounted(() => {
      watch(() => a.triggerTargetEl, (N, L) => {
        B == null || B(), B = void 0;
        const H = unref(N || v.value), K = unref(L || v.value);
        ga(H) && (B = watch([b, () => a.ariaLabel, C, () => a.id], (M) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((W, E) => {
            so(M[E]) ? H.removeAttribute(W) : H.setAttribute(W, M[E]);
          });
        }, { immediate: true })), K !== H && ga(K) && ["role", "aria-label", "aria-modal", "id"].forEach((M) => {
          K.removeAttribute(M);
        });
      }, { immediate: true }), watch(() => a.visible, I, { immediate: true });
    }), onBeforeUnmount(() => {
      B == null || B(), B = void 0;
    }), t({
      popperContentRef: v,
      popperInstanceRef: d,
      updatePopper: z,
      contentStyle: S
    }), (N, L) => (openBlock(), createElementBlock("div", mergeProps({
      ref_key: "contentRef",
      ref: v
    }, unref(w), {
      style: unref(S),
      class: unref(k),
      tabindex: "-1",
      onMouseenter: L[0] || (L[0] = (H) => N.$emit("mouseenter", H)),
      onMouseleave: L[1] || (L[1] = (H) => N.$emit("mouseleave", H))
    }), [
      createVNode(unref(X2), {
        trapped: unref(o),
        "trap-on-focus-in": true,
        "focus-trap-el": unref(v),
        "focus-start-el": unref(r),
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
var cC = xe(uC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
var dC = Lt(x2);
var mo = Symbol("elTooltip");
var go = Pe({
  ...U1,
  ...Rc,
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
var Lc = Pe({
  ...Ac,
  disabled: Boolean,
  trigger: {
    type: be([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: be(Array),
    default: () => [Fe.enter, Fe.space]
  }
});
var {
  useModelToggleProps: fC,
  useModelToggleEmits: pC,
  useModelToggle: vC
} = oc("visible");
var hC = Pe({
  ...Pc,
  ...fC,
  ...go,
  ...Lc,
  ...xc,
  showArrow: {
    type: Boolean,
    default: true
  }
});
var mC = [
  ...pC,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
];
var gC = (e, t) => Ue(e) ? e.includes(t) : e === t;
var la = (e, t, n) => (a) => {
  gC(unref(e), t) && n(a);
};
var bC = defineComponent({
  name: "ElTooltipTrigger"
});
var yC = defineComponent({
  ...bC,
  props: Lc,
  setup(e, { expose: t }) {
    const n = e, a = ye("tooltip"), { controlled: r, id: o, open: l, onOpen: s, onClose: u, onToggle: c } = inject(mo, void 0), f = ref(null), p = () => {
      if (unref(r) || n.disabled)
        return true;
    }, m = toRef(n, "trigger"), v = bn(p, la(m, "hover", s)), h3 = bn(p, la(m, "hover", u)), d = bn(p, la(m, "click", (w) => {
      w.button === 0 && c(w);
    })), b = bn(p, la(m, "focus", s)), y = bn(p, la(m, "focus", u)), C = bn(p, la(m, "contextmenu", (w) => {
      w.preventDefault(), c(w);
    })), g = bn(p, (w) => {
      const { code: k } = w;
      n.triggerKeys.includes(k) && (w.preventDefault(), c(w));
    });
    return t({
      triggerRef: f
    }), (w, k) => (openBlock(), createBlock(unref(I2), {
      id: unref(o),
      "virtual-ref": w.virtualRef,
      open: unref(l),
      "virtual-triggering": w.virtualTriggering,
      class: normalizeClass(unref(a).e("trigger")),
      onBlur: unref(y),
      onClick: unref(d),
      onContextmenu: unref(C),
      onFocus: unref(b),
      onMouseenter: unref(v),
      onMouseleave: unref(h3),
      onKeydown: unref(g)
    }, {
      default: withCtx(() => [
        renderSlot(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var wC = xe(yC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
var CC = defineComponent({
  name: "ElTooltipContent",
  inheritAttrs: false
});
var SC = defineComponent({
  ...CC,
  props: go,
  setup(e, { expose: t }) {
    const n = e, { selector: a } = wc(), r = ye("tooltip"), o = ref(null), l = ref(false), {
      controlled: s,
      id: u,
      open: c,
      trigger: f,
      onClose: p,
      onOpen: m,
      onShow: v,
      onHide: h3,
      onBeforeShow: d,
      onBeforeHide: b
    } = inject(mo, void 0), y = computed(() => n.transition || `${r.namespace.value}-fade-in-linear`), C = computed(() => false ? true : n.persistent);
    onBeforeUnmount(() => {
      l.value = true;
    });
    const g = computed(() => unref(C) ? true : unref(c)), w = computed(() => n.disabled ? false : unref(c)), k = computed(() => n.appendTo || a.value), S = computed(() => {
      var M;
      return (M = n.style) != null ? M : {};
    }), _ = computed(() => !unref(c)), P = () => {
      h3();
    }, A = () => {
      if (unref(s))
        return true;
    }, B = bn(A, () => {
      n.enterable && unref(f) === "hover" && m();
    }), z = bn(A, () => {
      unref(f) === "hover" && p();
    }), I = () => {
      var M, W;
      (W = (M = o.value) == null ? void 0 : M.updatePopper) == null || W.call(M), d == null || d();
    }, N = () => {
      b == null || b();
    }, L = () => {
      v(), K = mu(computed(() => {
        var M;
        return (M = o.value) == null ? void 0 : M.popperContentRef;
      }), () => {
        if (unref(s))
          return;
        unref(f) !== "hover" && p();
      });
    }, H = () => {
      n.virtualTriggering || p();
    };
    let K;
    return watch(() => unref(c), (M) => {
      M || K == null || K();
    }, {
      flush: "post"
    }), watch(() => n.content, () => {
      var M, W;
      (W = (M = o.value) == null ? void 0 : M.updatePopper) == null || W.call(M);
    }), t({
      contentRef: o
    }), (M, W) => (openBlock(), createBlock(Teleport, {
      disabled: !M.teleported,
      to: unref(k)
    }, [
      createVNode(Transition, {
        name: unref(y),
        onAfterLeave: P,
        onBeforeEnter: I,
        onAfterEnter: L,
        onBeforeLeave: N
      }, {
        default: withCtx(() => [
          unref(g) ? withDirectives((openBlock(), createBlock(unref(cC), mergeProps({
            key: 0,
            id: unref(u),
            ref_key: "contentRef",
            ref: o
          }, M.$attrs, {
            "aria-label": M.ariaLabel,
            "aria-hidden": unref(_),
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
            visible: unref(w),
            "z-index": M.zIndex,
            onMouseenter: unref(B),
            onMouseleave: unref(z),
            onBlur: H,
            onClose: unref(p)
          }), {
            default: withCtx(() => [
              l.value ? createCommentVNode("v-if", true) : renderSlot(M.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [vShow, unref(w)]
          ]) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var kC = xe(SC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
var _C = ["innerHTML"];
var $C = { key: 1 };
var EC = defineComponent({
  name: "ElTooltip"
});
var TC = defineComponent({
  ...EC,
  props: hC,
  emits: mC,
  setup(e, { expose: t, emit: n }) {
    const a = e;
    Y1();
    const r = po(), o = ref(), l = ref(), s = () => {
      var y;
      const C = unref(o);
      C && ((y = C.popperInstanceRef) == null || y.update());
    }, u = ref(false), c = ref(), { show: f, hide: p, hasUpdateHandler: m } = vC({
      indicator: u,
      toggleReason: c
    }), { onOpen: v, onClose: h3 } = Cc({
      showAfter: toRef(a, "showAfter"),
      hideAfter: toRef(a, "hideAfter"),
      autoClose: toRef(a, "autoClose"),
      open: f,
      close: p
    }), d = computed(() => Qt(a.visible) && !m.value);
    provide(mo, {
      controlled: d,
      id: r,
      open: readonly(u),
      trigger: toRef(a, "trigger"),
      onOpen: (y) => {
        v(y);
      },
      onClose: (y) => {
        h3(y);
      },
      onToggle: (y) => {
        unref(u) ? h3(y) : v(y);
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
    }), watch(() => a.disabled, (y) => {
      y && u.value && (u.value = false);
    });
    const b = () => {
      var y, C;
      const g = (C = (y = l.value) == null ? void 0 : y.contentRef) == null ? void 0 : C.popperContentRef;
      return g && g.contains(document.activeElement);
    };
    return onDeactivated(() => u.value && p()), t({
      popperRef: o,
      contentRef: l,
      isFocusInsideContent: b,
      updatePopper: s,
      onOpen: v,
      onClose: h3,
      hide: p
    }), (y, C) => (openBlock(), createBlock(unref(dC), {
      ref_key: "popperRef",
      ref: o,
      role: y.role
    }, {
      default: withCtx(() => [
        createVNode(wC, {
          disabled: y.disabled,
          trigger: y.trigger,
          "trigger-keys": y.triggerKeys,
          "virtual-ref": y.virtualRef,
          "virtual-triggering": y.virtualTriggering
        }, {
          default: withCtx(() => [
            y.$slots.default ? renderSlot(y.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        createVNode(kC, {
          ref_key: "contentRef",
          ref: l,
          "aria-label": y.ariaLabel,
          "boundaries-padding": y.boundariesPadding,
          content: y.content,
          disabled: y.disabled,
          effect: y.effect,
          enterable: y.enterable,
          "fallback-placements": y.fallbackPlacements,
          "hide-after": y.hideAfter,
          "gpu-acceleration": y.gpuAcceleration,
          offset: y.offset,
          persistent: y.persistent,
          "popper-class": y.popperClass,
          "popper-style": y.popperStyle,
          placement: y.placement,
          "popper-options": y.popperOptions,
          pure: y.pure,
          "raw-content": y.rawContent,
          "reference-el": y.referenceEl,
          "trigger-target-el": y.triggerTargetEl,
          "show-after": y.showAfter,
          strategy: y.strategy,
          teleported: y.teleported,
          transition: y.transition,
          "virtual-triggering": y.virtualTriggering,
          "z-index": y.zIndex,
          "append-to": y.appendTo
        }, {
          default: withCtx(() => [
            renderSlot(y.$slots, "content", {}, () => [
              y.rawContent ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: y.content
              }, null, 8, _C)) : (openBlock(), createElementBlock("span", $C, toDisplayString(y.content), 1))
            ]),
            y.showArrow ? (openBlock(), createBlock(unref(N2), {
              key: 0,
              "arrow-offset": y.arrowOffset
            }, null, 8, ["arrow-offset"])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var OC = xe(TC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
var tr = Lt(OC);
var Fc = Symbol("buttonGroupContextKey");
var PC = (e, t) => {
  zl({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, computed(() => e.type === "text"));
  const n = inject(Fc, void 0), a = lw("button"), { form: r } = Mn(), o = Gt(computed(() => n == null ? void 0 : n.size)), l = hr(), s = ref(), u = useSlots(), c = computed(() => e.type || (n == null ? void 0 : n.type) || ""), f = computed(() => {
    var h3, d, b;
    return (b = (d = e.autoInsertSpace) != null ? d : (h3 = a.value) == null ? void 0 : h3.autoInsertSpace) != null ? b : false;
  }), p = computed(() => e.tag === "button" ? {
    ariaDisabled: l.value || e.loading,
    disabled: l.value || e.loading,
    autofocus: e.autofocus,
    type: e.nativeType
  } : {}), m = computed(() => {
    var h3;
    const d = (h3 = u.default) == null ? void 0 : h3.call(u);
    if (f.value && (d == null ? void 0 : d.length) === 1) {
      const b = d[0];
      if ((b == null ? void 0 : b.type) === Text) {
        const y = b.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(y.trim());
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
    handleClick: (h3) => {
      e.nativeType === "reset" && (r == null || r.resetFields()), t("click", h3);
    }
  };
};
var xC = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
var MC = ["button", "submit", "reset"];
var al = Pe({
  size: xn,
  disabled: Boolean,
  type: {
    type: String,
    values: xC,
    default: ""
  },
  icon: {
    type: un
  },
  nativeType: {
    type: String,
    values: MC,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: un,
    default: () => dr
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
var AC = {
  click: (e) => e instanceof MouseEvent
};
function $t(e, t) {
  NC(e) && (e = "100%");
  var n = RC(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function $r(e) {
  return Math.min(1, Math.max(0, e));
}
function NC(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function RC(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function Ic(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Er(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function qn(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function LC(e, t, n) {
  return {
    r: $t(e, 255) * 255,
    g: $t(t, 255) * 255,
    b: $t(n, 255) * 255
  };
}
function Ai(e, t, n) {
  e = $t(e, 255), t = $t(t, 255), n = $t(n, 255);
  var a = Math.max(e, t, n), r = Math.min(e, t, n), o = 0, l = 0, s = (a + r) / 2;
  if (a === r)
    l = 0, o = 0;
  else {
    var u = a - r;
    switch (l = s > 0.5 ? u / (2 - a - r) : u / (a + r), a) {
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
function Po(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function FC(e, t, n) {
  var a, r, o;
  if (e = $t(e, 360), t = $t(t, 100), n = $t(n, 100), t === 0)
    r = n, o = n, a = n;
  else {
    var l = n < 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - l;
    a = Po(s, l, e + 1 / 3), r = Po(s, l, e), o = Po(s, l, e - 1 / 3);
  }
  return { r: a * 255, g: r * 255, b: o * 255 };
}
function Ni(e, t, n) {
  e = $t(e, 255), t = $t(t, 255), n = $t(n, 255);
  var a = Math.max(e, t, n), r = Math.min(e, t, n), o = 0, l = a, s = a - r, u = a === 0 ? 0 : s / a;
  if (a === r)
    o = 0;
  else {
    switch (a) {
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
function IC(e, t, n) {
  e = $t(e, 360) * 6, t = $t(t, 100), n = $t(n, 100);
  var a = Math.floor(e), r = e - a, o = n * (1 - t), l = n * (1 - r * t), s = n * (1 - (1 - r) * t), u = a % 6, c = [n, l, o, o, s, n][u], f = [s, n, n, l, o, o][u], p = [o, o, s, n, n, l][u];
  return { r: c * 255, g: f * 255, b: p * 255 };
}
function Ri(e, t, n, a) {
  var r = [
    qn(Math.round(e).toString(16)),
    qn(Math.round(t).toString(16)),
    qn(Math.round(n).toString(16))
  ];
  return a && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function DC(e, t, n, a, r) {
  var o = [
    qn(Math.round(e).toString(16)),
    qn(Math.round(t).toString(16)),
    qn(Math.round(n).toString(16)),
    qn(BC(a))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function BC(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function Li(e) {
  return It(e) / 255;
}
function It(e) {
  return parseInt(e, 16);
}
function zC(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var rl = {
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
function VC(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, a = null, r = null, o = null, l = false, s = false;
  return typeof e == "string" && (e = jC(e)), typeof e == "object" && (mn(e.r) && mn(e.g) && mn(e.b) ? (t = LC(e.r, e.g, e.b), l = true, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : mn(e.h) && mn(e.s) && mn(e.v) ? (a = Er(e.s), r = Er(e.v), t = IC(e.h, a, r), l = true, s = "hsv") : mn(e.h) && mn(e.s) && mn(e.l) && (a = Er(e.s), o = Er(e.l), t = FC(e.h, a, o), l = true, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = Ic(n), {
    ok: l,
    format: e.format || s,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var HC = "[-\\+]?\\d+%?";
var WC = "[-\\+]?\\d*\\.\\d+%?";
var In = "(?:".concat(WC, ")|(?:").concat(HC, ")");
var xo = "[\\s|\\(]+(".concat(In, ")[,|\\s]+(").concat(In, ")[,|\\s]+(").concat(In, ")\\s*\\)?");
var Mo = "[\\s|\\(]+(".concat(In, ")[,|\\s]+(").concat(In, ")[,|\\s]+(").concat(In, ")[,|\\s]+(").concat(In, ")\\s*\\)?");
var Zt = {
  CSS_UNIT: new RegExp(In),
  rgb: new RegExp("rgb" + xo),
  rgba: new RegExp("rgba" + Mo),
  hsl: new RegExp("hsl" + xo),
  hsla: new RegExp("hsla" + Mo),
  hsv: new RegExp("hsv" + xo),
  hsva: new RegExp("hsva" + Mo),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function jC(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return false;
  var t = false;
  if (rl[e])
    e = rl[e], t = true;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = Zt.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = Zt.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = Zt.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = Zt.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = Zt.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = Zt.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = Zt.hex8.exec(e), n ? {
    r: It(n[1]),
    g: It(n[2]),
    b: It(n[3]),
    a: Li(n[4]),
    format: t ? "name" : "hex8"
  } : (n = Zt.hex6.exec(e), n ? {
    r: It(n[1]),
    g: It(n[2]),
    b: It(n[3]),
    format: t ? "name" : "hex"
  } : (n = Zt.hex4.exec(e), n ? {
    r: It(n[1] + n[1]),
    g: It(n[2] + n[2]),
    b: It(n[3] + n[3]),
    a: Li(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = Zt.hex3.exec(e), n ? {
    r: It(n[1] + n[1]),
    g: It(n[2] + n[2]),
    b: It(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : false)))))))));
}
function mn(e) {
  return !!Zt.CSS_UNIT.exec(String(e));
}
var KC = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var a;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = zC(t)), this.originalInput = t;
      var r = VC(t);
      this.originalInput = t, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (a = n.format) !== null && a !== void 0 ? a : r.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, a, r, o = t.r / 255, l = t.g / 255, s = t.b / 255;
      return o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), s <= 0.03928 ? r = s / 12.92 : r = Math.pow((s + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * a + 0.0722 * r;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = Ic(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Ni(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Ni(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), r = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(a, "%, ").concat(r, "%)") : "hsva(".concat(n, ", ").concat(a, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = Ai(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = Ai(this.r, this.g, this.b), n = Math.round(t.h * 360), a = Math.round(t.s * 100), r = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(a, "%, ").concat(r, "%)") : "hsla(".concat(n, ", ").concat(a, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = false), Ri(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = false), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = false), DC(this.r, this.g, this.b, this.a, t);
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
      var t = Math.round(this.r), n = Math.round(this.g), a = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(a, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(a, ", ").concat(this.roundA, ")");
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
      for (var t = "#" + Ri(this.r, this.g, this.b, false), n = 0, a = Object.entries(rl); n < a.length; n++) {
        var r = a[n], o = r[0], l = r[1];
        if (t === l)
          return o;
      }
      return false;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var a = false, r = this.a < 1 && this.a >= 0, o = !n && r && (t.startsWith("hex") || t === "name");
      return o ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (a = this.toRgbString()), t === "prgb" && (a = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (a = this.toHexString()), t === "hex3" && (a = this.toHexString(true)), t === "hex4" && (a = this.toHex8String(true)), t === "hex8" && (a = this.toHex8String()), t === "name" && (a = this.toName()), t === "hsl" && (a = this.toHslString()), t === "hsv" && (a = this.toHsvString()), a || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = $r(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = $r(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = $r(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = $r(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), a = (n.h + t) % 360;
      return n.h = a < 0 ? 360 + a : a, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var a = this.toRgb(), r = new e(t).toRgb(), o = n / 100, l = {
        r: (r.r - a.r) * o + a.r,
        g: (r.g - a.g) * o + a.g,
        b: (r.b - a.b) * o + a.b,
        a: (r.a - a.a) * o + a.a
      };
      return new e(l);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var a = this.toHsl(), r = 360 / n, o = [this];
      for (a.h = (a.h - (r * t >> 1) + 720) % 360; --t; )
        a.h = (a.h + r) % 360, o.push(new e(a));
      return o;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), a = n.h, r = n.s, o = n.v, l = [], s = 1 / t; t--; )
        l.push(new e({ h: a, s: r, v: o })), o = (o + s) % 1;
      return l;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), a = new e(t).toRgb(), r = n.a + a.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + a.r * a.a * (1 - n.a)) / r,
        g: (n.g * n.a + a.g * a.a * (1 - n.a)) / r,
        b: (n.b * n.a + a.b * a.a * (1 - n.a)) / r,
        a: r
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), a = n.h, r = [this], o = 360 / t, l = 1; l < t; l++)
        r.push(new e({ h: (a + l * o) % 360, s: n.s, l: n.l }));
      return r;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
);
function Rn(e, t = 20) {
  return e.mix("#141414", t).toString();
}
function qC(e) {
  const t = hr(), n = ye("button");
  return computed(() => {
    let a = {};
    const r = e.color;
    if (r) {
      const o = new KC(r), l = e.dark ? o.tint(20).toString() : Rn(o, 20);
      if (e.plain)
        a = n.cssVarBlock({
          "bg-color": e.dark ? Rn(o, 90) : o.tint(90).toString(),
          "text-color": r,
          "border-color": e.dark ? Rn(o, 50) : o.tint(50).toString(),
          "hover-text-color": `var(${n.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": l,
          "active-text-color": `var(${n.cssVarName("color-white")})`,
          "active-border-color": l
        }), t.value && (a[n.cssVarBlockName("disabled-bg-color")] = e.dark ? Rn(o, 90) : o.tint(90).toString(), a[n.cssVarBlockName("disabled-text-color")] = e.dark ? Rn(o, 50) : o.tint(50).toString(), a[n.cssVarBlockName("disabled-border-color")] = e.dark ? Rn(o, 80) : o.tint(80).toString());
      else {
        const s = e.dark ? Rn(o, 30) : o.tint(30).toString(), u = o.isDark() ? `var(${n.cssVarName("color-white")})` : `var(${n.cssVarName("color-black")})`;
        if (a = n.cssVarBlock({
          "bg-color": r,
          "text-color": u,
          "border-color": r,
          "hover-bg-color": s,
          "hover-text-color": u,
          "hover-border-color": s,
          "active-bg-color": l,
          "active-border-color": l
        }), t.value) {
          const c = e.dark ? Rn(o, 50) : o.tint(50).toString();
          a[n.cssVarBlockName("disabled-bg-color")] = c, a[n.cssVarBlockName("disabled-text-color")] = e.dark ? "rgba(255, 255, 255, 0.5)" : `var(${n.cssVarName("color-white")})`, a[n.cssVarBlockName("disabled-border-color")] = c;
        }
      }
    }
    return a;
  });
}
var YC = defineComponent({
  name: "ElButton"
});
var UC = defineComponent({
  ...YC,
  props: al,
  emits: AC,
  setup(e, { expose: t, emit: n }) {
    const a = e, r = qC(a), o = ye("button"), { _ref: l, _size: s, _type: u, _disabled: c, _props: f, shouldAddSpace: p, handleClick: m } = PC(a, n);
    return t({
      ref: l,
      size: s,
      type: u,
      disabled: c,
      shouldAddSpace: p
    }), (v, h3) => (openBlock(), createBlock(resolveDynamicComponent(v.tag), mergeProps({
      ref_key: "_ref",
      ref: l
    }, unref(f), {
      class: [
        unref(o).b(),
        unref(o).m(unref(u)),
        unref(o).m(unref(s)),
        unref(o).is("disabled", unref(c)),
        unref(o).is("loading", v.loading),
        unref(o).is("plain", v.plain),
        unref(o).is("round", v.round),
        unref(o).is("circle", v.circle),
        unref(o).is("text", v.text),
        unref(o).is("link", v.link),
        unref(o).is("has-bg", v.bg)
      ],
      style: unref(r),
      onClick: unref(m)
    }), {
      default: withCtx(() => [
        v.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          v.$slots.loading ? renderSlot(v.$slots, "loading", { key: 0 }) : (openBlock(), createBlock(unref(Re), {
            key: 1,
            class: normalizeClass(unref(o).is("loading"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(v.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : v.icon || v.$slots.icon ? (openBlock(), createBlock(unref(Re), { key: 1 }, {
          default: withCtx(() => [
            v.icon ? (openBlock(), createBlock(resolveDynamicComponent(v.icon), { key: 0 })) : renderSlot(v.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : createCommentVNode("v-if", true),
        v.$slots.default ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: normalizeClass({ [unref(o).em("text", "expand")]: unref(p) })
        }, [
          renderSlot(v.$slots, "default")
        ], 2)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var GC = xe(UC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);
var XC = {
  size: al.size,
  type: al.type
};
var ZC = defineComponent({
  name: "ElButtonGroup"
});
var JC = defineComponent({
  ...ZC,
  props: XC,
  setup(e) {
    const t = e;
    provide(Fc, reactive({
      size: toRef(t, "size"),
      type: toRef(t, "type")
    }));
    const n = ye("button");
    return (a, r) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(`${unref(n).b("group")}`)
    }, [
      renderSlot(a.$slots, "default")
    ], 2));
  }
});
var Dc = xe(JC, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);
var kn = Lt(GC, {
  ButtonGroup: Dc
});
dn(Dc);
var An = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bc = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    var n = 1e3, a = 6e4, r = 36e5, o = "millisecond", l = "second", s = "minute", u = "hour", c = "day", f = "week", p = "month", m = "quarter", v = "year", h3 = "date", d = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var L = ["th", "st", "nd", "rd"], H = N % 100;
      return "[" + N + (L[(H - 20) % 10] || L[H] || L[0]) + "]";
    } }, g = function(N, L, H) {
      var K = String(N);
      return !K || K.length >= L ? N : "" + Array(L + 1 - K.length).join(H) + N;
    }, w = { s: g, z: function(N) {
      var L = -N.utcOffset(), H = Math.abs(L), K = Math.floor(H / 60), M = H % 60;
      return (L <= 0 ? "+" : "-") + g(K, 2, "0") + ":" + g(M, 2, "0");
    }, m: function N(L, H) {
      if (L.date() < H.date())
        return -N(H, L);
      var K = 12 * (H.year() - L.year()) + (H.month() - L.month()), M = L.clone().add(K, p), W = H - M < 0, E = L.clone().add(K + (W ? -1 : 1), p);
      return +(-(K + (H - M) / (W ? M - E : E - M)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: p, y: v, w: f, d: c, D: h3, h: u, m: s, s: l, ms: o, Q: m }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, k = "en", S = {};
    S[k] = C;
    var _ = function(N) {
      return N instanceof z;
    }, P = function N(L, H, K) {
      var M;
      if (!L)
        return k;
      if (typeof L == "string") {
        var W = L.toLowerCase();
        S[W] && (M = W), H && (S[W] = H, M = W);
        var E = L.split("-");
        if (!M && E.length > 1)
          return N(E[0]);
      } else {
        var V = L.name;
        S[V] = L, M = V;
      }
      return !K && M && (k = M), M || !K && k;
    }, A = function(N, L) {
      if (_(N))
        return N.clone();
      var H = typeof L == "object" ? L : {};
      return H.date = N, H.args = arguments, new z(H);
    }, B = w;
    B.l = P, B.i = _, B.w = function(N, L) {
      return A(N, { locale: L.$L, utc: L.$u, x: L.$x, $offset: L.$offset });
    };
    var z = function() {
      function N(H) {
        this.$L = P(H.locale, null, true), this.parse(H);
      }
      var L = N.prototype;
      return L.parse = function(H) {
        this.$d = function(K) {
          var M = K.date, W = K.utc;
          if (M === null)
            return /* @__PURE__ */ new Date(NaN);
          if (B.u(M))
            return /* @__PURE__ */ new Date();
          if (M instanceof Date)
            return new Date(M);
          if (typeof M == "string" && !/Z$/i.test(M)) {
            var E = M.match(b);
            if (E) {
              var V = E[2] - 1 || 0, G = (E[7] || "0").substring(0, 3);
              return W ? new Date(Date.UTC(E[1], V, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, G)) : new Date(E[1], V, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, G);
            }
          }
          return new Date(M);
        }(H), this.$x = H.x || {}, this.init();
      }, L.init = function() {
        var H = this.$d;
        this.$y = H.getFullYear(), this.$M = H.getMonth(), this.$D = H.getDate(), this.$W = H.getDay(), this.$H = H.getHours(), this.$m = H.getMinutes(), this.$s = H.getSeconds(), this.$ms = H.getMilliseconds();
      }, L.$utils = function() {
        return B;
      }, L.isValid = function() {
        return this.$d.toString() !== d;
      }, L.isSame = function(H, K) {
        var M = A(H);
        return this.startOf(K) <= M && M <= this.endOf(K);
      }, L.isAfter = function(H, K) {
        return A(H) < this.startOf(K);
      }, L.isBefore = function(H, K) {
        return this.endOf(K) < A(H);
      }, L.$g = function(H, K, M) {
        return B.u(H) ? this[K] : this.set(M, H);
      }, L.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, L.valueOf = function() {
        return this.$d.getTime();
      }, L.startOf = function(H, K) {
        var M = this, W = !!B.u(K) || K, E = B.p(H), V = function(le, ce) {
          var he = B.w(M.$u ? Date.UTC(M.$y, ce, le) : new Date(M.$y, ce, le), M);
          return W ? he : he.endOf(c);
        }, G = function(le, ce) {
          return B.w(M.toDate()[le].apply(M.toDate("s"), (W ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ce)), M);
        }, F = this.$W, X = this.$M, ne = this.$D, me = "set" + (this.$u ? "UTC" : "");
        switch (E) {
          case v:
            return W ? V(1, 0) : V(31, 11);
          case p:
            return W ? V(1, X) : V(0, X + 1);
          case f:
            var ge = this.$locale().weekStart || 0, se = (F < ge ? F + 7 : F) - ge;
            return V(W ? ne - se : ne + (6 - se), X);
          case c:
          case h3:
            return G(me + "Hours", 0);
          case u:
            return G(me + "Minutes", 1);
          case s:
            return G(me + "Seconds", 2);
          case l:
            return G(me + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, L.endOf = function(H) {
        return this.startOf(H, false);
      }, L.$set = function(H, K) {
        var M, W = B.p(H), E = "set" + (this.$u ? "UTC" : ""), V = (M = {}, M[c] = E + "Date", M[h3] = E + "Date", M[p] = E + "Month", M[v] = E + "FullYear", M[u] = E + "Hours", M[s] = E + "Minutes", M[l] = E + "Seconds", M[o] = E + "Milliseconds", M)[W], G = W === c ? this.$D + (K - this.$W) : K;
        if (W === p || W === v) {
          var F = this.clone().set(h3, 1);
          F.$d[V](G), F.init(), this.$d = F.set(h3, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          V && this.$d[V](G);
        return this.init(), this;
      }, L.set = function(H, K) {
        return this.clone().$set(H, K);
      }, L.get = function(H) {
        return this[B.p(H)]();
      }, L.add = function(H, K) {
        var M, W = this;
        H = Number(H);
        var E = B.p(K), V = function(X) {
          var ne = A(W);
          return B.w(ne.date(ne.date() + Math.round(X * H)), W);
        };
        if (E === p)
          return this.set(p, this.$M + H);
        if (E === v)
          return this.set(v, this.$y + H);
        if (E === c)
          return V(1);
        if (E === f)
          return V(7);
        var G = (M = {}, M[s] = a, M[u] = r, M[l] = n, M)[E] || 1, F = this.$d.getTime() + H * G;
        return B.w(F, this);
      }, L.subtract = function(H, K) {
        return this.add(-1 * H, K);
      }, L.format = function(H) {
        var K = this, M = this.$locale();
        if (!this.isValid())
          return M.invalidDate || d;
        var W = H || "YYYY-MM-DDTHH:mm:ssZ", E = B.z(this), V = this.$H, G = this.$m, F = this.$M, X = M.weekdays, ne = M.months, me = M.meridiem, ge = function(ce, he, Te, Me) {
          return ce && (ce[he] || ce(K, W)) || Te[he].slice(0, Me);
        }, se = function(ce) {
          return B.s(V % 12 || 12, ce, "0");
        }, le = me || function(ce, he, Te) {
          var Me = ce < 12 ? "AM" : "PM";
          return Te ? Me.toLowerCase() : Me;
        };
        return W.replace(y, function(ce, he) {
          return he || function(Te) {
            switch (Te) {
              case "YY":
                return String(K.$y).slice(-2);
              case "YYYY":
                return B.s(K.$y, 4, "0");
              case "M":
                return F + 1;
              case "MM":
                return B.s(F + 1, 2, "0");
              case "MMM":
                return ge(M.monthsShort, F, ne, 3);
              case "MMMM":
                return ge(ne, F);
              case "D":
                return K.$D;
              case "DD":
                return B.s(K.$D, 2, "0");
              case "d":
                return String(K.$W);
              case "dd":
                return ge(M.weekdaysMin, K.$W, X, 2);
              case "ddd":
                return ge(M.weekdaysShort, K.$W, X, 3);
              case "dddd":
                return X[K.$W];
              case "H":
                return String(V);
              case "HH":
                return B.s(V, 2, "0");
              case "h":
                return se(1);
              case "hh":
                return se(2);
              case "a":
                return le(V, G, true);
              case "A":
                return le(V, G, false);
              case "m":
                return String(G);
              case "mm":
                return B.s(G, 2, "0");
              case "s":
                return String(K.$s);
              case "ss":
                return B.s(K.$s, 2, "0");
              case "SSS":
                return B.s(K.$ms, 3, "0");
              case "Z":
                return E;
            }
            return null;
          }(ce) || E.replace(":", "");
        });
      }, L.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, L.diff = function(H, K, M) {
        var W, E = this, V = B.p(K), G = A(H), F = (G.utcOffset() - this.utcOffset()) * a, X = this - G, ne = function() {
          return B.m(E, G);
        };
        switch (V) {
          case v:
            W = ne() / 12;
            break;
          case p:
            W = ne();
            break;
          case m:
            W = ne() / 3;
            break;
          case f:
            W = (X - F) / 6048e5;
            break;
          case c:
            W = (X - F) / 864e5;
            break;
          case u:
            W = X / r;
            break;
          case s:
            W = X / a;
            break;
          case l:
            W = X / n;
            break;
          default:
            W = X;
        }
        return M ? W : B.a(W);
      }, L.daysInMonth = function() {
        return this.endOf(p).$D;
      }, L.$locale = function() {
        return S[this.$L];
      }, L.locale = function(H, K) {
        if (!H)
          return this.$L;
        var M = this.clone(), W = P(H, K, true);
        return W && (M.$L = W), M;
      }, L.clone = function() {
        return B.w(this.$d, this);
      }, L.toDate = function() {
        return new Date(this.valueOf());
      }, L.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, L.toISOString = function() {
        return this.$d.toISOString();
      }, L.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), I = z.prototype;
    return A.prototype = I, [["$ms", o], ["$s", l], ["$m", s], ["$H", u], ["$W", c], ["$M", p], ["$y", v], ["$D", h3]].forEach(function(N) {
      I[N[1]] = function(L) {
        return this.$g(L, N[0], N[1]);
      };
    }), A.extend = function(N, L) {
      return N.$i || (N(L, z, A), N.$i = true), A;
    }, A.locale = P, A.isDayjs = _, A.unix = function(N) {
      return A(1e3 * N);
    }, A.en = S[k], A.Ls = S, A.p = {}, A;
  });
})(Bc);
var QC = Bc.exports;
var Ae = fn(QC);
var zc = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, a = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, r = /\d\d/, o = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, s = {}, u = function(d) {
      return (d = +d) + (d > 68 ? 1900 : 2e3);
    }, c = function(d) {
      return function(b) {
        this[d] = +b;
      };
    }, f = [/[+-]\d\d:?(\d\d)?|Z/, function(d) {
      (this.zone || (this.zone = {})).offset = function(b) {
        if (!b || b === "Z")
          return 0;
        var y = b.match(/([+-]|\d\d)/g), C = 60 * y[1] + (+y[2] || 0);
        return C === 0 ? 0 : y[0] === "+" ? -C : C;
      }(d);
    }], p = function(d) {
      var b = s[d];
      return b && (b.indexOf ? b : b.s.concat(b.f));
    }, m = function(d, b) {
      var y, C = s.meridiem;
      if (C) {
        for (var g = 1; g <= 24; g += 1)
          if (d.indexOf(C(g, 0, b)) > -1) {
            y = g > 12;
            break;
          }
      } else
        y = d === (b ? "pm" : "PM");
      return y;
    }, v = { A: [l, function(d) {
      this.afternoon = m(d, false);
    }], a: [l, function(d) {
      this.afternoon = m(d, true);
    }], S: [/\d/, function(d) {
      this.milliseconds = 100 * +d;
    }], SS: [r, function(d) {
      this.milliseconds = 10 * +d;
    }], SSS: [/\d{3}/, function(d) {
      this.milliseconds = +d;
    }], s: [o, c("seconds")], ss: [o, c("seconds")], m: [o, c("minutes")], mm: [o, c("minutes")], H: [o, c("hours")], h: [o, c("hours")], HH: [o, c("hours")], hh: [o, c("hours")], D: [o, c("day")], DD: [r, c("day")], Do: [l, function(d) {
      var b = s.ordinal, y = d.match(/\d+/);
      if (this.day = y[0], b)
        for (var C = 1; C <= 31; C += 1)
          b(C).replace(/\[|\]/g, "") === d && (this.day = C);
    }], M: [o, c("month")], MM: [r, c("month")], MMM: [l, function(d) {
      var b = p("months"), y = (p("monthsShort") || b.map(function(C) {
        return C.slice(0, 3);
      })).indexOf(d) + 1;
      if (y < 1)
        throw new Error();
      this.month = y % 12 || y;
    }], MMMM: [l, function(d) {
      var b = p("months").indexOf(d) + 1;
      if (b < 1)
        throw new Error();
      this.month = b % 12 || b;
    }], Y: [/[+-]?\d+/, c("year")], YY: [r, function(d) {
      this.year = u(d);
    }], YYYY: [/\d{4}/, c("year")], Z: f, ZZ: f };
    function h3(d) {
      var b, y;
      b = d, y = s && s.formats;
      for (var C = (d = b.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, B, z) {
        var I = z && z.toUpperCase();
        return B || y[z] || n[z] || y[I].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, L, H) {
          return L || H.slice(1);
        });
      })).match(a), g = C.length, w = 0; w < g; w += 1) {
        var k = C[w], S = v[k], _ = S && S[0], P = S && S[1];
        C[w] = P ? { regex: _, parser: P } : k.replace(/^\[|\]$/g, "");
      }
      return function(A) {
        for (var B = {}, z = 0, I = 0; z < g; z += 1) {
          var N = C[z];
          if (typeof N == "string")
            I += N.length;
          else {
            var L = N.regex, H = N.parser, K = A.slice(I), M = L.exec(K)[0];
            H.call(B, M), A = A.replace(M, "");
          }
        }
        return function(W) {
          var E = W.afternoon;
          if (E !== void 0) {
            var V = W.hours;
            E ? V < 12 && (W.hours += 12) : V === 12 && (W.hours = 0), delete W.afternoon;
          }
        }(B), B;
      };
    }
    return function(d, b, y) {
      y.p.customParseFormat = true, d && d.parseTwoDigitYear && (u = d.parseTwoDigitYear);
      var C = b.prototype, g = C.parse;
      C.parse = function(w) {
        var k = w.date, S = w.utc, _ = w.args;
        this.$u = S;
        var P = _[1];
        if (typeof P == "string") {
          var A = _[2] === true, B = _[3] === true, z = A || B, I = _[2];
          B && (I = _[2]), s = this.$locale(), !A && I && (s = y.Ls[I]), this.$d = function(K, M, W) {
            try {
              if (["x", "X"].indexOf(M) > -1)
                return new Date((M === "X" ? 1e3 : 1) * K);
              var E = h3(M)(K), V = E.year, G = E.month, F = E.day, X = E.hours, ne = E.minutes, me = E.seconds, ge = E.milliseconds, se = E.zone, le = /* @__PURE__ */ new Date(), ce = F || (V || G ? 1 : le.getDate()), he = V || le.getFullYear(), Te = 0;
              V && !G || (Te = G > 0 ? G - 1 : le.getMonth());
              var Me = X || 0, We = ne || 0, je = me || 0, Ze = ge || 0;
              return se ? new Date(Date.UTC(he, Te, ce, Me, We, je, Ze + 60 * se.offset * 1e3)) : W ? new Date(Date.UTC(he, Te, ce, Me, We, je, Ze)) : new Date(he, Te, ce, Me, We, je, Ze);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(k, P, S), this.init(), I && I !== true && (this.$L = this.locale(I).$L), z && k != this.format(P) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
        } else if (P instanceof Array)
          for (var N = P.length, L = 1; L <= N; L += 1) {
            _[1] = P[L - 1];
            var H = y.apply(this, _);
            if (H.isValid()) {
              this.$d = H.$d, this.$L = H.$L, this.init();
              break;
            }
            L === N && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          g.call(this, w);
      };
    };
  });
})(zc);
var eS = zc.exports;
var tS = fn(eS);
var Fi = ["hours", "minutes", "seconds"];
var Ii = "HH:mm:ss";
var ia = "YYYY-MM-DD";
var nS = {
  date: ia,
  dates: ia,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${ia} ${Ii}`,
  monthrange: "YYYY-MM",
  daterange: ia,
  datetimerange: `${ia} ${Ii}`
};
var Ao = (e, t) => [
  e > 0 ? e - 1 : void 0,
  e,
  e < t ? e + 1 : void 0
];
var Vc = (e) => Array.from(Array.from({ length: e }).keys());
var Hc = (e) => e.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
var Wc = (e) => e.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
var Di = function(e, t) {
  const n = Cs(e), a = Cs(t);
  return n && a ? e.getTime() === t.getTime() : !n && !a ? e === t : false;
};
var Bi = function(e, t) {
  const n = Ue(e), a = Ue(t);
  return n && a ? e.length !== t.length ? false : e.every((r, o) => Di(r, t[o])) : !n && !a ? Di(e, t) : false;
};
var zi = function(e, t, n) {
  const a = Ga(t) || t === "x" ? Ae(e).locale(n) : Ae(e, t).locale(n);
  return a.isValid() ? a : void 0;
};
var Vi = function(e, t, n) {
  return Ga(t) ? e : t === "x" ? +e : Ae(e).locale(n).format(t);
};
var No = (e, t) => {
  var n;
  const a = [], r = t == null ? void 0 : t();
  for (let o = 0; o < e; o++)
    a.push((n = r == null ? void 0 : r.includes(o)) != null ? n : false);
  return a;
};
var jc = Pe({
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
var aS = Pe({
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
var Kc = Pe({
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
    default: cr
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: be([String, Object]),
    default: ""
  },
  size: xn,
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
  ...jc,
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
var rS = ["id", "name", "placeholder", "value", "disabled", "readonly"];
var oS = ["id", "name", "placeholder", "value", "disabled", "readonly"];
var lS = defineComponent({
  name: "Picker"
});
var sS = defineComponent({
  ...lS,
  props: Kc,
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
    const a = e, r = useAttrs(), { lang: o } = st(), l = ye("date"), s = ye("input"), u = ye("range"), { form: c, formItem: f } = Mn(), p = inject("ElPopperOptions", {}), m = ref(), v = ref(), h3 = ref(false), d = ref(false), b = ref(null);
    let y = false, C = false;
    const g = computed(() => [
      l.b("editor"),
      l.bm("editor", a.type),
      s.e("wrapper"),
      l.is("disabled", F.value),
      l.is("active", h3.value),
      u.b("editor"),
      rt ? u.bm("editor", rt.value) : "",
      r.class
    ]), w = computed(() => [
      s.e("icon"),
      u.e("close-icon"),
      ce.value ? "" : u.e("close-icon--hidden")
    ]);
    watch(h3, (x) => {
      x ? nextTick(() => {
        x && (b.value = a.modelValue);
      }) : (ke.value = null, nextTick(() => {
        k(a.modelValue);
      }));
    });
    const k = (x, ue) => {
      (ue || !Bi(x, b.value)) && (n("change", x), a.validateEvent && (f == null || f.validate("change").catch((Se) => nt(Se))));
    }, S = (x) => {
      if (!Bi(a.modelValue, x)) {
        let ue;
        Ue(x) ? ue = x.map((Se) => Vi(Se, a.valueFormat, o.value)) : x && (ue = Vi(x, a.valueFormat, o.value)), n("update:modelValue", x && ue, o.value);
      }
    }, _ = (x) => {
      n("keydown", x);
    }, P = computed(() => {
      if (v.value) {
        const x = Ke.value ? v.value : v.value.$el;
        return Array.from(x.querySelectorAll("input"));
      }
      return [];
    }), A = (x, ue, Se) => {
      const Ie = P.value;
      Ie.length && (!Se || Se === "min" ? (Ie[0].setSelectionRange(x, ue), Ie[0].focus()) : Se === "max" && (Ie[1].setSelectionRange(x, ue), Ie[1].focus()));
    }, B = () => {
      W(true, true), nextTick(() => {
        C = false;
      });
    }, z = (x = "", ue = false) => {
      ue || (C = true), h3.value = ue;
      let Se;
      Ue(x) ? Se = x.map((Ie) => Ie.toDate()) : Se = x && x.toDate(), ke.value = null, S(Se);
    }, I = () => {
      d.value = true;
    }, N = () => {
      n("visible-change", true);
    }, L = (x) => {
      (x == null ? void 0 : x.key) === Fe.esc && W(true, true);
    }, H = () => {
      d.value = false, h3.value = false, C = false, n("visible-change", false);
    }, K = () => {
      h3.value = true;
    }, M = () => {
      h3.value = false;
    }, W = (x = true, ue = false) => {
      C = ue;
      const [Se, Ie] = unref(P);
      let Y = Se;
      !x && Ke.value && (Y = Ie), Y && Y.focus();
    }, E = (x) => {
      a.readonly || F.value || h3.value || C || (h3.value = true, n("focus", x));
    };
    let V;
    const G = (x) => {
      const ue = async () => {
        setTimeout(() => {
          var Se;
          V === ue && (!((Se = m.value) != null && Se.isFocusInsideContent() && !y) && P.value.filter((Ie) => Ie.contains(document.activeElement)).length === 0 && (ct(), h3.value = false, n("blur", x), a.validateEvent && (f == null || f.validate("blur").catch((Ie) => nt(Ie)))), y = false);
        }, 0);
      };
      V = ue, ue();
    }, F = computed(() => a.disabled || (c == null ? void 0 : c.disabled)), X = computed(() => {
      let x;
      if (Te.value ? D.value.getDefaultValue && (x = D.value.getDefaultValue()) : Ue(a.modelValue) ? x = a.modelValue.map((ue) => zi(ue, a.valueFormat, o.value)) : x = zi(a.modelValue, a.valueFormat, o.value), D.value.getRangeAvailableTime) {
        const ue = D.value.getRangeAvailableTime(x);
        rn(ue, x) || (x = ue, S(Ue(x) ? x.map((Se) => Se.toDate()) : x.toDate()));
      }
      return Ue(x) && x.some((ue) => !ue) && (x = []), x;
    }), ne = computed(() => {
      if (!D.value.panelReady)
        return "";
      const x = ut(X.value);
      return Ue(ke.value) ? [
        ke.value[0] || x && x[0] || "",
        ke.value[1] || x && x[1] || ""
      ] : ke.value !== null ? ke.value : !ge.value && Te.value || !h3.value && Te.value ? "" : x ? se.value ? x.join(", ") : x : "";
    }), me = computed(() => a.type.includes("time")), ge = computed(() => a.type.startsWith("time")), se = computed(() => a.type === "dates"), le = computed(() => a.prefixIcon || (me.value ? xy : ry)), ce = ref(false), he = (x) => {
      a.readonly || F.value || ce.value && (x.stopPropagation(), B(), S(null), k(null, true), ce.value = false, h3.value = false, D.value.handleClear && D.value.handleClear());
    }, Te = computed(() => {
      const { modelValue: x } = a;
      return !x || Ue(x) && !x.filter(Boolean).length;
    }), Me = async (x) => {
      var ue;
      a.readonly || F.value || (((ue = x.target) == null ? void 0 : ue.tagName) !== "INPUT" || P.value.includes(document.activeElement)) && (h3.value = true);
    }, We = () => {
      a.readonly || F.value || !Te.value && a.clearable && (ce.value = true);
    }, je = () => {
      ce.value = false;
    }, Ze = (x) => {
      var ue;
      a.readonly || F.value || (((ue = x.touches[0].target) == null ? void 0 : ue.tagName) !== "INPUT" || P.value.includes(document.activeElement)) && (h3.value = true);
    }, Ke = computed(() => a.type.includes("range")), rt = Gt(), ht = computed(() => {
      var x, ue;
      return (ue = (x = unref(m)) == null ? void 0 : x.popperRef) == null ? void 0 : ue.contentRef;
    }), it = computed(() => {
      var x;
      return unref(Ke) ? unref(v) : (x = unref(v)) == null ? void 0 : x.$el;
    });
    mu(it, (x) => {
      const ue = unref(ht), Se = unref(it);
      ue && (x.target === ue || x.composedPath().includes(ue)) || x.target === Se || x.composedPath().includes(Se) || (h3.value = false);
    });
    const ke = ref(null), ct = () => {
      if (ke.value) {
        const x = dt(ne.value);
        x && Je(x) && (S(Ue(x) ? x.map((ue) => ue.toDate()) : x.toDate()), ke.value = null);
      }
      ke.value === "" && (S(null), k(null), ke.value = null);
    }, dt = (x) => x ? D.value.parseUserInput(x) : null, ut = (x) => x ? D.value.formatToString(x) : null, Je = (x) => D.value.isValidValue(x), re = async (x) => {
      if (a.readonly || F.value)
        return;
      const { code: ue } = x;
      if (_(x), ue === Fe.esc) {
        h3.value === true && (h3.value = false, x.preventDefault(), x.stopPropagation());
        return;
      }
      if (ue === Fe.down && (D.value.handleFocusPicker && (x.preventDefault(), x.stopPropagation()), h3.value === false && (h3.value = true, await nextTick()), D.value.handleFocusPicker)) {
        D.value.handleFocusPicker();
        return;
      }
      if (ue === Fe.tab) {
        y = true;
        return;
      }
      if (ue === Fe.enter || ue === Fe.numpadEnter) {
        (ke.value === null || ke.value === "" || Je(dt(ne.value))) && (ct(), h3.value = false), x.stopPropagation();
        return;
      }
      if (ke.value) {
        x.stopPropagation();
        return;
      }
      D.value.handleKeydownInput && D.value.handleKeydownInput(x);
    }, Ee = (x) => {
      ke.value = x, h3.value || (h3.value = true);
    }, De = (x) => {
      const ue = x.target;
      ke.value ? ke.value = [ue.value, ke.value[1]] : ke.value = [ue.value, null];
    }, Qe = (x) => {
      const ue = x.target;
      ke.value ? ke.value = [ke.value[0], ue.value] : ke.value = [null, ue.value];
    }, ee = () => {
      var x;
      const ue = ke.value, Se = dt(ue && ue[0]), Ie = unref(X);
      if (Se && Se.isValid()) {
        ke.value = [
          ut(Se),
          ((x = ne.value) == null ? void 0 : x[1]) || null
        ];
        const Y = [Se, Ie && (Ie[1] || null)];
        Je(Y) && (S(Y), ke.value = null);
      }
    }, J = () => {
      var x;
      const ue = unref(ke), Se = dt(ue && ue[1]), Ie = unref(X);
      if (Se && Se.isValid()) {
        ke.value = [
          ((x = unref(ne)) == null ? void 0 : x[0]) || null,
          ut(Se)
        ];
        const Y = [Ie && Ie[0], Se];
        Je(Y) && (S(Y), ke.value = null);
      }
    }, D = ref({}), Z = (x) => {
      D.value[x[0]] = x[1], D.value.panelReady = true;
    }, q = (x) => {
      n("calendar-change", x);
    }, te = (x, ue, Se) => {
      n("panel-change", x, ue, Se);
    };
    return provide("EP_PICKER_BASE", {
      props: a
    }), t({
      focus: W,
      handleFocusInput: E,
      handleBlurInput: G,
      handleOpen: K,
      handleClose: M,
      onPick: z
    }), (x, ue) => (openBlock(), createBlock(unref(tr), mergeProps({
      ref_key: "refPopper",
      ref: m,
      visible: h3.value,
      effect: "light",
      pure: "",
      trigger: "click"
    }, x.$attrs, {
      role: "dialog",
      teleported: "",
      transition: `${unref(l).namespace.value}-zoom-in-top`,
      "popper-class": [`${unref(l).namespace.value}-picker__popper`, x.popperClass],
      "popper-options": unref(p),
      "fallback-placements": ["bottom", "top", "right", "left"],
      "gpu-acceleration": false,
      "stop-popper-mouse-event": false,
      "hide-after": 0,
      persistent: "",
      onBeforeShow: I,
      onShow: N,
      onHide: H
    }), {
      default: withCtx(() => [
        unref(Ke) ? (openBlock(), createElementBlock("div", {
          key: 1,
          ref_key: "inputRef",
          ref: v,
          class: normalizeClass(unref(g)),
          style: normalizeStyle(x.$attrs.style),
          onClick: E,
          onMouseenter: We,
          onMouseleave: je,
          onTouchstart: Ze,
          onKeydown: re
        }, [
          unref(le) ? (openBlock(), createBlock(unref(Re), {
            key: 0,
            class: normalizeClass([unref(s).e("icon"), unref(u).e("icon")]),
            onMousedown: withModifiers(Me, ["prevent"]),
            onTouchstart: Ze
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(le))))
            ]),
            _: 1
          }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
          createBaseVNode("input", {
            id: x.id && x.id[0],
            autocomplete: "off",
            name: x.name && x.name[0],
            placeholder: x.startPlaceholder,
            value: unref(ne) && unref(ne)[0],
            disabled: unref(F),
            readonly: !x.editable || x.readonly,
            class: normalizeClass(unref(u).b("input")),
            onMousedown: Me,
            onInput: De,
            onChange: ee,
            onFocus: E,
            onBlur: G
          }, null, 42, rS),
          renderSlot(x.$slots, "range-separator", {}, () => [
            createBaseVNode("span", {
              class: normalizeClass(unref(u).b("separator"))
            }, toDisplayString(x.rangeSeparator), 3)
          ]),
          createBaseVNode("input", {
            id: x.id && x.id[1],
            autocomplete: "off",
            name: x.name && x.name[1],
            placeholder: x.endPlaceholder,
            value: unref(ne) && unref(ne)[1],
            disabled: unref(F),
            readonly: !x.editable || x.readonly,
            class: normalizeClass(unref(u).b("input")),
            onMousedown: Me,
            onFocus: E,
            onBlur: G,
            onInput: Qe,
            onChange: J
          }, null, 42, oS),
          x.clearIcon ? (openBlock(), createBlock(unref(Re), {
            key: 1,
            class: normalizeClass(unref(w)),
            onClick: he
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(x.clearIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 38)) : (openBlock(), createBlock(unref(Bt), {
          key: 0,
          id: x.id,
          ref_key: "inputRef",
          ref: v,
          "container-role": "combobox",
          "model-value": unref(ne),
          name: x.name,
          size: unref(rt),
          disabled: unref(F),
          placeholder: x.placeholder,
          class: normalizeClass([unref(l).b("editor"), unref(l).bm("editor", x.type), x.$attrs.class]),
          style: normalizeStyle(x.$attrs.style),
          readonly: !x.editable || x.readonly || unref(se) || x.type === "week",
          label: x.label,
          tabindex: x.tabindex,
          "validate-event": false,
          onInput: Ee,
          onFocus: E,
          onBlur: G,
          onKeydown: re,
          onChange: ct,
          onMousedown: Me,
          onMouseenter: We,
          onMouseleave: je,
          onTouchstart: Ze,
          onClick: ue[0] || (ue[0] = withModifiers(() => {
          }, ["stop"]))
        }, {
          prefix: withCtx(() => [
            unref(le) ? (openBlock(), createBlock(unref(Re), {
              key: 0,
              class: normalizeClass(unref(s).e("icon")),
              onMousedown: withModifiers(Me, ["prevent"]),
              onTouchstart: Ze
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(unref(le))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true)
          ]),
          suffix: withCtx(() => [
            ce.value && x.clearIcon ? (openBlock(), createBlock(unref(Re), {
              key: 0,
              class: normalizeClass(`${unref(s).e("icon")} clear-icon`),
              onClick: withModifiers(he, ["stop"])
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(x.clearIcon)))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ]),
          _: 1
        }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "onKeydown"]))
      ]),
      content: withCtx(() => [
        renderSlot(x.$slots, "default", {
          visible: h3.value,
          actualVisible: d.value,
          parsedValue: unref(X),
          format: x.format,
          unlinkPanels: x.unlinkPanels,
          type: x.type,
          defaultValue: x.defaultValue,
          onPick: z,
          onSelectRange: A,
          onSetPickerOption: Z,
          onCalendarChange: q,
          onPanelChange: te,
          onKeydown: L,
          onMousedown: ue[1] || (ue[1] = withModifiers(() => {
          }, ["stop"]))
        })
      ]),
      _: 3
    }, 16, ["visible", "transition", "popper-class", "popper-options"]));
  }
});
var iS = xe(sS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);
var uS = Pe({
  ...aS,
  datetimeRole: String,
  parsedValue: {
    type: be(Object)
  }
});
var cS = ({
  getAvailableHours: e,
  getAvailableMinutes: t,
  getAvailableSeconds: n
}) => {
  const a = (l, s, u, c) => {
    const f = {
      hour: e,
      minute: t,
      second: n
    };
    let p = l;
    return ["hour", "minute", "second"].forEach((m) => {
      if (f[m]) {
        let v;
        const h3 = f[m];
        switch (m) {
          case "minute": {
            v = h3(p.hour(), s, c);
            break;
          }
          case "second": {
            v = h3(p.hour(), p.minute(), s, c);
            break;
          }
          default: {
            v = h3(s, c);
            break;
          }
        }
        if (v != null && v.length && !v.includes(p[m]())) {
          const d = u ? 0 : v.length - 1;
          p = p[m](v[d]);
        }
      }
    }), p;
  }, r = {};
  return {
    timePickerOptions: r,
    getAvailableTime: a,
    onSetOption: ([l, s]) => {
      r[l] = s;
    }
  };
};
var Ro = (e) => {
  const t = (a, r) => a || r, n = (a) => a !== true;
  return e.map(t).filter(n);
};
var qc = (e, t, n) => ({
  getHoursList: (l, s) => No(24, e && (() => e == null ? void 0 : e(l, s))),
  getMinutesList: (l, s, u) => No(60, t && (() => t == null ? void 0 : t(l, s, u))),
  getSecondsList: (l, s, u, c) => No(60, n && (() => n == null ? void 0 : n(l, s, u, c)))
});
var dS = (e, t, n) => {
  const { getHoursList: a, getMinutesList: r, getSecondsList: o } = qc(e, t, n);
  return {
    getAvailableHours: (c, f) => Ro(a(c, f)),
    getAvailableMinutes: (c, f, p) => Ro(r(c, f, p)),
    getAvailableSeconds: (c, f, p, m) => Ro(o(c, f, p, m))
  };
};
var fS = (e) => {
  const t = ref(e.parsedValue);
  return watch(() => e.visible, (n) => {
    n || (t.value = e.parsedValue);
  }), t;
};
var Fn = /* @__PURE__ */ new Map();
var Hi;
at && (document.addEventListener("mousedown", (e) => Hi = e), document.addEventListener("mouseup", (e) => {
  for (const t of Fn.values())
    for (const { documentHandler: n } of t)
      n(e, Hi);
}));
function Wi(e, t) {
  let n = [];
  return Array.isArray(t.arg) ? n = t.arg : ga(t.arg) && n.push(t.arg), function(a, r) {
    const o = t.instance.popperRef, l = a.target, s = r == null ? void 0 : r.target, u = !t || !t.instance, c = !l || !s, f = e.contains(l) || e.contains(s), p = e === l, m = n.length && n.some((h3) => h3 == null ? void 0 : h3.contains(l)) || n.length && n.includes(s), v = o && (o.contains(l) || o.contains(s));
    u || c || f || p || m || v || t.value(a, r);
  };
}
var $a = {
  beforeMount(e, t) {
    Fn.has(e) || Fn.set(e, []), Fn.get(e).push({
      documentHandler: Wi(e, t),
      bindingFn: t.value
    });
  },
  updated(e, t) {
    Fn.has(e) || Fn.set(e, []);
    const n = Fn.get(e), a = n.findIndex((o) => o.bindingFn === t.oldValue), r = {
      documentHandler: Wi(e, t),
      bindingFn: t.value
    };
    a >= 0 ? n.splice(a, 1, r) : n.push(r);
  },
  unmounted(e) {
    Fn.delete(e);
  }
};
var pS = 100;
var vS = 600;
var ji = {
  beforeMount(e, t) {
    const n = t.value, { interval: a = pS, delay: r = vS } = ft(n) ? {} : n;
    let o, l;
    const s = () => ft(n) ? n() : n.handler(), u = () => {
      l && (clearTimeout(l), l = void 0), o && (clearInterval(o), o = void 0);
    };
    e.addEventListener("mousedown", (c) => {
      c.button === 0 && (u(), s(), document.addEventListener("mouseup", () => u(), {
        once: true
      }), l = setTimeout(() => {
        o = setInterval(() => {
          s();
        }, a);
      }, r));
    });
  }
};
var Ki = false;
var jn;
var ol;
var ll;
var Ir;
var Dr;
var Yc;
var Br;
var sl;
var il;
var ul;
var Uc;
var cl;
var dl;
var Gc;
var Xc;
function Mt() {
  if (!Ki) {
    Ki = true;
    var e = navigator.userAgent, t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), n = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (cl = /\b(iPhone|iP[ao]d)/.exec(e), dl = /\b(iP[ao]d)/.exec(e), ul = /Android/i.exec(e), Gc = /FBAN\/\w+;/i.exec(e), Xc = /Mobile/i.exec(e), Uc = !!/Win64/.exec(e), t) {
      jn = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN, jn && document && document.documentMode && (jn = document.documentMode);
      var a = /(?:Trident\/(\d+.\d+))/.exec(e);
      Yc = a ? parseFloat(a[1]) + 4 : jn, ol = t[2] ? parseFloat(t[2]) : NaN, ll = t[3] ? parseFloat(t[3]) : NaN, Ir = t[4] ? parseFloat(t[4]) : NaN, Ir ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e), Dr = t && t[1] ? parseFloat(t[1]) : NaN) : Dr = NaN;
    } else
      jn = ol = ll = Dr = Ir = NaN;
    if (n) {
      if (n[1]) {
        var r = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        Br = r ? parseFloat(r[1].replace("_", ".")) : true;
      } else
        Br = false;
      sl = !!n[2], il = !!n[3];
    } else
      Br = sl = il = false;
  }
}
var fl = { ie: function() {
  return Mt() || jn;
}, ieCompatibilityMode: function() {
  return Mt() || Yc > jn;
}, ie64: function() {
  return fl.ie() && Uc;
}, firefox: function() {
  return Mt() || ol;
}, opera: function() {
  return Mt() || ll;
}, webkit: function() {
  return Mt() || Ir;
}, safari: function() {
  return fl.webkit();
}, chrome: function() {
  return Mt() || Dr;
}, windows: function() {
  return Mt() || sl;
}, osx: function() {
  return Mt() || Br;
}, linux: function() {
  return Mt() || il;
}, iphone: function() {
  return Mt() || cl;
}, mobile: function() {
  return Mt() || cl || dl || ul || Xc;
}, nativeApp: function() {
  return Mt() || Gc;
}, android: function() {
  return Mt() || ul;
}, ipad: function() {
  return Mt() || dl;
} };
var hS = fl;
var Tr = !!(typeof window < "u" && window.document && window.document.createElement);
var mS = { canUseDOM: Tr, canUseWorkers: typeof Worker < "u", canUseEventListeners: Tr && !!(window.addEventListener || window.attachEvent), canUseViewport: Tr && !!window.screen, isInWorker: !Tr };
var Zc = mS;
var Jc;
Zc.canUseDOM && (Jc = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function gS(e, t) {
  if (!Zc.canUseDOM || t && !("addEventListener" in document))
    return false;
  var n = "on" + e, a = n in document;
  if (!a) {
    var r = document.createElement("div");
    r.setAttribute(n, "return;"), a = typeof r[n] == "function";
  }
  return !a && Jc && e === "wheel" && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a;
}
var bS = gS;
var qi = 10;
var Yi = 40;
var Ui = 800;
function Qc(e) {
  var t = 0, n = 0, a = 0, r = 0;
  return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), a = t * qi, r = n * qi, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (a = e.deltaX), (a || r) && e.deltaMode && (e.deltaMode == 1 ? (a *= Yi, r *= Yi) : (a *= Ui, r *= Ui)), a && !t && (t = a < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), { spinX: t, spinY: n, pixelX: a, pixelY: r };
}
Qc.getEventType = function() {
  return hS.firefox() ? "DOMMouseScroll" : bS("wheel") ? "wheel" : "mousewheel";
};
var yS = Qc;
var wS = function(e, t) {
  if (e && e.addEventListener) {
    const n = function(a) {
      const r = yS(a);
      t && Reflect.apply(t, this, [a, r]);
    };
    e.addEventListener("wheel", n, { passive: true });
  }
};
var CS = {
  beforeMount(e, t) {
    wS(e, t.value);
  }
};
var SS = Pe({
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
  ...jc
});
var kS = ["onClick"];
var _S = ["onMouseenter"];
var $S = defineComponent({
  __name: "basic-time-spinner",
  props: SS,
  emits: ["change", "select-range", "set-option"],
  setup(e, { emit: t }) {
    const n = e, a = ye("time"), { getHoursList: r, getMinutesList: o, getSecondsList: l } = qc(n.disabledHours, n.disabledMinutes, n.disabledSeconds);
    let s = false;
    const u = ref(), c = ref(), f = ref(), p = ref(), m = {
      hours: c,
      minutes: f,
      seconds: p
    }, v = computed(() => n.showSeconds ? Fi : Fi.slice(0, 2)), h3 = computed(() => {
      const { spinnerDate: E } = n, V = E.hour(), G = E.minute(), F = E.second();
      return { hours: V, minutes: G, seconds: F };
    }), d = computed(() => {
      const { hours: E, minutes: V } = unref(h3);
      return {
        hours: r(n.role),
        minutes: o(E, n.role),
        seconds: l(E, V, n.role)
      };
    }), b = computed(() => {
      const { hours: E, minutes: V, seconds: G } = unref(h3);
      return {
        hours: Ao(E, 23),
        minutes: Ao(V, 59),
        seconds: Ao(G, 59)
      };
    }), y = Dn((E) => {
      s = false, w(E);
    }, 200), C = (E) => {
      if (!!!n.amPmMode)
        return "";
      const G = n.amPmMode === "A";
      let F = E < 12 ? " am" : " pm";
      return G && (F = F.toUpperCase()), F;
    }, g = (E) => {
      let V;
      switch (E) {
        case "hours":
          V = [0, 2];
          break;
        case "minutes":
          V = [3, 5];
          break;
        case "seconds":
          V = [6, 8];
          break;
      }
      const [G, F] = V;
      t("select-range", G, F), u.value = E;
    }, w = (E) => {
      _(E, unref(h3)[E]);
    }, k = () => {
      w("hours"), w("minutes"), w("seconds");
    }, S = (E) => E.querySelector(`.${a.namespace.value}-scrollbar__wrap`), _ = (E, V) => {
      if (n.arrowControl)
        return;
      const G = unref(m[E]);
      G && G.$el && (S(G.$el).scrollTop = Math.max(0, V * P(E)));
    }, P = (E) => {
      const V = unref(m[E]), G = V == null ? void 0 : V.$el.querySelector("li");
      return G && Number.parseFloat(Ab(G, "height")) || 0;
    }, A = () => {
      z(1);
    }, B = () => {
      z(-1);
    }, z = (E) => {
      u.value || g("hours");
      const V = u.value, G = unref(h3)[V], F = u.value === "hours" ? 24 : 60, X = I(V, G, E, F);
      N(V, X), _(V, X), nextTick(() => g(V));
    }, I = (E, V, G, F) => {
      let X = (V + G + F) % F;
      const ne = unref(d)[E];
      for (; ne[X] && X !== V; )
        X = (X + G + F) % F;
      return X;
    }, N = (E, V) => {
      if (unref(d)[E][V])
        return;
      const { hours: X, minutes: ne, seconds: me } = unref(h3);
      let ge;
      switch (E) {
        case "hours":
          ge = n.spinnerDate.hour(V).minute(ne).second(me);
          break;
        case "minutes":
          ge = n.spinnerDate.hour(X).minute(V).second(me);
          break;
        case "seconds":
          ge = n.spinnerDate.hour(X).minute(ne).second(V);
          break;
      }
      t("change", ge);
    }, L = (E, { value: V, disabled: G }) => {
      G || (N(E, V), g(E), _(E, V));
    }, H = (E) => {
      s = true, y(E);
      const V = Math.min(Math.round((S(unref(m[E]).$el).scrollTop - (K(E) * 0.5 - 10) / P(E) + 3) / P(E)), E === "hours" ? 23 : 59);
      N(E, V);
    }, K = (E) => unref(m[E]).$el.offsetHeight, M = () => {
      const E = (V) => {
        const G = unref(m[V]);
        G && G.$el && (S(G.$el).onscroll = () => {
          H(V);
        });
      };
      E("hours"), E("minutes"), E("seconds");
    };
    onMounted(() => {
      nextTick(() => {
        !n.arrowControl && M(), k(), n.role === "start" && g("hours");
      });
    });
    const W = (E, V) => {
      m[V].value = E;
    };
    return t("set-option", [`${n.role}_scrollDown`, z]), t("set-option", [`${n.role}_emitSelectRange`, g]), watch(() => n.spinnerDate, () => {
      s || k();
    }), (E, V) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(a).b("spinner"), { "has-seconds": E.showSeconds }])
    }, [
      E.arrowControl ? createCommentVNode("v-if", true) : (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(v), (G) => (openBlock(), createBlock(unref(Ma), {
        key: G,
        ref_for: true,
        ref: (F) => W(F, G),
        class: normalizeClass(unref(a).be("spinner", "wrapper")),
        "wrap-style": "max-height: inherit;",
        "view-class": unref(a).be("spinner", "list"),
        noresize: "",
        tag: "ul",
        onMouseenter: (F) => g(G),
        onMousemove: (F) => w(G)
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(d)[G], (F, X) => (openBlock(), createElementBlock("li", {
            key: X,
            class: normalizeClass([
              unref(a).be("spinner", "item"),
              unref(a).is("active", X === unref(h3)[G]),
              unref(a).is("disabled", F)
            ]),
            onClick: (ne) => L(G, { value: X, disabled: F })
          }, [
            G === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(("0" + (E.amPmMode ? X % 12 || 12 : X)).slice(-2)) + toDisplayString(C(X)), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(("0" + X).slice(-2)), 1)
            ], 64))
          ], 10, kS))), 128))
        ]),
        _: 2
      }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]))), 128)),
      E.arrowControl ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(v), (G) => (openBlock(), createElementBlock("div", {
        key: G,
        class: normalizeClass([unref(a).be("spinner", "wrapper"), unref(a).is("arrow")]),
        onMouseenter: (F) => g(G)
      }, [
        withDirectives((openBlock(), createBlock(unref(Re), {
          class: normalizeClass(["arrow-up", unref(a).be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(unref(nc))
          ]),
          _: 1
        }, 8, ["class"])), [
          [unref(ji), B]
        ]),
        withDirectives((openBlock(), createBlock(unref(Re), {
          class: normalizeClass(["arrow-down", unref(a).be("spinner", "arrow")])
        }, {
          default: withCtx(() => [
            createVNode(unref(io))
          ]),
          _: 1
        }, 8, ["class"])), [
          [unref(ji), A]
        ]),
        createBaseVNode("ul", {
          class: normalizeClass(unref(a).be("spinner", "list"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(b)[G], (F, X) => (openBlock(), createElementBlock("li", {
            key: X,
            class: normalizeClass([
              unref(a).be("spinner", "item"),
              unref(a).is("active", F === unref(h3)[G]),
              unref(a).is("disabled", unref(d)[G][F])
            ])
          }, [
            typeof F == "number" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              G === "hours" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(("0" + (E.amPmMode ? F % 12 || 12 : F)).slice(-2)) + toDisplayString(C(F)), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(("0" + F).slice(-2)), 1)
              ], 64))
            ], 64)) : createCommentVNode("v-if", true)
          ], 2))), 128))
        ], 2)
      ], 42, _S))), 128)) : createCommentVNode("v-if", true)
    ], 2));
  }
});
var ES = xe($S, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);
var TS = defineComponent({
  __name: "panel-time-pick",
  props: uS,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(e, { emit: t }) {
    const n = e, a = inject("EP_PICKER_BASE"), {
      arrowControl: r,
      disabledHours: o,
      disabledMinutes: l,
      disabledSeconds: s,
      defaultValue: u
    } = a.props, { getAvailableHours: c, getAvailableMinutes: f, getAvailableSeconds: p } = dS(o, l, s), m = ye("time"), { t: v, lang: h3 } = st(), d = ref([0, 2]), b = fS(n), y = computed(() => $n(n.actualVisible) ? `${m.namespace.value}-zoom-in-top` : ""), C = computed(() => n.format.includes("ss")), g = computed(() => n.format.includes("A") ? "A" : n.format.includes("a") ? "a" : ""), w = (W) => {
      const E = Ae(W).locale(h3.value), V = L(E);
      return E.isSame(V);
    }, k = () => {
      t("pick", b.value, false);
    }, S = (W = false, E = false) => {
      E || t("pick", n.parsedValue, W);
    }, _ = (W) => {
      if (!n.visible)
        return;
      const E = L(W).millisecond(0);
      t("pick", E, true);
    }, P = (W, E) => {
      t("select-range", W, E), d.value = [W, E];
    }, A = (W) => {
      const E = [0, 3].concat(C.value ? [6] : []), V = ["hours", "minutes"].concat(C.value ? ["seconds"] : []), F = (E.indexOf(d.value[0]) + W + E.length) % E.length;
      z.start_emitSelectRange(V[F]);
    }, B = (W) => {
      const E = W.code, { left: V, right: G, up: F, down: X } = Fe;
      if ([V, G].includes(E)) {
        A(E === V ? -1 : 1), W.preventDefault();
        return;
      }
      if ([F, X].includes(E)) {
        const ne = E === F ? -1 : 1;
        z.start_scrollDown(ne), W.preventDefault();
        return;
      }
    }, { timePickerOptions: z, onSetOption: I, getAvailableTime: N } = cS({
      getAvailableHours: c,
      getAvailableMinutes: f,
      getAvailableSeconds: p
    }), L = (W) => N(W, n.datetimeRole || "", true), H = (W) => W ? Ae(W, n.format).locale(h3.value) : null, K = (W) => W ? W.format(n.format) : null, M = () => Ae(u).locale(h3.value);
    return t("set-picker-option", ["isValidValue", w]), t("set-picker-option", ["formatToString", K]), t("set-picker-option", ["parseUserInput", H]), t("set-picker-option", ["handleKeydownInput", B]), t("set-picker-option", ["getRangeAvailableTime", L]), t("set-picker-option", ["getDefaultValue", M]), (W, E) => (openBlock(), createBlock(Transition, { name: unref(y) }, {
      default: withCtx(() => [
        W.actualVisible || W.visible ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(m).b("panel"))
        }, [
          createBaseVNode("div", {
            class: normalizeClass([unref(m).be("panel", "content"), { "has-seconds": unref(C) }])
          }, [
            createVNode(ES, {
              ref: "spinner",
              role: W.datetimeRole || "start",
              "arrow-control": unref(r),
              "show-seconds": unref(C),
              "am-pm-mode": unref(g),
              "spinner-date": W.parsedValue,
              "disabled-hours": unref(o),
              "disabled-minutes": unref(l),
              "disabled-seconds": unref(s),
              onChange: _,
              onSetOption: unref(I),
              onSelectRange: P
            }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(unref(m).be("panel", "footer"))
          }, [
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass([unref(m).be("panel", "btn"), "cancel"]),
              onClick: k
            }, toDisplayString(unref(v)("el.datepicker.cancel")), 3),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass([unref(m).be("panel", "btn"), "confirm"]),
              onClick: E[0] || (E[0] = (V) => S())
            }, toDisplayString(unref(v)("el.datepicker.confirm")), 3)
          ], 2)
        ], 2)) : createCommentVNode("v-if", true)
      ]),
      _: 1
    }, 8, ["name"]));
  }
});
var pl = xe(TS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);
var ed = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    return function(n, a, r) {
      var o = a.prototype, l = function(p) {
        return p && (p.indexOf ? p : p.s);
      }, s = function(p, m, v, h3, d) {
        var b = p.name ? p : p.$locale(), y = l(b[m]), C = l(b[v]), g = y || C.map(function(k) {
          return k.slice(0, h3);
        });
        if (!d)
          return g;
        var w = b.weekStart;
        return g.map(function(k, S) {
          return g[(S + (w || 0)) % 7];
        });
      }, u = function() {
        return r.Ls[r.locale()];
      }, c = function(p, m) {
        return p.formats[m] || function(v) {
          return v.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(h3, d, b) {
            return d || b.slice(1);
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
      }, r.localeData = function() {
        var p = u();
        return { firstDayOfWeek: function() {
          return p.weekStart || 0;
        }, weekdays: function() {
          return r.weekdays();
        }, weekdaysShort: function() {
          return r.weekdaysShort();
        }, weekdaysMin: function() {
          return r.weekdaysMin();
        }, months: function() {
          return r.months();
        }, monthsShort: function() {
          return r.monthsShort();
        }, longDateFormat: function(m) {
          return c(p, m);
        }, meridiem: p.meridiem, ordinal: p.ordinal };
      }, r.months = function() {
        return s(u(), "months");
      }, r.monthsShort = function() {
        return s(u(), "monthsShort", "months", 3);
      }, r.weekdays = function(p) {
        return s(u(), "weekdays", null, null, p);
      }, r.weekdaysShort = function(p) {
        return s(u(), "weekdaysShort", "weekdays", 3, p);
      }, r.weekdaysMin = function(p) {
        return s(u(), "weekdaysMin", "weekdays", 2, p);
      };
    };
  });
})(ed);
var OS = ed.exports;
var PS = fn(OS);
var td = {
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
  size: xn,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  }
};
var nd = {
  [lt]: (e) => St(e) || ot(e) || Qt(e),
  change: (e) => St(e) || ot(e) || Qt(e)
};
var Aa = Symbol("checkboxGroupContextKey");
var xS = ({
  model: e,
  isChecked: t
}) => {
  const n = inject(Aa, void 0), a = computed(() => {
    var o, l;
    const s = (o = n == null ? void 0 : n.max) == null ? void 0 : o.value, u = (l = n == null ? void 0 : n.min) == null ? void 0 : l.value;
    return !$n(s) && e.value.length >= s && !t.value || !$n(u) && e.value.length <= u && t.value;
  });
  return {
    isDisabled: hr(computed(() => (n == null ? void 0 : n.disabled.value) || a.value)),
    isLimitDisabled: a
  };
};
var MS = (e, {
  model: t,
  isLimitExceeded: n,
  hasOwnLabel: a,
  isDisabled: r,
  isLabeledByFormItem: o
}) => {
  const l = inject(Aa, void 0), { formItem: s } = Mn(), { emit: u } = getCurrentInstance();
  function c(h3) {
    var d, b;
    return h3 === e.trueLabel || h3 === true ? (d = e.trueLabel) != null ? d : true : (b = e.falseLabel) != null ? b : false;
  }
  function f(h3, d) {
    u("change", c(h3), d);
  }
  function p(h3) {
    if (n.value)
      return;
    const d = h3.target;
    u("change", c(d.checked), h3);
  }
  async function m(h3) {
    n.value || !a.value && !r.value && o.value && (h3.composedPath().some((y) => y.tagName === "LABEL") || (t.value = c([false, e.falseLabel].includes(t.value)), await nextTick(), f(t.value, h3)));
  }
  const v = computed(() => (l == null ? void 0 : l.validateEvent) || e.validateEvent);
  return watch(() => e.modelValue, () => {
    v.value && (s == null || s.validate("change").catch((h3) => nt(h3)));
  }), {
    handleChange: p,
    onClickRoot: m
  };
};
var AS = (e) => {
  const t = ref(false), { emit: n } = getCurrentInstance(), a = inject(Aa, void 0), r = computed(() => $n(a) === false), o = ref(false);
  return {
    model: computed({
      get() {
        var s, u;
        return r.value ? (s = a == null ? void 0 : a.modelValue) == null ? void 0 : s.value : (u = e.modelValue) != null ? u : t.value;
      },
      set(s) {
        var u, c;
        r.value && Ue(s) ? (o.value = ((u = a == null ? void 0 : a.max) == null ? void 0 : u.value) !== void 0 && s.length > (a == null ? void 0 : a.max.value), o.value === false && ((c = a == null ? void 0 : a.changeEvent) == null || c.call(a, s))) : (n(lt, s), t.value = s);
      }
    }),
    isGroup: r,
    isLimitExceeded: o
  };
};
var NS = (e, t, { model: n }) => {
  const a = inject(Aa, void 0), r = ref(false), o = computed(() => {
    const c = n.value;
    return Qt(c) ? c : Ue(c) ? zt(e.label) ? c.map(toRaw).some((f) => rn(f, e.label)) : c.map(toRaw).includes(e.label) : c != null ? c === e.trueLabel : !!c;
  }), l = Gt(computed(() => {
    var c;
    return (c = a == null ? void 0 : a.size) == null ? void 0 : c.value;
  }), {
    prop: true
  }), s = Gt(computed(() => {
    var c;
    return (c = a == null ? void 0 : a.size) == null ? void 0 : c.value;
  })), u = computed(() => !!(t.default || e.label));
  return {
    checkboxButtonSize: l,
    isChecked: o,
    isFocused: r,
    checkboxSize: s,
    hasOwnLabel: u
  };
};
var RS = (e, { model: t }) => {
  function n() {
    Ue(t.value) && !t.value.includes(e.label) ? t.value.push(e.label) : t.value = e.trueLabel || true;
  }
  e.checked && n();
};
var ad = (e, t) => {
  const { formItem: n } = Mn(), { model: a, isGroup: r, isLimitExceeded: o } = AS(e), {
    isFocused: l,
    isChecked: s,
    checkboxButtonSize: u,
    checkboxSize: c,
    hasOwnLabel: f
  } = NS(e, t, { model: a }), { isDisabled: p } = xS({ model: a, isChecked: s }), { inputId: m, isLabeledByFormItem: v } = vo(e, {
    formItemContext: n,
    disableIdGeneration: f,
    disableIdManagement: r
  }), { handleChange: h3, onClickRoot: d } = MS(e, {
    model: a,
    isLimitExceeded: o,
    hasOwnLabel: f,
    isDisabled: p,
    isLabeledByFormItem: v
  });
  return RS(e, { model: a }), {
    inputId: m,
    isLabeledByFormItem: v,
    isChecked: s,
    isDisabled: p,
    isFocused: l,
    checkboxButtonSize: u,
    checkboxSize: c,
    hasOwnLabel: f,
    model: a,
    handleChange: h3,
    onClickRoot: d
  };
};
var LS = ["tabindex", "role", "aria-checked"];
var FS = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
var IS = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
var DS = defineComponent({
  name: "ElCheckbox"
});
var BS = defineComponent({
  ...DS,
  props: td,
  emits: nd,
  setup(e) {
    const t = e, n = useSlots(), {
      inputId: a,
      isLabeledByFormItem: r,
      isChecked: o,
      isDisabled: l,
      isFocused: s,
      checkboxSize: u,
      hasOwnLabel: c,
      model: f,
      handleChange: p,
      onClickRoot: m
    } = ad(t, n), v = ye("checkbox"), h3 = computed(() => [
      v.b(),
      v.m(u.value),
      v.is("disabled", l.value),
      v.is("bordered", t.border),
      v.is("checked", o.value)
    ]), d = computed(() => [
      v.e("input"),
      v.is("disabled", l.value),
      v.is("checked", o.value),
      v.is("indeterminate", t.indeterminate),
      v.is("focus", s.value)
    ]);
    return (b, y) => (openBlock(), createBlock(resolveDynamicComponent(!unref(c) && unref(r) ? "span" : "label"), {
      class: normalizeClass(unref(h3)),
      "aria-controls": b.indeterminate ? b.controls : null,
      onClick: unref(m)
    }, {
      default: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass(unref(d)),
          tabindex: b.indeterminate ? 0 : void 0,
          role: b.indeterminate ? "checkbox" : void 0,
          "aria-checked": b.indeterminate ? "mixed" : void 0
        }, [
          b.trueLabel || b.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            id: unref(a),
            "onUpdate:modelValue": y[0] || (y[0] = (C) => isRef(f) ? f.value = C : null),
            class: normalizeClass(unref(v).e("original")),
            type: "checkbox",
            "aria-hidden": b.indeterminate ? "true" : "false",
            name: b.name,
            tabindex: b.tabindex,
            disabled: unref(l),
            "true-value": b.trueLabel,
            "false-value": b.falseLabel,
            onChange: y[1] || (y[1] = (...C) => unref(p) && unref(p)(...C)),
            onFocus: y[2] || (y[2] = (C) => s.value = true),
            onBlur: y[3] || (y[3] = (C) => s.value = false)
          }, null, 42, FS)), [
            [vModelCheckbox, unref(f)]
          ]) : withDirectives((openBlock(), createElementBlock("input", {
            key: 1,
            id: unref(a),
            "onUpdate:modelValue": y[4] || (y[4] = (C) => isRef(f) ? f.value = C : null),
            class: normalizeClass(unref(v).e("original")),
            type: "checkbox",
            "aria-hidden": b.indeterminate ? "true" : "false",
            disabled: unref(l),
            value: b.label,
            name: b.name,
            tabindex: b.tabindex,
            onChange: y[5] || (y[5] = (...C) => unref(p) && unref(p)(...C)),
            onFocus: y[6] || (y[6] = (C) => s.value = true),
            onBlur: y[7] || (y[7] = (C) => s.value = false)
          }, null, 42, IS)), [
            [vModelCheckbox, unref(f)]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(v).e("inner"))
          }, null, 2)
        ], 10, LS),
        unref(c) ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(unref(v).e("label"))
        }, [
          renderSlot(b.$slots, "default"),
          b.$slots.default ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(b.label), 1)
          ], 64))
        ], 2)) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["class", "aria-controls", "onClick"]));
  }
});
var zS = xe(BS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);
var VS = ["name", "tabindex", "disabled", "true-value", "false-value"];
var HS = ["name", "tabindex", "disabled", "value"];
var WS = defineComponent({
  name: "ElCheckboxButton"
});
var jS = defineComponent({
  ...WS,
  props: td,
  emits: nd,
  setup(e) {
    const t = e, n = useSlots(), {
      isFocused: a,
      isChecked: r,
      isDisabled: o,
      checkboxButtonSize: l,
      model: s,
      handleChange: u
    } = ad(t, n), c = inject(Aa, void 0), f = ye("checkbox"), p = computed(() => {
      var v, h3, d, b;
      const y = (h3 = (v = c == null ? void 0 : c.fill) == null ? void 0 : v.value) != null ? h3 : "";
      return {
        backgroundColor: y,
        borderColor: y,
        color: (b = (d = c == null ? void 0 : c.textColor) == null ? void 0 : d.value) != null ? b : "",
        boxShadow: y ? `-1px 0 0 0 ${y}` : void 0
      };
    }), m = computed(() => [
      f.b("button"),
      f.bm("button", l.value),
      f.is("disabled", o.value),
      f.is("checked", r.value),
      f.is("focus", a.value)
    ]);
    return (v, h3) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(unref(m))
    }, [
      v.trueLabel || v.falseLabel ? withDirectives((openBlock(), createElementBlock("input", {
        key: 0,
        "onUpdate:modelValue": h3[0] || (h3[0] = (d) => isRef(s) ? s.value = d : null),
        class: normalizeClass(unref(f).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: unref(o),
        "true-value": v.trueLabel,
        "false-value": v.falseLabel,
        onChange: h3[1] || (h3[1] = (...d) => unref(u) && unref(u)(...d)),
        onFocus: h3[2] || (h3[2] = (d) => a.value = true),
        onBlur: h3[3] || (h3[3] = (d) => a.value = false)
      }, null, 42, VS)), [
        [vModelCheckbox, unref(s)]
      ]) : withDirectives((openBlock(), createElementBlock("input", {
        key: 1,
        "onUpdate:modelValue": h3[4] || (h3[4] = (d) => isRef(s) ? s.value = d : null),
        class: normalizeClass(unref(f).be("button", "original")),
        type: "checkbox",
        name: v.name,
        tabindex: v.tabindex,
        disabled: unref(o),
        value: v.label,
        onChange: h3[5] || (h3[5] = (...d) => unref(u) && unref(u)(...d)),
        onFocus: h3[6] || (h3[6] = (d) => a.value = true),
        onBlur: h3[7] || (h3[7] = (d) => a.value = false)
      }, null, 42, HS)), [
        [vModelCheckbox, unref(s)]
      ]),
      v.$slots.default || v.label ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(unref(f).be("button", "inner")),
        style: normalizeStyle(unref(r) ? unref(p) : void 0)
      }, [
        renderSlot(v.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(v.label), 1)
        ])
      ], 6)) : createCommentVNode("v-if", true)
    ], 2));
  }
});
var rd = xe(jS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);
var KS = Pe({
  modelValue: {
    type: be(Array),
    default: () => []
  },
  disabled: Boolean,
  min: Number,
  max: Number,
  size: xn,
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
var qS = {
  [lt]: (e) => Ue(e),
  change: (e) => Ue(e)
};
var YS = defineComponent({
  name: "ElCheckboxGroup"
});
var US = defineComponent({
  ...YS,
  props: KS,
  emits: qS,
  setup(e, { emit: t }) {
    const n = e, a = ye("checkbox"), { formItem: r } = Mn(), { inputId: o, isLabeledByFormItem: l } = vo(n, {
      formItemContext: r
    }), s = async (c) => {
      t(lt, c), await nextTick(), t("change", c);
    }, u = computed({
      get() {
        return n.modelValue;
      },
      set(c) {
        s(c);
      }
    });
    return provide(Aa, {
      ...Tb(toRefs(n), [
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
      n.validateEvent && (r == null || r.validate("change").catch((c) => nt(c)));
    }), (c, f) => {
      var p;
      return openBlock(), createBlock(resolveDynamicComponent(c.tag), {
        id: unref(o),
        class: normalizeClass(unref(a).b("group")),
        role: "group",
        "aria-label": unref(l) ? void 0 : c.label || "checkbox-group",
        "aria-labelledby": unref(l) ? (p = unref(r)) == null ? void 0 : p.labelId : void 0
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var od = xe(US, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);
var ea = Lt(zS, {
  CheckboxButton: rd,
  CheckboxGroup: od
});
dn(rd);
dn(od);
var ld = Pe({
  size: xn,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
var GS = Pe({
  ...ld,
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
var sd = {
  [lt]: (e) => St(e) || ot(e) || Qt(e),
  [Jn]: (e) => St(e) || ot(e) || Qt(e)
};
var id = Symbol("radioGroupKey");
var ud = (e, t) => {
  const n = ref(), a = inject(id, void 0), r = computed(() => !!a), o = computed({
    get() {
      return r.value ? a.modelValue : e.modelValue;
    },
    set(f) {
      r.value ? a.changeEvent(f) : t && t(lt, f), n.value.checked = e.modelValue === e.label;
    }
  }), l = Gt(computed(() => a == null ? void 0 : a.size)), s = hr(computed(() => a == null ? void 0 : a.disabled)), u = ref(false), c = computed(() => s.value || r.value && o.value !== e.label ? -1 : 0);
  return {
    radioRef: n,
    isGroup: r,
    radioGroup: a,
    focus: u,
    size: l,
    disabled: s,
    tabIndex: c,
    modelValue: o
  };
};
var XS = ["value", "name", "disabled"];
var ZS = defineComponent({
  name: "ElRadio"
});
var JS = defineComponent({
  ...ZS,
  props: GS,
  emits: sd,
  setup(e, { emit: t }) {
    const n = e, a = ye("radio"), { radioRef: r, radioGroup: o, focus: l, size: s, disabled: u, modelValue: c } = ud(n, t);
    function f() {
      nextTick(() => t("change", c.value));
    }
    return (p, m) => {
      var v;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(a).b(),
          unref(a).is("disabled", unref(u)),
          unref(a).is("focus", unref(l)),
          unref(a).is("bordered", p.border),
          unref(a).is("checked", unref(c) === p.label),
          unref(a).m(unref(s))
        ])
      }, [
        createBaseVNode("span", {
          class: normalizeClass([
            unref(a).e("input"),
            unref(a).is("disabled", unref(u)),
            unref(a).is("checked", unref(c) === p.label)
          ])
        }, [
          withDirectives(createBaseVNode("input", {
            ref_key: "radioRef",
            ref: r,
            "onUpdate:modelValue": m[0] || (m[0] = (h3) => isRef(c) ? c.value = h3 : null),
            class: normalizeClass(unref(a).e("original")),
            value: p.label,
            name: p.name || ((v = unref(o)) == null ? void 0 : v.name),
            disabled: unref(u),
            type: "radio",
            onFocus: m[1] || (m[1] = (h3) => l.value = true),
            onBlur: m[2] || (m[2] = (h3) => l.value = false),
            onChange: f
          }, null, 42, XS), [
            [vModelRadio, unref(c)]
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(a).e("inner"))
          }, null, 2)
        ], 2),
        createBaseVNode("span", {
          class: normalizeClass(unref(a).e("label")),
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
var QS = xe(JS, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);
var ek = Pe({
  ...ld,
  name: {
    type: String,
    default: ""
  }
});
var tk = ["value", "name", "disabled"];
var nk = defineComponent({
  name: "ElRadioButton"
});
var ak = defineComponent({
  ...nk,
  props: ek,
  setup(e) {
    const t = e, n = ye("radio"), { radioRef: a, focus: r, size: o, disabled: l, modelValue: s, radioGroup: u } = ud(t), c = computed(() => ({
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
          unref(n).is("focus", unref(r)),
          unref(n).bm("button", unref(o))
        ])
      }, [
        withDirectives(createBaseVNode("input", {
          ref_key: "radioRef",
          ref: a,
          "onUpdate:modelValue": p[0] || (p[0] = (v) => isRef(s) ? s.value = v : null),
          class: normalizeClass(unref(n).be("button", "original-radio")),
          value: f.label,
          type: "radio",
          name: f.name || ((m = unref(u)) == null ? void 0 : m.name),
          disabled: unref(l),
          onFocus: p[1] || (p[1] = (v) => r.value = true),
          onBlur: p[2] || (p[2] = (v) => r.value = false)
        }, null, 42, tk), [
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
var cd = xe(ak, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);
var rk = Pe({
  id: {
    type: String,
    default: void 0
  },
  size: xn,
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
var ok = sd;
var lk = ["id", "aria-label", "aria-labelledby"];
var sk = defineComponent({
  name: "ElRadioGroup"
});
var ik = defineComponent({
  ...sk,
  props: rk,
  emits: ok,
  setup(e, { emit: t }) {
    const n = e, a = ye("radio"), r = po(), o = ref(), { formItem: l } = Mn(), { inputId: s, isLabeledByFormItem: u } = vo(n, {
      formItemContext: l
    }), c = (p) => {
      t(lt, p), nextTick(() => t("change", p));
    };
    onMounted(() => {
      const p = o.value.querySelectorAll("[type=radio]"), m = p[0];
      !Array.from(p).some((v) => v.checked) && m && (m.tabIndex = 0);
    });
    const f = computed(() => n.name || r.value);
    return provide(id, reactive({
      ...toRefs(n),
      changeEvent: c,
      name: f
    })), watch(() => n.modelValue, () => {
      n.validateEvent && (l == null || l.validate("change").catch((p) => nt(p)));
    }), (p, m) => (openBlock(), createElementBlock("div", {
      id: unref(s),
      ref_key: "radioGroupRef",
      ref: o,
      class: normalizeClass(unref(a).b("group")),
      role: "radiogroup",
      "aria-label": unref(u) ? void 0 : p.label || "radio-group",
      "aria-labelledby": unref(u) ? unref(l).labelId : void 0
    }, [
      renderSlot(p.$slots, "default")
    ], 10, lk));
  }
});
var dd = xe(ik, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);
var uk = Lt(QS, {
  RadioButton: cd,
  RadioGroup: dd
});
dn(dd);
dn(cd);
var ck = defineComponent({
  name: "NodeContent",
  setup() {
    return {
      ns: ye("cascader-node")
    };
  },
  render() {
    const { ns: e } = this, { node: t, panel: n } = this.$parent, { data: a, label: r } = t, { renderLabelFn: o } = n;
    return h("span", { class: e.e("label") }, o ? o({ node: t, data: a }) : r);
  }
});
var Ql = Symbol();
var dk = defineComponent({
  name: "ElCascaderNode",
  components: {
    ElCheckbox: ea,
    ElRadio: uk,
    NodeContent: ck,
    ElIcon: Re,
    Check: ac,
    Loading: dr,
    ArrowRight: Cn
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
    const n = inject(Ql), a = ye("cascader-node"), r = computed(() => n.isHoverMenu), o = computed(() => n.config.multiple), l = computed(() => n.config.checkStrictly), s = computed(() => {
      var S;
      return (S = n.checkedNodes[0]) == null ? void 0 : S.uid;
    }), u = computed(() => e.node.isDisabled), c = computed(() => e.node.isLeaf), f = computed(() => l.value && !c.value || !u.value), p = computed(() => v(n.expandingNode)), m = computed(() => l.value && n.checkedNodes.some(v)), v = (S) => {
      var _;
      const { level: P, uid: A } = e.node;
      return ((_ = S == null ? void 0 : S.pathNodes[P - 1]) == null ? void 0 : _.uid) === A;
    }, h3 = () => {
      p.value || n.expandNode(e.node);
    }, d = (S) => {
      const { node: _ } = e;
      S !== _.checked && n.handleCheckChange(_, S);
    }, b = () => {
      n.lazyLoad(e.node, () => {
        c.value || h3();
      });
    }, y = (S) => {
      r.value && (C(), !c.value && t("expand", S));
    }, C = () => {
      const { node: S } = e;
      !f.value || S.loading || (S.loaded ? h3() : b());
    }, g = () => {
      r.value && !c.value || (c.value && !u.value && !l.value && !o.value ? k(true) : C());
    }, w = (S) => {
      l.value ? (d(S), e.node.loaded && h3()) : k(S);
    }, k = (S) => {
      e.node.loaded ? (d(S), !l.value && h3()) : b();
    };
    return {
      panel: n,
      isHoverMenu: r,
      multiple: o,
      checkStrictly: l,
      checkedNodeId: s,
      isDisabled: u,
      isLeaf: c,
      expandable: f,
      inExpandingPath: p,
      inCheckedPath: m,
      ns: a,
      handleHoverExpand: y,
      handleExpand: C,
      handleClick: g,
      handleCheck: k,
      handleSelectCheck: w
    };
  }
});
var fk = ["id", "aria-haspopup", "aria-owns", "aria-expanded", "tabindex"];
var pk = createBaseVNode("span", null, null, -1);
function vk(e, t, n, a, r, o) {
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
    onMouseenter: t[2] || (t[2] = (...v) => e.handleHoverExpand && e.handleHoverExpand(...v)),
    onFocus: t[3] || (t[3] = (...v) => e.handleHoverExpand && e.handleHoverExpand(...v)),
    onClick: t[4] || (t[4] = (...v) => e.handleClick && e.handleClick(...v))
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
        pk
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
  ], 42, fk);
}
var hk = xe(dk, [["render", vk], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/node.vue"]]);
var mk = defineComponent({
  name: "ElCascaderMenu",
  components: {
    Loading: dr,
    ElIcon: Re,
    ElScrollbar: Ma,
    ElCascaderNode: hk
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
    const t = getCurrentInstance(), n = ye("cascader-menu"), { t: a } = st(), r = T0();
    let o = null, l = null;
    const s = inject(Ql), u = ref(null), c = computed(() => !e.nodes.length), f = computed(() => !s.initialLoaded), p = computed(() => `cascader-menu-${r}-${e.index}`), m = (b) => {
      o = b.target;
    }, v = (b) => {
      if (!(!s.isHoverMenu || !o || !u.value))
        if (o.contains(b.target)) {
          h3();
          const y = t.vnode.el, { left: C } = y.getBoundingClientRect(), { offsetWidth: g, offsetHeight: w } = y, k = b.clientX - C, S = o.offsetTop, _ = S + o.offsetHeight;
          u.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${k} ${S} L${g} 0 V${S} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${k} ${_} L${g} ${w} V${_} Z" />
        `;
        } else
          l || (l = window.setTimeout(d, s.config.hoverThreshold));
    }, h3 = () => {
      l && (clearTimeout(l), l = null);
    }, d = () => {
      u.value && (u.value.innerHTML = "", h3());
    };
    return {
      ns: n,
      panel: s,
      hoverZone: u,
      isEmpty: c,
      isLoading: f,
      menuId: p,
      t: a,
      handleExpand: m,
      handleMouseMove: v,
      clearHoverZone: d
    };
  }
});
function gk(e, t, n, a, r, o) {
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
var bk = xe(mk, [["render", gk], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/menu.vue"]]);
var yk = 0;
var wk = (e) => {
  const t = [e];
  let { parent: n } = e;
  for (; n; )
    t.unshift(n), n = n.parent;
  return t;
};
var Ea = class _Ea {
  constructor(t, n, a, r = false) {
    this.data = t, this.config = n, this.parent = a, this.root = r, this.uid = yk++, this.checked = false, this.indeterminate = false, this.loading = false;
    const { value: o, label: l, children: s } = n, u = t[s], c = wk(this);
    this.level = r ? 0 : a ? a.level + 1 : 1, this.value = t[o], this.label = t[l], this.pathNodes = c, this.pathValues = c.map((f) => f.value), this.pathLabels = c.map((f) => f.label), this.childrenData = u, this.children = (u || []).map((f) => new _Ea(f, n, this)), this.loaded = !n.lazy || this.isLeaf || !Ga(u);
  }
  get isDisabled() {
    const { data: t, parent: n, config: a } = this, { disabled: r, checkStrictly: o } = a;
    return (ft(r) ? r(t, this) : !!t[r]) || !o && (n == null ? void 0 : n.isDisabled);
  }
  get isLeaf() {
    const { data: t, config: n, childrenData: a, loaded: r } = this, { lazy: o, leaf: l } = n, s = ft(l) ? l(t, this) : t[l];
    return $n(s) ? o && !r ? false : !(Array.isArray(a) && a.length) : !!s;
  }
  get valueByOption() {
    return this.config.emitPath ? this.pathValues : this.value;
  }
  appendChild(t) {
    const { childrenData: n, children: a } = this, r = new _Ea(t, this.config, this);
    return Array.isArray(n) ? n.push(t) : this.childrenData = [t], a.push(r), r;
  }
  calcText(t, n) {
    const a = t ? this.pathLabels.join(n) : this.label;
    return this.text = a, a;
  }
  broadcast(t, ...n) {
    const a = `onParent${nn(t)}`;
    this.children.forEach((r) => {
      r && (r.broadcast(t, ...n), r[a] && r[a](...n));
    });
  }
  emit(t, ...n) {
    const { parent: a } = this, r = `onChild${nn(t)}`;
    a && (a[r] && a[r](...n), a.emit(t, ...n));
  }
  onParentCheck(t) {
    this.isDisabled || this.setCheckState(t);
  }
  onChildCheck() {
    const { children: t } = this, n = t.filter((r) => !r.isDisabled), a = n.length ? n.every((r) => r.checked) : false;
    this.setCheckState(a);
  }
  setCheckState(t) {
    const n = this.children.length, a = this.children.reduce((r, o) => {
      const l = o.checked ? 1 : o.indeterminate ? 0.5 : 0;
      return r + l;
    }, 0);
    this.checked = this.loaded && this.children.filter((r) => !r.isDisabled).every((r) => r.loaded && r.checked) && t, this.indeterminate = this.loaded && a !== n && a > 0;
  }
  doCheck(t) {
    if (this.checked === t)
      return;
    const { checkStrictly: n, multiple: a } = this.config;
    n || !a ? this.checked = t : (this.broadcast("check", t), this.setCheckState(t), this.emit("check"));
  }
};
var vl = (e, t) => e.reduce((n, a) => (a.isLeaf ? n.push(a) : (!t && n.push(a), n = n.concat(vl(a.children, t))), n), []);
var Gi = class {
  constructor(t, n) {
    this.config = n;
    const a = (t || []).map((r) => new Ea(r, this.config));
    this.nodes = a, this.allNodes = vl(a, false), this.leafNodes = vl(a, true);
  }
  getNodes() {
    return this.nodes;
  }
  getFlattedNodes(t) {
    return t ? this.leafNodes : this.allNodes;
  }
  appendNode(t, n) {
    const a = n ? n.appendChild(t) : new Ea(t, this.config);
    n || this.nodes.push(a), this.allNodes.push(a), a.isLeaf && this.leafNodes.push(a);
  }
  appendNodes(t, n) {
    t.forEach((a) => this.appendNode(a, n));
  }
  getNodeByValue(t, n = false) {
    return !t && t !== 0 ? null : this.getFlattedNodes(n).find((r) => rn(r.value, t) || rn(r.pathValues, t)) || null;
  }
  getSameNode(t) {
    return t && this.getFlattedNodes(false).find(({ value: a, level: r }) => rn(t.value, a) && t.level === r) || null;
  }
};
var fd = Pe({
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
var Ck = {
  expandTrigger: "click",
  multiple: false,
  checkStrictly: false,
  emitPath: true,
  lazy: false,
  lazyLoad: ha,
  value: "value",
  label: "label",
  children: "children",
  leaf: "leaf",
  disabled: "disabled",
  hoverThreshold: 500
};
var Sk = (e) => computed(() => ({
  ...Ck,
  ...e.props
}));
var Xi = (e) => {
  if (!e)
    return 0;
  const t = e.id.split("-");
  return Number(t[t.length - 2]);
};
var kk = (e) => {
  if (!e)
    return;
  const t = e.querySelector("input");
  t ? t.click() : pu(e) && e.click();
};
var _k = (e, t) => {
  const n = t.slice(0), a = n.map((o) => o.uid), r = e.reduce((o, l) => {
    const s = a.indexOf(l.uid);
    return s > -1 && (o.push(l), n.splice(s, 1), a.splice(s, 1)), o;
  }, []);
  return r.push(...n), r;
};
var $k = defineComponent({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu: bk
  },
  props: {
    ...fd,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  emits: [lt, Jn, "close", "expand-change"],
  setup(e, { emit: t, slots: n }) {
    let a = false;
    const r = ye("cascader"), o = Sk(e);
    let l = null;
    const s = ref(true), u = ref([]), c = ref(null), f = ref([]), p = ref(null), m = ref([]), v = computed(() => o.value.expandTrigger === "hover"), h3 = computed(() => e.renderLabel || n.default), d = () => {
      const { options: I } = e, N = o.value;
      a = false, l = new Gi(I, N), f.value = [l.getNodes()], N.lazy && Ga(e.options) ? (s.value = false, b(void 0, (L) => {
        L && (l = new Gi(L, N), f.value = [l.getNodes()]), s.value = true, P(false, true);
      })) : P(false, true);
    }, b = (I, N) => {
      const L = o.value;
      I = I || new Ea({}, L, void 0, true), I.loading = true;
      const H = (K) => {
        const M = I, W = M.root ? null : M;
        K && (l == null || l.appendNodes(K, W)), M.loading = false, M.loaded = true, M.childrenData = M.childrenData || [], N && N(K);
      };
      L.lazyLoad(I, H);
    }, y = (I, N) => {
      var L;
      const { level: H } = I, K = f.value.slice(0, H);
      let M;
      I.isLeaf ? M = I.pathNodes[H - 2] : (M = I, K.push(I.children)), ((L = p.value) == null ? void 0 : L.uid) !== (M == null ? void 0 : M.uid) && (p.value = I, f.value = K, !N && t("expand-change", (I == null ? void 0 : I.pathValues) || []));
    }, C = (I, N, L = true) => {
      const { checkStrictly: H, multiple: K } = o.value, M = m.value[0];
      a = true, !K && (M == null || M.doCheck(false)), I.doCheck(N), _(), L && !K && !H && t("close"), !L && !K && !H && g(I);
    }, g = (I) => {
      I && (I = I.parent, g(I), I && y(I));
    }, w = (I) => l == null ? void 0 : l.getFlattedNodes(I), k = (I) => {
      var N;
      return (N = w(I)) == null ? void 0 : N.filter((L) => L.checked !== false);
    }, S = () => {
      m.value.forEach((I) => I.doCheck(false)), _(), f.value = f.value.slice(0, 1), p.value = null, t("expand-change", []);
    }, _ = () => {
      var I;
      const { checkStrictly: N, multiple: L } = o.value, H = m.value, K = k(!N), M = _k(H, K), W = M.map((E) => E.valueByOption);
      m.value = M, c.value = L ? W : (I = W[0]) != null ? I : null;
    }, P = (I = false, N = false) => {
      const { modelValue: L } = e, { lazy: H, multiple: K, checkStrictly: M } = o.value, W = !M;
      if (!(!s.value || a || !N && rn(L, c.value)))
        if (H && !I) {
          const V = ei(Cb(Sn(L))).map((G) => l == null ? void 0 : l.getNodeByValue(G)).filter((G) => !!G && !G.loaded && !G.loading);
          V.length ? V.forEach((G) => {
            b(G, () => P(false, N));
          }) : P(true, N);
        } else {
          const E = K ? Sn(L) : [L], V = ei(E.map((G) => l == null ? void 0 : l.getNodeByValue(G, W)));
          A(V, N), c.value = Wu(L);
        }
    }, A = (I, N = true) => {
      const { checkStrictly: L } = o.value, H = m.value, K = I.filter((E) => !!E && (L || E.isLeaf)), M = l == null ? void 0 : l.getSameNode(p.value), W = N && M || K[0];
      W ? W.pathNodes.forEach((E) => y(E, true)) : p.value = null, H.forEach((E) => E.doCheck(false)), K.forEach((E) => E.doCheck(true)), m.value = K, nextTick(B);
    }, B = () => {
      at && u.value.forEach((I) => {
        const N = I == null ? void 0 : I.$el;
        if (N) {
          const L = N.querySelector(`.${r.namespace.value}-scrollbar__wrap`), H = N.querySelector(`.${r.b("node")}.${r.is("active")}`) || N.querySelector(`.${r.b("node")}.in-active-path`);
          tc(L, H);
        }
      });
    }, z = (I) => {
      const N = I.target, { code: L } = I;
      switch (L) {
        case Fe.up:
        case Fe.down: {
          I.preventDefault();
          const H = L === Fe.up ? -1 : 1;
          Mr(vu(N, H, `.${r.b("node")}[tabindex="-1"]`));
          break;
        }
        case Fe.left: {
          I.preventDefault();
          const H = u.value[Xi(N) - 1], K = H == null ? void 0 : H.$el.querySelector(`.${r.b("node")}[aria-expanded="true"]`);
          Mr(K);
          break;
        }
        case Fe.right: {
          I.preventDefault();
          const H = u.value[Xi(N) + 1], K = H == null ? void 0 : H.$el.querySelector(`.${r.b("node")}[tabindex="-1"]`);
          Mr(K);
          break;
        }
        case Fe.enter:
          kk(N);
          break;
      }
    };
    return provide(Ql, reactive({
      config: o,
      expandingNode: p,
      checkedNodes: m,
      isHoverMenu: v,
      initialLoaded: s,
      renderLabelFn: h3,
      lazyLoad: b,
      expandNode: y,
      handleCheckChange: C
    })), watch([o, () => e.options], d, {
      deep: true,
      immediate: true
    }), watch(() => e.modelValue, () => {
      a = false, P();
    }, {
      deep: true
    }), watch(() => c.value, (I) => {
      rn(I, e.modelValue) || (t(lt, I), t(Jn, I));
    }), onBeforeUpdate(() => u.value = []), onMounted(() => !Ga(e.modelValue) && P()), {
      ns: r,
      menuList: u,
      menus: f,
      checkedNodes: m,
      handleKeyDown: z,
      handleCheckChange: C,
      getFlattedNodes: w,
      getCheckedNodes: k,
      clearCheckedNodes: S,
      calculateCheckedValue: _,
      scrollToExpandingNode: B
    };
  }
});
function Ek(e, t, n, a, r, o) {
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
var zr = xe($k, [["render", Ek], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader-panel/src/index.vue"]]);
zr.install = (e) => {
  e.component(zr.name, zr);
};
var Tk = zr;
var es = Pe({
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
    values: ra,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
var Ok = {
  close: (e) => e instanceof MouseEvent,
  click: (e) => e instanceof MouseEvent
};
var Pk = defineComponent({
  name: "ElTag"
});
var xk = defineComponent({
  ...Pk,
  props: es,
  emits: Ok,
  setup(e, { emit: t }) {
    const n = e, a = Gt(), r = ye("tag"), o = computed(() => {
      const { type: u, hit: c, effect: f, closable: p, round: m } = n;
      return [
        r.b(),
        r.is("closable", p),
        r.m(u),
        r.m(a.value),
        r.m(f),
        r.is("hit", c),
        r.is("round", m)
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
        class: normalizeClass(unref(r).e("content"))
      }, [
        renderSlot(u.$slots, "default")
      ], 2),
      u.closable ? (openBlock(), createBlock(unref(Re), {
        key: 0,
        class: normalizeClass(unref(r).e("close")),
        onClick: withModifiers(l, ["stop"])
      }, {
        default: withCtx(() => [
          createVNode(unref(Uo))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
    ], 6)) : (openBlock(), createBlock(Transition, {
      key: 1,
      name: `${unref(r).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: withCtx(() => [
        createBaseVNode("span", {
          class: normalizeClass(unref(o)),
          style: normalizeStyle({ backgroundColor: u.color }),
          onClick: s
        }, [
          createBaseVNode("span", {
            class: normalizeClass(unref(r).e("content"))
          }, [
            renderSlot(u.$slots, "default")
          ], 2),
          u.closable ? (openBlock(), createBlock(unref(Re), {
            key: 0,
            class: normalizeClass(unref(r).e("close")),
            onClick: withModifiers(l, ["stop"])
          }, {
            default: withCtx(() => [
              createVNode(unref(Uo))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var Mk = xe(xk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
var hl = Lt(Mk);
var Ak = Pe({
  ...fd,
  size: xn,
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
  teleported: go.teleported,
  tagType: { ...es.type, default: "info" },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
var Nk = {
  [lt]: (e) => !!e || e === null,
  [Jn]: (e) => !!e || e === null,
  focus: (e) => e instanceof FocusEvent,
  blur: (e) => e instanceof FocusEvent,
  visibleChange: (e) => Qt(e),
  expandChange: (e) => !!e,
  removeTag: (e) => !!e
};
var Rk = { key: 0 };
var Lk = ["placeholder", "onKeydown"];
var Fk = ["onClick"];
var Ik = "ElCascader";
var Dk = defineComponent({
  name: Ik
});
var Bk = defineComponent({
  ...Dk,
  props: Ak,
  emits: Nk,
  setup(e, { expose: t, emit: n }) {
    const a = e, r = {
      modifiers: [
        {
          name: "arrowPosition",
          enabled: true,
          phase: "main",
          fn: ({ state: D }) => {
            const { modifiersData: Z, placement: q } = D;
            ["right", "left", "bottom", "top"].includes(q) || (Z.arrow.x = 35);
          },
          requires: ["arrow"]
        }
      ]
    }, o = useAttrs();
    let l = 0, s = 0;
    const u = ye("cascader"), c = ye("input"), { t: f } = st(), { form: p, formItem: m } = Mn(), v = ref(null), h3 = ref(null), d = ref(null), b = ref(null), y = ref(null), C = ref(false), g = ref(false), w = ref(false), k = ref(false), S = ref(""), _ = ref(""), P = ref([]), A = ref([]), B = ref([]), z = ref(false), I = computed(() => o.style), N = computed(() => a.disabled || (p == null ? void 0 : p.disabled)), L = computed(() => a.placeholder || f("el.cascader.placeholder")), H = computed(() => _.value || P.value.length > 0 || z.value ? "" : L.value), K = Gt(), M = computed(() => ["small"].includes(K.value) ? "small" : "default"), W = computed(() => !!a.props.multiple), E = computed(() => !a.filterable || W.value), V = computed(() => W.value ? _.value : S.value), G = computed(() => {
      var D;
      return ((D = b.value) == null ? void 0 : D.checkedNodes) || [];
    }), F = computed(() => !a.clearable || N.value || w.value || !g.value ? false : !!G.value.length), X = computed(() => {
      const { showAllLevels: D, separator: Z } = a, q = G.value;
      return q.length ? W.value ? "" : q[0].calcText(D, Z) : "";
    }), ne = computed({
      get() {
        return Wu(a.modelValue);
      },
      set(D) {
        n(lt, D), n(Jn, D), a.validateEvent && (m == null || m.validate("change").catch((Z) => nt(Z)));
      }
    }), me = computed(() => [
      u.b(),
      u.m(K.value),
      u.is("disabled", N.value),
      o.class
    ]), ge = computed(() => [
      c.e("icon"),
      "icon-arrow-down",
      u.is("reverse", C.value)
    ]), se = computed(() => u.is("focus", C.value || k.value)), le = computed(() => {
      var D, Z;
      return (Z = (D = v.value) == null ? void 0 : D.popperRef) == null ? void 0 : Z.contentRef;
    }), ce = (D) => {
      var Z, q, te;
      N.value || (D = D ?? !C.value, D !== C.value && (C.value = D, (q = (Z = h3.value) == null ? void 0 : Z.input) == null || q.setAttribute("aria-expanded", `${D}`), D ? (he(), nextTick((te = b.value) == null ? void 0 : te.scrollToExpandingNode)) : a.filterable && ut(), n("visibleChange", D)));
    }, he = () => {
      nextTick(() => {
        var D;
        (D = v.value) == null || D.updatePopper();
      });
    }, Te = () => {
      w.value = false;
    }, Me = (D) => {
      const { showAllLevels: Z, separator: q } = a;
      return {
        node: D,
        key: D.uid,
        text: D.calcText(Z, q),
        hitState: false,
        closable: !N.value && !D.isDisabled,
        isCollapseTag: false
      };
    }, We = (D) => {
      var Z;
      const q = D.node;
      q.doCheck(false), (Z = b.value) == null || Z.calculateCheckedValue(), n("removeTag", q.valueByOption);
    }, je = () => {
      if (!W.value)
        return;
      const D = G.value, Z = [], q = [];
      if (D.forEach((te) => q.push(Me(te))), A.value = q, D.length) {
        const [te, ...x] = D, ue = x.length;
        Z.push(Me(te)), ue && (a.collapseTags ? Z.push({
          key: -1,
          text: `+ ${ue}`,
          closable: false,
          isCollapseTag: true
        }) : x.forEach((Se) => Z.push(Me(Se))));
      }
      P.value = Z;
    }, Ze = () => {
      var D, Z;
      const { filterMethod: q, showAllLevels: te, separator: x } = a, ue = (Z = (D = b.value) == null ? void 0 : D.getFlattedNodes(!a.props.checkStrictly)) == null ? void 0 : Z.filter((Se) => Se.isDisabled ? false : (Se.calcText(te, x), q(Se, V.value)));
      W.value && (P.value.forEach((Se) => {
        Se.hitState = false;
      }), A.value.forEach((Se) => {
        Se.hitState = false;
      })), w.value = true, B.value = ue, he();
    }, Ke = () => {
      var D;
      let Z;
      w.value && y.value ? Z = y.value.$el.querySelector(`.${u.e("suggestion-item")}`) : Z = (D = b.value) == null ? void 0 : D.$el.querySelector(`.${u.b("node")}[tabindex="-1"]`), Z && (Z.focus(), !w.value && Z.click());
    }, rt = () => {
      var D, Z;
      const q = (D = h3.value) == null ? void 0 : D.input, te = d.value, x = (Z = y.value) == null ? void 0 : Z.$el;
      if (!(!at || !q)) {
        if (x) {
          const ue = x.querySelector(`.${u.e("suggestion-list")}`);
          ue.style.minWidth = `${q.offsetWidth}px`;
        }
        if (te) {
          const { offsetHeight: ue } = te, Se = P.value.length > 0 ? `${Math.max(ue + 6, l)}px` : `${l}px`;
          q.style.height = Se, he();
        }
      }
    }, ht = (D) => {
      var Z;
      return (Z = b.value) == null ? void 0 : Z.getCheckedNodes(D);
    }, it = (D) => {
      he(), n("expandChange", D);
    }, ke = (D) => {
      var Z;
      const q = (Z = D.target) == null ? void 0 : Z.value;
      if (D.type === "compositionend")
        z.value = false, nextTick(() => J(q));
      else {
        const te = q[q.length - 1] || "";
        z.value = !Bl(te);
      }
    }, ct = (D) => {
      if (!z.value)
        switch (D.code) {
          case Fe.enter:
            ce();
            break;
          case Fe.down:
            ce(true), nextTick(Ke), D.preventDefault();
            break;
          case Fe.esc:
            C.value === true && (D.preventDefault(), D.stopPropagation(), ce(false));
            break;
          case Fe.tab:
            ce(false);
            break;
        }
    }, dt = () => {
      var D;
      (D = b.value) == null || D.clearCheckedNodes(), !C.value && a.filterable && ut(), ce(false);
    }, ut = () => {
      const { value: D } = X;
      S.value = D, _.value = D;
    }, Je = (D) => {
      var Z, q;
      const { checked: te } = D;
      W.value ? (Z = b.value) == null || Z.handleCheckChange(D, !te, false) : (!te && ((q = b.value) == null || q.handleCheckChange(D, true, false)), ce(false));
    }, re = (D) => {
      const Z = D.target, { code: q } = D;
      switch (q) {
        case Fe.up:
        case Fe.down: {
          const te = q === Fe.up ? -1 : 1;
          Mr(vu(Z, te, `.${u.e("suggestion-item")}[tabindex="-1"]`));
          break;
        }
        case Fe.enter:
          Z.click();
          break;
      }
    }, Ee = () => {
      const D = P.value, Z = D[D.length - 1];
      s = _.value ? 0 : s + 1, !(!Z || !s || a.collapseTags && D.length > 1) && (Z.hitState ? We(Z) : Z.hitState = true);
    }, De = (D) => {
      const Z = D.target, q = u.e("search-input");
      Z.className === q && (k.value = true), n("focus", D);
    }, Qe = (D) => {
      k.value = false, n("blur", D);
    }, ee = Dn(() => {
      const { value: D } = V;
      if (!D)
        return;
      const Z = a.beforeFilter(D);
      xf(Z) ? Z.then(Ze).catch(() => {
      }) : Z !== false ? Ze() : Te();
    }, a.debounce), J = (D, Z) => {
      !C.value && ce(true), !(Z != null && Z.isComposing) && (D ? ee() : Te());
    };
    return watch(w, he), watch([G, N], je), watch(P, () => {
      nextTick(() => rt());
    }), watch(X, ut, { immediate: true }), onMounted(() => {
      const D = h3.value.input, Z = Number.parseFloat(gf(c.cssVarName("input-height"), D).value) - 2;
      l = D.offsetHeight || Z, ln(D, rt);
    }), t({
      getCheckedNodes: ht,
      cascaderPanelRef: b,
      togglePopperVisible: ce,
      contentRef: le
    }), (D, Z) => (openBlock(), createBlock(unref(tr), {
      ref_key: "tooltipRef",
      ref: v,
      visible: C.value,
      teleported: D.teleported,
      "popper-class": [unref(u).e("dropdown"), D.popperClass],
      "popper-options": r,
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
      onHide: Te
    }, {
      default: withCtx(() => [
        withDirectives((openBlock(), createElementBlock("div", {
          class: normalizeClass(unref(me)),
          style: normalizeStyle(unref(I)),
          onClick: Z[5] || (Z[5] = () => ce(unref(E) ? void 0 : true)),
          onKeydown: ct,
          onMouseenter: Z[6] || (Z[6] = (q) => g.value = true),
          onMouseleave: Z[7] || (Z[7] = (q) => g.value = false)
        }, [
          createVNode(unref(Bt), {
            ref_key: "input",
            ref: h3,
            modelValue: S.value,
            "onUpdate:modelValue": Z[1] || (Z[1] = (q) => S.value = q),
            placeholder: unref(H),
            readonly: unref(E),
            disabled: unref(N),
            "validate-event": false,
            size: unref(K),
            class: normalizeClass(unref(se)),
            tabindex: unref(W) && D.filterable && !unref(N) ? -1 : void 0,
            onCompositionstart: ke,
            onCompositionupdate: ke,
            onCompositionend: ke,
            onFocus: De,
            onBlur: Qe,
            onInput: J
          }, {
            suffix: withCtx(() => [
              unref(F) ? (openBlock(), createBlock(unref(Re), {
                key: "clear",
                class: normalizeClass([unref(c).e("icon"), "icon-circle-close"]),
                onClick: withModifiers(dt, ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(unref(cr))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : (openBlock(), createBlock(unref(Re), {
                key: "arrow-down",
                class: normalizeClass(unref(ge)),
                onClick: Z[0] || (Z[0] = withModifiers((q) => ce(), ["stop"]))
              }, {
                default: withCtx(() => [
                  createVNode(unref(io))
                ]),
                _: 1
              }, 8, ["class"]))
            ]),
            _: 1
          }, 8, ["modelValue", "placeholder", "readonly", "disabled", "size", "class", "tabindex"]),
          unref(W) ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "tagWrapper",
            ref: d,
            class: normalizeClass(unref(u).e("tags"))
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(P.value, (q) => (openBlock(), createBlock(unref(hl), {
              key: q.key,
              type: D.tagType,
              size: unref(M),
              hit: q.hitState,
              closable: q.closable,
              "disable-transitions": "",
              onClose: (te) => We(q)
            }, {
              default: withCtx(() => [
                q.isCollapseTag === false ? (openBlock(), createElementBlock("span", Rk, toDisplayString(q.text), 1)) : (openBlock(), createBlock(unref(tr), {
                  key: 1,
                  disabled: C.value || !D.collapseTagsTooltip,
                  "fallback-placements": ["bottom", "top", "right", "left"],
                  placement: "bottom",
                  effect: "light"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("span", null, toDisplayString(q.text), 1)
                  ]),
                  content: withCtx(() => [
                    createBaseVNode("div", {
                      class: normalizeClass(unref(u).e("collapse-tags"))
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(A.value.slice(1), (te, x) => (openBlock(), createElementBlock("div", {
                        key: x,
                        class: normalizeClass(unref(u).e("collapse-tag"))
                      }, [
                        (openBlock(), createBlock(unref(hl), {
                          key: te.key,
                          class: "in-tooltip",
                          type: D.tagType,
                          size: unref(M),
                          hit: te.hitState,
                          closable: te.closable,
                          "disable-transitions": "",
                          onClose: (ue) => We(te)
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
            D.filterable && !unref(N) ? withDirectives((openBlock(), createElementBlock("input", {
              key: 0,
              "onUpdate:modelValue": Z[2] || (Z[2] = (q) => _.value = q),
              type: "text",
              class: normalizeClass(unref(u).e("search-input")),
              placeholder: unref(X) ? "" : unref(L),
              onInput: Z[3] || (Z[3] = (q) => J(_.value, q)),
              onClick: Z[4] || (Z[4] = withModifiers((q) => ce(true), ["stop"])),
              onKeydown: withKeys(Ee, ["delete"]),
              onCompositionstart: ke,
              onCompositionupdate: ke,
              onCompositionend: ke,
              onFocus: De,
              onBlur: Qe
            }, null, 42, Lk)), [
              [vModelText, _.value]
            ]) : createCommentVNode("v-if", true)
          ], 2)) : createCommentVNode("v-if", true)
        ], 38)), [
          [unref($a), () => ce(false), unref(le)]
        ])
      ]),
      content: withCtx(() => [
        withDirectives(createVNode(unref(Tk), {
          ref_key: "cascaderPanelRef",
          ref: b,
          modelValue: unref(ne),
          "onUpdate:modelValue": Z[8] || (Z[8] = (q) => isRef(ne) ? ne.value = q : null),
          options: D.options,
          props: a.props,
          border: false,
          "render-label": D.$slots.default,
          onExpandChange: it,
          onClose: Z[9] || (Z[9] = (q) => D.$nextTick(() => ce(false)))
        }, null, 8, ["modelValue", "options", "props", "render-label"]), [
          [vShow, !w.value]
        ]),
        D.filterable ? withDirectives((openBlock(), createBlock(unref(Ma), {
          key: 0,
          ref_key: "suggestionPanel",
          ref: y,
          tag: "ul",
          class: normalizeClass(unref(u).e("suggestion-panel")),
          "view-class": unref(u).e("suggestion-list"),
          onKeydown: re
        }, {
          default: withCtx(() => [
            B.value.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(B.value, (q) => (openBlock(), createElementBlock("li", {
              key: q.uid,
              class: normalizeClass([
                unref(u).e("suggestion-item"),
                unref(u).is("checked", q.checked)
              ]),
              tabindex: -1,
              onClick: (te) => Je(q)
            }, [
              createBaseVNode("span", null, toDisplayString(q.text), 1),
              q.checked ? (openBlock(), createBlock(unref(Re), { key: 0 }, {
                default: withCtx(() => [
                  createVNode(unref(ac))
                ]),
                _: 1
              })) : createCommentVNode("v-if", true)
            ], 10, Fk))), 128)) : renderSlot(D.$slots, "empty", { key: 1 }, () => [
              createBaseVNode("li", {
                class: normalizeClass(unref(u).e("empty-text"))
              }, toDisplayString(unref(f)("el.cascader.noMatch")), 3)
            ])
          ]),
          _: 3
        }, 8, ["class", "view-class"])), [
          [vShow, w.value]
        ]) : createCommentVNode("v-if", true)
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "transition"]));
  }
});
var Vr = xe(Bk, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/cascader/src/cascader.vue"]]);
Vr.install = (e) => {
  e.component(Vr.name, Vr);
};
var zk = Vr;
var Vk = zk;
var pd = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    return function(n, a) {
      var r = a.prototype, o = r.format;
      r.format = function(l) {
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
})(pd);
var Hk = pd.exports;
var Wk = fn(Hk);
var vd = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    var n = "week", a = "year";
    return function(r, o, l) {
      var s = o.prototype;
      s.week = function(u) {
        if (u === void 0 && (u = null), u !== null)
          return this.add(7 * (u - this.week()), "day");
        var c = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var f = l(this).startOf(a).add(1, a).date(c), p = l(this).endOf(n);
          if (f.isBefore(p))
            return 1;
        }
        var m = l(this).startOf(a).date(c).startOf(n).subtract(1, "millisecond"), v = this.diff(m, n, true);
        return v < 0 ? l(this).startOf("week").week() : Math.ceil(v);
      }, s.weeks = function(u) {
        return u === void 0 && (u = null), this.week(u);
      };
    };
  });
})(vd);
var jk = vd.exports;
var Kk = fn(jk);
var hd = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    return function(n, a) {
      a.prototype.weekYear = function() {
        var r = this.month(), o = this.week(), l = this.year();
        return o === 1 && r === 11 ? l + 1 : r === 0 && o >= 52 ? l - 1 : l;
      };
    };
  });
})(hd);
var qk = hd.exports;
var Yk = fn(qk);
var md = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    return function(n, a, r) {
      a.prototype.dayOfYear = function(o) {
        var l = Math.round((r(this).startOf("day") - r(this).startOf("year")) / 864e5) + 1;
        return o == null ? l : this.add(o - l, "day");
      };
    };
  });
})(md);
var Uk = md.exports;
var Gk = fn(Uk);
var gd = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    return function(n, a) {
      a.prototype.isSameOrAfter = function(r, o) {
        return this.isSame(r, o) || this.isAfter(r, o);
      };
    };
  });
})(gd);
var Xk = gd.exports;
var Zk = fn(Xk);
var bd = { exports: {} };
(function(e, t) {
  (function(n, a) {
    e.exports = a();
  })(An, function() {
    return function(n, a) {
      a.prototype.isSameOrBefore = function(r, o) {
        return this.isSame(r, o) || this.isBefore(r, o);
      };
    };
  });
})(bd);
var Jk = bd.exports;
var Qk = fn(Jk);
var ts = Symbol();
var e_ = Pe({
  ...Kc,
  type: {
    type: be(String),
    default: "date"
  }
});
var t_ = ["date", "dates", "year", "month", "week", "range"];
var ns = Pe({
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
var yd = Pe({
  type: {
    type: be(String),
    required: true,
    values: k0
  }
});
var wd = Pe({
  unlinkPanels: Boolean,
  parsedValue: {
    type: be(Array)
  }
});
var Cd = (e) => ({
  type: String,
  values: t_,
  default: e
});
var n_ = Pe({
  ...yd,
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
var a_ = Pe({
  ...ns,
  cellClassName: {
    type: be(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: Cd("date")
});
var ml = (e) => {
  if (!Ue(e))
    return false;
  const [t, n] = e;
  return Ae.isDayjs(t) && Ae.isDayjs(n) && t.isSameOrBefore(n);
};
var Sd = (e, { lang: t, unit: n, unlinkPanels: a }) => {
  let r;
  if (Ue(e)) {
    let [o, l] = e.map((s) => Ae(s).locale(t));
    return a || (l = o.add(1, n)), [o, l];
  } else
    e ? r = Ae(e) : r = Ae();
  return r = r.locale(t), [r, r.add(1, n)];
};
var r_ = (e, t, {
  columnIndexOffset: n,
  startDate: a,
  nextEndDate: r,
  now: o,
  unit: l,
  relativeDateGetter: s,
  setCellMetadata: u,
  setRowMetadata: c
}) => {
  for (let f = 0; f < e.row; f++) {
    const p = t[f];
    for (let m = 0; m < e.column; m++) {
      let v = p[m + n];
      v || (v = {
        row: f,
        column: m,
        type: "normal",
        inRange: false,
        start: false,
        end: false
      });
      const h3 = f * e.column + m, d = s(h3);
      v.dayjs = d, v.date = d.toDate(), v.timestamp = d.valueOf(), v.type = "normal", v.inRange = !!(a && d.isSameOrAfter(a, l) && r && d.isSameOrBefore(r, l)) || !!(a && d.isSameOrBefore(a, l) && r && d.isSameOrAfter(r, l)), a != null && a.isSameOrAfter(r) ? (v.start = !!r && d.isSame(r, l), v.end = a && d.isSame(a, l)) : (v.start = !!a && d.isSame(a, l), v.end = !!r && d.isSame(r, l)), d.isSame(o, l) && (v.type = "today"), u == null || u(v, { rowIndex: f, columnIndex: m }), p[m + n] = v;
    }
    c == null || c(p);
  }
};
var o_ = Pe({
  cell: {
    type: be(Object)
  }
});
var l_ = defineComponent({
  name: "ElDatePickerCell",
  props: o_,
  setup(e) {
    const t = ye("date-table-cell"), {
      slots: n
    } = inject(ts);
    return () => {
      const {
        cell: a
      } = e;
      if (n.default) {
        const r = n.default(a).filter((o) => o.patchFlag !== -2 && o.type.toString() !== "Symbol(Comment)");
        if (r.length)
          return r;
      }
      return createVNode("div", {
        class: t.b()
      }, [createVNode("span", {
        class: t.e("text")
      }, [a == null ? void 0 : a.text])]);
    };
  }
});
var s_ = ["aria-label", "onMousedown"];
var i_ = {
  key: 0,
  scope: "col"
};
var u_ = ["aria-label"];
var c_ = ["aria-current", "aria-selected", "tabindex"];
var d_ = defineComponent({
  __name: "basic-date-table",
  props: a_,
  emits: ["changerange", "pick", "select"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = ye("date-table"), { t: o, lang: l } = st(), s = ref(), u = ref(), c = ref(), f = ref(), p = ref([[], [], [], [], [], []]);
    let m = false;
    const v = a.date.$locale().weekStart || 7, h3 = a.date.locale("en").localeData().weekdaysShort().map((F) => F.toLowerCase()), d = computed(() => v > 3 ? 7 - v : -v), b = computed(() => {
      const F = a.date.startOf("month");
      return F.subtract(F.day() || 7, "day");
    }), y = computed(() => h3.concat(h3).slice(v, v + 7)), C = computed(() => Mu(P.value).some((F) => F.isCurrent)), g = computed(() => {
      const F = a.date.startOf("month"), X = F.day() || 7, ne = F.daysInMonth(), me = F.subtract(1, "month").daysInMonth();
      return {
        startOfMonthDay: X,
        dateCountOfMonth: ne,
        dateCountOfLastMonth: me
      };
    }), w = computed(() => a.selectionMode === "dates" ? Sn(a.parsedValue) : []), k = (F, {
      count: X,
      rowIndex: ne,
      columnIndex: me
    }) => {
      const { startOfMonthDay: ge, dateCountOfMonth: se, dateCountOfLastMonth: le } = unref(g), ce = unref(d);
      if (ne >= 0 && ne <= 1) {
        const he = ge + ce < 0 ? 7 + ge + ce : ge + ce;
        if (me + ne * 7 >= he)
          return F.text = X, true;
        F.text = le - (he - me % 7) + 1 + ne * 7, F.type = "prev-month";
      } else
        return X <= se ? F.text = X : (F.text = X - se, F.type = "next-month"), true;
      return false;
    }, S = (F, {
      columnIndex: X,
      rowIndex: ne
    }, me) => {
      const { disabledDate: ge, cellClassName: se } = a, le = unref(w), ce = k(F, { count: me, rowIndex: ne, columnIndex: X }), he = F.dayjs.toDate();
      return F.selected = le.find((Te) => Te.valueOf() === F.dayjs.valueOf()), F.isSelected = !!F.selected, F.isCurrent = z(F), F.disabled = ge == null ? void 0 : ge(he), F.customClass = se == null ? void 0 : se(he), ce;
    }, _ = (F) => {
      if (a.selectionMode === "week") {
        const [X, ne] = a.showWeekNumber ? [1, 7] : [0, 6], me = G(F[X + 1]);
        F[X].inRange = me, F[X].start = me, F[ne].inRange = me, F[ne].end = me;
      }
    }, P = computed(() => {
      const { minDate: F, maxDate: X, rangeState: ne, showWeekNumber: me } = a, ge = d.value, se = p.value, le = "day";
      let ce = 1;
      if (me)
        for (let he = 0; he < 6; he++)
          se[he][0] || (se[he][0] = {
            type: "week",
            text: b.value.add(he * 7 + 1, le).week()
          });
      return r_({ row: 6, column: 7 }, se, {
        startDate: F,
        columnIndexOffset: me ? 1 : 0,
        nextEndDate: ne.endDate || X || ne.selecting && F || null,
        now: Ae().locale(unref(l)).startOf(le),
        unit: le,
        relativeDateGetter: (he) => b.value.add(he - ge, le),
        setCellMetadata: (...he) => {
          S(...he, ce) && (ce += 1);
        },
        setRowMetadata: _
      }), se;
    });
    watch(() => a.date, async () => {
      var F, X;
      (F = s.value) != null && F.contains(document.activeElement) && (await nextTick(), (X = u.value) == null || X.focus());
    });
    const A = async () => {
      var F;
      (F = u.value) == null || F.focus();
    }, B = (F = "") => ["normal", "today"].includes(F), z = (F) => a.selectionMode === "date" && B(F.type) && I(F, a.parsedValue), I = (F, X) => X ? Ae(X).locale(l.value).isSame(a.date.date(Number(F.text)), "day") : false, N = (F) => {
      const X = [];
      return B(F.type) && !F.disabled ? (X.push("available"), F.type === "today" && X.push("today")) : X.push(F.type), z(F) && X.push("current"), F.inRange && (B(F.type) || a.selectionMode === "week") && (X.push("in-range"), F.start && X.push("start-date"), F.end && X.push("end-date")), F.disabled && X.push("disabled"), F.selected && X.push("selected"), F.customClass && X.push(F.customClass), X.join(" ");
    }, L = (F, X) => {
      const ne = F * 7 + (X - (a.showWeekNumber ? 1 : 0)) - d.value;
      return b.value.add(ne, "day");
    }, H = (F) => {
      var X;
      if (!a.rangeState.selecting)
        return;
      let ne = F.target;
      if (ne.tagName === "SPAN" && (ne = (X = ne.parentNode) == null ? void 0 : X.parentNode), ne.tagName === "DIV" && (ne = ne.parentNode), ne.tagName !== "TD")
        return;
      const me = ne.parentNode.rowIndex - 1, ge = ne.cellIndex;
      P.value[me][ge].disabled || (me !== c.value || ge !== f.value) && (c.value = me, f.value = ge, n("changerange", {
        selecting: true,
        endDate: L(me, ge)
      }));
    }, K = (F) => !C.value && (F == null ? void 0 : F.text) === 1 && F.type === "normal" || F.isCurrent, M = (F) => {
      m || C.value || a.selectionMode !== "date" || V(F, true);
    }, W = (F) => {
      F.target.closest("td") && (m = true);
    }, E = (F) => {
      F.target.closest("td") && (m = false);
    }, V = (F, X = false) => {
      const ne = F.target.closest("td");
      if (!ne)
        return;
      const me = ne.parentNode.rowIndex - 1, ge = ne.cellIndex, se = P.value[me][ge];
      if (se.disabled || se.type === "week")
        return;
      const le = L(me, ge);
      if (a.selectionMode === "range")
        !a.rangeState.selecting || !a.minDate ? (n("pick", { minDate: le, maxDate: null }), n("select", true)) : (le >= a.minDate ? n("pick", { minDate: a.minDate, maxDate: le }) : n("pick", { minDate: le, maxDate: a.minDate }), n("select", false));
      else if (a.selectionMode === "date")
        n("pick", le, X);
      else if (a.selectionMode === "week") {
        const ce = le.week(), he = `${le.year()}w${ce}`;
        n("pick", {
          year: le.year(),
          week: ce,
          value: he,
          date: le.startOf("week")
        });
      } else if (a.selectionMode === "dates") {
        const ce = se.selected ? Sn(a.parsedValue).filter((he) => (he == null ? void 0 : he.valueOf()) !== le.valueOf()) : Sn(a.parsedValue).concat([le]);
        n("pick", ce);
      }
    }, G = (F) => {
      if (a.selectionMode !== "week")
        return false;
      let X = a.date.startOf("day");
      if (F.type === "prev-month" && (X = X.subtract(1, "month")), F.type === "next-month" && (X = X.add(1, "month")), X = X.date(Number.parseInt(F.text, 10)), a.parsedValue && !Array.isArray(a.parsedValue)) {
        const ne = (a.parsedValue.day() - v + 7) % 7 - 1;
        return a.parsedValue.subtract(ne, "day").isSame(X, "day");
      }
      return false;
    };
    return t({
      focus: A
    }), (F, X) => (openBlock(), createElementBlock("table", {
      role: "grid",
      "aria-label": unref(o)("el.datepicker.dateTablePrompt"),
      cellspacing: "0",
      cellpadding: "0",
      class: normalizeClass([unref(r).b(), { "is-week-mode": F.selectionMode === "week" }]),
      onClick: V,
      onMousemove: H,
      onMousedown: withModifiers(W, ["prevent"]),
      onMouseup: E
    }, [
      createBaseVNode("tbody", {
        ref_key: "tbodyRef",
        ref: s
      }, [
        createBaseVNode("tr", null, [
          F.showWeekNumber ? (openBlock(), createElementBlock("th", i_, toDisplayString(unref(o)("el.datepicker.week")), 1)) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(y), (ne, me) => (openBlock(), createElementBlock("th", {
            key: me,
            scope: "col",
            "aria-label": unref(o)("el.datepicker.weeksFull." + ne)
          }, toDisplayString(unref(o)("el.datepicker.weeks." + ne)), 9, u_))), 128))
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(P), (ne, me) => (openBlock(), createElementBlock("tr", {
          key: me,
          class: normalizeClass([unref(r).e("row"), { current: G(ne[1]) }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(ne, (ge, se) => (openBlock(), createElementBlock("td", {
            key: `${me}.${se}`,
            ref_for: true,
            ref: (le) => K(ge) && (u.value = le),
            class: normalizeClass(N(ge)),
            "aria-current": ge.isCurrent ? "date" : void 0,
            "aria-selected": ge.isCurrent,
            tabindex: K(ge) ? 0 : -1,
            onFocus: M
          }, [
            createVNode(unref(l_), { cell: ge }, null, 8, ["cell"])
          ], 42, c_))), 128))
        ], 2))), 128))
      ], 512)
    ], 42, s_));
  }
});
var gl = xe(d_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);
var f_ = Pe({
  ...ns,
  selectionMode: Cd("month")
});
var p_ = ["aria-label"];
var v_ = ["aria-selected", "aria-label", "tabindex", "onKeydown"];
var h_ = { class: "cell" };
var m_ = defineComponent({
  __name: "basic-month-table",
  props: f_,
  emits: ["changerange", "pick", "select"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = (w, k, S) => {
      const _ = Ae().locale(S).startOf("month").month(k).year(w), P = _.daysInMonth();
      return Vc(P).map((A) => _.add(A, "day").toDate());
    }, o = ye("month-table"), { t: l, lang: s } = st(), u = ref(), c = ref(), f = ref(a.date.locale("en").localeData().monthsShort().map((w) => w.toLowerCase())), p = ref([
      [],
      [],
      []
    ]), m = ref(), v = ref(), h3 = computed(() => {
      var w, k;
      const S = p.value, _ = Ae().locale(s.value).startOf("month");
      for (let P = 0; P < 3; P++) {
        const A = S[P];
        for (let B = 0; B < 4; B++) {
          const z = A[B] || (A[B] = {
            row: P,
            column: B,
            type: "normal",
            inRange: false,
            start: false,
            end: false,
            text: -1,
            disabled: false
          });
          z.type = "normal";
          const I = P * 4 + B, N = a.date.startOf("year").month(I), L = a.rangeState.endDate || a.maxDate || a.rangeState.selecting && a.minDate || null;
          z.inRange = !!(a.minDate && N.isSameOrAfter(a.minDate, "month") && L && N.isSameOrBefore(L, "month")) || !!(a.minDate && N.isSameOrBefore(a.minDate, "month") && L && N.isSameOrAfter(L, "month")), (w = a.minDate) != null && w.isSameOrAfter(L) ? (z.start = !!(L && N.isSame(L, "month")), z.end = a.minDate && N.isSame(a.minDate, "month")) : (z.start = !!(a.minDate && N.isSame(a.minDate, "month")), z.end = !!(L && N.isSame(L, "month"))), _.isSame(N) && (z.type = "today"), z.text = I, z.disabled = ((k = a.disabledDate) == null ? void 0 : k.call(a, N.toDate())) || false;
        }
      }
      return S;
    }), d = () => {
      var w;
      (w = c.value) == null || w.focus();
    }, b = (w) => {
      const k = {}, S = a.date.year(), _ = /* @__PURE__ */ new Date(), P = w.text;
      return k.disabled = a.disabledDate ? r(S, P, s.value).every(a.disabledDate) : false, k.current = Sn(a.parsedValue).findIndex((A) => Ae.isDayjs(A) && A.year() === S && A.month() === P) >= 0, k.today = _.getFullYear() === S && _.getMonth() === P, w.inRange && (k["in-range"] = true, w.start && (k["start-date"] = true), w.end && (k["end-date"] = true)), k;
    }, y = (w) => {
      const k = a.date.year(), S = w.text;
      return Sn(a.date).findIndex((_) => _.year() === k && _.month() === S) >= 0;
    }, C = (w) => {
      var k;
      if (!a.rangeState.selecting)
        return;
      let S = w.target;
      if (S.tagName === "A" && (S = (k = S.parentNode) == null ? void 0 : k.parentNode), S.tagName === "DIV" && (S = S.parentNode), S.tagName !== "TD")
        return;
      const _ = S.parentNode.rowIndex, P = S.cellIndex;
      h3.value[_][P].disabled || (_ !== m.value || P !== v.value) && (m.value = _, v.value = P, n("changerange", {
        selecting: true,
        endDate: a.date.startOf("year").month(_ * 4 + P)
      }));
    }, g = (w) => {
      var k;
      const S = (k = w.target) == null ? void 0 : k.closest("td");
      if ((S == null ? void 0 : S.tagName) !== "TD" || ca(S, "disabled"))
        return;
      const _ = S.cellIndex, A = S.parentNode.rowIndex * 4 + _, B = a.date.startOf("year").month(A);
      a.selectionMode === "range" ? a.rangeState.selecting ? (a.minDate && B >= a.minDate ? n("pick", { minDate: a.minDate, maxDate: B }) : n("pick", { minDate: B, maxDate: a.minDate }), n("select", false)) : (n("pick", { minDate: B, maxDate: null }), n("select", true)) : n("pick", A);
    };
    return watch(() => a.date, async () => {
      var w, k;
      (w = u.value) != null && w.contains(document.activeElement) && (await nextTick(), (k = c.value) == null || k.focus());
    }), t({
      focus: d
    }), (w, k) => (openBlock(), createElementBlock("table", {
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
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(h3), (S, _) => (openBlock(), createElementBlock("tr", { key: _ }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(S, (P, A) => (openBlock(), createElementBlock("td", {
            key: A,
            ref_for: true,
            ref: (B) => y(P) && (c.value = B),
            class: normalizeClass(b(P)),
            "aria-selected": `${y(P)}`,
            "aria-label": unref(l)(`el.datepicker.month${+P.text + 1}`),
            tabindex: y(P) ? 0 : -1,
            onKeydown: [
              withKeys(withModifiers(g, ["prevent", "stop"]), ["space"]),
              withKeys(withModifiers(g, ["prevent", "stop"]), ["enter"])
            ]
          }, [
            createBaseVNode("div", null, [
              createBaseVNode("span", h_, toDisplayString(unref(l)("el.datepicker.months." + f.value[P.text])), 1)
            ])
          ], 42, v_))), 128))
        ]))), 128))
      ], 512)
    ], 42, p_));
  }
});
var bl = xe(m_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);
var { date: g_, disabledDate: b_, parsedValue: y_ } = ns;
var w_ = Pe({
  date: g_,
  disabledDate: b_,
  parsedValue: y_
});
var C_ = ["aria-label"];
var S_ = ["aria-selected", "tabindex", "onKeydown"];
var k_ = { class: "cell" };
var __ = { key: 1 };
var $_ = defineComponent({
  __name: "basic-year-table",
  props: w_,
  emits: ["pick"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = (d, b) => {
      const y = Ae(String(d)).locale(b).startOf("year"), g = y.endOf("year").dayOfYear();
      return Vc(g).map((w) => y.add(w, "day").toDate());
    }, o = ye("year-table"), { t: l, lang: s } = st(), u = ref(), c = ref(), f = computed(() => Math.floor(a.date.year() / 10) * 10), p = () => {
      var d;
      (d = c.value) == null || d.focus();
    }, m = (d) => {
      const b = {}, y = Ae().locale(s.value);
      return b.disabled = a.disabledDate ? r(d, s.value).every(a.disabledDate) : false, b.current = Sn(a.parsedValue).findIndex((C) => C.year() === d) >= 0, b.today = y.year() === d, b;
    }, v = (d) => d === f.value && a.date.year() < f.value && a.date.year() > f.value + 9 || Sn(a.date).findIndex((b) => b.year() === d) >= 0, h3 = (d) => {
      const y = d.target.closest("td");
      if (y && y.textContent) {
        if (ca(y, "disabled"))
          return;
        const C = y.textContent || y.innerText;
        n("pick", Number(C));
      }
    };
    return watch(() => a.date, async () => {
      var d, b;
      (d = u.value) != null && d.contains(document.activeElement) && (await nextTick(), (b = c.value) == null || b.focus());
    }), t({
      focus: p
    }), (d, b) => (openBlock(), createElementBlock("table", {
      role: "grid",
      "aria-label": unref(l)("el.datepicker.yearTablePrompt"),
      class: normalizeClass(unref(o).b()),
      onClick: h3
    }, [
      createBaseVNode("tbody", {
        ref_key: "tbodyRef",
        ref: u
      }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(3, (y, C) => createBaseVNode("tr", { key: C }, [
          (openBlock(), createElementBlock(Fragment, null, renderList(4, (g, w) => (openBlock(), createElementBlock(Fragment, {
            key: C + "_" + w
          }, [
            C * 4 + w < 10 ? (openBlock(), createElementBlock("td", {
              key: 0,
              ref_for: true,
              ref: (k) => v(unref(f) + C * 4 + w) && (c.value = k),
              class: normalizeClass(["available", m(unref(f) + C * 4 + w)]),
              "aria-selected": `${v(unref(f) + C * 4 + w)}`,
              tabindex: v(unref(f) + C * 4 + w) ? 0 : -1,
              onKeydown: [
                withKeys(withModifiers(h3, ["prevent", "stop"]), ["space"]),
                withKeys(withModifiers(h3, ["prevent", "stop"]), ["enter"])
              ]
            }, [
              createBaseVNode("span", k_, toDisplayString(unref(f) + C * 4 + w), 1)
            ], 42, S_)) : (openBlock(), createElementBlock("td", __))
          ], 64))), 64))
        ])), 64))
      ], 512)
    ], 10, C_));
  }
});
var E_ = xe($_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);
var T_ = ["onClick"];
var O_ = ["aria-label"];
var P_ = ["aria-label"];
var x_ = ["aria-label"];
var M_ = ["aria-label"];
var A_ = defineComponent({
  __name: "panel-date-pick",
  props: n_,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(e, { emit: t }) {
    const n = e, a = (ee, J, D) => true, r = ye("picker-panel"), o = ye("date-picker"), l = useAttrs(), s = useSlots(), { t: u, lang: c } = st(), f = inject("EP_PICKER_BASE"), p = inject(mo), { shortcuts: m, disabledDate: v, cellClassName: h3, defaultTime: d, arrowControl: b } = f.props, y = toRef(f.props, "defaultValue"), C = ref(), g = ref(Ae().locale(c.value)), w = ref(false), k = computed(() => Ae(d).locale(c.value)), S = computed(() => g.value.month()), _ = computed(() => g.value.year()), P = ref([]), A = ref(null), B = ref(null), z = (ee) => P.value.length > 0 ? a(ee, P.value, n.format || "HH:mm:ss") : true, I = (ee) => d && !Me.value && !w.value ? k.value.year(ee.year()).month(ee.month()).date(ee.date()) : ge.value ? ee.millisecond(0) : ee.startOf("day"), N = (ee, ...J) => {
      if (!ee)
        t("pick", ee, ...J);
      else if (Ue(ee)) {
        const D = ee.map(I);
        t("pick", D, ...J);
      } else
        t("pick", I(ee), ...J);
      A.value = null, B.value = null, w.value = false;
    }, L = (ee, J) => {
      if (V.value === "date") {
        ee = ee;
        let D = n.parsedValue ? n.parsedValue.year(ee.year()).month(ee.month()).date(ee.date()) : ee;
        z(D) || (D = P.value[0][0].year(ee.year()).month(ee.month()).date(ee.date())), g.value = D, N(D, ge.value || J);
      } else
        V.value === "week" ? N(ee.date) : V.value === "dates" && N(ee, true);
    }, H = (ee) => {
      const J = ee ? "add" : "subtract";
      g.value = g.value[J](1, "month"), Qe("month");
    }, K = (ee) => {
      const J = g.value, D = ee ? "add" : "subtract";
      g.value = M.value === "year" ? J[D](10, "year") : J[D](1, "year"), Qe("year");
    }, M = ref("date"), W = computed(() => {
      const ee = u("el.datepicker.year");
      if (M.value === "year") {
        const J = Math.floor(_.value / 10) * 10;
        return ee ? `${J} ${ee} - ${J + 9} ${ee}` : `${J} - ${J + 9}`;
      }
      return `${_.value} ${ee}`;
    }), E = (ee) => {
      const J = ft(ee.value) ? ee.value() : ee.value;
      if (J) {
        N(Ae(J).locale(c.value));
        return;
      }
      ee.onClick && ee.onClick({
        attrs: l,
        slots: s,
        emit: t
      });
    }, V = computed(() => {
      const { type: ee } = n;
      return ["week", "month", "year", "dates"].includes(ee) ? ee : "date";
    }), G = computed(() => V.value === "date" ? M.value : V.value), F = computed(() => !!m.length), X = async (ee) => {
      g.value = g.value.startOf("month").month(ee), V.value === "month" ? N(g.value, false) : (M.value = "date", ["month", "year", "date", "week"].includes(V.value) && (N(g.value, true), await nextTick(), re())), Qe("month");
    }, ne = async (ee) => {
      V.value === "year" ? (g.value = g.value.startOf("year").year(ee), N(g.value, false)) : (g.value = g.value.year(ee), M.value = "month", ["month", "year", "date", "week"].includes(V.value) && (N(g.value, true), await nextTick(), re())), Qe("year");
    }, me = async (ee) => {
      M.value = ee, await nextTick(), re();
    }, ge = computed(() => n.type === "datetime" || n.type === "datetimerange"), se = computed(() => ge.value || V.value === "dates"), le = () => {
      if (V.value === "dates")
        N(n.parsedValue);
      else {
        let ee = n.parsedValue;
        if (!ee) {
          const J = Ae(d).locale(c.value), D = Je();
          ee = J.year(D.year()).month(D.month()).date(D.date());
        }
        g.value = ee, N(ee);
      }
    }, ce = () => {
      const J = Ae().locale(c.value).toDate();
      w.value = true, (!v || !v(J)) && z(J) && (g.value = Ae().locale(c.value), N(g.value));
    }, he = computed(() => Wc(n.format)), Te = computed(() => Hc(n.format)), Me = computed(() => {
      if (B.value)
        return B.value;
      if (!(!n.parsedValue && !y.value))
        return (n.parsedValue || g.value).format(he.value);
    }), We = computed(() => {
      if (A.value)
        return A.value;
      if (!(!n.parsedValue && !y.value))
        return (n.parsedValue || g.value).format(Te.value);
    }), je = ref(false), Ze = () => {
      je.value = true;
    }, Ke = () => {
      je.value = false;
    }, rt = (ee) => ({
      hour: ee.hour(),
      minute: ee.minute(),
      second: ee.second(),
      year: ee.year(),
      month: ee.month(),
      date: ee.date()
    }), ht = (ee, J, D) => {
      const { hour: Z, minute: q, second: te } = rt(ee), x = n.parsedValue ? n.parsedValue.hour(Z).minute(q).second(te) : ee;
      g.value = x, N(g.value, true), D || (je.value = J);
    }, it = (ee) => {
      const J = Ae(ee, he.value).locale(c.value);
      if (J.isValid() && z(J)) {
        const { year: D, month: Z, date: q } = rt(g.value);
        g.value = J.year(D).month(Z).date(q), B.value = null, je.value = false, N(g.value, true);
      }
    }, ke = (ee) => {
      const J = Ae(ee, Te.value).locale(c.value);
      if (J.isValid()) {
        if (v && v(J.toDate()))
          return;
        const { hour: D, minute: Z, second: q } = rt(g.value);
        g.value = J.hour(D).minute(Z).second(q), A.value = null, N(g.value, true);
      }
    }, ct = (ee) => Ae.isDayjs(ee) && ee.isValid() && (v ? !v(ee.toDate()) : true), dt = (ee) => V.value === "dates" ? ee.map((J) => J.format(n.format)) : ee.format(n.format), ut = (ee) => Ae(ee, n.format).locale(c.value), Je = () => {
      const ee = Ae(y.value).locale(c.value);
      if (!y.value) {
        const J = k.value;
        return Ae().hour(J.hour()).minute(J.minute()).second(J.second()).locale(c.value);
      }
      return ee;
    }, re = async () => {
      var ee;
      ["week", "month", "year", "date"].includes(V.value) && ((ee = C.value) == null || ee.focus(), V.value === "week" && De(Fe.down));
    }, Ee = (ee) => {
      const { code: J } = ee;
      [
        Fe.up,
        Fe.down,
        Fe.left,
        Fe.right,
        Fe.home,
        Fe.end,
        Fe.pageUp,
        Fe.pageDown
      ].includes(J) && (De(J), ee.stopPropagation(), ee.preventDefault()), [Fe.enter, Fe.space, Fe.numpadEnter].includes(J) && A.value === null && B.value === null && (ee.preventDefault(), N(g.value, false));
    }, De = (ee) => {
      var J;
      const { up: D, down: Z, left: q, right: te, home: x, end: ue, pageUp: Se, pageDown: Ie } = Fe, Y = {
        year: {
          [D]: -4,
          [Z]: 4,
          [q]: -1,
          [te]: 1,
          offset: (pe, Oe) => pe.setFullYear(pe.getFullYear() + Oe)
        },
        month: {
          [D]: -4,
          [Z]: 4,
          [q]: -1,
          [te]: 1,
          offset: (pe, Oe) => pe.setMonth(pe.getMonth() + Oe)
        },
        week: {
          [D]: -1,
          [Z]: 1,
          [q]: -1,
          [te]: 1,
          offset: (pe, Oe) => pe.setDate(pe.getDate() + Oe * 7)
        },
        date: {
          [D]: -7,
          [Z]: 7,
          [q]: -1,
          [te]: 1,
          [x]: (pe) => -pe.getDay(),
          [ue]: (pe) => -pe.getDay() + 6,
          [Se]: (pe) => -new Date(pe.getFullYear(), pe.getMonth(), 0).getDate(),
          [Ie]: (pe) => new Date(pe.getFullYear(), pe.getMonth() + 1, 0).getDate(),
          offset: (pe, Oe) => pe.setDate(pe.getDate() + Oe)
        }
      }, oe = g.value.toDate();
      for (; Math.abs(g.value.diff(oe, "year", true)) < 1; ) {
        const pe = Y[G.value];
        if (!pe)
          return;
        if (pe.offset(oe, ft(pe[ee]) ? pe[ee](oe) : (J = pe[ee]) != null ? J : 0), v && v(oe))
          break;
        const Oe = Ae(oe).locale(c.value);
        g.value = Oe, t("pick", Oe, true);
        break;
      }
    }, Qe = (ee) => {
      t("panel-change", g.value.toDate(), ee, M.value);
    };
    return watch(() => V.value, (ee) => {
      if (["month", "year"].includes(ee)) {
        M.value = ee;
        return;
      }
      M.value = "date";
    }, { immediate: true }), watch(() => M.value, () => {
      p == null || p.updatePopper();
    }), watch(() => y.value, (ee) => {
      ee && (g.value = Je());
    }, { immediate: true }), watch(() => n.parsedValue, (ee) => {
      if (ee) {
        if (V.value === "dates" || Array.isArray(ee))
          return;
        g.value = ee;
      } else
        g.value = Je();
    }, { immediate: true }), t("set-picker-option", ["isValidValue", ct]), t("set-picker-option", ["formatToString", dt]), t("set-picker-option", ["parseUserInput", ut]), t("set-picker-option", ["handleFocusPicker", re]), (ee, J) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(r).b(),
        unref(o).b(),
        {
          "has-sidebar": ee.$slots.sidebar || unref(F),
          "has-time": unref(ge)
        }
      ])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(r).e("body-wrapper"))
      }, [
        renderSlot(ee.$slots, "sidebar", {
          class: normalizeClass(unref(r).e("sidebar"))
        }),
        unref(F) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(r).e("sidebar"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m), (D, Z) => (openBlock(), createElementBlock("button", {
            key: Z,
            type: "button",
            class: normalizeClass(unref(r).e("shortcut")),
            onClick: (q) => E(D)
          }, toDisplayString(D.text), 11, T_))), 128))
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass(unref(r).e("body"))
        }, [
          unref(ge) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(o).e("time-header"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(o).e("editor-wrap"))
            }, [
              createVNode(unref(Bt), {
                placeholder: unref(u)("el.datepicker.selectDate"),
                "model-value": unref(We),
                size: "small",
                "validate-event": false,
                onInput: J[0] || (J[0] = (D) => A.value = D),
                onChange: ke
              }, null, 8, ["placeholder", "model-value"])
            ], 2),
            withDirectives((openBlock(), createElementBlock("span", {
              class: normalizeClass(unref(o).e("editor-wrap"))
            }, [
              createVNode(unref(Bt), {
                placeholder: unref(u)("el.datepicker.selectTime"),
                "model-value": unref(Me),
                size: "small",
                "validate-event": false,
                onFocus: Ze,
                onInput: J[1] || (J[1] = (D) => B.value = D),
                onChange: it
              }, null, 8, ["placeholder", "model-value"]),
              createVNode(unref(pl), {
                visible: je.value,
                format: unref(he),
                "time-arrow-control": unref(b),
                "parsed-value": g.value,
                onPick: ht
              }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
            ], 2)), [
              [unref($a), Ke]
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
                class: normalizeClass(["d-arrow-left", unref(r).e("icon-btn")]),
                onClick: J[2] || (J[2] = (D) => K(false))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ba))
                  ]),
                  _: 1
                })
              ], 10, O_),
              withDirectives(createBaseVNode("button", {
                type: "button",
                "aria-label": unref(u)("el.datepicker.prevMonth"),
                class: normalizeClass([unref(r).e("icon-btn"), "arrow-left"]),
                onClick: J[3] || (J[3] = (D) => H(false))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(Za))
                  ]),
                  _: 1
                })
              ], 10, P_), [
                [vShow, M.value === "date"]
              ])
            ], 2),
            createBaseVNode("span", {
              role: "button",
              class: normalizeClass(unref(o).e("header-label")),
              "aria-live": "polite",
              tabindex: "0",
              onKeydown: J[4] || (J[4] = withKeys((D) => me("year"), ["enter"])),
              onClick: J[5] || (J[5] = (D) => me("year"))
            }, toDisplayString(unref(W)), 35),
            withDirectives(createBaseVNode("span", {
              role: "button",
              "aria-live": "polite",
              tabindex: "0",
              class: normalizeClass([
                unref(o).e("header-label"),
                { active: M.value === "month" }
              ]),
              onKeydown: J[6] || (J[6] = withKeys((D) => me("month"), ["enter"])),
              onClick: J[7] || (J[7] = (D) => me("month"))
            }, toDisplayString(unref(u)(`el.datepicker.month${unref(S) + 1}`)), 35), [
              [vShow, M.value === "date"]
            ]),
            createBaseVNode("span", {
              class: normalizeClass(unref(o).e("next-btn"))
            }, [
              withDirectives(createBaseVNode("button", {
                type: "button",
                "aria-label": unref(u)("el.datepicker.nextMonth"),
                class: normalizeClass([unref(r).e("icon-btn"), "arrow-right"]),
                onClick: J[8] || (J[8] = (D) => H(true))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(Cn))
                  ]),
                  _: 1
                })
              ], 10, x_), [
                [vShow, M.value === "date"]
              ]),
              createBaseVNode("button", {
                type: "button",
                "aria-label": unref(u)("el.datepicker.nextYear"),
                class: normalizeClass([unref(r).e("icon-btn"), "d-arrow-right"]),
                onClick: J[9] || (J[9] = (D) => K(true))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ya))
                  ]),
                  _: 1
                })
              ], 10, M_)
            ], 2)
          ], 2), [
            [vShow, M.value !== "time"]
          ]),
          createBaseVNode("div", {
            class: normalizeClass(unref(r).e("content")),
            onKeydown: Ee
          }, [
            M.value === "date" ? (openBlock(), createBlock(gl, {
              key: 0,
              ref_key: "currentViewRef",
              ref: C,
              "selection-mode": unref(V),
              date: g.value,
              "parsed-value": ee.parsedValue,
              "disabled-date": unref(v),
              "cell-class-name": unref(h3),
              onPick: L
            }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : createCommentVNode("v-if", true),
            M.value === "year" ? (openBlock(), createBlock(E_, {
              key: 1,
              ref_key: "currentViewRef",
              ref: C,
              date: g.value,
              "disabled-date": unref(v),
              "parsed-value": ee.parsedValue,
              onPick: ne
            }, null, 8, ["date", "disabled-date", "parsed-value"])) : createCommentVNode("v-if", true),
            M.value === "month" ? (openBlock(), createBlock(bl, {
              key: 2,
              ref_key: "currentViewRef",
              ref: C,
              date: g.value,
              "parsed-value": ee.parsedValue,
              "disabled-date": unref(v),
              onPick: X
            }, null, 8, ["date", "parsed-value", "disabled-date"])) : createCommentVNode("v-if", true)
          ], 34)
        ], 2)
      ], 2),
      withDirectives(createBaseVNode("div", {
        class: normalizeClass(unref(r).e("footer"))
      }, [
        withDirectives(createVNode(unref(kn), {
          text: "",
          size: "small",
          class: normalizeClass(unref(r).e("link-btn")),
          onClick: ce
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(u)("el.datepicker.now")), 1)
          ]),
          _: 1
        }, 8, ["class"]), [
          [vShow, unref(V) !== "dates"]
        ]),
        createVNode(unref(kn), {
          plain: "",
          size: "small",
          class: normalizeClass(unref(r).e("link-btn")),
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
var N_ = xe(A_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);
var R_ = Pe({
  ...yd,
  ...wd
});
var L_ = (e) => {
  const { emit: t } = getCurrentInstance(), n = useAttrs(), a = useSlots();
  return (o) => {
    const l = ft(o.value) ? o.value() : o.value;
    if (l) {
      t("pick", [
        Ae(l[0]).locale(e.value),
        Ae(l[1]).locale(e.value)
      ]);
      return;
    }
    o.onClick && o.onClick({
      attrs: n,
      slots: a,
      emit: t
    });
  };
};
var kd = (e, {
  defaultValue: t,
  leftDate: n,
  rightDate: a,
  unit: r,
  onParsedValueChanged: o
}) => {
  const { emit: l } = getCurrentInstance(), { pickerNs: s } = inject(ts), u = ye("date-range-picker"), { t: c, lang: f } = st(), p = L_(f), m = ref(), v = ref(), h3 = ref({
    endDate: null,
    selecting: false
  }), d = (g) => {
    h3.value = g;
  }, b = (g = false) => {
    const w = unref(m), k = unref(v);
    ml([w, k]) && l("pick", [w, k], g);
  }, y = (g) => {
    h3.value.selecting = g, g || (h3.value.endDate = null);
  }, C = () => {
    const [g, w] = Sd(unref(t), {
      lang: unref(f),
      unit: r,
      unlinkPanels: e.unlinkPanels
    });
    m.value = void 0, v.value = void 0, n.value = g, a.value = w;
  };
  return watch(t, (g) => {
    g && C();
  }, { immediate: true }), watch(() => e.parsedValue, (g) => {
    if (Ue(g) && g.length === 2) {
      const [w, k] = g;
      m.value = w, n.value = w, v.value = k, o(unref(m), unref(v));
    } else
      C();
  }, { immediate: true }), {
    minDate: m,
    maxDate: v,
    rangeState: h3,
    lang: f,
    ppNs: s,
    drpNs: u,
    handleChangeRange: d,
    handleRangeConfirm: b,
    handleShortcutClick: p,
    onSelect: y,
    t: c
  };
};
var F_ = ["onClick"];
var I_ = ["disabled"];
var D_ = ["disabled"];
var B_ = ["disabled"];
var z_ = ["disabled"];
var Or = "month";
var V_ = defineComponent({
  __name: "panel-date-range",
  props: R_,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(e, { emit: t }) {
    const n = e, a = inject("EP_PICKER_BASE"), {
      disabledDate: r,
      cellClassName: o,
      format: l,
      defaultTime: s,
      arrowControl: u,
      clearable: c
    } = a.props, f = toRef(a.props, "shortcuts"), p = toRef(a.props, "defaultValue"), { lang: m } = st(), v = ref(Ae().locale(m.value)), h3 = ref(Ae().locale(m.value).add(1, Or)), {
      minDate: d,
      maxDate: b,
      rangeState: y,
      ppNs: C,
      drpNs: g,
      handleChangeRange: w,
      handleRangeConfirm: k,
      handleShortcutClick: S,
      onSelect: _,
      t: P
    } = kd(n, {
      defaultValue: p,
      leftDate: v,
      rightDate: h3,
      unit: Or,
      onParsedValueChanged: Z
    }), A = ref({
      min: null,
      max: null
    }), B = ref({
      min: null,
      max: null
    }), z = computed(() => `${v.value.year()} ${P("el.datepicker.year")} ${P(`el.datepicker.month${v.value.month() + 1}`)}`), I = computed(() => `${h3.value.year()} ${P("el.datepicker.year")} ${P(`el.datepicker.month${h3.value.month() + 1}`)}`), N = computed(() => v.value.year()), L = computed(() => v.value.month()), H = computed(() => h3.value.year()), K = computed(() => h3.value.month()), M = computed(() => !!f.value.length), W = computed(() => A.value.min !== null ? A.value.min : d.value ? d.value.format(X.value) : ""), E = computed(() => A.value.max !== null ? A.value.max : b.value || d.value ? (b.value || d.value).format(X.value) : ""), V = computed(() => B.value.min !== null ? B.value.min : d.value ? d.value.format(F.value) : ""), G = computed(() => B.value.max !== null ? B.value.max : b.value || d.value ? (b.value || d.value).format(F.value) : ""), F = computed(() => Wc(l)), X = computed(() => Hc(l)), ne = () => {
      v.value = v.value.subtract(1, "year"), n.unlinkPanels || (h3.value = v.value.add(1, "month")), Me("year");
    }, me = () => {
      v.value = v.value.subtract(1, "month"), n.unlinkPanels || (h3.value = v.value.add(1, "month")), Me("month");
    }, ge = () => {
      n.unlinkPanels ? h3.value = h3.value.add(1, "year") : (v.value = v.value.add(1, "year"), h3.value = v.value.add(1, "month")), Me("year");
    }, se = () => {
      n.unlinkPanels ? h3.value = h3.value.add(1, "month") : (v.value = v.value.add(1, "month"), h3.value = v.value.add(1, "month")), Me("month");
    }, le = () => {
      v.value = v.value.add(1, "year"), Me("year");
    }, ce = () => {
      v.value = v.value.add(1, "month"), Me("month");
    }, he = () => {
      h3.value = h3.value.subtract(1, "year"), Me("year");
    }, Te = () => {
      h3.value = h3.value.subtract(1, "month"), Me("month");
    }, Me = (q) => {
      t("panel-change", [v.value.toDate(), h3.value.toDate()], q);
    }, We = computed(() => {
      const q = (L.value + 1) % 12, te = L.value + 1 >= 12 ? 1 : 0;
      return n.unlinkPanels && new Date(N.value + te, q) < new Date(H.value, K.value);
    }), je = computed(() => n.unlinkPanels && H.value * 12 + K.value - (N.value * 12 + L.value + 1) >= 12), Ze = computed(() => !(d.value && b.value && !y.value.selecting && ml([d.value, b.value]))), Ke = computed(() => n.type === "datetime" || n.type === "datetimerange"), rt = (q, te) => {
      if (q)
        return s ? Ae(s[te] || s).locale(m.value).year(q.year()).month(q.month()).date(q.date()) : q;
    }, ht = (q, te = true) => {
      const x = q.minDate, ue = q.maxDate, Se = rt(x, 0), Ie = rt(ue, 1);
      b.value === Ie && d.value === Se || (t("calendar-change", [x.toDate(), ue && ue.toDate()]), b.value = Ie, d.value = Se, !(!te || Ke.value) && k());
    }, it = ref(false), ke = ref(false), ct = () => {
      it.value = false;
    }, dt = () => {
      ke.value = false;
    }, ut = (q, te) => {
      A.value[te] = q;
      const x = Ae(q, X.value).locale(m.value);
      if (x.isValid()) {
        if (r && r(x.toDate()))
          return;
        te === "min" ? (v.value = x, d.value = (d.value || v.value).year(x.year()).month(x.month()).date(x.date()), !n.unlinkPanels && (!b.value || b.value.isBefore(d.value)) && (h3.value = x.add(1, "month"), b.value = d.value.add(1, "month"))) : (h3.value = x, b.value = (b.value || h3.value).year(x.year()).month(x.month()).date(x.date()), !n.unlinkPanels && (!d.value || d.value.isAfter(b.value)) && (v.value = x.subtract(1, "month"), d.value = b.value.subtract(1, "month")));
      }
    }, Je = (q, te) => {
      A.value[te] = null;
    }, re = (q, te) => {
      B.value[te] = q;
      const x = Ae(q, F.value).locale(m.value);
      x.isValid() && (te === "min" ? (it.value = true, d.value = (d.value || v.value).hour(x.hour()).minute(x.minute()).second(x.second()), (!b.value || b.value.isBefore(d.value)) && (b.value = d.value)) : (ke.value = true, b.value = (b.value || h3.value).hour(x.hour()).minute(x.minute()).second(x.second()), h3.value = b.value, b.value && b.value.isBefore(d.value) && (d.value = b.value)));
    }, Ee = (q, te) => {
      B.value[te] = null, te === "min" ? (v.value = d.value, it.value = false) : (h3.value = b.value, ke.value = false);
    }, De = (q, te, x) => {
      B.value.min || (q && (v.value = q, d.value = (d.value || v.value).hour(q.hour()).minute(q.minute()).second(q.second())), x || (it.value = te), (!b.value || b.value.isBefore(d.value)) && (b.value = d.value, h3.value = q));
    }, Qe = (q, te, x) => {
      B.value.max || (q && (h3.value = q, b.value = (b.value || h3.value).hour(q.hour()).minute(q.minute()).second(q.second())), x || (ke.value = te), b.value && b.value.isBefore(d.value) && (d.value = b.value));
    }, ee = () => {
      v.value = Sd(unref(p), {
        lang: unref(m),
        unit: "month",
        unlinkPanels: n.unlinkPanels
      })[0], h3.value = v.value.add(1, "month"), t("pick", null);
    }, J = (q) => Ue(q) ? q.map((te) => te.format(l)) : q.format(l), D = (q) => Ue(q) ? q.map((te) => Ae(te, l).locale(m.value)) : Ae(q, l).locale(m.value);
    function Z(q, te) {
      if (n.unlinkPanels && te) {
        const x = (q == null ? void 0 : q.year()) || 0, ue = (q == null ? void 0 : q.month()) || 0, Se = te.year(), Ie = te.month();
        h3.value = x === Se && ue === Ie ? te.add(1, Or) : te;
      } else
        h3.value = v.value.add(1, Or), te && (h3.value = h3.value.hour(te.hour()).minute(te.minute()).second(te.second()));
    }
    return t("set-picker-option", ["isValidValue", ml]), t("set-picker-option", ["parseUserInput", D]), t("set-picker-option", ["formatToString", J]), t("set-picker-option", ["handleClear", ee]), (q, te) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(C).b(),
        unref(g).b(),
        {
          "has-sidebar": q.$slots.sidebar || unref(M),
          "has-time": unref(Ke)
        }
      ])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(C).e("body-wrapper"))
      }, [
        renderSlot(q.$slots, "sidebar", {
          class: normalizeClass(unref(C).e("sidebar"))
        }),
        unref(M) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(C).e("sidebar"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(f), (x, ue) => (openBlock(), createElementBlock("button", {
            key: ue,
            type: "button",
            class: normalizeClass(unref(C).e("shortcut")),
            onClick: (Se) => unref(S)(x)
          }, toDisplayString(x.text), 11, F_))), 128))
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass(unref(C).e("body"))
        }, [
          unref(Ke) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(g).e("time-header"))
          }, [
            createBaseVNode("span", {
              class: normalizeClass(unref(g).e("editors-wrap"))
            }, [
              createBaseVNode("span", {
                class: normalizeClass(unref(g).e("time-picker-wrap"))
              }, [
                createVNode(unref(Bt), {
                  size: "small",
                  disabled: unref(y).selecting,
                  placeholder: unref(P)("el.datepicker.startDate"),
                  class: normalizeClass(unref(g).e("editor")),
                  "model-value": unref(W),
                  "validate-event": false,
                  onInput: te[0] || (te[0] = (x) => ut(x, "min")),
                  onChange: te[1] || (te[1] = (x) => Je(x, "min"))
                }, null, 8, ["disabled", "placeholder", "class", "model-value"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(g).e("time-picker-wrap"))
              }, [
                createVNode(unref(Bt), {
                  size: "small",
                  class: normalizeClass(unref(g).e("editor")),
                  disabled: unref(y).selecting,
                  placeholder: unref(P)("el.datepicker.startTime"),
                  "model-value": unref(V),
                  "validate-event": false,
                  onFocus: te[2] || (te[2] = (x) => it.value = true),
                  onInput: te[3] || (te[3] = (x) => re(x, "min")),
                  onChange: te[4] || (te[4] = (x) => Ee(x, "min"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                createVNode(unref(pl), {
                  visible: it.value,
                  format: unref(F),
                  "datetime-role": "start",
                  "time-arrow-control": unref(u),
                  "parsed-value": v.value,
                  onPick: De
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [unref($a), ct]
              ])
            ], 2),
            createBaseVNode("span", null, [
              createVNode(unref(Re), null, {
                default: withCtx(() => [
                  createVNode(unref(Cn))
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
                createVNode(unref(Bt), {
                  size: "small",
                  class: normalizeClass(unref(g).e("editor")),
                  disabled: unref(y).selecting,
                  placeholder: unref(P)("el.datepicker.endDate"),
                  "model-value": unref(E),
                  readonly: !unref(d),
                  "validate-event": false,
                  onInput: te[5] || (te[5] = (x) => ut(x, "max")),
                  onChange: te[6] || (te[6] = (x) => Je(x, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
              ], 2),
              withDirectives((openBlock(), createElementBlock("span", {
                class: normalizeClass(unref(g).e("time-picker-wrap"))
              }, [
                createVNode(unref(Bt), {
                  size: "small",
                  class: normalizeClass(unref(g).e("editor")),
                  disabled: unref(y).selecting,
                  placeholder: unref(P)("el.datepicker.endTime"),
                  "model-value": unref(G),
                  readonly: !unref(d),
                  "validate-event": false,
                  onFocus: te[7] || (te[7] = (x) => unref(d) && (ke.value = true)),
                  onInput: te[8] || (te[8] = (x) => re(x, "max")),
                  onChange: te[9] || (te[9] = (x) => Ee(x, "max"))
                }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                createVNode(unref(pl), {
                  "datetime-role": "end",
                  visible: ke.value,
                  format: unref(F),
                  "time-arrow-control": unref(u),
                  "parsed-value": h3.value,
                  onPick: Qe
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [unref($a), dt]
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
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ba))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(C).e("icon-btn"), "arrow-left"]),
                onClick: me
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(Za))
                  ]),
                  _: 1
                })
              ], 2),
              q.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(je),
                class: normalizeClass([[unref(C).e("icon-btn"), { "is-disabled": !unref(je) }], "d-arrow-right"]),
                onClick: le
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ya))
                  ]),
                  _: 1
                })
              ], 10, I_)) : createCommentVNode("v-if", true),
              q.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                disabled: !unref(We),
                class: normalizeClass([[
                  unref(C).e("icon-btn"),
                  { "is-disabled": !unref(We) }
                ], "arrow-right"]),
                onClick: ce
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(Cn))
                  ]),
                  _: 1
                })
              ], 10, D_)) : createCommentVNode("v-if", true),
              createBaseVNode("div", null, toDisplayString(unref(z)), 1)
            ], 2),
            createVNode(gl, {
              "selection-mode": "range",
              date: v.value,
              "min-date": unref(d),
              "max-date": unref(b),
              "range-state": unref(y),
              "disabled-date": unref(r),
              "cell-class-name": unref(o),
              onChangerange: unref(w),
              onPick: ht,
              onSelect: unref(_)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([[unref(C).e("content"), unref(g).e("content")], "is-right"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(g).e("header"))
            }, [
              q.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(je),
                class: normalizeClass([[unref(C).e("icon-btn"), { "is-disabled": !unref(je) }], "d-arrow-left"]),
                onClick: he
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ba))
                  ]),
                  _: 1
                })
              ], 10, B_)) : createCommentVNode("v-if", true),
              q.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 1,
                type: "button",
                disabled: !unref(We),
                class: normalizeClass([[
                  unref(C).e("icon-btn"),
                  { "is-disabled": !unref(We) }
                ], "arrow-left"]),
                onClick: Te
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(Za))
                  ]),
                  _: 1
                })
              ], 10, z_)) : createCommentVNode("v-if", true),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(C).e("icon-btn"), "d-arrow-right"]),
                onClick: ge
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ya))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(C).e("icon-btn"), "arrow-right"]),
                onClick: se
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(Cn))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("div", null, toDisplayString(unref(I)), 1)
            ], 2),
            createVNode(gl, {
              "selection-mode": "range",
              date: h3.value,
              "min-date": unref(d),
              "max-date": unref(b),
              "range-state": unref(y),
              "disabled-date": unref(r),
              "cell-class-name": unref(o),
              onChangerange: unref(w),
              onPick: ht,
              onSelect: unref(_)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2),
      unref(Ke) ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(C).e("footer"))
      }, [
        unref(c) ? (openBlock(), createBlock(unref(kn), {
          key: 0,
          text: "",
          size: "small",
          class: normalizeClass(unref(C).e("link-btn")),
          onClick: ee
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(P)("el.datepicker.clear")), 1)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true),
        createVNode(unref(kn), {
          plain: "",
          size: "small",
          class: normalizeClass(unref(C).e("link-btn")),
          disabled: unref(Ze),
          onClick: te[10] || (te[10] = (x) => unref(k)(false))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(P)("el.datepicker.confirm")), 1)
          ]),
          _: 1
        }, 8, ["class", "disabled"])
      ], 2)) : createCommentVNode("v-if", true)
    ], 2));
  }
});
var H_ = xe(V_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);
var W_ = Pe({
  ...wd
});
var j_ = ["pick", "set-picker-option"];
var K_ = ({
  unlinkPanels: e,
  leftDate: t,
  rightDate: n
}) => {
  const { t: a } = st(), r = () => {
    t.value = t.value.subtract(1, "year"), e.value || (n.value = n.value.subtract(1, "year"));
  }, o = () => {
    e.value || (t.value = t.value.add(1, "year")), n.value = n.value.add(1, "year");
  }, l = () => {
    t.value = t.value.add(1, "year");
  }, s = () => {
    n.value = n.value.subtract(1, "year");
  }, u = computed(() => `${t.value.year()} ${a("el.datepicker.year")}`), c = computed(() => `${n.value.year()} ${a("el.datepicker.year")}`), f = computed(() => t.value.year()), p = computed(() => n.value.year() === t.value.year() ? t.value.year() + 1 : n.value.year());
  return {
    leftPrevYear: r,
    rightNextYear: o,
    leftNextYear: l,
    rightPrevYear: s,
    leftLabel: u,
    rightLabel: c,
    leftYear: f,
    rightYear: p
  };
};
var q_ = ["onClick"];
var Y_ = ["disabled"];
var U_ = ["disabled"];
var Pr = "year";
var G_ = defineComponent({
  name: "DatePickerMonthRange"
});
var X_ = defineComponent({
  ...G_,
  props: W_,
  emits: j_,
  setup(e, { emit: t }) {
    const n = e, { lang: a } = st(), r = inject("EP_PICKER_BASE"), { shortcuts: o, disabledDate: l, format: s } = r.props, u = toRef(r.props, "defaultValue"), c = ref(Ae().locale(a.value)), f = ref(Ae().locale(a.value).add(1, Pr)), {
      minDate: p,
      maxDate: m,
      rangeState: v,
      ppNs: h3,
      drpNs: d,
      handleChangeRange: b,
      handleRangeConfirm: y,
      handleShortcutClick: C,
      onSelect: g
    } = kd(n, {
      defaultValue: u,
      leftDate: c,
      rightDate: f,
      unit: Pr,
      onParsedValueChanged: K
    }), w = computed(() => !!o.length), {
      leftPrevYear: k,
      rightNextYear: S,
      leftNextYear: _,
      rightPrevYear: P,
      leftLabel: A,
      rightLabel: B,
      leftYear: z,
      rightYear: I
    } = K_({
      unlinkPanels: toRef(n, "unlinkPanels"),
      leftDate: c,
      rightDate: f
    }), N = computed(() => n.unlinkPanels && I.value > z.value + 1), L = (M, W = true) => {
      const E = M.minDate, V = M.maxDate;
      m.value === V && p.value === E || (m.value = V, p.value = E, W && y());
    }, H = (M) => M.map((W) => W.format(s));
    function K(M, W) {
      if (n.unlinkPanels && W) {
        const E = (M == null ? void 0 : M.year()) || 0, V = W.year();
        f.value = E === V ? W.add(1, Pr) : W;
      } else
        f.value = c.value.add(1, Pr);
    }
    return t("set-picker-option", ["formatToString", H]), (M, W) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(h3).b(),
        unref(d).b(),
        {
          "has-sidebar": !!M.$slots.sidebar || unref(w)
        }
      ])
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(h3).e("body-wrapper"))
      }, [
        renderSlot(M.$slots, "sidebar", {
          class: normalizeClass(unref(h3).e("sidebar"))
        }),
        unref(w) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(h3).e("sidebar"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(o), (E, V) => (openBlock(), createElementBlock("button", {
            key: V,
            type: "button",
            class: normalizeClass(unref(h3).e("shortcut")),
            onClick: (G) => unref(C)(E)
          }, toDisplayString(E.text), 11, q_))), 128))
        ], 2)) : createCommentVNode("v-if", true),
        createBaseVNode("div", {
          class: normalizeClass(unref(h3).e("body"))
        }, [
          createBaseVNode("div", {
            class: normalizeClass([[unref(h3).e("content"), unref(d).e("content")], "is-left"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(d).e("header"))
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(h3).e("icon-btn"), "d-arrow-left"]),
                onClick: W[0] || (W[0] = (...E) => unref(k) && unref(k)(...E))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ba))
                  ]),
                  _: 1
                })
              ], 2),
              M.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(N),
                class: normalizeClass([[
                  unref(h3).e("icon-btn"),
                  { [unref(h3).is("disabled")]: !unref(N) }
                ], "d-arrow-right"]),
                onClick: W[1] || (W[1] = (...E) => unref(_) && unref(_)(...E))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ya))
                  ]),
                  _: 1
                })
              ], 10, Y_)) : createCommentVNode("v-if", true),
              createBaseVNode("div", null, toDisplayString(unref(A)), 1)
            ], 2),
            createVNode(bl, {
              "selection-mode": "range",
              date: c.value,
              "min-date": unref(p),
              "max-date": unref(m),
              "range-state": unref(v),
              "disabled-date": unref(l),
              onChangerange: unref(b),
              onPick: L,
              onSelect: unref(g)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([[unref(h3).e("content"), unref(d).e("content")], "is-right"])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(unref(d).e("header"))
            }, [
              M.unlinkPanels ? (openBlock(), createElementBlock("button", {
                key: 0,
                type: "button",
                disabled: !unref(N),
                class: normalizeClass([[unref(h3).e("icon-btn"), { "is-disabled": !unref(N) }], "d-arrow-left"]),
                onClick: W[2] || (W[2] = (...E) => unref(P) && unref(P)(...E))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ba))
                  ]),
                  _: 1
                })
              ], 10, U_)) : createCommentVNode("v-if", true),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([unref(h3).e("icon-btn"), "d-arrow-right"]),
                onClick: W[3] || (W[3] = (...E) => unref(S) && unref(S)(...E))
              }, [
                createVNode(unref(Re), null, {
                  default: withCtx(() => [
                    createVNode(unref(ya))
                  ]),
                  _: 1
                })
              ], 2),
              createBaseVNode("div", null, toDisplayString(unref(B)), 1)
            ], 2),
            createVNode(bl, {
              "selection-mode": "range",
              date: f.value,
              "min-date": unref(p),
              "max-date": unref(m),
              "range-state": unref(v),
              "disabled-date": unref(l),
              onChangerange: unref(b),
              onPick: L,
              onSelect: unref(g)
            }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
          ], 2)
        ], 2)
      ], 2)
    ], 2));
  }
});
var Z_ = xe(X_, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);
var J_ = function(e) {
  switch (e) {
    case "daterange":
    case "datetimerange":
      return H_;
    case "monthrange":
      return Z_;
    default:
      return N_;
  }
};
Ae.extend(PS);
Ae.extend(Wk);
Ae.extend(tS);
Ae.extend(Kk);
Ae.extend(Yk);
Ae.extend(Gk);
Ae.extend(Zk);
Ae.extend(Qk);
var Q_ = defineComponent({
  name: "ElDatePicker",
  install: null,
  props: e_,
  emits: ["update:modelValue"],
  setup(e, {
    expose: t,
    emit: n,
    slots: a
  }) {
    const r = ye("picker-panel");
    provide("ElPopperOptions", reactive(toRef(e, "popperOptions"))), provide(ts, {
      slots: a,
      pickerNs: r
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
      const c = (u = e.format) != null ? u : nS[e.type] || ia, f = J_(e.type);
      return createVNode(iS, mergeProps(e, {
        format: c,
        type: e.type,
        ref: o,
        "onUpdate:modelValue": s
      }), {
        default: (p) => createVNode(f, p, null),
        "range-separator": a["range-separator"]
      });
    };
  }
});
var Hr = Q_;
Hr.install = (e) => {
  e.component(Hr.name, Hr);
};
var xr = Hr;
var _d = Symbol("elPaginationKey");
var e$ = Pe({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: un
  }
});
var t$ = {
  click: (e) => e instanceof MouseEvent
};
var n$ = ["disabled", "aria-label", "aria-disabled"];
var a$ = { key: 0 };
var r$ = defineComponent({
  name: "ElPaginationPrev"
});
var o$ = defineComponent({
  ...r$,
  props: e$,
  emits: t$,
  setup(e) {
    const t = e, { t: n } = st(), a = computed(() => t.disabled || t.currentPage <= 1);
    return (r, o) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: "btn-prev",
      disabled: unref(a),
      "aria-label": r.prevText || unref(n)("el.pagination.prev"),
      "aria-disabled": unref(a),
      onClick: o[0] || (o[0] = (l) => r.$emit("click", l))
    }, [
      r.prevText ? (openBlock(), createElementBlock("span", a$, toDisplayString(r.prevText), 1)) : (openBlock(), createBlock(unref(Re), { key: 1 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(r.prevIcon)))
        ]),
        _: 1
      }))
    ], 8, n$));
  }
});
var l$ = xe(o$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
var s$ = Pe({
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
    type: un
  }
});
var i$ = ["disabled", "aria-label", "aria-disabled"];
var u$ = { key: 0 };
var c$ = defineComponent({
  name: "ElPaginationNext"
});
var d$ = defineComponent({
  ...c$,
  props: s$,
  emits: ["click"],
  setup(e) {
    const t = e, { t: n } = st(), a = computed(() => t.disabled || t.currentPage === t.pageCount || t.pageCount === 0);
    return (r, o) => (openBlock(), createElementBlock("button", {
      type: "button",
      class: "btn-next",
      disabled: unref(a),
      "aria-label": r.nextText || unref(n)("el.pagination.next"),
      "aria-disabled": unref(a),
      onClick: o[0] || (o[0] = (l) => r.$emit("click", l))
    }, [
      r.nextText ? (openBlock(), createElementBlock("span", u$, toDisplayString(r.nextText), 1)) : (openBlock(), createBlock(unref(Re), { key: 1 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(r.nextIcon)))
        ]),
        _: 1
      }))
    ], 8, i$));
  }
});
var f$ = xe(d$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
var $d = Symbol("ElSelectGroup");
var bo = Symbol("ElSelect");
function p$(e, t) {
  const n = inject(bo), a = inject($d, { disabled: false }), r = computed(() => Object.prototype.toString.call(e.value).toLowerCase() === "[object object]"), o = computed(() => n.props.multiple ? p(n.props.modelValue, e.value) : m(e.value, n.props.modelValue)), l = computed(() => {
    if (n.props.multiple) {
      const d = n.props.modelValue || [];
      return !o.value && d.length >= n.props.multipleLimit && n.props.multipleLimit > 0;
    } else
      return false;
  }), s = computed(() => e.label || (r.value ? "" : e.value)), u = computed(() => e.value || e.label || ""), c = computed(() => e.disabled || t.groupDisabled || l.value), f = getCurrentInstance(), p = (d = [], b) => {
    if (r.value) {
      const y = n.props.valueKey;
      return d && d.some((C) => toRaw(Tt(C, y)) === Tt(b, y));
    } else
      return d && d.includes(b);
  }, m = (d, b) => {
    if (r.value) {
      const { valueKey: y } = n.props;
      return Tt(d, y) === Tt(b, y);
    } else
      return d === b;
  }, v = () => {
    !e.disabled && !a.disabled && (n.hoverIndex = n.optionsArray.indexOf(f.proxy));
  };
  watch(() => s.value, () => {
    !e.created && !n.props.remote && n.setSelected();
  }), watch(() => e.value, (d, b) => {
    const { remote: y, valueKey: C } = n.props;
    if (Object.is(d, b) || (n.onOptionDestroy(b, f.proxy), n.onOptionCreate(f.proxy)), !e.created && !y) {
      if (C && typeof d == "object" && typeof b == "object" && d[C] === b[C])
        return;
      n.setSelected();
    }
  }), watch(() => a.disabled, () => {
    t.groupDisabled = a.disabled;
  }, { immediate: true });
  const { queryChange: h3 } = toRaw(n);
  return watch(h3, (d) => {
    const { query: b } = unref(d), y = new RegExp(xb(b), "i");
    t.visible = y.test(s.value) || e.created, t.visible || n.filteredOptionsCount--;
  }, { immediate: true }), {
    select: n,
    currentLabel: s,
    currentValue: u,
    itemSelected: o,
    isDisabled: c,
    hoverItem: v
  };
}
var v$ = defineComponent({
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
    const t = ye("select"), n = computed(() => [
      t.be("dropdown", "item"),
      t.is("disabled", unref(l)),
      {
        selected: unref(o),
        hover: unref(f)
      }
    ]), a = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    }), { currentLabel: r, itemSelected: o, isDisabled: l, select: s, hoverItem: u } = p$(e, a), { visible: c, hover: f } = toRefs(a), p = getCurrentInstance().proxy;
    s.onOptionCreate(p), onBeforeUnmount(() => {
      const v = p.value, { selected: h3 } = s, b = (s.props.multiple ? h3 : [h3]).some((y) => y.value === p.value);
      nextTick(() => {
        s.cachedOptions.get(v) === p && !b && s.cachedOptions.delete(v);
      }), s.onOptionDestroy(v, p);
    });
    function m() {
      e.disabled !== true && a.groupDisabled !== true && s.handleOptionSelect(p);
    }
    return {
      ns: t,
      containerKls: n,
      currentLabel: r,
      itemSelected: o,
      isDisabled: l,
      select: s,
      hoverItem: u,
      visible: c,
      hover: f,
      selectOptionClick: m,
      states: a
    };
  }
});
function h$(e, t, n, a, r, o) {
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
var as = xe(v$, [["render", h$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
var m$ = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const e = inject(bo), t = ye("select"), n = computed(() => e.props.popperClass), a = computed(() => e.props.multiple), r = computed(() => e.props.fitInputWidth), o = ref("");
    function l() {
      var s;
      o.value = `${(s = e.selectWrapper) == null ? void 0 : s.offsetWidth}px`;
    }
    return onMounted(() => {
      l(), ln(e.selectWrapper, l);
    }), {
      ns: t,
      minWidth: o,
      popperClass: n,
      isMultiple: a,
      isFitInputWidth: r
    };
  }
});
function g$(e, t, n, a, r, o) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([e.ns.b("dropdown"), e.ns.is("multiple", e.isMultiple), e.popperClass]),
    style: normalizeStyle({ [e.isFitInputWidth ? "width" : "minWidth"]: e.minWidth })
  }, [
    renderSlot(e.$slots, "default")
  ], 6);
}
var b$ = xe(m$, [["render", g$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
function y$(e) {
  const { t } = st();
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
var Lo = false;
var w$ = (e, t, n) => {
  const { t: a } = st(), r = ye("select");
  zl({
    from: "suffixTransition",
    replacement: "override style scheme",
    version: "2.3.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/select.html#select-attributes"
  }, computed(() => e.suffixTransition === false));
  const o = ref(null), l = ref(null), s = ref(null), u = ref(null), c = ref(null), f = ref(null), p = ref(null), m = ref(null), v = ref(-1), h3 = shallowRef({ query: "" }), d = shallowRef(""), b = ref([]);
  let y = 0;
  const { form: C, formItem: g } = Mn(), w = computed(() => !e.filterable || e.multiple || !t.visible), k = computed(() => e.disabled || (C == null ? void 0 : C.disabled)), S = computed(() => {
    const Y = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
    return e.clearable && !k.value && t.inputHovering && Y;
  }), _ = computed(() => e.remote && e.filterable && !e.remoteShowSuffix ? "" : e.suffixIcon), P = computed(() => r.is("reverse", _.value && t.visible && e.suffixTransition)), A = computed(() => e.remote ? 300 : 0), B = computed(() => e.loading ? e.loadingText || a("el.select.loading") : e.remote && t.query === "" && t.options.size === 0 ? false : e.filterable && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || a("el.select.noMatch") : t.options.size === 0 ? e.noDataText || a("el.select.noData") : null), z = computed(() => {
    const Y = Array.from(t.options.values()), oe = [];
    return b.value.forEach((pe) => {
      const Oe = Y.findIndex((yt) => yt.currentLabel === pe);
      Oe > -1 && oe.push(Y[Oe]);
    }), oe.length ? oe : Y;
  }), I = computed(() => Array.from(t.cachedOptions.values())), N = computed(() => {
    const Y = z.value.filter((oe) => !oe.created).some((oe) => oe.currentLabel === t.query);
    return e.filterable && e.allowCreate && t.query !== "" && !Y;
  }), L = Gt(), H = computed(() => ["small"].includes(L.value) ? "small" : "default"), K = computed({
    get() {
      return t.visible && B.value !== false;
    },
    set(Y) {
      t.visible = Y;
    }
  });
  watch([() => k.value, () => L.value, () => C == null ? void 0 : C.size], () => {
    nextTick(() => {
      M();
    });
  }), watch(() => e.placeholder, (Y) => {
    t.cachedPlaceHolder = t.currentPlaceholder = Y, e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (t.currentPlaceholder = "");
  }), watch(() => e.modelValue, (Y, oe) => {
    e.multiple && (M(), Y && Y.length > 0 || l.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filterable && !e.reserveKeyword && (t.query = "", W(t.query))), G(), e.filterable && !e.multiple && (t.inputLength = 20), !rn(Y, oe) && e.validateEvent && (g == null || g.validate("change").catch((pe) => nt(pe)));
  }, {
    flush: "post",
    deep: true
  }), watch(() => t.visible, (Y) => {
    var oe, pe, Oe, yt, Ot;
    Y ? ((pe = (oe = u.value) == null ? void 0 : oe.updatePopper) == null || pe.call(oe), e.filterable && (t.filteredOptionsCount = t.optionsCount, t.query = e.remote ? "" : t.selectedLabel, (yt = (Oe = s.value) == null ? void 0 : Oe.focus) == null || yt.call(Oe), e.multiple ? (Ot = l.value) == null || Ot.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), W(t.query), !e.multiple && !e.remote && (h3.value.query = "", triggerRef(h3), triggerRef(d)))) : (e.filterable && (ft(e.filterMethod) && e.filterMethod(""), ft(e.remoteMethod) && e.remoteMethod("")), l.value && l.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.inputLength = 20, t.menuVisibleOnFocus = false, X(), nextTick(() => {
      l.value && l.value.value === "" && t.selected.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }), e.multiple || (t.selected && (e.filterable && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = t.selected.currentLabel, e.filterable && (t.query = t.selectedLabel)), e.filterable && (t.currentPlaceholder = t.cachedPlaceHolder))), n.emit("visible-change", Y);
  }), watch(() => t.options.entries(), () => {
    var Y, oe, pe;
    if (!at)
      return;
    (oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y), e.multiple && M();
    const Oe = ((pe = p.value) == null ? void 0 : pe.querySelectorAll("input")) || [];
    Array.from(Oe).includes(document.activeElement) || G(), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && V();
  }, {
    flush: "post"
  }), watch(() => t.hoverIndex, (Y) => {
    ot(Y) && Y > -1 ? v.value = z.value[Y] || {} : v.value = {}, z.value.forEach((oe) => {
      oe.hover = v.value === oe;
    });
  });
  const M = () => {
    nextTick(() => {
      var Y, oe;
      if (!o.value)
        return;
      const pe = o.value.$el.querySelector("input");
      y = y || (pe.clientHeight > 0 ? pe.clientHeight + 2 : 0);
      const Oe = f.value, yt = $0(L.value || (C == null ? void 0 : C.size)), Ot = L.value || yt === y || y <= 0 ? yt : y;
      !(pe.offsetParent === null) && (pe.style.height = `${(t.selected.length === 0 ? Ot : Math.max(Oe ? Oe.clientHeight + (Oe.clientHeight > Ot ? 6 : 0) : 0, Ot)) - 2}px`), t.visible && B.value !== false && ((oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y));
    });
  }, W = async (Y) => {
    if (!(t.previousQuery === Y || t.isOnComposition)) {
      if (t.previousQuery === null && (ft(e.filterMethod) || ft(e.remoteMethod))) {
        t.previousQuery = Y;
        return;
      }
      t.previousQuery = Y, nextTick(() => {
        var oe, pe;
        t.visible && ((pe = (oe = u.value) == null ? void 0 : oe.updatePopper) == null || pe.call(oe));
      }), t.hoverIndex = -1, e.multiple && e.filterable && nextTick(() => {
        const oe = l.value.value.length * 15 + 20;
        t.inputLength = e.collapseTags ? Math.min(50, oe) : oe, E(), M();
      }), e.remote && ft(e.remoteMethod) ? (t.hoverIndex = -1, e.remoteMethod(Y)) : ft(e.filterMethod) ? (e.filterMethod(Y), triggerRef(d)) : (t.filteredOptionsCount = t.optionsCount, h3.value.query = Y, triggerRef(h3), triggerRef(d)), e.defaultFirstOption && (e.filterable || e.remote) && t.filteredOptionsCount && (await nextTick(), V());
    }
  }, E = () => {
    t.currentPlaceholder !== "" && (t.currentPlaceholder = l.value.value ? "" : t.cachedPlaceHolder);
  }, V = () => {
    const Y = z.value.filter((Oe) => Oe.visible && !Oe.disabled && !Oe.states.groupDisabled), oe = Y.find((Oe) => Oe.created), pe = Y[0];
    t.hoverIndex = je(z.value, oe || pe);
  }, G = () => {
    var Y;
    if (e.multiple)
      t.selectedLabel = "";
    else {
      const pe = F(e.modelValue);
      (Y = pe.props) != null && Y.created ? (t.createdLabel = pe.props.value, t.createdSelected = true) : t.createdSelected = false, t.selectedLabel = pe.currentLabel, t.selected = pe, e.filterable && (t.query = t.selectedLabel);
      return;
    }
    const oe = [];
    Array.isArray(e.modelValue) && e.modelValue.forEach((pe) => {
      oe.push(F(pe));
    }), t.selected = oe, nextTick(() => {
      M();
    });
  }, F = (Y) => {
    let oe;
    const pe = wo(Y).toLowerCase() === "object", Oe = wo(Y).toLowerCase() === "null", yt = wo(Y).toLowerCase() === "undefined";
    for (let hn = t.cachedOptions.size - 1; hn >= 0; hn--) {
      const Wt = I.value[hn];
      if (pe ? Tt(Wt.value, e.valueKey) === Tt(Y, e.valueKey) : Wt.value === Y) {
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
    const Ot = pe ? Y.label : !Oe && !yt ? Y : "", vn = {
      value: Y,
      currentLabel: Ot
    };
    return e.multiple && (vn.hitState = false), vn;
  }, X = () => {
    setTimeout(() => {
      const Y = e.valueKey;
      e.multiple ? t.selected.length > 0 ? t.hoverIndex = Math.min.apply(null, t.selected.map((oe) => z.value.findIndex((pe) => Tt(pe, Y) === Tt(oe, Y)))) : t.hoverIndex = -1 : t.hoverIndex = z.value.findIndex((oe) => D(oe) === D(t.selected));
    }, 300);
  }, ne = () => {
    var Y, oe;
    me(), (oe = (Y = u.value) == null ? void 0 : Y.updatePopper) == null || oe.call(Y), e.multiple && M();
  }, me = () => {
    var Y;
    t.inputWidth = (Y = o.value) == null ? void 0 : Y.$el.offsetWidth;
  }, ge = () => {
    e.filterable && t.query !== t.selectedLabel && (t.query = t.selectedLabel, W(t.query));
  }, se = Dn(() => {
    ge();
  }, A.value), le = Dn((Y) => {
    W(Y.target.value);
  }, A.value), ce = (Y) => {
    rn(e.modelValue, Y) || n.emit(Jn, Y);
  }, he = (Y) => {
    if (Y.code !== Fe.delete) {
      if (Y.target.value.length <= 0 && !ke()) {
        const oe = e.modelValue.slice();
        oe.pop(), n.emit(lt, oe), ce(oe);
      }
      Y.target.value.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder);
    }
  }, Te = (Y, oe) => {
    const pe = t.selected.indexOf(oe);
    if (pe > -1 && !k.value) {
      const Oe = e.modelValue.slice();
      Oe.splice(pe, 1), n.emit(lt, Oe), ce(Oe), n.emit("remove-tag", oe.value);
    }
    Y.stopPropagation();
  }, Me = (Y) => {
    Y.stopPropagation();
    const oe = e.multiple ? [] : "";
    if (!St(oe))
      for (const pe of t.selected)
        pe.isDisabled && oe.push(pe.value);
    n.emit(lt, oe), ce(oe), t.hoverIndex = -1, t.visible = false, n.emit("clear");
  }, We = (Y) => {
    var oe;
    if (e.multiple) {
      const pe = (e.modelValue || []).slice(), Oe = je(pe, Y.value);
      Oe > -1 ? pe.splice(Oe, 1) : (e.multipleLimit <= 0 || pe.length < e.multipleLimit) && pe.push(Y.value), n.emit(lt, pe), ce(pe), Y.created && (t.query = "", W(""), t.inputLength = 20), e.filterable && ((oe = l.value) == null || oe.focus());
    } else
      n.emit(lt, Y.value), ce(Y.value), t.visible = false;
    Ze(), !t.visible && nextTick(() => {
      Ke(Y);
    });
  }, je = (Y = [], oe) => {
    if (!zt(oe))
      return Y.indexOf(oe);
    const pe = e.valueKey;
    let Oe = -1;
    return Y.some((yt, Ot) => toRaw(Tt(yt, pe)) === Tt(oe, pe) ? (Oe = Ot, true) : false), Oe;
  }, Ze = () => {
    const Y = l.value || o.value;
    Y && (Y == null || Y.focus());
  }, Ke = (Y) => {
    var oe, pe, Oe, yt, Ot;
    const vn = Array.isArray(Y) ? Y[0] : Y;
    let hn = null;
    if (vn != null && vn.value) {
      const Wt = z.value.filter((gr) => gr.value === vn.value);
      Wt.length > 0 && (hn = Wt[0].$el);
    }
    if (u.value && hn) {
      const Wt = (yt = (Oe = (pe = (oe = u.value) == null ? void 0 : oe.popperRef) == null ? void 0 : pe.contentRef) == null ? void 0 : Oe.querySelector) == null ? void 0 : yt.call(Oe, `.${r.be("dropdown", "wrap")}`);
      Wt && tc(Wt, hn);
    }
    (Ot = m.value) == null || Ot.handleScroll();
  }, rt = (Y) => {
    t.optionsCount++, t.filteredOptionsCount++, t.options.set(Y.value, Y), t.cachedOptions.set(Y.value, Y);
  }, ht = (Y, oe) => {
    t.options.get(Y) === oe && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(Y));
  }, it = (Y) => {
    Y.code !== Fe.backspace && ke(false), t.inputLength = l.value.value.length * 15 + 20, M();
  }, ke = (Y) => {
    if (!Array.isArray(t.selected))
      return;
    const oe = t.selected[t.selected.length - 1];
    if (oe)
      return Y === true || Y === false ? (oe.hitState = Y, Y) : (oe.hitState = !oe.hitState, oe.hitState);
  }, ct = (Y) => {
    const oe = Y.target.value;
    if (Y.type === "compositionend")
      t.isOnComposition = false, nextTick(() => W(oe));
    else {
      const pe = oe[oe.length - 1] || "";
      t.isOnComposition = !Bl(pe);
    }
  }, dt = () => {
    nextTick(() => Ke(t.selected));
  }, ut = (Y) => {
    Lo ? Lo = false : ((e.automaticDropdown || e.filterable) && (e.filterable && !t.visible && (t.menuVisibleOnFocus = true), t.visible = true), n.emit("focus", Y));
  }, Je = () => {
    var Y, oe, pe;
    t.visible = false, (Y = o.value) == null || Y.blur(), (pe = (oe = s.value) == null ? void 0 : oe.blur) == null || pe.call(oe);
  }, re = (Y) => {
    setTimeout(() => {
      var oe;
      if ((oe = u.value) != null && oe.isFocusInsideContent()) {
        Lo = true;
        return;
      }
      t.visible && De(), n.emit("blur", Y);
    });
  }, Ee = (Y) => {
    Me(Y);
  }, De = () => {
    t.visible = false;
  }, Qe = (Y) => {
    t.visible && (Y.preventDefault(), Y.stopPropagation(), t.visible = false);
  }, ee = (Y) => {
    var oe;
    Y && !t.mouseEnter || k.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = false : (!u.value || !u.value.isFocusInsideContent()) && (t.visible = !t.visible), t.visible && ((oe = l.value || o.value) == null || oe.focus()));
  }, J = () => {
    t.visible ? z.value[t.hoverIndex] && We(z.value[t.hoverIndex]) : ee();
  }, D = (Y) => zt(Y.value) ? Tt(Y.value, e.valueKey) : Y.value, Z = computed(() => z.value.filter((Y) => Y.visible).every((Y) => Y.disabled)), q = computed(() => t.selected.slice(0, e.maxCollapseTags)), te = computed(() => t.selected.slice(e.maxCollapseTags)), x = (Y) => {
    if (!t.visible) {
      t.visible = true;
      return;
    }
    if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !Z.value) {
      Y === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : Y === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
      const oe = z.value[t.hoverIndex];
      (oe.disabled === true || oe.states.groupDisabled === true || !oe.visible) && x(Y), nextTick(() => Ke(v.value));
    }
  };
  return {
    optionList: b,
    optionsArray: z,
    selectSize: L,
    handleResize: ne,
    debouncedOnInputChange: se,
    debouncedQueryChange: le,
    deletePrevTag: he,
    deleteTag: Te,
    deleteSelected: Me,
    handleOptionSelect: We,
    scrollToOption: Ke,
    readonly: w,
    resetInputHeight: M,
    showClose: S,
    iconComponent: _,
    iconReverse: P,
    showNewOption: N,
    collapseTagSize: H,
    setSelected: G,
    managePlaceholder: E,
    selectDisabled: k,
    emptyText: B,
    toggleLastOptionHitState: ke,
    resetInputState: it,
    handleComposition: ct,
    onOptionCreate: rt,
    onOptionDestroy: ht,
    handleMenuEnter: dt,
    handleFocus: ut,
    blur: Je,
    handleBlur: re,
    handleClearClick: Ee,
    handleClose: De,
    handleKeydownEscape: Qe,
    toggleMenu: ee,
    selectOption: J,
    getValueKey: D,
    navigateOptions: x,
    handleDeleteTooltipTag: (Y, oe) => {
      var pe, Oe;
      Te(Y, oe), (Oe = (pe = c.value) == null ? void 0 : pe.updatePopper) == null || Oe.call(pe);
    },
    dropMenuVisible: K,
    queryChange: h3,
    groupQueryChange: d,
    showTagList: q,
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
var C$ = defineComponent({
  name: "ElOptions",
  emits: ["update-options"],
  setup(e, { slots: t, emit: n }) {
    let a = [];
    function r(o, l) {
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
          var m, v, h3, d;
          const b = (m = (p == null ? void 0 : p.type) || {}) == null ? void 0 : m.name;
          b === "ElOptionGroup" ? c(!St(p.children) && !Array.isArray(p.children) && ft((v = p.children) == null ? void 0 : v.default) ? (h3 = p.children) == null ? void 0 : h3.default() : p.children) : b === "ElOption" ? u.push((d = p.props) == null ? void 0 : d.label) : Array.isArray(p.children) && c(p.children);
        });
      }
      return s.length && c((l = s[0]) == null ? void 0 : l.children), r(u, a) || (a = u, n("update-options", u)), s;
    };
  }
});
var Zi = "ElSelect";
var S$ = defineComponent({
  name: Zi,
  componentName: Zi,
  components: {
    ElInput: Bt,
    ElSelectMenu: b$,
    ElOption: as,
    ElOptions: C$,
    ElTag: hl,
    ElScrollbar: Ma,
    ElTooltip: tr,
    ElIcon: Re
  },
  directives: { ClickOutside: $a },
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
      validator: E0
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
    teleported: go.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: un,
      default: cr
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: un,
      default: io
    },
    tagType: { ...es.type, default: "info" },
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
      values: co,
      default: "bottom-start"
    }
  },
  emits: [
    lt,
    Jn,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(e, t) {
    const n = ye("select"), a = ye("input"), { t: r } = st(), o = y$(e), {
      optionList: l,
      optionsArray: s,
      selectSize: u,
      readonly: c,
      handleResize: f,
      collapseTagSize: p,
      debouncedOnInputChange: m,
      debouncedQueryChange: v,
      deletePrevTag: h3,
      deleteTag: d,
      deleteSelected: b,
      handleOptionSelect: y,
      scrollToOption: C,
      setSelected: g,
      resetInputHeight: w,
      managePlaceholder: k,
      showClose: S,
      selectDisabled: _,
      iconComponent: P,
      iconReverse: A,
      showNewOption: B,
      emptyText: z,
      toggleLastOptionHitState: I,
      resetInputState: N,
      handleComposition: L,
      onOptionCreate: H,
      onOptionDestroy: K,
      handleMenuEnter: M,
      handleFocus: W,
      blur: E,
      handleBlur: V,
      handleClearClick: G,
      handleClose: F,
      handleKeydownEscape: X,
      toggleMenu: ne,
      selectOption: me,
      getValueKey: ge,
      navigateOptions: se,
      handleDeleteTooltipTag: le,
      dropMenuVisible: ce,
      reference: he,
      input: Te,
      iOSInput: Me,
      tooltipRef: We,
      tagTooltipRef: je,
      tags: Ze,
      selectWrapper: Ke,
      scrollbar: rt,
      queryChange: ht,
      groupQueryChange: it,
      handleMouseEnter: ke,
      handleMouseLeave: ct,
      showTagList: dt,
      collapseTagList: ut
    } = w$(e, o, t), { focus: Je } = M0(he), {
      inputWidth: re,
      selected: Ee,
      inputLength: De,
      filteredOptionsCount: Qe,
      visible: ee,
      selectedLabel: J,
      hoverIndex: D,
      query: Z,
      inputHovering: q,
      currentPlaceholder: te,
      menuVisibleOnFocus: x,
      isOnComposition: ue,
      options: Se,
      cachedOptions: Ie,
      optionsCount: Y,
      prefixWidth: oe
    } = toRefs(o), pe = computed(() => {
      const Ft = [n.b()], Vn = unref(u);
      return Vn && Ft.push(n.m(Vn)), e.disabled && Ft.push(n.m("disabled")), Ft;
    }), Oe = computed(() => [
      n.e("tags"),
      n.is("disabled", unref(_))
    ]), yt = computed(() => [
      n.b("tags-wrapper"),
      { "has-prefix": unref(oe) && unref(Ee).length }
    ]), Ot = computed(() => [
      n.e("input"),
      n.is(unref(u)),
      n.is("disabled", unref(_))
    ]), vn = computed(() => [
      n.e("input"),
      n.is(unref(u)),
      n.em("input", "iOS")
    ]), hn = computed(() => [
      n.is("empty", !e.allowCreate && !!unref(Z) && unref(Qe) === 0)
    ]), Wt = computed(() => ({
      maxWidth: `${unref(re) - 32}px`,
      width: "100%"
    })), gr = computed(() => ({ maxWidth: `${unref(re) > 123 ? unref(re) - 123 : unref(re) - 75}px` })), jd = computed(() => ({
      marginLeft: `${unref(oe)}px`,
      flexGrow: 1,
      width: `${unref(De) / (unref(re) - 32)}%`,
      maxWidth: `${unref(re) - 42}px`
    }));
    provide(bo, reactive({
      props: e,
      options: Se,
      optionsArray: s,
      cachedOptions: Ie,
      optionsCount: Y,
      filteredOptionsCount: Qe,
      hoverIndex: D,
      handleOptionSelect: y,
      onOptionCreate: H,
      onOptionDestroy: K,
      selectWrapper: Ke,
      selected: Ee,
      setSelected: g,
      queryChange: ht,
      groupQueryChange: it
    })), onMounted(() => {
      o.cachedPlaceHolder = te.value = e.placeholder || (() => r("el.select.placeholder")), e.multiple && Array.isArray(e.modelValue) && e.modelValue.length > 0 && (te.value = ""), ln(Ke, f), e.remote && e.multiple && w(), nextTick(() => {
        const Ft = he.value && he.value.$el;
        if (Ft && (re.value = Ft.getBoundingClientRect().width, t.slots.prefix)) {
          const Vn = Ft.querySelector(`.${a.e("prefix")}`);
          oe.value = Math.max(Vn.getBoundingClientRect().width + 11, 30);
        }
      }), g();
    }), e.multiple && !Array.isArray(e.modelValue) && t.emit(lt, []), !e.multiple && Array.isArray(e.modelValue) && t.emit(lt, "");
    const Kd = computed(() => {
      var Ft, Vn;
      return (Vn = (Ft = We.value) == null ? void 0 : Ft.popperRef) == null ? void 0 : Vn.contentRef;
    });
    return {
      isIOS: hu,
      onOptionsRendered: (Ft) => {
        l.value = Ft;
      },
      prefixWidth: oe,
      selectSize: u,
      readonly: c,
      handleResize: f,
      collapseTagSize: p,
      debouncedOnInputChange: m,
      debouncedQueryChange: v,
      deletePrevTag: h3,
      deleteTag: d,
      handleDeleteTooltipTag: le,
      deleteSelected: b,
      handleOptionSelect: y,
      scrollToOption: C,
      inputWidth: re,
      selected: Ee,
      inputLength: De,
      filteredOptionsCount: Qe,
      visible: ee,
      selectedLabel: J,
      hoverIndex: D,
      query: Z,
      inputHovering: q,
      currentPlaceholder: te,
      menuVisibleOnFocus: x,
      isOnComposition: ue,
      options: Se,
      resetInputHeight: w,
      managePlaceholder: k,
      showClose: S,
      selectDisabled: _,
      iconComponent: P,
      iconReverse: A,
      showNewOption: B,
      emptyText: z,
      toggleLastOptionHitState: I,
      resetInputState: N,
      handleComposition: L,
      handleMenuEnter: M,
      handleFocus: W,
      blur: E,
      handleBlur: V,
      handleClearClick: G,
      handleClose: F,
      handleKeydownEscape: X,
      toggleMenu: ne,
      selectOption: me,
      getValueKey: ge,
      navigateOptions: se,
      dropMenuVisible: ce,
      focus: Je,
      reference: he,
      input: Te,
      iOSInput: Me,
      tooltipRef: We,
      popperPaneRef: Kd,
      tags: Ze,
      selectWrapper: Ke,
      scrollbar: rt,
      wrapperKls: pe,
      tagsKls: Oe,
      tagWrapperKls: yt,
      inputKls: Ot,
      iOSInputKls: vn,
      scrollbarKls: hn,
      selectTagsStyle: Wt,
      nsSelect: n,
      tagTextStyle: gr,
      inputStyle: jd,
      handleMouseEnter: ke,
      handleMouseLeave: ct,
      showTagList: dt,
      collapseTagList: ut,
      tagTooltipRef: je
    };
  }
});
var k$ = ["disabled", "autocomplete"];
var _$ = ["disabled"];
var $$ = { style: { height: "100%", display: "flex", "justify-content": "center", "align-items": "center" } };
function E$(e, t, n, a, r, o) {
  const l = resolveComponent("el-tag"), s = resolveComponent("el-tooltip"), u = resolveComponent("el-icon"), c = resolveComponent("el-input"), f = resolveComponent("el-option"), p = resolveComponent("el-options"), m = resolveComponent("el-scrollbar"), v = resolveComponent("el-select-menu"), h3 = resolveDirective("click-outside");
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
                    onClose: (b) => e.deleteTag(b, d)
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
                                onClose: (b) => e.handleDeleteTooltipTag(b, d)
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
                    onClose: (b) => e.deleteTag(b, d)
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
            }, null, 46, k$)), [
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
          }, null, 10, _$)) : createCommentVNode("v-if", true),
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
                createBaseVNode("div", $$, [
                  renderSlot(e.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ], 32)
      ]),
      content: withCtx(() => [
        createVNode(v, null, {
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
    [h3, e.handleClose, e.popperPaneRef]
  ]);
}
var T$ = xe(S$, [["render", E$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
var O$ = defineComponent({
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
    const t = ye("select"), n = ref(true), a = getCurrentInstance(), r = ref([]);
    provide($d, reactive({
      ...toRefs(e)
    }));
    const o = inject(bo);
    onMounted(() => {
      r.value = l(a.subTree);
    });
    const l = (u) => {
      const c = [];
      return Array.isArray(u.children) && u.children.forEach((f) => {
        var p;
        f.type && f.type.name === "ElOption" && f.component && f.component.proxy ? c.push(f.component.proxy) : (p = f.children) != null && p.length && c.push(...l(f));
      }), c;
    }, { groupQueryChange: s } = toRaw(o);
    return watch(s, () => {
      n.value = r.value.some((u) => u.visible === true);
    }, { flush: "post" }), {
      visible: n,
      ns: t
    };
  }
});
function P$(e, t, n, a, r, o) {
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
var Ed = xe(O$, [["render", P$], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
var Td = Lt(T$, {
  Option: as,
  OptionGroup: Ed
});
var Od = dn(as);
dn(Ed);
var rs = () => inject(_d, {});
var x$ = Pe({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: be(Array),
    default: () => fr([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  disabled: Boolean,
  size: {
    type: String,
    values: ra
  }
});
var M$ = defineComponent({
  name: "ElPaginationSizes"
});
var A$ = defineComponent({
  ...M$,
  props: x$,
  emits: ["page-size-change"],
  setup(e, { emit: t }) {
    const n = e, { t: a } = st(), r = ye("pagination"), o = rs(), l = ref(n.pageSize);
    watch(() => n.pageSizes, (c, f) => {
      if (!rn(c, f) && Array.isArray(c)) {
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
      class: normalizeClass(unref(r).e("sizes"))
    }, [
      createVNode(unref(Td), {
        "model-value": l.value,
        disabled: c.disabled,
        "popper-class": c.popperClass,
        size: c.size,
        "validate-event": false,
        onChange: u
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(s), (p) => (openBlock(), createBlock(unref(Od), {
            key: p,
            value: p,
            label: p + unref(a)("el.pagination.pagesize")
          }, null, 8, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["model-value", "disabled", "popper-class", "size"])
    ], 2));
  }
});
var N$ = xe(A$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
var R$ = Pe({
  size: {
    type: String,
    values: ra
  }
});
var L$ = ["disabled"];
var F$ = defineComponent({
  name: "ElPaginationJumper"
});
var I$ = defineComponent({
  ...F$,
  props: R$,
  setup(e) {
    const { t } = st(), n = ye("pagination"), { pageCount: a, disabled: r, currentPage: o, changeEvent: l } = rs(), s = ref(), u = computed(() => {
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
      disabled: unref(r)
    }, [
      createBaseVNode("span", {
        class: normalizeClass([unref(n).e("goto")])
      }, toDisplayString(unref(t)("el.pagination.goto")), 3),
      createVNode(unref(Bt), {
        size: p.size,
        class: normalizeClass([unref(n).e("editor"), unref(n).is("in-pagination")]),
        min: 1,
        max: unref(a),
        disabled: unref(r),
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
    ], 10, L$));
  }
});
var D$ = xe(I$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
var B$ = Pe({
  total: {
    type: Number,
    default: 1e3
  }
});
var z$ = ["disabled"];
var V$ = defineComponent({
  name: "ElPaginationTotal"
});
var H$ = defineComponent({
  ...V$,
  props: B$,
  setup(e) {
    const { t } = st(), n = ye("pagination"), { disabled: a } = rs();
    return (r, o) => (openBlock(), createElementBlock("span", {
      class: normalizeClass(unref(n).e("total")),
      disabled: unref(a)
    }, toDisplayString(unref(t)("el.pagination.total", {
      total: r.total
    })), 11, z$));
  }
});
var W$ = xe(H$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
var j$ = Pe({
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
var K$ = ["onKeyup"];
var q$ = ["aria-current", "aria-label", "tabindex"];
var Y$ = ["tabindex", "aria-label"];
var U$ = ["aria-current", "aria-label", "tabindex"];
var G$ = ["tabindex", "aria-label"];
var X$ = ["aria-current", "aria-label", "tabindex"];
var Z$ = defineComponent({
  name: "ElPaginationPager"
});
var J$ = defineComponent({
  ...Z$,
  props: j$,
  emits: ["change"],
  setup(e, { emit: t }) {
    const n = e, a = ye("pager"), r = ye("icon"), { t: o } = st(), l = ref(false), s = ref(false), u = ref(false), c = ref(false), f = ref(false), p = ref(false), m = computed(() => {
      const w = n.pagerCount, k = (w - 1) / 2, S = Number(n.currentPage), _ = Number(n.pageCount);
      let P = false, A = false;
      _ > w && (S > w - k && (P = true), S < _ - k && (A = true));
      const B = [];
      if (P && !A) {
        const z = _ - (w - 2);
        for (let I = z; I < _; I++)
          B.push(I);
      } else if (!P && A)
        for (let z = 2; z < w; z++)
          B.push(z);
      else if (P && A) {
        const z = Math.floor(w / 2) - 1;
        for (let I = S - z; I <= S + z; I++)
          B.push(I);
      } else
        for (let z = 2; z < _; z++)
          B.push(z);
      return B;
    }), v = computed(() => [
      "more",
      "btn-quickprev",
      r.b(),
      a.is("disabled", n.disabled)
    ]), h3 = computed(() => [
      "more",
      "btn-quicknext",
      r.b(),
      a.is("disabled", n.disabled)
    ]), d = computed(() => n.disabled ? -1 : 0);
    watchEffect(() => {
      const w = (n.pagerCount - 1) / 2;
      l.value = false, s.value = false, n.pageCount > n.pagerCount && (n.currentPage > n.pagerCount - w && (l.value = true), n.currentPage < n.pageCount - w && (s.value = true));
    });
    function b(w = false) {
      n.disabled || (w ? u.value = true : c.value = true);
    }
    function y(w = false) {
      w ? f.value = true : p.value = true;
    }
    function C(w) {
      const k = w.target;
      if (k.tagName.toLowerCase() === "li" && Array.from(k.classList).includes("number")) {
        const S = Number(k.textContent);
        S !== n.currentPage && t("change", S);
      } else
        k.tagName.toLowerCase() === "li" && Array.from(k.classList).includes("more") && g(w);
    }
    function g(w) {
      const k = w.target;
      if (k.tagName.toLowerCase() === "ul" || n.disabled)
        return;
      let S = Number(k.textContent);
      const _ = n.pageCount, P = n.currentPage, A = n.pagerCount - 2;
      k.className.includes("more") && (k.className.includes("quickprev") ? S = P - A : k.className.includes("quicknext") && (S = P + A)), Number.isNaN(+S) || (S < 1 && (S = 1), S > _ && (S = _)), S !== P && t("change", S);
    }
    return (w, k) => (openBlock(), createElementBlock("ul", {
      class: normalizeClass(unref(a).b()),
      onClick: g,
      onKeyup: withKeys(C, ["enter"])
    }, [
      w.pageCount > 0 ? (openBlock(), createElementBlock("li", {
        key: 0,
        class: normalizeClass([[
          unref(a).is("active", w.currentPage === 1),
          unref(a).is("disabled", w.disabled)
        ], "number"]),
        "aria-current": w.currentPage === 1,
        "aria-label": unref(o)("el.pagination.currentPage", { pager: 1 }),
        tabindex: unref(d)
      }, " 1 ", 10, q$)) : createCommentVNode("v-if", true),
      l.value ? (openBlock(), createElementBlock("li", {
        key: 1,
        class: normalizeClass(unref(v)),
        tabindex: unref(d),
        "aria-label": unref(o)("el.pagination.prevPages", { pager: w.pagerCount - 2 }),
        onMouseenter: k[0] || (k[0] = (S) => b(true)),
        onMouseleave: k[1] || (k[1] = (S) => u.value = false),
        onFocus: k[2] || (k[2] = (S) => y(true)),
        onBlur: k[3] || (k[3] = (S) => f.value = false)
      }, [
        (u.value || f.value) && !w.disabled ? (openBlock(), createBlock(unref(ba), { key: 0 })) : (openBlock(), createBlock(unref(Qs), { key: 1 }))
      ], 42, Y$)) : createCommentVNode("v-if", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(m), (S) => (openBlock(), createElementBlock("li", {
        key: S,
        class: normalizeClass([[
          unref(a).is("active", w.currentPage === S),
          unref(a).is("disabled", w.disabled)
        ], "number"]),
        "aria-current": w.currentPage === S,
        "aria-label": unref(o)("el.pagination.currentPage", { pager: S }),
        tabindex: unref(d)
      }, toDisplayString(S), 11, U$))), 128)),
      s.value ? (openBlock(), createElementBlock("li", {
        key: 2,
        class: normalizeClass(unref(h3)),
        tabindex: unref(d),
        "aria-label": unref(o)("el.pagination.nextPages", { pager: w.pagerCount - 2 }),
        onMouseenter: k[4] || (k[4] = (S) => b()),
        onMouseleave: k[5] || (k[5] = (S) => c.value = false),
        onFocus: k[6] || (k[6] = (S) => y()),
        onBlur: k[7] || (k[7] = (S) => p.value = false)
      }, [
        (c.value || p.value) && !w.disabled ? (openBlock(), createBlock(unref(ya), { key: 0 })) : (openBlock(), createBlock(unref(Qs), { key: 1 }))
      ], 42, G$)) : createCommentVNode("v-if", true),
      w.pageCount > 1 ? (openBlock(), createElementBlock("li", {
        key: 3,
        class: normalizeClass([[
          unref(a).is("active", w.currentPage === w.pageCount),
          unref(a).is("disabled", w.disabled)
        ], "number"]),
        "aria-current": w.currentPage === w.pageCount,
        "aria-label": unref(o)("el.pagination.currentPage", { pager: w.pageCount }),
        tabindex: unref(d)
      }, toDisplayString(w.pageCount), 11, X$)) : createCommentVNode("v-if", true)
    ], 42, K$));
  }
});
var Q$ = xe(J$, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
var Pt = (e) => typeof e != "number";
var eE = Pe({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (e) => ot(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
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
    default: () => fr([10, 20, 30, 40, 50, 100])
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
    type: un,
    default: () => Za
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: un,
    default: () => Cn
  },
  small: Boolean,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean
});
var tE = {
  "update:current-page": (e) => ot(e),
  "update:page-size": (e) => ot(e),
  "size-change": (e) => ot(e),
  "current-change": (e) => ot(e),
  "prev-click": (e) => ot(e),
  "next-click": (e) => ot(e)
};
var Ji = "ElPagination";
var nE = defineComponent({
  name: Ji,
  props: eE,
  emits: tE,
  setup(e, { emit: t, slots: n }) {
    const { t: a } = st(), r = ye("pagination"), o = getCurrentInstance().vnode.props || {}, l = "onUpdate:currentPage" in o || "onUpdate:current-page" in o || "onCurrentChange" in o, s = "onUpdate:pageSize" in o || "onUpdate:page-size" in o || "onSizeChange" in o, u = computed(() => {
      if (Pt(e.total) && Pt(e.pageCount) || !Pt(e.currentPage) && !l)
        return false;
      if (e.layout.includes("sizes")) {
        if (Pt(e.pageCount)) {
          if (!Pt(e.total) && !Pt(e.pageSize) && !s)
            return false;
        } else if (!s)
          return false;
      }
      return true;
    }), c = ref(Pt(e.defaultPageSize) ? 10 : e.defaultPageSize), f = ref(Pt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), p = computed({
      get() {
        return Pt(e.pageSize) ? c.value : e.pageSize;
      },
      set(g) {
        Pt(e.pageSize) && (c.value = g), s && (t("update:page-size", g), t("size-change", g));
      }
    }), m = computed(() => {
      let g = 0;
      return Pt(e.pageCount) ? Pt(e.total) || (g = Math.max(1, Math.ceil(e.total / p.value))) : g = e.pageCount, g;
    }), v = computed({
      get() {
        return Pt(e.currentPage) ? f.value : e.currentPage;
      },
      set(g) {
        let w = g;
        g < 1 ? w = 1 : g > m.value && (w = m.value), Pt(e.currentPage) && (f.value = w), l && (t("update:current-page", w), t("current-change", w));
      }
    });
    watch(m, (g) => {
      v.value > g && (v.value = g);
    });
    function h3(g) {
      v.value = g;
    }
    function d(g) {
      p.value = g;
      const w = m.value;
      v.value > w && (v.value = w);
    }
    function b() {
      e.disabled || (v.value -= 1, t("prev-click", v.value));
    }
    function y() {
      e.disabled || (v.value += 1, t("next-click", v.value));
    }
    function C(g, w) {
      g && (g.props || (g.props = {}), g.props.class = [g.props.class, w].join(" "));
    }
    return provide(_d, {
      pageCount: m,
      disabled: computed(() => e.disabled),
      currentPage: v,
      changeEvent: h3,
      handleSizeChange: d
    }), () => {
      var g, w;
      if (!u.value)
        return nt(Ji, a("el.pagination.deprecationWarning")), null;
      if (!e.layout || e.hideOnSinglePage && m.value <= 1)
        return null;
      const k = [], S = [], _ = h("div", { class: r.e("rightwrapper") }, S), P = {
        prev: h(l$, {
          disabled: e.disabled,
          currentPage: v.value,
          prevText: e.prevText,
          prevIcon: e.prevIcon,
          onClick: b
        }),
        jumper: h(D$, {
          size: e.small ? "small" : "default"
        }),
        pager: h(Q$, {
          currentPage: v.value,
          pageCount: m.value,
          pagerCount: e.pagerCount,
          onChange: h3,
          disabled: e.disabled
        }),
        next: h(f$, {
          disabled: e.disabled,
          currentPage: v.value,
          pageCount: m.value,
          nextText: e.nextText,
          nextIcon: e.nextIcon,
          onClick: y
        }),
        sizes: h(N$, {
          pageSize: p.value,
          pageSizes: e.pageSizes,
          popperClass: e.popperClass,
          disabled: e.disabled,
          size: e.small ? "small" : "default"
        }),
        slot: (w = (g = n == null ? void 0 : n.default) == null ? void 0 : g.call(n)) != null ? w : null,
        total: h(W$, { total: Pt(e.total) ? 0 : e.total })
      }, A = e.layout.split(",").map((z) => z.trim());
      let B = false;
      return A.forEach((z) => {
        if (z === "->") {
          B = true;
          return;
        }
        B ? S.push(P[z]) : k.push(P[z]);
      }), C(k[0], r.is("first")), C(k[k.length - 1], r.is("last")), B && S.length > 0 && (C(S[0], r.is("first")), C(S[S.length - 1], r.is("last")), k.push(_)), h("div", {
        class: [
          r.b(),
          r.is("background", e.background),
          {
            [r.m("small")]: e.small
          }
        ]
      }, k);
    };
  }
});
var aE = Lt(nE);
var rE = /["'&<>]/;
var oE = lE;
function lE(e) {
  var t = "" + e, n = rE.exec(t);
  if (!n)
    return t;
  var a, r = "", o = 0, l = 0;
  for (o = n.index; o < t.length; o++) {
    switch (t.charCodeAt(o)) {
      case 34:
        a = "&quot;";
        break;
      case 38:
        a = "&amp;";
        break;
      case 39:
        a = "&#39;";
        break;
      case 60:
        a = "&lt;";
        break;
      case 62:
        a = "&gt;";
        break;
      default:
        continue;
    }
    l !== o && (r += t.substring(l, o)), l = o + 1, r += a;
  }
  return l !== o ? r + t.substring(l, o) : r;
}
var sE = fn(oE);
var Fo = function(e) {
  var t;
  return (t = e.target) == null ? void 0 : t.closest("td");
};
var iE = function(e, t, n, a, r) {
  if (!t && !a && (!r || Array.isArray(r) && !r.length))
    return e;
  typeof n == "string" ? n = n === "descending" ? -1 : 1 : n = n && n < 0 ? -1 : 1;
  const o = a ? null : function(s, u) {
    return r ? (Array.isArray(r) || (r = [r]), r.map((c) => typeof c == "string" ? Tt(s, c) : c(s, u, e))) : (t !== "$key" && zt(s) && "$value" in s && (s = s.$value), [zt(s) ? Tt(s, t) : s]);
  }, l = function(s, u) {
    if (a)
      return a(s.value, u.value);
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
var Pd = function(e, t) {
  let n = null;
  return e.columns.forEach((a) => {
    a.id === t && (n = a);
  }), n;
};
var uE = function(e, t) {
  let n = null;
  for (let a = 0; a < e.columns.length; a++) {
    const r = e.columns[a];
    if (r.columnKey === t) {
      n = r;
      break;
    }
  }
  return n || Pa("ElTable", `No column matching with column-key: ${t}`), n;
};
var Qi = function(e, t, n) {
  const a = (t.className || "").match(new RegExp(`${n}-table_[^\\s]+`, "gm"));
  return a ? Pd(e, a[0]) : null;
};
var kt = (e, t) => {
  if (!e)
    throw new Error("Row is required when get row identity");
  if (typeof t == "string") {
    if (!t.includes("."))
      return `${e[t]}`;
    const n = t.split(".");
    let a = e;
    for (const r of n)
      a = a[r];
    return `${a}`;
  } else if (typeof t == "function")
    return t.call(null, e);
};
var Yn = function(e, t) {
  const n = {};
  return (e || []).forEach((a, r) => {
    n[kt(a, t)] = { row: a, index: r };
  }), n;
};
function cE(e, t) {
  const n = {};
  let a;
  for (a in e)
    n[a] = e[a];
  for (a in t)
    if (Xn(t, a)) {
      const r = t[a];
      typeof r < "u" && (n[a] = r);
    }
  return n;
}
function os(e) {
  return e === "" || e !== void 0 && (e = Number.parseInt(e, 10), Number.isNaN(e) && (e = "")), e;
}
function xd(e) {
  return e === "" || e !== void 0 && (e = os(e), Number.isNaN(e) && (e = 80)), e;
}
function dE(e) {
  return typeof e == "number" ? e : typeof e == "string" ? /^\d+(?:px)?$/.test(e) ? Number.parseInt(e, 10) : e : null;
}
function fE(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...a) => t(n(...a)));
}
function Ha(e, t, n) {
  let a = false;
  const r = e.indexOf(t), o = r !== -1, l = (s) => {
    s === "add" ? e.push(t) : e.splice(r, 1), a = true, Ue(t.children) && t.children.forEach((u) => {
      Ha(e, u, n ?? !o);
    });
  };
  return Qt(n) ? n && !o ? l("add") : !n && o && l("remove") : l(o ? "remove" : "add"), a;
}
function pE(e, t, n = "children", a = "hasChildren") {
  const r = (l) => !(Array.isArray(l) && l.length);
  function o(l, s, u) {
    t(l, s, u), s.forEach((c) => {
      if (c[a]) {
        t(c, null, u + 1);
        return;
      }
      const f = c[n];
      r(f) || o(c, f, u + 1);
    });
  }
  e.forEach((l) => {
    if (l[a]) {
      t(l, null, 0);
      return;
    }
    const s = l[n];
    r(s) || o(l, s, 0);
  });
}
var gn;
function vE(e, t, n, a, r) {
  r = Xu({
    enterable: true,
    showArrow: true
  }, r);
  const o = e == null ? void 0 : e.dataset.prefix, l = e == null ? void 0 : e.querySelector(`.${o}-scrollbar__wrap`);
  function s() {
    const b = r.effect === "light", y = document.createElement("div");
    return y.className = [
      `${o}-popper`,
      b ? "is-light" : "is-dark",
      r.popperClass || ""
    ].join(" "), n = sE(n), y.innerHTML = n, y.style.zIndex = String(a()), e == null || e.appendChild(y), y;
  }
  function u() {
    const b = document.createElement("div");
    return b.className = `${o}-popper__arrow`, b;
  }
  function c() {
    f && f.update();
  }
  gn == null || gn(), gn = () => {
    try {
      f && f.destroy(), v && (e == null || e.removeChild(v)), t.removeEventListener("mouseenter", p), t.removeEventListener("mouseleave", m), l == null || l.removeEventListener("scroll", gn), gn = void 0;
    } catch {
    }
  };
  let f = null, p = c, m = gn;
  r.enterable && ({ onOpen: p, onClose: m } = Cc({
    showAfter: r.showAfter,
    hideAfter: r.hideAfter,
    open: c,
    close: gn
  }));
  const v = s();
  v.onmouseenter = p, v.onmouseleave = m;
  const h3 = [];
  if (r.offset && h3.push({
    name: "offset",
    options: {
      offset: [0, r.offset]
    }
  }), r.showArrow) {
    const b = v.appendChild(u());
    h3.push({
      name: "arrow",
      options: {
        element: b,
        padding: 10
      }
    });
  }
  const d = r.popperOptions || {};
  return f = bc(t, v, {
    placement: r.placement || "top",
    strategy: "fixed",
    ...d,
    modifiers: d.modifiers ? h3.concat(d.modifiers) : h3
  }), t.addEventListener("mouseenter", p), t.addEventListener("mouseleave", m), l == null || l.addEventListener("scroll", gn), f;
}
function Md(e) {
  return e.children ? yb(e.children, Md) : [e];
}
function eu(e, t) {
  return e + t.colSpan;
}
var Ad = (e, t, n, a) => {
  let r = 0, o = e;
  const l = n.states.columns.value;
  if (a) {
    const u = Md(a[e]);
    r = l.slice(0, l.indexOf(u[0])).reduce(eu, 0), o = r + u.reduce(eu, 0) - 1;
  } else
    r = e;
  let s;
  switch (t) {
    case "left":
      o < n.states.fixedLeafColumnsLength.value && (s = "left");
      break;
    case "right":
      r >= l.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
      break;
    default:
      o < n.states.fixedLeafColumnsLength.value ? s = "left" : r >= l.length - n.states.rightFixedLeafColumnsLength.value && (s = "right");
  }
  return s ? {
    direction: s,
    start: r,
    after: o
  } : {};
};
var ls = (e, t, n, a, r, o = 0) => {
  const l = [], { direction: s, start: u, after: c } = Ad(t, n, a, r);
  if (s) {
    const f = s === "left";
    l.push(`${e}-fixed-column--${s}`), f && c + o === a.states.fixedLeafColumnsLength.value - 1 ? l.push("is-last-column") : !f && u - o === a.states.columns.value.length - a.states.rightFixedLeafColumnsLength.value && l.push("is-first-column");
  }
  return l;
};
function tu(e, t) {
  return e + (t.realWidth === null || Number.isNaN(t.realWidth) ? Number(t.width) : t.realWidth);
}
var ss = (e, t, n, a) => {
  const {
    direction: r,
    start: o = 0,
    after: l = 0
  } = Ad(e, t, n, a);
  if (!r)
    return;
  const s = {}, u = r === "left", c = n.states.columns.value;
  return u ? s.left = c.slice(0, o).reduce(tu, 0) : s.right = c.slice(l + 1).reverse().reduce(tu, 0), s;
};
var Ta = (e, t) => {
  e && (Number.isNaN(e[t]) || (e[t] = `${e[t]}px`));
};
function hE(e) {
  const t = getCurrentInstance(), n = ref(false), a = ref([]);
  return {
    updateExpandRows: () => {
      const u = e.data.value || [], c = e.rowKey.value;
      if (n.value)
        a.value = u.slice();
      else if (c) {
        const f = Yn(a.value, c);
        a.value = u.reduce((p, m) => {
          const v = kt(m, c);
          return f[v] && p.push(m), p;
        }, []);
      } else
        a.value = [];
    },
    toggleRowExpansion: (u, c) => {
      Ha(a.value, u, c) && t.emit("expand-change", u, a.value.slice());
    },
    setExpandRowKeys: (u) => {
      t.store.assertRowKey();
      const c = e.data.value || [], f = e.rowKey.value, p = Yn(c, f);
      a.value = u.reduce((m, v) => {
        const h3 = p[v];
        return h3 && m.push(h3.row), m;
      }, []);
    },
    isRowExpanded: (u) => {
      const c = e.rowKey.value;
      return c ? !!Yn(a.value, c)[kt(u, c)] : a.value.includes(u);
    },
    states: {
      expandRows: a,
      defaultExpandAll: n
    }
  };
}
function mE(e) {
  const t = getCurrentInstance(), n = ref(null), a = ref(null), r = (c) => {
    t.store.assertRowKey(), n.value = c, l(c);
  }, o = () => {
    n.value = null;
  }, l = (c) => {
    const { data: f, rowKey: p } = e;
    let m = null;
    p.value && (m = (unref(f) || []).find((v) => kt(v, p.value) === c)), a.value = m, t.emit("current-change", a.value, null);
  };
  return {
    setCurrentRowKey: r,
    restoreCurrentRowKey: o,
    setCurrentRowByKey: l,
    updateCurrentRow: (c) => {
      const f = a.value;
      if (c && c !== f) {
        a.value = c, t.emit("current-change", a.value, f);
        return;
      }
      !c && f && (a.value = null, t.emit("current-change", null, f));
    },
    updateCurrentRowData: () => {
      const c = e.rowKey.value, f = e.data.value || [], p = a.value;
      if (!f.includes(p) && p) {
        if (c) {
          const m = kt(p, c);
          l(m);
        } else
          a.value = null;
        a.value === null && t.emit("current-change", null, p);
      } else
        n.value && (l(n.value), o());
    },
    states: {
      _currentRowKey: n,
      currentRow: a
    }
  };
}
function gE(e) {
  const t = ref([]), n = ref({}), a = ref(16), r = ref(false), o = ref({}), l = ref("hasChildren"), s = ref("children"), u = getCurrentInstance(), c = computed(() => {
    if (!e.rowKey.value)
      return {};
    const y = e.data.value || [];
    return p(y);
  }), f = computed(() => {
    const y = e.rowKey.value, C = Object.keys(o.value), g = {};
    return C.length && C.forEach((w) => {
      if (o.value[w].length) {
        const k = { children: [] };
        o.value[w].forEach((S) => {
          const _ = kt(S, y);
          k.children.push(_), S[l.value] && !g[_] && (g[_] = { children: [] });
        }), g[w] = k;
      }
    }), g;
  }), p = (y) => {
    const C = e.rowKey.value, g = {};
    return pE(y, (w, k, S) => {
      const _ = kt(w, C);
      Array.isArray(k) ? g[_] = {
        children: k.map((P) => kt(P, C)),
        level: S
      } : r.value && (g[_] = {
        children: [],
        lazy: true,
        level: S
      });
    }, s.value, l.value), g;
  }, m = (y = false, C = ((g) => (g = u.store) == null ? void 0 : g.states.defaultExpandAll.value)()) => {
    var g;
    const w = c.value, k = f.value, S = Object.keys(w), _ = {};
    if (S.length) {
      const P = unref(n), A = [], B = (I, N) => {
        if (y)
          return t.value ? C || t.value.includes(N) : !!(C || I != null && I.expanded);
        {
          const L = C || t.value && t.value.includes(N);
          return !!(I != null && I.expanded || L);
        }
      };
      S.forEach((I) => {
        const N = P[I], L = { ...w[I] };
        if (L.expanded = B(N, I), L.lazy) {
          const { loaded: H = false, loading: K = false } = N || {};
          L.loaded = !!H, L.loading = !!K, A.push(I);
        }
        _[I] = L;
      });
      const z = Object.keys(k);
      r.value && z.length && A.length && z.forEach((I) => {
        const N = P[I], L = k[I].children;
        if (A.includes(I)) {
          if (_[I].children.length !== 0)
            throw new Error("[ElTable]children must be an empty array.");
          _[I].children = L;
        } else {
          const { loaded: H = false, loading: K = false } = N || {};
          _[I] = {
            lazy: true,
            loaded: !!H,
            loading: !!K,
            expanded: B(N, I),
            children: L,
            level: ""
          };
        }
      });
    }
    n.value = _, (g = u.store) == null || g.updateTableScrollY();
  };
  watch(() => t.value, () => {
    m(true);
  }), watch(() => c.value, () => {
    m();
  }), watch(() => f.value, () => {
    m();
  });
  const v = (y) => {
    t.value = y, m();
  }, h3 = (y, C) => {
    u.store.assertRowKey();
    const g = e.rowKey.value, w = kt(y, g), k = w && n.value[w];
    if (w && k && "expanded" in k) {
      const S = k.expanded;
      C = typeof C > "u" ? !k.expanded : C, n.value[w].expanded = C, S !== C && u.emit("expand-change", y, C), u.store.updateTableScrollY();
    }
  }, d = (y) => {
    u.store.assertRowKey();
    const C = e.rowKey.value, g = kt(y, C), w = n.value[g];
    r.value && w && "loaded" in w && !w.loaded ? b(y, g, w) : h3(y, void 0);
  }, b = (y, C, g) => {
    const { load: w } = u.props;
    w && !n.value[C].loaded && (n.value[C].loading = true, w(y, g, (k) => {
      if (!Array.isArray(k))
        throw new TypeError("[ElTable] data must be an array");
      n.value[C].loading = false, n.value[C].loaded = true, n.value[C].expanded = true, k.length && (o.value[C] = k), u.emit("expand-change", y, true);
    }));
  };
  return {
    loadData: b,
    loadOrToggle: d,
    toggleTreeExpansion: h3,
    updateTreeExpandKeys: v,
    updateTreeData: m,
    normalize: p,
    states: {
      expandRowKeys: t,
      treeData: n,
      indent: a,
      lazy: r,
      lazyTreeNodeMap: o,
      lazyColumnIdentifier: l,
      childrenColumnName: s
    }
  };
}
var bE = (e, t) => {
  const n = t.sortingColumn;
  return !n || typeof n.sortable == "string" ? e : iE(e, t.sortProp, t.sortOrder, n.sortMethod, n.sortBy);
};
var Wr = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children && n.children.length > 0 ? t.push.apply(t, Wr(n.children)) : t.push(n);
  }), t;
};
function yE() {
  var e;
  const t = getCurrentInstance(), { size: n } = toRefs((e = t.proxy) == null ? void 0 : e.$props), a = ref(null), r = ref([]), o = ref([]), l = ref(false), s = ref([]), u = ref([]), c = ref([]), f = ref([]), p = ref([]), m = ref([]), v = ref([]), h3 = ref([]), d = [], b = ref(0), y = ref(0), C = ref(0), g = ref(false), w = ref([]), k = ref(false), S = ref(false), _ = ref(null), P = ref({}), A = ref(null), B = ref(null), z = ref(null), I = ref(null), N = ref(null);
  watch(r, () => t.state && M(false), {
    deep: true
  });
  const L = () => {
    if (!a.value)
      throw new Error("[ElTable] prop row-key is required");
  }, H = (J) => {
    var D;
    (D = J.children) == null || D.forEach((Z) => {
      Z.fixed = J.fixed, H(Z);
    });
  }, K = () => {
    s.value.forEach((te) => {
      H(te);
    }), f.value = s.value.filter((te) => te.fixed === true || te.fixed === "left"), p.value = s.value.filter((te) => te.fixed === "right"), f.value.length > 0 && s.value[0] && s.value[0].type === "selection" && !s.value[0].fixed && (s.value[0].fixed = true, f.value.unshift(s.value[0]));
    const J = s.value.filter((te) => !te.fixed);
    u.value = [].concat(f.value).concat(J).concat(p.value);
    const D = Wr(J), Z = Wr(f.value), q = Wr(p.value);
    b.value = D.length, y.value = Z.length, C.value = q.length, c.value = [].concat(Z).concat(D).concat(q), l.value = f.value.length > 0 || p.value.length > 0;
  }, M = (J, D = false) => {
    J && K(), D ? t.state.doLayout() : t.state.debouncedUpdateLayout();
  }, W = (J) => w.value.includes(J), E = () => {
    g.value = false, w.value.length && (w.value = [], t.emit("selection-change", []));
  }, V = () => {
    let J;
    if (a.value) {
      J = [];
      const D = Yn(w.value, a.value), Z = Yn(r.value, a.value);
      for (const q in D)
        Xn(D, q) && !Z[q] && J.push(D[q].row);
    } else
      J = w.value.filter((D) => !r.value.includes(D));
    if (J.length) {
      const D = w.value.filter((Z) => !J.includes(Z));
      w.value = D, t.emit("selection-change", D.slice());
    }
  }, G = () => (w.value || []).slice(), F = (J, D = void 0, Z = true) => {
    if (Ha(w.value, J, D)) {
      const te = (w.value || []).slice();
      Z && t.emit("select", te, J), t.emit("selection-change", te);
    }
  }, X = () => {
    var J, D;
    const Z = S.value ? !g.value : !(g.value || w.value.length);
    g.value = Z;
    let q = false, te = 0;
    const x = (D = (J = t == null ? void 0 : t.store) == null ? void 0 : J.states) == null ? void 0 : D.rowKey.value;
    r.value.forEach((ue, Se) => {
      const Ie = Se + te;
      _.value ? _.value.call(null, ue, Ie) && Ha(w.value, ue, Z) && (q = true) : Ha(w.value, ue, Z) && (q = true), te += ge(kt(ue, x));
    }), q && t.emit("selection-change", w.value ? w.value.slice() : []), t.emit("select-all", w.value);
  }, ne = () => {
    const J = Yn(w.value, a.value);
    r.value.forEach((D) => {
      const Z = kt(D, a.value), q = J[Z];
      q && (w.value[q.index] = D);
    });
  }, me = () => {
    var J, D, Z;
    if (((J = r.value) == null ? void 0 : J.length) === 0) {
      g.value = false;
      return;
    }
    let q;
    a.value && (q = Yn(w.value, a.value));
    const te = function(Ie) {
      return q ? !!q[kt(Ie, a.value)] : w.value.includes(Ie);
    };
    let x = true, ue = 0, Se = 0;
    for (let Ie = 0, Y = (r.value || []).length; Ie < Y; Ie++) {
      const oe = (Z = (D = t == null ? void 0 : t.store) == null ? void 0 : D.states) == null ? void 0 : Z.rowKey.value, pe = Ie + Se, Oe = r.value[Ie], yt = _.value && _.value.call(null, Oe, pe);
      if (te(Oe))
        ue++;
      else if (!_.value || yt) {
        x = false;
        break;
      }
      Se += ge(kt(Oe, oe));
    }
    ue === 0 && (x = false), g.value = x;
  }, ge = (J) => {
    var D;
    if (!t || !t.store)
      return 0;
    const { treeData: Z } = t.store.states;
    let q = 0;
    const te = (D = Z.value[J]) == null ? void 0 : D.children;
    return te && (q += te.length, te.forEach((x) => {
      q += ge(x);
    })), q;
  }, se = (J, D) => {
    Array.isArray(J) || (J = [J]);
    const Z = {};
    return J.forEach((q) => {
      P.value[q.id] = D, Z[q.columnKey || q.id] = D;
    }), Z;
  }, le = (J, D, Z) => {
    B.value && B.value !== J && (B.value.order = null), B.value = J, z.value = D, I.value = Z;
  }, ce = () => {
    let J = unref(o);
    Object.keys(P.value).forEach((D) => {
      const Z = P.value[D];
      if (!Z || Z.length === 0)
        return;
      const q = Pd({
        columns: c.value
      }, D);
      q && q.filterMethod && (J = J.filter((te) => Z.some((x) => q.filterMethod.call(null, x, te, q))));
    }), A.value = J;
  }, he = () => {
    r.value = bE(A.value, {
      sortingColumn: B.value,
      sortProp: z.value,
      sortOrder: I.value
    });
  }, Te = (J = void 0) => {
    J && J.filter || ce(), he();
  }, Me = (J) => {
    const { tableHeaderRef: D } = t.refs;
    if (!D)
      return;
    const Z = Object.assign({}, D.filterPanels), q = Object.keys(Z);
    if (q.length)
      if (typeof J == "string" && (J = [J]), Array.isArray(J)) {
        const te = J.map((x) => uE({
          columns: c.value
        }, x));
        q.forEach((x) => {
          const ue = te.find((Se) => Se.id === x);
          ue && (ue.filteredValue = []);
        }), t.store.commit("filterChange", {
          column: te,
          values: [],
          silent: true,
          multi: true
        });
      } else
        q.forEach((te) => {
          const x = c.value.find((ue) => ue.id === te);
          x && (x.filteredValue = []);
        }), P.value = {}, t.store.commit("filterChange", {
          column: {},
          values: [],
          silent: true
        });
  }, We = () => {
    B.value && (le(null, null, null), t.store.commit("changeSortCondition", {
      silent: true
    }));
  }, {
    setExpandRowKeys: je,
    toggleRowExpansion: Ze,
    updateExpandRows: Ke,
    states: rt,
    isRowExpanded: ht
  } = hE({
    data: r,
    rowKey: a
  }), {
    updateTreeExpandKeys: it,
    toggleTreeExpansion: ke,
    updateTreeData: ct,
    loadOrToggle: dt,
    states: ut
  } = gE({
    data: r,
    rowKey: a
  }), {
    updateCurrentRowData: Je,
    updateCurrentRow: re,
    setCurrentRowKey: Ee,
    states: De
  } = mE({
    data: r,
    rowKey: a
  });
  return {
    assertRowKey: L,
    updateColumns: K,
    scheduleLayout: M,
    isSelected: W,
    clearSelection: E,
    cleanSelection: V,
    getSelectionRows: G,
    toggleRowSelection: F,
    _toggleAllSelection: X,
    toggleAllSelection: null,
    updateSelectionByRowKey: ne,
    updateAllSelected: me,
    updateFilters: se,
    updateCurrentRow: re,
    updateSort: le,
    execFilter: ce,
    execSort: he,
    execQuery: Te,
    clearFilter: Me,
    clearSort: We,
    toggleRowExpansion: Ze,
    setExpandRowKeysAdapter: (J) => {
      je(J), it(J);
    },
    setCurrentRowKey: Ee,
    toggleRowExpansionAdapter: (J, D) => {
      c.value.some(({ type: q }) => q === "expand") ? Ze(J, D) : ke(J, D);
    },
    isRowExpanded: ht,
    updateExpandRows: Ke,
    updateCurrentRowData: Je,
    loadOrToggle: dt,
    updateTreeData: ct,
    states: {
      tableSize: n,
      rowKey: a,
      data: r,
      _data: o,
      isComplex: l,
      _columns: s,
      originColumns: u,
      columns: c,
      fixedColumns: f,
      rightFixedColumns: p,
      leafColumns: m,
      fixedLeafColumns: v,
      rightFixedLeafColumns: h3,
      updateOrderFns: d,
      leafColumnsLength: b,
      fixedLeafColumnsLength: y,
      rightFixedLeafColumnsLength: C,
      isAllSelected: g,
      selection: w,
      reserveSelection: k,
      selectOnIndeterminate: S,
      selectable: _,
      filters: P,
      filteredData: A,
      sortingColumn: B,
      sortProp: z,
      sortOrder: I,
      hoverRow: N,
      ...rt,
      ...ut,
      ...De
    }
  };
}
function yl(e, t) {
  return e.map((n) => {
    var a;
    return n.id === t.id ? t : ((a = n.children) != null && a.length && (n.children = yl(n.children, t)), n);
  });
}
function wl(e) {
  e.forEach((t) => {
    var n, a;
    t.no = (n = t.getColumnIndex) == null ? void 0 : n.call(t), (a = t.children) != null && a.length && wl(t.children);
  }), e.sort((t, n) => t.no - n.no);
}
function wE() {
  const e = getCurrentInstance(), t = yE();
  return {
    ns: ye("table"),
    ...t,
    mutations: {
      setData(l, s) {
        const u = unref(l._data) !== s;
        l.data.value = s, l._data.value = s, e.store.execQuery(), e.store.updateCurrentRowData(), e.store.updateExpandRows(), e.store.updateTreeData(e.store.states.defaultExpandAll.value), unref(l.reserveSelection) ? (e.store.assertRowKey(), e.store.updateSelectionByRowKey()) : u ? e.store.clearSelection() : e.store.cleanSelection(), e.store.updateAllSelected(), e.$ready && e.store.scheduleLayout();
      },
      insertColumn(l, s, u, c) {
        const f = unref(l._columns);
        let p = [];
        u ? (u && !u.children && (u.children = []), u.children.push(s), p = yl(f, u)) : (f.push(s), p = f), wl(p), l._columns.value = p, l.updateOrderFns.push(c), s.type === "selection" && (l.selectable.value = s.selectable, l.reserveSelection.value = s.reserveSelection), e.$ready && (e.store.updateColumns(), e.store.scheduleLayout());
      },
      updateColumnOrder(l, s) {
        var u;
        ((u = s.getColumnIndex) == null ? void 0 : u.call(s)) !== s.no && (wl(l._columns.value), e.$ready && e.store.updateColumns());
      },
      removeColumn(l, s, u, c) {
        const f = unref(l._columns) || [];
        if (u)
          u.children.splice(u.children.findIndex((m) => m.id === s.id), 1), nextTick(() => {
            var m;
            ((m = u.children) == null ? void 0 : m.length) === 0 && delete u.children;
          }), l._columns.value = yl(f, u);
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
        const { sortingColumn: u, sortProp: c, sortOrder: f } = l, p = unref(u), m = unref(c), v = unref(f);
        v === null && (l.sortingColumn.value = null, l.sortProp.value = null);
        const h3 = { filter: true };
        e.store.execQuery(h3), (!s || !(s.silent || s.init)) && e.emit("sort-change", {
          column: p,
          prop: m,
          order: v
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
var Wa = {
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
function CE(e, t) {
  if (!e)
    throw new Error("Table is required.");
  const n = wE();
  return n.toggleAllSelection = Dn(n._toggleAllSelection, 10), Object.keys(Wa).forEach((a) => {
    Nd(Rd(t, a), a, n);
  }), SE(n, t), n;
}
function SE(e, t) {
  Object.keys(Wa).forEach((n) => {
    watch(() => Rd(t, n), (a) => {
      Nd(a, n, e);
    });
  });
}
function Nd(e, t, n) {
  let a = e, r = Wa[t];
  typeof Wa[t] == "object" && (r = r.key, a = a || Wa[t].default), n.states[r].value = a;
}
function Rd(e, t) {
  if (t.includes(".")) {
    const n = t.split(".");
    let a = e;
    return n.forEach((r) => {
      a = a[r];
    }), a;
  } else
    return e[t];
}
var kE = class {
  constructor(t) {
    this.observers = [], this.table = null, this.store = null, this.columns = [], this.fit = true, this.showHeader = true, this.height = ref(null), this.scrollX = ref(false), this.scrollY = ref(false), this.bodyWidth = ref(null), this.fixedWidth = ref(null), this.rightFixedWidth = ref(null), this.gutterWidth = 0;
    for (const n in t)
      Xn(t, n) && (isRef(this[n]) ? this[n].value = t[n] : this[n] = t[n]);
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
      let a = true;
      const r = this.scrollY.value;
      return a = n.wrapRef.scrollHeight > n.wrapRef.clientHeight, this.scrollY.value = a, r !== a;
    }
    return false;
  }
  setHeight(t, n = "height") {
    if (!at)
      return;
    const a = this.table.vnode.el;
    if (t = dE(t), this.height.value = Number(t), !a && (t || t === 0))
      return nextTick(() => this.setHeight(t, n));
    typeof t == "number" ? (a.style[n] = `${t}px`, this.updateElsHeight()) : typeof t == "string" && (a.style[n] = t, this.updateElsHeight());
  }
  setMaxHeight(t) {
    this.setHeight(t, "max-height");
  }
  getFlattenColumns() {
    const t = [];
    return this.table.store.states.columns.value.forEach((a) => {
      a.isColumnGroup ? t.push.apply(t, a.columns) : t.push(a);
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
    let a = 0;
    const r = this.getFlattenColumns(), o = r.filter((u) => typeof u.width != "number");
    if (r.forEach((u) => {
      typeof u.width == "number" && u.realWidth && (u.realWidth = null);
    }), o.length > 0 && t) {
      if (r.forEach((u) => {
        a += Number(u.width || u.minWidth || 80);
      }), a <= n) {
        this.scrollX.value = false;
        const u = n - a;
        if (o.length === 1)
          o[0].realWidth = Number(o[0].minWidth || 80) + u;
        else {
          const c = o.reduce((m, v) => m + Number(v.minWidth || 80), 0), f = u / c;
          let p = 0;
          o.forEach((m, v) => {
            if (v === 0)
              return;
            const h3 = Math.floor(Number(m.minWidth || 80) * f);
            p += h3, m.realWidth = Number(m.minWidth || 80) + h3;
          }), o[0].realWidth = Number(o[0].minWidth || 80) + u - p;
        }
      } else
        this.scrollX.value = true, o.forEach((u) => {
          u.realWidth = Number(u.minWidth);
        });
      this.bodyWidth.value = Math.max(a, n), this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else
      r.forEach((u) => {
        !u.width && !u.minWidth ? u.realWidth = 80 : u.realWidth = Number(u.width || u.minWidth), a += u.realWidth;
      }), this.scrollX.value = a > n, this.bodyWidth.value = a;
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
    this.observers.forEach((a) => {
      var r, o;
      switch (t) {
        case "columns":
          (r = a.state) == null || r.onColumnsChange(this);
          break;
        case "scrollable":
          (o = a.state) == null || o.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${t}.`);
      }
    });
  }
};
var { CheckboxGroup: _E } = ea;
var $E = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: ea,
    ElCheckboxGroup: _E,
    ElScrollbar: Ma,
    ElTooltip: tr,
    ElIcon: Re,
    ArrowDown: io,
    ArrowUp: nc
  },
  directives: { ClickOutside: $a },
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
    const t = getCurrentInstance(), { t: n } = st(), a = ye("table-filter"), r = t == null ? void 0 : t.parent;
    r.filterPanels.value[e.column.id] || (r.filterPanels.value[e.column.id] = t);
    const o = ref(false), l = ref(null), s = computed(() => e.column && e.column.filters), u = computed({
      get: () => {
        var w;
        return (((w = e.column) == null ? void 0 : w.filteredValue) || [])[0];
      },
      set: (w) => {
        c.value && (typeof w < "u" && w !== null ? c.value.splice(0, 1, w) : c.value.splice(0, 1));
      }
    }), c = computed({
      get() {
        return e.column ? e.column.filteredValue || [] : [];
      },
      set(w) {
        e.column && e.upDataColumn("filteredValue", w);
      }
    }), f = computed(() => e.column ? e.column.filterMultiple : true), p = (w) => w.value === u.value, m = () => {
      o.value = false;
    }, v = (w) => {
      w.stopPropagation(), o.value = !o.value;
    }, h3 = () => {
      o.value = false;
    }, d = () => {
      C(c.value), m();
    }, b = () => {
      c.value = [], C(c.value), m();
    }, y = (w) => {
      u.value = w, C(typeof w < "u" && w !== null ? c.value : []), m();
    }, C = (w) => {
      e.store.commit("filterChange", {
        column: e.column,
        values: w
      }), e.store.updateAllSelected();
    };
    watch(o, (w) => {
      e.column && e.upDataColumn("filterOpened", w);
    }, {
      immediate: true
    });
    const g = computed(() => {
      var w, k;
      return (k = (w = l.value) == null ? void 0 : w.popperRef) == null ? void 0 : k.contentRef;
    });
    return {
      tooltipVisible: o,
      multiple: f,
      filteredValue: c,
      filterValue: u,
      filters: s,
      handleConfirm: d,
      handleReset: b,
      handleSelect: y,
      isActive: p,
      t: n,
      ns: a,
      showFilterPanel: v,
      hideFilterPanel: h3,
      popperPaneRef: g,
      tooltip: l
    };
  }
});
var EE = { key: 0 };
var TE = ["disabled"];
var OE = ["label", "onClick"];
function PE(e, t, n, a, r, o) {
  const l = resolveComponent("el-checkbox"), s = resolveComponent("el-checkbox-group"), u = resolveComponent("el-scrollbar"), c = resolveComponent("arrow-up"), f = resolveComponent("arrow-down"), p = resolveComponent("el-icon"), m = resolveComponent("el-tooltip"), v = resolveDirective("click-outside");
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
      e.multiple ? (openBlock(), createElementBlock("div", EE, [
        createBaseVNode("div", {
          class: normalizeClass(e.ns.e("content"))
        }, [
          createVNode(u, {
            "wrap-class": e.ns.e("wrap")
          }, {
            default: withCtx(() => [
              createVNode(s, {
                modelValue: e.filteredValue,
                "onUpdate:modelValue": t[0] || (t[0] = (h3) => e.filteredValue = h3),
                class: normalizeClass(e.ns.e("checkbox-group"))
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(e.filters, (h3) => (openBlock(), createBlock(l, {
                    key: h3.value,
                    label: h3.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(h3.text), 1)
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
            onClick: t[1] || (t[1] = (...h3) => e.handleConfirm && e.handleConfirm(...h3))
          }, toDisplayString(e.t("el.table.confirmFilter")), 11, TE),
          createBaseVNode("button", {
            type: "button",
            onClick: t[2] || (t[2] = (...h3) => e.handleReset && e.handleReset(...h3))
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
          onClick: t[3] || (t[3] = (h3) => e.handleSelect(null))
        }, toDisplayString(e.t("el.table.clearFilter")), 3),
        (openBlock(true), createElementBlock(Fragment, null, renderList(e.filters, (h3) => (openBlock(), createElementBlock("li", {
          key: h3.value,
          class: normalizeClass([e.ns.e("list-item"), e.ns.is("active", e.isActive(h3))]),
          label: h3.value,
          onClick: (d) => e.handleSelect(h3.value)
        }, toDisplayString(h3.text), 11, OE))), 128))
      ], 2))
    ]),
    default: withCtx(() => [
      withDirectives((openBlock(), createElementBlock("span", {
        class: normalizeClass([
          `${e.ns.namespace.value}-table__column-filter-trigger`,
          `${e.ns.namespace.value}-none-outline`
        ]),
        onClick: t[4] || (t[4] = (...h3) => e.showFilterPanel && e.showFilterPanel(...h3))
      }, [
        createVNode(p, null, {
          default: withCtx(() => [
            e.column.filterOpened ? (openBlock(), createBlock(c, { key: 0 })) : (openBlock(), createBlock(f, { key: 1 }))
          ]),
          _: 1
        })
      ], 2)), [
        [v, e.hideFilterPanel, e.popperPaneRef]
      ])
    ]),
    _: 1
  }, 8, ["visible", "placement", "popper-class"]);
}
var xE = xe($E, [["render", PE], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function Ld(e) {
  const t = getCurrentInstance();
  onBeforeMount(() => {
    n.value.addObserver(t);
  }), onMounted(() => {
    a(n.value), r(n.value);
  }), onUpdated(() => {
    a(n.value), r(n.value);
  }), onUnmounted(() => {
    n.value.removeObserver(t);
  });
  const n = computed(() => {
    const o = e.layout;
    if (!o)
      throw new Error("Can not find table layout.");
    return o;
  }), a = (o) => {
    var l;
    const s = ((l = e.vnode.el) == null ? void 0 : l.querySelectorAll("colgroup > col")) || [];
    if (!s.length)
      return;
    const u = o.getFlattenColumns(), c = {};
    u.forEach((f) => {
      c[f.id] = f;
    });
    for (let f = 0, p = s.length; f < p; f++) {
      const m = s[f], v = m.getAttribute("name"), h3 = c[v];
      h3 && m.setAttribute("width", h3.realWidth || h3.width);
    }
  }, r = (o) => {
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
    onColumnsChange: a,
    onScrollableChange: r
  };
}
var pn = Symbol("ElTable");
function ME(e, t) {
  const n = getCurrentInstance(), a = inject(pn), r = (d) => {
    d.stopPropagation();
  }, o = (d, b) => {
    !b.filters && b.sortable ? h3(d, b, false) : b.filterable && !b.sortable && r(d), a == null || a.emit("header-click", b, d);
  }, l = (d, b) => {
    a == null || a.emit("header-contextmenu", b, d);
  }, s = ref(null), u = ref(false), c = ref({}), f = (d, b) => {
    if (at && !(b.children && b.children.length > 0) && s.value && e.border) {
      u.value = true;
      const y = a;
      t("set-drag-visible", true);
      const g = (y == null ? void 0 : y.vnode.el).getBoundingClientRect().left, w = n.vnode.el.querySelector(`th.${b.id}`), k = w.getBoundingClientRect(), S = k.left - g + 30;
      ec(w, "noclick"), c.value = {
        startMouseLeft: d.clientX,
        startLeft: k.right - g,
        startColumnLeft: k.left - g,
        tableLeft: g
      };
      const _ = y == null ? void 0 : y.refs.resizeProxy;
      _.style.left = `${c.value.startLeft}px`, document.onselectstart = function() {
        return false;
      }, document.ondragstart = function() {
        return false;
      };
      const P = (B) => {
        const z = B.clientX - c.value.startMouseLeft, I = c.value.startLeft + z;
        _.style.left = `${Math.max(S, I)}px`;
      }, A = () => {
        if (u.value) {
          const { startColumnLeft: B, startLeft: z } = c.value, N = Number.parseInt(_.style.left, 10) - B;
          b.width = b.realWidth = N, y == null || y.emit("header-dragend", b.width, z - B, b, d), requestAnimationFrame(() => {
            e.store.scheduleLayout(false, true);
          }), document.body.style.cursor = "", u.value = false, s.value = null, c.value = {}, t("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", A), document.onselectstart = null, document.ondragstart = null, setTimeout(() => {
          Yo(w, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", P), document.addEventListener("mouseup", A);
    }
  }, p = (d, b) => {
    if (b.children && b.children.length > 0)
      return;
    const y = d.target;
    if (!ga(y))
      return;
    const C = y == null ? void 0 : y.closest("th");
    if (!(!b || !b.resizable) && !u.value && e.border) {
      const g = C.getBoundingClientRect(), w = document.body.style;
      g.width > 12 && g.right - d.pageX < 8 ? (w.cursor = "col-resize", ca(C, "is-sortable") && (C.style.cursor = "col-resize"), s.value = b) : u.value || (w.cursor = "", ca(C, "is-sortable") && (C.style.cursor = "pointer"), s.value = null);
    }
  }, m = () => {
    at && (document.body.style.cursor = "");
  }, v = ({ order: d, sortOrders: b }) => {
    if (d === "")
      return b[0];
    const y = b.indexOf(d || null);
    return b[y > b.length - 2 ? 0 : y + 1];
  }, h3 = (d, b, y) => {
    var C;
    d.stopPropagation();
    const g = b.order === y ? null : y || v(b), w = (C = d.target) == null ? void 0 : C.closest("th");
    if (w && ca(w, "noclick")) {
      Yo(w, "noclick");
      return;
    }
    if (!b.sortable)
      return;
    const k = e.store.states;
    let S = k.sortProp.value, _;
    const P = k.sortingColumn.value;
    (P !== b || P === b && P.order === null) && (P && (P.order = null), k.sortingColumn.value = b, S = b.property), g ? _ = b.order = g : _ = b.order = null, k.sortProp.value = S, k.sortOrder.value = _, a == null || a.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick: o,
    handleHeaderContextMenu: l,
    handleMouseDown: f,
    handleMouseMove: p,
    handleMouseOut: m,
    handleSortClick: h3,
    handleFilterClick: r
  };
}
function AE(e) {
  const t = inject(pn), n = ye("table");
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
      const v = ss(u, f.fixed, e.store, c);
      return Ta(v, "left"), Ta(v, "right"), Object.assign({}, m, v);
    },
    getHeaderCellClass: (s, u, c, f) => {
      const p = ls(n.b(), u, f.fixed, e.store, c), m = [
        f.id,
        f.order,
        f.headerAlign,
        f.className,
        f.labelClassName,
        ...p
      ];
      f.children || m.push("is-leaf"), f.sortable && m.push("is-sortable");
      const v = t == null ? void 0 : t.props.headerCellClassName;
      return typeof v == "string" ? m.push(v) : typeof v == "function" && m.push(v.call(null, {
        rowIndex: s,
        columnIndex: u,
        row: c,
        column: f
      })), m.push(n.e("cell")), m.filter((h3) => !!h3).join(" ");
    }
  };
}
var Fd = (e) => {
  const t = [];
  return e.forEach((n) => {
    n.children ? (t.push(n), t.push.apply(t, Fd(n.children))) : t.push(n);
  }), t;
};
var NE = (e) => {
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
  const a = [];
  for (let o = 0; o < t; o++)
    a.push([]);
  return Fd(e).forEach((o) => {
    o.children ? (o.rowSpan = 1, o.children.forEach((l) => l.isSubColumn = true)) : o.rowSpan = t - o.level + 1, a[o.level - 1].push(o);
  }), a;
};
function RE(e) {
  const t = inject(pn), n = computed(() => NE(e.store.states.originColumns.value));
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
var LE = defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox: ea
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
    const n = getCurrentInstance(), a = inject(pn), r = ye("table"), o = ref({}), { onColumnsChange: l, onScrollableChange: s } = Ld(a);
    onMounted(async () => {
      await nextTick(), await nextTick();
      const { prop: S, order: _ } = e.defaultSort;
      a == null || a.store.commit("sort", { prop: S, order: _, init: true });
    });
    const {
      handleHeaderClick: u,
      handleHeaderContextMenu: c,
      handleMouseDown: f,
      handleMouseMove: p,
      handleMouseOut: m,
      handleSortClick: v,
      handleFilterClick: h3
    } = ME(e, t), {
      getHeaderRowStyle: d,
      getHeaderRowClass: b,
      getHeaderCellStyle: y,
      getHeaderCellClass: C
    } = AE(e), { isGroup: g, toggleAllSelection: w, columnRows: k } = RE(e);
    return n.state = {
      onColumnsChange: l,
      onScrollableChange: s
    }, n.filterPanels = o, {
      ns: r,
      filterPanels: o,
      onColumnsChange: l,
      onScrollableChange: s,
      columnRows: k,
      getHeaderRowClass: b,
      getHeaderRowStyle: d,
      getHeaderCellClass: C,
      getHeaderCellStyle: y,
      handleHeaderClick: u,
      handleHeaderContextMenu: c,
      handleMouseDown: f,
      handleMouseMove: p,
      handleMouseOut: m,
      handleSortClick: v,
      handleFilterClick: h3,
      isGroup: g,
      toggleAllSelection: w
    };
  },
  render() {
    const {
      ns: e,
      isGroup: t,
      columnRows: n,
      getHeaderCellStyle: a,
      getHeaderCellClass: r,
      getHeaderRowClass: o,
      getHeaderRowStyle: l,
      handleHeaderClick: s,
      handleHeaderContextMenu: u,
      handleMouseDown: c,
      handleMouseMove: f,
      handleSortClick: p,
      handleMouseOut: m,
      store: v,
      $parent: h3
    } = this;
    let d = 1;
    return h("thead", {
      class: { [e.is("group")]: t }
    }, n.map((b, y) => h("tr", {
      class: o(y),
      key: y,
      style: l(y)
    }, b.map((C, g) => (C.rowSpan > d && (d = C.rowSpan), h("th", {
      class: r(y, g, b, C),
      colspan: C.colSpan,
      key: `${C.id}-thead`,
      rowspan: C.rowSpan,
      style: a(y, g, b, C),
      onClick: (w) => s(w, C),
      onContextmenu: (w) => u(w, C),
      onMousedown: (w) => c(w, C),
      onMousemove: (w) => f(w, C),
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
          store: v,
          _self: h3
        }) : C.label,
        C.sortable && h("span", {
          onClick: (w) => p(w, C),
          class: "caret-wrapper"
        }, [
          h("i", {
            onClick: (w) => p(w, C, "ascending"),
            class: "sort-caret ascending"
          }),
          h("i", {
            onClick: (w) => p(w, C, "descending"),
            class: "sort-caret descending"
          })
        ]),
        C.filterable && h(xE, {
          store: v,
          placement: C.filterPlacement || "bottom-start",
          column: C,
          upDataColumn: (w, k) => {
            C[w] = k;
          }
        })
      ])
    ]))))));
  }
});
function FE(e) {
  const t = inject(pn), n = ref(""), a = ref(h("div")), { nextZIndex: r } = kc(), o = (h3, d, b) => {
    var y;
    const C = t, g = Fo(h3);
    let w;
    const k = (y = C == null ? void 0 : C.vnode.el) == null ? void 0 : y.dataset.prefix;
    g && (w = Qi({
      columns: e.store.states.columns.value
    }, g, k), w && (C == null || C.emit(`cell-${b}`, d, w, g, h3))), C == null || C.emit(`row-${b}`, d, w, h3);
  }, l = (h3, d) => {
    o(h3, d, "dblclick");
  }, s = (h3, d) => {
    e.store.commit("setCurrentRow", d), o(h3, d, "click");
  }, u = (h3, d) => {
    o(h3, d, "contextmenu");
  }, c = Dn((h3) => {
    e.store.commit("setHoverRow", h3);
  }, 30), f = Dn(() => {
    e.store.commit("setHoverRow", null);
  }, 30), p = (h3) => {
    const d = window.getComputedStyle(h3, null), b = Number.parseInt(d.paddingLeft, 10) || 0, y = Number.parseInt(d.paddingRight, 10) || 0, C = Number.parseInt(d.paddingTop, 10) || 0, g = Number.parseInt(d.paddingBottom, 10) || 0;
    return {
      left: b,
      right: y,
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
    handleCellMouseEnter: (h3, d, b) => {
      var y;
      const C = t, g = Fo(h3), w = (y = C == null ? void 0 : C.vnode.el) == null ? void 0 : y.dataset.prefix;
      if (g) {
        const H = Qi({
          columns: e.store.states.columns.value
        }, g, w), K = C.hoverState = { cell: g, column: H, row: d };
        C == null || C.emit("cell-mouse-enter", K.row, K.column, K.cell, h3);
      }
      if (!b)
        return;
      const k = h3.target.querySelector(".cell");
      if (!(ca(k, `${w}-tooltip`) && k.childNodes.length))
        return;
      const S = document.createRange();
      S.setStart(k, 0), S.setEnd(k, k.childNodes.length);
      const _ = Math.round(S.getBoundingClientRect().width), P = Math.round(S.getBoundingClientRect().height), { top: A, left: B, right: z, bottom: I } = p(k), N = B + z, L = A + I;
      (_ + N > k.offsetWidth || P + L > k.offsetHeight || k.scrollWidth > k.offsetWidth) && vE(t == null ? void 0 : t.refs.tableWrapper, g, g.innerText || g.textContent, r, b);
    },
    handleCellMouseLeave: (h3) => {
      if (!Fo(h3))
        return;
      const b = t == null ? void 0 : t.hoverState;
      t == null || t.emit("cell-mouse-leave", b == null ? void 0 : b.row, b == null ? void 0 : b.column, b == null ? void 0 : b.cell, h3);
    },
    tooltipContent: n,
    tooltipTrigger: a
  };
}
function IE(e) {
  const t = inject(pn), n = ye("table");
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
      const v = t == null ? void 0 : t.props.cellStyle;
      let h3 = v ?? {};
      typeof v == "function" && (h3 = v.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: p,
        column: m
      }));
      const d = ss(f, e == null ? void 0 : e.fixed, e.store);
      return Ta(d, "left"), Ta(d, "right"), Object.assign({}, h3, d);
    },
    getCellClass: (c, f, p, m, v) => {
      const h3 = ls(n.b(), f, e == null ? void 0 : e.fixed, e.store, void 0, v), d = [m.id, m.align, m.className, ...h3], b = t == null ? void 0 : t.props.cellClassName;
      return typeof b == "string" ? d.push(b) : typeof b == "function" && d.push(b.call(null, {
        rowIndex: c,
        columnIndex: f,
        row: p,
        column: m
      })), d.push(n.e("cell")), d.filter((y) => !!y).join(" ");
    },
    getSpan: (c, f, p, m) => {
      let v = 1, h3 = 1;
      const d = t == null ? void 0 : t.props.spanMethod;
      if (typeof d == "function") {
        const b = d({
          row: c,
          column: f,
          rowIndex: p,
          columnIndex: m
        });
        Array.isArray(b) ? (v = b[0], h3 = b[1]) : typeof b == "object" && (v = b.rowspan, h3 = b.colspan);
      }
      return { rowspan: v, colspan: h3 };
    },
    getColspanRealWidth: (c, f, p) => {
      if (f < 1)
        return c[p].realWidth;
      const m = c.map(({ realWidth: v, width: h3 }) => v || h3).slice(p, p + f);
      return Number(m.reduce((v, h3) => Number(v) + Number(h3), -1));
    }
  };
}
function DE(e) {
  const t = inject(pn), n = ye("table"), {
    handleDoubleClick: a,
    handleClick: r,
    handleContextMenu: o,
    handleMouseEnter: l,
    handleMouseLeave: s,
    handleCellMouseEnter: u,
    handleCellMouseLeave: c,
    tooltipContent: f,
    tooltipTrigger: p
  } = FE(e), {
    getRowStyle: m,
    getRowClass: v,
    getCellStyle: h3,
    getCellClass: d,
    getSpan: b,
    getColspanRealWidth: y
  } = IE(e), C = computed(() => e.store.states.columns.value.findIndex(({ type: _ }) => _ === "default")), g = (_, P) => {
    const A = t.props.rowKey;
    return A ? kt(_, A) : P;
  }, w = (_, P, A, B = false) => {
    const { tooltipEffect: z, tooltipOptions: I, store: N } = e, { indent: L, columns: H } = N.states, K = v(_, P);
    let M = true;
    return A && (K.push(n.em("row", `level-${A.level}`)), M = A.display), h("tr", {
      style: [M ? null : {
        display: "none"
      }, m(_, P)],
      class: K,
      key: g(_, P),
      onDblclick: (E) => a(E, _),
      onClick: (E) => r(E, _),
      onContextmenu: (E) => o(E, _),
      onMouseenter: () => l(P),
      onMouseleave: s
    }, H.value.map((E, V) => {
      const { rowspan: G, colspan: F } = b(_, E, P, V);
      if (!G || !F)
        return null;
      const X = { ...E };
      X.realWidth = y(H.value, F, V);
      const ne = {
        store: e.store,
        _self: e.context || t,
        column: X,
        row: _,
        $index: P,
        cellIndex: V,
        expanded: B
      };
      V === C.value && A && (ne.treeNode = {
        indent: A.level * L.value,
        level: A.level
      }, typeof A.expanded == "boolean" && (ne.treeNode.expanded = A.expanded, "loading" in A && (ne.treeNode.loading = A.loading), "noLazyChildren" in A && (ne.treeNode.noLazyChildren = A.noLazyChildren)));
      const me = `${P},${V}`, ge = X.columnKey || X.rawColumnKey || "", se = k(V, E, ne), le = E.showOverflowTooltip && Xu({
        effect: z
      }, I, E.showOverflowTooltip);
      return h("td", {
        style: h3(P, V, _, E),
        class: d(P, V, _, E, F - 1),
        key: `${ge}${me}`,
        rowspan: G,
        colspan: F,
        onMouseenter: (ce) => u(ce, _, le),
        onMouseleave: c
      }, [se]);
    }));
  }, k = (_, P, A) => P.renderCell(A);
  return {
    wrappedRowRender: (_, P) => {
      const A = e.store, { isRowExpanded: B, assertRowKey: z } = A, { treeData: I, lazyTreeNodeMap: N, childrenColumnName: L, rowKey: H } = A.states, K = A.states.columns.value;
      if (K.some(({ type: W }) => W === "expand")) {
        const W = B(_), E = w(_, P, void 0, W), V = t.renderExpanded;
        return W ? V ? [
          [
            E,
            h("tr", {
              key: `expanded-row__${E.key}`
            }, [
              h("td", {
                colspan: K.length,
                class: `${n.e("cell")} ${n.e("expanded-cell")}`
              }, [V({ row: _, $index: P, store: A, expanded: W })])
            ])
          ]
        ] : (console.error("[Element Error]renderExpanded is required."), E) : [[E]];
      } else if (Object.keys(I.value).length) {
        z();
        const W = kt(_, H.value);
        let E = I.value[W], V = null;
        E && (V = {
          expanded: E.expanded,
          level: E.level,
          display: true
        }, typeof E.lazy == "boolean" && (typeof E.loaded == "boolean" && E.loaded && (V.noLazyChildren = !(E.children && E.children.length)), V.loading = E.loading));
        const G = [w(_, P, V)];
        if (E) {
          let F = 0;
          const X = (me, ge) => {
            me && me.length && ge && me.forEach((se) => {
              const le = {
                display: ge.display && ge.expanded,
                level: ge.level + 1,
                expanded: false,
                noLazyChildren: false,
                loading: false
              }, ce = kt(se, H.value);
              if (ce == null)
                throw new Error("For nested data item, row-key is required.");
              if (E = { ...I.value[ce] }, E && (le.expanded = E.expanded, E.level = E.level || le.level, E.display = !!(E.expanded && le.display), typeof E.lazy == "boolean" && (typeof E.loaded == "boolean" && E.loaded && (le.noLazyChildren = !(E.children && E.children.length)), le.loading = E.loading)), F++, G.push(w(se, P + F, le)), E) {
                const he = N.value[ce] || se[L.value];
                X(he, E);
              }
            });
          };
          E.display = true;
          const ne = N.value[W] || _[L.value];
          X(ne, E);
        }
        return G;
      } else
        return w(_, P, void 0);
    },
    tooltipContent: f,
    tooltipTrigger: p
  };
}
var BE = {
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
var zE = defineComponent({
  name: "ElTableBody",
  props: BE,
  setup(e) {
    const t = getCurrentInstance(), n = inject(pn), a = ye("table"), { wrappedRowRender: r, tooltipContent: o, tooltipTrigger: l } = DE(e), { onColumnsChange: s, onScrollableChange: u } = Ld(n);
    return watch(e.store.states.hoverRow, (c, f) => {
      if (!e.store.states.isComplex.value || !at)
        return;
      let p = window.requestAnimationFrame;
      p || (p = (m) => window.setTimeout(m, 16)), p(() => {
        const m = t == null ? void 0 : t.vnode.el, v = Array.from((m == null ? void 0 : m.children) || []).filter((b) => b == null ? void 0 : b.classList.contains(`${a.e("row")}`)), h3 = v[f], d = v[c];
        h3 && Yo(h3, "hover-row"), d && ec(d, "hover-row");
      });
    }), onUnmounted(() => {
      var c;
      (c = gn) == null || c();
    }), {
      ns: a,
      onColumnsChange: s,
      onScrollableChange: u,
      wrappedRowRender: r,
      tooltipContent: o,
      tooltipTrigger: l
    };
  },
  render() {
    const { wrappedRowRender: e, store: t } = this, n = t.states.data.value || [];
    return h("tbody", {}, [
      n.reduce((a, r) => a.concat(e(r, a.length)), [])
    ]);
  }
});
function is(e) {
  const t = e.tableLayout === "auto";
  let n = e.columns || [];
  t && n.every((r) => r.width === void 0) && (n = []);
  const a = (r) => {
    const o = {
      key: `${e.tableLayout}_${r.id}`,
      style: {},
      name: void 0
    };
    return t ? o.style = {
      width: `${r.width}px`
    } : o.name = r.id, o;
  };
  return h("colgroup", {}, n.map((r) => h("col", a(r))));
}
is.props = ["columns", "tableLayout"];
function VE() {
  const e = inject(pn), t = e == null ? void 0 : e.store, n = computed(() => t.states.fixedLeafColumnsLength.value), a = computed(() => t.states.rightFixedColumns.value.length), r = computed(() => t.states.columns.value.length), o = computed(() => t.states.fixedColumns.value.length), l = computed(() => t.states.rightFixedColumns.value.length);
  return {
    leftFixedLeafCount: n,
    rightFixedLeafCount: a,
    columnsCount: r,
    leftFixedCount: o,
    rightFixedCount: l,
    columns: t.states.columns
  };
}
function HE(e) {
  const { columns: t } = VE(), n = ye("table");
  return {
    getCellClasses: (o, l) => {
      const s = o[l], u = [
        n.e("cell"),
        s.id,
        s.align,
        s.labelClassName,
        ...ls(n.b(), l, s.fixed, e.store)
      ];
      return s.className && u.push(s.className), s.children || u.push(n.is("leaf")), u;
    },
    getCellStyles: (o, l) => {
      const s = ss(l, o.fixed, e.store);
      return Ta(s, "left"), Ta(s, "right"), s;
    },
    columns: t
  };
}
var WE = defineComponent({
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
    const { getCellClasses: t, getCellStyles: n, columns: a } = HE(e);
    return {
      ns: ye("table"),
      getCellClasses: t,
      getCellStyles: n,
      columns: a
    };
  },
  render() {
    const {
      columns: e,
      getCellStyles: t,
      getCellClasses: n,
      summaryMethod: a,
      sumText: r,
      ns: o
    } = this, l = this.store.states.data.value;
    let s = [];
    return a ? s = a({
      columns: e,
      data: l
    }) : e.forEach((u, c) => {
      if (c === 0) {
        s[c] = r;
        return;
      }
      const f = l.map((h3) => Number(h3[u.property])), p = [];
      let m = true;
      f.forEach((h3) => {
        if (!Number.isNaN(+h3)) {
          m = false;
          const d = `${h3}`.split(".")[1];
          p.push(d ? d.length : 0);
        }
      });
      const v = Math.max.apply(null, p);
      m ? s[c] = "" : s[c] = f.reduce((h3, d) => {
        const b = Number(d);
        return Number.isNaN(+b) ? h3 : Number.parseFloat((h3 + d).toFixed(Math.min(v, 20)));
      }, 0);
    }), h("table", {
      class: o.e("footer"),
      cellspacing: "0",
      cellpadding: "0",
      border: "0"
    }, [
      is({
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
function jE(e) {
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
function KE(e, t, n, a) {
  const r = ref(false), o = ref(null), l = ref(false), s = (E) => {
    l.value = E;
  }, u = ref({
    width: null,
    height: null,
    headerHeight: null
  }), c = ref(false), f = {
    display: "inline-block",
    verticalAlign: "middle"
  }, p = ref(), m = ref(0), v = ref(0), h3 = ref(0), d = ref(0), b = ref(0);
  watchEffect(() => {
    t.setHeight(e.height);
  }), watchEffect(() => {
    t.setMaxHeight(e.maxHeight);
  }), watch(() => [e.currentRowKey, n.states.rowKey], ([E, V]) => {
    !unref(V) || !unref(E) || n.setCurrentRowKey(`${E}`);
  }, {
    immediate: true
  }), watch(() => e.data, (E) => {
    a.store.commit("setData", E);
  }, {
    immediate: true,
    deep: true
  }), watchEffect(() => {
    e.expandRowKeys && n.setExpandRowKeysAdapter(e.expandRowKeys);
  });
  const y = () => {
    a.store.commit("setHoverRow", null), a.hoverState && (a.hoverState = null);
  }, C = (E, V) => {
    const { pixelX: G, pixelY: F } = V;
    Math.abs(G) >= Math.abs(F) && (a.refs.bodyWrapper.scrollLeft += V.pixelX / 5);
  }, g = computed(() => e.height || e.maxHeight || n.states.fixedColumns.value.length > 0 || n.states.rightFixedColumns.value.length > 0), w = computed(() => ({
    width: t.bodyWidth.value ? `${t.bodyWidth.value}px` : ""
  })), k = () => {
    g.value && t.updateElsHeight(), t.updateColumnsWidth(), requestAnimationFrame(A);
  };
  onMounted(async () => {
    await nextTick(), n.updateColumns(), B(), requestAnimationFrame(k);
    const E = a.vnode.el, V = a.refs.headerWrapper;
    e.flexible && E && E.parentElement && (E.parentElement.style.minWidth = "0"), u.value = {
      width: p.value = E.offsetWidth,
      height: E.offsetHeight,
      headerHeight: e.showHeader && V ? V.offsetHeight : null
    }, n.states.columns.value.forEach((G) => {
      G.filteredValue && G.filteredValue.length && a.store.commit("filterChange", {
        column: G,
        values: G.filteredValue,
        silent: true
      });
    }), a.$ready = true;
  });
  const S = (E, V) => {
    if (!E)
      return;
    const G = Array.from(E.classList).filter((F) => !F.startsWith("is-scrolling-"));
    G.push(t.scrollX.value ? V : "is-scrolling-none"), E.className = G.join(" ");
  }, _ = (E) => {
    const { tableWrapper: V } = a.refs;
    S(V, E);
  }, P = (E) => {
    const { tableWrapper: V } = a.refs;
    return !!(V && V.classList.contains(E));
  }, A = function() {
    if (!a.refs.scrollBarRef)
      return;
    if (!t.scrollX.value) {
      const ge = "is-scrolling-none";
      P(ge) || _(ge);
      return;
    }
    const E = a.refs.scrollBarRef.wrapRef;
    if (!E)
      return;
    const { scrollLeft: V, offsetWidth: G, scrollWidth: F } = E, { headerWrapper: X, footerWrapper: ne } = a.refs;
    X && (X.scrollLeft = V), ne && (ne.scrollLeft = V);
    const me = F - G - 1;
    V >= me ? _("is-scrolling-right") : _(V === 0 ? "is-scrolling-left" : "is-scrolling-middle");
  }, B = () => {
    a.refs.scrollBarRef && (a.refs.scrollBarRef.wrapRef && jt(a.refs.scrollBarRef.wrapRef, "scroll", A, {
      passive: true
    }), e.fit ? ln(a.vnode.el, z) : jt(window, "resize", z), ln(a.refs.bodyWrapper, () => {
      var E, V;
      z(), (V = (E = a.refs) == null ? void 0 : E.scrollBarRef) == null || V.update();
    }));
  }, z = () => {
    var E, V, G, F;
    const X = a.vnode.el;
    if (!a.$ready || !X)
      return;
    let ne = false;
    const {
      width: me,
      height: ge,
      headerHeight: se
    } = u.value, le = p.value = X.offsetWidth;
    me !== le && (ne = true);
    const ce = X.offsetHeight;
    (e.height || g.value) && ge !== ce && (ne = true);
    const he = e.tableLayout === "fixed" ? a.refs.headerWrapper : (E = a.refs.tableHeaderRef) == null ? void 0 : E.$el;
    e.showHeader && (he == null ? void 0 : he.offsetHeight) !== se && (ne = true), m.value = ((V = a.refs.tableWrapper) == null ? void 0 : V.scrollHeight) || 0, h3.value = (he == null ? void 0 : he.scrollHeight) || 0, d.value = ((G = a.refs.footerWrapper) == null ? void 0 : G.offsetHeight) || 0, b.value = ((F = a.refs.appendWrapper) == null ? void 0 : F.offsetHeight) || 0, v.value = m.value - h3.value - d.value - b.value, ne && (u.value = {
      width: le,
      height: ce,
      headerHeight: e.showHeader && (he == null ? void 0 : he.offsetHeight) || 0
    }, k());
  }, I = Gt(), N = computed(() => {
    const { bodyWidth: E, scrollY: V, gutterWidth: G } = t;
    return E.value ? `${E.value - (V.value ? G : 0)}px` : "";
  }), L = computed(() => e.maxHeight ? "fixed" : e.tableLayout), H = computed(() => {
    if (e.data && e.data.length)
      return null;
    let E = "100%";
    e.height && v.value && (E = `${v.value}px`);
    const V = p.value;
    return {
      width: V ? `${V}px` : "",
      height: E
    };
  }), K = computed(() => e.height ? {
    height: Number.isNaN(Number(e.height)) ? e.height : `${e.height}px`
  } : e.maxHeight ? {
    maxHeight: Number.isNaN(Number(e.maxHeight)) ? e.maxHeight : `${e.maxHeight}px`
  } : {}), M = computed(() => e.height ? {
    height: "100%"
  } : e.maxHeight ? Number.isNaN(Number(e.maxHeight)) ? {
    maxHeight: `calc(${e.maxHeight} - ${h3.value + d.value}px)`
  } : {
    maxHeight: `${e.maxHeight - h3.value - d.value}px`
  } : {});
  return {
    isHidden: r,
    renderExpanded: o,
    setDragVisible: s,
    isGroup: c,
    handleMouseLeave: y,
    handleHeaderFooterMousewheel: C,
    tableSize: I,
    emptyBlockStyle: H,
    handleFixedMousewheel: (E, V) => {
      const G = a.refs.bodyWrapper;
      if (Math.abs(V.spinY) > 0) {
        const F = G.scrollTop;
        V.pixelY < 0 && F !== 0 && E.preventDefault(), V.pixelY > 0 && G.scrollHeight - G.clientHeight > F && E.preventDefault(), G.scrollTop += Math.ceil(V.pixelY / 5);
      } else
        G.scrollLeft += Math.ceil(V.pixelX / 5);
    },
    resizeProxyVisible: l,
    bodyWidth: N,
    resizeState: u,
    doLayout: k,
    tableBodyStyles: w,
    tableLayout: L,
    scrollbarViewStyle: f,
    tableInnerStyle: K,
    scrollbarStyle: M
  };
}
function qE(e) {
  const t = ref(), n = () => {
    const r = e.vnode.el.querySelector(".hidden-columns"), o = { childList: true, subtree: true }, l = e.store.states.updateOrderFns;
    t.value = new MutationObserver(() => {
      l.forEach((s) => s());
    }), t.value.observe(r, o);
  };
  onMounted(() => {
    n();
  }), onUnmounted(() => {
    var a;
    (a = t.value) == null || a.disconnect();
  });
}
var YE = {
  data: {
    type: Array,
    default: () => []
  },
  size: xn,
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
var UE = () => {
  const e = ref(), t = (o, l) => {
    const s = e.value;
    s && s.scrollTo(o, l);
  }, n = (o, l) => {
    const s = e.value;
    s && ot(l) && ["Top", "Left"].includes(o) && s[`setScroll${o}`](l);
  };
  return {
    scrollBarRef: e,
    scrollTo: t,
    setScrollTop: (o) => n("Top", o),
    setScrollLeft: (o) => n("Left", o)
  };
};
var GE = 1;
var XE = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel: CS
  },
  components: {
    TableHeader: LE,
    TableBody: zE,
    TableFooter: WE,
    ElScrollbar: Ma,
    hColgroup: is
  },
  props: YE,
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
    const { t } = st(), n = ye("table"), a = getCurrentInstance();
    provide(pn, a);
    const r = CE(a, e);
    a.store = r;
    const o = new kE({
      store: a.store,
      table: a,
      fit: e.fit,
      showHeader: e.showHeader
    });
    a.layout = o;
    const l = computed(() => (r.states.data.value || []).length === 0), {
      setCurrentRow: s,
      getSelectionRows: u,
      toggleRowSelection: c,
      clearSelection: f,
      clearFilter: p,
      toggleAllSelection: m,
      toggleRowExpansion: v,
      clearSort: h3,
      sort: d
    } = jE(r), {
      isHidden: b,
      renderExpanded: y,
      setDragVisible: C,
      isGroup: g,
      handleMouseLeave: w,
      handleHeaderFooterMousewheel: k,
      tableSize: S,
      emptyBlockStyle: _,
      handleFixedMousewheel: P,
      resizeProxyVisible: A,
      bodyWidth: B,
      resizeState: z,
      doLayout: I,
      tableBodyStyles: N,
      tableLayout: L,
      scrollbarViewStyle: H,
      tableInnerStyle: K,
      scrollbarStyle: M
    } = KE(e, o, r, a), { scrollBarRef: W, scrollTo: E, setScrollLeft: V, setScrollTop: G } = UE(), F = Dn(I, 50), X = `${n.namespace.value}-table_${GE++}`;
    a.tableId = X, a.state = {
      isGroup: g,
      resizeState: z,
      doLayout: I,
      debouncedUpdateLayout: F
    };
    const ne = computed(() => e.sumText || t("el.table.sumText")), me = computed(() => e.emptyText || t("el.table.emptyText"));
    return qE(a), {
      ns: n,
      layout: o,
      store: r,
      handleHeaderFooterMousewheel: k,
      handleMouseLeave: w,
      tableId: X,
      tableSize: S,
      isHidden: b,
      isEmpty: l,
      renderExpanded: y,
      resizeProxyVisible: A,
      resizeState: z,
      isGroup: g,
      bodyWidth: B,
      tableBodyStyles: N,
      emptyBlockStyle: _,
      debouncedUpdateLayout: F,
      handleFixedMousewheel: P,
      setCurrentRow: s,
      getSelectionRows: u,
      toggleRowSelection: c,
      clearSelection: f,
      clearFilter: p,
      toggleAllSelection: m,
      toggleRowExpansion: v,
      clearSort: h3,
      doLayout: I,
      sort: d,
      t,
      setDragVisible: C,
      context: a,
      computedSumText: ne,
      computedEmptyText: me,
      tableLayout: L,
      scrollbarViewStyle: H,
      tableInnerStyle: K,
      scrollbarStyle: M,
      scrollBarRef: W,
      scrollTo: E,
      setScrollLeft: V,
      setScrollTop: G
    };
  }
});
var ZE = ["data-prefix"];
var JE = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function QE(e, t, n, a, r, o) {
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
      createBaseVNode("div", JE, [
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
  ], 46, ZE);
}
var eT = xe(XE, [["render", QE], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
var tT = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
var nT = {
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
var aT = (e) => tT[e] || "";
var rT = {
  selection: {
    renderHeader({ store: e }) {
      function t() {
        return e.states.data.value && e.states.data.value.length === 0;
      }
      return h(ea, {
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
      $index: a
    }) {
      return h(ea, {
        disabled: t.selectable ? !t.selectable.call(null, e, a) : false,
        size: n.states.tableSize.value,
        onChange: () => {
          n.commit("rowSelectedChanged", e);
        },
        onClick: (r) => r.stopPropagation(),
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
      const a = e.index;
      return typeof a == "number" ? n = t + a : typeof a == "function" && (n = a(t)), h("div", {}, [n]);
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
      const { ns: a } = t, r = [a.e("expand-icon")];
      return n && r.push(a.em("expand-icon", "expanded")), h("div", {
        class: r,
        onClick: function(l) {
          l.stopPropagation(), t.toggleRowExpansion(e);
        }
      }, {
        default: () => [
          h(Re, null, {
            default: () => [h(Cn)]
          })
        ]
      });
    },
    sortable: false,
    resizable: false
  }
};
function oT({
  row: e,
  column: t,
  $index: n
}) {
  var a;
  const r = t.property, o = r && Ar(e, r).value;
  return t && t.formatter ? t.formatter(e, t, o, n) : ((a = o == null ? void 0 : o.toString) == null ? void 0 : a.call(o)) || "";
}
function lT({
  row: e,
  treeNode: t,
  store: n
}, a = false) {
  const { ns: r } = n;
  if (!t)
    return a ? [
      h("span", {
        class: r.e("placeholder")
      })
    ] : null;
  const o = [], l = function(s) {
    s.stopPropagation(), !t.loading && n.loadOrToggle(e);
  };
  if (t.indent && o.push(h("span", {
    class: r.e("indent"),
    style: { "padding-left": `${t.indent}px` }
  })), typeof t.expanded == "boolean" && !t.noLazyChildren) {
    const s = [
      r.e("expand-icon"),
      t.expanded ? r.em("expand-icon", "expanded") : ""
    ];
    let u = Cn;
    t.loading && (u = dr), o.push(h("div", {
      class: s,
      onClick: l
    }, {
      default: () => [
        h(Re, { class: { [r.is("loading")]: t.loading } }, {
          default: () => [h(u)]
        })
      ]
    }));
  } else
    o.push(h("span", {
      class: r.e("placeholder")
    }));
  return o;
}
function nu(e, t) {
  return e.reduce((n, a) => (n[a] = a, n), t);
}
function sT(e, t) {
  const n = getCurrentInstance();
  return {
    registerComplexWatchers: () => {
      const o = ["fixed"], l = {
        realWidth: "width",
        realMinWidth: "minWidth"
      }, s = nu(o, l);
      Object.keys(s).forEach((u) => {
        const c = l[u];
        Xn(t, c) && watch(() => t[c], (f) => {
          let p = f;
          c === "width" && u === "realWidth" && (p = os(f)), c === "minWidth" && u === "realMinWidth" && (p = xd(f)), n.columnConfig.value[c] = p, n.columnConfig.value[u] = p;
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
      }, s = nu(o, l);
      Object.keys(s).forEach((u) => {
        const c = l[u];
        Xn(t, c) && watch(() => t[c], (f) => {
          n.columnConfig.value[u] = f;
        });
      });
    }
  };
}
function iT(e, t, n) {
  const a = getCurrentInstance(), r = ref(""), o = ref(false), l = ref(), s = ref(), u = ye("table");
  watchEffect(() => {
    l.value = e.align ? `is-${e.align}` : null, l.value;
  }), watchEffect(() => {
    s.value = e.headerAlign ? `is-${e.headerAlign}` : l.value, s.value;
  });
  const c = computed(() => {
    let w = a.vnode.vParent || a.parent;
    for (; w && !w.tableId && !w.columnId; )
      w = w.vnode.vParent || w.parent;
    return w;
  }), f = computed(() => {
    const { store: w } = a.parent;
    if (!w)
      return false;
    const { treeData: k } = w.states, S = k.value;
    return S && Object.keys(S).length > 0;
  }), p = ref(os(e.width)), m = ref(xd(e.minWidth)), v = (w) => (p.value && (w.width = p.value), m.value && (w.minWidth = m.value), !p.value && m.value && (w.width = void 0), w.minWidth || (w.minWidth = 80), w.realWidth = Number(w.width === void 0 ? w.minWidth : w.width), w), h3 = (w) => {
    const k = w.type, S = rT[k] || {};
    Object.keys(S).forEach((P) => {
      const A = S[P];
      P !== "className" && A !== void 0 && (w[P] = A);
    });
    const _ = aT(k);
    if (_) {
      const P = `${unref(u.namespace)}-${_}`;
      w.className = w.className ? `${w.className} ${P}` : P;
    }
    return w;
  }, d = (w) => {
    Array.isArray(w) ? w.forEach((S) => k(S)) : k(w);
    function k(S) {
      var _;
      ((_ = S == null ? void 0 : S.type) == null ? void 0 : _.name) === "ElTableColumn" && (S.vParent = a);
    }
  };
  return {
    columnId: r,
    realAlign: l,
    isSubColumn: o,
    realHeaderAlign: s,
    columnOrTableParent: c,
    setColumnWidth: v,
    setColumnForcedProps: h3,
    setColumnRenders: (w) => {
      e.renderHeader ? nt("TableColumn", "Comparing to render-header, scoped-slot header is easier to use. We recommend users to use scoped-slot header.") : w.type !== "selection" && (w.renderHeader = (S) => {
        a.columnConfig.value.label;
        const _ = t.header;
        return _ ? _(S) : w.label;
      });
      let k = w.renderCell;
      return w.type === "expand" ? (w.renderCell = (S) => h("div", {
        class: "cell"
      }, [k(S)]), n.value.renderExpanded = (S) => t.default ? t.default(S) : t.default) : (k = k || oT, w.renderCell = (S) => {
        let _ = null;
        if (t.default) {
          const N = t.default(S);
          _ = N.some((L) => L.type !== Comment) ? N : k(S);
        } else
          _ = k(S);
        const { columns: P } = n.value.store.states, A = P.value.findIndex((N) => N.type === "default"), B = f.value && S.cellIndex === A, z = lT(S, B), I = {
          class: "cell",
          style: {}
        };
        return w.showOverflowTooltip && (I.class = `${I.class} ${unref(u.namespace)}-tooltip`, I.style = {
          width: `${(S.column.realWidth || Number(S.column.width)) - 1}px`
        }), d(_), h("div", I, [z, _]);
      }), w;
    },
    getPropsData: (...w) => w.reduce((k, S) => (Array.isArray(S) && S.forEach((_) => {
      k[_] = e[_];
    }), k), {}),
    getColumnElIndex: (w, k) => Array.prototype.indexOf.call(w, k),
    updateColumnOrder: () => {
      n.value.store.commit("updateColumnOrder", a.columnConfig.value);
    }
  };
}
var uT = {
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
var cT = 1;
var Id = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox: ea
  },
  props: uT,
  setup(e, { slots: t }) {
    const n = getCurrentInstance(), a = ref({}), r = computed(() => {
      let g = n.parent;
      for (; g && !g.tableId; )
        g = g.parent;
      return g;
    }), { registerNormalWatchers: o, registerComplexWatchers: l } = sT(r, e), {
      columnId: s,
      isSubColumn: u,
      realHeaderAlign: c,
      columnOrTableParent: f,
      setColumnWidth: p,
      setColumnForcedProps: m,
      setColumnRenders: v,
      getPropsData: h3,
      getColumnElIndex: d,
      realAlign: b,
      updateColumnOrder: y
    } = iT(e, t, r), C = f.value;
    s.value = `${C.tableId || C.columnId}_column_${cT++}`, onBeforeMount(() => {
      u.value = r.value !== C;
      const g = e.type || "default", w = e.sortable === "" ? true : e.sortable, k = $n(e.showOverflowTooltip) ? C.props.showOverflowTooltip : e.showOverflowTooltip, S = {
        ...nT[g],
        id: s.value,
        type: g,
        property: e.prop || e.property,
        align: b,
        headerAlign: c,
        showOverflowTooltip: k,
        filterable: e.filters || e.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        isColumnGroup: false,
        isSubColumn: false,
        filterOpened: false,
        sortable: w,
        index: e.index,
        rawColumnKey: n.vnode.key
      };
      let z = h3([
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
      z = cE(S, z), z = fE(v, p, m)(z), a.value = z, o(), l();
    }), onMounted(() => {
      var g;
      const w = f.value, k = u.value ? w.vnode.el.children : (g = w.refs.hiddenColumns) == null ? void 0 : g.children, S = () => d(k || [], n.vnode.el);
      a.value.getColumnIndex = S, S() > -1 && r.value.store.commit("insertColumn", a.value, u.value ? w.columnConfig.value : null, y);
    }), onBeforeUnmount(() => {
      r.value.store.commit("removeColumn", a.value, u.value ? C.columnConfig.value : null, y);
    }), n.columnId = s.value, n.columnConfig = a;
  },
  render() {
    var e, t, n;
    try {
      const a = (t = (e = this.$slots).default) == null ? void 0 : t.call(e, {
        row: {},
        column: {},
        $index: -1
      }), r = [];
      if (Array.isArray(a))
        for (const l of a)
          ((n = l.type) == null ? void 0 : n.name) === "ElTableColumn" || l.shapeFlag & 2 ? r.push(l) : l.type === Fragment && Array.isArray(l.children) && l.children.forEach((s) => {
            (s == null ? void 0 : s.patchFlag) !== 1024 && !St(s == null ? void 0 : s.children) && r.push(s);
          });
      return h("div", r);
    } catch {
      return h("div", []);
    }
  }
});
var dT = Lt(eT, {
  TableColumn: Id
});
var Dd = dn(Id);
var yo = Symbol("tabsRootContextKey");
var fT = Pe({
  tabs: {
    type: be(Array),
    default: () => fr([])
  }
});
var Bd = "ElTabBar";
var pT = defineComponent({
  name: Bd
});
var vT = defineComponent({
  ...pT,
  props: fT,
  setup(e, { expose: t }) {
    const n = e, a = getCurrentInstance(), r = inject(yo);
    r || Pa(Bd, "<el-tabs><el-tab-bar /></el-tabs>");
    const o = ye("tabs"), l = ref(), s = ref(), u = () => {
      let f = 0, p = 0;
      const m = ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height", v = m === "width" ? "x" : "y", h3 = v === "x" ? "left" : "top";
      return n.tabs.every((d) => {
        var b, y;
        const C = (y = (b = a.parent) == null ? void 0 : b.refs) == null ? void 0 : y[`tab-${d.uid}`];
        if (!C)
          return false;
        if (!d.active)
          return true;
        f = C[`offset${nn(h3)}`], p = C[`client${nn(m)}`];
        const g = window.getComputedStyle(C);
        return m === "width" && (n.tabs.length > 1 && (p -= Number.parseFloat(g.paddingLeft) + Number.parseFloat(g.paddingRight)), f += Number.parseFloat(g.paddingLeft)), false;
      }), {
        [m]: `${p}px`,
        transform: `translate${nn(v)}(${f}px)`
      };
    }, c = () => s.value = u();
    return watch(() => n.tabs, async () => {
      await nextTick(), c();
    }, { immediate: true }), ln(l, () => c()), t({
      ref: l,
      update: c
    }), (f, p) => (openBlock(), createElementBlock("div", {
      ref_key: "barRef",
      ref: l,
      class: normalizeClass([unref(o).e("active-bar"), unref(o).is(unref(r).props.tabPosition)]),
      style: normalizeStyle(s.value)
    }, null, 6));
  }
});
var hT = xe(vT, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);
var mT = Pe({
  panes: {
    type: be(Array),
    default: () => fr([])
  },
  currentName: {
    type: [String, Number],
    default: ""
  },
  editable: Boolean,
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  stretch: Boolean
});
var gT = {
  tabClick: (e, t, n) => n instanceof Event,
  tabRemove: (e, t) => t instanceof Event
};
var au = "ElTabNav";
var bT = defineComponent({
  name: au,
  props: mT,
  emits: gT,
  setup(e, {
    expose: t,
    emit: n
  }) {
    const a = getCurrentInstance(), r = inject(yo);
    r || Pa(au, "<el-tabs><tab-nav /></el-tabs>");
    const o = ye("tabs"), l = bf(), s = Tf(), u = ref(), c = ref(), f = ref(), p = ref(), m = ref(false), v = ref(0), h3 = ref(false), d = ref(true), b = computed(() => ["top", "bottom"].includes(r.props.tabPosition) ? "width" : "height"), y = computed(() => ({
      transform: `translate${b.value === "width" ? "X" : "Y"}(-${v.value}px)`
    })), C = () => {
      if (!u.value)
        return;
      const A = u.value[`offset${nn(b.value)}`], B = v.value;
      if (!B)
        return;
      const z = B > A ? B - A : 0;
      v.value = z;
    }, g = () => {
      if (!u.value || !c.value)
        return;
      const A = c.value[`offset${nn(b.value)}`], B = u.value[`offset${nn(b.value)}`], z = v.value;
      if (A - z <= B)
        return;
      const I = A - z > B * 2 ? z + B : A - B;
      v.value = I;
    }, w = async () => {
      const A = c.value;
      if (!m.value || !f.value || !u.value || !A)
        return;
      await nextTick();
      const B = f.value.querySelector(".is-active");
      if (!B)
        return;
      const z = u.value, I = ["top", "bottom"].includes(r.props.tabPosition), N = B.getBoundingClientRect(), L = z.getBoundingClientRect(), H = I ? A.offsetWidth - L.width : A.offsetHeight - L.height, K = v.value;
      let M = K;
      I ? (N.left < L.left && (M = K - (L.left - N.left)), N.right > L.right && (M = K + N.right - L.right)) : (N.top < L.top && (M = K - (L.top - N.top)), N.bottom > L.bottom && (M = K + (N.bottom - L.bottom))), M = Math.max(M, 0), v.value = Math.min(M, H);
    }, k = () => {
      var A;
      if (!c.value || !u.value)
        return;
      e.stretch && ((A = p.value) == null || A.update());
      const B = c.value[`offset${nn(b.value)}`], z = u.value[`offset${nn(b.value)}`], I = v.value;
      z < B ? (m.value = m.value || {}, m.value.prev = I, m.value.next = I + z < B, B - I < z && (v.value = B - z)) : (m.value = false, I > 0 && (v.value = 0));
    }, S = (A) => {
      const B = A.code, {
        up: z,
        down: I,
        left: N,
        right: L
      } = Fe;
      if (![z, I, N, L].includes(B))
        return;
      const H = Array.from(A.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")), K = H.indexOf(A.target);
      let M;
      B === N || B === z ? K === 0 ? M = H.length - 1 : M = K - 1 : K < H.length - 1 ? M = K + 1 : M = 0, H[M].focus({
        preventScroll: true
      }), H[M].click(), _();
    }, _ = () => {
      d.value && (h3.value = true);
    }, P = () => h3.value = false;
    return watch(l, (A) => {
      A === "hidden" ? d.value = false : A === "visible" && setTimeout(() => d.value = true, 50);
    }), watch(s, (A) => {
      A ? setTimeout(() => d.value = true, 50) : d.value = false;
    }), ln(f, k), onMounted(() => setTimeout(() => w(), 0)), onUpdated(() => k()), t({
      scrollToActiveTab: w,
      removeFocus: P
    }), watch(() => e.panes, () => a.update(), {
      flush: "post",
      deep: true
    }), () => {
      const A = m.value ? [createVNode("span", {
        class: [o.e("nav-prev"), o.is("disabled", !m.value.prev)],
        onClick: C
      }, [createVNode(Re, null, {
        default: () => [createVNode(Za, null, null)]
      })]), createVNode("span", {
        class: [o.e("nav-next"), o.is("disabled", !m.value.next)],
        onClick: g
      }, [createVNode(Re, null, {
        default: () => [createVNode(Cn, null, null)]
      })])] : null, B = e.panes.map((z, I) => {
        var N, L, H, K;
        const M = z.uid, W = z.props.disabled, E = (L = (N = z.props.name) != null ? N : z.index) != null ? L : `${I}`, V = !W && (z.isClosable || e.editable);
        z.index = `${I}`;
        const G = V ? createVNode(Re, {
          class: "is-icon-close",
          onClick: (ne) => n("tabRemove", z, ne)
        }, {
          default: () => [createVNode(Uo, null, null)]
        }) : null, F = ((K = (H = z.slots).label) == null ? void 0 : K.call(H)) || z.props.label, X = !W && z.active ? 0 : -1;
        return createVNode("div", {
          ref: `tab-${M}`,
          class: [o.e("item"), o.is(r.props.tabPosition), o.is("active", z.active), o.is("disabled", W), o.is("closable", V), o.is("focus", h3.value)],
          id: `tab-${E}`,
          key: `tab-${M}`,
          "aria-controls": `pane-${E}`,
          role: "tab",
          "aria-selected": z.active,
          tabindex: X,
          onFocus: () => _(),
          onBlur: () => P(),
          onClick: (ne) => {
            P(), n("tabClick", z, E, ne);
          },
          onKeydown: (ne) => {
            V && (ne.code === Fe.delete || ne.code === Fe.backspace) && n("tabRemove", z, ne);
          }
        }, [F, G]);
      });
      return createVNode("div", {
        ref: f,
        class: [o.e("nav-wrap"), o.is("scrollable", !!m.value), o.is(r.props.tabPosition)]
      }, [A, createVNode("div", {
        class: o.e("nav-scroll"),
        ref: u
      }, [createVNode("div", {
        class: [o.e("nav"), o.is(r.props.tabPosition), o.is("stretch", e.stretch && ["top", "bottom"].includes(r.props.tabPosition))],
        ref: c,
        style: y.value,
        role: "tablist",
        onKeydown: S
      }, [e.type ? null : createVNode(hT, {
        ref: p,
        tabs: [...e.panes]
      }, null), B])])]);
    };
  }
});
var yT = Pe({
  type: {
    type: String,
    values: ["card", "border-card", ""],
    default: ""
  },
  activeName: {
    type: [String, Number]
  },
  closable: Boolean,
  addable: Boolean,
  modelValue: {
    type: [String, Number]
  },
  editable: Boolean,
  tabPosition: {
    type: String,
    values: ["top", "right", "bottom", "left"],
    default: "top"
  },
  beforeLeave: {
    type: be(Function),
    default: () => true
  },
  stretch: Boolean
});
var Io = (e) => St(e) || ot(e);
var wT = {
  [lt]: (e) => Io(e),
  tabClick: (e, t) => t instanceof Event,
  tabChange: (e) => Io(e),
  edit: (e, t) => ["remove", "add"].includes(t),
  tabRemove: (e) => Io(e),
  tabAdd: () => true
};
var CT = defineComponent({
  name: "ElTabs",
  props: yT,
  emits: wT,
  setup(e, {
    emit: t,
    slots: n,
    expose: a
  }) {
    var r, o;
    const l = ye("tabs"), {
      children: s,
      addChild: u,
      removeChild: c
    } = tw(getCurrentInstance(), "ElTabPane"), f = ref(), p = ref((o = (r = e.modelValue) != null ? r : e.activeName) != null ? o : "0"), m = (y) => {
      p.value = y, t(lt, y), t("tabChange", y);
    }, v = async (y) => {
      var C, g, w;
      if (!(p.value === y || $n(y)))
        try {
          await ((C = e.beforeLeave) == null ? void 0 : C.call(e, y, p.value)) !== false && (m(y), (w = (g = f.value) == null ? void 0 : g.removeFocus) == null || w.call(g));
        } catch {
        }
    }, h3 = (y, C, g) => {
      y.props.disabled || (v(C), t("tabClick", y, g));
    }, d = (y, C) => {
      y.props.disabled || $n(y.props.name) || (C.stopPropagation(), t("edit", y.props.name, "remove"), t("tabRemove", y.props.name));
    }, b = () => {
      t("edit", void 0, "add"), t("tabAdd");
    };
    return zl({
      from: '"activeName"',
      replacement: '"model-value" or "v-model"',
      scope: "ElTabs",
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/tabs.html#attributes",
      type: "Attribute"
    }, computed(() => !!e.activeName)), watch(() => e.activeName, (y) => v(y)), watch(() => e.modelValue, (y) => v(y)), watch(p, async () => {
      var y;
      await nextTick(), (y = f.value) == null || y.scrollToActiveTab();
    }), provide(yo, {
      props: e,
      currentName: p,
      registerPane: u,
      unregisterPane: c
    }), a({
      currentName: p
    }), () => {
      const y = e.editable || e.addable ? createVNode("span", {
        class: l.e("new-tab"),
        tabindex: "0",
        onClick: b,
        onKeydown: (w) => {
          w.code === Fe.enter && b();
        }
      }, [createVNode(Re, {
        class: l.is("icon-plus")
      }, {
        default: () => [createVNode(v0, null, null)]
      })]) : null, C = createVNode("div", {
        class: [l.e("header"), l.is(e.tabPosition)]
      }, [y, createVNode(bT, {
        ref: f,
        currentName: p.value,
        editable: e.editable,
        type: e.type,
        panes: s.value,
        stretch: e.stretch,
        onTabClick: h3,
        onTabRemove: d
      }, null)]), g = createVNode("div", {
        class: l.e("content")
      }, [renderSlot(n, "default")]);
      return createVNode("div", {
        class: [l.b(), l.m(e.tabPosition), {
          [l.m("card")]: e.type === "card",
          [l.m("border-card")]: e.type === "border-card"
        }]
      }, [...e.tabPosition !== "bottom" ? [C, g] : [g, C]]);
    };
  }
});
var ST = Pe({
  label: {
    type: String,
    default: ""
  },
  name: {
    type: [String, Number]
  },
  closable: Boolean,
  disabled: Boolean,
  lazy: Boolean
});
var kT = ["id", "aria-hidden", "aria-labelledby"];
var zd = "ElTabPane";
var _T = defineComponent({
  name: zd
});
var $T = defineComponent({
  ..._T,
  props: ST,
  setup(e) {
    const t = e, n = getCurrentInstance(), a = useSlots(), r = inject(yo);
    r || Pa(zd, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const o = ye("tab-pane"), l = ref(), s = computed(() => t.closable || r.props.closable), u = fs(() => {
      var v;
      return r.currentName.value === ((v = t.name) != null ? v : l.value);
    }), c = ref(u.value), f = computed(() => {
      var v;
      return (v = t.name) != null ? v : l.value;
    }), p = fs(() => !t.lazy || c.value || u.value);
    watch(u, (v) => {
      v && (c.value = true);
    });
    const m = reactive({
      uid: n.uid,
      slots: a,
      props: t,
      paneName: f,
      active: u,
      index: l,
      isClosable: s
    });
    return onMounted(() => {
      r.registerPane(m);
    }), onUnmounted(() => {
      r.unregisterPane(m.uid);
    }), (v, h3) => unref(p) ? withDirectives((openBlock(), createElementBlock("div", {
      key: 0,
      id: `pane-${unref(f)}`,
      class: normalizeClass(unref(o).b()),
      role: "tabpanel",
      "aria-hidden": !unref(u),
      "aria-labelledby": `tab-${unref(f)}`
    }, [
      renderSlot(v.$slots, "default")
    ], 10, kT)), [
      [vShow, unref(u)]
    ]) : createCommentVNode("v-if", true);
  }
});
var Vd = xe($T, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);
var ET = Lt(CT, {
  TabPane: Vd
});
var TT = dn(Vd);
var OT = {
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
var PT = {
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
  ...OT
};
var ru = (e, t = "Y/M/D h:m:s") => {
  const n = (l) => (l = l.toString(), l[1] ? l : `0${l}`), a = ["Y", "M", "D", "h", "m", "s"], r = [], o = new Date(Number(e));
  r.push(o.getFullYear()), r.push(n(o.getMonth() + 1)), r.push(n(o.getDate())), r.push(n(o.getHours())), r.push(n(o.getMinutes())), r.push(n(o.getSeconds()));
  for (const l in r)
    t = t.replace(a[l], r[l]);
  return /NaN/.test(t) && (t = "--"), t;
};
var xT = (e) => {
  if (!e)
    return "0";
  const t = /\d{1,3}(?=(\d{3})+(\.|$))/g;
  e = String(Math.round(+e * Math.pow(10, 2)));
  let n = e.substr(0, e.length - 2).replace(t, "$&,"), a = e.substr(e.length - 2);
  return `${n || 0}.${a}`;
};
var MT = (e) => {
  const t = 9999999999999e-2, n = "零", a = "壹", r = "贰", o = "叁", l = "肆", s = "伍", u = "陆", c = "柒", f = "捌", p = "玖", m = "拾", v = "佰", h3 = "仟", d = "万", b = "亿", y = "", C = "元", g = "角", w = "分", k = "整";
  let S, _, P, A = "", B, z, I, N, L, H, K;
  const M = ["", m, v, h3], W = ["", d, b], E = [g, w], V = [
    n,
    a,
    r,
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
  if (A = e.split("."), A.length > 1 ? (S = A[0], _ = A[1], _ = _.substr(0, 2)) : (S = A[0], _ = ""), P = "", +S > 0) {
    for (B = 0, z = 0; z < S.length; z += 1)
      I = S.length - z - 1, N = S.substr(z, 1), H = I / 4, K = I % 4, +N == 0 ? B += 1 : (B > 0 && (P += V[0]), B = 0, P += V[Number(N)] + M[K]), K === 0 && B < 4 && (P += W[H]);
    P += C;
  }
  if (_ !== "")
    for (z = 0; z < _.length; z += 1)
      N = _.substr(z, 1), L = _.substr(-1, 1), +N == 0 ? +L == 0 ? P += "" : P += V[Number(N)] : P += V[Number(N)] + E[z];
  return P === "" && (P = n + C), _ === "" && (P += k), P = y + P, P;
};
var ou = (e, t) => {
  let n = "";
  return t.thousands && (n = xT(e)), t.number && (n = (+e).toFixed(2)), t.chinaPrice && (n = e && MT(e)), n;
};
var AT = defineComponent({
  props: ["data", "column"],
  setup(e) {
    const t = e.data, n = e.column, a = (r, o) => {
      const {
        formatType: l,
        prop: s,
        dictData: u,
        buttons: c
      } = o;
      let f = r[s] || "--";
      if (l)
        switch (l) {
          case "price":
            f = ou(r[s], {
              thousands: true
            });
            break;
          case "priceChinese":
            f = ou(r[s], {
              chinaPrice: true
            });
            break;
          case "date":
            f = ru(r[s], "Y-M-D");
            break;
          case "dateTime":
            f = ru(r[s]);
        }
      if (u.length) {
        const p = u.find((m) => m.value == r[s]);
        f = p && p.label;
      }
      return c.length && (f = c.map((p) => createVNode(kn, mergeProps(p, {
        onClick: (m) => {
          m.stopPropagation(), p.click && p.click(r);
        }
      }), {
        default: () => [p.content]
      }))), f;
    };
    return () => createVNode(Fragment, null, [a(t, n)]);
  }
});
var NT = defineComponent({
  __name: "TableColumn",
  props: PT,
  setup(e) {
    const t = e;
    return (n, a) => {
      const r = Dd;
      return openBlock(), createBlock(r, normalizeProps(guardReactiveProps(t)), createSlots({
        default: withCtx((o) => [
          t.slotName ? renderSlot(n.$slots, "default", normalizeProps(mergeProps({ key: 0 }, o))) : createCommentVNode("", true),
          !t.slotName && t.type === "default" && !t.formatter ? (openBlock(), createBlock(unref(AT), {
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
var RT = "100px";
var LT = "1800px";
var FT = {
  minwidth: RT,
  maxwidth: LT
};
var IT = defineComponent({
  props: ["filter", "searchSize", "labelPosition", "searchData"],
  emits: ["getParams", "resetFn"],
  setup(e, {
    emit: t,
    expose: n,
    slots: a
  }) {
    const r = reactive({}), {
      filter: o,
      searchSize: l,
      labelPosition: s
    } = e, u = ref(), c = ref(false), f = ref("展开"), p = (g, w) => {
      g > +FT.maxwidth.replace(/[^\d]/gi, "") ? c.value = w > 4 : c.value = w > 3;
    };
    onMounted(() => {
      var w;
      u.value = document.body.clientWidth;
      const g = ((w = a == null ? void 0 : a.search()[0].children) == null ? void 0 : w.length) || 0;
      p(u.value, m.value.length + g), window.onresize = () => (() => {
        u.value = document.body.clientWidth, p(u.value, m.value.length + g);
      })();
    });
    const m = ref([]);
    watchEffect(() => {
      m.value = o.map((g) => (typeof g.value == "string" && (r[g.prop] = g.value), typeof g.filter == "string" ? {
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
    const v = ref({}), h3 = () => {
      Object.keys(r).forEach((g) => {
        /,/.test(g) ? g.split(",").forEach((w, k) => {
          v.value[w] = r[g] ? r[g][k] : null;
        }) : v.value[g] = r[g] || null;
      }), e.searchData && (v.value = Object.assign(v.value, unref(e.searchData))), t("getParams", {
        ...v.value
      });
    }, d = ref(), b = ref(), y = () => {
      Object.keys(r).forEach((g) => {
        r[g] = "";
      }), Object.keys(v.value).forEach((g) => {
        v.value[g] = "";
      }), b.value.resetFields(), t("resetFn");
    }, C = () => {
      f.value = f.value === "展开" ? "收起" : "展开";
    };
    return n({
      formData: r,
      newFormData: v,
      searchForm: d,
      searchFormRef: b,
      isShow: c,
      showName: f,
      changeName: C,
      slots: a
    }), () => createVNode(Fragment, null, [createVNode("div", {
      class: "chris-table-search"
    }, [createVNode(n2, {
      model: r,
      ref: b,
      "label-position": s,
      class: [{
        active: f.value === "展开",
        "chris-table-search-form": true
      }]
    }, {
      default: () => [Array.isArray(m.value) && m.value.map((g) => {
        let w = null;
        switch (g.type) {
          case "input":
            w = createVNode(Nn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(Bt, {
                class: "item-content",
                clearable: true,
                modelValue: r[g.prop],
                "onUpdate:modelValue": (k) => r[g.prop] = k,
                size: l,
                placeholder: `请输入${g.placeholder}`
              }, null)]
            });
            break;
          case "select":
            w = createVNode(Nn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(Td, {
                class: "item-content select",
                clearable: true,
                modelValue: r[g.prop],
                "onUpdate:modelValue": (k) => r[g.prop] = k,
                placeholder: `请选择${g.placeholder}`,
                size: l
              }, {
                default: () => [Array.isArray(unref(g.options)) && unref(g.options).map((k, S) => createVNode(Od, {
                  key: S,
                  label: k.label,
                  value: k.value
                }, null))]
              })]
            });
            break;
          case "cascader":
            w = createVNode(Nn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(Vk, {
                class: "item-content",
                clearable: true,
                options: g.options,
                "show-all-levels": g.showAllLevels,
                modelValue: r[g.prop],
                "onUpdate:modelValue": (k) => r[g.prop] = k,
                props: g.props,
                placeholder: `请选择${g.placeholder}`,
                size: l
              }, null)]
            });
            break;
          case "date":
            w = createVNode(Nn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(xr, {
                class: "item-content",
                clearable: true,
                modelValue: r[g.prop],
                "onUpdate:modelValue": (k) => r[g.prop] = k,
                props: g.props,
                placeholder: `请选择${g.placeholder}`,
                size: l,
                "value-format": "YYYY-MM-DD"
              }, null)]
            });
            break;
          case "dateTime":
            w = createVNode(Nn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(xr, {
                class: "item-content",
                clearable: true,
                modelValue: r[g.prop],
                "onUpdate:modelValue": (k) => r[g.prop] = k,
                props: g.props,
                placeholder: `请选择${g.placeholder}`,
                size: l,
                type: "datetime",
                "value-format": "YYYY-MM-DD HH:mm:ss"
              }, null)]
            });
            break;
          case "dateRange":
            w = createVNode(Nn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(xr, {
                class: "item-content",
                clearable: true,
                modelValue: r[g.prop],
                "onUpdate:modelValue": (k) => r[g.prop] = k,
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
            w = createVNode(Nn, {
              label: `${g.label}:`
            }, {
              default: () => [createVNode(xr, {
                class: "item-content",
                clearable: true,
                modelValue: r[g.prop],
                "onUpdate:modelValue": (k) => r[g.prop] = k,
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
            w = createVNode(Nn, {
              label: `${g.label}:`,
              class: "el-form-item-min"
            }, {
              default: () => [createVNode(Bt, {
                class: "item-content",
                clearable: true,
                size: l,
                modelValue: r[g.prop[0]],
                "onUpdate:modelValue": (k) => r[g.prop[0]] = k,
                placeholder: `${Array.isArray(g.placeholder) ? g.placeholder[0] : "最小值"}`
              }, null), createVNode("span", null, [createTextVNode("-")]), createVNode(Bt, {
                class: "item-content",
                clearable: true,
                size: l,
                modelValue: r[g.prop[1]],
                "onUpdate:modelValue": (k) => r[g.prop[1]] = k,
                placeholder: `${Array.isArray(g.placeholder) ? g.placeholder[1] : "最大值"}`
              }, null)]
            });
            break;
        }
        return w;
      }), a == null ? void 0 : a.search()]
    }), m.value.length ? createVNode("div", {
      class: "chris-table-search-btns"
    }, [createVNode(kn, {
      type: "primary",
      onClick: h3
    }, {
      default: () => [createTextVNode("查询")]
    }), createVNode(kn, {
      onClick: y
    }, {
      default: () => [createTextVNode("重置")]
    }), c.value && createVNode(kn, {
      type: "success",
      onClick: C
    }, {
      default: () => [f.value]
    })]) : ""])]);
  }
});
var DT = defineComponent({
  name: "pagination",
  inheritAttrs: true,
  emits: ["getPage"],
  props: ["total", "layout", "pageSizes", "currentPage"],
  setup(e, {
    emit: t
  }) {
    ref(0);
    const n = ref(1), a = ref(10), r = (l) => {
      n.value = 1, a.value = l, t("getPage", {
        pageSize: a,
        currentPage: n
      });
    }, o = (l) => {
      n.value = l, t("getPage", {
        pageSize: a,
        currentPage: n
      });
    };
    return watchEffect(() => {
      n.value = e.currentPage;
    }), {
      handleCurrentChange: o,
      handleSizeChange: r,
      pageSize: a,
      currentPage: n,
      props: e
    };
  },
  render() {
    return createVNode("div", {
      class: "paginaton"
    }, [createVNode(aE, {
      "onUpdate:current-page": this.handleCurrentChange,
      "onUpdate:page-size": this.handleSizeChange,
      currentPage: this.currentPage,
      pageSizes: this.props.pageSizes,
      pageSize: this.pageSize,
      layout: this.props.layout,
      total: this.total
    }, null)]);
  }
});
var BT = { class: "chris-buttons" };
var zT = defineComponent({
  __name: "Buttons",
  props: { buttons: Array },
  setup(e) {
    const n = e.buttons;
    return (a, r) => (openBlock(), createElementBlock("div", BT, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(n), (o, l) => (openBlock(), createBlock(unref(kn), mergeProps({ type: "primary" }, o, { key: l }), {
        default: withCtx(() => [
          createTextVNode(toDisplayString(o.content), 1)
        ]),
        _: 2
      }, 1040))), 128))
    ]));
  }
});
var us = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
};
var VT = us(zT, [["__scopeId", "data-v-154437b2"]]);
var HT = {
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
    default: "total, sizes, prev, pager, next, jumper"
  },
  pageSizes: {
    type: Array,
    default: [5, 10, 20, 30]
  }
};
var Hd = {
  data: {
    type: Array,
    default: () => []
  },
  ref: [String, Function],
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
  ...HT
};
var Zr = {
  select: (e, t) => true,
  selectAll: (e) => true,
  selectionChange: (e) => true,
  cellMouseEnter: (e, t, n, a) => true,
  cellMouseLeave: (e, t, n, a) => true,
  cellContextmenu: (e, t, n, a) => true,
  cellClick: (e, t, n, a) => true,
  cellDblclick: (e, t, n, a) => true,
  rowClick: (e, t, n) => true,
  rowContextmenu: (e, t, n) => true,
  rowDblclick: (e, t, n) => true,
  headerClick: (e, t) => true,
  headerContextmenu: (e, t) => true,
  sortChange: (e) => true,
  filterChange: (e) => true,
  currentChange: (e, t) => true,
  headerDragend: (e, t, n, a) => true,
  expandChange: (e, t) => true,
  query: (e) => true
};
var lu = (e, t) => (t.split(".").forEach((a) => {
  e = e[a];
}), e);
var WT = { class: "chris-table" };
var jT = {
  name: "TableList"
};
var KT = defineComponent({
  ...jT,
  props: Hd,
  emits: { ...Zr, resetFn: () => {
  } },
  setup(e, { expose: t, emit: n }) {
    var P;
    const a = e, { columns: r } = toRefs(a), o = ref();
    o.value = (P = r == null ? void 0 : r.value) == null ? void 0 : P.filter((A) => !A.hide);
    const l = ref(), s = computed(() => {
      const A = {};
      for (const B of Object.keys(Zr))
        A[B] = (...z) => {
          n(B, ...z);
        };
      return A;
    }), { usePageNum: u, usePageSize: c } = {
      usePageNum: a.pageNum || "pageNum",
      usePageSize: a.pageSize || "pageSize"
    }, f = ref(1), p = ref(10), m = ref(), v = ref(0);
    let h3 = a.path || "data.rows", d = a.toTalPath || "data.total";
    m.value = a.data;
    const b = async (A) => {
      const B = {
        ...A,
        [u]: f.value,
        [c]: p.value
      }, z = await a.request(B);
      m.value = lu(z, h3), v.value = lu(z, d), a.parseData && (m.value = a.parseData(m.value));
    }, y = ref([]);
    r.value.filter((A) => !A.hide).forEach((A) => {
      typeof A.filter == "string" ? y.value.push(unref(A)) : typeof A.filter == "object" && !A.filter.hide && y.value.push(unref(A));
    });
    const C = ref(), g = (A) => {
      f.value = 1, b(A);
    }, w = async (A) => {
      f.value = A.currentPage.value, p.value = A.pageSize.value, b({ ...l.value.newFormData });
    }, k = (A) => A + 1 + (f.value - 1) * p.value;
    onMounted(() => {
      a.request && b(l.value.formData);
    });
    const S = ref(), _ = () => {
      n("resetFn");
    };
    return t({
      tableRef: S,
      refresh: g,
      params: l
    }), (A, B) => {
      const z = Dd;
      return openBlock(), createElementBlock("div", WT, [
        renderSlot(A.$slots, "topheader", {}, void 0, true),
        createVNode(unref(IT), {
          ref_key: "searchRef",
          ref: l,
          filter: y.value,
          searchSize: a.searchSize,
          labelPosition: a.labelPosition,
          searchData: a.searchData,
          onGetParams: g,
          onResetFn: _
        }, {
          search: withCtx(() => [
            renderSlot(A.$slots, "search", {}, void 0, true)
          ]),
          _: 3
        }, 8, ["filter", "searchSize", "labelPosition", "searchData"]),
        renderSlot(A.$slots, "centerheader", {}, void 0, true),
        createVNode(VT, {
          buttons: a.buttons
        }, null, 8, ["buttons"]),
        createVNode(unref(dT), mergeProps(a, {
          data: m.value,
          style: { width: "100%" }
        }, toHandlers(s.value), {
          ref_key: "tableRef",
          ref: S
        }), {
          empty: withCtx(() => [
            renderSlot(A.$slots, "empty", {}, void 0, true)
          ]),
          append: withCtx(() => [
            renderSlot(A.$slots, "append", {}, void 0, true)
          ]),
          default: withCtx(() => [
            (typeof a.index == "boolean" ? a.index : !a.index.hide) ? (openBlock(), createBlock(z, {
              key: 0,
              type: "index",
              index: k,
              label: typeof a.index == "object" && a.index.label,
              width: typeof a.index == "object" && a.index.width
            }, null, 8, ["label", "width"])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(o.value, (I, N) => (openBlock(), createBlock(NT, mergeProps({ key: N }, I), createSlots({ _: 2 }, [
              I.header ? {
                name: "header",
                fn: withCtx((L) => [
                  renderSlot(A.$slots, "header", normalizeProps(guardReactiveProps(L)), void 0, true)
                ]),
                key: "0"
              } : void 0,
              I.slotName ? {
                name: "default",
                fn: withCtx((L) => [
                  renderSlot(A.$slots, I.slotName, normalizeProps(guardReactiveProps(L)), void 0, true)
                ]),
                key: "1"
              } : void 0
            ]), 1040))), 128))
          ]),
          _: 3
        }, 16, ["data"]),
        withDirectives(createVNode(unref(DT), {
          total: v.value,
          onGetPage: w,
          currentPage: f.value,
          pageSize: p.value,
          pageSizes: a.pageSizes,
          ref_key: "pagination",
          ref: C,
          layout: a.layout
        }, null, 8, ["total", "currentPage", "pageSize", "pageSizes", "layout"]), [
          [vShow, v.value > 0 && a.pagination]
        ]),
        renderSlot(A.$slots, "footer", {}, void 0, true)
      ]);
    };
  }
});
var Wd = us(KT, [["__scopeId", "data-v-56a2318a"]]);
var qT = (e) => e;
var YT = {
  tabs: {
    type: Object,
    default: {
      type: {
        type: String,
        values: ["card", "border-card"],
        default: "border-card"
      },
      activeName: {
        type: [String, Number],
        default: ""
      },
      closable: {
        type: Boolean,
        default: false
      },
      addable: {
        type: Boolean,
        default: false
      },
      modelValue: {
        type: [String, Number]
      },
      editable: {
        type: Boolean,
        default: false
      },
      tabPosition: {
        type: String,
        values: ["top", "right", "bottom", "left"],
        default: "top"
      },
      beforeLeave: {
        type: Function,
        default: () => false
      },
      stretch: {
        type: Boolean,
        default: false
      }
    }
  }
};
var UT = {
  table: {
    type: Object,
    default: Hd
  }
};
var GT = { class: "chris-tables" };
var XT = {
  name: "TableLists"
};
var ZT = defineComponent({
  ...XT,
  props: { ...UT, ...YT },
  emits: { ...Zr, resetFn: () => {
  } },
  setup(e, { expose: t, emit: n }) {
    const a = e, r = computed(() => mergeProps(a.tabs, {
      type: "border-card",
      closable: false,
      addable: false,
      editable: false,
      stretch: false
    })), o = computed(() => a.table), l = computed(() => {
      const m = {};
      for (const v of Object.keys(Zr))
        m[v] = (...h3) => {
          n(v, ...h3);
        };
      return m;
    }), s = ref(r.value.activeName), u = ref({}), c = ref({}), f = () => {
      n("resetFn");
    };
    watchEffect(() => {
      u.value = o.value(s.value), f();
    });
    const p = (m, v) => {
      c.value[v] = m;
    };
    return t({
      tableRef: c
    }), (m, v) => {
      const h3 = TT, d = ET;
      return openBlock(), createElementBlock("div", GT, [
        renderSlot(m.$slots, "topheader", {}, void 0, true),
        createVNode(d, mergeProps(r.value, {
          modelValue: s.value,
          "onUpdate:modelValue": v[0] || (v[0] = (b) => s.value = b)
        }), {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(r.value.tabsList, (b, y) => (openBlock(), createBlock(h3, {
              key: y,
              label: b.label,
              name: b.value
            }, {
              default: withCtx(() => {
                var C;
                return [
                  b.value === s.value ? (openBlock(), createBlock(Wd, mergeProps({ key: 0 }, u.value, toHandlers(l.value), {
                    onResetFn: f,
                    ref_for: true,
                    ref: (g) => p(g, b.value)
                  }), createSlots({
                    search: withCtx(() => [
                      renderSlot(m.$slots, "search", {}, void 0, true)
                    ]),
                    empty: withCtx(() => [
                      renderSlot(m.$slots, "empty", {}, void 0, true)
                    ]),
                    append: withCtx(() => [
                      renderSlot(m.$slots, "append", {}, void 0, true)
                    ]),
                    centerheader: withCtx(() => [
                      renderSlot(m.$slots, "centerheader", {}, void 0, true)
                    ]),
                    footer: withCtx(() => [
                      renderSlot(m.$slots, "footer", {}, void 0, true)
                    ]),
                    _: 2
                  }, [
                    renderList((C = u.value) == null ? void 0 : C.columns, (g) => ({
                      name: g.slotName,
                      fn: withCtx((w) => [
                        renderSlot(m.$slots, g.slotName, normalizeProps(guardReactiveProps(w)), void 0, true),
                        renderSlot(m.$slots, "header", normalizeProps(guardReactiveProps(w)), void 0, true)
                      ])
                    }))
                  ]), 1040)) : createCommentVNode("", true)
                ];
              }),
              _: 2
            }, 1032, ["label", "name"]))), 128))
          ]),
          _: 3
        }, 16, ["modelValue"])
      ]);
    };
  }
});
var JT = us(ZT, [["__scopeId", "data-v-6b884909"]]);
var QT = (e) => ({
  tabs: e.tabs,
  table: e.table
});
var aO = {
  useTable: qT,
  useTables: QT
};
var eO = [Wd, JT];
var rO = {
  install(e) {
    eO.forEach((t) => {
      e.component(t.name, t);
    });
  }
};
export {
  Wd as TableList,
  JT as TableLists,
  aO as chris,
  rO as default
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
//# sourceMappingURL=chriszj.js.map
