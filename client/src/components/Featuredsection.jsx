import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Blurr from "./Blurr";
import { dummyShowsData } from "../assets/assets";
// import movies from "../pages/movies";
import Moviecr from "./Moviecr";

const Featuredsection = () => {
    const navigate=useNavigate()
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden">
      <div className="relative flex items-center justify-between pt-20 pb-10">
        <p className="text-gray-300 font-medium text-lg">Now Showing</p>
        <Blurr top='0' right='80px'/>
        <button onClick={()=>navigate('/movies')} className="group flex items-center gap-2 text-sm text-gray-300 cursor-pointer">
          View All
          <ArrowRight className="group-hover:translate-x-0.5 transition w-4.5 h-4.5" />
          {/* | Class                         | What it does                              |
| ----------------------------- | ----------------------------------------- |
| `group-hover:translate-x-0.5` | Move right 2px when parent is hovered     |
| `transition`                  | Animate that movement smoothly            |
| `w-4.5` / `h-4.5`             | Set size to 18x18 pixels (custom spacing) | */}
        </button>
      </div>
      <div className="flex flex-wrap max-sm:justify-center gap-8 mt-8"> 
        {dummyShowsData.slice(0,4).map((show)=>(
            <Moviecr key={show._id} movie={show} />
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <button onClick={()=>{navigate('/movies');scrollTo(0,0)}}
         className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition
        rounded-md font-medium cursor-pointer">
            {/* yha upar primary ke baad red daalne se show more wale button ka color chnage ho rha phele simple likh kr aa rha tha
            fir hover krne pr red ho rha tha  */}
            Show More
        </button>
        
      </div>
    </div>
  );
};

export default Featuredsection;
