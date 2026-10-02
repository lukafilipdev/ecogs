import { photos } from "./photos";
import type { CommunityActivity, CoreValue, GalleryImage } from "./types";

export const communityActivities: CommunityActivity[] = [
  {
    title: "Bogoslužje",
    image: photos.c63,
    text: "Vsako nedeljo in ob praznikih ob 10.00. Beseda, pesem in zakramenti, ki nas povezujejo.",
  },
  {
    title: "Otroci in verouk",
    image: photos.c115,
    text: "Verouk za otroke in mladino, priprava na konfirmacijo ter srečanja med šolskim letom.",
  },
  {
    title: "Glasba in orgle",
    image: photos.c93,
    text: "Dvomanualne orgle mojstra Antona Jenka spremljajo bogoslužja, praznike in koncerte.",
  },
  {
    title: "Srečanja in praznovanja",
    image: photos.c3,
    text: "Obletnice, krsti, poroke in druženja po bogoslužju — trenutki, ki povezujejo generacije.",
  },
  {
    title: "Dobrodelnost",
    image: photos.c20,
    text: "Skupaj pomagamo tistim, ki pomoči potrebujejo — blizu doma in daleč.",
  },
];

export const coreValues: CoreValue[] = [
  { word: "Vera", text: "Živimo iz milosti in se zbiramo ob Božji besedi." },
  {
    word: "Skupnost",
    text: "Povezujemo družine, generacije in vasi Goričkega.",
  },
  { word: "Bližina", text: "Smo ob ljudeh v veselju, stiski in vsakdanu." },
  { word: "Upanje", text: "Zgodovino spoštujemo, prihodnost gradimo skupaj." },
];

export const churchGallery: GalleryImage[] = [
  { image: photos.c189, alt: "Oltar s kristalnim lestencem" },
  { image: photos.c109, alt: "Notranjost s klopmi in oltarjem" },
  { image: photos.c297, alt: "Oltarna slika Jezusa na Oljski gori" },
  { image: photos.c93, alt: "Pogled s prižnice proti orglam" },
  { image: photos.c63, alt: "Osrednja ladja z rdečo preprogo" },
  { image: photos.c38, alt: "Pročelje cerkve" },
];
