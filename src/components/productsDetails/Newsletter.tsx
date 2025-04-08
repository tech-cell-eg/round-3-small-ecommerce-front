import { ArrowRight } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="w-full py-2 px-4 md:px-8 bg-gray-50 text-xs flex items-center justify-center text-gray-700">
      <p>Subscribe to our Newsletter For Latest Collections</p>
      <ArrowRight className="w-4 h-4 ml-2" />
    </div>
  );
};

export default Newsletter;
