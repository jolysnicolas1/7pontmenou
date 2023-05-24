import Image from "next/image"
import test from "/public/offers-diner.jpg"
import { motion, useScroll, useTransform } from "framer-motion"

export default function SecondOfferPic() {
    let { scrollYProgress } =useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]); 
    return (
        <motion.div style={{y}}  className="rounded-xl w-2/4 drop-shadow-md bg-white m-5 p-5 flex flex-col">
            <p className="py-5 text-medium italic">Mariages et grands évènements</p>
            <Image
                src={test}
                width={408}
                height={601}
                className=""
                alt="test picture"
                />
            <p className="py-5">De bouchées délicates, des boissons innovantes, un service impeccable… Offrez-vous une soirée réussie.</p>
        </motion.div>
    )
}