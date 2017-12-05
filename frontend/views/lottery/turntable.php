<?php
use yii\helpers\Url;
?>
<!DOCTYPE html>
<!-- saved from url=(0261)http://activity.tuia.cn/activity/index?id=1807&slotId=3089&login=normal&appKey=3hyhAoecd48ehJVuz4rG9cSrFWSQ&deviceId=3953b41d-4cc2-45c8-bced-d77cad1c6b31&dsm=1.3089.0.0&tenter=SOW&tck_rid_6c8=0a1ce5bbj6zvfwb7-74923192&tck_loc_c5d=tactivity-1807&dcm=401.3089.0.0 -->
<html data-dpr="2" style="font-size: 100px;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script id="_1504661426602_8214" src="/static/turntable/detect.json"></script>

    <link rel="shortcut icon" type="image/x-icon" href="http://yun.tuia.cn/tuia/tuia.ico">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    <title>月中红包补给站</title>
    <!--    <script type="text/javascript" async="" src="/static/turntable/fm.js"></script>-->
    <script>!function (e, i) {
            var t = e.documentElement, n = navigator.userAgent.match(/iphone|ipod|ipad/gi),
                a = n ? Math.min(i.devicePixelRatio, 3) : 1,
                m = "orientationchange" in window ? "orientationchange" : "resize";
            t.dataset.dpr = a;
            for (var d, l, c = !1, o = e.getElementsByTagName("meta"), r = 0; r < o.length; r++)l = o[r], "viewport" == l.name && (c = !0, d = l);
            if (c) d.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no"; else {
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
    <link rel="stylesheet" href="/static/turntable/actBase_201707271400.css">
    <link rel="stylesheet" type="text/css" href="/static/turntable/index_201707271400.css">
    <script charset="utf-8" async="" src="/static/turntable/common_201708231400.js"></script>
    <link rel="stylesheet" href="/static/turntable/common_201708221129.css">
    <style>
        .rule {
            background-image: url(http://yun.tuia.cn/h5/activity/turntable_circle/images/rule.png) !important;
        }

        #db-content {
            background-image: url(http://yun.tuia.cn/tuia-media/img/irfql8qa9p.png) !important;
        }

        body {
            background-color: #fffe41 !important;
        }

        .record {
            background-image: url(http://yun.tuia.cn/tuia-media/img/296ifcg9nb.png) !important;
        }

        .apple {
            background-color: #f7f639 !important;
        }

        .apple {
            color: #fff !important;
        }

        #circle {
            background-image: url(http://yun.tuia.cn/tuia-media/img/b7n6q4sqyd.png) !important;
        }

        .turntable-border {
            background-color: #dc5f1a !important;
        }

        .point {
            background-image: url(http://yun.tuia.cn/tuia-media/img/m3q5b5jkil.png) !important;
        }

        #start {
            background-image: url(http://yun.tuia.cn/tuia-media/img/qht7qh0g14.png) !important;
        }

        #start:active {
            background-image: url(http://yun.tuia.cn/tuia-media/img/cztvsxt9y6.png) !important;
        }

        #start.disabled {
            background-image: url(http://yun.tuia.cn/tuia-media/img/pcs19161rq.png) !important;
        }

        .rule-modal .rule-modal-dialog {
            background-color: #cf322a !important;
        }

        .rule-modal .rule-modal-dialog section .probability {
            background-color: #cf322a !important;
        }

        .rule-modal .rule-modal-dialog header span, .rule-modal .rule-modal-dialog section .description {
            color: #fff !important;
        }

        .rule-modal .rule-modal-dialog header i {
            background-color: #fff !important;
        }

        .rule-modal .rule-modal-dialog .close {
            color: #fff !important;
        }

        .rule-modal .rule-modal-dialog section .probability .nav {
            background-color: #d93a32 !important;
        }

        .rule-modal .rule-modal-dialog section .probability .nav span {
            color: #fff !important;
        }

        .rule-modal .rule-modal-dialog section .probability.active .text {
            color: #fff !important;
        }</style>
    <style>.rule-modal .rule-modal-dialog section .probability .nav i {
            border-top-color: #fff !important;
            border-left-color: #fff !important;
        }</style>
    <style>.needCredits p {
            box-shadow: 0 0 0.05rem rgba(192, 49, 42, 0.85), 0 0 0.05rem rgba(192, 49, 42, 0.85) inset;
            -webkit-box-shadow: 0 0 0.05rem rgba(192, 49, 42, 0.85), 0 0 0.05rem rgba(192, 49, 42, 0.85) inset;
            text-shadow: 0 0 0.05rem #c0312a;
            color: #c0312a;
            border-color: #c0312a;
        }</style>

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
            margin-top: 15vw;
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
    <a class="record" href="<?= Url::to('lottery/list') ?>"></a>
    <div class="banner">
        <img class="theme" src="/static/turntable/lmzax2v1rs.png">
        <div class="rule"></div>
    </div>
    <div class="needCredits"><p>今日免费： <span id="num_ob"><?php echo $num ?></span>次</p></div>

<!--    a class="recommend-li" href="https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557">-->
<!--    <i class="recommend-btn"></i>-->
<!--    <img src="http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg"></a>-->
    <a id="test" class="popupView" style="display: <?php echo $testkey ?>;" href="https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557">
        <img class="popupView_img" id="popupView_img" onclick="fun_popupView_img()" href="https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557" src="http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg"/>
    </a>



    <div class="core">
        <div class="core-overflow">
            <div class="turntable-border"></div>
            <div class="radius-group default toggle"></div>
            <div id="circle" style="transform: rotate3d(0, 0, 1, 358.6deg);">
                <div class="circle-box" id="circle-box">
                    <div class="prize" data-index="0" data-id="10945" data-type="thanks">
                        <div class="prize-dialog"><p>谢谢参与</p><img src="/static/turntable/thanks.png" alt=""></div>
                    </div>
                    <div class="prize" data-index="1" data-id="10946" data-type="physical">
                        <div class="prize-dialog"><p>666元红包</p><img src="/static/turntable/nsojbrub1q.png" alt=""></div>
                    </div>
                    <div class="prize" data-index="2" data-id="10947" data-type="physical">
                        <div class="prize-dialog"><p>200元话费</p><img src="/static/turntable/kja5bp9ry3.png" alt=""></div>
                    </div>
                    <div class="prize" data-index="3" data-id="10948" data-type="lucky">
                        <div class="prize-dialog"><p>幸运福袋</p><img src="/static/turntable/lucky.png" alt=""></div>
                    </div>
                    <div class="prize" data-index="4" data-id="10949" data-type="physical">
                        <div class="prize-dialog"><p>2G流量包</p><img src="/static/turntable/85phchjerw.png" alt=""></div>
                    </div>
                    <div class="prize" data-index="5" data-id="10950" data-type="physical">
                        <div class="prize-dialog"><p>99元红包</p><img src="/static/turntable/yyquusqtuj.png" alt=""></div>
                    </div>
                </div>
            </div>

            <div id="start" onclick="fun_start()"></div>

        </div>
        <div class="point"></div>
    </div>
    <!--<input type="button" value="1111111111" onclick="fun_stop()"/>-->
    <p class="apple fixed">*兑换项与活动和设备生产商公司无关</p>
</div>

<script>
    var isplay = 1;
    var number = 8;

    //点击跳转新游戏
    function fun_popupView_img() {



    }


    function fun_stop() {
//        alert(1)
        $("#circle").css("transform", "rotate3d(0, 0, 1, 150deg)")
        $("#circle").stopRotate()
        $("#start").removeClass('disabled')
        var t1 = window.setTimeout(fun_circle_bl, 800)
        return
    }

    function fun_stop1() {
//        alert(1)
        $("#circle").css("transform", "rotate3d(0, 0, 1, 358.6deg)")
        $("#circle").stopRotate()
        $("#start").removeClass('disabled')
        $("#recommend-modal").css("display", "block")
        return
    }
    //点击关闭0次后弹出游戏 推荐游戏
    function fun_stop1none(){
        window.location.href="<?= Url::to('lottery/turntable') ?>";
//        $("#recommend-modal").css("display", "none")
    }

    function fun_circle_bl() {
        $("#circle_bl").css("display", "block")
    }

    function fun_start() {
        var num = <?php echo $num ?>;

//        var testkey = <?php //echo $testkey ?>//;

        if(isplay == 1){
            isplay = 0
            if (num > 0) {
                var t1 = window.setTimeout(fun_stop, 2000)
                $.post("<?= Url::to(['lottery/prize']) ?>", {}, function (res) {
                    var obj = eval('(' + res + ')');
                    $("#num_ob").html(obj.content.num);
                    $("#cname").html(obj.content.title);
                    $("#cimg").attr('src', obj.content.img);
                    var url = '<?= Url::to(["lottery/skip","channel"=>$channel,"aid"=>""]) ?>'+obj.content.id;
                    console.log('channel: ' + obj.content.num);
                    $("#curl").attr('href', url);
                })
            } else {
                var t1 = window.setTimeout(fun_stop1, 0)
            }
        }
    }
    //点击关闭优惠活动
    function fun_sx() {
//        alert(1)
//        location = location
//        $("#circle_bl").css("display", "none")
//        $("#circle_bl").css("display", "none");
//        if (number <= 2){
//            $("#test").css("display", "block");
//        }
        window.location.href="<?= Url::to(['lottery/turntable']) ?>";

    }
</script>

<div class="business-lead">
    <div class="business-lead-dialog">
        <div class="business-lead-finger-box">
            <div class="lead-circle"></div>
            <div class="lead-figer"></div>
        </div>
    </div>
</div>

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
        activityId: '1807', //活动id
        activityType: '2',  //研究
        slotId: '3089',  //广告位id
        preview: false,  //预览
        isShowBuoy: false,  //是否展示浮标
        isShowRecommend: true,  //是否展示推荐弹层
        isShowNew: true, //是否显示abtest新弹层
        couponSkinId: 18 //弹层皮肤id
    };
</script>  <!-- 同步 tuia-h5/unit/layout/common.html -->

<!-- 首屏加载公用js、css -->
<script type="text/javascript" src="/static/turntable/actBase_201708231400.js"></script>

<!-- 延迟加载公用js、css -->
<script type="text/javascript">
    var common_js = 'http://yun.tuia.cn/h5-tuia/common/common_201708231400.js';
    var common_css = 'http://yun.tuia.cn/h5-tuia/common/common_201708221129.css';
</script>
<script type="text/javascript" src="/static/turntable/index_201707271400.js"></script>


<div class="rule-modal" style="display: none;">
    <div class="rule-modal-dialog">
        <header><i></i><span>活动说明</span><i></i></header>
        <section>
            <div class="description">
                <div class="description-scroller"><h3>月中福利到，红包补给站来啦！给自己的钱包补补吧~</h3>
                    <h3>活动说明：参与活动即有机会获得幸运奖，每天8次免费抽奖机会。此活动为概率中奖，奖品数量有限，祝好运。</h3>
                    <p>惊喜一：666元红包</p>
                    <p>惊喜二：200元话费</p>
                    <p>惊喜三：99元红包</p>
                    <p>惊喜四：2G流量包</p>
                    <p>惊喜五：幸运奖</p>
                    <p>－－－－－－－－－－－－－－－－</p>
                    <p>重要声明</p>
                    <p>1、实物类奖品将在活动结束后5-10个工作日安排发货，请耐心等待</p>
                    <p>2、优惠券类奖品的使用规则详见每个优惠券的介绍页</p>
                    <p>3、请兑换后仔细阅读使用流程，如有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00至18:00）</p>
                    <p>4、通过非法途径获得奖品的，主办方有权不提供奖品</p></div>
            </div>
            <div class="probability">
                <div class="nav"><span>更多概率说明</span><i></i></div>
                <div class="text">
                    <div class="probability-wrapper">
                        <div class="probability-scroller">
                            <ul>
                                <li>666元红包，共5份，中奖概率0.01%</li>
                                <li>200元话费，共10份，中奖概率0.02%</li>
                                <li>99元红包，共20份，中奖概率0.04%</li>
                                <li>2G流量包，共30份，中奖概率0.06%</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="close"></div>
    </div>
</div>
<div style="position: static; display: none; width: 0px; height: 0px; border: none; padding: 0px; margin: 0px;">
    <div id="trans-tooltip">
        <div id="tip-left-top"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-left-top.png&quot;);"></div>
        <div id="tip-top"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-top.png&quot;) repeat-x;"></div>
        <div id="tip-right-top"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-right-top.png&quot;);"></div>
        <div id="tip-right"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-right.png&quot;) repeat-y;"></div>
        <div id="tip-right-bottom"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-right-bottom.png&quot;);"></div>
        <div id="tip-bottom"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-bottom.png&quot;) repeat-x;"></div>
        <div id="tip-left-bottom"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-left-bottom.png&quot;);"></div>
        <div id="tip-left"
             style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-left.png&quot;);"></div>
        <div id="trans-content"></div>
    </div>
    <div id="tip-arrow-bottom"
         style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-arrow-bottom.png&quot;);"></div>
    <div id="tip-arrow-top"
         style="background: url(&quot;chrome-extension://ikkbfngojljohpekonpldkamedehakni/imgs/map/tip-arrow-top.png&quot;);"></div>
