var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
	return typeof t
} : function (t) {
	return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
!function t(e, n, i) {
	function r(a, s) {
		if (!n[a]) {
			if (!e[a]) {
				var c = "function" == typeof require && require;
				if (!s && c)return c(a, !0);
				if (o)return o(a, !0);
				var u = new Error("Cannot find module '" + a + "'");
				throw u.code = "MODULE_NOT_FOUND", u
			}
			var l = n[a] = {exports: {}};
			e[a][0].call(l.exports, function (t) {
				var n = e[a][1][t];
				return r(n ? n : t)
			}, l, l.exports, t, e, n, i)
		}
		return n[a].exports
	}

	for (var o = "function" == typeof require && require, a = 0; a < i.length; a++)r(i[a]);
	return r
}({
	1: [function (t, e, n) {
		t("../../base.js"), t("../../../../unit/lib/lib-cookie"), t("../components/requireStyle"), t("../components/public"), t("../components/requireBuyo"), t("../components/ruleModal")
	}, {
		"../../../../unit/lib/lib-cookie": 8,
		"../../base.js": 6,
		"../components/public": 2,
		"../components/requireBuyo": 3,
		"../components/requireStyle": 4,
		"../components/ruleModal": 5
	}], 2: [function (t, e, n) {
		!function (t) {
			var e = {
				getTuiaStyle: function (e) {
					var n = (new Date).getTime(), i = {
						url: "/activity/getSkinConfig",
						type: "post",
						data: {activityId: CFG.activityId, templateType: CFG.activityType},
						dataType: "json",
						success: function () {
						},
						error: function () {
						}
					};
					e = t.extend({}, i, e), e.data.timestamp = n, t.ajax(e)
				}, getTuiaOptions: function (e) {
					var n = (new Date).getTime(), i = {
						url: "/activity/ajaxOptions",
						type: "post",
						data: {activityId: CFG.activityId, slotId: CFG.slotId},
						dataType: "json",
						success: function () {
						}
					};
					e = t.extend({}, i, e), e.data.timestamp = n, t.ajax(e)
				}, getTuiaOrder: function (e) {
					/*var n, i = this;
					n = window.navigator && window.navigator.connection && window.navigator.connection.type ? window.navigator.connection.type : null, getTuiaToken(function (i) {
						var r = (new Date).getTime(), o = {
							url: "/activity/doJoin?cType=" + n,
							type: "post",
							dataType: "json",
							data: {activityType: CFG.activityType, activityId: CFG.activityId, slotId: CFG.slotId},
							success: function () {
							},
							error: function () {
							}
						};
						e = t.extend(!0, {}, o, e, i), e.data.timestamp = r, window.xhr = t.ajax(e)
					}, i.showModal.bind(i))*/
				}, getTuiaLottery: function (e) {
					var n = (new Date).getTime(), i = {
						url: "/activity/result",
						type: "post",
						data: {showVersion: CFG.isShowNew || !1, skinId: CFG.couponSkinId},
						dataType: "json",
						success: function () {
						},
						error: function () {
						}
					};
					e = t.extend(!0, {}, i, e), e.data.timestamp = n, window.xhr = t.ajax(e)
				}, getTuiaStatusText: function (t) {
					var e = "";
					return t && (e = t.limitTimes ? 0 === t.limitType ? "免费次数： " + t.limitTimes + "次" : "今日免费： " + t.limitTimes + "次" : "抽奖机会已用完"), e
				}, getTuiaErrorCode: function (t) {
					switch (t) {
						case"0000000":
							return "success";
						case"0100001":
							return "over";
						case"9999999":
							return "networkError";
						case"0200004":
							return "preview";
						default:
							return "failed"
					}
				}, createErrorObject: function (t, e) {
					var n = "", i = "", r = "", o = "";
					switch (e ? e : e = {}, t) {
						case"systemError":
							n = e.title ? e.title : "抽奖失败", i = e.message, r = "再抽一次";
							break;
						/*case"networkError":
							n = "噢哦，网络解析错误！", i = "再试一遍吧~", r = "再试一遍";
							break;*/
						case"gameClose":
							n = "活动结束", i = "该活动已经结束啦~", r = "知道了";
							break;
						case"over":
							n = "抽奖次数已全部用完", i = "已经没有次数啦~", r = "知道了";
							break;
						case"todayOver":
							n = "今天抽奖次数已用完", i = "明天再来哦~", r = "知道了";
							break;
						case"noPrize":
							n = "哎呀，就差那么一点点~", i = "别灰心，再来一次！", r = "再抽一次";
							break;
						case"again":
							n = "恭喜您，中奖了", i = "获得免费再抽一次", r = "再抽一次";
							break;
						case"preview":
							n = "预览用户无法参与活动", i = "换正常用户来吧~", r = "知道了"
					}
					return {type: t, title: n, tip: i, btnText: r, link: o}
				}, performance: function (e) {
					if (window.performance) {
						var n = window.performance.timing, i = e || 0;
						if (n.loadEventEnd) {
							var r = n.domComplete - n.domInteractive, o = n.domContentLoadedEventEnd - n.navigationStart, a = n.loadEventEnd - n.navigationStart, s = window.dbStyleConfigEnd ? window.dbStyleConfigEnd - n.navigationStart : "", c = window.dbStyleConfigEnd - window.dbStyleConfigStart, u = "/statistics/activityPagePerf?hdType=" + actType + "&oaId=" + CFG.activityId + "&domComplete=" + r + "&domLoaded=" + o + "&onload=" + a + "&white=" + s + "&dbStyle=" + c, l = (new Date).getTime(), f = {
								url: u,
								type: "post",
								data: {},
								dataType: "json",
								success: function () {
								},
								error: function () {
								}
							};
							f.data.timestamp = l, window.xhr = t.ajax(f)
						} else i < 10 && setTimeout(function () {
							i++, this.performance(i)
						}, 1e3)
					}
				}, setModalInterval: function (t) {
					window.intervalTime || (window.intervalTime = setInterval(function () {
						window[t] && (window[t](), clearInterval(window.intervalTime), window.intervalTime = null)
					}, 100))
				}
			};
			window.Public = e
		}(Zepto)
	}, {}], 3: [function (t, e, n) {
		!function (t) {
			t(function () {
				var e = {
					init: function (n) {
						var i = e;
						t(".buoy").length || (CFG.isShowBuoy || n) && e.ajax(function (e) {
							if (e) {
								var n = t('<a class="buoy" style="display:block;" db-exposure=' + e.stBuoyInfo + " href=" + e.buoyDestUrl + "></a>");
								n.append(e.styleCode);
								var r = t('<img src="' + i.format(e.stBuoyInfo) + '" style="display:none;">');
								n.append(r), t("body").append(n), setTimeout(function () {
									window.DB && window.DB.exposure && window.DB.exposure.initLog()
								}, 200)
							}
						})
					}, ajax: function (e) {
						var n = this, i = {id: CFG.activityId};
						n.getparam("slotId") && (i.slotId = n.getparam("slotId")), n.getparam("login") && (i.login = n.getparam("login")), n.getparam("appKey") && (i.appKey = n.getparam("appKey")), t.cookie("_coll_device") && (i.deviceId = t.cookie("_coll_device")), t.ajax({
							url: "/activity/getBuoy",
							type: "get",
							dataType: "json",
							data: i,
							success: function (t) {
								t.success && e && e(t.data)
							},
							error: function () {
								console.log("get recommend queue error")
							}
						})
					}, getparam: function (t) {
						var e = "[\\?&]" + t + "=([^&#]*)", n = new RegExp(e), i = n.exec(location.href);
						return null === i ? "" : i[1]
					}, format: function (t) {
						if (t) {
							var e = JSON.parse(t), n = [];
							for (var i in e)n.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
							return e.domainWeb + "/exposure/buoy?" + n.join("&")
						}
					}
				};
				e.init(), window.buoyInit = e.init
			})
		}(Zepto)
	}, {}], 4: [function (t, e, n) {
		!function (t) {
			var e, n, i, r = {
				init: function (o, a) {
					o && (e = o.data.skinConfig, "string" == typeof e && (e = t.parseJSON(e))), o.userConfig && 0 != o.userConfig.length ? (n = o.userConfig, r.format()) : i = t.extend(!0, [], e), a && r.getConfig(a)
				}, getStyle: function (t) {
					for (var e in i) {
						var n = i[e];
						for (var r in n.childrens) {
							var o = n.childrens[r];
							if (o.name == t)return o.value
						}
					}
				}, getConfig: function (e) {
					this._style = "";
					for (var n in e)r.setConfig(e[n][0], e[n][1], e[n][2]);
					t("head").append("<style>" + this._style + "</style>")
				}, setConfig: function (e, n, i) {
					var o = this, a = r.getStyle(i);
					if (a)switch (n) {
						case"backgroundImage":
							"function" == typeof"".ossimg && (a = a.ossimg()), o._style += e + "{background-image:url(" + a + ") !important;}";
							break;
						case"backgroundColor":
							o._style += e + "{background-color:" + a + " !important;}";
							break;
						case"color":
							o._style += e + "{color:" + a + " !important;}";
							break;
						case"borderColor":
							o._style += e + "{border-color:" + a + " !important;}";
							break;
						case"html":
							t(e).html(a);
							break;
						case"image":
							"function" == typeof"".ossimg && (a = a.ossimg()), t(e).attr("src", a)
					}
				}, format: function () {
					for (var r in e) {
						var o, a = !1, s = e[r];
						for (var c in n) {
							var u = n[c];
							s.name == u.name && (a = !0, o = u)
						}
						if (a)for (var l in s.childrens) {
							var a = !1;
							for (var f in o.childrens) {
								var d = s.childrens[l], p = o.childrens[f];
								d.name == p.name && (a = !0, void 0 === d.system || 0 == d.system.length ? void 0 !== p.system && delete p.system : p.system = d.system, p.title = d.title, "image" == d.type && (p.size = d.size))
							}
							a || o.childrens.push(d)
						} else n.push(s)
					}
					for (var r in n) {
						var o, a = !1, s = n[r];
						for (var c in e) {
							var u = e[c];
							u.name == s.name && (a = !0, o = u)
						}
						if (a)for (var l in s.childrens) {
							var a = !1;
							for (var f in o.childrens)s.childrens[l].name == o.childrens[f].name && (a = !0);
							a || s.childrens.splice(l, 1)
						} else n.remove(s)
					}
					i = t.extend(!0, [], n)
				}
			};
			window.requireStyle = r
		}(Zepto)
	}, {}], 5: [function (t, e, n) {
		!function (t) {
			t(function () {
				if (t(".rule").length) {
					var e = "", n = null, i = null;
					e = '<div class="rule-modal" style="display: none;"><div class="rule-modal-dialog"><header><i></i><span>活动说明</span><i></i></header><section><div class="description"><div class="description-scroller"></div></div><div class="probability"><div class="nav"><span>更多概率说明</span><i></i></div><div class="text"><div class="probability-wrapper"><div class="probability-scroller"></div></div></div></div></section><div class="close"></div></div></div>', t("body").append(e)
				}
				t(".rule").on("click", function () {
					t(".rule-modal").show(), n = new IScroll(".description", {
						mouseWheel: !0,
						scrollbars: !0,
						shrinkScrollbars: "scale",
						click: !0
					}), t("#db-content").addClass("filter"), document.ontouchmove = function (t) {
						t.preventDefault()
					}
				}), t(".rule-modal .close").on("click", function () {
					t(".rule-modal").hide(), t("#db-content").removeClass("filter"), document.ontouchmove = null, n.destroy(), t(".probability").hasClass("active") && (t(".probability").removeClass("active"), i.destroy())
				}), t(".probability .nav").on("click", function () {
					t(".probability").toggleClass("active"), t(".probability").hasClass("active") ? i = new IScroll(".probability-wrapper", {
						mouseWheel: !0,
						scrollbars: !0,
						shrinkScrollbars: "scale",
						click: !0
					}) : i.destroy(), t(".description .iScrollVerticalScrollbar").toggleClass("fade")
				})
			})
		}(Zepto)
	}, {}], 6: [function (t, e, n) {
		t("../../unit/lib/lib-zepto/1.0.0/zepto.min"), t("../../unit/common/js/checkoutWebp"), t("../../unit/lib/lib-loader"), window.FastClick = t("../../unit/lib/lib-fastclick/1.0.0/fastclick")
	}, {
		"../../unit/common/js/checkoutWebp": 7,
		"../../unit/lib/lib-fastclick/1.0.0/fastclick": 9,
		"../../unit/lib/lib-loader": 10,
		"../../unit/lib/lib-zepto/1.0.0/zepto.min": 11
	}], 7: [function (t, e, n) {
		!function () {
			function t(i) {
				return i ? n || !localStorage || "undefined" != typeof localStorage.iswebp ? (e = i.split("."), e.length > 0 && "gif" === e[e.length - 1] ? i : i += localStorage && localStorage.iswebp ? "?x-oss-process=image/format,webp" : "?x-oss-process=image/quality,Q_80") : void t(i) : i
			}

			var e = [], n = !1;
			if (localStorage && !localStorage.iswebp) {
				var i = new Image;
				i.onload = function () {
					1 === i.width && (localStorage.iswebp = !0)
				}, i.onerror = function () {
					n = !0, localStorage.iswebp = ""
				}, i.src = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA="
			}
			String.prototype.ossimg = function () {
				return t(this)
			}, Array.prototype.imgWebpArray = function (t) {
				for (var e = [], n = this, i = 0; i < n.length; i++)n[i][t] && (n[i][t] = n[i][t].ossimg(), e.push(n[i]));
				return e
			}
		}()
	}, {}], 8: [function (t, e, n) {
		$.cookie = function (t, e, n) {
			if ("undefined" == typeof e) {
				var i = null;
				if (document.cookie && "" != document.cookie)for (var r = document.cookie.split(";"), o = 0; o < r.length; o++) {
					var a = $.trim(r[o]);
					if (a.substring(0, t.length + 1) == t + "=") {
						i = decodeURIComponent(a.substring(t.length + 1));
						break
					}
				}
				return i
			}
			n = n || {}, null === e && (e = "", n = $.extend({}, n), n.expires = -1);
			var s = "";
			if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) {
				var c;
				"number" == typeof n.expires ? (c = new Date, c.setTime(c.getTime() + 24 * n.expires * 60 * 60 * 1e3)) : c = n.expires, s = "; expires=" + c.toUTCString()
			}
			var u = n.path ? "; path=" + n.path : "", l = n.domain ? "; domain=" + n.domain : "", f = n.secure ? "; secure" : "";
			document.cookie = [t, "=", encodeURIComponent(e), s, u, l, f].join("")
		}
	}, {}], 9: [function (t, e, n) {
		var i = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (t) {
			return "undefined" == typeof t ? "undefined" : _typeof2(t)
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : _typeof2(t)
		};
		!function () {
			"use strict";
			function t(e, n) {
				function i(t, e) {
					return function () {
						return t.apply(e, arguments)
					}
				}

				var o;
				if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
					for (var a = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], s = this, c = 0, u = a.length; c < u; c++)s[a[c]] = i(s[a[c]], s);
					r && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, i) {
						var r = Node.prototype.removeEventListener;
						"click" === t ? r.call(e, t, n.hijacked || n, i) : r.call(e, t, n, i)
					}, e.addEventListener = function (t, n, i) {
						var r = Node.prototype.addEventListener;
						"click" === t ? r.call(e, t, n.hijacked || (n.hijacked = function (t) {
							t.propagationStopped || n(t)
						}), i) : r.call(e, t, n, i)
					}), "function" == typeof e.onclick && (o = e.onclick, e.addEventListener("click", function (t) {
						o(t)
					}, !1), e.onclick = null)
				}
			}

			var n = navigator.userAgent.indexOf("Windows Phone") >= 0, r = navigator.userAgent.indexOf("Android") > 0 && !n, o = /iP(ad|hone|od)/.test(navigator.userAgent) && !n, a = o && /OS 4_\d(_\d)?/.test(navigator.userAgent), s = o && /OS [6-7]_\d/.test(navigator.userAgent), c = navigator.userAgent.indexOf("BB10") > 0;
			t.prototype.needsClick = function (t) {
				switch (t.nodeName.toLowerCase()) {
					case"button":
					case"select":
					case"textarea":
						if (t.disabled)return !0;
						break;
					case"input":
						if (o && "file" === t.type || t.disabled)return !0;
						break;
					case"label":
					case"iframe":
					case"video":
						return !0
				}
				return /\bneedsclick\b/.test(t.className)
			}, t.prototype.needsFocus = function (t) {
				switch (t.nodeName.toLowerCase()) {
					case"textarea":
						return !0;
					case"select":
						return !r;
					case"input":
						switch (t.type) {
							case"button":
							case"checkbox":
							case"file":
							case"image":
							case"radio":
							case"submit":
								return !1
						}
						return !t.disabled && !t.readOnly;
					default:
						return /\bneedsfocus\b/.test(t.className)
				}
			}, t.prototype.sendClick = function (t, e) {
				var n, i;
				document.activeElement && document.activeElement !== t && document.activeElement.blur(), i = e.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(t), !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, t.dispatchEvent(n)
			}, t.prototype.determineEventType = function (t) {
				return r && "select" === t.tagName.toLowerCase() ? "mousedown" : "click"
			}, t.prototype.focus = function (t) {
				var e;
				o && t.setSelectionRange && 0 !== t.type.indexOf("date") && "time" !== t.type && "month" !== t.type ? (e = t.value.length, t.setSelectionRange(e, e)) : t.focus()
			}, t.prototype.updateScrollParent = function (t) {
				var e, n;
				if (e = t.fastClickScrollParent, !e || !e.contains(t)) {
					n = t;
					do {
						if (n.scrollHeight > n.offsetHeight) {
							e = n, t.fastClickScrollParent = n;
							break
						}
						n = n.parentElement
					} while (n)
				}
				e && (e.fastClickLastScrollTop = e.scrollTop)
			}, t.prototype.getTargetElementFromEventTarget = function (t) {
				return t.nodeType === Node.TEXT_NODE ? t.parentNode : t
			}, t.prototype.onTouchStart = function (t) {
				var e, n, i;
				if (t.targetTouches.length > 1)return !0;
				if (e = this.getTargetElementFromEventTarget(t.target), n = t.targetTouches[0], o) {
					if (i = window.getSelection(), i.rangeCount && !i.isCollapsed)return !0;
					if (!a) {
						if (n.identifier && n.identifier === this.lastTouchIdentifier)return t.preventDefault(), !1;
						this.lastTouchIdentifier = n.identifier, this.updateScrollParent(e)
					}
				}
				return this.trackingClick = !0, this.trackingClickStart = t.timeStamp, this.targetElement = e, this.touchStartX = n.pageX, this.touchStartY = n.pageY, t.timeStamp - this.lastClickTime < this.tapDelay && t.preventDefault(), !0
			}, t.prototype.touchHasMoved = function (t) {
				var e = t.changedTouches[0], n = this.touchBoundary;
				return Math.abs(e.pageX - this.touchStartX) > n || Math.abs(e.pageY - this.touchStartY) > n
			}, t.prototype.onTouchMove = function (t) {
				return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(t.target) || this.touchHasMoved(t)) && (this.trackingClick = !1, this.targetElement = null), !0)
			}, t.prototype.findControl = function (t) {
				return void 0 !== t.control ? t.control : t.htmlFor ? document.getElementById(t.htmlFor) : t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
			}, t.prototype.onTouchEnd = function (t) {
				var e, n, i, c, u, l = this.targetElement;
				if (!this.trackingClick)return !0;
				if (t.timeStamp - this.lastClickTime < this.tapDelay)return this.cancelNextClick = !0, !0;
				if (t.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
				if (this.cancelNextClick = !1, this.lastClickTime = t.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, s && (u = t.changedTouches[0], l = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || l, l.fastClickScrollParent = this.targetElement.fastClickScrollParent), i = l.tagName.toLowerCase(), "label" === i) {
					if (e = this.findControl(l)) {
						if (this.focus(l), r)return !1;
						l = e
					}
				} else if (this.needsFocus(l))return t.timeStamp - n > 100 || o && window.top !== window && "input" === i ? (this.targetElement = null, !1) : (this.focus(l), this.sendClick(l, t), o && "select" === i || (this.targetElement = null, t.preventDefault()), !1);
				return !(!o || a || (c = l.fastClickScrollParent, !c || c.fastClickLastScrollTop === c.scrollTop)) || (this.needsClick(l) || (t.preventDefault(), this.sendClick(l, t)), !1)
			}, t.prototype.onTouchCancel = function () {
				this.trackingClick = !1, this.targetElement = null
			}, t.prototype.onMouse = function (t) {
				return !this.targetElement || (!!t.forwardedTouchEvent || (!t.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (t.stopImmediatePropagation ? t.stopImmediatePropagation() : t.propagationStopped = !0, t.stopPropagation(), t.preventDefault(), !1))))
			}, t.prototype.onClick = function (t) {
				var e;
				return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === t.target.type && 0 === t.detail || (e = this.onMouse(t), e || (this.targetElement = null), e)
			}, t.prototype.destroy = function () {
				var t = this.layer;
				r && (t.removeEventListener("mouseover", this.onMouse, !0), t.removeEventListener("mousedown", this.onMouse, !0), t.removeEventListener("mouseup", this.onMouse, !0)), t.removeEventListener("click", this.onClick, !0), t.removeEventListener("touchstart", this.onTouchStart, !1), t.removeEventListener("touchmove", this.onTouchMove, !1), t.removeEventListener("touchend", this.onTouchEnd, !1), t.removeEventListener("touchcancel", this.onTouchCancel, !1)
			}, t.notNeeded = function (t) {
				var e, n, i, o;
				if ("undefined" == typeof window.ontouchstart)return !0;
				if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
					if (!r)return !0;
					if (e = document.querySelector("meta[name=viewport]")) {
						if (e.content.indexOf("user-scalable=no") !== -1)return !0;
						if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)return !0
					}
				}
				if (c && (i = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), i[1] >= 10 && i[2] >= 3 && (e = document.querySelector("meta[name=viewport]")))) {
					if (e.content.indexOf("user-scalable=no") !== -1)return !0;
					if (document.documentElement.scrollWidth <= window.outerWidth)return !0
				}
				return "none" === t.style.msTouchAction || "manipulation" === t.style.touchAction || (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(o >= 27 && (e = document.querySelector("meta[name=viewport]"), e && (e.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === t.style.touchAction || "manipulation" === t.style.touchAction))
			}, t.attach = function (e, n) {
				return new t(e, n)
			}, "function" == typeof define && "object" === i(define.amd) && define.amd ? define(function () {
				return t
			}) : "undefined" != typeof e && e.exports ? (e.exports = t.attach, e.exports.FastClick = t) : window.FastClick = t
		}()
	}, {}], 10: [function (t, e, n) {
		!function (t, e) {
			"use strict";
			function n(t) {
				return "complete" === t.readyState || "loaded" === t.readyState
			}

			function i(t, n, i) {
				var r = e.createElement("link");
				r.rel = "stylesheet", a(r, i, "css"), r.async = !0, r.href = t, f.appendChild(r)
			}

			function r(t, n, i) {
				var r = e.createElement("script");
				r.charset = "utf-8", a(r, i, "js"), r.async = !n.sync, r.src = t, f.appendChild(r)
			}

			function o(t, e) {
				var n;
				t.sheet && (n = !0), setTimeout(function () {
					n ? e() : o(t, e)
				}, 20)
			}

			function a(e, i, r) {
				function a() {
					e.onload = e.onreadystatechange = null, e = null, i()
				}

				var s = "onload"in e, c = "css" === r;
				return !c || !d && s ? void(s ? (e.onload = a, e.onerror = function () {
					e.onerror = null, t._cdnFallback(e)
				}) : e.onreadystatechange = function () {
					n(e) && a()
				}) : void setTimeout(function () {
					o(e, i)
				}, 1)
			}

			function s(t, e, n, o) {
				function a() {
					var n = e.indexOf(t);
					n > -1 && e.splice(n, 1), 0 === e.length && o()
				}

				l.test(t) ? i(t, n, a) : r(t, n, a)
			}

			function c(t, e, n) {
				var i = function () {
					n && n()
				};
				if (t = Array.prototype.slice.call(t || []), 0 === t.length)return void i();
				for (var r = 0, o = t.length; r < o; r++)s(t[r], t, e, i)
			}

			function u(e, i) {
				n(e) ? i() : t.addEventListener("load", i)
			}

			var l = new RegExp("\\.css|.less"), f = e.head || e.getElementsByTagName("head")[0], d = +navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/?(\d+).*/i, "$1") < 536, p = {
				async: function (t, n) {
					u(e, function () {
						c(t, {}, n)
					})
				}, sync: function (t, n) {
					u(e, function () {
						c(t, {sync: !0}, n)
					})
				}
			};
			return t.Loader = p, p
		}(window, document)
	}, {}], 11: [function (t, e, n) {
		var i = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (t) {
			return "undefined" == typeof t ? "undefined" : _typeof2(t)
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : _typeof2(t)
		}, r = function () {
			function t(t) {
				return null == t ? t + "" : H[G.call(t)] || "object"
			}

			function e(e) {
				return "function" == t(e)
			}

			function n(t) {
				return null != t && t == t.window
			}

			function r(t) {
				return null != t && t.nodeType == t.DOCUMENT_NODE
			}

			function o(e) {
				return "object" == t(e)
			}

			function a(t) {
				return o(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
			}

			function s(t) {
				return "number" == typeof t.length
			}

			function c(t) {
				return O.call(t, function (t) {
					return null != t
				})
			}

			function u(t) {
				return t.length > 0 ? S.fn.concat.apply([], t) : t
			}

			function l(t) {
				return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
			}

			function f(t) {
				return t in I ? I[t] : I[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
			}

			function d(t, e) {
				return "number" != typeof e || _[l(t)] ? e : e + "px"
			}

			function p(t) {
				var e, n;
				return P[t] || (e = L.createElement(t), L.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), P[t] = n), P[t]
			}

			function h(t) {
				return "children"in t ? A.call(t.children) : S.map(t.childNodes, function (t) {
					return 1 == t.nodeType ? t : E
				})
			}

			function m(t, e, n) {
				for (C in e)n && (a(e[C]) || K(e[C])) ? (a(e[C]) && !a(t[C]) && (t[C] = {}), K(e[C]) && !K(t[C]) && (t[C] = []), m(t[C], e[C], n)) : e[C] !== E && (t[C] = e[C])
			}

			function v(t, e) {
				return null == e ? S(t) : S(t).filter(e)
			}

			function y(t, n, i, r) {
				return e(n) ? n.call(t, i, r) : n
			}

			function g(t, e, n) {
				null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
			}

			function b(t, e) {
				var n = t.className || "", i = n && n.baseVal !== E;
				return e === E ? i ? n.baseVal : n : (i ? n.baseVal = e : t.className = e, E)
			}

			function w(t) {
				var e;
				try {
					return t ? "true" == t || "false" != t && ("null" == t ? null : /^0/.test(t) || isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? S.parseJSON(t) : t : e) : t
				} catch (n) {
					return t
				}
			}

			function x(t, e) {
				e(t);
				for (var n = 0, i = t.childNodes.length; i > n; n++)x(t.childNodes[n], e)
			}

			var E, C, S, k, T, j, N = [], A = N.slice, O = N.filter, L = window.document, P = {}, I = {}, _ = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			}, D = /^\s*<(\w+|!)[^>]*>/, M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, F = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, q = /^(?:body|html)$/i, R = /([A-Z])/g, $ = ["val", "css", "html", "text", "data", "width", "height", "offset"], B = ["after", "prepend", "before", "append"], z = L.createElement("table"), Z = L.createElement("tr"), U = {
				tr: L.createElement("tbody"),
				tbody: z,
				thead: z,
				tfoot: z,
				td: Z,
				th: Z,
				"*": L.createElement("div")
			}, W = /complete|loaded|interactive/, X = /^[\w-]*$/, H = {}, G = H.toString, V = {}, J = L.createElement("div"), Y = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			}, K = Array.isArray || function (t) {
					return t instanceof Array
				};
			return V.matches = function (t, e) {
				if (!e || !t || 1 !== t.nodeType)return !1;
				var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
				if (n)return n.call(t, e);
				var i, r = t.parentNode, o = !r;
				return o && (r = J).appendChild(t), i = ~V.qsa(r, e).indexOf(t), o && J.removeChild(t), i
			}, T = function (t) {
				return t.replace(/-+(.)?/g, function (t, e) {
					return e ? e.toUpperCase() : ""
				})
			}, j = function (t) {
				return O.call(t, function (e, n) {
					return t.indexOf(e) == n
				})
			}, V.fragment = function (t, e, n) {
				var i, r, o;
				return M.test(t) && (i = S(L.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(F, "<$1></$2>")), e === E && (e = D.test(t) && RegExp.$1), e in U || (e = "*"), o = U[e], o.innerHTML = "" + t, i = S.each(A.call(o.childNodes), function () {
					o.removeChild(this)
				})), a(n) && (r = S(i), S.each(n, function (t, e) {
					$.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
				})), i
			}, V.Z = function (t, e) {
				return t = t || [], t.__proto__ = S.fn, t.selector = e || "", t
			}, V.isZ = function (t) {
				return t instanceof V.Z
			}, V.init = function (t, n) {
				var i;
				if (!t)return V.Z();
				if ("string" == typeof t)if (t = t.trim(), "<" == t[0] && D.test(t))i = V.fragment(t, RegExp.$1, n), t = null; else {
					if (n !== E)return S(n).find(t);
					i = V.qsa(L, t)
				} else {
					if (e(t))return S(L).ready(t);
					if (V.isZ(t))return t;
					if (K(t))i = c(t); else if (o(t))i = [t], t = null; else if (D.test(t))i = V.fragment(t.trim(), RegExp.$1, n), t = null; else {
						if (n !== E)return S(n).find(t);
						i = V.qsa(L, t)
					}
				}
				return V.Z(i, t)
			}, S = function (t, e) {
				return V.init(t, e)
			}, S.extend = function (t) {
				var e, n = A.call(arguments, 1);
				return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function (n) {
					m(t, n, e)
				}), t
			}, V.qsa = function (t, e) {
				var n, i = "#" == e[0], o = !i && "." == e[0], a = i || o ? e.slice(1) : e, s = X.test(a);
				return r(t) && s && i ? (n = t.getElementById(a)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : A.call(s && !i ? o ? t.getElementsByClassName(a) : t.getElementsByTagName(e) : t.querySelectorAll(e))
			}, S.contains = L.documentElement.contains ? function (t, e) {
				return t !== e && t.contains(e)
			} : function (t, e) {
				for (; e && (e = e.parentNode);)if (e === t)return !0;
				return !1
			}, S.type = t, S.isFunction = e, S.isWindow = n, S.isArray = K, S.isPlainObject = a, S.isEmptyObject = function (t) {
				var e;
				for (e in t)return !1;
				return !0
			}, S.inArray = function (t, e, n) {
				return N.indexOf.call(e, t, n)
			}, S.camelCase = T, S.trim = function (t) {
				return null == t ? "" : String.prototype.trim.call(t)
			}, S.uuid = 0, S.support = {}, S.expr = {}, S.map = function (t, e) {
				var n, i, r, o = [];
				if (s(t))for (i = 0; t.length > i; i++)n = e(t[i], i), null != n && o.push(n); else for (r in t)n = e(t[r], r), null != n && o.push(n);
				return u(o)
			}, S.each = function (t, e) {
				var n, i;
				if (s(t)) {
					for (n = 0; t.length > n; n++)if (e.call(t[n], n, t[n]) === !1)return t
				} else for (i in t)if (e.call(t[i], i, t[i]) === !1)return t;
				return t
			}, S.grep = function (t, e) {
				return O.call(t, e)
			}, window.JSON && (S.parseJSON = JSON.parse), S.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
				H["[object " + e + "]"] = e.toLowerCase()
			}), S.fn = {
				forEach: N.forEach,
				reduce: N.reduce,
				push: N.push,
				sort: N.sort,
				indexOf: N.indexOf,
				concat: N.concat,
				map: function (t) {
					return S(S.map(this, function (e, n) {
						return t.call(e, n, e)
					}))
				},
				slice: function () {
					return S(A.apply(this, arguments))
				},
				ready: function (t) {
					return W.test(L.readyState) && L.body ? t(S) : L.addEventListener("DOMContentLoaded", function () {
						t(S)
					}, !1), this
				},
				get: function (t) {
					return t === E ? A.call(this) : this[t >= 0 ? t : t + this.length]
				},
				toArray: function () {
					return this.get()
				},
				size: function () {
					return this.length
				},
				remove: function () {
					return this.each(function () {
						null != this.parentNode && this.parentNode.removeChild(this)
					})
				},
				each: function (t) {
					return N.every.call(this, function (e, n) {
						return t.call(e, n, e) !== !1
					}), this
				},
				filter: function (t) {
					return e(t) ? this.not(this.not(t)) : S(O.call(this, function (e) {
						return V.matches(e, t)
					}))
				},
				add: function (t, e) {
					return S(j(this.concat(S(t, e))))
				},
				is: function (t) {
					return this.length > 0 && V.matches(this[0], t)
				},
				not: function (t) {
					var n = [];
					if (e(t) && t.call !== E)this.each(function (e) {
						t.call(this, e) || n.push(this)
					}); else {
						var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? A.call(t) : S(t);
						this.forEach(function (t) {
							0 > i.indexOf(t) && n.push(t)
						})
					}
					return S(n)
				},
				has: function (t) {
					return this.filter(function () {
						return o(t) ? S.contains(this, t) : S(this).find(t).size()
					})
				},
				eq: function (t) {
					return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
				},
				first: function () {
					var t = this[0];
					return t && !o(t) ? t : S(t)
				},
				last: function () {
					var t = this[this.length - 1];
					return t && !o(t) ? t : S(t)
				},
				find: function (t) {
					var e, n = this;
					return e = t ? "object" == ("undefined" == typeof t ? "undefined" : i(t)) ? S(t).filter(function () {
						var t = this;
						return N.some.call(n, function (e) {
							return S.contains(e, t)
						})
					}) : 1 == this.length ? S(V.qsa(this[0], t)) : this.map(function () {
						return V.qsa(this, t)
					}) : []
				},
				closest: function (t, e) {
					var n = this[0], o = !1;
					for ("object" == ("undefined" == typeof t ? "undefined" : i(t)) && (o = S(t)); n && !(o ? o.indexOf(n) >= 0 : V.matches(n, t));)n = n !== e && !r(n) && n.parentNode;
					return S(n)
				},
				parents: function (t) {
					for (var e = [], n = this; n.length > 0;)n = S.map(n, function (t) {
						return (t = t.parentNode) && !r(t) && 0 > e.indexOf(t) ? (e.push(t), t) : E
					});
					return v(e, t)
				},
				parent: function (t) {
					return v(j(this.pluck("parentNode")), t)
				},
				children: function (t) {
					return v(this.map(function () {
						return h(this)
					}), t)
				},
				contents: function () {
					return this.map(function () {
						return A.call(this.childNodes)
					})
				},
				siblings: function (t) {
					return v(this.map(function (t, e) {
						return O.call(h(e.parentNode), function (t) {
							return t !== e
						})
					}), t)
				},
				empty: function () {
					return this.each(function () {
						this.innerHTML = ""
					})
				},
				pluck: function (t) {
					return S.map(this, function (e) {
						return e[t]
					})
				},
				show: function () {
					return this.each(function () {
						"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
					})
				},
				replaceWith: function (t) {
					return this.before(t).remove()
				},
				wrap: function (t) {
					var n = e(t);
					if (this[0] && !n)var i = S(t).get(0), r = i.parentNode || this.length > 1;
					return this.each(function (e) {
						S(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
					})
				},
				wrapAll: function (t) {
					if (this[0]) {
						S(this[0]).before(t = S(t));
						for (var e; (e = t.children()).length;)t = e.first();
						S(t).append(this)
					}
					return this
				},
				wrapInner: function (t) {
					var n = e(t);
					return this.each(function (e) {
						var i = S(this), r = i.contents(), o = n ? t.call(this, e) : t;
						r.length ? r.wrapAll(o) : i.append(o)
					})
				},
				unwrap: function () {
					return this.parent().each(function () {
						S(this).replaceWith(S(this).children())
					}), this
				},
				clone: function () {
					return this.map(function () {
						return this.cloneNode(!0)
					})
				},
				hide: function () {
					return this.css("display", "none")
				},
				toggle: function (t) {
					return this.each(function () {
						var e = S(this);
						(t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
					})
				},
				prev: function (t) {
					return S(this.pluck("previousElementSibling")).filter(t || "*")
				},
				next: function (t) {
					return S(this.pluck("nextElementSibling")).filter(t || "*")
				},
				html: function (t) {
					return 0 in arguments ? this.each(function (e) {
						var n = this.innerHTML;
						S(this).empty().append(y(this, t, e, n))
					}) : 0 in this ? this[0].innerHTML : null
				},
				text: function (t) {
					return 0 in arguments ? this.each(function (e) {
						var n = y(this, t, e, this.textContent);
						this.textContent = null == n ? "" : "" + n
					}) : 0 in this ? this[0].textContent : null
				},
				attr: function (t, e) {
					var n;
					return "string" != typeof t || 1 in arguments ? this.each(function (n) {
						if (1 === this.nodeType)if (o(t))for (C in t)g(this, C, t[C]); else g(this, t, y(this, e, n, this.getAttribute(t)))
					}) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : E
				},
				removeAttr: function (t) {
					return this.each(function () {
						1 === this.nodeType && g(this, t)
					})
				},
				prop: function (t, e) {
					return t = Y[t] || t, 1 in arguments ? this.each(function (n) {
						this[t] = y(this, e, n, this[t])
					}) : this[0] && this[0][t]
				},
				data: function (t, e) {
					var n = "data-" + t.replace(R, "-$1").toLowerCase(), i = 1 in arguments ? this.attr(n, e) : this.attr(n);
					return null !== i ? w(i) : E
				},
				val: function (t) {
					return 0 in arguments ? this.each(function (e) {
						this.value = y(this, t, e, this.value)
					}) : this[0] && (this[0].multiple ? S(this[0]).find("option").filter(function () {
						return this.selected
					}).pluck("value") : this[0].value)
				},
				offset: function (t) {
					if (t)return this.each(function (e) {
						var n = S(this), i = y(this, t, e, n.offset()), r = n.offsetParent().offset(), o = {
							top: i.top - r.top,
							left: i.left - r.left
						};
						"static" == n.css("position") && (o.position = "relative"), n.css(o)
					});
					if (!this.length)return null;
					var e = this[0].getBoundingClientRect();
					return {
						left: e.left + window.pageXOffset,
						top: e.top + window.pageYOffset,
						width: Math.round(e.width),
						height: Math.round(e.height)
					}
				},
				css: function (e, n) {
					if (2 > arguments.length) {
						var i = this[0], r = getComputedStyle(i, "");
						if (!i)return;
						if ("string" == typeof e)return i.style[T(e)] || r.getPropertyValue(e);
						if (K(e)) {
							var o = {};
							return S.each(e, function (t, e) {
								o[e] = i.style[T(e)] || r.getPropertyValue(e)
							}), o
						}
					}
					var a = "";
					if ("string" == t(e))n || 0 === n ? a = l(e) + ":" + d(e, n) : this.each(function () {
						this.style.removeProperty(l(e))
					}); else for (C in e)e[C] || 0 === e[C] ? a += l(C) + ":" + d(C, e[C]) + ";" : this.each(function () {
						this.style.removeProperty(l(C))
					});
					return this.each(function () {
						this.style.cssText += ";" + a
					})
				},
				index: function (t) {
					return t ? this.indexOf(S(t)[0]) : this.parent().children().indexOf(this[0])
				},
				hasClass: function (t) {
					return !!t && N.some.call(this, function (t) {
						return this.test(b(t))
					}, f(t))
				},
				addClass: function (t) {
					return t ? this.each(function (e) {
						if ("className"in this) {
							k = [];
							var n = b(this), i = y(this, t, e, n);
							i.split(/\s+/g).forEach(function (t) {
								S(this).hasClass(t) || k.push(t)
							}, this), k.length && b(this, n + (n ? " " : "") + k.join(" "))
						}
					}) : this
				},
				removeClass: function (t) {
					return this.each(function (e) {
						if ("className"in this) {
							if (t === E)return b(this, "");
							k = b(this), y(this, t, e, k).split(/\s+/g).forEach(function (t) {
								k = k.replace(f(t), " ")
							}), b(this, k.trim())
						}
					})
				},
				toggleClass: function (t, e) {
					return t ? this.each(function (n) {
						var i = S(this), r = y(this, t, n, b(this));
						r.split(/\s+/g).forEach(function (t) {
							(e === E ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
						})
					}) : this
				},
				scrollTop: function (t) {
					if (this.length) {
						var e = "scrollTop"in this[0];
						return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function () {
							this.scrollTop = t
						} : function () {
							this.scrollTo(this.scrollX, t)
						})
					}
				},
				scrollLeft: function (t) {
					if (this.length) {
						var e = "scrollLeft"in this[0];
						return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function () {
							this.scrollLeft = t
						} : function () {
							this.scrollTo(t, this.scrollY)
						})
					}
				},
				position: function () {
					if (this.length) {
						var t = this[0], e = this.offsetParent(), n = this.offset(), i = q.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
						return n.top -= parseFloat(S(t).css("margin-top")) || 0, n.left -= parseFloat(S(t).css("margin-left")) || 0, i.top += parseFloat(S(e[0]).css("border-top-width")) || 0, i.left += parseFloat(S(e[0]).css("border-left-width")) || 0, {
							top: n.top - i.top,
							left: n.left - i.left
						}
					}
				},
				offsetParent: function () {
					return this.map(function () {
						for (var t = this.offsetParent || L.body; t && !q.test(t.nodeName) && "static" == S(t).css("position");)t = t.offsetParent;
						return t
					})
				}
			}, S.fn.detach = S.fn.remove, ["width", "height"].forEach(function (t) {
				var e = t.replace(/./, function (t) {
					return t[0].toUpperCase()
				});
				S.fn[t] = function (i) {
					var o, a = this[0];
					return i === E ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function (e) {
						a = S(this), a.css(t, y(this, i, e, a[t]()))
					})
				}
			}), B.forEach(function (e, n) {
				var i = n % 2;
				S.fn[e] = function () {
					var e, r, o = S.map(arguments, function (n) {
						return e = t(n), "object" == e || "array" == e || null == n ? n : V.fragment(n)
					}), a = this.length > 1;
					return 1 > o.length ? this : this.each(function (t, e) {
						r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
						var s = S.contains(L.documentElement, r);
						o.forEach(function (t) {
							if (a)t = t.cloneNode(!0); else if (!r)return S(t).remove();
							r.insertBefore(t, e), s && x(t, function (t) {
								null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
							})
						})
					})
				}, S.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function (t) {
					return S(t)[e](this), this
				}
			}), V.Z.prototype = S.fn, V.uniq = j, V.deserializeValue = w, S.zepto = V, S
		}();
		window.Zepto = r, void 0 === window.$ && (window.$ = r), function (t) {
			function e(e, n, i) {
				var r = t.Event(n);
				return t(e).trigger(r, i), !r.isDefaultPrevented()
			}

			function n(t, n, i, r) {
				return t.global ? e(n || g, i, r) : void 0
			}

			function i(e) {
				e.global && 0 === t.active++ && n(e, null, "ajaxStart")
			}

			function r(e) {
				e.global && !--t.active && n(e, null, "ajaxStop")
			}

			function o(t, e) {
				var i = e.context;
				return e.beforeSend.call(i, t, e) !== !1 && n(e, i, "ajaxBeforeSend", [t, e]) !== !1 && void n(e, i, "ajaxSend", [t, e])
			}

			function a(t, e, i, r) {
				var o = i.context, a = "success";
				i.success.call(o, t, a, e), r && r.resolveWith(o, [t, a, e]), n(i, o, "ajaxSuccess", [e, i, t]), c(a, e, i)
			}

			function s(t, e, i, r, o) {
				var a = r.context;
				r.error.call(a, i, e, t), o && o.rejectWith(a, [i, e, t]), n(r, a, "ajaxError", [i, r, t || e]), c(e, i, r)
			}

			function c(t, e, i) {
				var o = i.context;
				i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
			}

			function u() {
			}

			function l(t) {
				return t && (t = t.split(";", 2)[0]), t && (t == C ? "html" : t == E ? "json" : w.test(t) ? "script" : x.test(t) && "xml") || "text"
			}

			function f(t, e) {
				return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
			}

			function d(e) {
				e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
			}

			function p(e, n, i, r) {
				return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
					url: e,
					data: n,
					success: i,
					dataType: r
				}
			}

			function h(e, n, i, r) {
				var o, a = t.isArray(n), s = t.isPlainObject(n);
				t.each(n, function (n, c) {
					o = t.type(c), r && (n = i ? r : r + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !r && a ? e.add(c.name, c.value) : "array" == o || !i && "object" == o ? h(e, c, i, n) : e.add(n, c)
				})
			}

			var m, v, y = 0, g = window.document, b = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, w = /^(?:text|application)\/javascript/i, x = /^(?:text|application)\/xml/i, E = "application/json", C = "text/html", S = /^\s*$/;
			t.active = 0, t.ajaxJSONP = function (e, n) {
				if (!("type"in e))return t.ajax(e);
				var i, r, c = e.jsonpCallback, u = (t.isFunction(c) ? c() : c) || "jsonp" + ++y, l = g.createElement("script"), f = window[u], d = function (e) {
					t(l).triggerHandler("error", e || "abort")
				}, p = {abort: d};
				return n && n.promise(p), t(l).on("load error", function (o, c) {
					clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? a(i[0], p, e, n) : s(null, c || "error", p, e, n), window[u] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0
				}), o(p, e) === !1 ? (d("abort"), p) : (window[u] = function () {
					i = arguments
				}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), g.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function () {
					d("timeout")
				}, e.timeout)), p)
			}, t.ajaxSettings = {
				type: "GET",
				beforeSend: u,
				success: u,
				error: u,
				complete: u,
				context: null,
				global: !0,
				xhr: function () {
					return new window.XMLHttpRequest
				},
				accepts: {
					script: "text/javascript, application/javascript, application/x-javascript",
					json: E,
					xml: "application/xml, text/xml",
					html: C,
					text: "text/plain"
				},
				crossDomain: !1,
				timeout: 0,
				processData: !0,
				cache: !0
			}, t.ajax = function (e) {
				var n = t.extend({}, e || {}), r = t.Deferred && t.Deferred();
				for (m in t.ajaxSettings)void 0 === n[m] && (n[m] = t.ajaxSettings[m]);
				i(n), n.crossDomain || (n.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(n.url) && RegExp.$2 != window.location.host), n.url || (n.url = "" + window.location), d(n);
				var c = n.dataType, p = /\?.+=\?/.test(n.url);
				if (p && (c = "jsonp"), n.cache !== !1 && (e && e.cache === !0 || "script" != c && "jsonp" != c) || (n.url = f(n.url, "_=" + Date.now())), "jsonp" == c)return p || (n.url = f(n.url, n.jsonp ? n.jsonp + "=?" : n.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(n, r);
				var h, y = n.accepts[c], g = {}, b = function (t, e) {
					g[t.toLowerCase()] = [t, e]
				}, w = /^([\w-]+:)\/\//.test(n.url) ? RegExp.$1 : window.location.protocol, x = n.xhr(), E = x.setRequestHeader;
				if (r && r.promise(x), n.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", y || "*/*"), (y = n.mimeType || y) && (y.indexOf(",") > -1 && (y = y.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(y)), (n.contentType || n.contentType !== !1 && n.data && "GET" != n.type.toUpperCase()) && b("Content-Type", n.contentType || "application/x-www-form-urlencoded"), n.headers)for (v in n.headers)b(v, n.headers[v]);
				if (x.setRequestHeader = b, x.onreadystatechange = function () {
						if (4 == x.readyState) {
							x.onreadystatechange = u, clearTimeout(h);
							var e, i = !1;
							if (x.status >= 200 && 300 > x.status || 304 == x.status || 0 == x.status && "file:" == w) {
								c = c || l(n.mimeType || x.getResponseHeader("content-type")), e = x.responseText;
								try {
									"script" == c ? (0, eval)(e) : "xml" == c ? e = x.responseXML : "json" == c && (e = S.test(e) ? null : t.parseJSON(e))
								} catch (o) {
									i = o
								}
								i ? s(i, "parsererror", x, n, r) : a(e, x, n, r)
							} else s(x.statusText || null, x.status ? "error" : "abort", x, n, r)
						}
					}, o(x, n) === !1)return x.abort(), s(null, "abort", x, n, r), x;
				if (n.xhrFields)for (v in n.xhrFields)x[v] = n.xhrFields[v];
				var C = !("async"in n) || n.async;
				x.open(n.type, n.url, C, n.username, n.password);
				for (v in g)E.apply(x, g[v]);
				return n.timeout > 0 && (h = setTimeout(function () {
					x.onreadystatechange = u, x.abort(), s(null, "timeout", x, n, r)
				}, n.timeout)), x.send(n.data ? n.data : null), x
			}, t.get = function () {
				return t.ajax(p.apply(null, arguments))
			}, t.post = function () {
				var e = p.apply(null, arguments);
				return e.type = "POST", t.ajax(e)
			}, t.getJSON = function () {
				var e = p.apply(null, arguments);
				return e.dataType = "json", t.ajax(e)
			}, t.fn.load = function (e, n, i) {
				if (!this.length)return this;
				var r, o = this, a = e.split(/\s/), s = p(e, n, i), c = s.success;
				return a.length > 1 && (s.url = a[0], r = a[1]), s.success = function (e) {
					o.html(r ? t("<div>").html(e.replace(b, "")).find(r) : e), c && c.apply(o, arguments)
				}, t.ajax(s), this
			};
			var k = encodeURIComponent;
			t.param = function (t, e) {
				var n = [];
				return n.add = function (t, e) {
					this.push(k(t) + "=" + k(e))
				}, h(n, t, e), n.join("&").replace(/%20/g, "+")
			}
		}(r), function (t) {
			function e(t) {
				return t._zid || (t._zid = d++)
			}

			function n(t, n, o, a) {
				if (n = i(n), n.ns)var s = r(n.ns);
				return (v[e(t)] || []).filter(function (t) {
					return !(!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
				})
			}

			function i(t) {
				var e = ("" + t).split(".");
				return {e: e[0], ns: e.slice(1).sort().join(" ")}
			}

			function r(t) {
				return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
			}

			function o(t, e) {
				return t.del && !g && t.e in b || !!e
			}

			function a(t) {
				return w[t] || g && b[t] || t
			}

			function s(n, r, s, c, l, d, p) {
				var h = e(n), m = v[h] || (v[h] = []);
				r.split(/\s/).forEach(function (e) {
					if ("ready" == e)return t(document).ready(s);
					var r = i(e);
					r.fn = s, r.sel = l, r.e in w && (s = function (e) {
						var n = e.relatedTarget;
						return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : f
					}), r.del = d;
					var h = d || s;
					r.proxy = function (t) {
						if (t = u(t), !t.isImmediatePropagationStopped()) {
							t.data = c;
							var e = h.apply(n, t._args == f ? [t] : [t].concat(t._args));
							return e === !1 && (t.preventDefault(), t.stopPropagation()), e
						}
					}, r.i = m.length, m.push(r), "addEventListener"in n && n.addEventListener(a(r.e), r.proxy, o(r, p))
				})
			}

			function c(t, i, r, s, c) {
				var u = e(t);
				(i || "").split(/\s/).forEach(function (e) {
					n(t, e, r, s).forEach(function (e) {
						delete v[u][e.i], "removeEventListener"in t && t.removeEventListener(a(e.e), e.proxy, o(e, c))
					})
				})
			}

			function u(e, n) {
				return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(S, function (t, i) {
					var r = n[t];
					e[t] = function () {
						return this[i] = x, r && r.apply(n, arguments)
					}, e[i] = E
				}), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue"in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = x)), e
			}

			function l(t) {
				var e, n = {originalEvent: t};
				for (e in t)C.test(e) || t[e] === f || (n[e] = t[e]);
				return u(n, t)
			}

			var f, d = 1, p = Array.prototype.slice, h = t.isFunction, m = function (t) {
				return "string" == typeof t
			}, v = {}, y = {}, g = "onfocusin"in window, b = {
				focus: "focusin",
				blur: "focusout"
			}, w = {mouseenter: "mouseover", mouseleave: "mouseout"};
			y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", t.event = {
				add: s,
				remove: c
			}, t.proxy = function (n, i) {
				var r = 2 in arguments && p.call(arguments, 2);
				if (h(n)) {
					var o = function () {
						return n.apply(i, r ? r.concat(p.call(arguments)) : arguments)
					};
					return o._zid = e(n), o
				}
				if (m(i))return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
				throw new TypeError("expected function")
			}, t.fn.bind = function (t, e, n) {
				return this.on(t, e, n)
			}, t.fn.unbind = function (t, e) {
				return this.off(t, e)
			}, t.fn.one = function (t, e, n, i) {
				return this.on(t, e, n, i, 1)
			};
			var x = function () {
				return !0
			}, E = function () {
				return !1
			}, C = /^([A-Z]|returnValue$|layer[XY]$)/, S = {
				preventDefault: "isDefaultPrevented",
				stopImmediatePropagation: "isImmediatePropagationStopped",
				stopPropagation: "isPropagationStopped"
			};
			t.fn.delegate = function (t, e, n) {
				return this.on(e, t, n)
			}, t.fn.undelegate = function (t, e, n) {
				return this.off(e, t, n)
			}, t.fn.live = function (e, n) {
				return t(document.body).delegate(this.selector, e, n), this
			}, t.fn.die = function (e, n) {
				return t(document.body).undelegate(this.selector, e, n), this
			}, t.fn.on = function (e, n, i, r, o) {
				var a, u, d = this;
				return e && !m(e) ? (t.each(e, function (t, e) {
					d.on(t, n, i, e, o)
				}), d) : (m(n) || h(r) || r === !1 || (r = i, i = n, n = f), (h(i) || i === !1) && (r = i, i = f), r === !1 && (r = E), d.each(function (d, h) {
					o && (a = function (t) {
						return c(h, t.type, r), r.apply(this, arguments)
					}), n && (u = function (e) {
						var i, o = t(e.target).closest(n, h).get(0);
						return o && o !== h ? (i = t.extend(l(e), {
							currentTarget: o,
							liveFired: h
						}), (a || r).apply(o, [i].concat(p.call(arguments, 1)))) : f
					}), s(h, e, r, i, n, u || a)
				}))
			}, t.fn.off = function (e, n, i) {
				var r = this;
				return e && !m(e) ? (t.each(e, function (t, e) {
					r.off(t, n, e)
				}), r) : (m(n) || h(i) || i === !1 || (i = n, n = f), i === !1 && (i = E), r.each(function () {
					c(this, e, i, n)
				}))
			}, t.fn.trigger = function (e, n) {
				return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function () {
					"dispatchEvent"in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
				})
			}, t.fn.triggerHandler = function (e, i) {
				var r, o;
				return this.each(function (a, s) {
					r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = s, t.each(n(s, e.type || e), function (t, e) {
						return o = e.proxy(r), !r.isImmediatePropagationStopped() && f
					})
				}), o
			}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function (e) {
				t.fn[e] = function (t) {
					return t ? this.bind(e, t) : this.trigger(e)
				}
			}), ["focus", "blur"].forEach(function (e) {
				t.fn[e] = function (t) {
					return t ? this.bind(e, t) : this.each(function () {
						try {
							this[e]()
						} catch (t) {
						}
					}), this
				}
			}), t.Event = function (t, e) {
				m(t) || (e = t, t = e.type);
				var n = document.createEvent(y[t] || "Events"), i = !0;
				if (e)for (var r in e)"bubbles" == r ? i = !!e[r] : n[r] = e[r];
				return n.initEvent(t, i, !0), u(n)
			}
		}(r), function (t) {
			t.fn.serializeArray = function () {
				var e, n, i = [];
				return t([].slice.call(this.get(0).elements)).each(function () {
					e = t(this), n = e.attr("type"), "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != n && "reset" != n && "button" != n && ("radio" != n && "checkbox" != n || this.checked) && i.push({
						name: e.attr("name"),
						value: e.val()
					})
				}), i
			}, t.fn.serialize = function () {
				var t = [];
				return this.serializeArray().forEach(function (e) {
					t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
				}), t.join("&")
			}, t.fn.submit = function (e) {
				if (e)this.bind("submit", e); else if (this.length) {
					var n = t.Event("submit");
					this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
				}
				return this
			}
		}(r), function (t) {
			"__proto__"in{} || t.extend(t.zepto, {
				Z: function (e, n) {
					return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
				}, isZ: function (e) {
					return "array" === t.type(e) && "__Z"in e
				}
			});
			try {
				getComputedStyle(void 0)
			} catch (e) {
				var n = getComputedStyle;
				window.getComputedStyle = function (t) {
					try {
						return n(t)
					} catch (e) {
						return null
					}
				}
			}
		}(r), function (t) {
			function e(e) {
				return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
			}

			function n(t, e) {
				t = t.replace(/=#\]/g, '="#"]');
				var n, i, r = s.exec(t);
				if (r && r[2]in a && (n = a[r[2]], i = r[3], t = r[1], i)) {
					var o = Number(i);
					i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
				}
				return e(t, n, i)
			}

			var i = t.zepto, r = i.qsa, o = i.matches, a = t.expr[":"] = {
				visible: function () {
					return e(this) ? this : void 0
				}, hidden: function () {
					return e(this) ? void 0 : this
				}, selected: function () {
					return this.selected ? this : void 0
				}, checked: function () {
					return this.checked ? this : void 0
				}, parent: function () {
					return this.parentNode
				}, first: function (t) {
					return 0 === t ? this : void 0
				}, last: function (t, e) {
					return t === e.length - 1 ? this : void 0
				}, eq: function (t, e, n) {
					return t === n ? this : void 0
				}, contains: function (e, n, i) {
					return t(this).text().indexOf(i) > -1 ? this : void 0
				}, has: function (t, e, n) {
					return i.qsa(this, n).length ? this : void 0
				}
			}, s = RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), c = /^\s*>/, u = "Zepto" + +new Date;
			i.qsa = function (e, o) {
				return n(o, function (n, a, s) {
					try {
						var l;
						!n && a ? n = "*" : c.test(n) && (l = t(e).addClass(u), n = "." + u + " " + n);
						var f = r(e, n)
					} catch (d) {
						throw console.error("error performing selector: %o", o), d
					} finally {
						l && l.removeClass(u)
					}
					return a ? i.uniq(t.map(f, function (t, e) {
						return a.call(t, e, f, s)
					})) : f
				})
			}, i.matches = function (t, e) {
				return n(e, function (e, n, i) {
					return !(e && !o(t, e) || n && n.call(t, null, i) !== t)
				})
			}
		}(r)
	}, {}]
}, {}, [1]);