import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Favorites from "./components/Favorites";
import AddBlog from "./components/AddBlog";
import AboutUs from "./components/AboutUs";
import CardBlog from "./components/CardBlog";

let cars = [
  {
    title: "Cars1",
    category: "sedan1",
    content:
      "Sedan - a closed car body with a trunk structurally separated from the passenger compartment, without a lifting door in the rear wall, usually with two or three rows of full-size seats.",
    id: 1,
  },
  {
    title: "Cars2",
    category: "sedan2",
    content:
      "Sedan - a closed car body with a trunk structurally separated from the passenger compartment, without a lifting door in the rear wall, usually with two or three rows of full-size seats.",
    id: 2,
  },
  {
    title: "Cars3",
    category: "sedan3",
    content:
      "Sedan - a closed car body with a trunk structurally separated from the passenger compartment, without a lifting door in the rear wall, usually with two or three rows of full-size seats.",
    id: 3,
  },
  {
    title: "Cars4",
    category: "sedan4",
    content:
      "Sedan - a closed car body with a trunk structurally separated from the passenger compartment, without a lifting door in the rear wall, usually with two or three rows of full-size seats.",
    id: 4,
  },
  {
    title: "Cars5",
    category: "sedan5",
    content:
      "Sedan - a closed car body with a trunk structurally separated from the passenger compartment, without a lifting door in the rear wall, usually with two or three rows of full-size seats.",
    id: 5,
  },
];
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home cars={cars} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/AddBlog" element={<AddBlog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/CardBlog" element={<CardBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
