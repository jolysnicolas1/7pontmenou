import { navigation } from "@/lib/utils"

import Burger from "./Burger"

type Props = {
  isDark?: boolean
}

const Navbar = ({ isDark }: Props) => {
  return (
    <header className={`fixed inset-x-0 top-0 z-50  bg-transparent`}>
      <nav
        className="static flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex md:flex-1">
        </div>
        <Burger isDark={isDark} />
        <div
          className={`hidden font-sans px-5 pt-4 pb-3 md:flex md:gap-x-12 ${
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
        <div className="hidden md:flex md:flex-1 md:justify-end">
        </div>
      </nav>
    </header>
  )
}

export default Navbar
