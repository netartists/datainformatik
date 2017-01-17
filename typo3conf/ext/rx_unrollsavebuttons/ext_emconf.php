<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "rx_unrollsavebuttons".
 *
 * Auto generated 17-01-2017 20:30
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Unroll TYPO3 save buttons',
  'description' => 'Shows the save buttons in TYPO3 BE next to each other instead of listing them in a dropdown menu. Additionally the button labels can be hidden.',
  'category' => 'plugin',
  'version' => '1.1.0',
  'state' => 'stable',
  'uploadfolder' => false,
  'author' => 'Markus Klein',
  'author_email' => 'support@reelworx.at',
  'author_company' => 'Reelworx GmbH',
  'constraints' => 
  array (
    'depends' => 
    array (
      'php' => '5.5.0-7.1.99',
      'typo3' => '7.6.2-8.2.99',
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
  'createDirs' => NULL,
  'clearcacheonload' => false,
);

