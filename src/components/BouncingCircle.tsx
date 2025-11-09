import { easeInOut, motion } from "motion/react";

const BouncingCircle = () => {
  return (
    <motion.div className="bg-red-500 h-20 w-20"
    animate={{rotate:360,x:[-300,300],y:[300,-300]}}
    transition={{duration:2,repeat:Infinity,ease:easeInOut}}>

    </motion.div>
  )
}
export default BouncingCircle