/* ==========================================================================
   PORTFOLIO-DATEN  –  hier werden alle Stücke gepflegt
   ==========================================================================

   NEUES STÜCK HINZUFÜGEN
   1. Foto vorbereiten (siehe BILDSTANDARD unten) und in den Ordner
      images/portfolio/ legen.
   2. Die VORLAGE ganz unten kopieren (den Bereich zwischen den grauen
      Kommentar-Zeichen), direkt über die letzte Zeile "];" einfügen und
      ausfüllen.
   3. Zwischen zwei Stücken steht immer ein Komma nach der schließenden
      geschweiften Klammer:  },
   4. Datei speichern, hochladen, die Seite neu laden (Strg + F5).

   Die Reihenfolge hier ist die Reihenfolge auf der Seite (neueste Stücke oben).
   Wenn etwas nicht angezeigt wird: Browser-Konsole öffnen (F12), dort steht,
   welcher Eintrag das Problem hat.

   FELDER
   Pflicht:  id, era, image, title
   Alles andere ist optional. Was fehlt, wird einfach nicht angezeigt.

   id        Kurzname des Stücks, nur Kleinbuchstaben, Ziffern und Bindestriche,
             pro Stück einmalig, z. B. 'roemische-fibel'. Daraus entsteht der
             Direktlink portfolio.html#roemische-fibel
   era       Epoche für den Filter. Genau einer dieser Werte:
               'antiquity'    Antike (auch römisch, vorrömisch)
               'migration'    Völkerwanderung
               'medieval'     Mittelalter
               'renaissance'  Renaissance
               'modern'       Neuzeit (ab ca. 1700, inkl. Biedermeier, Jugendstil)
   image     Dateiname des Fotos in images/portfolio/, z. B. 'roemische-fibel.jpg'
   focus     (optional) Bildausschnitt, wenn das Motiv im Hochformat-Zuschnitt
             abgeschnitten wird, z. B. 'center top' oder 'center 20%'
   alt       Bildbeschreibung für Screenreader und Google, wie man das Foto
             jemandem am Telefon beschreiben würde
   title     Name des Stücks
   date      Zeitstellung, z. B. '2. Jahrhundert n. Chr.' / 'um 1900'
   culture   Kultur oder Stil, z. B. 'Provinzialrömisch', 'Jugendstil'
   materials Materialien
   technique Technik
   description  Beschreibungstext
   source    (optional) Quelle des Vorbilds: Fundort, Museum, Inventarnummer, Literatur
   status    'available' (verfügbar), 'commission' (Auftragsarbeit) oder 'sold'
   shopUrl   (optional) Link zum Stück im Etsy-Shop. Erscheint als Button im Detailfenster.
   featured  (optional) true = erscheint auf der Startseite unter "Ausgewählte Arbeiten".
             Empfohlen: genau drei Stücke.

   Texte stehen immer als { en: '...', de: '...' } – englisch und deutsch.
   Texte stehen in 'einfachen Anführungszeichen'. Kommt im Text ein Apostroph
   vor, bitte das typografische ’ verwenden (nicht '), sonst bricht die Datei.

   BILDSTANDARD
   - Hochformat 3:4, ca. 1200 x 1600 Pixel
   - Motiv mittig, mit etwas Rand rundherum
   - JPG (Qualität ca. 80 %) oder WebP, möglichst unter 400 KB
   - nie direkt Kamera- oder Handyfotos hochladen (mehrere MB)
   - Dateiname klein, ohne Leerzeichen und Umlaute: 'roemische-fibel.jpg'
   ========================================================================== */

