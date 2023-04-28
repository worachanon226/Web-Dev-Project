import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Host from "./Pages/Host";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Guest from "./Pages/Guest";
import Nav from "./Pages/Components/Nav";
import ManageHost from "./Pages/Components/ManageHost";
import VisitHost from "./Pages/Components/VisitHost";
import Profile from "./Pages/Profile";
import Service from "./Pages/Service";
import { ProtectedRoute, ProtectedRouteLogedin } from "./ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="host" element={<Host />} />
            <Route path="/host/:hostId" element={<ManageHost />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/service" element={<Service />} />
            <Route path="/guest/:hostId" element={<VisitHost />} />
          </Route>
          <Route element={<ProtectedRouteLogedin />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;