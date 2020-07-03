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
          <li>Cover yourrrr cough</li>
        </ul>
      </div>
      <div>
        <div>
          <div>
            <img src={Workout} width="400" height="450" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="h2-title">Cool Tricks to not become bored</h2>
        <ul className="list">
          <li>Workout and get strong</li>
          <li>Have a Movie Marathon</li>
          <li>Play video games</li>
          <li>Make TikToks</li>
          <li>Listen to podcasts or new music albums/genres</li>
          <li>
            Try learning new things such as cooking, becoming a YouTuber, or
            photo editing
          </li>
        </ul>
      </div>
    </div>
  </React.Fragment>
);
