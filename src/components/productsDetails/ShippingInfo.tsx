type ShippingInfoProps = {
  shippingDetails: string;
};

const ShippingInfo = ({ shippingDetails }: ShippingInfoProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <span className="text-gray-500 ">•</span>
        <p className="text-sm text-gray-500 mt-1">{shippingDetails}</p>
      </div>
    </div>
  );
};

export default ShippingInfo;
