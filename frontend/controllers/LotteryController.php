<?php
namespace frontend\controllers;
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/9/6
 * Time: 17:09
 */

use common\models\PrizeList;
use Yii;
use common\models\XUser;
use common\models\XAd;

class LotteryController extends \yii\web\Controller
{
    public $layout = false;
    public function actionTurntable()
    {
        //取设备id
        $channel = Yii::$app->request->get('channel', 1);

        if (!isset($_COOKIE['deviceid'])) {
            $deviceid = md5(time() . rand(100000, 9999999));
            setCookie('deviceid', $deviceid, NULL, '/');
            $user = new XUser();
            $user->deviceid = $deviceid;
            $user->cookie = 'cookie';
            $user->channel = $channel;
            $user->ctime = time();
            $user->save(false);
        }
        if (!isset($_COOKIE['num'])) {
            $num = 8;
            $time = strtotime(date('Y-m-d')) + 24 * 3600;
            setCookie('num', $num, $time, '/');
        } else {
            $num = $_COOKIE['num'];
        }
        $testkey = 'none';
        if ($num <= 2) {
            $testkey = 'block';
        }
        return $this->render('turntable',
            [
                'num' => $num,
                'channel' => $channel,
                'testkey' => $testkey,
            ]);

    }

    //广告跳转页面，记录广告点击数
    public function actionSkip()
    {
        $aid = Yii::$app->request->get('aid');
        $ad = XAd::findOne($aid);
        return $this->render('skip', array('ad' => $ad));

    }

    public function actionTurntable2()
    {
        $url = Yii::app()->createUrl('lottery/turntable');
        Header("Location: $url");
    }

    //获取设备id h5专用
    public function actionTurntable3()
    {
        //取设备id
        $channel = Yii::app()->request->getParam('channel', 1);
        echo ($channel);
    }

    //广告跳转页面，记录广告点击数 h5专用
    public function actionSkip1()
    {
        $aid = Yii::app()->request->getParam('aid');
        $ad = XAd::model()->findByPk($aid);
        $this->renderPartial('skip', array('ad' => $ad));

    }

    public function actionPrize()
    {
        $deviceid = $_COOKIE['deviceid'];
        $num = $_COOKIE['num'];
        if ($num < 0) {
            $arr = array(
                'code' => 1,
                'content' => '没有机会了'
            );
        } else {
            //随机获得一个奖品
            $sql = 'SELECT * FROM xl_ad ORDER BY RAND() LIMIT 1';
            /** @var $model XAd */
            if( ($model = XAd::findBySql($sql)->one()) == null ){
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
            setCookie('num', ($num - 1), $time, '/');

        }
        echo json_encode($arr);
    }

    public function actionList()
    {
        $deviceid = $_COOKIE['deviceid'];
        $list = PrizeList::model()->findAll('deviceid=:deviceid', array(':deviceid' => $deviceid));

        $this->renderPartial('list', array('list' => $list));
    }
}