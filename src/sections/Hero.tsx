import heroAvatar from "../assets/image.png";
const Hero = () => {
  return (
    <section id="Home" className="flex w-full justify-center px-5 lg:px-56">
      <div className="items-center gap-6 md:flex">
        <div className="bg-radial mt-10 flex h-[431px] w-[385px] items-center justify-center rounded-full pt-5">
          <img src={heroAvatar} alt="" />
        </div>
        <div className="font-kalam md:px-5">
          <h2 className="text-sm">A Designer who</h2>
          <h1 className="text-4xl">
            Judges a book<br></br>
            <span>
              by its <span className="text-text-1">cover</span>...
            </span>
          </h1>
          <h3 className="mt-1 text-xs">
            Because if the cover does not impress you what else can?
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
