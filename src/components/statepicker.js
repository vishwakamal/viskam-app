import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import "./index.css";

import { getAllStates } from "../api/usTrackerAPI";

export const StatePicker = ({ handleStateChange }) => {
  const [fetchedStates, setUSStates] = useState([]);
  useEffect(() => {
    const getAPI = async () => {
      setUSStates(await getAllStates());
    };

    getAPI();
  }, [setUSStates]);

  return (
    <FormControl className="formControl">
      <stong>Today in</stong>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleStateChange(e.target.value)}
      >
        <option value="us">USA</option>
        {fetchedStates.map((usState, i) => (
          <option key={i} value={usState}>
            {usState}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
