<?php

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Data Informatik bootstrap package extender',
  'description' => 'Extends bootstrap package extender for version 7.0.2',
  'category' => 'distribution',
  'version' => '1.0.0',
  'state' => 'stable',
  'clearcacheonload' => true,
  'author' => 'René Sonntag',
  'author_email' => 'info@sonntag.consulting',
  'constraints' =>
  array (
    'depends' =>
    array (
      'typo3' => '7.6.0-8.9.99',
      'bootstrap_package' => '7.0.0-7.99.99',
    ),
    'conflicts' =>
    array (
    ),
    'suggests' =>
    array (
    ),
  ),
  'dependencies' => 'bootstrap_package',
  'uploadfolder' => true,
  'createDirs' => '',
  'author_company' => '',
);

