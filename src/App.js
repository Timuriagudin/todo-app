import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodosContainer from "./containers/TodosContainer";
import ContactContainer from "./containers/ContactContainer";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import { TodoProvider } from "./context/TodoContext";
import "./App.css";
import About from "./components/About";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

const App = () => {
  return (
    <Router>
      <TodoProvider>
        <div id="root">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todos" element={<TodosContainer />} />
              <Route path="/contact" element={<ContactContainer />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element= {<Privacy />} />
              <Route path="/terms" element= {<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </TodoProvider>
    </Router>
  );
};

export default App;
