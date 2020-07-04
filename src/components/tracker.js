import React from "react";
import { getCurrentData } from "../api/usTrackerAPI";
import "./index.css";
import { StatePicker } from "./statepicker";
import { Cards } from "./cards";

// import coronaImage from "../assets/images/covid.png";

class Tracker extends React.Component {
  state = {
    data: {},
    usState: "",
  };

  async componentDidMount() {
    const data = await getCurrentData("us");

    this.setState({ data });
  }

  handleStateChange = async (usState) => {
    const data = await getCurrentData(usState);

    this.setState({ data, usState: usState });
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="tracker-container">
        {/* <img className="image" src={coronaImage} alt="COVID-19" /> */}
        <StatePicker handleStateChange={this.handleStateChange} />
        <Cards data={data} />
      </div>
    );
  }
}

export default Tracker;
