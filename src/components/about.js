import React from "react";
import "./index.css";
export const About = () => (
  <React.Fragment>
    <div className="About">
      <h1 className="h1-title">What is COVID-19?</h1>
      <div>
        COVID-19 is a type of coronavirus that is causing a{" "}
        <strong>global pandemic</strong>. The reason behind why we do not have a
        cure is because COVID-19 is a novel coronavirus, this means that we
        humans have never seen this type of coronavirus before on Planet Earth.
        COVID-19 is affecting many people at a alarmingly fast rate. It can be
        spread from person to person so you must take neccesary precautions and
        follow certain guidelines as listed below.
      </div>
      <h2 className="h2-title">Neccesary Precautions</h2>
      <div>
        Some of the neccesary precautions you should follow are
        <ul>
          <li>Wearing a mask outside the house</li>
          <li>Following social distancing(6 feet or 2 meters)</li>
          <li>
            Disinfecting frequently touched surfaces such as keyboards,
            smartphones, countertops, etc
          </li>
          <li>
            Wash your hands often with soap and water for at least 20 seconds,
            or use an alcohol-based hand sanitizer that contains at least 60%
            alcohol
          </li>
        </ul>
      </div>
      <h2 className="h2-title">What to do if you have COVID-19</h2>
      <div>
        If you or someone you know has COVID-19 follow these steps accordingly
        <ol>
          <li>Stay home if you are sick, except to get medical care.</li>
          <li>Avoid public transportation, ride-sharing, or taxis</li>
          <li>Isolate yourself from other people and pets in your home</li>
          <li>If you need medical attention, call ahead</li>
        </ol>
      </div>
      <h2 className="h2-title">Symptoms</h2>
      <div>
        <ul>
          <li>Fever or chills</li>
          <li>Cough</li>
          <li>Shortness of breath or difficulty breathing</li>
          <li>Fatigue</li>
          <li>Muscle or body aches</li>
          <li>Headache</li>
          <li>New loss of taste or smell</li>
          <li>Sore throat</li>
          <li>Congestion or runny nose</li>
          <li>Nausea or vomiting</li>
          <li>Diarrhea</li>
        </ul>
      </div>
      <h2 className="h2-title">
        <strong>Emergency Symptoms</strong>
      </h2>
      <div>
        <ul>
          <li>Trouble breathing</li>
          <li>Persistent pain or pressure in the chest</li>
          <li>New confusion</li>
          <li>Inability to wake or stay awake</li>
          <li>Bluish lips or face</li>
        </ul>
      </div>
    </div>
  </React.Fragment>
);
