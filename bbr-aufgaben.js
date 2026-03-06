// ================================================================
// BBR-AUFGABEN.JS – Übungsaufgaben für die BBR
// 6 Oberthemen, jeweils mit mehreren Aufgaben.
// Neues Thema: Objekt { id, title, emoji, color, qs:[...] } ans Ende ergänzen.
// ================================================================

var BBR_THEMES = [

// ── 1: VOKALE & DEHNUNG ─────────────────────────────────────────
{id:"bbr_vokale",title:"Vokale & Dehnung",emoji:"📏",color:"#2563eb",qs:[

{sub:"a / aa / ah",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) w___scheinlich\n(b) st___tlich\n(c) Tr___ge\n(d) Katzenh___re\n(e) unkl___r\n(f) Bez___lung",
o:["wahrscheinlich / staatlich / Trage / Katzenhaare / unklar / Bezahlung",
   "warscheinlich / statlich / Trahge / Katzenhahre / unklaar / Bezaalung",
   "wahrscheinlich / staatlich / Traage / Katzenhare / unklar / Bezahlung"],
c:0,
model:"wahrscheinlich (ah) / staatlich (aa) / Trage (kurzes a) / Katzenhaare (aa) / unklar (kurzes a) / Bezahlung (ah)",
rule:"<div class=rbox><span class=hl>ah</span>: Dehnungs-h verlängert den Vokal (wahr, zahlen)<br><span class=hl>aa</span>: langes a ohne h (Staat, Haare)<br><span class=hl>a</span>: kurzes a (Trage, unklar)</div>"},

{sub:"i / ie / ieh",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) L___be\n(b) L___belle\n(c) Z___hung\n(d) B___ber\n(e) Fl___hkraft\n(f) r___chen",
o:["Liebe / Libelle / Ziehung / Biber / Fliehkraft / riechen",
   "Libe / Liebelle / Zieung / Bieber / Fliekraft / richen",
   "Liehbe / Libelle / Ziehung / Biber / Fliehkraft / riehchen"],
c:0,
model:"Liebe (ie) / Libelle (kurzes i) / Ziehung (ieh) / Biber (kurzes i) / Fliehkraft (ieh) / riechen (ie)",
rule:"<div class=rbox><span class=hl>ie</span>: langes i (Liebe, riechen)<br><span class=hl>i</span>: kurzes i (Libelle, Biber)<br><span class=hl>ieh</span>: nur in wenigen Wörtern (ziehen, fliehen)</div>"},

{sub:"ah / ar / ahr",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) W___nung\n(b) w___scheinlich\n(c) P___tner\n(d) z___m\n(e) Al___m\n(f) Abf___t",
o:["Warnung / wahrscheinlich / Partner / zahm / Alarm / Abfahrt",
   "Wahnung / warscheinlich / Pahtner / zahrm / Alahm / Abfart",
   "Wahrnung / wahrscheinlich / Pahrtner / zarm / Alahm / Abfahrt"],
c:0,
model:"Warnung (ar) / wahrscheinlich (ah) / Partner (ar) / zahm (ah) / Alarm (ar) / Abfahrt (ah)",
rule:"<div class=rbox><span class=hl>ah</span>: verlängert den Vokal (zahm, Abfahrt, wahrscheinlich)<br><span class=hl>ar</span>: kurzes a + r (Partner, Alarm, Warnung)</div>"},

{sub:"e / ee / eh",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) Id___\n(b) Bef___l\n(c) St___g\n(d) m___r\n(e) Sch___re\n(f) r___ge",
o:["Idee / Befehl / Steg / mehr / Schere / rege",
   "Ide / Befeh / Steeg / mer / Schehre / rehge",
   "Ideh / Befeehl / Stehg / mehhr / Scheere / rege"],
c:0,
model:"Idee (ee, Fremdwort) / Befehl (eh) / Steg (kurzes e) / mehr (eh) / Schere (kurzes e) / rege (kurzes e)",
rule:"<div class=rbox><span class=hl>ee</span>: langes e in Fremdwörtern (Idee, See)<br><span class=hl>eh</span>: Dehnungs-h (Befehl, mehr)<br><span class=hl>e</span>: kurzes e (Steg, Schere)</div>"},

{sub:"Lückentext: e / ee / eh",type:"self",
q:"Ergänzen Sie die richtige Schreibweise (-e-, -ee- oder -eh-):\n\nDas S___gel stürzte im heftigen Sturm ins M___r,\nwas uns das Fürchten l___rte.",
model:"Das Segel (kurzes e → e) stürzte im heftigen Sturm ins Meer (langes e → ee),\nwas uns das Fürchten lehrte (langes e → eh).",
rule:"<div class=rbox>Segel → kurzes e<br>Meer → langes e → ee<br>lehrte → langes e → eh</div>"},

{sub:"o / oo / oh",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) M___r\n(b) w___nen\n(c) T___r\n(d) bel___nen\n(e) Z___\n(f) S___n",
o:["Moor / wohnen / Tor / belohnen / Zoo / Sohn",
   "Mohr / wonen / Tohr / belonen / Zoh / Son",
   "Moor / woonen / Toor / belohnen / Zoo / Sohn"],
c:0,
model:"Moor (oo) / wohnen (oh) / Tor (kurzes o) / belohnen (oh) / Zoo (oo) / Sohn (oh)",
rule:"<div class=rbox><span class=hl>oo</span>: langes o ohne h (Moor, Zoo)<br><span class=hl>oh</span>: Dehnungs-h (wohnen, Sohn)<br><span class=hl>o</span>: kurzes o (Tor)</div>"},

{sub:"Lückentext: o / oo / oh",type:"self",
q:"Ergänzen Sie die richtige Schreibweise (-o-, -oo- oder -oh-):\n\nMit dem B___t kamen wir in eine bedr___liche N___tlage.",
model:"Boot (langes o → oo) / bedrohliche (langes o → oh) / Notlage (kurzes o → o)",
rule:"<div class=rbox>Boot → oo<br>bedrohlich → oh<br>Notlage → kurzes o</div>"},

{sub:"eu oder äu? (1)",type:"self",
q:"Ergänzen Sie eu oder äu:\n\na) Vor manchen Geb___den stehen große Z___ne.\nb) Ich fr___e mich, dass ich h___te hier sein kann.\nc) Gute Kr___ter sind beim Kochen von großer Bed___tung.\nd) Schlangen müssen sich h___fig vollständig h___ten.",
model:"a) Gebäuden (bauen → äu) / Zäune (Zaun → äu)\nb) freue (eu) / heute (eu)\nc) Kräuter (Kraut → äu) / Bedeutung (eu)\nd) häufig (Haufen → äu) / häuten (Haut → äu)",
rule:"<div class=rbox><span class=hl>äu</span>: wenn ein verwandtes Wort mit au existiert (Zaun→Zäune, Kraut→Kräuter)<br><span class=hl>eu</span>: kein au-Bezug (freuen, heute, Bedeutung)</div>"},

{sub:"eu oder äu? (2)",type:"self",
q:"Ergänzen Sie eu oder äu:\n\na) H___te müssen die B___me gefällt werden.\nb) Dieses Shampoo sch___mt aber erfrischend stark.\nc) Ich denke, ___re Tr___me können erfüllt werden!\nd) Ich ber___e es nicht, alle L___te eingeladen zu haben.",
model:"a) Heute (eu) / Bäume (Baum → äu)\nb) schäumt (Schaum → äu)\nc) eure (eu) / Träume (Traum → äu)\nd) bereue (eu) / Leute (kein au-Bezug → eu)",
rule:"<div class=rbox>Bäume→Baum, schäumt→Schaum, Träume→Traum → <span class=hl>äu</span><br>bereuen, eure, Leute → kein au-Bezug → <span class=hl>eu</span></div>"},

{sub:"eu oder äu? (Lückentext)",type:"self",
q:"Ergänzen Sie eu oder äu:\n\na) Eine M___er von R___bern stahl die B___te aus dem Geb___de.\nb) In der Sch___ne unter den B___men machten die M___se h___te viel Lärm.\nc) Beim S___bern der t___ren Garten___bel brach n___lich ein Pfosten ab.",
model:"a) Mauer (au) / Räubern (Raub → äu) / Beute (eu) / Gebäude (bauen → äu)\nb) Scheune (eu) / Bäumen (Baum → äu) / Mäuse (Maus → äu) / heute (eu)\nc) Säubern (sauber → äu) / teuren (teuer → eu) / Gartenmöbel (eu) / neulich (eu)",
rule:"<div class=rbox>au-Bezug → <span class=hl>äu</span>. Kein au-Bezug → <span class=hl>eu</span>.</div>"},

