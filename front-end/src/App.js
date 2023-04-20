
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Host from "./Pages/Host";
// import Login from "./Pages/Login";
import Guest from "./Pages/Guest";
import Nav from "./Pages/Components/Nav";
import ManageHost from "./Pages/Components/ManageHost";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/host" element={<Host />} />
          <Route path="/host/:hostid" element={<ManageHost />} />
          <Route path="/guest" element={<Guest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
