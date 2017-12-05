<?php
use yii\helpers\Url;
?>
<!DOCTYPE html>
<html data-dpr="1" style="font-size: 200px;">
<head>
    <meta charset="UTF-8">
    <link rel="dns-prefetch" href="http://yun.tuifrog.com/">
    <link rel="dns-prefetch" href="http://yun.tuisnake.com/">
    <link rel="shortcut icon" type="image/x-icon" href="http://yun.tuifrog.com/babi/babi.ico">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    <title>话费流量我送你</title>
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

    <link rel="stylesheet"
          href="/static/chuaishuxiong/actBase_201711090001.css">
    <link rel="stylesheet" type="text/css"
          href="/static/chuaishuxiong/index_201710271800.css">
    <style>body {
            background-color: #f57744 !important;
        }

        #db-content {
            background-image: url(//yun.tuifrog.com/mami-media/img/tisf0tv0iy.jpg?x-oss-process=image/quality,Q_80) !important;
        }

        .rule {
            background-image: url(//yun.tuisnake.com/h5/activity/turntable_circle/images/rule.png?x-oss-process=image/quality,Q_80) !important;
        }

        .record {
            background-image: url(//yun.tuisnake.com/h5/activity/kickTree/images/record.png?x-oss-process=image/quality,Q_80) !important;
        }

        .prize-list {
            background-color: #f57744 !important;
        }

        .apple {
            color: #fff !important;
        }

        .apple {
            background-color: #f57744 !important;
        }

        .fruits {
            background-image: url(//yun.tuifrog.com/mami-media/img/scvsa2sdwf.png?x-oss-process=image/quality,Q_80) !important;
        }

        .bear.step1 {
            background-image: url(//yun.tuisnake.com/h5/activity/kickTree/images/bear1.png?x-oss-process=image/quality,Q_80) !important;
        }

        .bear.step2 {
            background-image: url(//yun.tuisnake.com/h5/activity/kickTree/images/bear2.png?x-oss-process=image/quality,Q_80) !important;
        }

        .bear.step3 {
            background-image: url(//yun.tuisnake.com/h5/activity/kickTree/images/bear3.png?x-oss-process=image/quality,Q_80) !important;
        }

        .bear.step4 {
            background-image: url(//yun.tuisnake.com/h5/activity/kickTree/images/bear4.png?x-oss-process=image/quality,Q_80) !important;
        }

        .bear.step5 {
            background-image: url(//yun.tuisnake.com/h5/activity/kickTree/images/bear3.png?x-oss-process=image/quality,Q_80) !important;
        }

        #start {
            background-image: url(//yun.tuifrog.com/mami-media/img/8wwtwae3iq.png?x-oss-process=image/quality,Q_80) !important;
        }

        #start.disabled {
            background-image: url(//yun.tuifrog.com/mami-media/img/dob0rmheqa.png?x-oss-process=image/quality,Q_80) !important;
        }

        .rabbits {
            background-image: url(//yun.tuifrog.com/mami-media/img/szaospaxn6.png?x-oss-process=image/quality,Q_80) !important;
        }

        .duck {
            background-image: url(//yun.tuifrog.com/mami-media/img/e2jnpi5frw.png?x-oss-process=image/quality,Q_80) !important;
        }

        .trunk {
            background-image: url(//yun.tuifrog.com/mami-media/img/2l10z3zc1f.png?x-oss-process=image/quality,Q_80) !important;
        }</style>
    <script charset="utf-8" async=""
            src="/static/chuaishuxiong/common_201711231000.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/common_201711090001.css">
    <style>.rule-modal .rule-modal-dialog section .probability .nav i {
            border-top-color: #fff;
            border-left-color: #fff;
        }</style>
    <style>.rule-modal .rule-modal-dialog {
            background-color: #ffbc7b !important;
        }

        .rule-modal .rule-modal-dialog section .probability {
            background-color: #ffbc7b !important;
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
            background-color: #f79c45 !important;
        }

        .rule-modal .rule-modal-dialog section .probability .nav span {
            color: #fff !important;
        }

        .rule-modal .rule-modal-dialog section .probability.active .text {
            color: #fff !important;
        }</style>
</head>

<body>
<div id="db-content" class="kick-tree-wrapper" style="display: block;">
    <a class="record" href="<?= Url::to('chuaishuxiong/list') ?>"></a>
    <img class="theme" id="theme"
         src="/static/chuaishuxiong/7yx5pfnkea.png">
    <div class="tree">
      <span class="leaf">
        <img class="leaf1 kickItem" id="leaf1"
             src="/static/chuaishuxiong/4zazma1af9.png" alt="">
        <img class="leaf2 kickItem" id="leaf2"
             src="/static/chuaishuxiong/xavxv7qt3j.png" alt="">
        <span class="fruits fruit1 kickItem"></span>
        <span class="fruits fruit2 kickItem"></span>
        <span class="fruits fruit3 kickItem"></span>
        <span class="prizeIcon duck fallDown"></span>
        <span class="prizeIcon fruits fruit fallDown"></span>
      </span>
        <span class="trunk">
        <span class="fruits"></span>
      </span>
        <span class="bear step1"></span>
        <div class="hole-wrapper">
            <div class="rabbit-wrapper">
                <span class="rabbits"></span>
            </div>
        </div>
    </div>
    <div class="bush">
        <img id="bush" src="/static/chuaishuxiong/3qid8z457t.png">
        <span class="rabbits"></span>
        <div id="start" onclick="fun_start()"></div>
        <div class="needCredits" id="needCredits">今日免费： <?php echo $num ?>次</div>
        <div class="prize-list" id="prize-list">
            <div id="prizes-wrapper"
                 style="width: 4.6rem; padding-left: 0.2rem; padding-right: 0rem; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);"
                 data-length="5">
                <div class="prize-item" style="display: inline-block; margin-right: 0.2rem;" data-id="29380"
                     onclick="prize_item_onclick()">
                    <div class="prize-img-box" onclick="prize_item_onclick"><img class="prize-img"
                                                    src="/static/chuaishuxiong/gwxu83vpvj.png">
                    </div>
                    <p class="prize-name">500元话费</p></div>
                <div class="prize-item" style="display: inline-block; margin-right: 0.2rem;" data-id="29381"
                     onclick="prize_item_onclick()" >
                    <div class="prize-img-box"><img class="prize-img"
                                                    src="/static/chuaishuxiong/biosmd2iin.png">
                    </div>
                    <p class="prize-name">100元话费</p></div>
                <div class="prize-item" style="display: inline-block; margin-right: 0.2rem;" data-id="29382"
                     onclick="prize_item_onclick()">
                    <div class="prize-img-box"><img class="prize-img"
                                                    src="/static/chuaishuxiong/t15wvmtl1h.png">
                    </div>
                    <p class="prize-name">6G流量包</p></div>
                <div class="prize-item" style="display: inline-block; margin-right: 0.2rem;" data-id="29383"
                     onclick="prize_item_onclick()" >
                    <div class="prize-img-box"><img class="prize-img"
                                                    src="/static/chuaishuxiong/cc2ofrkb9b.png">
                    </div>
                    <p class="prize-name">2G流量包</p></div>
                <div class="prize-item" style="display: inline-block; margin-right: 0.2rem;" data-id="29384"
                     onclick="prize_item_onclick()">
                    <div class="prize-img-box"><img class="prize-img"
                                                    src="/static/chuaishuxiong/ndgsc97nq1.png">
                    </div>
                    <p class="prize-name">幸运福袋</p></div>
            </div>
            <div class="prize-tag"></div>
            <div style="position: absolute; z-index: 9999; height: 7px; left: 2px; right: 2px; bottom: 0px; overflow: hidden; pointer-events: none;"
                 class="iScrollHorizontalScrollbar iScrollLoneScrollbar">
                <div style="box-sizing: border-box; position: absolute; background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%; border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 3px; height: 100%; transition-duration: 0ms; display: block; width: 440px; transform: translate(0px, 0px) translateZ(0px); transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1);"
                     class="iScrollIndicator"></div>
            </div>
        </div>
        <span class="guide circle"></span>
        <span class="guide hand"></span>
    </div>
    <div class="rule rule-btn" onclick="rule_modal()"></div>
</div>

<!-- 首屏加载公用js、css -->
<script type="text/javascript"
        src="/static/chuaishuxiong/actBase_201711161123.js"></script>

<!-- 延迟加载公用js、css -->
<script type="text/javascript">
    var common_js = '//yun.tuifrog.com/h5-mami/common/common_201711231000.js';

    var common_css = '//yun.tuifrog.com/h5-mami/common/common_201711090001.css';
</script>

<!-- 活动工具页面初始化> -->
<script type="text/javascript">
    var isplay = 1;

    function fun_start() {

        $("#start").removeClass('disabled')

        if (isplay == 1) {
            isplay = 0;
            var num = <?php echo $num ?>;
            if (num > 0) {
                var t1 = window.setTimeout(fun_stop, 2000)
                $.post("<?= Url::to('chuaishuxiong/getPrize') ?>", {}, function (res) {
                    var obj = eval('(' + res + ')');
                    $("#num_ob").html(obj.content.num);
                    number = obj.content.num;
                    $("#cname").html(obj.content.title);
                    $("#cimg").attr('src', obj.content.img);
                    var url = '<?php echo Yii::app()->createUrl("chuaishuxiong/skip", array("channel" => $channel, "aid" => "")) ?>' + obj.content.id;
                    $("#curl").attr('href', url);
                })
            } else {
                var t1 = window.setTimeout(fun_stop1, 0)
            }
        }
    }

    function fun_stop() {
        $("#start").removeClass('disabled')
        var t1 = window.setTimeout(fun_circle_bl, 800)
        return
    }

    function fun_stop1() {
        $("#start").removeClass('disabled')
        $("#recommend-modal").css("display", "block")
        return
    }
    function fun_stop1none() {
//        $("#recommend-modal").css("display", "none");
//        $("#test").css("display", "block");
        window.location.href = "<?php  echo Yii::app()->createUrl('chuaishuxiong/turntable2') ?>";
    }

    function fun_circle_bl() {
        $("#circle_bl").css("display", "block")
    }

    function fun_sx() {
        window.location.href = "<?php  echo Yii::app()->createUrl('chuaishuxiong/turntable2') ?>";
    }

    function rule_modal() {
        $("#rule_modal_id").css("display", "block")
    }

    function rule_modal_close() {
        $("#rule_modal_id").css("display", "none")
    }

    function prize_item_onclick() {
//        $("#prize_detail_modal").css({
//            "display":"block",
//            "class":"show"
//        });
        $(".prize-detail-modal").attr("class","prize-detail-modal show");
        $("#prize_detail_modal").css("display", "block");
    }

    function prize_detail_slideup_onclick(){

        $(".prize-detail-modal").attr("class","prize-detail-modal");
        $(".prize-detail-modal").css("display", "none");
    }

</script>
<script type="text/javascript"
        src="/static/chuaishuxiong/index_201711250000_002.js"></script>

<div class="rule-modal" style="display: none;" id="rule_modal_id">
    <div class="rule-modal-dialog">
        <header><i></i><span>活动说明</span><i></i></header>
        <section class="scroll-box">
            <div>
                <div class="description rule-3">
                    <div class="description-scroller"><p>世界零距离，话费流量我送你~别让感情有距离！</p>
                        <p>活动说明：参与活动即有机会获得幸运奖，每天8次免费抽奖机会。此活动为概率中奖，奖品数量有限，祝好运。</p>
                        <p>惊喜一：500元话费</p>
                        <p>惊喜二：100元话费</p>
                        <p>惊喜三：6G流量包</p>
                        <p>惊喜四：2G流量包</p>
                        <p>惊喜五：幸运福袋</p>
                        <p>－－－－－－－－－－－－－－－－</p>
                        <p>重要声明</p>
                        <p>1、实物类奖品将在活动结束后5-10个工作日安排发货，请耐心等待</p>
                        <p>2、优惠券类奖品的使用规则详见每个优惠券的介绍页</p>
                        <p>3、请兑换后仔细阅读使用流程，如有疑问，可直接联系客服专线：400-080-6659或客服QQ：400-080-6659（工作日9:00至18:00）</p>
                        <p>4、通过非法途径获得奖品的，主办方有权不提供奖品</p></div>
                </div>
                <div class="probability rule-3">
                    <div class="nav"><span>更多概率说明</span><i></i></div>
                    <div class="text">
                        <div class="probability-wrapper rule-3">
                            <div class="probability-scroller"><p>惊喜一：500元话费，共5份，中奖概率为0.01%</p>
                                <p>惊喜二：100元话费，共20份，中奖概率为0.04%</p>
                                <p>惊喜三：6G流量包，共50份，中奖概率为0.08%</p>
                                <p>惊喜四：2G流量包，共120份，中奖概率为0.2%</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="close" onclick="rule_modal_close()"></div>
    </div>
</div>
<div class="DB_guide" style="left: 1.9rem; top: 3.7rem; display: block;"><span class="DB_G_circle"></span><span
            class="DB_G_hand"></span></div>
<div class="modal-group">
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201708211647.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//yun.tuisnake.com/h5-mami/alipayModal/index_201709140000.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript"
            src="/static/chuaishuxiong/index_201709140000.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201708211647.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//yun.tuisnake.com/h5-mami/alipayModal/index_201709140000.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript"
            src="/static/chuaishuxiong/index_201709140000.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201709062000.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//yun.tuisnake.com/h5-mami/thanksPrize/index_201710301800.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript"
            src="/static/chuaishuxiong/index_201710301800.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201710230000.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//yun.tuisnake.com/h5-mami/recommend/index_201711160000.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript"
            src="/static/chuaishuxiong/index_201711160000.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201711161123.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//yun.tuisnake.com/h5-mami/objectModal/index_201711161123.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript"
            src="/static/chuaishuxiong/index_201711161123.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201712041039.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.id = "couponScript";
        oScript.src = "//yun.tuisnake.com/h5-mami/virtualModal/index_201711241745.js";
        console.log(oScript);
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript" id="couponScript"
            src="/static/chuaishuxiong/index_201711241745.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201711250000.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//yun.tuisnake.com/h5-mami/QBModal/index_201711250000.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript"
            src="/static/chuaishuxiong/index_201711250000.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201711250000.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.src = "//yun.tuisnake.com/h5-mami/QBModal/index_201711250000.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript"
            src="/static/chuaishuxiong/index_201711250000.js"></script>
    <link rel="stylesheet"
          href="/static/chuaishuxiong/index_201709141600.css">
    <script type="text/javascript">
        var oHead = document.querySelector('.modal-group');
        var oScript = document.createElement('script');
        oScript.type = "text/javascript";
        oScript.id = "couponScript";
        oScript.src = "//yun.tuisnake.com/h5-mami/couponPrize/1.0.2/index_201711031000.js";
        oHead.appendChild(oScript);
    </script>
    <script type="text/javascript" id="couponScript"
            src="/static/chuaishuxiong/index_201711031000.js"></script>
</div>

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
        <i onclick="fun_stop1none()" class="close"
           db-exposure="{&quot;dpm&quot;:&quot;33631.36.1.1807&quot;,&quot;consumer_id&quot;:1959432732,&quot;domain&quot;:&quot;//embedlog.duiba.com.cn&quot;,&quot;app_id&quot;:33631}"
           db-exposure-get="true"></i>
        <div class="recommend-body1">
<!--            <a class="fuli" href=""></a>-->
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


<div class="prize-detail-modal" style="display: none;" id="prize_detail_modal">
    <div class="prize-detail-dialog">
        <div class="prize-detail-slidebox" style="display: block;">
            <div class="prize-detail-content" style="transform: translate(0px, 0px) translateZ(0px);"><img
                        class="prize-detail-img" src="//yun.tuifrog.com/mami-media/img/16of24t4pn.jpg">
                <div class="prize-detail-info"><h3>6G流量包</h3>
                    <p></p></div>
                <div class="prize-detail-description"><p><span style="font-size: 16px;">【商品详情】</span><br></p>
                    <p>商品名称：全国6G流量包</p>
                    <p><br></p>
                    <p>【领取说明】</p>
                    <p>获奖后，请详细填写个人手机号（将作为流量充值号码），我们会在5-10个工作日内为您充值，若应个人原因导致号码错误、误充错充，不会进行补充，敬请谅解</p>
                    <p><br></p>
                    <p>【特别说明】</p>
                    <p>请仔细阅读领奖流程，若有疑问，可直接联系客服专线：400-080-6659或客服QQ：4000806659（工作日9:00至18:00）</p></div>
            </div>
            <div style="position: absolute; z-index: 9999; width: 7px; bottom: 2px; top: 2px; right: 1px; overflow: hidden; pointer-events: none;"
                 class="iScrollVerticalScrollbar iScrollLoneScrollbar">
                <div style="box-sizing: border-box; position: absolute; background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%; border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 3px; width: 100%; transition-duration: 0ms; display: block; height: 452px; transform: translate(0px, 0px) translateZ(0px);"
                     class="iScrollIndicator"></div>
            </div>
        </div>
        <i class="prize-detail-slideup" onclick="prize_detail_slideup_onclick()"></i>
        <div class="prize-detail-loading" style="display: none;"><i></i>
            <p>正在获取奖品信息,请稍后...</p></div>
    </div>
</div>

</body>
</html>