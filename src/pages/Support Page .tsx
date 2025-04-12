import { ChevronRight, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { Panel } from "primereact/panel";

const panelContent = [
  {
    header: "Does the jacket come in different colors?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Are there any inside pockets in the jacket?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "Can I machine wash the denim jacket?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    header: "How do I style the jacket for different occasions?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const SupportPage = () => {
  const officeLocations = [
    {
      city: "New York City, USA",
      address: "774 Fashion Avenue, 5-th Floor, New York",
    },
    {
      city: "Paris, France",
      address: "789-Rue de la Mode, 2nd Floor",
    },
    {
      city: "Tokyo, Japan",
      address: "Azabu-Juban Fashion Center Shibuya-ku",
    },
  ];

  const returnPolicyItems = [
    {
      title: "Eligibility",
      description:
        "Items must be unused, with original tags attached, and returned within 14 days of delivery.",
    },
    {
      title: "Process",
      description:
        "Initiate your return through our Return Center for a smooth and hassle-free process.",
    },
    {
      title: "Refund",
      description:
        "Expect your refund to be processed within 7-10 business days after your return is received.",
    },
  ];

  const cancellationPolicyItems = [
    {
      title: "Cancellation Window",
      description:
        "Orders can be canceled within 24 hours of placement, if not yet shipped.",
    },
    {
      title: "Cancellation Process",
      description:
        'Visit the "Order Management" section to cancel your order effortlessly.',
    },
    {
      title: "Refund Timeline",
      description:
        "Refunds for canceled orders are processed within 5-7 business days.",
    },
  ];

  const tabs = [
    { value: "all", label: "ALL" },
    { value: "ordering", label: "ORDERING" },
    { value: "shipping", label: "SHIPPING" },
    { value: "returns", label: "RETURNS" },
    { value: "support", label: "CUSTOMER SUPPORT" },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const columns = [0, 1, 2];

  return (
    <div className="responsive-padding ">
      <main className="max-w-7xl mx-auto px-4 py-12 md:px-8 ">
        {/* Support Header Section  */}
        <div className="md:mb-16 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="text-2xl md:text-3xl font-bold">
              KLOTHINK SUPPORT{" "}
              <span className="text-gray-400 uppercase text-sm">
                YOUR FASHION ALLY
              </span>
              <p className="text-gray-400 max-w-full md:max-w-3xl text-sm md:text-base mt-5">
                24/7 Available to Handle Your Shopping, Style, and Klothink
                Questions. Our Support is Always Just a Click or Call Away.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border p-6 border-gray-200 rounded-xl pt-4 md:pt-8">
              <div>
                <h3 className="font-medium mb-1 text-sm text-gray-400">
                  Email
                </h3>
                <a
                  href="mailto:support@klothink.com"
                  className="text-gray-700 hover:text-brand-yellow text-sm"
                >
                  support@klothink.com
                </a>
              </div>
              <div>
                <h3 className="font-medium mb-1 text-sm text-gray-400">
                  Call Us On
                </h3>
                <a
                  href="tel:+1(555)123-4567"
                  className="text-gray-700 hover:text-brand-yellow text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <h3 className="font-medium mb-1 text-sm text-gray-400">
                  Working Hours
                </h3>
                <p className="text-gray-700 text-sm">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations  */}
        <div className="mb-8 lg:mb-20">
          <div className="md:text-3xl font-bold">
            <h2 className="text-base md:text-xl font-semibold mb-4 md:mb-10 inline-block px-3 py-1 rounded">
              Office Locations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <div
                key={index}
                className="bg-gray-50 p-5 lg:p-6 rounded-xl flex flex-col justify-between h-full shadow-sm"
              >
                <div>
                  <h3 className="font-semibold mb-2 text-base lg:text-lg">
                    {office.city}
                  </h3>
                  <span className="block text-gray-600 text-sm lg:text-base mb-6">
                    {office.address}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="flex-1 min-w-[130px] px-4 py-2 flex items-center justify-center bg-gray-100 border border-black text-black rounded-full text-sm hover:bg-gray-800 hover:text-white transition">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </button>
                  <button className="flex-1 min-w-[130px] px-4 py-2 flex items-center justify-center bg-black text-white hover:bg-gray-100 hover:text-black border border-black rounded-full text-sm transition">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Direction
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Return Policy  */}
        <div className="mb-8 md:mb-16">
          <div className="flex justify-between items-center mb-4 md:mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                RETURN POLICY{" "}
                <span className="text-gray-400 uppercase text-sm  ">
                  EASY RETURNS AT KLOTHINK
                </span>
              </h2>
            </div>
            <button className="text-black hover:bg-transparent bg-[#F7F7F8] p-4 rounded-3xl hover:text-brand-yellow text-xs md:text-sm hidden md:flex">
              Read Return Policy{" "}
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
            </button>
          </div>

          <p className="text-gray-700 mb-6 md:mb-10 max-w-3xl text-sm">
            Explore our hassle-free return policy designed to ensure your
            satisfaction with every purchase.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-1 p-10  rounded-xl border-gray-200 pt-4 md:pt-8">
            {returnPolicyItems.map((item, index) => (
              <div key={index} className="mb-4 md:mb-0">
                <h3 className="font-semibold mb-2 md:mb-3 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cancellation Policy  */}
        <div className="mb-8 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-8 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                CANCELLATION POLICY
              </h2>
              <span className="text-gray-400 uppercase text-sm block">
                FLEXIBLE ORDERING EXPERIENCE
              </span>
            </div>

            <button className="text-black hover:bg-transparent bg-[#F7F7F8] px-4 py-2 rounded-3xl hover:text-brand-yellow text-xs md:text-sm w-fit hidden md:flex items-center">
              Read Cancellation Policy
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
            </button>
          </div>

          <p className="text-gray-700 mb-6 md:mb-10 max-w-3xl text-sm">
            Find all the details if you need to cancel an order or make changes
            to your order after it's placed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-6 rounded-xl border border-gray-200">
            {cancellationPolicyItems.map((item, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-2 md:mb-3 text-sm">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <button className="text-black hover:bg-transparent hover:text-brand-yellow text-xs md:text-sm flex md:hidden items-center mt-4 px-4 py-2 bg-[#F7F7F8] rounded-3xl w-fit">
            Read Cancellation Policy
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
          </button>
        </div>

        {/* FAQ Section  */}
        <div className="mb-12 md:mb-20">
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold">
              QUESTIONS? WE HAVE ANSWERS{" "}
              <span className="text-gray-300 text-xl">FAQ</span>
            </h2>
          </div>

          <p className="text-gray-700 mb-6 md:mb-10 max-w-3xl text-sm">
            Ease into the world of Klothink with clarity. Our FAQs cover a range
            of topics, ensuring you have all the information you need for a
            seamless shopping experience.
          </p>

          {/* Desktop Tabs and Accordion */}

          <div className="w-full hidden md:block mb-10 ">
            <div className="flex border-b border-t border-gray-200 py-4 space-x-8 mb-8 ">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-1 py-2 text-sm font-medium transition border-b-1  cursor-pointer ${
                    activeTab === tab.value
                      ? "text-black border-black"
                      : "text-gray-500 border-transparent hover:text-black"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-2 text-sm text-gray-700">
              {activeTab === "all" && <p>All content here</p>}
              {activeTab === "ordering" && <p>Ordering content</p>}
              {activeTab === "shipping" && <p>Shipping info</p>}
              {activeTab === "returns" && <p>Returns policy</p>}
              {activeTab === "support" && <p>Customer support help</p>}
            </div>
          </div>
          <div className="py-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {columns.map((col) => (
                <div key={col} className="space-y-4">
                  {panelContent.map((panel, index) => (
                    <Panel
                      key={index}
                      header={panel.header}
                      toggleable
                      collapsed
                    >
                      <p className="m-0">{panel.content}</p>
                    </Panel>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SupportPage;
