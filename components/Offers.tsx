import Image from "next/image"

type Props = {
  features: { name: string; description: string | React.ReactNode }[]
  images: { href: string; alt: string }[]
  title: string
  intro: string
  intro2: string
  intro3: string
  intro4: string
  link?: React.ReactNode
  reversePosition?: boolean
  titleId: string
  
}

export default function Offers({
  features,
  images,
  title,
  intro,
  intro2,
  intro3,
  intro4,
  link,
  titleId,
  reversePosition,
}: Props) {
  return (
    <div className=""
         id={titleId}
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div
          className={`pl-5 ${
            reversePosition ? "lg:order-last" : "lg:order-none"
          }`}
        >
          <div>
            <h2
              className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl mb-4 font-serif"
            >
              {title}
            </h2>
            <p className="font-bold">
              {intro}
            </p>
            <br />
            <p>
              {intro2}
            </p>
            <br />
            <p>
              {intro3}
            </p>
            <br />
            <p>
              {intro4}
            </p>
            {link}
          </div>
          <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map(feature => (
              <div
                key={feature.name}
                className="border-t border-gray-200 pt-4"
              >
                <dt className="font-medium text-gray-900 text-lg">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-gray-700 text-sm">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map(img => (
            <div
              key="img"
              className="h-[200px] lg:h-[290px] relative"
            >
              <Image
                fill
                objectFit="cover"
                src={img.href}
                alt={img.alt}
                className="self-end rounded-md bg-gray-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
