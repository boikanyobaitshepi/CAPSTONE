import React from "react";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import Podcasts from "./Components/Pages/Podcasts";
import ShowDetails from "./Components/Pages/ShowDetails";
import Search from "./Components/Search";
import SignOut from "./Components/Pages/SignOut";
import NavBar from "./Components/NavBar";
import Seasons from "./Components/SeasonList";
import Audio from "./Components/AudioPlayer";
import Login from "./Components/Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/signOut" element={<SignOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />

        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/podcasts/:id" element={<ShowDetails />} />

        <Route path="/showDetails/:id" element={<Seasons />} />

        <Route path="/seasonList/:id" element={<Audio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
