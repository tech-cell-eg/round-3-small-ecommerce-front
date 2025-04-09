import { ChevronRight, MapPin, Phone } from "lucide-react";

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

  return (
    <div className="responsive-padding ">
      <main className="max-w-7xl mx-auto px-4 py-12 md:px-8">
        {/* Support Header Section - Mobile Friendly */}
        <div className="md:mb-16 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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

        {/* Office Locations - Redesigned for Mobile */}
        <div className="mb-8 md:mb-16">
          <div className="tex-sm md:text-3xl font-bold">
            <h2 className="text-lg md:text-xl font-semibold mb-6 md:mb-10">
              Office Locations
            </h2>
          </div>

          <div className="space-y-4 md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-gray-50 p-4 md:p-6 rounded-md">
                <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                  {office.city}
                </h3>
                <span className="text-gray-600  text-xs md:text-sm mb-4 md:mb-6">
                  {office.address}
                </span>

                <div className="flex gap-2 md:gap-4 mt-5">
                  <button className="p-4 flex justify-between bg-gray-100  border-black text-black rounded-full text-xs md:text-sm hover:bg-gray-800">
                    <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />{" "}
                    Call Now
                  </button>
                  <button className="p-4 flex justify-between bg-black text-white hover:bg-gray-100 rounded-full text-xs md:text-sm">
                    <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />{" "}
                    Get Direction
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Return Policy - Mobile Optimized */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-1 p-6 rounded-xl border-gray-200 pt-4 md:pt-8">
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

          {/* <Button
            variant="ghost"
            size="sm"
            className="text-black hover:bg-transparent hover:text-brand-yellow text-xs md:text-sm flex md:hidden mt-4"
          >
            Read Return Policy{" "}
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
          </Button> */}
        </div>

        {/* Cancellation Policy - Mobile Optimized */}
        <div className="mb-8 md:mb-16">
          <div className="flex justify-between items-center mb-4 md:mb-8">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                CANCELLATION POLICY
                <span className="text-gray-400 uppercase text-sm  ">
                  FLEXIBLE ORDERING EXPERIENCE
                </span>
              </h2>
            </div>

            <button className="text-black hover:bg-transparent bg-[#F7F7F8] p-4 rounded-3xl hover:text-brand-yellow text-xs md:text-sm hidden md:flex">
              Read Cancellation Policy{" "}
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
            </button>
          </div>

          <p className="text-gray-700 mb-6 md:mb-10 max-w-3xl text-sm">
            Find all the details if you need to cancel an order or make changes
            to your order after it's placed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-1 p-6 rounded-xl border-gray-200">
            {cancellationPolicyItems.map((item, index) => (
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

          {/* <Button
            variant="ghost"
            size="sm"
            className="text-black hover:bg-transparent hover:text-brand-yellow text-xs md:text-sm flex md:hidden mt-4"
          >
            Read Cancellation Policy{" "}
            <ChevronRight className="h-3 w-3 md:h-4 md:w-4 ml-1" />
          </Button> */}
        </div>

        {/* FAQ Section - Optimized for Mobile */}
        <div className="mb-12 md:mb-20">
          <div className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-2xl font-semibold">
              QUESTIONS? WE HAVE ANSWERS.
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-1">FAQ</p>
          </div>

          <p className="text-gray-700 mb-6 md:mb-10 max-w-3xl text-sm">
            Ease into the world of Klothink with clarity. Our FAQs cover a range
            of topics, ensuring you have all the information you need for a
            seamless shopping experience.
          </p>

          {/* Desktop Tabs and Accordion */}
          {/* <div className="hidden md:block">
            <Tabs defaultValue="all" className="w-full mb-10">
              <TabsList className="border-b w-full flex space-x-8 px-0 bg-transparent h-auto mb-8">
                <TabsTrigger
                  value="all"
                  className="text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none bg-transparent px-1 py-2"
                >
                  ALL
                </TabsTrigger>
                <TabsTrigger
                  value="ordering"
                  className="text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none bg-transparent px-1 py-2"
                >
                  ORDERING
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none bg-transparent px-1 py-2"
                >
                  SHIPPING
                </TabsTrigger>
                <TabsTrigger
                  value="returns"
                  className="text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none bg-transparent px-1 py-2"
                >
                  RETURNS
                </TabsTrigger>
                <TabsTrigger
                  value="support"
                  className="text-gray-500 hover:text-black data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black rounded-none bg-transparent px-1 py-2"
                >
                  CUSTOMER SUPPORT
                </TabsTrigger>
              </TabsList>

         
            
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default SupportPage;
