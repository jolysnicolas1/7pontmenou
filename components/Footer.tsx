import { socials } from "@/lib/socials"
import { navigation as mainNavigation } from "@/lib/utils"

const Footer = () => {
  const navigation = {
    main: mainNavigation,
    social: socials,
  }

  return (
    <footer className="bg-slate-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className=" -mb-6 columns-2 flex justify-center  flex-wrap"
          aria-label="Footer"
        >
          {navigation.main.map(item => (
            <div
              key={item.name}
              className="pb-6 px-6"
            >
              <a
                href={item.href}
                className="text-base leading-6 text-slate-50 hover:underline"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="w-full justify-center">
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600 self-center">
            <a className="text-white hover:text-green-900 duration-500" href="https://iliz.org" target="_blank" rel="noopener noreferrer">Merci Élise pour les visuels</a>
          </p>
        </div>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-50 hover:underline"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-6 w-6"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center flex flex-wrap justify-center text-sm leading-5 text-slate-50">
            Projet dachat du 7 Pont Menou
        </p>
      </div>
    </footer>
  )
}

export default Footer
