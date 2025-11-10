import { motion } from "motion/react";
import { useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const sidevariants = {
    open: { x: 0, opacity: 1, scale: 1 },
    closed: { x: "-100%", opacity: 0, scale: 0.8 },
  };
  const cotainvariants = {
    open: {
      transition: {
        staggerChildren:0.2,
        delayChildren:0.1
      }
    },
    closed: {
      transition: {
        staggerChildren:0.2,
        delayChildren:0
      }
    }
  }
  const itemvariants = {
    open: {
      opacity:1,y:0,scale:1
    },
    closed: {
      opacity:0,y:-30,scale:0.5
    }
  }
  const backvariants = {
    open: {
      opacity:0.6
    },
    closed: {
      opacity:0
    }
  }
  return (
    <div className="relative">
      {/* Backdrop */}
      <motion.div className="fixed inset-0 bg-gray-800" variants={backvariants} initial="closed" animate={ isOpen ? 'open' : 'closed'}/>
      {/* Sidebar */}
      <motion.div
        variants={sidevariants}
        initial="closed" 
        animate={isOpen ? "open" : "closed"}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg text-white" 
      >
        <div className="p-4">
          <button onClick={() => setIsOpen(!isOpen)}
            className="absolute top-4 right-4 z-10 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
          >
            <IoMdArrowBack className="h-6 w-6" />
          </button>
          <h2 className="text-2xl mb-4 font-bold ">
            Filters
            
          </h2>
          <motion.div variants={cotainvariants} initial="closed" className="space-y-4" animate={ isOpen ? 'open' : 'closed'}>
              <motion.div variants={itemvariants}>
                  <h3 className="text-xl font-semibold">Categories</h3>
                  <ul>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-3">Option 1</span>
                      </label>
                    </li>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-3">Option 2</span>
                      </label>
                    </li>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-3">Option 3</span>
                      </label>
                    </li>
                  </ul>
              </motion.div>


              <motion.div variants={itemvariants}>
                <h3 className="text-xl font-semibold">Price Range</h3>
                <input type="range" min='0' max='1000' className="w-full" step={10}/>
              </motion.div>


              <motion.div variants={itemvariants}>
                 <h3 className="text-xl font-semibold">Ratings</h3>
                  <ul>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="radio"  name="rating" value='1'/>
                      <span className="ml-3">1 Star</span>
                      </label>
                    </li>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="radio"  name="rating" value='1'/>
                      <span className="ml-3">2 Star</span>
                      </label>
                    </li>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="radio"  name="rating" value='1'/>
                      <span className="ml-3">3 Star</span>
                      </label>
                    </li>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="radio"  name="rating" value='1'/>
                      <span className="ml-3">4 Star</span>
                      </label>
                    </li>
                    <li><label className="inline-flex items-center mt-2">
                      <input type="radio"  name="rating" value='1'/>
                      <span className="ml-3">5 Star</span>
                      </label>
                    </li>
                  </ul>
              </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <button onClick={() => setIsOpen(!isOpen)}  className="absolute top-4 left-4 z-10 bg-gray-800 p-2 text-white rounded-full focus:outline-none">
        { isOpen ? (
          <IoMdArrowBack className="h-7 w-8" />
        ): (
          <IoMdArrowForward className="h-7 w-8" />
        )}
      </button>
    </div>
  );
};
export default Sidebar;