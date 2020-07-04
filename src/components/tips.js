import React from "react";
import "./index.css";
import Workout from "../assets/images/workout.jpg";
import TikTok from "../assets/images/tiktok.jpg";
import YouTube from "../assets/images/youtube.jpg";
export const Tips = () => (
  <React.Fragment>
    <div className="tips">
      <h1 className="h1-title">Tips and Tricks</h1>
      <div>
        <h2 className="h2-title">
          Tips to prevent yourself from getting COVID-19
        </h2>

        <ul className="list">
          <li>Stay home if you can most of the time</li>
          <li>Practice social distancing</li>
          <li>Wash your hands often</li>
          <li>Cover your cough</li>
        </ul>
      </div>
      <h2 className="h2-title">Cool Tricks to not become bored</h2>
      <div class="imgcontainer">
        <div class="container_text">
          <h4>Workout and get strong</h4>
        </div>
        <img class="container_image" src={Workout} />
      </div>
      <div class="imgcontainer">
        <div class="container_text">
          <h4>Make TikToks</h4>
        </div>
        <img class="container_image" src={TikTok} />
      </div>
      <div class="imgcontainer">
        <div class="container_text">
          <h4>Become a YouTuber</h4>
        </div>
        <img class="container_image" src={YouTube} />
      </div>
    </div>
  </React.Fragment>
);
