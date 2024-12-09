import { CutCornerButton } from '../components/CutCornerButton';

export const HeroSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wide">
          Introducing Blockforge
        </p>
        <h1 className="font-heading font-black text-5xl text-center mt-4">
          The Future of Blockchain is here.
        </h1>
        <p className="text-center text-xl mt-6 text-zinc-400">
          Blockforge is pioneering smart contract integrity with cutting-edge data solutions.
        </p>
        <div className="flex justify-center mt-10">
          <CutCornerButton className="">Get Started</CutCornerButton>
        </div>
        <div className="inline-flex mt-24">
          <img src="/assets/images/icosahedron.png" alt="Icosahedron 3D Image" />
        </div>
      </div>
    </section>
  );
};
