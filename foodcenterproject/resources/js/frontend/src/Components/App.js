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

export default function App() {
  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />} />
              <Route pathe="/best-meal" element={<BestMeals />}>Best meals</Route>
              <Route pathe="/fitness" element={<Fitness />}>Fitness</Route>
              <Route pathe="/fridge" element={<MyFridge />}>My Fridge</Route>
              <Route pathe="/celebrities-fav" element={<CelebritiesFav />}>Celebrities Favorite</Route>
              <Route pathe="/about-us" element={<AboutUs />}>About us</Route>
          </Routes>
      </Router>
  );
}