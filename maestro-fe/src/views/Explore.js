import React from "react";
import { Route, Routes } from "react-router-dom";
import ExploreNavBar from "../components/Explore/ExploreNavBar";
import Musicians from "../components/Explore/Musicians";
import Saved from "../components/Explore/Saved";
import Songs from "../components/Explore/Songs";
import AppLayout from "../layouts/AppLayout";

const Explore = () => {
  return (
    <AppLayout>
      <ExploreNavBar />
      <Routes>
        <Route index element={<Songs />} />
        <Route path="musicians" element={<Musicians />} />
        <Route path="saved" element={<Saved />} />
      </Routes>
    </AppLayout>
  );
};

export default Explore;
