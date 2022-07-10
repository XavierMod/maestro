import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getTokenFromStorage } from "./app/features/authenticationSlice";
import Loading from "./components/library/Loading";
import SignUpLanding from "./components/SignUp/SignUpLanding";
import { status } from "./services/resources";
import Error404 from "./views/Error404";
import Home from "./views/Home";
import Landing from "./views/Landing";
import ServerDown from "./views/ServerDown";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

function App() {
  const [isServerUp, setServer] = useState(null);

  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isUserAuthenticated
  );

  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const getStatus = await (await status()).data;
        console.log("getstatus", getStatus);
        if (getStatus.status === "OK") {
          setServer(true);
          return true;
        }
      } catch (err) {
        setServer(false);
        return false;
      }
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
        <Route index element={<Landing />} />
        <Route path="signup/*" element={<SignUp />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    );
  }

  if (isServerUp === false) {
    return <ServerDown />;
  }

  return <Loading />;
}

export default App;
