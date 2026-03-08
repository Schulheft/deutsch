// ================================================================
// BBR-AUFGABEN.JS – Übungsaufgaben für die BBR
// 6 Oberthemen, jeweils mit mehreren Aufgaben.
// Neues Thema: Objekt { id, title, emoji, color, qs:[...] } ans Ende ergänzen.
// ================================================================

var BBR_THEMES = [

// ── 1: VOKALE & DEHNUNG ─────────────────────────────────────────
{id:"bbr_vokale",title:"Vokale & Dehnung",emoji:"📏",color:"#2563eb",qs:[

{sub:"a / aa / ah",type:"cross",
q:"Ergänze die fehlenden Buchstaben (a, aa oder ah):",
rows:["w___scheinlich","st___tlich","Tr___ge","Katzenh___re","unkl___r","Bez___lung"],
cols:["a","aa","ah"],
correct:[2,1,0,1,0,2],
model:"wahrscheinlich (ah) / staatlich (aa) / Trage (a) / Katzenhaare (aa) / unklar (a) / Bezahlung (ah)",
rule:"<div class=rbox><span class=hl>ah</span>: Dehnungs‑h verlängert den Vokal (wahr, zahlen)<br><span class=hl>aa</span>: langes a ohne h (Staat, Haare)<br><span class=hl>a</span>: kurzes a (Trage, unklar)</div>"},

{sub:"i / ie / ieh",type:"cross",
q:"Ergänze die fehlenden Buchstaben (i, ie oder ieh):",
rows:["L___be","L___belle","Z___hung","B___ber","Fl___hkraft","r___chen"],
cols:["i","ie","ieh"],
correct:[1,0,2,0,2,1],
model:"Liebe (ie) / Libelle (i) / Ziehung (ieh) / Biber (i) / Fliehkraft (ieh) / riechen (ie)",
rule:"<div class=rbox><span class=hl>ie</span>: langes i (Liebe, riechen)<br><span class=hl>i</span>: kurzes i (Libelle, Biber)<br><span class=hl>ieh</span>: nur in wenigen Wörtern (ziehen, fliehen)</div>"},

{sub:"ah / ar / ahr",type:"cross",
q:"Ergänze die fehlenden Buchstaben (ah, ar oder ahr):",
rows:["W___nung","w___scheinlich","P___tner","z___m","Al___m","Abf___t"],
cols:["ah","ar","ahr"],
correct:[1,0,1,0,1,2],
model:"Warnung (ar) / wahrscheinlich (ah) / Partner (ar) / zahm (ah) / Alarm (ar) / Abfahrt (ahr)",
rule:"<div class=rbox><span class=hl>ah</span>: verlängert den Vokal (zahm, wahrscheinlich)<br><span class=hl>ahr</span>: langes a + h + r (Abfahrt, Jahr)<br><span class=hl>ar</span>: kurzes a + r (Partner, Alarm, Warnung)</div>"},

{sub:"e / ee / eh",type:"cross",
q:"Ergänze die fehlenden Buchstaben (e, ee oder eh):",
rows:["Id___","Bef___l","St___g","m___r","Sch___re","r___ge"],
cols:["e","ee","eh"],
correct:[1,2,0,2,0,0],
model:"Idee (ee) / Befehl (eh) / Steg (e) / mehr (eh) / Schere (e) / rege (e)",
rule:"<div class=rbox><span class=hl>ee</span>: langes e in Fremdwörtern (Idee, See)<br><span class=hl>eh</span>: Dehnungs‑h (Befehl, mehr)<br><span class=hl>e</span>: kurzes e (Steg, Schere)</div>"},

{sub:"Lückentext: e / ee / eh",type:"self",
q:"Ergänzen Sie die richtige Schreibweise (-e-, -ee- oder -eh-):\n\nDas S___gel stürzte im heftigen Sturm ins M___r,\nwas uns das Fürchten l___rte.",
model:"Das Segel stürzte im heftigen Sturm ins Meer, was uns das Fürchten lehrte.",
rule:"<div class=rbox>Segel → kurzes e<br>Meer → langes e → ee<br>lehrte → langes e → eh</div>"},

{sub:"o / oo / oh",type:"cross",
q:"Ergänze die fehlenden Buchstaben (o, oo oder oh):",
rows:["M___r","w___nen","T___r","bel___nen","Z___","S___n"],
cols:["o","oo","oh"],
correct:[1,2,0,2,1,2],
model:"Moor (oo) / wohnen (oh) / Tor (o) / belohnen (oh) / Zoo (oo) / Sohn (oh)",
rule:"<div class=rbox><span class=hl>oo</span>: langes o ohne h (Moor, Zoo)<br><span class=hl>oh</span>: Dehnungs‑h (wohnen, Sohn)<br><span class=hl>o</span>: kurzes o (Tor)</div>"},

{sub:"Lückentext: o / oo / oh",type:"self",
q:"Ergänzen Sie die richtige Schreibweise (-o-, -oo- oder -oh-):\n\nMit dem B___t kamen wir in eine bedr___liche N___tlage.",
model:"Mit dem Boot kamen wir in eine bedrohliche Notlage.",
rule:"<div class=rbox>Boot → oo<br>bedrohlich → oh<br>Notlage → kurzes o</div>"},

{sub:"eu oder äu? (1)",type:"self",
q:"Ergänzen Sie eu oder äu:\n\na) Vor manchen Geb___den stehen große Z___ne.\nb) Ich fr___e mich, dass ich h___te hier sein kann.\nc) Gute Kr___ter sind beim Kochen von großer Bed___tung.\nd) Schlangen müssen sich h___fig vollständig h___ten.",
model:"a) Vor manchen Gebäuden stehen große Zäune.\nb) Ich freue mich, dass ich heute hier sein kann.\nc) Gute Kräuter sind beim Kochen von großer Bedeutung.\nd) Schlangen müssen sich häufig vollständig häuten.",
rule:"<div class=rbox><span class=hl>äu</span>: wenn ein verwandtes Wort mit au existiert (Zaun→Zäune, Kraut→Kräuter)<br><span class=hl>eu</span>: kein au‑Bezug (freuen, heute, Bedeutung)</div>"},

{sub:"eu oder äu? (2)",type:"self",
q:"Ergänzen Sie eu oder äu:\n\na) H___te müssen die B___me gefällt werden.\nb) Dieses Shampoo sch___mt aber erfrischend stark.\nc) Ich denke, ___re Tr___me können erfüllt werden!\nd) Ich ber___e es nicht, alle L___te eingeladen zu haben.",
model:"a) Heute müssen die Bäume gefällt werden.\nb) Dieses Shampoo schäumt aber erfrischend stark.\nc) Ich denke, eure Träume können erfüllt werden!\nd) Ich bereue es nicht, alle Leute eingeladen zu haben.",
rule:"<div class=rbox>Bäume→Baum, schäumt→Schaum, Träume→Traum → <span class=hl>äu</span><br>bereuen, eure, Leute → kein au‑Bezug → <span class=hl>eu</span></div>"},

{sub:"eu oder äu? (Lückentext)",type:"self",
q:"Ergänzen Sie eu oder äu:\n\na) Eine M___er von R___bern stahl die B___te aus dem Geb___de.\nb) In der Sch___ne unter den B___men machten die M___se h___te viel Lärm.\nc) Beim S___bern der t___ren Garten___bel brach n___lich ein Pfosten ab.",
model:"a) Eine Mauer von Räubern stahl die Beute aus dem Gebäude.\nb) In der Scheune unter den Bäumen machten die Mäuse heute viel Lärm.\nc) Beim Säubern der teuren Gartenmöbel brach neulich ein Pfosten ab.",
rule:"<div class=rbox>au‑Bezug → <span class=hl>äu</span>. Kein au‑Bezug → <span class=hl>eu</span>.</div>"},

{sub:"e oder ä?",type:"self",
q:"Ergänzen Sie e oder ä:\n\na) Die G___ste best___llten eine M___nge Getr___nke.\nb) In der Jugendherb___rge bel___ge ich Brötchen mit K___se und sp___ter noch einige mit Wurst.\nc) Draußen in den G___rten liegen w___rmende D___cken auf den B___nken.",
model:"a) Die Gäste bestellten eine Menge Getränke.\nb) In der Jugendherberge belege ich Brötchen mit Käse und später noch einige mit Wurst.\nc) Draußen in den Gärten liegen wärmende Decken auf den Bänken.",
rule:"<div class=rbox><span class=hl>ä</span>: verwandtes Wort mit a vorhanden (Gast, warm, Bank)<br><span class=hl>e</span>: kein a‑Bezug (Menge, Herberge, Decke)</div>"}

]},

// ── 2: KONSONANTEN & FREMDWÖRTER ────────────────────────────────
{id:"bbr_konsonanten",title:"Konsonanten & Fremdwörter",emoji:"✍️",color:"#059669",qs:[

{sub:"s / ss / ß (1)",type:"cross",
q:"Ergänze s, ss oder ß:",
rows:["genie___en","das Schlo___","der Pa___","pa___en","wi___en","der Scho___"],
cols:["s","ss","ß"],
correct:[2,1,1,1,1,2],
model:"genießen (ß, langes ie) / Schloss (ss, kurzes o) / Pass (ss, kurzes a) / passen (ss) / wissen (ss) / Schoß (ß, langes o)",
rule:"<div class=rbox><span class=hl>ß</span>: nach langem Vokal oder Diphthong (genießen, Schoß)<br><span class=hl>ss</span>: nach kurzem Vokal (Schloss, Pass, wissen)</div>"},

{sub:"s / ss / ß (Lückentext)",type:"self",
q:"Ergänzen Sie s, ss oder ß:\n\nLutz will Ella noch den Weg wei___en, bevor er zum Fu___balltraining mu___.\nEr schickt sie zum wei___en Strand.",
model:"Lutz will Ella noch den Weg weißen, bevor er zum Fußballtraining muss. Er schickt sie zum weißen Strand.",
rule:"<div class=rbox><span class=hl>ß</span>: langer Vokal oder Diphthong (weiß, Fuß)<br><span class=hl>ss</span>: kurzer Vokal (muss)</div>"},

{sub:"z / tz / zz (1)",type:"cross",
q:"Ergänze z, tz oder zz:",
rows:["Kreu___ung","Ja___","plöt___lich","schmel___en","Wur___el","Pi___a"],
cols:["z","tz","zz"],
correct:[0,2,1,0,0,2],
model:"Kreuzung (z) / Jazz (zz) / plötzlich (tz) / schmelzen (z) / Wurzel (z) / Pizza (zz)",
rule:"<div class=rbox><span class=hl>tz</span>: nach kurzem Vokal (plötzlich)<br><span class=hl>z</span>: nach langem Vokal, Diphthong oder Konsonant (Kreuzung, Wurzel)<br><span class=hl>zz</span>: in Fremdwörtern (Pizza, Jazz)</div>"},

{sub:"z / tz / zz (2)",type:"cross",
q:"Ergänze z, tz oder zz:",
rows:["schüt___en","Gla___e","Bre___el","nüt___lich","ergän___en","Mo___arella"],
cols:["z","tz","zz"],
correct:[1,1,0,1,0,2],
model:"schützen (tz) / Glatze (tz) / Brezel (z) / nützlich (tz) / ergänzen (z) / Mozzarella (zz)",
rule:"<div class=rbox><span class=hl>tz</span>: kurzer Vokal (schützen, Glatze, nützlich)<br><span class=hl>z</span>: langer Vokal (Brezel, ergänzen)<br><span class=hl>zz</span>: Fremdwort (Mozzarella)</div>"},

{sub:"z / tz / zz (Lückentext)",type:"self",
q:"Ergänzen Sie z, tz oder zz:\n\na) Beim Pu___eln gibt es für jedes Teil nur einen bestimmten Pla___.\nb) Der Künstler ski___ierte die Turmspi___e mit einem Bleistift.",
model:"a) Beim Puzzeln gibt es für jedes Teil nur einen bestimmten Platz.\nb) Der Künstler skizzierte die Turmspitze mit einem Bleistift.",
rule:"<div class=rbox><span class=hl>tz</span>: kurzer Vokal (Platz, Spitze)<br><span class=hl>zz</span>: Fremdwörter (Puzzle, Skizze)</div>"},

{sub:"x / chs / gs (1)",type:"cross",
q:"Ergänze die fehlenden Buchstaben (sch, x, hs oder gs):",
rows:["mi___en","allerdin___","verwec___eln","A___t","Fuc___","anfan___"],
cols:["sch","x","hs","gs"],
correct:[0,3,2,1,2,3],
model:"mischen (sch) / allerdings (gs) / verwechseln (hs) / Axt (x) / Fuchs (hs) / anfangs (gs)",
rule:"<div class=rbox><span class=hl>chs</span>: spricht wie 'ks' – das c ist schon da (Fuc<b>hs</b>, verwec<b>hs</b>eln)<br><span class=hl>gs</span>: Wortende nach Stamm (anfangs, allerdings)<br><span class=hl>x</span>: in Fremdwörtern (Axt)<br><span class=hl>sch</span>: Lautverbindung (mischen)</div>"},

{sub:"x / chs / gs (Lückentext)",type:"self",
q:"Ergänzen Sie x, chs oder gs:\n\nDie Eide___e bewegte sich geradewe___ auf die Bo___ zu.",
model:"Die Eidechse bewegte sich geradewegs auf die Box zu.",
rule:"<div class=rbox>Eidechse → chs (spricht wie ks)<br>geradewegs → gs (Weg→-gs)<br>Box → x (Fremdwort)</div>"},

{sub:"x / cks / ks",type:"cross",
q:"Ergänze x, cks oder ks:",
rows:["Pra___is","Kle___s","zwe___s","Komple___","Ke___","hinterrü___s"],
cols:["x","cks","ks"],
correct:[0,1,1,0,2,1],
model:"Praxis (x) / Klecks (cks) / zwecks (cks) / Komplex (x) / Keks (ks) / hinterrücks (cks)",
rule:"<div class=rbox><span class=hl>x</span>: Fremdwörter (Praxis, Komplex)<br><span class=hl>cks</span>: von -ck abgeleitet (Klecks, hinterrücks)<br><span class=hl>ks</span>: einfache Form (Keks, links)</div>"},

{sub:"x / cks / ks (Lückentext)",type:"self",
q:"Ergänzen Sie x, cks oder ks:\n\nDer Ta___ifahrer blinkte lin___, fuhr aber schnurstra___ geradeaus.",
model:"Der Taxifahrer blinkte links, fuhr aber schnurstracks geradeaus.",
rule:"<div class=rbox>Taxi → x (Fremdwort)<br>links → fester Bestandteil nks<br>schnurstracks → cks (von Strack)</div>"},

{sub:"-g oder -k am Wortende",type:"self",
q:"Ergänzen Sie g oder k:\n\na) Dieser Schran___ ist sehr alt und wertvoll.\nb) Er san___ vor Erschöpfung zusammen.\nc) Am Bu___ des Schiffes stand der Kapitän.\nd) Ein Auto bo___ schnell um die Ecke.\ne) Sie san___ dem Kind ein Schlaflied vor.\nf) Die Lampe war aus Kerami___.",
model:"a) Dieser Schrank ist sehr alt und wertvoll.\nb) Er sank vor Erschöpfung zusammen.\nc) Am Bug des Schiffes stand der Kapitän.\nd) Ein Auto bog schnell um die Ecke.\ne) Sie sang dem Kind ein Schlaflied vor.\nf) Die Lampe war aus Keramik.",
rule:"<div class=rbox>Ableitung hilft:<br><span class=hl>-k</span>: Schrank→Schränke, sank→sinken<br><span class=hl>-g</span>: Bug→biegen, sang→singen</div>"},

{sub:"-d oder -t am Wortende",type:"self",
q:"Ergänzen Sie d oder t:\n\na) Vor Weihnachten ist die Ungedul___ der Kinder sehr groß.\nb) Der Wir___ hat das Lokal neu übernommen.\nc) Sei___ diesem Sommer kann sie schwimmen.\nd) Man konnte ihm ansehen, wie lei___ es ihm tat.\ne) Sei___ bitte um 21.00 Uhr zurück.\nf) Heute wir___ der Tag wunderschön.",
model:"a) Vor Weihnachten ist die Ungeduld der Kinder sehr groß.\nb) Der Wirt hat das Lokal neu übernommen.\nc) Seit diesem Sommer kann sie schwimmen.\nd) Man konnte ihm ansehen, wie leid es ihm tat.\ne) Seid bitte um 21.00 Uhr zurück.\nf) Heute wird der Tag wunderschön.",
rule:"<div class=rbox>Ableitung hilft:<br><span class=hl>-d</span>: ungeduldig, Leiden, seid, werden<br><span class=hl>-t</span>: Wirte, seither</div>"},

{sub:"-nd oder -nt",type:"self",
q:"Ergänzen Sie nd oder nt:\n\na) Der Drachen im Wi___ ist besonders schön bu___.\nb) Der Diama___ ist fast ganz ru___.",
model:"a) Der Drachen im Wind ist besonders schön bunt.\nb) Der Diamant ist fast ganz rund.",
rule:"<div class=rbox><span class=hl>-nd</span>: weicher Auslaut (Wind, rund)<br><span class=hl>-nt</span>: härterer Auslaut (bunt, Diamant)</div>"},

{sub:"-g oder -ch (Adjektivendungen)",type:"self",
q:"Ergänzen Sie g oder ch:\n\na) Es ist wichtig, bei allen Aufgaben fröhli___ zu bleiben.\nb) Manches ist langweili___, manches ganz lusti___.",
model:"a) Es ist wichtig, bei allen Aufgaben fröhlich zu bleiben.\nb) Manches ist langweilig, manches ganz lustig.",
rule:"<div class=rbox><span class=hl>-lich</span>: fröhlich, herrlich, wöchentlich<br><span class=hl>-ig</span>: lustig, langweilig → wird wie -ich gesprochen, aber -ig geschrieben!</div>"},

{sub:"V oder W?",type:"cross",
q:"Ergänze V oder W:",
rows:["die ___itamine","das ___rack","die ___ioline","die ___itwe","die ___illa","der ___ampir"],
cols:["V","W"],
correct:[0,1,0,1,0,0],
model:"Vitamine (V, Fremdwort) / Wrack (W, deutsches Wort) / Violine (V, Fremdwort) / Witwe (W, deutsches Wort) / Villa (V, Fremdwort) / Vampir (V, Fremdwort)",
rule:"<div class=rbox>Deutsche Wörter meist <span class=hl>W</span> (Wrack, Witwe, Wasser, war)<br>Fremdwörter meist <span class=hl>V</span> (Violine, Villa, Vampir, Vitamine)</div>"},

{sub:"V oder W? (Lückentext)",type:"self",
q:"Ergänzen Sie V/v oder W/w:\n\nDas ___asser in der Blumen___ase ___ar erfault.",
model:"Das Wasser in der Blumenvase war erfault.",
rule:"<div class=rbox>Wasser, war → deutsche Wörter → <span class=hl>W</span><br>Vase → Fremdwort → <span class=hl>V</span></div>"},

{sub:"Fremdwörter korrekt schreiben",type:"match",
q:"Ordne die richtige Schreibweise zu:",
pairs:[["Foto___fie","Fotografie"],["Reserv___ierung","Reservierung"],["Exk___sion","Exkursion"],["Tour___ismus","Tourismus"],["Sa___son","Saison"]],
model:"Fotografie / Reservierung / Exkursion / Tourismus / Saison",
rule:"<div class=rbox>Fremdwörter folgen der Herkunftssprache:<br>Fotografie (griech.) / Reservierung (lat.) / Exkursion (lat.) / Tourismus (frz.) / Saison (frz.)</div>"}

]},

// ── 3: GROß-/KLEINSCHREIBUNG & GETRENNTSCHREIBUNG ───────────────
{id:"bbr_gross_klein",title:"Groß-/Kleinschreibung & Getrenntschreibung",emoji:"🔠",color:"#dc2626",qs:[

{sub:"Groß oder klein? (1)",type:"self",
q:"Ergänzen Sie den richtigen Anfangsbuchstaben:\n\na) Ich möchte meinen ___esten ___reund besuchen.\nb) Das ___ufräumen ist für uns alle anstrengend.\nc) Wir brauchen für die Hochzeit noch etwas ___laues.",
model:"a) Ich möchte meinen besten Freund besuchen.\nb) Das Aufräumen ist für uns alle anstrengend.\nc) Wir brauchen für die Hochzeit noch etwas Blaues.",
rule:"<div class=rbox>Substantivierte Verben (Aufräumen) → GROSS<br>nach etwas/nichts/alles + Adj → GROSS (etwas Blaues)<br>Adjektive als Eigenschaft → klein (bester)</div>"},

{sub:"Groß oder klein? (2)",type:"self",
q:"Ergänzen Sie den richtigen Anfangsbuchstaben:\n\na) Dafür muss der ___rüne ___tift genutzt werden.\nb) Ihm macht das ___anzen immer wieder viel Spaß.\nc) In den nächsten Tagen wird nichts ___eues passieren.",
model:"a) Dafür muss der grüne Stift genutzt werden.\nb) Ihm macht das Tanzen immer wieder viel Spaß.\nc) In den nächsten Tagen wird nichts Neues passieren.",
rule:"<div class=rbox>Farbadjektive → klein (grüne)<br>Substantiviertes Verb → GROSS (Tanzen)<br>nichts/etwas + Adj → GROSS (Neues)</div>"},

{sub:"Groß oder klein? (3)",type:"self",
q:"Ergänzen Sie den richtigen Anfangsbuchstaben:\n\na) Heute bin ich zu spät zum ___chwimmen gekommen.\nb) Das Training ist die ___ichtigste Freizeitbeschäftigung.\nc) Die ___üngste in unserer Gruppe ist die ___chnellste Schwimmerin.\nd) Mein Bruder kam zu spät zum ___ssen. Das ___arten wurde zu lang,\n   deshalb begannen wir schon vor ihm zu ___ssen.",
model:"a) Heute bin ich zu spät zum Schwimmen gekommen.\nb) Das Training ist die wichtigste Freizeitbeschäftigung.\nc) Die Jüngste in unserer Gruppe ist die schnellste Schwimmerin.\nd) Mein Bruder kam zu spät zum Essen. Das Warten wurde zu lang, deshalb begannen wir schon vor ihm zu essen.",
rule:"<div class=rbox>nach zum/beim → GROSS<br>als Verb mit zu → klein (zu essen)<br>Superlativ ohne Bezugsnomen → GROSS (die Jüngste)</div>"},

{sub:"Anredepronomen",type:"self",
q:"Groß oder klein?\n\na) Wir bedanken uns für i/Ihr Verständnis.\nb) In Erwartung i/Ihrer Rückäußerung verbleibe i/Ich mit freundlichen Grüßen.\nc) Ich schreibe i/Ihnen, weil ich s/Sie um einen Gefallen bitten möchte.",
model:"a) Wir bedanken uns für Ihr Verständnis.\nb) In Erwartung Ihrer Rückäußerung verbleibe ich mit freundlichen Grüßen.\nc) Ich schreibe Ihnen, weil ich Sie um einen Gefallen bitten möchte.",
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

{sub:"frei sprechen / freisprechen",type:"cross",
q:"Wähle die richtige Schreibweise für jede Lücke:",
rows:["(a) Im Vortrag möglichst ___ reden","(b) Der Richter hat den Angeklagten ___"],
cols:["frei sprechen","freisprechen","freigesprochen"],
correct:[0,2],
model:"(a) frei sprechen (ohne Manuskript = wörtlich, getrennt)\n(b) freigesprochen (für unschuldig erklärt = übertragen, zusammen)",
rule:"<div class=rbox><span class=hl>frei sprechen</span>: wörtliche Bedeutung → getrennt<br><span class=hl>freisprechen</span>: für unschuldig erklären → zusammen (feste Bedeutung)</div>"},

{sub:"schwerfallen / Klavier üben",type:"cross",
q:"Wähle die richtige Schreibweise für jede Lücke:",
rows:["(a) Diese Aufgaben werden mir nicht ___","(b) Mir macht das ___ großen Spaß"],
cols:["schwer fallen","schwerfallen","Klavier üben","Klavierüben"],
correct:[1,3],
model:"(a) schwerfallen (Mühe machen, übertragene Bedeutung → zusammen)\n(b) Klavierüben (als Nomen gebraucht → zusammen + GROSS)",
rule:"<div class=rbox><span class=hl>schwerfallen</span>: Mühe machen (übertragen) → zusammen<br><span class=hl>Klavierüben</span>: als Nomen gebraucht → zusammen + GROSS<br><span class=hl>Klavier üben</span>: als Tätigkeit → getrennt</div>"},

{sub:"end- oder ent-?",type:"self",
q:"Ergänzen Sie end- oder ent-:\n\na) Er hat ___lich sein Fahrrad repariert.\nb) Ich bin ___täuscht von seiner Reaktion.\nc) Der Marathonläufer setzte zu seinem ___spurt an.",
model:"a) Er hat endlich sein Fahrrad repariert.\nb) Ich bin enttäuscht von seiner Reaktion.\nc) Der Marathonläufer setzte zu seinem Endspurt an.",
rule:"<div class=rbox><span class=hl>end-</span>: Ende, Schluss (endlich, Endspurt, Endstation)<br><span class=hl>ent-</span>: Trennung oder Gegenteil (enttäuscht, entfernen)</div>"},

{sub:"wieder oder wider? (1)",type:"self",
q:"Ergänzen Sie wieder oder wider:\n\na) Ich möchte dich gerne ___sehen.\nb) Es ___strebt ihr, sich zu entschuldigen.\nc) Er hat das Buch ___holt gelesen.\nd) Er ___spricht sich.\ne) Die Großmutter konnte nach der Operation ___ laufen.",
model:"a) Ich möchte dich gerne wiedersehen.\nb) Es widerstrebt ihr, sich zu entschuldigen.\nc) Er hat das Buch wiederholt gelesen.\nd) Er widerspricht sich.\ne) Die Großmutter konnte nach der Operation wieder laufen.",
rule:"<div class=rbox><span class=hl>wieder</span>: noch einmal, erneut (Eselsbrücke: nochmal wie der Anfang)<br><span class=hl>wider</span>: gegen (Widerspruch, Widerstand)</div>"},

{sub:"wieder oder wider? (2)",type:"self",
q:"Unterstreichen Sie die richtige Schreibweise:\n\na) Die neue Chefin will die Vorschriften wider/wieder einführen.\nb) Die Klasse wird die Aufführung widerholen/wiederholen.\nc) Es hat ihr widerstrebt/wiederstrebt, die Hausaufgaben zu machen.\nd) Er hat alle Bücher wider/wieder zurückgebracht.\ne) Du widersprichst/wiedersprichst dir.",
model:"a) Die neue Chefin will die Vorschriften wieder einführen.\nb) Die Klasse wird die Aufführung wiederholen.\nc) Es hat ihr widerstrebt, die Hausaufgaben zu machen.\nd) Er hat alle Bücher wieder zurückgebracht.\ne) Du widersprichst dir.",
rule:"<div class=rbox>Wiederholung/erneut → <span class=hl>wieder</span><br>Gegen etwas → <span class=hl>wider</span></div>"},

{sub:"wieder oder wider? (3)",type:"cross",
q:"Ergänze wieder oder wider (Groß-/Kleinschreibung beachten):",
rows:["(a) Ihre ___ ließ keiner gelten.","(b) Die ___ des Projekts wurde geplant.","(c) Der ___ konnte gemessen werden.","(d) Hin und ___ klappt es gut."],
cols:["wieder","wider"],
correct:[1,0,1,0],
model:"Widerrede (wider, Gegenrede) / Wiederholung (wieder, nochmal) / Widerstand (wider, Gegenwehr) / wieder (hin und wieder = ab und zu)",
rule:"<div class=rbox><span class=hl>wider-</span>: gegen, entgegen (Widerrede, Widerstand, Widerspruch)<br><span class=hl>wieder-</span>: nochmal, zurück (Wiederholung, Wiederwahl)</div>"}

]},

// ── 4: GRAMMATIK ────────────────────────────────────────────────
{id:"bbr_grammatik",title:"Grammatik",emoji:"📘",color:"#0891b2",qs:[

{sub:"Vorsilbe vor zwei Wörtern",type:"self",
q:"Setzen Sie denselben Wortbaustein (Ver-/ver-, voll-, Vor-/vor-, vier) so ein,\ndass er zu beiden Wörtern passt:\n\na) ziehen + bringen →\nb) brecher + kehr →\nc) wärts + tragen →\nd) knoten + tragen →\ne) fach + händig →\nf) band + teidigung →",
model:"a) verziehen / verbringen\nb) Verbrecher / Verkehr\nc) vorwärts / vortragen\nd) verknoten / vertragen\ne) vierfach / vierhändig\nf) Verband / Verteidigung",
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
model:"a) Wir möchten uns sehr für die Einladung bedanken.\nb) Wir freuen uns auch schon sehr auf den Geburtstag!\nc) Auch an dem Geschenk beteiligen wir uns gern.\nd) Vor der Feier müssen wir uns schick anziehen.",
rule:"<div class=rbox>für + Akk. / auf + Akk. / an + Dat. / vor + Dat.<br>Einladung (f), Geburtstag (m), Geschenk (n), Feier (f)</div>"},

{sub:"Bestimmter vs. unbestimmter Artikel",type:"self",
q:"Ergänzen Sie den richtigen Artikel:\n\nRebecca hat ___ neuen Computer bekommen.\n___ Computer hat ___ besonders guten Bildschirm.",
model:"Rebecca hat einen neuen Computer bekommen.\nDer Computer hat einen besonders guten Bildschirm.",
rule:"<div class=rbox>Neu eingeführt → <span class=hl>unbestimmter Artikel</span> (ein/eine)<br>Bekannt, bereits erwähnt → <span class=hl>bestimmter Artikel</span> (der/die/das)</div>"},

{sub:"Adjektivdeklination (1)",type:"self",
q:"Setzen Sie das Adjektiv in der richtigen Form ein:\n\na) Die ___ (schön) Feier werden wir nicht vergessen.\nb) Den ___ (neu) Schüler begrüßen wir morgen.\nc) Ich mag diesen ___ (grün) Mantel.\nd) Die ___ (groß) Begeisterung blieb leider aus.",
model:"a) Die schöne Feier werden wir nicht vergessen.\nb) Den neuen Schüler begrüßen wir morgen.\nc) Ich mag diesen grünen Mantel.\nd) Die große Begeisterung blieb leider aus.",
rule:"<div class=rbox>Nach bestimmtem Artikel (der/die/das/diesen) → <span class=hl>schwache Deklination</span>: Nom. -e, alles andere -en</div>"},

{sub:"Adjektivdeklination (2)",type:"self",
q:"Setzen Sie das Adjektiv in der richtigen Form ein:\n\na) Das ___ (heiß) Essen wurde schnell kalt.\nb) Die ___ (laut) Stimmen drangen durch die Tür.\nc) Das Haus auf dem ___ (flach) Hügel gefiel uns.\nd) Im Winter muss man mit ___ (eisig) Winden rechnen.\ne) Bei ___ (klar) Sicht kann man kilometerweit sehen.",
model:"a) Das heiße Essen wurde schnell kalt.\nb) Die lauten Stimmen drangen durch die Tür.\nc) Das Haus auf dem flachen Hügel gefiel uns.\nd) Im Winter muss man mit eisigen Winden rechnen.\ne) Bei klarer Sicht kann man kilometerweit sehen.",
rule:"<div class=rbox>Nach bestimmtem Artikel → schwache Deklination: Nom. <span class=hl>-e</span>, sonst <span class=hl>-en</span></div>"},

{sub:"Adjektivdeklination (3)",type:"self",
q:"Setzen Sie das Adjektiv in der richtigen Form ein:\n\na) Das ___ (warm) Wetter hielt lange an.\nb) Die ___ (leicht) Aufgaben waren schnell erledigt.\nc) Aus dem ___ (hell) Flur drang Licht ins Zimmer.\nd) Ein ___ (klein) Teilchen fehlte noch.\ne) Bei ___ (schnell) Tempo kann man Schilder nicht lesen.",
model:"a) Das warme Wetter hielt lange an.\nb) Die leichten Aufgaben waren schnell erledigt.\nc) Aus dem hellen Flur drang Licht ins Zimmer.\nd) Ein kleines Teilchen fehlte noch.\ne) Bei schnellem Tempo kann man Schilder nicht lesen.",
rule:"<div class=rbox>Nach best. Artikel → schwach (-e/-en)<br>Nach unbest. Artikel → gemischt: Nom./Akk. n: <span class=hl>-es</span>; m: <span class=hl>-er</span><br>Dat. ohne Artikel → stark: <span class=hl>-em</span></div>"},

{sub:"Pronomen einsetzen",type:"self",
q:"Ersetzen Sie das unterstrichene Nomen durch ein Personalpronomen:\n\na) Ein Fenster ging zu Bruch. ___ muss repariert werden.\nb) Erst spät sind die Wanderer angekommen. ___ sind sehr hungrig.\nc) Die Mannschaft hatte viele Torchancen, aber ___ hat sie nicht genutzt.\nd) Ein alter Mann hatte sich verlaufen, weshalb ___ mich nach dem Weg fragte.\ne) Elli nimmt das Fahrrad, weil ___ für ___ das liebste Transportmittel ist.",
model:"a) Ein Fenster ging zu Bruch. Es muss repariert werden.\nb) Erst spät sind die Wanderer angekommen. Sie sind sehr hungrig.\nc) Die Mannschaft hatte viele Torchancen, aber sie hat sie nicht genutzt.\nd) Ein alter Mann hatte sich verlaufen, weshalb er mich nach dem Weg fragte.\ne) Elli nimmt das Fahrrad, weil es für sie das liebste Transportmittel ist.",
rule:"<div class=rbox>Pronomen richtet sich nach Genus und Numerus:<br>m → <span class=hl>er</span> | f → <span class=hl>sie</span> | n → <span class=hl>es</span> | Pl. → <span class=hl>sie</span></div>"},

{sub:"Verben auswählen: fallen-Komposita",type:"self",
q:"Wählen Sie das passende Verb (ausfallen, gefallen, befallen):\n\na) Das Konzert muss heute leider ___.\nb) Sie tut alles, um ihr zu ___.\nc) Der Hund muss zum Arzt, weil er von Flöhen ___ ist.",
model:"a) Das Konzert muss heute leider ausfallen.\nb) Sie tut alles, um ihr zu gefallen.\nc) Der Hund muss zum Arzt, weil er von Flöhen befallen ist.",
rule:"<div class=rbox>ausfallen = nicht stattfinden<br>gefallen = jemandem angenehm sein<br>befallen = von Krankheit/Parasiten heimgesucht</div>"},

{sub:"Zeitformen (1)",type:"self",
q:"Verb in angegebener Zeitform:\n\na) Präsens: Abends ___ ich immer ein paar Seiten ___. (lesen)\nb) Präteritum: Die Hauptdarstellerin ___ großartig ___. (spielen)\nc) Perfekt: Wir ___ das Spiel leider ___. (verlieren)",
model:"a) Abends lese ich immer ein paar Seiten.\nb) Die Hauptdarstellerin spielte großartig.\nc) Wir haben das Spiel leider verloren.",
rule:"<div class=rbox>Präsens: ich lese<br>Präteritum: spielte (-te, schwaches Verb)<br>Perfekt: haben + Partizip II (verloren)</div>"},

{sub:"Zeitformen (2)",type:"self",
q:"Verb in angegebener Zeitform:\n\na) Präsens: Herr Schöller ___ (sein) Friseur.\nb) Präteritum: Er ___ (lernen) am Oberstufenzentrum Körperpflege.\nc) Perfekt (direkte Rede): Schon als Kind ___ ich mich für Frisuren ___. (sich interessieren)",
model:"a) Herr Schöller ist Friseur.\nb) Er lernte am Oberstufenzentrum Körperpflege.\nc) Schon als Kind habe ich mich für Frisuren interessiert.",
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
q:"Schreiben Sie den Satz in der angegebenen Zeitform:\n\na) Ich plane eine Reise. → Futur I:\nb) Sie reden über den Film. → Präteritum:\nc) Wir besuchen das Museum. → Perfekt:\nd) Du lachst viel. → Perfekt:\ne) Sie schreibt eine Bewerbung. → Futur I:\nf) Er fährt mit dem Zug. → Präteritum:",
model:"a) Ich werde eine Reise planen.\nb) Sie redeten über den Film.\nc) Wir haben das Museum besucht.\nd) Du hast viel gelacht.\ne) Sie wird eine Bewerbung schreiben.\nf) Er fuhr mit dem Zug.",
rule:"<div class=rbox>Futur I: werden + Infinitiv<br>Präteritum schwach: -te (redeten)<br>Präteritum stark: fuhr (fahren)<br>Perfekt: haben + Partizip II</div>"},

{sub:"Verben auswählen (Kollokationen)",type:"self",
q:"Ergänzen Sie das passende Verb:\n\na) Der Ausbilder musste viele Anweisungen ___. (geben / halten / machen)\nb) Auf der Feier sollte sie eine Rede ___. (geben / halten / machen)\nc) Er wollte das Gespräch mit dem Lehrling ___. (entwerfen / führen / ablegen)\nd) Am Anfang mussten sie einen Plan ___. (entwerfen / führen / ablegen)",
model:"a) Der Ausbilder musste viele Anweisungen geben.\nb) Auf der Feier sollte sie eine Rede halten.\nc) Er wollte das Gespräch mit dem Lehrling führen.\nd) Am Anfang mussten sie einen Plan entwerfen.",
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
model:"a) Sie ist abfahrbereit, da sie bereits gepackt hat.\nb) Ich komme pünktlich, obwohl die U-Bahn zu spät gekommen ist.\nc) Nachdem ich den Aufsatz zu Ende geschrieben hatte, konnte ich ihn endlich abschicken.",
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
model:"a) Eine ausreichende Menge an Wasser zu trinken ist beim Sport wichtig, weil der Körper sonst nicht lange belastbar ist.\nb) Sportgetränke enthalten viel Zucker, weshalb man diese Getränke nur in kleinen Mengen trinken soll.\nc) Der Mensch muss auch ohne Sport ausreichend trinken, damit er sich wohl fühlt.\nd) Spezielle Sportgetränke sind bei Sportlern sehr beliebt, obwohl sie sehr süß sind.",
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
model:"a) Sie fragt sich ernsthaft, ob die ganze Arbeit notwendig ist.\nb) Während ich den ersten Gang vorbereite, kannst du den Tisch decken.\nc) Ich möchte das Buch lesen, das du mir empfohlen hast.\nd) Bevor wir mit dem Spiel beginnen, sollten wir uns die Regeln durchlesen, damit wir keinen Fehler begehen.",
rule:"<div class=rbox>Komma zwischen Haupt- und Nebensatz: ob, während, das (Rel.), bevor, damit</div>"},

{sub:"Nebensätze (2)",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Die Mannschaft muss trainieren da schon bald das nächste Spiel ansteht.\nb) Bevor wir uns an den Tisch setzen sollten wir ihn erst decken.\nc) Jetzt sehe ich endlich das Haus das du mir beschrieben hast.\nd) Nachdem wir nach Hause gekommen waren setzten wir uns alle an den warmen Kamin weil wir uns unbedingt aufwärmen mussten.",
model:"a) Die Mannschaft muss trainieren, da schon bald das nächste Spiel ansteht.\nb) Bevor wir uns an den Tisch setzen, sollten wir ihn erst decken.\nc) Jetzt sehe ich endlich das Haus, das du mir beschrieben hast.\nd) Nachdem wir nach Hause gekommen waren, setzten wir uns alle an den warmen Kamin, weil wir uns unbedingt aufwärmen mussten.",
rule:"<div class=rbox>Nebensätze (da, bevor, das, nachdem, weil) → Komma davor und/oder danach</div>"},

{sub:"dass / da / anstatt",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Ich hoffe dass du gestern gut nach Hause gekommen bist.\nb) Ich habe mir Sorgen gemacht da du dich nicht gemeldet hast.\nc) Ob Luise morgen mit uns ins Kino geht weiß ich leider noch nicht.\nd) Anstatt seine Hausaufgaben zu machen spielt er auf dem Computer.\ne) Wenn du da bist geht es mir gut.",
model:"a) Ich hoffe, dass du gestern gut nach Hause gekommen bist.\nb) Ich habe mir Sorgen gemacht, da du dich nicht gemeldet hast.\nc) Ob Luise morgen mit uns ins Kino geht, weiß ich leider noch nicht.\nd) Anstatt seine Hausaufgaben zu machen, spielt er auf dem Computer.\ne) Wenn du da bist, geht es mir gut.",
rule:"<div class=rbox>dass, da, ob, anstatt zu, wenn → Komma trennt Haupt- und Nebensatz</div>"},

