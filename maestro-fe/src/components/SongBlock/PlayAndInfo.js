import React from "react";
import PlayButton from "./PlayButton";
import SongInfo from "./SongInfo";
 
const PlayAndInfo = (props) => {
  return (
    <div>
      <PlayButton onPress={props.onPress} isPlaying={props.isPlaying} />
      <SongInfo name={props.name} />
    </div>
  );
};

export default PlayAndInfo;
