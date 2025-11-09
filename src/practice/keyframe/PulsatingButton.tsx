import { motion } from "motion/react";
const PulsatingButton = () => {
  return (
    <motion.button className="p-4 bg-green-500 text-white rounded"
    animate={{scale:[1,1.3,1]}}
    transition={{
        duration:1,
        repeat:Infinity,
        repeatType:'loop',
        ease:'easeInOut'
    }}>
        HOLYYY
    </motion.button>
  )
}
export default PulsatingButton