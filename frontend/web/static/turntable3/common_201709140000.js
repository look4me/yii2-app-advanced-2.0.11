var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
	return typeof t
} : function (t) {
	return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
!function t(i, e, s) {
	function o(r, a) {
		if (!e[r]) {
			if (!i[r]) {
				var h = "function" == typeof require && require;
				if (!a && h)return h(r, !0);
				if (n)return n(r, !0);
				var l = new Error("Cannot find module '" + r + "'");
				throw l.code = "MODULE_NOT_FOUND", l
			}
			var c = e[r] = {exports: {}};
			i[r][0].call(c.exports, function (t) {
				var e = i[r][1][t];
				return o(e ? e : t)
			}, c, c.exports, t, i, e, s)
		}
		return e[r].exports
	}

	for (var n = "function" == typeof require && require, r = 0; r < s.length; r++)o(s[r]);
	return o
}({
	1: [function (t, i, e) {
		$.cookie = function (t, i, e) {
			if ("undefined" == typeof i) {
				var s = null;
				if (document.cookie && "" != document.cookie)for (var o = document.cookie.split(";"), n = 0; n < o.length; n++) {
					var r = $.trim(o[n]);
					if (r.substring(0, t.length + 1) == t + "=") {
						s = decodeURIComponent(r.substring(t.length + 1));
						break
					}
				}
				return s
			}
			e = e || {}, null === i && (i = "", e = $.extend({}, e), e.expires = -1);
			var a = "";
			if (e.expires && ("number" == typeof e.expires || e.expires.toUTCString)) {
				var h;
				"number" == typeof e.expires ? (h = new Date, h.setTime(h.getTime() + 24 * e.expires * 60 * 60 * 1e3)) : h = e.expires, a = "; expires=" + h.toUTCString()
			}
			var l = e.path ? "; path=" + e.path : "", c = e.domain ? "; domain=" + e.domain : "", p = e.secure ? "; secure" : "";
			document.cookie = [t, "=", encodeURIComponent(i), a, l, c, p].join("")
		}
	}, {}], 2: [function (t, i, e) {
		!function (i) {
			function e(t) {
				var i = "[\\?&]" + t + "=([^&#]*)", e = new RegExp(i), s = e.exec(location.href);
				return null === s ? "" : s[1]
			}

			t("../cookie/cookie");
			var s = e("tck_rid_6c8") || i.cookie("_coll_rid");
			if (s) {
				_fmOpt = {partner: "duiba", appName: "tuia_h5", token: s};
				var o = new Image(1, 1);
				o.onload = function () {
					_fmOpt.imgLoaded = !0
				}, o.src = "https://fp.fraudmetrix.cn/fp/clear.png?partnerCode=" + _fmOpt.partner + "&appName=" + _fmOpt.appName + "&tokenId=" + _fmOpt.token;
				var n = document.createElement("script");
				n.type = "text/javascript", n.async = !0, n.src = ("https:" == document.location.protocol ? "https://" : "http://") + "static.fraudmetrix.cn/fm.js?ver=0.1&t=" + ((new Date).getTime() / 36e5).toFixed(0);
				var r = document.getElementsByTagName("script")[0];
				r.parentNode.insertBefore(n, r)
			}
		}(Zepto)
	}, {"../cookie/cookie": 1}], 3: [function (t, i, e) {
		t("../../../../unit/common/js/downloadApp"), t("../../../../unit/common/js/statistics"), t("../../../../unit/common/js/showObjectPrize"), t("../../../../unit/common/js/showModal"), t("../../../../unit/common/js/prizeDetail"), t("../../../../module/tongdun"), t("./../components/intercept"), t("./../components/fetchModal")
	}, {
		"../../../../module/tongdun": 2,
		"../../../../unit/common/js/downloadApp": 7,
		"../../../../unit/common/js/prizeDetail": 8,
		"../../../../unit/common/js/showModal": 9,
		"../../../../unit/common/js/showObjectPrize": 10,
		"../../../../unit/common/js/statistics": 11,
		"./../components/fetchModal": 4,
		"./../components/intercept": 5
	}], 4: [function (t, i, e) {
		var s = {
			ajax: function (t) {
				var i = {
					data: {timestamp: (new Date).getTime()}, dataType: "json", success: function () {
					}, error: function (t, i) {
						"timeout" === i ? (t && t.abort(), console.error("请求超时")) : console.error("网络错误")
					}
				};
				t = $.extend(!0, i, t), $.ajax(t)
			}, setId: function (t) {
				switch (t.skinType) {
					case 1:
						window.dingeAlipay = t.id;
						break;
					case 2:
						window.randomAlipay = t.id;
						break;
					case 3:
						window.thanksId = t.id;
						break;
					case 4:
						window.couponId = t.id;
						break;
					case 5:
						window.recommendId = t.id
				}
			}
		};
		/*e.init = function () {
			s.ajax({
				url: "/activity/getAllSkin",
				type: "get",
				data: {couponSkinId: window.CFG && window.CFG.couponSkinId},
				success: function (t) {
					if (t.success) {
						var i = t.data;
						$("body").append('<div class="modal-group"></div>'), i && i.forEach(function (t) {
							s.setId(t), t && t.code && $(".modal-group").append(t.code)
						})
					} else console.error("请求弹层数据出错", t.desc)
				},
				error: function () {
					console.error("请求弹层网络出错");
					var t = '<link rel="stylesheet" href="/static/turntable3/index_201707181200.css">\n<script type="text/javascript">\nvar oHead = document.querySelector(\'body\');\nvar oScript = document.createElement(\'script\');\noScript.type = "text/javascript";\noScript.src = "/static/turntable3/index_201707181200.js";\noHead.appendChild(oScript);\n</script>', i = '<link rel="stylesheet" href="/static/turntable3/index_201708211647.css">\n<script type="text/javascript">\nvar oHead = document.querySelector(\'body\');\nvar oScript = document.createElement(\'script\');\noScript.type = "text/javascript";\noScript.src = "/static/turntable3/index1_201708211647.js";\noHead.appendChild(oScript);\n</script>"';
					$(".modal-group").append(t).append(i)
				}
			})
		}, e.init()*/
	}, {}], 5: [function (t, i, e) {
		!function () {
			function t() {
				if (!history.state) {
					var t = location.href;
					history.replaceState({
						page: "intercept",
						entered: !1
					}, "", intercetpUrl), history.pushState({page: "current"}, "", t)
				}
				window.onpopstate = function () {
					history.state && "intercept" == history.state.page && (history.state.entered || (history.replaceState({
						page: "intercept",
						entered: !0
					}, "", intercetpUrl), e(function () {
						location.reload()
					})))
				}
			}

			function i() {
				$.ajax({
					url: "/activity/getReturnPage",
					type: "get",
					data: {
						slotId: o("slotId"),
						id: o("id"),
						login: o("login"),
						appKey: o("appKey"),
						deviceId: o("deviceId")
					},
					dataType: "json",
					success: function (i) {
						i.success && (window.intercetpUrl = i.data.url, intercetpUrl && t())
					},
					error: function () {
						console.log("network error")
					}
				})
			}

			function e(t) {
				$.ajax({
					url: "/activity/updateReturnTimes",
					type: "post",
					data: {slotId: o("slotId")},
					dataType: "json",
					success: function (i) {
						i.success ? t & t() : console.log("Update times error")
					},
					error: function () {
						console.log("network error")
					}
				})
			}

			function s() {
				return !(!o("tenter") || "SOW" !== o("tenter"))
			}

			function o(t) {
				var i = "[\\?&]" + t + "=([^&#]*)", e = new RegExp(i), s = e.exec(location.href);
				return null === s ? "" : s[1]
			}

			$(function () {
				history.pushState && (history.state ? window.onpopstate = function (t) {
					history.state && "current" == history.state.page ? location.reload() : history.state && "intercept" == history.state.page && (history.state.entered ? history.go(-1) : (history.state.entered = !0, e(function () {
						location.reload()
					})))
				} : s() && i())
			})
		}(Zepto)
	}, {}], 6: [function (t, i, e) {
		var s = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (t) {
			return "undefined" == typeof t ? "undefined" : _typeof2(t)
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : _typeof2(t)
		};
		!function (t, i, e) {
			function o(e, s) {
				this.wrapper = "string" == typeof e ? i.querySelector(e) : e, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
					resizeScrollbars: !0,
					mouseWheelSpeed: 20,
					snapThreshold: .334,
					disablePointer: !h.hasPointer,
					disableTouch: h.hasPointer || !h.hasTouch,
					disableMouse: h.hasPointer || h.hasTouch,
					startX: 0,
					startY: 0,
					scrollY: !0,
					directionLockThreshold: 5,
					momentum: !0,
					bounce: !0,
					bounceTime: 600,
					bounceEasing: "",
					preventDefault: !0,
					preventDefaultException: {tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/},
					HWCompositing: !0,
					useTransition: !0,
					useTransform: !0,
					bindToWrapper: "undefined" == typeof t.onmousedown
				};
				for (var o in s)this.options[o] = s[o];
				this.translateZ = this.options.HWCompositing && h.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = h.hasTransition && this.options.useTransition, this.options.useTransform = h.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? h.ease[this.options.bounceEasing] || h.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
			}

			function n(t, e, s) {
				var o = i.createElement("div"), n = i.createElement("div");
				return s === !0 && (o.style.cssText = "position:absolute;z-index:9999", n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), n.className = "iScrollIndicator", "h" == t ? (s === !0 && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", n.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (s === !0 && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", n.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", e || (o.style.pointerEvents = "none"), o.appendChild(n), o
			}

			function r(e, s) {
				this.wrapper = "string" == typeof s.el ? i.querySelector(s.el) : s.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.options = {
					listenX: !0,
					listenY: !0,
					interactive: !1,
					resize: !0,
					defaultScrollbars: !1,
					shrink: !1,
					fade: !1,
					speedRatioX: 0,
					speedRatioY: 0
				};
				for (var o in s)this.options[o] = s[o];
				if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (h.addEvent(this.indicator, "touchstart", this), h.addEvent(t, "touchend", this)), this.options.disablePointer || (h.addEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.addEvent(t, h.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (h.addEvent(this.indicator, "mousedown", this), h.addEvent(t, "mouseup", this))), this.options.fade) {
					this.wrapperStyle[h.style.transform] = this.scroller.translateZ;
					var n = h.style.transitionDuration;
					this.wrapperStyle[n] = h.isBadAndroid ? "0.0001ms" : "0ms";
					var r = this;
					h.isBadAndroid && a(function () {
						"0.0001ms" === r.wrapperStyle[n] && (r.wrapperStyle[n] = "0s")
					}), this.wrapperStyle.opacity = "0"
				}
			}

			var a = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
					t.setTimeout(i, 1e3 / 60)
				}, h = function () {
				function o(t) {
					return a !== !1 && ("" === a ? t : a + t.charAt(0).toUpperCase() + t.substr(1))
				}

				var n = {}, r = i.createElement("div").style, a = function () {
					for (var t, i = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, s = i.length; e < s; e++)if (t = i[e] + "ransform", t in r)return i[e].substr(0, i[e].length - 1);
					return !1
				}();
				n.getTime = Date.now || function () {
					return (new Date).getTime()
				}, n.extend = function (t, i) {
					for (var e in i)t[e] = i[e]
				}, n.addEvent = function (t, i, e, s) {
					t.addEventListener(i, e, !!s)
				}, n.removeEvent = function (t, i, e, s) {
					t.removeEventListener(i, e, !!s)
				}, n.prefixPointerEvent = function (i) {
					return t.MSPointerEvent ? "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8) : i
				}, n.momentum = function (t, i, s, o, n, r) {
					var a, h, l = t - i, c = e.abs(l) / s;
					return r = void 0 === r ? 6e-4 : r, a = t + c * c / (2 * r) * (l < 0 ? -1 : 1), h = c / r, a < o ? (a = n ? o - n / 2.5 * (c / 8) : o, l = e.abs(a - t), h = l / c) : a > 0 && (a = n ? n / 2.5 * (c / 8) : 0, l = e.abs(t) + a, h = l / c), {
						destination: e.round(a),
						duration: h
					}
				};
				var h = o("transform");
				return n.extend(n, {
					hasTransform: h !== !1,
					hasPerspective: o("perspective")in r,
					hasTouch: "ontouchstart"in t,
					hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
					hasTransition: o("transition")in r
				}), n.isBadAndroid = function () {
					var i = t.navigator.appVersion;
					if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
						var e = i.match(/Safari\/(\d+.\d)/);
						return !(e && "object" === ("undefined" == typeof e ? "undefined" : s(e)) && e.length >= 2) || parseFloat(e[1]) < 535.19
					}
					return !1
				}(), n.extend(n.style = {}, {
					transform: h,
					transitionTimingFunction: o("transitionTimingFunction"),
					transitionDuration: o("transitionDuration"),
					transitionDelay: o("transitionDelay"),
					transformOrigin: o("transformOrigin")
				}), n.hasClass = function (t, i) {
					var e = new RegExp("(^|\\s)" + i + "(\\s|$)");
					return e.test(t.className)
				}, n.addClass = function (t, i) {
					if (!n.hasClass(t, i)) {
						var e = t.className.split(" ");
						e.push(i), t.className = e.join(" ")
					}
				}, n.removeClass = function (t, i) {
					if (n.hasClass(t, i)) {
						var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
						t.className = t.className.replace(e, " ")
					}
				}, n.offset = function (t) {
					for (var i = -t.offsetLeft, e = -t.offsetTop; t = t.offsetParent;)i -= t.offsetLeft, e -= t.offsetTop;
					return {left: i, top: e}
				}, n.preventDefaultException = function (t, i) {
					for (var e in i)if (i[e].test(t[e]))return !0;
					return !1
				}, n.extend(n.eventType = {}, {
					touchstart: 1,
					touchmove: 1,
					touchend: 1,
					mousedown: 2,
					mousemove: 2,
					mouseup: 2,
					pointerdown: 3,
					pointermove: 3,
					pointerup: 3,
					MSPointerDown: 3,
					MSPointerMove: 3,
					MSPointerUp: 3
				}), n.extend(n.ease = {}, {
					quadratic: {
						style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", fn: function (t) {
							return t * (2 - t)
						}
					}, circular: {
						style: "cubic-bezier(0.1, 0.57, 0.1, 1)", fn: function (t) {
							return e.sqrt(1 - --t * t)
						}
					}, back: {
						style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)", fn: function (t) {
							var i = 4;
							return (t -= 1) * t * ((i + 1) * t + i) + 1
						}
					}, bounce: {
						style: "", fn: function (t) {
							return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
						}
					}, elastic: {
						style: "", fn: function (t) {
							var i = .22, s = .4;
							return 0 === t ? 0 : 1 == t ? 1 : s * e.pow(2, -10 * t) * e.sin((t - i / 4) * (2 * e.PI) / i) + 1
						}
					}
				}), n.tap = function (t, e) {
					var s = i.createEvent("Event");
					s.initEvent(e, !0, !0), s.pageX = t.pageX, s.pageY = t.pageY, t.target.dispatchEvent(s)
				}, n.click = function (t) {
					var e, s = t.target;
					/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName) || (e = i.createEvent("MouseEvents"), e.initMouseEvent("click", !0, !0, t.view, 1, s.screenX, s.screenY, s.clientX, s.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e._constructed = !0, s.dispatchEvent(e))
				}, n
			}();
			o.prototype = {
				version: "5.2.0", _init: function () {
					this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
				}, destroy: function () {
					this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
				}, _transitionEnd: function (t) {
					t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
				}, _start: function (t) {
					if (1 != h.eventType[t.type]) {
						var i;
						if (i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== i)return
					}
					if (this.enabled && (!this.initiated || h.eventType[t.type] === this.initiated)) {
						!this.options.preventDefault || h.isBadAndroid || h.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
						var s, o = t.touches ? t.touches[0] : t;
						this.initiated = h.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = h.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, s = this.getComputedPosition(), this._translate(e.round(s.x), e.round(s.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = o.pageX, this.pointY = o.pageY, this._execEvent("beforeScrollStart")
					}
				}, _move: function (t) {
					if (this.enabled && h.eventType[t.type] === this.initiated) {
						this.options.preventDefault && t.preventDefault();
						var i, s, o, n, r = t.touches ? t.touches[0] : t, a = r.pageX - this.pointX, l = r.pageY - this.pointY, c = h.getTime();
						if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += l, o = e.abs(this.distX), n = e.abs(this.distY), !(c - this.endTime > 300 && o < 10 && n < 10)) {
							if (this.directionLocked || this.options.freeScroll || (o > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
								if ("vertical" == this.options.eventPassthrough)t.preventDefault(); else if ("horizontal" == this.options.eventPassthrough)return void(this.initiated = !1);
								l = 0
							} else if ("v" == this.directionLocked) {
								if ("horizontal" == this.options.eventPassthrough)t.preventDefault(); else if ("vertical" == this.options.eventPassthrough)return void(this.initiated = !1);
								a = 0
							}
							a = this.hasHorizontalScroll ? a : 0, l = this.hasVerticalScroll ? l : 0, i = this.x + a, s = this.y + l, (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX), (s > 0 || s < this.maxScrollY) && (s = this.options.bounce ? this.y + l / 3 : s > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = l > 0 ? -1 : l < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(i, s), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
						}
					}
				}, _end: function (t) {
					if (this.enabled && h.eventType[t.type] === this.initiated) {
						this.options.preventDefault && !h.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
						var i, s, o = (t.changedTouches ? t.changedTouches[0] : t, h.getTime() - this.startTime), n = e.round(this.x), r = e.round(this.y), a = e.abs(n - this.startX), l = e.abs(r - this.startY), c = 0, p = "";
						if (this.isInTransition = 0, this.initiated = 0, this.endTime = h.getTime(), !this.resetPosition(this.options.bounceTime)) {
							if (this.scrollTo(n, r), !this.moved)return this.options.tap && h.tap(t, this.options.tap), this.options.click && h.click(t), void this._execEvent("scrollCancel");
							if (this._events.flick && o < 200 && a < 100 && l < 100)return void this._execEvent("flick");
							if (this.options.momentum && o < 300 && (i = this.hasHorizontalScroll ? h.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
									destination: n,
									duration: 0
								}, s = this.hasVerticalScroll ? h.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
									destination: r,
									duration: 0
								}, n = i.destination, r = s.destination, c = e.max(i.duration, s.duration), this.isInTransition = 1), this.options.snap) {
								var d = this._nearestSnap(n, r);
								this.currentPage = d, c = this.options.snapSpeed || e.max(e.max(e.min(e.abs(n - d.x), 1e3), e.min(e.abs(r - d.y), 1e3)), 300), n = d.x, r = d.y, this.directionX = 0, this.directionY = 0, p = this.options.bounceEasing
							}
							return n != this.x || r != this.y ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) && (p = h.ease.quadratic), void this.scrollTo(n, r, c, p)) : void this._execEvent("scrollEnd")
						}
					}
				}, _resize: function () {
					var t = this;
					clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
						t.refresh()
					}, this.options.resizePolling)
				}, resetPosition: function (t) {
					var i = this.x, e = this.y;
					return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? i = 0 : this.x < this.maxScrollX && (i = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? e = 0 : this.y < this.maxScrollY && (e = this.maxScrollY), (i != this.x || e != this.y) && (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
				}, disable: function () {
					this.enabled = !1
				}, enable: function () {
					this.enabled = !0
				}, refresh: function () {
					this.wrapper.offsetHeight;
					this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = h.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
				}, on: function (t, i) {
					this._events[t] || (this._events[t] = []), this._events[t].push(i)
				}, off: function (t, i) {
					if (this._events[t]) {
						var e = this._events[t].indexOf(i);
						e > -1 && this._events[t].splice(e, 1)
					}
				}, _execEvent: function (t) {
					if (this._events[t]) {
						var i = 0, e = this._events[t].length;
						if (e)for (; i < e; i++)this._events[t][i].apply(this, [].slice.call(arguments, 1))
					}
				}, scrollBy: function (t, i, e, s) {
					t = this.x + t, i = this.y + i, e = e || 0, this.scrollTo(t, i, e, s)
				}, scrollTo: function (t, i, e, s) {
					s = s || h.ease.circular, this.isInTransition = this.options.useTransition && e > 0;
					var o = this.options.useTransition && s.style;
					!e || o ? (o && (this._transitionTimingFunction(s.style), this._transitionTime(e)), this._translate(t, i)) : this._animate(t, i, e, s.fn)
				}, scrollToElement: function (t, i, s, o, n) {
					if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
						var r = h.offset(t);
						r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= o || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, i = void 0 === i || null === i || "auto" === i ? e.max(e.abs(this.x - r.left), e.abs(this.y - r.top)) : i, this.scrollTo(r.left, r.top, i, n)
					}
				}, _transitionTime: function (t) {
					t = t || 0;
					var i = h.style.transitionDuration;
					if (this.scrollerStyle[i] = t + "ms", !t && h.isBadAndroid) {
						this.scrollerStyle[i] = "0.0001ms";
						var e = this;
						a(function () {
							"0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s")
						})
					}
					if (this.indicators)for (var s = this.indicators.length; s--;)this.indicators[s].transitionTime(t)
				}, _transitionTimingFunction: function (t) {
					if (this.scrollerStyle[h.style.transitionTimingFunction] = t, this.indicators)for (var i = this.indicators.length; i--;)this.indicators[i].transitionTimingFunction(t)
				}, _translate: function (t, i) {
					if (this.options.useTransform ? this.scrollerStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = e.round(t), i = e.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.x = t, this.y = i, this.indicators)for (var s = this.indicators.length; s--;)this.indicators[s].updatePosition()
				}, _initEvents: function (i) {
					var e = i ? h.removeEvent : h.addEvent, s = this.options.bindToWrapper ? this.wrapper : t;
					e(t, "orientationchange", this), e(t, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(s, "mousemove", this), e(s, "mousecancel", this), e(s, "mouseup", this)), h.hasPointer && !this.options.disablePointer && (e(this.wrapper, h.prefixPointerEvent("pointerdown"), this), e(s, h.prefixPointerEvent("pointermove"), this), e(s, h.prefixPointerEvent("pointercancel"), this), e(s, h.prefixPointerEvent("pointerup"), this)), h.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(s, "touchmove", this), e(s, "touchcancel", this), e(s, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
				}, getComputedPosition: function () {
					var i, e, s = t.getComputedStyle(this.scroller, null);
					return this.options.useTransform ? (s = s[h.style.transform].split(")")[0].split(", "), i = +(s[12] || s[4]), e = +(s[13] || s[5])) : (i = +s.left.replace(/[^-\d.]/g, ""), e = +s.top.replace(/[^-\d.]/g, "")), {
						x: i,
						y: e
					}
				}, _initIndicators: function () {
					function t(t) {
						if (a.indicators)for (var i = a.indicators.length; i--;)t.call(a.indicators[i])
					}

					var i, e = this.options.interactiveScrollbars, s = "string" != typeof this.options.scrollbars, o = [], a = this;
					this.indicators = [], this.options.scrollbars && (this.options.scrollY && (i = {
						el: n("v", e, this.options.scrollbars),
						interactive: e,
						defaultScrollbars: !0,
						customStyle: s,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenX: !1
					}, this.wrapper.appendChild(i.el), o.push(i)), this.options.scrollX && (i = {
						el: n("h", e, this.options.scrollbars),
						interactive: e,
						defaultScrollbars: !0,
						customStyle: s,
						resize: this.options.resizeScrollbars,
						shrink: this.options.shrinkScrollbars,
						fade: this.options.fadeScrollbars,
						listenY: !1
					}, this.wrapper.appendChild(i.el), o.push(i))), this.options.indicators && (o = o.concat(this.options.indicators));
					for (var h = o.length; h--;)this.indicators.push(new r(this, o[h]));
					this.options.fadeScrollbars && (this.on("scrollEnd", function () {
						t(function () {
							this.fade()
						})
					}), this.on("scrollCancel", function () {
						t(function () {
							this.fade()
						})
					}), this.on("scrollStart", function () {
						t(function () {
							this.fade(1)
						})
					}), this.on("beforeScrollStart", function () {
						t(function () {
							this.fade(1, !0)
						})
					})), this.on("refresh", function () {
						t(function () {
							this.refresh()
						})
					}), this.on("destroy", function () {
						t(function () {
							this.destroy()
						}), delete this.indicators
					})
				}, _initWheel: function () {
					h.addEvent(this.wrapper, "wheel", this), h.addEvent(this.wrapper, "mousewheel", this), h.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
						clearTimeout(this.wheelTimeout), this.wheelTimeout = null, h.removeEvent(this.wrapper, "wheel", this), h.removeEvent(this.wrapper, "mousewheel", this), h.removeEvent(this.wrapper, "DOMMouseScroll", this)
					})
				}, _wheel: function (t) {
					if (this.enabled) {
						t.preventDefault();
						var i, s, o, n, r = this;
						if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
								r.options.snap || r._execEvent("scrollEnd"), r.wheelTimeout = void 0
							}, 400), "deltaX"in t)1 === t.deltaMode ? (i = -t.deltaX * this.options.mouseWheelSpeed, s = -t.deltaY * this.options.mouseWheelSpeed) : (i = -t.deltaX, s = -t.deltaY); else if ("wheelDeltaX"in t)i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, s = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta"in t)i = s = t.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
							if (!("detail"in t))return;
							i = s = -t.detail / 3 * this.options.mouseWheelSpeed
						}
						if (i *= this.options.invertWheelDirection, s *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = s, s = 0), this.options.snap)return o = this.currentPage.pageX, n = this.currentPage.pageY, i > 0 ? o-- : i < 0 && o++, s > 0 ? n-- : s < 0 && n++, void this.goToPage(o, n);
						o = this.x + e.round(this.hasHorizontalScroll ? i : 0), n = this.y + e.round(this.hasVerticalScroll ? s : 0), this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0, this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0, o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), n > 0 ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY), this.scrollTo(o, n, 0)
					}
				}, _initSnap: function () {
					this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
						var t, i, s, o, n, r, a = 0, h = 0, l = 0, c = this.options.snapStepX || this.wrapperWidth, p = this.options.snapStepY || this.wrapperHeight;
						if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
							if (this.options.snap === !0)for (s = e.round(c / 2), o = e.round(p / 2); l > -this.scrollerWidth;) {
								for (this.pages[a] = [], t = 0, n = 0; n > -this.scrollerHeight;)this.pages[a][t] = {
									x: e.max(l, this.maxScrollX),
									y: e.max(n, this.maxScrollY),
									width: c,
									height: p,
									cx: l - s,
									cy: n - o
								}, n -= p, t++;
								l -= c, a++
							} else for (r = this.options.snap, t = r.length, i = -1; a < t; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (h = 0, i++), this.pages[h] || (this.pages[h] = []), l = e.max(-r[a].offsetLeft, this.maxScrollX), n = e.max(-r[a].offsetTop, this.maxScrollY), s = l - e.round(r[a].offsetWidth / 2), o = n - e.round(r[a].offsetHeight / 2), this.pages[h][i] = {
								x: l,
								y: n,
								width: r[a].offsetWidth,
								height: r[a].offsetHeight,
								cx: s,
								cy: o
							}, l > this.maxScrollX && h++;
							this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = e.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
						}
					}), this.on("flick", function () {
						var t = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.x - this.startX), 1e3), e.min(e.abs(this.y - this.startY), 1e3)), 300);
						this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
					})
				}, _nearestSnap: function (t, i) {
					if (!this.pages.length)return {x: 0, y: 0, pageX: 0, pageY: 0};
					var s = 0, o = this.pages.length, n = 0;
					if (e.abs(t - this.absStartX) < this.snapThresholdX && e.abs(i - this.absStartY) < this.snapThresholdY)return this.currentPage;
					for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), i > 0 ? i = 0 : i < this.maxScrollY && (i = this.maxScrollY); s < o; s++)if (t >= this.pages[s][0].cx) {
						t = this.pages[s][0].x;
						break
					}
					for (o = this.pages[s].length; n < o; n++)if (i >= this.pages[0][n].cy) {
						i = this.pages[0][n].y;
						break
					}
					return s == this.currentPage.pageX && (s += this.directionX, s < 0 ? s = 0 : s >= this.pages.length && (s = this.pages.length - 1), t = this.pages[s][0].x), n == this.currentPage.pageY && (n += this.directionY, n < 0 ? n = 0 : n >= this.pages[0].length && (n = this.pages[0].length - 1), i = this.pages[0][n].y), {
						x: t,
						y: i,
						pageX: s,
						pageY: n
					}
				}, goToPage: function (t, i, s, o) {
					o = o || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
					var n = this.pages[t][i].x, r = this.pages[t][i].y;
					s = void 0 === s ? this.options.snapSpeed || e.max(e.max(e.min(e.abs(n - this.x), 1e3), e.min(e.abs(r - this.y), 1e3)), 300) : s, this.currentPage = {
						x: n,
						y: r,
						pageX: t,
						pageY: i
					}, this.scrollTo(n, r, s, o)
				}, next: function (t, i) {
					var e = this.currentPage.pageX, s = this.currentPage.pageY;
					e++, e >= this.pages.length && this.hasVerticalScroll && (e = 0, s++), this.goToPage(e, s, t, i)
				}, prev: function (t, i) {
					var e = this.currentPage.pageX, s = this.currentPage.pageY;
					e--, e < 0 && this.hasVerticalScroll && (e = 0, s--), this.goToPage(e, s, t, i)
				}, _initKeys: function (i) {
					var e, o = {pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40};
					if ("object" == s(this.options.keyBindings))for (e in this.options.keyBindings)"string" == typeof this.options.keyBindings[e] && (this.options.keyBindings[e] = this.options.keyBindings[e].toUpperCase().charCodeAt(0)); else this.options.keyBindings = {};
					for (e in o)this.options.keyBindings[e] = this.options.keyBindings[e] || o[e];
					h.addEvent(t, "keydown", this), this.on("destroy", function () {
						h.removeEvent(t, "keydown", this)
					})
				}, _key: function (t) {
					if (this.enabled) {
						var i, s = this.options.snap, o = s ? this.currentPage.pageX : this.x, n = s ? this.currentPage.pageY : this.y, r = h.getTime(), a = this.keyTime || 0, l = .25;
						switch (this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(e.round(i.x), e.round(i.y)), this.isInTransition = !1), this.keyAcceleration = r - a < 200 ? e.min(this.keyAcceleration + l, 50) : 0, t.keyCode) {
							case this.options.keyBindings.pageUp:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? o += s ? 1 : this.wrapperWidth : n += s ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.pageDown:
								this.hasHorizontalScroll && !this.hasVerticalScroll ? o -= s ? 1 : this.wrapperWidth : n -= s ? 1 : this.wrapperHeight;
								break;
							case this.options.keyBindings.end:
								o = s ? this.pages.length - 1 : this.maxScrollX, n = s ? this.pages[0].length - 1 : this.maxScrollY;
								break;
							case this.options.keyBindings.home:
								o = 0, n = 0;
								break;
							case this.options.keyBindings.left:
								o += s ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.up:
								n += s ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.right:
								o -= s ? -1 : 5 + this.keyAcceleration >> 0;
								break;
							case this.options.keyBindings.down:
								n -= s ? 1 : 5 + this.keyAcceleration >> 0;
								break;
							default:
								return
						}
						if (s)return void this.goToPage(o, n);
						o > 0 ? (o = 0, this.keyAcceleration = 0) : o < this.maxScrollX && (o = this.maxScrollX, this.keyAcceleration = 0), n > 0 ? (n = 0, this.keyAcceleration = 0) : n < this.maxScrollY && (n = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(o, n, 0), this.keyTime = r
					}
				}, _animate: function (t, i, e, s) {
					function o() {
						var d, u, f, m = h.getTime();
						return m >= p ? (n.isAnimating = !1, n._translate(t, i), void(n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd"))) : (m = (m - c) / e, f = s(m), d = (t - r) * f + r, u = (i - l) * f + l, n._translate(d, u), void(n.isAnimating && a(o)))
					}

					var n = this, r = this.x, l = this.y, c = h.getTime(), p = c + e;
					this.isAnimating = !0, o()
				}, handleEvent: function (t) {
					switch (t.type) {
						case"touchstart":
						case"pointerdown":
						case"MSPointerDown":
						case"mousedown":
							this._start(t);
							break;
						case"touchmove":
						case"pointermove":
						case"MSPointerMove":
						case"mousemove":
							this._move(t);
							break;
						case"touchend":
						case"pointerup":
						case"MSPointerUp":
						case"mouseup":
						case"touchcancel":
						case"pointercancel":
						case"MSPointerCancel":
						case"mousecancel":
							this._end(t);
							break;
						case"orientationchange":
						case"resize":
							this._resize();
							break;
						case"transitionend":
						case"webkitTransitionEnd":
						case"oTransitionEnd":
						case"MSTransitionEnd":
							this._transitionEnd(t);
							break;
						case"wheel":
						case"DOMMouseScroll":
						case"mousewheel":
							this._wheel(t);
							break;
						case"keydown":
							this._key(t);
							break;
						case"click":
							this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
					}
				}
			}, r.prototype = {
				handleEvent: function (t) {
					switch (t.type) {
						case"touchstart":
						case"pointerdown":
						case"MSPointerDown":
						case"mousedown":
							this._start(t);
							break;
						case"touchmove":
						case"pointermove":
						case"MSPointerMove":
						case"mousemove":
							this._move(t);
							break;
						case"touchend":
						case"pointerup":
						case"MSPointerUp":
						case"mouseup":
						case"touchcancel":
						case"pointercancel":
						case"MSPointerCancel":
						case"mousecancel":
							this._end(t)
					}
				}, destroy: function () {
					this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (h.removeEvent(this.indicator, "touchstart", this), h.removeEvent(this.indicator, h.prefixPointerEvent("pointerdown"), this), h.removeEvent(this.indicator, "mousedown", this), h.removeEvent(t, "touchmove", this), h.removeEvent(t, h.prefixPointerEvent("pointermove"), this), h.removeEvent(t, "mousemove", this), h.removeEvent(t, "touchend", this), h.removeEvent(t, h.prefixPointerEvent("pointerup"), this), h.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
				}, _start: function (i) {
					var e = i.touches ? i.touches[0] : i;
					i.preventDefault(), i.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = h.getTime(), this.options.disableTouch || h.addEvent(t, "touchmove", this), this.options.disablePointer || h.addEvent(t, h.prefixPointerEvent("pointermove"), this), this.options.disableMouse || h.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
				}, _move: function (t) {
					var i, e, s, o, n = t.touches ? t.touches[0] : t;
					h.getTime();
					this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, i = n.pageX - this.lastPointX, this.lastPointX = n.pageX, e = n.pageY - this.lastPointY, this.lastPointY = n.pageY, s = this.x + i, o = this.y + e, this._pos(s, o), t.preventDefault(), t.stopPropagation()
				}, _end: function (i) {
					if (this.initiated) {
						if (this.initiated = !1, i.preventDefault(), i.stopPropagation(), h.removeEvent(t, "touchmove", this), h.removeEvent(t, h.prefixPointerEvent("pointermove"), this), h.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
							var s = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), o = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.scroller.x - s.x), 1e3), e.min(e.abs(this.scroller.y - s.y), 1e3)), 300);
							this.scroller.x == s.x && this.scroller.y == s.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = s, this.scroller.scrollTo(s.x, s.y, o, this.scroller.options.bounceEasing))
						}
						this.moved && this.scroller._execEvent("scrollEnd")
					}
				}, transitionTime: function (t) {
					t = t || 0;
					var i = h.style.transitionDuration;
					if (this.indicatorStyle[i] = t + "ms", !t && h.isBadAndroid) {
						this.indicatorStyle[i] = "0.0001ms";
						var e = this;
						a(function () {
							"0.0001ms" === e.indicatorStyle[i] && (e.indicatorStyle[i] = "0s")
						})
					}
				}, transitionTimingFunction: function (t) {
					this.indicatorStyle[h.style.transitionTimingFunction] = t
				}, refresh: function () {
					this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (h.addClass(this.wrapper, "iScrollBothScrollbars"), h.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (h.removeClass(this.wrapper, "iScrollBothScrollbars"), h.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
					this.wrapper.offsetHeight;
					this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = e.max(e.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = e.max(e.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
				}, updatePosition: function () {
					var t = this.options.listenX && e.round(this.sizeRatioX * this.scroller.x) || 0, i = this.options.listenY && e.round(this.sizeRatioY * this.scroller.y) || 0;
					this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = e.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = e.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), i < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = e.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px"), i = this.minBoundaryY) : i > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = e.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height) : i = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = i, this.scroller.options.useTransform ? this.indicatorStyle[h.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px")
				}, _pos: function (t, i) {
					t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), i < 0 ? i = 0 : i > this.maxPosY && (i = this.maxPosY), t = this.options.listenX ? e.round(t / this.sizeRatioX) : this.scroller.x, i = this.options.listenY ? e.round(i / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, i)
				}, fade: function (t, i) {
					if (!i || this.visible) {
						clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
						var e = t ? 250 : 500, s = t ? 0 : 300;
						t = t ? "1" : "0", this.wrapperStyle[h.style.transitionDuration] = e + "ms", this.fadeTimeout = setTimeout(function (t) {
							this.wrapperStyle.opacity = t, this.visible = +t
						}.bind(this, t), s)
					}
				}
			}, o.utils = h, t.IScroll = o
		}(window, document, Math)
	}, {}], 7: [function (t, i, e) {
		!function (t) {
			var i = navigator.userAgent.toLowerCase(), e = function () {
				window.downloadAppConfig ? i.match(/iphone/gi) || i.match(/ipad/gi) ? o() : window.downloadAppConfig.confirm || "true" == window.downloadAppConfig.confirm ? t.modal({
					type: "confirm",
					title: "下载确认",
					section: "即将开始下载，是否继续",
					callback: {
						save: function () {
							window.downloadAppConfig.stats ? t.ajax({
								url: window.downloadAppConfig.stats,
								complete: function () {
									o()
								}
							}) : o()
						}
					}
				}) : o() : console.error("请先配置参数window.downloadAppConfig")
			}, s = function (t) {
				if (t.indexOf("dbnewopen") != -1)window.location.href = t; else if (t.indexOf("?") !== -1)if (t.indexOf("#") !== -1) {
					if (t.indexOf("#/") !== -1)return void(window.location.href = t + "&dbnewopen");
					window.location.href = t.split("#")[0] + "&dbnewopen#" + t.split("#")[1]
				} else {
					if (window.ucAppId)return void(window.location.href = t + "&nowake=1&dbnewopen");
					window.location.href = t + "&dbnewopen"
				} else"" !== t && (window.location.href = t + "?dbnewopen")
			}, o = function () {
				var t, e = window.downloadAppConfig.openUrl || "", o = "", n = !1;
				void 0 !== window.TBSDK_ADA && (t = function (t) {
					var i = function () {
						n = !0, window.isSpecialApp ? window.location.href = t : window.BC_SDK.openPage({url: t})
					};
					t.indexOf("taoquan.taobao.com") === -1 && t.indexOf("shop.m.taobao.com") === -1 || (window.BC_SDK = TBSDK_ADA.init({
						appkey: "23402401",
						openTBAPP: !0
					}), i()), t.indexOf("s.click.taobao.com") !== -1 && (window.BC_SDK = TBSDK_ADA.init({
						appkey: "23454468",
						appSecret: "3846ae97316a0b31321a8f493f826986",
						openTBAPP: !0
					}), i())
				});
				var r = function (i) {
					return i && i.indexOf("weixin://") !== -1 ? (n = !0, void(window.location.href = i)) : void(e && e.indexOf("weixin://") !== -1 || void 0 !== window.TBSDK_ADA && t(i))
				};
				if (i.match(/iphone/gi) || i.match(/ipad/gi)) {
					if (o = window.downloadAppConfig.iosDownloadUrl, r(o), n)return;
					if (i.match(/MicroMessenger/gi))s(o); else if (e)window.location.href = e; else if (o.indexOf("itunes.apple.com") != -1) {
						var a = document.createElement("iframe");
						a.src = o, a.style.display = "none", window.setTimeout(function () {
							document.body.appendChild(a)
						}, 300)
					} else s(o)
				} else {
					if (o = window.downloadAppConfig.androidDownloadUrl, r(o), n)return;
					if (e)return void(window.location.href = e);
					o.indexOf(".apk") != -1 || o.indexOf("dbnewopen") != -1 ? window.location.href = o : s(o)
				}
			};
			window.downloadApp = e
		}(Zepto)
	}, {}], 8: [function (t, i, e) {
		!function (i) {
			t("../IScroll");
			var e = !1, s = function (t) {
				return t && t.url && t.data && !e ? (this.options = t, "coupon" == this.options.prizeType || "physical" == this.options.prizeType || "nothing" == this.options.prizeType ? (e = !0, this.init(), this) : void 0) : console.warn("参数异常")
			};
			s.prototype.init = function () {
				this.ajax(), this.template(), this.slideDown()
			}, s.prototype.ajax = function () {
				i(".prize-detail-content").hide(), this.xhr = i.ajax({
					url: this.options.url,
					type: "post",
					data: this.options.data,
					dataType: "json",
					success: function (t) {
						t.success && (i(".prize-detail-loading").hide(), i(".prize-detail-img").attr("src", t.data.img), i(".prize-detail-info h3").html(t.data.title), i(".prize-detail-info p").html(t.data.valiDate), i(".prize-detail-description").html(t.data.description), i(".prize-detail-description a").addClass("needsclick"), i(".prize-detail-slidebox").show(), i(".prize-detail-slidebox img").each(function (t, i) {
							i.onload = function () {
								new IScroll(".prize-detail-slidebox", {
									mouseWheel: !0,
									scrollbars: !0,
									shrinkScrollbars: "scale",
									click: !0
								})
							}
						}))
					},
					error: function (t) {
						console.log(t)
					}
				})
			}, s.prototype.template = function () {
				var t = "";
				t += '<div class="prize-detail-modal"><div class="prize-detail-dialog"><div class="prize-detail-slidebox"><div class="prize-detail-content"><img class="prize-detail-img"><div class="prize-detail-info"><h3></h3><p></p></div><div class="prize-detail-description"></div></div></div><i class="prize-detail-slideup"></i><div class="prize-detail-loading"><i></i><p>正在获取奖品信息,请稍后...</p></div></div></div>', i("body").append(t)
			}, s.prototype.slideDown = function () {
				i("#db-content").addClass("filter-blur"), i(".prize-detail-modal").show(), setTimeout(function () {
					i(".prize-detail-modal").addClass("show")
				}, 0), i(".prize-detail-loading").show();
				var t = this;
				i(".prize-detail-slideup").on("click", function () {
					i(".prize-detail-modal").removeClass("show"), setTimeout(function () {
						i(".prize-detail-modal").remove(), e = !1
					}, 300), i("#db-content").removeClass("filter-blur"), t.xhr.abort()
				})
			}, window.GetPrizeDetail = s
		}(Zepto)
	}, {"../IScroll": 6}], 9: [function (t, i, e) {
		!function (t) {
			var i = {
				show: function (i) {
					var e = {
						title: "",
						tip: "",
						type: "",
						btnText: "",
						link: "",
						clickCallback: null,
						btnCallback: null
					};
					i = t.extend({}, e, i), this.render(i)
				}, hide: function () {
					t(".db-msg-modal").remove(), t("#db-content").removeClass("filter")
				}, render: function (i) {
					/*var e = CFG.host, s = this, o = {
						again: e + "/h5/activity/showModal/1.0/again.png",
						noPrize: e + "/h5/activity/showModal/1.0/noPrize.png",
						todayOver: e + "/h5/activity/showModal/1.0/todayOver.png",
						over: e + "/h5/activity/showModal/1.0/over.png",
						preview: e + "/h5/activity/showModal/1.0/noCredits.png",
						systemError: e + "/h5/activity/showModal/1.0/noLogin.png",
						networkError: e + "/h5/activity/showModal/1.0/networkError.png"
					}, n = o[i.type], r = '<div class="db-msg-modal"><div class="msg-modal-wrapper"><div class="msg-modal-header"><i class="msg-modal-close"></i><h4 class="msg-title">' + i.title + '</h4><p class="msg-tip">' + i.tip + '</p></div><div class="msg-modal-section">' + (n ? '<img src="' + n + '" />' : "") + '</div><div class="msg-modal-footer"><a href="javascript:;" class="msg-btn">' + i.btnText + "</a></div></div></div>";
					t("body").append(r), t("#db-content").addClass("filter"), t(".db-msg-modal").off("click").on("click", ".msg-modal-close", function () {
						i.clickCallback && i.clickCallback(), s.hide()
					}).on("click", ".msg-btn", function () {
						i.link && (window.location.href = i.link), i.btnCallback ? i.btnCallback() : i.clickCallback && i.clickCallback(), s.hide()
					})*/
				}
			};
			window.errorMsgModal = i
		}(Zepto)
	}, {}], 10: [function (t, i, e) {
		!function (t) {
			var i = function (i) {
				var e = {
					title: "恭喜您，中奖啦",
					desc: "也可到首页“兑换记录”领奖，24小时内有效",
					name: "",
					type: "object",
					img: "",
					leftBtnText: "继续抽奖",
					btnText: "查看奖品",
					onsubmit: function () {
					},
					onclose: function () {
					}
				};
				i.type && ("virtual" === i.type ? e.btnText = "查看奖品" : e.btnText = "立即领奖"), i = t.extend({}, e, i);
				var s = "";
				s += '<div class="prize-dialog-modal"><div class="prize-dialog-wrapper animated zoomIn"><span class="shine"></span>', s += '<div class="prize-dialog-content"><span class="trophy"></span>';
				for (var o = 3; o <= 11; o++)s += '<span class="color-point point' + o + '"></span>';
				s += '<span class="btn-close"></span>', s += "<h3>" + i.title + '</h3><p class="prize-name">' + i.name + '</p><img src="' + i.img + '" />', s += '<p class="prize-desc">' + i.desc + "</p>", s += '<div class="btns">', s += '<a href="javascript:;" class="btn btn-left btn-orange btn-cancle">' + i.leftBtnText + "</a>", s += '<a href="javascript:;" class="btn btn-right btn-red btn-submit">' + i.btnText + "</a>", s += "</div></div></div></div>", t("body").append(s), t(".prize-dialog-wrapper").find(".btn-submit").on("click", i.onsubmit), t(".prize-dialog-wrapper").find(".btn-close,.btn-cancle").on("click", function () {
					t(".prize-dialog-modal").remove(), i.onclose && i.onclose()
				})
			};
			window.showObjectPrize = i
		}(Zepto)
	}, {}], 11: [function (t, i, e) {
		!function (t, i, e) {
			var s = {
				initLog: function () {
					var t = this;
					t.showLog(), t.clickLog(), t.srollLog()
				}, showLog: function (e, s) {
					var o = this, n = i(t).height();
					i("body").find("[db-exposure]").not("[db-exposure-get]").each(function () {
						var r = i(this), a = r.attr("db-exposure");
						if (!r.offset() || 0 !== r.offset().width) {
							var h = !1, l = !1;
							if (r.offset() && (h = i(t).scrollTop() >= r.offset().top - n + (s || 0), l = i(t).scrollTop() <= r.offset().top + (s || 50)), h && l && (r.attr("db-exposure-get", !0), void 0 !== a && "undefined" !== a && "" !== i.trim(a))) {
								try {
									a = JSON.parse(a)
								} catch (c) {
									console.log("数据曝光失败:" + (c || ""))
								}
								a.domain && o.sendApi({
									domain: a.domain,
									url: "/exposure/standard",
									data: a
								}, function () {
									e && e(), r.attr("db-exposure-get", !0)
								}), a.domain4Web && o.sendApi({domain: a.domain4Web, url: a.url, data: a}, function () {
									e && e(), r.attr("db-exposure-get", !0)
								})
							}
						}
					})
				}, clickLog: function (t) {
					var e = this;
					i("body").find("[db-click]").unbind("click.statistics").bind("click.statistics", function () {
						var s = i(this), o = s.attr("db-click");
						if ("none" !== s.css("display") && "disabled" !== s.attr("disabled") && !s.prop("disabled") && void 0 !== o && "undefined" !== o && "" !== i.trim(o)) {
							try {
								o = JSON.parse(o)
							} catch (n) {
								console.log("数据曝光失败:" + (n || ""))
							}
							o.domain4Web && e.sendApi({domain: o.domain4Web, url: o.url, data: o}, function () {
								t && t(), console.log("完成点击")
							})
						}
					})
				}, srollLog: function (e) {
					var s = this;
					setTimeout(function () {
						i(t).scroll(function () {
							s.showLog()
						})
					}, 200)
				}, sendApi: function (t, e, s, o) {
					try {
						var n = JSON.stringify(t);
						if (n.indexOf("iframe") !== -1)return
					} catch (r) {
						console.log("数据异常:" + (r || ""))
					}
					var a = t.domain || "", h = t.url;
					delete t.domain, delete t.url, t.data && t.data.domain && delete t.data.domain, i.ajax({
						url: a + h,
						data: t.data,
						dataType: "jsonp",
						type: "get",
						jsonpCallback: "tracks",
						complete: function () {
							e && e()
						},
						success: function (t) {
							s && s(t)
						},
						error: function (t) {
							o && o(t)
						}
					})
				}
			}, o = function (t) {
				if (t) {
					var i = JSON.parse(t), e = [];
					for (var s in i)e.push(encodeURIComponent(s) + "=" + encodeURIComponent(i[s]));
					return i.domainWeb + i.url + "?" + e.join("&")
				}
			};
			s.initLog(), e.exposure = s, e.format = o
		}(window, $, window.DB || (window.DB = {}))
	}, {}]
}, {}, [3]);