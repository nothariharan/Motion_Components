import { easeInOut, motion } from "motion/react"


const BouncingBall = () => {
  return (
    <motion.div className="bg-red-500 h-50 w-50 rounded-full" 
    animate={{y:[0,-100,0]}}
    transition={{repeat:Infinity, ease:easeInOut}}>

    </motion.div>
  )
}
export default BouncingBall