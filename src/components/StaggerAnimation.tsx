import { motion } from "motion/react"
import { div } from "motion/react-client"

const parentVariant = {
    hidden: {opacity:0},
    visible:{opacity:1,
        transition:{
            staggerChildren: 0.8
        }
    }
}
const childVariant = {
    hidden: {opacity:0,y:20},
    visible:{opacity:1,y:0}
}
const StaggerAnimation = () => {
  return (
    <motion.div variants={parentVariant} initial='hidden' animate='visible'>
        {[...Array(5)].map((_,index)=>(
            <motion.div className="box mt-4" key={index} variants={childVariant} />
        ))}
    </motion.div>
  )
}
export default StaggerAnimation