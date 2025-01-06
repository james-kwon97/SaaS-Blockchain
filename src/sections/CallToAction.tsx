import { CutCornerButton } from "../components/CutCornerButton"
import {Hexagon} from "../components/Hexagon"
import {Circle} from "../components/Circle"

export const CallToAction = () => {
  return <section className="py-60 overflow-hidden">
    <div className="container">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hexagon className="size-[700px]"/>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hexagon className="size-[1100px]"/>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Circle className="absolute left-0 -top-[400px]">
            <img src="/assets/images/cuboid.png" className="size-[140px]"/>
          </Circle>
        </div>
        
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Ready to <span className="block"></span>get started?</h2>
        <p className="text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto">Start building using blockchain technology, with Blockforge.</p>
        <div className="flex justify-center mt-12">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
      </div>
    </div>
  </section>
}