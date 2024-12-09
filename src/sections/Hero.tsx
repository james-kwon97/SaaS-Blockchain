import { CutCornerButton } from '../components/CutCornerButton';

export const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <p>Introducing Blockforge</p>
        <h1>The Future of Blockchain is here.</h1>
        <p>Blockforge is pioneering smart contract integrity with cutting-edge data solutions.</p>
        <CutCornerButton className="">Get Started</CutCornerButton>
        <img src="/assets/images/icosahedron.png" alt="Icosahedron 3D Image" />
      </div>
    </section>
  );
};
