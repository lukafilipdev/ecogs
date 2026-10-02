import { photos } from "./photos";
import type { HistoryChapter, Milestone } from "./types";

/** Short timeline shown on the home page. */
export const milestones: Milestone[] = [
  {
    year: "1874",
    title: "Prva verska šola",
    text: "Učitelj Leopold Hari začne poučevati v novi verski šoli.",
  },
  {
    year: "1918",
    title: "Samostojna občina",
    text: "29. junija se občina loči od Bodonec in Križevec.",
  },
  {
    year: "1928",
    title: "Posvetitev cerkve",
    text: "28. oktobra je cerkev predana svojemu namenu.",
  },
  {
    year: "1996",
    title: "Celovita prenova",
    text: "Cerkev zasije v novi podobi.",
  },
];

export const historyChapters: HistoryChapter[] = [
  {
    year: "1874",
    kicker: "Začetki",
    title: "Prva evangeličanska verska šola",
    text: "Začetki skupnosti segajo v leto 1874, ko je bila zgrajena verska šola. Kot prvi evangeličanski učitelj je v njej poučeval Leopold Hari.",
  },
  {
    year: "1918",
    kicker: "Samostojnost",
    title: "Ustanovitev cerkvene občine",
    text: "Na cerkvenem občnem zboru 29. junija 1918 je bila ustanovljena samostojna Evangeličanska cerkvena občina Gornji Slaveči, ki se je ločila od matičnih občin Bodonci in Križevci.",
  },
  {
    year: "1927",
    kicker: "Temeljni kamen",
    title: "Darovi od blizu in daleč",
    text: "Nabiralna akcija je potekala po Prekmurju in med izseljenci v Ameriki. Ob pomoči Gustav Adolf društva iz Nemčije in mnogih dobrotnikov — tudi rimokatoliške vere — so 29. junija 1927 položili temeljni kamen.",
  },
  {
    year: "1928",
    kicker: "Posvetitev",
    title: "Cerkev, predana svojemu namenu",
    text: "Cerkev, zgrajena po načrtih Hansa Pascherja iz Gradca in pod vodstvom zidarskega mojstra Janeza Juda iz Kuzme, je bila posvečena 28. oktobra 1928.",
    figure: {
      image: photos.c3,
      ratio: "3/2",
      caption: "Pročelje cerkve z zvonikom.",
    },
  },
  {
    year: "1938",
    kicker: "Poslikava",
    title: "Barve Ivana Cmerekarja",
    text: "Deset let po posvetitvi je notranjost cerkve poslikal cerkveni slikar Ivan Cmerekar iz Veržeja.",
    figure: {
      image: photos.c115,
      ratio: "4/5",
      caption: "Poslikava nad oltarjem s prižnico.",
    },
  },
  {
    year: "1968",
    kicker: "Jubilej",
    title: "Petdeset let skupnosti",
    text: "Po prenovi župnišča s pomočjo Svetovne luteranske zveze in elektrifikaciji cerkve leta 1961 so verniki obnovili streho, stolp in križ ter praznovali 50-letnico občine.",
  },
  {
    year: "1981",
    kicker: "Novo župnišče",
    title: "Dom za srečanja",
    text: "S pomočjo Svetovne luteranske zveze in domačih vernikov, ki so prispevali delo, les in sredstva, je bilo zgrajeno novo župnišče z dvorano, blagoslovljeno 6. septembra 1981.",
  },
  {
    year: "1984",
    kicker: "Orgle",
    title: "Glas, ki napolni cerkev",
    text: "Začelo se je zbiranje sredstev za dvomanualne orgle s pedalom, delo mojstra Antona Jenka iz Ljubljane.",
    figure: { image: photos.c93, ratio: "4/5", caption: "Orgle na koru." },
  },
  {
    year: "1996",
    kicker: "Prenova",
    title: "Cerkev v novi luči",
    text: "Cerkev je bila celovito obnovljena in je danes ena najlepših na Goričkem.",
    figure: {
      image: photos.c166,
      ratio: "3/2",
      caption: "Pogled po ladji proti glavnemu vhodu.",
    },
  },
  {
    year: "Danes",
    kicker: "Živa skupnost",
    title: "Vera, ki živi med ljudmi",
    text: "Danes je cerkev prostor bogoslužja, glasbe, verouka in praznovanj — dom skupnosti, ki ostaja odprta za vse.",
  },
];
