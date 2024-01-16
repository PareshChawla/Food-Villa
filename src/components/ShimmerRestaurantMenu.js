const ShimmerRestaurantMenu = () => {
  return (
    <>
      <div className="min-h-screen my-4 flex flex-col items-center animate-pulse">
        <div className="m-5 w-40 bg-slate-200 rounded-lg h-6"></div>
        <div className="w-60 bg-slate-200 rounded-lg h-3"></div>
        <div className="w-full md:m-0 md:w-6/12">
          {Array(20)
            .fill("")
            .map((e, index) => (
              <div className=" h-10 bg-slate-200 m-3 md:m-0 md:my-4 justify-between p-2"></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ShimmerRestaurantMenu;
