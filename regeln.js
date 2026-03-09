// ================================================================
// REGELN.JS – Grammatikregeln
// Enthält: R-Objekt (Kurzregeln für Aufgaben) + GRAM_SECTIONS (Nachschlageteil)
// ================================================================

var R = {
  syn:   "<div class=rbox>Ein <span class=hl>Synonym</span> muss inhaltlich und im Kontext passen – Wörter können wörtlich oder übertragen verwendet werden.<br><span class=gram-tip>Synonyme sind nie völlig bedeutungsgleich – achte auf die Stilebene!</span></div>",
  rdw:   "<div class=rbox><span class=hl>Redewendungen</span> haben eine <em>übertragene Bedeutung</em>, die sich nicht direkt aus den Einzelwörtern ergibt.<br><span class=gram-tip>Beispiel: „jemandem auf den Zahn fühlen“ = genau prüfen.</span></div>",
  fw:    "<div class=rbox>Viele <span class=hl>Fremdwörter</span> stammen aus dem Lateinischen oder Englischen und haben eingedeutschte Synonyme.<br><span class=gram-tip>Lerne sie im Zusammenhang – oft helfen Endungen wie -ieren.</span></div>",
  relpro: "<div class=rbox>Ein <span class=hl>Relativpronomen</span> leitet einen Relativsatz ein und bezieht sich auf ein Nomen (Bezugswort) im Hauptsatz.<br>Probe: durch <em>welcher / welche / welches</em> ersetzen.<br><span class=gram-tip>Relativpronomen stehen meist direkt nach dem Bezugswort.</span></div>",
  das:   "<div class=rbox><em>das</em> = Artikel, Relativpronomen oder Demonstrativpronomen → ersetzbar durch <em>welches / dieses</em><br><em>dass</em> = unterordnende Konjunktion → nicht ersetzbar<br><span class=gram-tip>Kannst du „welches“ sagen? → das; sonst → dass.</span></div>",
  pron:  "<div class=rbox><span class=hl>Possessivpronomen</span>: mein, dein, sein, ihr … (Besitz)<br><span class=hl>Demonstrativpronomen</span>: dieser, jener … (hinweisend)<br><span class=hl>Relativpronomen</span>: der/die/das in NS<br><span class=hl>Personalpronomen</span>: ich, du, er …<br><span class=gram-tip>Pronomen ersetzen Nomen – sie sparen Wiederholungen.</span></div>",
  temp:  "<div class=rbox><span class=hl>Präsens</span>: gegenwärtig, immer gültig oder zukünftig (mit Zeitadverb)<br><span class=hl>Plusquamperfekt</span>: Vor-Vergangenheit / Vorzeitigkeit<br><span class=hl>Präteritum</span>: abgeschlossene Vergangenheit<br><span class=gram-tip>Plusquamperfekt: „hatte gesehen“ – etwas, das vor einem anderen Ereignis in der Vergangenheit passierte.</span></div>",
  modus: "<div class=rbox><span class=hl>Indikativ</span> = Wirklichkeit<br><span class=hl>Imperativ</span> = Befehl / Aufforderung<br><span class=hl>Konjunktiv I</span> = indirekte Rede<br><span class=hl>Konjunktiv II</span> = Irreales / Höflichkeit / als ob<br><span class=gram-tip>Konjunktiv II bildet man oft mit „würde“ + Infinitiv.</span></div>",
  passiv:"<div class=rbox><span class=hl>Aktiv → Passiv:</span><br>Akkusativobjekt → Subjekt<br>Subjekt → <em>von</em> + Dativ (optional)<br>Verb → <em>werden</em> + Partizip II<br>Mit Modalverb: Modal + Partizip II + werden<br><span class=gram-tip>Im Passiv steht die Handlung im Vordergrund, nicht der Täter.</span></div>",
  subj:  "<div class=rbox>Das <span class=hl>Subjekt</span> beantwortet <em>Wer oder was?</em>, steht im Nominativ und kongruiert mit dem Verb.<br><span class=gram-tip>Probe: Ersetze durch „er“ oder „sie“ – das Verb muss sich anpassen.</span></div>",
  satz:  "<div class=rbox><span class=hl>HS</span> = kann allein stehen · <span class=hl>NS</span> = abhängig vom HS<br>Eingeschobene NS → zwei Kommas<br>Parataxe = Satzreihe (HS + HS) · Hypotaxe = Satzgefüge (HS + NS)<br><span class=gram-tip>Im HS Verb an Position 2, im NS am Ende.</span></div>",
  komma: "<div class=rbox><span class=hl>Satzgefüge</span>: NS immer vom HS trennen<br><span class=hl>Satzreihe</span> ohne Konj.: Komma<br><span class=hl>Infinitivgruppe</span> mit um/ohne/anstatt zu: Komma<br><span class=hl>Apposition</span>: zwei Kommas<br><span class=hl>sondern</span>: Komma davor<br><span class=gram-tip>Vor „dass“, „weil“, „obwohl“ usw. immer Komma.</span></div>",
  dassdas:"<div class=rbox>Probe für <em>das</em>: ersetzbar durch <em>welches</em>? → Relativpronomen<br>Probe für <em>dass</em>: nicht ersetzbar → Konjunktion<br><span class=gram-tip>Merke: das (dieses/welches) – dass (Konjunktion).</span></div>",
  gross: "<div class=rbox><span class=hl>GROSS</span>: Nomen, nominalisierte Verben/Adjektive/Numeralia (nach Artikel, Präp., Mengenangabe)<br><span class=hl>klein</span>: Adjektive, Adverbien, Verben<br>Suffixe: -heit/-keit/-ung/-schaft → Nomen | -bar/-ig/-lich → Adjektiv<br><span class=gram-tip>Nomen erkennt man am Artikel (der, die, das).</span></div>",
  getrennt:"<div class=rbox>Trennbare Verben im Infinitiv: <em>zusammen</em><br>zu + Infinitiv eines anderen Verbs: <em>getrennt</em><br><em>stundenlang</em> (Adverb) → zusammen | <em>zwei Stunden lang</em> → getrennt<br><span class=gram-tip>Frage: Kann man die Bedeutung wörtlich nehmen? Wenn ja, meist getrennt.</span></div>",
  strat: "<div class=rbox><span class=hl>Strategie ä/e</span>: stammverwandtes Wort mit a suchen (Raum → räumig)<br><span class=hl>Strategie ss/ß</span>: kurzer Vokal → ss, langer Vokal/Diphthong → ß<br><span class=hl>Schärfung</span>: kurzer betonter Vokal → Doppelkonsonant<br><span class=gram-tip>Verlängere das Wort: Tag – Tage (g), Hand – Hände (d).</span></div>",
  apo:   "<div class=rbox><span class=hl>Apostroph</span> im Genitiv bei Eigennamen auf s/ß/x/z (Lewis')<br>Bei Pluralbildungen kein Apostroph!<br><span class=gram-tip>Apostroph zeigt an, dass der Genitiv-s wegfällt.</span></div>",
  stil:  "<div class=rbox><span class=hl>Metapher</span>: Bedeutungsübertragung<br><span class=hl>Vergleich</span>: erkennbar an <em>wie</em><br><span class=hl>Ellipse</span>: unvollständiger Satz<br><span class=hl>Alliteration</span>: gleicher Anlaut<br><span class=hl>Anapher</span>: Wiederholung am Satzanfang<br><span class=hl>Lautmalerei</span>: Geräusch-nachahmung<br><span class=hl>Ironie</span>: das Gegenteil des Gemeinten<br><span class=hl>Parallelismus</span>: gleiche Satzstruktur<br><span class=hl>Neologismus</span>: Wortneuschöpfung<br><span class=gram-tip>Stilmittel machen Texte lebendiger – übe, sie zu erkennen.</span></div>",
  modal: "<div class=rbox><span class=hl>müssen</span> = Notwendigkeit · <span class=hl>dürfen</span> = Erlaubnis<br><span class=hl>sollen</span> = Auftrag · <span class=hl>möchten</span> = Wunsch<br><span class=hl>können</span> = Fähigkeit / Möglichkeit<br><span class=gram-tip>„müssen“ = Zwang, „sollen“ = fremder Wille.</span></div>",
  indir: "<div class=rbox>Indirekte Rede: Indikativ → <span class=hl>Konjunktiv I</span><br>Pronomen anpassen (ich → er/sie)<br>ob-Frage → direkte Frage: Verb an 1. Stelle<br><span class=gram-tip>Beispiel: Er sagt, er sei krank. (Konjunktiv I)</span></div>",
  wortb: "<div class=rbox><span class=hl>Kompositum</span> = mind. zwei eigenständige Wörter zusammengesetzt<br>Ableitungen (-ung, -heit, -keit, -schaft) sind keine Komposita<br><span class=hl>Wortfamilie</span> = gemeinsamer Wortstamm, verschiedene Wortarten<br><span class=gram-tip>Das letzte Wort bestimmt das Genus: der Teller + Rand = der Tellerrand.</span></div>",
  konno: "<div class=rbox>Die <span class=hl>Wortwahl</span> (Konnotation) verändert die Stimmung.<br>Synonyme sind nie völlig bedeutungsgleich!<br><span class=gram-tip>Beispiel: „schlank“ positiv, „dünn“ oft negativ.</span></div>",
  beton: "<div class=rbox>Durch <span class=hl>Fokusakzent</span> (Betonung) wird der Informationsschwerpunkt auf verschiedene Satzglieder verschoben.<br><span class=gram-tip>Im Satz „Ich habe IHN gesehen“ liegt der Fokus auf „ihn“.</span></div>",
  modal2:"<div class=rbox><em>Futur I / wird ... sein</em> = Vermutung / Wahrscheinlichkeit<br><em>Präsens</em> = reale Aussage / Gewissheit<br><em>eigentlich</em> = schränkt Aussage ein<br><span class=gram-tip>„Er wird wohl krank sein“ = Vermutung.</span></div>",
  gleich:"<div class=rbox><span class=hl>nachdem</span> = Vorzeitigkeit (erst A, dann B)<br><span class=hl>während / als</span> = Gleichzeitigkeit<br><span class=gram-tip>Nachdem er gegessen hatte, ging er spazieren. (Vorzeitigkeit)</span></div>",
  nomin: "<div class=rbox>Nominalisierungen durch Verben ersetzen:<br><em>beim Aufbauen</em> → <em>aufzubauen</em><br><em>war zu hören</em> → <em>hörte man</em><br><span class=gram-tip>Nominalisierungen machen Sätze oft schwerer – umschreibe sie.</span></div>"
};

