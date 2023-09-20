import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Le projet", href: "#projet" },
  { name: "Ce qui nous anime", href: "#ce-qui-nous-anime" },
  { name: "Qui nous sommes", href: "#qui-nous-sommes" },
  { name: "L'histoire", href: "#l-histoire" },
  { name: "On imagine", href: "#on-imagine" },
  { name: "Contributions", href: "#contributions" },
  { name: "Contact", href: "#contact" },
]

export const reservationLink =
  "https://7pontmenou.org"

export const formLink =
  "https://noteforms.com/forms/achat-du-7-pont-menou-promesses-de-dons-et-de-prets-fxeixg"
