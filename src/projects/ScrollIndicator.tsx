import { motion, useScroll, useTransform } from "motion/react";

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll()
    const lineWidth = useTransform(scrollYProgress,[0,1],['0%','100%'])
  return (
    <div className="h-[250vh] p-[20px]">
        {/* red line */}
        <motion.div className="fixed top-0 left-0 h-[6px] bg-red-500" style={{ width: lineWidth, transition: 'width 0.1 ease'}}>
            <div className="mt-5">
                {[...Array(100)].map((_,i)=>(
                    <p key={i} className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatibus dolor facilis tempora repellat? Saepe rerum, similique mollitia neque temporibus molestiae voluptatum, optio aut magnam autem laudantium ducimus libero consequatur!</p>
                ))}
            </div>
        </motion.div>
    </div>
  )
}
export default ScrollIndicator