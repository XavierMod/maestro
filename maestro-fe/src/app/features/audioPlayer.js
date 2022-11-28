import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "audioPlayer",
  initialState: {
    activeAudio: {
      title: "Song title",
      url: "http://localhost:3000/uploads/watermelon.mp3",
    },
    isPlaying: false,
    isHidden: true,
  },
  reducers: {
    setHideStatus: (state, action) => {
      state.isHidden = action.payload;
    },
    setPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    playAudio: (state, action) => {
      state.activeAudio = {
        title: action.payload.title,
        url: action.payload.url,
      };
      state.isPlaying = true;
    },
  },
});

export const { setHideStatus, setPlaying } = slice.actions;

export default slice.reducer;
