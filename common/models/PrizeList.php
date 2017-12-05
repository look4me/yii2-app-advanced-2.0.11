<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "xl_prize_list".
 *
 * @property integer $id
 * @property string $img
 * @property string $name
 * @property string $url
 * @property string $deviceid
 * @property integer $dtime
 * @property integer $ctime
 */
class PrizeList extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'xl_prize_list';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['dtime', 'ctime'], 'integer'],
            [['img', 'name', 'url', 'deviceid'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'img' => 'Img',
            'name' => 'Name',
            'url' => 'Url',
            'deviceid' => 'Deviceid',
            'dtime' => 'Dtime',
            'ctime' => 'Ctime',
        ];
    }
}
