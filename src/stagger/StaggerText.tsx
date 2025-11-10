import { motion } from "motion/react";
const text = "Hariharan"
const variants = {
    hidden:{opacity:0},
    visible:{opacity:1}
}
const StaggerText = () => {
  return (
    <motion.h1 className="text-4xl font-bold text-white" initial='hidden' animate='visible' variants={{ visible: { transition: { staggerChildren: 0.5}}}}>
        {text.split('').map((char,index)=>(
            <motion.span key={index} variants={variants}>
                {char}
            </motion.span>
        ))}
    </motion.h1>
  )
}
export default StaggerText