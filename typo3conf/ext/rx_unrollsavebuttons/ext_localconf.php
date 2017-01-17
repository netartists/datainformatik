<?php
defined('TYPO3_MODE') || die();

$GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects'][\TYPO3\CMS\Backend\Template\Components\Buttons\SplitButton::class] = [
    'className' => \Reelworx\RxUnrollsavebuttons\Xclass\UnrolledSplitButton::class
];