{sub:"Relativsatz & Apposition",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Unser Nachbar den wir kaum zu Gesicht bekommen hat uns gestern Kuchen gebracht.\nb) Er traf Katie seine Schulfreundin am Markt.",
model:"a) Unser Nachbar, den wir kaum zu Gesicht bekommen, hat uns gestern Kuchen gebracht.\nb) Er traf Katie, seine Schulfreundin, am Markt.",
rule:"<div class=rbox>Eingeschobener Relativsatz → zwei Kommas<br>Apposition (erläuternder Zusatz) → zwei Kommas</div>"},

{sub:"Aufzählung & aber",type:"self",
q:"Setzen Sie die fehlenden Kommas:\n\na) Kinder Jugendliche und Erwachsene können das Inlineskaten erlernen.\nb) Süßigkeiten schmecken gut aber sind schädlich für die Zähne.\nc) Damit unser Körper Krankheiten bekämpfen kann ist eine gesunde Ernährung wichtig.\nd) Die drei wichtigsten Stoffe in der Ernährung sind Eiweiße Kohlenhydrate und Fette.",
model:"a) Kinder, Jugendliche und Erwachsene können das Inlineskaten erlernen.\nb) Süßigkeiten schmecken gut, aber sind schädlich für die Zähne.\nc) Damit unser Körper Krankheiten bekämpfen kann, ist eine gesunde Ernährung wichtig.\nd) Die drei wichtigsten Stoffe in der Ernährung sind Eiweiße, Kohlenhydrate und Fette.",
rule:"<div class=rbox>Aufzählung: Komma zwischen gleichrangigen Gliedern, <span class=hl>KEIN Komma vor und</span><br>aber → Komma davor<br>Nebensatz (damit) → Komma</div>"},

