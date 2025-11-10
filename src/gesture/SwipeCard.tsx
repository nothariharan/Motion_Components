import { motion } from "motion/react";
import { useState } from "react";

const SwipeCard = () => {
    const [isRemoved,setIsRemoved] = useState(false)
    const handleSwipe = (_:any,info:any) => {
        if(info.offset.x>100){
            setIsRemoved(true)
        } else if (info.offset.x<-100){
            setIsRemoved(true)
        }
    }
  return (
    <motion.div className={`w-64 h-32 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center text-white ${isRemoved ? 'hidden' : ''}`}
    onDragEnd={handleSwipe} drag='x'>
        Swipe Me Gang
    </motion.div>
  )
}
export default SwipeCard