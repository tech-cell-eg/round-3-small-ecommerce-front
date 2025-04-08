const CARDS = [
  {
    id: 1,
    num: "01",
    title: "Discover",
    paragraph: "Explore our curated collection of over 1000 styles",
  },
  {
    id: 2,
    num: "02",
    title: "Secure Checkout",
    paragraph: "Add your items to the cart and proceed to our secure checkout.",
  },
  {
    id: 3,
    num: "03",
    title: "Swift Dispatch",
    paragraph: "Experience 95% same-day dispatch on orders.",
  },
  {
    id: 4,
    num: "04",
    title: "Unbox Happiness",
    paragraph: "Receive your carefully packaged Klothink order.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="responsive-padding mt-16">
      <div className="flex flex-col">
        <div>
          <p className="small-text">How it Works ?</p>
          <h2 className="mt-5">Seamless Experience.</h2>
        </div>
        <div>
          <p className="custom-paragraph mt-3">
            At Klothink, we've designed a straightforward shopping experience to
            make fashion accessible. Explore the journey from discovering the
            latest trends to receiving your handpicked styles with ease.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-custom-white-97 rounded-2xl p-4 gap-2.5 md:gap-4 mt-10">
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="p-6 flex flex-row md:flex-col gap-5 items-center md:items-start bg-white rounded-2xl"
          >
            <p className="text-custom-white-90 text-5xl">{card.num}</p>
            <div className="flex flex-col">
              <h3 className="text-[16px] text-custom-grey-20 font-semibold leading-[150%]">
                {card.title}
              </h3>
              <p className="text-[14px] text-custom-grey-40">
                {card.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
