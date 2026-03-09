var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_wortarten_bestimmen",
    title: "Wortarten bestimmen",
    emoji: "🔤",
    color: "#8b5cf6",
    qs: [
      // Aufgabe 1: Adjektiv oder Adverb?
      {
        sub: "Adjektiv oder Adverb?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Der Aufsatz ist nicht (schwer).",
          "(Morgen) bin ich bei Maike.",
          "(Nett) waren wir doch immer.",
          "Ich gehe (gerne) zum Tanzen.",
          "Dabei zog er (komische) Grimassen.",
          "(Wann) sind Sie frei?"
        ],
        cols: ["Adjektiv", "Adverb"],
        correct: [0, 1, 0, 1, 0, 1],
        model: "schwer = Adjektiv, Morgen = Adverb, nett = Adjektiv, gerne = Adverb, komische = Adjektiv, wann = Adverb",
        rule: "<div class=rbox>Adjektive beschreiben Eigenschaften oder Zustände (z.B. schwer, nett, komisch) und können gesteigert werden. Adverbien sind Umstandswörter, die Zeit, Ort, Art und Weise angeben (z.B. morgen, gerne, wann) und sind nicht steigerbar (Ausnahmen: oft, öfter).</div>"
      },
      // Aufgabe 2: Präposition oder Konjunktion?
      {
        sub: "Präposition oder Konjunktion?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Wir gehen, (weil) es gleich regnet.",
          "Morgen bin ich (bei) Maike.",
          "(Wegen) Glatteis ist heute schulfrei.",
          "Ich laufe (und) schwitzte dabei.",
          "Kevins Buch liegt (auf) der Kommode.",
          "Wir machen Feierabend, (weil) es spät ist."
        ],
        cols: ["Präposition", "Konjunktion"],
        correct: [1, 0, 0, 1, 0, 1],
        model: "weil (1,3) = Konjunktion, bei, wegen, auf = Präposition, und = Konjunktion",
        rule: "<div class=rbox>Präpositionen stehen vor Nomen oder Pronomen und geben Verhältnisse an (z.B. bei, wegen, auf). Konjunktionen verbinden Wörter, Satzteile oder Sätze (z.B. weil, und).</div>"
      },
      // Aufgabe 3: Nomen oder Verb? (nominalisierte Verben)
      {
        sub: "Nomen oder Verb? (nominalisierte Verben)",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Das ist ein Anlass zum (Feiern).",
          "Ich gehe gerne zum (Tanzen).",
          "Beim (Schwimmen) muss man aufpassen.",
          "Das (Lachen) der Kinder war laut.",
          "Er liebt das (Reisen).",
          "Sie hat keine Lust zum (Spielen)."
        ],
        cols: ["Nomen", "Verb"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "Alle unterstrichenen Wörter sind nominalisierte Verben und werden als Nomen gebraucht (erkennbar an Signalwörtern wie zum, beim, das).",
        rule: "<div class=rbox>Verben können zu Nomen werden (Nominalisierung). Sie werden dann großgeschrieben und haben oft Begleiter wie <span class=hl>das, zum, beim</span> oder Possessivpronomen. In diesem Fall sind sie als Nomen zu bestimmen.</div>"
      },
      // Aufgabe 4: Artikel oder Pronomen?
      {
        sub: "Artikel oder Pronomen?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Hast du (den) Stempel gesehen?",
          "Das ist doch (euer) Hund.",
          "Ich besuche gern (meine) Oma.",
          "Sie hat (sie) doch gerade gesehen.",
          "(Der) Aufzug funktioniert nicht.",
          "Hat je (jemand) die Sterne gezählt?"
        ],
        cols: ["Artikel", "Pronomen"],
        correct: [0, 1, 1, 1, 0, 1],
        model: "den, der = Artikel; euer, meine, sie, jemand = Pronomen",
        rule: "<div class=rbox>Artikel begleiten ein Nomen und geben Geschlecht, Zahl und Fall an (bestimmte: der, die, das; unbestimmte: ein, eine). Pronomen ersetzen ein Nomen oder weisen auf es hin (Personalpronomen: ich, sie; Possessivpronomen: mein, euer; Indefinitpronomen: jemand).</div>"
      },
      // Aufgabe 5: Gemischte Wortarten (Multiple Choice)
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "Welche Wortart hat das unterstrichene Wort?\n\n(a) Der Aufsatz ist nicht (schwer).\n(b) Wir gehen, (weil) es gleich regnet.\n(c) (Aua)!\n(d) Claire hat (drei) verschiedene Namensschilder.\n(e) Die Kinder zeigten (unaussprechliche) Freude.",
        o: [
          "(a) Adjektiv, (b) Konjunktion, (c) Interjektion, (d) Numerale, (e) Adjektiv",
          "(a) Adverb, (b) Präposition, (c) Nomen, (d) Adjektiv, (e) Adverb",
          "(a) Adjektiv, (b) Präposition, (c) Interjektion, (d) Numerale, (e) Adverb",
          "(a) Verb, (b) Konjunktion, (c) Interjektion, (d) Pronomen, (e) Adjektiv"
        ],
        c: 0,
        model: "schwer = Adjektiv, weil = Konjunktion, Aua = Interjektion, drei = Numerale, unaussprechliche = Adjektiv",
        rule: "<div class=rbox>Wortarten bestimmen: Adjektive beschreiben Eigenschaften, Konjunktionen verbinden Sätze, Interjektionen sind Ausrufe, Numeralien sind Zahlwörter, Adverbien sind Umstandswörter. Achte auf die Funktion im Satz.</div>"
      },
      // Aufgabe 6: Numerale oder Adjektiv?
      {
        sub: "Numerale oder Adjektiv?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Claire hat (drei) verschiedene Namensschilder.",
          "Beim (zweiten) Versuch gelang es.",
          "Er ist der (erste) Mensch auf dem Mond.",
          "Sie hat (viele) Freunde.",
          "Das ist ein (schöner) Tag.",
          "Die (grüne) Wiese ist nass."
        ],
        cols: ["Numerale", "Adjektiv"],
        correct: [0, 0, 0, 0, 1, 1],
        model: "drei, zweiten, erste, viele = Numerale (Zahlwörter); schöner, grüne = Adjektive",
        rule: "<div class=rbox>Numeralien (Zahlwörter) geben eine Anzahl oder einen Platz in einer Reihenfolge an (z.B. drei, zweite, erste, viele). Adjektive beschreiben Eigenschaften (z.B. schön, grün).</div>"
      }
    ]
  }
];