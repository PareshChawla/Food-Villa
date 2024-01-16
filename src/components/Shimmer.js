const Shimmer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-wrap md:flex-row items-center justify-center mt-6 animate-pulse">
        <div className="m-5 w-6/12 md:w-[163px] bg-slate-200 rounded-lg h-6"></div>
        <div className="m-5 h-7 w-14 md:py-1 px-2 rounded-lg bg-slate-200"></div>
      </div>
      <div className="flex justify-center lg:justify-start flex-wrap animate-pulse">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div
              className="w-40 min-h-80 inline-block bg-slate-200 md:min-h-96 md:w-80 m-3 p-2.5 rounded-2xl"
              key={index}
            ></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
