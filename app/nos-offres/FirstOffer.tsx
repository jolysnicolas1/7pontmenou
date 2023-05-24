import Image from "next/image"
import test from "/public/offers-catering.jpg"
import { motion, useScroll, useTransform } from "framer-motion"
import FirstOfferPic from "./FirstOfferPic";

export default function FirstOffer() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["40%", "140%"]); 
    return (
        <div className="flex italic">
            <FirstOfferPic></FirstOfferPic>
            <div className="w-2/4 m-5 flex align-center relative">
                <div className="flex flex-col italic text-2xl font-light text-gray-600">
                    <motion.div style={{y}} className="p-12 absolute flex flex-col space-y-8">
                        <p>Mariages</p>
                        <p>Célébrations</p>
                        <p>Menu sur-mesure</p>
                    </motion.div>
                    <motion.div style={{y}} className="opacity-0 p-12 flex flex-col space-y-8">
                        <p>Mariages</p>
                        <p>Célébrations</p>
                        <p>Menu sur-mesure</p>
                    </motion.div>
                </div>
            </div>
            
        </div> 
    )
}