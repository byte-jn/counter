# Counter

Ein eleganter, extrem minimalistischer Zähler (Single-Tap Counter) im Dark Mode. Entwickelt als leichtgewichtige Web-App mit Mehrfach-Zähler-Unterstützung und lokaler Speicherung via Cookies.

---

## Features

- **Minimalistisches Dark-Design**: Symmetrische Benutzeroberfläche mit dunklem Theme, verschidenen Farben und flüssigen Mikro-Animationen.
- **Single-Tap**: 
  - Klick auf die gesamte Fläche zählt den Zähler hoch (+1).
- **Cookie-Speicherung**: 
  - Alle Zählerstände und Namen werden in `document.cookie` gespeichert und bleiben nach dem Schließen des Browsers erhalten.
- **Multi-Counter-Verwaltung**:
  - Erstelle beliebig viele verschiedene Zähler mit eigenen Namen.
  - Nahtloses Wechseln zwischen den Zählern über ein Auswahlmenü.
- **Settings and Edit**:
  - Zähler umbenennen.
  - Zählerstand direkt bearbeiten oder auf 0 zurücksetzen.
  - Zähler erstellen oder löschen.

---

## Technologie

- **HTML5 & Vanilla JavaScript**: Keine externen Framework-Abhängigkeiten.
- **Tailwind CSS**: Modernes Utility-First Styling (via CDN).
- **Lucide Icons**: Schlanke Vector-Icons für Einstellungen & Plus-Indikator.
- **Icons oder GIFs**: Als Symbole für ein Counter können vorgefertigte Pixel Arts oder GIF-Urls genommen werden.
---

## Installation & Benutzung

Da das Projekt aus einer einzigen, autarken `index.html`-Datei besteht, ist keine komplexe Installation oder ein Build-Schritt erforderlich:

1. **Repository klonen:**
   ```bash
   git clone [https://github.com/dein-username/dein-repo-name.git](https://github.com/dein-username/dein-repo-name.git)
   cd dein-repo-name
