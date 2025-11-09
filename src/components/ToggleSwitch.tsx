import { motion, spring } from "motion/react";
import { useState } from "react";

const ToggleSwitch = () => {
    const switchVariants = {
        off: {x:0},
        on:{x:70}
    }
    const [isOn,setIsOn] = useState(false)
  return (
    <div className="relative inline-block w-36 h-16">
        <div className={`w-full h-full rounded-full bg-gray-300 cursor-pointer 
            ${isOn ?'bg-green-500':''}`} onClick={()=>setIsOn(!isOn)}>

            <motion.div className="absolute top-1 left-1 w-14 h-14 rounded-full bg-white shadow"
            variants={switchVariants}
            animate={isOn?'on':'off'}
            transition={{type:spring,stiffness:100}}>

            </motion.div>


            </div>
    </div>
  )
}
export default ToggleSwitch