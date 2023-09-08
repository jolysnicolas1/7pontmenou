import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Le projet du 7 Pont Menou", href: "#la-table" },
  { name: "Le montage financier", href: "#sur-mesure" },
  { name: "Contact", href: "#contact" },
]

export const reservationLink =
  "https://ib.guestonline.fr/instabook/bookings/lTtWuZ3"
