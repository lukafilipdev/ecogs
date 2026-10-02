import type { NavItem, OfficeHour } from "./types";

export const site = {
  name: "ECOGS",
  fullName: "Evangeličanska cerkvena občina Gornji Slaveči",
  description:
    "Evangeličanska cerkvena občina Gornji Slaveči — skupnost vere, upanja in bližine na Goričkem od leta 1918.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "sl_SI",
} as const;

const phone = "+38625558150";
const email = "simona.prosic@siol.net";

export const contact = {
  street: "Gornji Slaveči 117",
  postalCode: "9263",
  city: "Kuzma",
  country: "Slovenija",
  phone,
  phoneDisplay: "(02) 555 81 50",
  phoneHref: `tel:${phone}`,
  email,
  emailHref: `mailto:${email}`,
  pastor: "mag. Simona Prosič Filip",
  serviceTime: "10.00",
  mapEmbedQuery: "Evangeličanska cerkev Gornji Slaveči",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Gornji+Slave%C4%8Di+117+9263+Kuzma",
} as const;

export const officeHours: OfficeHour[] = [
  { day: "Ponedeljek", time: "09.00–12.00" },
  { day: "Sreda", time: "15.00–18.00" },
];

export const mainNav: NavItem[] = [
  { label: "Domov", href: "/" },
  { label: "Novice", href: "/novice" },
  { label: "O nas", href: "/o-nas" },
  { label: "Zgodovina", href: "/zgodovina" },
  { label: "Kontakt", href: "/kontakt" },
];

export const externalLinks: NavItem[] = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Evangeličanska cerkev v Sloveniji", href: "https://evang.si/" },
];

// TODO: point to real pages once the privacy & cookie policies exist.
export const legalLinks: NavItem[] = [
  { label: "Zasebnost", href: "/" },
  { label: "Piškotki", href: "/" },
];
