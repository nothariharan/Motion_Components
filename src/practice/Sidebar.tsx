import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"


const Sidebar = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="flex">
        <button className="bg-blue-500 p-4 mb-4 text-white rounded"
        onClick={()=>setIsOpen(!isOpen)}>
            Toggle
        </button>
        <AnimatePresence>
        <motion.div className={`fixed left-0 top-0 h-full bg-gray-700 text-white p-4 ${isOpen?'':'-translate-x-full'}`}
        initial={{x:'-100%'}}
        animate={{x: isOpen?'0%':'-100%'}}
        transition={{duration:3}}>
            <h2 className="text-lg font-bold">
                Holy Moly Guaco Mole
            </h2>

        </motion.div>
        </AnimatePresence>
    </div>
  )
}
export default Sidebar