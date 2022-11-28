import React from "react";
import Title from "../library/styles/Title";
import InfoBlock from "./InfoBlock";

const SongInfo = (props) => {
  return (
    <div>
      <Title
        style={{ fontSize: "25px", letterSpacing: -1.2 }}
        className="large"
      >
        {props.name}
      </Title>
      <InfoBlock text="03:21" />
      <InfoBlock text="#punkrock" />
      <InfoBlock text="#altrock" />
    </div>
  );
};

export default SongInfo;
