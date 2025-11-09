import { motion, spring } from "motion/react"

const AnimatedCard = () => {
  return (
    <motion.div 
    initial = {{scale:1,rotate:0}}
    whileHover={{scale:1.5,rotate:3}}
    whileTap={{scale:0.8}}
    drag
    transition={{type:spring,stiffness:100}}
    
    
    className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer">
      <img src="https://images.unsplash.com/photo-1741851374540-c64860d3bcb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070" alt="" 
      className="w-full h-48 object-cover"
      />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2 text-black">Japan</h2>
      <p className="text-gray-800">holy hell</p>
      <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 mt-4">Get Me There</button>
    </div>
    </motion.div>
  )
}
export default AnimatedCard