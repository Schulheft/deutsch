var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_wieder_wider",
    title: "wieder oder wider",
    emoji: "🔁",
    color: "#2563eb",
    qs: [
      // Aufgabe 1: Lückentext (Seite 1)
      {
        sub: "Lückentext (Seite 1)",
        type: "cross",
        q: "Entscheide: wieder (ie) oder wider (i)?",
        rows: [
          "die W___dereröffnung des Sportplatzes",
          "der Termin hatte sich immer w___der verzögert",
          "der Sportplatz ist kaum w___derzuerkennen",
          "nur w___derwillig reichte er die Hand",
          "seinem W___dersacher",
          "beim W___dersehen"
        ],
        cols: ["wieder (ie)", "wider (i)"],
        correct: [0, 0, 0, 1, 1, 0],
        model: "Wiedereröffnung, wieder verzögert, wiederzuerkennen = wieder; widerwillig, Widersacher = wider; Wiedersehen = wieder",
        rule: "<div class=rbox>Die Präposition <span class=hl>wider</span> bedeutet „gegen“ (z.B. widerwillig, Widersacher). Das Adverb <span class=hl>wieder</span> bedeutet „erneut“ oder „zurück“ (z.B. wiedereröffnen, wiedersehen).</div>"
      },
      // Aufgabe 2: Wortbildung (Seite 3, Aufgabe 1)
      {
        sub: "Wortbildung: wieder- oder wider-?",
        type: "cross",
        q: "Welche Vorsilbe ergibt ein sinnvolles Wort?",
        rows: [
          "holen → ___holen",
          "legen → ___legen",
          "sprechen → ___sprechen",
          "rufen → ___rufen",
          "beleben → ___beleben",
          "kommen → ___kommen"
        ],
        cols: ["wieder-", "wider-"],
        correct: [0, 1, 1, 1, 0, 0],
        model: "wiederholen, wiederbeleben, wiederkommen = wieder; widerlegen, widersprechen, widerrufen = wider",
        rule: "<div class=rbox>Wieder- bedeutet „erneut“ oder „zurück“ (wiederholen, wiederbeleben), wider- bedeutet „gegen“ (widerlegen, widersprechen, widerrufen).</div>"
      },
      // Aufgabe 3: Sätze ergänzen (Seite 3, Aufgabe 2)
      {
        sub: "Sätze ergänzen",
        type: "cross",
        q: "Setze das passende Wort mit wieder oder wider ein.",
        rows: [
          "Ich empfehle euch, die Vokabeln zu ___",
          "Da muss ich dir entschieden ___",
          "Der Notarzt konnte den Verunglückten ___",
          "Leider hat der Zeuge seine Aussage zu dem Vorgang ___",
          "Wir würden gerne im Herbst ___",
          "Einer der Einbrecher versuchte, sich seiner Festnahme zu ___"
        ],
        cols: ["wieder", "wider"],
        correct: [0, 1, 0, 1, 0, 1],
        model: "wiederholen, widersprechen, wiederbeleben, widerrufen, wiederkommen, widersetzen",
        rule: "<div class=rbox>In diesen Sätzen: wiederholen (erneut), widersprechen (gegen), wiederbeleben (erneut), widerrufen (gegen), wiederkommen (zurück), widersetzen (gegen).</div>"
      },
      // Aufgabe 4: Entscheidungspaare (Seite 4)
      {
        sub: "Entscheidungspaare",
        type: "cross",
        q: "Wieder oder wider? Wähle die richtige Schreibweise.",
        rows: [
          "Die Gläubigen durften sich nach dem gemeinsamen Gebet ___",
          "Die Fahrgäste reagieren besonnen und ___ sich nicht der Anweisung",
          "Ein kleines gallisches Dorf leistete den Römern ___",
          "Der Tierpfleger wich dem Pferd nicht von der Seite, bis es ___",
          "Das Bad ist so sauber, dass man sich in den Kacheln ___ kann",
          "Die Umfrage soll die Meinung der Stadtbevölkerung ___",
          "Das Verhalten der Hauptperson empfinde ich als ___",
          "Nach der Renaturierung sieht das Flussbett ___ aus",
          "Es ist spät geworden, lass uns ___",
          "Du siehst blass aus. Was ist dir ___"
        ],
        cols: ["wieder", "wider"],
        correct: [0, 1, 1, 0, 1, 1, 1, 0, 0, 1],
        model: "1: wieder setzen, 2: widersetzen, 3: Widerstand, 4: wieder stand, 5+6: widerspiegeln, 7: widernatürlich, 8: wieder natürlich, 9: wieder fahren, 10: widerfahren",
        rule: "<div class=rbox>Wider bedeutet „gegen“ (widersetzen, Widerstand, widerspiegeln, widernatürlich, widerfahren). Wieder bedeutet „erneut“ oder „zurück“ (wieder setzen, wieder stehen, wieder fahren, wieder natürlich).</div>"
      },
      // Aufgabe 5: Getrennt- oder Zusammenschreibung (Seite 5, Aufgabe 2)
      {
        sub: "Getrennt- oder Zusammenschreibung mit 'wieder'",
        type: "cross",
        q: "Entscheide, ob das Verb mit 'wieder' getrennt oder zusammengeschrieben wird. (Achte auf die Bedeutung: zurück = zusammen, erneut = oft getrennt, aber es gibt Ausnahmen.)",
        rows: [
          "Gleich nach der Tour werde ich dir das Rad wieder ___ (bringen)",
          "Nach der Trennung wollte er ihr Herz wieder ___ (gewinnen)",
          "Ich werde den Kandidaten nie wieder ___ (wählen)",
          "Das dürfen wir nicht wieder ___ (zulassen)",
          "Die Ranger konnten dem Tier die Freiheit wieder ___ (schenken)",
          "Herr Grau wollte den ehemaligen Mitarbeiter wieder ___ (einstellen)"
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 0, 0, 1, 1],
        model: "wiederbringen (zurück), wiedergewinnen (zurück), nie wieder wählen (erneut), nicht wieder zulassen (erneut), wiederschenken (zurück), wiedereinstellen (erneut/zurück) – hier zusammen",
        rule: "<div class=rbox>Bei „wieder“ im Sinne von „zurück“ wird meist zusammengeschrieben (wiederbringen, wiedergewinnen). Im Sinne von „erneut“ kann es getrennt oder zusammen sein; oft sind feste Zusammensetzungen wie wiedereinstellen, wiederaufbauen. Bei Zweifel hilft die Bedeutung.</div>"
      }
    ]
  }
];