import { BellAlertIcon } from "@heroicons/react/24/outline"
import { Map } from "lucide-react"
import React from "react"

import { reservationLink } from "@/lib/utils"

const BottomButtons = () => {
  const buttons = [
    {
      name: "Itinéraire",
      href: "https://www.google.com/maps/place/7+Rue+de+Pont+Menou,+29620+Plou%C3%A9gat-Gu%C3%A9rand/@48.6476257,-3.6695713,17z/data=!3m1!4b1!4m10!1m2!2m1!1s7+rue+de+pont+menou!3m6!1s0x48117d765b288f91:0x87d6ce61479a0f7c!8m2!3d48.6476258!4d-3.6649579!15sChM3IHJ1ZSBkZSBwb250IG1lbm91kgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11c4dc7ctw?entry=ttu",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: (props: any) => <Map {...props} />,
    },
    // {
    //   name: "Appeler",
    //   href: "tel:0651961494",
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   icon: (props: any) => <PhoneCall {...props} />,
    // },
    {
      name: "Réserver",
      href: reservationLink,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      icon: (props: any) => <BellAlertIcon {...props} />,
    },
  ]

  return (
    <div className={`fixed md:hidden -bottom-3 z-50  bg-transparent`}>
      <div
        className="static flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div
          className={`font-sans px-5 pt-4 pb-3 flex
            bg-white sm:justify-between sm:w-[75vw] rounded-full text-black border border-gray-200 shadow
            `}
        >
          {buttons.map(item => (
            <a
              href={item.href}
              key={item.name}
              className="flex flex-col justify-center items-center"
            >
              <item.icon
                className="h-4 w-4"
                aria-hidden="true"
              />
              <p className="mt-2 text-xs font-medium leading-6 px-6">
                {item.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomButtons
