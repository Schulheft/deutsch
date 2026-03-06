// ================================================================
// REGELN-BBR.JS – Grammatikregeln für die BBR
// basierend auf "BBR Grammatik Regeln.pdf"
// Enthält: R_BBR (Kurzregeln) + GRAM_SECTIONS_BBR (Nachschlageteil)
// ================================================================

var R_BBR = {
  dehnung: "<div class='rbox'><span class='hl'>Dehnung – kurze und lange Vokale:</span><br>• kurzer Vokal: a, e, i, o, u (Tage, Biber, Tor, Sonne)<br>• langer Vokal mit Doppelbuchstaben: aa, ee, oo (Staat, See, Moor)<br>• langer Vokal + Dehnungs-h: ah, eh, ih, oh, uh (Zahl, Mehl, ihn, wohnen, Kuh)<br>• ie = langes i (Liebe, spielen) – Ausnahme: ihm, ihr, ihnen.</div>",
  umlaute: "<div class='rbox'><span class='hl'>Umlaute: ä/e und äu/eu</span><br>• ä/äu, wenn es ein verwandtes Wort mit a/au gibt (Hände → Hand, Bäume → Baum).<br>• e/eu, wenn kein a/au-Bezug (Menge, heute).</div>",
  s_ss_ß: "<div class='rbox'><span class='hl'>s/ss/ß</span><br>• ß nach langem Vokal oder Diphthong: Straße, heißen, Fuß.<br>• ss nach kurzem Vokal: Fluss, Kuss, müssen.<br>• s am Wortanfang oder in bestimmten Fällen: Haus, lesen.</div>",
  z_tz: "<div class='rbox'><span class='hl'>z/tz/zz</span><br>• z nach langem Vokal, Diphthong oder Konsonant: Kreuzung, schmelzen, Wurzel.<br>• tz nach kurzem Vokal: Katze, plötzlich, Platz.<br>• zz in Fremdwörtern: Pizza, Jazz, Puzzle.</div>",
  x_chs_gs: "<div class='rbox'><span class='hl'>x/chs/gs</span><br>• x = ks-Laut: Axt, Text, Taxi.<br>• chs auch ks-Laut (meist deutsche Wörter): Fuchs, wachsen, wechseln.<br>• gs in bestimmten Wörtern: unterwegs, anfangs.</div>",
  g_k: "<div class='rbox'><span class='hl'>g oder k am Ende?</span><br>• g wird weich gesprochen (Ableitung: singen → sang).<br>• k wird hart gesprochen (Ableitung: sinken → sank).</div>",
  d_t: "<div class='rbox'><span class='hl'>d oder t am Ende?</span><br>Ableitung hilft: Ungeduld → ungeduldig; seit (Zeit) → seither; seid (ihr seid) → bleibt.</div>",
  end_ent: "<div class='rbox'><span class='hl'>end- oder ent-?</span><br>• end- = Ende, Schluss: endlich, Endspurt.<br>• ent- = weg, gegen: enttäuscht, entfernen, entlassen.</div>",
  gross_klein: "<div class='rbox'><span class='hl'>Großschreibung:</span> Nomen (Haus, Freude), substantivierte Adjektive/Verben (das Gute, beim Lesen), Höflichkeitspronomen (Sie, Ihr), Eigennamen.<br><span class='hl'>Kleinschreibung:</span> Adjektive, Verben, Pronomen, Artikel, Adverbien, Wochentage auf -s (montags).</div>",
  getrennt_zusammen: "<div class='rbox'><span class='hl'>Getrennt- und Zusammenschreibung</span><br>• Substantiv + Verb (Tätigkeit) → getrennt: Klavier spielen.<br>• Adjektiv + Verb (wörtlich) → getrennt: leer machen.<br>• Zusammengesetzte Verben (neue Bedeutung) → zusammen: freisprechen, schwerfallen.<br>• wieder = erneut (wiedersehen); wider = gegen (widersprechen).</div>",
  artikel: "<div class='rbox'><span class='hl'>Bestimmter Artikel</span> (der, die, das)<br>Nom: der, die, das, die<br>Akk: den, die, das, die<br>Dat: dem, der, dem, den<br><br><span class='hl'>Unbestimmter Artikel</span> (ein, eine)<br>Maskulin: ein (Nom), einen (Akk), einem (Dat)<br>Feminin: eine (Nom/Akk), einer (Dat)<br>Neutrum: ein (Nom/Akk), einem (Dat)</div>",
  adjektiv: "<div class='rbox'><span class='hl'>Adjektivdeklination</span><br>• nach bestimmtem Artikel: der nette Mann, die nette Frau, das nette Kind, die netten Leute (Nom. -e, sonst -en).<br>• nach unbestimmtem Artikel: ein netter Mann, eine nette Frau, ein nettes Kind.</div>",
  pronomen: "<div class='rbox'><span class='hl'>Personalpronomen</span><br>ich – mich – mir<br>du – dich – dir<br>er – ihn – ihm<br>sie – sie – ihr<br>es – es – ihm<br>wir – uns – uns<br>ihr – euch – euch<br>sie – sie – ihnen<br>Sie – Sie – Ihnen (Höflich)</div>",
  zeiten: "<div class='rbox'><span class='hl'>Zeitformen</span><br>• Präsens: ich lerne<br>• Präteritum: ich lernte (schwach) / ich sang (stark)<br>• Perfekt: ich habe gelernt / ich bin gegangen (sein bei Bewegung)<br>• Futur I: ich werde lernen<br>• Konjunktiv I (indirekte Rede): er sagt, er sei/komme …</div>",
  satzbau: "<div class='rbox'><span class='hl'>Satzbau</span><br>• Hauptsatz: Verb an Position 2.<br>• Nebensatz: Verb am Ende (weil, dass, wenn …).<br>• HS + HS: Ich lerne, denn ich habe Prüfung.<br>• NS vor HS: Weil ich lerne, bleibe ich da.<br>• HS + NS: Ich bleibe da, weil ich lerne.</div>",
  komma: "<div class='rbox'><span class='hl'>Kommasetzung</span><br>• zwischen Haupt- und Nebensatz: Ich hoffe, dass du kommst.<br>• bei Aufzählungen: Äpfel, Birnen und Bananen.<br>• vor entgegenstellenden Konjunktionen: Er ist klein, aber stark.<br>• bei Infinitivgruppen mit um … zu, ohne … zu, anstatt … zu.<br>• bei Appositionen: Herr Meier, unser Nachbar, hilft.</div>",
  adverb: "<div class='rbox'><span class='hl'>Adverbien</span><br>• Zeit: heute, morgen, oft, niemals<br>• Ort: hier, dort, draußen, oben<br>• Art und Weise: gern, schnell, vielleicht</div>",
  wortbildung: "<div class='rbox'><span class='hl'>Wortbildung</span><br>• Präfixe: ver- (verstehen), vor- (vorbereiten), ent- (entdecken), wider- (widersprechen), wieder- (wiederholen)<br>• Fugenelemente: Geburtstagsfeier (-s-), Maschinenbau (-n-), Halskette (ohne)</div>",
  antonyme: "<div class='rbox'><span class='hl'>Antonyme (Gegenteile)</span><br>warm – kalt, sauer – süß, freundlich – feindlich, Mehrheit – Minderheit, reich – arm, fröhlich – traurig, leise – laut, viele – wenige</div>",
  homonyme: "<div class='rbox'><span class='hl'>Homonyme (gleiche Schreibweise, verschiedene Bedeutung)</span><br>Mutter (Frau / Schraube), Laster (Fahrzeug / Angewohnheit), Leiter (Chef / Gerät), Schloss (Gebäude / Vorhängeschloss), Pflaster (Wundpflaster / Straßenbelag), Hahn (Tier / Wasserhahn)</div>",
  stilebenen: "<div class='rbox'><span class='hl'>Stilebenen</span><br>• Umgangssprache: futtern, latschen, Bude, verpulvern, klauen, Gaul<br>• Standard: essen, gehen, Zimmer, verschwenden, stehlen, Pferd<br>• Gehoben: speisen, schreiten, Gemach, vergeuden, entwenden, Ross</div>",
  fremdwoerter: "<div class='rbox'><span class='hl'>Fremdwörter – Bedeutung</span><br>panieren (mit Paniermehl umhüllen), trainieren (üben), Spezialität (Delikatesse), Qualität (Güte), reservieren (vorbestellen), reklamieren (sich beschweren), tolerieren (akzeptieren)</div>"
};

