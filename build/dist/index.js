import { defineComponent as K, reactive as ue, provide as fe, onMounted as se, openBlock as g, createElementBlock as C, normalizeClass as L, unref as E, renderSlot as Z, inject as oe, ref as j, computed as U, watch as te, normalizeStyle as Q, createCommentVNode as z, createElementVNode as B, mergeProps as ce, withModifiers as re, Fragment as q, renderList as ne, createBlock as X, withCtx as le, createTextVNode as pe, toDisplayString as J, toRefs as Me, withDirectives as ie, vShow as me, nextTick as he, onBeforeUnmount as ke, vModelText as Se, createVNode as de, withKeys as qe, Transition as we, markRaw as be, resolveDynamicComponent as Ee, h as Ve, resolveComponent as Ue, onUnmounted as Ye, normalizeProps as xt, guardReactiveProps as Lt, useSlots as Re, createApp as ft } from "vue";
import Fe from "axios";
const A = "ak", pt = /* @__PURE__ */ K({
  __name: "Form",
  props: {
    rules: { default: () => ({}) },
    showMessage: { type: Boolean, default: !0 },
    modelValue: { default: () => ({}) },
    trigger: { default: "change" },
    labelWidth: {},
    required: { type: Boolean, default: !0 },
    size: {},
    disabled: { type: Boolean }
  },
  setup(u, { expose: n }) {
    const e = u, t = ue({
      defaultValue: ""
      // 用于保存所有表单元素初始值
    }), l = [];
    fe(`${A}FormProps`, e), fe(`${A}GetFormItemFields`, (r) => {
      l.push(r);
    });
    const d = (r, m) => {
      m !== "reset" && (t.defaultValue = JSON.stringify(r)), Object.assign(e.modelValue, r);
    }, i = () => {
      d(JSON.parse(t.defaultValue), "reset"), l && l.forEach((r) => {
        r.clear();
      });
    }, c = (r) => {
      l && l.forEach((m) => {
        r ? r.indexOf(m.prop) !== -1 && m.clear() : m.clear();
      });
    }, b = (r) => {
      const m = [];
      let w = l;
      return r && r.length > 0 && (w = l.filter((k) => r.indexOf(k.prop) !== -1)), new Promise((k, _) => {
        w.forEach((f) => {
          f.validate().then(() => {
            m.push("true"), y();
          }).catch((a) => {
            m.push(a), y();
          });
        });
        const y = () => {
          if (m.length === w.length) {
            const f = m.filter((a) => a !== "true");
            f.length > 0 ? _(f) : k(e.modelValue);
          }
        };
      });
    };
    return se(() => {
      d(e.modelValue);
    }), n({ validate: b, clearValidate: c, resetForm: i }), (r, m) => (g(), C("form", {
      class: L(`${E(A)}-form`)
    }, [
      Z(r.$slots, "default")
    ], 2));
  }
}), Ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Form: pt
}, Symbol.toStringTag, { value: "Module" })), et = {
  digits: /^[0-9]*[1-9][0-9]*$/,
  // 正整数
  number: /^\d+(\.\d+)?$/,
  // 带小数
  mobile: /^1[3|4|5|7|8]\d{9}$/,
  // 手机
  mail: /^[a-z0-9A-Z._%-]+@([a-z0-9A-Z-]+\.)+[a-zA-Z]{2,4}$/,
  tel: /^0\d{2,3}-\d{7,8}$/,
  // 电话020-00000
  fax: /^(\d{3,4})?[-]?\d{7,8}$/
};
function tt(u) {
  const n = Function;
  return new n("return " + u)();
}
const $e = function(u) {
  return /^\s*$/g.test(u);
}, De = function(u, n, e) {
  return e === "rule" ? tt(n).test(u) : et[n] === void 0 ? "undefined" : tt(et[n]).test(u);
}, Dt = function(u, n) {
  for (let e = 0, t = n.length; e < t; e++) {
    const l = n[e];
    switch (l.type) {
      case "required":
        if ($e(u) || u === !1)
          return l.msg;
        break;
      case "digits":
      case "number":
      case "mobile":
      case "mail":
      case "tel":
      case "fax":
        if (!$e(u) && !De(u, l.type))
          return l.msg;
        break;
      case "phone":
        if (!$e(u) && !(De(u, "mobile") || De(u, "tel")))
          return l.msg;
        break;
      case "maxLength":
        if (!$e(u) && parseInt(u.length) > parseInt(l.len))
          return l.msg;
        break;
      case "minLength":
        if (!$e(u) && parseInt(u.length) < parseInt(l.len))
          return l.msg;
        break;
      case "rule":
        if (!$e(u) && !De(u, l.rule, "rule"))
          return l.msg;
        break;
      case "fn":
        if (!l.validator(u))
          return l.msg;
        break;
    }
  }
  return !0;
}, Ce = (u) => {
  const n = oe(`${A}FormProps`, {});
  return n && n.disabled ? !0 : u;
}, Et = {
  key: 0,
  class: "prepend"
}, Mt = ["value", "type", "disabled"], Pt = {
  key: 1,
  class: "append"
}, Rt = {
  key: 2,
  class: "prefix-icon"
}, zt = { class: "suffix-icon" }, Ke = /* @__PURE__ */ K({
  __name: "Input",
  props: {
    modelValue: { default: "" },
    disabled: { type: Boolean, default: !1 },
    type: { default: "text" },
    clear: { type: Boolean, default: !1 },
    showEye: { type: Boolean, default: !1 },
    prefixIcon: { default: "" },
    suffixIcon: { default: "" },
    width: { default: "" },
    size: { default: "" }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(), i = j(!1), c = U(() => Ce(t.disabled)), b = U(() => i.value ? "text" : t.type), r = (o) => {
      l("blur", o);
      const { value: s } = o.target;
      a(s, "blur");
    }, m = (o) => {
      l("focus", o);
      const { value: s } = o.target;
      a(s, "focus");
    }, w = (o) => {
      const { value: s } = o.target;
      l("update:modelValue", s), a(s, "change");
    }, k = () => {
      l("update:modelValue", ""), l("change", "");
    }, _ = () => {
      d.value.focus();
    }, y = () => {
      d.value.blur();
    };
    te(
      () => t.modelValue,
      (o) => {
        a(o, "mounted");
      }
    );
    const f = oe(`${A}ControlChange`, ""), a = (o, s) => {
      f && f(o, s);
    };
    return se(() => {
      a(t.modelValue, "mounted");
    }), n({ blur: y, focus: _ }), (o, s) => (g(), C("div", {
      class: L({
        [E(A) + "-form-input"]: !0,
        "input-prepend": o.$slots.prepend,
        "input-append": o.$slots.append
      }),
      style: Q({ width: o.width })
    }, [
      o.$slots.prepend ? (g(), C("div", Et, [
        Z(o.$slots, "prepend")
      ])) : z("", !0),
      B("input", ce({ autocomplete: "off" }, o.$attrs, {
        ref_key: "inputEl",
        ref: d,
        value: o.modelValue,
        type: b.value,
        class: {
          disabled: c.value,
          [E(A) + "-input-control"]: !0,
          "has-prefix": o.$slots.prefix || o.prefixIcon,
          [o.size]: o.size
        },
        disabled: c.value,
        onInput: w,
        onFocus: m,
        onBlur: r
      }), null, 16, Mt),
      o.$slots.append ? (g(), C("div", Pt, [
        Z(o.$slots, "append")
      ])) : z("", !0),
      o.$slots.prefix || o.prefixIcon ? (g(), C("span", Rt, [
        o.prefixIcon ? (g(), C("i", {
          key: 0,
          class: L([o.prefixIcon])
        }, null, 2)) : z("", !0),
        Z(o.$slots, "prefix")
      ])) : z("", !0),
      B("span", zt, [
        Z(o.$slots, "suffix"),
        o.suffixIcon ? (g(), C("i", {
          key: 0,
          class: L([o.suffixIcon])
        }, null, 2)) : z("", !0),
        o.clear && o.modelValue ? (g(), C("i", {
          key: 1,
          class: "icon-close",
          onClick: re(k, ["stop"])
        })) : z("", !0),
        o.modelValue && o.showEye && o.type === "password" ? (g(), C("i", {
          key: 2,
          class: L({ "icon-eye-close": i.value, "icon-eye": !i.value }),
          onClick: s[0] || (s[0] = re((p) => i.value = !i.value, ["stop"]))
        }, null, 2)) : z("", !0)
      ])
    ], 6));
  }
}), Nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Input: Ke
}, Symbol.toStringTag, { value: "Module" })), Ht = /* @__PURE__ */ B("span", { class: "radio-inner" }, null, -1), jt = {
  key: 0,
  class: "radio-text"
}, Ft = ["innerHTML"], Ge = /* @__PURE__ */ K({
  __name: "Radio",
  props: {
    disabled: { type: Boolean, default: !1 },
    value: { type: [String, Boolean, Number] },
    modelValue: { type: [String, Boolean, Number] },
    label: {}
  },
  emits: ["update:modelValue", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = U(() => Ce(e.disabled)), d = U(() => {
      let b;
      return e.value ? b = e.value === e.modelValue : b = !!e.modelValue, b;
    }), i = oe(`${A}ControlChange`, ""), c = () => {
      if (l.value)
        return;
      const b = e.value || !0;
      t("change", b), t("update:modelValue", b), i && i(b, "change");
    };
    return te(
      () => e.modelValue,
      (b) => {
        i && i(b, "mounted");
      }
    ), se(() => {
      i && i(e.modelValue, "mounted");
    }), (b, r) => (g(), C("label", {
      class: L({
        disabled: l.value,
        checked: d.value,
        [E(A) + "-radio"]: !0
      }),
      onClick: c
    }, [
      B("span", null, [
        Ht,
        b.$slots.default ? (g(), C("span", jt, [
          Z(b.$slots, "default")
        ])) : z("", !0),
        b.label ? (g(), C("span", {
          key: 1,
          class: "radio-text",
          innerHTML: b.label
        }, null, 8, Ft)) : z("", !0)
      ])
    ], 2));
  }
}), mt = /* @__PURE__ */ K({
  __name: "RadioGroup",
  props: {
    modelValue: {},
    options: {},
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(e.modelValue), d = (i, c) => {
      t("update:modelValue", i), t("change", i, c);
    };
    return (i, c) => (g(), C("div", {
      class: L(`${E(A)}-radio-group`)
    }, [
      (g(!0), C(q, null, ne(i.options, (b, r) => (g(), X(Ge, {
        key: r,
        modelValue: l.value,
        "onUpdate:modelValue": c[0] || (c[0] = (m) => l.value = m),
        value: b[i.optionsKey.value],
        disabled: i.disabled || b.disabled,
        onChange: (m) => d(m, b)
      }, {
        default: le(() => [
          pe(J(b[i.optionsKey.label]), 1)
        ]),
        _: 2
      }, 1032, ["modelValue", "value", "disabled", "onChange"]))), 128))
    ], 2));
  }
}), Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Radio: Ge,
  RadioGroup: mt
}, Symbol.toStringTag, { value: "Module" })), Ut = {
  key: 0,
  class: "checkbox-text"
}, Yt = ["textContent"], Te = /* @__PURE__ */ K({
  __name: "Checkbox",
  props: {
    disabled: { type: Boolean, default: !1 },
    label: {},
    modelValue: { type: [String, Boolean, Array] },
    value: {},
    beforeChange: {}
  },
  emits: ["update:modelValue", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = U(() => Ce(e.disabled)), d = U(() => {
      let r;
      return e.value ? typeof e.modelValue == "object" ? r = e.modelValue.indexOf(e.value) !== -1 : r = e.value === e.modelValue : r = !!e.modelValue, r;
    }), i = oe(`${A}ControlChange`, ""), c = () => {
      if (e.beforeChange && !e.beforeChange() || l.value)
        return;
      let r;
      d.value ? typeof e.modelValue == "object" ? r = e.modelValue.filter((m) => m !== e.value) : r = !1 : e.value ? typeof e.modelValue == "object" ? (r = e.modelValue, r.push(e.value)) : r = e.value : r = !e.modelValue, t("change", r), t("update:modelValue", r), b(r, "change");
    };
    te(
      () => e.modelValue,
      (r) => {
        i && i(e.modelValue, "mounted"), b(r, "mounted");
      }
    ), se(() => {
      b(e.modelValue, "mounted");
    });
    const b = (r, m) => {
      i && i(r, m);
    };
    return (r, m) => (g(), C("label", {
      class: L({
        [E(A) + "-checkbox"]: !0,
        checked: d.value,
        disabled: l.value
      }),
      onClick: c
    }, [
      B("span", null, [
        B("span", {
          class: L(["checkbox-inner icon-check", { checked: d.value }])
        }, null, 2),
        r.$slots.default ? (g(), C("span", Ut, [
          Z(r.$slots, "default")
        ])) : (g(), C("span", {
          key: 1,
          class: "checkbox-text",
          textContent: J(r.label)
        }, null, 8, Yt))
      ])
    ], 2));
  }
}), gt = /* @__PURE__ */ K({
  __name: "Group",
  props: {
    options: { default: () => [] },
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    modelValue: { default: () => [] },
    name: {},
    max: { default: 0 },
    min: { default: 0 },
    disabled: { type: Boolean },
    beforeChange: {}
  },
  emits: ["update:modelValue", "change"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(t.modelValue);
    te(
      () => t.modelValue,
      (_) => {
        d.value = _;
      }
    );
    const { optionsKey: i } = Me(t), c = i.value.value, b = j({}), r = (_) => {
      const y = _.length;
      b.value = {}, y >= t.max && t.max > 0 ? t.options.forEach((f, a) => {
        _.indexOf(f[c]) === -1 && (b.value[a] = !0);
      }) : y <= t.min && t.min > 0 ? t.options.forEach((f, a) => {
        _.indexOf(f[c]) !== -1 && (b.value[a] = !0);
      }) : (t.min > 0 || t.max > 0) && t.options.forEach((f, a) => {
        b.value[a] = !1;
      });
    }, m = (_, y) => {
      r(_), l("update:modelValue", _), l("change", _, y);
    };
    return n({ toggleSelect: (_) => {
      const y = t.modelValue;
      b.value = {}, t.options && t.options.forEach((a, o) => {
        const s = a[c];
        if (_)
          (!a.disabled || t.modelValue.includes(s)) && (t.max > 0 ? y.length < t.max ? f(s) : b.value[o] = !0 : f(s));
        else if (!a.disabled) {
          const p = t.modelValue.indexOf(s);
          p !== -1 && (t.min > 0 ? y.length > t.min ? y.splice(p, 1) : b.value[o] = !0 : y.splice(p, 1));
        }
      });
      function f(a) {
        y.includes(a) || y.push(a);
      }
      l("update:modelValue", y);
    }, getValue: () => t.options.filter((_) => t.modelValue.indexOf(_[c]) !== -1) }), (_, y) => (g(), C("div", {
      class: L(`${E(A)}-checkbox-group`)
    }, [
      (g(!0), C(q, null, ne(_.options, (f, a) => (g(), X(Te, {
        key: a,
        modelValue: d.value,
        "onUpdate:modelValue": y[0] || (y[0] = (o) => d.value = o),
        value: f[E(i).value],
        label: f[E(i).label] || f[E(i).value],
        disabled: _.disabled || b.value[a] || f.disabled,
        class: L(f.class),
        "before-change": _.beforeChange,
        onChange: (o) => m(o, f)
      }, null, 8, ["modelValue", "value", "label", "disabled", "class", "before-change", "onChange"]))), 128))
    ], 2));
  }
}), Kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Checkbox: Te,
  CheckboxGroup: gt
}, Symbol.toStringTag, { value: "Module" })), Pe = /* @__PURE__ */ K({
  __name: "Tag",
  props: {
    type: { default: "" },
    closable: { type: Boolean, default: !1 },
    color: { default: "" },
    borderColor: { default: "" },
    bgColor: { default: "" },
    size: { default: "" }
  },
  emits: ["click", "close"],
  setup(u, { emit: n }) {
    const e = n, t = j(!0), l = () => {
      t.value = !1, e("close");
    }, d = () => {
      e("click");
    };
    return (i, c) => ie((g(), C("span", {
      class: L({
        [`${E(A)}-tag`]: !0,
        ["tag-" + i.type]: i.type,
        ["tag-" + i.size]: i.size
      }),
      style: Q({ background: i.bgColor, borderColor: i.borderColor, color: i.color }),
      onClick: d
    }, [
      Z(i.$slots, "default"),
      i.closable ? (g(), C("i", {
        key: 0,
        class: "icon-close",
        onClick: l
      })) : z("", !0)
    ], 6)), [
      [me, t.value]
    ]);
  }
}), We = () => document.documentElement.scrollTop || document.body.scrollTop, Ie = (u) => {
  const n = u.getBoundingClientRect(), e = n.top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0), t = n.left + (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0), l = u.offsetWidth, d = u.offsetHeight;
  return { left: t, top: e, width: l, height: d };
}, xe = () => {
  const u = document.documentElement.clientWidth || document.body.clientWidth, n = document.documentElement.clientHeight || document.body.clientHeight;
  return { width: u, height: n };
}, ht = (u) => {
  const n = document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight), e = document.createElement("div");
  e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e);
  const t = e.offsetWidth - e.clientWidth;
  return document.body.removeChild(e), u ? { hasScroll: n, width: t } : t;
}, vt = (u, n = "") => !!u.className.match(new RegExp("(\\s|^)" + n + "(\\s|$)")), lt = (u, n = "") => {
  vt(u, n) || (u.className ? u.className += " " + n : u.className += n);
}, Ne = (u, n = "") => {
  vt(u, n) && (u.className = u.className.replace(
    new RegExp("(\\s|^)" + n + "(\\s|$)"),
    ""
  ));
}, Gt = ["readonly", "placeholder", "disabled"], Jt = ["readonly", "placeholder", "disabled"], Zt = ["placeholder"], Xt = { key: 0 }, Qt = ["textContent"], qt = { key: 1 }, el = ["textContent"], tl = ["onClick"], ll = {
  key: 2,
  class: "input"
}, ol = ["disabled", "placeholder"], nl = ["readonly", "placeholder", "disabled"], sl = { class: "group-icon" }, Ae = /* @__PURE__ */ K({
  __name: "SelectDown",
  props: {
    modelValue: { default: () => [] },
    width: {},
    multiple: { type: Boolean, default: !1 },
    collapseTags: { type: Boolean, default: !1 },
    clear: { type: Boolean, default: !1 },
    filterable: { type: Boolean, default: !1 },
    size: {},
    placeholder: {},
    disabled: { type: Boolean, default: !1 },
    direction: { default: 0 },
    downClass: { default: "" },
    downStyle: {},
    appendToBody: { type: Boolean, default: !1 },
    downHeight: { default: 0 },
    icon: { default: "arrow" },
    fixedIcon: { type: Boolean },
    isRange: { type: Boolean, default: !1 },
    rangeSeparator: { default: "To" },
    endPlaceholder: {}
  },
  emits: ["update:modelValue", "blur", "toggleClick", "clear", "delete", "input", "focus", "keyupEnter"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(), i = j(), c = ue({
      valueLabel: [],
      visible: !1,
      appendStyle: {
        top: "",
        minWidth: "",
        bottom: "",
        left: ""
      },
      direction2: t.direction,
      stopPropagation: !1,
      searchValueM: ""
      // 多选输入框的值
    }), b = (V) => {
      const O = t.modelValue[V];
      return typeof O == "object" ? !O.disabled : !0;
    }, r = U(() => {
      let V = 0;
      for (let O = 0; O < t.modelValue.length; O++) {
        const N = t.modelValue[O];
        if (!(typeof N == "object" && N.disabled)) {
          V = O;
          break;
        }
      }
      return V;
    }), m = te(
      () => t.modelValue,
      (V) => {
        if (c.valueLabel = [], V != null && V.length)
          for (const O in V) {
            let N = V[O];
            typeof N == "object" && (N = N.label), c.valueLabel.push(N);
          }
      },
      {
        deep: !0,
        immediate: !0
      }
    ), w = U(() => Ce(t.disabled)), k = U(() => {
      const V = [`${A}-input-control`];
      return t.size && V.push(t.size), w.value && V.push("disabled"), V.join(" ");
    }), _ = (V) => {
      w.value || (c.visible = !0, he(() => {
        x(V), M();
      }), l("toggleClick", c.visible, V), c.stopPropagation = !0, setTimeout(() => {
        c.stopPropagation = !1;
      }, 50));
    }, y = (V) => {
      c.visible && !t.filterable && (o(V), V.stopPropagation());
    }, f = (V) => {
      c.valueLabel.splice(V, 1);
      const O = t.modelValue;
      O.splice(V, 1), s(O), l("delete", V);
    }, a = (V) => {
      const N = t.modelValue.filter((G) => typeof G == "object" && G.disabled);
      s(N), l("clear"), V.stopPropagation();
    }, o = (V) => {
      if (c.visible && !c.stopPropagation) {
        if (V && l("toggleClick", !1, V), c.visible = !1, c.searchValueM = "", !t.multiple && t.filterable) {
          const O = t.modelValue[0];
          c.valueLabel[0] = typeof O == "object" ? O.label : O;
        }
        if (t.filterable && t.isRange) {
          const O = t.modelValue[1];
          c.valueLabel[1] = typeof O == "object" ? O.label : O;
        }
      }
    }, s = (V) => {
      l("update:modelValue", V);
    }, p = (V, O, N) => {
      if (t.filterable) {
        const { value: G } = V.target;
        l(O, G, N);
      }
    }, h = (V, O) => {
      p(V, "input", O);
    }, S = (V, O) => {
      p(V, "blur", O);
    }, T = (V, O) => {
      p(V, "focus", O);
    }, R = (V) => {
      const { value: O } = V.target;
      l("keyupEnter", O);
    }, M = () => {
      const V = Ie(d.value);
      if (t.appendToBody) {
        const O = xe();
        c.appendStyle = {
          bottom: "auto",
          minWidth: V.width + "px",
          left: V.left + "px",
          top: V.top + V.height + 8 + "px"
        }, c.direction2 === 2 && (c.appendStyle.top = "auto", c.appendStyle.bottom = O.height - V.top + "px");
      } else
        c.appendStyle.top = V.height + 8 + "px", c.appendStyle.bottom = "auto", c.direction2 === 2 && (c.appendStyle.top = "auto", c.appendStyle.bottom = V.height + 8 + "px");
    }, x = (V) => {
      if (t.direction === 0) {
        c.direction2 = t.direction;
        const O = document.documentElement.clientHeight || document.body.clientHeight, N = V.clientY, G = t.downHeight || i.value.offsetHeight || 0;
        G > O - N && N > G && (c.direction2 = 2);
      }
    }, v = U(() => t.downHeight ? {
      "max-height": t.downHeight + "px",
      "overflow-y": "auto"
    } : {}), I = U(() => Object.assign({}, c.appendStyle, t.downStyle || {}));
    return se(() => {
      he(() => {
        document.addEventListener("click", o), t.appendToBody && document.body.appendChild(i.value);
      });
    }), ke(() => {
      document.removeEventListener("click", o), t.appendToBody && i.value && document.body.removeChild(i.value), m();
    }), n({ slideUp: o }), (V, O) => (g(), C("div", {
      ref_key: "el",
      ref: d,
      class: L({
        "is-down": c.visible,
        [E(A) + "-select-down"]: !0,
        disabled: w.value
      }),
      style: Q({ width: V.width }),
      onClick: _
    }, [
      B("div", {
        class: "select-control",
        onClick: y
      }, [
        V.isRange ? (g(), C("div", {
          key: 0,
          class: L(["select-range", k.value])
        }, [
          ie(B("input", {
            "onUpdate:modelValue": O[0] || (O[0] = (N) => c.valueLabel[0] = N),
            readonly: !V.filterable,
            placeholder: V.placeholder,
            disabled: w.value,
            onInput: O[1] || (O[1] = (N) => h(N, 0)),
            onFocus: O[2] || (O[2] = (N) => T(N, 0)),
            onBlur: O[3] || (O[3] = (N) => S(N, 0))
          }, null, 40, Gt), [
            [Se, c.valueLabel[0]]
          ]),
          B("span", null, J(V.rangeSeparator), 1),
          ie(B("input", {
            "onUpdate:modelValue": O[4] || (O[4] = (N) => c.valueLabel[1] = N),
            readonly: !V.filterable,
            placeholder: V.endPlaceholder,
            disabled: w.value,
            onInput: O[5] || (O[5] = (N) => h(N, 1)),
            onFocus: O[6] || (O[6] = (N) => T(N, 1)),
            onBlur: O[7] || (O[7] = (N) => S(N, 1))
          }, null, 40, Jt), [
            [Se, c.valueLabel[1]]
          ])
        ], 2)) : V.multiple ? (g(), C("div", {
          key: 1,
          class: L([k.value, "multiple-text"])
        }, [
          B("ul", { placeholder: V.placeholder }, [
            V.collapseTags ? (g(), C(q, { key: 0 }, [
              c.valueLabel.length > 0 ? (g(), C("li", Xt, [
                B("span", {
                  textContent: J(c.valueLabel[r.value]),
                  class: L({ disabled: !b(r.value) })
                }, null, 10, Qt),
                b(r.value) ? (g(), C("i", {
                  key: 0,
                  class: "icon-error",
                  onClick: O[8] || (O[8] = re((N) => f(r.value), ["stop"]))
                })) : z("", !0)
              ])) : z("", !0),
              c.valueLabel.length > 1 ? (g(), C("li", qt, [
                de(Pe, {
                  size: "mini",
                  type: "info"
                }, {
                  default: le(() => [
                    pe(" +" + J(c.valueLabel.length), 1)
                  ]),
                  _: 1
                })
              ])) : z("", !0)
            ], 64)) : (g(!0), C(q, { key: 1 }, ne(c.valueLabel, (N, G) => (g(), C("li", { key: G }, [
              B("span", {
                textContent: J(N),
                class: L({ disabled: !b(G) })
              }, null, 10, el),
              b(G) ? (g(), C("i", {
                key: 0,
                class: "icon-error",
                onClick: re((P) => f(G), ["stop"])
              }, null, 8, tl)) : z("", !0)
            ]))), 128)),
            V.filterable ? (g(), C("li", ll, [
              ie(B("input", {
                "onUpdate:modelValue": O[9] || (O[9] = (N) => c.searchValueM = N),
                type: "text",
                disabled: w.value,
                placeholder: c.valueLabel.length === 0 ? V.placeholder : "",
                onInput: h,
                onFocus: T,
                onBlur: S,
                onKeyup: qe(R, ["enter"])
              }, null, 40, ol), [
                [Se, c.searchValueM]
              ])
            ])) : z("", !0)
          ], 8, Zt)
        ], 2)) : ie((g(), C("input", {
          key: 2,
          "onUpdate:modelValue": O[10] || (O[10] = (N) => c.valueLabel[0] = N),
          readonly: !V.filterable,
          placeholder: V.placeholder,
          class: L(k.value),
          disabled: w.value,
          onInput: h,
          onFocus: T,
          onBlur: S,
          onKeyup: qe(R, ["enter"])
        }, null, 42, nl)), [
          [Se, c.valueLabel[0]]
        ]),
        B("span", sl, [
          V.clear && V.modelValue.length > 0 ? (g(), C("i", {
            key: 0,
            class: "icon-close",
            title: "清空",
            onClick: a
          })) : z("", !0),
          B("i", {
            class: L({ down: c.visible && !V.fixedIcon, [`icon-${V.icon}`]: !0 })
          }, null, 2)
        ])
      ]),
      de(we, {
        name: c.direction2 === 2 ? "slide-toggle-top" : "slide-toggle"
      }, {
        default: le(() => [
          ie(B("div", {
            ref_key: "selectDown",
            ref: i,
            class: L({
              [E(A) + "-select-down-pane"]: !0,
              [V.downClass]: V.downClass,
              top: c.direction2 === 2
            }),
            style: Q(I.value),
            onClick: O[11] || (O[11] = re(() => {
            }, ["stop"]))
          }, [
            B("div", {
              style: Q(v.value),
              class: "scroll-pane"
            }, [
              Z(V.$slots, "default")
            ], 4),
            B("span", {
              class: L(["down-arrow", { "is-range": V.isRange }])
            }, null, 2)
          ], 6), [
            [me, c.visible]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 6));
  }
}), al = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SelectDown: Ae
}, Symbol.toStringTag, { value: "Module" })), il = { class: "calendar-head" }, rl = /* @__PURE__ */ K({
  __name: "ControlHead",
  props: {
    activePanel: {},
    value: {},
    type: {},
    position: { default: "left" }
  },
  emits: ["change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = U(() => e.value.getFullYear()), d = U(() => e.value.getMonth()), i = (m) => {
      let w = 1;
      e.activePanel === "year" && (w = 10), m === 0 && (w = -w);
      const k = new Date(e.value.setFullYear(l.value + w));
      t("change", k);
    }, c = (m) => {
      let w = 1;
      m === 0 && (w = -w);
      const k = new Date(e.value.setMonth(d.value + w));
      t("change", k);
    }, b = (m) => {
      t("change", m);
    }, r = (m) => !(e.type.includes("Range") && (e.position === "left" && m || e.position === "right" && !m));
    return (m, w) => (g(), C("div", il, [
      r(0) ? (g(), C("a", {
        key: 0,
        class: "calendar-prev-year",
        onClick: w[0] || (w[0] = (k) => i(0))
      }, "«")) : z("", !0),
      m.activePanel === "day" ? (g(), C("a", {
        key: 1,
        class: "calendar-prev-month",
        onClick: w[1] || (w[1] = (k) => c(0))
      }, "‹")) : z("", !0),
      B("span", null, [
        B("a", {
          class: "calendar-year-select",
          onClick: w[2] || (w[2] = (k) => b("year"))
        }, J(m.activePanel === "year" ? `${l.value - 2}年－${l.value + 8}年` : `${l.value}年`), 1),
        m.activePanel === "day" ? (g(), C("a", {
          key: 0,
          class: "calendar-year-month",
          onClick: w[3] || (w[3] = (k) => b("month"))
        }, J(d.value + 1) + "月", 1)) : z("", !0)
      ]),
      m.activePanel === "day" ? (g(), C("a", {
        key: 2,
        class: "calendar-next-month",
        onClick: w[4] || (w[4] = (k) => c(1))
      }, "›")) : z("", !0),
      r(0) ? (g(), C("a", {
        key: 3,
        class: "calendar-next-year",
        onClick: w[5] || (w[5] = (k) => i(1))
      }, "»")) : z("", !0)
    ]));
  }
}), ul = ["onClick"], cl = /* @__PURE__ */ K({
  __name: "YearMonth",
  props: {
    value: {},
    defaultDate: {},
    disabledDate: {},
    pane: { default: "year" }
  },
  emits: ["update:modelValue", "click"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(e.defaultDate);
    te(
      () => e.defaultDate,
      () => {
        l.value = e.defaultDate;
      }
    );
    const d = U(() => {
      let r = [];
      if (e.pane === "year") {
        const m = e.value.getFullYear();
        for (let w = m - 4; w <= m + 7; w++)
          r.push(w.toString());
      } else
        e.pane === "month" && (r = [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月"
        ]);
      return r;
    }), i = (r) => e.disabledDate && e.disabledDate(r, e.pane), c = (r, m) => {
      let w = new Date(r);
      const k = new Date(l.value);
      let _ = r === k.getFullYear().toString();
      const y = /* @__PURE__ */ new Date();
      let f = w.getFullYear() === y.getFullYear();
      if (e.pane === "month") {
        w = new Date(e.value.getFullYear(), m), e.value.getFullYear() === k.getFullYear() && (_ = m === k.getMonth());
        const a = e.value.getFullYear();
        f = y.getFullYear().toString() + y.getMonth() === a.toString() + m;
      }
      return {
        "calendar-date-today": f,
        // 当年或当前月
        "calendar-date-select": _,
        "calendar-date-disabled": i(w)
        // 不能选择的
      };
    }, b = (r, m) => {
      let w = new Date(parseInt(r), e.value.getMonth());
      e.pane === "month" && (w = new Date(e.value.getFullYear(), m)), i(w) || (l.value = w.getTime(), t("click", w));
    };
    return (r, m) => (g(), C("div", {
      class: L({
        "calendar-year": r.pane === "year",
        "calendar-months": r.pane === "month"
      })
    }, [
      (g(!0), C(q, null, ne(d.value, (w, k) => (g(), C("a", {
        key: w,
        class: L(c(w, k)),
        onClick: (_) => b(w, k)
      }, J(w), 11, ul))), 128))
    ], 2));
  }
}), dl = { class: "calendar-days" }, fl = /* @__PURE__ */ B("div", { class: "calendar-week" }, [
  /* @__PURE__ */ B("a", null, "日"),
  /* @__PURE__ */ B("a", null, "一"),
  /* @__PURE__ */ B("a", null, "二"),
  /* @__PURE__ */ B("a", null, "三"),
  /* @__PURE__ */ B("a", null, "四"),
  /* @__PURE__ */ B("a", null, "五"),
  /* @__PURE__ */ B("a", null, "六")
], -1), pl = { class: "calendar-list" }, ml = ["onClick"], gl = ["textContent"], hl = {
  key: 0,
  class: "calendar-time"
}, vl = { class: "calendar-time-input" }, yl = /* @__PURE__ */ K({
  __name: "Day",
  props: {
    value: {},
    defaultDate: {},
    type: {},
    disabledDate: {},
    innerText: {},
    index: {}
  },
  emits: ["click"],
  setup(u, { emit: n }) {
    const e = u, t = n;
    te(
      () => e.value,
      () => {
        b(e.value), e.defaultDate !== -1 && (i.value = e.defaultDate);
      }
    );
    const l = j([]), d = j({ hours: "", minutes: "", seconds: "" }), i = j(e.defaultDate), c = (f) => `${f}`.padStart(2, "0"), b = (f) => {
      const a = [], o = f.getFullYear(), s = f.getMonth(), p = new Date(o, s, 1);
      p.setDate(0);
      let h = p.getDate(), T = p.getDay() + 1;
      for (; T > 0; )
        a.push({
          d: h - T + 1,
          y: s > 0 ? o : o - 1,
          // 0为1月，即上一年
          m: s > 0 ? s - 1 : 11,
          p: !0
        }), T--;
      p.setMonth(p.getMonth() + 2, 0), h = p.getDate();
      for (let R = 1; R <= h; R++)
        a.push({
          d: R,
          y: o,
          m: s
        });
      for (let R = 1; a.length < 42; R++)
        a.push({
          d: R,
          y: s < 11 ? o : o + 1,
          m: s < 11 ? s + 1 : 0,
          n: !0
        });
      l.value = a, d.value = {
        hours: c(f.getHours()),
        minutes: c(f.getMinutes()),
        seconds: c(f.getSeconds())
      };
    };
    b(e.value);
    const r = (f) => e.disabledDate && e.disabledDate(f, "day"), m = (f) => {
      const a = new Date(f.y, f.m, f.d), o = new Date(i.value).toDateString();
      return {
        "calendar-date-out": f.p || f.n,
        // 非当前月
        "calendar-date-today": a.toDateString() === (/* @__PURE__ */ new Date()).toDateString(),
        // 今天的
        "calendar-date-select": a.toDateString() === o,
        // 选中的
        "calendar-date-disabled": r(a)
        // 不能选择的
      };
    }, w = (f) => {
      const a = new Date(
        f.y,
        f.m,
        f.d,
        parseInt(d.value.hours, 10),
        parseInt(d.value.minutes, 10),
        parseInt(d.value.seconds, 10)
      );
      r(a) || (i.value = a.getTime(), e.type === "datetime" || t("click", { date: a }));
    }, k = (f) => {
      const a = new Date(f.y, f.m, f.d);
      return e.innerText && e.innerText(a);
    }, _ = () => {
      let f = e.value;
      i.value !== -1 && (f = new Date(i.value)), t("click", { date: f, type: "confirm" });
    }, y = (f, a) => {
      const { value: o } = f.target;
      let s = e.value;
      i.value !== -1 && (s = new Date(i.value));
      const p = parseInt(o, 10);
      a === "hours" && p < 24 && s.setHours(p), a === "minutes" && p < 59 && s.setMinutes(p), a === "seconds" && p < 59 && s.setSeconds(p), i.value = s.getTime(), t("click", { date: s });
    };
    return (f, a) => (g(), C("div", dl, [
      fl,
      B("div", pl, [
        (g(!0), C(q, null, ne(l.value, (o, s) => (g(), C("a", {
          key: s,
          class: L([m(o)]),
          onClick: (p) => w(o)
        }, [
          B("span", null, [
            pe(J(o.d) + " ", 1),
            k(o) ? (g(), C("i", {
              key: 0,
              textContent: J(k(o))
            }, null, 8, gl)) : z("", !0)
          ])
        ], 10, ml))), 128))
      ]),
      f.type === "datetime" || f.type === "datetimeRange" ? (g(), C("div", hl, [
        B("div", vl, [
          ie(B("input", {
            "onUpdate:modelValue": a[0] || (a[0] = (o) => d.value.hours = o),
            type: "text",
            maxlength: "2",
            onInput: a[1] || (a[1] = (o) => y(o, "hours")),
            oninput: "value=value.replace(/[^\\d]/g,'')",
            onfocus: "this.select()"
          }, null, 544), [
            [
              Se,
              d.value.hours,
              void 0,
              { number: !0 }
            ]
          ]),
          pe(": "),
          ie(B("input", {
            "onUpdate:modelValue": a[2] || (a[2] = (o) => d.value.minutes = o),
            type: "text",
            maxlength: "2",
            onInput: a[3] || (a[3] = (o) => y(o, "minutes")),
            oninput: "value=value.replace(/[^\\d]/g,'')",
            onfocus: "this.select()"
          }, null, 544), [
            [
              Se,
              d.value.minutes,
              void 0,
              { number: !0 }
            ]
          ]),
          pe(": "),
          ie(B("input", {
            "onUpdate:modelValue": a[4] || (a[4] = (o) => d.value.seconds = o),
            type: "text",
            maxlength: "2",
            onInput: a[5] || (a[5] = (o) => y(o, "seconds")),
            oninput: "value=value.replace(/[^\\d]/g,'')",
            onfocus: "this.select()"
          }, null, 544), [
            [
              Se,
              d.value.seconds,
              void 0,
              { number: !0 }
            ]
          ])
        ]),
        e.type === "datetime" || e.type === "datetimeRange" && e.index === 1 ? (g(), C("a", {
          key: 0,
          class: "btn-time",
          onClick: _
        }, "确定")) : z("", !0)
      ])) : z("", !0)
    ]));
  }
}), bl = { class: "calendar-body" }, yt = /* @__PURE__ */ K({
  __name: "DatePicker",
  props: {
    modelValue: {},
    placeholder: {},
    endPlaceholder: {},
    clear: { type: Boolean, default: !0 },
    disabled: { type: Boolean },
    type: { default: "date" },
    format: {},
    valueFormat: {},
    appendToBody: { type: Boolean },
    downClass: {},
    downStyle: {},
    readonly: { type: Boolean, default: !0 },
    direction: { default: 0 },
    width: {},
    disabledDate: {},
    innerText: {},
    size: {},
    isRange: { type: Boolean },
    rangeSeparator: { default: "To" }
  },
  emits: ["update:modelValue", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(), d = j(), i = j([]), c = e.type.includes("Range"), b = j([]), r = j("day"), m = j([]), w = oe(`${A}ControlChange`, ""), k = (v) => `${v}`.padStart(2, "0"), _ = U(() => {
      let v = "";
      if (e.format)
        v = e.format;
      else
        switch (e.type) {
          case "year":
            v = "y";
            break;
          case "month":
          case "monthRange":
            v = "y-MM";
            break;
          case "date":
          case "dateRange":
            v = "y-MM-dd";
            break;
          case "datetime":
          case "datetimeRange":
            v = "y-MM-dd hh:mm:ss";
            break;
        }
      return v;
    }), y = () => {
      e.type === "year" || e.type === "month" ? r.value = e.type : e.type === "monthRange" ? r.value = "month" : r.value = "day";
    }, f = (v, I) => {
      if (I === "timestamp")
        return v.getTime().toString();
      const V = v.getMonth() + 1, O = v.getDate(), N = v.getHours(), G = v.getMinutes(), P = v.getSeconds(), F = {
        y: v.getFullYear(),
        M: V,
        MM: k(V),
        d: O,
        dd: k(O),
        h: N,
        hh: k(N),
        m: G,
        mm: k(G),
        s: P,
        ss: k(P),
        w: v.getDay()
      };
      return I.replace(/(y|MM|M|dd|d|hh|h|mm|m|ss|s|w)/g, ($) => {
        const H = F[$];
        return $ === "w" ? ["日", "一", "二", "三", "四", "五", "六"][H] : H;
      });
    }, a = (v) => {
      const I = new Date(v);
      if (I.toString() !== "Invalid Date")
        return I;
      if (!/[^\d]/g.test(v)) {
        const O = new Date(parseInt(v, 10));
        if (O.toString() !== "Invalid Date")
          return O;
      }
      const V = new Date(v == null ? void 0 : v.replace(/['年'|'月']/g, "-").replace("日", ""));
      return V.toString() !== "Invalid Date" ? V : (console.warn("无效时间:" + v), !1);
    }, o = (v) => {
      const I = v || e.modelValue;
      let V = /* @__PURE__ */ new Date(), O = new Date(
        (/* @__PURE__ */ new Date()).setMonth(V.getMonth() + 1)
      );
      if (e.type === "monthRange" && (O = new Date(
        (/* @__PURE__ */ new Date()).setFullYear(V.getFullYear() + 1)
      )), b.value = [], i.value = [], c) {
        if (typeof I == "object" && (I == null ? void 0 : I.length) === 2) {
          const N = a(I[0]), G = a(I[1]);
          if (N && G) {
            V = N, O = G;
            const P = f(N, _.value), F = f(G, _.value);
            i.value = [P, F], b.value = [N.getTime(), G.getTime()];
          }
        }
        d.value = [V, O];
      } else {
        if (I && typeof I == "string") {
          const N = a(I);
          if (N) {
            V = N;
            const G = f(N, _.value);
            i.value = [G], b.value = [N.getTime()];
          }
        }
        d.value = [V];
      }
    };
    te(
      () => e.modelValue,
      () => {
        o();
      }
    ), se(() => {
      y(), o();
    });
    const s = (v) => {
      v.length === 2 ? v[0] > v[1] ? T([v[1], v[0]]) : T([v[0], v[1]]) : v.length;
    }, p = (v, I) => {
      if (c)
        if (e.type === "datetimeRange")
          if (v.type === "confirm") {
            let V = /* @__PURE__ */ new Date();
            m.value.length !== 0 && (V = m.value[m.value.length - 1]), s([V, v.date]);
          } else
            I === 0 && m.value.push(v.date);
        else
          m.value.push(v.date), s(m.value);
      else
        T([v.date]);
    }, h = (v, I) => {
      typeof I == "string" && !c ? r.value = I : typeof I == "object" && (c ? v === 0 ? d.value[0] = I : v === 1 && (d.value[1] = I) : d.value = [I]);
    }, S = (v) => {
      v || (y(), o()), m.value = [];
    }, T = (v) => {
      let I = [], V = "";
      if (d.value = v, c) {
        if ((v == null ? void 0 : v.length) === 2) {
          const O = f(v[0], _.value), N = f(v[1], _.value);
          if (I = [O, N], V = [O, N], e.valueFormat) {
            const G = f(v[0], e.valueFormat), P = f(v[1], e.valueFormat);
            V = [G, P];
          }
        }
      } else
        (v == null ? void 0 : v.length) === 1 && (V = f(v[0], _.value), I = [V], e.valueFormat && (V = f(v[0], e.valueFormat)));
      i.value = I, t("update:modelValue", V), t("change", V, c ? v : v[0] || ""), w && w(V), l.value.slideUp();
    }, R = (v, I) => {
      if (e.readonly || !v)
        return;
      const V = a(v);
      V && T(c ? I === 1 ? [d.value[0], V] : [V, d.value[1]] : [V]);
    }, M = () => {
      e.clear && T([]);
    }, x = (v, I) => {
      if (e.type === r.value)
        T([I]);
      else if (e.type === "monthRange")
        m.value.push(I), s(m.value);
      else {
        let V = "";
        r.value === "year" && (V = "month"), r.value === "month" && (V = "day"), V && (r.value = V), d.value[v] = I;
      }
    };
    return (v, I) => (g(), X(E(Ae), {
      ref_key: "selectDown",
      ref: l,
      placeholder: v.placeholder,
      endPlaceholder: v.endPlaceholder,
      size: v.size,
      disabled: v.disabled,
      width: v.width,
      clear: v.clear,
      "append-to-body": v.appendToBody,
      filterable: !v.readonly,
      direction: v.direction,
      "down-class": v.downClass,
      "down-style": v.downStyle,
      icon: "date",
      fixedIcon: !0,
      "model-value": i.value,
      rangeSeparator: v.rangeSeparator,
      isRange: E(c),
      onClear: M,
      onBlur: R,
      onToggleClick: S
    }, {
      default: le(() => [
        B("div", {
          class: L({ [`${E(A)}-date-picker`]: !0 }),
          onClick: I[0] || (I[0] = re(() => {
          }, ["stop"]))
        }, [
          (g(!0), C(q, null, ne(d.value, (V, O) => (g(), C("div", {
            key: O,
            class: "calendar"
          }, [
            de(rl, {
              type: v.type,
              activePanel: r.value,
              value: V,
              position: O === 0 ? "left" : "right",
              onChange: (N) => h(O, N)
            }, null, 8, ["type", "activePanel", "value", "position", "onChange"]),
            B("div", bl, [
              r.value === "day" ? (g(), X(yl, {
                key: 0,
                value: V,
                "default-date": b.value[O] || -1,
                pane: r.value,
                onClick: (N) => p(N, O),
                type: v.type,
                index: O,
                disabledDate: v.disabledDate,
                innerText: v.innerText
              }, null, 8, ["value", "default-date", "pane", "onClick", "type", "index", "disabledDate", "innerText"])) : (g(), X(cl, {
                key: 1,
                value: V,
                "default-date": b.value[O] || -1,
                pane: r.value,
                disabledDate: v.disabledDate,
                onClick: (N) => x(O, N)
              }, null, 8, ["value", "default-date", "pane", "disabledDate", "onClick"]))
            ])
          ]))), 128))
        ], 2)
      ]),
      _: 1
    }, 8, ["placeholder", "endPlaceholder", "size", "disabled", "width", "clear", "append-to-body", "filterable", "direction", "down-class", "down-style", "model-value", "rangeSeparator", "isRange"]));
  }
}), kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DatePicker: yt
}, Symbol.toStringTag, { value: "Module" })), wl = ["title", "onClick", "innerHTML"], Cl = {
  key: 0,
  class: "select-empty-options"
}, Je = /* @__PURE__ */ K({
  __name: "Select",
  props: {
    modelValue: {},
    multiple: { type: Boolean },
    filterable: { type: Boolean },
    downHeight: { default: 200 },
    multipleLimit: {},
    options: { default: () => [] },
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    beforeChange: {},
    async: { type: Boolean },
    emptyText: { default: "无数据" },
    allowCreate: { type: Boolean }
  },
  emits: ["update:modelValue", "change", "limitChange", "clear", "delete", "input", "focus", "blur", "toggleClick"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(), i = ue({
      checked: [],
      // 所有已选择的集合
      keywords: "",
      setFirst: !1,
      // 手动选择改变选项时，在watch时不触发setFirstText事件
      tempChecked: ""
    }), { optionsKey: c } = Me(t), b = c.value.label, r = c.value.value, m = j(
      JSON.parse(JSON.stringify(t.options))
    );
    te(
      () => t.modelValue,
      () => {
        _();
      }
    ), te(
      () => t.options,
      () => {
        m.value = JSON.parse(JSON.stringify(t.options)), _();
      }
    );
    const w = (x) => {
      if (!t.filterable)
        return;
      const v = m.value.filter((I) => I[b] === x && !I.disabled);
      if (v.length > 0) {
        let I = !1;
        i.checked.forEach((V) => {
          V[b] === v[0][b] && (I = !0);
        }), I || (i.checked.push(v[0]), h(v[0]));
      }
      i.keywords = "", setTimeout(() => {
        m.value.forEach((I) => {
          delete I._disabled;
        });
      }, 500), l("blur", x);
    }, k = (x) => {
      t.filterable && (i.keywords = x, t.async || m.value.forEach((v) => {
        v._disabled = v[b].indexOf(x) === -1;
      }), i.setFirst = !0, l("input", x));
    }, _ = () => {
      if (!i.setFirst && (i.setFirst = !1, t.modelValue && m.value && m.value.length > 0)) {
        i.checked = [], typeof t.modelValue == "object" ? t.modelValue.forEach((x) => {
          i.checked.push({
            [b]: x,
            [r]: x
          });
        }) : i.checked.push({
          [b]: t.modelValue,
          [r]: t.modelValue
        });
        for (let x = 0; x < m.value.length; x++) {
          const v = m.value[x], I = f(v);
          if (t.multiple) {
            if (typeof t.modelValue == "object") {
              const V = t.modelValue.indexOf(I);
              V !== -1 && i.checked.splice(V, 1, v);
            }
          } else if (I === t.modelValue) {
            i.checked.splice(0, 1, v);
            break;
          }
        }
      }
    }, y = (x) => {
      const v = f(x);
      if (t.multiple) {
        if (typeof t.modelValue == "object")
          return t.modelValue.indexOf(v) !== -1;
      } else
        return v === t.modelValue;
    }, f = (x) => x[r] === void 0 ? x[b] : x[r], a = (x, v) => {
      if (!x.disabled) {
        if (t.beforeChange && !t.beforeChange(x)) {
          s(), v && v.stopPropagation();
          return;
        }
        const I = f(x);
        if (t.multiple) {
          if (t.multipleLimit && t.multipleLimit > 0 && t.multipleLimit <= i.checked.length)
            return l("limitChange", t.modelValue), !1;
          let V = -1;
          i.checked.forEach((O, N) => {
            f(O) === I && (V = N);
          }), V !== -1 ? i.checked.splice(V, 1) : i.checked.push(x), h(x);
        } else
          i.checked = [x], s(), h(x);
      }
      v && v.stopPropagation();
    }, o = (x) => {
      if (t.multiple && typeof t.modelValue == "object")
        if (x)
          i.tempChecked = JSON.stringify(t.modelValue);
        else {
          const v = JSON.parse(i.tempChecked);
          let I = !0;
          console.log(JSON.stringify(t.modelValue)), v.forEach((V) => {
            t.modelValue.indexOf(V) === -1 && (I = !1);
          }), I || l("delete", -1);
        }
      l("toggleClick", x);
    }, s = () => {
      d.value.slideUp();
    }, p = oe(`${A}ControlChange`, ""), h = (x, v = !0) => {
      i.setFirst = v;
      let I = [];
      i.checked.forEach((V) => {
        I.push(f(V));
      }), t.multiple || (I = I[0] || ""), l("update:modelValue", I), p && p(I), l("change", I, x);
    }, S = (x) => {
      if (i.keywords && t.filterable) {
        const v = new RegExp(`${i.keywords}`, "gi");
        return x.replace(v, "<b>$&</b>");
      } else
        return x;
    }, T = () => {
      const x = m.value.filter((v) => v.disabled).map((v) => v[r]);
      i.checked = i.checked.filter(
        (v) => x.includes(v.value)
      ), h(), l("clear");
    }, R = (x) => {
      i.checked.splice(x, 1), h(), l("delete", x);
    };
    fe(`${A}GetChildOption`, (x) => {
      m.value.push(x);
    });
    const M = (x) => {
      if (!t.allowCreate)
        return !1;
      const v = m.value.filter(
        (I) => I[b].includes(x)
      );
      if (v && v.length > 0)
        a(v[0], "");
      else {
        const I = {
          [b]: x,
          [r]: x
        };
        i.checked = [x], m.value.push(I), h(I);
      }
    };
    return se(() => {
      _();
    }), n({ slideUp: s }), (x, v) => (g(), X(E(Ae), ce(x.$props, {
      ref_key: "selectDownEl",
      ref: d,
      "before-change": "",
      options: "",
      optionskey: "",
      "model-value": i.checked,
      onClear: T,
      onDelete: R,
      onInput: k,
      onBlur: w,
      onToggleClick: o,
      onKeyupEnter: M
    }), {
      default: le(() => [
        B("ul", {
          class: L(`${E(A)}-select`)
        }, [
          (g(!0), C(q, null, ne(m.value, (I, V) => ie((g(), C("li", {
            key: V,
            class: L({
              disabled: I.disabled,
              active: y(I),
              [I.class]: I.class
            }),
            title: I[E(c).label],
            onClick: (O) => a(I, O),
            innerHTML: S(I[E(c).label])
          }, null, 10, wl)), [
            [me, !I._disabled]
          ])), 128)),
          m.value.length === 0 ? (g(), C("p", Cl, J(x.emptyText), 1)) : z("", !0)
        ], 2),
        Z(x.$slots, "default")
      ]),
      _: 3
    }, 16, ["model-value"]));
  }
}), _l = K({
  props: {
    value: String,
    label: String,
    disabled: Boolean,
    className: String
  },
  setup(u) {
    const n = oe(`${A}GetChildOption`, "");
    se(() => {
      n && n({
        label: u.label,
        value: u.value,
        disabled: u.disabled,
        className: u.className
      });
    });
  },
  render() {
    return null;
  }
}), Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Option: _l,
  Select: Je
}, Symbol.toStringTag, { value: "Module" })), Vl = { class: "switch-text" }, bt = /* @__PURE__ */ K({
  __name: "Switch",
  props: {
    modelValue: { type: [String, Number, Boolean], default: !1 },
    disabled: { type: Boolean, default: !1 },
    activeColor: {},
    closeColor: {},
    activeValue: {},
    closeValue: {},
    beforeChange: {},
    size: {}
  },
  emits: ["update:modelValue", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = oe(`${A}ControlChange`, ""), d = U(() => e.activeValue ? e.modelValue === e.activeValue : e.modelValue), i = U(() => {
      let m = {};
      return e.modelValue && e.activeColor && (m = {
        borderColor: e.activeColor,
        backgroundColor: e.activeColor
      }), !e.modelValue && e.closeColor && (m = {
        borderColor: e.closeColor,
        backgroundColor: e.closeColor
      }), m;
    }), c = U(() => Ce(e.disabled)), b = () => {
      if (!c.value) {
        if (e.beforeChange && !e.beforeChange())
          return;
        let m;
        d.value ? e.closeValue ? m = e.closeValue : m = !1 : e.activeValue ? m = e.activeValue : m = !0, t("update:modelValue", m), t("change", m), r(m);
      }
    }, r = (m, w) => {
      l && l(m, w);
    };
    return te(
      () => e.modelValue,
      (m) => {
        r(m, "mounted");
      }
    ), se(() => {
      r(e.modelValue, "mounted");
    }), (m, w) => (g(), C("span", {
      class: L({
        [E(A) + "-switch"]: !0,
        "switch-checked": d.value,
        disabled: c.value,
        [m.size]: m.size
      }),
      style: Q(i.value),
      onClick: b
    }, [
      B("i", {
        class: L(`${E(A)}-switch-inner`)
      }, null, 2),
      B("span", Vl, [
        d.value ? Z(m.$slots, "open", { key: 0 }) : Z(m.$slots, "close", { key: 1 })
      ])
    ], 6));
  }
}), Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Switch: bt
}, Symbol.toStringTag, { value: "Module" })), $l = {};
function kt(u, n = 500) {
  let e;
  return function(...t) {
    e && clearTimeout(e), e = setTimeout(() => {
      u.apply(this, t);
    }, n);
  };
}
const Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  debounce: kt,
  default: $l
}, Symbol.toStringTag, { value: "Module" })), Il = ["value", "disabled", "maxlength"], Al = {
  key: 0,
  class: "input-count"
}, wt = /* @__PURE__ */ K({
  __name: "Textarea",
  props: {
    modelValue: { default: "" },
    autoHeight: { type: Boolean, default: !0 },
    width: { default: "100%" },
    height: { default: "80px" },
    disabled: { type: Boolean, default: !1 },
    maxlength: {},
    showWordLimit: { type: Boolean },
    maxHeight: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(e.modelValue);
    te(
      () => e.modelValue,
      (o) => {
        l.value = o;
      }
    );
    const d = j(2), i = j(), c = j(e.height), b = j(e.autoHeight ? "hidden" : ""), r = U(() => Ce(e.disabled)), m = U(() => ({
      width: e.width,
      height: c.value,
      minHeight: e.height,
      maxHeight: e.maxHeight,
      overflow: b.value
    })), w = kt(() => {
      if (e.autoHeight) {
        const o = i.value.scrollHeight + d.value;
        c.value = o + "px", o > parseInt(e.maxHeight || "") && (b.value = "auto");
      }
    }), k = () => {
      d.value = i.value.offsetHeight - i.value.clientHeight;
    }, _ = (o) => {
      const { value: s } = o.target;
      f(s), w();
    }, y = oe(`${A}ControlChange`, ""), f = (o) => {
      t("update:modelValue", o), a(o);
    };
    se(() => {
      k(), a(e.modelValue, "mounted");
    });
    const a = (o, s) => {
      y && y(o, s);
    };
    return te(
      () => e.modelValue,
      (o) => {
        a(o, "mounted");
      }
    ), (o, s) => (g(), C("div", {
      class: L([`${E(A)}-textarea`])
    }, [
      B("textarea", ce({
        ref_key: "textareaEl",
        ref: i
      }, o.$attrs, {
        value: l.value,
        class: { [`${E(A)}-input-control`]: !0, disabled: r.value },
        style: m.value,
        disabled: r.value,
        maxlength: o.maxlength,
        onInput: _
      }), null, 16, Il),
      o.showWordLimit && o.maxlength ? (g(), C("span", Al, J(l.value.length) + "/" + J(o.maxlength), 1)) : z("", !0)
    ], 2));
  }
}), xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Textarea: wt
}, Symbol.toStringTag, { value: "Module" })), Ll = { class: "time-picker" }, Ol = ["onClick"], ot = /* @__PURE__ */ K({
  __name: "Pane",
  props: {
    position: { default: "start" },
    time: {},
    disabledTime: {}
  },
  emits: ["click"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = [
      {
        max: 24,
        type: "h"
      },
      {
        max: 60,
        type: "m"
      },
      {
        max: 60,
        type: "s"
      }
    ], d = {
      h: {},
      m: {},
      s: {}
    }, i = (m) => `${m}`.padStart(2, "0"), c = (m, w) => {
      let k = !1;
      return e.disabledTime && (k = e.disabledTime(
        Object.assign({}, e.time, { a: m }),
        w
      ), d[w][m] = k), {
        active: e.time && e.time[w] === m,
        disabled: k
      };
    }, b = (m, w, k) => {
      typeof e.disabledTime == "function" && setTimeout(() => {
        const _ = d[w] || {};
        if (_[m]) {
          let y = 60;
          Object.keys(_).forEach((f) => {
            _[f] || parseInt(f) < y && (y = parseInt(f));
          }), y = y === 60 ? 0 : y, k[w] = y, w === "m" && b(k.s, "s", k), t("click", k);
        }
      }, 500);
    }, r = (m, w, k) => {
      const _ = JSON.parse(JSON.stringify(e.time)), { className: y } = k.target;
      if (y.indexOf("disabled") === -1) {
        switch (w) {
          case "h":
            _.h = m, b(_.m, "m", _);
            break;
          case "m":
            _.m = m, b(_.s, "s", _);
            break;
          case "s":
            _.s = m;
            break;
        }
        t("click", _);
      }
    };
    return (m, w) => (g(), C("div", Ll, [
      (g(), C(q, null, ne(l, (k, _) => B("ul", { key: _ }, [
        (g(!0), C(q, null, ne(k.max, (y) => (g(), C("li", {
          key: y,
          class: L(c(y - 1, k.type)),
          onClick: (f) => r(y - 1, k.type, f)
        }, J(i(y - 1)), 11, Ol))), 128))
      ])), 64))
    ]));
  }
}), Ct = /* @__PURE__ */ K({
  __name: "TimePicker",
  props: {
    modelValue: {},
    disabledTime: {},
    filterable: { type: Boolean },
    isRange: { type: Boolean }
  },
  emits: ["update:modelValue", "blur", "clear"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(), d = (o) => `${o}`.padStart(2, "0"), i = (o) => `${d(o.h)}:${d(o.m)}:${d(o.s)}`, c = (o) => {
      const s = o == null ? void 0 : o.split(":");
      return (s == null ? void 0 : s.length) === 3 ? {
        h: parseInt(s[0]) < 23 ? parseInt(s[0]) : 23,
        m: parseInt(s[1]) < 59 ? parseInt(s[1]) : 59,
        s: parseInt(s[2]) < 59 ? parseInt(s[2]) : 59
      } : o;
    }, b = oe(`${A}ControlChange`, ""), r = U(() => {
      let o = [];
      return e.isRange ? e.modelValue && e.modelValue.length === 2 && (o = [c(e.modelValue[0]), c(e.modelValue[1])]) : e.modelValue && (o = [c(e.modelValue.toString())]), o;
    }), m = U(() => {
      let o = [];
      return e.isRange ? e.modelValue && e.modelValue.length === 2 && (o = [
        i(r.value[0]),
        i(r.value[1])
      ]) : e.modelValue && (o = [i(r.value[0])]), o;
    }), w = (o) => {
      const s = /* @__PURE__ */ new Date();
      return {
        h: o ? s.getHours() + 1 : s.getHours(),
        m: s.getMinutes(),
        s: s.getSeconds()
      };
    }, k = (o) => {
      o && (!e.modelValue || e.modelValue && e.modelValue.length === 0) && y(w(), w(!0));
    }, _ = (o, s) => {
      if (e.isRange) {
        let p = r.value[0], h = r.value[1];
        o === "start" ? p = s : o === "end" && (h = s), y(p, h);
      } else
        y(s);
    }, y = (o, s) => {
      let p = i(o);
      if (e.isRange) {
        s || (s = o);
        const h = o.h * 3600 + o.m * 60 + o.s, S = s.h * 3600 + s.m * 60 + s.s;
        h > S ? p = [i(s), i(o)] : p = [i(o), i(s)];
      }
      t("update:modelValue", p), b && b(p);
    }, f = () => {
      t("update:modelValue", ""), t("clear"), b && b("");
    }, a = (o) => {
      if (e.filterable)
        if (!o)
          f();
        else {
          let s = [c(o.toString())];
          e.isRange && (s = [c(o[0]), c(o[1])]);
          let p = !1;
          for (const h in s) {
            const S = s[h];
            if (typeof S == "object" && typeof e.disabledTime == "function") {
              const T = ["h", "m", "s"];
              for (const R in T)
                if (p = e.disabledTime(
                  Object.assign({}, S, { a: S.h }),
                  T[R]
                ), p)
                  break;
            }
            if (p)
              break;
          }
          if (!p) {
            y(s[0], s[1]), t("blur", o);
            return;
          }
          l.value.setValue(m.value);
        }
    };
    return (o, s) => (g(), X(E(Ae), ce(o.$props, {
      ref_key: "selectDownEl",
      ref: l,
      disabledtime: "",
      "model-value": m.value,
      onClear: f,
      onBlur: a,
      onToggleClick: k
    }), {
      default: le(() => [
        B("div", {
          class: L({ [`${E(A)}-time-picker`]: !0, "is-range": o.isRange })
        }, [
          de(ot, {
            key: "start",
            time: r.value[0],
            disabledTime: o.disabledTime,
            onClick: s[0] || (s[0] = (p) => _("start", p))
          }, null, 8, ["time", "disabledTime"]),
          o.isRange ? (g(), X(ot, {
            key: "end",
            time: r.value[1],
            disabledTime: o.disabledTime,
            onClick: s[1] || (s[1] = (p) => _("end", p))
          }, null, 8, ["time", "disabledTime"])) : z("", !0)
        ], 2)
      ]),
      _: 1
    }, 16, ["model-value"]));
  }
}), Dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TimePicker: Ct
}, Symbol.toStringTag, { value: "Module" })), El = ["onClick"], _t = /* @__PURE__ */ K({
  __name: "TimeSelect",
  props: {
    modelValue: {},
    start: { default: "09:00" },
    end: { default: "18:00" },
    step: { default: "00:30" },
    minTime: { default: "" },
    maxTime: { default: "" },
    downHeight: { default: 200 }
  },
  emits: ["update:modelValue", "change", "clear"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = oe(`${A}ControlChange`, ""), d = (a, o) => {
      let s = a;
      return o === "h" ? (a < 0 && (s = 0), a > 24 && (s = 24)) : (a < 0 && (s = 0), a > 59 && (s = 59)), s;
    }, i = (a) => {
      const o = (a || "").split(":");
      if (o.length >= 2) {
        const s = d(Number.parseInt(o[0], 10)), p = s === 24 ? 0 : d(Number.parseInt(o[1], 10));
        return {
          hours: s,
          minutes: p
        };
      } else if (a && a.indexOf(":") === -1)
        throw new Error(`${a} 不是有效的时间格式`);
      return null;
    }, c = (a) => `${r(a.hours)}:${r(a.minutes)}`, b = (a, o) => {
      const s = a.minutes + a.hours * 60, p = o.minutes + o.hours * 60;
      return s === p ? 0 : s > p ? 1 : -1;
    }, r = (a) => `${a}`.padStart(2, "0"), m = (a, o) => {
      const s = {
        hours: a.hours,
        minutes: a.minutes
      };
      return s.minutes += o.minutes, s.hours += o.hours, s.hours += Math.floor(s.minutes / 60), s.minutes = s.minutes % 60, s;
    }, w = U(() => {
      const a = [];
      let o = i(e.start);
      const s = i(e.end), p = i(e.step), h = i(e.minTime), S = i(e.maxTime);
      if (o && s && p)
        for (; b(o, s) <= 0; ) {
          let T = !1;
          h && b(o, h) < 0 && (T = !0), S && b(S, o) < 0 && (T = !0), a.push({
            value: c(o),
            disabled: T
          }), o = m(o, p);
        }
      return a;
    }), k = j([]);
    e.modelValue && (k.value = [e.modelValue]);
    const _ = j();
    te(
      () => e.modelValue,
      (a) => {
        a ? k.value = [e.modelValue] : k.value = [];
      }
    );
    const y = (a) => {
      a.disabled || (k.value = [a.value], _.value.slideUp(), t("update:modelValue", a.value), t("change", a.value), l && l(a.value));
    }, f = () => {
      k.value = [], t("update:modelValue", ""), t("clear"), l && l("");
    };
    return (a, o) => (g(), X(E(Ae), ce(a.$props, {
      ref_key: "selectDown",
      ref: _,
      "model-value": k.value,
      onClear: f
    }), {
      default: le(() => [
        B("ul", {
          class: L(`${E(A)}-select`)
        }, [
          (g(!0), C(q, null, ne(w.value, (s, p) => (g(), C("li", {
            key: p,
            class: L({ disabled: s.disabled, active: s.value === a.modelValue }),
            onClick: re((h) => y(s), ["stop"])
          }, J(s.value), 11, El))), 128))
        ], 2)
      ]),
      _: 1
    }, 16, ["model-value"]));
  }
}), Ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TimeSelect: _t
}, Symbol.toStringTag, { value: "Module" })), St = /* @__PURE__ */ K({
  __name: "Field",
  props: {
    data: {},
    type: { default: "input" },
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(), d = () => {
      var c;
      e.modelValue !== void 0 ? l.value = e.modelValue : l.value = (c = e.data) == null ? void 0 : c.value;
    };
    te(
      () => e.modelValue,
      () => {
        d();
      }
    ), te(
      () => l.value,
      (c) => {
        t("update:modelValue", c);
      }
    ), d();
    const i = U(() => {
      switch (e.type) {
        case "radio":
          return be(mt);
        case "checkbox":
          return be(gt);
        case "datePicker":
          return be(yt);
        case "select":
          return be(Je);
        case "switch":
          return be(bt);
        case "textarea":
          return be(wt);
        case "timePicker":
          return be(Ct);
        case "timeSelect":
          return be(_t);
        default:
          return be(Ke);
      }
    });
    return (c, b) => (g(), X(Ee(i.value), ce({
      modelValue: l.value,
      "onUpdate:modelValue": b[0] || (b[0] = (r) => l.value = r)
    }, c.data), null, 16, ["modelValue"]));
  }
}), Pl = ["textContent"], _e = /* @__PURE__ */ K({
  __name: "FormItem",
  props: {
    className: {},
    label: {},
    labelVisible: { type: Boolean, default: !1 },
    prop: {},
    required: { type: Boolean, default: !0 },
    verify: {},
    rules: { default: () => [] },
    showMessage: { type: Boolean, default: !0 },
    trigger: { default: "change" },
    labelWidth: {},
    size: {},
    error: { default: "" },
    type: { default: "" },
    data: {},
    modelValue: {}
  },
  emits: ["update:modelValue", "change"],
  setup(u, { expose: n, emit: e }) {
    var s;
    const t = u, l = e, d = oe(`${A}FormProps`, {});
    let i;
    d != null && d.rules && t.prop && d.rules[t.prop] && (i = d.rules[t.prop]);
    let c = [...t.rules];
    ((s = t.rules) == null ? void 0 : s.length) === 0 && !t.verify && i && (c = [...i]);
    const b = (p, h) => {
      const S = t[p];
      return S === h && d && Object.keys(d).length > 0 ? d[p] : S;
    }, r = ue({
      errorTips: "",
      // 有值时表示校验没通过有错误信息
      iconType: "",
      // 提示类型，
      rules2: c,
      trigger2: b("trigger", "change"),
      messageShow: b("showMessage", !0),
      controlValue: "",
      // 组件的值，改变事件时*/
      formSize: t.size ? t.size : d && d.size
    }), m = (p) => {
      p && (r.errorTips = p, r.iconType = "icon-failure");
    };
    if (m(t.error), te(
      () => t.error,
      (p) => {
        m(p);
      }
    ), t.verify) {
      const p = {
        required: "必填字段",
        mobile: "手机号格式不正确",
        tel: "电话号码不正确",
        mail: "请输入正确邮箱",
        digits: "必须为正整数",
        number: "必须为数字",
        phone: "请输入固话或手机"
      };
      t.verify.split(",").forEach((S) => {
        r.rules2.push({
          type: S,
          msg: p[S]
        });
      });
    }
    const w = U(() => {
      let p = !1;
      return b("required", !0) && r.rules2 && r.rules2.length > 0 && r.rules2.forEach((S) => {
        if (S.type === "required")
          return p = !0, !1;
      }), p;
    }), k = U(() => {
      const p = b("labelWidth", void 0);
      return p ? {
        width: p
      } : null;
    }), _ = (p) => {
      let h = p;
      return p === void 0 && (h = r.controlValue), new Promise((S, T) => {
        if (t.error)
          T(r.errorTips);
        else if (r.rules2) {
          const R = Dt(h, r.rules2);
          R === !0 ? (r.errorTips = "", r.iconType = "icon-success", S(r.controlValue)) : (r.errorTips = R, r.iconType = "icon-failure", T(r.errorTips));
        } else
          S(r.controlValue), console.log("没有校验规则通过");
      });
    }, y = (p) => {
      let h = "";
      r.rules2.forEach((S) => {
        S.type === "tips" && (h = S.msg);
      }), h && !p && (r.errorTips = h, r.iconType = "icon-tips");
    }, f = () => {
      r.errorTips = "", r.iconType = "";
    }, a = oe(`${A}GetFormItemFields`, ""), o = () => {
      (r.rules2.length > 0 || t.error) && a && a({
        validate: _,
        clear: f,
        prop: t.prop || `prop${(/* @__PURE__ */ new Date()).getTime()}`
        // 当有prop时随机添加一个
      });
    };
    return fe(`${A}ControlChange`, (p, h) => {
      t.type && l("update:modelValue", p), (h === "change" || !h) && l("change", p), r.controlValue = p, h !== "mounted" && (h === "focus" ? y(p) : r.trigger2 === "blur" ? h === "blur" && _(p).catch((S) => {
        console.log(S);
      }) : _(p).catch((S) => {
        console.log(S);
      }));
    }), se(() => {
      o();
    }), n({ validate: _, clearTips: f }), (p, h) => (g(), C("div", {
      class: L({
        className: p.className,
        [E(A) + "-form-item-error"]: r.errorTips !== "",
        [E(A) + "-form-item"]: !0,
        ["form-item-" + r.formSize]: r.formSize
      })
    }, [
      p.label || p.$slots.label ? ie((g(), C("label", {
        key: 0,
        class: L({ required: w.value, [E(A) + "-form-label"]: !0 }),
        style: Q(k.value)
      }, [
        Z(p.$slots, "label", {}, () => [
          pe(J(p.label), 1)
        ])
      ], 6)), [
        [me, !p.labelVisible]
      ]) : z("", !0),
      B("div", {
        class: L(`${E(A)}-form-box`)
      }, [
        t.type ? (g(), X(St, {
          key: 0,
          type: t.type,
          data: t.data,
          modelValue: t.modelValue
        }, null, 8, ["type", "data", "modelValue"])) : z("", !0),
        Z(p.$slots, "default"),
        r.iconType && r.messageShow && (r.rules2 && r.rules2.length > 0 || p.error) ? (g(), C(q, { key: 1 }, [
          r.errorTips === "" ? (g(), C("div", {
            key: 0,
            class: L(`${E(A)}-form-tips ${r.iconType}`)
          }, null, 2)) : (g(), C("div", {
            key: 1,
            class: L(`${E(A)}-form-tips`)
          }, [
            B("i", {
              class: L([r.iconType])
            }, null, 2),
            B("span", {
              textContent: J(r.errorTips)
            }, null, 8, Pl)
          ], 2))
        ], 64)) : z("", !0)
      ], 2),
      Z(p.$slots, "other")
    ], 2));
  }
}), Rl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Field: St,
  FormItem: _e
}, Symbol.toStringTag, { value: "Module" })), nt = K({
  props: {
    slots: [Object, String]
  },
  // @ts-ignore
  setup(u) {
    return () => [Ve("div", {}, u.slots)];
  }
}), zl = ["onClick"], Nl = { key: 0 }, Hl = ["onClick"], jl = { key: 1 }, Fl = {
  key: 0,
  class: "tabs-content"
}, Vt = /* @__PURE__ */ K({
  __name: "Tabs",
  props: {
    modelValue: { default: "tab-1" },
    beforeLeave: {},
    showContent: { type: Boolean, default: !0 },
    tabPosition: { default: "top" },
    closable: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(e.modelValue), d = (S, T) => {
      if (!S.disabled) {
        if (e.beforeLeave && !e.beforeLeave(S))
          return console.log("阻止点击"), !1;
        l.value = S.name || "tab-" + (T + 1), t("change", S, T), t("update:modelValue", l.value);
      }
    }, i = j([]);
    fe(`${A}ChildrenList`, (S) => {
      i.value.push(S);
    });
    const c = (S, T) => S.name ? S.name === l.value : l.value === "tab-" + (T + 1), b = () => {
      i.value.forEach((S) => {
        S.name === e.modelValue && (l.value = S.name);
      });
    }, r = j(), m = j(), w = j(), k = j(!1), _ = j(0), y = j(), f = j(!0), a = j(!1), o = U(() => ({
      transform: `translateX(-${_.value}px)`
    })), s = () => {
      he(() => {
        if (["top", "bottom"].includes(e.tabPosition)) {
          const S = r.value.offsetWidth, T = m.value.offsetWidth;
          k.value = S <= T, y.value = S;
        }
      });
    }, p = (S) => {
      if (["top", "bottom"].includes(e.tabPosition)) {
        const T = w.value.offsetWidth, R = Math.abs(T - 100), M = m.value.offsetWidth;
        let x = 0;
        if (S) {
          if (a.value)
            return;
          f.value = !1, a.value = !1, x = _.value + R, x > M - T && (x = M - T, a.value = !0);
        } else {
          if (f.value)
            return;
          a.value = !1, f.value = !1, x = _.value - R, x < 0 && (x = 0, f.value = !0);
        }
        _.value = x;
      }
    }, h = (S, T) => {
      T && i.value.splice(S, 1);
    };
    return te(
      () => e.tabPosition,
      (S) => {
        ["left", "right"].includes(S) ? (_.value = 0, y.value = 0) : s();
      }
    ), se(() => {
      b(), s(), window.addEventListener("resize", s, !1);
    }), ke(() => {
      window.removeEventListener("resize", s, !1);
    }), (S, T) => (g(), C("div", {
      class: L(`${E(A)}-tabs ${S.tabPosition}`),
      ref_key: "tabsEl",
      ref: r
    }, [
      Z(S.$slots, "default"),
      B("div", {
        class: "tabs-nav",
        style: Q({ width: y.value ? y.value + "px" : "" })
      }, [
        Z(S.$slots, "leftExtra"),
        k.value ? (g(), C("a", {
          key: 0,
          class: L(["tabs-prev icon-arrow", { disabled: f.value }]),
          onClick: T[0] || (T[0] = (R) => p(0))
        }, null, 2)) : z("", !0),
        B("div", {
          class: "tabs-scroll",
          ref_key: "tabsScrollEl",
          ref: w
        }, [
          B("div", {
            class: "tabs-tab",
            ref_key: "tabsTabEl",
            ref: m,
            style: Q(o.value)
          }, [
            (g(!0), C(q, null, ne(i.value, (R, M) => {
              var x, v;
              return g(), C("div", {
                key: M,
                class: L(["tabs-item", {
                  disabled: R.disabled,
                  active: c(R, M)
                }]),
                onClick: (I) => d(R, M)
              }, [
                R.label ? (g(), C("span", Nl, [
                  pe(J(R.label) + " ", 1),
                  R.closable || S.closable ? (g(), C("i", {
                    key: 0,
                    class: "icon-close",
                    onClick: re((I) => h(M, R.closable || S.closable), ["stop"])
                  }, null, 8, Hl)) : z("", !0)
                ])) : (x = R.slots) != null && x.label ? (g(), C("span", jl, [
                  de(E(nt), {
                    slots: (v = R.slots) == null ? void 0 : v.label()
                  }, null, 8, ["slots"])
                ])) : z("", !0)
              ], 10, zl);
            }), 128))
          ], 4)
        ], 512),
        k.value ? (g(), C("a", {
          key: 1,
          class: L(["tabs-next icon-arrow", { disabled: a.value }]),
          onClick: T[1] || (T[1] = (R) => p(1))
        }, null, 2)) : z("", !0),
        Z(S.$slots, "rightExtra")
      ], 4),
      Z(S.$slots, "content"),
      S.showContent ? (g(), C("div", Fl, [
        (g(!0), C(q, null, ne(i.value, (R, M) => ie((g(), C("div", { key: M }, [
          de(E(nt), {
            slots: R.slots
          }, null, 8, ["slots"])
        ], 512)), [
          [me, c(R, M)]
        ])), 128))
      ])) : z("", !0)
    ], 2));
  }
}), Tt = K({
  name: "TabPane",
  props: {
    className: String,
    label: String,
    name: String,
    disabled: Boolean,
    closable: Boolean
  },
  setup(u, { slots: n }) {
    const e = oe(`${A}ChildrenList`);
    e && e(Object.assign({}, u, { slots: n }));
  },
  render() {
    return null;
  }
}), Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TabPane: Tt,
  Tabs: Vt
}, Symbol.toStringTag, { value: "Module" })), Ze = Fe.create({
  baseURL: {}.VITE_APP_URL,
  // api的base_url
  //baseURL: 'http://localhost:3001/api', // api的base_url
  timeout: 6e3,
  // request timeout
  headers: {}
});
Ze.interceptors.request.use(
  (u) => u,
  (u) => {
    Promise.reject(u);
  }
);
Ze.interceptors.response.use(
  (u) => u.data.code === 0 ? Promise.reject(u) : u,
  (u) => Promise.reject(u)
);
const Ul = ["innerHTML"], Yl = /* @__PURE__ */ K({
  __name: "AutoForm",
  props: {
    modelValue: {},
    data: { default: () => [] },
    formData: { default: () => ({}) },
    dict: { default: () => ({}) }
  },
  emits: ["update:modelValue", "change"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(), i = ue({
      formValue: Object.assign({}, t.modelValue),
      urlLink: {}
    }), c = (a) => new Promise((o, s) => {
      d.value.validate(a).then(() => {
        o(i.formValue);
      }).catch((p) => {
        s(p);
      });
    }), b = () => {
      d.value.resetForm();
    }, r = (a, o) => {
      a.forEach((s) => {
        var p;
        switch (s.type) {
          case "div":
            r(s.list);
            break;
          case "tabs":
            s.columns.forEach((h) => {
              r(h.list);
            });
            break;
          case "text":
            break;
          case "component":
            i.formValue[s.name] = s.control.value;
            break;
          default:
            if (o === "dict") {
              const h = _(((p = s.config) == null ? void 0 : p.optionsKey) ?? s.name);
              h && (s.control.options = h);
            } else {
              if (s.config && s.config.url) {
                const h = m(s.config.url);
                h && (i.urlLink[h] = s);
              }
              k(s);
            }
            break;
        }
      });
    }, m = (a) => {
      const o = new RegExp("(?<=\\${)(.*?)(?=})", "g"), s = a.match(o);
      return s && s[0];
    };
    te(
      () => i.formValue,
      (a) => {
        l("update:modelValue", a);
      },
      { deep: !0 }
    ), te(
      () => t.dict,
      () => {
        r(t.data, "dict");
      },
      { deep: !0 }
    );
    const w = (a, o) => {
      l("change", a, o), i.urlLink[o] && f(i.urlLink[o], !0);
    }, k = (a) => {
      var o, s;
      if (["radio", "checkbox", "select"].includes(a.type))
        if (a.config && a.config.url)
          f(a);
        else {
          const p = _(((o = a.config) == null ? void 0 : o.optionsKey) ?? a.name);
          ((s = a.control.options) == null ? void 0 : s.length) === 0 && p && (a.control.options = p);
        }
      return a.control;
    }, _ = (a) => {
      if (a === !1)
        return [];
      const o = t.dict[a];
      if (o && Object.prototype.toString.call(o) === "[object Object]") {
        const s = [];
        for (const p in o)
          s.push({
            label: o[p],
            value: p
          });
        return s;
      }
      return o;
    }, y = (a, o) => {
      var h, S;
      const s = (h = a.config) == null ? void 0 : h.linkValue, p = (S = a.config) == null ? void 0 : S.linkResult;
      if (s) {
        const R = new Function("$", `return (${s})`)(i.formValue);
        return p === "disabled" ? (t.data[o].control.disabled = R, !0) : R;
      }
      return !0;
    }, f = (a, o) => {
      const { url: s, method: p = "post", params: h = {}, afterResponse: S } = a.config, T = m(s);
      let R = s, M = h;
      if (T) {
        R = s.replace("${" + T + "}", i.formValue[T]);
        const v = s.split("?")[1].split("&");
        let I = "";
        if (v)
          for (const V in v)
            v[V].includes("${" + T + "}") && (I = v[V].split("=")[0]);
        M = Object.assign({}, h, { [I]: i.formValue[T] });
      }
      const x = window.sessionStorage.getItem(a.name);
      x && !o ? a.control.options = JSON.parse(x) : Ze({
        method: p,
        url: R,
        data: M,
        params: p === "get" ? h : {}
      }).then((v) => {
        let I = v.data.data;
        typeof S == "function" && (I = S(I)), a.control.options = I, window.sessionStorage.setItem(a.name, JSON.stringify(I));
      }).catch((v) => {
        typeof S == "function" && S(v, "catch"), a.control.options = [];
      });
    };
    return se(() => {
      r(t.data);
    }), n({ validate: c, resetForm: b }), (a, o) => (g(), X(E(pt), ce(a.formData, {
      ref_key: "autoFormEl",
      ref: d
    }), {
      default: le(() => [
        (g(!0), C(q, null, ne(a.data, (s, p) => (g(), C(q, { key: p }, [
          y(s, p) ? (g(), C(q, { key: 0 }, [
            s.type === "tabs" ? (g(), X(E(Vt), ce({
              key: 0,
              ref_for: !0
            }, s.tabs), {
              default: le(() => [
                (g(!0), C(q, null, ne(s.columns, (h, S) => (g(), X(E(Tt), {
                  key: `pane${S}`,
                  label: h.tabPane.label
                }, {
                  default: le(() => [
                    (g(!0), C(q, null, ne(h.list, (T, R) => (g(), C(q, { key: R }, [
                      T.type === "component" ? (g(), X(E(_e), ce({
                        key: 0,
                        ref_for: !0
                      }, T.formItem), {
                        default: le(() => [
                          (g(), X(Ee(T.component), ce({
                            modelValue: i.formValue[T.name],
                            "onUpdate:modelValue": (M) => i.formValue[T.name] = M,
                            ref_for: !0
                          }, T.control, {
                            onChange: (M) => w(M, T.name)
                          }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
                        ]),
                        _: 2
                      }, 1040)) : (g(), X(E(_e), ce({
                        key: 1,
                        ref_for: !0
                      }, T.formItem, {
                        type: T.type,
                        modelValue: i.formValue[T.name],
                        "onUpdate:modelValue": (M) => i.formValue[T.name] = M,
                        data: T.control,
                        onChange: (M) => w(M, T.name)
                      }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "data", "onChange"]))
                    ], 64))), 128))
                  ]),
                  _: 2
                }, 1032, ["label"]))), 128))
              ]),
              _: 2
            }, 1040)) : s.type === "div" ? (g(), C("div", ce({
              key: 1,
              ref_for: !0
            }, s.control, { class: "div-row" }), [
              (g(!0), C(q, null, ne(s.list, (h, S) => (g(), C(q, { key: S }, [
                h.type === "component" ? (g(), X(E(_e), ce({
                  key: 0,
                  ref_for: !0
                }, h.formItem), {
                  default: le(() => [
                    (g(), X(Ee(h.component), ce({
                      modelValue: i.formValue[h.name],
                      "onUpdate:modelValue": (T) => i.formValue[h.name] = T,
                      ref_for: !0
                    }, h.control, {
                      onChange: (T) => w(T, h.name)
                    }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
                  ]),
                  _: 2
                }, 1040)) : (g(), X(E(_e), ce({
                  key: 1,
                  ref_for: !0
                }, h.formItem, {
                  type: h.type,
                  modelValue: i.formValue[h.name],
                  "onUpdate:modelValue": (T) => i.formValue[h.name] = T,
                  data: h.control,
                  onChange: (T) => w(T, h.name)
                }), null, 16, ["type", "modelValue", "onUpdate:modelValue", "data", "onChange"]))
              ], 64))), 128))
            ], 16)) : s.type === "text" ? (g(), C("div", ce({
              key: 2,
              class: "form-title",
              innerHTML: s.name,
              ref_for: !0
            }, s.control), null, 16, Ul)) : s.type === "component" ? (g(), X(E(_e), ce({
              key: 3,
              ref_for: !0
            }, s.formItem), {
              default: le(() => [
                (g(), X(Ee(s.component), ce({
                  modelValue: i.formValue[s.name],
                  "onUpdate:modelValue": (h) => i.formValue[s.name] = h,
                  ref_for: !0
                }, s.control, {
                  onChange: (h) => w(h, s.name)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange"]))
              ]),
              _: 2
            }, 1040)) : (g(), X(E(_e), ce({
              key: 4,
              ref_for: !0
            }, s.formItem, {
              modelValue: i.formValue[s.name],
              "onUpdate:modelValue": (h) => i.formValue[s.name] = h,
              type: s.type,
              data: s.control,
              onChange: (h) => w(h, s.name)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "type", "data", "onChange"]))
          ], 64)) : z("", !0)
        ], 64))), 128))
      ]),
      _: 1
    }, 16));
  }
}), Kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AutoForm: Yl
}, Symbol.toStringTag, { value: "Module" })), Gl = ["textContent"], Jl = /* @__PURE__ */ K({
  __name: "BackTop",
  props: {
    text: { default: "返回顶部" },
    height: { default: 200 },
    bottom: { default: 30 },
    right: { default: 30 }
  },
  emits: ["click"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(!1), d = j();
    let i = null;
    const c = () => {
      m();
      function m() {
        const w = We();
        w > 0 && (i = window.requestAnimationFrame(m), window.scrollTo(0, w - w / 5));
      }
      t("click");
    }, b = () => {
      i && window.cancelAnimationFrame(i);
    };
    se(() => {
      he(() => {
        document.body.appendChild(d.value), window.addEventListener("scroll", r), document.addEventListener("click", b);
      });
    }), ke(() => {
      window.removeEventListener("scroll", r), document.removeEventListener("click", b), d.value && d.value.parentNode && d.value.parentNode.removeChild(d.value);
    });
    const r = () => {
      l.value = We() > e.height;
    };
    return (m, w) => (g(), C("div", {
      ref_key: "element",
      ref: d,
      class: L(`${E(A)}-back-top`),
      style: Q({
        right: m.right + "px",
        bottom: m.bottom + "px",
        opacity: l.value ? 1 : 0,
        visibility: l.value ? "visible" : "hidden"
      }),
      onClick: re(c, ["stop"])
    }, [
      B("a", {
        href: "javascript:",
        class: "icon-top",
        textContent: J(m.text)
      }, null, 8, Gl)
    ], 6));
  }
}), Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BackTop: Jl
}, Symbol.toStringTag, { value: "Module" })), Xl = /* @__PURE__ */ K({
  __name: "Badge",
  props: {
    value: {},
    dot: { type: Boolean, default: !1 },
    max: { default: 99 },
    type: { default: "danger" }
  },
  setup(u) {
    const n = u, e = U(() => typeof n.value == "number" && !isNaN(n.value) && n.value > n.max ? n.max + "+" : n.value), t = U(() => n.value && n.dot);
    return (l, d) => (g(), C("span", {
      class: L({ [E(A) + "-badge"]: !0, dot: t.value, [l.type]: !0 })
    }, [
      Z(l.$slots, "default"),
      B("sup", null, J(e.value), 1)
    ], 2));
  }
}), Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Badge: Xl
}, Symbol.toStringTag, { value: "Module" })), ql = { class: "breadcrumb clearfix" }, eo = ["textContent"], to = /* @__PURE__ */ K({
  __name: "Breadcrumb",
  props: {
    data: {},
    separator: { default: ">" }
  },
  setup(u) {
    return (n, e) => {
      const t = Ue("router-link");
      return g(), C("div", ql, [
        (g(!0), C(q, null, ne(n.data, (l, d) => (g(), C(q, null, [
          l.href ? (g(), X(t, {
            key: d,
            class: L({ "last-child": n.data.length === d + 1 }),
            to: l.href
          }, {
            default: le(() => [
              pe(J(l.title), 1)
            ]),
            _: 2
          }, 1032, ["class", "to"])) : (g(), C("span", {
            key: `span${d}`,
            textContent: J(l.title)
          }, null, 8, eo)),
          n.data.length > d + 1 ? (g(), C("span", {
            key: d + 100,
            class: "separator"
          }, J(n.separator), 1)) : z("", !0)
        ], 64))), 256))
      ]);
    };
  }
}), lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Breadcrumb: to
}, Symbol.toStringTag, { value: "Module" })), oo = ["type", "disabled"], no = ["href"], Le = /* @__PURE__ */ K({
  __name: "Button",
  props: {
    type: { default: "" },
    size: { default: "" },
    href: { default: "" },
    icon: { default: "" },
    round: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    nativeType: { default: "" },
    width: { default: "" },
    name: { default: "" },
    loading: { type: Boolean, default: !1 },
    plain: { type: Boolean },
    circle: { type: Boolean }
  },
  emits: ["click"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = oe(`${A}GroupConfig`, {}), d = oe(`${A}BtnClick`, ""), i = U(() => e.loading ? !0 : Ce(l.disabled || e.disabled) || !1), c = j(e.width || l.width), b = U(() => {
      const k = e.size || l.size || "";
      return {
        [`${A}-btn`]: !0,
        "is-round": e.round || l.round,
        [`${A}-btn-` + e.type]: e.type,
        disabled: i.value,
        [k]: k,
        "is-plain": e.plain || l.plain,
        "is-circle": e.circle || l.plain
      };
    }), r = U(() => e.href ? e.href : null), m = (k) => {
      i.value || (t("click", k), d && d(k, e.name));
    }, w = U(() => e.loading ? "loading" : e.icon);
    return (k, _) => k.nativeType ? (g(), C("button", ce({ key: 0 }, k.$attrs, {
      type: k.nativeType,
      class: b.value,
      disabled: i.value,
      style: { width: c.value },
      onClick: m
    }), [
      w.value ? (g(), C("i", {
        key: 0,
        class: L(`icon-${[w.value]} ${E(A)}-icon`)
      }, null, 2)) : z("", !0),
      Z(k.$slots, "default")
    ], 16, oo)) : (g(), C("a", ce({ key: 1 }, k.$attrs, {
      class: b.value,
      href: i.value ? null : r.value,
      style: { width: c.value },
      onClick: m
    }), [
      w.value ? (g(), C("i", {
        key: 0,
        class: L(`icon-${[w.value]} ${E(A)}-icon`)
      }, null, 2)) : z("", !0),
      Z(k.$slots, "default")
    ], 16, no));
  }
}), so = /* @__PURE__ */ K({
  __name: "ButtonGroup",
  props: {
    size: { default: "" },
    round: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    width: { default: "" },
    plain: { type: Boolean }
  },
  emits: ["click"],
  setup(u, { emit: n }) {
    const e = u, t = n;
    return fe(`${A}GroupConfig`, e), fe(`${A}BtnClick`, (l, d) => {
      e.disabled || t("click", l, d);
    }), (l, d) => (g(), C("div", {
      class: L({ [`${E(A)}-btn-group`]: !0 })
    }, [
      Z(l.$slots, "default")
    ], 2));
  }
}), ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Le,
  ButtonGroup: so
}, Symbol.toStringTag, { value: "Module" })), io = {
  name: "ItemList",
  props: {
    childItem: Object,
    styleCls: Object,
    className: String
  },
  render() {
    const u = ["carousel-slide"], n = this.childItem.className;
    return n && u.push(n), this.className && u.push(this.className), Ve(
      "div",
      {
        class: u.join(" "),
        style: this.styleCls
      },
      [Z(this.childItem.slots, "default")]
    );
  }
}, ro = {
  key: 0,
  class: "direction-nav"
}, uo = {
  key: 1,
  class: "control-nav"
}, co = ["onClick"], fo = /* @__PURE__ */ K({
  __name: "Carousel",
  props: {
    loop: { type: Boolean },
    move: { default: 1 },
    itemWidth: {},
    itemHeight: {},
    active: { default: 1 },
    duration: { default: 500 },
    showTime: { default: 3e3 },
    autoPlay: { type: Boolean },
    pauseOnHover: { type: Boolean, default: !0 },
    controlNav: { type: Boolean, default: !0 },
    directionNav: { type: Boolean, default: !0 },
    showNumber: { default: 1 },
    direction: { default: "h" },
    type: { default: "" }
  },
  emits: ["slideBefore", "slideAfter"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = ue({
      children: [],
      index: e.active,
      // 从1开始
      width: 0,
      duration2: 0,
      // timer: 0, // 控制自动播放
      maxMove: 0,
      isAnimation: !1,
      moveDirection: 0,
      // 移动方向1右-1左
      defaultMove: 0
      // 初始移动位置
    });
    fe(`${A}ChildrenList`, l.children);
    const d = j(), i = U(() => {
      const h = l.children.length;
      let S = l.width, T = "translateX";
      const R = ue({
        width: ""
      });
      if (e.direction === "v" ? (S = e.itemHeight, T = "translateY") : R.width = h * S + "px", S && h > 0) {
        const M = -S * e.move;
        let x = M * l.moveDirection;
        if (e.loop)
          x += M;
        else if (x = M * (l.index - 1), e.direction === "h") {
          const v = d.value.offsetWidth - h * S;
          x < v && (x = v);
        }
        return Object.assign(
          {
            overflow: "hidden",
            transform: `${T}(${x}px)`,
            transition: `transform ${l.duration2}ms`
          },
          R
        );
      } else
        return {};
    }), c = U(() => {
      const h = ue({
        "overflow-x": "hidden",
        height: "",
        "overflow-y": ""
      });
      return l.width && Object.assign(h, { width: l.width * e.showNumber + "px" }), e.direction === "v" && (e.itemHeight && (h.height = e.itemHeight * e.showNumber + "px"), h["overflow-y"] = "hidden"), h;
    }), b = () => {
      let h = 0;
      !e.loop && e.showNumber > 1 && (h = Math.ceil(e.showNumber / e.move) - 1), l.maxMove = Math.ceil((l.children.length - h) / e.move), e.loop && l.children.length >= e.move && w(-1);
    }, r = (h) => {
      if (!l.isAnimation) {
        if (h === 1)
          if (l.maxMove > l.index)
            l.index++;
          else if (e.loop)
            l.index = 1;
          else
            return;
        else if (l.index > 1)
          l.index--;
        else if (e.loop)
          l.index = l.maxMove;
        else
          return;
        l.isAnimation = !0, t("slideBefore", l.index), l.moveDirection = h, l.duration2 = e.duration, m(h);
      }
    }, m = (h) => {
      setTimeout(() => {
        e.loop && (l.moveDirection = 0, l.duration2 = 0, w(h)), l.isAnimation = !1, t("slideAfter", l.index);
      }, e.duration);
    }, w = (h, S) => {
      if (!e.loop)
        return;
      const T = S || e.move;
      if (h === 1) {
        const R = l.children.slice(0, T);
        l.children.splice(0, T), R.forEach((M) => {
          l.children.push(M);
        });
      } else {
        const R = l.children.slice(l.children.length - T);
        for (let M = R.length; M > 0; M--)
          l.children.unshift(R[M - 1]);
        l.children.splice(l.children.length - T);
      }
    }, k = (h) => {
      h > l.index ? w(1, h - l.index) : w(-1, l.index - h), l.index = h;
    };
    let _ = 0;
    const y = () => {
      e.autoPlay && (_ = setInterval(() => {
        r(1);
      }, e.showTime));
    }, f = () => {
      e.pauseOnHover && e.autoPlay && clearInterval(_);
    }, a = () => {
      y();
    }, o = (h) => {
      if (e.type === "card") {
        const S = { 3: 2, 5: 3, 7: 4 };
        let T = S[e.showNumber] - 2 + l.index, R = 0;
        e.loop && (T = S[e.showNumber] + l.moveDirection, R = S[e.showNumber]);
        let M = "";
        return T === h && (M = "big-size"), R === h && (M += " normal-size"), M;
      }
    }, s = () => {
      e.itemWidth ? l.width = e.itemWidth : l.width = d.value.offsetWidth / e.showNumber;
    }, p = () => {
      s();
    };
    return se(() => {
      b(), he(() => {
        s();
      }), y(), window.addEventListener("resize", p);
    }), Ye(() => {
      window.removeEventListener("resize", p), l.children = [];
    }), (h, S) => (g(), C("div", {
      ref_key: "domEl",
      ref: d,
      class: L({
        [E(A) + "-carousel"]: !0,
        vertical: h.direction === "v",
        [h.type]: h.type
      }),
      onMouseleave: a,
      onMouseover: f
    }, [
      B("div", {
        class: "carousel-container",
        style: Q(c.value)
      }, [
        Z(h.$slots, "default"),
        B("div", {
          style: Q(i.value),
          class: "carousel-transform clearfix"
        }, [
          (g(!0), C(q, null, ne(l.children, (T, R) => (g(), X(io, {
            key: `item${R}`,
            "child-item": T,
            "class-name": o(R),
            "style-cls": { width: l.width + "px", height: h.itemHeight + "px" }
          }, null, 8, ["child-item", "class-name", "style-cls"]))), 128))
        ], 4)
      ], 4),
      h.directionNav ? (g(), C("div", ro, [
        B("a", {
          class: L(["carousel-prev", { disabled: !h.loop && l.index <= 1 }]),
          onClick: S[0] || (S[0] = (T) => r(-1))
        }, null, 2),
        B("a", {
          class: L(["carousel-next", { disabled: !h.loop && l.index >= l.maxMove }]),
          onClick: S[1] || (S[1] = (T) => r(1))
        }, null, 2)
      ])) : z("", !0),
      h.controlNav ? (g(), C("div", uo, [
        (g(!0), C(q, null, ne(l.maxMove, (T) => (g(), C("a", {
          key: T,
          href: "javascript:",
          class: L({ "control-nav-active": l.index === T }),
          onClick: (R) => k(T)
        }, J(T), 11, co))), 128))
      ])) : z("", !0)
    ], 34));
  }
}), po = K({
  name: "CarouselItem",
  props: {
    className: String
  },
  setup(u, { slots: n }) {
    const e = oe(`${A}ChildrenList`);
    return e.push({
      slots: n,
      props: u
    }), {
      childrenList: e
    };
  },
  render() {
    return null;
  }
}), mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Carousel: fo,
  CarouselItem: po
}, Symbol.toStringTag, { value: "Module" })), go = {
  key: 1,
  viewBox: "0 0 50 50",
  class: "loading-svg"
}, ho = /* @__PURE__ */ B("circle", {
  class: "svg-path",
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none"
}, null, -1), vo = [
  ho
], Be = /* @__PURE__ */ K({
  __name: "Loading",
  props: {
    text: {},
    background: {},
    spinner: {},
    lock: { type: Boolean },
    el: { default: () => ({}) },
    zIndex: {},
    modelValue: { type: Boolean, default: !1 }
  },
  setup(u, { expose: n }) {
    const e = u, t = ue({
      visible: e.modelValue,
      scrollbarWidth: 17
    });
    return te(
      () => e.modelValue,
      (i) => {
        t.visible = i;
      }
    ), se(() => {
      he(() => {
        t.scrollbarWidth = ht();
      });
    }), n({ close: () => {
      t.visible = !1, e.lock && (document.body.style.overflow = "", document.body.style.paddingRight = "");
    }, open: () => {
      t.visible = !0, e.lock && (document.body.style.overflow = "hidden", document.body.style.paddingRight = t.scrollbarWidth + "px");
    } }), (i, c) => (g(), X(we, {
      name: `${E(A)}-loading-fade`
    }, {
      default: le(() => [
        ie(B("div", {
          style: Q({ backgroundColor: i.background || "", "z-index": i.zIndex }),
          class: L({
            "no-background": i.background === "none",
            [E(A) + "-loading-full"]: !i.el,
            [E(A) + "-loading"]: !0
          })
        }, [
          B("div", {
            class: L(`${E(A)}-loading-spinner`)
          }, [
            i.spinner ? (g(), C("i", {
              key: 0,
              class: L([i.spinner, [E(A) + "-icon-rotate"]])
            }, null, 2)) : (g(), C("svg", go, vo)),
            i.text ? (g(), C("p", {
              key: 2,
              class: L(`${E(A)}-loading-text`)
            }, J(i.text), 3)) : z("", !0)
          ], 2)
        ], 6), [
          [me, t.visible]
        ])
      ]),
      _: 1
    }, 8, ["name"]));
  }
}), yo = { key: 0 }, bo = {
  key: 1,
  class: "empty-text"
}, ko = ["onClick"], wo = {
  key: 0,
  class: "icon-hook"
}, Co = {
  key: 4,
  class: "icon-arrow"
}, _o = /* @__PURE__ */ K({
  __name: "Cascader",
  props: {
    modelValue: { default: () => [] },
    multiple: { type: Boolean },
    filterable: { type: Boolean },
    downClass: {},
    options: { default: () => [] },
    optionsKey: { default: () => ({ label: "label", value: "value" }) },
    showAllLevels: { type: Boolean, default: !0 },
    emptyText: { default: "暂无数据" },
    lazy: { type: Boolean },
    lazyLoad: {},
    checkAny: { type: Boolean }
  },
  emits: ["update:modelValue", "change", "input"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = ue({
      downDataList: [],
      // 下拉面板的数据
      showLabel: [],
      // 用于展示的值，格式化后显示于输入框的值
      checked: [],
      // 用来判断点击选中状态
      multipleChecked: [],
      // 多选时，用于临时保存勾选的值
      loadingId: "",
      // 异步加载时用于显示加载状态
      timer: 0,
      lazyOptions: e.options,
      showValue: []
      // 用于展示的文本值及对应value值，格式化后显示于输入框的值
    }), { downDataList: d, loadingId: i, showLabel: c } = Me(l), { optionsKey: b } = Me(e), r = b.value.label, m = b.value.value, w = j(), k = j(e.modelValue.join(","));
    te(
      () => e.options,
      (P) => {
        l.lazyOptions = P, e.filterable && O("`");
      }
    );
    const _ = U(() => {
      const P = A + "-cascader-down";
      return e.downClass ? e.downClass + " " + P : P;
    }), y = U(() => {
      const P = [];
      return e.lazy ? F(l.lazyOptions, {}) : F(e.options, {}), P;
      function F($, H) {
        $.forEach((D) => {
          const W = JSON.parse(JSON.stringify(D));
          delete W.children, delete W._fullLabel, delete W._fullValue;
          const Y = D.children && (D.children.length > 0 || e.lazy);
          D._fullLabel = H.fullLabel ? H.fullLabel + "," + D[r] : "", D._fullValue = H.fullValue ? H.fullValue + "," + D[m] : "", P.push(
            Object.assign({}, W, {
              tid: H.parentId,
              hasChild: Y,
              fullLabel: D._fullLabel,
              fullValue: D._fullValue
            })
          ), Y && F(D.children, {
            parentId: D[m],
            fullLabel: D._fullLabel || D[r],
            fullValue: D._fullValue || D[m]
          });
        });
      }
    }), f = () => {
      var P;
      if ((P = e.modelValue) != null && P.length) {
        l.showLabel = [], e.modelValue.forEach((F) => {
          l.showLabel.push(F.replace(/,/g, "/"));
        });
        for (let F = 0; F < e.modelValue.length; F++)
          y.value.forEach(($) => {
            if ($.fullValue && $.fullValue === e.modelValue[F]) {
              let H = $.fullLabel || $[r];
              e.showAllLevels || (H = H.split(",").pop()), l.showLabel.splice(F, 1, H.replace(/,/g, "/"));
            }
          });
      } else
        l.showLabel = [];
    };
    te(
      () => e.modelValue,
      () => {
        f();
      }
    ), f();
    const a = (P) => y.value.filter((F) => F.tid === P), o = oe(`${A}ControlChange`, ""), s = (P) => {
      t("update:modelValue", P), t("change", P), w.value.slideUp(), o && o(P);
    }, p = () => {
      l.downDataList = [];
      const P = a();
      P && P.length > 0 && (h(P), l.downDataList.push(P));
      const F = e.modelValue[0];
      if (F && F.length > 0) {
        const $ = F.split(",");
        for (let H = 0; H < $.length - 1; H++) {
          const D = a($[H]);
          D != null && D.length && (h(D), l.downDataList.push(D));
        }
      }
    }, h = (P) => {
      P.forEach((F) => {
        if (F.hasChild && l.checked.includes(F[m])) {
          const $ = a(F[m]), H = $.filter(
            (D) => l.checked.includes(D[m])
          );
          ($ == null ? void 0 : $.length) !== (H == null ? void 0 : H.length) && (F.someSelect = !0);
        }
      });
    }, S = (P) => {
      const F = JSON.parse(JSON.stringify(e.modelValue));
      if (P) {
        const $ = F.join(",").split(",");
        l.checked = Array.from(new Set($)), e.checkAny && (l.checked = F), e.lazy && y.value.length === 0 ? G() : p(), e.multiple && (l.multipleChecked = F);
      } else if (e.multiple)
        s(l.multipleChecked);
      else if (e.checkAny) {
        let $ = [];
        k.value && ($ = [k.value]), s($);
      }
    }, T = (P, F, $) => {
      if (!e.multiple && $.target.className === "checked" || P.disabled)
        return;
      l.downDataList.splice(F + 1, l.downDataList.length - F + 1);
      const H = a(P[m]);
      H && H.length > 0 ? l.downDataList.push(H) : ((!e.multiple && !e.lazy || !P.hasChild) && (e.checkAny || s([P.fullValue || P[m]])), e.lazy && (l.loadingId = P[m], G(P, "childrenClick"))), e.multiple || (l.checked = (P.fullValue || P[m]).split(","));
    }, R = (P) => {
      if (e.checkAny)
        return l.checked.indexOf(P.fullValue || P[m]) !== -1;
      const F = l.checked.indexOf(P[m]);
      return e.multiple && P.hasChild && F !== -1 ? !P.someSelect : F !== -1;
    }, M = () => {
      l.checked = [], s([]);
    }, x = (P, F) => {
      const $ = l.checked.indexOf(P);
      F ? $ === -1 && l.checked.push(P) : $ !== -1 && l.checked.splice($, 1);
    }, v = (P, F) => {
      const $ = l.multipleChecked.indexOf(P);
      F && $ === -1 && l.multipleChecked.push(P), !F && $ !== -1 && l.multipleChecked.splice($, 1);
    }, I = (P, F) => {
      if (P.disabled)
        return;
      let $ = P[m];
      e.checkAny && ($ = P.fullValue || P[m]), x($, F), e.checkAny || D(P, F), P.hasChild && !e.checkAny ? H(P, F) : v(P.fullValue || P[m], F), P.someSelect = !1;
      function H(W, Y) {
        a(W[m]).forEach((ae) => {
          ae.disabled || (ae.someSelect = !1, x(ae[m], Y), ae.hasChild ? H(ae, Y) : v(ae.fullValue, Y));
        });
      }
      function D(W, Y) {
        const ee = a(W.tid);
        let ae = !1;
        const ge = ee.filter(
          (ve) => l.checked.includes(ve[m])
        );
        (ge == null ? void 0 : ge.length) > 0 && (ge == null ? void 0 : ge.length) !== (ee == null ? void 0 : ee.length) ? ae = !0 : (ge == null ? void 0 : ge.length) === 0 && (ae = !1);
        const ye = y.value.filter((ve) => ve[m] === W.tid);
        ye && ye.length > 0 && ((!Y && !(ge != null && ge.length) || Y) && x(ye[0][m], Y), ye[0].someSelect = ae, ye[0].tid && D(ye[0], Y));
      }
    }, V = (P) => {
      const F = JSON.parse(JSON.stringify(e.modelValue));
      F.splice(P, 1), s(F);
    }, O = (P) => {
      l.downDataList = [];
      const F = [];
      y.value.forEach(($) => {
        !$.hasChild && ($.fullLabel.indexOf(P) !== -1 || P === "`") && F.push({
          [r]: $.fullLabel.replace(/,/g, "/"),
          [m]: $.fullValue,
          fullLabel: $.fullLabel,
          fullValue: $.fullValue
        });
      }), P || F.splice(0, F.length), l.downDataList.push(F);
    }, N = (P) => {
      clearTimeout(l.timer), l.timer = setTimeout(() => {
        e.lazy || O(P), t("input", P);
      }, 500);
    }, G = async (P, F) => {
      if (!e.lazyLoad)
        return;
      if (await $(P, F), !F && e.modelValue.length > 0) {
        const D = e.modelValue[0];
        if (D && D.length > 0) {
          const W = D.split(",");
          for (let Y = 0; Y < W.length - 1; Y++) {
            const ee = { [m]: W[Y] };
            await $(ee, F);
          }
        }
      }
      async function $(D, W) {
        e.lazyLoad && e.lazyLoad(D, (Y) => {
          if (!Y || Y && Y.length === 0) {
            s([D.fullValue || D[m]]), l.loadingId = "";
            return;
          }
          if (!D)
            l.lazyOptions = Y;
          else {
            if (D.hasChild = !0, H(l.lazyOptions, D, Y), W) {
              const ee = a(D[m]);
              ee && ee.length > 0 && l.downDataList.push(ee);
            }
            l.loadingId = "";
          }
          W || p();
        });
      }
      function H(D, W, Y) {
        D.forEach((ee) => {
          let ae = !1;
          ee[m] === W[m] && (ee.children = Y, ae = !0), !ae && ee.children && H(ee.children, W, Y);
        });
      }
    };
    return (P, F) => (g(), X(E(Ae), ce(P.$props, {
      ref_key: "selectDownEl",
      ref: w,
      class: { [`${E(A)}-cascader`]: !0 },
      "down-class": _.value,
      "model-value": E(c),
      options: [],
      lazyload: "",
      "options-key": "",
      onClear: M,
      onDelete: V,
      onInput: N,
      onToggleClick: S
    }), {
      default: le(() => [
        P.lazy && E(d).length === 0 ? (g(), C("p", yo, [
          de(Be, {
            "model-value": !0,
            background: "#fff",
            text: "加载中"
          })
        ])) : E(d).length === 0 ? (g(), C("ul", bo, [
          B("li", null, J(P.emptyText), 1)
        ])) : z("", !0),
        (g(!0), C(q, null, ne(E(d), ($, H) => (g(), C("ul", {
          key: H,
          onClick: F[3] || (F[3] = re(() => {
          }, ["stop"]))
        }, [
          (g(!0), C(q, null, ne($, (D) => (g(), C("li", {
            key: D[E(b).label],
            class: L({ checked: R(D), disabled: D.disabled }),
            onClick: (W) => T(D, H, W)
          }, [
            !D.hasChild && !P.multiple && !P.checkAny ? (g(), C("i", wo)) : z("", !0),
            P.checkAny && !P.multiple ? (g(), X(E(Ge), {
              key: 1,
              modelValue: k.value,
              "onUpdate:modelValue": F[0] || (F[0] = (W) => k.value = W),
              value: D.fullValue || D.value,
              onClick: F[1] || (F[1] = re(() => {
              }, ["stop"]))
            }, null, 8, ["modelValue", "value"])) : z("", !0),
            P.multiple ? (g(), X(E(Te), {
              key: 2,
              class: L({ "some-select": D.someSelect }),
              disabled: D.disabled,
              "model-value": R(D),
              onChange: (W) => I(D, W),
              onClick: F[2] || (F[2] = re(() => {
              }, ["stop"]))
            }, null, 8, ["class", "disabled", "model-value", "onChange"])) : z("", !0),
            B("a", null, J(D[E(b).label]), 1),
            P.lazy && D[E(b).value] === E(i) ? (g(), X(Be, {
              key: $[E(b).label],
              "model-value": !0,
              background: "#fff",
              class: "loading"
            })) : z("", !0),
            D.hasChild ? (g(), C("i", Co)) : z("", !0)
          ], 10, ko))), 128))
        ]))), 128))
      ]),
      _: 1
    }, 16, ["class", "down-class", "model-value"]));
  }
}), So = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Cascader: _o
}, Symbol.toStringTag, { value: "Module" })), Vo = /* @__PURE__ */ K({
  __name: "Collapse",
  props: {
    modelValue: { default: () => [] },
    accordion: { type: Boolean }
  },
  emits: ["change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = (d) => {
      t("change", d);
    };
    return fe(`${A}ChangePanel`, l), fe(
      `${A}Props`,
      ue({
        modelValue: e.modelValue,
        accordion: e.accordion
      })
    ), (d, i) => (g(), C("div", {
      class: L(`${E(A)}-collapse`)
    }, [
      Z(d.$slots, "default")
    ], 2));
  }
}), st = "0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out", To = {
  onBeforeEnter(u) {
    const n = u;
    n.style.transition = st, n.dataset && (n.dataset.oldPaddingTop = n.style.paddingTop, n.dataset.oldPaddingBottom = n.style.paddingBottom), n.style.height = "0", n.style.paddingTop = "0", n.style.paddingBottom = "0";
  },
  onEnter(u) {
    const n = u;
    n.dataset.oldOverflow = n.style.overflow, n.style.transitionProperty = "all", n.scrollHeight !== 0 ? (n.style.height = n.scrollHeight + "px", n.style.paddingTop = n.dataset.oldPaddingTop || "", n.style.paddingBottom = n.dataset.oldPaddingBottom || "") : (n.style.height = "", n.style.paddingTop = n.dataset.oldPaddingTop || "", n.style.paddingBottom = n.dataset.oldPaddingBottom || ""), n.style.overflow = "hidden";
  },
  onAfterEnter(u) {
    const n = u;
    n.style.transition = "", n.style.height = "", n.style.overflow = n.dataset.oldOverflow || "";
  },
  onBeforeLeave(u) {
    const n = u;
    n.dataset && (n.dataset.oldPaddingTop = n.style.paddingTop, n.dataset.oldPaddingBottom = n.style.paddingBottom, n.dataset.oldOverflow = n.style.overflow), n.style.height = n.scrollHeight + "px", n.style.overflow = "hidden";
  },
  onLeave(u) {
    const n = u;
    n.style.transitionProperty = "all", n.scrollHeight !== 0 && (n.style.transition = st, n.style.height = "0", n.style.paddingTop = "0", n.style.paddingBottom = "0");
  },
  onAfterLeave(u) {
    const n = u;
    n.style.transition, n.style.height = "", n.style.overflow = n.dataset.oldOverflow || "", n.style.paddingTop = n.dataset.oldPaddingTop || "", n.style.paddingBottom = n.dataset.oldPaddingBottom || "";
  }
}, $o = {
  functional: !0,
  setup() {
    return {
      collapseTransitionProps: To
    };
  }
}, Bo = (u, n) => {
  const e = u.__vccOpts || u;
  for (const [t, l] of n)
    e[t] = l;
  return e;
};
function Io(u, n, e, t, l, d) {
  return g(), X(we, xt(Lt(t.collapseTransitionProps)), {
    default: le(() => [
      Z(u.$slots, "default")
    ]),
    _: 3
  }, 16);
}
const Xe = /* @__PURE__ */ Bo($o, [["render", Io]]), Ao = /* @__PURE__ */ K({
  __name: "Panel",
  props: {
    name: {}
  },
  setup(u) {
    const n = u, e = Re(), t = n.name || Math.random().toString(36).substr(2, 8), l = oe(`${A}Props`), d = oe(`${A}ChangePanel`), i = U(() => l.modelValue.indexOf(t) !== -1), c = (b) => {
      if (b === 1 && e.trigger)
        return;
      const r = l.modelValue, m = r.indexOf(t);
      l.accordion ? m !== -1 ? r.splice(m, 1) : r.splice(m, 1, t) : m !== -1 ? r.splice(m, 1) : r.push(t), d && d(i.value);
    };
    return se(() => {
    }), (b, r) => (g(), C("div", {
      class: L([{ active: i.value }, "collapse-panel"])
    }, [
      B("div", {
        class: "collapse-title",
        onClick: r[1] || (r[1] = (m) => c(1))
      }, [
        B("i", {
          class: L(["icon-arrow arrow", { down: i.value }])
        }, null, 2),
        Z(b.$slots, "default"),
        b.$slots.trigger ? (g(), C("span", {
          key: 0,
          onClick: r[0] || (r[0] = (m) => c())
        }, [
          Z(b.$slots, "trigger")
        ])) : z("", !0)
      ]),
      de(Xe, null, {
        default: le(() => [
          ie(B("div", {
            ref: "content",
            class: L([{ active: i.value }, "collapse-content"])
          }, [
            Z(b.$slots, "content")
          ], 2), [
            [me, i.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Collapse: Vo,
  CollapsePanel: Ao
}, Symbol.toStringTag, { value: "Module" })), Lo = /* @__PURE__ */ K({
  __name: "Sidebar",
  props: {
    modelValue: {},
    sideBarHeight: {}
  },
  emits: ["update:modelValue"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(0);
    te(
      () => t.sideBarHeight,
      () => {
        m();
      }
    );
    const i = (w) => {
      const k = t.sideBarHeight, _ = w.pageY - d.value;
      document.onmousemove = (y) => {
        let f = y.pageY - _;
        f >= k && (f = k), f <= 0 && (f = 0), c(f, k);
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      }, w.stopPropagation();
    }, c = (w, k) => {
      d.value = w;
      const _ = k / 6;
      let y = [];
      w <= k / 6 ? y = [255, r(w, _, 0), 0] : w <= k * 2 / 6 ? y = [255 - r(w, _, 1), 255, 0] : w <= k * 3 / 6 ? y = [0, 255, r(w, _, 2)] : w <= k * 4 / 6 ? y = [0, 255 - r(w, _, 3), 255] : w < k * 5 / 6 ? y = [r(w, _, 4), 0, 255] : w <= k * 6 / 6 && (y = [255, 0, 255 - r(w, _, 5)]);
      const f = {
        r: y[0],
        g: y[1],
        b: y[2]
      };
      l("update:modelValue", f);
    }, b = (w) => {
      const k = t.sideBarHeight;
      c(w.offsetY, k), i(w);
    }, r = (w, k, _) => {
      const y = (w - k * _) / k * 255;
      return parseInt(y.toString());
    }, m = () => {
      const { r: w, g: k, b: _ } = t.modelValue;
      let y = 0;
      const f = t.sideBarHeight / 6;
      w === 255 && _ === 0 && (y = k / 255 * f), k === 255 && _ === 0 && (y = (w / 255 + 1) * f), k === 255 && w === 0 && (y = (_ / 255 + 2) * f), _ === 255 && w === 0 && (y = (k / 255 + 3) * f), _ === 255 && k === 0 && (y = (w / 255 + 4) * f), w === 255 && k === 0 && (y = (_ / 255 + 5) * f), d.value = y;
    };
    return n({ calcTop: m }), (w, k) => (g(), C("div", {
      class: "color-slider",
      onMousedown: b
    }, [
      B("span", {
        class: "color-slier-thumb",
        style: Q({ top: d.value + "px" }),
        onMousedown: i
      }, null, 36)
    ], 32));
  }
}), Oo = /* @__PURE__ */ B("div", { class: "color-white-panel" }, null, -1), Do = /* @__PURE__ */ B("div", { class: "color-block-panel" }, null, -1), Eo = /* @__PURE__ */ K({
  __name: "Panel",
  props: {
    bgColor: {},
    showColor: {}
  },
  setup(u, { expose: n }) {
    const e = u, t = j(), l = ue({
      style: {
        left: 0,
        top: 0
      },
      panelBgInfo: {
        w: 0,
        x: 0,
        y: 0,
        h: 0
      }
      // 颜色面板的信息left,top,width,height
    }), d = U(() => {
      const { r: k, g: _, b: y } = e.bgColor;
      return `rgba(${k}, ${_}, ${y})`;
    });
    te(
      () => e.bgColor,
      () => {
        w();
      }
    );
    const i = (k) => {
      if (k.target.className === "color-cursor")
        return;
      const { offsetX: _, offsetY: y } = k, { w: f } = l.panelBgInfo;
      l.style = {
        left: _,
        top: y
      };
      const a = f - _;
      c(a, y), r(k), k.stopPropagation();
    }, c = (k, _) => {
      const { w: y, h: f } = l.panelBgInfo, a = JSON.parse(JSON.stringify(e.bgColor));
      for (const o in a) {
        const s = a[o];
        a[o] = ((255 - s) * k + s * y) / y;
      }
      b(k, _, y, f, a);
    }, b = (k, _, y, f, a) => {
      for (const o in a) {
        const s = a[o], p = (f - _) * s / f;
        e.showColor[o] = parseInt(p.toString());
      }
    }, r = (k) => {
      console.log("_onMouseDown");
      const { w: _, h: y } = l.panelBgInfo, f = k.pageX - l.style.left, a = k.pageY - l.style.top;
      document.onmousemove = (o) => {
        const { pageX: s, pageY: p } = o;
        let h = s - f, S = p - a;
        h <= 0 && (h = 0), h >= _ && (h = _), S <= 0 && (S = 0), S >= y && (S = y), l.style = {
          left: h,
          top: S
        };
        const T = _ - h;
        c(T, S);
      }, document.onmouseup = () => {
        document.onmousemove = null, document.onmouseup = null;
      }, k.stopPropagation();
    }, m = () => {
      const k = t.value.offsetWidth, _ = t.value.offsetHeight;
      l.panelBgInfo.w = k, l.panelBgInfo.h = _;
      const { r: y, g: f, b: a } = e.showColor, o = Math.max(y, f, a);
      let p = Math.min(y, f, a) / o * k;
      o === 0 && (p = 0);
      const h = _ - o / 255 * _;
      l.style.left = k - p, l.style.top = h;
    }, w = () => {
      const { w: k } = l.panelBgInfo, { left: _, top: y } = l.style;
      c(k - _, y);
    };
    return n({ calcXY: m }), (k, _) => (g(), C("div", {
      ref_key: "el",
      ref: t,
      class: "color-panel",
      style: Q({ background: d.value }),
      onMousedown: i
    }, [
      Oo,
      Do,
      B("div", {
        class: "color-cursor",
        style: Q({ left: l.style.left + "px", top: l.style.top + "px" }),
        onMousedown: re(r, ["stop"])
      }, null, 36)
    ], 36));
  }
}), Mo = { class: "color-picker-content" }, Po = { class: "color-picker-control" }, Ro = { class: "color-input" }, zo = ["value"], No = ["innerHTML"], Ho = /* @__PURE__ */ K({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "#fff" },
    format: { default: "hex" },
    text: { default: "确定" }
  },
  emits: ["change", "update:modelValue"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(), d = j(), i = j(), c = ue({
      visible: !1,
      bgColor: {
        // 侧栏颜色
        r: null,
        g: null,
        b: null
      },
      showColor: {
        // 实际显示的颜色
        r: null,
        g: null,
        b: null
      },
      sideBarHeight: 0
    }), b = U(() => {
      if (c.showColor.r === null)
        return;
      let a;
      if (e.format === "hex")
        a = w();
      else {
        const { r: o, g: s, b: p } = c.showColor;
        a = `rgb(${o},${s},${p})`;
      }
      return a = a && a.replace(/\s+/g, ""), a;
    }), r = (a) => {
      let o = a ? a.target.value : e.modelValue;
      o = o.replace(/\s+/g, "");
      let s;
      o[0] === "#" ? s = m(o) : (o = o.replace(/[a-zA-Z()]/g, ""), s = o.split(",")), !(!s || s.length !== 3 && s.length !== 4) && (c.showColor.r = _(s[0]), c.showColor.g = _(s[1]), c.showColor.b = _(s[2]), k(a));
    }, m = (a) => {
      const o = a.replace("#", "");
      if (o.length !== 3 && o.length !== 6 || /[^0-9a-f]/g.test(o))
        return;
      const s = [];
      for (let p = 0; p < o.length; p++) {
        let h = parseInt(o[p].toString() + o[p], 16);
        o.length === 6 && p % 2 === 0 ? (h = parseInt(o[p].toString() + o[p + 1], 16), s.push(h)) : o.length === 3 && s.push(h);
      }
      return s;
    }, w = () => {
      let a = "#";
      for (const o in c.showColor) {
        if (o === "a")
          continue;
        if (c.showColor[o] === null)
          return;
        let s = parseInt(c.showColor[o]).toString(16);
        s.length === 1 && (s += s), a += s;
      }
      return a;
    }, k = (a) => {
      const { r: o, g: s, b: p } = c.showColor, h = [
        { name: "r", value: o },
        { name: "g", value: s },
        { name: "b", value: p }
      ];
      h.sort((M, x) => x.value - M.value);
      const S = h[0].value, T = h[1].value, R = h[2].value;
      h[1].value = (R - T) * S / (R - S), h[2].value = 0, h[0].value = 255, h[1].value = 255 * h[1].value / S, R === S && (h[1].value = 0), h.forEach((M) => {
        c.bgColor[M.name] = M.value;
      }), a && (d.value.calcTop(), i.value.calcXY());
    }, _ = (a) => (a > 255 && (a = 255), a < 0 && (a = 0), a), y = (a) => {
      console.log(a), c.visible = !1, t("update:modelValue", b.value), t("change", b.value), a.stopPropagation();
    }, f = (a) => {
      l.value.contains(a.target) ? (c.visible = !0, he(() => {
        c.sideBarHeight = l.value.querySelector(".color-slider").offsetHeight, i.value.calcXY();
      })) : c.visible = !1;
    };
    return se(() => {
      he(() => {
        c.sideBarHeight = l.value.querySelector(".color-slider").offsetHeight, r();
      }), document.addEventListener("click", f);
    }), ke(() => {
      document.removeEventListener("click", f);
    }), (a, o) => (g(), C("div", {
      ref_key: "el",
      ref: l
    }, [
      Z(a.$slots, "default"),
      de(we, { name: "slide-toggle" }, {
        default: le(() => [
          ie(B("div", {
            class: L(`${E(A)}-color-picker`),
            onClick: o[1] || (o[1] = re(() => {
            }, ["stop"]))
          }, [
            B("div", Mo, [
              de(Lo, {
                ref_key: "sidebar",
                ref: d,
                modelValue: c.bgColor,
                "onUpdate:modelValue": o[0] || (o[0] = (s) => c.bgColor = s),
                "side-bar-height": c.sideBarHeight
              }, null, 8, ["modelValue", "side-bar-height"]),
              de(Eo, {
                ref_key: "panel",
                ref: i,
                "bg-color": c.bgColor,
                "show-color": c.showColor
              }, null, 8, ["bg-color", "show-color"])
            ]),
            B("div", Po, [
              B("div", Ro, [
                B("input", {
                  type: "text",
                  class: L(`${E(A)}-input-control`),
                  value: b.value,
                  onChange: r
                }, null, 42, zo)
              ]),
              B("div", {
                class: "color-confirm",
                onClick: y,
                innerHTML: a.text
              }, null, 8, No)
            ])
          ], 2), [
            [me, c.visible]
          ])
        ]),
        _: 1
      })
    ], 512));
  }
}), jo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ColorPicker: Ho
}, Symbol.toStringTag, { value: "Module" })), at = 500, Qe = /* @__PURE__ */ K({
  __name: "Dialog",
  props: {
    zIndex: { default: 999 },
    modelValue: { type: Boolean, default: !1 },
    title: {},
    content: {},
    appendToBody: { type: Boolean, default: !0 },
    top: {},
    width: {},
    height: {},
    center: {},
    modal: { type: Boolean, default: !0 },
    closeModal: { type: Boolean, default: !0 },
    lockScroll: { type: Boolean, default: !1 },
    className: { default: "" },
    showClose: { type: Boolean, default: !0 },
    confirm: {},
    cancel: {},
    callback: {},
    move: { type: Boolean, default: !1 },
    autoClose: { default: 0 },
    closeTips: { default: "S秒后自动关闭" },
    beforeClose: {},
    animation: { default: "fade" },
    isAlert: { type: Boolean },
    remove: {},
    icon: { default: 0 },
    close: {}
  },
  emits: ["update:modelValue"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(), i = j(), c = j(), b = ue({
      autoTime: t.autoClose,
      // 自动关闭时间
      visible: t.modelValue,
      // 控制窗口显示隐藏
      left: "",
      top: t.top,
      moveFlag: !1,
      scrollbar: {},
      isDestroy: !1
    });
    let r = 0;
    te(
      () => t.modelValue,
      (o) => {
        b.visible = o, o && w(), a(o);
      }
    );
    const m = U(() => {
      let o = t.icon;
      switch (t.icon) {
        case 1:
          o = "success";
          break;
        case 2:
          o = "failure";
          break;
        case 3:
          o = "tips";
          break;
      }
      return o;
    }), w = () => {
      t.autoClose > 0 && (b.autoTime = t.autoClose, r = window.setInterval(() => {
        b.autoTime > 1 ? b.autoTime-- : (t.callback && t.callback(), _());
      }, 1e3));
    }, k = () => {
      b.visible = !0, w(), a(!0);
    }, _ = () => {
      b.visible = !1, t.autoClose && window.clearInterval(r), t.isAlert && t.remove && window.setTimeout(() => {
        t.remove && t.remove();
      }, at), l("update:modelValue", !1), a(!1), typeof t.close == "function" && window.setTimeout(() => {
        t.close && t.close();
      }, at);
    };
    n({ open: k, close: _ });
    const y = (o) => {
      if (!t.closeModal && o === "modal")
        return !1;
      if (!t.autoClose && o === "confirm" && t.callback)
        return t.callback(_), console.log(console), !1;
      if (t.beforeClose && !t.beforeClose(o, _))
        return !1;
      _();
    }, f = (o) => {
      if (t.move && i.value) {
        b.moveFlag = !1;
        const s = Ie(i.value), p = o.pageX - s.left, h = o.pageY - s.top, S = We();
        b.moveFlag = !0, document.onmousemove = (T) => {
          if (b.moveFlag) {
            let R = T.pageX - p, M = T.pageY - h - S;
            const x = xe(), v = c.value.offsetHeight, I = c.value.offsetWidth;
            R <= 0 ? R = 0 : R > x.width - I && (R = x.width - I), M <= 0 ? M = 0 : M > x.height - v && (M = x.height - v), b.left = R + "px", b.top = M + "px";
          }
          return !1;
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, b.moveFlag = !1;
        };
      }
    }, a = (o) => {
      if (t.lockScroll) {
        const { hasScroll: s, width: p } = b.scrollbar;
        s && o && (document.body.style.overflow = "hidden", document.body.style.paddingRight = p + "px"), !o && s && (document.body.style.overflow = "", document.body.style.paddingRight = "");
      }
    };
    return se(() => {
      he(() => {
        t.appendToBody && d.value && document.body.appendChild(d.value), t.lockScroll && (b.scrollbar = ht(!0));
      });
    }), ke(() => {
      t.appendToBody && d.value.parentNode && d.value.parentNode.removeChild(d.value), r && window.clearInterval(r);
    }), (o, s) => (g(), X(we, { name: o.animation }, {
      default: le(() => [
        ie(B("div", {
          ref_key: "el",
          ref: d,
          class: L({
            [`${E(A)}-dialog-modal`]: !0,
            modal: !o.modal,
            center: o.center
          }),
          style: Q({ zIndex: o.zIndex }),
          onClick: s[4] || (s[4] = (p) => y("modal"))
        }, [
          B("div", {
            ref_key: "dialogEl",
            ref: c,
            class: L({
              [E(A) + "-dialog"]: !0,
              [o.className]: o.className,
              [E(A) + "-dialog-isAlert"]: o.isAlert
            }),
            style: Q({
              width: o.width,
              top: b.top,
              left: b.left,
              "transition-duration": b.moveFlag ? "0s" : ""
            }),
            onClick: s[3] || (s[3] = re(() => {
            }, ["stop"]))
          }, [
            o.showClose ? (g(), C("a", {
              key: 0,
              class: L(`${E(A)}-dialog-close icon-close`),
              onClick: s[0] || (s[0] = (p) => y("close"))
            }, null, 2)) : z("", !0),
            o.autoClose > 0 ? (g(), C("div", {
              key: 1,
              class: L(`${E(A)}-dialog-auto-close`)
            }, [
              B("span", null, J(o.closeTips.replace("S", b.autoTime.toString())), 1)
            ], 2)) : z("", !0),
            o.title || o.$slots.title ? (g(), C("div", {
              key: 2,
              ref_key: "headEl",
              ref: i,
              class: L({ [`${E(A)}-dialog-header`]: !0, move: o.move }),
              onMousedown: f
            }, [
              o.title ? (g(), C(q, { key: 0 }, [
                pe(J(o.title), 1)
              ], 64)) : Z(o.$slots, "title", { key: 1 })
            ], 34)) : z("", !0),
            o.content || o.$slots.default ? (g(), C("div", {
              key: 3,
              style: Q({ height: o.height }),
              class: L({
                [E(A) + "-dialog-alert"]: o.isAlert,
                [E(A) + "-dialog-content"]: !0
              })
            }, [
              o.icon ? (g(), C("i", {
                key: 0,
                class: L([{ ["icon-" + m.value]: o.icon }])
              }, null, 2)) : z("", !0),
              o.content ? (g(), C("div", {
                key: 1,
                class: L([E(A) + "-dialog-text"])
              }, J(o.content), 3)) : Z(o.$slots, "default", { key: 2 })
            ], 6)) : z("", !0),
            o.$slots.footer ? (g(), C("div", {
              key: 4,
              class: L(`${E(A)}-dialog-footer`)
            }, [
              Z(o.$slots, "footer")
            ], 2)) : z("", !0),
            o.confirm || o.cancel ? (g(), C("div", {
              key: 5,
              class: L(`${E(A)}-dialog-footer`)
            }, [
              o.cancel ? (g(), X(Le, {
                key: 0,
                type: "cancel",
                onClick: s[1] || (s[1] = (p) => y("cancel"))
              }, {
                default: le(() => [
                  pe(J(o.cancel), 1)
                ]),
                _: 1
              })) : z("", !0),
              o.confirm ? (g(), X(Le, {
                key: 1,
                type: "primary",
                onClick: s[2] || (s[2] = (p) => y("confirm"))
              }, {
                default: le(() => [
                  pe(J(o.confirm), 1)
                ]),
                _: 1
              })) : z("", !0)
            ], 2)) : z("", !0)
          ], 6)
        ], 6), [
          [me, b.visible]
        ])
      ]),
      _: 3
    }, 8, ["name"]));
  }
}), Fo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dialog: Qe
}, Symbol.toStringTag, { value: "Module" })), Wo = /* @__PURE__ */ K({
  __name: "Divider",
  props: {
    direction: { default: "" },
    borderStyle: { default: "solid" },
    contentPosition: { default: "center" },
    padding: {}
  },
  setup(u) {
    const n = u, e = U(() => {
      let t = "borderTopStyle", l = n.padding ? `0 ${n.padding}` : "";
      return n.direction === "vertical" && (t = "borderLeftStyle", l = n.padding ? `${n.padding} 0` : ""), {
        [t]: n.borderStyle,
        margin: l
      };
    });
    return (t, l) => (g(), C("div", {
      class: L([E(A) + "-divider", t.direction]),
      style: Q(e.value)
    }, [
      B("span", {
        class: L(["divider-text", [t.contentPosition]])
      }, [
        Z(t.$slots, "default")
      ], 2)
    ], 6));
  }
}), Uo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Divider: Wo
}, Symbol.toStringTag, { value: "Module" })), Yo = /* @__PURE__ */ K({
  __name: "Drawer",
  props: {
    modelValue: { type: Boolean, default: !1 },
    direction: { default: "right" }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(e.modelValue);
    return te(
      () => e.modelValue,
      (d) => {
        l.value = d;
      }
    ), te(
      () => l.value,
      (d) => {
        t("update:modelValue", d);
      }
    ), (d, i) => (g(), X(E(Qe), {
      ref: "dialogEl",
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (c) => l.value = c),
      animation: "slide",
      "class-name": `${E(A)}-drawer ${E(A)}-drawer-${d.direction}`
    }, {
      title: le(() => [
        Z(d.$slots, "title")
      ]),
      footer: le(() => [
        Z(d.$slots, "footer")
      ]),
      default: le(() => [
        Z(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["modelValue", "class-name"]));
  }
}), Ko = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Drawer: Yo
}, Symbol.toStringTag, { value: "Module" })), Go = /* @__PURE__ */ B("span", { class: "arrow" }, null, -1), Jo = /* @__PURE__ */ K({
  __name: "Dropdown",
  props: {
    trigger: { default: "hover" },
    appendToBody: { type: Boolean },
    downClass: { default: "" },
    direction: { default: 0 }
  },
  emits: ["click", "toggle"],
  setup(u, { expose: n, emit: e }) {
    const t = Re(), l = u, d = e, i = j(), c = j(), b = ue({
      visible: !1,
      timer: 0,
      position: "",
      dropdownStyle: {
        left: "",
        top: "",
        bottom: "",
        position: "",
        "--ak-dropdown-left": ""
      }
    });
    fe(`${A}DropdownItemClick`, (s) => {
      d("click", s);
    });
    const r = () => {
      l.trigger === "click" && (b.visible = !1);
    }, m = (s, p) => {
      b.visible || a("hover", p, !0, s), d("toggle", !0);
    }, w = () => {
      clearTimeout(b.timer), l.trigger === "hover" && (b.timer = window.setTimeout(() => {
        b.visible = !1;
      }, 500)), d("toggle", !1);
    }, k = (s, p) => {
      a("click", p, !b.visible, s), d("toggle", !b.visible);
    }, _ = () => {
      l.trigger === "hover" && (clearTimeout(b.timer), b.visible = !0, d("toggle", !0));
    }, y = () => {
      l.trigger === "hover" && (b.visible = !1, d("toggle", !1));
    }, f = (s) => {
      s.stopPropagation();
    }, a = (s, p, h, S) => {
      l.trigger === s && (t.trigger ? p && (b.visible = h) : p || (b.visible = h)), he(() => {
        b.position = o(S);
        const T = i.value.offsetWidth;
        if (b.dropdownStyle["--ak-dropdown-left"] = `${-T / 2}px`, b.visible && l.appendToBody) {
          const R = xe(), M = Ie(c.value);
          b.dropdownStyle.left = M.left + M.width / 2 + "px", b.position === "top" ? (b.dropdownStyle.bottom = R.height - M.top + "px", b.dropdownStyle.top = "auto") : b.dropdownStyle.top = M.top + M.height + "px";
        }
      });
    }, o = (s) => {
      let p = "";
      if (l.direction === 1 && (p = "top"), l.direction === 0) {
        const h = document.documentElement.clientHeight || document.body.clientHeight, S = s.clientY, T = i.value.offsetHeight;
        T > h - S && S > T && (p = "top");
      }
      return p;
    };
    return se(() => {
      document.addEventListener("click", r), l.appendToBody && (b.dropdownStyle.position = "fixed", document.body.appendChild(i.value));
    }), ke(() => {
      document.removeEventListener("click", r), l.appendToBody && document.body.removeChild(i.value);
    }), n({ slideUp: r }), (s, p) => (g(), C("div", {
      ref_key: "el",
      ref: c,
      class: L({ [E(A) + "-dropdown"]: !0 }),
      onMouseenter: m,
      onMouseleave: w,
      onClick: re(k, ["stop"])
    }, [
      Z(s.$slots, "default"),
      s.$slots.trigger ? (g(), C("span", {
        key: 0,
        onMouseenter: p[0] || (p[0] = re((h) => m(h, "slot"), ["stop"])),
        onClick: p[1] || (p[1] = re((h) => k(h, "slot"), ["stop"]))
      }, [
        Z(s.$slots, "trigger")
      ], 32)) : z("", !0),
      de(we, { name: "slide-toggle" }, {
        default: le(() => [
          ie(B("div", {
            ref_key: "dropdown",
            ref: i,
            class: L({
              [E(A) + "-dropdown-menu"]: !0,
              top: b.position,
              [s.downClass]: s.downClass
            }),
            style: Q(b.dropdownStyle),
            onMouseenter: _,
            onMouseleave: y,
            onClick: re(f, ["stop"])
          }, [
            Z(s.$slots, "dropdown"),
            Go
          ], 38), [
            [me, b.visible]
          ])
        ]),
        _: 3
      })
    ], 34));
  }
}), Zo = /* @__PURE__ */ K({
  __name: "DropdownItem",
  props: {
    disabled: { type: Boolean },
    className: {}
  },
  setup(u) {
    const n = u, e = oe(`${A}DropdownItemClick`, ""), t = () => {
      n.disabled || e && e(this);
    };
    return (l, d) => (g(), C("li", {
      class: L({ disabled: l.disabled, className: l.className }),
      onClick: t
    }, [
      Z(l.$slots, "default")
    ], 2));
  }
}), Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dropdown: Jo,
  DropdownItem: Zo
}, Symbol.toStringTag, { value: "Module" })), Qo = /* @__PURE__ */ K({
  __name: "Icon",
  props: {
    icon: {}
  },
  emits: ["click"],
  setup(u, { emit: n }) {
    const e = n, t = () => {
      e("click");
    };
    return (l, d) => (g(), C("i", {
      class: L([E(A) + "-icon", "icon-" + l.icon]),
      onClick: t
    }, null, 2));
  }
}), qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Icon: Qo
}, Symbol.toStringTag, { value: "Module" })), en = { class: "default-placeholder" }, tn = /* @__PURE__ */ B("div", { class: "default-error" }, "FAILED", -1), ln = ["src", "alt"], on = {
  key: 0,
  class: "preview-loading"
}, nn = {
  key: 1,
  class: "preview-error"
}, sn = ["src"], an = { class: "control-tool" }, rn = /* @__PURE__ */ K({
  __name: "Image",
  props: {
    src: {},
    fit: {},
    alt: {},
    previewSrcList: { default: () => [] },
    previewCls: {},
    zIndex: {},
    border: { type: Boolean },
    radius: { default: "2px" }
  },
  setup(u) {
    const n = u, e = j("loading"), t = j("loading"), l = j(), d = j(), i = j(!1), c = j({}), b = U(() => {
      const {
        rotate: s = 0,
        scale: p = 1,
        x: h = 0,
        y: S = 0,
        duration: T = ""
      } = c.value;
      return {
        transform: `scale(${p}) rotate(${s}deg) translate(${h}px, ${S}px)`,
        transitionDuration: T
      };
    }), r = j(0), m = (s) => new Promise((p, h) => {
      if (!n.src)
        return h();
      const S = new Image();
      S.onload = function() {
        p();
      }, S.onerror = function() {
        h();
      }, S.src = s;
    }), w = () => {
      m(n.src).then(() => {
        e.value = "success";
      }).catch(() => {
        e.value = "error";
      });
    };
    te(
      () => n.src,
      () => {
        w();
      }
    ), w();
    const k = () => {
      n.previewSrcList && n.previewSrcList.length > 0 && (i.value = !0, r.value = 0, a());
    }, _ = () => {
      i.value = !1, c.value = {};
    }, y = (s) => {
      var p;
      if (s)
        if (r.value < ((p = n.previewSrcList) == null ? void 0 : p.length) - 1)
          r.value++;
        else
          return;
      else if (r.value > 0)
        r.value--;
      else
        return;
      c.value = {}, a();
    }, f = (s) => {
      const { rotate: p = 0, scale: h = 1 } = c.value;
      switch (s) {
        case "out":
          c.value.scale = h / 1.4, c.value.scale <= 0 && (c.value.scale = 0);
          break;
        case "in":
          c.value.scale = h * 1.4, c.value.scale >= 10 && (c.value.scale = 10);
          break;
        case "default":
          c.value = {};
          break;
        case "rotateLeft":
          c.value.rotate = p - 90;
          break;
        case "rotateRight":
          c.value.rotate = p + 90;
          break;
      }
    }, a = () => {
      t.value = "loading", m(n.previewSrcList[r.value]).then(() => {
        t.value = "success";
      }).catch(() => {
        t.value = "error";
      });
    }, o = (s) => {
      let p = !1;
      if (d.value) {
        const h = s.pageX - (c.value.x || 0), S = s.pageY - (c.value.y || 0);
        p = !0, document.onmousemove = (T) => (p && (c.value.x = T.pageX - h, c.value.y = T.pageY - S, c.value.duration = "0s"), !1), document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, c.value.duration = "", p = !1;
        };
      }
    };
    return se(() => {
      he(() => {
      });
    }), ke(() => {
    }), (s, p) => (g(), C("div", {
      class: L({ [E(A) + "-image"]: !0, border: s.border }),
      style: Q({ "border-radius": s.radius })
    }, [
      e.value === "loading" ? Z(s.$slots, "placeholder", { key: 0 }, () => [
        B("div", en, [
          de(Be, {
            "model-value": !0,
            background: "none"
          })
        ])
      ]) : e.value === "error" ? Z(s.$slots, "error", { key: 1 }, () => [
        tn
      ]) : (g(), C("img", {
        key: 2,
        src: s.src,
        alt: s.alt,
        style: Q({ "object-fit": s.fit }),
        onClick: k
      }, null, 12, ln)),
      de(we, { name: "image-fade" }, {
        default: le(() => {
          var h, S;
          return [
            ((h = s.previewSrcList) == null ? void 0 : h.length) > 0 ? ie((g(), C("div", {
              key: 0,
              class: L({ [E(A) + "-image-preview"]: !0 }),
              ref_key: "imagePreview",
              ref: l
            }, [
              B("i", {
                class: "icon-error",
                onClick: _
              }),
              B("i", {
                class: L(["icon-arrow-r prev", { disabled: r.value <= 0 }]),
                onClick: p[0] || (p[0] = (T) => y(0))
              }, null, 2),
              B("i", {
                class: L(["icon-arrow-r next", { disabled: r.value >= s.previewSrcList.length - 1 }]),
                onClick: p[1] || (p[1] = (T) => y(1))
              }, null, 2),
              t.value === "loading" ? (g(), C("div", on, [
                de(Be, {
                  "model-value": !0,
                  background: "none",
                  zIndex: 10
                })
              ])) : t.value === "error" ? (g(), C("div", nn, " FAILED ")) : ((S = s.previewSrcList) == null ? void 0 : S.length) > 0 ? (g(), C("img", {
                key: 2,
                class: "img",
                ref_key: "previewImg",
                ref: d,
                style: Q(b.value),
                src: s.previewSrcList[r.value],
                onMousedown: o
              }, null, 44, sn)) : z("", !0),
              B("div", an, [
                B("i", {
                  class: "icon-zoom-out",
                  onClick: p[2] || (p[2] = (T) => f("out"))
                }),
                B("i", {
                  class: "icon-zoom-in",
                  onClick: p[3] || (p[3] = (T) => f("in"))
                }),
                B("i", {
                  class: "icon-default",
                  onClick: p[4] || (p[4] = (T) => f("default"))
                }),
                B("i", {
                  class: "icon-rotateLeft",
                  onClick: p[5] || (p[5] = (T) => f("rotateLeft"))
                }),
                B("i", {
                  class: "icon-rotateRight",
                  onClick: p[6] || (p[6] = (T) => f("rotateRight"))
                })
              ])
            ], 2)), [
              [me, i.value]
            ]) : z("", !0)
          ];
        }),
        _: 1
      })
    ], 6));
  }
}), un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Image: rn
}, Symbol.toStringTag, { value: "Module" })), cn = ["value", "disabled", "readOnly", "placeholder"], dn = { class: "number-control" }, fn = /* @__PURE__ */ K({
  __name: "InputNumber",
  props: {
    modelValue: { default: 0 },
    max: {},
    min: {},
    step: { default: 1 },
    disabled: { type: Boolean },
    placeholder: {},
    readOnly: { type: Boolean, default: !1 },
    size: {}
  },
  emits: ["update:modelValue", "focus", "blur", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = (w) => {
      e.disabled || t("focus", w);
    }, d = (w) => {
      const { value: k } = w.target;
      e.max && !isNaN(e.max) && parseInt(k) > e.max && m(e.max), e.min && !isNaN(e.min) && parseInt(k) < e.min && m(e.min), t("blur", w);
    }, i = (w) => {
      console.log(w);
      const { value: k } = w.target;
      m(parseInt(k));
    }, c = (w) => {
      const k = e.modelValue || 0;
      if (!isNaN(k) && !e.disabled) {
        let _ = 0;
        w > 0 ? e.max && !isNaN(e.max) && k + e.step > e.max ? _ = e.max : _ = k + e.step : e.min && !isNaN(e.min) && k - e.step < e.min ? _ = e.min : _ = k - e.step;
        const y = e.step + "";
        if (y.indexOf(".") !== -1) {
          const f = y.substring(y.indexOf(".") + 1).length;
          _ = Number(_.toFixed(f));
        }
        m(_);
      }
    }, b = oe(`${A}ControlChange`, ""), r = (w, k) => {
      b && b(w, k);
    }, m = (w) => {
      t("change", w), t("update:modelValue", w), r(w);
    };
    return te(
      () => e.modelValue,
      (w) => {
        r(w, "mounted");
      }
    ), se(() => {
      r(e.modelValue, "mounted");
    }), (w, k) => (g(), C("div", {
      class: L({ disabled: w.disabled, [E(A) + "-input-number"]: !0 })
    }, [
      B("input", {
        type: "text",
        value: w.modelValue,
        class: L({
          disabled: w.disabled,
          [E(A) + "-input-control"]: !0,
          [w.size || ""]: w.size
        }),
        disabled: w.disabled,
        readOnly: w.readOnly,
        placeholder: w.placeholder,
        onkeyup: "this.value=this.value.replace(/[^0-9\\.]/g,'')",
        onFocus: l,
        onBlur: d,
        onInput: i
      }, null, 42, cn),
      B("span", dn, [
        B("a", {
          class: L(["icon-minus", { disabled: w.min && w.modelValue <= w.min }]),
          onClick: k[0] || (k[0] = (_) => c(-1))
        }, null, 2),
        B("a", {
          class: L(["icon-plus", { disabled: w.max && w.modelValue >= w.max }]),
          onClick: k[1] || (k[1] = (_) => c(1))
        }, null, 2)
      ])
    ], 2));
  }
}), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputNumber: fn
}, Symbol.toStringTag, { value: "Module" })), mn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAAC1CAIAAACWMSn+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ4RUIzNjkzMzY0RjExRThCNUJGRTEwNjNDRTdGNUUxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ4RUIzNjk0MzY0RjExRThCNUJGRTEwNjNDRTdGNUUxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDhFQjM2OTEzNjRGMTFFOEI1QkZFMTA2M0NFN0Y1RTEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDhFQjM2OTIzNjRGMTFFOEI1QkZFMTA2M0NFN0Y1RTEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7RlIRdAAAQy0lEQVR42uyd+1MT1xvGQQhQQQShJFyUyiVqpBRasU5brYN2+kP/4bZOtbVD7TRS1FCuRi7hXu4JAing95m8891u93KyucFufJ4fMskm2U32fPZ9n/fs2bOl7969K6EoG53jLqDIB0U+KPJBkQ+KfFDkgyIfFPmgyAdFkQ+KfFDkgyIfFPmgyAdFPijyQZEPiiIfFPmgyAdFPijyQZEPinxQ5IMiHxRFPijyQZEPinxQ5IMiH5TnVP4e/ufj4+PNzc2dnZ14PJ5IJPb39w8PD//555+TkxP5QGlpaWVlZUVFxfnz56urq2tray9evFhfX19WVva+7avS92T+MfzNra2tpaWllZWV7e1toAAINBos9otpIZbU1dX5/f5AIHDp0iXLb5EP72l3d3dmZmZ2dhZBwpIASxQUoECILpcvX/7oo48QWsiHVwMGQsXExMTa2pqi1RVwqCOE7LfGxsZgMIiIUqzhpDj5WFxcHB0dRR6xCwN2EDiEw0AJ3EkoFGppaSEfbheYGB4eXl9fV/sJeWkXPLTl586d00yrgg95gljS19cHj0I+XFqVRCKRyclJ6//pgA9z8Ghvb//7779R4FgyoX8pj/hid3f3zZs3i6bSKRI+UJs8e/YMVtRJPaJOLvqFiAeoe8fGxuzChiGEyJMLFy7cvn0b9XAR7Nhi6B+LRqOPHj0SOPIrJAsUKcgyqiPMhGM8Hn/8+PGbN2/Ix9kXKeFw+I8//kByyagJFcnF0OGBUra5udnJCg0/bDglr4dnD/MBJp4+ffr69esCrR9ViUSOq1evZrcGhJBff/1VzS75KIiOjo6ePHmytLRUuE1olciHH35YU1OT3UpWVlYAMUwM+TjtyIHKwnkaSrvQ8BIZBFhoLz/99NPOzs5Lly6pvYil8Du9G0W8V7/gB//yyy/Ly8t2niDH+uWDDz5AQoEtxRPLre/s7KBc2tzcXF1dPTg4MNcv5roXCgQCd+/e9Vw3q/fO38L0meHIlDBLN4omBBlwo4pWxFvwJfv7+8lkUn9CJ+1hhkSDX37r1i3yUUDBjU5PTztvdYcqKysLBoNtbW21tbWKlezt7c3Ozs7NzSFsqLGwXI46vL6+HnmK+aUgQlT/8ccfFR3edr3mhoWAIB6PW6YYn88nQz0guA3NliJUoIo2Ox5DElEvx0vYl4cPH3qo68wz/hT+bmhoSH02xKEb7e/vt/suCo2NjQ1EqXA4/PjxY1RJsnx9fd0Ax7uUFHBYCr//2bNnHvKqnuEjEoloB30uguv0+/0NDQ12baktASuxWEwLXQ4JSCv8C/wX8pHnmqWioqKjowNNa1lWOG82rAGPPT09TU1N5eXl6vXAMWh8vNPJEEIsv6uon6empgzA0Z/m5pJKS0OhkPYSbgDlJQI+Kkw8cZJ0gMLly5e7urrgKvCyKSWsZ3R0dGZmxg4RKWVhF/RDSZyAqP4A3h0ZGRkcHCQfBZGcE5HTIqgzkQVQVmjjxCxrGfCBfIEiE5ZCyEALLS4u6sckWzYkQsiNGzcMYxMzxcK8HHAvLCygYmL9ckrCIT4+Pj4/P68NxbALRd999x2iDnyiurtMK337+vqGh4edw+HQsaJQ+vbbb13eY1ac48ek1rDb9UhV+NcTExPm6tfyK1VVVVqHR9rw4LycwfK7d++2trbSn56e6urqkNdxxCuOSxgOFLF2h765OQsEBx71jJKP0zOz169fv3//vl15sr+/b9fTpaDE/HmfzyduN20tYyf8DFhg8nEGQh379ddf251utetDM1NiJ3wAdQ1K7hJn54ftwpXLh5kV8/W3jY2Nd+7cyaLWcOjJwAdq5oqKiqzhwOPc3JybLWCRX5+N9pNDPNNeCnNvmOGtmpoaWEtUN59//nl3dzdY1NJZRu2NZGe+GoP9H6enTz75JBaL2Y3gUhfDlu3d3NwcDAalH7YkNbADcGAT09PTqJ7S9oyZ17m8vKwfi0Q+TlWI/9euXYtEInbdG8fHxxmNDVhdXX379i2cKYIT4AAZ4XD46OjIeaeq4ZPgo7e3l/nlzNTV1WVnVLVue+e24+TkBEUHiuQ///wTX1lcXERwyhoO6bNx7RldD/CRu32rrKzEgW5JAKyD/opIO89hqXg8vrKysrm56fwvWK4ZwDlZCfPLv5qdnR0eHsaO00ZgwP2hmc+fPw9jePHiRSTsjEYLgw8Z7C6pBIKNQFzx+XzffPMNmufFixf6TjOHiExMTKQddeBkVVtbW+60IC7lA/srmUzqlxyltLe3p7l9NG1LS4vUDmlXqHVkSYPBdmBta2trDQ0NMjLUsDmH0p8UVJOhpsS1vWQu5SORSKTd6WjRuZSampo+++wzBBXFCvGu3oQCDthMtG5VVRUes4PDedhIG0LAPf1Hfvgwd0Wgpb///vvx8XHFJxFskJvMPaTRaDTvud+8lbRfIR+ZKdMDGk4FBkJ9Fl7r6NQ32O7urmH6hvyS4dDHFCKAFTMf2V2QODU1ZXf1gzhcdUPmUiiZv57R2hyOP6L/+NeNZvfFkZGR1tZWpBKLQ8FU7Jg7T/WNqi1H3QSbgkckKfnA8fExjvi3b99anvrPgjPXnoJxKR9Z7y+0HIwI7Gqm29IPEaqrq0NNhJIHTy5cuGA3TkA2t729vZkSfK5D20Q+zlIzMzP9/f3maKHOWTKAubm5ORAIWJ6StRTq5IaU5CVYWVhYmJ+fz6hedfP5W5fygYM4670m1ziZu5ss+QBGLS0tHR0dICOLa/MNqkupp6cHsQROKBaLOex3R+YiHxkIyV49qk8tRHszH4Y6BZaiu7u7s7NTcUFN1pLrJ+RSKG3ItCJyuHaUskv5QITPhQ9zyYrgoZ0Dg6W4cePG1atXcw8YamFDX3zxRSgUCofDhkEeBmIsDTX5sFV1dXUu882Zyx/pgMJqEfzTTjmXXyHjPHz48PXr1y9fvpQcZw4n5CNjPvK7QpSjfX19wWDwTGYmlXlRYXR+++03y2mP8v5/8yWX9o+pT6akldnuwQ0gp5zttLWA4MGDB/gZ5rdcO+ODS/lATM6lQ7MQljM/u/vcOdTed+7cMRhS187K7VI+GhoaZA9m1/MNY+jmHhqU04ODg1q3G/4p40dmQiLQj9jIFBT3T9Dj9/uRayQP4mBw7Xzt7h1fGAgE7PoM1KDU1NRUVVU539DJyUkikdjY2FhNCYVoPB53MmdE7jESiCCKmOdnZv2SXnD7f/31l+IDlufSxIqmXTmAWF5eBg1bW1uWJ01gFGAnGxsbcaC3trY673HPSIiRiutAyYdKaBvYTIeDM/QdkYor4hEYotFoLBZLeyIN8SOe0szMDFjRrnnJe0enE5rJh3WfQXt7e6ZXuCORmxMT6AETk5OT2V2pBlYWU4Kt6evrs0t8RSlXn7/t7OzMlI+2tjZ9uEbTvnnzZnx8POsz73ohGT158gTx6datW67t8XyP+JDrGJzPs17y33stLCwsjIyM6K8/yEt2QCDBTxoYGLhy5UrR8+H266P009KlFRylBP/d3d2ffvrp6dOnhotTch9HKEomk0NDQ3L9HOPHGVcxdXV1hukD7dTd3Y0GGx0dReHj8L6CuUQUGBrw9+WXX7q5ACny+IH2+/jjjx2RXl6OkueHH36IRCLOey8U8zg40dLS0s8//5z1aFn3yxvz0z169CitC6mqqkLYz0u/VqZBBXXvvXv3ijKKeOP6fdQLadvs4OAgX52emUaU1dVV2JGi9CLe4KO+vv769eunv13noCDRvHjxgnycmXp7e8/wrKwTmzIxMVEc9zT1JB9lZWWoFNwwjlcByvPnz10+X2XR8lGSOpvlqvtzmUGRm9R4+oamHuZDeji6urrc9qv0oCB+eOj2LsXGBzQwMODaARNCyfj4uGvniyp+PmBB7t2759oJIYWS33///RRGGJEPW696//59NyOyvb1duBu/k4/08vl8g4ODbh6Z9+rVK9fO6lH8fGhRxIV2VZRMJmXGRE+rGO4PND09LZNhuord27dv6wejkI+zFOqFoaGhvNwANXfV1tZ+9dVXrr3k6X3koyTVN/Xy5cvJyckz/EeorW7evNnT03Oa13+Tjwy0tbX1/PnzjIYk5ktNTU0DAwM5XjlMPk5DsVgsEok4HHWWu2Rcu5uLKfJhFP4XyoexsbHCxRJkk0AgcO3aNZDh8tuUkg9b7ezsRKPRubm5PM6DW11dfeXKFZTWLr8QnHxkEE7W19cRUZaXl+FRsvjXsJwNDQ1+v7+trc1w7Tj5KCqh0tnY2IA7QWhJJBJ7e3vJZPLw8FDbFT6fr7y8vKKioiYlBIlLKRVNVUI+qPzoHHcBRT4o8kGRD4p8UOSDIh8U+aDIB0U+KIp8UOSDIh8U+aBcIU9OmXV0dDQ2NiY3Fs1oKv5T1sHBwd7eXnl5uTZoGUvW1tbwxCtzp5Z7joyS1Hxf2O/Hx8c1NTUyK5w8yrs7OztoBjziM/39/dq0cdJaaTeh3cxWVjU3N6f4sPyAg5TwRcPU70BhcXERBONnyBL8ACyR4YnkI8/a2NiYmprSH52IIvJc7t9mbn6QpLWZtFbarQwMDGhIYbVqpPTv2l0QpQeO+aWAQmuhsROJBA5rPMexW1lZibY8PDwsKysDPRK3cbxioRCjn3OyqalJfxtAsILWlc//Z49YTVMJaOQJiMS3/H6/PgAsLS05IY98FFZoyJaWFokZAEViSSgUQmtJdNGnIZkHDDFGix9VKen5KElNXepw3lJ8TPJaSer2MVroMqyWfJylwIQ4Pu14hT+AEdHuzzU/P28OOZY+xokXMaQSWbkgJWEMZHR0dKiv05ex0PolCHivXr3SnutNEvnISSgEsCvleAUWCA/I+mhsJBqpCxBO8BIYAQskFG0GDmlaYKQ/1vHcMN0gVojVgiqDaUDkAATif0EGEMES/JJgMJhp0xpudevyubk9xgcaDztUDkfZs3iOIxvcoGnR3niiJRot8uOTlv4AX9EbXk1gy8AHKARJUqYCNZnnFJHDyX2NsSpFtYLfxvuL5bOEQaNihyJgCB9oORhVHM2KSkEOdMN6IHxeil7Du+ZWx+bEGkuU0myphmb2DeDuWds9xoccstingCMcDpekbgACOBAnkDvwXKKCZAFFkSnhBE0r+UXSlmK7IyMjWiLAJ5FfxH9gW5JoMvIfot7eXvrT/PsPifDY43KUSx0h/lTfHWIICYYGE5MLaBzOiA0ggAJWiwQn96KTXIZHgKIFMHP+0h49l1k8yYe+mkDzoGHMb0kHpd2uR6toZYjzzSEySdEk5lQgww9APDMXTQY+8BlD9JJOFNa3Bf7p/+8Ey0hoS4kE8Izm2kG8rZ2PkcCjpSSYEjXBAkHa5EU+CuVV9X1iTkJONBqVzGKXfbROVcteEzgGvCvblfM7invtym+THMT+sTOQ9HBYeklLkqTBEDk6OzsNbYYqF6lKO4FnblHN2YjE7oAz6eYyT8gPejQLXOJleZgP8YkOXa3Wm47YoEV7qUQkGGgdZVji5IyaIrUBMulWwXYVAYZ8FEpSLsr4D7MlhMMwTFwMDkKhEBaaG7UjJb0R0XsFtLR8RV2LSj2l9fHjiVTO7e3tlgbZK+a0xKPzf2DXYy+j5SxTuzS2my2h+3+ht/mgTk0cf0qRD4p8UOSDIh8U+aDIB0U+KPJBkQ+KIh8U+aDIB0U+KPJBkQ+KfFDkgyIfFEU+KPJBkQ+KfFDkgyIfFPmgyAdFPiiKfFDkgyIfVGH1PwEGANmbmAwJaB/aAAAAAElFTkSuQmCC", gn = "data:image/gif;base64,R0lGODlhgACAAKIEAN3d3bu7u////5mZmf///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjZEQUY1MTZCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjZEQUY1MTdCQjcwMTFFNTk2MEZBMUI3OTA4NTc3QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNkRBRjUxNEJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNkRBRjUxNUJCNzAxMUU1OTYwRkExQjc5MDg1NzdBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDP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", He = A + "-lazy-loading", it = A + "-lazy-error";
class rt {
  constructor(n) {
    this.isLoad = !1, this.loading = n.loading || gn, this.error = n.error || mn, this.fadeIn = n.fadeIn || !0, this.threshold = n.threshold || 0, this.imgSrc = "", this.container = "", this.el = "";
  }
  mounted(n, e) {
    const t = n.getAttribute("src");
    t && (this.loading = t);
    const l = n.getAttribute("data-error");
    l && (this.error = l), this.imgSrc = e.value || n.getAttribute("data-src"), this.container = e.arg, this.el = n, lt(n, He), n.getAttribute("src") || n.setAttribute("src", this.loading), he(() => {
      this.renderImg();
    });
  }
  renderImg() {
    const n = this.container ? document.getElementById(this.container) : window;
    this.inView(n) ? (this.loadImg().then((e) => {
      this.el.setAttribute("src", e), this.fadeIn && (this.el.style.opacity = 0, setTimeout(() => {
        this.el.style.opacity = 1, this.el.style.transition = "opacity 1s";
      }, 50)), Ne(this.el, He), Ne(this.el, it);
    }).catch(() => {
      this.el.setAttribute("src", this.error), Ne(this.el, He), lt(this.el, it);
    }), this.isLoad && this.unBindEvent(n)) : this.isLoad || (this.isLoad = !0, this.bindEvent(n));
  }
  loadImg() {
    return new Promise((n, e) => {
      const t = new Image();
      t.onload = function() {
        n(t.src);
      }, t.onerror = function() {
        e("error");
      }, t.src = this.imgSrc;
    });
  }
  // 判断是否在可视区域
  inView(n) {
    let e = !1;
    const t = this.el.getBoundingClientRect(), l = n === window ? { left: 0, top: 0 } : n.getBoundingClientRect(), d = n === window ? window.innerWidth : n.clientWidth, i = n === window ? window.innerHeight : n.clientHeight;
    return t.bottom > this.threshold + l.top && t.top + this.threshold < i + l.top && t.right > this.threshold + l.left && t.left + this.threshold < d + l.left && (e = !0), e;
  }
  bindEvent(n) {
    n.addEventListener("scroll", this.renderImg.bind(this), !1), n === window && window.addEventListener("resize", this.renderImg.bind(this), !1);
  }
  unBindEvent(n) {
    n.removeEventListener("scroll", this.renderImg.bind(this), !1), n === window && window.removeEventListener("resize", this.renderImg.bind(this), !1);
  }
}
const hn = {
  // @ts-ignore
  install(u, n = {}) {
    u.directive("lazy", {
      mounted(e, t) {
        new rt(n).mounted(e, t);
      },
      updated(e, t) {
        new rt(n).mounted(e, t);
      }
      // mounted: lazy.mounted.bind(lazy)
      // updated: lazy.update.bind(lazy),
      // unmounted: lazy.update.bind(lazy)
    });
  }
}, vn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn
}, Symbol.toStringTag, { value: "Module" })), $t = (u) => {
  const n = ft(Be, u);
  if (u.el === document.body || !u.el) {
    const e = document.createElement("div");
    return document.body.appendChild(e), n.mount(e);
  } else
    return n.mount(u.el);
}, yn = (u) => {
  const n = $t(u || {});
  return n && n.open(), n;
}, bn = (u) => {
  u.directive("loading", {
    mounted(n, e) {
      n.style.position = "relative";
      const t = n.getAttribute(`${A}-loading-text`) || "", l = n.getAttribute(`${A}-loading-spinner`) || "", d = n.getAttribute(`${A}-loading-background`) || "", i = n.getAttribute(`${A}-loading-zIndex`) || "";
      let c;
      e.modifiers.el && (c = document.body);
      const b = $t({
        text: t,
        spinner: l,
        background: d,
        lock: e.modifiers.lock,
        zIndex: parseInt(i),
        el: c || n
      });
      console.log("component"), console.log(b), e.value && b && b.open(), n.component = b;
    },
    updated(n, e) {
      e.value ? n.component.open() : n.component.close();
    }
  });
}, kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  loading: yn,
  vLoading: bn
}, Symbol.toStringTag, { value: "Module" })), wn = /* @__PURE__ */ K({
  __name: "Marquee",
  props: {
    width: {},
    height: {},
    speed: { default: 30 },
    direction: { default: "bottom" },
    step: { default: 1 }
  },
  setup(u) {
    const n = u, e = U(() => ({
      width: n.width,
      height: n.height,
      overflow: "hidden"
    })), t = ue({
      left: 0,
      top: 0,
      duration: 0
    }), l = U(() => ["left", "right"].includes(n.direction)), d = U(() => {
      const r = n.step > 1 ? `transform ${t.duration}s` : "";
      return l.value ? {
        display: "flex",
        width: parseInt(n.width) * 2 + "px",
        transform: `translateX(${t.left}px)`,
        transition: r
        //transition: `transform ${state.transition}s`
      } : {
        transform: `translateY(${t.top}px)`,
        transition: r
        //transition: `transform ${state.transition}s`
      };
    }), i = j(), c = j(), b = () => {
      const r = i.value, m = c.value, w = () => {
        const _ = m.offsetWidth, y = m.offsetHeight;
        switch (n.direction) {
          case "left":
            t.left + _ <= 0 ? (t.left = 0, t.duration = 0) : (t.left = t.left - n.step, t.duration = 0.3);
            break;
          case "right":
            t.left >= 0 ? (t.left = -_, t.duration = 0) : (t.left = t.left + n.step, t.duration = 0.3);
            break;
          case "bottom":
            t.top >= 0 ? (t.top = -y, t.duration = 0) : (t.top = t.top + n.step, t.duration = 0.3);
            break;
          default:
            t.top + y <= 0 ? (t.top = 0, t.duration = 0) : (t.top = t.top - n.step, t.duration = 0.3);
        }
      };
      let k = setInterval(w, n.speed);
      r.onmouseenter = function() {
        clearInterval(k);
      }, r.onmouseleave = function() {
        k = setInterval(w, n.speed);
      };
    };
    return se(() => {
      b();
    }), (r, m) => (g(), C("div", {
      ref_key: "container",
      ref: i,
      class: L([`marquess-${r.direction}`, "marquee-container"]),
      style: Q(e.value)
    }, [
      B("div", {
        style: Q(d.value),
        class: "inner-container"
      }, [
        B("div", {
          ref_key: "container1",
          ref: c,
          style: Q({ display: l.value ? "flex" : "" })
        }, [
          Z(r.$slots, "default")
        ], 4),
        B("div", {
          style: Q({ display: l.value ? "flex" : "" })
        }, [
          Z(r.$slots, "default")
        ], 4)
      ], 4)
    ], 6));
  }
}), Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Marquee: wn
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * vue-router v4.4.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var ut;
(function(u) {
  u.pop = "pop", u.push = "push";
})(ut || (ut = {}));
var ct;
(function(u) {
  u.back = "back", u.forward = "forward", u.unknown = "";
})(ct || (ct = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var dt;
(function(u) {
  u[u.aborted = 4] = "aborted", u[u.cancelled = 8] = "cancelled", u[u.duplicated = 16] = "duplicated";
})(dt || (dt = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const _n = Symbol(process.env.NODE_ENV !== "production" ? "router" : "");
Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Sn() {
  return oe(_n);
}
const Vn = /* @__PURE__ */ B("i", { class: "arrow" }, null, -1), Tn = ["innerHTML"], Oe = /* @__PURE__ */ K({
  __name: "Tooltip",
  props: {
    content: {},
    direction: { default: "top-left" },
    maxWidth: { default: 500 },
    delay: { default: 0 },
    always: { type: Boolean },
    appendToBody: { type: Boolean, default: !0 },
    transition: { default: "fade" },
    x: { default: 0 },
    y: { default: 0 },
    className: {},
    trigger: { default: "hover" },
    style: {},
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(), i = ue({
      clearTime: 0,
      visible: !1,
      tooltipStyle: {}
    }), c = j(), b = j(!1);
    te(
      () => t.disabled,
      (s) => {
        he(() => {
          !s && t.appendToBody && d.value && !b.value && (document.body.appendChild(d.value), b.value = !0);
        });
      }
    ), se(() => {
      he(() => {
        t.always && (i.visible = !0, w()), t.trigger === "click" ? document.addEventListener("click", a, !1) : (c.value.addEventListener("mouseenter", k, !1), c.value.addEventListener("mouseleave", _, !1)), t.appendToBody && d.value && (document.body.appendChild(d.value), b.value = !0);
      });
    }), ke(() => {
      t.trigger === "click" ? document.removeEventListener("click", a, !1) : (c.value.removeEventListener("mouseenter", k, !1), c.value.removeEventListener("mouseleave", _, !1)), t.appendToBody && d.value && document.body.removeChild(d.value);
    });
    const r = (s) => t.disabled ? !1 : t.content || s.content, m = (s) => s % 2 === 0 ? s : s + 1, w = () => {
      const s = Ie(c.value), p = xe().width, h = t.y + 8, S = {
        maxWidth: t.maxWidth + "px"
      };
      if (t.appendToBody) {
        const R = xe().height - s.top + h + "px";
        switch (t.direction) {
          case "top-left":
            S.left = s.left + t.x + "px", S.bottom = R;
            break;
          case "top":
            S.transform = "translateX(-50%)", S.left = m(s.left + s.width / 2 + t.x) + "px", S.bottom = R;
            break;
          case "top-right":
            S.right = p - (s.left + s.width + t.x) + "px", S.bottom = R;
            break;
          case "left":
            S.right = p - (s.left - 8 + t.x) + "px", S.top = m(s.top + s.height / 2) + "px", S.transform = "translateY(-50%)";
            break;
          case "right":
            S.left = s.left + s.width + 8 + t.x + "px", S.top = m(s.top + s.height / 2) + "px", S.transform = "translateY(-50%)";
            break;
          case "bottom-left":
            S.left = s.left + t.x + "px", S.top = s.top + s.height + h + "px";
            break;
          case "bottom":
            S.left = m(s.left + s.width / 2 + t.x) + "px", S.transform = "translateX(-50%)", S.top = s.top + s.height + h + "px";
            break;
          case "bottom-right":
            S.right = p - (s.left + s.width + t.x) + "px", S.top = s.top + s.height + h + "px";
            break;
        }
      }
      i.tooltipStyle = Object.assign({}, t.style, S);
    }, k = () => {
      t.disabled || t.always || (w(), window.clearTimeout(i.clearTime), i.visible = !0, t.delay && d.value && (d.value.addEventListener("mouseenter", y, !1), d.value.addEventListener("mouseleave", f, !1)));
    }, _ = () => {
      i.clearTime = window.setTimeout(() => {
        i.visible = !1;
      }, t.delay);
    }, y = () => {
      window.clearTimeout(i.clearTime);
    }, f = () => {
      _(), d.value.removeEventListener("mouseenter", y, !1), d.value.removeEventListener("mouseleave", f, !1);
    }, a = (s) => {
      t.always || (s && c.value.contains(s.target) ? (w(), i.visible = !0) : i.visible = !1), l("click", i.visible);
    };
    return n({ close: () => {
      i.visible = !1;
    } }), (s, p) => (g(), C("span", {
      ref_key: "el",
      ref: c,
      class: L([`${E(A)}-tooltip-box`])
    }, [
      Z(s.$slots, "default"),
      de(we, {
        name: `tooltip-${s.transition}`
      }, {
        default: le(() => [
          r(s.$slots) ? ie((g(), C("div", {
            key: 0,
            ref_key: "tooltipEl",
            ref: d,
            class: L([`${E(A)}-tooltip`, s.direction, s.className]),
            style: Q(i.tooltipStyle),
            onClick: p[0] || (p[0] = re(() => {
            }, ["stop"]))
          }, [
            Vn,
            s.content ? (g(), C("span", {
              key: 0,
              innerHTML: s.content
            }, null, 8, Tn)) : Z(s.$slots, "content", { key: 1 })
          ], 6)), [
            [me, i.visible]
          ]) : z("", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
}), $n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tooltip: Oe
}, Symbol.toStringTag, { value: "Module" })), Bn = ["data-height"], In = ["onMouseenter", "onMouseleave", "onClick"], An = { class: "menu-title" }, xn = { class: "name" }, Ln = {
  key: 0,
  class: "icon-arrow"
}, On = /* @__PURE__ */ K({
  __name: "MenuLi",
  props: {
    items: {},
    itemUl: {},
    layer: { default: 0 }
  },
  emits: ["click", "select"],
  setup(u, { emit: n }) {
    const e = n, t = Sn(), l = oe(`${A}MenuVisibleList`, []), d = oe(`${A}MenuVisibleListChange`), i = oe(`${A}MenuSelectKey`, ""), c = oe(`${A}MenuSelectKeyChange`), b = oe(`${A}MenuProps`, {}), r = (p) => {
      p.children && (p == null ? void 0 : p.children.length) > 0 && w(p, !0);
    }, m = (p) => {
      p.children && (p == null ? void 0 : p.children.length) > 0 && w(p, !1);
    }, w = (p, h) => {
      (b.trigger === "hover" && b.mode === "horizontal" || b.mode === "vertical" && b.collapse) && _(p, h);
    }, k = (p, h) => {
      p.disabled || ((b.trigger === "click" || b.mode === "vertical") && _(p, !l.value.includes(p.key)), p.children || (c && c(p.key), e("select", p), b.router && t.push(p.key)), e("click", p), h.stopPropagation());
    }, _ = (p, h) => {
      p.disabled || (h ? p.children && !l.value.includes(p.key) && d && d(p.key, h) : d && d(p.key, h));
    }, y = (p) => p && p.children ? p.children.length * b.liHeight + (p.childHeight || 0) : null, f = (p) => {
      e("select", p);
    }, a = (p) => {
      e("click", p);
    }, o = (p) => {
      const h = p.getAttribute("data-height");
      h && (p.style.height = h + "px", p.style.overflow = "hidden");
    }, s = (p) => {
      p.style.height = "", p.style.overflow = "";
    };
    return (p, h) => {
      const S = Ue("MenuLi", !0);
      return g(), X(we, {
        name: "menu",
        onBeforeEnter: o,
        onAfterEnter: s,
        onAfterLeave: s,
        onBeforeLeave: o
      }, {
        default: le(() => [
          ie(B("ul", {
            class: L({ ["layer-" + p.layer]: !0, "is-child": p.itemUl }),
            "data-height": y(p.itemUl)
          }, [
            (g(!0), C(q, null, ne(p.items, (T) => (g(), C("li", {
              key: T.key,
              class: L({
                disabled: T.disabled,
                "is-down": E(l).includes(T.key),
                selected: T.key === E(i)
              }),
              onMouseenter: (R) => r(T),
              onMouseleave: (R) => m(T),
              onClick: (R) => k(T, R)
            }, [
              B("span", An, [
                de(E(Oe), {
                  content: T.label,
                  direction: "right",
                  x: 15,
                  disabled: !(p.layer === 0 && !T.children && E(b).collapse)
                }, {
                  default: le(() => [
                    T.icon ? (g(), C("i", {
                      key: 0,
                      class: L(["icon", `icon-${T.icon}`])
                    }, null, 2)) : z("", !0)
                  ]),
                  _: 2
                }, 1032, ["content", "disabled"]),
                B("span", xn, J(T.label), 1),
                T.children ? (g(), C("i", Ln)) : z("", !0)
              ]),
              T.children ? (g(), X(S, {
                key: 0,
                items: T.children,
                itemUl: T,
                layer: p.layer + 1,
                onClick: a,
                onSelect: f
              }, null, 8, ["items", "itemUl", "layer"])) : z("", !0)
            ], 42, In))), 128))
          ], 10, Bn), [
            [me, !p.itemUl || E(l).includes(p.itemUl.key)]
          ])
        ]),
        _: 1
      });
    };
  }
}), Dn = /* @__PURE__ */ K({
  __name: "Menu",
  props: {
    mode: { default: "vertical" },
    items: {},
    className: {},
    trigger: { default: "hover" },
    theme: { default: "light" },
    liHeight: { default: 40 },
    openKeys: { default: () => [] },
    selectedKey: { default: "" },
    router: { type: Boolean },
    collapse: { type: Boolean }
  },
  emits: ["click", "select"],
  setup(u, { emit: n }) {
    const e = u, t = n;
    fe(`${A}MenuProps`, e);
    const l = j(e.openKeys);
    fe(`${A}MenuVisibleList`, l), fe(`${A}MenuVisibleListChange`, (r, m) => {
      if (m)
        l.value.push(r);
      else {
        const w = l.value.indexOf(r);
        l.value.splice(w, 1);
      }
    });
    const d = j(e.selectedKey);
    fe(`${A}MenuSelectKey`, d), fe(`${A}MenuSelectKeyChange`, (r) => {
      d.value = r;
    });
    const i = () => {
      l.value = [], d.value = "";
    }, c = (r) => {
      t("click", r);
    }, b = (r) => {
      t("select", r);
    };
    return se(() => {
      e.trigger === "click" && e.mode === "horizontal" && document.addEventListener("click", i, !1);
    }), ke(() => {
      e.trigger === "click" && e.mode === "horizontal" && document.removeEventListener("click", i, !1);
    }), (r, m) => (g(), C("div", {
      class: L({
        [`${E(A)}-menu`]: !0,
        [r.mode]: !0,
        [r.theme]: !0,
        collapse: r.collapse && r.mode === "vertical"
      })
    }, [
      de(On, {
        items: r.items,
        onClick: c,
        onSelect: b
      }, null, 8, ["items"])
    ], 2));
  }
}), En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: Dn
}, Symbol.toStringTag, { value: "Module" })), ze = (u) => {
  const n = document.createElement("div");
  document.body.appendChild(n), Object.assign(u, {
    isAlert: !0,
    closeModal: !1,
    // modelValue: true,
    remove: () => {
      e.unmount(), document.body.removeChild(n);
    }
  });
  const e = ft(Qe, u), t = e.mount(n);
  return t.open(), t;
}, Mn = (u) => ze(u || {}), Pn = (u, n) => (n || (n = {}), ze(
  Object.assign(
    {},
    {
      title: n.title || "信息",
      content: u,
      confirm: n.confirm || "确定",
      cancel: "取消",
      className: "dialog-confirm"
    },
    n
  )
)), Rn = (u, n) => (n || (n = {}), ze(
  Object.assign(
    {},
    {
      title: n.title || "信息",
      content: u,
      confirm: n.confirm || "确定",
      className: "dialog-alert"
    },
    n
  )
)), zn = (u, n) => (n || (n = {}), ze(
  Object.assign(
    {},
    {
      content: u,
      className: "dialog-msg",
      showClose: !1,
      autoClose: n.autoClose || 3,
      modal: n && n.modal || !1
    },
    n
  )
)), Nn = () => {
  const u = document.querySelectorAll(`.${A}-dialog-isAlert`);
  u && u.length > 0 && u.forEach((n) => {
    document.body.removeChild(n), document.body.style.overflow = "", document.body.style.paddingRight = "";
  });
}, Hn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  alert: Rn,
  clear: Nn,
  confirm: Pn,
  dialog: Mn,
  msg: zn
}, Symbol.toStringTag, { value: "Module" })), jn = {
  key: 0,
  class: "total"
}, Fn = { class: "page-list" }, Wn = { key: 0 }, Un = ["title"], Yn = ["title", "onClick", "textContent"], Kn = { key: 1 }, Gn = ["title"], Jn = { key: 2 }, Zn = ["title"], Xn = {
  key: 2,
  class: "show-jumper"
}, Bt = /* @__PURE__ */ K({
  __name: "Pagination",
  props: {
    current: { default: 1 },
    total: {},
    pageSize: { default: 20 },
    showJumper: { type: Boolean },
    pagerCount: { default: 5 },
    pageSizes: { default: () => [] },
    showTotal: { type: Boolean },
    hideSinglePage: { type: Boolean },
    format: { type: Boolean }
  },
  emits: ["update:current", "change", "changePageSizes"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = ue({
      active: e.current,
      // 当前页
      goToPage: e.current,
      // 快速跳到第几页
      selectChange: e.pageSize
    }), d = U(() => Math.ceil(e.total / l.selectChange)), i = U(() => e.hideSinglePage && d.value <= 1), c = U(() => {
      let y = 0, f = d.value - 1;
      const a = parseInt((e.pagerCount / 2).toString());
      if (l.active + a < d.value && (f = l.active + a), l.active >= e.pagerCount ? y = l.active - a : f = e.pagerCount > d.value ? d.value : e.pagerCount, d.value - l.active < e.pagerCount) {
        const p = d.value - e.pagerCount + 1;
        y = p > y ? y : p;
      }
      y < 2 && (y = 2), f >= d.value - 1 && (f = d.value - 1);
      const o = [];
      let s = y;
      for (; s <= f; )
        o.push(s), s++;
      return [o, y, f];
    }), b = U(() => parseInt(c.value[2].toString())), r = U(() => parseInt(c.value[1].toString())), m = U(() => {
      const y = [];
      return e.pageSizes.forEach((f) => {
        y.push({ label: `每页${f}条`, value: f });
      }), y;
    }), w = U(() => {
      let y = e.total.toString();
      return e.format && (y = e.total.toString().replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,")), y;
    });
    te(
      () => l.selectChange,
      (y) => {
        l.active > d.value && (l.active = d.value), t("changePageSizes", y);
      }
    );
    const k = (y, f) => {
      if (f)
        return;
      let a = y;
      y > d.value && (a = d.value), y < 1 && (a = 1), l.active = a, l.goToPage = a, t("update:current", l.active), t("change", l.active);
    }, _ = () => {
      const y = l.goToPage;
      k(y);
    };
    return (y, f) => ie((g(), C("div", {
      class: L(`${E(A)}-page`)
    }, [
      y.showTotal ? (g(), C("div", jn, [
        pe(" 共"),
        B("span", null, J(w.value), 1),
        pe("条 ")
      ])) : z("", !0),
      y.pageSizes.length > 0 ? (g(), X(E(Je), {
        key: 1,
        modelValue: l.selectChange,
        "onUpdate:modelValue": f[0] || (f[0] = (a) => l.selectChange = a),
        options: m.value
      }, null, 8, ["modelValue", "options"])) : z("", !0),
      B("div", Fn, [
        B("ul", null, [
          B("li", null, [
            B("a", {
              title: "上一页",
              class: L(["prev", { disabled: l.active === 1 }]),
              onClick: f[1] || (f[1] = (a) => k(l.active - 1, l.active === 1))
            }, "<", 2)
          ]),
          B("li", null, [
            B("a", {
              title: "1",
              class: L({ active: l.active === 1 }),
              onClick: f[2] || (f[2] = (a) => k(1, l.active === 1))
            }, "1", 2)
          ]),
          r.value > 2 ? (g(), C("li", Wn, [
            B("a", {
              title: `向前${y.pagerCount}页`,
              class: "jump-prev",
              onClick: f[3] || (f[3] = (a) => k(l.active - y.pagerCount))
            }, null, 8, Un)
          ])) : z("", !0),
          (g(!0), C(q, null, ne(c.value[0], (a, o) => (g(), C("li", { key: o }, [
            B("a", {
              title: a.toString(),
              class: L({ active: a === l.active }),
              onClick: (s) => k(a, a === l.active),
              textContent: J(a)
            }, null, 10, Yn)
          ]))), 128)),
          d.value > b.value + 1 ? (g(), C("li", Kn, [
            B("a", {
              title: `向后${y.pagerCount}页`,
              class: "jump-next",
              onClick: f[4] || (f[4] = (a) => k(l.active + y.pagerCount))
            }, null, 8, Gn)
          ])) : z("", !0),
          d.value > 1 ? (g(), C("li", Jn, [
            B("a", {
              title: d.value + "",
              class: L({ active: l.active === d.value }),
              onClick: f[5] || (f[5] = (a) => k(d.value, l.active === d.value))
            }, J(d.value), 11, Zn)
          ])) : z("", !0),
          B("li", null, [
            B("a", {
              title: "下一页",
              class: L(["next", { disabled: d.value <= l.active }]),
              onClick: f[6] || (f[6] = (a) => k(l.active + 1, d.value <= l.active))
            }, ">", 2)
          ])
        ])
      ]),
      y.showJumper ? (g(), C("div", Xn, [
        pe(" 前往 "),
        de(E(Ke), {
          modelValue: l.goToPage,
          "onUpdate:modelValue": f[7] || (f[7] = (a) => l.goToPage = a),
          modelModifiers: { number: !0 },
          maxlength: "5",
          onBlur: _
        }, null, 8, ["modelValue"]),
        pe(" 页 ")
      ])) : z("", !0)
    ], 2)), [
      [me, !i.value]
    ]);
  }
}), Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pagination: Bt
}, Symbol.toStringTag, { value: "Module" })), qn = { class: "content" }, es = { class: "footer" }, ts = /* @__PURE__ */ K({
  __name: "Popover",
  props: {
    trigger: { default: "click" },
    className: {},
    confirm: {},
    cancel: {},
    callback: {},
    content: {}
  },
  setup(u) {
    const n = u, e = j(), t = U(() => n.className ? `${A}-popover ${n.className}` : `${A}-popover`), l = () => {
      e.value.close();
    }, d = () => {
      l(), n.callback && n.callback();
    };
    return (i, c) => (g(), X(E(Oe), {
      ref_key: "el",
      ref: e,
      "class-name": t.value,
      trigger: i.trigger
    }, {
      content: le(() => [
        B("div", qn, [
          pe(J(i.content) + " ", 1),
          i.content ? z("", !0) : Z(i.$slots, "content", { key: 0 })
        ]),
        B("div", es, [
          i.cancel ? (g(), X(E(Le), {
            key: 0,
            size: "mini",
            onClick: l
          }, {
            default: le(() => [
              pe(J(i.cancel), 1)
            ]),
            _: 1
          })) : z("", !0),
          i.confirm ? (g(), X(E(Le), {
            key: 1,
            size: "mini",
            type: "primary",
            onClick: d
          }, {
            default: le(() => [
              pe(J(i.confirm), 1)
            ]),
            _: 1
          })) : z("", !0)
        ])
      ]),
      default: le(() => [
        Z(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["class-name", "trigger"]));
  }
}), ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Popover: ts
}, Symbol.toStringTag, { value: "Module" })), os = {
  key: 0,
  class: "progress-text"
}, ns = {
  key: 0,
  class: "progress-text progress-fixed-text"
}, ss = { class: "custom-content" }, as = {
  key: 0,
  class: "progress-text"
}, is = /* @__PURE__ */ K({
  __name: "Progress",
  props: {
    type: { default: "line" },
    modelValue: { default: 0 },
    radius: { default: 0 },
    border: { default: 0 },
    color: {},
    borderColor: {},
    duration: { default: 1e3 },
    showText: { type: Boolean, default: !0 },
    followText: { type: Boolean, default: !0 },
    className: {},
    status: {}
  },
  setup(u) {
    const n = u, e = ue({
      percent: 0
    }), t = U(() => ({
      height: n.border ? n.border + "px" : "",
      width: e.percent + "%",
      background: n.borderColor,
      transition: `all ${n.duration / 1e3}s`
    })), l = () => {
      let i = -1;
      i = window.setInterval(() => {
        e.percent < n.modelValue && e.percent < 100 ? e.percent++ : clearInterval(i);
      }, n.duration / n.modelValue);
    }, d = (i) => {
      const c = {};
      return c.width = n.radius * 2 + "px", c.height = n.radius * 2 + "px", i === "pro" ? (c.borderWidth = `${n.border}px`, c.borderColor = n.color) : i === "circle" ? (c.left = `-${n.border}px`, c.top = `-${n.border}px`, e.percent > 50 ? c.clip = "rect(auto,auto,auto,auto)" : c.clip = `rect(0,${n.radius * 2}px,${n.radius * 2}px,${n.radius}px)`) : i === "left" ? (c.borderWidth = `${n.border}px`, c.borderColor = n.borderColor, c.clip = `rect(0, ${n.radius}px, ${n.radius * 2}px, 0px)`, c.transform = "rotate(" + 3.6 * e.percent + "deg)") : i === "right" && (c.borderWidth = `${n.border}px`, c.borderColor = n.borderColor, c.clip = `rect(0, ${n.radius * 2}px, ${n.radius * 2}px, ${n.radius}px)`), c;
    };
    return se(() => {
      n.type === "circle" ? l() : n.type === "line" && setTimeout(() => {
        e.percent = n.modelValue;
      }, 10);
    }), (i, c) => (g(), C("div", {
      class: L([`${E(A)}-progress`, i.status])
    }, [
      i.type === "line" ? (g(), C("div", {
        key: 0,
        style: Q({
          width: i.radius ? i.radius + "px" : "",
          background: i.color,
          minHeight: i.border ? i.border + "px" : ""
        }),
        class: L([i.className, E(A) + "-progress-line"])
      }, [
        Z(i.$slots, "default"),
        B("span", {
          class: "progress-bar",
          style: Q(t.value)
        }, [
          i.showText && i.followText ? (g(), C("span", os, [
            B("b", null, J(e.percent), 1),
            pe("% ")
          ])) : z("", !0)
        ], 4),
        i.showText && !i.followText ? (g(), C("span", ns, [
          B("b", null, J(e.percent), 1),
          pe("% ")
        ])) : z("", !0)
      ], 6)) : i.type === "circle" ? (g(), C("div", {
        key: 1,
        style: Q(d("pro")),
        class: L([i.className, E(A) + "-progress-circle"])
      }, [
        B("div", ss, [
          Z(i.$slots, "default")
        ]),
        i.showText ? (g(), C("span", as, [
          B("b", null, J(e.percent), 1),
          pe("% ")
        ])) : z("", !0),
        B("div", {
          style: Q(d("circle")),
          class: "circle-circle"
        }, [
          B("span", {
            style: Q(d("left")),
            class: "circle-left"
          }, null, 4),
          e.percent >= 50 ? (g(), C("span", {
            key: 0,
            style: Q(d("right")),
            class: "circle-right"
          }, null, 4)) : z("", !0)
        ], 4)
      ], 6)) : z("", !0)
    ], 2));
  }
}), rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Progress: is
}, Symbol.toStringTag, { value: "Module" })), us = ["innerHTML"], cs = ["innerHTML"], ds = ["innerHTML"], fs = /* @__PURE__ */ K({
  __name: "Slider",
  props: {
    modelValue: { default: 0 },
    min: { default: 0 },
    max: { default: 100 },
    disabled: { type: Boolean, default: !1 },
    step: { default: 1 },
    showStops: { type: Boolean },
    showTooltip: { type: Boolean },
    formatTooltip: {},
    marks: {},
    trigger: {}
  },
  emits: ["update:modelValue", "change"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(), d = j(0), i = j(0), c = U(() => Ce(e.disabled) || !1), b = U(() => {
      if (e.showTooltip) {
        const M = a(d.value);
        return e.formatTooltip ? e.formatTooltip(M) : M;
      } else
        return "";
    }), r = U(() => {
      if (e.showTooltip) {
        const M = a(i.value);
        return e.formatTooltip ? e.formatTooltip(M) : M;
      } else
        return "";
    }), m = U(() => {
      if (_.value) {
        let M = d.value;
        return d.value > i.value && (M = i.value), {
          left: M + "%",
          width: Math.abs(i.value - d.value) + "%"
        };
      } else
        return {
          left: "0px",
          width: d.value + "%"
        };
    }), w = U(() => {
      const M = [];
      if (e.showStops) {
        const x = (e.max - e.min) / e.step;
        for (let v = 1; v < x; v++)
          M.push(v * 100 / x + "%");
      }
      return M;
    }), k = U(() => {
      const M = [];
      if (e.marks)
        for (const x in e.marks)
          M.push({
            label: e.marks[x],
            left: x + "%"
          });
      return M;
    }), _ = U(() => typeof e.modelValue == "object" && e.modelValue.length === 2), y = U(() => {
      var M;
      return (M = l == null ? void 0 : l.value) == null ? void 0 : M.offsetWidth;
    }), f = U(() => 100 / ((e.max - e.min) / e.step)), a = (M) => Math.round(
      (e.max - e.min) * M / 100 + e.min
    ), o = (M) => {
      if (c.value)
        return;
      const x = Ie(l.value).left;
      let v = (M.pageX - x) / y.value * 100;
      v < 0 && (v = 0), v > 100 && (v = 100);
      const I = parseInt(Math.round(v / f.value).toString()), V = f.value * I;
      if (_.value) {
        const O = Math.abs(v - d.value), N = Math.abs(v - i.value);
        O < N ? d.value = V : i.value = V;
      } else
        d.value = V;
      if (Number(Math.abs(d.value - i.value).toFixed(4)) < Number(f.value.toFixed(4)) || d.value.toFixed(2) === i.value.toFixed(2))
        if (console.log("重叠点所在的位置"), d.value === 0)
          i.value = f.value;
        else {
          if (I < 1)
            return;
          d.value = f.value * (I - 1);
        }
      d.value > i.value ? s("change") : s();
    }, s = (M) => {
      let x = 0;
      if (_.value) {
        const v = a(d.value), I = a(i.value);
        x = [v, I], v > I && M === "change" && (x = [I, v]);
      } else
        x = a(d.value);
      t("update:modelValue", x), t("change", x);
    }, p = (M, x) => {
      if (c.value)
        return;
      const { offsetLeft: v } = x.target, I = x.pageX - v;
      document.onmousemove = (V) => {
        let O = (V.pageX - I) / y.value * 100;
        O < 0 && (O = 0), O > 100 && (O = 100), M === "left" ? d.value = O : i.value = O, e.trigger && o(V);
      }, document.onmouseup = (V) => {
        e.trigger || o(V), document.onmousemove = null, document.onmouseup = null;
      }, x.preventDefault(), x.stopPropagation();
    }, h = (M) => {
      M.preventDefault(), M.stopPropagation();
    }, S = (M) => (M - e.min) / (e.max - e.min) * 100, T = (M, x) => {
      let v = M;
      M < e.min && (v = e.min), M > e.max && (v = e.max);
      const I = S(v);
      x === "left" && (d.value = I), x === "right" && (i.value = I);
    }, R = () => {
      if (_.value) {
        let M = 0, x = 0;
        typeof e.modelValue == "object" && (M = e.modelValue[0], x = e.modelValue[1]), T(M, "left"), T(x, "right");
      } else
        T(e.modelValue, "left");
    };
    return te(
      () => e.modelValue,
      () => {
        R();
      }
    ), se(() => {
      R();
    }), (M, x) => (g(), C("div", {
      class: L({ [E(A) + "-slider"]: !0, disabled: c.value }),
      ref_key: "sliderEl",
      ref: l
    }, [
      B("div", {
        class: L(`${E(A)}-slider-runway`),
        onClick: o
      }, [
        B("span", {
          class: "slider-control",
          style: Q({ left: d.value + "%" }),
          onMousedown: x[0] || (x[0] = re((v) => p("left", v), ["stop"])),
          onClick: re(h, ["stop"])
        }, [
          M.showTooltip ? (g(), C("i", {
            key: 0,
            innerHTML: b.value,
            class: "slider-tooltip"
          }, null, 8, us)) : z("", !0)
        ], 36),
        _.value ? (g(), C("span", {
          key: 0,
          class: "slider-control",
          onMousedown: x[1] || (x[1] = re((v) => p("right", v), ["stop"])),
          onClick: re(h, ["stop"]),
          style: Q({ left: i.value + "%" })
        }, [
          M.showTooltip ? (g(), C("i", {
            key: 0,
            innerHTML: r.value,
            class: "slider-tooltip"
          }, null, 8, cs)) : z("", !0)
        ], 36)) : z("", !0),
        B("span", {
          class: "slider-bar",
          style: Q(m.value)
        }, null, 4),
        (g(!0), C(q, null, ne(w.value, (v) => (g(), C("i", {
          class: "slider-stop",
          key: v,
          style: Q({ left: v })
        }, null, 4))), 128)),
        (g(!0), C(q, null, ne(k.value, (v, I) => (g(), C("span", {
          class: "slider-marks",
          key: I,
          style: Q({ left: v.left })
        }, [
          B("i", {
            innerHTML: v.label,
            class: "slider-marks-text"
          }, null, 8, ds)
        ], 4))), 128))
      ], 2)
    ], 2));
  }
}), ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Slider: fs
}, Symbol.toStringTag, { value: "Module" })), ms = K({
  name: "HeaderSlot",
  props: {
    data: Object,
    index: Number
  },
  setup(u) {
    return u.data.slots && u.data.slots.header ? () => [
      Ve(
        "span",
        {},
        u.data.slots.header({
          column: u.data,
          index: u.index
        })
      )
    ] : () => [];
  }
}), gs = ["title", "colspan", "rowspan", "onMousemove"], hs = { key: 1 }, vs = {
  key: 2,
  class: "caret-wrapper"
}, ys = ["onClick"], bs = ["onClick"], ks = ["onMousedown"], ws = /* @__PURE__ */ K({
  __name: "TableHeader",
  props: {
    showHeader: { type: Boolean },
    drag: { type: Boolean },
    title: { type: Boolean },
    selectChecked: { default: 0 },
    sortSingle: { type: Boolean },
    headMaxLayer: { default: 1 }
  },
  emits: ["event"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = j(), i = oe(`${A}GetColumns`, []), c = ue({
      checkboxChecked: t.selectChecked.toString(),
      // columns: getColumns,
      sortBy: {}
    });
    te(
      () => t.selectChecked,
      (a) => {
        c.checkboxChecked = a.toString();
      }
    );
    const b = (a) => i.value.filter((o) => o.type !== "extend" && o._layer === a), r = (a) => {
      if (a.title) {
        if (t.title)
          return a.label;
      } else
        return null;
      return null;
    }, m = (a, o) => {
      y("mouseMove", { evt: a, index: o });
    }, w = (a, o) => {
      y("mouseDown", { evt: a, index: o });
    }, k = (a) => {
      y("checkboxChange", !!a);
    }, _ = (a, o) => {
      t.sortSingle && (c.sortBy = {}), c.sortBy[a] = o, y("sortClick", c.sortBy);
    }, y = (a, o) => {
      l("event", a, o);
    };
    return n({ scrollTop: (a) => {
      a ? (d.value.style.transform = `translateY(${a}px) translateZ(100px)`, d.value.className = "transform") : (d.value.style.transform = "", d.value.className = "");
    } }), (a, o) => a.showHeader ? (g(), C("thead", {
      key: 0,
      ref_key: "el",
      ref: d
    }, [
      (g(!0), C(q, null, ne(a.headMaxLayer, (s) => (g(), C("tr", {
        key: s,
        class: L({ drag: a.drag })
      }, [
        (g(!0), C(q, null, ne(b(s), (p, h) => (g(), C("th", {
          key: h,
          class: L([p.fixed, p.className]),
          style: Q({ textAlign: p.align }),
          title: r(p),
          colspan: p._colspan,
          rowspan: p._rowspan,
          onMousemove: (S) => m(S, h)
        }, [
          p.type === "selection" ? (g(), X(E(Te), {
            key: 0,
            modelValue: c.checkboxChecked,
            "onUpdate:modelValue": o[0] || (o[0] = (S) => c.checkboxChecked = S),
            class: L({ "some-select": a.selectChecked === 2 }),
            value: "1",
            onChange: k
          }, null, 8, ["modelValue", "class"])) : (g(), C(q, { key: 1 }, [
            p.slots && p.slots.header ? (g(), X(ms, {
              key: 0,
              data: p,
              index: h
            }, null, 8, ["data", "index"])) : (g(), C("span", hs, J(p.label), 1)),
            p.sortBy ? (g(), C("span", vs, [
              B("i", {
                class: L(["sort-caret asc", { active: c.sortBy[p.prop] === "asc" }]),
                onClick: (S) => _(p.prop, "asc")
              }, null, 10, ys),
              B("i", {
                class: L(["sort-caret desc", { active: c.sortBy[p.prop] === "desc" }]),
                onClick: (S) => _(p.prop, "desc")
              }, null, 10, bs)
            ])) : z("", !0)
          ], 64)),
          a.drag && p.drag !== !1 ? (g(), C("a", {
            key: 2,
            class: "drag-line",
            onMousedown: (S) => w(S, h)
          }, null, 40, ks)) : z("", !0)
        ], 46, gs))), 128))
      ], 2))), 128))
    ], 512)) : z("", !0);
  }
}), Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tag: Pe
}, Symbol.toStringTag, { value: "Module" })), je = K({
  name: "TableTd",
  components: { Checkbox: Te, Tooltip: Oe, Tag: Pe },
  props: {
    column: {
      type: Object,
      default: () => ({})
    },
    columnIndex: {
      type: Number,
      default: 0
    },
    //当前列号
    row: {
      type: Object,
      default: () => ({})
    },
    index: {
      type: Number,
      default: 0
    },
    // 当前行号
    toggle: Boolean,
    // 扩展或子级展开收起状态
    parentRow: Object,
    //子级下拉时，包含的父级信息
    title: Boolean,
    checked: Boolean,
    colspan: {
      type: Number,
      default: 0
    },
    // 扩展列时才有传
    rowColSpan: {
      type: Object,
      default: () => ({})
    },
    rowspanColspanList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["cellClick", "toggleExtend"],
  setup(u, { emit: n }) {
    const e = oe(`${A}SetSelectedRows`), t = j(u.column.fixed), l = j(u.column.className);
    l.value && u.column.fixed ? t.value += " " + l.value : l.value && (t.value = l.value);
    let d = !1, i = 0, c = j(u.colspan).value;
    Object.keys(u.rowColSpan).length > 0 && (d = u.rowColSpan.rowSpan === 0 || u.rowColSpan.colSpan === 0, i = u.rowColSpan && u.rowColSpan.rowSpan, c = u.rowColSpan && u.rowColSpan.colSpan);
    const b = U(() => !u.column.title || u.column.tooltip === !0 || u.column.tooltip && u.column.tooltip.show ? null : u.title ? u.row[u.column.prop] : null), r = () => {
      n(
        "cellClick",
        u.row,
        u.column,
        u.index,
        u.columnIndex
      );
    }, m = j(u.checked);
    te(
      () => u.checked,
      (y) => {
        m.value = y;
      }
    );
    const w = () => {
      n("toggleExtend");
    };
    function k(y) {
      return y.toString().padStart(2, "0");
    }
    const _ = () => {
      const y = u.row[u.column.prop];
      if (u.column.slots && u.column.slots.default)
        return u.column.slots.default({
          row: u.row,
          index: u.index,
          extend: w,
          toggle: u.toggle,
          parentRow: u.parentRow
        });
      if (u.column.placeholder && y === "")
        return u.column.placeholder;
      if (u.column.formatter) {
        if (["date", "dateTime"].includes(u.column.formatter)) {
          if (y) {
            const f = new Date(y), a = `${f.getFullYear()}-${k(
              f.getMonth() + 1
            )}-${k(f.getDate())}`;
            switch (u.column.formatter) {
              case "dateTime":
                return `${a} ${k(f.getHours())}:${k(
                  f.getMinutes()
                )}:${k(f.getSeconds())}`;
              default:
                return a;
            }
          }
          return y;
        }
        return u.column.formatter(
          u.row,
          u.column,
          y,
          u.index
        );
      } else {
        if (u.column.type === "selection")
          return Ve(Te, {
            modelValue: m.value,
            onChange: (f) => {
              e(f, u.row, u.index), m.value = f;
            }
          });
        if (u.column.tooltip === !0 || u.column.tooltip && !u.column.tooltip.disabled) {
          let f = { content: y, direction: "top" };
          return u.column.tooltip.disabled && (f = Object.assign(f, u.column.tooltip)), Ve(Oe, f, () => y);
        } else if (typeof u.column.tag == "object") {
          if (!y)
            return y;
          const f = Object.assign({ size: "small" }, u.column.tag, {
            type: u.column.tag.dict[y]
          });
          let a = y;
          return typeof u.column.dict == "object" && (a = u.column.dict[y]), Ve(Pe, f, () => a);
        } else
          return u.column.type === "index" ? u.index + 1 : typeof u.column.dict == "object" ? y && u.column.dict[y] : y;
      }
    };
    return d ? () => [] : () => [
      Ve(
        "td",
        {
          class: t.value,
          rowspan: i > 1 ? i : null,
          colspan: c > 1 ? c : null,
          style: "text-align:" + u.column.align,
          title: b.value,
          onClick: r
        },
        _()
      )
    ];
  }
}), _s = ["onClick"], Ss = ["onCllick"], Vs = /* @__PURE__ */ K({
  __name: "TableBody",
  props: {
    data: {},
    rowColSpan: {},
    hasChild: { type: Boolean },
    lazyLoad: {},
    extendToggle: { type: Boolean },
    title: { type: Boolean },
    selectedRows: {}
  },
  emits: ["rowClick", "cellClick"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = oe(`${A}GetColumns`), d = ue({
      toggle: {},
      // {1: true, 2: false, 0: false} // 对应每行展开或收起状态
      rowspanColspanList: []
    }), i = j(e.data), c = U(() => l.value.filter((f) => f.type === "extend" && !f.children)), b = U(() => l.value.filter((f) => f.type !== "extend" && !f.children)), r = (f) => d.toggle[f] === void 0 ? e.extendToggle : d.toggle[f], m = (f, a) => {
      (c.value.length > 0 || e.hasChild) && (typeof d.toggle[f] > "u" ? d.toggle[f] = !e.extendToggle : d.toggle[f] = !d.toggle[f], console.log(d.toggle[f]), d.toggle[f] && e.lazyLoad && e.lazyLoad(a, (o) => {
        o && o.length > 0 && (a.children = o);
      }));
    }, w = (f, a) => {
      t("rowClick", f, a);
    }, k = (f, a, o, s) => {
      t("cellClick", f, a, o, s);
    }, _ = U(() => {
      const f = [];
      return e.rowColSpan && e.rowColSpan.length > 0 && e.rowColSpan.forEach((a) => {
        if (f.push(a), a.colSpan && a.colSpan > 1)
          for (let o = 1; o < a.colSpan; o++)
            f.push({
              row: a.row,
              col: a.col + o,
              colSpan: 0
            });
        if (a.rowSpan && a.rowSpan > 1)
          for (let o = 1; o < a.rowSpan; o++)
            f.push({
              row: a.row + o,
              col: a.col,
              rowSpan: 0
            });
      }), f;
    }), y = (f, a) => {
      const o = _.value.filter((s) => s.row === f && a === s.col);
      return o.length > 0 ? o[0] : [];
    };
    return (f, a) => (g(), C("tbody", null, [
      (g(!0), C(q, null, ne(i.value, (o, s) => (g(), C(q, { key: s }, [
        B("tr", {
          class: L({
            warning: f.selectedRows.indexOf(o) !== -1,
            [o.trClass]: o.trClass
          }),
          onClick: (p) => w(o, s)
        }, [
          (g(!0), C(q, null, ne(b.value, (p, h) => (g(), X(je, {
            key: h,
            checked: f.selectedRows.indexOf(o) !== -1,
            column: p,
            row: o,
            index: s,
            "column-index": h,
            title: f.title,
            toggle: r(s),
            "row-col-span": y(s, h),
            "rowspan-colspan-list": d.rowspanColspanList,
            onToggleExtend: (S) => m(s, o),
            onCellClick: k
          }, null, 8, ["checked", "column", "row", "index", "column-index", "title", "toggle", "row-col-span", "rowspan-colspan-list", "onToggleExtend"]))), 128))
        ], 10, _s),
        r(s) && c.value.length > 0 ? (g(), C("tr", {
          key: "tr" + s,
          class: L(["extend", { warning: f.selectedRows.indexOf(o) !== -1 }])
        }, [
          de(je, {
            column: c.value[0],
            row: o,
            index: s,
            colspan: b.value.length
          }, null, 8, ["column", "row", "index", "colspan"])
        ], 2)) : z("", !0),
        f.hasChild ? (g(!0), C(q, { key: 1 }, ne(o.children, (p, h) => ie((g(), C("tr", {
          key: "child" + h,
          class: L([{ [o.trClass]: o.trClass }, "tr-child"]),
          onCllick: (S) => w(p, h)
        }, [
          (g(!0), C(q, null, ne(b.value, (S, T) => (g(), X(je, {
            key: "childTd" + T,
            column: S,
            row: p,
            index: h,
            "column-index": T,
            title: f.title,
            "parent-row": o,
            onCellClick: k
          }, null, 8, ["column", "row", "index", "column-index", "title", "parent-row"]))), 128))
        ], 42, Ss)), [
          [me, r(s)]
        ])), 128)) : z("", !0)
      ], 64))), 128))
    ]));
  }
}), Ts = ["width"], $s = { key: 0 }, Bs = ["colspan"], Is = {
  key: 0,
  class: "table-drag-line"
}, As = {
  key: 0,
  class: "table-page-space"
}, xs = /* @__PURE__ */ K({
  __name: "Table",
  props: {
    data: { default: () => [] },
    height: {},
    width: {},
    className: { default: "" },
    hover: { type: Boolean, default: !0 },
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !0 },
    ellipsis: { type: Boolean, default: !0 },
    showHeader: { type: Boolean, default: !0 },
    drag: { type: Boolean, default: !0 },
    dragLine: { type: Boolean, default: !0 },
    dragWidth: { default: () => [60, 0] },
    title: { type: Boolean, default: !0 },
    emptyText: { default: "暂无数据" },
    rowColSpan: {},
    hasChild: { type: Boolean },
    lazyLoad: {},
    extendToggle: { type: Boolean },
    sortSingle: { type: Boolean },
    columns: {},
    pagination: { default: () => ({}) },
    fixedBottomScroll: { type: [Boolean, String] }
  },
  emits: ["selectClick", "sortChange", "rowClick", "cellClick", "dragChange", "scroll"],
  setup(u, { expose: n, emit: e }) {
    const t = Re(), l = u, d = e, i = j(), c = j(), b = j(), r = j([]), m = ue({
      colWidth: [],
      selectedRows: [],
      // 已选择的行
      dragHead: {},
      // 临时存放表头拖动信息
      ctrlIsDown: !1,
      // 是否按下ctrl键
      ctrlRowIndex: -1,
      // 按下ctrl键盘时点击的checkbox序号
      isSetThWidth: !1,
      // 用于记录是否已经重新设置过表头的实际宽
      headMaxLayer: 1,
      // 表头的层级
      stateHeight: l.height
    });
    te(
      () => l.height,
      ($) => {
        m.stateHeight = $;
      }
    );
    const w = U(() => {
      const $ = m.selectedRows.length;
      return $ === 0 ? 0 : $ === l.data.length ? 1 : 2;
    }), k = ($, H = !0) => {
      const D = m.selectedRows.indexOf($);
      H ? D === -1 && m.selectedRows.push($) : D !== -1 && m.selectedRows.splice(D, 1);
    };
    te(
      () => l.columns,
      () => {
        r.value = [], _();
      }
    );
    const _ = () => {
      y(l.columns, 0, ""), r.value.forEach(($) => {
        if ($.children) {
          const H = r.value.filter((D) => {
            var Y;
            const W = (Y = D._tProps) == null ? void 0 : Y.split(",");
            return W && W.includes($.prop) && !D.children;
          });
          (H == null ? void 0 : H.length) > 0 && ($._colspan = H.length);
        } else {
          const H = m.headMaxLayer - $._layer + 1;
          H > 1 && ($._rowspan = H);
        }
      });
    }, y = ($, H = 0, D = "") => {
      H++, m.headMaxLayer < H && (m.headMaxLayer = H), $.forEach((W) => {
        const Y = W.prop || "", ee = D ? D + "," + Y : Y;
        if (W.children)
          y(W.children, H, ee);
        else if (Object.keys(t).length)
          for (const ae in t)
            W.prop === ae && (W.slots || (W.slots = {}), Object.assign(W.slots, { default: t[ae] })), W.prop + "-header" === ae && (W.slots || (W.slots = {}), Object.assign(W.slots, { header: t[ae] }));
        r.value.push({
          ...W,
          _layer: H,
          _tProps: ee
        });
      });
    };
    l.columns && _(), fe(`${A}GetColumns`, r), fe(
      `${A}SetSelectedRows`,
      ($, H, D) => {
        const W = m.selectedRows.indexOf(H);
        if ($ && W === -1 ? m.selectedRows.push(H) : m.selectedRows.splice(W, 1), m.ctrlIsDown) {
          if (m.ctrlRowIndex !== -1) {
            let Y = m.ctrlRowIndex, ee = D;
            m.ctrlRowIndex > D && (Y = D, ee = m.ctrlRowIndex);
            for (let ae = Y; ae < ee; ae++)
              k(l.data[ae], W === -1);
          }
          m.ctrlRowIndex = D;
        }
        d("selectClick", m.selectedRows, $, H, D);
      }
    );
    const f = () => {
      r.value.forEach(($) => {
        m.colWidth.push($.width);
      });
    }, a = ($) => {
      $ ? m.selectedRows = [...l.data] : m.selectedRows.splice(0, m.selectedRows.length);
    }, o = ($) => {
      he(() => {
        const H = Ie(i.value), D = i.value.querySelector(".table-drag-line");
        D && (D.style.left = $.pageX - H.left + "px", D.style.height = H.height + "px");
      });
    }, s = () => {
      if (!l.drag)
        return;
      const $ = i.value && i.value.querySelectorAll("th");
      m.colWidth = [], $.forEach((H) => {
        m.colWidth.push(H.offsetWidth + "px");
      });
    }, p = ($) => {
      l.drag && (m.isSetThWidth || (s(), m.isSetThWidth = !0), m.dragHead = {
        mouseDown: !0,
        oldX: $.evt.pageX,
        oldWidth: parseInt(m.colWidth[$.index].replace("px", "")) || 0,
        // 拖动前的单元格宽
        index: $.index
      }, o($.evt), $.evt.preventDefault());
    }, h = ($) => {
      if (!l.drag)
        return;
      const H = $.evt;
      let D = m.dragHead.oldWidth + (H.pageX - m.dragHead.oldX);
      l.dragWidth[0] > 0 && D < l.dragWidth[0] || l.dragWidth[1] > 0 && D > l.dragWidth[1] || m.dragHead.mouseDown && (o(H), l.dragWidth[0] > 0 && D < l.dragWidth[0] && (D = l.dragWidth[0]), l.dragWidth[1] > 0 && D > l.dragWidth[1] && (D = l.dragWidth[1]), m.colWidth[m.dragHead.index] = D + "px");
    }, S = () => {
      l.drag && m.dragHead && m.dragHead.mouseDown && d("dragChange", m.colWidth), m.dragHead = {
        mouseDown: !1,
        oldX: "",
        oldWidth: "",
        index: ""
      };
    }, T = ($, H) => {
      switch ($) {
        case "checkboxChange":
          a(H), d("selectClick", m.selectedRows, H);
          break;
        case "mouseDown":
          p(H);
          break;
        case "mouseMove":
          h(H);
          break;
        case "sortClick":
          d("sortChange", H);
          break;
      }
    }, R = ($, H) => {
      d("rowClick", $, H);
    }, M = ($, H, D, W) => {
      d("cellClick", $, H, D, W);
    }, x = () => {
      b.value.sortBy = {};
    }, v = ($) => {
      $.key === "Control" && (m.ctrlIsDown = !1, m.ctrlRowIndex = -1);
    }, I = ($) => {
      $.key === "Control" && !m.ctrlIsDown && (m.ctrlIsDown = !0);
    }, V = () => {
      const $ = i.value.scrollTop, H = i.value.scrollLeft;
      b.value.scrollTop($);
      const D = i.value.querySelectorAll(".left");
      if (D.length > 0)
        if (H > 0)
          for (let W = 0, Y = D.length; W < Y; W++)
            D[W].style.transform = `translateX(${H}px) translateZ(90px)`, D[W].style.webkitTransform = `translateX(${H}px) translateZ(90px)`;
        else
          for (let W = 0, Y = D.length; W < Y; W++)
            D[W].style.transform = "";
      O(H);
    }, O = ($) => {
      const H = i.value.querySelectorAll(".right"), D = i.value.querySelector("table").offsetWidth, W = $ - (D - i.value.clientWidth);
      if (H.length > 0)
        for (let Y = 0, ee = H.length; Y < ee; Y++)
          H[Y].style.transform = `translateX(${W}px)translateZ(90px)`, H[Y].style.webkitTransform = `translateX(${W}px)translateZ(90px)`;
    }, N = () => {
      l.height && l.showHeader && i && i.value.addEventListener("scroll", V, !1), setTimeout(() => {
        O(0);
      }, 0);
    }, G = () => m.selectedRows, P = () => {
      const $ = i.value.scrollTop, H = i.value.clientHeight, D = i.value.scrollHeight;
      let W = !1;
      $ + H >= D - 3 && (W = !0), d("scroll", $, W, i.value);
    }, F = () => {
      if (!l.fixedBottomScroll)
        return;
      const $ = i.value, H = c.value;
      let D = window.innerHeight;
      if (typeof l.fixedBottomScroll == "string") {
        const Y = document.querySelector(l.fixedBottomScroll);
        Y && (D = Y.offsetHeight + 20, console.log(D));
      }
      const { top: W } = $.getBoundingClientRect();
      if (W > D)
        $.style.height = "unset", $.style.marginBottom = "unset";
      else {
        const Y = Math.min(
          D - W,
          H.offsetHeight
        );
        $.style.minHeight = "60px", m.stateHeight = Y + "px", $.style.marginBottom = H.offsetHeight - Y + "px";
      }
    };
    return se(() => {
      f(), window.addEventListener("keydown", I), window.addEventListener("keyup", v), l.drag && document.addEventListener("mouseup", S), l.height && i.value.addEventListener("scroll", P), he(() => {
        if (l.fixedBottomScroll) {
          if (typeof l.fixedBottomScroll == "string") {
            const $ = document.querySelector(l.fixedBottomScroll);
            $ && $.addEventListener("scroll", F);
          } else
            document.addEventListener("scroll", F);
          window.addEventListener("resize", F);
        }
        N(), F();
      });
    }), Ye(() => {
      window.removeEventListener("keydown", I), window.removeEventListener("keyup", v), l.drag && document.removeEventListener("mouseup", S), l.height && i.value && i.value.removeEventListener("scroll", P), l.fixedBottomScroll && (document.removeEventListener("scroll", F), window.removeEventListener("resize", F));
    }), n({ getSelectAll: G, clearSort: x, toggleRowSelection: k, toggleSelection: a }), ($, H) => (g(), C("div", null, [
      B("div", {
        ref_key: "el",
        ref: i,
        class: L({
          [E(A) + "-table"]: !0,
          [$.className]: $.className,
          "is-scroll": $.width || $.height
        }),
        style: Q({
          width: $.width,
          height: m.stateHeight,
          overflowY: $.height ? "auto" : "",
          overflowX: $.width ? "auto" : ""
        })
      }, [
        B("table", {
          ref_key: "tableEl",
          ref: c,
          class: L({
            "no-stripe": !$.stripe,
            "no-border": !$.border,
            "no-hover": !$.hover,
            "no-ellipsis": !$.ellipsis,
            [$.className]: $.className
          })
        }, [
          B("colgroup", null, [
            (g(!0), C(q, null, ne(m.colWidth, (D, W) => (g(), C("col", {
              key: W,
              width: D,
              class: L(`column${W}`)
            }, null, 10, Ts))), 128))
          ]),
          de(ws, {
            ref_key: "tableHeadEl",
            ref: b,
            drag: $.drag,
            title: $.title,
            "sort-single": $.sortSingle,
            "show-header": $.showHeader,
            "select-checked": w.value,
            "head-max-layer": m.headMaxLayer,
            onEvent: T
          }, null, 8, ["drag", "title", "sort-single", "show-header", "select-checked", "head-max-layer"]),
          $.data.length === 0 ? (g(), C("tbody", $s, [
            B("tr", null, [
              B("td", {
                colspan: r.value.length,
                class: "empty"
              }, J($.emptyText), 9, Bs)
            ])
          ])) : (g(), X(Vs, {
            key: 1,
            data: $.data,
            "row-col-span": $.rowColSpan,
            "has-child": $.hasChild,
            "lazy-load": $.lazyLoad,
            "extend-toggle": $.extendToggle,
            title: $.title,
            "selected-rows": m.selectedRows,
            onRowClick: R,
            onCellClick: M
          }, null, 8, ["data", "row-col-span", "has-child", "lazy-load", "extend-toggle", "title", "selected-rows"]))
        ], 2),
        $.dragLine && $.drag && m.dragHead.mouseDown ? (g(), C("div", Is)) : z("", !0)
      ], 6),
      Object.keys($.pagination).length ? (g(), C("div", As)) : z("", !0),
      Object.keys($.pagination).length > 0 ? (g(), X(E(Bt), ce({
        key: 1,
        total: $.data && $.data.length
      }, $.pagination), null, 16, ["total"])) : z("", !0)
    ]));
  }
}), Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Table: xs
}, Symbol.toStringTag, { value: "Module" })), Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Transition: Xe
}, Symbol.toStringTag, { value: "Module" })), Ds = {
  name: "NodeContent",
  props: {
    data: Object
  },
  render(u) {
    const n = oe(`${A}TreeSlots`), e = oe(`${A}PropsData`);
    return typeof n.default == "function" ? n.default({ node: u.data, data: e.dataList }) : null;
  }
}, Es = ["onClick"], Ms = { class: "tree-label" }, Ps = {
  key: 1,
  class: "lazy-loading"
}, Rs = /* @__PURE__ */ K({
  __name: "TreeNode",
  props: {
    tid: {}
  },
  emits: ["toggle"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = oe(`${A}PropsData`), d = ue({
      lazy: l.lazy,
      showCheckbox: l.showCheckbox,
      loadingId: ""
    }), i = U(() => l.dataList.filter((k) => k.tid === e.tid)), c = (k) => {
      d.loadingId || (k.open = !k.open, l.lazy && k.hasChild && (d.loadingId = k.id), t("toggle", k, () => {
        l.lazy && k.hasChild && (d.loadingId = "");
      }));
    }, b = (k) => typeof l.modelValue == "object" ? l.modelValue.indexOf(k.id) !== -1 : l.modelValue === k.id && k.id, r = (k) => {
      t("toggle", k);
    }, m = oe(`${A}CheckboxChange`), w = (k) => {
      he(() => {
        m && m(k);
      });
    };
    return (k, _) => {
      const y = Ue("tree-node", !0);
      return g(), X(Xe, null, {
        default: le(() => [
          B("ul", null, [
            (g(!0), C(q, null, ne(i.value, (f) => (g(), C("li", {
              key: f.id
            }, [
              B("span", {
                class: L(["tree-box", { "has-child": f.hasChild, selected: b(f) }]),
                onClick: re((a) => c(f), ["stop"])
              }, [
                B("i", {
                  class: L([{ "open-child": f.open, [`${E(A)}-icon`]: !0 }, "icon-down"])
                }, null, 2),
                d.showCheckbox ? (g(), X(E(Te), {
                  key: 0,
                  modelValue: f.checked,
                  "onUpdate:modelValue": (a) => f.checked = a,
                  class: L({ "some-select": f.someChecked }),
                  onClick: _[0] || (_[0] = re(() => {
                  }, ["stop"])),
                  onChange: (a) => w(f)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "onChange"])) : z("", !0),
                B("span", Ms, J(f.label), 1),
                d.lazy && f.hasChild ? (g(), C("span", Ps, [
                  (g(), X(Be, {
                    "model-value": f.id === d.loadingId,
                    key: f.id
                  }, null, 8, ["model-value"]))
                ])) : z("", !0),
                de(Ds, { data: f }, null, 8, ["data"])
              ], 10, Es),
              f.hasChild ? ie((g(), X(y, {
                key: f.id,
                tid: f.id,
                onToggle: r
              }, null, 8, ["tid"])), [
                [me, f.open]
              ]) : z("", !0)
            ]))), 128))
          ])
        ]),
        _: 1
      });
    };
  }
}), zs = /* @__PURE__ */ K({
  __name: "Tree",
  props: {
    data: { default: () => [] },
    lazy: { type: Boolean },
    showCheckbox: { type: Boolean },
    modelValue: {}
  },
  emits: ["update:modelValue", "change", "click"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = Re(), i = ue({
      dataList: [],
      lazy: t.lazy,
      showCheckbox: t.showCheckbox,
      modelValue: t.modelValue
    });
    fe(`${A}PropsData`, i), fe(`${A}TreeSlots`, d);
    const c = (_) => {
      l("change", _), _.someChecked = !1, _.tid && b(_.tid), r(_.id, _.checked);
      const y = k(!1);
      l("update:modelValue", y);
    }, b = (_) => {
      if (!_)
        return;
      let y = {}, f = !0, a = !1;
      i.dataList.forEach((o) => {
        o.id === _ && (y = o), o.tid === _ && (o.checked || (f = !1), (o.checked || o.someChecked) && (a = !0));
      }), y.checked = f, f && (a = !1), y.someChecked = a, b(y.tid);
    }, r = (_, y) => {
      i.dataList.forEach((f) => {
        f.tid === _ && (f.checked = y, f.hasChild && r(f.id, y));
      });
    };
    fe(`${A}CheckboxChange`, c), te(
      () => t.data,
      (_) => {
        m(_);
      }
    ), te(
      () => t.modelValue,
      (_) => {
        i.modelValue = _;
      }
    );
    const m = (_, y) => {
      _ && _.forEach((f) => {
        const a = JSON.parse(JSON.stringify(f));
        delete a.children;
        const o = f.children && f.children.length > 0 || t.lazy && f.hasChild !== !1;
        let s = {};
        t.showCheckbox && (s = { checked: !1, someChecked: !1 }), a.id || (a.id = f.label), i.dataList.push(
          Object.assign({}, s, a, {
            tid: y,
            hasChild: o
          })
        ), o && m(f.children, a.id);
      });
    };
    m(t.data);
    const w = (_, y) => {
      if (t.lazy && _.hasChild !== !1 ? l("click", _, (f) => {
        _.isLoad = !0, _.hasChild = !0, y && y(!1);
        let a = {};
        t.showCheckbox && (a = { checked: !1 }), f.forEach((o) => {
          o.id || (o.id = o.label), i.dataList.push(Object.assign({}, a, o, { tid: _.id }));
        });
      }) : l("click", _), typeof t.modelValue == "object") {
        const f = i.modelValue && i.modelValue, a = f.indexOf(id);
        a !== -1 ? f.splice(a, 1) : f.push(id), l("update:modelValue", f);
      } else
        l("update:modelValue", id);
    }, k = (_) => {
      const y = [], f = [];
      return i.dataList.forEach((a) => {
        a.checked && (y.push({
          id: a.id,
          label: a.label
        }), f.push(a.id));
      }), _ ? y : f;
    };
    return n({ getValue: k }), (_, y) => (g(), C("div", {
      class: L(`${E(A)}-tree`)
    }, [
      de(Rs, { onToggle: w })
    ], 2));
  }
}), Ns = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Tree: zs
}, Symbol.toStringTag, { value: "Module" })), It = (u) => {
  let n = null;
  return window.URL !== void 0 ? n = window.URL.createObjectURL(u) : window.webkitURL !== void 0 && (n = window.webkitURL.createObjectURL(u)), n;
}, At = (u, n, e) => {
  const t = new FormData();
  if (t.append(n.name, u, u.name), n.data)
    for (const c in n.data)
      t.append(c, n.data[c]);
  const l = Fe.CancelToken.source(), d = l.token;
  e(l, "source");
  const i = {
    cancelToken: d,
    headers: Object.assign(
      { "Content-Type": "multipart/form-data" },
      n.headers
    ),
    timeout: n.timeout,
    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    onUploadProgress: (c) => {
      const b = c.loaded / c.total * 100 | 0;
      console.log(b), e(b, "loaded");
    }
  };
  Fe.post(n.action, t, i).then((c) => {
    console.log(c), e(c, "success");
  }).catch((c) => {
    console.log(c, "catch"), e(c, "catch");
  });
}, Hs = ["multiple", "accept", "name", "disabled"], js = {
  key: 1,
  class: "default-btn icon-plus"
}, Fs = {
  key: 1,
  class: "upload-list"
}, Ws = { key: 0 }, Us = ["src"], Ys = {
  key: 2,
  class: "status"
}, Ks = ["onClick"], Gs = /* @__PURE__ */ K({
  __name: "Upload",
  props: {
    modelValue: {},
    name: { default: "file" },
    action: {},
    multiple: { type: Boolean },
    accept: {},
    data: {},
    headers: {},
    format: {},
    maxSize: { default: 0 },
    timeout: { default: 0 },
    auto: { type: Boolean, default: !0 },
    drag: { type: Boolean },
    disabled: { type: Boolean },
    limit: { default: 0 },
    showFileList: { type: Boolean, default: !0 },
    listType: { default: "text" }
  },
  emits: ["update:modelValue", "change", "error", "success", "remove"],
  setup(u, { expose: n, emit: e }) {
    const t = u, l = e, d = Object.prototype.toString.call(t.modelValue) === "[object Object]", i = j(), c = ue({
      tempFiles: d ? [t.modelValue] : t.modelValue || [],
      tempUpload: [],
      // 存储待上传文件，用于手动上传
      source: ""
    }), b = (h, S) => {
      l("change", h), t.multiple || (c.tempFiles = [], c.tempUpload = []);
      let T = h;
      if (S !== "drag" && (T = h.target && h.target.files), T)
        for (let R = 0; R < T.length; R++) {
          const M = w(T[R]);
          if (console.log(M), M.code) {
            if (!t.multiple) {
              l("error", M);
              return;
            }
          } else {
            let x;
            /image\/\w+/.test(T[R].type) && (x = It(T[R]));
            const v = T[R].size + (/* @__PURE__ */ new Date()).getTime().toString();
            if (t.limit && c.tempFiles.length >= t.limit)
              return;
            c.tempFiles.push({
              size: m(T[R].size),
              // 大小
              loaded: 0,
              // 上传进度
              name: T[R].name,
              url: x,
              // 预览用的src
              type: T[R].type,
              status: 0,
              // 上传状态，0等待上传，1正在上传，2成功，-1失败，由接口返回后修改
              id: v
            }), t.auto ? r(T[R], v) : c.tempUpload.push({ file: T[R], index: v });
          }
        }
      a();
    }, r = (h, S) => {
      const T = {
        fileName: c.fileName,
        // 上传文件名，如123.jpg
        name: t.name,
        // 文件域的name值
        action: t.action,
        headers: t.headers,
        data: t.data,
        timeout: t.timeout
      };
      let R = 0;
      c.tempFiles.forEach((M, x) => {
        M.id === S && (R = x);
      }), c.tempFiles[R].status = 1, At(h, T, (M, x) => {
        switch (x) {
          case "source":
            c.source = M;
            break;
          case "loaded":
            c.tempFiles[R].loaded = M;
            break;
          case "success":
            l("success", M, (v, I) => {
              c.tempFiles[R].status = I || 2, v && (c.tempFiles[R].url = v);
            }), s();
            break;
          case "error":
            l("error", M), c.tempFiles[R].status = -1, s();
            break;
        }
      });
    }, m = (h) => {
      if (h === 0)
        return "0B";
      const S = 1024, T = ["B", "KB", "MB", "GB"], R = Math.floor(Math.log(h) / Math.log(S));
      return (h / Math.pow(S, R)).toPrecision(3) + T[R];
    }, w = (h) => {
      let S = {
        code: 0,
        msg: ""
      };
      const T = h.name, R = T.substr(T.length - 3, 3).toLocaleLowerCase();
      t.format && (t.format.toLocaleLowerCase().indexOf(R) !== -1 || (S = { code: 2, msg: "只支持上传类型为：" + (t.format ? t.format.toString() : "") }));
      const M = h.size;
      return M && M && t.maxSize > t.maxSize * 1024 && (S = { code: 1, msg: "超出上传限制" }), S;
    }, k = (h) => {
      h.preventDefault(), b(h.dataTransfer.files, "drag");
    }, _ = (h) => {
      h.preventDefault();
    }, y = () => {
      c.source && (c.source.cancel("cancel upload"), s());
    }, f = (h) => {
      l("remove", c.tempFiles[h]), c.tempFiles.splice(h, 1), a();
    }, a = () => {
      t.multiple ? l("update:modelValue", c.tempFiles) : l("update:modelValue", c.tempFiles[0] || {});
    }, o = () => {
      t.auto || c.tempUpload.forEach(async (h) => {
        r(h.file, h.index);
      });
    }, s = () => {
      i.value.value = "";
    }, p = (h) => {
      let S = "";
      switch (h.status) {
        case 0:
          S = "待上传";
          break;
        case 1:
          S = "正在上传" + h.loaded + "%";
          break;
        case 2:
          S = "上传成功";
          break;
        case -1:
          S = "上传失败";
          break;
      }
      return S;
    };
    return n({ upload: o, cancelRequest: y }), (h, S) => (g(), C("div", {
      class: L({
        [`${E(A)}-upload`]: !0,
        disabled: h.disabled,
        ["upload-" + h.listType]: h.listType
      })
    }, [
      h.limit && h.limit <= c.tempFiles.length ? z("", !0) : (g(), C("label", {
        key: 0,
        class: L(["upload-file", { "drag-file": h.drag }]),
        onDragover: _,
        onDrop: k
      }, [
        B("input", {
          ref_key: "inputEl",
          ref: i,
          style: { display: "none" },
          type: "file",
          multiple: h.multiple,
          accept: h.accept,
          name: h.name,
          disabled: h.disabled,
          onChange: b
        }, null, 40, Hs),
        h.$slots.default ? Z(h.$slots, "default", { key: 0 }) : (g(), C("i", js))
      ], 34)),
      h.showFileList ? (g(), C("div", Fs, [
        B("ul", null, [
          (g(!0), C(q, null, ne(c.tempFiles, (T, R) => (g(), C("li", {
            key: T.url,
            class: L(["status-" + (T.status || "")])
          }, [
            h.listType === "text" ? (g(), C("span", Ws, J(T.name), 1)) : (g(), C("img", {
              key: 1,
              src: T.url,
              alt: ""
            }, null, 8, Us)),
            T.status !== void 0 ? (g(), C("span", Ys, [
              B("b", null, J(p(T)), 1),
              T.status === 1 ? (g(), C("i", {
                key: 0,
                class: "progress",
                style: Q({ width: T.loaded + "%" })
              }, null, 4)) : z("", !0)
            ])) : z("", !0),
            B("i", {
              class: "icon-del",
              onClick: (M) => f(R)
            }, null, 8, Ks)
          ], 2))), 128))
        ])
      ])) : z("", !0)
    ], 2));
  }
}), Js = { class: "select-area-tips" }, Zs = ["onMousedown"], Xs = /* @__PURE__ */ B("div", { class: "box-line box-line-1" }, null, -1), Qs = /* @__PURE__ */ B("div", { class: "box-line box-line-2" }, null, -1), qs = /* @__PURE__ */ B("div", { class: "box-line box-line-3" }, null, -1), ea = /* @__PURE__ */ B("div", { class: "box-line box-line-4" }, null, -1), ta = ["width", "height"], la = ["width", "height"], oa = { class: "crop-btn" }, na = {
  key: 0,
  class: "progress"
}, sa = /* @__PURE__ */ K({
  __name: "ImgCrop",
  props: {
    boxWidth: { default: 600 },
    boxHeight: { default: 400 },
    imgWidth: { default: 150 },
    imgHeight: { default: 150 },
    fixedScale: { type: Boolean, default: !0 },
    maxSize: { default: 0 },
    name: { default: "file" },
    data: {},
    headers: {},
    action: {},
    timeout: { default: 0 },
    text: { default: () => ["选择图片", "重新选择", "确定"] }
  },
  emits: ["error", "success"],
  setup(u, { emit: n }) {
    const e = u, t = n, l = j(), d = j(), i = j(), c = j(), b = j(), r = ue({
      fileName: "",
      // 上传的文件名
      imgRealWidth: 0,
      // 上传图片实际宽
      drawImg: {
        img: null,
        // 规定要使用的图像、画布或视频
        x: 0,
        // 在画布上放置图像的 x 坐标位置
        y: 0,
        // 在画布上放置图像的 y 坐标位置
        width: 0,
        // 要使用的图像的宽度
        height: 0
        // 要使用的图像的高度
      },
      controlBox: {
        // 裁切框
        width: e.imgWidth,
        // 这里初始设为裁切图片的最小宽
        height: e.imgHeight,
        left: e.boxWidth / 2 - e.imgWidth / 2,
        // 初始显示位置 这里应该设置为居中
        top: e.boxHeight / 2 - e.imgHeight / 2
      },
      controlBtnList: [
        "leftUp",
        "leftDown",
        "rightUp",
        "rightDown",
        "topCenter",
        "downCenter",
        "leftCenter",
        "rightCenter"
      ],
      // 显示改变大小的8个位置点名
      progress: 0
      // 上传进度
    }), m = U(() => {
      const { height: v, width: I, left: V, top: O } = r.controlBox;
      return {
        height: v + "px",
        width: I + "px",
        left: V + "px",
        top: O + "px",
        position: "absolute",
        cursor: "move"
      };
    }), w = U(() => (r.drawImg.width / r.imgRealWidth).toFixed(2)), k = () => {
      d.value.click();
    }, _ = (v) => {
      const I = v.target;
      if (I && I.files && I.files[0]) {
        r.fileName = I.files[0].name;
        const V = It(I.files[0]);
        y(V, I.files[0]);
      }
    }, y = (v, I) => {
      const V = new Image();
      V.crossOrigin = "Anonymous", V.onload = (O) => {
        const N = V.height, G = V.width, P = e.boxHeight, F = e.boxWidth;
        r.imgRealWidth = V.width;
        let $ = O.target.fileSize;
        if (I && I.size && ($ = I.size), console.log("imgSize"), console.log($), $ && $ && e.maxSize > e.maxSize * 1024) {
          R(1);
          return;
        }
        if (I && !/^(image\/jpeg|image\/png|image\/jpg)$/i.test(I.type)) {
          R(3);
          return;
        }
        let D;
        N < P && G < F ? D = 1 : G / N <= F / P ? D = P / N : D = F / G, r.drawImg = {
          img: V,
          // 规定要使用的图像、画布或视频
          x: (F - G * D) / 2,
          // 在画布上放置图像的 x 坐标位置
          y: (P - N * D) / 2,
          // 在画布上放置图像的 y 坐标位置
          width: G * D,
          // 要使用的图像的宽度
          height: N * D
          // 要使用的图像的高度
        }, f();
      }, V.src = v, a();
    }, f = () => {
      if (r.drawImg.img) {
        const v = i.value, I = v.getContext("2d");
        I.clearRect(0, 0, v.width, v.height), I.drawImage(
          r.drawImg.img,
          r.drawImg.x,
          r.drawImg.y,
          r.drawImg.width,
          r.drawImg.height
        );
      }
    }, a = () => {
      let { width: v, height: I, left: V, top: O } = r.controlBox;
      V < 0 && (V = 0), O < 0 && (O = 0), V + v > e.boxWidth && (V = e.boxWidth - v), O + I > e.boxHeight && (O = e.boxHeight - I), r.controlBox.left = V, r.controlBox.top = O;
      const N = c.value, G = N.getContext("2d");
      G.fillStyle = "rgba(0,0,0,0.6)", G.clearRect(0, 0, N.width, N.height), G.fillRect(0, 0, N.width, N.height), G.clearRect(V, O, v, I);
    }, o = (v) => {
      let I = !0;
      if (I) {
        const V = r.controlBox.left, O = r.controlBox.top, N = v.pageX - V, G = v.pageY - O;
        document.onmousemove = (P) => {
          console.log("_controlBoxonmousemove");
          const F = P.pageX - N, $ = P.pageY - G;
          r.controlBox.left = F, r.controlBox.top = $, a();
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, I = !1;
        };
      }
    }, s = (v, I) => {
      let V = !0;
      if (V) {
        const O = v.pageX, N = v.pageY, { width: G, height: P, left: F, top: $ } = r.controlBox;
        document.onmousemove = (H) => {
          const D = H.pageX - O, W = H.pageY - N;
          let Y = G, ee = P, ae = F, ge = $;
          const ye = e.imgWidth / e.imgHeight, ve = e.imgHeight / e.imgWidth;
          switch (I) {
            case "leftUp":
              Y = G - D, e.fixedScale ? (ee = Y * ve, ge = $ - (ee - P)) : (ee = P - W, ge = $ + W), ae = F + D;
              break;
            case "leftCenter":
              Y = G - D, ae = F + D, e.fixedScale && (ee = Y * ve);
              break;
            case "leftDown":
              Y = G - D, ae = F + D, e.fixedScale ? ee = Y * ve : ee = P + W;
              break;
            case "topCenter":
              ee = P - W, ge = $ + W, e.fixedScale && (Y = ee * ye);
              break;
            case "downCenter":
              ee = P + W, e.fixedScale && (Y = ee * ye);
              break;
            case "rightUp":
              Y = G + D, e.fixedScale ? (ee = Y * ve, ge = $ - (ee - P)) : (ee = P - W, ge = $ + W);
              break;
            case "rightCenter":
              Y = G + D, e.fixedScale && (ee = Y * ve);
              break;
            case "rightDown":
              Y = G + D, e.fixedScale ? ee = Y * ve : ee = P + W;
              break;
          }
          Y < e.imgWidth || ee < e.imgHeight || (r.controlBox = {
            width: Y,
            height: ee,
            left: ae,
            top: ge
          }, a());
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, V = !1, console.log("onmouseup0000");
        };
      }
      v.stopPropagation();
    }, p = (v) => {
      let I = !0;
      if (I) {
        const V = v.pageX - r.drawImg.x, O = v.pageY - r.drawImg.y;
        document.onmousemove = (N) => {
          r.drawImg.x = N.pageX - V, r.drawImg.y = N.pageY - O, f();
        }, document.onmouseup = function() {
          document.onmousemove = null, document.onmouseup = null, I = !1;
        };
      }
    }, h = (v) => {
      if (r.drawImg.img) {
        let I;
        const V = v || window.event;
        V.wheelDelta ? I = -(V.wheelDelta / 40) : V.detail && (I = V.detail);
        const { x: O, y: N, height: G, width: P } = r.drawImg;
        r.drawImg.x = O + I * 3, r.drawImg.y = N + I * 3, r.drawImg.width = P - I * 9, r.drawImg.height = (P - I * 9) / (P / G), f();
      }
      return !1;
    }, S = () => {
      if (!r.drawImg.img) {
        R(2);
        return;
      }
      const v = new Image(), { left: I, top: V } = r.controlBox, O = r.controlBox.width, N = r.controlBox.height, G = e.imgWidth, P = e.imgHeight;
      v.onload = () => {
        const F = document.createElement("canvas");
        F.width = G, F.height = P;
        const $ = F.getContext("2d");
        $ && ($.clearRect(0, 0, G, P), $.drawImage(
          v,
          I,
          V,
          O,
          N,
          0,
          0,
          G,
          P
        ));
        const H = {
          fileName: r.fileName,
          // 上传文件名，如123.jpg
          name: e.name,
          // 文件域的name值
          action: e.action,
          headers: e.headers,
          data: e.data,
          timeout: e.timeout
        }, D = M(F.toDataURL("image/png", 1));
        At(D, H, T);
      }, v.src = i.value.toDataURL();
    }, T = (v, I) => {
      switch (I) {
        case "loaded":
          r.progress = v;
          break;
        case "success":
          t("success", v), x();
          break;
        case "catch":
          R(4, v), x();
          break;
      }
    }, R = (v, I) => {
      const V = { code: v, msg: "", data: "" };
      switch (v) {
        case 1:
          V.msg = "超出上传限制";
          break;
        case 2:
          V.msg = "请选择上传图片";
          break;
        case 3:
          V.msg = "请选择jpg、jpeg或png格式的图片";
          break;
        case 4:
          V.msg = "请求异常", V.data = I;
          break;
      }
      t("error", V);
    }, M = (v) => {
      const I = v.split(","), V = I[0].match(/:(.*?);/)[1], O = atob(I[1]);
      let N = O.length;
      const G = new Uint8Array(N);
      for (; N--; )
        G[N] = O.charCodeAt(N);
      const P = new Blob([G], { type: V });
      return P.lastModifiedDate = /* @__PURE__ */ new Date(), P.name = r.fileName, P;
    }, x = () => {
      r.drawImg = {
        img: null,
        // 规定要使用的图像、画布或视频
        x: 0,
        // 在画布上放置图像的 x 坐标位置
        y: 0,
        // 在画布上放置图像的 y 坐标位置
        width: 0,
        // 要使用的图像的宽度
        height: 0
        // 要使用的图像的高度
      }, b.value.reset();
    };
    return se(() => {
      he(() => {
        (/Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel") === "mousewheel" ? l.value.onmousewheel = h : l.value.addEventListener("DOMMouseScroll", h);
      });
    }), Ye(() => {
      l.value && l.value.removeEventListener("DOMMouseScroll", h);
    }), (v, I) => (g(), C("div", {
      class: L(`${E(A)}-upload-crop`)
    }, [
      B("div", {
        ref_key: "mainCrop",
        ref: l,
        class: "main-crop",
        style: Q({ width: v.boxWidth + "px", height: v.boxHeight + "px" })
      }, [
        ie(B("a", {
          href: "javascript:;",
          class: "select-img",
          style: Q({ lineHeight: v.boxHeight + "px" }),
          onClick: k
        }, J(v.text[0]), 5), [
          [me, !r.drawImg.img]
        ]),
        ie(B("div", {
          class: "control-box",
          style: Q(m.value),
          onMousedown: o
        }, [
          B("div", Js, " w:" + J(parseInt(r.controlBox.width)) + " h:" + J(parseInt(r.controlBox.height)) + " (x:" + J(parseInt(r.controlBox.left)) + ",y:" + J(parseInt(r.controlBox.top)) + ",scale:" + J(w.value) + ") ", 1),
          (g(!0), C(q, null, ne(r.controlBtnList, (V, O) => (g(), C("span", {
            key: O,
            class: L([V, "control-btn"]),
            onMousedown: (N) => s(N, V)
          }, null, 42, Zs))), 128)),
          Xs,
          Qs,
          qs,
          ea
        ], 36), [
          [me, r.drawImg.img !== null]
        ]),
        ie(B("canvas", {
          ref_key: "canvasSelectBox",
          ref: c,
          class: "canvas-crop",
          width: v.boxWidth,
          height: v.boxHeight,
          onMousedown: p
        }, null, 40, ta), [
          [me, r.drawImg.img]
        ]),
        ie(B("canvas", {
          ref_key: "canvas",
          ref: i,
          class: "canvas-crop-img",
          width: v.boxWidth,
          height: v.boxHeight
        }, null, 8, la), [
          [me, r.drawImg.img]
        ])
      ], 4),
      B("div", oa, [
        v.text[1] ? (g(), C("a", {
          key: 0,
          href: "javascript:;",
          class: "crop-select",
          onClick: k
        }, J(v.text[1]), 1)) : z("", !0),
        B("a", {
          href: "javascript:;",
          class: "crop-upload",
          onClick: S
        }, J(v.text[2]), 1)
      ]),
      B("form", {
        ref_key: "formReset",
        ref: b
      }, [
        B("input", {
          ref_key: "inputFile",
          ref: d,
          type: "file",
          accept: "image/*",
          class: "image-file",
          onChange: _
        }, null, 544)
      ], 512),
      r.progress ? (g(), C("span", na, [
        B("i", {
          style: Q({ width: r.progress + "%" })
        }, null, 4)
      ])) : z("", !0)
    ], 2));
  }
}), aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ImgCrop: sa,
  Upload: Gs
}, Symbol.toStringTag, { value: "Module" }));
const ua = {
  // @ts-ignore
  install(u) {
    const n = /* @__PURE__ */ Object.assign({ "./autoForm/index.ts": Kl, "./backTop/index.ts": Zl, "./badge/index.ts": Ql, "./breadcrumb/index.ts": lo, "./button/index.ts": ao, "./carousel/index.ts": mo, "./cascader/index.ts": So, "./checkbox/index.ts": Kt, "./collapse/index.ts": xo, "./colorPicker/index.ts": jo, "./datePicker/index.ts": kl, "./dialog/index.ts": Fo, "./divider/index.ts": Uo, "./drawer/index.ts": Ko, "./dropdown/index.ts": Xo, "./form/index.ts": Ot, "./formItem/index.ts": Rl, "./icon/index.ts": qo, "./image/index.ts": un, "./input/index.ts": Nt, "./inputNumber/index.ts": pn, "./lazy/index.ts": vn, "./loading/index.ts": kn, "./marquee/index.ts": Cn, "./menu/index.ts": En, "./message/index.ts": Hn, "./pagination/index.ts": Qn, "./popover/index.ts": ls, "./progress/index.ts": rs, "./radio/index.ts": Wt, "./select/index.ts": Sl, "./selectDown/index.ts": al, "./slider/index.ts": ps, "./switch/index.ts": Tl, "./table/index.ts": Ls, "./tabs/index.ts": Wl, "./tag/index.ts": Cs, "./textarea/index.ts": xl, "./timePicker/index.ts": Dl, "./timeSelect/index.ts": Ml, "./tooltip/index.ts": $n, "./transition/index.ts": Os, "./tree/index.ts": Ns, "./upload/index.ts": aa, "./util/index.ts": Bl });
    console.log(n), Object.keys(n).forEach((e) => {
      const t = n[e], l = ["./lazy", "./loading", "./message", "./util"], d = e.replace(/\/index.ts/, "");
      if (l.includes(d))
        switch (d) {
          case "./lazy":
            u.use(t.default);
            break;
          case "./loading":
            u.config.globalProperties.$loading = t.loading, u.provide("Loading", t), u.use(t.vLoading);
            break;
          case "./message":
            u.provide("Message", t), Object.keys(t).forEach((i) => {
              u.config.globalProperties[`$${i}`] = t[i];
            });
            break;
        }
      else
        t && Object.keys(t).forEach((i) => {
          u.component(A + i, t[i]);
        });
    });
  }
};
export {
  ua as default
};
