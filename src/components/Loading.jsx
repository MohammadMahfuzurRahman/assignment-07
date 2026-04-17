import { Link } from "react-router-dom";

const NoDataFound = () => {
    return (
<div className="flex flex-col items-center justify-center min-h-[calc(100vh-386px)]">
      <h1 className="text-6xl font-bold text-red-600">Data not found</h1>

      <Link to="/" 
      className=" 
      mt-6 px-6 py-3 bg-clr-primary rounded shadow hover:bg-clr-secondary text-black">
        Go Back Home
      </Link>

    </div>
    );
};

export default NoDataFound;