var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t
} : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
};
!function t(i, e, s) {
    function o(r, a) {
        if (!e[r]) {
            if (!i[r]) {
                var l = "function" == typeof require && require;
                if (!a && l)return l(r, !0);
                if (n)return n(r, !0);
                var h = new Error("Cannot find module '" + r + "'");
                throw h.code = "MODULE_NOT_FOUND", h
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
                var l;
                "number" == typeof e.expires ? (l = new Date, l.setTime(l.getTime() + 24 * e.expires * 60 * 60 * 1e3)) : l = e.expires, a = "; expires=" + l.toUTCString()
            }
            var h = e.path ? "; path=" + e.path : "", c = e.domain ? "; domain=" + e.domain : "",
                p = e.secure ? "; secure" : "";
            document.cookie = [t, "=", encodeURIComponent(i), a, h, c, p].join("")
        }
    }, {}], 2: [function (t, i, e) {
        !function (i) {
            var e = t("../../unit/lib/lib-template/0.0.0/artTemplate"), s = {
                init: function (e) {
                    var s = this, o = t("./tpl");
                    CFG.isShowRecommend ? this.ajax(function (t) {
                        t.recommend = !0, s.render(i("body"), t, o), i("#recommend-modal").show(), window.DB && window.DB.exposure && window.DB.exposure.initLog(), e && e()
                    }) : s.render(i("body"), {recommend: !1}, o)
                }, render: function o(t, i, s) {
                    var o = e.compile(s), n = o(i);
                    t.append(n)
                }, ajax: function (t) {
                    var e = this;
                    i.ajax({
                        url: "/activity/getRecommend",
                        type: "get",
                        dataType: "json",
                        data: {
                            slotId: e.getparams("slotId"),
                            id: e.getparams("id"),
                            login: e.getparams("login"),
                            appKey: e.getparams("appKey"),
                            deviceId: e.getparams("deviceId"),
                            isShowRecommend: CFG.isShowRecommend,
                            isAlipay: !1
                        },
                        success: function (i) {
                            i.success ? (e.isJPG(i.data.block1 && i.data.block1.bannerUrl) && "function" == typeof"".ossimg && (i.data.block1.bannerUrl = i.data.block1.bannerUrl.ossimg()), e.isJPG(i.data.block2 && i.data.block2.bannerUrl) && "function" == typeof"".ossimg && (i.data.block2.bannerUrl = i.data.block2.bannerUrl.ossimg()), t && t(i.data)) : t && t("")
                        },
                        error: function () {
                            console.log("get recommend queue error")
                        }
                    })
                }, show: function () {
                    var t = this;
                    t.init(function () {
                        window.DB && window.DB.exposure && window.DB.exposure.initLog()
                    }), t.events()
                }, events: function () {
                    i("body").on("click", "#recommend-modal .close", function () {
                        i("#recommend-modal").hide().remove()
                    })
                }, isJPG: function (t) {
                    var i = !1;
                    if (t) {
                        var e = t.split(".");
                        i = e.length > 0 && ("jpg" === e[e.length - 1] || "png" === e[e.length - 1])
                    }
                    return i
                }, getparams: function (t) {
                    var i = "[\\?&]" + t + "=([^&#]*)", e = new RegExp(i), s = e.exec(location.href);
                    return null === s ? "" : s[1]
                }
            };
            window.recommendModal = s
        }(Zepto)
    }, {"../../unit/lib/lib-template/0.0.0/artTemplate": 14, "./tpl": 3}], 3: [function (t, i, e) {
        i.exports = '<div id="recommend-modal" class="recommend-modal"><div class="recommend-modal-dialog"> <i class="close" db-exposure="{{stRecommendInfo}}"></i>{{if !block1}}<div class="recommend-body3">{{if recommend}}<a class="recommend-bg3Btn" href="{{block3.actUrl}}"></a>{{/if}}</div>{{else}}{{if !block2}}<div class="recommend-body2"><a class="fuli" href="{{block3.actUrl}}"></a><a class="recommend-li" href="{{block1.actUrl}}"><i class="recommend-btn"></i><img src="{{block1.bannerUrl}}"></a></div>{{else}}<div class="recommend-body1"><a class="fuli" href="{{block3.actUrl}}"></a><a class="recommend-li" href="{{block1.actUrl}}"><i class="recommend-btn"></i><img src="{{block1.bannerUrl}}"></a><a class="recommend-li" href="{{block2.actUrl}}"><i class="recommend-btn"></i><img src="{{block2.bannerUrl}}"></a></div>{{/if}}{{/if}}</div></div>'
    }, {}], 4: [function (t, i, e) {
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
    }, {"../cookie/cookie": 1}], 5: [function (t, i, e) {
        t("../../../../unit/common/js/downloadApp"), t("../../../../unit/common/js/statistics"), t("../../../../unit/common/js/showObjectPrize"), t("../../../../unit/common/js/showModal"), t("../../../../unit/common/js/prizeDetail"), t("../../../../module/tongdun"), t("../../../../module/recommendModal"), t("./../components/intercept"), t("./../components/fetchModal")
    }, {
        "../../../../module/recommendModal": 2,
        "../../../../module/tongdun": 4,
        "../../../../unit/common/js/downloadApp": 9,
        "../../../../unit/common/js/prizeDetail": 10,
        "../../../../unit/common/js/showModal": 11,
        "../../../../unit/common/js/showObjectPrize": 12,
        "../../../../unit/common/js/statistics": 13,
        "./../components/fetchModal": 6,
        "./../components/intercept": 7
    }], 6: [function (t, i, e) {
        var s = {
            ajax: function (t) {
                var i = {
                    data: {timestamp: (new Date).getTime()}, dataType: "json", success: function () {
                    }, error: function (t, i) {
                        "timeout" === i ? (t && t.abort(), console.error("请求超时")) : console.error("网络错误")
                    }
                };
                t = $.extend(!0, i, t), $.ajax(t)
            }
        };
        e.init = function () {
            s.ajax({
                url: "/activity/getAllSkin",
                type: "get",
                data: {couponSkinId: window.CFG && window.CFG.couponSkinId},
                success: function (t) {
                    if (t.success) {
                        var i = t.data;
                        i && i.forEach(function (t) {
                            t && t.code && $("body").append(t.code)
                        })
                    } else console.error("请求弹层数据出错", t.desc)
                },
                error: function () {
                    // console.error("请求弹层网络出错");
                    // var t = '<link rel="stylesheet" href="http://yun.tuia.cn/h5-tuia/couponPrize/1.0.2/index_201707181200.css">\n<script type="text/javascript">\nvar oHead = document.querySelector(\'body\');\nvar oScript = document.createElement(\'script\');\noScript.type = "text/javascript";\noScript.src = "http://yun.tuia.cn/h5-tuia/couponPrize/1.0.2/index_201707181200.js";\noHead.appendChild(oScript);\n</script>',
                    //     i = '<link rel="stylesheet" href="http://yun.tuia.cn/h5-tuia/alipayModal/index_201708211647.css">\n<script type="text/javascript">\nvar oHead = document.querySelector(\'body\');\nvar oScript = document.createElement(\'script\');\noScript.type = "text/javascript";\noScript.src = "http://yun.tuia.cn/h5-tuia/alipayModal/index_201708211647.js";\noHead.appendChild(oScript);\n</script>"';
                    // $("body").append(t).append(i)
                }
            })
        }, e.init()
    }, {}], 7: [function (t, i, e) {
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
                return !o("dpm") && !o("sourceId")
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
    }, {}], 8: [function (t, i, e) {
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
                    disablePointer: !l.hasPointer,
                    disableTouch: l.hasPointer || !l.hasTouch,
                    disableMouse: l.hasPointer || l.hasTouch,
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
                this.translateZ = this.options.HWCompositing && l.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = l.hasTransition && this.options.useTransition, this.options.useTransform = l.hasTransform && this.options.useTransform, this.options.eventPassthrough = this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? l.ease[this.options.bounceEasing] || l.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, this.options.tap === !0 && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
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
                if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (l.addEvent(this.indicator, "touchstart", this), l.addEvent(t, "touchend", this)), this.options.disablePointer || (l.addEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.addEvent(t, l.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (l.addEvent(this.indicator, "mousedown", this), l.addEvent(t, "mouseup", this))), this.options.fade) {
                    this.wrapperStyle[l.style.transform] = this.scroller.translateZ;
                    var n = l.style.transitionDuration;
                    this.wrapperStyle[n] = l.isBadAndroid ? "0.0001ms" : "0ms";
                    var r = this;
                    l.isBadAndroid && a(function () {
                        "0.0001ms" === r.wrapperStyle[n] && (r.wrapperStyle[n] = "0s")
                    }), this.wrapperStyle.opacity = "0"
                }
            }

            var a = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (i) {
                    t.setTimeout(i, 1e3 / 60)
                }, l = function () {
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
                    var a, l, h = t - i, c = e.abs(h) / s;
                    return r = void 0 === r ? 6e-4 : r, a = t + c * c / (2 * r) * (h < 0 ? -1 : 1), l = c / r, a < o ? (a = n ? o - n / 2.5 * (c / 8) : o, h = e.abs(a - t), l = h / c) : a > 0 && (a = n ? n / 2.5 * (c / 8) : 0, h = e.abs(t) + a, l = h / c), {
                        destination: e.round(a),
                        duration: l
                    }
                };
                var l = o("transform");
                return n.extend(n, {
                    hasTransform: l !== !1,
                    hasPerspective: o("perspective") in r,
                    hasTouch: "ontouchstart" in t,
                    hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
                    hasTransition: o("transition") in r
                }), n.isBadAndroid = function () {
                    var i = t.navigator.appVersion;
                    if (/Android/.test(i) && !/Chrome\/\d/.test(i)) {
                        var e = i.match(/Safari\/(\d+.\d)/);
                        return !(e && "object" === ("undefined" == typeof e ? "undefined" : s(e)) && e.length >= 2) || parseFloat(e[1]) < 535.19
                    }
                    return !1
                }(), n.extend(n.style = {}, {
                    transform: l,
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
                    if (1 != l.eventType[t.type]) {
                        var i;
                        if (i = t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2, 0 !== i)return
                    }
                    if (this.enabled && (!this.initiated || l.eventType[t.type] === this.initiated)) {
                        !this.options.preventDefault || l.isBadAndroid || l.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                        var s, o = t.touches ? t.touches[0] : t;
                        this.initiated = l.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = l.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, s = this.getComputedPosition(), this._translate(e.round(s.x), e.round(s.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = o.pageX, this.pointY = o.pageY, this._execEvent("beforeScrollStart")
                    }
                }, _move: function (t) {
                    if (this.enabled && l.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && t.preventDefault();
                        var i, s, o, n, r = t.touches ? t.touches[0] : t, a = r.pageX - this.pointX,
                            h = r.pageY - this.pointY, c = l.getTime();
                        if (this.pointX = r.pageX, this.pointY = r.pageY, this.distX += a, this.distY += h, o = e.abs(this.distX), n = e.abs(this.distY), !(c - this.endTime > 300 && o < 10 && n < 10)) {
                            if (this.directionLocked || this.options.freeScroll || (o > n + this.options.directionLockThreshold ? this.directionLocked = "h" : n >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                                if ("vertical" == this.options.eventPassthrough) t.preventDefault(); else if ("horizontal" == this.options.eventPassthrough)return void(this.initiated = !1);
                                h = 0
                            } else if ("v" == this.directionLocked) {
                                if ("horizontal" == this.options.eventPassthrough) t.preventDefault(); else if ("vertical" == this.options.eventPassthrough)return void(this.initiated = !1);
                                a = 0
                            }
                            a = this.hasHorizontalScroll ? a : 0, h = this.hasVerticalScroll ? h : 0, i = this.x + a, s = this.y + h, (i > 0 || i < this.maxScrollX) && (i = this.options.bounce ? this.x + a / 3 : i > 0 ? 0 : this.maxScrollX), (s > 0 || s < this.maxScrollY) && (s = this.options.bounce ? this.y + h / 3 : s > 0 ? 0 : this.maxScrollY), this.directionX = a > 0 ? -1 : a < 0 ? 1 : 0, this.directionY = h > 0 ? -1 : h < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(i, s), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                        }
                    }
                }, _end: function (t) {
                    if (this.enabled && l.eventType[t.type] === this.initiated) {
                        this.options.preventDefault && !l.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                        var i, s, o = (t.changedTouches ? t.changedTouches[0] : t, l.getTime() - this.startTime),
                            n = e.round(this.x), r = e.round(this.y), a = e.abs(n - this.startX),
                            h = e.abs(r - this.startY), c = 0, p = "";
                        if (this.isInTransition = 0, this.initiated = 0, this.endTime = l.getTime(), !this.resetPosition(this.options.bounceTime)) {
                            if (this.scrollTo(n, r), !this.moved)return this.options.tap && l.tap(t, this.options.tap), this.options.click && l.click(t), void this._execEvent("scrollCancel");
                            if (this._events.flick && o < 200 && a < 100 && h < 100)return void this._execEvent("flick");
                            if (this.options.momentum && o < 300 && (i = this.hasHorizontalScroll ? l.momentum(this.x, this.startX, o, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                    destination: n,
                                    duration: 0
                                }, s = this.hasVerticalScroll ? l.momentum(this.y, this.startY, o, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                    destination: r,
                                    duration: 0
                                }, n = i.destination, r = s.destination, c = e.max(i.duration, s.duration), this.isInTransition = 1), this.options.snap) {
                                var d = this._nearestSnap(n, r);
                                this.currentPage = d, c = this.options.snapSpeed || e.max(e.max(e.min(e.abs(n - d.x), 1e3), e.min(e.abs(r - d.y), 1e3)), 300), n = d.x, r = d.y, this.directionX = 0, this.directionY = 0, p = this.options.bounceEasing
                            }
                            return n != this.x || r != this.y ? ((n > 0 || n < this.maxScrollX || r > 0 || r < this.maxScrollY) && (p = l.ease.quadratic), void this.scrollTo(n, r, c, p)) : void this._execEvent("scrollEnd")
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
                    this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = l.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
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
                    s = s || l.ease.circular, this.isInTransition = this.options.useTransition && e > 0;
                    var o = this.options.useTransition && s.style;
                    !e || o ? (o && (this._transitionTimingFunction(s.style), this._transitionTime(e)), this._translate(t, i)) : this._animate(t, i, e, s.fn)
                }, scrollToElement: function (t, i, s, o, n) {
                    if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                        var r = l.offset(t);
                        r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= o || 0, r.left = r.left > 0 ? 0 : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > 0 ? 0 : r.top < this.maxScrollY ? this.maxScrollY : r.top, i = void 0 === i || null === i || "auto" === i ? e.max(e.abs(this.x - r.left), e.abs(this.y - r.top)) : i, this.scrollTo(r.left, r.top, i, n)
                    }
                }, _transitionTime: function (t) {
                    t = t || 0;
                    var i = l.style.transitionDuration;
                    if (this.scrollerStyle[i] = t + "ms", !t && l.isBadAndroid) {
                        this.scrollerStyle[i] = "0.0001ms";
                        var e = this;
                        a(function () {
                            "0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s")
                        })
                    }
                    if (this.indicators)for (var s = this.indicators.length; s--;)this.indicators[s].transitionTime(t)
                }, _transitionTimingFunction: function (t) {
                    if (this.scrollerStyle[l.style.transitionTimingFunction] = t, this.indicators)for (var i = this.indicators.length; i--;)this.indicators[i].transitionTimingFunction(t)
                }, _translate: function (t, i) {
                    if (this.options.useTransform ? this.scrollerStyle[l.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ : (t = e.round(t), i = e.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.x = t, this.y = i, this.indicators)for (var s = this.indicators.length; s--;)this.indicators[s].updatePosition()
                }, _initEvents: function (i) {
                    var e = i ? l.removeEvent : l.addEvent, s = this.options.bindToWrapper ? this.wrapper : t;
                    e(t, "orientationchange", this), e(t, "resize", this), this.options.click && e(this.wrapper, "click", this, !0), this.options.disableMouse || (e(this.wrapper, "mousedown", this), e(s, "mousemove", this), e(s, "mousecancel", this), e(s, "mouseup", this)), l.hasPointer && !this.options.disablePointer && (e(this.wrapper, l.prefixPointerEvent("pointerdown"), this), e(s, l.prefixPointerEvent("pointermove"), this), e(s, l.prefixPointerEvent("pointercancel"), this), e(s, l.prefixPointerEvent("pointerup"), this)), l.hasTouch && !this.options.disableTouch && (e(this.wrapper, "touchstart", this), e(s, "touchmove", this), e(s, "touchcancel", this), e(s, "touchend", this)), e(this.scroller, "transitionend", this), e(this.scroller, "webkitTransitionEnd", this), e(this.scroller, "oTransitionEnd", this), e(this.scroller, "MSTransitionEnd", this)
                }, getComputedPosition: function () {
                    var i, e, s = t.getComputedStyle(this.scroller, null);
                    return this.options.useTransform ? (s = s[l.style.transform].split(")")[0].split(", "), i = +(s[12] || s[4]), e = +(s[13] || s[5])) : (i = +s.left.replace(/[^-\d.]/g, ""), e = +s.top.replace(/[^-\d.]/g, "")), {
                        x: i,
                        y: e
                    }
                }, _initIndicators: function () {
                    function t(t) {
                        if (a.indicators)for (var i = a.indicators.length; i--;)t.call(a.indicators[i])
                    }

                    var i, e = this.options.interactiveScrollbars, s = "string" != typeof this.options.scrollbars,
                        o = [], a = this;
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
                    for (var l = o.length; l--;)this.indicators.push(new r(this, o[l]));
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
                    l.addEvent(this.wrapper, "wheel", this), l.addEvent(this.wrapper, "mousewheel", this), l.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
                        clearTimeout(this.wheelTimeout), this.wheelTimeout = null, l.removeEvent(this.wrapper, "wheel", this), l.removeEvent(this.wrapper, "mousewheel", this), l.removeEvent(this.wrapper, "DOMMouseScroll", this)
                    })
                }, _wheel: function (t) {
                    if (this.enabled) {
                        t.preventDefault();
                        var i, s, o, n, r = this;
                        if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function () {
                                r.options.snap || r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                            }, 400), "deltaX" in t) 1 === t.deltaMode ? (i = -t.deltaX * this.options.mouseWheelSpeed, s = -t.deltaY * this.options.mouseWheelSpeed) : (i = -t.deltaX, s = -t.deltaY); else if ("wheelDeltaX" in t) i = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, s = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed; else if ("wheelDelta" in t) i = s = t.wheelDelta / 120 * this.options.mouseWheelSpeed; else {
                            if (!("detail" in t))return;
                            i = s = -t.detail / 3 * this.options.mouseWheelSpeed
                        }
                        if (i *= this.options.invertWheelDirection, s *= this.options.invertWheelDirection, this.hasVerticalScroll || (i = s, s = 0), this.options.snap)return o = this.currentPage.pageX, n = this.currentPage.pageY, i > 0 ? o-- : i < 0 && o++, s > 0 ? n-- : s < 0 && n++, void this.goToPage(o, n);
                        o = this.x + e.round(this.hasHorizontalScroll ? i : 0), n = this.y + e.round(this.hasVerticalScroll ? s : 0), this.directionX = i > 0 ? -1 : i < 0 ? 1 : 0, this.directionY = s > 0 ? -1 : s < 0 ? 1 : 0, o > 0 ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), n > 0 ? n = 0 : n < this.maxScrollY && (n = this.maxScrollY), this.scrollTo(o, n, 0)
                    }
                }, _initSnap: function () {
                    this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function () {
                        var t, i, s, o, n, r, a = 0, l = 0, h = 0, c = this.options.snapStepX || this.wrapperWidth,
                            p = this.options.snapStepY || this.wrapperHeight;
                        if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                            if (this.options.snap === !0)for (s = e.round(c / 2), o = e.round(p / 2); h > -this.scrollerWidth;) {
                                for (this.pages[a] = [], t = 0, n = 0; n > -this.scrollerHeight;)this.pages[a][t] = {
                                    x: e.max(h, this.maxScrollX),
                                    y: e.max(n, this.maxScrollY),
                                    width: c,
                                    height: p,
                                    cx: h - s,
                                    cy: n - o
                                }, n -= p, t++;
                                h -= c, a++
                            } else for (r = this.options.snap, t = r.length, i = -1; a < t; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (l = 0, i++), this.pages[l] || (this.pages[l] = []), h = e.max(-r[a].offsetLeft, this.maxScrollX), n = e.max(-r[a].offsetTop, this.maxScrollY), s = h - e.round(r[a].offsetWidth / 2), o = n - e.round(r[a].offsetHeight / 2), this.pages[l][i] = {
                                x: h,
                                y: n,
                                width: r[a].offsetWidth,
                                height: r[a].offsetHeight,
                                cx: s,
                                cy: o
                            }, h > this.maxScrollX && l++;
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
                    l.addEvent(t, "keydown", this), this.on("destroy", function () {
                        l.removeEvent(t, "keydown", this)
                    })
                }, _key: function (t) {
                    if (this.enabled) {
                        var i, s = this.options.snap, o = s ? this.currentPage.pageX : this.x,
                            n = s ? this.currentPage.pageY : this.y, r = l.getTime(), a = this.keyTime || 0, h = .25;
                        switch (this.options.useTransition && this.isInTransition && (i = this.getComputedPosition(), this._translate(e.round(i.x), e.round(i.y)), this.isInTransition = !1), this.keyAcceleration = r - a < 200 ? e.min(this.keyAcceleration + h, 50) : 0,
                            t.keyCode) {
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
                        var d, u, f, m = l.getTime();
                        return m >= p ? (n.isAnimating = !1, n._translate(t, i), void(n.resetPosition(n.options.bounceTime) || n._execEvent("scrollEnd"))) : (m = (m - c) / e, f = s(m), d = (t - r) * f + r, u = (i - h) * f + h, n._translate(d, u), void(n.isAnimating && a(o)))
                    }

                    var n = this, r = this.x, h = this.y, c = l.getTime(), p = c + e;
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
                    this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (l.removeEvent(this.indicator, "touchstart", this), l.removeEvent(this.indicator, l.prefixPointerEvent("pointerdown"), this), l.removeEvent(this.indicator, "mousedown", this), l.removeEvent(t, "touchmove", this), l.removeEvent(t, l.prefixPointerEvent("pointermove"), this), l.removeEvent(t, "mousemove", this), l.removeEvent(t, "touchend", this), l.removeEvent(t, l.prefixPointerEvent("pointerup"), this), l.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
                }, _start: function (i) {
                    var e = i.touches ? i.touches[0] : i;
                    i.preventDefault(), i.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = e.pageX, this.lastPointY = e.pageY, this.startTime = l.getTime(), this.options.disableTouch || l.addEvent(t, "touchmove", this), this.options.disablePointer || l.addEvent(t, l.prefixPointerEvent("pointermove"), this), this.options.disableMouse || l.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
                }, _move: function (t) {
                    var i, e, s, o, n = t.touches ? t.touches[0] : t;
                    l.getTime();
                    this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, i = n.pageX - this.lastPointX, this.lastPointX = n.pageX, e = n.pageY - this.lastPointY, this.lastPointY = n.pageY, s = this.x + i, o = this.y + e, this._pos(s, o), t.preventDefault(), t.stopPropagation()
                }, _end: function (i) {
                    if (this.initiated) {
                        if (this.initiated = !1, i.preventDefault(), i.stopPropagation(), l.removeEvent(t, "touchmove", this), l.removeEvent(t, l.prefixPointerEvent("pointermove"), this), l.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                            var s = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                                o = this.options.snapSpeed || e.max(e.max(e.min(e.abs(this.scroller.x - s.x), 1e3), e.min(e.abs(this.scroller.y - s.y), 1e3)), 300);
                            this.scroller.x == s.x && this.scroller.y == s.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = s, this.scroller.scrollTo(s.x, s.y, o, this.scroller.options.bounceEasing))
                        }
                        this.moved && this.scroller._execEvent("scrollEnd")
                    }
                }, transitionTime: function (t) {
                    t = t || 0;
                    var i = l.style.transitionDuration;
                    if (this.indicatorStyle[i] = t + "ms", !t && l.isBadAndroid) {
                        this.indicatorStyle[i] = "0.0001ms";
                        var e = this;
                        a(function () {
                            "0.0001ms" === e.indicatorStyle[i] && (e.indicatorStyle[i] = "0s")
                        })
                    }
                }, transitionTimingFunction: function (t) {
                    this.indicatorStyle[l.style.transitionTimingFunction] = t
                }, refresh: function () {
                    this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (l.addClass(this.wrapper, "iScrollBothScrollbars"), l.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (l.removeClass(this.wrapper, "iScrollBothScrollbars"), l.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                    this.wrapper.offsetHeight;
                    this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = e.max(e.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = -this.indicatorWidth + 8, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = e.max(e.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = -this.indicatorHeight + 8, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
                }, updatePosition: function () {
                    var t = this.options.listenX && e.round(this.sizeRatioX * this.scroller.x) || 0,
                        i = this.options.listenY && e.round(this.sizeRatioY * this.scroller.y) || 0;
                    this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = e.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = e.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), i < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = e.max(this.indicatorHeight + 3 * i, 8), this.indicatorStyle.height = this.height + "px"), i = this.minBoundaryY) : i > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = e.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", i = this.maxPosY + this.indicatorHeight - this.height) : i = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = i, this.scroller.options.useTransform ? this.indicatorStyle[l.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = i + "px")
                }, _pos: function (t, i) {
                    t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), i < 0 ? i = 0 : i > this.maxPosY && (i = this.maxPosY), t = this.options.listenX ? e.round(t / this.sizeRatioX) : this.scroller.x, i = this.options.listenY ? e.round(i / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, i)
                }, fade: function (t, i) {
                    if (!i || this.visible) {
                        clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                        var e = t ? 250 : 500, s = t ? 0 : 300;
                        t = t ? "1" : "0", this.wrapperStyle[l.style.transitionDuration] = e + "ms", this.fadeTimeout = setTimeout(function (t) {
                            this.wrapperStyle.opacity = t, this.visible = +t
                        }.bind(this, t), s)
                    }
                }
            }, o.utils = l, t.IScroll = o
        }(window, document, Math)
    }, {}], 9: [function (t, i, e) {
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
                if (t.indexOf("dbnewopen") != -1) window.location.href = t; else if (t.indexOf("?") !== -1)if (t.indexOf("#") !== -1) {
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
                    if (i.match(/MicroMessenger/gi)) s(o); else if (e) window.location.href = e; else if (o.indexOf("itunes.apple.com") != -1) {
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
    }, {}], 10: [function (t, i, e) {
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
    }, {"../IScroll": 8}], 11: [function (t, i, e) {
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
                    var e = CFG.host, s = this, o = {
                            again: e + "/h5/activity/showModal/1.0/again.png",
                            noPrize: e + "/h5/activity/showModal/1.0/noPrize.png",
                            todayOver: e + "/h5/activity/showModal/1.0/todayOver.png",
                            over: e + "/h5/activity/showModal/1.0/over.png",
                            preview: e + "/h5/activity/showModal/1.0/noCredits.png",
                            systemError: e + "/h5/activity/showModal/1.0/noLogin.png",
                            networkError: e + "/h5/activity/showModal/1.0/networkError.png"
                        }, n = o[i.type],
                        r = '<div class="db-msg-modal"><div class="msg-modal-wrapper"><div class="msg-modal-header"><i class="msg-modal-close"></i><h4 class="msg-title">' + i.title + '</h4><p class="msg-tip">' + i.tip + '</p></div><div class="msg-modal-section">' + (n ? '<img src="' + n + '" />' : "") + '</div><div class="msg-modal-footer"><a href="javascript:;" class="msg-btn">' + i.btnText + "</a></div></div></div>";
                    t("body").append(r), t("#db-content").addClass("filter"), t(".db-msg-modal").off("click").on("click", ".msg-modal-close", function () {
                        i.clickCallback && i.clickCallback(), s.hide()
                    }).on("click", ".msg-btn", function () {
                        i.link && (window.location.href = i.link), i.btnCallback ? i.btnCallback() : i.clickCallback && i.clickCallback(), s.hide()
                    })
                }
            };
            window.errorMsgModal = i
        }(Zepto)
    }, {}], 12: [function (t, i, e) {
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
    }, {}], 13: [function (t, i, e) {
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
                            var l = !1, h = !1;
                            if (r.offset() && (l = i(t).scrollTop() >= r.offset().top - n + (s || 0), h = i(t).scrollTop() <= r.offset().top + (s || 50)), l && h && (r.attr("db-exposure-get", !0), void 0 !== a && "undefined" !== a && "" !== i.trim(a))) {
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
                    var a = t.domain || "", l = t.url;
                    delete t.domain, delete t.url, t.data && t.data.domain && delete t.data.domain, i.ajax({
                        url: a + l,
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
            };
            s.initLog(), e.exposure = s
        }(window, $, window.DB || (window.DB = {}))
    }, {}], 14: [function (t, i, e) {
        var s = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function (t) {
            return "undefined" == typeof t ? "undefined" : _typeof2(t)
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : "undefined" == typeof t ? "undefined" : _typeof2(t)
        };
        !function () {
            function t(t) {
                return t.replace(S, "").replace(T, ",").replace(k, "").replace(E, "").replace(P, "").split(/^$|,+/)
            }

            function o(t) {
                return "'" + t.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
            }

            function n(i, e) {
                function s(t) {
                    return d += t.split(/\n/).length - 1, c && (t = t.replace(/\s+/g, " ").replace(/<!--.*?-->/g, "")), t && (t = m[1] + o(t) + m[2] + "\n"), t
                }

                function n(i) {
                    var s = d;
                    if (h ? i = h(i, e) : r && (i = i.replace(/\n/g, function () {
                                return d++, "$line=" + d + ";"
                            })), 0 === i.indexOf("=")) {
                        var o = p && !/^=[=#]/.test(i);
                        if (i = i.replace(/^=[=#]?|[\s;]*$/g, ""), o) {
                            var n = i.replace(/\s*\([^\)]+\)/, "");
                            g[n] || /^(include|print)$/.test(n) || (i = "$escape(" + i + ")")
                        } else i = "$string(" + i + ")";
                        i = m[1] + i + m[2]
                    }
                    return r && (i = "$line=" + s + ";" + i), w(t(i), function (t) {
                        if (t && !u[t]) {
                            var i;
                            i = "print" === t ? b : "include" === t ? x : g[t] ? "$utils." + t : v[t] ? "$helpers." + t : "$data." + t, S += t + "=" + i + ",", u[t] = !0
                        }
                    }), i + "\n"
                }

                var r = e.debug, a = e.openTag, l = e.closeTag, h = e.parser, c = e.compress, p = e.escape, d = 1,
                    u = {$data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1}, f = "".trim,
                    m = f ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
                    y = f ? "$out+=text;return $out;" : "$out.push(text);",
                    b = "function(){var text=''.concat.apply('',arguments);" + y + "}",
                    x = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + y + "}",
                    S = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (r ? "$line=0," : ""), T = m[0],
                    k = "return new String(" + m[3] + ");";
                w(i.split(a), function (t) {
                    t = t.split(l);
                    var i = t[0], e = t[1];
                    1 === t.length ? T += s(i) : (T += n(i), e && (T += s(e)))
                });
                var E = S + T + k;
                r && (E = "try{" + E + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + o(i) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
                try {
                    var P = new Function("$data", "$filename", E);
                    return P.prototype = g, P
                } catch (X) {
                    throw X.temp = "function anonymous($data,$filename) {" + E + "}", X
                }
            }

            var r = function (t, i) {
                return "string" == typeof i ? b(i, {filename: t}) : h(t, i)
            };
            r.version = "3.0.0", r.config = function (t, i) {
                a[t] = i
            };
            var a = r.defaults = {openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null},
                l = r.cache = {};
            r.render = function (t, i) {
                return b(t, i)
            };
            var h = r.renderFile = function (t, i) {
                var e = r.get(t) || y({filename: t, name: "Render Error", message: "Template not found"});
                return i ? e(i) : e
            };
            r.get = function (t) {
                var i;
                if (l[t]) i = l[t]; else if ("object" == ("undefined" == typeof document ? "undefined" : s(document))) {
                    var e = document.getElementById(t);
                    if (e) {
                        var o = (e.value || e.innerHTML).replace(/^\s*|\s*$/g, "");
                        i = b(o, {filename: t})
                    }
                }
                return i
            };
            var c = function Y(t, i) {
                return "string" != typeof t && (i = "undefined" == typeof t ? "undefined" : s(t), "number" === i ? t += "" : t = "function" === i ? Y(t.call(t)) : ""), t
            }, p = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, d = function (t) {
                return p[t]
            }, u = function (t) {
                return c(t).replace(/&(?![\w#]+;)|[<>"']/g, d)
            }, f = Array.isArray || function (t) {
                    return "[object Array]" === {}.toString.call(t)
                }, m = function (t, i) {
                var e, s;
                if (f(t))for (e = 0, s = t.length; s > e; e++)i.call(t, t[e], e, t); else for (e in t)i.call(t, t[e], e)
            }, g = r.utils = {$helpers: {}, $include: h, $string: c, $escape: u, $each: m};
            r.helper = function (t, i) {
                v[t] = i
            };
            var v = r.helpers = g.$helpers;
            r.onerror = function (t) {
                var i = "Template Error\n\n";
                for (var e in t)i += "<" + e + ">\n" + t[e] + "\n\n";
                "object" == ("undefined" == typeof console ? "undefined" : s(console)) && console.error(i)
            };
            var y = function (t) {
                    return r.onerror(t), function () {
                        return "{Template Error}"
                    }
                }, b = r.compile = function (t, i) {
                    function e(e) {
                        try {
                            return new r(e, o) + ""
                        } catch (s) {
                            return i.debug ? y(s)() : (i.debug = !0, b(t, i)(e))
                        }
                    }

                    i = i || {};
                    for (var s in a)void 0 === i[s] && (i[s] = a[s]);
                    var o = i.filename;
                    try {
                        var r = n(t, i)
                    } catch (h) {
                        return h.filename = o || "anonymous", h.name = "Syntax Error", y(h)
                    }
                    return e.prototype = r.prototype, e.toString = function () {
                        return r.toString()
                    }, o && i.cache && (l[o] = e), e
                }, w = g.$each,
                x = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
                S = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
                T = /[^\w$]+/g, k = new RegExp(["\\b" + x.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
                E = /^\d[^,]*|,\d[^,]*/g, P = /^,+|,+$/g;
            a.openTag = "{{", a.closeTag = "}}";
            var X = function (t, i) {
                var e = i.split(":"), s = e.shift(), o = e.join(":") || "";
                return o && (o = ", " + o), "$helpers." + s + "(" + t + o + ")"
            };
            a.parser = function (t, i) {
                t = t.replace(/^\s/, "");
                var e = t.split(" "), s = e.shift(), o = e.join(" ");
                switch (s) {
                    case"if":
                        t = "if(" + o + "){";
                        break;
                    case"else":
                        e = "if" === e.shift() ? " if(" + e.join(" ") + ")" : "", t = "}else" + e + "{";
                        break;
                    case"/if":
                        t = "}";
                        break;
                    case"each":
                        var n = e[0] || "$data", a = e[1] || "as", l = e[2] || "$value", h = e[3] || "$index",
                            c = l + "," + h;
                        "as" !== a && (n = "[]"), t = "$each(" + n + ",function(" + c + "){";
                        break;
                    case"/each":
                        t = "});";
                        break;
                    case"echo":
                        t = "print(" + o + ");";
                        break;
                    case"print":
                    case"include":
                        t = s + "(" + e.join(",") + ");";
                        break;
                    default:
                        if (-1 !== o.indexOf("|")) {
                            var p = i.escape;
                            0 === t.indexOf("#") && (t = t.substr(1), p = !1);
                            for (var d = 0, u = t.split("|"), f = u.length, m = p ? "$escape" : "$string", g = m + "(" + u[d++] + ")"; f > d; d++)g = X(g, u[d]);
                            t = "=#" + g
                        } else t = r.helpers[s] ? "=#" + s + "(" + e.join(",") + ");" : "=" + t
                }
                return t
            }, "function" == typeof define ? define(function () {
                return r
            }) : "undefined" != typeof e ? i.exports = r : this.template = r
        }()
    }, {}]
}, {}, [5]);