const listItems = [
  'Experience unparalleled security and scalability',
  'Fully benefit from scalable network effects',
  'Unlock the potential of decentralised networks',
];

export const FeaturesGrid = () => {
  return (
    <section>
      <div className="container">
        <h2>Empowering the future of blockchain.</h2>
        <p>
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
      </div>
    </section>
  );
};
