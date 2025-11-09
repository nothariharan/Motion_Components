import { motion, useMotionValue, useTransform } from "motion/react"



const DraggableBox = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const backgroundColor = useTransform(x,[-100,100],['#FF0000','#00ff'])
  return (
    <motion.div drag dragConstraints={{
        left:-200,right:200,top:-200,bottom:200
    }} className="p-4 m-5 rounded w-32 h-32 shadow-lg flex items-center justify-center" style={{x,y,backgroundColor}}>
        <span className="text-white">Drag Me</span>

    </motion.div>
  )
}
export default DraggableBox