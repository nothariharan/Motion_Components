import { motion } from "motion/react"


const ScrollCard = () => {
  return (
    <div className="flex justify-center items-start mt-120">
        <div className="h-[200vh] w-fulll flex justify-center items-center">
            <motion.div 
            initial={{scale:0.5,opacity:0}}
            whileInView={{
                scale:2,
                opacity:1,
                y:-200
            }}
            transition={{duration:0.5}}
            className="bg-white rounded-lh p-6 shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-2 text-black">
                    PEEKABOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
                </h2>
                <p className="text-gray-900">hehehehehehhehehehhehehehheheh</p>

            </motion.div>

        </div>
    </div>
  )
}
export default ScrollCard