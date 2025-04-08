type ShippingInfoProps = {
  shippingDetails: string[];
};

const ShippingInfo = ({ shippingDetails }: ShippingInfoProps) => {
  return (
    <div className="space-y-2">
      {shippingDetails.map((detail, index) => (
        <div key={index} className="flex items-start gap-2">
          <span className="text-gray-500 ">•</span>
          <p className="text-sm text-gray-500 mt-1">{detail}</p>
        </div>
      ))}
    </div>
  );
};

export default ShippingInfo;
