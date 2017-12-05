<?php
namespace frontend\controllers;

/**
 * Created by PhpStorm.
 * User: YZH
 * Date: 2017/9/14
 * Time: 10:21
 */

use common\models\PrizeList;
use Yii;
use common\models\XUser;
use common\models\XAd;

class Lottery3Controller extends \yii\web\Controller
{
    public $layout = false;

    public function actionTurntable()
    {
        //取设备id
        $channel = Yii::$app->request->get('channel', 1);

        if (!isset($_COOKIE['deviceid3'])) {
            $deviceid = md5(time() . rand(100000, 9999999));
            setCookie('deviceid3', $deviceid, NULL, '/');
            $user = new XUser();
            $user->deviceid = $deviceid;
            $user->cookie = 'cookie';
            $user->channel = $channel;
            $user->ctime = time();
            $user->save(false);
        }
        if (!isset($_COOKIE['num3'])) {
            $num = 8;
            $time = strtotime(date('Y-m-d')) + 24 * 3600;
            setCookie('num3', $num, $time, '/');
        } else {
            $num = $_COOKIE['num3'];
        }

        $testkey = 'none';
        if ($num <= 2) {
            $testkey = 'block';
        }

        return $this->render('turntable',
            array(
                'num' => $num,
                'channel' => $channel,
                'testkey' => $testkey,
            ));

    }

    //广告跳转页面，记录广告点击数
    public function actionSkip()
    {
        $aid = Yii::$app->request->get('aid');
        $ad = XAd::findOne($aid);
        return $this->render('skip', array('ad' => $ad));

    }

    public function actionTurntable3()
    {
        $url = Yii::app()->createUrl('lottery3/turntable');
        Header("Location: $url");
    }

    public function actionPrize()
    {
        $deviceid = $_COOKIE['deviceid3'];
        $num = $_COOKIE['num3'];
        if ($num < 0) {
            $arr = array(
                'code' => 1,
                'content' => '没有机会了'
            );
        } else {
            //随机获得一个奖品
            $sql = 'SELECT * FROM xl_ad ORDER BY RAND() LIMIT 1';
            /** @var $model XAd */
            if (($model = XAd::findBySql($sql)->one()) == null) {
                $content = [
                    'title' => '没有卷了',
                    'id' => '',
                    'img' => 'http://file.yingyongdaren.com/images/f6301909fb6bd219c77eaa7a2bdd0b90126779856.jpg',
                    'url' => 'https://m.mia.com/gift_event/index/5555555?sfrom=1c007905000ae200468659a6811e71557',
                    'dtime' => '2017-10-29',
                    'num' => $num - 1
                ];

            } else {
                $content = [
                    'title' => $model->title,
                    'id' => $model->id,
                    'img' => $model->img,
                    'url' => $model->url,
                    'dtime' => $model->dtime,
                    'num' => $num - 1
                ];
            }

            $prize = new PrizeList();
            $prize->deviceid = $deviceid;
            $prize->img = $content['img'];
            $prize->name = $content['title'];
            $prize->url = $content['url'];
            $prize->dtime = strtotime($content['dtime']);
            $prize->ctime = time();
            $prize->save(false);

            $arr = array(
                'code' => 0,
                'content' => $content
            );
            $time = strtotime(date('Y-m') + 24 * 3600) - time();
            setCookie('num3', ($num - 1), $time, '/');
        }
        echo json_encode($arr);
    }

    public function actionList()
    {
        $deviceid = $_COOKIE['deviceid3'];
        $list = PrizeList::model()->findAll('deviceid=:deviceid', array(':deviceid' => $deviceid));

        $this->renderPartial('list', array('list' => $list));
    }
}