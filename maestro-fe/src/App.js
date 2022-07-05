import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Error404 from "./views/Error404";
import Home from "./views/Home";
import Landing from "./views/Landing";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

function App() {
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isUserAuthenticated
  );

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
