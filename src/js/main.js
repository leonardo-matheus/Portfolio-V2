! function() {
	"use strict";
	//Variaveis de imagens
	var e = {
			915: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/bem.916e5cd6011d3ec1ac646912349933a3.svg"
			},
			94: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/bootstrap.7ec0b1a7c0797b8bbc6abe0b7413e1ce.svg"
			},
			869: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/css.301fa00dcb608bca1921efe3a95ce835.svg"
			},
			107: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/git.d7f8c7bf4546dedea3062eded0dc7773.svg"
			},
			501: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/github.b077c8fb0e155876abed6ba3eabe44b5.svg"
			},
			790: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/angular.svg"
			},
			630: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/html.4787985734750d1786ac0483acd73a7e.svg"
			},
			186: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/javascript.8833c2869db2e4c1f883386e3f0cd346.svg"
			},
			857: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/react.5d67af08a51d49043289b38bd336f753.svg"
			},
			826: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/php.svg"
			},
			428: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/sass.6d6e46fbe79bfc347905fe0bff1be6f6.svg"
			},
			165: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/styled_components.ccdb87a5c9ced3bd95493259307545bf.svg"
			},
			174: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/typescript.608d46a6b1408e1eb8313ff97a8a0ee8.svg"
			},
			632: function(e, t, n) {
				n(791);
				t.Z = n.p + "src/media/python.svg"
			},
			463: function(e, t, n) {
				var r = n(791),
					a = n(296);

				function o(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var i = new Set,
					l = {};

				function u(e, t) {
					s(e, t), s(e + "Capture", t)
				}

				function s(e, t) {
					for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e])
				}
				var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
					f = Object.prototype.hasOwnProperty,
					d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					p = {},
					h = {};

				function m(e, t, n, r, a, o, i) {
					this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
				}
				var v = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
					v[e] = new m(e, 0, !1, e, null, !1, !1)
				})), [
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"]
				].forEach((function(e) {
					var t = e[0];
					v[t] = new m(t, 1, !1, e[1], null, !1, !1)
				})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
					v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
				})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
					v[e] = new m(e, 2, !1, e, null, !1, !1)
				})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
					v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
				})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
					v[e] = new m(e, 3, !0, e, null, !1, !1)
				})), ["capture", "download"].forEach((function(e) {
					v[e] = new m(e, 4, !1, e, null, !1, !1)
				})), ["cols", "rows", "size", "span"].forEach((function(e) {
					v[e] = new m(e, 6, !1, e, null, !1, !1)
				})), ["rowSpan", "start"].forEach((function(e) {
					v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
				}));
				var g = /[\-:]([a-z])/g;

				function y(e) {
					return e[1].toUpperCase()
				}

				function b(e, t, n, r) {
					var a = v.hasOwnProperty(t) ? v[t] : null;
					(null !== a ? 0 !== a.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
						if (null === t || "undefined" === typeof t || function(e, t, n, r) {
								if (null !== n && 0 === n.type) return !1;
								switch (typeof t) {
									case "function":
									case "symbol":
										return !0;
									case "boolean":
										return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
									default:
										return !1
								}
							}(e, t, n, r)) return !0;
						if (r) return !1;
						if (null !== n) switch (n.type) {
							case 3:
								return !t;
							case 4:
								return !1 === t;
							case 5:
								return isNaN(t);
							case 6:
								return isNaN(t) || 1 > t
						}
						return !1
					}(t, n, a, r) && (n = null), r || null === a ? function(e) {
						return !!f.call(h, e) || !f.call(p, e) && (d.test(e) ? h[e] = !0 : (p[e] = !0, !1))
					}(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
					var t = e.replace(g, y);
					v[t] = new m(t, 1, !1, e, null, !1, !1)
				})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
					var t = e.replace(g, y);
					v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
				})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
					var t = e.replace(g, y);
					v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
				})), ["tabIndex", "crossOrigin"].forEach((function(e) {
					v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
				})), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
					v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
				}));
				var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					k = Symbol.for("react.element"),
					x = Symbol.for("react.portal"),
					S = Symbol.for("react.fragment"),
					_ = Symbol.for("react.strict_mode"),
					E = Symbol.for("react.profiler"),
					C = Symbol.for("react.provider"),
					N = Symbol.for("react.context"),
					j = Symbol.for("react.forward_ref"),
					P = Symbol.for("react.suspense"),
					T = Symbol.for("react.suspense_list"),
					O = Symbol.for("react.memo"),
					L = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var R = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
				var z = Symbol.iterator;

				function I(e) {
					return null === e || "object" !== typeof e ? null : "function" === typeof(e = z && e[z] || e["@@iterator"]) ? e : null
				}
				var D, F = Object.assign;

				function M(e) {
					if (void 0 === D) try {
						throw Error()
					} catch (n) {
						var t = n.stack.trim().match(/\n( *(at )?)/);
						D = t && t[1] || ""
					}
					return "\n" + D + e
				}
				var A = !1;

				//Rotas
				function V(e, t) {
					if (!e || A) return "";
					A = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (t = function() {
									throw Error()
								}, Object.defineProperty(t.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), "object" === typeof Reflect && Reflect.construct) {
								try {
									Reflect.construct(t, [])
								} catch (s) {
									var r = s
								}
								Reflect.construct(e, [], t)
							} else {
								try {
									t.call()
								} catch (s) {
									r = s
								}
								e.call(t.prototype)
							}
						else {
							try {
								throw Error()
							} catch (s) {
								r = s
							}
							e()
						}
					} catch (s) {
						if (s && r && "string" === typeof s.stack) {
							for (var a = s.stack.split("\n"), o = r.stack.split("\n"), i = a.length - 1, l = o.length - 1; 1 <= i && 0 <= l && a[i] !== o[l];) l--;
							for (; 1 <= i && 0 <= l; i--, l--)
								if (a[i] !== o[l]) {
									if (1 !== i || 1 !== l)
										do {
											if (i--, 0 > --l || a[i] !== o[l]) {
												var u = "\n" + a[i].replace(" at new ", " at ");
												return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
											}
										} while (1 <= i && 0 <= l);
									break
								}
						}
					} finally {
						A = !1, Error.prepareStackTrace = n
					}
					return (e = e ? e.displayName || e.name : "") ? M(e) : ""
				}

				function U(e) {
					switch (e.tag) {
						case 5:
							return M(e.type);
						case 16:
							return M("Lazy");
						case 13:
							return M("Suspense");
						case 19:
							return M("SuspenseList");
						case 0:
						case 2:
						case 15:
							return e = V(e.type, !1);
						case 11:
							return e = V(e.type.render, !1);
						case 1:
							return e = V(e.type, !0);
						default:
							return ""
					}
				}

				function B(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case S:
							return "Fragment";
						case x:
							return "Portal";
						case E:
							return "Profiler";
						case _:
							return "StrictMode";
						case P:
							return "Suspense";
						case T:
							return "SuspenseList"
					}
					if ("object" === typeof e) switch (e.$$typeof) {
						case N:
							return (e.displayName || "Context") + ".Consumer";
						case C:
							return (e._context.displayName || "Context") + ".Provider";
						case j:
							var t = e.render;
							return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
						case O:
							return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
						case L:
							t = e._payload, e = e._init;
							try {
								return B(e(t))
							} catch (n) {}
					}
					return null
				}
				//Armazenar no cache
				function $(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return B(t);
						case 8:
							return t === _ ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" === typeof t) return t.displayName || t.name || null;
							if ("string" === typeof t) return t
					}
					return null
				}

				function W(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return ""
					}
				}

				function H(e) {
					var t = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
				}

				function Q(e) {
					e._valueTracker || (e._valueTracker = function(e) {
						var t = H(e) ? "checked" : "value",
							n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
							r = "" + e[t];
						if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
							var a = n.get,
								o = n.set;
							return Object.defineProperty(e, t, {
								configurable: !0,
								get: function() {
									return a.call(this)
								},
								set: function(e) {
									r = "" + e, o.call(this, e)
								}
							}), Object.defineProperty(e, t, {
								enumerable: n.enumerable
							}), {
								getValue: function() {
									return r
								},
								setValue: function(e) {
									r = "" + e
								},
								stopTracking: function() {
									e._valueTracker = null, delete e[t]
								}
							}
						}
					}(e))
				}

				function q(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return e && (r = H(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
				}

				function Z(e) {
					if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body
					} catch (t) {
						return e.body
					}
				}

				function K(e, t) {
					var n = t.checked;
					return F({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked
					})
				}

				function Y(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					n = W(null != t.value ? t.value : n), e._wrapperState = {
						initialChecked: r,
						initialValue: n,
						controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
					}
				}

				function G(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1)
				}

				function X(e, t) {
					G(e, t);
					var n = W(t.value),
						r = t.type;
					if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
					t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
				}

				function J(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
						t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
					}
					"" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
				}

				function ee(e, t, n) {
					"number" === t && Z(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
				}
				var te = Array.isArray;

				function ne(e, t, n, r) {
					if (e = e.options, t) {
						t = {};
						for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
						for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
					} else {
						for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
							if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
							null !== t || e[a].disabled || (t = e[a])
						}
						null !== t && (t.selected = !0)
					}
				}

				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return F({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue
					})
				}

				function ae(e, t) {
					var n = t.value;
					if (null == n) {
						if (n = t.children, t = t.defaultValue, null != n) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0]
							}
							t = n
						}
						null == t && (t = ""), n = t
					}
					e._wrapperState = {
						initialValue: W(n)
					}
				}

				function oe(e, t) {
					var n = W(t.value),
						r = W(t.defaultValue);
					null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
				}

				function ie(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
				}
				// IE
				function le(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml"
					}
				}

				function ue(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
				}
				var se, ce, fe = (ce = function(e, t) {
					if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
					else {
						for ((se = se || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = se.firstChild; e.firstChild;) e.removeChild(e.firstChild);
						for (; t.firstChild;) e.appendChild(t.firstChild)
					}
				}, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
					MSApp.execUnsafeLocalFunction((function() {
						return ce(e, t)
					}))
				} : ce);

				function de(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
					}
					e.textContent = t
				}
				var pe = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					he = ["Webkit", "ms", "Moz", "O"];

				function me(e, t, n) {
					return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || pe.hasOwnProperty(e) && pe[e] ? ("" + t).trim() : t + "px"
				}

				function ve(e, t) {
					for (var n in e = e.style, t)
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								a = me(n, t[n], r);
							"float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
						}
				}
				Object.keys(pe).forEach((function(e) {
					he.forEach((function(t) {
						t = t + e.charAt(0).toUpperCase() + e.substring(1), pe[t] = pe[e]
					}))
				}));
				var ge = F({
					menuitem: !0
				}, {
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					embed: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0
				});

				function ye(e, t) {
					if (t) {
						if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61))
						}
						if (null != t.style && "object" !== typeof t.style) throw Error(o(62))
					}
				}

				function be(e, t) {
					if (-1 === e.indexOf("-")) return "string" === typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0
					}
				}
				var we = null;

				function ke(e) {
					return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
				}
				var xe = null,
					Se = null,
					_e = null;

				function Ee(e) {
					if (e = ba(e)) {
						if ("function" !== typeof xe) throw Error(o(280));
						var t = e.stateNode;
						t && (t = ka(t), xe(e.stateNode, e.type, t))
					}
				}

				function Ce(e) {
					Se ? _e ? _e.push(e) : _e = [e] : Se = e
				}

				function Ne() {
					if (Se) {
						var e = Se,
							t = _e;
						if (_e = Se = null, Ee(e), t)
							for (e = 0; e < t.length; e++) Ee(t[e])
					}
				}

				function je(e, t) {
					return e(t)
				}

				function Pe() {}
				var Te = !1;

				function Oe(e, t, n) {
					if (Te) return e(t, n);
					Te = !0;
					try {
						return je(e, t, n)
					} finally {
						Te = !1, (null !== Se || null !== _e) && (Pe(), Ne())
					}
				}

				function Le(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = ka(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
							break e;
						default:
							e = !1
					}
					if (e) return null;
					if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
					return n
				}
				var Re = !1;
				if (c) try {
					var ze = {};
					Object.defineProperty(ze, "passive", {
						get: function() {
							Re = !0
						}
					}), window.addEventListener("test", ze, ze), window.removeEventListener("test", ze, ze)
				} catch (ce) {
					Re = !1
				}

				function Ie(e, t, n, r, a, o, i, l, u) {
					var s = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, s)
					} catch (c) {
						this.onError(c)
					}
				}
				var De = !1,
					Fe = null,
					Me = !1,
					Ae = null,
					Ve = {
						onError: function(e) {
							De = !0, Fe = e
						}
					};

				function Ue(e, t, n, r, a, o, i, l, u) {
					De = !1, Fe = null, Ie.apply(Ve, arguments)
				}

				function Be(e) {
					var t = e,
						n = e;
					if (e.alternate)
						for (; t.return;) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
						} while (e)
					}
					return 3 === t.tag ? n : null
				}

				function $e(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
					}
					return null
				}

				function We(e) {
					if (Be(e) !== e) throw Error(o(188))
				}

				function He(e) {
					return null !== (e = function(e) {
						var t = e.alternate;
						if (!t) {
							if (null === (t = Be(e))) throw Error(o(188));
							return t !== e ? null : e
						}
						for (var n = e, r = t;;) {
							var a = n.return;
							if (null === a) break;
							var i = a.alternate;
							if (null === i) {
								if (null !== (r = a.return)) {
									n = r;
									continue
								}
								break
							}
							if (a.child === i.child) {
								for (i = a.child; i;) {
									if (i === n) return We(a), e;
									if (i === r) return We(a), t;
									i = i.sibling
								}
								throw Error(o(188))
							}
							if (n.return !== r.return) n = a, r = i;
							else {
								for (var l = !1, u = a.child; u;) {
									if (u === n) {
										l = !0, n = a, r = i;
										break
									}
									if (u === r) {
										l = !0, r = a, n = i;
										break
									}
									u = u.sibling
								}
								if (!l) {
									for (u = i.child; u;) {
										if (u === n) {
											l = !0, n = i, r = a;
											break
										}
										if (u === r) {
											l = !0, r = i, n = a;
											break
										}
										u = u.sibling
									}
									if (!l) throw Error(o(189))
								}
							}
							if (n.alternate !== r) throw Error(o(190))
						}
						if (3 !== n.tag) throw Error(o(188));
						return n.stateNode.current === n ? e : t
					}(e)) ? Qe(e) : null
				}

				function Qe(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e;) {
						var t = Qe(e);
						if (null !== t) return t;
						e = e.sibling
					}
					return null
				}
				var qe = a.unstable_scheduleCallback,
					Ze = a.unstable_cancelCallback,
					Ke = a.unstable_shouldYield,
					Ye = a.unstable_requestPaint,
					Ge = a.unstable_now,
					Xe = a.unstable_getCurrentPriorityLevel,
					Je = a.unstable_ImmediatePriority,
					et = a.unstable_UserBlockingPriority,
					tt = a.unstable_NormalPriority,
					nt = a.unstable_LowPriority,
					rt = a.unstable_IdlePriority,
					at = null,
					ot = null;
				var it = Math.clz32 ? Math.clz32 : function(e) {
						return e >>>= 0, 0 === e ? 32 : 31 - (lt(e) / ut | 0) | 0
					},
					lt = Math.log,
					ut = Math.LN2;
				var st = 64,
					ct = 4194304;

				function ft(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e
					}
				}

				function dt(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						a = e.suspendedLanes,
						o = e.pingedLanes,
						i = 268435455 & n;
					if (0 !== i) {
						var l = i & ~a;
						0 !== l ? r = ft(l) : 0 !== (o &= i) && (r = ft(o))
					} else 0 !== (i = n & ~a) ? r = ft(i) : 0 !== o && (r = ft(o));
					if (0 === r) return 0;
					if (0 !== t && t !== r && 0 === (t & a) && ((a = r & -r) >= (o = t & -t) || 16 === a && 0 !== (4194240 & o))) return t;
					if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
						for (e = e.entanglements, t &= r; 0 < t;) a = 1 << (n = 31 - it(t)), r |= e[n], t &= ~a;
					return r
				}

				function pt(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1
					}
				}

				function ht(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
				}

				function mt() {
					var e = st;
					return 0 === (4194240 & (st <<= 1)) && (st = 64), e
				}

				function vt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t
				}

				function gt(e, t, n) {
					e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - it(t)] = n
				}

				function yt(e, t) {
					var n = e.entangledLanes |= t;
					for (e = e.entanglements; n;) {
						var r = 31 - it(n),
							a = 1 << r;
						a & t | e[r] & t && (e[r] |= t), n &= ~a
					}
				}
				var bt = 0;

				function wt(e) {
					return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
				}
				var kt, xt, St, _t, Et, Ct = !1,
					Nt = [],
					jt = null,
					Pt = null,
					Tt = null,
					Ot = new Map,
					Lt = new Map,
					Rt = [],
					zt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

				function It(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							jt = null;
							break;
						case "dragenter":
						case "dragleave":
							Pt = null;
							break;
						case "mouseover":
						case "mouseout":
							Tt = null;
							break;
						case "pointerover":
						case "pointerout":
							Ot.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							Lt.delete(t.pointerId)
					}
				}

				function Dt(e, t, n, r, a, o) {
					return null === e || e.nativeEvent !== o ? (e = {
						blockedOn: t,
						domEventName: n,
						eventSystemFlags: r,
						nativeEvent: o,
						targetContainers: [a]
					}, null !== t && (null !== (t = ba(t)) && xt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== a && -1 === t.indexOf(a) && t.push(a), e)
				}

				function Ft(e) {
					var t = ya(e.target);
					if (null !== t) {
						var n = Be(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = $e(n))) return e.blockedOn = t, void Et(e.priority, (function() {
									St(n)
								}))
							} else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
					}
					e.blockedOn = null
				}

				function Mt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length;) {
						var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n) return null !== (t = ba(n)) && xt(t), e.blockedOn = n, !1;
						var r = new(n = e.nativeEvent).constructor(n.type, n);
						we = r, n.target.dispatchEvent(r), we = null, t.shift()
					}
					return !0
				}

				function At(e, t, n) {
					Mt(e) && n.delete(t)
				}

				function Vt() {
					Ct = !1, null !== jt && Mt(jt) && (jt = null), null !== Pt && Mt(Pt) && (Pt = null), null !== Tt && Mt(Tt) && (Tt = null), Ot.forEach(At), Lt.forEach(At)
				}

				function Ut(e, t) {
					e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, Vt)))
				}

				function Bt(e) {
					function t(t) {
						return Ut(t, e)
					}
					if (0 < Nt.length) {
						Ut(Nt[0], e);
						for (var n = 1; n < Nt.length; n++) {
							var r = Nt[n];
							r.blockedOn === e && (r.blockedOn = null)
						}
					}
					for (null !== jt && Ut(jt, e), null !== Pt && Ut(Pt, e), null !== Tt && Ut(Tt, e), Ot.forEach(t), Lt.forEach(t), n = 0; n < Rt.length; n++)(r = Rt[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Rt.length && null === (n = Rt[0]).blockedOn;) Ft(n), null === n.blockedOn && Rt.shift()
				}
				var $t = w.ReactCurrentBatchConfig,
					Wt = !0;

				function Ht(e, t, n, r) {
					var a = bt,
						o = $t.transition;
					$t.transition = null;
					try {
						bt = 1, qt(e, t, n, r)
					} finally {
						bt = a, $t.transition = o
					}
				}

				function Qt(e, t, n, r) {
					var a = bt,
						o = $t.transition;
					$t.transition = null;
					try {
						bt = 4, qt(e, t, n, r)
					} finally {
						bt = a, $t.transition = o
					}
				}

				function qt(e, t, n, r) {
					if (Wt) {
						var a = Kt(e, t, n, r);
						if (null === a) Wr(e, t, r, Zt, n), It(e, r);
						else if (function(e, t, n, r, a) {
								switch (t) {
									case "focusin":
										return jt = Dt(jt, e, t, n, r, a), !0;
									case "dragenter":
										return Pt = Dt(Pt, e, t, n, r, a), !0;
									case "mouseover":
										return Tt = Dt(Tt, e, t, n, r, a), !0;
									case "pointerover":
										var o = a.pointerId;
										return Ot.set(o, Dt(Ot.get(o) || null, e, t, n, r, a)), !0;
									case "gotpointercapture":
										return o = a.pointerId, Lt.set(o, Dt(Lt.get(o) || null, e, t, n, r, a)), !0
								}
								return !1
							}(a, e, t, n, r)) r.stopPropagation();
						else if (It(e, r), 4 & t && -1 < zt.indexOf(e)) {
							for (; null !== a;) {
								var o = ba(a);
								if (null !== o && kt(o), null === (o = Kt(e, t, n, r)) && Wr(e, t, r, Zt, n), o === a) break;
								a = o
							}
							null !== a && r.stopPropagation()
						} else Wr(e, t, r, null, n)
					}
				}
				var Zt = null;

				function Kt(e, t, n, r) {
					if (Zt = null, null !== (e = ya(e = ke(r))))
						if (null === (t = Be(e))) e = null;
						else if (13 === (n = t.tag)) {
						if (null !== (e = $e(t))) return e;
						e = null
					} else if (3 === n) {
						if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
						e = null
					} else t !== e && (e = null);
					return Zt = e, null
				}
				//Casos de validação de eventos
				function Yt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Xe()) {
								case Je:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16
							}
						default:
							return 16
					}
				}
				var Gt = null,
					Xt = null,
					Jt = null;

				function en() {
					if (Jt) return Jt;
					var e, t, n = Xt,
						r = n.length,
						a = "value" in Gt ? Gt.value : Gt.textContent,
						o = a.length;
					for (e = 0; e < r && n[e] === a[e]; e++);
					var i = r - e;
					for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
					return Jt = a.slice(e, 1 < t ? 1 - t : void 0)
				}

				function tn(e) {
					var t = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
				}

				function nn() {
					return !0
				}

				function rn() {
					return !1
				}

				function an(e) {
					function t(t, n, r, a, o) {
						for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = a, this.target = o, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(a) : a[i]);
						return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
					}
					return F(t.prototype, {
						preventDefault: function() {
							this.defaultPrevented = !0;
							var e = this.nativeEvent;
							e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
						},
						stopPropagation: function() {
							var e = this.nativeEvent;
							e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
						},
						persist: function() {},
						isPersistent: nn
					}), t
				}
				var on, ln, un, sn = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function(e) {
							return e.timeStamp || Date.now()
						},
						defaultPrevented: 0,
						isTrusted: 0
					},
					cn = an(sn),
					fn = F({}, sn, {
						view: 0,
						detail: 0
					}),
					dn = an(fn),
					pn = F({}, fn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: En,
						button: 0,
						buttons: 0,
						relatedTarget: function(e) {
							return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
						},
						movementX: function(e) {
							return "movementX" in e ? e.movementX : (e !== un && (un && "mousemove" === e.type ? (on = e.screenX - un.screenX, ln = e.screenY - un.screenY) : ln = on = 0, un = e), on)
						},
						movementY: function(e) {
							return "movementY" in e ? e.movementY : ln
						}
					}),
					hn = an(pn),
					mn = an(F({}, pn, {
						dataTransfer: 0
					})),
					vn = an(F({}, fn, {
						relatedTarget: 0
					})),
					gn = an(F({}, sn, {
						animationName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					yn = F({}, sn, {
						clipboardData: function(e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData
						}
					}),
					bn = an(yn),
					wn = an(F({}, sn, {
						data: 0
					})),
					kn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified"
					},
					xn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta"
					},
					Sn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey"
					};

				function _n(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e]
				}

				function En() {
					return _n
				}
				var Cn = F({}, fn, {
						key: function(e) {
							if (e.key) {
								var t = kn[e.key] || e.key;
								if ("Unidentified" !== t) return t
							}
							return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? xn[e.keyCode] || "Unidentified" : ""
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: En,
						charCode: function(e) {
							return "keypress" === e.type ? tn(e) : 0
						},
						keyCode: function(e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						},
						which: function(e) {
							return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						}
					}),
					Nn = an(Cn),
					jn = an(F({}, pn, {
						pointerId: 0,
						width: 0,
						height: 0,
						pressure: 0,
						tangentialPressure: 0,
						tiltX: 0,
						tiltY: 0,
						twist: 0,
						pointerType: 0,
						isPrimary: 0
					})),
					Pn = an(F({}, fn, {
						touches: 0,
						targetTouches: 0,
						changedTouches: 0,
						altKey: 0,
						metaKey: 0,
						ctrlKey: 0,
						shiftKey: 0,
						getModifierState: En
					})),
					Tn = an(F({}, sn, {
						propertyName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					On = F({}, pn, {
						deltaX: function(e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
						},
						deltaY: function(e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
						},
						deltaZ: 0,
						deltaMode: 0
					}),
					Ln = an(On),
					Rn = [9, 13, 27, 32],
					zn = c && "CompositionEvent" in window,
					In = null;
				c && "documentMode" in document && (In = document.documentMode);
				var Dn = c && "TextEvent" in window && !In,
					Fn = c && (!zn || In && 8 < In && 11 >= In),
					Mn = String.fromCharCode(32),
					An = !1;

				function Vn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== Rn.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1
					}
				}

				function Un(e) {
					return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
				}
				var Bn = !1;
				var $n = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0
				};

				function Wn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!$n[e.type] : "textarea" === t
				}

				function Hn(e, t, n, r) {
					Ce(r), 0 < (t = Qr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
						event: n,
						listeners: t
					}))
				}
				var Qn = null,
					qn = null;

				function Zn(e) {
					Mr(e, 0)
				}

				function Kn(e) {
					if (q(wa(e))) return e
				}

				function Yn(e, t) {
					if ("change" === e) return t
				}
				var Gn = !1;
				if (c) {
					var Xn;
					if (c) {
						var Jn = "oninput" in document;
						if (!Jn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput
						}
						Xn = Jn
					} else Xn = !1;
					Gn = Xn && (!document.documentMode || 9 < document.documentMode)
				}

				function tr() {
					Qn && (Qn.detachEvent("onpropertychange", nr), qn = Qn = null)
				}

				function nr(e) {
					if ("value" === e.propertyName && Kn(qn)) {
						var t = [];
						Hn(t, qn, e, ke(e)), Oe(Zn, t)
					}
				}

				function rr(e, t, n) {
					"focusin" === e ? (tr(), qn = n, (Qn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
				}

				function ar(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kn(qn)
				}

				function or(e, t) {
					if ("click" === e) return Kn(t)
				}

				function ir(e, t) {
					if ("input" === e || "change" === e) return Kn(t)
				}
				var lr = "function" === typeof Object.is ? Object.is : function(e, t) {
					return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
				};

				function ur(e, t) {
					if (lr(e, t)) return !0;
					if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var a = n[r];
						if (!f.call(t, a) || !lr(e[a], t[a])) return !1
					}
					return !0
				}

				function sr(e) {
					for (; e && e.firstChild;) e = e.firstChild;
					return e
				}

				function cr(e, t) {
					var n, r = sr(e);
					for (e = 0; r;) {
						if (3 === r.nodeType) {
							if (n = e + r.textContent.length, e <= t && n >= t) return {
								node: r,
								offset: t - e
							};
							e = n
						}
						e: {
							for (; r;) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e
								}
								r = r.parentNode
							}
							r = void 0
						}
						r = sr(r)
					}
				}

				function fr(e, t) {
					return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? fr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
				}

				function dr() {
					for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement;) {
						try {
							var n = "string" === typeof t.contentWindow.location.href
						} catch (r) {
							n = !1
						}
						if (!n) break;
						t = Z((e = t.contentWindow).document)
					}
					return t
				}

				function pr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
				}

				function hr(e) {
					var t = dr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (t !== n && n && n.ownerDocument && fr(n.ownerDocument.documentElement, n)) {
						if (null !== r && pr(n))
							if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
							else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
							e = e.getSelection();
							var a = n.textContent.length,
								o = Math.min(r.start, a);
							r = void 0 === r.end ? o : Math.min(r.end, a), !e.extend && o > r && (a = r, r = o, o = a), a = cr(n, o);
							var i = cr(n, r);
							a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((t = t.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
						}
						for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
							element: e,
							left: e.scrollLeft,
							top: e.scrollTop
						});
						for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
					}
				}
				var mr = c && "documentMode" in document && 11 >= document.documentMode,
					vr = null,
					gr = null,
					yr = null,
					br = !1;

				function wr(e, t, n) {
					var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
					br || null == vr || vr !== Z(r) || ("selectionStart" in (r = vr) && pr(r) ? r = {
						start: r.selectionStart,
						end: r.selectionEnd
					} : r = {
						anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
						anchorOffset: r.anchorOffset,
						focusNode: r.focusNode,
						focusOffset: r.focusOffset
					}, yr && ur(yr, r) || (yr = r, 0 < (r = Qr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
						event: t,
						listeners: r
					}), t.target = vr)))
				}
				//Aqui é onde o evento é disparado
				function kr(e, t) {
					var n = {};
					return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
				}
				var xr = {
						animationend: kr("Animation", "AnimationEnd"),
						animationiteration: kr("Animation", "AnimationIteration"),
						animationstart: kr("Animation", "AnimationStart"),
						transitionend: kr("Transition", "TransitionEnd")
					},
					Sr = {},
					_r = {};

				function Er(e) {
					if (Sr[e]) return Sr[e];
					if (!xr[e]) return e;
					var t, n = xr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in _r) return Sr[e] = n[t];
					return e
				}
				c && (_r = document.createElement("div").style, "AnimationEvent" in window || (delete xr.animationend.animation, delete xr.animationiteration.animation, delete xr.animationstart.animation), "TransitionEvent" in window || delete xr.transitionend.transition);
				var Cr = Er("animationend"),
					Nr = Er("animationiteration"),
					jr = Er("animationstart"),
					Pr = Er("transitionend"),
					Tr = new Map,
					Or = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

				function Lr(e, t) {
					Tr.set(e, t), u(t, [e])
				}
				for (var Rr = 0; Rr < Or.length; Rr++) {
					var zr = Or[Rr];
					Lr(zr.toLowerCase(), "on" + (zr[0].toUpperCase() + zr.slice(1)))
				}
				Lr(Cr, "onAnimationEnd"), Lr(Nr, "onAnimationIteration"), Lr(jr, "onAnimationStart"), Lr("dblclick", "onDoubleClick"), Lr("focusin", "onFocus"), Lr("focusout", "onBlur"), Lr(Pr, "onTransitionEnd"), s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var Ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Dr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));

				function Fr(e, t, n) {
					var r = e.type || "unknown-event";
					e.currentTarget = n,
						function(e, t, n, r, a, i, l, u, s) {
							if (Ue.apply(this, arguments), De) {
								if (!De) throw Error(o(198));
								var c = Fe;
								De = !1, Fe = null, Me || (Me = !0, Ae = c)
							}
						}(r, t, void 0, e), e.currentTarget = null
				}

				function Mr(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							a = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var i = r.length - 1; 0 <= i; i--) {
									var l = r[i],
										u = l.instance,
										s = l.currentTarget;
									if (l = l.listener, u !== o && a.isPropagationStopped()) break e;
									Fr(a, l, s), o = u
								} else
									for (i = 0; i < r.length; i++) {
										if (u = (l = r[i]).instance, s = l.currentTarget, l = l.listener, u !== o && a.isPropagationStopped()) break e;
										Fr(a, l, s), o = u
									}
						}
					}
					if (Me) throw e = Ae, Me = !1, Ae = null, e
				}

				function Ar(e, t) {
					var n = t[ma];
					void 0 === n && (n = t[ma] = new Set);
					var r = e + "__bubble";
					n.has(r) || ($r(t, e, 2, !1), n.add(r))
				}

				function Vr(e, t, n) {
					var r = 0;
					t && (r |= 4), $r(n, e, r, t)
				}
				var Ur = "_reactListening" + Math.random().toString(36).slice(2);

				function Br(e) {
					if (!e[Ur]) {
						e[Ur] = !0, i.forEach((function(t) {
							"selectionchange" !== t && (Dr.has(t) || Vr(t, !1, e), Vr(t, !0, e))
						}));
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Ur] || (t[Ur] = !0, Vr("selectionchange", !1, t))
					}
				}

				function $r(e, t, n, r) {
					switch (Yt(t)) {
						case 1:
							var a = Ht;
							break;
						case 4:
							a = Qt;
							break;
						default:
							a = qt
					}
					n = a.bind(null, t, n, e), a = void 0, !Re || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (a = !0), r ? void 0 !== a ? e.addEventListener(t, n, {
						capture: !0,
						passive: a
					}) : e.addEventListener(t, n, !0) : void 0 !== a ? e.addEventListener(t, n, {
						passive: a
					}) : e.addEventListener(t, n, !1)
				}

				function Wr(e, t, n, r, a) {
					var o = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
						if (null === r) return;
						var i = r.tag;
						if (3 === i || 4 === i) {
							var l = r.stateNode.containerInfo;
							if (l === a || 8 === l.nodeType && l.parentNode === a) break;
							if (4 === i)
								for (i = r.return; null !== i;) {
									var u = i.tag;
									if ((3 === u || 4 === u) && ((u = i.stateNode.containerInfo) === a || 8 === u.nodeType && u.parentNode === a)) return;
									i = i.return
								}
							for (; null !== l;) {
								if (null === (i = ya(l))) return;
								if (5 === (u = i.tag) || 6 === u) {
									r = o = i;
									continue e
								}
								l = l.parentNode
							}
						}
						r = r.return
					}
					Oe((function() {
						var r = o,
							a = ke(n),
							i = [];
						e: {
							var l = Tr.get(e);
							if (void 0 !== l) {
								var u = cn,
									s = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										u = Nn;
										break;
									case "focusin":
										s = "focus", u = vn;
										break;
									case "focusout":
										s = "blur", u = vn;
										break;
									case "beforeblur":
									case "afterblur":
										u = vn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										u = hn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										u = mn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										u = Pn;
										break;
									case Cr:
									case Nr:
									case jr:
										u = gn;
										break;
									case Pr:
										u = Tn;
										break;
									case "scroll":
										u = dn;
										break;
									case "wheel":
										u = Ln;
										break;
									case "copy":
									case "cut":
									case "paste":
										u = bn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										u = jn
								}
								var c = 0 !== (4 & t),
									f = !c && "scroll" === e,
									d = c ? null !== l ? l + "Capture" : null : l;
								c = [];
								for (var p, h = r; null !== h;) {
									var m = (p = h).stateNode;
									if (5 === p.tag && null !== m && (p = m, null !== d && (null != (m = Le(h, d)) && c.push(Hr(h, m, p)))), f) break;
									h = h.return
								}
								0 < c.length && (l = new u(l, s, null, n, a), i.push({
									event: l,
									listeners: c
								}))
							}
						}
						if (0 === (7 & t)) {
							if (u = "mouseout" === e || "pointerout" === e, (!(l = "mouseover" === e || "pointerover" === e) || n === we || !(s = n.relatedTarget || n.fromElement) || !ya(s) && !s[ha]) && (u || l) && (l = a.window === a ? a : (l = a.ownerDocument) ? l.defaultView || l.parentWindow : window, u ? (u = r, null !== (s = (s = n.relatedTarget || n.toElement) ? ya(s) : null) && (s !== (f = Be(s)) || 5 !== s.tag && 6 !== s.tag) && (s = null)) : (u = null, s = r), u !== s)) {
								if (c = hn, m = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (c = jn, m = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == u ? l : wa(u), p = null == s ? l : wa(s), (l = new c(m, h + "leave", u, n, a)).target = f, l.relatedTarget = p, m = null, ya(a) === r && ((c = new c(d, h + "enter", s, n, a)).target = p, c.relatedTarget = f, m = c), f = m, u && s) e: {
									for (d = s, h = 0, p = c = u; p; p = qr(p)) h++;
									for (p = 0, m = d; m; m = qr(m)) p++;
									for (; 0 < h - p;) c = qr(c),
									h--;
									for (; 0 < p - h;) d = qr(d),
									p--;
									for (; h--;) {
										if (c === d || null !== d && c === d.alternate) break e;
										c = qr(c), d = qr(d)
									}
									c = null
								}
								else c = null;
								null !== u && Zr(i, l, u, c, !1), null !== s && null !== f && Zr(i, f, s, c, !0)
							}
							if ("select" === (u = (l = r ? wa(r) : window).nodeName && l.nodeName.toLowerCase()) || "input" === u && "file" === l.type) var v = Yn;
							else if (Wn(l))
								if (Gn) v = ir;
								else {
									v = ar;
									var g = rr
								}
							else(u = l.nodeName) && "input" === u.toLowerCase() && ("checkbox" === l.type || "radio" === l.type) && (v = or);
							switch (v && (v = v(e, r)) ? Hn(i, v, n, a) : (g && g(e, l, r), "focusout" === e && (g = l._wrapperState) && g.controlled && "number" === l.type && ee(l, "number", l.value)), g = r ? wa(r) : window, e) {
								case "focusin":
									(Wn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
									break;
								case "focusout":
									yr = gr = vr = null;
									break;
								case "mousedown":
									br = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									br = !1, wr(i, n, a);
									break;
								case "selectionchange":
									if (mr) break;
								case "keydown":
								case "keyup":
									wr(i, n, a)
							}
							var y;
							if (zn) e: {
								switch (e) {
									case "compositionstart":
										var b = "onCompositionStart";
										break e;
									case "compositionend":
										b = "onCompositionEnd";
										break e;
									case "compositionupdate":
										b = "onCompositionUpdate";
										break e
								}
								b = void 0
							}
							else Bn ? Vn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
							b && (Fn && "ko" !== n.locale && (Bn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Bn && (y = en()) : (Xt = "value" in (Gt = a) ? Gt.value : Gt.textContent, Bn = !0)), 0 < (g = Qr(r, b)).length && (b = new wn(b, e, null, n, a), i.push({
								event: b,
								listeners: g
							}), y ? b.data = y : null !== (y = Un(n)) && (b.data = y))), (y = Dn ? function(e, t) {
								switch (e) {
									case "compositionend":
										return Un(t);
									case "keypress":
										return 32 !== t.which ? null : (An = !0, Mn);
									case "textInput":
										return (e = t.data) === Mn && An ? null : e;
									default:
										return null
								}
							}(e, n) : function(e, t) {
								if (Bn) return "compositionend" === e || !zn && Vn(e, t) ? (e = en(), Jt = Xt = Gt = null, Bn = !1, e) : null;
								switch (e) {
									case "paste":
									default:
										return null;
									case "keypress":
										if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
											if (t.char && 1 < t.char.length) return t.char;
											if (t.which) return String.fromCharCode(t.which)
										}
										return null;
									case "compositionend":
										return Fn && "ko" !== t.locale ? null : t.data
								}
							}(e, n)) && (0 < (r = Qr(r, "onBeforeInput")).length && (a = new wn("onBeforeInput", "beforeinput", null, n, a), i.push({
								event: a,
								listeners: r
							}), a.data = y))
						}
						Mr(i, t)
					}))
				}

				function Hr(e, t, n) {
					return {
						instance: e,
						listener: t,
						currentTarget: n
					}
				}

				function Qr(e, t) {
					for (var n = t + "Capture", r = []; null !== e;) {
						var a = e,
							o = a.stateNode;
						5 === a.tag && null !== o && (a = o, null != (o = Le(e, n)) && r.unshift(Hr(e, o, a)), null != (o = Le(e, t)) && r.push(Hr(e, o, a))), e = e.return
					}
					return r
				}

				function qr(e) {
					if (null === e) return null;
					do {
						e = e.return
					} while (e && 5 !== e.tag);
					return e || null
				}

				function Zr(e, t, n, r, a) {
					for (var o = t._reactName, i = []; null !== n && n !== r;) {
						var l = n,
							u = l.alternate,
							s = l.stateNode;
						if (null !== u && u === r) break;
						5 === l.tag && null !== s && (l = s, a ? null != (u = Le(n, o)) && i.unshift(Hr(n, u, l)) : a || null != (u = Le(n, o)) && i.push(Hr(n, u, l))), n = n.return
					}
					0 !== i.length && e.push({
						event: t,
						listeners: i
					})
				}
				var Kr = /\r\n?/g,
					Yr = /\u0000|\uFFFD/g;

				function Gr(e) {
					return ("string" === typeof e ? e : "" + e).replace(Kr, "\n").replace(Yr, "")
				}

				function Xr(e, t, n) {
					if (t = Gr(t), Gr(e) !== t && n) throw Error(o(425))
				}

				function Jr() {}
				var ea = null,
					ta = null;

				function na(e, t) {
					return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
				}
				var ra = "function" === typeof setTimeout ? setTimeout : void 0,
					aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
					oa = "function" === typeof Promise ? Promise : void 0,
					ia = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof oa ? function(e) {
						return oa.resolve(null).then(e).catch(la)
					} : ra;

				function la(e) {
					setTimeout((function() {
						throw e
					}))
				}

				function ua(e, t) {
					var n = t,
						r = 0;
					do {
						var a = n.nextSibling;
						if (e.removeChild(n), a && 8 === a.nodeType)
							if ("/$" === (n = a.data)) {
								if (0 === r) return e.removeChild(a), void Bt(t);
								r--
							} else "$" !== n && "$?" !== n && "$!" !== n || r++;
						n = a
					} while (n);
					Bt(t)
				}

				function sa(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null
						}
					}
					return e
				}

				function ca(e) {
					e = e.previousSibling;
					for (var t = 0; e;) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--
							} else "/$" === n && t++
						}
						e = e.previousSibling
					}
					return null
				}
				var fa = Math.random().toString(36).slice(2),
					da = "__reactFiber$" + fa,
					pa = "__reactProps$" + fa,
					ha = "__reactContainer$" + fa,
					ma = "__reactEvents$" + fa,
					va = "__reactListeners$" + fa,
					ga = "__reactHandles$" + fa;

				function ya(e) {
					var t = e[da];
					if (t) return t;
					for (var n = e.parentNode; n;) {
						if (t = n[ha] || n[da]) {
							if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
								for (e = ca(e); null !== e;) {
									if (n = e[da]) return n;
									e = ca(e)
								}
							return t
						}
						n = (e = n).parentNode
					}
					return null
				}

				function ba(e) {
					return !(e = e[da] || e[ha]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
				}

				function wa(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33))
				}

				function ka(e) {
					return e[pa] || null
				}
				var xa = [],
					Sa = -1;

				function _a(e) {
					return {
						current: e
					}
				}

				function Ea(e) {
					0 > Sa || (e.current = xa[Sa], xa[Sa] = null, Sa--)
				}

				function Ca(e, t) {
					Sa++, xa[Sa] = e.current, e.current = t
				}
				var Na = {},
					ja = _a(Na),
					Pa = _a(!1),
					Ta = Na;

				function Oa(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Na;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
					var a, o = {};
					for (a in n) o[a] = t[a];
					return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
				}

				function La(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e
				}

				function Ra() {
					Ea(Pa), Ea(ja)
				}

				function za(e, t, n) {
					if (ja.current !== Na) throw Error(o(168));
					Ca(ja, t), Ca(Pa, n)
				}

				function Ia(e, t, n) {
					var r = e.stateNode;
					if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
					for (var a in r = r.getChildContext())
						if (!(a in t)) throw Error(o(108, $(e) || "Unknown", a));
					return F({}, n, r)
				}

				function Da(e) {
					return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Na, Ta = ja.current, Ca(ja, e), Ca(Pa, Pa.current), !0
				}

				function Fa(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(o(169));
					n ? (e = Ia(e, t, Ta), r.__reactInternalMemoizedMergedChildContext = e, Ea(Pa), Ea(ja), Ca(ja, e)) : Ea(Pa), Ca(Pa, n)
				}
				var Ma = null,
					Aa = !1,
					Va = !1;

				function Ua(e) {
					null === Ma ? Ma = [e] : Ma.push(e)
				}

				function Ba() {
					if (!Va && null !== Ma) {
						Va = !0;
						var e = 0,
							t = bt;
						try {
							var n = Ma;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0)
								} while (null !== r)
							}
							Ma = null, Aa = !1
						} catch (a) {
							throw null !== Ma && (Ma = Ma.slice(e + 1)), qe(Je, Ba), a
						} finally {
							bt = t, Va = !1
						}
					}
					return null
				}
				var $a = [],
					Wa = 0,
					Ha = null,
					Qa = 0,
					qa = [],
					Za = 0,
					Ka = null,
					Ya = 1,
					Ga = "";

				function Xa(e, t) {
					$a[Wa++] = Qa, $a[Wa++] = Ha, Ha = e, Qa = t
				}

				function Ja(e, t, n) {
					qa[Za++] = Ya, qa[Za++] = Ga, qa[Za++] = Ka, Ka = e;
					var r = Ya;
					e = Ga;
					var a = 32 - it(r) - 1;
					r &= ~(1 << a), n += 1;
					var o = 32 - it(t) + a;
					if (30 < o) {
						var i = a - a % 5;
						o = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Ya = 1 << 32 - it(t) + a | n << a | r, Ga = o + e
					} else Ya = 1 << o | n << a | r, Ga = e
				}

				function eo(e) {
					null !== e.return && (Xa(e, 1), Ja(e, 1, 0))
				}

				function to(e) {
					for (; e === Ha;) Ha = $a[--Wa], $a[Wa] = null, Qa = $a[--Wa], $a[Wa] = null;
					for (; e === Ka;) Ka = qa[--Za], qa[Za] = null, Ga = qa[--Za], qa[Za] = null, Ya = qa[--Za], qa[Za] = null
				}
				var no = null,
					ro = null,
					ao = !1,
					oo = null;

				function io(e, t) {
					var n = Ls(5, null, null, 0);
					n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
				}

				function lo(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, no = e, ro = sa(t.firstChild), !0);
						case 6:
							return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, no = e, ro = null, !0);
						case 13:
							return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Ka ? {
								id: Ya,
								overflow: Ga
							} : null, e.memoizedState = {
								dehydrated: t,
								treeContext: n,
								retryLane: 1073741824
							}, (n = Ls(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, no = e, ro = null, !0);
						default:
							return !1
					}
				}

				function uo(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
				}

				function so(e) {
					if (ao) {
						var t = ro;
						if (t) {
							var n = t;
							if (!lo(e, t)) {
								if (uo(e)) throw Error(o(418));
								t = sa(n.nextSibling);
								var r = no;
								t && lo(e, t) ? io(r, n) : (e.flags = -4097 & e.flags | 2, ao = !1, no = e)
							}
						} else {
							if (uo(e)) throw Error(o(418));
							e.flags = -4097 & e.flags | 2, ao = !1, no = e
						}
					}
				}

				function co(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
					no = e
				}

				function fo(e) {
					if (e !== no) return !1;
					if (!ao) return co(e), ao = !0, !1;
					var t;
					if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !na(e.type, e.memoizedProps)), t && (t = ro)) {
						if (uo(e)) throw po(), Error(o(418));
						for (; t;) io(e, t), t = sa(t.nextSibling)
					}
					if (co(e), 13 === e.tag) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e;) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ro = sa(e.nextSibling);
											break e
										}
										t--
									} else "$" !== n && "$!" !== n && "$?" !== n || t++
								}
								e = e.nextSibling
							}
							ro = null
						}
					} else ro = no ? sa(e.stateNode.nextSibling) : null;
					return !0
				}

				function po() {
					for (var e = ro; e;) e = sa(e.nextSibling)
				}

				function ho() {
					ro = no = null, ao = !1
				}

				function mo(e) {
					null === oo ? oo = [e] : oo.push(e)
				}
				var vo = w.ReactCurrentBatchConfig;

				function go(e, t) {
					if (e && e.defaultProps) {
						for (var n in t = F({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
						return t
					}
					return t
				}
				var yo = _a(null),
					bo = null,
					wo = null,
					ko = null;

				function xo() {
					ko = wo = bo = null
				}

				function So(e) {
					var t = yo.current;
					Ea(yo), e._currentValue = t
				}

				function _o(e, t, n) {
					for (; null !== e;) {
						var r = e.alternate;
						if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
						e = e.return
					}
				}

				function Eo(e, t) {
					bo = e, ko = wo = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (wl = !0), e.firstContext = null)
				}

				function Co(e) {
					var t = e._currentValue;
					if (ko !== e)
						if (e = {
								context: e,
								memoizedValue: t,
								next: null
							}, null === wo) {
							if (null === bo) throw Error(o(308));
							wo = e, bo.dependencies = {
								lanes: 0,
								firstContext: e
							}
						} else wo = wo.next = e;
					return t
				}
				var No = null;

				function jo(e) {
					null === No ? No = [e] : No.push(e)
				}

				function Po(e, t, n, r) {
					var a = t.interleaved;
					return null === a ? (n.next = n, jo(t)) : (n.next = a.next, a.next = n), t.interleaved = n, To(e, r)
				}

				function To(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
					return 3 === n.tag ? n.stateNode : null
				}
				var Oo = !1;

				function Lo(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null,
							interleaved: null,
							lanes: 0
						},
						effects: null
					}
				}

				function Ro(e, t) {
					e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
						baseState: e.baseState,
						firstBaseUpdate: e.firstBaseUpdate,
						lastBaseUpdate: e.lastBaseUpdate,
						shared: e.shared,
						effects: e.effects
					})
				}

				function zo(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null
					}
				}

				function Io(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (r = r.shared, 0 !== (2 & Pu)) {
						var a = r.pending;
						return null === a ? t.next = t : (t.next = a.next, a.next = t), r.pending = t, To(e, n)
					}
					return null === (a = r.interleaved) ? (t.next = t, jo(r)) : (t.next = a.next, a.next = t), r.interleaved = t, To(e, n)
				}

				function Do(e, t, n) {
					if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
						var r = t.lanes;
						n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
					}
				}

				function Fo(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var a = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var i = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null
								};
								null === o ? a = o = i : o = o.next = i, n = n.next
							} while (null !== n);
							null === o ? a = o = t : o = o.next = t
						} else a = o = t;
						return n = {
							baseState: r.baseState,
							firstBaseUpdate: a,
							lastBaseUpdate: o,
							shared: r.shared,
							effects: r.effects
						}, void(e.updateQueue = n)
					}
					null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
				}

				function Mo(e, t, n, r) {
					var a = e.updateQueue;
					Oo = !1;
					var o = a.firstBaseUpdate,
						i = a.lastBaseUpdate,
						l = a.shared.pending;
					if (null !== l) {
						a.shared.pending = null;
						var u = l,
							s = u.next;
						u.next = null, null === i ? o = s : i.next = s, i = u;
						var c = e.alternate;
						null !== c && ((l = (c = c.updateQueue).lastBaseUpdate) !== i && (null === l ? c.firstBaseUpdate = s : l.next = s, c.lastBaseUpdate = u))
					}
					if (null !== o) {
						var f = a.baseState;
						for (i = 0, c = s = u = null, l = o;;) {
							var d = l.lane,
								p = l.eventTime;
							if ((r & d) === d) {
								null !== c && (c = c.next = {
									eventTime: p,
									lane: 0,
									tag: l.tag,
									payload: l.payload,
									callback: l.callback,
									next: null
								});
								e: {
									var h = e,
										m = l;
									switch (d = t, p = n, m.tag) {
										case 1:
											if ("function" === typeof(h = m.payload)) {
												f = h.call(p, f, d);
												break e
											}
											f = h;
											break e;
										case 3:
											h.flags = -65537 & h.flags | 128;
										case 0:
											if (null === (d = "function" === typeof(h = m.payload) ? h.call(p, f, d) : h) || void 0 === d) break e;
											f = F({}, f, d);
											break e;
										case 2:
											Oo = !0
									}
								}
								null !== l.callback && 0 !== l.lane && (e.flags |= 64, null === (d = a.effects) ? a.effects = [l] : d.push(l))
							} else p = {
								eventTime: p,
								lane: d,
								tag: l.tag,
								payload: l.payload,
								callback: l.callback,
								next: null
							}, null === c ? (s = c = p, u = f) : c = c.next = p, i |= d;
							if (null === (l = l.next)) {
								if (null === (l = a.shared.pending)) break;
								l = (d = l).next, d.next = null, a.lastBaseUpdate = d, a.shared.pending = null
							}
						}
						if (null === c && (u = f), a.baseState = u, a.firstBaseUpdate = s, a.lastBaseUpdate = c, null !== (t = a.shared.interleaved)) {
							a = t;
							do {
								i |= a.lane, a = a.next
							} while (a !== t)
						} else null === o && (a.shared.lanes = 0);
						Fu |= i, e.lanes = i, e.memoizedState = f
					}
				}

				function Ao(e, t, n) {
					if (e = t.effects, t.effects = null, null !== e)
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								a = r.callback;
							if (null !== a) {
								if (r.callback = null, r = n, "function" !== typeof a) throw Error(o(191, a));
								a.call(r)
							}
						}
				}
				var Vo = (new r.Component).refs;

				function Uo(e, t, n, r) {
					n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : F({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
				}
				var Bo = {
					isMounted: function(e) {
						return !!(e = e._reactInternals) && Be(e) === e
					},
					enqueueSetState: function(e, t, n) {
						e = e._reactInternals;
						var r = ts(),
							a = ns(e),
							o = zo(r, a);
						o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Io(e, o, a)) && (rs(t, e, a, r), Do(t, e, a))
					},
					enqueueReplaceState: function(e, t, n) {
						e = e._reactInternals;
						var r = ts(),
							a = ns(e),
							o = zo(r, a);
						o.tag = 1, o.payload = t, void 0 !== n && null !== n && (o.callback = n), null !== (t = Io(e, o, a)) && (rs(t, e, a, r), Do(t, e, a))
					},
					enqueueForceUpdate: function(e, t) {
						e = e._reactInternals;
						var n = ts(),
							r = ns(e),
							a = zo(n, r);
						a.tag = 2, void 0 !== t && null !== t && (a.callback = t), null !== (t = Io(e, a, r)) && (rs(t, e, r, n), Do(t, e, r))
					}
				};

				function $o(e, t, n, r, a, o, i) {
					return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!ur(n, r) || !ur(a, o))
				}

				function Wo(e, t, n) {
					var r = !1,
						a = Na,
						o = t.contextType;
					return "object" === typeof o && null !== o ? o = Co(o) : (a = La(t) ? Ta : ja.current, o = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Oa(e, a) : Na), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Bo, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
				}

				function Ho(e, t, n, r) {
					e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Bo.enqueueReplaceState(t, t.state, null)
				}

				function Qo(e, t, n, r) {
					var a = e.stateNode;
					a.props = n, a.state = e.memoizedState, a.refs = Vo, Lo(e);
					var o = t.contextType;
					"object" === typeof o && null !== o ? a.context = Co(o) : (o = La(t) ? Ta : ja.current, a.context = Oa(e, o)), a.state = e.memoizedState, "function" === typeof(o = t.getDerivedStateFromProps) && (Uo(e, t, o, n), a.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (t = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Bo.enqueueReplaceState(a, a.state, null), Mo(e, n, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
				}

				function qo(e, t, n) {
					if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
						if (n._owner) {
							if (n = n._owner) {
								if (1 !== n.tag) throw Error(o(309));
								var r = n.stateNode
							}
							if (!r) throw Error(o(147, e));
							var a = r,
								i = "" + e;
							return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
								var t = a.refs;
								t === Vo && (t = a.refs = {}), null === e ? delete t[i] : t[i] = e
							}, t._stringRef = i, t)
						}
						if ("string" !== typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e))
					}
					return e
				}

				function Zo(e, t) {
					throw e = Object.prototype.toString.call(t), Error(o(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
				}

				function Ko(e) {
					return (0, e._init)(e._payload)
				}

				function Yo(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
						}
					}

					function n(n, r) {
						if (!e) return null;
						for (; null !== r;) t(n, r), r = r.sibling;
						return null
					}

					function r(e, t) {
						for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
						return e
					}

					function a(e, t) {
						return (e = zs(e, t)).index = 0, e.sibling = null, e
					}

					function i(t, n, r) {
						return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
					}

					function l(t) {
						return e && null === t.alternate && (t.flags |= 2), t
					}

					function u(e, t, n, r) {
						return null === t || 6 !== t.tag ? ((t = Ms(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
					}

					function s(e, t, n, r) {
						var o = n.type;
						return o === S ? f(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === o || "object" === typeof o && null !== o && o.$$typeof === L && Ko(o) === t.type) ? ((r = a(t, n.props)).ref = qo(e, t, n), r.return = e, r) : ((r = Is(n.type, n.key, n.props, null, e.mode, r)).ref = qo(e, t, n), r.return = e, r)
					}

					function c(e, t, n, r) {
						return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = As(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
					}

					function f(e, t, n, r, o) {
						return null === t || 7 !== t.tag ? ((t = Ds(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
					}

					function d(e, t, n) {
						if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Ms("" + t, e.mode, n)).return = e, t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case k:
									return (n = Is(t.type, t.key, t.props, null, e.mode, n)).ref = qo(e, null, t), n.return = e, n;
								case x:
									return (t = As(t, e.mode, n)).return = e, t;
								case L:
									return d(e, (0, t._init)(t._payload), n)
							}
							if (te(t) || I(t)) return (t = Ds(t, e.mode, n, null)).return = e, t;
							Zo(e, t)
						}
						return null
					}

					function p(e, t, n, r) {
						var a = null !== t ? t.key : null;
						if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== a ? null : u(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case k:
									return n.key === a ? s(e, t, n, r) : null;
								case x:
									return n.key === a ? c(e, t, n, r) : null;
								case L:
									return p(e, t, (a = n._init)(n._payload), r)
							}
							if (te(n) || I(n)) return null !== a ? null : f(e, t, n, r, null);
							Zo(e, n)
						}
						return null
					}

					function h(e, t, n, r, a) {
						if ("string" === typeof r && "" !== r || "number" === typeof r) return u(t, e = e.get(n) || null, "" + r, a);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case k:
									return s(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
								case x:
									return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a);
								case L:
									return h(e, t, n, (0, r._init)(r._payload), a)
							}
							if (te(r) || I(r)) return f(t, e = e.get(n) || null, r, a, null);
							Zo(t, r)
						}
						return null
					}

					function m(a, o, l, u) {
						for (var s = null, c = null, f = o, m = o = 0, v = null; null !== f && m < l.length; m++) {
							f.index > m ? (v = f, f = null) : v = f.sibling;
							var g = p(a, f, l[m], u);
							if (null === g) {
								null === f && (f = v);
								break
							}
							e && f && null === g.alternate && t(a, f), o = i(g, o, m), null === c ? s = g : c.sibling = g, c = g, f = v
						}
						if (m === l.length) return n(a, f), ao && Xa(a, m), s;
						if (null === f) {
							for (; m < l.length; m++) null !== (f = d(a, l[m], u)) && (o = i(f, o, m), null === c ? s = f : c.sibling = f, c = f);
							return ao && Xa(a, m), s
						}
						for (f = r(a, f); m < l.length; m++) null !== (v = h(f, a, m, l[m], u)) && (e && null !== v.alternate && f.delete(null === v.key ? m : v.key), o = i(v, o, m), null === c ? s = v : c.sibling = v, c = v);
						return e && f.forEach((function(e) {
							return t(a, e)
						})), ao && Xa(a, m), s
					}

					function v(a, l, u, s) {
						var c = I(u);
						if ("function" !== typeof c) throw Error(o(150));
						if (null == (u = c.call(u))) throw Error(o(151));
						for (var f = c = null, m = l, v = l = 0, g = null, y = u.next(); null !== m && !y.done; v++, y = u.next()) {
							m.index > v ? (g = m, m = null) : g = m.sibling;
							var b = p(a, m, y.value, s);
							if (null === b) {
								null === m && (m = g);
								break
							}
							e && m && null === b.alternate && t(a, m), l = i(b, l, v), null === f ? c = b : f.sibling = b, f = b, m = g
						}
						if (y.done) return n(a, m), ao && Xa(a, v), c;
						if (null === m) {
							for (; !y.done; v++, y = u.next()) null !== (y = d(a, y.value, s)) && (l = i(y, l, v), null === f ? c = y : f.sibling = y, f = y);
							return ao && Xa(a, v), c
						}
						for (m = r(a, m); !y.done; v++, y = u.next()) null !== (y = h(m, a, v, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), l = i(y, l, v), null === f ? c = y : f.sibling = y, f = y);
						return e && m.forEach((function(e) {
							return t(a, e)
						})), ao && Xa(a, v), c
					}
					return function e(r, o, i, u) {
						if ("object" === typeof i && null !== i && i.type === S && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
							switch (i.$$typeof) {
								case k:
									e: {
										for (var s = i.key, c = o; null !== c;) {
											if (c.key === s) {
												if ((s = i.type) === S) {
													if (7 === c.tag) {
														n(r, c.sibling), (o = a(c, i.props.children)).return = r, r = o;
														break e
													}
												} else if (c.elementType === s || "object" === typeof s && null !== s && s.$$typeof === L && Ko(s) === c.type) {
													n(r, c.sibling), (o = a(c, i.props)).ref = qo(r, c, i), o.return = r, r = o;
													break e
												}
												n(r, c);
												break
											}
											t(r, c), c = c.sibling
										}
										i.type === S ? ((o = Ds(i.props.children, r.mode, u, i.key)).return = r, r = o) : ((u = Is(i.type, i.key, i.props, null, r.mode, u)).ref = qo(r, o, i), u.return = r, r = u)
									}
									return l(r);
								case x:
									e: {
										for (c = i.key; null !== o;) {
											if (o.key === c) {
												if (4 === o.tag && o.stateNode.containerInfo === i.containerInfo && o.stateNode.implementation === i.implementation) {
													n(r, o.sibling), (o = a(o, i.children || [])).return = r, r = o;
													break e
												}
												n(r, o);
												break
											}
											t(r, o), o = o.sibling
										}(o = As(i, r.mode, u)).return = r,
										r = o
									}
									return l(r);
								case L:
									return e(r, o, (c = i._init)(i._payload), u)
							}
							if (te(i)) return m(r, o, i, u);
							if (I(i)) return v(r, o, i, u);
							Zo(r, i)
						}
						return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== o && 6 === o.tag ? (n(r, o.sibling), (o = a(o, i)).return = r, r = o) : (n(r, o), (o = Ms(i, r.mode, u)).return = r, r = o), l(r)) : n(r, o)
					}
				}
				var Go = Yo(!0),
					Xo = Yo(!1),
					Jo = {},
					ei = _a(Jo),
					ti = _a(Jo),
					ni = _a(Jo);

				function ri(e) {
					if (e === Jo) throw Error(o(174));
					return e
				}

				function ai(e, t) {
					switch (Ca(ni, t), Ca(ti, e), Ca(ei, Jo), e = t.nodeType) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
							break;
						default:
							t = ue(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
					}
					Ea(ei), Ca(ei, t)
				}

				function oi() {
					Ea(ei), Ea(ti), Ea(ni)
				}

				function ii(e) {
					ri(ni.current);
					var t = ri(ei.current),
						n = ue(t, e.type);
					t !== n && (Ca(ti, e), Ca(ei, n))
				}

				function li(e) {
					ti.current === e && (Ea(ei), Ea(ti))
				}
				var ui = _a(0);

				function si(e) {
					for (var t = e; null !== t;) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t
						} else if (null !== t.child) {
							t.child.return = t, t = t.child;
							continue
						}
						if (t === e) break;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === e) return null;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
					return null
				}
				var ci = [];

				function fi() {
					for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
					ci.length = 0
				}
				var di = w.ReactCurrentDispatcher,
					pi = w.ReactCurrentBatchConfig,
					hi = 0,
					mi = null,
					vi = null,
					gi = null,
					yi = !1,
					bi = !1,
					wi = 0,
					ki = 0;

				function xi() {
					throw Error(o(321))
				}

				function Si(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!lr(e[n], t[n])) return !1;
					return !0
				}

				function _i(e, t, n, r, a, i) {
					if (hi = i, mi = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, di.current = null === e || null === e.memoizedState ? ll : ul, e = n(r, a), bi) {
						i = 0;
						do {
							if (bi = !1, wi = 0, 25 <= i) throw Error(o(301));
							i += 1, gi = vi = null, t.updateQueue = null, di.current = sl, e = n(r, a)
						} while (bi)
					}
					if (di.current = il, t = null !== vi && null !== vi.next, hi = 0, gi = vi = mi = null, yi = !1, t) throw Error(o(300));
					return e
				}

				function Ei() {
					var e = 0 !== wi;
					return wi = 0, e
				}

				function Ci() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null
					};
					return null === gi ? mi.memoizedState = gi = e : gi = gi.next = e, gi
				}

				function Ni() {
					if (null === vi) {
						var e = mi.alternate;
						e = null !== e ? e.memoizedState : null
					} else e = vi.next;
					var t = null === gi ? mi.memoizedState : gi.next;
					if (null !== t) gi = t, vi = e;
					else {
						if (null === e) throw Error(o(310));
						e = {
							memoizedState: (vi = e).memoizedState,
							baseState: vi.baseState,
							baseQueue: vi.baseQueue,
							queue: vi.queue,
							next: null
						}, null === gi ? mi.memoizedState = gi = e : gi = gi.next = e
					}
					return gi
				}

				function ji(e, t) {
					return "function" === typeof t ? t(e) : t
				}

				function Pi(e) {
					var t = Ni(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = vi,
						a = r.baseQueue,
						i = n.pending;
					if (null !== i) {
						if (null !== a) {
							var l = a.next;
							a.next = i.next, i.next = l
						}
						r.baseQueue = a = i, n.pending = null
					}
					if (null !== a) {
						i = a.next, r = r.baseState;
						var u = l = null,
							s = null,
							c = i;
						do {
							var f = c.lane;
							if ((hi & f) === f) null !== s && (s = s.next = {
								lane: 0,
								action: c.action,
								hasEagerState: c.hasEagerState,
								eagerState: c.eagerState,
								next: null
							}), r = c.hasEagerState ? c.eagerState : e(r, c.action);
							else {
								var d = {
									lane: f,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null
								};
								null === s ? (u = s = d, l = r) : s = s.next = d, mi.lanes |= f, Fu |= f
							}
							c = c.next
						} while (null !== c && c !== i);
						null === s ? l = r : s.next = u, lr(r, t.memoizedState) || (wl = !0), t.memoizedState = r, t.baseState = l, t.baseQueue = s, n.lastRenderedState = r
					}
					if (null !== (e = n.interleaved)) {
						a = e;
						do {
							i = a.lane, mi.lanes |= i, Fu |= i, a = a.next
						} while (a !== e)
					} else null === a && (n.lanes = 0);
					return [t.memoizedState, n.dispatch]
				}

				function Ti(e) {
					var t = Ni(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						a = n.pending,
						i = t.memoizedState;
					if (null !== a) {
						n.pending = null;
						var l = a = a.next;
						do {
							i = e(i, l.action), l = l.next
						} while (l !== a);
						lr(i, t.memoizedState) || (wl = !0), t.memoizedState = i, null === t.baseQueue && (t.baseState = i), n.lastRenderedState = i
					}
					return [i, r]
				}

				function Oi() {}

				function Li(e, t) {
					var n = mi,
						r = Ni(),
						a = t(),
						i = !lr(r.memoizedState, a);
					if (i && (r.memoizedState = a, wl = !0), r = r.queue, Wi(Ii.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || null !== gi && 1 & gi.memoizedState.tag) {
						if (n.flags |= 2048, Ai(9, zi.bind(null, n, r, a, t), void 0, null), null === Tu) throw Error(o(349));
						0 !== (30 & hi) || Ri(n, t, a)
					}
					return a
				}

				function Ri(e, t, n) {
					e.flags |= 16384, e = {
						getSnapshot: t,
						value: n
					}, null === (t = mi.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, mi.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
				}

				function zi(e, t, n, r) {
					t.value = n, t.getSnapshot = r, Di(t) && Fi(e)
				}

				function Ii(e, t, n) {
					return n((function() {
						Di(t) && Fi(e)
					}))
				}

				function Di(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !lr(e, n)
					} catch (r) {
						return !0
					}
				}

				function Fi(e) {
					var t = To(e, 1);
					null !== t && rs(t, e, 1, -1)
				}

				function Mi(e) {
					var t = Ci();
					return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
						pending: null,
						interleaved: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: ji,
						lastRenderedState: e
					}, t.queue = e, e = e.dispatch = nl.bind(null, mi, e), [t.memoizedState, e]
				}

				function Ai(e, t, n, r) {
					return e = {
						tag: e,
						create: t,
						destroy: n,
						deps: r,
						next: null
					}, null === (t = mi.updateQueue) ? (t = {
						lastEffect: null,
						stores: null
					}, mi.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
				}

				function Vi() {
					return Ni().memoizedState
				}

				function Ui(e, t, n, r) {
					var a = Ci();
					mi.flags |= e, a.memoizedState = Ai(1 | t, n, void 0, void 0 === r ? null : r)
				}

				function Bi(e, t, n, r) {
					var a = Ni();
					r = void 0 === r ? null : r;
					var o = void 0;
					if (null !== vi) {
						var i = vi.memoizedState;
						if (o = i.destroy, null !== r && Si(r, i.deps)) return void(a.memoizedState = Ai(t, n, o, r))
					}
					mi.flags |= e, a.memoizedState = Ai(1 | t, n, o, r)
				}

				function $i(e, t) {
					return Ui(8390656, 8, e, t)
				}

				function Wi(e, t) {
					return Bi(2048, 8, e, t)
				}

				function Hi(e, t) {
					return Bi(4, 2, e, t)
				}

				function Qi(e, t) {
					return Bi(4, 4, e, t)
				}

				function qi(e, t) {
					return "function" === typeof t ? (e = e(), t(e), function() {
						t(null)
					}) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
						t.current = null
					}) : void 0
				}

				function Zi(e, t, n) {
					return n = null !== n && void 0 !== n ? n.concat([e]) : null, Bi(4, 4, qi.bind(null, t, e), n)
				}

				function Ki() {}

				function Yi(e, t) {
					var n = Ni();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Si(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
				}

				function Gi(e, t) {
					var n = Ni();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && Si(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
				}

				function Xi(e, t, n) {
					return 0 === (21 & hi) ? (e.baseState && (e.baseState = !1, wl = !0), e.memoizedState = n) : (lr(n, t) || (n = mt(), mi.lanes |= n, Fu |= n, e.baseState = !0), t)
				}

				function Ji(e, t) {
					var n = bt;
					bt = 0 !== n && 4 > n ? n : 4, e(!0);
					var r = pi.transition;
					pi.transition = {};
					try {
						e(!1), t()
					} finally {
						bt = n, pi.transition = r
					}
				}

				function el() {
					return Ni().memoizedState
				}

				function tl(e, t, n) {
					var r = ns(e);
					if (n = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null
						}, rl(e)) al(t, n);
					else if (null !== (n = Po(e, t, n, r))) {
						rs(n, e, r, ts()), ol(n, t, r)
					}
				}

				function nl(e, t, n) {
					var r = ns(e),
						a = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null
						};
					if (rl(e)) al(t, a);
					else {
						var o = e.alternate;
						if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer)) try {
							var i = t.lastRenderedState,
								l = o(i, n);
							if (a.hasEagerState = !0, a.eagerState = l, lr(l, i)) {
								var u = t.interleaved;
								return null === u ? (a.next = a, jo(t)) : (a.next = u.next, u.next = a), void(t.interleaved = a)
							}
						} catch (s) {}
						null !== (n = Po(e, t, a, r)) && (rs(n, e, r, a = ts()), ol(n, t, r))
					}
				}

				function rl(e) {
					var t = e.alternate;
					return e === mi || null !== t && t === mi
				}

				function al(e, t) {
					bi = yi = !0;
					var n = e.pending;
					null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
				}

				function ol(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
					}
				}
				var il = {
						readContext: Co,
						useCallback: xi,
						useContext: xi,
						useEffect: xi,
						useImperativeHandle: xi,
						useInsertionEffect: xi,
						useLayoutEffect: xi,
						useMemo: xi,
						useReducer: xi,
						useRef: xi,
						useState: xi,
						useDebugValue: xi,
						useDeferredValue: xi,
						useTransition: xi,
						useMutableSource: xi,
						useSyncExternalStore: xi,
						useId: xi,
						unstable_isNewReconciler: !1
					},
					ll = {
						readContext: Co,
						useCallback: function(e, t) {
							return Ci().memoizedState = [e, void 0 === t ? null : t], e
						},
						useContext: Co,
						useEffect: $i,
						useImperativeHandle: function(e, t, n) {
							return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ui(4194308, 4, qi.bind(null, t, e), n)
						},
						useLayoutEffect: function(e, t) {
							return Ui(4194308, 4, e, t)
						},
						useInsertionEffect: function(e, t) {
							return Ui(4, 2, e, t)
						},
						useMemo: function(e, t) {
							var n = Ci();
							return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
						},
						useReducer: function(e, t, n) {
							var r = Ci();
							return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
								pending: null,
								interleaved: null,
								lanes: 0,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: t
							}, r.queue = e, e = e.dispatch = tl.bind(null, mi, e), [r.memoizedState, e]
						},
						useRef: function(e) {
							return e = {
								current: e
							}, Ci().memoizedState = e
						},
						useState: Mi,
						useDebugValue: Ki,
						useDeferredValue: function(e) {
							return Ci().memoizedState = e
						},
						useTransition: function() {
							var e = Mi(!1),
								t = e[0];
							return e = Ji.bind(null, e[1]), Ci().memoizedState = e, [t, e]
						},
						useMutableSource: function() {},
						useSyncExternalStore: function(e, t, n) {
							var r = mi,
								a = Ci();
							if (ao) {
								if (void 0 === n) throw Error(o(407));
								n = n()
							} else {
								if (n = t(), null === Tu) throw Error(o(349));
								0 !== (30 & hi) || Ri(r, t, n)
							}
							a.memoizedState = n;
							var i = {
								value: n,
								getSnapshot: t
							};
							return a.queue = i, $i(Ii.bind(null, r, i, e), [e]), r.flags |= 2048, Ai(9, zi.bind(null, r, i, n, t), void 0, null), n
						},
						useId: function() {
							var e = Ci(),
								t = Tu.identifierPrefix;
							if (ao) {
								var n = Ga;
								t = ":" + t + "R" + (n = (Ya & ~(1 << 32 - it(Ya) - 1)).toString(32) + n), 0 < (n = wi++) && (t += "H" + n.toString(32)), t += ":"
							} else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
							return e.memoizedState = t
						},
						unstable_isNewReconciler: !1
					},
					ul = {
						readContext: Co,
						useCallback: Yi,
						useContext: Co,
						useEffect: Wi,
						useImperativeHandle: Zi,
						useInsertionEffect: Hi,
						useLayoutEffect: Qi,
						useMemo: Gi,
						useReducer: Pi,
						useRef: Vi,
						useState: function() {
							return Pi(ji)
						},
						useDebugValue: Ki,
						useDeferredValue: function(e) {
							return Xi(Ni(), vi.memoizedState, e)
						},
						useTransition: function() {
							return [Pi(ji)[0], Ni().memoizedState]
						},
						useMutableSource: Oi,
						useSyncExternalStore: Li,
						useId: el,
						unstable_isNewReconciler: !1
					},
					sl = {
						readContext: Co,
						useCallback: Yi,
						useContext: Co,
						useEffect: Wi,
						useImperativeHandle: Zi,
						useInsertionEffect: Hi,
						useLayoutEffect: Qi,
						useMemo: Gi,
						useReducer: Ti,
						useRef: Vi,
						useState: function() {
							return Ti(ji)
						},
						useDebugValue: Ki,
						useDeferredValue: function(e) {
							var t = Ni();
							return null === vi ? t.memoizedState = e : Xi(t, vi.memoizedState, e)
						},
						useTransition: function() {
							return [Ti(ji)[0], Ni().memoizedState]
						},
						useMutableSource: Oi,
						useSyncExternalStore: Li,
						useId: el,
						unstable_isNewReconciler: !1
					};

				function cl(e, t) {
					try {
						var n = "",
							r = t;
						do {
							n += U(r), r = r.return
						} while (r);
						var a = n
					} catch (o) {
						a = "\nError generating stack: " + o.message + "\n" + o.stack
					}
					return {
						value: e,
						source: t,
						stack: a,
						digest: null
					}
				}

				function fl(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null
					}
				}

				function dl(e, t) {
					try {
						console.error(t.value)
					} catch (n) {
						setTimeout((function() {
							throw n
						}))
					}
				}
				var pl = "function" === typeof WeakMap ? WeakMap : Map;

				function hl(e, t, n) {
					(n = zo(-1, n)).tag = 3, n.payload = {
						element: null
					};
					var r = t.value;
					return n.callback = function() {
						Hu || (Hu = !0, Qu = r), dl(0, t)
					}, n
				}

				function ml(e, t, n) {
					(n = zo(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" === typeof r) {
						var a = t.value;
						n.payload = function() {
							return r(a)
						}, n.callback = function() {
							dl(0, t)
						}
					}
					var o = e.stateNode;
					return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
						dl(0, t), "function" !== typeof r && (null === qu ? qu = new Set([this]) : qu.add(this));
						var e = t.stack;
						this.componentDidCatch(t.value, {
							componentStack: null !== e ? e : ""
						})
					}), n
				}

				function vl(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new pl;
						var a = new Set;
						r.set(t, a)
					} else void 0 === (a = r.get(t)) && (a = new Set, r.set(t, a));
					a.has(n) || (a.add(n), e = Cs.bind(null, e, t, n), t.then(e, e))
				}

				function gl(e) {
					do {
						var t;
						if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
						e = e.return
					} while (null !== e);
					return null
				}

				function yl(e, t, n, r, a) {
					return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = zo(-1, 1)).tag = 2, Io(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
				}
				var bl = w.ReactCurrentOwner,
					wl = !1;

				function kl(e, t, n, r) {
					t.child = null === e ? Xo(t, null, n, r) : Go(t, e.child, n, r)
				}

				function xl(e, t, n, r, a) {
					n = n.render;
					var o = t.ref;
					return Eo(t, a), r = _i(e, t, n, r, o, a), n = Ei(), null === e || wl ? (ao && n && eo(t), t.flags |= 1, kl(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hl(e, t, a))
				}

				function Sl(e, t, n, r, a) {
					if (null === e) {
						var o = n.type;
						return "function" !== typeof o || Rs(o) || void 0 !== o.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Is(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = o, _l(e, t, o, r, a))
					}
					if (o = e.child, 0 === (e.lanes & a)) {
						var i = o.memoizedProps;
						if ((n = null !== (n = n.compare) ? n : ur)(i, r) && e.ref === t.ref) return Hl(e, t, a)
					}
					return t.flags |= 1, (e = zs(o, r)).ref = t.ref, e.return = t, t.child = e
				}

				function _l(e, t, n, r, a) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (ur(o, r) && e.ref === t.ref) {
							if (wl = !1, t.pendingProps = r = o, 0 === (e.lanes & a)) return t.lanes = e.lanes, Hl(e, t, a);
							0 !== (131072 & e.flags) && (wl = !0)
						}
					}
					return Nl(e, t, n, r, a)
				}

				function El(e, t, n) {
					var r = t.pendingProps,
						a = r.children,
						o = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 === (1 & t.mode)) t.memoizedState = {
							baseLanes: 0,
							cachePool: null,
							transitions: null
						}, Ca(zu, Ru), Ru |= n;
						else {
							if (0 === (1073741824 & n)) return e = null !== o ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
								baseLanes: e,
								cachePool: null,
								transitions: null
							}, t.updateQueue = null, Ca(zu, Ru), Ru |= e, null;
							t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null
							}, r = null !== o ? o.baseLanes : n, Ca(zu, Ru), Ru |= r
						}
					else null !== o ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Ca(zu, Ru), Ru |= r;
					return kl(e, t, a, n), t.child
				}

				function Cl(e, t) {
					var n = t.ref;
					(null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
				}

				function Nl(e, t, n, r, a) {
					var o = La(n) ? Ta : ja.current;
					return o = Oa(t, o), Eo(t, a), n = _i(e, t, n, r, o, a), r = Ei(), null === e || wl ? (ao && r && eo(t), t.flags |= 1, kl(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~a, Hl(e, t, a))
				}

				function jl(e, t, n, r, a) {
					if (La(n)) {
						var o = !0;
						Da(t)
					} else o = !1;
					if (Eo(t, a), null === t.stateNode) Wl(e, t), Wo(t, n, r), Qo(t, n, r, a), r = !0;
					else if (null === e) {
						var i = t.stateNode,
							l = t.memoizedProps;
						i.props = l;
						var u = i.context,
							s = n.contextType;
						"object" === typeof s && null !== s ? s = Co(s) : s = Oa(t, s = La(n) ? Ta : ja.current);
						var c = n.getDerivedStateFromProps,
							f = "function" === typeof c || "function" === typeof i.getSnapshotBeforeUpdate;
						f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== r || u !== s) && Ho(t, i, r, s), Oo = !1;
						var d = t.memoizedState;
						i.state = d, Mo(t, r, i, a), u = t.memoizedState, l !== r || d !== u || Pa.current || Oo ? ("function" === typeof c && (Uo(t, n, c, r), u = t.memoizedState), (l = Oo || $o(t, n, l, r, d, u, s)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = l) : ("function" === typeof i.componentDidMount && (t.flags |= 4194308), r = !1)
					} else {
						i = t.stateNode, Ro(e, t), l = t.memoizedProps, s = t.type === t.elementType ? l : go(t.type, l), i.props = s, f = t.pendingProps, d = i.context, "object" === typeof(u = n.contextType) && null !== u ? u = Co(u) : u = Oa(t, u = La(n) ? Ta : ja.current);
						var p = n.getDerivedStateFromProps;
						(c = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (l !== f || d !== u) && Ho(t, i, r, u), Oo = !1, d = t.memoizedState, i.state = d, Mo(t, r, i, a);
						var h = t.memoizedState;
						l !== f || d !== h || Pa.current || Oo ? ("function" === typeof p && (Uo(t, n, p, r), h = t.memoizedState), (s = Oo || $o(t, n, s, r, d, h, u) || !1) ? (c || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, u), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, u)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = u, r = s) : ("function" !== typeof i.componentDidUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024), r = !1)
					}
					return Pl(e, t, n, r, o, a)
				}

				function Pl(e, t, n, r, a, o) {
					Cl(e, t);
					var i = 0 !== (128 & t.flags);
					if (!r && !i) return a && Fa(t, n, !1), Hl(e, t, o);
					r = t.stateNode, bl.current = t;
					var l = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
					return t.flags |= 1, null !== e && i ? (t.child = Go(t, e.child, null, o), t.child = Go(t, null, l, o)) : kl(e, t, l, o), t.memoizedState = r.state, a && Fa(t, n, !0), t.child
				}

				function Tl(e) {
					var t = e.stateNode;
					t.pendingContext ? za(0, t.pendingContext, t.pendingContext !== t.context) : t.context && za(0, t.context, !1), ai(e, t.containerInfo)
				}

				function Ol(e, t, n, r, a) {
					return ho(), mo(a), t.flags |= 256, kl(e, t, n, r), t.child
				}
				var Ll, Rl, zl, Il, Dl = {
					dehydrated: null,
					treeContext: null,
					retryLane: 0
				};

				function Fl(e) {
					return {
						baseLanes: e,
						cachePool: null,
						transitions: null
					}
				}

				function Ml(e, t, n) {
					var r, a = t.pendingProps,
						i = ui.current,
						l = !1,
						u = 0 !== (128 & t.flags);
					if ((r = u) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (l = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Ca(ui, 1 & i), null === e) return so(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (u = a.children, e = a.fallback, l ? (a = t.mode, l = t.child, u = {
						mode: "hidden",
						children: u
					}, 0 === (1 & a) && null !== l ? (l.childLanes = 0, l.pendingProps = u) : l = Fs(u, a, 0, null), e = Ds(e, a, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = Fl(n), t.memoizedState = Dl, e) : Al(t, u));
					if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function(e, t, n, r, a, i, l) {
						if (n) return 256 & t.flags ? (t.flags &= -257, Vl(e, t, l, r = fl(Error(o(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, a = t.mode, r = Fs({
							mode: "visible",
							children: r.children
						}, a, 0, null), (i = Ds(i, a, l, null)).flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, 0 !== (1 & t.mode) && Go(t, e.child, null, l), t.child.memoizedState = Fl(l), t.memoizedState = Dl, i);
						if (0 === (1 & t.mode)) return Vl(e, t, l, null);
						if ("$!" === a.data) {
							if (r = a.nextSibling && a.nextSibling.dataset) var u = r.dgst;
							return r = u, Vl(e, t, l, r = fl(i = Error(o(419)), r, void 0))
						}
						if (u = 0 !== (l & e.childLanes), wl || u) {
							if (null !== (r = Tu)) {
								switch (l & -l) {
									case 4:
										a = 2;
										break;
									case 16:
										a = 8;
										break;
									case 64:
									case 128:
									case 256:
									case 512:
									case 1024:
									case 2048:
									case 4096:
									case 8192:
									case 16384:
									case 32768:
									case 65536:
									case 131072:
									case 262144:
									case 524288:
									case 1048576:
									case 2097152:
									case 4194304:
									case 8388608:
									case 16777216:
									case 33554432:
									case 67108864:
										a = 32;
										break;
									case 536870912:
										a = 268435456;
										break;
									default:
										a = 0
								}
								0 !== (a = 0 !== (a & (r.suspendedLanes | l)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, To(e, a), rs(r, e, a, -1))
							}
							return vs(), Vl(e, t, l, r = fl(Error(o(421))))
						}
						return "$?" === a.data ? (t.flags |= 128, t.child = e.child, t = js.bind(null, e), a._reactRetry = t, null) : (e = i.treeContext, ro = sa(a.nextSibling), no = t, ao = !0, oo = null, null !== e && (qa[Za++] = Ya, qa[Za++] = Ga, qa[Za++] = Ka, Ya = e.id, Ga = e.overflow, Ka = t), t = Al(t, r.children), t.flags |= 4096, t)
					}(e, t, u, a, r, i, n);
					if (l) {
						l = a.fallback, u = t.mode, r = (i = e.child).sibling;
						var s = {
							mode: "hidden",
							children: a.children
						};
						return 0 === (1 & u) && t.child !== i ? ((a = t.child).childLanes = 0, a.pendingProps = s, t.deletions = null) : (a = zs(i, s)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? l = zs(r, l) : (l = Ds(l, u, n, null)).flags |= 2, l.return = t, a.return = t, a.sibling = l, t.child = a, a = l, l = t.child, u = null === (u = e.child.memoizedState) ? Fl(n) : {
							baseLanes: u.baseLanes | n,
							cachePool: null,
							transitions: u.transitions
						}, l.memoizedState = u, l.childLanes = e.childLanes & ~n, t.memoizedState = Dl, a
					}
					return e = (l = e.child).sibling, a = zs(l, {
						mode: "visible",
						children: a.children
					}), 0 === (1 & t.mode) && (a.lanes = n), a.return = t, a.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = a, t.memoizedState = null, a
				}

				function Al(e, t) {
					return (t = Fs({
						mode: "visible",
						children: t
					}, e.mode, 0, null)).return = e, e.child = t
				}

				function Vl(e, t, n, r) {
					return null !== r && mo(r), Go(t, e.child, null, n), (e = Al(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
				}

				function Ul(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), _o(e.return, t, n)
				}

				function Bl(e, t, n, r, a) {
					var o = e.memoizedState;
					null === o ? e.memoizedState = {
						isBackwards: t,
						rendering: null,
						renderingStartTime: 0,
						last: r,
						tail: n,
						tailMode: a
					} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = a)
				}

				function $l(e, t, n) {
					var r = t.pendingProps,
						a = r.revealOrder,
						o = r.tail;
					if (kl(e, t, r.children, n), 0 !== (2 & (r = ui.current))) r = 1 & r | 2, t.flags |= 128;
					else {
						if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
							if (13 === e.tag) null !== e.memoizedState && Ul(e, n, t);
							else if (19 === e.tag) Ul(e, n, t);
							else if (null !== e.child) {
								e.child.return = e, e = e.child;
								continue
							}
							if (e === t) break e;
							for (; null === e.sibling;) {
								if (null === e.return || e.return === t) break e;
								e = e.return
							}
							e.sibling.return = e.return, e = e.sibling
						}
						r &= 1
					}
					if (Ca(ui, r), 0 === (1 & t.mode)) t.memoizedState = null;
					else switch (a) {
						case "forwards":
							for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === si(e) && (a = n), n = n.sibling;
							null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Bl(t, !1, a, n, o);
							break;
						case "backwards":
							for (n = null, a = t.child, t.child = null; null !== a;) {
								if (null !== (e = a.alternate) && null === si(e)) {
									t.child = a;
									break
								}
								e = a.sibling, a.sibling = n, n = a, a = e
							}
							Bl(t, !0, n, null, o);
							break;
						case "together":
							Bl(t, !1, null, null, void 0);
							break;
						default:
							t.memoizedState = null
					}
					return t.child
				}

				function Wl(e, t) {
					0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
				}

				function Hl(e, t, n) {
					if (null !== e && (t.dependencies = e.dependencies), Fu |= t.lanes, 0 === (n & t.childLanes)) return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (n = zs(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = zs(e, e.pendingProps)).return = t;
						n.sibling = null
					}
					return t.child
				}

				function Ql(e, t) {
					if (!ao) switch (e.tailMode) {
						case "hidden":
							t = e.tail;
							for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
							null === n ? e.tail = null : n.sibling = null;
							break;
						case "collapsed":
							n = e.tail;
							for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
							null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
					}
				}

				function ql(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
					else
						for (a = e.child; null !== a;) n |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
					return e.subtreeFlags |= r, e.childLanes = n, t
				}

				function Zl(e, t, n) {
					var r = t.pendingProps;
					switch (to(t), t.tag) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return ql(t), null;
						case 1:
						case 17:
							return La(t.type) && Ra(), ql(t), null;
						case 3:
							return r = t.stateNode, oi(), Ea(Pa), Ea(ja), fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fo(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== oo && (ls(oo), oo = null))), Rl(e, t), ql(t), null;
						case 5:
							li(t);
							var a = ri(ni.current);
							if (n = t.type, null !== e && null != t.stateNode) zl(e, t, n, r, a), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(o(166));
									return ql(t), null
								}
								if (e = ri(ei.current), fo(t)) {
									r = t.stateNode, n = t.type;
									var i = t.memoizedProps;
									switch (r[da] = t, r[pa] = i, e = 0 !== (1 & t.mode), n) {
										case "dialog":
											Ar("cancel", r), Ar("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											Ar("load", r);
											break;
										case "video":
										case "audio":
											for (a = 0; a < Ir.length; a++) Ar(Ir[a], r);
											break;
										case "source":
											Ar("error", r);
											break;
										case "img":
										case "image":
										case "link":
											Ar("error", r), Ar("load", r);
											break;
										case "details":
											Ar("toggle", r);
											break;
										case "input":
											Y(r, i), Ar("invalid", r);
											break;
										case "select":
											r._wrapperState = {
												wasMultiple: !!i.multiple
											}, Ar("invalid", r);
											break;
										case "textarea":
											ae(r, i), Ar("invalid", r)
									}
									for (var u in ye(n, i), a = null, i)
										if (i.hasOwnProperty(u)) {
											var s = i[u];
											"children" === u ? "string" === typeof s ? r.textContent !== s && (!0 !== i.suppressHydrationWarning && Xr(r.textContent, s, e), a = ["children", s]) : "number" === typeof s && r.textContent !== "" + s && (!0 !== i.suppressHydrationWarning && Xr(r.textContent, s, e), a = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Ar("scroll", r)
										} switch (n) {
										case "input":
											Q(r), J(r, i, !0);
											break;
										case "textarea":
											Q(r), ie(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" === typeof i.onClick && (r.onclick = Jr)
									}
									r = a, t.updateQueue = r, null !== r && (t.flags |= 4)
								} else {
									u = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = le(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = u.createElement(n, {
										is: r.is
									}) : (e = u.createElement(n), "select" === n && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, n), e[da] = t, e[pa] = r, Ll(e, t, !1, !1), t.stateNode = e;
									e: {
										switch (u = be(n, r), n) {
											case "dialog":
												Ar("cancel", e), Ar("close", e), a = r;
												break;
											case "iframe":
											case "object":
											case "embed":
												Ar("load", e), a = r;
												break;
											case "video":
											case "audio":
												for (a = 0; a < Ir.length; a++) Ar(Ir[a], e);
												a = r;
												break;
											case "source":
												Ar("error", e), a = r;
												break;
											case "img":
											case "image":
											case "link":
												Ar("error", e), Ar("load", e), a = r;
												break;
											case "details":
												Ar("toggle", e), a = r;
												break;
											case "input":
												Y(e, r), a = K(e, r), Ar("invalid", e);
												break;
											case "option":
											default:
												a = r;
												break;
											case "select":
												e._wrapperState = {
													wasMultiple: !!r.multiple
												}, a = F({}, r, {
													value: void 0
												}), Ar("invalid", e);
												break;
											case "textarea":
												ae(e, r), a = re(e, r), Ar("invalid", e)
										}
										for (i in ye(n, a), s = a)
											if (s.hasOwnProperty(i)) {
												var c = s[i];
												"style" === i ? ve(e, c) : "dangerouslySetInnerHTML" === i ? null != (c = c ? c.__html : void 0) && fe(e, c) : "children" === i ? "string" === typeof c ? ("textarea" !== n || "" !== c) && de(e, c) : "number" === typeof c && de(e, "" + c) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != c && "onScroll" === i && Ar("scroll", e) : null != c && b(e, i, c, u))
											} switch (n) {
											case "input":
												Q(e), J(e, r, !1);
												break;
											case "textarea":
												Q(e), ie(e);
												break;
											case "option":
												null != r.value && e.setAttribute("value", "" + W(r.value));
												break;
											case "select":
												e.multiple = !!r.multiple, null != (i = r.value) ? ne(e, !!r.multiple, i, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" === typeof a.onClick && (e.onclick = Jr)
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1
										}
									}
									r && (t.flags |= 4)
								}
								null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
							}
							return ql(t), null;
						case 6:
							if (e && null != t.stateNode) Il(e, t, e.memoizedProps, r);
							else {
								if ("string" !== typeof r && null === t.stateNode) throw Error(o(166));
								if (n = ri(ni.current), ri(ei.current), fo(t)) {
									if (r = t.stateNode, n = t.memoizedProps, r[da] = t, (i = r.nodeValue !== n) && null !== (e = no)) switch (e.tag) {
										case 3:
											Xr(r.nodeValue, n, 0 !== (1 & e.mode));
											break;
										case 5:
											!0 !== e.memoizedProps.suppressHydrationWarning && Xr(r.nodeValue, n, 0 !== (1 & e.mode))
									}
									i && (t.flags |= 4)
								} else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[da] = t, t.stateNode = r
							}
							return ql(t), null;
						case 13:
							if (Ea(ui), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
								if (ao && null !== ro && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) po(), ho(), t.flags |= 98560, i = !1;
								else if (i = fo(t), null !== r && null !== r.dehydrated) {
									if (null === e) {
										if (!i) throw Error(o(318));
										if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null)) throw Error(o(317));
										i[da] = t
									} else ho(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
									ql(t), i = !1
								} else null !== oo && (ls(oo), oo = null), i = !0;
								if (!i) return 65536 & t.flags ? t : null
							}
							return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ui.current) ? 0 === Iu && (Iu = 3) : vs())), null !== t.updateQueue && (t.flags |= 4), ql(t), null);
						case 4:
							return oi(), Rl(e, t), null === e && Br(t.stateNode.containerInfo), ql(t), null;
						case 10:
							return So(t.type._context), ql(t), null;
						case 19:
							if (Ea(ui), null === (i = t.memoizedState)) return ql(t), null;
							if (r = 0 !== (128 & t.flags), null === (u = i.rendering))
								if (r) Ql(i, !1);
								else {
									if (0 !== Iu || null !== e && 0 !== (128 & e.flags))
										for (e = t.child; null !== e;) {
											if (null !== (u = si(e))) {
												for (t.flags |= 128, Ql(i, !1), null !== (r = u.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (i = n).flags &= 14680066, null === (u = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = u.childLanes, i.lanes = u.lanes, i.child = u.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = u.memoizedProps, i.memoizedState = u.memoizedState, i.updateQueue = u.updateQueue, i.type = u.type, e = u.dependencies, i.dependencies = null === e ? null : {
													lanes: e.lanes,
													firstContext: e.firstContext
												}), n = n.sibling;
												return Ca(ui, 1 & ui.current | 2), t.child
											}
											e = e.sibling
										}
									null !== i.tail && Ge() > $u && (t.flags |= 128, r = !0, Ql(i, !1), t.lanes = 4194304)
								}
							else {
								if (!r)
									if (null !== (e = si(u))) {
										if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), Ql(i, !0), null === i.tail && "hidden" === i.tailMode && !u.alternate && !ao) return ql(t), null
									} else 2 * Ge() - i.renderingStartTime > $u && 1073741824 !== n && (t.flags |= 128, r = !0, Ql(i, !1), t.lanes = 4194304);
								i.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (n = i.last) ? n.sibling = u : t.child = u, i.last = u)
							}
							return null !== i.tail ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Ge(), t.sibling = null, n = ui.current, Ca(ui, r ? 1 & n | 2 : 1 & n), t) : (ql(t), null);
						case 22:
						case 23:
							return ds(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Ru) && (ql(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : ql(t), null;
						case 24:
						case 25:
							return null
					}
					throw Error(o(156, t.tag))
				}

				function Kl(e, t) {
					switch (to(t), t.tag) {
						case 1:
							return La(t.type) && Ra(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 3:
							return oi(), Ea(Pa), Ea(ja), fi(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
						case 5:
							return li(t), null;
						case 13:
							if (Ea(ui), null !== (e = t.memoizedState) && null !== e.dehydrated) {
								if (null === t.alternate) throw Error(o(340));
								ho()
							}
							return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
						case 19:
							return Ea(ui), null;
						case 4:
							return oi(), null;
						case 10:
							return So(t.type._context), null;
						case 22:
						case 23:
							return ds(), null;
						default:
							return null
					}
				}
				Ll = function(e, t) {
					for (var n = t.child; null !== n;) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							n.child.return = n, n = n.child;
							continue
						}
						if (n === t) break;
						for (; null === n.sibling;) {
							if (null === n.return || n.return === t) return;
							n = n.return
						}
						n.sibling.return = n.return, n = n.sibling
					}
				}, Rl = function() {}, zl = function(e, t, n, r) {
					var a = e.memoizedProps;
					if (a !== r) {
						e = t.stateNode, ri(ei.current);
						var o, i = null;
						switch (n) {
							case "input":
								a = K(e, a), r = K(e, r), i = [];
								break;
							case "select":
								a = F({}, a, {
									value: void 0
								}), r = F({}, r, {
									value: void 0
								}), i = [];
								break;
							case "textarea":
								a = re(e, a), r = re(e, r), i = [];
								break;
							default:
								"function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
						}
						for (c in ye(n, r), n = null, a)
							if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
								if ("style" === c) {
									var u = a[c];
									for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
								} else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
						for (c in r) {
							var s = r[c];
							if (u = null != a ? a[c] : void 0, r.hasOwnProperty(c) && s !== u && (null != s || null != u))
								if ("style" === c)
									if (u) {
										for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
										for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o])
									} else n || (i || (i = []), i.push(c, n)), n = s;
							else "dangerouslySetInnerHTML" === c ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, null != s && u !== s && (i = i || []).push(c, s)) : "children" === c ? "string" !== typeof s && "number" !== typeof s || (i = i || []).push(c, "" + s) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (l.hasOwnProperty(c) ? (null != s && "onScroll" === c && Ar("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s))
						}
						n && (i = i || []).push("style", n);
						var c = i;
						(t.updateQueue = c) && (t.flags |= 4)
					}
				}, Il = function(e, t, n, r) {
					n !== r && (t.flags |= 4)
				};
				var Yl = !1,
					Gl = !1,
					Xl = "function" === typeof WeakSet ? WeakSet : Set,
					Jl = null;

				function eu(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" === typeof n) try {
							n(null)
						} catch (r) {
							Es(e, t, r)
						} else n.current = null
				}

				function tu(e, t, n) {
					try {
						n()
					} catch (r) {
						Es(e, t, r)
					}
				}
				var nu = !1;

				function ru(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var a = r = r.next;
						do {
							if ((a.tag & e) === e) {
								var o = a.destroy;
								a.destroy = void 0, void 0 !== o && tu(t, n, o)
							}
							a = a.next
						} while (a !== r)
					}
				}

				function au(e, t) {
					if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
						var n = t = t.next;
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r()
							}
							n = n.next
						} while (n !== t)
					}
				}

				function ou(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
					}
				}

				function iu(e) {
					var t = e.alternate;
					null !== t && (e.alternate = null, iu(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[da], delete t[pa], delete t[ma], delete t[va], delete t[ga])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
				}

				function lu(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag
				}

				function uu(e) {
					e: for (;;) {
						for (; null === e.sibling;) {
							if (null === e.return || lu(e.return)) return null;
							e = e.return
						}
						for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							e.child.return = e, e = e.child
						}
						if (!(2 & e.flags)) return e.stateNode
					}
				}

				function su(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
					else if (4 !== r && null !== (e = e.child))
						for (su(e, t, n), e = e.sibling; null !== e;) su(e, t, n), e = e.sibling
				}

				function cu(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (cu(e, t, n), e = e.sibling; null !== e;) cu(e, t, n), e = e.sibling
				}
				var fu = null,
					du = !1;

				function pu(e, t, n) {
					for (n = n.child; null !== n;) hu(e, t, n), n = n.sibling
				}

				function hu(e, t, n) {
					if (ot && "function" === typeof ot.onCommitFiberUnmount) try {
						ot.onCommitFiberUnmount(at, n)
					} catch (l) {}
					switch (n.tag) {
						case 5:
							Gl || eu(n, t);
						case 6:
							var r = fu,
								a = du;
							fu = null, pu(e, t, n), du = a, null !== (fu = r) && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : fu.removeChild(n.stateNode));
							break;
						case 18:
							null !== fu && (du ? (e = fu, n = n.stateNode, 8 === e.nodeType ? ua(e.parentNode, n) : 1 === e.nodeType && ua(e, n), Bt(e)) : ua(fu, n.stateNode));
							break;
						case 4:
							r = fu, a = du, fu = n.stateNode.containerInfo, du = !0, pu(e, t, n), fu = r, du = a;
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (!Gl && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
								a = r = r.next;
								do {
									var o = a,
										i = o.destroy;
									o = o.tag, void 0 !== i && (0 !== (2 & o) || 0 !== (4 & o)) && tu(n, t, i), a = a.next
								} while (a !== r)
							}
							pu(e, t, n);
							break;
						case 1:
							if (!Gl && (eu(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
								r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
							} catch (l) {
								Es(n, t, l)
							}
							pu(e, t, n);
							break;
						case 21:
							pu(e, t, n);
							break;
						case 22:
							1 & n.mode ? (Gl = (r = Gl) || null !== n.memoizedState, pu(e, t, n), Gl = r) : pu(e, t, n);
							break;
						default:
							pu(e, t, n)
					}
				}

				function mu(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Xl), t.forEach((function(t) {
							var r = Ps.bind(null, e, t);
							n.has(t) || (n.add(t), t.then(r, r))
						}))
					}
				}

				function vu(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var a = n[r];
							try {
								var i = e,
									l = t,
									u = l;
								e: for (; null !== u;) {
									switch (u.tag) {
										case 5:
											fu = u.stateNode, du = !1;
											break e;
										case 3:
										case 4:
											fu = u.stateNode.containerInfo, du = !0;
											break e
									}
									u = u.return
								}
								if (null === fu) throw Error(o(160));
								hu(i, l, a), fu = null, du = !1;
								var s = a.alternate;
								null !== s && (s.return = null), a.return = null
							} catch (c) {
								Es(a, t, c)
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t;) gu(t, e), t = t.sibling
				}

				function gu(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if (vu(t, e), yu(e), 4 & r) {
								try {
									ru(3, e, e.return), au(3, e)
								} catch (v) {
									Es(e, e.return, v)
								}
								try {
									ru(5, e, e.return)
								} catch (v) {
									Es(e, e.return, v)
								}
							}
							break;
						case 1:
							vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
							break;
						case 5:
							if (vu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return), 32 & e.flags) {
								var a = e.stateNode;
								try {
									de(a, "")
								} catch (v) {
									Es(e, e.return, v)
								}
							}
							if (4 & r && null != (a = e.stateNode)) {
								var i = e.memoizedProps,
									l = null !== n ? n.memoizedProps : i,
									u = e.type,
									s = e.updateQueue;
								if (e.updateQueue = null, null !== s) try {
									"input" === u && "radio" === i.type && null != i.name && G(a, i), be(u, l);
									var c = be(u, i);
									for (l = 0; l < s.length; l += 2) {
										var f = s[l],
											d = s[l + 1];
										"style" === f ? ve(a, d) : "dangerouslySetInnerHTML" === f ? fe(a, d) : "children" === f ? de(a, d) : b(a, f, d, c)
									}
									switch (u) {
										case "input":
											X(a, i);
											break;
										case "textarea":
											oe(a, i);
											break;
										case "select":
											var p = a._wrapperState.wasMultiple;
											a._wrapperState.wasMultiple = !!i.multiple;
											var h = i.value;
											null != h ? ne(a, !!i.multiple, h, !1) : p !== !!i.multiple && (null != i.defaultValue ? ne(a, !!i.multiple, i.defaultValue, !0) : ne(a, !!i.multiple, i.multiple ? [] : "", !1))
									}
									a[pa] = i
								} catch (v) {
									Es(e, e.return, v)
								}
							}
							break;
						case 6:
							if (vu(t, e), yu(e), 4 & r) {
								if (null === e.stateNode) throw Error(o(162));
								a = e.stateNode, i = e.memoizedProps;
								try {
									a.nodeValue = i
								} catch (v) {
									Es(e, e.return, v)
								}
							}
							break;
						case 3:
							if (vu(t, e), yu(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
								Bt(t.containerInfo)
							} catch (v) {
								Es(e, e.return, v)
							}
							break;
						case 4:
						default:
							vu(t, e), yu(e);
							break;
						case 13:
							vu(t, e), yu(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Bu = Ge())), 4 & r && mu(e);
							break;
						case 22:
							if (f = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gl = (c = Gl) || f, vu(t, e), Gl = c) : vu(t, e), yu(e), 8192 & r) {
								if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
									for (Jl = e, f = e.child; null !== f;) {
										for (d = Jl = f; null !== Jl;) {
											switch (h = (p = Jl).child, p.tag) {
												case 0:
												case 11:
												case 14:
												case 15:
													ru(4, p, p.return);
													break;
												case 1:
													eu(p, p.return);
													var m = p.stateNode;
													if ("function" === typeof m.componentWillUnmount) {
														r = p, n = p.return;
														try {
															t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
														} catch (v) {
															Es(r, n, v)
														}
													}
													break;
												case 5:
													eu(p, p.return);
													break;
												case 22:
													if (null !== p.memoizedState) {
														xu(d);
														continue
													}
											}
											null !== h ? (h.return = p, Jl = h) : xu(d)
										}
										f = f.sibling
									}
								e: for (f = null, d = e;;) {
									if (5 === d.tag) {
										if (null === f) {
											f = d;
											try {
												a = d.stateNode, c ? "function" === typeof(i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (u = d.stateNode, l = void 0 !== (s = d.memoizedProps.style) && null !== s && s.hasOwnProperty("display") ? s.display : null, u.style.display = me("display", l))
											} catch (v) {
												Es(e, e.return, v)
											}
										}
									} else if (6 === d.tag) {
										if (null === f) try {
											d.stateNode.nodeValue = c ? "" : d.memoizedProps
										} catch (v) {
											Es(e, e.return, v)
										}
									} else if ((22 !== d.tag && 23 !== d.tag || null === d.memoizedState || d === e) && null !== d.child) {
										d.child.return = d, d = d.child;
										continue
									}
									if (d === e) break e;
									for (; null === d.sibling;) {
										if (null === d.return || d.return === e) break e;
										f === d && (f = null), d = d.return
									}
									f === d && (f = null), d.sibling.return = d.return, d = d.sibling
								}
							}
							break;
						case 19:
							vu(t, e), yu(e), 4 & r && mu(e);
						case 21:
					}
				}

				function yu(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n;) {
									if (lu(n)) {
										var r = n;
										break e
									}
									n = n.return
								}
								throw Error(o(160))
							}
							switch (r.tag) {
								case 5:
									var a = r.stateNode;
									32 & r.flags && (de(a, ""), r.flags &= -33), cu(e, uu(e), a);
									break;
								case 3:
								case 4:
									var i = r.stateNode.containerInfo;
									su(e, uu(e), i);
									break;
								default:
									throw Error(o(161))
							}
						}
						catch (l) {
							Es(e, e.return, l)
						}
						e.flags &= -3
					}
					4096 & t && (e.flags &= -4097)
				}

				function bu(e, t, n) {
					Jl = e, wu(e, t, n)
				}

				function wu(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Jl;) {
						var a = Jl,
							o = a.child;
						if (22 === a.tag && r) {
							var i = null !== a.memoizedState || Yl;
							if (!i) {
								var l = a.alternate,
									u = null !== l && null !== l.memoizedState || Gl;
								l = Yl;
								var s = Gl;
								if (Yl = i, (Gl = u) && !s)
									for (Jl = a; null !== Jl;) u = (i = Jl).child, 22 === i.tag && null !== i.memoizedState ? Su(a) : null !== u ? (u.return = i, Jl = u) : Su(a);
								for (; null !== o;) Jl = o, wu(o, t, n), o = o.sibling;
								Jl = a, Yl = l, Gl = s
							}
							ku(e)
						} else 0 !== (8772 & a.subtreeFlags) && null !== o ? (o.return = a, Jl = o) : ku(e)
					}
				}

				function ku(e) {
					for (; null !== Jl;) {
						var t = Jl;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags)) switch (t.tag) {
									case 0:
									case 11:
									case 15:
										Gl || au(5, t);
										break;
									case 1:
										var r = t.stateNode;
										if (4 & t.flags && !Gl)
											if (null === n) r.componentDidMount();
											else {
												var a = t.elementType === t.type ? n.memoizedProps : go(t.type, n.memoizedProps);
												r.componentDidUpdate(a, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
											} var i = t.updateQueue;
										null !== i && Ao(t, i, r);
										break;
									case 3:
										var l = t.updateQueue;
										if (null !== l) {
											if (n = null, null !== t.child) switch (t.child.tag) {
												case 5:
												case 1:
													n = t.child.stateNode
											}
											Ao(t, l, n)
										}
										break;
									case 5:
										var u = t.stateNode;
										if (null === n && 4 & t.flags) {
											n = u;
											var s = t.memoizedProps;
											switch (t.type) {
												case "button":
												case "input":
												case "select":
												case "textarea":
													s.autoFocus && n.focus();
													break;
												case "img":
													s.src && (n.src = s.src)
											}
										}
										break;
									case 6:
									case 4:
									case 12:
									case 19:
									case 17:
									case 21:
									case 22:
									case 23:
									case 25:
										break;
									case 13:
										if (null === t.memoizedState) {
											var c = t.alternate;
											if (null !== c) {
												var f = c.memoizedState;
												if (null !== f) {
													var d = f.dehydrated;
													null !== d && Bt(d)
												}
											}
										}
										break;
									default:
										throw Error(o(163))
								}
								Gl || 512 & t.flags && ou(t)
							} catch (p) {
								Es(t, t.return, p)
							}
						}
						if (t === e) {
							Jl = null;
							break
						}
						if (null !== (n = t.sibling)) {
							n.return = t.return, Jl = n;
							break
						}
						Jl = t.return
					}
				}

				function xu(e) {
					for (; null !== Jl;) {
						var t = Jl;
						if (t === e) {
							Jl = null;
							break
						}
						var n = t.sibling;
						if (null !== n) {
							n.return = t.return, Jl = n;
							break
						}
						Jl = t.return
					}
				}

				function Su(e) {
					for (; null !== Jl;) {
						var t = Jl;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										au(4, t)
									} catch (u) {
										Es(t, n, u)
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" === typeof r.componentDidMount) {
										var a = t.return;
										try {
											r.componentDidMount()
										} catch (u) {
											Es(t, a, u)
										}
									}
									var o = t.return;
									try {
										ou(t)
									} catch (u) {
										Es(t, o, u)
									}
									break;
								case 5:
									var i = t.return;
									try {
										ou(t)
									} catch (u) {
										Es(t, i, u)
									}
							}
						} catch (u) {
							Es(t, t.return, u)
						}
						if (t === e) {
							Jl = null;
							break
						}
						var l = t.sibling;
						if (null !== l) {
							l.return = t.return, Jl = l;
							break
						}
						Jl = t.return
					}
				}
				var _u, Eu = Math.ceil,
					Cu = w.ReactCurrentDispatcher,
					Nu = w.ReactCurrentOwner,
					ju = w.ReactCurrentBatchConfig,
					Pu = 0,
					Tu = null,
					Ou = null,
					Lu = 0,
					Ru = 0,
					zu = _a(0),
					Iu = 0,
					Du = null,
					Fu = 0,
					Mu = 0,
					Au = 0,
					Vu = null,
					Uu = null,
					Bu = 0,
					$u = 1 / 0,
					Wu = null,
					Hu = !1,
					Qu = null,
					qu = null,
					Zu = !1,
					Ku = null,
					Yu = 0,
					Gu = 0,
					Xu = null,
					Ju = -1,
					es = 0;

				function ts() {
					return 0 !== (6 & Pu) ? Ge() : -1 !== Ju ? Ju : Ju = Ge()
				}

				function ns(e) {
					return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Pu) && 0 !== Lu ? Lu & -Lu : null !== vo.transition ? (0 === es && (es = mt()), es) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Yt(e.type)
				}

				function rs(e, t, n, r) {
					if (50 < Gu) throw Gu = 0, Xu = null, Error(o(185));
					gt(e, n, r), 0 !== (2 & Pu) && e === Tu || (e === Tu && (0 === (2 & Pu) && (Mu |= n), 4 === Iu && us(e, Lu)), as(e, r), 1 === n && 0 === Pu && 0 === (1 & t.mode) && ($u = Ge() + 500, Aa && Ba()))
				}

				function as(e, t) {
					var n = e.callbackNode;
					! function(e, t) {
						for (var n = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
							var i = 31 - it(o),
								l = 1 << i,
								u = a[i]; - 1 === u ? 0 !== (l & n) && 0 === (l & r) || (a[i] = pt(l, t)) : u <= t && (e.expiredLanes |= l), o &= ~l
						}
					}(e, t);
					var r = dt(e, e === Tu ? Lu : 0);
					if (0 === r) null !== n && Ze(n), e.callbackNode = null, e.callbackPriority = 0;
					else if (t = r & -r, e.callbackPriority !== t) {
						if (null != n && Ze(n), 1 === t) 0 === e.tag ? function(e) {
							Aa = !0, Ua(e)
						}(ss.bind(null, e)) : Ua(ss.bind(null, e)), ia((function() {
							0 === (6 & Pu) && Ba()
						})), n = null;
						else {
							switch (wt(r)) {
								case 1:
									n = Je;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt
							}
							n = Ts(n, os.bind(null, e))
						}
						e.callbackPriority = t, e.callbackNode = n
					}
				}

				function os(e, t) {
					if (Ju = -1, es = 0, 0 !== (6 & Pu)) throw Error(o(327));
					var n = e.callbackNode;
					if (Ss() && e.callbackNode !== n) return null;
					var r = dt(e, e === Tu ? Lu : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gs(e, r);
					else {
						t = r;
						var a = Pu;
						Pu |= 2;
						var i = ms();
						for (Tu === e && Lu === t || (Wu = null, $u = Ge() + 500, ps(e, t));;) try {
							bs();
							break
						} catch (u) {
							hs(e, u)
						}
						xo(), Cu.current = i, Pu = a, null !== Ou ? t = 0 : (Tu = null, Lu = 0, t = Iu)
					}
					if (0 !== t) {
						if (2 === t && (0 !== (a = ht(e)) && (r = a, t = is(e, a))), 1 === t) throw n = Du, ps(e, 0), us(e, r), as(e, Ge()), n;
						if (6 === t) us(e, r);
						else {
							if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
									for (var t = e;;) {
										if (16384 & t.flags) {
											var n = t.updateQueue;
											if (null !== n && null !== (n = n.stores))
												for (var r = 0; r < n.length; r++) {
													var a = n[r],
														o = a.getSnapshot;
													a = a.value;
													try {
														if (!lr(o(), a)) return !1
													} catch (l) {
														return !1
													}
												}
										}
										if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
										else {
											if (t === e) break;
											for (; null === t.sibling;) {
												if (null === t.return || t.return === e) return !0;
												t = t.return
											}
											t.sibling.return = t.return, t = t.sibling
										}
									}
									return !0
								}(a) && (2 === (t = gs(e, r)) && (0 !== (i = ht(e)) && (r = i, t = is(e, i))), 1 === t)) throw n = Du, ps(e, 0), us(e, r), as(e, Ge()), n;
							switch (e.finishedWork = a, e.finishedLanes = r, t) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									xs(e, Uu, Wu);
									break;
								case 3:
									if (us(e, r), (130023424 & r) === r && 10 < (t = Bu + 500 - Ge())) {
										if (0 !== dt(e, 0)) break;
										if (((a = e.suspendedLanes) & r) !== r) {
											ts(), e.pingedLanes |= e.suspendedLanes & a;
											break
										}
										e.timeoutHandle = ra(xs.bind(null, e, Uu, Wu), t);
										break
									}
									xs(e, Uu, Wu);
									break;
								case 4:
									if (us(e, r), (4194240 & r) === r) break;
									for (t = e.eventTimes, a = -1; 0 < r;) {
										var l = 31 - it(r);
										i = 1 << l, (l = t[l]) > a && (a = l), r &= ~i
									}
									if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Eu(r / 1960)) - r)) {
										e.timeoutHandle = ra(xs.bind(null, e, Uu, Wu), r);
										break
									}
									xs(e, Uu, Wu);
									break;
								default:
									throw Error(o(329))
							}
						}
					}
					return as(e, Ge()), e.callbackNode === n ? os.bind(null, e) : null
				}

				function is(e, t) {
					var n = Vu;
					return e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256), 2 !== (e = gs(e, t)) && (t = Uu, Uu = n, null !== t && ls(t)), e
				}

				function ls(e) {
					null === Uu ? Uu = e : Uu.push.apply(Uu, e)
				}

				function us(e, t) {
					for (t &= ~Au, t &= ~Mu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
						var n = 31 - it(t),
							r = 1 << n;
						e[n] = -1, t &= ~r
					}
				}

				function ss(e) {
					if (0 !== (6 & Pu)) throw Error(o(327));
					Ss();
					var t = dt(e, 0);
					if (0 === (1 & t)) return as(e, Ge()), null;
					var n = gs(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = ht(e);
						0 !== r && (t = r, n = is(e, r))
					}
					if (1 === n) throw n = Du, ps(e, 0), us(e, t), as(e, Ge()), n;
					if (6 === n) throw Error(o(345));
					return e.finishedWork = e.current.alternate, e.finishedLanes = t, xs(e, Uu, Wu), as(e, Ge()), null
				}

				function cs(e, t) {
					var n = Pu;
					Pu |= 1;
					try {
						return e(t)
					} finally {
						0 === (Pu = n) && ($u = Ge() + 500, Aa && Ba())
					}
				}

				function fs(e) {
					null !== Ku && 0 === Ku.tag && 0 === (6 & Pu) && Ss();
					var t = Pu;
					Pu |= 1;
					var n = ju.transition,
						r = bt;
					try {
						if (ju.transition = null, bt = 1, e) return e()
					} finally {
						bt = r, ju.transition = n, 0 === (6 & (Pu = t)) && Ba()
					}
				}

				function ds() {
					Ru = zu.current, Ea(zu)
				}

				function ps(e, t) {
					e.finishedWork = null, e.finishedLanes = 0;
					var n = e.timeoutHandle;
					if (-1 !== n && (e.timeoutHandle = -1, aa(n)), null !== Ou)
						for (n = Ou.return; null !== n;) {
							var r = n;
							switch (to(r), r.tag) {
								case 1:
									null !== (r = r.type.childContextTypes) && void 0 !== r && Ra();
									break;
								case 3:
									oi(), Ea(Pa), Ea(ja), fi();
									break;
								case 5:
									li(r);
									break;
								case 4:
									oi();
									break;
								case 13:
								case 19:
									Ea(ui);
									break;
								case 10:
									So(r.type._context);
									break;
								case 22:
								case 23:
									ds()
							}
							n = n.return
						}
					if (Tu = e, Ou = e = zs(e.current, null), Lu = Ru = t, Iu = 0, Du = null, Au = Mu = Fu = 0, Uu = Vu = null, null !== No) {
						for (t = 0; t < No.length; t++)
							if (null !== (r = (n = No[t]).interleaved)) {
								n.interleaved = null;
								var a = r.next,
									o = n.pending;
								if (null !== o) {
									var i = o.next;
									o.next = a, r.next = i
								}
								n.pending = r
							} No = null
					}
					return e
				}

				function hs(e, t) {
					for (;;) {
						var n = Ou;
						try {
							if (xo(), di.current = il, yi) {
								for (var r = mi.memoizedState; null !== r;) {
									var a = r.queue;
									null !== a && (a.pending = null), r = r.next
								}
								yi = !1
							}
							if (hi = 0, gi = vi = mi = null, bi = !1, wi = 0, Nu.current = null, null === n || null === n.return) {
								Iu = 1, Du = t, Ou = null;
								break
							}
							e: {
								var i = e,
									l = n.return,
									u = n,
									s = t;
								if (t = Lu, u.flags |= 32768, null !== s && "object" === typeof s && "function" === typeof s.then) {
									var c = s,
										f = u,
										d = f.tag;
									if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
										var p = f.alternate;
										p ? (f.updateQueue = p.updateQueue, f.memoizedState = p.memoizedState, f.lanes = p.lanes) : (f.updateQueue = null, f.memoizedState = null)
									}
									var h = gl(l);
									if (null !== h) {
										h.flags &= -257, yl(h, l, u, 0, t), 1 & h.mode && vl(i, c, t), s = c;
										var m = (t = h).updateQueue;
										if (null === m) {
											var v = new Set;
											v.add(s), t.updateQueue = v
										} else m.add(s);
										break e
									}
									if (0 === (1 & t)) {
										vl(i, c, t), vs();
										break e
									}
									s = Error(o(426))
								} else if (ao && 1 & u.mode) {
									var g = gl(l);
									if (null !== g) {
										0 === (65536 & g.flags) && (g.flags |= 256), yl(g, l, u, 0, t), mo(cl(s, u));
										break e
									}
								}
								i = s = cl(s, u),
								4 !== Iu && (Iu = 2),
								null === Vu ? Vu = [i] : Vu.push(i),
								i = l;do {
									switch (i.tag) {
										case 3:
											i.flags |= 65536, t &= -t, i.lanes |= t, Fo(i, hl(0, s, t));
											break e;
										case 1:
											u = s;
											var y = i.type,
												b = i.stateNode;
											if (0 === (128 & i.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === qu || !qu.has(b)))) {
												i.flags |= 65536, t &= -t, i.lanes |= t, Fo(i, ml(i, u, t));
												break e
											}
									}
									i = i.return
								} while (null !== i)
							}
							ks(n)
						} catch (w) {
							t = w, Ou === n && null !== n && (Ou = n = n.return);
							continue
						}
						break
					}
				}

				function ms() {
					var e = Cu.current;
					return Cu.current = il, null === e ? il : e
				}

				function vs() {
					0 !== Iu && 3 !== Iu && 2 !== Iu || (Iu = 4), null === Tu || 0 === (268435455 & Fu) && 0 === (268435455 & Mu) || us(Tu, Lu)
				}

				function gs(e, t) {
					var n = Pu;
					Pu |= 2;
					var r = ms();
					for (Tu === e && Lu === t || (Wu = null, ps(e, t));;) try {
						ys();
						break
					} catch (a) {
						hs(e, a)
					}
					if (xo(), Pu = n, Cu.current = r, null !== Ou) throw Error(o(261));
					return Tu = null, Lu = 0, Iu
				}

				function ys() {
					for (; null !== Ou;) ws(Ou)
				}

				function bs() {
					for (; null !== Ou && !Ke();) ws(Ou)
				}

				function ws(e) {
					var t = _u(e.alternate, e, Ru);
					e.memoizedProps = e.pendingProps, null === t ? ks(e) : Ou = t, Nu.current = null
				}

				function ks(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (e = t.return, 0 === (32768 & t.flags)) {
							if (null !== (n = Zl(n, t, Ru))) return void(Ou = n)
						} else {
							if (null !== (n = Kl(n, t))) return n.flags &= 32767, void(Ou = n);
							if (null === e) return Iu = 6, void(Ou = null);
							e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
						}
						if (null !== (t = t.sibling)) return void(Ou = t);
						Ou = t = e
					} while (null !== t);
					0 === Iu && (Iu = 5)
				}

				function xs(e, t, n) {
					var r = bt,
						a = ju.transition;
					try {
						ju.transition = null, bt = 1,
							function(e, t, n, r) {
								do {
									Ss()
								} while (null !== Ku);
								if (0 !== (6 & Pu)) throw Error(o(327));
								n = e.finishedWork;
								var a = e.finishedLanes;
								if (null === n) return null;
								if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(o(177));
								e.callbackNode = null, e.callbackPriority = 0;
								var i = n.lanes | n.childLanes;
								if (function(e, t) {
										var n = e.pendingLanes & ~t;
										e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n;) {
											var a = 31 - it(n),
												o = 1 << a;
											t[a] = 0, r[a] = -1, e[a] = -1, n &= ~o
										}
									}(e, i), e === Tu && (Ou = Tu = null, Lu = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Zu || (Zu = !0, Ts(tt, (function() {
										return Ss(), null
									}))), i = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || i) {
									i = ju.transition, ju.transition = null;
									var l = bt;
									bt = 1;
									var u = Pu;
									Pu |= 4, Nu.current = null,
										function(e, t) {
											if (ea = Wt, pr(e = dr())) {
												if ("selectionStart" in e) var n = {
													start: e.selectionStart,
													end: e.selectionEnd
												};
												else e: {
													var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
													if (r && 0 !== r.rangeCount) {
														n = r.anchorNode;
														var a = r.anchorOffset,
															i = r.focusNode;
														r = r.focusOffset;
														try {
															n.nodeType, i.nodeType
														} catch (k) {
															n = null;
															break e
														}
														var l = 0,
															u = -1,
															s = -1,
															c = 0,
															f = 0,
															d = e,
															p = null;
														t: for (;;) {
															for (var h; d !== n || 0 !== a && 3 !== d.nodeType || (u = l + a), d !== i || 0 !== r && 3 !== d.nodeType || (s = l + r), 3 === d.nodeType && (l += d.nodeValue.length), null !== (h = d.firstChild);) p = d, d = h;
															for (;;) {
																if (d === e) break t;
																if (p === n && ++c === a && (u = l), p === i && ++f === r && (s = l), null !== (h = d.nextSibling)) break;
																p = (d = p).parentNode
															}
															d = h
														}
														n = -1 === u || -1 === s ? null : {
															start: u,
															end: s
														}
													} else n = null
												}
												n = n || {
													start: 0,
													end: 0
												}
											} else n = null;
											for (ta = {
													focusedElem: e,
													selectionRange: n
												}, Wt = !1, Jl = t; null !== Jl;)
												if (e = (t = Jl).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Jl = e;
												else
													for (; null !== Jl;) {
														t = Jl;
														try {
															var m = t.alternate;
															if (0 !== (1024 & t.flags)) switch (t.tag) {
																case 0:
																case 11:
																case 15:
																case 5:
																case 6:
																case 4:
																case 17:
																	break;
																case 1:
																	if (null !== m) {
																		var v = m.memoizedProps,
																			g = m.memoizedState,
																			y = t.stateNode,
																			b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : go(t.type, v), g);
																		y.__reactInternalSnapshotBeforeUpdate = b
																	}
																	break;
																case 3:
																	var w = t.stateNode.containerInfo;
																	1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
																	break;
																default:
																	throw Error(o(163))
															}
														} catch (k) {
															Es(t, t.return, k)
														}
														if (null !== (e = t.sibling)) {
															e.return = t.return, Jl = e;
															break
														}
														Jl = t.return
													}
											m = nu, nu = !1
										}(e, n), gu(n, e), hr(ta), Wt = !!ea, ta = ea = null, e.current = n, bu(n, e, a), Ye(), Pu = u, bt = l, ju.transition = i
								} else e.current = n;
								if (Zu && (Zu = !1, Ku = e, Yu = a), i = e.pendingLanes, 0 === i && (qu = null), function(e) {
										if (ot && "function" === typeof ot.onCommitFiberRoot) try {
											ot.onCommitFiberRoot(at, e, void 0, 128 === (128 & e.current.flags))
										} catch (t) {}
									}(n.stateNode), as(e, Ge()), null !== t)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++) a = t[n], r(a.value, {
										componentStack: a.stack,
										digest: a.digest
									});
								if (Hu) throw Hu = !1, e = Qu, Qu = null, e;
								0 !== (1 & Yu) && 0 !== e.tag && Ss(), i = e.pendingLanes, 0 !== (1 & i) ? e === Xu ? Gu++ : (Gu = 0, Xu = e) : Gu = 0, Ba()
							}(e, t, n, r)
					} finally {
						ju.transition = a, bt = r
					}
					return null
				}

				function Ss() {
					if (null !== Ku) {
						var e = wt(Yu),
							t = ju.transition,
							n = bt;
						try {
							if (ju.transition = null, bt = 16 > e ? 16 : e, null === Ku) var r = !1;
							else {
								if (e = Ku, Ku = null, Yu = 0, 0 !== (6 & Pu)) throw Error(o(331));
								var a = Pu;
								for (Pu |= 4, Jl = e.current; null !== Jl;) {
									var i = Jl,
										l = i.child;
									if (0 !== (16 & Jl.flags)) {
										var u = i.deletions;
										if (null !== u) {
											for (var s = 0; s < u.length; s++) {
												var c = u[s];
												for (Jl = c; null !== Jl;) {
													var f = Jl;
													switch (f.tag) {
														case 0:
														case 11:
														case 15:
															ru(8, f, i)
													}
													var d = f.child;
													if (null !== d) d.return = f, Jl = d;
													else
														for (; null !== Jl;) {
															var p = (f = Jl).sibling,
																h = f.return;
															if (iu(f), f === c) {
																Jl = null;
																break
															}
															if (null !== p) {
																p.return = h, Jl = p;
																break
															}
															Jl = h
														}
												}
											}
											var m = i.alternate;
											if (null !== m) {
												var v = m.child;
												if (null !== v) {
													m.child = null;
													do {
														var g = v.sibling;
														v.sibling = null, v = g
													} while (null !== v)
												}
											}
											Jl = i
										}
									}
									if (0 !== (2064 & i.subtreeFlags) && null !== l) l.return = i, Jl = l;
									else e: for (; null !== Jl;) {
										if (0 !== (2048 & (i = Jl).flags)) switch (i.tag) {
											case 0:
											case 11:
											case 15:
												ru(9, i, i.return)
										}
										var y = i.sibling;
										if (null !== y) {
											y.return = i.return, Jl = y;
											break e
										}
										Jl = i.return
									}
								}
								var b = e.current;
								for (Jl = b; null !== Jl;) {
									var w = (l = Jl).child;
									if (0 !== (2064 & l.subtreeFlags) && null !== w) w.return = l, Jl = w;
									else e: for (l = b; null !== Jl;) {
										if (0 !== (2048 & (u = Jl).flags)) try {
											switch (u.tag) {
												case 0:
												case 11:
												case 15:
													au(9, u)
											}
										} catch (x) {
											Es(u, u.return, x)
										}
										if (u === l) {
											Jl = null;
											break e
										}
										var k = u.sibling;
										if (null !== k) {
											k.return = u.return, Jl = k;
											break e
										}
										Jl = u.return
									}
								}
								if (Pu = a, Ba(), ot && "function" === typeof ot.onPostCommitFiberRoot) try {
									ot.onPostCommitFiberRoot(at, e)
								} catch (x) {}
								r = !0
							}
							return r
						} finally {
							bt = n, ju.transition = t
						}
					}
					return !1
				}

				function _s(e, t, n) {
					e = Io(e, t = hl(0, t = cl(n, t), 1), 1), t = ts(), null !== e && (gt(e, 1, t), as(e, t))
				}

				function Es(e, t, n) {
					if (3 === e.tag) _s(e, e, n);
					else
						for (; null !== t;) {
							if (3 === t.tag) {
								_s(t, e, n);
								break
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === qu || !qu.has(r))) {
									t = Io(t, e = ml(t, e = cl(n, e), 1), 1), e = ts(), null !== t && (gt(t, 1, e), as(t, e));
									break
								}
							}
							t = t.return
						}
				}

				function Cs(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t), t = ts(), e.pingedLanes |= e.suspendedLanes & n, Tu === e && (Lu & n) === n && (4 === Iu || 3 === Iu && (130023424 & Lu) === Lu && 500 > Ge() - Bu ? ps(e, 0) : Au |= n), as(e, t)
				}

				function Ns(e, t) {
					0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = ts();
					null !== (e = To(e, t)) && (gt(e, t, n), as(e, n))
				}

				function js(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Ns(e, n)
				}

				function Ps(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								a = e.memoizedState;
							null !== a && (n = a.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(o(314))
					}
					null !== r && r.delete(t), Ns(e, n)
				}

				function Ts(e, t) {
					return qe(e, t)
				}

				function Os(e, t, n, r) {
					this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
				}

				function Ls(e, t, n, r) {
					return new Os(e, t, n, r)
				}

				function Rs(e) {
					return !(!(e = e.prototype) || !e.isReactComponent)
				}

				function zs(e, t) {
					var n = e.alternate;
					return null === n ? ((n = Ls(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
						lanes: t.lanes,
						firstContext: t.firstContext
					}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
				}

				function Is(e, t, n, r, a, i) {
					var l = 2;
					if (r = e, "function" === typeof e) Rs(e) && (l = 1);
					else if ("string" === typeof e) l = 5;
					else e: switch (e) {
						case S:
							return Ds(n.children, a, i, t);
						case _:
							l = 8, a |= 8;
							break;
						case E:
							return (e = Ls(12, n, t, 2 | a)).elementType = E, e.lanes = i, e;
						case P:
							return (e = Ls(13, n, t, a)).elementType = P, e.lanes = i, e;
						case T:
							return (e = Ls(19, n, t, a)).elementType = T, e.lanes = i, e;
						case R:
							return Fs(n, a, i, t);
						default:
							if ("object" === typeof e && null !== e) switch (e.$$typeof) {
								case C:
									l = 10;
									break e;
								case N:
									l = 9;
									break e;
								case j:
									l = 11;
									break e;
								case O:
									l = 14;
									break e;
								case L:
									l = 16, r = null;
									break e
							}
							throw Error(o(130, null == e ? e : typeof e, ""))
					}
					return (t = Ls(l, n, t, a)).elementType = e, t.type = r, t.lanes = i, t
				}

				function Ds(e, t, n, r) {
					return (e = Ls(7, e, r, t)).lanes = n, e
				}

				function Fs(e, t, n, r) {
					return (e = Ls(22, e, r, t)).elementType = R, e.lanes = n, e.stateNode = {
						isHidden: !1
					}, e
				}

				function Ms(e, t, n) {
					return (e = Ls(6, e, null, t)).lanes = n, e
				}

				function As(e, t, n) {
					return (t = Ls(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
						containerInfo: e.containerInfo,
						pendingChildren: null,
						implementation: e.implementation
					}, t
				}

				function Vs(e, t, n, r, a) {
					this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
				}

				function Us(e, t, n, r, a, o, i, l, u) {
					return e = new Vs(e, t, n, l, u), 1 === t ? (t = 1, !0 === o && (t |= 8)) : t = 0, o = Ls(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
						element: r,
						isDehydrated: n,
						cache: null,
						transitions: null,
						pendingSuspenseBoundaries: null
					}, Lo(o), e
				}

				function Bs(e) {
					if (!e) return Na;
					e: {
						if (Be(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(o(170));
						var t = e;do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (La(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e
									}
							}
							t = t.return
						} while (null !== t);
						throw Error(o(171))
					}
					if (1 === e.tag) {
						var n = e.type;
						if (La(n)) return Ia(e, n, t)
					}
					return t
				}

				function $s(e, t, n, r, a, o, i, l, u) {
					return (e = Us(n, r, !0, e, 0, o, 0, l, u)).context = Bs(null), n = e.current, (o = zo(r = ts(), a = ns(n))).callback = void 0 !== t && null !== t ? t : null, Io(n, o, a), e.current.lanes = a, gt(e, a, r), as(e, r), e
				}

				function Ws(e, t, n, r) {
					var a = t.current,
						o = ts(),
						i = ns(a);
					return n = Bs(n), null === t.context ? t.context = n : t.pendingContext = n, (t = zo(o, i)).payload = {
						element: e
					}, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = Io(a, t, i)) && (rs(e, a, i, o), Do(e, a, i)), i
				}

				function Hs(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
				}

				function Qs(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t
					}
				}

				function qs(e, t) {
					Qs(e, t), (e = e.alternate) && Qs(e, t)
				}
				_u = function(e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || Pa.current) wl = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return wl = !1,
								function(e, t, n) {
									switch (t.tag) {
										case 3:
											Tl(t), ho();
											break;
										case 5:
											ii(t);
											break;
										case 1:
											La(t.type) && Da(t);
											break;
										case 4:
											ai(t, t.stateNode.containerInfo);
											break;
										case 10:
											var r = t.type._context,
												a = t.memoizedProps.value;
											Ca(yo, r._currentValue), r._currentValue = a;
											break;
										case 13:
											if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (Ca(ui, 1 & ui.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Ml(e, t, n) : (Ca(ui, 1 & ui.current), null !== (e = Hl(e, t, n)) ? e.sibling : null);
											Ca(ui, 1 & ui.current);
											break;
										case 19:
											if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
												if (r) return $l(e, t, n);
												t.flags |= 128
											}
											if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ca(ui, ui.current), r) break;
											return null;
										case 22:
										case 23:
											return t.lanes = 0, El(e, t, n)
									}
									return Hl(e, t, n)
								}(e, t, n);
							wl = 0 !== (131072 & e.flags)
						}
					else wl = !1, ao && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
					switch (t.lanes = 0, t.tag) {
						case 2:
							var r = t.type;
							Wl(e, t), e = t.pendingProps;
							var a = Oa(t, ja.current);
							Eo(t, n), a = _i(null, t, r, e, a, n);
							var i = Ei();
							return t.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, La(r) ? (i = !0, Da(t)) : i = !1, t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Lo(t), a.updater = Bo, t.stateNode = a, a._reactInternals = t, Qo(t, r, e, n), t = Pl(null, t, r, !0, i, n)) : (t.tag = 0, ao && i && eo(t), kl(null, t, a, n), t = t.child), t;
						case 16:
							r = t.elementType;
							e: {
								switch (Wl(e, t), e = t.pendingProps, r = (a = r._init)(r._payload), t.type = r, a = t.tag = function(e) {
										if ("function" === typeof e) return Rs(e) ? 1 : 0;
										if (void 0 !== e && null !== e) {
											if ((e = e.$$typeof) === j) return 11;
											if (e === O) return 14
										}
										return 2
									}(r), e = go(r, e), a) {
									case 0:
										t = Nl(null, t, r, e, n);
										break e;
									case 1:
										t = jl(null, t, r, e, n);
										break e;
									case 11:
										t = xl(null, t, r, e, n);
										break e;
									case 14:
										t = Sl(null, t, r, go(r.type, e), n);
										break e
								}
								throw Error(o(306, r, ""))
							}
							return t;
						case 0:
							return r = t.type, a = t.pendingProps, Nl(e, t, r, a = t.elementType === r ? a : go(r, a), n);
						case 1:
							return r = t.type, a = t.pendingProps, jl(e, t, r, a = t.elementType === r ? a : go(r, a), n);
						case 3:
							e: {
								if (Tl(t), null === e) throw Error(o(387));r = t.pendingProps,
								a = (i = t.memoizedState).element,
								Ro(e, t),
								Mo(t, r, null, n);
								var l = t.memoizedState;
								if (r = l.element, i.isDehydrated) {
									if (i = {
											element: r,
											isDehydrated: !1,
											cache: l.cache,
											pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
											transitions: l.transitions
										}, t.updateQueue.baseState = i, t.memoizedState = i, 256 & t.flags) {
										t = Ol(e, t, r, n, a = cl(Error(o(423)), t));
										break e
									}
									if (r !== a) {
										t = Ol(e, t, r, n, a = cl(Error(o(424)), t));
										break e
									}
									for (ro = sa(t.stateNode.containerInfo.firstChild), no = t, ao = !0, oo = null, n = Xo(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
								} else {
									if (ho(), r === a) {
										t = Hl(e, t, n);
										break e
									}
									kl(e, t, r, n)
								}
								t = t.child
							}
							return t;
						case 5:
							return ii(t), null === e && so(t), r = t.type, a = t.pendingProps, i = null !== e ? e.memoizedProps : null, l = a.children, na(r, a) ? l = null : null !== i && na(r, i) && (t.flags |= 32), Cl(e, t), kl(e, t, l, n), t.child;
						case 6:
							return null === e && so(t), null;
						case 13:
							return Ml(e, t, n);
						case 4:
							return ai(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Go(t, null, r, n) : kl(e, t, r, n), t.child;
						case 11:
							return r = t.type, a = t.pendingProps, xl(e, t, r, a = t.elementType === r ? a : go(r, a), n);
						case 7:
							return kl(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return kl(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (r = t.type._context, a = t.pendingProps, i = t.memoizedProps, l = a.value, Ca(yo, r._currentValue), r._currentValue = l, null !== i)
									if (lr(i.value, l)) {
										if (i.children === a.children && !Pa.current) {
											t = Hl(e, t, n);
											break e
										}
									} else
										for (null !== (i = t.child) && (i.return = t); null !== i;) {
											var u = i.dependencies;
											if (null !== u) {
												l = i.child;
												for (var s = u.firstContext; null !== s;) {
													if (s.context === r) {
														if (1 === i.tag) {
															(s = zo(-1, n & -n)).tag = 2;
															var c = i.updateQueue;
															if (null !== c) {
																var f = (c = c.shared).pending;
																null === f ? s.next = s : (s.next = f.next, f.next = s), c.pending = s
															}
														}
														i.lanes |= n, null !== (s = i.alternate) && (s.lanes |= n), _o(i.return, n, t), u.lanes |= n;
														break
													}
													s = s.next
												}
											} else if (10 === i.tag) l = i.type === t.type ? null : i.child;
											else if (18 === i.tag) {
												if (null === (l = i.return)) throw Error(o(341));
												l.lanes |= n, null !== (u = l.alternate) && (u.lanes |= n), _o(l, n, t), l = i.sibling
											} else l = i.child;
											if (null !== l) l.return = i;
											else
												for (l = i; null !== l;) {
													if (l === t) {
														l = null;
														break
													}
													if (null !== (i = l.sibling)) {
														i.return = l.return, l = i;
														break
													}
													l = l.return
												}
											i = l
										}
								kl(e, t, a.children, n),
								t = t.child
							}
							return t;
						case 9:
							return a = t.type, r = t.pendingProps.children, Eo(t, n), r = r(a = Co(a)), t.flags |= 1, kl(e, t, r, n), t.child;
						case 14:
							return a = go(r = t.type, t.pendingProps), Sl(e, t, r, a = go(r.type, a), n);
						case 15:
							return _l(e, t, t.type, t.pendingProps, n);
						case 17:
							return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : go(r, a), Wl(e, t), t.tag = 1, La(r) ? (e = !0, Da(t)) : e = !1, Eo(t, n), Wo(t, r, a), Qo(t, r, a, n), Pl(null, t, r, !0, e, n);
						case 19:
							return $l(e, t, n);
						case 22:
							return El(e, t, n)
					}
					throw Error(o(156, t.tag))
				};
				var Zs = "function" === typeof reportError ? reportError : function(e) {
					console.error(e)
				};

				function Ks(e) {
					this._internalRoot = e
				}

				function Ys(e) {
					this._internalRoot = e
				}

				function Gs(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
				}

				function Xs(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
				}

				function Js() {}

				function ec(e, t, n, r, a) {
					var o = n._reactRootContainer;
					if (o) {
						var i = o;
						if ("function" === typeof a) {
							var l = a;
							a = function() {
								var e = Hs(i);
								l.call(e)
							}
						}
						Ws(t, i, e, a)
					} else i = function(e, t, n, r, a) {
						if (a) {
							if ("function" === typeof r) {
								var o = r;
								r = function() {
									var e = Hs(i);
									o.call(e)
								}
							}
							var i = $s(t, r, e, 0, null, !1, 0, "", Js);
							return e._reactRootContainer = i, e[ha] = i.current, Br(8 === e.nodeType ? e.parentNode : e), fs(), i
						}
						for (; a = e.lastChild;) e.removeChild(a);
						if ("function" === typeof r) {
							var l = r;
							r = function() {
								var e = Hs(u);
								l.call(e)
							}
						}
						var u = Us(e, 0, !1, null, 0, !1, 0, "", Js);
						return e._reactRootContainer = u, e[ha] = u.current, Br(8 === e.nodeType ? e.parentNode : e), fs((function() {
							Ws(t, u, n, r)
						})), u
					}(n, t, e, a, r);
					return Hs(i)
				}
				Ys.prototype.render = Ks.prototype.render = function(e) {
					var t = this._internalRoot;
					if (null === t) throw Error(o(409));
					Ws(e, t, null, null)
				}, Ys.prototype.unmount = Ks.prototype.unmount = function() {
					var e = this._internalRoot;
					if (null !== e) {
						this._internalRoot = null;
						var t = e.containerInfo;
						fs((function() {
							Ws(null, e, null, null)
						})), t[ha] = null
					}
				}, Ys.prototype.unstable_scheduleHydration = function(e) {
					if (e) {
						var t = _t();
						e = {
							blockedOn: null,
							target: e,
							priority: t
						};
						for (var n = 0; n < Rt.length && 0 !== t && t < Rt[n].priority; n++);
						Rt.splice(n, 0, e), 0 === n && Ft(e)
					}
				}, kt = function(e) {
					switch (e.tag) {
						case 3:
							var t = e.stateNode;
							if (t.current.memoizedState.isDehydrated) {
								var n = ft(t.pendingLanes);
								0 !== n && (yt(t, 1 | n), as(t, Ge()), 0 === (6 & Pu) && ($u = Ge() + 500, Ba()))
							}
							break;
						case 13:
							fs((function() {
								var t = To(e, 1);
								if (null !== t) {
									var n = ts();
									rs(t, e, 1, n)
								}
							})), qs(e, 1)
					}
				}, xt = function(e) {
					if (13 === e.tag) {
						var t = To(e, 134217728);
						if (null !== t) rs(t, e, 134217728, ts());
						qs(e, 134217728)
					}
				}, St = function(e) {
					if (13 === e.tag) {
						var t = ns(e),
							n = To(e, t);
						if (null !== n) rs(n, e, t, ts());
						qs(e, t)
					}
				}, _t = function() {
					return bt
				}, Et = function(e, t) {
					var n = bt;
					try {
						return bt = e, t()
					} finally {
						bt = n
					}
				}, xe = function(e, t, n) {
					switch (t) {
						case "input":
							if (X(e, n), t = n.name, "radio" === n.type && null != t) {
								for (n = e; n.parentNode;) n = n.parentNode;
								for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
									var r = n[t];
									if (r !== e && r.form === e.form) {
										var a = ka(r);
										if (!a) throw Error(o(90));
										q(r), X(r, a)
									}
								}
							}
							break;
						case "textarea":
							oe(e, n);
							break;
						case "select":
							null != (t = n.value) && ne(e, !!n.multiple, t, !1)
					}
				}, je = cs, Pe = fs;
				var tc = {
						usingClientEntryPoint: !1,
						Events: [ba, wa, ka, Ce, Ne, cs]
					},
					nc = {
						findFiberByHostInstance: ya,
						bundleType: 0,
						version: "18.2.0",
						rendererPackageName: "react-dom"
					},
					rc = {
						bundleType: nc.bundleType,
						version: nc.version,
						rendererPackageName: nc.rendererPackageName,
						rendererConfig: nc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: w.ReactCurrentDispatcher,
						findHostInstanceByFiber: function(e) {
							return null === (e = He(e)) ? null : e.stateNode
						},
						findFiberByHostInstance: nc.findFiberByHostInstance || function() {
							return null
						},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
					};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!ac.isDisabled && ac.supportsFiber) try {
						at = ac.inject(rc), ot = ac
					} catch (ce) {}
				}
				t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc, t.createPortal = function(e, t) {
					var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					if (!Gs(t)) throw Error(o(200));
					return function(e, t, n) {
						var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
						return {
							$$typeof: x,
							key: null == r ? null : "" + r,
							children: e,
							containerInfo: t,
							implementation: n
						}
					}(e, t, null, n)
				}, t.createRoot = function(e, t) {
					if (!Gs(e)) throw Error(o(299));
					var n = !1,
						r = "",
						a = Zs;
					return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (a = t.onRecoverableError)), t = Us(e, 1, !1, null, 0, n, 0, r, a), e[ha] = t.current, Br(8 === e.nodeType ? e.parentNode : e), new Ks(t)
				}, t.findDOMNode = function(e) {
					if (null == e) return null;
					if (1 === e.nodeType) return e;
					var t = e._reactInternals;
					if (void 0 === t) {
						if ("function" === typeof e.render) throw Error(o(188));
						throw e = Object.keys(e).join(","), Error(o(268, e))
					}
					return e = null === (e = He(t)) ? null : e.stateNode
				}, t.flushSync = function(e) {
					return fs(e)
				}, t.hydrate = function(e, t, n) {
					if (!Xs(t)) throw Error(o(200));
					return ec(null, e, t, !0, n)
				}, t.hydrateRoot = function(e, t, n) {
					if (!Gs(e)) throw Error(o(405));
					var r = null != n && n.hydratedSources || null,
						a = !1,
						i = "",
						l = Zs;
					if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (a = !0), void 0 !== n.identifierPrefix && (i = n.identifierPrefix), void 0 !== n.onRecoverableError && (l = n.onRecoverableError)), t = $s(t, null, e, 1, null != n ? n : null, a, 0, i, l), e[ha] = t.current, Br(e), r)
						for (e = 0; e < r.length; e++) a = (a = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, a] : t.mutableSourceEagerHydrationData.push(n, a);
					return new Ys(t)
				}, t.render = function(e, t, n) {
					if (!Xs(t)) throw Error(o(200));
					return ec(null, e, t, !1, n)
				}, t.unmountComponentAtNode = function(e) {
					if (!Xs(e)) throw Error(o(40));
					return !!e._reactRootContainer && (fs((function() {
						ec(null, null, e, !1, (function() {
							e._reactRootContainer = null, e[ha] = null
						}))
					})), !0)
				}, t.unstable_batchedUpdates = cs, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
					if (!Xs(n)) throw Error(o(200));
					if (null == e || void 0 === e._reactInternals) throw Error(o(38));
					return ec(e, t, n, !1, r)
				}, t.version = "18.2.0-next-9e3b772b8-20220608"
			},
			250: function(e, t, n) {
				var r = n(164);
				t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
			},
			164: function(e, t, n) {
				! function e() {
					if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
						__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
					} catch (t) {
						console.error(t)
					}
				}(), e.exports = n(463)
			},
			374: function(e, t, n) {
				var r = n(791),
					a = Symbol.for("react.element"),
					o = Symbol.for("react.fragment"),
					i = Object.prototype.hasOwnProperty,
					l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
					u = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function s(e, t, n) {
					var r, o = {},
						s = null,
						c = null;
					for (r in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (c = t.ref), t) i.call(t, r) && !u.hasOwnProperty(r) && (o[r] = t[r]);
					if (e && e.defaultProps)
						for (r in t = e.defaultProps) void 0 === o[r] && (o[r] = t[r]);
					return {
						$$typeof: a,
						type: e,
						key: s,
						ref: c,
						props: o,
						_owner: l.current
					}
				}
				t.Fragment = o, t.jsx = s, t.jsxs = s
			},
			117: function(e, t) {
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					a = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					i = Symbol.for("react.profiler"),
					l = Symbol.for("react.provider"),
					u = Symbol.for("react.context"),
					s = Symbol.for("react.forward_ref"),
					c = Symbol.for("react.suspense"),
					f = Symbol.for("react.memo"),
					d = Symbol.for("react.lazy"),
					p = Symbol.iterator;
				var h = {
						isMounted: function() {
							return !1
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {}
					},
					m = Object.assign,
					v = {};

				function g(e, t, n) {
					this.props = e, this.context = t, this.refs = v, this.updater = n || h
				}

				function y() {}

				function b(e, t, n) {
					this.props = e, this.context = t, this.refs = v, this.updater = n || h
				}
				g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
					if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
					this.updater.enqueueSetState(this, e, t, "setState")
				}, g.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate")
				}, y.prototype = g.prototype;
				var w = b.prototype = new y;
				w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0;
				var k = Array.isArray,
					x = Object.prototype.hasOwnProperty,
					S = {
						current: null
					},
					_ = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function E(e, t, r) {
					var a, o = {},
						i = null,
						l = null;
					if (null != t)
						for (a in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) x.call(t, a) && !_.hasOwnProperty(a) && (o[a] = t[a]);
					var u = arguments.length - 2;
					if (1 === u) o.children = r;
					else if (1 < u) {
						for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
						o.children = s
					}
					if (e && e.defaultProps)
						for (a in u = e.defaultProps) void 0 === o[a] && (o[a] = u[a]);
					return {
						$$typeof: n,
						type: e,
						key: i,
						ref: l,
						props: o,
						_owner: S.current
					}
				}

				function C(e) {
					return "object" === typeof e && null !== e && e.$$typeof === n
				}
				var N = /\/+/g;

				function j(e, t) {
					return "object" === typeof e && null !== e && null != e.key ? function(e) {
						var t = {
							"=": "=0",
							":": "=2"
						};
						return "$" + e.replace(/[=:]/g, (function(e) {
							return t[e]
						}))
					}("" + e.key) : t.toString(36)
				}

				function P(e, t, a, o, i) {
					var l = typeof e;
					"undefined" !== l && "boolean" !== l || (e = null);
					var u = !1;
					if (null === e) u = !0;
					else switch (l) {
						case "string":
						case "number":
							u = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case n:
								case r:
									u = !0
							}
					}
					if (u) return i = i(u = e), e = "" === o ? "." + j(u, 0) : o, k(i) ? (a = "", null != e && (a = e.replace(N, "$&/") + "/"), P(i, t, a, "", (function(e) {
						return e
					}))) : null != i && (C(i) && (i = function(e, t) {
						return {
							$$typeof: n,
							type: e.type,
							key: t,
							ref: e.ref,
							props: e.props,
							_owner: e._owner
						}
					}(i, a + (!i.key || u && u.key === i.key ? "" : ("" + i.key).replace(N, "$&/") + "/") + e)), t.push(i)), 1;
					if (u = 0, o = "" === o ? "." : o + ":", k(e))
						for (var s = 0; s < e.length; s++) {
							var c = o + j(l = e[s], s);
							u += P(l, t, a, c, i)
						} else if (c = function(e) {
								return null === e || "object" !== typeof e ? null : "function" === typeof(e = p && e[p] || e["@@iterator"]) ? e : null
							}(e), "function" === typeof c)
							for (e = c.call(e), s = 0; !(l = e.next()).done;) u += P(l = l.value, t, a, c = o + j(l, s++), i);
						else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
					return u
				}

				function T(e, t, n) {
					if (null == e) return e;
					var r = [],
						a = 0;
					return P(e, r, "", "", (function(e) {
						return t.call(n, e, a++)
					})), r
				}

				function O(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then((function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
						}), (function(t) {
							0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
						})), -1 === e._status && (e._status = 0, e._result = t)
					}
					if (1 === e._status) return e._result.default;
					throw e._result
				}
				var L = {
						current: null
					},
					R = {
						transition: null
					},
					z = {
						ReactCurrentDispatcher: L,
						ReactCurrentBatchConfig: R,
						ReactCurrentOwner: S
					};
				t.Children = {
					map: T,
					forEach: function(e, t, n) {
						T(e, (function() {
							t.apply(this, arguments)
						}), n)
					},
					count: function(e) {
						var t = 0;
						return T(e, (function() {
							t++
						})), t
					},
					toArray: function(e) {
						return T(e, (function(e) {
							return e
						})) || []
					},
					only: function(e) {
						if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
						return e
					}
				}, t.Component = g, t.Fragment = a, t.Profiler = i, t.PureComponent = b, t.StrictMode = o, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, t.cloneElement = function(e, t, r) {
					if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
					var a = m({}, e.props),
						o = e.key,
						i = e.ref,
						l = e._owner;
					if (null != t) {
						if (void 0 !== t.ref && (i = t.ref, l = S.current), void 0 !== t.key && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
						for (s in t) x.call(t, s) && !_.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s])
					}
					var s = arguments.length - 2;
					if (1 === s) a.children = r;
					else if (1 < s) {
						u = Array(s);
						for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
						a.children = u
					}
					return {
						$$typeof: n,
						type: e.type,
						key: o,
						ref: i,
						props: a,
						_owner: l
					}
				}, t.createContext = function(e) {
					return (e = {
						$$typeof: u,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null,
						_defaultValue: null,
						_globalName: null
					}).Provider = {
						$$typeof: l,
						_context: e
					}, e.Consumer = e
				}, t.createElement = E, t.createFactory = function(e) {
					var t = E.bind(null, e);
					return t.type = e, t
				}, t.createRef = function() {
					return {
						current: null
					}
				}, t.forwardRef = function(e) {
					return {
						$$typeof: s,
						render: e
					}
				}, t.isValidElement = C, t.lazy = function(e) {
					return {
						$$typeof: d,
						_payload: {
							_status: -1,
							_result: e
						},
						_init: O
					}
				}, t.memo = function(e, t) {
					return {
						$$typeof: f,
						type: e,
						compare: void 0 === t ? null : t
					}
				}, t.startTransition = function(e) {
					var t = R.transition;
					R.transition = {};
					try {
						e()
					} finally {
						R.transition = t
					}
				}, t.unstable_act = function() {
					throw Error("act(...) is not supported in production builds of React.")
				}, t.useCallback = function(e, t) {
					return L.current.useCallback(e, t)
				}, t.useContext = function(e) {
					return L.current.useContext(e)
				}, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
					return L.current.useDeferredValue(e)
				}, t.useEffect = function(e, t) {
					return L.current.useEffect(e, t)
				}, t.useId = function() {
					return L.current.useId()
				}, t.useImperativeHandle = function(e, t, n) {
					return L.current.useImperativeHandle(e, t, n)
				}, t.useInsertionEffect = function(e, t) {
					return L.current.useInsertionEffect(e, t)
				}, t.useLayoutEffect = function(e, t) {
					return L.current.useLayoutEffect(e, t)
				}, t.useMemo = function(e, t) {
					return L.current.useMemo(e, t)
				}, t.useReducer = function(e, t, n) {
					return L.current.useReducer(e, t, n)
				}, t.useRef = function(e) {
					return L.current.useRef(e)
				}, t.useState = function(e) {
					return L.current.useState(e)
				}, t.useSyncExternalStore = function(e, t, n) {
					return L.current.useSyncExternalStore(e, t, n)
				}, t.useTransition = function() {
					return L.current.useTransition()
				}, t.version = "18.2.0"
			},
			791: function(e, t, n) {
				e.exports = n(117)
			},
			184: function(e, t, n) {
				e.exports = n(374)
			},
			813: function(e, t) {
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n;) {
						var r = n - 1 >>> 1,
							a = e[r];
						if (!(0 < o(a, t))) break e;
						e[r] = t, e[n] = a, n = r
					}
				}

				function r(e) {
					return 0 === e.length ? null : e[0]
				}

				function a(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
							var l = 2 * (r + 1) - 1,
								u = e[l],
								s = l + 1,
								c = e[s];
							if (0 > o(u, n)) s < a && 0 > o(c, u) ? (e[r] = c, e[s] = n, r = s) : (e[r] = u, e[l] = n, r = l);
							else {
								if (!(s < a && 0 > o(c, n))) break e;
								e[r] = c, e[s] = n, r = s
							}
						}
					}
					return t
				}

				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id
				}
				if ("object" === typeof performance && "function" === typeof performance.now) {
					var i = performance;
					t.unstable_now = function() {
						return i.now()
					}
				} else {
					var l = Date,
						u = l.now();
					t.unstable_now = function() {
						return l.now() - u
					}
				}
				var s = [],
					c = [],
					f = 1,
					d = null,
					p = 3,
					h = !1,
					m = !1,
					v = !1,
					g = "function" === typeof setTimeout ? setTimeout : null,
					y = "function" === typeof clearTimeout ? clearTimeout : null,
					b = "undefined" !== typeof setImmediate ? setImmediate : null;

				function w(e) {
					for (var t = r(c); null !== t;) {
						if (null === t.callback) a(c);
						else {
							if (!(t.startTime <= e)) break;
							a(c), t.sortIndex = t.expirationTime, n(s, t)
						}
						t = r(c)
					}
				}

				function k(e) {
					if (v = !1, w(e), !m)
						if (null !== r(s)) m = !0, R(x);
						else {
							var t = r(c);
							null !== t && z(k, t.startTime - e)
						}
				}

				function x(e, n) {
					m = !1, v && (v = !1, y(C), C = -1), h = !0;
					var o = p;
					try {
						for (w(n), d = r(s); null !== d && (!(d.expirationTime > n) || e && !P());) {
							var i = d.callback;
							if ("function" === typeof i) {
								d.callback = null, p = d.priorityLevel;
								var l = i(d.expirationTime <= n);
								n = t.unstable_now(), "function" === typeof l ? d.callback = l : d === r(s) && a(s), w(n)
							} else a(s);
							d = r(s)
						}
						if (null !== d) var u = !0;
						else {
							var f = r(c);
							null !== f && z(k, f.startTime - n), u = !1
						}
						return u
					} finally {
						d = null, p = o, h = !1
					}
				}
				"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var S, _ = !1,
					E = null,
					C = -1,
					N = 5,
					j = -1;

				function P() {
					return !(t.unstable_now() - j < N)
				}

				function T() {
					if (null !== E) {
						var e = t.unstable_now();
						j = e;
						var n = !0;
						try {
							n = E(!0, e)
						} finally {
							n ? S() : (_ = !1, E = null)
						}
					} else _ = !1
				}
				if ("function" === typeof b) S = function() {
					b(T)
				};
				else if ("undefined" !== typeof MessageChannel) {
					var O = new MessageChannel,
						L = O.port2;
					O.port1.onmessage = T, S = function() {
						L.postMessage(null)
					}
				} else S = function() {
					g(T, 0)
				};

				function R(e) {
					E = e, _ || (_ = !0, S())
				}

				function z(e, n) {
					C = g((function() {
						e(t.unstable_now())
					}), n)
				}
				t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
					e.callback = null
				}, t.unstable_continueExecution = function() {
					m || h || (m = !0, R(x))
				}, t.unstable_forceFrameRate = function(e) {
					0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < e ? Math.floor(1e3 / e) : 5
				}, t.unstable_getCurrentPriorityLevel = function() {
					return p
				}, t.unstable_getFirstCallbackNode = function() {
					return r(s)
				}, t.unstable_next = function(e) {
					switch (p) {
						case 1:
						case 2:
						case 3:
							var t = 3;
							break;
						default:
							t = p
					}
					var n = p;
					p = t;
					try {
						return e()
					} finally {
						p = n
					}
				}, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							break;
						default:
							e = 3
					}
					var n = p;
					p = e;
					try {
						return t()
					} finally {
						p = n
					}
				}, t.unstable_scheduleCallback = function(e, a, o) {
					var i = t.unstable_now();
					switch ("object" === typeof o && null !== o ? o = "number" === typeof(o = o.delay) && 0 < o ? i + o : i : o = i, e) {
						case 1:
							var l = -1;
							break;
						case 2:
							l = 250;
							break;
						case 5:
							l = 1073741823;
							break;
						case 4:
							l = 1e4;
							break;
						default:
							l = 5e3
					}
					return e = {
						id: f++,
						callback: a,
						priorityLevel: e,
						startTime: o,
						expirationTime: l = o + l,
						sortIndex: -1
					}, o > i ? (e.sortIndex = o, n(c, e), null === r(s) && e === r(c) && (v ? (y(C), C = -1) : v = !0, z(k, o - i))) : (e.sortIndex = l, n(s, e), m || h || (m = !0, R(x))), e
				}, t.unstable_shouldYield = P, t.unstable_wrapCallback = function(e) {
					var t = p;
					return function() {
						var n = p;
						p = t;
						try {
							return e.apply(this, arguments)
						} finally {
							p = n
						}
					}
				}
			},
			296: function(e, t, n) {
				e.exports = n(813)
			},
			598: function(e, t, n) {
				e.exports = n.p + "src/media/flappy.png"
			},
			105: function(e, t, n) {
				e.exports = n.p + "src/media/dashboard.png"
			},
			668: function(e, t, n) {
				e.exports = n.p + "src/media/quiz.png"
			},
			821: function(e, t, n) {
				e.exports = n.p + "src/media/landing.png"
			}
		},
		t = {};

	function n(r) {
		var a = t[r];
		if (void 0 !== a) return a.exports;
		var o = t[r] = {
			exports: {}
		};
		return e[r](o, o.exports, n), o.exports
	}
	n.d = function(e, t) {
			for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
				enumerable: !0,
				get: t[r]
			})
		}, n.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, n.p = "./",
		function() {
			var e, t = n(791),
				r = n(250);

			function a(e) {
				if (Array.isArray(e)) return e
			}

			function o(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
				return r
			}

			function i(e, t) {
				if (e) {
					if ("string" === typeof e) return o(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
				}
			}

			function l() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}

			function u(e, t) {
				return a(e) || function(e, t) {
					var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
					if (null != n) {
						var r, a, o, i, l = [],
							u = !0,
							s = !1;
						try {
							if (o = (n = n.call(e)).next, 0 === t) {
								if (Object(n) !== n) return;
								u = !1
							} else
								for (; !(u = (r = o.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
						} catch (c) {
							s = !0, a = c
						} finally {
							try {
								if (!u && null != n.return && (i = n.return(), Object(i) !== i)) return
							} finally {
								if (s) throw a
							}
						}
						return l
					}
				}(e, t) || i(e, t) || l()
			}

			function s(e) {
				if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}

			function c(e) {
				return function(e) {
					if (Array.isArray(e)) return o(e)
				}(e) || s(e) || i(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function f(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function d(e) {
				return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				}, d(e)
			}

			function p(e) {
				var t = function(e, t) {
					if ("object" !== d(e) || null === e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" !== d(r)) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.")
					}
					return ("string" === t ? String : Number)(e)
				}(e, "string");
				return "symbol" === d(t) ? t : String(t)
			}

			function h(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, p(r.key), r)
				}
			}

			function m(e, t, n) {
				return t && h(e.prototype, t), n && h(e, n), Object.defineProperty(e, "prototype", {
					writable: !1
				}), e
			}

			function v(e, t) {
				return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
					return e.__proto__ = t, e
				}, v(e, t)
			}

			function g(e, t) {
				if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						writable: !0,
						configurable: !0
					}
				}), Object.defineProperty(e, "prototype", {
					writable: !1
				}), t && v(e, t)
			}

			function y(e) {
				return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				}, y(e)
			}

			function b() {
				if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" === typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function w(e, t) {
				if (t && ("object" === d(t) || "function" === typeof t)) return t;
				if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
				return function(e) {
					if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return e
				}(e)
			}

			function k(e) {
				var t = b();
				return function() {
					var n, r = y(e);
					if (t) {
						var a = y(this).constructor;
						n = Reflect.construct(r, arguments, a)
					} else n = r.apply(this, arguments);
					return w(this, n)
				}
			}

			function x(e, t, n) {
				return x = b() ? Reflect.construct.bind() : function(e, t, n) {
					var r = [null];
					r.push.apply(r, t);
					var a = new(Function.bind.apply(e, r));
					return n && v(a, n.prototype), a
				}, x.apply(null, arguments)
			}

			function S(e) {
				var t = "function" === typeof Map ? new Map : void 0;
				return S = function(e) {
					if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
					var n;
					if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
					if ("undefined" !== typeof t) {
						if (t.has(e)) return t.get(e);
						t.set(e, r)
					}

					function r() {
						return x(e, arguments, y(this).constructor)
					}
					return r.prototype = Object.create(e.prototype, {
						constructor: {
							value: r,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), v(r, e)
				}, S(e)
			}

			function _(e, t) {
				var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = i(e)) || t && e && "number" === typeof e.length) {
						n && (e = n);
						var r = 0,
							a = function() {};
						return {
							s: a,
							n: function() {
								return r >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[r++]
								}
							},
							e: function(e) {
								throw e
							},
							f: a
						}
					}
					throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var o, l = !0,
					u = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return l = e.done, e
					},
					e: function(e) {
						u = !0, o = e
					},
					f: function() {
						try {
							l || null == n.return || n.return()
						} finally {
							if (u) throw o
						}
					}
				}
			}

			function E() {
				return E = Object.assign ? Object.assign.bind() : function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}, E.apply(this, arguments)
			}! function(e) {
				e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
			}(e || (e = {}));
			var C, N = "popstate";

			function j(e, t) {
				if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
			}

			function P(e, t) {
				if (!e) {
					"undefined" !== typeof console && console.warn(t);
					try {
						throw new Error(t)
					} catch (n) {}
				}
			}

			function T(e, t) {
				return {
					usr: e.state,
					key: e.key,
					idx: t
				}
			}

			function O(e, t, n, r) {
				return void 0 === n && (n = null), E({
					pathname: "string" === typeof e ? e : e.pathname,
					search: "",
					hash: ""
				}, "string" === typeof t ? R(t) : t, {
					state: n,
					key: t && t.key || r || Math.random().toString(36).substr(2, 8)
				})
			}

			function L(e) {
				var t = e.pathname,
					n = void 0 === t ? "/" : t,
					r = e.search,
					a = void 0 === r ? "" : r,
					o = e.hash,
					i = void 0 === o ? "" : o;
				return a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a), i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i), n
			}

			function R(e) {
				var t = {};
				if (e) {
					var n = e.indexOf("#");
					n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
					var r = e.indexOf("?");
					r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
				}
				return t
			}

			function z(t, n, r, a) {
				void 0 === a && (a = {});
				var o = a,
					i = o.window,
					l = void 0 === i ? document.defaultView : i,
					u = o.v5Compat,
					s = void 0 !== u && u,
					c = l.history,
					f = e.Pop,
					d = null,
					p = h();

				function h() {
					return (c.state || {
						idx: null
					}).idx
				}

				function m() {
					f = e.Pop;
					var t = h(),
						n = null == t ? null : t - p;
					p = t, d && d({
						action: f,
						location: g.location,
						delta: n
					})
				}

				function v(e) {
					var t = "null" !== l.location.origin ? l.location.origin : l.location.href,
						n = "string" === typeof e ? e : L(e);
					return j(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t)
				}
				null == p && (p = 0, c.replaceState(E({}, c.state, {
					idx: p
				}), ""));
				var g = {
					get action() {
						return f
					},
					get location() {
						return t(l, c)
					},
					listen: function(e) {
						if (d) throw new Error("A history only accepts one active listener");
						return l.addEventListener(N, m), d = e,
							function() {
								l.removeEventListener(N, m), d = null
							}
					},
					createHref: function(e) {
						return n(l, e)
					},
					createURL: v,
					encodeLocation: function(e) {
						var t = v(e);
						return {
							pathname: t.pathname,
							search: t.search,
							hash: t.hash
						}
					},
					push: function(t, n) {
						f = e.Push;
						var a = O(g.location, t, n);
						r && r(a, t);
						var o = T(a, p = h() + 1),
							i = g.createHref(a);
						try {
							c.pushState(o, "", i)
						} catch (u) {
							l.location.assign(i)
						}
						s && d && d({
							action: f,
							location: g.location,
							delta: 1
						})
					},
					replace: function(t, n) {
						f = e.Replace;
						var a = O(g.location, t, n);
						r && r(a, t);
						var o = T(a, p = h()),
							i = g.createHref(a);
						c.replaceState(o, "", i), s && d && d({
							action: f,
							location: g.location,
							delta: 0
						})
					},
					go: function(e) {
						return c.go(e)
					}
				};
				return g
			}! function(e) {
				e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
			}(C || (C = {}));
			new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

			function I(e, t, n) {
				void 0 === n && (n = "/");
				var r = K(("string" === typeof t ? R(t) : t).pathname || "/", n);
				if (null == r) return null;
				var a = D(e);
				! function(e) {
					e.sort((function(e, t) {
						return e.score !== t.score ? t.score - e.score : function(e, t) {
							var n = e.length === t.length && e.slice(0, -1).every((function(e, n) {
								return e === t[n]
							}));
							return n ? e[e.length - 1] - t[t.length - 1] : 0
						}(e.routesMeta.map((function(e) {
							return e.childrenIndex
						})), t.routesMeta.map((function(e) {
							return e.childrenIndex
						})))
					}))
				}(a);
				for (var o = null, i = 0; null == o && i < a.length; ++i) o = Q(a[i], Z(r));
				return o
			}

			function D(e, t, n, r) {
				void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
				var a = function(e, a, o) {
					var i = {
						relativePath: void 0 === o ? e.path || "" : o,
						caseSensitive: !0 === e.caseSensitive,
						childrenIndex: a,
						route: e
					};
					i.relativePath.startsWith("/") && (j(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length));
					var l = J([r, i.relativePath]),
						u = n.concat(i);
					e.children && e.children.length > 0 && (j(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".'), D(e.children, t, u, l)), (null != e.path || e.index) && t.push({
						path: l,
						score: H(l, e.index),
						routesMeta: u
					})
				};
				return e.forEach((function(e, t) {
					var n;
					if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
						var r, o = _(F(e.path));
						try {
							for (o.s(); !(r = o.n()).done;) {
								var i = r.value;
								a(e, t, i)
							}
						} catch (l) {
							o.e(l)
						} finally {
							o.f()
						}
					} else a(e, t)
				})), t
			}

			function F(e) {
				var t = e.split("/");
				if (0 === t.length) return [];
				var n, r = a(n = t) || s(n) || i(n) || l(),
					o = r[0],
					u = r.slice(1),
					f = o.endsWith("?"),
					d = o.replace(/\?$/, "");
				if (0 === u.length) return f ? [d, ""] : [d];
				var p = F(u.join("/")),
					h = [];
				return h.push.apply(h, c(p.map((function(e) {
					return "" === e ? d : [d, e].join("/")
				})))), f && h.push.apply(h, c(p)), h.map((function(t) {
					return e.startsWith("/") && "" === t ? "/" : t
				}))
			}
			var M = /^:\w+$/,
				A = 3,
				V = 2,
				U = 1,
				B = 10,
				$ = -2,
				W = function(e) {
					return "*" === e
				};

			function H(e, t) {
				var n = e.split("/"),
					r = n.length;
				return n.some(W) && (r += $), t && (r += V), n.filter((function(e) {
					return !W(e)
				})).reduce((function(e, t) {
					return e + (M.test(t) ? A : "" === t ? U : B)
				}), r)
			}

			function Q(e, t) {
				for (var n = e.routesMeta, r = {}, a = "/", o = [], i = 0; i < n.length; ++i) {
					var l = n[i],
						u = i === n.length - 1,
						s = "/" === a ? t : t.slice(a.length) || "/",
						c = q({
							path: l.relativePath,
							caseSensitive: l.caseSensitive,
							end: u
						}, s);
					if (!c) return null;
					Object.assign(r, c.params);
					var f = l.route;
					o.push({
						params: r,
						pathname: J([a, c.pathname]),
						pathnameBase: ee(J([a, c.pathnameBase])),
						route: f
					}), "/" !== c.pathnameBase && (a = J([a, c.pathnameBase]))
				}
				return o
			}

			function q(e, t) {
				"string" === typeof e && (e = {
					path: e,
					caseSensitive: !1,
					end: !0
				});
				var n = function(e, t, n) {
						void 0 === t && (t = !1);
						void 0 === n && (n = !0);
						P("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
						var r = [],
							a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (function(e, t) {
								return r.push(t), "/([^\\/]+)"
							}));
						e.endsWith("*") ? (r.push("*"), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
						var o = new RegExp(a, t ? void 0 : "i");
						return [o, r]
					}(e.path, e.caseSensitive, e.end),
					r = u(n, 2),
					a = r[0],
					o = r[1],
					i = t.match(a);
				if (!i) return null;
				var l = i[0],
					s = l.replace(/(.)\/+$/, "$1"),
					c = i.slice(1);
				return {
					params: o.reduce((function(e, t, n) {
						if ("*" === t) {
							var r = c[n] || "";
							s = l.slice(0, l.length - r.length).replace(/(.)\/+$/, "$1")
						}
						return e[t] = function(e, t) {
							try {
								return decodeURIComponent(e)
							} catch (n) {
								return P(!1, 'The value for the URL param "' + t + '" will not be decoded because the string "' + e + '" is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
							}
						}(c[n] || "", t), e
					}), {}),
					pathname: l,
					pathnameBase: s,
					pattern: e
				}
			}

			function Z(e) {
				try {
					return decodeURI(e)
				} catch (t) {
					return P(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + t + ")."), e
				}
			}

			function K(e, t) {
				if ("/" === t) return e;
				if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
				var n = t.endsWith("/") ? t.length - 1 : t.length,
					r = e.charAt(n);
				return r && "/" !== r ? null : e.slice(n) || "/"
			}

			function Y(e, t, n, r) {
				return "Cannot include a '" + e + "' character in a manually specified `to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + n + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
			}

			function G(e) {
				return e.filter((function(e, t) {
					return 0 === t || e.route.path && e.route.path.length > 0
				}))
			}

			function X(e, t, n, r) {
				var a;
				void 0 === r && (r = !1), "string" === typeof e ? a = R(e) : (j(!(a = E({}, e)).pathname || !a.pathname.includes("?"), Y("?", "pathname", "search", a)), j(!a.pathname || !a.pathname.includes("#"), Y("#", "pathname", "hash", a)), j(!a.search || !a.search.includes("#"), Y("#", "search", "hash", a)));
				var o, i = "" === e || "" === a.pathname,
					l = i ? "/" : a.pathname;
				if (r || null == l) o = n;
				else {
					var u = t.length - 1;
					if (l.startsWith("..")) {
						for (var s = l.split("/");
							".." === s[0];) s.shift(), u -= 1;
						a.pathname = s.join("/")
					}
					o = u >= 0 ? t[u] : "/"
				}
				var c = function(e, t) {
						void 0 === t && (t = "/");
						var n = "string" === typeof e ? R(e) : e,
							r = n.pathname,
							a = n.search,
							o = void 0 === a ? "" : a,
							i = n.hash,
							l = void 0 === i ? "" : i,
							u = r ? r.startsWith("/") ? r : function(e, t) {
								var n = t.replace(/\/+$/, "").split("/");
								return e.split("/").forEach((function(e) {
									".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
								})), n.length > 1 ? n.join("/") : "/"
							}(r, t) : t;
						return {
							pathname: u,
							search: te(o),
							hash: ne(l)
						}
					}(a, o),
					f = l && "/" !== l && l.endsWith("/"),
					d = (i || "." === l) && n.endsWith("/");
				return c.pathname.endsWith("/") || !f && !d || (c.pathname += "/"), c
			}
			var J = function(e) {
					return e.join("/").replace(/\/\/+/g, "/")
				},
				ee = function(e) {
					return e.replace(/\/+$/, "").replace(/^\/*/, "/")
				},
				te = function(e) {
					return e && "?" !== e ? e.startsWith("?") ? e : "?" + e : ""
				},
				ne = function(e) {
					return e && "#" !== e ? e.startsWith("#") ? e : "#" + e : ""
				},
				re = function(e) {
					g(n, e);
					var t = k(n);

					function n() {
						return f(this, n), t.apply(this, arguments)
					}
					return m(n)
				}(S(Error));

			function ae(e) {
				return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
			}
			var oe = ["post", "put", "patch", "delete"],
				ie = (new Set(oe), ["get"].concat(oe));
			new Set(ie), new Set([301, 302, 303, 307, 308]), new Set([307, 308]), "undefined" !== typeof window && "undefined" !== typeof window.document && window.document.createElement;
			Symbol("deferred");

			function le() {
				return le = Object.assign ? Object.assign.bind() : function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}, le.apply(this, arguments)
			}
			var ue = t.createContext(null);
			var se = t.createContext(null);
			var ce = t.createContext(null);
			var fe = t.createContext(null);
			var de = t.createContext(null);
			var pe = t.createContext({
				outlet: null,
				matches: [],
				isDataRoute: !1
			});
			var he = t.createContext(null);

			function me() {
				return null != t.useContext(de)
			}

			function ve() {
				return me() || j(!1), t.useContext(de).location
			}

			function ge(e) {
				t.useContext(fe).src || t.useLayoutEffect(e)
			}

			function ye() {
				return t.useContext(pe).isDataRoute ? function() {
					var e = je(xe.UseNavigateStable).router,
						n = Te(Se.UseNavigateStable),
						r = t.useRef(!1);
					return ge((function() {
						r.current = !0
					})), t.useCallback((function(t, a) {
						void 0 === a && (a = {}), r.current && ("number" === typeof t ? e.navigate(t) : e.navigate(t, le({
							fromRouteId: n
						}, a)))
					}), [e, n])
				}() : function() {
					me() || j(!1);
					var e = t.useContext(fe),
						n = e.basename,
						r = e.navigator,
						a = t.useContext(pe).matches,
						o = ve().pathname,
						i = JSON.stringify(G(a).map((function(e) {
							return e.pathnameBase
						}))),
						l = t.useRef(!1);
					return ge((function() {
						l.current = !0
					})), t.useCallback((function(e, t) {
						if (void 0 === t && (t = {}), l.current)
							if ("number" !== typeof e) {
								var a = X(e, JSON.parse(i), o, "path" === t.relative);
								"/" !== n && (a.pathname = "/" === a.pathname ? n : J([n, a.pathname])), (t.replace ? r.replace : r.push)(a, t.state, t)
							} else r.go(e)
					}), [n, r, i, o])
				}()
			}

			function be(e, n) {
				var r = (void 0 === n ? {} : n).relative,
					a = t.useContext(pe).matches,
					o = ve().pathname,
					i = JSON.stringify(G(a).map((function(e) {
						return e.pathnameBase
					})));
				return t.useMemo((function() {
					return X(e, JSON.parse(i), o, "path" === r)
				}), [e, i, o, r])
			}

			function we(n, r, a) {
				me() || j(!1);
				var o, i = t.useContext(fe).navigator,
					l = t.useContext(pe).matches,
					u = l[l.length - 1],
					s = u ? u.params : {},
					c = (u && u.pathname, u ? u.pathnameBase : "/"),
					f = (u && u.route, ve());
				if (r) {
					var d, p = "string" === typeof r ? R(r) : r;
					"/" === c || (null == (d = p.pathname) ? void 0 : d.startsWith(c)) || j(!1), o = p
				} else o = f;
				var h = o.pathname || "/",
					m = I(n, {
						pathname: "/" === c ? h : h.slice(c.length) || "/"
					});
				var v = Ne(m && m.map((function(e) {
					return Object.assign({}, e, {
						params: Object.assign({}, s, e.params),
						pathname: J([c, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
						pathnameBase: "/" === e.pathnameBase ? c : J([c, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
					})
				})), l, a);
				return r && v ? t.createElement(de.Provider, {
					value: {
						location: le({
							pathname: "/",
							search: "",
							hash: "",
							state: null,
							key: "default"
						}, o),
						navigationType: e.Pop
					}
				}, v) : v
			}

			function ke() {
				var e = function() {
						var e, n = t.useContext(he),
							r = Pe(Se.UseRouteError),
							a = Te(Se.UseRouteError);
						if (n) return n;
						return null == (e = r.errors) ? void 0 : e[a]
					}(),
					n = ae(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
					r = e instanceof Error ? e.stack : null,
					a = "rgba(200,200,200, 0.5)",
					o = {
						padding: "0.5rem",
						backgroundColor: a
					};
				return t.createElement(t.Fragment, null, t.createElement("h2", null, "Unexpected Application Error!"), t.createElement("h3", {
					style: {
						fontStyle: "italic"
					}
				}, n), r ? t.createElement("pre", {
					style: o
				}, r) : null, null)
			}
			var xe, Se, _e = t.createElement(ke, null),
				Ee = function(e) {
					g(r, e);
					var n = k(r);

					function r(e) {
						var t;
						return f(this, r), (t = n.call(this, e)).state = {
							location: e.location,
							revalidation: e.revalidation,
							error: e.error
						}, t
					}
					return m(r, [{
						key: "componentDidCatch",
						value: function(e, t) {
							console.error("React Router caught the following error during render", e, t)
						}
					}, {
						key: "render",
						value: function() {
							return this.state.error ? t.createElement(pe.Provider, {
								value: this.props.routeContext
							}, t.createElement(he.Provider, {
								value: this.state.error,
								children: this.props.component
							})) : this.props.children
						}
					}], [{
						key: "getDerivedStateFromError",
						value: function(e) {
							return {
								error: e
							}
						}
					}, {
						key: "getDerivedStateFromProps",
						value: function(e, t) {
							return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
								error: e.error,
								location: e.location,
								revalidation: e.revalidation
							} : {
								error: e.error || t.error,
								location: t.location,
								revalidation: e.revalidation || t.revalidation
							}
						}
					}]), r
				}(t.Component);

			function Ce(e) {
				var n = e.routeContext,
					r = e.match,
					a = e.children,
					o = t.useContext(ue);
				return o && o.src && o.srcContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.srcContext._deepestRenderedBoundaryId = r.route.id), t.createElement(pe.Provider, {
					value: n
				}, a)
			}

			function Ne(e, n, r) {
				var a;
				if (void 0 === n && (n = []), void 0 === r && (r = null), null == e) {
					var o;
					if (null == (o = r) || !o.errors) return null;
					e = r.matches
				}
				var i = e,
					l = null == (a = r) ? void 0 : a.errors;
				if (null != l) {
					var u = i.findIndex((function(e) {
						return e.route.id && (null == l ? void 0 : l[e.route.id])
					}));
					u >= 0 || j(!1), i = i.slice(0, Math.min(i.length, u + 1))
				}
				return i.reduceRight((function(e, a, o) {
					var u = a.route.id ? null == l ? void 0 : l[a.route.id] : null,
						s = null;
					r && (s = a.route.errorElement || _e);
					var c = n.concat(i.slice(0, o + 1)),
						f = function() {
							var n;
							return n = u ? s : a.route.Component ? t.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, t.createElement(Ce, {
								match: a,
								routeContext: {
									outlet: e,
									matches: c,
									isDataRoute: null != r
								},
								children: n
							})
						};
					return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === o) ? t.createElement(Ee, {
						location: r.location,
						revalidation: r.revalidation,
						component: s,
						error: u,
						children: f(),
						routeContext: {
							outlet: null,
							matches: c,
							isDataRoute: !0
						}
					}) : f()
				}), null)
			}

			function je(e) {
				var n = t.useContext(ue);
				return n || j(!1), n
			}

			function Pe(e) {
				var n = t.useContext(se);
				return n || j(!1), n
			}

			function Te(e) {
				var n = function(e) {
						var n = t.useContext(pe);
						return n || j(!1), n
					}(),
					r = n.matches[n.matches.length - 1];
				return r.route.id || j(!1), r.route.id
			}! function(e) {
				e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate"
			}(xe || (xe = {})),
			function(e) {
				e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId"
			}(Se || (Se = {}));
			var Oe;

			function Le(e) {
				j(!1)
			}

			function Re(n) {
				var r = n.basename,
					a = void 0 === r ? "/" : r,
					o = n.children,
					i = void 0 === o ? null : o,
					l = n.location,
					u = n.navigationType,
					s = void 0 === u ? e.Pop : u,
					c = n.navigator,
					f = n.src,
					d = void 0 !== f && f;
				me() && j(!1);
				var p = a.replace(/^\/*/, "/"),
					h = t.useMemo((function() {
						return {
							basename: p,
							navigator: c,
							src: d
						}
					}), [p, c, d]);
				"string" === typeof l && (l = R(l));
				var m = l,
					v = m.pathname,
					g = void 0 === v ? "/" : v,
					y = m.search,
					b = void 0 === y ? "" : y,
					w = m.hash,
					k = void 0 === w ? "" : w,
					x = m.state,
					S = void 0 === x ? null : x,
					_ = m.key,
					E = void 0 === _ ? "default" : _,
					C = t.useMemo((function() {
						var e = K(g, p);
						return null == e ? null : {
							location: {
								pathname: e,
								search: b,
								hash: k,
								state: S,
								key: E
							},
							navigationType: s
						}
					}), [p, g, b, k, S, E, s]);
				return null == C ? null : t.createElement(fe.Provider, {
					value: h
				}, t.createElement(de.Provider, {
					children: i,
					value: C
				}))
			}

			function ze(e) {
				var t = e.children,
					n = e.location;
				return function(e, t) {
					return we(e, t)
				}(De(t), n)
			}! function(e) {
				e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error"
			}(Oe || (Oe = {}));
			var Ie = new Promise((function() {}));
			t.Component;

			function De(e, n) {
				void 0 === n && (n = []);
				var r = [];
				return t.Children.forEach(e, (function(e, a) {
					if (t.isValidElement(e)) {
						var o = [].concat(c(n), [a]);
						if (e.type !== t.Fragment) {
							e.type !== Le && j(!1), e.props.index && e.props.children && j(!1);
							var i = {
								id: e.props.id || o.join("-"),
								caseSensitive: e.props.caseSensitive,
								element: e.props.element,
								Component: e.props.Component,
								index: e.props.index,
								path: e.props.path,
								loader: e.props.loader,
								action: e.props.action,
								errorElement: e.props.errorElement,
								ErrorBoundary: e.props.ErrorBoundary,
								hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
								shouldRevalidate: e.props.shouldRevalidate,
								handle: e.props.handle,
								lazy: e.props.lazy
							};
							e.props.children && (i.children = De(e.props.children, o)), r.push(i)
						} else r.push.apply(r, De(e.props.children, o))
					}
				})), r
			}

			function Fe() {
				return Fe = Object.assign ? Object.assign.bind() : function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}, Fe.apply(this, arguments)
			}

			function Me(e, t) {
				if (null == e) return {};
				var n, r, a = {},
					o = Object.keys(e);
				for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
				return a
			}
			var Ae = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"],
				Ve = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];

			function Ue(e) {
				var n, r = e.basename,
					a = e.children,
					o = e.window,
					i = t.useRef();
				null == i.current && (i.current = (void 0 === (n = {
					window: o,
					v5Compat: !0
				}) && (n = {}), z((function(e, t) {
					var n = e.location;
					return O("", {
						pathname: n.pathname,
						search: n.search,
						hash: n.hash
					}, t.state && t.state.usr || null, t.state && t.state.key || "default")
				}), (function(e, t) {
					return "string" === typeof t ? t : L(t)
				}), null, n)));
				var l = i.current,
					s = u(t.useState({
						action: l.action,
						location: l.location
					}), 2),
					c = s[0],
					f = s[1];
				return t.useLayoutEffect((function() {
					return l.listen(f)
				}), [l]), t.createElement(Re, {
					basename: r,
					children: a,
					location: c.location,
					navigationType: c.action,
					navigator: l
				})
			}
			var Be = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
				$e = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
				We = t.forwardRef((function(e, n) {
					var r, a = e.onClick,
						o = e.relative,
						i = e.reloadDocument,
						l = e.replace,
						u = e.state,
						s = e.target,
						c = e.to,
						f = e.preventScrollReset,
						d = Me(e, Ae),
						p = t.useContext(fe).basename,
						h = !1;
					if ("string" === typeof c && $e.test(c) && (r = c, Be)) try {
						var m = new URL(window.location.href),
							v = c.startsWith("//") ? new URL(m.protocol + c) : new URL(c),
							g = K(v.pathname, p);
						v.origin === m.origin && null != g ? c = g + v.search + v.hash : h = !0
					} catch (w) {}
					var y = function(e, n) {
							var r = (void 0 === n ? {} : n).relative;
							me() || j(!1);
							var a = t.useContext(fe),
								o = a.basename,
								i = a.navigator,
								l = be(e, {
									relative: r
								}),
								u = l.hash,
								s = l.pathname,
								c = l.search,
								f = s;
							return "/" !== o && (f = "/" === s ? o : J([o, s])), i.createHref({
								pathname: f,
								search: c,
								hash: u
							})
						}(c, {
							relative: o
						}),
						b = function(e, n) {
							var r = void 0 === n ? {} : n,
								a = r.target,
								o = r.replace,
								i = r.state,
								l = r.preventScrollReset,
								u = r.relative,
								s = ye(),
								c = ve(),
								f = be(e, {
									relative: u
								});
							return t.useCallback((function(t) {
								if (function(e, t) {
										return 0 === e.button && (!t || "_self" === t) && ! function(e) {
											return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
										}(e)
									}(t, a)) {
									t.preventDefault();
									var n = void 0 !== o ? o : L(c) === L(f);
									s(e, {
										replace: n,
										state: i,
										preventScrollReset: l,
										relative: u
									})
								}
							}), [c, s, f, o, i, a, e, l, u])
						}(c, {
							replace: l,
							state: u,
							target: s,
							preventScrollReset: f,
							relative: o
						});
					return t.createElement("a", Fe({}, d, {
						href: r || y,
						onClick: h || i ? a : function(e) {
							a && a(e), e.defaultPrevented || b(e)
						},
						ref: n,
						target: s
					}))
				}));
			var He = t.forwardRef((function(e, n) {
				var r = e["aria-current"],
					a = void 0 === r ? "page" : r,
					o = e.caseSensitive,
					i = void 0 !== o && o,
					l = e.className,
					u = void 0 === l ? "" : l,
					s = e.end,
					c = void 0 !== s && s,
					f = e.style,
					d = e.to,
					p = e.children,
					h = Me(e, Ve),
					m = be(d, {
						relative: h.relative
					}),
					v = ve(),
					g = t.useContext(se),
					y = t.useContext(fe).navigator,
					b = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname,
					w = v.pathname,
					k = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
				i || (w = w.toLowerCase(), k = k ? k.toLowerCase() : null, b = b.toLowerCase());
				var x, S = w === b || !c && w.startsWith(b) && "/" === w.charAt(b.length),
					_ = null != k && (k === b || !c && k.startsWith(b) && "/" === k.charAt(b.length)),
					E = S ? a : void 0;
				x = "function" === typeof u ? u({
					isActive: S,
					isPending: _
				}) : [u, S ? "active" : null, _ ? "pending" : null].filter(Boolean).join(" ");
				var C = "function" === typeof f ? f({
					isActive: S,
					isPending: _
				}) : f;
				return t.createElement(We, Fe({}, h, {
					"aria-current": E,
					className: x,
					ref: n,
					style: C,
					to: d
				}), "function" === typeof p ? p({
					isActive: S,
					isPending: _
				}) : p)
			}));
			var Qe, qe;
			(function(e) {
				e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher"
			})(Qe || (Qe = {})),
			function(e) {
				e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
			}(qe || (qe = {}));

			function Ze() {
				var e = ve().pathname;
				return (0, t.useEffect)((function() {
					window.scrollTo(0, 0)
				}), [e]), null
			}
			var Ke = function(e) {
					var n = e.key,
						r = e.initialValue,
						a = e.storage,
						o = e.possibleValues,
						i = "localStorage" === a ? localStorage : sessionStorage,
						l = u((0, t.useState)((function() {
							if ("undefined" === typeof window) return r;
							try {
								var e = i.getItem(n),
									t = null === e ? "" : JSON.parse(e);
								return Array.isArray(o) && o.includes(t) ? t : r
							} catch (a) {
								return console.log(a), r
							}
						})), 2),
						s = l[0],
						c = l[1];
					return [s, function(e) {
						try {
							c(e), "undefined" !== typeof window && i.setItem(n, JSON.stringify(e))
						} catch (t) {
							console.log(t)
						}
					}]
				},
				Ye = n(184),
				Ge = (0, t.createContext)({
					lang: "en",
					theme: "light",
					setTheme: function() {},
					setLang: function() {}
				}),
				Xe = (0, t.createContext)({
					isSubmitting: !1,
					setIsSubmitting: function() {}
				});

			function Je() {
				return window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light"
			}
			var et = function(e) {
				var t = u(Ke({
						key: "theme",
						initialValue: Je(),
						storage: "localStorage",
						possibleValues: ["dark", "light"]
					}), 2),
					n = t[0],
					r = t[1],
					//Variáveis de linguagens
					a = u(Ke({
						key: "lang",
						initialValue: "en",
						storage: "localStorage",
						possibleValues: ["en", "ptbr"]
					}), 2),
					o = a[0],
					i = a[1],
					l = u(Ke({
						key: "isSubmiting",
						initialValue: !1,
						storage: "sessionStorage",
						possibleValues: "boolean"
					}), 2),
					s = l[0],
					c = l[1];
				window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (function() {
					r(Je())
				}));
				var f = {
						theme: n,
						lang: o,
						setTheme: r,
						setLang: i
					},
					d = {
						isSubmitting: s,
						setIsSubmitting: c
					};
				return (0, Ye.jsx)(Ge.Provider, {
					value: f,
					children: (0, Ye.jsx)(Xe.Provider, {
						value: d,
						children: e.children
					})
				})
			};

			function tt(e, t, n) {
				return (t = p(t)) in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function nt(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var r = Object.getOwnPropertySymbols(e);
					t && (r = r.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), n.push.apply(n, r)
				}
				return n
			}

			function rt(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? nt(Object(n), !0).forEach((function(t) {
						tt(e, t, n[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					}))
				}
				return e
			}

			function at(e, t) {
				if (null == e) return {};
				var n, r, a = function(e, t) {
					if (null == e) return {};
					var n, r, a = {},
						o = Object.keys(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
					return a
				}(e, t);
				if (Object.getOwnPropertySymbols) {
					var o = Object.getOwnPropertySymbols(e);
					for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
				}
				return a
			}

			function ot(e) {
				var t, n, r = "";
				if ("string" == typeof e || "number" == typeof e) r += e;
				else if ("object" == typeof e)
					if (Array.isArray(e))
						for (t = 0; t < e.length; t++) e[t] && (n = ot(e[t])) && (r && (r += " "), r += n);
					else
						for (t in e) e[t] && (r && (r += " "), r += t);
				return r
			}
			var it = function() {
					for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = ot(e)) && (r && (r += " "), r += t);
					return r
				},
				lt = ["theme", "type"],
				ut = ["delay", "staleId"],
				st = function(e) {
					return "number" == typeof e && !isNaN(e)
				},
				ct = function(e) {
					return "string" == typeof e
				},
				ft = function(e) {
					return "function" == typeof e
				},
				dt = function(e) {
					return ct(e) || ft(e) ? e : null
				},
				pt = function(e) {
					return (0, t.isValidElement)(e) || ct(e) || ft(e) || st(e)
				};

			function ht(e) {
				var n = e.enter,
					r = e.exit,
					a = e.appendPosition,
					o = void 0 !== a && a,
					i = e.collapse,
					l = void 0 === i || i,
					u = e.collapseDuration,
					s = void 0 === u ? 300 : u;
				return function(e) {
					var a = e.children,
						i = e.position,
						u = e.preventExitTransition,
						f = e.done,
						d = e.nodeRef,
						p = e.isIn,
						h = o ? "".concat(n, "--").concat(i) : n,
						m = o ? "".concat(r, "--").concat(i) : r,
						v = (0, t.useRef)(0);
					return (0, t.useLayoutEffect)((function() {
						var e, t = d.current,
							n = h.split(" "),
							r = function e(r) {
								var a;
								r.target === d.current && (t.dispatchEvent(new Event("d")), t.removeEventListener("animationend", e), t.removeEventListener("animationcancel", e), 0 === v.current && "animationcancel" !== r.type && (a = t.classList).remove.apply(a, c(n)))
							};
						(e = t.classList).add.apply(e, c(n)), t.addEventListener("animationend", r), t.addEventListener("animationcancel", r)
					}), []), (0, t.useEffect)((function() {
						var e = d.current,
							t = function t() {
								e.removeEventListener("animationend", t), l ? function(e, t, n) {
									void 0 === n && (n = 300);
									var r = e.scrollHeight,
										a = e.style;
									requestAnimationFrame((function() {
										a.minHeight = "initial", a.height = r + "px", a.transition = "all ".concat(n, "ms"), requestAnimationFrame((function() {
											a.height = "0", a.padding = "0", a.margin = "0", setTimeout(t, n)
										}))
									}))
								}(e, f, s) : f()
							};
						p || (u ? t() : (v.current = 1, e.className += " ".concat(m), e.addEventListener("animationend", t)))
					}), [p]), t.createElement(t.Fragment, null, a)
				}
			}

			function mt(e, t) {
				return null != e ? {
					content: e.content,
					containerId: e.props.containerId,
					id: e.props.toastId,
					theme: e.props.theme,
					type: e.props.type,
					data: e.props.data || {},
					isLoading: e.props.isLoading,
					icon: e.props.icon,
					status: t
				} : {}
			}
			var vt = {
					list: new Map,
					emitQueue: new Map,
					on: function(e, t) {
						return this.list.has(e) || this.list.set(e, []), this.list.get(e).push(t), this
					},
					off: function(e, t) {
						if (t) {
							var n = this.list.get(e).filter((function(e) {
								return e !== t
							}));
							return this.list.set(e, n), this
						}
						return this.list.delete(e), this
					},
					cancelEmit: function(e) {
						var t = this.emitQueue.get(e);
						return t && (t.forEach(clearTimeout), this.emitQueue.delete(e)), this
					},
					emit: function(e) {
						var t = arguments,
							n = this;
						this.list.has(e) && this.list.get(e).forEach((function(r) {
							var a = setTimeout((function() {
								r.apply(void 0, c([].slice.call(t, 1)))
							}), 0);
							n.emitQueue.has(e) || n.emitQueue.set(e, []), n.emitQueue.get(e).push(a)
						}))
					}
				},
				gt = function(e) {
					var n = e.theme,
						r = e.type,
						a = at(e, lt);
					return t.createElement("svg", rt({
						viewBox: "0 0 24 24",
						width: "100%",
						height: "100%",
						fill: "colored" === n ? "currentColor" : "var(--toastify-icon-color-".concat(r, ")")
					}, a))
				},
				yt = {
					info: function(e) {
						return t.createElement(gt, rt({}, e), t.createElement("path", {
							d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
						}))
					},
					warning: function(e) {
						return t.createElement(gt, rt({}, e), t.createElement("path", {
							d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
						}))
					},
					success: function(e) {
						return t.createElement(gt, rt({}, e), t.createElement("path", {
							d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
						}))
					},
					error: function(e) {
						return t.createElement(gt, rt({}, e), t.createElement("path", {
							d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
						}))
					},
					spinner: function() {
						return t.createElement("div", {
							className: "Toastify__spinner"
						})
					}
				};

			function bt(e) {
				var n = (0, t.useReducer)((function(e) {
						return e + 1
					}), 0),
					r = u(n, 2)[1],
					a = u((0, t.useState)([]), 2),
					o = a[0],
					i = a[1],
					l = (0, t.useRef)(null),
					s = (0, t.useRef)(new Map).current,
					f = function(e) {
						return -1 !== o.indexOf(e)
					},
					d = (0, t.useRef)({
						toastKey: 1,
						displayedToast: 0,
						count: 0,
						queue: [],
						props: e,
						containerId: null,
						isToastActive: f,
						getToast: function(e) {
							return s.get(e)
						}
					}).current;

				function p(e) {
					var t = e.containerId;
					!d.props.limit || t && d.containerId !== t || (d.count -= d.queue.length, d.queue = [])
				}

				function h(e) {
					i((function(t) {
						return null == e ? [] : t.filter((function(t) {
							return t !== e
						}))
					}))
				}

				function m() {
					var e = d.queue.shift();
					g(e.toastContent, e.toastProps, e.staleId)
				}

				function v(e, n) {
					var a = n.delay,
						o = n.staleId,
						i = at(n, ut);
					if (pt(e) && ! function(e) {
							return !l.current || d.props.enableMultiContainer && e.containerId !== d.props.containerId || s.has(e.toastId) && null == e.updateId
						}(i)) {
						var c = i.toastId,
							f = i.updateId,
							p = i.data,
							v = d.props,
							y = function() {
								return h(c)
							},
							b = null == f;
						b && d.count++;
						var w, k, x = rt(rt(rt({}, v), {}, {
							style: v.toastStyle,
							key: d.toastKey++
						}, Object.fromEntries(Object.entries(i).filter((function(e) {
							var t = u(e, 2);
							t[0];
							return null != t[1]
						})))), {}, {
							toastId: c,
							updateId: f,
							data: p,
							closeToast: y,
							isIn: !1,
							className: dt(i.className || v.toastClassName),
							bodyClassName: dt(i.bodyClassName || v.bodyClassName),
							progressClassName: dt(i.progressClassName || v.progressClassName),
							autoClose: !i.isLoading && (w = i.autoClose, k = v.autoClose, !1 === w || st(w) && w > 0 ? w : k),
							deleteToast: function() {
								var e = mt(s.get(c), "removed");
								s.delete(c), vt.emit(4, e);
								var t = d.queue.length;
								if (d.count = null == c ? d.count - d.displayedToast : d.count - 1, d.count < 0 && (d.count = 0), t > 0) {
									var n = null == c ? d.props.limit : 1;
									if (1 === t || 1 === n) d.displayedToast++, m();
									else {
										var a = n > t ? t : n;
										d.displayedToast = a;
										for (var o = 0; o < a; o++) m()
									}
								} else r()
							}
						});
						x.iconOut = function(e) {
							var n = e.theme,
								r = e.type,
								a = e.isLoading,
								o = e.icon,
								i = null,
								l = {
									theme: n,
									type: r
								};
							return !1 === o || (ft(o) ? i = o(l) : (0, t.isValidElement)(o) ? i = (0, t.cloneElement)(o, l) : ct(o) || st(o) ? i = o : a ? i = yt.spinner() : function(e) {
								return e in yt
							}(r) && (i = yt[r](l))), i
						}(x), ft(i.onOpen) && (x.onOpen = i.onOpen), ft(i.onClose) && (x.onClose = i.onClose), x.closeButton = v.closeButton, !1 === i.closeButton || pt(i.closeButton) ? x.closeButton = i.closeButton : !0 === i.closeButton && (x.closeButton = !pt(v.closeButton) || v.closeButton);
						var S = e;
						(0, t.isValidElement)(e) && !ct(e.type) ? S = (0, t.cloneElement)(e, {
							closeToast: y,
							toastProps: x,
							data: p
						}) : ft(e) && (S = e({
							closeToast: y,
							toastProps: x,
							data: p
						})), v.limit && v.limit > 0 && d.count > v.limit && b ? d.queue.push({
							toastContent: S,
							toastProps: x,
							staleId: o
						}) : st(a) ? setTimeout((function() {
							g(S, x, o)
						}), a) : g(S, x, o)
					}
				}

				function g(e, t, n) {
					var r = t.toastId;
					n && s.delete(n);
					var a = {
						content: e,
						props: t
					};
					s.set(r, a), i((function(e) {
						return [].concat(c(e), [r]).filter((function(e) {
							return e !== n
						}))
					})), vt.emit(4, mt(a, null == a.props.updateId ? "added" : "updated"))
				}
				return (0, t.useEffect)((function() {
					return d.containerId = e.containerId, vt.cancelEmit(3).on(0, v).on(1, (function(e) {
							return l.current && h(e)
						})).on(5, p).emit(2, d),
						function() {
							s.clear(), vt.emit(3, d)
						}
				}), []), (0, t.useEffect)((function() {
					d.props = e, d.isToastActive = f, d.displayedToast = o.length
				})), {
					getToastToRender: function(t) {
						var n = new Map,
							r = Array.from(s.values());
						return e.newestOnTop && r.reverse(), r.forEach((function(e) {
							var t = e.props.position;
							n.has(t) || n.set(t, []), n.get(t).push(e)
						})), Array.from(n, (function(e) {
							return t(e[0], e[1])
						}))
					},
					containerRef: l,
					isToastActive: f
				}
			}

			function wt(e) {
				return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
			}

			function kt(e) {
				return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
			}

			function xt(e) {
				var n = u((0, t.useState)(!1), 2),
					r = n[0],
					a = n[1],
					o = u((0, t.useState)(!1), 2),
					i = o[0],
					l = o[1],
					s = (0, t.useRef)(null),
					c = (0, t.useRef)({
						start: 0,
						x: 0,
						y: 0,
						delta: 0,
						removalDistance: 0,
						canCloseOnClick: !0,
						canDrag: !1,
						boundingRect: null,
						didMove: !1
					}).current,
					f = (0, t.useRef)(e),
					d = e.autoClose,
					p = e.pauseOnHover,
					h = e.closeToast,
					m = e.onClick,
					v = e.closeOnClick;

				//Função de fechar o toast
				function g(t) {
					if (e.draggable) {
						"touchstart" === t.nativeEvent.type && t.nativeEvent.preventDefault(), c.didMove = !1, document.addEventListener("mousemove", k), document.addEventListener("mouseup", x), document.addEventListener("touchmove", k), document.addEventListener("touchend", x);
						var n = s.current;
						c.canCloseOnClick = !0, c.canDrag = !0, c.boundingRect = n.getBoundingClientRect(), n.style.transition = "", c.x = wt(t.nativeEvent), c.y = kt(t.nativeEvent), "x" === e.draggableDirection ? (c.start = c.x, c.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (c.start = c.y, c.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent / 100))
					}
				}

				function y(t) {
					if (c.boundingRect) {
						var n = c.boundingRect,
							r = n.top,
							a = n.bottom,
							o = n.left,
							i = n.right;
						"touchend" !== t.nativeEvent.type && e.pauseOnHover && c.x >= o && c.x <= i && c.y >= r && c.y <= a ? w() : b()
					}
				}

				function b() {
					a(!0)
				}

				function w() {
					a(!1)
				}

				function k(t) {
					var n = s.current;
					c.canDrag && n && (c.didMove = !0, r && w(), c.x = wt(t), c.y = kt(t), c.delta = "x" === e.draggableDirection ? c.x - c.start : c.y - c.start, c.start !== c.x && (c.canCloseOnClick = !1), n.style.transform = "translate".concat(e.draggableDirection, "(").concat(c.delta, "px)"), n.style.opacity = "" + (1 - Math.abs(c.delta / c.removalDistance)))
				}

				function x() {
					document.removeEventListener("mousemove", k), document.removeEventListener("mouseup", x), document.removeEventListener("touchmove", k), document.removeEventListener("touchend", x);
					var t = s.current;
					if (c.canDrag && c.didMove && t) {
						if (c.canDrag = !1, Math.abs(c.delta) > c.removalDistance) return l(!0), void e.closeToast();
						t.style.transition = "transform 0.2s, opacity 0.2s", t.style.transform = "translate".concat(e.draggableDirection, "(0)"), t.style.opacity = "1"
					}
				}(0, t.useEffect)((function() {
					f.current = e
				})), (0, t.useEffect)((function() {
					return s.current && s.current.addEventListener("d", b, {
							once: !0
						}), ft(e.onOpen) && e.onOpen((0, t.isValidElement)(e.children) && e.children.props),
						function() {
							var e = f.current;
							ft(e.onClose) && e.onClose((0, t.isValidElement)(e.children) && e.children.props)
						}
				}), []), (0, t.useEffect)((function() {
					return e.pauseOnFocusLoss && (document.hasFocus() || w(), window.addEventListener("focus", b), window.addEventListener("blur", w)),
						function() {
							e.pauseOnFocusLoss && (window.removeEventListener("focus", b), window.removeEventListener("blur", w))
						}
				}), [e.pauseOnFocusLoss]);
				var S = {
					onMouseDown: g,
					onTouchStart: g,
					onMouseUp: y,
					onTouchEnd: y
				};
				return d && p && (S.onMouseEnter = w, S.onMouseLeave = b), v && (S.onClick = function(e) {
					m && m(e), c.canCloseOnClick && h()
				}), {
					playToast: b,
					pauseToast: w,
					isRunning: r,
					preventExitTransition: i,
					toastRef: s,
					eventHandlers: S
				}
			}

			function St(e) {
				var n = e.closeToast,
					r = e.theme,
					a = e.ariaLabel,
					o = void 0 === a ? "close" : a;
				return t.createElement("button", {
					className: "Toastify__close-button Toastify__close-button--".concat(r),
					type: "button",
					onClick: function(e) {
						e.stopPropagation(), n(e)
					},
					"aria-label": o
				}, t.createElement("svg", {
					"aria-hidden": "true",
					viewBox: "0 0 14 16"
				}, t.createElement("path", {
					fillRule: "evenodd",
					d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
				})))
			}

			function _t(e) {
				var n = e.delay,
					r = e.isRunning,
					a = e.closeToast,
					o = e.type,
					i = void 0 === o ? "default" : o,
					l = e.hide,
					u = e.className,
					s = e.style,
					c = e.controlledProgress,
					f = e.progress,
					d = e.rtl,
					p = e.isIn,
					h = e.theme,
					m = l || c && 0 === f,
					v = rt(rt({}, s), {}, {
						animationDuration: "".concat(n, "ms"),
						animationPlayState: r ? "running" : "paused",
						opacity: m ? 0 : 1
					});
				c && (v.transform = "scaleX(".concat(f, ")"));
				var g = it("Toastify__progress-bar", c ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--".concat(h), "Toastify__progress-bar--".concat(i), {
						"Toastify__progress-bar--rtl": d
					}),
					y = ft(u) ? u({
						rtl: d,
						type: i,
						defaultClassName: g
					}) : it(g, u);
				return t.createElement("div", tt({
					role: "progressbar",
					"aria-hidden": m ? "true" : "false",
					"aria-label": "notification timer",
					className: y,
					style: v
				}, c && f >= 1 ? "onTransitionEnd" : "onAnimationEnd", c && f < 1 ? null : function() {
					p && a()
				}))
			}
			var Et = function(e) {
					var n = xt(e),
						r = n.isRunning,
						a = n.preventExitTransition,
						o = n.toastRef,
						i = n.eventHandlers,
						l = e.closeButton,
						u = e.children,
						s = e.autoClose,
						c = e.onClick,
						f = e.type,
						d = e.hideProgressBar,
						p = e.closeToast,
						h = e.transition,
						m = e.position,
						v = e.className,
						g = e.style,
						y = e.bodyClassName,
						b = e.bodyStyle,
						w = e.progressClassName,
						k = e.progressStyle,
						x = e.updateId,
						S = e.role,
						_ = e.progress,
						E = e.rtl,
						C = e.toastId,
						N = e.deleteToast,
						j = e.isIn,
						P = e.isLoading,
						T = e.iconOut,
						O = e.closeOnClick,
						L = e.theme,
						R = it("Toastify__toast", "Toastify__toast-theme--".concat(L), "Toastify__toast--".concat(f), {
							"Toastify__toast--rtl": E
						}, {
							"Toastify__toast--close-on-click": O
						}),
						z = ft(v) ? v({
							rtl: E,
							position: m,
							type: f,
							defaultClassName: R
						}) : it(R, v),
						I = !!_ || !s,
						D = {
							closeToast: p,
							type: f,
							theme: L
						},
						F = null;
					return !1 === l || (F = ft(l) ? l(D) : (0, t.isValidElement)(l) ? (0, t.cloneElement)(l, D) : St(D)), t.createElement(h, {
						isIn: j,
						done: N,
						position: m,
						preventExitTransition: a,
						nodeRef: o
					}, t.createElement("div", rt(rt({
						id: C,
						onClick: c,
						className: z
					}, i), {}, {
						style: g,
						ref: o
					}), t.createElement("div", rt(rt({}, j && {
						role: S
					}), {}, {
						className: ft(y) ? y({
							type: f
						}) : it("Toastify__toast-body", y),
						style: b
					}), null != T && t.createElement("div", {
						className: it("Toastify__toast-icon", {
							"Toastify--animate-icon Toastify__zoom-enter": !P
						})
					}, T), t.createElement("div", null, u)), F, t.createElement(_t, rt(rt({}, x && !I ? {
						key: "pb-".concat(x)
					} : {}), {}, {
						rtl: E,
						theme: L,
						delay: s,
						isRunning: r,
						isIn: j,
						closeToast: p,
						hide: d,
						type: f,
						style: k,
						className: w,
						controlledProgress: I,
						progress: _ || 0
					}))))
				},
				Ct = function(e, t) {
					return void 0 === t && (t = !1), {
						enter: "Toastify--animate Toastify__".concat(e, "-enter"),
						exit: "Toastify--animate Toastify__".concat(e, "-exit"),
						appendPosition: t
					}
				},
				Nt = ht(Ct("bounce", !0)),
				jt = (ht(Ct("slide", !0)), ht(Ct("zoom")), ht(Ct("flip")), (0, t.forwardRef)((function(e, n) {
					var r = bt(e),
						a = r.getToastToRender,
						o = r.containerRef,
						i = r.isToastActive,
						l = e.className,
						u = e.style,
						s = e.rtl,
						c = e.containerId;

					function f(e) {
						var t = it("Toastify__toast-container", "Toastify__toast-container--".concat(e), {
							"Toastify__toast-container--rtl": s
						});
						return ft(l) ? l({
							position: e,
							rtl: s,
							defaultClassName: t
						}) : it(t, dt(l))
					}
					return (0, t.useEffect)((function() {
						n && (n.current = o.current)
					}), []), t.createElement("div", {
						ref: o,
						className: "Toastify",
						id: c
					}, a((function(e, n) {
						var r = n.length ? rt({}, u) : rt(rt({}, u), {}, {
							pointerEvents: "none"
						});
						return t.createElement("div", {
							className: f(e),
							style: r,
							key: "container-".concat(e)
						}, n.map((function(e, r) {
							var a = e.content,
								o = e.props;
							return t.createElement(Et, rt(rt({}, o), {}, {
								isIn: i(o.toastId),
								style: rt(rt({}, o.style), {}, {
									"--nth": r + 1,
									"--len": n.length
								}),
								key: "toast-".concat(o.key)
							}), a)
						})))
					})))
				})));
			jt.displayName = "ToastContainer", jt.defaultProps = {
				position: "top-right",
				transition: Nt,
				autoClose: 5e3,
				closeButton: St,
				pauseOnHover: !0,
				pauseOnFocusLoss: !0,
				closeOnClick: !0,
				draggable: !0,
				draggablePercent: 80,
				draggableDirection: "x",
				role: "alert",
				theme: "light"
			};
			var Pt, Tt = new Map,
				Ot = [],
				Lt = 1;

			function Rt() {
				return "" + Lt++
			}

			function zt(e) {
				return e && (ct(e.toastId) || st(e.toastId)) ? e.toastId : Rt()
			}

			function It(e, t) {
				return Tt.size > 0 ? vt.emit(0, e, t) : Ot.push({
					content: e,
					options: t
				}), t.toastId
			}

			function Dt(e, t) {
				return rt(rt({}, t), {}, {
					type: t && t.type || e,
					toastId: zt(t)
				})
			}

			function Ft(e) {
				return function(t, n) {
					return It(t, Dt(e, n))
				}
			}

			function Mt(e, t) {
				return It(e, Dt("default", t))
			}
			Mt.loading = function(e, t) {
				return It(e, Dt("default", rt({
					isLoading: !0,
					autoClose: !1,
					closeOnClick: !1,
					closeButton: !1,
					draggable: !1
				}, t)))
			}, Mt.promise = function(e, t, n) {
				var r, a = t.pending,
					o = t.error,
					i = t.success;
				a && (r = ct(a) ? Mt.loading(a, n) : Mt.loading(a.render, rt(rt({}, n), a)));
				var l = {
						isLoading: null,
						autoClose: null,
						closeOnClick: null,
						closeButton: null,
						draggable: null
					},
					u = function(e, t, a) {
						if (null != t) {
							var o = rt(rt(rt({
									type: e
								}, l), n), {}, {
									data: a
								}),
								i = ct(t) ? {
									render: t
								} : t;
							return r ? Mt.update(r, rt(rt({}, o), i)) : Mt(i.render, rt(rt({}, o), i)), a
						}
						Mt.dismiss(r)
					},
					s = ft(e) ? e() : e;
				return s.then((function(e) {
					return u("success", i, e)
				})).catch((function(e) {
					return u("error", o, e)
				})), s
			}, Mt.success = Ft("success"), Mt.info = Ft("info"), Mt.error = Ft("error"), Mt.warning = Ft("warning"), Mt.warn = Mt.warning, Mt.dark = function(e, t) {
				return It(e, Dt("default", rt({
					theme: "dark"
				}, t)))
			}, Mt.dismiss = function(e) {
				Tt.size > 0 ? vt.emit(1, e) : Ot = Ot.filter((function(t) {
					return null != e && t.options.toastId !== e
				}))
			}, Mt.clearWaitingQueue = function(e) {
				return void 0 === e && (e = {}), vt.emit(5, e)
			}, Mt.isActive = function(e) {
				var t = !1;
				return Tt.forEach((function(n) {
					n.isToastActive && n.isToastActive(e) && (t = !0)
				})), t
			}, Mt.update = function(e, t) {
				void 0 === t && (t = {}), setTimeout((function() {
					var n = function(e, t) {
						var n = t.containerId,
							r = Tt.get(n || Pt);
						return r && r.getToast(e)
					}(e, t);
					if (n) {
						var r = n.props,
							a = n.content,
							o = rt(rt(rt({
								delay: 100
							}, r), t), {}, {
								toastId: t.toastId || e,
								updateId: Rt()
							});
						o.toastId !== e && (o.staleId = e);
						var i = o.render || a;
						delete o.render, It(i, o)
					}
				}), 0)
			}, Mt.done = function(e) {
				Mt.update(e, {
					progress: 1
				})
			}, Mt.onChange = function(e) {
				return vt.on(4, e),
					function() {
						vt.off(4, e)
					}
			}, Mt.POSITION = {
				TOP_LEFT: "top-left",
				TOP_RIGHT: "top-right",
				TOP_CENTER: "top-center",
				BOTTOM_LEFT: "bottom-left",
				BOTTOM_RIGHT: "bottom-right",
				BOTTOM_CENTER: "bottom-center"
			}, Mt.TYPE = {
				INFO: "info",
				SUCCESS: "success",
				WARNING: "warning",
				ERROR: "error",
				DEFAULT: "default"
			}, vt.on(2, (function(e) {
				Pt = e.containerId || e, Tt.set(Pt, e), Ot.forEach((function(e) {
					vt.emit(0, e.content, e.options)
				})), Ot = []
			})).on(3, (function(e) {
				Tt.delete(e.containerId || e), 0 === Tt.size && vt.off(0).off(1).off(5)
			}));
			var At = function(e) {
				var n = e.isActive,
					r = e.toggleMenu,
					a = (0, t.useContext)(Ge).theme,
					o = "hamburger";
				return n && (o += " hamburger_active"), (0, Ye.jsxs)("div", {
					onClick: r,
					className: o,
					"data-theme": a,
					children: [(0, Ye.jsx)("span", {}), (0, Ye.jsx)("span", {}), (0, Ye.jsx)("span", {})]
				})
			};
			var Vt = function() {
				var e = (0, t.useContext)(Ge),
					n = e.theme,
					r = e.setTheme;
				return (0, Ye.jsx)("button", {
					onClick: function() {
						return r("light" === n ? "dark" : "light")
					},
					className: "theme-switcher",
					id: "theme-switcher",
					"data-theme": n,
					"aria-label": "switch theme",
					children: (0, Ye.jsxs)("svg", {
						className: "sun-and-moon",
						"aria-hidden": "true",
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						children: [(0, Ye.jsxs)("mask", {
							className: "moon",
							id: "moon-mask",
							children: [(0, Ye.jsx)("rect", {
								x: "0",
								y: "0",
								width: "100%",
								height: "100%",
								fill: "white"
							}), (0, Ye.jsx)("circle", {
								cx: "24",
								cy: "10",
								r: "6",
								fill: "black"
							})]
						}), (0, Ye.jsx)("circle", {
							className: "sun",
							cx: "12",
							cy: "12",
							r: "6",
							mask: "url(#moon-mask)",
							fill: "currentColor"
						}), (0, Ye.jsxs)("g", {
							className: "sun-beams",
							stroke: "currentColor",
							children: [(0, Ye.jsx)("line", {
								x1: "12",
								y1: "1",
								x2: "12",
								y2: "3"
							}), (0, Ye.jsx)("line", {
								x1: "12",
								y1: "21",
								x2: "12",
								y2: "23"
							}), (0, Ye.jsx)("line", {
								x1: "4.22",
								y1: "4.22",
								x2: "5.64",
								y2: "5.64"
							}), (0, Ye.jsx)("line", {
								x1: "18.36",
								y1: "18.36",
								x2: "19.78",
								y2: "19.78"
							}), (0, Ye.jsx)("line", {
								x1: "1",
								y1: "12",
								x2: "3",
								y2: "12"
							}), (0, Ye.jsx)("line", {
								x1: "21",
								y1: "12",
								x2: "23",
								y2: "12"
							}), (0, Ye.jsx)("line", {
								x1: "4.22",
								y1: "19.78",
								x2: "5.64",
								y2: "18.36"
							}), (0, Ye.jsx)("line", {
								x1: "18.36",
								y1: "5.64",
								x2: "19.78",
								y2: "4.22"
							})]
						})]
					})
				})
			};
			var Ut = function() {
					var e = (0, t.useContext)(Ge),
						n = e.lang,
						r = e.theme,
						a = e.setLang;
					//Botão de alternar o idioma
					return (0, Ye.jsx)("button", {
						onClick: function() {
							return a("ptbr" === n ? "en" : "ptbr")
						},
						className: "lang-switcher",
						"data-theme": r,
						"data-lang": n,
						children: (0, Ye.jsxs)("div", {
							children: [(0, Ye.jsx)("span", {
								className: "eng",
								children: "ENG"
							}), (0, Ye.jsx)("span", {
								className: "rus",
								children: "POR"
							})]
						})
					})
				},
				//Função para criar o contexto
				Bt = {
					home: {
						ptbr: "Início",
						en: "Home"
					},
					projects: {
						ptbr: "Projetos",
						en: "Projects"
					},
					contact: {
						ptbr: "Contato",
						en: "Contact"
					}
				};
			var $t = function() {
					var e = u((0, t.useState)(!1), 2),
						n = e[0],
						r = e[1],
						a = n ? "menu menu_active" : "menu",
						o = (0, t.useContext)(Ge),
						i = o.lang,
						l = o.theme;
					return (0, Ye.jsx)("header", {
						className: "header",
						"data-theme": l,
						children: (0, Ye.jsx)("nav", {
							className: "nav",
							children: (0, Ye.jsxs)("div", {
								className: "container",
								children: [(0, Ye.jsxs)("div", {
									className: "nav__wrapper",
									children: [(0, Ye.jsxs)("div", {
										className: "nav__btns",
										children: [(0, Ye.jsx)("div", {
											children: (0, Ye.jsx)(He, {
												to: "/",
												className: "nav-link",
												children: Bt.home[i]
											})
										}), (0, Ye.jsx)(Vt, {}), (0, Ye.jsx)(Ut, {})]
									}), (0, Ye.jsxs)("ul", {
										className: a,
										children: [(0, Ye.jsx)("li", {
											onClick: function() {
												return r(!1)
											},
											className: "menu__item",
											children: (0, Ye.jsx)(He, {
												to: "/",
												className: "nav-link",
												children: Bt.home[i]
											})
										}), (0, Ye.jsx)("li", {
											onClick: function() {
												return r(!1)
											},
											className: "menu__item",
											children: (0, Ye.jsx)(He, {
												to: "/projects",
												className: "nav-link",
												children: Bt.projects[i]
											})
										}), (0, Ye.jsx)("li", {
											onClick: function() {
												return r(!1)
											},
											className: "menu__item",
											children: (0, Ye.jsx)(He, {
												to: "/contact",
												className: "nav-link",
												children: Bt.contact[i]
											})
										})]
									})]
								}), (0, Ye.jsx)(At, {
									isActive: n,
									toggleMenu: function() {
										r(!n)
									}
								})]
							})
						})
					})
				},
				Wt = {
					name: {
						ptbr: "Leonardo Silva",
						en: "Leonardo Silva"
					},
					descr: {
						ptbr: "Estou constantemente buscando aprender e aplicar novos conhecimentos para desenvolver soluções que não sejam apenas funcionais, mas também visualmente atraentes.",
						en: "I am constantly seeking to learn and apply new knowledge to develop solutions that are not only functional but also visually appealing."
					},
					button: {
						ptbr: "Baixar Currículo",
						en: "Download Resume"
					}
				};
			var Ht = n.p + "src/media/hero_light.svg";
			var Qt = n.p + "src/media/hero_dark.svg";
			var qt = function() {
					var e = (0, t.useContext)(Ge),
						n = e.lang,
						r = e.theme;
					return (0, Ye.jsx)("section", {
						className: "promo",
						"data-theme": r,
						children: (0, Ye.jsx)("div", {
							className: "container",
							children: (0, Ye.jsxs)("div", {
								className: "promo__wrapper",
								children: [(0, Ye.jsxs)("div", {
									className: "promo__text",
									children: [(0, Ye.jsx)("h2", {
										className: "promo__subheader",
										children: "FullStack Developer"
									}), (0, Ye.jsx)("h1", {
										className: "promo__header",
										children: Wt.name[n]
									}), (0, Ye.jsx)("div", {
										className: "promo__descr",
										children: Wt.descr[n]
									}), (0, Ye.jsx)("a", {
										className: "promo__link",
										target: "_blank",
										rel: "noreferrer",
										href: "https://download850.mediafire.com/0a9pokp05cigCiDa96dD-Z4bartfncZtXQQJPunshPt1Niln817vjOSWKweDPxZPvNhAJT-dS9ODkQI_e89RV-NRmMj545pV5WMbeIXXphPAj4rVPSYU6zKLK85uNgSAnxwrO6dIQv9Ouatgqij4U9R7RHtPs4QWQ63psFHXBQOu/yvxeusjq6quyjrv/Curr%C3%ADculo+-+Leonardo+M.+Silva.pdf",
										download: !0,
										children: (0, Ye.jsx)("button", {
											className: "button button_promo",
											"data-theme": r,
											children: Wt.button[n]
										})
									})]
								}), (0, Ye.jsx)("img", {
									className: "promo__img",
									src: "light" === r ? Ht : Qt,
									alt: "hero",
									width: "583px",
									height: "583px"
								})]
							})
						})
					})
				},
				Zt = {
					title: {
						ptbr: "Sobre mim",
						en: "About me"
					},
					text: {
						ptbr: "Um entusiasta da programação de 21 anos, atualmente estudando Análise e Desenvolvimento de Sistemas. Apaixonado por criar experiências digitais envolventes, tenho especialização em desenvolvimento Frontend usando JavaScript e Sass. Também possuo habilidades sólidas no Backend, utilizando PHP e Python para construir bases robustas para a funcionalidade de aplicativos. Minha jornada na programação é marcada pelo aprendizado contínuo e pela aplicação do conhecimento para criar soluções que unem forma e função.",
						en: "A 21-year-old programming enthusiast currently studying Analysis and Systems Development. Passionate about creating engaging digital experiences, I specialize in Frontend development using JavaScript and Sass. I also have solid Backend skills, utilizing PHP and Python to build robust foundations for application functionality. My programming journey is defined by continuous learning and applying knowledge to create solutions that combine form and function."
					}
				};
			var Kt = function() {
					var e = (0, t.useContext)(Ge),
						n = e.lang,
						r = e.theme;
					return (0, Ye.jsx)("section", {
						className: "about-me",
						"data-theme": r,
						children: (0, Ye.jsx)("div", {
							className: "container",
							children: (0, Ye.jsxs)("div", {
								className: "about-me__wrapper",
								children: [(0, Ye.jsx)("h3", {
									className: "title",
									"data-theme": r,
									children: Zt.title[n]
								}), (0, Ye.jsx)("div", {
									className: "about-me__text",
									children: Zt.text[n]
								})]
							})
						})
					})
				},
				Yt = {
					title: {
						ptbr: "Projetos",
						en: "Projects"
					},
					button: {
						ptbr: "ver todos os projetos",
						en: "see all projects"
					}
				};
			var Gt = function(e) {
				return (0, Ye.jsx)("svg", {
					height: e.height,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20",
					children: (0, Ye.jsx)("path", {
						d: "m10,0C4.47,0,0,4.47,0,10c0,4.42,2.86,8.16,6.84,9.49.5.09.69-.21.69-.48,0-.24-.01-1.02-.01-1.86-2.51.46-3.16-.61-3.36-1.18-.11-.29-.6-1.17-1.02-1.41-.35-.19-.85-.65-.01-.66.79-.01,1.35.72,1.54,1.02.9,1.51,2.34,1.09,2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94,0-1.09.39-1.99,1.02-2.69-.1-.25-.45-1.27.1-2.65,0,0,.84-.26,2.75,1.03.8-.23,1.65-.34,2.5-.34s1.7.11,2.5.34c1.91-1.3,2.75-1.03,2.75-1.03.55,1.37.2,2.4.1,2.65.64.7,1.02,1.59,1.02,2.69,0,3.84-2.34,4.69-4.56,4.94.36.31.67.91.67,1.85,0,1.34-.01,2.41-.01,2.75,0,.26.19.58.69.48,3.95-1.33,6.81-5.08,6.81-9.49C20,4.47,15.53,0,10,0Z",
						fill: "#dbffff"
					})
				})
			};
			var Xt = function(e) {
				return (0, Ye.jsx)("svg", {
					height: e.height,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 19.98 20",
					children: (0, Ye.jsx)("path", {
						d: "m18.41,9.07l-3.76,3.76c-2.08,2.08-5.44,2.08-7.5,0-.32-.32-.58-.69-.8-1.07l1.74-1.74c.08-.08.19-.13.29-.19.13.42.34.8.66,1.12,1.04,1.04,2.72,1.04,3.76,0l3.76-3.76c1.04-1.04,1.04-2.72,0-3.76-1.04-1.04-2.72-1.04-3.76,0l-1.33,1.34c-1.09-.42-2.25-.53-3.39-.37l2.85-2.85c2.08-2.08,5.44-2.08,7.5,0,2.08,2.08,2.08,5.44,0,7.5l-.02.02Zm-9.91,6.17l-1.33,1.34c-1.04,1.04-2.72,1.04-3.76,0s-1.04-2.72,0-3.76l3.76-3.76c1.04-1.04,2.72-1.04,3.76,0,.32.32.53.72.66,1.12.1-.06.19-.1.29-.19l1.74-1.74c-.22-.38-.48-.75-.8-1.07-2.08-2.08-5.44-2.08-7.5,0l-3.76,3.76c-2.08,2.08-2.08,5.44,0,7.5,2.08,2.08,5.44,2.08,7.5,0l2.85-2.85c-1.14.16-2.3.05-3.39-.37l-.02.02Z",
						fill: "#dbffff"
					})
				})
			};
			var Jt = function(e) {
					var n = e.itemData,
						r = n.img,
						a = n.title,
						o = n.technologies,
						i = n.descr,
						l = n.github,
						u = n.link,
						s = (0, t.useContext)(Ge),
						c = s.lang,
						f = s.theme;
					return (0, Ye.jsxs)("div", {
						className: "project-item",
						"data-theme": f,
						children: [(0, Ye.jsx)("div", {
							className: "project-item__header",
							children: (0, Ye.jsx)("img", {
								width: "520px",
								height: "386px",
								className: "project-item__img",
								src: r,
								alt: "project preview"
							})
						}), (0, Ye.jsxs)("div", {
							className: "project-item__wrapper",
							children: [(0, Ye.jsx)("h3", {
								className: "project-item__title",
								children: a[c]
							}), (0, Ye.jsx)("div", {
								className: "project-item__technologies",
								children: o.map((function(e, t) {
									return (0, Ye.jsx)("div", {
										className: "project-item__technology",
										children: e
									}, t)
								}))
							}), (0, Ye.jsx)("div", {
								className: "project-item__descr",
								children: i[c]
							}), (0, Ye.jsxs)("div", {
								className: "project-item__links",
								children: [l ? (0, Ye.jsx)("a", {
									className: "project-item__github",
									href: l,
									rel: "noreferrer",
									target: "_blank",
									children: (0, Ye.jsxs)("button", {
										className: "button button_link",
										"data-theme": f,
										children: ["GitHub", (0, Ye.jsx)(Gt, {
											height: "60%"
										})]
									})
								}) : null, u ? (0, Ye.jsx)("a", {
									className: "project-item__link",
									href: u,
									rel: "noreferrer",
									target: "_blank",
									children: (0, Ye.jsxs)("button", {
										className: "button button_link",
										"data-theme": f,
										children: ["Visit", (0, Ye.jsx)(Xt, {
											height: "55%"
										})]
									})
								}) : null]
							})]
						})]
					})
				},
				en = [{
					img: n(668),
					title: {
						ptbr: "Quiz",
						en: "Quiz"
					},
					technologies: ["html", "css", "js"],
					descr: {
						ptbr: "Este emocionante projeto de quiz, desenvolvido com JavaScript e CSS, convida você a testar seus conhecimentos em uma ampla variedade de tópicos.",
						en: "This exciting quiz project, developed using JavaScript and CSS, invites you to test your knowledge across a wide range of topics."
					},
					github: "https://github.com/leonardo-matheus/Quiz-App",
					link: "https://quiz.leonardomdev.me/"
				}, {
					img: n(598),
					title: {
						ptbr: "Flappy Mario",
						en: "Flappy Mario"
					},
					technologies: ["html", "css", "js", "canvas"],
					descr: {
						ptbr: "Relembre os bons tempos da sua infância com o projeto 'Flappy Mario', uma emocionante recriação do clássico jogo que cativou gerações. Inspirado no icônico Flappy Bird e no adorado mundo do Mario, este projeto foi desenvolvido inteiramente em JavaScript para trazer de volta a nostalgia e a empolgação dos jogos retrô.",
						en: "Revisit the fond memories of your childhood with the 'Flappy Mario' project, an exhilarating reimagining of the classic game that captivated generations. Inspired by the iconic Flappy Bird and the beloved Mario universe, this project has been meticulously crafted in pure JavaScript to reignite the nostalgia and thrill of retro gaming."
					},
					github: "https://github.com/leonardo-matheus/flappymario",
					link: "https://flappy.leonardomdev.me/"
				}, {
					img: n(821),
					title: {
						ptbr: "Landing Page Responsiva",
						en: "Responsive Landing Page"
					},
					technologies: ["html", "sass", "js", "bootstrap", "particles.js"],
					descr: {
						ptbr: "Minha Landing Page projetada para destacar os benefícios do nosso Sistema de Planejamento de Recursos Empresariais (ERP) de maneira elegante e envolvente. ",
						en: "My Landing Page designed to highlight the benefits of our Enterprise Resource Planning (ERP) System in an elegant and engaging manner."
					},
					github: "https://github.com/leonardo-matheus/",
					link: "https://techfixinformatica.com.br/"
				}, {
					img: n(105),
					title: {
						ptbr: "Painel Admin ERP",
						en: "ERP Admin Panel"
					},
					technologies: ["html", "php", "scss", "js", "bootstrap", "tables.js", "chart.js", "animate.css", "sql"],
					descr: {
						ptbr: "Imagine ter o controle total das operações da sua empresa ao alcance dos seus dedos. Apresentamos o Painel de Administração ERP, uma ferramenta que ajuda a deixar tudo organizado de maneira mais fácil.",
						en: "Imagine having complete control over your company's operations at your fingertips. Introducing the ERP Administration Dashboard, a tool that helps keep everything organized more easily."
					},
					github: "https://github.com/leonardo-matheus/Painel-Admin-ERP",
					link: "https://home.d3f4lt.com.br/"
				}];
			var tn = function(e) {
					var n = u((0, t.useState)(1), 1)[0];
					"number" === typeof e.viewItems ? (n = e.viewItems, e.viewItems < 1 && (n = 1), e.viewItems > en.length && (n = en.length)) : n = en.length;
					var r = en.map((function(e, t) {
							return en[en.length - 1 - t]
						})).filter((function(e, t) {
							return t < n
						})),
						a = (0, t.useContext)(Ge),
						o = a.lang,
						i = a.theme;
					return (0, Ye.jsx)("section", {
						className: "project-item-list",
						children: (0, Ye.jsxs)("div", {
							className: "container",
							children: [(0, Ye.jsx)("h3", {
								className: "title",
								"data-theme": i,
								children: Yt.title[o]
							}), (0, Ye.jsx)("div", {
								className: "project-item-list__content",
								children: r.map((function(e, t) {
									return (0, Ye.jsx)(Jt, {
										itemData: e
									}, t)
								}))
							}), e.children]
						})
					})
				},
				nn = {
					title: {
						ptbr: "Habilidades",
						en: "Skills"
					}
				},
				rn = [{
					name: "html",
					img: n(630).Z
				}, {
					name: "css",
					img: n(869).Z
				}, {
					name: "javascript",
					img: n(186).Z
				}, {
					name: "typescript",
					img: n(174).Z
				}, {
					name: "react",
					img: n(857).Z
				}, {
					name: "Angular",
					img: n(790).Z
				}, {
					name: "php",
					img: n(826).Z
				}, {
					name: "python",
					img: n(632).Z
				}, {
					name: "git",
					img: n(107).Z
				}, {
					name: "bootstrap",
					img: n(94).Z
				}, {
					name: "styled components",
					img: n(165).Z
				}, {
					name: "sass/scss",
					img: n(428).Z
				}];
			var an = function(e) {
				var n = (0, t.useContext)(Ge).theme;
				return (0, Ye.jsxs)("div", {
					className: "skill-item",
					"data-theme": n,
					children: [(0, Ye.jsx)("img", {
						className: "skill-item__logo",
						src: e.img,
						alt: e.name + "_logo",
						id: e.name + "_logo"
					}), e.name]
				})
			};
			var on = function() {
					var e = (0, t.useContext)(Ge),
						n = e.lang,
						r = e.theme;
					return (0, Ye.jsx)("section", {
						className: "skill-item-list",
						children: (0, Ye.jsxs)("div", {
							className: "container",
							children: [(0, Ye.jsx)("h3", {
								className: "title",
								"data-theme": r,
								children: nn.title[n]
							}), (0, Ye.jsx)("div", {
								className: "skill-item-list__content",
								children: rn.map((function(e, t) {
									return (0, Ye.jsx)(an, {
										name: e.name,
										img: e.img
									}, t)
								}))
							})]
						})
					})
				},
				ln = function() {
					var e = ye(),
						n = (0, t.useContext)(Ge),
						r = n.lang,
						a = n.theme;
					return (0, Ye.jsxs)(Ye.Fragment, {
						children: [(0, Ye.jsx)(qt, {}), (0, Ye.jsx)(Kt, {}), (0, Ye.jsx)(tn, {
							viewItems: 2,
							children: (0, Ye.jsx)("button", {
								className: "button button_projects",
								"data-theme": a,
								onClick: function() {
									return e("./projects")
								},
								children: Yt.button[r]
							})
						}), (0, Ye.jsx)(on, {})]
					})
				},
				un = function() {
					return (0, Ye.jsx)(tn, {
						viewItems: "All",
						children: null
					})
				};

			function sn() {
				sn = function() {
					return e
				};
				var e = {},
					t = Object.prototype,
					n = t.hasOwnProperty,
					r = Object.defineProperty || function(e, t, n) {
						e[t] = n.value
					},
					a = "function" == typeof Symbol ? Symbol : {},
					o = a.iterator || "@@iterator",
					i = a.asyncIterator || "@@asyncIterator",
					l = a.toStringTag || "@@toStringTag";

				function u(e, t, n) {
					return Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}), e[t]
				}
				try {
					u({}, "")
				} catch (P) {
					u = function(e, t, n) {
						return e[t] = n
					}
				}

				function s(e, t, n, a) {
					var o = t && t.prototype instanceof p ? t : p,
						i = Object.create(o.prototype),
						l = new C(a || []);
					return r(i, "_invoke", {
						value: x(e, n, l)
					}), i
				}

				function c(e, t, n) {
					try {
						return {
							type: "normal",
							arg: e.call(t, n)
						}
					} catch (P) {
						return {
							type: "throw",
							arg: P
						}
					}
				}
				e.wrap = s;
				var f = {};

				function p() {}

				function h() {}

				function m() {}
				var v = {};
				u(v, o, (function() {
					return this
				}));
				var g = Object.getPrototypeOf,
					y = g && g(g(N([])));
				y && y !== t && n.call(y, o) && (v = y);
				var b = m.prototype = p.prototype = Object.create(v);

				function w(e) {
					["next", "throw", "return"].forEach((function(t) {
						u(e, t, (function(e) {
							return this._invoke(t, e)
						}))
					}))
				}

				function k(e, t) {
					function a(r, o, i, l) {
						var u = c(e[r], e, o);
						if ("throw" !== u.type) {
							var s = u.arg,
								f = s.value;
							return f && "object" == d(f) && n.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
								a("next", e, i, l)
							}), (function(e) {
								a("throw", e, i, l)
							})) : t.resolve(f).then((function(e) {
								s.value = e, i(s)
							}), (function(e) {
								return a("throw", e, i, l)
							}))
						}
						l(u.arg)
					}
					var o;
					r(this, "_invoke", {
						value: function(e, n) {
							function r() {
								return new t((function(t, r) {
									a(e, n, t, r)
								}))
							}
							return o = o ? o.then(r, r) : r()
						}
					})
				}

				function x(e, t, n) {
					var r = "suspendedStart";
					return function(a, o) {
						if ("executing" === r) throw new Error("Generator is already running");
						if ("completed" === r) {
							if ("throw" === a) throw o;
							return j()
						}
						for (n.method = a, n.arg = o;;) {
							var i = n.delegate;
							if (i) {
								var l = S(i, n);
								if (l) {
									if (l === f) continue;
									return l
								}
							}
							if ("next" === n.method) n.sent = n._sent = n.arg;
							else if ("throw" === n.method) {
								if ("suspendedStart" === r) throw r = "completed", n.arg;
								n.dispatchException(n.arg)
							} else "return" === n.method && n.abrupt("return", n.arg);
							r = "executing";
							var u = c(e, t, n);
							if ("normal" === u.type) {
								if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
								return {
									value: u.arg,
									done: n.done
								}
							}
							"throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
						}
					}
				}

				function S(e, t) {
					var n = t.method,
						r = e.iterator[n];
					if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, S(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f;
					var a = c(r, e.iterator, t.arg);
					if ("throw" === a.type) return t.method = "throw", t.arg = a.arg, t.delegate = null, f;
					var o = a.arg;
					return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
				}

				function _(e) {
					var t = {
						tryLoc: e[0]
					};
					1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
				}

				function E(e) {
					var t = e.completion || {};
					t.type = "normal", delete t.arg, e.completion = t
				}

				function C(e) {
					this.tryEntries = [{
						tryLoc: "root"
					}], e.forEach(_, this), this.reset(!0)
				}

				function N(e) {
					if (e) {
						var t = e[o];
						if (t) return t.call(e);
						if ("function" == typeof e.next) return e;
						if (!isNaN(e.length)) {
							var r = -1,
								a = function t() {
									for (; ++r < e.length;)
										if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
									return t.value = void 0, t.done = !0, t
								};
							return a.next = a
						}
					}
					return {
						next: j
					}
				}

				function j() {
					return {
						value: void 0,
						done: !0
					}
				}
				return h.prototype = m, r(b, "constructor", {
					value: m,
					configurable: !0
				}), r(m, "constructor", {
					value: h,
					configurable: !0
				}), h.displayName = u(m, l, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
					var t = "function" == typeof e && e.constructor;
					return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name))
				}, e.mark = function(e) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(e, m) : (e.__proto__ = m, u(e, l, "GeneratorFunction")), e.prototype = Object.create(b), e
				}, e.awrap = function(e) {
					return {
						__await: e
					}
				}, w(k.prototype), u(k.prototype, i, (function() {
					return this
				})), e.AsyncIterator = k, e.async = function(t, n, r, a, o) {
					void 0 === o && (o = Promise);
					var i = new k(s(t, n, r, a), o);
					return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
						return e.done ? e.value : i.next()
					}))
				}, w(b), u(b, l, "Generator"), u(b, o, (function() {
					return this
				})), u(b, "toString", (function() {
					return "[object Generator]"
				})), e.keys = function(e) {
					var t = Object(e),
						n = [];
					for (var r in t) n.push(r);
					return n.reverse(),
						function e() {
							for (; n.length;) {
								var r = n.pop();
								if (r in t) return e.value = r, e.done = !1, e
							}
							return e.done = !0, e
						}
				}, e.values = N, C.prototype = {
					constructor: C,
					reset: function(e) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !e)
							for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
					},
					stop: function() {
						this.done = !0;
						var e = this.tryEntries[0].completion;
						if ("throw" === e.type) throw e.arg;
						return this.rval
					},
					dispatchException: function(e) {
						if (this.done) throw e;
						var t = this;

						function r(n, r) {
							return i.type = "throw", i.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
						}
						for (var a = this.tryEntries.length - 1; a >= 0; --a) {
							var o = this.tryEntries[a],
								i = o.completion;
							if ("root" === o.tryLoc) return r("end");
							if (o.tryLoc <= this.prev) {
								var l = n.call(o, "catchLoc"),
									u = n.call(o, "finallyLoc");
								if (l && u) {
									if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
									if (this.prev < o.finallyLoc) return r(o.finallyLoc)
								} else if (l) {
									if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
								} else {
									if (!u) throw new Error("try statement without catch or finally");
									if (this.prev < o.finallyLoc) return r(o.finallyLoc)
								}
							}
						}
					},
					abrupt: function(e, t) {
						for (var r = this.tryEntries.length - 1; r >= 0; --r) {
							var a = this.tryEntries[r];
							if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
								var o = a;
								break
							}
						}
						o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
						var i = o ? o.completion : {};
						return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(i)
					},
					complete: function(e, t) {
						if ("throw" === e.type) throw e.arg;
						return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
					},
					finish: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), E(n), f
						}
					},
					catch: function(e) {
						for (var t = this.tryEntries.length - 1; t >= 0; --t) {
							var n = this.tryEntries[t];
							if (n.tryLoc === e) {
								var r = n.completion;
								if ("throw" === r.type) {
									var a = r.arg;
									E(n)
								}
								return a
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(e, t, n) {
						return this.delegate = {
							iterator: N(e),
							resultName: t,
							nextLoc: n
						}, "next" === this.method && (this.arg = void 0), f
					}
				}, e
			}

			function cn(e, t, n, r, a, o, i) {
				try {
					var l = e[o](i),
						u = l.value
				} catch (s) {
					return void n(s)
				}
				l.done ? t(u) : Promise.resolve(u).then(r, a)
			}

			function fn(e) {
				return function() {
					var t = this,
						n = arguments;
					return new Promise((function(r, a) {
						var o = e.apply(t, n);

						function i(e) {
							cn(o, r, a, i, l, "next", e)
						}

						function l(e) {
							cn(o, r, a, i, l, "throw", e)
						}
						i(void 0)
					}))
				}
			}
			var dn = ["name"],
				pn = ["_f"],
				hn = ["_f"],
				mn = function(e) {
					return "checkbox" === e.type
				},
				vn = function(e) {
					return e instanceof Date
				},
				gn = function(e) {
					return null == e
				},
				yn = function(e) {
					return "object" === typeof e
				},
				bn = function(e) {
					return !gn(e) && !Array.isArray(e) && yn(e) && !vn(e)
				},
				wn = function(e) {
					return bn(e) && e.target ? mn(e.target) ? e.target.checked : e.target.value : e
				},
				kn = function(e, t) {
					return e.has(function(e) {
						return e.substring(0, e.search(/\.\d+(\.|$)/)) || e
					}(t))
				},
				xn = function(e) {
					var t = e.constructor && e.constructor.prototype;
					return bn(t) && t.hasOwnProperty("isPrototypeOf")
				},
				Sn = "undefined" !== typeof window && "undefined" !== typeof window.HTMLElement && "undefined" !== typeof document;

			function _n(e) {
				var t, n = Array.isArray(e);
				if (e instanceof Date) t = new Date(e);
				else if (e instanceof Set) t = new Set(e);
				else {
					if (Sn && (e instanceof Blob || e instanceof FileList) || !n && !bn(e)) return e;
					if (t = n ? [] : {}, Array.isArray(e) || xn(e))
						for (var r in e) t[r] = _n(e[r]);
					else t = e
				}
				return t
			}
			var En = function(e) {
					return Array.isArray(e) ? e.filter(Boolean) : []
				},
				Cn = function(e) {
					return void 0 === e
				},
				Nn = function(e, t, n) {
					if (!t || !bn(e)) return n;
					var r = En(t.split(/[,[\].]+?/)).reduce((function(e, t) {
						return gn(e) ? e : e[t]
					}), e);
					return Cn(r) || r === e ? Cn(e[t]) ? n : e[t] : r
				},
				jn = {
					BLUR: "blur",
					FOCUS_OUT: "focusout",
					CHANGE: "change"
				},
				Pn = {
					onBlur: "onBlur",
					onChange: "onChange",
					onSubmit: "onSubmit",
					onTouched: "onTouched",
					all: "all"
				},
				Tn = "max",
				On = "min",
				Ln = "maxLength",
				Rn = "minLength",
				zn = "pattern",
				In = "required",
				Dn = "validate",
				Fn = (t.createContext(null), function(e, t, n) {
					var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
						a = {
							defaultValues: t._defaultValues
						},
						o = function(o) {
							Object.defineProperty(a, o, {
								get: function() {
									var a = o;
									return t._proxyFormState[a] !== Pn.all && (t._proxyFormState[a] = !r || Pn.all), n && (n[a] = !0), e[a]
								}
							})
						};
					for (var i in e) o(i);
					return a
				}),
				Mn = function(e) {
					return bn(e) && !Object.keys(e).length
				},
				An = function(e, t, n, r) {
					n(e);
					e.name;
					var a = at(e, dn);
					return Mn(a) || Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((function(e) {
						return t[e] === (!r || Pn.all)
					}))
				},
				Vn = function(e) {
					return Array.isArray(e) ? e : [e]
				};

			function Un(e) {
				var n = t.useRef(e);
				n.current = e, t.useEffect((function() {
					var t = !e.disabled && n.current.subject && n.current.subject.subscribe({
						next: n.current.next
					});
					return function() {
						t && t.unsubscribe()
					}
				}), [e.disabled])
			}
			var Bn = function(e) {
					return "string" === typeof e
				},
				$n = function(e, t, n, r, a) {
					return Bn(e) ? (r && t.watch.add(e), Nn(n, e, a)) : Array.isArray(e) ? e.map((function(e) {
						return r && t.watch.add(e), Nn(n, e)
					})) : (r && (t.watchAll = !0), n)
				};
			var Wn = function(e) {
					return /^\w*$/.test(e)
				},
				Hn = function(e) {
					return En(e.replace(/["|']|\]/g, "").split(/\.|\[/))
				};

			function Qn(e, t, n) {
				for (var r = -1, a = Wn(t) ? [t] : Hn(t), o = a.length, i = o - 1; ++r < o;) {
					var l = a[r],
						u = n;
					if (r !== i) {
						var s = e[l];
						u = bn(s) || Array.isArray(s) ? s : isNaN(+a[r + 1]) ? {} : []
					}
					e[l] = u, e = e[l]
				}
				return e
			}
			var qn = function(e, t, n, r, a) {
					return t ? rt(rt({}, n[e]), {}, {
						types: rt(rt({}, n[e] && n[e].types ? n[e].types : {}), {}, tt({}, r, a || !0))
					}) : {}
				},
				Zn = function e(t, n, r) {
					var a, o = _(r || Object.keys(t));
					try {
						for (o.s(); !(a = o.n()).done;) {
							var i = a.value,
								l = Nn(t, i);
							if (l) {
								var u = l._f,
									s = at(l, pn);
								if (u && n(u.name)) {
									if (u.ref.focus) {
										u.ref.focus();
										break
									}
									if (u.refs && u.refs[0].focus) {
										u.refs[0].focus();
										break
									}
								} else bn(s) && e(s, n)
							}
						}
					} catch (c) {
						o.e(c)
					} finally {
						o.f()
					}
				},
				Kn = function(e) {
					return {
						isOnSubmit: !e || e === Pn.onSubmit,
						isOnBlur: e === Pn.onBlur,
						isOnChange: e === Pn.onChange,
						isOnAll: e === Pn.all,
						isOnTouch: e === Pn.onTouched
					}
				},
				Yn = function(e, t, n) {
					return !n && (t.watchAll || t.watch.has(e) || c(t.watch).some((function(t) {
						return e.startsWith(t) && /^\.\w+/.test(e.slice(t.length))
					})))
				},
				Gn = function(e, t, n) {
					var r = En(Nn(e, n));
					return Qn(r, "root", t[n]), Qn(e, n, r), e
				},
				Xn = function(e) {
					return "boolean" === typeof e
				},
				Jn = function(e) {
					return "file" === e.type
				},
				er = function(e) {
					return "function" === typeof e
				},
				tr = function(e) {
					if (!Sn) return !1;
					var t = e ? e.ownerDocument : 0;
					return e instanceof(t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
				},
				nr = function(e) {
					return Bn(e)
				},
				rr = function(e) {
					return "radio" === e.type
				},
				ar = function(e) {
					return e instanceof RegExp
				},
				or = {
					value: !1,
					isValid: !1
				},
				ir = {
					value: !0,
					isValid: !0
				},
				lr = function(e) {
					if (Array.isArray(e)) {
						if (e.length > 1) {
							var t = e.filter((function(e) {
								return e && e.checked && !e.disabled
							})).map((function(e) {
								return e.value
							}));
							return {
								value: t,
								isValid: !!t.length
							}
						}
						return e[0].checked && !e[0].disabled ? e[0].attributes && !Cn(e[0].attributes.value) ? Cn(e[0].value) || "" === e[0].value ? ir : {
							value: e[0].value,
							isValid: !0
						} : ir : or
					}
					return or
				},
				ur = {
					isValid: !1,
					value: null
				},
				sr = function(e) {
					return Array.isArray(e) ? e.reduce((function(e, t) {
						return t && t.checked && !t.disabled ? {
							isValid: !0,
							value: t.value
						} : e
					}), ur) : ur
				};

			function cr(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "validate";
				if (nr(e) || Array.isArray(e) && e.every(nr) || Xn(e) && !e) return {
					type: n,
					message: nr(e) ? e : "",
					ref: t
				}
			}
			var fr = function(e) {
					return bn(e) && !ar(e) ? e : {
						value: e,
						message: ""
					}
				},
				dr = function() {
					var e = fn(sn().mark((function e(t, n, r, a, o) {
						var i, l, u, s, c, f, d, p, h, m, v, g, y, b, w, k, x, S, _, E, C, N, j, P, T, O, L, R, z, I, D, F, M, A, V, U, B, $, W, H, Q, q, Z, K, Y, G, X, J;
						return sn().wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (i = t._f, l = i.ref, u = i.refs, s = i.required, c = i.maxLength, f = i.minLength, d = i.min, p = i.max, h = i.pattern, m = i.validate, v = i.name, g = i.valueAsNumber, y = i.mount, b = i.disabled, w = Nn(n, v), y && !b) {
										e.next = 4;
										break
									}
									return e.abrupt("return", {});
								case 4:
									if (k = u ? u[0] : l, x = function(e) {
											a && k.reportValidity && (k.setCustomValidity(Xn(e) ? "" : e || ""), k.reportValidity())
										}, S = {}, _ = rr(l), E = mn(l), C = _ || E, N = (g || Jn(l)) && Cn(l.value) && Cn(w) || tr(l) && "" === l.value || "" === w || Array.isArray(w) && !w.length, j = qn.bind(null, v, r, S), P = function(e, t, n) {
											var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ln,
												a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Rn,
												o = e ? t : n;
											S[v] = rt({
												type: e ? r : a,
												message: o,
												ref: l
											}, j(e ? r : a, o))
										}, !(o ? !Array.isArray(w) || !w.length : s && (!C && (N || gn(w)) || Xn(w) && !w || E && !lr(u).isValid || _ && !sr(u).isValid))) {
										e.next = 20;
										break
									}
									if (T = nr(s) ? {
											value: !!s,
											message: s
										} : fr(s), O = T.value, L = T.message, !O) {
										e.next = 20;
										break
									}
									if (S[v] = rt({
											type: In,
											message: L,
											ref: k
										}, j(In, L)), r) {
										e.next = 20;
										break
									}
									return x(L), e.abrupt("return", S);
								case 20:
									if (N || gn(d) && gn(p)) {
										e.next = 29;
										break
									}
									if (I = fr(p), D = fr(d), gn(w) || isNaN(w) ? (M = l.valueAsDate || new Date(w), A = function(e) {
											return new Date((new Date).toDateString() + " " + e)
										}, V = "time" == l.type, U = "week" == l.type, Bn(I.value) && w && (R = V ? A(w) > A(I.value) : U ? w > I.value : M > new Date(I.value)), Bn(D.value) && w && (z = V ? A(w) < A(D.value) : U ? w < D.value : M < new Date(D.value))) : (F = l.valueAsNumber || (w ? +w : w), gn(I.value) || (R = F > I.value), gn(D.value) || (z = F < D.value)), !R && !z) {
										e.next = 29;
										break
									}
									if (P(!!R, I.message, D.message, Tn, On), r) {
										e.next = 29;
										break
									}
									return x(S[v].message), e.abrupt("return", S);
								case 29:
									if (!c && !f || N || !(Bn(w) || o && Array.isArray(w))) {
										e.next = 39;
										break
									}
									if (B = fr(c), $ = fr(f), W = !gn(B.value) && w.length > +B.value, H = !gn($.value) && w.length < +$.value, !W && !H) {
										e.next = 39;
										break
									}
									if (P(W, B.message, $.message), r) {
										e.next = 39;
										break
									}
									return x(S[v].message), e.abrupt("return", S);
								case 39:
									if (!h || N || !Bn(w)) {
										e.next = 46;
										break
									}
									if (Q = fr(h), q = Q.value, Z = Q.message, !ar(q) || w.match(q)) {
										e.next = 46;
										break
									}
									if (S[v] = rt({
											type: zn,
											message: Z,
											ref: l
										}, j(zn, Z)), r) {
										e.next = 46;
										break
									}
									return x(Z), e.abrupt("return", S);
								case 46:
									if (!m) {
										e.next = 80;
										break
									}
									if (!er(m)) {
										e.next = 59;
										break
									}
									return e.next = 50, m(w, n);
								case 50:
									if (K = e.sent, !(Y = cr(K, k))) {
										e.next = 57;
										break
									}
									if (S[v] = rt(rt({}, Y), j(Dn, Y.message)), r) {
										e.next = 57;
										break
									}
									return x(Y.message), e.abrupt("return", S);
								case 57:
									e.next = 80;
									break;
								case 59:
									if (!bn(m)) {
										e.next = 80;
										break
									}
									G = {}, e.t0 = sn().keys(m);
								case 62:
									if ((e.t1 = e.t0()).done) {
										e.next = 76;
										break
									}
									if (X = e.t1.value, Mn(G) || r) {
										e.next = 66;
										break
									}
									return e.abrupt("break", 76);
								case 66:
									return e.t2 = cr, e.next = 69, m[X](w, n);
								case 69:
									e.t3 = e.sent, e.t4 = k, e.t5 = X, (J = (0, e.t2)(e.t3, e.t4, e.t5)) && (G = rt(rt({}, J), j(X, J.message)), x(J.message), r && (S[v] = G)), e.next = 62;
									break;
								case 76:
									if (Mn(G)) {
										e.next = 80;
										break
									}
									if (S[v] = rt({
											ref: k
										}, G), r) {
										e.next = 80;
										break
									}
									return e.abrupt("return", S);
								case 80:
									return x(!0), e.abrupt("return", S);
								case 82:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(t, n, r, a, o) {
						return e.apply(this, arguments)
					}
				}();

			function pr(e, t) {
				var n = Array.isArray(t) ? t : Wn(t) ? [t] : Hn(t),
					r = 1 === n.length ? e : function(e, t) {
						for (var n = t.slice(0, -1).length, r = 0; r < n;) e = Cn(e) ? r++ : e[t[r++]];
						return e
					}(e, n),
					a = n.length - 1,
					o = n[a];
				return r && delete r[o], 0 !== a && (bn(r) && Mn(r) || Array.isArray(r) && function(e) {
					for (var t in e)
						if (!Cn(e[t])) return !1;
					return !0
				}(r)) && pr(e, n.slice(0, -1)), e
			}

			function hr() {
				var e = [];
				return {
					get observers() {
						return e
					},
					next: function(t) {
						var n, r = _(e);
						try {
							for (r.s(); !(n = r.n()).done;) {
								var a = n.value;
								a.next && a.next(t)
							}
						} catch (o) {
							r.e(o)
						} finally {
							r.f()
						}
					},
					subscribe: function(t) {
						return e.push(t), {
							unsubscribe: function() {
								e = e.filter((function(e) {
									return e !== t
								}))
							}
						}
					},
					unsubscribe: function() {
						e = []
					}
				}
			}
			var mr = function(e) {
				return gn(e) || !yn(e)
			};

			function vr(e, t) {
				if (mr(e) || mr(t)) return e === t;
				if (vn(e) && vn(t)) return e.getTime() === t.getTime();
				var n = Object.keys(e),
					r = Object.keys(t);
				if (n.length !== r.length) return !1;
				for (var a = 0, o = n; a < o.length; a++) {
					var i = o[a],
						l = e[i];
					if (!r.includes(i)) return !1;
					if ("ref" !== i) {
						var u = t[i];
						if (vn(l) && vn(u) || bn(l) && bn(u) || Array.isArray(l) && Array.isArray(u) ? !vr(l, u) : l !== u) return !1
					}
				}
				return !0
			}
			var gr = function(e) {
					return "select-multiple" === e.type
				},
				yr = function(e) {
					return rr(e) || mn(e)
				},
				br = function(e) {
					return tr(e) && e.isConnected
				},
				wr = function(e) {
					for (var t in e)
						if (er(e[t])) return !0;
					return !1
				};

			function kr(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = Array.isArray(e);
				if (bn(e) || n)
					for (var r in e) Array.isArray(e[r]) || bn(e[r]) && !wr(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, kr(e[r], t[r])) : gn(e[r]) || (t[r] = !0);
				return t
			}

			function xr(e, t, n) {
				var r = Array.isArray(e);
				if (bn(e) || r)
					for (var a in e) Array.isArray(e[a]) || bn(e[a]) && !wr(e[a]) ? Cn(t) || mr(n[a]) ? n[a] = Array.isArray(e[a]) ? kr(e[a], []) : rt({}, kr(e[a])) : xr(e[a], gn(t) ? {} : t[a], n[a]) : n[a] = !vr(e[a], t[a]);
				return n
			}
			var Sr = function(e, t) {
					return xr(e, t, kr(t))
				},
				_r = function(e, t) {
					var n = t.valueAsNumber,
						r = t.valueAsDate,
						a = t.setValueAs;
					return Cn(e) ? e : n ? "" === e ? NaN : e ? +e : e : r && Bn(e) ? new Date(e) : a ? a(e) : e
				};

			function Er(e) {
				var t = e.ref;
				if (!(e.refs ? e.refs.every((function(e) {
						return e.disabled
					})) : t.disabled)) return Jn(t) ? t.files : rr(t) ? sr(e.refs).value : gr(t) ? c(t.selectedOptions).map((function(e) {
					return e.value
				})) : mn(t) ? lr(e.refs).value : _r(Cn(t.value) ? e.ref.value : t.value, e)
			}
			var Cr = function(e, t, n, r) {
					var a, o = {},
						i = _(e);
					try {
						for (i.s(); !(a = i.n()).done;) {
							var l = a.value,
								u = Nn(t, l);
							u && Qn(o, l, u._f)
						}
					} catch (s) {
						i.e(s)
					} finally {
						i.f()
					}
					return {
						criteriaMode: n,
						names: c(e),
						fields: o,
						shouldUseNativeValidation: r
					}
				},
				Nr = function(e) {
					return Cn(e) ? e : ar(e) ? e.source : bn(e) ? ar(e.value) ? e.value.source : e.value : e
				},
				jr = function(e) {
					return e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate)
				};

			function Pr(e, t, n) {
				var r = Nn(e, n);
				if (r || Wn(n)) return {
					error: r,
					name: n
				};
				for (var a = n.split("."); a.length;) {
					var o = a.join("."),
						i = Nn(t, o),
						l = Nn(e, o);
					if (i && !Array.isArray(i) && n !== o) return {
						name: n
					};
					if (l && l.type) return {
						name: o,
						error: l
					};
					a.pop()
				}
				return {
					name: n
				}
			}
			var Tr = function(e, t, n, r, a) {
					return !a.isOnAll && (!n && a.isOnTouch ? !(t || e) : (n ? r.isOnBlur : a.isOnBlur) ? !e : !(n ? r.isOnChange : a.isOnChange) || e)
				},
				Or = function(e, t) {
					return !En(Nn(e, t)).length && pr(e, t)
				},
				Lr = {
					mode: Pn.onSubmit,
					reValidateMode: Pn.onChange,
					shouldFocusError: !0
				};

			function Rr() {
				var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					n = arguments.length > 1 ? arguments[1] : void 0,
					r = rt(rt({}, Lr), t),
					a = {
						submitCount: 0,
						isDirty: !1,
						isLoading: er(r.defaultValues),
						isValidating: !1,
						isSubmitted: !1,
						isSubmitting: !1,
						isSubmitSuccessful: !1,
						isValid: !1,
						touchedFields: {},
						dirtyFields: {},
						errors: {}
					},
					o = {},
					i = (bn(r.defaultValues) || bn(r.values)) && _n(r.defaultValues || r.values) || {},
					l = r.shouldUnregister ? {} : _n(i),
					u = {
						action: !1,
						mount: !1,
						watch: !1
					},
					s = {
						mount: new Set,
						unMount: new Set,
						array: new Set,
						watch: new Set
					},
					f = 0,
					d = {
						isDirty: !1,
						dirtyFields: !1,
						touchedFields: !1,
						isValidating: !1,
						isValid: !1,
						errors: !1
					},
					p = {
						values: hr(),
						array: hr(),
						state: hr()
					},
					h = t.resetOptions && t.resetOptions.keepDirtyValues,
					m = Kn(r.mode),
					v = Kn(r.reValidateMode),
					g = r.criteriaMode === Pn.all,
					y = function() {
						var e = fn(sn().mark((function e(t) {
							var n;
							return sn().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (!d.isValid && !t) {
											e.next = 14;
											break
										}
										if (!r.resolver) {
											e.next = 9;
											break
										}
										return e.t1 = Mn, e.next = 5, S();
									case 5:
										e.t2 = e.sent.errors, e.t0 = (0, e.t1)(e.t2), e.next = 12;
										break;
									case 9:
										return e.next = 11, C(o, !0);
									case 11:
										e.t0 = e.sent;
									case 12:
										(n = e.t0) !== a.isValid && p.state.next({
											isValid: n
										});
									case 14:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					b = function(e) {
						return d.isValidating && p.state.next({
							isValidating: e
						})
					},
					w = function(e, t, n, r) {
						var a = Nn(o, e);
						if (a) {
							var s = Nn(l, e, Cn(n) ? Nn(i, e) : n);
							Cn(s) || r && r.defaultChecked || t ? Qn(l, e, t ? s : Er(a._f)) : P(e, s), u.mount && y()
						}
					},
					k = function(e, t, n, r, o) {
						var l = !1,
							u = !1,
							s = {
								name: e
							};
						if (!n || r) {
							d.isDirty && (u = a.isDirty, a.isDirty = s.isDirty = N(), l = u !== s.isDirty);
							var c = vr(Nn(i, e), t);
							u = Nn(a.dirtyFields, e), c ? pr(a.dirtyFields, e) : Qn(a.dirtyFields, e, !0), s.dirtyFields = a.dirtyFields, l = l || d.dirtyFields && u !== !c
						}
						if (n) {
							var f = Nn(a.touchedFields, e);
							f || (Qn(a.touchedFields, e, n), s.touchedFields = a.touchedFields, l = l || d.touchedFields && f !== n)
						}
						return l && o && p.state.next(s), l ? s : {}
					},
					x = function(n, r, o, i) {
						var l, u = Nn(a.errors, n),
							s = d.isValid && Xn(r) && a.isValid !== r;
						if (t.delayError && o ? (l = function() {
								return function(e, t) {
									Qn(a.errors, e, t), p.state.next({
										errors: a.errors
									})
								}(n, o)
							}, (e = function(e) {
								clearTimeout(f), f = setTimeout(l, e)
							})(t.delayError)) : (clearTimeout(f), e = null, o ? Qn(a.errors, n, o) : pr(a.errors, n)), (o ? !vr(u, o) : u) || !Mn(i) || s) {
							var c = rt(rt(rt({}, i), s && Xn(r) ? {
								isValid: r
							} : {}), {}, {
								errors: a.errors,
								name: n
							});
							a = rt(rt({}, a), c), p.state.next(c)
						}
						b(!1)
					},
					S = function() {
						var e = fn(sn().mark((function e(t) {
							return sn().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.abrupt("return", r.resolver(l, r.context, Cr(t || s.mount, o, r.criteriaMode, r.shouldUseNativeValidation)));
									case 1:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					E = function() {
						var e = fn(sn().mark((function e(t) {
							var n, r, o, i, l, u;
							return sn().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, S();
									case 2:
										if (n = e.sent, r = n.errors, t) {
											o = _(t);
											try {
												for (o.s(); !(i = o.n()).done;) l = i.value, (u = Nn(r, l)) ? Qn(a.errors, l, u) : pr(a.errors, l)
											} catch (s) {
												o.e(s)
											} finally {
												o.f()
											}
										} else a.errors = r;
										return e.abrupt("return", r);
									case 6:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					C = function() {
						var e = fn(sn().mark((function e(t, n) {
							var o, i, u, c, f, d, p, h = arguments;
							return sn().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										o = h.length > 2 && void 0 !== h[2] ? h[2] : {
											valid: !0
										}, e.t0 = sn().keys(t);
									case 2:
										if ((e.t1 = e.t0()).done) {
											e.next = 23;
											break
										}
										if (i = e.t1.value, !(u = t[i])) {
											e.next = 21;
											break
										}
										if (c = u._f, f = at(u, hn), !c) {
											e.next = 17;
											break
										}
										return d = s.array.has(c.name), e.next = 11, dr(u, l, g, r.shouldUseNativeValidation && !n, d);
									case 11:
										if (!(p = e.sent)[c.name]) {
											e.next = 16;
											break
										}
										if (o.valid = !1, !n) {
											e.next = 16;
											break
										}
										return e.abrupt("break", 23);
									case 16:
										!n && (Nn(p, c.name) ? d ? Gn(a.errors, p, c.name) : Qn(a.errors, c.name, p[c.name]) : pr(a.errors, c.name));
									case 17:
										if (e.t2 = f, !e.t2) {
											e.next = 21;
											break
										}
										return e.next = 21, C(f, n, o);
									case 21:
										e.next = 2;
										break;
									case 23:
										return e.abrupt("return", o.valid);
									case 24:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t, n) {
							return e.apply(this, arguments)
						}
					}(),
					N = function(e, t) {
						return e && t && Qn(l, e, t), !vr(z(), i)
					},
					j = function(e, t, n) {
						return $n(e, s, rt({}, u.mount ? l : Cn(t) ? i : Bn(e) ? tt({}, e, t) : t), n, t)
					},
					P = function(e, t) {
						var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
							r = Nn(o, e),
							a = t;
						if (r) {
							var i = r._f;
							i && (!i.disabled && Qn(l, e, _r(t, i)), a = tr(i.ref) && gn(t) ? "" : t, gr(i.ref) ? c(i.ref.options).forEach((function(e) {
								return e.selected = a.includes(e.value)
							})) : i.refs ? mn(i.ref) ? i.refs.length > 1 ? i.refs.forEach((function(e) {
								return (!e.defaultChecked || !e.disabled) && (e.checked = Array.isArray(a) ? !!a.find((function(t) {
									return t === e.value
								})) : a === e.value)
							})) : i.refs[0] && (i.refs[0].checked = !!a) : i.refs.forEach((function(e) {
								return e.checked = e.value === a
							})) : Jn(i.ref) ? i.ref.value = "" : (i.ref.value = a, i.ref.type || p.values.next({
								name: e,
								values: rt({}, l)
							})))
						}(n.shouldDirty || n.shouldTouch) && k(e, a, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && R(e)
					},
					T = function e(t, n, r) {
						for (var a in n) {
							var i = n[a],
								l = "".concat(t, ".").concat(a),
								u = Nn(o, l);
							!s.array.has(t) && mr(i) && (!u || u._f) || vn(i) ? P(l, i, r) : e(l, i, r)
						}
					},
					O = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
							c = Nn(o, e),
							f = s.array.has(e),
							h = _n(t);
						Qn(l, e, h), f ? (p.array.next({
							name: e,
							values: rt({}, l)
						}), (d.isDirty || d.dirtyFields) && r.shouldDirty && p.state.next({
							name: e,
							dirtyFields: Sr(i, l),
							isDirty: N(e, h)
						})) : !c || c._f || gn(h) ? P(e, h, r) : T(e, h, r), Yn(e, s) && p.state.next(rt({}, a)), p.values.next({
							name: e,
							values: rt({}, l)
						}), !u.mount && n()
					},
					L = function() {
						var t = fn(sn().mark((function t(n) {
							var i, u, c, f, h, w, _, E, N, j, P, T, O, L, z, I, D;
							return sn().wrap((function(t) {
								for (;;) switch (t.prev = t.next) {
									case 0:
										if (i = n.target, u = i.name, c = !0, f = Nn(o, u), h = function() {
												return i.type ? Er(f._f) : wn(n)
											}, !f) {
											t.next = 47;
											break
										}
										if (E = h(), N = n.type === jn.BLUR || n.type === jn.FOCUS_OUT, j = !jr(f._f) && !r.resolver && !Nn(a.errors, u) && !f._f.deps || Tr(N, Nn(a.touchedFields, u), a.isSubmitted, v, m), P = Yn(u, s, N), Qn(l, u, E), N ? (f._f.onBlur && f._f.onBlur(n), e && e(0)) : f._f.onChange && f._f.onChange(n), T = k(u, E, N, !1), O = !Mn(T) || P, !N && p.values.next({
												name: u,
												type: n.type,
												values: rt({}, l)
											}), !j) {
											t.next = 18;
											break
										}
										return d.isValid && y(), t.abrupt("return", O && p.state.next(rt({
											name: u
										}, P ? {} : T)));
									case 18:
										if (!N && P && p.state.next(rt({}, a)), b(!0), !r.resolver) {
											t.next = 32;
											break
										}
										return t.next = 23, S([u]);
									case 23:
										L = t.sent, z = L.errors, I = Pr(a.errors, o, u), D = Pr(z, o, I.name || u), w = D.error, u = D.name, _ = Mn(z), t.next = 46;
										break;
									case 32:
										return t.next = 34, dr(f, l, g, r.shouldUseNativeValidation);
									case 34:
										if (t.t0 = u, w = t.sent[t.t0], !(c = isNaN(E) || E === Nn(l, u, E))) {
											t.next = 46;
											break
										}
										if (!w) {
											t.next = 42;
											break
										}
										_ = !1, t.next = 46;
										break;
									case 42:
										if (!d.isValid) {
											t.next = 46;
											break
										}
										return t.next = 45, C(o, !0);
									case 45:
										_ = t.sent;
									case 46:
										c && (f._f.deps && R(f._f.deps), x(u, _, w, T));
									case 47:
									case "end":
										return t.stop()
								}
							}), t)
						})));
						return function(e) {
							return t.apply(this, arguments)
						}
					}(),
					R = function() {
						var e = fn(sn().mark((function e(t) {
							var n, i, l, u, c, f = arguments;
							return sn().wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if (n = f.length > 1 && void 0 !== f[1] ? f[1] : {}, u = Vn(t), b(!0), !r.resolver) {
											e.next = 11;
											break
										}
										return e.next = 6, E(Cn(t) ? t : u);
									case 6:
										c = e.sent, i = Mn(c), l = t ? !u.some((function(e) {
											return Nn(c, e)
										})) : i, e.next = 21;
										break;
									case 11:
										if (!t) {
											e.next = 18;
											break
										}
										return e.next = 14, Promise.all(u.map(function() {
											var e = fn(sn().mark((function e(t) {
												var n;
												return sn().wrap((function(e) {
													for (;;) switch (e.prev = e.next) {
														case 0:
															return n = Nn(o, t), e.next = 3, C(n && n._f ? tt({}, t, n) : n);
														case 3:
															return e.abrupt("return", e.sent);
														case 4:
														case "end":
															return e.stop()
													}
												}), e)
											})));
											return function(t) {
												return e.apply(this, arguments)
											}
										}()));
									case 14:
										((l = e.sent.every(Boolean)) || a.isValid) && y(), e.next = 21;
										break;
									case 18:
										return e.next = 20, C(o);
									case 20:
										l = i = e.sent;
									case 21:
										return p.state.next(rt(rt(rt({}, !Bn(t) || d.isValid && i !== a.isValid ? {} : {
											name: t
										}), r.resolver || !t ? {
											isValid: i
										} : {}), {}, {
											errors: a.errors,
											isValidating: !1
										})), n.shouldFocus && !l && Zn(o, (function(e) {
											return e && Nn(a.errors, e)
										}), t ? u : s.mount), e.abrupt("return", l);
									case 24:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(t) {
							return e.apply(this, arguments)
						}
					}(),
					z = function(e) {
						var t = rt(rt({}, i), u.mount ? l : {});
						return Cn(e) ? t : Bn(e) ? Nn(t, e) : e.map((function(e) {
							return Nn(t, e)
						}))
					},
					I = function(e, t) {
						return {
							invalid: !!Nn((t || a).errors, e),
							isDirty: !!Nn((t || a).dirtyFields, e),
							isTouched: !!Nn((t || a).touchedFields, e),
							error: Nn((t || a).errors, e)
						}
					},
					D = function(e) {
						var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							u = _(e ? Vn(e) : s.mount);
						try {
							for (u.s(); !(t = u.n()).done;) {
								var c = t.value;
								s.mount.delete(c), s.array.delete(c), n.keepValue || (pr(o, c), pr(l, c)), !n.keepError && pr(a.errors, c), !n.keepDirty && pr(a.dirtyFields, c), !n.keepTouched && pr(a.touchedFields, c), !r.shouldUnregister && !n.keepDefaultValue && pr(i, c)
							}
						} catch (f) {
							u.e(f)
						} finally {
							u.f()
						}
						p.values.next({
							values: rt({}, l)
						}), p.state.next(rt(rt({}, a), n.keepDirty ? {
							isDirty: N()
						} : {})), !n.keepIsValid && y()
					},
					F = function e(t) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							a = Nn(o, t),
							f = Xn(n.disabled);
						return Qn(o, t, rt(rt({}, a || {}), {}, {
							_f: rt(rt({}, a && a._f ? a._f : {
								ref: {
									name: t
								}
							}), {}, {
								name: t,
								mount: !0
							}, n)
						})), s.mount.add(t), a ? f && Qn(l, t, n.disabled ? void 0 : Nn(l, t, Er(a._f))) : w(t, !0, n.value), rt(rt(rt({}, f ? {
							disabled: n.disabled
						} : {}), r.shouldUseNativeValidation ? {
							required: !!n.required,
							min: Nr(n.min),
							max: Nr(n.max),
							minLength: Nr(n.minLength),
							maxLength: Nr(n.maxLength),
							pattern: Nr(n.pattern)
						} : {}), {}, {
							name: t,
							onChange: L,
							onBlur: L,
							ref: function(e) {
								function t(t) {
									return e.apply(this, arguments)
								}
								return t.toString = function() {
									return e.toString()
								}, t
							}((function(l) {
								if (l) {
									e(t, n), a = Nn(o, t);
									var f = Cn(l.value) && l.querySelectorAll && l.querySelectorAll("input,select,textarea")[0] || l,
										d = yr(f),
										p = a._f.refs || [];
									if (d ? p.find((function(e) {
											return e === f
										})) : f === a._f.ref) return;
									Qn(o, t, {
										_f: rt(rt({}, a._f), d ? {
											refs: [].concat(c(p.filter(br)), [f], c(Array.isArray(Nn(i, t)) ? [{}] : [])),
											ref: {
												type: f.type,
												name: t
											}
										} : {
											ref: f
										})
									}), w(t, !1, void 0, f)
								} else(a = Nn(o, t, {}))._f && (a._f.mount = !1), (r.shouldUnregister || n.shouldUnregister) && (!kn(s.array, t) || !u.action) && s.unMount.add(t)
							}))
						})
					},
					M = function() {
						return r.shouldFocusError && Zn(o, (function(e) {
							return e && Nn(a.errors, e)
						}), s.mount)
					},
					A = function(e) {
						var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							c = e || i,
							f = _n(c),
							m = e && !Mn(e) ? f : i;
						if (r.keepDefaultValues || (i = c), !r.keepValues) {
							if (r.keepDirtyValues || h) {
								var v, g = _(s.mount);
								try {
									for (g.s(); !(v = g.n()).done;) {
										var y = v.value;
										Nn(a.dirtyFields, y) ? Qn(m, y, Nn(l, y)) : O(y, Nn(m, y))
									}
								} catch (C) {
									g.e(C)
								} finally {
									g.f()
								}
							} else {
								if (Sn && Cn(e)) {
									var b, w = _(s.mount);
									try {
										for (w.s(); !(b = w.n()).done;) {
											var k = b.value,
												x = Nn(o, k);
											if (x && x._f) {
												var S = Array.isArray(x._f.refs) ? x._f.refs[0] : x._f.ref;
												if (tr(S)) {
													var E = S.closest("form");
													if (E) {
														E.reset();
														break
													}
												}
											}
										}
									} catch (C) {
										w.e(C)
									} finally {
										w.f()
									}
								}
								o = {}
							}
							l = t.shouldUnregister ? r.keepDefaultValues ? _n(i) : {} : f, p.array.next({
								values: rt({}, m)
							}), p.values.next({
								values: rt({}, m)
							})
						}
						s = {
							mount: new Set,
							unMount: new Set,
							array: new Set,
							watch: new Set,
							watchAll: !1,
							focus: ""
						}, !u.mount && n(), u.mount = !d.isValid || !!r.keepIsValid, u.watch = !!t.shouldUnregister, p.state.next({
							submitCount: r.keepSubmitCount ? a.submitCount : 0,
							isDirty: r.keepDirty ? a.isDirty : !(!r.keepDefaultValues || vr(e, i)),
							isSubmitted: !!r.keepIsSubmitted && a.isSubmitted,
							dirtyFields: r.keepDirtyValues ? a.dirtyFields : r.keepDefaultValues && e ? Sr(i, e) : {},
							touchedFields: r.keepTouched ? a.touchedFields : {},
							errors: r.keepErrors ? a.errors : {},
							isSubmitting: !1,
							isSubmitSuccessful: !1
						})
					},
					V = function(e, t) {
						return A(er(e) ? e(l) : e, t)
					};
				return {
					control: {
						register: F,
						unregister: D,
						getFieldState: I,
						_executeSchema: S,
						_getWatch: j,
						_getDirty: N,
						_updateValid: y,
						_removeUnmounted: function() {
							var e, t = _(s.unMount);
							try {
								for (t.s(); !(e = t.n()).done;) {
									var n = e.value,
										r = Nn(o, n);
									r && (r._f.refs ? r._f.refs.every((function(e) {
										return !br(e)
									})) : !br(r._f.ref)) && D(n)
								}
							} catch (a) {
								t.e(a)
							} finally {
								t.f()
							}
							s.unMount = new Set
						},
						_updateFieldArray: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
								n = arguments.length > 2 ? arguments[2] : void 0,
								r = arguments.length > 3 ? arguments[3] : void 0,
								s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
								c = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
							if (r && n) {
								if (u.action = !0, c && Array.isArray(Nn(o, e))) {
									var f = n(Nn(o, e), r.argA, r.argB);
									s && Qn(o, e, f)
								}
								if (c && Array.isArray(Nn(a.errors, e))) {
									var h = n(Nn(a.errors, e), r.argA, r.argB);
									s && Qn(a.errors, e, h), Or(a.errors, e)
								}
								if (d.touchedFields && c && Array.isArray(Nn(a.touchedFields, e))) {
									var m = n(Nn(a.touchedFields, e), r.argA, r.argB);
									s && Qn(a.touchedFields, e, m)
								}
								d.dirtyFields && (a.dirtyFields = Sr(i, l)), p.state.next({
									name: e,
									isDirty: N(e, t),
									dirtyFields: a.dirtyFields,
									errors: a.errors,
									isValid: a.isValid
								})
							} else Qn(l, e, t)
						},
						_getFieldArray: function(e) {
							return En(Nn(u.mount ? l : i, e, t.shouldUnregister ? Nn(i, e, []) : []))
						},
						_reset: A,
						_resetDefaultValues: function() {
							return er(r.defaultValues) && r.defaultValues().then((function(e) {
								V(e, r.resetOptions), p.state.next({
									isLoading: !1
								})
							}))
						},
						_updateFormState: function(e) {
							a = rt(rt({}, a), e)
						},
						_subjects: p,
						_proxyFormState: d,
						get _fields() {
							return o
						},
						get _formValues() {
							return l
						},
						get _state() {
							return u
						},
						set _state(e) {
							u = e
						},
						get _defaultValues() {
							return i
						},
						get _names() {
							return s
						},
						set _names(e) {
							s = e
						},
						get _formState() {
							return a
						},
						set _formState(e) {
							a = e
						},
						get _options() {
							return r
						},
						set _options(e) {
							r = rt(rt({}, r), e)
						}
					},
					trigger: R,
					register: F,
					handleSubmit: function(e, t) {
						return function() {
							var n = fn(sn().mark((function n(i) {
								var u, s, c, f;
								return sn().wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											if (i && (i.preventDefault && i.preventDefault(), i.persist && i.persist()), u = _n(l), p.state.next({
													isSubmitting: !0
												}), !r.resolver) {
												n.next = 13;
												break
											}
											return n.next = 6, S();
										case 6:
											s = n.sent, c = s.errors, f = s.values, a.errors = c, u = f, n.next = 15;
											break;
										case 13:
											return n.next = 15, C(o);
										case 15:
											if (pr(a.errors, "root"), !Mn(a.errors)) {
												n.next = 22;
												break
											}
											return p.state.next({
												errors: {}
											}), n.next = 20, e(u, i);
										case 20:
											n.next = 27;
											break;
										case 22:
											if (!t) {
												n.next = 25;
												break
											}
											return n.next = 25, t(rt({}, a.errors), i);
										case 25:
											M(), setTimeout(M);
										case 27:
											p.state.next({
												isSubmitted: !0,
												isSubmitting: !1,
												isSubmitSuccessful: Mn(a.errors),
												submitCount: a.submitCount + 1,
												errors: a.errors
											});
										case 28:
										case "end":
											return n.stop()
									}
								}), n)
							})));
							return function(e) {
								return n.apply(this, arguments)
							}
						}()
					},
					watch: function(e, t) {
						return er(e) ? p.values.subscribe({
							next: function(n) {
								return e(j(void 0, t), n)
							}
						}) : j(e, t, !0)
					},
					setValue: O,
					getValues: z,
					reset: V,
					resetField: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
						Nn(o, e) && (Cn(t.defaultValue) ? O(e, Nn(i, e)) : (O(e, t.defaultValue), Qn(i, e, t.defaultValue)), t.keepTouched || pr(a.touchedFields, e), t.keepDirty || (pr(a.dirtyFields, e), a.isDirty = t.defaultValue ? N(e, Nn(i, e)) : N()), t.keepError || (pr(a.errors, e), d.isValid && y()), p.state.next(rt({}, a)))
					},
					clearErrors: function(e) {
						e && Vn(e).forEach((function(e) {
							return pr(a.errors, e)
						})), p.state.next({
							errors: e ? a.errors : {}
						})
					},
					unregister: D,
					setError: function(e, t, n) {
						var r = (Nn(o, e, {
							_f: {}
						})._f || {}).ref;
						Qn(a.errors, e, rt(rt({}, t), {}, {
							ref: r
						})), p.state.next({
							name: e,
							errors: a.errors,
							isValid: !1
						}), n && n.shouldFocus && r && r.focus && r.focus()
					},
					setFocus: function(e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							n = Nn(o, e),
							r = n && n._f;
						if (r) {
							var a = r.refs ? r.refs[0] : r.ref;
							a.focus && (a.focus(), t.shouldSelect && a.select())
						}
					},
					getFieldState: I
				}
			}
			var zr = Object.getOwnPropertySymbols,
				Ir = Object.prototype.hasOwnProperty,
				Dr = Object.prototype.propertyIsEnumerable,
				Fr = function(e, n) {
					var r = n.storage,
						a = n.watch,
						o = n.setValue,
						i = n.exclude,
						l = void 0 === i ? [] : i,
						s = n.onDataRestored,
						c = n.validate,
						f = void 0 !== c && c,
						d = n.dirty,
						p = void 0 !== d && d,
						h = n.onTimeout,
						m = n.timeout,
						v = a(),
						g = function() {
							return r || window.sessionStorage
						};
					return (0, t.useEffect)((function() {
						var t = g().getItem(e);
						if (t) {
							var n = JSON.parse(t),
								r = n._timestamp,
								a = void 0 === r ? null : r,
								i = function(e, t) {
									var n = {};
									for (var r in e) Ir.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
									if (null != e && zr) {
										var a, o = _(zr(e));
										try {
											for (o.s(); !(a = o.n()).done;) r = a.value, t.indexOf(r) < 0 && Dr.call(e, r) && (n[r] = e[r])
										} catch (i) {
											o.e(i)
										} finally {
											o.f()
										}
									}
									return n
								}(n, ["_timestamp"]),
								u = {},
								c = Date.now();
							if (m && c - a > m) return h && h(), void g().removeItem(e);
							Object.keys(i).forEach((function(e) {
								!l.includes(e) && (u[e] = i[e], o(e, i[e], {
									shouldValidate: f,
									shouldDirty: p
								}))
							})), s && s(u)
						}
					}), [r, e, s, o]), (0, t.useEffect)((function() {
						var t = l.length ? Object.entries(v).filter((function(e) {
							var t = u(e, 1)[0];
							return !l.includes(t)
						})).reduce((function(e, t) {
							var n = u(t, 2),
								r = n[0],
								a = n[1];
							return Object.assign(e, tt({}, r, a))
						}), {}) : Object.assign({}, v);
						Object.entries(t).length && (void 0 !== m && (t._timestamp = Date.now()), g().setItem(e, JSON.stringify(t)))
					}), [v, m]), {
						clear: function() {
							return g().removeItem(e)
						}
					}
				},
				Mr = {
					requiredField: {
						ptbr: "Esse campo é obrigatório",
						en: "This field is required"
					},
					shortName: {
						ptbr: "O nome é muito curto",
						en: "Name is too short"
					},
					invalidName: {
						ptbr: "Nome inválido",
						en: "Invalid name"
					},
					invalidEmail: {
						ptbr: "Email inválido",
						en: "Invalid email"
					},
					fetchError: {
						ptbr: "Mensagem não enviada",
						en: "Message not sent"
					}
				},
				Ar = {
					name: {
						ptbr: "Nome",
						en: "Name"
					},
					message: {
						ptbr: "Mensagem",
						en: "Message"
					},
					namePlaceholder: {
						ptbr: "Seu nome",
						en: "Your name"
					},
					emailPlaceholder: {
						ptbr: "Seu email",
						en: "Your email"
					},
					messagePlaceholder: {
						ptbr: "Sua mensagem",
						en: "Your message"
					},
					button: {
						ptbr: "Enviar",
						en: "Submit"
					}
				},
				Vr = function() {
					return (0, Ye.jsx)("div", {
						className: "spinner"
					})
				};
			var Ur = function() {
					var e, n, r, a, o, i = (0, t.useContext)(Ge),
						l = i.lang,
						s = i.theme,
						c = (0, t.useContext)(Xe),
						f = c.isSubmitting,
						d = c.setIsSubmitting,
						p = function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
								n = t.useRef(),
								r = u(t.useState({
									isDirty: !1,
									isValidating: !1,
									isLoading: er(e.defaultValues),
									isSubmitted: !1,
									isSubmitting: !1,
									isSubmitSuccessful: !1,
									isValid: !1,
									submitCount: 0,
									dirtyFields: {},
									touchedFields: {},
									errors: {},
									defaultValues: er(e.defaultValues) ? void 0 : e.defaultValues
								}), 2),
								a = r[0],
								o = r[1];
							n.current || (n.current = rt(rt({}, Rr(e, (function() {
								return o((function(e) {
									return rt({}, e)
								}))
							}))), {}, {
								formState: a
							}));
							var i = n.current.control;
							return i._options = e, Un({
								subject: i._subjects.state,
								next: function(e) {
									An(e, i._proxyFormState, i._updateFormState, !0) && o(rt({}, i._formState))
								}
							}), t.useEffect((function() {
								e.values && !vr(e.values, i._defaultValues) ? i._reset(e.values, i._options.resetOptions) : i._resetDefaultValues()
							}), [e.values, i]), t.useEffect((function() {
								i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next(rt({}, i._formState))), i._removeUnmounted()
							})), n.current.formState = Fn(a, i), n.current
						}({}),
						h = p.register,
						m = p.handleSubmit,
						v = p.watch,
						g = p.reset,
						y = p.setValue,
						b = p.formState.errors;
					Fr("formValues", {
						watch: v,
						setValue: y
					});
					var w = {
						settings: {
							position: "bottom-center",
							hideProgressBar: !0,
							draggable: !0,
							transition: ht({
								enter: "animate__animated animate__slideInUp",
								exit: "animate__animated animate__slideOutDown"
							}),
							theme: s
						},
						success: function(e) {
							Mt.success(e, rt({
								toastId: "success"
							}, this.settings))
						},
						error: function(e) {
							Mt.error(e, rt({
								toastId: "error"
							}, this.settings))
						}
					};
					//Configuração de Envio do formulário
					return (0, Ye.jsxs)("form", {
						onSubmit: m((function(e) {
							var t = setTimeout((function() {
								d(!0)
							}), 700);
							fetch("./PHPMailer/send.php", {
								method: "POST",
								body: JSON.stringify(e)
							}).then((function(e) {
								return e.json()
							})).then((function(e) {
								"success" === e.result ? (w.success(e.info[l]), g(), sessionStorage.removeItem("formValues")) : (w.error(e.info[l]), console.error(e.desc))
							})).catch((function(e) {
								w.error(Mr.fetchError[l]), console.error(e)
							})).finally((function() {
								clearTimeout(t), d(!1)
							}))
						})),
						className: "contact-form contact-form_main",
						"data-theme": s,
						children: [(0, Ye.jsxs)("div", {
							className: "contact-form__field",
							"data-disabled": f,
							children: [(0, Ye.jsx)("div", {
								className: "descr",
								children: Ar.name[l]
							}), (0, Ye.jsx)("input", rt(rt({}, h("name", {
								required: !0,
								minLength: 2,
								pattern: /^[Produção]+$/i
							})), {}, {
								placeholder: Ar.namePlaceholder[l],
								disabled: f
							})), "required" === (null === (e = b.name) || void 0 === e ? void 0 : e.type) && (0, Ye.jsx)("div", {
								className: "error",
								children: Mr.requiredField[l]
							}) || "minLength" === (null === (n = b.name) || void 0 === n ? void 0 : n.type) && (0, Ye.jsx)("div", {
								className: "error",
								children: Mr.shortName[l]
							}) || "pattern" === (null === (r = b.name) || void 0 === r ? void 0 : r.type) && (0, Ye.jsx)("div", {
								className: "error",
								children: Mr.invalidName[l]
							})]
						}), (0, Ye.jsxs)("div", {
							className: "contact-form__field",
							"data-disabled": f,
							children: [(0, Ye.jsx)("div", {
								className: "descr",
								children: "Email"
							}), (0, Ye.jsx)("input", rt(rt({}, h("email", {
								required: !0,
								pattern: /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
							})), {}, {
								placeholder: Ar.emailPlaceholder[l],
								disabled: f
							})), "required" === (null === (a = b.email) || void 0 === a ? void 0 : a.type) && (0, Ye.jsx)("div", {
								className: "error",
								children: Mr.requiredField[l]
							}) || "pattern" === (null === (o = b.email) || void 0 === o ? void 0 : o.type) && (0, Ye.jsx)("div", {
								className: "error",
								children: Mr.invalidEmail[l]
							})]
						}), (0, Ye.jsxs)("div", {
							className: "contact-form__field",
							"data-disabled": f,
							children: [(0, Ye.jsx)("div", {
								className: "descr",
								children: Ar.message[l]
							}), (0, Ye.jsx)("textarea", rt(rt({}, h("message", {
								required: !0
							})), {}, {
								placeholder: Ar.messagePlaceholder[l],
								disabled: f
							}))]
						}), (0, Ye.jsx)("button", {
							className: "button button_submit",
							"data-theme": s,
							disabled: f,
							children: f ? (0, Ye.jsx)(Vr, {}) : Ar.button[l]
						})]
					})
				},
				Br = function() {
					return (0, Ye.jsx)("div", {
						className: "container",
						children: (0, Ye.jsx)(Ur, {})
					})
				},
				$r = [{
					path: "/",
					elem: (0, Ye.jsx)(ln, {})
				}, {
					path: "/projects",
					elem: (0, Ye.jsx)(un, {})
				}, {
					path: "/contact",
					elem: (0, Ye.jsx)(Br, {})
				}, {
					path: "*",
					elem: (0, Ye.jsx)(ln, {})
				}];
			var Wr = function() {
					var e = ve().pathname;
					return $r.find((function(t) {
						return t.path === e
					})) || (window.location.pathname = ""), (0, Ye.jsx)("main", {
						className: "main",
						children: (0, Ye.jsx)(ze, {
							children: $r.map((function(e, t) {
								return (0, Ye.jsx)(Le, {
									path: e.path,
									element: e.elem
								}, t)
							}))
						})
					})
				},
				//Fundo do botão
				Hr = "http://www.w3.org/2000/svg",
				Qr = (new Date).getFullYear(),
				qr = (0, Ye.jsxs)("linearGradient", {
					id: "gradient",
					children: [(0, Ye.jsx)("stop", {
						className: "stop",
						offset: "0%"
					}), (0, Ye.jsx)("stop", {
						className: "stop",
						offset: "100%"
					})]
				});
			//Footer Buttons
			var Zr = function() {
					var e = (0, t.useContext)(Ge),
						n = e.lang,
						r = e.theme;
					return (0, Ye.jsx)("footer", {
						className: "footer",
						"data-theme": r,
						children: (0, Ye.jsxs)("div", {
							className: "container",
							children: [(0, Ye.jsxs)("div", {
								className: "footer__contacts",
								children: [(0, Ye.jsxs)("a", {
									href: "mailto:leonardo@d3f4lt.com.br",
									children: [(0, Ye.jsxs)("svg", {
										xmlns: Hr,
										viewBox: "0 0 40 40",
										children: [(0, Ye.jsx)("circle", {
											cx: "20",
											cy: "20",
											r: "20",
											className: "color-main"
										}), (0, Ye.jsx)("path", {
											d: "m31.29,13.18v14.4c0,.82-.62,1.44-1.44,1.44h-1.44v-13.06l-8.64,6.2-8.64-6.2v13.06h-1.44c-.82,0-1.44-.62-1.44-1.44v-14.4c0-.41.15-.77.41-1.02.13-.13.29-.24.47-.31.18-.07.37-.11.56-.1h.48l9.6,6.96,9.6-6.96h.48c.41,0,.77.15,1.03.42.26.25.41.61.41,1.02Z",
											className: "color-second"
										}), qr]
									}), "Gmail"]
								}), (0, Ye.jsxs)("a", {
									href: "https://www.linkedin.com/in/leonardo-m-silva/",
									rel: "noreferrer",
									target: "_blank",
									children: [(0, Ye.jsxs)("svg", {
										xmlns: Hr,
										viewBox: "0 0 40 40",
										children: [
											(0, Ye.jsx)("circle", {
												cx: "20",
												cy: "20",
												r: "20",
												className: "color-main"
											}),
											(0, Ye.jsx)("text", {
												x: "50%",
												y: "50%",
												textAnchor: "middle",
												fontSize: "14",
												dy: "0.3em",
												className: "color-second",
												children: "  In"
											})
										]
									}), "LinkedIn"]
								})
								
								
								, (0, Ye.jsxs)("a", {
									href: "https://github.com/leonardo-matheus",
									rel: "noreferrer",
									target: "_blank",
									children: [(0, Ye.jsxs)("svg", {
										xmlns: Hr,
										viewBox: "0 0 40 40",
										children: [(0, Ye.jsx)("circle", {
											cx: "20",
											cy: "20",
											r: "20",
											className: "color-second"
										}), (0, Ye.jsx)("path", {
											d: "m20,0C8.95,0,0,8.95,0,20c0,8.85,5.72,16.32,13.67,18.98,1,.17,1.38-.43,1.38-.95,0-.47-.02-2.05-.02-3.72-5.03.92-6.33-1.23-6.73-2.35-.22-.57-1.2-2.35-2.05-2.83-.7-.37-1.7-1.3-.02-1.32,1.57-.03,2.7,1.45,3.08,2.05,1.8,3.03,4.68,2.18,5.83,1.65.17-1.3.7-2.18,1.27-2.68-4.45-.5-9.1-2.22-9.1-9.87,0-2.17.77-3.98,2.05-5.38-.2-.5-.9-2.55.2-5.3,0,0,1.67-.53,5.5,2.05,1.6-.45,3.3-.68,5-.68s3.4.23,5,.68c3.82-2.6,5.5-2.05,5.5-2.05,1.1,2.75.4,4.8.2,5.3,1.28,1.4,2.05,3.17,2.05,5.38,0,7.67-4.67,9.38-9.12,9.87.72.62,1.35,1.83,1.35,3.7,0,2.67-.03,4.82-.03,5.5,0,.53.37,1.15,1.38.95,7.9-2.65,13.62-10.15,13.62-18.98C40,8.95,31.05,0,20,0Z",
											className: "color-main"
										})]
									}), "Github"]
								})]
							}), (0, Ye.jsxs)("div", {
								className: "footer__links",
								children: [(0, Ye.jsx)(We, {
									to: "/projects",
									children: Bt.projects[n]
								}), (0, Ye.jsx)(We, {
									to: "/contact",
									children: Bt.contact[n]
								})]
							}), (0, Ye.jsxs)("div", {
								className: "footer__signature",
								children: ["Leonardo M. Silva - ", Qr]
							})]
						})
					})
				},
				Kr = document.querySelector("html");
			var Yr = function() {
				var e = (0, t.useContext)(Ge).theme;
				return null === Kr || void 0 === Kr || Kr.setAttribute("data-theme", e), (0, Ye.jsxs)(Ye.Fragment, {
					children: [(0, Ye.jsx)($t, {}), (0, Ye.jsx)(Wr, {}), (0, Ye.jsx)(Zr, {})]
				})
			};
			r.createRoot(document.getElementById("root")).render((0, Ye.jsx)(t.StrictMode, {
				children: (0, Ye.jsxs)(Ue, {
					children: [(0, Ye.jsx)(Ze, {}), (0, Ye.jsxs)(et, {
						children: [(0, Ye.jsx)(jt, {
							newestOnTop: !0,
							limit: 1,
							closeButton: !1,
							draggableDirection: "y",
							draggablePercent: 60
						}), (0, Ye.jsx)(Yr, {})]
					})]
				})
			}))
		}()
}();