.. _start:


=============
Documentation
=============


Extension Manual
=================

Installation
============
- Read this first!
- Install the extension (layerslider.zip) with the extension manager or extract the zip and upload the content in typo3conf/ext/layerslider
- Include the static typoscript template "layerslider" in your root template!
- Check the constant editor "PLUGIN.TX_LAYERSLIDER (6)" for some setting about the include from jquery and other needed libraries. Use always the latest jquery library!
- CLEAR THE CACHE!!!!


Create a new slider
===================
- Under the "layerslider" Webmodule you can start create new sliders
- For each slider you can create slides. A slide is at least one image an can have layers. Each layer can be a text, header, paragraph, image or pure html code.
- Check out the Slider options, there are some preinstalled skins!
- Responsive: the slider works responsive out of the box. You can set the width/height of the slider in the slider options.
    Recommend is that you use the width/height from your slider images! By example: Images are 1280x720, set the width/height at
    this values! If you have a div in frontend with 960px, the slider goes down to this 960px by self, and all sublayers would find their new position automatic!
- Place the plugin "Layerslider" on a page. If you dont have changed the "storagePid" your sliders are located on the first page (id 0) in your TYPO3 installation. Select from this page a slider and save the content element.
- Enjoy it :-)

Notes about multipage websites
==============================
- If you have a TYPO3 installation with multiple websites, you can set different pages to save the slider.
    Just include on every website starting page the static extension template as described above. Insert in your template constants on each starting page this line:
    plugin.tx_layerslider.persistence.storagePid = X
    X is the page where the sliders would be saved. The layerslider Backend Module ist listen to this value too. Now you have only the sliders in the backend list from the page X. You can set a new value on each page in the tree.

Using own CSS files to setup the style of Layer Content
=======================================================
You can include a own css file to style your layer content. You can style h1,h2,h3,h4,h5,h6,p and span with a default style. To address the css correct to the elements by default, and separate the css for each slider, use this css code:
.layerslider-1 h1 {}

Only h1 elements on the slider with the uid 1 is now styled. h1 in each other slider ore not affected. You can style all h1 in all sliders, on all slides too, use this code by example:
.ls-slide h1 {}

You can address elements in a sliders by a single slide too. Address the correct slide with a mix of the slider uid and the slide uid:
.ls-slider-1-slide-1 h1 {}

Each number in each class came from the uid of an element. To get the sliders uid jus mouseover in the Backend on the list of all sliders the slider name. And to get the uid of an slide, make an mouseover in the slide list of an slider.

You can set your own CSS file by set the constants in the constant editor. Here comes a list of the default constant settings in the extension template:

# Set 0 to 1 to include a specific css file in the backend module
plugin.tx_layerslider.settings.useAdditionalBackendCSS.useInBE = 0

# Set 0 to 1 to include a specific css file in the frontend
plugin.tx_layerslider.settings.useAdditionalBackendCSS.useInFE = 0

# Set the full path to the css file from your document root with a starting slash
plugin.tx_layerslider.settings.useAdditionalBackendCSS.path = /typo3conf/ext/layerslider/Resources/Public/css/additionalStyles.css

FAQ
===
- On my slides, the layer are visible for the first time and disappears before the layer animation starts
- - This can be a result from some CSS frameworks or normalizer css. Just set in you css style .ls-l {visibility: hidden}. This solves the problem in most cases



Known problems:
===============
- If you save a slider with many slides or layers, not all slides are updated correctly. Check your php configuration "max_input_vars". Increase this value in your php.ini or by htaccess, if it's possible for your server:
- - php_value max_input_vars 10000
- If you use the bootstrap package (TYPO3 Distribution) check that you include the static layerslider extension TypoScript template AFTER the bootstrap extension template in your root template. The Bootstrap Package overwriter the page.includeJSFooterlibs. Because of that the layerslider JS Files are not included!
- Since version 5.4.3 you need php5.5 or php5.6

