import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
