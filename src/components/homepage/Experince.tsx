import Star from "../../assets/icons/star.svg";
import FashionCircle from "../../assets/icons/fashion-circle.svg";
import Speaker from "../../assets/icons/speaker.svg";
import Pulb from "../../assets/icons/lightpulb.svg";
import Exp from "../../assets/icons/exp.svg";
import Sun from "../../assets/icons/Sun.svg";

const EXPERINCES: { title: string; paragraph: string; icon: string }[] = [
  {
    title: "Passsionate Craftsmanship",
    paragraph:
      "Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.",
    icon: Star,
  },
  {
    title: "Fashion Forward",
    paragraph:
      "We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.",
    icon: FashionCircle,
  },
  {
    title: "Customer-Centric Approach",
    paragraph:
      "At Klothink, our customers are at the heart of everything we do. Your satisfaction is our measure of success.",
    icon: Speaker,
  },
  {
    title: "Global Inspiration",
    paragraph:
      "Influenced by global trends, we bring you a diverse and dynamic collection.",
    icon: Pulb,
  },
  {
    title: "Empowering Your Style",
    paragraph:
      "Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.",
    icon: Exp,
  },
  {
    title: "Sustainable Practices",
    paragraph:
      "Klothink is committed to sustainability, integrating eco-friendly practices into our production process.",
    icon: Sun,
  },
];

export const Experince = () => {
  return (
    <div className="responsive-padding mt-16">
      <div>
        <p className="small-text">ABOUT US</p>
        <h2>THE KLOTHINK EXPERINCE.</h2>
      </div>
      <div>
        <p className="custom-paragraph w-full lg:w-[70%]">
          At Klothink, we breathe life into fashion, blending creativity with
          commitment. Our journey is fueled by a dedication to delivering
          unparalleled style and quality. Join us in redefining fashion and
          embracing a community where every purchase tells a story.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12 bg-custom-white-97 rounded-2xl p-5">
        {EXPERINCES.map((item) => (
          <div
            key={item.title}
            className="flex flex-col bg-custom-white-99 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4">
              <div className="size-[44px] bg-custom-yellow-50 rounded-full flex items-center justify-center">
                <img src={item.icon} alt={item.title} />
              </div>
              <p className="font-semibold text-[16px] text-custom-grey-15">
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
