import { Bird, Mail, Map } from "lucide-react";

export const socials = [
  {
    name: "7 rue de Pont Menou, 29620 PLOUEGAT GUERRAND",
    href: "https://www.google.com/maps/place/7+Rue+de+Pont+Menou,+29620+Plou%C3%A9gat-Gu%C3%A9rand/@48.6476257,-3.6695713,17z/data=!3m1!4b1!4m10!1m2!2m1!1s7+rue+de+pont+menou!3m6!1s0x48117d765b288f91:0x87d6ce61479a0f7c!8m2!3d48.6476258!4d-3.6649579!15sChM3IHJ1ZSBkZSBwb250IG1lbm91kgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11c4dc7ctw?entry=ttu",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: (props: any) => <Map {...props} />,
  },
  {
    name: "7pontmenou@riseup.net",
    href: "mailto:7pontmenou@riseup.net",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: (props: any) => <Mail {...props} />,
  },
  {
    name: "Newsletter : 7pontmenou-subscribe@lists.riseup.net",
    href: "mailto:7pontmenou-subscribe@lists.riseup.net",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: (props: any) => <Bird {...props} />,
  },
]
