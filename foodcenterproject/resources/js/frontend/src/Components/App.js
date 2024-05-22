import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import BestMeals from "./BestMeals";
import Fitness from "./Fitness";
import MyFridge from "./MyFridge";
import CelebritiesFav from "./CelebritiesFav";
import AboutUs from "./AboutUs";
import Recettes from "./Recettes";
import Recette from "./Recette";

export default function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route path="/best-meal" element={<BestMeals />}>Best meals</Route>
              <Route path="/fitness" element={<Fitness />}>Fitness</Route>
              <Route path="/fridge" element={<MyFridge />}>My Fridge</Route>
              <Route path="/celebrities-fav" element={<CelebritiesFav />}>Celebrities Favorite</Route>
              <Route path="/about-us" element={<AboutUs />}>About us</Route>
              <Route path="/recettes" element={<Recettes />}>About us</Route>
              <Route path="/recette" element={<Recette />}>About us</Route>
          </Routes>
      </Router>
  );
}