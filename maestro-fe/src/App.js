import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { getTokenFromStorage } from "./app/features/authenticationSlice";
import Error404 from "./views/Error404";
import Home from "./views/Home";
import Landing from "./views/Landing";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

function App() {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isUserAuthenticated
  );

  useEffect(() => {
    console.log('[App/Init - Get Token]');
    dispatch(getTokenFromStorage());

  }, [dispatch]);

  const renderAuthenticatedRoutes = () => {
    return (
      <Route path="/home" element={<Home />} />
    )
  }

  return (
    <Routes>
      {isUserAuthenticated ? renderAuthenticatedRoutes() : null}
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<SignIn />} />
    </Routes>
  );
}

export default App;