{sub:"e oder ä?",type:"self",
q:"Ergänzen Sie e oder ä:\n\na) Die G___ste best___llten eine M___nge Getr___nke.\nb) In der Jugendherb___rge bel___ge ich Brötchen mit K___se und sp___ter noch einige mit Wurst.\nc) Draußen in den G___rten liegen w___rmende D___cken auf den B___nken.",
model:"a) Gäste (Gast) / bestellten (e) / Menge (e) / Getränke (trank)\nb) Jugendherberge (e) / belege (e) / Käse (ä) / später (spät)\nc) Gärten (Garten) / wärmende (warm) / Decken (e) / Bänken (Bank)",
rule:"<div class=rbox><span class=hl>ä</span>: verwandtes Wort mit a vorhanden (Gast, warm, Bank)<br><span class=hl>e</span>: kein a-Bezug (Menge, Herberge, Decke)</div>"}

]},

// ── 2: KONSONANTEN & FREMDWÖRTER ────────────────────────────────
{id:"bbr_konsonanten",title:"Konsonanten & Fremdwörter",emoji:"✍️",color:"#059669",qs:[

{sub:"s / ss / ß (1)",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) genie___en\n(b) das Schlo___\n(c) der Pa___\n(d) pa___en\n(e) wi___en\n(f) der Scho___",
o:["genießen / Schloss / Pass / passen / wissen / Schoß",
   "geniessen / Schloß / Paß / paßen / wißen / Schos",
   "geniesen / Schloss / Pas / pasen / wißen / Schoß"],
c:0,
model:"genießen (ß, langes ie) / Schloss (ss, kurzes o) / Pass (ss, kurzes a) / passen (ss) / wissen (ss) / Schoß (ß, langes o)",
rule:"<div class=rbox><span class=hl>ß</span>: nach langem Vokal oder Diphthong (genießen, Schoß)<br><span class=hl>ss</span>: nach kurzem Vokal (Schloss, Pass, wissen)</div>"},

{sub:"s / ss / ß (Lückentext)",type:"self",
q:"Ergänzen Sie s, ss oder ß:\n\nLutz will Ella noch den Weg wei___en, bevor er zum Fu___balltraining mu___.\nEr schickt sie zum wei___en Strand.",
model:"weißen (langes ei → ß) / Fußball (langes u → ß) / muss (kurzes u → ss) / weißen (langes ei → ß)",
rule:"<div class=rbox><span class=hl>ß</span>: langer Vokal oder Diphthong (weiß, Fuß)<br><span class=hl>ss</span>: kurzer Vokal (muss)</div>"},

{sub:"z / tz / zz (1)",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) Kreu___ung\n(b) Ja___\n(c) plöt___lich\n(d) schmel___en\n(e) Wur___el\n(f) Pi___a",
o:["Kreuzung / Jazz / plötzlich / schmelzen / Wurzel / Pizza",
   "Kreutzung / Jaz / plözlich / schmelzzen / Wurtzel / Piza",
   "Kreuzung / Jatz / plötzlich / schmelzen / Wurzel / Pitza"],
c:0,
model:"Kreuzung (z, Diphthong eu) / Jazz (zz, Fremdwort) / plötzlich (tz, kurzes ö) / schmelzen (z) / Wurzel (z) / Pizza (zz, Fremdwort)",
rule:"<div class=rbox><span class=hl>tz</span>: nach kurzem Vokal (plötzlich)<br><span class=hl>z</span>: nach langem Vokal, Diphthong oder Konsonant (Kreuzung, Wurzel)<br><span class=hl>zz</span>: in Fremdwörtern (Pizza, Jazz)</div>"},

{sub:"z / tz / zz (2)",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) schüt___en\n(b) Gla___e\n(c) Bre___el\n(d) nüt___lich\n(e) ergän___en\n(f) Mo___arella",
o:["schützen / Glatze / Brezel / nützlich / ergänzen / Mozzarella",
   "schüzzen / Glazze / Bretzel / nüzlich / ergänzzen / Mozarella",
   "schützen / Glatze / Brezzel / nützlich / ergänzen / Motzarella"],
c:0,
model:"schützen (tz, kurzes ü) / Glatze (tz, kurzes a) / Brezel (z, langes e) / nützlich (tz) / ergänzen (z, langes ä) / Mozzarella (zz, Fremdwort)",
rule:"<div class=rbox><span class=hl>tz</span>: kurzer Vokal (schützen, Glatze, nützlich)<br><span class=hl>z</span>: langer Vokal (Brezel, ergänzen)<br><span class=hl>zz</span>: Fremdwort (Mozzarella)</div>"},

{sub:"z / tz / zz (Lückentext)",type:"self",
q:"Ergänzen Sie z, tz oder zz:\n\na) Beim Pu___eln gibt es für jedes Teil nur einen bestimmten Pla___.\nb) Der Künstler ski___ierte die Turmspi___e mit einem Bleistift.",
model:"a) Puzzeln (zz, Fremdwort) / Platz (tz, kurzes a)\nb) skizzierte (zz, Fremdwort) / Turmspitze (tz, kurzes i)",
rule:"<div class=rbox><span class=hl>tz</span>: kurzer Vokal (Platz, Spitze)<br><span class=hl>zz</span>: Fremdwörter (Puzzle, Skizze)</div>"},

{sub:"x / chs / gs (1)",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) mi___en\n(b) allerdin___\n(c) verwec___eln\n(d) A___t\n(e) Fuc___\n(f) anfan___",
o:["mischen / allerdings / verwechseln / Axt / Fuchs / anfangs",
   "mixen / allerdinchs / verwexeln / Achst / Fux / anfancs",
   "mischen / allerdinx / verwegseln / Agst / Fugs / anfangs"],
c:0,
model:"mischen / allerdings / verwechseln / Axt / Fuchs / anfangs",
rule:"<div class=rbox><span class=hl>chs</span>: spricht sich wie 'ks' (Fuchs, verwechseln)<br><span class=hl>gs</span>: Wortende erkennbar an Stamm (anfangs von Anfang)<br><span class=hl>x</span>: in Fremdwörtern</div>"},

{sub:"x / chs / gs (Lückentext)",type:"self",
q:"Ergänzen Sie x, chs oder gs:\n\nDie Eide___e bewegte sich geradewe___ auf die Bo___ zu.",
model:"Eidechse (chs) / geradewegs (gs, von Weg) / Box (x, Fremdwort)",
rule:"<div class=rbox>Eidechse → chs (spricht wie ks)<br>geradewegs → gs (Weg→-gs)<br>Box → x (Fremdwort)</div>"},

{sub:"x / cks / ks",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) Pra___is\n(b) Kle___s\n(c) zwe___s\n(d) Komple___\n(e) Ke___\n(f) hinterrü___s",
o:["Praxis / Klecks / zwecks / Komplex / Keks / hinterrücks",
   "Praksis / Klex / zwexs / Komplecks / Kex / hinterrück",
   "Praxis / Kleks / zweks / Kompleks / Kecks / hinterrücks"],
c:0,
model:"Praxis (x) / Klecks (cks) / zwecks (cks) / Komplex (x) / Keks (ks) / hinterrücks (cks)",
rule:"<div class=rbox><span class=hl>x</span>: Fremdwörter (Praxis, Komplex)<br><span class=hl>cks</span>: von -ck abgeleitet (Klecks, hinterrücks)<br><span class=hl>ks</span>: einfache Form (Keks, links)</div>"},

{sub:"x / cks / ks (Lückentext)",type:"self",
q:"Ergänzen Sie x, cks oder ks:\n\nDer Ta___ifahrer blinkte lin___, fuhr aber schnurstra___ geradeaus.",
model:"Taxi (x, Fremdwort) / links (ks) / schnurstracks (cks, von Strack)",
rule:"<div class=rbox>Taxi → x (Fremdwort)<br>links → fester Bestandteil nks<br>schnurstracks → cks (von Strack)</div>"},

