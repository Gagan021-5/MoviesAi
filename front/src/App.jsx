import { useState, useEffect } from "react";
import Moviecard from "./components/Moviecard";
import { IoSparkles } from "react-icons/io5";
import axios from "axios";
import { LuSparkle } from "react-icons/lu";
import BlurText from "./components/AnimText";
import { BackgroundBeamsWithCollision } from "./components/frontui,";

function App() {
  const [movies, setmovies] = useState([]);
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const onreload = () => {

  };

  const getmove = async () => {
    if (!query.trim()) return;

    setloading(true);
    setmovies([]);

    try {
      const response = await axios.post(`https://movieback-ylkd.onrender.com/ai`, {
        prompt: query,
      });

      const generatedmovie = response.data.movies;

      if (generatedmovie) {
        setmovies(generatedmovie);
      }
    } catch (error) {
      console.log("Error fetching movies:", error);
      seterror("Something went wrong. Try again later.");
    } finally {
      setloading(false);
    }
  };

  return (
    <>
    <BackgroundBeamsWithCollision className="min-h-screen w-full">
      <div className="min-h-screen w-full flex flex-col justify-center relative z-10">
        <h1 className=" heading text-violet-600 text-4xl font-extrabold text-center p-5 h-fit w-auto">
          MoviesCameo
        </h1>
      
        <div className="w-full min-h-screen">
          <div className="w-full h-55 pb-10 flex justify-center items-center max-sm:gap-3 gap-2 max-sm:flex-col">
            <input
              onChange={(e) => {
                setquery(e.target.value);
              }}
              value={query}
              type="text"
              className="w-1/3 shadow-lg h-10 p-2 bg-gray-800 font-semibold text-white rounded-2xl outline-none  max-sm:w-80"
              placeholder="Ask for a Movie"
            />
            <button
              onClick={getmove}
              className=" p-2 shadow-lg bg-gradient-to-r inline-flex gap-2 font-semibold from-violet-800 to-indigo-700 rounded-2xl text-white cursor-pointer"
            >
              <IoSparkles className="my-auto" /> Recommend
            </button>
          </div>
          <div className="w-full h-auto gap-7 flex flex-wrap justify-center  ">
            {loading ? (
              <p className="text-gray-500 sm:text-3xl font-semibold animate-pulse gap-3 inline-flex max-sm:text-2xl ">
                Loading result <LuSparkle className="my-auto animate-spin" /> 
              </p>
            ) : movies.length > 0 ? (
              movies.map((val) => (
                <Moviecard
                  key={val.imdbID}
                  image={val.Poster}
                  title={val.Title}
                  year={val.Year}
                  type={val.Type}
                />
              ))
            ) : (
              <>
                <BlurText
                  text="Your Personal AI Movie Recommender"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={onreload}
                  className="text-violet-700 sm:text-4xl font-bold flex justify-center text-center sm:mt-10 max-sm:p-2 max-sm:text-3xl "
                />
              </>
            )}
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
    </>
  );
}

export default App;
