"use client"
import "swiper/css"
import "swiper/css/pagination"

import Image from "next/image"
import { Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const images = [
  "/photos/pm_rue.png",
]

export default function Slider() {
  return (
    <div className="bg-transparent max-w-7xl mx-auto">
      <h2 className="mt-2 text-center pb-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">
      </h2>
      <Swiper
        slidesPerView={1.2}
        scrollbar={{
          hide: true,
        }}
        spaceBetween={30}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={image}>
            <div className="rounded-md h-full shrink-0 drop-shadow-2xl relative">
              <Image
                // className="rounded-md object-contain h-full"
                src={image}
                alt={`Passages - Portfolio ${i}`}
                objectFit="cover"
                fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
