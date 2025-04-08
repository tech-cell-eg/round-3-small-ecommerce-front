type FeaturesListProps = {
  features: string[];
};

const FeaturesList = ({ features }: FeaturesListProps) => {
  return (
    <div className="space-y-2">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="text-gray-500 font-bold ">•</span>
          <p className="text-sm text-gray-500 mt-1">{feature}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
