import { useNavigate } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfound.png";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404, Oops
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 - Page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <button
            onClick={() => navigate("/")}
            className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2 mr-2 mb-2.5 font-medium hover:bg-gradient-to-br"
          >
            Back to Main Page
          </button>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
