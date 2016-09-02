<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "adx_less".
 *
 * Auto generated 02-09-2016 15:47
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'LESS compiler',
  'description' => 'Contains the LESS compiler http://lessphp.gpeasy.com/ which is compatible with Bootstrap 3.3.x. Supports a new function for USER-cObject, hooks for diffrent RTEs which compiles LESS files for "includeCSS", "content_css" or "contentCSS" and a ViewHelper for Fluid.',
  'author' => 'Arno Dudek',
  'author_email' => 'webmaster@adgrafik.at',
  'author_company' => 'ad:grafik',
  'version' => '1.1.4',
  'category' => 'fe',
  'state' => 'stable',
  'clearcacheonload' => true,
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '6.2.0-7.99.99',
    ),
    'suggests' => 
    array (
    ),
    'conflicts' => 
    array (
    ),
  ),
  'uploadfolder' => false,
  'createDirs' => NULL,
);

