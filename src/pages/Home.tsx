import { CustomersReview } from "../components/homepage/CustomersReview";
import { DiscoverFashion } from "../components/homepage/DiscoverFashion";
import { Experince } from "../components/homepage/Experince";
import Hero from "../components/homepage/Hero";
import { HowItWorks } from "../components/homepage/HowItWorks";
import { Questions } from "../components/homepage/Questions";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <DiscoverFashion />
      <Experince />
      <CustomersReview />
      <Questions />
      <HowItWorks />
    </div>
  );
};
