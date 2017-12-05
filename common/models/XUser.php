<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "xl_user".
 *
 * @property integer $id
 * @property string $deviceid
 * @property string $cookie
 * @property integer $channel
 * @property integer $ctime
 */
class XUser extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'xl_user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['deviceid', 'cookie', 'ctime'], 'required'],
            [['channel', 'ctime'], 'integer'],
            [['deviceid', 'cookie'], 'string', 'max' => 64],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'deviceid' => 'Deviceid',
            'cookie' => 'Cookie',
            'channel' => 'Channel',
            'ctime' => 'Ctime',
        ];
    }
}
