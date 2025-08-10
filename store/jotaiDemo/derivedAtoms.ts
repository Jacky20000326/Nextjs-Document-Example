import { atom } from "jotai";
import { passerbyAtom } from "./atoms";

export const peopleIdAtom = atom((get) => {
  const people = get(passerbyAtom({ id: 1 }));
  return people.id;
});
