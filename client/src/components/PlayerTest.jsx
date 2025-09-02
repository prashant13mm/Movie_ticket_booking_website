import ReactPlayer from "react-player";

function PlayerTest() {
  return (
    <div className="p-4">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        controls
        width="100%"
        
      />
      

    </div>
  );
}

export default PlayerTest;
