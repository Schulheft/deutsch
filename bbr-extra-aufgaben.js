// ================================================================
// BBR-EXTRA-AUFGABEN.JS – Zusätzliche Übungsaufgaben für die BBR
// basierend auf der PDF "BBR weitere Aufgaben"
// Enthält 10 Themen mit je 20 Aufgaben (Typ: mc)
// Alle Titel enthalten den Zusatz "(extra)" für die Anzeige.
// ================================================================

var BBR_EXTRA_THEMES = [
  // ─────────────────────────────────────────────────────────────
  // Thema 1: Groß- und Kleinschreibung (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_grossklein",
    title: "Groß- und Kleinschreibung (extra)",
    emoji: "🔠",
    color: "#dc2626",
    qs: [
      {
        sub: "Hunde",
        type: "mc",
        q: "Wähle die richtige Schreibweise für das Wort in Klammern:\nHunde sind treue Tiere. (h/H)",
        o: ["h", "H"],
        c: 1,
        model: "H",
        rule: "<div class='rbox'>Nomen werden großgeschrieben. ‚Hunde‘ ist ein Nomen.</div>"
      },
      {
        sub: "Neues",
        type: "mc",
        q: "Ich habe (n/N)eu.es gelernt.",
        o: ["n", "N"],
        c: 1,
        model: "Neues",
        rule: "<div class='rbox'>‚Neues‘ ist ein substantiviertes Adjektiv (man kann ‚etwas Neues‘ sagen) → groß.</div>"
      },
      {
        sub: "Gestern Abend",
        type: "mc",
        q: "Gestern (a/Ab)end war ich im Kino.",
        o: ["a", "A"],
        c: 1,
        model: "Abend",
        rule: "<div class='rbox'>Tageszeiten nach ‚gestern‘, ‚heute‘, ‚morgen‘ werden großgeschrieben: ‚gestern Abend‘.</div>"
      },
      {
        sub: "morgen (Adverb)",
        type: "mc",
        q: "Wir treffen uns (m/M)orgen.",
        o: ["m", "M"],
        c: 0,
        model: "morgen",
        rule: "<div class='rbox'>‚morgen‘ als Zeitadverb wird kleingeschrieben (im Gegensatz zu ‚der Morgen‘).</div>"
      },
      {
        sub: "Satzanfang",
        type: "mc",
        q: "(d/D)as Buch ist interessant.",
        o: ["D", "d"],
        c: 0,
        model: "Das",
        rule: "<div class='rbox'>Am Satzanfang wird der erste Buchstabe großgeschrieben.</div>"
      },
      {
        sub: "Katzen",
        type: "mc",
        q: "(k/K)atzen sind beliebte Haustiere.",
        o: ["k", "K"],
        c: 1,
        model: "Katzen",
        rule: "<div class='rbox'>Nomen werden großgeschrieben.</div>"
      },
      {
        sub: "Eis",
        type: "mc",
        q: "Meine Schwester mag (e/E)is.",
        o: ["e", "E"],
        c: 1,
        model: "Eis",
        rule: "<div class='rbox'>‚Eis‘ ist ein Nomen → groß.</div>"
      },
      {
        sub: "Laufen",
        type: "mc",
        q: "(I/L)aufen macht Spaß.",
        o: ["L", "I"],
        c: 0,
        model: "Laufen",
        rule: "<div class='rbox'>Substantivierte Verben (hier: ‚Laufen‘ als Tätigkeit) werden großgeschrieben.</div>"
      },
      {
        sub: "schwimmen gehen",
        type: "mc",
        q: "Wir gehen heute (s/S)chwimmen.",
        o: ["s", "S"],
        c: 0,
        model: "schwimmen",
        rule: "<div class='rbox'>In Verbindungen wie ‚schwimmen gehen‘, ‚spazieren gehen‘ bleibt das Verb klein.</div>"
      },
      {
        sub: "Nach",
        type: "mc",
        q: "(n/N)ach dem Essen ruhen wir uns aus.",
        o: ["N", "n"],
        c: 0,
        model: "Nach",
        rule: "<div class='rbox'>‚Nach‘ am Satzanfang groß.</div>"
      },
      {
        sub: "Recht haben",
        type: "mc",
        q: "Er hat (r/R)echt.",
        o: ["r", "R"],
        c: 1,
        model: "Recht",
        rule: "<div class='rbox'>‚Recht‘ ist hier ein Nomen (das Recht haben) → groß.</div>"
      },
      {
        sub: "Alles",
        type: "mc",
        q: "Das ist (a/A)lles, was ich weiß.",
        o: ["A", "a"],
        c: 0,
        model: "Alles",
        rule: "<div class='rbox'>‚Alles‘ ist ein Indefinitpronomen, aber am Satzanfang groß.</div>"
      },
      {
        sub: "gute Besserung (a)",
        type: "mc",
        q: "Ich wünsche dir (g/G)ute Besserung.",
        o: ["g", "G"],
        c: 0,
        model: "gute",
        rule: "<div class='rbox'>‚gute‘ ist Adjektiv und bleibt klein.</div>"
      },
      {
        sub: "gute Besserung (b)",
        type: "mc",
        q: "Ich wünsche dir gute (b/B)esserung.",
        o: ["b", "B"],
        c: 1,
        model: "Besserung",
        rule: "<div class='rbox'>‚Besserung‘ ist Nomen → groß.</div>"
      },
      {
        sub: "Heute Mittag (a)",
        type: "mc",
        q: "(h/H)eute Mittag gibt es Suppe.",
        o: ["H", "h"],
        c: 0,
        model: "Heute",
        rule: "<div class='rbox'>‚Heute‘ am Satzanfang groß.</div>"
      },
      {
        sub: "Heute Mittag (b)",
        type: "mc",
        q: "Heute (m/M)ittag gibt es Suppe.",
        o: ["m", "M"],
        c: 1,
        model: "Mittag",
        rule: "<div class='rbox'>Tageszeit nach ‚heute‘ groß.</div>"
      },
      {
        sub: "in",
        type: "mc",
        q: "Wir fahren (i/l)n den Urlaub.",
        o: ["i", "I"],
        c: 0,
        model: "in",
        rule: "<div class='rbox'>‚in‘ ist Präposition → klein.</div>"
      },
      {
        sub: "Das Wetter",
        type: "mc",
        q: "(d/D)as Wetter ist schön.",
        o: ["D", "d"],
        c: 0,
        model: "Das",
        rule: "<div class='rbox'>Satzanfang groß.</div>"
      },
      {
        sub: "Angst",
        type: "mc",
        q: "Sie hat (a/A)ngst vor Spinnen.",
        o: ["a", "A"],
        c: 1,
        model: "Angst",
        rule: "<div class='rbox'>‚Angst‘ ist Nomen → groß.</div>"
      },
      {
        sub: "Kannst",
        type: "mc",
        q: "(k/K)annst du mir helfen?",
        o: ["K", "k"],
        c: 0,
        model: "Kannst",
        rule: "<div class='rbox'>Satzanfang groß.</div>"
      },
      {
        sub: "abends",
        type: "mc",
        q: "Er arbeitet (a/Ab)ends oft lange.",
        o: ["a", "A"],
        c: 0,
        model: "abends",
        rule: "<div class='rbox'>‚abends‘ als Adverb (wann?) wird kleingeschrieben.</div>"
      },
      {
        sub: "Meine",
        type: "mc",
        q: "(m/M)eine Meinung ist wichtig.",
        o: ["M", "m"],
        c: 0,
        model: "Meine",
        rule: "<div class='rbox'>Satzanfang groß.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 2: Getrennt- und Zusammenschreibung (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_getrennt",
    title: "Getrennt- und Zusammenschreibung (extra)",
    emoji: "🧩",
    color: "#ca8a04",
    qs: [
      {
        sub: "einkaufen gehen",
        type: "mc",
        q: "Morgen werden wir (einkaufen gehen / einkaufengehen).",
        o: ["einkaufen gehen", "einkaufengehen"],
        c: 0,
        model: "einkaufen gehen",
        rule: "<div class='rbox'>Verb + Verb: ‚einkaufen gehen‘ wird getrennt geschrieben.</div>"
      },
      {
        sub: "stehen bleiben",
        type: "mc",
        q: "Er bleibt (stehen bleiben / stehenbleiben).",
        o: ["stehen bleiben", "stehenbleiben"],
        c: 0,
        model: "stehen bleiben",
        rule: "<div class='rbox'>Bei wörtlicher Bedeutung (nicht weitergehen) wird ‚stehen bleiben‘ getrennt geschrieben.</div>"
      },
      {
        sub: "kennengelernt",
        type: "mc",
        q: "Ich habe ihn (kennengelernt / kennen gelernt).",
        o: ["kennengelernt", "kennen gelernt"],
        c: 0,
        model: "kennengelernt",
        rule: "<div class='rbox'>‚kennenlernen‘ ist ein festes zusammengesetztes Verb und wird zusammengeschrieben.</div>"
      },
      {
        sub: "stattfinden",
        type: "mc",
        q: "Das Konzert findet (statt / stattfindet).",
        o: ["statt", "stattfindet"],
        c: 0,
        model: "statt",
        rule: "<div class='rbox'>‚stattfinden‘ ist trennbar: ‚findet statt‘ – hier ist die Form ‚statt‘ (als Teil) korrekt.</div>"
      },
      {
        sub: "teilnehmen",
        type: "mc",
        q: "Sie wird (teilnehmen / teil nehmen).",
        o: ["teilnehmen", "teil nehmen"],
        c: 0,
        model: "teilnehmen",
        rule: "<div class='rbox'>‚teilnehmen‘ ist ein festes zusammengesetztes Verb und wird zusammengeschrieben.</div>"
      },
      {
        sub: "Halt machen",
        type: "mc",
        q: "Wir müssen (haltmachen / Halt machen).",
        o: ["haltmachen", "Halt machen"],
        c: 1,
        model: "Halt machen",
        rule: "<div class='rbox'>Substantiv + Verb: ‚Halt machen‘ wird getrennt und ‚Halt‘ großgeschrieben.</div>"
      },
      {
        sub: "Acht geben",
        type: "mc",
        q: "Er hat (achtgegeben / Acht gegeben).",
        o: ["achtgegeben", "Acht gegeben"],
        c: 1,
        model: "Acht gegeben",
        rule: "<div class='rbox'>‚Acht geben‘ (aufpassen) wird getrennt, ‚Acht‘ als Substantiv groß.</div>"
      },
      {
        sub: "schlafen gehen",
        type: "mc",
        q: "Ich möchte (schlafen gehen / schlafengehen).",
        o: ["schlafen gehen", "schlafengehen"],
        c: 0,
        model: "schlafen gehen",
        rule: "<div class='rbox'>Verb + Verb: ‚schlafen gehen‘ getrennt.</div>"
      },
      {
        sub: "leer machen",
        type: "mc",
        q: "Bitte (leer machen / leermachen).",
        o: ["leer machen", "leermachen"],
        c: 0,
        model: "leer machen",
        rule: "<div class='rbox'>Adjektiv + Verb: bei wörtlicher Bedeutung (leer machen = leer machen) getrennt.</div>"
      },
      {
        sub: "frei sprechen",
        type: "mc",
        q: "Du solltest (frei sprechen / freisprechen) – im Sinne von frei reden.",
        o: ["frei sprechen", "freisprechen"],
        c: 0,
        model: "frei sprechen",
        rule: "<div class='rbox'>‚frei sprechen‘ (ohne Manuskript reden) wird getrennt; ‚freisprechen‘ = für unschuldig erklären.</div>"
      },
      {
        sub: "freisprechen",
        type: "mc",
        q: "Der Angeklagte wurde (freigesprochen / frei gesprochen).",
        o: ["freigesprochen", "frei gesprochen"],
        c: 0,
        model: "freigesprochen",
        rule: "<div class='rbox'>‚freisprechen‘ (für unschuldig erklären) ist ein festes Verb und wird zusammengeschrieben.</div>"
      },
      {
        sub: "zurückkommen",
        type: "mc",
        q: "Wir werden (zurückkommen / zurück kommen).",
        o: ["zurückkommen", "zurück kommen"],
        c: 0,
        model: "zurückkommen",
        rule: "<div class='rbox'>‚zurückkommen‘ ist ein trennbares Verb, aber im Infinitiv wird es zusammengeschrieben.</div>"
      },
      {
        sub: "wiederkommen",
        type: "mc",
        q: "Kannst du (wiederkommen / wieder kommen)?",
        o: ["wiederkommen", "wieder kommen"],
        c: 0,
        model: "wiederkommen",
        rule: "<div class='rbox'>‚wiederkommen‘ (noch einmal kommen) wird zusammengeschrieben.</div>"
      },
      {
        sub: "Klavier spielen",
        type: "mc",
        q: "Sie will (Klavier spielen / Klavierspielen).",
        o: ["Klavier spielen", "Klavierspielen"],
        c: 0,
        model: "Klavier spielen",
        rule: "<div class='rbox'>‚Klavier spielen‘ (Tätigkeit) getrennt; ‚Klavierspielen‘ (substantiviert) wäre zusammen, aber hier ist es als Verb gemeint.</div>"
      },
      {
        sub: "schwerfallen",
        type: "mc",
        q: "Das wird mir (schwerfallen / schwer fallen).",
        o: ["schwerfallen", "schwer fallen"],
        c: 0,
        model: "schwerfallen",
        rule: "<div class='rbox'>‚schwerfallen‘ (Mühe machen) ist ein festes Verb → zusammen.</div>"
      },
      {
        sub: "stehengeblieben",
        type: "mc",
        q: "Er ist (stehengeblieben / stehen geblieben).",
        o: ["stehengeblieben", "stehen geblieben"],
        c: 0,
        model: "stehengeblieben",
        rule: "<div class='rbox'>‚stehen bleiben‘ kann zusammen oder getrennt sein. Hier als Partizip: ‚stehengeblieben‘ ist die zusammengeschriebene Form (üblich).</div>"
      },
      {
        sub: "zusammengearbeitet",
        type: "mc",
        q: "Wir haben (zusammengearbeitet / zusammen gearbeitet).",
        o: ["zusammengearbeitet", "zusammen gearbeitet"],
        c: 0,
        model: "zusammengearbeitet",
        rule: "<div class='rbox'>‚zusammenarbeiten‘ ist ein festes Verb → Partizip ‚zusammengearbeitet‘ zusammen.</div>"
      },
      {
        sub: "geht weiter",
        type: "mc",
        q: "Das (geht weiter / weitergeht).",
        o: ["geht weiter", "weitergeht"],
        c: 0,
        model: "geht weiter",
        rule: "<div class='rbox'>‚weitergehen‘ ist trennbar: ‚geht weiter‘.</div>"
      },
      {
        sub: "abnehmen",
        type: "mc",
        q: "Er will (abnehmen / ab nehmen).",
        o: ["abnehmen", "ab nehmen"],
        c: 0,
        model: "abnehmen",
        rule: "<div class='rbox'>‚abnehmen‘ (Gewicht verlieren) ist festes Verb → zusammen.</div>"
      },
      {
        sub: "einkaufen",
        type: "mc",
        q: "Sie muss (einkaufen / ein kaufen).",
        o: ["einkaufen", "ein kaufen"],
        c: 0,
        model: "einkaufen",
        rule: "<div class='rbox'>‚einkaufen‘ ist festes Verb → zusammen.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 3: Zeichensetzung (Kommas) (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_komma",
    title: "Kommasetzung (extra)",
    emoji: "🔍",
    color: "#0f766e",
    qs: [
      {
        sub: "ob (1)",
        type: "mc",
        q: "Wo muss ein Komma stehen?\nSie fragt sich () ob sie kommen soll.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor ‚ob‘ (Nebensatz) steht ein Komma.</div>"
      },
      {
        sub: "dass (1)",
        type: "mc",
        q: "Ich hoffe () dass du bald gesund wirst.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor ‚dass‘ (Nebensatz) steht ein Komma.</div>"
      },
      {
        sub: "weil (1)",
        type: "mc",
        q: "Er ist müde () weil er wenig geschlafen hat.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor ‚weil‘ (Nebensatz) steht ein Komma.</div>"
      },
      {
        sub: "Aufzählung",
        type: "mc",
        q: "Kinder () Jugendliche und Erwachsene sind willkommen.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Bei Aufzählungen wird zwischen den ersten beiden Elementen ein Komma gesetzt, vor ‚und‘ keins.</div>"
      },
      {
        sub: "indirekte Rede",
        type: "mc",
        q: "Er sagte () er komme morgen.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor der indirekten Rede (ohne ‚dass‘) kann ein Komma stehen, es ist optional, aber im BBR wird meist ein Komma verlangt.</div>"
      },
      {
        sub: "wenn (1)",
        type: "mc",
        q: "Wir gehen spazieren () wenn das Wetter schön ist.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor ‚wenn‘ (Nebensatz) Komma.</div>"
      },
      {
        sub: "dass (2)",
        type: "mc",
        q: "Sie weiß () dass sie Recht hat.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor ‚dass‘ Komma.</div>"
      },
      {
        sub: "Relativsatz (1)",
        type: "mc",
        q: "Der Mann () der dort steht () ist mein Onkel.",
        o: ["zwei Kommas", "kein Komma"],
        c: 0,
        model: "zwei Kommas",
        rule: "<div class='rbox'>Relativsätze werden in Kommas eingeschlossen.</div>"
      },
      {
        sub: "Relativsatz (2)",
        type: "mc",
        q: "Bitte geben Sie mir das Buch () das auf dem Tisch liegt.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Relativsatz (‚das‘) → Komma.</div>"
      },
      {
        sub: "um … zu",
        type: "mc",
        q: "Er arbeitet () um Geld zu verdienen.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Infinitivgruppe mit ‚um … zu‘ wird durch Komma abgetrennt.</div>"
      },
      {
        sub: "anstatt … zu",
        type: "mc",
        q: "Anstatt zu lernen () spielt er am Computer.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Infinitivgruppe mit ‚anstatt … zu‘ → Komma.</div>"
      },
      {
        sub: "Apposition",
        type: "mc",
        q: "Ich habe ihn ( ) den besten Freund ( ) eingeladen.",
        o: ["zwei Kommas", "kein Komma"],
        c: 0,
        model: "zwei Kommas",
        rule: "<div class='rbox'>Apposition (Einschub) wird in Kommas eingeschlossen.</div>"
      },
      {
        sub: "aber",
        type: "mc",
        q: "Sie ist nett ( ) aber manchmal laut.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor entgegenstellenden Konjunktionen wie ‚aber‘ steht ein Komma.</div>"
      },
      {
        sub: "und (HS-Reihe)",
        type: "mc",
        q: "Wir fahren nach Berlin ( ) und besuchen das Brandenburger Tor.",
        o: ["mit Komma", "ohne Komma"],
        c: 1,
        model: "ohne Komma",
        rule: "<div class='rbox'>Vor ‚und‘ in Hauptsatzreihen steht kein Komma (außer zur Verdeutlichung).</div>"
      },
      {
        sub: "Aufzählung (2)",
        type: "mc",
        q: "Er kam ( ) ging und setzte sich.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Zwischen gleichrangigen Satzteilen in Aufzählungen steht ein Komma, außer vor ‚und‘.</div>"
      },
      {
        sub: "ob (2)",
        type: "mc",
        q: "Ich weiß nicht () ob er kommt.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor ‚ob‘ Komma.</div>"
      },
      {
        sub: "dass (3)",
        type: "mc",
        q: "Sie freut sich () dass du da bist.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Vor ‚dass‘ Komma.</div>"
      },
      {
        sub: "Relativsatz (3)",
        type: "mc",
        q: "Das Haus () in dem ich wohne () ist alt.",
        o: ["zwei Kommas", "kein Komma"],
        c: 0,
        model: "zwei Kommas",
        rule: "<div class='rbox'>Relativsatz einschließen.</div>"
      },
      {
        sub: "nachdem",
        type: "mc",
        q: "Nachdem er gegessen hatte ( ) ging er schlafen.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Nach vorangestelltem Nebensatz Komma.</div>"
      },
      {
        sub: "um … zu (2)",
        type: "mc",
        q: "Wir trafen uns ( ) um ins Kino zu gehen.",
        o: ["mit Komma", "ohne Komma"],
        c: 0,
        model: "mit Komma",
        rule: "<div class='rbox'>Infinitivgruppe mit ‚um … zu‘ → Komma.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 4: Satzbau (Grammatik) (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_satzbau",
    title: "Satzbau (extra)",
    emoji: "🔗",
    color: "#9333ea",
    qs: [
      {
        sub: "Satzstellung (1)",
        type: "mc",
        q: "Welcher Satz ist korrekt?\n• Ich gehe morgen ins Kino.\n• Morgen ich gehe ins Kino.\n• Morgen gehe ich ins Kino.\n• beide außer dem zweiten",
        o: [
          "Ich gehe morgen ins Kino.",
          "Morgen ich gehe ins Kino.",
          "Morgen gehe ich ins Kino.",
          "beide außer dem zweiten"
        ],
        c: 3,
        model: "beide außer dem zweiten",
        rule: "<div class='rbox'>Im Hauptsatz steht das Verb an zweiter Position. ‚Ich gehe morgen‘ und ‚Morgen gehe ich‘ sind korrekt.</div>"
      },
      {
        sub: "weil-Satz",
        type: "mc",
        q: "Bilde einen Satz mit ‚weil‘: ‚Ich bin müde. Ich habe wenig geschlafen.‘\nWelcher Satz ist korrekt?",
        o: [
          "Weil ich wenig geschlafen habe, bin ich müde.",
          "Ich bin müde, weil ich wenig geschlafen habe.",
          "Ich bin müde, weil ich habe wenig geschlafen.",
          "beide ersten"
        ],
        c: 3,
        model: "beide ersten",
        rule: "<div class='rbox'>Im Nebensatz mit ‚weil‘ steht das Verb am Ende. Die ersten beiden Sätze sind korrekt.</div>"
      },
      {
        sub: "Verbposition HS",
        type: "mc",
        q: "Wo steht das Verb im Hauptsatz?",
        o: ["an erster Stelle", "an zweiter Stelle", "am Ende"],
        c: 1,
        model: "an zweiter Stelle",
        rule: "<div class='rbox'>Hauptsatz: Verb an Position 2.</div>"
      },
      {
        sub: "Verbposition NS",
        type: "mc",
        q: "Wo steht das Verb im Nebensatz?",
        o: ["an erster Stelle", "an zweiter Stelle", "am Ende"],
        c: 2,
        model: "am Ende",
        rule: "<div class='rbox'>Nebensatz: Verb am Ende.</div>"
      },
      {
        sub: "Wortstellung (2)",
        type: "mc",
        q: "Setze die Wörter richtig zusammen: ‚heute – wir – ins Kino – gehen‘\nWelche Sätze sind korrekt?",
        o: [
          "Wir gehen heute ins Kino.",
          "Heute wir gehen ins Kino.",
          "Heute gehen wir ins Kino.",
          "beide (außer der zweiten)"
        ],
        c: 3,
        model: "beide (außer der zweiten)",
        rule: "<div class='rbox'>Beide Sätze sind korrekt, weil das Verb an zweiter Stelle steht.</div>"
      },
      {
        sub: "Nebensatz erkennen",
        type: "mc",
        q: "Welcher Satz ist ein Nebensatz?",
        o: ["weil er krank ist", "Er ist krank."],
        c: 0,
        model: "weil er krank ist",
        rule: "<div class='rbox'>Ein Nebensatz beginnt mit einer unterordnenden Konjunktion und hat das Verb am Ende.</div>"
      },
      {
        sub: "Hauptsatz im Gefüge",
        type: "mc",
        q: "‚Nachdem er gegessen hatte, ging er schlafen.‘ – Was ist der Hauptsatz?",
        o: ["Nachdem er gegessen hatte", "ging er schlafen"],
        c: 1,
        model: "ging er schlafen",
        rule: "<div class='rbox'>Der Hauptsatz ist der Teil, der allein stehen kann: ‚ging er schlafen‘.</div>"
      },
      {
        sub: "Konjunktion wenn",
        type: "mc",
        q: "Ergänze die Konjunktion: ___ du kommst, freue ich mich.",
        o: [
          "Wenn du kommst, freue ich mich.",
          "Du kommst, wenn freue ich mich."
        ],
        c: 0,
        model: "Wenn du kommst, freue ich mich.",
        rule: "<div class='rbox'>‚Wenn‘ leitet einen Nebensatz ein (Verb am Ende).</div>"
      },
      {
        sub: "Nebensatz bestimmen",
        type: "mc",
        q: "‚Ich weiß nicht, ob er kommt.‘ – Was ist der Nebensatz?",
        o: ["Ich weiß nicht", "ob er kommt"],
        c: 1,
        model: "ob er kommt",
        rule: "<div class='rbox'>Der Nebensatz ist ‚ob er kommt‘.</div>"
      },
      {
        sub: "Verbposition (3)",
        type: "mc",
        q: "‚Morgen gehe ich einkaufen.‘ – Das Verb steht an Position:",
        o: ["1", "2", "3"],
        c: 1,
        model: "2",
        rule: "<div class='rbox'>‚gehe‘ ist an Position 2.</div>"
      },
      {
        sub: "Subjekt finden",
        type: "mc",
        q: "‚Dann ging er nach Hause.‘ – Was ist das Subjekt?",
        o: ["Dann", "er"],
        c: 1,
        model: "er",
        rule: "<div class='rbox'>Das Subjekt ist ‚er‘.</div>"
      },
      {
        sub: "dass-Satz",
        type: "mc",
        q: "‚Ich hoffe, dass du kommst.‘ – Der Nebensatz ist:",
        o: ["Ich hoffe", "dass du kommst"],
        c: 1,
        model: "dass du kommst",
        rule: "<div class='rbox'>Nebensatz mit ‚dass‘.</div>"
      },
      {
        sub: "falsche Wortstellung HS",
        type: "mc",
        q: "Welche Wortstellung ist im Hauptsatz immer falsch?",
        o: ["Verb an Position 2", "Verb am Ende", "Verb an Position 1"],
        c: 1,
        model: "Verb am Ende",
        rule: "<div class='rbox'>Im Hauptsatz darf das Verb nicht am Ende stehen (außer in Sonderfällen).</div>"
      },
      {
        sub: "weil-Satz Korrektur",
        type: "mc",
        q: "‚Weil er krank ist, bleibt er zu Hause.‘ – Ist der Satz korrekt?",
        o: [
          "Ja",
          "Nein, richtig: ‚Weil er ist krank, bleibt er zu Hause.‘"
        ],
        c: 0,
        model: "Ja",
        rule: "<div class='rbox'>Im Nebensatz Verb am Ende: ‚weil er krank ist‘ – korrekt.</div>"
      },
      {
        sub: "obwohl-Satz",
        type: "mc",
        q: "‚Obwohl es regnet, gehen wir spazieren.‘ – Der Nebensatz ist:",
        o: ["Obwohl es regnet", "gehen wir spazieren"],
        c: 0,
        model: "Obwohl es regnet",
        rule: "<div class='rbox'>‚Obwohl es regnet‘ ist Nebensatz.</div>"
      },
      {
        sub: "indirekte Rede als NS",
        type: "mc",
        q: "‚Er sagt, er habe keine Zeit.‘ – Ist das ein Nebensatz?",
        o: ["Ja (indirekte Rede)", "Nein"],
        c: 0,
        model: "Ja (indirekte Rede)",
        rule: "<div class='rbox'>Indirekte Rede ohne ‚dass‘ gilt als Nebensatz (Verb an Position 2? Hier steht ‚habe‘ an Position 2? Im BBR wird es dennoch als Nebensatz betrachtet.)</div>"
      },
      {
        sub: "Wortstellung (4)",
        type: "mc",
        q: "Setze die Wörter richtig: ‚ich – morgen – früh – aufstehen – muss‘",
        o: [
          "Ich muss morgen früh aufstehen.",
          "Morgen muss ich früh aufstehen.",
          "Ich morgen früh muss aufstehen.",
          "beide (außer der dritten)"
        ],
        c: 3,
        model: "beide (außer der dritten)",
        rule: "<div class='rbox'>Das finite Verb ‚muss‘ steht an Position 2. Die ersten beiden Sätze sind korrekt.</div>"
      },
      {
        sub: "wann-Satz",
        type: "mc",
        q: "‚Ich möchte wissen, wann er kommt.‘ – Was ist der Nebensatz?",
        o: ["Ich möchte wissen", "wann er kommt"],
        c: 1,
        model: "wann er kommt",
        rule: "<div class='rbox'>‚wann er kommt‘ ist Nebensatz (Verb am Ende).</div>"
      },
      {
        sub: "Relativsatz zählen",
        type: "mc",
        q: "‚Der Hund, der bellt, gehört mir.‘ – Wie viele Nebensätze?",
        o: ["0", "1", "2"],
        c: 1,
        model: "1",
        rule: "<div class='rbox'>Ein Relativsatz: ‚der bellt‘.</div>"
      },
      {
        sub: "Verbposition weil",
        type: "mc",
        q: "‚Er geht ins Kino, weil er den Film sehen will.‘ – Das Verb im Nebensatz steht:",
        o: ["an Position 2", "am Ende"],
        c: 1,
        model: "am Ende",
        rule: "<div class='rbox'>‚will‘ steht am Ende des Nebensatzes.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 5: Wortarten erkennen (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_wortarten",
    title: "Wortarten erkennen (extra)",
    emoji: "🔤",
    color: "#2563eb",
    qs: [
      {
        sub: "Hund",
        type: "mc",
        q: "Welche Wortart ist ‚Hund‘ in ‚Der Hund läuft‘?",
        o: ["Verb", "Nomen", "Adjektiv"],
        c: 1,
        model: "Nomen",
        rule: "<div class='rbox'>‚Hund‘ ist ein Nomen (Substantiv).</div>"
      },
      {
        sub: "läuft",
        type: "mc",
        q: "Welche Wortart ist ‚läuft‘?",
        o: ["Verb", "Nomen", "Adjektiv"],
        c: 0,
        model: "Verb",
        rule: "<div class='rbox'>‚läuft‘ ist ein Verb.</div>"
      },
      {
        sub: "schnell",
        type: "mc",
        q: "Welche Wortart ist ‚schnell‘ in ‚Er läuft schnell‘?",
        o: ["Nomen", "Verb", "Adverb"],
        c: 2,
        model: "Adverb",
        rule: "<div class='rbox'>‚schnell‘ gibt an, wie er läuft → Adverb (oder auch Adjektiv, aber hier adverbial gebraucht).</div>"
      },
      {
        sub: "Ich",
        type: "mc",
        q: "Welche Wortart ist ‚Ich‘?",
        o: ["Nomen", "Pronomen", "Artikel"],
        c: 1,
        model: "Pronomen",
        rule: "<div class='rbox'>‚Ich‘ ist ein Personalpronomen.</div>"
      },
      {
        sub: "der (Artikel)",
        type: "mc",
        q: "Welche Wortart ist ‚der‘ in ‚der Hund‘?",
        o: ["Artikel", "Pronomen", "Konjunktion"],
        c: 0,
        model: "Artikel",
        rule: "<div class='rbox'>‚der‘ ist bestimmter Artikel.</div>"
      },
      {
        sub: "und",
        type: "mc",
        q: "Welche Wortart ist ‚und‘?",
        o: ["Präposition", "Konjunktion", "Adverb"],
        c: 1,
        model: "Konjunktion",
        rule: "<div class='rbox'>‚und‘ ist eine nebenordnende Konjunktion.</div>"
      },
      {
        sub: "in",
        type: "mc",
        q: "Welche Wortart ist ‚in‘ in ‚in der Schule‘?",
        o: ["Präposition", "Konjunktion", "Adverb"],
        c: 0,
        model: "Präposition",
        rule: "<div class='rbox'>‚in‘ ist eine Präposition.</div>"
      },
      {
        sub: "schöner",
        type: "mc",
        q: "Welche Wortart ist ‚schöner‘ in ‚ein schöner Tag‘?",
        o: ["Nomen", "Verb", "Adjektiv"],
        c: 2,
        model: "Adjektiv",
        rule: "<div class='rbox'>‚schöner‘ ist ein Adjektiv (attributiv).</div>"
      },
      {
        sub: "sie (Pronomen)",
        type: "mc",
        q: "Welche Wortart ist ‚sie‘ (Personalpronomen)?",
        o: ["Nomen", "Pronomen", "Artikel"],
        c: 1,
        model: "Pronomen",
        rule: "<div class='rbox'>‚sie‘ ist Personalpronomen.</div>"
      },
      {
        sub: "aber",
        type: "mc",
        q: "Welche Wortart ist ‚aber‘?",
        o: ["Konjunktion", "Präposition", "Adverb"],
        c: 0,
        model: "Konjunktion",
        rule: "<div class='rbox'>‚aber‘ ist eine Konjunktion.</div>"
      },
      {
        sub: "heute",
        type: "mc",
        q: "Welche Wortart ist ‚heute‘?",
        o: ["Nomen", "Adverb", "Adjektiv"],
        c: 1,
        model: "Adverb",
        rule: "<div class='rbox'>‚heute‘ ist ein Temporaladverb.</div>"
      },
      {
        sub: "laufen",
        type: "mc",
        q: "Welche Wortart ist ‚laufen‘?",
        o: ["Verb", "Nomen", "Adjektiv"],
        c: 0,
        model: "Verb",
        rule: "<div class='rbox'>‚laufen‘ ist Verb.</div>"
      },
      {
        sub: "dem",
        type: "mc",
        q: "Welche Wortart ist ‚dem‘ in ‚mit dem Auto‘?",
        o: ["Artikel", "Pronomen", "Präposition"],
        c: 0,
        model: "Artikel",
        rule: "<div class='rbox'>‚dem‘ ist bestimmter Artikel (Dativ).</div>"
      },
      {
        sub: "mein",
        type: "mc",
        q: "Welche Wortart ist ‚mein‘?",
        o: ["Artikel", "Possessivpronomen", "Adjektiv"],
        c: 1,
        model: "Possessivpronomen",
        rule: "<div class='rbox'>‚mein‘ ist ein Possessivpronomen.</div>"
      },
      {
        sub: "schneller (Komparativ)",
        type: "mc",
        q: "Welche Wortart ist ‚schneller‘ in ‚schneller als‘?",
        o: ["Adjektiv (Komparativ)", "Verb", "Adverb"],
        c: 0,
        model: "Adjektiv (Komparativ)",
        rule: "<div class='rbox'>‚schneller‘ ist die Vergleichsform des Adjektivs.</div>"
      },
      {
        sub: "dort",
        type: "mc",
        q: "Welche Wortart ist ‚dort‘?",
        o: ["Nomen", "Adverb", "Konjunktion"],
        c: 1,
        model: "Adverb",
        rule: "<div class='rbox'>‚dort‘ ist ein Lokaladverb.</div>"
      },
      {
        sub: "weil",
        type: "mc",
        q: "Welche Wortart ist ‚weil‘?",
        o: ["Präposition", "Konjunktion", "Adverb"],
        c: 1,
        model: "Konjunktion",
        rule: "<div class='rbox'>‚weil‘ ist eine unterordnende Konjunktion.</div>"
      },
      {
        sub: "die (Artikel)",
        type: "mc",
        q: "Welche Wortart ist ‚die‘ in ‚die Katze‘?",
        o: ["Artikel", "Pronomen", "Konjunktion"],
        c: 0,
        model: "Artikel",
        rule: "<div class='rbox'>‚die‘ ist bestimmter Artikel.</div>"
      },
      {
        sub: "alles",
        type: "mc",
        q: "Welche Wortart ist ‚alles‘?",
        o: ["Nomen", "Pronomen (Indefinitpronomen)", "Adjektiv"],
        c: 1,
        model: "Pronomen (Indefinitpronomen)",
        rule: "<div class='rbox'>‚alles‘ ist ein Indefinitpronomen.</div>"
      },
      {
        sub: "zu (Präposition)",
        type: "mc",
        q: "Welche Wortart ist ‚zu‘ in ‚zu Hause‘?",
        o: ["Präposition", "Konjunktion", "Adverb"],
        c: 0,
        model: "Präposition",
        rule: "<div class='rbox'>‚zu‘ ist hier Präposition.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 6: Zeiten der Verben (Zeitformen) (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_zeitformen",
    title: "Zeitformen (extra)",
    emoji: "⏰",
    color: "#16a34a",
    qs: [
      {
        sub: "Präsens",
        type: "mc",
        q: "Bestimme die Zeitform: ‚Ich gehe zur Schule.‘",
        o: ["Präsens", "Präteritum", "Perfekt"],
        c: 0,
        model: "Präsens",
        rule: "<div class='rbox'>‚gehe‘ ist Präsens (Gegenwart).</div>"
      },
      {
        sub: "Präteritum",
        type: "mc",
        q: "‚Er spielte Fußball.‘ – Zeitform?",
        o: ["Präsens", "Präteritum", "Perfekt"],
        c: 1,
        model: "Präteritum",
        rule: "<div class='rbox'>‚spielte‘ ist Präteritum (einfache Vergangenheit).</div>"
      },
      {
        sub: "Perfekt",
        type: "mc",
        q: "‚Wir haben gegessen.‘ – Zeitform?",
        o: ["Präteritum", "Perfekt", "Plusquamperfekt"],
        c: 1,
        model: "Perfekt",
        rule: "<div class='rbox'>‚haben gegessen‘ ist Perfekt.</div>"
      },
      {
        sub: "Futur I",
        type: "mc",
        q: "‚Sie wird morgen kommen.‘ – Zeitform?",
        o: ["Präsens", "Futur I", "Perfekt"],
        c: 1,
        model: "Futur I",
        rule: "<div class='rbox'>‚wird kommen‘ ist Futur I.</div>"
      },
      {
        sub: "Plusquamperfekt",
        type: "mc",
        q: "‚Nachdem er gegessen hatte, ging er schlafen.‘ – ‚hatte gegessen‘ ist:",
        o: ["Perfekt", "Plusquamperfekt", "Präteritum"],
        c: 1,
        model: "Plusquamperfekt",
        rule: "<div class='rbox'>‚hatte gegessen‘ ist Plusquamperfekt (Vorvergangenheit).</div>"
      },
      {
        sub: "Perfekt (2)",
        type: "mc",
        q: "‚Ich bin gelaufen.‘ – Zeitform?",
        o: ["Präsens", "Perfekt", "Präteritum"],
        c: 1,
        model: "Perfekt",
        rule: "<div class='rbox'>‚bin gelaufen‘ ist Perfekt.</div>"
      },
      {
        sub: "Präteritum stark",
        type: "mc",
        q: "‚Er las ein Buch.‘ – Zeitform?",
        o: ["Präsens", "Präteritum", "Perfekt"],
        c: 1,
        model: "Präteritum",
        rule: "<div class='rbox'>‚las‘ ist Präteritum (starkes Verb).</div>"
      },
      {
        sub: "Futur II",
        type: "mc",
        q: "‚Sie wird gelacht haben.‘ – Zeitform?",
        o: ["Futur II", "Futur I", "Perfekt"],
        c: 0,
        model: "Futur II",
        rule: "<div class='rbox'>‚wird gelacht haben‘ ist Futur II (vollendete Zukunft).</div>"
      },
      {
        sub: "Präsens mit Zukunft",
        type: "mc",
        q: "‚Wir fahren nach Berlin.‘ – Zeitform?",
        o: ["Präsens (auch mit Zukunftsbezug)", "Präteritum", "Futur I"],
        c: 0,
        model: "Präsens (auch mit Zukunftsbezug)",
        rule: "<div class='rbox'>Präsens kann auch für Zukunft stehen.</div>"
      },
      {
        sub: "Perfekt (3)",
        type: "mc",
        q: "‚Er hat geschlafen.‘ – Zeitform?",
        o: ["Perfekt", "Präteritum", "Plusquamperfekt"],
        c: 0,
        model: "Perfekt",
        rule: "<div class='rbox'>‚hat geschlafen‘ ist Perfekt.</div>"
      },
      {
        sub: "Futur I (2)",
        type: "mc",
        q: "‚Sie wird kommen.‘ – Zeitform?",
        o: ["Präsens", "Futur I", "Präteritum"],
        c: 1,
        model: "Futur I",
        rule: "<div class='rbox'>‚wird kommen‘ ist Futur I.</div>"
      },
      {
        sub: "Plusquamperfekt (2)",
        type: "mc",
        q: "‚Ich hatte getanzt.‘ – Zeitform?",
        o: ["Perfekt", "Plusquamperfekt", "Präteritum"],
        c: 1,
        model: "Plusquamperfekt",
        rule: "<div class='rbox'>‚hatte getanzt‘ ist Plusquamperfekt.</div>"
      },
      {
        sub: "Perfekt mit haben",
        type: "mc",
        q: "Setze ins Perfekt: ‚Ich spiele.‘",
        o: ["Ich habe gespielt.", "Ich spielte.", "Ich bin gespielt."],
        c: 0,
        model: "Ich habe gespielt.",
        rule: "<div class='rbox'>Perfekt mit ‚haben‘ + Partizip II.</div>"
      },
      {
        sub: "Präteritum singen",
        type: "mc",
        q: "Setze ins Präteritum: ‚Sie singt.‘",
        o: ["Sie sang.", "Sie hat gesungen.", "Sie singte."],
        c: 0,
        model: "Sie sang.",
        rule: "<div class='rbox'>Präteritum von ‚singen‘ ist ‚sang‘.</div>"
      },
      {
        sub: "Futur I (3)",
        type: "mc",
        q: "Setze ins Futur I: ‚Wir lernen.‘",
        o: ["Wir werden lernen.", "Wir lernten.", "Wir haben gelernt."],
        c: 0,
        model: "Wir werden lernen.",
        rule: "<div class='rbox'>Futur I: werden + Infinitiv.</div>"
      },
      {
        sub: "Hilfsverb sein",
        type: "mc",
        q: "‚Er ist geschwommen.‘ – Welches Hilfsverb?",
        o: ["haben", "sein", "werden"],
        c: 1,
        model: "sein",
        rule: "<div class='rbox'>Bei Verben der Bewegung (schwimmen) oft ‚sein‘.</div>"
      },
      {
        sub: "Hilfsverb haben",
        type: "mc",
        q: "‚Ich habe gefragt.‘ – Hilfsverb?",
        o: ["haben", "sein", "werden"],
        c: 0,
        model: "haben",
        rule: "<div class='rbox'>Die meisten Verben bilden das Perfekt mit ‚haben‘.</div>"
      },
      {
        sub: "Plusquamperfekt (3)",
        type: "mc",
        q: "‚Sie waren gekommen.‘ – Zeitform?",
        o: ["Perfekt", "Plusquamperfekt", "Präteritum"],
        c: 1,
        model: "Plusquamperfekt",
        rule: "<div class='rbox'>‚waren gekommen‘ ist Plusquamperfekt.</div>"
      },
      {
        sub: "Futur I (4)",
        type: "mc",
        q: "‚Du wirst sehen.‘ – Zeitform?",
        o: ["Futur I", "Präsens Passiv", "Präteritum"],
        c: 0,
        model: "Futur I",
        rule: "<div class='rbox'>‚wirst sehen‘ = Futur I.</div>"
      },
      {
        sub: "Konjunktiv II",
        type: "mc",
        q: "‚Ich würde kommen.‘ – Welche Zeitform?",
        o: ["Futur I", "Konjunktiv II", "Präteritum"],
        c: 1,
        model: "Konjunktiv II",
        rule: "<div class='rbox'>‚würde kommen‘ ist Konjunktiv II (Höflichkeitsform oder Irrealis).</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 7: Fälle (Kasus) (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_faelle",
    title: "Fälle (Kasus) (extra)",
    emoji: "📘",
    color: "#0891b2",
    qs: [
      {
        sub: "Nominativ",
        type: "mc",
        q: "Der Hund bellt. – Fall von ‚Hund‘?",
        o: ["Nominativ", "Akkusativ", "Dativ"],
        c: 0,
        model: "Nominativ",
        rule: "<div class='rbox'>Wer bellt? Der Hund → Nominativ.</div>"
      },
      {
        sub: "Akkusativ",
        type: "mc",
        q: "Ich sehe den Hund. – Fall von ‚Hund‘?",
        o: ["Nominativ", "Akkusativ", "Dativ"],
        c: 1,
        model: "Akkusativ",
        rule: "<div class='rbox'>Wen sehe ich? Den Hund → Akkusativ.</div>"
      },
      {
        sub: "Dativ",
        type: "mc",
        q: "Ich gebe dem Hund Futter. – Fall von ‚Hund‘?",
        o: ["Nominativ", "Akkusativ", "Dativ"],
        c: 2,
        model: "Dativ",
        rule: "<div class='rbox'>Wem gebe ich Futter? Dem Hund → Dativ.</div>"
      },
      {
        sub: "Genitiv",
        type: "mc",
        q: "Das Spielzeug des Hundes ist neu. – Fall von ‚Hund‘?",
        o: ["Nominativ", "Genitiv", "Dativ"],
        c: 1,
        model: "Genitiv",
        rule: "<div class='rbox'>Wessen Spielzeug? Des Hundes → Genitiv.</div>"
      },
      {
        sub: "Genitiv-Frage",
        type: "mc",
        q: "Wessen Buch ist das? – Fall?",
        o: ["Nominativ", "Genitiv", "Dativ"],
        c: 1,
        model: "Genitiv",
        rule: "<div class='rbox'>Die Frage ‚wessen‘ verlangt den Genitiv.</div>"
      },
      {
        sub: "mit + Dativ",
        type: "mc",
        q: "Mit wem gehst du? – Fall?",
        o: ["Nominativ", "Genitiv", "Dativ"],
        c: 2,
        model: "Dativ",
        rule: "<div class='rbox'>Die Präposition ‚mit‘ verlangt den Dativ.</div>"
      },
      {
        sub: "für + Akkusativ",
        type: "mc",
        q: "Für wen ist das Geschenk? – Fall?",
        o: ["Nominativ", "Akkusativ", "Dativ"],
        c: 1,
        model: "Akkusativ",
        rule: "<div class='rbox'>Die Präposition ‚für‘ verlangt den Akkusativ.</div>"
      },
      {
        sub: "hören + Akk",
        type: "mc",
        q: "Setze den richtigen Artikel ein: Ich höre ___ Musik. (die)",
        o: ["der", "die", "den"],
        c: 1,
        model: "die",
        rule: "<div class='rbox'>‚hören‘ + Akkusativ: die Musik.</div>"
      },
      {
        sub: "helfen + Dat",
        type: "mc",
        q: "Er hilft ___ Freund. (der)",
        o: ["der", "dem", "den"],
        c: 1,
        model: "dem",
        rule: "<div class='rbox'>‚helfen‘ + Dativ: dem Freund.</div>"
      },
      {
        sub: "Nominativ (das Auto)",
        type: "mc",
        q: "Das ist ___ Auto meines Vaters. (das)",
        o: ["das", "dem", "den"],
        c: 0,
        model: "das",
        rule: "<div class='rbox'>Nominativ: das Auto.</div>"
      },
      {
        sub: "schreiben + Akk",
        type: "mc",
        q: "Ich schreibe ___ Brief. (der)",
        o: ["der", "dem", "den"],
        c: 2,
        model: "den",
        rule: "<div class='rbox'>‚schreiben‘ + Akkusativ: den Brief.</div>"
      },
      {
        sub: "bei + Dativ",
        type: "mc",
        q: "Sie wohnt bei ___ Eltern. (die)",
        o: ["die", "den", "der"],
        c: 1,
        model: "den",
        rule: "<div class='rbox'>‚bei‘ + Dativ: bei den Eltern.</div>"
      },
      {
        sub: "gehören + Dativ",
        type: "mc",
        q: "Das Buch gehört ___ Mädchen. (das)",
        o: ["das", "dem", "den"],
        c: 1,
        model: "dem",
        rule: "<div class='rbox'>‚gehören‘ + Dativ: dem Mädchen.</div>"
      },
      {
        sub: "gedenken + Genitiv",
        type: "mc",
        q: "Ich gedenke ___ Verstorbenen. (die)",
        o: ["der", "des", "dem"],
        c: 0,
        model: "der",
        rule: "<div class='rbox'>‚gedenken‘ + Genitiv: der Verstorbenen.</div>"
      },
      {
        sub: "trotz + Genitiv",
        type: "mc",
        q: "Trotz ___ Regens gehen wir spazieren. (der)",
        o: ["dem", "des", "den"],
        c: 1,
        model: "des",
        rule: "<div class='rbox'>‚trotz‘ + Genitiv: des Regens.</div>"
      },
      {
        sub: "wegen + Genitiv",
        type: "mc",
        q: "Wegen ___ Staus komme ich zu spät. (der)",
        o: ["dem", "des", "den"],
        c: 1,
        model: "des",
        rule: "<div class='rbox'>‚wegen‘ + Genitiv: des Staus.</div>"
      },
      {
        sub: "als + gleicher Fall",
        type: "mc",
        q: "Er ist größer als ___ Bruder. (der)",
        o: ["der", "dem", "den"],
        c: 0,
        model: "der",
        rule: "<div class='rbox'>Nach ‚als‘ folgt der gleiche Fall wie das Bezugswort: Nominativ (er = der Bruder).</div>"
      },
      {
        sub: "wie + Nominativ",
        type: "mc",
        q: "Sie ist so alt wie ___ Schwester. (die)",
        o: ["die", "der", "den"],
        c: 0,
        model: "die",
        rule: "<div class='rbox'>Nach ‚wie‘ folgt Nominativ: die Schwester.</div>"
      },
      {
        sub: "vertrauen + Dativ",
        type: "mc",
        q: "Ich vertraue ___ Arzt. (der)",
        o: ["der", "dem", "den"],
        c: 1,
        model: "dem",
        rule: "<div class='rbox'>‚vertrauen‘ + Dativ: dem Arzt.</div>"
      },
      {
        sub: "fragen + Akk",
        type: "mc",
        q: "Er fragt ___ Lehrer. (der)",
        o: ["der", "den", "dem"],
        c: 1,
        model: "den",
        rule: "<div class='rbox'>‚fragen‘ + Akkusativ: den Lehrer.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 8: Aktiv und Passiv (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_passiv",
    title: "Aktiv und Passiv (extra)",
    emoji: "⚙️",
    color: "#7c3aed",
    qs: [
      {
        sub: "Aktiv erkennen",
        type: "mc",
        q: "‚Der Lehrer erklärt die Aufgabe.‘ – Aktiv oder Passiv?",
        o: ["Aktiv", "Passiv"],
        c: 0,
        model: "Aktiv",
        rule: "<div class='rbox'>Subjekt handelt (Lehrer) → Aktiv.</div>"
      },
      {
        sub: "Passiv erkennen",
        type: "mc",
        q: "‚Die Aufgabe wird erklärt.‘ – Aktiv oder Passiv?",
        o: ["Aktiv", "Passiv"],
        c: 1,
        model: "Passiv",
        rule: "<div class='rbox'>Subjekt erleidet Handlung → Passiv mit ‚werden‘.</div>"
      },
      {
        sub: "Passiv bilden (1)",
        type: "mc",
        q: "Bilde das Passiv: ‚Der Hund beißt den Mann.‘",
        o: ["Der Mann wird gebissen.", "Der Mann wird beißen.", "Der Mann ist gebissen."],
        c: 0,
        model: "Der Mann wird gebissen.",
        rule: "<div class='rbox'>Passiv: ‚werden‘ + Partizip II.</div>"
      },
      {
        sub: "Aktiv bilden (1)",
        type: "mc",
        q: "Bilde das Aktiv: ‚Das Haus wird gestrichen.‘",
        o: ["Das Haus streicht.", "Jemand streicht das Haus.", "Das Haus wird gestrichen."],
        c: 1,
        model: "Jemand streicht das Haus.",
        rule: "<div class='rbox'>Aktiv: ein Subjekt (jemand) führt die Handlung aus.</div>"
      },
      {
        sub: "Präteritum Passiv",
        type: "mc",
        q: "‚Die Tür wurde geöffnet.‘ – Zeitform Passiv?",
        o: ["Präsens", "Präteritum", "Perfekt"],
        c: 1,
        model: "Präteritum",
        rule: "<div class='rbox'>‚wurde geöffnet‘ ist Präteritum Passiv.</div>"
      },
      {
        sub: "Perfekt Passiv",
        type: "mc",
        q: "‚Das Lied ist gesungen worden.‘ – Zeit?",
        o: ["Präteritum Passiv", "Perfekt Passiv", "Plusquamperfekt Passiv"],
        c: 1,
        model: "Perfekt Passiv",
        rule: "<div class='rbox'>Perfekt Passiv: ‚ist … worden‘.</div>"
      },
      {
        sub: "Futur I Passiv",
        type: "mc",
        q: "‚Das wird gemacht werden.‘ – Zeit?",
        o: ["Futur I Aktiv", "Futur I Passiv", "Präsens Passiv"],
        c: 1,
        model: "Futur I Passiv",
        rule: "<div class='rbox'>Futur I Passiv: ‚wird gemacht werden‘.</div>"
      },
      {
        sub: "von + Dativ",
        type: "mc",
        q: "Im Passiv wird der Täter oft mit ‚von‘ + Dativ angegeben. Welcher Fall steht nach ‚von‘?",
        o: ["Nominativ", "Genitiv", "Dativ"],
        c: 2,
        model: "Dativ",
        rule: "<div class='rbox'>‚von‘ verlangt Dativ.</div>"
      },
      {
        sub: "Täter erkennen",
        type: "mc",
        q: "‚Die Kinder werden von der Lehrerin gelobt.‘ – Wer lobt?",
        o: ["Die Kinder", "Die Lehrerin"],
        c: 1,
        model: "Die Lehrerin",
        rule: "<div class='rbox'>Die Lehrerin ist der Täter (Handelnde).</div>"
      },
      {
        sub: "Passiv → Aktiv (1)",
        type: "mc",
        q: "‚Mir wurde geholfen.‘ – Aktiv:",
        o: ["Jemand half mir.", "Ich half jemandem.", "Mir half jemand."],
        c: 0,
        model: "Jemand half mir.",
        rule: "<div class='rbox'>Aktiv: Subjekt (jemand) hilft (Dativobjekt mir).</div>"
      },
      {
        sub: "unpersönliches Passiv",
        type: "mc",
        q: "‚Es wird getanzt.‘ – Kann man einen Täter nennen?",
        o: ["Ja: von den Leuten", "Nein, unpersönlich"],
        c: 1,
        model: "Nein, unpersönlich",
        rule: "<div class='rbox'>Unpersönliches Passiv ohne Nennung des Täters.</div>"
      },
      {
        sub: "Präteritum Passiv (2)",
        type: "mc",
        q: "‚Der Brief wird geschrieben.‘ – In Präteritum Passiv:",
        o: ["Der Brief wurde geschrieben.", "Der Brief wird geschrieben."],
        c: 0,
        model: "Der Brief wurde geschrieben.",
        rule: "<div class='rbox'>Präteritum Passiv: ‚wurde‘ + Partizip.</div>"
      },
      {
        sub: "Passiv mit von",
        type: "mc",
        q: "Aktiv: ‚Der Maler streicht die Wand.‘ – Passiv: ‚Die Wand wird von dem Maler gestrichen.‘ – Richtig?",
        o: ["Ja", "Nein, richtig: Die Wand wird durch den Maler gestrichen."],
        c: 0,
        model: "Ja",
        rule: "<div class='rbox'>‚von‘ + Dativ ist korrekt bei Personen.</div>"
      },
      {
        sub: "Subjekt im Passiv",
        type: "mc",
        q: "‚Die Suppe wird gekocht.‘ – Subjekt im Passiv?",
        o: ["Die Suppe", "wird gekocht"],
        c: 0,
        model: "Die Suppe",
        rule: "<div class='rbox'>Subjekt ist ‚die Suppe‘.</div>"
      },
      {
        sub: "unpersönliches Passiv (2)",
        type: "mc",
        q: "‚Man sagt, dass er kommt.‘ – Passiv:",
        o: ["Es wird gesagt, dass er kommt.", "Er wird gesagt, dass..."],
        c: 0,
        model: "Es wird gesagt, dass er kommt.",
        rule: "<div class='rbox'>Unpersönliches Passiv: ‚es wird gesagt‘.</div>"
      },
      {
        sub: "Akkusativ im Aktiv",
        type: "mc",
        q: "‚Er wurde gesehen.‘ – Aktiv: ‚Jemand sah ihn.‘ – Fall von ‚ihn‘?",
        o: ["Nominativ", "Akkusativ"],
        c: 1,
        model: "Akkusativ",
        rule: "<div class='rbox'>‚ihn‘ ist Akkusativ.</div>"
      },
      {
        sub: "Dativ im Aktiv",
        type: "mc",
        q: "‚Ihm wurde geholfen.‘ – Aktiv: ‚Jemand half ihm.‘ – Fall ‚ihm‘?",
        o: ["Nominativ", "Dativ"],
        c: 1,
        model: "Dativ",
        rule: "<div class='rbox'>‚ihm‘ ist Dativ (helfen + Dativ).</div>"
      },
      {
        sub: "Passiv-Hilfsverb",
        type: "mc",
        q: "‚Das Auto wird repariert.‘ – Welches Hilfsverb bildet das Passiv?",
        o: ["sein", "haben", "werden"],
        c: 2,
        model: "werden",
        rule: "<div class='rbox'>Passiv wird mit ‚werden‘ gebildet.</div>"
      },
      {
        sub: "Zustandspassiv",
        type: "mc",
        q: "‚Das Auto ist repariert.‘ – Ist das Passiv?",
        o: ["Ja, Zustandspassiv", "Nein, Aktiv"],
        c: 0,
        model: "Ja, Zustandspassiv",
        rule: "<div class='rbox'>‚ist repariert‘ = Zustandspassiv (Ergebnis).</div>"
      },
      {
        sub: "Plusquamperfekt Passiv",
        type: "mc",
        q: "‚Das Auto war repariert worden.‘ – Zeit?",
        o: ["Plusquamperfekt Passiv", "Perfekt Passiv", "Präteritum Passiv"],
        c: 0,
        model: "Plusquamperfekt Passiv",
        rule: "<div class='rbox'>Plusquamperfekt Passiv: ‚war … worden‘.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 9: Häufige Rechtschreibprobleme (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_rechtschreibung",
    title: "Häufige Rechtschreibprobleme (extra)",
    emoji: "✏️",
    color: "#b45309",
    qs: [
      {
        sub: "das / dass (1)",
        type: "mc",
        q: "Wähle die richtige Schreibweise: Das ist (das / dass) beste Buch.",
        o: ["das", "dass"],
        c: 0,
        model: "das",
        rule: "<div class='rbox'>‚das‘ als Artikel oder Pronomen; hier Artikel vor ‚beste‘.</div>"
      },
      {
        sub: "das / dass (2)",
        type: "mc",
        q: "Ich glaube, (das / dass) er kommt.",
        o: ["das", "dass"],
        c: 1,
        model: "dass",
        rule: "<div class='rbox'>‚dass‘ als Konjunktion leitet Nebensatz ein.</div>"
      },
      {
        sub: "seid / seit (1)",
        type: "mc",
        q: "(Seid / Seit) wann wart ihr hier?",
        o: ["Seid", "Seit"],
        c: 1,
        model: "Seit",
        rule: "<div class='rbox'>‚seit‘ (zeitlich) → hier ‚seit wann‘.</div>"
      },
      {
        sub: "seid / seit (2)",
        type: "mc",
        q: "(Seid / Seit) ihr fertig?",
        o: ["Seid", "Seit"],
        c: 0,
        model: "Seid",
        rule: "<div class='rbox'>‚seid‘ = 2. Person Plural von ‚sein‘.</div>"
      },
      {
        sub: "Rad / Rat (1)",
        type: "mc",
        q: "Das (Rad / Rat) ist platt.",
        o: ["Rad", "Rat"],
        c: 0,
        model: "Rad",
        rule: "<div class='rbox'>‚Rad‘ (Fahrrad) → hier gemeint.</div>"
      },
      {
        sub: "Rad / Rat (2)",
        type: "mc",
        q: "Er gab mir einen guten (Rat / Rad).",
        o: ["Rat", "Rad"],
        c: 0,
        model: "Rat",
        rule: "<div class='rbox'>‚Rat‘ (Ratschlag).</div>"
      },
      {
        sub: "fiel / viel (1)",
        type: "mc",
        q: "Das Kind ist (fiel / viel) gefallen.",
        o: ["fiel", "viel"],
        c: 1,
        model: "viel",
        rule: "<div class='rbox'>‚viel‘ (Adverb) → hier ‚viel gefallen‘.</div>"
      },
      {
        sub: "fiel / viel (2)",
        type: "mc",
        q: "Er (fiel / viel) die Treppe hinunter.",
        o: ["fiel", "viel"],
        c: 0,
        model: "fiel",
        rule: "<div class='rbox'>‚fiel‘ (Präteritum von fallen).</div>"
      },
      {
        sub: "Boot / Bot (1)",
        type: "mc",
        q: "Wir fahren mit dem (Boot / Bot).",
        o: ["Boot", "Bot"],
        c: 0,
        model: "Boot",
        rule: "<div class='rbox'>‚Boot‘ (Wasserfahrzeug).</div>"
      },
      {
        sub: "Boot / Bot (2)",
        type: "mc",
        q: "Er (bot / boot) mir seine Hilfe an.",
        o: ["bot", "boot"],
        c: 0,
        model: "bot",
        rule: "<div class='rbox'>‚bot‘ (Präteritum von bieten).</div>"
      },
      {
        sub: "fahren (Dehnungs-h)",
        type: "mc",
        q: "Welches Wort ist richtig geschrieben?",
        o: ["fahren", "fahran"],
        c: 0,
        model: "fahren",
        rule: "<div class='rbox'>‚fahren‘ mit einem ‚h‘ (Dehnungs-h nach langem a).</div>"
      },
      {
        sub: "Meer / mehr (1)",
        type: "mc",
        q: "(Meer / Mehr) Menschen kommen.",
        o: ["Meer", "Mehr"],
        c: 1,
        model: "Mehr",
        rule: "<div class='rbox'>‚mehr‘ (größere Anzahl).</div>"
      },
      {
        sub: "Meer / mehr (2)",
        type: "mc",
        q: "Das (Meer / Mehr) ist blau.",
        o: ["Meer", "Mehr"],
        c: 0,
        model: "Meer",
        rule: "<div class='rbox'>‚Meer‘ (Ozean).</div>"
      },
      {
        sub: "war / wahr (1)",
        type: "mc",
        q: "Ich (war / wahr) gestern krank.",
        o: ["war", "wahr"],
        c: 0,
        model: "war",
        rule: "<div class='rbox'>‚war‘ (1. Person Präteritum von sein).</div>"
      },
      {
        sub: "war / wahr (2)",
        type: "mc",
        q: "Ist das (war / wahr)?",
        o: ["war", "wahr"],
        c: 1,
        model: "wahr",
        rule: "<div class='rbox'>‚wahr‘ (richtig, echt).</div>"
      },
      {
        sub: "kommen (Doppelkonsonant)",
        type: "mc",
        q: "Doppelkonsonanten: (kommen / komen) – richtig?",
        o: ["kommen", "komen"],
        c: 0,
        model: "kommen",
        rule: "<div class='rbox'>Nach kurzem Vokal wird der Konsonant verdoppelt: ‚kommen‘.</div>"
      },
      {
        sub: "rennen (Doppel-n)",
        type: "mc",
        q: "(rennen / renen) – richtig?",
        o: ["rennen", "renen"],
        c: 0,
        model: "rennen",
        rule: "<div class='rbox'>‚rennen‘ mit Doppel-n.</div>"
      },
      {
        sub: "schwimmen (Doppel-m)",
        type: "mc",
        q: "(schwimmen / schwimmen) – richtig?",
        o: ["schwimmen", "schwimen"],
        c: 0,
        model: "schwimmen",
        rule: "<div class='rbox'>‚schwimmen‘ mit Doppel-m.</div>"
      },
      {
        sub: "Tipp (Doppel-p)",
        type: "mc",
        q: "(Tipp / Tip) – richtig?",
        o: ["Tipp", "Tip"],
        c: 0,
        model: "Tipp",
        rule: "<div class='rbox'>‚Tipp‘ (Hinweis) mit Doppel-p.</div>"
      },
      {
        sub: "Stopp (Doppel-p)",
        type: "mc",
        q: "(Stop / Stopp) – richtig?",
        o: ["Stop", "Stopp"],
        c: 1,
        model: "Stopp",
        rule: "<div class='rbox'>‚Stopp‘ (Halt) mit Doppel-p.</div>"
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // Thema 10: Worttrennung (extra)
  // ─────────────────────────────────────────────────────────────
  {
    id: "bbr_extra_trennung",
    title: "Worttrennung (extra)",
    emoji: "✂️",
    color: "#6b7280",
    qs: [
      {
        sub: "Fahren",
        type: "mc",
        q: "Wie wird ‚Fahren‘ richtig getrennt?",
        o: ["Fah-ren", "Fa-hen"],
        c: 0,
        model: "Fah-ren",
        rule: "<div class='rbox'>Man trennt nach Sprechsilben: ‚Fah-ren‘.</div>"
      },
      {
        sub: "Kinder",
        type: "mc",
        q: "‚Kinder‘ trennen:",
        o: ["Kin-der", "Kind-er", "Ki-nder"],
        c: 0,
        model: "Kin-der",
        rule: "<div class='rbox'>‚Kin-der‘.</div>"
      },
      {
        sub: "versuchen",
        type: "mc",
        q: "‚versuchen‘ trennen:",
        o: ["ver-su-chen", "vers-u-chen", "ve-rsu-chen"],
        c: 0,
        model: "ver-su-chen",
        rule: "<div class='rbox'>‚ver-su-chen‘ (Vorsilbe ver-).</div>"
      },
      {
        sub: "kommen",
        type: "mc",
        q: "‚kommen‘:",
        o: ["kom-men", "ko-mmen", "komm-en"],
        c: 0,
        model: "kom-men",
        rule: "<div class='rbox'>‚kom-men‘.</div>"
      },
      {
        sub: "rennen",
        type: "mc",
        q: "‚rennen‘:",
        o: ["ren-nen", "re-nnen", "renn-en"],
        c: 0,
        model: "ren-nen",
        rule: "<div class='rbox'>‚ren-nen‘.</div>"
      },
      {
        sub: "schwimmen",
        type: "mc",
        q: "‚schwimmen‘:",
        o: ["schwim-men", "schwi-mmen", "schwimm-en"],
        c: 0,
        model: "schwim-men",
        rule: "<div class='rbox'>‚schwim-men‘.</div>"
      },
      {
        sub: "Atem",
        type: "mc",
        q: "‚Atem‘ trennen:",
        o: ["A-tem", "At-em"],
        c: 0,
        model: "A-tem",
        rule: "<div class='rbox'>‚A-tem‘ (weil erstes ‚a‘ allein steht).</div>"
      },
      {
        sub: "Ofen",
        type: "mc",
        q: "‚Ofen‘ trennen:",
        o: ["O-fen", "Of-en"],
        c: 0,
        model: "O-fen",
        rule: "<div class='rbox'>‚O-fen‘.</div>"
      },
      {
        sub: "Abend",
        type: "mc",
        q: "‚Abend‘ trennen:",
        o: ["Ab-end", "A-bend"],
        c: 0,
        model: "Ab-end",
        rule: "<div class='rbox'>‚Ab-end‘ (weil ‚Ab‘ eine Silbe).</div>"
      },
      {
        sub: "lesen",
        type: "mc",
        q: "‚lesen‘ trennen:",
        o: ["le-sen", "les-en"],
        c: 0,
        model: "le-sen",
        rule: "<div class='rbox'>‚le-sen‘.</div>"
      },
      {
        sub: "reisen",
        type: "mc",
        q: "‚reisen‘ trennen:",
        o: ["rei-sen", "reis-en"],
        c: 0,
        model: "rei-sen",
        rule: "<div class='rbox'>‚rei-sen‘.</div>"
      },
      {
        sub: "spielen",
        type: "mc",
        q: "‚spielen‘ trennen:",
        o: ["spie-len", "spiel-en"],
        c: 0,
        model: "spie-len",
        rule: "<div class='rbox'>‚spie-len‘.</div>"
      },
      {
        sub: "laufen",
        type: "mc",
        q: "‚laufen‘ trennen:",
        o: ["lau-fen", "lauf-en"],
        c: 0,
        model: "lau-fen",
        rule: "<div class='rbox'>‚lau-fen‘.</div>"
      },
      {
        sub: "backen",
        type: "mc",
        q: "‚backen‘ trennen:",
        o: ["ba-chen", "back-en", "bak-ken"],
        c: 2,
        model: "bak-ken",
        rule: "<div class='rbox'>‚bak-ken‘ (wegen Doppel-k nach kurzem Vokal).</div>"
      },
      {
        sub: "Küsse",
        type: "mc",
        q: "‚Küsse‘ trennen:",
        o: ["Kü-s-se", "Küs-se"],
        c: 1,
        model: "Küs-se",
        rule: "<div class='rbox'>‚Küs-se‘ (Umlaut ändert nichts).</div>"
      },
      {
        sub: "Pflanze",
        type: "mc",
        q: "‚Pflanze‘ trennen:",
        o: ["Pflan-ze", "Pfla-nze"],
        c: 0,
        model: "Pflan-ze",
        rule: "<div class='rbox'>‚Pflan-ze‘.</div>"
      },
      {
        sub: "Straße",
        type: "mc",
        q: "‚Straße‘ trennen:",
        o: ["Stra-ße", "Straß-e"],
        c: 0,
        model: "Stra-ße",
        rule: "<div class='rbox'>‚Stra-ße‘ (ß bleibt bei Trennung erhalten).</div>"
      },
      {
        sub: "waschen",
        type: "mc",
        q: "‚waschen‘ trennen:",
        o: ["wa-schen", "was-chen"],
        c: 0,
        model: "wa-schen",
        rule: "<div class='rbox'>‚wa-schen‘.</div>"
      },
      {
        sub: "wissen",
        type: "mc",
        q: "‚wissen‘ trennen:",
        o: ["wis-sen", "wi-ssen"],
        c: 0,
        model: "wis-sen",
        rule: "<div class='rbox'>‚wis-sen‘.</div>"
      },
      {
        sub: "trocknen",
        type: "mc",
        q: "‚trocknen‘ trennen:",
        o: ["trock-nen", "tro-chen"],
        c: 0,
        model: "trock-nen",
        rule: "<div class='rbox'>‚trock-nen‘ (ck wird getrennt: k-k).</div>"
      }
    ]
  }
];