// ================================ GRAMMATIKREGELN FÜR BBR ================================

var GRAM_SECTIONS_BBR = [
  // ─────────────────────────────────────────────────────────────
  // Rechtschreibung
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_rechtschreibung",
    label: "📝 Rechtschreibung",
    color: "#2563eb",
    cards: [
      {
        title: "Dehnung – kurze und lange Vokale",
        badge: "Rechtschreibung",
        badgeColor: "#2563eb",
        content: `
          <p class="gram-text">Die Länge eines Vokals wird unterschiedlich geschrieben.</p>
          <table class="gram-table">
            <tr><th>Schreibung</th><th>Wann?</th><th>Beispiele</th></tr>
            <tr><td>a, e, i, o, u</td><td>kurzer Vokal</td><td>Tage, Biber, Tor, Sonne</td></tr>
            <tr><td>aa, ee, oo</td><td>langer Vokal</td><td>Staat, See, Moor, Boot</td></tr>
            <tr><td>ah, eh, ih, oh, uh</td><td>langer Vokal + Dehnungs-h</td><td>Zahl, Mehl, ihn, wohnen, Kuh</td></tr>
            <tr><td>ie</td><td>langes i (nie „ih“ außer in <em>ihm, ihr</em>)</td><td>Liebe, spielen, Bier</td></tr>
          </table>
          <div class="gram-highlight"><span class="hl">Merke:</span> ie ist der häufigste Weg für langes i. Nach langem Vokal oft h oder Doppelvokal.</div>
        `
      },
      {
        title: "Umlaute – ä/e und äu/eu",
        badge: "Rechtschreibung",
        badgeColor: "#2563eb",
        content: `
          <p class="gram-text">Die Wahl zwischen ä/e und äu/eu hängt von der Wortfamilie ab.</p>
          <table class="gram-table">
            <tr><th>Schreibung</th><th>Wann?</th><th>Beispiele</th></tr>
            <tr><td>ä, äu</td><td>wenn es ein verwandtes Wort mit a/au gibt</td><td>Hände → Hand, Bäume → Baum, Geräusch → rauschen</td></tr>
            <tr><td>e, eu</td><td>wenn kein a/au-Bezug</td><td>Menge, heute, freuen</td></tr>
          </table>
          <div class="gram-tip">Bei Zweifeln nach der „Familie“ fragen: Gibt es ein Wort mit a/au? → ä/äu.</div>
        `
      },
      {
        title: "Konsonanten – s/ss/ß, z/tz/zz, x/chs/gs",
        badge: "Rechtschreibung",
        badgeColor: "#2563eb",
        content: `
          <p class="gram-text">Die Schreibung der Konsonanten hängt oft von der Vokallänge ab.</p>
          <table class="gram-table">
            <tr><th>Buchstaben</th><th>Regel</th><th>Beispiele</th></tr>
            <tr><td>ß</td><td>nach langem Vokal oder Diphthong</td><td>Straße, heißen, Fuß</td></tr>
            <tr><td>ss</td><td>nach kurzem Vokal</td><td>Fluss, Kuss, müssen</td></tr>
            <tr><td>s</td><td>am Wortanfang oder in bestimmten Fällen</td><td>Haus, lesen</td></tr>
            <tr><td>z</td><td>nach langem Vokal, Diphthong oder Konsonant</td><td>Kreuzung, schmelzen, Wurzel</td></tr>
            <tr><td>tz</td><td>nach kurzem Vokal</td><td>Katze, plötzlich, Platz</td></tr>
            <tr><td>zz</td><td>in Fremdwörtern</td><td>Pizza, Jazz, Puzzle</td></tr>
            <tr><td>x</td><td>= ks-Laut</td><td>Axt, Text, Taxi</td></tr>
            <tr><td>chs</td><td>= ks-Laut (meist deutsche Wörter)</td><td>Fuchs, wachsen, wechseln</td></tr>
            <tr><td>gs</td><td>in bestimmten Wörtern</td><td>unterwegs, anfangs</td></tr>
          </table>
        `
      },
      {
        title: "Auslautverhärtung – g/k und d/t",
        badge: "Rechtschreibung",
        badgeColor: "#2563eb",
        content: `
          <p class="gram-text">Am Wortende werden g/k und d/t oft gleich ausgesprochen. Die Ableitung hilft.</p>
          <div class="gram-highlight">
            <span class="hl">g oder k?</span><br>
            • g wird weich gesprochen (Ableitung: singen → sang, Bug → biegen)<br>
            • k wird hart gesprochen (Ableitung: sinken → sank, Schrank → schränken)
          </div>
          <div class="gram-highlight">
            <span class="hl">d oder t?</span><br>
            • Ungeduld → ungeduldig<br>
            • seit (Zeit) → seither<br>
            • seid (ihr seid) → bleibt seid (keine Ableitung)
          </div>
        `
      },
      {
        title: "Vorsilben end- und ent-",
        badge: "Rechtschreibung",
        badgeColor: "#2563eb",
        content: `
          <table class="gram-table">
            <tr><th>Vorsilbe</th><th>Bedeutung</th><th>Beispiele</th></tr>
            <tr><td>end-</td><td>Ende, Schluss</td><td>endlich, Endspurt, endlos</td></tr>
            <tr><td>ent-</td><td>weg, gegen, entfernen</td><td>enttäuscht, entfernen, entlassen, entdecken</td></tr>
          </table>
          <div class="gram-example">ent- ≠ end-: entlaufen (weglaufen) – endlos (ohne Ende)</div>
        `
      },
      {
        title: "Groß- und Kleinschreibung",
        badge: "Rechtschreibung",
        badgeColor: "#2563eb",
        content: `
          <table class="gram-table">
            <tr><th style="width:50%">Immer groß</th><th>Beispiele</th></tr>
            <tr><td>Nomen (Dinge, Personen, Orte, Namen)</td><td>Haus, Freund, Berlin, Freude</td></tr>
            <tr><td>substantivierte Adjektive/Verben</td><td>das Gute, etwas Neues, beim Lesen</td></tr>
            <tr><td>Höflichkeitspronomen in Briefen/E-Mails</td><td>Sie, Ihnen, Ihr</td></tr>
            <tr><td>Eigennamen</td><td>Technische Universität, Roter Platz</td></tr>
            <tr><th>Immer klein</th><th></th></tr>
            <tr><td>Adjektive, Verben, Pronomen, Artikel, Adverbien</td><td>schön, laufen, ich, der, draußen</td></tr>
            <tr><td>Wochentage mit -s (Adverbien)</td><td>montags, donnerstags</td></tr>
          </table>
          <div class="gram-tip">Achtung: „der/die/das“ als Artikel sind klein, aber wenn sie als Nomen gebraucht werden: der Einzige, das Gleiche.</div>
        `
      },
      {
        title: "Getrennt- und Zusammenschreibung / wieder- und wider-",
        badge: "Rechtschreibung",
        badgeColor: "#2563eb",
        content: `
          <table class="gram-table">
            <tr><th>Fall</th><th>Regel</th><th>Beispiele</th></tr>
            <tr><td>Substantiv + Verb</td><td>als Tätigkeit getrennt</td><td>Klavier spielen, Rad fahren</td></tr>
            <tr><td>Adjektiv + Verb</td><td>wörtlich getrennt, übertragen zusammen</td><td>leer machen (wörtlich), freisprechen (übertragen)</td></tr>
            <tr><td>zusammengesetzte Verben</td><td>neue Bedeutung → zusammen</td><td>schwerfallen, stattfinden</td></tr>
          </table>
          <div class="gram-highlight">
            <span class="hl">wieder / wider</span><br>
            • wieder = noch einmal, erneut: wiedersehen, wiederholen, wiederaufbauen<br>
            • wider = gegen: widersprechen, Widerstand, widerwillig<br>
            <span class="hl">Eselsbrücke:</span> „Wieder“ hat ein „e“ wie „erneut“, „wider“ hat ein „i“ wie „gegen“.
          </div>
        `
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Grammatik
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_grammatik",
    label: "📚 Grammatik",
    color: "#16a34a",
    cards: [
      {
        title: "Bestimmter und unbestimmter Artikel",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <p class="gram-text"><span class="hl">Bestimmter Artikel</span> (der, die, das – bekannt)</p>
          <table class="gram-table">
            <tr><th>Fall</th><th>Maskulin</th><th>Feminin</th><th>Neutrum</th><th>Plural</th></tr>
            <tr><td>Nominativ</td><td>der</td><td>die</td><td>das</td><td>die</td></tr>
            <tr><td>Akkusativ</td><td>den</td><td>die</td><td>das</td><td>die</td></tr>
            <tr><td>Dativ</td><td>dem</td><td>der</td><td>dem</td><td>den</td></tr>
          </table>
          <p class="gram-text"><span class="hl">Unbestimmter Artikel</span> (ein, eine – neu/unbekannt)</p>
          <table class="gram-table">
            <tr><th>Fall</th><th>Maskulin</th><th>Feminin</th><th>Neutrum</th></tr>
            <tr><td>Nominativ</td><td>ein</td><td>eine</td><td>ein</td></tr>
            <tr><td>Akkusativ</td><td>einen</td><td>eine</td><td>ein</td></tr>
            <tr><td>Dativ</td><td>einem</td><td>einer</td><td>einem</td></tr>
          </table>
          <div class="gram-example">Ich sehe den Lehrer (Akk. mask.). Wir helfen dem Freund (Dat. mask.). Er sucht einen Job (Akk. mask. unbestimmt).</div>
        `
      },
      {
        title: "Adjektivdeklination – richtige Endung",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <p class="gram-text">Adjektive passen sich an das Nomen an. Die Endung hängt vom Artikel ab.</p>
          <p class="gram-text"><span class="hl">Nach bestimmtem Artikel (schwache Deklination)</span></p>
          <table class="gram-table">
            <tr><th>Fall</th><th>Maskulin</th><th>Feminin</th><th>Neutrum</th><th>Plural</th></tr>
            <tr><td>Nominativ</td><td>der -e</td><td>die -e</td><td>das -e</td><td>die -en</td></tr>
            <tr><td>Akkusativ</td><td>den -en</td><td>die -e</td><td>das -e</td><td>die -en</td></tr>
            <tr><td>Dativ</td><td>dem -en</td><td>der -en</td><td>dem -en</td><td>den -en</td></tr>
          </table>
          <p class="gram-text">Beispiel: der nette Mann, die nette Frau, das nette Kind, die netten Leute.</p>
          <p class="gram-text"><span class="hl">Nach unbestimmtem Artikel (gemischte Deklination)</span></p>
          <table class="gram-table">
            <tr><th>Fall</th><th>Maskulin</th><th>Feminin</th><th>Neutrum</th></tr>
            <tr><td>Nominativ</td><td>ein -er</td><td>eine -e</td><td>ein -es</td></tr>
            <tr><td>Akkusativ</td><td>einen -en</td><td>eine -e</td><td>ein -es</td></tr>
            <tr><td>Dativ</td><td>einem -en</td><td>einer -en</td><td>einem -en</td></tr>
          </table>
          <div class="gram-example">ein netter Mann, eine nette Frau, ein nettes Kind.</div>
        `
      },
      {
        title: "Personalpronomen",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <table class="gram-table">
            <tr><th>Person</th><th>Nominativ</th><th>Akkusativ</th><th>Dativ</th></tr>
            <tr><td>1. Sg.</td><td>ich</td><td>mich</td><td>mir</td></tr>
            <tr><td>2. Sg.</td><td>du</td><td>dich</td><td>dir</td></tr>
            <tr><td>3. Sg. m.</td><td>er</td><td>ihn</td><td>ihm</td></tr>
            <tr><td>3. Sg. f.</td><td>sie</td><td>sie</td><td>ihr</td></tr>
            <tr><td>3. Sg. n.</td><td>es</td><td>es</td><td>ihm</td></tr>
            <tr><td>1. Pl.</td><td>wir</td><td>uns</td><td>uns</td></tr>
            <tr><td>2. Pl.</td><td>ihr</td><td>euch</td><td>euch</td></tr>
            <tr><td>3. Pl.</td><td>sie</td><td>sie</td><td>ihnen</td></tr>
            <tr><td>Höflich</td><td>Sie</td><td>Sie</td><td>Ihnen</td></tr>
          </table>
          <div class="gram-example">Das Fenster ist kaputt. Es muss repariert werden.<br>Die Kinder sind da. Sie haben Hunger.<br>Ich gebe dir das Buch.</div>
        `
      },
      {
        title: "Verben – Zeitformen",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <table class="gram-table">
            <tr><th>Zeitform</th><th>Bildung</th><th>Beispiel</th></tr>
            <tr><td>Präsens</td><td>Gegenwart</td><td>ich lerne, du lernst, …</td></tr>
            <tr><td>Präteritum</td><td>einfache Vergangenheit (schwach: -te, stark: Vokalwechsel)</td><td>ich lernte, ich sang</td></tr>
            <tr><td>Perfekt</td><td>haben/sein + Partizip II</td><td>ich habe gelernt, ich bin gegangen</td></tr>
            <tr><td>Futur I</td><td>werden + Infinitiv</td><td>ich werde lernen</td></tr>
            <tr><td>Konjunktiv I</td><td>indirekte Rede</td><td>er sagt, er sei/komme …</td></tr>
          </table>
          <div class="gram-highlight">
            <span class="hl">Perfekt mit sein:</span> Verben der Bewegung oder Zustandsänderung (gehen, fahren, werden, bleiben).<br>
            <span class="hl">Partizip II:</span> ge- + Stamm + -t (schwach) / -en (stark): gespielt, gesungen.
          </div>
          <div class="gram-tip">Konjunktiv I: Stamm + -e, -est, -e, -en, -et, -en. Besonderheiten: sein → er sei, haben → er habe, werden → er werde.</div>
        `
      },
      {
        title: "Satzbau – Haupt- und Nebensätze",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <table class="gram-table">
            <tr><th>Satztyp</th><th>Verbposition</th><th>Beispiel</th></tr>
            <tr><td>Hauptsatz (HS)</td><td>Position 2</td><td>Ich lerne Deutsch.</td></tr>
            <tr><td>Nebensatz (NS)</td><td>am Ende</td><td>…, weil ich Deutsch lerne.</td></tr>
          </table>
          <p class="gram-text"><span class="hl">Wichtige Konjunktionen:</span></p>
          <ul style="margin-left:20px; font-size:0.85rem;">
            <li>Grund: weil, da</li>
            <li>Gegensatz: obwohl</li>
            <li>Zweck: damit</li>
            <li>Folge: sodass</li>
            <li>Gleichzeitigkeit: während</li>
            <li>Vor-/Nachzeitigkeit: bevor, nachdem</li>
            <li>Aussage: dass</li>
          </ul>
          <div class="gram-example">
            HS + HS: Ich lerne, denn ich habe morgen eine Prüfung.<br>
            NS vor HS: Weil ich lernen muss, bleibe ich zu Hause.<br>
            HS + NS: Ich bleibe zu Hause, weil ich lernen muss.
          </div>
        `
      },
      {
        title: "Kommasetzung",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <table class="gram-table">
            <tr><th>Regel</th><th>Beispiel</th></tr>
            <tr><td>Zwischen Haupt- und Nebensatz</td><td>Ich hoffe, dass du kommst.</td></tr>
            <tr><td>Aufzählungen (vor „und“ meist kein Komma)</td><td>Äpfel, Birnen und Bananen.</td></tr>
            <tr><td>Vor entgegenstellenden Konjunktionen (aber, sondern)</td><td>Er ist klein, aber stark.</td></tr>
            <tr><td>Infinitivgruppen mit um … zu, ohne … zu, anstatt … zu</td><td>Er ging, ohne etwas zu sagen.</td></tr>
            <tr><td>Appositionen (Einschübe)</td><td>Herr Meier, unser Nachbar, hilft uns.</td></tr>
          </table>
          <div class="gram-tip">Vor „dass“ gehört immer ein Komma!</div>
        `
      },
      {
        title: "Adverbien – Zeit, Ort, Art und Weise",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <table class="gram-table">
            <tr><th>Art</th><th>Frage</th><th>Beispiele</th></tr>
            <tr><td>Zeit</td><td>Wann? Wie lange?</td><td>heute, morgen, bald, niemals, oft</td></tr>
            <tr><td>Ort</td><td>Wo? Wohin? Woher?</td><td>hier, dort, draußen, oben, unten</td></tr>
            <tr><td>Art und Weise</td><td>Wie?</td><td>gern, schnell, besonders, vielleicht</td></tr>
          </table>
          <div class="gram-example">Morgen gehe ich draußen spielen. Normalerweise bin ich gern in der Schule.</div>
        `
      },
      {
        title: "Wortbildung – Präfixe & Fugenelemente",
        badge: "Grammatik",
        badgeColor: "#16a34a",
        content: `
          <p class="gram-text"><span class="hl">Präfixe (Vorsilben)</span></p>
          <ul style="margin-left:20px; font-size:0.85rem;">
            <li>ver-: Veränderung (verstehen, verreisen, verbessern)</li>
            <li>vor-: räumlich/zeitlich vor (vorbereiten, vorstellen)</li>
            <li>ent-: weg/gegen (entdecken, entfernen)</li>
            <li>wider-: gegen (widersprechen)</li>
            <li>wieder-: erneut (wiederholen)</li>
          </ul>
          <p class="gram-text"><span class="hl">Fugenelemente in Zusammensetzungen</span></p>
          <ul style="margin-left:20px; font-size:0.85rem;">
            <li>-s-: Geburtstagsfeier, Liebesbrief</li>
            <li>-n- / -en-: Maschinenbau, Bäckerhandwerk</li>
            <li>ohne Fugenelement: Kellertür, Taschentuch, Spielplatz</li>
          </ul>
          <div class="gram-example">Geburtstag + Feier = Geburtstagsfeier (mit -s-); Hals + Kette = Halskette (ohne).</div>
        `
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Wortschatz
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_wortschatz",
    label: "📖 Wortschatz",
    color: "#d97706",
    cards: [
      {
        title: "Antonyme – Gegenteile",
        badge: "Wortschatz",
        badgeColor: "#d97706",
        content: `
          <table class="gram-table">
            <tr><th>Wort</th><th>Gegenteil</th></tr>
            <tr><td>warm</td><td>kalt</td></tr>
            <tr><td>sauer</td><td>süß</td></tr>
            <tr><td>freundlich</td><td>feindlich</td></tr>
            <tr><td>Mehrheit</td><td>Minderheit</td></tr>
            <tr><td>reich</td><td>arm</td></tr>
            <tr><td>fröhlich</td><td>traurig</td></tr>
            <tr><td>leise</td><td>laut</td></tr>
            <tr><td>viele</td><td>wenige</td></tr>
          </table>
        `
      },
      {
        title: "Homonyme – Wörter mit mehreren Bedeutungen",
        badge: "Wortschatz",
        badgeColor: "#d97706",
        content: `
          <table class="gram-table">
            <tr><th>Wort</th><th>Bedeutung 1</th><th>Bedeutung 2</th></tr>
            <tr><td>Mutter</td><td>die Frau, die Kinder hat</td><td>das Maschinenteil (Schraubenmutter)</td></tr>
            <tr><td>Laster</td><td>das Fahrzeug (Lastwagen)</td><td>die schlechte Angewohnheit</td></tr>
            <tr><td>Leiter</td><td>die Person, die führt (Chef)</td><td>das Gerät zum Hinaufsteigen</td></tr>
            <tr><td>Schloss</td><td>das Gebäude (Palast)</td><td>der Gegenstand zum Abschließen</td></tr>
            <tr><td>Pflaster</td><td>das Heftpflaster für Wunden</td><td>der Straßenbelag</td></tr>
            <tr><td>Hahn</td><td>das Tier (männliches Huhn)</td><td>der Wasserhahn</td></tr>
          </table>
          <div class="gram-tip">Immer auf den Kontext achten!</div>
        `
      },
      {
        title: "Stilebenen – umgangssprachlich, standard, gehoben",
        badge: "Wortschatz",
        badgeColor: "#d97706",
        content: `
          <table class="gram-table">
            <tr><th>Umgangssprache</th><th>Standard</th><th>Gehoben</th></tr>
            <tr><td>futtern</td><td>essen</td><td>speisen</td></tr>
            <tr><td>latschen</td><td>gehen</td><td>schreiten</td></tr>
            <tr><td>Bude</td><td>Zimmer</td><td>Gemach</td></tr>
            <tr><td>verpulvern</td><td>verschwenden</td><td>vergeuden</td></tr>
            <tr><td>klauen</td><td>stehlen</td><td>entwenden</td></tr>
            <tr><td>Gaul</td><td>Pferd</td><td>Ross</td></tr>
          </table>
          <p class="gram-text">Verwendung:<br>• Umgangssprache: im Alltag, mit Freunden.<br>• Standard: in Schule, Beruf, offiziellen Texten.<br>• Gehoben: in Literatur, festlichen Reden.</p>
        `
      },
      {
        title: "Fremdwörter – Bedeutung",
        badge: "Wortschatz",
        badgeColor: "#d97706",
        content: `
          <table class="gram-table">
            <tr><th>Fremdwort</th><th>Bedeutung</th></tr>
            <tr><td>panieren</td><td>mit Paniermehl umhüllen (z.B. Schnitzel)</td></tr>
            <tr><td>trainieren</td><td>üben, sich vorbereiten</td></tr>
            <tr><td>Spezialität</td><td>besondere Delikatesse</td></tr>
            <tr><td>Qualität</td><td>Beschaffenheit, Güte</td></tr>
            <tr><td>reservieren</td><td>(Platz) vorbestellen</td></tr>
            <tr><td>reklamieren</td><td>sich beschweren, Umtausch fordern</td></tr>
            <tr><td>tolerieren</td><td>gelten lassen, akzeptieren</td></tr>
          </table>
        `
      }
    ]
  }
];