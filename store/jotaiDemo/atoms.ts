import { atomFamily } from "jotai/utils";
import { Atom, atom } from "jotai";

export const countAtom = atom(0);

export const countryAtom = atom("Japan");

export const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);

export const animeAtom = atom([
  {
    title: "Ghost in the Shell",
    year: 1995,
    watched: true,
  },
  {
    title: "Serial Experiments Lain",
    year: 1998,
    watched: false,
  },
]);

export const passerbyAtom = atomFamily((param: { id: number }) =>
  atom<typeof param & { name: string }>({
    ...param,
    name: "Passerby",
  })
);
