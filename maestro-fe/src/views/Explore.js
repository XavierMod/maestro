import React from "react";
import { Route, Routes } from "react-router-dom";
import ExploreNavBar from "../components/Explore/ExploreNavBar";
import Musicians from "../components/Explore/Musicians";
import Saved from "../components/Explore/Saved";
import Songs from "../components/Explore/Songs";
import AppLayout from "../layouts/AppLayout";
import MaxWidthLayout from "../layouts/MaxWidthLayout";

const Explore = () => {
  return (
    <AppLayout>
      <MaxWidthLayout>
        <ExploreNavBar />
        <Routes>
          <Route index element={<Songs />} />
          <Route path="musicians" element={<Musicians />} />
          <Route path="saved" element={<Saved />} />
        </Routes>
      </MaxWidthLayout>
    </AppLayout>
  );
};

export default Explore;
