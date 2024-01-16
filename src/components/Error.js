import ErrorImg from "../assets/img/11104.jpg";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div className="flex flex-col text-center text-red-500">
        <h1 className="text-4xl mt-8 mb-6">Oops!!!</h1>
        <h2 className="text-2xl ">{err.status + " : " + err.statusText}</h2>
        <img
          src={ErrorImg}
          loading="lazy"
          className="h-2/4 w-2/4 ml-[25%]"
          alt="errorImage"
        />
      </div>
    </>
  );
};

export default Error;
