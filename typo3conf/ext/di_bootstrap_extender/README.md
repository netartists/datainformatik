Extends bootstrap package

Credits
-------
- René Sonntag
- info@sonntag.consulting

Installation:
-------------
ln -snf typo3_src-7.6.11/typo3 typo3
ln -snf typo3_src-7.6.11/index.php index.php
ln -snf typo3_src-7.6.11/vendor vendor
git clone https://github.com/netartists/datainformatik.git .

Implementierung:
----------------
- TYPO3 Extension di_bootstrap_extender erstellt
    - überschreibt bootstrap templates, layouts, partials
    - überschreibt Constants in /Configuration/TypoScript/constants.txt
    - eigene CSS-Dateien in /Configuration/TypoScript/setup.txt hinzugefügt
    - eigene LESS-Dateien in /Configuration/TypoScript/setup.txt hinzugefügt
    - LESS-Dateien werden in /Resources/Public/Less/Theme/theme.less eingebunden
	- in TYPO3 Backend als static template hinzugefügt

- Extension: adx-less als Less-Compiler hinzugefügt
- LESS, fixed position für header
- JS für Verkleinerung des Headers bei ScrollDown implementiert
- CSS für Verkleinerung des Headers bei ScrollDown implementiert
- JS für Menü: - Layernavigation bei MouserOver implementiert
- indexed search aktiviert und konfiguriert
- Frontend Login aktiviert und konfiguriert
- Frontend Login LESS File angelegt und eingebunden
- Frontend Login gestyled
- Responsive Images konfiguriert (data Attribute)
- layerslider installiert und konfiguriert
- searchbox implementiert
- Mehrsprachigkeit implementiert