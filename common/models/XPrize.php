<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "xl_prize".
 *
 * @property integer $id
 * @property string $title
 * @property integer $price
 * @property integer $amount
 * @property integer $type
 * @property integer $ctime
 */
class XPrize extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'xl_prize';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'price', 'amount', 'type', 'ctime'], 'required'],
            [['price', 'amount', 'type', 'ctime'], 'integer'],
            [['title'], 'string', 'max' => 64],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'price' => 'Price',
            'amount' => 'Amount',
            'type' => 'Type',
            'ctime' => 'Ctime',
        ];
    }
}