{sub:"-g oder -k am Wortende",type:"self",
q:"Ergänzen Sie g oder k:\n\na) Dieser Schran___ ist sehr alt und wertvoll.\nb) Er san___ vor Erschöpfung zusammen.\nc) Am Bu___ des Schiffes stand der Kapitän.\nd) Ein Auto bo___ schnell um die Ecke.\ne) Sie san___ dem Kind ein Schlaflied vor.\nf) Die Lampe war aus Kerami___.",
model:"a) Schrank (k – Schränke)\nb) sank (k – sinken)\nc) Bug (g – biegen)\nd) bog (g – biegen)\ne) sang (g – singen)\nf) Keramik (k – Keramiken)",
rule:"<div class=rbox>Ableitung hilft:<br><span class=hl>-k</span>: Schrank→Schränke, sank→sinken<br><span class=hl>-g</span>: Bug→biegen, sang→singen</div>"},

{sub:"-d oder -t am Wortende",type:"self",
q:"Ergänzen Sie d oder t:\n\na) Vor Weihnachten ist die Ungedul___ der Kinder sehr groß.\nb) Der Wir___ hat das Lokal neu übernommen.\nc) Sei___ diesem Sommer kann sie schwimmen.\nd) Man konnte ihm ansehen, wie lei___ es ihm tat.\ne) Sei___ bitte um 21.00 Uhr zurück.\nf) Heute wir___ der Tag wunderschön.",
model:"a) Ungeduld (d – ungeduldig)\nb) Wirt (t – Wirte)\nc) Seit (t – seither, zeitlich)\nd) leid (d – Leiden)\ne) Seid (d – ihr seid)\nf) wird (d – werden)",
rule:"<div class=rbox>Ableitung hilft:<br><span class=hl>-d</span>: ungeduldig, Leiden, seid, werden<br><span class=hl>-t</span>: Wirte, seither</div>"},

{sub:"-nd oder -nt",type:"self",
q:"Ergänzen Sie nd oder nt:\n\na) Der Drachen im Wi___ ist besonders schön bu___.\nb) Der Diama___ ist fast ganz ru___.",
model:"a) Wind (nd) / bunt (nt)\nb) Diamant (nt) / rund (nd)",
rule:"<div class=rbox><span class=hl>-nd</span>: weicher Auslaut (Wind, rund)<br><span class=hl>-nt</span>: härterer Auslaut (bunt, Diamant)</div>"},

{sub:"-g oder -ch (Adjektivendungen)",type:"self",
q:"Ergänzen Sie g oder ch:\n\na) Es ist wichtig, bei allen Aufgaben fröhli___ zu bleiben.\nb) Manches ist langweili___, manches ganz lusti___.",
model:"a) fröhlich (-lich ist Adjektivendung)\nb) langweilig / lustig (-ig klingt wie -ich, wird aber -ig geschrieben!)",
rule:"<div class=rbox><span class=hl>-lich</span>: fröhlich, herrlich, wöchentlich<br><span class=hl>-ig</span>: lustig, langweilig → wird wie -ich gesprochen, aber -ig geschrieben!</div>"},

{sub:"V oder W?",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) die ___itamine\n(b) das ___rack\n(c) die ___ioline\n(d) die ___itwe\n(e) die ___illa\n(f) der ___ampir",
o:["Vitamine / Wrack / Violine / Witwe / Villa / Vampir",
   "Witamine / Vrack / Wioline / Vitve / Willa / Wampir",
   "Vitamine / Wrack / Wioline / Witwe / Villa / Vampir"],
c:0,
model:"Vitamine (V, Fremdwort) / Wrack (W, deutsches Wort) / Violine (V, Fremdwort) / Witwe (W, deutsches Wort) / Villa (V, Fremdwort) / Vampir (V, Fremdwort)",
rule:"<div class=rbox>Deutsche Wörter meist <span class=hl>W</span> (Wrack, Witwe, Wasser, war)<br>Fremdwörter meist <span class=hl>V</span> (Violine, Villa, Vampir, Vitamine)</div>"},

{sub:"V oder W? (Lückentext)",type:"self",
q:"Ergänzen Sie V/v oder W/w:\n\nDas ___asser in der Blumen___ase ___ar erfault.",
model:"Wasser (W, deutsches Wort) / Blumenvase (V, Fremdwort) / war (W, von sein)",
rule:"<div class=rbox>Wasser, war → deutsche Wörter → <span class=hl>W</span><br>Vase → Fremdwort → <span class=hl>V</span></div>"},

{sub:"Fremdwörter korrekt schreiben",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) Foto___fie\n(b) Reserv___ierung\n(c) Exk___sion\n(d) Tour___ismus\n(e) Sa___son",
o:["Fotografie / Reservierung / Exkursion / Tourismus / Saison",
   "Fotographie / Reservirung / Exkorsion / Turismus / Saisong",
   "Fotografie / Reservierung / Exkusion / Tourismus / Saîson"],
c:0,
model:"Fotografie / Reservierung / Exkursion / Tourismus / Saison",
rule:"<div class=rbox>Fremdwörter folgen der Herkunftssprache:<br>Fotografie (griech.) / Reservierung (lat.) / Exkursion (lat.) / Tourismus (frz.) / Saison (frz.)</div>"}

]},

