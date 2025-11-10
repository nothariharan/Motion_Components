import { motion } from "motion/react";
import { li } from "motion/react-client";
const items = ['Item 1','Item 2','Item 3','Item 4','Item 5',]
const variants = {
    hidden: {opacity:0},
    visible: {opacity:1}
}
const StaggeredList = () => {
  return (
    <motion.div initial = 'hidden' animate = 'visible' variants={{visible:{
        transition:{
            staggerChildren: 0.2
        }
    }}}>
        {items.map((item,index)=>(
          <motion.li key={index} className="bg-yellow-400 mb-3 p-5 w-12 h-12" variants={variants}>{item}</motion.li>
        ))}
    </motion.div>
  )
}
export default StaggeredList