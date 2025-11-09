import { motion, spring } from "motion/react"
import { useState } from "react"


const FlippingCard = () => {
const [isFliped, setIsFlipped] = useState(false)

  return (
    <motion.div variants={{
        front: {rotateY:0},
        back:{rotateY:180}
    }} initial="front" animate={isFliped?"back":"front"}
    transition={{duration:0.5, type:spring, stiffness:100}}
    className="perspective-1000 mt-5" onClick={()=> setIsFlipped(!isFliped)}>
        <motion.div className="w-64 h-40 bg-white rounded-lg shadow-lg overflow-hidden transform-stle-preserve-3d">
            <div className="absolute inset-0 text-xl flex items-center justify-center bg-white font-bold"> Front Side </div>
            <div className="absolute inset-0 text-xl flex items-center justify-center bg-blue-500 font-bold rotate-y-180"> Back Side </div>
        </motion.div>
    </motion.div>
  )
}

export default FlippingCard