// ── 3: GROß-/KLEINSCHREIBUNG & GETRENNTSCHREIBUNG ───────────────
{id:"bbr_gross_klein",title:"Groß-/Kleinschreibung & Getrenntschreibung",emoji:"🔠",color:"#dc2626",qs:[

{sub:"Groß oder klein? (1)",type:"self",
q:"Ergänzen Sie den richtigen Anfangsbuchstaben:\n\na) Ich möchte meinen ___esten ___reund besuchen.\nb) Das ___ufräumen ist für uns alle anstrengend.\nc) Wir brauchen für die Hochzeit noch etwas ___laues.",
model:"a) besten (Adjektiv → klein) / Freund (Nomen → groß)\nb) Aufräumen (substantiviertes Verb → groß)\nc) Blaues (substantiviertes Adjektiv nach etwas → groß)",
rule:"<div class=rbox>Substantivierte Verben (Aufräumen) → GROSS<br>nach etwas/nichts/alles + Adj → GROSS (etwas Blaues)<br>Adjektive als Eigenschaft → klein (bester)</div>"},

{sub:"Groß oder klein? (2)",type:"self",
q:"Ergänzen Sie den richtigen Anfangsbuchstaben:\n\na) Dafür muss der ___rüne ___tift genutzt werden.\nb) Ihm macht das ___anzen immer wieder viel Spaß.\nc) In den nächsten Tagen wird nichts ___eues passieren.",
model:"a) grüne (Farbadjektiv → klein) / Stift (Nomen → groß)\nb) Tanzen (substantiviertes Verb → groß)\nc) Neues (nach nichts → groß)",
rule:"<div class=rbox>Farbadjektive → klein (grüne)<br>Substantiviertes Verb → GROSS (Tanzen)<br>nichts/etwas + Adj → GROSS (Neues)</div>"},

{sub:"Groß oder klein? (3)",type:"self",
q:"Ergänzen Sie den richtigen Anfangsbuchstaben:\n\na) Heute bin ich zu spät zum ___chwimmen gekommen.\nb) Das Training ist die ___ichtigste Freizeitbeschäftigung.\nc) Die ___üngste in unserer Gruppe ist die ___chnellste Schwimmerin.\nd) Mein Bruder kam zu spät zum ___ssen. Das ___arten wurde zu lang,\n   deshalb begannen wir schon vor ihm zu ___ssen.",
model:"a) Schwimmen (zum + Nomen → groß)\nb) wichtigste (Adjektiv → klein)\nc) Jüngste (Superlativ als Nomen → groß) / schnellste (Adjektiv → klein)\nd) Essen (zum + Nomen → groß) / Warten (Nomen → groß) / essen (Verb mit zu → klein)",
rule:"<div class=rbox>nach zum/beim → GROSS<br>als Verb mit zu → klein (zu essen)<br>Superlativ ohne Bezugsnomen → GROSS (die Jüngste)</div>"},

{sub:"Anredepronomen",type:"self",
q:"Groß oder klein?\n\na) Wir bedanken uns für i/Ihr Verständnis.\nb) In Erwartung i/Ihrer Rückäußerung verbleibe i/Ich mit freundlichen Grüßen.\nc) Ich schreibe i/Ihnen, weil ich s/Sie um einen Gefallen bitten möchte.",
model:"a) Ihr Verständnis (höfliche Anrede → GROSS)\nb) Ihrer Rückäußerung (GROSS) / ich (Personalpronomen → klein)\nc) Ihnen (GROSS) / Sie (GROSS)",
rule:"<div class=rbox>Höfliche Anrede (Sie, Ihr, Ihnen) → immer GROSS<br>Persönliche Pronomen (ich, du) → klein</div>"},

{sub:"Sätze richtig schreiben (1)",type:"self",
q:"Schreiben Sie richtig:\n\na) Beim einkauf sollte man die preise vergleichen.\nb) Manchmal verführt eine interessant aussehende verpackung die kunden.\nc) Ein einkaufszettel schützt vor unnötigen geldausgaben.",
model:"a) Beim Einkauf sollte man die Preise vergleichen.\nb) Manchmal verführt eine interessant aussehende Verpackung die Kunden.\nc) Ein Einkaufszettel schützt vor unnötigen Geldausgaben.",
rule:"<div class=rbox>Alle Nomen GROSS: Einkauf, Preise, Verpackung, Kunden, Einkaufszettel, Geldausgaben<br>Adjektive → klein (interessant aussehend)</div>"},

{sub:"Sätze richtig schreiben (2)",type:"self",
q:"Schreiben Sie richtig:\n\na) Die generalprobe verlief reibungslos und zufriedenstellend.\nb) Alle beteiligten bereiten sich fieberhaft auf die erste vorstellung vor.\nc) Eine aufführung in der aula ist immer eine spannende angelegenheit.",
model:"a) Die Generalprobe verlief reibungslos und zufriedenstellend.\nb) Alle Beteiligten bereiten sich fieberhaft auf die erste Vorstellung vor.\nc) Eine Aufführung in der Aula ist immer eine spannende Angelegenheit.",
rule:"<div class=rbox>Nomen GROSS: Generalprobe, Beteiligten, Vorstellung, Aufführung, Aula, Angelegenheit<br>Adjektive klein: erste, spannend</div>"},

{sub:"Sätze richtig schreiben (3)",type:"self",
q:"Schreiben Sie richtig:\n\na) Nach dem essen soll sich der mensch bewegen.\nb) Für die konzentration sind regelmäßige mahlzeiten wichtig.\nc) Wasser ist bei uns im überfluss vorhanden, in anderen Ländern jedoch mangelware.\nd) Oft stellen überschwemmungen etwas gefährliches dar.",
model:"a) Nach dem Essen soll sich der Mensch bewegen.\nb) Für die Konzentration sind regelmäßige Mahlzeiten wichtig.\nc) Wasser ist bei uns im Überfluss vorhanden, in anderen Ländern jedoch Mangelware.\nd) Oft stellen Überschwemmungen etwas Gefährliches dar.",
rule:"<div class=rbox>Nomen GROSS: Essen, Mensch, Konzentration, Mahlzeiten, Überfluss, Mangelware, Überschwemmungen<br>etwas Gefährliches → substantiviertes Adjektiv → GROSS</div>"},

{sub:"Tageszeiten & Eigennamen",type:"mc",
q:"Groß oder klein?\n(a) Bei Regen spielen sie ___ (donnerstags / Donnerstags) in der Halle.\n(b) Zum größten ___ (teil / Teil) gab er mir Recht.\n(c) Er studiert an der ___ (technischen / Technischen) Universität Berlin.",
o:["Donnerstags / teil / Technischen",
   "donnerstags / Teil / Technischen",
   "donnerstags / Teil / technischen"],
c:1,
model:"donnerstags (Adverb auf -s → klein) / Teil (Nomen → groß) / Technischen (Teil eines Eigennamens → groß)",
rule:"<div class=rbox>Wochentage auf -s → Adverb → klein (donnerstags, montags)<br>Nomen → GROSS (Teil)<br>Eigenname / feste Bezeichnung → GROSS (Technische Universität)</div>"},

{sub:"frei sprechen / freisprechen",type:"mc",
q:"Welche Schreibweise ist korrekt?\n(a) Im Vortrag sollte man möglichst ___ reden.\n(b) Der Richter hat den Angeklagten ___.",
o:["freisprechen / freisprechen",
   "frei sprechen / freigesprochen",
   "freisprechen / frei gesprochen"],
c:1,
model:"frei sprechen (wörtlich: ohne Manuskript sprechen) / freigesprochen (für unschuldig erklärt)",
rule:"<div class=rbox><span class=hl>frei sprechen</span>: wörtliche Bedeutung → getrennt<br><span class=hl>freisprechen</span>: für unschuldig erklären → zusammen (feste Bedeutung)</div>"},

{sub:"schwerfallen / Klavier üben",type:"mc",
q:"Welche Schreibweise ist korrekt?\n(a) Diese Aufgaben werden mir nicht ___.\n(b) Mir macht das ___ großen Spaß.",
o:["schwer fallen / Klavier üben",
   "schwerfallen / Klavier üben",
   "schwerfallen / Klavierüben"],
c:2,
model:"schwerfallen (Mühe machen → zusammen) / Klavierüben (substantiviert → zusammen und GROSS)",
rule:"<div class=rbox><span class=hl>schwerfallen</span>: Mühe machen (übertragen) → zusammen<br><span class=hl>Klavierüben</span>: als Nomen gebraucht → zusammen + GROSS<br><span class=hl>Klavier üben</span>: als Tätigkeit → getrennt</div>"},

{sub:"end- oder ent-?",type:"self",
q:"Ergänzen Sie end- oder ent-:\n\na) Er hat ___lich sein Fahrrad repariert.\nb) Ich bin ___täuscht von seiner Reaktion.\nc) Der Marathonläufer setzte zu seinem ___spurt an.",
model:"a) endlich (Ende → end-)\nb) enttäuscht (ent- = weg, gegen)\nc) Endspurt (Schlussspurt → end-)",
rule:"<div class=rbox><span class=hl>end-</span>: Ende, Schluss (endlich, Endspurt, Endstation)<br><span class=hl>ent-</span>: Trennung oder Gegenteil (enttäuscht, entfernen)</div>"},

{sub:"wieder oder wider? (1)",type:"self",
q:"Ergänzen Sie wieder oder wider:\n\na) Ich möchte dich gerne ___sehen.\nb) Es ___strebt ihr, sich zu entschuldigen.\nc) Er hat das Buch ___holt gelesen.\nd) Er ___spricht sich.\ne) Die Großmutter konnte nach der Operation ___ laufen.",
model:"a) wiedersehen (wieder = noch einmal)\nb) widerstrebt (wider = gegen)\nc) wiederholt (wieder = erneut)\nd) widerspricht (wider = gegen)\ne) wieder laufen (wieder = erneut; Verb getrennt)",
rule:"<div class=rbox><span class=hl>wieder</span>: noch einmal, erneut (Eselsbrücke: nochmal wie der Anfang)<br><span class=hl>wider</span>: gegen (Widerspruch, Widerstand)</div>"},

{sub:"wieder oder wider? (2)",type:"self",
q:"Unterstreichen Sie die richtige Schreibweise:\n\na) Die neue Chefin will die Vorschriften wider/wieder einführen.\nb) Die Klasse wird die Aufführung widerholen/wiederholen.\nc) Es hat ihr widerstrebt/wiederstrebt, die Hausaufgaben zu machen.\nd) Er hat alle Bücher wider/wieder zurückgebracht.\ne) Du widersprichst/wiedersprichst dir.",
model:"a) wieder (erneut einführen)\nb) wiederholen (nochmals)\nc) widerstrebt (gegen den Willen)\nd) wieder (zurückgebracht)\ne) widersprichst (dagegensprechen)",
rule:"<div class=rbox>Wiederholung/erneut → <span class=hl>wieder</span><br>Gegen etwas → <span class=hl>wider</span></div>"},

{sub:"wieder oder wider? (3)",type:"mc",
q:"Welche Schreibweise ist richtig?\n(a) Ihre ___ ließ keiner gelten.\n(b) Die ___ des Projekts wurde rechtzeitig geplant.\n(c) Der ___ konnte im Versuch gemessen werden.\n(d) Hin und ___ klappt es gut.",
o:["Widerrede / Wiederholung / Widerstand / wieder",
   "Wiederrede / Widerholung / Wiederstand / wider",
   "Widerrede / Widerholung / Widerstand / wider"],
c:0,
model:"Widerrede (Gegenrede) / Wiederholung (nochmal) / Widerstand (Gegenwehr) / wieder (hin und wieder = ab und zu)",
rule:"<div class=rbox><span class=hl>Wider-</span>: gegen (Widerrede, Widerstand, Widerspruch)<br><span class=hl>Wieder-</span>: nochmal (Wiederholung, Wiederwahl, Wiederaufbau)</div>"}

]},

