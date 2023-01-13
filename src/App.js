import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="container App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SOME RANDOM TEXT SOME RANDOM <br></br> TEXT SOME RANDOM TEXT SOME
          RANDOM TEXT
        </p>
      </header>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;