// ================================ GRAMMATIKREGELN ================================
var GRAM_SECTIONS = [
  {id:"wortarten", label:"📌 Wortarten", color:"#3d6b8f", cards:[
    {title:"Nomen", badge:"Wortart", badgeColor:"#3d6b8f",
     content:`<p class="gram-text">Nomen bezeichnen Personen, Dinge, Orte oder abstrakte Konzepte. Sie werden <em>großgeschrieben</em>.</p>
<table class="gram-table"><tr><th>Typ</th><th>Beispiel</th></tr>
<tr><td>Person</td><td>der Lehrer, die Schülerin</td></tr>
<tr><td>Ding</td><td>der Tisch, das Buch</td></tr>
<tr><td>Ort</td><td>die Stadt, das Land</td></tr>
<tr><td>Abstrakt</td><td>die Freude, der Mut</td></tr></table>
<div class="gram-highlight"><span class="hl">Genus:</span> der (mask.) · die (fem.) · das (neutr.) – muss auswendig gelernt werden!<br><span class="hl">Plural:</span> -e, -er, -en, -s oder ohne Endung (unregelmäßig)</div>`},
    {title:"Verben", badge:"Wortart", badgeColor:"#3d6b8f",
     content:`<p class="gram-text">Verben beschreiben Handlungen, Vorgänge oder Zustände. Sie werden konjugiert.</p>
<div class="gram-highlight"><span class="hl">Vollverb:</span> schreiben, laufen<br><span class="hl">Hilfsverb:</span> haben, sein, werden<br><span class="hl">Modalverb:</span> müssen, können, dürfen, sollen, wollen, mögen</div>
<div class="gram-example">Er schreibt einen Brief. (Vollverb) · Sie hat geschlafen. (Hilfsverb)</div>
<div class="gram-tip">Infinitiv endet immer auf -en oder -n. Konjugiert werden Person und Numerus angepasst.</div>`},
    {title:"Adjektive", badge:"Wortart", badgeColor:"#3d6b8f",
     content:`<p class="gram-text">Adjektive beschreiben Eigenschaften von Nomen. Sie werden dekliniert, wenn sie vor einem Nomen stehen.</p>
<table class="gram-table"><tr><th>Verwendung</th><th>Beispiel</th></tr>
<tr><td>attributiv (vor Nomen)</td><td>der <em>schnelle</em> Hund</td></tr>
<tr><td>prädikativ (nach sein)</td><td>Der Hund ist <em>schnell</em>.</td></tr>
<tr><td>adverbial (Verb beschreiben)</td><td>Er rennt <em>schnell</em>.</td></tr></table>
<div class="gram-highlight">Komparativ: schnell → <span class="hl">schneller</span><br>Superlativ: schnell → <span class="hl">am schnellsten</span> / der schnellste</div>`},
    {title:"Adverbien", badge:"Wortart", badgeColor:"#3d6b8f",
     content:`<p class="gram-text">Adverbien werden nicht dekliniert. Sie geben Ort, Zeit, Art/Weise oder Grund an.</p>
<table class="gram-table"><tr><th>Typ</th><th>Beispiel</th></tr>
<tr><td>Lokal</td><td>hier, dort, oben, unten</td></tr>
<tr><td>Temporal</td><td>heute, gestern, morgen, oft</td></tr>
<tr><td>Modal</td><td>sehr, gern, leider, vielleicht</td></tr>
<tr><td>Kausal</td><td>daher, deshalb, deswegen</td></tr></table>`},
    {title:"Pronomen", badge:"Wortart", badgeColor:"#7c3d8f",
     content:`<p class="gram-text">Pronomen ersetzen oder begleiten Nomen.</p>
<table class="gram-table"><tr><th>Art</th><th>Beispiele</th></tr>
<tr><td>Personal</td><td>ich, du, er, sie, es, wir, ihr, sie</td></tr>
<tr><td>Possessiv</td><td>mein, dein, sein, ihr, unser</td></tr>
<tr><td>Demonstrativ</td><td>dieser, jener, derjenige</td></tr>
<tr><td>Relativ</td><td>der/die/das, welcher/welche/welches</td></tr>
<tr><td>Reflexiv</td><td>sich, mich, dich</td></tr>
<tr><td>Indefinit</td><td>man, jemand, niemand, alle</td></tr></table>
<div class="gram-tip">Relativpronomen leiten Relativsätze ein. Probe: durch <em>welcher/welche/welches</em> ersetzen!</div>`},
    {title:"Präpositionen", badge:"Wortart", badgeColor:"#3d6b8f",
     content:`<p class="gram-text">Präpositionen geben Beziehungen an (Ort, Zeit, Art). Sie regieren bestimmte Fälle.</p>
<table class="gram-table"><tr><th>Fall</th><th>Präpositionen</th></tr>
<tr><td>Genitiv</td><td>wegen, trotz, während, statt</td></tr>
<tr><td>Dativ</td><td>mit, nach, bei, von, zu, aus, seit, gegenüber</td></tr>
<tr><td>Akkusativ</td><td>durch, für, gegen, ohne, um</td></tr>
<tr><td>Dat. / Akk.</td><td>an, auf, in, vor, hinter, über, unter, neben, zwischen</td></tr></table>`},
    {title:"Konjunktionen", badge:"Wortart", badgeColor:"#3d6b8f",
     content:`<p class="gram-text">Konjunktionen verbinden Sätze oder Satzglieder.</p>
<table class="gram-table"><tr><th>Typ</th><th>Beispiele</th><th>Wirkung</th></tr>
<tr><td>Koordinierend</td><td>und, oder, aber, denn, sondern</td><td>HS + HS</td></tr>
<tr><td>Subordinierend</td><td>weil, dass, ob, wenn, obwohl, als, während</td><td>HS + NS</td></tr></table>
<div class="gram-tip"><em>denn</em> (koordinierend) → kein Verbende im NS · <em>weil</em> (subordinierend) → Verb ans Ende!</div>`}
  ]},
  {id:"satzbau", label:"🏗️ Satz & Satzbau", color:"#3d8f6b", cards:[
    {title:"Satzglieder", badge:"Syntax", badgeColor:"#3d8f6b",
     content:`<p class="gram-text">Satzglieder sind verschiebbare Einheiten im Satz.</p>
<table class="gram-table"><tr><th>Glied</th><th>Frage</th><th>Kasus</th></tr>
<tr><td>Subjekt</td><td>Wer oder was?</td><td>Nominativ</td></tr>
<tr><td>Prädikat</td><td>Was tut es?</td><td>—</td></tr>
<tr><td>Akkusativobjekt</td><td>Wen oder was?</td><td>Akkusativ</td></tr>
<tr><td>Dativobjekt</td><td>Wem?</td><td>Dativ</td></tr>
<tr><td>Adverbiale Best.</td><td>Wo? Wann? Wie? Warum?</td><td>versch.</td></tr></table>
<div class="gram-tip">Probe für Subjekt: Ersetze durch <em>Er/Sie/Es</em> und überprüfe Kongruenz mit dem Verb.</div>`},
    {title:"Hauptsatz & Nebensatz", badge:"Syntax", badgeColor:"#3d8f6b",
     content:`<p class="gram-text">Ein Hauptsatz (HS) kann allein stehen. Ein Nebensatz (NS) ist abhängig vom HS.</p>
<div class="gram-highlight"><span class="hl">Hauptsatz:</span> Verb an 2. Stelle (V2-Stellung)<br><span class="hl">Nebensatz:</span> Verb ans Ende (VE-Stellung)<br><span class="hl">Einleitung NS:</span> Konjunktion (weil, dass, ob…) oder Relativpronomen</div>
<div class="gram-example">Er kommt, <em>weil</em> er müde ist. | Der Mann, <em>den</em> ich sah, winkte.</div>
<div class="gram-tip">Eingeschobener NS → zwei Kommas: „Er, <em>der immer pünktlich ist</em>, kam zu spät."</div>`},
    {title:"Satzreihe & Satzgefüge", badge:"Syntax", badgeColor:"#3d8f6b",
     content:`<p class="gram-text"></p>
<table class="gram-table"><tr><th></th><th>Satzreihe (Parataxe)</th><th>Satzgefüge (Hypotaxe)</th></tr>
<tr><td>Struktur</td><td>HS + HS</td><td>HS + NS</td></tr>
<tr><td>Verbindung</td><td>und, oder, aber, denn</td><td>weil, dass, obwohl…</td></tr>
<tr><td>Beispiel</td><td>Er liest, sie schreibt.</td><td>Er liest, weil er muss.</td></tr></table>
<div class="gram-highlight"><span class="hl">Satzbaupläne:</span> HS, NS – NS, HS – HS, NS, NS – HS, NS, HS</div>`},
    {title:"Nebensatzarten", badge:"Syntax", badgeColor:"#2d9e6a",
     content:`<table class="gram-table"><tr><th>Art</th><th>Frage</th><th>Einleitung</th><th>Beispiel</th></tr>
<tr><td>Lokalsatz</td><td>Wo?</td><td>wo, wohin</td><td>Sie geht, wo sie arbeitet.</td></tr>
<tr><td>Temporalsatz</td><td>Wann?</td><td>als, während, nachdem, bevor</td><td>Als er kam, begann es.</td></tr>
<tr><td>Kausalsatz</td><td>Warum?</td><td>weil, da</td><td>Er schläft, weil er müde ist.</td></tr>
<tr><td>Konditionalsatz</td><td>Unter welcher Bedingung?</td><td>wenn, falls</td><td>Wenn du willst, helfe ich.</td></tr>
<tr><td>Konzessivsatz</td><td>Trotz was?</td><td>obwohl, obgleich</td><td>Obwohl es regnete, gingen wir.</td></tr>
<tr><td>Finalsatz</td><td>Wozu?</td><td>damit, um…zu</td><td>Er übt, damit er gewinnt.</td></tr>
<tr><td>Konsekutivsatz</td><td>Mit welcher Folge?</td><td>sodass, so…dass</td><td>Es war so laut, dass ich nichts hörte.</td></tr></table>`}
  ]},
  {id:"zeitformen", label:"⏱️ Zeit & Modus", color:"#7c3d8f", cards:[
    {title:"Zeitformen im Überblick", badge:"Tempus", badgeColor:"#7c3d8f",
     content:`<table class="gram-table"><tr><th>Tempus</th><th>Bildung</th><th>Verwendung</th></tr>
<tr><td>Präsens</td><td>Stamm + -e/-st/-t…</td><td>Gegenwart, Zukunft (m. Zeitadverb), immer gültig</td></tr>
<tr><td>Präteritum</td><td>Stamm + -te / unregel.</td><td>abgeschlossene Vergangenheit (Schriftsprache)</td></tr>
<tr><td>Perfekt</td><td>haben/sein + Partizip II</td><td>abgeschlossene Vergangenheit (gesprochen)</td></tr>
<tr><td>Plusquamperfekt</td><td>hatte/war + Partizip II</td><td>Vorvergangenheit / Vorzeitigkeit</td></tr>
<tr><td>Futur I</td><td>werden + Infinitiv</td><td>Zukunft / Vermutung</td></tr>
<tr><td>Futur II</td><td>werden + Partizip II + haben/sein</td><td>abgeschlossene Zukunft</td></tr></table>
<div class="gram-tip"><em>Plusquamperfekt</em> = „hatte gesehen" → etwas, das VOR einem anderen Ereignis in der Vergangenheit passierte.</div>`},
    {title:"Aktiv & Passiv", badge:"Diathese", badgeColor:"#8f5a3d",
     content:`<p class="gram-text">Das Passiv rückt die Handlung, nicht den Handelnden in den Vordergrund.</p>
<div class="gram-highlight"><span class="hl">Vorgangspassiv:</span> werden + Partizip II<br>→ Die Tür <em>wird geöffnet</em>. (Präsens)<br>→ Die Tür <em>wurde geöffnet</em>. (Präteritum)<br><span class="hl">Zustandspassiv:</span> sein + Partizip II<br>→ Die Tür <em>ist geöffnet</em>.</div>
<table class="gram-table"><tr><th>Aktiv</th><th>Passiv</th></tr>
<tr><td>Er öffnet die Tür.</td><td>Die Tür wird (von ihm) geöffnet.</td></tr>
<tr><td>Sie hat den Brief geschrieben.</td><td>Der Brief ist (von ihr) geschrieben worden.</td></tr></table>
<div class="gram-tip">Akkusativobjekt (Aktiv) → Subjekt (Passiv) · Subjekt (Aktiv) → <em>von</em> + Dativ (optional)</div>`},
    {title:"Modus: Indikativ, Imperativ, Konjunktiv", badge:"Modus", badgeColor:"#7c3d8f",
     content:`<table class="gram-table"><tr><th>Modus</th><th>Verwendung</th><th>Beispiel</th></tr>
<tr><td>Indikativ</td><td>Wirklichkeit, Tatsachen</td><td>Er kommt. Er ist müde.</td></tr>
<tr><td>Imperativ</td><td>Befehl, Aufforderung</td><td>Komm! Geh!</td></tr>
<tr><td>Konjunktiv I</td><td>Indirekte Rede</td><td>Er sagte, er <em>sei</em> müde.</td></tr>
<tr><td>Konjunktiv II</td><td>Irreales, Wunsch, Höflichkeit</td><td>Wenn ich Zeit <em>hätte</em>… / <em>Würden</em> Sie bitte…</td></tr></table>
<div class="gram-highlight"><span class="hl">Konjunktiv II Bildung:</span><br>Präteritumstamm + Umlaut + -e: hatte → <em>hätte</em> · war → <em>wäre</em><br>Oder: <em>würde</em> + Infinitiv (Ersatzform)</div>`},
    {title:"Modalverben & ihre Bedeutung", badge:"Modalverben", badgeColor:"#3d7a6b",
     content:`<table class="gram-table"><tr><th>Modalverb</th><th>Bedeutung</th><th>Beispiel</th></tr>
<tr><td>müssen</td><td>Notwendigkeit, Zwang</td><td>Ich muss jetzt gehen.</td></tr>
<tr><td>sollen</td><td>Auftrag, Empfehlung</td><td>Du sollst deine Hausaufgaben machen.</td></tr>
<tr><td>können</td><td>Fähigkeit, Möglichkeit</td><td>Ich kann Klavier spielen.</td></tr>
<tr><td>dürfen</td><td>Erlaubnis</td><td>Hier darfst du parken.</td></tr>
<tr><td>wollen</td><td>Absicht, Wunsch</td><td>Wir wollen verreisen.</td></tr>
<tr><td>mögen / möchte</td><td>Vorliebe / höflicher Wunsch</td><td>Ich mag Schokolade. Ich möchte ein Eis.</td></tr></table>
<div class="gram-tip"><em>sollen</em> = externer Auftrag (jemand anderes will es)<br><em>wollen</em> = eigener Wunsch/Plan</div>`},
    {title:"Direkte & Indirekte Rede", badge:"Modus", badgeColor:"#7c3d8f",
     content:`<table class="gram-table"><tr><th>Direkte Rede</th><th>Indirekte Rede</th></tr>
<tr><td>„Ich habe..."</td><td>...sie <em>habe</em>... (Pronomen + Konj. I)</td></tr>
<tr><td>hier</td><td>...dort</td></tr>
<tr><td>heute</td><td>...an diesem Tag</td></tr>
<tr><td>morgen</td><td>...am nächsten Tag</td></tr></table>
<div class="gram-example">„Ich komme morgen hier vorbei." → Er sagte, er <em>komme</em> am nächsten Tag dort vorbei.</div>
<div class="gram-tip">Kann Konjunktiv I nicht von Indikativ unterschieden werden → Konjunktiv II verwenden!</div>`},
    {title:"Partizipien", badge:"Verb", badgeColor:"#7c3d8f",
     content:`<p class="gram-text"></p>
<div class="gram-highlight"><span class="hl">Partizip I</span> (= Infinitiv + d):<br>laufen → <em>laufend</em> · singen → <em>singend</em><br>Drückt Gleichzeitigkeit oder aktive Handlung aus.<br><br><span class="hl">Partizip II</span>:<br>Regelmäßig: ge- + Stamm + -t → <em>gespielt</em><br>Unregelmäßig: ge- + Stamm + -en → <em>geschwommen</em><br>Drückt Vergangenheit oder Passiv aus.</div>
<div class="gram-example">Der <em>lachende</em> Junge rannte vorbei. (Partizip I)<br>Das <em>gekochte</em> Essen schmeckt gut. (Partizip II)</div>`}
  ]},
  {id:"rechtschreibung", label:"✏️ Rechtschreibung", color:"#8f5a3d", cards:[
    {title:"das oder dass", badge:"Rechtschreibung", badgeColor:"#8f5a3d",
     content:`<div class="gram-highlight"><span class="hl">das</span> = Artikel, Relativpronomen, Demonstrativpronomen<br>→ Probe: durch <em>welches</em> oder <em>dieses</em> ersetzbar? → <em>das</em><br><br><span class="hl">dass</span> = Konjunktion (leitet Nebensatz ein)<br>→ Nicht ersetzbar → <em>dass</em></div>
<table class="gram-table"><tr><th>Beispiel</th><th>Typ</th><th>Probe</th></tr>
<tr><td>Das Buch liegt hier.</td><td>Artikel</td><td>Dieses Buch ✓</td></tr>
<tr><td>Das Buch, <em>das</em> ich las.</td><td>Relativpronomen</td><td>welches ich las ✓</td></tr>
<tr><td>Ich weiß, <em>dass</em> er kommt.</td><td>Konjunktion</td><td>welches er kommt ✗ → dass</td></tr></table>`},
    {title:"Groß- & Kleinschreibung", badge:"Rechtschreibung", badgeColor:"#8f5a3d",
     content:`<div class="gram-highlight"><span class="hl">Großschreiben:</span><br>• Nomen: der Tisch, die Freude<br>• Nominalisierte Verben: das Lachen, das Essen<br>• Nominalisierte Adjektive: das Beste, das Gute<br>• Nominalisierte Numerale: das Erste, das Dritte<br><br><span class="hl">Kleinschreiben:</span><br>• Adjektive: schön, groß, schnell<br>• Adverbien: oft, immer, sonntags<br>• Verben: lachen, schreiben</div>
<div class="gram-tip">Suffixe helfen: -heit/-keit/-ung/-schaft → Nomen (groß) · -bar/-ig/-lich → Adjektiv (klein)</div>`},
    {title:"Getrennt- & Zusammenschreibung", badge:"Rechtschreibung", badgeColor:"#8f5a3d",
     content:`<div class="gram-highlight"><span class="hl">Zusammen:</span> Trennbare Verben im Infinitiv<br>→ zustellen, aufräumen, vorlesen<br><br><span class="hl">Getrennt:</span> zu + Infinitiv eines anderen Verbs<br>→ zu stellen, zu lesen, zu gehen</div>
<table class="gram-table"><tr><th>Zusammen</th><th>Getrennt</th></tr>
<tr><td>stundenlang (Adverb)</td><td>zwei Stunden lang</td></tr>
<tr><td>aufräumen (trennb. Verb)</td><td>zu räumen</td></tr>
<tr><td>zuwenden (Verb, to turn to)</td><td>zu wenden (to turn)</td></tr></table>`},
    {title:"Rechtschreibstrategien", badge:"Strategie", badgeColor:"#8f5a3d",
     content:`<div class="gram-highlight"><span class="hl">ä-Strategie:</span> Stammverwandtes Wort mit a suchen<br>→ Raum → räumig · Hand → Hände<br><br><span class="hl">ss/ß-Strategie:</span><br>→ kurzer Vokal → ss (Fluss, lassen)<br>→ langer Vokal/Diphthong → ß (Straße, heiß)<br><br><span class="hl">Schärfungsregel:</span><br>→ kurzer betonter Vokal → Doppelkonsonant (rennen, kommen, Mitte)</div>
<div class="gram-tip">Bei Unsicherheit: Wort verlängern oder verwandtes Wort bilden! Raum → räum → räumig</div>`},
    {title:"Apostroph", badge:"Zeichensetzung", badgeColor:"#8f5a3d",
     content:`<div class="gram-highlight"><span class="hl">Apostroph bei Genitiv:</span><br>→ Eigennamen auf s/ß/x/z: Lewis' Buch, Marx' Werk<br><br><span class="hl">Kein Apostroph:</span><br>→ Plural: die Autos (nicht: Auto's!)<br>→ Normaler Genitiv: Peters Buch (kein Apostroph!)</div>
<div class="gram-tip">Apostroph bei Eigennamen auf -s zeigt an, dass der Genitiv-s wegfällt.</div>`}
  ]},
  {id:"komma", label:"⁝ Kommasetzung", color:"#5a7a3d", cards:[
    {title:"Kommaregeln Übersicht", badge:"Zeichensetzung", badgeColor:"#5a7a3d",
     content:`<table class="gram-table"><tr><th>Regel</th><th>Beispiel</th></tr>
<tr><td>Aufzählung (ohne Konjunktion)</td><td>Er liest, schreibt und rechnet.</td></tr>
<tr><td>Satzreihe (2 HS)</td><td>Ich komme, du gehst.</td></tr>
<tr><td>Satzgefüge (NS abtrennen)</td><td>Ich weiß, dass er kommt.</td></tr>
<tr><td>Eingeschobener NS</td><td>Er, der das wusste, schwieg.</td></tr>
<tr><td>Infinitivgruppe (um/ohne/statt zu)</td><td>Er kam, um zu helfen.</td></tr>
<tr><td>Apposition</td><td>Anna, meine Schwester, kam.</td></tr>
<tr><td>Entgegenstellung (sondern)</td><td>Er kommt nicht früh, sondern spät.</td></tr></table>`},
    {title:"Komma bei Aufzählungen", badge:"Zeichensetzung", badgeColor:"#5a7a3d",
     content:`<div class="gram-highlight">Aufzählungen ohne <em>und/oder</em> → Komma<br>Letztes Element mit <em>und/oder</em> → kein Komma davor</div>
<div class="gram-example">Er kaufte Äpfel, Birnen, Orangen und Bananen. ✓<br>Er aß, trank und schlief. ✓ (Verbliste)<br>Er aß, trank, <em>und</em> schlief. ✗ (kein Komma vor und bei einfacher Aufzählung)</div>`},
    {title:"Komma bei Satzgefügen", badge:"Zeichensetzung", badgeColor:"#5a7a3d",
     content:`<div class="gram-highlight">NS immer durch Komma vom HS trennen!</div>
<div class="gram-example">Ich weiß<em>,</em> dass er kommt. (NS nach HS)<br>Als er kam<em>,</em> begann das Meeting. (NS vor HS)<br>Er<em>,</em> der immer pünktlich ist<em>,</em> kam zu spät. (eingeschobener NS → 2 Kommas)</div>`},
    {title:"Komma bei Infinitivgruppen", badge:"Zeichensetzung", badgeColor:"#5a7a3d",
     content:`<div class="gram-highlight">Infinitivgruppe mit <em>um…zu / ohne…zu / statt…zu / anstatt…zu</em> → immer Komma<br>Einfaches <em>zu + Infinitiv</em> → Komma empfohlen</div>
<div class="gram-example">Er kam<em>,</em> um zu helfen. ✓<br>Sie lernte<em>,</em> ohne aufzuhören. ✓<br>Er bat mich<em>,</em> das Fenster zu öffnen. ✓</div>`},
    {title:"Komma bei Appositionen", badge:"Zeichensetzung", badgeColor:"#5a7a3d",
     content:`<div class="gram-highlight">Apposition = nachgestellte Beifügung zu einem Nomen → zwei Kommas</div>
<div class="gram-example">Anna<em>,</em> meine beste Freundin<em>,</em> kam gestern. ✓<br>Herr Müller<em>,</em> unser Lehrer<em>,</em> ist krank. ✓<br>Als eingeschobene Apposition: Der Mann<em>,</em> Arzt von Beruf<em>,</em> half sofort.</div>`}
  ]},
  {id:"stilmittel", label:"🎭 Stil & Sprache", color:"#8f3d3d", cards:[
    {title:"Stilmittel Übersicht", badge:"Stilistik", badgeColor:"#8f3d3d",
     content:`<table class="gram-table"><tr><th>Stilmittel</th><th>Erklärung</th><th>Beispiel</th></tr>
<tr><td>Metapher</td><td>Bedeutungsübertragung (ohne wie)</td><td>Der Film fesselt die Zuschauer.</td></tr>
<tr><td>Vergleich</td><td>Wie-Vergleich</td><td>Er läuft wie der Wind.</td></tr>
<tr><td>Ellipse</td><td>Unvollständiger Satz</td><td>Und zwar sofort!</td></tr>
<tr><td>Alliteration</td><td>Gleicher Anlaut</td><td>Milch macht müde Männer munter.</td></tr>
<tr><td>Anapher</td><td>Wiederholung am Satzanfang</td><td>Er wollte… Er wollte… Er wollte…</td></tr>
<tr><td>Ironie</td><td>Gegenteil des Gemeinten</td><td>Das war wirklich sehr klug von dir!</td></tr>
<tr><td>Parallelismus</td><td>Gleiche Satzstruktur</td><td>Sie ist 15, ich bin 26.</td></tr>
<tr><td>Neologismus</td><td>Wortneuschöpfung</td><td>Nasenhalluzination</td></tr>
<tr><td>Lautmalerei</td><td>Geräusch-Nachahmung</td><td>Das Wasser plätschert.</td></tr>
<tr><td>Personifikation</td><td>Vermenschlichung</td><td>Die Sonne lacht.</td></tr></table>`},
    {title:"Synonyme, Antonyme, Polysemie", badge:"Wortschatz", badgeColor:"#8f3d3d",
     content:`<div class="gram-highlight"><span class="hl">Synonym</span>: bedeutungsähnlich<br>→ schön, hübsch, attraktiv, ansehnlich<br><br><span class="hl">Antonym</span>: Gegenteil<br>→ groß ↔ klein · hell ↔ dunkel<br><br><span class="hl">Polysem</span>: mehrere Bedeutungen<br>→ <em>umsonst</em> = kostenlos / vergeblich<br>→ <em>Bank</em> = Möbel / Geldinstitut</div>
<div class="gram-tip">Synonyme sind nie völlig gleichbedeutend – die Konnotation (Stimmung/Ton) unterscheidet sich!</div>`},
    {title:"Unpersönliche Ausdrucksweise", badge:"Stil", badgeColor:"#8f3d3d",
     content:`<p class="gram-text">Sätze mit <em>man</em> wirken unpersönlich, da der Handelnde nicht konkret benannt wird.</p>
<table class="gram-table"><tr><th>Unpersönlich</th><th>Persönlich</th></tr>
<tr><td>Man muss pünktlich sein.</td><td>Du musst pünktlich sein.</td></tr>
<tr><td>Man sollte mehr Sport treiben.</td><td>Wir sollten mehr Sport treiben.</td></tr></table>`},
    {title:"Fremdwörter & Anglizismen", badge:"Wortschatz", badgeColor:"#3d6b8f",
     content:`<div class="gram-highlight">Viele Fremdwörter stammen aus dem <span class="hl">Lateinischen</span> oder <span class="hl">Englischen</span>.</div>
<table class="gram-table"><tr><th>Fremdwort</th><th>Deutsch</th></tr>
<tr><td>Konsum</td><td>Verbrauch</td></tr>
<tr><td>Resonanz</td><td>Rückmeldung</td></tr>
<tr><td>Account</td><td>Benutzerkonto</td></tr>
<tr><td>Primetime</td><td>Hauptsendezeit</td></tr>
<tr><td>flexible</td><td>beweglich</td></tr></table>
<div class="gram-tip">Verben auf <em>-ieren</em> sind oft Fremdwörter: konservieren, demonstrieren, nuancieren</div>`}
  ]},
  {id:"wortbildung", label:"🔧 Wortbildung", color:"#6b3d8f", cards:[
    {title:"Komposita", badge:"Wortbildung", badgeColor:"#6b3d8f",
     content:`<div class="gram-highlight"><span class="hl">Kompositum</span> = mindestens zwei eigenständige Wörter zusammengesetzt.<br>Das letzte Wort bestimmt das Genus!</div>
<table class="gram-table"><tr><th>Beispiel</th><th>Bestandteile</th></tr>
<tr><td>der Tellerrand</td><td>Teller + Rand</td></tr>
<tr><td>das Bildschirm</td><td>Bild + Schirm</td></tr>
<tr><td>der Hartschaumstoff</td><td>Hart + Schaum + Stoff</td></tr></table>
<div class="gram-tip">Keine Komposita: Ableitungen mit -ung, -heit, -keit, -schaft, -tion (das sind Derivationen!)</div>`},
    {title:"Wortfamilien & Derivation", badge:"Wortbildung", badgeColor:"#6b3d8f",
     content:`<div class="gram-highlight"><span class="hl">Wortfamilie</span> = gleicher Stamm, verschiedene Wortarten<br>→ Risiko · riskieren · riskant</div>
<table class="gram-table"><tr><th>Nomen</th><th>Verb</th><th>Adjektiv</th></tr>
<tr><td>die Funktion</td><td>funktionieren</td><td>funktional</td></tr>
<tr><td>der Profit</td><td>profitieren</td><td>profitabel</td></tr>
<tr><td>die Koalition</td><td>koalieren</td><td>—</td></tr></table>
<div class="gram-highlight"><span class="hl">Suffixe</span> (Nachsilben):<br>-ung, -heit, -keit, -schaft → Nomen<br>-bar, -ig, -lich, -isch, -sam → Adjektiv<br>-ieren, -en → Verb</div>`}
  ]}
];