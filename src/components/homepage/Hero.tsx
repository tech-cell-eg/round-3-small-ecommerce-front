import hero_img from "../../assets/hero-img.png";

const DATA = [
  { title: "OVER 1000+", subtitle: "Trendsetting Styles" },
  { title: "99%", subtitle: "Customer Satisfaction Rate" },
  { title: "24/7", subtitle: "Shopping Convenience" },
  { title: "30-DAY", subtitle: "Hassle-Free Returns" },
];

const Hero = () => {
  return (
    <div className="responsive-padding flex flex-col lg:flex-row justify-between items-start mt-16 gap-8 lg:gap-12 xl:gap-16">
      {/* Left side */}
      <div className="flex flex-col justify-center w-full max-w-[844px] lg:w-[52%] lg:h-[500px]">
        <div>
          <p className="small-text">STYLE REDEFINED.</p>
          <h2 className="">Elevate Your Style with Klothink</h2>
        </div>
        <div>
          <p className="custom-paragraph">
            Explore a world of fashion at Klothink, where trends meet
            affordability. Immerse yourself in the latest styles and seize
            exclusive promotions.
          </p>
          <div className="flex justify-between lg:justify-start gap-4 mt-6">
            <button className="bg-custom-yellow-50 rounded-4xl w-[165px] h-[50px] text-custom-grey-15">
              Shop Now
            </button>
            <button className="bg-custom-white-95 rounded-4xl w-[165px] h-[50px] text-sm text-custom-grey-15">
              Contact Us
            </button>
          </div>
          {/* Cards */}
        </div>
        <div className="bg-custom-white-97 grid grid-cols-2 gap-2.5 rounded-xl p-2 mt-10">
          {DATA.map((item) => (
            <div key={item.title} className="bg-white p-5">
              <p className="font-semibold text-xl text-custom-grey-10">
                {item.title}
              </p>
              <p className="text-custom-grey-40 text-sm w-32 mt-1">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right side image */}
      <div className="w-full max-w-[600px] lg:w-[48%] lg:h-[500px] ">
        <img src={hero_img} className="w-full h-full object-contain" alt="" />
      </div>
    </div>
  );
};

export default Hero;
