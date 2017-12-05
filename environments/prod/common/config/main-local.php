<?php
return [
    'components' => [
        'db' => [
            'class' => 'yii\db\Connection',
            'dsn' => 'mysql:host=rm-bp1ll00kd3a5385br.mysql.rds.aliyuncs.com;dbname=yii2admin',
            'username' => 'wuxiaojun',
            'password' => 'Wx331021',
            'charset' => 'utf8',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            'viewPath' => '@common/mail',
        ],
    ],
];
