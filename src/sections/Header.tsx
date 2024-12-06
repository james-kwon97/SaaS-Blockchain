export const HeaderSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between">
          <div>
            <img src="/assets/images/logo.svg" alt="Blockforge logo" />
          </div>
          <div>
            <div className="size-10 relative">
              <div className="absolute">
                <div className="w-5 h-0.5 bg-zinc-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
