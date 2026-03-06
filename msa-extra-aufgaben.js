// ================================================================
// EXTRA-AUFGABEN.JS – Weitere MSA-Aufgaben (200 Fragen, 10 Themen)
// Thema ergänzen: Objekt {id,title,emoji,color,qs:[...]} ans Ende.
// ================================================================

var EXTRA_THEMES = [

// ── KOMMASETZUNG ──
{id:"extra_komma",title:"Kommasetzung",emoji:"🔍",color:"#0f766e",qs:[

{sub:"Anrede",type:"mc",q:"„Komm wir essen Opa!\" – Wo muss das Komma hin?",o:["Komm wir, essen Opa!","Komm, wir essen Opa!","Komm wir essen, Opa!"],c:2,model:"C – Komma vor der Anrede: Komm wir essen, Opa!",rule:"<div class=rbox>Komma vor direkter Anrede (Opa). Der Satz lautet: Komm, wir essen, Opa!</div>"},
{sub:"Aufzählung",type:"mc",q:"„Ich mag Pizza Pasta Eis und Limo.\" – Wo fehlen die Kommas?",o:["Pizza, Pasta, Eis und","Pizza Pasta, Eis, und","Pizza, Pasta, Eis, und"],c:0,model:"A – Aufzählung: Pizza, Pasta, Eis und Limo",rule:"<div class=rbox>Komma zwischen gleichrangigen Aufzählungsgliedern. Kein Komma vor und.</div>"},
{sub:"Nebensatz",type:"mc",q:"„Er sagt dass er heute später kommt.\" – Wo ist die Nahtstelle?",o:["sagt dass,","sagt, dass","sagt dass"],c:1,model:"B – Komma vor dass: Er sagt, dass er heute später kommt.",rule:"<div class=rbox>Komma vor einleitenden Konjunktionen des Nebensatzes (dass, weil, ob, …).</div>"},
{sub:"Relativsatz",type:"mc",q:"„Der Hund der gestern bellte ist heute leise.\" – Markiere den Einschub.",o:["Hund, der gestern bellte, ist","Hund der, gestern bellte ist","Hund, der gestern bellte ist"],c:0,model:"A – Relativsatz: Der Hund, der gestern bellte, ist heute leise.",rule:"<div class=rbox>Eingeschobene Relativsätze werden beiderseits durch Komma abgetrennt.</div>"},
{sub:"Infinitivgruppe",type:"mc",q:"„Um fit zu bleiben joggt sie jeden Tag.\" – Wo trennst du Ziel und Handlung?",o:["bleiben joggt,","bleiben, joggt","Um, fit zu bleiben"],c:1,model:"B – Komma nach Infinitivgruppe: …zu bleiben, joggt sie…",rule:"<div class=rbox>Infinitivgruppe mit um…zu: Komma vor dem Hauptsatz.</div>"},
{sub:"Konzessivsatz",type:"mc",q:"„Wir gehen ins Kino obwohl es regnet.\" – Wo steht der Gegensatz?",o:["Kino, obwohl","Kino obwohl,","obwohl, es"],c:0,model:"A – Komma vor obwohl: …ins Kino, obwohl es regnet.",rule:"<div class=rbox>Komma vor obwohl – trennt Haupt- und Nebensatz.</div>"},
{sub:"Infinitivgruppe",type:"mc",q:"„Ohne zu zögern sprang er ins Wasser.\" – Wo gehört die Pause hin?",o:["zögern, sprang","Ohne, zu zögern","sprang, er"],c:0,model:"A – …ohne zu zögern, sprang er ins Wasser.",rule:"<div class=rbox>Vorangestellte Infinitivgruppe → Komma vor dem Hauptsatz.</div>"},
{sub:"Aufzählung",type:"mc",q:"„Er ist groß stark und mutig.\" – Wo fehlt das Komma?",o:["groß, stark und","groß stark, und","groß, stark, und"],c:0,model:"A – Er ist groß, stark und mutig.",rule:"<div class=rbox>Komma zwischen Adjektiven der Aufzählung. Kein Komma vor und.</div>"},
{sub:"Nebensatz",type:"mc",q:"„Ich glaube du hast recht.\" – Wo fehlt die Trennung?",o:["glaube, du","glaube du,","Ich, glaube"],c:0,model:"A – Ich glaube, du hast recht.",rule:"<div class=rbox>Nach Einleitungsverb (glauben, meinen, sagen) folgt Komma vor dem Nebensatz.</div>"},
{sub:"Apposition",type:"mc",q:"„Berlin die Hauptstadt ist groß.\" – Markiere die Beifügung.",o:["Berlin, die Hauptstadt, ist","Berlin die Hauptstadt, ist","Berlin, die Hauptstadt ist"],c:0,model:"A – Berlin, die Hauptstadt, ist groß.",rule:"<div class=rbox>Apposition (erläuternder Zusatz) wird durch zwei Kommas eingeschlossen.</div>"},
{sub:"Trickfrage",type:"mc",q:"„Entweder wir gehen jetzt oder wir bleiben hier.\" – (Trickfrage!)",o:["jetzt, oder","jetzt oder","Entweder, wir"],c:1,model:"B – Kein Komma: entweder…oder → kein Komma dazwischen.",rule:"<div class=rbox>Kein Komma bei zweiteiligen Konjunktionen: entweder…oder, sowohl…als auch, weder…noch.</div>"},
{sub:"Entgegenstellung",type:"mc",q:"„Ich helfe dir nicht nur heute sondern auch morgen.\" – Wo steht der Kontrast?",o:["heute, sondern","heute sondern,","nur, heute"],c:0,model:"A – …nicht nur heute, sondern auch morgen.",rule:"<div class=rbox>Komma vor sondern – Entgegenstellung.</div>"},
{sub:"Indirekter Fragesatz",type:"mc",q:"„Sie fragte mich ob ich Zeit hätte.\" – Wo beginnt die indirekte Frage?",o:["mich, ob","mich ob,","fragte, mich"],c:0,model:"A – Sie fragte mich, ob ich Zeit hätte.",rule:"<div class=rbox>Indirekter Fragesatz mit ob → Komma vor ob.</div>"},
{sub:"Partizipgruppe",type:"mc",q:"„Lachend vor Glück rannte sie nach Hause.\" – (Partizipgruppe)",o:["Glück, rannte","Lachend, vor","Glück rannte,"],c:0,model:"A – Lachend vor Glück, rannte sie nach Hause.",rule:"<div class=rbox>Vorangestellte Partizipgruppe → Komma am Ende der Gruppe.</div>"},
{sub:"Infinitivgruppe",type:"mc",q:"„Ich hoffe dich bald zu sehen.\" – (Infinitivsatz)",o:["hoffe, dich","hoffe dich,","zu, sehen"],c:0,model:"A – Ich hoffe, dich bald zu sehen.",rule:"<div class=rbox>Infinitivgruppe mit Bezug auf ein Nomen/Pronomen → Komma empfohlen.</div>"},
{sub:"Relativsatz",type:"mc",q:"„Das ist alles was ich weiß.\" – Wo wird eingeschränkt?",o:["alles, was","alles was,","Das, ist"],c:0,model:"A – Das ist alles, was ich weiß.",rule:"<div class=rbox>Relativsatz mit was nach alles, etwas, nichts → Komma davor.</div>"},
{sub:"Komparativsatz",type:"mc",q:"„Je mehr du lernst desto besser wirst du.\" – Wo ist die Steigerung?",o:["lernst, desto","mehr, du","desto, besser"],c:0,model:"A – Je mehr du lernst, desto besser wirst du.",rule:"<div class=rbox>Je…desto-Konstruktion → Komma vor desto.</div>"},
{sub:"Nebensatz",type:"mc",q:"„Egal was passiert ich bleibe hier.\" – Wo trennst du?",o:["passiert, ich","passiert ich,","Egal, was"],c:0,model:"A – Egal was passiert, ich bleibe hier.",rule:"<div class=rbox>Vorangestellter Nebensatz → Komma zwischen NS und HS.</div>"},
{sub:"Infinitivgruppe",type:"mc",q:"„Statt zu arbeiten schläft er.\" – Wo ist die Ersetzung?",o:["arbeiten, schläft","Statt, zu","arbeiten schläft,"],c:0,model:"A – Statt zu arbeiten, schläft er.",rule:"<div class=rbox>Vorangestelltes statt zu + Inf → Komma vor Hauptsatz.</div>"},
{sub:"Trickfrage",type:"mc",q:"„Sowohl er als auch ich sind da.\" – (Trickfrage!)",o:["er, als auch","er als auch","auch, ich"],c:1,model:"B – Kein Komma: sowohl…als auch → kein Komma dazwischen.",rule:"<div class=rbox>Kein Komma bei zweiteiligen Konjunktionen: sowohl…als auch, entweder…oder.</div>"},

]},

// ── GROSS- UND KLEINSCHREIBUNG ──
{id:"extra_gross_klein",title:"Groß- und Kleinschreibung",emoji:"🔠",color:"#dc2626",qs:[

{sub:"nach 'alles'",type:"mc",q:"„Ich wünsche dir alles [gute / Gute].\"",o:["gute","Gute"],c:1,model:"B – alles Gute (Nominalisierung)",rule:"<div class=rbox>Nach alles, etwas, nichts, viel → substantiviertes Adjektiv → GROSS.</div>"},
{sub:"nach 'beim'",type:"mc",q:"„Beim [laufen / Laufen] höre ich Musik.\"",o:["laufen","Laufen"],c:1,model:"B – beim Laufen (Nomen)",rule:"<div class=rbox>Verb nach beim → substantivierter Infinitiv → GROSS.</div>"},
{sub:"nach Artikel",type:"mc",q:"„Das ständige [meckern / Meckern] nervt.\"",o:["meckern","Meckern"],c:1,model:"B – Das ständige Meckern (Artikel + Nomen)",rule:"<div class=rbox>Artikel 'Das' zeigt an: das folgende Verb ist substantiviert → GROSS.</div>"},
{sub:"nach 'etwas'",type:"mc",q:"„Hast du etwas [neues / Neues] gehört?\"",o:["neues","Neues"],c:1,model:"B – etwas Neues",rule:"<div class=rbox>Nach etwas/nichts/alles → Adjektiv wird zum Nomen → GROSS.</div>"},
{sub:"am besten",type:"mc",q:"„Am [besten / Besten] gefällt mir das.\"",o:["besten","Besten"],c:0,model:"A – am besten (Superlativ, klein)",rule:"<div class=rbox>Superlativ mit am: am besten, am schönsten → KLEIN (feste Fügung, kein Nomen).</div>"},
{sub:"Tageszeit",type:"mc",q:"„Wir treffen uns morgen [abend / Abend].\"",o:["abend","Abend"],c:1,model:"B – morgen Abend (Nomen)",rule:"<div class=rbox>Tageszeiten nach Zeitadverbien (morgen, gestern) sind Nomen → GROSS.</div>"},
{sub:"nach 'nichts'",type:"mc",q:"„Ich kenne nichts [schöneres / Schöneres].\"",o:["schöneres","Schöneres"],c:1,model:"B – nichts Schöneres",rule:"<div class=rbox>Nach nichts → Adjektiv wird zum Nomen → GROSS.</div>"},
{sub:"nach 'zum'",type:"mc",q:"„Das ist zum [lachen / Lachen].\"",o:["lachen","Lachen"],c:1,model:"B – zum Lachen (Nomen)",rule:"<div class=rbox>Verb nach zum → substantivierter Infinitiv → GROSS.</div>"},
{sub:"nach Artikel",type:"mc",q:"„Er liebt das [reisen / Reisen].\"",o:["reisen","Reisen"],c:1,model:"B – das Reisen",rule:"<div class=rbox>Artikel 'das' vor Verb: substantivierter Infinitiv → GROSS.</div>"},
{sub:"Tageszeit",type:"mc",q:"„Heute [morgen / Morgen] war es kalt.\"",o:["morgen","Morgen"],c:1,model:"B – heute Morgen (Nomen Tageszeit)",rule:"<div class=rbox>'Heute Morgen' = Nomen (Tageszeit) → GROSS. Nicht: heute morgen früh.</div>"},
{sub:"nach 'viel'",type:"mc",q:"„Viel [wichtiges / Wichtiges] gab es nicht.\"",o:["wichtiges","Wichtiges"],c:1,model:"B – viel Wichtiges",rule:"<div class=rbox>Nach viel → substantiviertes Adjektiv → GROSS.</div>"},
{sub:"Sprache als Nomen",type:"mc",q:"„Sie lernt gerade [deutsch / Deutsch].\"",o:["deutsch","Deutsch"],c:1,model:"B – Deutsch (Sprache/Fach)",rule:"<div class=rbox>Sprachen und Fächer als Nomen → GROSS.</div>"},
{sub:"Personennomen",type:"mc",q:"„Er ist ein [deutscher / Deutscher].\"",o:["deutscher","Deutscher"],c:1,model:"B – ein Deutscher (Nomen)",rule:"<div class=rbox>Nationalitäten als Nomen (Person): ein Deutscher, eine Deutsche → GROSS.</div>"},
{sub:"Adjektiv vor Nomen",type:"mc",q:"„In [naher / Naher] Zukunft passiert es.\"",o:["naher","Naher"],c:0,model:"A – in naher Zukunft (Adjektiv)",rule:"<div class=rbox>Adjektive vor Nomen bleiben KLEIN (attributive Verwendung).</div>"},
{sub:"Nominalisierung",type:"mc",q:"„Das [einzige / Einzige], was zählt.\"",o:["einzige","Einzige"],c:1,model:"B – das Einzige (Nominalisierung)",rule:"<div class=rbox>Wenn Adjektiv als Nomen gebraucht wird (das Einzige = das einzige Ding) → GROSS.</div>"},
{sub:"Verb als Tätigkeit",type:"mc",q:"„Wir gehen heute [schwimmen / Schwimmen].\"",o:["schwimmen","Schwimmen"],c:0,model:"A – heute schwimmen gehen (Verb)",rule:"<div class=rbox>gehen + Verb (Tätigkeit): gehen schwimmen/klettern/tanzen → KLEIN.</div>"},
{sub:"Nomen",type:"mc",q:"„Er hat kein [interesse / Interesse].\"",o:["interesse","Interesse"],c:1,model:"B – kein Interesse (Nomen)",rule:"<div class=rbox>Interesse = Nomen → immer GROSS.</div>"},
{sub:"Zustandswort",type:"mc",q:"„Es ist [schade / Schade].\"",o:["schade","Schade"],c:0,model:"A – Es ist schade. (Adjektiv)",rule:"<div class=rbox>Schade ist ein Adjektiv/Zustandswort → KLEIN (Es ist schade.).</div>"},
{sub:"nach 'alles'",type:"mc",q:"„Alles [wichtige / Wichtige] steht im Buch.\"",o:["wichtige","Wichtige"],c:1,model:"B – alles Wichtige",rule:"<div class=rbox>Nach alles → substantiviertes Adjektiv → GROSS.</div>"},
{sub:"nach Präposition",type:"mc",q:"„Wir sind im [recht / Recht].\"",o:["recht","Recht"],c:1,model:"B – im Recht (Nomen)",rule:"<div class=rbox>im Recht = im (in dem) Recht → Nomen nach Artikel → GROSS.</div>"},

]},

// ── INDIREKTE REDE (KONJUNKTIV) ──
{id:"extra_ind_rede",title:"Indirekte Rede (Konjunktiv)",emoji:"💬",color:"#7c3aed",qs:[

{sub:"Konjunktiv I",type:"mc",q:"Er sagt: „Ich bin müde.\" → Er sagt, er ___ müde.",o:["ist","sei","wäre"],c:1,model:"B – sei (Konjunktiv I)",rule:"<div class=rbox>Indirekte Rede: Konjunktiv I. sein → sei.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"Sie fragt: „Kommst du morgen?\" → Sie fragt, ob ich ___.",o:["komme","kam","kommest"],c:0,model:"A – komme (Konjunktiv I)",rule:"<div class=rbox>kommen → Konjunktiv I: komme (1. Pers. Sg.).</div>"},
{sub:"Konjunktiv II (Ersatzform)",type:"mc",q:"„Wir haben kein Geld.\" → Sie behaupten, sie ___ kein Geld.",o:["haben","hätten","habet"],c:1,model:"B – hätten (Konjunktiv II als Ersatz)",rule:"<div class=rbox>Konjunktiv I 'haben' = Indikativ → Ausweichen auf Konjunktiv II: hätten.</div>"},
{sub:"Konjunktiv II",type:"mc",q:"„Ihr müsst mehr üben.\" → Er meint, wir ___ mehr üben.",o:["müsstet","müssten","müsset"],c:1,model:"B – müssten (Konjunktiv II)",rule:"<div class=rbox>müssen → Konjunktiv I: müsse → identisch mit Indikativ bei wir → Konjunktiv II: müssten.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Wo ist mein Schlüssel?\" → Er fragt, wo sein Schlüssel ___.",o:["ist","sei","wäre"],c:1,model:"B – sei",rule:"<div class=rbox>sein → Konjunktiv I: sei.</div>"},
{sub:"Konjunktiv I Perfekt",type:"mc",q:"„Ich habe es gesehen.\" → Sie sagt, sie ___ es gesehen.",o:["habe","hätte","hat"],c:0,model:"A – habe … gesehen (Konjunktiv I Perfekt)",rule:"<div class=rbox>Perfekt in indirekter Rede: habe + Partizip II → sie habe es gesehen.</div>"},
{sub:"Konjunktiv I Perfekt",type:"mc",q:"„Der Dieb rannte weg.\" → Er sagt, der Dieb ___ weggerannt.",o:["sei","wäre","ist"],c:0,model:"A – sei weggerannt (Konjunktiv I)",rule:"<div class=rbox>Bewegungsverben → Perfekt mit sein: sei weggerannt.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"Papa sagt: „Ich koche heute.\" → Er sagt, er ___ heute.",o:["koche","kocht","kochte"],c:0,model:"A – koche (Konjunktiv I)",rule:"<div class=rbox>kochen → Konjunktiv I: koche.</div>"},
{sub:"Aufforderung (Konjunktiv II)",type:"mc",q:"„Bleibt hier!\", rief er. → Er forderte uns auf, dass wir hier ___.",o:["bleiben","blieben","bleibet"],c:1,model:"B – blieben (Konjunktiv II)",rule:"<div class=rbox>Aufforderung in indirekter Rede → Konjunktiv II: blieben.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Ich werde gewinnen.\" → Sie sagt, sie ___ gewinnen.",o:["werde","würde","wird"],c:0,model:"A – werde (Konjunktiv I)",rule:"<div class=rbox>werden → Konjunktiv I: werde.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Du kannst das.\" → Er meint, ich ___ das.",o:["könne","kann","könnte"],c:0,model:"A – könne (Konjunktiv I)",rule:"<div class=rbox>können → Konjunktiv I: könne.</div>"},
{sub:"Konjunktiv II (Ersatz)",type:"mc",q:"„Wir gehen.\" → Sie sagen, sie ___.",o:["gehen","gingen","gehet"],c:1,model:"B – gingen (Konjunktiv II als Ersatz)",rule:"<div class=rbox>gehen → Konj. I: gehen = Indikativ → Ersatz: gingen (Konjunktiv II).</div>"},
{sub:"Konjunktiv I Perfekt",type:"mc",q:"„Warst du da?\" → Er fragt, ob ich da ___.",o:["war","gewesen sei","gewesen wäre"],c:1,model:"B – gewesen sei (Konjunktiv I Perfekt)",rule:"<div class=rbox>sein, Perfekt in indirekter Rede: sei gewesen.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Ich mag Pizza.\" → Sie sagt, sie ___ Pizza.",o:["mag","möge","möchte"],c:1,model:"B – möge (Konjunktiv I)",rule:"<div class=rbox>mögen → Konjunktiv I: möge.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Die Arbeit muss fertig sein.\" → Er sagt, die Arbeit ___ fertig sein.",o:["müsse","muss","müsste"],c:0,model:"A – müsse (Konjunktiv I)",rule:"<div class=rbox>müssen → Konjunktiv I: müsse.</div>"},
{sub:"Konjunktiv II (Ersatz)",type:"mc",q:"„Wir wissen es nicht.\" → Er sagt, sie ___ es nicht.",o:["wissen","wüssten","wisset"],c:1,model:"B – wüssten (Konjunktiv II)",rule:"<div class=rbox>wissen → Konj. I: wissen = Indikativ → Ersatz Konjunktiv II: wüssten.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Hast du Zeit?\" → Sie fragt, ob ich Zeit ___.",o:["habe","hätte","hast"],c:0,model:"A – habe (Konjunktiv I)",rule:"<div class=rbox>haben → Konjunktiv I: habe.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Ich bin krank\", flüstert er. → Er flüstert, er ___ krank.",o:["sei","ist","wäre"],c:0,model:"A – sei (Konjunktiv I)",rule:"<div class=rbox>sein → Konjunktiv I: sei.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Es regnet.\" → Sie meint, es ___.",o:["regne","regnet","regnete"],c:0,model:"A – regne (Konjunktiv I)",rule:"<div class=rbox>regnen → Konjunktiv I: regne.</div>"},
{sub:"Konjunktiv I",type:"mc",q:"„Ich komme später.\" → Er sagt, er ___ später.",o:["komme","kommt","käme"],c:0,model:"A – komme (Konjunktiv I)",rule:"<div class=rbox>kommen → Konjunktiv I: komme.</div>"},

]},

// ── AKTIV UND PASSIV ──
{id:"extra_passiv",title:"Aktiv und Passiv",emoji:"🔄",color:"#b45309",qs:[

{sub:"Passivbildung",type:"mc",q:"Aktiv: „Der Koch bereitet das Essen zu.\" → Passiv?",o:["Das Essen wird zubereitet.","Der Koch wird zubereitet.","Das Essen zubereitet der Koch."],c:0,model:"A – Das Essen wird zubereitet.",rule:"<div class=rbox>Passiv: Objekt → Subjekt + wird/werden + Partizip II.</div>"},
{sub:"Handelnder im Passiv",type:"mc",q:"„Die Straße wird gesperrt.\" → Wer handelt vermutlich?",o:["Die Autos","Die Polizei","Die Fußgänger"],c:1,model:"B – Die Polizei",rule:"<div class=rbox>Im Passiv tritt der Handelnde in den Hintergrund – aus dem Kontext erschließbar.</div>"},
{sub:"Tempus im Passiv",type:"mc",q:"„Der Dieb wurde gefasst.\" – Welches Tempus?",o:["Präsens","Präteritum","Perfekt"],c:1,model:"B – Präteritum (wurde gefasst)",rule:"<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>"},
{sub:"Passiv mit Modalverb",type:"mc",q:"„Man darf hier nicht rauchen.\" → Wandle in Passiv um.",o:["Hier darf nicht geraucht werden.","Hier wird nicht geraucht.","Rauchen ist verboten."],c:0,model:"A – Hier darf nicht geraucht werden.",rule:"<div class=rbox>Modalverb + Passiv: darf nicht + Infinitiv Passiv (geraucht werden).</div>"},
{sub:"Perfekt Passiv",type:"mc",q:"„Wir haben den Test geschrieben.\" → Passiv?",o:["Der Test wurde geschrieben.","Der Test ist geschrieben worden.","Der Test wird geschrieben werden."],c:1,model:"B – Der Test ist geschrieben worden.",rule:"<div class=rbox>Perfekt Passiv: ist/sind + Partizip II + worden.</div>"},
{sub:"Tempus erkennen",type:"mc",q:"„Die Briefe werden morgen verschickt.\" – Wann passiert es?",o:["Vergangenheit","Gegenwart / Zukunft","Schon erledigt"],c:1,model:"B – Gegenwart/Zukunft",rule:"<div class=rbox>werden + Partizip II (Präsens/Futur) → Vorgang in Gegenwart/Zukunft.</div>"},
{sub:"Agens im Passiv",type:"mc",q:"„Der Baum wurde vom Sturm gefällt.\" – Wer ist der „Täter\"?",o:["Der Baum","Der Sturm","Der Wald"],c:1,model:"B – Der Sturm (von + Dativ)",rule:"<div class=rbox>Das Agens (Handelnder) wird im Passiv mit von + Dativ angegeben.</div>"},
{sub:"Passivbildung",type:"mc",q:"Aktiv: „Niemand sah ihn.\" → Passiv?",o:["Er wurde von niemandem gesehen.","Er sah niemanden.","Niemand wurde von ihm gesehen."],c:0,model:"A – Er wurde von niemandem gesehen.",rule:"<div class=rbox>Akkusativobjekt wird Subjekt; Subjekt (niemand) wird zu von + Dativ.</div>"},
{sub:"Vorgangs- vs. Zustandspassiv",type:"mc",q:"„Der Kuchen wird gerade gebacken.\" → Welche Form?",o:["Vorgangspassiv","Zustandspassiv"],c:0,model:"A – Vorgangspassiv (wird gebacken)",rule:"<div class=rbox>Vorgangspassiv: wird + Partizip II → Vorgang läuft ab.</div>"},
{sub:"Vorgangs- vs. Zustandspassiv",type:"mc",q:"„Die Tür ist geschlossen.\" → Welche Form?",o:["Vorgangspassiv","Zustandspassiv"],c:1,model:"B – Zustandspassiv (ist geschlossen)",rule:"<div class=rbox>Zustandspassiv: ist + Partizip II → Ergebnis eines Vorgangs.</div>"},
{sub:"Präsens Passiv",type:"mc",q:"„Er repariert das Rad.\" → Passiv (Präsens)?",o:["Das Rad wird repariert.","Das Rad ist repariert.","Das Rad wurde repariert."],c:0,model:"A – Das Rad wird repariert.",rule:"<div class=rbox>Präsens Passiv: wird + Partizip II.</div>"},
{sub:"Präteritum Passiv",type:"mc",q:"„Man baute das Haus 1990.\" → Passiv?",o:["Das Haus wird gebaut.","Das Haus wurde gebaut.","Das Haus ist gebaut worden."],c:1,model:"B – Das Haus wurde (1990) gebaut.",rule:"<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>"},
{sub:"Modalverb + Passiv",type:"mc",q:"„Die Hausaufgaben müssen gemacht werden.\" – Was ist das?",o:["Passiv mit Modalverb","Aktiv mit Modalverb"],c:0,model:"A – Passiv mit Modalverb",rule:"<div class=rbox>Modalverb + werden + Partizip II = Passiv mit Modalverb.</div>"},
{sub:"Passivbildung",type:"mc",q:"„Er liest das Buch.\" → Passiv?",o:["Das Buch wird gelesen.","Das Buch gelesen wird.","Er wird gelesen."],c:0,model:"A – Das Buch wird gelesen.",rule:"<div class=rbox>Das Akkusativobjekt wird Subjekt. wird + Partizip II.</div>"},
{sub:"Futur Passiv",type:"mc",q:"„Wir werden das Spiel gewinnen.\" (Aktiv) → Passiv?",o:["Das Spiel wird gewonnen werden.","Das Spiel wird gewonnen.","Das Spiel wurde gewonnen."],c:0,model:"A – Das Spiel wird gewonnen werden.",rule:"<div class=rbox>Futur Passiv: wird + Partizip II + werden.</div>"},
{sub:"Passivbildung",type:"mc",q:"„Der Hund beißt den Postboten.\" → Passiv?",o:["Der Postbote wird gebissen.","Der Hund wird gebissen.","Der Postbote beißt den Hund."],c:0,model:"A – Der Postbote wird (vom Hund) gebissen.",rule:"<div class=rbox>Akkusativobjekt (Postbote) wird Subjekt. Subjekt (Hund) fällt weg oder wird mit von angegeben.</div>"},
{sub:"Dativpassiv",type:"mc",q:"„Man hat mir geholfen.\" → Passiv?",o:["Mir ist geholfen worden.","Ich wurde geholfen.","Mir wird geholfen."],c:0,model:"A – Mir ist geholfen worden.",rule:"<div class=rbox>Bei Dativobjekten: Dativobjekt bleibt im Dativ; Passiv mit werden: Mir ist geholfen worden.</div>"},
{sub:"Tempus",type:"mc",q:"„Der Laden wurde eröffnet.\" – Wann?",o:["Jetzt","Damals","In der Zukunft"],c:1,model:"B – Damals (Präteritum)",rule:"<div class=rbox>wurde + Partizip II = Präteritum Passiv → abgeschlossene Handlung in der Vergangenheit.</div>"},
{sub:"Präsens Passiv",type:"mc",q:"„Sie putzt die Fenster.\" → Passiv (Präsens)?",o:["Die Fenster werden geputzt.","Die Fenster sind geputzt.","Die Fenster wurden geputzt."],c:0,model:"A – Die Fenster werden geputzt.",rule:"<div class=rbox>Präsens Passiv: werden + Partizip II.</div>"},
{sub:"Agens erschließen",type:"mc",q:"„Das Gesetz wird verabschiedet.\" → Wer handelt?",o:["Das Volk","Das Parlament","Die Richter"],c:1,model:"B – Das Parlament",rule:"<div class=rbox>Gesetze werden im Parlament verabschiedet – aus dem Kontext erschließbar.</div>"},

]},

// ── S / SS / SS ──
{id:"extra_slaut",title:"s / ss / ß",emoji:"🔉",color:"#0891b2",qs:[

{sub:"Fluss / fließt",type:"mc",q:"„Der Flu__ flie__t ins Meer.\"",o:["ss / ß","ß / ss","s / ss"],c:0,model:"A – Fluss / fließt",rule:"<div class=rbox>Fluss: kurzes u → ss. fließt: langes ie → ß.</div>"},
{sub:"groß / Spaß",type:"mc",q:"„Das ist ein gro__er Spa__.\"",o:["ss / ß","ß / ß","s / s"],c:1,model:"B – großer / Spaß",rule:"<div class=rbox>groß: langes o → ß. Spaß: langes a → ß.</div>"},
{sub:"weiß / dass",type:"mc",q:"„Ich wei__, da__ du kommst.\"",o:["ss / ss","ß / ss","s / s"],c:1,model:"B – weiß / dass",rule:"<div class=rbox>weiß: langes ei → ß. dass: kurzes a → ss.</div>"},
{sub:"bisschen",type:"mc",q:"„Ein bi__chen Glück.\"",o:["ss","ß","s"],c:0,model:"A – ss → ein bisschen",rule:"<div class=rbox>bisschen: kurzes i → ss (ein bisschen).</div>"},
{sub:"Fußball",type:"mc",q:"„Der Fu__ball ist rund.\"",o:["ss","ß","s"],c:1,model:"B – ß → Fußball",rule:"<div class=rbox>Fuß: langes u → ß.</div>"},
{sub:"süß / Gruß",type:"mc",q:"„Ein sü__er Gru__.\"",o:["ß / ß","ss / ss","ß / ss"],c:0,model:"A – süßer / Gruß",rule:"<div class=rbox>süß: langes ü → ß. Gruß: langes u → ß.</div>"},
{sub:"aß",type:"mc",q:"„Er a__ den Apfel.\"",o:["ss","ß","s"],c:1,model:"B – ß → er aß",rule:"<div class=rbox>aß (Präteritum von essen): langes a → ß.</div>"},
{sub:"Gebiss",type:"mc",q:"„Das Gebi__ ist scharf.\"",o:["ss","ß","s"],c:0,model:"A – ss → Gebiss",rule:"<div class=rbox>Gebiss: kurzes i → ss.</div>"},
{sub:"genießen",type:"mc",q:"„Wir genie__en die Sonne.\"",o:["ss","ß","s"],c:1,model:"B – ß → genießen",rule:"<div class=rbox>genießen: langes ie → ß.</div>"},
{sub:"fast / Glaskasten",type:"mc",q:"„Ein fa__t leerer Gla__kasten.\"",o:["s / s","ss / s","ss / ss"],c:1,model:"B – fast / Glaskasten",rule:"<div class=rbox>fast: Konsonant-Cluster, bleibt s. Glas: langes a → s (kein Dehnungs-Laut).</div>"},
{sub:"Haselnuss",type:"mc",q:"„Die Ha__elnuss.\"",o:["s","ss","ß"],c:1,model:"B – ss → Haselnuss",rule:"<div class=rbox>Haselnuss: 'nuss' hat kurzes u → ss (Nuss).</div>"},
{sub:"Vergiss",type:"mc",q:"„Vergi__ es nicht.\"",o:["s","ss","ß"],c:1,model:"B – ss → Vergiss",rule:"<div class=rbox>vergissen → Imperativ 'vergiss': kurzes i → ss.</div>"},
{sub:"Floß",type:"mc",q:"„Das Flo__ auf dem See.\"",o:["ss","ß","s"],c:1,model:"B – ß → Floß",rule:"<div class=rbox>Floß: langes o → ß.</div>"},
{sub:"draußen",type:"mc",q:"„Er ist drau__en.\"",o:["ss","ß","s"],c:1,model:"B – ß → draußen",rule:"<div class=rbox>draußen: Diphthong au → ß.</div>"},
{sub:"hässlich",type:"mc",q:"„Ein hä__licher Fleck.\"",o:["ss","ß","s"],c:0,model:"A – ss → hässlich",rule:"<div class=rbox>hässlich: kurzes ä → ss.</div>"},
{sub:"Maß (Bierkrug)",type:"mc",q:"„Das Ma__ ist voll.\" (Bierkrug)",o:["ss","ß","s"],c:1,model:"B – ß → das Maß",rule:"<div class=rbox>Maß (Einheit/Bierkrug): langes a → ß.</div>"},
{sub:"Masse",type:"mc",q:"„Die Ma__e der Menschen.\"",o:["ss","ß","s"],c:0,model:"A – ss → Masse",rule:"<div class=rbox>Masse: kurzes a → ss.</div>"},
{sub:"reißt",type:"mc",q:"„Er rei__t die Zeitung.\"",o:["ss","ß","s"],c:1,model:"B – ß → reißt",rule:"<div class=rbox>reißen: Diphthong ei → ß.</div>"},
{sub:"weiß",type:"mc",q:"„Eine wei__e Rose.\"",o:["ss","ß","s"],c:1,model:"B – ß → weiße",rule:"<div class=rbox>weiß: Diphthong ei → ß.</div>"},
{sub:"Schloss",type:"mc",q:"„Das Schlo__ ist alt.\"",o:["ss","ß","s"],c:0,model:"A – ss → Schloss",rule:"<div class=rbox>Schloss: kurzes o → ss.</div>"},

]},

// ── WORTARTEN BESTIMMEN ──
{id:"extra_wortarten",title:"Wortarten bestimmen",emoji:"🧩",color:"#0e7490",qs:[

{sub:"Artikel",type:"mc",q:"„Das Haus ist rot.\" – Wortart von Das?",o:["Artikel","Demonstrativpronomen","Adjektiv"],c:0,model:"A – Artikel",rule:"<div class=rbox>Das als Artikel begleitet ein Nomen direkt. Probe: das, die, der.</div>"},
{sub:"Demonstrativpronomen",type:"mc",q:"„Das ist mein Haus.\" – Wortart von Das?",o:["Artikel","Demonstrativpronomen","Adjektiv"],c:1,model:"B – Demonstrativpronomen",rule:"<div class=rbox>Das ohne nachfolgendes Nomen und mit Verweis auf etwas → Demonstrativpronomen (dieses).</div>"},
{sub:"Personalpronomen",type:"mc",q:"„Ich helfe ihm.\" – Wortart von ihm?",o:["Personalpronomen","Possessivpronomen","Relativpronomen"],c:0,model:"A – Personalpronomen",rule:"<div class=rbox>Personalpronomen ersetzen ein Nomen: er→ihm (Dativ).</div>"},
{sub:"Relativpronomen",type:"mc",q:"„Das Kind, das dort spielt.\" – Wortart des zweiten das?",o:["Artikel","Relativpronomen","Konjunktion"],c:1,model:"B – Relativpronomen",rule:"<div class=rbox>das nach Komma und Bezugswort (Kind) → Relativpronomen (= welches).</div>"},
{sub:"Adverb",type:"mc",q:"„Er läuft schnell.\" – Wortart von schnell?",o:["Adjektiv","Adverb","Verb"],c:1,model:"B – Adverb",rule:"<div class=rbox>schnell modifiziert das Verb (läuft) → Adverb (nicht dekliniert).</div>"},
{sub:"Präposition",type:"mc",q:"„Sie steht hinter mir.\" – Wortart von hinter?",o:["Präposition","Konjunktion","Adverb"],c:0,model:"A – Präposition",rule:"<div class=rbox>hinter verknüpft Nomen/Pronomen und gibt eine Beziehung an → Präposition.</div>"},
{sub:"Konjunktion",type:"mc",q:"„Ich gehe, weil ich müde bin.\" – Wortart von weil?",o:["Präposition","Konjunktion","Pronomen"],c:1,model:"B – Konjunktion",rule:"<div class=rbox>weil leitet einen Nebensatz ein → unterordnende Konjunktion.</div>"},
{sub:"Possessivpronomen",type:"mc",q:"„Mein Auto ist blau.\" – Wortart von Mein?",o:["Personalpronomen","Possessivpronomen","Artikel"],c:1,model:"B – Possessivpronomen",rule:"<div class=rbox>Mein drückt Besitz aus → Possessivpronomen.</div>"},
{sub:"Gradpartikel",type:"mc",q:"„Ein sehr schöner Tag.\" – Wortart von sehr?",o:["Adjektiv","Gradpartikel / Adverb","Nomen"],c:1,model:"B – Gradpartikel / Adverb",rule:"<div class=rbox>sehr steigert das Adjektiv (schöner) → Gradpartikel / Adverb.</div>"},
{sub:"Interjektion",type:"mc",q:"„Huch, das war knapp!\" – Wortart von Huch?",o:["Interjektion","Konjunktion","Pronomen"],c:0,model:"A – Interjektion",rule:"<div class=rbox>Huch ist ein Ausruf ohne grammatische Funktion im Satz → Interjektion.</div>"},
{sub:"Temporaladverb",type:"mc",q:"„Wir sind heute da.\" – Wortart von heute?",o:["Lokaladverb","Temporaladverb","Modaladverb"],c:1,model:"B – Temporaladverb",rule:"<div class=rbox>heute gibt eine Zeitangabe an → Temporaladverb.</div>"},
{sub:"Adjektiv",type:"mc",q:"„Der kluge Hund.\" – Wortart von kluge?",o:["Nomen","Adjektiv","Verb"],c:1,model:"B – Adjektiv",rule:"<div class=rbox>kluge beschreibt das Nomen (Hund) attributiv → Adjektiv.</div>"},
{sub:"Verb",type:"mc",q:"„Er lacht laut.\" – Wortart von lacht?",o:["Verb","Nomen","Adjektiv"],c:0,model:"A – Verb",rule:"<div class=rbox>lacht = Tätigkeit, konjugiert → Verb.</div>"},
{sub:"Modaladverb",type:"mc",q:"„Vielleicht regnet es.\" – Wortart von Vielleicht?",o:["Adverb","Konjunktion","Präposition"],c:0,model:"A – Adverb (Modaladverb)",rule:"<div class=rbox>Vielleicht gibt die Möglichkeit an → Modaladverb.</div>"},
{sub:"Kasus",type:"mc",q:"„Wegen des Regens.\" – Welcher Fall?",o:["Genitiv","Dativ","Akkusativ"],c:0,model:"A – Genitiv",rule:"<div class=rbox>wegen + Genitiv (wegen des Regens).</div>"},
{sub:"Kasus",type:"mc",q:"„Für mich.\" – Welcher Fall?",o:["Nominativ","Dativ","Akkusativ"],c:2,model:"C – Akkusativ",rule:"<div class=rbox>für + Akkusativ: für mich (Akkusativ).</div>"},
{sub:"Indefinitpronomen",type:"mc",q:"„Man sagt das so.\" – Wortart von Man?",o:["Indefinitpronomen","Personalpronomen","Artikel"],c:0,model:"A – Indefinitpronomen",rule:"<div class=rbox>Man verweist unbestimmt auf eine oder mehrere Personen → Indefinitpronomen.</div>"},
{sub:"Interrogativpronomen",type:"mc",q:"„Welcher Film gefällt dir?\" – Wortart von Welcher?",o:["Interrogativpronomen","Relativpronomen","Artikel"],c:0,model:"A – Interrogativpronomen",rule:"<div class=rbox>Welcher leitet eine Frage ein und fragt nach einer Auswahl → Interrogativpronomen.</div>"},
{sub:"Numerale",type:"mc",q:"„Die drei Freunde.\" – Wortart von drei?",o:["Numerale","Adjektiv","Nomen"],c:0,model:"A – Numerale",rule:"<div class=rbox>drei ist eine Kardinalzahl → Numerale.</div>"},
{sub:"Kasus",type:"mc",q:"„Trotz der Kälte.\" – Welcher Fall?",o:["Genitiv","Dativ","Nominativ"],c:0,model:"A – Genitiv",rule:"<div class=rbox>trotz + Genitiv (trotz der Kälte).</div>"},

]},

// ── SATZBAU & SATZVERBINDUNGEN ──
{id:"extra_satzbau",title:"Satzbau & Satzverbindungen",emoji:"🔗",color:"#9333ea",qs:[

{sub:"Finalsatz",type:"mc",q:"„Ich lerne viel, ___ ich die Prüfung bestehe.\"",o:["weil","damit","obwohl"],c:1,model:"B – damit (Ziel)",rule:"<div class=rbox>damit = Absicht/Ziel → Finalsatz.</div>"},
{sub:"Konzessivsatz",type:"mc",q:"„___ es regnete, gingen wir spazieren.\"",o:["Weil","Obwohl","Dass"],c:1,model:"B – Obwohl",rule:"<div class=rbox>Obwohl = Gegensatz/Einräumung → Konzessivsatz.</div>"},
{sub:"Konsekutivadverb",type:"mc",q:"„Er ist krank, ___ kommt er nicht.\"",o:["trotzdem","deshalb","weil"],c:1,model:"B – deshalb",rule:"<div class=rbox>deshalb = Folge (HS + deshalb + HS). Hauptsatz-Anschluss.</div>"},
{sub:"Indirekter Fragesatz",type:"mc",q:"„Ich weiß nicht, ___ er kommt.\"",o:["ob","weil","dass"],c:0,model:"A – ob",rule:"<div class=rbox>Indirekter Fragesatz: ob → Frage ohne Fragezeichen.</div>"},
{sub:"Temporaladverb",type:"mc",q:"„Zuerst essen wir, ___ gehen wir raus.\"",o:["dann","denn","dass"],c:0,model:"A – dann",rule:"<div class=rbox>dann = zeitliche Abfolge (dann = danach). Hauptsatz-Anschluss.</div>"},
{sub:"Temporalsatz",type:"mc",q:"„___ ich zu Hause war, rief er an.\"",o:["Als","Wenn","Da"],c:0,model:"A – Als (einmaliges Ereignis in der Vergangenheit)",rule:"<div class=rbox>Als = einmalige Vergangenheit. Wenn = Wiederholung oder Zukunft.</div>"},
{sub:"Hauptsatz-Konjunktion",type:"mc",q:"„Ich gehe schlafen, ___ ich bin müde.\"",o:["weil","denn","obwohl"],c:1,model:"B – denn (Hauptsatz-Konjunktion)",rule:"<div class=rbox>denn = kausal, verbindet zwei HS (Verb bleibt auf Pos. 2). weil → NS (Verb ans Ende).</div>"},
{sub:"Adversativsatz",type:"mc",q:"„Er ist reich, ___ er ist unglücklich.\"",o:["aber","sondern","oder"],c:0,model:"A – aber",rule:"<div class=rbox>aber = Gegensatz zweier HS.</div>"},
{sub:"Entgegenstellung",type:"mc",q:"„Nicht nur ich, ___ auch du bist da.\"",o:["sondern","aber","oder"],c:0,model:"A – sondern",rule:"<div class=rbox>nicht nur…sondern auch = Erweiterung/Steigerung.</div>"},
{sub:"Konditionalsatz",type:"mc",q:"„___ du Zeit hast, hilf mir.\"",o:["Wenn","Ob","Dass"],c:0,model:"A – Wenn",rule:"<div class=rbox>Wenn = Bedingung → Konditionalsatz.</div>"},
{sub:"dass-Satz",type:"mc",q:"„Er sagt, ___ er kommt.\"",o:["dass","das","weil"],c:0,model:"A – dass",rule:"<div class=rbox>dass leitet einen NS ein (Inhaltssatz). Probe: kein Relativpronomen-Ersatz möglich.</div>"},
{sub:"Temporalsatz",type:"mc",q:"„Ich bleibe hier, ___ du gehst.\"",o:["während","als","wenn"],c:0,model:"A – während",rule:"<div class=rbox>während = Gleichzeitigkeit zweier Handlungen.</div>"},
{sub:"Adversativadverb",type:"mc",q:"„Es ist kalt, ___ scheint die Sonne.\"",o:["trotzdem","deshalb","weil"],c:0,model:"A – trotzdem",rule:"<div class=rbox>trotzdem = obwohl (Adverb, HS-Anschluss).</div>"},
{sub:"Temporalsatz",type:"mc",q:"„___ er ankam, war es dunkel.\"",o:["Als","Wenn","Ob"],c:0,model:"A – Als",rule:"<div class=rbox>Als = einmalig in der Vergangenheit. Wenn = Wiederholung/Zukunft.</div>"},
{sub:"Alternative",type:"mc",q:"„Du kannst gehen ___ bleiben.\"",o:["oder","aber","sondern"],c:0,model:"A – oder",rule:"<div class=rbox>oder = Wahl zwischen zwei Möglichkeiten.</div>"},
{sub:"Komparativsatz",type:"mc",q:"„___ du lernst, wirst du besser.\"",o:["Je mehr","Sowie","Dass"],c:0,model:"A – Je mehr",rule:"<div class=rbox>Je mehr…desto/umso = Steigerungskorrelation.</div>"},
{sub:"Indirekter Fragesatz",type:"mc",q:"„Ich frage mich, ___ das wahr ist.\"",o:["ob","dass","weil"],c:0,model:"A – ob",rule:"<div class=rbox>ob leitet indirekte Entscheidungsfragen ein.</div>"},
{sub:"Finalsatz",type:"mc",q:"„Er arbeitet, ___ Geld zu verdienen.\"",o:["um","damit","weil"],c:0,model:"A – um (zu verdienen)",rule:"<div class=rbox>um…zu + Infinitiv = Absicht (wenn Subjekt gleich bleibt).</div>"},
{sub:"Konsekutivsatz",type:"mc",q:"„Er rennt, ___ er den Bus kriegt.\"",o:["sodass","weil","obwohl"],c:0,model:"A – sodass",rule:"<div class=rbox>sodass = Folge des Rennens.</div>"},
{sub:"Temporalsatz",type:"mc",q:"„___ ich klein war, spielte ich viel.\"",o:["Als","Wenn","Wann"],c:0,model:"A – Als",rule:"<div class=rbox>Als = einmaliger Zeitraum in der Vergangenheit.</div>"},

]},

// ── ZEITFORMEN (TEMPORA) ──
{id:"extra_zeitformen",title:"Zeitformen (Tempora)",emoji:"⏰",color:"#16a34a",qs:[

{sub:"Präteritum",type:"mc",q:"Gestern ___ ich im Kino.",o:["bin","war","werde sein"],c:1,model:"B – war (Präteritum)",rule:"<div class=rbox>Zeitangabe 'gestern' → Vergangenheit. war = Präteritum von sein.</div>"},
{sub:"Perfekt",type:"mc",q:"Ich ___ den Test bereits geschrieben.",o:["habe","bin","werde"],c:0,model:"A – habe … geschrieben (Perfekt)",rule:"<div class=rbox>haben + Partizip II = Perfekt (schreiben → geschrieben).</div>"},
{sub:"Futur I",type:"mc",q:"Morgen ___ wir nach Berlin fahren.",o:["werden","sind","waren"],c:0,model:"A – werden … fahren (Futur I)",rule:"<div class=rbox>werden + Infinitiv = Futur I.</div>"},
{sub:"Plusquamperfekt",type:"mc",q:"Bevor er kam, ___ ich schon gegessen.",o:["habe","hatte","bin"],c:1,model:"B – hatte … gegessen (Plusquamperfekt)",rule:"<div class=rbox>Vorzeitigkeit zur Vergangenheit → Plusquamperfekt: hatte + Partizip II.</div>"},
{sub:"Präsens",type:"mc",q:"Er ___ gerade ein Buch.",o:["liest","las","hat gelesen"],c:0,model:"A – liest (Präsens)",rule:"<div class=rbox>gerade = laufende Handlung im Präsens.</div>"},
{sub:"Tempus erkennen",type:"mc",q:"„Ich schwamm.\" – Welches Tempus?",o:["Präsens","Präteritum","Perfekt"],c:1,model:"B – Präteritum",rule:"<div class=rbox>schwamm = Präteritum von schwimmen (starkes Verb).</div>"},
{sub:"Tempus erkennen",type:"mc",q:"„Du hast gesungen.\" – Welches Tempus?",o:["Präteritum","Perfekt","Futur"],c:1,model:"B – Perfekt",rule:"<div class=rbox>hast + Partizip II (gesungen) = Perfekt.</div>"},
{sub:"Tempus erkennen",type:"mc",q:"„Er wird gewinnen.\" – Welches Tempus?",o:["Futur I","Futur II","Präsens"],c:0,model:"A – Futur I",rule:"<div class=rbox>wird + Infinitiv = Futur I.</div>"},
{sub:"Vorzeitigkeit",type:"mc",q:"Was ist die Vorzeitigkeit zum Präsens?",o:["Perfekt","Plusquamperfekt","Futur"],c:0,model:"A – Perfekt",rule:"<div class=rbox>Relativ zur Gegenwart (Präsens) → das Vorher ist das Perfekt.</div>"},
{sub:"Vorzeitigkeit",type:"mc",q:"Was ist die Vorzeitigkeit zum Präteritum?",o:["Perfekt","Plusquamperfekt","Präsens"],c:1,model:"B – Plusquamperfekt",rule:"<div class=rbox>Relativ zur Vergangenheit (Präteritum) → das Vorher ist das Plusquamperfekt.</div>"},
{sub:"Perfekt mit sein",type:"mc",q:"Ich ___ nach Hause gegangen.",o:["habe","bin","werde"],c:1,model:"B – bin … gegangen",rule:"<div class=rbox>gehen = Bewegungsverb → Perfekt mit sein: bin gegangen.</div>"},
{sub:"Perfekt",type:"mc",q:"Du ___ mir das versprochen.",o:["hast","bist","wirst"],c:0,model:"A – hast … versprochen",rule:"<div class=rbox>versprechen → Perfekt mit haben: hast versprochen.</div>"},
{sub:"Passiv Präteritum",type:"mc",q:"Das Haus ___ 1920 gebaut.",o:["wurde","wird","ist"],c:0,model:"A – wurde (Präteritum Passiv)",rule:"<div class=rbox>1920 = Vergangenheit → Präteritum Passiv: wurde gebaut.</div>"},
{sub:"Futur I",type:"mc",q:"Wir ___ bald fertig sein.",o:["werden","sind","waren"],c:0,model:"A – werden … sein",rule:"<div class=rbox>bald → Zukunft. werden + Infinitiv = Futur I.</div>"},
{sub:"Perfekt",type:"mc",q:"Er ___ den ganzen Tag geschlafen.",o:["hat","ist","war"],c:0,model:"A – hat … geschlafen",rule:"<div class=rbox>schlafen → kein Bewegungsverb → Perfekt mit haben: hat geschlafen.</div>"},
{sub:"Perfekt mit sein",type:"mc",q:"Sie ___ sehr schnell gerannt.",o:["ist","hat","wird"],c:0,model:"A – ist … gerannt",rule:"<div class=rbox>rennen = Bewegungsverb → Perfekt mit sein: ist gerannt.</div>"},
{sub:"Tempus erkennen",type:"mc",q:"„Ich dachte.\" – Welches Tempus?",o:["Präsens","Präteritum","Perfekt"],c:1,model:"B – Präteritum",rule:"<div class=rbox>dachte = Präteritum von denken (gemischtes Verb).</div>"},
{sub:"Futur II",type:"mc",q:"„Wir werden geschlafen haben.\" – Welches Tempus?",o:["Futur I","Futur II"],c:1,model:"B – Futur II",rule:"<div class=rbox>werden + Partizip II + haben/sein = Futur II (vollendete Zukunft).</div>"},
{sub:"Futur I",type:"mc",q:"Ich ___ dich morgen anrufen.",o:["werde","habe","bin"],c:0,model:"A – werde … anrufen",rule:"<div class=rbox>morgen → Zukunft. werden + Infinitiv = Futur I.</div>"},
{sub:"Perfekt",type:"mc",q:"Er ___ es nicht gewusst.",o:["hat","ist","war"],c:0,model:"A – hat … gewusst",rule:"<div class=rbox>wissen → Perfekt mit haben: hat … gewusst.</div>"},

]},

// ── GETRENNT- UND ZUSAMMENSCHREIBUNG ──
{id:"extra_getrennt",title:"Getrennt- und Zusammenschreibung",emoji:"🧩",color:"#ca8a04",qs:[

{sub:"Sportart",type:"mc",q:"„Lass uns heute [Eis laufen / eislaufen].\" (Sportart)",o:["Eis laufen","eislaufen"],c:1,model:"B – eislaufen (Sportart)",rule:"<div class=rbox>Sportarten als festes Gefüge → zusammen: eislaufen, radfahren (als Verb).</div>"},
{sub:"übertragene Bedeutung",type:"mc",q:"„Er ist in der 9. Klasse [sitzen geblieben / sitzengeblieben].\" (nicht versetzt)",o:["sitzen geblieben","sitzengeblieben"],c:1,model:"B – sitzengeblieben (übertragen)",rule:"<div class=rbox>Übertragene Bedeutung → Zusammenschreibung (sitzenbleiben = nicht versetzt werden).</div>"},
{sub:"kennenlernen",type:"mc",q:"„Ich möchte dich gerne [kennen lernen / kennenlernen].\"",o:["kennen lernen","kennenlernen","Beides ist korrekt"],c:2,model:"C – Beides korrekt (Empfehlung: kennenlernen)",rule:"<div class=rbox>Beide Schreibweisen sind laut Duden korrekt. Zusammenschreibung ist empfohlen.</div>"},
{sub:"übertragene Bedeutung",type:"mc",q:"„Du sollst das Projekt [niedrig halten / niedrighalten].\" (begrenzen)",o:["niedrig halten","niedrighalten"],c:1,model:"B – niedrighalten",rule:"<div class=rbox>Übertragene Bedeutung → zusammen: die Kosten niedrighalten.</div>"},
{sub:"Nomen + Verb",type:"mc",q:"„Er kann sehr gut [Auto fahren / Autofahren].\"",o:["Auto fahren","Autofahren"],c:0,model:"A – Auto fahren (Verb-Konstruktion)",rule:"<div class=rbox>Auto fahren: Auto ist Nomen (Objekt) + Verb → getrennt. Das Autofahren (Nomen) → zusammen.</div>"},
{sub:"Verb + gehen",type:"mc",q:"„Wir müssen heute [einkaufen gehen / einkaufengehen].\"",o:["einkaufen gehen","einkaufengehen"],c:0,model:"A – einkaufen gehen",rule:"<div class=rbox>einkaufen gehen: zwei Verben ohne enge Verbindung → getrennt.</div>"},
{sub:"übertragene Bedeutung",type:"mc",q:"„Das ist [schwer wiegend / schwerwiegend].\" (ernst)",o:["schwer wiegend","schwerwiegend"],c:1,model:"B – schwerwiegend",rule:"<div class=rbox>Übertragene Bedeutung (nicht wirklich etwas wiegen) → zusammen: schwerwiegend.</div>"},
{sub:"feste Bedeutung",type:"mc",q:"„Er will [fest halten / festhalten] am Plan.\"",o:["fest halten","festhalten"],c:1,model:"B – festhalten",rule:"<div class=rbox>festhalten an = übertragene Bedeutung (beibehalten) → zusammen.</div>"},
{sub:"Partikelverb",type:"mc",q:"„Komm bitte [her ein / herein].\"",o:["her ein","herein"],c:1,model:"B – herein",rule:"<div class=rbox>Richtungspartikeln (herein, hinaus, herauf) → immer zusammen.</div>"},
{sub:"Nomen + Verb",type:"mc",q:"„Ich werde [Rad fahren / radfahren].\"",o:["Rad fahren","radfahren"],c:0,model:"A – Rad fahren",rule:"<div class=rbox>Rad fahren: Rad ist Nomen (Objekt) → getrennt. Das Radfahren (Nomen) → zusammen.</div>"},
{sub:"Partikelverb",type:"mc",q:"„Er hat den Termin [bei behalten / beibehalten].\"",o:["bei behalten","beibehalten"],c:1,model:"B – beibehalten",rule:"<div class=rbox>beibehalten = festes Partikelverb → immer zusammen.</div>"},
{sub:"Verb + gehen",type:"mc",q:"„Sie will [spazieren gehen / spazierengehen].\"",o:["spazieren gehen","spazierengehen"],c:0,model:"A – spazieren gehen",rule:"<div class=rbox>spazieren gehen: lockere Verbindung → getrennt (laut Duden).</div>"},
{sub:"hoch + Adjektiv",type:"mc",q:"„Das ist [hoch interessant / hochinteressant].\"",o:["hoch interessant","hochinteressant"],c:1,model:"B – hochinteressant",rule:"<div class=rbox>hoch + Adjektiv mit übertragener Steigerung → zusammen.</div>"},
{sub:"beisammen + sein",type:"mc",q:"„Wir wollen [beisammen sein / beisammensein].\"",o:["beisammen sein","beisammensein"],c:0,model:"A – beisammen sein",rule:"<div class=rbox>beisammen sein: beisammen bleibt Adverb + sein → getrennt.</div>"},
{sub:"wiederholt",type:"mc",q:"„Er hat [wieder holt / wiederholt] gelogen.\"",o:["wieder holt","wiederholt"],c:1,model:"B – wiederholt (Adverb)",rule:"<div class=rbox>wiederholt (= mehrmals) → Adjektiv/Adverb, zusammen. wieder holen (Verb) wäre getrennt.</div>"},
{sub:"übertragene Bedeutung",type:"mc",q:"„Ich kann das [gut heißen / gutheißen].\" (zustimmen)",o:["gut heißen","gutheißen"],c:1,model:"B – gutheißen",rule:"<div class=rbox>gutheißen = billigen, zustimmen → übertragen → zusammen.</div>"},
{sub:"fallen lassen",type:"mc",q:"„Sie lässt das Glas [fallen / fallenlassen].\"",o:["fallen","fallenlassen"],c:0,model:"A – fallen (lassen)",rule:"<div class=rbox>fallen lassen (wörtlich: loslassen) → getrennt.</div>"},
{sub:"Partikelverb",type:"mc",q:"„Wir [fern sehen / fernsehen] heute.\"",o:["fern sehen","fernsehen"],c:1,model:"B – fernsehen",rule:"<div class=rbox>fernsehen = festes Partikelverb → zusammen.</div>"},
{sub:"Adverb + Adjektiv",type:"mc",q:"„Er ist [völlig wertlos / völligwertlos].\"",o:["völlig wertlos","völligwertlos"],c:0,model:"A – völlig wertlos",rule:"<div class=rbox>Adverb + Adjektiv bleiben getrennt: völlig wertlos, sehr schön.</div>"},
{sub:"Nominalisierung",type:"mc",q:"„Das [Zusammen kommen / Zusammenkommen].\" (als Nomen)",o:["Zusammen kommen","Zusammenkommen"],c:1,model:"B – das Zusammenkommen (Nomen)",rule:"<div class=rbox>Nominalisierter Infinitiv → zusammen und GROSS: das Zusammenkommen.</div>"},

]},

// ── STILMITTEL & RHETORIK ──
{id:"extra_stilmittel",title:"Stilmittel & Rhetorik",emoji:"🎭",color:"#be185d",qs:[

{sub:"Vergleich",type:"mc",q:"„Stark wie ein Bär.\" – Welches Stilmittel?",o:["Metapher","Vergleich","Ironie"],c:1,model:"B – Vergleich (wie)",rule:"<div class=rbox>Vergleich: Verwendung von wie. Metapher: ohne wie (z. B. er ist ein Bär).</div>"},
{sub:"Personifikation",type:"mc",q:"„Die Sonne lacht.\" – Welches Stilmittel?",o:["Personifikation","Alliteration","Ellipse"],c:0,model:"A – Personifikation",rule:"<div class=rbox>Personifikation: menschliche Eigenschaft wird auf unbelebtes Ding übertragen.</div>"},
{sub:"Metapher",type:"mc",q:"„Ein Meer aus Tränen.\" – Welches Stilmittel?",o:["Metapher","Vergleich","Klimax"],c:0,model:"A – Metapher",rule:"<div class=rbox>Metapher: sprachliches Bild ohne wie. Meer = übertragen für sehr viele Tränen.</div>"},
{sub:"Alliteration",type:"mc",q:"„Milch macht müde Männer munter.\" – Stilmittel?",o:["Alliteration","Metapher","Anapher"],c:0,model:"A – Alliteration",rule:"<div class=rbox>Alliteration: Anlautwiederholung am Wortanfang (m/m/m/m).</div>"},
{sub:"Hyperbel",type:"mc",q:"„Ich habe es dir tausendmal gesagt!\" – Stilmittel?",o:["Hyperbel","Ironie","Symbol"],c:0,model:"A – Hyperbel (Übertreibung)",rule:"<div class=rbox>Hyperbel: bewusste Übertreibung zur Verstärkung.</div>"},
{sub:"Klimax",type:"mc",q:"„Veni, vidi, vici.\" (Ich kam, sah, siegte) – Stilmittel?",o:["Klimax","Ellipse","Alliteration"],c:0,model:"A – Klimax",rule:"<div class=rbox>Klimax: Steigerung in einer Aufzählung (kommen → sehen → siegen = Steigerung).</div>"},
{sub:"Litotes",type:"mc",q:"„Nicht unhübsch.\" (Bedeutet: sehr hübsch) – Stilmittel?",o:["Litotes","Metapher","Vergleich"],c:0,model:"A – Litotes",rule:"<div class=rbox>Litotes: Untertreibung durch doppelte Verneinung → verstärkt die positive Aussage.</div>"},
{sub:"Ironie",type:"mc",q:"„Das ist ja eine schöne Bescherung!\" (negativ gemeint) – Stilmittel?",o:["Ironie","Personifikation","Hyperbel"],c:0,model:"A – Ironie",rule:"<div class=rbox>Ironie: Das Gemeinte ist das Gegenteil des Gesagten.</div>"},
{sub:"Ellipse",type:"mc",q:"„Ende gut, alles gut.\" – Stilmittel?",o:["Ellipse","Metapher","Vergleich"],c:0,model:"A – Ellipse",rule:"<div class=rbox>Ellipse: Auslassung von Satzteilen (hier fehlt das Verb).</div>"},
{sub:"Metapher",type:"mc",q:"„Wir müssen den Gürtel enger schnallen.\" – Stilmittel?",o:["Metapher","Alliteration","Anapher"],c:0,model:"A – Metapher",rule:"<div class=rbox>Metapher: sprachliches Bild für Sparmaßnahmen.</div>"},
{sub:"Antithese",type:"mc",q:"„Heiß und kalt.\" – Stilmittel?",o:["Antithese","Metapher","Vergleich"],c:0,model:"A – Antithese",rule:"<div class=rbox>Antithese: Gegenüberstellung von Gegensätzen.</div>"},
{sub:"Klimax",type:"mc",q:"„Gestern, heute, morgen.\" – Stilmittel?",o:["Klimax","Anapher","Symbol"],c:0,model:"A – Klimax",rule:"<div class=rbox>Klimax: Steigerung / zeitliche Abfolge als Aufzählung.</div>"},
{sub:"Euphemismus",type:"mc",q:"„Er ist von uns gegangen.\" (für: gestorben) – Stilmittel?",o:["Euphemismus","Hyperbel","Ironie"],c:0,model:"A – Euphemismus",rule:"<div class=rbox>Euphemismus: Beschönigung eines unangenehmen Begriffs.</div>"},
{sub:"Symbol",type:"mc",q:"„Ein Herz für Kinder.\" (Herz als …) – Stilmittel?",o:["Symbol","Metapher","Vergleich"],c:0,model:"A – Symbol",rule:"<div class=rbox>Symbol: ein Bild steht stellvertretend für eine Idee (Herz = Liebe/Fürsorge).</div>"},
{sub:"Antithese",type:"mc",q:"„Das Glas ist halb leer / halb voll.\" – Stilmittel?",o:["Antithese","Ironie","Ellipse"],c:0,model:"A – Antithese",rule:"<div class=rbox>Antithese: zwei gegensätzliche Perspektiven auf dasselbe.</div>"},
{sub:"Rhetorische Frage",type:"mc",q:"„Bist du blöd?\" (Frage, auf die man keine Antwort erwartet) – Stilmittel?",o:["Rhetorische Frage","Alliteration","Hyperbel"],c:0,model:"A – Rhetorische Frage",rule:"<div class=rbox>Rhetorische Frage: wird gestellt, ohne eine echte Antwort zu erwarten.</div>"},
{sub:"Repetitio",type:"mc",q:"„Warten, warten, warten.\" – Stilmittel?",o:["Repetitio","Klimax","Vergleich"],c:0,model:"A – Repetitio",rule:"<div class=rbox>Repetitio: Wiederholung desselben Wortes zur Betonung.</div>"},
{sub:"Personifikation",type:"mc",q:"„Väterchen Frost.\" – Stilmittel?",o:["Personifikation","Metapher","Alliteration"],c:0,model:"A – Personifikation",rule:"<div class=rbox>Personifikation: Frost wird vermenschlicht (Väterchen).</div>"},
{sub:"Antithese",type:"mc",q:"„Himmel und Hölle.\" – Stilmittel?",o:["Antithese","Ironie","Symbol"],c:0,model:"A – Antithese",rule:"<div class=rbox>Antithese: Gegensatzpaar (Himmel ↔ Hölle).</div>"},
{sub:"Alliteration",type:"mc",q:"„Haus, Hof, Hund.\" – Stilmittel?",o:["Alliteration","Metapher","Vergleich"],c:0,model:"A – Alliteration",rule:"<div class=rbox>Alliteration: gleicher Anlaut H in allen drei Wörtern.</div>"},

]},

];

// ================================ INIT ================================
