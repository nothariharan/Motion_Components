import { motion } from "motion/react"
import { useState } from "react";



const Notification = () => {
    const [visible,setVisible] = useState(false)
    const showNotif = () => {
        setVisible(true);
        setTimeout(() => setVisible(true),3000)
    }


  return (
    <div className="flex items-center flex-col">
        <button className="mb-4 p-4 bg-blue-500 text-white rounded"
        onClick={showNotif}>
            Show Notification
        </button>

        {visible && (
            <motion.div className="fixed top-4 right-4 p-4 bg-green-500 text-black rounded"
            initial={{opacity:0,y:-20}}
            animate={{opacity:1,y:0}}
            transition={{duration:1}}>
                    Free Money
            </motion.div>
        )}

    </div>
  )
}
export default Notification