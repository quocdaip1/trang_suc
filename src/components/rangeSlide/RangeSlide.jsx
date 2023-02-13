import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

export default function RangeSlider() {
  const [value, setValue] = useState([0,5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        min={0}
        max={10000}
        marks
        step={10}
      />
      <span className='text'>Filter Range: <span className='value'>${value[0]}</span> to <span className='value'>${value[1]}</span></span>
    </Box>
  );
}