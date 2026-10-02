import { photos } from "./photos";
import type { Article, ArticleBlock, NewsCategory } from "./types";

export const newsCategories: { slug: string; label: NewsCategory }[] = [
  { slug: "bogosluzje", label: "Bogoslužje" },
  { slug: "dogodki", label: "Dogodki" },
  { slug: "mladina", label: "Mladina" },
  { slug: "skupnost", label: "Skupnost" },
  { slug: "obvestila", label: "Obvestila" },
];

/** Body used for articles that don't define their own yet. */
export const defaultArticleBody: ArticleBlock[] = [
  {
    type: "paragraph",
    text: "Vabljeni ste vsi — člani naše cerkvene občine, sosedje in prijatelji iz okoliških vasi. Skupnost se krepi v srečanjih, zato bomo veseli vsakogar, ki se nam bo pridružil.",
  },
  {
    type: "quote",
    text: "Kjer sta namreč dva ali trije zbrani v mojem imenu, tam sem jaz sredi med njimi.",
    cite: "Mt 18,20",
  },
  {
    type: "image",
    image: photos.c109,
    caption: "Notranjost cerkve v Gornjih Slavečih.",
  },
  {
    type: "paragraph",
    text: "Za dodatne informacije smo dosegljivi na telefonski številki (02) 555 81 50 ali po elektronski pošti.",
  },
];

export const articles: Article[] = [
  {
    slug: "dan-reformacije",
    title: "Vabilo na praznovanje dneva reformacije",
    date: "2026-09-24",
    category: "Bogoslužje",
    image: photos.c184,
    published: true,
    excerpt:
      "31. oktobra se bomo s prazničnim bogoslužjem spomnili začetkov reformacije. Po bogoslužju vabljeni na druženje pred cerkvijo.",
    body: [
      {
        type: "paragraph",
        text: "Dan reformacije je za evangeličanske kristjane eden najpomembnejših praznikov. Spominjamo se leta 1517, ko je Martin Luther objavil svojih 95 tez, in obenem tudi slovenskih protestantov, ki so nam podarili prvo slovensko knjigo.",
      },
      {
        type: "paragraph",
        text: "Praznično bogoslužje bo potekalo ob 10.00 v naši cerkvi. Sodelovali bodo pevci in organist, po bogoslužju pa se bomo zadržali ob skromni pogostitvi pred cerkvijo.",
      },
      { type: "quote", text: "Pravični bo živel iz vere.", cite: "Rim 1,17" },
      { type: "heading", text: "Za vse generacije" },
      {
        type: "paragraph",
        text: "Posebej vabimo družine z otroki in mladino. Za najmlajše bomo med bogoslužjem pripravili kratko srečanje v župnišču.",
      },
      {
        type: "image",
        image: photos.c69,
        caption: "Oltar s prižnico v naši cerkvi.",
      },
      {
        type: "paragraph",
        text: "Veseli bomo vsakogar — članov naše cerkvene občine, sosedov in prijateljev iz okoliških vasi.",
      },
      {
        type: "gallery",
        images: [photos.c63, photos.c189, photos.c112],
        caption: "Utrinki iz lanskega praznovanja.",
      },
    ],
  },
  {
    slug: "zacetek-verouka",
    title: "Začetek novega veroučnega leta",
    date: "2026-09-21",
    category: "Mladina",
    image: photos.c106,
    published: true,
    excerpt:
      "Vabimo otroke in mladino k verouku in pripravi na konfirmacijo. Urnik srečanj bomo uskladili na prvem srečanju s starši.",
  },
  {
    slug: "zahvalna-nedelja",
    title: "Zahvalna nedelja: hvala za kruh in vino",
    date: "2026-09-07",
    category: "Skupnost",
    image: photos.c20,
    published: true,
    excerpt:
      "Ob koncu poletja se bomo zahvalili za letošnje pridelke. Darove za oltar lahko prinesete v soboto pred bogoslužjem.",
  },
  {
    slug: "jesenski-urnik",
    title: "Urnik bogoslužij v jesenskih mesecih",
    date: "2026-08-30",
    category: "Obvestila",
    image: photos.c166,
    published: true,
    excerpt:
      "Bogoslužja ostajajo vsako nedeljo in ob praznikih ob 10.00. Morebitne spremembe bomo sproti objavljali na tej strani.",
  },
  {
    slug: "vecer-orgelske-glasbe",
    title: "Večer orgelske glasbe",
    date: "2026-07-12",
    category: "Dogodki",
    image: photos.c93,
    published: true,
    excerpt:
      "Orgle mojstra Antona Jenka so zazvenele v poletnem večeru. Hvala vsem, ki ste napolnili cerkev.",
  },
  {
    slug: "obletnica-obcine",
    title: "108 let cerkvene občine Gornji Slaveči",
    date: "2026-06-29",
    category: "Dogodki",
    image: photos.c3,
    published: true,
    excerpt:
      "29. junija 1918 je bila ustanovljena naša samostojna cerkvena občina. Obletnico smo praznovali skupaj z gosti iz sosednjih občin.",
  },
];
