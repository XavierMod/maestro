import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiMusic, BiUpArrow } from "react-icons/bi";
import styled, { useTheme } from "styled-components";
import { setHideStatus, setPlaying } from "../../app/features/audioPlayer";
import PlayAndInfo from "../SongBlock/PlayAndInfo";
import { Tooltip } from "@mui/material";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
`;

const HideIconWrapper = styled.div`
  background: ${(props) => props.theme.colors.utilities.text};
  display: inline-block;
  border-radius: 300px;
  cursor: pointer;
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const AudioPlayerContainer = styled.div`
  min-height: 190px;
  width: 100%;
  background: ${(props) => props.theme.colors.backgrounds.dark_2};
  border-radius: 2px;
  overflow: hidden;
  visibility: ${(props) => (props.isHidden ? "collapse" : "visible")};
`;

const DurationLineContainer = styled.div`
  position: absolute;
  width: 100%;
  padding-bottom: 20px;
  cursor: pointer;

  .line {
    transition: all ease 0.2s;
  }

  &:hover {
    .line {
      height: 10px;
    }
  }
`;

const DurationLineWrapper = styled.div`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  height: 2px;
  position: relative;
`;

const DurationLine = styled.div`
  background: white;
  position: absolute;
  top: 0;
  height: 100%;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-top: 10px;
`;

const Flex = styled.div`
  flex: 33.33%;
`;

const AudioPlayer = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const activeAudio = useSelector((state) => state.audioPlayer?.activeAudio);
  const isHidden = useSelector((state) => state.audioPlayer?.isHidden);
  const isPlaying = useSelector((state) => state.audioPlayer?.isPlaying);
  const activeAudioUrl = useSelector(
    (state) => state.audioPlayer?.activeAudio?.url
  );
  const audioElem = useRef();
  const [activeAudioProgress, setActiveAudioProgress] = useState(0);

  const playStopAudio = (value) => {
    dispatch(setPlaying(value));
    if (!isPlaying) {
      audioElem.current.play();
      return;
    }
    audioElem.current.pause();
  };

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const currentTime = audioElem.current.currentTime;
    setActiveAudioProgress((currentTime / duration) * 100);
  };

  const selectDifferentTime = () => {
    audioElem.current.currentTime = audioElem.current.currentTime / 2;
  }

  return (
    <Wrapper>
      <audio ref={audioElem} src={activeAudioUrl} onTimeUpdate={onPlaying} />
      <Tooltip title="Open current track/song">
      <HideIconWrapper onClick={() => dispatch(setHideStatus(!isHidden))}>
        <BiMusic fill={theme.colors.backgrounds.dark} />
      </HideIconWrapper>
      </Tooltip>
      <AudioPlayerContainer isHidden={isHidden}>
        <DurationLineContainer>
          <DurationLineWrapper onClick={() => selectDifferentTime()} className="line">
            <DurationLine
              className="line"
              style={{ width: `${activeAudioProgress}%` }}
            />
          </DurationLineWrapper>
        </DurationLineContainer>
        <ContentWrapper>
          <Flex>
            {activeAudio ? (
              <PlayAndInfo
                onPress={(value) => playStopAudio(value)}
                isPlaying={isPlaying}
                name={activeAudio.title}
              />
            ) : null}
          </Flex>
          <Flex>2</Flex>
          <Flex></Flex>
        </ContentWrapper>
      </AudioPlayerContainer>
    </Wrapper>
  );
};

export default AudioPlayer;