Release Notes
=============

Release 5.6.6
-------------
- [TASK]: Set extension/composer version to 5.6.6
- [FEATURE]: Added max_input_vars check
- [BUGFIX]: Delete slide fixed

Release 5.6.5
-------------
- Feature: Included composer.json
- Feature: Set extension compatibility to TYPO3 8.1.99 The Layerslider Extension Supports now TYPO3 6.2 LTS, 7 LTS and 8.1.x
- Feature: Provide a new Migration Wizard for integrate the kQuery Layerslider Plugin
- Task: Change TCA table to new style
- Task: Test jQuery Layerslider plugin 5.6.6 => o.k.
- Task: Included Layerslider news stream
- Task: php code refactoring
- Task: provide extension icon over IconFactory
- Bugfix: Corected Extension icon in 6.2 LTS
- Bugfix: Corected missing layers in slide copy function
- Bugfix: Corrceted some JS Inline ind FLuidtemplates
- Bugfix: Corrected JS cookies for Panel and Tabs (save state)
- Bugfix: Corrected scroll behavior in TBE File Browser

Release 5.6.4
-------------
- Feature: Easy Wizard to create new sliders with base settings
- Feature: Include german language in backend
- Bugfix: Layer sorting now saved correctly
- Bugfix: Typolink rendering corrected for slide links
- Bugfix: Wrong rendered Layers on positioning stage fixed
- Task: removed old non 2D/3D slide transitions. Not used anymore in LS5


Release 5.6.3
-------------
- Bugfix: Transition Button / Opening of the transition gallery


Release 5.6.2
-------------
- Feature: Timeline on positioning area added
- Feature: Complete new Plugin to insert Sliders (resolves problem with editors and not selectable slider with storagePid = 0)
- Feature: Configuration for Caching Frame Work. You can deactivate CF if you want use nc_staticfilecache!
- Bugfix: Corrected TypoLink Rendering for Layers
- Bugfix: Fixed double ID output on layers
- On Request: Make TypoLink Viewhelper php5.4 compatible

Release 5.6.1
-------------
- Bugfix: Text align of layers now correct
- Bugfix: Wrong style attribute fixed in preview panel
- Bugfix: Remove 500er excpetion when in plugin is no slider given
- Bugfix: Change rel="" to data-ls="" on slides

Release 5.6.0
-------------
- Bugfix: Correct helper lines in Layer positioning stage when they have a padding
- Feature: Add Suggest Wizard to Plugin


Release 5.4.3
-------------
- Feature: Complete integration with TYPO3 File Abstraction Layer and FileReferences
- Feature: Title and alternative tags for Slide images
- Feature: Title and alternative tags for Layer images
- Feature: Upgrade wizard for sliders to FAL: With this version, you can not edit a existing slider before you run the update wizard on each slider!
- Feature: Open or close Layer's edit area by click on panel header (and the edit icon in panel header too!). Just awesome :D
- Feature: Open or close Slide's edit area by click on panel header (and the edit icon in panel header too!). Just awesome :D
- Feature: Implement TYPO3 Caching framework
- Feature: Set start/stop Date/Time for each Slide
- Feature: Set start/stop Date/Time for each Layer
- Feature: Complete rewritten positioning stage:
- - Better control of layers with visual feedback of outline borders and active borders on drag
- - Resize images directly in the positioning stage, with visual borders too
- - Mutch better positioning results with full-width sliders and the option responsiveUnder: the container is now fixed and has on left/right a not editable area on the image
- Note: With the implementation of TYPO3 Caching Framework, each slider view would be cached in a special table, instead in the page cache with the whole page code. This gives you some nice features:
- - You don't need to clear the fe cache if you update your slider
- - You don't need to clear the fe cache if you use start/stop time in slides and layers, because the cache lifetime is calculated from the times that are set!
- Removed: Drag & Drop Upload. The FAL integration with the element browser is the better solution, trust me ;-)
- Warning: Install this Update ONLY over the Extension Manager! There are some new tables and field definitions in the database. If you only upload this version with FTP, your frontend gets broken!
- Install information: Install it only over the extension manager if you make a update! After that, clear all caches in install tool and double check the "Compare Database" in install tool!


