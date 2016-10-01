<?php

// get Domain Name
$domain = $_SERVER['SERVER_NAME'];
if (!$domain) {
	$domain = $_SERVER['HOSTNAME'];
}

// settings for live server
if ($domain == '8-laboratory.de') {
    $GLOBALS['TYPO3_CONF_VARS']['DB']['host'] = '127.0.0.1';
    $GLOBALS['TYPO3_CONF_VARS']['DB']['database'] = 'd02332d9';
    $GLOBALS['TYPO3_CONF_VARS']['DB']['username'] = 'd02332d9  ';
    $GLOBALS['TYPO3_CONF_VARS']['DB']['password'] = 'DataInf2016';
	$GLOBALS['TYPO3_CONF_VARS']['DB']['port'] = 3306;

    $GLOBALS['TYPO3_CONF_VARS']['GFX']['im_path'] = '/usr/bin/';
    $GLOBALS['TYPO3_CONF_VARS']['GFX']['im_path_lzw'] = '/usr/bin/';

    $GLOBALS['TYPO3_CONF_VARS']['SYS']['curlProxyServer'] = '';
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['binSetup'] = '';
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['displayErrors'] = 0;
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['debugExceptionHandler'] = '';
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['productionExceptionHandler'] = '';
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['systemLog'] = '';
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['enable_DLOG'] = 0;
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['sqlDebug'] = 0;
}


$GLOBALS['TYPO3_CONF_VARS']['BE']['adminOnly'] = 0;

?>