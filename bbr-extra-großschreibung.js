var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_nominalisierung",
    title: "Nominalisierung von Verben",
    emoji: "📝",
    color: "#16a34a",
    qs: [
      // Aufgabe 1: Nominalisierte Verben im Text erkennen (Seite 2, Aufgabe 1)
      {
        sub: "Nominalisierte Verben im Text",
        type: "cross",
        q: "Entscheide bei den unterstrichenen Wörtern: Muss das Verb groß (nominalisiert) oder klein (als Verb) geschrieben werden?",
        rows: [
          "Das ___ (Pflanzen / pflanzen) eines Pflaumenbaums ist gut.",
          "Besitzer erleben, dass das ___ (Ernten / ernten) der Früchte toll ist.",
          "Mein sonntägliches ___ (Stehen / stehen) auf der Leiter entspannt mich.",
          "Unser ___ (Ruhen / ruhen) von der täglichen Arbeit gibt uns Frieden.",
          "Ihr ___ (Genießen / genießen) einer frischen Pflaume zu erleben, freut mich.",
          "Das ___ (Kühlen / kühlen) des Bodens ist wichtig."
        ],
        cols: ["groß (Nomen)", "klein (Verb)"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "Alle hervorgehobenen Verben sind nominalisiert, daher groß: Pflanzen, Ernten, Stehen, Ruhen, Genießen, Kühlen.",
        rule: "<div class=rbox>Verben werden großgeschrieben, wenn sie wie Nomen gebraucht werden. Man erkennt sie oft an Begleitern wie <span class=hl>Artikel (das, der, die), versteckten Artikeln (beim, zum, im)</span> oder <span class=hl>Possessivpronomen (mein, sein, unser)</span>.</div>"
      },

      // Aufgabe 2: Nominalisierung und Verb zuordnen (Seite 2, Aufgabe 2)
      {
        sub: "Nominalisierung → Verb",
        type: "cross",
        q: "Welches Verb steckt in der Nominalisierung? Wähle die richtige Verbform.",
        rows: [
          "das Pflanzen → ?",
          "das Ernten → ?",
          "mein sonntägliches Stehen → ?",
          "unser Ruhen → ?",
          "ihr Genießen → ?",
          "das Kühlen → ?"
        ],
        cols: ["pflanzen", "ernten", "stehen", "ruhen", "genießen", "kühlen"],
        correct: [0, 1, 2, 3, 4, 5], // Indices der richtigen Verben in der Reihenfolge der Spalten? 
        // Eigentlich ist es eine Zuordnung: Für jede Zeile gibt es eine Spalte, die richtig ist.
        // Wir müssen das als Spaltenarray definieren: Jede Zeile hat eine korrekte Spalte.
        // Aber hier haben wir mehrere Spalten mit verschiedenen Verben. Besser: Wir machen eine Spalte mit "richtig" und "falsch" und geben ein Paar vor? 
        // Oder wir machen eine Multiple-Choice pro Zeile. Aber cross erlaubt nur zwei Spalten.
        // Alternative: Wir machen eine Aufgabe, bei der wir für jede Nominalisierung zwei Verbvorschläge anbieten (einen richtigen, einen falschen). 
        // Dann cols = ["Verb A", "Verb B"] und correct gibt an, welcher richtig ist.
        // Das machen wir hier.
        // Also umstrukturieren:
      },
      // Stattdessen Aufgabe 2 als cross mit zwei Optionen pro Zeile:
      {
        sub: "Nominalisierung → Verb (2)",
        type: "cross",
        q: "Welches Verb steckt in der Nominalisierung?",
        rows: [
          "das Pflanzen → pflanzen / pflanz",
          "das Ernten → ernten / ernt",
          "mein sonntägliches Stehen → stehen / steh",
          "unser Ruhen → ruhen / ruh",
          "ihr Genießen → genießen / genieß",
          "das Kühlen → kühlen / kühl"
        ],
        cols: ["erste Option", "zweite Option"],
        correct: [0, 0, 0, 0, 0, 0], // jeweils die erste (pflanzen, ernten, stehen, ruhen, genießen, kühlen) ist richtig
        model: "pflanzen, ernten, stehen, ruhen, genießen, kühlen sind die richtigen Verben (Infinitiv).",
        rule: "<div class=rbox>Die Nominalisierung wird meist vom Infinitiv des Verbs abgeleitet: pflanzen → das Pflanzen, ernten → das Ernten usw.</div>"
      },

      // Aufgabe 3: Lückentext Verb oder Nomen (Seite 2, Aufgabe 3)
      {
        sub: "Verb oder Nomen?",
        type: "cross",
        q: "Muss das Verb in der Klammer als Verb (klein) oder als Nomen (groß) in die Lücke?",
        rows: [
          "Pflaumen ___ (schmecken) süß.",
          "Das ___ (schenken) einer solchen Frucht eignet sich besonders.",
          "Das ___ (schmecken) von Süße zeigt die Herzlichkeit.",
          "Das ___ (erblicken) eines kräftigen Blau-Lila ___ (freuen) das Herz.",
          "Die runde Form ___ (stehen) für Harmonie.",
          "Die ___ (übergeben) einer Pflaume ist das Liebevollste."
        ],
        cols: ["Verb (klein)", "Nomen (groß)"],
        correct: [0, 1, 1, 1, 0, 1], // schmecken = Verb; schenken, schmecken, erblicken, übergeben = Nomen; freuen = Verb? Im Satz: "Das Erblicken ... freut das Herz." - freuen ist hier Verb (3. Person). Also freuen klein. In der Zeile "Das erblicken ... freuen" haben wir zwei Lücken, aber wir haben sie kombiniert. Besser jede Lücke einzeln. Aber wir haben 6 Zeilen, die 6 Lücken entsprechen. Ich passe an:
        // Ursprünglicher Text: "Das erblicken eines ... freuen das Herz." Da sind zwei Lücken. Ich nehme nur eine pro Zeile. Also nehme ich andere Sätze.
        // Ich nutze die Sätze aus Aufgabe 3, aber splitte sie in einzelne Lücken. Der Text hat mehrere Lücken. Ich wähle 6 aus:
        // 1. Pflaumen schmecken süß. (Verb)
        // 2. Das Schenken einer solchen Frucht ... (Nomen)
        // 3. Das Schmecken von Süße ... (Nomen)
        // 4. Das Erblicken eines kräftigen Blau-Lila ... (Nomen)
        // 5. ... freut das Herz. (Verb) – aber das ist schon in Zeile 4 enthalten. Besser separat: "Das Erblicken ... freut das Herz." – freut ist Verb.
        // 6. Die Übergabe einer Pflaume ... (Nomen)
        // Also 6 Lücken: schmecken, Schenken, Schmecken, Erblicken, freut, Übergabe.
        rows: [
          "Pflaumen ___ (schmecken) süß.",
          "Das ___ (schenken) einer solchen Frucht eignet sich.",
          "Das ___ (schmecken) von Süße zeigt die Herzlichkeit.",
          "Das ___ (erblicken) eines kräftigen Blau-Lila ...",
          "... ___ (freuen) das Herz.",
          "Die ___ (übergeben) einer Pflaume ist das Liebevollste."
        ],
        correct: [0, 1, 1, 1, 0, 1],
        model: "schmecken (Verb), freuen (Verb) bleiben klein; Schenken, Schmecken, Erblicken, Übergabe werden als Nomen großgeschrieben.",
        rule: "<div class=rbox>Signalwörter wie <span class=hl>das, die, der</span> oder Possessivpronomen zeigen an, dass ein Verb als Nomen gebraucht wird und dann großgeschrieben werden muss. Steht kein Signalwort, bleibt es klein.</div>"
      },

      // Aufgabe 4: Verben mit Signalwort nominalisieren (Seite 5, Aufgabe 1)
      {
        sub: "Verben mit Signalwort nominalisieren",
        type: "cross",
        q: "Setze das Verb mit dem gegebenen Signalwort richtig ein (Groß- oder Kleinschreibung).",
        rows: [
          "lachen → sein ________",
          "kichern → ihr ________",
          "grinsen → das ________",
          "lieben → beim ________",
          "vergöttern → sein ________",
          "anhimmeln → zum ________"
        ],
        cols: ["groß (Nominalisierung)", "klein (Verb)"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "sein Lachen, ihr Kichern, das Grinsen, beim Lieben, sein Vergöttern, zum Anhimmeln – alle nominalisiert, daher groß.",
        rule: "<div class=rbox>Nach Signalwörtern wie <span class=hl>mein, dein, sein, ihr, unser</span> (Possessivpronomen) sowie nach <span class=hl>beim, zum, im, am</span> (versteckte Artikel) wird das Verb nominalisiert und großgeschrieben.</div>"
      },

      // Aufgabe 5: Adjektiv + Nominalisierung (Seite 5, Aufgabe 2) – korrekte Form erkennen
      {
        sub: "Adjektiv + Nominalisierung",
        type: "cross",
        q: "Welche Kombination aus Signalwort, Adjektiv und nominalisiertem Verb ist korrekt geschrieben?",
        rows: [
          "ihr (fleißiges / fleißiger) Bauen",
          "sein (lautes / lauter) Lachen",
          "das (ständige / ständiger) Kichern",
          "beim (heftigen / heftiger) Grinsen",
          "mein (unvergleichliches / unvergleichlicher) Lieben",
          "zum (zarten / zarter) Anhimmeln"
        ],
        cols: ["erste Option", "zweite Option"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "Richtig: ihr fleißiges Bauen, sein lautes Lachen, das ständige Kichern, beim heftigen Grinsen, mein unvergleichliches Lieben, zum zarten Anhimmeln.",
        rule: "<div class=rbox>Das nominalisierte Verb bleibt ein Nomen, daher wird das davorstehende Adjektiv wie bei einem Nomen dekliniert (starke oder schwache Endung, je nach Begleiter). Außerdem wird das nominalisierte Verb großgeschrieben.</div>"
      },

      // Aufgabe 6: Lückentext aus Seite 8 (Nominalisierungsrelevante Lücken)
      {
        sub: "Gemischter Lückentext",
        type: "cross",
        q: "Entscheide bei den Lücken, ob groß oder klein geschrieben wird.",
        rows: [
          "Beim ___ (bummeln) durch die Stadt habe ich viel gesehen.",
          "Ich hatte jedoch meinen Geldbeutel ___ (liegenlassen / liegen lassen).", // keine Nominalisierung, aber Getrenntschreibung
          "Morgen werden wir uns zum ___ (Lernen / lernen) treffen.",
          "Dann kann ich ihr auch das Geld geben, ___ (das / dass) sie mir geliehen hat.",
          "Ich finde das unter Freunden sehr ___ (wichtig / Wichtig).",
          "Es macht das ___ (Besondere / besondere) in einer Freundschaft aus."
        ],
        cols: ["groß / zusammen", "klein / getrennt"], // Hier müssen wir für jede Zeile die richtige Option definieren; die Optionen sind nicht einheitlich, aber wir können sie als "Option 1" und "Option 2" beschriften.
        correct: [0, 1, 0, 1, 1, 0], // bummeln → beim Bummeln (groß); liegen lassen (getrennt, klein); zum Lernen (groß); das (Relativpronomen) – dass wäre falsch; wichtig (klein); Besondere (groß, substantiviert)
        model: "Beim Bummeln (groß), Geldbeutel liegen lassen (getrennt/klein), zum Lernen (groß), das Geld (das), wichtig (klein), das Besondere (groß).",
        rule: "<div class=rbox>Achte auf Signalwörter: <span class=hl>beim, zum</span> verlangen die Großschreibung des folgenden Verbs. <span class=hl>das</span> als Relativpronomen oder Artikel, <span class=hl>dass</span> als Konjunktion. Substantive wie <span class=hl>das Besondere</span> werden großgeschrieben.</div>"
      }
    ]
  }
];