import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Le projet", href: "#projet" },
  { name: "L'histoire", href: "#historique" },
  { name: "On imagine", href: "#on-imagine" },
  { name: "L'appel à dons", href: "#appel-a-dons" },
  { name: "Le montage financier", href: "#montage-financier" },
  { name: "Contact", href: "#contact" },
]

export const reservationLink =
  "https://7pontmenou.org"

export const formLink =
  "https://noteforms.com/forms/achat-du-7-pont-menou-promesses-de-dons-et-de-prets-seoyqk"