// ── 4: GRAMMATIK ────────────────────────────────────────────────
{id:"bbr_grammatik",title:"Grammatik",emoji:"📘",color:"#0891b2",qs:[

{sub:"Vorsilbe vor zwei Wörtern",type:"self",
q:"Setzen Sie denselben Wordbaustein (Ver-/ver-, voll-, Vor-/vor-, vier) so ein,\ndass er zu beiden Wörtern passt:\n\na) ziehen + bringen →\nb) brecher + kehr →\nc) wärts + tragen →\nd) knoten + tragen →\ne) fach + händig →\nf) band + teidigung →",
model:"a) ver- (verziehen / verbringen)\nb) Ver- (Verbrecher / Verkehr)\nc) vor- (vorwärts / vortragen)\nd) ver- (verknoten / vertragen)\ne) vier- (vierfach / vierhändig)\nf) Ver- (Verband / Verteidigung)",
rule:"<div class=rbox>Gleiche Vorsilbe muss zu beiden Wörtern passen:<br>ver-: verziehen, verbringen, Verbrecher...<br>vor-: vorwärts, vortragen<br>vier-: vierfach, vierhändig</div>"},

{sub:"Unbestimmter Artikel",type:"mc",
q:"Welcher Artikel ist richtig?\n(a) Wir brauchen noch ___ helfende Hand.\n(b) Dazu habe ich noch ___ Artikel gelesen.\n(c) ___ guten Freund hilft man gern.\n(d) Das ist ___ großer Erfolg!",
o:["eine / einen / Einem / ein",
   "eine / einen / Ein / ein",
   "einen / eine / Einem / ein"],
c:0,
model:"eine Hand (f, Nom.) / einen Artikel (m, Akk.) / Einem Freund (m, Dat.) / ein Erfolg (m, Nom.)",
rule:"<div class=rbox>Maskulinum: Nom. <span class=hl>ein</span>, Akk. <span class=hl>einen</span>, Dat. <span class=hl>einem</span><br>Femininum Nom./Akk.: <span class=hl>eine</span><br>Neutrum Nom./Akk.: <span class=hl>ein</span></div>"},

{sub:"Bestimmter Artikel",type:"self",
q:"Ergänzen Sie den richtigen bestimmten Artikel (der/die/das/dem/den):\n\na) Wir möchten uns sehr für ___ Einladung bedanken.\nb) Wir freuen uns auch schon sehr auf ___ Geburtstag!\nc) Auch an ___ Geschenk beteiligen wir uns gern.\nd) Vor ___ Feier müssen wir uns schick anziehen.",
model:"a) die Einladung (f, Akk. nach für)\nb) den Geburtstag (m, Akk. nach auf)\nc) dem Geschenk (n, Dat. nach an)\nd) der Feier (f, Dat. nach vor)",
rule:"<div class=rbox>für + Akk. / auf + Akk. / an + Dat. / vor + Dat.<br>Einladung (f), Geburtstag (m), Geschenk (n), Feier (f)</div>"},

{sub:"Bestimmter vs. unbestimmter Artikel",type:"self",
q:"Ergänzen Sie den richtigen Artikel:\n\nRebecca hat ___ neuen Computer bekommen.\n___ Computer hat ___ besonders guten Bildschirm.",
model:"Rebecca hat einen neuen Computer bekommen. (neu eingeführt → unbestimmt)\nDer Computer hat einen besonders guten Bildschirm. (bekannt → bestimmt / Bildschirm neu → unbestimmt)",
rule:"<div class=rbox>Neu eingeführt → <span class=hl>unbestimmter Artikel</span> (ein/eine)<br>Bekannt, bereits erwähnt → <span class=hl>bestimmter Artikel</span> (der/die/das)</div>"},

{sub:"Adjektivdeklination (1)",type:"self",
q:"Setzen Sie das Adjektiv in der richtigen Form ein:\n\na) Die ___ (schön) Feier werden wir nicht vergessen.\nb) Den ___ (neu) Schüler begrüßen wir morgen.\nc) Ich mag diesen ___ (grün) Mantel.\nd) Die ___ (groß) Begeisterung blieb leider aus.",
model:"a) schöne (Feier, f, Akk., schwach nach die)\nb) neuen (Schüler, m, Akk., schwach nach den)\nc) grünen (Mantel, m, Akk., schwach nach diesen)\nd) große (Begeisterung, f, Nom., schwach nach die)",
rule:"<div class=rbox>Nach bestimmtem Artikel (der/die/das/diesen) → <span class=hl>schwache Deklination</span>: Nom. -e, alles andere -en</div>"},

{sub:"Adjektivdeklination (2)",type:"self",
q:"Setzen Sie das Adjektiv in der richtigen Form ein:\n\na) Das ___ (heiß) Essen wurde schnell kalt.\nb) Die ___ (laut) Stimmen drangen durch die Tür.\nc) Das Haus auf dem ___ (flach) Hügel gefiel uns.\nd) Im Winter muss man mit ___ (eisig) Winden rechnen.\ne) Bei ___ (klar) Sicht kann man kilometerweit sehen.",
model:"a) heiße (das, Nom., schwach)\nb) lauten (die, Pl., schwach)\nc) flachen (dem, Dat., schwach)\nd) eisigen (den, Pl. Dat., schwach)\ne) klarer (bei, Dat., f, gemischt)",
rule:"<div class=rbox>Nach bestimmtem Artikel → schwache Deklination: Nom. <span class=hl>-e</span>, sonst <span class=hl>-en</span></div>"},

{sub:"Adjektivdeklination (3)",type:"self",
q:"Setzen Sie das Adjektiv in der richtigen Form ein:\n\na) Das ___ (warm) Wetter hielt lange an.\nb) Die ___ (leicht) Aufgaben waren schnell erledigt.\nc) Aus dem ___ (hell) Flur drang Licht ins Zimmer.\nd) Ein ___ (klein) Teilchen fehlte noch.\ne) Bei ___ (schnell) Tempo kann man Schilder nicht lesen.",
model:"a) warme (das, Nom., schwach)\nb) leichten (die, Pl., schwach)\nc) hellen (dem, Dat., schwach)\nd) kleines (ein, Nom., n, gemischt)\ne) schnellem (bei, Dat., n, gemischt → kein Artikel → starke Endung)",
rule:"<div class=rbox>Nach best. Artikel → schwach (-e/-en)<br>Nach unbest. Artikel → gemischt: Nom./Akk. n: <span class=hl>-es</span>; m: <span class=hl>-er</span><br>Dat. ohne Artikel → stark: <span class=hl>-em</span></div>"},

{sub:"Pronomen einsetzen",type:"self",
q:"Ersetzen Sie das unterstrichene Nomen durch ein Personalpronomen:\n\na) Ein Fenster ging zu Bruch. ___ muss repariert werden.\nb) Erst spät sind die Wanderer angekommen. ___ sind sehr hungrig.\nc) Die Mannschaft hatte viele Torchancen, aber ___ hat sie nicht genutzt.\nd) Ein alter Mann hatte sich verlaufen, weshalb ___ mich nach dem Weg fragte.\ne) Elli nimmt das Fahrrad, weil ___ für ___ das liebste Transportmittel ist.",
model:"a) Es (Fenster = Neutrum)\nb) Sie (Wanderer = Plural)\nc) sie (Mannschaft = Femininum, Sg.)\nd) er (Mann = Maskulinum)\ne) es (Fahrrad = Neutrum) / sie (Elli = Femininum)",
rule:"<div class=rbox>Pronomen richtet sich nach Genus und Numerus:<br>m → <span class=hl>er</span> | f → <span class=hl>sie</span> | n → <span class=hl>es</span> | Pl. → <span class=hl>sie</span></div>"},

{sub:"Verben auswählen: fallen-Komposita",type:"self",
q:"Wählen Sie das passende Verb (ausfallen, gefallen, befallen):\n\na) Das Konzert muss heute leider ___.\nb) Sie tut alles, um ihr zu ___.\nc) Der Hund muss zum Arzt, weil er von Flöhen ___ ist.",
model:"a) ausfallen (abgesagt werden)\nb) gefallen (Freude bereiten)\nc) befallen (von Parasiten heimgesucht werden)",
rule:"<div class=rbox>ausfallen = nicht stattfinden<br>gefallen = jemandem angenehm sein<br>befallen = von Krankheit/Parasiten heimgesucht</div>"},

{sub:"Zeitformen (1)",type:"self",
q:"Verb in angegebener Zeitform:\n\na) Präsens: Abends ___ ich immer ein paar Seiten ___. (lesen)\nb) Präteritum: Die Hauptdarstellerin ___ großartig ___. (spielen)\nc) Perfekt: Wir ___ das Spiel leider ___. (verlieren)",
model:"a) lese\nb) spielte\nc) haben / verloren",
rule:"<div class=rbox>Präsens: ich lese<br>Präteritum: spielte (-te, schwaches Verb)<br>Perfekt: haben + Partizip II (verloren)</div>"},

{sub:"Zeitformen (2)",type:"self",
q:"Verb in angegebener Zeitform:\n\na) Präsens: Herr Schöller ___ (sein) Friseur.\nb) Präteritum: Er ___ (lernen) am Oberstufenzentrum Körperpflege.\nc) Perfekt (direkte Rede): Schon als Kind ___ ich mich für Frisuren ___. (sich interessieren)",
model:"a) ist\nb) lernte\nc) habe / interessiert (habe mich interessiert)",
rule:"<div class=rbox>sein → Präsens: ist<br>lernen → Präteritum: lernte (schwach)<br>sich interessieren → Perfekt: habe mich interessiert</div>"},

{sub:"Konjugationstabelle (1)",type:"self",
q:"Ergänzen Sie die fehlenden Verbformen:\n\nmeinen: Perfekt ihr ___ / Futur I wir ___\nspringen: Perfekt ihr ___ / Futur I ihr ___\nkochen: Präteritum ihr ___ / Perfekt er ___",
model:"meinen: ihr habt gemeint / wir werden meinen\nspringen: ihr seid gesprungen / ihr werdet springen\nkochen: ihr kochtet / er hat gekocht",
rule:"<div class=rbox>Perfekt: haben/sein + Partizip II<br>springen → Perfekt mit <span class=hl>sein</span> (Bewegungsverb)<br>Futur I: werden + Infinitiv</div>"},

{sub:"Konjugationstabelle (2)",type:"self",
q:"Ergänzen Sie die fehlenden Verbformen:\n\nrennen: Perfekt ihr ___ / Futur I wir ___\nspielen: Perfekt ihr ___ / Futur I ihr ___\nsagen: Präteritum ihr ___ / Perfekt er ___",
model:"rennen: ihr seid gerannt / wir werden rennen\nspielen: ihr habt gespielt / ihr werdet spielen\nsagen: ihr sagtet / er hat gesagt",
rule:"<div class=rbox>rennen → Perfekt mit <span class=hl>sein</span> (Bewegungsverb)<br>spielen, sagen → schwach: haben + Partizip II</div>"},

{sub:"Satz in vorgegebener Zeitform",type:"self",
q:"Schreiben Sie den Satz in der angegebenen Zeitform:\n\na) Ich plane eine Reise. → Futur I:\nb) Sie reden über den Film. → Präteritum:\nc) Wir besuchen das Museum. → Perfekt:\nd) Du lachst viel. → Perfekt:\ne) Er fährt mit dem Zug. → Präteritum:",
model:"a) Ich werde eine Reise planen.\nb) Sie redeten über den Film.\nc) Wir haben das Museum besucht.\nd) Du hast viel gelacht.\ne) Er fuhr mit dem Zug.",
rule:"<div class=rbox>Futur I: werden + Infinitiv<br>Präteritum schwach: -te (redeten)<br>Präteritum stark: fuhr (fahren)<br>Perfekt: haben + Partizip II</div>"},

{sub:"Verben auswählen (Kollokationen)",type:"self",
q:"Ergänzen Sie das passende Verb:\n\na) Der Ausbilder musste viele Anweisungen ___. (geben / halten / machen)\nb) Auf der Feier sollte sie eine Rede ___. (geben / halten / machen)\nc) Er wollte das Gespräch mit dem Lehrling ___. (entwerfen / führen / ablegen)\nd) Am Anfang mussten sie einen Plan ___. (entwerfen / führen / ablegen)",
model:"a) geben (Anweisungen geben = erteilen)\nb) halten (eine Rede halten)\nc) führen (ein Gespräch führen)\nd) entwerfen (einen Plan entwerfen = konzipieren)",
rule:"<div class=rbox>Feste Verbindungen (Kollokationen):<br>Anweisungen <span class=hl>geben</span> / Rede <span class=hl>halten</span> / Gespräch <span class=hl>führen</span> / Plan <span class=hl>entwerfen</span></div>"},

{sub:"Komposita mit/ohne Fugenelement (1)",type:"self",
q:"Setzen Sie die Begriffe richtig zusammen:\n\na) Reinigung + Kraft →\nb) Spiel + Platz →\nc) Maschine + Bau →\nd) Fan + Club →",
model:"a) Reinigungskraft (mit Fugenelement -s-)\nb) Spielplatz (ohne Fugenelement)\nc) Maschinenbau (mit Fugenelement -n-)\nd) Fanclub (ohne Fugenelement)",
rule:"<div class=rbox><span class=hl>Mit Fugenelement</span>: Reinigung + -s- + Kraft, Maschine + -n- + Bau<br><span class=hl>Ohne Fugenelement</span>: Spielplatz, Fanclub</div>"},

{sub:"Komposita mit/ohne Fugenelement (2)",type:"self",
q:"Setzen Sie die Begriffe richtig zusammen:\n\na) Geburtstag + Feier →\nb) Keller + Tür →\nc) Hals + Kette →\nd) Tasche + Tuch →",
model:"a) Geburtstagsfeier (mit Fugenelement -s-)\nb) Kellertür (ohne Fugenelement)\nc) Halskette (ohne Fugenelement)\nd) Taschentuch (ohne Fugenelement)",
rule:"<div class=rbox>Geburtstag + <span class=hl>-s-</span> + Feier → Geburtstagsfeier<br>Keller, Hals, Tasche: kein Fugenelement nötig</div>"}

]},