{sub:"Komplexer Satz",type:"self",
q:"Setzen Sie alle fehlenden Kommas:\n\na) Wasser ist die Grundlage allen Lebens denn jedes Lebewesen benötigt es.\nb) Wasser ist für viele Menschen selbstverständlich da sie nur den Wasserhahn aufdrehen müssen um es zu bekommen.\nc) Kohlenhydrate liefern wichtige Energie die wir benötigen um den Alltag zu meistern.",
model:"a) Wasser ist die Grundlage allen Lebens, denn jedes Lebewesen benötigt es.\nb) Wasser ist für viele Menschen selbstverständlich, da sie nur den Wasserhahn aufdrehen müssen, um es zu bekommen.\nc) Kohlenhydrate liefern wichtige Energie, die wir benötigen, um den Alltag zu meistern.",
rule:"<div class=rbox>denn (HS-Konjunktion) → Komma davor<br>da (NS) → Komma<br>um...zu (Infinitivgruppe) → Komma<br>die (Relativsatz) → Komma</div>"},

{sub:"Indirekte Rede (Konjunktiv I)",type:"self",
q:"Formen Sie in indirekte Rede um:\n\nBeispiel: Anne meint: 'Der Unterricht fällt heute aus.'\n→ Anne meint, der Unterricht falle heute aus.\n\na) Rena behauptet: 'Das Theatertreffen ist erst morgen.'\nb) Walter versichert: 'Ich akzeptiere die Entscheidung.'\nc) Lukas sagt: 'Die Rechtschreib-AG wird erst morgen stattfinden.'",
model:"a) Rena behauptet, das Theatertreffen sei erst morgen.\nb) Walter versichert, er akzeptiere die Entscheidung.\nc) Lukas sagt, die Rechtschreib-AG werde erst morgen stattfinden.",
rule:"<div class=rbox>Indirekte Rede → <span class=hl>Konjunktiv I</span>:<br>ist → sei | akzeptiere → akzeptiere | wird → werde<br>Pronomen anpassen: ich → er/sie</div>"},