</div>
<!--手指-->
<div class="DB_guide" style="left: 1.69rem; top: 2.925rem; display: none;"><span class="DB_G_circle"></span><span
            class="DB_G_hand"></span></div>
<link rel="stylesheet" href="/static/turntable/index_201708211647.css">
<script type="text/javascript">
    var oHead = document.querySelector('body');
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";
    oScript.src = "http://yun.tuia.cn/h5-tuia/alipayModal/index_201708211647.js";
    oHead.appendChild(oScript);
</script>
<script type="text/javascript" src="/static/turntable/index_201708211647.js"></script>
<link rel="stylesheet" href="/static/turntable/index_201708211647.css">
<script type="text/javascript">
    var oHead = document.querySelector('body');
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";
    oScript.src = "http://yun.tuia.cn/h5-tuia/alipayModal/index_201708211647.js";
    oHead.appendChild(oScript);
</script>
<script type="text/javascript" src="/static/turntable/index_201708211647.js"></script>
<link rel="stylesheet" href="/static/turntable/index_20170815950.css">
<script type="text/javascript">
    var oHead = document.querySelector('body');
    var oScript = document.createElement('script');
    oScript.type = "text/javascript";
    oScript.src = "http://yun.tuia.cn/h5-tuia/couponPrize/1.22/index_20170815950.js";
    oHead.appendChild(oScript);
</script>
<script type="text/javascript" src="/static/turntable/index_20170815950.js"></script>

<!--弹出视图-->
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
        <i onclick="fun_stop1none()" class="close" db-exposure="{&quot;dpm&quot;:&quot;33631.36.1.1807&quot;,&quot;consumer_id&quot;:1959432732,&quot;domain&quot;:&quot;//embedlog.duiba.com.cn&quot;,&quot;app_id&quot;:33631}" db-exposure-get="true"></i>
        <div class="recommend-body1">
            <a class="fuli" href=""></a>
            <!-- 活动次数用完 推荐游戏-->
            <a class="recommend-li" href="http://lottery.51haowenzhang.com/index.php/lottery2/turntable">
                <i class="recommend-btn"></i>
                <img src="http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg"></a>
            <a class="recommend-li" href="http://lottery.51haowenzhang.com/index.php/lottery3/turntable">
                <i class="recommend-btn"></i>
                <img src="http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg">
            </a>
        </div>
    </div>
</div>


<div style="display:none;">
    <script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1264340266'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1264340266%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>
</div>

</body>
</html>