import Image from "next/image"
import test from "/public/offers-catering.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import SecondOfferPic from "./SecondOfferPic";

export default function SecondOffer() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]); 
    return (
        <div className="flex italic relative">
            <div className="w-2/4 m-5 flex justify-end relative">
                <div className="flex italic text-xl font-thin">
                    <motion.div style={{y}}  className="absolute p-12 flex flex-col space-y-12">
                        <p className="text-right">texte</p>
                        <p className="text-right">texte plus long</p>
                        <p className="text-right">texte</p>
                    </motion.div>
                    <motion.div style={{y}}  className="opacity-0 p-12 flex flex-col space-y-12">
                        <p className="text-right">texte</p>
                        <p className="text-right">texte plus long</p>
                        <p className="text-right">texte</p>
                    </motion.div>
                </div>
            </div>
            <SecondOfferPic></SecondOfferPic>
        </div>  
    )
}