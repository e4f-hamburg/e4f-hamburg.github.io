# Struktur der E4F HH Website

## Basis

Die Seite wird gebaut mit [Jekyll](https://jekyllrb.com/). Wichtige Aufrufe:

* Änderungen lokal testen: `jekyll serve` (lokalen Cache leeren: `jekyll clean`)
* Änderungen produktiv setzen: `jekyll build`

Die Seite basiert auf dem [Agency-Theme](https://github.com/raviriley/agency-jekyll-theme) und verwendet [Bootstrap Styles und Bedienelemente](https://getbootstrap.com/) sowie freie [Font Awesome](https://fontawesome.com/) Icons.

Für Texte und Stile werden außer HTML und CSS auch [Markdown](#markdown) und Sass verwendet. 

## Struktur

**Der Ordner `_site` wird generiert, hier nichts ändern!** 

### Für Developer\*innen & Designer\*innen
* Packages: Gemfile, jekyll-agency.gemspec
* CSS/Sass-Stile: 
  * `_sass/base`: allgemeingültige Einstellungen für alle Seiten
  * `_sass/components`: Stile für bestimmte Elemente
  * `_sass/layout`: Stile für die Seitenabschnitte und deren Inhalte
* Seiten-Struktur:
  * `_includes/*.html`: HTML für die jeweiligen Seiten-Bestandteile (werden in `_layouts/*` verwendet)
  * `_layouts/default`: Rahmen für alle Standard-Seiten
  * `_layouts/home`: Startseite
  * `_layouts/page`: einfache Seiten ohne Rahmen (z. B. Modals)
* Konfiguration: 
  * `_config.yml`: Einstellungen für die Site
  * `_data/*.yml`: Einstellungen für Navigation und Abschnitte (z. B. Farbeinstellungen in `style.yml`)

### Für Texter\*innen

**Wichtig:** Bei `.yml`-Dateien und im oberen Bereich von .md-Dateien sind die Elemente, die den `- ` beginnen, Positions-sensitiv, d. h. bitte darauf achten, keine Einrückungen zu verändern.

* Bezeichnungen der Menüpunkte: `_data/navigation.yml`, beim Ändern darauf achten, dass der Parameter `url` auf den Namen der `section` verweist.
* Überschriften und Untertitel: `_data/sitetext.yml`
* Texte für den Abschnitt "Über uns": `_data/services/` enthält je Block eine Datei mit den Beschreibungstexten in [Markdown](#Markdown). Der zu verwendende Dateiname steht in `_data/sitetext.yml`.
* Texte für den Abschnitt "Events": `_portfolio/` enthält eine Datei pro Eintrag. Am besten für neue Ereignisse eine vorhandene Datei kopieren. Jeder Eintrag benötigt oben in der Datei einen Bereich zwischen zwei Zeilen mit `---`. In diesem Bereich werden Variablen gesetzt, die für die Seite weiter verwendet werden. Die Formatierung muss so bleiben, die Texte können geändert werden.
* Bilder: `assets/img/` enthält die Bilddatei (möglichst .webp), Verwendung der Bilder durch Eintragen des Namens in den entsprechenden Parametern in den .md- oder .yml-Dateien. Ausnahme: favicon.ico (oberste Ebene)
* Datenschutz-Text: `datenschutz.md` (oberste Ebene)

## Markdown

Markdown ist eine einfache Form, um in Texte mit Formatierungs-Informationen zu versehen. Z. B. werden Überschriften oberster Ebene mit `#`, Überschriften der 2. Ebene mit `##` usw. markiert. Eine Übersicht der wichtigsten Elemente (Überschriften, Listen, Tabellen, Hervorhebungen etc.) findet sich [hier](https://kramdown.gettalong.org/quickref.html).

Markdown kann normalerweise nur in `.md`-Dateien, nicht in `yml`-Dateien oder -Headern verwendet werden. 

## Stile

* In `_data/style.yml` können die Schmuck-Farben und Hintergrundbilder geändert werden.
* Alle anderen Stile entstammen entweder bootstrap oder sind unter `_sass` als [Sass-Stylesheets](https://sass-lang.com/) getrennt für einzelne Bausteine und Layout-Bestandteile hinterlegt.
