import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllSongs } from "../../services/resources";
import SongBlock from "../SongBlock/SongBlock";
import MaxWidthLayout from "../../layouts/MaxWidthLayout";

const Wrapper = styled.div`
  margin-top: 15px;
`;

const Songs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getSongs = async () => {
      const data = await getAllSongs();
      setSongs(data);
    };

    getSongs();
  }, []);
  return (
    <Wrapper>
        {songs.map((song, ind) => {
          return <SongBlock key={song.id} {...song} />;
        })}
    </Wrapper>
  );
};

export default Songs;
