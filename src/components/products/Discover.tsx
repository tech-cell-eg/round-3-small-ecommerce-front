const FEATURES: { title: string; paragraph: string }[] = [
  { title: "Exclusive Offers", paragraph: "30% off on select items" },
  { title: "New Arrivals", paragraph: "50+ new arrivals Daily" },
  { title: "Over 1,500 +", paragraph: "curated fashion products." },
];

export const Discover = () => {
  return (
    <div className="responsive-padding mt-16 ">
      {/* Top part */}
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-7">
        <div className="flex flex-col lg:max-w-[670px]">
          <div>
            <p className="small-text">Products</p>
            <h2 className="mt-5">DISCOVER NOW</h2>
          </div>
          <div>
            <p className="custom-paragraph mt-3">
              Dive into the world of fashion excellence at Klothink. Our curated
              selection brings together the latest trends and timeless classics,
              offering you a diverse array of clothing items that resonate with
              your unique style.
            </p>
          </div>
        </div>

        {/* features */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-4 p-5 border border-custom-white-95 rounded-[14px] lg:w-1/2">
          {FEATURES.map((item) => {
            return (
              <div key={item.title}>
                <p className="text-[16px] text-custom-grey-15">{item.title}</p>
                <p className="text-[14px] text-custom-grey-40">
                  {item.paragraph}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
