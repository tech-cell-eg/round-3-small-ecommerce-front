import Logo from "../assets/icons/Logo.png";
import FacebookButton from "../assets/icons/facebook-button.png";
import TwitterButton from "../assets/icons/twitter-button.png";
import LinkedInButton from "../assets/icons/linkedin-button.png";

const FOOTER_LINKS = [
  {
    title: "Home",
    links: [
      { title: "Features", url: "#" },
      { title: "Popular Products", url: "#" },
      { title: "Testimonials", url: "#" },
      { title: "FAQ", url: "#" },
    ],
  },
  {
    title: "Menswear",
    links: [
      { title: "Casual", url: "#" },
      { title: "Formal", url: "#" },
      { title: "Party", url: "#" },
      { title: "Business", url: "#" },
    ],
  },
  {
    title: "Womenswear",
    links: [
      { title: "Casual", url: "#" },
      { title: "Formal", url: "#" },
      { title: "Party", url: "#" },
      { title: "Business", url: "#" },
    ],
  },
  {
    title: "Kidswear",
    links: [
      { title: "Casual", url: "#" },
      { title: "Formal", url: "#" },
      { title: "Party", url: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <>
      <footer className="hidden md:flex border-t border-gray-200 px-5 md:px-20 lg:px-40 border-b">
        <div className="flex w-full">
          {/* Left section */}
          <div className="flex flex-col pr-20 border-r border-gray-200 py-[80px]">
            <div className="logo pb-12">
              <img src={Logo} alt="" />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-[#F1F1F3] h-[60px] w-[320px] rounded-[32px] p-7 text-[#98989A] text-lg"
              />
              <button className="bg-[#FFD500] h-[60px] w-[150px] rounded-[32px] text-lg ml-2">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex flex-1 flex-wrap justify-between pl-20 py-[80px]">
            {FOOTER_LINKS.map((link) => (
              <div key={link.title}>
                <p className="font-medium text-xl mb-9">{link.title}</p>
                {link.links.map((item) => (
                  <a
                    key={item.title}
                    className="text-lg text-[#656567] mb-4 block"
                    href={item.url}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
      {/* Conidtions and footer bottom */}
      <div className="hidden md:flex justify-between px-5 md:px-20 lg:px-40 py-5">
        <div className="flex gap-5">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="flex gap-5">
          <img src={FacebookButton} alt="" />
          <img src={TwitterButton} alt="" />
          <img src={LinkedInButton} alt="" />
        </div>
        <p className="text-[#656567] text-lg">
          © 2024 Klothink. All rights reserved.
        </p>
      </div>
      <FooterMobile />
    </>
  );
};

function FooterMobile() {
  return (
    <div className="flex flex-col gap-5 md:hidden px-3 py-6">
      {/* Logo and socials */}
      <div className="flex flex-1 justify-between">
        <div className="size-[50px]">
          <img src={Logo} alt="" />
        </div>
        <div className="flex *:size-[36px] gap-4">
          <img src={FacebookButton} alt="" />
          <img src={TwitterButton} alt="" />
          <img src={LinkedInButton} alt="" />
        </div>
      </div>
      {/* Input and subscribe */}
      <div className="flex justify-between">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="bg-[#F1F1F3] h-[50px] w-[230px] rounded-[32px] p-7 text-[#98989A] text-[14px]"
        />
        <button className="bg-[#FFD500] h-[50px] w-[116px] rounded-[32px] text-[14px]">
          Subscribe
        </button>
      </div>

      {/* Links */}
      <div className="flex gap-6 justify-center border-t border-gray-200 pt-6">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/Contact">Contact</a>
      </div>

      {/* Privacy */}
      <div className="flex flex-col gap-3 text-center">
        <p className="text-[#98989A]">Privacy Policy</p>
        <p className="text-[#98989A]">Terms & Conditions</p>
        <p className="text-[#656567] text-lg">
          © 2024 Klothink. All rights reserved.
        </p>
      </div>
    </div>
  );
}
