import { HandRaisedIcon } from "@heroicons/react/24/outline"

import { formLink } from "@/lib/utils"

import { buttonVariants } from "./ui/button"

export default function Banner() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-950 w-screen">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Faire un don
          </h2>
          <div className="m-12 text-white w-3/4 mx-auto bg-transparent rounded-lg flex justify-between border border-myGreen relative 
          before:text-white
          before:absolute
          before:-top-10
          before:content-['0']
          after:text-white
          after:absolute
          after:-top-10
          after:right-0
          after:content-['330.000e']
          ">
            <div className="w-7/12 bg-gradient-to-r from-red-100 to-red-700 h-8 relative 
              after:text-white
              after:absolute
              after:top-10
              after:right-0
              after:content-['202.000e']
              before:absolute
              before:bg-red-700
              before:h-4
              before:w-1
              before:border-r-red-700
              before:-right-0
              before:-bottom-2
            "></div>
            <p className="text-sm text-white px-3 text-center py-1 hyphens-none">on y est presque!</p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={formLink}
              target="_blank"

              className={buttonVariants({ variant: "outline", size: "xl" })}
            >
              <HandRaisedIcon className="mr-2 h-4 w-4" /> Promesse de don ou de prêt
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/4 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="1"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#a67c00" />
            <stop
              offset={1}
              stopColor="#3fa535"
            />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
