import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [hobby, setHobby] = useState("");
  const [language, setLanguage] = useState("");
  const [occupation, setOccupation] = useState("");
  const [color, setColor] = useState("");
  const [game, setGame] = useState("");

  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${API_URL}/home`, {
        hobby,
        language,
        occupation,
        color,
        game,
      })
      .then((result) => {
        console.log(result);
        navigate("/msg");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home-container">

      <h2 className="home-title">Welcome</h2>

      <div className="logout-link">
        <Link to={"/login"} className="logout-link">Logout</Link>
      </div>

      <div className="home-page">

        <form onSubmit={handleSubmit} className="home-page-form">

          <div>
            <h3 className="home-form-title">Fill the form</h3>
            <label htmlFor="">Hobby</label>
            <input
              type="text"
              placeholder="Enter your hobby"
              required
              onChange={(event) => setHobby(event.target.value)}
            />

            <label htmlFor="">Mother tongue</label>
            <input
              type="text"
              placeholder="Enter Your mother tongue"
              required
              onChange={(event) => setLanguage(event.target.value)}
            />

            <label htmlFor="">Occupation</label>
            <input
              type="text"
              placeholder="Enter your occupation"
              required
              onChange={(event) => setOccupation(event.target.value)}
            />

            <label htmlFor="">Favourite color</label>
            <input
              type="text"
              placeholder="Enter your fav color"
              required
              onChange={(event) => setColor(event.target.value)}
            />

            <label htmlFor="">Favourite game</label>
            <input
              type="text"
              placeholder="Enter your fav game"
              required
              onChange={(event) => setGame(event.target.value)}
            />

            <button type="submit" className="btn home-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
