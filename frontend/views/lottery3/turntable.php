<?php
use yii\helpers\Url;
?>
<!DOCTYPE html>
<html data-dpr="1" style="font-size: 200px;">
<head>
	<meta charset="UTF-8">
	<link rel="shortcut icon" type="image/x-icon" href="/static/turntable3/tuia.ico">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
	<meta name="format-detection" content="telephone=no">
	<title>抢支付宝现金红包</title>
	<script>!function (e, i) {
			var t = e.documentElement, n = navigator.userAgent.match(/iphone|ipod|ipad/gi), a = n ? Math.min(i.devicePixelRatio, 3) : 1, m = "orientationchange"in window ? "orientationchange" : "resize";
			t.dataset.dpr = a;
			for (var d, l, c = !1, o = e.getElementsByTagName("meta"), r = 0; r < o.length; r++)l = o[r], "viewport" == l.name && (c = !0, d = l);
			if (c)d.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no"; else {
				var o = e.createElement("meta");
				o.name = "viewport", o.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no", t.firstElementChild.appendChild(o)
			}
			var s = function () {
				var e = t.clientWidth;
				e / a > 640 && (e = 640 * a), window.remScale = e / 640, t.style.fontSize = 200 * (e / 640) + "px"
			};
			s(), e.addEventListener && i.addEventListener(m, s, !1)
		}(document, window);</script>
	<meta name="viewport"
	      content="width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no">

	<!-- 同步 tuia-h5/unit/layout/baseCss.html -->

	<!-- 首屏加载公用js、css -->
	<link rel="stylesheet" href="/static/turntable3/actBase_201707271400.css">
	<link rel="stylesheet" type="text/css" href="/static/turntable3/index_201707271400.css">
	<script charset="utf-8" async="" src="/static/turntable3/common_201709140000.js"></script>
	<link rel="stylesheet" href="/static/turntable3/common_201709140000.css">
	<style>
		body { background-color: #fddb9e !important; }
		.main { background-image: url(http://yun.tuia.cn/tuia-media/img/918bimv2n3.jpg) !important; }
		.record { background-image: url(http://yun.tuia.cn/tuia-media/img/snnl9mt0he.png) !important; }
		.prize-list { background-color: #f1534a !important; }
		.prize-tag { background-image: url(http://yun.tuia.cn/upload/N11mK1472645269925.png) !important; }
		.apple { color: #ffffff !important; }
		.apple { background-color: #f1534a !important; }
		.rule { background-image: url(http://yun.tuia.cn/h5/activity/turntable_circle/images/rule.png) !important; }
		.egg { background-image: url(http://yun.tuia.cn/tuia-media/img/o7d2v9cami.png) !important; }
		.egg.active { background-image: url(http://yun.tuia.cn/tuia-media/img/saymbqeket.png) !important; }
		.egg.jump { background-image: url(http://yun.tuia.cn/tuia-media/img/of8sc9lev1.png) !important; }
		.chuizi { background-image: url(http://yun.tuia.cn/upload/fynXq1472645269907.png) !important; }
		.rule-modal .rule-modal-dialog { background-color: #fddb9e !important; }
		.rule-modal .rule-modal-dialog section .probability { background-color: #fddb9e !important; }
		.rule-modal .rule-modal-dialog header span, .rule-modal .rule-modal-dialog section .description { color: #6d5c00 !important; }
		.rule-modal .rule-modal-dialog header i { background-color: #6d5c00 !important; }
		.rule-modal .rule-modal-dialog .close { color: #6d5c00 !important; }
		.rule-modal .rule-modal-dialog section .probability .nav { background-color: #f2c980 !important; }
		.rule-modal .rule-modal-dialog section .probability .nav span { color: #fdfdfd !important; }
		.rule-modal .rule-modal-dialog section .probability.active .text { color: #6d5c00 !important; }

		/*body { background-color: #fddb9e !important; }
		.main { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/918bimv2n3.jpg) !important; }
		.record { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/snnl9mt0he.png) !important; }
		.prize-list { background-color: #f1534a !important; }
		.prize-tag { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/N11mK1472645269925.png) !important; }
		.apple { color: #ffffff !important; }
		.apple { background-color: #f1534a !important; }
		.rule { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/rule.png) !important; }
		.egg { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/o7d2v9cami.png) !important; }
		.egg.active { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/saymbqeket.png) !important; }
		.egg.jump { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/of8sc9lev1.png) !important; }
		.chuizi { background-image: url(http://lottery.51haowenzhang.com/static/turntable3/fynXq1472645269907.png) !important; }
		.rule-modal .rule-modal-dialog { background-color: #fddb9e !important; }
		.rule-modal .rule-modal-dialog section .probability { background-color: #fddb9e !important; }
		.rule-modal .rule-modal-dialog header span, .rule-modal .rule-modal-dialog section .description { color: #6d5c00 !important; }
		.rule-modal .rule-modal-dialog header i { background-color: #6d5c00 !important; }
		.rule-modal .rule-modal-dialog .close { color: #6d5c00 !important; }
		.rule-modal .rule-modal-dialog section .probability .nav { background-color: #f2c980 !important; }
		.rule-modal .rule-modal-dialog section .probability .nav span { color: #fdfdfd !important; }
		.rule-modal .rule-modal-dialog section .probability.active .text { color: #6d5c00 !important; }*/</style>
	<style>.rule-modal .rule-modal-dialog section .probability .nav i { border-top-color: #fdfdfd !important; border-left-color: #fdfdfd !important; }</style>
	<style>.prize-list .prize-img-box { border-color: #e1eb12; }</style>

    <style>
        .popupView{
            position: absolute;
            height:100vw;
            width: 100%;
            /*margin-top: 100vw;*/
            display: flex;
            flex-direction:row;
            /*justify-content:center;*/
        }

        .popupView .popupView_img{
            position: absolute;
            width: 50vw;
            height: 50vw;
            margin-left: 25vw;
            margin-top: 30vw;
            background-color: #ffffcc;
            z-index: 3;
            animation:myfirst 2s linear 1s infinite alternate;
            animation-iteration-count:1;
            animation-fill-mode:forwards;
        }

        @keyframes myfirst
        {
            from {width: 50vw;height:50vw;left:0vw;top:0vw;}
            to {left:55vw; top:75vw; width:20vw;height:20vw;}
        }
    </style>

</head>


<body>
<div id="db-content" style="display: block;">
	<a class="record" href="<?= Url::to('lottery3/list') ?>"></a>

	<div class="rule"></div>

    <a id="test" class="popupView" style="display: <?php echo $testkey ?>;" href="https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557">
        <img class="popupView_img" id="popupView_img" onclick="fun_popupView_img()" href="https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557" src="http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg"/>
    </a>

	<div class="main">
		<div style="position: relative">
			<div class="eggs" id="eggs">
				<div class="egg"></div>
				<div class="egg"></div>
				<div class="egg"></div>
				<div class="egg jump"></div>
				<div class="egg"></div>
				<div class="egg"></div>
			</div>
			<div class="chuizi" id="chuizi"></div>
		</div>
		<div class="needCredits"><p>今日免费： <span id="num_ob"><?php echo $num ?></span>次</p></div>
	</div>
	<div class="prize-list" id="prize-list">
		<div id="prizes-wrapper"
		     data-length="4"
		     style="width: 3.07rem; padding-left: 0.15rem; padding-right: 0rem; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
			<div class="prize-item"
			     style="display: inline-block; margin-right: 0.04rem;"
			     data-id="8190"
			     data-type="physical">
				<div class="prize-img-box"><img class="prize-img"
				                                src="/static/turntable3/73dghxiaki.png"></div>
				<p class="prize-name">1000元红包</p></div>
			<div class="prize-item"
			     style="display: inline-block; margin-right: 0.04rem;"
			     data-id="8191"
			     data-type="physical">
				<div class="prize-img-box"><img class="prize-img"
				                                src="/static/turntable3/88nhwz2abp.png"></div>
				<p class="prize-name">888元红包</p></div>
			<div class="prize-item"
			     style="display: inline-block; margin-right: 0.04rem;"
			     data-id="8138"
			     data-type="nothing">
				<div class="prize-img-box"><img class="prize-img"
				                                src="/static/turntable3/odaesenwog.png"></div>
				<p class="prize-name">600元红包</p></div>
			<div class="prize-item"
			     style="display: inline-block; margin-right: 0.04rem;"
			     data-id="8142"
			     data-type="nothing">
				<div class="prize-img-box"><img class="prize-img"
				                                src="/static/turntable3/j5dp0x5udz.png"></div>
				<p class="prize-name">80元红包</p></div>
		</div>
		<div class="prize-tag"></div>
		<div class="iScrollHorizontalScrollbar iScrollLoneScrollbar"
		     style="position: absolute; z-index: 9999; height: 7px; left: 2px; right: 2px; bottom: 0px; overflow: hidden; pointer-events: none;">
			<div class="iScrollIndicator"
			     style="box-sizing: border-box; position: absolute; background: rgba(0, 0, 0, 0.498039); border: 1px solid rgba(255, 255, 255, 0.901961); border-radius: 3px; height: 100%; transition-duration: 0ms; display: none; width: 632px; transform: translate(0px, 0px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);"></div>
		</div>
	</div>
	<p class="apple" style="display: none;">*奖品和活动均与设备生产商Apple Inc.无关</p>
</div>
<script>
	var isplay = 1;

    //点击跳转新游戏
    function fun_popupView_img() {



    }

	function fun_stop() {
		/*$("#circle").css("transform", "rotate3d(0, 0, 1, 150deg)")
		 $("#circle").stopRotate()
		 $("#start").removeClass('disabled')*/
		var t1 = window.setTimeout(fun_circle_bl, 800)
		return false;
	}
    //推荐游戏界面
	function fun_stop1() {
		$("#recommend-modal").css("display", "block");
		return false;
	}

    //关闭推荐游戏界面
	function fun_stop1none() {
		$("#recommend-modal").css("display", "none");
		window.location.href = "<?=  Url::to(['lottery3/turntable', 'flag'=>1]) ?>";
		return false;
	}
	//点击红包弹出优惠
	function fun_circle_bl() {
		$("#circle_bl").css("display", "block");
	}
	var btnArray = document.getElementsByClassName('egg');
	for (var i = 0; i < btnArray.length; i++) {
		attach(i, btnArray[i]);
	}
	function attach(ii, o) {
		o.onclick = function () {
			var num = <?php echo $num ?>;
			if (isplay == 1) {
				isplay = 0
				if (num > 0) {
					var t1 = window.setTimeout(fun_stop, 500);
					$.post("<?= Url::to(['lottery3/prize']) ?>", {}, function (res) {
						var obj = eval('(' + res + ')');
						$("#num_ob").html(obj.content.num);
						$("#cname").html(obj.content.title);
						$("#cimg").attr('src', obj.content.img);
						$("#curl").attr('href', obj.content.url);
					})
				} else {
					var t1 = window.setTimeout(fun_stop1, 0)
				}
			}
		}
	}
	//关闭优惠
	function fun_sx() {
		$("#circle_bl").css("display", "none");
		window.location.href = "<?=  Url::to(['lottery3/turntable', 'flag'=>1]) ?>";
		return false;
	}
</script>
<script type="text/javascript">
	function loader(callback) {
		var _files = [
			common_js,
			common_css
		];

		Loader.async(_files, function () {
			callback && callback();
		});
	}
</script>

<script type="text/javascript">
	var CFG = {
		host: 'http://yun.tuia.cn', //配置域名
		activityId: '1359', //活动id
		activityType: '6',  //研究
		slotId: '3089',  //广告位id
		preview: false,  //预览
		isShowBuoy: false,  //是否展示浮标
		isShowRecommend: true,  //是否展示推荐弹层
		isShowNew: true, //是否显示abtest新弹层
		couponSkinId: 9 //弹层皮肤id
	};

	function getTuiaToken(getordeid, callback) {
		$.ajax({
			url: '/token/getToken',
			type: 'post',
			dataType: 'json',
			data: {
				timestamp: new Date().getTime()
			},
			success: function (res) {
				if (res.success) {
					eval(res.token);
					var key = 'aaa62c5b';
					var _data = {
						data: {
							token: window[key]
						}
					};

					getordeid && getordeid(_data);
				} else {
					callback && callback('systemError', {message: res.message});
				}
			},
			error: function () {
				var _data = {
					data: {
						token: null
					}
				};
				getordeid && getordeid(_data);
			}
		});
	}
</script>
<!-- 同步 tuia-h5/unit/layout/common.html -->

<!-- 首屏加载公用js、css -->
<script type="text/javascript" src="/static/turntable3/actBase_201709140000.js"></script>

<!-- 延迟加载公用js、css -->
<script type="text/javascript">
	var common_js = '/static/turntable3/common_201709140000.js';
	var common_css = '/static/turntable3/common_201709140000.css';
</script>
<script type="text/javascript" src="/static/turntable3/index_201709140000.js"></script>


<div class="rule-modal" style="display: none;">
	<div class="rule-modal-dialog">
		<header><i></i><span>活动说明</span><i></i></header>
		<section>
			<div class="description">
				<div class="description-scroller"><p>粉丝福利到！参与活动就有机会领取最高1000元支付宝现金红包，这是一个拯救月光族的机会！等你砸出来！</p>

					<p><br></p>

					<p>活动说明：参与活动即有机会获得幸运奖，每天8次免费抽奖机会。此活动为概率中奖，奖品数量有限，祝好运！</p>

					<p><br></p>

					<p>惊喜一：价值1000元支付宝现金红包</p>

					<p>惊喜二：价值888元支付宝现金红包</p>

					<p>惊喜三：价值600元支付宝现金红包</p>

					<p>惊喜四：价值80元支付宝现金红包</p>

					<p>惊喜五：神秘福袋</p>

					<p>－－－－－－－－－－－－－－－－</p>

					<p>重要声明：</p>

					<p>1、实物类奖品将在活动结束后5-10个工作日安排发货，请耐心等待</p>

					<p>2、优惠券类奖品的使用规则详见每个优惠券的介绍页</p>

					<p>3、请兑换后仔细阅读使用流程，如有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00至18:00）</p>

					<p>4、通过非法途径获得奖品的，主办方有权不提供奖品</p>

					<p><br></p>

					<p></p></div>
			</div>
			<div class="probability">
				<div class="nav"><span>更多概率说明</span><i></i></div>
				<div class="text">
					<div class="probability-wrapper">
						<div class="probability-scroller"><p>惊喜一：价值1000元支付宝现金红包共10份，中奖概率为0.1%</p>

							<p>惊喜二：价值888元支付宝现金红包共30份，中奖概率为0.2%</p>

							<p>惊喜三：价值600元支付宝现金红包共50份，中奖概率为0.3%</p>

							<p>惊喜四：价值80元支付宝现金红包共100份，中奖概率为0.4%</p></div>
					</div>
				</div>
			</div>
		</section>
		<div class="close"></div>
	</div>
</div>
<!--<div class="modal-group">
	<link rel="stylesheet" href="/static/turntable3/index1_201708211647.css">
	<script type="text/javascript">
		var oHead = document.querySelector('body');
		var oScript = document.createElement('script');
		oScript.type = "text/javascript";
		oScript.src = "/static/turntable3/index1_201709140000.js";
		oHead.appendChild(oScript);
	</script>
	<link rel="stylesheet" href="/static/turntable3/index1_201708211647.css">
	<script type="text/javascript">
		var oHead = document.querySelector('body');
		var oScript = document.createElement('script');
		oScript.type = "text/javascript";
		oScript.src = "/static/turntable3/index1_201709140000.js";
		oHead.appendChild(oScript);
	</script>
	<link rel="stylesheet" href="/static/turntable3/index_201709062000.css">
	<script type="text/javascript">
		var oHead = document.querySelector('body');
		var oScript = document.createElement('script');
		oScript.type = "text/javascript";
		oScript.src = "/static/turntable3/index2_201709140000.js";
		oHead.appendChild(oScript);
	</script>
	<link rel="stylesheet" href="/static/turntable3/index3_201709140000.css">
	<script type="text/javascript">
		var oHead = document.querySelector('body');
		var oScript = document.createElement('script');
		oScript.type = "text/javascript";
		oScript.src = "/static/turntable3/index3_201709140000.js";
		oHead.appendChild(oScript);
	</script>
	<link rel="stylesheet" href="/static/turntable3/index_201708101036.css">
	<script type="text/javascript">
		var oHead = document.querySelector('body');
		var oScript = document.createElement('script');
		oScript.type = "text/javascript";
		oScript.src = "/static/turntable3/index_201708251746.js";
		oHead.appendChild(oScript);
	</script>
</div>-->
<link rel="stylesheet" href="/static/turntable/index_20170815950.css">
<script type="text/javascript">
	var oHead = document.querySelector('body');
	var oScript = document.createElement('script');
	oScript.type = "text/javascript";
	oScript.src = "http://yun.tuia.cn/h5-tuia/couponPrize/1.22/index_20170815950.js";
	oHead.appendChild(oScript);
</script>
<script type="text/javascript" src="/static/turntable/index_20170815950.js"></script>
<div class="J_modalShowPrize coupon-modal-showPrize" id="circle_bl" style="display: none">
	<div class="coupon-modal-showPrize-dialog">
        <span onclick="fun_sx()" class="close coupon-modal-close"
              db-click="{&quot;dpm&quot;:&quot;33631.4.4.1&quot;,&quot;orderId&quot;:&quot;taw-31163234410986&quot;,&quot;consumerId&quot;:1962418138,&quot;domain4Web&quot;:&quot;//activity.tuia.cn&quot;,&quot;deliveryType&quot;:1,&quot;device_type&quot;:&quot;tuia&quot;,&quot;materialId&quot;:15486,&quot;url&quot;:&quot;/statistics/click&quot;,&quot;advertId&quot;:13623,&quot;dcm&quot;:&quot;104.13623.18.15486&quot;,&quot;activityId&quot;:1807,&quot;domain&quot;:&quot;//embedlog.duiba.com.cn&quot;,&quot;appId&quot;:33631}"></span>

		<div class="modal-light">
			<div class="l-shine"></div>
		</div>
		<div class="modal-header"></div>
		<div class="modal-body withoutCode">
			<div class="body-header"></div>
			<div class="coupon-wrapper">
				<div class="coupon-image">
					<img class="J_gotoDetail logandgo" data-pic="true" id="cimg" src=""
					     db-click="{&quot;dpm&quot;:&quot;33631.4.5.1&quot;,&quot;orderId&quot;:&quot;taw-31163234410986&quot;,&quot;consumerId&quot;:1962418138,&quot;domain4Web&quot;:&quot;//activity.tuia.cn&quot;,&quot;deliveryType&quot;:1,&quot;device_type&quot;:&quot;tuia&quot;,&quot;materialId&quot;:15486,&quot;url&quot;:&quot;/statistics/click&quot;,&quot;advertId&quot;:13623,&quot;dcm&quot;:&quot;104.13623.18.15486&quot;,&quot;activityId&quot;:1807,&quot;domain&quot;:&quot;//embedlog.duiba.com.cn&quot;,&quot;appId&quot;:33631}"
					     db-exposure="{&quot;dpm&quot;:&quot;33631.4.1.1&quot;,&quot;orderId&quot;:&quot;taw-31163234410986&quot;,&quot;consumerId&quot;:1962418138,&quot;domain4Web&quot;:&quot;//activity.tuia.cn&quot;,&quot;deliveryType&quot;:1,&quot;device_type&quot;:&quot;tuia&quot;,&quot;materialId&quot;:15486,&quot;url&quot;:&quot;/activity/showLog&quot;,&quot;advertId&quot;:13623,&quot;dcm&quot;:&quot;104.13623.18.15486&quot;,&quot;activityId&quot;:1807,&quot;domainWeb&quot;:&quot;//activity.tuia.cn&quot;,&quot;domain&quot;:&quot;//embedlog.duiba.com.cn&quot;,&quot;appId&quot;:33631}"
					     db-exposure-get="true">
				</div>
			</div>
			<div class="body-footer">
				<span class="coupon-win"></span>

				<h3 class="coupon-name"><span id="cname"></span></h3>

				<a id="curl" href="">
					<button type="button" class="J_btnCoupon coupon-use"
					        db-click="{&quot;dpm&quot;:&quot;33631.4.6.1&quot;,&quot;orderId&quot;:&quot;taw-31163234410986&quot;,&quot;consumerId&quot;:1962418138,&quot;domain4Web&quot;:&quot;//activity.tuia.cn&quot;,&quot;deliveryType&quot;:1,&quot;device_type&quot;:&quot;tuia&quot;,&quot;materialId&quot;:15486,&quot;url&quot;:&quot;/statistics/click&quot;,&quot;advertId&quot;:13623,&quot;dcm&quot;:&quot;104.13623.18.15486&quot;,&quot;activityId&quot;:1807,&quot;domain&quot;:&quot;//embedlog.duiba.com.cn&quot;,&quot;appId&quot;:33631}">
						<span>马上使用</span></button>
				</a>
			</div>
		</div>
		<i class="decoration"></i>
	</div>
</div>


<div id="recommend-modal" class="recommend-modal" style="display: none">
	<div class="recommend-modal-dialog">
		<i onclick="fun_stop1none()"
		   class="close"
		   db-exposure="{&quot;dpm&quot;:&quot;33631.36.1.1807&quot;,&quot;consumer_id&quot;:1959432732,&quot;domain&quot;:&quot;//embedlog.duiba.com.cn&quot;,&quot;app_id&quot;:33631}"
		   db-exposure-get="true"></i>

		<div class="recommend-body1">
			<a class="fuli" href=""></a>
			<a class="recommend-li"
			   href="https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557">
				<i class="recommend-btn"></i>
				<img src="http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg"></a>
			<a class="recommend-li"
			   href="https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557">
				<i class="recommend-btn"></i>
				<img src="http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg">
			</a>
		</div>
	</div>
</div>


<div style="display:none;">
<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1264340266'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1264340266%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>
</div>

<script type="text/javascript" src="/static/turntable3/index1_201709140000.js"></script>
<script type="text/javascript" src="/static/turntable3/index2_201709140000.js"></script>
<script type="text/javascript" src="/static/turntable3/index3_201709140000.js"></script>
<script type="text/javascript" src="/static/turntable3/index_201708251746.js"></script>

</body>
</html>