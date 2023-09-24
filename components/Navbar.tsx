import { BellAlertIcon } from "@heroicons/react/24/outline"

import { buttonVariants } from "@/components/ui/button"
import { navigation , formLink } from "@/lib/utils"

import Burger from "./Burger"

type Props = {
  isDark?: boolean
}

const Navbar = ({ isDark }: Props) => {
  return (
    <header className={`fixed inset-x-0 top-0 z-50  bg-transparent`}>
      <nav
        className="static flex items-center justify-between p-6 lg:px-8 text-center"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
        </div>
        <Burger isDark={isDark} />
        <div
          className={`bg-opacity-90 hidden font-sans px-5 pt-4 pb-3 lg:flex lg:gap-x-12 ${
            isDark
              ? " bg-transparent text-white"
              : "bg-white rounded-full text-black shadow"
          }`}
        >
          {navigation.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-medium leading-6 "
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-end ml-5">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={formLink}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <BellAlertIcon className="mr-2 h-4 w-4" /> Contribuer
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
