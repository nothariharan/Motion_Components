import { motion } from "motion/react"
import PulsingButton from "./components/PulsingButton"
import BouncingLoader from "./components/BouncingLoader"
import FlippingCard from "./components/FlippingCard"
import AnimatedCard from "./components/AnimatedCard"
import ImageGallery from "./components/ImageGallery"
import AnimatedShape from "./components/AnimatedShape"
import StaggerAnimation from "./components/StaggerAnimation"
import AnimatedGallery from "./components/AnimatedGallery"
import RangeSlider from "./components/RangeSlider"
import DraggableBox from "./components/DraggableBox"
import ScrollCard from "./components/ScrollCard"
import ScrollAnimation from "./components/ScrollAnimation"
import BouncingCircle from "./components/BouncingCircle"
import FadeComponent from "./practice/FadeComponent"
import Sidebar from "./projects/Sidebar"
import Modal from "./practice/Modal"
import Accordion from "./practice/Accordion"
import Notification from "./practice/Notification"
import BouncingBall from "./practice/keyframe/BouncingBall"
import PulsatingButton from "./practice/keyframe/PulsatingButton"
import ZigZag from "./practice/keyframe/ZigZag"
import ToggleSwitch from "./components/ToggleSwitch"
import SwipeCard from "./gesture/SwipeCard"
import Gallery from "./gesture/Gallery"
import StaggeredList from "./stagger/StaggeredList"
import StaggerGrid from "./stagger/StaggerGrid"
import StaggerText from "./stagger/StaggerText"
import ScrollIndicator from "./projects/ScrollIndicator"
import Loader from "./projects/Loader"
import Carousel from "./projects/Carousel"
import StickyNav from "./projects/StickyNav"
import ProgressSteps from "./projects/ProgressSteps"
const App = () => {
  return (
    <div>
      {/* <PulsingButton />
      <BouncingLoader /> */}
      {/* <FlippingCard /> */}
      {/* <AnimatedCard /> */}
      {/* <ImageGallery /> */}
      {/* <AnimatedShape /> */}
      {/* <StaggerAnimation/> */}
      {/* <AnimatedGallery/> */}
      {/* <RangeSlider /> */}
      {/* <DraggableBox /> */}
      {/* <h1 className="text-center text-4xl mb-4">
        Scroll Down HEHEHHEHEEH
      </h1>
      <div className="h-screen"></div>
      <ScrollCard /> */}
      {/* <ScrollAnimation /> */}
      {/* <BouncingCircle /> */}


      {/* <FadeComponent /> */}
      {/* <Sidebar /> */}
      {/* <Modal /> */}
      {/* <Accordion /> */}
      {/* <Notification /> */}



      {/* <BouncingBall /> */}
      {/* <PulsatingButton/> */}
      {/* <ZigZag /> */}

      {/* <ToggleSwitch/> */}
        {/* <div className="h-screen flex justify-center items-center bg-[#0d1017] text-white">
          <SwipeCard/>
        </div> */}
        {/* <Gallery/> */}

        {/* <div className="h-screen flex justify-center items-center bg-[#0d1017] text-white">
        <StaggeredList/>
          </div> */}
          {/* <StaggerGrid/> */}
          {/* <StaggerText/> */}






          {/* ------PROJECTS------- */}
          {/* <ScrollIndicator /> */}
          {/* <Loader /> */}
          {/* <div className="flex justify-center items-center h-screen">
              <Carousel />
          </div> */}
          {/* <div className="flex justify-center items-center h-screen w-full">
            <Sidebar />
          </div> */}
          {/* <StickyNav /> */}
          <ProgressSteps />
    </div>
  )
}

export default App