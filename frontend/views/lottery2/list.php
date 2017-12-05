<!DOCTYPE html>
<!-- saved from url=(0056)http://activity.tuia.cn/activity/indexRecord?vmName=list -->
<html data-dpr="2" style="font-size: 100px;">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

    <link rel="shortcut icon" type="image/x-icon" href="http://yun.tuia.cn/tuia/tuia.ico">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="format-detection" content="telephone=no">
    <title>我的奖品</title>

    <meta name="viewport"
          content="width=device-width,initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no">

    <link rel="stylesheet" href="/static/turntable/list_201707261909.css">
</head>

<body>
<div id="db-content">
    <div style="padding-top: 20px">

    </div>
    <div class="obj-list">
        <?php foreach ($list as $value){ ?>
            <a href="<?php echo $value['url'] ?>" class="cf item" data-status="" data-orderid="31178245230304"> <img
                        class="fl" src="<?php echo $value->img ?>" data-url=""
                        is-load="true">
                <div class="fl item-info"><h3><?php echo $value->name ?></h3>                <span>有效期: <?php echo date('Y-m-d',$value['dtime']) ?></span></div>
            </a>
        <?php } ?>
    </div>

    <div class="noRecord"><img src="/static/noRecord.png">
        <p>您没有可用奖品喔～</p>
    </div>
    <div class="networkError"><img src="/static/noRecord.png">
        <p>接口调用异常</p>
    </div>

    <div class="orderError">
        <div class="error-container">
            <div class="error-top">您填写的支付宝信息错误，请检查重填。</div>
            <div class="error-bottom">
                <div class="btn-cancle">取消</div>
                <div class="btn-fill">去重填</div>
            </div>
        </div>
    </div>
</div>


<div class="loading"><img class="loading-img" src="/static/loading.gif" style="display: none;"><span
            class="loading-tip">已经没有更多了！</div>


</body>
</html>