{sub:"das oder dass? (Kreuzen)",type:"cross",
q:"Ergänze das, Das, dass oder Dass:",
rows:["(a) Satzanfang: ___ du deine Meinung sagst, ...","(a) ..., ___ finde ich gut.","(b) Satzanfang: ___ Gute war, ...","(b) ..., ___ alle am Spiel beteiligt waren."],
cols:["das","Das","dass","Dass"],
correct:[3,0,1,2],
model:"(a) Dass du deine Meinung sagst, das finde ich gut.\n(b) Das Gute war, dass alle am Spiel beteiligt waren.",
rule:"<div class=rbox><span class=hl>das</span>: Artikel/Pronomen → durch 'dieses' ersetzbar<br><span class=hl>dass</span>: Konjunktion → nicht ersetzbar, leitet Nebensatz ein</div>"},

{sub:"das oder dass? (Lücken)",type:"self",
q:"Ergänzen Sie das oder dass:\n\na) Erkläre mir bitte, warum ___ so ist.\nb) Ich hoffe, ___ du gut nach Hause gekommen bist.\nc) Das Buch, ___ du mir empfohlen hast, war toll.\nd) Er sagte, ___ er morgen kommen würde.",
model:"a) Erkläre mir bitte, warum das so ist.\nb) Ich hoffe, dass du gut nach Hause gekommen bist.\nc) Das Buch, das du mir empfohlen hast, war toll.\nd) Er sagte, dass er morgen kommen würde.",
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