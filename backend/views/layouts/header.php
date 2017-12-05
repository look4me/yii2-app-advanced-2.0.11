<?php
use yii\helpers\Html;
use yii\bootstrap\NavBar;
use yii\bootstrap\Nav;

/* @var $this \yii\web\View */
/* @var $content string */
?>
<style>
    .main-header nav .container {
        padding-right: 15px;
        padding-left: 15px;
        margin-right: 0 !important;
        margin-left: 0 !important;
    }

    .user-menu form button{
        color: white !important;
    }

</style>

<header class="main-header">

    <?= Html::a('<span class="logo-mini">趣味新奇特</span><span class="logo-lg">' . Yii::$app->name . '</span>', Yii::$app->homeUrl, ['class' => 'logo']) ?>

    <?php
    NavBar::begin(
        [
            'brandLabel' => '<span class="sr-only">Toggle navigation</span>',
            'brandOptions' => ['class' => "sidebar-toggle", 'data-toggle' => "offcanvas", 'role' => "button"],
            'brandUrl' => '#',
            'options' => [
                'class' => 'navbar-inverse',
            ],
        ]

    );


    $menuItems = [
        [
            'label' => '统计数据',
            'items'=>[
                [
                    'label'=>'实时统计',
                    'url'=>['/quiz/stat/list']
                ],
            ],

        ]
    ];

    if (Yii::$app->user->isGuest) {
        $menuItems[] = ['label' => 'Signup', 'url' => ['/site/signup']];
        $menuItems[] = ['label' => 'Login', 'url' => ['/site/login']];
    } else {
        $menuItems[] = '<li class="user user-menu">'
            . Html::beginForm(['/site/logout'], 'post')
            . Html::submitButton(
                '退出 (' . Yii::$app->user->identity->username . ')',
                ['class' => 'btn btn-link logout']
            )
            . Html::endForm()
            . '</li>';
    }
    echo Nav::widget([
        'options' => ['class' => 'navbar-nav navbar-left'],
        'items' => $menuItems,
    ]);
    NavBar::end();
    ?>


</header>
