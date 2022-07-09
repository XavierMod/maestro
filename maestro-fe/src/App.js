import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getTokenFromStorage } from "./app/features/authenticationSlice";
import { status } from "./services/resources";
import Error404 from "./views/Error404";
import Home from "./views/Home";
import Landing from "./views/Landing";
import ServerDown from "./views/ServerDown";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

function App() {
  const [isServerUp, setServer] = useState(false);
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isUserAuthenticated
  );

  useEffect(() => {
    const checkServerStatus = async () => {
      const getStatus = await (await status()).data;
      console.log("getstatus", getStatus);
      if (getStatus.status === "OK") {
        setServer(true);
        return true;
      }
      return false;
    };

    checkServerStatus();

    dispatch(getTokenFromStorage());
  }, [dispatch]);

  const renderAuthenticatedRoutes = () => {
    return <Route path="/home" element={<Home />} />;
  };

  if (isServerUp) {
    return (
      <Routes>
        {isUserAuthenticated ? renderAuthenticatedRoutes() : null}
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<SignIn />} />
      </Routes>
    );
  }

  return <ServerDown />;
}

export default App;
