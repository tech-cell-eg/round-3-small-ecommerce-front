const EXPERINCES: { title: string; paragraph: string }[] = [
  {
    title: "Passsionate Craftsmanship",
    paragraph:
      "Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.",
  },
  {
    title: "Fashion Forward",
    paragraph:
      "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
  },
  {
    title: "Customer-Centric Approach",
    paragraph:
      "At Klothink, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
  },
  {
    title: "Global Inspiration",
    paragraph:
      "Influenced by global trends, we bring you a diverse and dynamic collection.",
  },
  {
    title: "Empowering Your Style",
    paragraph:
      "Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.",
  },
  {
    title: "Sustainable Practices",
    paragraph:
      "Klothink is committed to sustainability, integrating eco-friendly practices into our production process.",
  },
];

export const Experince = () => {
  return (
    <div className="responsive-padding mt-16">
      <div>
        <p className="small-text">ABOUT US</p>
        <h2 className="mt-1">THE KLOTHINK EXPERINCE.</h2>
      </div>
      <div>
        <p className="custom-paragraph">
          At Klothink, we breathe life into fashion, blending creativity with
          commitment. Our journey is fueled by a dedication to delivering
          unparalleled style and quality. Join us in redefining fashion and
          embracing a community where every purchase tells a story.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 bg-custom-white-97 rounded-2xl p-5">
        {EXPERINCES.map((item) => (
          <div key={item.title} className="flex flex-col gap-2.5">
            <div>
              <div className="size-[44px] bg-custom-yellow-50"></div>
              <p className="font-semibold text-xl text-custom-grey-10">
                {item.title}
              </p>
            </div>
            <p className="custom-paragraph">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
