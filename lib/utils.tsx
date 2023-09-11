import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Le projet", href: "#projet" },
  { name: "L'histoire", href: "#historique" },
  { name: "L'appel à dons", href: "#appel-a-dons" },
  { name: "Le montage financier", href: "#montage-financier" },
  { name: "Contact", href: "#contact" },
]

export const reservationLink =
  "https://7pontmenou.org"
