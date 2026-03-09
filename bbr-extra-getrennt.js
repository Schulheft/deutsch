var BBR_EXTRA_THEMES = [
  {
    id: "getrennt_zusammen",
    title: "Getrennt- und Zusammenschreibung",
    emoji: "📝",
    color: "#16a34a",
    qs: [
      // Aufgabe 1: Nomen + Verb
      {
        sub: "Nomen + Verb",
        type: "cross",
        q: "Entscheide, ob die Verbindung aus Nomen und Verb getrennt oder zusammengeschrieben wird.",
        rows: [
          "Auf dem Gelände darf man nicht mit dem ___ (Rad fahren / Radfahren).",
          "Beim ___ (Rasen mähen / Rasenmähen) kommt man ins Schwitzen.",
          "Denke an das tägliche ___ (Blumen gießen / Blumengießen).",
          "Das ___ (Klavier spielen / Klavierspielen) übt sie jeden Tag."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 1, 1],
        model: "Rad fahren (getrennt, weil Nomen+Verb); Rasenmähen (zusammen, weil nach Präposition 'beim' nominalisiert); Blumengießen (zusammen, weil mit Artikel 'das'); Klavierspielen (zusammen, weil mit Artikel 'das')",
        rule: "<div class=rbox>Verbindungen aus Nomen und Verb werden getrennt geschrieben, wenn das Nomen als Objekt zum Verb gehört (z.B. Rad fahren). Werden sie jedoch als Nomen gebraucht (mit Artikel, Präposition), schreibt man sie zusammen: das Radfahren, beim Rasenmähen.</div>"
      },
      // Aufgabe 2: Adjektiv + Verb (wörtlich/übertragen)
      {
        sub: "Adjektiv + Verb",
        type: "cross",
        q: "Entscheide, ob die Verbindung aus Adjektiv und Verb getrennt oder zusammengeschrieben wird. Achte auf die wörtliche oder übertragene Bedeutung.",
        rows: [
          "Wenn man ___ (gut schreibt / gutschreibt), kann der Empfänger alles entziffern.",
          "Der Bankangestellte will die Zinsen dem Konto ___ (gut schreiben / gutschreiben).",
          "Du musst das Bild ___ (fest halten / festhalten), damit es nicht herunterfällt.",
          "Diese Regel sollten wir im Protokoll ___ (fest halten / festhalten).",
          "Mit flachen Schuhen kannst du ___ (sicher gehen / sichergehen).",
          "In diesem Fall muss der Rechtsanwalt ___ (sicher gehen / sichergehen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 0, 1, 0, 1],
        model: "gut schreiben (wörtlich), gutschreiben (übertragen: anrechnen); fest halten (wörtlich), festhalten (übertragen: notieren); sicher gehen (wörtlich: ohne Sturz), sichergehen (übertragen: sich vergewissern)",
        rule: "<div class=rbox>Verbindungen aus Adjektiv und Verb werden getrennt geschrieben, wenn sie in wörtlicher Bedeutung verwendet werden (jedes Wort behält seine eigene Bedeutung). Bei übertragener Bedeutung entsteht eine neue Gesamtbedeutung, und man schreibt sie zusammen.</div>"
      },
      // Aufgabe 3: Verb + Verb
      {
        sub: "Verb + Verb",
        type: "cross",
        q: "Entscheide, ob die Verbindung aus zwei Verben getrennt oder zusammengeschrieben wird.",
        rows: [
          "Am Wochenende werde ich ___ (schwimmen gehen / schwimmengehen).",
          "Kinder lernen oft ___ (fangen spielen / fangenspielen).",
          "Wir möchten heute Abend ___ (essen gehen / essengehen).",
          "Sie will nächstes Jahr ___ (tanzen lernen / tanzenlernen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 0],
        model: "Alle Verbindungen aus zwei Verben werden getrennt geschrieben: schwimmen gehen, fangen spielen, essen gehen, tanzen lernen.",
        rule: "<div class=rbox>Verbindungen aus zwei Verben schreibt man in der Regel getrennt (z.B. spazieren gehen, lesen üben).</div>"
      },
      // Aufgabe 4: Partizip + Verb
      {
        sub: "Partizip + Verb",
        type: "cross",
        q: "Entscheide, ob die Verbindung aus Partizip und Verb getrennt oder zusammengeschrieben wird.",
        rows: [
          "Gestern haben wir den Fernseher ___ (geliefert bekommen / geliefertbekommen).",
          "Der Verbrecher wurde von der Polizei ___ (gefangen genommen / gefangengenommen).",
          "Ist dir dein Schlüssel ___ (verloren gegangen / verlorengegangen)?",
          "Die beiden sollten ___ (getrennt leben / getrenntleben)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 0],
        model: "geliefert bekommen, gefangen nehmen, verloren gehen, getrennt leben – alle getrennt.",
        rule: "<div class=rbox>Verbindungen aus Partizip und Verb werden in den meisten Fällen getrennt geschrieben.</div>"
      },
      // Aufgabe 5: Verbindungen mit "zu"
      {
        sub: "Verbindungen mit 'zu'",
        type: "cross",
        q: "Entscheide, ob die Verbindung mit 'zu' getrennt oder zusammengeschrieben wird. (Infinitiv mit zu vs. Verb mit Vorsilbe zu-)",
        rows: [
          "Er bat mich, ihm das Buch ___ (zu geben / zugeben).",
          "Du musst ___ (zu geben / zugeben), dass das eine gute Idee war.",
          "Ich versuche, dir ___ (zu hören / zuzuhören).",
          "Bitte ___ (zu schließen / zuschließen) Sie die Tür!",
          "Er hat vergessen, das Fenster ___ (zu schließen / zuschließen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 1, 1, 0],
        model: "zu geben (Infinitiv), zugeben (Verb); zuhören (Verb) -> zuzuhören; zuschließen (Verb); zu schließen (Infinitiv)",
        rule: "<div class=rbox>Bei Verben mit der Vorsilbe 'zu-' wird zusammengeschrieben (z.B. zugeben, zumachen). Handelt es sich um den Infinitiv mit 'zu' bei einem einfachen Verb, wird getrennt geschrieben (z.B. zu geben, zu machen). Die Betonung hilft: bei Zusammenschreibung liegt die Betonung auf 'zu', bei Getrenntschreibung werden beide Teile betont.</div>"
      },
      // Aufgabe 6: Verbindungen mit "zusammen"
      {
        sub: "Verbindungen mit 'zusammen'",
        type: "cross",
        q: "Entscheide, ob die Verbindung mit 'zusammen' getrennt oder zusammengeschrieben wird. (zusammen im Sinne von 'gemeinsam' oder als fester Bestandteil des Verbs?)",
        rows: [
          "Du musst deine Schulsachen ___ (zusammen packen / zusammenpacken).",
          "___ (Zusammen packen / Zusammenpacken) wir das!",
          "Für die Feier müssen wir die Einkaufsliste ___ (zusammen stellen / zusammenstellen).",
          "Die schweren Getränkekisten sollten wir ___ (zusammen tragen / zusammentragen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 0, 1, 0],
        model: "zusammenpacken (fest), Zusammen packen (gemeinsam), zusammenstellen (fest), zusammen tragen (gemeinsam)",
        rule: "<div class=rbox>Die Verbindung mit 'zusammen' wird getrennt geschrieben, wenn 'zusammen' durch 'gemeinsam' ersetzt werden kann (z.B. zusammen packen = gemeinsam packen). Ist dies nicht möglich, handelt es sich um ein festes Verb und es wird zusammengeschrieben (z.B. zusammenpacken = einpacken).</div>"
      },
      // Aufgabe 7: Verbindungen mit "sein"
      {
        sub: "Verbindungen mit 'sein'",
        type: "cross",
        q: "Entscheide, ob die Verbindung mit 'sein' getrennt oder zusammengeschrieben wird. (Als Verb immer getrennt, nur als Nomen zusammen.)",
        rows: [
          "Als Stewardess muss man immer ___ (freundlich sein / freundlichsein).",
          "Das ___ (Freundlichsein / Freundlich sein) fällt ihr leicht.",
          "Mein Bruder ist auch ___ (da sein / dasein) gewesen.",
          "Sein ___ (Da sein / Dasein) war erfüllt."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 0, 1],
        model: "freundlich sein (Verb), das Freundlichsein (Nomen); da sein (Verb), das Dasein (Nomen)",
        rule: "<div class=rbox>Verbindungen mit dem Verb 'sein' werden grundsätzlich getrennt geschrieben (z.B. da sein, freundlich sein). Wenn sie jedoch als Nomen gebraucht werden (mit Artikel), schreibt man sie zusammen: das Dasein, das Freundlichsein.</div>"
      }
    ]
  }
];