import React from "react";
import { dummyShowsData } from "../assets/assets";
import Moviecr from "../components/Moviecr";
import Blurr from "../components/Blurr";
const movies = () => {
  return dummyShowsData.length > 0 ? (
    <div className="relative my-40 mb-60 px-6 md:px-16
    lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]">
      {/* upar ka css hai for the bloack container wrna bhut upar aa rha tha */}
      <Blurr top='150px' left='0px'/>
      <Blurr bottom='50px' right='50px'/>
      <h1 className="text-lg font-medium my-4">Now Showing</h1>
      <div className="flex flex-wrap max-sm:justify-center gap-8">
        {/* upar ki class se css mili taaki yeh as a card side by side show ho wrna vertically show ho rahe the */}
        {dummyShowsData.map((movie) => (
          <Moviecr movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">NO MOVIES AVAILABLE</h1>
    </div>
  );
};

export default movies;