// ── 5: SATZLEHRE & ZEICHENSETZUNG ───────────────────────────────
{id:"bbr_satzlehre",title:"Satzlehre & Zeichensetzung",emoji:"🔗",color:"#9333ea",qs:[

{sub:"Satzgefüge bilden (1)",type:"self",
q:"Bilden Sie ein Satzgefüge mit der angegebenen Konjunktion:\n\na) Sie ist abfahrbereit. Sie hat bereits gepackt. (da)\nb) Ich komme pünktlich. Die U-Bahn ist zu spät gekommen. (obwohl)\nc) Ich hatte den Aufsatz zu Ende geschrieben. Ich konnte ihn abschicken. (nachdem)",
model:"a) Sie ist abfahrbereit, da sie bereits gepackt hat.\nb) Ich komme pünktlich, obwohl die U-Bahn zu spät gekommen ist.\nc) Nachdem ich den Aufsatz zu Ende geschrieben hatte, konnte ich ihn abschicken.",
rule:"<div class=rbox>da (Grund), obwohl (Gegensatz), nachdem (Vorzeitigkeit) → alle Verb ans Ende<br>Komma zwischen Haupt- und Nebensatz</div>"},

{sub:"Satzgefüge bilden (2)",type:"self",
q:"Bilden Sie ein Satzgefüge:\n\na) Ich muss früh aufstehen. Wir fahren an die Ostsee. (weil)\nb) Du solltest die Blumen gießen. Sie blühen besonders schön. (damit)\nc) Ich kann mit in den Park. Du hilfst mir bei den Hausaufgaben. (wenn)\nd) Nuria geht oft ins Fitnessstudio. Sie will bessere Kondition. (denn)",
model:"a) Ich muss früh aufstehen, weil wir an die Ostsee fahren.\nb) Du solltest die Blumen gießen, damit sie besonders schön blühen.\nc) Ich kann mit in den Park kommen, wenn du mir bei den Hausaufgaben hilfst.\nd) Nuria geht oft ins Fitnessstudio, denn sie will eine bessere Kondition bekommen.",
rule:"<div class=rbox>weil, damit, wenn → NS (Verb am Ende)<br><span class=hl>denn</span> → HS-Konjunktion: Verb an Pos. 2, kein Nebensatz!</div>"},

{sub:"Satzgefüge bilden (Radfahren)",type:"self",
q:"Bilden Sie Satzgefüge:\n\na) Radfahren schont die Umwelt. Man verbraucht kein Benzin. (weil)\nb) Bei Regen muss man vorsichtig sein. Man rutscht nicht aus. (damit)\nc) Eine Radtour ist anstrengend. Die Freude kann nachlassen. (sodass)\nd) Ich fahre täglich Rad. Ich finde das viel zu anstrengend. (obwohl)",
model:"a) Radfahren schont die Umwelt, weil man kein Benzin verbraucht.\nb) Bei Regen muss man vorsichtig sein, damit man nicht ausrutscht.\nc) Eine Radtour ist anstrengend, sodass die Freude nachlassen kann.\nd) Ich fahre täglich Rad, obwohl ich das viel zu anstrengend finde.",
rule:"<div class=rbox>weil (Grund), damit (Zweck), sodass (Folge), obwohl (Gegensatz) → alle NS (Verb am Ende)</div>"},

{sub:"Satzgefüge bilden (Sport & Wasser)",type:"self",
q:"Bilden Sie Satzgefüge:\n\na) Ausreichend Wasser ist beim Sport wichtig. Der Körper ist sonst nicht belastbar. (weil)\nb) Sportgetränke enthalten viel Zucker. Man soll sie nur in kleinen Mengen trinken. (weshalb)\nc) Der Mensch muss auch ohne Sport ausreichend trinken. Er fühlt sich wohl. (damit)\nd) Spezielle Sportgetränke sind beliebt. Sie sind sehr süß. (obwohl)",
model:"a) ...wichtig, weil der Körper sonst nicht belastbar ist.\nb) Sportgetränke enthalten viel Zucker, weshalb man sie nur in kleinen Mengen trinken soll.\nc) Der Mensch muss ausreichend trinken, damit er sich wohl fühlt.\nd) Spezielle Sportgetränke sind beliebt, obwohl sie sehr süß sind.",
rule:"<div class=rbox>weshalb (Folge/Konsequenz) → NS<br>weil, damit, obwohl → NS<br>Alle: Verb am Ende</div>"},

{sub:"Satzgefüge bilden (gemischt)",type:"self",
q:"Bilden Sie Satzgefüge:\n\na) Der Bus verspätete sich. Ich kam zu spät. (sodass)\nb) Ich kaufe mir neue Schuhe. Ich habe das Geld gespart. (sobald)\nc) Sie wird dir helfen. Sie ist in der Lage dazu. (falls)\nd) Er bereitet sich gut vor. Er sucht einen Praktikumsplatz. (indem)\ne) Sie besucht die Tanzschule. Ihre Freundin geht zum Musikunterricht. (während)",
model:"a) Der Bus verspätete sich, sodass ich zu spät kam.\nb) Ich kaufe mir neue Schuhe, sobald ich das Geld gespart habe.\nc) Sie wird dir helfen, falls sie in der Lage dazu ist.\nd) Er bereitet sich gut vor, indem er sich einen Praktikumsplatz sucht.\ne) Sie besucht die Tanzschule, während ihre Freundin zum Musikunterricht geht.",
rule:"<div class=rbox>sodass (Folge), sobald (Zeitpunkt), falls (Bedingung), indem (Mittel), während (Gleichzeitigkeit) → alle NS</div>"},

{sub:"Satzstellung",type:"mc",
q:"Welcher Satz ist grammatisch korrekt?\n\n(a) Ungeduldig wartet sie seit drei Stunden im Regen.\n(b) Ungeduldig sie wartet seit drei Stunden im Regen.\n(c) Ungeduldig wartet im Regen sie seit drei Stunden.",
o:["Nur (b)","Nur (a)","(a) und (c)"],
c:1,
model:"Nur (a) ist richtig: Ungeduldig wartet sie seit drei Stunden im Regen.",
rule:"<div class=rbox>Das finite Verb steht im Hauptsatz an <span class=hl>zweiter Stelle</span>.<br>Zeit (seit drei Stunden) steht vor Ort (im Regen).</div>"},

{sub:"Nebensätze (1)",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Sie fragt sich ernsthaft ob die ganze Arbeit notwendig ist.\nb) Während ich den ersten Gang vorbereite kannst du den Tisch decken.\nc) Ich möchte das Buch lesen das du mir empfohlen hast.\nd) Bevor wir mit dem Spiel beginnen sollten wir uns die Regeln durchlesen damit wir keinen Fehler begehen.",
model:"a) ...ernsthaft, ob die ganze...\nb) ...vorbereite, kannst du...\nc) ...lesen, das du...\nd) ...beginnen, sollten wir..., damit wir...",
rule:"<div class=rbox>Komma zwischen Haupt- und Nebensatz: ob, während, das (Rel.), bevor, damit</div>"},

