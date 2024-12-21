import { CutCornerButton } from '../components/CutCornerButton';
import { TextButton } from '../components/TextButton';

const listItems = [
  'Experience unparalleled security and scalability',
  'Fully benefit from scalable network effects',
  'Unlock the potential of decentralised networks',
];

export const FeaturesGrid = () => {
  return (
    <section py-24>
      <div className="container">
        <div>
          <h2 className="font-heading font-black text-4xl">Empowering the future of blockchain.</h2>
          <p className="text-xl text-zinc-400 mt-8">
            Blockforge provides robust and secure infrastructure to support the next generation of
            decentralised applications.
          </p>
          <ul>
            {listItems.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <CutCornerButton>Get Started</CutCornerButton>
            <TextButton>Learn More</TextButton>
          </div>
        </div>
      </div>
    </section>
  );
};