Release 5.4.2
-------------
- Feature: Integrated TYPO3 Link Wizard for Slide and Layer link fields. At now, typolink are fully supported!
- - Please note: With this change, the old field "Link Target" in the Basic Section for a slide is removed! If you have links with new Window as target, you must set these option within the Link Wizard!
- Feature: The output code is sanitized now

- Bugfix: Textcolor and Background Color in Layersettings corrected
- Bugfix: Button "Update Positioning Stage" without function. Corrected in this version
- Bugfix: Layerlinks are on the wrong place in the DOM in Backend
- Bugfix: Set layersContainer option in relation to responsiveUnder option for full width sliders


Release 5.4.1
-------------
- Feature: Included TYPO3 Filewizard as alternative to the drag&drop Uploads for Slide Image
- Feature: Included TYPO3 Filewizard as alternative to the drag&drop Uploads for Item Image
- Bugfix: add jpeg as image format for drag&drop upload
- Bugfix: edit new created item without save the whole slider
- Set TYPO3 Version to 7.5.99



Release 5.4.0
-------------
- Bugfix on form buttons
- Bugfix an "new slider" view
- Bugfix user access in plugin
- Bugfix Font color & Background Color missing in Layer styles
- Test with the new 5.6 Release of the jQuery Layerslider Plugin
- Feature: Fullwidth Slider with responsive no and responsiveUnder value
- Recode plugin Flexform with problems on editors

Release 5.3.9
-------------
- Complete rewritten Backend with bootstrap
- Feature: Confirm for delete sliders
- Feature: Confirm for delete of slides
- Feature: Confirm for delete of layers
- Feature: Remember open Slides after save
- Feature: Remember open Tabs in Slides after save
- Feature: Remember open Layers in a Slide after save
- Feature: Remember open Tabs in a Layer after save
- Feature: Fancy TYPO3 V7 Icon in left Module bar
- Bug: Misspelling of some inline js code in relation of element id's
- Bug: include missing space in Layout for JS File inclusion (on type tag)
- Bug: Own CSS class of a layer is rendered in ID tag instead of css tag


Release 5.3.8
-------------
- Set TYPO3 compatibility to 7.4.99
- Set Extbase compatibility to 7.4.99
- Set Fluid compatibility to 7.4.99


Release 5.3.7
-------------
- Set TYPO3 compatibility to 7.3.99
- Set Extbase compatibility to 7.3.99
- Set Fluid compatibility to 7.3.99


Release 5.3.6
-------------
- Update some Templatefiles, remove old deprecated options

Release 5.3.5
-------------
- Change layer content to text instead of varchar
- Update layerslider Core to version 5.5

Release 5.3.4
-------------
- Attention: module.tx_layerslider.view is changed to templateRootPaths.10, partialRootPaths.10 and layoutRootPaths.10
- Sortable Layer items in the slide
- TYPO3 7.1 code adjustments
- Code refactoring
- Set highest TYPO3 version to 7.1.99
- ArrayConverter Bugfix
- Path adjustments in templates for instances of TYPO3 in subfolder instead of TYPO3 in servers document root


Release 5.3.3
-------------
- Copy Slider, Slides and Layers and paste them everywhere you want.
- You can now specify the preview panel width in the backend module
- Bugfix on layerattributes (rotate)
- Clear your cache over the install tool (Important actions -> clear all cache) on update to 5.3.3.


Release 5.3.2
-------------
- Include BE/FE additional CSS file
- List Plugin in "Plugins"-Tab for new content elements
- Adding field for parallaxlevel in layer attributes (section Misc in Animation & Timings). Use positve or negative values. The higher the value is, the higher is the effect.