{sub:"Nebensätze (2)",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Die Mannschaft muss trainieren da schon bald das nächste Spiel ansteht.\nb) Bevor wir uns an den Tisch setzen sollten wir ihn erst decken.\nc) Jetzt sehe ich endlich das Haus das du mir beschrieben hast.\nd) Nachdem wir nach Hause gekommen waren setzten wir uns alle an den warmen Kamin weil wir uns unbedingt aufwärmen mussten.",
model:"a) trainieren, da schon bald...\nb) setzen, sollten wir...\nc) Haus, das du...\nd) waren, setzten wir..., weil wir...",
rule:"<div class=rbox>Nebensätze (da, bevor, das, nachdem, weil) → Komma davor und/oder danach</div>"},

{sub:"dass / da / anstatt",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Ich hoffe dass du gestern gut nach Hause gekommen bist.\nb) Ich habe mir Sorgen gemacht da du dich nicht gemeldet hast.\nc) Ob Luise morgen mit uns ins Kino geht weiß ich leider noch nicht.\nd) Anstatt seine Hausaufgaben zu machen spielt er auf dem Computer.\ne) Wenn du da bist geht es mir gut.",
model:"a) hoffe, dass\nb) gemacht, da\nc) geht, weiß\nd) machen, spielt\ne) bist, geht",
rule:"<div class=rbox>dass, da, ob, anstatt zu, wenn → Komma trennt Haupt- und Nebensatz</div>"},

{sub:"Relativsatz & Apposition",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Unser Nachbar den wir kaum zu Gesicht bekommen hat uns gestern Kuchen gebracht.\nb) Er traf Katie seine Schulfreundin am Markt.",
model:"a) Nachbar, den wir kaum zu Gesicht bekommen, hat uns...\nb) Katie, seine Schulfreundin, am Markt.",
rule:"<div class=rbox>Eingeschobener Relativsatz → zwei Kommas<br>Apposition (erläuternder Zusatz) → zwei Kommas</div>"},

{sub:"Aufzählung & aber",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Kinder Jugendliche und Erwachsene können das Inlineskaten erlernen.\nb) Süßigkeiten schmecken gut aber sind schädlich für die Zähne.\nc) Damit unser Körper Krankheiten bekämpfen kann ist eine gesunde Ernährung wichtig.\nd) Die drei wichtigsten Stoffe in der Ernährung sind Eiweiße Kohlenhydrate und Fette.",
model:"a) Kinder, Jugendliche und Erwachsene (kein Komma vor und!)\nb) gut, aber sind...\nc) kann, ist eine...\nd) Eiweiße, Kohlenhydrate und Fette",
rule:"<div class=rbox>Aufzählung: Komma zwischen gleichrangigen Gliedern, <span class=hl>KEIN Komma vor und</span><br>aber → Komma davor<br>Nebensatz (damit) → Komma</div>"},

{sub:"Komplexer Satz",type:"self",
q:"Setzen Sie alle fehlenden Kommas:\n\na) Wasser ist die Grundlage allen Lebens denn jedes Lebewesen benötigt es.\nb) Wasser ist für viele Menschen selbstverständlich da sie nur den Wasserhahn aufdrehen müssen um es zu bekommen.\nc) Kohlenhydrate liefern wichtige Energie die wir benötigen um den Alltag zu meistern.",
model:"a) ...Lebens, denn jedes...\nb) ...selbstverständlich, da sie...müssen, um es zu bekommen.\nc) ...Energie, die wir benötigen, um den Alltag zu meistern.",
rule:"<div class=rbox>denn (HS-Konjunktion) → Komma davor<br>da (NS) → Komma<br>um...zu (Infinitivgruppe) → Komma<br>die (Relativsatz) → Komma</div>"},

