<?php
/**
 * @link      http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license   http://www.yiiframework.com/license/
 */

namespace iAvatar777\widgets\KalendarSlavi1;

use yii\web\AssetBundle;
use yii\web\View;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since  2.0
 */
class Asset extends AssetBundle
{
    public $sourcePath  = '@vendor/i-avatar777/kalendar_slavi/src';
    public $css     = [];
    public $js      = [
        'kalendar.js',
    ];
    public $depends = [
        'yii\web\JqueryAsset'
    ];
}
