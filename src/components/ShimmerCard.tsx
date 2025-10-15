const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md animate-pulse">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-24 h-24 bg-gray-200 rounded-full" />
        <div className="w-full space-y-3">
          <div className="h-6 bg-gray-200 rounded-lg w-3/4 mx-auto" />
          <div className="h-4 bg-gray-200 rounded-lg w-1/2 mx-auto" />
          <div className="h-4 bg-gray-200 rounded-lg w-2/3 mx-auto" />
        </div>
        <div className="w-full pt-4">
          <div className="h-10 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