{sub:"Indirekte Rede (Konjunktiv I)",type:"self",
q:"Formen Sie in indirekte Rede um:\n\nBeispiel: Anne meint: 'Der Unterricht fällt heute aus.'\n→ Anne meint, der Unterricht falle heute aus.\n\na) Rena behauptet: 'Das Theatertreffen ist erst morgen.'\nb) Walter versichert: 'Ich akzeptiere die Entscheidung.'\nc) Lukas sagt: 'Die Rechtschreib-AG wird erst morgen stattfinden.'",
model:"a) Rena behauptet, das Theatertreffen sei erst morgen.\nb) Walter versichert, er akzeptiere die Entscheidung.\nc) Lukas sagt, die Rechtschreib-AG werde erst morgen stattfinden.",
rule:"<div class=rbox>Indirekte Rede → <span class=hl>Konjunktiv I</span>:<br>ist → sei | akzeptiere → akzeptiere | wird → werde<br>Pronomen anpassen: ich → er/sie</div>"},

{sub:"das oder dass? (Kreuzen)",type:"mc",
q:"Welche Schreibweise ist richtig?\n\n(a) ___ du deine Meinung sagst, ___ finde ich gut.\n(b) ___ Gute war, ___ alle am Spiel beteiligt waren.",
o:["Dass / das / Das / dass",
   "Das / dass / Dass / da",
   "Dass / dass / Das / das"],
c:0,
model:"(a) Dass du deine Meinung sagst, das finde ich gut.\n(b) Das Gute war, dass alle am Spiel beteiligt waren.",
rule:"<div class=rbox><span class=hl>das</span>: Artikel (das Gute), Pronomen (das finde ich) → durch 'dieses' ersetzbar<br><span class=hl>dass</span>: Konjunktion → leitet Nebensatz ein, nicht ersetzbar</div>"},

{sub:"das oder dass? (Lücken)",type:"self",
q:"Ergänzen Sie das oder dass:\n\na) Erkläre mir bitte, warum ___ so ist.\nb) Ich hoffe, ___ du gut nach Hause gekommen bist.\nc) Das Buch, ___ du mir empfohlen hast, war toll.\nd) Er sagte, ___ er morgen kommen würde.",
model:"a) das (Pronomen, durch 'dieses' ersetzbar)\nb) dass (Konjunktion)\nc) das (Relativpronomen, durch 'welches' ersetzbar)\nd) dass (Konjunktion)",
rule:"<div class=rbox>Probe: durch 'welches/dieses' ersetzbar? → <span class=hl>das</span><br>Nicht ersetzbar → <span class=hl>dass</span> (Konjunktion)</div>"}

]},

// ── 6: WORTSCHATZ ───────────────────────────────────────────────
{id:"bbr_wortschatz",title:"Wortschatz",emoji:"📖",color:"#be185d",qs:[

{sub:"Antonyme (1)",type:"self",
q:"Schreiben Sie das Antonym (Gegenteil):\n\na) Draußen ist es heute sehr warm. →\nb) Die Nachspeise ist viel zu sauer. →\nc) Die Gegner stehen sich freundlich gegenüber. →\nd) Eine Mehrheit stimmte für das Gesetz. →",
model:"a) kalt\nb) süß\nc) feindlich\nd) Minderheit",
rule:"<div class=rbox><span class=hl>Antonym</span> = das direkte Gegenteil eines Wortes</div>"},

{sub:"Antonyme (2)",type:"self",
q:"Schreiben Sie das Antonym (Gegenteil):\n\na) Einige Familien sind sehr reich. →\nb) Die Kinder sind heute sehr fröhlich. →\nc) Die Musik ist viel zu leise. →\nd) Am Strand waren heute viele Spaziergänger. →",
model:"a) arm\nb) traurig\nc) laut\nd) wenige",
rule:"<div class=rbox>Gegenteil bilden – achten Sie auf Wortart und Kontext!</div>"},

{sub:"Homonyme (1)",type:"self",
q:"Ordnen Sie die Bedeutung zu:\n(Person / Schraube / schlechte Angewohnheit / Führungsperson / Fahrzeug / Gegenstand mit Sprossen)\n\na) Die Mutter kocht das Essen. →\nb) Er schraubte die Mutter fest. →\nc) Er konnte sein Laster nicht ablegen. →\nd) Der Laster ist schwer beladen. →\ne) Der Leiter verteilte die Aufgaben. →\nf) Zum Streichen braucht man eine Leiter. →",
model:"a) Person\nb) Schraube\nc) schlechte Angewohnheit\nd) Fahrzeug\ne) Führungsperson\nf) Gegenstand mit Sprossen",
rule:"<div class=rbox><span class=hl>Homonyme</span>: gleiche Schreibweise, unterschiedliche Bedeutung.<br>Der Kontext entscheidet!</div>"},

{sub:"Homonyme (2)",type:"self",
q:"Ordnen Sie die Bedeutung zu:\n(Gebäude / Sicherungsobjekt / Wundschutzmittel / Straßenbelag / Tier / Sanitärobjekt)\n\na) Eine Prinzessin wohnt in einem Schloss. →\nb) Das Fahrrad wird mit einem Schloss angeschlossen. →\nc) Die Wunde wurde mit einem Pflaster versorgt. →\nd) Der Hund betrat zum ersten Mal das Pflaster. →\ne) Der Hahn kräht jeden Morgen. →\nf) Der Hahn an der Badewanne tropft. →",
model:"a) Gebäude\nb) Sicherungsobjekt\nc) Wundschutzmittel\nd) Straßenbelag\ne) Tier\nf) Sanitärobjekt",
rule:"<div class=rbox>Homonyme haben dieselbe Schreibweise, aber völlig verschiedene Bedeutungen.</div>"},

{sub:"Stilebenen (1)",type:"self",
q:"Ordnen Sie den Stilebenen zu:\numgangssprachlich | Standardsprache | gehoben\n\nlatschen – gehen – schreiten\nverpulvern – verschwenden – vergeuden\nBude – Zimmer – Gemach",
model:"umgangssprachlich: latschen / verpulvern / Bude\nStandard: gehen / verschwenden / Zimmer\ngehoben: schreiten / vergeuden / Gemach",
rule:"<div class=rbox><span class=hl>Umgangssprache</span>: informell, salopp<br><span class=hl>Standard</span>: neutral, Alltagssprache<br><span class=hl>Gehoben</span>: formell, literarisch oder veraltet</div>"},

{sub:"Stilebenen (2)",type:"self",
q:"Ordnen Sie den Stilebenen zu:\numgangssprachlich | Standardsprache | gehoben\n\nfuttern – essen – speisen\nGaul – Pferd – Ross\nklauen – stehlen – entwenden",
model:"umgangssprachlich: futtern / Gaul / klauen\nStandard: essen / Pferd / stehlen\ngehoben: speisen / Ross / entwenden",
rule:"<div class=rbox>Gleiche Bedeutung, unterschiedliche Stilebene – je nach Kontext und Situation wählen!</div>"},

{sub:"Adverbien einordnen (1)",type:"self",
q:"Ordnen Sie die Adverbien ein:\nZeit | Art und Weise | Ort\n\n(später, besonders, gegenüber, fast, dort, unten, bald, vielleicht, nachher)",
model:"Zeit: später / bald / nachher\nArt und Weise: besonders / fast / vielleicht\nOrt: gegenüber / dort / unten",
rule:"<div class=rbox>Zeit: wann? (später, bald, nachher)<br>Art und Weise: wie? (besonders, fast, vielleicht)<br>Ort: wo? (dort, unten, gegenüber)</div>"},

{sub:"Adverbien einordnen (2)",type:"self",
q:"Ordnen Sie die Adverbien ein:\nZeit | Art und Weise | Ort\n\n(oft, besonders, hier, gern, niemals, dort, oben, sehr, jetzt)",
model:"Zeit: oft / niemals / jetzt\nArt und Weise: gern / sehr / besonders\nOrt: hier / dort / oben",
rule:"<div class=rbox>Zeit: oft, niemals, jetzt<br>Art: gern, sehr, besonders<br>Ort: hier, dort, oben</div>"}

]}

];