const PORTFOLIO = [

  {
    id: 'renaissance-pendant',
        era: 'renaissance',
    image: 'IMG_8447-1.jpg',
    alt: {
      en: 'Renaissance-style pendant with gemstones and a freshwater pearl drop',
      de: 'Anhänger im Renaissance-Stil mit Edelsteinen und Süßwasserperle'
    },
    title: { en: 'Pendant', de: 'Anhänger' },
    date: { en: '16th Century', de: '16. Jahrhundert' },
    culture: { en: 'Renaissance', de: 'Renaissance' },
    materials: { en: 'Gemstones, gilded brass, freshwater pearl', de: 'Edelsteine, vergoldetes Messing, Süßwasserperle' },
    technique: { en: 'Goldsmithing, stone setting', de: 'Goldschmiedearbeit, Steinfassung' },
    status: 'available',
    description: {
      en: 'A faithful reproduction of a Renaissance pendant, featuring sapphire and amethyst-coloured stones set in gilded brass with ornamental scrollwork and a freshwater pearl drop.',
      de: 'Eine getreue Reproduktion eines Renaissance-Anhängers mit saphir- und amethystfarbenen Steinen in vergoldetem Messing mit ornamentalem Beschlag und einer Süßwasserperle.'
    }
  },

  {
    id: 'art-nouveau-necklace',
    era: 'modern',
    image: 'IMG_9630-1.jpg',
    alt: {
      en: 'Art Nouveau necklace with an openwork bronze pendant and a serpentine cabochon',
      de: 'Jugendstil-Kette mit durchbrochenem Bronzeanhänger und Serpentin-Cabochon'
    },
    title: { en: 'Necklace', de: 'Kette' },
    date: { en: 'c. 1900', de: 'um 1900' },
    culture: { en: 'Art Nouveau', de: 'Jugendstil' },
    materials: { en: 'Bronze, silver, serpentine', de: 'Bronze, Silber, Serpentin' },
    technique: { en: 'Casting, stone setting', de: 'Guss, Steinfassung' },
    status: 'commission',
    description: {
      en: 'Inspired by the organic forms of the Art Nouveau movement, this necklace features an openwork bronze pendant with a serpentine cabochon.',
      de: 'Inspiriert von den organischen Formen des Jugendstils, mit einem durchbrochenen Bronzeanhänger und Serpentin-Cabochon.'
    }
  },

  {
    id: 'ostrogothic-eagle-fibulae',
    featured: true,
    era: 'migration',
    image: 'IMG_8667-1.jpg',
    alt: {
      en: 'Pair of Ostrogothic eagle fibulae with garnet inlays',
      de: 'Paar ostgotischer Adlerfibeln mit Granat-Einlagen'
    },
    title: { en: 'Ostrogothic Eagle Fibulae', de: 'Ostgotische Adlerfibeln' },
    date: { en: '5th Century AD', de: '5. Jahrhundert n. Chr.' },
    culture: { en: 'Ostrogothic', de: 'Ostgotisch' },
    materials: { en: 'Bronze, enamel, garnet', de: 'Bronze, Email, Granat' },
    technique: { en: 'Casting, cloisonné enamel', de: 'Guss, Cloisonné-Email' },
    status: 'available',
    description: {
      en: 'A pair of eagle-shaped fibulae in the Ostrogothic tradition, crafted with cloisonné enamel and garnet inlays on gilded bronze.',
      de: 'Ein Paar adlerförmiger Fibeln in ostgotischer Tradition, mit Cloisonné-Email und Granat-Einlagen auf vergoldeter Bronze.'
    }
  },

  {
    id: '1296',
    era: 'renaissance',
    image: 'IMG_1296-1.jpg',
    alt: {
      en: 'Pendant after originals from ~1600',
      de: 'Anhänger nach Vorlagen rund um 1600'
    },
    title: { en: 'Pendant', de: 'Anhänger' },
    date: { en: 'around 1600', de: 'um 1600' },
    culture: { en: 'Renaissance', de: 'Renaissance' },
    materials: { en: 'Real gold-plated brass, glass, freshwater pearls, lapis lazuli, agate', de: 'Echt vergoldetes Messing, Glas, Süßwasserperlen, Lapislazuli, Achat' },
    technique: { en: 'test', de: 'test' },
    status: 'sold',
    description: {
      en: 'Pendant after originals from around 1600.',
      de: 'Anhänger nach Originalen aus der Zeit um 1600.'
    }
  },

    {
    id: '2560',
    era: 'medieval',
    image: 'IMG_2560-1.jpg',
    title: { en: 'Hat Aigrette for Feathers', de: 'Hutagraffe für Federn' },
    date: { en: 'late 15th Century', de: 'Ende 15. Jahrhundert' },
    culture: { en: 'Late Medieval', de: 'Spätmittelalter' },
    materials: {
      en: 'Real gold-plated brass, serpentine, freshwater pearls',
      de: 'Echt vergoldetes Messing, Serpentin, Süßwasserperlen'
    },
    description: {
      en: 'Hat aigrette for feathers after examples depicted in paintings from the second half of the 15th century.',
      de: 'Hutagraffe für Federn nach Vorlagen aus Gemälden der zweiten Hälfte des 15. Jahrhunderts.'
    }
  },

    {
    id: '2503',
    era: 'antiquity',
    image: 'IMG_2503-1.jpg',
    title: { en: 'Roman Ring', de: 'Römischer Ring' },
    culture: { en: 'Roman', de: 'Römisch' },
    materials: {
      en: 'Sterling silver, glass intaglio',
      de: 'Sterlingsilber, Glas-Intaglio'
    },
    description: {
      en: 'Replica of a Roman ring.',
      de: 'Replik eines Rings nach einer römischen Vorlage.'
    }
  },
  
    {
    id: '2113',
    featured: true,
    era: 'antiquity',
    image: 'IMG_2113-1.jpg',
    title: { en: 'Roman Fibula', de: 'Römische Fibel' },
    date: { en: '3rd Century AD', de: '3. Jahrhundert n. Chr.' },
    culture: { en: 'Roman', de: 'Römisch' },
    materials: { en: 'Bronze', de: 'Bronze' },
    description: {
      en: 'Replica of a Roman fibula from the 3rd century.',
      de: 'Replik einer römischen Fibel aus dem 3. Jahrhundert.'
    },
    source: { en: 'Schöckel near Graz', de: 'Schöckel bei Graz' }
  },

    {
    id: '2156',
    era: 'medieval',
    image: 'IMG_2156-1.jpg',
    title: { en: 'Byzantine Ring', de: 'Byzantinischer Ring' },
    date: { en: '11th–12th Century', de: '11.–12. Jahrhundert' },
    culture: { en: 'Byzantine', de: 'Byzantinisch' },
    materials: {
      en: 'Real gold-plated sterling silver, garnet',
      de: 'Echt vergoldetes Sterlingsilber, Granat'
    },
    description: {
      en: 'Replica of a Byzantine ring from the 11th to 12th century.',
      de: 'Replik eines byzantinischen Rings aus dem 11. bis 12. Jahrhundert.'
    }
  },

    {
    id: '2217',
    era: 'medieval',
    image: 'IMG_2217-1.jpg',
    title: { en: 'Byzantine Earrings', de: 'Byzantinische Ohrringe' },
    date: { en: 'around the 12th Century', de: 'um das 12. Jahrhundert' },
    culture: { en: 'Byzantine', de: 'Byzantinisch' },
    materials: {
      en: 'Real gold-plated bronze and sterling silver, freshwater pearls, garnets, green glass beads, brass beads',
      de: 'Echt vergoldete Bronze und Sterlingsilber, Süßwasserperlen, Granate, grüne Glasperlen, Messingperlen'
    },
    description: {
      en: 'Replica combining elements from two Byzantine earring designs from Corinth.',
      de: 'Replik, die Elemente zweier byzantinischer Ohrringdesigns aus Korinth kombiniert.'
    },
    source: { en: 'Corinth', de: 'Korinth' }
  },

    {
    id: '2259',
    era: 'antiquity',
    image: 'IMG_2259-1.jpg',
    title: { en: 'Roman-Style Wedding Rings', de: 'Eheringe im römischen Stil' },
    culture: { en: 'Roman style', de: 'Römischer Stil' },
    materials: {
      en: 'Sterling silver, garnet, malachite',
      de: 'Sterlingsilber, Granat, Malachit'
    },
    description: {
      en: 'Wedding rings designed in a Roman style.',
      de: 'Eheringe im römischen Stil.'
    }
  },

    {
    id: '2354',
    era: 'medieval',
    image: 'IMG_2354-1.jpg',
    title: {
      en: 'Necklace after the Trionfo della morte',
      de: 'Kette nach dem Trionfo della morte'
    },
    date: { en: '1440–1450', de: '1440–1450' },
    culture: { en: 'Late Medieval', de: 'Spätmittelalter' },
    materials: {
      en: 'Real gold-plated brass, freshwater pearls',
      de: 'Echt vergoldetes Messing, Süßwasserperlen'
    },
    description: {
      en: 'Necklace after the fresco “Trionfo della morte” in Palermo.',
      de: 'Kette nach dem Fresko „Trionfo della morte“ in Palermo.'
    },
    source: {
      en: '“Trionfo della morte”, Palermo',
      de: '„Trionfo della morte“, Palermo'
    }
  },

    {
    id: '2393',
    era: 'medieval',
    image: 'IMG_2393-1.jpg',
    title: { en: 'Dress Fasteners', de: 'Kleiderschließen' },
    date: { en: 'around 1500', de: 'um 1500' },
    culture: {
      en: 'English, Late Medieval',
      de: 'Englisch, Spätmittelalter'
    },
    materials: { en: 'Brass, enamel', de: 'Messing, Emaille' },
    description: {
      en: 'Replica of dress fasteners after an English original.',
      de: 'Replik von Kleiderschließen nach einem englischen Original.'
    }
  },

    {
    id: '2420',
    featured: true,
    era: 'medieval',
    image: 'IMG_2420-1.jpg',
    title: { en: 'Brooch', de: 'Fürspan' },
    date: { en: '13th–14th Century', de: '13.–14. Jahrhundert' },
    culture: { en: 'Medieval', de: 'Mittelalter' },
    materials: {
      en: 'Real gold-plated brass, iolite',
      de: 'Echt vergoldetes Messing, Iolith'
    },
    description: {
      en: 'Replica of a medieval brooch from the 13th to 14th century.',
      de: 'Replik eines mittelalterlichen Fürspans aus dem 13. bis 14. Jahrhundert.'
    }
  },

    {
    id: '2424',
    era: 'antiquity',
    image: 'IMG_2424-1.jpg',
    title: { en: 'Roman Earrings', de: 'Römische Ohrringe' },
    date: { en: '1st–4th Century AD', de: '1.–4. Jahrhundert n. Chr.' },
    culture: { en: 'Roman', de: 'Römisch' },
    materials: {
      en: 'Real gold-plated silver, garnet, freshwater pearls',
      de: 'Echt vergoldetes Silber, Granat, Süßwasserperlen'
    },
    description: {
      en: 'Replica of Roman earrings from the 1st to 4th century.',
      de: 'Replik römischer Ohrringe aus dem 1. bis 4. Jahrhundert.'
    }
  },

  {
    id: '2462',
    era: 'renaissance',
    image: 'IMG_2462-1.jpg',
    title: {
      en: 'Pendant of Bianca Ponzoni',
      de: 'Anhänger der Bianca Ponzoni'
    },
    date: { en: '1557', de: '1557' },
    culture: { en: 'Renaissance', de: 'Renaissance' },
    materials: {
      en: 'Real gold-plated brass, glass, freshwater pearls',
      de: 'Echt vergoldetes Messing, Glas, Süßwasserperlen'
    },
    description: {
      en: 'Replica of the pendant worn by Bianca Ponzoni in a painting by Sofonisba Anguissola.',
      de: 'Replik des Anhängers von Bianca Ponzoni nach einem Gemälde von Sofonisba Anguissola.'
    },
    source: {
      en: 'Painting by Sofonisba Anguissola, 1557',
      de: 'Gemälde von Sofonisba Anguissola, 1557'
    }
  },

  {
    id: '2151',
    era: 'medieval',
    image: 'IMG_2151-1.jpg',
    title: {
      en: 'Medieval Ring – Original and Replica',
      de: 'Mittelalterlicher Ring – Original und Replik'
    },
    date: { en: '13th–14th Century', de: '13.–14. Jahrhundert' },
    culture: { en: 'Medieval', de: 'Mittelalter' },
    materials: {
      en: 'Real gold-plated sterling silver, tourmaline',
      de: 'Echt vergoldetes Sterlingsilber, Turmalin'
    },
    description: {
      en: 'Original medieval ring together with its replica.',
      de: 'Mittelalterlicher Originalring zusammen mit der danach gefertigten Replik.'
    }
  },

  {
    id: '2321',
    era: 'modern',
    image: 'IMG_2321-1.jpg',
    title: { en: 'Barahir’s Ring', de: 'Barahirs Ring' },
    culture: { en: 'Original design', de: 'Eigenes Design' },
    materials: {
      en: 'Silver, bronze, tourmaline',
      de: 'Silber, Bronze, Turmalin'
    },
    description: {
      en: 'Original design of “Barahir’s Ring”.',
      de: 'Eigenes Design von „Barahirs Ring“.'
    }
  },

  {
    id: '2594',
    era: 'antiquity',
    image: 'IMG_2594-1.jpg',
    title: { en: 'Roman Ring', de: 'Römischer Ring' },
    date: { en: '1st–3rd Century AD', de: '1.–3. Jahrhundert n. Chr.' },
    culture: { en: 'Roman', de: 'Römisch' },
    materials: {
      en: 'Sterling silver, glass intaglio',
      de: 'Sterlingsilber, Glas-Intaglio'
    },
    description: {
      en: 'Replica of a Roman ring from the 1st to 3rd century.',
      de: 'Replik eines römischen Rings aus dem 1. bis 3. Jahrhundert.'
    },
    source: {
      en: 'Germanisches Nationalmuseum, Nuremberg',
      de: 'Germanisches Nationalmuseum Nürnberg'
    }
  },

  {
    id: '1417',
    era: 'modern',
    image: 'IMG_1417-1.jpg',
    title: {
      en: 'Early 20th-Century Style Ring',
      de: 'Ring im Stil des frühen 20. Jahrhunderts'
    },
    date: {
      en: 'early 20th Century',
      de: 'frühes 20. Jahrhundert'
    },
    culture: { en: 'Original design', de: 'Eigenes Design' },
    materials: {
      en: 'Sterling silver, gemstone, diamond',
      de: 'Sterlingsilber, Edelstein, Diamant'
    },
    description: {
      en: 'Original ring design in the style of the early 20th century.',
      de: 'Eigenes Ringdesign im Stil des frühen 20. Jahrhunderts.'
    }
  },

  {
    id: 'klee',
    era: 'modern',
    image: 'Klee.jpg',
    title: { en: 'Regency Ring', de: 'Regency-Ring' },
    date: { en: 'around 1810', de: 'um 1810' },
    culture: { en: 'Regency', de: 'Regency' },
    materials: {
      en: 'Sterling silver, quartz',
      de: 'Sterlingsilber, Quarz'
    },
    description: {
      en: 'Ring after an original from the Regency era.',
      de: 'Ring nach einer Vorlage aus der Regency-Zeit.'
    }
  },

  {
    id: '0908',
    era: 'antiquity',
    image: 'IMG_0908-1.jpg',
    title: { en: 'Roman Earrings', de: 'Römische Ohrringe' },
    date: { en: '2nd–3rd Century AD', de: '2.–3. Jahrhundert n. Chr.' },
    culture: { en: 'Roman', de: 'Römisch' },
    materials: {
      en: 'Real gold-plated sterling silver, tanzanite, agate',
      de: 'Echt vergoldetes Sterlingsilber, Tansanit, Achat'
    },
    description: {
      en: 'Replica of Roman earrings from the 2nd to 3rd century.',
      de: 'Replik römischer Ohrringe aus dem 2. bis 3. Jahrhundert.'
    }
  },

  {
    id: '9913',
    era: 'renaissance',
    image: 'IMG_9913-1.jpg',
    title: { en: 'Pendant', de: 'Anhänger' },
    date: { en: 'mid-16th Century', de: 'Mitte 16. Jahrhundert' },
    culture: { en: 'Renaissance', de: 'Renaissance' },
    materials: {
      en: 'Real gold-plated brass, synthetic garnet, synthetic peridot, freshwater pearl',
      de: 'Echt vergoldetes Messing, synthetischer Granat, synthetischer Peridot, Süßwasserperle'
    },
    description: {
      en: 'Pendant based on various examples from the mid-16th century.',
      de: 'Anhänger nach verschiedenen Vorlagen aus der Mitte des 16. Jahrhunderts.'
    }
  },

  {
    id: '9927',
    era: 'antiquity',
    image: 'IMG_9927-1.jpg',
    title: { en: 'Etruscan Tiara', de: 'Etruskisches Diadem' },
    date: { en: 'around 480 BC', de: 'um 480 v. Chr.' },
    culture: { en: 'Etruscan', de: 'Etruskisch' },
    materials: { en: 'Brass', de: 'Messing' },
    description: {
      en: 'Replica of an Etruscan tiara after a figurine dating to around 480 BC.',
      de: 'Replik eines etruskischen Diadems nach einer Statuette aus der Zeit um 480 v. Chr.'
    }
  },

  {
    id: '9633',
    era: 'renaissance',
    image: 'IMG_9633-1.jpg',
    title: {
      en: 'Late Renaissance-Style Jewellery Set',
      de: 'Schmuckset im Stil der späten Renaissance'
    },
    culture: {
      en: 'Late Renaissance',
      de: 'Spätrenaissance'
    },
    materials: {
      en: 'Real gold-plated brass, glass, freshwater pearls',
      de: 'Echt vergoldetes Messing, Glas, Süßwasserperlen'
    },
    description: {
      en: 'Original jewellery design in the style of the late Renaissance.',
      de: 'Eigenes Schmuckdesign im Stil der späten Renaissance.'
    }
  },

  {
    id: '9637',
    era: 'modern',
    image: 'IMG_9637-1.jpg',
    title: { en: 'Regency Ball Tiara', de: 'Ballkrone der Regency-Ära' },
    date: { en: 'around 1810', de: 'um 1810' },
    culture: { en: 'Regency', de: 'Regency' },
    materials: {
      en: 'Real gold-plated brass, glass, freshwater pearls',
      de: 'Echt vergoldetes Messing, Glas, Süßwasserperlen'
    },
    description: {
      en: 'Ball tiara from the Regency era, dating to around 1810.',
      de: 'Ballkrone der Regency-Ära aus der Zeit um 1810.'
    }
  },

  {
    id: '2047',
    era: 'modern',
    image: 'IMG_2047-1.jpg',
    title: {
      en: 'Pendant with Watercolour Miniature',
      de: 'Anhänger mit Aquarellminiatur'
    },
    date: { en: 'around 1790–1830', de: 'um 1790–1830' },
    materials: {
      en: 'Sterling silver, freshwater pearls, bone, glass',
      de: 'Sterlingsilber, Süßwasserperlen, Bein, Glas'
    },
    technique: { en: 'Watercolour', de: 'Aquarell' },
    description: {
      en: 'Replica of a pendant dating to around 1790–1830, with a watercolour miniature on bone.',
      de: 'Replik eines Anhängers aus der Zeit um 1790–1830 mit einer Aquarellminiatur auf Bein.'
    }
  },

  /* ------------------------------------------------------------------
     VORLAGE zum Kopieren (ohne diese Kommentar-Zeichen oberhalb von "];"
     einfügen, nicht vergessen: nach der Klammer } ein Komma)

  {
    id: 'kurzname-des-stuecks',
    era: 'antiquity',
    image: 'dateiname.jpg',
    alt: { en: '', de: '' },
    title: { en: '', de: '' },
    date: { en: '', de: '' },
    culture: { en: '', de: '' },
    materials: { en: '', de: '' },
    technique: { en: '', de: '' },
    status: 'available',
    description: { en: '', de: '' },
    source: { en: '', de: '' },
    shopUrl: '',
    featured: false
  },

     ------------------------------------------------------------------ */

];

/* Zwei Fotos der alten Seite, noch ohne Angaben (bei Bedarf als Stück anlegen):
   https://orniello.com/wp-content/uploads/2023/07/JudenburgStand.jpg
     (Dateiname klingt nach Marktstand in Judenburg, evtl. gar kein Schmuckstück)
   https://orniello.com/wp-content/uploads/2021/01/IMG_20201203_201622-887x1024.jpg
*/
