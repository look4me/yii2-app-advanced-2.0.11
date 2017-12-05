<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "xl_ad".
 *
 * @property integer $id
 * @property string $title
 * @property string $img
 * @property string $url
 * @property string $dtime
 * @property string $content
 * @property integer $pid
 * @property integer $channel
 * @property integer $ctime
 */
class XAd extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'xl_ad';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['title', 'img', 'content', 'pid', 'ctime'], 'required'],
            [['dtime'], 'safe'],
            [['content'], 'string'],
            [['pid', 'channel', 'ctime'], 'integer'],
            [['title'], 'string', 'max' => 64],
            [['img', 'url'], 'string', 'max' => 255],
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
            'img' => 'Img',
            'url' => 'Url',
            'dtime' => 'Dtime',
            'content' => 'Content',
            'pid' => 'Pid',
            'channel' => 'Channel',
            'ctime' => 'Ctime',
        ];
    }
}
