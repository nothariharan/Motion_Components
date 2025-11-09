import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"


const FadeComponent = () => {

    const [visible,setVisibile] = useState(false)
  return (
    <div className="flex flex-col items-center">
        <button className="mb-4 p-2 bg-blue-400 text-white rounded"
        onClick={() => setVisibile(!visible)}>
            Toggle
        </button>
        <AnimatePresence>
        {visible && (
            <motion.div className="p-4 bg-gray-200 rounded text-black" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} >
                Fading Component
            </motion.div>
        )}
        </AnimatePresence >
    </div>
  )
}
export default FadeComponent