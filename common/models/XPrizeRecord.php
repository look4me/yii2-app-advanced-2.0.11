<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "xl_prize_record".
 *
 * @property integer $id
 * @property string $deviceid
 * @property string $cookie
 * @property integer $pid
 * @property integer $price
 * @property integer $ctime
 */
class XPrizeRecord extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'xl_prize_record';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['deviceid', 'cookie', 'pid', 'price', 'ctime'], 'required'],
            [['pid', 'price', 'ctime'], 'integer'],
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
            'pid' => 'Pid',
            'price' => 'Price',
            'ctime' => 'Ctime',
        ];
    }
}
