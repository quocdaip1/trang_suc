import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function RangeSlider(props) {
  const { keyPrice, setKeyPrice } = props;

  const handleChange = (event, newValue) => {
    setKeyPrice(newValue);
  };

  return (
    <Box>
      <Slider
        value={keyPrice}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={10000}
        marks
        step={10}
      />
      <span className="text">
        Filter Range: <span className="value">${keyPrice[0]}</span> to{" "}
        <span className="value">${keyPrice[1]}</span>
      </span>
    </Box>
  );
}
