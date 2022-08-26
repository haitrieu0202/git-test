/* eslint-disable no-unused-vars */
import React from "react";
import DishDetail from "./DishDetailComponent";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import About from "./AboutComponent";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { propTypes } from "redux-form";

function Main() {
  const dishes = useSelector((state) => state.dishes);
  const comments = useSelector((state) => state.comments);
  const leaders = useSelector((state) => state.leaders);

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition
          classNames="page"
          timeout={300}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route exact path="/menu" element={<Menu />} />
            <Route
              exact
              path="/menu/:id"
              element={<DishDetail dishes={dishes} comments={comments} />}
            />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/about" element={<About leaders={leaders} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};
export default Main;
