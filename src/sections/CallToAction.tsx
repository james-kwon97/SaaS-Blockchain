import { CutCornerButton } from "../components/CutCornerButton"

export const CallToAction = () => {
  return <section className="py-60">
    <div className="container">
      <h2 className="font-heading font-black text-4xl text-center">Ready to <span className="block"></span>get started?</h2>
      <p className="text-xl text-zinc-400 text-center mt-8">Start building using blockchain technology, with Blockforge.</p>
      <div className="flex justify-center mt-12">
        <CutCornerButton>Get Started</CutCornerButton>
      </div>
    </div>
  </section>
}