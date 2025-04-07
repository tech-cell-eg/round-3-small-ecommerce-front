export const ReviewCard = () => {
  return (
    <div className="bg-custom-white-99 rounded-2xl p-5">
      <div className="flex items-center gap-4">
        <div className="size-[50px] bg-custom-yellow-50 rounded-full"></div>
        <div>
          <p className="text-[16px] text-custom-grey-15">CUSTOMER NAME</p>
          <p>⭐⭐⭐⭐⭐</p>
        </div>
      </div>
      <p className="font-normal text-custom-grey-30 mt-4">
        Klothink exceeded my expectations. The gown's quality and design made me
        feel like a queen. Fast shipping, too!
      </p>
    </div>
  );
};
