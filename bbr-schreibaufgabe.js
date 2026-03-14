// bbr-schreibaufgabe.js
// Interaktiver Bewerbungs-E-Mail-Leitfaden – BBR
// Szenario: Elias Lang bewirbt sich für ein Pflege-Praktikum

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════════════════
     ZUSTAND
     ═══════════════════════════════════════════════════════════ */
  const S = { step: 0 };
  const TOTAL = 9;

  /* ═══════════════════════════════════════════════════════════
     HTML-HELFER
     ═══════════════════════════════════════════════════════════ */
  const r   = t => `<span style="color:#ef4444;font-weight:700">${t}</span>`;
  const grn = t => `<span style="color:#16a34a;font-weight:700">${t}</span>`;
  const dim = t => `<span style="opacity:.45;font-size:.82rem">${t}</span>`;

  const progress = n => `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px">
      <div style="flex:1;height:5px;background:rgba(128,128,128,.15);border-radius:3px;overflow:hidden">
        <div style="height:100%;width:${Math.round((n/TOTAL)*100)}%;background:var(--accent,#16a34a);border-radius:3px;transition:width .5s ease"></div>
      </div>
      <span style="font-size:.68rem;opacity:.45;white-space:nowrap;font-weight:600">Schritt ${n} / ${TOTAL}</span>
    </div>`;

  const chip = (label, color) => `
    <span style="display:inline-block;padding:3px 10px;border-radius:20px;font-size:.7rem;font-weight:700;letter-spacing:.06em;background:${color}22;color:${color};margin-bottom:10px">${label}</span>`;

  const box = (html, tint = 'rgba(22,163,74,.05)', border = '#16a34a33') => `
    <div class="card" style="padding:14px 16px;margin-bottom:12px;background:${tint};border:1px solid ${border}">${html}</div>`;

  const neutral = html => `
    <div class="card" style="padding:14px 16px;margin-bottom:12px">${html}</div>`;

  const toggleBtn = (id, label, icon = '💡', color = '') => `
    <button id="${id}" class="btn btn-ol" style="font-size:.8rem;margin:6px 6px 0 0;${color ? `color:${color};border-color:${color}` : ''}">${icon} ${label}</button>`;

  const toggleBox = (id, html, tint = 'rgba(99,102,241,.06)', border = '#6366f144') => `
    <div id="${id}" style="display:none;margin-top:10px">
      <div class="card" style="padding:14px 16px;background:${tint};border:1px solid ${border}">${html}</div>
    </div>`;

  const weiter = (label = 'Weiter →', disabled = false) => `
    <div style="text-align:center;margin-top:22px">
      <button id="bb-weiter" class="btn btn-dk" style="min-width:170px;background:#16a34a;${disabled ? 'opacity:.35;cursor:not-allowed' : ''}" ${disabled ? 'disabled' : ''}>${label}</button>
    </div>`;

  /* ═══════════════════════════════════════════════════════════
     E-MAIL STRUKTUR-DIAGRAMM
     ═══════════════════════════════════════════════════════════ */
  const emailDiagram = () => `
    <div style="border:2px solid rgba(128,128,128,.2);border-radius:12px;overflow:hidden;font-size:.82rem;line-height:1.6;background:rgba(128,128,128,.03)">
      <!-- Header -->
      <div style="padding:10px 14px;border-bottom:1px solid rgba(128,128,128,.15);background:rgba(22,163,74,.06)">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px">
          <span style="font-size:.7rem;font-weight:700;color:#16a34a;min-width:56px">AN:</span>
          <span style="color:#16a34a;font-weight:600">alvarez@wohnparadies.de</span>
          ${dim('← Empfänger-Adresse')}
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <span style="font-size:.7rem;font-weight:700;color:#16a34a;min-width:56px">BETREFF:</span>
          <span style="color:#16a34a;font-weight:600">Bewerbung um Schülerpraktikum in der Pflege</span>
          ${dim('← Betreffzeile')}
        </div>
      </div>
      <!-- Body -->
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;padding-bottom:10px;border-bottom:1px dashed rgba(128,128,128,.2)">
          <div style="flex:1"><span style="font-weight:700">Sehr geehrte Frau Alvarez,</span></div>
          <div style="text-align:right">${dim('← Anrede')}</div>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:8px">
          <div style="flex:1;color:rgba(128,128,128,.6);font-style:italic">hiermit möchte ich mich auf das Pflege-Praktikum bewerben …</div>
          <div style="text-align:right;white-space:nowrap">${dim('← Einleitungssatz')}</div>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:8px;padding:8px;background:rgba(99,102,241,.04);border-radius:6px">
          <div style="flex:1;color:rgba(128,128,128,.6);font-style:italic">Ich bringe folgende Eigenschaften mit …</div>
          <div style="text-align:right;white-space:nowrap">${dim('← Eignung / Fähigkeiten')}</div>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:12px;padding:8px;background:rgba(99,102,241,.04);border-radius:6px">
          <div style="flex:1;color:rgba(128,128,128,.6);font-style:italic">Besonders interessiert mich die Arbeit mit älteren Menschen …</div>
          <div style="text-align:right;white-space:nowrap">${dim('← Bezug auf Aufgaben')}</div>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:10px;padding-top:10px;border-top:1px dashed rgba(128,128,128,.2)">
          <div style="flex:1;color:rgba(128,128,128,.6);font-style:italic">Ich würde mich freuen, wenn Sie meine Bewerbung berücksichtigen …</div>
          <div style="text-align:right;white-space:nowrap">${dim('← Abschluss &amp; Bitte')}</div>
        </div>
        <div style="display:flex;gap:10px;margin-bottom:4px">
          <div style="flex:1"><span style="font-weight:600">Mit freundlichen Grüßen,</span></div>
          <div style="text-align:right">${dim('← Grußformel')}</div>
        </div>
        <div style="display:flex;gap:10px">
          <div style="flex:1"><span style="font-weight:600">Elias Lang</span></div>
          <div style="text-align:right">${dim('← Name')}</div>
        </div>
      </div>
    </div>`;

  /* ═══════════════════════════════════════════════════════════
     SCHRITTE
     ═══════════════════════════════════════════════════════════ */

  /* 0 – Aufgabenstellung */
  function s0() {
    return `
      ${progress(0)}
      <h3 style="margin-bottom:14px">📋 Aufgabe: Bewerbungs-E-Mail verfassen</h3>

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;opacity:.45;margin-bottom:8px">Praktikumsanzeige</p>
        <p style="font-weight:700;margin-bottom:8px">Praktikum in der Pflege (m/w/d) – Wohnparadies Berlin</p>
        <p style="font-size:.85rem;margin-bottom:8px"><strong>Wir bieten:</strong> Kennenlernen der Altenpflege, Begleitung der Bewohner/innen, flexible Arbeitszeiten, Arbeit im Team.</p>
        <p style="font-size:.85rem"><strong>Gefordert:</strong> Offenes Auftreten · Teamfähigkeit · Empathie · Verlässlichkeit · Freude an der Arbeit mit älteren Menschen</p>
        <p style="font-size:.8rem;margin-top:8px;opacity:.5">Kontakt: Frau Maria Alvarez · alvarez@wohnparadies.de · Nordweststraße 77, 10901 Berlin</p>
      `)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;opacity:.45;margin-bottom:8px">Informationen über Elias Lang</p>
        <ul style="padding-left:16px;font-size:.86rem;line-height:2;margin:0">
          <li>Elias Lang, ${r('15 Jahre alt')}</li>
          <li>Geburtstag: 6. November 2007</li>
          <li>${r('9. Klasse')}, Sekundarschule am Hohen Berg</li>
          <li>Bereits ein ${r('Tagespraktikum in der Altenpflege')} absolviert</li>
          <li>Lieblingsfächer: Ethik, Mathematik und Sport</li>
          <li>Erste-Hilfe-AG · Basketball-Verein</li>
          <li>Ziel: ${r('Mittlerer Schulabschluss 2024')}</li>
        </ul>
      `)}

      ${box(`<p style="font-size:.9rem"><strong>Deine Aufgabe:</strong> Schreibe als Elias Lang eine ${r('förmliche Bewerbungs-E-Mail')} an Frau Alvarez für ein Schülerpraktikum vom <strong>29.08.2023 bis 16.09.2023</strong>.</p>`)}
      ${weiter('Los geht\'s →')}`;
  }

  /* 1 – Wie schreibe ich eine förmliche E-Mail? */
  function s1() {
    return `
      ${progress(1)}
      ${chip('Struktur', '#6366f1')}
      <h3 style="margin:4px 0 14px">Wie schreibe ich eine förmliche E-Mail?</h3>

      ${toggleBtn('bb-btn-aufbau', 'Aufbau der E-Mail anzeigen', '📧', '#6366f1')}
      ${toggleBox('bb-box-aufbau', emailDiagram(), 'transparent', 'transparent')}

      ${neutral(`
        <p style="font-weight:700;margin-bottom:10px">Eine förmliche Bewerbungs-E-Mail besteht aus:</p>
        <div style="display:grid;gap:8px">
          ${[
            ['📧', 'Empfänger-Adresse', 'Die E-Mail-Adresse der Ansprechperson'],
            ['📋', 'Betreffzeile', 'Klar und informativ: „Bewerbung um Schülerpraktikum"'],
            ['🤝', 'Anrede', 'Förmlich: „Sehr geehrte Frau …" oder „Liebe Frau …"'],
            ['✍️', 'Einleitungssatz', 'Wofür bewirbst du dich?'],
            ['⭐', 'Eignung', 'Deine Fähigkeiten und Eigenschaften'],
            ['🔗', 'Bezug auf Aufgaben', 'Erfahrungen und Interessen passend zur Stelle'],
            ['🙏', 'Abschluss', 'Bitte um Berücksichtigung und persönliches Gespräch'],
            ['💌', 'Grußformel + Name', '„Mit freundlichen Grüßen, Elias Lang"'],
          ].map(([ico, title, desc]) => `
            <div style="display:flex;gap:10px;align-items:flex-start">
              <span style="font-size:1rem;line-height:1.4">${ico}</span>
              <div><strong style="font-size:.87rem">${title}</strong><br><span style="font-size:.82rem;opacity:.6">${desc}</span></div>
            </div>`).join('')}
        </div>
      `)}
      ${weiter()}`;
  }

  /* 2 – Empfänger-Adresse & Betreff */
  function s2() {
    return `
      ${progress(2)}
      ${chip('Schritt 1', '#16a34a')}
      <h3 style="margin:4px 0 14px">Empfänger-Adresse &amp; Betreffzeile</h3>
      ${box(`
        <p style="font-size:.85rem;margin-bottom:12px">Trage oben in der E-Mail folgendes ein:</p>
        <div style="font-size:.88rem;line-height:2">
          <div><strong>AN:</strong> ${grn('alvarez@wohnparadies.de')}</div>
          <div><strong>BETREFF:</strong> ${grn('Bewerbung um Schülerpraktikum in der Pflege')}</div>
        </div>
      `)}
      ${toggleBtn('bb-btn-hilfe', 'Hilfe', '💡')}
      ${toggleBox('bb-box-hilfe', `
        <p style="font-weight:600;margin-bottom:8px">💡 Tipps für die Betreffzeile:</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>Sei ${r('präzise')}: Welche Stelle ist es genau?</li>
          <li>Nenne ${r('Zeitraum')} falls bekannt: „… (29.08.–16.09.2023)"</li>
          <li>Beispiel: ${grn('<em>„Bewerbung um Schülerpraktikum in der Altenpflege – August/September 2023"</em>')}</li>
        </ul>
      `)}
      ${weiter()}`;
  }

  /* 3 – Anrede */
  function s3() {
    return `
      ${progress(3)}
      ${chip('Schritt 2', '#16a34a')}
      <h3 style="margin:4px 0 14px">Anrede</h3>
      ${box(`
        <p style="font-size:.9rem;margin-bottom:10px">Die Anrede ist das Erste, was die Leserin sieht. Sie muss ${r('förmlich')} und ${r('korrekt')} sein.</p>
        <div style="padding:10px 14px;background:rgba(22,163,74,.08);border-radius:8px;font-size:.95rem">
          ✉️ <strong>Sehr geehrte Frau Alvarez,</strong>
        </div>
      `)}

      ${toggleBtn('bb-btn-fehler', 'Typische Fehler anzeigen', '⚠️', '#ef4444')}
      ${toggleBox('bb-box-fehler', `
        <p style="font-weight:700;color:#ef4444;margin-bottom:10px">⚠️ Achtung – häufige Fehler:</p>
        <div style="font-size:.88rem;line-height:2.2">
          <p>❌ Sehr ge<span style="background:#ef4444;color:#fff;padding:0 2px;border-radius:2px">er</span>te Frau Alvarez ${dim('→ Merke: „g<u>e</u>hrte", nicht „g<u>er</u>te"')}</p>
          <p>❌ Sehr geehrte Frau Alvarez${r('.')} ${dim('→ Kein Punkt – Komma setzen!')} ✅</p>
          <p>❌ Sehr geehrte Frau Alvarez,${r(' H')}iermit … ${dim('→ Klein weiterschreiben!')} ${grn('hiermit …')} ✅</p>
          <p>❌ Hallo Frau Alvarez ${dim('→ Zu informell für eine Bewerbung')}</p>
        </div>
      `, 'rgba(239,68,68,.05)', '#ef444433')}

      ${toggleBtn('bb-btn-alternativ', 'Alternative Anrede', '🔄')}
      ${toggleBox('bb-box-alternativ', `
        <p style="font-weight:600;margin-bottom:8px">Alternative – weniger förmlich:</p>
        <div style="padding:10px 14px;background:rgba(99,102,241,.06);border-radius:8px;font-size:.95rem;margin-bottom:8px">
          ✉️ <strong>Liebe Frau Alvarez,</strong>
        </div>
        <p style="font-size:.85rem;opacity:.7">Diese Variante ist freundlicher, aber immer noch respektvoll. Auch hier: ${r('Komma setzen')} und ${r('klein weiterschreiben')}!</p>
      `)}
      ${weiter()}`;
  }

  /* 4 – Einleitungssatz */
  function s4() {
    return `
      ${progress(4)}
      ${chip('Schritt 3', '#16a34a')}
      <h3 style="margin:4px 0 14px">Einleitungssatz</h3>
      ${box(`<p style="font-size:.9rem">Der Einleitungssatz erklärt, ${r('wofür du dich bewirbst')} und ${r('woher du von der Stelle weißt')}.</p>`)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;opacity:.5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Beispiel-Formulierung</p>
        <p style="font-size:.9rem;line-height:1.7;font-style:italic">"${grn('hiermit möchte ich mich für ein dreiwöchiges Schülerpraktikum in Ihrem Pflegeheim')} für den Zeitraum vom 29. August bis zum 16. September 2023 bewerben."</p>
      `)}

      ${toggleBtn('bb-btn-hilfe', 'Hilfe', '💡')}
      ${toggleBox('bb-box-hilfe', `
        <p style="font-weight:600;margin-bottom:8px">💡 Tipps für den Einleitungssatz:</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>Nenne die ${r('genaue Stelle')} und die ${r('Einrichtung')}</li>
          <li>Nenne den ${r('Zeitraum')} des Praktikums</li>
          <li>Optional: Woher weißt du von der Stelle? („Ich habe Ihre Anzeige gelesen …")</li>
        </ul>
      `)}
      ${weiter()}`;
  }

  /* 5 – Eignung begründen */
  function s5() {
    return `
      ${progress(5)}
      ${chip('Schritt 4', '#16a34a')}
      <h3 style="margin:4px 0 14px">Eignung begründen</h3>
      ${box(`<p style="font-size:.9rem">Erkläre, ${r('warum du geeignet bist')}. Beziehe dich auf die geforderten Eigenschaften aus der Anzeige.</p>`)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;opacity:.5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Eigenschaften von Elias (aus Anzeige)</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:.83rem">
          ${['Offenes Auftreten', 'Teamfähigkeit', 'Empathie', 'Verlässlichkeit', 'Freude an der Arbeit mit älteren Menschen', 'Grundkenntnisse MS Office']
            .map(e => `<div style="padding:6px 8px;background:rgba(22,163,74,.06);border-radius:6px">✅ ${e}</div>`).join('')}
        </div>
      `)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;opacity:.5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Beispiel-Formulierung</p>
        <p style="font-size:.88rem;line-height:1.7;font-style:italic">"Ich bin eine ${grn('zuverlässige und einfühlsame')} Person und arbeite gerne im Team. Durch meine Mitarbeit in der ${grn('Erste-Hilfe-AG')} habe ich gelernt, in schwierigen Situationen ruhig zu bleiben …"</p>
      `)}

      ${toggleBtn('bb-btn-hilfe', 'Hilfe', '💡')}
      ${toggleBox('bb-box-hilfe', `
        <p style="font-weight:600;margin-bottom:8px">💡 So überzeugst du:</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>Verknüpfe ${r('Eigenschaft + Beleg')}: „Ich bin teamfähig, weil ich …"</li>
          <li>Nutze Elias' ${r('Erste-Hilfe-AG')} und ${r('Basketball-Verein')} als Belege</li>
          <li>Beziehe dich direkt auf die ${r('geforderten Eigenschaften')}</li>
        </ul>
      `)}
      ${weiter()}`;
  }

  /* 6 – Bezug auf Aufgaben */
  function s6() {
    return `
      ${progress(6)}
      ${chip('Schritt 5', '#16a34a')}
      <h3 style="margin:4px 0 14px">Bezug auf Arbeitsaufgaben &amp; Erfahrungen</h3>
      ${box(`<p style="font-size:.9rem">Erkläre, was dich an den ${r('konkreten Aufgaben')} der Stelle interessiert. Nutze Elias' ${r('Tagespraktikum')} als Erfahrungsbeleg.</p>`)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;opacity:.5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Aufgaben aus der Anzeige</p>
        <ul style="padding-left:16px;font-size:.85rem;line-height:2;margin:0">
          <li>Kennenlernen und Durchführen von Pflegemaßnahmen</li>
          <li>Begleitung und Betreuung der Bewohner/innen</li>
          <li>Kennenlernen der Computerprogramme zur Dokumentation</li>
          <li>Förderung der Lebensqualität der Bewohner/innen</li>
        </ul>
      `)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;opacity:.5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Beispiel-Formulierung</p>
        <p style="font-size:.88rem;line-height:1.7;font-style:italic">"${grn('Besonders freue ich mich darauf')}, ältere Menschen zu begleiten und zu betreuen. Ich habe bereits ein ${grn('Tagespraktikum in der Altenpflege')} absolviert und dabei gemerkt, dass mir diese Arbeit sehr am Herzen liegt …"</p>
      `)}

      ${toggleBtn('bb-btn-hilfe', 'Hilfe', '💡')}
      ${toggleBox('bb-box-hilfe', `
        <p style="font-weight:600;margin-bottom:8px">💡 Tipps:</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>Beziehe dich auf ${r('mindestens eine Aufgabe')} aus der Anzeige</li>
          <li>Verknüpfe mit Elias' ${r('bisherigem Praktikum')}</li>
          <li>Zeige echtes ${r('Interesse und Motivation')}</li>
        </ul>
      `)}
      ${weiter()}`;
  }

  /* 7 – Abschluss & Grußformel */
  function s7() {
    return `
      ${progress(7)}
      ${chip('Schritt 6', '#16a34a')}
      <h3 style="margin:4px 0 14px">Abschluss &amp; Grußformel</h3>
      ${box(`<p style="font-size:.9rem">Bitte am Ende höflich um ${r('Berücksichtigung der Bewerbung')} und um ein ${r('persönliches Gespräch')}.</p>`)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;opacity:.5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Beispiel-Abschluss</p>
        <p style="font-size:.88rem;line-height:1.8;font-style:italic">"Ich würde mich sehr freuen, wenn Sie meine Bewerbung berücksichtigen würden. Gerne stehe ich Ihnen für ein ${grn('persönliches Gespräch')} zur Verfügung."</p>
      `)}

      ${neutral(`
        <p style="font-size:.78rem;font-weight:700;opacity:.5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px">Grußformel &amp; Name</p>
        <div style="font-size:.92rem;line-height:2">
          <div>${grn('Mit freundlichen Grüßen,')}</div>
          <div>${grn('Elias Lang')}</div>
        </div>
      `)}

      ${toggleBtn('bb-btn-hilfe', 'Hilfe', '💡')}
      ${toggleBox('bb-box-hilfe', `
        <p style="font-weight:600;margin-bottom:8px">💡 Grußformel-Varianten:</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>${grn('<em>„Mit freundlichen Grüßen,"</em>')} – förmlich, immer passend</li>
          <li>${grn('<em>„Freundliche Grüße,"</em>')} – etwas weniger förmlich</li>
          <li>Nach dem Komma: ${r('Leerzeile lassen')}, dann den vollständigen Namen</li>
        </ul>
      `)}
      ${weiter('Zu den Tipps →')}`;
  }

  /* 8 – Tipps */
  function s8() {
    return `
      ${progress(8)}
      <h3 style="margin-bottom:16px">📋 Wichtige Tipps für die Bewerbungs-E-Mail</h3>

      ${box(`<p style="font-weight:700;margin-bottom:10px">✅ Formale Kriterien</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>${r('Empfänger-Adresse')} und ${r('Betreffzeile')} korrekt</li>
          <li>Förmliche ${r('Anrede')} (Komma! Klein weiterschreiben!)</li>
          <li>${r('Grußformel')} + vollständiger Name am Ende</li>
        </ul>`)}

      ${box(`<p style="font-weight:700;margin-bottom:10px">✅ Inhaltliche Kriterien</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>Alle ${r('erforderlichen Informationen')} eingebaut (Stelle, Zeitraum, Eignung)</li>
          <li>Bezug auf ${r('Aufgaben aus der Anzeige')}</li>
          <li>Höflich um ${r('Berücksichtigung und Gespräch')} gebeten</li>
        </ul>`)}

      ${box(`<p style="font-weight:700;margin-bottom:10px">✅ Sprache &amp; Stil</p>
        <ul style="padding-left:16px;font-size:.87rem;line-height:2;margin:0">
          <li>${r('Vollständige Sätze')} – keine Stichpunkte</li>
          <li>Durchgehend ${r('förmlicher Ton')} – kein „du" an die Empfängerin</li>
          <li>Korrekte ${r('Rechtschreibung, Grammatik und Zeichensetzung')}</li>
        </ul>`)}
      ${weiter('Fertig! 🎉')}`;
  }

  /* 9 – Viel Erfolg */
  function s9() {
    return `
      <div style="text-align:center;padding:36px 20px">
        <div style="font-size:3rem;margin-bottom:14px">🎉</div>
        <h2 style="font-size:1.5rem;margin-bottom:8px">Viel Erfolg!</h2>
        <p style="opacity:.55;font-size:.9rem;margin-bottom:20px">Du hast alle Teile der Bewerbungs-E-Mail erarbeitet.</p>
        ${neutral(`
          <p style="font-size:.85rem;font-weight:700;margin-bottom:10px;text-align:left">Deine E-Mail enthält:</p>
          <ul style="padding-left:16px;font-size:.85rem;line-height:2.1;text-align:left;margin:0">
            <li>${grn('✅')} Empfänger-Adresse &amp; Betreffzeile</li>
            <li>${grn('✅')} Förmliche Anrede</li>
            <li>${grn('✅')} Einleitungssatz (Stelle + Zeitraum)</li>
            <li>${grn('✅')} Eignung mit Belegen</li>
            <li>${grn('✅')} Bezug auf Arbeitsaufgaben</li>
            <li>${grn('✅')} Abschluss &amp; Bitte um Gespräch</li>
            <li>${grn('✅')} Grußformel + Name</li>
          </ul>
        `)}
        <button id="bb-weiter" class="btn btn-ol" style="margin-top:6px;border-color:#16a34a;color:#16a34a">↺ Nochmal von vorne</button>
      </div>`;
  }

  /* ═══════════════════════════════════════════════════════════
     ROUTER
     ═══════════════════════════════════════════════════════════ */
  function getHTML(n) {
    switch (n) {
      case 0: return s0();
      case 1: return s1();
      case 2: return s2();
      case 3: return s3();
      case 4: return s4();
      case 5: return s5();
      case 6: return s6();
      case 7: return s7();
      case 8: return s8();
      default: return s9();
    }
  }

  /* ═══════════════════════════════════════════════════════════
     RENDER + EVENTS
     ═══════════════════════════════════════════════════════════ */
  function render() {
    const el = document.getElementById('bbr-schreibaufgabe-grid');
    if (!el) return;
    el.innerHTML = getHTML(S.step);
    bindEvents();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function bindEvents() {
    const wb = document.getElementById('bb-weiter');
    if (wb) wb.addEventListener('click', () => {
      if (S.step >= TOTAL) { S.step = 0; }
      else { S.step++; }
      render();
    });

    ['hilfe', 'aufbau', 'fehler', 'alternativ'].forEach(key => {
      const btn = document.getElementById(`bb-btn-${key}`);
      const box = document.getElementById(`bb-box-${key}`);
      if (btn && box) {
        btn.addEventListener('click', () => {
          box.style.display = box.style.display !== 'none' ? 'none' : 'block';
        });
      }
    });
  }

  /* ═══════════════════════════════════════════════════════════
     INITIALISIERUNG
     ═══════════════════════════════════════════════════════════ */
  function init() {
    S.step = 0;
    render();
  }

  window._initBbrSchreibaufgabe = init;

  // MutationObserver: initialisiert sobald das Panel sichtbar wird
  (function watchPanel() {
    var panel = document.getElementById('bbr-panel-schreibaufgabe');
    if (!panel) return;

    var observer = new MutationObserver(function () {
      var visible = panel.style.display !== 'none' && panel.style.display !== '';
      if (visible) {
        var grid = document.getElementById('bbr-schreibaufgabe-grid');
        if (grid && !grid.children.length) init();
      }
    });
    observer.observe(panel, { attributes: true, attributeFilter: ['style'] });

    // Fallback: auch auf Tab-Klick reagieren
    var tab = document.getElementById('bbr-tab-schreibaufgabe');
    if (tab) {
      tab.addEventListener('click', function () {
        setTimeout(function () {
          var grid = document.getElementById('bbr-schreibaufgabe-grid');
          if (grid && !grid.children.length) init();
        }, 50);
      });
    }
  })();

})();
